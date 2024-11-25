(function () {
  const A = document.createElement("link").relList;
  if (A && A.supports && A.supports("modulepreload")) return;
  for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) V(_);
  new MutationObserver((_) => {
    for (const $ of _)
      if ($.type === "childList")
        for (const Oe of $.addedNodes)
          Oe.tagName === "LINK" && Oe.rel === "modulepreload" && V(Oe);
  }).observe(document, { childList: !0, subtree: !0 });
  function ae(_) {
    const $ = {};
    return (
      _.integrity && ($.integrity = _.integrity),
      _.referrerPolicy && ($.referrerPolicy = _.referrerPolicy),
      _.crossOrigin === "use-credentials"
        ? ($.credentials = "include")
        : _.crossOrigin === "anonymous"
        ? ($.credentials = "omit")
        : ($.credentials = "same-origin"),
      $
    );
  }
  function V(_) {
    if (_.ep) return;
    _.ep = !0;
    const $ = ae(_);
    fetch(_.href, $);
  }
})();
var Vr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Gr(J) {
  return J && J.__esModule && Object.prototype.hasOwnProperty.call(J, "default")
    ? J.default
    : J;
}
var Qn = { exports: {} };
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */ (function (
  J
) {
  (function (A, ae) {
    J.exports = A.document
      ? ae(A, !0)
      : function (V) {
          if (!V.document)
            throw new Error("jQuery requires a window with a document");
          return ae(V);
        };
  })(typeof window < "u" ? window : Vr, function (A, ae) {
    var V = [],
      _ = Object.getPrototypeOf,
      $ = V.slice,
      Oe = V.flat
        ? function (e) {
            return V.flat.call(e);
          }
        : function (e) {
            return V.concat.apply([], e);
          },
      Re = V.push,
      ee = V.indexOf,
      de = {},
      Le = de.toString,
      qe = de.hasOwnProperty,
      rn = qe.toString,
      tr = rn.call(Object),
      P = {},
      M = function (e) {
        return (
          typeof e == "function" &&
          typeof e.nodeType != "number" &&
          typeof e.item != "function"
        );
      },
      Ue = function (e) {
        return e != null && e === e.window;
      },
      q = A.document,
      nr = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function on(e, t, n) {
      var r,
        o,
        a = (n = n || q).createElement("script");
      if (((a.text = e), t))
        for (r in nr)
          (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            a.setAttribute(r, o);
      n.head.appendChild(a).parentNode.removeChild(a);
    }
    function Xe(e) {
      return e == null
        ? e + ""
        : typeof e == "object" || typeof e == "function"
        ? de[Le.call(e)] || "object"
        : typeof e;
    }
    var an = "3.7.1",
      rr = /HTML$/i,
      i = function (e, t) {
        return new i.fn.init(e, t);
      };
    function qt(e) {
      var t = !!e && "length" in e && e.length,
        n = Xe(e);
      return (
        !M(e) &&
        !Ue(e) &&
        (n === "array" ||
          t === 0 ||
          (typeof t == "number" && 0 < t && t - 1 in e))
      );
    }
    function z(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    (i.fn = i.prototype =
      {
        jquery: an,
        constructor: i,
        length: 0,
        toArray: function () {
          return $.call(this);
        },
        get: function (e) {
          return e == null
            ? $.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = i.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return i.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            i.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack($.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: Re,
        sort: V.sort,
        splice: V.splice,
      }),
      (i.extend = i.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            o,
            a,
            s = arguments[0] || {},
            c = 1,
            u = arguments.length,
            p = !1;
          for (
            typeof s == "boolean" && ((p = s), (s = arguments[c] || {}), c++),
              typeof s == "object" || M(s) || (s = {}),
              c === u && ((s = this), c--);
            c < u;
            c++
          )
            if ((e = arguments[c]) != null)
              for (t in e)
                (r = e[t]),
                  t !== "__proto__" &&
                    s !== r &&
                    (p && r && (i.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = s[t]),
                        (a =
                          o && !Array.isArray(n)
                            ? []
                            : o || i.isPlainObject(n)
                            ? n
                            : {}),
                        (o = !1),
                        (s[t] = i.extend(p, a, r)))
                      : r !== void 0 && (s[t] = r));
          return s;
        }),
      i.extend({
        expando: "jQuery" + (an + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return (
            !(!e || Le.call(e) !== "[object Object]") &&
            (!(t = _(e)) ||
              (typeof (n = qe.call(t, "constructor") && t.constructor) ==
                "function" &&
                rn.call(n) === tr))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          on(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (qt(e))
            for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
          else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
          return e;
        },
        text: function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (!o) for (; (t = e[r++]); ) n += i.text(t);
          return o === 1 || o === 11
            ? e.textContent
            : o === 9
            ? e.documentElement.textContent
            : o === 3 || o === 4
            ? e.nodeValue
            : n;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            e != null &&
              (qt(Object(e))
                ? i.merge(n, typeof e == "string" ? [e] : e)
                : Re.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return t == null ? -1 : ee.call(t, e, n);
        },
        isXMLDoc: function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !rr.test(t || (n && n.nodeName) || "HTML");
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, o = e.length; r < n; r++)
            e[o++] = t[r];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var r = [], o = 0, a = e.length, s = !n; o < a; o++)
            !t(e[o], o) !== s && r.push(e[o]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            o,
            a = 0,
            s = [];
          if (qt(e))
            for (r = e.length; a < r; a++)
              (o = t(e[a], a, n)) != null && s.push(o);
          else for (a in e) (o = t(e[a], a, n)) != null && s.push(o);
          return Oe(s);
        },
        guid: 1,
        support: P,
      }),
      typeof Symbol == "function" &&
        (i.fn[Symbol.iterator] = V[Symbol.iterator]),
      i.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          de["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var ir = V.pop,
      or = V.sort,
      ar = V.splice,
      B = "[\\x20\\t\\r\\n\\f]",
      ot = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g");
    i.contains = function (e, t) {
      var n = t && t.parentNode;
      return (
        e === n ||
        !(
          !n ||
          n.nodeType !== 1 ||
          !(e.contains
            ? e.contains(n)
            : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
        )
      );
    };
    var sr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function lr(e, t) {
      return t
        ? e === "\0"
          ? "�"
          : e.slice(0, -1) +
            "\\" +
            e.charCodeAt(e.length - 1).toString(16) +
            " "
        : "\\" + e;
    }
    i.escapeSelector = function (e) {
      return (e + "").replace(sr, lr);
    };
    var je = q,
      Ht = Re;
    (function () {
      var e,
        t,
        n,
        r,
        o,
        a,
        s,
        c,
        u,
        p,
        g = Ht,
        v = i.expando,
        d = 0,
        x = 0,
        S = Q(),
        N = Q(),
        O = Q(),
        Y = Q(),
        ne = function (l, f) {
          return l === f && (o = !0), 0;
        },
        Te =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        Ce =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          B +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        R =
          "\\[" +
          B +
          "*(" +
          Ce +
          ")(?:" +
          B +
          "*([*^$|!~]?=)" +
          B +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          Ce +
          "))|)" +
          B +
          "*\\]",
        Be =
          ":(" +
          Ce +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          R +
          ")*)|.*)\\)|)",
        F = new RegExp(B + "+", "g"),
        G = new RegExp("^" + B + "*," + B + "*"),
        ht = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
        Qt = new RegExp(B + "|>"),
        ke = new RegExp(Be),
        gt = new RegExp("^" + Ce + "$"),
        Ne = {
          ID: new RegExp("^#(" + Ce + ")"),
          CLASS: new RegExp("^\\.(" + Ce + ")"),
          TAG: new RegExp("^(" + Ce + "|[*])"),
          ATTR: new RegExp("^" + R),
          PSEUDO: new RegExp("^" + Be),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              B +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              B +
              "*(?:([+-]|)" +
              B +
              "*(\\d+)|))" +
              B +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + Te + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              B +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              B +
              "*((?:-\\d)?\\d*)" +
              B +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        He = /^(?:input|select|textarea|button)$/i,
        nt = /^h\d$/i,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        re = /[+~]/,
        Z = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        se = function (l, f) {
          var h = "0x" + l.slice(1) - 65536;
          return (
            f ||
            (h < 0
              ? String.fromCharCode(h + 65536)
              : String.fromCharCode((h >> 10) | 55296, (1023 & h) | 56320))
          );
        },
        Pe = function () {
          Me();
        },
        le = Nt(
          function (l) {
            return l.disabled === !0 && z(l, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        g.apply((V = $.call(je.childNodes)), je.childNodes),
          V[je.childNodes.length].nodeType;
      } catch {
        g = {
          apply: function (f, h) {
            Ht.apply(f, $.call(h));
          },
          call: function (f) {
            Ht.apply(f, $.call(arguments, 1));
          },
        };
      }
      function j(l, f, h, m) {
        var y,
          T,
          C,
          k,
          w,
          W,
          L,
          H = f && f.ownerDocument,
          I = f ? f.nodeType : 9;
        if (
          ((h = h || []),
          typeof l != "string" || !l || (I !== 1 && I !== 9 && I !== 11))
        )
          return h;
        if (!m && (Me(f), (f = f || a), c)) {
          if (I !== 11 && (w = ge.exec(l)))
            if ((y = w[1])) {
              if (I === 9) {
                if (!(C = f.getElementById(y))) return h;
                if (C.id === y) return g.call(h, C), h;
              } else if (
                H &&
                (C = H.getElementById(y)) &&
                j.contains(f, C) &&
                C.id === y
              )
                return g.call(h, C), h;
            } else {
              if (w[2]) return g.apply(h, f.getElementsByTagName(l)), h;
              if ((y = w[3]) && f.getElementsByClassName)
                return g.apply(h, f.getElementsByClassName(y)), h;
            }
          if (!(Y[l + " "] || (u && u.test(l)))) {
            if (((L = l), (H = f), I === 1 && (Qt.test(l) || ht.test(l)))) {
              for (
                ((H = (re.test(l) && Kt(f.parentNode)) || f) == f && P.scope) ||
                  ((k = f.getAttribute("id"))
                    ? (k = i.escapeSelector(k))
                    : f.setAttribute("id", (k = v))),
                  T = (W = mt(l)).length;
                T--;

              )
                W[T] = (k ? "#" + k : ":scope") + " " + Dt(W[T]);
              L = W.join(",");
            }
            try {
              return g.apply(h, H.querySelectorAll(L)), h;
            } catch {
              Y(l, !0);
            } finally {
              k === v && f.removeAttribute("id");
            }
          }
        }
        return Vn(l.replace(ot, "$1"), f, h, m);
      }
      function Q() {
        var l = [];
        return function f(h, m) {
          return (
            l.push(h + " ") > t.cacheLength && delete f[l.shift()],
            (f[h + " "] = m)
          );
        };
      }
      function K(l) {
        return (l[v] = !0), l;
      }
      function U(l) {
        var f = a.createElement("fieldset");
        try {
          return !!l(f);
        } catch {
          return !1;
        } finally {
          f.parentNode && f.parentNode.removeChild(f), (f = null);
        }
      }
      function Se(l) {
        return function (f) {
          return z(f, "input") && f.type === l;
        };
      }
      function rt(l) {
        return function (f) {
          return (z(f, "input") || z(f, "button")) && f.type === l;
        };
      }
      function At(l) {
        return function (f) {
          return "form" in f
            ? f.parentNode && f.disabled === !1
              ? "label" in f
                ? "label" in f.parentNode
                  ? f.parentNode.disabled === l
                  : f.disabled === l
                : f.isDisabled === l || (f.isDisabled !== !l && le(f) === l)
              : f.disabled === l
            : "label" in f && f.disabled === l;
        };
      }
      function _e(l) {
        return K(function (f) {
          return (
            (f = +f),
            K(function (h, m) {
              for (var y, T = l([], h.length, f), C = T.length; C--; )
                h[(y = T[C])] && (h[y] = !(m[y] = h[y]));
            })
          );
        });
      }
      function Kt(l) {
        return l && typeof l.getElementsByTagName < "u" && l;
      }
      function Me(l) {
        var f,
          h = l ? l.ownerDocument || l : je;
        return (
          h != a &&
            h.nodeType === 9 &&
            h.documentElement &&
            ((s = (a = h).documentElement),
            (c = !i.isXMLDoc(a)),
            (p = s.matches || s.webkitMatchesSelector || s.msMatchesSelector),
            s.msMatchesSelector &&
              je != a &&
              (f = a.defaultView) &&
              f.top !== f &&
              f.addEventListener("unload", Pe),
            (P.getById = U(function (m) {
              return (
                (s.appendChild(m).id = i.expando),
                !a.getElementsByName || !a.getElementsByName(i.expando).length
              );
            })),
            (P.disconnectedMatch = U(function (m) {
              return p.call(m, "*");
            })),
            (P.scope = U(function () {
              return a.querySelectorAll(":scope");
            })),
            (P.cssHas = U(function () {
              try {
                return a.querySelector(":has(*,:jqfake)"), !1;
              } catch {
                return !0;
              }
            })),
            P.getById
              ? ((t.filter.ID = function (m) {
                  var y = m.replace(Z, se);
                  return function (T) {
                    return T.getAttribute("id") === y;
                  };
                }),
                (t.find.ID = function (m, y) {
                  if (typeof y.getElementById < "u" && c) {
                    var T = y.getElementById(m);
                    return T ? [T] : [];
                  }
                }))
              : ((t.filter.ID = function (m) {
                  var y = m.replace(Z, se);
                  return function (T) {
                    var C =
                      typeof T.getAttributeNode < "u" &&
                      T.getAttributeNode("id");
                    return C && C.value === y;
                  };
                }),
                (t.find.ID = function (m, y) {
                  if (typeof y.getElementById < "u" && c) {
                    var T,
                      C,
                      k,
                      w = y.getElementById(m);
                    if (w) {
                      if ((T = w.getAttributeNode("id")) && T.value === m)
                        return [w];
                      for (k = y.getElementsByName(m), C = 0; (w = k[C++]); )
                        if ((T = w.getAttributeNode("id")) && T.value === m)
                          return [w];
                    }
                    return [];
                  }
                })),
            (t.find.TAG = function (m, y) {
              return typeof y.getElementsByTagName < "u"
                ? y.getElementsByTagName(m)
                : y.querySelectorAll(m);
            }),
            (t.find.CLASS = function (m, y) {
              if (typeof y.getElementsByClassName < "u" && c)
                return y.getElementsByClassName(m);
            }),
            (u = []),
            U(function (m) {
              var y;
              (s.appendChild(m).innerHTML =
                "<a id='" +
                v +
                "' href='' disabled='disabled'></a><select id='" +
                v +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                m.querySelectorAll("[selected]").length ||
                  u.push("\\[" + B + "*(?:value|" + Te + ")"),
                m.querySelectorAll("[id~=" + v + "-]").length || u.push("~="),
                m.querySelectorAll("a#" + v + "+*").length ||
                  u.push(".#.+[+~]"),
                m.querySelectorAll(":checked").length || u.push(":checked"),
                (y = a.createElement("input")).setAttribute("type", "hidden"),
                m.appendChild(y).setAttribute("name", "D"),
                (s.appendChild(m).disabled = !0),
                m.querySelectorAll(":disabled").length !== 2 &&
                  u.push(":enabled", ":disabled"),
                (y = a.createElement("input")).setAttribute("name", ""),
                m.appendChild(y),
                m.querySelectorAll("[name='']").length ||
                  u.push("\\[" + B + "*name" + B + "*=" + B + `*(?:''|"")`);
            }),
            P.cssHas || u.push(":has"),
            (u = u.length && new RegExp(u.join("|"))),
            (ne = function (m, y) {
              if (m === y) return (o = !0), 0;
              var T = !m.compareDocumentPosition - !y.compareDocumentPosition;
              return (
                T ||
                (1 &
                  (T =
                    (m.ownerDocument || m) == (y.ownerDocument || y)
                      ? m.compareDocumentPosition(y)
                      : 1) ||
                (!P.sortDetached && y.compareDocumentPosition(m) === T)
                  ? m === a || (m.ownerDocument == je && j.contains(je, m))
                    ? -1
                    : y === a || (y.ownerDocument == je && j.contains(je, y))
                    ? 1
                    : r
                    ? ee.call(r, m) - ee.call(r, y)
                    : 0
                  : 4 & T
                  ? -1
                  : 1)
              );
            })),
          a
        );
      }
      for (e in ((j.matches = function (l, f) {
        return j(l, null, null, f);
      }),
      (j.matchesSelector = function (l, f) {
        if ((Me(l), c && !Y[f + " "] && (!u || !u.test(f))))
          try {
            var h = p.call(l, f);
            if (
              h ||
              P.disconnectedMatch ||
              (l.document && l.document.nodeType !== 11)
            )
              return h;
          } catch {
            Y(f, !0);
          }
        return 0 < j(f, a, null, [l]).length;
      }),
      (j.contains = function (l, f) {
        return (l.ownerDocument || l) != a && Me(l), i.contains(l, f);
      }),
      (j.attr = function (l, f) {
        (l.ownerDocument || l) != a && Me(l);
        var h = t.attrHandle[f.toLowerCase()],
          m =
            h && qe.call(t.attrHandle, f.toLowerCase()) ? h(l, f, !c) : void 0;
        return m !== void 0 ? m : l.getAttribute(f);
      }),
      (j.error = function (l) {
        throw new Error("Syntax error, unrecognized expression: " + l);
      }),
      (i.uniqueSort = function (l) {
        var f,
          h = [],
          m = 0,
          y = 0;
        if (
          ((o = !P.sortStable),
          (r = !P.sortStable && $.call(l, 0)),
          or.call(l, ne),
          o)
        ) {
          for (; (f = l[y++]); ) f === l[y] && (m = h.push(y));
          for (; m--; ) ar.call(l, h[m], 1);
        }
        return (r = null), l;
      }),
      (i.fn.uniqueSort = function () {
        return this.pushStack(i.uniqueSort($.apply(this)));
      }),
      ((t = i.expr =
        {
          cacheLength: 50,
          createPseudo: K,
          match: Ne,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (l) {
              return (
                (l[1] = l[1].replace(Z, se)),
                (l[3] = (l[3] || l[4] || l[5] || "").replace(Z, se)),
                l[2] === "~=" && (l[3] = " " + l[3] + " "),
                l.slice(0, 4)
              );
            },
            CHILD: function (l) {
              return (
                (l[1] = l[1].toLowerCase()),
                l[1].slice(0, 3) === "nth"
                  ? (l[3] || j.error(l[0]),
                    (l[4] = +(l[4]
                      ? l[5] + (l[6] || 1)
                      : 2 * (l[3] === "even" || l[3] === "odd"))),
                    (l[5] = +(l[7] + l[8] || l[3] === "odd")))
                  : l[3] && j.error(l[0]),
                l
              );
            },
            PSEUDO: function (l) {
              var f,
                h = !l[6] && l[2];
              return Ne.CHILD.test(l[0])
                ? null
                : (l[3]
                    ? (l[2] = l[4] || l[5] || "")
                    : h &&
                      ke.test(h) &&
                      (f = mt(h, !0)) &&
                      (f = h.indexOf(")", h.length - f) - h.length) &&
                      ((l[0] = l[0].slice(0, f)), (l[2] = h.slice(0, f))),
                  l.slice(0, 3));
            },
          },
          filter: {
            TAG: function (l) {
              var f = l.replace(Z, se).toLowerCase();
              return l === "*"
                ? function () {
                    return !0;
                  }
                : function (h) {
                    return z(h, f);
                  };
            },
            CLASS: function (l) {
              var f = S[l + " "];
              return (
                f ||
                ((f = new RegExp("(^|" + B + ")" + l + "(" + B + "|$)")) &&
                  S(l, function (h) {
                    return f.test(
                      (typeof h.className == "string" && h.className) ||
                        (typeof h.getAttribute < "u" &&
                          h.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (l, f, h) {
              return function (m) {
                var y = j.attr(m, l);
                return y == null
                  ? f === "!="
                  : !f ||
                      ((y += ""),
                      f === "="
                        ? y === h
                        : f === "!="
                        ? y !== h
                        : f === "^="
                        ? h && y.indexOf(h) === 0
                        : f === "*="
                        ? h && -1 < y.indexOf(h)
                        : f === "$="
                        ? h && y.slice(-h.length) === h
                        : f === "~="
                        ? -1 < (" " + y.replace(F, " ") + " ").indexOf(h)
                        : f === "|=" &&
                          (y === h || y.slice(0, h.length + 1) === h + "-"));
              };
            },
            CHILD: function (l, f, h, m, y) {
              var T = l.slice(0, 3) !== "nth",
                C = l.slice(-4) !== "last",
                k = f === "of-type";
              return m === 1 && y === 0
                ? function (w) {
                    return !!w.parentNode;
                  }
                : function (w, W, L) {
                    var H,
                      I,
                      D,
                      te,
                      oe,
                      ie = T !== C ? "nextSibling" : "previousSibling",
                      fe = w.parentNode,
                      pe = k && w.nodeName.toLowerCase(),
                      ye = !L && !k,
                      X = !1;
                    if (fe) {
                      if (T) {
                        for (; ie; ) {
                          for (D = w; (D = D[ie]); )
                            if (k ? z(D, pe) : D.nodeType === 1) return !1;
                          oe = ie = l === "only" && !oe && "nextSibling";
                        }
                        return !0;
                      }
                      if (
                        ((oe = [C ? fe.firstChild : fe.lastChild]), C && ye)
                      ) {
                        for (
                          X =
                            (te =
                              (H = (I = fe[v] || (fe[v] = {}))[l] || [])[0] ===
                                d && H[1]) && H[2],
                            D = te && fe.childNodes[te];
                          (D =
                            (++te && D && D[ie]) || (X = te = 0) || oe.pop());

                        )
                          if (D.nodeType === 1 && ++X && D === w) {
                            I[l] = [d, te, X];
                            break;
                          }
                      } else if (
                        (ye &&
                          (X = te =
                            (H = (I = w[v] || (w[v] = {}))[l] || [])[0] === d &&
                            H[1]),
                        X === !1)
                      )
                        for (
                          ;
                          (D =
                            (++te && D && D[ie]) || (X = te = 0) || oe.pop()) &&
                          !(
                            (k ? z(D, pe) : D.nodeType === 1) &&
                            ++X &&
                            (ye && ((I = D[v] || (D[v] = {}))[l] = [d, X]),
                            D === w)
                          );

                        );
                      return (X -= y) === m || (X % m == 0 && 0 <= X / m);
                    }
                  };
            },
            PSEUDO: function (l, f) {
              var h,
                m =
                  t.pseudos[l] ||
                  t.setFilters[l.toLowerCase()] ||
                  j.error("unsupported pseudo: " + l);
              return m[v]
                ? m(f)
                : 1 < m.length
                ? ((h = [l, l, "", f]),
                  t.setFilters.hasOwnProperty(l.toLowerCase())
                    ? K(function (y, T) {
                        for (var C, k = m(y, f), w = k.length; w--; )
                          y[(C = ee.call(y, k[w]))] = !(T[C] = k[w]);
                      })
                    : function (y) {
                        return m(y, 0, h);
                      })
                : m;
            },
          },
          pseudos: {
            not: K(function (l) {
              var f = [],
                h = [],
                m = nn(l.replace(ot, "$1"));
              return m[v]
                ? K(function (y, T, C, k) {
                    for (var w, W = m(y, null, k, []), L = y.length; L--; )
                      (w = W[L]) && (y[L] = !(T[L] = w));
                  })
                : function (y, T, C) {
                    return (
                      (f[0] = y), m(f, null, C, h), (f[0] = null), !h.pop()
                    );
                  };
            }),
            has: K(function (l) {
              return function (f) {
                return 0 < j(l, f).length;
              };
            }),
            contains: K(function (l) {
              return (
                (l = l.replace(Z, se)),
                function (f) {
                  return -1 < (f.textContent || i.text(f)).indexOf(l);
                }
              );
            }),
            lang: K(function (l) {
              return (
                gt.test(l || "") || j.error("unsupported lang: " + l),
                (l = l.replace(Z, se).toLowerCase()),
                function (f) {
                  var h;
                  do
                    if (
                      (h = c
                        ? f.lang
                        : f.getAttribute("xml:lang") || f.getAttribute("lang"))
                    )
                      return (
                        (h = h.toLowerCase()) === l || h.indexOf(l + "-") === 0
                      );
                  while ((f = f.parentNode) && f.nodeType === 1);
                  return !1;
                }
              );
            }),
            target: function (l) {
              var f = A.location && A.location.hash;
              return f && f.slice(1) === l.id;
            },
            root: function (l) {
              return l === s;
            },
            focus: function (l) {
              return (
                l ===
                  (function () {
                    try {
                      return a.activeElement;
                    } catch {}
                  })() &&
                a.hasFocus() &&
                !!(l.type || l.href || ~l.tabIndex)
              );
            },
            enabled: At(!1),
            disabled: At(!0),
            checked: function (l) {
              return (
                (z(l, "input") && !!l.checked) ||
                (z(l, "option") && !!l.selected)
              );
            },
            selected: function (l) {
              return (
                l.parentNode && l.parentNode.selectedIndex, l.selected === !0
              );
            },
            empty: function (l) {
              for (l = l.firstChild; l; l = l.nextSibling)
                if (l.nodeType < 6) return !1;
              return !0;
            },
            parent: function (l) {
              return !t.pseudos.empty(l);
            },
            header: function (l) {
              return nt.test(l.nodeName);
            },
            input: function (l) {
              return He.test(l.nodeName);
            },
            button: function (l) {
              return (z(l, "input") && l.type === "button") || z(l, "button");
            },
            text: function (l) {
              var f;
              return (
                z(l, "input") &&
                l.type === "text" &&
                ((f = l.getAttribute("type")) == null ||
                  f.toLowerCase() === "text")
              );
            },
            first: _e(function () {
              return [0];
            }),
            last: _e(function (l, f) {
              return [f - 1];
            }),
            eq: _e(function (l, f, h) {
              return [h < 0 ? h + f : h];
            }),
            even: _e(function (l, f) {
              for (var h = 0; h < f; h += 2) l.push(h);
              return l;
            }),
            odd: _e(function (l, f) {
              for (var h = 1; h < f; h += 2) l.push(h);
              return l;
            }),
            lt: _e(function (l, f, h) {
              var m;
              for (m = h < 0 ? h + f : f < h ? f : h; 0 <= --m; ) l.push(m);
              return l;
            }),
            gt: _e(function (l, f, h) {
              for (var m = h < 0 ? h + f : h; ++m < f; ) l.push(m);
              return l;
            }),
          },
        }).pseudos.nth = t.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        t.pseudos[e] = Se(e);
      for (e in { submit: !0, reset: !0 }) t.pseudos[e] = rt(e);
      function Xn() {}
      function mt(l, f) {
        var h,
          m,
          y,
          T,
          C,
          k,
          w,
          W = N[l + " "];
        if (W) return f ? 0 : W.slice(0);
        for (C = l, k = [], w = t.preFilter; C; ) {
          for (T in ((h && !(m = G.exec(C))) ||
            (m && (C = C.slice(m[0].length) || C), k.push((y = []))),
          (h = !1),
          (m = ht.exec(C)) &&
            ((h = m.shift()),
            y.push({ value: h, type: m[0].replace(ot, " ") }),
            (C = C.slice(h.length))),
          t.filter))
            !(m = Ne[T].exec(C)) ||
              (w[T] && !(m = w[T](m))) ||
              ((h = m.shift()),
              y.push({ value: h, type: T, matches: m }),
              (C = C.slice(h.length)));
          if (!h) break;
        }
        return f ? C.length : C ? j.error(l) : N(l, k).slice(0);
      }
      function Dt(l) {
        for (var f = 0, h = l.length, m = ""; f < h; f++) m += l[f].value;
        return m;
      }
      function Nt(l, f, h) {
        var m = f.dir,
          y = f.next,
          T = y || m,
          C = h && T === "parentNode",
          k = x++;
        return f.first
          ? function (w, W, L) {
              for (; (w = w[m]); ) if (w.nodeType === 1 || C) return l(w, W, L);
              return !1;
            }
          : function (w, W, L) {
              var H,
                I,
                D = [d, k];
              if (L) {
                for (; (w = w[m]); )
                  if ((w.nodeType === 1 || C) && l(w, W, L)) return !0;
              } else
                for (; (w = w[m]); )
                  if (w.nodeType === 1 || C)
                    if (((I = w[v] || (w[v] = {})), y && z(w, y)))
                      w = w[m] || w;
                    else {
                      if ((H = I[T]) && H[0] === d && H[1] === k)
                        return (D[2] = H[2]);
                      if (((I[T] = D)[2] = l(w, W, L))) return !0;
                    }
              return !1;
            };
      }
      function Zt(l) {
        return 1 < l.length
          ? function (f, h, m) {
              for (var y = l.length; y--; ) if (!l[y](f, h, m)) return !1;
              return !0;
            }
          : l[0];
      }
      function Ot(l, f, h, m, y) {
        for (var T, C = [], k = 0, w = l.length, W = f != null; k < w; k++)
          (T = l[k]) && ((h && !h(T, m, y)) || (C.push(T), W && f.push(k)));
        return C;
      }
      function en(l, f, h, m, y, T) {
        return (
          m && !m[v] && (m = en(m)),
          y && !y[v] && (y = en(y, T)),
          K(function (C, k, w, W) {
            var L,
              H,
              I,
              D,
              te = [],
              oe = [],
              ie = k.length,
              fe =
                C ||
                (function (ye, X, ze) {
                  for (var xe = 0, Lt = X.length; xe < Lt; xe++)
                    j(ye, X[xe], ze);
                  return ze;
                })(f || "*", w.nodeType ? [w] : w, []),
              pe = !l || (!C && f) ? fe : Ot(fe, te, l, w, W);
            if (
              (h
                ? h(pe, (D = y || (C ? l : ie || m) ? [] : k), w, W)
                : (D = pe),
              m)
            )
              for (L = Ot(D, oe), m(L, [], w, W), H = L.length; H--; )
                (I = L[H]) && (D[oe[H]] = !(pe[oe[H]] = I));
            if (C) {
              if (y || l) {
                if (y) {
                  for (L = [], H = D.length; H--; )
                    (I = D[H]) && L.push((pe[H] = I));
                  y(null, (D = []), L, W);
                }
                for (H = D.length; H--; )
                  (I = D[H]) &&
                    -1 < (L = y ? ee.call(C, I) : te[H]) &&
                    (C[L] = !(k[L] = I));
              }
            } else (D = Ot(D === k ? D.splice(ie, D.length) : D)), y ? y(null, k, D, W) : g.apply(k, D);
          })
        );
      }
      function tn(l) {
        for (
          var f,
            h,
            m,
            y = l.length,
            T = t.relative[l[0].type],
            C = T || t.relative[" "],
            k = T ? 1 : 0,
            w = Nt(
              function (H) {
                return H === f;
              },
              C,
              !0
            ),
            W = Nt(
              function (H) {
                return -1 < ee.call(f, H);
              },
              C,
              !0
            ),
            L = [
              function (H, I, D) {
                var te =
                  (!T && (D || I != n)) ||
                  ((f = I).nodeType ? w(H, I, D) : W(H, I, D));
                return (f = null), te;
              },
            ];
          k < y;
          k++
        )
          if ((h = t.relative[l[k].type])) L = [Nt(Zt(L), h)];
          else {
            if ((h = t.filter[l[k].type].apply(null, l[k].matches))[v]) {
              for (m = ++k; m < y && !t.relative[l[m].type]; m++);
              return en(
                1 < k && Zt(L),
                1 < k &&
                  Dt(
                    l
                      .slice(0, k - 1)
                      .concat({ value: l[k - 2].type === " " ? "*" : "" })
                  ).replace(ot, "$1"),
                h,
                k < m && tn(l.slice(k, m)),
                m < y && tn((l = l.slice(m))),
                m < y && Dt(l)
              );
            }
            L.push(h);
          }
        return Zt(L);
      }
      function nn(l, f) {
        var h,
          m,
          y,
          T,
          C,
          k,
          w = [],
          W = [],
          L = O[l + " "];
        if (!L) {
          for (f || (f = mt(l)), h = f.length; h--; )
            (L = tn(f[h]))[v] ? w.push(L) : W.push(L);
          (L = O(
            l,
            ((m = W),
            (T = 0 < (y = w).length),
            (C = 0 < m.length),
            (k = function (H, I, D, te, oe) {
              var ie,
                fe,
                pe,
                ye = 0,
                X = "0",
                ze = H && [],
                xe = [],
                Lt = n,
                Gn = H || (C && t.find.TAG("*", oe)),
                Jn = (d += Lt == null ? 1 : Math.random() || 0.1),
                Xr = Gn.length;
              for (
                oe && (n = I == a || I || oe);
                X !== Xr && (ie = Gn[X]) != null;
                X++
              ) {
                if (C && ie) {
                  for (
                    fe = 0, I || ie.ownerDocument == a || (Me(ie), (D = !c));
                    (pe = m[fe++]);

                  )
                    if (pe(ie, I || a, D)) {
                      g.call(te, ie);
                      break;
                    }
                  oe && (d = Jn);
                }
                T && ((ie = !pe && ie) && ye--, H && ze.push(ie));
              }
              if (((ye += X), T && X !== ye)) {
                for (fe = 0; (pe = y[fe++]); ) pe(ze, xe, I, D);
                if (H) {
                  if (0 < ye)
                    for (; X--; ) ze[X] || xe[X] || (xe[X] = ir.call(te));
                  xe = Ot(xe);
                }
                g.apply(te, xe),
                  oe &&
                    !H &&
                    0 < xe.length &&
                    1 < ye + y.length &&
                    i.uniqueSort(te);
              }
              return oe && ((d = Jn), (n = Lt)), ze;
            }),
            T ? K(k) : k)
          )).selector = l;
        }
        return L;
      }
      function Vn(l, f, h, m) {
        var y,
          T,
          C,
          k,
          w,
          W = typeof l == "function" && l,
          L = !m && mt((l = W.selector || l));
        if (((h = h || []), L.length === 1)) {
          if (
            2 < (T = L[0] = L[0].slice(0)).length &&
            (C = T[0]).type === "ID" &&
            f.nodeType === 9 &&
            c &&
            t.relative[T[1].type]
          ) {
            if (!(f = (t.find.ID(C.matches[0].replace(Z, se), f) || [])[0]))
              return h;
            W && (f = f.parentNode), (l = l.slice(T.shift().value.length));
          }
          for (
            y = Ne.needsContext.test(l) ? 0 : T.length;
            y-- && ((C = T[y]), !t.relative[(k = C.type)]);

          )
            if (
              (w = t.find[k]) &&
              (m = w(
                C.matches[0].replace(Z, se),
                (re.test(T[0].type) && Kt(f.parentNode)) || f
              ))
            ) {
              if ((T.splice(y, 1), !(l = m.length && Dt(T))))
                return g.apply(h, m), h;
              break;
            }
        }
        return (
          (W || nn(l, L))(
            m,
            f,
            !c,
            h,
            !f || (re.test(l) && Kt(f.parentNode)) || f
          ),
          h
        );
      }
      (Xn.prototype = t.filters = t.pseudos),
        (t.setFilters = new Xn()),
        (P.sortStable = v.split("").sort(ne).join("") === v),
        Me(),
        (P.sortDetached = U(function (l) {
          return 1 & l.compareDocumentPosition(a.createElement("fieldset"));
        })),
        (i.find = j),
        (i.expr[":"] = i.expr.pseudos),
        (i.unique = i.uniqueSort),
        (j.compile = nn),
        (j.select = Vn),
        (j.setDocument = Me),
        (j.tokenize = mt),
        (j.escape = i.escapeSelector),
        (j.getText = i.text),
        (j.isXML = i.isXMLDoc),
        (j.selectors = i.expr),
        (j.support = i.support),
        (j.uniqueSort = i.uniqueSort);
    })();
    var Ve = function (e, t, n) {
        for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (o && i(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      sn = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      },
      ln = i.expr.match.needsContext,
      un = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Pt(e, t, n) {
      return M(t)
        ? i.grep(e, function (r, o) {
            return !!t.call(r, o, r) !== n;
          })
        : t.nodeType
        ? i.grep(e, function (r) {
            return (r === t) !== n;
          })
        : typeof t != "string"
        ? i.grep(e, function (r) {
            return -1 < ee.call(t, r) !== n;
          })
        : i.filter(t, e, n);
    }
    (i.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        t.length === 1 && r.nodeType === 1
          ? i.find.matchesSelector(r, e)
            ? [r]
            : []
          : i.find.matches(
              e,
              i.grep(t, function (o) {
                return o.nodeType === 1;
              })
            )
      );
    }),
      i.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            o = this;
          if (typeof e != "string")
            return this.pushStack(
              i(e).filter(function () {
                for (t = 0; t < r; t++) if (i.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
          return 1 < r ? i.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(Pt(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(Pt(this, e || [], !0));
        },
        is: function (e) {
          return !!Pt(
            this,
            typeof e == "string" && ln.test(e) ? i(e) : e || [],
            !1
          ).length;
        },
      });
    var cn,
      ur = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((i.fn.init = function (e, t, n) {
      var r, o;
      if (!e) return this;
      if (((n = n || cn), typeof e == "string")) {
        if (
          !(r =
            e[0] === "<" && e[e.length - 1] === ">" && 3 <= e.length
              ? [null, e, null]
              : ur.exec(e)) ||
          (!r[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof i ? t[0] : t),
            i.merge(
              this,
              i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : q, !0)
            ),
            un.test(r[1]) && i.isPlainObject(t))
          )
            for (r in t) M(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (o = q.getElementById(r[2])) && ((this[0] = o), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : M(e)
        ? n.ready !== void 0
          ? n.ready(e)
          : e(i)
        : i.makeArray(e, this);
    }).prototype = i.fn),
      (cn = i(q));
    var cr = /^(?:parents|prev(?:Until|All))/,
      fr = { children: !0, contents: !0, next: !0, prev: !0 };
    function fn(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; );
      return e;
    }
    i.fn.extend({
      has: function (e) {
        var t = i(e, this),
          n = t.length;
        return this.filter(function () {
          for (var r = 0; r < n; r++) if (i.contains(this, t[r])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          o = this.length,
          a = [],
          s = typeof e != "string" && i(e);
        if (!ln.test(e)) {
          for (; r < o; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? -1 < s.index(n)
                  : n.nodeType === 1 && i.find.matchesSelector(n, e))
              ) {
                a.push(n);
                break;
              }
        }
        return this.pushStack(1 < a.length ? i.uniqueSort(a) : a);
      },
      index: function (e) {
        return e
          ? typeof e == "string"
            ? ee.call(i(e), this[0])
            : ee.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))));
      },
      addBack: function (e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      i.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
          },
          parents: function (e) {
            return Ve(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return Ve(e, "parentNode", n);
          },
          next: function (e) {
            return fn(e, "nextSibling");
          },
          prev: function (e) {
            return fn(e, "previousSibling");
          },
          nextAll: function (e) {
            return Ve(e, "nextSibling");
          },
          prevAll: function (e) {
            return Ve(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return Ve(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return Ve(e, "previousSibling", n);
          },
          siblings: function (e) {
            return sn((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return sn(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument != null && _(e.contentDocument)
              ? e.contentDocument
              : (z(e, "template") && (e = e.content || e),
                i.merge([], e.childNodes));
          },
        },
        function (e, t) {
          i.fn[e] = function (n, r) {
            var o = i.map(this, t, n);
            return (
              e.slice(-5) !== "Until" && (r = n),
              r && typeof r == "string" && (o = i.filter(r, o)),
              1 < this.length &&
                (fr[e] || i.uniqueSort(o), cr.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var be = /[^\x20\t\r\n\f]+/g;
    function Ge(e) {
      return e;
    }
    function bt(e) {
      throw e;
    }
    function pn(e, t, n, r) {
      var o;
      try {
        e && M((o = e.promise))
          ? o.call(e).done(t).fail(n)
          : e && M((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (a) {
        n.apply(void 0, [a]);
      }
    }
    (i.Callbacks = function (e) {
      var t, n;
      e =
        typeof e == "string"
          ? ((t = e),
            (n = {}),
            i.each(t.match(be) || [], function (d, x) {
              n[x] = !0;
            }),
            n)
          : i.extend({}, e);
      var r,
        o,
        a,
        s,
        c = [],
        u = [],
        p = -1,
        g = function () {
          for (s = s || e.once, a = r = !0; u.length; p = -1)
            for (o = u.shift(); ++p < c.length; )
              c[p].apply(o[0], o[1]) === !1 &&
                e.stopOnFalse &&
                ((p = c.length), (o = !1));
          e.memory || (o = !1), (r = !1), s && (c = o ? [] : "");
        },
        v = {
          add: function () {
            return (
              c &&
                (o && !r && ((p = c.length - 1), u.push(o)),
                (function d(x) {
                  i.each(x, function (S, N) {
                    M(N)
                      ? (e.unique && v.has(N)) || c.push(N)
                      : N && N.length && Xe(N) !== "string" && d(N);
                  });
                })(arguments),
                o && !r && g()),
              this
            );
          },
          remove: function () {
            return (
              i.each(arguments, function (d, x) {
                for (var S; -1 < (S = i.inArray(x, c, S)); )
                  c.splice(S, 1), S <= p && p--;
              }),
              this
            );
          },
          has: function (d) {
            return d ? -1 < i.inArray(d, c) : 0 < c.length;
          },
          empty: function () {
            return c && (c = []), this;
          },
          disable: function () {
            return (s = u = []), (c = o = ""), this;
          },
          disabled: function () {
            return !c;
          },
          lock: function () {
            return (s = u = []), o || r || (c = o = ""), this;
          },
          locked: function () {
            return !!s;
          },
          fireWith: function (d, x) {
            return (
              s ||
                ((x = [d, (x = x || []).slice ? x.slice() : x]),
                u.push(x),
                r || g()),
              this
            );
          },
          fire: function () {
            return v.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!a;
          },
        };
      return v;
    }),
      i.extend({
        Deferred: function (e) {
          var t = [
              [
                "notify",
                "progress",
                i.Callbacks("memory"),
                i.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                i.Callbacks("once memory"),
                i.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                i.Callbacks("once memory"),
                i.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            n = "pending",
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (a) {
                return r.then(null, a);
              },
              pipe: function () {
                var a = arguments;
                return i
                  .Deferred(function (s) {
                    i.each(t, function (c, u) {
                      var p = M(a[u[4]]) && a[u[4]];
                      o[u[1]](function () {
                        var g = p && p.apply(this, arguments);
                        g && M(g.promise)
                          ? g
                              .promise()
                              .progress(s.notify)
                              .done(s.resolve)
                              .fail(s.reject)
                          : s[u[0] + "With"](this, p ? [g] : arguments);
                      });
                    }),
                      (a = null);
                  })
                  .promise();
              },
              then: function (a, s, c) {
                var u = 0;
                function p(g, v, d, x) {
                  return function () {
                    var S = this,
                      N = arguments,
                      O = function () {
                        var ne, Te;
                        if (!(g < u)) {
                          if ((ne = d.apply(S, N)) === v.promise())
                            throw new TypeError("Thenable self-resolution");
                          (Te =
                            ne &&
                            (typeof ne == "object" ||
                              typeof ne == "function") &&
                            ne.then),
                            M(Te)
                              ? x
                                ? Te.call(ne, p(u, v, Ge, x), p(u, v, bt, x))
                                : (u++,
                                  Te.call(
                                    ne,
                                    p(u, v, Ge, x),
                                    p(u, v, bt, x),
                                    p(u, v, Ge, v.notifyWith)
                                  ))
                              : (d !== Ge && ((S = void 0), (N = [ne])),
                                (x || v.resolveWith)(S, N));
                        }
                      },
                      Y = x
                        ? O
                        : function () {
                            try {
                              O();
                            } catch (ne) {
                              i.Deferred.exceptionHook &&
                                i.Deferred.exceptionHook(ne, Y.error),
                                u <= g + 1 &&
                                  (d !== bt && ((S = void 0), (N = [ne])),
                                  v.rejectWith(S, N));
                            }
                          };
                    g
                      ? Y()
                      : (i.Deferred.getErrorHook
                          ? (Y.error = i.Deferred.getErrorHook())
                          : i.Deferred.getStackHook &&
                            (Y.error = i.Deferred.getStackHook()),
                        A.setTimeout(Y));
                  };
                }
                return i
                  .Deferred(function (g) {
                    t[0][3].add(p(0, g, M(c) ? c : Ge, g.notifyWith)),
                      t[1][3].add(p(0, g, M(a) ? a : Ge)),
                      t[2][3].add(p(0, g, M(s) ? s : bt));
                  })
                  .promise();
              },
              promise: function (a) {
                return a != null ? i.extend(a, r) : r;
              },
            },
            o = {};
          return (
            i.each(t, function (a, s) {
              var c = s[2],
                u = s[5];
              (r[s[1]] = c.add),
                u &&
                  c.add(
                    function () {
                      n = u;
                    },
                    t[3 - a][2].disable,
                    t[3 - a][3].disable,
                    t[0][2].lock,
                    t[0][3].lock
                  ),
                c.add(s[3].fire),
                (o[s[0]] = function () {
                  return (
                    o[s[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[s[0] + "With"] = c.fireWith);
            }),
            r.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            o = $.call(arguments),
            a = i.Deferred(),
            s = function (c) {
              return function (u) {
                (r[c] = this),
                  (o[c] = 1 < arguments.length ? $.call(arguments) : u),
                  --t || a.resolveWith(r, o);
              };
            };
          if (
            t <= 1 &&
            (pn(e, a.done(s(n)).resolve, a.reject, !t),
            a.state() === "pending" || M(o[n] && o[n].then))
          )
            return a.then();
          for (; n--; ) pn(o[n], s(n), a.reject);
          return a.promise();
        },
      });
    var pr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (i.Deferred.exceptionHook = function (e, t) {
      A.console &&
        A.console.warn &&
        e &&
        pr.test(e.name) &&
        A.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (i.readyException = function (e) {
        A.setTimeout(function () {
          throw e;
        });
      });
    var Mt = i.Deferred();
    function wt() {
      q.removeEventListener("DOMContentLoaded", wt),
        A.removeEventListener("load", wt),
        i.ready();
    }
    (i.fn.ready = function (e) {
      return (
        Mt.then(e).catch(function (t) {
          i.readyException(t);
        }),
        this
      );
    }),
      i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (e === !0 ? --i.readyWait : i.isReady) ||
            ((i.isReady = !0) !== e && 0 < --i.readyWait) ||
            Mt.resolveWith(q, [i]);
        },
      }),
      (i.ready.then = Mt.then),
      q.readyState === "complete" ||
      (q.readyState !== "loading" && !q.documentElement.doScroll)
        ? A.setTimeout(i.ready)
        : (q.addEventListener("DOMContentLoaded", wt),
          A.addEventListener("load", wt));
    var Ae = function (e, t, n, r, o, a, s) {
        var c = 0,
          u = e.length,
          p = n == null;
        if (Xe(n) === "object")
          for (c in ((o = !0), n)) Ae(e, t, c, n[c], !0, a, s);
        else if (
          r !== void 0 &&
          ((o = !0),
          M(r) || (s = !0),
          p &&
            (s
              ? (t.call(e, r), (t = null))
              : ((p = t),
                (t = function (g, v, d) {
                  return p.call(i(g), d);
                }))),
          t)
        )
          for (; c < u; c++) t(e[c], n, s ? r : r.call(e[c], c, t(e[c], n)));
        return o ? e : p ? t.call(e) : u ? t(e[0], n) : a;
      },
      dr = /^-ms-/,
      hr = /-([a-z])/g;
    function gr(e, t) {
      return t.toUpperCase();
    }
    function we(e) {
      return e.replace(dr, "ms-").replace(hr, gr);
    }
    var at = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function st() {
      this.expando = i.expando + st.uid++;
    }
    (st.uid = 1),
      (st.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              at(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            o = this.cache(e);
          if (typeof t == "string") o[we(t)] = n;
          else for (r in t) o[we(r)] = t[r];
          return o;
        },
        get: function (e, t) {
          return t === void 0
            ? this.cache(e)
            : e[this.expando] && e[this.expando][we(t)];
        },
        access: function (e, t, n) {
          return t === void 0 || (t && typeof t == "string" && n === void 0)
            ? this.get(e, t)
            : (this.set(e, t, n), n !== void 0 ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (r !== void 0) {
            if (t !== void 0)
              for (
                n = (t = Array.isArray(t)
                  ? t.map(we)
                  : ((t = we(t)) in r)
                  ? [t]
                  : t.match(be) || []).length;
                n--;

              )
                delete r[t[n]];
            (t === void 0 || i.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return t !== void 0 && !i.isEmptyObject(t);
        },
      });
    var E = new st(),
      ue = new st(),
      mr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      vr = /[A-Z]/g;
    function dn(e, t, n) {
      var r, o;
      if (n === void 0 && e.nodeType === 1)
        if (
          ((r = "data-" + t.replace(vr, "-$&").toLowerCase()),
          typeof (n = e.getAttribute(r)) == "string")
        ) {
          try {
            n =
              (o = n) === "true" ||
              (o !== "false" &&
                (o === "null"
                  ? null
                  : o === +o + ""
                  ? +o
                  : mr.test(o)
                  ? JSON.parse(o)
                  : o));
          } catch {}
          ue.set(e, t, n);
        } else n = void 0;
      return n;
    }
    i.extend({
      hasData: function (e) {
        return ue.hasData(e) || E.hasData(e);
      },
      data: function (e, t, n) {
        return ue.access(e, t, n);
      },
      removeData: function (e, t) {
        ue.remove(e, t);
      },
      _data: function (e, t, n) {
        return E.access(e, t, n);
      },
      _removeData: function (e, t) {
        E.remove(e, t);
      },
    }),
      i.fn.extend({
        data: function (e, t) {
          var n,
            r,
            o,
            a = this[0],
            s = a && a.attributes;
          if (e === void 0) {
            if (
              this.length &&
              ((o = ue.get(a)), a.nodeType === 1 && !E.get(a, "hasDataAttrs"))
            ) {
              for (n = s.length; n--; )
                s[n] &&
                  (r = s[n].name).indexOf("data-") === 0 &&
                  ((r = we(r.slice(5))), dn(a, r, o[r]));
              E.set(a, "hasDataAttrs", !0);
            }
            return o;
          }
          return typeof e == "object"
            ? this.each(function () {
                ue.set(this, e);
              })
            : Ae(
                this,
                function (c) {
                  var u;
                  if (a && c === void 0)
                    return (u = ue.get(a, e)) !== void 0 ||
                      (u = dn(a, e)) !== void 0
                      ? u
                      : void 0;
                  this.each(function () {
                    ue.set(this, e, c);
                  });
                },
                null,
                t,
                1 < arguments.length,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            ue.remove(this, e);
          });
        },
      }),
      i.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = E.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = E.access(e, t, i.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = i.queue(e, t),
            r = n.length,
            o = n.shift(),
            a = i._queueHooks(e, t);
          o === "inprogress" && ((o = n.shift()), r--),
            o &&
              (t === "fx" && n.unshift("inprogress"),
              delete a.stop,
              o.call(
                e,
                function () {
                  i.dequeue(e, t);
                },
                a
              )),
            !r && a && a.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            E.get(e, n) ||
            E.access(e, n, {
              empty: i.Callbacks("once memory").add(function () {
                E.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      i.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            typeof e != "string" && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? i.queue(this[0], e)
              : t === void 0
              ? this
              : this.each(function () {
                  var r = i.queue(this, e, t);
                  i._queueHooks(this, e),
                    e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            i.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            o = i.Deferred(),
            a = this,
            s = this.length,
            c = function () {
              --r || o.resolveWith(a, [a]);
            };
          for (
            typeof e != "string" && ((t = e), (e = void 0)), e = e || "fx";
            s--;

          )
            (n = E.get(a[s], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(c));
          return c(), o.promise(t);
        },
      });
    var hn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      lt = new RegExp("^(?:([+-])=|)(" + hn + ")([a-z%]*)$", "i"),
      De = ["Top", "Right", "Bottom", "Left"],
      Ie = q.documentElement,
      Je = function (e) {
        return i.contains(e.ownerDocument, e);
      },
      yr = { composed: !0 };
    Ie.getRootNode &&
      (Je = function (e) {
        return (
          i.contains(e.ownerDocument, e) ||
          e.getRootNode(yr) === e.ownerDocument
        );
      });
    var Tt = function (e, t) {
      return (
        (e = t || e).style.display === "none" ||
        (e.style.display === "" && Je(e) && i.css(e, "display") === "none")
      );
    };
    function gn(e, t, n, r) {
      var o,
        a,
        s = 20,
        c = r
          ? function () {
              return r.cur();
            }
          : function () {
              return i.css(e, t, "");
            },
        u = c(),
        p = (n && n[3]) || (i.cssNumber[t] ? "" : "px"),
        g =
          e.nodeType &&
          (i.cssNumber[t] || (p !== "px" && +u)) &&
          lt.exec(i.css(e, t));
      if (g && g[3] !== p) {
        for (u /= 2, p = p || g[3], g = +u || 1; s--; )
          i.style(e, t, g + p),
            (1 - a) * (1 - (a = c() / u || 0.5)) <= 0 && (s = 0),
            (g /= a);
        (g *= 2), i.style(e, t, g + p), (n = n || []);
      }
      return (
        n &&
          ((g = +g || +u || 0),
          (o = n[1] ? g + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = p), (r.start = g), (r.end = o))),
        o
      );
    }
    var mn = {};
    function Ye(e, t) {
      for (var n, r, o, a, s, c, u, p = [], g = 0, v = e.length; g < v; g++)
        (r = e[g]).style &&
          ((n = r.style.display),
          t
            ? (n === "none" &&
                ((p[g] = E.get(r, "display") || null),
                p[g] || (r.style.display = "")),
              r.style.display === "" &&
                Tt(r) &&
                (p[g] =
                  ((u = s = a = void 0),
                  (s = (o = r).ownerDocument),
                  (c = o.nodeName),
                  (u = mn[c]) ||
                    ((a = s.body.appendChild(s.createElement(c))),
                    (u = i.css(a, "display")),
                    a.parentNode.removeChild(a),
                    u === "none" && (u = "block"),
                    (mn[c] = u)))))
            : n !== "none" && ((p[g] = "none"), E.set(r, "display", n)));
      for (g = 0; g < v; g++) p[g] != null && (e[g].style.display = p[g]);
      return e;
    }
    i.fn.extend({
      show: function () {
        return Ye(this, !0);
      },
      hide: function () {
        return Ye(this);
      },
      toggle: function (e) {
        return typeof e == "boolean"
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Tt(this) ? i(this).show() : i(this).hide();
            });
      },
    });
    var Fe,
      Ct,
      ut = /^(?:checkbox|radio)$/i,
      vn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      yn = /^$|^module$|\/(?:java|ecma)script/i;
    (Fe = q.createDocumentFragment().appendChild(q.createElement("div"))),
      (Ct = q.createElement("input")).setAttribute("type", "radio"),
      Ct.setAttribute("checked", "checked"),
      Ct.setAttribute("name", "t"),
      Fe.appendChild(Ct),
      (P.checkClone = Fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (Fe.innerHTML = "<textarea>x</textarea>"),
      (P.noCloneChecked = !!Fe.cloneNode(!0).lastChild.defaultValue),
      (Fe.innerHTML = "<option></option>"),
      (P.option = !!Fe.lastChild);
    var he = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    function ce(e, t) {
      var n;
      return (
        (n =
          typeof e.getElementsByTagName < "u"
            ? e.getElementsByTagName(t || "*")
            : typeof e.querySelectorAll < "u"
            ? e.querySelectorAll(t || "*")
            : []),
        t === void 0 || (t && z(e, t)) ? i.merge([e], n) : n
      );
    }
    function Rt(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        E.set(e[n], "globalEval", !t || E.get(t[n], "globalEval"));
    }
    (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
      (he.th = he.td),
      P.option ||
        (he.optgroup = he.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    var xr = /<|&#?\w+;/;
    function xn(e, t, n, r, o) {
      for (
        var a,
          s,
          c,
          u,
          p,
          g,
          v = t.createDocumentFragment(),
          d = [],
          x = 0,
          S = e.length;
        x < S;
        x++
      )
        if ((a = e[x]) || a === 0)
          if (Xe(a) === "object") i.merge(d, a.nodeType ? [a] : a);
          else if (xr.test(a)) {
            for (
              s = s || v.appendChild(t.createElement("div")),
                c = (vn.exec(a) || ["", ""])[1].toLowerCase(),
                u = he[c] || he._default,
                s.innerHTML = u[1] + i.htmlPrefilter(a) + u[2],
                g = u[0];
              g--;

            )
              s = s.lastChild;
            i.merge(d, s.childNodes), ((s = v.firstChild).textContent = "");
          } else d.push(t.createTextNode(a));
      for (v.textContent = "", x = 0; (a = d[x++]); )
        if (r && -1 < i.inArray(a, r)) o && o.push(a);
        else if (
          ((p = Je(a)), (s = ce(v.appendChild(a), "script")), p && Rt(s), n)
        )
          for (g = 0; (a = s[g++]); ) yn.test(a.type || "") && n.push(a);
      return v;
    }
    var bn = /^([^.]*)(?:\.(.+)|)/;
    function Qe() {
      return !0;
    }
    function Ke() {
      return !1;
    }
    function It(e, t, n, r, o, a) {
      var s, c;
      if (typeof t == "object") {
        for (c in (typeof n != "string" && ((r = r || n), (n = void 0)), t))
          It(e, c, n, r, t[c], a);
        return e;
      }
      if (
        (r == null && o == null
          ? ((o = n), (r = n = void 0))
          : o == null &&
            (typeof n == "string"
              ? ((o = r), (r = void 0))
              : ((o = r), (r = n), (n = void 0))),
        o === !1)
      )
        o = Ke;
      else if (!o) return e;
      return (
        a === 1 &&
          ((s = o),
          ((o = function (u) {
            return i().off(u), s.apply(this, arguments);
          }).guid = s.guid || (s.guid = i.guid++))),
        e.each(function () {
          i.event.add(this, t, o, r, n);
        })
      );
    }
    function kt(e, t, n) {
      n
        ? (E.set(e, t, !1),
          i.event.add(e, t, {
            namespace: !1,
            handler: function (r) {
              var o,
                a = E.get(this, t);
              if (1 & r.isTrigger && this[t]) {
                if (a)
                  (i.event.special[t] || {}).delegateType &&
                    r.stopPropagation();
                else if (
                  ((a = $.call(arguments)),
                  E.set(this, t, a),
                  this[t](),
                  (o = E.get(this, t)),
                  E.set(this, t, !1),
                  a !== o)
                )
                  return r.stopImmediatePropagation(), r.preventDefault(), o;
              } else
                a &&
                  (E.set(this, t, i.event.trigger(a[0], a.slice(1), this)),
                  r.stopPropagation(),
                  (r.isImmediatePropagationStopped = Qe));
            },
          }))
        : E.get(e, t) === void 0 && i.event.add(e, t, Qe);
    }
    (i.event = {
      global: {},
      add: function (e, t, n, r, o) {
        var a,
          s,
          c,
          u,
          p,
          g,
          v,
          d,
          x,
          S,
          N,
          O = E.get(e);
        if (at(e))
          for (
            n.handler && ((n = (a = n).handler), (o = a.selector)),
              o && i.find.matchesSelector(Ie, o),
              n.guid || (n.guid = i.guid++),
              (u = O.events) || (u = O.events = Object.create(null)),
              (s = O.handle) ||
                (s = O.handle =
                  function (Y) {
                    return typeof i < "u" && i.event.triggered !== Y.type
                      ? i.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              p = (t = (t || "").match(be) || [""]).length;
            p--;

          )
            (x = N = (c = bn.exec(t[p]) || [])[1]),
              (S = (c[2] || "").split(".").sort()),
              x &&
                ((v = i.event.special[x] || {}),
                (x = (o ? v.delegateType : v.bindType) || x),
                (v = i.event.special[x] || {}),
                (g = i.extend(
                  {
                    type: x,
                    origType: N,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && i.expr.match.needsContext.test(o),
                    namespace: S.join("."),
                  },
                  a
                )),
                (d = u[x]) ||
                  (((d = u[x] = []).delegateCount = 0),
                  (v.setup && v.setup.call(e, r, S, s) !== !1) ||
                    (e.addEventListener && e.addEventListener(x, s))),
                v.add &&
                  (v.add.call(e, g),
                  g.handler.guid || (g.handler.guid = n.guid)),
                o ? d.splice(d.delegateCount++, 0, g) : d.push(g),
                (i.event.global[x] = !0));
      },
      remove: function (e, t, n, r, o) {
        var a,
          s,
          c,
          u,
          p,
          g,
          v,
          d,
          x,
          S,
          N,
          O = E.hasData(e) && E.get(e);
        if (O && (u = O.events)) {
          for (p = (t = (t || "").match(be) || [""]).length; p--; )
            if (
              ((x = N = (c = bn.exec(t[p]) || [])[1]),
              (S = (c[2] || "").split(".").sort()),
              x)
            ) {
              for (
                v = i.event.special[x] || {},
                  d = u[(x = (r ? v.delegateType : v.bindType) || x)] || [],
                  c =
                    c[2] &&
                    new RegExp("(^|\\.)" + S.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = a = d.length;
                a--;

              )
                (g = d[a]),
                  (!o && N !== g.origType) ||
                    (n && n.guid !== g.guid) ||
                    (c && !c.test(g.namespace)) ||
                    (r && r !== g.selector && (r !== "**" || !g.selector)) ||
                    (d.splice(a, 1),
                    g.selector && d.delegateCount--,
                    v.remove && v.remove.call(e, g));
              s &&
                !d.length &&
                ((v.teardown && v.teardown.call(e, S, O.handle) !== !1) ||
                  i.removeEvent(e, x, O.handle),
                delete u[x]);
            } else for (x in u) i.event.remove(e, x + t[p], n, r, !0);
          i.isEmptyObject(u) && E.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          o,
          a,
          s,
          c = new Array(arguments.length),
          u = i.event.fix(e),
          p = (E.get(this, "events") || Object.create(null))[u.type] || [],
          g = i.event.special[u.type] || {};
        for (c[0] = u, t = 1; t < arguments.length; t++) c[t] = arguments[t];
        if (
          ((u.delegateTarget = this),
          !g.preDispatch || g.preDispatch.call(this, u) !== !1)
        ) {
          for (
            s = i.event.handlers.call(this, u, p), t = 0;
            (o = s[t++]) && !u.isPropagationStopped();

          )
            for (
              u.currentTarget = o.elem, n = 0;
              (a = o.handlers[n++]) && !u.isImmediatePropagationStopped();

            )
              (u.rnamespace &&
                a.namespace !== !1 &&
                !u.rnamespace.test(a.namespace)) ||
                ((u.handleObj = a),
                (u.data = a.data),
                (r = (
                  (i.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, c)) !== void 0 &&
                  (u.result = r) === !1 &&
                  (u.preventDefault(), u.stopPropagation()));
          return g.postDispatch && g.postDispatch.call(this, u), u.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          o,
          a,
          s,
          c = [],
          u = t.delegateCount,
          p = e.target;
        if (u && p.nodeType && !(e.type === "click" && 1 <= e.button)) {
          for (; p !== this; p = p.parentNode || this)
            if (p.nodeType === 1 && (e.type !== "click" || p.disabled !== !0)) {
              for (a = [], s = {}, n = 0; n < u; n++)
                s[(o = (r = t[n]).selector + " ")] === void 0 &&
                  (s[o] = r.needsContext
                    ? -1 < i(o, this).index(p)
                    : i.find(o, this, null, [p]).length),
                  s[o] && a.push(r);
              a.length && c.push({ elem: p, handlers: a });
            }
        }
        return (
          (p = this),
          u < t.length && c.push({ elem: p, handlers: t.slice(u) }),
          c
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: M(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            });
          },
        });
      },
      fix: function (e) {
        return e[i.expando] ? e : new i.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              ut.test(t.type) && t.click && z(t, "input") && kt(t, "click", !0),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              ut.test(t.type) && t.click && z(t, "input") && kt(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (ut.test(t.type) &&
                t.click &&
                z(t, "input") &&
                E.get(t, "click")) ||
              z(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== void 0 &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (i.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (i.Event = function (e, t) {
        if (!(this instanceof i.Event)) return new i.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === void 0 && e.returnValue === !1)
                ? Qe
                : Ke),
            (this.target =
              e.target && e.target.nodeType === 3
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && i.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[i.expando] = !0);
      }),
      (i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: Ke,
        isPropagationStopped: Ke,
        isImmediatePropagationStopped: Ke,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = Qe),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = Qe),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = Qe),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      i.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          code: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: !0,
        },
        i.event.addProp
      ),
      i.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        function n(r) {
          if (q.documentMode) {
            var o = E.get(this, "handle"),
              a = i.event.fix(r);
            (a.type = r.type === "focusin" ? "focus" : "blur"),
              (a.isSimulated = !0),
              o(r),
              a.target === a.currentTarget && o(a);
          } else i.event.simulate(t, r.target, i.event.fix(r));
        }
        (i.event.special[e] = {
          setup: function () {
            var r;
            if ((kt(this, e, !0), !q.documentMode)) return !1;
            (r = E.get(this, t)) || this.addEventListener(t, n),
              E.set(this, t, (r || 0) + 1);
          },
          trigger: function () {
            return kt(this, e), !0;
          },
          teardown: function () {
            var r;
            if (!q.documentMode) return !1;
            (r = E.get(this, t) - 1)
              ? E.set(this, t, r)
              : (this.removeEventListener(t, n), E.remove(this, t));
          },
          _default: function (r) {
            return E.get(r.target, e);
          },
          delegateType: t,
        }),
          (i.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                o = q.documentMode ? this : r,
                a = E.get(o, t);
              a ||
                (q.documentMode
                  ? this.addEventListener(t, n)
                  : r.addEventListener(e, n, !0)),
                E.set(o, t, (a || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                o = q.documentMode ? this : r,
                a = E.get(o, t) - 1;
              a
                ? E.set(o, t, a)
                : (q.documentMode
                    ? this.removeEventListener(t, n)
                    : r.removeEventListener(e, n, !0),
                  E.remove(o, t));
            },
          });
      }),
      i.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
              var r,
                o = n.relatedTarget,
                a = n.handleObj;
              return (
                (o && (o === this || i.contains(this, o))) ||
                  ((n.type = a.origType),
                  (r = a.handler.apply(this, arguments)),
                  (n.type = t)),
                r
              );
            },
          };
        }
      ),
      i.fn.extend({
        on: function (e, t, n, r) {
          return It(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return It(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              i(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if (typeof e == "object") {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (t !== !1 && typeof t != "function") || ((n = t), (t = void 0)),
            n === !1 && (n = Ke),
            this.each(function () {
              i.event.remove(this, e, n, t);
            })
          );
        },
      });
    var br = /<script|<style|<link/i,
      wr = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Tr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function wn(e, t) {
      return (
        (z(e, "table") &&
          z(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
          i(e).children("tbody")[0]) ||
        e
      );
    }
    function Cr(e) {
      return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
    }
    function kr(e) {
      return (
        (e.type || "").slice(0, 5) === "true/"
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function Tn(e, t) {
      var n, r, o, a, s, c;
      if (t.nodeType === 1) {
        if (E.hasData(e) && (c = E.get(e).events))
          for (o in (E.remove(t, "handle events"), c))
            for (n = 0, r = c[o].length; n < r; n++) i.event.add(t, o, c[o][n]);
        ue.hasData(e) &&
          ((a = ue.access(e)), (s = i.extend({}, a)), ue.set(t, s));
      }
    }
    function Ze(e, t, n, r) {
      t = Oe(t);
      var o,
        a,
        s,
        c,
        u,
        p,
        g = 0,
        v = e.length,
        d = v - 1,
        x = t[0],
        S = M(x);
      if (S || (1 < v && typeof x == "string" && !P.checkClone && wr.test(x)))
        return e.each(function (N) {
          var O = e.eq(N);
          S && (t[0] = x.call(this, N, O.html())), Ze(O, t, n, r);
        });
      if (
        v &&
        ((a = (o = xn(t, e[0].ownerDocument, !1, e, r)).firstChild),
        o.childNodes.length === 1 && (o = a),
        a || r)
      ) {
        for (c = (s = i.map(ce(o, "script"), Cr)).length; g < v; g++)
          (u = o),
            g !== d &&
              ((u = i.clone(u, !0, !0)), c && i.merge(s, ce(u, "script"))),
            n.call(e[g], u, g);
        if (c)
          for (
            p = s[s.length - 1].ownerDocument, i.map(s, kr), g = 0;
            g < c;
            g++
          )
            (u = s[g]),
              yn.test(u.type || "") &&
                !E.access(u, "globalEval") &&
                i.contains(p, u) &&
                (u.src && (u.type || "").toLowerCase() !== "module"
                  ? i._evalUrl &&
                    !u.noModule &&
                    i._evalUrl(
                      u.src,
                      { nonce: u.nonce || u.getAttribute("nonce") },
                      p
                    )
                  : on(u.textContent.replace(Tr, ""), u, p));
      }
      return e;
    }
    function Cn(e, t, n) {
      for (var r, o = t ? i.filter(t, e) : e, a = 0; (r = o[a]) != null; a++)
        n || r.nodeType !== 1 || i.cleanData(ce(r)),
          r.parentNode &&
            (n && Je(r) && Rt(ce(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    i.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          o,
          a,
          s,
          c,
          u,
          p,
          g = e.cloneNode(!0),
          v = Je(e);
        if (
          !(
            P.noCloneChecked ||
            (e.nodeType !== 1 && e.nodeType !== 11) ||
            i.isXMLDoc(e)
          )
        )
          for (s = ce(g), r = 0, o = (a = ce(e)).length; r < o; r++)
            (c = a[r]),
              (u = s[r]),
              (p = u.nodeName.toLowerCase()) === "input" && ut.test(c.type)
                ? (u.checked = c.checked)
                : (p !== "input" && p !== "textarea") ||
                  (u.defaultValue = c.defaultValue);
        if (t)
          if (n)
            for (
              a = a || ce(e), s = s || ce(g), r = 0, o = a.length;
              r < o;
              r++
            )
              Tn(a[r], s[r]);
          else Tn(e, g);
        return (
          0 < (s = ce(g, "script")).length && Rt(s, !v && ce(e, "script")), g
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, o = i.event.special, a = 0;
          (n = e[a]) !== void 0;
          a++
        )
          if (at(n)) {
            if ((t = n[E.expando])) {
              if (t.events)
                for (r in t.events)
                  o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[E.expando] = void 0;
            }
            n[ue.expando] && (n[ue.expando] = void 0);
          }
      },
    }),
      i.fn.extend({
        detach: function (e) {
          return Cn(this, e, !0);
        },
        remove: function (e) {
          return Cn(this, e);
        },
        text: function (e) {
          return Ae(
            this,
            function (t) {
              return t === void 0
                ? i.text(this)
                : this.empty().each(function () {
                    (this.nodeType !== 1 &&
                      this.nodeType !== 11 &&
                      this.nodeType !== 9) ||
                      (this.textContent = t);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return Ze(this, arguments, function (e) {
            (this.nodeType !== 1 &&
              this.nodeType !== 11 &&
              this.nodeType !== 9) ||
              wn(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return Ze(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var t = wn(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return Ze(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return Ze(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (i.cleanData(ce(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = e != null && e),
            (t = t ?? e),
            this.map(function () {
              return i.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Ae(
            this,
            function (t) {
              var n = this[0] || {},
                r = 0,
                o = this.length;
              if (t === void 0 && n.nodeType === 1) return n.innerHTML;
              if (
                typeof t == "string" &&
                !br.test(t) &&
                !he[(vn.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = i.htmlPrefilter(t);
                try {
                  for (; r < o; r++)
                    (n = this[r] || {}).nodeType === 1 &&
                      (i.cleanData(ce(n, !1)), (n.innerHTML = t));
                  n = 0;
                } catch {}
              }
              n && this.empty().append(t);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return Ze(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              i.inArray(this, e) < 0 &&
                (i.cleanData(ce(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      i.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          i.fn[e] = function (n) {
            for (var r, o = [], a = i(n), s = a.length - 1, c = 0; c <= s; c++)
              (r = c === s ? this : this.clone(!0)),
                i(a[c])[t](r),
                Re.apply(o, r.get());
            return this.pushStack(o);
          };
        }
      );
    var Ft = new RegExp("^(" + hn + ")(?!px)[a-z%]+$", "i"),
      Wt = /^--/,
      St = function (e) {
        var t = e.ownerDocument.defaultView;
        return (t && t.opener) || (t = A), t.getComputedStyle(e);
      },
      kn = function (e, t, n) {
        var r,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        for (o in ((r = n.call(e)), t)) e.style[o] = a[o];
        return r;
      },
      Sr = new RegExp(De.join("|"), "i");
    function ct(e, t, n) {
      var r,
        o,
        a,
        s,
        c = Wt.test(t),
        u = e.style;
      return (
        (n = n || St(e)) &&
          ((s = n.getPropertyValue(t) || n[t]),
          c && s && (s = s.replace(ot, "$1") || void 0),
          s !== "" || Je(e) || (s = i.style(e, t)),
          !P.pixelBoxStyles() &&
            Ft.test(s) &&
            Sr.test(t) &&
            ((r = u.width),
            (o = u.minWidth),
            (a = u.maxWidth),
            (u.minWidth = u.maxWidth = u.width = s),
            (s = n.width),
            (u.width = r),
            (u.minWidth = o),
            (u.maxWidth = a))),
        s !== void 0 ? s + "" : s
      );
    }
    function Sn(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    (function () {
      function e() {
        if (p) {
          (u.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (p.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            Ie.appendChild(u).appendChild(p);
          var g = A.getComputedStyle(p);
          (n = g.top !== "1%"),
            (c = t(g.marginLeft) === 12),
            (p.style.right = "60%"),
            (a = t(g.right) === 36),
            (r = t(g.width) === 36),
            (p.style.position = "absolute"),
            (o = t(p.offsetWidth / 3) === 12),
            Ie.removeChild(u),
            (p = null);
        }
      }
      function t(g) {
        return Math.round(parseFloat(g));
      }
      var n,
        r,
        o,
        a,
        s,
        c,
        u = q.createElement("div"),
        p = q.createElement("div");
      p.style &&
        ((p.style.backgroundClip = "content-box"),
        (p.cloneNode(!0).style.backgroundClip = ""),
        (P.clearCloneStyle = p.style.backgroundClip === "content-box"),
        i.extend(P, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), a;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), c;
          },
          scrollboxSize: function () {
            return e(), o;
          },
          reliableTrDimensions: function () {
            var g, v, d, x;
            return (
              s == null &&
                ((g = q.createElement("table")),
                (v = q.createElement("tr")),
                (d = q.createElement("div")),
                (g.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (v.style.cssText = "box-sizing:content-box;border:1px solid"),
                (v.style.height = "1px"),
                (d.style.height = "9px"),
                (d.style.display = "block"),
                Ie.appendChild(g).appendChild(v).appendChild(d),
                (x = A.getComputedStyle(v)),
                (s =
                  parseInt(x.height, 10) +
                    parseInt(x.borderTopWidth, 10) +
                    parseInt(x.borderBottomWidth, 10) ===
                  v.offsetHeight),
                Ie.removeChild(g)),
              s
            );
          },
        }));
    })();
    var En = ["Webkit", "Moz", "ms"],
      jn = q.createElement("div").style,
      An = {};
    function $t(e) {
      var t = i.cssProps[e] || An[e];
      return (
        t ||
        (e in jn
          ? e
          : (An[e] =
              (function (n) {
                for (
                  var r = n[0].toUpperCase() + n.slice(1), o = En.length;
                  o--;

                )
                  if ((n = En[o] + r) in jn) return n;
              })(e) || e))
      );
    }
    var Er = /^(none|table(?!-c[ea]).+)/,
      jr = { position: "absolute", visibility: "hidden", display: "block" },
      Dn = { letterSpacing: "0", fontWeight: "400" };
    function Nn(e, t, n) {
      var r = lt.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Bt(e, t, n, r, o, a) {
      var s = t === "width" ? 1 : 0,
        c = 0,
        u = 0,
        p = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; s < 4; s += 2)
        n === "margin" && (p += i.css(e, n + De[s], !0, o)),
          r
            ? (n === "content" && (u -= i.css(e, "padding" + De[s], !0, o)),
              n !== "margin" &&
                (u -= i.css(e, "border" + De[s] + "Width", !0, o)))
            : ((u += i.css(e, "padding" + De[s], !0, o)),
              n !== "padding"
                ? (u += i.css(e, "border" + De[s] + "Width", !0, o))
                : (c += i.css(e, "border" + De[s] + "Width", !0, o)));
      return (
        !r &&
          0 <= a &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - a - u - c - 0.5
              )
            ) || 0),
        u + p
      );
    }
    function On(e, t, n) {
      var r = St(e),
        o =
          (!P.boxSizingReliable() || n) &&
          i.css(e, "boxSizing", !1, r) === "border-box",
        a = o,
        s = ct(e, t, r),
        c = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Ft.test(s)) {
        if (!n) return s;
        s = "auto";
      }
      return (
        ((!P.boxSizingReliable() && o) ||
          (!P.reliableTrDimensions() && z(e, "tr")) ||
          s === "auto" ||
          (!parseFloat(s) && i.css(e, "display", !1, r) === "inline")) &&
          e.getClientRects().length &&
          ((o = i.css(e, "boxSizing", !1, r) === "border-box"),
          (a = c in e) && (s = e[c])),
        (s = parseFloat(s) || 0) +
          Bt(e, t, n || (o ? "border" : "content"), a, r, s) +
          "px"
      );
    }
    function me(e, t, n, r, o) {
      return new me.prototype.init(e, t, n, r, o);
    }
    i.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = ct(e, "opacity");
              return n === "" ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageSlice: !0,
        columnCount: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        scale: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
          var o,
            a,
            s,
            c = we(t),
            u = Wt.test(t),
            p = e.style;
          if (
            (u || (t = $t(c)),
            (s = i.cssHooks[t] || i.cssHooks[c]),
            n === void 0)
          )
            return s && "get" in s && (o = s.get(e, !1, r)) !== void 0
              ? o
              : p[t];
          (a = typeof n) == "string" &&
            (o = lt.exec(n)) &&
            o[1] &&
            ((n = gn(e, t, o)), (a = "number")),
            n != null &&
              n == n &&
              (a !== "number" ||
                u ||
                (n += (o && o[3]) || (i.cssNumber[c] ? "" : "px")),
              P.clearCloneStyle ||
                n !== "" ||
                t.indexOf("background") !== 0 ||
                (p[t] = "inherit"),
              (s && "set" in s && (n = s.set(e, n, r)) === void 0) ||
                (u ? p.setProperty(t, n) : (p[t] = n)));
        }
      },
      css: function (e, t, n, r) {
        var o,
          a,
          s,
          c = we(t);
        return (
          Wt.test(t) || (t = $t(c)),
          (s = i.cssHooks[t] || i.cssHooks[c]) &&
            "get" in s &&
            (o = s.get(e, !0, n)),
          o === void 0 && (o = ct(e, t, r)),
          o === "normal" && t in Dn && (o = Dn[t]),
          n === "" || n
            ? ((a = parseFloat(o)), n === !0 || isFinite(a) ? a || 0 : o)
            : o
        );
      },
    }),
      i.each(["height", "width"], function (e, t) {
        i.cssHooks[t] = {
          get: function (n, r, o) {
            if (r)
              return !Er.test(i.css(n, "display")) ||
                (n.getClientRects().length && n.getBoundingClientRect().width)
                ? On(n, t, o)
                : kn(n, jr, function () {
                    return On(n, t, o);
                  });
          },
          set: function (n, r, o) {
            var a,
              s = St(n),
              c = !P.scrollboxSize() && s.position === "absolute",
              u = (c || o) && i.css(n, "boxSizing", !1, s) === "border-box",
              p = o ? Bt(n, t, o, u, s) : 0;
            return (
              u &&
                c &&
                (p -= Math.ceil(
                  n["offset" + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(s[t]) -
                    Bt(n, t, "border", !1, s) -
                    0.5
                )),
              p &&
                (a = lt.exec(r)) &&
                (a[3] || "px") !== "px" &&
                ((n.style[t] = r), (r = i.css(n, t))),
              Nn(0, r, p)
            );
          },
        };
      }),
      (i.cssHooks.marginLeft = Sn(P.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(ct(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                kn(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      i.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (i.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, o = {}, a = typeof n == "string" ? n.split(" ") : [n];
              r < 4;
              r++
            )
              o[e + De[r] + t] = a[r] || a[r - 2] || a[0];
            return o;
          },
        }),
          e !== "margin" && (i.cssHooks[e + t].set = Nn);
      }),
      i.fn.extend({
        css: function (e, t) {
          return Ae(
            this,
            function (n, r, o) {
              var a,
                s,
                c = {},
                u = 0;
              if (Array.isArray(r)) {
                for (a = St(n), s = r.length; u < s; u++)
                  c[r[u]] = i.css(n, r[u], !1, a);
                return c;
              }
              return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((i.Tween = me).prototype = {
        constructor: me,
        init: function (e, t, n, r, o, a) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || i.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = a || (i.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = me.propHooks[this.prop];
          return e && e.get ? e.get(this) : me.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = me.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  i.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : me.propHooks._default.set(this),
            this
          );
        },
      }).init.prototype = me.prototype),
      ((me.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return e.elem.nodeType !== 1 ||
              (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
              ? e.elem[e.prop]
              : (t = i.css(e.elem, e.prop, "")) && t !== "auto"
              ? t
              : 0;
          },
          set: function (e) {
            i.fx.step[e.prop]
              ? i.fx.step[e.prop](e)
              : e.elem.nodeType !== 1 ||
                (!i.cssHooks[e.prop] && e.elem.style[$t(e.prop)] == null)
              ? (e.elem[e.prop] = e.now)
              : i.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = me.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (i.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (i.fx = me.prototype.init),
      (i.fx.step = {});
    var et,
      Et,
      tt,
      Ln,
      Ar = /^(?:toggle|show|hide)$/,
      Dr = /queueHooks$/;
    function _t() {
      Et &&
        (q.hidden === !1 && A.requestAnimationFrame
          ? A.requestAnimationFrame(_t)
          : A.setTimeout(_t, i.fx.interval),
        i.fx.tick());
    }
    function qn() {
      return (
        A.setTimeout(function () {
          et = void 0;
        }),
        (et = Date.now())
      );
    }
    function jt(e, t) {
      var n,
        r = 0,
        o = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        o["margin" + (n = De[r])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o;
    }
    function Hn(e, t, n) {
      for (
        var r,
          o = (ve.tweeners[t] || []).concat(ve.tweeners["*"]),
          a = 0,
          s = o.length;
        a < s;
        a++
      )
        if ((r = o[a].call(n, t, e))) return r;
    }
    function ve(e, t, n) {
      var r,
        o,
        a = 0,
        s = ve.prefilters.length,
        c = i.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          if (o) return !1;
          for (
            var v = et || qn(),
              d = Math.max(0, p.startTime + p.duration - v),
              x = 1 - (d / p.duration || 0),
              S = 0,
              N = p.tweens.length;
            S < N;
            S++
          )
            p.tweens[S].run(x);
          return (
            c.notifyWith(e, [p, x, d]),
            x < 1 && N
              ? d
              : (N || c.notifyWith(e, [p, 1, 0]), c.resolveWith(e, [p]), !1)
          );
        },
        p = c.promise({
          elem: e,
          props: i.extend({}, t),
          opts: i.extend(
            !0,
            { specialEasing: {}, easing: i.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: et || qn(),
          duration: n.duration,
          tweens: [],
          createTween: function (v, d) {
            var x = i.Tween(
              e,
              p.opts,
              v,
              d,
              p.opts.specialEasing[v] || p.opts.easing
            );
            return p.tweens.push(x), x;
          },
          stop: function (v) {
            var d = 0,
              x = v ? p.tweens.length : 0;
            if (o) return this;
            for (o = !0; d < x; d++) p.tweens[d].run(1);
            return (
              v
                ? (c.notifyWith(e, [p, 1, 0]), c.resolveWith(e, [p, v]))
                : c.rejectWith(e, [p, v]),
              this
            );
          },
        }),
        g = p.props;
      for (
        !(function (v, d) {
          var x, S, N, O, Y;
          for (x in v)
            if (
              ((N = d[(S = we(x))]),
              (O = v[x]),
              Array.isArray(O) && ((N = O[1]), (O = v[x] = O[0])),
              x !== S && ((v[S] = O), delete v[x]),
              (Y = i.cssHooks[S]) && ("expand" in Y))
            )
              for (x in ((O = Y.expand(O)), delete v[S], O))
                (x in v) || ((v[x] = O[x]), (d[x] = N));
            else d[S] = N;
        })(g, p.opts.specialEasing);
        a < s;
        a++
      )
        if ((r = ve.prefilters[a].call(p, e, g, p.opts)))
          return (
            M(r.stop) &&
              (i._queueHooks(p.elem, p.opts.queue).stop = r.stop.bind(r)),
            r
          );
      return (
        i.map(g, Hn, p),
        M(p.opts.start) && p.opts.start.call(e, p),
        p
          .progress(p.opts.progress)
          .done(p.opts.done, p.opts.complete)
          .fail(p.opts.fail)
          .always(p.opts.always),
        i.fx.timer(i.extend(u, { elem: e, anim: p, queue: p.opts.queue })),
        p
      );
    }
    (i.Animation = i.extend(ve, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return gn(n.elem, e, lt.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        M(e) ? ((t = e), (e = ["*"])) : (e = e.match(be));
        for (var n, r = 0, o = e.length; r < o; r++)
          (n = e[r]),
            (ve.tweeners[n] = ve.tweeners[n] || []),
            ve.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var r,
            o,
            a,
            s,
            c,
            u,
            p,
            g,
            v = "width" in t || "height" in t,
            d = this,
            x = {},
            S = e.style,
            N = e.nodeType && Tt(e),
            O = E.get(e, "fxshow");
          for (r in (n.queue ||
            ((s = i._queueHooks(e, "fx")).unqueued == null &&
              ((s.unqueued = 0),
              (c = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || c();
              })),
            s.unqueued++,
            d.always(function () {
              d.always(function () {
                s.unqueued--, i.queue(e, "fx").length || s.empty.fire();
              });
            })),
          t))
            if (((o = t[r]), Ar.test(o))) {
              if (
                (delete t[r],
                (a = a || o === "toggle"),
                o === (N ? "hide" : "show"))
              ) {
                if (o !== "show" || !O || O[r] === void 0) continue;
                N = !0;
              }
              x[r] = (O && O[r]) || i.style(e, r);
            }
          if ((u = !i.isEmptyObject(t)) || !i.isEmptyObject(x))
            for (r in (v &&
              e.nodeType === 1 &&
              ((n.overflow = [S.overflow, S.overflowX, S.overflowY]),
              (p = O && O.display) == null && (p = E.get(e, "display")),
              (g = i.css(e, "display")) === "none" &&
                (p
                  ? (g = p)
                  : (Ye([e], !0),
                    (p = e.style.display || p),
                    (g = i.css(e, "display")),
                    Ye([e]))),
              (g === "inline" || (g === "inline-block" && p != null)) &&
                i.css(e, "float") === "none" &&
                (u ||
                  (d.done(function () {
                    S.display = p;
                  }),
                  p == null && ((g = S.display), (p = g === "none" ? "" : g))),
                (S.display = "inline-block"))),
            n.overflow &&
              ((S.overflow = "hidden"),
              d.always(function () {
                (S.overflow = n.overflow[0]),
                  (S.overflowX = n.overflow[1]),
                  (S.overflowY = n.overflow[2]);
              })),
            (u = !1),
            x))
              u ||
                (O
                  ? "hidden" in O && (N = O.hidden)
                  : (O = E.access(e, "fxshow", { display: p })),
                a && (O.hidden = !N),
                N && Ye([e], !0),
                d.done(function () {
                  for (r in (N || Ye([e]), E.remove(e, "fxshow"), x))
                    i.style(e, r, x[r]);
                })),
                (u = Hn(N ? O[r] : 0, r, d)),
                r in O ||
                  ((O[r] = u.start), N && ((u.end = u.start), (u.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? ve.prefilters.unshift(e) : ve.prefilters.push(e);
      },
    })),
      (i.speed = function (e, t, n) {
        var r =
          e && typeof e == "object"
            ? i.extend({}, e)
            : {
                complete: n || (!n && t) || (M(e) && e),
                duration: e,
                easing: (n && t) || (t && !M(t) && t),
              };
        return (
          i.fx.off
            ? (r.duration = 0)
            : typeof r.duration != "number" &&
              (r.duration in i.fx.speeds
                ? (r.duration = i.fx.speeds[r.duration])
                : (r.duration = i.fx.speeds._default)),
          (r.queue != null && r.queue !== !0) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            M(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
          }),
          r
        );
      }),
      i.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(Tt)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var o = i.isEmptyObject(e),
            a = i.speed(t, n, r),
            s = function () {
              var c = ve(this, i.extend({}, e), a);
              (o || E.get(this, "finish")) && c.stop(!0);
            };
          return (
            (s.finish = s),
            o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
          );
        },
        stop: function (e, t, n) {
          var r = function (o) {
            var a = o.stop;
            delete o.stop, a(n);
          };
          return (
            typeof e != "string" && ((n = t), (t = e), (e = void 0)),
            t && this.queue(e || "fx", []),
            this.each(function () {
              var o = !0,
                a = e != null && e + "queueHooks",
                s = i.timers,
                c = E.get(this);
              if (a) c[a] && c[a].stop && r(c[a]);
              else for (a in c) c[a] && c[a].stop && Dr.test(a) && r(c[a]);
              for (a = s.length; a--; )
                s[a].elem !== this ||
                  (e != null && s[a].queue !== e) ||
                  (s[a].anim.stop(n), (o = !1), s.splice(a, 1));
              (!o && n) || i.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                n = E.get(this),
                r = n[e + "queue"],
                o = n[e + "queueHooks"],
                a = i.timers,
                s = r ? r.length : 0;
              for (
                n.finish = !0,
                  i.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = a.length;
                t--;

              )
                a[t].elem === this &&
                  a[t].queue === e &&
                  (a[t].anim.stop(!0), a.splice(t, 1));
              for (t = 0; t < s; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      i.each(["toggle", "show", "hide"], function (e, t) {
        var n = i.fn[t];
        i.fn[t] = function (r, o, a) {
          return r == null || typeof r == "boolean"
            ? n.apply(this, arguments)
            : this.animate(jt(t, !0), r, o, a);
        };
      }),
      i.each(
        {
          slideDown: jt("show"),
          slideUp: jt("hide"),
          slideToggle: jt("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          i.fn[e] = function (n, r, o) {
            return this.animate(t, n, r, o);
          };
        }
      ),
      (i.timers = []),
      (i.fx.tick = function () {
        var e,
          t = 0,
          n = i.timers;
        for (et = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || i.fx.stop(), (et = void 0);
      }),
      (i.fx.timer = function (e) {
        i.timers.push(e), i.fx.start();
      }),
      (i.fx.interval = 13),
      (i.fx.start = function () {
        Et || ((Et = !0), _t());
      }),
      (i.fx.stop = function () {
        Et = null;
      }),
      (i.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (i.fn.delay = function (e, t) {
        return (
          (e = (i.fx && i.fx.speeds[e]) || e),
          (t = t || "fx"),
          this.queue(t, function (n, r) {
            var o = A.setTimeout(n, e);
            r.stop = function () {
              A.clearTimeout(o);
            };
          })
        );
      }),
      (tt = q.createElement("input")),
      (Ln = q.createElement("select").appendChild(q.createElement("option"))),
      (tt.type = "checkbox"),
      (P.checkOn = tt.value !== ""),
      (P.optSelected = Ln.selected),
      ((tt = q.createElement("input")).value = "t"),
      (tt.type = "radio"),
      (P.radioValue = tt.value === "t");
    var Pn,
      ft = i.expr.attrHandle;
    i.fn.extend({
      attr: function (e, t) {
        return Ae(this, i.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          i.removeAttr(this, e);
        });
      },
    }),
      i.extend({
        attr: function (e, t, n) {
          var r,
            o,
            a = e.nodeType;
          if (a !== 3 && a !== 8 && a !== 2)
            return typeof e.getAttribute > "u"
              ? i.prop(e, t, n)
              : ((a === 1 && i.isXMLDoc(e)) ||
                  (o =
                    i.attrHooks[t.toLowerCase()] ||
                    (i.expr.match.bool.test(t) ? Pn : void 0)),
                n !== void 0
                  ? n === null
                    ? void i.removeAttr(e, t)
                    : o && "set" in o && (r = o.set(e, n, t)) !== void 0
                    ? r
                    : (e.setAttribute(t, n + ""), n)
                  : o && "get" in o && (r = o.get(e, t)) !== null
                  ? r
                  : (r = i.find.attr(e, t)) == null
                  ? void 0
                  : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!P.radioValue && t === "radio" && z(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            o = t && t.match(be);
          if (o && e.nodeType === 1)
            for (; (n = o[r++]); ) e.removeAttribute(n);
        },
      }),
      (Pn = {
        set: function (e, t, n) {
          return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ft[t] || i.find.attr;
        ft[t] = function (r, o, a) {
          var s,
            c,
            u = o.toLowerCase();
          return (
            a ||
              ((c = ft[u]),
              (ft[u] = s),
              (s = n(r, o, a) != null ? u : null),
              (ft[u] = c)),
            s
          );
        };
      });
    var Nr = /^(?:input|select|textarea|button)$/i,
      Or = /^(?:a|area)$/i;
    function We(e) {
      return (e.match(be) || []).join(" ");
    }
    function $e(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function zt(e) {
      return Array.isArray(e) ? e : (typeof e == "string" && e.match(be)) || [];
    }
    i.fn.extend({
      prop: function (e, t) {
        return Ae(this, i.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[i.propFix[e] || e];
        });
      },
    }),
      i.extend({
        prop: function (e, t, n) {
          var r,
            o,
            a = e.nodeType;
          if (a !== 3 && a !== 8 && a !== 2)
            return (
              (a === 1 && i.isXMLDoc(e)) ||
                ((t = i.propFix[t] || t), (o = i.propHooks[t])),
              n !== void 0
                ? o && "set" in o && (r = o.set(e, n, t)) !== void 0
                  ? r
                  : (e[t] = n)
                : o && "get" in o && (r = o.get(e, t)) !== null
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = i.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : Nr.test(e.nodeName) || (Or.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      P.optSelected ||
        (i.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      i.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          i.propFix[this.toLowerCase()] = this;
        }
      ),
      i.fn.extend({
        addClass: function (e) {
          var t, n, r, o, a, s;
          return M(e)
            ? this.each(function (c) {
                i(this).addClass(e.call(this, c, $e(this)));
              })
            : (t = zt(e)).length
            ? this.each(function () {
                if (
                  ((r = $e(this)),
                  (n = this.nodeType === 1 && " " + We(r) + " "))
                ) {
                  for (a = 0; a < t.length; a++)
                    (o = t[a]), n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                  (s = We(n)), r !== s && this.setAttribute("class", s);
                }
              })
            : this;
        },
        removeClass: function (e) {
          var t, n, r, o, a, s;
          return M(e)
            ? this.each(function (c) {
                i(this).removeClass(e.call(this, c, $e(this)));
              })
            : arguments.length
            ? (t = zt(e)).length
              ? this.each(function () {
                  if (
                    ((r = $e(this)),
                    (n = this.nodeType === 1 && " " + We(r) + " "))
                  ) {
                    for (a = 0; a < t.length; a++)
                      for (o = t[a]; -1 < n.indexOf(" " + o + " "); )
                        n = n.replace(" " + o + " ", " ");
                    (s = We(n)), r !== s && this.setAttribute("class", s);
                  }
                })
              : this
            : this.attr("class", "");
        },
        toggleClass: function (e, t) {
          var n,
            r,
            o,
            a,
            s = typeof e,
            c = s === "string" || Array.isArray(e);
          return M(e)
            ? this.each(function (u) {
                i(this).toggleClass(e.call(this, u, $e(this), t), t);
              })
            : typeof t == "boolean" && c
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ((n = zt(e)),
              this.each(function () {
                if (c)
                  for (a = i(this), o = 0; o < n.length; o++)
                    (r = n[o]),
                      a.hasClass(r) ? a.removeClass(r) : a.addClass(r);
                else
                  (e !== void 0 && s !== "boolean") ||
                    ((r = $e(this)) && E.set(this, "__className__", r),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        r || e === !1 ? "" : E.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            r = 0;
          for (t = " " + e + " "; (n = this[r++]); )
            if (n.nodeType === 1 && -1 < (" " + We($e(n)) + " ").indexOf(t))
              return !0;
          return !1;
        },
      });
    var Lr = /\r/g;
    i.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          o = this[0];
        return arguments.length
          ? ((r = M(e)),
            this.each(function (a) {
              var s;
              this.nodeType === 1 &&
                ((s = r ? e.call(this, a, i(this).val()) : e) == null
                  ? (s = "")
                  : typeof s == "number"
                  ? (s += "")
                  : Array.isArray(s) &&
                    (s = i.map(s, function (c) {
                      return c == null ? "" : c + "";
                    })),
                ((t =
                  i.valHooks[this.type] ||
                  i.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  t.set(this, s, "value") !== void 0) ||
                  (this.value = s));
            }))
          : o
          ? (t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in t &&
            (n = t.get(o, "value")) !== void 0
            ? n
            : typeof (n = o.value) == "string"
            ? n.replace(Lr, "")
            : n ?? ""
          : void 0;
      },
    }),
      i.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = i.find.attr(e, "value");
              return t ?? We(i.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                o = e.options,
                a = e.selectedIndex,
                s = e.type === "select-one",
                c = s ? null : [],
                u = s ? a + 1 : o.length;
              for (r = a < 0 ? u : s ? a : 0; r < u; r++)
                if (
                  ((n = o[r]).selected || r === a) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !z(n.parentNode, "optgroup"))
                ) {
                  if (((t = i(n).val()), s)) return t;
                  c.push(t);
                }
              return c;
            },
            set: function (e, t) {
              for (
                var n, r, o = e.options, a = i.makeArray(t), s = o.length;
                s--;

              )
                ((r = o[s]).selected =
                  -1 < i.inArray(i.valHooks.option.get(r), a)) && (n = !0);
              return n || (e.selectedIndex = -1), a;
            },
          },
        },
      }),
      i.each(["radio", "checkbox"], function () {
        (i.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = -1 < i.inArray(i(e).val(), t));
          },
        }),
          P.checkOn ||
            (i.valHooks[this].get = function (e) {
              return e.getAttribute("value") === null ? "on" : e.value;
            });
      });
    var pt = A.location,
      Mn = { guid: Date.now() },
      Ut = /\?/;
    i.parseXML = function (e) {
      var t, n;
      if (!e || typeof e != "string") return null;
      try {
        t = new A.DOMParser().parseFromString(e, "text/xml");
      } catch {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (t && !n) ||
          i.error(
            "Invalid XML: " +
              (n
                ? i.map(n.childNodes, function (r) {
                    return r.textContent;
                  }).join(`
`)
                : e)
          ),
        t
      );
    };
    var Rn = /^(?:focusinfocus|focusoutblur)$/,
      In = function (e) {
        e.stopPropagation();
      };
    i.extend(i.event, {
      trigger: function (e, t, n, r) {
        var o,
          a,
          s,
          c,
          u,
          p,
          g,
          v,
          d = [n || q],
          x = qe.call(e, "type") ? e.type : e,
          S = qe.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((a = v = s = n = n || q),
          n.nodeType !== 3 &&
            n.nodeType !== 8 &&
            !Rn.test(x + i.event.triggered) &&
            (-1 < x.indexOf(".") &&
              ((x = (S = x.split(".")).shift()), S.sort()),
            (u = x.indexOf(":") < 0 && "on" + x),
            ((e = e[i.expando]
              ? e
              : new i.Event(x, typeof e == "object" && e)).isTrigger = r
              ? 2
              : 3),
            (e.namespace = S.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + S.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = t == null ? [e] : i.makeArray(t, [e])),
            (g = i.event.special[x] || {}),
            r || !g.trigger || g.trigger.apply(n, t) !== !1))
        ) {
          if (!r && !g.noBubble && !Ue(n)) {
            for (
              c = g.delegateType || x, Rn.test(c + x) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              d.push(a), (s = a);
            s === (n.ownerDocument || q) &&
              d.push(s.defaultView || s.parentWindow || A);
          }
          for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); )
            (v = a),
              (e.type = 1 < o ? c : g.bindType || x),
              (p =
                (E.get(a, "events") || Object.create(null))[e.type] &&
                E.get(a, "handle")) && p.apply(a, t),
              (p = u && a[u]) &&
                p.apply &&
                at(a) &&
                ((e.result = p.apply(a, t)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = x),
            r ||
              e.isDefaultPrevented() ||
              (g._default && g._default.apply(d.pop(), t) !== !1) ||
              !at(n) ||
              (u &&
                M(n[x]) &&
                !Ue(n) &&
                ((s = n[u]) && (n[u] = null),
                (i.event.triggered = x),
                e.isPropagationStopped() && v.addEventListener(x, In),
                n[x](),
                e.isPropagationStopped() && v.removeEventListener(x, In),
                (i.event.triggered = void 0),
                s && (n[u] = s))),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = i.extend(new i.Event(), n, { type: e, isSimulated: !0 });
        i.event.trigger(r, null, t);
      },
    }),
      i.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            i.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return i.event.trigger(e, t, n, !0);
        },
      });
    var qr = /\[\]$/,
      Fn = /\r?\n/g,
      Hr = /^(?:submit|button|image|reset|file)$/i,
      Pr = /^(?:input|select|textarea|keygen)/i;
    function Xt(e, t, n, r) {
      var o;
      if (Array.isArray(t))
        i.each(t, function (a, s) {
          n || qr.test(e)
            ? r(e, s)
            : Xt(
                e + "[" + (typeof s == "object" && s != null ? a : "") + "]",
                s,
                n,
                r
              );
        });
      else if (n || Xe(t) !== "object") r(e, t);
      else for (o in t) Xt(e + "[" + o + "]", t[o], n, r);
    }
    (i.param = function (e, t) {
      var n,
        r = [],
        o = function (a, s) {
          var c = M(s) ? s() : s;
          r[r.length] =
            encodeURIComponent(a) + "=" + encodeURIComponent(c ?? "");
        };
      if (e == null) return "";
      if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e)))
        i.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) Xt(n, e[n], t, o);
      return r.join("&");
    }),
      i.fn.extend({
        serialize: function () {
          return i.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = i.prop(this, "elements");
            return e ? i.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !i(this).is(":disabled") &&
                Pr.test(this.nodeName) &&
                !Hr.test(e) &&
                (this.checked || !ut.test(e))
              );
            })
            .map(function (e, t) {
              var n = i(this).val();
              return n == null
                ? null
                : Array.isArray(n)
                ? i.map(n, function (r) {
                    return {
                      name: t.name,
                      value: r.replace(
                        Fn,
                        `\r
`
                      ),
                    };
                  })
                : {
                    name: t.name,
                    value: n.replace(
                      Fn,
                      `\r
`
                    ),
                  };
            })
            .get();
        },
      });
    var Mr = /%20/g,
      Rr = /#.*$/,
      Ir = /([?&])_=[^&]*/,
      Fr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Wr = /^(?:GET|HEAD)$/,
      $r = /^\/\//,
      Wn = {},
      Vt = {},
      $n = "*/".concat("*"),
      Gt = q.createElement("a");
    function Bn(e) {
      return function (t, n) {
        typeof t != "string" && ((n = t), (t = "*"));
        var r,
          o = 0,
          a = t.toLowerCase().match(be) || [];
        if (M(n))
          for (; (r = a[o++]); )
            r[0] === "+"
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function _n(e, t, n, r) {
      var o = {},
        a = e === Vt;
      function s(c) {
        var u;
        return (
          (o[c] = !0),
          i.each(e[c] || [], function (p, g) {
            var v = g(t, n, r);
            return typeof v != "string" || a || o[v]
              ? a
                ? !(u = v)
                : void 0
              : (t.dataTypes.unshift(v), s(v), !1);
          }),
          u
        );
      }
      return s(t.dataTypes[0]) || (!o["*"] && s("*"));
    }
    function Jt(e, t) {
      var n,
        r,
        o = i.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e;
    }
    (Gt.href = pt.href),
      i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: pt.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              pt.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": $n,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": i.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Jt(Jt(e, i.ajaxSettings), t) : Jt(i.ajaxSettings, e);
        },
        ajaxPrefilter: Bn(Wn),
        ajaxTransport: Bn(Vt),
        ajax: function (e, t) {
          typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
          var n,
            r,
            o,
            a,
            s,
            c,
            u,
            p,
            g,
            v,
            d = i.ajaxSetup({}, t),
            x = d.context || d,
            S = d.context && (x.nodeType || x.jquery) ? i(x) : i.event,
            N = i.Deferred(),
            O = i.Callbacks("once memory"),
            Y = d.statusCode || {},
            ne = {},
            Te = {},
            Ce = "canceled",
            R = {
              readyState: 0,
              getResponseHeader: function (F) {
                var G;
                if (u) {
                  if (!a)
                    for (a = {}; (G = Fr.exec(o)); )
                      a[G[1].toLowerCase() + " "] = (
                        a[G[1].toLowerCase() + " "] || []
                      ).concat(G[2]);
                  G = a[F.toLowerCase() + " "];
                }
                return G == null ? null : G.join(", ");
              },
              getAllResponseHeaders: function () {
                return u ? o : null;
              },
              setRequestHeader: function (F, G) {
                return (
                  u == null &&
                    ((F = Te[F.toLowerCase()] = Te[F.toLowerCase()] || F),
                    (ne[F] = G)),
                  this
                );
              },
              overrideMimeType: function (F) {
                return u == null && (d.mimeType = F), this;
              },
              statusCode: function (F) {
                var G;
                if (F)
                  if (u) R.always(F[R.status]);
                  else for (G in F) Y[G] = [Y[G], F[G]];
                return this;
              },
              abort: function (F) {
                var G = F || Ce;
                return n && n.abort(G), Be(0, G), this;
              },
            };
          if (
            (N.promise(R),
            (d.url = ((e || d.url || pt.href) + "").replace(
              $r,
              pt.protocol + "//"
            )),
            (d.type = t.method || t.type || d.method || d.type),
            (d.dataTypes = (d.dataType || "*").toLowerCase().match(be) || [""]),
            d.crossDomain == null)
          ) {
            c = q.createElement("a");
            try {
              (c.href = d.url),
                (c.href = c.href),
                (d.crossDomain =
                  Gt.protocol + "//" + Gt.host != c.protocol + "//" + c.host);
            } catch {
              d.crossDomain = !0;
            }
          }
          if (
            (d.data &&
              d.processData &&
              typeof d.data != "string" &&
              (d.data = i.param(d.data, d.traditional)),
            _n(Wn, d, t, R),
            u)
          )
            return R;
          for (g in ((p = i.event && d.global) &&
            i.active++ == 0 &&
            i.event.trigger("ajaxStart"),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !Wr.test(d.type)),
          (r = d.url.replace(Rr, "")),
          d.hasContent
            ? d.data &&
              d.processData &&
              (d.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) === 0 &&
              (d.data = d.data.replace(Mr, "+"))
            : ((v = d.url.slice(r.length)),
              d.data &&
                (d.processData || typeof d.data == "string") &&
                ((r += (Ut.test(r) ? "&" : "?") + d.data), delete d.data),
              d.cache === !1 &&
                ((r = r.replace(Ir, "$1")),
                (v = (Ut.test(r) ? "&" : "?") + "_=" + Mn.guid++ + v)),
              (d.url = r + v)),
          d.ifModified &&
            (i.lastModified[r] &&
              R.setRequestHeader("If-Modified-Since", i.lastModified[r]),
            i.etag[r] && R.setRequestHeader("If-None-Match", i.etag[r])),
          ((d.data && d.hasContent && d.contentType !== !1) || t.contentType) &&
            R.setRequestHeader("Content-Type", d.contentType),
          R.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  (d.dataTypes[0] !== "*" ? ", " + $n + "; q=0.01" : "")
              : d.accepts["*"]
          ),
          d.headers))
            R.setRequestHeader(g, d.headers[g]);
          if (d.beforeSend && (d.beforeSend.call(x, R, d) === !1 || u))
            return R.abort();
          if (
            ((Ce = "abort"),
            O.add(d.complete),
            R.done(d.success),
            R.fail(d.error),
            (n = _n(Vt, d, t, R)))
          ) {
            if (((R.readyState = 1), p && S.trigger("ajaxSend", [R, d]), u))
              return R;
            d.async &&
              0 < d.timeout &&
              (s = A.setTimeout(function () {
                R.abort("timeout");
              }, d.timeout));
            try {
              (u = !1), n.send(ne, Be);
            } catch (F) {
              if (u) throw F;
              Be(-1, F);
            }
          } else Be(-1, "No Transport");
          function Be(F, G, ht, Qt) {
            var ke,
              gt,
              Ne,
              He,
              nt,
              ge = G;
            u ||
              ((u = !0),
              s && A.clearTimeout(s),
              (n = void 0),
              (o = Qt || ""),
              (R.readyState = 0 < F ? 4 : 0),
              (ke = (200 <= F && F < 300) || F === 304),
              ht &&
                (He = (function (re, Z, se) {
                  for (
                    var Pe, le, j, Q, K = re.contents, U = re.dataTypes;
                    U[0] === "*";

                  )
                    U.shift(),
                      Pe === void 0 &&
                        (Pe =
                          re.mimeType || Z.getResponseHeader("Content-Type"));
                  if (Pe) {
                    for (le in K)
                      if (K[le] && K[le].test(Pe)) {
                        U.unshift(le);
                        break;
                      }
                  }
                  if (U[0] in se) j = U[0];
                  else {
                    for (le in se) {
                      if (!U[0] || re.converters[le + " " + U[0]]) {
                        j = le;
                        break;
                      }
                      Q || (Q = le);
                    }
                    j = j || Q;
                  }
                  if (j) return j !== U[0] && U.unshift(j), se[j];
                })(d, R, ht)),
              !ke &&
                -1 < i.inArray("script", d.dataTypes) &&
                i.inArray("json", d.dataTypes) < 0 &&
                (d.converters["text script"] = function () {}),
              (He = (function (re, Z, se, Pe) {
                var le,
                  j,
                  Q,
                  K,
                  U,
                  Se = {},
                  rt = re.dataTypes.slice();
                if (rt[1])
                  for (Q in re.converters)
                    Se[Q.toLowerCase()] = re.converters[Q];
                for (j = rt.shift(); j; )
                  if (
                    (re.responseFields[j] && (se[re.responseFields[j]] = Z),
                    !U &&
                      Pe &&
                      re.dataFilter &&
                      (Z = re.dataFilter(Z, re.dataType)),
                    (U = j),
                    (j = rt.shift()))
                  ) {
                    if (j === "*") j = U;
                    else if (U !== "*" && U !== j) {
                      if (!(Q = Se[U + " " + j] || Se["* " + j])) {
                        for (le in Se)
                          if (
                            (K = le.split(" "))[1] === j &&
                            (Q = Se[U + " " + K[0]] || Se["* " + K[0]])
                          ) {
                            Q === !0
                              ? (Q = Se[le])
                              : Se[le] !== !0 && ((j = K[0]), rt.unshift(K[1]));
                            break;
                          }
                      }
                      if (Q !== !0)
                        if (Q && re.throws) Z = Q(Z);
                        else
                          try {
                            Z = Q(Z);
                          } catch (At) {
                            return {
                              state: "parsererror",
                              error: Q
                                ? At
                                : "No conversion from " + U + " to " + j,
                            };
                          }
                    }
                  }
                return { state: "success", data: Z };
              })(d, He, R, ke)),
              ke
                ? (d.ifModified &&
                    ((nt = R.getResponseHeader("Last-Modified")) &&
                      (i.lastModified[r] = nt),
                    (nt = R.getResponseHeader("etag")) && (i.etag[r] = nt)),
                  F === 204 || d.type === "HEAD"
                    ? (ge = "nocontent")
                    : F === 304
                    ? (ge = "notmodified")
                    : ((ge = He.state),
                      (gt = He.data),
                      (ke = !(Ne = He.error))))
                : ((Ne = ge), (!F && ge) || ((ge = "error"), F < 0 && (F = 0))),
              (R.status = F),
              (R.statusText = (G || ge) + ""),
              ke ? N.resolveWith(x, [gt, ge, R]) : N.rejectWith(x, [R, ge, Ne]),
              R.statusCode(Y),
              (Y = void 0),
              p &&
                S.trigger(ke ? "ajaxSuccess" : "ajaxError", [
                  R,
                  d,
                  ke ? gt : Ne,
                ]),
              O.fireWith(x, [R, ge]),
              p &&
                (S.trigger("ajaxComplete", [R, d]),
                --i.active || i.event.trigger("ajaxStop")));
          }
          return R;
        },
        getJSON: function (e, t, n) {
          return i.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return i.get(e, void 0, t, "script");
        },
      }),
      i.each(["get", "post"], function (e, t) {
        i[t] = function (n, r, o, a) {
          return (
            M(r) && ((a = a || o), (o = r), (r = void 0)),
            i.ajax(
              i.extend(
                { url: n, type: t, dataType: a, data: r, success: o },
                i.isPlainObject(n) && n
              )
            )
          );
        };
      }),
      i.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          t.toLowerCase() === "content-type" &&
            (e.contentType = e.headers[t] || "");
      }),
      (i._evalUrl = function (e, t, n) {
        return i.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (r) {
            i.globalEval(r, t, n);
          },
        });
      }),
      i.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (M(e) && (e = e.call(this[0])),
              (t = i(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                  return n;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return M(e)
            ? this.each(function (t) {
                i(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = i(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = M(e);
          return this.each(function (n) {
            i(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                i(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (i.expr.pseudos.hidden = function (e) {
        return !i.expr.pseudos.visible(e);
      }),
      (i.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (i.ajaxSettings.xhr = function () {
        try {
          return new A.XMLHttpRequest();
        } catch {}
      });
    var Br = { 0: 200, 1223: 204 },
      dt = i.ajaxSettings.xhr();
    (P.cors = !!dt && "withCredentials" in dt),
      (P.ajax = dt = !!dt),
      i.ajaxTransport(function (e) {
        var t, n;
        if (P.cors || (dt && !e.crossDomain))
          return {
            send: function (r, o) {
              var a,
                s = e.xhr();
              if (
                (s.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (a in e.xhrFields) s[a] = e.xhrFields[a];
              for (a in (e.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(e.mimeType),
              e.crossDomain ||
                r["X-Requested-With"] ||
                (r["X-Requested-With"] = "XMLHttpRequest"),
              r))
                s.setRequestHeader(a, r[a]);
              (t = function (c) {
                return function () {
                  t &&
                    ((t =
                      n =
                      s.onload =
                      s.onerror =
                      s.onabort =
                      s.ontimeout =
                      s.onreadystatechange =
                        null),
                    c === "abort"
                      ? s.abort()
                      : c === "error"
                      ? typeof s.status != "number"
                        ? o(0, "error")
                        : o(s.status, s.statusText)
                      : o(
                          Br[s.status] || s.status,
                          s.statusText,
                          (s.responseType || "text") !== "text" ||
                            typeof s.responseText != "string"
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = t()),
                (n = s.onerror = s.ontimeout = t("error")),
                s.onabort !== void 0
                  ? (s.onabort = n)
                  : (s.onreadystatechange = function () {
                      s.readyState === 4 &&
                        A.setTimeout(function () {
                          t && n();
                        });
                    }),
                (t = t("abort"));
              try {
                s.send((e.hasContent && e.data) || null);
              } catch (c) {
                if (t) throw c;
              }
            },
            abort: function () {
              t && t();
            },
          };
      }),
      i.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      i.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return i.globalEval(e), e;
          },
        },
      }),
      i.ajaxPrefilter("script", function (e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      i.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
          return {
            send: function (r, o) {
              (t = i("<script>")
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (a) {
                    t.remove(),
                      (n = null),
                      a && o(a.type === "error" ? 404 : 200, a.type);
                  })
                )),
                q.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
      });
    var zn,
      Un = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Un.pop() || i.expando + "_" + Mn.guid++;
        return (this[e] = !0), e;
      },
    }),
      i.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          o,
          a,
          s =
            e.jsonp !== !1 &&
            (Yt.test(e.url)
              ? "url"
              : typeof e.data == "string" &&
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                Yt.test(e.data) &&
                "data");
        if (s || e.dataTypes[0] === "jsonp")
          return (
            (r = e.jsonpCallback =
              M(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            s
              ? (e[s] = e[s].replace(Yt, "$1" + r))
              : e.jsonp !== !1 &&
                (e.url += (Ut.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return a || i.error(r + " was not called"), a[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = A[r]),
            (A[r] = function () {
              a = arguments;
            }),
            n.always(function () {
              o === void 0 ? i(A).removeProp(r) : (A[r] = o),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), Un.push(r)),
                a && M(o) && o(a[0]),
                (a = o = void 0);
            }),
            "script"
          );
      }),
      (P.createHTMLDocument =
        (((zn = q.implementation.createHTMLDocument("").body).innerHTML =
          "<form></form><form></form>"),
        zn.childNodes.length === 2)),
      (i.parseHTML = function (e, t, n) {
        return typeof e != "string"
          ? []
          : (typeof t == "boolean" && ((n = t), (t = !1)),
            t ||
              (P.createHTMLDocument
                ? (((r = (t =
                    q.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = q.location.href),
                  t.head.appendChild(r))
                : (t = q)),
            (a = !n && []),
            (o = un.exec(e))
              ? [t.createElement(o[1])]
              : ((o = xn([e], t, a)),
                a && a.length && i(a).remove(),
                i.merge([], o.childNodes)));
        var r, o, a;
      }),
      (i.fn.load = function (e, t, n) {
        var r,
          o,
          a,
          s = this,
          c = e.indexOf(" ");
        return (
          -1 < c && ((r = We(e.slice(c))), (e = e.slice(0, c))),
          M(t)
            ? ((n = t), (t = void 0))
            : t && typeof t == "object" && (o = "POST"),
          0 < s.length &&
            i
              .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function (u) {
                (a = arguments),
                  s.html(r ? i("<div>").append(i.parseHTML(u)).find(r) : u);
              })
              .always(
                n &&
                  function (u, p) {
                    s.each(function () {
                      n.apply(this, a || [u.responseText, p, u]);
                    });
                  }
              ),
          this
        );
      }),
      (i.expr.pseudos.animated = function (e) {
        return i.grep(i.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (i.offset = {
        setOffset: function (e, t, n) {
          var r,
            o,
            a,
            s,
            c,
            u,
            p = i.css(e, "position"),
            g = i(e),
            v = {};
          p === "static" && (e.style.position = "relative"),
            (c = g.offset()),
            (a = i.css(e, "top")),
            (u = i.css(e, "left")),
            (p === "absolute" || p === "fixed") && -1 < (a + u).indexOf("auto")
              ? ((s = (r = g.position()).top), (o = r.left))
              : ((s = parseFloat(a) || 0), (o = parseFloat(u) || 0)),
            M(t) && (t = t.call(e, n, i.extend({}, c))),
            t.top != null && (v.top = t.top - c.top + s),
            t.left != null && (v.left = t.left - c.left + o),
            "using" in t ? t.using.call(e, v) : g.css(v);
        },
      }),
      i.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === void 0
              ? this
              : this.each(function (o) {
                  i.offset.setOffset(this, e, o);
                });
          var t,
            n,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((t = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              o = { top: 0, left: 0 };
            if (i.css(r, "position") === "fixed") t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                i.css(e, "position") === "static";

              )
                e = e.parentNode;
              e &&
                e !== r &&
                e.nodeType === 1 &&
                (((o = i(e).offset()).top += i.css(e, "borderTopWidth", !0)),
                (o.left += i.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - o.top - i.css(r, "marginTop", !0),
              left: t.left - o.left - i.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && i.css(e, "position") === "static";

            )
              e = e.offsetParent;
            return e || Ie;
          });
        },
      }),
      i.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = t === "pageYOffset";
          i.fn[e] = function (r) {
            return Ae(
              this,
              function (o, a, s) {
                var c;
                if (
                  (Ue(o) ? (c = o) : o.nodeType === 9 && (c = o.defaultView),
                  s === void 0)
                )
                  return c ? c[t] : o[a];
                c
                  ? c.scrollTo(n ? c.pageXOffset : s, n ? s : c.pageYOffset)
                  : (o[a] = s);
              },
              e,
              r,
              arguments.length
            );
          };
        }
      ),
      i.each(["top", "left"], function (e, t) {
        i.cssHooks[t] = Sn(P.pixelPosition, function (n, r) {
          if (r)
            return (r = ct(n, t)), Ft.test(r) ? i(n).position()[t] + "px" : r;
        });
      }),
      i.each({ Height: "height", Width: "width" }, function (e, t) {
        i.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, r) {
            i.fn[r] = function (o, a) {
              var s = arguments.length && (n || typeof o != "boolean"),
                c = n || (o === !0 || a === !0 ? "margin" : "border");
              return Ae(
                this,
                function (u, p, g) {
                  var v;
                  return Ue(u)
                    ? r.indexOf("outer") === 0
                      ? u["inner" + e]
                      : u.document.documentElement["client" + e]
                    : u.nodeType === 9
                    ? ((v = u.documentElement),
                      Math.max(
                        u.body["scroll" + e],
                        v["scroll" + e],
                        u.body["offset" + e],
                        v["offset" + e],
                        v["client" + e]
                      ))
                    : g === void 0
                    ? i.css(u, p, c)
                    : i.style(u, p, g, c);
                },
                t,
                s ? o : void 0,
                s
              );
            };
          }
        );
      }),
      i.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          i.fn[t] = function (n) {
            return this.on(t, n);
          };
        }
      ),
      i.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return arguments.length === 1
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
      }),
      i.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          i.fn[t] = function (n, r) {
            return 0 < arguments.length
              ? this.on(t, null, n, r)
              : this.trigger(t);
          };
        }
      );
    var _r = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (i.proxy = function (e, t) {
      var n, r, o;
      if ((typeof t == "string" && ((n = e[t]), (t = e), (e = n)), M(e)))
        return (
          (r = $.call(arguments, 2)),
          ((o = function () {
            return e.apply(t || this, r.concat($.call(arguments)));
          }).guid = e.guid =
            e.guid || i.guid++),
          o
        );
    }),
      (i.holdReady = function (e) {
        e ? i.readyWait++ : i.ready(!0);
      }),
      (i.isArray = Array.isArray),
      (i.parseJSON = JSON.parse),
      (i.nodeName = z),
      (i.isFunction = M),
      (i.isWindow = Ue),
      (i.camelCase = we),
      (i.type = Xe),
      (i.now = Date.now),
      (i.isNumeric = function (e) {
        var t = i.type(e);
        return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
      }),
      (i.trim = function (e) {
        return e == null ? "" : (e + "").replace(_r, "$1");
      });
    var zr = A.jQuery,
      Ur = A.$;
    return (
      (i.noConflict = function (e) {
        return (
          A.$ === i && (A.$ = Ur), e && A.jQuery === i && (A.jQuery = zr), i
        );
      }),
      typeof ae > "u" && (A.jQuery = A.$ = i),
      i
    );
  });
})(Qn);
var Jr = Qn.exports;
const b = Gr(Jr),
  Yr = "https://secure.geonames.org/countryCode?",
  Qr = "mrryt247",
  Kr =
    "https://gist.githubusercontent.com/amitjambusaria/b9adebcb4f256eae3dfa64dc9f1cc2ef/raw/6431d72439c8399b05d2b8e9d51153e5dee7ad3b/countries.json";
let Yn = "Ghana",
  Kn = "en-GH";
const Zn = b(".wrapper .item"),
  Zr = b(".item label");
let vt,
  yt,
  it = 0;
navigator.geolocation &&
  navigator.geolocation.getCurrentPosition((J) => {
    b.getJSON(
      Yr,
      {
        lat: J.coords.latitude.toFixed(4),
        lng: J.coords.longitude.toFixed(4),
        type: "JSON",
        username: Qr,
      },
      (A) => {
        (Yn = A.countryName),
          b.getJSON(Kr, { type: "JSON" }, (ae) => {
            b.each(ae, function (V, _) {
              Yn === _.name &&
                (b(".currency").text(_.currency.symbol),
                (Kn = `${_.language.code}-${_.code}`));
            });
          });
      }
    );
  });
function er() {
  Zr.css({
    "text-transform": "initial",
    "font-family": "Junge, sans-serif",
    "font-size": "16px",
    "font-weight": "500",
    "line-height": "initial",
    "letter-spacing": "-.5px",
    position: "absolute",
    top: "10px",
    color: "initial",
  });
}
Zn.on("click", function (J) {
  J.stopPropagation(),
    er(),
    b(this).children(".subitem").children("label").css({
      "text-transform": "uppercase",
      "font-family": "Recursive, sans-serif",
      "font-size": ".65rem",
      "font-weight": "600",
      "line-height": ".65rem",
      "letter-spacing": "1px",
      top: "3px",
      color: "var(--secondary)",
    }),
    setTimeout(() => {
      b(this)
        .children(".subitem")
        .children("label")
        .css("position", "relative");
    }, 120);
});
b(document)
  .not(Zn)
  .click(function () {
    er();
  });
function Ee(J) {
  J.css("animation", "shake 1s ease-in-out alternate"),
    setTimeout(() => {
      J.css("animation", "unset");
    }, 1005);
}
b(".button").click(() => {
  b(".card").css("box-shadow", "var(--cardShadow), var(--glowShadow)"),
    setTimeout(() => {
      b(".card").css("box-shadow", "var(--cardShadow)");
    }, 800);
});
function xt() {
  b("#bill").val() === ""
    ? ((vt = 0), b("#logBill").html("Enter a value"), Ee(b("#logBill")))
    : b("#bill").val() === "0"
    ? ((vt = 0),
      b("#logBill").html("Don't expect an answer"),
      Ee(b("#logBill")))
    : +b("#bill").val() < 0
    ? ((vt = 0), b("#logBill").html("No debts here"), Ee(b("#logBill")))
    : ((vt = 1), b("#logBill").html("")),
    b("#tip").val() === ""
      ? ((yt = 0), b("#logTip").html("Enter a value"), Ee(b("#logTip")))
      : b("#tip").val() === "0"
      ? ((yt = 0),
        b("#logTip").html("Don't expect an answer"),
        Ee(b("#logTip")))
      : +b("#tip").val() < 0
      ? ((yt = 0), b("#logTip").html("No debts here"), Ee(b("#logTip")))
      : ((yt = 1), b("#logTip").html("")),
    b("#nop").val() === ""
      ? ((it = 0), b("#logNOP").html("Enter a value"), Ee(b("#logNOP")))
      : b("#nop").val() === "0"
      ? ((it = 0),
        b("#logNOP").html("Don't expect an answer"),
        Ee(b("#logNOP")))
      : +b("#nop").val() < 0
      ? ((it = 0), b("#logNOP").html("No debts here"), Ee(b("#logNOP")))
      : +b("#nop").val() - parseInt(+b("#nop").val()) !== 0
      ? ((it = 0), b("#logNOP").html("Invalid"), Ee(b("#logNOP")))
      : ((it = 1), b("#logNOP").html(""));
  var J = (
      (b("#bill").val() * (b("#tip").val() / 100)) /
      b("#nop").val()
    ).toFixed(2),
    A = (
      (b("#bill").val() * (b("#tip").val() / 100 + 1)) /
      b("#nop").val()
    ).toFixed(2),
    ae = new Intl.NumberFormat(Kn, {
      style: "decimal",
      notation: "compact",
      minimumFractionDigits: 2,
    });
  function V(ee, de) {
    if (!(ee >= de)) {
      const Le = setInterval(() => {
        (ee += 0.01),
          b("#tipAmount").html(ae.format(ee)),
          ee + 0.01 >= de &&
            (clearInterval(Le), b("#tipAmount").html(ae.format(de)));
      }, 1);
      b(".skip").click(() => {
        clearInterval(Le), b("#tipAmount").html(ae.format(J));
      });
    }
  }
  const _ = ["", ".", "..", "..."];
  let $ = 0;
  function Oe(ee, de) {
    if (!(ee >= de)) {
      b(".button img").hide(),
        b(".button").text("Calculating").off("click", xt),
        b(".skip").css("display", "flex"),
        setTimeout(() => {
          b(".skip").css({ filter: "opacity(1)" });
        }, 3e3);
      const Le = setInterval(() => {
          $++, $ === 4 && ($ = 0), b(".button").text("Calculating" + _[$]);
        }, 1e3),
        qe = setInterval(() => {
          (ee += 0.05),
            b("#total").html(ae.format(ee)),
            ee + 0.01 >= de &&
              (clearInterval(qe),
              clearInterval(Le),
              b("#total").html(ae.format(de)),
              b(".button").text("").append("<img>").click(xt),
              b(".button img").addClass("arrow").attr({
                src: "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M12%2020L18%2014M12%2020L6%2014M12%2020L12%209.5M12%204V6.5'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",
                alt: "arrow-up",
              }),
              b(".skip").css({ filter: "opacity(0)" }),
              setTimeout(() => {
                b(".skip").css("display", "none");
              }, 120));
        }, 1);
      b(".skip").click(() => {
        clearInterval(qe),
          clearInterval(Le),
          b(".button").text("").append("<img>").click(xt),
          b(".button img").addClass("arrow").attr({
            src: "data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20stroke='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3cpath%20d='M12%2020L18%2014M12%2020L6%2014M12%2020L12%209.5M12%204V6.5'%20stroke='%23ffffff'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/svg%3e",
            alt: "arrow-up",
          }),
          b(".skip").css({ filter: "opacity(0)" }),
          setTimeout(() => {
            b(".skip").css("display", "none");
          }, 120),
          b("#total").html(ae.format(A));
      });
    }
  }
  function Re() {
    b("#tipAmount").html("0.00"), b("#total").html("0.00");
  }
  vt && yt && it
    ? (Re(),
      V(parseFloat(b("#tipAmount").text()), J),
      Oe(parseFloat(b("#total").text()), A))
    : Re();
}
b(".button").click(xt);
b(document).keypress(function (J) {
  J.key === "Enter" && xt();
});
