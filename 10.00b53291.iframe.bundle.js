(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var global=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/global.js"),aCallable=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/length-of-array-like.js"),TypeError=global.TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.array.reduce.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../metrika-charts/build/_shared/format/formatting.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return formatForRange})),__webpack_require__.d(__webpack_exports__,"b",(function(){return formattersForTypes}));__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.regexp.exec.js");var _es6=__webpack_require__("../../node_modules/.pnpm/@metrika+elastic-charts@31.5.2_35b6e2dd63923ab2368ba3356e2519a0/node_modules/@metrika/elastic-charts/dist/_es6/index.js");function formatDecimalParts(x,p){if((i=(x=p?x.toExponential(p-1):x.toExponential()).indexOf("e"))<0)return null;var i,coefficient=x.slice(0,i);return[coefficient.length>1?coefficient[0]+coefficient.slice(2):coefficient,+x.slice(i+1)]}var re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(specifier){if(!(match=re.exec(specifier)))throw new Error("invalid format: "+specifier);var match;return new FormatSpecifier({fill:match[1],align:match[2],sign:match[3],symbol:match[4],zero:match[5],width:match[6],comma:match[7],precision:match[8]&&match[8].slice(1),trim:match[9],type:match[10]})}function FormatSpecifier(specifier){this.fill=void 0===specifier.fill?" ":specifier.fill+"",this.align=void 0===specifier.align?">":specifier.align+"",this.sign=void 0===specifier.sign?"-":specifier.sign+"",this.symbol=void 0===specifier.symbol?"":specifier.symbol+"",this.zero=!!specifier.zero,this.width=void 0===specifier.width?void 0:+specifier.width,this.comma=!!specifier.comma,this.precision=void 0===specifier.precision?void 0:+specifier.precision,this.trim=!!specifier.trim,this.type=void 0===specifier.type?"":specifier.type+""}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var prefixExponent,defaultLocale_locale,defaultLocale_format,formatRounded=function(x,p){var d=formatDecimalParts(x,p);if(!d)return x+"";var coefficient=d[0],exponent=d[1];return exponent<0?"0."+new Array(-exponent).join("0")+coefficient:coefficient.length>exponent+1?coefficient.slice(0,exponent+1)+"."+coefficient.slice(exponent+1):coefficient+new Array(exponent-coefficient.length+2).join("0")},formatTypes={"%":(x,p)=>(100*x).toFixed(p),b:x=>Math.round(x).toString(2),c:x=>x+"",d:function(x){return Math.abs(x=Math.round(x))>=1e21?x.toLocaleString("en").replace(/,/g,""):x.toString(10)},e:(x,p)=>x.toExponential(p),f:(x,p)=>x.toFixed(p),g:(x,p)=>x.toPrecision(p),o:x=>Math.round(x).toString(8),p:(x,p)=>formatRounded(100*x,p),r:formatRounded,s:function(x,p){var d=formatDecimalParts(x,p);if(!d)return x+"";var coefficient=d[0],exponent=d[1],i=exponent-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(exponent/3))))+1,n=coefficient.length;return i===n?coefficient:i>n?coefficient+new Array(i-n+1).join("0"):i>0?coefficient.slice(0,i)+"."+coefficient.slice(i):"0."+new Array(1-i).join("0")+formatDecimalParts(x,Math.max(0,p+i-1))[0]},X:x=>Math.round(x).toString(16).toUpperCase(),x:x=>Math.round(x).toString(16)},identity=function(x){return x},map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],src_locale=function(locale){var grouping,thousands,group=void 0===locale.grouping||void 0===locale.thousands?identity:(grouping=map.call(locale.grouping,Number),thousands=locale.thousands+"",function(value,width){for(var i=value.length,t=[],j=0,g=grouping[0],length=0;i>0&&g>0&&(length+g+1>width&&(g=Math.max(1,width-length)),t.push(value.substring(i-=g,i+g)),!((length+=g+1)>width));)g=grouping[j=(j+1)%grouping.length];return t.reverse().join(thousands)}),currencyPrefix=void 0===locale.currency?"":locale.currency[0]+"",currencySuffix=void 0===locale.currency?"":locale.currency[1]+"",decimal=void 0===locale.decimal?".":locale.decimal+"",numerals=void 0===locale.numerals?identity:function(numerals){return function(value){return value.replace(/[0-9]/g,(function(i){return numerals[+i]}))}}(map.call(locale.numerals,String)),percent=void 0===locale.percent?"%":locale.percent+"",minus=void 0===locale.minus?"−":locale.minus+"",nan=void 0===locale.nan?"NaN":locale.nan+"";function newFormat(specifier){var fill=(specifier=formatSpecifier(specifier)).fill,align=specifier.align,sign=specifier.sign,symbol=specifier.symbol,zero=specifier.zero,width=specifier.width,comma=specifier.comma,precision=specifier.precision,trim=specifier.trim,type=specifier.type;"n"===type?(comma=!0,type="g"):formatTypes[type]||(void 0===precision&&(precision=12),trim=!0,type="g"),(zero||"0"===fill&&"="===align)&&(zero=!0,fill="0",align="=");var prefix="$"===symbol?currencyPrefix:"#"===symbol&&/[boxX]/.test(type)?"0"+type.toLowerCase():"",suffix="$"===symbol?currencySuffix:/[%p]/.test(type)?percent:"",formatType=formatTypes[type],maybeSuffix=/[defgprs%]/.test(type);function format(value){var i,n,c,valuePrefix=prefix,valueSuffix=suffix;if("c"===type)valueSuffix=formatType(value)+valueSuffix,value="";else{var valueNegative=(value=+value)<0||1/value<0;if(value=isNaN(value)?nan:formatType(Math.abs(value),precision),trim&&(value=function(s){out:for(var i1,n=s.length,i=1,i0=-1;i<n;++i)switch(s[i]){case".":i0=i1=i;break;case"0":0===i0&&(i0=i),i1=i;break;default:if(!+s[i])break out;i0>0&&(i0=0)}return i0>0?s.slice(0,i0)+s.slice(i1+1):s}(value)),valueNegative&&0==+value&&"+"!==sign&&(valueNegative=!1),valuePrefix=(valueNegative?"("===sign?sign:minus:"-"===sign||"("===sign?"":sign)+valuePrefix,valueSuffix=("s"===type?prefixes[8+prefixExponent/3]:"")+valueSuffix+(valueNegative&&"("===sign?")":""),maybeSuffix)for(i=-1,n=value.length;++i<n;)if(48>(c=value.charCodeAt(i))||c>57){valueSuffix=(46===c?decimal+value.slice(i+1):value.slice(i))+valueSuffix,value=value.slice(0,i);break}}comma&&!zero&&(value=group(value,1/0));var length=valuePrefix.length+value.length+valueSuffix.length,padding=length<width?new Array(width-length+1).join(fill):"";switch(comma&&zero&&(value=group(padding+value,padding.length?width-valueSuffix.length:1/0),padding=""),align){case"<":value=valuePrefix+value+valueSuffix+padding;break;case"=":value=valuePrefix+padding+value+valueSuffix;break;case"^":value=padding.slice(0,length=padding.length>>1)+valuePrefix+value+valueSuffix+padding.slice(length);break;default:value=padding+valuePrefix+value+valueSuffix}return numerals(value)}return precision=void 0===precision?6:/[gprs]/.test(type)?Math.max(1,Math.min(21,precision)):Math.max(0,Math.min(20,precision)),format.toString=function(){return specifier+""},format}return{format:newFormat,formatPrefix:function formatPrefix(specifier,value){var x,f=newFormat(((specifier=formatSpecifier(specifier)).type="f",specifier)),e=3*Math.max(-8,Math.min(8,Math.floor((x=value,((x=formatDecimalParts(Math.abs(x)))?x[1]:NaN)/3)))),k=Math.pow(10,-e),prefix=prefixes[8+e/3];return function(value){return f(k*value)+prefix}}}};!function defaultLocale(definition){return defaultLocale_locale=src_locale(definition),defaultLocale_format=defaultLocale_locale.format,defaultLocale_locale.formatPrefix,defaultLocale_locale}({thousands:",",grouping:[3],currency:["$",""]});var formatting_HOUR_FORMATTER=function HOUR_FORMATTER(datetime){return Object(_es6.k)("HH:mm")(datetime)},formatting_DAY_FORMATTER=function DAY_FORMATTER(datetime){return Object(_es6.k)("DD MMM HH:mm")(datetime)},MONTH_FORMATTER=Object(_es6.k)("MMM'YY"),formatForRange=function formatForRange(range){return range<864e5?formatting_HOUR_FORMATTER:range<7776e6?formatting_DAY_FORMATTER:function(date){return MONTH_FORMATTER(date).toUpperCase()}},bigValueFormatter=function bigValueFormatter(v){return v>=1e9?(v/1e9).toFixed(2)+"B":v>=1e6?(v/1e6).toFixed(2)+"M":v>=1e3?(v/1e3).toFixed(2)+"K":v+""},pipe=function pipe(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(arg){return fns.reduce((function(acc,fn){return fn?fn(acc):acc}),arg)}},microAlgoToAlgo=function microAlgoToAlgo(uAlgo){return uAlgo/1e6},formatTwoDecimalPlaces=function formatTwoDecimalPlaces(value){return value.toLocaleString("en-US",{maximumFractionDigits:2})},formattersForTypes={algo_algo:[pipe(microAlgoToAlgo,formatTwoDecimalPlaces),pipe(microAlgoToAlgo,(function formatAlgo(value){return bigValueFormatter(value)}))],algo_microalgo:[formatTwoDecimalPlaces,function formatMicroAlgo(value){return bigValueFormatter(value)}],algo_address:[function formatAlgoAddr(value){return value.substring(0,6)},void 0],number:[formatTwoDecimalPlaces,bigValueFormatter],percent:[function formatPercent(value){return defaultLocale_format(".2%")(value)},void 0]}},"../metrika-charts/build/charts/linebar/engine/elastic/ElasticLineBar.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.set.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/.pnpm/core-js@3.20.1/node_modules/core-js/modules/es.function.name.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js"),_es6=__webpack_require__("../../node_modules/.pnpm/@metrika+elastic-charts@31.5.2_35b6e2dd63923ab2368ba3356e2519a0/node_modules/@metrika/elastic-charts/dist/_es6/index.js"),context=__webpack_require__("../metrika-charts/build/_shared/theme/context.js"),react=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_default=__webpack_require__.n(react),events_context=__webpack_require__("../metrika-charts/build/_shared/events/context.js");var formatting=__webpack_require__("../metrika-charts/build/_shared/format/formatting.js"),format_scaleTypeForUnit=function scaleTypeForUnit(unit){return"datetime"===unit?_es6.i.Time:"number"===unit||"percent"===unit?_es6.i.Linear:_es6.i.Ordinal},format_formatForUnit=function formatForUnit(unit,data){if("datetime"===unit){var series=data[0];if(0===series.length)return function(a){return a};var rangeMin=series[0][0],rangeMax=series[series.length-1][0];return Object(formatting.a)(rangeMax-rangeMin)}return formatting.b[unit][0]},calcChartRotation=function calcChartRotation(domainSide){switch(domainSide){case"bottom":default:return 0;case"left":return 90;case"right":return-90;case"top":return 180}},gridStyle={visible:!0,stroke:"#E0E0E0",strokeWidth:1},chartTheme=Object.assign(Object.assign({chartMargins:{left:16,bottom:16,right:16}},{axes:{axisTitle:{fill:"#393939",fontSize:12,fontStyle:"normal",fontFamily:"IBM Plex Mono"},axisLine:{stroke:"#E0E0E0",strokeWidth:1},tickLabel:{fill:"#161616",fontSize:10,fontFamily:"IBM Plex Mono",fontStyle:"normal"},tickLine:{visible:!0,stroke:"#8D8D8D",strokeWidth:1,size:4}}}),{barSeriesStyle:{displayValue:{fontSize:10,fontFamily:"IBM Plex Mono",fontStyle:"normal",padding:0,fill:"#161616",alignment:{vertical:"middle"}}}});__webpack_exports__.default=function ElasticLineBar(_ref){var _a,data=_ref.data,meta=_ref.meta,_useElasticSyncToolti=function useElasticSyncTooltips(_ref){var enabled=_ref.enabled,visible=_ref.visible,eventsBus=Object(events_context.b)(),ref=react_default.a.useRef(null);Object(react.useEffect)((function(){return null==eventsBus?void 0:eventsBus.subscribe(ref)}),[eventsBus]);var elasticXYEventsProps=Object(react.useMemo)((function(){if(enabled)return{onPointerUpdate:null==eventsBus?void 0:eventsBus.elastic_onPointerUpdate,pointerUpdateDebounce:0,pointerUpdateTrigger:"x",externalPointerEvents:{tooltip:{visible:visible}}}}),[eventsBus,enabled,visible]);return{ref:ref,elasticXYEventsProps:elasticXYEventsProps}}({enabled:!0,visible:!0}),ref=_useElasticSyncToolti.ref,elasticXYEventsProps=_useElasticSyncToolti.elasticXYEventsProps,ChartsPalette=Object(context.b)().data.colors;if(void 0===meta)return null;var groups=new Set;meta.seriesId.forEach((function(id){meta.seriesInfo&&meta.seriesInfo[id]&&groups.add(meta.seriesInfo[id].groupName)}));var axisDomainGroups=groups,axes=null===(_a=meta.axes)||void 0===_a?void 0:_a.map((function(axis,i){var _a,tickFormat=void 0,labelFormat=void 0,domainSide=meta.domainSide||"bottom",domain=void 0;if(function sameSide(side1,side2){if(side1===side2)return!0;var rotSum=calcChartRotation(side1)+calcChartRotation(side2);return 180===rotSum||0===rotSum}(axis.position,domainSide))axisDomainGroups.delete(axis.groupName),tickFormat=format_formatForUnit(meta.domainUnit,data);else{if(axis.domain){domain={fit:axis.domain.fit,min:axis.domain.min,max:axis.domain.max};var yMax=data.reduce((function(max,serie){var maxSere=serie.reduce((function(ms,v){return ms>v[1]?ms:v[1]}),-1/0);return maxSere>max?maxSere:max}),-1/0),yMin=data.reduce((function(max,serie){var maxSere=serie.reduce((function(ms,v){return ms<v[1]?ms:v[1]}),1/0);return maxSere<max?maxSere:max}),1/0);if(yMin===yMax){var min=yMin<1/0?yMin-(axis.domain.padPercent||.1)*yMin:void 0;"percent"===axis.displayUnit&&min&&min<0&&(min=0);var max=yMax>-1/0?yMax+(axis.domain.padPercent||.1)*yMax:void 0;"percent"===axis.displayUnit&&max&&max>1&&(max=1),domain={fit:axis.domain.fit,min:axis.domain.min||min,max:axis.domain.max||max}}}var formatters=formatting.b[null!==(_a=axis.displayUnit)&&void 0!==_a?_a:""];formatters&&(tickFormat=formatters[0],labelFormat=formatters[1])}return Object(jsx_runtime.jsx)(_es6.a,{id:i+"",position:axis.position,title:axis.title,tickFormat:tickFormat,labelFormat:labelFormat,showOverlappingTicks:!0,domain:domain,groupId:axis.groupName,gridLine:axis.gridLines?gridStyle:void 0},"axis_"+i)}));axisDomainGroups.forEach((function(groupId,i){var domainSide=meta.domainSide||"bottom",tickFormat=format_formatForUnit(meta.domainUnit,data);null==axes||axes.push(Object(jsx_runtime.jsx)(_es6.a,{id:"groupfiller_"+i,position:domainSide,hide:!0,groupId:groupId,tickFormat:tickFormat},"groupfiller_"+i))}));var chartHasData=data.reduce((function(hasData,serie){return hasData&&serie.length>0}),!0);return Object(jsx_runtime.jsxs)(_es6.c,Object.assign({ref:ref},{children:[Object(jsx_runtime.jsx)(_es6.j,Object.assign({showLegend:!0,theme:chartTheme,legendPosition:_es6.h.Top,rotation:calcChartRotation(meta.domainSide)},elasticXYEventsProps),void 0),chartHasData&&axes,data.map((function(series,i){var seriesId=meta.seriesId[i],seriesInfo=meta.seriesInfo?meta.seriesInfo[seriesId]:null,seriesProps=Object.assign(Object.assign({key:i,id:seriesInfo?seriesInfo.name:i+"",color:ChartsPalette[i]||(null==seriesInfo?void 0:seriesInfo.color),xScaleType:format_scaleTypeForUnit(meta.domainUnit),yScaleType:_es6.i.Linear},{xAccessor:0,yAccessors:[1]}),{yNice:!0,data:series,groupId:null==seriesInfo?void 0:seriesInfo.groupName});if(seriesInfo&&"bar"===seriesInfo.type)return Object(jsx_runtime.jsx)(_es6.b,Object.assign({},seriesProps,{stackAccessors:"grouped"===seriesInfo.subType?void 0:[0],displayValueSettings:{showValueLabel:seriesInfo.showLabels,isValueContainedInElement:!0}}),void 0);return Object(jsx_runtime.jsx)(_es6.e,Object.assign({},seriesProps,{lineSeriesStyle:{point:{visible:!1},line:{strokeWidth:2}}}),void 0)}))]}),void 0)}}}]);