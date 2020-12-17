﻿(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
	echarts.registerMap('瓒婂崡',{"type":"FeatureCollection","features":[
	{"type":"Feature","id":"VNM","properties":{"name":"瓒婂崡"},"geometry":{"type":"Polygon","coordinates":[[[108.05018,21.55238],[106.715068,20.696851],[105.881682,19.75205],[105.662006,19.058165],[106.426817,18.004121],[107.361954,16.697457],[108.269495,16.079742],[108.877107,15.276691],[109.33527,13.426028],[109.200136,11.666859],[108.36613,11.008321],[107.220929,10.364484],[106.405113,9.53084],[105.158264,8.59976],[104.795185,9.241038],[105.076202,9.918491],[104.334335,10.486544],[105.199915,10.88931],[106.24967,10.961812],[105.810524,11.567615],[107.491403,12.337206],[107.614548,13.535531],[107.382727,14.202441],[107.564525,15.202173],[107.312706,15.908538],[106.556008,16.604284],[105.925762,17.485315],[105.094598,18.666975],[103.896532,19.265181],[104.183388,19.624668],[104.822574,19.886642],[104.435,20.758733],[103.203861,20.766562],[102.754896,21.675137],[102.170436,22.464753],[102.706992,22.708795],[103.504515,22.703757],[104.476858,22.81915],[105.329209,23.352063],[105.811247,22.976892],[106.725403,22.794268],[106.567273,22.218205],[107.04342,21.811899],[108.05018,21.55238]]]}}
	]})
}));