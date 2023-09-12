import { defineComponent as b, useCssVars as I, inject as f, computed as v, resolveDirective as C, withDirectives as $, openBlock as _, createElementBlock as p, renderSlot as g, createBlock as m, resolveDynamicComponent as M, unref as c, withCtx as k, ref as W, watch as z, createCommentVNode as S, mergeProps as U, createElementVNode as h, createTextVNode as G, toDisplayString as J, reactive as K } from "vue";
const Q = { class: "CMainBar" }, X = /* @__PURE__ */ b({
  __name: "CMainBar",
  setup(t) {
    var o, r;
    I((s) => ({
      "4740e667": a.background,
      "3e5602ec": a.color
    }));
    const e = f("theme"), a = {
      background: (o = e == null ? void 0 : e.CMainBar) == null ? void 0 : o.background,
      color: (r = e == null ? void 0 : e.CMainBar) == null ? void 0 : r.color
    };
    return console.log(a), v({
      get() {
        return e.CMainBar;
      },
      set(s) {
        return s;
      }
    }), (s, n) => {
      const i = C("style-setup");
      return $((_(), p("header", Q, [
        g(s.$slots, "default", {}, void 0, !0)
      ])), [
        [i, s.$.type, s.$attrs]
      ]);
    };
  }
});
const y = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [o, r] of e)
    a[o] = r;
  return a;
}, Y = /* @__PURE__ */ y(X, [["__scopeId", "data-v-0b1f8d92"]]);
var ee = {}, te = { class: "CMain" };
function ae(t, e) {
  var a = C("style-setup");
  return $((_(), p("main", te, [
    g(t.$slots, "default", {}, void 0, !0)
  ])), [
    [a, t.$.type, t.$attrs]
  ]);
}
const oe = /* @__PURE__ */ y(ee, [["render", ae], ["__scopeId", "data-v-994719c5"]]), A = {
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
function D(t, e) {
  const a = { ...t };
  for (const o in e)
    e.hasOwnProperty(o) && (e[o] && e[o].constructor === Object ? a[o] && a[o].constructor === Object ? a[o] = D(a[o], e[o]) : a[o] = { ...e[o] } : a[o] = e[o]);
  return a;
}
const re = {
  padding: "10px 28px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: A.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: A.radii.xl,
  lineHeight: A.lineHeights.base,
  fontWeight: A.fontWeights.bold
}, O = ({ colors: t, colorMode: e, additionalStyling: a }) => {
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
  return D(o[e], a);
}, se = (t) => {
  switch (t.variant) {
    case "primary":
      return O(t);
    case "secondary":
      return O(t);
    default:
      return O(t);
  }
}, V = (t) => ({
  ...re,
  ...se(t)
});
function x() {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let e = "";
  for (let a = 0; a < 6; a++) {
    const o = Math.floor(Math.random() * t.length);
    e += t.charAt(o);
  }
  return e;
}
const ne = /* @__PURE__ */ b({
  __name: "CIcon",
  props: {
    as: {},
    space: {}
  },
  setup(t) {
    const e = x();
    return (a, o) => {
      const r = C("style-setup");
      return $((_(), m(M(a.as), {
        "data-id": c(e),
        class: "CIcon"
      }, {
        default: k(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, a.$.type, a.$attrs, c(e)]
      ]);
    };
  }
});
const T = /* @__PURE__ */ y(ne, [["__scopeId", "data-v-df1a38c3"]]), ce = /* @__PURE__ */ b({
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
    I((d) => ({
      "3fd90f9e": c(l).lineHeight,
      "043a5ddb": c(l).padding,
      "3deca387": c(l).letterSpacing,
      e0c3e3c6: c(l).height,
      d01bfab8: c(l).margin,
      "0ac66d22": c(l).textAlign,
      "39ff2f58": c(l).borderRadius,
      "6ac4b866": c(l).fontSize,
      dc4b8be0: c(l).width,
      "6cd76e38": c(l).maxWidth,
      "59e8d4c6": c(l).fontWeight,
      "7b33178a": c(l).bg,
      de7988a6: c(l).color,
      "421b9ee0": c(l)._hover.bg,
      "0c50d2e8": c(l)._hover.color
    })), console.log(a);
    const r = f("theme"), s = f("colorMode"), n = x();
    let i = v({
      get() {
        return console.log(e, "TTTTTTTT", r), r.CButton[e];
      },
      set(d) {
        return d;
      }
    }), l = W(V({ ...o, colors: i.value, colorMode: s.value }));
    return z(() => r, (d) => {
      l.value = V({ ...o, colors: i.value, colorMode: s.value });
    }, { deep: !0 }), (d, u) => {
      const w = C("style-setup");
      return $((_(), m(M(d.as ?? "button"), {
        "data-id": c(n),
        class: "CButton",
        disabled: d.isDisabled
      }, {
        default: k(() => [
          d.leftIcon ? (_(), m(T, {
            key: 0,
            as: d.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : S("", !0),
          g(d.$slots, "default", {}, void 0, !0),
          d.rightIcon ? (_(), m(T, {
            key: 1,
            as: d.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : S("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [w, d.$.type, d.$attrs, c(n)]
      ]);
    };
  }
});
const ie = /* @__PURE__ */ y(ce, [["__scopeId", "data-v-c7522179"]]), le = /* @__PURE__ */ b({
  __name: "CCard",
  props: {
    as: {}
  },
  setup(t) {
    I((r) => ({
      "6f7ac7bf": a.borderRadius
    }));
    const a = {
      borderRadius: f("theme").radii.lg
    }, o = x();
    return (r, s) => {
      const n = C("style-setup");
      return $((_(), m(M("div"), {
        "data-id": c(o),
        class: "CCard"
      }, {
        default: k(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, r.$.type, r.$attrs, c(o)]
      ]);
    };
  }
});
const de = /* @__PURE__ */ y(le, [["__scopeId", "data-v-d073c29f"]]), ue = /* @__PURE__ */ b({
  __name: "CCardTitle",
  props: {
    as: {}
  },
  setup(t) {
    I((r) => ({
      "64e4ddeb": e.fontWeight,
      19608798: e.fontSize
    })), f("theme");
    const e = {
      fontWeight: "900",
      fontSize: "18px"
    };
    function a() {
      const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let s = "";
      for (let n = 0; n < 6; n++) {
        const i = Math.floor(Math.random() * r.length);
        s += r.charAt(i);
      }
      return s;
    }
    const o = a();
    return (r, s) => {
      const n = C("style-setup");
      return $((_(), m(M("h3"), {
        "data-id": c(o),
        class: "CCardTitle"
      }, {
        default: k(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, r.$.type, r.$attrs, c(o)]
      ]);
    };
  }
});
const _e = /* @__PURE__ */ y(ue, [["__scopeId", "data-v-27df9289"]]), pe = /* @__PURE__ */ b({
  __name: "CCardContent",
  props: {
    as: {}
  },
  setup(t) {
    return f("theme"), (e, a) => {
      const o = C("style-setup");
      return $((_(), m(M("div"), { class: "CCardContent" }, {
        default: k(() => [
          g(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })), [
        [o, e.$.type, e.$attrs]
      ]);
    };
  }
});
const fe = /* @__PURE__ */ y(pe, [["__scopeId", "data-v-0f0761fc"]]), he = ["data-id"], ge = /* @__PURE__ */ b({
  __name: "CContainer",
  setup(t) {
    const e = x();
    return (a, o) => {
      const r = C("style-setup");
      return $((_(), p("section", {
        "data-id": c(e),
        class: "CContainer"
      }, [
        g(a.$slots, "default", {}, void 0, !0)
      ], 8, he)), [
        [r, a.$.type, a.$attrs, c(e)]
      ]);
    };
  }
});
const ve = /* @__PURE__ */ y(ge, [["__scopeId", "data-v-ba427fa7"]]), me = /* @__PURE__ */ b({
  __name: "CText",
  props: {
    as: {}
  },
  setup(t) {
    var r;
    I((s) => ({
      "77ee5eb0": a.fontSize,
      "0d5b218e": a.marginBottom
    }));
    const e = f("theme"), a = {
      fontSize: "16px",
      color: (r = e == null ? void 0 : e.body) == null ? void 0 : r.color,
      marginBottom: e.spaces.sm
    }, o = x();
    return (s, n) => {
      const i = C("style-setup");
      return $((_(), m(M(s.as), {
        "data-id": c(o),
        class: "CText"
      }, {
        default: k(() => [
          g(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [i, s.$.type, s.$attrs, c(o)]
      ]);
    };
  }
});
const F = /* @__PURE__ */ y(me, [["__scopeId", "data-v-a98c7614"]]), R = {
  padding: "10px 16px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: A.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: A.radii.xs,
  lineHeight: A.lineHeights.base,
  fontWeight: A.fontWeights.bold
}, j = ({ colors: t, colorMode: e, additionalStyling: a }) => {
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
  return D(o[e], a);
}, be = (t) => {
  switch (t.variant) {
    case "information":
      return j(t);
    case "warning":
      return j(t);
    default:
      return j(t);
  }
}, P = (t) => (console.log(R), {
  ...R,
  ...be(t)
}), ye = ["width", "height", "fill", "transform"], Ce = { key: 0 }, $e = /* @__PURE__ */ h("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1), we = [
  $e
], Ae = { key: 1 }, ke = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), Me = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), Se = [
  ke,
  Me
], Ie = { key: 2 }, xe = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), Ze = [
  xe
], Be = { key: 3 }, Te = /* @__PURE__ */ h("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), De = [
  Te
], Le = { key: 4 }, Oe = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), je = [
  Oe
], Ee = { key: 5 }, We = /* @__PURE__ */ h("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), ze = [
  We
], Ve = {
  name: "PhCheckCircle"
}, Re = /* @__PURE__ */ b({
  ...Ve,
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
    const e = t, a = f("weight", "regular"), o = f("size", "1em"), r = f("color", "currentColor"), s = f("mirrored", !1), n = v(() => e.weight ?? a), i = v(() => e.size ?? o), l = v(() => e.color ?? r), d = v(() => e.mirrored !== void 0 ? e.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, w) => (_(), p("svg", U({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: d.value
    }, u.$attrs), [
      g(u.$slots, "default"),
      n.value === "bold" ? (_(), p("g", Ce, we)) : n.value === "duotone" ? (_(), p("g", Ae, Se)) : n.value === "fill" ? (_(), p("g", Ie, Ze)) : n.value === "light" ? (_(), p("g", Be, De)) : n.value === "regular" ? (_(), p("g", Le, je)) : n.value === "thin" ? (_(), p("g", Ee, ze)) : S("", !0)
    ], 16, ye));
  }
}), Pe = ["width", "height", "fill", "transform"], qe = { key: 0 }, Ne = /* @__PURE__ */ h("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }, null, -1), He = [
  Ne
], Ue = { key: 1 }, Fe = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), Ge = /* @__PURE__ */ h("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }, null, -1), Je = [
  Fe,
  Ge
], Ke = { key: 2 }, Qe = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }, null, -1), Xe = [
  Qe
], Ye = { key: 3 }, et = /* @__PURE__ */ h("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), tt = [
  et
], at = { key: 4 }, ot = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, null, -1), rt = [
  ot
], st = { key: 5 }, nt = /* @__PURE__ */ h("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), ct = [
  nt
], it = {
  name: "PhInfo"
}, lt = /* @__PURE__ */ b({
  ...it,
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
    const e = t, a = f("weight", "regular"), o = f("size", "1em"), r = f("color", "currentColor"), s = f("mirrored", !1), n = v(() => e.weight ?? a), i = v(() => e.size ?? o), l = v(() => e.color ?? r), d = v(() => e.mirrored !== void 0 ? e.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, w) => (_(), p("svg", U({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: d.value
    }, u.$attrs), [
      g(u.$slots, "default"),
      n.value === "bold" ? (_(), p("g", qe, He)) : n.value === "duotone" ? (_(), p("g", Ue, Je)) : n.value === "fill" ? (_(), p("g", Ke, Xe)) : n.value === "light" ? (_(), p("g", Ye, tt)) : n.value === "regular" ? (_(), p("g", at, rt)) : n.value === "thin" ? (_(), p("g", st, ct)) : S("", !0)
    ], 16, Pe));
  }
}), dt = /* @__PURE__ */ b({
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
    I((u) => ({
      c33effc8: c(l).bg,
      "7fef982c": c(l).color,
      "3f29cef5": c(l).borderRadius
    }));
    const r = f("theme"), s = f("colorMode"), n = x();
    let i = v({
      get() {
        return r.CAlert[e];
      },
      set(u) {
        return u;
      }
    }), l = W(P({ ...o, colors: i.value, colorMode: s.value }));
    z(() => r, (u) => {
      l.value = P({ ...o, colors: i.value, colorMode: s.value });
    }, { deep: !0 });
    let d = v({
      get() {
        switch (e) {
          case "information":
            return lt;
          case "success":
            return Re;
        }
      },
      set(u) {
        return u;
      }
    });
    return (u, w) => {
      const Z = C("style-setup");
      return $((_(), m(M("div"), {
        "data-id": c(n),
        class: "CAlert"
      }, {
        default: k(() => [
          c(d) ? (_(), m(T, {
            key: 0,
            as: c(d),
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : S("", !0),
          h("div", null, [
            u.title ? (_(), m(F, {
              key: 0,
              as: "h4"
            }, {
              default: k(() => [
                G(J(u.title), 1)
              ]),
              _: 1
            })) : S("", !0),
            g(u.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [Z, u.$.type, u.$attrs, c(n)]
      ]);
    };
  }
});
const ut = /* @__PURE__ */ y(dt, [["__scopeId", "data-v-b23a0a48"]]), E = { CMainBar: Y, CMain: oe, CButton: ie, CCard: de, CContainer: ve, CCardTitle: _e, CCardContent: fe, CText: F, CAlert: ut, CIcon: T }, _t = {
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
}, q = {
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
async function pt(t, e) {
  return Object.entries(t).map(([a, o]) => {
    const r = ht(a);
    return r in e.style ? [r, o] : !1;
  }).filter(Boolean);
}
async function ft(t) {
  const e = document.createElement("style");
  document.head.appendChild(e);
  const a = e.sheet;
  for (let o = 0; o < t.length; o++) {
    let r = 1, s = t[o], n = s[0], i = "";
    Array.isArray(s[1][0]) && (s = s[1], r = 0);
    for (let l = s.length; r < l; r++) {
      const d = s[r];
      i += `${d[0]}: ${d[1]}${d[2] ? " !important" : ""};
`;
    }
    a.insertRule(
      `${n}{${i}}`,
      a.cssRules.length
    );
  }
}
function ht(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
async function N(t, e, a, o) {
  const r = await pt(a, o);
  await ft([[`${e}[${t}]`, r]]), Object.entries(a).forEach(([s, n]) => {
    o.style.hasOwnProperty(s) && !(s in o) && (console.log("attr", s), o.removeAttribute(s));
  });
}
function H(t) {
  const e = (a, o, r) => {
    typeof r == "string" ? document.documentElement.style.setProperty(
      `--${a}-${o}`,
      r
    ) : typeof r == "object" && Object.entries(r).forEach(([s, n]) => {
      s.startsWith("_") ? e(
        a,
        `${o}${s}`,
        n
      ) : e(
        `${a}-${o}`,
        s,
        n
      );
    });
  };
  Object.entries(t).forEach(([a, o]) => {
    Object.entries(o).forEach(([r, s]) => {
      e(a, r, s);
    });
  });
}
function gt(t, e, a) {
  const o = document.createElement("style");
  o.setAttribute("type", "text/css");
  const r = a.__scopeId ? `[${a.__scopeId}]` : "", s = a.__name, n = (i, l) => {
    const d = [];
    return Object.entries(l).forEach(([u, w]) => {
      const Z = u.startsWith("_") ? `${i}${u}` : `${i}-${u}`;
      if (typeof w == "object" && !Array.isArray(w) && !u.startsWith("_")) {
        const L = n(Z, w);
        d.push(...L);
      } else if (u.startsWith("_")) {
        const L = u.split("-").find((B) => B.indexOf("_") !== -1);
        d.push(`.${s}${r}${L.replace("_", ":")} { ${Object.entries(w).map(([B]) => `${B}:var(--${Z}-${B})`).join(";")}}`);
      } else
        d.push(`.${s}${r} { ${u}:var(--${Z}) }`);
    }), d;
  };
  Object.entries(t[a.__name]).forEach(([i, l]) => {
    const d = n(a.__name, { [i]: l });
    vt(d).forEach((u) => {
      o.textContent += `${u} `;
    });
  }), e.appendChild(o);
}
function vt(t) {
  const e = {};
  return t.forEach((a) => {
    const o = a.match(/(.+?)\s*{([^}]+)}/);
    if (o) {
      const [r, s] = o.slice(1);
      e[r] || (e[r] = []), e[r].push(s.trim());
    }
  }), Object.entries(e).map(([a, o]) => {
    const r = o.join("; ");
    return `${a} { ${r} }`;
  });
}
const mt = {
  beforeMount(t, e) {
    e == null || e.value, e.arg && t.classList.add(e.arg), t.classList.add("row");
  }
}, bt = {
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
var yt = {};
function Ct(t, e) {
  return g(t.$slots, "default");
}
const $t = /* @__PURE__ */ y(yt, [["render", Ct]]), At = {
  install: (t) => {
    const e = W("dark");
    let a = K(D(A, q));
    H(a);
    function o() {
      e.value === "light" ? (e.value = "dark", console.log("darkmode"), a = Object.assign(a, { ...q })) : (console.log("lightMode"), e.value = "light", a = Object.assign(a, { ..._t }));
    }
    z(e, (s) => {
      H(a);
    }), t.provide("theme", a), t.provide("colorMode", e), t.config.globalProperties.$toggleTheme = (s) => o();
    const r = {
      beforeMount(s, n) {
        var i;
        N(`data-id="${n.modifiers ?? ((i = n.value) == null ? void 0 : i.__scopeId)}"`, s.tagName.toLowerCase(), n.arg, s);
      },
      beforeUpdate(s, n) {
        var i;
        N(`data-id="${n.modifiers ?? ((i = n.value) == null ? void 0 : i.__scopeId)}"`, s.tagName.toLowerCase(), n.arg, s);
      }
    };
    t.directive("styleSetup", r), t.directive("row", mt), t.directive("col", bt), t.component("CThemeProvider", $t);
    for (const s in E)
      if (E.hasOwnProperty(s)) {
        const n = E[s];
        n.__name === "CIcon" && console.log("CICON!!", n), a[n.__name] && gt(a, document.head, n), t.component(n.__name ?? s, n);
      }
  }
};
export {
  At as default
};
