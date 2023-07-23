"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[850],{"../metrika-charts/build/_shared/format/formatting.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T3:function(){return formatPercent},vg:function(){return formattersForTypes},wO:function(){return formatForRange}});var _metrika_elastic_charts__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@metrika+elastic-charts@31.7.5_7qghoc6adnbztkoniq3d7qcho4/node_modules/@metrika/elastic-charts/dist/_es6/index.js"),d3_format__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/defaultLocale.js");const DAY_FORMATTER=datetime=>(0,_metrika_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.g6)("DD MMM HH:mm")(datetime),MONTH_FORMATTER=(0,_metrika_elastic_charts__WEBPACK_IMPORTED_MODULE_0__.g6)("MMM'YY"),formatForRange=range=>range<7776e6?DAY_FORMATTER:date=>MONTH_FORMATTER(date).toUpperCase(),bigValueFormatter=v=>{const s=["K","M","B"];for(let i=s.length-1;i>=0;i--)if(Math.abs(v)>=Math.pow(1e3,i+1))return(v/Math.pow(1e3,i+1)).toFixed(2)+s[i];return v+""},pipe=(...fns)=>arg=>fns.reduce(((acc,fn)=>fn?fn(acc):acc),arg),microAlgoToAlgo=uAlgo=>uAlgo/1e6,formatTwoDecimalPlaces=value=>value.toLocaleString("en-US",{maximumFractionDigits:2}),formatPercent=value=>d3_format__WEBPACK_IMPORTED_MODULE_1__.WU(".2%")(value),formattersForTypes={algo_algo:[pipe(microAlgoToAlgo,formatTwoDecimalPlaces),pipe(microAlgoToAlgo,(value=>bigValueFormatter(value)))],algo_microalgo:[formatTwoDecimalPlaces,value=>bigValueFormatter(value)],algo_address:[value=>value.slice(0,6),void 0],number:[formatTwoDecimalPlaces,bigValueFormatter],percent:[formatPercent,void 0]}},"../metrika-charts/build/charts/line-bar-area/engine/elastic/ElasticLineBarArea.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return elastic_ElasticLineBarArea}});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_es6=__webpack_require__("../../node_modules/.pnpm/@metrika+elastic-charts@31.7.5_7qghoc6adnbztkoniq3d7qcho4/node_modules/@metrika/elastic-charts/dist/_es6/index.js"),context=__webpack_require__("../metrika-charts/build/_shared/theme/context.js"),react=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),events_context=__webpack_require__("../metrika-charts/build/_shared/events/context.js");var formatting=__webpack_require__("../metrika-charts/build/_shared/format/formatting.js");const formatForUnit=(unit,data)=>{if("datetime"===unit){const series=data.find((s=>s.length>0));if(!series||0===series.length)return a=>a;const rangeMin=series[0][0],rangeMax=series[series.length-1][0];return(0,formatting.wO)(rangeMax-rangeMin)}return formatting.vg[unit][0]},calcChartRotation=domainSide=>{switch(domainSide){case"bottom":default:return 0;case"left":return 90;case"right":return-90;case"top":return 180}},lineStyles={point:{visible:!1},line:{strokeWidth:2}},gridStyle={visible:!0,stroke:"#E0E0E0",strokeWidth:1},chartTheme=Object.assign(Object.assign({chartMargins:{left:16,bottom:16,right:16}},{axes:{axisTitle:{fill:"#393939",fontSize:12,fontStyle:"normal",fontFamily:"IBM Plex Mono"},axisLine:{stroke:"#E0E0E0",strokeWidth:1},tickLabel:{fill:"#161616",fontSize:10,fontFamily:"IBM Plex Mono",fontStyle:"normal"},tickLine:{visible:!0,stroke:"#8D8D8D",strokeWidth:1,size:4}}}),{barSeriesStyle:{displayValue:{fontSize:10,fontFamily:"IBM Plex Mono",fontStyle:"normal",padding:0,fill:"#161616",alignment:{vertical:"middle"}}}});var elastic_ElasticLineBarArea=({data:data,format:format,className:className,syncTooltipEnabled:syncTooltipEnabled,syncTooltipVisible:syncTooltipVisible})=>{var _a;const{ref:ref,elasticXYEventsProps:elasticXYEventsProps}=function useElasticSyncTooltips({enabled:enabled,visible:visible}){const eventsBus=(0,events_context.XC)(),ref=react.useRef(null);(0,react.useEffect)((()=>null==eventsBus?void 0:eventsBus.subscribe(ref)),[eventsBus]);const elasticXYEventsProps=(0,react.useMemo)((()=>{if(enabled)return{onPointerUpdate:null==eventsBus?void 0:eventsBus.elastic_onPointerUpdate,pointerUpdateDebounce:0,pointerUpdateTrigger:"x",externalPointerEvents:{tooltip:{visible:visible}}}}),[eventsBus,enabled,visible]);return{ref:ref,elasticXYEventsProps:elasticXYEventsProps}}({enabled:syncTooltipEnabled,visible:syncTooltipVisible}),ChartsPalette=(0,context.Fg)().data.colors;if(void 0===format)return null;const groups=new Set;format.seriesId.forEach((id=>{var _a;format.seriesInfo&&format.seriesInfo[id]&&groups.add(null===(_a=format.seriesInfo[id])||void 0===_a?void 0:_a.axisName)}));const axisDomainGroups=groups,axes=null===(_a=format.axes)||void 0===_a?void 0:_a.map(((axis,i)=>{var _a;let tickFormat,labelFormat;const domainSide=format.domainSide||"bottom";let domain;if(((side1,side2)=>{if(side1===side2)return!0;const rotSum=calcChartRotation(side1)+calcChartRotation(side2);return 180===rotSum||0===rotSum})(axis.position,domainSide))axisDomainGroups.delete(axis.axisName),tickFormat=formatForUnit(format.domainUnit,data);else{if(axis.domain){domain={fit:axis.domain.fit,min:axis.domain.min,max:axis.domain.max};const yMax=data.reduce(((max,serie)=>{const maxSere=serie.reduce(((ms,v)=>"number"!=typeof v[1]||ms>v[1]?ms:v[1]),-1/0);return maxSere>max?maxSere:max}),-1/0),yMin=data.reduce(((max,serie)=>{const maxSere=serie.reduce(((ms,v)=>"number"!=typeof v[1]||ms<v[1]?ms:v[1]),1/0);return maxSere<max?maxSere:max}),1/0);if(yMax-yMin<.001){let min=yMin<1/0?yMin-(axis.domain.padPercent||.1)*yMin:void 0;"percent"===axis.displayUnit&&min&&min<0&&(min=0);let max=yMax>-1/0?yMax+(axis.domain.padPercent||.1)*yMax:void 0;"percent"===axis.displayUnit&&max&&max>1&&(max=1),domain={fit:axis.domain.fit,min:axis.domain.min||min,max:axis.domain.max||max}}}const formatters=formatting.vg[null!==(_a=axis.displayUnit)&&void 0!==_a?_a:""];formatters&&(tickFormat=formatters[0],labelFormat=formatters[1])}return(0,jsx_runtime.jsx)(_es6.RD,{id:i+"",position:axis.position,title:axis.title,tickFormat:tickFormat,labelFormat:labelFormat,showOverlappingTicks:!0,domain:domain,groupId:axis.axisName,gridLine:axis.gridLines?gridStyle:void 0},"axis_"+i)}));axisDomainGroups.forEach(((groupId,i)=>{const domainSide=format.domainSide||"bottom",tickFormat=formatForUnit(format.domainUnit,data);null==axes||axes.push((0,jsx_runtime.jsx)(_es6.RD,{id:"groupfiller_"+i,position:domainSide,hide:!0,groupId:groupId,tickFormat:tickFormat},"groupfiller_"+i))}));const chartHasData=data.some((serie=>serie.length>0));return(0,jsx_runtime.jsxs)(_es6.kL,{ref:ref,className:className,children:[(0,jsx_runtime.jsx)(_es6.Zr,Object.assign({showLegend:!0,theme:chartTheme,legendPosition:_es6.Ly.Top,rotation:calcChartRotation(format.domainSide)},elasticXYEventsProps)),chartHasData&&axes,data.map(((series,i)=>{const seriesId=format.seriesId[i],seriesInfo=format.seriesInfo[seriesId],seriesProps={key:i,id:seriesId,name:(null==seriesInfo?void 0:seriesInfo.name)||seriesId,color:(null==seriesInfo?void 0:seriesInfo.color)||ChartsPalette[i],xScaleType:(unit=format.domainUnit,"datetime"===unit?_es6.N3.Time:"number"===unit||"percent"===unit?_es6.N3.Linear:_es6.N3.Ordinal),yScaleType:_es6.N3.Linear,xAccessor:0,yAccessors:[1],yNice:!0,data:series,groupId:null==seriesInfo?void 0:seriesInfo.axisName};var unit;return"bar"===(null==seriesInfo?void 0:seriesInfo.type)?(0,jsx_runtime.jsx)(_es6.QG,Object.assign({},seriesProps,{stackAccessors:"grouped"===seriesInfo.subType?void 0:[0],displayValueSettings:{showValueLabel:seriesInfo.showLabels,isValueContainedInElement:!0}})):"area"===(null==seriesInfo?void 0:seriesInfo.type)?(0,jsx_runtime.jsx)(_es6.f6,Object.assign({},seriesProps,{stackAccessors:"stacked"===seriesInfo.subType?[0]:void 0,stackMode:seriesInfo.stackMode,areaSeriesStyle:lineStyles})):(0,jsx_runtime.jsx)(_es6.eh,Object.assign({},seriesProps,{lineSeriesStyle:lineStyles}))}))]})}},"../../node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/defaultLocale.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function formatDecimalParts(x,p){if((i=(x=p?x.toExponential(p-1):x.toExponential()).indexOf("e"))<0)return null;var i,coefficient=x.slice(0,i);return[coefficient.length>1?coefficient[0]+coefficient.slice(2):coefficient,+x.slice(i+1)]}__webpack_require__.d(__webpack_exports__,{WU:function(){return format}});var prefixExponent,re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(specifier){if(!(match=re.exec(specifier)))throw new Error("invalid format: "+specifier);var match;return new FormatSpecifier({fill:match[1],align:match[2],sign:match[3],symbol:match[4],zero:match[5],width:match[6],comma:match[7],precision:match[8]&&match[8].slice(1),trim:match[9],type:match[10]})}function FormatSpecifier(specifier){this.fill=void 0===specifier.fill?" ":specifier.fill+"",this.align=void 0===specifier.align?">":specifier.align+"",this.sign=void 0===specifier.sign?"-":specifier.sign+"",this.symbol=void 0===specifier.symbol?"":specifier.symbol+"",this.zero=!!specifier.zero,this.width=void 0===specifier.width?void 0:+specifier.width,this.comma=!!specifier.comma,this.precision=void 0===specifier.precision?void 0:+specifier.precision,this.trim=!!specifier.trim,this.type=void 0===specifier.type?"":specifier.type+""}function formatRounded(x,p){var d=formatDecimalParts(x,p);if(!d)return x+"";var coefficient=d[0],exponent=d[1];return exponent<0?"0."+new Array(-exponent).join("0")+coefficient:coefficient.length>exponent+1?coefficient.slice(0,exponent+1)+"."+coefficient.slice(exponent+1):coefficient+new Array(exponent-coefficient.length+2).join("0")}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var formatTypes={"%":(x,p)=>(100*x).toFixed(p),b:x=>Math.round(x).toString(2),c:x=>x+"",d:function formatDecimal(x){return Math.abs(x=Math.round(x))>=1e21?x.toLocaleString("en").replace(/,/g,""):x.toString(10)},e:(x,p)=>x.toExponential(p),f:(x,p)=>x.toFixed(p),g:(x,p)=>x.toPrecision(p),o:x=>Math.round(x).toString(8),p:(x,p)=>formatRounded(100*x,p),r:formatRounded,s:function formatPrefixAuto(x,p){var d=formatDecimalParts(x,p);if(!d)return x+"";var coefficient=d[0],exponent=d[1],i=exponent-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(exponent/3))))+1,n=coefficient.length;return i===n?coefficient:i>n?coefficient+new Array(i-n+1).join("0"):i>0?coefficient.slice(0,i)+"."+coefficient.slice(i):"0."+new Array(1-i).join("0")+formatDecimalParts(x,Math.max(0,p+i-1))[0]},X:x=>Math.round(x).toString(16).toUpperCase(),x:x=>Math.round(x).toString(16)};function identity(x){return x}var defaultLocale_locale,format,map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function locale(locale){var group=void 0===locale.grouping||void 0===locale.thousands?identity:function formatGroup(grouping,thousands){return function(value,width){for(var i=value.length,t=[],j=0,g=grouping[0],length=0;i>0&&g>0&&(length+g+1>width&&(g=Math.max(1,width-length)),t.push(value.substring(i-=g,i+g)),!((length+=g+1)>width));)g=grouping[j=(j+1)%grouping.length];return t.reverse().join(thousands)}}(map.call(locale.grouping,Number),locale.thousands+""),currencyPrefix=void 0===locale.currency?"":locale.currency[0]+"",currencySuffix=void 0===locale.currency?"":locale.currency[1]+"",decimal=void 0===locale.decimal?".":locale.decimal+"",numerals=void 0===locale.numerals?identity:function formatNumerals(numerals){return function(value){return value.replace(/[0-9]/g,(function(i){return numerals[+i]}))}}(map.call(locale.numerals,String)),percent=void 0===locale.percent?"%":locale.percent+"",minus=void 0===locale.minus?"−":locale.minus+"",nan=void 0===locale.nan?"NaN":locale.nan+"";function newFormat(specifier){var fill=(specifier=formatSpecifier(specifier)).fill,align=specifier.align,sign=specifier.sign,symbol=specifier.symbol,zero=specifier.zero,width=specifier.width,comma=specifier.comma,precision=specifier.precision,trim=specifier.trim,type=specifier.type;"n"===type?(comma=!0,type="g"):formatTypes[type]||(void 0===precision&&(precision=12),trim=!0,type="g"),(zero||"0"===fill&&"="===align)&&(zero=!0,fill="0",align="=");var prefix="$"===symbol?currencyPrefix:"#"===symbol&&/[boxX]/.test(type)?"0"+type.toLowerCase():"",suffix="$"===symbol?currencySuffix:/[%p]/.test(type)?percent:"",formatType=formatTypes[type],maybeSuffix=/[defgprs%]/.test(type);function format(value){var i,n,c,valuePrefix=prefix,valueSuffix=suffix;if("c"===type)valueSuffix=formatType(value)+valueSuffix,value="";else{var valueNegative=(value=+value)<0||1/value<0;if(value=isNaN(value)?nan:formatType(Math.abs(value),precision),trim&&(value=function formatTrim(s){out:for(var i1,n=s.length,i=1,i0=-1;i<n;++i)switch(s[i]){case".":i0=i1=i;break;case"0":0===i0&&(i0=i),i1=i;break;default:if(!+s[i])break out;i0>0&&(i0=0)}return i0>0?s.slice(0,i0)+s.slice(i1+1):s}(value)),valueNegative&&0==+value&&"+"!==sign&&(valueNegative=!1),valuePrefix=(valueNegative?"("===sign?sign:minus:"-"===sign||"("===sign?"":sign)+valuePrefix,valueSuffix=("s"===type?prefixes[8+prefixExponent/3]:"")+valueSuffix+(valueNegative&&"("===sign?")":""),maybeSuffix)for(i=-1,n=value.length;++i<n;)if(48>(c=value.charCodeAt(i))||c>57){valueSuffix=(46===c?decimal+value.slice(i+1):value.slice(i))+valueSuffix,value=value.slice(0,i);break}}comma&&!zero&&(value=group(value,1/0));var length=valuePrefix.length+value.length+valueSuffix.length,padding=length<width?new Array(width-length+1).join(fill):"";switch(comma&&zero&&(value=group(padding+value,padding.length?width-valueSuffix.length:1/0),padding=""),align){case"<":value=valuePrefix+value+valueSuffix+padding;break;case"=":value=valuePrefix+padding+value+valueSuffix;break;case"^":value=padding.slice(0,length=padding.length>>1)+valuePrefix+value+valueSuffix+padding.slice(length);break;default:value=padding+valuePrefix+value+valueSuffix}return numerals(value)}return precision=void 0===precision?6:/[gprs]/.test(type)?Math.max(1,Math.min(21,precision)):Math.max(0,Math.min(20,precision)),format.toString=function(){return specifier+""},format}return{format:newFormat,formatPrefix:function formatPrefix(specifier,value){var f=newFormat(((specifier=formatSpecifier(specifier)).type="f",specifier)),e=3*Math.max(-8,Math.min(8,Math.floor(function exponent(x){return(x=formatDecimalParts(Math.abs(x)))?x[1]:NaN}(value)/3))),k=Math.pow(10,-e),prefix=prefixes[8+e/3];return function(value){return f(k*value)+prefix}}}}!function defaultLocale(definition){return defaultLocale_locale=locale(definition),format=defaultLocale_locale.format,defaultLocale_locale.formatPrefix,defaultLocale_locale}({thousands:",",grouping:[3],currency:["$",""]})}}]);