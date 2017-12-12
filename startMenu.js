var level0 = { 

"type": "node",
"name": "rootNode",

"userData": {
    "name": "level0",
    "camera": "camera0"
},

"children":
[
	// CAMERA
	{
		"type": "perspectiveCamera",
		"name": "camera0",
		"eye": [0, 0, 25],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
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
                "shininess": 200
            },
    },

	// LIGHTS
	{
		"type": "directionalLight",
		"name": "dlight1",
		"color": [1, 1, 0.5],
		"position": [0, 2, 5],
        "intensity": .4,
        "castShadow": true,
	},
	{
		"type": "directionalLight",
		"name": "dlight2",
		"color": [0.1, 0.1, 0.3],
		"position": [0, -2, 5],
        "intensity": .4,
        "castShadow": true,
	},
	{
		"type": "hemisphereLight",
		"name": "hlight",
		"skyColor": [0.3, 0.3, 0.6],
		"groundColor": [0.2, 0.3, 0],
		"intensity": .3
	},

	// text
	{
		"type": "text",
		"font": "helvetiker_regular",
		"name": "text1",
		"text": "ENDLESS",
		"size": 2.5,
        "translate": [0, 2, 0],
		"userData": 
		{
			"scripts": ["select"],
			"select": false,
			"scene": "level1"
		},
		
		"material":
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"color": [1.0, 0.5, 0.1],
			"specular": [1.0, 0.5, 0.5],
            "shininess": 10
		}
	},
    {
        "type": "text",
        "font": "helvetiker_regular",
        "name": "text1",
        "text": "Click to Begin",
        "size": 1,
        "translate": [0, -2, 0],
        "userData":
            {
                "scripts": ["select"],
                "select": false,
                "scene": "level1"
            },

        "material":
            {
                "type": "meshPhongMaterial",
                "name": "sm2",
                "color": [1.0, 0.5, 0.1],
                "specular": [1.0, 0.5, 0.5],
                "shininess": 10
            }
    },

]
}

