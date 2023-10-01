import { defineComponent as p, useCssVars as B, inject as v, computed as y, resolveDirective as $, withDirectives as w, openBlock as u, createElementBlock as f, unref as c, renderSlot as g, createBlock as m, resolveDynamicComponent as A, withCtx as S, ref as k, watch as V, createCommentVNode as Z, nextTick as G, mergeProps as J, createElementVNode as h, createTextVNode as X, toDisplayString as Y, toRefs as ee, onMounted as te, reactive as ae } from "vue";
function T() {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let t = "";
  for (let a = 0; a < 6; a++) {
    const o = Math.floor(Math.random() * e.length);
    t += e.charAt(o);
  }
  return t;
}
const oe = ["data-id"], se = /* @__PURE__ */ p({
  __name: "CMainBar",
  setup(e) {
    var r, l;
    B((s) => ({
      "78077ec2": a.background,
      "06082152": a.color
    }));
    const t = v("theme"), a = {
      background: (r = t == null ? void 0 : t.CMainBar) == null ? void 0 : r.background,
      color: (l = t == null ? void 0 : t.CMainBar) == null ? void 0 : l.color
    }, o = T();
    return y({
      get() {
        return t.CMainBar;
      },
      set(s) {
        return s;
      }
    }), (s, i) => {
      const n = $("style-setup");
      return w((u(), f("header", {
        "data-id": c(o),
        class: "CMainBar"
      }, [
        g(s.$slots, "default", {}, void 0, !0)
      ], 8, oe)), [
        [n, s.$.type, s.$attrs, c(o)]
      ]);
    };
  }
});
const b = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [o, r] of t)
    a[o] = r;
  return a;
}, re = /* @__PURE__ */ b(se, [["__scopeId", "data-v-f40a194a"]]);
var ne = {}, le = { class: "CMain" };
function ie(e, t) {
  var a = $("style-setup");
  return w((u(), f("main", le, [
    g(e.$slots, "default", {}, void 0, !0)
  ])), [
    [a, e.$.type, e.$attrs]
  ]);
}
const ce = /* @__PURE__ */ b(ne, [["render", ie], ["__scopeId", "data-v-994719c5"]]), I = {
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
const de = (e) => ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e) === !0, K = (e, t, a) => {
  var r;
  let o = t;
  return e.rounded === void 0 || (typeof (e == null ? void 0 : e.rounded) == "boolean" && (e == null ? void 0 : e.rounded) === !0 || ((r = e == null ? void 0 : e.rounded) == null ? void 0 : r.length) === 0 ? o.borderRadius = a.radii.lg : de(e == null ? void 0 : e.rounded) ? o.borderRadius = a.radii[e == null ? void 0 : e.rounded] : o.borderRadius = e == null ? void 0 : e.rounded), o;
}, ue = {
  padding: "16px 20px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: I.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: "0px",
  lineHeight: I.lineHeights.base,
  fontWeight: I.fontWeights.bold
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
  return z(o[t], a);
}, _e = (e) => {
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
}, q = (e) => ({
  ...K(e, ue, I),
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
      const r = $("style-setup");
      return w((u(), m(A(a.as), {
        "data-id": c(t),
        class: "CIcon"
      }, {
        default: S(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const L = /* @__PURE__ */ b(fe, [["__scopeId", "data-v-dab21008"]]), he = /* @__PURE__ */ p({
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
    const r = v("theme"), l = v("colorMode"), s = T();
    let i = y({
      get() {
        return r.CButton[t];
      },
      set(d) {
        return d;
      }
    }), n = k(q({ ...o, colors: i.value, colorMode: l.value }));
    return V(() => r, (d) => {
      n.value = q({ ...o, colors: i.value, colorMode: l.value });
    }, { deep: !0 }), (d, _) => {
      const C = $("style-setup");
      return w((u(), m(A(d.as ?? "button"), {
        "data-id": c(s),
        class: "CButton",
        disabled: d.isDisabled
      }, {
        default: S(() => [
          d.leftIcon ? (u(), m(L, {
            key: 0,
            as: d.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : Z("", !0),
          g(d.$slots, "default", {}, void 0, !0),
          d.rightIcon ? (u(), m(L, {
            key: 1,
            as: d.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : Z("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [C, d.$.type, d.$attrs, c(s)]
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
    B((r) => ({
      "6f7ac7bf": a.borderRadius
    }));
    const a = {
      borderRadius: v("theme").radii.lg
    }, o = T();
    return (r, l) => {
      const s = $("style-setup");
      return w((u(), m(A("div"), {
        "data-id": c(o),
        class: "CCard"
      }, {
        default: S(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, r.$.type, r.$attrs, c(o)]
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
      let l = "";
      for (let s = 0; s < 6; s++) {
        const i = Math.floor(Math.random() * r.length);
        l += r.charAt(i);
      }
      return l;
    }
    const o = a();
    return (r, l) => {
      const s = $("style-setup");
      return w((u(), m(A("h3"), {
        "data-id": c(o),
        class: "CCardTitle"
      }, {
        default: S(() => [
          g(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, r.$.type, r.$attrs, c(o)]
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
      return w((u(), m(A("div"), { class: "CCardContent" }, {
        default: S(() => [
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
      const r = $("style-setup");
      return w((u(), f("section", {
        "data-id": c(t),
        class: "CContainer"
      }, [
        g(a.$slots, "default", {}, void 0, !0)
      ], 8, $e)), [
        [r, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const ke = /* @__PURE__ */ b(we, [["__scopeId", "data-v-ba427fa7"]]), E = k(!0), xe = async () => {
  E.value = !1, await G(), E.value = !0;
}, Ie = /* @__PURE__ */ p({
  __name: "CText",
  props: {
    as: {}
  },
  setup(e) {
    var l;
    B((s) => ({
      "3a617175": o.value.fontSize,
      "52c4977e": o.value.marginBottom
    }));
    const t = v("theme"), a = v("colorMode"), o = k({
      fontSize: "16px",
      color: (l = t == null ? void 0 : t.body) == null ? void 0 : l.color,
      marginBottom: t.spaces.sm
    });
    V(() => a.value, (s) => {
      xe();
    });
    const r = T();
    return (s, i) => {
      const n = $("style-setup");
      return c(E) ? w((u(), m(A(s.as), {
        key: 0,
        "data-id": c(r),
        class: "CText"
      }, {
        default: S(() => [
          g(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, s.$.type, s.$attrs, c(r)]
      ]) : Z("", !0);
    };
  }
});
const Q = /* @__PURE__ */ b(Ie, [["__scopeId", "data-v-587f514f"]]), Ae = {
  padding: "10px 16px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: I.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: I.radii.xs,
  lineHeight: I.lineHeights.base,
  fontWeight: I.fontWeights.bold
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
  ...K(e, Ae, I),
  ...Me(e)
}), Se = ["width", "height", "fill", "transform"], Ze = { key: 0 }, Te = /* @__PURE__ */ h("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1), Be = [
  Te
], Ve = { key: 1 }, ze = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), De = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), je = [
  ze,
  De
], Le = { key: 2 }, Oe = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), Re = [
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
    const t = e, a = v("weight", "regular"), o = v("size", "1em"), r = v("color", "currentColor"), l = v("mirrored", !1), s = y(() => t.weight ?? a), i = y(() => t.size ?? o), n = y(() => t.color ?? r), d = y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : l ? "scale(-1, 1)" : void 0);
    return (_, C) => (u(), f("svg", J({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: n.value,
      transform: d.value
    }, _.$attrs), [
      g(_.$slots, "default"),
      s.value === "bold" ? (u(), f("g", Ze, Be)) : s.value === "duotone" ? (u(), f("g", Ve, je)) : s.value === "fill" ? (u(), f("g", Le, Re)) : s.value === "light" ? (u(), f("g", Ee, We)) : s.value === "regular" ? (u(), f("g", Pe, Ne)) : s.value === "thin" ? (u(), f("g", He, Ge)) : Z("", !0)
    ], 16, Se));
  }
}), Qe = ["width", "height", "fill", "transform"], Xe = { key: 0 }, Ye = /* @__PURE__ */ h("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }, null, -1), et = [
  Ye
], tt = { key: 1 }, at = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), ot = /* @__PURE__ */ h("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }, null, -1), st = [
  at,
  ot
], rt = { key: 2 }, nt = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }, null, -1), lt = [
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
    const t = e, a = v("weight", "regular"), o = v("size", "1em"), r = v("color", "currentColor"), l = v("mirrored", !1), s = y(() => t.weight ?? a), i = y(() => t.size ?? o), n = y(() => t.color ?? r), d = y(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : l ? "scale(-1, 1)" : void 0);
    return (_, C) => (u(), f("svg", J({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: n.value,
      transform: d.value
    }, _.$attrs), [
      g(_.$slots, "default"),
      s.value === "bold" ? (u(), f("g", Xe, et)) : s.value === "duotone" ? (u(), f("g", tt, st)) : s.value === "fill" ? (u(), f("g", rt, lt)) : s.value === "light" ? (u(), f("g", it, dt)) : s.value === "regular" ? (u(), f("g", ut, ft)) : s.value === "thin" ? (u(), f("g", ht, gt)) : Z("", !0)
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
    B((_) => ({
      c33effc8: c(n).bg,
      "7fef982c": c(n).color,
      "3f29cef5": c(n).borderRadius
    }));
    const r = v("theme"), l = v("colorMode"), s = T();
    let i = y({
      get() {
        return r.CAlert[t];
      },
      set(_) {
        return _;
      }
    }), n = k(W({ ...o, colors: i.value, colorMode: l.value }));
    V(() => r, (_) => {
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
      const M = $("style-setup");
      return w((u(), m(A("div"), {
        "data-id": c(s),
        class: "CAlert"
      }, {
        default: S(() => [
          c(d) ? (u(), m(L, {
            key: 0,
            as: c(d),
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : Z("", !0),
          h("div", null, [
            _.title ? (u(), m(Q, {
              key: 0,
              as: "h4"
            }, {
              default: S(() => [
                X(Y(_.title), 1)
              ]),
              _: 1
            })) : Z("", !0),
            g(_.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [M, _.$.type, _.$attrs, c(s)]
      ]);
    };
  }
});
const bt = /* @__PURE__ */ b(yt, [["__scopeId", "data-v-b23a0a48"]]);
function Ct(e) {
  let t = k();
  function a(l) {
    if (!e.rules)
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
  function o(l, s) {
    if (l === s)
      return !0;
    if (l instanceof Date && s instanceof Date && l.getTime() !== s.getTime() || l !== Object(l) || s !== Object(s))
      return !1;
    const i = Object.keys(l);
    return i.length !== Object.keys(s).length ? !1 : i.every((n) => o(l[n], s[n]));
  }
  const { rules: r } = ee(e);
  return V(() => r, (l, s) => {
    o(l, s) || a();
  }, { deep: !0 }), te(() => {
    a();
  }), { validate: a, error: t };
}
const $t = { class: "form-box" }, wt = /* @__PURE__ */ h("input", {
  class: "form-input",
  type: "text",
  required: "",
  minlength: "6",
  placeholder: "tester"
}, null, -1), kt = /* @__PURE__ */ h("label", {
  for: "",
  class: "label"
}, "tester ", -1), xt = /* @__PURE__ */ h("span", { class: "error" }, "Field Required", -1), It = [
  wt,
  kt,
  xt
], At = /* @__PURE__ */ p({
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
    const a = e, { error: o, validate: r } = Ct(a);
    let l = k(a.modelValue);
    return V(l, (s) => {
      t("input", s), a.rules && r(s);
    }), (s, i) => (u(), f("div", $t, It));
  }
});
const Mt = /* @__PURE__ */ p({
  __name: "CForm",
  setup(e, { expose: t }) {
    const a = k(), o = k(!1), r = y({
      get() {
        var s, i, n, d;
        if (o.value) {
          const _ = [], C = (s = a.value) == null ? void 0 : s.elements;
          for (let M = 0; M < C.length; M++) {
            const x = C[M];
            (i = x == null ? void 0 : x.__vue__) != null && i.isInvalid && ((n = x.__vue__) == null ? void 0 : n.isInvalid) === !0 && _.push(!0), !x.__vue__ == null && ((d = x.validity) == null ? void 0 : d.valid) !== !0 && _.push(!0);
          }
          return o.value = !1, _.length === 0;
        }
        return o.value = !1, !1;
      },
      set(s) {
        return s;
      }
    });
    async function l() {
      return o.value = !0, await G(), r.value;
    }
    return t({ validation: l }), (s, i) => (u(), f("form", {
      ref_key: "form",
      ref: a
    }, [
      g(s.$slots, "default")
    ], 512));
  }
}), St = /* @__PURE__ */ p({
  __name: "CFlex",
  props: {
    as: {}
  },
  setup(e) {
    const t = T();
    return (a, o) => {
      const r = $("style-setup");
      return w((u(), m(A(a.as), {
        "data-id": c(t),
        class: "CFlex"
      }, {
        default: S(() => [
          g(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, a.$.type, a.$attrs, c(t)]
      ]);
    };
  }
});
const Zt = /* @__PURE__ */ b(St, [["__scopeId", "data-v-fb2850e5"]]), Tt = ["data-id"], Bt = ["checked"], Vt = { class: "CToggle__switch" }, zt = {
  key: 0,
  class: "CToggle__switch__slider",
  "data-switch": "true"
}, Dt = {
  key: 1,
  class: "CToggle__switch__slider",
  "data-switch": "false"
}, jt = /* @__PURE__ */ p({
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
    B((n) => ({
      "64fe3614": i.value()
    }));
    let o = k(a.modelValue);
    const r = T();
    function l() {
      o.value = !o.value, t("update:modelValue", o.value);
    }
    function s(n) {
      t("update:modelValue", !n.target.checked);
    }
    const i = k(() => {
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
        "data-id": c(r),
        class: "CToggle",
        onClick: l
      }, [
        h("input", {
          type: "checkbox",
          class: "CToggle__input--hidden",
          checked: c(o),
          onInput: s
        }, null, 40, Bt),
        h("div", Vt, [
          c(o) ? (u(), f("span", zt, [
            n.trueIcon ? (u(), m(A(n.trueIcon), { key: 0 })) : Z("", !0),
            g(n.$slots, "trueIcon", {}, void 0, !0)
          ])) : (u(), f("span", Dt, [
            n.trueIcon ? (u(), m(A(n.falseIcon), { key: 0 })) : Z("", !0),
            g(n.$slots, "falseIcon", {}, void 0, !0)
          ]))
        ])
      ], 8, Tt)), [
        [_, n.$.type, n.$attrs, c(r)]
      ]);
    };
  }
});
const Lt = /* @__PURE__ */ b(jt, [["__scopeId", "data-v-33d2dfa1"]]), R = { CMainBar: re, CMain: ce, CButton: ve, CCard: pe, CContainer: ke, CCardTitle: ye, CCardContent: Ce, CText: Q, CAlert: bt, CIcon: L, CInput: At, CForm: Mt, CFlex: Zt, CToggle: Lt }, P = {
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
    const r = Rt(a);
    return r in t.style ? [r, o] : !1;
  }).filter(Boolean);
}
async function Ot(e) {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const a = t.sheet;
  for (let o = 0; o < e.length; o++) {
    let r = 1, l = e[o], s = l[0], i = "";
    Array.isArray(l[1][0]) && (l = l[1], r = 0);
    for (let n = l.length; r < n; r++) {
      const d = l[r];
      i += `${d[0]}: ${d[1]}${d[2] ? " !important" : ""};
`;
    }
    a.insertRule(
      `${s}{${i}}`,
      a.cssRules.length
    );
  }
}
function Rt(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
async function H(e, t, a, o, r) {
  let l = await N(a, o);
  r === "dark" && a.dark && (l = [...l, ...await N(a.dark, o)]), await Ot([[`${t}[${e}]`, l]]), Object.entries(a).forEach(([s, i]) => {
    (o.style.hasOwnProperty(s) && !(s in o) || s === "dark") && o.removeAttribute(s);
  });
}
function U(e) {
  const t = (a, o, r) => {
    typeof r == "string" ? document.documentElement.style.setProperty(
      `--${a}-${o}`,
      r
    ) : typeof r == "object" && Object.entries(r).forEach(([l, s]) => {
      l.startsWith("_") ? t(
        a,
        `${o}${l}`,
        s
      ) : t(
        `${a}-${o}`,
        l,
        s
      );
    });
  };
  Object.entries(e).forEach(([a, o]) => {
    Object.entries(o).forEach(([r, l]) => {
      t(a, r, l);
    });
  });
}
function Et(e, t, a) {
  const o = document.createElement("style");
  o.setAttribute("type", "text/css");
  const r = a.__scopeId ? `[${a.__scopeId}]` : "", l = a.__name, s = (i, n) => {
    const d = [];
    return Object.entries(n).forEach(([_, C]) => {
      const M = _.startsWith("_") ? `${i}${_}` : `${i}-${_}`;
      if (typeof C == "object" && !Array.isArray(C) && !_.startsWith("_")) {
        const x = s(M, C);
        d.push(...x);
      } else if (_.startsWith("_")) {
        const x = _.split("-").find((D) => D.indexOf("_") !== -1);
        d.push(`.${l}${r}${x.replace("_", ":")} { ${Object.entries(C).map(([D]) => `${D}:var(--${M}-${D})`).join(";")}}`);
      } else
        d.push(`.${l}${r} { ${_}:var(--${M}) }`);
    }), d;
  };
  Object.entries(e[a.__name]).forEach(([i, n]) => {
    const d = s(a.__name, { [i]: n });
    qt(d).forEach((_) => {
      o.textContent += `${_} `;
    });
  }), t.appendChild(o);
}
function qt(e) {
  const t = {};
  return e.forEach((a) => {
    const o = a.match(/(.+?)\s*{([^}]+)}/);
    if (o) {
      const [r, l] = o.slice(1);
      t[r] || (t[r] = []), t[r].push(l.trim());
    }
  }), Object.entries(t).map(([a, o]) => {
    const r = o.join("; ");
    return `${a} { ${r} }`;
  });
}
const Wt = {
  beforeMount(e, t) {
    switch (t == null || t.value, t.arg && e.classList.add(t.arg), t.arg) {
      case "nowrap":
        e.classList.add("nowrap");
    }
    e.classList.add("row");
  }
}, Pt = {
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
var Ft = {};
function Nt(e, t) {
  return g(e.$slots, "default");
}
const Ht = /* @__PURE__ */ b(Ft, [["render", Nt]]), Gt = {
  install: (e, t) => {
    const a = k(t != null && t.colorMode ? t.colorMode : "dark");
    let o = ae(z(I, a.value === "dark" ? F : P));
    if (t.customTheme)
      try {
        o = z(o, t.customTheme[a.value]);
      } catch (s) {
        console.error(s);
      }
    U(o);
    function r() {
      a.value === "light" ? (a.value = "dark", console.log("darkmode"), o = Object.assign(o, { ...F })) : (console.log("lightMode"), a.value = "light", o = Object.assign(o, { ...P }));
    }
    V(a, (s) => {
      U(o);
    }), e.provide("theme", o), e.provide("colorMode", a), e.config.globalProperties.$toggleTheme = (s) => r(), e.config.globalProperties.$colorMode = a;
    const l = {
      beforeMount(s, i) {
        var n;
        H(`data-id="${i.modifiers ?? ((n = i.value) == null ? void 0 : n.__scopeId)}"`, s.tagName.toLowerCase(), i.arg, s, a.value);
      },
      beforeUpdate(s, i) {
        var n;
        H(`data-id="${i.modifiers ?? ((n = i.value) == null ? void 0 : n.__scopeId)}"`, s.tagName.toLowerCase(), i.arg, s, a.value);
      }
    };
    e.directive("styleSetup", l), e.directive("row", Wt), e.directive("col", Pt), e.component("CThemeProvider", Ht);
    for (const s in R)
      if (R.hasOwnProperty(s)) {
        const i = R[s];
        o[i.__name] && Et(o, document.head, i), e.component(i.__name ?? s, i);
      }
  }
};
export {
  Gt as default
};
