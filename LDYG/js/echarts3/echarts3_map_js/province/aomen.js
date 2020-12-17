(function (root, factory) {
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
    echarts.registerMap('婢抽棬', {"type":"FeatureCollection","features":[{"id":"820001","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@LADC^umZ@DONWE@DALBBF@H@DFBBTC"],["@@P@LC@AGM@OECMBABBTCD@DDH"]],"encodeOffsets":[[[116285,22746]],[[116303,22746]]]},"properties":{"cp":[113.552965,22.207882],"name":"鑺卞湴鐜涘爞鍖?,"childNum":2}},{"id":"820002","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@MK@CA@AAGDEB@NVFJG"],"encodeOffsets":[[116281,22734]]},"properties":{"cp":[113.549052,22.199175],"name":"鑺辩帇鍫傚尯","childNum":1}},{"id":"820003","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@EGOB@DNLHE@C"],"encodeOffsets":[[116285,22729]]},"properties":{"cp":[113.550252,22.193791],"name":"鏈涘痉鍫傚尯","childNum":1}},{"id":"820004","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@聼YMVAN@BFCBBDAFHDBBFDHIJJEFDPCHHlYJQ"],"encodeOffsets":[[116313,22707]]},"properties":{"cp":[113.55374,22.188119],"name":"澶у爞鍖?,"childNum":1}},{"id":"820005","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@JICGAECACGEBAAEDBFNXB@"],"encodeOffsets":[[116266,22728]]},"properties":{"cp":[113.54167,22.187778],"name":"椋庨『鍫傚尯","childNum":1}},{"id":"820006","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@聽ZNWRquZCBCC@AEA@@ADCDCAACEAGBQ@INEL"],"encodeOffsets":[[116265,22694]]},"properties":{"cp":[113.558783,22.154124],"name":"鍢夋ā鍫傚尯","childNum":1}},{"id":"820007","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@MOIAIEI@@GE@AAUCBdCFIFR@HAFBBDDBDCBC@@FB@BDDDA\\M"],"encodeOffsets":[[116316,22676]]},"properties":{"cp":[113.56925,22.136546],"name":"璺嚰濉捣鍖?,"childNum":1}},{"id":"820008","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DKMMa_GC_COD@dVDBBF@@HJ@JFJBNPZK"],"encodeOffsets":[[116329,22670]]},"properties":{"cp":[113.559954,22.124049],"name":"鍦ｆ柟娴庡悇鍫傚尯","childNum":1}}],"UTF8Encoding":true});
}));