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
                    "COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
                    "type": "perspectiveCamera",
                    "name": "camera1",
                    "eye": [0, 5, 15],
                    "center": [0, 0, 0],
                    "vup": [0, 1, 0],
                    "fov": 30
                },

                {
                    "type": "hemisphereLight",
                    "name": "hlight",
                    "skyColor": [0.7, 0.7, 1.0],
                    "groundColor": [0.2, 0.0, 0.1],
                    "intensity" : "1"
                },


            ]
    };