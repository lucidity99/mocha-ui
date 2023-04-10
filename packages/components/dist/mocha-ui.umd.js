(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["mocha-ui"] = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const index$1 = "";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    name: "button",
    props: {
      type: null
    },
    setup(__props) {
      const buttonProps = __props;
      defineOptions({ name: "mo-button" });
      const buttonStyle = vue.computed(() => {
        return { [`mo-button--${buttonProps.type}`]: buttonProps.type };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: vue.normalizeClass(["mo-button", vue.unref(buttonStyle)])
        }, "测试按钮", 2);
      };
    }
  });
  const withInstall = (comp) => {
    comp.install = (app) => {
      const name = comp.name;
      app.component(name, comp);
    };
    return comp;
  };
  const Button = withInstall(_sfc_main);
  const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Button
  }, Symbol.toStringTag, { value: "Module" }));
  const index = {
    install: (app) => {
      for (let c in components) {
        app.use(components[c]);
      }
    }
  };
  exports2.Button = Button;
  exports2.default = index;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
