import { defineComponent as v, useCssVars as M, inject as C, computed as j, resolveDirective as g, withDirectives as b, openBlock as u, createElementBlock as O, renderSlot as f, createBlock as p, resolveDynamicComponent as k, unref as d, withCtx as $, ref as w, watch as D, createCommentVNode as T, createElementVNode as E, createTextVNode as F, toDisplayString as H, toRefs as G, onMounted as Z, nextTick as J, reactive as K } from "vue";
const Q = { class: "CMainBar" }, X = /* @__PURE__ */ v({
  __name: "CMainBar",
  setup(o) {
    var s, n;
    M((a) => ({
      "4740e667": t.background,
      "3e5602ec": t.color
    }));
    const e = C("theme"), t = {
      background: (s = e == null ? void 0 : e.CMainBar) == null ? void 0 : s.background,
      color: (n = e == null ? void 0 : e.CMainBar) == null ? void 0 : n.color
    };
    return console.log(t), j({
      get() {
        return e.CMainBar;
      },
      set(a) {
        return a;
      }
    }), (a, r) => {
      const c = g("style-setup");
      return b((u(), O("header", Q, [
        f(a.$slots, "default", {}, void 0, !0)
      ])), [
        [c, a.$.type, a.$attrs]
      ]);
    };
  }
});
const h = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [s, n] of e)
    t[s] = n;
  return t;
}, Y = /* @__PURE__ */ h(X, [["__scopeId", "data-v-0b1f8d92"]]);
var ee = {}, te = { class: "CMain" };
function se(o, e) {
  var t = g("style-setup");
  return b((u(), O("main", te, [
    f(o.$slots, "default", {}, void 0, !0)
  ])), [
    [t, o.$.type, o.$attrs]
  ]);
}
const oe = /* @__PURE__ */ h(ee, [["render", se], ["__scopeId", "data-v-994719c5"]]), x = {
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
function q(o, e) {
  const t = { ...o };
  for (const s in e)
    e.hasOwnProperty(s) && (e[s] && e[s].constructor === Object ? t[s] && t[s].constructor === Object ? t[s] = q(t[s], e[s]) : t[s] = { ...e[s] } : t[s] = e[s]);
  return t;
}
const re = {
  padding: "10px 28px",
  letterSpacing: "0.6px",
  height: "10",
  margin: "5px",
  textAlign: "center",
  fontSize: x.fontSize.base,
  width: "100%",
  maxWidth: "fit-content",
  borderRadius: x.radii.xl,
  lineHeight: x.lineHeights.base,
  fontWeight: x.fontWeights.bold
}, L = ({ colors: o, colorMode: e, additionalStyling: t }) => {
  let s = {
    light: {
      bg: o.bg.base,
      color: o.font.base,
      _hover: {
        bg: o.bg._hover,
        color: o.font._hover
      },
      _active: {
        bg: o.bg._active
      }
    },
    dark: {
      bg: o.bg.base,
      color: o.font.base,
      _hover: {
        bg: o.bg._hover,
        color: o.font._hover
      },
      _active: {
        bg: o.bg._active
      }
    }
  };
  return q(s[e], t);
}, ae = (o) => {
  switch (o.variant) {
    case "primary":
      return L(o);
    case "secondary":
      return L(o);
    default:
      return L(o);
  }
}, W = (o) => ({
  ...re,
  ...ae(o)
});
function S() {
  const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let e = "";
  for (let t = 0; t < 6; t++) {
    const s = Math.floor(Math.random() * o.length);
    e += o.charAt(s);
  }
  return e;
}
const ne = /* @__PURE__ */ v({
  __name: "CIcon",
  props: {
    as: {},
    space: {}
  },
  setup(o) {
    const e = S();
    return (t, s) => {
      const n = g("style-setup");
      return b((u(), p(k(t.as), {
        "data-id": d(e),
        class: "CIcon"
      }, {
        default: $(() => [
          f(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [n, t.$.type, t.$attrs, d(e)]
      ]);
    };
  }
});
const A = /* @__PURE__ */ h(ne, [["__scopeId", "data-v-dab21008"]]), ce = /* @__PURE__ */ v({
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
  setup(o) {
    const { variant: e = "primary", as: t = "button", ...s } = o;
    M((l) => ({
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
    })), console.log(t);
    const n = C("theme"), a = C("colorMode"), r = S();
    let c = j({
      get() {
        return n.CButton[e];
      },
      set(l) {
        return l;
      }
    }), i = w(W({ ...s, colors: c.value, colorMode: a.value }));
    return D(() => n, (l) => {
      i.value = W({ ...s, colors: c.value, colorMode: a.value });
    }, { deep: !0 }), (l, _) => {
      const y = g("style-setup");
      return b((u(), p(k(l.as ?? "button"), {
        "data-id": d(r),
        class: "CButton",
        disabled: l.isDisabled
      }, {
        default: $(() => [
          l.leftIcon ? (u(), p(A, {
            key: 0,
            as: l.leftIcon,
            "margin-right": "8px"
          }, null, 8, ["as"])) : T("", !0),
          f(l.$slots, "default", {}, void 0, !0),
          l.rightIcon ? (u(), p(A, {
            key: 1,
            as: l.rightIcon,
            "margin-left": "8px"
          }, null, 8, ["as"])) : T("", !0)
        ]),
        _: 3
      }, 8, ["data-id", "disabled"])), [
        [y, l.$.type, l.$attrs, d(r)]
      ]);
    };
  }
});
const ie = /* @__PURE__ */ h(ce, [["__scopeId", "data-v-ac16b061"]]), le = /* @__PURE__ */ v({
  __name: "CCard",
  props: {
    as: {}
  },
  setup(o) {
    M((n) => ({
      "6f7ac7bf": t.borderRadius
    }));
    const t = {
      borderRadius: C("theme").radii.lg
    }, s = S();
    return (n, a) => {
      const r = g("style-setup");
      return b((u(), p(k("div"), {
        "data-id": d(s),
        class: "CCard"
      }, {
        default: $(() => [
          f(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, n.$.type, n.$attrs, d(s)]
      ]);
    };
  }
});
const de = /* @__PURE__ */ h(le, [["__scopeId", "data-v-d073c29f"]]), ue = /* @__PURE__ */ v({
  __name: "CCardTitle",
  props: {
    as: {}
  },
  setup(o) {
    M((n) => ({
      "64e4ddeb": e.fontWeight,
      19608798: e.fontSize
    })), C("theme");
    const e = {
      fontWeight: "900",
      fontSize: "18px"
    };
    function t() {
      const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let a = "";
      for (let r = 0; r < 6; r++) {
        const c = Math.floor(Math.random() * n.length);
        a += n.charAt(c);
      }
      return a;
    }
    const s = t();
    return (n, a) => {
      const r = g("style-setup");
      return b((u(), p(k("h3"), {
        "data-id": d(s),
        class: "CCardTitle"
      }, {
        default: $(() => [
          f(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [r, n.$.type, n.$attrs, d(s)]
      ]);
    };
  }
});
const _e = /* @__PURE__ */ h(ue, [["__scopeId", "data-v-27df9289"]]), fe = /* @__PURE__ */ v({
  __name: "CCardContent",
  props: {
    as: {}
  },
  setup(o) {
    return C("theme"), (e, t) => {
      const s = g("style-setup");
      return b((u(), p(k("div"), { class: "CCardContent" }, {
        default: $(() => [
          f(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })), [
        [s, e.$.type, e.$attrs]
      ]);
    };
  }
});
const pe = /* @__PURE__ */ h(fe, [["__scopeId", "data-v-0f0761fc"]]), ve = ["data-id"], he = /* @__PURE__ */ v({
  __name: "CContainer",
  setup(o) {
    const e = S();
    return (t, s) => {
      const n = g("style-setup");
      return b((u(), O("section", {
        "data-id": d(e),
        class: "CContainer"
      }, [
        f(t.$slots, "default", {}, void 0, !0)
      ], 8, ve)), [
        [n, t.$.type, t.$attrs, d(e)]
      ]);
    };
  }
});
const me = /* @__PURE__ */ h(he, [["__scopeId", "data-v-ba427fa7"]]), ge = /* @__PURE__ */ v({
  __name: "CText",
  props: {
    as: {}
  },
  setup(o) {
    var n;
    M((a) => ({
      "77ee5eb0": t.fontSize,
      "0d5b218e": t.marginBottom
    }));
    const e = C("theme"), t = {
      fontSize: "16px",
      color: (n = e == null ? void 0 : e.body) == null ? void 0 : n.color,
      marginBottom: e.spaces.sm
    }, s = S();
    return (a, r) => {
      const c = g("style-setup");
      return b((u(), p(k(a.as), {
        "data-id": d(s),
        class: "CText"
      }, {
        default: $(() => [
          f(a.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [c, a.$.type, a.$attrs, d(s)]
      ]);
    };
  }
});
const U = /* @__PURE__ */ h(ge, [["__scopeId", "data-v-a98c7614"]]), be = /* @__PURE__ */ v({
  __name: "CAlert",
  setup(o) {
    const { variant: e = "information", as: t = "div", ...s } = o, n = C("theme");
    C("colorMode");
    const a = S();
    return j({
      get() {
        return n.CAlert[e];
      },
      set(r) {
        return r;
      }
    }), (r, c) => {
      const i = g("style-setup");
      return b((u(), p(k("div"), {
        "data-id": d(a),
        class: "CAlert"
      }, {
        default: $(() => [
          r.variantIcon ? (u(), p(A, {
            key: 0,
            as: r.variantIcon,
            "margin-right": "12px",
            size: "24px"
          }, null, 8, ["as"])) : T("", !0),
          E("div", null, [
            r.title ? (u(), p(U, {
              key: 0,
              as: "h4"
            }, {
              default: $(() => [
                F(H(r.title), 1)
              ]),
              _: 1
            })) : T("", !0),
            f(r.$slots, "default", {}, void 0, !0)
          ])
        ]),
        _: 3
      }, 8, ["data-id"])), [
        [i, r.$.type, r.$attrs, d(a)]
      ]);
    };
  }
});
const ye = /* @__PURE__ */ h(be, [["__scopeId", "data-v-f4ddcf58"]]);
function Ce(o) {
  let e = w();
  function t(a) {
    if (!o.rules)
      return;
    const c = o.rules.map((i) => {
      const l = i(a);
      if (l || l !== !0)
        return l;
    }).find((i) => i !== !0);
    switch (typeof c) {
      case "string":
      case "boolean":
        e.value = c !== !1 ? c : !0;
        break;
      default:
        e.value = !1;
        break;
    }
    return e.value === !1;
  }
  function s(a, r) {
    if (a === r)
      return !0;
    if (a instanceof Date && r instanceof Date && a.getTime() !== r.getTime() || a !== Object(a) || r !== Object(r))
      return !1;
    const c = Object.keys(a);
    return c.length !== Object.keys(r).length ? !1 : c.every((i) => s(a[i], r[i]));
  }
  const { rules: n } = G(o);
  return D(() => n, (a, r) => {
    s(a, r) || t();
  }, { deep: !0 }), Z(() => {
    t();
  }), { validate: t, error: e };
}
const $e = { class: "form-box" }, Ie = /* @__PURE__ */ E("input", {
  class: "form-input",
  type: "text",
  required: "",
  minlength: "6",
  placeholder: "tester"
}, null, -1), ke = /* @__PURE__ */ E("label", {
  for: "",
  class: "label"
}, "tester ", -1), we = /* @__PURE__ */ E("span", { class: "error" }, "Field Required", -1), Se = [
  Ie,
  ke,
  we
], xe = /* @__PURE__ */ v({
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
  setup(o, { emit: e }) {
    const t = o, { error: s, validate: n } = Ce(t);
    let a = w(t.modelValue);
    return D(a, (r) => {
      e("input", r), t.rules && n(r);
    }), (r, c) => (u(), O("div", $e, Se));
  }
});
const Me = /* @__PURE__ */ v({
  __name: "CForm",
  setup(o, { expose: e }) {
    const t = w(), s = w(!1), n = j({
      get() {
        var r, c, i, l;
        if (s.value) {
          const _ = [], y = (r = t.value) == null ? void 0 : r.elements;
          for (let I = 0; I < y.length; I++) {
            const m = y[I];
            (c = m == null ? void 0 : m.__vue__) != null && c.isInvalid && ((i = m.__vue__) == null ? void 0 : i.isInvalid) === !0 && _.push(!0), !m.__vue__ == null && ((l = m.validity) == null ? void 0 : l.valid) !== !0 && _.push(!0);
          }
          return s.value = !1, _.length === 0;
        }
        return s.value = !1, !1;
      },
      set(r) {
        return r;
      }
    });
    async function a() {
      return s.value = !0, await J(), n.value;
    }
    return e({ validation: a }), (r, c) => (u(), O("form", {
      ref_key: "form",
      ref: t
    }, [
      f(r.$slots, "default")
    ], 512));
  }
}), R = { CMainBar: Y, CMain: oe, CButton: ie, CCard: de, CContainer: me, CCardTitle: _e, CCardContent: pe, CText: U, CAlert: ye, CIcon: A, CForm: Me, CInput: xe }, V = {
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
async function Oe(o, e) {
  return Object.entries(o).map(([t, s]) => {
    const n = Te(t);
    return n in e.style ? [n, s] : !1;
  }).filter(Boolean);
}
async function Be(o) {
  const e = document.createElement("style");
  document.head.appendChild(e);
  const t = e.sheet;
  for (let s = 0; s < o.length; s++) {
    let n = 1, a = o[s], r = a[0], c = "";
    Array.isArray(a[1][0]) && (a = a[1], n = 0);
    for (let i = a.length; n < i; n++) {
      const l = a[n];
      c += `${l[0]}: ${l[1]}${l[2] ? " !important" : ""};
`;
    }
    t.insertRule(
      `${r}{${c}}`,
      t.cssRules.length
    );
  }
}
function Te(o) {
  return o.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
async function z(o, e, t, s) {
  const n = await Oe(t, s);
  await Be([[`${e}[${o}]`, n]]), Object.entries(t).forEach(([a, r]) => {
    s.style.hasOwnProperty(a) && !(a in s) && (console.log("attr", a), s.removeAttribute(a));
  });
}
function N(o) {
  const e = (t, s, n) => {
    typeof n == "string" ? document.documentElement.style.setProperty(
      `--${t}-${s}`,
      n
    ) : typeof n == "object" && Object.entries(n).forEach(([a, r]) => {
      a.startsWith("_") ? e(
        t,
        `${s}${a}`,
        r
      ) : e(
        `${t}-${s}`,
        a,
        r
      );
    });
  };
  Object.entries(o).forEach(([t, s]) => {
    Object.entries(s).forEach(([n, a]) => {
      e(t, n, a);
    });
  });
}
function Ae(o, e, t) {
  const s = document.createElement("style");
  s.setAttribute("type", "text/css");
  const n = t.__scopeId ? `[${t.__scopeId}]` : "", a = t.__name, r = (c, i) => {
    const l = [];
    return Object.entries(i).forEach(([_, y]) => {
      const I = _.startsWith("_") ? `${c}${_}` : `${c}-${_}`;
      if (typeof y == "object" && !Array.isArray(y) && !_.startsWith("_")) {
        const m = r(I, y);
        l.push(...m);
      } else if (_.startsWith("_")) {
        const m = _.split("-").find((B) => B.indexOf("_") !== -1);
        l.push(`.${a}${n}${m.replace("_", ":")} { ${Object.entries(y).map(([B]) => `${B}:var(--${I}-${B})`).join(";")}}`);
      } else
        l.push(`.${a}${n} { ${_}:var(--${I}) }`);
    }), l;
  };
  Object.entries(o[t.__name]).forEach(([c, i]) => {
    const l = r(t.__name, { [c]: i });
    je(l).forEach((_) => {
      s.textContent += `${_} `;
    });
  }), e.appendChild(s);
}
function je(o) {
  const e = {};
  return o.forEach((t) => {
    const s = t.match(/(.+?)\s*{([^}]+)}/);
    if (s) {
      const [n, a] = s.slice(1);
      e[n] || (e[n] = []), e[n].push(a.trim());
    }
  }), Object.entries(e).map(([t, s]) => {
    const n = s.join("; ");
    return `${t} { ${n} }`;
  });
}
const De = {
  beforeMount(o, e) {
    e == null || e.value, e.arg && o.classList.add(e.arg), o.classList.add("row");
  }
}, Ee = {
  beforeMount(o, e) {
    const t = e == null ? void 0 : e.value;
    switch (e.arg && !parseInt(t) && console.error("Using directive 'arguments' and 'breakpoints' in value not ALLOWED", `arg:${e.arg}, value: ${t}. Either remove the 'Argument' or 'Breakpoint' from the directive.`), e.arg) {
      case "xs":
        o.classList.add(`col-xs${t}`);
        return;
      case "sm":
        o.classList.add(`col-sm${t}`);
        return;
      case "md":
        o.classList.add(`col-md${t}`);
        return;
      case "lg":
        o.classList.add(`col-lg${t}`);
        return;
    }
    o.classList.add(`col-${t}`);
  }
};
var Le = {};
function Re(o, e) {
  return f(o.$slots, "default");
}
const qe = /* @__PURE__ */ h(Le, [["render", Re]]), Ve = {
  install: (o, e) => {
    const t = w(e != null && e.colorMode ? e.colorMode : "dark");
    let s = K(q(x, t.value === "dark" ? P : V));
    if (e.customTheme)
      try {
        s = Object.assign(s, { ...e.customTheme[t.value] });
      } catch (r) {
        console.error(r);
      }
    N(s);
    function n() {
      t.value === "light" ? (t.value = "dark", console.log("darkmode"), s = Object.assign(s, { ...P })) : (console.log("lightMode"), t.value = "light", s = Object.assign(s, { ...V }));
    }
    D(t, (r) => {
      N(s);
    }), o.provide("theme", s), o.provide("colorMode", t), o.config.globalProperties.$toggleTheme = (r) => n();
    const a = {
      beforeMount(r, c) {
        var i;
        z(`data-id="${c.modifiers ?? ((i = c.value) == null ? void 0 : i.__scopeId)}"`, r.tagName.toLowerCase(), c.arg, r);
      },
      beforeUpdate(r, c) {
        var i;
        z(`data-id="${c.modifiers ?? ((i = c.value) == null ? void 0 : i.__scopeId)}"`, r.tagName.toLowerCase(), c.arg, r);
      }
    };
    o.directive("styleSetup", a), o.directive("row", De), o.directive("col", Ee), o.component("CThemeProvider", qe);
    for (const r in R)
      if (R.hasOwnProperty(r)) {
        const c = R[r];
        c.__name === "CIcon" && console.log("CICON!!", c), s[c.__name] && Ae(s, document.head, c), o.component(c.__name ?? r, c);
      }
  }
};
export {
  Ve as default
};
