import { defineComponent as p, useCssVars as B, inject as v, computed as y, resolveDirective as $, withDirectives as w, openBlock as u, createElementBlock as f, unref as c, renderSlot as g, createBlock as m, resolveDynamicComponent as I, withCtx as M, ref as S, watch as z, createCommentVNode as T, mergeProps as H, createElementVNode as h, createTextVNode as J, toDisplayString as K, toRefs as Q, onMounted as X, nextTick as Y, reactive as ee } from "vue";
function Z() {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let t = "";
  for (let a = 0; a < 6; a++) {
    const o = Math.floor(Math.random() * e.length);
    t += e.charAt(o);
  }
  return t;
}
const te = ["data-id"], ae = /* @__PURE__ */ p({
  __name: "CMainBar",
  setup(e) {
    var r, n;
    B((s) => ({
      "78077ec2": a.background,
      "06082152": a.color
    }));
    const t = v("theme"), a = {
      background: (r = t == null ? void 0 : t.CMainBar) == null ? void 0 : r.background,
      color: (n = t == null ? void 0 : t.CMainBar) == null ? void 0 : n.color
    }, o = Z();
    return y({
      get() {
        return t.CMainBar;
      },
      set(s) {
        return s;
      }
    }), (s, i) => {
      const l = $("style-setup");
      return w((u(), f("header", {
        "data-id": c(o),
        class: "CMainBar"
      }, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 8, te)), [
        [l, s.$.type, s.$attrs, c(o)]
      ]);
    };
  }
});
const b = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, r] of t)
    a[o] = r;
  return a;
}, oe = /* @__PURE__ */ b(ae, [["__scopeId", "data-v-f40a194a"]]);
var se = {}, re = { class: "CMain" };
function ne(e, t) {
  var a = $("style-setup");
  return w((u(), f("main", re, [
    g(e.$slots, "default", {}, void 0, !0)
  ])), [
    [a, e.$.type, e.$attrs]
  ]);
}
const le = /* @__PURE__ */ b(se, [["render", ne], ["__scopeId", "data-v-994719c5"]]), x = {
  breakpoints: {
    lg: "1620px",
    md: "1240px",
    sm: "1000px",
    xs: "720px"
  },
  layout: {
    background: "blue"
  },
  spaces: {
    base: "4px",
    sm: "4px",
    md: "16px 20px",
    lg: "16px 24px"
  },
  colors: {
    primary: "#007bff",
    secondary: "#6c757d"
    // Add more colors and design tokens here
  },
  text: {
    m: {
      size: "18px",
      bold: "700"
    },
    s: {
      size: "16px",
      bold: "700"
    },
    xs: {
      size: "14px",
      bold: "700"
    },
    xxs: {
      size: "12px",
      bold: "700"
    }
  },
  radii: {
    xl: "24px",
    lg: "12px",
    md: "8px",
    xs: "2px"
  },
  fontSize: {
    base: "1rem"
  },
  lineHeights: {
    base: "24px"
  },
  fontWeights: {
    bold: "900"
  }
};
function V(e, t) {
  const a = { ...e };
  for (const o in t)
    t.hasOwnProperty(o) && (t[o] && t[o].constructor === Object ? a[o] && a[o].constructor === Object ? a[o] = V(a[o], t[o]) : a[o] = { ...t[o] } : a[o] = t[o]);
  return a;
}
const ie = (e) => ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e) === !0, U = (e, t, a) => {
  var r;
  let o = t;
  return e.rounded === void 0 || (typeof (e == null ? void 0 : e.rounded) == "boolean" && (e == null ? void 0 : e.rounded) === !0 || ((r = e == null ? void 0 : e.rounded) == null ? void 0 : r.length) === 0 ? o.borderRadius = a.radii.lg : ie(e == null ? void 0 : e.rounded) ? o.borderRadius = a.radii[e == null ? void 0 : e.rounded] : o.borderRadius = e == null ? void 0 : e.rounded), o;
}, ce = {
  padding: "16px 20px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: x.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: "0px",
  lineHeight: x.lineHeights.base,
  fontWeight: x.fontWeights.bold
}, j = ({ colors: e, colorMode: t, additionalStyling: a }) => {
  let o = {
    light: {
      bg: e.bg.base,
      color: e.font.base,
      _hover: {
        bg: e.bg._hover,
        color: e.font._hover
      },
      _active: {
        bg: e.bg._active
      }
    },
    dark: {
      bg: e.bg.base,
      color: e.font.base,
      _hover: {
        bg: e.bg._hover,
        color: e.font._hover
      },
      _active: {
        bg: e.bg._active
      }
    }
  };
  return V(o[t], a);
}, de = (e) => {
  switch (e.variant) {
    case "primary":
      return j(e);
    case "secondary":
      return j(e);
    case "unstyled":
      return j(e);
    default:
      return j(e);
  }
}, E = (e) => ({
  ...U(e, ce, x),
  ...de(e)
}), ue = /* @__PURE__ */ p({
  __name: "CIcon",
  props: {
    as: {},
    space: {}
  },
  setup(e) {
    const t = Z();
    return (a, o) => {
      const r = $("style-setup");
      return w((u(), m(I(a.as), {
        "data-id": c(t),
        class: "CIcon"
      }, {
        default: M(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const L = /* @__PURE__ */ b(ue, [["__scopeId", "data-v-dab21008"]]), _e = /* @__PURE__ */ p({
  __name: "CButton",
  props: {
    as: {},
    to: {},
    type: {},
    variant: {},
    isDisabled: {},
    isLoading: {},
    isActive: {},
    loadingText: {},
    iconSpacing: {},
    leftIcon: {},
    rightIcon: {},
    rounded: {}
  },
  setup(e) {
    const { variant: t = "primary", as: a = "button", ...o } = e;
    B((d) => ({
      "7ee69889": c(l).lineHeight,
      b20a46fa: c(l).padding,
      "4e24f7a2": c(l).letterSpacing,
      "18ff1a75": c(l).height,
      "21530efc": c(l).margin,
      "013c3c6c": c(l).textAlign,
      "198cd2ac": c(l).borderRadius,
      "20140ebe": c(l).fontSize,
      "5c7a42b8": c(l).width,
      "2226c490": c(l).maxWidth,
      "71deb5f5": c(l).fontWeight,
      "222b6c93": c(l).bg,
      "5b634455": c(l).color,
      "36b71388": c(l)._hover.bg,
      "42dd3d40": c(l)._hover.color
    })), console.log(a);
    const r = v("theme"), n = v("colorMode"), s = Z();
    let i = y({
      get() {
        return r.CButton[t];
      },
      set(d) {
        return d;
      }
    }), l = S(E({ ...o, colors: i.value, colorMode: n.value }));
    return z(() => r, (d) => {
      l.value = E({ ...o, colors: i.value, colorMode: n.value });
    }, { deep: !0 }), (d, _) => {
      const C = $("style-setup");
      return w((u(), m(I(d.as ?? "button"), {
        "data-id": c(s),
        class: "CButton",
        disabled: d.isDisabled
      }, {
        default: M(() => [
          d.leftIcon ? (u(), m(L, {
            key: 0,
            as: d.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : T("", !0),
          g(d.$slots, "default", {}, void 0, !0),
          d.rightIcon ? (u(), m(L, {
            key: 1,
            as: d.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : T("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [C, d.$.type, d.$attrs, c(s)]
      ]);
    };
  }
});
const fe = /* @__PURE__ */ b(_e, [["__scopeId", "data-v-ad27d1d9"]]), he = /* @__PURE__ */ p({
  __name: "CCard",
  props: {
    as: {}
  },
  setup(e) {
    B((r) => ({
      "6f7ac7bf": a.borderRadius
    }));
    const a = {
      borderRadius: v("theme").radii.lg
    }, o = Z();
    return (r, n) => {
      const s = $("style-setup");
      return w((u(), m(I("div"), {
        "data-id": c(o),
        class: "CCard"
      }, {
        default: M(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, r.$.type, r.$attrs, c(o)]
      ]);
    };
  }
});
const ve = /* @__PURE__ */ b(he, [["__scopeId", "data-v-d073c29f"]]), ge = /* @__PURE__ */ p({
  __name: "CCardTitle",
  props: {
    as: {}
  },
  setup(e) {
    B((r) => ({
      "64e4ddeb": t.fontWeight,
      19608798: t.fontSize
    })), v("theme");
    const t = {
      fontWeight: "900",
      fontSize: "18px"
    };
    function a() {
      const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let n = "";
      for (let s = 0; s < 6; s++) {
        const i = Math.floor(Math.random() * r.length);
        n += r.charAt(i);
      }
      return n;
    }
    const o = a();
    return (r, n) => {
      const s = $("style-setup");
      return w((u(), m(I("h3"), {
        "data-id": c(o),
        class: "CCardTitle"
      }, {
        default: M(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, r.$.type, r.$attrs, c(o)]
      ]);
    };
  }
});
const pe = /* @__PURE__ */ b(ge, [["__scopeId", "data-v-27df9289"]]), me = /* @__PURE__ */ p({
  __name: "CCardContent",
  props: {
    as: {}
  },
  setup(e) {
    return v("theme"), (t, a) => {
      const o = $("style-setup");
      return w((u(), m(I("div"), { class: "CCardContent" }, {
        default: M(() => [
          g(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })), [
        [o, t.$.type, t.$attrs]
      ]);
    };
  }
});
const ye = /* @__PURE__ */ b(me, [["__scopeId", "data-v-0f0761fc"]]), be = ["data-id"], Ce = /* @__PURE__ */ p({
  __name: "CContainer",
  setup(e) {
    const t = Z();
    return (a, o) => {
      const r = $("style-setup");
      return w((u(), f("section", {
        "data-id": c(t),
        class: "CContainer"
      }, [
        g(a.$slots, "default", {}, void 0, !0)
      ], 8, be)), [
        [r, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const $e = /* @__PURE__ */ b(Ce, [["__scopeId", "data-v-ba427fa7"]]), we = /* @__PURE__ */ p({
  __name: "CText",
  props: {
    as: {}
  },
  setup(e) {
    var r;
    B((n) => ({
      "67cc747a": a.fontSize,
      "2703d668": a.marginBottom
    }));
    const t = v("theme"), a = {
      fontSize: "16px",
      color: (r = t == null ? void 0 : t.body) == null ? void 0 : r.color,
      marginBottom: t.spaces.sm
    }, o = Z();
    return (n, s) => {
      const i = $("style-setup");
      return w((u(), m(I(n.as), {
        "data-id": c(o),
        class: "CText"
      }, {
        default: M(() => [
          g(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [i, n.$.type, n.$attrs, c(o)]
      ]);
    };
  }
});
const G = /* @__PURE__ */ b(we, [["__scopeId", "data-v-ada08437"]]), ke = {
  padding: "10px 16px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: x.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: x.radii.xs,
  lineHeight: x.lineHeights.base,
  fontWeight: x.fontWeights.bold
}, O = ({ colors: e, colorMode: t, additionalStyling: a }) => {
  let o = {
    light: {
      bg: e.bg.base,
      color: e.font.base,
      _hover: {
        bg: e.bg._hover,
        color: e.font._hover
      },
      _active: {
        bg: e.bg._active
      }
    },
    dark: {
      bg: e.bg.base,
      color: e.font.base,
      _hover: {
        bg: e.bg._hover,
        color: e.font._hover
      },
      _active: {
        bg: e.bg._active
      }
    }
  };
  return V(o[t], a);
}, xe = (e) => {
  switch (e.variant) {
    case "information":
      return O(e);
    case "warning":
      return O(e);
    default:
      return O(e);
  }
}, q = (e) => ({
  ...U(e, ke, x),
  ...xe(e)
}), Ie = ["width", "height", "fill", "transform"], Ae = { key: 0 }, Me = /* @__PURE__ */ h("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1), Se = [
  Me
], Ze = { key: 1 }, Te = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), Be = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), Ve = [
  Te,
  Be
], ze = { key: 2 }, De = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), je = [
  De
], Le = { key: 3 }, Oe = /* @__PURE__ */ h("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), Re = [
  Oe
], Ee = { key: 4 }, qe = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), We = [
  qe
], Pe = { key: 5 }, Fe = /* @__PURE__ */ h("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), Ne = [
  Fe
], He = {
  name: "PhCheckCircle"
}, Ue = /* @__PURE__ */ p({
  ...He,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, a = v("weight", "regular"), o = v("size", "1em"), r = v("color", "currentColor"), n = v("mirrored", !1), s = y(() => t.weight ?? a), i = y(() => t.size ?? o), l = y(() => t.color ?? r), d = y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : n ? "scale(-1, 1)" : void 0);
    return (_, C) => (u(), f("svg", H({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: d.value
    }, _.$attrs), [
      g(_.$slots, "default"),
      s.value === "bold" ? (u(), f("g", Ae, Se)) : s.value === "duotone" ? (u(), f("g", Ze, Ve)) : s.value === "fill" ? (u(), f("g", ze, je)) : s.value === "light" ? (u(), f("g", Le, Re)) : s.value === "regular" ? (u(), f("g", Ee, We)) : s.value === "thin" ? (u(), f("g", Pe, Ne)) : T("", !0)
    ], 16, Ie));
  }
}), Ge = ["width", "height", "fill", "transform"], Je = { key: 0 }, Ke = /* @__PURE__ */ h("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }, null, -1), Qe = [
  Ke
], Xe = { key: 1 }, Ye = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), et = /* @__PURE__ */ h("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }, null, -1), tt = [
  Ye,
  et
], at = { key: 2 }, ot = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }, null, -1), st = [
  ot
], rt = { key: 3 }, nt = /* @__PURE__ */ h("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), lt = [
  nt
], it = { key: 4 }, ct = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, null, -1), dt = [
  ct
], ut = { key: 5 }, _t = /* @__PURE__ */ h("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), ft = [
  _t
], ht = {
  name: "PhInfo"
}, vt = /* @__PURE__ */ p({
  ...ht,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(e) {
    const t = e, a = v("weight", "regular"), o = v("size", "1em"), r = v("color", "currentColor"), n = v("mirrored", !1), s = y(() => t.weight ?? a), i = y(() => t.size ?? o), l = y(() => t.color ?? r), d = y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : n ? "scale(-1, 1)" : void 0);
    return (_, C) => (u(), f("svg", H({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: d.value
    }, _.$attrs), [
      g(_.$slots, "default"),
      s.value === "bold" ? (u(), f("g", Je, Qe)) : s.value === "duotone" ? (u(), f("g", Xe, tt)) : s.value === "fill" ? (u(), f("g", at, st)) : s.value === "light" ? (u(), f("g", rt, lt)) : s.value === "regular" ? (u(), f("g", it, dt)) : s.value === "thin" ? (u(), f("g", ut, ft)) : T("", !0)
    ], 16, Ge));
  }
}), gt = /* @__PURE__ */ p({
  __name: "CAlert",
  props: {
    title: {},
    as: {},
    type: {},
    variant: {},
    isDisabled: {},
    isLoading: {},
    isActive: {},
    loadingText: {},
    iconSpacing: {},
    leftIcon: {},
    rightIcon: {},
    rounded: {}
  },
  setup(e) {
    const { variant: t = "information", as: a = "div", ...o } = e;
    B((_) => ({
      c33effc8: c(l).bg,
      "7fef982c": c(l).color,
      "3f29cef5": c(l).borderRadius
    }));
    const r = v("theme"), n = v("colorMode"), s = Z();
    let i = y({
      get() {
        return r.CAlert[t];
      },
      set(_) {
        return _;
      }
    }), l = S(q({ ...o, colors: i.value, colorMode: n.value }));
    z(() => r, (_) => {
      l.value = q({ ...o, colors: i.value, colorMode: n.value });
    }, { deep: !0 });
    let d = y({
      get() {
        switch (t) {
          case "information":
            return vt;
          case "success":
            return Ue;
        }
      },
      set(_) {
        return _;
      }
    });
    return (_, C) => {
      const A = $("style-setup");
      return w((u(), m(I("div"), {
        "data-id": c(s),
        class: "CAlert"
      }, {
        default: M(() => [
          c(d) ? (u(), m(L, {
            key: 0,
            as: c(d),
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : T("", !0),
          h("div", null, [
            _.title ? (u(), m(G, {
              key: 0,
              as: "h4"
            }, {
              default: M(() => [
                J(K(_.title), 1)
              ]),
              _: 1
            })) : T("", !0),
            g(_.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [A, _.$.type, _.$attrs, c(s)]
      ]);
    };
  }
});
const pt = /* @__PURE__ */ b(gt, [["__scopeId", "data-v-b23a0a48"]]);
function mt(e) {
  let t = S();
  function a(n) {
    if (!e.rules)
      return;
    const i = e.rules.map((l) => {
      const d = l(n);
      if (d || d !== !0)
        return d;
    }).find((l) => l !== !0);
    switch (typeof i) {
      case "string":
      case "boolean":
        t.value = i !== !1 ? i : !0;
        break;
      default:
        t.value = !1;
        break;
    }
    return t.value === !1;
  }
  function o(n, s) {
    if (n === s)
      return !0;
    if (n instanceof Date && s instanceof Date && n.getTime() !== s.getTime() || n !== Object(n) || s !== Object(s))
      return !1;
    const i = Object.keys(n);
    return i.length !== Object.keys(s).length ? !1 : i.every((l) => o(n[l], s[l]));
  }
  const { rules: r } = Q(e);
  return z(() => r, (n, s) => {
    o(n, s) || a();
  }, { deep: !0 }), X(() => {
    a();
  }), { validate: a, error: t };
}
const yt = { class: "form-box" }, bt = /* @__PURE__ */ h("input", {
  class: "form-input",
  type: "text",
  required: "",
  minlength: "6",
  placeholder: "tester"
}, null, -1), Ct = /* @__PURE__ */ h("label", {
  for: "",
  class: "label"
}, "tester ", -1), $t = /* @__PURE__ */ h("span", { class: "error" }, "Field Required", -1), wt = [
  bt,
  Ct,
  $t
], kt = /* @__PURE__ */ p({
  __name: "CInput",
  props: {
    modelValue: {},
    name: {},
    placeholder: {},
    icon: {},
    rules: {},
    label: {},
    type: {},
    id: {}
  },
  emits: ["input"],
  setup(e, { emit: t }) {
    const a = e, { error: o, validate: r } = mt(a);
    let n = S(a.modelValue);
    return z(n, (s) => {
      t("input", s), a.rules && r(s);
    }), (s, i) => (u(), f("div", yt, wt));
  }
});
const xt = /* @__PURE__ */ p({
  __name: "CForm",
  setup(e, { expose: t }) {
    const a = S(), o = S(!1), r = y({
      get() {
        var s, i, l, d;
        if (o.value) {
          const _ = [], C = (s = a.value) == null ? void 0 : s.elements;
          for (let A = 0; A < C.length; A++) {
            const k = C[A];
            (i = k == null ? void 0 : k.__vue__) != null && i.isInvalid && ((l = k.__vue__) == null ? void 0 : l.isInvalid) === !0 && _.push(!0), !k.__vue__ == null && ((d = k.validity) == null ? void 0 : d.valid) !== !0 && _.push(!0);
          }
          return o.value = !1, _.length === 0;
        }
        return o.value = !1, !1;
      },
      set(s) {
        return s;
      }
    });
    async function n() {
      return o.value = !0, await Y(), r.value;
    }
    return t({ validation: n }), (s, i) => (u(), f("form", {
      ref_key: "form",
      ref: a
    }, [
      g(s.$slots, "default")
    ], 512));
  }
}), It = /* @__PURE__ */ p({
  __name: "CFlex",
  props: {
    as: {}
  },
  setup(e) {
    const t = Z();
    return (a, o) => {
      const r = $("style-setup");
      return w((u(), m(I(a.as), {
        "data-id": c(t),
        class: "CFlex"
      }, {
        default: M(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const At = /* @__PURE__ */ b(It, [["__scopeId", "data-v-fb2850e5"]]), Mt = ["data-id"], St = ["checked"], Zt = { class: "CToggle__switch" }, Tt = {
  key: 0,
  class: "CToggle__switch__slider",
  "data-switch": "true"
}, Bt = {
  key: 1,
  class: "CToggle__switch__slider",
  "data-switch": "false"
}, Vt = /* @__PURE__ */ p({
  __name: "CToggle",
  props: {
    modelValue: { type: Boolean },
    size: {},
    trueIcon: {},
    falseIcon: { type: Function }
  },
  emits: { "update:modelValue": Boolean },
  setup(e, { emit: t }) {
    const a = e;
    B((l) => ({
      "64fe3614": i.value()
    }));
    let o = S(a.modelValue);
    const r = Z();
    function n() {
      o.value = !o.value, t("update:modelValue", o.value);
    }
    function s(l) {
      t("update:modelValue", !l.target.checked);
    }
    const i = S(() => {
      switch (a.size) {
        case "xl":
          return "75px";
        case "lg":
          return "70px";
        case "md":
          return "60px";
        default:
          return a.size ?? "50px";
      }
    });
    return (l, d) => {
      const _ = $("style-setup");
      return w((u(), f("div", {
        "data-id": c(r),
        class: "CToggle",
        onClick: n
      }, [
        h("input", {
          type: "checkbox",
          class: "CToggle__input--hidden",
          checked: c(o),
          onInput: s
        }, null, 40, St),
        h("div", Zt, [
          c(o) ? (u(), f("span", Tt, [
            l.trueIcon ? (u(), m(I(l.trueIcon), { key: 0 })) : T("", !0),
            g(l.$slots, "trueIcon", {}, void 0, !0)
          ])) : (u(), f("span", Bt, [
            l.trueIcon ? (u(), m(I(l.falseIcon), { key: 0 })) : T("", !0),
            g(l.$slots, "falseIcon", {}, void 0, !0)
          ]))
        ])
      ], 8, Mt)), [
        [_, l.$.type, l.$attrs, c(r)]
      ]);
    };
  }
});
const zt = /* @__PURE__ */ b(Vt, [["__scopeId", "data-v-33d2dfa1"]]), R = { CMainBar: oe, CMain: le, CButton: fe, CCard: ve, CContainer: $e, CCardTitle: pe, CCardContent: ye, CText: G, CAlert: pt, CIcon: L, CInput: kt, CForm: xt, CFlex: At, CToggle: zt }, W = {
  body: {
    backgroundColor: "white",
    color: "black"
    // Add more global styles here
  },
  CMainBar: {
    background: "rgb(6 6 6 / 5%)",
    color: "black"
  },
  CCard: {
    background: "#ffffff",
    color: "#000000",
    "border-color": "#7bbaff"
  },
  CButton: {
    primary: {
      bg: {
        base: "#253C57",
        _active: "pink",
        _hover: "#0C2644",
        _focused: "red"
      },
      font: {
        base: "white",
        _active: "pink",
        _hover: "yellow",
        _focused: "red"
      }
    },
    secondary: {
      bg: {
        base: "blue",
        _active: "yellow",
        _hover: "green",
        _focused: "purple"
      },
      font: {
        base: "purple",
        _active: "pink",
        _hover: "white",
        _focused: "red"
      }
    },
    unstyled: {
      bg: {
        base: "inherit",
        _active: "inherit",
        _hover: "inherit",
        _focused: "inherit"
      },
      font: {
        base: "#16191D",
        _active: "white",
        _hover: "white",
        _focused: "white"
      }
    }
  },
  CAlert: {
    information: {
      bg: {
        base: "blue",
        _active: "lightblue",
        _hover: "lightblue",
        _focused: "lightblue"
      },
      font: {
        base: "white",
        _active: "pink",
        _hover: "yellow",
        _focused: "red"
      }
    },
    warning: {
      bg: {
        base: "orange",
        _active: "yellow",
        _hover: "green",
        _focused: "purple"
      },
      font: {
        base: "black",
        _active: "pink",
        _hover: "white",
        _focused: "red"
      }
    },
    success: {
      bg: {
        base: "lightgreen",
        _active: "yellow",
        _hover: "green",
        _focused: "purple"
      },
      font: {
        base: "black",
        _active: "pink",
        _hover: "white",
        _focused: "red"
      }
    }
  },
  colors: {
    primary: {
      base: "#0C2644",
      800: "#253C57"
    },
    secondary: "pink"
  }
  // Add more global style configurations here
}, P = {
  body: {
    backgroundColor: "#16191d",
    color: "white"
    // Add more global styles here
  },
  CMainBar: {
    background: "#21252C",
    color: "#fff"
  },
  CCard: {
    background: "#21252C",
    color: "#ffffff",
    "border-color": "#7bbaff"
  },
  CButton: {
    primary: {
      bg: {
        base: "#7bbaff",
        _active: "#026bde",
        _hover: "#026bde",
        _focused: "#026bde"
      },
      font: {
        base: "#16191D",
        _active: "white",
        _hover: "white",
        _focused: "white"
      }
    },
    secondary: {
      bg: {
        base: "pink",
        _active: "blue",
        _hover: "green",
        _focused: "purple"
      },
      font: {
        base: "purple",
        _active: "pink",
        _hover: "white",
        _focused: "red"
      }
    },
    unstyled: {
      bg: {
        base: "inherit",
        _active: "inherit",
        _hover: "inherit",
        _focused: "inherit"
      },
      font: {
        base: "#16191D",
        _active: "white",
        _hover: "white",
        _focused: "white"
      }
    }
  },
  CAlert: {
    information: {
      bg: {
        base: "#d2e1ff",
        _active: "lightblue",
        _hover: "lightblue",
        _focused: "lightblue"
      },
      font: {
        base: "#16191D",
        _active: "#16191D",
        _hover: "#16191D",
        _focused: "#16191D"
      }
    },
    warning: {
      bg: {
        base: "orange",
        _active: "yellow",
        _hover: "green",
        _focused: "purple"
      },
      font: {
        base: "black",
        _active: "pink",
        _hover: "white",
        _focused: "red"
      }
    },
    success: {
      bg: {
        base: "lightgreen",
        _active: "yellow",
        _hover: "green",
        _focused: "purple"
      },
      font: {
        base: "black",
        _active: "pink",
        _hover: "white",
        _focused: "red"
      }
    }
  },
  colors: {
    primary: {
      base: "purple",
      800: "green",
      _hover: "yellow"
    },
    secondary: "pink"
  }
  // Add more global style configurations here
};
async function Dt(e, t) {
  return Object.entries(e).map(([a, o]) => {
    const r = Lt(a);
    return r in t.style ? [r, o] : !1;
  }).filter(Boolean);
}
async function jt(e) {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const a = t.sheet;
  for (let o = 0; o < e.length; o++) {
    let r = 1, n = e[o], s = n[0], i = "";
    Array.isArray(n[1][0]) && (n = n[1], r = 0);
    for (let l = n.length; r < l; r++) {
      const d = n[r];
      i += `${d[0]}: ${d[1]}${d[2] ? " !important" : ""};
`;
    }
    a.insertRule(
      `${s}{${i}}`,
      a.cssRules.length
    );
  }
}
function Lt(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
async function F(e, t, a, o) {
  const r = await Dt(a, o);
  await jt([[`${t}[${e}]`, r]]), Object.entries(a).forEach(([n, s]) => {
    o.style.hasOwnProperty(n) && !(n in o) && o.removeAttribute(n);
  });
}
function N(e) {
  const t = (a, o, r) => {
    typeof r == "string" ? document.documentElement.style.setProperty(
      `--${a}-${o}`,
      r
    ) : typeof r == "object" && Object.entries(r).forEach(([n, s]) => {
      n.startsWith("_") ? t(
        a,
        `${o}${n}`,
        s
      ) : t(
        `${a}-${o}`,
        n,
        s
      );
    });
  };
  Object.entries(e).forEach(([a, o]) => {
    Object.entries(o).forEach(([r, n]) => {
      t(a, r, n);
    });
  });
}
function Ot(e, t, a) {
  const o = document.createElement("style");
  o.setAttribute("type", "text/css");
  const r = a.__scopeId ? `[${a.__scopeId}]` : "", n = a.__name, s = (i, l) => {
    const d = [];
    return Object.entries(l).forEach(([_, C]) => {
      const A = _.startsWith("_") ? `${i}${_}` : `${i}-${_}`;
      if (typeof C == "object" && !Array.isArray(C) && !_.startsWith("_")) {
        const k = s(A, C);
        d.push(...k);
      } else if (_.startsWith("_")) {
        const k = _.split("-").find((D) => D.indexOf("_") !== -1);
        d.push(`.${n}${r}${k.replace("_", ":")} { ${Object.entries(C).map(([D]) => `${D}:var(--${A}-${D})`).join(";")}}`);
      } else
        d.push(`.${n}${r} { ${_}:var(--${A}) }`);
    }), d;
  };
  Object.entries(e[a.__name]).forEach(([i, l]) => {
    const d = s(a.__name, { [i]: l });
    Rt(d).forEach((_) => {
      o.textContent += `${_} `;
    });
  }), t.appendChild(o);
}
function Rt(e) {
  const t = {};
  return e.forEach((a) => {
    const o = a.match(/(.+?)\s*{([^}]+)}/);
    if (o) {
      const [r, n] = o.slice(1);
      t[r] || (t[r] = []), t[r].push(n.trim());
    }
  }), Object.entries(t).map(([a, o]) => {
    const r = o.join("; ");
    return `${a} { ${r} }`;
  });
}
const Et = {
  beforeMount(e, t) {
    switch (t == null || t.value, t.arg && e.classList.add(t.arg), t.arg) {
      case "nowrap":
        e.classList.add("nowrap");
    }
    e.classList.add("row");
  }
}, qt = {
  beforeMount(e, t) {
    const a = t == null ? void 0 : t.value;
    switch (t.arg && !parseInt(a) && console.error("Using directive 'arguments' and 'breakpoints' in value not ALLOWED", `arg:${t.arg}, value: ${a}. Either remove the 'Argument' or 'Breakpoint' from the directive.`), t.arg) {
      case "xs":
        e.classList.add(`col-xs${a}`);
        return;
      case "sm":
        e.classList.add(`col-sm${a}`);
        return;
      case "md":
        e.classList.add(`col-md${a}`);
        return;
      case "lg":
        e.classList.add(`col-lg${a}`);
        return;
    }
    e.classList.add(`col-${a}`);
  }
};
var Wt = {};
function Pt(e, t) {
  return g(e.$slots, "default");
}
const Ft = /* @__PURE__ */ b(Wt, [["render", Pt]]), Ht = {
  install: (e, t) => {
    const a = S(t != null && t.colorMode ? t.colorMode : "dark");
    let o = ee(V(x, a.value === "dark" ? P : W));
    if (t.customTheme)
      try {
        o = V(o, t.customTheme[a.value]);
      } catch (s) {
        console.error(s);
      }
    N(o);
    function r() {
      a.value === "light" ? (a.value = "dark", console.log("darkmode"), o = Object.assign(o, { ...P })) : (console.log("lightMode"), a.value = "light", o = Object.assign(o, { ...W }));
    }
    z(a, (s) => {
      N(o);
    }), e.provide("theme", o), e.provide("colorMode", a), e.config.globalProperties.$toggleTheme = (s) => r(), e.config.globalProperties.$colorMode = a;
    const n = {
      beforeMount(s, i) {
        var l;
        F(`data-id="${i.modifiers ?? ((l = i.value) == null ? void 0 : l.__scopeId)}"`, s.tagName.toLowerCase(), i.arg, s);
      },
      beforeUpdate(s, i) {
        var l;
        F(`data-id="${i.modifiers ?? ((l = i.value) == null ? void 0 : l.__scopeId)}"`, s.tagName.toLowerCase(), i.arg, s);
      }
    };
    e.directive("styleSetup", n), e.directive("row", Et), e.directive("col", qt), e.component("CThemeProvider", Ft);
    for (const s in R)
      if (R.hasOwnProperty(s)) {
        const i = R[s];
        o[i.__name] && Ot(o, document.head, i), e.component(i.__name ?? s, i);
      }
  }
};
export {
  Ht as default
};
