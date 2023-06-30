// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"igKGj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editorjs = require("@editorjs/editorjs");
var _editorjsDefault = parcelHelpers.interopDefault(_editorjs);
var _header = require("@editorjs/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _list = require("@editorjs/list");
var _listDefault = parcelHelpers.interopDefault(_list);
var _embed = require("@editorjs/embed");
var _embedDefault = parcelHelpers.interopDefault(_embed);
var _image = require("@editorjs/image");
var _imageDefault = parcelHelpers.interopDefault(_image);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
const Checklist = require("889e90763864c1db");
const Quote = require("7254e3ce914fead7");
const SimpleImage = require("8af71c3282566c82");
const editor = new (0, _editorjsDefault.default)({
    holderId: "editorjs",
    tools: {
        header: {
            class: (0, _headerDefault.default),
            inlineToolbar: [
                "link"
            ]
        },
        list: {
            class: (0, _listDefault.default),
            inlineToolbar: [
                "link",
                "bold"
            ]
        },
        checklist: {
            class: Checklist,
            inlineToolbar: true
        },
        quote: Quote,
        embed: {
            class: (0, _embedDefault.default),
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        },
        // image: SimpleImage,
        image: {
            class: (0, _imageDefault.default),
            config: {
                /**
               * Custom uploader
               */ uploader: {
                    /**
                 * Upload file to the server and return an uploaded image data
                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                 * @return {Promise.<{success, file: {url}}>}
                 */ uploadByFile (file1) {
                        // your own uploading logic here
                        return MyAjax.upload(file1).then(()=>{
                            return {
                                success: 1,
                                file: {
                                    url: "https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg"
                                }
                            };
                        });
                    },
                    /**
                 * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
                 * @param {string} url - pasted image URL
                 * @return {Promise.<{success, file: {url}}>}
                 */ uploadByUrl (url) {
                        // your ajax request for uploading
                        return MyAjax.upload(file).then(()=>{
                            return {
                                success: 1,
                                file: {
                                    url: "https://codex.so/upload/redactor_images/o_e48549d1855c7fc1807308dd14990126.jpg"
                                }
                            };
                        });
                    }
                }
            }
        }
    }
});
let saveBtn = document.querySelector("button");
saveBtn.addEventListener("click", function() {
    editor.save().then((outputData)=>{
        console.log("Blog data: ", outputData);
    }).catch((error)=>{
        console.log("saving failed: ", error);
    });
});

},{"@editorjs/editorjs":"3TToX","@editorjs/header":"kkSVA","@editorjs/list":"1ChUe","@editorjs/embed":"4qeqT","@editorjs/image":"eKOQX","axios":"jo6P5","8af71c3282566c82":"1LBNh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","889e90763864c1db":"8lX7A","7254e3ce914fead7":"l0hGJ"}],"3TToX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>fi);
var global = arguments[3];
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xe(s1) {
    return s1 && s1.__esModule && Object.prototype.hasOwnProperty.call(s1, "default") ? s1.default : s1;
}
function Be() {}
Object.assign(Be, {
    default: Be,
    register: Be,
    revert: function() {},
    __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s1) {
    const e = (this.document || this.ownerDocument).querySelectorAll(s1);
    let t1 = e.length;
    for(; --t1 >= 0 && e.item(t1) !== this;);
    return t1 > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(s1) {
    let e = this;
    if (!document.documentElement.contains(e)) return null;
    do {
        if (e.matches(s1)) return e;
        e = e.parentElement || e.parentNode;
    }while (e !== null);
    return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
    const t1 = document.createDocumentFragment();
    Array.isArray(e) || (e = [
        e
    ]), e.forEach((o)=>{
        const i = o instanceof Node;
        t1.appendChild(i ? o : document.createTextNode(o));
    }), this.insertBefore(t1, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(s1) {
    s1 = arguments.length === 0 ? !0 : !!s1;
    const e = this.parentNode, t1 = window.getComputedStyle(e, null), o = parseInt(t1.getPropertyValue("border-top-width")), i = parseInt(t1.getPropertyValue("border-left-width")), n = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c = n && !r;
    (n || r) && s1 && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && s1 && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (n || r || a || l) && !s1 && this.scrollIntoView(c);
});
let Ot = (s1 = 21)=>crypto.getRandomValues(new Uint8Array(s1)).reduce((e, t1)=>(t1 &= 63, t1 < 36 ? e += t1.toString(36) : t1 < 62 ? e += (t1 - 26).toString(36).toUpperCase() : t1 > 62 ? e += "-" : e += "_", e), "");
var et = /* @__PURE__ */ ((s1)=>(s1.VERBOSE = "VERBOSE", s1.INFO = "INFO", s1.WARN = "WARN", s1.ERROR = "ERROR", s1))(et || {});
const B = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91
}, _t = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
};
function ge(s1, e, t1 = "log", o, i = "color: inherit") {
    if (!("console" in window) || !window.console[t1]) return;
    const n = [
        "info",
        "log",
        "warn",
        "error"
    ].includes(t1), r = [];
    switch(ge.logLevel){
        case "ERROR":
            if (t1 !== "error") return;
            break;
        case "WARN":
            if (![
                "error",
                "warn"
            ].includes(t1)) return;
            break;
        case "INFO":
            if (!n || s1) return;
            break;
    }
    o && r.push(o);
    const a = "Editor.js 2.27.2", l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
    s1 && (n ? (r.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
    try {
        n ? o ? console[t1](`${e} %o`, ...r) : console[t1](e, ...r) : console[t1](e);
    } catch  {}
}
ge.logLevel = "VERBOSE";
function At(s1) {
    ge.logLevel = s1;
}
const T = ge.bind(window, !1), K = ge.bind(window, !0);
function te(s1) {
    return Object.prototype.toString.call(s1).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function D(s1) {
    return te(s1) === "function" || te(s1) === "asyncfunction";
}
function j(s1) {
    return te(s1) === "object";
}
function J(s1) {
    return te(s1) === "string";
}
function Nt(s1) {
    return te(s1) === "boolean";
}
function Ve(s1) {
    return te(s1) === "number";
}
function Ze(s1) {
    return te(s1) === "undefined";
}
function V(s1) {
    return s1 ? Object.keys(s1).length === 0 && s1.constructor === Object : !0;
}
function tt(s1) {
    return s1 > 47 && s1 < 58 || // number keys
    s1 === 32 || s1 === 13 || // Space bar & return key(s)
    s1 === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
    s1 > 64 && s1 < 91 || // letter keys
    s1 > 95 && s1 < 112 || // Numpad keys
    s1 > 185 && s1 < 193 || // ;=,-./` (in order)
    s1 > 218 && s1 < 223;
}
async function ot(s1, e = ()=>{}, t1 = ()=>{}) {
    async function o(i, n, r) {
        try {
            await i.function(i.data), await n(Ze(i.data) ? {} : i.data);
        } catch  {
            r(Ze(i.data) ? {} : i.data);
        }
    }
    return s1.reduce(async (i, n)=>(await i, o(n, e, t1)), Promise.resolve());
}
function it(s1) {
    return Array.prototype.slice.call(s1);
}
function oe(s1, e) {
    return function() {
        const t1 = this, o = arguments;
        window.setTimeout(()=>s1.apply(t1, o), e);
    };
}
function Rt(s1) {
    return s1.name.split(".").pop();
}
function Dt(s1) {
    return /^[-\w]+\/([-+\w]+|\*)$/.test(s1);
}
function Pt(s1, e, t1) {
    let o;
    return (...i)=>{
        const n = this, r = ()=>{
            o = null, t1 || s1.apply(n, i);
        }, a = t1 && !o;
        window.clearTimeout(o), o = window.setTimeout(r, e), a && s1.apply(n, i);
    };
}
function Te(s1, e, t1) {
    let o, i, n, r = null, a = 0;
    t1 || (t1 = {});
    const l = function() {
        a = t1.leading === !1 ? 0 : Date.now(), r = null, n = s1.apply(o, i), r || (o = i = null);
    };
    return function() {
        const c = Date.now();
        !a && t1.leading === !1 && (a = c);
        const u = e - (c - a);
        return o = this, i = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), a = c, n = s1.apply(o, i), r || (o = i = null)) : !r && t1.trailing !== !1 && (r = setTimeout(l, u)), n;
    };
}
function Ft() {
    const s1 = {
        win: !1,
        mac: !1,
        x11: !1,
        linux: !1
    }, e = Object.keys(s1).find((t1)=>window.navigator.appVersion.toLowerCase().indexOf(t1) !== -1);
    return e && (s1[e] = !0), s1;
}
function ke(s1) {
    return s1[0].toUpperCase() + s1.slice(1);
}
function Se(s1, ...e) {
    if (!e.length) return s1;
    const t1 = e.shift();
    if (j(s1) && j(t1)) for(const o in t1)j(t1[o]) ? (s1[o] || Object.assign(s1, {
        [o]: {}
    }), Se(s1[o], t1[o])) : Object.assign(s1, {
        [o]: t1[o]
    });
    return Se(s1, ...e);
}
function nt(s1) {
    const e = Ft();
    return s1 = s1.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? s1 = s1.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : s1 = s1.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), s1;
}
function Ht(s1) {
    try {
        return new URL(s1).href;
    } catch  {}
    return s1.substring(0, 2) === "//" ? window.location.protocol + s1 : window.location.origin + s1;
}
function zt() {
    return Ot(10);
}
function jt(s1) {
    window.open(s1, "_blank");
}
function Ut(s1 = "") {
    return `${s1}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Ie(s1, e, t1) {
    const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t1}» instead.`;
    s1 && K(o, "warn");
}
function ae(s1, e, t1) {
    const o = t1.value ? "value" : "get", i = t1[o], n = `#${e}Cache`;
    if (t1[o] = function(...r) {
        return this[n] === void 0 && (this[n] = i.apply(this, ...r)), this[n];
    }, o === "get" && t1.set) {
        const r = t1.set;
        t1.set = function(a) {
            delete s1[n], r.apply(this, a);
        };
    }
    return t1;
}
const st = 650;
function ee() {
    return window.matchMedia(`(max-width: ${st}px)`).matches;
}
const Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function $t(s1, e) {
    const t1 = Array.isArray(s1) || j(s1), o = Array.isArray(e) || j(e);
    return t1 || o ? JSON.stringify(s1) === JSON.stringify(e) : s1 === e;
}
class d {
    /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */ static isSingleTag(e) {
        return e.tagName && [
            "AREA",
            "BASE",
            "BR",
            "COL",
            "COMMAND",
            "EMBED",
            "HR",
            "IMG",
            "INPUT",
            "KEYGEN",
            "LINK",
            "META",
            "PARAM",
            "SOURCE",
            "TRACK",
            "WBR"
        ].includes(e.tagName);
    }
    /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */ static isLineBreakTag(e) {
        return e && e.tagName && [
            "BR",
            "WBR"
        ].includes(e.tagName);
    }
    /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */ static make(e, t1 = null, o = {}) {
        const i = document.createElement(e);
        Array.isArray(t1) ? i.classList.add(...t1) : t1 && i.classList.add(t1);
        for(const n in o)Object.prototype.hasOwnProperty.call(o, n) && (i[n] = o[n]);
        return i;
    }
    /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */ static text(e) {
        return document.createTextNode(e);
    }
    /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */ static append(e, t1) {
        Array.isArray(t1) ? t1.forEach((o)=>e.appendChild(o)) : e.appendChild(t1);
    }
    /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */ static prepend(e, t1) {
        Array.isArray(t1) ? (t1 = t1.reverse(), t1.forEach((o)=>e.prepend(o))) : e.prepend(t1);
    }
    /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */ static swap(e, t1) {
        const o = document.createElement("div"), i = e.parentNode;
        i.insertBefore(o, e), i.insertBefore(e, t1), i.insertBefore(t1, o), i.removeChild(o);
    }
    /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */ static find(e = document, t1) {
        return e.querySelector(t1);
    }
    /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */ static get(e) {
        return document.getElementById(e);
    }
    /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */ static findAll(e = document, t1) {
        return e.querySelectorAll(t1);
    }
    /**
   * Returns CSS selector for all text inputs
   */ static get allInputsSelector() {
        return "[contenteditable=true], textarea, input:not([type]), " + [
            "text",
            "password",
            "email",
            "number",
            "search",
            "tel",
            "url"
        ].map((t1)=>`input[type="${t1}"]`).join(", ");
    }
    /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */ static findAllInputs(e) {
        return it(e.querySelectorAll(d.allInputsSelector)).reduce((t1, o)=>d.isNativeInput(o) || d.containsOnlyInlineElements(o) ? [
                ...t1,
                o
            ] : [
                ...t1,
                ...d.getDeepestBlockElements(o)
            ], []);
    }
    /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
   */ static getDeepestNode(e, t1 = !1) {
        const o = t1 ? "lastChild" : "firstChild", i = t1 ? "previousSibling" : "nextSibling";
        if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
            let n = e[o];
            if (d.isSingleTag(n) && !d.isNativeInput(n) && !d.isLineBreakTag(n)) {
                if (n[i]) n = n[i];
                else if (n.parentNode[i]) n = n.parentNode[i];
                else return n.parentNode;
            }
            return this.getDeepestNode(n, t1);
        }
        return e;
    }
    /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isElement(e) {
        return Ve(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
    }
    /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isFragment(e) {
        return Ve(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
    }
    /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */ static isContentEditable(e) {
        return e.contentEditable === "true";
    }
    /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static isNativeInput(e) {
        const t1 = [
            "INPUT",
            "TEXTAREA"
        ];
        return e && e.tagName ? t1.includes(e.tagName) : !1;
    }
    /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */ static canSetCaret(e) {
        let t1 = !0;
        if (d.isNativeInput(e)) switch(e.type){
            case "file":
            case "checkbox":
            case "radio":
            case "hidden":
            case "submit":
            case "button":
            case "image":
            case "reset":
                t1 = !1;
                break;
        }
        else t1 = d.isContentEditable(e);
        return t1;
    }
    /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @returns {boolean} true if it is empty
   */ static isNodeEmpty(e) {
        let t1;
        return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? t1 = e.value : t1 = e.textContent.replace("​", ""), t1.trim().length === 0);
    }
    /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */ static isLeaf(e) {
        return e ? e.childNodes.length === 0 : !1;
    }
    /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @returns {boolean}
   */ static isEmpty(e) {
        e.normalize();
        const t1 = [
            e
        ];
        for(; t1.length > 0;)if (e = t1.shift(), !!e) {
            if (this.isLeaf(e) && !this.isNodeEmpty(e)) return !1;
            e.childNodes && t1.push(...Array.from(e.childNodes));
        }
        return !0;
    }
    /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */ static isHTMLString(e) {
        const t1 = d.make("div");
        return t1.innerHTML = e, t1.childElementCount > 0;
    }
    /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */ static getContentLength(e) {
        return d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
    }
    /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */ static get blockElements() {
        return [
            "address",
            "article",
            "aside",
            "blockquote",
            "canvas",
            "div",
            "dl",
            "dt",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "header",
            "hgroup",
            "hr",
            "li",
            "main",
            "nav",
            "noscript",
            "ol",
            "output",
            "p",
            "pre",
            "ruby",
            "section",
            "table",
            "tbody",
            "thead",
            "tr",
            "tfoot",
            "ul",
            "video"
        ];
    }
    /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */ static containsOnlyInlineElements(e) {
        let t1;
        J(e) ? (t1 = document.createElement("div"), t1.innerHTML = e) : t1 = e;
        const o = (i)=>!d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
        return Array.from(t1.children).every(o);
    }
    /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */ static getDeepestBlockElements(e) {
        return d.containsOnlyInlineElements(e) ? [
            e
        ] : Array.from(e.children).reduce((t1, o)=>[
                ...t1,
                ...d.getDeepestBlockElements(o)
            ], []);
    }
    /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */ static getHolder(e) {
        return J(e) ? document.getElementById(e) : e;
    }
    /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */ static isAnchor(e) {
        return e.tagName.toLowerCase() === "a";
    }
    /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */ static offset(e) {
        const t1 = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, n = t1.top + i, r = t1.left + o;
        return {
            top: n,
            left: r,
            bottom: n + t1.height,
            right: r + t1.width
        };
    }
}
const Wt = {
    blockTunes: {
        toggler: {
            "Click to tune": "",
            "or drag to move": ""
        }
    },
    inlineToolbar: {
        converter: {
            "Convert to": ""
        }
    },
    toolbar: {
        toolbox: {
            Add: ""
        }
    },
    popover: {
        Filter: "",
        "Nothing found": ""
    }
}, Yt = {
    Text: "",
    Link: "",
    Bold: "",
    Italic: ""
}, Kt = {
    link: {
        "Add a link": ""
    },
    stub: {
        "The block can not be displayed correctly.": ""
    }
}, Xt = {
    delete: {
        Delete: "",
        "Click to delete": ""
    },
    moveUp: {
        "Move up": ""
    },
    moveDown: {
        "Move down": ""
    }
}, rt = {
    ui: Wt,
    toolNames: Yt,
    tools: Kt,
    blockTunes: Xt
}, ie = class {
    /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */ static ui(s1, e) {
        return ie._t(s1, e);
    }
    /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */ static t(s1, e) {
        return ie._t(s1, e);
    }
    /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */ static setDictionary(s1) {
        ie.currentDictionary = s1;
    }
    /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */ static _t(s1, e) {
        const t1 = ie.getNamespace(s1);
        return !t1 || !t1[e] ? e : t1[e];
    }
    /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */ static getNamespace(s1) {
        return s1.split(".").reduce((t1, o)=>!t1 || !Object.keys(t1).length ? {} : t1[o], ie.currentDictionary);
    }
};
let $ = ie;
$.currentDictionary = rt;
class at extends Error {
}
class we {
    constructor(){
        this.subscribers = {};
    }
    /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */ on(e, t1) {
        e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t1);
    }
    /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */ once(e, t1) {
        e in this.subscribers || (this.subscribers[e] = []);
        const o = (i)=>{
            const n = t1(i), r = this.subscribers[e].indexOf(o);
            return r !== -1 && this.subscribers[e].splice(r, 1), n;
        };
        this.subscribers[e].push(o);
    }
    /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */ emit(e, t1) {
        V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i)=>{
            const n = i(o);
            return n !== void 0 ? n : o;
        }, t1);
    }
    /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */ off(e, t1) {
        for(let o = 0; o < this.subscribers[e].length; o++)if (this.subscribers[e][o] === t1) {
            delete this.subscribers[e][o];
            break;
        }
    }
    /**
   * Destroyer
   * clears subscribers list
   */ destroy() {
        this.subscribers = null;
    }
}
function he(s1) {
    Object.setPrototypeOf(this, {
        /**
     * Block id
     *
     * @returns {string}
     */ get id () {
            return s1.id;
        },
        /**
     * Tool name
     *
     * @returns {string}
     */ get name () {
            return s1.name;
        },
        /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */ get config () {
            return s1.config;
        },
        /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */ get holder () {
            return s1.holder;
        },
        /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */ get isEmpty () {
            return s1.isEmpty;
        },
        /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */ get selected () {
            return s1.selected;
        },
        /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */ set stretched (t){
            s1.stretched = t;
        },
        /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */ get stretched () {
            return s1.stretched;
        },
        /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */ call (t1, o) {
            return s1.call(t1, o);
        },
        /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */ save () {
            return s1.save();
        },
        /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */ validate (t1) {
            return s1.validate(t1);
        },
        /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */ dispatchChange () {
            s1.dispatchChange();
        }
    });
}
class Re {
    constructor(){
        this.allListeners = [];
    }
    /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */ on(e, t1, o, i = !1) {
        const n = Ut("l"), r = {
            id: n,
            element: e,
            eventType: t1,
            handler: o,
            options: i
        };
        if (!this.findOne(e, t1, o)) return this.allListeners.push(r), e.addEventListener(t1, o, i), n;
    }
    /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */ off(e, t1, o, i) {
        const n = this.findAll(e, t1, o);
        n.forEach((r, a)=>{
            const l = this.allListeners.indexOf(n[a]);
            l > -1 && (this.allListeners.splice(l, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
        });
    }
    /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */ offById(e) {
        const t1 = this.findById(e);
        t1 && t1.element.removeEventListener(t1.eventType, t1.handler, t1.options);
    }
    /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */ findOne(e, t1, o) {
        const i = this.findAll(e, t1, o);
        return i.length > 0 ? i[0] : null;
    }
    /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */ findAll(e, t1, o) {
        let i;
        const n = e ? this.findByEventTarget(e) : [];
        return e && t1 && o ? i = n.filter((r)=>r.eventType === t1 && r.handler === o) : e && t1 ? i = n.filter((r)=>r.eventType === t1) : i = n, i;
    }
    /**
   * Removes all listeners
   */ removeAll() {
        this.allListeners.map((e)=>{
            e.element.removeEventListener(e.eventType, e.handler, e.options);
        }), this.allListeners = [];
    }
    /**
   * Module cleanup on destruction
   */ destroy() {
        this.removeAll();
    }
    /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */ findByEventTarget(e) {
        return this.allListeners.filter((t1)=>{
            if (t1.element === e) return t1;
        });
    }
    /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */ findByType(e) {
        return this.allListeners.filter((t1)=>{
            if (t1.eventType === e) return t1;
        });
    }
    /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */ findByHandler(e) {
        return this.allListeners.filter((t1)=>{
            if (t1.handler === e) return t1;
        });
    }
    /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */ findById(e) {
        return this.allListeners.find((t1)=>t1.id === e);
    }
}
class S {
    /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */ constructor({ config: e , eventsDispatcher: t1  }){
        if (this.nodes = {}, this.listeners = new Re(), this.readOnlyMutableListeners = {
            /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */ on: (o, i, n, r = !1)=>{
                this.mutableListenerIds.push(this.listeners.on(o, i, n, r));
            },
            /**
       * Clears all mutable listeners
       */ clearAll: ()=>{
                for (const o of this.mutableListenerIds)this.listeners.offById(o);
                this.mutableListenerIds = [];
            }
        }, this.mutableListenerIds = [], new.target === S) throw new TypeError("Constructors for abstract class Module are not allowed.");
        this.config = e, this.eventsDispatcher = t1;
    }
    /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */ set state(e) {
        this.Editor = e;
    }
    /**
   * Remove memorized nodes
   */ removeAllNodes() {
        for(const e in this.nodes){
            const t1 = this.nodes[e];
            t1 instanceof HTMLElement && t1.remove();
        }
    }
    /**
   * Returns true if current direction is RTL (Right-To-Left)
   */ get isRtl() {
        return this.config.i18n.direction === "rtl";
    }
}
class m {
    constructor(){
        this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
    }
    /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */ static get CSS() {
        return {
            editorWrapper: "codex-editor",
            editorZone: "codex-editor__redactor"
        };
    }
    /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */ static get anchorNode() {
        const e = window.getSelection();
        return e ? e.anchorNode : null;
    }
    /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */ static get anchorElement() {
        const e = window.getSelection();
        if (!e) return null;
        const t1 = e.anchorNode;
        return t1 ? d.isElement(t1) ? t1 : t1.parentElement : null;
    }
    /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */ static get anchorOffset() {
        const e = window.getSelection();
        return e ? e.anchorOffset : null;
    }
    /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */ static get isCollapsed() {
        const e = window.getSelection();
        return e ? e.isCollapsed : null;
    }
    /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */ static get isAtEditor() {
        return this.isSelectionAtEditor(m.get());
    }
    /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */ static isSelectionAtEditor(e) {
        if (!e) return !1;
        let t1 = e.anchorNode || e.focusNode;
        t1 && t1.nodeType === Node.TEXT_NODE && (t1 = t1.parentNode);
        let o = null;
        return t1 && t1 instanceof Element && (o = t1.closest(`.${m.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
    }
    /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */ static isRangeAtEditor(e) {
        if (!e) return;
        let t1 = e.startContainer;
        t1 && t1.nodeType === Node.TEXT_NODE && (t1 = t1.parentNode);
        let o = null;
        return t1 && t1 instanceof Element && (o = t1.closest(`.${m.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
    }
    /**
   * Methods return boolean that true if selection exists on the page
   */ static get isSelectionExists() {
        return !!m.get().anchorNode;
    }
    /**
   * Return first range
   *
   * @returns {Range|null}
   */ static get range() {
        return this.getRangeFromSelection(this.get());
    }
    /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */ static getRangeFromSelection(e) {
        return e && e.rangeCount ? e.getRangeAt(0) : null;
    }
    /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */ static get rect() {
        let e = document.selection, t1, o = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        if (e && e.type !== "Control") return e, t1 = e.createRange(), o.x = t1.boundingLeft, o.y = t1.boundingTop, o.width = t1.boundingWidth, o.height = t1.boundingHeight, o;
        if (!window.getSelection) return T("Method window.getSelection is not supported", "warn"), o;
        if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount)) return T("Method SelectionUtils.rangeCount is not supported", "warn"), o;
        if (e.rangeCount === 0) return o;
        if (t1 = e.getRangeAt(0).cloneRange(), t1.getBoundingClientRect && (o = t1.getBoundingClientRect()), o.x === 0 && o.y === 0) {
            const i = document.createElement("span");
            if (i.getBoundingClientRect) {
                i.appendChild(document.createTextNode("​")), t1.insertNode(i), o = i.getBoundingClientRect();
                const n = i.parentNode;
                n.removeChild(i), n.normalize();
            }
        }
        return o;
    }
    /**
   * Returns selected text as String
   *
   * @returns {string}
   */ static get text() {
        return window.getSelection ? window.getSelection().toString() : "";
    }
    /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */ static get() {
        return window.getSelection();
    }
    /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */ static setCursor(e, t1 = 0) {
        const o = document.createRange(), i = window.getSelection();
        return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t1, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t1), o.setEnd(e, t1), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
    }
    /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */ static isRangeInsideContainer(e) {
        const t1 = m.range;
        return t1 === null ? !1 : e.contains(t1.startContainer);
    }
    /**
   * Adds fake cursor to the current range
   */ static addFakeCursor() {
        const e = m.range;
        if (e === null) return;
        const t1 = d.make("span", "codex-editor__fake-cursor");
        t1.dataset.mutationFree = "true", e.collapse(), e.insertNode(t1);
    }
    /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */ static isFakeCursorInsideContainer(e) {
        return d.find(e, ".codex-editor__fake-cursor") !== null;
    }
    /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */ static removeFakeCursor(e = document.body) {
        const t1 = d.find(e, ".codex-editor__fake-cursor");
        t1 && t1.remove();
    }
    /**
   * Removes fake background
   */ removeFakeBackground() {
        this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
    }
    /**
   * Sets fake background
   */ setFakeBackground() {
        document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
    }
    /**
   * Save SelectionUtils's range
   */ save() {
        this.savedSelectionRange = m.range;
    }
    /**
   * Restore saved SelectionUtils's range
   */ restore() {
        if (!this.savedSelectionRange) return;
        const e = window.getSelection();
        e.removeAllRanges(), e.addRange(this.savedSelectionRange);
    }
    /**
   * Clears saved selection
   */ clearSaved() {
        this.savedSelectionRange = null;
    }
    /**
   * Collapse current selection
   */ collapseToEnd() {
        const e = window.getSelection(), t1 = document.createRange();
        t1.selectNodeContents(e.focusNode), t1.collapse(!1), e.removeAllRanges(), e.addRange(t1);
    }
    /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */ findParentTag(e, t1, o = 10) {
        const i = window.getSelection();
        let n = null;
        return !i || !i.anchorNode || !i.focusNode ? null : ([
            /** the Node in which the selection begins */ i.anchorNode,
            /** the Node in which the selection ends */ i.focusNode
        ].forEach((a)=>{
            let l = o;
            for(; l > 0 && a.parentNode && !(a.tagName === e && (n = a, t1 && a.classList && !a.classList.contains(t1) && (n = null), n));)a = a.parentNode, l--;
        }), n);
    }
    /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */ expandToTag(e) {
        const t1 = window.getSelection();
        t1.removeAllRanges();
        const o = document.createRange();
        o.selectNodeContents(e), t1.addRange(o);
    }
}
function Vt(s1, e) {
    const { type: t1 , target: o , addedNodes: i , removedNodes: n  } = s1;
    if (o === e) return !0;
    if ([
        "characterData",
        "attributes"
    ].includes(t1)) {
        const l = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
        return e.contains(l);
    }
    const r = Array.from(i).some((l)=>e.contains(l)), a = Array.from(n).some((l)=>e.contains(l));
    return r || a;
}
const Me = "redactor dom changed", lt = "block changed", ct = "fake cursor is about to be toggled", dt = "fake cursor have been set";
var q = /* @__PURE__ */ ((s1)=>(s1.APPEND_CALLBACK = "appendCallback", s1.RENDERED = "rendered", s1.MOVED = "moved", s1.UPDATED = "updated", s1.REMOVED = "removed", s1.ON_PASTE = "onPaste", s1))(q || {});
class F extends we {
    /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */ constructor({ id: e = zt() , data: t1 , tool: o , api: i , readOnly: n , tunesData: r  }, a){
        super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = ()=>{
            this.dropInputsCache(), this.updateCurrentInput();
        }, this.didMutated = (l)=>{
            const c = l === void 0, u = l instanceof InputEvent;
            !c && !u && this.detectToolRootChange(l);
            let h;
            c || u ? h = !0 : h = !(l.length > 0 && l.every((v)=>{
                const { addedNodes: p , removedNodes: k , target: _  } = v;
                return [
                    ...Array.from(p),
                    ...Array.from(k),
                    _
                ].some((A)=>d.isElement(A) ? A.dataset.mutationFree === "true" : !1);
            })), h && (this.dropInputsCache(), this.updateCurrentInput(), this.call("updated"), this.emit("didMutated", this));
        }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.api = i, this.editorEventBus = a || null, this.blockAPI = new he(this), this.tool = o, this.toolInstance = o.create(t1, this.blockAPI, n), this.tunes = o.tunes, this.composeTunes(r), this.holder = this.compose(), this.watchBlockMutations(), this.addInputEvents();
    }
    /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */ static get CSS() {
        return {
            wrapper: "ce-block",
            wrapperStretched: "ce-block--stretched",
            content: "ce-block__content",
            focused: "ce-block--focused",
            selected: "ce-block--selected",
            dropTarget: "ce-block--drop-target"
        };
    }
    /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */ get inputs() {
        if (this.cachedInputs.length !== 0) return this.cachedInputs;
        const e = d.findAllInputs(this.holder);
        return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
    }
    /**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */ get currentInput() {
        return this.inputs[this.inputIndex];
    }
    /**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */ set currentInput(e) {
        const t1 = this.inputs.findIndex((o)=>o === e || o.contains(e));
        t1 !== -1 && (this.inputIndex = t1);
    }
    /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */ get firstInput() {
        return this.inputs[0];
    }
    /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */ get lastInput() {
        const e = this.inputs;
        return e[e.length - 1];
    }
    /**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */ get nextInput() {
        return this.inputs[this.inputIndex + 1];
    }
    /**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */ get previousInput() {
        return this.inputs[this.inputIndex - 1];
    }
    /**
   * Get Block's JSON data
   *
   * @returns {object}
   */ get data() {
        return this.save().then((e)=>e && !V(e.data) ? e.data : {});
    }
    /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */ get sanitize() {
        return this.tool.sanitizeConfig;
    }
    /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */ get mergeable() {
        return D(this.toolInstance.merge);
    }
    /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */ get isEmpty() {
        const e = d.isEmpty(this.pluginsContent), t1 = !this.hasMedia;
        return e && t1;
    }
    /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */ get hasMedia() {
        const e = [
            "img",
            "iframe",
            "video",
            "audio",
            "source",
            "input",
            "textarea",
            "twitterwidget"
        ];
        return !!this.holder.querySelector(e.join(","));
    }
    /**
   * Set focused state
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */ set focused(e) {
        this.holder.classList.toggle(F.CSS.focused, e);
    }
    /**
   * Get Block's focused state
   */ get focused() {
        return this.holder.classList.contains(F.CSS.focused);
    }
    /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */ set selected(e) {
        var i, n;
        this.holder.classList.toggle(F.CSS.selected, e);
        const t1 = e === !0 && m.isRangeInsideContainer(this.holder), o = e === !1 && m.isFakeCursorInsideContainer(this.holder);
        (t1 || o) && ((i = this.editorEventBus) == null || i.emit(ct, {
            state: e
        }), t1 ? m.addFakeCursor() : m.removeFakeCursor(this.holder), (n = this.editorEventBus) == null || n.emit(dt, {
            state: e
        }));
    }
    /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */ get selected() {
        return this.holder.classList.contains(F.CSS.selected);
    }
    /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */ set stretched(e) {
        this.holder.classList.toggle(F.CSS.wrapperStretched, e);
    }
    /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */ get stretched() {
        return this.holder.classList.contains(F.CSS.wrapperStretched);
    }
    /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */ set dropTarget(e) {
        this.holder.classList.toggle(F.CSS.dropTarget, e);
    }
    /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */ get pluginsContent() {
        return this.toolRenderedElement;
    }
    /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */ call(e, t1) {
        if (D(this.toolInstance[e])) {
            e === "appendCallback" && T("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
            try {
                this.toolInstance[e].call(this.toolInstance, t1);
            } catch (o) {
                T(`Error during '${e}' call: ${o.message}`, "error");
            }
        }
    }
    /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */ async mergeWith(e) {
        await this.toolInstance.merge(e);
    }
    /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */ async save() {
        const e = await this.toolInstance.save(this.pluginsContent), t1 = this.unavailableTunesData;
        [
            ...this.tunesInstances.entries(),
            ...this.defaultTunesInstances.entries()
        ].forEach(([n, r])=>{
            if (D(r.save)) try {
                t1[n] = r.save();
            } catch (a) {
                T(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
            }
        });
        const o = window.performance.now();
        let i;
        return Promise.resolve(e).then((n)=>(i = window.performance.now(), {
                id: this.id,
                tool: this.name,
                data: n,
                tunes: t1,
                time: i - o
            })).catch((n)=>{
            T(`Saving process for ${this.name} tool failed due to the ${n}`, "log", "red");
        });
    }
    /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */ async validate(e) {
        let t1 = !0;
        return this.toolInstance.validate instanceof Function && (t1 = await this.toolInstance.validate(e)), t1;
    }
    /**
   * Returns data to render in tunes menu.
   * Splits block tunes settings into 2 groups: popover items and custom html.
   */ getTunes() {
        const e = document.createElement("div"), t1 = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], i = [
            ...this.tunesInstances.values(),
            ...this.defaultTunesInstances.values()
        ].map((n)=>n.render());
        return [
            o,
            i
        ].flat().forEach((n)=>{
            d.isElement(n) ? e.appendChild(n) : Array.isArray(n) ? t1.push(...n) : t1.push(n);
        }), [
            t1,
            e
        ];
    }
    /**
   * Update current input index with selection anchor node
   */ updateCurrentInput() {
        this.currentInput = d.isNativeInput(document.activeElement) || !m.anchorNode ? document.activeElement : m.anchorNode;
    }
    /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */ dispatchChange() {
        this.didMutated();
    }
    /**
   * Call Tool instance destroy method
   */ destroy() {
        this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), D(this.toolInstance.destroy) && this.toolInstance.destroy();
    }
    /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */ async getActiveToolboxEntry() {
        const e = this.tool.toolbox;
        if (e.length === 1) return Promise.resolve(this.tool.toolbox[0]);
        const t1 = await this.data;
        return e.find((i)=>Object.entries(i.data).some(([n, r])=>t1[n] && $t(t1[n], r)));
    }
    /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */ compose() {
        const e = d.make("div", F.CSS.wrapper), t1 = d.make("div", F.CSS.content), o = this.toolInstance.render();
        this.toolRenderedElement = o, t1.appendChild(this.toolRenderedElement);
        let i = t1;
        return [
            ...this.tunesInstances.values(),
            ...this.defaultTunesInstances.values()
        ].forEach((n)=>{
            if (D(n.wrap)) try {
                i = n.wrap(i);
            } catch (r) {
                T(`Tune ${n.constructor.name} wrap method throws an Error %o`, "warn", r);
            }
        }), e.appendChild(i), e;
    }
    /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */ composeTunes(e) {
        Array.from(this.tunes.values()).forEach((t1)=>{
            (t1.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t1.name, t1.create(e[t1.name], this.blockAPI));
        }), Object.entries(e).forEach(([t1, o])=>{
            this.tunesInstances.has(t1) || (this.unavailableTunesData[t1] = o);
        });
    }
    /**
   * Adds focus event listeners to all inputs and contenteditable
   */ addInputEvents() {
        this.inputs.forEach((e)=>{
            e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
        });
    }
    /**
   * removes focus event listeners from all inputs and contenteditable
   */ removeInputEvents() {
        this.inputs.forEach((e)=>{
            e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
        });
    }
    /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */ watchBlockMutations() {
        var e;
        this.redactorDomChangedCallback = (t1)=>{
            const { mutations: o  } = t1;
            o.some((n)=>Vt(n, this.toolRenderedElement)) && this.didMutated(o);
        }, (e = this.editorEventBus) == null || e.on(Me, this.redactorDomChangedCallback);
    }
    /**
   * Remove redactor dom change event listener
   */ unwatchBlockMutations() {
        var e;
        (e = this.editorEventBus) == null || e.off(Me, this.redactorDomChangedCallback);
    }
    /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */ detectToolRootChange(e) {
        e.forEach((t1)=>{
            if (Array.from(t1.removedNodes).includes(this.toolRenderedElement)) {
                const i = t1.addedNodes[t1.addedNodes.length - 1];
                this.toolRenderedElement = i;
            }
        });
    }
    /**
   * Clears inputs cached value
   */ dropInputsCache() {
        this.cachedInputs = [];
    }
}
class Zt extends S {
    constructor(){
        super(...arguments), this.insert = (e = this.config.defaultBlock, t1 = {}, o = {}, i, n, r, a)=>{
            const l = this.Editor.BlockManager.insert({
                id: a,
                tool: e,
                data: t1,
                index: i,
                needToFocus: n,
                replace: r
            });
            return new he(l);
        }, this.composeBlockData = async (e)=>{
            const t1 = this.Editor.Tools.blockTools.get(e);
            return new F({
                tool: t1,
                api: this.Editor.API,
                readOnly: !0,
                data: {},
                tunesData: {}
            }).data;
        }, this.update = (e, t1)=>{
            const { BlockManager: o  } = this.Editor, i = o.getBlockById(e);
            if (!i) {
                T("blocks.update(): Block with passed id was not found", "warn");
                return;
            }
            const n = o.getBlockIndex(i);
            o.insert({
                id: i.id,
                tool: i.name,
                data: t1,
                index: n,
                replace: !0,
                tunes: i.tunes
            });
        };
    }
    /**
   * Available methods
   *
   * @returns {Blocks}
   */ get methods() {
        return {
            clear: ()=>this.clear(),
            render: (e)=>this.render(e),
            renderFromHTML: (e)=>this.renderFromHTML(e),
            delete: (e)=>this.delete(e),
            swap: (e, t1)=>this.swap(e, t1),
            move: (e, t1)=>this.move(e, t1),
            getBlockByIndex: (e)=>this.getBlockByIndex(e),
            getById: (e)=>this.getById(e),
            getCurrentBlockIndex: ()=>this.getCurrentBlockIndex(),
            getBlockIndex: (e)=>this.getBlockIndex(e),
            getBlocksCount: ()=>this.getBlocksCount(),
            stretchBlock: (e, t1 = !0)=>this.stretchBlock(e, t1),
            insertNewBlock: ()=>this.insertNewBlock(),
            insert: this.insert,
            update: this.update,
            composeBlockData: this.composeBlockData
        };
    }
    /**
   * Returns Blocks count
   *
   * @returns {number}
   */ getBlocksCount() {
        return this.Editor.BlockManager.blocks.length;
    }
    /**
   * Returns current block index
   *
   * @returns {number}
   */ getCurrentBlockIndex() {
        return this.Editor.BlockManager.currentBlockIndex;
    }
    /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */ getBlockIndex(e) {
        const t1 = this.Editor.BlockManager.getBlockById(e);
        if (!t1) {
            K("There is no block with id `" + e + "`", "warn");
            return;
        }
        return this.Editor.BlockManager.getBlockIndex(t1);
    }
    /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */ getBlockByIndex(e) {
        const t1 = this.Editor.BlockManager.getBlockByIndex(e);
        if (t1 === void 0) {
            K("There is no block at index `" + e + "`", "warn");
            return;
        }
        return new he(t1);
    }
    /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */ getById(e) {
        const t1 = this.Editor.BlockManager.getBlockById(e);
        return t1 === void 0 ? (K("There is no block with id `" + e + "`", "warn"), null) : new he(t1);
    }
    /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */ swap(e, t1) {
        T("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(e, t1);
    }
    /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */ move(e, t1) {
        this.Editor.BlockManager.move(e, t1);
    }
    /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */ delete(e) {
        try {
            this.Editor.BlockManager.removeBlock(e);
        } catch (t1) {
            K(t1, "warn");
            return;
        }
        this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
    }
    /**
   * Clear Editor's area
   */ clear() {
        this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
    }
    /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */ render(e) {
        return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(e.blocks);
    }
    /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */ renderFromHTML(e) {
        return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
    }
    /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */ stretchBlock(e, t1 = !0) {
        Ie(!0, "blocks.stretchBlock()", "BlockAPI");
        const o = this.Editor.BlockManager.getBlockByIndex(e);
        o && (o.stretched = t1);
    }
    /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */ insertNewBlock() {
        T("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
    }
}
class Gt extends S {
    constructor(){
        super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t1), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t1), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t1), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t1 = 0)=>this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t1), !0) : !1, this.setToBlock = (e, t1 = this.Editor.Caret.positions.DEFAULT, o = 0)=>this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t1, o), !0) : !1, this.focus = (e = !1)=>e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
    }
    /**
   * Available methods
   *
   * @returns {Caret}
   */ get methods() {
        return {
            setToFirstBlock: this.setToFirstBlock,
            setToLastBlock: this.setToLastBlock,
            setToPreviousBlock: this.setToPreviousBlock,
            setToNextBlock: this.setToNextBlock,
            setToBlock: this.setToBlock,
            focus: this.focus
        };
    }
}
class qt extends S {
    /**
   * Available methods
   *
   * @returns {Events}
   */ get methods() {
        return {
            emit: (e, t1)=>this.emit(e, t1),
            off: (e, t1)=>this.off(e, t1),
            on: (e, t1)=>this.on(e, t1)
        };
    }
    /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */ on(e, t1) {
        this.eventsDispatcher.on(e, t1);
    }
    /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */ emit(e, t1) {
        this.eventsDispatcher.emit(e, t1);
    }
    /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */ off(e, t1) {
        this.eventsDispatcher.off(e, t1);
    }
}
class De extends S {
    /**
   * Return namespace section for tool or block tune
   *
   * @param tool - tool object
   */ static getNamespace(e) {
        return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
    }
    /**
   * Return I18n API methods with global dictionary access
   */ get methods() {
        return {
            t: ()=>{
                K("I18n.t() method can be accessed only from Tools", "warn");
            }
        };
    }
    /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param tool - Tool object
   */ getMethodsForTool(e) {
        return Object.assign(this.methods, {
            t: (t1)=>$.t(De.getNamespace(e), t1)
        });
    }
}
class Jt extends S {
    /**
   * Editor.js Core API modules
   */ get methods() {
        return {
            blocks: this.Editor.BlocksAPI.methods,
            caret: this.Editor.CaretAPI.methods,
            events: this.Editor.EventsAPI.methods,
            listeners: this.Editor.ListenersAPI.methods,
            notifier: this.Editor.NotifierAPI.methods,
            sanitizer: this.Editor.SanitizerAPI.methods,
            saver: this.Editor.SaverAPI.methods,
            selection: this.Editor.SelectionAPI.methods,
            styles: this.Editor.StylesAPI.classes,
            toolbar: this.Editor.ToolbarAPI.methods,
            inlineToolbar: this.Editor.InlineToolbarAPI.methods,
            tooltip: this.Editor.TooltipAPI.methods,
            i18n: this.Editor.I18nAPI.methods,
            readOnly: this.Editor.ReadOnlyAPI.methods,
            ui: this.Editor.UiAPI.methods
        };
    }
    /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param tool - tool object
   */ getMethodsForTool(e) {
        return Object.assign(this.methods, {
            i18n: this.Editor.I18nAPI.getMethodsForTool(e)
        });
    }
}
class Qt extends S {
    /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */ get methods() {
        return {
            close: ()=>this.close(),
            open: ()=>this.open()
        };
    }
    /**
   * Open Inline Toolbar
   */ open() {
        this.Editor.InlineToolbar.tryToShow();
    }
    /**
   * Close Inline Toolbar
   */ close() {
        this.Editor.InlineToolbar.close();
    }
}
class eo extends S {
    /**
   * Available methods
   *
   * @returns {Listeners}
   */ get methods() {
        return {
            on: (e, t1, o, i)=>this.on(e, t1, o, i),
            off: (e, t1, o, i)=>this.off(e, t1, o, i),
            offById: (e)=>this.offById(e)
        };
    }
    /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */ on(e, t1, o, i) {
        return this.listeners.on(e, t1, o, i);
    }
    /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */ off(e, t1, o, i) {
        this.listeners.off(e, t1, o, i);
    }
    /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */ offById(e) {
        this.listeners.offById(e);
    }
}
var Le = {}, to = {
    get exports () {
        return Le;
    },
    set exports (s){
        Le = s;
    }
};
(function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(window, function() {
        return function(t1) {
            var o = {};
            function i(n) {
                if (o[n]) return o[n].exports;
                var r = o[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t1[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
            }
            return i.m = t1, i.c = o, i.d = function(n, r, a) {
                i.o(n, r) || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: a
                });
            }, i.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                });
            }, i.t = function(n, r) {
                if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                var a = /* @__PURE__ */ Object.create(null);
                if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && typeof n != "string") for(var l in n)i.d(a, l, (function(c) {
                    return n[c];
                }).bind(null, l));
                return a;
            }, i.n = function(n) {
                var r = n && n.__esModule ? function() {
                    return n.default;
                } : function() {
                    return n;
                };
                return i.d(r, "a", r), r;
            }, i.o = function(n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
            }, i.p = "/", i(i.s = 0);
        }([
            function(t1, o, i) {
                i(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */ t1.exports = function() {
                    var n = i(6), r = "cdx-notify--bounce-in", a = null;
                    return {
                        show: function(l) {
                            if (l.message) {
                                (function() {
                                    if (a) return !0;
                                    a = n.getWrapper(), document.body.appendChild(a);
                                })();
                                var c = null, u = l.time || 8e3;
                                switch(l.type){
                                    case "confirm":
                                        c = n.confirm(l);
                                        break;
                                    case "prompt":
                                        c = n.prompt(l);
                                        break;
                                    default:
                                        c = n.alert(l), window.setTimeout(function() {
                                            c.remove();
                                        }, u);
                                }
                                a.appendChild(c), c.classList.add(r);
                            }
                        }
                    };
                }();
            },
            function(t1, o, i) {
                var n = i(2);
                typeof n == "string" && (n = [
                    [
                        t1.i,
                        n,
                        ""
                    ]
                ]);
                var r = {
                    hmr: !0,
                    transform: void 0,
                    insertInto: void 0
                };
                i(4)(n, r), n.locals && (t1.exports = n.locals);
            },
            function(t1, o, i) {
                (t1.exports = i(3)(!1)).push([
                    t1.i,
                    `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`,
                    ""
                ]);
            },
            function(t1, o) {
                t1.exports = function(i) {
                    var n = [];
                    return n.toString = function() {
                        return this.map(function(r) {
                            var a = function(l, c) {
                                var u = l[1] || "", h = l[3];
                                if (!h) return u;
                                if (c && typeof btoa == "function") {
                                    var f = (p = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(p)))) + " */"), v = h.sources.map(function(k) {
                                        return "/*# sourceURL=" + h.sourceRoot + k + " */";
                                    });
                                    return [
                                        u
                                    ].concat(v).concat([
                                        f
                                    ]).join(`
`);
                                }
                                var p;
                                return [
                                    u
                                ].join(`
`);
                            }(r, i);
                            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
                        }).join("");
                    }, n.i = function(r, a) {
                        typeof r == "string" && (r = [
                            [
                                null,
                                r,
                                ""
                            ]
                        ]);
                        for(var l = {}, c = 0; c < this.length; c++){
                            var u = this[c][0];
                            typeof u == "number" && (l[u] = !0);
                        }
                        for(c = 0; c < r.length; c++){
                            var h = r[c];
                            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), n.push(h));
                        }
                    }, n;
                };
            },
            function(t1, o, i) {
                var n, r, a = {}, l = (n = function() {
                    return window && document && document.all && !window.atob;
                }, function() {
                    return r === void 0 && (r = n.apply(this, arguments)), r;
                }), c = function(b) {
                    var g = {};
                    return function(E) {
                        if (typeof E == "function") return E();
                        if (g[E] === void 0) {
                            var C = (function(O) {
                                return document.querySelector(O);
                            }).call(this, E);
                            if (window.HTMLIFrameElement && C instanceof window.HTMLIFrameElement) try {
                                C = C.contentDocument.head;
                            } catch  {
                                C = null;
                            }
                            g[E] = C;
                        }
                        return g[E];
                    };
                }(), u = null, h = 0, f = [], v = i(5);
                function p(b, g) {
                    for(var E = 0; E < b.length; E++){
                        var C = b[E], O = a[C.id];
                        if (O) {
                            O.refs++;
                            for(var I = 0; I < O.parts.length; I++)O.parts[I](C.parts[I]);
                            for(; I < C.parts.length; I++)O.parts.push(x(C.parts[I], g));
                        } else {
                            var H = [];
                            for(I = 0; I < C.parts.length; I++)H.push(x(C.parts[I], g));
                            a[C.id] = {
                                id: C.id,
                                refs: 1,
                                parts: H
                            };
                        }
                    }
                }
                function k(b, g) {
                    for(var E = [], C = {}, O = 0; O < b.length; O++){
                        var I = b[O], H = g.base ? I[0] + g.base : I[0], L = {
                            css: I[1],
                            media: I[2],
                            sourceMap: I[3]
                        };
                        C[H] ? C[H].parts.push(L) : E.push(C[H] = {
                            id: H,
                            parts: [
                                L
                            ]
                        });
                    }
                    return E;
                }
                function _(b, g) {
                    var E = c(b.insertInto);
                    if (!E) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                    var C = f[f.length - 1];
                    if (b.insertAt === "top") C ? C.nextSibling ? E.insertBefore(g, C.nextSibling) : E.appendChild(g) : E.insertBefore(g, E.firstChild), f.push(g);
                    else if (b.insertAt === "bottom") E.appendChild(g);
                    else {
                        if (typeof b.insertAt != "object" || !b.insertAt.before) throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
                        var O = c(b.insertInto + " " + b.insertAt.before);
                        E.insertBefore(g, O);
                    }
                }
                function N(b) {
                    if (b.parentNode === null) return !1;
                    b.parentNode.removeChild(b);
                    var g = f.indexOf(b);
                    g >= 0 && f.splice(g, 1);
                }
                function A(b) {
                    var g = document.createElement("style");
                    return b.attrs.type === void 0 && (b.attrs.type = "text/css"), y(g, b.attrs), _(b, g), g;
                }
                function y(b, g) {
                    Object.keys(g).forEach(function(E) {
                        b.setAttribute(E, g[E]);
                    });
                }
                function x(b, g) {
                    var E, C, O, I;
                    if (g.transform && b.css) {
                        if (!(I = g.transform(b.css))) return function() {};
                        b.css = I;
                    }
                    if (g.singleton) {
                        var H = h++;
                        E = u || (u = A(g)), C = R.bind(null, E, H, !1), O = R.bind(null, E, H, !0);
                    } else b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (E = function(L) {
                        var W = document.createElement("link");
                        return L.attrs.type === void 0 && (L.attrs.type = "text/css"), L.attrs.rel = "stylesheet", y(W, L.attrs), _(L, W), W;
                    }(g), C = (function(L, W, le) {
                        var Q = le.css, Ee = le.sourceMap, It = W.convertToAbsoluteUrls === void 0 && Ee;
                        (W.convertToAbsoluteUrls || It) && (Q = v(Q)), Ee && (Q += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Ee)))) + " */");
                        var Mt = new Blob([
                            Q
                        ], {
                            type: "text/css"
                        }), Xe = L.href;
                        L.href = URL.createObjectURL(Mt), Xe && URL.revokeObjectURL(Xe);
                    }).bind(null, E, g), O = function() {
                        N(E), E.href && URL.revokeObjectURL(E.href);
                    }) : (E = A(g), C = (function(L, W) {
                        var le = W.css, Q = W.media;
                        if (Q && L.setAttribute("media", Q), L.styleSheet) L.styleSheet.cssText = le;
                        else {
                            for(; L.firstChild;)L.removeChild(L.firstChild);
                            L.appendChild(document.createTextNode(le));
                        }
                    }).bind(null, E), O = function() {
                        N(E);
                    });
                    return C(b), function(L) {
                        if (L) {
                            if (L.css === b.css && L.media === b.media && L.sourceMap === b.sourceMap) return;
                            C(b = L);
                        } else O();
                    };
                }
                t1.exports = function(b, g) {
                    if (typeof DEBUG < "u" && DEBUG && typeof document != "object") throw new Error("The style-loader cannot be used in a non-browser environment");
                    (g = g || {}).attrs = typeof g.attrs == "object" ? g.attrs : {}, g.singleton || typeof g.singleton == "boolean" || (g.singleton = l()), g.insertInto || (g.insertInto = "head"), g.insertAt || (g.insertAt = "bottom");
                    var E = k(b, g);
                    return p(E, g), function(C) {
                        for(var O = [], I = 0; I < E.length; I++){
                            var H = E[I];
                            (L = a[H.id]).refs--, O.push(L);
                        }
                        for(C && p(k(C, g), g), I = 0; I < O.length; I++){
                            var L;
                            if ((L = O[I]).refs === 0) {
                                for(var W = 0; W < L.parts.length; W++)L.parts[W]();
                                delete a[L.id];
                            }
                        }
                    };
                };
                var w, M = (w = [], function(b, g) {
                    return w[b] = g, w.filter(Boolean).join(`
`);
                });
                function R(b, g, E, C) {
                    var O = E ? "" : C.css;
                    if (b.styleSheet) b.styleSheet.cssText = M(g, O);
                    else {
                        var I = document.createTextNode(O), H = b.childNodes;
                        H[g] && b.removeChild(H[g]), H.length ? b.insertBefore(I, H[g]) : b.appendChild(I);
                    }
                }
            },
            function(t1, o) {
                t1.exports = function(i) {
                    var n = typeof window < "u" && window.location;
                    if (!n) throw new Error("fixUrls requires window.location");
                    if (!i || typeof i != "string") return i;
                    var r = n.protocol + "//" + n.host, a = r + n.pathname.replace(/\/[^\/]*$/, "/");
                    return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, c) {
                        var u, h = c.trim().replace(/^"(.*)"$/, function(f, v) {
                            return v;
                        }).replace(/^'(.*)'$/, function(f, v) {
                            return v;
                        });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
                    });
                };
            },
            function(t1, o, i) {
                var n, r, a, l, c, u, h, f, v;
                t1.exports = (n = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", f = "cdx-notify__btns-wrapper", {
                    alert: v = function(p) {
                        var k = document.createElement("DIV"), _ = document.createElement("DIV"), N = p.message, A = p.style;
                        return k.classList.add(r), A && k.classList.add(r + "--" + A), k.innerHTML = N, _.classList.add(a), _.addEventListener("click", k.remove.bind(k)), k.appendChild(_), k;
                    },
                    confirm: function(p) {
                        var k = v(p), _ = document.createElement("div"), N = document.createElement("button"), A = document.createElement("button"), y = k.querySelector("." + a), x = p.cancelHandler, w = p.okHandler;
                        return _.classList.add(f), N.innerHTML = p.okText || "Confirm", A.innerHTML = p.cancelText || "Cancel", N.classList.add(h), A.classList.add(h), N.classList.add(l), A.classList.add(c), x && typeof x == "function" && (A.addEventListener("click", x), y.addEventListener("click", x)), w && typeof w == "function" && N.addEventListener("click", w), N.addEventListener("click", k.remove.bind(k)), A.addEventListener("click", k.remove.bind(k)), _.appendChild(N), _.appendChild(A), k.appendChild(_), k;
                    },
                    prompt: function(p) {
                        var k = v(p), _ = document.createElement("div"), N = document.createElement("button"), A = document.createElement("input"), y = k.querySelector("." + a), x = p.cancelHandler, w = p.okHandler;
                        return _.classList.add(f), N.innerHTML = p.okText || "Ok", N.classList.add(h), N.classList.add(l), A.classList.add(u), p.placeholder && A.setAttribute("placeholder", p.placeholder), p.default && (A.value = p.default), p.inputType && (A.type = p.inputType), x && typeof x == "function" && y.addEventListener("click", x), w && typeof w == "function" && N.addEventListener("click", function() {
                            w(A.value);
                        }), N.addEventListener("click", k.remove.bind(k)), _.appendChild(A), _.appendChild(N), k.appendChild(_), k;
                    },
                    getWrapper: function() {
                        var p = document.createElement("DIV");
                        return p.classList.add(n), p;
                    }
                });
            }
        ]);
    });
})(to);
const oo = /* @__PURE__ */ xe(Le);
class io {
    /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */ show(e) {
        oo.show(e);
    }
}
class no extends S {
    /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e , eventsDispatcher: t1  }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.notifier = new io();
    }
    /**
   * Available methods
   */ get methods() {
        return {
            show: (e)=>this.show(e)
        };
    }
    /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */ show(e) {
        return this.notifier.show(e);
    }
}
class so extends S {
    /**
   * Available methods
   */ get methods() {
        const e = ()=>this.isEnabled;
        return {
            toggle: (t1)=>this.toggle(t1),
            get isEnabled () {
                return e();
            }
        };
    }
    /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */ toggle(e) {
        return this.Editor.ReadOnly.toggle(e);
    }
    /**
   * Returns current read-only state
   */ get isEnabled() {
        return this.Editor.ReadOnly.isEnabled;
    }
}
var Oe = {}, ro = {
    get exports () {
        return Oe;
    },
    set exports (s){
        Oe = s;
    }
};
(function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(Lt, function() {
        function t1(h) {
            var f = h.tags, v = Object.keys(f), p = v.map(function(k) {
                return typeof f[k];
            }).every(function(k) {
                return k === "object" || k === "boolean" || k === "function";
            });
            if (!p) throw new Error("The configuration was invalid");
            this.config = h;
        }
        var o = [
            "P",
            "LI",
            "TD",
            "TH",
            "DIV",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "PRE"
        ];
        function i(h) {
            return o.indexOf(h.nodeName) !== -1;
        }
        var n = [
            "A",
            "B",
            "STRONG",
            "I",
            "EM",
            "SUB",
            "SUP",
            "U",
            "STRIKE"
        ];
        function r(h) {
            return n.indexOf(h.nodeName) !== -1;
        }
        t1.prototype.clean = function(h) {
            const f = document.implementation.createHTMLDocument(), v = f.createElement("div");
            return v.innerHTML = h, this._sanitize(f, v), v.innerHTML;
        }, t1.prototype._sanitize = function(h, f) {
            var v = a(h, f), p = v.firstChild();
            if (p) do {
                if (p.nodeType === Node.TEXT_NODE) {
                    if (p.data.trim() === "" && (p.previousElementSibling && i(p.previousElementSibling) || p.nextElementSibling && i(p.nextElementSibling))) {
                        f.removeChild(p), this._sanitize(h, f);
                        break;
                    } else continue;
                }
                if (p.nodeType === Node.COMMENT_NODE) {
                    f.removeChild(p), this._sanitize(h, f);
                    break;
                }
                var k = r(p), _;
                k && (_ = Array.prototype.some.call(p.childNodes, i));
                var N = !!f.parentNode, A = i(f) && i(p) && N, y = p.nodeName.toLowerCase(), x = l(this.config, y, p), w = k && _;
                if (w || c(p, x) || !this.config.keepNestedBlockElements && A) {
                    if (!(p.nodeName === "SCRIPT" || p.nodeName === "STYLE")) for(; p.childNodes.length > 0;)f.insertBefore(p.childNodes[0], p);
                    f.removeChild(p), this._sanitize(h, f);
                    break;
                }
                for(var M = 0; M < p.attributes.length; M += 1){
                    var R = p.attributes[M];
                    u(R, x, p) && (p.removeAttribute(R.name), M = M - 1);
                }
                this._sanitize(h, p);
            }while (p = v.nextSibling());
        };
        function a(h, f) {
            return h.createTreeWalker(f, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
        }
        function l(h, f, v) {
            return typeof h.tags[f] == "function" ? h.tags[f](v) : h.tags[f];
        }
        function c(h, f) {
            return typeof f > "u" ? !0 : typeof f == "boolean" ? !f : !1;
        }
        function u(h, f, v) {
            var p = h.name.toLowerCase();
            return f === !0 ? !1 : typeof f[p] == "function" ? !f[p](h.value, v) : typeof f[p] > "u" || f[p] === !1 ? !0 : typeof f[p] == "string" ? f[p] !== h.value : !1;
        }
        return t1;
    });
})(ro);
const ao = Oe;
function ht(s1, e) {
    return s1.map((t1)=>{
        const o = D(e) ? e(t1.tool) : e;
        return V(o) || (t1.data = Pe(t1.data, o)), t1;
    });
}
function Z(s1, e = {}) {
    const t1 = {
        tags: e
    };
    return new ao(t1).clean(s1);
}
function Pe(s1, e) {
    return Array.isArray(s1) ? lo(s1, e) : j(s1) ? co(s1, e) : J(s1) ? ho(s1, e) : s1;
}
function lo(s1, e) {
    return s1.map((t1)=>Pe(t1, e));
}
function co(s1, e) {
    const t1 = {};
    for(const o in s1){
        if (!Object.prototype.hasOwnProperty.call(s1, o)) continue;
        const i = s1[o], n = uo(e[o]) ? e[o] : e;
        t1[o] = Pe(i, n);
    }
    return t1;
}
function ho(s1, e) {
    return j(e) ? Z(s1, e) : e === !1 ? Z(s1, {}) : s1;
}
function uo(s1) {
    return j(s1) || Nt(s1) || D(s1);
}
class po extends S {
    /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */ get methods() {
        return {
            clean: (e, t1)=>this.clean(e, t1)
        };
    }
    /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */ clean(e, t1) {
        return Z(e, t1);
    }
}
class fo extends S {
    /**
   * Available methods
   *
   * @returns {Saver}
   */ get methods() {
        return {
            save: ()=>this.save()
        };
    }
    /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */ save() {
        const e = "Editor's content can not be saved in read-only mode";
        return this.Editor.ReadOnly.isEnabled ? (K(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
    }
}
class go extends S {
    /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */ get methods() {
        return {
            findParentTag: (e, t1)=>this.findParentTag(e, t1),
            expandToTag: (e)=>this.expandToTag(e)
        };
    }
    /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */ findParentTag(e, t1) {
        return new m().findParentTag(e, t1);
    }
    /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */ expandToTag(e) {
        new m().expandToTag(e);
    }
}
class bo extends S {
    /**
   * Exported classes
   */ get classes() {
        return {
            /**
       * Base Block styles
       */ block: "cdx-block",
            /**
       * Inline Tools styles
       */ inlineToolButton: "ce-inline-tool",
            inlineToolButtonActive: "ce-inline-tool--active",
            /**
       * UI elements
       */ input: "cdx-input",
            loader: "cdx-loader",
            button: "cdx-button",
            /**
       * Settings styles
       */ settingsButton: "cdx-settings-button",
            settingsButtonActive: "cdx-settings-button--active"
        };
    }
}
class mo extends S {
    /**
   * Available methods
   *
   * @returns {Toolbar}
   */ get methods() {
        return {
            close: ()=>this.close(),
            open: ()=>this.open(),
            toggleBlockSettings: (e)=>this.toggleBlockSettings(e),
            toggleToolbox: (e)=>this.toggleToolbox(e)
        };
    }
    /**
   * Open toolbar
   */ open() {
        this.Editor.Toolbar.moveAndOpen();
    }
    /**
   * Close toolbar and all included elements
   */ close() {
        this.Editor.Toolbar.close();
    }
    /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */ toggleBlockSettings(e) {
        if (this.Editor.BlockManager.currentBlockIndex === -1) {
            K("Could't toggle the Toolbar because there is no block selected ", "warn");
            return;
        }
        e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
    }
    /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */ toggleToolbox(e) {
        if (this.Editor.BlockManager.currentBlockIndex === -1) {
            K("Could't toggle the Toolbox because there is no block selected ", "warn");
            return;
        }
        e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
    }
}
var _e = {}, ko = {
    get exports () {
        return _e;
    },
    set exports (s){
        _e = s;
    }
};
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */ (function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(window, function() {
        return function(t1) {
            var o = {};
            function i(n) {
                if (o[n]) return o[n].exports;
                var r = o[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t1[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
            }
            return i.m = t1, i.c = o, i.d = function(n, r, a) {
                i.o(n, r) || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: a
                });
            }, i.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                });
            }, i.t = function(n, r) {
                if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                var a = /* @__PURE__ */ Object.create(null);
                if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && typeof n != "string") for(var l in n)i.d(a, l, (function(c) {
                    return n[c];
                }).bind(null, l));
                return a;
            }, i.n = function(n) {
                var r = n && n.__esModule ? function() {
                    return n.default;
                } : function() {
                    return n;
                };
                return i.d(r, "a", r), r;
            }, i.o = function(n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
            }, i.p = "", i(i.s = 0);
        }([
            function(t1, o, i) {
                t1.exports = i(1);
            },
            function(t1, o, i) {
                i.r(o), i.d(o, "default", function() {
                    return n;
                });
                class n {
                    constructor(){
                        this.nodes = {
                            wrapper: null,
                            content: null
                        }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = ()=>{
                            this.showed && this.hide(!0);
                        }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
                            passive: !0
                        });
                    }
                    get CSS() {
                        return {
                            tooltip: "ct",
                            tooltipContent: "ct__content",
                            tooltipShown: "ct--shown",
                            placement: {
                                left: "ct--left",
                                bottom: "ct--bottom",
                                right: "ct--right",
                                top: "ct--top"
                            }
                        };
                    }
                    show(a, l, c) {
                        this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                        const u = Object.assign({
                            placement: "bottom",
                            marginTop: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            delay: 70,
                            hidingDelay: 0
                        }, c);
                        if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string") this.nodes.content.appendChild(document.createTextNode(l));
                        else {
                            if (!(l instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of \xabcontent\xbb passed. It should be an instance of Node or String. But " + typeof l + " given.");
                            this.nodes.content.appendChild(l);
                        }
                        switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement){
                            case "top":
                                this.placeTop(a, u);
                                break;
                            case "left":
                                this.placeLeft(a, u);
                                break;
                            case "right":
                                this.placeRight(a, u);
                                break;
                            case "bottom":
                            default:
                                this.placeBottom(a, u);
                        }
                        u && u.delay ? this.showingTimeout = setTimeout(()=>{
                            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
                        }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
                    }
                    hide(a = !1) {
                        if (this.hidingDelay && !a) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(()=>{
                            this.hide(!0);
                        }, this.hidingDelay));
                        this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
                    }
                    onHover(a, l, c) {
                        a.addEventListener("mouseenter", ()=>{
                            this.show(a, l, c);
                        }), a.addEventListener("mouseleave", ()=>{
                            this.hide();
                        });
                    }
                    destroy() {
                        this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
                    }
                    prepare() {
                        this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
                    }
                    loadStyles() {
                        const a = "codex-tooltips-style";
                        if (document.getElementById(a)) return;
                        const l = i(2), c = this.make("style", null, {
                            textContent: l.toString(),
                            id: a
                        });
                        this.prepend(document.head, c);
                    }
                    placeBottom(a, l) {
                        const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
                        this.applyPlacement("bottom", u, h);
                    }
                    placeTop(a, l) {
                        const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                        this.applyPlacement("top", u, h);
                    }
                    placeLeft(a, l) {
                        const c = a.getBoundingClientRect(), u = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                        this.applyPlacement("left", u, h);
                    }
                    placeRight(a, l) {
                        const c = a.getBoundingClientRect(), u = c.right + this.offsetRight + l.marginRight, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                        this.applyPlacement("right", u, h);
                    }
                    applyPlacement(a, l, c) {
                        this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
                    }
                    make(a, l = null, c = {}) {
                        const u = document.createElement(a);
                        Array.isArray(l) ? u.classList.add(...l) : l && u.classList.add(l);
                        for(const h in c)c.hasOwnProperty(h) && (u[h] = c[h]);
                        return u;
                    }
                    append(a, l) {
                        Array.isArray(l) ? l.forEach((c)=>a.appendChild(c)) : a.appendChild(l);
                    }
                    prepend(a, l) {
                        Array.isArray(l) ? (l = l.reverse()).forEach((c)=>a.prepend(c)) : a.prepend(l);
                    }
                }
            },
            function(t1, o) {
                t1.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
            }
        ]).default;
    });
})(ko);
const vo = /* @__PURE__ */ xe(_e);
class Fe {
    constructor(){
        this.lib = new vo();
    }
    /**
   * Release the library
   */ destroy() {
        this.lib.destroy();
    }
    /**
   * Shows tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */ show(e, t1, o) {
        this.lib.show(e, t1, o);
    }
    /**
   * Hides tooltip
   *
   * @param skipHidingDelay — pass true to immediately hide the tooltip
   */ hide(e = !1) {
        this.lib.hide(e);
    }
    /**
   * Binds 'mouseenter' and 'mouseleave' events that shows/hides the Tooltip
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */ onHover(e, t1, o) {
        this.lib.onHover(e, t1, o);
    }
}
class xo extends S {
    /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e , eventsDispatcher: t1  }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.tooltip = new Fe();
    }
    /**
   * Destroy Module
   */ destroy() {
        this.tooltip.destroy();
    }
    /**
   * Available methods
   */ get methods() {
        return {
            show: (e, t1, o)=>this.show(e, t1, o),
            hide: ()=>this.hide(),
            onHover: (e, t1, o)=>this.onHover(e, t1, o)
        };
    }
    /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */ show(e, t1, o) {
        this.tooltip.show(e, t1, o);
    }
    /**
   * Method hides tooltip on HTML page
   */ hide() {
        this.tooltip.hide();
    }
    /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */ onHover(e, t1, o) {
        this.tooltip.onHover(e, t1, o);
    }
}
class wo extends S {
    /**
   * Available methods / getters
   */ get methods() {
        return {
            nodes: this.editorNodes
        };
    }
    /**
   * Exported classes
   */ get editorNodes() {
        return {
            /**
       * Top-level editor instance wrapper
       */ wrapper: this.Editor.UI.nodes.wrapper,
            /**
       * Element that holds all the Blocks
       */ redactor: this.Editor.UI.nodes.redactor
        };
    }
}
function ut(s1, e) {
    const t1 = {};
    return Object.entries(s1).forEach(([o, i])=>{
        if (j(i)) {
            const n = e ? `${e}.${o}` : o;
            Object.values(i).every((a)=>J(a)) ? t1[o] = n : t1[o] = ut(i, n);
            return;
        }
        t1[o] = i;
    }), t1;
}
const X = ut(rt);
function yo(s1, e) {
    const t1 = {};
    return Object.keys(s1).forEach((o)=>{
        const i = e[o];
        i !== void 0 ? t1[i] = s1[o] : t1[o] = s1[o];
    }), t1;
}
const Eo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', pt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', Bo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', Co = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', To = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', So = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', qe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Io = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', Mo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', Lo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Oo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
class P {
    /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   */ constructor(e){
        this.nodes = {
            root: null,
            icon: null
        }, this.confirmationState = null, this.removeSpecialFocusBehavior = ()=>{
            this.nodes.root.classList.remove(P.CSS.noFocus);
        }, this.removeSpecialHoverBehavior = ()=>{
            this.nodes.root.classList.remove(P.CSS.noHover);
        }, this.onErrorAnimationEnd = ()=>{
            this.nodes.icon.classList.remove(P.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
        }, this.params = e, this.nodes.root = this.make(e);
    }
    /**
   * True if item is disabled and hence not clickable
   */ get isDisabled() {
        return this.params.isDisabled;
    }
    /**
   * Exposes popover item toggle parameter
   */ get toggle() {
        return this.params.toggle;
    }
    /**
   * Item title
   */ get title() {
        return this.params.title;
    }
    /**
   * True if popover should close once item is activated
   */ get closeOnActivate() {
        return this.params.closeOnActivate;
    }
    /**
   * True if confirmation state is enabled for popover item
   */ get isConfirmationStateEnabled() {
        return this.confirmationState !== null;
    }
    /**
   * True if item is focused in keyboard navigation process
   */ get isFocused() {
        return this.nodes.root.classList.contains(P.CSS.focused);
    }
    /**
   * Popover item CSS classes
   */ static get CSS() {
        return {
            container: "ce-popover-item",
            title: "ce-popover-item__title",
            secondaryTitle: "ce-popover-item__secondary-title",
            icon: "ce-popover-item__icon",
            active: "ce-popover-item--active",
            disabled: "ce-popover-item--disabled",
            focused: "ce-popover-item--focused",
            hidden: "ce-popover-item--hidden",
            confirmationState: "ce-popover-item--confirmation",
            noHover: "ce-popover-item--no-hover",
            noFocus: "ce-popover-item--no-focus",
            wobbleAnimation: "wobble"
        };
    }
    /**
   * Returns popover item root element
   */ getElement() {
        return this.nodes.root;
    }
    /**
   * Called on popover item click
   */ handleClick() {
        if (this.isConfirmationStateEnabled) {
            this.activateOrEnableConfirmationMode(this.confirmationState);
            return;
        }
        this.activateOrEnableConfirmationMode(this.params);
    }
    /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */ toggleActive(e) {
        this.nodes.root.classList.toggle(P.CSS.active, e);
    }
    /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */ toggleHidden(e) {
        this.nodes.root.classList.toggle(P.CSS.hidden, e);
    }
    /**
   * Resets popover item to its original state
   */ reset() {
        this.isConfirmationStateEnabled && this.disableConfirmationMode();
    }
    /**
   * Method called once item becomes focused during keyboard navigation
   */ onFocus() {
        this.disableSpecialHoverAndFocusBehavior();
    }
    /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   */ make(e) {
        const t1 = d.make("div", P.CSS.container);
        return e.name && (t1.dataset.itemName = e.name), this.nodes.icon = d.make("div", P.CSS.icon, {
            innerHTML: e.icon || To
        }), t1.appendChild(this.nodes.icon), t1.appendChild(d.make("div", P.CSS.title, {
            innerHTML: e.title || ""
        })), e.secondaryLabel && t1.appendChild(d.make("div", P.CSS.secondaryTitle, {
            textContent: e.secondaryLabel
        })), e.isActive && t1.classList.add(P.CSS.active), e.isDisabled && t1.classList.add(P.CSS.disabled), t1;
    }
    /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */ enableConfirmationMode(e) {
        const t1 = {
            ...this.params,
            ...e,
            confirmation: e.confirmation
        }, o = this.make(t1);
        this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(P.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
    }
    /**
   * Returns item to its original state
   */ disableConfirmationMode() {
        const e = this.make(this.params);
        this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(P.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
    }
    /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */ enableSpecialHoverAndFocusBehavior() {
        this.nodes.root.classList.add(P.CSS.noHover), this.nodes.root.classList.add(P.CSS.noFocus), this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, {
            once: !0
        });
    }
    /**
   * Disables special focus and hover behavior
   */ disableSpecialHoverAndFocusBehavior() {
        this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
    }
    /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */ activateOrEnableConfirmationMode(e) {
        if (e.confirmation === void 0) try {
            e.onActivate(e), this.disableConfirmationMode();
        } catch  {
            this.animateError();
        }
        else this.enableConfirmationMode(e.confirmation);
    }
    /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */ animateError() {
        this.nodes.icon.classList.contains(P.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(P.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
    }
}
const ce = class {
    /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */ constructor(s1, e){
        this.cursor = -1, this.items = [], this.items = s1 || [], this.focusedCssClass = e;
    }
    /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */ get currentItem() {
        return this.cursor === -1 ? null : this.items[this.cursor];
    }
    /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */ setCursor(s1) {
        s1 < this.items.length && s1 >= -1 && (this.dropCursor(), this.cursor = s1, this.items[this.cursor].classList.add(this.focusedCssClass));
    }
    /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */ setItems(s1) {
        this.items = s1;
    }
    /**
   * Sets cursor next to the current
   */ next() {
        this.cursor = this.leafNodesAndReturnIndex(ce.directions.RIGHT);
    }
    /**
   * Sets cursor before current
   */ previous() {
        this.cursor = this.leafNodesAndReturnIndex(ce.directions.LEFT);
    }
    /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */ dropCursor() {
        this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
    }
    /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */ leafNodesAndReturnIndex(s1) {
        if (this.items.length === 0) return this.cursor;
        let e = this.cursor;
        return e === -1 ? e = s1 === ce.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), s1 === ce.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, d.canSetCaret(this.items[e]) && oe(()=>m.setCursor(this.items[e]), 50)(), this.items[e].classList.add(this.focusedCssClass), e;
    }
};
let ne = ce;
ne.directions = {
    RIGHT: "right",
    LEFT: "left"
};
class G {
    /**
   * @param {FlipperOptions} options - different constructing settings
   */ constructor(e){
        this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t1)=>{
            if (this.isEventReadyForHandling(t1)) switch(G.usedKeys.includes(t1.keyCode) && t1.preventDefault(), t1.keyCode){
                case B.TAB:
                    this.handleTabPress(t1);
                    break;
                case B.LEFT:
                case B.UP:
                    this.flipLeft();
                    break;
                case B.RIGHT:
                case B.DOWN:
                    this.flipRight();
                    break;
                case B.ENTER:
                    this.handleEnterPress(t1);
                    break;
            }
        }, this.iterator = new ne(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || G.usedKeys;
    }
    /**
   * True if flipper is currently activated
   */ get isActivated() {
        return this.activated;
    }
    /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */ static get usedKeys() {
        return [
            B.TAB,
            B.LEFT,
            B.RIGHT,
            B.ENTER,
            B.UP,
            B.DOWN
        ];
    }
    /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */ activate(e, t1) {
        this.activated = !0, e && this.iterator.setItems(e), t1 !== void 0 && this.iterator.setCursor(t1), document.addEventListener("keydown", this.onKeyDown, !0);
    }
    /**
   * Disable tab/arrows handling by flipper
   */ deactivate() {
        this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
    }
    /**
   * Focus first item
   */ focusFirst() {
        this.dropCursor(), this.flipRight();
    }
    /**
   * Focuses previous flipper iterator item
   */ flipLeft() {
        this.iterator.previous(), this.flipCallback();
    }
    /**
   * Focuses next flipper iterator item
   */ flipRight() {
        this.iterator.next(), this.flipCallback();
    }
    /**
   * Return true if some button is focused
   */ hasFocus() {
        return !!this.iterator.currentItem;
    }
    /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */ onFlip(e) {
        this.flipCallbacks.push(e);
    }
    /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */ removeOnFlip(e) {
        this.flipCallbacks = this.flipCallbacks.filter((t1)=>t1 !== e);
    }
    /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */ dropCursor() {
        this.iterator.dropCursor();
    }
    /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */ isEventReadyForHandling(e) {
        return this.activated && this.allowedKeys.includes(e.keyCode);
    }
    /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */ handleTabPress(e) {
        switch(e.shiftKey ? ne.directions.LEFT : ne.directions.RIGHT){
            case ne.directions.RIGHT:
                this.flipRight();
                break;
            case ne.directions.LEFT:
                this.flipLeft();
                break;
        }
    }
    /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */ handleEnterPress(e) {
        this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), D(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
    }
    /**
   * Fired after flipping in any direction
   */ flipCallback() {
        this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e)=>e());
    }
}
class ue {
    /**
   * Styles
   */ static get CSS() {
        return {
            wrapper: "cdx-search-field",
            icon: "cdx-search-field__icon",
            input: "cdx-search-field__input"
        };
    }
    /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.onSearch - search callback
   * @param options.placeholder - input placeholder
   */ constructor({ items: e , onSearch: t1 , placeholder: o  }){
        this.listeners = new Re(), this.items = e, this.onSearch = t1, this.render(o);
    }
    /**
   * Returns search field element
   */ getElement() {
        return this.wrapper;
    }
    /**
   * Sets focus to the input
   */ focus() {
        this.input.focus();
    }
    /**
   * Clears search query and results
   */ clear() {
        this.input.value = "", this.searchQuery = "", this.onSearch("", this.foundItems);
    }
    /**
   * Clears memory
   */ destroy() {
        this.listeners.removeAll();
    }
    /**
   * Creates the search field
   *
   * @param placeholder - input placeholder
   */ render(e) {
        this.wrapper = d.make("div", ue.CSS.wrapper);
        const t1 = d.make("div", ue.CSS.icon, {
            innerHTML: Lo
        });
        this.input = d.make("input", ue.CSS.input, {
            placeholder: e
        }), this.wrapper.appendChild(t1), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", ()=>{
            this.searchQuery = this.input.value, this.onSearch(this.searchQuery, this.foundItems);
        });
    }
    /**
   * Returns list of found items for the current search query
   */ get foundItems() {
        return this.items.filter((e)=>this.checkItem(e));
    }
    /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */ checkItem(e) {
        var i;
        const t1 = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o = this.searchQuery.toLowerCase();
        return t1.includes(o);
    }
}
const de = class {
    /**
   * Locks body element scroll
   */ lock() {
        Ge ? this.lockHard() : document.body.classList.add(de.CSS.scrollLocked);
    }
    /**
   * Unlocks body element scroll
   */ unlock() {
        Ge ? this.unlockHard() : document.body.classList.remove(de.CSS.scrollLocked);
    }
    /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */ lockHard() {
        this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", `${this.scrollPosition}px`), document.body.classList.add(de.CSS.scrollLockedHard);
    }
    /**
   * Unlocks hard scroll lock
   */ unlockHard() {
        document.body.classList.remove(de.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
    }
};
let ft = de;
ft.CSS = {
    scrollLocked: "ce-scroll-locked",
    scrollLockedHard: "ce-scroll-locked--hard"
};
var _o = Object.defineProperty, Ao = Object.getOwnPropertyDescriptor, No = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? Ao(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && _o(e, t1, i), i;
}, fe = /* @__PURE__ */ ((s1)=>(s1.Close = "close", s1))(fe || {});
const z = class extends we {
    /**
   * Constructs the instance
   *
   * @param params - popover construction params
   */ constructor(s1){
        super(), this.scopeElement = document.body, this.listeners = new Re(), this.scrollLocker = new ft(), this.nodes = {
            wrapper: null,
            popover: null,
            nothingFoundMessage: null,
            customContent: null,
            items: null,
            overlay: null
        }, this.messages = {
            nothingFound: "Nothing found",
            search: "Search"
        }, this.onFlip = ()=>{
            this.items.find((t1)=>t1.isFocused).onFocus();
        }, this.items = s1.items.map((e)=>new P(e)), s1.scopeElement !== void 0 && (this.scopeElement = s1.scopeElement), s1.messages && (this.messages = {
            ...this.messages,
            ...s1.messages
        }), s1.customContentFlippableItems && (this.customContentFlippableItems = s1.customContentFlippableItems), this.make(), s1.customContent && this.addCustomContent(s1.customContent), s1.searchable && this.addSearch(), this.initializeFlipper();
    }
    /**
   * Popover CSS classes
   */ static get CSS() {
        return {
            popover: "ce-popover",
            popoverOpenTop: "ce-popover--open-top",
            popoverOpened: "ce-popover--opened",
            search: "ce-popover__search",
            nothingFoundMessage: "ce-popover__nothing-found-message",
            nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
            customContent: "ce-popover__custom-content",
            customContentHidden: "ce-popover__custom-content--hidden",
            items: "ce-popover__items",
            overlay: "ce-popover__overlay",
            overlayHidden: "ce-popover__overlay--hidden"
        };
    }
    /**
   * Returns HTML element corresponding to the popover
   */ getElement() {
        return this.nodes.wrapper;
    }
    /**
   * Returns true if some item inside popover is focused
   */ hasFocus() {
        return this.flipper.hasFocus();
    }
    /**
   * Open popover
   */ show() {
        this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), this.nodes.popover.classList.add(z.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(z.CSS.overlayHidden), this.nodes.popover.classList.add(z.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && setTimeout(()=>{
            this.search.focus();
        }, 100), ee() && this.scrollLocker.lock();
    }
    /**
   * Closes popover
   */ hide() {
        this.nodes.popover.classList.remove(z.CSS.popoverOpened), this.nodes.popover.classList.remove(z.CSS.popoverOpenTop), this.nodes.overlay.classList.add(z.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((s1)=>s1.reset()), this.search !== void 0 && this.search.clear(), ee() && this.scrollLocker.unlock(), this.emit("close");
    }
    /**
   * Clears memory
   */ destroy() {
        this.flipper.deactivate(), this.listeners.removeAll(), ee() && this.scrollLocker.unlock();
    }
    /**
   * Constructs HTML element corresponding to popover
   */ make() {
        this.nodes.popover = d.make("div", [
            z.CSS.popover
        ]), this.nodes.nothingFoundMessage = d.make("div", [
            z.CSS.nothingFoundMessage
        ], {
            textContent: this.messages.nothingFound
        }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [
            z.CSS.items
        ]), this.items.forEach((s1)=>{
            this.nodes.items.appendChild(s1.getElement());
        }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (s1)=>{
            const e = this.getTargetItem(s1);
            e !== void 0 && this.handleItemClick(e);
        }), this.nodes.wrapper = d.make("div"), this.nodes.overlay = d.make("div", [
            z.CSS.overlay,
            z.CSS.overlayHidden
        ]), this.listeners.on(this.nodes.overlay, "click", ()=>{
            this.hide();
        }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
    }
    /**
   * Adds search to the popover
   */ addSearch() {
        this.search = new ue({
            items: this.items,
            placeholder: this.messages.search,
            onSearch: (e, t1)=>{
                this.items.forEach((i)=>{
                    const n = !t1.includes(i);
                    i.toggleHidden(n);
                }), this.toggleNothingFoundMessage(t1.length === 0), this.toggleCustomContent(e !== "");
                const o = e === "" ? this.flippableElements : t1.map((i)=>i.getElement());
                this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(o));
            }
        });
        const s1 = this.search.getElement();
        s1.classList.add(z.CSS.search), this.nodes.popover.insertBefore(s1, this.nodes.popover.firstChild);
    }
    /**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */ addCustomContent(s1) {
        this.nodes.customContent = s1, this.nodes.customContent.classList.add(z.CSS.customContent), this.nodes.popover.insertBefore(s1, this.nodes.popover.firstChild);
    }
    /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */ getTargetItem(s1) {
        return this.items.find((e)=>s1.composedPath().includes(e.getElement()));
    }
    /**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */ handleItemClick(s1) {
        s1.isDisabled || (this.items.filter((e)=>e !== s1).forEach((e)=>e.reset()), s1.handleClick(), this.toggleItemActivenessIfNeeded(s1), s1.closeOnActivate && this.hide());
    }
    /**
   * Creates Flipper instance which allows to navigate between popover items via keyboard
   */ initializeFlipper() {
        this.flipper = new G({
            items: this.flippableElements,
            focusedItemClass: P.CSS.focused,
            allowedKeys: [
                B.TAB,
                B.UP,
                B.DOWN,
                B.ENTER
            ]
        }), this.flipper.onFlip(this.onFlip);
    }
    /**
   * Returns list of elements available for keyboard navigation.
   * Contains both usual popover items elements and custom html content.
   */ get flippableElements() {
        const s1 = this.items.map((t1)=>t1.getElement());
        return (this.customContentFlippableItems || []).concat(s1);
    }
    get height() {
        let s1 = 0;
        if (this.nodes.popover === null) return s1;
        const e = this.nodes.popover.cloneNode(!0);
        return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(z.CSS.popoverOpened), document.body.appendChild(e), s1 = e.offsetHeight, e.remove(), s1;
    }
    /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */ get shouldOpenBottom() {
        const s1 = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t1 = this.height, o = s1.top + t1, i = s1.top - t1, n = Math.min(window.innerHeight, e.bottom);
        return i < e.top || o <= n;
    }
    /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */ toggleNothingFoundMessage(s1) {
        this.nodes.nothingFoundMessage.classList.toggle(z.CSS.nothingFoundMessageDisplayed, s1);
    }
    /**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */ toggleCustomContent(s1) {
        var e;
        (e = this.nodes.customContent) == null || e.classList.toggle(z.CSS.customContentHidden, s1);
    }
    /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */ toggleItemActivenessIfNeeded(s1) {
        if (s1.toggle === !0 && s1.toggleActive(), typeof s1.toggle == "string") {
            const e = this.items.filter((t1)=>t1.toggle === s1.toggle);
            if (e.length === 1) {
                s1.toggleActive();
                return;
            }
            e.forEach((t1)=>{
                t1.toggleActive(t1 === s1);
            });
        }
    }
};
let He = z;
No([
    ae
], He.prototype, "height", 1);
class Ro extends S {
    constructor(){
        super(...arguments), this.opened = !1, this.selection = new m(), this.onPopoverClose = ()=>{
            this.close();
        };
    }
    /**
   * Module Events
   *
   * @returns {{opened: string, closed: string}}
   */ get events() {
        return {
            opened: "block-settings-opened",
            closed: "block-settings-closed"
        };
    }
    /**
   * Block Settings CSS
   */ get CSS() {
        return {
            settings: "ce-settings"
        };
    }
    /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */ get flipper() {
        var e;
        return (e = this.popover) == null ? void 0 : e.flipper;
    }
    /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */ make() {
        this.nodes.wrapper = d.make("div", [
            this.CSS.settings
        ]);
    }
    /**
   * Destroys module
   */ destroy() {
        this.removeAllNodes();
    }
    /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */ open(e = this.Editor.BlockManager.currentBlock) {
        this.opened = !0, this.selection.save(), e.selected = !0, this.Editor.BlockSelection.clearCache();
        const [t1, o] = e.getTunes();
        this.eventsDispatcher.emit(this.events.opened), this.popover = new He({
            searchable: !0,
            items: t1.map((i)=>this.resolveTuneAliases(i)),
            customContent: o,
            customContentFlippableItems: this.getControls(o),
            scopeElement: this.Editor.API.methods.ui.nodes.redactor,
            messages: {
                nothingFound: $.ui(X.ui.popover, "Nothing found"),
                search: $.ui(X.ui.popover, "Filter")
            }
        }), this.popover.on(fe.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
    }
    /**
   * Returns root block settings element
   */ getElement() {
        return this.nodes.wrapper;
    }
    /**
   * Close Block Settings pane
   */ close() {
        this.opened = !1, m.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(fe.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null);
    }
    /**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */ getControls(e) {
        const { StylesAPI: t1  } = this.Editor, o = e.querySelectorAll(`.${t1.classes.settingsButton}, ${d.allInputsSelector}`);
        return Array.from(o);
    }
    /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */ resolveTuneAliases(e) {
        const t1 = yo(e, {
            label: "title"
        });
        return e.confirmation && (t1.confirmation = this.resolveTuneAliases(e.confirmation)), t1;
    }
}
class Y extends S {
    constructor(){
        super(...arguments), this.opened = !1, this.tools = [], this.flipper = null, this.togglingCallback = null;
    }
    /**
   * CSS getter
   */ static get CSS() {
        return {
            conversionToolbarWrapper: "ce-conversion-toolbar",
            conversionToolbarShowed: "ce-conversion-toolbar--showed",
            conversionToolbarTools: "ce-conversion-toolbar__tools",
            conversionToolbarLabel: "ce-conversion-toolbar__label",
            conversionTool: "ce-conversion-tool",
            conversionToolHidden: "ce-conversion-tool--hidden",
            conversionToolIcon: "ce-conversion-tool__icon",
            conversionToolFocused: "ce-conversion-tool--focused",
            conversionToolActive: "ce-conversion-tool--active"
        };
    }
    /**
   * Create UI of Conversion Toolbar
   */ make() {
        this.nodes.wrapper = d.make("div", [
            Y.CSS.conversionToolbarWrapper,
            ...this.isRtl ? [
                this.Editor.UI.CSS.editorRtlFix
            ] : []
        ]), this.nodes.tools = d.make("div", Y.CSS.conversionToolbarTools);
        const e = d.make("div", Y.CSS.conversionToolbarLabel, {
            textContent: $.ui(X.ui.inlineToolbar.converter, "Convert to")
        });
        return this.addTools(), this.enableFlipper(), d.append(this.nodes.wrapper, e), d.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
    }
    /**
   * Deactivates flipper and removes all nodes
   */ destroy() {
        this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
    }
    /**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */ toggle(e) {
        this.opened ? this.close() : this.open(), D(e) && (this.togglingCallback = e);
    }
    /**
   * Shows Conversion Toolbar
   */ open() {
        this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(Y.CSS.conversionToolbarShowed), window.requestAnimationFrame(()=>{
            this.flipper.activate(this.tools.map((e)=>e.button).filter((e)=>!e.classList.contains(Y.CSS.conversionToolHidden))), this.flipper.focusFirst(), D(this.togglingCallback) && this.togglingCallback(!0);
        });
    }
    /**
   * Closes Conversion Toolbar
   */ close() {
        this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(Y.CSS.conversionToolbarShowed), D(this.togglingCallback) && this.togglingCallback(!1);
    }
    /**
   * Returns true if it has more than one tool available for convert in
   */ hasTools() {
        return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : !0;
    }
    /**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   * @param blockDataOverrides - Block data overrides. Could be passed in case if Multiple Toolbox items specified
   */ async replaceWithBlock(e, t1) {
        const o = this.Editor.BlockManager.currentBlock.tool, n = (await this.Editor.BlockManager.currentBlock.save()).data, r = this.Editor.Tools.blockTools.get(e);
        let a = "";
        const l = o.conversionConfig.export;
        if (D(l)) a = l(n);
        else if (J(l)) a = n[l];
        else {
            T("Conversion \xabexport\xbb property must be a string or function. String means key of saved data object to export. Function should export processed string to export.");
            return;
        }
        const c = Z(a, r.sanitizeConfig);
        let u = {};
        const h = r.conversionConfig.import;
        if (D(h)) u = h(c);
        else if (J(h)) u[h] = c;
        else {
            T("Conversion \xabimport\xbb property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data.");
            return;
        }
        t1 && (u = Object.assign(u, t1)), this.Editor.BlockManager.replace({
            tool: e,
            data: u
        }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), oe(()=>{
            this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock);
        }, 10)();
    }
    /**
   * Iterates existing Tools and inserts to the ConversionToolbar
   * if tools have ability to import
   */ addTools() {
        const e = this.Editor.Tools.blockTools;
        Array.from(e.entries()).forEach(([t1, o])=>{
            const i = o.conversionConfig;
            !i || !i.import || o.toolbox.forEach((n)=>this.addToolIfValid(t1, n));
        });
    }
    /**
   * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
   *
   * @param name - tool's name
   * @param toolboxSettings - tool's single toolbox setting
   */ addToolIfValid(e, t1) {
        V(t1) || !t1.icon || this.addTool(e, t1);
    }
    /**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */ addTool(e, t1) {
        const o = d.make("div", [
            Y.CSS.conversionTool
        ]), i = d.make("div", [
            Y.CSS.conversionToolIcon
        ]);
        o.dataset.tool = e, i.innerHTML = t1.icon, d.append(o, i), d.append(o, d.text($.t(X.toolNames, t1.title || ke(e)))), d.append(this.nodes.tools, o), this.tools.push({
            name: e,
            button: o,
            toolboxItem: t1
        }), this.listeners.on(o, "click", async ()=>{
            await this.replaceWithBlock(e, t1.data);
        });
    }
    /**
   * Hide current Tool and show others
   */ async filterTools() {
        const { currentBlock: e  } = this.Editor.BlockManager, t1 = await e.getActiveToolboxEntry();
        function o(i, n) {
            return i.icon === n.icon && i.title === n.title;
        }
        this.tools.forEach((i)=>{
            let n = !1;
            if (t1) {
                const r = o(t1, i.toolboxItem);
                n = i.button.dataset.tool === e.name && r;
            }
            i.button.hidden = n, i.button.classList.toggle(Y.CSS.conversionToolHidden, n);
        });
    }
    /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */ enableFlipper() {
        this.flipper = new G({
            focusedItemClass: Y.CSS.conversionToolFocused
        });
    }
}
var Ae = {}, Do = {
    get exports () {
        return Ae;
    },
    set exports (s){
        Ae = s;
    }
};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */ (function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(window, function() {
        return function(t1) {
            var o = {};
            function i(n) {
                if (o[n]) return o[n].exports;
                var r = o[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t1[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
            }
            return i.m = t1, i.c = o, i.d = function(n, r, a) {
                i.o(n, r) || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: a
                });
            }, i.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                });
            }, i.t = function(n, r) {
                if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                var a = /* @__PURE__ */ Object.create(null);
                if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && typeof n != "string") for(var l in n)i.d(a, l, (function(c) {
                    return n[c];
                }).bind(null, l));
                return a;
            }, i.n = function(n) {
                var r = n && n.__esModule ? function() {
                    return n.default;
                } : function() {
                    return n;
                };
                return i.d(r, "a", r), r;
            }, i.o = function(n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
            }, i.p = "", i(i.s = 0);
        }([
            function(t1, o, i) {
                function n(l, c) {
                    for(var u = 0; u < c.length; u++){
                        var h = c[u];
                        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
                    }
                }
                function r(l, c, u) {
                    return c && n(l.prototype, c), u && n(l, u), l;
                }
                i.r(o);
                var a = function() {
                    function l(c) {
                        var u = this;
                        (function(h, f) {
                            if (!(h instanceof f)) throw new TypeError("Cannot call a class as a function");
                        })(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function(h) {
                            u.execute(h);
                        }, this.element.addEventListener("keydown", this.executeShortcut, !1);
                    }
                    return r(l, null, [
                        {
                            key: "supportedCommands",
                            get: function() {
                                return {
                                    SHIFT: [
                                        "SHIFT"
                                    ],
                                    CMD: [
                                        "CMD",
                                        "CONTROL",
                                        "COMMAND",
                                        "WINDOWS",
                                        "CTRL"
                                    ],
                                    ALT: [
                                        "ALT",
                                        "OPTION"
                                    ]
                                };
                            }
                        },
                        {
                            key: "keyCodes",
                            get: function() {
                                return {
                                    0: 48,
                                    1: 49,
                                    2: 50,
                                    3: 51,
                                    4: 52,
                                    5: 53,
                                    6: 54,
                                    7: 55,
                                    8: 56,
                                    9: 57,
                                    A: 65,
                                    B: 66,
                                    C: 67,
                                    D: 68,
                                    E: 69,
                                    F: 70,
                                    G: 71,
                                    H: 72,
                                    I: 73,
                                    J: 74,
                                    K: 75,
                                    L: 76,
                                    M: 77,
                                    N: 78,
                                    O: 79,
                                    P: 80,
                                    Q: 81,
                                    R: 82,
                                    S: 83,
                                    T: 84,
                                    U: 85,
                                    V: 86,
                                    W: 87,
                                    X: 88,
                                    Y: 89,
                                    Z: 90,
                                    BACKSPACE: 8,
                                    ENTER: 13,
                                    ESCAPE: 27,
                                    LEFT: 37,
                                    UP: 38,
                                    RIGHT: 39,
                                    DOWN: 40,
                                    INSERT: 45,
                                    DELETE: 46,
                                    ".": 190
                                };
                            }
                        }
                    ]), r(l, [
                        {
                            key: "parseShortcutName",
                            value: function(c) {
                                c = c.split("+");
                                for(var u = 0; u < c.length; u++){
                                    c[u] = c[u].toUpperCase();
                                    var h = !1;
                                    for(var f in l.supportedCommands)if (l.supportedCommands[f].includes(c[u])) {
                                        h = this.commands[f] = !0;
                                        break;
                                    }
                                    h || (this.keys[c[u]] = !0);
                                }
                                for(var v in l.supportedCommands)this.commands[v] || (this.commands[v] = !1);
                            }
                        },
                        {
                            key: "execute",
                            value: function(c) {
                                var u, h = {
                                    CMD: c.ctrlKey || c.metaKey,
                                    SHIFT: c.shiftKey,
                                    ALT: c.altKey
                                }, f = !0;
                                for(u in this.commands)this.commands[u] !== h[u] && (f = !1);
                                var v, p = !0;
                                for(v in this.keys)p = p && c.keyCode === l.keyCodes[v];
                                f && p && this.callback(c);
                            }
                        },
                        {
                            key: "remove",
                            value: function() {
                                this.element.removeEventListener("keydown", this.executeShortcut);
                            }
                        }
                    ]), l;
                }();
                o.default = a;
            }
        ]).default;
    });
})(Do);
const Po = /* @__PURE__ */ xe(Ae);
class Fo {
    constructor(){
        this.registeredShortcuts = /* @__PURE__ */ new Map();
    }
    /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */ add(e) {
        if (this.findShortcut(e.on, e.name)) throw Error(`Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`);
        const o = new Po({
            name: e.name,
            on: e.on,
            callback: e.handler
        }), i = this.registeredShortcuts.get(e.on) || [];
        this.registeredShortcuts.set(e.on, [
            ...i,
            o
        ]);
    }
    /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */ remove(e, t1) {
        const o = this.findShortcut(e, t1);
        if (!o) return;
        o.remove();
        const i = this.registeredShortcuts.get(e);
        this.registeredShortcuts.set(e, i.filter((n)=>n !== o));
    }
    /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */ findShortcut(e, t1) {
        return (this.registeredShortcuts.get(e) || []).find(({ name: i  })=>i === t1);
    }
}
const re = new Fo();
var Ho = Object.defineProperty, zo = Object.getOwnPropertyDescriptor, gt = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? zo(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && Ho(e, t1, i), i;
}, be = /* @__PURE__ */ ((s1)=>(s1.Opened = "toolbox-opened", s1.Closed = "toolbox-closed", s1.BlockAdded = "toolbox-block-added", s1))(be || {});
const bt = class extends we {
    /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */ constructor({ api: s1 , tools: e , i18nLabels: t1  }){
        super(), this.opened = !1, this.nodes = {
            toolbox: null
        }, this.onPopoverClose = ()=>{
            this.opened = !1, this.emit("toolbox-closed");
        }, this.api = s1, this.tools = e, this.i18nLabels = t1;
    }
    /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */ get isEmpty() {
        return this.toolsToBeDisplayed.length === 0;
    }
    /**
   * CSS styles
   *
   * @returns {Object<string, string>}
   */ static get CSS() {
        return {
            toolbox: "ce-toolbox"
        };
    }
    /**
   * Makes the Toolbox
   */ make() {
        return this.popover = new He({
            scopeElement: this.api.ui.nodes.redactor,
            searchable: !0,
            messages: {
                nothingFound: this.i18nLabels.nothingFound,
                search: this.i18nLabels.filter
            },
            items: this.toolboxItemsToBeDisplayed
        }), this.popover.on(fe.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(bt.CSS.toolbox), this.nodes.toolbox;
    }
    /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */ hasFocus() {
        var s1;
        return (s1 = this.popover) == null ? void 0 : s1.hasFocus();
    }
    /**
   * Destroy Module
   */ destroy() {
        var s1;
        super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (s1 = this.popover) == null || s1.off(fe.Close, this.onPopoverClose);
    }
    /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */ toolButtonActivated(s1, e) {
        this.insertNewBlock(s1, e);
    }
    /**
   * Open Toolbox with Tools
   */ open() {
        var s1;
        this.isEmpty || ((s1 = this.popover) == null || s1.show(), this.opened = !0, this.emit("toolbox-opened"));
    }
    /**
   * Close Toolbox
   */ close() {
        var s1;
        (s1 = this.popover) == null || s1.hide(), this.opened = !1, this.emit("toolbox-closed");
    }
    /**
   * Close Toolbox
   */ toggle() {
        this.opened ? this.close() : this.open();
    }
    get toolsToBeDisplayed() {
        const s1 = [];
        return this.tools.forEach((e)=>{
            e.toolbox && s1.push(e);
        }), s1;
    }
    get toolboxItemsToBeDisplayed() {
        const s1 = (e, t1)=>({
                icon: e.icon,
                title: $.t(X.toolNames, e.title || ke(t1.name)),
                name: t1.name,
                onActivate: ()=>{
                    this.toolButtonActivated(t1.name, e.data);
                },
                secondaryLabel: t1.shortcut ? nt(t1.shortcut) : ""
            });
        return this.toolsToBeDisplayed.reduce((e, t1)=>(Array.isArray(t1.toolbox) ? t1.toolbox.forEach((o)=>{
                e.push(s1(o, t1));
            }) : t1.toolbox !== void 0 && e.push(s1(t1.toolbox, t1)), e), []);
    }
    /**
   * Iterate all tools and enable theirs shortcuts if specified
   */ enableShortcuts() {
        this.toolsToBeDisplayed.forEach((s1)=>{
            const e = s1.shortcut;
            e && this.enableShortcutForTool(s1.name, e);
        });
    }
    /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */ enableShortcutForTool(s1, e) {
        re.add({
            name: e,
            on: this.api.ui.nodes.redactor,
            handler: (t1)=>{
                t1.preventDefault(), this.insertNewBlock(s1);
            }
        });
    }
    /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */ removeAllShortcuts() {
        this.toolsToBeDisplayed.forEach((s1)=>{
            const e = s1.shortcut;
            e && re.remove(this.api.ui.nodes.redactor, e);
        });
    }
    /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */ async insertNewBlock(s1, e) {
        const t1 = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(t1);
        if (!o) return;
        const i = o.isEmpty ? t1 : t1 + 1;
        let n;
        if (e) {
            const a = await this.api.blocks.composeBlockData(s1);
            n = Object.assign(a, e);
        }
        const r = this.api.blocks.insert(s1, n, void 0, i, void 0, o.isEmpty);
        r.call(q.APPEND_CALLBACK), this.api.caret.setToBlock(i), this.emit("toolbox-block-added", {
            block: r
        }), this.api.toolbar.close();
    }
};
let ze = bt;
gt([
    ae
], ze.prototype, "toolsToBeDisplayed", 1);
gt([
    ae
], ze.prototype, "toolboxItemsToBeDisplayed", 1);
const mt = "block hovered";
class jo extends S {
    /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e , eventsDispatcher: t1  }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.tooltip = new Fe();
    }
    /**
   * CSS styles
   *
   * @returns {object}
   */ get CSS() {
        return {
            toolbar: "ce-toolbar",
            content: "ce-toolbar__content",
            actions: "ce-toolbar__actions",
            actionsOpened: "ce-toolbar__actions--opened",
            toolbarOpened: "ce-toolbar--opened",
            openedToolboxHolderModifier: "codex-editor--toolbox-opened",
            plusButton: "ce-toolbar__plus",
            plusButtonShortcut: "ce-toolbar__plus-shortcut",
            settingsToggler: "ce-toolbar__settings-btn",
            settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
        };
    }
    /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */ get opened() {
        return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
    }
    /**
   * Public interface for accessing the Toolbox
   */ get toolbox() {
        return {
            opened: this.toolboxInstance.opened,
            close: ()=>{
                this.toolboxInstance.close();
            },
            open: ()=>{
                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
            },
            toggle: ()=>this.toolboxInstance.toggle(),
            hasFocus: ()=>this.toolboxInstance.hasFocus()
        };
    }
    /**
   * Block actions appearance manipulations
   */ get blockActions() {
        return {
            hide: ()=>{
                this.nodes.actions.classList.remove(this.CSS.actionsOpened);
            },
            show: ()=>{
                this.nodes.actions.classList.add(this.CSS.actionsOpened);
            }
        };
    }
    /**
   * Methods for working with Block Tunes toggler
   */ get blockTunesToggler() {
        return {
            hide: ()=>this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
            show: ()=>this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
        };
    }
    /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */ toggleReadOnly(e) {
        e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
    }
    /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */ moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
        if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e) return;
        this.hoveredBlock = e;
        const t1 = e.holder, { isMobile: o  } = this.Editor.UI, i = e.pluginsContent, n = window.getComputedStyle(i), r = parseInt(n.paddingTop, 10), a = t1.offsetHeight;
        let l;
        o ? l = t1.offsetTop + a : l = t1.offsetTop + r, this.nodes.wrapper.style.top = `${Math.floor(l)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
    }
    /**
   * Close the Toolbar
   */ close() {
        this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.toolboxInstance.close(), this.Editor.BlockSettings.close());
    }
    /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */ open(e = !0) {
        oe(()=>{
            this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
        }, 50)();
    }
    /**
   * Draws Toolbar elements
   */ make() {
        this.nodes.wrapper = d.make("div", this.CSS.toolbar), [
            "content",
            "actions"
        ].forEach((t1)=>{
            this.nodes[t1] = d.make("div", this.CSS[t1]);
        }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
            innerHTML: Mo
        }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", ()=>{
            this.tooltip.hide(!0), this.plusButtonClicked();
        }, !1);
        const e = d.make("div");
        e.appendChild(document.createTextNode($.ui(X.ui.toolbar.toolbox, "Add"))), e.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
            textContent: "⇥ Tab"
        })), this.tooltip.onHover(this.nodes.plusButton, e, {
            hidingDelay: 400
        }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
            innerHTML: Io
        }), d.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(this.nodes.settingsToggler, $.ui(X.ui.blockTunes.toggler, "Click to tune"), {
            hidingDelay: 400
        }), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
    }
    /**
   * Creates the Toolbox instance and return it's rendered element
   */ makeToolbox() {
        return this.toolboxInstance = new ze({
            api: this.Editor.API.methods,
            tools: this.Editor.Tools.blockTools,
            i18nLabels: {
                filter: $.ui(X.ui.popover, "Filter"),
                nothingFound: $.ui(X.ui.popover, "Nothing found")
            }
        }), this.toolboxInstance.on(be.Opened, ()=>{
            this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
        }), this.toolboxInstance.on(be.Closed, ()=>{
            this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
        }), this.toolboxInstance.on(be.BlockAdded, ({ block: e  })=>{
            const { BlockManager: t1 , Caret: o  } = this.Editor, i = t1.getBlockById(e.id);
            i.inputs.length === 0 && (i === t1.lastBlock ? (t1.insertAtEnd(), o.setToBlock(t1.lastBlock)) : o.setToBlock(t1.nextBlock));
        }), this.toolboxInstance.make();
    }
    /**
   * Handler for Plus Button
   */ plusButtonClicked() {
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.toggle();
    }
    /**
   * Enable bindings
   */ enableModuleBindings() {
        this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e)=>{
            e.stopPropagation(), this.settingsTogglerClicked(), this.toolboxInstance.opened && this.toolboxInstance.close(), this.tooltip.hide(!0);
        }, !0), ee() || this.eventsDispatcher.on(mt, (e)=>{
            this.Editor.BlockSettings.opened || this.toolboxInstance.opened || this.moveAndOpen(e.block);
        });
    }
    /**
   * Disable bindings
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Clicks on the Block Settings toggler
   */ settingsTogglerClicked() {
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
    }
    /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */ drawUI() {
        this.Editor.BlockSettings.make(), this.make();
    }
    /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */ destroy() {
        this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
    }
}
var ye = /* @__PURE__ */ ((s1)=>(s1[s1.Block = 0] = "Block", s1[s1.Inline = 1] = "Inline", s1[s1.Tune = 2] = "Tune", s1))(ye || {}), me = /* @__PURE__ */ ((s1)=>(s1.Shortcut = "shortcut", s1.Toolbox = "toolbox", s1.EnabledInlineTools = "inlineToolbar", s1.EnabledBlockTunes = "tunes", s1.Config = "config", s1))(me || {}), kt = /* @__PURE__ */ ((s1)=>(s1.Shortcut = "shortcut", s1.SanitizeConfig = "sanitize", s1))(kt || {}), se = /* @__PURE__ */ ((s1)=>(s1.IsEnabledLineBreaks = "enableLineBreaks", s1.Toolbox = "toolbox", s1.ConversionConfig = "conversionConfig", s1.IsReadOnlySupported = "isReadOnlySupported", s1.PasteConfig = "pasteConfig", s1))(se || {}), je = /* @__PURE__ */ ((s1)=>(s1.IsInline = "isInline", s1.Title = "title", s1))(je || {}), vt = /* @__PURE__ */ ((s1)=>(s1.IsTune = "isTune", s1))(vt || {});
class Ue {
    /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */ constructor({ name: e , constructable: t1 , config: o , api: i , isDefault: n , isInternal: r = !1 , defaultPlaceholder: a  }){
        this.api = i, this.name = e, this.constructable = t1, this.config = o, this.isDefault = n, this.isInternal = r, this.defaultPlaceholder = a;
    }
    /**
   * Returns Tool user configuration
   */ get settings() {
        const e = this.config.config || {};
        return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
    }
    /**
   * Calls Tool's reset method
   */ reset() {
        if (D(this.constructable.reset)) return this.constructable.reset();
    }
    /**
   * Calls Tool's prepare method
   */ prepare() {
        if (D(this.constructable.prepare)) return this.constructable.prepare({
            toolName: this.name,
            config: this.settings
        });
    }
    /**
   * Returns shortcut for Tool (internal or specified by user)
   */ get shortcut() {
        const e = this.constructable.shortcut;
        return this.config.shortcut || e;
    }
    /**
   * Returns Tool's sanitizer configuration
   */ get sanitizeConfig() {
        return this.constructable.sanitize || {};
    }
    /**
   * Returns true if Tools is inline
   */ isInline() {
        return this.type === 1;
    }
    /**
   * Returns true if Tools is block
   */ isBlock() {
        return this.type === 0;
    }
    /**
   * Returns true if Tools is tune
   */ isTune() {
        return this.type === 2;
    }
}
class Uo extends S {
    /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */ constructor({ config: e , eventsDispatcher: t1  }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.CSS = {
            inlineToolbar: "ce-inline-toolbar",
            inlineToolbarShowed: "ce-inline-toolbar--showed",
            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
            buttonsWrapper: "ce-inline-toolbar__buttons",
            actionsWrapper: "ce-inline-toolbar__actions",
            inlineToolButton: "ce-inline-tool",
            inputField: "cdx-input",
            focusedButton: "ce-inline-tool--focused",
            conversionToggler: "ce-inline-toolbar__dropdown",
            conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
            conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
            togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
        }, this.opened = !1, this.toolbarVerticalMargin = ee() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null, this.tooltip = new Fe();
    }
    /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */ toggleReadOnly(e) {
        e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
    }
    /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */ /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */ tryToShow(e = !1, t1 = !0) {
        if (!this.allowedToShow()) {
            e && this.close();
            return;
        }
        this.move(), this.open(t1), this.Editor.Toolbar.close();
    }
    /**
   * Move Toolbar to the selected text
   */ move() {
        const e = m.rect, t1 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = {
            x: e.x - t1.left,
            y: e.y + e.height - // + window.scrollY
            t1.top + this.toolbarVerticalMargin
        };
        e.width && (o.x += Math.floor(e.width / 2));
        const i = o.x - this.width / 2, n = o.x + this.width / 2;
        this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, i < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, n > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px";
    }
    /**
   * Hides Inline Toolbar
   */ close() {
        this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(([e, t1])=>{
            const o = this.getToolShortcut(e);
            o && re.remove(this.Editor.UI.nodes.redactor, o), D(t1.clear) && t1.clear();
        }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
    }
    /**
   * Shows Inline Toolbar
   *
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */ open(e = !0) {
        if (this.opened) return;
        this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`), this.opened = !0, e && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
        let t1 = Array.from(this.buttonsList);
        t1.unshift(this.nodes.conversionToggler), t1 = t1.filter((o)=>!o.hidden), this.flipper.activate(t1);
    }
    /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */ containsNode(e) {
        return this.nodes.wrapper.contains(e);
    }
    /**
   * Removes UI and its components
   */ destroy() {
        this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
    }
    /**
   * Making DOM
   */ make() {
        this.nodes.wrapper = d.make("div", [
            this.CSS.inlineToolbar,
            ...this.isRtl ? [
                this.Editor.UI.CSS.editorRtlFix
            ] : []
        ]), this.nodes.togglerAndButtonsWrapper = d.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = d.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e)=>{
            e.target.closest(`.${this.CSS.actionsWrapper}`) || e.preventDefault();
        }), d.append(this.nodes.wrapper, [
            this.nodes.togglerAndButtonsWrapper,
            this.nodes.actions
        ]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
    }
    /**
   * Need to show Inline Toolbar or not
   */ allowedToShow() {
        const e = [
            "IMG",
            "INPUT"
        ], t1 = m.get(), o = m.text;
        if (!t1 || !t1.anchorNode || t1.isCollapsed || o.length < 1) return !1;
        const i = d.isElement(t1.anchorNode) ? t1.anchorNode : t1.anchorNode.parentElement;
        if (t1 && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null) return !1;
        const r = this.Editor.BlockManager.getBlock(t1.anchorNode);
        return r ? r.tool.inlineTools.size !== 0 : !1;
    }
    /**
   * Recalculate inline toolbar width
   */ recalculateWidth() {
        this.width = this.nodes.wrapper.offsetWidth;
    }
    /**
   * Create a toggler for Conversion Dropdown
   * and prepend it to the buttons list
   */ addConversionToggler() {
        this.nodes.conversionToggler = d.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d.make("div", this.CSS.conversionTogglerContent);
        const e = d.make("div", this.CSS.conversionTogglerArrow, {
            innerHTML: pt
        });
        this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", ()=>{
            this.Editor.ConversionToolbar.toggle((t1)=>{
                !t1 && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
            });
        }), ee() === !1 && this.tooltip.onHover(this.nodes.conversionToggler, $.ui(X.ui.inlineToolbar.converter, "Convert to"), {
            placement: "top",
            hidingDelay: 100
        });
    }
    /**
   * Changes Conversion Dropdown content for current block's Tool
   */ async setConversionTogglerContent() {
        const { BlockManager: e  } = this.Editor, { currentBlock: t1  } = e, o = t1.name, i = t1.tool.conversionConfig, n = i && i.export;
        this.nodes.conversionToggler.hidden = !n, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !n);
        const r = await t1.getActiveToolboxEntry() || {};
        this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || ke(o);
    }
    /**
   * Makes the Conversion Dropdown
   */ prepareConversionToolbar() {
        const e = this.Editor.ConversionToolbar.make();
        d.append(this.nodes.wrapper, e);
    }
    /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */ /**
   * Append only allowed Tools
   */ addToolsFiltered() {
        const e = m.get(), t1 = this.Editor.BlockManager.getBlock(e.anchorNode);
        this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(t1.tool.inlineTools.values()).forEach((o)=>{
            this.addTool(o);
        }), this.recalculateWidth();
    }
    /**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */ addTool(e) {
        const t1 = e.create(), o = t1.render();
        if (!o) {
            T("Render method must return an instance of Node", "warn", e.name);
            return;
        }
        if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t1), D(t1.renderActions)) {
            const a = t1.renderActions();
            this.nodes.actions.appendChild(a);
        }
        this.listeners.on(o, "click", (a)=>{
            this.toolClicked(t1), a.preventDefault();
        });
        const i = this.getToolShortcut(e.name);
        if (i) try {
            this.enableShortcuts(t1, i);
        } catch  {}
        const n = d.make("div"), r = $.t(X.toolNames, e.title || ke(e.name));
        n.appendChild(d.text(r)), i && n.appendChild(d.make("div", this.CSS.inlineToolbarShortcut, {
            textContent: nt(i)
        })), ee() === !1 && this.tooltip.onHover(o, n, {
            placement: "top",
            hidingDelay: 100
        }), t1.checkState(m.get());
    }
    /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */ getToolShortcut(e) {
        const { Tools: t1  } = this.Editor, o = t1.inlineTools.get(e), i = t1.internal.inlineTools;
        return Array.from(i.keys()).includes(e) ? this.inlineTools[e][kt.Shortcut] : o.shortcut;
    }
    /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */ enableShortcuts(e, t1) {
        re.add({
            name: t1,
            handler: (o)=>{
                const { currentBlock: i  } = this.Editor.BlockManager;
                i && i.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
            },
            on: this.Editor.UI.nodes.redactor
        });
    }
    /**
   * Inline Tool button clicks
   *
   * @param {InlineTool} tool - Tool's instance
   */ toolClicked(e) {
        const t1 = m.range;
        e.surround(t1), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
    }
    /**
   * Check Tools` state by selection
   */ checkToolsState() {
        this.toolsInstances.forEach((e)=>{
            e.checkState(m.get());
        });
    }
    /**
   * Get inline tools tools
   * Tools that has isInline is true
   */ get inlineTools() {
        const e = {};
        return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t1, o])=>{
            e[t1] = o.create();
        }), e;
    }
    /**
   * Allow to leaf buttons by arrows / tab
   * Buttons will be filled on opening
   */ enableFlipper() {
        this.flipper = new G({
            focusedItemClass: this.CSS.focusedButton,
            allowedKeys: [
                B.ENTER,
                B.TAB
            ]
        });
    }
}
class $o extends S {
    /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */ keydown(e) {
        switch(this.beforeKeydownProcessing(e), e.keyCode){
            case B.BACKSPACE:
                this.backspace(e);
                break;
            case B.ENTER:
                this.enter(e);
                break;
            case B.DOWN:
            case B.RIGHT:
                this.arrowRightAndDown(e);
                break;
            case B.UP:
            case B.LEFT:
                this.arrowLeftAndUp(e);
                break;
            case B.TAB:
                this.tabPressed(e);
                break;
        }
    }
    /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */ beforeKeydownProcessing(e) {
        this.needToolbarClosing(e) && tt(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(e)));
    }
    /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */ keyup(e) {
        e.shiftKey || this.Editor.UI.checkEmptiness();
    }
    /**
   * Open Toolbox to leaf Tools
   *
   * @param {KeyboardEvent} event - tab keydown event
   */ tabPressed(e) {
        this.Editor.BlockSelection.clearSelection(e);
        const { BlockManager: t1 , InlineToolbar: o , ConversionToolbar: i  } = this.Editor, n = t1.currentBlock;
        if (!n) return;
        const r = n.isEmpty, a = n.tool.isDefault && r, l = !r && i.opened, c = !r && !m.isCollapsed && o.opened;
        a ? this.activateToolbox() : !l && !c && this.activateBlockSettings();
    }
    /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */ dragOver(e) {
        const t1 = this.Editor.BlockManager.getBlockByChildNode(e.target);
        t1.dropTarget = !0;
    }
    /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */ dragLeave(e) {
        const t1 = this.Editor.BlockManager.getBlockByChildNode(e.target);
        t1.dropTarget = !1;
    }
    /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */ handleCommandC(e) {
        const { BlockSelection: t1  } = this.Editor;
        t1.anyBlockSelected && t1.copySelectedBlocks(e);
    }
    /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */ handleCommandX(e) {
        const { BlockSelection: t1 , BlockManager: o , Caret: i  } = this.Editor;
        t1.anyBlockSelected && t1.copySelectedBlocks(e).then(()=>{
            const n = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(n, !0);
            i.setToBlock(r, i.positions.START), t1.clearSelection(e);
        });
    }
    /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */ enter(e) {
        const { BlockManager: t1 , UI: o  } = this.Editor;
        if (t1.currentBlock.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey) return;
        let n = this.Editor.BlockManager.currentBlock;
        this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : this.Editor.Caret.isAtEnd ? n = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : n = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n), e.preventDefault();
    }
    /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */ backspace(e) {
        const { BlockManager: t1 , BlockSelection: o , Caret: i  } = this.Editor, n = t1.currentBlock, r = n.tool;
        if (n.selected || n.isEmpty && n.currentInput === n.firstInput) {
            e.preventDefault();
            const c = t1.currentBlockIndex;
            t1.previousBlock && t1.previousBlock.inputs.length === 0 ? t1.removeBlock(c - 1) : t1.removeBlock(), i.setToBlock(t1.currentBlock, c ? i.positions.END : i.positions.START), this.Editor.Toolbar.close(), o.clearSelection(e);
            return;
        }
        if (r.isLineBreaksEnabled && !i.isAtStart) return;
        const a = t1.currentBlockIndex === 0;
        i.isAtStart && m.isCollapsed && n.currentInput === n.firstInput && !a && (e.preventDefault(), this.mergeBlocks());
    }
    /**
   * Merge current and previous Blocks if they have the same type
   */ mergeBlocks() {
        const { BlockManager: e , Caret: t1 , Toolbar: o  } = this.Editor, i = e.previousBlock, n = e.currentBlock;
        if (n.name !== i.name || !i.mergeable) {
            if (i.inputs.length === 0 || i.isEmpty) {
                e.removeBlock(e.currentBlockIndex - 1), t1.setToBlock(e.currentBlock), o.close();
                return;
            }
            t1.navigatePrevious() && o.close();
            return;
        }
        t1.createShadow(i.pluginsContent), e.mergeBlocks(i, n).then(()=>{
            t1.restoreCaret(i.pluginsContent), i.pluginsContent.normalize(), o.close();
        });
    }
    /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */ arrowRightAndDown(e) {
        const t1 = G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB);
        if (this.Editor.UI.someToolbarOpened && t1) return;
        this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
        const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
        if (e.shiftKey && e.keyCode === B.DOWN && o) {
            this.Editor.CrossBlockSelection.toggleBlockSelectedState();
            return;
        }
        (e.keyCode === B.DOWN || e.keyCode === B.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? e.preventDefault() : oe(()=>{
            this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
        }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */ arrowLeftAndUp(e) {
        if (this.Editor.UI.someToolbarOpened) {
            if (G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B.TAB)) return;
            this.Editor.UI.closeAllToolbars();
        }
        this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
        const t1 = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
        if (e.shiftKey && e.keyCode === B.UP && t1) {
            this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
            return;
        }
        (e.keyCode === B.UP || e.keyCode === B.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? e.preventDefault() : oe(()=>{
            this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
        }, 20)(), this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */ needToolbarClosing(e) {
        const t1 = e.keyCode === B.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === B.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === B.ENTER && this.Editor.InlineToolbar.opened, n = e.keyCode === B.ENTER && this.Editor.ConversionToolbar.opened, r = e.keyCode === B.TAB;
        return !(e.shiftKey || r || t1 || o || i || n);
    }
    /**
   * If Toolbox is not open, then just open it and show plus button
   */ activateToolbox() {
        this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
    }
    /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */ activateBlockSettings() {
        this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
    }
}
class Ce {
    /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */ constructor(e){
        this.blocks = [], this.workingArea = e;
    }
    /**
   * Get length of Block instances array
   *
   * @returns {number}
   */ get length() {
        return this.blocks.length;
    }
    /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */ get array() {
        return this.blocks;
    }
    /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */ get nodes() {
        return it(this.workingArea.children);
    }
    /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */ static set(e, t1, o) {
        return isNaN(Number(t1)) ? (Reflect.set(e, t1, o), !0) : (e.insert(+t1, o), !0);
    }
    /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */ static get(e, t1) {
        return isNaN(Number(t1)) ? Reflect.get(e, t1) : e.get(+t1);
    }
    /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */ push(e) {
        this.blocks.push(e), this.insertToDOM(e);
    }
    /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */ swap(e, t1) {
        const o = this.blocks[t1];
        d.swap(this.blocks[e].holder, o.holder), this.blocks[t1] = this.blocks[e], this.blocks[e] = o;
    }
    /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */ move(e, t1) {
        const o = this.blocks.splice(t1, 1)[0], i = e - 1, n = Math.max(0, i), r = this.blocks[n];
        e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
        const a = this.composeBlockEvent("move", {
            fromIndex: t1,
            toIndex: e
        });
        o.call(q.MOVED, a);
    }
    /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */ insert(e, t1, o = !1) {
        if (!this.length) {
            this.push(t1);
            return;
        }
        e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(q.REMOVED));
        const i = o ? 1 : 0;
        if (this.blocks.splice(e, i, t1), e > 0) {
            const n = this.blocks[e - 1];
            this.insertToDOM(t1, "afterend", n);
        } else {
            const n = this.blocks[e + 1];
            n ? this.insertToDOM(t1, "beforebegin", n) : this.insertToDOM(t1);
        }
    }
    /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */ remove(e) {
        isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(q.REMOVED), this.blocks.splice(e, 1);
    }
    /**
   * Remove all blocks
   */ removeAll() {
        this.workingArea.innerHTML = "", this.blocks.forEach((e)=>e.call(q.REMOVED)), this.blocks.length = 0;
    }
    /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */ insertAfter(e, t1) {
        const o = this.blocks.indexOf(e);
        this.insert(o + 1, t1);
    }
    /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */ get(e) {
        return this.blocks[e];
    }
    /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */ indexOf(e) {
        return this.blocks.indexOf(e);
    }
    /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */ insertToDOM(e, t1, o) {
        t1 ? o.holder.insertAdjacentElement(t1, e.holder) : this.workingArea.appendChild(e.holder), e.call(q.RENDERED);
    }
    /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */ composeBlockEvent(e, t1) {
        return new CustomEvent(e, {
            detail: t1
        });
    }
}
const Je = "block-removed", Qe = "block-added", Wo = "block-moved", Yo = "block-changed";
class Ko extends S {
    constructor(){
        super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
    }
    /**
   * Returns current Block index
   *
   * @returns {number}
   */ get currentBlockIndex() {
        return this._currentBlockIndex;
    }
    /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */ set currentBlockIndex(e) {
        this._currentBlockIndex = e;
    }
    /**
   * returns first Block
   *
   * @returns {Block}
   */ get firstBlock() {
        return this._blocks[0];
    }
    /**
   * returns last Block
   *
   * @returns {Block}
   */ get lastBlock() {
        return this._blocks[this._blocks.length - 1];
    }
    /**
   * Get current Block instance
   *
   * @returns {Block}
   */ get currentBlock() {
        return this._blocks[this.currentBlockIndex];
    }
    /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */ set currentBlock(e) {
        this.currentBlockIndex = this.getBlockIndex(e);
    }
    /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */ get nextBlock() {
        return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
    }
    /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */ get nextContentfulBlock() {
        return this.blocks.slice(this.currentBlockIndex + 1).find((t1)=>!!t1.inputs.length);
    }
    /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */ get previousContentfulBlock() {
        return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t1)=>!!t1.inputs.length);
    }
    /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */ get previousBlock() {
        return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
    }
    /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */ get blocks() {
        return this._blocks.array;
    }
    /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */ get isEditorEmpty() {
        return this.blocks.every((e)=>e.isEmpty);
    }
    /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */ prepare() {
        const e = new Ce(this.Editor.UI.nodes.redactor);
        this._blocks = new Proxy(e, {
            set: Ce.set,
            get: Ce.get
        }), this.listeners.on(document, "copy", (t1)=>this.Editor.BlockEvents.handleCommandC(t1));
    }
    /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */ toggleReadOnly(e) {
        e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */ composeBlock({ tool: e , data: t1 = {} , id: o , tunes: i = {}  }) {
        const n = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new F({
            id: o,
            data: t1,
            tool: r,
            api: this.Editor.API,
            readOnly: n,
            tunesData: i
        }, this.eventsDispatcher);
        return n || this.bindBlockEvents(a), a;
    }
    /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */ insert({ id: e , tool: t1 = this.config.defaultBlock , data: o = {} , index: i , needToFocus: n = !0 , replace: r = !1 , tunes: a = {}  } = {}) {
        let l = i;
        l === void 0 && (l = this.currentBlockIndex + (r ? 0 : 1));
        const c = this.composeBlock({
            id: e,
            tool: t1,
            data: o,
            tunes: a
        });
        return r && this.blockDidMutated(Je, this.getBlockByIndex(l), {
            index: l
        }), this._blocks.insert(l, c, r), this.blockDidMutated(Qe, c, {
            index: l
        }), n ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, c;
    }
    /**
   * Replace current working block
   *
   * @param {object} options - replace options
   * @param {string} options.tool — plugin name
   * @param {BlockToolData} options.data — plugin data
   * @returns {Block}
   */ replace({ tool: e = this.config.defaultBlock , data: t1 = {}  }) {
        return this.insert({
            tool: e,
            data: t1,
            index: this.currentBlockIndex,
            replace: !0
        });
    }
    /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */ paste(e, t1, o = !1) {
        const i = this.insert({
            tool: e,
            replace: o
        });
        try {
            i.call(q.ON_PASTE, t1);
        } catch (n) {
            T(`${e}: onPaste callback call is failed`, "error", n);
        }
        return i;
    }
    /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */ insertDefaultBlockAtIndex(e, t1 = !1) {
        const o = this.composeBlock({
            tool: this.config.defaultBlock
        });
        return this._blocks[e] = o, this.blockDidMutated(Qe, o, {
            index: e
        }), t1 ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
    }
    /**
   * Always inserts at the end
   *
   * @returns {Block}
   */ insertAtEnd() {
        return this.currentBlockIndex = this.blocks.length - 1, this.insert();
    }
    /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */ async mergeBlocks(e, t1) {
        const o = this._blocks.indexOf(t1);
        if (t1.isEmpty) return;
        const i = await t1.data;
        V(i) || await e.mergeWith(i), this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);
    }
    /**
   * Remove block with passed index or remove last
   *
   * @param {number|null} index - index of Block to remove
   * @throws {Error} if Block to remove is not found
   */ removeBlock(e = this.currentBlockIndex) {
        if (!this.validateIndex(e)) throw new Error("Can't find a Block to remove");
        const t1 = this._blocks[e];
        t1.destroy(), this._blocks.remove(e), this.blockDidMutated(Je, t1, {
            index: e
        }), this.currentBlockIndex >= e && this.currentBlockIndex--, this.blocks.length ? e === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
    }
    /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */ removeSelectedBlocks() {
        let e;
        for(let t1 = this.blocks.length - 1; t1 >= 0; t1--)this.blocks[t1].selected && (this.removeBlock(t1), e = t1);
        return e;
    }
    /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */ removeAllBlocks() {
        for(let e = this.blocks.length - 1; e >= 0; e--)this._blocks.remove(e);
        this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
    }
    /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */ split() {
        const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t1 = d.make("div");
        t1.appendChild(e);
        const o = {
            text: d.isEmpty(t1) ? "" : t1.innerHTML
        };
        return this.insert({
            data: o
        });
    }
    /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */ getBlockByIndex(e) {
        return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
    }
    /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */ getBlockIndex(e) {
        return this._blocks.indexOf(e);
    }
    /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */ getBlockById(e) {
        return this._blocks.array.find((t1)=>t1.id === e);
    }
    /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */ getBlock(e) {
        d.isElement(e) || (e = e.parentNode);
        const t1 = this._blocks.nodes, o = e.closest(`.${F.CSS.wrapper}`), i = t1.indexOf(o);
        if (i >= 0) return this._blocks[i];
    }
    /**
   * Remove selection from all Blocks then highlight only Current Block
   */ highlightCurrentNode() {
        this.clearFocused(), this.currentBlock.focused = !0;
    }
    /**
   * Remove selection from all Blocks
   */ clearFocused() {
        this.blocks.forEach((e)=>{
            e.focused = !1;
        });
    }
    /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */ setCurrentBlockByChildNode(e) {
        d.isElement(e) || (e = e.parentNode);
        const t1 = e.closest(`.${F.CSS.wrapper}`);
        if (!t1) return;
        const o = t1.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
        if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(t1), this.currentBlock.updateCurrentInput(), this.currentBlock;
    }
    /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */ getBlockByChildNode(e) {
        d.isElement(e) || (e = e.parentNode);
        const t1 = e.closest(`.${F.CSS.wrapper}`);
        return this.blocks.find((o)=>o.holder === t1);
    }
    /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */ swap(e, t1) {
        this._blocks.swap(e, t1), this.currentBlockIndex = t1;
    }
    /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */ move(e, t1 = this.currentBlockIndex) {
        if (isNaN(e) || isNaN(t1)) {
            T("Warning during 'move' call: incorrect indices provided.", "warn");
            return;
        }
        if (!this.validateIndex(e) || !this.validateIndex(t1)) {
            T("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
            return;
        }
        this._blocks.move(e, t1), this.currentBlockIndex = e, this.blockDidMutated(Wo, this.currentBlock, {
            fromIndex: t1,
            toIndex: e
        });
    }
    /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */ dropPointer() {
        this.currentBlockIndex = -1, this.clearFocused();
    }
    /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */ clear(e = !1) {
        this._blocks.removeAll(), this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
    }
    /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */ async destroy() {
        await Promise.all(this.blocks.map((e)=>e.destroy()));
    }
    /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */ bindBlockEvents(e) {
        const { BlockEvents: t1  } = this.Editor;
        this.readOnlyMutableListeners.on(e.holder, "keydown", (o)=>{
            t1.keydown(o);
        }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o)=>{
            t1.keyup(o);
        }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o)=>{
            t1.dragOver(o);
        }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o)=>{
            t1.dragLeave(o);
        }), e.on("didMutated", (o)=>this.blockDidMutated(Yo, o, {
                index: this.getBlockIndex(o)
            }));
    }
    /**
   * Disable mutable handlers and bindings
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Enables all module handlers and bindings for all Blocks
   */ enableModuleBindings() {
        this.readOnlyMutableListeners.on(document, "cut", (e)=>this.Editor.BlockEvents.handleCommandX(e)), this.blocks.forEach((e)=>{
            this.bindBlockEvents(e);
        });
    }
    /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */ validateIndex(e) {
        return !(e < 0 || e >= this._blocks.length);
    }
    /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */ blockDidMutated(e, t1, o) {
        const i = new CustomEvent(e, {
            detail: {
                target: new he(t1),
                ...o
            }
        });
        return this.eventsDispatcher.emit(lt, {
            event: i
        }), t1;
    }
}
class Xo extends S {
    constructor(){
        super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    }
    /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */ get sanitizerConfig() {
        return {
            p: {},
            h1: {},
            h2: {},
            h3: {},
            h4: {},
            h5: {},
            h6: {},
            ol: {},
            ul: {},
            li: {},
            br: !0,
            img: {
                src: !0,
                width: !0,
                height: !0
            },
            a: {
                href: !0
            },
            b: {},
            i: {},
            u: {}
        };
    }
    /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */ get allBlocksSelected() {
        const { BlockManager: e  } = this.Editor;
        return e.blocks.every((t1)=>t1.selected === !0);
    }
    /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */ set allBlocksSelected(e) {
        const { BlockManager: t1  } = this.Editor;
        t1.blocks.forEach((o)=>{
            o.selected = e;
        }), this.clearCache();
    }
    /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */ get anyBlockSelected() {
        const { BlockManager: e  } = this.Editor;
        return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t1)=>t1.selected === !0)), this.anyBlockSelectedCache;
    }
    /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */ get selectedBlocks() {
        return this.Editor.BlockManager.blocks.filter((e)=>e.selected);
    }
    /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */ prepare() {
        this.selection = new m(), re.add({
            name: "CMD+A",
            handler: (e)=>{
                const { BlockManager: t1 , ReadOnly: o  } = this.Editor;
                if (o.isEnabled) {
                    e.preventDefault(), this.selectAllBlocks();
                    return;
                }
                t1.currentBlock && this.handleCommandA(e);
            },
            on: this.Editor.UI.nodes.redactor
        });
    }
    /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */ toggleReadOnly() {
        m.get().removeAllRanges(), this.allBlocksSelected = !1;
    }
    /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */ unSelectBlockByIndex(e) {
        const { BlockManager: t1  } = this.Editor;
        let o;
        isNaN(e) ? o = t1.currentBlock : o = t1.getBlockByIndex(e), o.selected = !1, this.clearCache();
    }
    /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */ clearSelection(e, t1 = !1) {
        const { BlockManager: o , Caret: i , RectangleSelection: n  } = this.Editor;
        this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
        const r = e && e instanceof KeyboardEvent, a = r && tt(e.keyCode);
        if (this.anyBlockSelected && r && a && !m.isSelectionExists) {
            const l = o.removeSelectedBlocks();
            o.insertDefaultBlockAtIndex(l, !0), i.setToBlock(o.currentBlock), oe(()=>{
                const c = e.key;
                i.insertContentAtCaretPosition(c.length > 1 ? "" : c);
            }, 20)();
        }
        if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || n.isRectActivated()) {
            this.Editor.RectangleSelection.clearSelection();
            return;
        }
        t1 && this.selection.restore(), this.allBlocksSelected = !1;
    }
    /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */ copySelectedBlocks(e) {
        e.preventDefault();
        const t1 = d.make("div");
        this.selectedBlocks.forEach((n)=>{
            const r = Z(n.holder.innerHTML, this.sanitizerConfig), a = d.make("p");
            a.innerHTML = r, t1.appendChild(a);
        });
        const o = Array.from(t1.childNodes).map((n)=>n.textContent).join(`

`), i = t1.innerHTML;
        return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((n)=>n.save())).then((n)=>{
            try {
                e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(n));
            } catch  {}
        });
    }
    /**
   * select Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */ selectBlockByIndex(e) {
        const { BlockManager: t1  } = this.Editor;
        t1.clearFocused();
        let o;
        isNaN(e) ? o = t1.currentBlock : o = t1.getBlockByIndex(e), this.selection.save(), m.get().removeAllRanges(), o.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
    }
    /**
   * Clear anyBlockSelected cache
   */ clearCache() {
        this.anyBlockSelectedCache = null;
    }
    /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */ destroy() {
        re.remove(this.Editor.UI.nodes.redactor, "CMD+A");
    }
    /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */ handleCommandA(e) {
        if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
            this.readyToBlockSelection = !0;
            return;
        }
        const o = this.Editor.BlockManager.getBlock(e.target).inputs;
        if (o.length > 1 && !this.readyToBlockSelection) {
            this.readyToBlockSelection = !0;
            return;
        }
        if (o.length === 1 && !this.needToSelectAll) {
            this.needToSelectAll = !0;
            return;
        }
        this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0);
    }
    /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */ selectAllBlocks() {
        this.selection.save(), m.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
    }
}
class ve extends S {
    /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */ get positions() {
        return {
            START: "start",
            END: "end",
            DEFAULT: "default"
        };
    }
    /**
   * Elements styles that can be useful for Caret Module
   */ static get CSS() {
        return {
            shadowCaret: "cdx-shadow-caret"
        };
    }
    /**
   * Get's deepest first node and checks if offset is zero
   *
   * @returns {boolean}
   */ get isAtStart() {
        const e = m.get(), t1 = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);
        let o = e.focusNode;
        if (d.isNativeInput(t1)) return t1.selectionEnd === 0;
        if (!e.anchorNode) return !1;
        let i = o.textContent.search(/\S/);
        i === -1 && (i = 0);
        let n = e.focusOffset;
        return o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[n] ? (o = o.childNodes[n], n = 0) : (o = o.childNodes[n - 1], n = o.textContent.length)), (d.isLineBreakTag(t1) || d.isEmpty(t1)) && this.getHigherLevelSiblings(o, "left").every((l)=>{
            const c = d.isLineBreakTag(l), u = l.children.length === 1 && d.isLineBreakTag(l.children[0]), h = c || u;
            return d.isEmpty(l) && !h;
        }) && n === i ? !0 : t1 === null || o === t1 && n <= i;
    }
    /**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */ get isAtEnd() {
        const e = m.get();
        let t1 = e.focusNode;
        const o = d.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
        if (d.isNativeInput(o)) return o.selectionEnd === o.value.length;
        if (!e.focusNode) return !1;
        let i = e.focusOffset;
        if (t1.nodeType !== Node.TEXT_NODE && t1.childNodes.length && (t1.childNodes[i - 1] ? (t1 = t1.childNodes[i - 1], i = t1.textContent.length) : (t1 = t1.childNodes[0], i = 0)), d.isLineBreakTag(o) || d.isEmpty(o)) {
            const r = this.getHigherLevelSiblings(t1, "right");
            if (r.every((l, c)=>c === r.length - 1 && d.isLineBreakTag(l) || d.isEmpty(l) && !d.isLineBreakTag(l)) && i === t1.textContent.length) return !0;
        }
        const n = o.textContent.replace(/\s+$/, "");
        return t1 === o && i >= n.length;
    }
    /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */ setToBlock(e, t1 = this.positions.DEFAULT, o = 0) {
        const { BlockManager: i  } = this.Editor;
        let n;
        switch(t1){
            case this.positions.START:
                n = e.firstInput;
                break;
            case this.positions.END:
                n = e.lastInput;
                break;
            default:
                n = e.currentInput;
        }
        if (!n) return;
        const r = d.getDeepestNode(n, t1 === this.positions.END), a = d.getContentLength(r);
        switch(!0){
            case t1 === this.positions.START:
                o = 0;
                break;
            case t1 === this.positions.END:
            case o > a:
                o = a;
                break;
        }
        oe(()=>{
            this.set(r, o);
        }, 20)(), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = n;
    }
    /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */ setToInput(e, t1 = this.positions.DEFAULT, o = 0) {
        const { currentBlock: i  } = this.Editor.BlockManager, n = d.getDeepestNode(e);
        switch(t1){
            case this.positions.START:
                this.set(n, 0);
                break;
            case this.positions.END:
                this.set(n, d.getContentLength(n));
                break;
            default:
                o && this.set(n, o);
        }
        i.currentInput = e;
    }
    /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */ set(e, t1 = 0) {
        const { top: o , bottom: i  } = m.setCursor(e, t1), { innerHeight: n  } = window;
        o < 0 && window.scrollBy(0, o), i > n && window.scrollBy(0, i - n);
    }
    /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */ setToTheLastBlock() {
        const e = this.Editor.BlockManager.lastBlock;
        if (e) {
            if (e.tool.isDefault && e.isEmpty) this.setToBlock(e);
            else {
                const t1 = this.Editor.BlockManager.insertAtEnd();
                this.setToBlock(t1);
            }
        }
    }
    /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */ extractFragmentFromCaretPosition() {
        const e = m.get();
        if (e.rangeCount) {
            const t1 = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
            if (t1.deleteContents(), o) {
                if (d.isNativeInput(o)) {
                    const i = o, n = document.createDocumentFragment(), r = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
                    return n.textContent = a, i.value = r, n;
                } else {
                    const i = t1.cloneRange();
                    return i.selectNodeContents(o), i.setStart(t1.endContainer, t1.endOffset), i.extractContents();
                }
            }
        }
    }
    /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */ navigateNext() {
        const { BlockManager: e  } = this.Editor, { currentBlock: t1 , nextContentfulBlock: o  } = e, { nextInput: i  } = t1, n = this.isAtEnd;
        let r = o;
        if (!r && !i) {
            if (t1.tool.isDefault || !n) return !1;
            r = e.insertAtEnd();
        }
        return n ? (i ? this.setToInput(i, this.positions.START) : this.setToBlock(r, this.positions.START), !0) : !1;
    }
    /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */ navigatePrevious() {
        const { currentBlock: e , previousContentfulBlock: t1  } = this.Editor.BlockManager;
        if (!e) return !1;
        const { previousInput: o  } = e;
        return !t1 && !o ? !1 : this.isAtStart ? (o ? this.setToInput(o, this.positions.END) : this.setToBlock(t1, this.positions.END), !0) : !1;
    }
    /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */ createShadow(e) {
        const t1 = document.createElement("span");
        t1.classList.add(ve.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t1);
    }
    /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */ restoreCaret(e) {
        const t1 = e.querySelector(`.${ve.CSS.shadowCaret}`);
        if (!t1) return;
        new m().expandToTag(t1), setTimeout(()=>{
            const i = document.createRange();
            i.selectNode(t1), i.extractContents();
        }, 50);
    }
    /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */ insertContentAtCaretPosition(e) {
        const t1 = document.createDocumentFragment(), o = document.createElement("div"), i = m.get(), n = m.range;
        o.innerHTML = e, Array.from(o.childNodes).forEach((l)=>t1.appendChild(l)), t1.childNodes.length === 0 && t1.appendChild(new Text());
        const r = t1.lastChild;
        n.deleteContents(), n.insertNode(t1);
        const a = document.createRange();
        a.setStart(r, r.textContent.length), i.removeAllRanges(), i.addRange(a);
    }
    /**
   * Get all first-level (first child of [contenteditable]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */ getHigherLevelSiblings(e, t1) {
        let o = e;
        const i = [];
        for(; o.parentNode && o.parentNode.contentEditable !== "true";)o = o.parentNode;
        const n = t1 === "left" ? "previousSibling" : "nextSibling";
        for(; o[n];)o = o[n], i.push(o);
        return i;
    }
}
class Vo extends S {
    constructor(){
        super(...arguments), this.onMouseUp = ()=>{
            this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
        }, this.onMouseOver = (e)=>{
            const { BlockManager: t1 , BlockSelection: o  } = this.Editor, i = t1.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, n = t1.getBlockByChildNode(e.target);
            if (!(!i || !n) && n !== i) {
                if (i === this.firstSelectedBlock) {
                    m.get().removeAllRanges(), i.selected = !0, n.selected = !0, o.clearCache();
                    return;
                }
                if (n === this.firstSelectedBlock) {
                    i.selected = !1, n.selected = !1, o.clearCache();
                    return;
                }
                this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, n), this.lastSelectedBlock = n;
            }
        };
    }
    /**
   * Module preparation
   *
   * @returns {Promise}
   */ async prepare() {
        this.listeners.on(document, "mousedown", (e)=>{
            this.enableCrossBlockSelection(e);
        });
    }
    /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */ watchSelection(e) {
        if (e.button !== _t.LEFT) return;
        const { BlockManager: t1  } = this.Editor;
        this.firstSelectedBlock = t1.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
    }
    /**
   * return boolean is cross block selection started
   */ get isCrossBlockSelectionStarted() {
        return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
    }
    /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */ toggleBlockSelectedState(e = !0) {
        const { BlockManager: t1 , BlockSelection: o  } = this.Editor;
        this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t1.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), m.get().removeAllRanges());
        const i = t1.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), n = t1.blocks[i];
        n && (this.lastSelectedBlock.selected !== n.selected ? (n.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = n, this.Editor.InlineToolbar.close(), n.holder.scrollIntoView({
            block: "nearest"
        }));
    }
    /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */ clear(e) {
        const { BlockManager: t1 , BlockSelection: o , Caret: i  } = this.Editor, n = t1.blocks.indexOf(this.firstSelectedBlock), r = t1.blocks.indexOf(this.lastSelectedBlock);
        if (o.anyBlockSelected && n > -1 && r > -1) {
            if (e && e instanceof KeyboardEvent) switch(e.keyCode){
                case B.DOWN:
                case B.RIGHT:
                    i.setToBlock(t1.blocks[Math.max(n, r)], i.positions.END);
                    break;
                case B.UP:
                case B.LEFT:
                    i.setToBlock(t1.blocks[Math.min(n, r)], i.positions.START);
                    break;
                default:
                    i.setToBlock(t1.blocks[Math.max(n, r)], i.positions.END);
            }
            else i.setToBlock(t1.blocks[Math.max(n, r)], i.positions.END);
        }
        this.firstSelectedBlock = this.lastSelectedBlock = null;
    }
    /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */ enableCrossBlockSelection(e) {
        const { UI: t1  } = this.Editor;
        m.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t1.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */ toggleBlocksSelectedState(e, t1) {
        const { BlockManager: o , BlockSelection: i  } = this.Editor, n = o.blocks.indexOf(e), r = o.blocks.indexOf(t1), a = e.selected !== t1.selected;
        for(let l = Math.min(n, r); l <= Math.max(n, r); l++){
            const c = o.blocks[l];
            c !== this.firstSelectedBlock && c !== (a ? e : t1) && (o.blocks[l].selected = !o.blocks[l].selected, i.clearCache());
        }
    }
}
class Zo extends S {
    constructor(){
        super(...arguments), this.isStartedAtEditor = !1;
    }
    /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */ toggleReadOnly(e) {
        e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
   * Add drag events listeners to editor zone
   */ enableModuleBindings() {
        const { UI: e  } = this.Editor;
        this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t1)=>{
            await this.processDrop(t1);
        }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", ()=>{
            this.processDragStart();
        }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t1)=>{
            this.processDragOver(t1);
        }, !0);
    }
    /**
   * Unbind drag-n-drop event handlers
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */ async processDrop(e) {
        const { BlockManager: t1 , Caret: o , Paste: i  } = this.Editor;
        e.preventDefault(), t1.blocks.forEach((r)=>{
            r.dropTarget = !1;
        }), m.isAtEditor && !m.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
        const n = t1.setCurrentBlockByChildNode(e.target);
        if (n) this.Editor.Caret.setToBlock(n, o.positions.END);
        else {
            const r = t1.setCurrentBlockByChildNode(t1.lastBlock.holder);
            this.Editor.Caret.setToBlock(r, o.positions.END);
        }
        await i.processDataTransfer(e.dataTransfer, !0);
    }
    /**
   * Handle drag start event
   */ processDragStart() {
        m.isAtEditor && !m.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
    }
    /**
   * @param {DragEvent} dragEvent - drag event
   */ processDragOver(e) {
        e.preventDefault();
    }
}
class Go extends S {
    /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */ constructor({ config: e , eventsDispatcher: t1  }){
        super({
            config: e,
            eventsDispatcher: t1
        }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = 400, this.mutationObserver = new MutationObserver((o)=>{
            this.redactorChanged(o);
        }), this.eventsDispatcher.on(lt, (o)=>{
            this.particularBlockChanged(o.event);
        }), this.eventsDispatcher.on(ct, ()=>{
            this.disable();
        }), this.eventsDispatcher.on(dt, ()=>{
            this.enable();
        });
    }
    /**
   * Enables onChange event
   */ enable() {
        this.mutationObserver.observe(this.Editor.UI.nodes.redactor, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributes: !0
        }), this.disabled = !1;
    }
    /**
   * Disables onChange event
   */ disable() {
        this.mutationObserver.disconnect(), this.disabled = !0;
    }
    /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */ particularBlockChanged(e) {
        this.disabled || !D(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(()=>{
            let t1;
            this.batchingOnChangeQueue.size === 1 ? t1 = this.batchingOnChangeQueue.values().next().value : t1 = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t1), this.batchingOnChangeQueue.clear();
        }, this.batchTime));
    }
    /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */ redactorChanged(e) {
        this.eventsDispatcher.emit(Me, {
            mutations: e
        });
    }
}
const xt = class extends S {
    constructor(){
        super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (s1)=>{
            try {
                const e = s1.create({}, {}, !1);
                if (s1.pasteConfig === !1) {
                    this.exceptionList.push(s1.name);
                    return;
                }
                if (!D(e.onPaste)) return;
                this.getTagsConfig(s1), this.getFilesConfig(s1), this.getPatternsConfig(s1);
            } catch (e) {
                T(`Paste handling for «${s1.name}» Tool hasn't been set up because of the error`, "warn", e);
            }
        }, this.handlePasteEvent = async (s1)=>{
            const { BlockManager: e , Toolbar: t1  } = this.Editor;
            !e.currentBlock || this.isNativeBehaviour(s1.target) && !s1.clipboardData.types.includes("Files") || e.currentBlock && this.exceptionList.includes(e.currentBlock.name) || (s1.preventDefault(), this.processDataTransfer(s1.clipboardData), e.clearFocused(), t1.close());
        };
    }
    /**
   * Set onPaste callback and collect tools` paste configurations
   */ async prepare() {
        this.processTools();
    }
    /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */ toggleReadOnly(s1) {
        s1 ? this.unsetCallback() : this.setCallback();
    }
    /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */ async processDataTransfer(s1, e = !1) {
        const { Tools: t1  } = this.Editor, o = s1.types;
        if ((o.includes ? o.includes("Files") : o.contains("Files")) && !V(this.toolsFiles)) {
            await this.processFiles(s1.files);
            return;
        }
        const n = s1.getData(this.MIME_TYPE), r = s1.getData("text/plain");
        let a = s1.getData("text/html");
        if (n) try {
            this.insertEditorJSData(JSON.parse(n));
            return;
        } catch  {}
        e && r.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : r) + "</p>");
        const l = Object.keys(this.toolsTags).reduce((h, f)=>(h[f.toLowerCase()] = this.toolsTags[f].sanitizationConfig ?? {}, h), {}), c = Object.assign({}, l, t1.getAllInlineToolsSanitizeConfig(), {
            br: {}
        }), u = Z(a, c);
        !u.trim() || u.trim() === r || !d.isHTMLString(u) ? await this.processText(r) : await this.processText(u, !0);
    }
    /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */ async processText(s1, e = !1) {
        const { Caret: t1 , BlockManager: o  } = this.Editor, i = e ? this.processHTML(s1) : this.processPlain(s1);
        if (!i.length) return;
        if (i.length === 1) {
            i[0].isBlock ? this.processSingleBlock(i.pop()) : this.processInlinePaste(i.pop());
            return;
        }
        const r = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
        i.map(async (a, l)=>this.insertBlock(a, l === 0 && r)), o.currentBlock && t1.setToBlock(o.currentBlock, t1.positions.END);
    }
    /**
   * Set onPaste callback handler
   */ setCallback() {
        this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
   * Unset onPaste callback handler
   */ unsetCallback() {
        this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
    }
    /**
   * Get and process tool`s paste configs
   */ processTools() {
        const s1 = this.Editor.Tools.blockTools;
        Array.from(s1.values()).forEach(this.processTool);
    }
    /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */ collectTagNames(s1) {
        return J(s1) ? [
            s1
        ] : j(s1) ? Object.keys(s1) : [];
    }
    /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */ getTagsConfig(s1) {
        if (s1.pasteConfig === !1) return;
        const e = s1.pasteConfig.tags || [], t1 = [];
        e.forEach((o)=>{
            const i = this.collectTagNames(o);
            t1.push(...i), i.forEach((n)=>{
                if (Object.prototype.hasOwnProperty.call(this.toolsTags, n)) {
                    T(`Paste handler for «${s1.name}» Tool on «${n}» tag is skipped because it is already used by «${this.toolsTags[n].tool.name}» Tool.`, "warn");
                    return;
                }
                const r = j(o) ? o[n] : null;
                this.toolsTags[n.toUpperCase()] = {
                    tool: s1,
                    sanitizationConfig: r
                };
            });
        }), this.tagsByTool[s1.name] = t1.map((o)=>o.toUpperCase());
    }
    /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */ getFilesConfig(s1) {
        if (s1.pasteConfig === !1) return;
        const { files: e = {}  } = s1.pasteConfig;
        let { extensions: t1 , mimeTypes: o  } = e;
        !t1 && !o || (t1 && !Array.isArray(t1) && (T(`«extensions» property of the onDrop config for «${s1.name}» Tool should be an array`), t1 = []), o && !Array.isArray(o) && (T(`«mimeTypes» property of the onDrop config for «${s1.name}» Tool should be an array`), o = []), o && (o = o.filter((i)=>Dt(i) ? !0 : (T(`MIME type value «${i}» for the «${s1.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[s1.name] = {
            extensions: t1 || [],
            mimeTypes: o || []
        });
    }
    /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */ getPatternsConfig(s1) {
        s1.pasteConfig === !1 || !s1.pasteConfig.patterns || V(s1.pasteConfig.patterns) || Object.entries(s1.pasteConfig.patterns).forEach(([e, t1])=>{
            t1 instanceof RegExp || T(`Pattern ${t1} for «${s1.name}» Tool is skipped because it should be a Regexp instance.`, "warn"), this.toolsPatterns.push({
                key: e,
                pattern: t1,
                tool: s1
            });
        });
    }
    /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */ isNativeBehaviour(s1) {
        return d.isNativeInput(s1);
    }
    /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */ async processFiles(s1) {
        const { BlockManager: e  } = this.Editor;
        let t1;
        t1 = await Promise.all(Array.from(s1).map((n)=>this.processFile(n))), t1 = t1.filter((n)=>!!n);
        const i = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
        t1.forEach((n, r)=>{
            e.paste(n.type, n.event, r === 0 && i);
        });
    }
    /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */ async processFile(s1) {
        const e = Rt(s1), t1 = Object.entries(this.toolsFiles).find(([n, { mimeTypes: r , extensions: a  }])=>{
            const [l, c] = s1.type.split("/"), u = a.find((f)=>f.toLowerCase() === e.toLowerCase()), h = r.find((f)=>{
                const [v, p] = f.split("/");
                return v === l && (p === c || p === "*");
            });
            return !!u || !!h;
        });
        if (!t1) return;
        const [o] = t1;
        return {
            event: this.composePasteEvent("file", {
                file: s1
            }),
            type: o
        };
    }
    /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */ processHTML(s1) {
        const { Tools: e  } = this.Editor, t1 = d.make("DIV");
        return t1.innerHTML = s1, this.getNodes(t1).map((i)=>{
            let n, r = e.defaultTool, a = !1;
            switch(i.nodeType){
                case Node.DOCUMENT_FRAGMENT_NODE:
                    n = d.make("div"), n.appendChild(i);
                    break;
                case Node.ELEMENT_NODE:
                    n = i, a = !0, this.toolsTags[n.tagName] && (r = this.toolsTags[n.tagName].tool);
                    break;
            }
            const { tags: l  } = r.pasteConfig || {
                tags: []
            }, c = l.reduce((f, v)=>(this.collectTagNames(v).forEach((k)=>{
                    const _ = j(v) ? v[k] : null;
                    f[k.toLowerCase()] = _ || {};
                }), f), {}), u = Object.assign({}, c, r.baseSanitizeConfig);
            if (n.tagName.toLowerCase() === "table") {
                const f = Z(n.outerHTML, u);
                n = d.make("div", void 0, {
                    innerHTML: f
                }).firstChild;
            } else n.innerHTML = Z(n.innerHTML, u);
            const h = this.composePasteEvent("tag", {
                data: n
            });
            return {
                content: n,
                isBlock: a,
                tool: r.name,
                event: h
            };
        }).filter((i)=>{
            const n = d.isEmpty(i.content), r = d.isSingleTag(i.content);
            return !n || r;
        });
    }
    /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */ processPlain(s1) {
        const { defaultBlock: e  } = this.config;
        if (!s1) return [];
        const t1 = e;
        return s1.split(/\r?\n/).filter((o)=>o.trim()).map((o)=>{
            const i = d.make("div");
            i.textContent = o;
            const n = this.composePasteEvent("tag", {
                data: i
            });
            return {
                content: i,
                tool: t1,
                isBlock: !1,
                event: n
            };
        });
    }
    /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */ async processSingleBlock(s1) {
        const { Caret: e , BlockManager: t1  } = this.Editor, { currentBlock: o  } = t1;
        if (!o || s1.tool !== o.name || !d.containsOnlyInlineElements(s1.content.innerHTML)) {
            this.insertBlock(s1, (o == null ? void 0 : o.tool.isDefault) && o.isEmpty);
            return;
        }
        e.insertContentAtCaretPosition(s1.content.innerHTML);
    }
    /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */ async processInlinePaste(s1) {
        const { BlockManager: e , Caret: t1  } = this.Editor, { content: o  } = s1;
        if (e.currentBlock && e.currentBlock.tool.isDefault && o.textContent.length < xt.PATTERN_PROCESSING_MAX_LENGTH) {
            const n = await this.processPattern(o.textContent);
            if (n) {
                const r = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, a = e.paste(n.tool, n.event, r);
                t1.setToBlock(a, t1.positions.END);
                return;
            }
        }
        if (e.currentBlock && e.currentBlock.currentInput) {
            const n = e.currentBlock.tool.baseSanitizeConfig;
            document.execCommand("insertHTML", !1, Z(o.innerHTML, n));
        } else this.insertBlock(s1);
    }
    /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */ async processPattern(s1) {
        const e = this.toolsPatterns.find((o)=>{
            const i = o.pattern.exec(s1);
            return i ? s1 === i.shift() : !1;
        });
        return e ? {
            event: this.composePasteEvent("pattern", {
                key: e.key,
                data: s1
            }),
            tool: e.tool.name
        } : void 0;
    }
    /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */ insertBlock(s1, e = !1) {
        const { BlockManager: t1 , Caret: o  } = this.Editor, { currentBlock: i  } = t1;
        let n;
        if (e && i && i.isEmpty) {
            n = t1.paste(s1.tool, s1.event, !0), o.setToBlock(n, o.positions.END);
            return;
        }
        n = t1.paste(s1.tool, s1.event), o.setToBlock(n, o.positions.END);
    }
    /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */ insertEditorJSData(s1) {
        const { BlockManager: e , Caret: t1 , Tools: o  } = this.Editor;
        ht(s1, (n)=>o.blockTools.get(n).sanitizeConfig).forEach(({ tool: n , data: r  }, a)=>{
            let l = !1;
            a === 0 && (l = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
            const c = e.insert({
                tool: n,
                data: r,
                replace: l
            });
            t1.setToBlock(c, t1.positions.END);
        });
    }
    /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */ processElementNode(s1, e, t1) {
        const o = Object.keys(this.toolsTags), i = s1, { tool: n  } = this.toolsTags[i.tagName] || {}, r = this.tagsByTool[n == null ? void 0 : n.name] || [], a = o.includes(i.tagName), l = d.blockElements.includes(i.tagName.toLowerCase()), c = Array.from(i.children).some(({ tagName: h  })=>o.includes(h) && !r.includes(h)), u = Array.from(i.children).some(({ tagName: h  })=>d.blockElements.includes(h.toLowerCase()));
        if (!l && !a && !c) return t1.appendChild(i), [
            ...e,
            t1
        ];
        if (a && !c || l && !u && !c) return [
            ...e,
            t1,
            i
        ];
    }
    /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */ getNodes(s1) {
        const e = Array.from(s1.childNodes);
        let t1;
        const o = (i, n)=>{
            if (d.isEmpty(n) && !d.isSingleTag(n)) return i;
            const r = i[i.length - 1];
            let a = new DocumentFragment();
            switch(r && d.isFragment(r) && (a = i.pop()), n.nodeType){
                case Node.ELEMENT_NODE:
                    if (t1 = this.processElementNode(n, i, a), t1) return t1;
                    break;
                case Node.TEXT_NODE:
                    return a.appendChild(n), [
                        ...i,
                        a
                    ];
                default:
                    return [
                        ...i,
                        a
                    ];
            }
            return [
                ...i,
                ...Array.from(n.childNodes).reduce(o, [])
            ];
        };
        return e.reduce(o, []);
    }
    /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */ composePasteEvent(s1, e) {
        return new CustomEvent(s1, {
            detail: e
        });
    }
};
let wt = xt;
wt.PATTERN_PROCESSING_MAX_LENGTH = 450;
class qo extends S {
    constructor(){
        super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
    }
    /**
   * Returns state of read only mode
   */ get isEnabled() {
        return this.readOnlyEnabled;
    }
    /**
   * Set initial state
   */ async prepare() {
        const { Tools: e  } = this.Editor, { blockTools: t1  } = e, o = [];
        Array.from(t1.entries()).forEach(([i, n])=>{
            n.isReadOnlySupported || o.push(i);
        }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
    }
    /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param {boolean} state - (optional) read-only state or toggle
   */ async toggle(e = !this.readOnlyEnabled) {
        e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
        const t1 = this.readOnlyEnabled;
        this.readOnlyEnabled = e;
        for(const i in this.Editor)this.Editor[i].toggleReadOnly && this.Editor[i].toggleReadOnly(e);
        if (t1 === e) return this.readOnlyEnabled;
        const o = await this.Editor.Saver.save();
        return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), this.readOnlyEnabled;
    }
    /**
   * Throws an error about tools which don't support read-only mode
   */ throwCriticalError() {
        throw new at(`To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`);
    }
}
class pe extends S {
    constructor(){
        super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
    }
    /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */ static get CSS() {
        return {
            overlay: "codex-editor-overlay",
            overlayContainer: "codex-editor-overlay__container",
            rect: "codex-editor-overlay__rectangle",
            topScrollZone: "codex-editor-overlay__scroll-zone--top",
            bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
        };
    }
    /**
   * Module Preparation
   * Creating rect and hang handlers
   */ prepare() {
        this.enableModuleBindings();
    }
    /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */ startSelection(e, t1) {
        const o = document.elementFromPoint(e - window.pageXOffset, t1 - window.pageYOffset);
        o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
        const n = [
            `.${F.CSS.content}`,
            `.${this.Editor.Toolbar.CSS.toolbar}`,
            `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
        ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), a = n.some((l)=>!!o.closest(l));
        !r || a || (this.mousedown = !0, this.startX = e, this.startY = t1);
    }
    /**
   * Clear all params to end selection
   */ endSelection() {
        this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
    }
    /**
   * is RectSelection Activated
   */ isRectActivated() {
        return this.isRectSelectionActivated;
    }
    /**
   * Mark that selection is end
   */ clearSelection() {
        this.isRectSelectionActivated = !1;
    }
    /**
   * Sets Module necessary event handlers
   */ enableModuleBindings() {
        const { container: e  } = this.genHTML();
        this.listeners.on(e, "mousedown", (t1)=>{
            this.processMouseDown(t1);
        }, !1), this.listeners.on(document.body, "mousemove", Te((t1)=>{
            this.processMouseMove(t1);
        }, 10), {
            passive: !0
        }), this.listeners.on(document.body, "mouseleave", ()=>{
            this.processMouseLeave();
        }), this.listeners.on(window, "scroll", Te((t1)=>{
            this.processScroll(t1);
        }, 10), {
            passive: !0
        }), this.listeners.on(document.body, "mouseup", ()=>{
            this.processMouseUp();
        }, !1);
    }
    /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */ processMouseDown(e) {
        if (e.button !== this.MAIN_MOUSE_BUTTON) return;
        e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
    }
    /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */ processMouseMove(e) {
        this.changingRectangle(e), this.scrollByZones(e.clientY);
    }
    /**
   * Handle mouse leave
   */ processMouseLeave() {
        this.clearSelection(), this.endSelection();
    }
    /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */ processScroll(e) {
        this.changingRectangle(e);
    }
    /**
   * Handle mouse up
   */ processMouseUp() {
        this.clearSelection(), this.endSelection();
    }
    /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */ scrollByZones(e) {
        if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
            this.isScrolling = !1;
            return;
        }
        this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
    }
    /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */ genHTML() {
        const { UI: e  } = this.Editor, t1 = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = d.make("div", pe.CSS.overlay, {}), i = d.make("div", pe.CSS.overlayContainer, {}), n = d.make("div", pe.CSS.rect, {});
        return i.appendChild(n), o.appendChild(i), t1.appendChild(o), this.overlayRectangle = n, {
            container: t1,
            overlay: o
        };
    }
    /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */ scrollVertical(e) {
        if (!(this.inScrollZone && this.mousedown)) return;
        const t1 = window.pageYOffset;
        window.scrollBy(0, e), this.mouseY += window.pageYOffset - t1, setTimeout(()=>{
            this.scrollVertical(e);
        }, 0);
    }
    /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */ changingRectangle(e) {
        if (!this.mousedown) return;
        e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
        const { rightPos: t1 , leftPos: o , index: i  } = this.genInfoForMouseSelection(), n = this.startX > t1 && this.mouseX > t1, r = this.startX < o && this.mouseX < o;
        this.rectCrossesBlocks = !(n || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), m.get().removeAllRanges());
    }
    /**
   * Shrink rect to singular point
   */ shrinkRectangleToPoint() {
        this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
    }
    /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */ inverseSelection() {
        const t1 = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
        if (this.rectCrossesBlocks && !t1) for (const o of this.stackOfSelected)this.Editor.BlockSelection.selectBlockByIndex(o);
        if (!this.rectCrossesBlocks && t1) for (const o of this.stackOfSelected)this.Editor.BlockSelection.unSelectBlockByIndex(o);
    }
    /**
   * Updates size of rectangle
   */ updateRectangleSize() {
        this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
    }
    /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */ genInfoForMouseSelection() {
        const t1 = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t1, o), n = this.Editor.BlockManager.getBlockByChildNode(i);
        let r;
        n !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h)=>h.holder === n.holder));
        const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + F.CSS.content), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, c = t1 - l, u = t1 + l;
        return {
            index: r,
            leftPos: c,
            rightPos: u
        };
    }
    /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */ addBlockInSelection(e) {
        this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
    }
    /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */ trySelectNextBlock(e) {
        const t1 = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, n = -1, r = 0;
        if (t1) return;
        const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
        let l = r;
        o > 1 && (l = a ? i : n);
        const c = e > this.stackOfSelected[o - 1] && l === i, u = e < this.stackOfSelected[o - 1] && l === n, f = !(c || u || l === r);
        if (!f && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
            let k = this.stackOfSelected[o - 1] + 1 || e;
            for(k; k <= e; k++)this.addBlockInSelection(k);
            return;
        }
        if (!f && e < this.stackOfSelected[o - 1]) {
            for(let k = this.stackOfSelected[o - 1] - 1; k >= e; k--)this.addBlockInSelection(k);
            return;
        }
        if (!f) return;
        let v = o - 1, p;
        for(e > this.stackOfSelected[o - 1] ? p = ()=>e > this.stackOfSelected[v] : p = ()=>e < this.stackOfSelected[v]; p();)this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[v]), this.stackOfSelected.pop(), v--;
    }
}
class Jo extends S {
    /**
   * @typedef {object} RendererBlocks
   * @property {string} type - tool name
   * @property {object} data - tool data
   */ /**
   * @example
   *
   * blocks: [
   *   {
   *     id   : 'oDe-EVrGWA',
   *     type : 'paragraph',
   *     data : {
   *       text : 'Hello from Codex!'
   *     }
   *   },
   *   {
   *     id   : 'Ld5BJjJCHs',
   *     type : 'paragraph',
   *     data : {
   *       text : 'Leave feedback if you like it!'
   *     }
   *   },
   * ]
   */ /**
   * Make plugin blocks from array of plugin`s data
   *
   * @param {OutputBlockData[]} blocks - blocks to render
   */ async render(e) {
        const t1 = e.map((i)=>({
                function: ()=>this.insertBlock(i)
            }));
        this.Editor.ModificationsObserver.disable();
        const o = await ot(t1);
        return this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), o;
    }
    /**
   * Get plugin instance
   * Add plugin instance to BlockManager
   * Insert block to working zone
   *
   * @param {object} item - Block data to insert
   * @returns {Promise<void>}
   */ async insertBlock(e) {
        var l;
        const { Tools: t1 , BlockManager: o  } = this.Editor, { type: i , data: n , tunes: r , id: a  } = e;
        if (t1.available.has(i)) try {
            o.insert({
                id: a,
                tool: i,
                data: n,
                tunes: r
            });
        } catch (c) {
            throw T(`Block «${i}» skipped because of plugins error`, "warn", {
                data: n,
                error: c
            }), Error(c);
        }
        else {
            const c = {
                savedData: {
                    id: a,
                    type: i,
                    data: n
                },
                title: i
            };
            if (t1.unavailable.has(i)) {
                const f = (l = t1.unavailable.get(i).toolbox[0]) == null ? void 0 : l.title;
                c.title = f || c.title;
            }
            const u = o.insert({
                id: a,
                tool: t1.stubTool,
                data: c
            });
            u.stretched = !0, T(`Tool «${i}» is not found. Check 'tools' property at your initial Editor.js config.`, "warn");
        }
    }
}
class Qo extends S {
    /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */ async save() {
        const { BlockManager: e , Tools: t1  } = this.Editor, o = e.blocks, i = [];
        try {
            o.forEach((a)=>{
                i.push(this.getSavedData(a));
            });
            const n = await Promise.all(i), r = await ht(n, (a)=>t1.blockTools.get(a).sanitizeConfig);
            return this.makeOutput(r);
        } catch (n) {
            K("Saving failed due to the Error %o", "error", n);
        }
    }
    /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */ async getSavedData(e) {
        const t1 = await e.save(), o = t1 && await e.validate(t1.data);
        return {
            ...t1,
            isValid: o
        };
    }
    /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */ makeOutput(e) {
        let t1 = 0;
        const o = [];
        return T("[Editor.js saving]:", "groupCollapsed"), e.forEach(({ id: i , tool: n , data: r , tunes: a , time: l , isValid: c  })=>{
            if (t1 += l, T(`${n.charAt(0).toUpperCase() + n.slice(1)}`, "group"), c) T(r), T(void 0, "groupEnd");
            else {
                T(`Block «${n}» skipped because saved data is invalid`), T(void 0, "groupEnd");
                return;
            }
            if (n === this.Editor.Tools.stubTool) {
                o.push(r);
                return;
            }
            const u = {
                id: i,
                type: n,
                data: r,
                ...!V(a) && {
                    tunes: a
                }
            };
            o.push(u);
        }), T("Total", "log", t1), T(void 0, "groupEnd"), {
            time: +/* @__PURE__ */ new Date(),
            blocks: o,
            version: "2.27.2"
        };
    }
}
var Ne = {}, ei = {
    get exports () {
        return Ne;
    },
    set exports (s){
        Ne = s;
    }
};
(function(s1, e) {
    (function(t1, o) {
        s1.exports = o();
    })(window, function() {
        return function(t1) {
            var o = {};
            function i(n) {
                if (o[n]) return o[n].exports;
                var r = o[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t1[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
            }
            return i.m = t1, i.c = o, i.d = function(n, r, a) {
                i.o(n, r) || Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: a
                });
            }, i.r = function(n) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(n, "__esModule", {
                    value: !0
                });
            }, i.t = function(n, r) {
                if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule) return n;
                var a = /* @__PURE__ */ Object.create(null);
                if (i.r(a), Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & r && typeof n != "string") for(var l in n)i.d(a, l, (function(c) {
                    return n[c];
                }).bind(null, l));
                return a;
            }, i.n = function(n) {
                var r = n && n.__esModule ? function() {
                    return n.default;
                } : function() {
                    return n;
                };
                return i.d(r, "a", r), r;
            }, i.o = function(n, r) {
                return Object.prototype.hasOwnProperty.call(n, r);
            }, i.p = "/", i(i.s = 4);
        }([
            function(t1, o, i) {
                var n = i(1), r = i(2);
                typeof (r = r.__esModule ? r.default : r) == "string" && (r = [
                    [
                        t1.i,
                        r,
                        ""
                    ]
                ]);
                var a = {
                    insert: "head",
                    singleton: !1
                };
                n(r, a), t1.exports = r.locals || {};
            },
            function(t1, o, i) {
                var n, r = function() {
                    return n === void 0 && (n = !!(window && document && document.all && !window.atob)), n;
                }, a = function() {
                    var y = {};
                    return function(x) {
                        if (y[x] === void 0) {
                            var w = document.querySelector(x);
                            if (window.HTMLIFrameElement && w instanceof window.HTMLIFrameElement) try {
                                w = w.contentDocument.head;
                            } catch  {
                                w = null;
                            }
                            y[x] = w;
                        }
                        return y[x];
                    };
                }(), l = [];
                function c(y) {
                    for(var x = -1, w = 0; w < l.length; w++)if (l[w].identifier === y) {
                        x = w;
                        break;
                    }
                    return x;
                }
                function u(y, x) {
                    for(var w = {}, M = [], R = 0; R < y.length; R++){
                        var b = y[R], g = x.base ? b[0] + x.base : b[0], E = w[g] || 0, C = "".concat(g, " ").concat(E);
                        w[g] = E + 1;
                        var O = c(C), I = {
                            css: b[1],
                            media: b[2],
                            sourceMap: b[3]
                        };
                        O !== -1 ? (l[O].references++, l[O].updater(I)) : l.push({
                            identifier: C,
                            updater: A(I, x),
                            references: 1
                        }), M.push(C);
                    }
                    return M;
                }
                function h(y) {
                    var x = document.createElement("style"), w = y.attributes || {};
                    if (w.nonce === void 0) {
                        var M = i.nc;
                        M && (w.nonce = M);
                    }
                    if (Object.keys(w).forEach(function(b) {
                        x.setAttribute(b, w[b]);
                    }), typeof y.insert == "function") y.insert(x);
                    else {
                        var R = a(y.insert || "head");
                        if (!R) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        R.appendChild(x);
                    }
                    return x;
                }
                var f, v = (f = [], function(y, x) {
                    return f[y] = x, f.filter(Boolean).join(`
`);
                });
                function p(y, x, w, M) {
                    var R = w ? "" : M.media ? "@media ".concat(M.media, " {").concat(M.css, "}") : M.css;
                    if (y.styleSheet) y.styleSheet.cssText = v(x, R);
                    else {
                        var b = document.createTextNode(R), g = y.childNodes;
                        g[x] && y.removeChild(g[x]), g.length ? y.insertBefore(b, g[x]) : y.appendChild(b);
                    }
                }
                function k(y, x, w) {
                    var M = w.css, R = w.media, b = w.sourceMap;
                    if (R ? y.setAttribute("media", R) : y.removeAttribute("media"), b && btoa && (M += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(b)))), " */")), y.styleSheet) y.styleSheet.cssText = M;
                    else {
                        for(; y.firstChild;)y.removeChild(y.firstChild);
                        y.appendChild(document.createTextNode(M));
                    }
                }
                var _ = null, N = 0;
                function A(y, x) {
                    var w, M, R;
                    if (x.singleton) {
                        var b = N++;
                        w = _ || (_ = h(x)), M = p.bind(null, w, b, !1), R = p.bind(null, w, b, !0);
                    } else w = h(x), M = k.bind(null, w, x), R = function() {
                        (function(g) {
                            if (g.parentNode === null) return !1;
                            g.parentNode.removeChild(g);
                        })(w);
                    };
                    return M(y), function(g) {
                        if (g) {
                            if (g.css === y.css && g.media === y.media && g.sourceMap === y.sourceMap) return;
                            M(y = g);
                        } else R();
                    };
                }
                t1.exports = function(y, x) {
                    (x = x || {}).singleton || typeof x.singleton == "boolean" || (x.singleton = r());
                    var w = u(y = y || [], x);
                    return function(M) {
                        if (M = M || [], Object.prototype.toString.call(M) === "[object Array]") {
                            for(var R = 0; R < w.length; R++){
                                var b = c(w[R]);
                                l[b].references--;
                            }
                            for(var g = u(M, x), E = 0; E < w.length; E++){
                                var C = c(w[E]);
                                l[C].references === 0 && (l[C].updater(), l.splice(C, 1));
                            }
                            w = g;
                        }
                    };
                };
            },
            function(t1, o, i) {
                (o = i(3)(!1)).push([
                    t1.i,
                    `.ce-paragraph {
    line-height: 1.6em;
    outline: none;
}

.ce-paragraph[data-placeholder]:empty::before{
  content: attr(data-placeholder);
  color: #707684;
  font-weight: normal;
  opacity: 0;
}

/** Show placeholder at the first paragraph if Editor is empty */
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {
  opacity: 1;
}

.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: 0;
}

.ce-paragraph p:first-of-type{
    margin-top: 0;
}

.ce-paragraph p:last-of-type{
    margin-bottom: 0;
}
`,
                    ""
                ]), t1.exports = o;
            },
            function(t1, o, i) {
                t1.exports = function(n) {
                    var r = [];
                    return r.toString = function() {
                        return this.map(function(a) {
                            var l = function(c, u) {
                                var h = c[1] || "", f = c[3];
                                if (!f) return h;
                                if (u && typeof btoa == "function") {
                                    var v = (k = f, _ = btoa(unescape(encodeURIComponent(JSON.stringify(k)))), N = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(_), "/*# ".concat(N, " */")), p = f.sources.map(function(A) {
                                        return "/*# sourceURL=".concat(f.sourceRoot || "").concat(A, " */");
                                    });
                                    return [
                                        h
                                    ].concat(p).concat([
                                        v
                                    ]).join(`
`);
                                }
                                var k, _, N;
                                return [
                                    h
                                ].join(`
`);
                            }(a, n);
                            return a[2] ? "@media ".concat(a[2], " {").concat(l, "}") : l;
                        }).join("");
                    }, r.i = function(a, l, c) {
                        typeof a == "string" && (a = [
                            [
                                null,
                                a,
                                ""
                            ]
                        ]);
                        var u = {};
                        if (c) for(var h = 0; h < this.length; h++){
                            var f = this[h][0];
                            f != null && (u[f] = !0);
                        }
                        for(var v = 0; v < a.length; v++){
                            var p = [].concat(a[v]);
                            c && u[p[0]] || (l && (p[2] ? p[2] = "".concat(l, " and ").concat(p[2]) : p[2] = l), r.push(p));
                        }
                    }, r;
                };
            },
            function(t1, o, i) {
                i.r(o), i.d(o, "default", function() {
                    return a;
                }), i(0);
                function n(l, c) {
                    for(var u = 0; u < c.length; u++){
                        var h = c[u];
                        h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
                    }
                }
                function r(l, c, u) {
                    return c && n(l.prototype, c), u && n(l, u), l;
                }
                /**
       * Base Paragraph Block for the Editor.js.
       * Represents simple paragraph
       *
       * @author CodeX (team@codex.so)
       * @copyright CodeX 2018
       * @license The MIT License (MIT)
       */ var a = function() {
                    function l(c) {
                        var u = c.data, h = c.config, f = c.api, v = c.readOnly;
                        (function(p, k) {
                            if (!(p instanceof k)) throw new TypeError("Cannot call a class as a function");
                        })(this, l), this.api = f, this.readOnly = v, this._CSS = {
                            block: this.api.styles.block,
                            wrapper: "ce-paragraph"
                        }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = h.placeholder ? h.placeholder : l.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this._preserveBlank = h.preserveBlank !== void 0 && h.preserveBlank, this.data = u;
                    }
                    return r(l, null, [
                        {
                            key: "DEFAULT_PLACEHOLDER",
                            get: function() {
                                return "";
                            }
                        }
                    ]), r(l, [
                        {
                            key: "onKeyUp",
                            value: function(c) {
                                c.code !== "Backspace" && c.code !== "Delete" || this._element.textContent === "" && (this._element.innerHTML = "");
                            }
                        },
                        {
                            key: "drawView",
                            value: function() {
                                var c = document.createElement("DIV");
                                return c.classList.add(this._CSS.wrapper, this._CSS.block), c.contentEditable = !1, c.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (c.contentEditable = !0, c.addEventListener("keyup", this.onKeyUp)), c;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this._element;
                            }
                        },
                        {
                            key: "merge",
                            value: function(c) {
                                var u = {
                                    text: this.data.text + c.text
                                };
                                this.data = u;
                            }
                        },
                        {
                            key: "validate",
                            value: function(c) {
                                return !(c.text.trim() === "" && !this._preserveBlank);
                            }
                        },
                        {
                            key: "save",
                            value: function(c) {
                                return {
                                    text: c.innerHTML
                                };
                            }
                        },
                        {
                            key: "onPaste",
                            value: function(c) {
                                var u = {
                                    text: c.detail.data.innerHTML
                                };
                                this.data = u;
                            }
                        },
                        {
                            key: "data",
                            get: function() {
                                var c = this._element.innerHTML;
                                return this._data.text = c, this._data;
                            },
                            set: function(c) {
                                this._data = c || {}, this._element.innerHTML = this._data.text || "";
                            }
                        }
                    ], [
                        {
                            key: "conversionConfig",
                            get: function() {
                                return {
                                    export: "text",
                                    import: "text"
                                };
                            }
                        },
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    text: {
                                        br: !0
                                    }
                                };
                            }
                        },
                        {
                            key: "isReadOnlySupported",
                            get: function() {
                                return !0;
                            }
                        },
                        {
                            key: "pasteConfig",
                            get: function() {
                                return {
                                    tags: [
                                        "P"
                                    ]
                                };
                            }
                        },
                        {
                            key: "toolbox",
                            get: function() {
                                return {
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>',
                                    title: "Text"
                                };
                            }
                        }
                    ]), l;
                }();
            }
        ]).default;
    });
})(ei);
const ti = /* @__PURE__ */ xe(Ne);
class $e {
    constructor(){
        this.commandName = "bold", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--bold"
        }, this.nodes = {
            button: void 0
        };
    }
    /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */ static get sanitize() {
        return {
            b: {}
        };
    }
    /**
   * Create button for Inline Toolbar
   */ render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Eo, this.nodes.button;
    }
    /**
   * Wrap range with <b> tag
   */ surround() {
        document.execCommand(this.commandName);
    }
    /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */ checkState() {
        const e = document.queryCommandState(this.commandName);
        return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
    }
    /**
   * Set a shortcut
   *
   * @returns {boolean}
   */ get shortcut() {
        return "CMD+B";
    }
}
$e.isInline = !0;
$e.title = "Bold";
class We {
    constructor(){
        this.commandName = "italic", this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--italic"
        }, this.nodes = {
            button: null
        };
    }
    /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */ static get sanitize() {
        return {
            i: {}
        };
    }
    /**
   * Create button for Inline Toolbar
   */ render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = So, this.nodes.button;
    }
    /**
   * Wrap range with <i> tag
   */ surround() {
        document.execCommand(this.commandName);
    }
    /**
   * Check selection and set activated state to button if there are <i> tag
   */ checkState() {
        const e = document.queryCommandState(this.commandName);
        return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
    }
    /**
   * Set a shortcut
   */ get shortcut() {
        return "CMD+I";
    }
}
We.isInline = !0;
We.title = "Italic";
class Ye {
    /**
   * @param api - Editor.js API
   */ constructor({ api: e  }){
        this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
            button: "ce-inline-tool",
            buttonActive: "ce-inline-tool--active",
            buttonModifier: "ce-inline-tool--link",
            buttonUnlink: "ce-inline-tool--unlink",
            input: "ce-inline-tool-input",
            inputShowed: "ce-inline-tool-input--showed"
        }, this.nodes = {
            button: null,
            input: null
        }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new m();
    }
    /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */ static get sanitize() {
        return {
            a: {
                href: !0,
                target: "_blank",
                rel: "nofollow"
            }
        };
    }
    /**
   * Create button for Inline Toolbar
   */ render() {
        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = qe, this.nodes.button;
    }
    /**
   * Input for the link
   */ renderActions() {
        return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e)=>{
            e.keyCode === this.ENTER_KEY && this.enterPressed(e);
        }), this.nodes.input;
    }
    /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */ surround(e) {
        if (e) {
            this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
            const t1 = this.selection.findParentTag("A");
            if (t1) {
                this.selection.expandToTag(t1), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
                return;
            }
        }
        this.toggleActions();
    }
    /**
   * Check selection and set activated state to button if there are <a> tag
   */ checkState() {
        const e = this.selection.findParentTag("A");
        if (e) {
            this.nodes.button.innerHTML = Oo, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
            const t1 = e.getAttribute("href");
            this.nodes.input.value = t1 !== "null" ? t1 : "", this.selection.save();
        } else this.nodes.button.innerHTML = qe, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
        return !!e;
    }
    /**
   * Function called with Inline Toolbar closing
   */ clear() {
        this.closeActions();
    }
    /**
   * Set a shortcut
   */ get shortcut() {
        return "CMD+K";
    }
    /**
   * Show/close link input
   */ toggleActions() {
        this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
    }
    /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */ openActions(e = !1) {
        this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
    }
    /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */ closeActions(e = !0) {
        if (this.selection.isFakeBackgroundEnabled) {
            const t1 = new m();
            t1.save(), this.selection.restore(), this.selection.removeFakeBackground(), t1.restore();
        }
        this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
    }
    /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */ enterPressed(e) {
        let t1 = this.nodes.input.value || "";
        if (!t1.trim()) {
            this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
            return;
        }
        if (!this.validateURL(t1)) {
            this.notifier.show({
                message: "Pasted link is not valid.",
                style: "error"
            }), T("Incorrect Link pasted", "warn", t1);
            return;
        }
        t1 = this.prepareLink(t1), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t1), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
    }
    /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */ validateURL(e) {
        return !/\s/.test(e);
    }
    /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */ prepareLink(e) {
        return e = e.trim(), e = this.addProtocol(e), e;
    }
    /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */ addProtocol(e) {
        if (/^(\w+):(\/\/)?/.test(e)) return e;
        const t1 = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
        return !t1 && !o && !i && (e = "http://" + e), e;
    }
    /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */ insertLink(e) {
        const t1 = this.selection.findParentTag("A");
        t1 && this.selection.expandToTag(t1), document.execCommand(this.commandLink, !1, e);
    }
    /**
   * Removes <a> tag
   */ unlink() {
        document.execCommand(this.commandUnlink);
    }
}
Ye.isInline = !0;
Ye.title = "Link";
class yt {
    /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */ constructor({ data: e , api: t1  }){
        this.CSS = {
            wrapper: "ce-stub",
            info: "ce-stub__info",
            title: "ce-stub__title",
            subtitle: "ce-stub__subtitle"
        }, this.api = t1, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
    }
    /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */ render() {
        return this.wrapper;
    }
    /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */ save() {
        return this.savedData;
    }
    /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */ make() {
        const e = d.make("div", this.CSS.wrapper), t1 = '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/></svg>', o = d.make("div", this.CSS.info), i = d.make("div", this.CSS.title, {
            textContent: this.title
        }), n = d.make("div", this.CSS.subtitle, {
            textContent: this.subtitle
        });
        return e.innerHTML = t1, o.appendChild(i), o.appendChild(n), e.appendChild(o), e;
    }
}
yt.isReadOnlySupported = !0;
class oi extends Ue {
    constructor(){
        super(...arguments), this.type = ye.Inline;
    }
    /**
   * Returns title for Inline Tool if specified by user
   */ get title() {
        return this.constructable[je.Title];
    }
    /**
   * Constructs new InlineTool instance from constructable
   */ create() {
        return new this.constructable({
            api: this.api.getMethodsForTool(this),
            config: this.settings
        });
    }
}
class ii extends Ue {
    constructor(){
        super(...arguments), this.type = ye.Tune;
    }
    /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */ create(e, t1) {
        return new this.constructable({
            api: this.api.getMethodsForTool(this),
            config: this.settings,
            block: t1,
            data: e
        });
    }
}
class U extends Map {
    /**
   * Returns Block Tools collection
   */ get blockTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isBlock());
        return new U(e);
    }
    /**
   * Returns Inline Tools collection
   */ get inlineTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isInline());
        return new U(e);
    }
    /**
   * Returns Block Tunes collection
   */ get blockTunes() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isTune());
        return new U(e);
    }
    /**
   * Returns internal Tools collection
   */ get internalTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>t1.isInternal);
        return new U(e);
    }
    /**
   * Returns Tools collection provided by user
   */ get externalTools() {
        const e = Array.from(this.entries()).filter(([, t1])=>!t1.isInternal);
        return new U(e);
    }
}
var ni = Object.defineProperty, si = Object.getOwnPropertyDescriptor, Et = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? si(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && ni(e, t1, i), i;
};
class Ke extends Ue {
    constructor(){
        super(...arguments), this.type = ye.Block, this.inlineTools = new U(), this.tunes = new U();
    }
    /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */ create(e, t1, o) {
        return new this.constructable({
            data: e,
            block: t1,
            readOnly: o,
            api: this.api.getMethodsForTool(this),
            config: this.settings
        });
    }
    /**
   * Returns true if read-only mode is supported by Tool
   */ get isReadOnlySupported() {
        return this.constructable[se.IsReadOnlySupported] === !0;
    }
    /**
   * Returns true if Tool supports linebreaks
   */ get isLineBreaksEnabled() {
        return this.constructable[se.IsEnabledLineBreaks];
    }
    /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */ get toolbox() {
        const e = this.constructable[se.Toolbox], t1 = this.config[me.Toolbox];
        if (!V(e) && t1 !== !1) return t1 ? Array.isArray(e) ? Array.isArray(t1) ? t1.map((o, i)=>{
            const n = e[i];
            return n ? {
                ...n,
                ...o
            } : o;
        }) : [
            t1
        ] : Array.isArray(t1) ? t1 : [
            {
                ...e,
                ...t1
            }
        ] : Array.isArray(e) ? e : [
            e
        ];
    }
    /**
   * Returns Tool conversion configuration
   */ get conversionConfig() {
        return this.constructable[se.ConversionConfig];
    }
    /**
   * Returns enabled inline tools for Tool
   */ get enabledInlineTools() {
        return this.config[me.EnabledInlineTools] || !1;
    }
    /**
   * Returns enabled tunes for Tool
   */ get enabledBlockTunes() {
        return this.config[me.EnabledBlockTunes];
    }
    /**
   * Returns Tool paste configuration
   */ get pasteConfig() {
        return this.constructable[se.PasteConfig] ?? {};
    }
    get sanitizeConfig() {
        const e = super.sanitizeConfig, t1 = this.baseSanitizeConfig;
        if (V(e)) return t1;
        const o = {};
        for(const i in e)if (Object.prototype.hasOwnProperty.call(e, i)) {
            const n = e[i];
            j(n) ? o[i] = Object.assign({}, t1, n) : o[i] = n;
        }
        return o;
    }
    get baseSanitizeConfig() {
        const e = {};
        return Array.from(this.inlineTools.values()).forEach((t1)=>Object.assign(e, t1.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t1)=>Object.assign(e, t1.sanitizeConfig)), e;
    }
}
Et([
    ae
], Ke.prototype, "sanitizeConfig", 1);
Et([
    ae
], Ke.prototype, "baseSanitizeConfig", 1);
class ri {
    /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */ constructor(e, t1, o){
        this.api = o, this.config = e, this.editorConfig = t1;
    }
    /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */ get(e) {
        const { class: t1 , isInternal: o = !1 , ...i } = this.config[e], n = this.getConstructor(t1);
        return new n({
            name: e,
            constructable: t1,
            config: i,
            api: this.api,
            isDefault: e === this.editorConfig.defaultBlock,
            defaultPlaceholder: this.editorConfig.placeholder,
            isInternal: o
        });
    }
    /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */ getConstructor(e) {
        switch(!0){
            case e[je.IsInline]:
                return oi;
            case e[vt.IsTune]:
                return ii;
            default:
                return Ke;
        }
    }
}
class Bt {
    /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */ constructor({ api: e  }){
        this.CSS = {
            animation: "wobble"
        }, this.api = e;
    }
    /**
   * Tune's appearance in block settings menu
   */ render() {
        return {
            icon: pt,
            title: this.api.i18n.t("Move down"),
            onActivate: ()=>this.handleClick(),
            name: "move-down"
        };
    }
    /**
   * Handle clicks on 'move down' button
   */ handleClick() {
        const e = this.api.blocks.getCurrentBlockIndex(), t1 = this.api.blocks.getBlockByIndex(e + 1);
        if (!t1) throw new Error("Unable to move Block down since it is already the last");
        const o = t1.holder, i = o.getBoundingClientRect();
        let n = Math.abs(window.innerHeight - o.offsetHeight);
        i.top < window.innerHeight && (n = window.scrollY + o.offsetHeight), window.scrollTo(0, n), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
    }
}
Bt.isTune = !0;
class Ct {
    /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */ constructor({ api: e  }){
        this.api = e;
    }
    /**
   * Tune's appearance in block settings menu
   */ render() {
        return {
            icon: Co,
            title: this.api.i18n.t("Delete"),
            name: "delete",
            confirmation: {
                title: this.api.i18n.t("Click to delete"),
                onActivate: ()=>this.handleClick()
            }
        };
    }
    /**
   * Delete block conditions passed
   */ handleClick() {
        this.api.blocks.delete();
    }
}
Ct.isTune = !0;
class Tt {
    /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */ constructor({ api: e  }){
        this.CSS = {
            animation: "wobble"
        }, this.api = e;
    }
    /**
   * Tune's appearance in block settings menu
   */ render() {
        return {
            icon: Bo,
            title: this.api.i18n.t("Move up"),
            onActivate: ()=>this.handleClick(),
            name: "move-up"
        };
    }
    /**
   * Move current block up
   */ handleClick() {
        const e = this.api.blocks.getCurrentBlockIndex(), t1 = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
        if (e === 0 || !t1 || !o) throw new Error("Unable to move Block up since it is already the first");
        const i = t1.holder, n = o.holder, r = i.getBoundingClientRect(), a = n.getBoundingClientRect();
        let l;
        a.top > 0 ? l = Math.abs(r.top) - Math.abs(a.top) : l = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
    }
}
Tt.isTune = !0;
var ai = Object.defineProperty, li = Object.getOwnPropertyDescriptor, ci = (s1, e, t1, o)=>{
    for(var i = o > 1 ? void 0 : o ? li(e, t1) : e, n = s1.length - 1, r; n >= 0; n--)(r = s1[n]) && (i = (o ? r(e, t1, i) : r(i)) || i);
    return o && i && ai(e, t1, i), i;
};
class St extends S {
    constructor(){
        super(...arguments), this.stubTool = "stub", this.toolsAvailable = new U(), this.toolsUnavailable = new U();
    }
    /**
   * Returns available Tools
   */ get available() {
        return this.toolsAvailable;
    }
    /**
   * Returns unavailable Tools
   */ get unavailable() {
        return this.toolsUnavailable;
    }
    /**
   * Return Tools for the Inline Toolbar
   */ get inlineTools() {
        return this.available.inlineTools;
    }
    /**
   * Return editor block tools
   */ get blockTools() {
        return this.available.blockTools;
    }
    /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */ get blockTunes() {
        return this.available.blockTunes;
    }
    /**
   * Returns default Tool object
   */ get defaultTool() {
        return this.blockTools.get(this.config.defaultBlock);
    }
    /**
   * Returns internal tools
   */ get internal() {
        return this.available.internalTools;
    }
    /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */ async prepare() {
        if (this.validateTools(), this.config.tools = Se({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0) throw Error("Can't start without tools");
        const e = this.prepareConfig();
        this.factory = new ri(e, this.config, this.Editor.API);
        const t1 = this.getListOfPrepareFunctions(e);
        if (t1.length === 0) return Promise.resolve();
        await ot(t1, (o)=>{
            this.toolPrepareMethodSuccess(o);
        }, (o)=>{
            this.toolPrepareMethodFallback(o);
        }), this.prepareBlockTools();
    }
    getAllInlineToolsSanitizeConfig() {
        const e = {};
        return Array.from(this.inlineTools.values()).forEach((t1)=>{
            Object.assign(e, t1.sanitizeConfig);
        }), e;
    }
    /**
   * Calls each Tool reset method to clean up anything set by Tool
   */ destroy() {
        Object.values(this.available).forEach(async (e)=>{
            D(e.reset) && await e.reset();
        });
    }
    /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */ get internalTools() {
        return {
            bold: {
                class: $e,
                isInternal: !0
            },
            italic: {
                class: We,
                isInternal: !0
            },
            link: {
                class: Ye,
                isInternal: !0
            },
            paragraph: {
                class: ti,
                inlineToolbar: !0,
                isInternal: !0
            },
            stub: {
                class: yt,
                isInternal: !0
            },
            moveUp: {
                class: Tt,
                isInternal: !0
            },
            delete: {
                class: Ct,
                isInternal: !0
            },
            moveDown: {
                class: Bt,
                isInternal: !0
            }
        };
    }
    /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */ toolPrepareMethodSuccess(e) {
        const t1 = this.factory.get(e.toolName);
        if (t1.isInline()) {
            const i = [
                "render",
                "surround",
                "checkState"
            ].filter((n)=>!t1.create()[n]);
            if (i.length) {
                T(`Incorrect Inline Tool: ${t1.name}. Some of required methods is not implemented %o`, "warn", i), this.toolsUnavailable.set(t1.name, t1);
                return;
            }
        }
        this.toolsAvailable.set(t1.name, t1);
    }
    /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */ toolPrepareMethodFallback(e) {
        this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
    }
    /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */ getListOfPrepareFunctions(e) {
        const t1 = [];
        return Object.entries(e).forEach(([o, i])=>{
            t1.push({
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                function: D(i.class.prepare) ? i.class.prepare : ()=>{},
                data: {
                    toolName: o,
                    config: i.config
                }
            });
        }), t1;
    }
    /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */ prepareBlockTools() {
        Array.from(this.blockTools.values()).forEach((e)=>{
            this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
        });
    }
    /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */ assignInlineToolsToBlockTool(e) {
        if (this.config.inlineToolbar !== !1) {
            if (e.enabledInlineTools === !0) {
                e.inlineTools = new U(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t1)=>[
                        t1,
                        this.inlineTools.get(t1)
                    ]) : Array.from(this.inlineTools.entries()));
                return;
            }
            Array.isArray(e.enabledInlineTools) && (e.inlineTools = new U(e.enabledInlineTools.map((t1)=>[
                    t1,
                    this.inlineTools.get(t1)
                ])));
        }
    }
    /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */ assignBlockTunesToBlockTool(e) {
        if (e.enabledBlockTunes !== !1) {
            if (Array.isArray(e.enabledBlockTunes)) {
                const t1 = new U(e.enabledBlockTunes.map((o)=>[
                        o,
                        this.blockTunes.get(o)
                    ]));
                e.tunes = new U([
                    ...t1,
                    ...this.blockTunes.internalTools
                ]);
                return;
            }
            if (Array.isArray(this.config.tunes)) {
                const t1 = new U(this.config.tunes.map((o)=>[
                        o,
                        this.blockTunes.get(o)
                    ]));
                e.tunes = new U([
                    ...t1,
                    ...this.blockTunes.internalTools
                ]);
                return;
            }
            e.tunes = this.blockTunes.internalTools;
        }
    }
    /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */ validateTools() {
        for(const e in this.config.tools)if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
            if (e in this.internalTools) return;
            const t1 = this.config.tools[e];
            if (!D(t1) && !D(t1.class)) throw Error(`Tool «${e}» must be a constructor function or an object with function in the «class» property`);
        }
    }
    /**
   * Unify tools config
   */ prepareConfig() {
        const e = {};
        for(const t1 in this.config.tools)j(this.config.tools[t1]) ? e[t1] = this.config.tools[t1] : e[t1] = {
            class: this.config.tools[t1]
        };
        return e;
    }
}
ci([
    ae
], St.prototype, "getAllInlineToolsSanitizeConfig", 1);
const di = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s infinite linear;animation:editor-loader-spin .8s infinite linear;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;-webkit-transform:translateX(-50%) translateY(8px) scale(.94);transform:translate(-50%) translateY(8px) scale(.94);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translate(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.94);transform:translate(-23px) translateY(8px) scale(.94)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translate(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.94);transform:translate(-100%) translateY(8px) scale(.94);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translate(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width: 651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
class hi extends S {
    constructor(){
        super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = Pt(()=>{
            this.windowResize();
        }, 200);
    }
    /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */ get CSS() {
        return {
            editorWrapper: "codex-editor",
            editorWrapperNarrow: "codex-editor--narrow",
            editorZone: "codex-editor__redactor",
            editorZoneHidden: "codex-editor__redactor--hidden",
            editorLoader: "codex-editor__loader",
            editorEmpty: "codex-editor--empty",
            editorRtlFix: "codex-editor--rtl"
        };
    }
    /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */ get contentRect() {
        if (this.contentRectCache) return this.contentRectCache;
        const e = this.nodes.wrapper.querySelector(`.${F.CSS.content}`);
        return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
            width: 650,
            left: 0,
            right: 0
        };
    }
    /**
   * Adds loader to editor while content is not ready
   */ addLoader() {
        this.nodes.loader = d.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
    }
    /**
   * Removes loader when content has loaded
   */ removeLoader() {
        this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
    }
    /**
   * Making main interface
   */ async prepare() {
        this.checkIsMobile(), this.make(), this.addLoader(), this.loadStyles();
    }
    /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */ toggleReadOnly(e) {
        e ? this.disableModuleBindings() : this.enableModuleBindings();
    }
    /**
   * Check if Editor is empty and set CSS class to wrapper
   */ checkEmptiness() {
        const { BlockManager: e  } = this.Editor;
        this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
    }
    /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */ get someToolbarOpened() {
        const { Toolbar: e , BlockSettings: t1 , InlineToolbar: o , ConversionToolbar: i  } = this.Editor;
        return t1.opened || o.opened || i.opened || e.toolbox.opened;
    }
    /**
   * Check for some Flipper-buttons is under focus
   */ get someFlipperButtonFocused() {
        return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t1])=>t1.flipper instanceof G).some(([e, t1])=>t1.flipper.hasFocus());
    }
    /**
   * Clean editor`s UI
   */ destroy() {
        this.nodes.holder.innerHTML = "";
    }
    /**
   * Close all Editor's toolbars
   */ closeAllToolbars() {
        const { Toolbar: e , BlockSettings: t1 , InlineToolbar: o , ConversionToolbar: i  } = this.Editor;
        t1.close(), o.close(), i.close(), e.toolbox.close();
    }
    /**
   * Check for mobile mode and cache a result
   */ checkIsMobile() {
        this.isMobile = window.innerWidth < st;
    }
    /**
   * Makes Editor.js interface
   */ make() {
        this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [
            this.CSS.editorWrapper,
            ...this.isRtl ? [
                this.CSS.editorRtlFix
            ] : []
        ]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
    }
    /**
   * Appends CSS
   */ loadStyles() {
        const e = "editor-js-styles";
        if (d.get(e)) return;
        const t1 = d.make("style", null, {
            id: e,
            textContent: di.toString()
        });
        d.prepend(document.head, t1);
    }
    /**
   * Bind events on the Editor.js interface
   */ enableModuleBindings() {
        this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (e)=>{
            this.redactorClicked(e);
        }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (e)=>{
            this.documentTouched(e);
        }, !0), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (e)=>{
            this.documentTouched(e);
        }, !0), this.readOnlyMutableListeners.on(document, "keydown", (e)=>{
            this.documentKeydown(e);
        }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (e)=>{
            this.documentClicked(e);
        }, !0), this.readOnlyMutableListeners.on(document, "selectionchange", ()=>{
            this.selectionChanged();
        }, !0), this.readOnlyMutableListeners.on(window, "resize", ()=>{
            this.resizeDebouncer();
        }, {
            passive: !0
        }), this.watchBlockHoveredEvents();
    }
    /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */ watchBlockHoveredEvents() {
        let e;
        this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Te((t1)=>{
            const o = t1.target.closest(".ce-block");
            this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(mt, {
                block: this.Editor.BlockManager.getBlockByChildNode(o)
            }));
        }, 20), {
            passive: !0
        });
    }
    /**
   * Unbind events on the Editor.js interface
   */ disableModuleBindings() {
        this.readOnlyMutableListeners.clearAll();
    }
    /**
   * Resize window handler
   */ windowResize() {
        this.contentRectCache = null, this.checkIsMobile();
    }
    /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */ documentKeydown(e) {
        switch(e.keyCode){
            case B.ENTER:
                this.enterPressed(e);
                break;
            case B.BACKSPACE:
                this.backspacePressed(e);
                break;
            case B.ESC:
                this.escapePressed(e);
                break;
            default:
                this.defaultBehaviour(e);
                break;
        }
    }
    /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */ defaultBehaviour(e) {
        const { currentBlock: t1  } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
        if (t1 !== void 0 && o === null) {
            this.Editor.BlockEvents.keydown(e);
            return;
        }
        o || t1 && i || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    }
    /**
   * @param {KeyboardEvent} event - keyboard event
   */ backspacePressed(e) {
        const { BlockManager: t1 , BlockSelection: o , Caret: i  } = this.Editor;
        if (o.anyBlockSelected && !m.isSelectionExists) {
            const n = t1.removeSelectedBlocks();
            i.setToBlock(t1.insertDefaultBlockAtIndex(n, !0), i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
        }
    }
    /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */ escapePressed(e) {
        this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
    }
    /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */ enterPressed(e) {
        const { BlockManager: t1 , BlockSelection: o  } = this.Editor, i = t1.currentBlockIndex >= 0;
        if (o.anyBlockSelected && !m.isSelectionExists) {
            o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
            return;
        }
        if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
            const n = this.Editor.BlockManager.insert();
            this.Editor.Caret.setToBlock(n), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(n);
        }
        this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */ documentClicked(e) {
        if (!e.isTrusted) return;
        const t1 = e.target;
        this.nodes.holder.contains(t1) || m.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
        const i = this.Editor.BlockSettings.nodes.wrapper.contains(t1), n = this.Editor.Toolbar.nodes.settingsToggler.contains(t1), r = i || n;
        if (this.Editor.BlockSettings.opened && !r) {
            this.Editor.BlockSettings.close();
            const a = this.Editor.BlockManager.getBlockByChildNode(t1);
            this.Editor.Toolbar.moveAndOpen(a);
        }
        this.Editor.BlockSelection.clearSelection(e);
    }
    /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */ documentTouched(e) {
        let t1 = e.target;
        if (t1 === this.nodes.redactor) {
            const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
            t1 = document.elementFromPoint(o, i);
        }
        try {
            this.Editor.BlockManager.setCurrentBlockByChildNode(t1), this.Editor.BlockManager.highlightCurrentNode();
        } catch  {
            this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
        }
        this.Editor.Toolbar.moveAndOpen();
    }
    /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */ redactorClicked(e) {
        const { BlockSelection: t1  } = this.Editor;
        if (!m.isCollapsed) return;
        const o = ()=>{
            e.stopImmediatePropagation(), e.stopPropagation();
        }, i = e.target, n = e.metaKey || e.ctrlKey;
        if (d.isAnchor(i) && n) {
            o();
            const u = i.getAttribute("href"), h = Ht(u);
            jt(h);
            return;
        }
        const r = this.Editor.BlockManager.getBlockByIndex(-1), a = d.offset(r.holder).bottom, l = e.pageY;
        if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */ !t1.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */ a < l) {
            o();
            const { BlockManager: u , Caret: h , Toolbar: f  } = this.Editor;
            (!u.lastBlock.tool.isDefault || !u.lastBlock.isEmpty) && u.insertAtEnd(), h.setToTheLastBlock(), f.moveAndOpen(u.lastBlock);
        }
    }
    /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */ selectionChanged() {
        const { CrossBlockSelection: e , BlockSelection: t1  } = this.Editor, o = m.anchorElement;
        if (e.isCrossBlockSelectionStarted && t1.anyBlockSelected && m.get().removeAllRanges(), !o) {
            m.range || this.Editor.InlineToolbar.close();
            return;
        }
        const i = o.closest(`.${F.CSS.content}`) === null;
        if (i && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true"))) return;
        this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
        const n = i !== !0;
        this.Editor.InlineToolbar.tryToShow(!0, n);
    }
}
const ui = {
    // API Modules
    BlocksAPI: Zt,
    CaretAPI: Gt,
    EventsAPI: qt,
    I18nAPI: De,
    API: Jt,
    InlineToolbarAPI: Qt,
    ListenersAPI: eo,
    NotifierAPI: no,
    ReadOnlyAPI: so,
    SanitizerAPI: po,
    SaverAPI: fo,
    SelectionAPI: go,
    StylesAPI: bo,
    ToolbarAPI: mo,
    TooltipAPI: xo,
    UiAPI: wo,
    // Toolbar Modules
    BlockSettings: Ro,
    ConversionToolbar: Y,
    Toolbar: jo,
    InlineToolbar: Uo,
    // Modules
    BlockEvents: $o,
    BlockManager: Ko,
    BlockSelection: Xo,
    Caret: ve,
    CrossBlockSelection: Vo,
    DragNDrop: Zo,
    ModificationsObserver: Go,
    Paste: wt,
    ReadOnly: qo,
    RectangleSelection: pe,
    Renderer: Jo,
    Saver: Qo,
    Tools: St,
    UI: hi
};
class pi {
    /**
   * @param {EditorConfig} config - user configuration
   */ constructor(e){
        this.moduleInstances = {}, this.eventsDispatcher = new we();
        let t1, o;
        this.isReady = new Promise((i, n)=>{
            t1 = i, o = n;
        }), Promise.resolve().then(async ()=>{
            this.configuration = e, await this.validate(), await this.init(), await this.start(), K("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout(async ()=>{
                if (await this.render(), this.configuration.autofocus) {
                    const { BlockManager: i , Caret: n  } = this.moduleInstances;
                    n.setToBlock(i.blocks[0], n.positions.START), i.highlightCurrentNode();
                }
                this.moduleInstances.UI.removeLoader(), t1();
            }, 500);
        }).catch((i)=>{
            T(`Editor.js is not ready because of ${i}`, "error"), o(i);
        });
    }
    /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */ set configuration(e) {
        var o, i;
        j(e) ? this.config = {
            ...e
        } : this.config = {
            holder: e
        }, Ie(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = et.VERBOSE), At(this.config.logLevel), Ie(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
        const t1 = {
            type: this.config.defaultBlock,
            data: {}
        };
        this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
            p: !0,
            b: !0,
            a: !0
        }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || {
            blocks: []
        }, this.config.onReady = this.config.onReady || (()=>{}), this.config.onChange = this.config.onChange || (()=>{}), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = {
            blocks: [
                t1
            ]
        }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && $.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
    }
    /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */ get configuration() {
        return this.config;
    }
    /**
   * Checks for required fields in Editor's config
   *
   * @returns {Promise<void>}
   */ async validate() {
        const { holderId: e , holder: t1  } = this.config;
        if (e && t1) throw Error("\xabholderId\xbb and \xabholder\xbb param can't assign at the same time.");
        if (J(t1) && !d.get(t1)) throw Error(`element with ID «${t1}» is missing. Pass correct holder's ID.`);
        if (t1 && j(t1) && !d.isElement(t1)) throw Error("\xabholder\xbb value must be an Element node");
    }
    /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */ init() {
        this.constructModules(), this.configureModules();
    }
    /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */ async start() {
        await [
            "Tools",
            "UI",
            "BlockManager",
            "Paste",
            "BlockSelection",
            "RectangleSelection",
            "CrossBlockSelection",
            "ReadOnly"
        ].reduce((t1, o)=>t1.then(async ()=>{
                try {
                    await this.moduleInstances[o].prepare();
                } catch (i) {
                    if (i instanceof at) throw new Error(i.message);
                    T(`Module ${o} was skipped because of %o`, "warn", i);
                }
            }), Promise.resolve());
    }
    /**
   * Render initial data
   */ render() {
        return this.moduleInstances.Renderer.render(this.config.data.blocks);
    }
    /**
   * Make modules instances and save it to the @property this.moduleInstances
   */ constructModules() {
        Object.entries(ui).forEach(([e, t1])=>{
            try {
                this.moduleInstances[e] = new t1({
                    config: this.configuration,
                    eventsDispatcher: this.eventsDispatcher
                });
            } catch (o) {
                T("[constructModules]", `Module ${e} skipped because`, "error", o);
            }
        });
    }
    /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */ configureModules() {
        for(const e in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
    }
    /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */ getModulesDiff(e) {
        const t1 = {};
        for(const o in this.moduleInstances)o !== e && (t1[o] = this.moduleInstances[o]);
        return t1;
    }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */ class fi {
    /** Editor version */ static get version() {
        return "2.27.2";
    }
    /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */ constructor(e){
        let t1 = ()=>{};
        j(e) && D(e.onReady) && (t1 = e.onReady);
        const o = new pi(e);
        this.isReady = o.isReady.then(()=>{
            this.exportAPI(o), t1();
        });
    }
    /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */ exportAPI(e) {
        const t1 = [
            "configuration"
        ], o = ()=>{
            Object.values(e.moduleInstances).forEach((n)=>{
                D(n.destroy) && n.destroy(), n.listeners.removeAll();
            }), e = null;
            for(const n in this)Object.prototype.hasOwnProperty.call(this, n) && delete this[n];
            Object.setPrototypeOf(this, null);
        };
        t1.forEach((n)=>{
            this[n] = e[n];
        }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
            blocks: {
                clear: "clear",
                render: "render"
            },
            caret: {
                focus: "focus"
            },
            events: {
                on: "on",
                off: "off",
                emit: "emit"
            },
            saver: {
                save: "save"
            }
        }).forEach(([n, r])=>{
            Object.entries(r).forEach(([a, l])=>{
                this[l] = e.moduleInstances.API.methods[n][a];
            });
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kkSVA":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var o in e)n.d(r, o, (function(t) {
                return e[t];
            }).bind(null, o));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/", n(n.s = 5);
    }([
        function(e, t, n) {
            var r = n(1);
            "string" == typeof r && (r = [
                [
                    e.i,
                    r,
                    ""
                ]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n(3)(r, o);
            r.locals && (e.exports = r.locals);
        },
        function(e, t, n) {
            (e.exports = n(2)(!1)).push([
                e.i,
                "/**\n * Plugin styles\n */\n.ce-header {\n  padding: 0.6em 0 3px;\n  margin: 0;\n  line-height: 1.25em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n  cursor: text;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n",
                ""
            ]);
        },
        function(e, t) {
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n = e[1] || "", r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), i = r.sources.map(function(e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */";
                                });
                                return [
                                    n
                                ].concat(i).concat([
                                    o
                                ]).join("\n");
                            }
                            var a;
                            return [
                                n
                            ].join("\n");
                        }(t, e);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                    }).join("");
                }, t.i = function(e, n) {
                    "string" == typeof e && (e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ]);
                    for(var r = {}, o = 0; o < this.length; o++){
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0);
                    }
                    for(o = 0; o < e.length; o++){
                        var a = e[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
                    }
                }, t;
            };
        },
        function(e, t, n) {
            var r, o, i = {}, a = (r = function() {
                return window && document && document.all && !window.atob;
            }, function() {
                return void 0 === o && (o = r.apply(this, arguments)), o;
            }), s = function(e) {
                return document.querySelector(e);
            }, l = function(e) {
                var t = {};
                return function(e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = s.call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (e) {
                            n = null;
                        }
                        t[e] = n;
                    }
                    return t[e];
                };
            }(), u = null, c = 0, f = [], d = n(4);
            function p(e, t) {
                for(var n = 0; n < e.length; n++){
                    var r = e[n], o = i[r.id];
                    if (o) {
                        o.refs++;
                        for(var a = 0; a < o.parts.length; a++)o.parts[a](r.parts[a]);
                        for(; a < r.parts.length; a++)o.parts.push(y(r.parts[a], t));
                    } else {
                        var s = [];
                        for(a = 0; a < r.parts.length; a++)s.push(y(r.parts[a], t));
                        i[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        };
                    }
                }
            }
            function h(e, t) {
                for(var n = [], r = {}, o = 0; o < e.length; o++){
                    var i = e[o], a = t.base ? i[0] + t.base : i[0], s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                    r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                        id: a,
                        parts: [
                            s
                        ]
                    });
                }
                return n;
            }
            function v(e, t) {
                var n = l(e.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = f[f.length - 1];
                if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), f.push(t);
                else if ("bottom" === e.insertAt) n.appendChild(t);
                else {
                    if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = l(e.insertInto + " " + e.insertAt.before);
                    n.insertBefore(t, o);
                }
            }
            function g(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var t = f.indexOf(e);
                t >= 0 && f.splice(t, 1);
            }
            function b(e) {
                var t = document.createElement("style");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), v(e, t), t;
            }
            function m(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.setAttribute(n, t[n]);
                });
            }
            function y(e, t) {
                var n, r, o, i;
                if (t.transform && e.css) {
                    if (!(i = t.transform(e.css))) return function() {};
                    e.css = i;
                }
                if (t.singleton) {
                    var a = c++;
                    n = u || (u = b(t)), r = L.bind(null, n, a, !1), o = L.bind(null, n, a, !0);
                } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                    var t = document.createElement("link");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), v(e, t), t;
                }(t), r = x.bind(null, n, t), o = function() {
                    g(n), n.href && URL.revokeObjectURL(n.href);
                }) : (n = b(t), r = M.bind(null, n), o = function() {
                    g(n);
                });
                return r(e), function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t);
                    } else o();
                };
            }
            e.exports = function(e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var n = h(e, t);
                return p(n, t), function(e) {
                    for(var r = [], o = 0; o < n.length; o++){
                        var a = n[o];
                        (s = i[a.id]).refs--, r.push(s);
                    }
                    e && p(h(e, t), t);
                    for(o = 0; o < r.length; o++){
                        var s;
                        if (0 === (s = r[o]).refs) {
                            for(var l = 0; l < s.parts.length; l++)s.parts[l]();
                            delete i[s.id];
                        }
                    }
                };
            };
            var w, k = (w = [], function(e, t) {
                return w[e] = t, w.filter(Boolean).join("\n");
            });
            function L(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = k(t, o);
                else {
                    var i = document.createTextNode(o), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function M(e, t) {
                var n = t.css, r = t.media;
                if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for(; e.firstChild;)e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }
            function x(e, t, n) {
                var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || i) && (r = d(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([
                    r
                ], {
                    type: "text/css"
                }), s = e.href;
                e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
            }
        },
        function(e, t) {
            e.exports = function(e) {
                var t = "undefined" != typeof window && window.location;
                if (!t) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                    var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                        return t;
                    }).replace(/^'(.*)'$/, function(e, t) {
                        return t;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
                });
            };
        },
        function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return i;
            });
            n(0);
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e);
            }
            function o(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            /**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */ var i = function() {
                function e(t) {
                    var n = t.data, r = t.config, o = t.api, i = t.readOnly;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this.api = o, this.readOnly = i, this._CSS = {
                        block: this.api.styles.block,
                        wrapper: "ce-header"
                    }, this._settings = r, this._data = this.normalizeData(n), this._element = this.getTag();
                }
                var t, n, i;
                return t = e, i = [
                    {
                        key: "conversionConfig",
                        get: function() {
                            return {
                                export: "text",
                                import: "text"
                            };
                        }
                    },
                    {
                        key: "sanitize",
                        get: function() {
                            return {
                                level: !1,
                                text: {}
                            };
                        }
                    },
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "pasteConfig",
                        get: function() {
                            return {
                                tags: [
                                    "H1",
                                    "H2",
                                    "H3",
                                    "H4",
                                    "H5",
                                    "H6"
                                ]
                            };
                        }
                    },
                    {
                        key: "toolbox",
                        get: function() {
                            return {
                                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>',
                                title: "Heading"
                            };
                        }
                    }
                ], n = [
                    {
                        key: "normalizeData",
                        value: function(e) {
                            var t = {};
                            return "object" !== r(e) && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            return this._element;
                        }
                    },
                    {
                        key: "renderSettings",
                        value: function() {
                            var e = this;
                            return this.levels.map(function(t) {
                                return {
                                    icon: t.svg,
                                    label: e.api.i18n.t("Heading ".concat(t.number)),
                                    onActivate: function() {
                                        return e.setLevel(t.number);
                                    },
                                    closeOnActivate: !0,
                                    isActive: e.currentLevel.number === t.number
                                };
                            });
                        }
                    },
                    {
                        key: "setLevel",
                        value: function(e) {
                            this.data = {
                                level: e,
                                text: this.data.text
                            };
                        }
                    },
                    {
                        key: "merge",
                        value: function(e) {
                            var t = {
                                text: this.data.text + e.text,
                                level: this.data.level
                            };
                            this.data = t;
                        }
                    },
                    {
                        key: "validate",
                        value: function(e) {
                            return "" !== e.text.trim();
                        }
                    },
                    {
                        key: "save",
                        value: function(e) {
                            return {
                                text: e.innerHTML,
                                level: this.currentLevel.number
                            };
                        }
                    },
                    {
                        key: "getTag",
                        value: function() {
                            var e = document.createElement(this.currentLevel.tag);
                            return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
                        }
                    },
                    {
                        key: "onPaste",
                        value: function(e) {
                            var t = e.detail.data, n = this.defaultLevel.number;
                            switch(t.tagName){
                                case "H1":
                                    n = 1;
                                    break;
                                case "H2":
                                    n = 2;
                                    break;
                                case "H3":
                                    n = 3;
                                    break;
                                case "H4":
                                    n = 4;
                                    break;
                                case "H5":
                                    n = 5;
                                    break;
                                case "H6":
                                    n = 6;
                            }
                            this._settings.levels && (n = this._settings.levels.reduce(function(e, t) {
                                return Math.abs(t - n) < Math.abs(e - n) ? t : e;
                            })), this.data = {
                                level: n,
                                text: t.innerHTML
                            };
                        }
                    },
                    {
                        key: "data",
                        get: function() {
                            return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
                        },
                        set: function(e) {
                            if (this._data = this.normalizeData(e), void 0 !== e.level && this._element.parentNode) {
                                var t = this.getTag();
                                t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
                            }
                            void 0 !== e.text && (this._element.innerHTML = this._data.text || "");
                        }
                    },
                    {
                        key: "currentLevel",
                        get: function() {
                            var e = this, t = this.levels.find(function(t) {
                                return t.number === e._data.level;
                            });
                            return t || (t = this.defaultLevel), t;
                        }
                    },
                    {
                        key: "defaultLevel",
                        get: function() {
                            var e = this;
                            if (this._settings.defaultLevel) {
                                var t = this.levels.find(function(t) {
                                    return t.number === e._settings.defaultLevel;
                                });
                                if (t) return t;
                                console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
                            }
                            return this.levels[1];
                        }
                    },
                    {
                        key: "levels",
                        get: function() {
                            var e = this, t = [
                                {
                                    number: 1,
                                    tag: "H1",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>'
                                },
                                {
                                    number: 2,
                                    tag: "H2",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>'
                                },
                                {
                                    number: 3,
                                    tag: "H3",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>'
                                },
                                {
                                    number: 4,
                                    tag: "H4",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>'
                                },
                                {
                                    number: 5,
                                    tag: "H5",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>'
                                },
                                {
                                    number: 6,
                                    tag: "H6",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>'
                                }
                            ];
                            return this._settings.levels ? t.filter(function(t) {
                                return e._settings.levels.includes(t.number);
                            }) : t;
                        }
                    }
                ], o(t.prototype, n), i && o(t, i), e;
            }();
        }
    ]).default;
});

},{}],"1ChUe":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var i in e)n.d(r, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/", n(n.s = 4);
    }([
        function(e, t, n) {
            var r = n(1), i = n(2);
            "string" == typeof (i = i.__esModule ? i.default : i) && (i = [
                [
                    e.i,
                    i,
                    ""
                ]
            ]);
            var o = {
                insert: "head",
                singleton: !1
            };
            r(i, o);
            e.exports = i.locals || {};
        },
        function(e, t, n) {
            "use strict";
            var r, i = function() {
                return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
            }, o = function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (e) {
                            n = null;
                        }
                        e[t] = n;
                    }
                    return e[t];
                };
            }(), a = [];
            function s(e) {
                for(var t = -1, n = 0; n < a.length; n++)if (a[n].identifier === e) {
                    t = n;
                    break;
                }
                return t;
            }
            function c(e, t) {
                for(var n = {}, r = [], i = 0; i < e.length; i++){
                    var o = e[i], c = t.base ? o[0] + t.base : o[0], l = n[c] || 0, u = "".concat(c, " ").concat(l);
                    n[c] = l + 1;
                    var d = s(u), f = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    -1 !== d ? (a[d].references++, a[d].updater(f)) : a.push({
                        identifier: u,
                        updater: y(f, t),
                        references: 1
                    }), r.push(u);
                }
                return r;
            }
            function l(e) {
                var t = document.createElement("style"), r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var i = n.nc;
                    i && (r.nonce = i);
                }
                if (Object.keys(r).forEach(function(e) {
                    t.setAttribute(e, r[e]);
                }), "function" == typeof e.insert) e.insert(t);
                else {
                    var a = o(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var u, d = (u = [], function(e, t) {
                return u[e] = t, u.filter(Boolean).join("\n");
            });
            function f(e, t, n, r) {
                var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = d(t, i);
                else {
                    var o = document.createTextNode(i), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
                }
            }
            function p(e, t, n) {
                var r = n.css, i = n.media, o = n.sourceMap;
                if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), o && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
                else {
                    for(; e.firstChild;)e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var h = null, m = 0;
            function y(e, t) {
                var n, r, i;
                if (t.singleton) {
                    var o = m++;
                    n = h || (h = l(t)), r = f.bind(null, n, o, !1), i = f.bind(null, n, o, !0);
                } else n = l(t), r = p.bind(null, n, t), i = function() {
                    !function(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                    }(n);
                };
                return r(e), function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t);
                    } else i();
                };
            }
            e.exports = function(e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
                var n = c(e = e || [], t);
                return function(e) {
                    if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                        for(var r = 0; r < n.length; r++){
                            var i = s(n[r]);
                            a[i].references--;
                        }
                        for(var o = c(e, t), l = 0; l < n.length; l++){
                            var u = s(n[l]);
                            0 === a[u].references && (a[u].updater(), a.splice(u, 1));
                        }
                        n = o;
                    }
                };
            };
        },
        function(e, t, n) {
            (t = n(3)(!1)).push([
                e.i,
                ".cdx-list {\n    margin: 0;\n    padding-left: 40px;\n    outline: none;\n}\n\n    .cdx-list__item {\n        padding: 5.5px 0 5.5px 3px;\n        line-height: 1.6em;\n    }\n\n    .cdx-list--unordered {\n        list-style: disc;\n    }\n\n    .cdx-list--ordered {\n        list-style: decimal;\n    }\n\n    .cdx-list-settings {\n        display: flex;\n    }\n\n    .cdx-list-settings .cdx-settings-button {\n            width: 50%;\n        }\n",
                ""
            ]), e.exports = t;
        },
        function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n = e[1] || "", r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var i = (a = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(c, " */")), o = r.sources.map(function(e) {
                                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                });
                                return [
                                    n
                                ].concat(o).concat([
                                    i
                                ]).join("\n");
                            }
                            var a, s, c;
                            return [
                                n
                            ].join("\n");
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                    }).join("");
                }, t.i = function(e, n, r) {
                    "string" == typeof e && (e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ]);
                    var i = {};
                    if (r) for(var o = 0; o < this.length; o++){
                        var a = this[o][0];
                        null != a && (i[a] = !0);
                    }
                    for(var s = 0; s < e.length; s++){
                        var c = [].concat(e[s]);
                        r && i[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c));
                    }
                }, t;
            };
        },
        function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return d;
            });
            n(0);
            const r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>';
            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            }
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function s(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function l(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function u(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), e;
            }
            var d = function() {
                function e(t) {
                    var n = t.data, i = t.config, o = t.api, a = t.readOnly;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this._elements = {
                        wrapper: null
                    }, this.api = o, this.readOnly = a, this.settings = [
                        {
                            name: "unordered",
                            label: this.api.i18n.t("Unordered"),
                            icon: r,
                            default: "unordered" === i.defaultStyle || !1
                        },
                        {
                            name: "ordered",
                            label: this.api.i18n.t("Ordered"),
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>',
                            default: "ordered" === i.defaultStyle || !0
                        }
                    ], this._data = {
                        style: this.settings.find(function(e) {
                            return !0 === e.default;
                        }).name,
                        items: []
                    }, this.data = n;
                }
                return u(e, null, [
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "enableLineBreaks",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "toolbox",
                        get: function() {
                            return {
                                icon: r,
                                title: "List"
                            };
                        }
                    }
                ]), u(e, [
                    {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this._elements.wrapper = this.makeMainTag(this._data.style), this._data.items.length ? this._data.items.forEach(function(t) {
                                e._elements.wrapper.appendChild(e._make("li", e.CSS.item, {
                                    innerHTML: t
                                }));
                            }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this.readOnly || this._elements.wrapper.addEventListener("keydown", function(t) {
                                switch(t.keyCode){
                                    case 13:
                                        e.getOutofList(t);
                                        break;
                                    case 8:
                                        e.backspace(t);
                                }
                            }, !1), this._elements.wrapper;
                        }
                    },
                    {
                        key: "save",
                        value: function() {
                            return this.data;
                        }
                    },
                    {
                        key: "renderSettings",
                        value: function() {
                            var e = this;
                            return this.settings.map(function(t) {
                                return s(s({}, t), {}, {
                                    isActive: e._data.style === t.name,
                                    closeOnActivate: !0,
                                    onActivate: function() {
                                        return e.toggleTune(t.name);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "onPaste",
                        value: function(e) {
                            var t = e.detail.data;
                            this.data = this.pasteHandler(t);
                        }
                    },
                    {
                        key: "makeMainTag",
                        value: function(e) {
                            var t = "ordered" === e ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, n = "ordered" === e ? "ol" : "ul";
                            return this._make(n, [
                                this.CSS.baseBlock,
                                this.CSS.wrapper,
                                t
                            ], {
                                contentEditable: !this.readOnly
                            });
                        }
                    },
                    {
                        key: "toggleTune",
                        value: function(e) {
                            for(var t = this.makeMainTag(e); this._elements.wrapper.hasChildNodes();)t.appendChild(this._elements.wrapper.firstChild);
                            this._elements.wrapper.replaceWith(t), this._elements.wrapper = t, this._data.style = e;
                        }
                    },
                    {
                        key: "_make",
                        value: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = document.createElement(e);
                            Array.isArray(n) ? (t = o.classList).add.apply(t, i(n)) : n && o.classList.add(n);
                            for(var a in r)o[a] = r[a];
                            return o;
                        }
                    },
                    {
                        key: "getOutofList",
                        value: function(e) {
                            var t = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
                            if (!(t.length < 2)) {
                                var n = t[t.length - 1], r = this.currentItem;
                                r !== n || n.textContent.trim().length || (r.parentElement.removeChild(r), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e.preventDefault(), e.stopPropagation());
                            }
                        }
                    },
                    {
                        key: "backspace",
                        value: function(e) {
                            var t = this._elements.wrapper.querySelectorAll("." + this.CSS.item), n = t[0];
                            n && t.length < 2 && !n.innerHTML.replace("<br>", " ").trim() && e.preventDefault();
                        }
                    },
                    {
                        key: "selectItem",
                        value: function(e) {
                            e.preventDefault();
                            var t = window.getSelection(), n = t.anchorNode.parentNode.closest("." + this.CSS.item), r = new Range;
                            r.selectNodeContents(n), t.removeAllRanges(), t.addRange(r);
                        }
                    },
                    {
                        key: "pasteHandler",
                        value: function(e) {
                            var t, n = e.tagName;
                            switch(n){
                                case "OL":
                                    t = "ordered";
                                    break;
                                case "UL":
                                case "LI":
                                    t = "unordered";
                            }
                            var r = {
                                style: t,
                                items: []
                            };
                            if ("LI" === n) r.items = [
                                e.innerHTML
                            ];
                            else {
                                var i = Array.from(e.querySelectorAll("LI"));
                                r.items = i.map(function(e) {
                                    return e.innerHTML;
                                }).filter(function(e) {
                                    return !!e.trim();
                                });
                            }
                            return r;
                        }
                    },
                    {
                        key: "CSS",
                        get: function() {
                            return {
                                baseBlock: this.api.styles.block,
                                wrapper: "cdx-list",
                                wrapperOrdered: "cdx-list--ordered",
                                wrapperUnordered: "cdx-list--unordered",
                                item: "cdx-list__item"
                            };
                        }
                    },
                    {
                        key: "data",
                        set: function(e) {
                            e || (e = {}), this._data.style = e.style || this.settings.find(function(e) {
                                return !0 === e.default;
                            }).name, this._data.items = e.items || [];
                            var t = this._elements.wrapper;
                            t && t.parentNode.replaceChild(this.render(), t);
                        },
                        get: function() {
                            this._data.items = [];
                            for(var e = this._elements.wrapper.querySelectorAll(".".concat(this.CSS.item)), t = 0; t < e.length; t++)e[t].innerHTML.replace("<br>", " ").trim() && this._data.items.push(e[t].innerHTML);
                            return this._data;
                        }
                    },
                    {
                        key: "currentItem",
                        get: function() {
                            var e = window.getSelection().anchorNode;
                            return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(".".concat(this.CSS.item));
                        }
                    }
                ], [
                    {
                        key: "conversionConfig",
                        get: function() {
                            return {
                                export: function(e) {
                                    return e.items.join(". ");
                                },
                                import: function(e) {
                                    return {
                                        items: [
                                            e
                                        ],
                                        style: "unordered"
                                    };
                                }
                            };
                        }
                    },
                    {
                        key: "sanitize",
                        get: function() {
                            return {
                                style: {},
                                items: {
                                    br: !0
                                }
                            };
                        }
                    },
                    {
                        key: "pasteConfig",
                        get: function() {
                            return {
                                tags: [
                                    "OL",
                                    "UL",
                                    "LI"
                                ]
                            };
                        }
                    }
                ]), e;
            }();
        }
    ]).default;
});

},{}],"4qeqT":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var i in e)n.d(r, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/", n(n.s = 14);
    }([
        function(e, t, n) {
            var r = n(5), i = n(6), o = n(7), a = n(9);
            e.exports = function(e, t) {
                return r(e) || i(e, t) || o(e, t) || a();
            };
        },
        function(e, t) {
            function n(t) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
                    return typeof e;
                } : e.exports = n = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, n(t);
            }
            e.exports = n;
        },
        function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function(e, t) {
            function n(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            e.exports = function(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e;
            };
        },
        function(e, t) {
            function n(e, t, n) {
                var r, i, o, a, l;
                function c() {
                    var s = Date.now() - a;
                    s < t && s >= 0 ? r = setTimeout(c, t - s) : (r = null, n || (l = e.apply(o, i), o = i = null));
                }
                null == t && (t = 100);
                var s = function() {
                    o = this, i = arguments, a = Date.now();
                    var s = n && !r;
                    return r || (r = setTimeout(c, t)), s && (l = e.apply(o, i), o = i = null), l;
                };
                return s.clear = function() {
                    r && (clearTimeout(r), r = null);
                }, s.flush = function() {
                    r && (l = e.apply(o, i), o = i = null, clearTimeout(r), r = null);
                }, s;
            }
            n.debounce = n, e.exports = n;
        },
        function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e;
            };
        },
        function(e, t) {
            e.exports = function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [], r = !0, i = !1, o = void 0;
                    try {
                        for(var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e;
                    } finally{
                        try {
                            r || null == l.return || l.return();
                        } finally{
                            if (i) throw o;
                        }
                    }
                    return n;
                }
            };
        },
        function(e, t, n) {
            var r = n(8);
            e.exports = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
                }
            };
        },
        function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            };
        },
        function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(e, t, n) {
            var r = n(11), i = n(12);
            "string" == typeof (i = i.__esModule ? i.default : i) && (i = [
                [
                    e.i,
                    i,
                    ""
                ]
            ]);
            var o = {
                insert: "head",
                singleton: !1
            };
            r(i, o);
            e.exports = i.locals || {};
        },
        function(e, t, n) {
            "use strict";
            var r, i = function() {
                return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
            }, o = function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (e) {
                            n = null;
                        }
                        e[t] = n;
                    }
                    return e[t];
                };
            }(), a = [];
            function l(e) {
                for(var t = -1, n = 0; n < a.length; n++)if (a[n].identifier === e) {
                    t = n;
                    break;
                }
                return t;
            }
            function c(e, t) {
                for(var n = {}, r = [], i = 0; i < e.length; i++){
                    var o = e[i], c = t.base ? o[0] + t.base : o[0], s = n[c] || 0, d = "".concat(c, " ").concat(s);
                    n[c] = s + 1;
                    var u = l(d), h = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    -1 !== u ? (a[u].references++, a[u].updater(h)) : a.push({
                        identifier: d,
                        updater: b(h, t),
                        references: 1
                    }), r.push(d);
                }
                return r;
            }
            function s(e) {
                var t = document.createElement("style"), r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var i = n.nc;
                    i && (r.nonce = i);
                }
                if (Object.keys(r).forEach(function(e) {
                    t.setAttribute(e, r[e]);
                }), "function" == typeof e.insert) e.insert(t);
                else {
                    var a = o(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var d, u = (d = [], function(e, t) {
                return d[e] = t, d.filter(Boolean).join("\n");
            });
            function h(e, t, n, r) {
                var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = u(t, i);
                else {
                    var o = document.createTextNode(i), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
                }
            }
            function m(e, t, n) {
                var r = n.css, i = n.media, o = n.sourceMap;
                if (i ? e.setAttribute("media", i) : e.removeAttribute("media"), o && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
                else {
                    for(; e.firstChild;)e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var f = null, p = 0;
            function b(e, t) {
                var n, r, i;
                if (t.singleton) {
                    var o = p++;
                    n = f || (f = s(t)), r = h.bind(null, n, o, !1), i = h.bind(null, n, o, !0);
                } else n = s(t), r = m.bind(null, n, t), i = function() {
                    !function(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                    }(n);
                };
                return r(e), function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t);
                    } else i();
                };
            }
            e.exports = function(e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
                var n = c(e = e || [], t);
                return function(e) {
                    if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                        for(var r = 0; r < n.length; r++){
                            var i = l(n[r]);
                            a[i].references--;
                        }
                        for(var o = c(e, t), s = 0; s < n.length; s++){
                            var d = l(n[s]);
                            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
                        }
                        n = o;
                    }
                };
            };
        },
        function(e, t, n) {
            (t = n(13)(!1)).push([
                e.i,
                ".embed-tool--loading .embed-tool__caption {\n      display: none;\n    }\n\n    .embed-tool--loading .embed-tool__preloader {\n      display: block;\n    }\n\n    .embed-tool--loading .embed-tool__content {\n      display: none;\n    }\n  .embed-tool__preloader {\n    display: none;\n    position: relative;\n    height: 200px;\n    box-sizing: border-box;\n    border-radius: 5px;\n    border: 1px solid #e6e9eb;\n  }\n  .embed-tool__preloader::before {\n      content: '';\n      position: absolute;\n      z-index: 3;\n      left: 50%;\n      top: 50%;\n      width: 30px;\n      height: 30px;\n      margin-top: -25px;\n      margin-left: -15px;\n      border-radius: 50%;\n      border: 2px solid #cdd1e0;\n      border-top-color: #388ae5;\n      box-sizing: border-box;\n      animation: embed-preloader-spin 2s infinite linear;\n    }\n  .embed-tool__url {\n    position: absolute;\n    bottom: 20px;\n    left: 50%;\n    transform: translateX(-50%);\n    max-width: 250px;\n    color: #7b7e89;\n    font-size: 11px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .embed-tool__content {\n    width: 100%;\n  }\n  .embed-tool__caption {\n    margin-top: 7px;\n  }\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\n         opacity: 1;\n      }\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n        opacity: 0;\n      }\n\n@keyframes embed-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",
                ""
            ]), e.exports = t;
        },
        function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n = e[1] || "", r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var i = (a = r, l = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(c, " */")), o = r.sources.map(function(e) {
                                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                });
                                return [
                                    n
                                ].concat(o).concat([
                                    i
                                ]).join("\n");
                            }
                            var a, l, c;
                            return [
                                n
                            ].join("\n");
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                    }).join("");
                }, t.i = function(e, n, r) {
                    "string" == typeof e && (e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ]);
                    var i = {};
                    if (r) for(var o = 0; o < this.length; o++){
                        var a = this[o][0];
                        null != a && (i[a] = !0);
                    }
                    for(var l = 0; l < e.length; l++){
                        var c = [].concat(e[l]);
                        r && i[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c));
                    }
                }, t;
            };
        },
        function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return m;
            });
            var r = n(1), i = n.n(r), o = n(0), a = n.n(o), l = n(2), c = n.n(l), s = n(3), d = n.n(s), u = {
                vimeo: {
                    regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
                    embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
                    html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
                    height: 320,
                    width: 580
                },
                youtube: {
                    regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
                    embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
                    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
                    height: 320,
                    width: 580,
                    id: function(e) {
                        var t = a()(e, 2), n = t[0], r = t[1];
                        if (!r && n) return n;
                        var i = {
                            start: "start",
                            end: "end",
                            t: "start",
                            time_continue: "start",
                            list: "list"
                        };
                        return r = r.slice(1).split("&").map(function(e) {
                            var t = e.split("="), r = a()(t, 2), o = r[0], l = r[1];
                            return n || "v" !== o ? i[o] ? "LL" === l || l.startsWith("RDMM") || l.startsWith("FL") ? null : "".concat(i[o], "=").concat(l) : null : (n = l, null);
                        }).filter(function(e) {
                            return !!e;
                        }), n + "?" + r.join("&");
                    }
                },
                coub: {
                    regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
                    embedUrl: "https://coub.com/embed/<%= remote_id %>",
                    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
                    height: 320,
                    width: 580
                },
                vine: {
                    regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
                    embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
                    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
                    height: 320,
                    width: 580
                },
                imgur: {
                    regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
                    embedUrl: "http://imgur.com/<%= remote_id %>/embed",
                    html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
                    height: 500,
                    width: 540
                },
                gfycat: {
                    regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
                    embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
                    html: "<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",
                    height: 436,
                    width: 580
                },
                "twitch-channel": {
                    regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
                    embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
                    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
                    height: 366,
                    width: 600
                },
                "twitch-video": {
                    regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
                    embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
                    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
                    height: 366,
                    width: 600
                },
                "yandex-music-album": {
                    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
                    embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
                    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
                    height: 400,
                    width: 540
                },
                "yandex-music-track": {
                    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
                    embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
                    html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
                    height: 100,
                    width: 540,
                    id: function(e) {
                        return e.join("/");
                    }
                },
                "yandex-music-playlist": {
                    regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
                    embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
                    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
                    height: 400,
                    width: 540,
                    id: function(e) {
                        return e.join("/");
                    }
                },
                codepen: {
                    regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                    embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
                    html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                    height: 300,
                    width: 600,
                    id: function(e) {
                        return e.join("/embed/");
                    }
                },
                instagram: {
                    regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,
                    embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
                    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
                    height: 505,
                    width: 400
                },
                twitter: {
                    regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,
                    embedUrl: "https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",
                    html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
                    height: 300,
                    width: 600,
                    id: function(e) {
                        return e.join("/status/");
                    }
                },
                pinterest: {
                    regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
                    embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
                    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
                    id: function(e) {
                        return e[1];
                    }
                },
                facebook: {
                    regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
                    embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
                    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
                    id: function(e) {
                        return e.join("/");
                    }
                },
                aparat: {
                    regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
                    embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
                    html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
                    height: 300,
                    width: 600
                },
                miro: {
                    regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
                    embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
                    html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
                }
            }, h = (n(10), n(4)), m = function() {
                function e(t) {
                    var n = t.data, r = t.api, i = t.readOnly;
                    c()(this, e), this.api = r, this._data = {}, this.element = null, this.readOnly = i, this.data = n;
                }
                return d()(e, [
                    {
                        key: "render",
                        value: function() {
                            var t = this;
                            if (!this.data.service) {
                                var n = document.createElement("div");
                                return this.element = n, n;
                            }
                            var r = e.services[this.data.service].html, i = document.createElement("div"), o = document.createElement("div"), a = document.createElement("template"), l = this.createPreloader();
                            i.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading), o.classList.add(this.CSS.input, this.CSS.caption), i.appendChild(l), o.contentEditable = !this.readOnly, o.dataset.placeholder = this.api.i18n.t("Enter a caption"), o.innerHTML = this.data.caption || "", a.innerHTML = r, a.content.firstChild.setAttribute("src", this.data.embed), a.content.firstChild.classList.add(this.CSS.content);
                            var c = this.embedIsReady(i);
                            return i.appendChild(a.content.firstChild), i.appendChild(o), c.then(function() {
                                i.classList.remove(t.CSS.containerLoading);
                            }), this.element = i, i;
                        }
                    },
                    {
                        key: "createPreloader",
                        value: function() {
                            var e = document.createElement("preloader"), t = document.createElement("div");
                            return t.textContent = this.data.source, e.classList.add(this.CSS.preloader), t.classList.add(this.CSS.url), e.appendChild(t), e;
                        }
                    },
                    {
                        key: "save",
                        value: function() {
                            return this.data;
                        }
                    },
                    {
                        key: "onPaste",
                        value: function(t) {
                            var n = t.detail, r = n.key, i = n.data, o = e.services[r], a = o.regex, l = o.embedUrl, c = o.width, s = o.height, d = o.id, u = void 0 === d ? function(e) {
                                return e.shift();
                            } : d, h = a.exec(i).slice(1), m = l.replace(/<%= remote_id %>/g, u(h));
                            this.data = {
                                service: r,
                                source: i,
                                embed: m,
                                width: c,
                                height: s
                            };
                        }
                    },
                    {
                        key: "embedIsReady",
                        value: function(e) {
                            var t = null;
                            return new Promise(function(n, r) {
                                (t = new MutationObserver(Object(h.debounce)(n, 450))).observe(e, {
                                    childList: !0,
                                    subtree: !0
                                });
                            }).then(function() {
                                t.disconnect();
                            });
                        }
                    },
                    {
                        key: "data",
                        set: function(e) {
                            if (!(e instanceof Object)) throw Error("Embed Tool data should be object");
                            var t = e.service, n = e.source, r = e.embed, i = e.width, o = e.height, a = e.caption, l = void 0 === a ? "" : a;
                            this._data = {
                                service: t || this.data.service,
                                source: n || this.data.source,
                                embed: r || this.data.embed,
                                width: i || this.data.width,
                                height: o || this.data.height,
                                caption: l || this.data.caption || ""
                            };
                            var c = this.element;
                            c && c.parentNode.replaceChild(this.render(), c);
                        },
                        get: function() {
                            if (this.element) {
                                var e = this.element.querySelector(".".concat(this.api.styles.input));
                                this._data.caption = e ? e.innerHTML : "";
                            }
                            return this._data;
                        }
                    },
                    {
                        key: "CSS",
                        get: function() {
                            return {
                                baseClass: this.api.styles.block,
                                input: this.api.styles.input,
                                container: "embed-tool",
                                containerLoading: "embed-tool--loading",
                                preloader: "embed-tool__preloader",
                                caption: "embed-tool__caption",
                                url: "embed-tool__url",
                                content: "embed-tool__content"
                            };
                        }
                    }
                ], [
                    {
                        key: "prepare",
                        value: function(t) {
                            var n = t.config, r = (void 0 === n ? {} : n).services, o = void 0 === r ? {} : r, l = Object.entries(u), c = Object.entries(o).filter(function(e) {
                                var t = a()(e, 2), n = (t[0], t[1]);
                                return "boolean" == typeof n && !0 === n;
                            }).map(function(e) {
                                return a()(e, 1)[0];
                            }), s = Object.entries(o).filter(function(e) {
                                var t = a()(e, 2), n = (t[0], t[1]);
                                return "object" === i()(n);
                            }).filter(function(t) {
                                var n = a()(t, 2), r = (n[0], n[1]);
                                return e.checkServiceConfig(r);
                            }).map(function(e) {
                                var t = a()(e, 2), n = t[0], r = t[1];
                                return [
                                    n,
                                    {
                                        regex: r.regex,
                                        embedUrl: r.embedUrl,
                                        html: r.html,
                                        height: r.height,
                                        width: r.width,
                                        id: r.id
                                    }
                                ];
                            });
                            c.length && (l = l.filter(function(e) {
                                var t = a()(e, 1)[0];
                                return c.includes(t);
                            })), l = l.concat(s), e.services = l.reduce(function(e, t) {
                                var n = a()(t, 2), r = n[0], i = n[1];
                                return r in e ? (e[r] = Object.assign({}, e[r], i), e) : (e[r] = i, e);
                            }, {}), e.patterns = l.reduce(function(e, t) {
                                var n = a()(t, 2), r = n[0], i = n[1];
                                return e[r] = i.regex, e;
                            }, {});
                        }
                    },
                    {
                        key: "checkServiceConfig",
                        value: function(e) {
                            var t = e.regex, n = e.embedUrl, r = e.html, i = e.height, o = e.width, a = e.id, l = t && t instanceof RegExp && n && "string" == typeof n && r && "string" == typeof r;
                            return l = (l = (l = l && (void 0 === a || a instanceof Function)) && (void 0 === i || Number.isFinite(i))) && (void 0 === o || Number.isFinite(o));
                        }
                    },
                    {
                        key: "pasteConfig",
                        get: function() {
                            return {
                                patterns: e.patterns
                            };
                        }
                    },
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    }
                ]), e;
            }();
        }
    ]).default;
});

},{}],"eKOQX":[function(require,module,exports) {
/*!
 * Image tool
 * 
 * @version 2.8.1
 * 
 * @package https://github.com/editor-js/image
 * @licence MIT
 * @author CodeX <https://codex.so>
 */ !function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var o in e)n.d(r, o, (function(t) {
                return e[t];
            }).bind(null, o));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/", n(n.s = 9);
    }([
        function(e, t) {
            function n(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            e.exports = function(e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e;
            };
        },
        function(e, t, n) {
            window, e.exports = function(e) {
                var t = {};
                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    });
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e) for(var o in e)n.d(r, o, (function(t) {
                        return e[t];
                    }).bind(null, o));
                    return r;
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default;
                    } : function() {
                        return e;
                    };
                    return n.d(t, "a", t), t;
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }, n.p = "", n(n.s = 3);
            }([
                function(e, t) {
                    var n;
                    n = function() {
                        return this;
                    }();
                    try {
                        n = n || new Function("return this")();
                    } catch (e) {
                        "object" == typeof window && (n = window);
                    }
                    e.exports = n;
                },
                function(e, t, n) {
                    "use strict";
                    (function(e) {
                        var r = n(2), o = setTimeout;
                        function i() {}
                        function a(e) {
                            if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof e) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this);
                        }
                        function u(e, t) {
                            for(; 3 === e._state;)e = e._value;
                            0 !== e._state ? (e._handled = !0, a._immediateFn(function() {
                                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                                if (null !== n) {
                                    var r;
                                    try {
                                        r = n(e._value);
                                    } catch (e) {
                                        return void s(t.promise, e);
                                    }
                                    c(t.promise, r);
                                } else (1 === e._state ? c : s)(t.promise, e._value);
                            })) : e._deferreds.push(t);
                        }
                        function c(e, t) {
                            try {
                                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var n = t.then;
                                    if (t instanceof a) return e._state = 3, e._value = t, void l(e);
                                    if ("function" == typeof n) return void f((r = n, o = t, function() {
                                        r.apply(o, arguments);
                                    }), e);
                                }
                                e._state = 1, e._value = t, l(e);
                            } catch (t) {
                                s(e, t);
                            }
                            var r, o;
                        }
                        function s(e, t) {
                            e._state = 2, e._value = t, l(e);
                        }
                        function l(e) {
                            2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
                                e._handled || a._unhandledRejectionFn(e._value);
                            });
                            for(var t = 0, n = e._deferreds.length; t < n; t++)u(e, e._deferreds[t]);
                            e._deferreds = null;
                        }
                        function d(e, t, n) {
                            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
                        }
                        function f(e, t) {
                            var n = !1;
                            try {
                                e(function(e) {
                                    n || (n = !0, c(t, e));
                                }, function(e) {
                                    n || (n = !0, s(t, e));
                                });
                            } catch (e) {
                                if (n) return;
                                n = !0, s(t, e);
                            }
                        }
                        a.prototype.catch = function(e) {
                            return this.then(null, e);
                        }, a.prototype.then = function(e, t) {
                            var n = new this.constructor(i);
                            return u(this, new d(e, t, n)), n;
                        }, a.prototype.finally = r.a, a.all = function(e) {
                            return new a(function(t, n) {
                                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                                var r = Array.prototype.slice.call(e);
                                if (0 === r.length) return t([]);
                                var o = r.length;
                                function i(e, a) {
                                    try {
                                        if (a && ("object" == typeof a || "function" == typeof a)) {
                                            var u = a.then;
                                            if ("function" == typeof u) return void u.call(a, function(t) {
                                                i(e, t);
                                            }, n);
                                        }
                                        r[e] = a, 0 == --o && t(r);
                                    } catch (e) {
                                        n(e);
                                    }
                                }
                                for(var a = 0; a < r.length; a++)i(a, r[a]);
                            });
                        }, a.resolve = function(e) {
                            return e && "object" == typeof e && e.constructor === a ? e : new a(function(t) {
                                t(e);
                            });
                        }, a.reject = function(e) {
                            return new a(function(t, n) {
                                n(e);
                            });
                        }, a.race = function(e) {
                            return new a(function(t, n) {
                                for(var r = 0, o = e.length; r < o; r++)e[r].then(t, n);
                            });
                        }, a._immediateFn = "function" == typeof e && function(t) {
                            e(t);
                        } || function(e) {
                            o(e, 0);
                        }, a._unhandledRejectionFn = function(e) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
                        }, t.a = a;
                    }).call(this, n(5).setImmediate);
                },
                function(e, t, n) {
                    "use strict";
                    t.a = function(e) {
                        var t = this.constructor;
                        return this.then(function(n) {
                            return t.resolve(e()).then(function() {
                                return n;
                            });
                        }, function(n) {
                            return t.resolve(e()).then(function() {
                                return t.reject(n);
                            });
                        });
                    };
                },
                function(e, t, n) {
                    "use strict";
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        })(e);
                    }
                    n(4);
                    var o, i, a, u, c, s, l, d = n(8), f = (i = function(e) {
                        return new Promise(function(t, n) {
                            e = u(e), (e = c(e)).beforeSend && e.beforeSend();
                            var r = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP");
                            r.open(e.method, e.url), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(e.headers).forEach(function(t) {
                                var n = e.headers[t];
                                r.setRequestHeader(t, n);
                            });
                            var o = e.ratio;
                            r.upload.addEventListener("progress", function(t) {
                                var n = Math.round(t.loaded / t.total * 100), r = Math.ceil(n * o / 100);
                                e.progress(Math.min(r, 100));
                            }, !1), r.addEventListener("progress", function(t) {
                                var n = Math.round(t.loaded / t.total * 100), r = Math.ceil(n * (100 - o) / 100) + o;
                                e.progress(Math.min(r, 100));
                            }, !1), r.onreadystatechange = function() {
                                if (4 === r.readyState) {
                                    var e = r.response;
                                    try {
                                        e = JSON.parse(e);
                                    } catch (e) {}
                                    var o = d.parseHeaders(r.getAllResponseHeaders()), i = {
                                        body: e,
                                        code: r.status,
                                        headers: o
                                    };
                                    l(r.status) ? t(i) : n(i);
                                }
                            }, r.send(e.data);
                        });
                    }, a = function(e) {
                        return e.method = "POST", i(e);
                    }, u = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (e.url && "string" != typeof e.url) throw new Error("Url must be a string");
                        if (e.url = e.url || "", e.method && "string" != typeof e.method) throw new Error("`method` must be a string or null");
                        if (e.method = e.method ? e.method.toUpperCase() : "GET", e.headers && "object" !== r(e.headers)) throw new Error("`headers` must be an object or null");
                        if (e.headers = e.headers || {}, e.type && ("string" != typeof e.type || !Object.values(o).includes(e.type))) throw new Error("`type` must be taken from module's \xabcontentType\xbb library");
                        if (e.progress && "function" != typeof e.progress) throw new Error("`progress` must be a function or null");
                        if (e.progress = e.progress || function(e) {}, e.beforeSend = e.beforeSend || function(e) {}, e.ratio && "number" != typeof e.ratio) throw new Error("`ratio` must be a number");
                        if (e.ratio < 0 || e.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
                        if (e.ratio = e.ratio || 90, e.accept && "string" != typeof e.accept) throw new Error("`accept` must be a string with a list of allowed mime-types");
                        if (e.accept = e.accept || "*/*", e.multiple && "boolean" != typeof e.multiple) throw new Error("`multiple` must be a true or false");
                        if (e.multiple = e.multiple || !1, e.fieldName && "string" != typeof e.fieldName) throw new Error("`fieldName` must be a string");
                        return e.fieldName = e.fieldName || "files", e;
                    }, c = function(e) {
                        switch(e.method){
                            case "GET":
                                var t = s(e.data, o.URLENCODED);
                                delete e.data, e.url = /\?/.test(e.url) ? e.url + "&" + t : e.url + "?" + t;
                                break;
                            case "POST":
                            case "PUT":
                            case "DELETE":
                            case "UPDATE":
                                var n = function() {
                                    return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || o.JSON;
                                }(e);
                                (d.isFormData(e.data) || d.isFormElement(e.data)) && (n = o.FORM), e.data = s(e.data, n), n !== f.contentType.FORM && (e.headers["content-type"] = n);
                        }
                        return e;
                    }, s = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        switch(arguments.length > 1 ? arguments[1] : void 0){
                            case o.URLENCODED:
                                return d.urlEncode(e);
                            case o.JSON:
                                return d.jsonEncode(e);
                            case o.FORM:
                                return d.formEncode(e);
                            default:
                                return e;
                        }
                    }, l = function(e) {
                        return e >= 200 && e < 300;
                    }, {
                        contentType: o = {
                            URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
                            FORM: "multipart/form-data",
                            JSON: "application/json; charset=utf-8"
                        },
                        request: i,
                        get: function(e) {
                            return e.method = "GET", i(e);
                        },
                        post: a,
                        transport: function(e) {
                            return e = u(e), d.selectFiles(e).then(function(t) {
                                for(var n = new FormData, r = 0; r < t.length; r++)n.append(e.fieldName, t[r], t[r].name);
                                d.isObject(e.data) && Object.keys(e.data).forEach(function(t) {
                                    var r = e.data[t];
                                    n.append(t, r);
                                });
                                var o = e.beforeSend;
                                return e.beforeSend = function() {
                                    return o(t);
                                }, e.data = n, a(e);
                            });
                        },
                        selectFiles: function(e) {
                            return delete (e = u(e)).beforeSend, d.selectFiles(e);
                        }
                    });
                    e.exports = f;
                },
                function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var r = n(1);
                    window.Promise = window.Promise || r.a;
                },
                function(e, t, n) {
                    (function(e) {
                        var r = void 0 !== e && e || "undefined" != typeof self && self || window, o = Function.prototype.apply;
                        function i(e, t) {
                            this._id = e, this._clearFn = t;
                        }
                        t.setTimeout = function() {
                            return new i(o.call(setTimeout, r, arguments), clearTimeout);
                        }, t.setInterval = function() {
                            return new i(o.call(setInterval, r, arguments), clearInterval);
                        }, t.clearTimeout = t.clearInterval = function(e) {
                            e && e.close();
                        }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
                            this._clearFn.call(r, this._id);
                        }, t.enroll = function(e, t) {
                            clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
                        }, t.unenroll = function(e) {
                            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
                        }, t._unrefActive = t.active = function(e) {
                            clearTimeout(e._idleTimeoutId);
                            var t = e._idleTimeout;
                            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                                e._onTimeout && e._onTimeout();
                            }, t));
                        }, n(6), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
                    }).call(this, n(0));
                },
                function(e, t, n) {
                    (function(e, t) {
                        !function(e, n) {
                            "use strict";
                            if (!e.setImmediate) {
                                var r, o, i, a, u, c = 1, s = {}, l = !1, d = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                                f = f && f.setTimeout ? f : e, "[object process]" === ({}).toString.call(e.process) ? r = function(e) {
                                    t.nextTick(function() {
                                        h(e);
                                    });
                                } : function() {
                                    if (e.postMessage && !e.importScripts) {
                                        var t = !0, n = e.onmessage;
                                        return e.onmessage = function() {
                                            t = !1;
                                        }, e.postMessage("", "*"), e.onmessage = n, t;
                                    }
                                }() ? (a = "setImmediate$" + Math.random() + "$", u = function(t) {
                                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length));
                                }, e.addEventListener ? e.addEventListener("message", u, !1) : e.attachEvent("onmessage", u), r = function(t) {
                                    e.postMessage(a + t, "*");
                                }) : e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                                    h(e.data);
                                }, r = function(e) {
                                    i.port2.postMessage(e);
                                }) : d && "onreadystatechange" in d.createElement("script") ? (o = d.documentElement, r = function(e) {
                                    var t = d.createElement("script");
                                    t.onreadystatechange = function() {
                                        h(e), t.onreadystatechange = null, o.removeChild(t), t = null;
                                    }, o.appendChild(t);
                                }) : r = function(e) {
                                    setTimeout(h, 0, e);
                                }, f.setImmediate = function(e) {
                                    "function" != typeof e && (e = new Function("" + e));
                                    for(var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)t[n] = arguments[n + 1];
                                    var o = {
                                        callback: e,
                                        args: t
                                    };
                                    return s[c] = o, r(c), c++;
                                }, f.clearImmediate = p;
                            }
                            function p(e) {
                                delete s[e];
                            }
                            function h(e) {
                                if (l) setTimeout(h, 0, e);
                                else {
                                    var t = s[e];
                                    if (t) {
                                        l = !0;
                                        try {
                                            !function(e) {
                                                var t = e.callback, n = e.args;
                                                switch(n.length){
                                                    case 0:
                                                        t();
                                                        break;
                                                    case 1:
                                                        t(n[0]);
                                                        break;
                                                    case 2:
                                                        t(n[0], n[1]);
                                                        break;
                                                    case 3:
                                                        t(n[0], n[1], n[2]);
                                                        break;
                                                    default:
                                                        t.apply(void 0, n);
                                                }
                                            }(t);
                                        } finally{
                                            p(e), l = !1;
                                        }
                                    }
                                }
                            }
                        }("undefined" == typeof self ? void 0 === e ? this : e : self);
                    }).call(this, n(0), n(7));
                },
                function(e, t) {
                    var n, r, o = e.exports = {};
                    function i() {
                        throw new Error("setTimeout has not been defined");
                    }
                    function a() {
                        throw new Error("clearTimeout has not been defined");
                    }
                    function u(e) {
                        if (n === setTimeout) return setTimeout(e, 0);
                        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                        try {
                            return n(e, 0);
                        } catch (t) {
                            try {
                                return n.call(null, e, 0);
                            } catch (t) {
                                return n.call(this, e, 0);
                            }
                        }
                    }
                    !function() {
                        try {
                            n = "function" == typeof setTimeout ? setTimeout : i;
                        } catch (e) {
                            n = i;
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : a;
                        } catch (e) {
                            r = a;
                        }
                    }();
                    var c, s = [], l = !1, d = -1;
                    function f() {
                        l && c && (l = !1, c.length ? s = c.concat(s) : d = -1, s.length && p());
                    }
                    function p() {
                        if (!l) {
                            var e = u(f);
                            l = !0;
                            for(var t = s.length; t;){
                                for(c = s, s = []; ++d < t;)c && c[d].run();
                                d = -1, t = s.length;
                            }
                            c = null, l = !1, function(e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                try {
                                    r(e);
                                } catch (t) {
                                    try {
                                        return r.call(null, e);
                                    } catch (t) {
                                        return r.call(this, e);
                                    }
                                }
                            }(e);
                        }
                    }
                    function h(e, t) {
                        this.fun = e, this.array = t;
                    }
                    function m() {}
                    o.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1) for(var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                        s.push(new h(e, t)), 1 !== s.length || l || u(p);
                    }, h.prototype.run = function() {
                        this.fun.apply(null, this.array);
                    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
                        return [];
                    }, o.binding = function(e) {
                        throw new Error("process.binding is not supported");
                    }, o.cwd = function() {
                        return "/";
                    }, o.chdir = function(e) {
                        throw new Error("process.chdir is not supported");
                    }, o.umask = function() {
                        return 0;
                    };
                },
                function(e, t, n) {
                    function r(e, t) {
                        for(var n = 0; n < t.length; n++){
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                        }
                    }
                    var o = n(9);
                    e.exports = function() {
                        function e() {
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e);
                        }
                        var t, n;
                        return t = e, n = [
                            {
                                key: "urlEncode",
                                value: function(e) {
                                    return o(e);
                                }
                            },
                            {
                                key: "jsonEncode",
                                value: function(e) {
                                    return JSON.stringify(e);
                                }
                            },
                            {
                                key: "formEncode",
                                value: function(e) {
                                    if (this.isFormData(e)) return e;
                                    if (this.isFormElement(e)) return new FormData(e);
                                    if (this.isObject(e)) {
                                        var t = new FormData;
                                        return Object.keys(e).forEach(function(n) {
                                            var r = e[n];
                                            t.append(n, r);
                                        }), t;
                                    }
                                    throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
                                }
                            },
                            {
                                key: "isObject",
                                value: function(e) {
                                    return "[object Object]" === Object.prototype.toString.call(e);
                                }
                            },
                            {
                                key: "isFormData",
                                value: function(e) {
                                    return e instanceof FormData;
                                }
                            },
                            {
                                key: "isFormElement",
                                value: function(e) {
                                    return e instanceof HTMLFormElement;
                                }
                            },
                            {
                                key: "selectFiles",
                                value: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return new Promise(function(t, n) {
                                        var r = document.createElement("INPUT");
                                        r.type = "file", e.multiple && r.setAttribute("multiple", "multiple"), e.accept && r.setAttribute("accept", e.accept), r.style.display = "none", document.body.appendChild(r), r.addEventListener("change", function(e) {
                                            var n = e.target.files;
                                            t(n), document.body.removeChild(r);
                                        }, !1), r.click();
                                    });
                                }
                            },
                            {
                                key: "parseHeaders",
                                value: function(e) {
                                    var t = e.trim().split(/[\r\n]+/), n = {};
                                    return t.forEach(function(e) {
                                        var t = e.split(": "), r = t.shift(), o = t.join(": ");
                                        r && (n[r] = o);
                                    }), n;
                                }
                            }
                        ], r(t, n), e;
                    }();
                },
                function(e, t) {
                    var n = function(e) {
                        return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
                    }, r = function(e, t, o, i) {
                        return t = t || null, o = o || "&", i = i || null, e ? (function(e) {
                            for(var t = new Array, n = 0; n < e.length; n++)e[n] && t.push(e[n]);
                            return t;
                        })(Object.keys(e).map(function(a) {
                            var u, c, s = a;
                            if (i && (s = i + "[" + s + "]"), "object" == typeof e[a] && null !== e[a]) u = r(e[a], null, o, s);
                            else {
                                t && (c = s, s = !isNaN(parseFloat(c)) && isFinite(c) ? t + Number(s) : s);
                                var l = e[a];
                                l = (l = 0 === (l = !1 === (l = !0 === l ? "1" : l) ? "0" : l) ? "0" : l) || "", u = n(s) + "=" + n(l);
                            }
                            return u;
                        })).join(o).replace(/[!'()*]/g, "") : "";
                    };
                    e.exports = r;
                }
            ]);
        },
        function(e, t) {
            e.exports = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function(e, t, n) {
            e.exports = n(10);
        },
        function(e, t) {
            e.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            };
        },
        function(e, t, n) {
            var r = n(4);
            e.exports = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
                }
            };
        },
        function(e, t) {
            function n(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a), c = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o);
            }
            e.exports = function(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(o, i) {
                        var a = e.apply(t, r);
                        function u(e) {
                            n(a, o, i, u, c, "next", e);
                        }
                        function c(e) {
                            n(a, o, i, u, c, "throw", e);
                        }
                        u(void 0);
                    });
                };
            };
        },
        function(e, t, n) {
            var r = n(15), o = n(16), i = n(5), a = n(17);
            e.exports = function(e) {
                return r(e) || o(e) || i(e) || a();
            };
        },
        function(e, t, n) {
            var r = n(18), o = n(19), i = n(5), a = n(20);
            e.exports = function(e, t) {
                return r(e) || o(e, t) || i(e, t) || a();
            };
        },
        function(e, t, n) {
            e.exports = n(21);
        },
        function(e, t, n) {
            var r = function(e) {
                "use strict";
                var t = Object.prototype, n = t.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {}, o = r.iterator || "@@iterator", i = r.asyncIterator || "@@asyncIterator", a = r.toStringTag || "@@toStringTag";
                function u(e, t, n, r) {
                    var o = t && t.prototype instanceof l ? t : l, i = Object.create(o.prototype), a = new _(r || []);
                    return i._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return E();
                            }
                            for(n.method = o, n.arg = i;;){
                                var a = n.delegate;
                                if (a) {
                                    var u = b(a, n);
                                    if (u) {
                                        if (u === s) continue;
                                        return u;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var l = c(e, t, n);
                                if ("normal" === l.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", l.arg === s) continue;
                                    return {
                                        value: l.arg,
                                        done: n.done
                                    };
                                }
                                "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg);
                            }
                        };
                    }(e, n, a), i;
                }
                function c(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        };
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        };
                    }
                }
                e.wrap = u;
                var s = {};
                function l() {}
                function d() {}
                function f() {}
                var p = {};
                p[o] = function() {
                    return this;
                };
                var h = Object.getPrototypeOf, m = h && h(h(x([])));
                m && m !== t && n.call(m, o) && (p = m);
                var g = f.prototype = l.prototype = Object.create(p);
                function y(e) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e);
                        };
                    });
                }
                function v(e, t) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new t(function(r, a) {
                                !function r(o, i, a, u) {
                                    var s = c(e[o], e, i);
                                    if ("throw" !== s.type) {
                                        var l = s.arg, d = l.value;
                                        return d && "object" == typeof d && n.call(d, "__await") ? t.resolve(d.__await).then(function(e) {
                                            r("next", e, a, u);
                                        }, function(e) {
                                            r("throw", e, a, u);
                                        }) : t.resolve(d).then(function(e) {
                                            l.value = e, a(l);
                                        }, function(e) {
                                            return r("throw", e, a, u);
                                        });
                                    }
                                    u(s.arg);
                                }(o, i, r, a);
                            });
                        }
                        return r = r ? r.then(a, a) : a();
                    };
                }
                function b(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return s;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return s;
                    }
                    var r = c(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, s;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, s) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, s);
                }
                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
                }
                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function _(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(w, this), this.reset(!0);
                }
                function x(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1, i = function t() {
                                for(; ++r < e.length;)if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t;
                            };
                            return i.next = i;
                        }
                    }
                    return {
                        next: E
                    };
                }
                function E() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return d.prototype = g.constructor = f, f.constructor = d, f[a] = d.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(g), e;
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, y(v.prototype), v.prototype[i] = function() {
                    return this;
                }, e.AsyncIterator = v, e.async = function(t, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new v(u(t, n, r, o), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then(function(e) {
                        return e.done ? e.value : a.next();
                    });
                }, y(g), g[a] = "Generator", g[o] = function() {
                    return this;
                }, g.toString = function() {
                    return "[object Generator]";
                }, e.keys = function(e) {
                    var t = [];
                    for(var n in e)t.push(n);
                    return t.reverse(), function n() {
                        for(; t.length;){
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, e.values = x, _.prototype = {
                    constructor: _,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e) for(var t in this)"t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r;
                        }
                        for(var o = this.tryEntries.length - 1; o >= 0; --o){
                            var i = this.tryEntries[o], a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var u = n.call(i, "catchLoc"), c = n.call(i, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                } else if (u) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break;
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), s;
                    },
                    finish: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), s;
                        }
                    },
                    catch: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    k(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), s;
                    }
                }, e;
            }(e.exports);
            try {
                regeneratorRuntime = r;
            } catch (e) {
                Function("r", "regeneratorRuntime = r")(r);
            }
        },
        function(e, t, n) {
            var r = n(12), o = n(13);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [
                [
                    e.i,
                    o,
                    ""
                ]
            ]);
            var i = {
                insert: "head",
                singleton: !1
            }, a = (r(o, i), o.locals ? o.locals : {});
            e.exports = a;
        },
        function(e, t, n) {
            "use strict";
            var r, o = function() {
                return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
            }, i = function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (e) {
                            n = null;
                        }
                        e[t] = n;
                    }
                    return e[t];
                };
            }(), a = [];
            function u(e) {
                for(var t = -1, n = 0; n < a.length; n++)if (a[n].identifier === e) {
                    t = n;
                    break;
                }
                return t;
            }
            function c(e, t) {
                for(var n = {}, r = [], o = 0; o < e.length; o++){
                    var i = e[o], c = t.base ? i[0] + t.base : i[0], s = n[c] || 0, l = "".concat(c, " ").concat(s);
                    n[c] = s + 1;
                    var d = u(l), f = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                    -1 !== d ? (a[d].references++, a[d].updater(f)) : a.push({
                        identifier: l,
                        updater: g(f, t),
                        references: 1
                    }), r.push(l);
                }
                return r;
            }
            function s(e) {
                var t = document.createElement("style"), r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var o = n.nc;
                    o && (r.nonce = o);
                }
                if (Object.keys(r).forEach(function(e) {
                    t.setAttribute(e, r[e]);
                }), "function" == typeof e.insert) e.insert(t);
                else {
                    var a = i(e.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t);
                }
                return t;
            }
            var l, d = (l = [], function(e, t) {
                return l[e] = t, l.filter(Boolean).join("\n");
            });
            function f(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet) e.styleSheet.cssText = d(t, o);
                else {
                    var i = document.createTextNode(o), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
            function p(e, t, n) {
                var r = n.css, o = n.media, i = n.sourceMap;
                if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = r;
                else {
                    for(; e.firstChild;)e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r));
                }
            }
            var h = null, m = 0;
            function g(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var i = m++;
                    n = h || (h = s(t)), r = f.bind(null, n, i, !1), o = f.bind(null, n, i, !0);
                } else n = s(t), r = p.bind(null, n, t), o = function() {
                    !function(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                    }(n);
                };
                return r(e), function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t);
                    } else o();
                };
            }
            e.exports = function(e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
                var n = c(e = e || [], t);
                return function(e) {
                    if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                        for(var r = 0; r < n.length; r++){
                            var o = u(n[r]);
                            a[o].references--;
                        }
                        for(var i = c(e, t), s = 0; s < n.length; s++){
                            var l = u(n[s]);
                            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        function(e, t, n) {
            (t = n(14)(!1)).push([
                e.i,
                '.image-tool {\n  --bg-color: #cdd1e0;\n  --front-color: #388ae5;\n  --border-color: #e8e8eb;\n\n}\n\n  .image-tool__image {\n    border-radius: 3px;\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n\n  .image-tool__image-picture {\n      max-width: 100%;\n      vertical-align: bottom;\n      display: block;\n    }\n\n  .image-tool__image-preloader {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background-size: cover;\n      margin: auto;\n      position: relative;\n      background-color: var(--bg-color);\n      background-position: center center;\n    }\n\n  .image-tool__image-preloader::after {\n        content: "";\n        position: absolute;\n        z-index: 3;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        border: 2px solid var(--bg-color);\n        border-top-color: var(--front-color);\n        left: 50%;\n        top: 50%;\n        margin-top: -30px;\n        margin-left: -30px;\n        animation: image-preloader-spin 2s infinite linear;\n        box-sizing: border-box;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]::before {\n      position: absolute !important;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      display: none;\n    }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty::before {\n        display: block;\n      }\n\n  .image-tool__caption[contentEditable="true"][data-placeholder]:empty:focus::before {\n        display: none;\n      }\n\n  .image-tool--empty .image-tool__image {\n      display: none;\n    }\n\n  .image-tool--empty .image-tool__caption, .image-tool--loading .image-tool__caption {\n      display: none;\n    }\n\n  .image-tool .cdx-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .image-tool .cdx-button svg {\n      height: auto;\n      margin: 0 6px 0 0;\n    }\n\n  .image-tool--filled .cdx-button {\n      display: none;\n    }\n\n  .image-tool--filled .image-tool__image-preloader {\n        display: none;\n      }\n\n  .image-tool--loading .image-tool__image {\n      min-height: 200px;\n      display: flex;\n      border: 1px solid var(--border-color);\n      background-color: #fff;\n    }\n\n  .image-tool--loading .image-tool__image-picture {\n        display: none;\n      }\n\n  .image-tool--loading .cdx-button {\n      display: none;\n    }\n\n  /**\n   * Tunes\n   * ----------------\n   */\n\n  .image-tool--withBorder .image-tool__image {\n      border: 1px solid var(--border-color);\n    }\n\n  .image-tool--withBackground .image-tool__image {\n      padding: 15px;\n      background: var(--bg-color);\n    }\n\n  .image-tool--withBackground .image-tool__image-picture {\n        max-width: 60%;\n        margin: 0 auto;\n      }\n\n  .image-tool--stretched .image-tool__image-picture {\n        width: 100%;\n      }\n\n@keyframes image-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',
                ""
            ]), e.exports = t;
        },
        function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n = e[1] || "", r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var o = (a = r, u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(c, " */")), i = r.sources.map(function(e) {
                                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                                });
                                return [
                                    n
                                ].concat(i).concat([
                                    o
                                ]).join("\n");
                            }
                            var a, u, c;
                            return [
                                n
                            ].join("\n");
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                    }).join("");
                }, t.i = function(e, n, r) {
                    "string" == typeof e && (e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ]);
                    var o = {};
                    if (r) for(var i = 0; i < this.length; i++){
                        var a = this[i][0];
                        null != a && (o[a] = !0);
                    }
                    for(var u = 0; u < e.length; u++){
                        var c = [].concat(e[u]);
                        r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c));
                    }
                }, t;
            };
        },
        function(e, t, n) {
            var r = n(4);
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e);
            };
        },
        function(e, t) {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            };
        },
        function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e;
            };
        },
        function(e, t) {
            e.exports = function(e, t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for(var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, i = e;
                    } finally{
                        try {
                            r || null == u.return || u.return();
                        } finally{
                            if (o) throw i;
                        }
                    }
                    return n;
                }
            };
        },
        function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return _;
            });
            var r = n(3), o = n.n(r), i = n(6), a = n.n(i), u = n(2), c = n.n(u), s = n(0), l = n.n(s);
            n(11);
            const d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
            var f = n(7), p = n.n(f);
            function h(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = document.createElement(e);
                Array.isArray(n) ? (t = o.classList).add.apply(t, p()(n)) : n && o.classList.add(n);
                for(var i in r)o[i] = r[i];
                return o;
            }
            var m = function() {
                function e(t) {
                    var n = t.api, r = t.config, o = t.onSelectFile, i = t.readOnly;
                    c()(this, e), this.api = n, this.config = r, this.onSelectFile = o, this.readOnly = i, this.nodes = {
                        wrapper: h("div", [
                            this.CSS.baseClass,
                            this.CSS.wrapper
                        ]),
                        imageContainer: h("div", [
                            this.CSS.imageContainer
                        ]),
                        fileButton: this.createFileButton(),
                        imageEl: void 0,
                        imagePreloader: h("div", this.CSS.imagePreloader),
                        caption: h("div", [
                            this.CSS.input,
                            this.CSS.caption
                        ], {
                            contentEditable: !this.readOnly
                        })
                    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
                }
                return l()(e, [
                    {
                        key: "render",
                        value: function(t) {
                            return t.file && 0 !== Object.keys(t.file).length ? this.toggleStatus(e.status.UPLOADING) : this.toggleStatus(e.status.EMPTY), this.nodes.wrapper;
                        }
                    },
                    {
                        key: "createFileButton",
                        value: function() {
                            var e = this, t = h("div", [
                                this.CSS.button
                            ]);
                            return t.innerHTML = this.config.buttonContent || "".concat(d, " ").concat(this.api.i18n.t("Select an Image")), t.addEventListener("click", function() {
                                e.onSelectFile();
                            }), t;
                        }
                    },
                    {
                        key: "showPreloader",
                        value: function(t) {
                            this.nodes.imagePreloader.style.backgroundImage = "url(".concat(t, ")"), this.toggleStatus(e.status.UPLOADING);
                        }
                    },
                    {
                        key: "hidePreloader",
                        value: function() {
                            this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(e.status.EMPTY);
                        }
                    },
                    {
                        key: "fillImage",
                        value: function(t) {
                            var n = this, r = /\.mp4$/.test(t) ? "VIDEO" : "IMG", o = {
                                src: t
                            }, i = "load";
                            "VIDEO" === r && (o.autoplay = !0, o.loop = !0, o.muted = !0, o.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = h(r, this.CSS.imageEl, o), this.nodes.imageEl.addEventListener(i, function() {
                                n.toggleStatus(e.status.FILLED), n.nodes.imagePreloader && (n.nodes.imagePreloader.style.backgroundImage = "");
                            }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
                        }
                    },
                    {
                        key: "fillCaption",
                        value: function(e) {
                            this.nodes.caption && (this.nodes.caption.innerHTML = e);
                        }
                    },
                    {
                        key: "toggleStatus",
                        value: function(t) {
                            for(var n in e.status)Object.prototype.hasOwnProperty.call(e.status, n) && this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(e.status[n]), t === e.status[n]);
                        }
                    },
                    {
                        key: "applyTune",
                        value: function(e, t) {
                            this.nodes.wrapper.classList.toggle("".concat(this.CSS.wrapper, "--").concat(e), t);
                        }
                    },
                    {
                        key: "CSS",
                        get: function() {
                            return {
                                baseClass: this.api.styles.block,
                                loading: this.api.styles.loader,
                                input: this.api.styles.input,
                                button: this.api.styles.button,
                                wrapper: "image-tool",
                                imageContainer: "image-tool__image",
                                imagePreloader: "image-tool__image-preloader",
                                imageEl: "image-tool__image-picture",
                                caption: "image-tool__caption"
                            };
                        }
                    }
                ], [
                    {
                        key: "status",
                        get: function() {
                            return {
                                EMPTY: "empty",
                                UPLOADING: "loading",
                                FILLED: "filled"
                            };
                        }
                    }
                ]), e;
            }(), g = n(8), y = n.n(g), v = n(1), b = n.n(v);
            function w(e) {
                return e && "function" == typeof e.then;
            }
            var k = function() {
                function e(t) {
                    var n = t.config, r = t.onUpload, o = t.onError;
                    c()(this, e), this.config = n, this.onUpload = r, this.onError = o;
                }
                return l()(e, [
                    {
                        key: "uploadSelectedFile",
                        value: function(e) {
                            var t = this, n = e.onPreview, r = function(e) {
                                var t = new FileReader;
                                t.readAsDataURL(e), t.onload = function(e) {
                                    n(e.target.result);
                                };
                            };
                            (this.config.uploader && "function" == typeof this.config.uploader.uploadByFile ? b.a.selectFiles({
                                accept: this.config.types
                            }).then(function(e) {
                                r(e[0]);
                                var n = t.config.uploader.uploadByFile(e[0]);
                                return w(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
                            }) : b.a.transport({
                                url: this.config.endpoints.byFile,
                                data: this.config.additionalRequestData,
                                accept: this.config.types,
                                headers: this.config.additionalRequestHeaders,
                                beforeSend: function(e) {
                                    r(e[0]);
                                },
                                fieldName: this.config.field
                            }).then(function(e) {
                                return e.body;
                            })).then(function(e) {
                                t.onUpload(e);
                            }).catch(function(e) {
                                t.onError(e);
                            });
                        }
                    },
                    {
                        key: "uploadByUrl",
                        value: function(e) {
                            var t, n = this;
                            this.config.uploader && "function" == typeof this.config.uploader.uploadByUrl ? w(t = this.config.uploader.uploadByUrl(e)) || console.warn("Custom uploader method uploadByUrl should return a Promise") : t = b.a.post({
                                url: this.config.endpoints.byUrl,
                                data: Object.assign({
                                    url: e
                                }, this.config.additionalRequestData),
                                type: b.a.contentType.JSON,
                                headers: this.config.additionalRequestHeaders
                            }).then(function(e) {
                                return e.body;
                            }), t.then(function(e) {
                                n.onUpload(e);
                            }).catch(function(e) {
                                n.onError(e);
                            });
                        }
                    },
                    {
                        key: "uploadByFile",
                        value: function(e, t) {
                            var n, r = this, o = t.onPreview, i = new FileReader;
                            if (i.readAsDataURL(e), i.onload = function(e) {
                                o(e.target.result);
                            }, this.config.uploader && "function" == typeof this.config.uploader.uploadByFile) w(n = this.config.uploader.uploadByFile(e)) || console.warn("Custom uploader method uploadByFile should return a Promise");
                            else {
                                var a = new FormData;
                                a.append(this.config.field, e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(function(e) {
                                    var t = y()(e, 2), n = t[0], r = t[1];
                                    a.append(n, r);
                                }), n = b.a.post({
                                    url: this.config.endpoints.byFile,
                                    data: a,
                                    type: b.a.contentType.JSON,
                                    headers: this.config.additionalRequestHeaders
                                }).then(function(e) {
                                    return e.body;
                                });
                            }
                            n.then(function(e) {
                                r.onUpload(e);
                            }).catch(function(e) {
                                r.onError(e);
                            });
                        }
                    }
                ]), e;
            }(), _ = function() {
                function e(t) {
                    var n = this, r = t.data, o = t.config, i = t.api, a = t.readOnly;
                    c()(this, e), this.api = i, this.readOnly = a, this.config = {
                        endpoints: o.endpoints || "",
                        additionalRequestData: o.additionalRequestData || {},
                        additionalRequestHeaders: o.additionalRequestHeaders || {},
                        field: o.field || "image",
                        types: o.types || "image/*",
                        captionPlaceholder: this.api.i18n.t(o.captionPlaceholder || "Caption"),
                        buttonContent: o.buttonContent || "",
                        uploader: o.uploader || void 0,
                        actions: o.actions || []
                    }, this.uploader = new k({
                        config: this.config,
                        onUpload: function(e) {
                            return n.onUpload(e);
                        },
                        onError: function(e) {
                            return n.uploadingFailed(e);
                        }
                    }), this.ui = new m({
                        api: i,
                        config: this.config,
                        onSelectFile: function() {
                            n.uploader.uploadSelectedFile({
                                onPreview: function(e) {
                                    n.ui.showPreloader(e);
                                }
                            });
                        },
                        readOnly: a
                    }), this._data = {}, this.data = r;
                }
                var t;
                return l()(e, null, [
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "toolbox",
                        get: function() {
                            return {
                                icon: d,
                                title: "Image"
                            };
                        }
                    },
                    {
                        key: "tunes",
                        get: function() {
                            return [
                                {
                                    name: "withBorder",
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',
                                    title: "With border",
                                    toggle: !0
                                },
                                {
                                    name: "stretched",
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>',
                                    title: "Stretch image",
                                    toggle: !0
                                },
                                {
                                    name: "withBackground",
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',
                                    title: "With background",
                                    toggle: !0
                                }
                            ];
                        }
                    }
                ]), l()(e, [
                    {
                        key: "render",
                        value: function() {
                            return this.ui.render(this.data);
                        }
                    },
                    {
                        key: "validate",
                        value: function(e) {
                            return e.file && e.file.url;
                        }
                    },
                    {
                        key: "save",
                        value: function() {
                            var e = this.ui.nodes.caption;
                            return this._data.caption = e.innerHTML, this.data;
                        }
                    },
                    {
                        key: "renderSettings",
                        value: function() {
                            var t = this;
                            return e.tunes.concat(this.config.actions).map(function(e) {
                                return {
                                    icon: e.icon,
                                    label: t.api.i18n.t(e.title),
                                    name: e.name,
                                    toggle: e.toggle,
                                    isActive: t.data[e.name],
                                    onActivate: function() {
                                        "function" != typeof e.action ? t.tuneToggled(e.name) : e.action(e.name);
                                    }
                                };
                            });
                        }
                    },
                    {
                        key: "appendCallback",
                        value: function() {
                            this.ui.nodes.fileButton.click();
                        }
                    },
                    {
                        key: "onPaste",
                        value: (t = a()(o.a.mark(function e(t) {
                            var n, r, i, a, u;
                            return o.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        e.t0 = t.type, e.next = "tag" === e.t0 ? 3 : "pattern" === e.t0 ? 15 : "file" === e.t0 ? 18 : 21;
                                        break;
                                    case 3:
                                        if (n = t.detail.data, !/^blob:/.test(n.src)) {
                                            e.next = 13;
                                            break;
                                        }
                                        return e.next = 7, fetch(n.src);
                                    case 7:
                                        return r = e.sent, e.next = 10, r.blob();
                                    case 10:
                                        return i = e.sent, this.uploadFile(i), e.abrupt("break", 21);
                                    case 13:
                                        return this.uploadUrl(n.src), e.abrupt("break", 21);
                                    case 15:
                                        return a = t.detail.data, this.uploadUrl(a), e.abrupt("break", 21);
                                    case 18:
                                        return u = t.detail.file, this.uploadFile(u), e.abrupt("break", 21);
                                    case 21:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        })), function(e) {
                            return t.apply(this, arguments);
                        })
                    },
                    {
                        key: "onUpload",
                        value: function(e) {
                            e.success && e.file ? this.image = e.file : this.uploadingFailed("incorrect response: " + JSON.stringify(e));
                        }
                    },
                    {
                        key: "uploadingFailed",
                        value: function(e) {
                            console.log("Image Tool: uploading failed because of", e), this.api.notifier.show({
                                message: this.api.i18n.t("Couldn’t upload image. Please try another."),
                                style: "error"
                            }), this.ui.hidePreloader();
                        }
                    },
                    {
                        key: "tuneToggled",
                        value: function(e) {
                            this.setTune(e, !this._data[e]);
                        }
                    },
                    {
                        key: "setTune",
                        value: function(e, t) {
                            var n = this;
                            this._data[e] = t, this.ui.applyTune(e, t), "stretched" === e && Promise.resolve().then(function() {
                                var e = n.api.blocks.getCurrentBlockIndex();
                                n.api.blocks.stretchBlock(e, t);
                            }).catch(function(e) {
                                console.error(e);
                            });
                        }
                    },
                    {
                        key: "uploadFile",
                        value: function(e) {
                            var t = this;
                            this.uploader.uploadByFile(e, {
                                onPreview: function(e) {
                                    t.ui.showPreloader(e);
                                }
                            });
                        }
                    },
                    {
                        key: "uploadUrl",
                        value: function(e) {
                            this.ui.showPreloader(e), this.uploader.uploadByUrl(e);
                        }
                    },
                    {
                        key: "data",
                        set: function(t) {
                            var n = this;
                            this.image = t.file, this._data.caption = t.caption || "", this.ui.fillCaption(this._data.caption), e.tunes.forEach(function(e) {
                                var r = e.name, o = void 0 !== t[r] && (!0 === t[r] || "true" === t[r]);
                                n.setTune(r, o);
                            });
                        },
                        get: function() {
                            return this._data;
                        }
                    },
                    {
                        key: "image",
                        set: function(e) {
                            this._data.file = e || {}, e && e.url && this.ui.fillImage(e.url);
                        }
                    }
                ], [
                    {
                        key: "pasteConfig",
                        get: function() {
                            return {
                                tags: [
                                    {
                                        img: {
                                            src: !0
                                        }
                                    }
                                ],
                                patterns: {
                                    image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
                                },
                                files: {
                                    mimeTypes: [
                                        "image/*"
                                    ]
                                }
                            };
                        }
                    }
                ]), e;
            }();
        /**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */ }
    ]).default;
});

},{}],"jo6P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios , AxiosError , CanceledError , isCancel , CancelToken , VERSION , all , Cancel , isAxiosError , spread , toFormData , AxiosHeaders , HttpStatusCode , formToJSON , mergeConfig  } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"63MyY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63MyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"5By4s","./helpers/bind.js":"haRQb","./core/Axios.js":"cpqD8","./core/mergeConfig.js":"b85oP","./defaults/index.js":"hXfHM","./helpers/formDataToJSON.js":"01RfH","./cancel/CanceledError.js":"9PwCG","./cancel/CancelToken.js":"45wzn","./cancel/isCancel.js":"a0VmF","./env/data.js":"h29L9","./helpers/toFormData.js":"ajoez","./core/AxiosError.js":"3u8Tl","./helpers/spread.js":"dyQ8N","./helpers/isAxiosError.js":"eyiLq","./core/AxiosHeaders.js":"cgSSx","./helpers/HttpStatusCode.js":"fdR61","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5By4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString  } = Object.prototype;
const { getPrototypeOf  } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray  } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys =false  } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless  } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys  } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty  })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length  } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
};

},{"./helpers/bind.js":"haRQb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haRQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpqD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional , paramsSerializer , headers  } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        contextHeaders && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"5By4s","../helpers/buildURL.js":"3bwC2","./InterceptorManager.js":"1VRIM","./dispatchRequest.js":"6sjJ6","./mergeConfig.js":"b85oP","./buildFullPath.js":"1I5TW","../helpers/validator.js":"9vgkY","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}

},{"../utils.js":"5By4s","../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hz84m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"ajoez","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajoez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("adfd9b103875c2dd").Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"adfd9b103875c2dd":"fCgem","../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","../platform/node/classes/FormData.js":"aFlee","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"3u8Tl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFlee":[function(require,module,exports) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VRIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sjJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"eRqJY","../cancel/isCancel.js":"a0VmF","../defaults/index.js":"hXfHM","../cancel/CanceledError.js":"9PwCG","../core/AxiosHeaders.js":"cgSSx","../adapters/adapters.js":"d7JxI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"./../utils.js":"5By4s","../defaults/index.js":"hXfHM","../core/AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXfHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
const DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = (0, _utilsJsDefault.default).merge(DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","./transitional.js":"lM32f","../helpers/toFormData.js":"ajoez","../helpers/toURLEncodedForm.js":"9hjry","../platform/index.js":"7tDev","../helpers/formDataToJSON.js":"01RfH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lM32f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hjry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

},{"../utils.js":"5By4s","./toFormData.js":"ajoez","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tDev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _indexJsDefault.default));
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./node/index.js":"cVeqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVeqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"5cIHE","./classes/FormData.js":"7i1jd","./classes/Blob.js":"8chF6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cIHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7i1jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof FormData !== "undefined" ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8chF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof Blob !== "undefined" ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01RfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgSSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders.prototype);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"5By4s","../helpers/parseHeaders.js":"kqDd5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqDd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0VmF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PwCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"3u8Tl","../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7JxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length  } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, _utilsJsDefault.default).isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, _axiosErrorJsDefault.default)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, _utilsJsDefault.default).hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, _utilsJsDefault.default).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"5By4s","./http.js":"aFlee","./xhr.js":"ldm57","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldm57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, _utilsJsDefault.default).isFormData(requestData)) {
            if ((0, _indexJsDefault.default).isStandardBrowserEnv || (0, _indexJsDefault.default).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, _isURLSameOriginJsDefault.default)(fullPath)) && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"5By4s","./../core/settle.js":"dD9aC","./../helpers/cookies.js":"4WJjt","./../helpers/buildURL.js":"3bwC2","../core/buildFullPath.js":"1I5TW","./../helpers/isURLSameOrigin.js":"lxXtv","../defaults/transitional.js":"lM32f","../core/AxiosError.js":"3u8Tl","../cancel/CanceledError.js":"9PwCG","../helpers/parseProtocol.js":"7NfWU","../platform/index.js":"7tDev","../core/AxiosHeaders.js":"cgSSx","../helpers/speedometer.js":"gQeo1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD9aC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WJjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, _utilsJsDefault.default).isString(path)) cookie.push("path=" + path);
            if ((0, _utilsJsDefault.default).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1I5TW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"jD6NM","../helpers/combineURLs.js":"brOWK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jD6NM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brOWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxXtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NfWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQeo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b85oP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"5By4s","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vgkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"h29L9","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h29L9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.4.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45wzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"9PwCG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyQ8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyiLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdR61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LBNh":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var o in e)n.d(r, o, (function(t) {
                return e[t];
            }).bind(null, o));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/", n(n.s = 5);
    }([
        function(e, t, n) {
            var r = n(1);
            "string" == typeof r && (r = [
                [
                    e.i,
                    r,
                    ""
                ]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n(3)(r, o);
            r.locals && (e.exports = r.locals);
        },
        function(e, t, n) {
            (e.exports = n(2)(!1)).push([
                e.i,
                ".cdx-simple-image {}\n\n.cdx-simple-image .cdx-loader {\n  min-height: 200px;\n}\n\n.cdx-simple-image .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-simple-image img {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n }\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-simple-image__picture--with-background {\n  background: #eff2f5;\n  padding: 10px;\n}\n\n.cdx-simple-image__picture--with-background img {\n  display: block;\n  max-width: 60%;\n  margin: 0 auto;\n}\n\n.cdx-simple-image__picture--with-border {\n  border: 1px solid #e8e8eb;\n  padding: 1px;\n}\n\n.cdx-simple-image__picture--stretched img {\n  max-width: none;\n  width: 100%;\n}\n",
                ""
            ]);
        },
        function(e, t) {
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n = e[1] || "", r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), i = r.sources.map(function(e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */";
                                });
                                return [
                                    n
                                ].concat(i).concat([
                                    o
                                ]).join("\n");
                            }
                            var a;
                            return [
                                n
                            ].join("\n");
                        }(t, e);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                    }).join("");
                }, t.i = function(e, n) {
                    "string" == typeof e && (e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ]);
                    for(var r = {}, o = 0; o < this.length; o++){
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0);
                    }
                    for(o = 0; o < e.length; o++){
                        var a = e[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
                    }
                }, t;
            };
        },
        function(e, t, n) {
            var r, o, i = {}, a = (r = function() {
                return window && document && document.all && !window.atob;
            }, function() {
                return void 0 === o && (o = r.apply(this, arguments)), o;
            }), s = function(e) {
                var t = {};
                return function(e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = (function(e) {
                            return document.querySelector(e);
                        }).call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (e) {
                            n = null;
                        }
                        t[e] = n;
                    }
                    return t[e];
                };
            }(), c = null, l = 0, u = [], d = n(4);
            function p(e, t) {
                for(var n = 0; n < e.length; n++){
                    var r = e[n], o = i[r.id];
                    if (o) {
                        o.refs++;
                        for(var a = 0; a < o.parts.length; a++)o.parts[a](r.parts[a]);
                        for(; a < r.parts.length; a++)o.parts.push(b(r.parts[a], t));
                    } else {
                        var s = [];
                        for(a = 0; a < r.parts.length; a++)s.push(b(r.parts[a], t));
                        i[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        };
                    }
                }
            }
            function f(e, t) {
                for(var n = [], r = {}, o = 0; o < e.length; o++){
                    var i = e[o], a = t.base ? i[0] + t.base : i[0], s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                    r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                        id: a,
                        parts: [
                            s
                        ]
                    });
                }
                return n;
            }
            function h(e, t) {
                var n = s(e.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = u[u.length - 1];
                if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);
                else if ("bottom" === e.insertAt) n.appendChild(t);
                else {
                    if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = s(e.insertInto + " " + e.insertAt.before);
                    n.insertBefore(t, o);
                }
            }
            function m(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var t = u.indexOf(e);
                t >= 0 && u.splice(t, 1);
            }
            function g(e) {
                var t = document.createElement("style");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), v(t, e.attrs), h(e, t), t;
            }
            function v(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.setAttribute(n, t[n]);
                });
            }
            function b(e, t) {
                var n, r, o, i;
                if (t.transform && e.css) {
                    if (!(i = t.transform(e.css))) return function() {};
                    e.css = i;
                }
                if (t.singleton) {
                    var a = l++;
                    n = c || (c = g(t)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0);
                } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                    var t = document.createElement("link");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", v(t, e.attrs), h(e, t), t;
                }(t), r = (function(e, t, n) {
                    var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
                    (t.convertToAbsoluteUrls || i) && (r = d(r));
                    o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                    var a = new Blob([
                        r
                    ], {
                        type: "text/css"
                    }), s = e.href;
                    e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
                }).bind(null, n, t), o = function() {
                    m(n), n.href && URL.revokeObjectURL(n.href);
                }) : (n = g(t), r = (function(e, t) {
                    var n = t.css, r = t.media;
                    r && e.setAttribute("media", r);
                    if (e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        for(; e.firstChild;)e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n));
                    }
                }).bind(null, n), o = function() {
                    m(n);
                });
                return r(e), function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t);
                    } else o();
                };
            }
            e.exports = function(e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var n = f(e, t);
                return p(n, t), function(e) {
                    for(var r = [], o = 0; o < n.length; o++){
                        var a = n[o];
                        (s = i[a.id]).refs--, r.push(s);
                    }
                    e && p(f(e, t), t);
                    for(o = 0; o < r.length; o++){
                        var s;
                        if (0 === (s = r[o]).refs) {
                            for(var c = 0; c < s.parts.length; c++)s.parts[c]();
                            delete i[s.id];
                        }
                    }
                };
            };
            var k, y = (k = [], function(e, t) {
                return k[e] = t, k.filter(Boolean).join("\n");
            });
            function w(e, t, n, r) {
                var o = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = y(t, o);
                else {
                    var i = document.createTextNode(o), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
        },
        function(e, t) {
            e.exports = function(e) {
                var t = "undefined" != typeof window && window.location;
                if (!t) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                    var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                        return t;
                    }).replace(/^'(.*)'$/, function(e, t) {
                        return t;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
                });
            };
        },
        function(e, t, n) {
            "use strict";
            n.r(t);
            n(0);
            const r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for(var t = 0, n = new Array(e.length); t < e.length; t++)n[t] = e[t];
                        return n;
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }();
            }
            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            n.d(t, "default", function() {
                return l;
            });
            var l = function() {
                function e(t) {
                    var n = t.data, a = (t.config, t.api), s = t.readOnly;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this.api = a, this.readOnly = s, this.blockIndex = this.api.blocks.getCurrentBlockIndex() + 1, this.CSS = {
                        baseClass: this.api.styles.block,
                        loading: this.api.styles.loader,
                        input: this.api.styles.input,
                        wrapper: "cdx-simple-image",
                        imageHolder: "cdx-simple-image__picture",
                        caption: "cdx-simple-image__caption"
                    }, this.nodes = {
                        wrapper: null,
                        imageHolder: null,
                        image: null,
                        caption: null
                    }, this.data = {
                        url: n.url || "",
                        caption: n.caption || "",
                        withBorder: void 0 !== n.withBorder && n.withBorder,
                        withBackground: void 0 !== n.withBackground && n.withBackground,
                        stretched: void 0 !== n.stretched && n.stretched
                    }, this.tunes = [
                        {
                            name: "withBorder",
                            label: "Add Border",
                            icon: o
                        },
                        {
                            name: "stretched",
                            label: "Stretch Image",
                            icon: i
                        },
                        {
                            name: "withBackground",
                            label: "Add Background",
                            icon: r
                        }
                    ];
                }
                var t, n, l;
                return t = e, l = [
                    {
                        key: "sanitize",
                        get: function() {
                            return {
                                url: {},
                                withBorder: {},
                                withBackground: {},
                                stretched: {},
                                caption: {
                                    br: !0
                                }
                            };
                        }
                    },
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "pasteConfig",
                        get: function() {
                            return {
                                patterns: {
                                    image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i
                                },
                                tags: [
                                    {
                                        img: {
                                            src: !0
                                        }
                                    }
                                ],
                                files: {
                                    mimeTypes: [
                                        "image/*"
                                    ]
                                }
                            };
                        }
                    }
                ], n = [
                    {
                        key: "render",
                        value: function() {
                            var e = this, t = this._make("div", [
                                this.CSS.baseClass,
                                this.CSS.wrapper
                            ]), n = this._make("div", this.CSS.loading), r = this._make("div", this.CSS.imageHolder), o = this._make("img"), i = this._make("div", [
                                this.CSS.input,
                                this.CSS.caption
                            ], {
                                contentEditable: !this.readOnly,
                                innerHTML: this.data.caption || ""
                            });
                            return i.dataset.placeholder = "Enter a caption", t.appendChild(n), this.data.url && (o.src = this.data.url), o.onload = function() {
                                t.classList.remove(e.CSS.loading), r.appendChild(o), t.appendChild(r), t.appendChild(i), n.remove(), e._acceptTuneView();
                            }, o.onerror = function(e) {
                                console.log("Failed to load an image", e);
                            }, this.nodes.imageHolder = r, this.nodes.wrapper = t, this.nodes.image = o, this.nodes.caption = i, t;
                        }
                    },
                    {
                        key: "save",
                        value: function(e) {
                            var t = e.querySelector("img"), n = e.querySelector("." + this.CSS.input);
                            return t ? Object.assign(this.data, {
                                url: t.src,
                                caption: n.innerHTML
                            }) : this.data;
                        }
                    },
                    {
                        key: "onDropHandler",
                        value: function(e) {
                            var t = new FileReader;
                            return t.readAsDataURL(e), new Promise(function(n) {
                                t.onload = function(t) {
                                    n({
                                        url: t.target.result,
                                        caption: e.name
                                    });
                                };
                            });
                        }
                    },
                    {
                        key: "onPaste",
                        value: function(e) {
                            var t = this;
                            switch(e.type){
                                case "tag":
                                    var n = e.detail.data;
                                    this.data = {
                                        url: n.src
                                    };
                                    break;
                                case "pattern":
                                    var r = e.detail.data;
                                    this.data = {
                                        url: r
                                    };
                                    break;
                                case "file":
                                    var o = e.detail.file;
                                    this.onDropHandler(o).then(function(e) {
                                        t.data = e;
                                    });
                            }
                        }
                    },
                    {
                        key: "renderSettings",
                        value: function() {
                            var e = this;
                            return this.tunes.map(function(t) {
                                return function(e) {
                                    for(var t = 1; t < arguments.length; t++){
                                        var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }))), r.forEach(function(t) {
                                            s(e, t, n[t]);
                                        });
                                    }
                                    return e;
                                }({}, t, {
                                    label: e.api.i18n.t(t.label),
                                    toggle: !0,
                                    onActivate: function() {
                                        return e._toggleTune(t.name);
                                    },
                                    isActive: !!e.data[t.name]
                                });
                            });
                        }
                    },
                    {
                        key: "_make",
                        value: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = document.createElement(e);
                            Array.isArray(n) ? (t = o.classList).add.apply(t, a(n)) : n && o.classList.add(n);
                            for(var i in r)o[i] = r[i];
                            return o;
                        }
                    },
                    {
                        key: "_toggleTune",
                        value: function(e) {
                            this.data[e] = !this.data[e], this._acceptTuneView();
                        }
                    },
                    {
                        key: "_acceptTuneView",
                        value: function() {
                            var e = this;
                            this.tunes.forEach(function(t) {
                                e.nodes.imageHolder.classList.toggle(e.CSS.imageHolder + "--" + t.name.replace(/([A-Z])/g, function(e) {
                                    return "-".concat(e[0].toLowerCase());
                                }), !!e.data[t.name]), "stretched" === t.name && e.api.blocks.stretchBlock(e.blockIndex, !!e.data.stretched);
                            });
                        }
                    },
                    {
                        key: "data",
                        get: function() {
                            return this._data;
                        },
                        set: function(e) {
                            this._data = Object.assign({}, this.data, e), this.nodes.image && (this.nodes.image.src = this.data.url), this.nodes.caption && (this.nodes.caption.innerHTML = this.data.caption);
                        }
                    }
                ], c(t.prototype, n), l && c(t, l), e;
            }();
        }
    ]).default;
});

},{}],"8lX7A":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var i in e)n.d(r, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/", n(n.s = 6);
    }([
        function(e, t, n) {
            var r = n(1);
            "string" == typeof r && (r = [
                [
                    e.i,
                    r,
                    ""
                ]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n(3)(r, i);
            r.locals && (e.exports = r.locals);
        },
        function(e, t, n) {
            (e.exports = n(2)(!1)).push([
                e.i,
                ".cdx-checklist {\n    gap: 6px;\n    display: flex;\n    flex-direction: column;\n}\n\n    .cdx-checklist__item {\n        display: flex;\n        box-sizing: content-box;\n        align-items: flex-start;\n    }\n\n    .cdx-checklist__item-text {\n            outline: none;\n            flex-grow: 1;\n            line-height: 1.57em;\n        }\n\n    .cdx-checklist__item-checkbox {\n            width: 22px;\n            height: 22px;\n            display: flex;\n            align-items: center;\n            margin-right: 8px;\n            margin-top: calc(1.57em/2 - 22px/2);\n            cursor: pointer;\n        }\n\n    .cdx-checklist__item-checkbox svg {\n                opacity: 0;\n                height: 20px;\n                width: 20px;\n                position: absolute;\n                left: -1px;\n                top: -1px;\n                max-height: 20px;\n            }\n\n    @media (hover: hover) {\n                        .cdx-checklist__item-checkbox:not(.cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check svg {\n                            opacity: 1;\n                        }\n            }\n\n    .cdx-checklist__item-checkbox-check {\n                cursor: pointer;\n                display: inline-block;\n                flex-shrink: 0;\n                position: relative;\n                width: 20px;\n                height: 20px;\n                box-sizing: border-box;\n                margin-left: 0;\n                border-radius: 5px;\n                border: 1px solid #C9C9C9;\n                background: #fff;\n            }\n\n    .cdx-checklist__item-checkbox-check::before {\n                    content: '';\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                    bottom: 0;\n                    left: 0;\n                    border-radius: 100%;\n                    background-color: #369FFF;\n                    visibility: hidden;\n                    pointer-events: none;\n                    transform: scale(1);\n                    transition: transform 400ms ease-out, opacity 400ms;\n                }\n\n    @media (hover: hover) {\n                        .cdx-checklist__item--checked .cdx-checklist__item-checkbox:not(.cdx-checklist__item--checked .cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check {\n                            background: #0059AB;\n                            border-color: #0059AB;\n                        }\n                }\n\n    .cdx-checklist__item--checked .cdx-checklist__item-checkbox-check {\n                    background: #369FFF;\n                    border-color: #369FFF;\n                }\n\n    .cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg {\n                        opacity: 1;\n                    }\n\n    .cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg path {\n                            stroke: #fff;\n                        }\n\n    .cdx-checklist__item--checked .cdx-checklist__item-checkbox-check::before {\n                        opacity: 0;\n                        visibility: visible;\n                        transform: scale(2.5);\n                    }\n",
                ""
            ]);
        },
        function(e, t) {
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map(function(t) {
                        var n = function(e, t) {
                            var n = e[1] || "", r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var i = (c = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(c)))) + " */"), o = r.sources.map(function(e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */";
                                });
                                return [
                                    n
                                ].concat(o).concat([
                                    i
                                ]).join("\n");
                            }
                            var c;
                            return [
                                n
                            ].join("\n");
                        }(t, e);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                    }).join("");
                }, t.i = function(e, n) {
                    "string" == typeof e && (e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ]);
                    for(var r = {}, i = 0; i < this.length; i++){
                        var o = this[i][0];
                        "number" == typeof o && (r[o] = !0);
                    }
                    for(i = 0; i < e.length; i++){
                        var c = e[i];
                        "number" == typeof c[0] && r[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), t.push(c));
                    }
                }, t;
            };
        },
        function(e, t, n) {
            var r, i, o = {}, c = (r = function() {
                return window && document && document.all && !window.atob;
            }, function() {
                return void 0 === i && (i = r.apply(this, arguments)), i;
            }), s = function(e) {
                return document.querySelector(e);
            }, a = function(e) {
                var t = {};
                return function(e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = s.call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (e) {
                            n = null;
                        }
                        t[e] = n;
                    }
                    return t[e];
                };
            }(), l = null, u = 0, d = [], h = n(4);
            function f(e, t) {
                for(var n = 0; n < e.length; n++){
                    var r = e[n], i = o[r.id];
                    if (i) {
                        i.refs++;
                        for(var c = 0; c < i.parts.length; c++)i.parts[c](r.parts[c]);
                        for(; c < r.parts.length; c++)i.parts.push(x(r.parts[c], t));
                    } else {
                        var s = [];
                        for(c = 0; c < r.parts.length; c++)s.push(x(r.parts[c], t));
                        o[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        };
                    }
                }
            }
            function p(e, t) {
                for(var n = [], r = {}, i = 0; i < e.length; i++){
                    var o = e[i], c = t.base ? o[0] + t.base : o[0], s = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                    r[c] ? r[c].parts.push(s) : n.push(r[c] = {
                        id: c,
                        parts: [
                            s
                        ]
                    });
                }
                return n;
            }
            function m(e, t) {
                var n = a(e.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = d[d.length - 1];
                if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), d.push(t);
                else if ("bottom" === e.insertAt) n.appendChild(t);
                else {
                    if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var i = a(e.insertInto + " " + e.insertAt.before);
                    n.insertBefore(t, i);
                }
            }
            function v(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var t = d.indexOf(e);
                t >= 0 && d.splice(t, 1);
            }
            function b(e) {
                var t = document.createElement("style");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), k(t, e.attrs), m(e, t), t;
            }
            function k(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.setAttribute(n, t[n]);
                });
            }
            function x(e, t) {
                var n, r, i, o;
                if (t.transform && e.css) {
                    if (!(o = t.transform(e.css))) return function() {};
                    e.css = o;
                }
                if (t.singleton) {
                    var c = u++;
                    n = l || (l = b(t)), r = w.bind(null, n, c, !1), i = w.bind(null, n, c, !0);
                } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                    var t = document.createElement("link");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", k(t, e.attrs), m(e, t), t;
                }(t), r = _.bind(null, n, t), i = function() {
                    v(n), n.href && URL.revokeObjectURL(n.href);
                }) : (n = b(t), r = S.bind(null, n), i = function() {
                    v(n);
                });
                return r(e), function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t);
                    } else i();
                };
            }
            e.exports = function(e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = c()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var n = p(e, t);
                return f(n, t), function(e) {
                    for(var r = [], i = 0; i < n.length; i++){
                        var c = n[i];
                        (s = o[c.id]).refs--, r.push(s);
                    }
                    e && f(p(e, t), t);
                    for(i = 0; i < r.length; i++){
                        var s;
                        if (0 === (s = r[i]).refs) {
                            for(var a = 0; a < s.parts.length; a++)s.parts[a]();
                            delete o[s.id];
                        }
                    }
                };
            };
            var y, g = (y = [], function(e, t) {
                return y[e] = t, y.filter(Boolean).join("\n");
            });
            function w(e, t, n, r) {
                var i = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = g(t, i);
                else {
                    var o = document.createTextNode(i), c = e.childNodes;
                    c[t] && e.removeChild(c[t]), c.length ? e.insertBefore(o, c[t]) : e.appendChild(o);
                }
            }
            function S(e, t) {
                var n = t.css, r = t.media;
                if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for(; e.firstChild;)e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }
            function _(e, t, n) {
                var r = n.css, i = n.sourceMap, o = void 0 === t.convertToAbsoluteUrls && i;
                (t.convertToAbsoluteUrls || o) && (r = h(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var c = new Blob([
                    r
                ], {
                    type: "text/css"
                }), s = e.href;
                e.href = URL.createObjectURL(c), s && URL.revokeObjectURL(s);
            }
        },
        function(e, t) {
            e.exports = function(e) {
                var t = "undefined" != typeof window && window.location;
                if (!t) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                    var i, o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                        return t;
                    }).replace(/^'(.*)'$/, function(e, t) {
                        return t;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
                });
            };
        },
        function(e, t, n) {
            "use strict";
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
                var t = this;
                if (!document.documentElement.contains(t)) return null;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode;
                }while (null !== t && 1 === t.nodeType);
                return null;
            });
        },
        function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return h;
            });
            n(0);
            const r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>';
            function i(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            }
            function c() {
                var e = document.activeElement, t = window.getSelection().getRangeAt(0), n = t.cloneRange();
                return n.selectNodeContents(e), n.setStart(t.endContainer, t.endOffset), n.extractContents();
            }
            function s(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = document.createElement(e);
                Array.isArray(n) ? (t = o.classList).add.apply(t, i(n)) : n && o.classList.add(n);
                for(var c in r)o[c] = r[c];
                return o;
            }
            function a(e) {
                return e.innerHTML.replace("<br>", " ").trim();
            }
            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r = document.createRange(), i = window.getSelection();
                r.selectNodeContents(e), void 0 !== n && (r.setStart(e, n), r.setEnd(e, n)), r.collapse(t), i.removeAllRanges(), i.addRange(r);
            }
            n(5);
            function u(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function d(e, t, n) {
                return t && u(e.prototype, t), n && u(e, n), e;
            }
            var h = function() {
                function e(t) {
                    var n = t.data, r = (t.config, t.api), i = t.readOnly;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this._elements = {
                        wrapper: null,
                        items: []
                    }, this.readOnly = i, this.api = r, this.data = n || {};
                }
                return d(e, null, [
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "enableLineBreaks",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "toolbox",
                        get: function() {
                            return {
                                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>',
                                title: "Checklist"
                            };
                        }
                    },
                    {
                        key: "conversionConfig",
                        get: function() {
                            return {
                                export: function(e) {
                                    return e.items.map(function(e) {
                                        return e.text;
                                    }).join(". ");
                                },
                                import: function(e) {
                                    return {
                                        items: [
                                            {
                                                text: e,
                                                checked: !1
                                            }
                                        ]
                                    };
                                }
                            };
                        }
                    }
                ]), d(e, [
                    {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this._elements.wrapper = s("div", [
                                this.CSS.baseBlock,
                                this.CSS.wrapper
                            ]), this.data.items || (this.data.items = [
                                {
                                    text: "",
                                    checked: !1
                                }
                            ]), this.data.items.forEach(function(t) {
                                var n = e.createChecklistItem(t);
                                e._elements.wrapper.appendChild(n);
                            }), this.readOnly || (this._elements.wrapper.addEventListener("keydown", function(t) {
                                switch(t.keyCode){
                                    case 13:
                                        e.enterPressed(t);
                                        break;
                                    case 8:
                                        e.backspace(t);
                                }
                            }, !1), this._elements.wrapper.addEventListener("click", function(t) {
                                e.toggleCheckbox(t);
                            })), this._elements.wrapper;
                        }
                    },
                    {
                        key: "save",
                        value: function() {
                            var e = this, t = this.items.map(function(t) {
                                return {
                                    text: a(e.getItemInput(t)),
                                    checked: t.classList.contains(e.CSS.itemChecked)
                                };
                            });
                            return {
                                items: t = t.filter(function(e) {
                                    return 0 !== e.text.trim().length;
                                })
                            };
                        }
                    },
                    {
                        key: "validate",
                        value: function(e) {
                            return !!e.items.length;
                        }
                    },
                    {
                        key: "toggleCheckbox",
                        value: function(e) {
                            var t = this, n = e.target.closest(".".concat(this.CSS.item)), r = n.querySelector(".".concat(this.CSS.checkboxContainer));
                            r.contains(e.target) && (n.classList.toggle(this.CSS.itemChecked), r.classList.add(this.CSS.noHover), r.addEventListener("mouseleave", function() {
                                return t.removeSpecialHoverBehavior(r);
                            }, {
                                once: !0
                            }));
                        }
                    },
                    {
                        key: "createChecklistItem",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = s("div", this.CSS.item), n = s("span", this.CSS.checkbox), i = s("div", this.CSS.checkboxContainer), o = s("div", this.CSS.textField, {
                                innerHTML: e.text ? e.text : "",
                                contentEditable: !this.readOnly
                            });
                            return e.checked && t.classList.add(this.CSS.itemChecked), n.innerHTML = r, i.appendChild(n), t.appendChild(i), t.appendChild(o), t;
                        }
                    },
                    {
                        key: "enterPressed",
                        value: function(e) {
                            e.preventDefault();
                            var t = this.items, n = document.activeElement.closest(".".concat(this.CSS.item));
                            if (t.indexOf(n) === t.length - 1 && 0 === a(this.getItemInput(n)).length) {
                                var r = this.api.blocks.getCurrentBlockIndex();
                                return n.remove(), this.api.blocks.insert(), void this.api.caret.setToBlock(r + 1);
                            }
                            var i, o, s = c(), u = (i = s, (o = document.createElement("div")).appendChild(i), o.innerHTML), d = this.createChecklistItem({
                                text: u,
                                checked: !1
                            });
                            this._elements.wrapper.insertBefore(d, n.nextSibling), l(this.getItemInput(d), !0);
                        }
                    },
                    {
                        key: "backspace",
                        value: function(e) {
                            var t = e.target.closest(".".concat(this.CSS.item)), n = this.items.indexOf(t), r = this.items[n - 1];
                            if (r && 0 === window.getSelection().focusOffset) {
                                e.preventDefault();
                                var i = c(), o = this.getItemInput(r), s = o.childNodes.length;
                                o.appendChild(i), l(o, void 0, s), t.remove();
                            }
                        }
                    },
                    {
                        key: "removeSpecialHoverBehavior",
                        value: function(e) {
                            e.classList.remove(this.CSS.noHover);
                        }
                    },
                    {
                        key: "getItemInput",
                        value: function(e) {
                            return e.querySelector(".".concat(this.CSS.textField));
                        }
                    },
                    {
                        key: "CSS",
                        get: function() {
                            return {
                                baseBlock: this.api.styles.block,
                                wrapper: "cdx-checklist",
                                item: "cdx-checklist__item",
                                itemChecked: "cdx-checklist__item--checked",
                                noHover: "cdx-checklist__item-checkbox--no-hover",
                                checkbox: "cdx-checklist__item-checkbox-check",
                                textField: "cdx-checklist__item-text",
                                checkboxContainer: "cdx-checklist__item-checkbox"
                            };
                        }
                    },
                    {
                        key: "items",
                        get: function() {
                            return Array.from(this._elements.wrapper.querySelectorAll(".".concat(this.CSS.item)));
                        }
                    }
                ]), e;
            }();
        }
    ]).default;
});

},{}],"l0hGJ":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(window, function() {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for(var o in t)n.d(r, o, (function(e) {
                return t[e];
            }).bind(null, o));
            return r;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "/", n(n.s = 5);
    }([
        function(t, e, n) {
            var r = n(1);
            "string" == typeof r && (r = [
                [
                    t.i,
                    r,
                    ""
                ]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n(3)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function(t, e, n) {
            (t.exports = n(2)(!1)).push([
                t.i,
                ".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n",
                ""
            ]);
        },
        function(t, e) {
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map(function(e) {
                        var n = function(t, e) {
                            var n = t[1] || "", r = t[3];
                            if (!r) return n;
                            if (e && "function" == typeof btoa) {
                                var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), i = r.sources.map(function(t) {
                                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                                });
                                return [
                                    n
                                ].concat(i).concat([
                                    o
                                ]).join("\n");
                            }
                            var a;
                            return [
                                n
                            ].join("\n");
                        }(e, t);
                        return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
                    }).join("");
                }, e.i = function(t, n) {
                    "string" == typeof t && (t = [
                        [
                            null,
                            t,
                            ""
                        ]
                    ]);
                    for(var r = {}, o = 0; o < this.length; o++){
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0);
                    }
                    for(o = 0; o < t.length; o++){
                        var a = t[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
                    }
                }, e;
            };
        },
        function(t, e, n) {
            var r, o, i = {}, a = (r = function() {
                return window && document && document.all && !window.atob;
            }, function() {
                return void 0 === o && (o = r.apply(this, arguments)), o;
            }), s = function(t) {
                var e = {};
                return function(t) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var n = (function(t) {
                            return document.querySelector(t);
                        }).call(this, t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (t) {
                            n = null;
                        }
                        e[t] = n;
                    }
                    return e[t];
                };
            }(), c = null, u = 0, l = [], f = n(4);
            function d(t, e) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n], o = i[r.id];
                    if (o) {
                        o.refs++;
                        for(var a = 0; a < o.parts.length; a++)o.parts[a](r.parts[a]);
                        for(; a < r.parts.length; a++)o.parts.push(b(r.parts[a], e));
                    } else {
                        var s = [];
                        for(a = 0; a < r.parts.length; a++)s.push(b(r.parts[a], e));
                        i[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        };
                    }
                }
            }
            function p(t, e) {
                for(var n = [], r = {}, o = 0; o < t.length; o++){
                    var i = t[o], a = e.base ? i[0] + e.base : i[0], s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                    r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                        id: a,
                        parts: [
                            s
                        ]
                    });
                }
                return n;
            }
            function h(t, e) {
                var n = s(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = l[l.length - 1];
                if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = s(t.insertInto + " " + t.insertAt.before);
                    n.insertBefore(e, o);
                }
            }
            function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = l.indexOf(t);
                e >= 0 && l.splice(e, 1);
            }
            function y(t) {
                var e = document.createElement("style");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), g(e, t.attrs), h(t, e), e;
            }
            function g(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function b(t, e) {
                var n, r, o, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function() {};
                    t.css = i;
                }
                if (e.singleton) {
                    var a = u++;
                    n = c || (c = y(e)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                    var e = document.createElement("link");
                    return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", g(e, t.attrs), h(t, e), e;
                }(e), r = (function(t, e, n) {
                    var r = n.css, o = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
                    (e.convertToAbsoluteUrls || i) && (r = f(r));
                    o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                    var a = new Blob([
                        r
                    ], {
                        type: "text/css"
                    }), s = t.href;
                    t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
                }).bind(null, n, e), o = function() {
                    v(n), n.href && URL.revokeObjectURL(n.href);
                }) : (n = y(e), r = (function(t, e) {
                    var n = e.css, r = e.media;
                    r && t.setAttribute("media", r);
                    if (t.styleSheet) t.styleSheet.cssText = n;
                    else {
                        for(; t.firstChild;)t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(n));
                    }
                }).bind(null, n), o = function() {
                    v(n);
                });
                return r(t), function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        r(t = e);
                    } else o();
                };
            }
            t.exports = function(t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = p(t, e);
                return d(n, e), function(t) {
                    for(var r = [], o = 0; o < n.length; o++){
                        var a = n[o];
                        (s = i[a.id]).refs--, r.push(s);
                    }
                    t && d(p(t, e), e);
                    for(o = 0; o < r.length; o++){
                        var s;
                        if (0 === (s = r[o]).refs) {
                            for(var c = 0; c < s.parts.length; c++)s.parts[c]();
                            delete i[s.id];
                        }
                    }
                };
            };
            var m, w = (m = [], function(t, e) {
                return m[t] = e, m.filter(Boolean).join("\n");
            });
            function x(t, e, n, r) {
                var o = n ? "" : r.css;
                if (t.styleSheet) t.styleSheet.cssText = w(e, o);
                else {
                    var i = document.createTextNode(o), a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
        },
        function(t, e) {
            t.exports = function(t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host, r = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                    var o, i = e.trim().replace(/^"(.*)"$/, function(t, e) {
                        return e;
                    }).replace(/^'(.*)'$/, function(t, e) {
                        return e;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
                });
            };
        },
        function(t, e, n) {
            "use strict";
            n.r(e);
            n(0);
            function r(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for(var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e];
                        return n;
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }();
            }
            function o(t, e) {
                for(var n = 0; n < e.length; n++){
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function i(t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t;
            }
            n.d(e, "default", function() {
                return a;
            });
            var a = function() {
                function t(e) {
                    var n = e.data, r = e.config, o = e.api, i = e.readOnly;
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t);
                    var a = t.ALIGNMENTS, s = t.DEFAULT_ALIGNMENT;
                    this.api = o, this.readOnly = i, this.quotePlaceholder = r.quotePlaceholder || t.DEFAULT_QUOTE_PLACEHOLDER, this.captionPlaceholder = r.captionPlaceholder || t.DEFAULT_CAPTION_PLACEHOLDER, this.data = {
                        text: n.text || "",
                        caption: n.caption || "",
                        alignment: Object.values(a).includes(n.alignment) && n.alignment || r.defaultAlignment || s
                    };
                }
                return i(t, [
                    {
                        key: "CSS",
                        get: function() {
                            return {
                                baseClass: this.api.styles.block,
                                wrapper: "cdx-quote",
                                text: "cdx-quote__text",
                                input: this.api.styles.input,
                                caption: "cdx-quote__caption"
                            };
                        }
                    },
                    {
                        key: "settings",
                        get: function() {
                            return [
                                {
                                    name: "left",
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>'
                                },
                                {
                                    name: "center",
                                    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>'
                                }
                            ];
                        }
                    }
                ], [
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "toolbox",
                        get: function() {
                            return {
                                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>',
                                title: "Quote"
                            };
                        }
                    },
                    {
                        key: "contentless",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "enableLineBreaks",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "DEFAULT_QUOTE_PLACEHOLDER",
                        get: function() {
                            return "Enter a quote";
                        }
                    },
                    {
                        key: "DEFAULT_CAPTION_PLACEHOLDER",
                        get: function() {
                            return "Enter a caption";
                        }
                    },
                    {
                        key: "ALIGNMENTS",
                        get: function() {
                            return {
                                left: "left",
                                center: "center"
                            };
                        }
                    },
                    {
                        key: "DEFAULT_ALIGNMENT",
                        get: function() {
                            return t.ALIGNMENTS.left;
                        }
                    },
                    {
                        key: "conversionConfig",
                        get: function() {
                            return {
                                import: "text",
                                export: function(t) {
                                    return t.caption ? "".concat(t.text, " — ").concat(t.caption) : t.text;
                                }
                            };
                        }
                    }
                ]), i(t, [
                    {
                        key: "render",
                        value: function() {
                            var t = this._make("blockquote", [
                                this.CSS.baseClass,
                                this.CSS.wrapper
                            ]), e = this._make("div", [
                                this.CSS.input,
                                this.CSS.text
                            ], {
                                contentEditable: !this.readOnly,
                                innerHTML: this.data.text
                            }), n = this._make("div", [
                                this.CSS.input,
                                this.CSS.caption
                            ], {
                                contentEditable: !this.readOnly,
                                innerHTML: this.data.caption
                            });
                            return e.dataset.placeholder = this.quotePlaceholder, n.dataset.placeholder = this.captionPlaceholder, t.appendChild(e), t.appendChild(n), t;
                        }
                    },
                    {
                        key: "save",
                        value: function(t) {
                            var e = t.querySelector(".".concat(this.CSS.text)), n = t.querySelector(".".concat(this.CSS.caption));
                            return Object.assign(this.data, {
                                text: e.innerHTML,
                                caption: n.innerHTML
                            });
                        }
                    },
                    {
                        key: "renderSettings",
                        value: function() {
                            var t = this;
                            return this.settings.map(function(e) {
                                var n;
                                return {
                                    icon: e.icon,
                                    label: t.api.i18n.t("Align ".concat((n = e.name, n[0].toUpperCase() + n.substr(1)))),
                                    onActivate: function() {
                                        return t._toggleTune(e.name);
                                    },
                                    isActive: t.data.alignment === e.name,
                                    closeOnActivate: !0
                                };
                            });
                        }
                    },
                    {
                        key: "_toggleTune",
                        value: function(t) {
                            this.data.alignment = t;
                        }
                    },
                    {
                        key: "_make",
                        value: function(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = document.createElement(t);
                            Array.isArray(n) ? (e = i.classList).add.apply(e, r(n)) : n && i.classList.add(n);
                            for(var a in o)i[a] = o[a];
                            return i;
                        }
                    }
                ], [
                    {
                        key: "sanitize",
                        get: function() {
                            return {
                                text: {
                                    br: !0
                                },
                                caption: {
                                    br: !0
                                },
                                alignment: {}
                            };
                        }
                    }
                ]), t;
            }();
        }
    ]).default;
});

},{}]},["igKGj","8lqZg"], "8lqZg", "parcelRequire0da0")

//# sourceMappingURL=editor.975ef6c8.js.map
