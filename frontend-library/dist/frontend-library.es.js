import { defineComponent as b, useCssVars as L, inject as v, computed as I, resolveDirective as w, withDirectives as k, openBlock as _, createElementBlock as f, unref as c, renderSlot as m, createBlock as $, resolveDynamicComponent as B, withCtx as V, ref as C, watch as z, createCommentVNode as A, nextTick as ne, mergeProps as se, createElementVNode as h, createTextVNode as de, toDisplayString as ue, toRefs as re, onMounted as _e, reactive as fe } from "vue";
function Z() {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let t = "";
  for (let o = 0; o < 6; o++) {
    const a = Math.floor(Math.random() * e.length);
    t += e.charAt(a);
  }
  return t;
}
const ve = ["data-id"], he = /* @__PURE__ */ b({
  __name: "CMainBar",
  setup(e) {
    var s, l;
    L((n) => ({
      "78077ec2": o.background,
      "06082152": o.color
    }));
    const t = v("theme"), o = {
      background: (s = t == null ? void 0 : t.CMainBar) == null ? void 0 : s.background,
      color: (l = t == null ? void 0 : t.CMainBar) == null ? void 0 : l.color
    }, a = Z();
    return I({
      get() {
        return t.CMainBar;
      },
      set(n) {
        return n;
      }
    }), (n, i) => {
      const r = w("style-setup");
      return k((_(), f("header", {
        "data-id": c(a),
        class: "CMainBar"
      }, [
        m(n.$slots, "default", {}, void 0, !0)
      ], 8, ve)), [
        [r, n.$.type, n.$attrs, c(a)]
      ]);
    };
  }
});
const x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, s] of t)
    o[a] = s;
  return o;
}, ge = /* @__PURE__ */ x(he, [["__scopeId", "data-v-f40a194a"]]);
var pe = {}, me = { class: "CMain" };
function ye(e, t) {
  var o = w("style-setup");
  return k((_(), f("main", me, [
    m(e.$slots, "default", {}, void 0, !0)
  ])), [
    [o, e.$.type, e.$attrs]
  ]);
}
const be = /* @__PURE__ */ x(pe, [["render", ye], ["__scopeId", "data-v-994719c5"]]), T = {
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
function E(e, t) {
  const o = { ...e };
  for (const a in t)
    t.hasOwnProperty(a) && (t[a] && t[a].constructor === Object ? o[a] && o[a].constructor === Object ? o[a] = E(o[a], t[a]) : o[a] = { ...t[a] } : o[a] = t[a]);
  return o;
}
const Ce = (e) => ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(e) === !0, le = (e, t, o) => {
  var s;
  let a = t;
  return e.rounded === void 0 || (typeof (e == null ? void 0 : e.rounded) == "boolean" && (e == null ? void 0 : e.rounded) === !0 || ((s = e == null ? void 0 : e.rounded) == null ? void 0 : s.length) === 0 ? a.borderRadius = o.radii.lg : Ce(e == null ? void 0 : e.rounded) ? a.borderRadius = o.radii[e == null ? void 0 : e.rounded] : a.borderRadius = e == null ? void 0 : e.rounded), a;
}, $e = {
  padding: "16px 20px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: T.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: "0px",
  lineHeight: T.lineHeights.base,
  fontWeight: T.fontWeights.bold
}, P = ({ colors: e, colorMode: t, additionalStyling: o }) => {
  let a = {
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
  return E(a[t], o);
}, we = (e) => {
  switch (e.variant) {
    case "primary":
      return P(e);
    case "secondary":
      return P(e);
    case "unstyled":
      return P(e);
    default:
      return P(e);
  }
}, G = (e) => ({
  ...le(e, $e, T),
  ...we(e)
}), ke = /* @__PURE__ */ b({
  __name: "CIcon",
  props: {
    as: {},
    space: {}
  },
  setup(e) {
    const t = Z();
    return (o, a) => {
      const s = w("style-setup");
      return k((_(), $(B(o.as), {
        "data-id": c(t),
        class: "CIcon"
      }, {
        default: V(() => [
          m(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, o.$.type, o.$attrs, c(t)]
      ]);
    };
  }
});
const F = /* @__PURE__ */ x(ke, [["__scopeId", "data-v-dab21008"]]), xe = /* @__PURE__ */ b({
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
    const { variant: t = "primary", as: o = "button", ...a } = e;
    L((d) => ({
      "7ee69889": c(r).lineHeight,
      b20a46fa: c(r).padding,
      "4e24f7a2": c(r).letterSpacing,
      "18ff1a75": c(r).height,
      "21530efc": c(r).margin,
      "013c3c6c": c(r).textAlign,
      "198cd2ac": c(r).borderRadius,
      "20140ebe": c(r).fontSize,
      "5c7a42b8": c(r).width,
      "2226c490": c(r).maxWidth,
      "71deb5f5": c(r).fontWeight,
      "222b6c93": c(r).bg,
      "5b634455": c(r).color,
      "36b71388": c(r)._hover.bg,
      "42dd3d40": c(r)._hover.color
    })), console.log(o);
    const s = v("theme"), l = v("colorMode"), n = Z();
    let i = I({
      get() {
        return s.CButton[t];
      },
      set(d) {
        return d;
      }
    }), r = C(G({ ...a, colors: i.value, colorMode: l.value }));
    return z(() => s, (d) => {
      r.value = G({ ...a, colors: i.value, colorMode: l.value });
    }, { deep: !0 }), (d, u) => {
      const y = w("style-setup");
      return k((_(), $(B(d.as ?? "button"), {
        "data-id": c(n),
        class: "CButton",
        disabled: d.isDisabled
      }, {
        default: V(() => [
          d.leftIcon ? (_(), $(F, {
            key: 0,
            as: d.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : A("", !0),
          m(d.$slots, "default", {}, void 0, !0),
          d.rightIcon ? (_(), $(F, {
            key: 1,
            as: d.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : A("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [y, d.$.type, d.$attrs, c(n)]
      ]);
    };
  }
});
const Ie = /* @__PURE__ */ x(xe, [["__scopeId", "data-v-ad27d1d9"]]), Me = /* @__PURE__ */ b({
  __name: "CCard",
  props: {
    as: {}
  },
  setup(e) {
    L((s) => ({
      "6f7ac7bf": o.borderRadius
    }));
    const o = {
      borderRadius: v("theme").radii.lg
    }, a = Z();
    return (s, l) => {
      const n = w("style-setup");
      return k((_(), $(B("div"), {
        "data-id": c(a),
        class: "CCard"
      }, {
        default: V(() => [
          m(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, s.$.type, s.$attrs, c(a)]
      ]);
    };
  }
});
const Ae = /* @__PURE__ */ x(Me, [["__scopeId", "data-v-d073c29f"]]), Se = /* @__PURE__ */ b({
  __name: "CCardTitle",
  props: {
    as: {}
  },
  setup(e) {
    L((s) => ({
      "64e4ddeb": t.fontWeight,
      19608798: t.fontSize
    })), v("theme");
    const t = {
      fontWeight: "900",
      fontSize: "18px"
    };
    function o() {
      const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let l = "";
      for (let n = 0; n < 6; n++) {
        const i = Math.floor(Math.random() * s.length);
        l += s.charAt(i);
      }
      return l;
    }
    const a = o();
    return (s, l) => {
      const n = w("style-setup");
      return k((_(), $(B("h3"), {
        "data-id": c(a),
        class: "CCardTitle"
      }, {
        default: V(() => [
          m(s.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, s.$.type, s.$attrs, c(a)]
      ]);
    };
  }
});
const De = /* @__PURE__ */ x(Se, [["__scopeId", "data-v-27df9289"]]), Ze = /* @__PURE__ */ b({
  __name: "CCardContent",
  props: {
    as: {}
  },
  setup(e) {
    return v("theme"), (t, o) => {
      const a = w("style-setup");
      return k((_(), $(B("div"), { class: "CCardContent" }, {
        default: V(() => [
          m(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })), [
        [a, t.$.type, t.$attrs]
      ]);
    };
  }
});
const Te = /* @__PURE__ */ x(Ze, [["__scopeId", "data-v-0f0761fc"]]), Be = ["data-id"], Ve = /* @__PURE__ */ b({
  __name: "CContainer",
  setup(e) {
    const t = Z();
    return (o, a) => {
      const s = w("style-setup");
      return k((_(), f("section", {
        "data-id": c(t),
        class: "CContainer"
      }, [
        m(o.$slots, "default", {}, void 0, !0)
      ], 8, Be)), [
        [s, o.$.type, o.$attrs, c(t)]
      ]);
    };
  }
});
const Re = /* @__PURE__ */ x(Ve, [["__scopeId", "data-v-ba427fa7"]]), W = C(!0), U = async () => {
  W.value = !1, await ne(), W.value = !0;
}, ze = /* @__PURE__ */ b({
  __name: "CText",
  props: {
    as: {}
  },
  setup(e) {
    var l;
    L((n) => ({
      "3a617175": a.value.fontSize,
      "52c4977e": a.value.marginBottom
    }));
    const t = v("theme"), o = v("colorMode"), a = C({
      fontSize: "16px",
      color: (l = t == null ? void 0 : t.body) == null ? void 0 : l.color,
      marginBottom: t.spaces.sm
    });
    z(() => o.value, (n) => {
      U();
    });
    const s = Z();
    return (n, i) => {
      const r = w("style-setup");
      return c(W) ? k((_(), $(B(n.as), {
        key: 0,
        "data-id": c(s),
        class: "CText"
      }, {
        default: V(() => [
          m(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, n.$.type, n.$attrs, c(s)]
      ]) : A("", !0);
    };
  }
});
const ie = /* @__PURE__ */ x(ze, [["__scopeId", "data-v-587f514f"]]), Le = {
  padding: "10px 16px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: T.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: T.radii.xs,
  lineHeight: T.lineHeights.base,
  fontWeight: T.fontWeights.bold
}, N = ({ colors: e, colorMode: t, additionalStyling: o }) => {
  let a = {
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
  return E(a[t], o);
}, je = (e) => {
  switch (e.variant) {
    case "information":
      return N(e);
    case "warning":
      return N(e);
    default:
      return N(e);
  }
}, J = (e) => ({
  ...le(e, Le, T),
  ...je(e)
}), Oe = ["width", "height", "fill", "transform"], qe = { key: 0 }, Ee = /* @__PURE__ */ h("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }, null, -1), We = [
  Ee
], Pe = { key: 1 }, Fe = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), Ne = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), He = [
  Fe,
  Ne
], Ue = { key: 2 }, Xe = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }, null, -1), Ye = [
  Xe
], Ge = { key: 3 }, Je = /* @__PURE__ */ h("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), Ke = [
  Je
], Qe = { key: 4 }, et = /* @__PURE__ */ h("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }, null, -1), tt = [
  et
], at = { key: 5 }, ot = /* @__PURE__ */ h("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), nt = [
  ot
], st = {
  name: "PhCheckCircle"
}, rt = /* @__PURE__ */ b({
  ...st,
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
    const t = e, o = v("weight", "regular"), a = v("size", "1em"), s = v("color", "currentColor"), l = v("mirrored", !1), n = I(() => t.weight ?? o), i = I(() => t.size ?? a), r = I(() => t.color ?? s), d = I(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : l ? "scale(-1, 1)" : void 0);
    return (u, y) => (_(), f("svg", se({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: r.value,
      transform: d.value
    }, u.$attrs), [
      m(u.$slots, "default"),
      n.value === "bold" ? (_(), f("g", qe, We)) : n.value === "duotone" ? (_(), f("g", Pe, He)) : n.value === "fill" ? (_(), f("g", Ue, Ye)) : n.value === "light" ? (_(), f("g", Ge, Ke)) : n.value === "regular" ? (_(), f("g", Qe, tt)) : n.value === "thin" ? (_(), f("g", at, nt)) : A("", !0)
    ], 16, Oe));
  }
}), lt = ["width", "height", "fill", "transform"], it = { key: 0 }, ct = /* @__PURE__ */ h("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }, null, -1), dt = [
  ct
], ut = { key: 1 }, _t = /* @__PURE__ */ h("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), ft = /* @__PURE__ */ h("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }, null, -1), vt = [
  _t,
  ft
], ht = { key: 2 }, gt = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }, null, -1), pt = [
  gt
], mt = { key: 3 }, yt = /* @__PURE__ */ h("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }, null, -1), bt = [
  yt
], Ct = { key: 4 }, $t = /* @__PURE__ */ h("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }, null, -1), wt = [
  $t
], kt = { key: 5 }, xt = /* @__PURE__ */ h("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }, null, -1), It = [
  xt
], Mt = {
  name: "PhInfo"
}, At = /* @__PURE__ */ b({
  ...Mt,
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
    const t = e, o = v("weight", "regular"), a = v("size", "1em"), s = v("color", "currentColor"), l = v("mirrored", !1), n = I(() => t.weight ?? o), i = I(() => t.size ?? a), r = I(() => t.color ?? s), d = I(() => t.mirrored !== void 0 ? t.mirrored ? "scale(-1, 1)" : void 0 : l ? "scale(-1, 1)" : void 0);
    return (u, y) => (_(), f("svg", se({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: r.value,
      transform: d.value
    }, u.$attrs), [
      m(u.$slots, "default"),
      n.value === "bold" ? (_(), f("g", it, dt)) : n.value === "duotone" ? (_(), f("g", ut, vt)) : n.value === "fill" ? (_(), f("g", ht, pt)) : n.value === "light" ? (_(), f("g", mt, bt)) : n.value === "regular" ? (_(), f("g", Ct, wt)) : n.value === "thin" ? (_(), f("g", kt, It)) : A("", !0)
    ], 16, lt));
  }
}), St = /* @__PURE__ */ b({
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
    const { variant: t = "information", as: o = "div", ...a } = e;
    L((u) => ({
      c33effc8: c(r).bg,
      "7fef982c": c(r).color,
      "3f29cef5": c(r).borderRadius
    }));
    const s = v("theme"), l = v("colorMode"), n = Z();
    let i = I({
      get() {
        return s.CAlert[t];
      },
      set(u) {
        return u;
      }
    }), r = C(J({ ...a, colors: i.value, colorMode: l.value }));
    z(() => s, (u) => {
      r.value = J({ ...a, colors: i.value, colorMode: l.value });
    }, { deep: !0 });
    let d = I({
      get() {
        switch (t) {
          case "information":
            return At;
          case "success":
            return rt;
        }
      },
      set(u) {
        return u;
      }
    });
    return (u, y) => {
      const S = w("style-setup");
      return k((_(), $(B("div"), {
        "data-id": c(n),
        class: "CAlert"
      }, {
        default: V(() => [
          c(d) ? (_(), $(F, {
            key: 0,
            as: c(d),
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : A("", !0),
          h("div", null, [
            u.title ? (_(), $(ie, {
              key: 0,
              as: "h4"
            }, {
              default: V(() => [
                de(ue(u.title), 1)
              ]),
              _: 1
            })) : A("", !0),
            m(u.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [S, u.$.type, u.$attrs, c(n)]
      ]);
    };
  }
});
const Dt = /* @__PURE__ */ x(St, [["__scopeId", "data-v-b23a0a48"]]);
function Zt(e) {
  let t = C();
  function o(l) {
    if (console.log("VALIDATE"), !e.rules)
      return;
    const i = e.rules.map((r) => {
      const d = r(l);
      if (d || d !== !0)
        return d;
    }).find((r) => r !== !0);
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
  function a(l, n) {
    if (l === n)
      return !0;
    if (l instanceof Date && n instanceof Date && l.getTime() !== n.getTime() || l !== Object(l) || n !== Object(n))
      return !1;
    const i = Object.keys(l);
    return i.length !== Object.keys(n).length ? !1 : i.every((r) => a(l[r], n[r]));
  }
  const { rules: s } = re(e);
  return z(() => s, (l, n) => {
    a(l, n) || o();
  }, { deep: !0 }), _e(() => {
    o();
  }), { validate: o, error: t };
}
const Tt = ["data-id"], Bt = ["value", "isInvalid"], Vt = ["for"], Rt = {
  key: 0,
  class: "error"
}, zt = /* @__PURE__ */ b({
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
    const o = e, { error: a, validate: s } = Zt(o);
    let { modelValue: l } = re(o);
    z(l, (d) => {
      t("input", d), o.rules && s(d);
    });
    const n = (d) => {
      t("update:modelValue", d.target.value);
    };
    v("theme");
    const i = v("colorMode");
    z(() => i.value, (d) => {
      U();
    });
    const r = Z();
    return (d, u) => {
      const y = w("style-setup");
      return c(W) ? k((_(), f("div", {
        key: 0,
        class: "form-box",
        "data-id": c(r)
      }, [
        h("input", {
          class: "form-input",
          type: "text",
          value: c(l),
          onInput: n,
          required: "",
          isInvalid: c(a) === !0 || typeof c(a) == "string",
          placeholder: "tester"
        }, null, 40, Bt),
        h("label", {
          for: d.id,
          class: "label"
        }, "tester ", 8, Vt),
        c(a) && typeof c(a) == "string" ? (_(), f("span", Rt, "Field Required")) : A("", !0)
      ], 8, Tt)), [
        [y, d.$.type, d.$attrs, c(r)]
      ]) : A("", !0);
    };
  }
});
const Lt = /* @__PURE__ */ b({
  __name: "CForm",
  setup(e, { expose: t }) {
    const o = C(), a = C(!1), s = I({
      get() {
        var n, i, r, d;
        if (a.value) {
          const u = [], y = (n = o.value) == null ? void 0 : n.elements;
          for (let S = 0; S < y.length; S++) {
            const M = y[S];
            (i = M == null ? void 0 : M.__vue__) != null && i.isInvalid && ((r = M.__vue__) == null ? void 0 : r.isInvalid) === !0 && u.push(!0), !M.__vue__ == null && ((d = M.validity) == null ? void 0 : d.valid) !== !0 && u.push(!0);
          }
          return a.value = !1, u.length === 0;
        }
        return a.value = !1, !1;
      },
      set(n) {
        return n;
      }
    });
    async function l() {
      return a.value = !0, await ne(), s.value;
    }
    return t({ validation: l }), (n, i) => (_(), f("form", {
      ref_key: "form",
      ref: o
    }, [
      m(n.$slots, "default")
    ], 512));
  }
}), jt = /* @__PURE__ */ b({
  __name: "CFlex",
  props: {
    as: {}
  },
  setup(e) {
    const t = Z();
    return (o, a) => {
      const s = w("style-setup");
      return k((_(), $(B(o.as), {
        "data-id": c(t),
        class: "CFlex"
      }, {
        default: V(() => [
          m(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [s, o.$.type, o.$attrs, c(t)]
      ]);
    };
  }
});
const Ot = /* @__PURE__ */ x(jt, [["__scopeId", "data-v-fb2850e5"]]), qt = ["data-id"], Et = ["checked"], Wt = { class: "CToggle__switch" }, Pt = {
  key: 0,
  class: "CToggle__switch__slider",
  "data-switch": "true"
}, Ft = {
  key: 1,
  class: "CToggle__switch__slider",
  "data-switch": "false"
}, Nt = /* @__PURE__ */ b({
  __name: "CToggle",
  props: {
    modelValue: { type: Boolean },
    size: {},
    trueIcon: {},
    falseIcon: { type: Function }
  },
  emits: { "update:modelValue": Boolean },
  setup(e, { emit: t }) {
    const o = e;
    L((r) => ({
      "64fe3614": i.value()
    }));
    let a = C(o.modelValue);
    const s = Z();
    function l() {
      a.value = !a.value, t("update:modelValue", a.value);
    }
    function n(r) {
      t("update:modelValue", !r.target.checked);
    }
    const i = C(() => {
      switch (o.size) {
        case "xl":
          return "75px";
        case "lg":
          return "70px";
        case "md":
          return "60px";
        default:
          return o.size ?? "50px";
      }
    });
    return (r, d) => {
      const u = w("style-setup");
      return k((_(), f("div", {
        "data-id": c(s),
        class: "CToggle",
        onClick: l
      }, [
        h("input", {
          type: "checkbox",
          class: "CToggle__input--hidden",
          checked: c(a),
          onInput: n
        }, null, 40, Et),
        h("div", Wt, [
          c(a) ? (_(), f("span", Pt, [
            r.trueIcon ? (_(), $(B(r.trueIcon), { key: 0 })) : A("", !0),
            m(r.$slots, "trueIcon", {}, void 0, !0)
          ])) : (_(), f("span", Ft, [
            r.trueIcon ? (_(), $(B(r.falseIcon), { key: 0 })) : A("", !0),
            m(r.$slots, "falseIcon", {}, void 0, !0)
          ]))
        ])
      ], 8, qt)), [
        [u, r.$.type, r.$attrs, c(s)]
      ]);
    };
  }
});
const Ht = /* @__PURE__ */ x(Nt, [["__scopeId", "data-v-33d2dfa1"]]), Ut = ["data-id"], K = 4e3, Xt = /* @__PURE__ */ b({
  __name: "CDraw",
  props: {
    currentColor: {},
    lineWidth: {},
    format: {}
  },
  setup(e, { expose: t }) {
    var Y;
    const o = e;
    L((p) => ({
      "3eeaf512": l.value.border,
      "7b5ff314": l.value.background,
      f07a8f78: l.value.borderRadius
    }));
    const a = v("theme"), s = v("colorMode");
    z(() => s.value, (p) => {
      U();
    });
    const l = C({
      border: a == null ? void 0 : a.CDraw.border,
      background: (Y = a == null ? void 0 : a.CDraw) == null ? void 0 : Y.background,
      borderRadius: a.radii.lg
    }), n = Z(), i = C(null), r = C(null), d = C(!1), u = C([]), y = (p) => {
      const g = i.value, D = g.getBoundingClientRect();
      g.width / g.height, r.value = g.getContext("2d"), r.value.strokeStyle = o.currentColor, r.value.lineWidth = o.lineWidth, r.value.lineCap = "round", r.lineJoin = "round", r.value.imageSmoothingEnabled = !0;
      const O = (p.clientX - D.left) * (g.width / D.width), q = (p.clientY - D.top) * (g.height / D.height);
      r.value.beginPath(), r.value.moveTo(O, q), d.value = !0, u.value.push({ x: O, y: q });
    }, S = (p) => {
      if (!d.value)
        return;
      const g = i.value, D = g.getBoundingClientRect();
      g.width / g.height;
      const O = (p.clientX - D.left) * (g.width / D.width), q = (p.clientY - D.top) * (g.height / D.height), R = u.value[u.value.length - 1];
      r.value.bezierCurveTo(
        R.x,
        R.y,
        R.x + (O - R.x) / 2,
        R.y + (q - R.y) / 2,
        (O + R.x) / 2,
        (q + R.y) / 2
      ), r.value.stroke(), u.value.push({ x: O, y: q });
    }, M = () => {
      d.value = !1, u.value = [];
    }, j = () => {
      const g = i.value.toDataURL(o.format);
      X() ? console.log(g) : console.log("Drawing is too small. Minimum size required:", K);
    }, ce = () => {
      const p = i.value;
      r.value.clearRect(0, 0, p.width, p.height), u.value = [];
    }, X = () => {
      const p = i.value, g = p.toDataURL("image/png").length;
      return console.log(p, g), g >= K;
    };
    return t({ submitDrawing: j, isDrawingValid: X, clearCanvas: ce }), (p, g) => {
      const D = w("style-setup");
      return c(W) ? k((_(), f("canvas", {
        key: 0,
        ref_key: "canvas",
        ref: i,
        "data-id": c(n),
        onMousedown: y,
        onMousemove: S,
        onMouseup: M,
        class: "CDraw"
      }, null, 40, Ut)), [
        [D, p.$.type, p.$attrs, c(n)]
      ]) : A("", !0);
    };
  }
});
const Yt = /* @__PURE__ */ x(Xt, [["__scopeId", "data-v-a87efbdb"]]), H = { CMainBar: ge, CMain: be, CButton: Ie, CCard: Ae, CContainer: Re, CCardTitle: De, CCardContent: Te, CText: ie, CAlert: Dt, CIcon: F, CInput: zt, CForm: Lt, CFlex: Ot, CToggle: Ht, CDraw: Yt }, Q = {
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
  CDraw: {
    border: "solid 1pd #000000",
    background: "#cdcdcd"
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
}, ee = {
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
  CDraw: {
    border: "solid 1pd #000000",
    background: "#cdcdcd"
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
async function te(e, t) {
  return Object.entries(e).map(([o, a]) => {
    const s = Jt(o);
    return s in t.style ? [s, a] : !1;
  }).filter(Boolean);
}
async function Gt(e) {
  const t = document.createElement("style");
  document.head.appendChild(t);
  const o = t.sheet;
  for (let a = 0; a < e.length; a++) {
    let s = 1, l = e[a], n = l[0], i = "";
    Array.isArray(l[1][0]) && (l = l[1], s = 0);
    for (let r = l.length; s < r; s++) {
      const d = l[s];
      i += `${d[0]}: ${d[1]}${d[2] ? " !important" : ""};
`;
    }
    o.insertRule(
      `${n}{${i}}`,
      o.cssRules.length
    );
  }
}
function Jt(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
async function ae(e, t, o, a, s) {
  let l = await te(o, a);
  s === "dark" && o.dark && (l = [...l, ...await te(o.dark, a)]), await Gt([[`${t}[${e}]`, l]]), Object.entries(o).forEach(([n, i]) => {
    (a.style.hasOwnProperty(n) && !(n in a) || n === "dark") && a.removeAttribute(n);
  });
}
function oe(e) {
  const t = (o, a, s) => {
    typeof s == "string" ? document.documentElement.style.setProperty(
      `--${o}-${a}`,
      s
    ) : typeof s == "object" && Object.entries(s).forEach(([l, n]) => {
      l.startsWith("_") ? t(
        o,
        `${a}${l}`,
        n
      ) : t(
        `${o}-${a}`,
        l,
        n
      );
    });
  };
  Object.entries(e).forEach(([o, a]) => {
    Object.entries(a).forEach(([s, l]) => {
      t(o, s, l);
    });
  });
}
function Kt(e, t, o) {
  const a = document.createElement("style");
  a.setAttribute("type", "text/css");
  const s = o.__scopeId ? `[${o.__scopeId}]` : "", l = o.__name, n = (i, r) => {
    const d = [];
    return Object.entries(r).forEach(([u, y]) => {
      const S = u.startsWith("_") ? `${i}${u}` : `${i}-${u}`;
      if (typeof y == "object" && !Array.isArray(y) && !u.startsWith("_")) {
        const M = n(S, y);
        d.push(...M);
      } else if (u.startsWith("_")) {
        const M = u.split("-").find((j) => j.indexOf("_") !== -1);
        d.push(`.${l}${s}${M.replace("_", ":")} { ${Object.entries(y).map(([j]) => `${j}:var(--${S}-${j})`).join(";")}}`);
      } else
        d.push(`.${l}${s} { ${u}:var(--${S}) }`);
    }), d;
  };
  Object.entries(e[o.__name]).forEach(([i, r]) => {
    const d = n(o.__name, { [i]: r });
    Qt(d).forEach((u) => {
      a.textContent += `${u} `;
    });
  }), t.appendChild(a);
}
function Qt(e) {
  const t = {};
  return e.forEach((o) => {
    const a = o.match(/(.+?)\s*{([^}]+)}/);
    if (a) {
      const [s, l] = a.slice(1);
      t[s] || (t[s] = []), t[s].push(l.trim());
    }
  }), Object.entries(t).map(([o, a]) => {
    const s = a.join("; ");
    return `${o} { ${s} }`;
  });
}
const ea = {
  beforeMount(e, t) {
    switch (t == null || t.value, t.arg && e.classList.add(t.arg), t.arg) {
      case "nowrap":
        e.classList.add("nowrap");
    }
    e.classList.add("row");
  }
}, ta = {
  beforeMount(e, t) {
    const o = t == null ? void 0 : t.value;
    switch (t.arg && !parseInt(o) && console.error("Using directive 'arguments' and 'breakpoints' in value not ALLOWED", `arg:${t.arg}, value: ${o}. Either remove the 'Argument' or 'Breakpoint' from the directive.`), t.arg) {
      case "xs":
        e.classList.add(`col-xs${o}`);
        return;
      case "sm":
        e.classList.add(`col-sm${o}`);
        return;
      case "md":
        e.classList.add(`col-md${o}`);
        return;
      case "lg":
        e.classList.add(`col-lg${o}`);
        return;
    }
    e.classList.add(`col-${o}`);
  }
};
var aa = {};
function oa(e, t) {
  return m(e.$slots, "default");
}
const na = /* @__PURE__ */ x(aa, [["render", oa]]), ra = {
  install: (e, t) => {
    const o = C(t != null && t.colorMode ? t.colorMode : "dark");
    let a = fe(E(T, o.value === "dark" ? ee : Q));
    if (t.customTheme)
      try {
        a = E(a, t.customTheme[o.value]);
      } catch (n) {
        console.error(n);
      }
    oe(a);
    function s() {
      o.value === "light" ? (o.value = "dark", console.log("darkmode"), a = Object.assign(a, { ...ee })) : (console.log("lightMode"), o.value = "light", a = Object.assign(a, { ...Q }));
    }
    z(o, (n) => {
      oe(a);
    }), e.provide("theme", a), e.provide("colorMode", o), e.config.globalProperties.$toggleTheme = (n) => s(), e.config.globalProperties.$colorMode = o;
    const l = {
      beforeMount(n, i) {
        var r;
        ae(`data-id="${i.modifiers ?? ((r = i.value) == null ? void 0 : r.__scopeId)}"`, n.tagName.toLowerCase(), i.arg, n, o.value);
      },
      beforeUpdate(n, i) {
        var r;
        ae(`data-id="${i.modifiers ?? ((r = i.value) == null ? void 0 : r.__scopeId)}"`, n.tagName.toLowerCase(), i.arg, n, o.value);
      }
    };
    e.directive("styleSetup", l), e.directive("row", ea), e.directive("col", ta), e.component("CThemeProvider", na);
    for (const n in H)
      if (H.hasOwnProperty(n)) {
        const i = H[n];
        a[i.__name] && Kt(a, document.head, i), e.component(i.__name ?? n, i);
      }
  }
};
export {
  ra as default
};
