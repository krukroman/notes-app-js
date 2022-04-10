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
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainScss = require("./sass/main.scss");
var _app = require("./js/app");
var _appDefault = parcelHelpers.interopDefault(_app);
_appDefault.default.init();

},{"./sass/main.scss":"dFl68","./js/app":"8lRBv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFl68":[function() {},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ = require("./renderFunctions/");
var _utils = require("./utils");
const App = {
    init () {
        _.renderMainLayout();
        _.renderNotes(_utils.getActiveNotes());
        _.renderSummaryList();
    }
};
exports.default = App;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./renderFunctions/":"g1W6M","./utils":"krKbQ"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"g1W6M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderNotes", ()=>_renderNotesDefault.default
);
parcelHelpers.export(exports, "renderEditor", ()=>_renderEditorDefault.default
);
parcelHelpers.export(exports, "renderMainLayout", ()=>_renderMainLayoutDefault.default
);
parcelHelpers.export(exports, "renderSummaryList", ()=>_renderSummaryListDefault.default
);
parcelHelpers.export(exports, "unmountEditor", ()=>_unmountEditorDefault.default
);
var _renderNotes = require("./renderNotes");
var _renderNotesDefault = parcelHelpers.interopDefault(_renderNotes);
var _renderEditor = require("./renderEditor");
var _renderEditorDefault = parcelHelpers.interopDefault(_renderEditor);
var _renderMainLayout = require("./renderMainLayout");
var _renderMainLayoutDefault = parcelHelpers.interopDefault(_renderMainLayout);
var _renderSummaryList = require("./renderSummaryList");
var _renderSummaryListDefault = parcelHelpers.interopDefault(_renderSummaryList);
var _unmountEditor = require("./unmountEditor");
var _unmountEditorDefault = parcelHelpers.interopDefault(_unmountEditor);

},{"./renderEditor":"aVsSM","./renderMainLayout":"3m2GS","./renderSummaryList":"8ANva","./unmountEditor":"47z2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./renderNotes":"g7Tab"}],"aVsSM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _modal = require("../components/Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);
var _editorForm = require("../components/EditorForm");
var _editorFormDefault = parcelHelpers.interopDefault(_editorForm);
var _actions = require("../actions");
const portal = _utils.refs.portalContainer();
const renderEditor = (note = false)=>{
    portal.insertAdjacentHTML('beforeend', _modalDefault.default(_editorFormDefault.default(note)));
    _utils.refs.closeFormBtn().addEventListener('click', _actions.onCloseFormBtn);
    if (note) {
        _utils.refs.editForm().addEventListener('submit', (e)=>_actions.onEditSubmit(e, note)
        );
        return;
    }
    _utils.refs.editForm().addEventListener('submit', _actions.onCreateSubmit);
};
exports.default = renderEditor;

},{"../utils":"krKbQ","../components/Modal":"bh6Kq","../components/EditorForm":"6hniG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../actions":"ccGLY"}],"krKbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CATEGORIES", ()=>_categoriesDefault.default
);
parcelHelpers.export(exports, "getActiveNotes", ()=>_getActiveNotesDefault.default
);
parcelHelpers.export(exports, "getArchivedNotes", ()=>_getArchivedNotesDefault.default
);
parcelHelpers.export(exports, "getNotesStatistics", ()=>_getNotesStatisticsDefault.default
);
parcelHelpers.export(exports, "insertCategoryIcon", ()=>_insertCategoryIconDefault.default
);
parcelHelpers.export(exports, "transformDate", ()=>_transformDateDefault.default
);
parcelHelpers.export(exports, "parseDateFromText", ()=>_parseDateFromTextDefault.default
);
parcelHelpers.export(exports, "NOTES", ()=>_notesDefault.default
);
parcelHelpers.export(exports, "refs", ()=>_refsDefault.default
);
parcelHelpers.export(exports, "getNoteId", ()=>_getNoteIdDefault.default
);
var _categories = require("./categories");
var _categoriesDefault = parcelHelpers.interopDefault(_categories);
var _getActiveNotes = require("./getActiveNotes");
var _getActiveNotesDefault = parcelHelpers.interopDefault(_getActiveNotes);
var _getArchivedNotes = require("./getArchivedNotes");
var _getArchivedNotesDefault = parcelHelpers.interopDefault(_getArchivedNotes);
var _getNotesStatistics = require("./getNotesStatistics");
var _getNotesStatisticsDefault = parcelHelpers.interopDefault(_getNotesStatistics);
var _insertCategoryIcon = require("./insertCategoryIcon");
var _insertCategoryIconDefault = parcelHelpers.interopDefault(_insertCategoryIcon);
var _transformDate = require("./transformDate");
var _transformDateDefault = parcelHelpers.interopDefault(_transformDate);
var _parseDateFromText = require("./parseDateFromText");
var _parseDateFromTextDefault = parcelHelpers.interopDefault(_parseDateFromText);
var _notes = require("./notes");
var _notesDefault = parcelHelpers.interopDefault(_notes);
var _refs = require("./refs");
var _refsDefault = parcelHelpers.interopDefault(_refs);
var _getNoteId = require("./getNoteId");
var _getNoteIdDefault = parcelHelpers.interopDefault(_getNoteId);

},{"./categories":"dinEa","./getActiveNotes":"79SgF","./getArchivedNotes":"f4b8z","./getNotesStatistics":"1z5qd","./insertCategoryIcon":"9uGs5","./transformDate":"kBSkQ","./parseDateFromText":"2o7GS","./notes":"fG4Mp","./refs":"4nH5D","./getNoteId":"n9FiV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dinEa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const CATEGORIES = {
    IDEA: 'Idea',
    QUOTE: 'Quote',
    RANDOM_THOUGHT: 'Random Thought',
    TASK: 'Task'
};
exports.default = CATEGORIES;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79SgF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../api");
const getActiveNotes = ()=>_api.getNotes().filter((note)=>!note.archived
    )
