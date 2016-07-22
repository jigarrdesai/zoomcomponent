'use strict';

angular.module('zoomcharts', [])

.directive('zcPieChart', function () {
    var chart;

    function getSettings($scope, $element) {
        var settings = $scope.settings;

        // make sure that the given settings object is not modified in any way
        if (settings)
            settings = ZoomCharts.Internal.Base.Helpers.realCloneSafe(settings);
        else
            settings = {};

        if (settings.container) throw new Error("`container` cannot be specified in the settings object when using AngularJS directive.");
        settings.container = $element.children()[0];

        if (!settings.data) settings.data = {};

        var data = $scope.data;
        if (data instanceof String || typeof data === "string")
            settings.data.url = data;
        else if (typeof data === "function")
            settings.data.dataFunction = data;
        else
            settings.data.preloaded = data;

        return settings;
    }
    
    function wrapEventHandler($scope, handler) {
        if (!handler)
            return null;
        
        return function(args) { $scope.$evalAsync(function() { handler(args); }); }
    }

    return {
        template: "<div></div>",
        scope: {
            settings: '=',
            data: '=',
            selection: '=',
            zcClick: '='
        },
        controller: function ($scope, $element, $attrs) {
            var settings = getSettings($scope, $element);
            chart = new ZoomCharts.PieChart(settings);
            // window.chart = chart;
            $scope.$watchGroup(['settings', 'settings.__watch', 'data', 'data.__watch'],
                function (newVal, oldVal) {
                    console.log(newVal, oldVal)
                    if (newVal === oldVal) return;
                    chart.updateSettings(getSettings($scope, $element));
                });

            $scope.$watchCollection('selection',
                function (newVal, oldVal) {
                    chart.selection($scope.selection);
                });

            chart.on("selectionChange", function (event) {
                $scope.$evalAsync(function () {
                    $scope.selection = event.selection;
                });
            });

            var previousClickHandler = null;
            $scope.$watch('zcClick', function() {
                if (previousClickHandler) chart.off("click", previousClickHandler);
                previousClickHandler = wrapEventHandler($scope, $scope.zcClick);
                if (previousClickHandler) chart.on("click", previousClickHandler);
            });

            $scope.$on("$destroy", function () {
                // console.log('Destroy')
                // chart.remove();
            });
        }
    };
})

.directive('zcFacetChart', function () {
    var chart;

    function getSettings($scope, $element) {
        var settings = $scope.settings;

        // make sure that the given settings object is not modified in any way
        if (settings)
            settings = ZoomCharts.Internal.Base.Helpers.realCloneSafe(settings);
        else
            settings = {};

        if (settings.container) throw new Error("`container` cannot be specified in the settings object when using AngularJS directive.");
        settings.container = $element.children()[0];

        if (!settings.data) settings.data = {};

        var data = $scope.data;
        if (data instanceof String || typeof data === "string")
            settings.data.url = data;
        else if (typeof data === "function")
            settings.data.dataFunction = data;
        else
            settings.data.preloaded = data;

        return settings;
    }
    
    function wrapEventHandler($scope, handler) {
        if (!handler)
            return null;
        
        return function(args) { $scope.$evalAsync(function() { handler(args); }); }
    }

    return {
        template: "<div></div>",
        scope: {
            settings: '=',
            data: '=',
            selection: '=',
            zcClick: '='
        },
        controller: function ($scope, $element, $attrs) {
            var settings = getSettings($scope, $element);
            chart = new ZoomCharts.FacetChart(settings);
            // window.chart = chart;
            $scope.$watchGroup(['settings', 'settings.__watch', 'data', 'data.__watch'],
                function (newVal, oldVal) {
                    if (newVal === oldVal) return;
                    chart.updateSettings(getSettings($scope, $element));
                });

            $scope.$watchCollection('selection',
                function (newVal, oldVal) {
                    chart.selection($scope.selection);
                });

            chart.on("selectionChange", function (event) {
                $scope.$evalAsync(function () {
                    $scope.selection = event.selection;
                });
            });

            var previousClickHandler = null;
            $scope.$watch('zcClick', function() {
                if (previousClickHandler) chart.off("click", previousClickHandler);
                previousClickHandler = wrapEventHandler($scope, $scope.zcClick);
                if (previousClickHandler) chart.on("click", previousClickHandler);
            });

            $scope.$on("$destroy", function () {
                // chart.remove();
            });
        }
    };
})

.directive('zcTimeChart', function () {
    var chart;

    function getSettings($scope, $element) {
        var settings = $scope.settings;

        // make sure that the given settings object is not modified in any way
        if (settings)
            settings = ZoomCharts.Internal.Base.Helpers.realCloneSafe(settings);
        else
            settings = {};

        if (settings.container) throw new Error("`container` cannot be specified in the settings object when using AngularJS directive.");
        settings.container = $element.children()[0];

        if (!settings.data) settings.data = {};

        var data = $scope.data;
        if (data instanceof String || typeof data === "string")
            settings.data.url = data;
        else if (typeof data === "function")
            settings.data.dataFunction = data;
        else
            settings.data.preloaded = data;

        return settings;
    }
    
    function wrapEventHandler($scope, handler) {
        if (!handler)
            return null;
        
        return function(args) { $scope.$evalAsync(function() { handler(args); }); }
    }

    return {
        template: "<div></div>",
        scope: {
            settings: '=',
            data: '=',
            selection: '=',
            zcClick: '='
        },
        controller: function ($scope, $element, $attrs) {
            var settings = getSettings($scope, $element);
            console.log(settings)
            chart = new ZoomCharts.TimeChart(settings);
            // window.chart = chart;
            $scope.$watchGroup(['settings', 'settings.__watch', 'data', 'data.__watch'],
                function (newVal, oldVal) {
                    if (newVal === oldVal) return;
                    chart.updateSettings(getSettings($scope, $element));
                });

            $scope.$watchCollection('selection',
                function (newVal, oldVal) {
                    chart.selection($scope.selection);
                });

            chart.on("selectionChange", function (event) {
                $scope.$evalAsync(function () {
                    $scope.selection = event.selection;
                });
            });

            var previousClickHandler = null;
            $scope.$watch('zcClick', function() {
                if (previousClickHandler) chart.off("click", previousClickHandler);
                previousClickHandler = wrapEventHandler($scope, $scope.zcClick);
                if (previousClickHandler) chart.on("click", previousClickHandler);
            });

            $scope.$on("$destroy", function () {
                // chart.remove();
            });
        }
    };
})

