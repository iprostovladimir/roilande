(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (e[n] = s[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            i = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var s,
                n = "LazyLoad::Initialized",
                i = new e(t);
              try {
                s = new CustomEvent(n, { detail: { instance: i } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            p = "sizes",
            u = "poster",
            h = "llOriginalAttrs",
            f = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            w = "error",
            b = "native",
            y = "data-",
            S = "ll-status",
            C = function (e, t) {
              return e.getAttribute(y + t);
            },
            E = function (e) {
              return C(e, S);
            },
            T = function (e, t) {
              return (function (e, t, s) {
                var n = "data-ll-status";
                null !== s ? e.setAttribute(n, s) : e.removeAttribute(n);
              })(e, 0, t);
            },
            x = function (e) {
              return T(e, null);
            },
            L = function (e) {
              return null === E(e);
            },
            k = function (e) {
              return E(e) === b;
            },
            _ = [m, g, v, w],
            A = function (e, t, s, n) {
              e &&
                (void 0 === n ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, n));
            },
            P = function (e, t) {
              i
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            $ = function (e, t) {
              i
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            O = function (e) {
              return e.llTempImage;
            },
            M = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            I = function (e, t) {
              e && (e.loadingCount += t);
            },
            D = function (e, t) {
              e && (e.toLoadCount = t);
            },
            B = function (e) {
              for (var t, s = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            q = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && B(s).forEach(t);
            },
            N = function (e, t) {
              B(e).forEach(t);
            },
            z = [d],
            G = [d, u],
            H = [d, c, p],
            W = [f],
            j = function (e) {
              return !!e[h];
            },
            V = function (e) {
              return e[h];
            },
            F = function (e) {
              return delete e[h];
            },
            R = function (e, t) {
              if (!j(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[h] = s);
              }
            },
            Y = function (e, t) {
              if (j(e)) {
                var s = V(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              P(e, t.class_applied),
                T(e, v),
                s &&
                  (t.unobserve_completed && M(e, t),
                  A(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              P(e, t.class_loading),
                T(e, m),
                s && (I(s, 1), A(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Q = function (e, t) {
              K(e, p, C(e, t.data_sizes)),
                K(e, c, C(e, t.data_srcset)),
                K(e, d, C(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                q(e, function (e) {
                  R(e, H), Q(e, t);
                }),
                  R(e, H),
                  Q(e, t);
              },
              IFRAME: function (e, t) {
                R(e, z), K(e, d, C(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  R(e, z), K(e, d, C(e, t.data_src));
                }),
                  R(e, G),
                  K(e, u, C(e, t.data_poster)),
                  K(e, d, C(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                R(e, W), K(e, f, C(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                A(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ne = function (e) {
              return !!e.llEvLisnrs;
            },
            ie = function (e) {
              if (ne(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var n = t[s];
                  se(e, s, n);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                I(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                $(e, t.class_loading),
                t.unobserve_completed && M(e, s);
            },
            oe = function (e, t, s) {
              var n = O(e) || e;
              ne(n) ||
                (function (e, t, s) {
                  ne(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, n, t), te(e, "error", s);
                })(
                  n,
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = k(t);
                      re(t, s, n),
                        P(t, s.class_loaded),
                        T(t, g),
                        A(s.callback_loaded, t, n),
                        i || ee(s, n);
                    })(0, e, t, s),
                      ie(n);
                  },
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = k(t);
                      re(t, s, n),
                        P(t, s.class_error),
                        T(t, w),
                        A(s.callback_error, t, n),
                        s.restore_on_error && Y(t, H),
                        i || ee(s, n);
                    })(0, e, t, s),
                      ie(n);
                  }
                );
            },
            ae = function (e, t, s) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      oe(e, t, s),
                      (function (e) {
                        j(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var n = C(e, t.data_bg),
                          i = C(e, t.data_bg_hidpi),
                          o = r && i ? i : n;
                        o &&
                          ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                          O(e).setAttribute(d, o),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var n = C(e, t.data_bg_multi),
                          i = C(e, t.data_bg_multi_hidpi),
                          o = r && i ? i : n;
                        o && ((e.style.backgroundImage = o), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var n = C(e, t.data_bg_set);
                        if (n) {
                          var i = n.split("|"),
                            r = i.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = i.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    oe(e, t, s),
                      (function (e, t, s) {
                        var n = J[e.tagName];
                        n && (n(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            le = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(p);
            },
            de = function (e) {
              q(e, function (e) {
                Y(e, H);
              }),
                Y(e, H);
            },
            ce = {
              IMG: de,
              IFRAME: function (e) {
                Y(e, z);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  Y(e, z);
                }),
                  Y(e, G),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, W);
              },
            },
            pe = function (e, t) {
              (function (e) {
                var t = ce[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (j(e)) {
                        var t = V(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  L(e) ||
                    k(e) ||
                    ($(e, t.class_entered),
                    $(e, t.class_exited),
                    $(e, t.class_applied),
                    $(e, t.class_loading),
                    $(e, t.class_loaded),
                    $(e, t.class_error));
                })(e, t),
                x(e),
                F(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, n) {
                      var i = (function (e) {
                        return _.indexOf(E(e)) >= 0;
                      })(e);
                      T(e, "entered"),
                        P(e, s.class_entered),
                        $(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && M(e, s);
                        })(e, s, n),
                        A(s.callback_enter, e, t, n),
                        i || ae(e, s, n);
                    })(e.target, e, t, s)
                  : (function (e, t, s, n) {
                      L(e) ||
                        (P(e, s.class_exited),
                        (function (e, t, s, n) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return E(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ie(e),
                            (function (e) {
                              q(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            de(e),
                            $(e, s.class_loading),
                            I(n, -1),
                            x(e),
                            A(s.callback_cancel, e, t, n));
                        })(e, t, s, n),
                        A(s.callback_exit, e, t, n));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return E(e) === w;
              })(e);
            },
            we = function (e, t) {
              return (function (e) {
                return me(e).filter(L);
              })(e || ge(t));
            },
            be = function (e, s) {
              var i = a(e);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        fe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(i, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = ge(e)), me(s).filter(ve)).forEach(function (t) {
                          $(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(i, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  i,
                  r = this._settings,
                  o = we(e, r);
                D(this, o.length),
                  !s && n
                    ? he(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  T(e, b);
                              })(e, t, s);
                          }),
                            D(s, 0);
                        })(o, r, this)
                      : ((i = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, i))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    F(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                we(e, s).forEach(function (e) {
                  M(e, t), ae(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  pe(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = a(t);
              ae(e, s);
            }),
            (be.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, n = 0; (s = t[n]); n += 1) l(e, s);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    const e = {};
    function t() {
      if (location.hash) return location.hash.replace("#", "");
    }
    let n = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let n = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = n + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      r = (e, t = 500) => (e.hidden ? i(e, t) : n(e, t)),
      o = !0,
      a = (e = 500) => {
        document.documentElement.classList.contains("lock") ? l(e) : d(e);
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      d = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function p(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function u(e, t) {
      const s = Array.from(e).filter(function (e, s, n) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const n = {},
            i = s.dataset[t].split(",");
          (n.value = i[0]),
            (n.type = i[1] ? i[1].trim() : "max"),
            (n.item = s),
            e.push(n);
        });
        let n = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        n = p(n);
        const i = [];
        if (n.length)
          return (
            n.forEach((t) => {
              const s = t.split(","),
                n = s[1],
                r = s[2],
                o = window.matchMedia(s[0]),
                a = e.filter(function (e) {
                  if (e.value === n && e.type === r) return !0;
                });
              i.push({ itemsArray: a, matchMedia: o });
            }),
            i
          );
      }
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : a(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              a(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          n = s.indexOf(document.activeElement);
        e.shiftKey && 0 === n && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            n !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && c(`[Попапос]: ${e}`);
      }
    })({});
    let h = (e, t = !1, s = 500, n = 0) => {
      const i = document.querySelector(e);
      if (i) {
        let r = "",
          o = 0;
        t &&
          ((r = "header.header"), (o = document.querySelector(r).offsetHeight));
        let a = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: n,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (l(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", a);
        else {
          let e = i.getBoundingClientRect().top + scrollY;
          (e = o ? e - o : e),
            (e = n ? e - n : e),
            window.scrollTo({ top: e, behavior: "smooth" });
        }
        c(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else c(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    function f(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function m(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : f(t[s]) && f(e[s]) && Object.keys(t[s]).length > 0 && m(e[s], t[s]);
      });
    }
    const g = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function v() {
      const e = "undefined" != typeof document ? document : {};
      return m(e, g), e;
    }
    const w = {
      document: g,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function b() {
      const e = "undefined" != typeof window ? window : {};
      return m(e, w), e;
    }
    class y extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function S(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...S(e)) : t.push(e);
        }),
        t
      );
    }
    function C(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function E(e, t) {
      const s = b(),
        n = v();
      let i = [];
      if (!t && e instanceof y) return e;
      if (!e) return new y(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof y) return e;
        i = e;
      }
      return new y(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    E.fn = y.prototype;
    const T = "resize scroll".split(" ");
    function x(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            T.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : E(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    x("click"),
      x("blur"),
      x("focus"),
      x("focusin"),
      x("focusout"),
      x("keyup"),
      x("keydown"),
      x("keypress"),
      x("submit"),
      x("change"),
      x("mousedown"),
      x("mousemove"),
      x("mouseup"),
      x("mouseenter"),
      x("mouseleave"),
      x("mouseout"),
      x("mouseover"),
      x("touchstart"),
      x("touchend"),
      x("touchmove"),
      x("resize"),
      x("scroll");
    const L = {
      addClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          C(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), E(t).is(s))) n.apply(t, i);
          else {
            const e = E(t).parents();
            for (let t = 0; t < e.length; t += 1)
              E(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!s && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const s = o[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, s.proxyListener, i),
                    o.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, s.proxyListener, i),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = b(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const r = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = b();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = b(),
            t = v(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            r = s.clientTop || i.clientTop || 0,
            o = s.clientLeft || i.clientLeft || 0,
            a = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + a - r, left: n.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const s = b();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = b(),
          s = v(),
          n = this[0];
        let i, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = E(e), r = 0; r < i.length; r += 1) if (i[r] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof y) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return E([]);
        if (e < 0) {
          const s = t + e;
          return E(s < 0 ? [] : [this[s]]);
        }
        return E([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = v();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof y)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = v();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof y)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && E(this[0].nextElementSibling).is(e)
              ? E([this[0].nextElementSibling])
              : E([])
            : this[0].nextElementSibling
            ? E([this[0].nextElementSibling])
            : E([])
          : E([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return E([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? E(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return E(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && E(t.previousElementSibling).is(e)
              ? E([t.previousElementSibling])
              : E([])
            : t.previousElementSibling
            ? E([t.previousElementSibling])
            : E([]);
        }
        return E([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return E([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? E(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return E(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? E(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return E(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? E(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return E(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? E([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return E(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !E(n[s]).is(e)) || t.push(n[s]);
        }
        return E(t);
      },
      filter: function (e) {
        return E(C(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(L).forEach((e) => {
      Object.defineProperty(E.fn, e, { value: L[e], writable: !0 });
    });
    const k = E;
    function _(e, t = 0) {
      return setTimeout(e, t);
    }
    function A() {
      return Date.now();
    }
    function P(e, t = "x") {
      const s = b();
      let n, i, r;
      const o = (function (e) {
        const t = b();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = o.transform || o.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = r.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        i || 0
      );
    }
    function $(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function O(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const r = e[i];
        if (
          null != r &&
          ((n = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, n = e.length; s < n; s += 1) {
            const n = e[s],
              i = Object.getOwnPropertyDescriptor(r, n);
            void 0 !== i &&
              i.enumerable &&
              ($(t[n]) && $(r[n])
                ? r[n].__swiper__
                  ? (t[n] = r[n])
                  : O(t[n], r[n])
                : !$(t[n]) && $(r[n])
                ? ((t[n] = {}), r[n].__swiper__ ? (t[n] = r[n]) : O(t[n], r[n]))
                : (t[n] = r[n]));
          }
        }
      }
      var n;
      return t;
    }
    function M(e, t, s) {
      e.style.setProperty(t, s);
    }
    function I({ swiper: e, targetPosition: t, side: s }) {
      const n = b(),
        i = -e.translate;
      let r,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > i ? "next" : "prev",
        d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        c = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const l = Math.max(Math.min((r - o) / a, 1), 0),
            p = 0.5 - Math.cos(l * Math.PI) / 2;
          let u = i + p * (t - i);
          if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: u });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(c);
        };
      c();
    }
    let D, B, q;
    function N() {
      return (
        D ||
          (D = (function () {
            const e = b(),
              t = v();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        D
      );
    }
    function z(e = {}) {
      return (
        B ||
          (B = (function ({ userAgent: e } = {}) {
            const t = N(),
              s = b(),
              n = s.navigator.platform,
              i = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              o = s.screen.width,
              a = s.screen.height,
              l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = i.match(/(iPad).*OS\s([\d_]+)/);
            const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              u = "Win32" === n;
            let h = "MacIntel" === n;
            return (
              !d &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${a}`) >= 0 &&
                ((d = i.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !u && ((r.os = "android"), (r.android = !0)),
              (d || p || c) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        B
      );
    }
    function G() {
      return (
        q ||
          (q = (function () {
            const e = b();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        q
      );
    }
    const H = {
      on(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][i](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        function i(...s) {
          n.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy,
            t.apply(n, s);
        }
        return (i.__emitterProxy = t), n.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, i) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, n, i;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
          : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
          n.unshift(i);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(i, [e, ...n]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          t
        );
      },
    };
    const W = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && n.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = i.children(`.${e.params.slideClass}`),
          p = l ? e.virtual.slides.length : c.length;
        let u = [];
        const h = [],
          f = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          w = e.slidesGrid.length;
        let b = n.spaceBetween,
          y = -m,
          S = 0,
          C = 0;
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          o
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
            M(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = n.grid && n.grid.rows > 1 && e.grid;
        let T;
        E && e.grid.initSlides(p);
        const x =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < p; i += 1) {
          T = 0;
          const o = c.eq(i);
          if (
            (E && e.grid.updateSlide(i, o, p, t), "none" !== o.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              x && (c[i].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  n = s(r, "padding-right"),
                  i = s(r, "margin-left"),
                  a = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + i + a;
                else {
                  const { clientWidth: s, offsetWidth: r } = o[0];
                  T = e + t + n + i + a + (r - s);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                n.roundLengths && (T = Math.floor(T));
            } else
              (T = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
                n.roundLengths && (T = Math.floor(T)),
                c[i] && (c[i].style[t("width")] = `${T}px`);
            c[i] && (c[i].swiperSlideSize = T),
              f.push(T),
              n.centeredSlides
                ? ((y = y + T / 2 + S / 2 + b),
                  0 === S && 0 !== i && (y = y - r / 2 - b),
                  0 === i && (y = y - r / 2 - b),
                  Math.abs(y) < 0.001 && (y = 0),
                  n.roundLengths && (y = Math.floor(y)),
                  C % n.slidesPerGroup == 0 && u.push(y),
                  h.push(y))
                : (n.roundLengths && (y = Math.floor(y)),
                  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(y),
                  h.push(y),
                  (y = y + T + b)),
              (e.virtualSize += T + b),
              (S = T),
              (C += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          o &&
            a &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(T, u, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < u.length; s += 1) {
            let i = u[s];
            n.roundLengths && (i = Math.floor(i)),
              u[s] <= e.virtualSize - r && t.push(i);
          }
          (u = t),
            Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - r);
        }
        if ((0 === u.length && (u = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - r;
          u = u.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            u.forEach((e, s) => {
              u[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: u,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          M(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
            M(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (p !== d && e.emit("slidesLengthChange"),
          u.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== w && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          p <= n.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || k([])).each((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !n) break;
              s.push(o(e));
            }
        else s.push(o(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: i, snapGrid: r } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        i && (o = e),
          n.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const a = n[e];
          let l = a.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
          const d =
              (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            c =
              (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            p = -(o - l),
            u = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (p <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(s.slideVisibleClass)),
            (a.progress = i ? -d : d),
            (a.originalProgress = i ? -c : c);
        }
        t.visibleSlides = k(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === n
          ? ((i = 0), (r = !0), (o = !0))
          : ((i = (e - t.minTranslate()) / n), (r = i <= 0), (o = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: o }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: n,
            activeIndex: i,
            realIndex: r,
          } = e,
          o = e.virtual && s.virtual.enabled;
        let a;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          a.addClass(s.slideActiveClass),
          s.loop &&
            (a.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let d = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: i,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (c = e)
                : s >= n[e] && s < n[e + 1] && (c = e + 1)
              : s >= n[e] && (c = e);
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (i.indexOf(s) >= 0) d = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((d >= i.length && (d = i.length - 1), c === o))
          return void (
            d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const p = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: p,
          previousIndex: o,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== p && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = k(e).closest(`.${s.slideClass}`)[0];
        let i,
          r = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (r = !0), (i = e);
              break;
            }
        if (!n || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                k(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const j = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: n,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let r = P(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: n,
            params: i,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = s;
        let l,
          d = 0,
          c = 0;
        s.isHorizontal() ? (d = n ? -e : e) : (c = e),
          i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          i.cssMode
            ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -d : -c)
            : i.virtualTranslate ||
              r.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? d : c);
        const p = s.maxTranslate() - s.minTranslate();
        (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
          l !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, n = !0, i) {
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = n && e > l ? l : n && e < d ? d : e),
          r.updateProgress(c),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                I({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function V({ swiper: e, runCallbacks: t, direction: s, step: n }) {
      const { activeIndex: i, previousIndex: r } = e;
      let o = s;
      if (
        (o || (o = i > r ? "next" : i < r ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && i !== r)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === o
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const F = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: p,
          rtlTranslate: u,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !n && !i)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const v = -l[g];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              n = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (o = e)
                : t >= s && t < n && (o = e + 1)
              : t >= s && (o = e);
          }
        if (r.initialized && o !== p) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (p || 0) !== o
          )
            return !1;
        }
        let w;
        if (
          (o !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(v),
          (w = o > p ? "next" : o < p ? "prev" : "reset"),
          (u && -v === r.translate) || (!u && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            s = u ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                I({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, n),
          r.transitionStart(s, w),
          0 === t
            ? r.transitionEnd(s, w)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, w));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n);
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const n = this,
          { animating: i, enabled: r, params: o } = n;
        if (!r) return n;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (i && o.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return o.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const n = this,
          {
            params: i,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: d,
          } = n;
        if (!d) return n;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = c(l ? n.translate : -n.translate),
          u = o.map((e) => c(e));
        let h = o[u.indexOf(p) - 1];
        if (void 0 === h && i.cssMode) {
          let e;
          o.forEach((t, s) => {
            p >= t && (e = s);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = n.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          i.rewind && n.isBeginning)
        ) {
          const i =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(i, e, t, s);
        }
        return n.slideTo(f, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
        const i = this;
        let r = i.activeIndex;
        const o = Math.min(i.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[a]) {
          const e = i.snapGrid[a];
          l - e > (i.snapGrid[a + 1] - e) * n && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[a - 1];
          l - e <= (i.snapGrid[a] - e) * n && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(k(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - n / 2 ||
                r > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  _(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - n
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                _(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const R = {
      loopCreate: function () {
        const e = this,
          t = v(),
          { params: s, $wrapperEl: n } = e,
          i = n.children().length > 0 ? k(n.children()[0].parentNode) : n;
        i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = i.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = k(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((e, t) => {
          k(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / r.length) * r.length;
          a.push(r.eq(e)[0]), o.unshift(r.eq(r.length - e - 1)[0]);
        }
        for (let e = 0; e < a.length; e += 1)
          i.append(k(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          i.prepend(k(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -o[t] - e.getTranslate();
        if (t < n) {
          (l = s.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((a ? -e.translate : e.translate) - d);
        } else if (t >= s.length - n) {
          (l = -s.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((a ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function Y(e) {
      const t = this,
        s = v(),
        n = b(),
        i = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let d = k(l.target);
      if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      const c = !!r.noSwipingClass && "" !== r.noSwipingClass,
        p = e.composedPath ? e.composedPath() : e.path;
      c && l.target && l.target.shadowRoot && p && (d = k(p[0]));
      const u = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        h = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (h
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === v() || s === b()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const n = s.closest(e);
                return n || s.getRootNode ? n || t(s.getRootNode().host) : null;
              })(t);
            })(u, d[0])
          : d.closest(u)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const f = o.currentX,
        m = o.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (g && (f <= w || f >= n.innerWidth - w)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = f),
        (o.startY = m),
        (i.touchStartTime = A()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        d.is(i.focusableElements) &&
          ((e = !1), "SELECT" === d[0].nodeName && (i.isTouched = !1)),
          s.activeElement &&
            k(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== d[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          d[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function X(e) {
      const t = v(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: o, enabled: a } = s;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const d =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        c = "touchmove" === l.type ? d.pageX : l.pageX,
        p = "touchmove" === l.type ? d.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = c), void (r.startY = p);
      if (!s.allowTouchMove)
        return (
          k(l.target).is(n.focusableElements) || (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: c,
              startY: p,
              currentX: c,
              currentY: p,
            }),
            (n.touchStartTime = A()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (p < r.startY && s.translate <= s.maxTranslate()) ||
            (p > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (c < r.startX && s.translate <= s.maxTranslate()) ||
          (c > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        k(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = c), (r.currentY = p);
      const u = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : u * u + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (n.isMoved = !0);
      let f = s.isHorizontal() ? u : h;
      (r.diff = f),
        (f *= i.touchRatio),
        o && (f = -f),
        (s.swipeDirection = f > 0 ? "prev" : "next"),
        (n.currentTranslate = f + n.startTranslate);
      let m = !0,
        g = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (g = 0),
        f > 0 && n.currentTranslate > s.minTranslate()
          ? ((m = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + f) ** g))
          : f < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - f) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(f) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function U(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = A(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = A()),
        _(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let p;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (p = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: p });
      let u = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? p >= o[e] && p < o[e + t] && ((u = e), (h = o[e + t] - o[e]))
          : p >= o[e] && ((u = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      let f = null,
        m = null;
      n.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (p - o[u]) / h,
        v = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (c > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? f : u + v)
            : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (g > 1 - n.longSwipesRatio
              ? t.slideTo(u + v)
              : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(u));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(u + v)
            : t.slideTo(u)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : u + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u));
      }
    }
    function K() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function Q(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function J() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let Z = !1;
    function ee() {}
    const te = (e, t) => {
      const s = v(),
        {
          params: n,
          touchEvents: i,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        d = !!n.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[c](i.start, e.onTouchStart, t),
          r[c](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: d } : d
          ),
          r[c](i.end, e.onTouchEnd, t),
          i.cancel && r[c](i.cancel, e.onTouchEnd, t);
      } else
        r[c](i.start, e.onTouchStart, !1),
          s[c](i.move, e.onTouchMove, d),
          s[c](i.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        r[c]("click", e.onClick, !0),
        n.cssMode && o[c]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[p](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              K,
              !0
            )
          : e[p]("observerUpdate", K, !0);
    };
    const se = {
        attachEvents: function () {
          const e = this,
            t = v(),
            { params: s, support: n } = e;
          (e.onTouchStart = Y.bind(e)),
            (e.onTouchMove = X.bind(e)),
            (e.onTouchEnd = U.bind(e)),
            s.cssMode && (e.onScroll = J.bind(e)),
            (e.onClick = Q.bind(e)),
            n.touch && !Z && (t.addEventListener("touchstart", ee), (Z = !0)),
            te(e, "on");
        },
        detachEvents: function () {
          te(this, "off");
        },
      },
      ne = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ie = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: n = 0,
            params: i,
            $el: r,
          } = e,
          o = i.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          d = ne(e, i),
          c = ne(e, l),
          p = i.enabled;
        d && !c
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const s = i[t] && i[t].enabled,
              n = l[t] && l[t].enabled;
            s && !n && e[t].disable(), !s && n && e[t].enable();
          });
        const u = l.direction && l.direction !== i.direction,
          h = i.loop && (l.slidesPerView !== i.slidesPerView || u);
        u && s && e.changeDirection(), O(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          p && !f ? e.disable() : !p && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let n = !1;
        const i = b(),
          r = "window" === t ? i.innerHeight : s.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = r)
            : a <= s.clientWidth && (n = r);
        }
        return n || "max";
      },
    };
    const re = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: n,
            $el: i,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && s.push(t + n);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: n },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
              { "watch-progress": s.watchSlidesProgress },
            ],
            s.containerModifierClass
          );
        t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const oe = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ae(e, t) {
      return function (s = {}) {
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                O(t, s))
              : O(t, s))
          : O(t, s);
      };
    }
    const le = {
        eventsEmitter: H,
        update: W,
        translate: j,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              V({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                V({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: F,
        loop: R,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: se,
        breakpoints: ie,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: re,
        images: {
          loadImage: function (e, t, s, n, i, r) {
            const o = b();
            let a;
            function l() {
              r && r();
            }
            k(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                n && (a.sizes = n),
                s && (a.srcset = s),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      de = {};
    class ce {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = O({}, s)),
          t && !s.el && (s.el = t),
          s.el && k(s.el).length > 1)
        ) {
          const e = [];
          return (
            k(s.el).each((t) => {
              const n = O({}, s, { el: t });
              e.push(new ce(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = N()),
          (n.device = z({ userAgent: s.userAgent })),
          (n.browser = G()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const i = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: ae(s, i),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = O({}, oe, i);
        return (
          (n.params = O({}, r, de, s)),
          (n.originalParams = O({}, n.params)),
          (n.passedParams = O({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = k),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: k(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: A(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[a].swiperSlideSize;
          for (let s = a + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < n.length; e += 1) {
            (t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            i[a] - i[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = k(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = k(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children ? s.children(n()) : k(s).children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = v().createElement("div");
          (i = k(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: n, $el: i, $wrapperEl: r, slides: o } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        O(de, e);
      }
      static get extendedDefaults() {
        return de;
      }
      static get defaults() {
        return oe;
      }
      static installModule(e) {
        ce.prototype.__modules__ || (ce.prototype.__modules__ = []);
        const t = ce.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ce.installModule(e)), ce)
          : (ce.installModule(e), ce);
      }
    }
    Object.keys(le).forEach((e) => {
      Object.keys(le[e]).forEach((t) => {
        ce.prototype[t] = le[e][t];
      });
    }),
      ce.use([
        function ({ swiper: e, on: t, emit: s }) {
          const n = b();
          let i = null,
            r = null;
          const o = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            a = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  r = n.requestAnimationFrame(() => {
                    const { width: s, height: n } = e;
                    let i = s,
                      r = n;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: n }) => {
                        (n && n !== e.el) ||
                          ((i = s ? s.width : (t[0] || t).inlineSize),
                          (r = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (i === s && r === n) || o();
                  });
                })),
                i.observe(e.el))
              : (n.addEventListener("resize", o),
                n.addEventListener("orientationchange", a));
          }),
            t("destroy", () => {
              r && n.cancelAnimationFrame(r),
                i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                n.removeEventListener("resize", o),
                n.removeEventListener("orientationchange", a);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: n }) {
          const i = [],
            r = b(),
            o = (e, t = {}) => {
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const pe = ce;
    function ue(e, t, s, n) {
      const i = v();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let o = e.$el.children(`.${n[r]}`)[0];
              o ||
                ((o = i.createElement("div")),
                (o.className = n[r]),
                e.$el.append(o)),
                (s[r] = o),
                (t[r] = o);
            }
          }),
        s
      );
    }
    function he({ swiper: e, extendParams: t, on: s, emit: n }) {
      function i(t) {
        let s;
        return (
          t &&
            ((s = k(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.$el.find(t).length &&
              (s = e.$el.find(t))),
          s
        );
      }
      function r(t, s) {
        const n = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[s ? "addClass" : "removeClass"](n.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function o() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        r(s, e.isBeginning && !e.params.rewind),
          r(t, e.isEnd && !e.params.rewind);
      }
      function a(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), n("navigationPrev"));
      }
      function l(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), n("navigationNext"));
      }
      function d() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = ue(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const s = i(t.nextEl),
          n = i(t.prevEl);
        s && s.length > 0 && s.on("click", l),
          n && n.length > 0 && n.on("click", a),
          Object.assign(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          e.enabled ||
            (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass));
      }
      function c() {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", a),
            s.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          !1 === e.params.navigation.enabled ? p() : (d(), o());
        }),
        s("toEdge fromEdge lock unlock", () => {
          o();
        }),
        s("destroy", () => {
          c();
        }),
        s("enable disable", () => {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        s("click", (t, s) => {
          const { $nextEl: i, $prevEl: r } = e.navigation,
            o = s.target;
          if (e.params.navigation.hideOnClick && !k(o).is(r) && !k(o).is(i)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === o || e.pagination.el.contains(o))
            )
              return;
            let t;
            i
              ? (t = i.hasClass(e.params.navigation.hiddenClass))
              : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
              n(!0 === t ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass);
          }
        });
      const p = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.$el.removeClass(e.params.navigation.navigationDisabledClass),
            d(),
            o();
        },
        disable: p,
        update: o,
        init: d,
        destroy: c,
      });
    }
    function fe(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function me({ swiper: e, extendParams: t, on: s, emit: n }) {
      const i = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
          paginationDisabledClass: `${i}-disabled`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function a() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, s) {
        const { bulletActiveClass: n } = e.params.pagination;
        t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
      }
      function d() {
        const t = e.rtl,
          s = e.params.pagination;
        if (a()) return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          d = e.pagination.$el;
        let c;
        const p = e.params.loop
          ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((c = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides),
              c > p - 1 && (c -= p),
              c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
            : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const n = e.pagination.bullets;
          let i, a, p;
          if (
            (s.dynamicBullets &&
              ((r = n
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              d.css(
                e.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((o += c - (e.previousIndex - e.loopedSlides || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (i = Math.max(c - o, 0)),
              (a = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (p = (a + i) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            d.length > 1)
          )
            n.each((e) => {
              const t = k(e),
                n = t.index();
              n === c && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (n >= i &&
                    n <= a &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  n === i && l(t, "prev"),
                  n === a && l(t, "next"));
            });
          else {
            const t = n.eq(c),
              r = t.index();
            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const t = n.eq(i),
                o = n.eq(a);
              for (let e = i; e <= a; e += 1)
                n.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop)
                if (r >= n.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                  n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(o, "next");
              else l(t, "prev"), l(o, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              o = (r * i - r) / 2 - p * r,
              a = t ? "right" : "left";
            n.css(e.isHorizontal() ? a : "top", `${o}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (d.find(fe(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
            d.find(fe(s.totalClass)).text(s.formatFractionTotal(p))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (c + 1) / p;
          let i = 1,
            r = 1;
          "horizontal" === t ? (i = n) : (r = n),
            d
              .find(fe(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (d.html(s.renderCustom(e, c + 1, p)), n("paginationRender", d[0]))
          : n("paginationUpdate", d[0]),
          e.params.watchOverflow &&
            e.enabled &&
            d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function c() {
        const t = e.params.pagination;
        if (a()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          i = e.pagination.$el;
        let r = "";
        if ("bullets" === t.type) {
          let n = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            n > s &&
            (n = s);
          for (let s = 0; s < n; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          i.html(r), (e.pagination.bullets = i.find(fe(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === t.type &&
            ((r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
      }
      function p() {
        e.params.pagination = ue(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s = k(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            ((s = e.$el.find(t.el)),
            s.length > 1 &&
              (s = s.filter((t) => k(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (o = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", fe(t.bulletClass), function (t) {
              t.preventDefault();
              let s = k(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function u() {
        const t = e.params.pagination;
        if (a()) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", fe(t.bulletClass));
      }
      s("init", () => {
        !1 === e.params.pagination.enabled ? h() : (p(), c(), d());
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && d();
        }),
        s("snapIndexChange", () => {
          e.params.loop || d();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (c(), d());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (c(), d());
        }),
        s("destroy", () => {
          u();
        }),
        s("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          d();
        }),
        s("click", (t, s) => {
          const i = s.target,
            { $el: r } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !k(i).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                (e.navigation.prevEl && i === e.navigation.prevEl))
            )
              return;
            const t = r.hasClass(e.params.pagination.hiddenClass);
            n(!0 === t ? "paginationShow" : "paginationHide"),
              r.toggleClass(e.params.pagination.hiddenClass);
          }
        });
      const h = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          u();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.$el.removeClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.removeClass(
                e.params.pagination.paginationDisabledClass
              ),
            p(),
            c(),
            d();
        },
        disable: h,
        render: c,
        update: d,
        init: p,
        destroy: u,
      });
    }
    function ge({ swiper: e, extendParams: t, on: s }) {
      function n(e, t) {
        const s = (function () {
          let e, t, s;
          return (n, i) => {
            for (t = -1, e = n.length; e - t > 1; )
              (s = (e + t) >> 1), n[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let n, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (n = i - 1),
                ((e - this.x[n]) * (this.y[i] - this.y[n])) /
                  (this.x[i] - this.x[n]) +
                  this.y[n])
              : 0;
          }),
          this
        );
      }
      function i() {
        e.controller.control &&
          e.controller.spline &&
          ((e.controller.spline = void 0), delete e.controller.spline);
      }
      t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (e.controller = { control: void 0 }),
        s("beforeInit", () => {
          e.controller.control = e.params.controller.control;
        }),
        s("update", () => {
          i();
        }),
        s("resize", () => {
          i();
        }),
        s("observerUpdate", () => {
          i();
        }),
        s("setTranslate", (t, s, n) => {
          e.controller.control && e.controller.setTranslate(s, n);
        }),
        s("setTransition", (t, s, n) => {
          e.controller.control && e.controller.setTransition(s, n);
        }),
        Object.assign(e.controller, {
          setTranslate: function (t, s) {
            const i = e.controller.control;
            let r, o;
            const a = e.constructor;
            function l(t) {
              const s = e.rtlTranslate ? -e.translate : e.translate;
              "slide" === e.params.controller.by &&
                (!(function (t) {
                  e.controller.spline ||
                    (e.controller.spline = e.params.loop
                      ? new n(e.slidesGrid, t.slidesGrid)
                      : new n(e.snapGrid, t.snapGrid));
                })(t),
                (o = -e.controller.spline.interpolate(-s))),
                (o && "container" !== e.params.controller.by) ||
                  ((r =
                    (t.maxTranslate() - t.minTranslate()) /
                    (e.maxTranslate() - e.minTranslate())),
                  (o = (s - e.minTranslate()) * r + t.minTranslate())),
                e.params.controller.inverse && (o = t.maxTranslate() - o),
                t.updateProgress(o),
                t.setTranslate(o, e),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            }
            if (Array.isArray(i))
              for (let e = 0; e < i.length; e += 1)
                i[e] !== s && i[e] instanceof a && l(i[e]);
            else i instanceof a && s !== i && l(i);
          },
          setTransition: function (t, s) {
            const n = e.constructor,
              i = e.controller.control;
            let r;
            function o(s) {
              s.setTransition(t, e),
                0 !== t &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    _(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    i &&
                      (s.params.loop &&
                        "slide" === e.params.controller.by &&
                        s.loopFix(),
                      s.transitionEnd());
                  }));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof n && o(i[r]);
            else i instanceof n && s !== i && o(i);
          },
        });
    }
    function ve() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      !(function () {
        if ((ve(), document.querySelector(".swiper"))) {
          const e = new pe(".js-content-sliderTwo", {
              modules: [he, me, ge],
              observer: !0,
              observeParents: !0,
              slidesPerView: 3,
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              watchSlidesProgress: !0,
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 0, autoHeight: !0 },
                768: { slidesPerView: 2.5, spaceBetween: 20 },
                992: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  pagination: { type: "progressbar" },
                },
                999: {
                  slidesPerView: 1.5,
                  spaceBetween: 53,
                  slidesPerGroup: 1,
                  initialSlide: 1,
                  centeredSlides: !0,
                  pagination: { type: "progressbar" },
                },
                1268: {
                  slidesPerView: 2.5,
                  spaceBetween: 53,
                  slidesPerGroup: 2,
                  pagination: { el: ".content__pagg", clickable: !0 },
                },
                1581: { slidesPerView: 3, spaceBetween: 53, slidesPerGroup: 3 },
              },
              on: {},
            }),
            t = new pe(".js-content-slider", {
              modules: [he, me, ge],
              observer: !0,
              observeParents: !0,
              slidesPerView: 3,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              autoHeight: !0,
              speed: 800,
              reverseDirection: !0,
              pagination: { el: ".content__pagg", clickable: !0 },
              navigation: {
                nextEl: ".js-content-arrow__left",
                prevEl: ".js-content-arrow__right",
              },
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  autoHeight: !0,
                  centeredSlides: !0,
                  pagination: { type: "progressbar" },
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  centeredSlides: !0,
                  pagination: { type: "progressbar" },
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: !0,
                  pagination: { type: "progressbar" },
                },
                992: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  pagination: { type: "progressbar" },
                },
                999: {
                  slidesPerView: 1.5,
                  spaceBetween: 53,
                  slidesPerGroup: 1,
                  initialSlide: 1,
                  centeredSlides: !0,
                  pagination: { type: "progressbar" },
                },
                1268: {
                  slidesPerView: 2.5,
                  spaceBetween: 53,
                  slidesPerGroup: 2,
                  pagination: { el: ".content__pagg", clickable: !0 },
                },
                1581: {
                  slidesPerView: 3,
                  spaceBetween: 53,
                  slidesPerGroup: 3,
                  pagination: { el: ".content__pagg", clickable: !0 },
                },
              },
              on: {},
            }),
            s = document.getElementById("activeSlide"),
            n = document.getElementById("totalSlides");
          if (s || n) {
            function r() {
              const e = t.realIndex,
                i = t.slides.length;
              (s.textContent = e + 1), (n.textContent = i);
            }
            r(), t.on("slideChange", r), window.addEventListener("load", r);
          }
          if (document.querySelector(".js-content-slider")) {
            function o() {
              window.innerWidth < 992 &&
                (Array.from(e.slides).forEach((e) => {
                  t.wrapperEl.appendChild(e);
                }),
                t.update(),
                window.removeEventListener("resize", o));
            }
            window.addEventListener("resize", o), o();
          }
          (t.controller.control = e), (e.controller.control = t);
          const i = document.querySelectorAll("._swiper-mob");
          if (i.length > 0)
            for (let a = 0; i.length > a; a++) {
              const l = i[a];
              let d;
              (l.dataset.mobile = "false"),
                window.addEventListener("resize", () => {
                  window.innerWidth <= 992 && "false" == l.dataset.mobile
                    ? ((d = new pe(l, {
                        modules: [he, me, ge],
                        spaceBetween: 50,
                        speed: 800,
                        slidesPerView: 1.5,
                        centeredSlides: !0,
                        spaceBetween: 40,
                        autoHeight: !0,
                        breakpoints: {
                          320: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                            centeredSlides: !0,
                            pagination: {
                              el: ".js-content-paggination",
                              clickable: !0,
                            },
                          },
                          480: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                            centeredSlides: !0,
                            pagination: {
                              el: ".js-content-paggination",
                              clickable: !0,
                            },
                          },
                          769: {
                            slidesPerView: 1.5,
                            spaceBetween: 40,
                            centeredSlides: !0,
                            initialSlide: 1,
                            pagination: {
                              el: ".js-content-paggination",
                              clickable: !0,
                            },
                          },
                        },
                      })),
                      (l.dataset.mobile = "true"))
                    : window.innerWidth >= 992 &&
                      "true" == l.dataset.mobile &&
                      (d.destroy(), (l.dataset.mobile = "false"));
                }),
                window.innerWidth <= 992 && "false" == l.dataset.mobile
                  ? ((d = new pe(l, {
                      modules: [he, me, ge],
                      spaceBetween: 50,
                      speed: 800,
                      slidesPerView: 1.5,
                      centeredSlides: !0,
                      spaceBetween: 40,
                      autoHeight: !0,
                      breakpoints: {
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                          centeredSlides: !0,
                          pagination: {
                            el: ".js-content-paggination",
                            clickable: !0,
                          },
                        },
                        480: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                          centeredSlides: !0,
                          pagination: {
                            el: ".js-content-paggination",
                            clickable: !0,
                          },
                        },
                        769: {
                          slidesPerView: 1.5,
                          spaceBetween: 40,
                          centeredSlides: !0,
                          initialSlide: 1,
                          pagination: {
                            el: ".js-content-paggination",
                            clickable: !0,
                          },
                        },
                      },
                    })),
                    (l.dataset.mobile = "true"))
                  : window.innerWidth >= 992 &&
                    "true" == l.dataset.mobile &&
                    (d.destroy(), (l.dataset.mobile = "false"));
            }
        }
      })();
    });
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            p(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                n = { root: s[0], margin: s[1], threshold: s[2] },
                i = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    i = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === n.root &&
                    String(s) === n.margin &&
                    String(i) === n.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(i, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && c(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let we = !1;
    function be(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (we) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (be.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            n = {};
          (n.element = t),
            (n.parent = t.parentNode),
            (n.destination = document.querySelector(s[0].trim())),
            (n.breakpoint = s[1] ? s[1].trim() : "767"),
            (n.place = s[2] ? s[2].trim() : "last"),
            (n.index = this.indexInParent(n.parent, n.element)),
            this.оbjects.push(n);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            n = String.prototype.split.call(s, ","),
            i = window.matchMedia(n[0]),
            r = n[1],
            o = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === r;
            });
          i.addListener(function () {
            e.mediaHandler(i, o);
          }),
            this.mediaHandler(i, o);
        }
      }),
      (be.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (be.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (be.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (be.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (be.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    var ye, Se;
    new be("max").init(),
      (ye = window || void 0),
      (Se = function (e) {
        var t,
          s,
          n,
          i,
          r,
          o,
          a,
          l = {},
          d = [],
          c = !!document.querySelector && !!e.addEventListener,
          p = {},
          u = 0,
          h = 0,
          f = {
            initClass: "js-priorityNav",
            mainNavWrapper: "nav",
            mainNav: "ul",
            navDropdownClassName: "nav__dropdown",
            navDropdownToggleClassName: "nav__dropdown-toggle",
            navDropdownLabel: "Все",
            navDropdownBreakpointLabel: "Все",
            breakPoint: 500,
            throttleDelay: 50,
            offsetPixels: 0,
            count: !0,
            moved: function () {},
            movedBack: function () {},
          },
          m = function (e, t, s) {
            if ("[object Object]" === Object.prototype.toString.call(e))
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.call(s, e[n], n, e);
            else
              for (var i = 0, r = e.length; i < r; i++) t.call(s, e[i], i, e);
          },
          g = function (e, t) {
            if (e.classList) e.classList.toggle(t);
            else {
              var s = e.className.split(" "),
                n = s.indexOf(t);
              0 <= n ? s.splice(n, 1) : s.push(t), (e.className = s.join(" "));
            }
          },
          v = function (e) {
            var t, i, o, a, l, d, c, u;
            (t = e),
              (i = window.getComputedStyle(t)),
              (o = parseFloat(i.paddingLeft) + parseFloat(i.paddingRight)),
              (s = t.clientWidth - o),
              e.querySelector(r).parentNode === e &&
                e.querySelector(r).offsetWidth,
              (n = S(e) + p.offsetPixels),
              (h = ((a = document),
              (l = window),
              (d =
                a.compatMode && "CSS1Compat" === a.compatMode
                  ? a.documentElement
                  : a.body),
              (c = d.clientWidth),
              (u = d.clientHeight),
              l.innerWidth &&
                c > l.innerWidth &&
                ((c = l.innerWidth), (u = l.innerHeight)),
              { width: c, height: u }).width);
          };
        l.doesItFit = function (e) {
          var t,
            o,
            a,
            c = 0 === e.getAttribute("instance") ? c : p.throttleDelay;
          ((t = function () {
            var t = e.getAttribute("instance");
            for (
              v(e);
              (s <= n && 0 < e.querySelector(i).children.length) ||
              (h < p.breakPoint && 0 < e.querySelector(i).children.length);

            )
              l.toDropdown(e, t),
                v(e),
                h < p.breakPoint && y(e, t, p.navDropdownBreakpointLabel);
            for (; s >= d[t][d[t].length - 1] && h > p.breakPoint; )
              l.toMenu(e, t), h > p.breakPoint && y(e, t, p.navDropdownLabel);
            d[t].length < 1 &&
              (e.querySelector(r).classList.remove("show"),
              y(e, t, p.navDropdownLabel)),
              e.querySelector(i).children.length < 1
                ? (e.classList.add("is-empty"),
                  y(e, t, p.navDropdownBreakpointLabel))
                : e.classList.remove("is-empty"),
              w(e, t);
          }),
          (o = c),
          function () {
            var e = this,
              s = arguments;
            clearTimeout(a),
              (a = setTimeout(function () {
                (a = null), t.apply(e, s);
              }, o));
          })();
        };
        var w = function (e, t) {
            d[t].length < 1
              ? (e.querySelector(o).classList.add("priority-nav-is-hidden"),
                e.querySelector(o).classList.remove("priority-nav-is-visible"),
                e.classList.remove("priority-nav-has-dropdown"),
                e
                  .querySelector(".priority-nav__wrapper")
                  .setAttribute("aria-haspopup", "false"))
              : (e.querySelector(o).classList.add("priority-nav-is-visible"),
                e.querySelector(o).classList.remove("priority-nav-is-hidden"),
                e.classList.add("priority-nav-has-dropdown"),
                e
                  .querySelector(".priority-nav__wrapper")
                  .setAttribute("aria-haspopup", "true"));
          },
          b = function (e, t) {
            e.querySelector(o).setAttribute("priorityNav-count", d[t].length);
          },
          y = function (e, t, s) {
            e.querySelector(o).innerHTML = s;
          };
        (l.toDropdown = function (e, t) {
          e.querySelector(r).firstChild &&
          0 < e.querySelector(i).children.length
            ? e
                .querySelector(r)
                .insertBefore(
                  e.querySelector(i).lastElementChild,
                  e.querySelector(r).firstChild
                )
            : 0 < e.querySelector(i).children.length &&
              e
                .querySelector(r)
                .appendChild(e.querySelector(i).lastElementChild),
            d[t].push(n),
            w(e, t),
            0 < e.querySelector(i).children.length && p.count && b(e, t),
            p.moved();
        }),
          (l.toMenu = function (e, t) {
            0 < e.querySelector(r).children.length &&
              e
                .querySelector(i)
                .appendChild(e.querySelector(r).firstElementChild),
              d[t].pop(),
              w(e, t),
              0 < e.querySelector(i).children.length && p.count && b(e, t),
              p.movedBack();
          });
        var S = function (e) {
            for (var t = e.childNodes, s = 0, n = 0; n < t.length; n++)
              3 !== t[n].nodeType &&
                (isNaN(t[n].offsetWidth) || (s += t[n].offsetWidth));
            return s;
          },
          C = function (e, s) {
            window.attachEvent
              ? window.attachEvent("onresize", function () {
                  l.doesItFit && l.doesItFit(e);
                })
              : window.addEventListener &&
                window.addEventListener(
                  "resize",
                  function () {
                    l.doesItFit && l.doesItFit(e);
                  },
                  !0
                ),
              e.querySelector(o).addEventListener("click", function () {
                g(e.querySelector(r), "show"),
                  g(this, "is-open"),
                  g(e, "is-open"),
                  -1 !== e.className.indexOf("is-open")
                    ? e.querySelector(r).setAttribute("aria-hidden", "false")
                    : (e.querySelector(r).setAttribute("aria-hidden", "true"),
                      e.querySelector(r).blur());
              }),
              document.addEventListener("click", function (t) {
                (function (e, t) {
                  for (
                    var s = t.charAt(0);
                    e && e !== document;
                    e = e.parentNode
                  )
                    if ("." === s) {
                      if (e.classList.contains(t.substr(1))) return e;
                    } else if ("#" === s) {
                      if (e.id === t.substr(1)) return e;
                    } else if (
                      "[" === s &&
                      e.hasAttribute(t.substr(1, t.length - 2))
                    )
                      return e;
                  return !1;
                })(t.target, "." + s.navDropdownClassName) ||
                  t.target === e.querySelector(o) ||
                  (e.querySelector(r).classList.remove("show"),
                  e.querySelector(o).classList.remove("is-open"),
                  e.classList.remove("is-open"));
              }),
              (document.onkeydown = function (e) {
                27 === (e = e || window.event).keyCode &&
                  (document.querySelector(r).classList.remove("show"),
                  document.querySelector(o).classList.remove("is-open"),
                  t.classList.remove("is-open"));
              });
          };
        (Element.prototype.remove = function () {
          this.parentElement.removeChild(this);
        }),
          (NodeList.prototype.remove = HTMLCollection.prototype.remove =
            function () {
              for (var e = 0, t = this.length; e < t; e++)
                this[e] &&
                  this[e].parentElement &&
                  this[e].parentElement.removeChild(this[e]);
            }),
          (l.destroy = function () {
            p &&
              (document.documentElement.classList.remove(p.initClass),
              a.remove(),
              (p = null),
              delete l.init,
              delete l.doesItFit);
          }),
          c &&
            "undefined" != typeof Node &&
            (Node.prototype.insertAfter = function (e, t) {
              this.insertBefore(e, t.nextSibling);
            });
        var E = function (e) {
          var t = e.charAt(0);
          return "." !== t && "#" !== t;
        };
        return (
          (l.init = function (e) {
            var s, n, h;
            if (
              ((n = e || {}),
              (h = {}),
              m((s = f), function (e, t) {
                h[t] = s[t];
              }),
              m(n, function (e, t) {
                h[t] = n[t];
              }),
              (p = h),
              c || "undefined" != typeof Node)
            )
              if (
                E(p.navDropdownClassName) &&
                E(p.navDropdownToggleClassName)
              ) {
                var g = document.querySelectorAll(p.mainNavWrapper);
                m(g, function (e) {
                  var s, n;
                  (d[u] = []),
                    e.setAttribute("instance", u++),
                    (t = e)
                      ? ((i = p.mainNav),
                        e.querySelector(i)
                          ? ((s = e),
                            (n = p),
                            (a = document.createElement("span")),
                            (r = document.createElement("ul")),
                            ((o = document.createElement("button")).innerHTML =
                              n.navDropdownLabel),
                            o.setAttribute("aria-controls", "Все"),
                            o.setAttribute("type", "button"),
                            r.setAttribute("aria-hidden", "true"),
                            s.querySelector(i).parentNode === s
                              ? (s.insertAfter(a, s.querySelector(i)),
                                a.appendChild(o),
                                a.appendChild(r),
                                r.classList.add(n.navDropdownClassName),
                                r.classList.add("priority-nav__dropdown"),
                                o.classList.add(n.navDropdownToggleClassName),
                                o.classList.add(
                                  "priority-nav__dropdown-toggle"
                                ),
                                o.setAttribute("type", "button"),
                                a.classList.add(
                                  n.navDropdownClassName + "-wrapper"
                                ),
                                a.classList.add("priority-nav__wrapper"),
                                s.classList.add("priority-nav"))
                              : console.warn(
                                  "mainNav is not a direct child of mainNavWrapper, double check please"
                                ),
                            (r = "." + p.navDropdownClassName),
                            e.querySelector(r)
                              ? ((o = "." + p.navDropdownToggleClassName),
                                e.querySelector(o)
                                  ? (C(e, p), l.doesItFit(e))
                                  : console.warn(
                                      "couldn't find the specified navDropdownToggle element"
                                    ))
                              : console.warn(
                                  "couldn't find the specified navDropdown element"
                                ))
                          : console.warn(
                              "couldn't find the specified mainNav element"
                            ))
                      : console.warn(
                          "couldn't find the specified mainNavWrapper element"
                        );
                }),
                  document.documentElement.classList.add(p.initClass);
              } else
                console.warn(
                  "No symbols allowed in navDropdownClassName & navDropdownToggleClassName. These are not selectors."
                );
            else console.warn("This browser doesn't support priorityNav");
          }),
          l
        );
      }),
      "function" == typeof define && define.amd
        ? define("priorityNav", Se(ye))
        : "object" == typeof exports
        ? (module.exports = Se(ye))
        : (ye.priorityNav = Se(ye));
    const Ce = document.querySelector(".js-content-sliderTwo");
    if (Ce) {
      const xe = window.matchMedia("(max-width: 992px)");
      function Le(e) {
        e.matches && window.innerWidth <= 992
          ? Ce.removeAttribute("dir")
          : Ce.setAttribute("dir", "ltr");
      }
      Le(xe), xe.addEventListener("change", Le);
    }
    document.querySelectorAll(".js-nav")[0] &&
      setTimeout(() => {
        priorityNav.init({
          breakPoint: 0,
          throttleDelay: "50",
          navDropdownLabel: "Все",
          mainNavWrapper: ".js-nav",
        });
      }, 100);
    const Ee = document.querySelector(".case");
    if (Ee) {
      const ke = Ee.querySelector(".block");
      document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
          window.scrollY >= Ee.offsetTop &&
          window.scrollY <= Ee.offsetTop + Ee.offsetHeight - ke.offsetHeight
            ? (ke.style.position = "fixed")
            : (ke.style.position = "absolute");
        });
      });
    }
    const Te = document.querySelector(".price__sidebar");
    if (Te) {
      const _e = Te.querySelector(".sidebar--price__body");
      document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
          window.scrollY >= Te.offsetTop &&
          window.scrollY <= Te.offsetTop + Te.offsetHeight - _e.offsetHeight
            ? (_e.style.position = "fixed")
            : (_e.style.position = "absolute");
        });
      });
    }
    (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 500);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            o && (a(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        let e = document.querySelector(".icon-menu01");
        e &&
          e.addEventListener("click", function (e) {
            o &&
              (a(), document.documentElement.classList.toggle("menu-open01"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && i(t);
          let s = u(e, "spollers");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.previousElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.previousElementSibling.hidden = !1));
              }));
          }
          function a(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                n = s.closest("[data-spollers]"),
                i = !!n.hasAttribute("data-one-spoller");
              if (
                !n.querySelectorAll("._slide").length &&
                (i && !s.classList.contains("_spoller-active") && l(n),
                s.classList.toggle("_spoller-active"),
                r(s.previousElementSibling, 500),
                s)
              ) {
                const e = "Скрыть описание",
                  t = "Смотреть описание";
                s.classList.contains("_spoller-active")
                  ? (s.innerText = e)
                  : (s.innerText = t);
              }
              e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              n(t.previousElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers01]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers01.split(",")[0];
          });
          t.length && i(t);
          let s = u(e, "spollers01");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller01]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers01]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function a(e) {
            const t = e.target;
            if (t.closest("[data-spoller01]")) {
              const s = t.closest("[data-spoller01]"),
                n = s.closest("[data-spollers01]"),
                i = !!n.hasAttribute("data-one-spoller");
              n.querySelectorAll("._slide").length ||
                (i && !s.classList.contains("_spoller-active") && l(n),
                s.classList.toggle("_spoller-active"),
                r(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller01]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              n(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                n = s.dataset.goto ? s.dataset.goto : "",
                i = !!s.hasAttribute("data-goto-header"),
                r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : 500,
                o = s.dataset.gotoTop ? parseInt(s.dataset.gotoTop) : 0;
              h(n, i, r, o), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              document.querySelector("[data-goto]._navigator-active");
              let e;
              if (s.id && document.querySelector(`[data-goto="#${s.id}"]`))
                e = document.querySelector(`[data-goto="#${s.id}"]`);
              else if (s.classList.length)
                for (let t = 0; t < s.classList.length; t++) {
                  const n = s.classList[t];
                  if (document.querySelector(`[data-goto=".${n}"]`)) {
                    e = document.querySelector(`[data-goto=".${n}"]`);
                    break;
                  }
                }
              t.isIntersecting
                ? e && e.classList.add("_navigator-active")
                : e && e.classList.remove("_navigator-active");
            }
          }
        }
        if (
          (document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e),
          t())
        ) {
          let e;
          document.querySelector(`#${t()}`)
            ? (e = `#${t()}`)
            : document.querySelector(`.${t()}`) && (e = `.${t()}`),
            e && h(e, !0, 500, 20);
        }
      })(),
      (we = !0),
      window.innerWidth > 992 &&
        (function () {
          const e = document.querySelectorAll("[data-sticky]");
          e.length &&
            e.forEach((e) => {
              let t = {
                media: e.dataset.sticky ? parseInt(e.dataset.sticky) : null,
                top: e.dataset.stickyTop ? parseInt(e.dataset.stickyTop) : 0,
                bottom: e.dataset.stickyBottom
                  ? parseInt(e.dataset.stickyBottom)
                  : 0,
                header: e.hasAttribute("data-sticky-header")
                  ? document.querySelector("header.header").offsetHeight
                  : 0,
              };
              !(function (e, t) {
                const s = e.querySelector("[data-sticky-item]"),
                  n = t.header + t.top,
                  i = s.getBoundingClientRect().top + scrollY - n;
                function r(r) {
                  const o =
                    e.offsetHeight +
                    e.getBoundingClientRect().top +
                    scrollY -
                    (n + s.offsetHeight + t.bottom);
                  let a = {
                    position: "relative",
                    bottom: "auto",
                    top: "0px",
                    left: "0px",
                    width: "auto",
                  };
                  (!t.media || t.media < window.innerWidth) &&
                    n + t.bottom + s.offsetHeight < window.innerHeight &&
                    (scrollY >= i && scrollY <= o
                      ? ((a.position = "fixed"),
                        (a.bottom = "auto"),
                        (a.top = `${n}px`),
                        (a.left = `${s.getBoundingClientRect().left}px`),
                        (a.width = `${s.offsetWidth}px`))
                      : scrollY >= o &&
                        ((a.position = "relative"),
                        (a.bottom = `${t.bottom}px`),
                        (a.top = "auto"),
                        (a.left = "0px"),
                        (a.width = `${s.offsetWidth}px`))),
                    (function (e, t) {
                      e.style.cssText = `position:${t.position};bottom:${t.bottom};top:${t.top};left:${t.left};width:${t.width};`;
                    })(s, a);
                }
                document.addEventListener("windowScroll", r);
              })(e, t);
            });
        })(),
      window.innerWidth;
  })();
})();
