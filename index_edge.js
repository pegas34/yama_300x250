/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0', '0', '300px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
                        },
                        {
                            id: 'road',
                            type: 'image',
                            rect: ['-117px', '178px', '416px', '3px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"road.png",'0px','0px']
                        },
                        {
                            id: 'pit1',
                            display: 'block',
                            type: 'image',
                            rect: ['-46px', '134px', '46px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pit.png",'0px','0px']
                        },
                        {
                            id: 'pit2',
                            display: 'none',
                            type: 'image',
                            rect: ['-46px', '190px', '46px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pit.png",'0px','0px']
                        },
                        {
                            id: 'pit3',
                            display: 'none',
                            type: 'image',
                            rect: ['-46px', '134px', '46px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pit.png",'0px','0px']
                        },
                        {
                            id: 'pit4',
                            display: 'none',
                            type: 'image',
                            rect: ['-46px', '190px', '46px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pit.png",'0px','0px']
                        },
                        {
                            id: 'pit5',
                            display: 'none',
                            type: 'image',
                            rect: ['-46px', '185px', '46px', '37px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pit.png",'0px','0px']
                        },
                        {
                            id: 'car',
                            type: 'image',
                            rect: ['300px', '171px', '99px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"car.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['-24px', '51px', '347px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ВОДІЇ КИЄВА ЄДНАЮТЬСЯ</p>",
                            align: "center",
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [23, "px"], "rgba(255,255,0,1.00)", "400", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['0px', '89px', '300px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ПРОТИ ПОГАНИХ ДОРІГ</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [19, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['0px', '35px', '300px', '57px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ДІЗНАЙСЯ ЯК ПРАЦЮЄ&nbsp;\nСОЦІАЛЬНИЙ СПІЛЬНОКОШТ</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [19, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'logo',
                            display: 'none',
                            type: 'image',
                            rect: ['42px', '92px', '216px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['0px', '92px', '300px', '37px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​НАРОДНИЙ ЗАСІБ ПРОТИ ЯМ</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [19, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '300px', '250px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10302,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "location",
                            385,
                            405,
                            "easeOutQuad",
                            "${Text2}",
                            [[150, 103, 0, 0, 0, 0,0],[150, 93, 0, 0, 0, 0,10]]
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pit5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            8310,
                            0,
                            "linear",
                            "${pit5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            10302,
                            0,
                            "linear",
                            "${pit5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pit3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${pit3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            6434,
                            0,
                            "linear",
                            "${pit3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "opacity",
                            3110,
                            390,
                            "easeOutQuad",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            6000,
                            250,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pit2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${pit2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            3940,
                            0,
                            "linear",
                            "${pit2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${logo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            3426,
                            0,
                            "easeInQuad",
                            "${logo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            10302,
                            0,
                            "easeOutQuad",
                            "${logo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            6847,
                            0,
                            "easeInOutQuad",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            10302,
                            0,
                            "easeOutQuad",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "location",
                            0,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid135",
                            "location",
                            606,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid136",
                            "location",
                            1212,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid137",
                            "location",
                            1818,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid138",
                            "location",
                            2424,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid139",
                            "location",
                            3030,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid140",
                            "location",
                            3636,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid141",
                            "location",
                            4242,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid142",
                            "location",
                            4848,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid143",
                            "location",
                            5454,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid144",
                            "location",
                            6060,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid145",
                            "location",
                            6666,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid146",
                            "location",
                            7272,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid147",
                            "location",
                            7878,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid148",
                            "location",
                            8484,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid149",
                            "location",
                            9090,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid150",
                            "location",
                            9696,
                            606,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid75",
                            "location",
                            0,
                            829,
                            "linear",
                            "${car}",
                            [[349.5, 176.5, 0, 0, 0, 0,0],[317.97, 196.5, -58.96, 0, -58.96, 0,38.73]]
                        ],
                        [
                            "eid100",
                            "location",
                            829,
                            1532,
                            "linear",
                            "${car}",
                            [[317.97, 196.5, -32.47, 0, -282.8, 0,0],[263.5, 192.5, -44.57, 0, -44.57, 0,54.63]]
                        ],
                        [
                            "eid102",
                            "location",
                            2361,
                            986,
                            "linear",
                            "${car}",
                            [[263.5, 192.5, -37.22, 0, -343.62, 0,0],[222.79, 157.5, -43.03, 0, -43.03, 0,55.01]]
                        ],
                        [
                            "eid103",
                            "location",
                            3347,
                            1112,
                            "linear",
                            "${car}",
                            [[222.79, 157.5, -66.63, 0, -354.23, 0,0],[168.1, 160.21, -73.26, 6.89, -73.26, 6.89,54.78]]
                        ],
                        [
                            "eid104",
                            "location",
                            4459,
                            787,
                            "linear",
                            "${car}",
                            [[168.1, 160.21, -43.54, 4.1, -316.21, 29.76,0],[138.49, 195.5, -43.38, 5.63, -43.38, 5.63,47.96]]
                        ],
                        [
                            "eid105",
                            "location",
                            5246,
                            525,
                            "linear",
                            "${car}",
                            [[138.49, 195.5, -18.26, 2.37, -271.68, 35.28,0],[114.34, 197.58, -18, 1.79, -18, 1.79,24.23]]
                        ],
                        [
                            "eid106",
                            "location",
                            5771,
                            525,
                            "linear",
                            "${car}",
                            [[114.34, 197.58, -18.39, 1.83, -249.77, 24.86,0],[82.51, 162.5, -17.97, 1.29, -17.97, 1.29,47.96]]
                        ],
                        [
                            "eid107",
                            "location",
                            6296,
                            1574,
                            "linear",
                            "${car}",
                            [[82.51, 162.5, -59.77, 4.29, -226.08, 16.21,0],[34.81, 170.69, -52.59, 11.14, -52.59, 11.14,48.45]]
                        ],
                        [
                            "eid108",
                            "location",
                            7870,
                            1049,
                            "linear",
                            "${car}",
                            [[34.81, 170.69, -40.62, 8.6, -146.36, 31,0],[-1.5, 159.51, -33.06, 9.66, -33.06, 9.66,38.7]]
                        ],
                        [
                            "eid109",
                            "location",
                            8919,
                            1383,
                            "linear",
                            "${car}",
                            [[-1.5, 159.51, -86.07, 25.14, -86.07, 25.14,0],[-49.5, 176.5, 0, 0, 0, 0,50.94]]
                        ],
                        [
                            "eid34",
                            "location",
                            3110,
                            390,
                            "easeOutQuad",
                            "${Text3}",
                            [[150, 63.5, 0, 0, 0, 0,0],[150, 53.5, 0, 0, 0, 0,10]]
                        ],
                        [
                            "eid11",
                            "opacity",
                            55,
                            405,
                            "easeOutQuad",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2860,
                            250,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid19",
                            "opacity",
                            385,
                            405,
                            "easeOutQuad",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2860,
                            250,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "location",
                            6000,
                            1940,
                            "linear",
                            "${pit4}",
                            [[-23, 208.5, 0, 0, 0, 0,0],[323, 208.5, 0, 0, 0, 0,346]]
                        ],
                        [
                            "eid99",
                            "location",
                            8310,
                            1992,
                            "linear",
                            "${pit5}",
                            [[-23, 203.5, 0, 0, 0, 0,0],[324, 203.5, 0, 0, 0, 0,347]]
                        ],
                        [
                            "eid94",
                            "location",
                            4500,
                            1934,
                            "linear",
                            "${pit3}",
                            [[-23, 152.5, 0, 0, 0, 0,0],[324, 152.5, 0, 0, 0, 0,347]]
                        ],
                        [
                            "eid31",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            3110,
                            0,
                            "easeOutQuad",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            6250,
                            0,
                            "easeOutQuad",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "location",
                            2000,
                            1940,
                            "linear",
                            "${pit2}",
                            [[-23, 208.5, 0, 0, 0, 0,0],[324, 208.5, 0, 0, 0, 0,347]]
                        ],
                        [
                            "eid88",
                            "location",
                            0,
                            1924,
                            "linear",
                            "${pit1}",
                            [[-23, 152.5, 0, 0, 0, 0,0],[324, 152.5, 0, 0, 0, 0,347]]
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pit1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            1924,
                            0,
                            "linear",
                            "${pit1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${pit4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${pit4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            7940,
                            0,
                            "linear",
                            "${pit4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "location",
                            6847,
                            425,
                            "easeOutQuad",
                            "${Text4}",
                            [[150, 110.5, 0, 0, 0, 0,0],[150, 100.5, 0, 0, 0, 0,10]]
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            55,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            3110,
                            0,
                            "easeOutQuad",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "location",
                            55,
                            405,
                            "easeOutQuad",
                            "${Text}",
                            [[149.5, 65, 0, 0, 0, 0,0],[149.5, 55, 0, 0, 0, 0,10]]
                        ],
                        [
                            "eid57",
                            "opacity",
                            6847,
                            425,
                            "easeOutQuad",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            10027,
                            275,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "opacity",
                            3426,
                            425,
                            "easeOutQuad",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            10027,
                            275,
                            "linear",
                            "${logo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            385,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            3110,
                            0,
                            "easeOutQuad",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid43",
                            "location",
                            3426,
                            425,
                            "easeOutQuad",
                            "${logo}",
                            [[150, 110, 0, 0, 0, 0,0],[150, 100, 0, 0, 0, 0,10]]
                        ],
                        [
                            "eid49",
                            "location",
                            6250,
                            650,
                            "easeInOutQuad",
                            "${logo}",
                            [[150, 100, 0, 0, 0, 0,0],[150, 55, 0, 0, 0, 0,45]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-52640412");
