webpackJsonp([2,4],{

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(512)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(252)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n@font-face {\n  font-family: \"P22-Book\";\n  src: url(\"/assets/fonts/p22/p22underground-book-p22.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: \"P22-Demi\";\n  src: url(\"/assets/fonts/p22/p22underground-demi-p22.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: \"P22-Light\";\n  src: url(\"/assets/fonts/p22/p22underground-light-p22.ttf\") format(\"truetype\"); }\n\n@font-face {\n  font-family: \"P22-Medium\";\n  src: url(\"/assets/fonts/p22/p22underground-medium-p22.ttf\") format(\"truetype\"); }\n\n@-webkit-keyframes blockRevealRight {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  50% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50.9% {\n    opacity: 1; }\n  51% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes blockRevealRight {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  50% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  50.9% {\n    opacity: 1; }\n  51% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fadeOutUnderlay {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -1; } }\n\n@keyframes fadeOutUnderlay {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    z-index: -1; } }\n\n@-webkit-keyframes blockRevealLeft {\n  0% {\n    opacity: 0; }\n  49.9% {\n    opacity: 0; }\n  50% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  99.9% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; } }\n\n@keyframes blockRevealLeft {\n  0% {\n    opacity: 0; }\n  49.9% {\n    opacity: 0; }\n  50% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  99.9% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; } }\n\n@-webkit-keyframes fadeInSoftDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-15%);\n            transform: translateY(-15%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes fadeInSoftDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-15%);\n            transform: translateY(-15%); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@-webkit-keyframes flashInOut {\n  0% {\n    opacity: 1; }\n  10% {\n    opacity: 1; }\n  20% {\n    opacity: 1; }\n  30% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  60% {\n    opacity: 1; }\n  70% {\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes flashInOut {\n  0% {\n    opacity: 1; }\n  10% {\n    opacity: 1; }\n  20% {\n    opacity: 1; }\n  30% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  60% {\n    opacity: 1; }\n  70% {\n    opacity: 1; }\n  80% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes bounce {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  10% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  11% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  15% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  25% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  35% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  36% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  50% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes bounce {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  10% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  11% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  15% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  25% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  35% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  36% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  50% {\n    -webkit-transform: translateY(1%);\n            transform: translateY(1%); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@-webkit-keyframes clippy {\n  0% {\n    -webkit-clip-path: polygon(170% 0, 250% 0, 231% 100%, 149% 100%);\n            clip-path: polygon(170% 0, 250% 0, 231% 100%, 149% 100%); }\n  100% {\n    -webkit-clip-path: polygon(-120% 0, -130% 0, -145% 100%, -130% 100%);\n            clip-path: polygon(-120% 0, -130% 0, -145% 100%, -130% 100%); } }\n\n@keyframes clippy {\n  0% {\n    -webkit-clip-path: polygon(170% 0, 250% 0, 231% 100%, 149% 100%);\n            clip-path: polygon(170% 0, 250% 0, 231% 100%, 149% 100%); }\n  100% {\n    -webkit-clip-path: polygon(-120% 0, -130% 0, -145% 100%, -130% 100%);\n            clip-path: polygon(-120% 0, -130% 0, -145% 100%, -130% 100%); } }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\n::-moz-selection {\n  background-color: #f2f2f2;\n  color: #000000; }\n\n::selection {\n  background-color: #f2f2f2;\n  color: #000000; }\n\na:focus, button:focus, input:focus {\n  outline: 3px solid #ffbf47; }\n\na {\n  color: white;\n  text-decoration: none; }\n  a.dark {\n    color: #113B92; }\n  a:visited {\n    color: white; }\n\nbody {\n  background-color: #E6E6E6;\n  font-family: \"P22-Demi\", sans-serif;\n  margin: 0;\n  min-height: 100vh;\n  padding: 0;\n  width: 100%; }\n  body.fixed {\n    left: 0;\n    position: fixed;\n    top: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400; }\n\nimg {\n  display: block;\n  max-width: 100%; }\n\np {\n  color: #5d6065;\n  font-family: 'Avenir 55 Roman', sans-serif;\n  font-size: 1.125rem;\n  letter-spacing: -0.1px;\n  line-height: 1.75; }\n  p.grey {\n    color: #8c9396; }\n\nul {\n  margin: 0;\n  padding: 0; }\n  ul > li {\n    line-height: 1.75;\n    margin: 0.5rem 0; }\n\npre {\n  background-color: #eceef1;\n  display: block;\n  padding: 15px; }\n\nform {\n  height: auto;\n  width: 100%; }\n\n.center {\n  text-align: center; }\n\n.bold {\n  font-weight: bold; }\n\n.no-margin-top {\n  margin-top: 0; }\n\n.no-margin-bottom {\n  margin-bottom: 0; }\n\n.small-margin-top {\n  margin-top: 1rem; }\n\n.small-margin-bottom {\n  margin-bottom: 1rem; }\n\n.no-margin {\n  margin: 0 !important; }\n\n.block {\n  display: block; }\n\n.inline {\n  display: inline; }\n\n.inline-block {\n  display: inline-block; }\n\n.full-block {\n  display: block;\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.hidden {\n  opacity: 0; }\n\n.monospace {\n  color: #ccc;\n  font-family: monospace;\n  font-size: 1.1rem; }\n\n.margin-align-left {\n  margin: 0 auto 0 0; }\n\n.margin-align-right {\n  margin: 0 0 0 auto; }\n\n.color-light {\n  color: #c1c0c0; }\n\n.in-viewport {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n.in-viewport.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n.in-viewport.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n.navigation {\n  display: block;\n  width: 100%; }\n\n#container {\n  background-color: #E6E6E6;\n  min-height: 100vh; }\n\n.loading-area {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #113B92;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  height: 100vh;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  width: 100%; }\n  .loading-area__badge {\n    -webkit-animation: bounce 2s ease-in-out 0s infinite normal both running;\n            animation: bounce 2s ease-in-out 0s infinite normal both running;\n    color: #FFFFFF;\n    display: block;\n    margin-bottom: 1rem; }\n    .loading-area__badge--svg {\n      max-width: 30rem; }\n      .loading-area__badge--svg > #train__headlights {\n        -webkit-animation: flashInOut 2s ease-in-out 0s infinite normal both running;\n                animation: flashInOut 2s ease-in-out 0s infinite normal both running; }\n  .loading-area__text {\n    color: #FFFFFF;\n    font-size: 1.5rem;\n    position: absolute;\n    -webkit-transform: translateY(15vh);\n            transform: translateY(15vh); }\n\n.logo__header {\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.logo__medium {\n  height: auto;\n  width: 2.8rem; }\n\n.navigation {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #113B92;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  min-height: 5rem;\n  padding: 2rem 2rem; }\n  .navigation__bar {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap; }\n    @media screen and (min-width: 30rem) {\n      .navigation__bar {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: row nowrap;\n                flex-flow: row nowrap;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; } }\n    .navigation__bar__text {\n      display: block;\n      margin-bottom: 1rem;\n      overflow: hidden;\n      position: relative; }\n      @media screen and (min-width: 30rem) {\n        .navigation__bar__text {\n          margin-bottom: 0; } }\n      .navigation__bar__text:before {\n        -webkit-animation: blockRevealRight 1s ease-in-out 0.3s 1 normal both running;\n                animation: blockRevealRight 1s ease-in-out 0.3s 1 normal both running;\n        background-color: #FFFFFF;\n        content: \"\";\n        display: block;\n        height: 100%;\n        left: 0;\n        overflow: hidden;\n        position: absolute;\n        top: 0;\n        width: 100%; }\n      .navigation__bar__text:after {\n        -webkit-animation: blockRevealLeft 1s ease-in-out 0.3s 1 normal both running;\n                animation: blockRevealLeft 1s ease-in-out 0.3s 1 normal both running;\n        background-color: #FFFFFF;\n        content: \"\";\n        display: block;\n        height: 100%;\n        left: 0;\n        overflow: hidden;\n        position: absolute;\n        top: 0;\n        width: 0;\n        width: 100%; }\n    .navigation__bar__container {\n      list-style: none; }\n    .navigation__bar__items {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: left;\n      width: 100%; }\n      @media screen and (min-width: 30rem) {\n        .navigation__bar__items {\n          text-align: right; } }\n    .navigation__bar__item {\n      color: #FFFFFF;\n      display: inline-block;\n      font-size: 1.25rem;\n      margin: 0 1rem;\n      overflow: hidden; }\n      .navigation__bar__item:first-child {\n        margin-left: 0; }\n      .navigation__bar__item:last-child {\n        margin-right: 0; }\n      .navigation__bar__item__link {\n        color: #FFFFFF;\n        margin: 0.25rem;\n        text-decoration: none; }\n        .navigation__bar__item__link:visited {\n          color: #FFFFFF; }\n    .navigation__bar__logo {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      width: auto; }\n      .navigation__bar__logo .navigation__bar__item {\n        font-size: 1.2rem; }\n\n[line-list]:nth-child(1) .undergroundline__line--loaded:before {\n  background-color: #1342a4; }\n\n[line-list]:nth-child(1) .undergroundline__line {\n  -webkit-animation-delay: 0.15s;\n          animation-delay: 0.15s; }\n\n[line-list]:nth-child(2) .undergroundline__line--loaded:before {\n  background-color: #154ab7; }\n\n[line-list]:nth-child(2) .undergroundline__line {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s; }\n\n[line-list]:nth-child(3) .undergroundline__line--loaded:before {\n  background-color: #1751c9; }\n\n[line-list]:nth-child(3) .undergroundline__line {\n  -webkit-animation-delay: 0.45s;\n          animation-delay: 0.45s; }\n\n[line-list]:nth-child(4) .undergroundline__line--loaded:before {\n  background-color: #1a59db; }\n\n[line-list]:nth-child(4) .undergroundline__line {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s; }\n\n[line-list]:nth-child(5) .undergroundline__line--loaded:before {\n  background-color: #2463e5; }\n\n[line-list]:nth-child(5) .undergroundline__line {\n  -webkit-animation-delay: 0.75s;\n          animation-delay: 0.75s; }\n\n[line-list]:nth-child(6) .undergroundline__line--loaded:before {\n  background-color: #3670e8; }\n\n[line-list]:nth-child(6) .undergroundline__line {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s; }\n\n[line-list]:nth-child(7) .undergroundline__line--loaded:before {\n  background-color: #487dea; }\n\n[line-list]:nth-child(7) .undergroundline__line {\n  -webkit-animation-delay: 1.05s;\n          animation-delay: 1.05s; }\n\n[line-list]:nth-child(8) .undergroundline__line--loaded:before {\n  background-color: #5a8aec; }\n\n[line-list]:nth-child(8) .undergroundline__line {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s; }\n\n[line-list]:nth-child(9) .undergroundline__line--loaded:before {\n  background-color: #6d97ee; }\n\n[line-list]:nth-child(9) .undergroundline__line {\n  -webkit-animation-delay: 1.35s;\n          animation-delay: 1.35s; }\n\n[line-list]:nth-child(10) .undergroundline__line--loaded:before {\n  background-color: #7fa4f0; }\n\n[line-list]:nth-child(10) .undergroundline__line {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s; }\n\n[line-list]:nth-child(11) .undergroundline__line--loaded:before {\n  background-color: #91b1f2; }\n\n[line-list]:nth-child(11) .undergroundline__line {\n  -webkit-animation-delay: 1.65s;\n          animation-delay: 1.65s; }\n\n[line-list]:nth-child(12) .undergroundline__line--loaded:before {\n  background-color: #a3bef4; }\n\n[line-list]:nth-child(12) .undergroundline__line {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s; }\n\n[line-list]:nth-child(13) .undergroundline__line--loaded:before {\n  background-color: #b6cbf6; }\n\n[line-list]:nth-child(13) .undergroundline__line {\n  -webkit-animation-delay: 1.95s;\n          animation-delay: 1.95s; }\n\n[line-list]:nth-child(14) .undergroundline__line--loaded:before {\n  background-color: #c8d8f9; }\n\n[line-list]:nth-child(14) .undergroundline__line {\n  -webkit-animation-delay: 2.1s;\n          animation-delay: 2.1s; }\n\n[line-list]:nth-child(15) .undergroundline__line--loaded:before {\n  background-color: #dae5fb; }\n\n[line-list]:nth-child(15) .undergroundline__line {\n  -webkit-animation-delay: 2.25s;\n          animation-delay: 2.25s; }\n\n[line-list]:nth-child(16) .undergroundline__line--loaded:before {\n  background-color: #edf2fd; }\n\n[line-list]:nth-child(16) .undergroundline__line {\n  -webkit-animation-delay: 2.4s;\n          animation-delay: 2.4s; }\n\n.undergroundline {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 2rem 0 0 0;\n  overflow: hidden;\n  width: 100%; }\n  @media screen and (min-width: 30rem) {\n    .undergroundline {\n      margin: 2rem 0 0 0; } }\n  .undergroundline__header {\n    width: 100%; }\n  .undergroundline__title {\n    font-size: 2rem;\n    margin: 2rem 2rem 1rem 2rem; }\n  .undergroundline__block {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-flex: 100%;\n        -ms-flex: 100%;\n            flex: 100%;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .undergroundline__block__more-info {\n      display: none; }\n    .undergroundline__block--expanded {\n      display: block; }\n    .undergroundline__block__content {\n      color: #FFFFFF;\n      font-family: \"P22-Demi\", sans-serif;\n      margin: 3rem 0 0 0; }\n  .undergroundline__wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .undergroundline__lines {\n    display: block;\n    margin: 0;\n    min-height: 10rem;\n    position: relative;\n    width: 100%; }\n  .undergroundline__line {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-animation: fadeInSoftDown 0.5s ease-in-out forwards;\n            animation: fadeInSoftDown 0.5s ease-in-out forwards;\n    background-color: #000000;\n    color: #FFFFFF;\n    display: block;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    opacity: 0;\n    padding: 2rem 1.5rem;\n    word-break: break-all;\n    width: 100%; }\n    .undergroundline__line.expanded {\n      height: auto; }\n    .undergroundline__line--loaded:before {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-animation: fadeOutUnderlay 2s ease-in-out forwards;\n              animation: fadeOutUnderlay 2s ease-in-out forwards;\n      color: #000000;\n      background-color: #113B92;\n      content: \"\";\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      left: 0;\n      opacity: 1;\n      position: absolute;\n      top: 0;\n      width: 100%; }\n    @media screen and (min-width: 30rem) {\n      .undergroundline__line {\n        padding: 3rem 4rem; } }\n    .undergroundline__line--bakerloo {\n      background-color: #C37428; }\n    .undergroundline__line--central {\n      background-color: #ED3022; }\n    .undergroundline__line--circle {\n      background-color: #F9D733; }\n    .undergroundline__line--district {\n      background-color: #00853F; }\n    .undergroundline__line--hammersmithcity {\n      background-color: #F5A3B7; }\n    .undergroundline__line--jubilee {\n      background-color: #939BA1; }\n    .undergroundline__line--metropolitan {\n      background-color: #96005D; }\n    .undergroundline__line--northern {\n      background-color: #221E1F; }\n    .undergroundline__line--piccadilly {\n      background-color: #1A3E93; }\n    .undergroundline__line--victoria {\n      background-color: #009CDB; }\n    .undergroundline__line--waterloocity {\n      background-color: #86CEBC; }\n    .undergroundline__line--overground {\n      background-color: #FF6600; }\n    .undergroundline__line--emirates {\n      background-color: #E94E66; }\n    .undergroundline__line--dlr {\n      background-color: #00AFAD; }\n    .undergroundline__line--tram {\n      background-color: #8AD243; }\n    .undergroundline__line--tflrail {\n      background-color: #113B92; }\n    .undergroundline__line__name {\n      color: #FFFFFF;\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n      font-family: \"P22-Demi\", sans-serif;\n      font-size: 1.5rem;\n      margin-right: 0.5rem;\n      margin: 0;\n      text-transform: capitalize;\n      word-break: break-word; }\n      @media screen and (min-width: 30rem) {\n        .undergroundline__line__name {\n          font-size: 3rem; } }\n    .undergroundline__line__status {\n      color: #FFFFFF;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      font-family: \"P22-Demi\", sans-serif;\n      margin: 0;\n      margin: 0;\n      text-transform: uppercase;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column nowrap;\n              flex-flow: column nowrap; }\n      .undergroundline__line__status__badge, .undergroundline__line__status__text {\n        color: #FFFFFF;\n        display: inline-block;\n        margin: 0;\n        font-family: \"P22-Demi\", sans-serif; }\n      .undergroundline__line__status__text {\n        font-size: 0.8rem;\n        word-break: break-word; }\n        @media screen and (min-width: 60rem) {\n          .undergroundline__line__status__text {\n            font-size: 1.25rem; } }\n      .undergroundline__line__status--bold {\n        font-family: \"P22-Demi\", sans-serif; }\n    .undergroundline__line__loadingicon {\n      display: none; }\n      .undergroundline__line__loadingicon--loading {\n        display: block; }\n    .undergroundline__line__toggle {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 0.4;\n          -ms-flex: 0.4;\n              flex: 0.4;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .undergroundline__line__toggle__helper {\n        color: #FFFFFF;\n        display: inline-block;\n        font-family: \"P22-Demi\", sans-serif;\n        font-size: 1rem;\n        margin-right: 0.5rem; }\n      .undergroundline__line__toggleicon {\n        height: 1.5rem;\n        width: 1.5rem; }\n        .undergroundline__line__toggleicon--expanded {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n\n[search] {\n  display: block;\n  margin-bottom: 3rem;\n  width: 100%; }\n  [search] .searcharea__wrapper {\n    margin: 0 auto; }\n    @media screen and (min-width: 30rem) {\n      [search] .searcharea__wrapper {\n        width: 85%; } }\n    @media screen and (min-width: 60rem) {\n      [search] .searcharea__wrapper {\n        width: 45%; } }\n  [search] .searcharea__helper {\n    min-height: 3rem; }\n    [search] .searcharea__helper__text {\n      margin: 0;\n      padding-top: 1px; }\n  [search] .searcharea__input {\n    border: 0;\n    font-family: \"P22-Demi\", sans-serif;\n    font-size: 2rem;\n    height: 100%;\n    padding: 0.5rem 4rem 0.5rem 1rem;\n    text-transform: capitalize;\n    width: 100%; }\n    @media screen and (min-width: 60rem) {\n      [search] .searcharea__input {\n        padding: 1rem 5rem 1rem 1rem; } }\n    [search] .searcharea__input__clear {\n      background: url(\"/assets/img/clear.svg\");\n      background-repeat: no-repeat;\n      background-position: center;\n      height: 25px;\n      position: absolute;\n      right: 5%;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 25px;\n      z-index: 3; }\n      [search] .searcharea__input__clear:hover {\n        cursor: pointer; }\n    [search] .searcharea__input__wrapper {\n      -webkit-animation: fadeInSoftDown 0.5s ease-in-out forwards;\n              animation: fadeInSoftDown 0.5s ease-in-out forwards;\n      background-color: #FFFFFF;\n      height: 5rem;\n      width: 100%; }\n\n.suggestion__wrapper {\n  background-color: #FFFFFF;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n  margin-top: 0.5rem; }\n\n.suggestion__value {\n  position: relative; }\n  .suggestion__value:first-child > .suggestion__select {\n    padding-top: 2.5em; }\n  .suggestion__value:last-child > .suggestion__select {\n    padding-bottom: 2.5em; }\n\n.suggestion__name, .suggestion__helper {\n  font-family: \"P22-Demi\", sans-serif; }\n\n.suggestion__name {\n  color: #000000;\n  font-size: 1.5rem;\n  line-height: 1.25;\n  margin: 0; }\n\n.suggestion__helper {\n  color: #9ea4a7;\n  font-size: 0.8rem;\n  line-height: 1.25;\n  letter-spacing: 0.2px;\n  margin: 0;\n  text-transform: uppercase; }\n  .suggestion__helper--bakerloo {\n    color: #C37428; }\n  .suggestion__helper--central {\n    color: #ED3022; }\n  .suggestion__helper--circle {\n    color: #F9D733; }\n  .suggestion__helper--district {\n    color: #00853F; }\n  .suggestion__helper--hammersmithcity {\n    color: #F5A3B7; }\n  .suggestion__helper--jubilee {\n    color: #939BA1; }\n  .suggestion__helper--metropolitan {\n    color: #96005D; }\n  .suggestion__helper--northern {\n    color: #221E1F; }\n  .suggestion__helper--piccadilly {\n    color: #1A3E93; }\n  .suggestion__helper--victoria {\n    color: #009CDB; }\n  .suggestion__helper--waterloocity {\n    color: #86CEBC; }\n  .suggestion__helper--overground {\n    color: #FF6600; }\n  .suggestion__helper--emirates {\n    color: #E94E66; }\n  .suggestion__helper--dlr {\n    color: #00AFAD; }\n  .suggestion__helper--tram {\n    color: #8AD243; }\n  .suggestion__helper--tflrail {\n    color: #113B92; }\n\n.suggestion__select {\n  background: #FFFFFF url(\"/assets/img/select.svg\");\n  background-position: 92% center;\n  background-repeat: no-repeat;\n  background-size: 1.4rem;\n  border: 0;\n  height: 100%;\n  margin-bottom: 3px;\n  padding: 1.25rem 3rem;\n  text-align: left;\n  width: 100%; }\n  .suggestion__select:hover {\n    cursor: pointer; }\n  .suggestion__select--disabled {\n    background: #FFFFFF; }\n    .suggestion__select--disabled:hover {\n      cursor: default; }\n\n.popup {\n  background-color: transparent;\n  border-radius: 3px;\n  border: none;\n  display: block;\n  font-family: sans-serif;\n  left: 0;\n  margin: 0 auto;\n  max-height: 75vh;\n  overflow: scroll;\n  position: fixed;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-55%);\n          transform: translateY(-55%);\n  width: 99%;\n  z-index: 6; }\n  @media screen and (min-width: 30rem) {\n    .popup {\n      width: 90%; } }\n  .popup__wrapper {\n    margin: 0 auto;\n    overflow: hidden; }\n  .popup__image__control {\n    margin: 1rem; }\n    .popup__image__control:hover {\n      cursor: pointer; }\n  .popup__image__controls {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #FFFFFF;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 2rem;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: fixed;\n    background-color: #113B92;\n    bottom: 0;\n    width: 100%;\n    z-index: 10; }\n  .popup__background {\n    background-color: rgba(10, 35, 88, 0.7);\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 5; }\n  .popup__close {\n    background: url(\"/assets/img/clear-white.svg\");\n    background-repeat: no-repeat;\n    background-size: auto;\n    border: none;\n    display: block;\n    height: 2rem;\n    outline: none;\n    position: fixed;\n    right: 2%;\n    top: 7%;\n    width: 2rem;\n    z-index: 7; }\n    .popup__close:hover {\n      cursor: pointer; }\n\n[filters] {\n  display: block;\n  width: 100%; }\n  [filters] .dataselection {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap; }\n\n[search-results] {\n  display: block;\n  width: 90%; }\n\n.result__wrapper {\n  -webkit-animation: fadeInSoftDown 0.5s ease-in-out forwards;\n          animation: fadeInSoftDown 0.5s ease-in-out forwards;\n  background-color: #FFFFFF;\n  display: block;\n  margin: 2rem auto;\n  max-width: 45rem;\n  padding: 2rem;\n  position: relative;\n  width: 100%; }\n\n.result__close {\n  background: url(\"/assets/img/clear.svg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto;\n  display: inline-block;\n  height: 2rem;\n  position: absolute;\n  right: 5%;\n  top: 10%;\n  width: 2rem; }\n  .result__close:hover {\n    cursor: pointer; }\n\n.result__item {\n  font-family: \"P22-Demi\", sans-serif;\n  margin: 0; }\n\n.result__title {\n  color: #000000;\n  font-size: 1.5rem; }\n\n.result__description {\n  font-size: 1.2rem;\n  margin-top: 1rem; }\n\n.result__helper {\n  color: #113B92;\n  display: block;\n  margin-top: 4rem; }\n  .result__helper > a {\n    color: #113B92; }\n    .result__helper > a:visited {\n      color: #113B92; }\n\n[emergency-delays] {\n  display: block;\n  margin: 4rem auto;\n  max-width: 38rem;\n  padding: 0 1rem;\n  width: 100%; }\n  [emergency-delays] .delay__wrapper {\n    background: url(\"/assets/img/warning.svg\") #FFFFFF;\n    background-position: 5% 50%;\n    background-repeat: no-repeat;\n    background-size: 2rem;\n    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);\n    margin: 1rem 0;\n    padding: 1rem 1rem 1rem 6rem;\n    text-align: center;\n    text-align: left;\n    width: 100%; }\n\n.footer {\n  background-color: #000000;\n  color: #FFFFFF; }\n  .footer__text {\n    font-family: \"P22-Demi\", sans-serif;\n    margin: 0;\n    padding: 2rem; }\n\n.button {\n  border: 0;\n  background-color: transparent;\n  color: #000000;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap; }\n  .button:hover {\n    cursor: pointer; }\n  .button__filter {\n    background-color: #d9d9d9;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-family: \"P22-Demi\", sans-serif;\n    font-size: 1rem;\n    padding: 2rem 2rem;\n    text-transform: uppercase; }\n    @media screen and (min-width: 60rem) {\n      .button__filter {\n        font-size: 1.8rem;\n        padding: 3rem; } }\n    .button__filter:first-child {\n      border-right: 0.1rem solid #cfcfcf; }\n    .button__filter--selected {\n      background-color: #E6E6E6;\n      text-decoration: underline; }\n  .button__icon {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .button__icon__text {\n      color: #FFFFFF;\n      display: none;\n      font-family: \"P22-Demi\", sans-serif;\n      font-size: 0.95rem;\n      margin: 0 0.5rem 0 0; }\n      @media screen and (min-width: 60rem) {\n        .button__icon__text {\n          display: inline; } }\n\n.link-primary {\n  color: #cccccc; }\n\n.ui-helper {\n  font-family: \"P22-Demi\", sans-serif;\n  font-size: 1.25rem; }\n", ""]);

// exports


/***/ }),

/***/ 252:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 512:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);


/***/ })

},[516]);
//# sourceMappingURL=styles.bundle.js.map