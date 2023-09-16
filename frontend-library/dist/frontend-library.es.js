import { defineComponent as p, useCssVars as T, inject as v, computed as m, resolveDirective as $, withDirectives as w, openBlock as _, createElementBlock as f, unref as d, renderSlot as g, createBlock as y, resolveDynamicComponent as I, withCtx as M, ref as Z, watch as O, createCommentVNode as B, mergeProps as H, createElementVNode as h, createTextVNode as J, toDisplayString as K, toRefs as Q, onMounted as X, nextTick as Y, reactive as ee } from "vue";
function S() {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let t = "";
  for (let a = 0; a < 6; a++) {
    const r = Math.floor(Math.random() * e.length);
    t += e.charAt(r);
  }
  return t;
}
const te = ["data-id"], ae = /* @__PURE__ */ p({
  __name: "CMainBar",
  setup(e) {
    var n, s;
    T((o) => ({
      "78077ec2": a.background,
      "06082152": a.color
    }));
    const t = v("theme"), a = {
      background: (n = t == null ? void 0 : t.CMainBar) == null ? void 0 : n.background,
      color: (s = t == null ? void 0 : t.CMainBar) == null ? void 0 : s.color
    }, r = S();
    return m({
      get() {
        return t.CMainBar;
      },
      set(o) {
        return o;
      }
    }), (o, i) => {
      const l = $("style-setup");
      return w((_(), f("header", {
        "data-id": d(r),
        class: "CMainBar"
      }, [
        g(o.$slots, "default", {}, void 0, !0)
      ], 8, te)), [
        [l, o.$.type, o.$attrs, d(r)]
      ]);
    };
  }
});
const C = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, n] of t)
    a[r] = n;
  return a;
}, re = /* @__PURE__ */ C(ae, [["__scopeId", "data-v-f40a194a"]]);
var oe = {}, ne = { class: "CMain" };
function se(e, t) {
  var a = $("style-setup");
  return w((_(), f("main", ne, [
    g(e.$slots, "default", {}, void 0, !0)
  ])), [
    [a, e.$.type, e.$attrs]
  ]);
}
const ie = /* @__PURE__ */ C(oe, [["render", se], ["__scopeId", "data-v-994719c5"]]), A = {
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
function D(e, t) {
  const a = { ...e };
  for (const r in t)
    t.hasOwnProperty(r) && (t[r] && t[r].constructor === Object ? a[r] && a[r].constructor === Object ? a[r] = D(a[r], t[r]) : a[r] = { ...t[r] } : a[r] = t[r]);
  return a;
}
const le = (e) => ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e) === !0, U = (e, t, a) => {
  var n;
  let r = t;
  return e.rounded === void 0 || (typeof (e == null ? void 0 : e.rounded) == "boolean" && (e == null ? void 0 : e.rounded) === !0 || ((n = e == null ? void 0 : e.rounded) == null ? void 0 : n.length) === 0 ? r.borderRadius = a.radii.lg : le(e == null ? void 0 : e.rounded) ? r.borderRadius = a.radii[e == null ? void 0 : e.rounded] : r.borderRadius = e == null ? void 0 : e.rounded), r;
}, ce = {
  padding: "16px 20px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: A.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: "0px",
  lineHeight: A.lineHeights.base,
  fontWeight: A.fontWeights.bold
}, j = ({ colors: e, colorMode: t, additionalStyling: a }) => {
  let r = {
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
  return D(r[t], a);
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
  ...U(e, ce, A),
  ...de(e)
}), ue = /* @__PURE__ */ p({
  __name: "CIcon",
  props: {
    as: {},
    space: {}
  },
  setup(e) {
    const t = S();
    return (a, r) => {
      const n = $("style-setup");
      return w((_(), y(I(a.as), {
        "data-id": d(t),
        class: "CIcon"
      }, {
        default: M(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, a.$.type, a.$attrs, d(t)]
      ]);
    };
  }
});
const L = /* @__PURE__ */ C(ue, [["__scopeId", "data-v-dab21008"]]), _e = /* @__PURE__ */ p({
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
    const { variant: t = "primary", as: a = "button", ...r } = e;
    T((c) => ({
      "26f007e2": d(l).lineHeight,
      "7f7cd286": d(l).padding,
      ae2baa2e: d(l).letterSpacing,
      "71899e0a": d(l).height,
      "60e1b4fc": d(l).margin,
      "3c3a14f8": d(l).textAlign,
      b739269c: d(l).borderRadius,
      "2fa49bc4": d(l).fontSize,
      "1283791c": d(l).width,
      "31b75196": d(l).maxWidth,
      "40ffcd0a": d(l).fontWeight,
      "1853b619": d(l).bg,
      "14b175e2": d(l).color,
      19382742: d(l)._hover.bg,
      64985174: d(l)._hover.color
    })), console.log(a);
    const n = v("theme"), s = v("colorMode"), o = S();
    let i = m({
      get() {
        return n.CButton[t];
      },
      set(c) {
        return c;
      }
    }), l = Z(E({ ...r, colors: i.value, colorMode: s.value }));
    return O(() => n, (c) => {
      l.value = E({ ...r, colors: i.value, colorMode: s.value });
    }, { deep: !0 }), (c, u) => {
      const b = $("style-setup");
      return w((_(), y(I(c.as ?? "button"), {
        "data-id": d(o),
        class: "CButton",
        disabled: c.isDisabled
      }, {
        default: M(() => [
          c.leftIcon ? (_(), y(L, {
            key: 0,
            as: c.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : B("", !0),
          g(c.$slots, "default", {}, void 0, !0),
          c.rightIcon ? (_(), y(L, {
            key: 1,
            as: c.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : B("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [b, c.$.type, c.$attrs, d(o)]
      ]);
    };
  }
});
const fe = /* @__PURE__ */ C(_e, [["__scopeId", "data-v-ac16b061"]]), he = /* @__PURE__ */ p({
  __name: "CCard",
  props: {
    as: {}
  },
  setup(e) {
    T((n) => ({
      "6f7ac7bf": a.borderRadius
    }));
    const a = {
      borderRadius: v("theme").radii.lg
    }, r = S();
    return (n, s) => {
      const o = $("style-setup");
      return w((_(), y(I("div"), {
        "data-id": d(r),
        class: "CCard"
      }, {
        default: M(() => [
          g(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [o, n.$.type, n.$attrs, d(r)]
      ]);
    };
  }
});
const ve = /* @__PURE__ */ C(he, [["__scopeId", "data-v-d073c29f"]]), ge = /* @__PURE__ */ p({
  __name: "CCardTitle",
  props: {
    as: {}
  },
  setup(e) {
    T((n) => ({
      "64e4ddeb": t.fontWeight,
      19608798: t.fontSize
    })), v("theme");
    const t = {
      fontWeight: "900",
      fontSize: "18px"
    };
    function a() {
      const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let s = "";
      for (let o = 0; o < 6; o++) {
        const i = Math.floor(Math.random() * n.length);
        s += n.charAt(i);
      }
      return s;
    }
    const r = a();
    return (n, s) => {
      const o = $("style-setup");
      return w((_(), y(I("h3"), {
        "data-id": d(r),
        class: "CCardTitle"
      }, {
        default: M(() => [
          g(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [o, n.$.type, n.$attrs, d(r)]
      ]);
    };
  }
});
const pe = /* @__PURE__ */ C(ge, [["__scopeId", "data-v-27df9289"]]), me = /* @__PURE__ */ p({
  __name: "CCardContent",
  props: {
    as: {}
  },
  setup(e) {
    return v("theme"), (t, a) => {
      const r = $("style-setup");
      return w((_(), y(I("div"), { class: "CCardContent" }, {
        default: M(() => [
          g(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })), [
        [r, t.$.type, t.$attrs]
      ]);
    };
  }
});
const be = /* @__PURE__ */ C(me, [["__scopeId", "data-v-0f0761fc"]]), ye = ["data-id"], Ce = /* @__PURE__ */ p({
  __name: "CContainer",
  setup(e) {
    const t = S();
    return (a, r) => {
      const n = $("style-setup");
      return w((_(), f("section", {
        "data-id": d(t),
        class: "CContainer"
      }, [
        g(a.$slots, "default", {}, void 0, !0)
      ], 8, ye)), [
        [n, a.$.type, a.$attrs, d(t)]
      ]);
    };
  }
});
const $e = /* @__PURE__ */ C(Ce, [["__scopeId", "data-v-ba427fa7"]]), we = /* @__PURE__ */ p({
  __name: "CText",
  props: {
    as: {}
  },
  setup(e) {
    var n;
    T((s) => ({
      "67cc747a": a.fontSize,
      "2703d668": a.marginBottom
    }));
    const t = v("theme"), a = {
      fontSize: "16px",
      color: (n = t == null ? void 0 : t.body) == null ? void 0 : n.color,
      marginBottom: t.spaces.sm
    }, r = S();
    return (s, o) => {
      const i = $("style-setup");
      return w((_(), y(I(s.as), {
        "data-id": d(r),
        class: "CText"
      }, {
        default: M(() => [
          g(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [i, s.$.type, s.$attrs, d(r)]
      ]);
    };
  }
});
const G = /* @__PURE__ */ C(we, [["__scopeId", "data-v-ada08437"]]), xe = {
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
}, z = ({ colors: e, colorMode: t, additionalStyling: a }) => {
  let r = {
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
  return D(r[t], a);
}, Ae = (e) => {
  switch (e.variant) {
    case "information":
      return z(e);
    case "warning":
      return z(e);
    default:
      return z(e);
  }
}, W = (e) => ({
  ...U(e, xe, A),
  ...Ae(e)
}), ke = ["width", "height", "fill", "transform"], Me = { key: 0 }, Ie = /* @__PURE__ */ h("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1), Se = [
  Ie
], Ze = { key: 1 }, Be = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), Te = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), De = [
  Be,
  Te
], Oe = { key: 2 }, Ve = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), je = [
  Ve
], Le = { key: 3 }, ze = /* @__PURE__ */ h("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), Re = [
  ze
], Ee = { key: 4 }, We = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), qe = [
  We
], Pe = { key: 5 }, Ne = /* @__PURE__ */ h("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), Fe = [
  Ne
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
    const t = e, a = v("weight", "regular"), r = v("size", "1em"), n = v("color", "currentColor"), s = v("mirrored", !1), o = m(() => t.weight ?? a), i = m(() => t.size ?? r), l = m(() => t.color ?? n), c = m(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, b) => (_(), f("svg", H({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      g(u.$slots, "default"),
      o.value === "bold" ? (_(), f("g", Me, Se)) : o.value === "duotone" ? (_(), f("g", Ze, De)) : o.value === "fill" ? (_(), f("g", Oe, je)) : o.value === "light" ? (_(), f("g", Le, Re)) : o.value === "regular" ? (_(), f("g", Ee, qe)) : o.value === "thin" ? (_(), f("g", Pe, Fe)) : B("", !0)
    ], 16, ke));
  }
}), Ge = ["width", "height", "fill", "transform"], Je = { key: 0 }, Ke = /* @__PURE__ */ h("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }, null, -1), Qe = [
  Ke
], Xe = { key: 1 }, Ye = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), et = /* @__PURE__ */ h("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }, null, -1), tt = [
  Ye,
  et
], at = { key: 2 }, rt = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }, null, -1), ot = [
  rt
], nt = { key: 3 }, st = /* @__PURE__ */ h("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), it = [
  st
], lt = { key: 4 }, ct = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, null, -1), dt = [
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
    const t = e, a = v("weight", "regular"), r = v("size", "1em"), n = v("color", "currentColor"), s = v("mirrored", !1), o = m(() => t.weight ?? a), i = m(() => t.size ?? r), l = m(() => t.color ?? n), c = m(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : s ? "scale(-1, 1)" : void 0);
    return (u, b) => (_(), f("svg", H({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: l.value,
      transform: c.value
    }, u.$attrs), [
      g(u.$slots, "default"),
      o.value === "bold" ? (_(), f("g", Je, Qe)) : o.value === "duotone" ? (_(), f("g", Xe, tt)) : o.value === "fill" ? (_(), f("g", at, ot)) : o.value === "light" ? (_(), f("g", nt, it)) : o.value === "regular" ? (_(), f("g", lt, dt)) : o.value === "thin" ? (_(), f("g", ut, ft)) : B("", !0)
    ], 16, Ge));
  }
}), gt = /* @__PURE__ */ p({
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
  setup(e) {
    const { variant: t = "information", as: a = "div", ...r } = e;
    T((u) => ({
      c33effc8: d(l).bg,
      "7fef982c": d(l).color,
      "3f29cef5": d(l).borderRadius
    }));
    const n = v("theme"), s = v("colorMode"), o = S();
    let i = m({
      get() {
        return n.CAlert[t];
      },
      set(u) {
        return u;
      }
    }), l = Z(W({ ...r, colors: i.value, colorMode: s.value }));
    O(() => n, (u) => {
      l.value = W({ ...r, colors: i.value, colorMode: s.value });
    }, { deep: !0 });
    let c = m({
      get() {
        switch (t) {
          case "information":
            return vt;
          case "success":
            return Ue;
        }
      },
      set(u) {
        return u;
      }
    });
    return (u, b) => {
      const k = $("style-setup");
      return w((_(), y(I("div"), {
        "data-id": d(o),
        class: "CAlert"
      }, {
        default: M(() => [
          d(c) ? (_(), y(L, {
            key: 0,
            as: d(c),
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : B("", !0),
          h("div", null, [
            u.title ? (_(), y(G, {
              key: 0,
              as: "h4"
            }, {
              default: M(() => [
                J(K(u.title), 1)
              ]),
              _: 1
            })) : B("", !0),
            g(u.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [k, u.$.type, u.$attrs, d(o)]
      ]);
    };
  }
});
const pt = /* @__PURE__ */ C(gt, [["__scopeId", "data-v-b23a0a48"]]);
function mt(e) {
  let t = Z();
  function a(s) {
    if (!e.rules)
      return;
    const i = e.rules.map((l) => {
      const c = l(s);
      if (c || c !== !0)
        return c;
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
  function r(s, o) {
    if (s === o)
      return !0;
    if (s instanceof Date && o instanceof Date && s.getTime() !== o.getTime() || s !== Object(s) || o !== Object(o))
      return !1;
    const i = Object.keys(s);
    return i.length !== Object.keys(o).length ? !1 : i.every((l) => r(s[l], o[l]));
  }
  const { rules: n } = Q(e);
  return O(() => n, (s, o) => {
    r(s, o) || a();
  }, { deep: !0 }), X(() => {
    a();
  }), { validate: a, error: t };
}
const bt = { class: "form-box" }, yt = /* @__PURE__ */ h("input", {
  class: "form-input",
  type: "text",
  required: "",
  minlength: "6",
  placeholder: "tester"
}, null, -1), Ct = /* @__PURE__ */ h("label", {
  for: "",
  class: "label"
}, "tester ", -1), $t = /* @__PURE__ */ h("span", { class: "error" }, "Field Required", -1), wt = [
  yt,
  Ct,
  $t
], xt = /* @__PURE__ */ p({
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
    const a = e, { error: r, validate: n } = mt(a);
    let s = Z(a.modelValue);
    return O(s, (o) => {
      t("input", o), a.rules && n(o);
    }), (o, i) => (_(), f("div", bt, wt));
  }
});
const At = /* @__PURE__ */ p({
  __name: "CForm",
  setup(e, { expose: t }) {
    const a = Z(), r = Z(!1), n = m({
      get() {
        var o, i, l, c;
        if (r.value) {
          const u = [], b = (o = a.value) == null ? void 0 : o.elements;
          for (let k = 0; k < b.length; k++) {
            const x = b[k];
            (i = x == null ? void 0 : x.__vue__) != null && i.isInvalid && ((l = x.__vue__) == null ? void 0 : l.isInvalid) === !0 && u.push(!0), !x.__vue__ == null && ((c = x.validity) == null ? void 0 : c.valid) !== !0 && u.push(!0);
          }
          return r.value = !1, u.length === 0;
        }
        return r.value = !1, !1;
      },
      set(o) {
        return o;
      }
    });
    async function s() {
      return r.value = !0, await Y(), n.value;
    }
    return t({ validation: s }), (o, i) => (_(), f("form", {
      ref_key: "form",
      ref: a
    }, [
      g(o.$slots, "default")
    ], 512));
  }
}), kt = /* @__PURE__ */ p({
  __name: "CFlex",
  props: {
    as: {}
  },
  setup(e) {
    const t = S();
    return (a, r) => {
      const n = $("style-setup");
      return w((_(), y(I(a.as), {
        "data-id": d(t),
        class: "CFlex"
      }, {
        default: M(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, a.$.type, a.$attrs, d(t)]
      ]);
    };
  }
});
const Mt = /* @__PURE__ */ C(kt, [["__scopeId", "data-v-c22d1809"]]), R = { CMainBar: re, CMain: ie, CButton: fe, CCard: ve, CContainer: $e, CCardTitle: pe, CCardContent: be, CText: G, CAlert: pt, CIcon: L, CInput: xt, CForm: At, CFlex: Mt }, q = {
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
async function It(e, t) {
  return Object.entries(e).map(([a, r]) => {
    const n = Zt(a);
    return n in t.style ? [n, r] : !1;
  }).filter(Boolean);
}
async function St(e) {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const a = t.sheet;
  for (let r = 0; r < e.length; r++) {
    let n = 1, s = e[r], o = s[0], i = "";
    Array.isArray(s[1][0]) && (s = s[1], n = 0);
    for (let l = s.length; n < l; n++) {
      const c = s[n];
      i += `${c[0]}: ${c[1]}${c[2] ? " !important" : ""};
`;
    }
    a.insertRule(
      `${o}{${i}}`,
      a.cssRules.length
    );
  }
}
function Zt(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
async function N(e, t, a, r) {
  const n = await It(a, r);
  await St([[`${t}[${e}]`, n]]), Object.entries(a).forEach(([s, o]) => {
    r.style.hasOwnProperty(s) && !(s in r) && (console.log("attr", s), r.removeAttribute(s));
  });
}
function F(e) {
  const t = (a, r, n) => {
    typeof n == "string" ? document.documentElement.style.setProperty(
      `--${a}-${r}`,
      n
    ) : typeof n == "object" && Object.entries(n).forEach(([s, o]) => {
      s.startsWith("_") ? t(
        a,
        `${r}${s}`,
        o
      ) : t(
        `${a}-${r}`,
        s,
        o
      );
    });
  };
  Object.entries(e).forEach(([a, r]) => {
    Object.entries(r).forEach(([n, s]) => {
      t(a, n, s);
    });
  });
}
function Bt(e, t, a) {
  const r = document.createElement("style");
  r.setAttribute("type", "text/css");
  const n = a.__scopeId ? `[${a.__scopeId}]` : "", s = a.__name, o = (i, l) => {
    const c = [];
    return Object.entries(l).forEach(([u, b]) => {
      const k = u.startsWith("_") ? `${i}${u}` : `${i}-${u}`;
      if (typeof b == "object" && !Array.isArray(b) && !u.startsWith("_")) {
        const x = o(k, b);
        c.push(...x);
      } else if (u.startsWith("_")) {
        const x = u.split("-").find((V) => V.indexOf("_") !== -1);
        c.push(`.${s}${n}${x.replace("_", ":")} { ${Object.entries(b).map(([V]) => `${V}:var(--${k}-${V})`).join(";")}}`);
      } else
        c.push(`.${s}${n} { ${u}:var(--${k}) }`);
    }), c;
  };
  Object.entries(e[a.__name]).forEach(([i, l]) => {
    const c = o(a.__name, { [i]: l });
    Tt(c).forEach((u) => {
      r.textContent += `${u} `;
    });
  }), t.appendChild(r);
}
function Tt(e) {
  const t = {};
  return e.forEach((a) => {
    const r = a.match(/(.+?)\s*{([^}]+)}/);
    if (r) {
      const [n, s] = r.slice(1);
      t[n] || (t[n] = []), t[n].push(s.trim());
    }
  }), Object.entries(t).map(([a, r]) => {
    const n = r.join("; ");
    return `${a} { ${n} }`;
  });
}
const Dt = {
  beforeMount(e, t) {
    switch (t == null || t.value, t.arg && e.classList.add(t.arg), t.arg) {
      case "nowrap":
        e.classList.add("nowrap");
    }
    e.classList.add("row");
  }
}, Ot = {
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
var Vt = {};
function jt(e, t) {
  return g(e.$slots, "default");
}
const Lt = /* @__PURE__ */ C(Vt, [["render", jt]]), Rt = {
  install: (e, t) => {
    const a = Z(t != null && t.colorMode ? t.colorMode : "dark");
    let r = ee(D(A, a.value === "dark" ? P : q));
    if (t.customTheme)
      try {
        r = D(r, t.customTheme[a.value]);
      } catch (o) {
        console.error(o);
      }
    F(r);
    function n() {
      a.value === "light" ? (a.value = "dark", console.log("darkmode"), r = Object.assign(r, { ...P })) : (console.log("lightMode"), a.value = "light", r = Object.assign(r, { ...q }));
    }
    O(a, (o) => {
      F(r);
    }), e.provide("theme", r), e.provide("colorMode", a), e.config.globalProperties.$toggleTheme = (o) => n();
    const s = {
      beforeMount(o, i) {
        var l;
        N(`data-id="${i.modifiers ?? ((l = i.value) == null ? void 0 : l.__scopeId)}"`, o.tagName.toLowerCase(), i.arg, o);
      },
      beforeUpdate(o, i) {
        var l;
        N(`data-id="${i.modifiers ?? ((l = i.value) == null ? void 0 : l.__scopeId)}"`, o.tagName.toLowerCase(), i.arg, o);
      }
    };
    e.directive("styleSetup", s), e.directive("row", Dt), e.directive("col", Ot), e.component("CThemeProvider", Lt);
    for (const o in R)
      if (R.hasOwnProperty(o)) {
        const i = R[o];
        i.__name === "CIcon" && console.log("CICON!!", i), r[i.__name] && Bt(r, document.head, i), e.component(i.__name ?? o, i);
      }
  }
};
export {
  Rt as default
};