.directive('zcNetChart', function () {
    var chart;

    function getSettings($scope, $element) {
        var settings = $scope.settings;

        // make sure that the given settings object is not modified in any way
        if (settings)
            settings = ZoomCharts.Internal.Base.Helpers.realCloneSafe(settings);
        else
            settings = {};

        if (settings.container) throw new Error("`container` cannot be specified in the settings object when using AngularJS directive.");
        settings.container = $element.children()[0];

        if (!settings.data) settings.data = {};

        var data = $scope.data;
        if (data instanceof String || typeof data === "string")
            settings.data.url = data;
        else if (typeof data === "function")
            settings.data.dataFunction = data;
        else
            settings.data.preloaded = data;

        return settings;
    }
    
    function wrapEventHandler($scope, handler) {
        if (!handler)
            return null;
        
        return function(args) { $scope.$evalAsync(function() { handler(args); }); }
    }

    return {
        template: "<div></div>",
        scope: {
            settings: '=',
            data: '=',
            selection: '=',
            zcClick: '='
        },
        controller: function ($scope, $element, $attrs) {
            var settings = getSettings($scope, $element);
            chart = new ZoomCharts.NetChart(settings);
            // window.chart = chart;
            $scope.$watchGroup(['settings', 'settings.__watch', 'data', 'data.__watch'],
                function (newVal, oldVal) {
                    if (newVal === oldVal) return;
                    chart.updateSettings(getSettings($scope, $element));
                });

            $scope.$watchCollection('selection',
                function (newVal, oldVal) {
                    chart.selection($scope.selection);
                });

            chart.on("selectionChange", function (event) {
                $scope.$evalAsync(function () {
                    $scope.selection = event.selection;
                });
            });

            var previousClickHandler = null;
            $scope.$watch('zcClick', function() {
                if (previousClickHandler) chart.off("click", previousClickHandler);
                previousClickHandler = wrapEventHandler($scope, $scope.zcClick);
                if (previousClickHandler) chart.on("click", previousClickHandler);
            });

            $scope.$on("$destroy", function () {
                // chart.remove();
            });
        }
    };
})

.directive('zcGeoChart', function () {
    var chart;

    function getSettings($scope, $element) {
        var settings = $scope.settings;

        // make sure that the given settings object is not modified in any way
        if (settings)
            settings = ZoomCharts.Internal.Base.Helpers.realCloneSafe(settings);
        else
            settings = {};

        if (settings.container) throw new Error("`container` cannot be specified in the settings object when using AngularJS directive.");
        settings.container = $element.children()[0];

        if (!settings.data) settings.data = {};

        var data = $scope.data;
        if (data instanceof String || typeof data === "string")
            settings.data.url = data;
        else if (typeof data === "function")
            settings.data.dataFunction = data;
        else
            settings.data.preloaded = data;

        return settings;
    }
    
    function wrapEventHandler($scope, handler) {
        if (!handler)
            return null;
        
        return function(args) { $scope.$evalAsync(function() { handler(args); }); }
    }

    return {
        template: "<div></div>",
        scope: {
            settings: '=',
            data: '=',
            selection: '=',
            zcClick: '='
        },
        controller: function ($scope, $element, $attrs) {
            var settings = getSettings($scope, $element);
            console.log(settings)
            // settings.data = settings.data.preloaded;
            chart = new ZoomCharts.GeoChart(settings);
            // window.chart = chart;
            $scope.$watchGroup(['settings', 'settings.__watch', 'data', 'data.__watch'],
                function (newVal, oldVal) {
                    if (newVal === oldVal) return;
                    chart.updateSettings(getSettings($scope, $element));
                });

            $scope.$watchCollection('selection',
                function (newVal, oldVal) {
                    chart.selection($scope.selection);
                });

            chart.on("selectionChange", function (event) {
                $scope.$evalAsync(function () {
                    $scope.selection = event.selection;
                });
            });

            var previousClickHandler = null;
            $scope.$watch('zcClick', function() {
                if (previousClickHandler) chart.off("click", previousClickHandler);
                previousClickHandler = wrapEventHandler($scope, $scope.zcClick);
                if (previousClickHandler) chart.on("click", previousClickHandler);
            });

            $scope.$on("$destroy", function () {
                // chart.remove();
            });
        }
    };
})

