(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"../metrika-charts/build/charts/linebar/engine/nivo/NivoLineChart.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.array.map.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_nivo_line__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@nivo+line@0.75.0_3cbae3014f51d2eabdd9406d1d4b15a6/node_modules/@nivo/line/dist/nivo-line.es.js"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_shared_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../metrika-charts/build/_shared/theme/context.js");__webpack_exports__.default=function NivoLineChart(_ref){var data=_ref.data,ChartsPalette=Object(_shared_theme__WEBPACK_IMPORTED_MODULE_4__.b)().data.colors,chartData=Object(react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((function(){return data.map((function(serie,i){return{id:i?"Receiver Count":"Sender count",data:serie.map((function(point){return{x:new Date(point[0]),y:point[1]}}))}}))}),[data]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_nivo_line__WEBPACK_IMPORTED_MODULE_2__.a,{isInteractive:!0,enablePoints:!1,enableCrosshair:!0,enableGridX:!1,crosshairType:"top-left",colors:ChartsPalette,margin:{top:40,right:40,bottom:20,left:60},data:chartData,xScale:{type:"time",format:"native",precision:"minute",useUTC:!0},yScale:{type:"linear"},xFormat:"time:%H:%M",axisLeft:{legendOffset:-42},axisBottom:{format:"%d %b %H:%M",legendOffset:42},pointBorderWidth:1,pointBorderColor:{from:"color",modifiers:[["darker",.3]]},legends:[{anchor:"top-left",direction:"row",itemWidth:100,itemHeight:20,itemsSpacing:20,translateY:-40,translateX:-40,symbolSize:8,symbolShape:"circle",itemDirection:"left-to-right"}]},void 0)}}}]);