;
exports.default = getActiveNotes;

},{"../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TCp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNotes", ()=>_getNotesDefault.default
);
parcelHelpers.export(exports, "addNote", ()=>_addNoteDefault.default
);
parcelHelpers.export(exports, "deleteNote", ()=>_deleteNoteDefault.default
);
parcelHelpers.export(exports, "updateNote", ()=>_updateNoteDefault.default
);
parcelHelpers.export(exports, "handleArchive", ()=>_handleArchiveDefault.default
);
parcelHelpers.export(exports, "getById", ()=>_getByIdDefault.default
);
var _getNotes = require("./getNotes");
var _getNotesDefault = parcelHelpers.interopDefault(_getNotes);
var _addNote = require("./addNote");
var _addNoteDefault = parcelHelpers.interopDefault(_addNote);
var _deleteNote = require("./deleteNote");
var _deleteNoteDefault = parcelHelpers.interopDefault(_deleteNote);
var _updateNote = require("./updateNote");
var _updateNoteDefault = parcelHelpers.interopDefault(_updateNote);
var _handleArchive = require("./handleArchive");
var _handleArchiveDefault = parcelHelpers.interopDefault(_handleArchive);
var _getById = require("./getById");
var _getByIdDefault = parcelHelpers.interopDefault(_getById);

},{"./getNotes":"4DAoe","./addNote":"l9WbQ","./deleteNote":"2TkzI","./updateNote":"eIWhS","./handleArchive":"kRyAy","./getById":"bGOWH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DAoe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
const getNotes = ()=>{
    if (localStorage.hasOwnProperty('notes')) {
        const parsedNotes = JSON.parse(localStorage.getItem('notes'));
        return parsedNotes;
    }
    return _utils.NOTES;
};
exports.default = getNotes;

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9WbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNotes = require("./getNotes");
var _getNotesDefault = parcelHelpers.interopDefault(_getNotes);
var _saveNotes = require("./saveNotes");
var _saveNotesDefault = parcelHelpers.interopDefault(_saveNotes);
const addNote = (note)=>{
    const notes = _getNotesDefault.default();
    notes.push(note);
    _saveNotesDefault.default(notes);
};
exports.default = addNote;

},{"./getNotes":"4DAoe","./saveNotes":"7hJwd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7hJwd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const saveNotes = (notes)=>localStorage.setItem('notes', JSON.stringify(notes))
;
exports.default = saveNotes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TkzI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNotes = require("./getNotes");
var _getNotesDefault = parcelHelpers.interopDefault(_getNotes);
var _saveNotes = require("./saveNotes");
var _saveNotesDefault = parcelHelpers.interopDefault(_saveNotes);
const deleteNote = (id)=>{
    const notes = _getNotesDefault.default().filter((note)=>note.id !== id
    );
    _saveNotesDefault.default(notes);
};
exports.default = deleteNote;

},{"./getNotes":"4DAoe","./saveNotes":"7hJwd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIWhS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNotes = require("./getNotes");
var _getNotesDefault = parcelHelpers.interopDefault(_getNotes);
var _getIndex = require("./getIndex");
var _getIndexDefault = parcelHelpers.interopDefault(_getIndex);
var _saveNotes = require("./saveNotes");
var _saveNotesDefault = parcelHelpers.interopDefault(_saveNotes);
const updateNote = (id, data)=>{
    const notes = _getNotesDefault.default();
    let index = _getIndexDefault.default(notes, id);
    notes[index] = {
        ...notes[index],
        ...data
    };
    _saveNotesDefault.default(notes);
};
exports.default = updateNote;

},{"./getNotes":"4DAoe","./getIndex":"dtUhs","./saveNotes":"7hJwd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dtUhs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getIndex = (notes, id)=>{
    return notes.findIndex((note)=>note.id === id
    );
};
exports.default = getIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRyAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNotes = require("./getNotes");
var _getNotesDefault = parcelHelpers.interopDefault(_getNotes);
var _getIndex = require("./getIndex");
var _getIndexDefault = parcelHelpers.interopDefault(_getIndex);
var _saveNotes = require("./saveNotes");
var _saveNotesDefault = parcelHelpers.interopDefault(_saveNotes);
const handleArchive = (id)=>{
    const notes = _getNotesDefault.default();
    let index = _getIndexDefault.default(notes, id);
    const archiveStatus = notes[index].archived;
    notes[index] = {
        ...notes[index],
        archived: !archiveStatus
    };
    _saveNotesDefault.default(notes);
};
exports.default = handleArchive;

},{"./getNotes":"4DAoe","./getIndex":"dtUhs","./saveNotes":"7hJwd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGOWH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNotes = require("./getNotes");
var _getNotesDefault = parcelHelpers.interopDefault(_getNotes);
const getById = (id)=>{
    const notes = _getNotesDefault.default();
    return notes.find((note)=>note.id === id
    );
};
exports.default = getById;

},{"./getNotes":"4DAoe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4b8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../api");
const getArchivedNotes = ()=>_api.getNotes().filter((note)=>note.archived
    )
