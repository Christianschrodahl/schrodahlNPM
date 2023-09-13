import { defineComponent as m, useCssVars as O, inject as h, computed as g, resolveDirective as w, withDirectives as A, openBlock as _, createElementBlock as f, unref as d, renderSlot as v, createBlock as y, resolveDynamicComponent as x, withCtx as I, ref as S, watch as T, createCommentVNode as B, mergeProps as U, createElementVNode as p, createTextVNode as J, toDisplayString as K, toRefs as Q, onMounted as X, nextTick as Y, reactive as ee } from "vue";
function Z() {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let e = "";
  for (let a = 0; a < 6; a++) {
    const o = Math.floor(Math.random() * t.length);
    e += t.charAt(o);
  }
  return e;
}
const te = ["data-id"], ae = /* @__PURE__ */ m({
  __name: "CMainBar",
  setup(t) {
    var s, n;
    O((r) => ({
      "78077ec2": a.background,
      "06082152": a.color
    }));
    const e = h("theme"), a = {
      background: (s = e == null ? void 0 : e.CMainBar) == null ? void 0 : s.background,
      color: (n = e == null ? void 0 : e.CMainBar) == null ? void 0 : n.color
    }, o = Z();
    return g({
      get() {
        return e.CMainBar;
      },
      set(r) {
        return r;
      }
    }), (r, l) => {
      const i = w("style-setup");
      return A((_(), f("header", {
        "data-id": d(o),
        class: "CMainBar"
      }, [
        v(r.$slots, "default", {}, void 0, !0)
      ], 8, te)), [
        [i, r.$.type, r.$attrs, d(o)]
      ]);
    };
  }
});
const C = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [o, s] of e)
    a[o] = s;
  return a;
}, oe = /* @__PURE__ */ C(ae, [["__scopeId", "data-v-0b1f8d92"]]);
var re = {}, se = { class: "CMain" };
function ne(t, e) {
  var a = w("style-setup");
  return A((_(), f("main", se, [
    v(t.$slots, "default", {}, void 0, !0)
  ])), [
    [a, t.$.type, t.$attrs]
  ]);
}
const le = /* @__PURE__ */ C(re, [["render", ne], ["__scopeId", "data-v-994719c5"]]), M = {
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
    sm: "4px"
  },
  colors: {
    primary: "#007bff",
    secondary: "#6c757d"
    // Add more colors and design tokens here
  },
  radii: {
    xl: "24px",
    lg: "16px",
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
function L(t, e) {
  const a = { ...t };
  for (const o in e)
    e.hasOwnProperty(o) && (e[o] && e[o].constructor === Object ? a[o] && a[o].constructor === Object ? a[o] = L(a[o], e[o]) : a[o] = { ...e[o] } : a[o] = e[o]);
  return a;
}
const ie = {
  padding: "10px 28px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: M.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: M.radii.xl,
  lineHeight: M.lineHeights.base,
  fontWeight: M.fontWeights.bold
}, V = ({ colors: t, colorMode: e, additionalStyling: a }) => {
  let o = {
    light: {
      bg: t.bg.base,
      color: t.font.base,
      _hover: {
        bg: t.bg._hover,
        color: t.font._hover
      },
      _active: {
        bg: t.bg._active
      }
    },
    dark: {
      bg: t.bg.base,
      color: t.font.base,
      _hover: {
        bg: t.bg._hover,
        color: t.font._hover
      },
      _active: {
        bg: t.bg._active
      }
    }
  };
  return L(o[e], a);
}, ce = (t) => {
  switch (t.variant) {
    case "primary":
      return V(t);
    case "secondary":
      return V(t);
    default:
      return V(t);
  }
}, z = (t) => ({
  ...ie,
  ...ce(t)
}), de = /* @__PURE__ */ m({
  __name: "CIcon",
  props: {
    as: {},
    space: {}
  },
  setup(t) {
    const e = Z();
    return (a, o) => {
      const s = w("style-setup");
      return A((_(), y(x(a.as), {
        "data-id": d(e),
        class: "CIcon"
      }, {
        default: I(() => [
          v(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, a.$.type, a.$attrs, d(e)]
      ]);
    };
  }
});
const D = /* @__PURE__ */ C(de, [["__scopeId", "data-v-dab21008"]]), ue = /* @__PURE__ */ m({
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
    rightIcon: {}
  },
  setup(t) {
    const { variant: e = "primary", as: a = "button", ...o } = t;
    O((c) => ({
      "26f007e2": d(i).lineHeight,
      "7f7cd286": d(i).padding,
      ae2baa2e: d(i).letterSpacing,
      "71899e0a": d(i).height,
      "60e1b4fc": d(i).margin,
      "3c3a14f8": d(i).textAlign,
      b739269c: d(i).borderRadius,
      "2fa49bc4": d(i).fontSize,
      "1283791c": d(i).width,
      "31b75196": d(i).maxWidth,
      "40ffcd0a": d(i).fontWeight,
      "1853b619": d(i).bg,
      "14b175e2": d(i).color,
      19382742: d(i)._hover.bg,
      64985174: d(i)._hover.color
    })), console.log(a);
    const s = h("theme"), n = h("colorMode"), r = Z();
    let l = g({
      get() {
        return s.CButton[e];
      },
      set(c) {
        return c;
      }
    }), i = S(z({ ...o, colors: l.value, colorMode: n.value }));
    return T(() => s, (c) => {
      i.value = z({ ...o, colors: l.value, colorMode: n.value });
    }, { deep: !0 }), (c, u) => {
      const b = w("style-setup");
      return A((_(), y(x(c.as ?? "button"), {
        "data-id": d(r),
        class: "CButton",
        disabled: c.isDisabled
      }, {
        default: I(() => [
          c.leftIcon ? (_(), y(D, {
            key: 0,
            as: c.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : B("", !0),
          v(c.$slots, "default", {}, void 0, !0),
          c.rightIcon ? (_(), y(D, {
            key: 1,
            as: c.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : B("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [b, c.$.type, c.$attrs, d(r)]
      ]);
    };
  }
});
const _e = /* @__PURE__ */ C(ue, [["__scopeId", "data-v-ac16b061"]]), fe = /* @__PURE__ */ m({
  __name: "CCard",
  props: {
    as: {}
  },
  setup(t) {
    O((s) => ({
      "6f7ac7bf": a.borderRadius
    }));
    const a = {
      borderRadius: h("theme").radii.lg
    }, o = Z();
    return (s, n) => {
      const r = w("style-setup");
      return A((_(), y(x("div"), {
        "data-id": d(o),
        class: "CCard"
      }, {
        default: I(() => [
          v(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, s.$.type, s.$attrs, d(o)]
      ]);
    };
  }
});
const pe = /* @__PURE__ */ C(fe, [["__scopeId", "data-v-d073c29f"]]), he = /* @__PURE__ */ m({
  __name: "CCardTitle",
  props: {
    as: {}
  },
  setup(t) {
    O((s) => ({
      "64e4ddeb": e.fontWeight,
      19608798: e.fontSize
    })), h("theme");
    const e = {
      fontWeight: "900",
      fontSize: "18px"
    };
    function a() {
      const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let n = "";
      for (let r = 0; r < 6; r++) {
        const l = Math.floor(Math.random() * s.length);
        n += s.charAt(l);
      }
      return n;
    }
    const o = a();
    return (s, n) => {
      const r = w("style-setup");
      return A((_(), y(x("h3"), {
        "data-id": d(o),
        class: "CCardTitle"
      }, {
        default: I(() => [
          v(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, s.$.type, s.$attrs, d(o)]
      ]);
    };
  }
});
const ve = /* @__PURE__ */ C(he, [["__scopeId", "data-v-27df9289"]]), ge = /* @__PURE__ */ m({
  __name: "CCardContent",
  props: {
    as: {}
  },
  setup(t) {
    return h("theme"), (e, a) => {
      const o = w("style-setup");
      return A((_(), y(x("div"), { class: "CCardContent" }, {
        default: I(() => [
          v(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })), [
        [o, e.$.type, e.$attrs]
      ]);
    };
  }
});
const me = /* @__PURE__ */ C(ge, [["__scopeId", "data-v-0f0761fc"]]), be = ["data-id"], ye = /* @__PURE__ */ m({
  __name: "CContainer",
  setup(t) {
    const e = Z();
    return (a, o) => {
      const s = w("style-setup");
      return A((_(), f("section", {
        "data-id": d(e),
        class: "CContainer"
      }, [
        v(a.$slots, "default", {}, void 0, !0)
      ], 8, be)), [
        [s, a.$.type, a.$attrs, d(e)]
      ]);
    };
  }
});
const Ce = /* @__PURE__ */ C(ye, [["__scopeId", "data-v-ba427fa7"]]), $e = /* @__PURE__ */ m({
  __name: "CText",
  props: {
    as: {}
  },
  setup(t) {
    var s;
    O((n) => ({
      "77ee5eb0": a.fontSize,
      "0d5b218e": a.marginBottom
    }));
    const e = h("theme"), a = {
      fontSize: "16px",
      color: (s = e == null ? void 0 : e.body) == null ? void 0 : s.color,
      marginBottom: e.spaces.sm
    }, o = Z();
    return (n, r) => {
      const l = w("style-setup");
      return A((_(), y(x(n.as), {
        "data-id": d(o),
        class: "CText"
      }, {
        default: I(() => [
          v(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [l, n.$.type, n.$attrs, d(o)]
      ]);
    };
  }
});
const G = /* @__PURE__ */ C($e, [["__scopeId", "data-v-a98c7614"]]), q = {
  padding: "10px 16px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: M.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: M.radii.xs,
  lineHeight: M.lineHeights.base,
  fontWeight: M.fontWeights.bold
}, E = ({ colors: t, colorMode: e, additionalStyling: a }) => {
  let o = {
    light: {
      bg: t.bg.base,
      color: t.font.base,
      _hover: {
        bg: t.bg._hover,
        color: t.font._hover
      },
      _active: {
        bg: t.bg._active
      }
    },
    dark: {
      bg: t.bg.base,
      color: t.font.base,
      _hover: {
        bg: t.bg._hover,
        color: t.font._hover
      },
      _active: {
        bg: t.bg._active
      }
    }
  };
  return L(o[e], a);
}, we = (t) => {
  switch (t.variant) {
    case "information":
      return E(t);
    case "warning":
      return E(t);
    default:
      return E(t);
  }
}, R = (t) => (console.log(q), {
  ...q,
  ...we(t)
}), Ae = ["width", "height", "fill", "transform"], ke = { key: 0 }, Me = /* @__PURE__ */ p("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1), Ie = [
  Me
], Se = { key: 1 }, xe = /* @__PURE__ */ p("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), Ze = /* @__PURE__ */ p("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), Be = [
  xe,
  Ze
], Oe = { key: 2 }, Te = /* @__PURE__ */ p("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), je = [
  Te
], De = { key: 3 }, Le = /* @__PURE__ */ p("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), Ve = [
  Le
], Ee = { key: 4 }, We = /* @__PURE__ */ p("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), ze = [
  We
], qe = { key: 5 }, Re = /* @__PURE__ */ p("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), Pe = [
  Re
], Ne = {
  name: "PhCheckCircle"
}, He = /* @__PURE__ */ m({
  ...Ne,
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
  setup(t) {
    const e = t, a = h("weight", "regular"), o = h("size", "1em"), s = h("color", "currentColor"), n = h("mirrored", !1), r = g(() => e.weight ?? a), l = g(() => e.size ?? o), i = g(() => e.color ?? s), c = g(() => e.mirrored !== void 0 ? e.mirrored ? "scale(-1, 1)" : void 0 : n ? "scale(-1, 1)" : void 0);
    return (u, b) => (_(), f("svg", U({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: i.value,
      transform: c.value
    }, u.$attrs), [
      v(u.$slots, "default"),
      r.value === "bold" ? (_(), f("g", ke, Ie)) : r.value === "duotone" ? (_(), f("g", Se, Be)) : r.value === "fill" ? (_(), f("g", Oe, je)) : r.value === "light" ? (_(), f("g", De, Ve)) : r.value === "regular" ? (_(), f("g", Ee, ze)) : r.value === "thin" ? (_(), f("g", qe, Pe)) : B("", !0)
    ], 16, Ae));
  }
}), Fe = ["width", "height", "fill", "transform"], Ue = { key: 0 }, Ge = /* @__PURE__ */ p("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }, null, -1), Je = [
  Ge
], Ke = { key: 1 }, Qe = /* @__PURE__ */ p("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), Xe = /* @__PURE__ */ p("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }, null, -1), Ye = [
  Qe,
  Xe
], et = { key: 2 }, tt = /* @__PURE__ */ p("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }, null, -1), at = [
  tt
], ot = { key: 3 }, rt = /* @__PURE__ */ p("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), st = [
  rt
], nt = { key: 4 }, lt = /* @__PURE__ */ p("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, null, -1), it = [
  lt
], ct = { key: 5 }, dt = /* @__PURE__ */ p("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), ut = [
  dt
], _t = {
  name: "PhInfo"
}, ft = /* @__PURE__ */ m({
  ..._t,
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
  setup(t) {
    const e = t, a = h("weight", "regular"), o = h("size", "1em"), s = h("color", "currentColor"), n = h("mirrored", !1), r = g(() => e.weight ?? a), l = g(() => e.size ?? o), i = g(() => e.color ?? s), c = g(() => e.mirrored !== void 0 ? e.mirrored ? "scale(-1, 1)" : void 0 : n ? "scale(-1, 1)" : void 0);
    return (u, b) => (_(), f("svg", U({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: l.value,
      height: l.value,
      fill: i.value,
      transform: c.value
    }, u.$attrs), [
      v(u.$slots, "default"),
      r.value === "bold" ? (_(), f("g", Ue, Je)) : r.value === "duotone" ? (_(), f("g", Ke, Ye)) : r.value === "fill" ? (_(), f("g", et, at)) : r.value === "light" ? (_(), f("g", ot, st)) : r.value === "regular" ? (_(), f("g", nt, it)) : r.value === "thin" ? (_(), f("g", ct, ut)) : B("", !0)
    ], 16, Fe));
  }
}), pt = /* @__PURE__ */ m({
  __name: "CAlert",
  props: {
    title: {},
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
    rightIcon: {}
  },
  setup(t) {
    const { variant: e = "information", as: a = "div", ...o } = t;
    O((u) => ({
      c33effc8: d(i).bg,
      "7fef982c": d(i).color,
      "3f29cef5": d(i).borderRadius
    }));
    const s = h("theme"), n = h("colorMode"), r = Z();
    let l = g({
      get() {
        return s.CAlert[e];
      },
      set(u) {
        return u;
      }
    }), i = S(R({ ...o, colors: l.value, colorMode: n.value }));
    T(() => s, (u) => {
      i.value = R({ ...o, colors: l.value, colorMode: n.value });
    }, { deep: !0 });
    let c = g({
      get() {
        switch (e) {
          case "information":
            return ft;
          case "success":
            return He;
        }
      },
      set(u) {
        return u;
      }
    });
    return (u, b) => {
      const k = w("style-setup");
      return A((_(), y(x("div"), {
        "data-id": d(r),
        class: "CAlert"
      }, {
        default: I(() => [
          d(c) ? (_(), y(D, {
            key: 0,
            as: d(c),
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : B("", !0),
          p("div", null, [
            u.title ? (_(), y(G, {
              key: 0,
              as: "h4"
            }, {
              default: I(() => [
                J(K(u.title), 1)
              ]),
              _: 1
            })) : B("", !0),
            v(u.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [k, u.$.type, u.$attrs, d(r)]
      ]);
    };
  }
});
const ht = /* @__PURE__ */ C(pt, [["__scopeId", "data-v-b23a0a48"]]);
function vt(t) {
  let e = S();
  function a(n) {
    if (!t.rules)
      return;
    const l = t.rules.map((i) => {
      const c = i(n);
      if (c || c !== !0)
        return c;
    }).find((i) => i !== !0);
    switch (typeof l) {
      case "string":
      case "boolean":
        e.value = l !== !1 ? l : !0;
        break;
      default:
        e.value = !1;
        break;
    }
    return e.value === !1;
  }
  function o(n, r) {
    if (n === r)
      return !0;
    if (n instanceof Date && r instanceof Date && n.getTime() !== r.getTime() || n !== Object(n) || r !== Object(r))
      return !1;
    const l = Object.keys(n);
    return l.length !== Object.keys(r).length ? !1 : l.every((i) => o(n[i], r[i]));
  }
  const { rules: s } = Q(t);
  return T(() => s, (n, r) => {
    o(n, r) || a();
  }, { deep: !0 }), X(() => {
    a();
  }), { validate: a, error: e };
}
const gt = { class: "form-box" }, mt = /* @__PURE__ */ p("input", {
  class: "form-input",
  type: "text",
  required: "",
  minlength: "6",
  placeholder: "tester"
}, null, -1), bt = /* @__PURE__ */ p("label", {
  for: "",
  class: "label"
}, "tester ", -1), yt = /* @__PURE__ */ p("span", { class: "error" }, "Field Required", -1), Ct = [
  mt,
  bt,
  yt
], $t = /* @__PURE__ */ m({
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
  setup(t, { emit: e }) {
    const a = t, { error: o, validate: s } = vt(a);
    let n = S(a.modelValue);
    return T(n, (r) => {
      e("input", r), a.rules && s(r);
    }), (r, l) => (_(), f("div", gt, Ct));
  }
});
const wt = /* @__PURE__ */ m({
  __name: "CForm",
  setup(t, { expose: e }) {
    const a = S(), o = S(!1), s = g({
      get() {
        var r, l, i, c;
        if (o.value) {
          const u = [], b = (r = a.value) == null ? void 0 : r.elements;
          for (let k = 0; k < b.length; k++) {
            const $ = b[k];
            (l = $ == null ? void 0 : $.__vue__) != null && l.isInvalid && ((i = $.__vue__) == null ? void 0 : i.isInvalid) === !0 && u.push(!0), !$.__vue__ == null && ((c = $.validity) == null ? void 0 : c.valid) !== !0 && u.push(!0);
          }
          return o.value = !1, u.length === 0;
        }
        return o.value = !1, !1;
      },
      set(r) {
        return r;
      }
    });
    async function n() {
      return o.value = !0, await Y(), s.value;
    }
    return e({ validation: n }), (r, l) => (_(), f("form", {
      ref_key: "form",
      ref: a
    }, [
      v(r.$slots, "default")
    ], 512));
  }
}), W = { CMainBar: oe, CMain: le, CButton: _e, CCard: pe, CContainer: Ce, CCardTitle: ve, CCardContent: me, CText: G, CAlert: ht, CIcon: D, CForm: wt, CInput: $t }, P = {
  body: {
    backgroundColor: "white",
    color: "black"
    // Add more global styles here
  },
  CMainBar: {
    background: "pink",
    color: "red"
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
}, N = {
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
async function At(t, e) {
  return Object.entries(t).map(([a, o]) => {
    const s = Mt(a);
    return s in e.style ? [s, o] : !1;
  }).filter(Boolean);
}
async function kt(t) {
  const e = document.createElement("style");
  document.head.appendChild(e);
  const a = e.sheet;
  for (let o = 0; o < t.length; o++) {
    let s = 1, n = t[o], r = n[0], l = "";
    Array.isArray(n[1][0]) && (n = n[1], s = 0);
    for (let i = n.length; s < i; s++) {
      const c = n[s];
      l += `${c[0]}: ${c[1]}${c[2] ? " !important" : ""};
`;
    }
    a.insertRule(
      `${r}{${l}}`,
      a.cssRules.length
    );
  }
}
function Mt(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
async function H(t, e, a, o) {
  const s = await At(a, o);
  await kt([[`${e}[${t}]`, s]]), Object.entries(a).forEach(([n, r]) => {
    o.style.hasOwnProperty(n) && !(n in o) && (console.log("attr", n), o.removeAttribute(n));
  });
}
function F(t) {
  const e = (a, o, s) => {
    typeof s == "string" ? document.documentElement.style.setProperty(
      `--${a}-${o}`,
      s
    ) : typeof s == "object" && Object.entries(s).forEach(([n, r]) => {
      n.startsWith("_") ? e(
        a,
        `${o}${n}`,
        r
      ) : e(
        `${a}-${o}`,
        n,
        r
      );
    });
  };
  Object.entries(t).forEach(([a, o]) => {
    Object.entries(o).forEach(([s, n]) => {
      e(a, s, n);
    });
  });
}
function It(t, e, a) {
  const o = document.createElement("style");
  o.setAttribute("type", "text/css");
  const s = a.__scopeId ? `[${a.__scopeId}]` : "", n = a.__name, r = (l, i) => {
    const c = [];
    return Object.entries(i).forEach(([u, b]) => {
      const k = u.startsWith("_") ? `${l}${u}` : `${l}-${u}`;
      if (typeof b == "object" && !Array.isArray(b) && !u.startsWith("_")) {
        const $ = r(k, b);
        c.push(...$);
      } else if (u.startsWith("_")) {
        const $ = u.split("-").find((j) => j.indexOf("_") !== -1);
        c.push(`.${n}${s}${$.replace("_", ":")} { ${Object.entries(b).map(([j]) => `${j}:var(--${k}-${j})`).join(";")}}`);
      } else
        c.push(`.${n}${s} { ${u}:var(--${k}) }`);
    }), c;
  };
  Object.entries(t[a.__name]).forEach(([l, i]) => {
    const c = r(a.__name, { [l]: i });
    St(c).forEach((u) => {
      o.textContent += `${u} `;
    });
  }), e.appendChild(o);
}
function St(t) {
  const e = {};
  return t.forEach((a) => {
    const o = a.match(/(.+?)\s*{([^}]+)}/);
    if (o) {
      const [s, n] = o.slice(1);
      e[s] || (e[s] = []), e[s].push(n.trim());
    }
  }), Object.entries(e).map(([a, o]) => {
    const s = o.join("; ");
    return `${a} { ${s} }`;
  });
}
const xt = {
  beforeMount(t, e) {
    e == null || e.value, e.arg && t.classList.add(e.arg), t.classList.add("row");
  }
}, Zt = {
  beforeMount(t, e) {
    const a = e == null ? void 0 : e.value;
    switch (e.arg && !parseInt(a) && console.error("Using directive 'arguments' and 'breakpoints' in value not ALLOWED", `arg:${e.arg}, value: ${a}. Either remove the 'Argument' or 'Breakpoint' from the directive.`), e.arg) {
      case "xs":
        t.classList.add(`col-xs${a}`);
        return;
      case "sm":
        t.classList.add(`col-sm${a}`);
        return;
      case "md":
        t.classList.add(`col-md${a}`);
        return;
      case "lg":
        t.classList.add(`col-lg${a}`);
        return;
    }
    t.classList.add(`col-${a}`);
  }
};
var Bt = {};
function Ot(t, e) {
  return v(t.$slots, "default");
}
const Tt = /* @__PURE__ */ C(Bt, [["render", Ot]]), Dt = {
  install: (t, e) => {
    const a = S(e != null && e.colorMode ? e.colorMode : "dark");
    let o = ee(L(M, a.value === "dark" ? N : P));
    if (e.customTheme)
      try {
        o = Object.assign(o, { ...e.customTheme[a.value] });
      } catch (r) {
        console.error(r);
      }
    F(o);
    function s() {
      a.value === "light" ? (a.value = "dark", console.log("darkmode"), o = Object.assign(o, { ...N })) : (console.log("lightMode"), a.value = "light", o = Object.assign(o, { ...P }));
    }
    T(a, (r) => {
      F(o);
    }), t.provide("theme", o), t.provide("colorMode", a), t.config.globalProperties.$toggleTheme = (r) => s();
    const n = {
      beforeMount(r, l) {
        var i;
        H(`data-id="${l.modifiers ?? ((i = l.value) == null ? void 0 : i.__scopeId)}"`, r.tagName.toLowerCase(), l.arg, r);
      },
      beforeUpdate(r, l) {
        var i;
        H(`data-id="${l.modifiers ?? ((i = l.value) == null ? void 0 : i.__scopeId)}"`, r.tagName.toLowerCase(), l.arg, r);
      }
    };
    t.directive("styleSetup", n), t.directive("row", xt), t.directive("col", Zt), t.component("CThemeProvider", Tt);
    for (const r in W)
      if (W.hasOwnProperty(r)) {
        const l = W[r];
        l.__name === "CIcon" && console.log("CICON!!", l), o[l.__name] && It(o, document.head, l), t.component(l.__name ?? r, l);
      }
  }
};
export {
  Dt as default
};
