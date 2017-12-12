var menu =
    {
        "COMMENT": "Change shaders, enable music, and other stuff",
        "type": "node",
        "name": "rootNode",

        "userData":
            {
                "name": "menu",
                "scripts": ["menuControl"],
                "camera": "cameram"
            },

        "children":
            [

                {
                    "COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
                    "type": "perspectiveCamera",
                    "name": "cameram",
                    "eye": [0, 0, 15],
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
                }

            ]
    };