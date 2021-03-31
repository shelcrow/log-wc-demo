/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "4ee3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "17e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d6f");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_global_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4ee3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("a461")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("b200");

// EXTERNAL MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("be63");

// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d17077e6-vue-loader-template"}!C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/Log.vue?vue&type=template&id=2f398210&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"log-container"}},[_c('div',{attrs:{"id":"log-filter-container"}},[_c('div',{class:[{ 'selected-log-filter': _vm.log_classes['E'] }, 'log-filter-level'],attrs:{"id":"log-filter-ctl-level-error"},on:{"click":function($event){return _vm.toggle_log_level('E')}}},[_c('div',{staticClass:"log-filter-selector"},[_vm._v("E")])]),_c('div',{class:[{ 'selected-log-filter': _vm.log_classes['W'] }, 'log-filter-level'],attrs:{"id":"log-filter-ctl-level-warning"},on:{"click":function($event){return _vm.toggle_log_level('W')}}},[_c('div',{staticClass:"log-filter-selector"},[_vm._v("W")])]),_c('div',{class:[{ 'selected-log-filter': _vm.log_classes['I'] }, 'log-filter-level'],attrs:{"id":"log-filter-ctl-level-info"},on:{"click":function($event){return _vm.toggle_log_level('I')}}},[_c('div',{staticClass:"log-filter-selector"},[_vm._v("I")])]),_c('div',{class:[{ 'selected-log-filter': _vm.log_classes['D'] }, 'log-filter-level'],attrs:{"id":"log-filter-ctl-level-debug"},on:{"click":function($event){return _vm.toggle_log_level('D')}}},[_c('div',{staticClass:"log-filter-selector"},[_vm._v("D")])]),_c('div',{class:[{ 'selected-log-filter': _vm.log_classes['>'] }, 'log-filter-level'],attrs:{"id":"log-filter-ctl-level-input"},on:{"click":function($event){return _vm.toggle_log_level('>')}}},[_c('div',{staticClass:"log-filter-selector"},[_vm._v(">")])]),_c('div',{class:[{ 'selected-log-filter': _vm.log_classes['<'] }, 'log-filter-level'],attrs:{"id":"log-filter-ctl-level-output"},on:{"click":function($event){return _vm.toggle_log_level('<')}}},[_c('div',{staticClass:"log-filter-selector"},[_vm._v("<")])])]),_vm._l((_vm.log_entries),function(log){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.log_classes[log.level]),expression:"log_classes[log.level]"}],key:log.log_id,staticClass:"log-entry"},[_c('div',{staticClass:"log-timestamp"},[_vm._v(_vm._s(log.time))]),_c('div',{staticClass:"log-level level-info"},[_vm._v(_vm._s(log.level))]),_c('div',{staticClass:"log-msg level-info"},[_vm._v(_vm._s(log.msg))])])}),_vm._m(0)],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"sim-status-container"}},[_c('div',{attrs:{"id":"sim-info"}}),_c('div',{attrs:{"id":"sim-status"}})])}]


// CONCATENATED MODULE: ./src/components/Log.vue?vue&type=template&id=2f398210&shadow

// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/thread-loader/dist/cjs.js!C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/babel-loader/lib??ref--12-1!C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-loader/lib??vue-loader-options!./src/components/Log.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Logvue_type_script_lang_js_shadow = ({
  name: "Log",

  data() {
    return {
      "sample_logs": [[{
        "time": "2021-01-26 15:42:50.184999",
        "level": "I",
        "msg": "Adding DER - sid = 1 addr = 40000"
      }, {
        "time": "2021-01-26 15:42:50.194007",
        "level": "I",
        "msg": "Adding model 1"
      }, {
        "time": "2021-01-26 15:42:50.194007",
        "level": "I",
        "msg": "Adding model 701"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 702"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 703"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 704"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 705"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 706"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 707"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 708"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 709"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 710"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 711"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 712"
      }, {
        "time": "2021-01-26 15:42:50.195007",
        "level": "I",
        "msg": "Adding model 713"
      }, {
        "time": "2021-01-26 15:42:50.196968",
        "level": "I",
        "msg": "Simulator starting on 0.0.0.0:8502"
      }], [{
        "time": "2021-01-26 15:42:55.572451",
        "level": ">",
        "msg": "00000000000601039C400003"
      }, {
        "time": "2021-01-26 15:42:55.572451",
        "level": "<",
        "msg": "00000000000901030653756E530001"
      }, {
        "time": "2021-01-26 15:42:55.595689",
        "level": ">",
        "msg": "00000000000601039C430001"
      }, {
        "time": "2021-01-26 15:42:55.595689",
        "level": "<",
        "msg": "0000000000050103020042"
      }, {
        "time": "2021-01-26 15:42:55.611310",
        "level": ">",
        "msg": "00000000000601039C420044"
      }, {
        "time": "2021-01-26 15:42:55.611310",
        "level": "<",
        "msg": "00000000008B0103880001004253756E5370656354657374000000000000000000000000000000000000000000546573742D313534372D310000000000000000000000000000000000000000006F70745F615F625F6300000000000000312E322E330000000000000000000000736E2D313233343536373839000000000000000000000000000000000000000000010000"
      }, {
        "time": "2021-01-26 15:42:55.627020",
        "level": ">",
        "msg": "00000000000601039C860001"
      }, {
        "time": "2021-01-26 15:42:55.627020",
        "level": "<",
        "msg": "00000000000501030202BD"
      }, {
        "time": "2021-01-26 15:42:55.642632",
        "level": ">",
        "msg": "00000000000601039C870001"
      }, {
        "time": "2021-01-26 15:42:55.642632",
        "level": "<",
        "msg": "0000000000050103020099"
      }, {
        "time": "2021-01-26 15:42:55.657949",
        "level": ">",
        "msg": "00000000000601039C86007D"
      }, {
        "time": "2021-01-26 15:42:55.657949",
        "level": "<",
        "msg": "0000000001390103FA02BD009900030002FFFFFFFF00000000FFFFFFFF2648271000C803D9019B096009600000EA6A000000000000009600000000000000000000000000000009000000000000000001C20226028A01F4019001A40C800D05005003D800890078007800000000000000310000000000000000000000000000000200000000000000000CE40D05005003DA00880078007800000000000000320000000000000000000000000000000300000000000000000DAC0D05002803DB008A0078FFFF0000000000000033000000000000000000000000000000040000000000000000FFFFFFFFFFFFFFFFFFFFFFFD0000FFFD0000000000030003FFFF00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      }, {
        "time": "2021-01-26 15:42:55.657949",
        "level": ">",
        "msg": "00000000000601039C86007D00000000000601039D03001E"
      }, {
        "time": "2021-01-26 15:42:55.658949",
        "level": "<",
        "msg": "0000000001390103FA02BD009900030002FFFFFFFF00000000FFFFFFFF2648271000C803D9019B096009600000EA6A000000000000009600000000000000000000000000000009000000000000000001C20226028A01F4019001A40C800D05005003D800890078007800000000000000310000000000000000000000000000000200000000000000000CE40D05005003DA00880078007800000000000000320000000000000000000000000000000300000000000000000DAC0D05002803DB008A0078FFFF0000000000000033000000000000000000000000000000040000000000000000FFFFFFFFFFFFFFFFFFFFFFFD0000FFFD0000000000030003FFFF00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      }, {
        "time": "2021-01-26 15:42:55.660943",
        "level": ">",
        "msg": "00000000000601039D210001"
      }, {
        "time": "2021-01-26 15:42:55.660943",
        "level": "<",
        "msg": "00000000000501030202BE"
      }, {
        "time": "2021-01-26 15:42:55.660943",
        "level": ">",
        "msg": "00000000000601039D220001"
      }, {
        "time": "2021-01-26 15:42:55.660943",
        "level": "<",
        "msg": "0000000000050103020032"
      }, {
        "time": "2021-01-26 15:42:55.673990",
        "level": ">",
        "msg": "00000000000601039D210034"
      }, {
        "time": "2021-01-26 15:42:55.673990",
        "level": "<",
        "msg": "00000000006B01036802BE00322710271003E8271003E82AF809C40000000000000000000000F0010E00D2003203520352FFFF00020003FFFFFFFFFFFF2710FFFFFFFFFFFFFFFF2710FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0000FFFD00000000000000000000"
      }, {
        "time": "2021-01-26 15:42:55.689594",
        "level": ">",
        "msg": "00000000000601039D550001"
      }, {
        "time": "2021-01-26 15:42:55.689594",
        "level": "<",
        "msg": "00000000000501030202BF"
      }, {
        "time": "2021-01-26 15:42:55.704988",
        "level": ">",
        "msg": "00000000000601039D560001"
      }, {
        "time": "2021-01-26 15:42:55.704988",
        "level": "<",
        "msg": "0000000000050103020011"
      }, {
        "time": "2021-01-26 15:42:55.720923",
        "level": ">",
        "msg": "00000000000601039D550013"
      }, {
        "time": "2021-01-26 15:42:55.720923",
        "level": "<",
        "msg": "00000000002901032602BF00110001041A03950000177A0000173E0000012C000000640000003CFFFFFFFFFFFDFFFE"
      }, {
        "time": "2021-01-26 15:42:55.737006",
        "level": ">",
        "msg": "00000000000601039D680001"
      }, {
        "time": "2021-01-26 15:42:55.737006",
        "level": "<",
        "msg": "00000000000501030202C0"
      }, {
        "time": "2021-01-26 15:42:55.752832",
        "level": ">",
        "msg": "00000000000601039D690001"
      }, {
        "time": "2021-01-26 15:42:55.752832",
        "level": "<",
        "msg": "0000000000050103020041"
      }, {
        "time": "2021-01-26 15:42:55.753834",
        "level": ">",
        "msg": "00000000000601039D680043"
      }, {
        "time": "2021-01-26 15:42:55.753834",
        "level": "<",
        "msg": "00000000008901038602C000410000FFFFFFFFFFFFFFFFFFFF0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF800000008000000080008000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF800000008000000080008000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD8000800080008000800003B60001FFFFFFFFFFFFFFFFFFFFFFFF"
      }, {
        "time": "2021-01-26 15:42:55.768016",
        "level": ">",
        "msg": "00000000000601039DAB0001"
      }, {
        "time": "2021-01-26 15:42:55.768016",
        "level": "<",
        "msg": "00000000000501030202C1"
      }, {
        "time": "2021-01-26 15:42:55.783825",
        "level": ">",
        "msg": "00000000000601039DAC0001"
      }, {
        "time": "2021-01-26 15:42:55.783825",
        "level": "<",
        "msg": "0000000000050103020043"
      }, {
        "time": "2021-01-26 15:42:55.799085",
        "level": ">",
        "msg": "00000000000601039DAB0045"
      }, {
        "time": "2021-01-26 15:42:55.799085",
        "level": "<",
        "msg": "00000000008D01038A02C100430001000000000004000300000000000000000000FFFEFFFE800000040001000100010000FFFFFFFF00000006000123F00BB825C60000283C000029CCF44800040001000100010000FFFFFFFF00000006000024540BB82562000027D800002968F06000040001000100010000FFFFFFFF00000006000024B807D025620000290400002A30F830"
      }, {
        "time": "2021-01-26 15:42:55.814851",
        "level": ">",
        "msg": "00000000000601039DF00001"
      }, {
        "time": "2021-01-26 15:42:55.814851",
        "level": "<",
        "msg": "00000000000501030202C2"
      }, {
        "time": "2021-01-26 15:42:55.830270",
        "level": ">",
        "msg": "00000000000601039DF10001"
      }, {
        "time": "2021-01-26 15:42:55.830270",
        "level": "<",
        "msg": "000000000005010302001F"
      }, {
        "time": "2021-01-26 15:42:55.845710",
        "level": ">",
        "msg": "00000000000601039DF00021"
      }, {
        "time": "2021-01-26 15:42:55.845710",
        "level": "<",
        "msg": "00000000004501034202C2001F00000000000000020002FFFFFFFFFFFFFFFFFFFF000000008000000200010000000A0001006A0064006E00000002000100000005000000690064006D0000"
      }, {
        "time": "2021-01-26 15:42:55.861182",
        "level": ">",
        "msg": "00000000000601039E110001"
      }, {
        "time": "2021-01-26 15:42:55.861182",
        "level": "<",
        "msg": "00000000000501030202C3"
      }, {
        "time": "2021-01-26 15:42:55.876928",
        "level": ">",
        "msg": "00000000000601039E120001"
      }, {
        "time": "2021-01-26 15:42:55.876928",
        "level": "<",
        "msg": "0000000000050103020033"
      }, {
        "time": "2021-01-26 15:42:55.892384",
        "level": ">",
        "msg": "00000000000601039E110035"
      }, {
        "time": "2021-01-26 15:42:55.892384",
        "level": "<",
        "msg": "00000000006D01036A02C300330001FFFFFFFF00020002FFFE0000FFFF0002138800000005FFFFFFFFFFFF00021B5800000005FFFFFFFFFFFF0002177000000005FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
      }, {
        "time": "2021-01-26 15:42:55.907682",
        "level": ">",
        "msg": "00000000000601039E460001"
      }, {
        "time": "2021-01-26 15:42:55.907682",
        "level": "<",
        "msg": "00000000000501030202C4"
      }, {
        "time": "2021-01-26 15:42:55.923357",
        "level": ">",
        "msg": "00000000000601039E470001"
      }, {
        "time": "2021-01-26 15:42:55.923357",
        "level": "<",
        "msg": "000000000005010302001D"
      }, {
        "time": "2021-01-26 15:42:55.938563",
        "level": ">",
        "msg": "00000000000601039E46001F"
      }, {
        "time": "2021-01-26 15:42:55.938563",
        "level": "<",
        "msg": "00000000004101033E02C4001D0001FFFFFFFF00020001FFFE0000FFFF00022EE0000000052EE00000000500022710000000052710000000050002271000000005271000000005"
      }, {
        "time": "2021-01-26 15:42:55.953943",
        "level": ">",
        "msg": "00000000000601039E650001"
      }, {
        "time": "2021-01-26 15:42:55.953943",
        "level": "<",
        "msg": "00000000000501030202C5"
      }, {
        "time": "2021-01-26 15:42:55.970306",
        "level": ">",
        "msg": "00000000000601039E660001"
      }, {
        "time": "2021-01-26 15:42:55.970306",
        "level": "<",
        "msg": "0000000000050103020017"
      }, {
        "time": "2021-01-26 15:42:55.985916",
        "level": ">",
        "msg": "00000000000601039E650019"
      }, {
        "time": "2021-01-26 15:42:55.985916",
        "level": "<",
        "msg": "00000000003501033202C500170001FFFFFFFF000100018000FFFEFFFF0001FFFFFFFF000000050001FFFFFFFF000000050001FFFFFFFF00000005"
      }, {
        "time": "2021-01-26 15:42:56.001772",
        "level": ">",
        "msg": "00000000000601039E7E0001"
      }, {
        "time": "2021-01-26 15:42:56.001772",
        "level": "<",
        "msg": "00000000000501030202C6"
      }, {
        "time": "2021-01-26 15:42:56.016955",
        "level": ">",
        "msg": "00000000000601039E7F0001"
      }, {
        "time": "2021-01-26 15:42:56.016955",
        "level": "<",
        "msg": "0000000000050103020017"
      }, {
        "time": "2021-01-26 15:42:56.017921",
        "level": ">",
        "msg": "00000000000601039E7E0019"
      }, {
        "time": "2021-01-26 15:42:56.018917",
        "level": "<",
        "msg": "00000000003501033202C60017FFFFFFFFFFFF000100018000FFFEFFFF0001FFFFFFFF000000050001FFFFFFFF000000050001FFFFFFFF00000005"
      }, {
        "time": "2021-01-26 15:42:56.032912",
        "level": ">",
        "msg": "00000000000601039E970001"
      }, {
        "time": "2021-01-26 15:42:56.032912",
        "level": "<",
        "msg": "00000000000501030202C7"
      }, {
        "time": "2021-01-26 15:42:56.048869",
        "level": ">",
        "msg": "00000000000601039E980001"
      }, {
        "time": "2021-01-26 15:42:56.048869",
        "level": "<",
        "msg": "0000000000050103020015"
      }, {
        "time": "2021-01-26 15:42:56.049836",
        "level": ">",
        "msg": "00000000000601039E970017"
      }, {
        "time": "2021-01-26 15:42:56.049836",
        "level": "<",
        "msg": "00000000003101032E02C70015FFFFFFFFFFFF00010000000000000000FFFFFFFEFFFE00000000EA7E0000EA420028002800000258FFFF"
      }, {
        "time": "2021-01-26 15:42:56.064175",
        "level": ">",
        "msg": "00000000000601039EAE0001"
      }, {
        "time": "2021-01-26 15:42:56.064175",
        "level": "<",
        "msg": "00000000000501030202C8"
      }, {
        "time": "2021-01-26 15:42:56.080069",
        "level": ">",
        "msg": "00000000000601039EAF0001"
      }, {
        "time": "2021-01-26 15:42:56.080069",
        "level": "<",
        "msg": "0000000000050103020012"
      }, {
        "time": "2021-01-26 15:42:56.095777",
        "level": ">",
        "msg": "00000000000601039EAE0014"
      }, {
        "time": "2021-01-26 15:42:56.095777",
        "level": "<",
        "msg": "00000000002B01032802C80012FFFFFFFFFFFF00010001000000000000000000008000FFFE0001FFFFFFFFFFFF80008000"
      }, {
        "time": "2021-01-26 15:42:56.111048",
        "level": ">",
        "msg": "00000000000601039EC20001"
      }, {
        "time": "2021-01-26 15:42:56.111048",
        "level": "<",
        "msg": "00000000000501030202C9"
      }, {
        "time": "2021-01-26 15:42:56.126228",
        "level": ">",
        "msg": "00000000000601039EC30001"
      }, {
        "time": "2021-01-26 15:42:56.126228",
        "level": "<",
        "msg": "0000000000050103020006"
      }, {
        "time": "2021-01-26 15:42:56.141718",
        "level": ">",
        "msg": "00000000000601039EC20008"
      }, {
        "time": "2021-01-26 15:42:56.141718",
        "level": "<",
        "msg": "00000000001301031002C90006FFFFFFFFFFFFFFFFFFFF8000"
      }, {
        "time": "2021-01-26 15:42:56.157074",
        "level": ">",
        "msg": "00000000000601039ECA0001"
      }, {
        "time": "2021-01-26 15:42:56.157074",
        "level": "<",
        "msg": "000000000005010302FFFF"
      }], [{
        "time": "2021-01-26 15:43:01.788962",
        "level": ">",
        "msg": "00000000000601039C420044"
      }, {
        "time": "2021-01-26 15:43:01.788962",
        "level": "<",
        "msg": "00000000008B0103880001004253756E5370656354657374000000000000000000000000000000000000000000546573742D313534372D310000000000000000000000000000000000000000006F70745F615F625F6300000000000000312E322E330000000000000000000000736E2D313233343536373839000000000000000000000000000000000000000000010000"
      }], [{
        "time": "2021-01-26 15:43:05.389911",
        "level": ">",
        "msg": "00000000000901109C840001020004"
      }, {
        "time": "2021-01-26 15:43:05.389911",
        "level": "<",
        "msg": "00000000000601109C840001"
      }], [{
        "time": "2021-01-26 15:43:07.529094",
        "level": ">",
        "msg": "00000000000601039C420044"
      }, {
        "time": "2021-01-26 15:43:07.529094",
        "level": "<",
        "msg": "00000000008B0103880001004253756E5370656354657374000000000000000000000000000000000000000000546573742D313534372D310000000000000000000000000000000000000000006F70745F615F625F6300000000000000312E322E330000000000000000000000736E2D313233343536373839000000000000000000000000000000000000000000040000"
      }], [{
        "time": "2021-01-26 15:43:11.910335",
        "level": ">",
        "msg": "00000000000901109C840001020001"
      }, {
        "time": "2021-01-26 15:43:11.910335",
        "level": "<",
        "msg": "00000000000601109C840001"
      }]],
      "log_entries": [],
      "log_classes": {
        "E": true,
        "W": true,
        "I": true,
        "D": true,
        ">": true,
        "<": true
      },
      "log_counter": 0
    };
  },

  created() {
    this.process_entries();
  },

  methods: {
    process_entries() {
      if (this.sample_logs) {
        for (let i in this.sample_logs) {
          for (let j in this.sample_logs[i]) {
            this.log_counter++;
            this.sample_logs[i][j]["log_id"] = "log_id_" + this.log_counter;
            this.log_entries.push(this.sample_logs[i][j]);
          }

          this.sample_logs.splice(i, 1);
        }
      }
    },

    toggle_log_level(level) {
      switch (level) {
        case 'E':
          this.log_classes["E"] = !this.log_classes["E"];
          break;

        case 'W':
          this.log_classes["W"] = !this.log_classes["W"];
          break;

        case 'I':
          this.log_classes["I"] = !this.log_classes["I"];
          break;

        case 'D':
          this.log_classes["D"] = !this.log_classes["D"];
          break;

        case '>':
          this.log_classes[">"] = !this.log_classes[">"];
          break;

        case '<':
          this.log_classes["<"] = !this.log_classes["<"];
          break;
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/Log.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Logvue_type_script_lang_js_shadow = (Logvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/Log.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("17e0")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_Logvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Logshadow = (component.exports);
// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('suns-log', vue_wc_wrapper(external_Vue_default.a, Logshadow))

/***/ }),

/***/ "6d6f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7cf5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("be63").default
module.exports.__inject__ = function (shadowRoot) {
  add("1e624d34", content, shadowRoot)
};

/***/ }),

