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
		"type": "mesh",
		"name": "Player",
		"geometry": "sphere",
		"scale": [1,1,1],
		"translate": [0,2,0],
		"material":
			{
            "type": "meshLambertMaterial",
            "name": "cubeMat",
            "diffuseColor": [0, 1, .05],
        	}
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
		"COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 5, 15],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
	},
    {
        "type": "mesh",
        "name": "theCube",
        "scale": [26, 26, .14],
        "translate": [0, 0, -10],
        "geometry": "cube",
        "material":
            {
                "type": "meshPhongMaterial",
                "name": "cubeMat",
                "diffuseColor": [0.5, 0.4, 0.4],
                "specularColor": [0.01, 0.01, 0.01],
                "shininess": 200
            }
    },

    {
        "type": "hemisphereLight",
        "name": "hlight",
        "skyColor": [0.7, 0.7, 1.0],
        "groundColor": [0.2, 0.0, 0.1],
        "intensity" : "1"
    }

]
};

