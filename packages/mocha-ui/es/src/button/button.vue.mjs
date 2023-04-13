import { defineComponent as e, computed as s, openBlock as u, createElementBlock as c, normalizeClass as l, unref as a, renderSlot as m, createTextVNode as p } from "vue";
import "./style/index.css";
const _ = /* @__PURE__ */ p("mocha-ui"), d = e({ name: "mo-button" }), y = /* @__PURE__ */ e({
  ...d,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = s(() => ({ [`mo-button--${t.type}`]: t.type }));
    return (r, f) => (u(), c("button", {
      class: l(["mo-button", a(n)])
    }, [
      m(r.$slots, "default", {}, () => [
        _
      ])
    ], 2));
  }
});
export {
  y as default
};