;
exports.default = getArchivedNotes;

},{"../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1z5qd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../api");
const groupByCategory = ()=>{
    return _api.getNotes().reduce((acc, note)=>{
        acc[note.category] = acc[note.category] || [];
        acc[note.category].push(note);
        return acc;
    }, {});
};
const getNotesStatistics = ()=>{
    const notesByCategory = groupByCategory();
    let result = [];
    for(const category in notesByCategory)if (Object.hasOwnProperty.call(notesByCategory, category)) {
        const element = notesByCategory[category];
        const activeNotes = element.filter((note)=>!note.archived
        );
        const archivedNotes = element.filter((note)=>note.archived
        );
        result.push({
            category,
            active: activeNotes.length,
            archived: archivedNotes.length
        });
    }
    return result;
};
exports.default = getNotesStatistics;

},{"../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9uGs5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _categories = require("./categories");
var _categoriesDefault = parcelHelpers.interopDefault(_categories);
var _spriteSvg = require("../../images/icons/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
const insertCategoryIcon = (category)=>{
    switch(category){
        case _categoriesDefault.default.IDEA:
            return `${_spriteSvgDefault.default}#icon-light`;
        case _categoriesDefault.default.QUOTE:
            return `${_spriteSvgDefault.default}#icon-quote`;
        case _categoriesDefault.default.RANDOM_THOUGHT:
            return `${_spriteSvgDefault.default}#icon-thinking`;
        case _categoriesDefault.default.TASK:
            return `${_spriteSvgDefault.default}#icon-cart`;
        default:
            break;
    }
};
exports.default = insertCategoryIcon;

},{"./categories":"dinEa","../../images/icons/sprite.svg":"2x1GP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2x1GP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('bLxZJ') + "sprite.6e20b4c5.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kBSkQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const transformDate = (string)=>{
    const date = new Date(string);
    const month = Intl.DateTimeFormat('en', {
        month: 'long'
    }).format(date);
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
};
exports.default = transformDate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2o7GS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const re = /((0?[1-9]|1[012])[- \/.](0?[1-9]|[12][0-9]|3[01])[- \/.](19|20)?[0-9]{2})/gm;
const parseDateFromText = (string)=>{
    return string.match(re) ? string.match(re).join(', ').replace(/-/g, '/') : '';
};
exports.default = parseDateFromText;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fG4Mp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const NOTES = [
    {
        id: '1',
        name: 'Lorem ipsum dolor sit amet.',
        created: new Date(),
        category: 'Idea',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit 05-19-2022. Cum quisquam nesciunt animi ab eos nihil',
        archived: false
    },
    {
        id: '2',
        name: 'Lorem ipsum',
        created: new Date(),
        category: 'Idea',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
        archived: false
    },
    {
        id: '3',
        name: 'Lorem ipsum dolor',
        created: new Date(),
        category: 'Quote',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
        archived: false
    },
    {
        id: '4',
        name: 'Lorem ipsum dolor sit',
        created: new Date(),
        category: 'Random Thought',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
        archived: false
    },
    {
        id: '5',
        name: 'Cum quisquam nesciunt',
        created: new Date(),
        category: 'Task',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit 04/09/22. Cum quisquam nesciunt animi ab eos nihil 04/18/22',
        archived: false
    },
    {
        id: '6',
        name: ' Cum quisquam nesciunt animi ab eos',
        created: new Date(),
        category: 'Task',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
        archived: false
    },
    {
        id: '7',
        name: 'Cum quisquam nesciunt animi ab eos nihil',
        created: new Date(),
        category: 'Random Thought',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
        archived: false
    }
];
exports.default = NOTES;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nH5D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const refs = {
    appContainer: ()=>document.getElementById('app')
    ,
    notesContainer: ()=>document.querySelector('.notes__content')
    ,
    summaryContainer: ()=>document.querySelector('.summary__content')
    ,
    portalContainer: ()=>document.getElementById('portal')
    ,
    createNoteBtn: ()=>document.querySelector('.create__btn')
    ,
    showArchivedBtn: ()=>document.querySelector('.archived')
    ,
    editBtns: ()=>document.querySelectorAll('.edit')
    ,
    archiveBtns: ()=>document.querySelectorAll('.archive')
    ,
    deleteBtns: ()=>document.querySelectorAll('.delete')
    ,
    editForm: ()=>document.getElementById('form')
    ,
    closeFormBtn: ()=>document.querySelector('.form__close__btn')
};
exports.default = refs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"n9FiV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getNoteId = (e)=>{
    return e.target.parentElement.parentElement.parentElement.id;
};
exports.default = getNoteId;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bh6Kq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_modalDefault.default
);
var _modal = require("./Modal");
var _modalDefault = parcelHelpers.interopDefault(_modal);

},{"./Modal":"fgK9K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgK9K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const Modal = (children)=>{
    return `<div class="backdrop">
        <div class="modal">
          ${children}
        </div>
      </div>`;
};
exports.default = Modal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6hniG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_editorFormDefault.default
);
var _editorForm = require("./EditorForm");
var _editorFormDefault = parcelHelpers.interopDefault(_editorForm);

},{"./EditorForm":"exWZa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exWZa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _categoriesOptions = require("../CategoriesOptions");
var _categoriesOptionsDefault = parcelHelpers.interopDefault(_categoriesOptions);
const EditorForm = ({ name ='' , category ='' , content =''  })=>{
    return `<form id="form" action=''>
            <label for="name">Note name</label>
            <input id="name" name="name" type="text" value="${name}" required />
            <label for="category">Category</label>
            <select name="category" id="category">
              <option
               value="${category ? category : 'default'}"
               selected>
               ${category ? category : 'Choose category'}
              </option>
              ${_categoriesOptionsDefault.default(category)}
            </select>
            <label for="content">Content</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              required
            >${content}</textarea>
            <div class="form__button__group">
              <button type="button" class='form__close__btn'>Close</button>
              <button type="submit">Save</button>
            </div>            
          </form>`;
};
exports.default = EditorForm;

},{"../CategoriesOptions":"kt0gZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kt0gZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_categoriesOptionsDefault.default
);
var _categoriesOptions = require("./CategoriesOptions");
var _categoriesOptionsDefault = parcelHelpers.interopDefault(_categoriesOptions);

},{"./CategoriesOptions":"cJv5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJv5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils");
const CategoriesOptions = (category = '')=>{
    if (category) return Object.values(_utils.CATEGORIES).filter((value)=>value !== category
    ).map((value)=>`<option value="${value}">${value}</option>`
    ).join('');
    return Object.values(_utils.CATEGORIES).map((value)=>`<option value="${value}">${value}</option>`
    ).join('');
};
exports.default = CategoriesOptions;

},{"../../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccGLY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onArchiveBtn", ()=>_onArchiveBtnDefault.default
);
parcelHelpers.export(exports, "onCloseFormBtn", ()=>_onCloseFormBtnDefault.default
);
parcelHelpers.export(exports, "onCreateBtn", ()=>_onCreateBtnDefault.default
);
parcelHelpers.export(exports, "onCreateSubmit", ()=>_onCreateSubmitDefault.default
);
parcelHelpers.export(exports, "onDeleteBtn", ()=>_onDeleteBtnDefault.default
);
parcelHelpers.export(exports, "onEditBtn", ()=>_onEditBtnDefault.default
);
parcelHelpers.export(exports, "onEditSubmit", ()=>_onEditSubmitDefault.default
);
parcelHelpers.export(exports, "onShowArchivedBtn", ()=>_onShowArchivedBtnDefault.default
);
var _onArchiveBtn = require("./onArchiveBtn");
var _onArchiveBtnDefault = parcelHelpers.interopDefault(_onArchiveBtn);
var _onCloseFormBtn = require("./onCloseFormBtn");
var _onCloseFormBtnDefault = parcelHelpers.interopDefault(_onCloseFormBtn);
var _onCreateBtn = require("./onCreateBtn");
var _onCreateBtnDefault = parcelHelpers.interopDefault(_onCreateBtn);
var _onCreateSubmit = require("./onCreateSubmit");
var _onCreateSubmitDefault = parcelHelpers.interopDefault(_onCreateSubmit);
var _onDeleteBtn = require("./onDeleteBtn");
var _onDeleteBtnDefault = parcelHelpers.interopDefault(_onDeleteBtn);
var _onEditBtn = require("./onEditBtn");
var _onEditBtnDefault = parcelHelpers.interopDefault(_onEditBtn);
var _onEditSubmit = require("./onEditSubmit");
var _onEditSubmitDefault = parcelHelpers.interopDefault(_onEditSubmit);
var _onShowArchivedBtn = require("./onShowArchivedBtn");
var _onShowArchivedBtnDefault = parcelHelpers.interopDefault(_onShowArchivedBtn);

},{"./onArchiveBtn":"jWIKb","./onCloseFormBtn":"6wERn","./onCreateBtn":"2ifsb","./onCreateSubmit":"iD5X5","./onDeleteBtn":"gWLhP","./onEditBtn":"1B6VA","./onShowArchivedBtn":"ctMo2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./onEditSubmit":"3kfeu"}],"jWIKb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _api = require("../api");
var _renderFunctions = require("../renderFunctions");
const onArchiveBtn = (e)=>{
    const id = _utils.getNoteId(e);
    const note = _api.getById(id);
    _api.handleArchive(id);
    note.archived ? _renderFunctions.renderNotes(_utils.getArchivedNotes()) : _renderFunctions.renderNotes(_utils.getActiveNotes());
    _renderFunctions.renderSummaryList();
};
exports.default = onArchiveBtn;

},{"../utils":"krKbQ","../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M"}],"6wERn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderFunctions = require("../renderFunctions");
const onCloseFormBtn = ()=>_renderFunctions.unmountEditor()
;
exports.default = onCloseFormBtn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M"}],"2ifsb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _renderFunctions = require("../renderFunctions");
const onCreateBtn = (e)=>{
    _renderFunctions.renderEditor();
};
exports.default = onCreateBtn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M"}],"iD5X5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nanoid = require("nanoid");
var _api = require("../api");
var _renderFunctions = require("../renderFunctions");
var _utils = require("../utils");
const onCreateSubmit = (e)=>{
    e.preventDefault();
    const id = _nanoid.nanoid(10);
    const created = new Date();
    const formData = new FormData(e.currentTarget);
    const note = Object.fromEntries(formData);
    if (note.category === 'default') {
        alert('Choose category');
        return;
    }
    const newNote = {
        id,
        created,
        ...note,
        archived: false
    };
    _api.addNote(newNote);
    _renderFunctions.unmountEditor();
    _renderFunctions.renderNotes(_utils.getActiveNotes());
    _renderFunctions.renderSummaryList();
};
exports.default = onCreateSubmit;

},{"nanoid":"2ifus","../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M","../utils":"krKbQ"}],"2ifus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid
);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet
);
parcelHelpers.export(exports, "customRandom", ()=>customRandom
);
parcelHelpers.export(exports, "urlAlphabet", ()=>_indexJs.urlAlphabet
);
parcelHelpers.export(exports, "random", ()=>random
);
var _indexJs = require("./url-alphabet/index.js");
let random = (bytes)=>crypto.getRandomValues(new Uint8Array(bytes))
;
let customRandom = (alphabet, defaultSize, getRandom)=>{
    let mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
    let step = -~(1.6 * mask * defaultSize / alphabet.length);
    return (size = defaultSize)=>{
        let id = '';
        while(true){
            let bytes = getRandom(step);
            let j = step;
            while(j--){
                id += alphabet[bytes[j] & mask] || '';
                if (id.length === size) return id;
            }
        }
    };
};
let customAlphabet = (alphabet, size = 21)=>customRandom(alphabet, size, random)
;
let nanoid = (size = 21)=>{
    let id = '';
    let bytes = crypto.getRandomValues(new Uint8Array(size));
    while(size--){
        let byte = bytes[size] & 63;
        if (byte < 36) id += byte.toString(36);
        else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
        else if (byte < 63) id += '_';
        else id += '-';
    }
    return id;
};

},{"./url-alphabet/index.js":"8jQFj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jQFj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "urlAlphabet", ()=>urlAlphabet
);
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gWLhP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _api = require("../api");
var _renderFunctions = require("../renderFunctions");
const onDeleteBtn = (e)=>{
    const id = _utils.getNoteId(e);
    const note = _api.getById(id);
    _api.deleteNote(id);
    note.archived ? _renderFunctions.renderNotes(_utils.getArchivedNotes()) : _renderFunctions.renderNotes(_utils.getActiveNotes());
    _renderFunctions.renderSummaryList();
};
exports.default = onDeleteBtn;

},{"../utils":"krKbQ","../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M"}],"1B6VA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../api");
var _utils = require("../utils");
var _renderFunctions = require("../renderFunctions");
const onEditBtn = (e)=>{
    const id = _utils.getNoteId(e);
    const note = _api.getById(id);
    _renderFunctions.renderEditor(note);
};
exports.default = onEditBtn;

},{"../utils":"krKbQ","../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M"}],"ctMo2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _renderFunctions = require("../renderFunctions");
let showArchived = false;
const toggleShowArchived = ()=>{
    showArchived = !showArchived;
    return showArchived;
};
const onShowArchivedBtn = ()=>{
    const createNoteBtn = _utils.refs.createNoteBtn();
    toggleShowArchived();
    if (showArchived) {
        _renderFunctions.renderNotes(_utils.getArchivedNotes());
        createNoteBtn.style = 'display: none';
    } else {
        _renderFunctions.renderNotes(_utils.getActiveNotes());
        createNoteBtn.style = 'display: block';
    }
};
exports.default = onShowArchivedBtn;

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M"}],"3kfeu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("../api");
var _renderFunctions = require("../renderFunctions");
var _utils = require("../utils");
const onEditSubmit = (e, note)=>{
    e.preventDefault();
    const id = note.id;
    const formData = new FormData(e.currentTarget);
    const updatedNote = Object.fromEntries(formData);
    _api.updateNote(id, updatedNote);
    _renderFunctions.unmountEditor();
    note.archived ? _renderFunctions.renderNotes(_utils.getArchivedNotes()) : _renderFunctions.renderNotes(_utils.getActiveNotes());
    _renderFunctions.renderSummaryList();
};
exports.default = onEditSubmit;

},{"../api":"3TCp8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../renderFunctions":"g1W6M","../utils":"krKbQ"}],"3m2GS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _actions = require("../actions");
var _mainLayout = require("../components/MainLayout");
var _mainLayoutDefault = parcelHelpers.interopDefault(_mainLayout);
const addEventListeners = ()=>{
    const showArchivedBtn = _utils.refs.showArchivedBtn();
    const createBtn = _utils.refs.createNoteBtn();
    showArchivedBtn.addEventListener('click', _actions.onShowArchivedBtn);
    createBtn.addEventListener('click', _actions.onCreateBtn);
};
const renderMainLayout = ()=>{
    const app = _utils.refs.appContainer();
    app.insertAdjacentHTML('beforeend', _mainLayoutDefault.default());
    addEventListeners();
};
exports.default = renderMainLayout;

},{"../utils":"krKbQ","../components/MainLayout":"bxUty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../actions":"ccGLY"}],"bxUty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_mainLayoutDefault.default
);
var _mainLayout = require("./MainLayout");
var _mainLayoutDefault = parcelHelpers.interopDefault(_mainLayout);

},{"./MainLayout":"e5oTn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5oTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _notesHeader = require("../NotesHeader");
var _notesHeaderDefault = parcelHelpers.interopDefault(_notesHeader);
var _summaryHeader = require("../SummaryHeader");
var _summaryHeaderDefault = parcelHelpers.interopDefault(_summaryHeader);
const MainLayOut = ()=>{
    return `<div class="notes__list">
            ${_notesHeaderDefault.default()}
            <div class="notes__content"></div>
            <button class="create__btn" type="button">Create note</button>
          </div>
          <div class="notes__summary">
            ${_summaryHeaderDefault.default()}
            <div class="summary__content"></div>
          </div>`;
};
exports.default = MainLayOut;

},{"../NotesHeader":"g6jHy","../SummaryHeader":"cUDQ5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6jHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_notesHeaderJsDefault.default
);
var _notesHeaderJs = require("./NotesHeader.js");
var _notesHeaderJsDefault = parcelHelpers.interopDefault(_notesHeaderJs);

},{"./NotesHeader.js":"jyyCc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyyCc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spriteSvg = require("../../../images/icons/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
const NotesHeader = ()=>{
    return `<div class="notes__item notes__header row">
            <div class="icon"></div>
            <div class="col">Name</div>
            <div class="col">Created</div>
            <div class="col">Category</div>
            <div class="col">Content</div>
            <div class="col">Dates</div>
            <div class="actions">
                <div class="button__group">
                <button type="button" class="archived">
                    <svg width="20" height="20">
                    <use href="${_spriteSvgDefault.default}#icon-archive-in"></use>
                    </svg>
                </button>
                <button type="button">
                    <svg width="20" height="20">
                    <use href="${_spriteSvgDefault.default}#icon-delete"></use>
                    </svg>
                </button>
                <!-- end of button group -->
                </div>
            </div>
          </div>`;
};
exports.default = NotesHeader;

},{"../../../images/icons/sprite.svg":"2x1GP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUDQ5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_summaryHeaderDefault.default
);
var _summaryHeader = require("./SummaryHeader");
var _summaryHeaderDefault = parcelHelpers.interopDefault(_summaryHeader);

},{"./SummaryHeader":"33UfH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"33UfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const SummaryHeader = ()=>{
    return `<div class="notes__item notes__header row">
            <div class="icon"></div>
            <div class="col">Note Category</div>
            <div class="col">Active</div>
            <div class="col">Archived</div>
          </div>`;
};
exports.default = SummaryHeader;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ANva":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _summaryList = require("../components/SummaryList");
var _summaryListDefault = parcelHelpers.interopDefault(_summaryList);
var _notFound = require("../components/NotFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
const renderSummaryList = ()=>{
    const summaryWrapper = _utils.refs.summaryContainer();
    const statistics = _utils.getNotesStatistics();
    summaryWrapper.textContent = '';
    summaryWrapper.insertAdjacentHTML('beforeend', statistics.length >= 1 ? _summaryListDefault.default(statistics) : _notFoundDefault.default());
};
exports.default = renderSummaryList;

},{"../utils":"krKbQ","../components/SummaryList":"8KqsJ","../components/NotFound":"ln6R1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KqsJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_summaryListDefault.default
);
var _summaryList = require("./SummaryList");
var _summaryListDefault = parcelHelpers.interopDefault(_summaryList);

},{"./SummaryList":"bYYcI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYYcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _summaryItem = require("../SummaryItem");
var _summaryItemDefault = parcelHelpers.interopDefault(_summaryItem);
const SummaryLIst = (statistics)=>{
    return statistics.map((data)=>_summaryItemDefault.default(data)
    ).join('');
};
exports.default = SummaryLIst;

},{"../SummaryItem":"l0Paj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0Paj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_summaryItemDefault.default
);
var _summaryItem = require("./SummaryItem");
var _summaryItemDefault = parcelHelpers.interopDefault(_summaryItem);

},{"./SummaryItem":"b1VC4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1VC4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils");
var _itemContent = require("../ItemContent");
var _itemContentDefault = parcelHelpers.interopDefault(_itemContent);
const SummaryItem = (data)=>{
    const { category  } = data;
    return `<div class="row">
            <div class="icon">
                <svg width="20" height="20">
                  <use href="${_utils.insertCategoryIcon(category)}"></use>
                </svg>
            </div>
            ${_itemContentDefault.default(data)}                
            <!-- end of notes row -->
          </div>`;
};
exports.default = SummaryItem;

},{"../../utils":"krKbQ","../ItemContent":"alojs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alojs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_itemContentDefault.default
);
var _itemContent = require("./ItemContent");
var _itemContentDefault = parcelHelpers.interopDefault(_itemContent);

},{"./ItemContent":"ebune","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebune":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const ItemContent = (renderData)=>{
    return Object.values(renderData).map((value)=>`<div class="col">${value}</div>`
    ).join('');
};
exports.default = ItemContent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ln6R1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_notFoundDefault.default
);
var _notFound = require("./NotFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);

},{"./NotFound":"luQrK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"luQrK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _notFoundModuleScss = require("./NotFound.module.scss");
const NotFound = ()=>`<div class="${_notFoundModuleScss.notFound}">You do not have any notes, please add one</div>`
;
exports.default = NotFound;

},{"./NotFound.module.scss":"l8eTF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8eTF":[function(require,module,exports) {
module.exports["notFound"] = `-r-aFq_notFound`;

},{}],"47z2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
const portal = _utils.refs.portalContainer();
const unmountEditor = ()=>portal.textContent = ''
;
exports.default = unmountEditor;

},{"../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7Tab":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
var _actions = require("../actions");
var _notesList = require("../components/NotesList");
var _notesListDefault = parcelHelpers.interopDefault(_notesList);
var _notFound = require("../components/NotFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
const addEventListeners = ()=>{
    const editBtns = _utils.refs.editBtns();
    const archiveBtns = _utils.refs.archiveBtns();
    const deleteBtns = _utils.refs.deleteBtns();
    editBtns.forEach((btn)=>{
        btn.addEventListener('click', _actions.onEditBtn);
    });
    archiveBtns.forEach((btn)=>{
        btn.addEventListener('click', _actions.onArchiveBtn);
    });
    deleteBtns.forEach((btn)=>{
        btn.addEventListener('click', _actions.onDeleteBtn);
    });
};
const renderNotes = (notes)=>{
    const notesWrapper = _utils.refs.notesContainer();
    notesWrapper.textContent = '';
    notesWrapper.insertAdjacentHTML('beforeend', notes.length >= 1 ? _notesListDefault.default(notes) : _notFoundDefault.default());
    notes.length >= 1 && addEventListeners();
};
exports.default = renderNotes;

},{"../utils":"krKbQ","../actions":"ccGLY","../components/NotesList":"jPhOS","../components/NotFound":"ln6R1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPhOS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_noteListDefault.default
);
var _noteList = require("./NoteList");
var _noteListDefault = parcelHelpers.interopDefault(_noteList);

},{"./NoteList":"3WI0F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3WI0F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _noteItem = require("../NoteItem");
var _noteItemDefault = parcelHelpers.interopDefault(_noteItem);
const NoteLIst = (notes)=>{
    return notes.map((note)=>_noteItemDefault.default(note)
    ).join('');
};
exports.default = NoteLIst;

},{"../NoteItem":"6xKDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xKDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_noteItemDefault.default
);
var _noteItem = require("./NoteItem");
var _noteItemDefault = parcelHelpers.interopDefault(_noteItem);

},{"./NoteItem":"jVMGX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVMGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spriteSvg = require("../../../images/icons/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
var _itemContent = require("../ItemContent");
var _itemContentDefault = parcelHelpers.interopDefault(_itemContent);
var _utils = require("../../utils");
const NoteItem = (note)=>{
    const { id , name , created , category , content , archived  } = note;
    const insertArchiveIcon = ()=>{
        return archived ? `${_spriteSvgDefault.default}#icon-archive-out` : `${_spriteSvgDefault.default}#icon-archive-in`;
    };
    const transformedDate = _utils.transformDate(created);
    const dates = _utils.parseDateFromText(content);
    return `<div id="${id}" class="row">
            <div class="icon">
                <svg width="20" height="20">
                  <use href="${_utils.insertCategoryIcon(category)}"></use>
                </svg>
            </div>
            ${_itemContentDefault.default({
        name,
        created: transformedDate,
        category,
        content,
        dates
    })}                
            <div class="actions">
              <div class="button__group">
                <button type="button" class="edit">
                  <svg width="20" height="20">
                    <use href="${_spriteSvgDefault.default}#icon-edit"></use>
                  </svg>
                </button>
                <button type="button" class="archive">
                  <svg width="20" height="20">
                    <use
                      href="${insertArchiveIcon()}"
                    ></use>
                  </svg>
                </button>
                <button type="button" class="delete">
                  <svg width="20" height="20">
                    <use href="${_spriteSvgDefault.default}#icon-delete"></use>
                  </svg>
                </button>                    
              </div>
            </div>
          </div>`;
};
exports.default = NoteItem;

},{"../../../images/icons/sprite.svg":"2x1GP","../ItemContent":"alojs","../../utils":"krKbQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequireb90d")

//# sourceMappingURL=index.975ef6c8.js.map
