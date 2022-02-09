(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters=(__webpack_require__("./src/styles/index.css"),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered"});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/Bloc.stories.jsx":"./src/components/Bloc.stories.jsx","./components/Button.stories.jsx":"./src/components/Button.stories.jsx","./components/Carrousel.stories.jsx":"./src/components/Carrousel.stories.jsx","./components/Link.stories.jsx":"./src/components/Link.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/Bloc.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/index.css"),__webpack_require__("./src/styles/scss/button.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Bloc_Bloc=function Bloc(_ref){var space=_ref.space,img=_ref.img;return Object(jsx_runtime.jsx)("section",{children:Object(jsx_runtime.jsx)("img",{src:img,alt:"header",className:"bg-gray-300 block ml-auto mr-auto ".concat("light"===space?"pt-4":"normal"===space?"pt-12":"medium"===space?"pt-20":"big"===space?"pt-28":"")})})};Bloc_Bloc.defaultProps={img:"",space:"light"},Bloc_Bloc.__docgenInfo={description:"",methods:[],displayName:"Bloc",props:{img:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"Define the color of the btn"},space:{defaultValue:{value:'"light"',computed:!1},type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"normal"',computed:!1},{value:'"medium"',computed:!1},{value:'"big"',computed:!1}]},required:!1,description:"Padding top given to the component"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Bloc.jsx"]={name:"Bloc",docgenInfo:Bloc_Bloc.__docgenInfo,path:"src/components/Bloc.jsx"});var bloc2=__webpack_require__.p+"static/media/bloc2.9ba8cd31.jpg",Default=(__webpack_exports__.default={title:"Component/Bloc",component:Bloc_Bloc},function Template(args){return Object(jsx_runtime.jsx)(Bloc_Bloc,Object(objectSpread2.a)({},args))}.bind({}));Default.args={img:bloc2,space:"medium"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Bloc {...args} />"}},Default.parameters)},"./src/components/Button.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"DefaultInoui",(function(){return DefaultInoui})),__webpack_require__.d(__webpack_exports__,"DefaultDark",(function(){return DefaultDark})),__webpack_require__.d(__webpack_exports__,"DefaultIcon",(function(){return DefaultIcon})),__webpack_require__.d(__webpack_exports__,"Edito",(function(){return Edito}));var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/index.css"),__webpack_require__("./src/styles/scss/button.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Button_Button=function Button(_ref){var type=_ref.type,label=_ref.label,icon=_ref.icon;return Object(jsx_runtime.jsxs)("button",{className:"\n            btn\n            default\n            ".concat(type,"\n            ").concat(icon?"icon-btn":"","\n            "),children:[icon&&Object(jsx_runtime.jsx)("span",{className:"icon ".concat(icon)}),label]})};Button_Button.defaultProps={type:"default",onClick:void 0},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'inoui'",computed:!1},{value:"'dark'",computed:!1},{value:"'edito'",computed:!1}]},required:!1,description:"Define the color of the btn"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Click handler"},label:{type:{name:"string"},required:!0,description:"Link contents"},icon:{type:{name:"string"},required:!1,description:"Classname of the icon font"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.jsx"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/components/Button.jsx"});__webpack_exports__.default={title:"Component/Button",component:Button_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object(objectSpread2.a)({},args))},Default=Button_stories_Template.bind({});Default.args={label:"Default",type:"default"};var DefaultInoui=Button_stories_Template.bind({});DefaultInoui.args={label:"Default Inoui",type:"inoui"};var DefaultDark=Button_stories_Template.bind({});DefaultDark.args={label:"Default Dark",type:"dark"};var DefaultIcon=Button_stories_Template.bind({});DefaultIcon.args={label:"Icon button",icon:"phone"};var Edito=Button_stories_Template.bind({});Edito.args={icon:"phone",type:"edito",label:"Edito button"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters),DefaultInoui.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},DefaultInoui.parameters),DefaultDark.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},DefaultDark.parameters),DefaultIcon.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},DefaultIcon.parameters),Edito.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Edito.parameters)},"./src/components/Carrousel.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Inoui",(function(){return Inoui}));var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),lib=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/index.css"),__webpack_require__("./src/styles/scss/slick.scss"),__webpack_require__("./node_modules/react-slick/lib/index.js")),lib_default=__webpack_require__.n(lib),Link=__webpack_require__("./src/components/Link.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),settings={dots:!1,infinite:!0,speed:500,nextArrow:Object(jsx_runtime.jsx)("button",{}),prevArrow:Object(jsx_runtime.jsx)("button",{})},Carrousel_ItemSlide=function ItemSlide(_ref){var slide=_ref.slide,counter=_ref.counter;return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("iframe",{className:"block-videos-iframe bg-white",title:"video - ".concat(slide.title),src:slide.iframe,"data-cookieconsent":"marketing",allowFullScreen:!0,enablejsapi:"1"}),Object(jsx_runtime.jsxs)("div",{className:"w-full flex justify-center items-center bg-white",children:[Object(jsx_runtime.jsx)("span",{className:"w-5/6 text-black text-4xl font-normal break-words",style:{LineHeight:1.2214},children:slide.title}),Object(jsx_runtime.jsx)("span",{className:"w-1/6 text-right text-3xl font-medium slideshow-counter",children:counter})]}),Object(jsx_runtime.jsx)("ul",{className:"pt-3 bg-white",children:slide.link.map((function(link,item){return Object(jsx_runtime.jsx)("li",{className:"links-wrapper",children:Object(jsx_runtime.jsx)(Link.a,{label:link.content,type:"external",blank:!0,forVideo:!0})},item)}))})]})},Carrousel_Carrousel=function Carrousel(_ref2){var slide=_ref2.slide,inoui=_ref2.inoui,space=_ref2.space;return Object(jsx_runtime.jsx)("div",{className:"bg-gray-300 max-w-screen-md mr-auto ml-auto ".concat(inoui&&"inoui-template-container"," ").concat("light"===space?"pt-4":"normal"===space?"pt-12":"medium"===space?"pt-20":"big"===space?"pt-28":""),children:Object(jsx_runtime.jsx)(lib_default.a,Object(objectSpread2.a)(Object(objectSpread2.a)({},settings),{},{children:slide.map((function(item,index){return Object(jsx_runtime.jsx)(Carrousel_ItemSlide,{slide:item,counter:"".concat(index+1,"/").concat(slide.length)},index)}))}))})};lib_default.a.defaultProps={data:{},inoui:!1,slide:{},space:null},Carrousel_Carrousel.__docgenInfo={description:"",methods:[],displayName:"Carrousel",props:{inoui:{type:{name:"bool"},required:!1,description:"if inoui color need to be applied"},space:{type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"normal"',computed:!1},{value:'"medium"',computed:!1},{value:'"big"',computed:!1}]},required:!1,description:"Padding top given to the component"},slide:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},iframe:{name:"string",required:!0},link:{name:"arrayOf",value:{name:"shape",value:{content:{name:"string",required:!0},type:{name:"string",required:!0},url:{name:"string",required:!0}}},required:!0}}}},required:!0,description:"Array of slides"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carrousel.jsx"]={name:"Carrousel",docgenInfo:Carrousel_Carrousel.__docgenInfo,path:"src/components/Carrousel.jsx"});var data=[{title:"Technicentre industriel Nevers Languedoc, une expertise à 360* de votre matériel roulant",iframe:"https://www.youtube.com/embed/oRvaYFlWaT0?enablejsapi=1",link:[{content:"Retrouvez la version retranscrite (DOCX, Français, 40 Ko)",type:"external",url:"sncf.com"},{content:"Les principaux chantiers en 2022",type:"dowload",url:"sncf.com"}]},{title:"Fanny, électrotechnicienne au technicentre de Romilly",iframe:"https://www.youtube.com/embed/yfp47kfy2aM?enablejsapi=1",link:[{content:"blablabla",type:"external",url:"sncf.com"}]},{title:"Numéros pairs ou impairs ?",iframe:"https://www.youtube.com/embed/iZ7RFAFiBeI?enablejsapi=1",link:[{content:"blablabla",type:"dowload",url:"sncf.com"}]}],Carrousel_stories_Template=(__webpack_exports__.default={title:"Component/Carrousel",component:Carrousel_Carrousel},function Template(args){return Object(jsx_runtime.jsx)(Carrousel_Carrousel,Object(objectSpread2.a)({},args))}),Default=Carrousel_stories_Template.bind({});Default.args={inoui:!1,space:"medium",slide:data};var Inoui=Carrousel_stories_Template.bind({});Inoui.args={inoui:!0,space:"light",slide:data},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Carrousel {...args} />"}},Default.parameters),Inoui.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Carrousel {...args} />"}},Inoui.parameters)},"./src/components/Link.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Link}));__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/scss/link.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Link=function Link(_ref){var label=_ref.label,type=_ref.type,href=_ref.href,blank=_ref.blank,inoui=_ref.inoui,fontSize=_ref.fontSize,forVideo=_ref.forVideo;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:"link ".concat(inoui?"inoui ":"").concat(forVideo?"video ":"").concat(type),href:href?"phone"===type?"tel:".concat(href):href:"#",target:blank?"_blank":"",style:{fontSize:"".concat(fontSize)},rel:"noreferrer",children:label})};Link.defaultProps={label:"",type:"internal",href:"",blank:!1,inoui:!1},Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{label:{defaultValue:{value:"''",computed:!1},type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1,description:"Link contents"},type:{defaultValue:{value:"'internal'",computed:!1},type:{name:"enum",value:[{value:"'internal'",computed:!1},{value:"'external'",computed:!1},{value:"'download'",computed:!1},{value:"'tel'",computed:!1}]},required:!1,description:"wheater the link is internal or external"},href:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"link"},blank:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"if link need to be open in a new tab or not"},inoui:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"if theme is inoui or not"},forVideo:{type:{name:"bool"},required:!1,description:"wheather the link is under a video or not"},onClick:{type:{name:"func"},required:!1,description:"Click handler"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link.jsx"]={name:"Link",docgenInfo:Link.__docgenInfo,path:"src/components/Link.jsx"})},"./src/components/Link.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Internal",(function(){return Internal})),__webpack_require__.d(__webpack_exports__,"External",(function(){return External})),__webpack_require__.d(__webpack_exports__,"ExternalInoui",(function(){return ExternalInoui})),__webpack_require__.d(__webpack_exports__,"Download",(function(){return Download})),__webpack_require__.d(__webpack_exports__,"Phone",(function(){return Phone})),__webpack_require__.d(__webpack_exports__,"Videos",(function(){return Videos}));var _home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Link__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/index.css"),__webpack_require__("./src/components/Link.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Component/Link",component:_Link__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_3__.a,Object(_home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Internal=Template.bind({});Internal.args={label:"Internal",type:"internal",blank:!0,fontSize:"1.2rem"};var External=Template.bind({});External.args={label:"External",type:"external",blank:!0};var ExternalInoui=Template.bind({});ExternalInoui.args={label:"External InOui",type:"external",blank:!0,inoui:!0};var Download=Template.bind({});Download.args={label:"Download",type:"download",blank:!0,inoui:!1};var Phone=Template.bind({});Phone.args={label:"Phone InOui",type:"phone",blank:!0,href:"0606060606",inoui:!0};var Videos=Template.bind({});Videos.args={label:"Video",type:"external",forVideo:!0,blank:!0,inoui:!0,fontSize:"1.8rem"},Internal.parameters=Object(_home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Link {...args} />"}},Internal.parameters),External.parameters=Object(_home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Link {...args} />"}},External.parameters),ExternalInoui.parameters=Object(_home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Link {...args} />"}},ExternalInoui.parameters),Download.parameters=Object(_home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Link {...args} />"}},Download.parameters),Phone.parameters=Object(_home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Link {...args} />"}},Phone.parameters),Videos.parameters=Object(_home_psantamaria_app_snc_design_system_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Link {...args} />"}},Videos.parameters)},"./src/styles/index.css":function(module,exports,__webpack_require__){},"./src/styles/scss/button.scss":function(module,exports,__webpack_require__){},"./src/styles/scss/link.scss":function(module,exports,__webpack_require__){},"./src/styles/scss/slick.scss":function(module,exports,__webpack_require__){},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);