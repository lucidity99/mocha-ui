import { defineComponent as o, computed as r, openBlock as u, createElementBlock as c, normalizeClass as p, unref as s } from "vue";
import "./styles/index.scss";
const m = o({ name: "mo-button" }), f = /* @__PURE__ */ o({
  ...m,
  props: {
    type: null
  },
  setup(e) {
    const t = e, n = r(() => ({ [`mo-button--${t.type}`]: t.type }));
    return (l, a) => (u(), c("button", {
      class: p(["mo-button", s(n)])
    }, "测试按钮", 2));
  }
});
export {
  f as default
};
