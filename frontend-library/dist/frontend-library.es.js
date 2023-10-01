import { defineComponent as p, useCssVars as V, inject as v, computed as y, resolveDirective as $, withDirectives as w, openBlock as u, createElementBlock as f, unref as c, renderSlot as g, createBlock as m, resolveDynamicComponent as I, withCtx as Z, ref as A, watch as B, createCommentVNode as M, nextTick as G, mergeProps as J, createElementVNode as h, createTextVNode as Y, toDisplayString as ee, toRefs as K, onMounted as te, reactive as ae } from "vue";
function T() {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let t = "";
  for (let a = 0; a < 6; a++) {
    const o = Math.floor(Math.random() * e.length);
    t += e.charAt(o);
  }
  return t;
}
const oe = ["data-id"], re = /* @__PURE__ */ p({
  __name: "CMainBar",
  setup(e) {
    var s, l;
    V((r) => ({
      "78077ec2": a.background,
      "06082152": a.color
    }));
    const t = v("theme"), a = {
      background: (s = t == null ? void 0 : t.CMainBar) == null ? void 0 : s.background,
      color: (l = t == null ? void 0 : t.CMainBar) == null ? void 0 : l.color
    }, o = T();
    return y({
      get() {
        return t.CMainBar;
      },
      set(r) {
        return r;
      }
    }), (r, i) => {
      const n = $("style-setup");
      return w((u(), f("header", {
        "data-id": c(o),
        class: "CMainBar"
      }, [
        g(r.$slots, "default", {}, void 0, !0)
      ], 8, oe)), [
        [n, r.$.type, r.$attrs, c(o)]
      ]);
    };
  }
});
const b = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, s] of t)
    a[o] = s;
  return a;
}, se = /* @__PURE__ */ b(re, [["__scopeId", "data-v-f40a194a"]]);
var ne = {}, le = { class: "CMain" };
function ie(e, t) {
  var a = $("style-setup");
  return w((u(), f("main", le, [
    g(e.$slots, "default", {}, void 0, !0)
  ])), [
    [a, e.$.type, e.$attrs]
  ]);
}
const ce = /* @__PURE__ */ b(ne, [["render", ie], ["__scopeId", "data-v-994719c5"]]), x = {
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
function z(e, t) {
  const a = { ...e };
  for (const o in t)
    t.hasOwnProperty(o) && (t[o] && t[o].constructor === Object ? a[o] && a[o].constructor === Object ? a[o] = z(a[o], t[o]) : a[o] = { ...t[o] } : a[o] = t[o]);
  return a;
}
const de = (e) => ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e) === !0, Q = (e, t, a) => {
  var s;
  let o = t;
  return e.rounded === void 0 || (typeof (e == null ? void 0 : e.rounded) == "boolean" && (e == null ? void 0 : e.rounded) === !0 || ((s = e == null ? void 0 : e.rounded) == null ? void 0 : s.length) === 0 ? o.borderRadius = a.radii.lg : de(e == null ? void 0 : e.rounded) ? o.borderRadius = a.radii[e == null ? void 0 : e.rounded] : o.borderRadius = e == null ? void 0 : e.rounded), o;
}, ue = {
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
}, L = ({ colors: e, colorMode: t, additionalStyling: a }) => {
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
  return z(o[t], a);
}, _e = (e) => {
  switch (e.variant) {
    case "primary":
      return L(e);
    case "secondary":
      return L(e);
    case "unstyled":
      return L(e);
    default:
      return L(e);
  }
}, q = (e) => ({
  ...Q(e, ue, x),
  ..._e(e)
}), fe = /* @__PURE__ */ p({
  __name: "CIcon",
  props: {
    as: {},
    space: {}
  },
  setup(e) {
    const t = T();
    return (a, o) => {
      const s = $("style-setup");
      return w((u(), m(I(a.as), {
        "data-id": c(t),
        class: "CIcon"
      }, {
        default: Z(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const j = /* @__PURE__ */ b(fe, [["__scopeId", "data-v-dab21008"]]), he = /* @__PURE__ */ p({
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
    V((d) => ({
      "7ee69889": c(n).lineHeight,
      b20a46fa: c(n).padding,
      "4e24f7a2": c(n).letterSpacing,
      "18ff1a75": c(n).height,
      "21530efc": c(n).margin,
      "013c3c6c": c(n).textAlign,
      "198cd2ac": c(n).borderRadius,
      "20140ebe": c(n).fontSize,
      "5c7a42b8": c(n).width,
      "2226c490": c(n).maxWidth,
      "71deb5f5": c(n).fontWeight,
      "222b6c93": c(n).bg,
      "5b634455": c(n).color,
      "36b71388": c(n)._hover.bg,
      "42dd3d40": c(n)._hover.color
    })), console.log(a);
    const s = v("theme"), l = v("colorMode"), r = T();
    let i = y({
      get() {
        return s.CButton[t];
      },
      set(d) {
        return d;
      }
    }), n = A(q({ ...o, colors: i.value, colorMode: l.value }));
    return B(() => s, (d) => {
      n.value = q({ ...o, colors: i.value, colorMode: l.value });
    }, { deep: !0 }), (d, _) => {
      const C = $("style-setup");
      return w((u(), m(I(d.as ?? "button"), {
        "data-id": c(r),
        class: "CButton",
        disabled: d.isDisabled
      }, {
        default: Z(() => [
          d.leftIcon ? (u(), m(j, {
            key: 0,
            as: d.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : M("", !0),
          g(d.$slots, "default", {}, void 0, !0),
          d.rightIcon ? (u(), m(j, {
            key: 1,
            as: d.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : M("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [C, d.$.type, d.$attrs, c(r)]
      ]);
    };
  }
});
const ve = /* @__PURE__ */ b(he, [["__scopeId", "data-v-ad27d1d9"]]), ge = /* @__PURE__ */ p({
  __name: "CCard",
  props: {
    as: {}
  },
  setup(e) {
    V((s) => ({
      "6f7ac7bf": a.borderRadius
    }));
    const a = {
      borderRadius: v("theme").radii.lg
    }, o = T();
    return (s, l) => {
      const r = $("style-setup");
      return w((u(), m(I("div"), {
        "data-id": c(o),
        class: "CCard"
      }, {
        default: Z(() => [
          g(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, s.$.type, s.$attrs, c(o)]
      ]);
    };
  }
});
const pe = /* @__PURE__ */ b(ge, [["__scopeId", "data-v-d073c29f"]]), me = /* @__PURE__ */ p({
  __name: "CCardTitle",
  props: {
    as: {}
  },
  setup(e) {
    V((s) => ({
      "64e4ddeb": t.fontWeight,
      19608798: t.fontSize
    })), v("theme");
    const t = {
      fontWeight: "900",
      fontSize: "18px"
    };
    function a() {
      const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let l = "";
      for (let r = 0; r < 6; r++) {
        const i = Math.floor(Math.random() * s.length);
        l += s.charAt(i);
      }
      return l;
    }
    const o = a();
    return (s, l) => {
      const r = $("style-setup");
      return w((u(), m(I("h3"), {
        "data-id": c(o),
        class: "CCardTitle"
      }, {
        default: Z(() => [
          g(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, s.$.type, s.$attrs, c(o)]
      ]);
    };
  }
});
const ye = /* @__PURE__ */ b(me, [["__scopeId", "data-v-27df9289"]]), be = /* @__PURE__ */ p({
  __name: "CCardContent",
  props: {
    as: {}
  },
  setup(e) {
    return v("theme"), (t, a) => {
      const o = $("style-setup");
      return w((u(), m(I("div"), { class: "CCardContent" }, {
        default: Z(() => [
          g(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })), [
        [o, t.$.type, t.$attrs]
      ]);
    };
  }
});
const Ce = /* @__PURE__ */ b(be, [["__scopeId", "data-v-0f0761fc"]]), $e = ["data-id"], we = /* @__PURE__ */ p({
  __name: "CContainer",
  setup(e) {
    const t = T();
    return (a, o) => {
      const s = $("style-setup");
      return w((u(), f("section", {
        "data-id": c(t),
        class: "CContainer"
      }, [
        g(a.$slots, "default", {}, void 0, !0)
      ], 8, $e)), [
        [s, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const ke = /* @__PURE__ */ b(we, [["__scopeId", "data-v-ba427fa7"]]), E = A(!0), xe = async () => {
  E.value = !1, await G(), E.value = !0;
}, Ie = /* @__PURE__ */ p({
  __name: "CText",
  props: {
    as: {}
  },
  setup(e) {
    var l;
    V((r) => ({
      "3a617175": o.value.fontSize,
      "52c4977e": o.value.marginBottom
    }));
    const t = v("theme"), a = v("colorMode"), o = A({
      fontSize: "16px",
      color: (l = t == null ? void 0 : t.body) == null ? void 0 : l.color,
      marginBottom: t.spaces.sm
    });
    B(() => a.value, (r) => {
      xe();
    });
    const s = T();
    return (r, i) => {
      const n = $("style-setup");
      return c(E) ? w((u(), m(I(r.as), {
        key: 0,
        "data-id": c(s),
        class: "CText"
      }, {
        default: Z(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, r.$.type, r.$attrs, c(s)]
      ]) : M("", !0);
    };
  }
});
const X = /* @__PURE__ */ b(Ie, [["__scopeId", "data-v-587f514f"]]), Ae = {
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
  return z(o[t], a);
}, Me = (e) => {
  switch (e.variant) {
    case "information":
      return O(e);
    case "warning":
      return O(e);
    default:
      return O(e);
  }
}, W = (e) => ({
  ...Q(e, Ae, x),
  ...Me(e)
}), Se = ["width", "height", "fill", "transform"], Ze = { key: 0 }, Te = /* @__PURE__ */ h("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1), Ve = [
  Te
], Be = { key: 1 }, ze = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), De = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), Le = [
  ze,
  De
], je = { key: 2 }, Oe = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), Re = [
  Oe
], Ee = { key: 3 }, qe = /* @__PURE__ */ h("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), We = [
  qe
], Pe = { key: 4 }, Fe = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), Ne = [
  Fe
], He = { key: 5 }, Ue = /* @__PURE__ */ h("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), Ge = [
  Ue
], Je = {
  name: "PhCheckCircle"
}, Ke = /* @__PURE__ */ p({
  ...Je,
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
    const t = e, a = v("weight", "regular"), o = v("size", "1em"), s = v("color", "currentColor"), l = v("mirrored", !1), r = y(() => t.weight ?? a), i = y(() => t.size ?? o), n = y(() => t.color ?? s), d = y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : l ? "scale(-1, 1)" : void 0);
    return (_, C) => (u(), f("svg", J({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: n.value,
      transform: d.value
    }, _.$attrs), [
      g(_.$slots, "default"),
      r.value === "bold" ? (u(), f("g", Ze, Ve)) : r.value === "duotone" ? (u(), f("g", Be, Le)) : r.value === "fill" ? (u(), f("g", je, Re)) : r.value === "light" ? (u(), f("g", Ee, We)) : r.value === "regular" ? (u(), f("g", Pe, Ne)) : r.value === "thin" ? (u(), f("g", He, Ge)) : M("", !0)
    ], 16, Se));
  }
}), Qe = ["width", "height", "fill", "transform"], Xe = { key: 0 }, Ye = /* @__PURE__ */ h("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }, null, -1), et = [
  Ye
], tt = { key: 1 }, at = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), ot = /* @__PURE__ */ h("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }, null, -1), rt = [
  at,
  ot
], st = { key: 2 }, nt = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }, null, -1), lt = [
  nt
], it = { key: 3 }, ct = /* @__PURE__ */ h("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), dt = [
  ct
], ut = { key: 4 }, _t = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, null, -1), ft = [
  _t
], ht = { key: 5 }, vt = /* @__PURE__ */ h("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), gt = [
  vt
], pt = {
  name: "PhInfo"
}, mt = /* @__PURE__ */ p({
  ...pt,
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
    const t = e, a = v("weight", "regular"), o = v("size", "1em"), s = v("color", "currentColor"), l = v("mirrored", !1), r = y(() => t.weight ?? a), i = y(() => t.size ?? o), n = y(() => t.color ?? s), d = y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : l ? "scale(-1, 1)" : void 0);
    return (_, C) => (u(), f("svg", J({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: n.value,
      transform: d.value
    }, _.$attrs), [
      g(_.$slots, "default"),
      r.value === "bold" ? (u(), f("g", Xe, et)) : r.value === "duotone" ? (u(), f("g", tt, rt)) : r.value === "fill" ? (u(), f("g", st, lt)) : r.value === "light" ? (u(), f("g", it, dt)) : r.value === "regular" ? (u(), f("g", ut, ft)) : r.value === "thin" ? (u(), f("g", ht, gt)) : M("", !0)
    ], 16, Qe));
  }
}), yt = /* @__PURE__ */ p({
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
    V((_) => ({
      c33effc8: c(n).bg,
      "7fef982c": c(n).color,
      "3f29cef5": c(n).borderRadius
    }));
    const s = v("theme"), l = v("colorMode"), r = T();
    let i = y({
      get() {
        return s.CAlert[t];
      },
      set(_) {
        return _;
      }
    }), n = A(W({ ...o, colors: i.value, colorMode: l.value }));
    B(() => s, (_) => {
      n.value = W({ ...o, colors: i.value, colorMode: l.value });
    }, { deep: !0 });
    let d = y({
      get() {
        switch (t) {
          case "information":
            return mt;
          case "success":
            return Ke;
        }
      },
      set(_) {
        return _;
      }
    });
    return (_, C) => {
      const S = $("style-setup");
      return w((u(), m(I("div"), {
        "data-id": c(r),
        class: "CAlert"
      }, {
        default: Z(() => [
          c(d) ? (u(), m(j, {
            key: 0,
            as: c(d),
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : M("", !0),
          h("div", null, [
            _.title ? (u(), m(X, {
              key: 0,
              as: "h4"
            }, {
              default: Z(() => [
                Y(ee(_.title), 1)
              ]),
              _: 1
            })) : M("", !0),
            g(_.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [S, _.$.type, _.$attrs, c(r)]
      ]);
    };
  }
});
const bt = /* @__PURE__ */ b(yt, [["__scopeId", "data-v-b23a0a48"]]);
function Ct(e) {
  let t = A();
  function a(l) {
    if (console.log("VALIDATE"), !e.rules)
      return;
    const i = e.rules.map((n) => {
      const d = n(l);
      if (d || d !== !0)
        return d;
    }).find((n) => n !== !0);
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
  function o(l, r) {
    if (l === r)
      return !0;
    if (l instanceof Date && r instanceof Date && l.getTime() !== r.getTime() || l !== Object(l) || r !== Object(r))
      return !1;
    const i = Object.keys(l);
    return i.length !== Object.keys(r).length ? !1 : i.every((n) => o(l[n], r[n]));
  }
  const { rules: s } = K(e);
  return B(() => s, (l, r) => {
    o(l, r) || a();
  }, { deep: !0 }), te(() => {
    a();
  }), { validate: a, error: t };
}
const $t = { class: "form-box" }, wt = ["value", "isInvalid"], kt = ["for"], xt = {
  key: 0,
  class: "error"
}, It = /* @__PURE__ */ p({
  __name: "CInput",
  props: {
    modelValue: {},
    minlength: {},
    name: {},
    placeholder: {},
    icon: {},
    rules: {},
    label: {},
    type: {},
    id: {}
  },
  emits: ["input", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, { error: o, validate: s } = Ct(a);
    let { modelValue: l } = K(a);
    B(l, (i) => {
      t("input", i), a.rules && s(i);
    });
    const r = (i) => {
      t("update:modelValue", i.target.value);
    };
    return (i, n) => (u(), f("div", $t, [
      h("input", {
        class: "form-input",
        type: "text",
        value: c(l),
        onInput: r,
        required: "",
        isInvalid: c(o) === !0 || typeof c(o) == "string",
        placeholder: "tester"
      }, null, 40, wt),
      h("label", {
        for: i.id,
        class: "label"
      }, "tester ", 8, kt),
      c(o) && typeof c(o) == "string" ? (u(), f("span", xt, "Field Required")) : M("", !0)
    ]));
  }
});
const At = /* @__PURE__ */ p({
  __name: "CForm",
  setup(e, { expose: t }) {
    const a = A(), o = A(!1), s = y({
      get() {
        var r, i, n, d;
        if (o.value) {
          const _ = [], C = (r = a.value) == null ? void 0 : r.elements;
          for (let S = 0; S < C.length; S++) {
            const k = C[S];
            (i = k == null ? void 0 : k.__vue__) != null && i.isInvalid && ((n = k.__vue__) == null ? void 0 : n.isInvalid) === !0 && _.push(!0), !k.__vue__ == null && ((d = k.validity) == null ? void 0 : d.valid) !== !0 && _.push(!0);
          }
          return o.value = !1, _.length === 0;
        }
        return o.value = !1, !1;
      },
      set(r) {
        return r;
      }
    });
    async function l() {
      return o.value = !0, await G(), s.value;
    }
    return t({ validation: l }), (r, i) => (u(), f("form", {
      ref_key: "form",
      ref: a
    }, [
      g(r.$slots, "default")
    ], 512));
  }
}), Mt = /* @__PURE__ */ p({
  __name: "CFlex",
  props: {
    as: {}
  },
  setup(e) {
    const t = T();
    return (a, o) => {
      const s = $("style-setup");
      return w((u(), m(I(a.as), {
        "data-id": c(t),
        class: "CFlex"
      }, {
        default: Z(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const St = /* @__PURE__ */ b(Mt, [["__scopeId", "data-v-fb2850e5"]]), Zt = ["data-id"], Tt = ["checked"], Vt = { class: "CToggle__switch" }, Bt = {
  key: 0,
  class: "CToggle__switch__slider",
  "data-switch": "true"
}, zt = {
  key: 1,
  class: "CToggle__switch__slider",
  "data-switch": "false"
}, Dt = /* @__PURE__ */ p({
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
    V((n) => ({
      "64fe3614": i.value()
    }));
    let o = A(a.modelValue);
    const s = T();
    function l() {
      o.value = !o.value, t("update:modelValue", o.value);
    }
    function r(n) {
      t("update:modelValue", !n.target.checked);
    }
    const i = A(() => {
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
    return (n, d) => {
      const _ = $("style-setup");
      return w((u(), f("div", {
        "data-id": c(s),
        class: "CToggle",
        onClick: l
      }, [
        h("input", {
          type: "checkbox",
          class: "CToggle__input--hidden",
          checked: c(o),
          onInput: r
        }, null, 40, Tt),
        h("div", Vt, [
          c(o) ? (u(), f("span", Bt, [
            n.trueIcon ? (u(), m(I(n.trueIcon), { key: 0 })) : M("", !0),
            g(n.$slots, "trueIcon", {}, void 0, !0)
          ])) : (u(), f("span", zt, [
            n.trueIcon ? (u(), m(I(n.falseIcon), { key: 0 })) : M("", !0),
            g(n.$slots, "falseIcon", {}, void 0, !0)
          ]))
        ])
      ], 8, Zt)), [
        [_, n.$.type, n.$attrs, c(s)]
      ]);
    };
  }
});
const Lt = /* @__PURE__ */ b(Dt, [["__scopeId", "data-v-33d2dfa1"]]), R = { CMainBar: se, CMain: ce, CButton: ve, CCard: pe, CContainer: ke, CCardTitle: ye, CCardContent: Ce, CText: X, CAlert: bt, CIcon: j, CInput: It, CForm: At, CFlex: St, CToggle: Lt }, P = {
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
}, F = {
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
async function N(e, t) {
  return Object.entries(e).map(([a, o]) => {
    const s = Ot(a);
    return s in t.style ? [s, o] : !1;
  }).filter(Boolean);
}
async function jt(e) {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const a = t.sheet;
  for (let o = 0; o < e.length; o++) {
    let s = 1, l = e[o], r = l[0], i = "";
    Array.isArray(l[1][0]) && (l = l[1], s = 0);
    for (let n = l.length; s < n; s++) {
      const d = l[s];
      i += `${d[0]}: ${d[1]}${d[2] ? " !important" : ""};
`;
    }
    a.insertRule(
      `${r}{${i}}`,
      a.cssRules.length
    );
  }
}
function Ot(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
async function H(e, t, a, o, s) {
  let l = await N(a, o);
  s === "dark" && a.dark && (l = [...l, ...await N(a.dark, o)]), await jt([[`${t}[${e}]`, l]]), Object.entries(a).forEach(([r, i]) => {
    (o.style.hasOwnProperty(r) && !(r in o) || r === "dark") && o.removeAttribute(r);
  });
}
function U(e) {
  const t = (a, o, s) => {
    typeof s == "string" ? document.documentElement.style.setProperty(
      `--${a}-${o}`,
      s
    ) : typeof s == "object" && Object.entries(s).forEach(([l, r]) => {
      l.startsWith("_") ? t(
        a,
        `${o}${l}`,
        r
      ) : t(
        `${a}-${o}`,
        l,
        r
      );
    });
  };
  Object.entries(e).forEach(([a, o]) => {
    Object.entries(o).forEach(([s, l]) => {
      t(a, s, l);
    });
  });
}
function Rt(e, t, a) {
  const o = document.createElement("style");
  o.setAttribute("type", "text/css");
  const s = a.__scopeId ? `[${a.__scopeId}]` : "", l = a.__name, r = (i, n) => {
    const d = [];
    return Object.entries(n).forEach(([_, C]) => {
      const S = _.startsWith("_") ? `${i}${_}` : `${i}-${_}`;
      if (typeof C == "object" && !Array.isArray(C) && !_.startsWith("_")) {
        const k = r(S, C);
        d.push(...k);
      } else if (_.startsWith("_")) {
        const k = _.split("-").find((D) => D.indexOf("_") !== -1);
        d.push(`.${l}${s}${k.replace("_", ":")} { ${Object.entries(C).map(([D]) => `${D}:var(--${S}-${D})`).join(";")}}`);
      } else
        d.push(`.${l}${s} { ${_}:var(--${S}) }`);
    }), d;
  };
  Object.entries(e[a.__name]).forEach(([i, n]) => {
    const d = r(a.__name, { [i]: n });
    Et(d).forEach((_) => {
      o.textContent += `${_} `;
    });
  }), t.appendChild(o);
}
function Et(e) {
  const t = {};
  return e.forEach((a) => {
    const o = a.match(/(.+?)\s*{([^}]+)}/);
    if (o) {
      const [s, l] = o.slice(1);
      t[s] || (t[s] = []), t[s].push(l.trim());
    }
  }), Object.entries(t).map(([a, o]) => {
    const s = o.join("; ");
    return `${a} { ${s} }`;
  });
}
const qt = {
  beforeMount(e, t) {
    switch (t == null || t.value, t.arg && e.classList.add(t.arg), t.arg) {
      case "nowrap":
        e.classList.add("nowrap");
    }
    e.classList.add("row");
  }
}, Wt = {
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
var Pt = {};
function Ft(e, t) {
  return g(e.$slots, "default");
}
const Nt = /* @__PURE__ */ b(Pt, [["render", Ft]]), Ut = {
  install: (e, t) => {
    const a = A(t != null && t.colorMode ? t.colorMode : "dark");
    let o = ae(z(x, a.value === "dark" ? F : P));
    if (t.customTheme)
      try {
        o = z(o, t.customTheme[a.value]);
      } catch (r) {
        console.error(r);
      }
    U(o);
    function s() {
      a.value === "light" ? (a.value = "dark", console.log("darkmode"), o = Object.assign(o, { ...F })) : (console.log("lightMode"), a.value = "light", o = Object.assign(o, { ...P }));
    }
    B(a, (r) => {
      U(o);
    }), e.provide("theme", o), e.provide("colorMode", a), e.config.globalProperties.$toggleTheme = (r) => s(), e.config.globalProperties.$colorMode = a;
    const l = {
      beforeMount(r, i) {
        var n;
        H(`data-id="${i.modifiers ?? ((n = i.value) == null ? void 0 : n.__scopeId)}"`, r.tagName.toLowerCase(), i.arg, r, a.value);
      },
      beforeUpdate(r, i) {
        var n;
        H(`data-id="${i.modifiers ?? ((n = i.value) == null ? void 0 : n.__scopeId)}"`, r.tagName.toLowerCase(), i.arg, r, a.value);
      }
    };
    e.directive("styleSetup", l), e.directive("row", qt), e.directive("col", Wt), e.component("CThemeProvider", Nt);
    for (const r in R)
      if (R.hasOwnProperty(r)) {
        const i = R[r];
        o[i.__name] && Rt(o, document.head, i), e.component(i.__name ?? r, i);
      }
  }
};
export {
  Ut as default
};