.directive('zcSocialChart', function () {
    var netChart;
    var activeNode = {};
    var pieChart;
    var pieChartSettings;
    var pieChartNode;

    var pieChartData = null;
    var pieChartSettings;
    var pieChartMinValue = 50;
    var pieChartMaxValue = 150;
    
    var assetBasePath = "https://social.zoomcharts.com/inc/";
    var assetDataPath = assetBasePath + "data/";
    var assetImgPath = assetBasePath + "img/";
    var netChartDefaultValue = 'f-23';
    
    var graphTopics={nodes:{"m-11":{Bar:483,Apple:923,Office:391,Money:777,Photography:595,Music:533,Sports:109,Running:31,Health:295,Marriage:322,Business:93,Todo:709},"m-18":{Sports:109,Running:31,Health:295,Marriage:322,Business:93},"m-19":{Running:31,Health:295,Marriage:322,Family:172,Money:787,Business:93},"m-10":{Television:650,Bar:530,Apple:923,Family:172,Money:787,Photography:517,Marriage:621,Vacation:139,Sports:184,Running:413,College:467,Office:391,Internet:315,Health:171,Todo:53,Clothing:164},"m-34":{Television:650,Bar:930,Apple:923,Family:172,Money:787,Photography:517,Marriage:621,Vacation:139,Sports:184,Running:413,College:467,Office:391,Internet:315,Clothing:164},"m-37":{Family:172,Money:787,Photography:517,Running:413,College:467,Office:391,Internet:315,Clothing:164},"m-38":{Family:172,Money:587,Car:817,Running:113,College:267,Office:391,Internet:315,Clothing:664},"m-36":{Family:172,Money:187,Vacation:139,Sports:784,Running:913,College:467,Office:391},"m-35":{Television:650,Bar:930,Apple:923,Internet:315},"m-17":{Bar:530,Apple:923,Family:172,Money:787,Photography:517,Marriage:621,Vacation:139,Sports:184,Running:413,College:467,Clothing:164},"m-16":{Television:650,Bar:530,Apple:923,Money:787,Photography:517,Marriage:621,Vacation:139,Sports:184,Running:413,College:467,Office:391,Internet:315,Health:171,Todo:53,Clothing:164},"m-13":{Shopping:157,Love:656,Weight:82,Business:687,Car:397,Photography:455,Marriage:422,College:41,Money:304,Baby:236,Health:150,Android:752,Family:79},"m-15":{Shopping:157,Love:656,Weight:82,Business:687,Car:397,Photography:455,Marriage:422,College:41,Money:304,Baby:236,Health:150,Android:752,Family:79},"m-33":{Weight:82,Business:687,Car:397,Photography:455,Marriage:422,College:41,Money:304,Baby:236,Health:150,Android:752,Family:79},"m-25":{Shopping:857,Weight:82,Car:397,Photography:455,Marriage:422,College:41,Money:304,Baby:236,Health:150,Android:752,Family:79},"m-26":{Weight:82,Car:997,Photography:455,College:41,Money:304,Baby:236,Android:252,Family:79},"m-27":{Weight:82,Car:97,Photography:55,College:41,Money:904,Android:752,Family:79},"m-28":{Weight:82,Car:597,Photography:55,College:241,Android:952,Family:79},"m-21":{Photography:455,Marriage:422,College:41,Money:304,Baby:236,Health:150,Android:752,Family:79},"m-29":{Car:422,College:41,Money:304,Baby:236,Health:150,Android:752,Family:79},"m-22":{Marriage:422,College:41,Money:304,Baby:236,Health:150,Family:79},"m-12":{Food:227,Todo:326,Android:752,Health:295,Weight:82},"m-20":{Food:227,Todo:326,Business:687,Android:352,Health:295,Love:82},"m-31":{Car:227,Todo:326,Business:687,Android:352,Health:295,Love:82},"m-14":{Food:227,Todo:326,Android:752,Health:295,Weight:82},"m-32":{Food:227,Todo:326,Android:152,Health:495,Car:82},"m-23":{Food:227,Todo:326,Money:752,Health:295,College:82},"m-24":{Food:227,Todo:326,Money:75,Baby:236,Health:150,College:482},"m-30":{Car:627,Todo:326,Money:75,Baby:236,Health:150,College:182},"f-8":{Love:647,Cinema:226,Money:493,Photography:292,Weather:437,Books:409,Marriage:845},"f-34":{Cinema:226,Money:493,Photography:292,Weather:437,Books:409},"f-9":{Apple:59,Health:478,Cinema:380,Food:760,Money:53,Books:91,Marriage:117,Home:144,Clothing:100},"f-35":{Apple:59,Cinema:380,Food:760,Money:53,Books:91,Marriage:117,Home:144,Clothing:100},"f-6":{Bar:604,Office:19,Cinema:234,College:330,Photography:8,Cycling:393,Art:165,Running:10,Music:307,Money:475,Home:818,Women:16},"f-36":{Office:19,Cinema:234,College:330,Photography:8,Cycling:393,Art:165,Running:10,Music:307,Money:475,Home:818,Women:16},"f-7":{Bar:325,Marriage:539,Art:98,Weight:133},"f-37":{Bar:325,Marriage:539,Art:98,Photography:888,Weight:133},"f-4":{Map:115,Television:207,Art:678,Office:280,Family:544,Cinema:797,Car:209,Photography:275,Vacation:399,Weight:112,Running:54,Books:381,Marriage:1856,Home:331,Business:297},"f-38":{Map:115,Television:207,Art:678,Office:280,Cinema:797,Car:209,Photography:275,Vacation:399,Weight:112,Running:54,Books:381,Home:331,Business:297},"f-5":{Television:424,Bar:530,Business:344,Food:242,Car:176,Photography:824,Running:22,Books:146,Money:698,Art:228,Clothing:34},"f-39":{Television:424,Bar:530,Business:1344,Food:242,Car:176,Running:22,Books:146,Money:998,Art:228,Clothing:34},"f-2":{Shopping:215,Photography:392,Books:70,Health:345,Weather:340},"f-40":{Shopping:215,Photography:392,Books:70,Health:345,Weather:340},"f-3":{Art:474,Weather:540,Marriage:843,Yoga:93,Women:62},"f-41":{Art:1474,Vacation:309,Weather:540,Marriage:843,Yoga:93,Women:62},"f-1":{Car:312,Television:281,Books:574},"f-42":{Car:312,Television:881,Art:174,Books:574},"f-10":{Shopping:672,Art:64,Apple:60,Family:124,Car:53,Cooking:177,Vacation:242,Cycling:155,Music:99,Office:179,Home:537,Android:190,Clothing:737},"f-43":{Shopping:1672,Art:64,Apple:260,Family:124,Home:537,Clothing:737},"f-11":{Map:5,Art:24,Yoga:842,Food:706,Money:163,Sports:71,Crush:897,Health:107,Fishing:63,Love:188,Home:1026},"f-44":{Map:5,Art:24,Yoga:842,Money:163,Sports:71,Crush:897,Health:107,Home:1026},"f-12":{Shopping:157,Love:975,Family:79,College:41,Vacation:394,Weather:626,Running:88,Experiment:220,Health:339,Internet:283,Baby:236,Music:98},"f-45":{Shopping:157,Love:975,Family:79,College:41,Vacation:394,Running:588,Experiment:220,Health:339,Internet:183,Baby:236,Music:98},"f-13":{Television:134,Art:739,Family:531,Cinema:999,Money:789,Photography:130,Running:31,College:327,Yoga:241,Todo:383},"f-64":{Television:134,Art:139,Family:531,Cinema:499,Money:989,Yoga:241,Todo:383},"f-46":{Television:134,Art:739,Cinema:999,Money:789,Photography:130,Running:31,Yoga:241,Todo:383},"f-14":{Money:459,Bar:599,Apple:444},"f-47":{Money:459,Bar:599,Family:531,Apple:144},"f-15":{Television:326,Yoga:842,Office:178,Business:27,Health:94,Food:356,Car:169,Photography:257,Money:272,Sports:166,Crush:796,Running:508,Weather:322,Marriage:919,Fishing:63,Internet:1,College:456},"f-63":{Photography:257,Money:272,Sports:166,Crush:496,Running:808,Weather:622,Marriage:419,Fishing:63,Internet:1,College:456},"f-48":{Health:94,Food:356,Car:169,Photography:257,Money:272,Sports:166,Crush:796,Weather:322,Marriage:919,Fishing:63,Internet:1,College:456},"f-16":{Love:354,Weight:992,Food:463,Music:604,Crush:388,Health:110,Home:83,Yoga:800},"f-49":{Love:354,Weight:192,Music:604,Crush:388,Health:110,Home:83,Yoga:800},"f-17":{Television:61,Love:1062,Apple:59,Weight:568,Cinema:380,Food:760,Photography:195,Health:588,Home:59,Music:465,Yoga:800,Todo:19},"f-62":{Television:61,Love:362,Apple:59,Weight:568,Cinema:380,Photography:195,Home:59,Music:465,Yoga:800,Todo:19},"f-50":{Television:61,Love:1062,Apple:59,Weight:568,Cinema:380,Home:59,Music:465,Yoga:800,Todo:19},"f-18":{Television:385,Love:890,Weight:530,Health:171,Food:771,Todo:19,Photography:515,Running:244,Books:7,Marriage:303,Experiment:103,College:467,Yoga:262,Clothing:496,Women:67},"f-51":{Television:385,Weight:530,Health:171,Food:771,Todo:19,Photography:115,Running:244,Books:7,Marriage:803,Experiment:103,College:467,Yoga:262,Clothing:496,Women:67},"f-19":{Weight:819,Food:43,Vacation:216,Weather:248,Marriage:303,Baby:83,Books:7,Clothing:1035,Women:67},"f-52":{Weight:219,Food:43,Vacation:616,Weather:748,Marriage:303,Baby:83,Books:7,Women:67},"f-61":{Weight:219,Food:43,Vacation:616,Marriage:303,Baby:83,Books:7,Women:67},"f-32":{Art:478,Office:165,Weight:1580,Men:840,Crush:569,Marriage:57,Family:34},"f-53":{Art:478,Office:165,Men:840,Crush:569,Marriage:257,Family:34},"f-33":{Shopping:360,Yoga:274,Office:148,Marriage:418,Crush:1189,Art:175,Music:57,Love:355},"f-54":{Shopping:960,Yoga:274,Office:148,Marriage:418,Art:175,Music:57,Love:355},"f-30":{Love:182,Weight:481,Food:1191,Vacation:216,Crush:388,Experiment:103,Music:139,Baby:83,Home:83,Yoga:262},"f-55":{Love:182,Weight:481,Experiment:103,Music:139,Baby:83,Home:83,Yoga:262},"f-31":{Television:236,Shopping:608,Apple:274,Business:19,Crush:1088,Music:14,Baby:812,Family:426,Todo:94},"f-59":{Television:236,Apple:274,Business:19,Crush:488,Music:14,Baby:812,Family:426,Todo:94},"f-56":{Television:236,Apple:274,Business:19,Crush:1088,Music:514,Family:426,Todo:94},"m-9":{Map:262,Television:249,Cycling:538,Apple:276,Business:758,Money:309,Photography:688,Vacation:292,Sports:466,Art:32,Weather:76,Family:172,Fishing:58,Internet:315,Bar:47,Android:691,Todo:53},"f-57":{Map:262,Television:249,Cycling:538,Apple:276,Business:758,Money:309,Vacation:292,Sports:466,Art:32,Weather:76,Family:172,Fishing:58,Internet:315,Bar:47,Todo:53},"m-8":{Gaming:76,Bar:13,Apple:720,Business:723,Money:49,Vacation:153,Cycling:493,Sports:571,Books:259,Fishing:420,Art:223,Android:706,Women:809},"f-58":{Gaming:76,Bar:13,Apple:720,Business:723,Money:49,Vacation:153,Cycling:493,Sports:571,Books:259,Fishing:420,Art:223,Women:809},"m-5":{Love:1349,Weight:112,Business:840,Cinema:226,Food:350,Car:289,Photography:306,Vacation:399,Sports:38,Health:107,Art:24,Running:393,Weather:437,Marriage:298,Office:83,Money:163,Baby:140,Home:810,Women:71},"m-4":{Map:5,Television:447,College:123,Bar:599,Family:455,Office:178,Car:169,Photography:392,Marriage:800,Vacation:771,Weather:340,Crush:101,Shopping:215,Books:70,Health:534,Money:459,Love:547,Art:739,Home:547},"m-7":{Cycling:45,Sports:163,Health:94,Internet:1,Yoga:241,Android:292,Gaming:113,Business:226,Photography:449,Women:809,Television:134,Bar:13,Car:976,Marriage:1405,Art:223,Love:574,Family:531,Cinema:707,Money:811,Weather:322,College:783,Fishing:371,Clothing:271},"m-6":{Love:286,Office:83,Cinema:292,Car:976,Marriage:397,Baby:140,Women:71},"m-1":{Television:488,Art:1152,Office:19,Business:344,Cinema:234,Food:242,Car:488,Photography:367,Vacation:309,Music:307,Weather:540,Bar:604,Books:694,Marriage:1799,Money:242,Yoga:93,Home:432,Clothing:34,Women:78},"m-3":{Map:115,Television:404,Art:228,Apple:60,Family:668,Cinema:797,Car:53,Photography:261,Marriage:1862,Vacation:242,Books:648,Music:99,Office:280,Money:546,Home:622,Android:190,Clothing:350},"m-2":{Television:20,Bar:855,Weight:133,Internet:283,Money:931,Photography:465,Marriage:539,Cycling:393,Weather:626,Music:98,Running:120,Experiment:220,College:330,Home:386,Art:263},"f-29":{Map:1,Television:236,Shopping:1132,Cycling:190,Office:492,Weight:1292,Car:197,Photography:465,Cooking:319,Crush:1639,Art:64,Marriage:379,Music:604,Todo:94,Baby:61,Love:756,Yoga:398,Clothing:487,Business:93,Family:34},"f-28":{Art:393,Weight:882,Food:122,Men:766,Cycling:23,Books:629,Music:200,Baby:770,Shopping:960},"f-21":{Television:448,Bar:345,Weight:175,Food:548,Photography:328,Men:210,Running:227,Books:74},"f-20":{Running:227,Books:74,Clothing:703,Weight:346,Weather:248},"f-23":{Television:884,Bar:333,Apple:156,Weight:142,College:123,Photography:48,Men:341,Vacation:377,Marriage:1324,Yoga:194,Android:181,Family:455},"f-22":{Television:448,Bar:345,Weight:175,Food:321,Photography:328,Men:210,Marriage:524,Android:181},"f-25":{Gaming:37,Television:249,Shopping:132,Bar:302,Business:171,Weight:196,Car:317,Photography:455,Vacation:12,Sports:92,Books:550,Marriage:1268,Money:304,Love:574,Android:277,Women:11},"f-24":{Love:355,Television:437,Shopping:968,Apple:430,Family:426,Bar:333,Photography:48,Men:1181,Yoga:194,Crush:1207,Weight:962,Marriage:418,Baby:800,Art:653,Business:19},"f-27":{Map:1,Shopping:460,Cycling:58,Weight:1414,Car:197,Cooking:142,Baby:49,Love:756,Yoga:124},"f-26":{Map:262,Shopping:1092,Art:425,Weight:196,Business:261,Food:122,Photography:683,Men:766,Vacation:12,Music:200,Sports:92,Weather:76,Marriage:162,Fishing:9,Baby:770,Bar:302,Books:1179,Clothing:271,Women:11}},links:{l144:{Books:259},l142:{Car:317,Photography:455,Marriage:422,Business:171,Money:304},l36:{Car:80,Love:228,Business:516},l34:{Todo:326,Health:295},l35:{Android:752,Weight:82},l32:{Bar:47,Family:172,Money:309,Photography:197,Vacation:139,Internet:315,Todo:53},l33:{Money:478,Bar:483,Apple:923,Office:391,Sports:109},l30:{Gaming:76,Bar:13,Business:226,Money:49,Sports:105,Fishing:362,Art:223,Android:292,Women:809},l31:{Cycling:493,Apple:276,Business:497,Vacation:153,Sports:466,Fishing:58,Android:414},l123a:{Television:324,Photography:320,Running:244,College:467,Health:171,Clothing:164},l123:{Todo:19,Photography:195,Love:708,Television:61},l18:{Money:459,Bar:599},l19:{Art:739},l122:{Weight:473,Food:43,Books:7,Marriage:303,Clothing:332,Women:67},l14:{Money:493,Photography:261,Books:409,Marriage:845},l15:{Map:115,Family:544,Office:280,Cinema:797,Books:2,Marriage:900},l16:{Home:85,Marriage:117,Books:91,Clothing:100,Money:53},l17:{Car:169,Office:178},l10:{Bar:325,Marriage:539,Art:98,Weight:133},l11:{Running:88,Experiment:220,Music:98,Weather:626,Internet:283},l12:{Apple:60,Family:124,Car:53,Vacation:242,Music:99,Home:537,Android:190,Clothing:250},l13:{Television:404,Books:146,Art:228},l130:{Running:169,Marriage:621,Television:326,Sports:75},l131:{Marriage:800,Television:447,College:123,Vacation:377,Family:455},l132:{Money:272,Photography:257,Sports:58,Weather:322,Health:94,Internet:1,College:456},l133:{Love:428,Shopping:157,Family:79,Health:150,Baby:236,College:41},l134:{Food:227},l135:{Music:533,Photography:465,Marriage:322,Business:93},l118:{Android:181,Marriage:524},l119:{Television:448,Bar:345,Weight:175,Food:321,Photography:328,Men:210},l116:{Crush:686,Love:355,Shopping:360,Marriage:418,Art:175},l117:{Television:437,Bar:333,Apple:156,Weight:142,Photography:48,Men:341,Yoga:194},l114:{Shopping:608,Apple:274,Family:426,Crush:521,Baby:800,Business:19},l115:{Men:840,Art:478,Weight:820},l112:{Crush:569,Weight:760,Marriage:57,Office:165,Family:34},l113:{Baby:12,Crush:567,Television:236,Music:14,Todo:94},l110:{Shopping:672,Office:179,Cooking:177,Cycling:155,Art:64,Clothing:487},l111:{Crush:503,Yoga:274,Music:57,Office:148},l136:{Money:299,Photography:130,Todo:383,Running:31},l137:{Television:134,Yoga:241,Family:531,Cinema:707,Money:490,College:327},l145:{Food:728,Yoga:262,Experiment:103,Love:182,Weight:57},l21:{Crush:101,Home:547,Map:5},l20:{Love:547,Health:189,Vacation:394},l23:{Weight:112,Business:297,Car:209,Photography:275,Vacation:399,Running:54,Home:331},l22:{Running:339,Marriage:298,Business:27},l25:{Art:24,Food:350,Money:163,Sports:38,Health:107,Home:479,Love:188},l24:{Photography:31,Weather:437,Love:647,Cinema:226},l27:{Crush:796,Food:356,Yoga:842,Fishing:63,Sports:33},l139:{Cinema:292},l29:{Car:976,Marriage:397},l28:{Baby:140,Love:286,Office:83,Women:71},l140:{Food:760,Home:59,Health:478,Apple:59,Cinema:380},l09:{Art:165,Money:475,Running:10,College:330,Home:386,Cycling:393},l08:{Television:20,Money:456,Photography:465,Bar:530,Running:22},l06:{Bar:604,Office:19,Cinema:234,Photography:8,Music:307,Home:432,Women:16},l05:{Business:344,Food:242,Car:176,Photography:359,Money:242,Clothing:34},l04:{Marriage:956,Television:207,Books:379,Art:678},l03:{Art:474,Vacation:309,Weather:540,Marriage:843,Yoga:93,Women:62},l01:{Car:312,Television:281,Books:315},l11a:{Apple:444},l109:{Map:1,Shopping:460,Cycling:35,Weight:532,Car:197,Cooking:142,Baby:49,Love:756,Yoga:124},l108:{Cycling:23,Weight:882},l121:{Weather:248,Clothing:703,Weight:346},l120:{Running:227,Books:74},l141:{Shopping:215,Photography:392,Books:70,Health:345,Weather:340},l126:{Baby:83,Vacation:216},l125:{Crush:388,Food:463,Music:139,Weight:424,Home:83},l124:{Love:354,Yoga:800,Health:110,Weight:568,Music:465},l101:{Gaming:37,Marriage:846,Love:574},l103:{Map:262,Photography:491,Weather:76,Art:32,Business:261},l102:{Marriage:162,Photography:192,Clothing:271,Fishing:9},l105:{Shopping:132,Weight:196,Vacation:12,Sports:92,Books:550,Bar:302,Women:11},l104:{Android:277,Television:249},l107:{Art:393,Food:122,Men:766,Books:629,Music:200,Baby:770,Shopping:960},l106:{Cycling:45}}};
    var pieChartDataArray = {
       default : [
           {name: "WhatsApp", style: {fillColor: "#27ab19", icon: assetImgPath + "icons/pie-whatsapp.png"}},
           {name: "Facebook", style: {fillColor: "#3c599b", icon: assetImgPath + "icons/pie-facebook.png"}},
           {name: "Email", style: {fillColor: "#993", icon: assetImgPath + "icons/pie-email.png"}},
           {name: "Twitter", style: {fillColor: "#32ccfe", icon: assetImgPath + "icons/pie-twitter.png"}},
           {name: "Google+", style: {fillColor: "#de4b39", icon: assetImgPath + "icons/pie-googleplus.png"}},
           {name: "Instagram", style: {fillColor: "#975e4a", icon: assetImgPath + "icons/pie-instagram.png"}},
           {name: "LinkedIn", style: {fillColor: "#0274b3", icon: assetImgPath + "icons/pie-linkedin-retina.png"}},
           {name: "Skype", style: {fillColor: "#3e9dd7", icon: assetImgPath + "icons/pie-skype.png"}}
       ],
       all : [
           {name: "Android", style: {icon: assetImgPath + "topic-icons/android.png"}},
           {name: "Apple", style: {icon: assetImgPath + "topic-icons/apple.png"}},
           {name: "Art", style: {icon: assetImgPath + "topic-icons/art.png"}},
           {name: "Baby", style: {icon: assetImgPath + "topic-icons/baby.png"}},
           {name: "Bar", style: {icon: assetImgPath + "topic-icons/bar.png"}},
           {name: "Books", style: {icon: assetImgPath + "topic-icons/books.png"}},
           {name: "Business", style: {icon: assetImgPath + "topic-icons/business.png"}},
           {name: "Car", style: {icon: assetImgPath + "topic-icons/car.png"}},
           {name: "Cinema", style: {icon: assetImgPath + "topic-icons/cinema.png"}},
           {name: "Clothing", style: {icon: assetImgPath + "topic-icons/clothing.png"}},
           {name: "College", style: {icon: assetImgPath + "topic-icons/college.png"}},
           {name: "Cooking", style: {icon: assetImgPath + "topic-icons/cooking.png"}},
           {name: "Crush", style: {icon: assetImgPath + "topic-icons/crush.png"}},
           {name: "Cycling", style: {icon: assetImgPath + "topic-icons/cycling.png"}},
           {name: "Experiment", style: {icon: assetImgPath + "topic-icons/experiment.png"}},
           {name: "Family", style: {icon: assetImgPath + "topic-icons/family.png"}},
           {name: "Fishing", style: {icon: assetImgPath + "topic-icons/fishing.png"}},
           {name: "Food", style: {icon: assetImgPath + "topic-icons/food.png"}},
           {name: "Gaming", style: {icon: assetImgPath + "topic-icons/gaming.png"}},
           {name: "Health", style: {icon: assetImgPath + "topic-icons/health.png"}},
           {name: "Home", style: {icon: assetImgPath + "topic-icons/home.png"}},
           {name: "Internet", style: {icon: assetImgPath + "topic-icons/internet.png"}},
           {name: "Love", style: {icon: assetImgPath + "topic-icons/love.png"}},
           {name: "Map", style: {icon: assetImgPath + "topic-icons/map.png"}},
           {name: "Marriage", style: {icon: assetImgPath + "topic-icons/marriage.png"}},
           {name: "Men", style: {icon: assetImgPath + "topic-icons/men.png"}},
           {name: "Money", style: {icon: assetImgPath + "topic-icons/money.png"}},
           {name: "Music", style: {icon: assetImgPath + "topic-icons/music.png"}},
           {name: "Office", style: {icon: assetImgPath + "topic-icons/office.png"}},
           {name: "Photography", style: {icon: assetImgPath + "topic-icons/photography.png"}},
           {name: "Running", style: {icon: assetImgPath + "topic-icons/running.png"}},
           {name: "Shopping", style: {icon: assetImgPath + "topic-icons/shopping.png"}},
           {name: "Sports", style: {icon: assetImgPath + "topic-icons/sports.png"}},
           {name: "Television", style: {icon: assetImgPath + "topic-icons/television.png"}},
           {name: "Todo", style: {icon: assetImgPath + "topic-icons/todo.png"}},
           {name: "Vacation", style: {icon: assetImgPath + "topic-icons/vacation.png"}},
           {name: "Weather", style: {icon: assetImgPath + "topic-icons/weather.png"}},
           {name: "Weight", style: {icon: assetImgPath + "topic-icons/weight.png"}},
           {name: "Women", style: {icon: assetImgPath + "topic-icons/women.png"}},
           {name: "Yoga", style: {icon: assetImgPath + "topic-icons/yoga.png"}}
        ]
    };

    function getSettings($scope, $element) {
        var settings = $scope.settings;

        // make sure that the given settings object is not modified in any way
        if (settings)
            settings = ZoomCharts.Internal.Base.Helpers.realCloneSafe(settings);
        else
            settings = {};

        if (settings.container) throw new Error("`container` cannot be specified in the settings object when using AngularJS directive.");
        settings.container = $element.children()[0];

        if (!settings.data) settings.data = {};

        var data = $scope.data;
        if (data instanceof String || typeof data === "string")
            settings.data.url = data;
        else if (typeof data === "function")
            settings.data.dataFunction = data;
        else
            settings.data.preloaded = data;

        return settings;
    }
    
    function wrapEventHandler($scope, handler) {
        if (!handler)
            return null;
        
        return function(args) { $scope.$evalAsync(function() { handler(args); }); }
    }

    function nodeRadius(node) {
        activeNode = node.focused == true ? node : activeNode;
        if (node == activeNode) {
            node.radius = 30;
        } else {
            node.radius = Math.max(node.relevance * 10, 20);
        }
        node.radius;
    }

    function nodeStyle(node) {
        node.fillColor = null;
        node.image = assetImgPath + "faces/" + node.id + ".png";
        var label = node.data.name;
        node.items = [];
        if (node == activeNode && pieChartNode != null && pieChartNode == node) {
            node.label = "";
            node.items.push({
                text: label,
                px: 0, py: 1, x: 0, y: -20,
                textStyle: {fillColor: "black"}, backgroundStyle: {fillColor: "rgba(255,255,255,0.7)"}
            });
        } else {
            node.label = label;
        }
    }
    
    function getChildSettings($scope, $element) {
        var settings = $scope.childSettings;

        // make sure that the given settings object is not modified in any way
        if (settings)
            settings = ZoomCharts.Internal.Base.Helpers.realCloneSafe(settings);
        else
            settings = {};

        // if (settings.container) throw new Error("`container` cannot be specified in the settings object when using AngularJS directive.");
        // settings.container = $element.children()[0];

        if (!settings.data) settings.data = {};

        var data = $scope.data;
        if (data instanceof String || typeof data === "string")
            settings.data.url = data;
        else if (typeof data === "function")
            settings.data.dataFunction = data;
        else
            settings.data.preloaded = data;

        pieChartSettings = settings;

        return settings;
    }

    function movePieChart() {
        var selectedNodes = netChart.selection();
        if (selectedNodes.length === 0) {
            return;
        }
        var currentNode = selectedNodes[0];
        if (pieChartSettings != null) {
            var settings = getPieChartDimensions(currentNode);
            var currentArea = settings.area;
            if (pieChartSettings
                    && pieChartSettings.area.left === currentArea.left
                    && pieChartSettings.area.top === currentArea.top
                    && pieChartSettings.pie.radius === settings.pie.radius) {
                return;
            }
            pieChartSettings = settings;
            pieChart.updateSettings(settings);
        }
    }

    function updatePieChart() {
        console.log('Updating Pie chart');
        var selectedNodes = netChart.selection();
        console.log(selectedNodes)
        if (selectedNodes.length === 0) {
            
            return;
        }
        var currentNode = selectedNodes[0];
        // if (currentNode.focused) {
            pieChartData = getPieData(currentNode.id);
            console.log(currentNode, pieChartNode)
            if (currentNode === pieChartNode) {
                return;
            }
            pieChartNode = currentNode;
            pieChartSettings = getPieChartDimensions(currentNode);
            pieChartSettings.data = { preloaded: { subvalues: pieChartData } };
            pieChartSettings.navigation = {}; // required so that PieChart drilldown level is reset.
            pieChart.updateSettings(pieChartSettings);
            netChart.updateSettings({style:{nodeStyleFunction: function(node){ nodeRadius(node); nodeStyle(node); }}});
            activeNode = currentNode;
        // } else {
            
            
        //     netChart.addFocusNode(currentNode);
        //     // currentNode.focused = true;
        // }
    }

    function getPieData(nodeId) {
        console.log('Getting Pie Data');
        pieChartData = nodeId == netChartDefaultValue ? pieChartDataArray.default : pieChartDataArray.all;
        pieChartData = pieChartDataArray.default;
        var topics = graphTopics.nodes[nodeId];
        for (var i in pieChartData) {
            pieChartData[i].value = Math.floor(Math.random() * (pieChartMaxValue - pieChartMinValue + 1)) + pieChartMinValue;
            pieChartData[i].id = pieChartData[i].name;
            // Facebook boost for Julia
            if (nodeId == netChartDefaultValue && pieChartData[i].name == 'Facebook') {
                pieChartData[i].value = 250;
            }
            var subvalues = [];
            for (var topic in topics) {
                var item = {
                    name : topic,
                    value : topics[topic]
                };
                for (var j in pieChartDataArray.all) {
                    if (pieChartDataArray.all[j].name == topic) {
                        item.style = pieChartDataArray.all[j].style;
                    }
                }
                item.style.label = { text : topic + " (" + topics[topic] + ")" };
                subvalues.push(item);
            }
            pieChartData[i].subvalues = subvalues;
        }
        console.log(pieChartData)
        return pieChartData;
    }

    function pieChartClickFunction(event) {
        if (event.slice && event.slice.expandable == false && event.slice.selected == false) {
            var tmp = netChart.getNodeDimensions(activeNode);
            var settings = {};
            var width = Math.min(200, window.innerWidth - 100);
            var height = Math.min(100, window.innerHeight - 100);
            var top = Math.max(0, tmp.y - 230);
            var left = tmp.x + tmp.radius + 50;
            if (left + width >= window.innerWidth) {
                left = 20;
                width = window.innerWidth - (left * 2);
            }
            if (top + height >= window.innerHeight) {
                top = 20;
                height = window.innerHeight - (top * 2);
            }
            settings.area = {
                width: width,
                height: height,
                top: top,
                left: left,
                style: { fillColor: "rgba(255,255,255,0.7)"}
            };
            settings.series = [ {
                id : "timechart",
                style: { fillColor: event.slice.fillColor }
            }];
            timeChart.updateSettings(settings);
        }
    }

    function getPieChartDimensions(node) {
        var dimensions = netChart.getNodeDimensions(node);
        var output = {
            area: {
                left: dimensions.x - dimensions.radius * 5,
                top: dimensions.y - dimensions.radius * 5,
                width: dimensions.radius * 10,
                height: dimensions.radius * 10
            },
            pie: {
                radius: dimensions.radius + (dimensions.radius / 2),
                innerRadius: dimensions.radius
            }
        };
        return output;
    }

    return {
        template: "<div></div>",
        scope: {
            settings: '=',
            data: '=',
            selection: '=',
            zcClick: '='
        },
        controller: function ($scope, $element, $attrs) {
            console.log('controller')
            var settings = getSettings($scope, $element);
            var childSettings = getChildSettings($scope, $element);
            console.log(childSettings)
            
            netChart = new ZoomCharts.NetChart(settings);

            // netChart = new ZoomCharts.NetChart(angular.extend(settings, {
            //     events: {
            //         onSelectionChange: updatePieChart,
            //         onPositionChange: movePieChart
            //     }
            // }));

            // pieChart = new ZoomCharts.PieChart({
            //     parentChart: netChart,
            //     data: {
            //         preloaded: {
            //             subvalues: []
            //         }
            //     },
            //     events: {
            //         onClick: pieChartClickFunction
            //     }
            // });
            // console.log(pieChart)
            // window.chart = chart;
            $scope.$watchGroup(['settings', 'settings.__watch', 'data', 'data.__watch'],
                function (newVal, oldVal) {
                    if (newVal === oldVal) return;
                    netChart.updateSettings(getSettings($scope, $element));
                });

            $scope.$watchCollection('selection',
                function (newVal, oldVal) {
                    netChart.selection($scope.selection);
                });

            netChart.on("selectionChange", function (event) {
                $scope.$evalAsync(function () {
                    $scope.selection = event.selection;
                });
            });

            var previousClickHandler = null;
            $scope.$watch('zcClick', function() {
                if (previousClickHandler) netChart.off("click", previousClickHandler);
                previousClickHandler = wrapEventHandler($scope, $scope.zcClick);
                if (previousClickHandler) netChart.on("click", previousClickHandler);
            });

            $scope.$on("$destroy", function () {
                // netChart.remove();
            });
        }
    };
});