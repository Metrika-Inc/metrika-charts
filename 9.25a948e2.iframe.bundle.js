(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"../../node_modules/core-js/internals/array-reduce.js":function(module,exports,__webpack_require__){var global=__webpack_require__("../../node_modules/core-js/internals/global.js"),aCallable=__webpack_require__("../../node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("../../node_modules/core-js/internals/to-object.js"),IndexedObject=__webpack_require__("../../node_modules/core-js/internals/indexed-object.js"),lengthOfArrayLike=__webpack_require__("../../node_modules/core-js/internals/length-of-array-like.js"),TypeError=global.TypeError,createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aCallable(callbackfn);var O=toObject(that),self=IndexedObject(O),length=lengthOfArrayLike(O),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1;if(argumentsLength<2)for(;;){if(index in self){memo=self[index],index+=i;break}if(index+=i,IS_RIGHT?index<0:length<=index)throw TypeError("Reduce of empty array with no initial value")}for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O));return memo}};module.exports={left:createMethod(!1),right:createMethod(!0)}},"../../node_modules/core-js/internals/engine-ff-version.js":function(module,exports,__webpack_require__){var firefox=__webpack_require__("../../node_modules/core-js/internals/engine-user-agent.js").match(/firefox\/(\d+)/i);module.exports=!!firefox&&+firefox[1]},"../../node_modules/core-js/internals/engine-is-ie-or-edge.js":function(module,exports,__webpack_require__){var UA=__webpack_require__("../../node_modules/core-js/internals/engine-user-agent.js");module.exports=/MSIE|Trident/.test(UA)},"../../node_modules/core-js/internals/engine-webkit-version.js":function(module,exports,__webpack_require__){var webkit=__webpack_require__("../../node_modules/core-js/internals/engine-user-agent.js").match(/AppleWebKit\/(\d+)\./);module.exports=!!webkit&&+webkit[1]},"../../node_modules/core-js/modules/es.array.reduce.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$reduce=__webpack_require__("../../node_modules/core-js/internals/array-reduce.js").left,arrayMethodIsStrict=__webpack_require__("../../node_modules/core-js/internals/array-method-is-strict.js"),CHROME_VERSION=__webpack_require__("../../node_modules/core-js/internals/engine-v8-version.js"),IS_NODE=__webpack_require__("../../node_modules/core-js/internals/engine-is-node.js");$({target:"Array",proto:!0,forced:!arrayMethodIsStrict("reduce")||!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83},{reduce:function reduce(callbackfn){var length=arguments.length;return $reduce(this,callbackfn,length,length>1?arguments[1]:void 0)}})},"../../node_modules/core-js/modules/es.array.sort.js":function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),aCallable=__webpack_require__("../../node_modules/core-js/internals/a-callable.js"),toObject=__webpack_require__("../../node_modules/core-js/internals/to-object.js"),lengthOfArrayLike=__webpack_require__("../../node_modules/core-js/internals/length-of-array-like.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),internalSort=__webpack_require__("../../node_modules/core-js/internals/array-sort.js"),arrayMethodIsStrict=__webpack_require__("../../node_modules/core-js/internals/array-method-is-strict.js"),FF=__webpack_require__("../../node_modules/core-js/internals/engine-ff-version.js"),IE_OR_EDGE=__webpack_require__("../../node_modules/core-js/internals/engine-is-ie-or-edge.js"),V8=__webpack_require__("../../node_modules/core-js/internals/engine-v8-version.js"),WEBKIT=__webpack_require__("../../node_modules/core-js/internals/engine-webkit-version.js"),test=[],un$Sort=uncurryThis(test.sort),push=uncurryThis(test.push),FAILS_ON_UNDEFINED=fails((function(){test.sort(void 0)})),FAILS_ON_NULL=fails((function(){test.sort(null)})),STRICT_METHOD=arrayMethodIsStrict("sort"),STABLE_SORT=!fails((function(){if(V8)return V8<70;if(!(FF&&FF>3)){if(IE_OR_EDGE)return!0;if(WEBKIT)return WEBKIT<603;var code,chr,value,index,result="";for(code=65;code<76;code++){switch(chr=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:value=3;break;case 68:case 71:value=4;break;default:value=2}for(index=0;index<47;index++)test.push({k:chr+index,v:value})}for(test.sort((function(a,b){return b.v-a.v})),index=0;index<test.length;index++)chr=test[index].k.charAt(0),result.charAt(result.length-1)!==chr&&(result+=chr);return"DGBEFHACIJK"!==result}}));$({target:"Array",proto:!0,forced:FAILS_ON_UNDEFINED||!FAILS_ON_NULL||!STRICT_METHOD||!STABLE_SORT},{sort:function sort(comparefn){void 0!==comparefn&&aCallable(comparefn);var array=toObject(this);if(STABLE_SORT)return void 0===comparefn?un$Sort(array):un$Sort(array,comparefn);var itemsLength,index,items=[],arrayLength=lengthOfArrayLike(array);for(index=0;index<arrayLength;index++)index in array&&push(items,array[index]);for(internalSort(items,function(comparefn){return function(x,y){return void 0===y?-1:void 0===x?1:void 0!==comparefn?+comparefn(x,y)||0:toString(x)>toString(y)?1:-1}}(comparefn)),itemsLength=items.length,index=0;index<itemsLength;)array[index]=items[index++];for(;index<arrayLength;)delete array[index++];return array}})},"../../node_modules/deepmerge/dist/cjs.js":function(module,exports,__webpack_require__){"use strict";var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return target.propertyIsEnumerable(symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"../metrika-charts/build/_shared/format/formatting.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return formatForRange})),__webpack_require__.d(__webpack_exports__,"b",(function(){return formattersForTypes}));__webpack_require__("../../node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js");var _es6=__webpack_require__("../../node_modules/@metrika/charts/dist/_es6/index.js");function formatDecimalParts(x,p){if((i=(x=p?x.toExponential(p-1):x.toExponential()).indexOf("e"))<0)return null;var i,coefficient=x.slice(0,i);return[coefficient.length>1?coefficient[0]+coefficient.slice(2):coefficient,+x.slice(i+1)]}var re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(specifier){if(!(match=re.exec(specifier)))throw new Error("invalid format: "+specifier);var match;return new FormatSpecifier({fill:match[1],align:match[2],sign:match[3],symbol:match[4],zero:match[5],width:match[6],comma:match[7],precision:match[8]&&match[8].slice(1),trim:match[9],type:match[10]})}function FormatSpecifier(specifier){this.fill=void 0===specifier.fill?" ":specifier.fill+"",this.align=void 0===specifier.align?">":specifier.align+"",this.sign=void 0===specifier.sign?"-":specifier.sign+"",this.symbol=void 0===specifier.symbol?"":specifier.symbol+"",this.zero=!!specifier.zero,this.width=void 0===specifier.width?void 0:+specifier.width,this.comma=!!specifier.comma,this.precision=void 0===specifier.precision?void 0:+specifier.precision,this.trim=!!specifier.trim,this.type=void 0===specifier.type?"":specifier.type+""}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var prefixExponent,defaultLocale_locale,defaultLocale_format,formatRounded=function(x,p){var d=formatDecimalParts(x,p);if(!d)return x+"";var coefficient=d[0],exponent=d[1];return exponent<0?"0."+new Array(-exponent).join("0")+coefficient:coefficient.length>exponent+1?coefficient.slice(0,exponent+1)+"."+coefficient.slice(exponent+1):coefficient+new Array(exponent-coefficient.length+2).join("0")},formatTypes={"%":(x,p)=>(100*x).toFixed(p),b:x=>Math.round(x).toString(2),c:x=>x+"",d:function(x){return Math.abs(x=Math.round(x))>=1e21?x.toLocaleString("en").replace(/,/g,""):x.toString(10)},e:(x,p)=>x.toExponential(p),f:(x,p)=>x.toFixed(p),g:(x,p)=>x.toPrecision(p),o:x=>Math.round(x).toString(8),p:(x,p)=>formatRounded(100*x,p),r:formatRounded,s:function(x,p){var d=formatDecimalParts(x,p);if(!d)return x+"";var coefficient=d[0],exponent=d[1],i=exponent-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(exponent/3))))+1,n=coefficient.length;return i===n?coefficient:i>n?coefficient+new Array(i-n+1).join("0"):i>0?coefficient.slice(0,i)+"."+coefficient.slice(i):"0."+new Array(1-i).join("0")+formatDecimalParts(x,Math.max(0,p+i-1))[0]},X:x=>Math.round(x).toString(16).toUpperCase(),x:x=>Math.round(x).toString(16)},identity=function(x){return x},map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],src_locale=function(locale){var grouping,thousands,group=void 0===locale.grouping||void 0===locale.thousands?identity:(grouping=map.call(locale.grouping,Number),thousands=locale.thousands+"",function(value,width){for(var i=value.length,t=[],j=0,g=grouping[0],length=0;i>0&&g>0&&(length+g+1>width&&(g=Math.max(1,width-length)),t.push(value.substring(i-=g,i+g)),!((length+=g+1)>width));)g=grouping[j=(j+1)%grouping.length];return t.reverse().join(thousands)}),currencyPrefix=void 0===locale.currency?"":locale.currency[0]+"",currencySuffix=void 0===locale.currency?"":locale.currency[1]+"",decimal=void 0===locale.decimal?".":locale.decimal+"",numerals=void 0===locale.numerals?identity:function(numerals){return function(value){return value.replace(/[0-9]/g,(function(i){return numerals[+i]}))}}(map.call(locale.numerals,String)),percent=void 0===locale.percent?"%":locale.percent+"",minus=void 0===locale.minus?"−":locale.minus+"",nan=void 0===locale.nan?"NaN":locale.nan+"";function newFormat(specifier){var fill=(specifier=formatSpecifier(specifier)).fill,align=specifier.align,sign=specifier.sign,symbol=specifier.symbol,zero=specifier.zero,width=specifier.width,comma=specifier.comma,precision=specifier.precision,trim=specifier.trim,type=specifier.type;"n"===type?(comma=!0,type="g"):formatTypes[type]||(void 0===precision&&(precision=12),trim=!0,type="g"),(zero||"0"===fill&&"="===align)&&(zero=!0,fill="0",align="=");var prefix="$"===symbol?currencyPrefix:"#"===symbol&&/[boxX]/.test(type)?"0"+type.toLowerCase():"",suffix="$"===symbol?currencySuffix:/[%p]/.test(type)?percent:"",formatType=formatTypes[type],maybeSuffix=/[defgprs%]/.test(type);function format(value){var i,n,c,valuePrefix=prefix,valueSuffix=suffix;if("c"===type)valueSuffix=formatType(value)+valueSuffix,value="";else{var valueNegative=(value=+value)<0||1/value<0;if(value=isNaN(value)?nan:formatType(Math.abs(value),precision),trim&&(value=function(s){out:for(var i1,n=s.length,i=1,i0=-1;i<n;++i)switch(s[i]){case".":i0=i1=i;break;case"0":0===i0&&(i0=i),i1=i;break;default:if(!+s[i])break out;i0>0&&(i0=0)}return i0>0?s.slice(0,i0)+s.slice(i1+1):s}(value)),valueNegative&&0==+value&&"+"!==sign&&(valueNegative=!1),valuePrefix=(valueNegative?"("===sign?sign:minus:"-"===sign||"("===sign?"":sign)+valuePrefix,valueSuffix=("s"===type?prefixes[8+prefixExponent/3]:"")+valueSuffix+(valueNegative&&"("===sign?")":""),maybeSuffix)for(i=-1,n=value.length;++i<n;)if(48>(c=value.charCodeAt(i))||c>57){valueSuffix=(46===c?decimal+value.slice(i+1):value.slice(i))+valueSuffix,value=value.slice(0,i);break}}comma&&!zero&&(value=group(value,1/0));var length=valuePrefix.length+value.length+valueSuffix.length,padding=length<width?new Array(width-length+1).join(fill):"";switch(comma&&zero&&(value=group(padding+value,padding.length?width-valueSuffix.length:1/0),padding=""),align){case"<":value=valuePrefix+value+valueSuffix+padding;break;case"=":value=valuePrefix+padding+value+valueSuffix;break;case"^":value=padding.slice(0,length=padding.length>>1)+valuePrefix+value+valueSuffix+padding.slice(length);break;default:value=padding+valuePrefix+value+valueSuffix}return numerals(value)}return precision=void 0===precision?6:/[gprs]/.test(type)?Math.max(1,Math.min(21,precision)):Math.max(0,Math.min(20,precision)),format.toString=function(){return specifier+""},format}return{format:newFormat,formatPrefix:function formatPrefix(specifier,value){var x,f=newFormat(((specifier=formatSpecifier(specifier)).type="f",specifier)),e=3*Math.max(-8,Math.min(8,Math.floor((x=value,((x=formatDecimalParts(Math.abs(x)))?x[1]:NaN)/3)))),k=Math.pow(10,-e),prefix=prefixes[8+e/3];return function(value){return f(k*value)+prefix}}}};!function defaultLocale(definition){return defaultLocale_locale=src_locale(definition),defaultLocale_format=defaultLocale_locale.format,defaultLocale_locale.formatPrefix,defaultLocale_locale}({thousands:",",grouping:[3],currency:["$",""]});var formatting_HOUR_FORMATTER=function HOUR_FORMATTER(datetime){return Object(_es6.k)("HH:mm")(datetime)},formatting_DAY_FORMATTER=function DAY_FORMATTER(datetime){return Object(_es6.k)("DD MMM HH:mm")(datetime)},MONTH_FORMATTER=Object(_es6.k)("MMM'YY"),formatForRange=function formatForRange(range){return range<864e5?formatting_HOUR_FORMATTER:range<7776e6?formatting_DAY_FORMATTER:function(date){return MONTH_FORMATTER(date).toUpperCase()}},bigValueFormatter=function bigValueFormatter(v){return v>=1e9?(v/1e9).toFixed(2)+"B":v>=1e6?(v/1e6).toFixed(2)+"M":v>=1e3?(v/1e3).toFixed(2)+"K":v+""},pipe=function pipe(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function(arg){return fns.reduce((function(acc,fn){return fn?fn(acc):acc}),arg)}},microAlgoToAlgo=function microAlgoToAlgo(uAlgo){return uAlgo/1e6},formatTwoDecimalPlaces=function formatTwoDecimalPlaces(value){return value.toLocaleString("en-US",{maximumFractionDigits:2})},formattersForTypes={algo_algo:[pipe(microAlgoToAlgo,formatTwoDecimalPlaces),pipe(microAlgoToAlgo,(function formatAlgo(value){return bigValueFormatter(value)}))],algo_microalgo:[formatTwoDecimalPlaces,function formatMicroAlgo(value){return bigValueFormatter(value)}],algo_address:[function formatAlgoAddr(value){return value.substring(0,6)},void 0],number:[formatTwoDecimalPlaces,bigValueFormatter],percent:[function formatPercent(value){return defaultLocale_format(".2%")(value)},void 0]}},"../metrika-charts/build/charts/heatmap/engine/elastic/ElasticHeatmap.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../../node_modules/core-js/modules/es.set.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.sort.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.to-fixed.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_es6=__webpack_require__("../../node_modules/@metrika/charts/dist/_es6/index.js"),cjs=__webpack_require__("../../node_modules/deepmerge/dist/cjs.js"),react=__webpack_require__("../../node_modules/react/index.js"),formatting=__webpack_require__("../metrika-charts/build/_shared/format/formatting.js"),HEATMAP_STYLE={grid:{cellHeight:{min:0,max:"fill"},stroke:{width:0,color:"#D3DAE6"}},cell:{maxWidth:"fill",maxHeight:50,border:{stroke:"#D3DAE6",strokeWidth:0}},yAxisLabel:{visible:!0,width:"auto",fontFamily:"IBM Plex Mono",fontSize:10,padding:{left:10,right:10}},xAxisLabel:{position:"top",labelRotation:-90,fontFamily:"IBM Plex Mono",fontSize:10}};__webpack_exports__.default=function ElasticHeatmap(props){var _a,_b,className=props.className,graphData=props.data,emptyData=0===graphData.length,timeSet=new Set;graphData.forEach((function(datum){return timeSet.add(datum[1])}));var timeArr=Array.from(timeSet).sort(),minTime=timeArr[0],maxTime=timeArr[1]-timeArr[0]+timeArr.slice(-1)[0],timeFormatter=Object(formatting.a)(maxTime-minTime),yAxisUnit=null!==(_b=null===(_a=props.meta)||void 0===_a?void 0:_a.yAxisUnit)&&void 0!==_b?_b:"",formats=formatting.b[yAxisUnit],config=Object(react.useMemo)((function(){var _a;return cjs.all([HEATMAP_STYLE,{cell:{label:{visible:!!props.meta.showValueLabels,maxWidth:"fill"}},yAxisLabel:{name:props.meta.yAxisName,formatter:formats?null!==(_a=formats[1])&&void 0!==_a?_a:formats[0]:void 0},xAxisLabel:{name:props.meta.xAxisName,formatter:function formatter(value){return timeFormatter(value)}}}])}),[props.meta.showValueLabels,timeFormatter,formats,props.meta.yAxisName,props.meta.xAxisName]);return emptyData?null:Object(jsx_runtime.jsxs)(_es6.c,Object.assign({className:className},{children:[Object(jsx_runtime.jsx)(_es6.j,{xDomain:{min:minTime,max:maxTime}},void 0),Object(jsx_runtime.jsx)(_es6.d,{id:props.meta.valueId,colorScale:_es6.i.Linear,colors:["#ffffff","#3096D8"],data:graphData,xAccessor:1,yAccessor:0,valueAccessor:2,valueFormatter:function valueFormatter(d){return d?d.toFixed(2):d},ySortPredicate:"numAsc",xScaleType:_es6.i.Time,config:config},void 0)]}),void 0)}}}]);