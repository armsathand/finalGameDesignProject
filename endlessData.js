var level1 =
{ 
"COMMENT": "A CUBE, SPHERE, AND DIRECTIONAL LIGHTS",
"type": "node",
"name": "rootNode",

"userData":
{
    "name": "level1",
	"scripts": ["sceneControl"],
    "camera": "camera1",
    "esc": "menu"
},

"children":
[
	{
		"COMMENT": "Player",
		"type": "objFile",
		"name": "Player",
		"scale": [2,2,2],
		"translate": [0,1.1,0],
        "rotate": [0, 1, 0, 1.57],
        "url": "osubot.obj",
        "material":
            {
                "type": "meshPhongMaterial",
                "name": "sm2",
                "diffuseColor": [1, 1, 1],
                "specularColor": [0.01, 0.01, 0.01],
                "map": "osubotAObake.png",
                "bumpMap": "osubotAObake.png",
                "bumpScale": 0.002,
                "shininess": 1
            },
        "userData": {
        "scripts": ["gravity", "movement"],
        },
	},

    {
        "COMMENT": "Start Area",
        "type": "mesh",
        "name": "start",
        "geometry": "cube",
        "scale": [2.5,1,1],
        "translate": [2.5,0,0],
        "material":
            {
                "type": "meshLambertMaterial",
                "name": "cubeMat",
                "diffuseColor": [1, 0, 0],
            }
    },
    {
        "type": "directionalLight",
        "name": "dlight1",
        "color": [1, 1, 1],
        "position": [0, 0, 20 ],
        "intensity": .3,
        "castShadow": true,
        "userData": {
            "scripts": ["follow"],
            "target": "Player"
        },
    },
	{
		"COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 5, 25],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30,
        "userData": {
		    "scripts":["follow"],
            "target":"Player",
            "offset": 5
        }
	},
    {
        "type": "mesh",
        "name": "theCube",
        "scale": [20, 15, .14],
        "translate": [0, 0, -10],
        "geometry": "cube",
        "material":
            {
                "type": "meshPhongMaterial",
                "name": "cubeMat",
                "diffuseColor": [0.5, 0.4, 0.4],
                "specularColor": [0.01, 0.01, 0.01],
                "map": "backgroundone.jpg",
                "shininess": 2
            },
        "userData": {
            "scripts":["follow"],
            "target":"Player",
        }
    },

    {
        "type": "hemisphereLight",
        "name": "hlight",
        "skyColor": [0.7, 0.7, 1.0],
        "groundColor": [0.2, 0.0, 0.1],
        "intensity" : ".5"
    },
   /* {
        "type": "node",
        "name": "particleSystem",
        "userData":
            {
                "scripts": ["particleScript"],
            },
        "children":
            [
                // sprite
                {
                    "type": "sprite",
                    "name": "s",
                    "scale": [0.1, 0.1, 0.1],
                    "translate": [0, 1, 0],
                    "material":
                        {
                            "type": "spriteMaterial",
                            "name": "smat1",
                            "color": [1.0, 0.0, 0.0],
                            "map": "dot.png",
                        },
                    "userData":
                        {
                            "vx": 0.0,
                            "vy": 0.0,
                            "vz": 0.0,
                            "life": 1,
                        }
                },
            ]
    },*/

]
};

