var menu =
    {
        "COMMENT": "Change shaders, enable music, and other stuff",
        "type": "node",
        "name": "rootNode",

        "userData":
            {
                "name": "menu",
                //"scripts": ["menuControl"],
                "camera": "cameram",
                "esc": "level1"
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
                },
                {
                "type": "text",
                "font": "helvetiker_regular",
                "name": "text1",
                "text": "Restart",
                "size": 1,
                "translate": [0, 2, 0],
                "userData":
                    {
                        "scripts": ["select"],
                        "select": false,
                        "scene": "level0",
                    },

                "material":
                    {
                        "type": "meshPhongMaterial",
                        "name": "sm2",
                        "color": [1.0, 0.5, 0.1],
                        "specular": [1.0, 0.5, 0.5],
                    }
            },
                {
                "type": "text",
                "font": "helvetiker_regular",
                "name": "text1",
                "text": "Glitch",
                "size": 1,
                "translate": [0, 0, 0],
                "userData":
                    {
                        "scripts": ["selectRender"],
                        "select": false,
                        "render": "glitchPassRenderer"
                    },

                "material":
                    {
                        "type": "meshPhongMaterial",
                        "name": "sm2",
                        "color": [1.0, 0.5, 0.1],
                        "specular": [1.0, 0.5, 0.5],
                    }
            },
                {
                "type": "text",
                "font": "helvetiker_regular",
                "name": "text2",
                "text": "Resume",
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
                    }
            },

            ]
    };