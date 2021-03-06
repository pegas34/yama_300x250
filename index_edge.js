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
                            rect: ['0px', '92px', '300px', '49px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​НАРОДНИЙ ЗАСІБ</p><p style=\"margin: 0px;\">ПРОТИ ЯМ У ДВОРАХ</p>",
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
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
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
                            [[150, 100, 0, 0, 0, 0,0],[150, 50, 0, 0, 0, 0,50]]
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
                            8573,
                            0,
                            "linear",
                            "${pit5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            10027,
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
                            4926,
                            0,
                            "linear",
                            "${pit3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            6270,
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
                            2599,
                            0,
                            "linear",
                            "${pit2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            4031,
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
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid135",
                            "location",
                            448,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid136",
                            "location",
                            896,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid137",
                            "location",
                            1344,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid138",
                            "location",
                            1791,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid139",
                            "location",
                            2239,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid140",
                            "location",
                            2687,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid141",
                            "location",
                            3135,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid142",
                            "location",
                            3583,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid143",
                            "location",
                            4031,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid144",
                            "location",
                            4478,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid145",
                            "location",
                            4926,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid146",
                            "location",
                            5374,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid147",
                            "location",
                            5822,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid148",
                            "location",
                            6270,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid149",
                            "location",
                            6718,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid150",
                            "location",
                            7165,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid153",
                            "location",
                            7613,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid154",
                            "location",
                            8061,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid155",
                            "location",
                            8509,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid156",
                            "location",
                            8957,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid157",
                            "location",
                            9405,
                            448,
                            "linear",
                            "${road}",
                            [[99, 179.5, 0, 0, 0, 0,0],[204, 179.5, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid158",
                            "location",
                            9853,
                            448,
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
                            [[349.5, 176.5, 0, 0, 0, 0,0],[318.97, 203.5, 0, 0, 0, 0,40.76]]
                        ],
                        [
                            "eid100",
                            "location",
                            829,
                            1532,
                            "linear",
                            "${car}",
                            [[318.97, 203.5, -32.47, 0, 0, 0,0],[271.5, 194.5, 0, 0, 0, 0,48.36]]
                        ],
                        [
                            "eid102",
                            "location",
                            2361,
                            986,
                            "linear",
                            "${car}",
                            [[271.5, 194.5, -52.22, -18, 0, 0,0],[232.79, 160.5, 0, 0, 0, 0,51.99]]
                        ],
                        [
                            "eid103",
                            "location",
                            3347,
                            1112,
                            "linear",
                            "${car}",
                            [[232.79, 160.5, -30.63, -3, 0, 0,0],[190.1, 161.21, 0, 0, 0, 0,42.71]]
                        ],
                        [
                            "eid104",
                            "location",
                            4459,
                            1041,
                            "linear",
                            "${car}",
                            [[190.1, 161.21, -34.54, 13.1, 0, 0,0],[149.49, 201.5, 0, 0, 0, 0,57.49]]
                        ],
                        [
                            "eid105",
                            "location",
                            5500,
                            1347,
                            "linear",
                            "${car}",
                            [[149.49, 201.5, -48.26, 26.37, 0, 0,0],[118.34, 197.58, -6.39, -1.17, 0, 0,33.09],[91.5, 171.5, 0, 0, 0, 0,70.55]]
                        ],
                        [
                            "eid107",
                            "location",
                            6847,
                            1023,
                            "linear",
                            "${car}",
                            [[91.5, 171.5, -44.77, -55.71, 0, 0,0],[39.81, 171.5, 0, 0, 0, 0,55.2]]
                        ],
                        [
                            "eid108",
                            "location",
                            7870,
                            766,
                            "linear",
                            "${car}",
                            [[39.81, 171.5, -32.27, -0.23, 0, 0,0],[11.5, 160.5, -24.99, -11.95, -24.99, -11.95,30.66]]
                        ],
                        [
                            "eid159",
                            "location",
                            8636,
                            283,
                            "linear",
                            "${car}",
                            [[11.5, 160.5, -18.08, -8.65, -18.08, -8.65,0],[-1.5, 159.51, 0, 0, 0, 0,13.25]]
                        ],
                        [
                            "eid109",
                            "location",
                            8919,
                            1383,
                            "linear",
                            "${car}",
                            [[-1.5, 159.51, -53.07, -4.86, 0, 0,0],[-50.5, 162.5, 0, 0, 0, 0,49.16]]
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
                            "eid99",
                            "location",
                            8573,
                            1454,
                            "linear",
                            "${pit5}",
                            [[-23, 203.5, 0, 0, 0, 0,0],[324, 203.5, 0, 0, 0, 0,347]]
                        ],
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
                            "eid94",
                            "location",
                            4926,
                            1455,
                            "linear",
                            "${pit3}",
                            [[-23, 152.5, 0, 0, 0, 0,0],[324, 152.5, 0, 0, 0, 0,347]]
                        ],
                        [
                            "eid91",
                            "location",
                            2599,
                            1432,
                            "linear",
                            "${pit2}",
                            [[-23, 208.5, 0, 0, 0, 0,0],[324, 208.5, 0, 0, 0, 0,347]]
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
                            1434,
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
                            6718,
                            0,
                            "linear",
                            "${pit4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            8158,
                            0,
                            "linear",
                            "${pit4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "location",
                            6718,
                            1440,
                            "linear",
                            "${pit4}",
                            [[-23, 208.5, 0, 0, 0, 0,0],[323, 208.5, 0, 0, 0, 0,346]]
                        ],
                        [
                            "eid56",
                            "location",
                            6847,
                            425,
                            "easeOutQuad",
                            "${Text4}",
                            [[150, 110.5, 0, 0, 0, 0,0],[150, 97.5, 0, 0, 0, 0,13]]
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
                            "eid88",
                            "location",
                            0,
                            1434,
                            "linear",
                            "${pit1}",
                            [[-23, 152.5, 0, 0, 0, 0,0],[324, 152.5, 0, 0, 0, 0,347]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-52640412");