/***/ "7cf5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("b200");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#log-container{padding:10px 0 0 10px;grid-row:2/3;overflow-y:auto;overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;height:100%}#log-container>div:last-child{scroll-snap-align:end}#status-container div{font-size:13px}#sim-info{float:right}#sim-info,#sim-status{height:100%;display:flex;align-items:center}#sim-status{float:left}.log-entry{display:grid;width:100%;grid-template-columns:156px 5px minmax(0,1fr);grid-column-gap:8px;font-size:12px}.log-timestamp{grid-column:1/2;color:#00218b}.log-level{grid-column:2/3}.log-msg{margin-right:5px;grid-column:3/4;overflow-wrap:break-word;text-align:left}.clickable{cursor:pointer}#log-filter-container{position:absolute;right:0;margin:0 25px 0 0;display:flex;align-items:center;justify-content:flex-end;font-size:13px}#log-filter-container .log-filter-level{display:inline-flex;cursor:pointer;height:20px;width:20px;justify-content:center;align-items:center;border-top:1px solid #ccc;border-bottom:1px solid #ccc;border-right:1px solid #ccc;background-color:#fff}#log-filter-ctl-level-error{border-left:1px solid #ccc}#log-filter-container .log-filter-level.selected-log-filter{font-size:14px;font-weight:700;background-color:#f0f0f0}.level-error{color:#c80000}.level-debug{color:#881280}.level-warning{color:#ff6000}.level-output{color:#007000}.level-input{color:#000070}#log-filter-ctl-level-error.selected-log-filter .log-filter-selector{color:#c80000}#log-filter-ctl-level-debug.selected-log-filter .log-filter-selector{color:#881280}#log-filter-ctl-level-warning.selected-log-filter .log-filter-selector{color:#ce6626}#log-filter-ctl-level-output.selected-log-filter .log-filter-selector{color:#007000}#log-filter-ctl-level-input.selected-log-filter .log-filter-selector{color:#000070}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "a461":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b200":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "be63":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: C:/Users/sheld/AppData/Roaming/npm/node_modules/@vue/cli-service-global/node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ });
//# sourceMappingURL=suns-log.js.map