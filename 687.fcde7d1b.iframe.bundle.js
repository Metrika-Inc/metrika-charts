"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[687],{"../metrika-charts/build/_shared/useResizeObserver.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return useResizeObserver}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");function useResizeObserver(){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:0,height:0});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!ref.current)return;const resizeObserver=new ResizeObserver((entries=>{const{width:width,height:height}=entries[0].contentRect;setSize({width:width,height:height})})),element=ref.current;return resizeObserver.observe(element),()=>{resizeObserver.unobserve(element)}}),[]),Object.assign({ref:ref},size)}},"../metrika-charts/build/charts/donut/engine/echarts/EchartsDonut.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),echarts_charts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/chart/pie/install.js"),echarts_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/component/tooltip/install.js"),echarts_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/component/legend/install.js"),echarts_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/component/legend/installLegendPlain.js"),echarts_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/extension.js"),echarts_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/core.js"),echarts_renderers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/renderer/installCanvasRenderer.js"),echarts_renderers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/echarts@5.4.3/node_modules/echarts/lib/renderer/installSVGRenderer.js"),echarts_for_react_lib_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/echarts-for-react@3.0.2_echarts@5.4.3+react@17.0.2/node_modules/echarts-for-react/lib/core.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),_shared__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../metrika-charts/build/_shared/theme/context.js"),_shared_useResizeObserver__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../metrika-charts/build/_shared/useResizeObserver.js");echarts_core__WEBPACK_IMPORTED_MODULE_3__.D([echarts_components__WEBPACK_IMPORTED_MODULE_4__.N,echarts_charts__WEBPACK_IMPORTED_MODULE_5__.N,echarts_renderers__WEBPACK_IMPORTED_MODULE_6__.N,echarts_renderers__WEBPACK_IMPORTED_MODULE_7__.N,echarts_components__WEBPACK_IMPORTED_MODULE_8__.N,echarts_components__WEBPACK_IMPORTED_MODULE_9__.N]);__webpack_exports__.default=({data:data,format:format})=>{const theme=(0,_shared__WEBPACK_IMPORTED_MODULE_10__.Fg)(),{ref:divRef,width:width,height:height}=(0,_shared_useResizeObserver__WEBPACK_IMPORTED_MODULE_11__.y)(),currentData=react__WEBPACK_IMPORTED_MODULE_2__.useMemo((()=>{const colorObj=theme.isDark&&format.colorsDark||format.colors;return format.layers.length>0?data.map((d=>({itemStyle:{color:colorObj?colorObj[d[format.layers[0].sliceKey]]:void 0},value:Number(d[format.layers[0].valueKey]),name:format.labels&&format.labels[d[format.layers[0].sliceKey]]?format.labels[d[format.layers[0].sliceKey]]:String(d[format.layers[0].sliceKey])}))):[]}),[data,format,theme.isDark]),serieName=format.layers.length>0&&format.layers[0].layerName||"",chartOptions=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>({backgroundColor:theme.base.background.color,tooltip:{trigger:"item",formatter:serieName?"{a} <br/><strong>{b}</strong>: {c} ({d}%)":"<strong>{b}</strong>: {c} ({d}%)"},legend:{mainType:"legend",orient:"horizontal",align:"auto",itemGap:16,padding:16,textStyle:{fontSize:12,fontWeight:"normal",fontFamily:theme.base.fontFamily}},percentPrecision:2,series:[{name:serieName,type:"pie",radius:width>0&&width<480?["33%","50%"]:["66%","100%"],avoidLabelOverlap:!0,label:{show:!0,fontSize:12,fontWeight:"normal",fontFamily:theme.base.fontFamily,formatter:"{b}: {d}%"},emphasis:{label:{show:!0,fontSize:14,fontWeight:"bold",fontFamily:theme.base.fontFamily}},labelLine:{length:16},data:currentData,left:16,top:64,right:16,bottom:32}]})),[currentData,serieName,width,theme]),onEvents=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>({finished:e=>{},rendered:e=>{}})),[]),chartOpts=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>({renderer:format.renderer||"canvas"})),[format.renderer]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{height:"100%",width:"100%"},ref:divRef,children:width>0&&height>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(echarts_for_react_lib_core__WEBPACK_IMPORTED_MODULE_1__.Z,{style:{height:"100%",width:"100%"},echarts:echarts_core__WEBPACK_IMPORTED_MODULE_12__,option:chartOptions,notMerge:!0,lazyUpdate:!0,theme:theme.isDark?"dark":void 0,onEvents:onEvents,opts:chartOpts}):null})}}}]);