var wo, So;
let _u, lt, Ae, Zi, qi, ua, ol, Ru, ws, ll;
function Ma(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
let Te = {}, ei = [], hn = () => {
}, Yd = () => !1, Da = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || 97 > t.charCodeAt(2)), jl = (t) => t.startsWith("onUpdate:"), Ye = Object.assign, Jl = (t, e) => {
  let n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Z1 = Object.prototype.hasOwnProperty, xe = (t, e) => Z1.call(t, e), ee = Array.isArray, le = (t) => typeof t == "function", _e = (t) => typeof t == "string", en = (t) => typeof t == "symbol", Me = (t) => t !== null && typeof t == "object", jd = (t) => (Me(t) || le(t)) && le(t.then) && le(t.catch), tt = Object.prototype.toString, Aa = (t) => _e(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Gi = Ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), La = (t) => {
  let e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, q1 = /-\w/g, Mt = La((t) => t.replace(q1, (e) => e.slice(1).toUpperCase())), G1 = /\B([A-Z])/g, cs = La((t) => t.replace(G1, "-$1").toLowerCase()), Na = La((t) => t.charAt(0).toUpperCase() + t.slice(1)), To = La((t) => t ? `on${Na(t)}` : ""), Ct = (t, e) => !Object.is(t, e), Jr = (t, ...e) => {
  for (let n = 0; n < t.length; n++) t[n](...e);
}, Jd = (t, e, n, s = !1) => {
  Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: s, value: n });
}, Va = (t) => {
  let e = parseFloat(t);
  return isNaN(e) ? t : e;
}, Io = (t) => {
  let e = _e(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
}, Ba = () => _u || (_u = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Y1 = Ma("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function gt(t) {
  if (ee(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) {
      let s = t[n], i = _e(s) ? (function(r) {
        let a = {};
        return r.replace(K1, "").split(j1).forEach((o) => {
          if (o) {
            let l = o.split(J1);
            l.length > 1 && (a[l[0].trim()] = l[1].trim());
          }
        }), a;
      })(s) : gt(s);
      if (i) for (let r in i) e[r] = i[r];
    }
    return e;
  }
  if (_e(t) || Me(t)) return t;
}
let j1 = /;(?![^(]*\))/g, J1 = /:([^]+)/, K1 = /\/\*[^]*?\*\//g;
function x(t) {
  let e = "";
  if (_e(t)) e = t;
  else if (ee(t)) for (let n = 0; n < t.length; n++) {
    let s = x(t[n]);
    s && (e += s + " ");
  }
  else if (Me(t)) for (let n in t) t[n] && (e += n + " ");
  return e.trim();
}
function $o(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !_e(e) && (t.class = x(e)), n && (t.style = gt(n)), t;
}
let Q1 = Ma("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function As(t, e) {
  let n, s;
  if (t === e) return !0;
  let i = (n = t, tt.call(n) === "[object Date]"), r = (s = e, tt.call(s) === "[object Date]");
  if (i || r) return !!i && !!r && t.getTime() === e.getTime();
  if (i = en(t), r = en(e), i || r) return t === e;
  if (i = ee(t), r = ee(e), i || r) return !!i && !!r && (function(a, o) {
    if (a.length !== o.length) return !1;
    let l = !0;
    for (let u = 0; l && u < a.length; u++) l = As(a[u], o[u]);
    return l;
  })(t, e);
  if (i = Me(t), r = Me(e), i || r) {
    if (!i || !r || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (let a in t) {
      let o = t.hasOwnProperty(a), l = e.hasOwnProperty(a);
      if (o && !l || !o && l || !As(t[a], e[a])) return !1;
    }
  }
  return String(t) === String(e);
}
function Kl(t, e) {
  return t.findIndex((n) => As(n, e));
}
let Kd = (t) => !!(t && t.__v_isRef === !0), ve = (t) => _e(t) ? t : t == null ? "" : ee(t) || Me(t) && (t.toString === tt || !le(t.toString)) ? Kd(t) ? ve(t.value) : JSON.stringify(t, Qd, 2) : String(t), Qd = (t, e) => {
  let n;
  if (Kd(e)) return Qd(t, e.value);
  if (n = e, tt.call(n) === "[object Map]") return { [`Map(${e.size})`]: [...e.entries()].reduce((s, [i, r], a) => (s[Co(i, a) + " =>"] = r, s), {}) };
  {
    let s;
    if (s = e, tt.call(s) === "[object Set]") return { [`Set(${e.size})`]: [...e.values()].map((i) => Co(i)) };
    {
      if (en(e)) return Co(e);
      let i;
      if (Me(e) && !ee(e) && (i = e, tt.call(i) !== "[object Object]")) return String(e);
    }
  }
  return e;
}, Co = (t, e = "") => {
  var n;
  return en(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
class Xd {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = lt, !e && lt && (this.index = (lt.scopes || (lt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      let e, n;
      if (this._isPaused = !0, this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      let e, n;
      if (this._isPaused = !1, this.scopes) for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      let n = lt;
      try {
        return lt = this, e();
      } finally {
        lt = n;
      }
    }
  }
  on() {
    ++this._on == 1 && (this.prevScope = lt, lt = this);
  }
  off() {
    this._on > 0 && --this._on == 0 && (lt = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      let n, s;
      for (n = 0, this._active = !1, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, this.effects.length = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        let i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ef(t) {
  return new Xd(t);
}
function tf() {
  return lt;
}
function nf(t, e = !1) {
  lt && lt.cleanups.push(t);
}
let xo = /* @__PURE__ */ new WeakSet();
class sf {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, lt && lt.active && lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, xo.has(this) && (xo.delete(this), this.trigger()));
  }
  notify() {
    (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || rf(this));
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, zu(this), af(this);
    let e = Ae, n = Qt;
    Ae = this, Qt = !0;
    try {
      return this.fn();
    } finally {
      of(this), Ae = e, Qt = n, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) Xl(e);
      this.deps = this.depsTail = void 0, zu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? xo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ul(this) && this.run();
  }
  get dirty() {
    return ul(this);
  }
}
let _a = 0;
function rf(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = qi, qi = t;
    return;
  }
  t.next = Zi, Zi = t;
}
function Ql() {
  let t;
  if (!(--_a > 0)) {
    if (qi) {
      let e = qi;
      for (qi = void 0; e; ) {
        let n = e.next;
        e.next = void 0, e.flags &= -9, e = n;
      }
    }
    for (; Zi; ) {
      let e = Zi;
      for (Zi = void 0; e; ) {
        let n = e.next;
        if (e.next = void 0, e.flags &= -9, 1 & e.flags) try {
          e.trigger();
        } catch (s) {
          t || (t = s);
        }
        e = n;
      }
    }
    if (t) throw t;
  }
}
function af(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function of(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    let i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Xl(s), (function(r) {
      let { prevDep: a, nextDep: o } = r;
      a && (a.nextDep = o, r.prevDep = void 0), o && (o.prevDep = a, r.nextDep = void 0);
    })(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  t.deps = e, t.depsTail = n;
}
function ul(t) {
  for (let e = t.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (lf(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty;
}
function lf(t) {
  if (4 & t.flags && !(16 & t.flags) || (t.flags &= -17, t.globalVersion === ir) || (t.globalVersion = ir, !t.isSSR && 128 & t.flags && (!t.deps && !t._dirty || !ul(t)))) return;
  t.flags |= 2;
  let e = t.dep, n = Ae, s = Qt;
  Ae = t, Qt = !0;
  try {
    af(t);
    let i = t.fn(t._value);
    (e.version === 0 || Ct(i, t._value)) && (t.flags |= 128, t._value = i, e.version++);
  } catch (i) {
    throw e.version++, i;
  } finally {
    Ae = n, Qt = s, of(t), t.flags &= -3;
  }
}
function Xl(t, e = !1) {
  let { dep: n, prevSub: s, nextSub: i } = t;
  if (s && (s.nextSub = i, t.prevSub = void 0), i && (i.prevSub = s, t.nextSub = void 0), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) Xl(r, !0);
  }
  e || --n.sc || !n.map || n.map.delete(n.key);
}
let Qt = !0, uf = [];
function An() {
  uf.push(Qt), Qt = !1;
}
function Ln() {
  let t = uf.pop();
  Qt = t === void 0 || t;
}
function zu(t) {
  let { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    let n = Ae;
    Ae = void 0;
    try {
      e();
    } finally {
      Ae = n;
    }
  }
}
let ir = 0;
class X1 {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ra {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!Ae || !Qt || Ae === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae) n = this.activeLink = new X1(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, (function s(i) {
      if (i.dep.sc++, 4 & i.sub.flags) {
        let r = i.dep.computed;
        if (r && !i.dep.subs) {
          r.flags |= 20;
          for (let o = r.deps; o; o = o.nextDep) s(o);
        }
        let a = i.dep.subs;
        a !== i && (i.prevSub = a, a && (a.nextSub = i)), i.dep.subs = i;
      }
    })(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      let s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = s);
    }
    return n;
  }
  trigger(e) {
    this.version++, ir++, this.notify(e);
  }
  notify(e) {
    _a++;
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ql();
    }
  }
}
let ca = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ Symbol(""), cl = /* @__PURE__ */ Symbol(""), rr = /* @__PURE__ */ Symbol("");
function dt(t, e, n) {
  if (Qt && Ae) {
    let s = ca.get(t);
    s || ca.set(t, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ra()), i.map = s, i.key = n), i.track();
  }
}
function xn(t, e, n, s, i, r) {
  let a = ca.get(t);
  if (!a) return void ir++;
  let o = (l) => {
    l && l.trigger();
  };
  if (_a++, e === "clear") a.forEach(o);
  else {
    let l = ee(t), u = l && Aa(n);
    if (l && n === "length") {
      let c = Number(s);
      a.forEach((f, m) => {
        (m === "length" || m === rr || !en(m) && m >= c) && o(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), u && o(a.get(rr)), e) {
      case "add":
        if (l) u && o(a.get("length"));
        else {
          let f;
          o(a.get(Es)), f = t, tt.call(f) === "[object Map]" && o(a.get(cl));
        }
        break;
      case "delete":
        if (!l) {
          let f;
          o(a.get(Es)), f = t, tt.call(f) === "[object Map]" && o(a.get(cl));
        }
        break;
      case "set":
        let c;
        c = t, tt.call(c) === "[object Map]" && o(a.get(Es));
    }
  }
  Ql();
}
function Ps(t) {
  let e = ge(t);
  return e === t ? e : (dt(e, "iterate", rr), Et(t) ? e : e.map(Xt));
}
function za(t) {
  return dt(t = ge(t), "iterate", rr), t;
}
function jn(t, e) {
  return Nn(t) ? pn(t) ? ti(Xt(e)) : ti(e) : Xt(e);
}
let e0 = { __proto__: null, [Symbol.iterator]() {
  return Eo(this, Symbol.iterator, (t) => jn(this, t));
}, concat(...t) {
  return Ps(this).concat(...t.map((e) => ee(e) ? Ps(e) : e));
}, entries() {
  return Eo(this, "entries", (t) => (t[1] = jn(this, t[1]), t));
}, every(t, e) {
  return Sn(this, "every", t, e, void 0, arguments);
}, filter(t, e) {
  return Sn(this, "filter", t, e, (n) => n.map((s) => jn(this, s)), arguments);
}, find(t, e) {
  return Sn(this, "find", t, e, (n) => jn(this, n), arguments);
}, findIndex(t, e) {
  return Sn(this, "findIndex", t, e, void 0, arguments);
}, findLast(t, e) {
  return Sn(this, "findLast", t, e, (n) => jn(this, n), arguments);
}, findLastIndex(t, e) {
  return Sn(this, "findLastIndex", t, e, void 0, arguments);
}, forEach(t, e) {
  return Sn(this, "forEach", t, e, void 0, arguments);
}, includes(...t) {
  return Fo(this, "includes", t);
}, indexOf(...t) {
  return Fo(this, "indexOf", t);
}, join(t) {
  return Ps(this).join(t);
}, lastIndexOf(...t) {
  return Fo(this, "lastIndexOf", t);
}, map(t, e) {
  return Sn(this, "map", t, e, void 0, arguments);
}, pop() {
  return Ei(this, "pop");
}, push(...t) {
  return Ei(this, "push", t);
}, reduce(t, ...e) {
  return Wu(this, "reduce", t, e);
}, reduceRight(t, ...e) {
  return Wu(this, "reduceRight", t, e);
}, shift() {
  return Ei(this, "shift");
}, some(t, e) {
  return Sn(this, "some", t, e, void 0, arguments);
}, splice(...t) {
  return Ei(this, "splice", t);
}, toReversed() {
  return Ps(this).toReversed();
}, toSorted(t) {
  return Ps(this).toSorted(t);
}, toSpliced(...t) {
  return Ps(this).toSpliced(...t);
}, unshift(...t) {
  return Ei(this, "unshift", t);
}, values() {
  return Eo(this, "values", (t) => jn(this, t));
} };
function Eo(t, e, n) {
  let s = za(t), i = s[e]();
  return s === t || Et(t) || (i._next = i.next, i.next = () => {
    let r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
let t0 = Array.prototype;
function Sn(t, e, n, s, i, r) {
  let a = za(t), o = a !== t && !Et(t), l = a[e];
  if (l !== t0[e]) {
    let f = l.apply(t, r);
    return o ? Xt(f) : f;
  }
  let u = n;
  a !== t && (o ? u = function(f, m) {
    return n.call(this, jn(t, f), m, t);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, t);
  }));
  let c = l.call(a, u, s);
  return o && i ? i(c) : c;
}
function Wu(t, e, n, s) {
  let i = za(t), r = n;
  return i !== t && (Et(t) ? n.length > 3 && (r = function(a, o, l) {
    return n.call(this, a, o, l, t);
  }) : r = function(a, o, l) {
    return n.call(this, a, jn(t, o), l, t);
  }), i[e](r, ...s);
}
function Fo(t, e, n) {
  let s = ge(t);
  dt(s, "iterate", rr);
  let i = s[e](...n);
  return (i === -1 || i === !1) && Pa(n[0]) ? (n[0] = ge(n[0]), s[e](...n)) : i;
}
function Ei(t, e, n = []) {
  An(), _a++;
  let s = ge(t)[e].apply(t, n);
  return Ql(), Ln(), s;
}
let n0 = Ma("__proto__,__v_isRef,__isVue"), cf = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(en));
function s0(t) {
  en(t) || (t = String(t));
  let e = ge(this);
  return dt(e, "has", t), e.hasOwnProperty(t);
}
class df {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    let i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return s === (i ? r ? c0 : gf : r ? pf : mf).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    let a = ee(e);
    if (!i) {
      let l;
      if (a && (l = e0[n])) return l;
      if (n === "hasOwnProperty") return s0;
    }
    let o = Reflect.get(e, n, ze(e) ? e : s);
    if ((en(n) ? cf.has(n) : n0(n)) || (i || dt(e, "get", n), r)) return o;
    if (ze(o)) {
      let l = a && Aa(n) ? o : o.value;
      return i && Me(l) ? es(l) : l;
    }
    return Me(o) ? i ? es(o) : kn(o) : o;
  }
}
class ff extends df {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, i) {
    let r = e[n], a = ee(e) && Aa(n);
    if (!this._isShallow) {
      let u = Nn(r);
      if (Et(s) || Nn(s) || (r = ge(r), s = ge(s)), !a && ze(r) && !ze(s)) return u || (r.value = s), !0;
    }
    let o = a ? Number(n) < e.length : xe(e, n), l = Reflect.set(e, n, s, ze(e) ? e : i);
    return e === ge(i) && (o ? Ct(s, r) && xn(e, "set", n, s) : xn(e, "add", n, s)), l;
  }
  deleteProperty(e, n) {
    let s = xe(e, n);
    e[n];
    let i = Reflect.deleteProperty(e, n);
    return i && s && xn(e, "delete", n, void 0), i;
  }
  has(e, n) {
    let s = Reflect.has(e, n);
    return en(n) && cf.has(n) || dt(e, "has", n), s;
  }
  ownKeys(e) {
    return dt(e, "iterate", ee(e) ? "length" : Es), Reflect.ownKeys(e);
  }
}
class hf extends df {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
let i0 = new ff(), r0 = new hf(), a0 = new ff(!0);
new hf(!0);
let Oo = (t) => t;
function Dr(t) {
  return function() {
    return t !== "delete" && (t === "clear" ? void 0 : this);
  };
}
function Wa(t, e) {
  let n, s = (Ye(n = { get(i) {
    let r = this.__v_raw, a = ge(r), o = ge(i);
    t || (Ct(i, o) && dt(a, "get", i), dt(a, "get", o));
    let { has: l } = Reflect.getPrototypeOf(a), u = e ? Oo : t ? ti : Xt;
    return l.call(a, i) ? u(r.get(i)) : l.call(a, o) ? u(r.get(o)) : void (r !== a && r.get(i));
  }, get size() {
    let i = this.__v_raw;
    return t || dt(ge(i), "iterate", Es), i.size;
  }, has(i) {
    let r = this.__v_raw, a = ge(r), o = ge(i);
    return t || (Ct(i, o) && dt(a, "has", i), dt(a, "has", o)), i === o ? r.has(i) : r.has(i) || r.has(o);
  }, forEach(i, r) {
    let a = this, o = a.__v_raw, l = ge(o), u = e ? Oo : t ? ti : Xt;
    return t || dt(l, "iterate", Es), o.forEach((c, f) => i.call(r, u(c), u(f), a));
  } }, t ? { add: Dr("add"), set: Dr("set"), delete: Dr("delete"), clear: Dr("clear") } : { add(i) {
    e || Et(i) || Nn(i) || (i = ge(i));
    let r = ge(this);
    return Reflect.getPrototypeOf(r).has.call(r, i) || (r.add(i), xn(r, "add", i, i)), this;
  }, set(i, r) {
    e || Et(r) || Nn(r) || (r = ge(r));
    let a = ge(this), { has: o, get: l } = Reflect.getPrototypeOf(a), u = o.call(a, i);
    u || (i = ge(i), u = o.call(a, i));
    let c = l.call(a, i);
    return a.set(i, r), u ? Ct(r, c) && xn(a, "set", i, r) : xn(a, "add", i, r), this;
  }, delete(i) {
    let r = ge(this), { has: a, get: o } = Reflect.getPrototypeOf(r), l = a.call(r, i);
    l || (i = ge(i), l = a.call(r, i)), o && o.call(r, i);
    let u = r.delete(i);
    return l && xn(r, "delete", i, void 0), u;
  }, clear() {
    let i = ge(this), r = i.size !== 0, a = i.clear();
    return r && xn(i, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = function(...r) {
      let a, o = this.__v_raw, l = ge(o), u = (a = l, tt.call(a) === "[object Map]"), c = i === "entries" || i === Symbol.iterator && u, f = o[i](...r), m = e ? Oo : t ? ti : Xt;
      return t || dt(l, "iterate", i === "keys" && u ? cl : Es), { next() {
        let { value: h, done: p } = f.next();
        return p ? { value: h, done: p } : { value: c ? [m(h[0]), m(h[1])] : m(h), done: p };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }), n);
  return (i, r, a) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(xe(s, r) && r in i ? s : i, r, a);
}
let o0 = { get: Wa(!1, !1) }, l0 = { get: Wa(!1, !0) }, u0 = { get: Wa(!0, !1) };
Wa(!0, !0);
let mf = /* @__PURE__ */ new WeakMap(), pf = /* @__PURE__ */ new WeakMap(), gf = /* @__PURE__ */ new WeakMap(), c0 = /* @__PURE__ */ new WeakMap();
function kn(t) {
  return Nn(t) ? t : eu(t, !1, i0, o0, mf);
}
function d0(t) {
  return eu(t, !1, a0, l0, pf);
}
function es(t) {
  return eu(t, !0, r0, u0, gf);
}
function eu(t, e, n, s, i) {
  var r;
  let a;
  if (!Me(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
  let o = (r = t).__v_skip || !Object.isExtensible(r) ? 0 : (function(c) {
    switch (c) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  })((a = r, tt.call(a)).slice(8, -1));
  if (o === 0) return t;
  let l = i.get(t);
  if (l) return l;
  let u = new Proxy(t, o === 2 ? s : n);
  return i.set(t, u), u;
}
function pn(t) {
  return Nn(t) ? pn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Nn(t) {
  return !!(t && t.__v_isReadonly);
}
function Et(t) {
  return !!(t && t.__v_isShallow);
}
function Pa(t) {
  return !!t && !!t.__v_raw;
}
function ge(t) {
  let e = t && t.__v_raw;
  return e ? ge(e) : t;
}
function tu(t) {
  return !xe(t, "__v_skip") && Object.isExtensible(t) && Jd(t, "__v_skip", !0), t;
}
let Xt = (t) => Me(t) ? kn(t) : t, ti = (t) => Me(t) ? es(t) : t;
function ze(t) {
  return !!t && t.__v_isRef === !0;
}
function te(t) {
  return yf(t, !1);
}
function f0(t) {
  return yf(t, !0);
}
function yf(t, e) {
  return ze(t) ? t : new h0(t, e);
}
class h0 {
  constructor(e, n) {
    this.dep = new Ra(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : ge(e), this._value = n ? e : Xt(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    let n = this._rawValue, s = this.__v_isShallow || Et(e) || Nn(e);
    Ct(e = s ? e : ge(e), n) && (this._rawValue = e, this._value = s ? e : Xt(e), this.dep.trigger());
  }
}
function d(t) {
  return ze(t) ? t.value : t;
}
let m0 = { get: (t, e, n) => e === "__v_raw" ? t : d(Reflect.get(t, e, n)), set: (t, e, n, s) => {
  let i = t[e];
  return ze(i) && !ze(n) ? (i.value = n, !0) : Reflect.set(t, e, n, s);
} };
function vf(t) {
  return pn(t) ? t : new Proxy(t, m0);
}
class p0 {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    let n = this.dep = new Ra(), { get: s, set: i } = e(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function g0(t) {
  return new p0(t);
}
function y0(t) {
  let e = ee(t) ? Array(t.length) : {};
  for (let n in t) e[n] = new kf(t, n, void 0);
  return e;
}
class kf {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = ge(e);
    let i = !0, r = e;
    if (!ee(e) || !Aa(String(n))) do
      i = !Pa(r) || Et(r);
    while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = d(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && ze(this._raw[this._key])) {
      let n = this._object[this._key];
      if (ze(n)) {
        n.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    var e, n;
    let s;
    return e = this._raw, n = this._key, (s = ca.get(e)) && s.get(n);
  }
}
class v0 {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Vn(t, e, n) {
  return ze(t) ? t : le(t) ? new v0(t) : !Me(t) || !(arguments.length > 1) ? te(t) : new kf(t, e, n);
}
class k0 {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Ra(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ir - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && Ae !== this) return rf(this, !0), !0;
  }
  get value() {
    let e = this.dep.track();
    return lf(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
let Ar = {}, da = /* @__PURE__ */ new WeakMap();
function b0(t, e = !1, n = ws) {
  if (n) {
    let s = da.get(n);
    s || da.set(n, s = []), s.push(t);
  }
}
function En(t, e = 1 / 0, n) {
  if (e <= 0 || !Me(t) || t.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(t) || 0) >= e) return t;
  if (n.set(t, e), e--, ze(t)) En(t.value, e, n);
  else if (ee(t)) for (let s = 0; s < t.length; s++) En(t[s], e, n);
  else {
    let s, i;
    if (s = t, tt.call(s) === "[object Set]" || (i = t, tt.call(i) === "[object Map]")) t.forEach((r) => {
      En(r, e, n);
    });
    else {
      let r;
      if (r = t, tt.call(r) === "[object Object]") {
        for (let a in t) En(t[a], e, n);
        for (let a of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, a) && En(t[a], e, n);
      }
    }
  }
  return t;
}
function pr(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (i) {
    Ha(i, e, n);
  }
}
function tn(t, e, n, s) {
  if (le(t)) {
    let i = pr(t, e, n, s);
    return i && jd(i) && i.catch((r) => {
      Ha(r, e, n);
    }), i;
  }
  if (ee(t)) {
    let i = [];
    for (let r = 0; r < t.length; r++) i.push(tn(t[r], e, n, s));
    return i;
  }
}
function Ha(t, e, n, s = !0) {
  e && e.vnode;
  let { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || Te;
  if (e) {
    let a = e.parent, o = e.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      let u = a.ec;
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](t, o, l) === !1) return;
      }
      a = a.parent;
    }
    if (i) {
      An(), pr(i, null, 10, [t, o, l]), Ln();
      return;
    }
  }
  (function(a, o, l, u = !0, c = !1) {
    if (c) throw a;
    console.error(a);
  })(t, 0, 0, s, r);
}
let bt = [], cn = -1, ni = [], Jn = null, Js = 0, bf = Promise.resolve(), Kr = null;
function Is(t) {
  let e = Kr || bf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function nu(t) {
  if (!(1 & t.flags)) {
    let e = Yi(t), n = bt[bt.length - 1];
    !n || !(2 & t.flags) && e >= Yi(n) ? bt.push(t) : bt.splice((function(s) {
      let i = cn + 1, r = bt.length;
      for (; i < r; ) {
        let a = i + r >>> 1, o = bt[a], l = Yi(o);
        l < s || l === s && 2 & o.flags ? i = a + 1 : r = a;
      }
      return i;
    })(e), 0, t), t.flags |= 1, wf();
  }
}
function wf() {
  Kr || (Kr = bf.then(function t(e) {
    try {
      for (cn = 0; cn < bt.length; cn++) {
        let n = bt[cn];
        n && !(8 & n.flags) && (4 & n.flags && (n.flags &= -2), pr(n, n.i, n.i ? 15 : 14), 4 & n.flags || (n.flags &= -2));
      }
    } finally {
      for (; cn < bt.length; cn++) {
        let n = bt[cn];
        n && (n.flags &= -2);
      }
      cn = -1, bt.length = 0, Sf(), Kr = null, (bt.length || ni.length) && t();
    }
  }));
}
function w0(t) {
  ee(t) ? ni.push(...t) : Jn && t.id === -1 ? Jn.splice(Js + 1, 0, t) : 1 & t.flags || (ni.push(t), t.flags |= 1), wf();
}
function Pu(t, e, n = cn + 1) {
  for (; n < bt.length; n++) {
    let s = bt[n];
    if (s && 2 & s.flags) {
      if (t && s.id !== t.uid) continue;
      bt.splice(n, 1), n--, 4 & s.flags && (s.flags &= -2), s(), 4 & s.flags || (s.flags &= -2);
    }
  }
}
function Sf(t) {
  if (ni.length) {
    let e = [...new Set(ni)].sort((n, s) => Yi(n) - Yi(s));
    if (ni.length = 0, Jn) return void Jn.push(...e);
    for (Js = 0, Jn = e; Js < Jn.length; Js++) {
      let n = Jn[Js];
      4 & n.flags && (n.flags &= -2), 8 & n.flags || n(), n.flags &= -2;
    }
    Jn = null, Js = 0;
  }
}
let Yi = (t) => t.id == null ? 2 & t.flags ? -1 : 1 / 0 : t.id, ot = null, Tf = null;
function fa(t) {
  let e = ot;
  return ot = t, Tf = t && t.type.__scopeId || null, e;
}
function Z(t, e = ot, n) {
  if (!e || t._n) return t;
  let s = (...i) => {
    let r;
    s._d && va(-1);
    let a = fa(e);
    try {
      r = t(...i);
    } finally {
      fa(a), s._d && va(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function su(t, e) {
  if (ot === null) return t;
  let n = Ya(ot), s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [r, a, o, l = Te] = e[i];
    r && (le(r) && (r = { mounted: r, updated: r }), r.deep && En(a), s.push({ dir: r, instance: n, value: a, oldValue: void 0, arg: o, modifiers: l }));
  }
  return t;
}
function ms(t, e, n, s) {
  let i = t.dirs, r = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    let o = i[a];
    r && (o.oldValue = r[a].value);
    let l = o.dir[s];
    l && (An(), tn(l, n, 8, [t.el, o, t, e]), Ln());
  }
}
let If = /* @__PURE__ */ Symbol("_vte"), Ni = (t) => t && (t.disabled || t.disabled === ""), Hu = (t) => t && (t.defer || t.defer === ""), Uu = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Zu = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Mo = (t, e) => {
  let n = t && t.to;
  return _e(n) ? e ? e(n) : null : n;
}, $f = { name: "Teleport", __isTeleport: !0, process(t, e, n, s, i, r, a, o, l, u) {
  let { mc: c, pc: f, pbc: m, o: { insert: h, querySelector: p, createText: k } } = u, S = Ni(e.props), { shapeFlag: b, children: L, dynamicChildren: T } = e;
  if (t == null) {
    let D = e.el = k(""), w = e.anchor = k("");
    h(D, n, s), h(w, n, s);
    let E = (N, O) => {
      16 & b && c(L, N, O, i, r, a, o, l);
    }, U = () => {
      let N = e.target = Mo(e.props, p), O = qu(N, e, k, h);
      N && (a !== "svg" && Uu(N) ? a = "svg" : a !== "mathml" && Zu(N) && (a = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(N), S || (E(N, O), Nr(e, !1)));
    };
    S && (E(n, w), Nr(e, !0)), Hu(e.props) ? (e.el.__isMounted = !1, kt(() => {
      U(), delete e.el.__isMounted;
    }, r)) : U();
  } else {
    if (Hu(e.props) && t.el.__isMounted === !1) return void kt(() => {
      $f.process(t, e, n, s, i, r, a, o, l, u);
    }, r);
    e.el = t.el, e.targetStart = t.targetStart;
    let D = e.anchor = t.anchor, w = e.target = t.target, E = e.targetAnchor = t.targetAnchor, U = Ni(t.props), N = U ? n : w, O = U ? D : E;
    if (a === "svg" || Uu(w) ? a = "svg" : (a === "mathml" || Zu(w)) && (a = "mathml"), T ? (m(t.dynamicChildren, T, N, i, r, a, o), du(t, e, !0)) : l || f(t, e, N, O, i, r, a, o, !1), S) U ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Lr(e, n, D, u, 1);
    else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
      let P = e.target = Mo(e.props, p);
      P && Lr(e, P, null, u, 0);
    } else U && Lr(e, w, E, u, 1);
    Nr(e, S);
  }
}, remove(t, e, n, { um: s, o: { remove: i } }, r) {
  let { shapeFlag: a, children: o, anchor: l, targetStart: u, targetAnchor: c, target: f, props: m } = t;
  if (f && (i(u), i(c)), r && i(l), 16 & a) {
    let h = r || !Ni(m);
    for (let p = 0; p < o.length; p++) {
      let k = o[p];
      s(k, e, n, h, !!k.dynamicChildren);
    }
  }
}, move: Lr, hydrate: function(t, e, n, s, i, r, { o: { nextSibling: a, parentNode: o, querySelector: l, insert: u, createText: c } }, f) {
  function m(k, S, b, L) {
    S.anchor = f(a(k), S, o(k), n, s, i, r), S.targetStart = b, S.targetAnchor = L;
  }
  let h = e.target = Mo(e.props, l), p = Ni(e.props);
  if (h) {
    let k = h._lpa || h.firstChild;
    if (16 & e.shapeFlag) if (p) m(t, e, k, k && a(k));
    else {
      e.anchor = a(t);
      let S = k;
      for (; S; ) {
        if (S && S.nodeType === 8) {
          if (S.data === "teleport start anchor") e.targetStart = S;
          else if (S.data === "teleport anchor") {
            e.targetAnchor = S, h._lpa = e.targetAnchor && a(e.targetAnchor);
            break;
          }
        }
        S = a(S);
      }
      e.targetAnchor || qu(h, e, c, u), f(k && a(k), e, h, n, s, i, r);
    }
    Nr(e, p);
  } else p && 16 & e.shapeFlag && m(t, e, t, a(t));
  return e.anchor && a(e.anchor);
} };
function Lr(t, e, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  let { el: a, anchor: o, shapeFlag: l, children: u, props: c } = t, f = r === 2;
  if (f && s(a, e, n), (!f || Ni(c)) && 16 & l) for (let m = 0; m < u.length; m++) i(u[m], e, n, 2);
  f && s(o, e, n);
}
let Cf = $f;
function Nr(t, e) {
  let n = t.ctx;
  if (n && n.ut) {
    let s, i;
    for (e ? (s = t.el, i = t.anchor) : (s = t.targetStart, i = t.targetAnchor); s && s !== i; ) s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function qu(t, e, n, s) {
  let i = e.targetStart = n(""), r = e.targetAnchor = n("");
  return i[If] = r, t && (s(i, t), s(r, t)), r;
}
let Cn = /* @__PURE__ */ Symbol("_leaveCb"), Vr = /* @__PURE__ */ Symbol("_enterCb");
function xf() {
  let t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return Rn(() => {
    t.isMounted = !0;
  }), au(() => {
    t.isUnmounting = !0;
  }), t;
}
let At = [Function, Array], Ef = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: At, onEnter: At, onAfterEnter: At, onEnterCancelled: At, onBeforeLeave: At, onLeave: At, onAfterLeave: At, onLeaveCancelled: At, onBeforeAppear: At, onAppear: At, onAfterAppear: At, onAppearCancelled: At }, Ff = (t) => {
  let e = t.subTree;
  return e.component ? Ff(e.component) : e;
};
function Of(t) {
  let e = t[0];
  if (t.length > 1) {
    for (let n of t) if (n.type !== at) {
      e = n;
      break;
    }
  }
  return e;
}
let S0 = { name: "BaseTransition", props: Ef, setup(t, { slots: e }) {
  let n = bn(), s = xf();
  return () => {
    let i = e.default && iu(e.default(), !0);
    if (!i || !i.length) return;
    let r = Of(i), a = ge(t), { mode: o } = a;
    if (s.isLeaving) return Do(r);
    let l = Gu(r);
    if (!l) return Do(r);
    let u = ar(l, a, s, n, (f) => u = f);
    l.type !== at && Ls(l, u);
    let c = n.subTree && Gu(n.subTree);
    if (c && c.type !== at && !Ts(c, l) && Ff(n).type !== at) {
      let f = ar(c, a, s, n);
      if (Ls(c, f), o === "out-in" && l.type !== at) return s.isLeaving = !0, f.afterLeave = () => {
        s.isLeaving = !1, 8 & n.job.flags || n.update(), delete f.afterLeave, c = void 0;
      }, Do(r);
      o === "in-out" && l.type !== at ? f.delayLeave = (m, h, p) => {
        Mf(s, c)[String(c.key)] = c, m[Cn] = () => {
          h(), m[Cn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          p(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return r;
  };
} };
function Mf(t, e) {
  let { leavingVNodes: n } = t, s = n.get(e.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(e.type, s)), s;
}
function ar(t, e, n, s, i) {
  let { appear: r, mode: a, persisted: o = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: m, onLeave: h, onAfterLeave: p, onLeaveCancelled: k, onBeforeAppear: S, onAppear: b, onAfterAppear: L, onAppearCancelled: T } = e, D = String(t.key), w = Mf(n, t), E = (O, P) => {
    O && tn(O, s, 9, P);
  }, U = (O, P) => {
    let Q = P[1];
    E(O, P), ee(O) ? O.every((W) => W.length <= 1) && Q() : O.length <= 1 && Q();
  }, N = { mode: a, persisted: o, beforeEnter(O) {
    let P = l;
    if (!n.isMounted) if (r) P = S || l;
    else return;
    O[Cn] && O[Cn](!0);
    let Q = w[D];
    Q && Ts(t, Q) && Q.el[Cn] && Q.el[Cn](), E(P, [O]);
  }, enter(O) {
    let P = u, Q = c, W = f;
    if (!n.isMounted) if (r) P = b || u, Q = L || c, W = T || f;
    else return;
    let ne = !1, me = O[Vr] = (ce) => {
      ne || (ne = !0, ce ? E(W, [O]) : E(Q, [O]), N.delayedLeave && N.delayedLeave(), O[Vr] = void 0);
    };
    P ? U(P, [O, me]) : me();
  }, leave(O, P) {
    let Q = String(t.key);
    if (O[Vr] && O[Vr](!0), n.isUnmounting) return P();
    E(m, [O]);
    let W = !1, ne = O[Cn] = (me) => {
      W || (W = !0, P(), me ? E(k, [O]) : E(p, [O]), O[Cn] = void 0, w[Q] === t && delete w[Q]);
    };
    w[Q] = t, h ? U(h, [O, ne]) : ne();
  }, clone(O) {
    let P = ar(O, e, n, s, i);
    return i && i(P), P;
  } };
  return N;
}
function Do(t) {
  if (Ua(t)) return (t = os(t)).children = null, t;
}
function Gu(t) {
  if (!Ua(t)) return t.type.__isTeleport && t.children ? Of(t.children) : t;
  if (t.component) return t.component.subTree;
  let { shapeFlag: e, children: n } = t;
  if (n) {
    if (16 & e) return n[0];
    if (32 & e && le(n.default)) return n.default();
  }
}
function Ls(t, e) {
  6 & t.shapeFlag && t.component ? (t.transition = e, Ls(t.component.subTree, e)) : 128 & t.shapeFlag ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function iu(t, e = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < t.length; r++) {
    let a = t[r], o = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === he ? (128 & a.patchFlag && i++, s = s.concat(iu(a.children, e, o))) : (e || a.type !== at) && s.push(o != null ? os(a, { key: o }) : a);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function H(t, e) {
  return le(t) ? Ye({ name: t.name }, e, { setup: t }) : t;
}
function ru() {
  let t = bn();
  return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
}
function Df(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function On(t) {
  let e = bn(), n = f0(null);
  return e && Object.defineProperty(e.refs === Te ? e.refs = {} : e.refs, t, { enumerable: !0, get: () => n.value, set: (s) => n.value = s }), n;
}
let ha = /* @__PURE__ */ new WeakMap();
function ji(t, e, n, s, i = !1) {
  if (ee(t)) return void t.forEach((p, k) => ji(p, e && (ee(e) ? e[k] : e), n, s, i));
  if (si(s) && !i) {
    512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && ji(t, e, n, s.component.subTree);
    return;
  }
  let r = 4 & s.shapeFlag ? Ya(s.component) : s.el, a = i ? null : r, { i: o, r: l } = t, u = e && e.r, c = o.refs === Te ? o.refs = {} : o.refs, f = o.setupState, m = ge(f), h = f === Te ? Yd : (p) => xe(m, p);
  if (u != null && u !== l && (Yu(e), _e(u) ? (c[u] = null, h(u) && (f[u] = null)) : ze(u) && (u.value = null, e.k && (c[e.k] = null))), le(l)) pr(l, o, 12, [a, c]);
  else {
    let p = _e(l), k = ze(l);
    if (p || k) {
      let S = () => {
        if (t.f) {
          let b = p ? h(l) ? f[l] : c[l] : l.value;
          if (i) ee(b) && Jl(b, r);
          else if (ee(b)) b.includes(r) || b.push(r);
          else if (p) c[l] = [r], h(l) && (f[l] = c[l]);
          else {
            let L = [r];
            l.value = L, t.k && (c[t.k] = L);
          }
        } else p ? (c[l] = a, h(l) && (f[l] = a)) : k && (l.value = a, t.k && (c[t.k] = a));
      };
      if (a) {
        let b = () => {
          S(), ha.delete(t);
        };
        b.id = -1, ha.set(t, b), kt(b, n);
      } else Yu(t), S();
    }
  }
}
function Yu(t) {
  let e = ha.get(t);
  e && (e.flags |= 8, ha.delete(t));
}
Ba().requestIdleCallback;
Ba().cancelIdleCallback;
let si = (t) => !!t.type.__asyncLoader, Ua = (t) => t.type.__isKeepAlive;
function T0(t, e) {
  Af(t, "a", e);
}
function I0(t, e) {
  Af(t, "da", e);
}
function Af(t, e, n = ht) {
  let s = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated) return;
      i = i.parent;
    }
    return t();
  });
  if (ma(e, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) Ua(i.parent.vnode) && (function(r, a, o, l) {
      let u = ma(a, r, l, !0);
      Vs(() => {
        Jl(l[a], u);
      }, o);
    })(s, e, n, i), i = i.parent;
  }
}
function ma(t, e, n = ht, s = !1) {
  if (n) {
    let i = n[t] || (n[t] = []), r = e.__weh || (e.__weh = (...a) => {
      An();
      let o = yr(n), l = tn(e, n, t, a);
      return o(), Ln(), l;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
let _n = (t) => (e, n = ht) => {
  ur && t !== "sp" || ma(t, (...s) => e(...s), n);
}, $0 = _n("bm"), Rn = _n("m"), C0 = _n("bu"), Lf = _n("u"), au = _n("bum"), Vs = _n("um"), x0 = _n("sp"), E0 = _n("rtg"), F0 = _n("rtc");
function O0(t, e = ht) {
  ma("ec", t, e);
}
let Nf = "components";
function M0(t, e) {
  return Bf(Nf, t, !0, e) || t;
}
let Vf = /* @__PURE__ */ Symbol.for("v-ndc");
function ou(t) {
  return _e(t) ? Bf(Nf, t, !1) || t : t || Vf;
}
function Bf(t, e, n = !0, s = !1) {
  let i = ot || ht;
  if (i) {
    let r = i.type;
    {
      let o = sp(r, !1);
      if (o && (o === e || o === Mt(e) || o === Na(Mt(e)))) return r;
    }
    let a = ju(i[t] || r[t], e) || ju(i.appContext[t], e);
    return !a && s ? r : a;
  }
}
function ju(t, e) {
  return t && (t[e] || t[Mt(e)] || t[Na(Mt(e))]);
}
function It(t, e, n, s) {
  let i, r = n, a = ee(t);
  if (a || _e(t)) {
    let o = a && pn(t), l = !1, u = !1;
    o && (l = !Et(t), u = Nn(t), t = za(t)), i = Array(t.length);
    for (let c = 0, f = t.length; c < f; c++) i[c] = e(l ? u ? ti(Xt(t[c])) : Xt(t[c]) : t[c], c, void 0, r);
  } else if (typeof t == "number") {
    i = Array(t);
    for (let o = 0; o < t; o++) i[o] = e(o + 1, o, void 0, r);
  } else if (Me(t)) if (t[Symbol.iterator]) i = Array.from(t, (o, l) => e(o, l, void 0, r));
  else {
    let o = Object.keys(t);
    i = Array(o.length);
    for (let l = 0, u = o.length; l < u; l++) {
      let c = o[l];
      i[l] = e(t[c], c, l, r);
    }
  }
  else i = [];
  return i;
}
function lu(t, e) {
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    if (ee(s)) for (let i = 0; i < s.length; i++) t[s[i].name] = s[i].fn;
    else s && (t[s.name] = s.key ? (...i) => {
      let r = s.fn(...i);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return t;
}
function ae(t, e, n = {}, s, i) {
  if (ot.ce || ot.parent && si(ot.parent) && ot.parent.ce) {
    let u = Object.keys(n).length > 0;
    return e !== "default" && (n.name = e), y(), _(he, null, [V("slot", n, s && s())], u ? -2 : 64);
  }
  let r = t[e];
  r && r._c && (r._d = !1), y();
  let a = r && _f(r(n)), o = n.key || a && a.key, l = _(he, { key: (o && !en(o) ? o : `_${e}`) + (!a && s ? "_fb" : "") }, a || (s ? s() : []), a && t._ === 1 ? 64 : -2);
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function _f(t) {
  return t.some((e) => !lr(e) || e.type !== at && (e.type !== he || !!_f(e.children))) ? t : null;
}
let dl = (t) => t ? Qf(t) ? Ya(t) : dl(t.parent) : null, Ji = Ye(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => dl(t.parent), $root: (t) => dl(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => zf(t), $forceUpdate: (t) => t.f || (t.f = () => {
  nu(t.update);
}), $nextTick: (t) => t.n || (t.n = Is.bind(t.proxy)), $watch: (t) => R0.bind(t) }), Ao = (t, e) => t !== Te && !t.__isScriptSetup && xe(t, e), fl = { get({ _: t }, e) {
  let n, s;
  if (e === "__v_skip") return !0;
  let { ctx: i, setupState: r, data: a, props: o, accessCache: l, type: u, appContext: c } = t;
  if (e[0] !== "$") {
    let m = l[e];
    if (m !== void 0) switch (m) {
      case 1:
        return r[e];
      case 2:
        return a[e];
      case 4:
        return i[e];
      case 3:
        return o[e];
    }
    else {
      if (Ao(r, e)) return l[e] = 1, r[e];
      if (a !== Te && xe(a, e)) return l[e] = 2, a[e];
      if (xe(o, e)) return l[e] = 3, o[e];
      if (i !== Te && xe(i, e)) return l[e] = 4, i[e];
      hl && (l[e] = 0);
    }
  }
  let f = Ji[e];
  return f ? (e === "$attrs" && dt(t.attrs, "get", ""), f(t)) : (n = u.__cssModules) && (n = n[e]) ? n : i !== Te && xe(i, e) ? (l[e] = 4, i[e]) : xe(s = c.config.globalProperties, e) ? s[e] : void 0;
}, set({ _: t }, e, n) {
  let { data: s, setupState: i, ctx: r } = t;
  return Ao(i, e) ? (i[e] = n, !0) : s !== Te && xe(s, e) ? (s[e] = n, !0) : !xe(t.props, e) && !(e[0] === "$" && e.slice(1) in t) && (r[e] = n, !0);
}, has({ _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: i, props: r, type: a } }, o) {
  let l;
  return !!(n[o] || t !== Te && o[0] !== "$" && xe(t, o) || Ao(e, o) || xe(r, o) || xe(s, o) || xe(Ji, o) || xe(i.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
}, defineProperty(t, e, n) {
  return n.get != null ? t._.accessCache[e] = 0 : xe(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
} };
Ye({}, fl, { get(t, e) {
  if (e !== Symbol.unscopables) return fl.get(t, e, t);
}, has: (t, e) => e[0] !== "_" && !Y1(e) });
function Rf() {
  return D0().slots;
}
function D0(t) {
  let e = bn();
  return e.setupContext || (e.setupContext = eh(e));
}
function pa(t) {
  return ee(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t;
}
function nn(t, e) {
  return t && e ? ee(t) && ee(e) ? t.concat(e) : Ye({}, pa(t), pa(e)) : t || e;
}
let hl = !0;
function Ju(t, e, n) {
  tn(ee(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function zf(t) {
  let e, n = t.type, { mixins: s, extends: i } = n, { mixins: r, optionsCache: a, config: { optionMergeStrategies: o } } = t.appContext, l = a.get(n);
  return l ? e = l : r.length || s || i ? (e = {}, r.length && r.forEach((u) => ga(e, u, o, !0)), ga(e, n, o)) : e = n, Me(n) && a.set(n, e), e;
}
function ga(t, e, n, s = !1) {
  let { mixins: i, extends: r } = e;
  for (let a in r && ga(t, r, n, !0), i && i.forEach((o) => ga(t, o, n, !0)), e) if (!(s && a === "expose")) {
    let o = A0[a] || n && n[a];
    t[a] = o ? o(t[a], e[a]) : e[a];
  }
  return t;
}
let A0 = { data: Ku, props: Qu, emits: Qu, methods: Fi, computed: Fi, beforeCreate: vt, created: vt, beforeMount: vt, mounted: vt, beforeUpdate: vt, updated: vt, beforeDestroy: vt, beforeUnmount: vt, destroyed: vt, unmounted: vt, activated: vt, deactivated: vt, errorCaptured: vt, serverPrefetch: vt, components: Fi, directives: Fi, watch: function(t, e) {
  if (!t) return e;
  if (!e) return t;
  let n = Ye(/* @__PURE__ */ Object.create(null), t);
  for (let s in e) n[s] = vt(t[s], e[s]);
  return n;
}, provide: Ku, inject: function(t, e) {
  return Fi(ml(t), ml(e));
} };
function Ku(t, e) {
  return e ? t ? function() {
    return Ye(le(t) ? t.call(this, this) : t, le(e) ? e.call(this, this) : e);
  } : e : t;
}
function ml(t) {
  if (ee(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function vt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Fi(t, e) {
  return t ? Ye(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Qu(t, e) {
  return t ? ee(t) && ee(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ye(/* @__PURE__ */ Object.create(null), pa(t), pa(e ?? {})) : e;
}
function Wf() {
  return { app: null, config: { isNativeTag: Yd, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let L0 = 0, Fs = null;
function as(t, e) {
  if (ht) {
    let n = ht.provides, s = ht.parent && ht.parent.provides;
    s === n && (n = ht.provides = Object.create(s)), n[t] = e;
  }
}
function Dn(t, e, n = !1) {
  let s = bn();
  if (s || Fs) {
    let i = Fs ? Fs._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && le(e) ? e.call(s && s.proxy) : e;
  }
}
function N0() {
  return !!(bn() || Fs);
}
let V0 = /* @__PURE__ */ Symbol.for("v-scx"), B0 = () => Dn(V0);
function Za(t, e) {
  return qa(t, null, e);
}
function _0(t, e) {
  return qa(t, null, { flush: "sync" });
}
function Re(t, e, n) {
  return qa(t, e, n);
}
function qa(t, e, n = Te) {
  let s, { immediate: i, flush: r } = n, a = Ye({}, n), o = e && i || !e && r !== "post";
  if (ur) {
    if (r === "sync") {
      let f = B0();
      s = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!o) {
      let f = () => {
      };
      return f.stop = hn, f.resume = hn, f.pause = hn, f;
    }
  }
  let l = ht;
  a.call = (f, m, h) => tn(f, l, m, h);
  let u = !1;
  r === "post" ? a.scheduler = (f) => {
    kt(f, l && l.suspense);
  } : r !== "sync" && (u = !0, a.scheduler = (f, m) => {
    m ? f() : nu(f);
  }), a.augmentJob = (f) => {
    e && (f.flags |= 4), u && (f.flags |= 2, l && (f.id = l.uid, f.i = l));
  };
  let c = (function(f, m, h = Te) {
    let p, k, S, b, { immediate: L, deep: T, once: D, scheduler: w, augmentJob: E, call: U } = h, N = (ce) => T ? ce : Et(ce) || T === !1 || T === 0 ? En(ce, 1) : En(ce), O = !1, P = !1;
    if (ze(f) ? (k = () => f.value, O = Et(f)) : pn(f) ? (k = () => N(f), O = !0) : ee(f) ? (P = !0, O = f.some((ce) => pn(ce) || Et(ce)), k = () => f.map((ce) => ze(ce) ? ce.value : pn(ce) ? N(ce) : le(ce) ? U ? U(ce, 2) : ce() : void 0)) : k = le(f) ? m ? U ? () => U(f, 2) : f : () => {
      if (S) {
        An();
        try {
          S();
        } finally {
          Ln();
        }
      }
      let ce = ws;
      ws = p;
      try {
        return U ? U(f, 3, [b]) : f(b);
      } finally {
        ws = ce;
      }
    } : hn, m && T) {
      let ce = k, Le = T === !0 ? 1 / 0 : T;
      k = () => En(ce(), Le);
    }
    let Q = tf(), W = () => {
      p.stop(), Q && Q.active && Jl(Q.effects, p);
    };
    if (D && m) {
      let ce = m;
      m = (...Le) => {
        ce(...Le), W();
      };
    }
    let ne = P ? Array(f.length).fill(Ar) : Ar, me = (ce) => {
      if (1 & p.flags && (p.dirty || ce)) if (m) {
        let Le = p.run();
        if (T || O || (P ? Le.some((we, ke) => Ct(we, ne[ke])) : Ct(Le, ne))) {
          S && S();
          let we = ws;
          ws = p;
          try {
            let ke = [Le, ne === Ar ? void 0 : P && ne[0] === Ar ? [] : ne, b];
            ne = Le, U ? U(m, 3, ke) : m(...ke);
          } finally {
            ws = we;
          }
        }
      } else p.run();
    };
    return E && E(me), (p = new sf(k)).scheduler = w ? () => w(me, !1) : me, b = (ce) => b0(ce, !1, p), S = p.onStop = () => {
      let ce = da.get(p);
      if (ce) {
        if (U) U(ce, 4);
        else for (let Le of ce) Le();
        da.delete(p);
      }
    }, m ? L ? me(!0) : ne = p.run() : w ? w(me.bind(null, !0), !0) : p.run(), W.pause = p.pause.bind(p), W.resume = p.resume.bind(p), W.stop = W, W;
  })(t, e, a);
  return ur && (s ? s.push(c) : o && c()), c;
}
function R0(t, e, n) {
  let s, i = this.proxy, r = _e(t) ? t.includes(".") ? Pf(i, t) : () => i[t] : t.bind(i, i);
  le(e) ? s = e : (s = e.handler, n = e);
  let a = yr(this), o = qa(r, s.bind(i), n);
  return a(), o;
}
function Pf(t, e) {
  let n = e.split(".");
  return () => {
    let s = t;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function wt(t, e, n = Te) {
  let s = bn(), i = Mt(e), r = cs(e), a = Hf(t, i), o = g0((l, u) => {
    let c, f, m = Te;
    return _0(() => {
      let h = t[i];
      Ct(c, h) && (c = h, u());
    }), { get: () => (l(), n.get ? n.get(c) : c), set(h) {
      let p = n.set ? n.set(h) : h;
      if (!Ct(p, c) && !(m !== Te && Ct(h, m))) return;
      let k = s.vnode.props;
      k && (e in k || i in k || r in k) && (`onUpdate:${e}` in k || `onUpdate:${i}` in k || `onUpdate:${r}` in k) || (c = h, u()), s.emit(`update:${e}`, p), Ct(h, p) && Ct(h, m) && !Ct(p, f) && u(), m = h, f = p;
    } };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return { next: () => l < 2 ? { value: l++ ? a || Te : o, done: !1 } : { done: !0 } };
  }, o;
}
let Hf = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Mt(e)}Modifiers`] || t[`${cs(e)}Modifiers`];
function z0(t, e, ...n) {
  let s;
  if (t.isUnmounted) return;
  let i = t.vnode.props || Te, r = n, a = e.startsWith("update:"), o = a && Hf(i, e.slice(7));
  o && (o.trim && (r = n.map((c) => _e(c) ? c.trim() : c)), o.number && (r = n.map(Va)));
  let l = i[s = To(e)] || i[s = To(Mt(e))];
  !l && a && (l = i[s = To(cs(e))]), l && tn(l, t, 6, r);
  let u = i[s + "Once"];
  if (u) {
    if (t.emitted) {
      if (t.emitted[s]) return;
    } else t.emitted = {};
    t.emitted[s] = !0, tn(u, t, 6, r);
  }
}
let W0 = /* @__PURE__ */ new WeakMap();
function ya(t, e) {
  return !!t && !!Da(e) && (xe(t, (e = e.slice(2).replace(/Once$/, ""))[0].toLowerCase() + e.slice(1)) || xe(t, cs(e)) || xe(t, e));
}
function Xu(t) {
  let e, n, { type: s, vnode: i, proxy: r, withProxy: a, propsOptions: [o], slots: l, attrs: u, emit: c, render: f, renderCache: m, props: h, data: p, setupState: k, ctx: S, inheritAttrs: b } = t, L = fa(t);
  try {
    if (4 & i.shapeFlag) {
      let D = a || r;
      e = dn(f.call(D, D, m, h, k, p, S)), n = u;
    } else e = dn(s.length > 1 ? s(h, { attrs: u, slots: l, emit: c }) : s(h, null)), n = s.props ? u : P0(u);
  } catch (D) {
    Ki.length = 0, Ha(D, t, 1), e = V(at);
  }
  let T = e;
  if (n && b !== !1) {
    let D = Object.keys(n), { shapeFlag: w } = T;
    D.length && 7 & w && (o && D.some(jl) && (n = H0(n, o)), T = os(T, n, !1, !0));
  }
  return i.dirs && ((T = os(T, null, !1, !0)).dirs = T.dirs ? T.dirs.concat(i.dirs) : i.dirs), i.transition && Ls(T, i.transition), e = T, fa(L), e;
}
let P0 = (t) => {
  let e;
  for (let n in t) (n === "class" || n === "style" || Da(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, H0 = (t, e) => {
  let n = {};
  for (let s in t) jl(s) && s.slice(9) in e || (n[s] = t[s]);
  return n;
};
function ec(t, e, n) {
  let s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < s.length; i++) {
    let r = s[i];
    if (e[r] !== t[r] && !ya(n, r)) return !0;
  }
  return !1;
}
function U0({ vnode: t, parent: e }, n) {
  for (; e; ) {
    let s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t) (t = e.vnode).el = n, e = e.parent;
    else break;
  }
}
let pl = {}, Uf = (t) => Object.getPrototypeOf(t) === pl;
function Zf(t, e, n, s) {
  let i, [r, a] = t.propsOptions, o = !1;
  if (e) for (let l in e) {
    let u;
    if (Gi(l)) continue;
    let c = e[l];
    r && xe(r, u = Mt(l)) ? a && a.includes(u) ? (i || (i = {}))[u] = c : n[u] = c : ya(t.emitsOptions, l) || l in s && c === s[l] || (s[l] = c, o = !0);
  }
  if (a) {
    let l = ge(n), u = i || Te;
    for (let c = 0; c < a.length; c++) {
      let f = a[c];
      n[f] = gl(r, l, f, u[f], t, !xe(u, f));
    }
  }
  return o;
}
function gl(t, e, n, s, i, r) {
  let a = t[n];
  if (a != null) {
    let o = xe(a, "default");
    if (o && s === void 0) {
      let l = a.default;
      if (a.type !== Function && !a.skipFactory && le(l)) {
        let { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          let c = yr(i);
          s = u[n] = l.call(null, e), c();
        }
      } else s = l;
      i.ce && i.ce._setProp(n, s);
    }
    a[0] && (r && !o ? s = !1 : a[1] && (s === "" || s === cs(n)) && (s = !0));
  }
  return s;
}
let Z0 = /* @__PURE__ */ new WeakMap();
function tc(t) {
  return !(t[0] === "$" || Gi(t));
}
let uu = (t) => t === "_" || t === "_ctx" || t === "$stable", cu = (t) => ee(t) ? t.map(dn) : [dn(t)], q0 = (t, e, n) => {
  if (e._n) return e;
  let s = Z((...i) => cu(e(...i)), n);
  return s._c = !1, s;
}, qf = (t, e, n) => {
  let s = t._ctx;
  for (let i in t) {
    if (uu(i)) continue;
    let r = t[i];
    if (le(r)) e[i] = q0(i, r, s);
    else if (r != null) {
      let a = cu(r);
      e[i] = () => a;
    }
  }
}, Gf = (t, e) => {
  let n = cu(e);
  t.slots.default = () => n;
}, Yf = (t, e, n) => {
  for (let s in e) (n || !uu(s)) && (t[s] = e[s]);
}, kt = J0;
function G0(t) {
  return Y0(t);
}
function Y0(t, e) {
  var n;
  let s, i;
  Ba().__VUE__ = !0;
  let { insert: r, remove: a, patchProp: o, createElement: l, createText: u, createComment: c, setText: f, setElementText: m, parentNode: h, nextSibling: p, setScopeId: k = hn, insertStaticContent: S } = t, b = (g, v, I, z = null, A = null, $ = null, B, F = null, M = !!v.dynamicChildren) => {
    if (g === v) return;
    g && !Ts(g, v) && (z = Fr(g), qe(g, A, $, !0), g = null), v.patchFlag === -2 && (M = !1, v.dynamicChildren = null);
    let { type: C, ref: q, shapeFlag: J } = v;
    switch (C) {
      case Ga:
        L(g, v, I, z);
        break;
      case at:
        T(g, v, I, z);
        break;
      case No:
        g == null && D(v, I, z, B);
        break;
      case he:
        W(g, v, I, z, A, $, B, F, M);
        break;
      default:
        1 & J ? w(g, v, I, z, A, $, B, F, M) : 6 & J ? ne(g, v, I, z, A, $, B, F, M) : (64 & J || 128 & J) && C.process(g, v, I, z, A, $, B, F, M, Ci);
    }
    q != null && A ? ji(q, g && g.ref, $, v || g, !v) : q == null && g && g.ref != null && ji(g.ref, null, $, g, !0);
  }, L = (g, v, I, z) => {
    if (g == null) r(v.el = u(v.children), I, z);
    else {
      let A = v.el = g.el;
      v.children !== g.children && f(A, v.children);
    }
  }, T = (g, v, I, z) => {
    g == null ? r(v.el = c(v.children || ""), I, z) : v.el = g.el;
  }, D = (g, v, I, z) => {
    [g.el, g.anchor] = S(g.children, v, I, z, g.el, g.anchor);
  }, w = (g, v, I, z, A, $, B, F, M) => {
    if (v.type === "svg" ? B = "svg" : v.type === "math" && (B = "mathml"), g == null) E(v, I, z, A, $, B, F, M);
    else {
      let C = g.el && g.el._isVueCE ? g.el : null;
      try {
        C && C._beginPatch(), O(g, v, A, $, B, F, M);
      } finally {
        C && C._endPatch();
      }
    }
  }, E = (g, v, I, z, A, $, B, F) => {
    let M, C, { props: q, shapeFlag: J, transition: G, dirs: K } = g;
    if (M = g.el = l(g.type, $, q && q.is, q), 8 & J ? m(M, g.children) : 16 & J && N(g.children, M, null, z, A, Lo(g, $), B, F), K && ms(g, null, z, "created"), U(M, g, g.scopeId, B, z), q) {
      for (let ue in q) ue === "value" || Gi(ue) || o(M, ue, null, q[ue], $, z);
      "value" in q && o(M, "value", null, q.value, $), (C = q.onVnodeBeforeMount) && ln(C, z, g);
    }
    K && ms(g, null, z, "beforeMount");
    let fe = j0(A, G);
    fe && G.beforeEnter(M), r(M, v, I), ((C = q && q.onVnodeMounted) || fe || K) && kt(() => {
      C && ln(C, z, g), fe && G.enter(M), K && ms(g, null, z, "mounted");
    }, A);
  }, U = (g, v, I, z, A) => {
    if (I && k(g, I), z) for (let $ = 0; $ < z.length; $++) k(g, z[$]);
    if (A) {
      let $ = A.subTree;
      if (v === $ || jf($.type) && ($.ssContent === v || $.ssFallback === v)) {
        let B = A.vnode;
        U(g, B, B.scopeId, B.slotScopeIds, A.parent);
      }
    }
  }, N = (g, v, I, z, A, $, B, F, M = 0) => {
    for (let C = M; C < g.length; C++) b(null, g[C] = F ? Kn(g[C]) : dn(g[C]), v, I, z, A, $, B, F);
  }, O = (g, v, I, z, A, $, B) => {
    let F, M = v.el = g.el, { patchFlag: C, dynamicChildren: q, dirs: J } = v;
    C |= 16 & g.patchFlag;
    let G = g.props || Te, K = v.props || Te;
    if (I && ps(I, !1), (F = K.onVnodeBeforeUpdate) && ln(F, I, v, g), J && ms(v, g, I, "beforeUpdate"), I && ps(I, !0), (G.innerHTML && K.innerHTML == null || G.textContent && K.textContent == null) && m(M, ""), q ? P(g.dynamicChildren, q, M, I, z, Lo(v, A), $) : B || ke(g, v, M, null, I, z, Lo(v, A), $, !1), C > 0) {
      if (16 & C) Q(M, G, K, I, A);
      else if (2 & C && G.class !== K.class && o(M, "class", null, K.class, A), 4 & C && o(M, "style", G.style, K.style, A), 8 & C) {
        let fe = v.dynamicProps;
        for (let ue = 0; ue < fe.length; ue++) {
          let pe = fe[ue], st = G[pe], it = K[pe];
          (it !== st || pe === "value") && o(M, pe, st, it, A, I);
        }
      }
      1 & C && g.children !== v.children && m(M, v.children);
    } else B || q != null || Q(M, G, K, I, A);
    ((F = K.onVnodeUpdated) || J) && kt(() => {
      F && ln(F, I, v, g), J && ms(v, g, I, "updated");
    }, z);
  }, P = (g, v, I, z, A, $, B) => {
    for (let F = 0; F < v.length; F++) {
      let M = g[F], C = v[F], q = M.el && (M.type === he || !Ts(M, C) || 198 & M.shapeFlag) ? h(M.el) : I;
      b(M, C, q, null, z, A, $, B, !0);
    }
  }, Q = (g, v, I, z, A) => {
    if (v !== I) {
      if (v !== Te) for (let $ in v) Gi($) || $ in I || o(g, $, v[$], null, A, z);
      for (let $ in I) {
        if (Gi($)) continue;
        let B = I[$], F = v[$];
        B !== F && $ !== "value" && o(g, $, F, B, A, z);
      }
      "value" in I && o(g, "value", v.value, I.value, A);
    }
  }, W = (g, v, I, z, A, $, B, F, M) => {
    let C = v.el = g ? g.el : u(""), q = v.anchor = g ? g.anchor : u(""), { patchFlag: J, dynamicChildren: G, slotScopeIds: K } = v;
    K && (F = F ? F.concat(K) : K), g == null ? (r(C, I, z), r(q, I, z), N(v.children || [], I, q, A, $, B, F, M)) : J > 0 && 64 & J && G && g.dynamicChildren ? (P(g.dynamicChildren, G, I, A, $, B, F), (v.key != null || A && v === A.subTree) && du(g, v, !0)) : ke(g, v, I, q, A, $, B, F, M);
  }, ne = (g, v, I, z, A, $, B, F, M) => {
    v.slotScopeIds = F, g == null ? 512 & v.shapeFlag ? A.ctx.activate(v, I, z, B, M) : me(v, I, z, A, $, B, M) : ce(g, v, M);
  }, me = (g, v, I, z, A, $, B) => {
    let F = g.component = ep(g, z, A);
    if (Ua(g) && (F.ctx.renderer = Ci), tp(F, !1, B), F.asyncDep) {
      if (A && A.registerDep(F, Le, B), !g.el) {
        let M = F.subTree = V(at);
        T(null, M, v, I), g.placeholder = M.el;
      }
    } else Le(F, g, v, I, A, $, B);
  }, ce = (g, v, I) => {
    let z = v.component = g.component;
    if ((function(A, $, B) {
      let { props: F, children: M, component: C } = A, { props: q, children: J, patchFlag: G } = $, K = C.emitsOptions;
      if ($.dirs || $.transition) return !0;
      if (!B || !(G >= 0)) return (!!M || !!J) && (!J || !J.$stable) || F !== q && (F ? !q || ec(F, q, K) : !!q);
      if (1024 & G) return !0;
      if (16 & G) return F ? ec(F, q, K) : !!q;
      if (8 & G) {
        let fe = $.dynamicProps;
        for (let ue = 0; ue < fe.length; ue++) {
          let pe = fe[ue];
          if (q[pe] !== F[pe] && !ya(K, pe)) return !0;
        }
      }
      return !1;
    })(g, v, I)) {
      if (z.asyncDep && !z.asyncResolved) return void we(z, v, I);
      z.next = v, z.update();
    } else v.el = g.el, z.vnode = v;
  }, Le = (g, v, I, z, A, $, B) => {
    let F = () => {
      if (g.isMounted) {
        let J, { next: G, bu: K, u: fe, parent: ue, vnode: pe } = g;
        {
          let on = (function hs(Or) {
            let De = Or.subTree.component;
            if (De) return De.asyncDep && !De.asyncResolved ? De : hs(De);
          })(g);
          if (on) {
            G && (G.el = pe.el, we(g, G, B)), on.asyncDep.then(() => {
              g.isUnmounted || F();
            });
            return;
          }
        }
        let st = G;
        ps(g, !1), G ? (G.el = pe.el, we(g, G, B)) : G = pe, K && Jr(K), (J = G.props && G.props.onVnodeBeforeUpdate) && ln(J, ue, G, pe), ps(g, !0);
        let it = Xu(g), an = g.subTree;
        g.subTree = it, b(an, it, h(an.el), Fr(an), g, A, $), G.el = it.el, st === null && U0(g, it.el), fe && kt(fe, A), (J = G.props && G.props.onVnodeUpdated) && kt(() => ln(J, ue, G, pe), A);
      } else {
        let J, { el: G, props: K } = v, { bm: fe, m: ue, parent: pe, root: st, type: it } = g, an = si(v);
        if (ps(g, !1), fe && Jr(fe), !an && (J = K && K.onVnodeBeforeMount) && ln(J, pe, v), ps(g, !0), !(G && i)) {
          st.ce && st.ce._def.shadowRoot !== !1 && st.ce._injectChildStyle(it);
          let on = g.subTree = Xu(g);
          b(null, on, I, z, g, A, $), v.el = on.el;
        }
        if (ue && kt(ue, A), !an && (J = K && K.onVnodeMounted)) {
          let on = v;
          kt(() => ln(J, pe, on), A);
        }
        (256 & v.shapeFlag || pe && si(pe.vnode) && 256 & pe.vnode.shapeFlag) && g.a && kt(g.a, A), g.isMounted = !0, v = I = z = null;
      }
    };
    g.scope.on();
    let M = g.effect = new sf(F);
    g.scope.off();
    let C = g.update = M.run.bind(M), q = g.job = M.runIfDirty.bind(M);
    q.i = g, q.id = g.uid, M.scheduler = () => nu(q), ps(g, !0), C();
  }, we = (g, v, I) => {
    v.component = g;
    let z = g.vnode.props;
    g.vnode = v, g.next = null, (function(A, $, B, F) {
      let { props: M, attrs: C, vnode: { patchFlag: q } } = A, J = ge(M), [G] = A.propsOptions, K = !1;
      if ((F || q > 0) && !(16 & q)) {
        if (8 & q) {
          let fe = A.vnode.dynamicProps;
          for (let ue = 0; ue < fe.length; ue++) {
            let pe = fe[ue];
            if (ya(A.emitsOptions, pe)) continue;
            let st = $[pe];
            if (G) if (xe(C, pe)) st !== C[pe] && (C[pe] = st, K = !0);
            else {
              let it = Mt(pe);
              M[it] = gl(G, J, it, st, A, !1);
            }
            else st !== C[pe] && (C[pe] = st, K = !0);
          }
        }
      } else {
        let fe;
        for (let ue in Zf(A, $, M, C) && (K = !0), J) $ && (xe($, ue) || (fe = cs(ue)) !== ue && xe($, fe)) || (G ? B && (B[ue] !== void 0 || B[fe] !== void 0) && (M[ue] = gl(G, J, ue, void 0, A, !0)) : delete M[ue]);
        if (C !== J) for (let ue in C) $ && xe($, ue) || (delete C[ue], K = !0);
      }
      K && xn(A.attrs, "set", "");
    })(g, v.props, z, I), ((A, $, B) => {
      let { vnode: F, slots: M } = A, C = !0, q = Te;
      if (32 & F.shapeFlag) {
        let J = $._;
        J ? B && J === 1 ? C = !1 : Yf(M, $, B) : (C = !$.$stable, qf($, M)), q = $;
      } else $ && (Gf(A, $), q = { default: 1 });
      if (C) for (let J in M) uu(J) || q[J] != null || delete M[J];
    })(g, v.children, I), An(), Pu(g), Ln();
  }, ke = (g, v, I, z, A, $, B, F, M = !1) => {
    let C = g && g.children, q = g ? g.shapeFlag : 0, J = v.children, { patchFlag: G, shapeFlag: K } = v;
    if (G > 0) {
      if (128 & G) return void Ze(C, J, I, z, A, $, B, F, M);
      if (256 & G) return void Oe(C, J, I, z, A, $, B, F, M);
    }
    8 & K ? (16 & q && $i(C, A, $), J !== C && m(I, J)) : 16 & q ? 16 & K ? Ze(C, J, I, z, A, $, B, F, M) : $i(C, A, $, !0) : (8 & q && m(I, ""), 16 & K && N(J, I, z, A, $, B, F, M));
  }, Oe = (g, v, I, z, A, $, B, F, M) => {
    let C;
    g = g || ei, v = v || ei;
    let q = g.length, J = v.length, G = Math.min(q, J);
    for (C = 0; C < G; C++) {
      let K = v[C] = M ? Kn(v[C]) : dn(v[C]);
      b(g[C], K, I, null, A, $, B, F, M);
    }
    q > J ? $i(g, A, $, !0, !1, G) : N(v, I, z, A, $, B, F, M, G);
  }, Ze = (g, v, I, z, A, $, B, F, M) => {
    let C = 0, q = v.length, J = g.length - 1, G = q - 1;
    for (; C <= J && C <= G; ) {
      let K = g[C], fe = v[C] = M ? Kn(v[C]) : dn(v[C]);
      if (Ts(K, fe)) b(K, fe, I, null, A, $, B, F, M);
      else break;
      C++;
    }
    for (; C <= J && C <= G; ) {
      let K = g[J], fe = v[G] = M ? Kn(v[G]) : dn(v[G]);
      if (Ts(K, fe)) b(K, fe, I, null, A, $, B, F, M);
      else break;
      J--, G--;
    }
    if (C > J) {
      if (C <= G) {
        let K = G + 1, fe = K < q ? v[K].el : z;
        for (; C <= G; ) b(null, v[C] = M ? Kn(v[C]) : dn(v[C]), I, fe, A, $, B, F, M), C++;
      }
    } else if (C > G) for (; C <= J; ) qe(g[C], A, $, !0), C++;
    else {
      let K, fe = C, ue = C, pe = /* @__PURE__ */ new Map();
      for (C = ue; C <= G; C++) {
        let De = v[C] = M ? Kn(v[C]) : dn(v[C]);
        De.key != null && pe.set(De.key, C);
      }
      let st = 0, it = G - ue + 1, an = !1, on = 0, hs = Array(it);
      for (C = 0; C < it; C++) hs[C] = 0;
      for (C = fe; C <= J; C++) {
        let De, Xe = g[C];
        if (st >= it) {
          qe(Xe, A, $, !0);
          continue;
        }
        if (Xe.key != null) De = pe.get(Xe.key);
        else for (K = ue; K <= G; K++) if (hs[K - ue] === 0 && Ts(Xe, v[K])) {
          De = K;
          break;
        }
        De === void 0 ? qe(Xe, A, $, !0) : (hs[De - ue] = C + 1, De >= on ? on = De : an = !0, b(Xe, v[De], I, null, A, $, B, F, M), st++);
      }
      let Or = an ? (function(De) {
        let Xe, xi, yt, Pn, ko, bo = De.slice(), Dt = [0], U1 = De.length;
        for (Xe = 0; Xe < U1; Xe++) {
          let Mr = De[Xe];
          if (Mr !== 0) {
            if (De[xi = Dt[Dt.length - 1]] < Mr) {
              bo[Xe] = xi, Dt.push(Xe);
              continue;
            }
            for (yt = 0, Pn = Dt.length - 1; yt < Pn; ) De[Dt[ko = yt + Pn >> 1]] < Mr ? yt = ko + 1 : Pn = ko;
            Mr < De[Dt[yt]] && (yt > 0 && (bo[Xe] = Dt[yt - 1]), Dt[yt] = Xe);
          }
        }
        for (yt = Dt.length, Pn = Dt[yt - 1]; yt-- > 0; ) Dt[yt] = Pn, Pn = bo[Pn];
        return Dt;
      })(hs) : ei;
      for (K = Or.length - 1, C = it - 1; C >= 0; C--) {
        let De = ue + C, Xe = v[De], xi = v[De + 1], yt = De + 1 < q ? xi.el || xi.placeholder : z;
        hs[C] === 0 ? b(null, Xe, I, yt, A, $, B, F, M) : an && (K < 0 || C !== Or[K] ? nt(Xe, I, yt, 2) : K--);
      }
    }
  }, nt = (g, v, I, z, A = null) => {
    let { el: $, type: B, transition: F, children: M, shapeFlag: C } = g;
    if (6 & C) return void nt(g.component.subTree, v, I, z);
    if (128 & C) return void g.suspense.move(v, I, z);
    if (64 & C) return void B.move(g, v, I, Ci);
    if (B === he) {
      r($, v, I);
      for (let q = 0; q < M.length; q++) nt(M[q], v, I, z);
      r(g.anchor, v, I);
      return;
    }
    if (B === No) return void (({ el: q, anchor: J }, G, K) => {
      let fe;
      for (; q && q !== J; ) fe = p(q), r(q, G, K), q = fe;
      r(J, G, K);
    })(g, v, I);
    if (z !== 2 && 1 & C && F) if (z === 0) F.beforeEnter($), r($, v, I), kt(() => F.enter($), A);
    else {
      let { leave: q, delayLeave: J, afterLeave: G } = F, K = () => {
        g.ctx.isUnmounted ? a($) : r($, v, I);
      }, fe = () => {
        $._isLeaving && $[Cn](!0), q($, () => {
          K(), G && G();
        });
      };
      J ? J($, K, fe) : fe();
    }
    else r($, v, I);
  }, qe = (g, v, I, z = !1, A = !1) => {
    let $, { type: B, props: F, ref: M, children: C, dynamicChildren: q, shapeFlag: J, patchFlag: G, dirs: K, cacheIndex: fe } = g;
    if (G === -2 && (A = !1), M != null && (An(), ji(M, null, I, g, !0), Ln()), fe != null && (v.renderCache[fe] = void 0), 256 & J) return void v.ctx.deactivate(g);
    let ue = 1 & J && K, pe = !si(g);
    if (pe && ($ = F && F.onVnodeBeforeUnmount) && ln($, v, g), 6 & J) wn(g.component, I, z);
    else {
      if (128 & J) return void g.suspense.unmount(I, z);
      ue && ms(g, null, v, "beforeUnmount"), 64 & J ? g.type.remove(g, v, I, Ci, z) : q && !q.hasOnce && (B !== he || G > 0 && 64 & G) ? $i(q, v, I, !1, !0) : (B === he && 384 & G || !A && 16 & J) && $i(C, v, I), z && $t(g);
    }
    (pe && ($ = F && F.onVnodeUnmounted) || ue) && kt(() => {
      $ && ln($, v, g), ue && ms(g, null, v, "unmounted");
    }, I);
  }, $t = (g) => {
    let { type: v, el: I, anchor: z, transition: A } = g;
    if (v === he) return void fs(I, z);
    if (v === No) return void (({ el: B, anchor: F }) => {
      let M;
      for (; B && B !== F; ) M = p(B), a(B), B = M;
      a(F);
    })(g);
    let $ = () => {
      a(I), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (1 & g.shapeFlag && A && !A.persisted) {
      let { leave: B, delayLeave: F } = A, M = () => B(I, $);
      F ? F(g.el, $, M) : M();
    } else $();
  }, fs = (g, v) => {
    let I;
    for (; g !== v; ) I = p(g), a(g), g = I;
    a(v);
  }, wn = (g, v, I) => {
    let { bum: z, scope: A, job: $, subTree: B, um: F, m: M, a: C } = g;
    nc(M), nc(C), z && Jr(z), A.stop(), $ && ($.flags |= 8, qe(B, g, v, I)), F && kt(F, v), kt(() => {
      g.isUnmounted = !0;
    }, v);
  }, $i = (g, v, I, z = !1, A = !1, $ = 0) => {
    for (let B = $; B < g.length; B++) qe(g[B], v, I, z, A);
  }, Fr = (g) => {
    if (6 & g.shapeFlag) return Fr(g.component.subTree);
    if (128 & g.shapeFlag) return g.suspense.next();
    let v = p(g.anchor || g.el), I = v && v[If];
    return I ? p(I) : v;
  }, yo = !1, vo = (g, v, I) => {
    g == null ? v._vnode && qe(v._vnode, null, null, !0) : b(v._vnode || null, g, v, null, null, null, I), v._vnode = g, yo || (yo = !0, Pu(), Sf(), yo = !1);
  }, Ci = { p: b, um: qe, m: nt, r: $t, mt: me, mc: N, pc: ke, pbc: P, n: Fr, o: t };
  return { render: vo, hydrate: s, createApp: (n = s, function(g, v = null) {
    le(g) || (g = Ye({}, g)), v == null || Me(v) || (v = null);
    let I = Wf(), z = /* @__PURE__ */ new WeakSet(), A = [], $ = !1, B = I.app = { _uid: L0++, _component: g, _props: v, _container: null, _context: I, _instance: null, version: ip, get config() {
      return I.config;
    }, set config(F) {
    }, use: (F, ...M) => (z.has(F) || (F && le(F.install) ? (z.add(F), F.install(B, ...M)) : le(F) && (z.add(F), F(B, ...M))), B), mixin: (F) => (I.mixins.includes(F) || I.mixins.push(F), B), component: (F, M) => M ? (I.components[F] = M, B) : I.components[F], directive: (F, M) => M ? (I.directives[F] = M, B) : I.directives[F], mount(F, M, C) {
      if (!$) {
        let q = B._ceVNode || V(g, v);
        return q.appContext = I, C === !0 ? C = "svg" : C === !1 && (C = void 0), M && n ? n(q, F) : vo(q, F, C), $ = !0, B._container = F, F.__vue_app__ = B, Ya(q.component);
      }
    }, onUnmount(F) {
      A.push(F);
    }, unmount() {
      $ && (tn(A, B._instance, 16), vo(null, B._container), delete B._container.__vue_app__);
    }, provide: (F, M) => (I.provides[F] = M, B), runWithContext(F) {
      let M = Fs;
      Fs = B;
      try {
        return F();
      } finally {
        Fs = M;
      }
    } };
    return B;
  }) };
}
function Lo({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function ps({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function j0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function du(t, e, n = !1) {
  let s = t.children, i = e.children;
  if (ee(s) && ee(i)) for (let r = 0; r < s.length; r++) {
    let a = s[r], o = i[r];
    1 & o.shapeFlag && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && ((o = i[r] = Kn(i[r])).el = a.el), n || o.patchFlag === -2 || du(a, o)), o.type === Ga && o.patchFlag !== -1 && (o.el = a.el), o.type !== at || o.el || (o.el = a.el);
  }
}
function nc(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
let jf = (t) => t.__isSuspense;
function J0(t, e) {
  e && e.pendingBranch ? ee(t) ? e.effects.push(...t) : e.effects.push(t) : w0(t);
}
let he = /* @__PURE__ */ Symbol.for("v-fgt"), Ga = /* @__PURE__ */ Symbol.for("v-txt"), at = /* @__PURE__ */ Symbol.for("v-cmt"), No = /* @__PURE__ */ Symbol.for("v-stc"), Ki = [], xt = null;
function y(t = !1) {
  Ki.push(xt = t ? null : []);
}
function K0() {
  Ki.pop(), xt = Ki[Ki.length - 1] || null;
}
let or = 1;
function va(t, e = !1) {
  or += t, t < 0 && xt && e && (xt.hasOnce = !0);
}
function Jf(t) {
  return t.dynamicChildren = or > 0 ? xt || ei : null, K0(), or > 0 && xt && xt.push(t), t;
}
function R(t, e, n, s, i, r) {
  return Jf(be(t, e, n, s, i, r, !0));
}
function _(t, e, n, s, i) {
  return Jf(V(t, e, n, s, i, !0));
}
function lr(t) {
  return !!t && t.__v_isVNode === !0;
}
function Ts(t, e) {
  return t.type === e.type && t.key === e.key;
}
let Kf = ({ key: t }) => t ?? null, Qr = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? _e(t) || ze(t) || le(t) ? { i: ot, r: t, k: e, f: !!n } : t : null);
function be(t, e = null, n = null, s = 0, i = null, r = +(t !== he), a = !1, o = !1) {
  let l = { __v_isVNode: !0, __v_skip: !0, type: t, props: e, key: e && Kf(e), ref: e && Qr(e), scopeId: Tf, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: s, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: ot };
  return o ? (fu(l, n), 128 & r && t.normalize(l)) : n && (l.shapeFlag |= _e(n) ? 8 : 16), or > 0 && !a && xt && (l.patchFlag > 0 || 6 & r) && l.patchFlag !== 32 && xt.push(l), l;
}
let V = function(t, e = null, n = null, s = 0, i = null, r = !1) {
  var a;
  if (t && t !== Vf || (t = at), lr(t)) {
    let l = os(t, e, !0);
    return n && fu(l, n), or > 0 && !r && xt && (6 & l.shapeFlag ? xt[xt.indexOf(t)] = l : xt.push(l)), l.patchFlag = -2, l;
  }
  if (le(a = t) && "__vccOpts" in a && (t = t.__vccOpts), e) {
    let { class: l, style: u } = e = Xr(e);
    l && !_e(l) && (e.class = x(l)), Me(u) && (Pa(u) && !ee(u) && (u = Ye({}, u)), e.style = gt(u));
  }
  let o = _e(t) ? 1 : jf(t) ? 128 : t.__isTeleport ? 64 : Me(t) ? 4 : 2 * !!le(t);
  return be(t, e, n, s, i, o, r, !0);
};
function Xr(t) {
  return t ? Pa(t) || Uf(t) ? Ye({}, t) : t : null;
}
function os(t, e, n = !1, s = !1) {
  let { props: i, ref: r, patchFlag: a, children: o, transition: l } = t, u = e ? Vt(i || {}, e) : i, c = { __v_isVNode: !0, __v_skip: !0, type: t.type, props: u, key: u && Kf(u), ref: e && e.ref ? n && r ? ee(r) ? r.concat(Qr(e)) : [r, Qr(e)] : Qr(e) : r, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: o, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: e && t.type !== he ? a === -1 ? 16 : 16 | a : a, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: l, component: t.component, suspense: t.suspense, ssContent: t.ssContent && os(t.ssContent), ssFallback: t.ssFallback && os(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
  return l && s && Ls(c, l.clone(c)), c;
}
function gr(t = " ", e = 0) {
  return V(Ga, null, t, e);
}
function X(t = "", e = !1) {
  return e ? (y(), _(at, null, t)) : V(at, null, t);
}
function dn(t) {
  return t == null || typeof t == "boolean" ? V(at) : ee(t) ? V(he, null, t.slice()) : lr(t) ? Kn(t) : V(Ga, null, String(t));
}
function Kn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : os(t);
}
function fu(t, e) {
  let n = 0, { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (ee(e)) n = 16;
  else if (typeof e == "object") if (65 & s) {
    let i = e.default;
    i && (i._c && (i._d = !1), fu(t, i()), i._c && (i._d = !0));
    return;
  } else {
    n = 32;
    let i = e._;
    i || Uf(e) ? i === 3 && ot && (ot.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024)) : e._ctx = ot;
  }
  else le(e) ? (e = { default: e, _ctx: ot }, n = 32) : (e = String(e), 64 & s ? (n = 16, e = [gr(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Vt(...t) {
  let e = {};
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    for (let i in s) if (i === "class") e.class !== s.class && (e.class = x([e.class, s.class]));
    else if (i === "style") e.style = gt([e.style, s.style]);
    else if (Da(i)) {
      let r = e[i], a = s[i];
      a && r !== a && !(ee(r) && r.includes(a)) && (e[i] = r ? [].concat(r, a) : a);
    } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function ln(t, e, n, s = null) {
  tn(t, e, 7, [n, s]);
}
let Q0 = Wf(), X0 = 0;
function ep(t, e, n) {
  let s = t.type, i = (e ? e.appContext : t.appContext) || Q0, r = { uid: X0++, vnode: t, type: s, parent: e, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Xd(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(i.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: (function a(o, l, u = !1) {
    let c = u ? Z0 : l.propsCache, f = c.get(o);
    if (f) return f;
    let m = o.props, h = {}, p = [], k = !1;
    if (!le(o)) {
      let b = (L) => {
        k = !0;
        let [T, D] = a(L, l, !0);
        Ye(h, T), D && p.push(...D);
      };
      !u && l.mixins.length && l.mixins.forEach(b), o.extends && b(o.extends), o.mixins && o.mixins.forEach(b);
    }
    if (!m && !k) return Me(o) && c.set(o, ei), ei;
    if (ee(m)) for (let b = 0; b < m.length; b++) {
      let L = Mt(m[b]);
      tc(L) && (h[L] = Te);
    }
    else if (m) for (let b in m) {
      let L = Mt(b);
      if (tc(L)) {
        let T = m[b], D = h[L] = ee(T) || le(T) ? { type: T } : Ye({}, T), w = D.type, E = !1, U = !0;
        if (ee(w)) for (let N = 0; N < w.length; ++N) {
          let O = w[N], P = le(O) && O.name;
          if (P === "Boolean") {
            E = !0;
            break;
          }
          P === "String" && (U = !1);
        }
        else E = le(w) && w.name === "Boolean";
        D[0] = E, D[1] = U, (E || xe(D, "default")) && p.push(L);
      }
    }
    let S = [h, p];
    return Me(o) && c.set(o, S), S;
  })(s, i), emitsOptions: (function a(o, l, u = !1) {
    let c = u ? W0 : l.emitsCache, f = c.get(o);
    if (f !== void 0) return f;
    let m = o.emits, h = {}, p = !1;
    if (!le(o)) {
      let k = (S) => {
        let b = a(S, l, !0);
        b && (p = !0, Ye(h, b));
      };
      !u && l.mixins.length && l.mixins.forEach(k), o.extends && k(o.extends), o.mixins && o.mixins.forEach(k);
    }
    return m || p ? (ee(m) ? m.forEach((k) => h[k] = null) : Ye(h, m), Me(o) && c.set(o, h), h) : (Me(o) && c.set(o, null), null);
  })(s, i), emit: null, emitted: null, propsDefaults: Te, inheritAttrs: s.inheritAttrs, ctx: Te, data: Te, props: Te, attrs: Te, slots: Te, refs: Te, setupState: Te, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = z0.bind(null, r), t.ce && t.ce(r), r;
}
let ht = null, bn = () => ht || ot;
{
  let t = Ba(), e = (n, s) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((a) => a(r)) : i[0](r);
    };
  };
  ua = e("__VUE_INSTANCE_SETTERS__", (n) => ht = n), ol = e("__VUE_SSR_SETTERS__", (n) => ur = n);
}
let yr = (t) => {
  let e = ht;
  return ua(t), t.scope.on(), () => {
    t.scope.off(), ua(e);
  };
}, sc = () => {
  ht && ht.scope.off(), ua(null);
};
function Qf(t) {
  return 4 & t.vnode.shapeFlag;
}
let ur = !1;
function tp(t, e = !1, n = !1) {
  e && ol(e);
  let { props: s, children: i } = t.vnode, r = Qf(t);
  (function(u, c, f, m = !1) {
    let h = {}, p = Object.create(pl);
    for (let k in u.propsDefaults = /* @__PURE__ */ Object.create(null), Zf(u, c, h, p), u.propsOptions[0]) k in h || (h[k] = void 0);
    f ? u.props = m ? h : d0(h) : u.type.props ? u.props = h : u.props = p, u.attrs = p;
  })(t, s, r, e);
  var a = n || e;
  let o = t.slots = Object.create(pl);
  if (32 & t.vnode.shapeFlag) {
    let u = i._;
    u ? (Yf(o, i, a), a && Jd(o, "_", u, !0)) : qf(i, o);
  } else i && Gf(t, i);
  let l = r ? (function(u, c) {
    let f = u.type;
    u.accessCache = /* @__PURE__ */ Object.create(null), u.proxy = new Proxy(u.ctx, fl);
    let { setup: m } = f;
    if (m) {
      An();
      let h = u.setupContext = m.length > 1 ? eh(u) : null, p = yr(u), k = pr(m, u, 0, [u.props, h]), S = jd(k);
      if (Ln(), p(), (S || u.sp) && !si(u) && Df(u), S) {
        if (k.then(sc, sc), c) return k.then((b) => {
          ic(u, b);
        }).catch((b) => {
          Ha(b, u, 0);
        });
        u.asyncDep = k;
      } else ic(u, k);
    } else Xf(u);
  })(t, e) : void 0;
  return e && ol(!1), l;
}
function ic(t, e, n) {
  le(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Me(e) && (t.setupState = vf(e)), Xf(t);
}
function Xf(t, e, n) {
  let s = t.type;
  t.render || (t.render = s.render || hn);
  {
    let i = yr(t);
    An();
    try {
      (function(r) {
        let a = zf(r), o = r.proxy, l = r.ctx;
        hl = !1, a.beforeCreate && Ju(a.beforeCreate, r, "bc");
        let { data: u, computed: c, methods: f, watch: m, provide: h, inject: p, created: k, beforeMount: S, mounted: b, beforeUpdate: L, updated: T, activated: D, deactivated: w, beforeUnmount: E, unmounted: U, render: N, renderTracked: O, renderTriggered: P, errorCaptured: Q, serverPrefetch: W, expose: ne, inheritAttrs: me, components: ce, directives: Le } = a;
        if (p && (function(ke, Oe, Ze = hn) {
          for (let nt in ee(ke) && (ke = ml(ke)), ke) {
            let qe, $t = ke[nt];
            ze(qe = Me($t) ? "default" in $t ? Dn($t.from || nt, $t.default, !0) : Dn($t.from || nt) : Dn($t)) ? Object.defineProperty(Oe, nt, { enumerable: !0, configurable: !0, get: () => qe.value, set: (fs) => qe.value = fs }) : Oe[nt] = qe;
          }
        })(p, l, null), f) for (let ke in f) {
          let Oe = f[ke];
          le(Oe) && (l[ke] = Oe.bind(o));
        }
        if (u) {
          let ke = u.call(o, o);
          Me(ke) && (r.data = kn(ke));
        }
        if (hl = !0, c) for (let ke in c) {
          let Oe = c[ke], Ze = le(Oe) ? Oe.bind(o, o) : le(Oe.get) ? Oe.get.bind(o, o) : hn, nt = Ce({ get: Ze, set: !le(Oe) && le(Oe.set) ? Oe.set.bind(o) : hn });
          Object.defineProperty(l, ke, { enumerable: !0, configurable: !0, get: () => nt.value, set: (qe) => nt.value = qe });
        }
        if (m) for (let ke in m) (function Oe(Ze, nt, qe, $t) {
          let fs = $t.includes(".") ? Pf(qe, $t) : () => qe[$t];
          if (_e(Ze)) {
            let wn = nt[Ze];
            le(wn) && Re(fs, wn);
          } else if (le(Ze)) Re(fs, Ze.bind(qe));
          else if (Me(Ze)) if (ee(Ze)) Ze.forEach((wn) => Oe(wn, nt, qe, $t));
          else {
            let wn = le(Ze.handler) ? Ze.handler.bind(qe) : nt[Ze.handler];
            le(wn) && Re(fs, wn, Ze);
          }
        })(m[ke], l, o, ke);
        if (h) {
          let ke = le(h) ? h.call(o) : h;
          Reflect.ownKeys(ke).forEach((Oe) => {
            as(Oe, ke[Oe]);
          });
        }
        function we(ke, Oe) {
          ee(Oe) ? Oe.forEach((Ze) => ke(Ze.bind(o))) : Oe && ke(Oe.bind(o));
        }
        if (k && Ju(k, r, "c"), we($0, S), we(Rn, b), we(C0, L), we(Lf, T), we(T0, D), we(I0, w), we(O0, Q), we(F0, O), we(E0, P), we(au, E), we(Vs, U), we(x0, W), ee(ne)) if (ne.length) {
          let ke = r.exposed || (r.exposed = {});
          ne.forEach((Oe) => {
            Object.defineProperty(ke, Oe, { get: () => o[Oe], set: (Ze) => o[Oe] = Ze, enumerable: !0 });
          });
        } else r.exposed || (r.exposed = {});
        N && r.render === hn && (r.render = N), me != null && (r.inheritAttrs = me), ce && (r.components = ce), Le && (r.directives = Le), W && Df(r);
      })(t);
    } finally {
      Ln(), i();
    }
  }
}
let np = { get: (t, e) => (dt(t, "get", ""), t[e]) };
function eh(t) {
  return { attrs: new Proxy(t.attrs, np), slots: t.slots, emit: t.emit, expose: (e) => {
    t.exposed = e || {};
  } };
}
function Ya(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(vf(tu(t.exposed)), { get: (e, n) => n in e ? e[n] : n in Ji ? Ji[n](t) : void 0, has: (e, n) => n in e || n in Ji })) : t.proxy;
}
function sp(t, e = !0) {
  return le(t) ? t.displayName || t.name : t.name || e && t.__name;
}
let Ce = (t, e) => (function(n, s, i = !1) {
  let r, a;
  return le(n) ? r = n : (r = n.get, a = n.set), new k0(r, a, i);
})(t, 0, ur);
function ii(t, e, n) {
  try {
    va(-1);
    let s = arguments.length;
    return s !== 2 ? (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && lr(n) && (n = [n]), V(t, e, n)) : !Me(e) || ee(e) ? V(t, null, e) : lr(e) ? V(t, null, [e]) : V(t, e);
  } finally {
    va(1);
  }
}
let ip = "3.5.25", rc = typeof window < "u" && window.trustedTypes;
if (rc) try {
  ll = rc.createPolicy("vue", { createHTML: (t) => t });
} catch {
}
let th = ll ? (t) => ll.createHTML(t) : (t) => t, $n = typeof document < "u" ? document : null, ac = $n && $n.createElement("template"), rp = { insert: (t, e, n) => {
  e.insertBefore(t, n || null);
}, remove: (t) => {
  let e = t.parentNode;
  e && e.removeChild(t);
}, createElement: (t, e, n, s) => {
  let i = e === "svg" ? $n.createElementNS("http://www.w3.org/2000/svg", t) : e === "mathml" ? $n.createElementNS("http://www.w3.org/1998/Math/MathML", t) : n ? $n.createElement(t, { is: n }) : $n.createElement(t);
  return t === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
}, createText: (t) => $n.createTextNode(t), createComment: (t) => $n.createComment(t), setText: (t, e) => {
  t.nodeValue = e;
}, setElementText: (t, e) => {
  t.textContent = e;
}, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => $n.querySelector(t), setScopeId(t, e) {
  t.setAttribute(e, "");
}, insertStaticContent(t, e, n, s, i, r) {
  let a = n ? n.previousSibling : e.lastChild;
  if (i && (i === r || i.nextSibling)) for (; e.insertBefore(i.cloneNode(!0), n), i !== r && (i = i.nextSibling); ) ;
  else {
    ac.innerHTML = th(s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t);
    let o = ac.content;
    if (s === "svg" || s === "mathml") {
      let l = o.firstChild;
      for (; l.firstChild; ) o.appendChild(l.firstChild);
      o.removeChild(l);
    }
    e.insertBefore(o, n);
  }
  return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
} }, Hn = "transition", Oi = "animation", ci = /* @__PURE__ */ Symbol("_vtc"), nh = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, sh = Ye({}, Ef, nh), Ns = ((wo = (t, { slots: e }) => ii(S0, ih(t), e)).displayName = "Transition", wo.props = sh, wo), gs = (t, e = []) => {
  ee(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, oc = (t) => !!t && (ee(t) ? t.some((e) => e.length > 1) : t.length > 1);
function ih(t) {
  let e = {};
  for (let W in t) W in nh || (e[W] = t[W]);
  if (t.css === !1) return e;
  let { name: n = "v", type: s, duration: i, enterFromClass: r = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: o = `${n}-enter-to`, appearFromClass: l = r, appearActiveClass: u = a, appearToClass: c = o, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = t, p = (function(W) {
    if (W == null) return null;
    {
      if (Me(W)) return [(function(me) {
        return Io(me);
      })(W.enter), (function(me) {
        return Io(me);
      })(W.leave)];
      let ne = (function(me) {
        return Io(me);
      })(W);
      return [ne, ne];
    }
  })(i), k = p && p[0], S = p && p[1], { onBeforeEnter: b, onEnter: L, onEnterCancelled: T, onLeave: D, onLeaveCancelled: w, onBeforeAppear: E = b, onAppear: U = L, onAppearCancelled: N = T } = e, O = (W, ne, me, ce) => {
    W._enterCancelled = ce, Gn(W, ne ? c : o), Gn(W, ne ? u : a), me && me();
  }, P = (W, ne) => {
    W._isLeaving = !1, Gn(W, f), Gn(W, h), Gn(W, m), ne && ne();
  }, Q = (W) => (ne, me) => {
    let ce = W ? U : L, Le = () => O(ne, W, me);
    gs(ce, [ne, Le]), lc(() => {
      Gn(ne, W ? l : r), un(ne, W ? c : o), oc(ce) || uc(ne, s, k, Le);
    });
  };
  return Ye(e, { onBeforeEnter(W) {
    gs(b, [W]), un(W, r), un(W, a);
  }, onBeforeAppear(W) {
    gs(E, [W]), un(W, l), un(W, u);
  }, onEnter: Q(!1), onAppear: Q(!0), onLeave(W, ne) {
    W._isLeaving = !0;
    let me = () => P(W, ne);
    un(W, f), W._enterCancelled ? (un(W, m), yl(W)) : (yl(W), un(W, m)), lc(() => {
      W._isLeaving && (Gn(W, f), un(W, h), oc(D) || uc(W, s, S, me));
    }), gs(D, [W, me]);
  }, onEnterCancelled(W) {
    O(W, !1, void 0, !0), gs(T, [W]);
  }, onAppearCancelled(W) {
    O(W, !0, void 0, !0), gs(N, [W]);
  }, onLeaveCancelled(W) {
    P(W), gs(w, [W]);
  } });
}
function un(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[ci] || (t[ci] = /* @__PURE__ */ new Set())).add(e);
}
function Gn(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  let n = t[ci];
  n && (n.delete(e), n.size || (t[ci] = void 0));
}
function lc(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let ap = 0;
function uc(t, e, n, s) {
  let i = t._endId = ++ap, r = () => {
    i === t._endId && s();
  };
  if (n != null) return setTimeout(r, n);
  let { type: a, timeout: o, propCount: l } = rh(t, e);
  if (!a) return s();
  let u = a + "end", c = 0, f = () => {
    t.removeEventListener(u, m), r();
  }, m = (h) => {
    h.target === t && ++c >= l && f();
  };
  setTimeout(() => {
    c < l && f();
  }, o + 1), t.addEventListener(u, m);
}
function rh(t, e) {
  let n = window.getComputedStyle(t), s = (p) => (n[p] || "").split(", "), i = s(`${Hn}Delay`), r = s(`${Hn}Duration`), a = cc(i, r), o = s(`${Oi}Delay`), l = s(`${Oi}Duration`), u = cc(o, l), c = null, f = 0, m = 0;
  e === Hn ? a > 0 && (c = Hn, f = a, m = r.length) : e === Oi ? u > 0 && (c = Oi, f = u, m = l.length) : m = (c = (f = Math.max(a, u)) > 0 ? a > u ? Hn : Oi : null) ? c === Hn ? r.length : l.length : 0;
  let h = c === Hn && /\b(?:transform|all)(?:,|$)/.test(s(`${Hn}Property`).toString());
  return { type: c, timeout: f, propCount: m, hasTransform: h };
}
function cc(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => dc(n) + dc(t[s])));
}
function dc(t) {
  return t === "auto" ? 0 : 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function yl(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
let fc = /* @__PURE__ */ Symbol("_vod"), op = /* @__PURE__ */ Symbol("_vsh"), lp = /* @__PURE__ */ Symbol(""), up = /(?:^|;)\s*display\s*:/, hc = /\s*!important$/;
function ea(t, e, n) {
  if (ee(n)) n.forEach((s) => ea(t, e, s));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    let s = (function(i, r) {
      let a = Vo[r];
      if (a) return a;
      let o = Mt(r);
      if (o !== "filter" && o in i) return Vo[r] = o;
      o = Na(o);
      for (let l = 0; l < mc.length; l++) {
        let u = mc[l] + o;
        if (u in i) return Vo[r] = u;
      }
      return r;
    })(t, e);
    hc.test(n) ? t.setProperty(cs(s), n.replace(hc, ""), "important") : t[s] = n;
  }
}
let mc = ["Webkit", "Moz", "ms"], Vo = {}, pc = "http://www.w3.org/1999/xlink";
function gc(t, e, n, s, i, r = Q1(e)) {
  s && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(pc, e.slice(6, e.length)) : t.setAttributeNS(pc, e, n) : n == null || r && !(n || n === "") ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : en(n) ? String(n) : n);
}
function yc(t, e, n, s, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? th(n) : n);
    return;
  }
  let r = t.tagName;
  if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
    let l = r === "OPTION" ? t.getAttribute("value") || "" : t.value, u = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
    l === u && "_value" in t || (t.value = u), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    let l = typeof t[e];
    if (l === "boolean") {
      var o;
      n = !!(o = n) || o === "";
    } else n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  a && t.removeAttribute(i || e);
}
function Fn(t, e, n, s) {
  t.addEventListener(e, n, s);
}
let vc = /* @__PURE__ */ Symbol("_vei"), kc = /(?:Once|Passive|Capture)$/, Bo = 0, cp = Promise.resolve(), bc = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && 123 > t.charCodeAt(2), dp = (t, e, n, s, i, r) => {
  let a = i === "svg";
  if (e === "class") {
    var o;
    let l;
    o = s, (l = t[ci]) && (o = (o ? [o, ...l] : [...l]).join(" ")), o == null ? t.removeAttribute("class") : a ? t.setAttribute("class", o) : t.className = o;
  } else e === "style" ? (function(l, u, c) {
    let f = l.style, m = _e(c), h = !1;
    if (c && !m) {
      if (u) if (_e(u)) for (let p of u.split(";")) {
        let k = p.slice(0, p.indexOf(":")).trim();
        c[k] == null && ea(f, k, "");
      }
      else for (let p in u) c[p] == null && ea(f, p, "");
      for (let p in c) p === "display" && (h = !0), ea(f, p, c[p]);
    } else if (m) {
      if (u !== c) {
        let p = f[lp];
        p && (c += ";" + p), f.cssText = c, h = up.test(c);
      }
    } else u && l.removeAttribute("style");
    fc in l && (l[fc] = h ? f.display : "", l[op] && (f.display = "none"));
  })(t, n, s) : Da(e) ? jl(e) || (function(l, u, c, f, m = null) {
    let h = l[vc] || (l[vc] = {}), p = h[u];
    if (f && p) p.value = f;
    else {
      let [b, L] = (function(T) {
        let D;
        if (kc.test(T)) {
          let w;
          for (D = {}; w = T.match(kc); ) T = T.slice(0, T.length - w[0].length), D[w[0].toLowerCase()] = !0;
        }
        return [T[2] === ":" ? T.slice(3) : cs(T.slice(2)), D];
      })(u);
      if (f) {
        var k, S;
        let T;
        Fn(l, b, h[u] = (k = f, S = m, (T = (D) => {
          if (D._vts) {
            if (D._vts <= T.attached) return;
          } else D._vts = Date.now();
          tn((function(w, E) {
            if (!ee(E)) return E;
            {
              let U = w.stopImmediatePropagation;
              return w.stopImmediatePropagation = () => {
                U.call(w), w._stopped = !0;
              }, E.map((N) => (O) => !O._stopped && N && N(O));
            }
          })(D, T.value), S, 5, [D]);
        }).value = k, T.attached = Bo || (cp.then(() => Bo = 0), Bo = Date.now()), T), L);
      } else p && (l.removeEventListener(b, p, L), h[u] = void 0);
    }
  })(t, e, 0, s, r) : (e[0] === "." ? (e = e.slice(1), 0) : e[0] === "^" ? (e = e.slice(1), 1) : !(function(l, u, c, f) {
    if (f) return !!(u === "innerHTML" || u === "textContent" || u in l && bc(u) && le(c));
    if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "autocorrect" || u === "sandbox" && l.tagName === "IFRAME" || u === "form" || u === "list" && l.tagName === "INPUT" || u === "type" && l.tagName === "TEXTAREA") return !1;
    if (u === "width" || u === "height") {
      let m = l.tagName;
      if (m === "IMG" || m === "VIDEO" || m === "CANVAS" || m === "SOURCE") return !1;
    }
    return !(bc(u) && _e(c)) && u in l;
  })(t, e, s, a)) ? t._isVueCE && (/[A-Z]/.test(e) || !_e(s)) ? yc(t, Mt(e), s, r, e) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), gc(t, e, s, a)) : (yc(t, e, s), t.tagName.includes("-") || e !== "value" && e !== "checked" && e !== "selected" || gc(t, e, s, a, r, e !== "value"));
}, ah = /* @__PURE__ */ new WeakMap(), oh = /* @__PURE__ */ new WeakMap(), ka = /* @__PURE__ */ Symbol("_moveCb"), wc = /* @__PURE__ */ Symbol("_enterCb"), lh = (So = { name: "TransitionGroup", props: Ye({}, sh, { tag: String, moveClass: String }), setup(t, { slots: e }) {
  let n, s, i = bn(), r = xf();
  return Lf(() => {
    if (!n.length) return;
    let a = t.moveClass || `${t.name || "v"}-move`;
    if (!(function(l, u, c) {
      let f = l.cloneNode(), m = l[ci];
      m && m.forEach((k) => {
        k.split(/\s+/).forEach((S) => S && f.classList.remove(S));
      }), c.split(/\s+/).forEach((k) => k && f.classList.add(k)), f.style.display = "none";
      let h = u.nodeType === 1 ? u : u.parentNode;
      h.appendChild(f);
      let { hasTransform: p } = rh(f);
      return h.removeChild(f), p;
    })(n[0].el, i.vnode.el, a)) {
      n = [];
      return;
    }
    n.forEach(fp), n.forEach(hp);
    let o = n.filter(mp);
    yl(i.vnode.el), o.forEach((l) => {
      let u = l.el, c = u.style;
      un(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
      let f = u[ka] = (m) => {
        (!m || m.target === u) && (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[ka] = null, Gn(u, a));
      };
      u.addEventListener("transitionend", f);
    }), n = [];
  }), () => {
    let a = ge(t), o = ih(a), l = a.tag || he;
    if (n = [], s) for (let u = 0; u < s.length; u++) {
      let c = s[u];
      c.el && c.el instanceof Element && (n.push(c), Ls(c, ar(c, o, r, i)), ah.set(c, { left: c.el.offsetLeft, top: c.el.offsetTop }));
    }
    s = e.default ? iu(e.default()) : [];
    for (let u = 0; u < s.length; u++) {
      let c = s[u];
      c.key != null && Ls(c, ar(c, o, r, i));
    }
    return V(l, null, s);
  };
} }, delete So.props.mode, So);
function fp(t) {
  let e = t.el;
  e[ka] && e[ka](), e[wc] && e[wc]();
}
function hp(t) {
  oh.set(t, { left: t.el.offsetLeft, top: t.el.offsetTop });
}
function mp(t) {
  let e = ah.get(t), n = oh.get(t), s = e.left - n.left, i = e.top - n.top;
  if (s || i) {
    let r = t.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", t;
  }
}
let ls = (t) => {
  let e = t.props["onUpdate:modelValue"] || !1;
  return ee(e) ? (n) => Jr(e, n) : e;
};
function pp(t) {
  t.target.composing = !0;
}
function Sc(t) {
  let e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
let Wt = /* @__PURE__ */ Symbol("_assign");
function Tc(t, e, n) {
  return e && (t = t.trim()), n && (t = Va(t)), t;
}
let ba = { created(t, { modifiers: { lazy: e, trim: n, number: s } }, i) {
  t[Wt] = ls(i);
  let r = s || i.props && i.props.type === "number";
  Fn(t, e ? "change" : "input", (a) => {
    a.target.composing || t[Wt](Tc(t.value, n, r));
  }), (n || r) && Fn(t, "change", () => {
    t.value = Tc(t.value, n, r);
  }), e || (Fn(t, "compositionstart", pp), Fn(t, "compositionend", Sc), Fn(t, "change", Sc));
}, mounted(t, { value: e }) {
  t.value = e ?? "";
}, beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, a) {
  if (t[Wt] = ls(a), t.composing) return;
  let o = (r || t.type === "number") && !/^0\d/.test(t.value) ? Va(t.value) : t.value, l = e ?? "";
  if (o !== l) {
    if (document.activeElement === t && t.type !== "range" && (s && e === n || i && t.value.trim() === l)) return;
    t.value = l;
  }
} }, gp = { deep: !0, created(t, e, n) {
  t[Wt] = ls(n), Fn(t, "change", () => {
    let s = t._modelValue, i = di(t), r = t.checked, a = t[Wt];
    if (ee(s)) {
      let o = Kl(s, i), l = o !== -1;
      if (r && !l) a(s.concat(i));
      else if (!r && l) {
        let u = [...s];
        u.splice(o, 1), a(u);
      }
    } else {
      let o;
      if (o = s, tt.call(o) === "[object Set]") {
        let l = new Set(s);
        r ? l.add(i) : l.delete(i), a(l);
      } else a(uh(t, r));
    }
  });
}, mounted: Ic, beforeUpdate(t, e, n) {
  t[Wt] = ls(n), Ic(t, e, n);
} };
function Ic(t, { value: e, oldValue: n }, s) {
  let i;
  if (t._modelValue = e, ee(e)) i = Kl(e, s.props.value) > -1;
  else {
    let r;
    if (r = e, tt.call(r) === "[object Set]") i = e.has(s.props.value);
    else {
      if (e === n) return;
      i = As(e, uh(t, !0));
    }
  }
  t.checked !== i && (t.checked = i);
}
let yp = { created(t, { value: e }, n) {
  t.checked = As(e, n.props.value), t[Wt] = ls(n), Fn(t, "change", () => {
    t[Wt](di(t));
  });
}, beforeUpdate(t, { value: e, oldValue: n }, s) {
  t[Wt] = ls(s), e !== n && (t.checked = As(e, s.props.value));
} }, vp = { deep: !0, created(t, { value: e, modifiers: { number: n } }, s) {
  let i, r = (i = e, tt.call(i) === "[object Set]");
  Fn(t, "change", () => {
    let a = Array.prototype.filter.call(t.options, (o) => o.selected).map((o) => n ? Va(di(o)) : di(o));
    t[Wt](t.multiple ? r ? new Set(a) : a : a[0]), t._assigning = !0, Is(() => {
      t._assigning = !1;
    });
  }), t[Wt] = ls(s);
}, mounted(t, { value: e }) {
  $c(t, e);
}, beforeUpdate(t, e, n) {
  t[Wt] = ls(n);
}, updated(t, { value: e }) {
  t._assigning || $c(t, e);
} };
function $c(t, e) {
  let n, s = t.multiple, i = ee(e);
  if (!s || i || (n = e, tt.call(n) === "[object Set]")) {
    for (let r = 0, a = t.options.length; r < a; r++) {
      let o = t.options[r], l = di(o);
      if (s) if (i) {
        let u = typeof l;
        u === "string" || u === "number" ? o.selected = e.some((c) => String(c) === String(l)) : o.selected = Kl(e, l) > -1;
      } else o.selected = e.has(l);
      else if (As(di(o), e)) {
        t.selectedIndex !== r && (t.selectedIndex = r);
        return;
      }
    }
    s || t.selectedIndex === -1 || (t.selectedIndex = -1);
  }
}
function di(t) {
  return "_value" in t ? t._value : t.value;
}
function uh(t, e) {
  let n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
let kp = { created(t, e, n) {
  Br(t, e, n, null, "created");
}, mounted(t, e, n) {
  Br(t, e, n, null, "mounted");
}, beforeUpdate(t, e, n, s) {
  Br(t, e, n, s, "beforeUpdate");
}, updated(t, e, n, s) {
  Br(t, e, n, s, "updated");
} };
function bp(t, e) {
  switch (t) {
    case "SELECT":
      return vp;
    case "TEXTAREA":
      return ba;
    default:
      switch (e) {
        case "checkbox":
          return gp;
        case "radio":
          return yp;
        default:
          return ba;
      }
  }
}
function Br(t, e, n, s, i) {
  let r = bp(t.tagName, n.props && n.props.type)[i];
  r && r(t, e, n, s);
}
let wp = ["ctrl", "shift", "alt", "meta"], Sp = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, e) => wp.some((n) => t[`${n}Key`] && !e.includes(n)) }, hu = (t, e) => {
  let n = t._withMods || (t._withMods = {}), s = e.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let a = 0; a < e.length; a++) {
      let o = Sp[e[a]];
      if (o && o(i, e)) return;
    }
    return t(i, ...r);
  });
}, Tp = Ye({ patchProp: dp }, rp), Ip = (...t) => {
  let e = (Ru || (Ru = G0(Tp))).createApp(...t), { mount: n } = e;
  return e.mount = (s) => {
    let i = Cp(s);
    if (!i) return;
    let r = e._component;
    le(r) || r.render || r.template || (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    let a = n(i, !1, $p(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function $p(t) {
  return t instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && t instanceof MathMLElement ? "mathml" : void 0;
}
function Cp(t) {
  return _e(t) ? document.querySelector(t) : t;
}
function ch(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = ch(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function Pt() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = ch(t)) && (s && (s += " "), s += e);
  return s;
}
const dh = /* @__PURE__ */ Symbol(), fh = /* @__PURE__ */ Symbol(), xp = /* @__PURE__ */ Symbol();
let Bs = class extends Error {
}, Ep = class extends Bs {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}, Fp = class extends Bs {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}, Op = class extends Bs {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}, Qs = class extends Bs {
}, hh = class extends Bs {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}, ut = class extends Bs {
}, Un = class extends Bs {
  constructor() {
    super("Zone is an abstract class");
  }
};
const Y = "numeric", sn = "short", Ft = "long", wa = {
  year: Y,
  month: Y,
  day: Y
}, mh = {
  year: Y,
  month: sn,
  day: Y
}, Mp = {
  year: Y,
  month: sn,
  day: Y,
  weekday: sn
}, ph = {
  year: Y,
  month: Ft,
  day: Y
}, gh = {
  year: Y,
  month: Ft,
  day: Y,
  weekday: Ft
}, yh = {
  hour: Y,
  minute: Y
}, vh = {
  hour: Y,
  minute: Y,
  second: Y
}, kh = {
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: sn
}, bh = {
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: Ft
}, wh = {
  hour: Y,
  minute: Y,
  hourCycle: "h23"
}, Sh = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23"
}, Th = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23",
  timeZoneName: sn
}, Ih = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23",
  timeZoneName: Ft
}, $h = {
  year: Y,
  month: Y,
  day: Y,
  hour: Y,
  minute: Y
}, Ch = {
  year: Y,
  month: Y,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y
}, xh = {
  year: Y,
  month: sn,
  day: Y,
  hour: Y,
  minute: Y
}, Eh = {
  year: Y,
  month: sn,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y
}, Dp = {
  year: Y,
  month: sn,
  day: Y,
  weekday: sn,
  hour: Y,
  minute: Y
}, Fh = {
  year: Y,
  month: Ft,
  day: Y,
  hour: Y,
  minute: Y,
  timeZoneName: sn
}, Oh = {
  year: Y,
  month: Ft,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: sn
}, Mh = {
  year: Y,
  month: Ft,
  day: Y,
  weekday: Ft,
  hour: Y,
  minute: Y,
  timeZoneName: Ft
}, Dh = {
  year: Y,
  month: Ft,
  day: Y,
  weekday: Ft,
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: Ft
};
let vr = class {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Un();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Un();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new Un();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, n) {
    throw new Un();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    throw new Un();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new Un();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new Un();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Un();
  }
}, _o = null, Ah = class Lh extends vr {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return _o === null && (_o = new Lh()), _o;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: n, locale: s }) {
    return Zh(e, n, s);
  }
  /** @override **/
  formatOffset(e, n) {
    return Qi(this.offset(e), n);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
};
const vl = /* @__PURE__ */ new Map();
function Ap(t) {
  let e = vl.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  }), vl.set(t, e)), e;
}
const Lp = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Np(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, o, l, u, c] = s;
  return [a, i, r, o, l, u, c];
}
function Vp(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], o = Lp[r];
    r === "era" ? s[o] = a : ie(o) || (s[o] = parseInt(a, 10));
  }
  return s;
}
const Ro = /* @__PURE__ */ new Map();
let pi = class kl extends vr {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = Ro.get(e);
    return n === void 0 && Ro.set(e, n = new kl(e)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Ro.clear(), vl.clear();
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = kl.isValidZone(e);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !1;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, { format: n, locale: s }) {
    return Zh(e, n, s, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    return Qi(this.offset(e), n);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    if (!this.valid) return NaN;
    const n = new Date(e);
    if (isNaN(n)) return NaN;
    const s = Ap(this.name);
    let [i, r, a, o, l, u, c] = s.formatToParts ? Vp(s, n) : Np(s, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const m = Ja({
      year: i,
      month: r,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: c,
      millisecond: 0
    });
    let h = +n;
    const p = h % 1e3;
    return h -= p >= 0 ? p : 1e3 + p, (m - h) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
}, Cc = {};
function Bp(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Cc[n];
  return s || (s = new Intl.ListFormat(t, e), Cc[n] = s), s;
}
const bl = /* @__PURE__ */ new Map();
function wl(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = bl.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), bl.set(n, s)), s;
}
const Sl = /* @__PURE__ */ new Map();
function _p(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Sl.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), Sl.set(n, s)), s;
}
const Tl = /* @__PURE__ */ new Map();
function Rp(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = Tl.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), Tl.set(i, r)), r;
}
let Vi = null;
function zp() {
  return Vi || (Vi = new Intl.DateTimeFormat().resolvedOptions().locale, Vi);
}
const Il = /* @__PURE__ */ new Map();
function Nh(t) {
  let e = Il.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), Il.set(t, e)), e;
}
const $l = /* @__PURE__ */ new Map();
function Wp(t) {
  let e = $l.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...Vh, ...e }), $l.set(t, e);
  }
  return e;
}
function Pp(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = wl(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      s = wl(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function Hp(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function Up(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = We.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function Zp(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const s = We.utc(2016, 11, 13 + n);
    e.push(t(s));
  }
  return e;
}
function _r(t, e, n, s) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : s(e);
}
function qp(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || Nh(t.locale).numberingSystem === "latn";
}
let Gp = class {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...s };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = _p(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : vu(e, 3);
      return Je(n, this.padTo);
    }
  }
}, Yp = class {
  constructor(e, n, s) {
    this.opts = s, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && pi.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || i, this.dtf = wl(n, r);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((n) => {
      if (n.type === "timeZoneName") {
        const s = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...n,
          value: s
        };
      } else
        return n;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}, jp = class {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && Hh() && (this.rtf = Rp(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : yg(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
};
const Vh = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
let Ne = class Bi {
  static fromOpts(e) {
    return Bi.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, s, i, r = !1) {
    const a = e || He.defaultLocale, o = a || (r ? "en-US" : zp()), l = n || He.defaultNumberingSystem, u = s || He.defaultOutputCalendar, c = xl(i) || He.defaultWeekSettings;
    return new Bi(o, l, u, c, a);
  }
  static resetCache() {
    Vi = null, bl.clear(), Sl.clear(), Tl.clear(), Il.clear(), $l.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return Bi.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, o, l] = Pp(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = s || l || null, this.weekSettings = i, this.intl = Hp(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = qp(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Bi.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      xl(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, n = !1) {
    return _r(this, e, Yh, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (o) => this.dtFormatter(o, i).format() : (o) => this.extract(o, i, "month");
        this.monthsCache[r][e] = Up(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return _r(this, e, Kh, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = Zp(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return _r(
      this,
      void 0,
      () => Qh,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [We.utc(2016, 11, 13, 9), We.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return _r(this, e, Xh, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [We.utc(-40, 1, 1), We.utc(2017, 1, 1)].map(
        (s) => this.extract(s, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, s) {
    const i = this.dtFormatter(e, n), r = i.formatToParts(), a = r.find((o) => o.type.toLowerCase() === s);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new Gp(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new Yp(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new jp(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Bp(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Nh(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Uh() ? Wp(this.locale) : Vh;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}, zo = null, gn = class _i extends vr {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return zo === null && (zo = new _i(0)), zo;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? _i.utcInstance : new _i(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new _i(Ka(n[1], n[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Qi(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Qi(-this.fixed, "narrow")}`;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    return Qi(this.fixed, n);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
}, Jp = class extends vr {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
};
function ts(t, e) {
  if (ie(t) || t === null)
    return e;
  if (t instanceof vr)
    return t;
  if (ng(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Ah.instance : n === "utc" || n === "gmt" ? gn.utcInstance : gn.parseSpecifier(n) || pi.create(t);
  } else return is(t) ? gn.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Jp(t);
}
const mu = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, xc = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Kp = mu.hanidec.replace(/[\[|\]]/g, "").split("");
function Qp(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search(mu.hanidec) !== -1)
        e += Kp.indexOf(t[n]);
      else
        for (const i in xc) {
          const [r, a] = xc[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const Cl = /* @__PURE__ */ new Map();
function Xp() {
  Cl.clear();
}
function Ht({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = Cl.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), Cl.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${mu[n]}${e}`), s.set(e, i)), i;
}
let Ec = () => Date.now(), Fc = "system", Oc = null, Mc = null, Dc = null, Ac = 60, Lc, Nc = null, He = class {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Ec;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Ec = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Fc = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return ts(Fc, Ah.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Oc;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Oc = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Mc;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Mc = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Dc;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Dc = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return Nc;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Nc = xl(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Ac;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    Ac = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Lc;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Lc = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Ne.resetCache(), pi.resetCache(), We.resetCache(), Xp();
  }
}, jt = class {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
};
const Bh = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], _h = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Bt(t, e) {
  return new jt(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function pu(t, e, n) {
  const s = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const i = s.getUTCDay();
  return i === 0 ? 7 : i;
}
function Rh(t, e, n) {
  return n + (kr(t) ? _h : Bh)[e - 1];
}
function zh(t, e) {
  const n = kr(t) ? _h : Bh, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function gu(t, e) {
  return (t - e + 7) % 7 + 1;
}
function Sa(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = Rh(s, i, r), o = gu(pu(s, i, r), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = s - 1, l = cr(u, e, n)) : l > cr(s, e, n) ? (u = s + 1, l = 1) : u = s, { weekYear: u, weekNumber: l, weekday: o, ...Qa(t) };
}
function Vc(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = gu(pu(s, 1, e), n), o = ri(s);
  let l = i * 7 + r - a - 7 + e, u;
  l < 1 ? (u = s - 1, l += ri(u)) : l > o ? (u = s + 1, l -= ri(s)) : u = s;
  const { month: c, day: f } = zh(u, l);
  return { year: u, month: c, day: f, ...Qa(t) };
}
function Wo(t) {
  const { year: e, month: n, day: s } = t, i = Rh(e, n, s);
  return { year: e, ordinal: i, ...Qa(t) };
}
function Bc(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = zh(e, n);
  return { year: e, month: s, day: i, ...Qa(t) };
}
function _c(t, e) {
  if (!ie(t.localWeekday) || !ie(t.localWeekNumber) || !ie(t.localWeekYear)) {
    if (!ie(t.weekday) || !ie(t.weekNumber) || !ie(t.weekYear))
      throw new Qs(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ie(t.localWeekday) || (t.weekday = t.localWeekday), ie(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), ie(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function eg(t, e = 4, n = 1) {
  const s = ja(t.weekYear), i = _t(
    t.weekNumber,
    1,
    cr(t.weekYear, e, n)
  ), r = _t(t.weekday, 1, 7);
  return s ? i ? r ? !1 : Bt("weekday", t.weekday) : Bt("week", t.weekNumber) : Bt("weekYear", t.weekYear);
}
function tg(t) {
  const e = ja(t.year), n = _t(t.ordinal, 1, ri(t.year));
  return e ? n ? !1 : Bt("ordinal", t.ordinal) : Bt("year", t.year);
}
function Wh(t) {
  const e = ja(t.year), n = _t(t.month, 1, 12), s = _t(t.day, 1, Ta(t.year, t.month));
  return e ? n ? s ? !1 : Bt("day", t.day) : Bt("month", t.month) : Bt("year", t.year);
}
function Ph(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = _t(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = _t(n, 0, 59), o = _t(s, 0, 59), l = _t(i, 0, 999);
  return r ? a ? o ? l ? !1 : Bt("millisecond", i) : Bt("second", s) : Bt("minute", n) : Bt("hour", e);
}
function ie(t) {
  return typeof t > "u";
}
function is(t) {
  return typeof t == "number";
}
function ja(t) {
  return typeof t == "number" && t % 1 === 0;
}
function ng(t) {
  return typeof t == "string";
}
function sg(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Hh() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Uh() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function ig(t) {
  return Array.isArray(t) ? t : [t];
}
function Rc(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function rg(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function fi(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function xl(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new ut("Week settings must be an object");
  if (!_t(t.firstDay, 1, 7) || !_t(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !_t(e, 1, 7)))
    throw new ut("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function _t(t, e, n) {
  return ja(t) && t >= e && t <= n;
}
function ag(t, e) {
  return t - e * Math.floor(t / e);
}
function Je(t, e = 2) {
  const n = t < 0;
  let s;
  return n ? s = "-" + ("" + -t).padStart(e, "0") : s = ("" + t).padStart(e, "0"), s;
}
function Qn(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function ys(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseFloat(t);
}
function yu(t) {
  if (!(ie(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function vu(t, e, n = "round") {
  const s = 10 ** e;
  switch (n) {
    case "expand":
      return t > 0 ? Math.ceil(t * s) / s : Math.floor(t * s) / s;
    case "trunc":
      return Math.trunc(t * s) / s;
    case "round":
      return Math.round(t * s) / s;
    case "floor":
      return Math.floor(t * s) / s;
    case "ceil":
      return Math.ceil(t * s) / s;
    default:
      throw new RangeError(`Value rounding ${n} is out of range`);
  }
}
function kr(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function ri(t) {
  return kr(t) ? 366 : 365;
}
function Ta(t, e) {
  const n = ag(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? kr(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Ja(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function zc(t, e, n) {
  return -gu(pu(t, 1, e), n) + e - 1;
}
function cr(t, e = 4, n = 1) {
  const s = zc(t, e, n), i = zc(t + 1, e, n);
  return (ri(t) - s + i) / 7;
}
function El(t) {
  return t > 99 ? t : t > He.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Zh(t, e, n, s = null) {
  const i = new Date(t), r = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  s && (r.timeZone = s);
  const a = { timeZoneName: e, ...r }, o = new Intl.DateTimeFormat(n, a).formatToParts(i).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Ka(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + i;
}
function qh(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new ut(`Invalid unit value ${t}`);
  return e;
}
function Ia(t, e) {
  const n = {};
  for (const s in t)
    if (fi(t, s)) {
      const i = t[s];
      if (i == null) continue;
      n[e(s)] = qh(i);
    }
  return n;
}
function Qi(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), s = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${Je(n, 2)}:${Je(s, 2)}`;
    case "narrow":
      return `${i}${n}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${i}${Je(n, 2)}${Je(s, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Qa(t) {
  return rg(t, ["hour", "minute", "second", "millisecond"]);
}
const og = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Gh = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], lg = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Yh(t) {
  switch (t) {
    case "narrow":
      return [...lg];
    case "short":
      return [...Gh];
    case "long":
      return [...og];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const jh = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Jh = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], ug = ["M", "T", "W", "T", "F", "S", "S"];
function Kh(t) {
  switch (t) {
    case "narrow":
      return [...ug];
    case "short":
      return [...Jh];
    case "long":
      return [...jh];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Qh = ["AM", "PM"], cg = ["Before Christ", "Anno Domini"], dg = ["BC", "AD"], fg = ["B", "A"];
function Xh(t) {
  switch (t) {
    case "narrow":
      return [...fg];
    case "short":
      return [...dg];
    case "long":
      return [...cg];
    default:
      return null;
  }
}
function hg(t) {
  return Qh[t.hour < 12 ? 0 : 1];
}
function mg(t, e) {
  return Kh(e)[t.weekday - 1];
}
function pg(t, e) {
  return Yh(e)[t.month - 1];
}
function gg(t, e) {
  return Xh(e)[t.year < 0 ? 0 : 1];
}
function yg(t, e, n = "always", s = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, r = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (n === "auto" && r) {
    const f = t === "days";
    switch (e) {
      case 1:
        return f ? "tomorrow" : `next ${i[t][0]}`;
      case -1:
        return f ? "yesterday" : `last ${i[t][0]}`;
      case 0:
        return f ? "today" : `this ${i[t][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), l = o === 1, u = i[t], c = s ? l ? u[1] : u[2] || u[1] : l ? i[t][0] : t;
  return a ? `${o} ${c} ago` : `in ${o} ${c}`;
}
function Wc(t, e) {
  let n = "";
  for (const s of t)
    s.literal ? n += s.val : n += e(s.val);
  return n;
}
const vg = {
  D: wa,
  DD: mh,
  DDD: ph,
  DDDD: gh,
  t: yh,
  tt: vh,
  ttt: kh,
  tttt: bh,
  T: wh,
  TT: Sh,
  TTT: Th,
  TTTT: Ih,
  f: $h,
  ff: xh,
  fff: Fh,
  ffff: Mh,
  F: Ch,
  FF: Eh,
  FFF: Oh,
  FFFF: Dh
};
let Yt = class Ri {
  static create(e, n = {}) {
    return new Ri(e, n);
  }
  static parseFormat(e) {
    let n = null, s = "", i = !1;
    const r = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? ((s.length > 0 || i) && r.push({
        literal: i || /^\s+$/.test(s),
        val: s === "" ? "'" : s
      }), n = null, s = "", i = !i) : i || o === n ? s += o : (s.length > 0 && r.push({ literal: /^\s+$/.test(s), val: s }), s = o, n = o);
    }
    return s.length > 0 && r.push({ literal: i || /^\s+$/.test(s), val: s }), r;
  }
  static macroTokenToFormatOpts(e) {
    return vg[e];
  }
  constructor(e, n) {
    this.opts = n, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  dtFormatter(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n });
  }
  formatDateTime(e, n) {
    return this.dtFormatter(e, n).format();
  }
  formatDateTimeParts(e, n) {
    return this.dtFormatter(e, n).formatToParts();
  }
  formatInterval(e, n) {
    return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, n) {
    return this.dtFormatter(e, n).resolvedOptions();
  }
  num(e, n = 0, s = void 0) {
    if (this.opts.forceSimple)
      return Je(e, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), s && (i.signDisplay = s), this.loc.numberFormatter(i).format(e);
  }
  formatDateTimeFromString(e, n) {
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, p) => this.loc.extract(e, h, p), a = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", o = () => s ? hg(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (h, p) => s ? pg(e, h) : r(p ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, p) => s ? mg(e, h) : r(
      p ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), c = (h) => {
      const p = Ri.macroTokenToFormatOpts(h);
      return p ? this.formatWithSystemDefault(e, p) : h;
    }, f = (h) => s ? gg(e, h) : r({ era: h }, "era"), m = (h) => {
      switch (h) {
        // ms
        case "S":
          return this.num(e.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(e.millisecond, 3);
        // seconds
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        // minutes
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        // hours
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        // offset
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return e.zoneName;
        // meridiems
        case "a":
          return o();
        // dates
        case "d":
          return i ? r({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return i ? r({ day: "2-digit" }, "day") : this.num(e.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        // weekdays - format
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        // months - standalone
        case "L":
          return i ? r({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return i ? r({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        // months - format
        case "M":
          return i ? r({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return i ? r({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        // years
        case "y":
          return i ? r({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return i ? r({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? r({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return i ? r({ year: "numeric" }, "year") : this.num(e.year, 6);
        // eras
        case "G":
          return f("short");
        case "GG":
          return f("long");
        case "GGGGG":
          return f("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return c(h);
      }
    };
    return Wc(Ri.parseFormat(n), m);
  }
  formatDurationFromString(e, n) {
    const s = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, i = (c) => {
      switch (c[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "w":
          return "weeks";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return null;
      }
    }, r = (c, f) => (m) => {
      const h = i(m);
      if (h) {
        const p = f.isNegativeDuration && h !== f.largestUnit ? s : 1;
        let k;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? k = "never" : this.opts.signMode === "all" ? k = "always" : k = "auto", this.num(c.get(h) * p, m.length, k);
      } else
        return m;
    }, a = Ri.parseFormat(n), o = a.reduce(
      (c, { literal: f, val: m }) => f ? c : c.concat(m),
      []
    ), l = e.shiftTo(...o.map(i).filter((c) => c)), u = {
      isNegativeDuration: l < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(l.values)[0]
    };
    return Wc(a, r(l, u));
  }
};
const em = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function gi(...t) {
  const e = t.reduce((n, s) => n + s.source, "");
  return RegExp(`^${e}$`);
}
function yi(...t) {
  return (e) => t.reduce(
    ([n, s, i], r) => {
      const [a, o, l] = r(e, i);
      return [{ ...n, ...a }, o || s, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function vi(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, s] of e) {
    const i = n.exec(t);
    if (i)
      return s(i);
  }
  return [null, null];
}
function tm(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = Qn(e[n + i]);
    return [s, null, n + i];
  };
}
const nm = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, kg = `(?:${nm.source}?(?:\\[(${em.source})\\])?)?`, ku = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, sm = RegExp(`${ku.source}${kg}`), bu = RegExp(`(?:[Tt]${sm.source})?`), bg = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, wg = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Sg = /(\d{4})-?(\d{3})/, Tg = tm("weekYear", "weekNumber", "weekDay"), Ig = tm("year", "ordinal"), $g = /(\d{4})-(\d\d)-(\d\d)/, im = RegExp(
  `${ku.source} ?(?:${nm.source}|(${em.source}))?`
), Cg = RegExp(`(?: ${im.source})?`);
function ai(t, e, n) {
  const s = t[e];
  return ie(s) ? n : Qn(s);
}
function xg(t, e) {
  return [{
    year: ai(t, e),
    month: ai(t, e + 1, 1),
    day: ai(t, e + 2, 1)
  }, null, e + 3];
}
function ki(t, e) {
  return [{
    hours: ai(t, e, 0),
    minutes: ai(t, e + 1, 0),
    seconds: ai(t, e + 2, 0),
    milliseconds: yu(t[e + 3])
  }, null, e + 4];
}
function br(t, e) {
  const n = !t[e] && !t[e + 1], s = Ka(t[e + 1], t[e + 2]), i = n ? null : gn.instance(s);
  return [{}, i, e + 3];
}
function wr(t, e) {
  const n = t[e] ? pi.create(t[e]) : null;
  return [{}, n, e + 1];
}
const Eg = RegExp(`^T?${ku.source}$`), Fg = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Og(t) {
  const [e, n, s, i, r, a, o, l, u] = t, c = e[0] === "-", f = l && l[0] === "-", m = (h, p = !1) => h !== void 0 && (p || h && c) ? -h : h;
  return [
    {
      years: m(ys(n)),
      months: m(ys(s)),
      weeks: m(ys(i)),
      days: m(ys(r)),
      hours: m(ys(a)),
      minutes: m(ys(o)),
      seconds: m(ys(l), l === "-0"),
      milliseconds: m(yu(u), f)
    }
  ];
}
const Mg = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function wu(t, e, n, s, i, r, a) {
  const o = {
    year: e.length === 2 ? El(Qn(e)) : Qn(e),
    month: Gh.indexOf(n) + 1,
    day: Qn(s),
    hour: Qn(i),
    minute: Qn(r)
  };
  return a && (o.second = Qn(a)), t && (o.weekday = t.length > 3 ? jh.indexOf(t) + 1 : Jh.indexOf(t) + 1), o;
}
const Dg = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Ag(t) {
  const [
    ,
    e,
    n,
    s,
    i,
    r,
    a,
    o,
    l,
    u,
    c,
    f
  ] = t, m = wu(e, i, s, n, r, a, o);
  let h;
  return l ? h = Mg[l] : u ? h = 0 : h = Ka(c, f), [m, new gn(h)];
}
function Lg(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Ng = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Vg = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Bg = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Pc(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [wu(e, i, s, n, r, a, o), gn.utcInstance];
}
function _g(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [wu(e, o, n, s, i, r, a), gn.utcInstance];
}
const Rg = gi(bg, bu), zg = gi(wg, bu), Wg = gi(Sg, bu), Pg = gi(sm), rm = yi(
  xg,
  ki,
  br,
  wr
), Hg = yi(
  Tg,
  ki,
  br,
  wr
), Ug = yi(
  Ig,
  ki,
  br,
  wr
), Zg = yi(
  ki,
  br,
  wr
);
function qg(t) {
  return vi(
    t,
    [Rg, rm],
    [zg, Hg],
    [Wg, Ug],
    [Pg, Zg]
  );
}
function Gg(t) {
  return vi(Lg(t), [Dg, Ag]);
}
function Yg(t) {
  return vi(
    t,
    [Ng, Pc],
    [Vg, Pc],
    [Bg, _g]
  );
}
function jg(t) {
  return vi(t, [Fg, Og]);
}
const Jg = yi(ki);
function Kg(t) {
  return vi(t, [Eg, Jg]);
}
const Qg = gi($g, Cg), Xg = gi(im), ey = yi(
  ki,
  br,
  wr
);
function ty(t) {
  return vi(
    t,
    [Qg, rm],
    [Xg, ey]
  );
}
const Hc = "Invalid Duration", am = {
  weeks: {
    days: 7,
    hours: 168,
    minutes: 10080,
    seconds: 10080 * 60,
    milliseconds: 10080 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 1440,
    seconds: 1440 * 60,
    milliseconds: 1440 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 3600, milliseconds: 3600 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, ny = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 2184,
    minutes: 2184 * 60,
    seconds: 2184 * 60 * 60,
    milliseconds: 2184 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 720,
    minutes: 720 * 60,
    seconds: 720 * 60 * 60,
    milliseconds: 720 * 60 * 60 * 1e3
  },
  ...am
}, Lt = 146097 / 400, Hs = 146097 / 4800, sy = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Lt / 7,
    days: Lt,
    hours: Lt * 24,
    minutes: Lt * 24 * 60,
    seconds: Lt * 24 * 60 * 60,
    milliseconds: Lt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Lt / 28,
    days: Lt / 4,
    hours: Lt * 24 / 4,
    minutes: Lt * 24 * 60 / 4,
    seconds: Lt * 24 * 60 * 60 / 4,
    milliseconds: Lt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Hs / 7,
    days: Hs,
    hours: Hs * 24,
    minutes: Hs * 24 * 60,
    seconds: Hs * 24 * 60 * 60,
    milliseconds: Hs * 24 * 60 * 60 * 1e3
  },
  ...am
}, $s = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], iy = $s.slice(0).reverse();
function Tn(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new ft(s);
}
function om(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of iy.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function Uc(t, e) {
  const n = om(t, e) < 0 ? -1 : 1;
  $s.reduceRight((s, i) => {
    if (ie(e[i]))
      return s;
    if (s) {
      const r = e[s] * n, a = t[i][s], o = Math.floor(r / a);
      e[i] += o * n, e[s] -= o * a * n;
    }
    return i;
  }, null), $s.reduce((s, i) => {
    if (ie(e[i]))
      return s;
    if (s) {
      const r = e[s] % 1;
      e[s] -= r, e[i] += r * t[s][i];
    }
    return i;
  }, null);
}
function Zc(t) {
  const e = {};
  for (const [n, s] of Object.entries(t))
    s !== 0 && (e[n] = s);
  return e;
}
let ft = class rt {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let s = n ? sy : ny;
    e.matrix && (s = e.matrix), this.values = e.values, this.loc = e.loc || Ne.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = s, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, n) {
    return rt.fromObject({ milliseconds: e }, n);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new ut(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new rt({
      values: Ia(e, rt.normalizeUnit),
      loc: Ne.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (is(e))
      return rt.fromMillis(e);
    if (rt.isDuration(e))
      return e;
    if (typeof e == "object")
      return rt.fromObject(e);
    throw new ut(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, n) {
    const [s] = jg(e);
    return s ? rt.fromObject(s, n) : rt.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, n) {
    const [s] = Kg(e);
    return s ? rt.fromObject(s, n) : rt.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new ut("need to specify a reason the Duration is invalid");
    const s = e instanceof jt ? e : new jt(e, n);
    if (He.throwOnInvalid)
      throw new Op(s);
    return new rt({ invalid: s });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!n) throw new hh(e);
    return n;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
   * @return {string}
   */
  toFormat(e, n = {}) {
    const s = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? Yt.create(this.loc, s).formatDurationFromString(this, e) : Hc;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
   * @example
   * ```js
   * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
   * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid) return Hc;
    const n = e.showZeros !== !1, s = $s.map((i) => {
      const r = this.values[i];
      return ie(r) || r === 0 && !n ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: i.slice(0, -1) }).format(r);
    }).filter((i) => i);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(s);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += vu(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, We.fromMillis(n, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? om(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid) return this;
    const n = rt.fromDurationLike(e), s = {};
    for (const i of $s)
      (fi(n.values, i) || fi(this.values, i)) && (s[i] = n.get(i) + this.get(i));
    return Tn(this, { values: s }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = rt.fromDurationLike(e);
    return this.plus(n.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid) return this;
    const n = {};
    for (const s of Object.keys(this.values))
      n[s] = qh(e(this.values[s], s));
    return Tn(this, { values: n }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[rt.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid) return this;
    const n = { ...this.values, ...Ia(e, rt.normalizeUnit) };
    return Tn(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: s, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: s };
    return Tn(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const e = this.toObject();
    return Uc(this.matrix, e), Tn(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = Zc(this.normalize().shiftToAll().toObject());
    return Tn(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => rt.normalizeUnit(a));
    const n = {}, s = {}, i = this.toObject();
    let r;
    for (const a of $s)
      if (e.indexOf(a) >= 0) {
        r = a;
        let o = 0;
        for (const u in s)
          o += this.matrix[u][a] * s[u], s[u] = 0;
        is(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, s[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else is(i[a]) && (s[a] = i[a]);
    for (const a in s)
      s[a] !== 0 && (n[r] += a === r ? s[a] : s[a] / this.matrix[r][a]);
    return Uc(this.matrix, n), Tn(this, { values: n }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const n of Object.keys(this.values))
      e[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return Tn(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = Zc(this.values);
    return Tn(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function n(s, i) {
      return s === void 0 || s === 0 ? i === void 0 || i === 0 : s === i;
    }
    for (const s of $s)
      if (!n(this.values[s], e.values[s]))
        return !1;
    return !0;
  }
};
const Us = "Invalid Interval";
function ry(t, e) {
  return !t || !t.isValid ? ta.invalid("missing or invalid start") : !e || !e.isValid ? ta.invalid("missing or invalid end") : e < t ? ta.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
let ta = class et {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new ut("need to specify a reason the Interval is invalid");
    const s = e instanceof jt ? e : new jt(e, n);
    if (He.throwOnInvalid)
      throw new Fp(s);
    return new et({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = Mi(e), i = Mi(n), r = ry(s, i);
    return r ?? new et({
      start: s,
      end: i
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, n) {
    const s = ft.fromDurationLike(n), i = Mi(e);
    return et.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = ft.fromDurationLike(n), i = Mi(e);
    return et.fromDateTimes(i.minus(s), i);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, n) {
    const [s, i] = (e || "").split("/", 2);
    if (s && i) {
      let r, a;
      try {
        r = We.fromISO(s, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = We.fromISO(i, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return et.fromDateTimes(r, o);
      if (a) {
        const u = ft.fromISO(i, n);
        if (u.isValid)
          return et.after(r, u);
      } else if (l) {
        const u = ft.fromISO(s, n);
        if (u.isValid)
          return et.before(o, u);
      }
    }
    return et.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval. This is the first instant which is not part of the interval
   * (Interval is half-open).
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns the last DateTime included in the interval (since end is not part of the interval)
   * @type {DateTime}
   */
  get lastDateTime() {
    return this.isValid && this.e ? this.e.minus(1) : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", n) {
    if (!this.isValid) return NaN;
    const s = this.start.startOf(e, n);
    let i;
    return n?.useLocaleWeeks ? i = this.end.reconfigure({ locale: s.locale }) : i = this.end, i = i.startOf(e, n), Math.floor(i.diff(s, e).get(e)) + (i.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: n } = {}) {
    return this.isValid ? et.fromDateTimes(e || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const n = e.map(Mi).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), s = [];
    let { s: i } = this, r = 0;
    for (; i < this.e; ) {
      const a = n[r] || this.e, o = +a > +this.e ? this.e : a;
      s.push(et.fromDateTimes(i, o)), i = o, r += 1;
    }
    return s;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const n = ft.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, i = 1, r;
    const a = [];
    for (; s < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * i));
      r = +o > +this.e ? this.e : o, a.push(et.fromDateTimes(s, r)), s = r, i += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid) return this;
    const n = this.s > e.s ? this.s : e.s, s = this.e < e.e ? this.e : e.e;
    return n >= s ? null : et.fromDateTimes(n, s);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid) return this;
    const n = this.s < e.s ? this.s : e.s, s = this.e > e.e ? this.e : e.e;
    return et.fromDateTimes(n, s);
  }
  /**
   * Merge an array of Intervals into an equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
   * and ending with the latest.
   *
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [n, s] = e.sort((i, r) => i.s - r.s).reduce(
      ([i, r], a) => r ? r.overlaps(a) || r.abutsStart(a) ? [i, r.union(a)] : [i.concat([r]), a] : [i, a],
      [[], null]
    );
    return s && n.push(s), n;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let n = null, s = 0;
    const i = [], r = e.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...r), o = a.sort((l, u) => l.time - u.time);
    for (const l of o)
      s += l.type === "s" ? 1 : -1, s === 1 ? n = l.time : (n && +n != +l.time && i.push(et.fromDateTimes(n, l.time)), n = null);
    return et.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return et.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Us;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = wa, n = {}) {
    return this.isValid ? Yt.create(this.s.loc.clone(n), e).formatInterval(this) : Us;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Us;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Us;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Us;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Us;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : ft.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return et.fromDateTimes(e(this.s), e(this.e));
  }
}, Rr = class {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = He.defaultZone) {
    const n = We.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return pi.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return ts(e, He.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ne.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ne.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ne.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null, outputCalendar: r = "gregory" } = {}) {
    return (i || Ne.create(n, s, r)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null, outputCalendar: r = "gregory" } = {}) {
    return (i || Ne.create(n, s, r)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null } = {}) {
    return (i || Ne.create(n, s, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null } = {}) {
    return (i || Ne.create(n, s, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return Ne.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: n = null } = {}) {
    return Ne.create(n, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: Hh(), localeWeek: Uh() };
  }
};
function qc(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(ft.fromMillis(s).as("days"));
}
function ay(t, e, n) {
  const s = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const c = qc(l, u);
        return (c - c % 7) / 7;
      }
    ],
    ["days", qc]
  ], i = {}, r = t;
  let a, o;
  for (const [l, u] of s)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = r.plus(i), o > e ? (i[l]--, t = r.plus(i), t > e && (o = t, i[l]--, t = r.plus(i))) : t = o);
  return [t, i, o, a];
}
function oy(t, e, n, s) {
  let [i, r, a, o] = ay(t, e, n);
  const l = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (r[o] = (r[o] || 0) + l / (a - i)));
  const c = ft.fromObject(r, s);
  return u.length > 0 ? ft.fromMillis(l, s).shiftTo(...u).plus(c) : c;
}
const ly = "missing Intl.DateTimeFormat.formatToParts support";
function Ie(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(Qp(n)) };
}
const uy = " ", lm = `[ ${uy}]`, um = new RegExp(lm, "g");
function cy(t) {
  return t.replace(/\./g, "\\.?").replace(um, lm);
}
function Gc(t) {
  return t.replace(/\./g, "").replace(um, " ").toLowerCase();
}
function Ut(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(cy).join("|")),
    deser: ([n]) => t.findIndex((s) => Gc(n) === Gc(s)) + e
  };
}
function Yc(t, e) {
  return { regex: t, deser: ([, n, s]) => Ka(n, s), groups: e };
}
function zr(t) {
  return { regex: t, deser: ([e]) => e };
}
function dy(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function fy(t, e) {
  const n = Ht(e), s = Ht(e, "{2}"), i = Ht(e, "{3}"), r = Ht(e, "{4}"), a = Ht(e, "{6}"), o = Ht(e, "{1,2}"), l = Ht(e, "{1,3}"), u = Ht(e, "{1,6}"), c = Ht(e, "{1,9}"), f = Ht(e, "{2,4}"), m = Ht(e, "{4,6}"), h = (S) => ({ regex: RegExp(dy(S.val)), deser: ([b]) => b, literal: !0 }), k = ((S) => {
    if (t.literal)
      return h(S);
    switch (S.val) {
      // era
      case "G":
        return Ut(e.eras("short"), 0);
      case "GG":
        return Ut(e.eras("long"), 0);
      // years
      case "y":
        return Ie(u);
      case "yy":
        return Ie(f, El);
      case "yyyy":
        return Ie(r);
      case "yyyyy":
        return Ie(m);
      case "yyyyyy":
        return Ie(a);
      // months
      case "M":
        return Ie(o);
      case "MM":
        return Ie(s);
      case "MMM":
        return Ut(e.months("short", !0), 1);
      case "MMMM":
        return Ut(e.months("long", !0), 1);
      case "L":
        return Ie(o);
      case "LL":
        return Ie(s);
      case "LLL":
        return Ut(e.months("short", !1), 1);
      case "LLLL":
        return Ut(e.months("long", !1), 1);
      // dates
      case "d":
        return Ie(o);
      case "dd":
        return Ie(s);
      // ordinals
      case "o":
        return Ie(l);
      case "ooo":
        return Ie(i);
      // time
      case "HH":
        return Ie(s);
      case "H":
        return Ie(o);
      case "hh":
        return Ie(s);
      case "h":
        return Ie(o);
      case "mm":
        return Ie(s);
      case "m":
        return Ie(o);
      case "q":
        return Ie(o);
      case "qq":
        return Ie(s);
      case "s":
        return Ie(o);
      case "ss":
        return Ie(s);
      case "S":
        return Ie(l);
      case "SSS":
        return Ie(i);
      case "u":
        return zr(c);
      case "uu":
        return zr(o);
      case "uuu":
        return Ie(n);
      // meridiem
      case "a":
        return Ut(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Ie(r);
      case "kk":
        return Ie(f, El);
      // weekNumber (W)
      case "W":
        return Ie(o);
      case "WW":
        return Ie(s);
      // weekdays
      case "E":
      case "c":
        return Ie(n);
      case "EEE":
        return Ut(e.weekdays("short", !1), 1);
      case "EEEE":
        return Ut(e.weekdays("long", !1), 1);
      case "ccc":
        return Ut(e.weekdays("short", !0), 1);
      case "cccc":
        return Ut(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return Yc(new RegExp(`([+-]${o.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return Yc(new RegExp(`([+-]${o.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return zr(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return zr(/[^\S\n\r]/);
      default:
        return h(S);
    }
  })(t) || {
    invalidReason: ly
  };
  return k.token = t, k;
}
const hy = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function my(t, e, n) {
  const { type: s, value: i } = t;
  if (s === "literal") {
    const l = /^\s+$/.test(i);
    return {
      literal: !l,
      val: l ? " " : i
    };
  }
  const r = e[s];
  let a = s;
  s === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = n.hour12 ? "hour12" : "hour24");
  let o = hy[a];
  if (typeof o == "object" && (o = o[r]), o)
    return {
      literal: !1,
      val: o
    };
}
function py(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function gy(t, e, n) {
  const s = t.match(e);
  if (s) {
    const i = {};
    let r = 1;
    for (const a in n)
      if (fi(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(s.slice(r, r + l))), r += l;
      }
    return [s, i];
  } else
    return [s, {}];
}
function yy(t) {
  const e = (r) => {
    switch (r) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null, s;
  return ie(t.z) || (n = pi.create(t.z)), ie(t.Z) || (n || (n = new gn(t.Z)), s = t.Z), ie(t.q) || (t.M = (t.q - 1) * 3 + 1), ie(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), ie(t.u) || (t.S = yu(t.u)), [Object.keys(t).reduce((r, a) => {
    const o = e(a);
    return o && (r[o] = t[a]), r;
  }, {}), n, s];
}
let Po = null;
function vy() {
  return Po || (Po = We.fromMillis(1555555555555)), Po;
}
function ky(t, e) {
  if (t.literal)
    return t;
  const n = Yt.macroTokenToFormatOpts(t.val), s = hm(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function cm(t, e) {
  return Array.prototype.concat(...t.map((n) => ky(n, e)));
}
let dm = class {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = cm(Yt.parseFormat(n), e), this.units = this.tokens.map((s) => fy(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = py(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = gy(e, this.regex, this.handlers), [i, r, a] = s ? yy(s) : [null, null, void 0];
      if (fi(s, "a") && fi(s, "H"))
        throw new Qs(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: n,
        matches: s,
        result: i,
        zone: r,
        specificOffset: a
      };
    } else
      return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
};
function fm(t, e, n) {
  return new dm(t, n).explainFromTokens(e);
}
function by(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = fm(t, e, n);
  return [s, i, r, a];
}
function hm(t, e) {
  if (!t)
    return null;
  const s = Yt.create(e, t).dtFormatter(vy()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => my(a, t, r));
}
const Ho = "Invalid DateTime", jc = 864e13;
function zi(t) {
  return new jt("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Uo(t) {
  return t.weekData === null && (t.weekData = Sa(t.c)), t.weekData;
}
function Zo(t) {
  return t.localWeekData === null && (t.localWeekData = Sa(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function vs(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new We({ ...n, ...e, old: n });
}
function mm(t, e, n) {
  let s = t - e * 60 * 1e3;
  const i = n.offset(s);
  if (e === i)
    return [s, e];
  s -= (i - e) * 60 * 1e3;
  const r = n.offset(s);
  return i === r ? [s, i] : [t - Math.min(i, r) * 60 * 1e3, Math.max(i, r)];
}
function Wr(t, e) {
  t += e * 60 * 1e3;
  const n = new Date(t);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function na(t, e, n) {
  return mm(Ja(t), e, n);
}
function Jc(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, Ta(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = ft.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Ja(r);
  let [l, u] = mm(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function Zs(t, e, n, s, i, r) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = We.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: r
    });
    return a ? u : u.setZone(o);
  } else
    return We.invalid(
      new jt("unparsable", `the input "${i}" can't be parsed as ${s}`)
    );
}
function Pr(t, e, n = !0) {
  return t.isValid ? Yt.create(Ne.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function qo(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += Je(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += Je(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += Je(t.c.month), n === "month") return i;
  return i += Je(t.c.day), i;
}
function Kc(t, e, n, s, i, r, a) {
  let o = !n || t.c.millisecond !== 0 || t.c.second !== 0, l = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (l += Je(t.c.hour), a === "hour") break;
      if (e) {
        if (l += ":", l += Je(t.c.minute), a === "minute") break;
        o && (l += ":", l += Je(t.c.second));
      } else {
        if (l += Je(t.c.minute), a === "minute") break;
        o && (l += Je(t.c.second));
      }
      if (a === "second") break;
      o && (!s || t.c.millisecond !== 0) && (l += ".", l += Je(t.c.millisecond, 3));
  }
  return i && (t.isOffsetFixed && t.offset === 0 && !r ? l += "Z" : t.o < 0 ? (l += "-", l += Je(Math.trunc(-t.o / 60)), l += ":", l += Je(Math.trunc(-t.o % 60))) : (l += "+", l += Je(Math.trunc(t.o / 60)), l += ":", l += Je(Math.trunc(t.o % 60)))), r && (l += "[" + t.zone.ianaName + "]"), l;
}
const pm = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, wy = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Sy = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, sa = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Ty = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Iy = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function ia(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e) throw new hh(t);
  return e;
}
function Qc(t) {
  switch (t.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return ia(t);
  }
}
function $y(t) {
  if (Wi === void 0 && (Wi = He.now()), t.type !== "iana")
    return t.offset(Wi);
  const e = t.name;
  let n = Fl.get(e);
  return n === void 0 && (n = t.offset(Wi), Fl.set(e, n)), n;
}
function Xc(t, e) {
  const n = ts(e.zone, He.defaultZone);
  if (!n.isValid)
    return We.invalid(zi(n));
  const s = Ne.fromObject(e);
  let i, r;
  if (ie(t.year))
    i = He.now();
  else {
    for (const l of sa)
      ie(t[l]) && (t[l] = pm[l]);
    const a = Wh(t) || Ph(t);
    if (a)
      return We.invalid(a);
    const o = $y(n);
    [i, r] = na(t, o, n);
  }
  return new We({ ts: i, zone: n, loc: s, o: r });
}
function ed(t, e, n) {
  const s = ie(n.round) ? !0 : n.round, i = ie(n.rounding) ? "trunc" : n.rounding, r = (o, l) => (o = vu(o, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(o, l)), a = (o) => n.calendary ? e.hasSame(t, o) ? 0 : e.startOf(o).diff(t.startOf(o), o).get(o) : e.diff(t, o).get(o);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const o of n.units) {
    const l = a(o);
    if (Math.abs(l) >= 1)
      return r(l, o);
  }
  return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function td(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let Wi;
const Fl = /* @__PURE__ */ new Map();
let We = class Be {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || He.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new jt("invalid input") : null) || (n.isValid ? null : zi(n));
    this.ts = ie(e.ts) ? He.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const o = is(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Wr(this.ts, o), s = Number.isNaN(i.year) ? new jt("invalid input") : null, i = s ? null : i, r = s ? null : o;
      }
    this._zone = n, this.loc = e.loc || Ne.create(), this.invalid = s, this.weekData = null, this.localWeekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new Be({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, n] = td(arguments), [s, i, r, a, o, l, u] = n;
    return Xc({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, n] = td(arguments), [s, i, r, a, o, l, u] = n;
    return e.zone = gn.utcInstance, Xc({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = sg(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return Be.invalid("invalid input");
    const i = ts(n.zone, He.defaultZone);
    return i.isValid ? new Be({
      ts: s,
      zone: i,
      loc: Ne.fromObject(n)
    }) : Be.invalid(zi(i));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, n = {}) {
    if (is(e))
      return e < -jc || e > jc ? Be.invalid("Timestamp out of range") : new Be({
        ts: e,
        zone: ts(n.zone, He.defaultZone),
        loc: Ne.fromObject(n)
      });
    throw new ut(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, n = {}) {
    if (is(e))
      return new Be({
        ts: e * 1e3,
        zone: ts(n.zone, He.defaultZone),
        loc: Ne.fromObject(n)
      });
    throw new ut("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, n = {}) {
    e = e || {};
    const s = ts(n.zone, He.defaultZone);
    if (!s.isValid)
      return Be.invalid(zi(s));
    const i = Ne.fromObject(n), r = Ia(e, Qc), { minDaysInFirstWeek: a, startOfWeek: o } = _c(r, i), l = He.now(), u = ie(n.specificOffset) ? s.offset(l) : n.specificOffset, c = !ie(r.ordinal), f = !ie(r.year), m = !ie(r.month) || !ie(r.day), h = f || m, p = r.weekYear || r.weekNumber;
    if ((h || c) && p)
      throw new Qs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && c)
      throw new Qs("Can't mix ordinal dates with month/day");
    const k = p || r.weekday && !h;
    let S, b, L = Wr(l, u);
    k ? (S = Ty, b = wy, L = Sa(L, a, o)) : c ? (S = Iy, b = Sy, L = Wo(L)) : (S = sa, b = pm);
    let T = !1;
    for (const P of S) {
      const Q = r[P];
      ie(Q) ? T ? r[P] = b[P] : r[P] = L[P] : T = !0;
    }
    const D = k ? eg(r, a, o) : c ? tg(r) : Wh(r), w = D || Ph(r);
    if (w)
      return Be.invalid(w);
    const E = k ? Vc(r, a, o) : c ? Bc(r) : r, [U, N] = na(E, u, s), O = new Be({
      ts: U,
      zone: s,
      o: N,
      loc: i
    });
    return r.weekday && h && e.weekday !== O.weekday ? Be.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${O.toISO()}`
    ) : O.isValid ? O : Be.invalid(O.invalid);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, n = {}) {
    const [s, i] = qg(e);
    return Zs(s, i, n, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, n = {}) {
    const [s, i] = Gg(e);
    return Zs(s, i, n, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, n = {}) {
    const [s, i] = Yg(e);
    return Zs(s, i, n, "HTTP", n);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, n, s = {}) {
    if (ie(e) || ie(n))
      throw new ut("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: r = null } = s, a = Ne.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [o, l, u, c] = by(a, e, n);
    return c ? Be.invalid(c) : Zs(o, l, s, `format ${n}`, e, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, s = {}) {
    return Be.fromFormat(e, n, s);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, n = {}) {
    const [s, i] = ty(e);
    return Zs(s, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new ut("need to specify a reason the DateTime is invalid");
    const s = e instanceof jt ? e : new jt(e, n);
    if (He.throwOnInvalid)
      throw new Ep(s);
    return new Be({ invalid: s });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, n = {}) {
    const s = hm(e, Ne.fromObject(n));
    return s ? s.map((i) => i ? i.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, n = {}) {
    return cm(Yt.parseFormat(e), Ne.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    Wi = void 0, Fl.clear();
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? Uo(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Uo(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Uo(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? Zo(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Zo(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Zo(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Wo(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Rr.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Rr.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Rr.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Rr.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, n = 6e4, s = Ja(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), o = this.zone.offset(s - r * n);
    if (a === o)
      return [this];
    const l = s - a * n, u = s - o * n, c = Wr(l, a), f = Wr(u, o);
    return c.hour === f.hour && c.minute === f.minute && c.second === f.second && c.millisecond === f.millisecond ? [vs(this, { ts: l }), vs(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return kr(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Ta(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? ri(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? cr(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? cr(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: s, calendar: i } = Yt.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: s, outputCalendar: i };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, n = {}) {
    return this.setZone(gn.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(He.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: s = !1 } = {}) {
    if (e = ts(e, He.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || s) {
        const r = e.offset(this.ts), a = this.toObject();
        [i] = na(a, r, e);
      }
      return vs(this, { ts: i, zone: e });
    } else
      return Be.invalid(zi(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: s } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: s });
    return vs(this, { loc: i });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid) return this;
    const n = Ia(e, Qc), { minDaysInFirstWeek: s, startOfWeek: i } = _c(n, this.loc), r = !ie(n.weekYear) || !ie(n.weekNumber) || !ie(n.weekday), a = !ie(n.ordinal), o = !ie(n.year), l = !ie(n.month) || !ie(n.day), u = o || l, c = n.weekYear || n.weekNumber;
    if ((u || a) && c)
      throw new Qs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Qs("Can't mix ordinal dates with month/day");
    let f;
    r ? f = Vc(
      { ...Sa(this.c, s, i), ...n },
      s,
      i
    ) : ie(n.ordinal) ? (f = { ...this.toObject(), ...n }, ie(n.day) && (f.day = Math.min(Ta(f.year, f.month), f.day))) : f = Bc({ ...Wo(this.c), ...n });
    const [m, h] = na(f, this.o, this.zone);
    return vs(this, { ts: m, o: h });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid) return this;
    const n = ft.fromDurationLike(e);
    return vs(this, Jc(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = ft.fromDurationLike(e).negate();
    return vs(this, Jc(this, n));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: n = !1 } = {}) {
    if (!this.isValid) return this;
    const s = {}, i = ft.normalizeUnit(e);
    switch (i) {
      case "years":
        s.month = 1;
      // falls through
      case "quarters":
      case "months":
        s.day = 1;
      // falls through
      case "weeks":
      case "days":
        s.hour = 0;
      // falls through
      case "hours":
        s.minute = 0;
      // falls through
      case "minutes":
        s.second = 0;
      // falls through
      case "seconds":
        s.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (n) {
        const r = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < r && (s.weekNumber = this.weekNumber - 1), s.weekday = r;
      } else
        s.weekday = 1;
    if (i === "quarters") {
      const r = Math.ceil(this.month / 3);
      s.month = (r - 1) * 3 + 1;
    }
    return this.set(s);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, n) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, n).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, n = {}) {
    return this.isValid ? Yt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ho;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = wa, n = {}) {
    return this.isValid ? Yt.create(this.loc.clone(n), e).formatDateTime(this) : Ho;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? Yt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
   * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
   * @return {string|null}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: s = !1,
    includeOffset: i = !0,
    extendedZone: r = !1,
    precision: a = "milliseconds"
  } = {}) {
    if (!this.isValid)
      return null;
    a = ia(a);
    const o = e === "extended";
    let l = qo(this, o, a);
    return sa.indexOf(a) >= 3 && (l += "T"), l += Kc(
      this,
      o,
      n,
      s,
      i,
      r,
      a
    ), l;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
   * @return {string|null}
   */
  toISODate({ format: e = "extended", precision: n = "day" } = {}) {
    return this.isValid ? qo(this, e === "extended", ia(n)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Pr(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: s = !0,
    includePrefix: i = !1,
    extendedZone: r = !1,
    format: a = "extended",
    precision: o = "milliseconds"
  } = {}) {
    return this.isValid ? (o = ia(o), (i && sa.indexOf(o) >= 3 ? "T" : "") + Kc(
      this,
      a === "extended",
      n,
      e,
      s,
      r,
      o
    )) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Pr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return Pr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? qo(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: s = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (s && (i += " "), n ? i += "z" : e && (i += "ZZ")), Pr(this, i, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : Ho;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid) return {};
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, n = "milliseconds", s = {}) {
    if (!this.isValid || !e.isValid)
      return ft.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = ig(n).map(ft.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = oy(o, l, r, i);
    return a ? u.negate() : u;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(Be.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? ta.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, n, s) {
    if (!this.isValid) return !1;
    const i = e.valueOf(), r = this.setZone(e.zone, { keepLocalTime: !0 });
    return r.startOf(n, s) <= i && i <= r.endOf(n, s);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid) return null;
    const n = e.base || Be.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, r = void 0), ed(n, this.plus(s), {
      ...e,
      numeric: "always",
      units: i,
      unit: r
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? ed(e.base || Be.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(Be.isDateTime))
      throw new ut("min requires all arguments be DateTimes");
    return Rc(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(Be.isDateTime))
      throw new ut("max requires all arguments be DateTimes");
    return Rc(e, (n) => n.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, n, s = {}) {
    const { locale: i = null, numberingSystem: r = null } = s, a = Ne.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    return fm(a, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, s = {}) {
    return Be.fromFormatExplain(e, n, s);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(e, n = {}) {
    const { locale: s = null, numberingSystem: i = null } = n, r = Ne.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new dm(r, e);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(e, n, s = {}) {
    if (ie(e) || ie(n))
      throw new ut(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: r = null } = s, a = Ne.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new ut(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: o, zone: l, specificOffset: u, invalidReason: c } = n.explainFromTokens(e);
    return c ? Be.invalid(c) : Zs(
      o,
      l,
      s,
      `format ${n.format}`,
      e,
      u
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return wa;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return mh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Mp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return ph;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return gh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return yh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return vh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return kh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return bh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return wh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Sh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Th;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Ih;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return $h;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Ch;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return xh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Eh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Dp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Fh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Oh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Mh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Dh;
  }
};
function Mi(t) {
  if (We.isDateTime(t))
    return t;
  if (t && t.valueOf && is(t.valueOf()))
    return We.fromJSDate(t);
  if (t && typeof t == "object")
    return We.fromObject(t);
  throw new ut(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
function dr(t) {
  return globalThis.document ? t instanceof HTMLElement : !1;
}
function Cy(t, e, n, s) {
  const i = Ce(() => {
    const o = d(t);
    return Array.isArray(o) ? o : [o];
  }), r = Ce(() => {
    const o = [], l = d(s)?.trim().toLowerCase(), u = d(n).filter((c) => !("value" in c) || !l || c.label.toLowerCase().includes(l)).filter((c) => !("value" in c) || !e || !d(a).find((f) => f.value === c.value));
    if (u.length === 0)
      return [];
    if (!u.find(Ol))
      return [[null, u]];
    for (let c = 0; c < u.length; ) {
      const f = u[c];
      if (Xi(f)) {
        ++c, o.push([null, [f]]);
        continue;
      }
      const m = [];
      for (++c; c <= u.length; ++c) {
        const h = u[c];
        if (Ol(h) || c === u.length) {
          m.length > 0 && o.push([f, m]);
          break;
        }
        m.push(h);
      }
    }
    return o;
  }), a = Ce(() => d(i).map((o) => d(n).find((l) => Xi(l) && l.value === o)).filter(Xi));
  return {
    groups: r,
    selected: a,
    values: i
  };
}
const xy = (t, e) => {
  if (!(t in id))
    return t;
  let n = id[t];
  for (let s in e)
    n = n.replaceAll(`{${s}}`, e[s].toString());
  return n;
};
var Sr = () => {
  const t = bn()?.proxy;
  return !t || !Ey(t) ? xy : t.$t;
};
function Ey(t) {
  return !!t && "$t" in t;
}
function Fy(t) {
  let e = [];
  for (let n of t) {
    if (n.type === he && Array.isArray(n.children)) {
      e.push(...n.children);
      continue;
    }
    e.push(n);
  }
  return e;
}
var Oy = ["a:not([disabled])", "button:not([disabled])", "input[type=checkbox]:not([disabled])", "input[type=radio]:not([disabled])", "input[type=text]:not([disabled])", '[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");
function Os(t) {
  return Array.from(t.querySelectorAll(Oy)).filter(dr).filter((e) => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement);
}
function My(t, e, n) {
  let s = Os(t), i = s.indexOf(e);
  if (i === -1) return null;
  let r = Ly(s);
  Dy(r, i, n);
  let a = Ay(i, n, r, s);
  return a || ((n === "up" || n === "left") && (a = s[i - 1]), (n === "down" || n === "right") && (a = s[i + 1])), a;
}
function Dy(t, e, n) {
  let s = t[e];
  t.forEach((i) => {
    let r = i.center;
    switch (n) {
      case "up":
        r = { x: r.x, y: i.top + i.height };
        break;
      case "down":
        r = { x: r.x, y: i.top };
        break;
      case "left":
        r = { x: i.left + i.width, y: r.y };
        break;
      case "right":
        r = { x: i.left, y: r.y };
        break;
    }
    i.distance = Math.sqrt(Math.pow(s.center.x - r.x, 2) + Math.pow(s.center.y - r.y, 2));
  });
}
function Ay(t, e, n, s) {
  let i = n[t], r = [];
  switch (e) {
    case "up":
      r = n.map((o, l) => l === t || o.top + o.height > i.top ? Number.MAX_SAFE_INTEGER : o.distance);
      break;
    case "down":
      r = n.map((o, l) => l === t || o.top < i.top + i.height ? Number.MAX_SAFE_INTEGER : o.distance);
      break;
    case "left":
      r = n.map((o, l) => l === t || o.left + o.width > i.left ? Number.MAX_SAFE_INTEGER : o.distance);
      break;
    case "right":
      r = n.map((o, l) => l === t || o.left < i.left + i.width ? Number.MAX_SAFE_INTEGER : o.distance);
      break;
  }
  let a = r.indexOf(Math.min(...r));
  return r[a] !== Number.MAX_SAFE_INTEGER ? s[a] : null;
}
function Ly(t) {
  return t.map((e) => e.getBoundingClientRect()).map((e) => ({ height: e.height, width: e.width, top: e.top, left: e.left, right: e.right, bottom: e.bottom, center: { x: e.left + e.width / 2, y: e.top + e.height / 2 }, distance: 0 }));
}
function Ny(t, e, n = void 0) {
  let s = Os(t), i = n || document.activeElement;
  if (!i || !dr(i)) return s[0] || void 0;
  let r = s.indexOf(i);
  return s[r + e] || void 0;
}
function St(t) {
  let e = d(t);
  return dr(e) ? e : e?.$el;
}
function Vy(...t) {
  console.warn("[Flux]", ...t);
}
function Go(t, e, n = !1) {
  let s = By(t), i = e.compareDocumentPosition(t), r;
  i && Node.DOCUMENT_POSITION_PRECEDING || n ? r = s.firstChild() : r = s.lastChild(), (r !== null ? r : t).focus();
}
function By(t) {
  return document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
}
class _y {
  get active() {
    return this.current?.isEnabled ?? !1;
  }
  get current() {
    return this.#e[this.#e.length - 1] ?? null;
  }
  #t = [];
  #e = [];
  add(e, n, s = !0) {
    let i = { id: e, setEnabled: n, isEnabled: !0 };
    this.current && this.toggle(this.current, !1), this.#e.push(i), s && (this.toggle(i, !0), this.emit());
  }
  remove(e) {
    let n = this.#e.find((i) => i.id === e);
    n && this.toggle(n, !1);
    let s = this.current?.id === e;
    this.#e = this.#e.filter((i) => i.id !== e), s && this.current && this.toggle(this.current, !0), this.emit();
  }
  emit() {
    this.#t.forEach((e) => e(this.active, this.#e));
  }
  subscribe(e) {
    return this.#t.push(e), e(this.active, this.#e), () => this.#t = this.#t.filter((n) => n !== e);
  }
  toggle(e, n) {
    e.setEnabled(n), e.isEnabled = n;
  }
}
var nd = new _y(), Ry = !globalThis.document;
function sd(t, e, n) {
  let s = te([]);
  Rn(() => {
    document.addEventListener("pointerdown", i);
  }), Vs(() => {
    document.removeEventListener("pointerdown", i);
  });
  function i(r) {
    d(e) && !d(s).some((a) => a.contains(r.target)) && n(r);
  }
  Za(() => {
    let r = [];
    (Array.isArray(t) ? t : [t]).forEach((a) => {
      let o = St(a);
      o && r.push(o);
    }), s.value = r;
  });
}
function gm(t, e, n) {
  n ??= { attributes: !0 };
  let s, i = Re(() => St(t), (o) => {
    r(), o && (s = new MutationObserver(e), s.observe(o, n));
  }, { immediate: !0 });
  function r() {
    s && (s.disconnect(), s = void 0);
  }
  function a() {
    r(), i();
  }
  nf(a);
}
var zy = 0;
function Wy(t = !1) {
  let e = te(`focus-trap-${++zy}`), n = te(!1);
  return Rn(() => nd.add(d(e), (s) => n.value = s, t)), Vs(() => nd.remove(d(e))), n;
}
function Py(t, e) {
  Re(t, (n, s, i) => {
    if (!St(t) || d(e)) return;
    let r = document.activeElement;
    i(() => {
      requestAnimationFrame(() => r?.focus());
    });
  });
}
function Hy(t, e = {}) {
  if (Ry) return;
  let { disable: n = te(!1), disableReturn: s = te(!1), attachTo: i = null } = e, r = Wy(!n);
  Py(t, s), Re(t, (a, o, l) => {
    let u = St(t), c = i || document;
    r.value && u && document.activeElement && !u.contains(document.activeElement) && !u.querySelector("[autofocus]") && Go(u, document.activeElement, !0);
    function f(h) {
      if (!r.value || !u) return;
      let p = h.target || document.body;
      u.contains(p) || (h.preventDefault(), h.stopImmediatePropagation(), Go(u, p));
    }
    function m(h) {
      if (!r.value || !u) return;
      (!h.relatedTarget || h.relatedTarget === document.body) && (h.preventDefault(), u.focus());
      let p = h.target || document.body;
      u.contains(p) || Go(u, p);
    }
    if (c.addEventListener("focusin", f, { capture: !0 }), c.addEventListener("focusout", m, { capture: !0 }), u) {
      let h = Os(u), p = h.findIndex((b) => b.classList.contains("is-active")), k = h.findIndex((b) => !b.hasAttribute("aria-disabled")), S = h[0];
      p > -1 && (S = h[p]), k > -1 && (S = h[k]), S && S.focus();
    }
    l(() => {
      c.removeEventListener("focusin", f), c.removeEventListener("focusout", m);
    });
  }, { immediate: !0 }), Re(() => n, () => {
    let a = St(t);
    if (r.value = !n, n || !a) return;
    let o = Os(a);
    o.includes(document.activeElement) || o[0]?.focus();
  }, { immediate: !0 });
}
function Uy(t, { cycle: e = !0, direction: n = "bidirectional" } = {}) {
  gm(t, () => i(s(), !1));
  function s() {
    let a = St(t), o = Os(a), l = o.findIndex((c) => c.classList.contains("is-active")), u = o.findIndex((c) => !c.hasAttribute("aria-disabled"));
    return l > -1 ? l : u > -1 ? u : 0;
  }
  function i(a, o = !0) {
    let l = St(t), u = Os(l);
    u.forEach((c, f) => c.tabIndex = f === a ? 0 : -1), o && u[a]?.focus();
  }
  function r(a) {
    let o = St(t), l = Os(o);
    if (!["Enter", " "].includes(a.key))
      switch (n) {
        case "bidirectional":
          Zy(a, o, l, i);
          break;
        case "horizontal":
        case "vertical":
          qy(a, o, e, n, l, i);
          break;
      }
  }
  Re(t, (a, o, l) => {
    let u = St(t);
    u && (u.addEventListener("keydown", r), i(s(), !1), l(() => u.removeEventListener("keydown", r)));
  }, { immediate: !0 });
}
function Zy(t, e, n, s) {
  let i;
  switch (t.key) {
    case "ArrowUp":
      i = "up";
      break;
    case "ArrowDown":
      i = "down";
      break;
    case "ArrowLeft":
      i = "left";
      break;
    case "ArrowRight":
      i = "right";
      break;
    default:
      return;
  }
  let r = My(e, document.activeElement, i);
  r && s(n.indexOf(r)), t.preventDefault();
}
function qy(t, e, n, s, i, r) {
  let a;
  if (t.key === (s === "horizontal" ? "ArrowLeft" : "ArrowUp")) a = -1;
  else if (t.key === (s === "horizontal" ? "ArrowRight" : "ArrowDown")) a = 1;
  else return;
  let o = Ny(e, a);
  o ? r(i.indexOf(o)) : n && r(a === 1 ? 0 : i.length - 1), t.preventDefault();
}
const Gy = "overlayView", Yy = "overlayProvider overlayView", jy = "overlayShade overlayView", Jy = "overlay", Ky = "overlayTransitionLeaveActive", Qy = "slideOverTransitionLeaveActive", Xy = "basePaneStructure", ev = "paneFooter", tv = "isCurrent", nv = "overlaySmall overlay", sv = "overlayMedium overlay", iv = "overlayLarge overlay", rv = "slideOver overlay", av = "paneHeader", ov = "tabs", lv = "tabBar", uv = "paneHeaderCaption", cv = "overlayTransitionEnterActive", dv = "overlayTransitionEnterFrom", fv = "overlayTransitionLeaveTo", hv = "slideOverTransitionEnterActive", mv = "slideOverTransitionEnterFrom", pv = "slideOverTransitionLeaveTo";
var Jt = { overlayView: Gy, overlayProvider: Yy, overlayShade: jy, overlay: Jy, overlayTransitionLeaveActive: Ky, slideOverTransitionLeaveActive: Qy, basePaneStructure: Xy, paneFooter: ev, isCurrent: tv, overlaySmall: nv, overlayMedium: sv, overlayLarge: iv, slideOver: rv, paneHeader: av, tabs: ov, tabBar: lv, paneHeaderCaption: uv, overlayTransitionEnterActive: cv, overlayTransitionEnterFrom: dv, overlayTransitionLeaveTo: fv, slideOverTransitionEnterActive: hv, slideOverTransitionEnterFrom: mv, slideOverTransitionLeaveTo: pv };
const gv = `.${Jt.overlayProvider.replaceAll(" ", ".")}`;
function yv(t, e, n, s, i, r) {
  let a = null, o = 0;
  const l = te();
  Hy(l), Vs(() => {
    a?.();
  }), Re(l, (c, f, m) => {
    c && (c.addEventListener("keydown", u, { passive: !0 }), c.focus(), m(() => {
      c.removeEventListener("keydown", u);
    }));
  });
  function u(c) {
    c.key !== "Escape" || !a || !e.isCloseable || n("close");
  }
  return () => {
    const { dialogCount: c } = Tr(), f = Fy(s.default?.() ?? []), m = f.length > 0 && f.some((p) => p.type !== at);
    let h;
    return m ? (a || ([o, a] = wm()), h = ii("div", {
      key: e.viewKey,
      ref: l,
      class: [i, o === c && Jt.isCurrent],
      style: {
        zIndex: o + 1e3
      },
      tabindex: 0
    }, f)) : (a?.(), a = null), ii(Cf, { defer: !0, disabled: !h, to: gv }, [
      ii(r, t, {
        default: () => h
      })
    ]);
  };
}
function Ol(t) {
  return t !== null && typeof t == "object" && !("value" in t);
}
function Xi(t) {
  return t !== null && typeof t == "object" && "value" in t;
}
const id = {
  "flux.back": "Back",
  "flux.cancel": "Cancel",
  "flux.comingSoon": "Coming soon",
  "flux.continue": "Continue",
  "flux.customPeriod": "Custom period",
  "flux.filter": "Filter",
  "flux.filterReset": "Reset filters",
  "flux.justNow": "Just now",
  "flux.max": "Max",
  "flux.min": "Min",
  "flux.nSelected": "{n} selected",
  "flux.ok": "Ok",
  "flux.optional": "Optional",
  "flux.preview": "Preview",
  "flux.previewClose": "Close preview",
  "flux.displayingOf": "{from}–{to} of {total}",
  "flux.showN": "Show {n}",
  "flux.next": "Next",
  "flux.noItems": "There are no items (left).",
  "flux.pagination": "Pagination",
  "flux.paginationNavigateTitle": "Navigate",
  "flux.paginationNavigateMessage": "Please provide the desired page number you wish to navigate to.",
  "flux.paginationNavigatePage": "Page",
  "flux.previous": "Previous",
  "flux.search": "Search...",
  "flux.sort": "Sort",
  "flux.sortAscending": "Ascending",
  "flux.sortDescending": "Descending",
  "flux.sortRemove": "Remove sorting",
  "flux.today": "Today",
  "flux.galleryPlaceholderButton": "Pick image",
  "flux.galleryPlaceholderMessage": "Drop an image here or click the button to upload...",
  "flux.galleryPlaceholderTitle": "Gallery",
  "flux.timezoneEurope": "Europe",
  "flux.timezoneAmerica": "America",
  "flux.timezoneUs": "United States",
  "flux.timezoneAustralia": "Australia",
  "flux.timezoneCanada": "Canada",
  "flux.timezoneMexico": "Mexico",
  "flux.timezoneAfrica": "Africa",
  "flux.timezoneAntarctica": "Antarctica",
  "flux.timezoneArctic": "Arctic",
  "flux.timezoneAsia": "Asia",
  "flux.timezoneAtlantic": "Atlantic",
  "flux.timezoneBrazil": "Brazil",
  "flux.timezoneChile": "Chile",
  "flux.timezoneEtc": "ETC",
  "flux.timezoneOther": "Other",
  "flux.timezoneIndian": "Indian",
  "flux.timezonePacific": "Pacific"
};
let ym = {};
function vv(t) {
  ym = Object.keys(t).reduce((e, n) => {
    if (!t[n])
      return e;
    const { icon: s, iconName: i } = t[n];
    return e[i] = s, Array.isArray(s[2]) && s[2].forEach((r) => e[r] = s), e;
  }, {});
}
const kv = 6e3, Ve = kn({
  dialogCount: 0,
  alerts: [],
  confirms: [],
  prompts: [],
  snackbars: [],
  tooltips: []
});
let Xa = 0, bv = 0;
function vm(t) {
  const e = ++Xa;
  return Ve.alerts.push({
    id: e,
    ...t
  }), e;
}
function km(t) {
  const e = ++Xa;
  return Ve.confirms.push({
    id: e,
    ...t
  }), e;
}
function bm(t) {
  const e = ++Xa;
  return Ve.prompts.push({
    id: e,
    ...t
  }), e;
}
function Su(t) {
  const e = ++Xa;
  return Ve.snackbars.unshift({
    id: e,
    ...t
  }), e;
}
function wv(t) {
  const e = ++bv;
  return Ve.tooltips.push({
    id: e,
    ...t
  }), e;
}
function wm() {
  return [
    ++Ve.dialogCount,
    () => --Ve.dialogCount
  ];
}
function Sm(t) {
  const e = Ve.alerts.findIndex((n) => n.id === t);
  Ve.alerts.splice(e, 1);
}
function Ml(t) {
  const e = Ve.confirms.findIndex((n) => n.id === t);
  Ve.confirms.splice(e, 1);
}
function Dl(t) {
  const e = Ve.prompts.findIndex((n) => n.id === t);
  Ve.prompts.splice(e, 1);
}
function $a(t) {
  const e = Ve.snackbars.findIndex((n) => n.id === t);
  Ve.snackbars.splice(e, 1);
}
function Sv(t) {
  const e = Ve.tooltips.findIndex((n) => n.id === t);
  Ve.tooltips.splice(e, 1);
}
function Tm(t, e) {
  const n = Ve.snackbars.findIndex((s) => s.id === t);
  Object.assign(Ve.snackbars[n], e);
}
function Tv(t, e) {
  const n = Ve.tooltips.findIndex((s) => s.id === t);
  Object.assign(Ve.tooltips[n], e);
}
async function Iv(t) {
  return new Promise((e) => {
    const n = vm({
      ...t,
      onClose() {
        e(), Sm(n);
      }
    });
  });
}
async function $v(t) {
  return new Promise((e) => {
    const n = km({
      ...t,
      onCancel() {
        e(!1), Ml(n);
      },
      onConfirm() {
        e(!0), Ml(n);
      }
    });
  });
}
async function Cv(t) {
  return new Promise((e) => {
    const n = bm({
      ...t,
      onCancel() {
        e(!1), Dl(n);
      },
      onConfirm(s) {
        e(s), Dl(n);
      }
    });
  });
}
async function rd({ duration: t, ...e }) {
  const n = Su(e);
  await new Promise((s) => setTimeout(() => requestAnimationFrame(s), t ?? kv)), $a(n);
}
function Tr() {
  const t = Ce(() => Ve.dialogCount > 0), e = Ce(() => Ve.tooltips[Ve.tooltips.length - 1] || null);
  return {
    ...Ve,
    inertMain: t,
    tooltip: e,
    addAlert: vm,
    addConfirm: km,
    addPrompt: bm,
    addSnackbar: Su,
    addTooltip: wv,
    registerDialog: wm,
    removeAlert: Sm,
    removeConfirm: Ml,
    removePrompt: Dl,
    removeSnackbar: $a,
    removeTooltip: Sv,
    showAlert: Iv,
    showConfirm: $v,
    showPrompt: Cv,
    showSnackbar: rd,
    updateSnackbar: Tm,
    updateTooltip: Tv,
    showSnackbarSync: xv(rd)
  };
}
function xv(t) {
  return (...e) => t(...e);
}
function oi(t) {
  return typeof t == "string" || t instanceof String;
}
function ad(t) {
  var e;
  return typeof t == "object" && t != null && (t == null || (e = t.constructor) == null ? void 0 : e.name) === "Object";
}
function Im(t, e) {
  return Array.isArray(e) ? Im(t, (n, s) => e.includes(s)) : Object.entries(t).reduce((n, s) => {
    let [i, r] = s;
    return e(r, i) && (n[i] = r), n;
  }, {});
}
const oe = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function Ev(t) {
  switch (t) {
    case oe.LEFT:
      return oe.FORCE_LEFT;
    case oe.RIGHT:
      return oe.FORCE_RIGHT;
    default:
      return t;
  }
}
function Al(t, e) {
  if (e === t) return !0;
  const n = Array.isArray(e), s = Array.isArray(t);
  let i;
  if (n && s) {
    if (e.length != t.length) return !1;
    for (i = 0; i < e.length; i++) if (!Al(e[i], t[i])) return !1;
    return !0;
  }
  if (n != s) return !1;
  if (e && t && typeof e == "object" && typeof t == "object") {
    const r = e instanceof Date, a = t instanceof Date;
    if (r && a) return e.getTime() == t.getTime();
    if (r != a) return !1;
    const o = e instanceof RegExp, l = t instanceof RegExp;
    if (o && l) return e.toString() == t.toString();
    if (o != l) return !1;
    const u = Object.keys(e);
    for (i = 0; i < u.length; i++) if (!Object.prototype.hasOwnProperty.call(t, u[i])) return !1;
    for (i = 0; i < u.length; i++) if (!Al(t[u[i]], e[u[i]])) return !1;
    return !0;
  } else if (e && t && typeof e == "function" && typeof t == "function")
    return e.toString() === t.toString();
  return !1;
}
class Fv {
  /** Current input value */
  /** Current cursor position */
  /** Old input value */
  /** Old selection */
  constructor(e) {
    for (Object.assign(this, e); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
      --this.oldSelection.start;
    if (this.insertedCount)
      for (; this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end); )
        this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end ? ++this.oldSelection.end : ++this.cursorPos;
  }
  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }
  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }
  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }
  /** Removed symbols count */
  get removedCount() {
    return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
    this.oldValue.length - this.value.length, 0);
  }
  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }
  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }
  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }
  /** Remove direction */
  get removeDirection() {
    return !this.removedCount || this.insertedCount ? oe.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? oe.RIGHT : oe.LEFT;
  }
}
function ye(t, e) {
  return new ye.InputMask(t, e);
}
function $m(t) {
  if (t == null) throw new Error("mask property should be defined");
  return t instanceof RegExp ? ye.MaskedRegExp : oi(t) ? ye.MaskedPattern : t === Date ? ye.MaskedDate : t === Number ? ye.MaskedNumber : Array.isArray(t) || t === Array ? ye.MaskedDynamic : ye.Masked && t.prototype instanceof ye.Masked ? t : ye.Masked && t instanceof ye.Masked ? t.constructor : t instanceof Function ? ye.MaskedFunction : (console.warn("Mask not found for mask", t), ye.Masked);
}
function Ll(t) {
  if (!t) throw new Error("Options in not defined");
  if (ye.Masked) {
    if (t.prototype instanceof ye.Masked) return {
      mask: t
    };
    const {
      mask: e = void 0,
      ...n
    } = t instanceof ye.Masked ? {
      mask: t
    } : ad(t) && t.mask instanceof ye.Masked ? t : {};
    if (e) {
      const s = e.mask;
      return {
        ...Im(e, (i, r) => !r.startsWith("_")),
        mask: e.constructor,
        _mask: s,
        ...n
      };
    }
  }
  return ad(t) ? {
    ...t
  } : {
    mask: t
  };
}
function fr(t) {
  if (ye.Masked && t instanceof ye.Masked) return t;
  const e = Ll(t), n = $m(e.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
  return e.mask === n && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new n(e);
}
ye.createMask = fr;
class Tu {
  /** */
  /** */
  /** */
  /** Safely returns selection start */
  get selectionStart() {
    let e;
    try {
      e = this._unsafeSelectionStart;
    } catch {
    }
    return e ?? this.value.length;
  }
  /** Safely returns selection end */
  get selectionEnd() {
    let e;
    try {
      e = this._unsafeSelectionEnd;
    } catch {
    }
    return e ?? this.value.length;
  }
  /** Safely sets element selection */
  select(e, n) {
    if (!(e == null || n == null || e === this.selectionStart && n === this.selectionEnd))
      try {
        this._unsafeSelect(e, n);
      } catch {
      }
  }
  /** */
  get isActive() {
    return !1;
  }
  /** */
  /** */
  /** */
}
ye.MaskElement = Tu;
const od = 90, Ov = 89;
class eo extends Tu {
  /** HTMLElement to use mask on */
  constructor(e) {
    super(), this.input = e, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this);
  }
  get rootElement() {
    var e, n, s;
    return (e = (n = (s = this.input).getRootNode) == null ? void 0 : n.call(s)) != null ? e : document;
  }
  /** Is element in focus */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }
  /** Binds HTMLElement events to mask internal events */
  bindEvents(e) {
    this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", e.drop), this.input.addEventListener("click", e.click), this.input.addEventListener("focus", e.focus), this.input.addEventListener("blur", e.commit), this._handlers = e;
  }
  _onKeydown(e) {
    if (this._handlers.redo && (e.keyCode === od && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Ov && e.ctrlKey))
      return e.preventDefault(), this._handlers.redo(e);
    if (this._handlers.undo && e.keyCode === od && (e.metaKey || e.ctrlKey))
      return e.preventDefault(), this._handlers.undo(e);
    e.isComposing || this._handlers.selectionChange(e);
  }
  _onBeforeinput(e) {
    if (e.inputType === "historyUndo" && this._handlers.undo)
      return e.preventDefault(), this._handlers.undo(e);
    if (e.inputType === "historyRedo" && this._handlers.redo)
      return e.preventDefault(), this._handlers.redo(e);
  }
  _onCompositionEnd(e) {
    this._handlers.input(e);
  }
  _onInput(e) {
    e.isComposing || this._handlers.input(e);
  }
  /** Unbinds HTMLElement events to mask internal events */
  unbindEvents() {
    this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {};
  }
}
ye.HTMLMaskElement = eo;
class Mv extends eo {
  /** InputElement to use mask on */
  constructor(e) {
    super(e), this.input = e;
  }
  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }
  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }
  /** Sets InputElement selection */
  _unsafeSelect(e, n) {
    this.input.setSelectionRange(e, n);
  }
  get value() {
    return this.input.value;
  }
  set value(e) {
    this.input.value = e;
  }
}
ye.HTMLMaskElement = eo;
class Cm extends eo {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const e = this.rootElement, n = e.getSelection && e.getSelection(), s = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || s == null || s < i ? s : i;
  }
  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const e = this.rootElement, n = e.getSelection && e.getSelection(), s = n && n.anchorOffset, i = n && n.focusOffset;
    return i == null || s == null || s > i ? s : i;
  }
  /** Sets HTMLElement selection */
  _unsafeSelect(e, n) {
    if (!this.rootElement.createRange) return;
    const s = this.rootElement.createRange();
    s.setStart(this.input.firstChild || this.input, e), s.setEnd(this.input.lastChild || this.input, n);
    const i = this.rootElement, r = i.getSelection && i.getSelection();
    r && (r.removeAllRanges(), r.addRange(s));
  }
  /** HTMLElement value */
  get value() {
    return this.input.textContent || "";
  }
  set value(e) {
    this.input.textContent = e;
  }
}
ye.HTMLContenteditableMaskElement = Cm;
class to {
  constructor() {
    this.states = [], this.currentIndex = 0;
  }
  get currentState() {
    return this.states[this.currentIndex];
  }
  get isEmpty() {
    return this.states.length === 0;
  }
  push(e) {
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(e), this.states.length > to.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
  }
  go(e) {
    return this.currentIndex = Math.min(Math.max(this.currentIndex + e, 0), this.states.length - 1), this.currentState;
  }
  undo() {
    return this.go(-1);
  }
  redo() {
    return this.go(1);
  }
  clear() {
    this.states.length = 0, this.currentIndex = 0;
  }
}
to.MAX_LENGTH = 100;
class Dv {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(e, n) {
    this.el = e instanceof Tu ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Cm(e) : new Mv(e), this.masked = fr(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new to(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
  }
  maskEquals(e) {
    var n;
    return e == null || ((n = this.masked) == null ? void 0 : n.maskEquals(e));
  }
  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(e) {
    if (this.maskEquals(e)) return;
    if (!(e instanceof ye.Masked) && this.masked.constructor === $m(e)) {
      this.masked.updateOptions({
        mask: e
      });
      return;
    }
    const n = e instanceof ye.Masked ? e : fr({
      mask: e
    });
    n.unmaskedValue = this.masked.unmaskedValue, this.masked = n;
  }
  /** Raw value */
  get value() {
    return this._value;
  }
  set value(e) {
    this.value !== e && (this.masked.value = e, this.updateControl("auto"));
  }
  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(e) {
    this.unmaskedValue !== e && (this.masked.unmaskedValue = e, this.updateControl("auto"));
  }
  /** Raw input value */
  get rawInputValue() {
    return this._rawInputValue;
  }
  set rawInputValue(e) {
    this.rawInputValue !== e && (this.masked.rawInputValue = e, this.updateControl(), this.alignCursor());
  }
  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(e) {
    this.masked.typedValueEquals(e) || (this.masked.typedValue = e, this.updateControl("auto"));
  }
  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }
  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange,
      undo: this._onUndo,
      redo: this._onRedo
    });
  }
  /** Stops listening to element events */
  _unbindEvents() {
    this.el && this.el.unbindEvents();
  }
  /** Fires custom event */
  _fireEvent(e, n) {
    const s = this._listeners[e];
    s && s.forEach((i) => i(n));
  }
  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }
  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(e) {
    !this.el || !this.el.isActive || (this.el.select(e, e), this._saveSelection());
  }
  /** Stores current selection */
  _saveSelection() {
    this.displayValue !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }
  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value, this._value = this.masked.value, this._unmaskedValue = this.masked.unmaskedValue, this._rawInputValue = this.masked.rawInputValue;
  }
  /** Syncronizes view from model value, fires change events */
  updateControl(e) {
    const n = this.masked.unmaskedValue, s = this.masked.value, i = this.masked.rawInputValue, r = this.displayValue, a = this.unmaskedValue !== n || this.value !== s || this._rawInputValue !== i;
    this._unmaskedValue = n, this._value = s, this._rawInputValue = i, this.el.value !== r && (this.el.value = r), e === "auto" ? this.alignCursor() : e != null && (this.cursorPos = e), a && this._fireChangeEvents(), !this._historyChanging && (a || this.history.isEmpty) && this.history.push({
      unmaskedValue: n,
      selection: {
        start: this.selectionStart,
        end: this.cursorPos
      }
    });
  }
  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(e) {
    const {
      mask: n,
      ...s
    } = e, i = !this.maskEquals(n), r = this.masked.optionsIsChanged(s);
    i && (this.mask = n), r && this.masked.updateOptions(s), (i || r) && this.updateControl();
  }
  /** Updates cursor */
  updateCursor(e) {
    e != null && (this.cursorPos = e, this._delayUpdateCursor(e));
  }
  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(e) {
    this._abortUpdateCursor(), this._changingCursorPos = e, this._cursorChanging = setTimeout(() => {
      this.el && (this.cursorPos = this._changingCursorPos, this._abortUpdateCursor());
    }, 10);
  }
  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
  }
  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
  }
  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, oe.LEFT));
  }
  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    this.selectionStart === this.cursorPos && this.alignCursor();
  }
  /** Adds listener on custom event */
  on(e, n) {
    return this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(n), this;
  }
  /** Removes custom event listener */
  off(e, n) {
    if (!this._listeners[e]) return this;
    if (!n)
      return delete this._listeners[e], this;
    const s = this._listeners[e].indexOf(n);
    return s >= 0 && this._listeners[e].splice(s, 1), this;
  }
  /** Handles view input event */
  _onInput(e) {
    this._inputEvent = e, this._abortUpdateCursor();
    const n = new Fv({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), s = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, r = s === this.masked.rawInputValue ? n.removeDirection : oe.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, r);
    r !== oe.NONE && (a = this.masked.nearestInputPos(a, oe.NONE)), this.updateControl(a), delete this._inputEvent;
  }
  /** Handles view change event and commits model value */
  _onChange() {
    this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
  }
  /** Handles view drop event, prevents by default */
  _onDrop(e) {
    e.preventDefault(), e.stopPropagation();
  }
  /** Restore last selection on focus */
  _onFocus(e) {
    this.alignCursorFriendly();
  }
  /** Restore last selection on focus */
  _onClick(e) {
    this.alignCursorFriendly();
  }
  _onUndo() {
    this._applyHistoryState(this.history.undo());
  }
  _onRedo() {
    this._applyHistoryState(this.history.redo());
  }
  _applyHistoryState(e) {
    e && (this._historyChanging = !0, this.unmaskedValue = e.unmaskedValue, this.el.select(e.selection.start, e.selection.end), this._saveSelection(), this._historyChanging = !1);
  }
  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents(), this._listeners.length = 0, delete this.el;
  }
}
ye.InputMask = Dv;
class Ee {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(e) {
    return Array.isArray(e) ? e : [e, new Ee()];
  }
  constructor(e) {
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      tailShift: 0,
      skip: !1
    }, e);
  }
  /** Aggregate changes */
  aggregate(e) {
    return this.inserted += e.inserted, this.rawInserted += e.rawInserted, this.tailShift += e.tailShift, this.skip = this.skip || e.skip, this;
  }
  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
  get consumed() {
    return !!this.rawInserted || this.skip;
  }
  equals(e) {
    return this.inserted === e.inserted && this.tailShift === e.tailShift && this.rawInserted === e.rawInserted && this.skip === e.skip;
  }
}
ye.ChangeDetails = Ee;
class Mn {
  /** Tail value as string */
  /** Tail start position */
  /** Start position */
  constructor(e, n, s) {
    e === void 0 && (e = ""), n === void 0 && (n = 0), this.value = e, this.from = n, this.stop = s;
  }
  toString() {
    return this.value;
  }
  extend(e) {
    this.value += String(e);
  }
  appendTo(e) {
    return e.append(this.toString(), {
      tail: !0
    }).aggregate(e._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(e) {
    Object.assign(this, e);
  }
  unshift(e) {
    if (!this.value.length || e != null && this.from >= e) return "";
    const n = this.value[0];
    return this.value = this.value.slice(1), n;
  }
  shift() {
    if (!this.value.length) return "";
    const e = this.value[this.value.length - 1];
    return this.value = this.value.slice(0, -1), e;
  }
}
class yn {
  /** */
  /** */
  /** Transforms value before mask processing */
  /** Transforms each char before mask processing */
  /** Validates if value is acceptable */
  /** Does additional processing at the end of editing */
  /** Format typed value to string */
  /** Parse string to get typed value */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  /** */
  constructor(e) {
    this._value = "", this._update({
      ...yn.DEFAULTS,
      ...e
    }), this._initialized = !0;
  }
  /** Sets and applies new options */
  updateOptions(e) {
    this.optionsIsChanged(e) && this.withValueRefresh(this._update.bind(this, e));
  }
  /** Sets new options */
  _update(e) {
    Object.assign(this, e);
  }
  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(e) {
    this._value = e._value;
  }
  /** Resets value */
  reset() {
    this._value = "";
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this.resolve(e, {
      input: !0
    });
  }
  /** Resolve new value */
  resolve(e, n) {
    n === void 0 && (n = {
      input: !0
    }), this.reset(), this.append(e, n, ""), this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(e) {
    this.resolve(e, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(e) {
    this.format ? this.value = this.format(e, this) : this.unmaskedValue = String(e);
  }
  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: !0
    });
  }
  set rawInputValue(e) {
    this.resolve(e, {
      raw: !0
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return this.isComplete;
  }
  /** Finds nearest input position in direction */
  nearestInputPos(e, n) {
    return e;
  }
  totalInputPositions(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), Math.min(this.displayValue.length, n - e);
  }
  /** Extracts value in range considering flags */
  extractInput(e, n, s) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), this.displayValue.slice(e, n);
  }
  /** Extracts tail in range */
  extractTail(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), new Mn(this.extractInput(e, n), e);
  }
  /** Appends tail */
  appendTail(e) {
    return oi(e) && (e = new Mn(String(e))), e.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(e, n) {
    return e ? (this._value += e, new Ee({
      inserted: e,
      rawInserted: e
    })) : new Ee();
  }
  /** Appends char */
  _appendChar(e, n, s) {
    n === void 0 && (n = {});
    const i = this.state;
    let r;
    if ([e, r] = this.doPrepareChar(e, n), e && (r = r.aggregate(this._appendCharRaw(e, n)), !r.rawInserted && this.autofix === "pad")) {
      const a = this.state;
      this.state = i;
      let o = this.pad(n);
      const l = this._appendCharRaw(e, n);
      o = o.aggregate(l), l.rawInserted || o.equals(r) ? r = o : this.state = a;
    }
    if (r.inserted) {
      let a, o = this.doValidate(n) !== !1;
      if (o && s != null) {
        const l = this.state;
        if (this.overwrite === !0) {
          a = s.state;
          for (let c = 0; c < r.rawInserted.length; ++c)
            s.unshift(this.displayValue.length - r.tailShift);
        }
        let u = this.appendTail(s);
        if (o = u.rawInserted.length === s.toString().length, !(o && u.inserted) && this.overwrite === "shift") {
          this.state = l, a = s.state;
          for (let c = 0; c < r.rawInserted.length; ++c)
            s.shift();
          u = this.appendTail(s), o = u.rawInserted.length === s.toString().length;
        }
        o && u.inserted && (this.state = l);
      }
      o || (r = new Ee(), this.state = i, s && a && (s.state = a));
    }
    return r;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new Ee();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new Ee();
  }
  /** Appends symbols considering flags */
  append(e, n, s) {
    if (!oi(e)) throw new Error("value should be string");
    const i = oi(s) ? new Mn(String(s)) : s;
    n != null && n.tail && (n._beforeTailState = this.state);
    let r;
    [e, r] = this.doPrepare(e, n);
    for (let a = 0; a < e.length; ++a) {
      const o = this._appendChar(e[a], n, i);
      if (!o.rawInserted && !this.doSkipInvalid(e[a], n, i)) break;
      r.aggregate(o);
    }
    return (this.eager === !0 || this.eager === "append") && n != null && n.input && e && r.aggregate(this._appendEager()), i != null && (r.tailShift += this.appendTail(i).tailShift), r;
  }
  remove(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(n), new Ee();
  }
  /** Calls function and reapplies current value */
  withValueRefresh(e) {
    if (this._refreshing || !this._initialized) return e();
    this._refreshing = !0;
    const n = this.rawInputValue, s = this.value, i = e();
    return this.rawInputValue = n, this.value && this.value !== s && s.indexOf(this.value) === 0 && (this.append(s.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, i;
  }
  runIsolated(e) {
    if (this._isolated || !this._initialized) return e(this);
    this._isolated = !0;
    const n = this.state, s = e(this);
    return this.state = n, delete this._isolated, s;
  }
  doSkipInvalid(e, n, s) {
    return !!this.skipInvalid;
  }
  /** Prepares string before mask processing */
  doPrepare(e, n) {
    return n === void 0 && (n = {}), Ee.normalize(this.prepare ? this.prepare(e, this, n) : e);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(e, n) {
    return n === void 0 && (n = {}), Ee.normalize(this.prepareChar ? this.prepareChar(e, this, n) : e);
  }
  /** Validates if value is acceptable */
  doValidate(e) {
    return (!this.validate || this.validate(this.value, this, e)) && (!this.parent || this.parent.doValidate(e));
  }
  /** Does additional processing at the end of editing */
  doCommit() {
    this.commit && this.commit(this.value, this);
  }
  splice(e, n, s, i, r) {
    s === void 0 && (s = ""), i === void 0 && (i = oe.NONE), r === void 0 && (r = {
      input: !0
    });
    const a = e + n, o = this.extractTail(a), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = Ev(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let c = e;
    const f = new Ee();
    if (i !== oe.NONE && (c = this.nearestInputPos(e, n > 1 && e !== 0 && !l ? oe.NONE : i), f.tailShift = c - e), f.aggregate(this.remove(c)), l && i !== oe.NONE && u === this.rawInputValue)
      if (i === oe.FORCE_LEFT) {
        let m;
        for (; u === this.rawInputValue && (m = this.displayValue.length); )
          f.aggregate(new Ee({
            tailShift: -1
          })).aggregate(this.remove(m - 1));
      } else i === oe.FORCE_RIGHT && o.unshift();
    return f.aggregate(this.append(s, r, o));
  }
  maskEquals(e) {
    return this.mask === e;
  }
  optionsIsChanged(e) {
    return !Al(this, e);
  }
  typedValueEquals(e) {
    const n = this.typedValue;
    return e === n || yn.EMPTY_VALUES.includes(e) && yn.EMPTY_VALUES.includes(n) || (this.format ? this.format(e, this) === this.format(this.typedValue, this) : !1);
  }
  pad(e) {
    return new Ee();
  }
}
yn.DEFAULTS = {
  skipInvalid: !0
};
yn.EMPTY_VALUES = [void 0, null, ""];
ye.Masked = yn;
class Cs {
  /** */
  constructor(e, n) {
    e === void 0 && (e = []), n === void 0 && (n = 0), this.chunks = e, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(e) {
    if (!String(e)) return;
    e = oi(e) ? new Mn(String(e)) : e;
    const n = this.chunks[this.chunks.length - 1], s = n && // if stops are same or tail has no stop
    (n.stop === e.stop || e.stop == null) && // if tail chunk goes just after last chunk
    e.from === n.from + n.toString().length;
    if (e instanceof Mn)
      s ? n.extend(e.toString()) : this.chunks.push(e);
    else if (e instanceof Cs) {
      if (e.stop == null) {
        let i;
        for (; e.chunks.length && e.chunks[0].stop == null; )
          i = e.chunks.shift(), i.from += e.from, this.extend(i);
      }
      e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
    }
  }
  appendTo(e) {
    if (!(e instanceof ye.MaskedPattern))
      return new Mn(this.toString()).appendTo(e);
    const n = new Ee();
    for (let s = 0; s < this.chunks.length; ++s) {
      const i = this.chunks[s], r = e._mapPosToBlock(e.displayValue.length), a = i.stop;
      let o;
      if (a != null && // if block not found or stop is behind lastBlock
      (!r || r.index <= a) && ((i instanceof Cs || // for continuous block also check if stop is exist
      e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), o = i instanceof Cs && e._blocks[a]), o) {
        const l = o.appendTail(i);
        n.aggregate(l);
        const u = i.toString().slice(l.rawInserted.length);
        u && n.aggregate(e.append(u, {
          tail: !0
        }));
      } else
        n.aggregate(e.append(i.toString(), {
          tail: !0
        }));
    }
    return n;
  }
  get state() {
    return {
      chunks: this.chunks.map((e) => e.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(e) {
    const {
      chunks: n,
      ...s
    } = e;
    Object.assign(this, s), this.chunks = n.map((i) => {
      const r = "chunks" in i ? new Cs() : new Mn();
      return r.state = i, r;
    });
  }
  unshift(e) {
    if (!this.chunks.length || e != null && this.from >= e) return "";
    const n = e != null ? e - this.from : e;
    let s = 0;
    for (; s < this.chunks.length; ) {
      const i = this.chunks[s], r = i.unshift(n);
      if (i.toString()) {
        if (!r) break;
        ++s;
      } else
        this.chunks.splice(s, 1);
      if (r) return r;
    }
    return "";
  }
  shift() {
    if (!this.chunks.length) return "";
    let e = this.chunks.length - 1;
    for (; 0 <= e; ) {
      const n = this.chunks[e], s = n.shift();
      if (n.toString()) {
        if (!s) break;
        --e;
      } else
        this.chunks.splice(e, 1);
      if (s) return s;
    }
    return "";
  }
}
class Av {
  constructor(e, n) {
    this.masked = e, this._log = [];
    const {
      offset: s,
      index: i
    } = e._mapPosToBlock(n) || (n < 0 ? (
      // first
      {
        index: 0,
        offset: 0
      }
    ) : (
      // last
      {
        index: this.masked._blocks.length,
        offset: 0
      }
    ));
    this.offset = s, this.index = i, this.ok = !1;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(e) {
    Object.assign(this, e);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const e = this._log.pop();
    return e && (this.state = e), e;
  }
  bindBlock() {
    this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length));
  }
  _pushLeft(e) {
    for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((n = this.block) == null ? void 0 : n.displayValue.length) || 0) {
      var n;
      if (e()) return this.ok = !0;
    }
    return this.ok = !1;
  }
  _pushRight(e) {
    for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0)
      if (e()) return this.ok = !0;
    return this.ok = !1;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, oe.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, oe.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, oe.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, oe.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, oe.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, oe.NONE), !0;
    });
  }
}
class xm {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(e) {
    Object.assign(this, e), this._value = "", this.isFixed = !0;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : "";
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : "";
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = !1, this._value = "";
  }
  remove(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(n), this._value || (this._isRawInput = !1), new Ee();
  }
  nearestInputPos(e, n) {
    n === void 0 && (n = oe.NONE);
    const s = 0, i = this._value.length;
    switch (n) {
      case oe.LEFT:
      case oe.FORCE_LEFT:
        return s;
      case oe.NONE:
      case oe.RIGHT:
      case oe.FORCE_RIGHT:
      default:
        return i;
    }
  }
  totalInputPositions(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this._value.length), this._isRawInput ? n - e : 0;
  }
  extractInput(e, n, s) {
    return e === void 0 && (e = 0), n === void 0 && (n = this._value.length), s === void 0 && (s = {}), s.raw && this._isRawInput && this._value.slice(e, n) || "";
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return !!this._value;
  }
  _appendChar(e, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new Ee();
    const s = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || n.input || n.raw) && (!n.raw || !s) && !n.tail, a = new Ee({
      inserted: this.char,
      rawInserted: r ? this.char : ""
    });
    return this._value = this.char, this._isRawInput = r && (n.raw || n.input), a;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: !0
    });
  }
  _appendPlaceholder() {
    const e = new Ee();
    return this.isFilled || (this._value = e.inserted = this.char), e;
  }
  extractTail() {
    return new Mn("");
  }
  appendTail(e) {
    return oi(e) && (e = new Mn(String(e))), e.appendTo(this);
  }
  append(e, n, s) {
    const i = this._appendChar(e[0], n);
    return s != null && (i.tailShift += this.appendTail(s).tailShift), i;
  }
  doCommit() {
  }
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(e) {
    this._value = e._value, this._isRawInput = !!e._rawInputValue;
  }
  pad(e) {
    return this._appendPlaceholder();
  }
}
class Ca {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(e) {
    const {
      parent: n,
      isOptional: s,
      placeholderChar: i,
      displayChar: r,
      lazy: a,
      eager: o,
      ...l
    } = e;
    this.masked = fr(l), Object.assign(this, {
      parent: n,
      isOptional: s,
      placeholderChar: i,
      displayChar: r,
      lazy: a,
      eager: o
    });
  }
  reset() {
    this.isFilled = !1, this.masked.reset();
  }
  remove(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.value.length), e === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(e, n)) : new Ee();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return !!this.masked.value || this.isOptional;
  }
  _appendChar(e, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new Ee();
    const s = this.masked.state;
    let i = this.masked._appendChar(e, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new Ee(), this.masked.state = s), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(e, n, s) {
    return this.masked.append(e, this.currentMaskFlags(n), s);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new Ee() : (this.isFilled = !0, new Ee({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new Ee();
  }
  extractTail(e, n) {
    return this.masked.extractTail(e, n);
  }
  appendTail(e) {
    return this.masked.appendTail(e);
  }
  extractInput(e, n, s) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.value.length), this.masked.extractInput(e, n, s);
  }
  nearestInputPos(e, n) {
    n === void 0 && (n = oe.NONE);
    const s = 0, i = this.value.length, r = Math.min(Math.max(e, s), i);
    switch (n) {
      case oe.LEFT:
      case oe.FORCE_LEFT:
        return this.isComplete ? r : s;
      case oe.RIGHT:
      case oe.FORCE_RIGHT:
        return this.isComplete ? r : i;
      case oe.NONE:
      default:
        return r;
    }
  }
  totalInputPositions(e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = this.value.length), this.value.slice(e, n).length;
  }
  doValidate(e) {
    return this.masked.doValidate(this.currentMaskFlags(e)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(e)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(e) {
    this.masked.state = e.masked, this.isFilled = e.isFilled;
  }
  currentMaskFlags(e) {
    var n;
    return {
      ...e,
      _beforeTailState: (e == null || (n = e._beforeTailState) == null ? void 0 : n.masked) || e?._beforeTailState
    };
  }
  pad(e) {
    return new Ee();
  }
}
Ca.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class Lv extends yn {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(e) {
    super.updateOptions(e);
  }
  _update(e) {
    const n = e.mask;
    n && (e.validate = (s) => s.search(n) >= 0), super._update(e);
  }
}
ye.MaskedRegExp = Lv;
class vn extends yn {
  /** */
  /** */
  /** Single char for empty input */
  /** Single char for filled input */
  /** Show placeholder only when needed */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  constructor(e) {
    super({
      ...vn.DEFAULTS,
      ...e,
      definitions: Object.assign({}, Ca.DEFAULT_DEFINITIONS, e?.definitions)
    });
  }
  updateOptions(e) {
    super.updateOptions(e);
  }
  _update(e) {
    e.definitions = Object.assign({}, this.definitions, e.definitions), super._update(e), this._rebuildMask();
  }
  _rebuildMask() {
    const e = this.definitions;
    this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
    const n = this.mask;
    if (!n || !e) return;
    let s = !1, i = !1;
    for (let r = 0; r < n.length; ++r) {
      if (this.blocks) {
        const u = n.slice(r), c = Object.keys(this.blocks).filter((m) => u.indexOf(m) === 0);
        c.sort((m, h) => h.length - m.length);
        const f = c[0];
        if (f) {
          const {
            expose: m,
            repeat: h,
            ...p
          } = Ll(this.blocks[f]), k = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...p,
            repeat: h,
            parent: this
          }, S = h != null ? new ye.RepeatBlock(
            k
            /* TODO */
          ) : fr(k);
          S && (this._blocks.push(S), m && (this.exposeBlock = S), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), r += f.length - 1;
          continue;
        }
      }
      let a = n[r], o = a in e;
      if (a === vn.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (a === "{" || a === "}") {
        s = !s;
        continue;
      }
      if (a === "[" || a === "]") {
        i = !i;
        continue;
      }
      if (a === vn.ESCAPE_CHAR) {
        if (++r, a = n[r], !a) break;
        o = !1;
      }
      const l = o ? new Ca({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Ll(e[a]),
        parent: this
      }) : new xm({
        char: a,
        eager: this.eager,
        isUnmasking: s
      });
      this._blocks.push(l);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map((e) => e.state)
    };
  }
  set state(e) {
    if (!e) {
      this.reset();
      return;
    }
    const {
      _blocks: n,
      ...s
    } = e;
    this._blocks.forEach((i, r) => i.state = n[r]), super.state = s;
  }
  reset() {
    super.reset(), this._blocks.forEach((e) => e.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((e) => e.isComplete);
  }
  get isFilled() {
    return this._blocks.every((e) => e.isFilled);
  }
  get isFixed() {
    return this._blocks.every((e) => e.isFixed);
  }
  get isOptional() {
    return this._blocks.every((e) => e.isOptional);
  }
  doCommit() {
    this._blocks.forEach((e) => e.doCommit()), super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((e, n) => e += n.unmaskedValue, "");
  }
  set unmaskedValue(e) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = e, this.appendTail(n), this.doCommit();
    } else super.unmaskedValue = e;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value : (
      // TODO return _value when not in change?
      this._blocks.reduce((e, n) => e += n.value, "")
    );
  }
  set value(e) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = e, this.appendTail(n), this.doCommit();
    } else super.value = e;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(e) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = e, this.appendTail(n), this.doCommit();
    } else super.typedValue = e;
  }
  get displayValue() {
    return this._blocks.reduce((e, n) => e += n.displayValue, "");
  }
  appendTail(e) {
    return super.appendTail(e).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var e;
    const n = new Ee();
    let s = (e = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : e.index;
    if (s == null) return n;
    this._blocks[s].isFilled && ++s;
    for (let i = s; i < this._blocks.length; ++i) {
      const r = this._blocks[i]._appendEager();
      if (!r.inserted) break;
      n.aggregate(r);
    }
    return n;
  }
  _appendCharRaw(e, n) {
    n === void 0 && (n = {});
    const s = this._mapPosToBlock(this.displayValue.length), i = new Ee();
    if (!s) return i;
    for (let a = s.index, o; o = this._blocks[a]; ++a) {
      var r;
      const l = o._appendChar(e, {
        ...n,
        _beforeTailState: (r = n._beforeTailState) == null || (r = r._blocks) == null ? void 0 : r[a]
      });
      if (i.aggregate(l), l.consumed) break;
    }
    return i;
  }
  extractTail(e, n) {
    e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length);
    const s = new Cs();
    return e === n || this._forEachBlocksInRange(e, n, (i, r, a, o) => {
      const l = i.extractTail(a, o);
      l.stop = this._findStopBefore(r), l.from = this._blockStartPos(r), l instanceof Cs && (l.blockIndex = r), s.extend(l);
    }), s;
  }
  extractInput(e, n, s) {
    if (e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), s === void 0 && (s = {}), e === n) return "";
    let i = "";
    return this._forEachBlocksInRange(e, n, (r, a, o, l) => {
      i += r.extractInput(o, l, s);
    }), i;
  }
  _findStopBefore(e) {
    let n;
    for (let s = 0; s < this._stops.length; ++s) {
      const i = this._stops[s];
      if (i <= e) n = i;
      else break;
    }
    return n;
  }
  /** Appends placeholder depending on laziness */
  _appendPlaceholder(e) {
    const n = new Ee();
    if (this.lazy && e == null) return n;
    const s = this._mapPosToBlock(this.displayValue.length);
    if (!s) return n;
    const i = s.index, r = e ?? this._blocks.length;
    return this._blocks.slice(i, r).forEach((a) => {
      if (!a.lazy || e != null) {
        var o;
        n.aggregate(a._appendPlaceholder((o = a._blocks) == null ? void 0 : o.length));
      }
    }), n;
  }
  /** Finds block in pos */
  _mapPosToBlock(e) {
    let n = "";
    for (let s = 0; s < this._blocks.length; ++s) {
      const i = this._blocks[s], r = n.length;
      if (n += i.displayValue, e <= n.length)
        return {
          index: s,
          offset: e - r
        };
    }
  }
  _blockStartPos(e) {
    return this._blocks.slice(0, e).reduce((n, s) => n += s.displayValue.length, 0);
  }
  _forEachBlocksInRange(e, n, s) {
    n === void 0 && (n = this.displayValue.length);
    const i = this._mapPosToBlock(e);
    if (i) {
      const r = this._mapPosToBlock(n), a = r && i.index === r.index, o = i.offset, l = r && a ? r.offset : this._blocks[i.index].displayValue.length;
      if (s(this._blocks[i.index], i.index, o, l), r && !a) {
        for (let u = i.index + 1; u < r.index; ++u)
          s(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
        s(this._blocks[r.index], r.index, 0, r.offset);
      }
    }
  }
  remove(e, n) {
    e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length);
    const s = super.remove(e, n);
    return this._forEachBlocksInRange(e, n, (i, r, a, o) => {
      s.aggregate(i.remove(a, o));
    }), s;
  }
  nearestInputPos(e, n) {
    if (n === void 0 && (n = oe.NONE), !this._blocks.length) return 0;
    const s = new Av(this, e);
    if (n === oe.NONE)
      return s.pushRightBeforeInput() || (s.popState(), s.pushLeftBeforeInput()) ? s.pos : this.displayValue.length;
    if (n === oe.LEFT || n === oe.FORCE_LEFT) {
      if (n === oe.LEFT) {
        if (s.pushRightBeforeFilled(), s.ok && s.pos === e) return e;
        s.popState();
      }
      if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), n === oe.LEFT) {
        if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= e || (s.popState(), s.ok && s.pos <= e)) return s.pos;
        s.popState();
      }
      return s.ok ? s.pos : n === oe.FORCE_LEFT ? 0 : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0);
    }
    return n === oe.RIGHT || n === oe.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : n === oe.FORCE_RIGHT ? this.displayValue.length : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : this.nearestInputPos(e, oe.LEFT))) : e;
  }
  totalInputPositions(e, n) {
    e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length);
    let s = 0;
    return this._forEachBlocksInRange(e, n, (i, r, a, o) => {
      s += i.totalInputPositions(a, o);
    }), s;
  }
  /** Get block by name */
  maskedBlock(e) {
    return this.maskedBlocks(e)[0];
  }
  /** Get all blocks by name */
  maskedBlocks(e) {
    const n = this._maskedBlocks[e];
    return n ? n.map((s) => this._blocks[s]) : [];
  }
  pad(e) {
    const n = new Ee();
    return this._forEachBlocksInRange(0, this.displayValue.length, (s) => n.aggregate(s.pad(e))), n;
  }
}
vn.DEFAULTS = {
  ...yn.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
vn.STOP_CHAR = "`";
vn.ESCAPE_CHAR = "\\";
vn.InputDefinition = Ca;
vn.FixedDefinition = xm;
ye.MaskedPattern = vn;
function Nv(t) {
  return ye(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aaaaaa##[000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function Vv(t) {
  return ye(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa00 #### 0000 0000[ 0000 0000 0000 0000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function Bv(t) {
  return ye(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa########[#####]",
    prepareChar: (e) => e.toUpperCase()
  });
}
var _v = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  bic: Nv,
  iban: Vv,
  vat: Bv
});
function Rv() {
  return Dn(dh, te(!1));
}
function bi(t) {
  const e = Rv();
  return Ce(() => d(t) || d(e));
}
function Iu() {
  return Dn(fh, {
    id: ru()
  });
}
const zv = "basePane", Wv = "basePaneLoader", Pv = "basePaneStructure basePane", Hv = "basePaneElement", Uv = "form", Zv = "paneHeader";
var no = { basePane: zv, basePaneLoader: Wv, basePaneStructure: Pv, basePaneElement: Hv, form: Uv, paneHeader: Zv };
const { basePane: zn } = no, qv = "icon", Gv = "fontAwesomeIcon icon", Yv = "materialSymbolIcon icon", jv = `iconBoxed ${zn}`, Jv = `iconBoxedDefault iconBoxed ${zn}`, Kv = `iconBoxedColored iconBoxed ${zn}`, Qv = `iconBoxedGray iconBoxedColored iconBoxed ${zn}`, Xv = `iconBoxedPrimary iconBoxedColored iconBoxed ${zn}`, e2 = `iconBoxedDanger iconBoxedColored iconBoxed ${zn}`, t2 = `iconBoxedInfo iconBoxedColored iconBoxed ${zn}`, n2 = `iconBoxedSuccess iconBoxedColored iconBoxed ${zn}`, s2 = `iconBoxedWarning iconBoxedColored iconBoxed ${zn}`;
var Yo = { icon: qv, fontAwesomeIcon: Gv, materialSymbolIcon: Yv, iconBoxed: jv, iconBoxedDefault: Jv, iconBoxedColored: Kv, iconBoxedGray: Qv, iconBoxedPrimary: Xv, iconBoxedDanger: e2, iconBoxedInfo: t2, iconBoxedSuccess: n2, iconBoxedWarning: s2 };
const i2 = ["viewBox"], r2 = ["d"];
var pt = /* @__PURE__ */ H({
  __name: "FluxIcon",
  props: {
    size: {},
    name: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e, s = Ce(() => {
      if (!t.name)
        return null;
      const r = ym[t.name];
      return r ? {
        width: r[0],
        height: r[1],
        paths: Array.isArray(r[4]) ? r[4] : [r[4]],
        scale: Math.max(1, r[0] / 512)
      } : (Vy(`Unknown icon: ${t.name}`), null);
    }), i = (r) => n("click", r);
    return (r, a) => s.value ? (y(), R("svg", {
      key: 0,
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: x(d(Yo).fontAwesomeIcon),
      style: gt({
        fontSize: t.size && `${t.size}px`,
        scale: s.value.scale > 1 ? s.value.scale : void 0
      }),
      focusable: "false",
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, [
      (y(!0), R(he, null, It(s.value.paths, (o) => (y(), R("path", {
        d: o,
        fill: "currentColor"
      }, null, 8, r2))), 256))
    ], 14, i2)) : t.name ? (y(), R("i", {
      key: 1,
      class: x(d(Yo).materialSymbolIcon),
      style: gt({
        fontSize: t.size && `${t.size}px`
      }),
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, ve(t.name), 7)) : (y(), R("i", {
      key: 2,
      class: x(d(Yo).icon)
    }, null, 2));
  }
});
const a2 = ["href", "rel", "target"];
var Em = /* @__PURE__ */ H({
  __name: "FluxPressable",
  props: {
    componentType: {},
    href: {},
    rel: {},
    target: {},
    to: {}
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(t, { emit: e }) {
    const n = e;
    function s(i, r) {
      n("click", i), !i.defaultPrevented && r?.(i);
    }
    return (i, r) => {
      const a = M0("router-link");
      return t.componentType === "route" ? (y(), _(a, Vt({ key: 0 }, i.$attrs, {
        rel: t.rel,
        target: t.target,
        to: t.to,
        onClick: r[0] || (r[0] = (o) => s(o)),
        onMouseenter: r[1] || (r[1] = (o) => i.$emit("mouseenter", o)),
        onMouseleave: r[2] || (r[2] = (o) => i.$emit("mouseleave", o))
      }), {
        default: Z(() => [
          ae(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["rel", "target", "to"])) : t.componentType === "link" ? (y(), R("a", Vt({ key: 1 }, i.$attrs, {
        href: t.href,
        rel: t.rel,
        target: t.target,
        onClick: r[3] || (r[3] = (o) => s(o)),
        onMouseenter: r[4] || (r[4] = (o) => i.$emit("mouseenter", o)),
        onMouseleave: r[5] || (r[5] = (o) => i.$emit("mouseleave", o))
      }), [
        ae(i.$slots, "default")
      ], 16, a2)) : t.componentType === "button" ? (y(), R("button", Vt({ key: 2 }, i.$attrs, {
        onClick: r[6] || (r[6] = (o) => s(o)),
        onMouseenter: r[7] || (r[7] = (o) => i.$emit("mouseenter", o)),
        onMouseleave: r[8] || (r[8] = (o) => i.$emit("mouseleave", o))
      }), [
        ae(i.$slots, "default")
      ], 16)) : (y(), R("div", Vt({ key: 3 }, i.$attrs, {
        onClick: s,
        onMouseenter: r[9] || (r[9] = (o) => i.$emit("mouseenter", o)),
        onMouseleave: r[10] || (r[10] = (o) => i.$emit("mouseleave", o))
      }), [
        ae(i.$slots, "default")
      ], 16));
    };
  }
});
const o2 = "spinner", l2 = "spinnerTrack", u2 = "spinnerEffect", c2 = "spinnerValue";
var Hr = { spinner: o2, spinnerTrack: l2, spinnerEffect: u2, spinnerValue: c2 }, us = /* @__PURE__ */ H({
  __name: "FluxSpinner",
  props: {
    size: {}
  },
  setup(t) {
    return (e, n) => (y(), R("svg", {
      class: x(d(Hr).spinner),
      viewBox: "0 0 24 24",
      style: gt({
        fontSize: t.size && `${t.size}px`
      })
    }, [
      be("circle", {
        class: x(d(Hr).spinnerTrack),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4"
      }, null, 2),
      be("circle", {
        class: x(d(Hr).spinnerEffect),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2),
      be("circle", {
        class: x(d(Hr).spinnerValue),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2)
    ], 6));
  }
});
const d2 = "button", f2 = "isSmall", h2 = "isMedium", m2 = "isLarge", p2 = "isXl", g2 = "isFilled", y2 = "buttonIcon", v2 = "buttonLabel";
var ns = { button: d2, isSmall: f2, isMedium: h2, isLarge: m2, isXl: p2, isFilled: g2, buttonIcon: y2, buttonLabel: v2 };
const Fm = ["default", "after", "before", "iconLeading", "iconTrailing", "label"];
var so = /* @__PURE__ */ H({
  __name: "FluxButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean },
    iconLeading: {},
    iconTrailing: {},
    isFilled: { type: Boolean },
    isLoading: { type: Boolean },
    isSubmit: { type: Boolean },
    label: {},
    size: { default: "medium" },
    tabindex: { default: 0 },
    href: {},
    rel: {},
    target: {},
    to: {},
    cssClass: {},
    cssClassIcon: {},
    cssClassLabel: {}
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(t, { emit: e }) {
    const n = e, s = bi(Vn(() => t.disabled));
    function i(o) {
      if (d(s) || t.isLoading) {
        o.preventDefault(), o.stopPropagation();
        return;
      }
      n("click", o);
    }
    function r(o) {
      n("mouseenter", o);
    }
    function a(o) {
      n("mouseleave", o);
    }
    return (o, l) => (y(), _(Em, {
      "component-type": t.type,
      class: x(d(Pt)(
        t.cssClass,
        t.isFilled && d(ns).isFilled,
        t.size === "small" && d(ns).isSmall,
        t.size === "medium" && d(ns).isMedium,
        t.size === "large" && d(ns).isLarge,
        t.size === "xl" && d(ns).isXl
      )),
      type: t.isSubmit ? "submit" : "button",
      "aria-disabled": d(s) ? !0 : void 0,
      disabled: d(s) ? !0 : void 0,
      tabindex: d(s) ? -1 : t.tabindex,
      href: t.href,
      rel: t.rel,
      target: t.target,
      to: t.to,
      onClick: i,
      onMouseenter: r,
      onMouseleave: a
    }, {
      default: Z(() => [
        ae(o.$slots, "before"),
        ae(o.$slots, "iconLeading", {}, () => [
          t.isLoading && (t.iconLeading || !t.iconTrailing) ? (y(), _(us, {
            key: 0,
            size: 20
          })) : t.iconLeading ? (y(), _(pt, {
            key: 1,
            class: x(t.cssClassIcon),
            name: t.iconLeading
          }, null, 8, ["class", "name"])) : X("", !0)
        ]),
        ae(o.$slots, "label", {}, () => [
          t.label ? (y(), R("span", {
            key: 0,
            class: x(t.cssClassLabel)
          }, ve(t.label), 3)) : X("", !0)
        ]),
        ae(o.$slots, "iconTrailing", {}, () => [
          t.isLoading && !t.iconLeading && t.iconTrailing ? (y(), _(us, {
            key: 0,
            size: 20
          })) : t.iconTrailing ? (y(), _(pt, {
            key: 1,
            class: x(t.cssClassIcon),
            name: t.iconTrailing
          }, null, 8, ["class", "name"])) : X("", !0)
        ]),
        ae(o.$slots, "after")
      ]),
      _: 3
    }, 8, ["component-type", "class", "type", "aria-disabled", "disabled", "tabindex", "href", "rel", "target", "to"]));
  }
});
const { button: k2, buttonIcon: b2, buttonLabel: w2 } = ns, S2 = `action ${k2}`, T2 = "spinner", I2 = `actionIcon ${b2}`, $2 = "isDestructive", C2 = `actionLabel ${w2}`, x2 = "actionBar", E2 = "separator", F2 = "formInput", O2 = "basePaneStructure", M2 = "paneHeader", D2 = "actionPane", A2 = "actionPaneGrid", L2 = "actionPaneBody", N2 = "paneBody";
var Ur = { action: S2, spinner: T2, actionIcon: I2, isDestructive: $2, actionLabel: C2, actionBar: x2, separator: E2, formInput: F2, basePaneStructure: O2, paneHeader: M2, actionPane: D2, actionPaneGrid: A2, actionPaneBody: L2, paneBody: N2 }, V2 = /* @__PURE__ */ H({
  __name: "FluxAction",
  props: {
    type: {},
    disabled: { type: Boolean },
    isLoading: { type: Boolean },
    isSubmit: { type: Boolean },
    label: {},
    tabindex: {},
    href: {},
    rel: {},
    target: {},
    to: {},
    icon: {},
    isDestructive: { type: Boolean }
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(t) {
    return (e, n) => (y(), _(so, Vt({ disabled: t.disabled, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to, type: t.type }, {
      "css-class": d(Ur).action,
      "css-class-icon": d(Ur).actionIcon,
      "css-class-label": d(Ur).actionLabel,
      class: t.isDestructive && d(Ur).isDestructive,
      "icon-leading": t.icon,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), null, 16, ["css-class", "css-class-icon", "css-class-label", "class", "icon-leading"]));
  }
});
const { button: ds, buttonIcon: _s, buttonLabel: Rs } = ns, B2 = `primaryButton ${ds}`, _2 = "spinner", R2 = `primaryButtonIcon ${_s}`, z2 = `primaryButtonLabel ${Rs}`, W2 = `secondaryButton ${ds}`, P2 = `secondaryButtonIcon ${_s}`, H2 = `secondaryButtonLabel ${Rs}`, U2 = `destructiveButton ${ds}`, Z2 = `destructiveButtonIcon ${_s}`, q2 = `destructiveButtonLabel ${Rs}`, G2 = `baseLinkButton ${ds}`, Y2 = `primaryLinkButton baseLinkButton ${ds}`, j2 = `primaryLinkButtonIcon ${_s}`, J2 = `primaryLinkButtonLabel ${Rs}`, K2 = `secondaryLinkButton baseLinkButton ${ds}`, Q2 = `secondaryLinkButtonIcon ${_s}`, X2 = `secondaryLinkButtonLabel ${Rs}`, ek = `linkButton ${ds}`, tk = `linkButtonIcon ${_s}`, nk = "icon", sk = `linkButtonLabel ${Rs}`, ik = `publishButton primaryButton ${ds}`, rk = `publishButtonIcon primaryButtonIcon ${_s}`, ak = `publishButtonLabel primaryButtonLabel ${Rs}`, ok = "publishButtonAnimation", lk = "isDone", uk = "publishButtonAnimationArrow", ck = "publishArrowOut", dk = "publishButtonAnimationCheck", fk = "publishButtonAnimationCircle", hk = "isIdle", mk = "isLoading", pk = "publishArrowIn", gk = "publishButtonCloud", yk = "publish", vk = "buttonGroup", kk = "button";
var Ms = { primaryButton: B2, spinner: _2, primaryButtonIcon: R2, primaryButtonLabel: z2, secondaryButton: W2, secondaryButtonIcon: P2, secondaryButtonLabel: H2, destructiveButton: U2, destructiveButtonIcon: Z2, destructiveButtonLabel: q2, baseLinkButton: G2, primaryLinkButton: Y2, primaryLinkButtonIcon: j2, primaryLinkButtonLabel: J2, secondaryLinkButton: K2, secondaryLinkButtonIcon: Q2, secondaryLinkButtonLabel: X2, linkButton: ek, linkButtonIcon: tk, icon: nk, linkButtonLabel: sk, publishButton: ik, publishButtonIcon: rk, publishButtonLabel: ak, publishButtonAnimation: ok, isDone: lk, publishButtonAnimationArrow: uk, publishArrowOut: ck, publishButtonAnimationCheck: dk, publishButtonAnimationCircle: fk, isIdle: hk, isLoading: mk, publishArrowIn: pk, publishButtonCloud: gk, publish: yk, buttonGroup: vk, button: kk }, bk = /* @__PURE__ */ H({
  __name: "FluxButtonGroup",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(Ms).buttonGroup)
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const { basePaneStructure: Ir, basePaneElement: $u, basePaneLoader: wk } = no, Sk = `pane ${Ir}`, Tk = `paneDefault pane ${Ir}`, Ik = `paneFlat pane ${Ir}`, $k = `paneWell pane ${Ir}`, Ck = `paneHeader ${$u}`, xk = "basePaneElement", Ek = `paneBody ${$u}`, Fk = "paneHeaderCaption", Ok = "paneHeaderIcon", Mk = `paneFooter ${$u}`, Dk = `paneLoader ${wk}`, Ak = "paneTag", Lk = "paneMedia", Nk = "paneMediaInset paneMedia", Vk = "paneMediaImage", Bk = `paneDeck paneDefault pane ${Ir}`, _k = "baseAutoGrid", Rk = "paneGroup", zk = "paneIllustration", Wk = "paneIllustrationContent", Pk = "paneIllustrationContentControlled paneIllustrationContent", Hk = "paneIllustrationMagic", Uk = "paneIllustrationMasked paneIllustration", Zk = "iconBoxed";
var mn = { pane: Sk, paneDefault: Tk, paneFlat: Ik, paneWell: $k, paneHeader: Ck, basePaneElement: xk, paneBody: Ek, paneHeaderCaption: Fk, paneHeaderIcon: Ok, paneFooter: Mk, paneLoader: Dk, paneTag: Ak, paneMedia: Lk, paneMediaInset: Nk, paneMediaImage: Vk, paneDeck: Bk, baseAutoGrid: _k, paneGroup: Rk, paneIllustration: zk, paneIllustrationContent: Wk, paneIllustrationContentControlled: Pk, paneIllustrationMagic: Hk, paneIllustrationMasked: Uk, iconBoxed: Zk }, io = /* @__PURE__ */ H({
  __name: "FluxPane",
  props: {
    isLoading: { type: Boolean },
    tag: {},
    variant: { default: "default" }
  },
  setup(t) {
    const e = {
      default: mn.paneDefault,
      flat: mn.paneFlat,
      well: mn.paneWell
    };
    return (n, s) => (y(), R("div", {
      class: x(e[t.variant])
    }, [
      ae(n.$slots, "default"),
      t.isLoading ? ae(n.$slots, "loader", { key: 0 }, () => [
        be("div", {
          class: x(d(mn).paneLoader)
        }, [
          V(us)
        ], 2)
      ]) : X("", !0),
      t.tag ? (y(), R("div", {
        key: 1,
        class: x(d(mn).paneTag)
      }, ve(t.tag), 3)) : X("", !0)
    ], 2));
  }
}), hi = /* @__PURE__ */ H({
  __name: "FluxSecondaryButton",
  props: {
    type: {},
    disabled: { type: Boolean },
    iconLeading: {},
    iconTrailing: {},
    isFilled: { type: Boolean },
    isLoading: { type: Boolean },
    isSubmit: { type: Boolean },
    label: {},
    size: {},
    tabindex: {},
    href: {},
    rel: {},
    target: {},
    to: {}
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(t) {
    return (e, n) => (y(), _(so, Vt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": d(Ms).secondaryButton,
      "css-class-icon": d(Ms).secondaryButtonIcon,
      "css-class-label": d(Ms).secondaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), lu({ _: 2 }, [
      It(d(Fm), (s) => ({
        name: s,
        fn: Z(() => [
          ae(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
});
const qk = "baseAutoGrid";
var Gk = { baseAutoGrid: qk };
const { baseAutoGrid: Yk } = Gk, jk = "aspectRatio", Jk = `autoGrid ${Yk}`, Kk = "container", Qk = "spacer", Xk = "stack", eb = "isCentered", tb = "isFill", nb = "isWrapping", sb = "stackHorizontal stack", ib = "stackVertical stack";
var Ks = { aspectRatio: jk, autoGrid: Jk, container: Kk, spacer: Qk, stack: Xk, isCentered: eb, isFill: tb, isWrapping: nb, stackHorizontal: sb, stackVertical: ib }, ro = /* @__PURE__ */ H({
  __name: "FluxSpacer",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(Ks).spacer)
    }, null, 2));
  }
}), Om = /* @__PURE__ */ H({
  __name: "FluxStack",
  props: {
    direction: { default: "vertical" },
    gap: { default: 30 },
    isCentered: { type: Boolean },
    isFill: { type: Boolean },
    isWrapping: { type: Boolean },
    tag: {}
  },
  setup(t) {
    return (e, n) => (y(), _(ou(t.tag ?? "div"), {
      class: x(d(Pt)(
        t.direction === "horizontal" && d(Ks).stackHorizontal,
        t.direction === "vertical" && d(Ks).stackVertical,
        t.isCentered && d(Ks).isCentered,
        t.isFill && d(Ks).isFill,
        t.isWrapping && d(Ks).isWrapping
      )),
      style: gt({
        "--gap": t.gap && `${t.gap}px`
      })
    }, {
      default: Z(() => [
        ae(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), rb = /* @__PURE__ */ H({
  __name: "FluxButtonStack",
  props: {
    direction: { default: "horizontal" },
    gap: { default: 9 },
    isFill: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), _(Om, {
      direction: t.direction,
      gap: t.gap,
      "is-fill": t.isFill
    }, {
      default: Z(() => [
        ae(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["direction", "gap", "is-fill"]));
  }
}), hr = /* @__PURE__ */ H({
  __name: "FluxPaneBody",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(mn).paneBody)
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const ab = "breakthroughTransitionEnterActive", ob = "breakthroughTransitionBackEnterActive", lb = "breakthroughTransitionLeaveActive", ub = "breakthroughTransitionBackLeaveActive", cb = "breakthroughTransitionEnterFrom", db = "breakthroughTransitionBackLeaveTo", fb = "breakthroughTransitionLeaveTo", hb = "breakthroughTransitionBackEnterFrom", mb = "fadeTransitionEnterActive", pb = "fadeTransitionLeaveActive", gb = "fadeTransitionEnterFrom", yb = "fadeTransitionLeaveTo", vb = "fadeTransitionEnterTo", kb = "fadeTransitionLeaveFrom", bb = "routeTransitionEnterActive", wb = "routeTransitionBackEnterActive", Sb = "routeTransitionLeaveActive", Tb = "routeTransitionBackLeaveActive", Ib = "routeTransitionEnterFrom", $b = "routeTransitionBackLeaveTo", Cb = "routeTransitionLeaveTo", xb = "routeTransitionBackEnterFrom", Eb = "tooltipTransitionEnterActive", Fb = "tooltipTransitionLeaveActive", Ob = "tooltipTransitionEnterFrom", Mb = "tooltipTransitionLeaveTo", Db = "verticalWindowTransitionEnterActive", Ab = "verticalWindowTransitionBackEnterActive", Lb = "verticalWindowTransitionLeaveActive", Nb = "verticalWindowTransitionBackLeaveActive", Vb = "verticalWindowTransitionBackLeaveTo", Bb = "verticalWindowTransitionEnterFrom", _b = "verticalWindowTransitionBackEnterFrom", Rb = "verticalWindowTransitionLeaveTo", zb = "windowTransitionEnterActive", Wb = "windowTransitionBackEnterActive", Pb = "windowTransitionLeaveActive", Hb = "windowTransitionBackLeaveActive", Ub = "windowTransitionBackLeaveTo", Zb = "windowTransitionEnterFrom", qb = "windowTransitionBackEnterFrom", Gb = "windowTransitionLeaveTo";
var fn = { breakthroughTransitionEnterActive: ab, breakthroughTransitionBackEnterActive: ob, breakthroughTransitionLeaveActive: lb, breakthroughTransitionBackLeaveActive: ub, breakthroughTransitionEnterFrom: cb, breakthroughTransitionBackLeaveTo: db, breakthroughTransitionLeaveTo: fb, breakthroughTransitionBackEnterFrom: hb, fadeTransitionEnterActive: mb, fadeTransitionLeaveActive: pb, fadeTransitionEnterFrom: gb, fadeTransitionLeaveTo: yb, fadeTransitionEnterTo: vb, fadeTransitionLeaveFrom: kb, routeTransitionEnterActive: bb, routeTransitionBackEnterActive: wb, routeTransitionLeaveActive: Sb, routeTransitionBackLeaveActive: Tb, routeTransitionEnterFrom: Ib, routeTransitionBackLeaveTo: $b, routeTransitionLeaveTo: Cb, routeTransitionBackEnterFrom: xb, tooltipTransitionEnterActive: Eb, tooltipTransitionLeaveActive: Fb, tooltipTransitionEnterFrom: Ob, tooltipTransitionLeaveTo: Mb, verticalWindowTransitionEnterActive: Db, verticalWindowTransitionBackEnterActive: Ab, verticalWindowTransitionLeaveActive: Lb, verticalWindowTransitionBackLeaveActive: Nb, verticalWindowTransitionBackLeaveTo: Vb, verticalWindowTransitionEnterFrom: Bb, verticalWindowTransitionBackEnterFrom: _b, verticalWindowTransitionLeaveTo: Rb, windowTransitionEnterActive: zb, windowTransitionBackEnterActive: Wb, windowTransitionLeaveActive: Pb, windowTransitionBackLeaveActive: Hb, windowTransitionBackLeaveTo: Ub, windowTransitionEnterFrom: Zb, windowTransitionBackEnterFrom: qb, windowTransitionLeaveTo: Gb }, Nl = /* @__PURE__ */ H({
  __name: "FluxFadeTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (y(), _(Ns, {
      mode: t.mode,
      "enter-active-class": d(fn).fadeTransitionEnterActive,
      "enter-from-class": d(fn).fadeTransitionEnterFrom,
      "enter-to-class": d(fn).fadeTransitionEnterTo,
      "leave-active-class": d(fn).fadeTransitionLeaveActive,
      "leave-from-class": d(fn).fadeTransitionLeaveFrom,
      "leave-to-class": d(fn).fadeTransitionLeaveTo
    }, {
      default: Z(() => [
        ae(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"]));
  }
}), Yb = /* @__PURE__ */ H({
  __name: "FluxOverlayTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (y(), _(Ns, {
      mode: t.mode,
      "enter-active-class": d(Jt).overlayTransitionEnterActive,
      "enter-from-class": d(Jt).overlayTransitionEnterFrom,
      "leave-active-class": d(Jt).overlayTransitionLeaveActive,
      "leave-to-class": d(Jt).overlayTransitionLeaveTo
    }, {
      default: Z(() => [
        ae(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
}), jb = /* @__PURE__ */ H({
  __name: "FluxTooltipTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (y(), _(Ns, {
      mode: t.mode,
      "enter-active-class": d(fn).tooltipTransitionEnterActive,
      "enter-from-class": d(fn).tooltipTransitionEnterFrom,
      "leave-active-class": d(fn).tooltipTransitionLeaveActive,
      "leave-to-class": d(fn).tooltipTransitionLeaveTo
    }, {
      default: Z(() => [
        ae(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
});
const Jb = "badge", Kb = "spinner", Qb = "badgeClose", Xb = "icon", e4 = "badgeDot", t4 = "badgeIcon", n4 = "badgeLabel", s4 = "badgeGray badge", i4 = "badgePrimary badge", r4 = "badgeDanger badge", a4 = "badgeInfo badge", o4 = "badgeSuccess badge", l4 = "badgeWarning badge", u4 = "tag badge", c4 = "tagClose badgeClose", d4 = "tagDot badgeDot", f4 = "tagIcon badgeIcon", h4 = "tagLabel badgeLabel", m4 = "tagGray badgeGray badge tag badge", p4 = "tagPrimary badgePrimary badge tag badge", g4 = "tagDanger badgeDanger badge tag badge", y4 = "tagInfo badgeInfo badge tag badge", v4 = "tagSuccess badgeSuccess badge tag badge", k4 = "tagWarning badgeWarning badge tag badge";
var Zt = { badge: Jb, spinner: Kb, badgeClose: Qb, icon: Xb, badgeDot: e4, badgeIcon: t4, badgeLabel: n4, badgeGray: s4, badgePrimary: i4, badgeDanger: r4, badgeInfo: a4, badgeSuccess: o4, badgeWarning: l4, tag: u4, tagClose: c4, tagDot: d4, tagIcon: f4, tagLabel: h4, tagGray: m4, tagPrimary: p4, tagDanger: g4, tagInfo: y4, tagSuccess: v4, tagWarning: k4 }, b4 = /* @__PURE__ */ H({
  __name: "Anchor",
  props: {
    tagName: {}
  },
  setup(t) {
    return (e, n) => (y(), _(ou(t.tagName), null, {
      default: Z(() => [
        ae(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), w4 = /* @__PURE__ */ H({
  __name: "AnchorPopup",
  props: {
    anchor: {},
    direction: { default: "vertical" },
    margin: { default: 12 },
    position: {},
    useAnchorWidth: { type: Boolean }
  },
  setup(t) {
    const e = te(), n = On("popup"), s = kn({
      x: 0,
      y: 0,
      width: null
    });
    Rn(() => {
      window.addEventListener("resize", a, { passive: !0 }), window.addEventListener("scroll", o, { capture: !0, passive: !0 });
    }), Vs(() => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", o);
    }), gm(n, () => {
      i();
    }, { childList: !0, subtree: !0 });
    function i() {
      const l = d(e), u = d(n);
      if (!l || !u)
        return;
      const { x: c, y: f, height: m, width: h } = l.getBoundingClientRect(), { height: p, width: k } = u.getBoundingClientRect();
      let S, b;
      switch (t.position) {
        case "top":
          S = c + h / 2 - k / 2, b = f - p - t.margin;
          break;
        case "top-left":
          S = c, b = f - p - t.margin;
          break;
        case "top-right":
          S = c - k + h, b = f - p - t.margin;
          break;
        case "left":
          S = c - k - t.margin, b = f + m / 2 - p / 2;
          break;
        case "left-top":
          S = c - k - t.margin, b = f;
          break;
        case "left-bottom":
          S = c - k - t.margin, b = f + m - p;
          break;
        case "right":
          S = c + h + t.margin, b = f + m / 2 - p / 2;
          break;
        case "right-top":
          S = c + h + t.margin, b = f;
          break;
        case "right-bottom":
          S = c + h + t.margin, b = f + m - p;
          break;
        case "bottom":
          S = c + h / 2 - k / 2, b = f + m + t.margin;
          break;
        case "bottom-left":
          S = c, b = f + m + t.margin;
          break;
        case "bottom-right":
          S = c - k + h, b = f + m + t.margin;
          break;
        default:
          t.direction === "horizontal" ? (S = c + h + t.margin, b = f + m / 2 - p / 2, S + k > innerWidth && (S = c - k - t.margin)) : (S = c + h / 2 - k / 2, b = f + m + t.margin, b + p + t.margin > innerHeight && (b = f - p - t.margin)), (b < 0 || b + p > innerHeight) && (b = innerHeight / 2 - p / 2);
          break;
      }
      s.x = S, s.y = b;
    }
    function r() {
      const l = d(e);
      if (!l)
        return;
      const { width: u } = l.getBoundingClientRect();
      s.width = t.useAnchorWidth ? u : null;
    }
    function a() {
      r(), i();
    }
    function o() {
      i();
    }
    return Za(() => {
      !t.anchor || !dr(t.anchor) && !t.anchor.$el || (e.value = dr(t.anchor) ? t.anchor : t.anchor.$el, requestAnimationFrame(() => {
        requestAnimationFrame(r), requestAnimationFrame(i);
      }));
    }), (l, u) => (y(), R("div", {
      ref: "popup",
      style: gt({
        "--x": `${s.x}px`,
        "--y": `${s.y}px`,
        "--width": s.width ? `${s.width}px` : void 0
      })
    }, [
      ae(l.$slots, "default")
    ], 4));
  }
});
const { button: S4, buttonIcon: Mm, buttonLabel: T4 } = ns, I4 = "menu", $4 = "menuNormal menu", C4 = "menuLarge menu", x4 = "menuGroup", E4 = "menuGroupHorizontal menuGroup", F4 = "menuGroupVertical menuGroup", O4 = `menuItem ${S4}`, M4 = "badge", D4 = `menuItemIcon ${Mm}`, A4 = `menuItemLabel ${T4}`, L4 = "menuItemActive", N4 = "menuItemDestructive", V4 = "menuItemHighlighted", B4 = "menuItemIndented", _4 = `menuItemSelectableIcon ${Mm}`, R4 = "menuItemSelected", z4 = "menuItemCommand", W4 = "menuItemCommandIcon", P4 = "icon", H4 = "menuItemImage", U4 = "menuTitle", Z4 = "menuSubHeader", q4 = "menuSubHeaderIcon", G4 = "menuSubHeaderLabel", Y4 = "basePane", j4 = "divider", J4 = "separator", K4 = "expandableBody";
var Ge = { menu: I4, menuNormal: $4, menuLarge: C4, menuGroup: x4, menuGroupHorizontal: E4, menuGroupVertical: F4, menuItem: O4, badge: M4, menuItemIcon: D4, menuItemLabel: A4, menuItemActive: L4, menuItemDestructive: N4, menuItemHighlighted: V4, menuItemIndented: B4, menuItemSelectableIcon: _4, menuItemSelected: R4, menuItemCommand: z4, menuItemCommandIcon: W4, icon: P4, menuItemImage: H4, menuTitle: U4, menuSubHeader: Z4, menuSubHeaderIcon: q4, menuSubHeaderLabel: G4, basePane: Y4, divider: j4, separator: J4, expandableBody: K4 };
const Q4 = ["src", "alt"];
var jo = /* @__PURE__ */ H({
  __name: "FluxMenuItem",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean },
    iconLeading: {},
    iconTrailing: {},
    isLoading: { type: Boolean },
    label: {},
    tabindex: {},
    href: {},
    rel: {},
    target: {},
    to: {},
    command: {},
    commandIcon: {},
    commandLoading: { type: Boolean },
    imageAlt: {},
    imageSrc: {},
    isActive: { type: Boolean },
    isDestructive: { type: Boolean },
    isHighlighted: { type: Boolean },
    isIndented: { type: Boolean },
    isSelectable: { type: Boolean },
    isSelected: { type: Boolean }
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(t) {
    const e = Rf();
    return (n, s) => (y(), _(so, Vt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": d(Ge).menuItem,
      "css-class-icon": d(Ge).menuItemIcon,
      "css-class-label": d(Ge).menuItemLabel,
      "is-filled": "",
      role: t.isSelectable ? "menuitemradio" : "menuitem",
      class: {
        [d(Ge).menuItemActive]: t.isActive,
        [d(Ge).menuItemDestructive]: t.isDestructive,
        [d(Ge).menuItemHighlighted]: t.isHighlighted,
        [d(Ge).menuItemIndented]: t.isIndented,
        [d(Ge).menuItemSelected]: t.isSelectable && t.isSelected
      },
      "aria-checked": t.isSelectable ? t.isSelected : void 0,
      tabindex: t.tabindex,
      onClick: s[0] || (s[0] = (i) => n.$emit("click", i))
    }), lu({ _: 2 }, [
      t.isSelectable && (!t.iconLeading || t.isSelected) ? {
        name: "iconLeading",
        fn: Z(() => [
          V(pt, {
            class: x(d(Ge).menuItemSelectableIcon),
            name: t.isSelected ? "circle-check" : void 0
          }, null, 8, ["class", "name"])
        ]),
        key: "0"
      } : t.imageSrc ? {
        name: "iconLeading",
        fn: Z(() => [
          be("img", {
            class: x(d(Ge).menuItemImage),
            src: t.imageSrc,
            alt: t.imageAlt ?? ""
          }, null, 10, Q4)
        ]),
        key: "1"
      } : void 0,
      t.command || t.commandIcon || t.commandLoading || e.after ? {
        name: "after",
        fn: Z(() => [
          t.commandLoading ? (y(), _(us, {
            key: 0,
            class: x(d(Ge).menuItemCommandIcon),
            size: 16
          }, null, 8, ["class"])) : (y(), R(he, { key: 1 }, [
            t.command ? (y(), R("kbd", {
              key: 0,
              class: x(d(Ge).menuItemCommand)
            }, ve(t.command), 3)) : X("", !0),
            t.commandIcon ? (y(), _(pt, {
              key: 1,
              class: x(d(Ge).menuItemCommandIcon),
              name: t.commandIcon
            }, null, 8, ["class", "name"])) : X("", !0)
          ], 64)),
          ae(n.$slots, "after")
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["css-class", "css-class-icon", "css-class-label", "role", "class", "aria-checked", "tabindex"]));
  }
});
const { basePane: X4 } = no, ew = "formInputGroup formInput", tw = "buttonGroup", nw = "button", sw = "formInput", iw = "formSelect formInput", rw = "formStructureElement", aw = "form formStructureElement", ow = "pane", lw = "formColumn formStructureElement", uw = "formSection formStructureElement", cw = "formGrid", dw = "formRow", fw = "formSectionTitle", hw = "formField", mw = "formFieldHeader", pw = "formFieldLabel", gw = "formFieldOptional", yw = "formFieldValue", vw = "formFieldCounter", kw = "formFieldAddition", bw = "formFieldAdditionIcon", ww = "formFieldAdditionError formFieldAddition", Sw = "formFieldAdditionHint formFieldAddition", Tw = "isSecondary", Iw = "formInputDisabled formInput", $w = "formInputEnabled formInput", Cw = "formInputIcon", xw = "formInputIconTrailing formInputIcon", Ew = "formInputIconLeading formInputIcon", Fw = "formInputIconPasswordToggle formInputIconTrailing formInputIcon", Ow = "formInputNative", Mw = "formInputNativeHasIconLeading", Dw = "formInputNativeHasIconTrailing", Aw = "formInputAddition formInput", Lw = "isCondensed", Nw = "secondaryButton", Vw = "buttonIcon", Bw = "formDateInput", _w = "formDateRangeInput formInput", Rw = "formDateTimeInput", zw = "inputGroup", Ww = "formTimeInput formDateInput", Pw = "isDisabled", Hw = "isFocused", Uw = "badge", Zw = "formSelectIcon", qw = "formSelectInput", Gw = "formSelectPlaceholder", Yw = `formSelectPopup ${X4}`, jw = "menuItem", Jw = "isKeyboardAction", Kw = "isSearchable", Qw = "menuSubHeader", Xw = "formSelectSelected", e6 = "buttonLabel", t6 = "formTextArea", n6 = "formTextAreaDisabled formInputDisabled formInput formTextArea", s6 = "formTextAreaEnabled formInputEnabled formInput formTextArea", i6 = "checkbox", r6 = "checkboxElement", a6 = "checkboxNative", o6 = "icon", l6 = "checkboxLabel", u6 = "quantitySelector", c6 = "quantitySelectorButton", d6 = "quantitySelectorInput formInput", f6 = "pinInput", h6 = "pinInputField", m6 = "pinInputEnabled pinInput", p6 = "pinInputDisabled pinInput", g6 = "toggle", y6 = "isChecked", v6 = "toggleInput", k6 = "isSwitch", b6 = "toggleIcon", w6 = "toggleIconOn toggleIcon", S6 = "toggleIconOff toggleIcon";
var de = { formInputGroup: ew, buttonGroup: tw, button: nw, formInput: sw, formSelect: iw, formStructureElement: rw, form: aw, pane: ow, formColumn: lw, formSection: uw, formGrid: cw, formRow: dw, formSectionTitle: fw, formField: hw, formFieldHeader: mw, formFieldLabel: pw, formFieldOptional: gw, formFieldValue: yw, formFieldCounter: vw, formFieldAddition: kw, formFieldAdditionIcon: bw, formFieldAdditionError: ww, formFieldAdditionHint: Sw, isSecondary: Tw, formInputDisabled: Iw, formInputEnabled: $w, formInputIcon: Cw, formInputIconTrailing: xw, formInputIconLeading: Ew, formInputIconPasswordToggle: Fw, formInputNative: Ow, formInputNativeHasIconLeading: Mw, formInputNativeHasIconTrailing: Dw, formInputAddition: Aw, isCondensed: Lw, secondaryButton: Nw, buttonIcon: Vw, formDateInput: Bw, formDateRangeInput: _w, formDateTimeInput: Rw, inputGroup: zw, formTimeInput: Ww, isDisabled: Pw, isFocused: Hw, badge: Uw, formSelectIcon: Zw, formSelectInput: qw, formSelectPlaceholder: Gw, formSelectPopup: Yw, menuItem: jw, isKeyboardAction: Jw, isSearchable: Kw, menuSubHeader: Qw, formSelectSelected: Xw, buttonLabel: e6, formTextArea: t6, formTextAreaDisabled: n6, formTextAreaEnabled: s6, checkbox: i6, checkboxElement: r6, checkboxNative: a6, icon: o6, checkboxLabel: l6, quantitySelector: u6, quantitySelectorButton: c6, quantitySelectorInput: d6, pinInput: f6, pinInputField: h6, pinInputEnabled: m6, pinInputDisabled: p6, toggle: g6, isChecked: y6, toggleInput: v6, isSwitch: k6, toggleIcon: b6, toggleIconOn: w6, toggleIconOff: S6 };
const T6 = ["aria-disabled"], I6 = ["id", "autocomplete", "autofocus", "aria-disabled", "disabled", "max", "maxlength", "min", "placeholder", "readonly", "step", "type", "value"];
var er = /* @__PURE__ */ H({
  __name: "FluxFormInput",
  props: /* @__PURE__ */ nn({
    autoComplete: {},
    autoFocus: { type: Boolean, default: !1 },
    iconLeading: {},
    iconTrailing: {},
    disabled: { type: Boolean },
    isCondensed: { type: Boolean },
    isReadonly: { type: Boolean },
    isSecondary: { type: Boolean },
    max: {},
    maxLength: {},
    min: {},
    pattern: {},
    placeholder: {},
    step: {},
    type: { default: "text" }
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ nn(["blur", "focus", "showPicker"], ["update:modelValue"]),
  setup(t, { expose: e, emit: n }) {
    const s = n, i = wt(t, "modelValue"), r = bi(Vn(() => t.disabled)), a = On("input"), { id: o } = Iu(), l = te(null), u = te(t.type);
    function c() {
      St(a)?.blur();
    }
    function f() {
      St(a)?.focus();
    }
    function m() {
      t.type === "password" && (u.value = d(u) === "password" ? "text" : "password");
    }
    function h() {
      s("blur");
    }
    function p() {
      s("focus");
    }
    function k(b) {
      const L = b.target.value;
      switch (t.type) {
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          const T = We.fromISO(L);
          if (!T.isValid)
            return;
          i.value = T;
          break;
        case "number":
          i.value = Number(L);
          break;
        default:
          i.value = L;
          break;
      }
    }
    function S(b) {
      ["date", "datetime-local", "month", "week"].includes(t.type) && b.key === " " && (s("showPicker"), b.preventDefault());
    }
    return Re([i, () => t.type], ([b, L]) => {
      if (!b && b !== 0) {
        l.value = null;
        return;
      }
      if (We.isDateTime(b)) {
        const T = b.toISO();
        switch (L) {
          case "date":
            l.value = T.substring(0, 10);
            break;
          case "datetime-local":
            l.value = T.substring(0, 16);
            break;
          case "time":
            l.value = T.substring(11, 16);
            break;
          default:
            l.value = T;
            break;
        }
        return;
      }
      l.value = b.toString();
    }, { immediate: !0 }), Re([a, () => t.pattern, l], ([b, L, T], D, w) => {
      if (!b || !L)
        return;
      const E = _v[L](b);
      T && (E.value = T, i.value = E.value), w(() => E.destroy());
    }, { immediate: !0 }), Re(() => t.type, (b) => u.value = b), e({
      blur: c,
      focus: f
    }), (b, L) => (y(), R("div", {
      class: x(d(Pt)(
        d(r) ? d(de).formInputDisabled : d(de).formInputEnabled,
        t.isCondensed && d(de).isCondensed,
        t.isSecondary && d(de).isSecondary
      )),
      "aria-disabled": d(r) ? !0 : void 0
    }, [
      be("input", {
        ref: "input",
        class: x(d(Pt)(
          d(de).formInputNative,
          (!!t.iconTrailing || t.type === "password") && d(de).formInputNativeHasIconTrailing,
          !!t.iconLeading && d(de).formInputNativeHasIconLeading
        )),
        id: d(o),
        autocomplete: t.autoComplete,
        autofocus: t.autoFocus,
        "aria-disabled": d(r) ? !0 : void 0,
        disabled: d(r),
        max: t.max,
        maxlength: t.maxLength,
        min: t.min,
        placeholder: t.placeholder,
        readonly: t.isReadonly,
        step: t.step,
        type: u.value,
        value: l.value,
        onBlur: L[0] || (L[0] = (T) => h()),
        onFocus: L[1] || (L[1] = (T) => p()),
        onInput: k,
        onKeydown: S
      }, null, 42, I6),
      t.iconLeading ? (y(), _(pt, {
        key: 0,
        class: x(d(de).formInputIconLeading),
        name: t.iconLeading,
        size: 18
      }, null, 8, ["class", "name"])) : X("", !0),
      t.type === "password" ? (y(), _(pt, {
        key: 1,
        class: x(d(de).formInputIconPasswordToggle),
        name: u.value === "password" ? "eye" : "eye-slash",
        size: 18,
        onClick: L[2] || (L[2] = (T) => m())
      }, null, 8, ["class", "name"])) : t.iconTrailing ? (y(), _(pt, {
        key: 2,
        class: x(d(de).formInputIconTrailing),
        name: t.iconTrailing,
        size: 18
      }, null, 8, ["class", "name"])) : X("", !0)
    ], 10, T6));
  }
}), $6 = /* @__PURE__ */ H({
  __name: "FluxMenuGroup",
  props: {
    isHorizontal: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(t.isHorizontal ? d(Ge).menuGroupHorizontal : d(Ge).menuGroupVertical),
      role: "group"
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
}), ld = /* @__PURE__ */ H({
  __name: "FluxMenuSubHeader",
  props: {
    iconLeading: {},
    iconTrailing: {},
    label: {}
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(Ge).menuSubHeader),
      role: "presentation"
    }, [
      t.iconLeading ? (y(), _(pt, {
        key: 0,
        class: x(d(Ge).menuSubHeaderIcon),
        name: t.iconLeading
      }, null, 8, ["class", "name"])) : X("", !0),
      be("span", {
        class: x(d(Ge).menuSubHeaderLabel)
      }, ve(t.label), 3),
      t.iconTrailing ? (y(), _(pt, {
        key: 1,
        class: x(d(Ge).menuSubHeaderIcon),
        name: t.iconTrailing
      }, null, 8, ["class", "name"])) : X("", !0)
    ], 2));
  }
}), ud = /* @__PURE__ */ H({
  __name: "FluxMenu",
  props: {
    isLarge: { type: Boolean }
  },
  setup(t) {
    const e = On("element");
    return Uy(e, {
      direction: "vertical"
    }), (n, s) => (y(), R("nav", {
      ref: "element",
      class: x(t.isLarge ? d(Ge).menuLarge : d(Ge).menuNormal),
      role: "menu",
      "aria-orientation": "vertical"
    }, [
      ae(n.$slots, "default")
    ], 2));
  }
}), C6 = /* @__PURE__ */ H({
  __name: "FluxTag",
  props: {
    color: { default: "gray" },
    dot: { type: Boolean },
    icon: {},
    isClickable: { type: Boolean },
    isDeletable: { type: Boolean },
    isLoading: { type: Boolean },
    label: {},
    type: {},
    tabindex: {},
    href: {},
    rel: {},
    target: {},
    to: {}
  },
  emits: ["click", "mouseenter", "mouseleave", "delete"],
  setup(t, { emit: e }) {
    const n = e;
    function s() {
      n("delete");
    }
    return (i, r) => (y(), _(Em, {
      class: x(d(Pt)(
        t.color === "gray" && d(Zt).tagGray,
        t.color === "primary" && d(Zt).tagPrimary,
        t.color === "danger" && d(Zt).tagDanger,
        t.color === "info" && d(Zt).tagInfo,
        t.color === "success" && d(Zt).tagSuccess,
        t.color === "warning" && d(Zt).tagWarning
      )),
      "component-type": t.type,
      tabindex: t.tabindex,
      href: t.href,
      rel: t.rel,
      target: t.target,
      to: t.to,
      onClick: r[1] || (r[1] = (a) => i.$emit("click", a)),
      onMouseenter: r[2] || (r[2] = (a) => i.$emit("mouseenter", a)),
      onMouseleave: r[3] || (r[3] = (a) => i.$emit("mouseleave", a))
    }, {
      default: Z(() => [
        t.isLoading ? (y(), _(us, {
          key: 0,
          class: x(d(Zt).tagIcon),
          size: 16
        }, null, 8, ["class"])) : t.dot ? (y(), R("span", {
          key: 1,
          class: x(d(Zt).tagDot)
        }, null, 2)) : t.icon ? (y(), _(pt, {
          key: 2,
          class: x(d(Zt).tagIcon),
          name: t.icon,
          size: 16
        }, null, 8, ["class", "name"])) : X("", !0),
        be("span", {
          class: x(d(Zt).tagLabel)
        }, ve(t.label), 3),
        !t.isClickable && t.isDeletable ? (y(), R("button", {
          key: 3,
          class: x(d(Zt).tagClose),
          type: "button",
          onClick: r[0] || (r[0] = (a) => s())
        }, [
          V(pt, { name: "xmark" })
        ], 2)) : X("", !0)
      ]),
      _: 1
    }, 8, ["class", "component-type", "tabindex", "href", "rel", "target", "to"]));
  }
});
const Di = -1;
var x6 = /* @__PURE__ */ H({
  inheritAttrs: !1,
  __name: "SelectBase",
  props: /* @__PURE__ */ nn({
    disabled: { type: Boolean },
    isLoading: { type: Boolean },
    isMultiple: { type: Boolean },
    isSearchable: { type: Boolean },
    options: {},
    placeholder: {},
    selected: {}
  }, {
    searchQuery: {
      default: ""
    },
    searchQueryModifiers: {}
  }),
  emits: /* @__PURE__ */ nn(["keyDown", "deselect", "select", "search", "close", "open"], ["update:searchQuery"]),
  setup(t, { emit: e }) {
    const n = e, s = wt(t, "searchQuery"), i = bi(Vn(() => t.disabled)), { id: r } = Iu(), a = Sr(), o = On("anchor"), l = On("anchorPopup"), u = On("optionElements"), c = On("searchInputElement"), f = te(Di), m = te(!1), h = te(!1), p = Ce(() => St(c) ?? St(o)), k = Ce(() => d(S)[d(f)]?.value), S = Ce(() => t.options.map((E) => E[1]).flat());
    sd([o, l], h, () => h.value = !1), sd(o, h, () => d(p)?.focus());
    function b(E) {
      n("deselect", E), Is(() => d(p)?.focus());
    }
    function L(E) {
      n("select", E), !t.isMultiple && (h.value = !1), f.value = Di, s.value = "", Is(() => d(p)?.focus());
    }
    function T() {
      d(i) || (h.value = !d(h));
    }
    function D(E) {
      if (n("keyDown", E), !d(h)) {
        E.key === "Enter" && (h.value = !0);
        return;
      }
      if (m.value = !0, d(f) === Di && ["ArrowDown", "ArrowUp"].includes(E.key)) {
        const N = d(u)?.findIndex((O) => "isActive" in O.$props && O.$props.isActive);
        f.value = N ?? Di;
      }
      switch (E.key) {
        case "ArrowUp":
          f.value = Math.max(0, d(f) - 1);
          break;
        case "ArrowDown":
          f.value = Math.min(d(S).length - 1, d(f) + 1);
          break;
        case "Backspace":
          if (d(s).length > 0 || t.selected.length === 0)
            return;
          b(t.selected[t.selected.length - 1].value);
          break;
        case "Enter":
          const N = d(k);
          N && L(N);
          break;
        case "Escape":
          h.value = !1;
          break;
        case "Tab":
          h.value = !1;
          return;
        default:
          E.key.match(/[a-z]/) ? f.value = d(S).findIndex((O) => O.label.toLowerCase().startsWith(E.key)) : f.value = -1;
          return;
      }
      E.preventDefault();
    }
    function w() {
      m.value = !1;
    }
    return Re(f, (E) => {
      d(u)[E]?.$el.scrollIntoView({
        block: "center"
      });
    }), Re(h, (E) => {
      if (!E) {
        n("close");
        return;
      }
      Is(() => {
        d(c)?.focus();
      }), Is(() => {
        const U = d(u);
        if (!U || t.isMultiple)
          return;
        const N = U.findIndex((P) => "isActive" in P.$props && P.$props.isActive), O = U[N];
        O && O.$el.scrollIntoView({
          block: "center"
        });
      }), n("open");
    }), Re(s, (E) => n("search", E)), Re([() => t.options, h], () => f.value = Di), (E, U) => (y(), R(he, null, [
      V(b4, Vt({ ref: "anchor" }, E.$attrs, {
        class: d(Pt)(
          d(de).formSelect,
          d(i) && d(de).isDisabled,
          h.value && d(de).isFocused,
          t.isSearchable && d(de).isSearchable
        ),
        id: d(r),
        "aria-disabled": d(i) ? !0 : void 0,
        tabindex: "0",
        "tag-name": "div",
        onClick: U[0] || (U[0] = (N) => T()),
        onKeydown: D,
        onKeyup: w
      }), {
        default: Z(() => [
          !t.isMultiple && t.selected[0] ? (y(), _(jo, {
            key: 0,
            class: x(d(de).formSelectSelected),
            command: t.selected[0].command,
            "command-icon": t.selected[0].commandIcon,
            "icon-leading": t.selected[0].icon,
            "image-alt": t.selected[0].imageAlt,
            "image-src": t.selected[0].imageSrc,
            label: t.selected[0].label,
            tabindex: "-1"
          }, null, 8, ["class", "command", "command-icon", "icon-leading", "image-alt", "image-src", "label"])) : t.isMultiple && t.selected[0] ? (y(!0), R(he, { key: 1 }, It(t.selected, (N) => (y(), _(C6, {
            key: N.value ?? "null option",
            label: N.label,
            "is-deletable": "",
            onDelete: (O) => b(N.value)
          }, null, 8, ["label", "onDelete"]))), 128)) : t.placeholder ? (y(), R("span", {
            key: 2,
            class: x(d(de).formSelectPlaceholder)
          }, ve(t.placeholder), 3)) : X("", !0),
          t.isLoading ? (y(), _(us, {
            key: 3,
            class: x(d(de).formSelectIcon),
            size: 16
          }, null, 8, ["class"])) : (y(), _(pt, {
            key: 4,
            class: x(d(de).formSelectIcon),
            name: "angle-down"
          }, null, 8, ["class"]))
        ]),
        _: 1
      }, 16, ["class", "id", "aria-disabled"]),
      (y(), _(Cf, { to: "body" }, [
        V(d(Nl), null, {
          default: Z(() => [
            h.value && !d(i) ? (y(), _(w4, {
              key: 0,
              ref: "anchorPopup",
              class: x(d(Pt)(
                d(de).formSelectPopup,
                m.value && d(de).isKeyboardAction,
                t.isSearchable && d(de).isSearchable
              )),
              anchor: o.value,
              direction: "vertical",
              "use-anchor-width": ""
            }, {
              default: Z(() => [
                t.isSearchable ? (y(), _(er, {
                  key: 0,
                  modelValue: s.value,
                  "onUpdate:modelValue": U[1] || (U[1] = (N) => s.value = N),
                  ref: "searchInputElement",
                  "auto-complete": "off",
                  class: x(d(de).formSelectInput),
                  type: "search",
                  "icon-trailing": "magnifying-glass",
                  placeholder: d(a)("flux.search"),
                  onKeydown: D
                }, null, 8, ["modelValue", "class", "placeholder"])) : X("", !0),
                !t.isLoading && t.options.length === 0 ? (y(), _(ud, { key: 1 }, {
                  default: Z(() => [
                    V(ld, {
                      label: d(a)("flux.noItems")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })) : (y(), _(ud, { key: 2 }, {
                  default: Z(() => [
                    (y(!0), R(he, null, It(t.options, ([N, O], P) => (y(), R(he, {
                      key: `group-${P}`
                    }, [
                      V($6, null, {
                        default: Z(() => [
                          d(Ol)(N) ? (y(), _(ld, {
                            key: 0,
                            "icon-leading": N.icon,
                            label: N.label
                          }, null, 8, ["icon-leading", "label"])) : X("", !0),
                          (y(!0), R(he, null, It(O, (Q, W) => (y(), R(he, null, [
                            d(Xi)(Q) ? (y(), _(jo, {
                              ref_for: !0,
                              ref: "optionElements",
                              key: W,
                              command: Q.command,
                              "command-icon": Q.commandIcon,
                              "icon-leading": Q.icon,
                              "image-alt": Q.imageAlt,
                              "image-src": Q.imageSrc,
                              "is-active": !!t.selected.find((ne) => ne.value === Q.value),
                              "is-highlighted": k.value === Q.value,
                              label: Q.label,
                              type: "button",
                              onClick: (ne) => L(Q.value)
                            }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : X("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1024),
                      d(Xi)(N) ? (y(), _(jo, {
                        ref_for: !0,
                        ref: "optionElements",
                        key: `item-${P}`,
                        command: N.command,
                        "command-icon": N.commandIcon,
                        "icon-leading": N.icon,
                        "image-alt": N.imageAlt,
                        "image-src": N.imageSrc,
                        "is-active": !!t.selected.find((Q) => Q.value === N.value),
                        "is-highlighted": k.value === N.value,
                        label: N.label,
                        type: "button",
                        onClick: (Q) => L(N.value)
                      }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : X("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["class", "anchor"])) : X("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
});
const E6 = "divider", F6 = "dividerContentStart divider", O6 = "dividerContentCenter divider", M6 = "dividerContentEnd divider", D6 = "dividerContent", A6 = "dividerLine", L6 = "separator", N6 = "separatorHorizontal separator", V6 = "separatorVertical separator";
var cd = { divider: E6, dividerContentStart: F6, dividerContentCenter: O6, dividerContentEnd: M6, dividerContent: D6, dividerLine: A6, separator: L6, separatorHorizontal: N6, separatorVertical: V6 };
const B6 = ["aria-orientation"];
var _6 = /* @__PURE__ */ H({
  __name: "FluxSeparator",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(t.direction === "horizontal" ? d(cd).separatorHorizontal : d(cd).separatorVertical),
      role: "separator",
      "aria-orientation": t.direction
    }, null, 10, B6));
  }
});
const R6 = { key: 1 };
var dd = /* @__PURE__ */ H({
  __name: "FluxFormFieldAddition",
  props: {
    icon: {},
    message: {},
    mode: { default: "hint" }
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(Pt)(
        t.mode === "error" && d(de).formFieldAdditionError,
        t.mode === "hint" && d(de).formFieldAdditionHint
      )),
      role: "alert"
    }, [
      t.icon ? (y(), _(pt, {
        key: 0,
        class: x(d(de).formFieldAdditionIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : X("", !0),
      t.message ? (y(), R("span", R6, ve(t.message), 1)) : X("", !0),
      ae(e.$slots, "default")
    ], 2));
  }
});
const z6 = ["for"];
var Ss = /* @__PURE__ */ H({
  __name: "FluxFormField",
  props: {
    currentLength: {},
    error: {},
    hint: {},
    isOptional: { type: Boolean },
    label: {},
    maxLength: {}
  },
  setup(t) {
    const e = Rf(), n = ru(), s = Sr();
    return as(fh, {
      id: n
    }), (i, r) => (y(), R("div", {
      class: x(d(de).formField)
    }, [
      be("label", {
        for: d(n),
        class: x(d(de).formFieldHeader)
      }, [
        be("span", {
          class: x(d(de).formFieldLabel)
        }, ve(t.label), 3),
        t.isOptional ? (y(), R("span", {
          key: 0,
          class: x(d(de).formFieldOptional)
        }, " (" + ve(d(s)("flux.optional")) + ") ", 3)) : X("", !0),
        "value" in e ? (y(), R("span", {
          key: 1,
          class: x(d(de).formFieldValue)
        }, [
          ae(i.$slots, "value", $o(Xr({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: d(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
        ], 2)) : X("", !0)
      ], 10, z6),
      ae(i.$slots, "default", $o(Xr({ id: d(n) }))),
      t.currentLength && t.maxLength && t.maxLength > 0 ? (y(), R("span", {
        key: 0,
        class: x(d(de).formFieldCounter)
      }, ve(t.currentLength) + " / " + ve(t.maxLength), 3)) : X("", !0),
      t.error ? (y(), _(dd, {
        key: 1,
        icon: "circle-exclamation",
        mode: "error",
        message: t.error
      }, null, 8, ["message"])) : X("", !0),
      t.hint ? (y(), _(dd, {
        key: 2,
        icon: "circle-info",
        message: t.hint
      }, null, 8, ["message"])) : X("", !0),
      ae(i.$slots, "addition", $o(Xr({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: d(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
    ], 2));
  }
}), ao = /* @__PURE__ */ H({
  __name: "FluxPrimaryButton",
  props: {
    type: {},
    disabled: { type: Boolean },
    iconLeading: {},
    iconTrailing: {},
    isFilled: { type: Boolean },
    isLoading: { type: Boolean },
    isSubmit: { type: Boolean },
    label: {},
    size: {},
    tabindex: {},
    href: {},
    rel: {},
    target: {},
    to: {}
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(t) {
    return (e, n) => (y(), _(so, Vt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": d(Ms).primaryButton,
      "css-class-icon": d(Ms).primaryButtonIcon,
      "css-class-label": d(Ms).primaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), lu({ _: 2 }, [
      It(d(Fm), (s) => ({
        name: s,
        fn: Z(() => [
          ae(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
}), fd = /* @__PURE__ */ H({
  __name: "FluxFormSelect",
  props: /* @__PURE__ */ nn({
    disabled: { type: Boolean },
    isMultiple: { type: Boolean },
    placeholder: {},
    isSearchable: { type: Boolean },
    options: {}
  }, {
    searchQuery: {
      default: ""
    },
    searchQueryModifiers: {},
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:searchQuery", "update:modelValue"],
  setup(t) {
    const e = wt(t, "searchQuery"), n = wt(t, "modelValue"), s = bi(Vn(() => t.disabled)), { groups: i, selected: r, values: a } = Cy(n, t.isMultiple, Vn(() => t.options), e);
    function o(u) {
      d(t.isMultiple) && (n.value = d(a).filter((c) => c !== u));
    }
    function l(u) {
      d(t.isMultiple) ? n.value = [...d(a), u] : n.value = u;
    }
    return (u, c) => (y(), _(d(x6), {
      searchQuery: e.value,
      "onUpdate:searchQuery": c[0] || (c[0] = (f) => e.value = f),
      disabled: d(s),
      "is-multiple": t.isMultiple,
      "is-searchable": t.isSearchable,
      options: d(i),
      placeholder: t.placeholder,
      selected: d(r),
      onDeselect: o,
      onSelect: l
    }, null, 8, ["searchQuery", "disabled", "is-multiple", "is-searchable", "options", "placeholder", "selected"]));
  }
}), W6 = /* @__PURE__ */ H({
  inheritAttrs: !1,
  __name: "FluxDisabled",
  props: {
    disabled: { type: Boolean, default: !0 }
  },
  setup(t) {
    return as(dh, Vn(() => t.disabled)), (e, n) => ae(e.$slots, "default");
  }
}), P6 = /* @__PURE__ */ H({
  __name: "FluxFormColumn",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(de).formColumn)
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
}), Cu = /* @__PURE__ */ H({
  __name: "FluxPaneFooter",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(mn).paneFooter)
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const H6 = ["aria-disabled"];
var U6 = /* @__PURE__ */ H({
  __name: "FluxForm",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["submit"],
  setup(t, { emit: e }) {
    const n = e;
    function s() {
      n("submit");
    }
    return (i, r) => (y(), _(W6, { disabled: t.disabled }, {
      default: Z(() => [
        be("form", {
          class: x(d(de).form),
          "aria-disabled": t.disabled ? !0 : void 0,
          onSubmit: r[0] || (r[0] = hu((a) => s(), ["prevent"]))
        }, [
          ae(i.$slots, "default")
        ], 42, H6)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
}), Z6 = /* @__PURE__ */ H({
  __name: "FluxFormInputGroup",
  props: {
    isSecondary: { type: Boolean },
    isCondensed: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(Pt)(
        d(de).formInputGroup,
        t.isCondensed && d(de).isCondensed,
        t.isSecondary && d(de).isSecondary
      )),
      role: "textbox"
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const q6 = ["id", "autocomplete", "autofocus", "disabled", "maxlength", "placeholder", "aria-disabled"];
var G6 = /* @__PURE__ */ H({
  __name: "FluxFormTextArea",
  props: /* @__PURE__ */ nn({
    autoComplete: {},
    autoFocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean },
    isReadonly: { type: Boolean },
    maxLength: {},
    placeholder: {},
    rows: { default: 3 }
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ nn(["blur", "focus"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const n = e, s = wt(t, "modelValue"), i = bi(Vn(() => t.disabled)), { id: r } = Iu();
    return (a, o) => su((y(), R("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (l) => s.value = l),
      ref: "input",
      class: x(d(i) ? d(de).formTextAreaDisabled : d(de).formTextAreaEnabled),
      id: d(r),
      autocomplete: t.autoComplete,
      autofocus: t.autoFocus,
      disabled: d(i),
      maxlength: t.maxLength,
      placeholder: t.placeholder,
      style: gt({
        "--rows": t.rows
      }),
      "aria-disabled": d(i) ? !0 : void 0,
      onBlur: o[1] || (o[1] = (l) => n("blur")),
      onFocus: o[2] || (o[2] = (l) => n("focus"))
    }, null, 46, q6)), [
      [ba, s.value]
    ]);
  }
}), ra = H({
  emits: ["close"],
  inheritAttrs: !1,
  props: {
    isCloseable: { default: !1, type: Boolean },
    size: { default: "small", type: String }
  },
  setup(t, { attrs: e, emit: n, slots: s }) {
    return yv(
      e,
      t,
      n,
      s,
      Pt(
        t.size === "small" && Jt.overlaySmall,
        t.size === "medium" && Jt.overlayMedium,
        t.size === "large" && Jt.overlayLarge
      ),
      Yb
    );
  }
});
const Y6 = { key: 0 }, j6 = { key: 1 };
var oo = /* @__PURE__ */ H({
  __name: "FluxPaneHeader",
  props: {
    icon: {},
    subTitle: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(d(mn).paneHeader)
    }, [
      ae(e.$slots, "before"),
      t.icon ? (y(), _(pt, {
        key: 0,
        class: x(d(mn).paneHeaderIcon),
        size: 20,
        name: t.icon
      }, null, 8, ["class", "name"])) : X("", !0),
      t.title || t.subTitle ? (y(), R("div", {
        key: 1,
        class: x(d(mn).paneHeaderCaption)
      }, [
        t.title ? (y(), R("strong", Y6, ve(t.title), 1)) : X("", !0),
        t.subTitle ? (y(), R("span", j6, ve(t.subTitle), 1)) : X("", !0)
      ], 2)) : X("", !0),
      ae(e.$slots, "after")
    ], 2));
  }
}), J6 = /* @__PURE__ */ H({
  __name: "FluxAlert",
  props: {
    alert: {}
  },
  setup(t) {
    const e = Sr();
    return (n, s) => (y(), _(io, null, {
      default: Z(() => [
        V(oo, {
          icon: t.alert.icon,
          title: t.alert.title
        }, null, 8, ["icon", "title"]),
        V(hr, {
          innerHTML: t.alert.message
        }, null, 8, ["innerHTML"]),
        V(Cu, null, {
          default: Z(() => [
            V(ro),
            V(ao, {
              "icon-leading": "circle-check",
              label: d(e)("flux.ok"),
              onClick: s[0] || (s[0] = (i) => t.alert.onClose())
            }, null, 8, ["label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), K6 = /* @__PURE__ */ H({
  __name: "FluxConfirm",
  props: {
    confirm: {}
  },
  setup(t) {
    const e = Sr();
    return (n, s) => (y(), _(io, null, {
      default: Z(() => [
        V(oo, {
          icon: t.confirm.icon,
          title: t.confirm.title
        }, null, 8, ["icon", "title"]),
        V(hr, {
          innerHTML: t.confirm.message
        }, null, 8, ["innerHTML"]),
        V(Cu, null, {
          default: Z(() => [
            V(ro),
            V(hi, {
              label: d(e)("flux.cancel"),
              onClick: s[0] || (s[0] = (i) => t.confirm.onCancel())
            }, null, 8, ["label"]),
            V(ao, {
              "icon-leading": "circle-check",
              label: d(e)("flux.ok"),
              onClick: s[1] || (s[1] = (i) => t.confirm.onConfirm())
            }, null, 8, ["label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Q6 = /* @__PURE__ */ H({
  __name: "FluxPrompt",
  props: {
    prompt: {}
  },
  setup(t) {
    const e = On("input"), n = Sr(), s = te(""), i = Ce(() => d(s).trim().length > 0);
    Rn(() => {
      const a = d(e);
      requestAnimationFrame(() => a?.$el.querySelector("input")?.focus());
    });
    function r(a) {
      !d(i) || a.key !== "Enter" || t.prompt.onConfirm(d(s));
    }
    return (a, o) => (y(), _(io, null, {
      default: Z(() => [
        V(oo, {
          icon: t.prompt.icon,
          title: t.prompt.title
        }, null, 8, ["icon", "title"]),
        V(hr, {
          innerHTML: t.prompt.message
        }, null, 8, ["innerHTML"]),
        V(hr, null, {
          default: Z(() => [
            V(Ss, {
              label: t.prompt.fieldLabel
            }, {
              default: Z(() => [
                V(er, {
                  ref: "input",
                  modelValue: s.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (l) => s.value = l),
                  placeholder: t.prompt.fieldPlaceholder,
                  type: t.prompt.fieldType ?? "text",
                  onKeydown: r
                }, null, 8, ["modelValue", "placeholder", "type"])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }),
        V(Cu, null, {
          default: Z(() => [
            V(ro),
            V(hi, {
              label: d(n)("flux.cancel"),
              onClick: o[1] || (o[1] = (l) => t.prompt.onCancel())
            }, null, 8, ["label"]),
            V(ao, {
              disabled: !i.value,
              "icon-leading": "circle-check",
              label: d(n)("flux.ok"),
              onClick: o[2] || (o[2] = (l) => t.prompt.onConfirm(s.value))
            }, null, 8, ["disabled", "label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), X6 = /* @__PURE__ */ H({
  __name: "FluxOverlayProvider",
  setup(t) {
    const { alerts: e, confirms: n, prompts: s } = Tr();
    return (i, r) => (y(), R(he, null, [
      be("div", {
        class: x(d(Jt).overlayProvider)
      }, [
        be("div", {
          class: x(d(Jt).overlayShade)
        }, null, 2)
      ], 2),
      V(ra, { size: "medium" }, {
        default: Z(() => [
          (y(!0), R(he, null, It(d(e), (a) => (y(), _(J6, {
            key: a.id,
            alert: a
          }, null, 8, ["alert"]))), 128))
        ]),
        _: 1
      }),
      V(ra, { size: "medium" }, {
        default: Z(() => [
          (y(!0), R(he, null, It(d(n), (a) => (y(), _(K6, {
            key: a.id,
            confirm: a
          }, null, 8, ["confirm"]))), 128))
        ]),
        _: 1
      }),
      V(ra, { size: "medium" }, {
        default: Z(() => [
          (y(!0), R(he, null, It(d(s), (a) => (y(), _(Q6, {
            key: a.id,
            prompt: a
          }, null, 8, ["prompt"]))), 128))
        ]),
        _: 1
      })
    ], 64));
  }
});
const e3 = "progressBar", t3 = "progressBarTrack", n3 = "progressBarValue", s3 = "progressBarValueComplete progressBarValue", i3 = "progressBarValueIncomplete progressBarValue", r3 = "progressBarTrackIndeterminate progressBarTrack", a3 = "progressBarIndeterminate", o3 = "progressBarInfo", l3 = "progressBarProgress", u3 = "progressBarStatus", c3 = "basePaneStructure";
var Zn = { progressBar: e3, progressBarTrack: t3, progressBarValue: n3, progressBarValueComplete: s3, progressBarValueIncomplete: i3, progressBarTrackIndeterminate: r3, progressBarIndeterminate: a3, progressBarInfo: o3, progressBarProgress: l3, progressBarStatus: u3, basePaneStructure: c3 }, d3 = /* @__PURE__ */ H({
  __name: "FluxProgressBar",
  props: {
    isIndeterminate: { type: Boolean },
    max: { default: 1 },
    min: { default: 0 },
    status: {},
    value: {}
  },
  setup(t) {
    const e = Ce(() => t.isIndeterminate ? 0 : ((t.value ?? t.min) - t.min) / (t.max - t.min)), n = Ce(() => new Intl.NumberFormat(navigator.language, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(d(e) ?? 0));
    return (s, i) => (y(), _(Om, {
      class: x(d(Zn).progressBar),
      gap: 6,
      role: "progressbar",
      "aria-valuenow": t.value,
      "aria-valuemax": t.max,
      "aria-valuemin": t.min
    }, {
      default: Z(() => [
        be("div", {
          class: x(t.isIndeterminate ? d(Zn).progressBarTrackIndeterminate : d(Zn).progressBarTrack)
        }, [
          be("div", {
            class: x(e.value >= 1 ? d(Zn).progressBarValueComplete : d(Zn).progressBarValueIncomplete),
            style: gt({
              width: `${t.isIndeterminate ? 100 : e.value * 100}%`
            })
          }, null, 6)
        ], 2),
        t.status ? (y(), R("div", {
          key: 0,
          class: x(d(Zn).progressBarInfo)
        }, [
          V(d(Nl), null, {
            default: Z(() => [
              (y(), R("span", {
                key: t.status,
                class: x(d(Zn).progressBarStatus)
              }, ve(t.status), 3))
            ]),
            _: 1
          }),
          V(d(Nl), null, {
            default: Z(() => [
              t.isIndeterminate ? X("", !0) : (y(), R("span", {
                key: 0,
                class: x(d(Zn).progressBarProgress)
              }, ve(n.value), 3))
            ]),
            _: 1
          })
        ], 2)) : X("", !0)
      ]),
      _: 1
    }, 8, ["class", "aria-valuenow", "aria-valuemax", "aria-valuemin"]));
  }
});
const f3 = ["disabled", "max", "min", "step"];
var h3 = /* @__PURE__ */ H({
  __name: "FluxQuantitySelector",
  props: /* @__PURE__ */ nn({
    disabled: { type: Boolean },
    max: { default: 100 },
    min: { default: 0 },
    step: { default: 1 }
  }, {
    modelValue: {
      default: 0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = wt(t, "modelValue"), n = bi(Vn(() => t.disabled)), s = On("input"), i = te(0);
    function r() {
      d(n) || (e.value = Math.max(t.min, d(e) - t.step));
    }
    function a() {
      d(n) || (e.value = Math.min(t.max, d(e) + t.step));
    }
    function o() {
      const l = St(s);
      !l || isNaN(l.valueAsNumber) || (i.value = 0, requestAnimationFrame(() => {
        i.value = Math.max(51, l.scrollWidth + 30);
      }));
    }
    return Za(() => {
      if (d(e) > t.max) {
        a();
        return;
      }
      if (d(e) < t.min) {
        r();
        return;
      }
      o();
    }), (l, u) => (y(), _(bk, {
      class: x(d(de).quantitySelector),
      "aria-disabled": d(n) ? !0 : void 0
    }, {
      default: Z(() => [
        V(hi, {
          class: x(d(de).quantitySelectorButton),
          disabled: d(n) || e.value <= t.min,
          "icon-leading": "minus",
          tabindex: "-1",
          onClick: r
        }, null, 8, ["class", "disabled"]),
        su(be("input", {
          ref: "input",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => e.value = c),
          class: x(d(de).quantitySelectorInput),
          style: gt({
            width: `${i.value}px`
          }),
          disabled: d(n),
          tabindex: "0",
          type: "number",
          max: t.max,
          min: t.min,
          step: t.step
        }, null, 14, f3), [
          [ba, e.value]
        ]),
        V(hi, {
          class: x(d(de).quantitySelectorButton),
          disabled: d(n) || e.value >= t.max,
          "icon-leading": "plus",
          tabindex: "-1",
          onClick: a
        }, null, 8, ["class", "disabled"])
      ]),
      _: 1
    }, 8, ["class", "aria-disabled"]));
  }
});
const { basePane: zs } = no, m3 = `snackbar ${zs}`, p3 = "action", g3 = "progressBar", y3 = "snackbarContent", v3 = "icon", k3 = "spinner", b3 = "snackbarBody", w3 = "snackbarMessage", S3 = "snackbarSubMessage", T3 = "snackbarTitle", I3 = "snackbarAction", $3 = "snackbarActions", C3 = `snackbarGray snackbar ${zs}`, x3 = `snackbarPrimary snackbar ${zs}`, E3 = "spinnerEffect", F3 = "spinnerValue", O3 = `snackbarDanger snackbar ${zs}`, M3 = `snackbarInfo snackbar ${zs}`, D3 = `snackbarSuccess snackbar ${zs}`, A3 = `snackbarWarning snackbar ${zs}`, L3 = "snackbars", N3 = "snackbarsEnterActive", V3 = "snackbarsLeaveActive", B3 = "snackbarsMove", _3 = "snackbarsEnterFrom", R3 = "snackbarsLeaveTo";
var Qe = { snackbar: m3, action: p3, progressBar: g3, snackbarContent: y3, icon: v3, spinner: k3, snackbarBody: b3, snackbarMessage: w3, snackbarSubMessage: S3, snackbarTitle: T3, snackbarAction: I3, snackbarActions: $3, snackbarGray: C3, snackbarPrimary: x3, spinnerEffect: E3, spinnerValue: F3, snackbarDanger: O3, snackbarInfo: M3, snackbarSuccess: D3, snackbarWarning: A3, snackbars: L3, snackbarsEnterActive: N3, snackbarsLeaveActive: V3, snackbarsMove: B3, snackbarsEnterFrom: _3, snackbarsLeaveTo: R3 };
const z3 = ["onClick"];
var W3 = /* @__PURE__ */ H({
  __name: "FluxSnackbar",
  props: {
    actions: {},
    color: { default: "gray" },
    icon: {},
    isCloseable: { type: Boolean },
    isLoading: { type: Boolean },
    isRendered: { type: Boolean },
    message: {},
    progressIndeterminate: { type: Boolean },
    progressMax: {},
    progressMin: {},
    progressStatus: {},
    progressValue: {},
    subMessage: {},
    title: {}
  },
  emits: ["action", "close"],
  setup(t, { emit: e }) {
    const n = e, s = bn(), i = te(null), r = Ce(() => t.actions && Object.entries(t.actions).length > 0);
    au(() => {
      i.value && $a(i.value);
    });
    function a(l) {
      n("action", l);
    }
    function o() {
      n("close");
    }
    return Za(() => {
      i.value && Tm(i.value, s.props);
    }), Re(() => t.isRendered, () => {
      if (t.isRendered) {
        i.value && $a(i.value);
        return;
      }
      let l = s.props;
      l.onAction = a, l.onClose = o, i.value = Su(l);
    }, { immediate: !0 }), (l, u) => t.isRendered ? (y(), R("div", {
      key: 0,
      class: x(d(Pt)(
        t.color === "gray" && d(Qe).snackbarGray,
        t.color === "primary" && d(Qe).snackbarPrimary,
        t.color === "danger" && d(Qe).snackbarDanger,
        t.color === "info" && d(Qe).snackbarInfo,
        t.color === "success" && d(Qe).snackbarSuccess,
        t.color === "warning" && d(Qe).snackbarWarning
      ))
    }, [
      be("div", {
        class: x(d(Qe).snackbarContent)
      }, [
        t.isLoading ? (y(), _(us, {
          key: 0,
          size: 18
        })) : t.icon ? (y(), _(pt, {
          key: 1,
          size: 18,
          name: t.icon
        }, null, 8, ["name"])) : X("", !0),
        be("div", {
          class: x(d(Qe).snackbarBody)
        }, [
          t.title ? (y(), R("div", {
            key: 0,
            class: x(d(Qe).snackbarTitle)
          }, ve(t.title), 3)) : X("", !0),
          t.message ? (y(), R("div", {
            key: 1,
            class: x(d(Qe).snackbarMessage)
          }, ve(t.message), 3)) : X("", !0),
          t.progressIndeterminate || t.progressValue ? (y(), _(d3, {
            key: 2,
            "is-indeterminate": t.progressIndeterminate,
            max: t.progressMax,
            min: t.progressMin,
            status: t.progressStatus,
            value: t.progressValue
          }, null, 8, ["is-indeterminate", "max", "min", "status", "value"])) : X("", !0),
          t.subMessage ? (y(), R("div", {
            key: 3,
            class: x(d(Qe).snackbarSubMessage)
          }, ve(t.subMessage), 3)) : X("", !0)
        ], 2)
      ], 2),
      r.value ? (y(), R("div", {
        key: 0,
        class: x(d(Qe).snackbarActions)
      }, [
        (y(!0), R(he, null, It(t.actions, (c, f) => (y(), R("button", {
          key: f,
          class: x(d(Qe).snackbarAction),
          tabindex: "-1",
          type: "button",
          onClick: (m) => a(f)
        }, [
          be("span", null, ve(c), 1)
        ], 10, z3))), 128))
      ], 2)) : X("", !0),
      t.isCloseable ? (y(), _(V2, {
        key: 1,
        icon: "xmark",
        onClick: u[0] || (u[0] = (c) => o())
      })) : X("", !0)
    ], 2)) : X("", !0);
  }
}), P3 = /* @__PURE__ */ H({
  __name: "FluxSnackbarProvider",
  setup(t) {
    const { snackbars: e } = Tr();
    function n(s) {
      return (i) => s.onAction?.(i);
    }
    return (s, i) => (y(), _(lh, {
      name: "flux-snackbars",
      tag: "div",
      class: x(d(Qe).snackbars),
      "enter-active-class": d(Qe).snackbarsEnterActive,
      "enter-from-class": d(Qe).snackbarsEnterFrom,
      "leave-active-class": d(Qe).snackbarsLeaveActive,
      "leave-to-class": d(Qe).snackbarsLeaveTo,
      "move-class": d(Qe).snackbarsMove
    }, {
      default: Z(() => [
        (y(!0), R(he, null, It(d(e).toReversed(), (r) => (y(), _(W3, Vt({
          key: r.id
        }, { ref_for: !0 }, r, {
          "is-rendered": "",
          onAction: (a) => n(r),
          onClose: () => r.onClose?.()
        }), null, 16, ["onAction", "onClose"]))), 128))
      ]),
      _: 1
    }, 8, ["class", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class", "move-class"]));
  }
});
const H3 = "tooltip", U3 = "tooltipAbove tooltip", Z3 = "tooltipBelow tooltip", q3 = "tooltipEnd tooltip", G3 = "tooltipStart tooltip";
var Ai = { tooltip: H3, tooltipAbove: U3, tooltipBelow: Z3, tooltipEnd: q3, tooltipStart: G3 }, Y3 = H(() => {
  const { tooltip: t } = Tr(), e = te(null), n = te(null), s = Ce(() => d(t) ? d(t).contentSlot?.() ?? [d(t).content] : null), i = Ce(() => !!d(t));
  function r() {
    const a = St(e), o = d(t);
    if (!o || !a || !d(s)) {
      n.value = null;
      return;
    }
    const { direction: l, origin: u } = o, c = 9, f = 15;
    if (!u) {
      n.value = null;
      return;
    }
    let { width: m, height: h } = a.getBoundingClientRect();
    const { scale: p } = getComputedStyle(a), { top: k, left: S, width: b, height: L } = u.getBoundingClientRect();
    let T = Number(p ?? 1);
    T = isNaN(T) ? 1 : T, h /= T, m /= T, l === "horizontal" ? n.value = j3(k, S, m, h, b, L, c, f) : n.value = J3(k, S, m, h, b, L, c, f);
  }
  return as(xp, {
    calculate: r
  }), Re(s, () => requestAnimationFrame(r)), () => ii(jb, {}, {
    default: () => {
      if (!d(i))
        return;
      const a = d(n);
      return ii("div", {
        ref: e,
        class: a ? Pt(
          a.transition === "above" && Ai.tooltipAbove,
          a.transition === "below" && Ai.tooltipBelow,
          a.transition === "end" && Ai.tooltipEnd,
          a.transition === "start" && Ai.tooltipStart
        ) : Ai.tooltip,
        style: {
          "--x": a?.x ?? void 0,
          "--y": a?.y ?? void 0,
          "--arrowAngle": a?.arrowAngle ?? void 0,
          "--arrowX": a?.arrowX ?? void 0,
          "--arrowY": a?.arrowY ?? void 0
        }
      }, d(s));
    }
  });
});
function j3(t, e, n, s, i, r, a, o) {
  let l, u, c, f, m, h;
  if (e > innerWidth / 2 ? (l = e - n - a, u = t + r / 2 - s / 2, c = "315deg", f = "100%", m = "50%", h = "start") : (l = e + i + a, u = t + r / 2 - s / 2, c = "135deg", f = "0", m = "50%", h = "end"), u + s > innerHeight - o) {
    const p = Math.min(u, innerHeight - s - o) - u;
    m = `calc(50% - ${p}px)`, u += p;
  }
  if (u < o) {
    const p = Math.max(u, o) - u;
    m = `calc(50% - ${p}px)`, u += p;
  }
  return {
    x: Math.round(l),
    y: Math.round(u),
    arrowAngle: c,
    arrowX: f,
    arrowY: m,
    transition: h
  };
}
function J3(t, e, n, s, i, r, a, o) {
  let l, u, c, f, m, h;
  if (t > 300 ? (l = e + i / 2 - n / 2, u = t - s - a, c = "45deg", f = "50%", m = "100%", h = "above") : (l = e + i / 2 - n / 2, u = t + r + a, c = "225deg", f = "50%", m = "0", h = "below"), l + n > innerWidth - o) {
    const p = Math.min(l, innerWidth - n - o) - l;
    f = `calc(50% - ${p}px)`, l += p;
  }
  if (l < o) {
    const p = Math.max(l, o) - l;
    f = `calc(50% - ${p}px)`, l += p;
  }
  return {
    x: Math.round(l),
    y: Math.round(u),
    arrowAngle: c,
    arrowX: f,
    arrowY: m,
    transition: h
  };
}
const K3 = "root", Q3 = "isLocked";
var Jo = { root: K3, isLocked: Q3 };
const X3 = ["inert"];
var eS = /* @__PURE__ */ H({
  inheritAttrs: !1,
  __name: "FluxRoot",
  setup(t) {
    const { inertMain: e } = Tr();
    return Re(e, (n, s, i) => {
      n && (document.body.classList.add(Jo.isLocked), i(() => document.body.classList.remove(Jo.isLocked)));
    }, { immediate: !0 }), (n, s) => (y(), R(he, null, [
      be("div", Vt(n.$attrs, {
        class: d(Jo).root,
        inert: d(e)
      }), [
        ae(n.$slots, "default")
      ], 16, X3),
      V(X6),
      V(P3),
      V(Y3)
    ], 64));
  }
});
let Dm;
const lo = (t) => Dm = t, Am = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function Vl(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var tr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(tr || (tr = {}));
function tS() {
  const t = ef(!0), e = t.run(() => te({}));
  let n = [], s = [];
  const i = tu({
    install(r) {
      lo(i), i._a = r, r.provide(Am, i), r.config.globalProperties.$pinia = i, s.forEach((a) => n.push(a)), s = [];
    },
    use(r) {
      return this._a ? n.push(r) : s.push(r), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return i;
}
const Lm = () => {
};
function hd(t, e, n, s = Lm) {
  t.add(e);
  const i = () => {
    t.delete(e) && s();
  };
  return !n && tf() && nf(i), i;
}
function qs(t, ...e) {
  t.forEach((n) => {
    n(...e);
  });
}
const nS = (t) => t(), md = /* @__PURE__ */ Symbol(), Ko = /* @__PURE__ */ Symbol();
function Bl(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((n, s) => t.set(s, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], i = t[n];
    Vl(i) && Vl(s) && t.hasOwnProperty(n) && !ze(s) && !pn(s) ? t[n] = Bl(i, s) : t[n] = s;
  }
  return t;
}
const sS = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function iS(t) {
  return !Vl(t) || !Object.prototype.hasOwnProperty.call(t, sS);
}
const { assign: Yn } = Object;
function rS(t) {
  return !!(ze(t) && t.effect);
}
function aS(t, e, n, s) {
  const { state: i, actions: r, getters: a } = e, o = n.state.value[t];
  let l;
  function u() {
    o || (n.state.value[t] = i ? i() : {});
    const c = y0(n.state.value[t]);
    return Yn(c, r, Object.keys(a || {}).reduce((f, m) => (f[m] = tu(Ce(() => {
      lo(n);
      const h = n._s.get(t);
      return a[m].call(h, h);
    })), f), {}));
  }
  return l = Nm(t, u, e, n, s, !0), l;
}
function Nm(t, e, n = {}, s, i, r) {
  let a;
  const o = Yn({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h;
  const p = s.state.value[t];
  !r && !p && (s.state.value[t] = {}), te({});
  let k;
  function S(N) {
    let O;
    u = c = !1, typeof N == "function" ? (N(s.state.value[t]), O = {
      type: tr.patchFunction,
      storeId: t,
      events: h
    }) : (Bl(s.state.value[t], N), O = {
      type: tr.patchObject,
      payload: N,
      storeId: t,
      events: h
    });
    const P = k = /* @__PURE__ */ Symbol();
    Is().then(() => {
      k === P && (u = !0);
    }), c = !0, qs(f, O, s.state.value[t]);
  }
  const b = r ? function() {
    const { state: O } = n, P = O ? O() : {};
    this.$patch((Q) => {
      Yn(Q, P);
    });
  } : (
    /* istanbul ignore next */
    Lm
  );
  function L() {
    a.stop(), f.clear(), m.clear(), s._s.delete(t);
  }
  const T = (N, O = "") => {
    if (md in N)
      return N[Ko] = O, N;
    const P = function() {
      lo(s);
      const Q = Array.from(arguments), W = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
      function me(we) {
        W.add(we);
      }
      function ce(we) {
        ne.add(we);
      }
      qs(m, {
        args: Q,
        name: P[Ko],
        store: w,
        after: me,
        onError: ce
      });
      let Le;
      try {
        Le = N.apply(this && this.$id === t ? this : w, Q);
      } catch (we) {
        throw qs(ne, we), we;
      }
      return Le instanceof Promise ? Le.then((we) => (qs(W, we), we)).catch((we) => (qs(ne, we), Promise.reject(we))) : (qs(W, Le), Le);
    };
    return P[md] = !0, P[Ko] = O, P;
  }, D = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: hd.bind(null, m),
    $patch: S,
    $reset: b,
    $subscribe(N, O = {}) {
      const P = hd(f, N, O.detached, () => Q()), Q = a.run(() => Re(() => s.state.value[t], (W) => {
        (O.flush === "sync" ? c : u) && N({
          storeId: t,
          type: tr.direct,
          events: h
        }, W);
      }, Yn({}, l, O)));
      return P;
    },
    $dispose: L
  }, w = kn(D);
  s._s.set(t, w);
  const U = (s._a && s._a.runWithContext || nS)(() => s._e.run(() => (a = ef()).run(() => e({ action: T }))));
  for (const N in U) {
    const O = U[N];
    if (ze(O) && !rS(O) || pn(O))
      r || (p && iS(O) && (ze(O) ? O.value = p[N] : Bl(O, p[N])), s.state.value[t][N] = O);
    else if (typeof O == "function") {
      const P = T(O, N);
      U[N] = P, o.actions[N] = O;
    }
  }
  return Yn(w, U), Yn(ge(w), U), Object.defineProperty(w, "$state", {
    get: () => s.state.value[t],
    set: (N) => {
      S((O) => {
        Yn(O, N);
      });
    }
  }), s._p.forEach((N) => {
    Yn(w, a.run(() => N({
      store: w,
      app: s._a,
      pinia: s,
      options: o
    })));
  }), p && r && n.hydrate && n.hydrate(w.$state, p), u = !0, c = !0, w;
}
// @__NO_SIDE_EFFECTS__
function oS(t, e, n) {
  let s;
  const i = typeof e == "function";
  s = i ? n : e;
  function r(a, o) {
    const l = N0();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (l ? Dn(Am, null) : null), a && lo(a), a = Dm, a._s.has(t) || (i ? Nm(t, e, s, a) : aS(t, s, a)), a._s.get(t);
  }
  return r.$id = t, r;
}
function lS(t) {
  const e = ge(t), n = {};
  for (const s in e) {
    const i = e[s];
    i.effect ? n[s] = // ...
    Ce({
      get: () => t[s],
      set(r) {
        t[s] = r;
      }
    }) : (ze(i) || pn(i)) && (n[s] = // ---
    Vn(t, s));
  }
  return n;
}
function Wn() {
  return (t) => Homey.__(t) ?? t;
}
function uS(t, e) {
  const n = /* @__PURE__ */ oS(t, e);
  return () => {
    const s = n(), i = Object.getOwnPropertyNames(s), r = lS(s), a = {};
    for (const o of i)
      if (!(o.startsWith("$") || o.startsWith("_"))) {
        if (o in r) {
          a[o] = r[o];
          continue;
        }
        a[o] = s[o];
      }
    return a;
  };
}
var Vm = uS("list", () => {
  const t = te([]), e = te(!0), n = te([]), s = te(null), i = te([]), r = Ce(() => {
    const k = Object.groupBy(d(n), (b) => b.category || "__other__"), S = Object.entries(k).sort(([b], [L]) => {
      if (b === "__other__") return 1;
      if (L === "__other__") return -1;
      const T = d(t).findIndex((w) => w.category === b), D = d(t).findIndex((w) => w.category === L);
      return T - D;
    });
    return Object.fromEntries(S);
  }), a = Ce(() => d(n).length > 0);
  async function o(k, S, b) {
    const L = d(n).findIndex((T) => T.id === S.id);
    L !== -1 && (n.value[L].checked = b, b ? await Homey.api("POST", `/${k}/items/${S.id}/checked`) : await Homey.api("POST", `/${k}/items/${S.id}/unchecked`));
  }
  async function l(k, S, b) {
    const L = d(n).findIndex((T) => T.id === S.id);
    L === -1 || S.quantity === void 0 || (n.value[L].quantity = b === "increase" ? S.quantity + 1 : S.quantity - 1, await Homey.api("POST", `/${k}/items/${S.id}/quantity`, {
      quantity: b === "increase" ? 1 : -1
    }));
  }
  async function u(k) {
    e.value = !0, t.value = await Homey.api("GET", `/${k}/categories`), e.value = !1;
  }
  async function c(k) {
    e.value = !0, await p(
      await Homey.api("GET", `/${k}/items`)
    ), e.value = !1;
  }
  async function f(k) {
    e.value = !0, s.value = await Homey.api("GET", `/${k}`), e.value = !1;
  }
  async function m(k) {
    e.value = !0, i.value = await Homey.api("GET", `/${k}/persons`), e.value = !1;
  }
  async function h(k, S) {
    const b = d(n).findIndex((L) => L.id === S.id);
    b !== -1 && (n.value.splice(b, 1), await Homey.api("DELETE", `/${k}/items/${S.id}`));
  }
  async function p(k) {
    n.value = k;
  }
  return {
    categories: es(t),
    isLoading: es(e),
    items: es(n),
    look: es(s),
    persons: es(i),
    categorizedItems: r,
    hasItems: a,
    changeChecked: o,
    changeQuantity: l,
    loadCategories: u,
    loadItems: c,
    loadLook: f,
    loadPersons: m,
    removeItem: h,
    setItems: p
  };
}), Bm = /* @__PURE__ */ H({
  __name: "ListForm",
  props: /* @__PURE__ */ nn({
    deviceId: {},
    saveLabel: {},
    title: {},
    type: {}
  }, {
    category: { default: "" },
    categoryModifiers: {},
    content: { default: "" },
    contentModifiers: {},
    person: { default: null },
    personModifiers: {},
    dueDate: { default: null },
    dueDateModifiers: {},
    dueTime: { default: null },
    dueTimeModifiers: {},
    quantity: { default: 1 },
    quantityModifiers: {}
  }),
  emits: /* @__PURE__ */ nn(["close", "save"], ["update:category", "update:content", "update:person", "update:dueDate", "update:dueTime", "update:quantity"]),
  setup(t, { emit: e }) {
    const n = e, s = wt(t, "category"), i = wt(t, "content"), r = wt(t, "person"), a = wt(t, "dueDate"), o = wt(t, "dueTime"), l = wt(t, "quantity"), u = Wn(), {
      categories: c,
      persons: f,
      loadCategories: m,
      loadPersons: h
    } = Vm(), p = Ce(() => d(i).trim().length > 2), k = Ce(() => d(c).map((D) => ({
      label: u(`grocery.category.${D.category}`),
      icon: D.icon,
      value: D.category
    }))), S = Ce(() => [
      { value: null, label: u("widget.list.add.anyone") },
      ...d(f).map((D) => ({
        label: D.name,
        imageSrc: D.image,
        value: D.id
      }))
    ]);
    Rn(async () => {
      await Promise.allSettled([
        m(t.deviceId),
        h(t.deviceId)
      ]);
    });
    function b() {
      a.value = null, o.value = null;
    }
    async function L() {
      n("close");
    }
    async function T() {
      n("save");
    }
    return (D, w) => (y(), _(d(io), { style: { "max-height": "calc(100dvh - 30px)", width: "calc(100dvw - 30px)", "overflow-x": "hidden" } }, {
      default: Z(() => [
        V(d(oo), { title: t.title }, null, 8, ["title"]),
        V(d(hr), null, {
          default: Z(() => [
            V(d(U6), null, {
              default: Z(() => [
                V(d(P6), null, {
                  default: Z(() => [
                    t.type === "product" ? (y(), R(he, { key: 0 }, [
                      V(d(Ss), {
                        label: d(u)("widget.list.add.product")
                      }, {
                        default: Z(() => [
                          V(d(er), {
                            modelValue: i.value,
                            "onUpdate:modelValue": w[0] || (w[0] = (E) => i.value = E)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      V(d(Ss), {
                        "is-optional": "",
                        label: d(u)("widget.list.add.category")
                      }, {
                        default: Z(() => [
                          V(d(fd), {
                            modelValue: s.value,
                            "onUpdate:modelValue": w[1] || (w[1] = (E) => s.value = E),
                            options: k.value
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      V(d(Ss), {
                        label: d(u)("widget.list.add.quantity")
                      }, {
                        default: Z(() => [
                          V(d(h3), {
                            modelValue: l.value,
                            "onUpdate:modelValue": w[2] || (w[2] = (E) => l.value = E),
                            min: 1,
                            step: 1,
                            style: { "align-self": "start" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ], 64)) : (y(), _(d(Ss), {
                      key: 1,
                      label: d(u)("widget.list.add.content")
                    }, {
                      default: Z(() => [
                        V(d(G6), {
                          modelValue: i.value,
                          "onUpdate:modelValue": w[3] || (w[3] = (E) => i.value = E),
                          rows: 2
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])),
                    t.type === "task" ? (y(), _(d(Ss), {
                      key: 2,
                      "is-optional": "",
                      label: d(u)("widget.list.add.person")
                    }, {
                      default: Z(() => [
                        V(d(fd), {
                          modelValue: r.value,
                          "onUpdate:modelValue": w[4] || (w[4] = (E) => r.value = E),
                          options: S.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : X("", !0),
                    t.type === "task" ? (y(), _(d(Ss), {
                      key: 3,
                      "is-optional": "",
                      label: d(u)("widget.list.add.due")
                    }, {
                      default: Z(() => [
                        V(d(Z6), null, {
                          default: Z(() => [
                            V(d(er), {
                              modelValue: a.value,
                              "onUpdate:modelValue": w[5] || (w[5] = (E) => a.value = E),
                              type: "date"
                            }, null, 8, ["modelValue"]),
                            V(d(_6), { direction: "vertical" }),
                            V(d(er), {
                              modelValue: o.value,
                              "onUpdate:modelValue": w[6] || (w[6] = (E) => o.value = E),
                              type: "time"
                            }, null, 8, ["modelValue"]),
                            V(d(hi), {
                              "icon-leading": "trash",
                              onClick: w[7] || (w[7] = (E) => b())
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : X("", !0),
                    V(d(rb), { style: { width: "100%" } }, {
                      default: Z(() => [
                        V(d(hi), {
                          label: d(u)("widget.list.add.cancel"),
                          style: { "flex-grow": "1" },
                          onClick: w[8] || (w[8] = (E) => L())
                        }, null, 8, ["label"]),
                        V(d(ao), {
                          disabled: !p.value,
                          label: t.saveLabel,
                          style: { "flex-grow": "1" },
                          onClick: w[9] || (w[9] = (E) => T())
                        }, null, 8, ["disabled", "label"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), cS = /* @__PURE__ */ H({
  __name: "ListAdd",
  props: {
    deviceId: {},
    type: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = Wn(), i = kn({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = Ce(() => {
      switch (t.type) {
        case "note":
          return s("widget.list.add.title.note");
        case "product":
          return s("widget.list.add.title.product");
        case "task":
          return s("widget.list.add.title.task");
      }
    });
    async function a() {
      n("close");
    }
    async function o() {
      await Homey.api("POST", `/${t.deviceId}/items`, {
        type: t.type,
        category: i.category,
        content: i.content,
        personId: i.person,
        dueDate: i.dueDate,
        dueTime: i.dueTime,
        quantity: i.quantity
      }), await a();
    }
    return (l, u) => (y(), _(Bm, {
      category: i.category,
      "onUpdate:category": u[0] || (u[0] = (c) => i.category = c),
      content: i.content,
      "onUpdate:content": u[1] || (u[1] = (c) => i.content = c),
      person: i.person,
      "onUpdate:person": u[2] || (u[2] = (c) => i.person = c),
      "due-date": i.dueDate,
      "onUpdate:dueDate": u[3] || (u[3] = (c) => i.dueDate = c),
      "due-time": i.dueTime,
      "onUpdate:dueTime": u[4] || (u[4] = (c) => i.dueTime = c),
      quantity: i.quantity,
      "onUpdate:quantity": u[5] || (u[5] = (c) => i.quantity = c),
      "device-id": t.deviceId,
      "save-label": d(s)("widget.list.add.add"),
      title: r.value,
      type: t.type,
      onClose: u[6] || (u[6] = (c) => a()),
      onSave: u[7] || (u[7] = (c) => o())
    }, null, 8, ["category", "content", "person", "due-date", "due-time", "quantity", "device-id", "save-label", "title", "type"]));
  }
}), dS = /* @__PURE__ */ H({
  __name: "ListEdit",
  props: {
    deviceId: {},
    item: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = Wn(), i = kn({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = Ce(() => {
      switch (t.item.type) {
        case "note":
          return s("widget.list.edit.title.note");
        case "product":
          return s("widget.list.edit.title.product");
        case "task":
          return s("widget.list.edit.title.task");
      }
    });
    async function a() {
      n("close");
    }
    async function o() {
      await Homey.api("POST", `/${t.deviceId}/items/${t.item.id}`, {
        category: i.category,
        content: i.content,
        personId: i.person,
        dueDate: i.dueDate,
        dueTime: i.dueTime,
        quantity: i.quantity
      }), await a();
    }
    return Re(() => t.item, (l) => {
      i.category = l.category, i.content = l.content, i.person = l.person?.id, i.dueDate = l.dueDate, i.dueTime = l.dueTime, i.quantity = l.quantity;
    }, { immediate: !0 }), (l, u) => (y(), _(Bm, {
      category: i.category,
      "onUpdate:category": u[0] || (u[0] = (c) => i.category = c),
      content: i.content,
      "onUpdate:content": u[1] || (u[1] = (c) => i.content = c),
      person: i.person,
      "onUpdate:person": u[2] || (u[2] = (c) => i.person = c),
      "due-date": i.dueDate,
      "onUpdate:dueDate": u[3] || (u[3] = (c) => i.dueDate = c),
      "due-time": i.dueTime,
      "onUpdate:dueTime": u[4] || (u[4] = (c) => i.dueTime = c),
      quantity: i.quantity,
      "onUpdate:quantity": u[5] || (u[5] = (c) => i.quantity = c),
      "device-id": t.deviceId,
      "save-label": d(s)("widget.list.add.save"),
      title: r.value,
      type: t.item.type,
      onClose: u[6] || (u[6] = (c) => a()),
      onSave: u[7] || (u[7] = (c) => o())
    }, null, 8, ["category", "content", "person", "due-date", "due-time", "quantity", "device-id", "save-label", "title", "type"]));
  }
}), _m = /* @__PURE__ */ H({
  __name: "ButtonPrimary",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e;
    function s(i) {
      n("click", i);
    }
    return (i, r) => (y(), R("button", {
      class: "homey-button-primary-full",
      type: "button",
      onClick: s
    }, ve(t.label), 1));
  }
}), CC = /* @__PURE__ */ H({
  __name: "ButtonTransparent",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e;
    function s(i) {
      n("click", i);
    }
    return (i, r) => (y(), R("button", {
      class: "homey-button-transparent",
      type: "button",
      onClick: s
    }, ve(t.label), 1));
  }
});
const xu = /* @__PURE__ */ Symbol(), Eu = /* @__PURE__ */ Symbol(), fS = ["title", "onClick"];
var hS = /* @__PURE__ */ H({
  __name: "ColorPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = wt(t, "modelValue"), n = Wn(), s = Dn(xu);
    return (i, r) => (y(), R("div", {
      class: x(i.$style.colorSelect)
    }, [
      (y(!0), R(he, null, It(d(s), (a) => (y(), R("div", {
        class: x(e.value === a.hex ? i.$style.colorSelectItemActive : i.$style.colorSelectItem),
        style: gt({ "--color": a.hex }),
        title: d(n)(a.label),
        onClick: (o) => e.value = a.hex
      }, null, 14, fS))), 256))
    ], 2));
  }
});
const mS = "colorSelect", pS = "colorSelectItem", gS = "colorSelectItemActive colorSelectItem";
var yS = { colorSelect: mS, colorSelectItem: pS, colorSelectItemActive: gS }, je = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, i] of e)
    n[s] = i;
  return n;
};
const vS = {
  $style: yS
};
var Rm = /* @__PURE__ */ je(hS, [["__cssModules", vS]]);
const kS = { class: "homey-form" };
var zm = /* @__PURE__ */ H({
  __name: "Form",
  setup(t) {
    return (e, n) => (y(), R("form", kS, [
      ae(e.$slots, "default")
    ]));
  }
});
const bS = { class: "homey-form-fieldset" }, wS = { class: "homey-form-legend" }, SS = {
  key: 0,
  class: "homey-form-group",
  style: { "margin-top": "6px" }
}, TS = {
  key: 1,
  class: "homey-form-group"
}, IS = { class: "homey-form-group" };
var nr = /* @__PURE__ */ H({
  __name: "FormGroup",
  props: {
    description: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (y(), R("fieldset", bS, [
      be("legend", wS, ve(t.title), 1),
      t.description ? (y(), R("div", SS, ve(t.description), 1)) : X("", !0),
      e.$slots.before ? (y(), R("div", TS, [
        ae(e.$slots, "before")
      ])) : X("", !0),
      be("div", IS, [
        ae(e.$slots, "default")
      ])
    ]));
  }
});
const $S = ["for"], CS = ["disabled", "id", "type"];
var Wm = /* @__PURE__ */ H({
  __name: "FormInput",
  props: /* @__PURE__ */ nn({
    disabled: { type: Boolean },
    label: {},
    type: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = wt(t, "modelValue"), n = ru();
    return (s, i) => (y(), R(he, null, [
      t.label ? (y(), R("label", {
        key: 0,
        class: "homey-form-label",
        for: d(n)
      }, ve(t.label), 9, $S)) : X("", !0),
      su(be("input", {
        class: "homey-form-input",
        disabled: t.disabled,
        id: d(n),
        type: t.type,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.value = r)
      }, null, 8, CS), [
        [kp, e.value]
      ])
    ], 64));
  }
}), xS = /* @__PURE__ */ H({
  __name: "Icon",
  props: {
    icon: {}
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(e.$style.uiIcon),
      "data-icon": "",
      style: gt({
        "--icon": JSON.stringify(t.icon),
        "--icon-secondary": JSON.stringify(t.icon + t.icon)
      })
    }, null, 6));
  }
});
const ES = "uiIcon";
var FS = { uiIcon: ES };
const OS = {
  $style: FS
};
var Ds = /* @__PURE__ */ je(xS, [["__cssModules", OS]]), MS = /* @__PURE__ */ H({
  __name: "IconPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = wt(t, "modelValue"), n = Wn(), s = Dn(Eu), i = te(""), r = Ce(() => {
      const a = d(i).toLowerCase().trim();
      return d(s).filter((o) => a.length > 0 && o.name.toLowerCase().includes(a) || a.length === 0 && o.unicode === d(e)).slice(0, 54);
    });
    return (a, o) => (y(), R(he, null, [
      V(Wm, {
        modelValue: i.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l),
        label: d(n)("element.search_icon"),
        type: "text"
      }, null, 8, ["modelValue", "label"]),
      be("div", {
        class: x(a.$style.iconSelect)
      }, [
        (y(!0), R(he, null, It(r.value, (l) => (y(), _(Ds, {
          class: x(e.value === l.unicode ? a.$style.iconSelectItemActive : a.$style.iconSelectItem),
          icon: l.unicode,
          title: l.name,
          onClick: (u) => e.value = l.unicode
        }, null, 8, ["class", "icon", "title", "onClick"]))), 256))
      ], 2)
    ], 64));
  }
});
const DS = "iconSelect", AS = "iconSelectItem", LS = "iconSelectItemActive iconSelectItem";
var NS = { iconSelect: DS, iconSelectItem: AS, iconSelectItemActive: LS };
const VS = {
  $style: NS
};
var Pm = /* @__PURE__ */ je(MS, [["__cssModules", VS]]), xC = /* @__PURE__ */ H({
  __name: "ScrollContainer",
  props: {
    tag: { default: "div" }
  },
  setup(t) {
    const e = te(null), n = te(!1), s = te(0), i = te(0), r = te(0), a = te([]), o = te(0), l = te(0);
    let u = null;
    Vs(() => {
      f();
    });
    function c(L, T) {
      const E = (1 - 1 / (Math.abs(L) * 0.55 / T + 1)) * T;
      return Math.sign(L) * E;
    }
    function f() {
      u && (cancelAnimationFrame(u), u = null);
    }
    function m() {
      const L = d(a);
      if (L.length === 0)
        return 0;
      let T = 0, D = 0;
      for (let w = 0; w < L.length; w++) {
        const E = w + 1;
        D += L[w] * E, T += E;
      }
      return D / T;
    }
    function h() {
      const L = d(e);
      if (!L)
        return;
      const T = d(r), D = L.clientHeight, w = c(T, D), E = Math.min(400, Math.max(200, Math.abs(w) * 3));
      L.style.transition = `transform ${E}ms cubic-bezier(0.25, 0.1, 0.25, 1)`, L.style.transform = "translateY(0)", r.value = 0;
    }
    function p(L) {
      const T = d(e);
      if (!T)
        return;
      const D = T.clientHeight;
      let w = L, E = performance.now();
      function U(N) {
        const O = Math.min((N - E) / 16.67, 2);
        E = N;
        const P = T.scrollHeight - T.clientHeight;
        w *= Math.pow(0.95, O);
        const W = T.scrollTop + w * O;
        if (W < 0) {
          T.scrollTop = 0;
          const ne = Math.min(D * 0.3, Math.abs(w) * 8);
          r.value = ne;
          const me = c(ne, D);
          T.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => h());
        } else if (W > P) {
          T.scrollTop = P;
          const ne = -Math.min(D * 0.3, Math.abs(w) * 8);
          r.value = ne;
          const me = c(ne, D);
          T.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => h());
        } else
          T.scrollTop = W, Math.abs(w) > 0.1 && (u = requestAnimationFrame(U));
      }
      u = requestAnimationFrame(U);
    }
    function k(L) {
      f();
      const T = d(e);
      if (!T)
        return;
      const D = L.touches[0];
      s.value = D.clientY, n.value = !0, o.value = D.clientY, l.value = Date.now(), a.value = [], i.value = T.scrollTop, T.style.transition = "none", r.value === 0 && (T.style.transform = "translateY(0)"), L.preventDefault();
    }
    function S(L) {
      if (!d(n))
        return;
      const T = d(e);
      if (!T)
        return;
      const D = L.touches[0], w = Date.now(), E = w - d(l);
      if (E > 0 && E < 100) {
        const W = (d(o) - D.clientY) / E * 16;
        a.value.push(W), a.value.length > 5 && a.value.shift();
      }
      o.value = D.clientY, l.value = w;
      const U = d(s) - D.clientY, N = T.scrollHeight - T.clientHeight, O = d(i) + U, P = T.clientHeight;
      if (O < 0) {
        T.scrollTop = 0;
        const Q = -O;
        r.value = Q;
        const W = c(Q, P);
        T.style.transform = `translateY(${W}px)`;
      } else if (O > N) {
        T.scrollTop = N;
        const Q = -(O - N);
        r.value = Q;
        const W = c(Q, P);
        T.style.transform = `translateY(${W}px)`;
      } else
        T.scrollTop = O, r.value = 0, T.style.transform = "translateY(0)";
      L.preventDefault();
    }
    function b(L) {
      if (!n.value)
        return;
      const T = e.value, D = m(), w = r.value !== 0;
      n.value = !1, T && w ? h() : T && Math.abs(D) > 0.5 && p(D), L.preventDefault();
    }
    return (L, T) => (y(), _(ou(t.tag), {
      ref_key: "containerRef",
      ref: e,
      onTouchstart: k,
      onTouchmove: S,
      onTouchend: b,
      onTouchcancel: b
    }, {
      default: Z(() => [
        ae(L.$slots, "default")
      ]),
      _: 3
    }, 544));
  }
}), BS = /* @__PURE__ */ H({
  __name: "ListHeader",
  props: {
    color: {},
    icon: {},
    name: {}
  },
  emits: ["add", "addNote"],
  setup(t, { emit: e }) {
    const n = e;
    function s() {
      n("add");
    }
    function i() {
      n("addNote");
    }
    return (r, a) => (y(), R("div", {
      class: x(r.$style.listHeader)
    }, [
      V(d(Ds), {
        class: x(r.$style.listHeaderIcon),
        icon: t.icon,
        style: gt({
          "--color": t.color
        })
      }, null, 8, ["class", "icon", "style"]),
      be("div", {
        class: x(["homey-text-bold", r.$style.listHeaderName])
      }, ve(t.name), 3),
      be("button", {
        class: x(r.$style.listHeaderAdd),
        onClick: a[0] || (a[0] = (o) => i())
      }, [
        V(d(Ds), {
          class: x(r.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2),
      be("button", {
        class: x(r.$style.listHeaderAdd),
        onClick: a[1] || (a[1] = (o) => s())
      }, [
        V(d(Ds), {
          class: x(r.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
});
const _S = "listHeader", RS = "listHeaderIcon", zS = "listHeaderName", WS = "listHeaderAdd", PS = "listHeaderAddIcon";
var HS = { listHeader: _S, listHeaderIcon: RS, listHeaderName: zS, listHeaderAdd: WS, listHeaderAddIcon: PS };
const US = {
  $style: HS
};
var ZS = /* @__PURE__ */ je(BS, [["__cssModules", US]]), qS = /* @__PURE__ */ H({
  __name: "ListLoading",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(e.$style.listLoading)
    }, [
      V(d(us))
    ], 2));
  }
});
const GS = "listLoading";
var YS = { listLoading: GS };
const jS = {
  $style: YS
};
var JS = /* @__PURE__ */ je(qS, [["__cssModules", jS]]), KS = /* @__PURE__ */ H({
  __name: "ListItemCategory",
  props: {
    icon: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(e.$style.listItemCategory)
    }, [
      t.icon ? (y(), _(d(pt), {
        key: 0,
        class: x(e.$style.listItemCategoryIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : X("", !0),
      be("span", null, ve(t.name), 1)
    ], 2));
  }
});
const QS = "listItemCategory", XS = "listItemCategoryIcon";
var eT = { listItemCategory: QS, listItemCategoryIcon: XS };
const tT = {
  $style: eT
};
var pd = /* @__PURE__ */ je(KS, [["__cssModules", tT]]);
const nT = ["aria-checked"];
var sT = /* @__PURE__ */ H({
  __name: "ListItem",
  props: {
    completable: { type: Boolean },
    direction: { default: "vertical" },
    icon: {},
    item: {},
    tappable: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      "aria-checked": t.item ? "checked" in t.item && t.item.checked ? "true" : "false" : void 0,
      class: x([
        t.direction === "horizontal" ? e.$style.listItemHorizontal : e.$style.listItemVertical,
        t.completable && e.$style.isCompletable,
        t.tappable && e.$style.isTappable
      ])
    }, [
      V(Ns, {
        mode: "out-in",
        name: "check"
      }, {
        default: Z(() => [
          (y(), _(d(Ds), {
            key: t.icon,
            class: x(e.$style.listItemIcon),
            icon: t.icon
          }, null, 8, ["class", "icon"]))
        ]),
        _: 1
      }),
      be("div", {
        class: x(e.$style.listItemBody)
      }, [
        ae(e.$slots, "default")
      ], 2)
    ], 10, nT));
  }
});
const iT = "listItem", rT = "isTappable", aT = "listItemBody", oT = "listItemIcon", lT = "listItemHorizontal listItem", uT = "listItemVertical listItem", cT = "isCompletable";
var dT = { listItem: iT, isTappable: rT, listItemBody: aT, listItemIcon: oT, listItemHorizontal: lT, listItemVertical: uT, isCompletable: cT };
const fT = {
  $style: dT
};
var uo = /* @__PURE__ */ je(sT, [["__cssModules", fT]]), hT = /* @__PURE__ */ H({
  __name: "ListItemContent",
  props: {
    grow: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(t.grow ? e.$style.listItemContentGrow : e.$style.listItemContent),
      "data-content": ""
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const mT = "listItemContent", pT = "listItemContentGrow listItemContent";
var gT = { listItemContent: mT, listItemContentGrow: pT };
const yT = {
  $style: gT
};
var co = /* @__PURE__ */ je(hT, [["__cssModules", yT]]), vT = /* @__PURE__ */ H({
  __name: "ListItemEmpty",
  setup(t) {
    const e = Wn();
    return (n, s) => (y(), _(uo, {
      class: x(n.$style.listItemEmpty),
      icon: ""
    }, {
      default: Z(() => [
        V(co, null, {
          default: Z(() => [
            gr(ve(d(e)("widget.list.no_items")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const kT = "listItemEmpty";
var bT = { listItemEmpty: kT };
const wT = {
  $style: bT
};
var ST = /* @__PURE__ */ je(vT, [["__cssModules", wT]]), TT = /* @__PURE__ */ H({
  __name: "ListItemMount",
  props: {
    longPressDuration: { default: 300 }
  },
  emits: ["longPress", "remove", "tap"],
  setup(t, { emit: e }) {
    const n = e, s = te(!1), i = te(!1), r = te(0), a = te(0), o = te(0), l = te(0), u = te(!0), c = te(!1), f = te(null), m = te(!1), h = Ce(() => s.value ? r.value - o.value > 180 : !1), p = Ce(() => {
      if (!s.value)
        return i.value ? -90 : 0;
      const D = r.value - o.value, w = 90, E = 0.3;
      if (D <= 0)
        return 0;
      if (D <= w)
        return -D;
      const U = D - w;
      return -(w + U * E);
    });
    function k() {
      d(f) && (clearTimeout(d(f)), f.value = null);
    }
    function S() {
      i.value = !1, n("remove");
    }
    function b(D) {
      if (d(i))
        return;
      const w = D.touches[0];
      r.value = w.clientX, a.value = w.clientY, o.value = w.clientX, l.value = w.clientY, s.value = !0, u.value = !0, m.value = !1, c.value = D.target.closest("[data-interactive]") !== null, k(), f.value = setTimeout(() => {
        d(u) && !d(c) && (m.value = !0, n("longPress"));
      }, t.longPressDuration);
    }
    function L(D) {
      if (!d(s))
        return;
      const w = D.touches[0];
      o.value = w.clientX, l.value = w.clientY;
      const E = Math.abs(o.value - r.value), U = Math.abs(l.value - a.value);
      (E > 10 || U > 10) && (u.value = !1, k()), E > U && E > 5 && D.preventDefault();
    }
    function T(D) {
      if (k(), d(i)) {
        if (D.target.closest("[data-delete-button]") !== null)
          return;
        setTimeout(() => i.value = !1, 50), D.stopPropagation();
        return;
      }
      if (!d(s))
        return;
      s.value = !1;
      const w = r.value - o.value;
      if (d(u) && !d(c) && !d(m)) {
        n("tap");
        return;
      }
      if (w > 180) {
        n("remove");
        return;
      }
      i.value = w > 45;
    }
    return Re(i, (D, w, E) => {
      if (!D)
        return;
      const U = setTimeout(() => {
        i.value = !1;
      }, 3e3);
      E(() => clearTimeout(U));
    }), (D, w) => (y(), R("div", {
      class: x([
        D.$style.listItemMount,
        h.value && D.$style.isDestructive,
        s.value && D.$style.isDragging,
        i.value && D.$style.isOpen
      ]),
      style: gt({
        "--x": p.value + "px"
      })
    }, [
      be("div", {
        class: x(D.$style.listItemMountBody),
        onTouchstart: b,
        onTouchmove: L,
        onTouchend: T,
        onTouchcancel: T
      }, [
        ae(D.$slots, "default")
      ], 34),
      be("div", {
        class: x(D.$style.listItemMountRemove),
        "data-delete-button": "",
        onClick: w[0] || (w[0] = (E) => S()),
        onTouchend: w[1] || (w[1] = hu((E) => S(), ["stop", "prevent"]))
      }, [
        V(d(Ds), {
          class: x(D.$style.listItemMountRemoveIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 34)
    ], 6));
  }
});
const IT = "listItemMount", $T = "listItemMountBody", CT = "listItemMountRemove", xT = "isDragging", ET = "isOpen", FT = "isDestructive", OT = "listItemMountRemoveIcon";
var MT = { listItemMount: IT, listItemMountBody: $T, listItemMountRemove: CT, isDragging: xT, isOpen: ET, isDestructive: FT, listItemMountRemoveIcon: OT };
const DT = {
  $style: MT
};
var AT = /* @__PURE__ */ je(TT, [["__cssModules", DT]]), LT = /* @__PURE__ */ H({
  __name: "ListItems",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(e.$style.listItems)
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const NT = "listItems";
var VT = { listItems: NT };
const BT = {
  $style: VT
};
var gd = /* @__PURE__ */ je(LT, [["__cssModules", BT]]), _T = /* @__PURE__ */ H({
  __name: "ListItemNote",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (y(), _(uo, {
      class: x(e.$style.listItemNote),
      icon: "",
      item: t.item
    }, {
      default: Z(() => [
        V(co, null, {
          default: Z(() => [
            gr(ve(t.item.content), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "item"]));
  }
});
const RT = "listItemNote";
var zT = { listItemNote: RT };
const WT = {
  $style: zT
};
var PT = /* @__PURE__ */ je(_T, [["__cssModules", WT]]), HT = /* @__PURE__ */ H({
  __name: "ListItemButton",
  props: {
    icon: {}
  },
  emits: ["tap"],
  setup(t, { emit: e }) {
    const n = e;
    function s() {
      n("tap");
    }
    return (i, r) => (y(), R("button", {
      class: x(i.$style.listItemButton),
      "data-interactive": "",
      onTouchend: hu(s, ["stop", "prevent"])
    }, [
      V(d(Ds), {
        class: x(i.$style.listItemButtonIcon),
        icon: t.icon
      }, null, 8, ["class", "icon"])
    ], 34));
  }
});
const UT = "listItemButton", ZT = "listItemButtonIcon";
var qT = { listItemButton: UT, listItemButtonIcon: ZT };
const GT = {
  $style: qT
};
var yd = /* @__PURE__ */ je(HT, [["__cssModules", GT]]), YT = /* @__PURE__ */ H({
  __name: "ListItemButtons",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(e.$style.listItemButtons)
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const jT = "listItemButtons";
var JT = { listItemButtons: jT };
const KT = {
  $style: JT
};
var QT = /* @__PURE__ */ je(YT, [["__cssModules", KT]]), XT = /* @__PURE__ */ H({
  __name: "ListItemQuantity",
  props: {
    quantity: {}
  },
  setup(t) {
    const e = new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }), n = Ce(() => e.format(t.quantity));
    return (s, i) => (y(), R("div", {
      class: x(s.$style.listItemQuantity)
    }, ve(n.value) + "x ", 3));
  }
});
const eI = "listItemQuantity";
var tI = { listItemQuantity: eI };
const nI = {
  $style: tI
};
var sI = /* @__PURE__ */ je(XT, [["__cssModules", nI]]), iI = /* @__PURE__ */ H({
  __name: "ListItemProduct",
  props: {
    item: {}
  },
  emits: ["decrease", "increase"],
  setup(t, { emit: e }) {
    const n = e;
    function s() {
      n("decrease");
    }
    function i() {
      n("increase");
    }
    return (r, a) => (y(), _(uo, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item,
      direction: "horizontal"
    }, {
      default: Z(() => [
        V(co, null, {
          default: Z(() => [
            gr(ve(t.item.content), 1)
          ]),
          _: 1
        }),
        V(Ns, { name: "check" }, {
          default: Z(() => [
            t.item.quantity && t.item.quantity > 1 ? (y(), _(sI, {
              key: 0,
              quantity: t.item.quantity
            }, null, 8, ["quantity"])) : X("", !0)
          ]),
          _: 1
        }),
        V(d(ro)),
        V(Ns, { name: "check" }, {
          default: Z(() => [
            t.item.checked ? X("", !0) : (y(), _(QT, { key: 0 }, {
              default: Z(() => [
                t.item.quantity && t.item.quantity > 1 ? (y(), _(yd, {
                  key: 0,
                  icon: "",
                  onTap: a[0] || (a[0] = (o) => s())
                })) : X("", !0),
                V(yd, {
                  icon: "+",
                  onTap: a[1] || (a[1] = (o) => i())
                })
              ]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["icon", "item"]));
  }
}), rI = /* @__PURE__ */ H({
  __name: "ListItemFooter",
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(e.$style.listItemFooter)
    }, [
      ae(e.$slots, "default")
    ], 2));
  }
});
const aI = "listItemFooter";
var oI = { listItemFooter: aI };
const lI = {
  $style: oI
};
var uI = /* @__PURE__ */ je(rI, [["__cssModules", lI]]);
const cI = ["src", "alt"];
var dI = /* @__PURE__ */ H({
  __name: "ListItemPerson",
  props: {
    image: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (y(), R("div", {
      class: x(e.$style.listItemPerson)
    }, [
      t.image ? (y(), R("img", {
        key: 0,
        class: x(e.$style.listItemPersonImage),
        src: t.image,
        alt: t.name
      }, null, 10, cI)) : X("", !0),
      be("span", null, ve(t.name), 1)
    ], 2));
  }
});
const fI = "listItemPerson", hI = "listItemPersonImage";
var mI = { listItemPerson: fI, listItemPersonImage: hI };
const pI = {
  $style: mI
};
var gI = /* @__PURE__ */ je(dI, [["__cssModules", pI]]);
class Ws extends Error {
}
class yI extends Ws {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class vI extends Ws {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class kI extends Ws {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class Xs extends Ws {
}
class Hm extends Ws {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ct extends Ws {
}
class qn extends Ws {
  constructor() {
    super("Zone is an abstract class");
  }
}
const j = "numeric", rn = "short", Ot = "long", xa = {
  year: j,
  month: j,
  day: j
}, Um = {
  year: j,
  month: rn,
  day: j
}, bI = {
  year: j,
  month: rn,
  day: j,
  weekday: rn
}, Zm = {
  year: j,
  month: Ot,
  day: j
}, qm = {
  year: j,
  month: Ot,
  day: j,
  weekday: Ot
}, Gm = {
  hour: j,
  minute: j
}, Ym = {
  hour: j,
  minute: j,
  second: j
}, jm = {
  hour: j,
  minute: j,
  second: j,
  timeZoneName: rn
}, Jm = {
  hour: j,
  minute: j,
  second: j,
  timeZoneName: Ot
}, Km = {
  hour: j,
  minute: j,
  hourCycle: "h23"
}, Qm = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23"
}, Xm = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23",
  timeZoneName: rn
}, e1 = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23",
  timeZoneName: Ot
}, t1 = {
  year: j,
  month: j,
  day: j,
  hour: j,
  minute: j
}, n1 = {
  year: j,
  month: j,
  day: j,
  hour: j,
  minute: j,
  second: j
}, s1 = {
  year: j,
  month: rn,
  day: j,
  hour: j,
  minute: j
}, i1 = {
  year: j,
  month: rn,
  day: j,
  hour: j,
  minute: j,
  second: j
}, wI = {
  year: j,
  month: rn,
  day: j,
  weekday: rn,
  hour: j,
  minute: j
}, r1 = {
  year: j,
  month: Ot,
  day: j,
  hour: j,
  minute: j,
  timeZoneName: rn
}, a1 = {
  year: j,
  month: Ot,
  day: j,
  hour: j,
  minute: j,
  second: j,
  timeZoneName: rn
}, o1 = {
  year: j,
  month: Ot,
  day: j,
  weekday: Ot,
  hour: j,
  minute: j,
  timeZoneName: Ot
}, l1 = {
  year: j,
  month: Ot,
  day: j,
  weekday: Ot,
  hour: j,
  minute: j,
  second: j,
  timeZoneName: Ot
};
class $r {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new qn();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new qn();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new qn();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, n) {
    throw new qn();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    throw new qn();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new qn();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new qn();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new qn();
  }
}
let Qo = null;
class fo extends $r {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Qo === null && (Qo = new fo()), Qo;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: n, locale: s }) {
    return k1(e, n, s);
  }
  /** @override **/
  formatOffset(e, n) {
    return sr(this.offset(e), n);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
const _l = /* @__PURE__ */ new Map();
function SI(t) {
  let e = _l.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: t,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  }), _l.set(t, e)), e;
}
const TI = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function II(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, o, l, u, c] = s;
  return [a, i, r, o, l, u, c];
}
function $I(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], o = TI[r];
    r === "era" ? s[o] = a : re(o) || (s[o] = parseInt(a, 10));
  }
  return s;
}
const Xo = /* @__PURE__ */ new Map();
class Bn extends $r {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = Xo.get(e);
    return n === void 0 && Xo.set(e, n = new Bn(e)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Xo.clear(), _l.clear();
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = Bn.isValidZone(e);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !1;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, { format: n, locale: s }) {
    return k1(e, n, s, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    return sr(this.offset(e), n);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    if (!this.valid) return NaN;
    const n = new Date(e);
    if (isNaN(n)) return NaN;
    const s = SI(this.name);
    let [i, r, a, o, l, u, c] = s.formatToParts ? $I(s, n) : II(s, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const m = mo({
      year: i,
      month: r,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: c,
      millisecond: 0
    });
    let h = +n;
    const p = h % 1e3;
    return h -= p >= 0 ? p : 1e3 + p, (m - h) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
}
let vd = {};
function CI(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = vd[n];
  return s || (s = new Intl.ListFormat(t, e), vd[n] = s), s;
}
const Rl = /* @__PURE__ */ new Map();
function zl(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Rl.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), Rl.set(n, s)), s;
}
const Wl = /* @__PURE__ */ new Map();
function xI(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Wl.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), Wl.set(n, s)), s;
}
const Pl = /* @__PURE__ */ new Map();
function EI(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = Pl.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), Pl.set(i, r)), r;
}
let Pi = null;
function FI() {
  return Pi || (Pi = new Intl.DateTimeFormat().resolvedOptions().locale, Pi);
}
const Hl = /* @__PURE__ */ new Map();
function u1(t) {
  let e = Hl.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), Hl.set(t, e)), e;
}
const Ul = /* @__PURE__ */ new Map();
function OI(t) {
  let e = Ul.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...c1, ...e }), Ul.set(t, e);
  }
  return e;
}
function MI(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = zl(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      s = zl(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function DI(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function AI(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = se.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function LI(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const s = se.utc(2016, 11, 13 + n);
    e.push(t(s));
  }
  return e;
}
function Zr(t, e, n, s) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : s(e);
}
function NI(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || u1(t.locale).numberingSystem === "latn";
}
class VI {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...s };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = xI(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Au(e, 3);
      return Ke(n, this.padTo);
    }
  }
}
class BI {
  constructor(e, n, s) {
    this.opts = s, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Bn.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || i, this.dtf = zl(n, r);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((n) => {
      if (n.type === "timeZoneName") {
        const s = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...n,
          value: s
        };
      } else
        return n;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class _I {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && y1() && (this.rtf = EI(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : a8(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const c1 = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Fe {
  static fromOpts(e) {
    return Fe.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, s, i, r = !1) {
    const a = e || Ue.defaultLocale, o = a || (r ? "en-US" : FI()), l = n || Ue.defaultNumberingSystem, u = s || Ue.defaultOutputCalendar, c = ql(i) || Ue.defaultWeekSettings;
    return new Fe(o, l, u, c, a);
  }
  static resetCache() {
    Pi = null, Rl.clear(), Wl.clear(), Pl.clear(), Hl.clear(), Ul.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return Fe.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, o, l] = MI(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = s || l || null, this.weekSettings = i, this.intl = DI(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = NI(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Fe.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      ql(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, n = !1) {
    return Zr(this, e, S1, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (o) => this.dtFormatter(o, i).format() : (o) => this.extract(o, i, "month");
        this.monthsCache[r][e] = AI(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return Zr(this, e, $1, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = LI(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Zr(
      this,
      void 0,
      () => C1,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [se.utc(2016, 11, 13, 9), se.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Zr(this, e, x1, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [se.utc(-40, 1, 1), se.utc(2017, 1, 1)].map(
        (s) => this.extract(s, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, s) {
    const i = this.dtFormatter(e, n), r = i.formatToParts(), a = r.find((o) => o.type.toLowerCase() === s);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new VI(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new BI(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new _I(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return CI(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || u1(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : v1() ? OI(this.locale) : c1;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let el = null;
class Tt extends $r {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return el === null && (el = new Tt(0)), el;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? Tt.utcInstance : new Tt(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const n = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new Tt(po(n[1], n[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${sr(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${sr(-this.fixed, "narrow")}`;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, n) {
    return sr(this.fixed, n);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
}
class RI extends $r {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function ss(t, e) {
  if (re(t) || t === null)
    return e;
  if (t instanceof $r)
    return t;
  if (ZI(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? fo.instance : n === "utc" || n === "gmt" ? Tt.utcInstance : Tt.parseSpecifier(n) || Bn.create(t);
  } else return rs(t) ? Tt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new RI(t);
}
const Fu = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, kd = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, zI = Fu.hanidec.replace(/[\[|\]]/g, "").split("");
function WI(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search(Fu.hanidec) !== -1)
        e += zI.indexOf(t[n]);
      else
        for (const i in kd) {
          const [r, a] = kd[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const Zl = /* @__PURE__ */ new Map();
function PI() {
  Zl.clear();
}
function qt({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = Zl.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), Zl.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${Fu[n]}${e}`), s.set(e, i)), i;
}
let bd = () => Date.now(), wd = "system", Sd = null, Td = null, Id = null, $d = 60, Cd, xd = null;
class Ue {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return bd;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    bd = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    wd = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return ss(wd, fo.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Sd;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Sd = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Td;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Td = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Id;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Id = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return xd;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    xd = ql(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return $d;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    $d = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Cd;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Cd = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Fe.resetCache(), Bn.resetCache(), se.resetCache(), PI();
  }
}
class Kt {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const d1 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], f1 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Rt(t, e) {
  return new Kt(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Ou(t, e, n) {
  const s = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const i = s.getUTCDay();
  return i === 0 ? 7 : i;
}
function h1(t, e, n) {
  return n + (Cr(t) ? f1 : d1)[e - 1];
}
function m1(t, e) {
  const n = Cr(t) ? f1 : d1, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function Mu(t, e) {
  return (t - e + 7) % 7 + 1;
}
function Ea(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = h1(s, i, r), o = Mu(Ou(s, i, r), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = s - 1, l = mr(u, e, n)) : l > mr(s, e, n) ? (u = s + 1, l = 1) : u = s, { weekYear: u, weekNumber: l, weekday: o, ...go(t) };
}
function Ed(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = Mu(Ou(s, 1, e), n), o = li(s);
  let l = i * 7 + r - a - 7 + e, u;
  l < 1 ? (u = s - 1, l += li(u)) : l > o ? (u = s + 1, l -= li(s)) : u = s;
  const { month: c, day: f } = m1(u, l);
  return { year: u, month: c, day: f, ...go(t) };
}
function tl(t) {
  const { year: e, month: n, day: s } = t, i = h1(e, n, s);
  return { year: e, ordinal: i, ...go(t) };
}
function Fd(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = m1(e, n);
  return { year: e, month: s, day: i, ...go(t) };
}
function Od(t, e) {
  if (!re(t.localWeekday) || !re(t.localWeekNumber) || !re(t.localWeekYear)) {
    if (!re(t.weekday) || !re(t.weekNumber) || !re(t.weekYear))
      throw new Xs(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return re(t.localWeekday) || (t.weekday = t.localWeekday), re(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), re(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function HI(t, e = 4, n = 1) {
  const s = ho(t.weekYear), i = zt(
    t.weekNumber,
    1,
    mr(t.weekYear, e, n)
  ), r = zt(t.weekday, 1, 7);
  return s ? i ? r ? !1 : Rt("weekday", t.weekday) : Rt("week", t.weekNumber) : Rt("weekYear", t.weekYear);
}
function UI(t) {
  const e = ho(t.year), n = zt(t.ordinal, 1, li(t.year));
  return e ? n ? !1 : Rt("ordinal", t.ordinal) : Rt("year", t.year);
}
function p1(t) {
  const e = ho(t.year), n = zt(t.month, 1, 12), s = zt(t.day, 1, Fa(t.year, t.month));
  return e ? n ? s ? !1 : Rt("day", t.day) : Rt("month", t.month) : Rt("year", t.year);
}
function g1(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = zt(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = zt(n, 0, 59), o = zt(s, 0, 59), l = zt(i, 0, 999);
  return r ? a ? o ? l ? !1 : Rt("millisecond", i) : Rt("second", s) : Rt("minute", n) : Rt("hour", e);
}
function re(t) {
  return typeof t > "u";
}
function rs(t) {
  return typeof t == "number";
}
function ho(t) {
  return typeof t == "number" && t % 1 === 0;
}
function ZI(t) {
  return typeof t == "string";
}
function qI(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function y1() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function v1() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function GI(t) {
  return Array.isArray(t) ? t : [t];
}
function Md(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function YI(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function mi(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function ql(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new ct("Week settings must be an object");
  if (!zt(t.firstDay, 1, 7) || !zt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !zt(e, 1, 7)))
    throw new ct("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function zt(t, e, n) {
  return ho(t) && t >= e && t <= n;
}
function jI(t, e) {
  return t - e * Math.floor(t / e);
}
function Ke(t, e = 2) {
  const n = t < 0;
  let s;
  return n ? s = "-" + ("" + -t).padStart(e, "0") : s = ("" + t).padStart(e, "0"), s;
}
function Xn(t) {
  if (!(re(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function ks(t) {
  if (!(re(t) || t === null || t === ""))
    return parseFloat(t);
}
function Du(t) {
  if (!(re(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Au(t, e, n = "round") {
  const s = 10 ** e;
  switch (n) {
    case "expand":
      return t > 0 ? Math.ceil(t * s) / s : Math.floor(t * s) / s;
    case "trunc":
      return Math.trunc(t * s) / s;
    case "round":
      return Math.round(t * s) / s;
    case "floor":
      return Math.floor(t * s) / s;
    case "ceil":
      return Math.ceil(t * s) / s;
    default:
      throw new RangeError(`Value rounding ${n} is out of range`);
  }
}
function Cr(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function li(t) {
  return Cr(t) ? 366 : 365;
}
function Fa(t, e) {
  const n = jI(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? Cr(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function mo(t) {
  let e = Date.UTC(
    t.year,
    t.month - 1,
    t.day,
    t.hour,
    t.minute,
    t.second,
    t.millisecond
  );
  return t.year < 100 && t.year >= 0 && (e = new Date(e), e.setUTCFullYear(t.year, t.month - 1, t.day)), +e;
}
function Dd(t, e, n) {
  return -Mu(Ou(t, 1, e), n) + e - 1;
}
function mr(t, e = 4, n = 1) {
  const s = Dd(t, e, n), i = Dd(t + 1, e, n);
  return (li(t) - s + i) / 7;
}
function Gl(t) {
  return t > 99 ? t : t > Ue.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function k1(t, e, n, s = null) {
  const i = new Date(t), r = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  s && (r.timeZone = s);
  const a = { timeZoneName: e, ...r }, o = new Intl.DateTimeFormat(n, a).formatToParts(i).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function po(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + i;
}
function b1(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new ct(`Invalid unit value ${t}`);
  return e;
}
function Oa(t, e) {
  const n = {};
  for (const s in t)
    if (mi(t, s)) {
      const i = t[s];
      if (i == null) continue;
      n[e(s)] = b1(i);
    }
  return n;
}
function sr(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), s = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${Ke(n, 2)}:${Ke(s, 2)}`;
    case "narrow":
      return `${i}${n}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${i}${Ke(n, 2)}${Ke(s, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function go(t) {
  return YI(t, ["hour", "minute", "second", "millisecond"]);
}
const JI = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], w1 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], KI = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function S1(t) {
  switch (t) {
    case "narrow":
      return [...KI];
    case "short":
      return [...w1];
    case "long":
      return [...JI];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const T1 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], I1 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], QI = ["M", "T", "W", "T", "F", "S", "S"];
function $1(t) {
  switch (t) {
    case "narrow":
      return [...QI];
    case "short":
      return [...I1];
    case "long":
      return [...T1];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const C1 = ["AM", "PM"], XI = ["Before Christ", "Anno Domini"], e8 = ["BC", "AD"], t8 = ["B", "A"];
function x1(t) {
  switch (t) {
    case "narrow":
      return [...t8];
    case "short":
      return [...e8];
    case "long":
      return [...XI];
    default:
      return null;
  }
}
function n8(t) {
  return C1[t.hour < 12 ? 0 : 1];
}
function s8(t, e) {
  return $1(e)[t.weekday - 1];
}
function i8(t, e) {
  return S1(e)[t.month - 1];
}
function r8(t, e) {
  return x1(e)[t.year < 0 ? 0 : 1];
}
function a8(t, e, n = "always", s = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, r = ["hours", "minutes", "seconds"].indexOf(t) === -1;
  if (n === "auto" && r) {
    const f = t === "days";
    switch (e) {
      case 1:
        return f ? "tomorrow" : `next ${i[t][0]}`;
      case -1:
        return f ? "yesterday" : `last ${i[t][0]}`;
      case 0:
        return f ? "today" : `this ${i[t][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), l = o === 1, u = i[t], c = s ? l ? u[1] : u[2] || u[1] : l ? i[t][0] : t;
  return a ? `${o} ${c} ago` : `in ${o} ${c}`;
}
function Ad(t, e) {
  let n = "";
  for (const s of t)
    s.literal ? n += s.val : n += e(s.val);
  return n;
}
const o8 = {
  D: xa,
  DD: Um,
  DDD: Zm,
  DDDD: qm,
  t: Gm,
  tt: Ym,
  ttt: jm,
  tttt: Jm,
  T: Km,
  TT: Qm,
  TTT: Xm,
  TTTT: e1,
  f: t1,
  ff: s1,
  fff: r1,
  ffff: o1,
  F: n1,
  FF: i1,
  FFF: a1,
  FFFF: l1
};
class mt {
  static create(e, n = {}) {
    return new mt(e, n);
  }
  static parseFormat(e) {
    let n = null, s = "", i = !1;
    const r = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? ((s.length > 0 || i) && r.push({
        literal: i || /^\s+$/.test(s),
        val: s === "" ? "'" : s
      }), n = null, s = "", i = !i) : i || o === n ? s += o : (s.length > 0 && r.push({ literal: /^\s+$/.test(s), val: s }), s = o, n = o);
    }
    return s.length > 0 && r.push({ literal: i || /^\s+$/.test(s), val: s }), r;
  }
  static macroTokenToFormatOpts(e) {
    return o8[e];
  }
  constructor(e, n) {
    this.opts = n, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...n }).format();
  }
  dtFormatter(e, n = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...n });
  }
  formatDateTime(e, n) {
    return this.dtFormatter(e, n).format();
  }
  formatDateTimeParts(e, n) {
    return this.dtFormatter(e, n).formatToParts();
  }
  formatInterval(e, n) {
    return this.dtFormatter(e.start, n).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, n) {
    return this.dtFormatter(e, n).resolvedOptions();
  }
  num(e, n = 0, s = void 0) {
    if (this.opts.forceSimple)
      return Ke(e, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), s && (i.signDisplay = s), this.loc.numberFormatter(i).format(e);
  }
  formatDateTimeFromString(e, n) {
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, p) => this.loc.extract(e, h, p), a = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", o = () => s ? n8(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (h, p) => s ? i8(e, h) : r(p ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, p) => s ? s8(e, h) : r(
      p ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), c = (h) => {
      const p = mt.macroTokenToFormatOpts(h);
      return p ? this.formatWithSystemDefault(e, p) : h;
    }, f = (h) => s ? r8(e, h) : r({ era: h }, "era"), m = (h) => {
      switch (h) {
        // ms
        case "S":
          return this.num(e.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(e.millisecond, 3);
        // seconds
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        // minutes
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        // hours
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        // offset
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return e.zoneName;
        // meridiems
        case "a":
          return o();
        // dates
        case "d":
          return i ? r({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return i ? r({ day: "2-digit" }, "day") : this.num(e.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        // weekdays - format
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        // months - standalone
        case "L":
          return i ? r({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return i ? r({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        // months - format
        case "M":
          return i ? r({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return i ? r({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        // years
        case "y":
          return i ? r({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return i ? r({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? r({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return i ? r({ year: "numeric" }, "year") : this.num(e.year, 6);
        // eras
        case "G":
          return f("short");
        case "GG":
          return f("long");
        case "GGGGG":
          return f("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return c(h);
      }
    };
    return Ad(mt.parseFormat(n), m);
  }
  formatDurationFromString(e, n) {
    const s = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, i = (c) => {
      switch (c[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "w":
          return "weeks";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return null;
      }
    }, r = (c, f) => (m) => {
      const h = i(m);
      if (h) {
        const p = f.isNegativeDuration && h !== f.largestUnit ? s : 1;
        let k;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? k = "never" : this.opts.signMode === "all" ? k = "always" : k = "auto", this.num(c.get(h) * p, m.length, k);
      } else
        return m;
    }, a = mt.parseFormat(n), o = a.reduce(
      (c, { literal: f, val: m }) => f ? c : c.concat(m),
      []
    ), l = e.shiftTo(...o.map(i).filter((c) => c)), u = {
      isNegativeDuration: l < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(l.values)[0]
    };
    return Ad(a, r(l, u));
  }
}
const E1 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function wi(...t) {
  const e = t.reduce((n, s) => n + s.source, "");
  return RegExp(`^${e}$`);
}
function Si(...t) {
  return (e) => t.reduce(
    ([n, s, i], r) => {
      const [a, o, l] = r(e, i);
      return [{ ...n, ...a }, o || s, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Ti(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, s] of e) {
    const i = n.exec(t);
    if (i)
      return s(i);
  }
  return [null, null];
}
function F1(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = Xn(e[n + i]);
    return [s, null, n + i];
  };
}
const O1 = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, l8 = `(?:${O1.source}?(?:\\[(${E1.source})\\])?)?`, Lu = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, M1 = RegExp(`${Lu.source}${l8}`), Nu = RegExp(`(?:[Tt]${M1.source})?`), u8 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, c8 = /(\d{4})-?W(\d\d)(?:-?(\d))?/, d8 = /(\d{4})-?(\d{3})/, f8 = F1("weekYear", "weekNumber", "weekDay"), h8 = F1("year", "ordinal"), m8 = /(\d{4})-(\d\d)-(\d\d)/, D1 = RegExp(
  `${Lu.source} ?(?:${O1.source}|(${E1.source}))?`
), p8 = RegExp(`(?: ${D1.source})?`);
function ui(t, e, n) {
  const s = t[e];
  return re(s) ? n : Xn(s);
}
function g8(t, e) {
  return [{
    year: ui(t, e),
    month: ui(t, e + 1, 1),
    day: ui(t, e + 2, 1)
  }, null, e + 3];
}
function Ii(t, e) {
  return [{
    hours: ui(t, e, 0),
    minutes: ui(t, e + 1, 0),
    seconds: ui(t, e + 2, 0),
    milliseconds: Du(t[e + 3])
  }, null, e + 4];
}
function xr(t, e) {
  const n = !t[e] && !t[e + 1], s = po(t[e + 1], t[e + 2]), i = n ? null : Tt.instance(s);
  return [{}, i, e + 3];
}
function Er(t, e) {
  const n = t[e] ? Bn.create(t[e]) : null;
  return [{}, n, e + 1];
}
const y8 = RegExp(`^T?${Lu.source}$`), v8 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function k8(t) {
  const [e, n, s, i, r, a, o, l, u] = t, c = e[0] === "-", f = l && l[0] === "-", m = (h, p = !1) => h !== void 0 && (p || h && c) ? -h : h;
  return [
    {
      years: m(ks(n)),
      months: m(ks(s)),
      weeks: m(ks(i)),
      days: m(ks(r)),
      hours: m(ks(a)),
      minutes: m(ks(o)),
      seconds: m(ks(l), l === "-0"),
      milliseconds: m(Du(u), f)
    }
  ];
}
const b8 = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function Vu(t, e, n, s, i, r, a) {
  const o = {
    year: e.length === 2 ? Gl(Xn(e)) : Xn(e),
    month: w1.indexOf(n) + 1,
    day: Xn(s),
    hour: Xn(i),
    minute: Xn(r)
  };
  return a && (o.second = Xn(a)), t && (o.weekday = t.length > 3 ? T1.indexOf(t) + 1 : I1.indexOf(t) + 1), o;
}
const w8 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function S8(t) {
  const [
    ,
    e,
    n,
    s,
    i,
    r,
    a,
    o,
    l,
    u,
    c,
    f
  ] = t, m = Vu(e, i, s, n, r, a, o);
  let h;
  return l ? h = b8[l] : u ? h = 0 : h = po(c, f), [m, new Tt(h)];
}
function T8(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const I8 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, $8 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, C8 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Ld(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [Vu(e, i, s, n, r, a, o), Tt.utcInstance];
}
function x8(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [Vu(e, o, n, s, i, r, a), Tt.utcInstance];
}
const E8 = wi(u8, Nu), F8 = wi(c8, Nu), O8 = wi(d8, Nu), M8 = wi(M1), A1 = Si(
  g8,
  Ii,
  xr,
  Er
), D8 = Si(
  f8,
  Ii,
  xr,
  Er
), A8 = Si(
  h8,
  Ii,
  xr,
  Er
), L8 = Si(
  Ii,
  xr,
  Er
);
function N8(t) {
  return Ti(
    t,
    [E8, A1],
    [F8, D8],
    [O8, A8],
    [M8, L8]
  );
}
function V8(t) {
  return Ti(T8(t), [w8, S8]);
}
function B8(t) {
  return Ti(
    t,
    [I8, Ld],
    [$8, Ld],
    [C8, x8]
  );
}
function _8(t) {
  return Ti(t, [v8, k8]);
}
const R8 = Si(Ii);
function z8(t) {
  return Ti(t, [y8, R8]);
}
const W8 = wi(m8, p8), P8 = wi(D1), H8 = Si(
  Ii,
  xr,
  Er
);
function U8(t) {
  return Ti(
    t,
    [W8, A1],
    [P8, H8]
  );
}
const Nd = "Invalid Duration", L1 = {
  weeks: {
    days: 7,
    hours: 168,
    minutes: 10080,
    seconds: 10080 * 60,
    milliseconds: 10080 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 1440,
    seconds: 1440 * 60,
    milliseconds: 1440 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 3600, milliseconds: 3600 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Z8 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 2184,
    minutes: 2184 * 60,
    seconds: 2184 * 60 * 60,
    milliseconds: 2184 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 720,
    minutes: 720 * 60,
    seconds: 720 * 60 * 60,
    milliseconds: 720 * 60 * 60 * 1e3
  },
  ...L1
}, Nt = 146097 / 400, Gs = 146097 / 4800, q8 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Nt / 7,
    days: Nt,
    hours: Nt * 24,
    minutes: Nt * 24 * 60,
    seconds: Nt * 24 * 60 * 60,
    milliseconds: Nt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Nt / 28,
    days: Nt / 4,
    hours: Nt * 24 / 4,
    minutes: Nt * 24 * 60 / 4,
    seconds: Nt * 24 * 60 * 60 / 4,
    milliseconds: Nt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Gs / 7,
    days: Gs,
    hours: Gs * 24,
    minutes: Gs * 24 * 60,
    seconds: Gs * 24 * 60 * 60,
    milliseconds: Gs * 24 * 60 * 60 * 1e3
  },
  ...L1
}, xs = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], G8 = xs.slice(0).reverse();
function In(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Se(s);
}
function N1(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of G8.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function Vd(t, e) {
  const n = N1(t, e) < 0 ? -1 : 1;
  xs.reduceRight((s, i) => {
    if (re(e[i]))
      return s;
    if (s) {
      const r = e[s] * n, a = t[i][s], o = Math.floor(r / a);
      e[i] += o * n, e[s] -= o * a * n;
    }
    return i;
  }, null), xs.reduce((s, i) => {
    if (re(e[i]))
      return s;
    if (s) {
      const r = e[s] % 1;
      e[s] -= r, e[i] += r * t[s][i];
    }
    return i;
  }, null);
}
function Bd(t) {
  const e = {};
  for (const [n, s] of Object.entries(t))
    s !== 0 && (e[n] = s);
  return e;
}
class Se {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let s = n ? q8 : Z8;
    e.matrix && (s = e.matrix), this.values = e.values, this.loc = e.loc || Fe.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = s, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, n) {
    return Se.fromObject({ milliseconds: e }, n);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, n = {}) {
    if (e == null || typeof e != "object")
      throw new ct(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new Se({
      values: Oa(e, Se.normalizeUnit),
      loc: Fe.fromObject(n),
      conversionAccuracy: n.conversionAccuracy,
      matrix: n.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (rs(e))
      return Se.fromMillis(e);
    if (Se.isDuration(e))
      return e;
    if (typeof e == "object")
      return Se.fromObject(e);
    throw new ct(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, n) {
    const [s] = _8(e);
    return s ? Se.fromObject(s, n) : Se.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, n) {
    const [s] = z8(e);
    return s ? Se.fromObject(s, n) : Se.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new ct("need to specify a reason the Duration is invalid");
    const s = e instanceof Kt ? e : new Kt(e, n);
    if (Ue.throwOnInvalid)
      throw new kI(s);
    return new Se({ invalid: s });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const n = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!n) throw new Hm(e);
    return n;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
   * @return {string}
   */
  toFormat(e, n = {}) {
    const s = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? mt.create(this.loc, s).formatDurationFromString(this, e) : Nd;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
   * @example
   * ```js
   * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
   * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid) return Nd;
    const n = e.showZeros !== !1, s = xs.map((i) => {
      const r = this.values[i];
      return re(r) || r === 0 && !n ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: i.slice(0, -1) }).format(r);
    }).filter((i) => i);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(s);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Au(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, se.fromMillis(n, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? N1(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(e), s = {};
    for (const i of xs)
      (mi(n.values, i) || mi(this.values, i)) && (s[i] = n.get(i) + this.get(i));
    return In(this, { values: s }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(e);
    return this.plus(n.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid) return this;
    const n = {};
    for (const s of Object.keys(this.values))
      n[s] = b1(e(this.values[s], s));
    return In(this, { values: n }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[Se.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid) return this;
    const n = { ...this.values, ...Oa(e, Se.normalizeUnit) };
    return In(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: s, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: s };
    return In(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const e = this.toObject();
    return Vd(this.matrix, e), In(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = Bd(this.normalize().shiftToAll().toObject());
    return In(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => Se.normalizeUnit(a));
    const n = {}, s = {}, i = this.toObject();
    let r;
    for (const a of xs)
      if (e.indexOf(a) >= 0) {
        r = a;
        let o = 0;
        for (const u in s)
          o += this.matrix[u][a] * s[u], s[u] = 0;
        rs(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, s[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else rs(i[a]) && (s[a] = i[a]);
    for (const a in s)
      s[a] !== 0 && (n[r] += a === r ? s[a] : s[a] / this.matrix[r][a]);
    return Vd(this.matrix, n), In(this, { values: n }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const n of Object.keys(this.values))
      e[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return In(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = Bd(this.values);
    return In(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function n(s, i) {
      return s === void 0 || s === 0 ? i === void 0 || i === 0 : s === i;
    }
    for (const s of xs)
      if (!n(this.values[s], e.values[s]))
        return !1;
    return !0;
  }
}
const Ys = "Invalid Interval";
function Y8(t, e) {
  return !t || !t.isValid ? Pe.invalid("missing or invalid start") : !e || !e.isValid ? Pe.invalid("missing or invalid end") : e < t ? Pe.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class Pe {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new ct("need to specify a reason the Interval is invalid");
    const s = e instanceof Kt ? e : new Kt(e, n);
    if (Ue.throwOnInvalid)
      throw new vI(s);
    return new Pe({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = Li(e), i = Li(n), r = Y8(s, i);
    return r ?? new Pe({
      start: s,
      end: i
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, n) {
    const s = Se.fromDurationLike(n), i = Li(e);
    return Pe.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = Se.fromDurationLike(n), i = Li(e);
    return Pe.fromDateTimes(i.minus(s), i);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, n) {
    const [s, i] = (e || "").split("/", 2);
    if (s && i) {
      let r, a;
      try {
        r = se.fromISO(s, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = se.fromISO(i, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return Pe.fromDateTimes(r, o);
      if (a) {
        const u = Se.fromISO(i, n);
        if (u.isValid)
          return Pe.after(r, u);
      } else if (l) {
        const u = Se.fromISO(s, n);
        if (u.isValid)
          return Pe.before(o, u);
      }
    }
    return Pe.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval. This is the first instant which is not part of the interval
   * (Interval is half-open).
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns the last DateTime included in the interval (since end is not part of the interval)
   * @type {DateTime}
   */
  get lastDateTime() {
    return this.isValid && this.e ? this.e.minus(1) : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", n) {
    if (!this.isValid) return NaN;
    const s = this.start.startOf(e, n);
    let i;
    return n?.useLocaleWeeks ? i = this.end.reconfigure({ locale: s.locale }) : i = this.end, i = i.startOf(e, n), Math.floor(i.diff(s, e).get(e)) + (i.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: n } = {}) {
    return this.isValid ? Pe.fromDateTimes(e || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const n = e.map(Li).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), s = [];
    let { s: i } = this, r = 0;
    for (; i < this.e; ) {
      const a = n[r] || this.e, o = +a > +this.e ? this.e : a;
      s.push(Pe.fromDateTimes(i, o)), i = o, r += 1;
    }
    return s;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const n = Se.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, i = 1, r;
    const a = [];
    for (; s < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * i));
      r = +o > +this.e ? this.e : o, a.push(Pe.fromDateTimes(s, r)), s = r, i += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid) return this;
    const n = this.s > e.s ? this.s : e.s, s = this.e < e.e ? this.e : e.e;
    return n >= s ? null : Pe.fromDateTimes(n, s);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid) return this;
    const n = this.s < e.s ? this.s : e.s, s = this.e > e.e ? this.e : e.e;
    return Pe.fromDateTimes(n, s);
  }
  /**
   * Merge an array of Intervals into an equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
   * and ending with the latest.
   *
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [n, s] = e.sort((i, r) => i.s - r.s).reduce(
      ([i, r], a) => r ? r.overlaps(a) || r.abutsStart(a) ? [i, r.union(a)] : [i.concat([r]), a] : [i, a],
      [[], null]
    );
    return s && n.push(s), n;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let n = null, s = 0;
    const i = [], r = e.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...r), o = a.sort((l, u) => l.time - u.time);
    for (const l of o)
      s += l.type === "s" ? 1 : -1, s === 1 ? n = l.time : (n && +n != +l.time && i.push(Pe.fromDateTimes(n, l.time)), n = null);
    return Pe.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return Pe.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Ys;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = xa, n = {}) {
    return this.isValid ? mt.create(this.s.loc.clone(n), e).formatInterval(this) : Ys;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Ys;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ys;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Ys;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : Ys;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, n) {
    return this.isValid ? this.e.diff(this.s, e, n) : Se.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return Pe.fromDateTimes(e(this.s), e(this.e));
  }
}
class qr {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = Ue.defaultZone) {
    const n = se.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return Bn.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return ss(e, Ue.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Fe.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Fe.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Fe.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null, outputCalendar: r = "gregory" } = {}) {
    return (i || Fe.create(n, s, r)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null, outputCalendar: r = "gregory" } = {}) {
    return (i || Fe.create(n, s, r)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null } = {}) {
    return (i || Fe.create(n, s, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: n = null, numberingSystem: s = null, locObj: i = null } = {}) {
    return (i || Fe.create(n, s, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return Fe.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: n = null } = {}) {
    return Fe.create(n, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: y1(), localeWeek: v1() };
  }
}
function _d(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(Se.fromMillis(s).as("days"));
}
function j8(t, e, n) {
  const s = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const c = _d(l, u);
        return (c - c % 7) / 7;
      }
    ],
    ["days", _d]
  ], i = {}, r = t;
  let a, o;
  for (const [l, u] of s)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = r.plus(i), o > e ? (i[l]--, t = r.plus(i), t > e && (o = t, i[l]--, t = r.plus(i))) : t = o);
  return [t, i, o, a];
}
function J8(t, e, n, s) {
  let [i, r, a, o] = j8(t, e, n);
  const l = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (r[o] = (r[o] || 0) + l / (a - i)));
  const c = Se.fromObject(r, s);
  return u.length > 0 ? Se.fromMillis(l, s).shiftTo(...u).plus(c) : c;
}
const K8 = "missing Intl.DateTimeFormat.formatToParts support";
function $e(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(WI(n)) };
}
const Q8 = " ", V1 = `[ ${Q8}]`, B1 = new RegExp(V1, "g");
function X8(t) {
  return t.replace(/\./g, "\\.?").replace(B1, V1);
}
function Rd(t) {
  return t.replace(/\./g, "").replace(B1, " ").toLowerCase();
}
function Gt(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(X8).join("|")),
    deser: ([n]) => t.findIndex((s) => Rd(n) === Rd(s)) + e
  };
}
function zd(t, e) {
  return { regex: t, deser: ([, n, s]) => po(n, s), groups: e };
}
function Gr(t) {
  return { regex: t, deser: ([e]) => e };
}
function e$(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function t$(t, e) {
  const n = qt(e), s = qt(e, "{2}"), i = qt(e, "{3}"), r = qt(e, "{4}"), a = qt(e, "{6}"), o = qt(e, "{1,2}"), l = qt(e, "{1,3}"), u = qt(e, "{1,6}"), c = qt(e, "{1,9}"), f = qt(e, "{2,4}"), m = qt(e, "{4,6}"), h = (S) => ({ regex: RegExp(e$(S.val)), deser: ([b]) => b, literal: !0 }), k = ((S) => {
    if (t.literal)
      return h(S);
    switch (S.val) {
      // era
      case "G":
        return Gt(e.eras("short"), 0);
      case "GG":
        return Gt(e.eras("long"), 0);
      // years
      case "y":
        return $e(u);
      case "yy":
        return $e(f, Gl);
      case "yyyy":
        return $e(r);
      case "yyyyy":
        return $e(m);
      case "yyyyyy":
        return $e(a);
      // months
      case "M":
        return $e(o);
      case "MM":
        return $e(s);
      case "MMM":
        return Gt(e.months("short", !0), 1);
      case "MMMM":
        return Gt(e.months("long", !0), 1);
      case "L":
        return $e(o);
      case "LL":
        return $e(s);
      case "LLL":
        return Gt(e.months("short", !1), 1);
      case "LLLL":
        return Gt(e.months("long", !1), 1);
      // dates
      case "d":
        return $e(o);
      case "dd":
        return $e(s);
      // ordinals
      case "o":
        return $e(l);
      case "ooo":
        return $e(i);
      // time
      case "HH":
        return $e(s);
      case "H":
        return $e(o);
      case "hh":
        return $e(s);
      case "h":
        return $e(o);
      case "mm":
        return $e(s);
      case "m":
        return $e(o);
      case "q":
        return $e(o);
      case "qq":
        return $e(s);
      case "s":
        return $e(o);
      case "ss":
        return $e(s);
      case "S":
        return $e(l);
      case "SSS":
        return $e(i);
      case "u":
        return Gr(c);
      case "uu":
        return Gr(o);
      case "uuu":
        return $e(n);
      // meridiem
      case "a":
        return Gt(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return $e(r);
      case "kk":
        return $e(f, Gl);
      // weekNumber (W)
      case "W":
        return $e(o);
      case "WW":
        return $e(s);
      // weekdays
      case "E":
      case "c":
        return $e(n);
      case "EEE":
        return Gt(e.weekdays("short", !1), 1);
      case "EEEE":
        return Gt(e.weekdays("long", !1), 1);
      case "ccc":
        return Gt(e.weekdays("short", !0), 1);
      case "cccc":
        return Gt(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return zd(new RegExp(`([+-]${o.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return zd(new RegExp(`([+-]${o.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return Gr(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return Gr(/[^\S\n\r]/);
      default:
        return h(S);
    }
  })(t) || {
    invalidReason: K8
  };
  return k.token = t, k;
}
const n$ = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function s$(t, e, n) {
  const { type: s, value: i } = t;
  if (s === "literal") {
    const l = /^\s+$/.test(i);
    return {
      literal: !l,
      val: l ? " " : i
    };
  }
  const r = e[s];
  let a = s;
  s === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = n.hour12 ? "hour12" : "hour24");
  let o = n$[a];
  if (typeof o == "object" && (o = o[r]), o)
    return {
      literal: !1,
      val: o
    };
}
function i$(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function r$(t, e, n) {
  const s = t.match(e);
  if (s) {
    const i = {};
    let r = 1;
    for (const a in n)
      if (mi(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(s.slice(r, r + l))), r += l;
      }
    return [s, i];
  } else
    return [s, {}];
}
function a$(t) {
  const e = (r) => {
    switch (r) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let n = null, s;
  return re(t.z) || (n = Bn.create(t.z)), re(t.Z) || (n || (n = new Tt(t.Z)), s = t.Z), re(t.q) || (t.M = (t.q - 1) * 3 + 1), re(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), re(t.u) || (t.S = Du(t.u)), [Object.keys(t).reduce((r, a) => {
    const o = e(a);
    return o && (r[o] = t[a]), r;
  }, {}), n, s];
}
let nl = null;
function o$() {
  return nl || (nl = se.fromMillis(1555555555555)), nl;
}
function l$(t, e) {
  if (t.literal)
    return t;
  const n = mt.macroTokenToFormatOpts(t.val), s = W1(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function _1(t, e) {
  return Array.prototype.concat(...t.map((n) => l$(n, e)));
}
class R1 {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = _1(mt.parseFormat(n), e), this.units = this.tokens.map((s) => t$(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = i$(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = r$(e, this.regex, this.handlers), [i, r, a] = s ? a$(s) : [null, null, void 0];
      if (mi(s, "a") && mi(s, "H"))
        throw new Xs(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: n,
        matches: s,
        result: i,
        zone: r,
        specificOffset: a
      };
    } else
      return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function z1(t, e, n) {
  return new R1(t, n).explainFromTokens(e);
}
function u$(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = z1(t, e, n);
  return [s, i, r, a];
}
function W1(t, e) {
  if (!t)
    return null;
  const s = mt.create(e, t).dtFormatter(o$()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => s$(a, t, r));
}
const sl = "Invalid DateTime", Wd = 864e13;
function Hi(t) {
  return new Kt("unsupported zone", `the zone "${t.name}" is not supported`);
}
function il(t) {
  return t.weekData === null && (t.weekData = Ea(t.c)), t.weekData;
}
function rl(t) {
  return t.localWeekData === null && (t.localWeekData = Ea(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function bs(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new se({ ...n, ...e, old: n });
}
function P1(t, e, n) {
  let s = t - e * 60 * 1e3;
  const i = n.offset(s);
  if (e === i)
    return [s, e];
  s -= (i - e) * 60 * 1e3;
  const r = n.offset(s);
  return i === r ? [s, i] : [t - Math.min(i, r) * 60 * 1e3, Math.max(i, r)];
}
function Yr(t, e) {
  t += e * 60 * 1e3;
  const n = new Date(t);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds()
  };
}
function aa(t, e, n) {
  return P1(mo(t), e, n);
}
function Pd(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, Fa(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = Se.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = mo(r);
  let [l, u] = P1(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function js(t, e, n, s, i, r) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = se.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: r
    });
    return a ? u : u.setZone(o);
  } else
    return se.invalid(
      new Kt("unparsable", `the input "${i}" can't be parsed as ${s}`)
    );
}
function jr(t, e, n = !0) {
  return t.isValid ? mt.create(Fe.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function al(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += Ke(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += Ke(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += Ke(t.c.month), n === "month") return i;
  return i += Ke(t.c.day), i;
}
function Hd(t, e, n, s, i, r, a) {
  let o = !n || t.c.millisecond !== 0 || t.c.second !== 0, l = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (l += Ke(t.c.hour), a === "hour") break;
      if (e) {
        if (l += ":", l += Ke(t.c.minute), a === "minute") break;
        o && (l += ":", l += Ke(t.c.second));
      } else {
        if (l += Ke(t.c.minute), a === "minute") break;
        o && (l += Ke(t.c.second));
      }
      if (a === "second") break;
      o && (!s || t.c.millisecond !== 0) && (l += ".", l += Ke(t.c.millisecond, 3));
  }
  return i && (t.isOffsetFixed && t.offset === 0 && !r ? l += "Z" : t.o < 0 ? (l += "-", l += Ke(Math.trunc(-t.o / 60)), l += ":", l += Ke(Math.trunc(-t.o % 60))) : (l += "+", l += Ke(Math.trunc(t.o / 60)), l += ":", l += Ke(Math.trunc(t.o % 60)))), r && (l += "[" + t.zone.ianaName + "]"), l;
}
const H1 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, c$ = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, d$ = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, oa = ["year", "month", "day", "hour", "minute", "second", "millisecond"], f$ = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], h$ = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function la(t) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[t.toLowerCase()];
  if (!e) throw new Hm(t);
  return e;
}
function Ud(t) {
  switch (t.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return la(t);
  }
}
function m$(t) {
  if (Ui === void 0 && (Ui = Ue.now()), t.type !== "iana")
    return t.offset(Ui);
  const e = t.name;
  let n = Yl.get(e);
  return n === void 0 && (n = t.offset(Ui), Yl.set(e, n)), n;
}
function Zd(t, e) {
  const n = ss(e.zone, Ue.defaultZone);
  if (!n.isValid)
    return se.invalid(Hi(n));
  const s = Fe.fromObject(e);
  let i, r;
  if (re(t.year))
    i = Ue.now();
  else {
    for (const l of oa)
      re(t[l]) && (t[l] = H1[l]);
    const a = p1(t) || g1(t);
    if (a)
      return se.invalid(a);
    const o = m$(n);
    [i, r] = aa(t, o, n);
  }
  return new se({ ts: i, zone: n, loc: s, o: r });
}
function qd(t, e, n) {
  const s = re(n.round) ? !0 : n.round, i = re(n.rounding) ? "trunc" : n.rounding, r = (o, l) => (o = Au(o, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(o, l)), a = (o) => n.calendary ? e.hasSame(t, o) ? 0 : e.startOf(o).diff(t.startOf(o), o).get(o) : e.diff(t, o).get(o);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const o of n.units) {
    const l = a(o);
    if (Math.abs(l) >= 1)
      return r(l, o);
  }
  return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function Gd(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let Ui;
const Yl = /* @__PURE__ */ new Map();
class se {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || Ue.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new Kt("invalid input") : null) || (n.isValid ? null : Hi(n));
    this.ts = re(e.ts) ? Ue.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const o = rs(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Yr(this.ts, o), s = Number.isNaN(i.year) ? new Kt("invalid input") : null, i = s ? null : i, r = s ? null : o;
      }
    this._zone = n, this.loc = e.loc || Fe.create(), this.invalid = s, this.weekData = null, this.localWeekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new se({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, n] = Gd(arguments), [s, i, r, a, o, l, u] = n;
    return Zd({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, n] = Gd(arguments), [s, i, r, a, o, l, u] = n;
    return e.zone = Tt.utcInstance, Zd({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = qI(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return se.invalid("invalid input");
    const i = ss(n.zone, Ue.defaultZone);
    return i.isValid ? new se({
      ts: s,
      zone: i,
      loc: Fe.fromObject(n)
    }) : se.invalid(Hi(i));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, n = {}) {
    if (rs(e))
      return e < -Wd || e > Wd ? se.invalid("Timestamp out of range") : new se({
        ts: e,
        zone: ss(n.zone, Ue.defaultZone),
        loc: Fe.fromObject(n)
      });
    throw new ct(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, n = {}) {
    if (rs(e))
      return new se({
        ts: e * 1e3,
        zone: ss(n.zone, Ue.defaultZone),
        loc: Fe.fromObject(n)
      });
    throw new ct("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, n = {}) {
    e = e || {};
    const s = ss(n.zone, Ue.defaultZone);
    if (!s.isValid)
      return se.invalid(Hi(s));
    const i = Fe.fromObject(n), r = Oa(e, Ud), { minDaysInFirstWeek: a, startOfWeek: o } = Od(r, i), l = Ue.now(), u = re(n.specificOffset) ? s.offset(l) : n.specificOffset, c = !re(r.ordinal), f = !re(r.year), m = !re(r.month) || !re(r.day), h = f || m, p = r.weekYear || r.weekNumber;
    if ((h || c) && p)
      throw new Xs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && c)
      throw new Xs("Can't mix ordinal dates with month/day");
    const k = p || r.weekday && !h;
    let S, b, L = Yr(l, u);
    k ? (S = f$, b = c$, L = Ea(L, a, o)) : c ? (S = h$, b = d$, L = tl(L)) : (S = oa, b = H1);
    let T = !1;
    for (const P of S) {
      const Q = r[P];
      re(Q) ? T ? r[P] = b[P] : r[P] = L[P] : T = !0;
    }
    const D = k ? HI(r, a, o) : c ? UI(r) : p1(r), w = D || g1(r);
    if (w)
      return se.invalid(w);
    const E = k ? Ed(r, a, o) : c ? Fd(r) : r, [U, N] = aa(E, u, s), O = new se({
      ts: U,
      zone: s,
      o: N,
      loc: i
    });
    return r.weekday && h && e.weekday !== O.weekday ? se.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${O.toISO()}`
    ) : O.isValid ? O : se.invalid(O.invalid);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, n = {}) {
    const [s, i] = N8(e);
    return js(s, i, n, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, n = {}) {
    const [s, i] = V8(e);
    return js(s, i, n, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, n = {}) {
    const [s, i] = B8(e);
    return js(s, i, n, "HTTP", n);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, n, s = {}) {
    if (re(e) || re(n))
      throw new ct("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: r = null } = s, a = Fe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [o, l, u, c] = u$(a, e, n);
    return c ? se.invalid(c) : js(o, l, s, `format ${n}`, e, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, s = {}) {
    return se.fromFormat(e, n, s);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, n = {}) {
    const [s, i] = U8(e);
    return js(s, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new ct("need to specify a reason the DateTime is invalid");
    const s = e instanceof Kt ? e : new Kt(e, n);
    if (Ue.throwOnInvalid)
      throw new yI(s);
    return new se({ invalid: s });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, n = {}) {
    const s = W1(e, Fe.fromObject(n));
    return s ? s.map((i) => i ? i.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, n = {}) {
    return _1(mt.parseFormat(e), Fe.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    Ui = void 0, Yl.clear();
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? il(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? il(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? il(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? rl(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? rl(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? rl(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? tl(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? qr.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? qr.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? qr.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? qr.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, n = 6e4, s = mo(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), o = this.zone.offset(s - r * n);
    if (a === o)
      return [this];
    const l = s - a * n, u = s - o * n, c = Yr(l, a), f = Yr(u, o);
    return c.hour === f.hour && c.minute === f.minute && c.second === f.second && c.millisecond === f.millisecond ? [bs(this, { ts: l }), bs(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return Cr(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Fa(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? li(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? mr(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? mr(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: n, numberingSystem: s, calendar: i } = mt.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: s, outputCalendar: i };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, n = {}) {
    return this.setZone(Tt.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Ue.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: n = !1, keepCalendarTime: s = !1 } = {}) {
    if (e = ss(e, Ue.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || s) {
        const r = e.offset(this.ts), a = this.toObject();
        [i] = aa(a, r, e);
      }
      return bs(this, { ts: i, zone: e });
    } else
      return se.invalid(Hi(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: s } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: s });
    return bs(this, { loc: i });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid) return this;
    const n = Oa(e, Ud), { minDaysInFirstWeek: s, startOfWeek: i } = Od(n, this.loc), r = !re(n.weekYear) || !re(n.weekNumber) || !re(n.weekday), a = !re(n.ordinal), o = !re(n.year), l = !re(n.month) || !re(n.day), u = o || l, c = n.weekYear || n.weekNumber;
    if ((u || a) && c)
      throw new Xs(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Xs("Can't mix ordinal dates with month/day");
    let f;
    r ? f = Ed(
      { ...Ea(this.c, s, i), ...n },
      s,
      i
    ) : re(n.ordinal) ? (f = { ...this.toObject(), ...n }, re(n.day) && (f.day = Math.min(Fa(f.year, f.month), f.day))) : f = Fd({ ...tl(this.c), ...n });
    const [m, h] = aa(f, this.o, this.zone);
    return bs(this, { ts: m, o: h });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(e);
    return bs(this, Pd(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(e).negate();
    return bs(this, Pd(this, n));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: n = !1 } = {}) {
    if (!this.isValid) return this;
    const s = {}, i = Se.normalizeUnit(e);
    switch (i) {
      case "years":
        s.month = 1;
      // falls through
      case "quarters":
      case "months":
        s.day = 1;
      // falls through
      case "weeks":
      case "days":
        s.hour = 0;
      // falls through
      case "hours":
        s.minute = 0;
      // falls through
      case "minutes":
        s.second = 0;
      // falls through
      case "seconds":
        s.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (n) {
        const r = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < r && (s.weekNumber = this.weekNumber - 1), s.weekday = r;
      } else
        s.weekday = 1;
    if (i === "quarters") {
      const r = Math.ceil(this.month / 3);
      s.month = (r - 1) * 3 + 1;
    }
    return this.set(s);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, n) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, n).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, n = {}) {
    return this.isValid ? mt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : sl;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = xa, n = {}) {
    return this.isValid ? mt.create(this.loc.clone(n), e).formatDateTime(this) : sl;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? mt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
   * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
   * @return {string|null}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: s = !1,
    includeOffset: i = !0,
    extendedZone: r = !1,
    precision: a = "milliseconds"
  } = {}) {
    if (!this.isValid)
      return null;
    a = la(a);
    const o = e === "extended";
    let l = al(this, o, a);
    return oa.indexOf(a) >= 3 && (l += "T"), l += Hd(
      this,
      o,
      n,
      s,
      i,
      r,
      a
    ), l;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
   * @return {string|null}
   */
  toISODate({ format: e = "extended", precision: n = "day" } = {}) {
    return this.isValid ? al(this, e === "extended", la(n)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return jr(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: n = !1,
    includeOffset: s = !0,
    includePrefix: i = !1,
    extendedZone: r = !1,
    format: a = "extended",
    precision: o = "milliseconds"
  } = {}) {
    return this.isValid ? (o = la(o), (i && oa.indexOf(o) >= 3 ? "T" : "") + Hd(
      this,
      a === "extended",
      n,
      e,
      s,
      r,
      o
    )) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return jr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return jr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? al(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: n = !1, includeOffsetSpace: s = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (n || e) && (s && (i += " "), n ? i += "z" : e && (i += "ZZ")), jr(this, i, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : sl;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid) return {};
    const n = { ...this.c };
    return e.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, n = "milliseconds", s = {}) {
    if (!this.isValid || !e.isValid)
      return Se.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = GI(n).map(Se.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = J8(o, l, r, i);
    return a ? u.negate() : u;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", n = {}) {
    return this.diff(se.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? Pe.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, n, s) {
    if (!this.isValid) return !1;
    const i = e.valueOf(), r = this.setZone(e.zone, { keepLocalTime: !0 });
    return r.startOf(n, s) <= i && i <= r.endOf(n, s);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid) return null;
    const n = e.base || se.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, r = void 0), qd(n, this.plus(s), {
      ...e,
      numeric: "always",
      units: i,
      unit: r
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? qd(e.base || se.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(se.isDateTime))
      throw new ct("min requires all arguments be DateTimes");
    return Md(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(se.isDateTime))
      throw new ct("max requires all arguments be DateTimes");
    return Md(e, (n) => n.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, n, s = {}) {
    const { locale: i = null, numberingSystem: r = null } = s, a = Fe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    return z1(a, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, s = {}) {
    return se.fromFormatExplain(e, n, s);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(e, n = {}) {
    const { locale: s = null, numberingSystem: i = null } = n, r = Fe.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new R1(r, e);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(e, n, s = {}) {
    if (re(e) || re(n))
      throw new ct(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: r = null } = s, a = Fe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new ct(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: o, zone: l, specificOffset: u, invalidReason: c } = n.explainFromTokens(e);
    return c ? se.invalid(c) : js(
      o,
      l,
      s,
      `format ${n.format}`,
      e,
      u
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return xa;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Um;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return bI;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Zm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return qm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Gm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Ym;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return jm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Jm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Km;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Qm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Xm;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return e1;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return t1;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return n1;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return s1;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return i1;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return wI;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return r1;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return a1;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return o1;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return l1;
  }
}
function Li(t) {
  if (se.isDateTime(t))
    return t;
  if (t && t.valueOf && rs(t.valueOf()))
    return se.fromJSDate(t);
  if (t && typeof t == "object")
    return se.fromObject(t);
  throw new ct(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
var p$ = /* @__PURE__ */ H({
  __name: "ListItemDate",
  props: {
    date: {},
    time: {}
  },
  setup(t) {
    const e = new Intl.DateTimeFormat(navigator.language, {
      month: "short",
      day: "numeric"
    }), n = new Intl.DateTimeFormat(navigator.language, {
      year: "numeric",
      month: "short",
      day: "numeric"
    }), s = Ce(() => {
      const i = se.now();
      if (t.time) {
        const r = se.fromFormat(`${t.date} ${t.time}`, "yyyy-MM-dd HH:mm:ss"), a = r.toFormat("HH:mm");
        return i.toISODate() === r.toISODate() ? `${Homey.__("widget.list.today_at")} ${a}` : i.year === r.year ? `${e.format(r.toJSDate())} ${a}` : `${n.format(r.toJSDate())} ${a}`;
      } else {
        const r = se.fromFormat(t.date, "yyyy-MM-dd");
        return i.toISODate() === r.toISODate() ? Homey.__("widget.list.today") : i.year === r.year ? e.format(r.toJSDate()) : n.format(r.toJSDate());
      }
    });
    return (i, r) => (y(), R("div", {
      class: x(i.$style.listItemDate)
    }, ve(s.value), 3));
  }
});
const g$ = "listItemDate";
var y$ = { listItemDate: g$ };
const v$ = {
  $style: y$
};
var k$ = /* @__PURE__ */ je(p$, [["__cssModules", v$]]), b$ = /* @__PURE__ */ H({
  __name: "ListItemTask",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (y(), _(uo, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item
    }, {
      default: Z(() => [
        V(co, null, {
          default: Z(() => [
            gr(ve(t.item.content), 1)
          ]),
          _: 1
        }),
        t.item.dueDate || t.item.person ? (y(), _(uI, { key: 0 }, {
          default: Z(() => [
            t.item.person ? (y(), _(gI, {
              key: 0,
              image: t.item.person.image,
              name: t.item.person.name
            }, null, 8, ["image", "name"])) : X("", !0),
            t.item.dueDate ? (y(), _(k$, {
              key: 1,
              date: t.item.dueDate,
              time: t.item.dueTime
            }, null, 8, ["date", "time"])) : X("", !0)
          ]),
          _: 1
        })) : X("", !0)
      ]),
      _: 1
    }, 8, ["icon", "item"]));
  }
}), w$ = /* @__PURE__ */ H({
  __name: "List",
  props: {
    deviceId: {}
  },
  setup(t) {
    const e = Wn(), {
      categories: n,
      categorizedItems: s,
      hasItems: i,
      isLoading: r,
      look: a,
      changeChecked: o,
      changeQuantity: l,
      loadCategories: u,
      loadItems: c,
      loadLook: f,
      removeItem: m,
      setItems: h
    } = Vm(), p = te(null), k = te(null);
    async function S() {
      switch (d(a)?.type) {
        case "grocery_list":
          p.value = "product";
          break;
        case "list":
          p.value = "task";
          break;
      }
    }
    async function b() {
      p.value = "note";
    }
    async function L(w) {
      k.value = w;
    }
    async function T(w) {
      switch (w.type) {
        case "product":
        case "task":
          await o(t.deviceId, w, !w.checked);
          break;
      }
    }
    async function D() {
      const w = document.querySelector("#app"), { height: E } = w.getBoundingClientRect();
      Homey.setHeight(d(p) || d(k) ? Math.max(420, E) : E);
    }
    return Homey.on("list-items-changed", async ({ id: w, items: E }) => {
      w === t.deviceId && await h(E);
    }), Homey.on("list-look-changed", async (w) => w === t.deviceId && await f(t.deviceId)), Re([p, k, s], async () => {
      await D();
    }, { flush: "post" }), Re(() => t.deviceId, async () => {
      await Promise.allSettled([
        u(t.deviceId),
        f(t.deviceId),
        c(t.deviceId)
      ]);
    }, { immediate: !0 }), (w, E) => (y(), R(he, null, [
      d(a) ? (y(), _(ZS, {
        key: 0,
        color: d(a).color,
        icon: d(a).icon,
        name: d(a).name,
        onAdd: E[0] || (E[0] = (U) => S()),
        onAddNote: E[1] || (E[1] = (U) => b())
      }, null, 8, ["color", "icon", "name"])) : X("", !0),
      V(Ns, {
        mode: "out-in",
        name: "check",
        onEnter: E[4] || (E[4] = (U) => D())
      }, {
        default: Z(() => [
          d(r) && !d(i) ? (y(), _(JS, { key: 0 })) : d(i) ? (y(), _(gd, { key: 1 }, {
            default: Z(() => [
              V(lh, {
                name: "items",
                onAfterEnter: E[2] || (E[2] = (U) => D()),
                onAfterLeave: E[3] || (E[3] = (U) => D())
              }, {
                default: Z(() => [
                  (y(!0), R(he, null, It(d(s), (U, N, O) => (y(), R(he, { key: N }, [
                    N !== "__other__" ? (y(), _(pd, {
                      key: 0,
                      icon: d(n).find((P) => P.category === N)?.icon,
                      name: d(e)(`grocery.category.${N}`)
                    }, null, 8, ["icon", "name"])) : O > 0 ? (y(), _(pd, {
                      key: 1,
                      name: d(e)("widget.list.other")
                    }, null, 8, ["name"])) : X("", !0),
                    (y(!0), R(he, null, It(U, (P) => (y(), _(AT, {
                      key: P.id,
                      onLongPress: (Q) => L(P),
                      onRemove: (Q) => d(m)(t.deviceId, P),
                      onTap: (Q) => T(P)
                    }, {
                      default: Z(() => [
                        P.type === "note" ? (y(), _(PT, {
                          key: 0,
                          item: P
                        }, null, 8, ["item"])) : P.type === "product" ? (y(), _(iI, {
                          key: 1,
                          item: P,
                          onDecrease: (Q) => d(l)(t.deviceId, P, "decrease"),
                          onIncrease: (Q) => d(l)(t.deviceId, P, "increase")
                        }, null, 8, ["item", "onDecrease", "onIncrease"])) : P.type === "task" ? (y(), _(b$, {
                          key: 2,
                          item: P
                        }, null, 8, ["item"])) : X("", !0)
                      ]),
                      _: 2
                    }, 1032, ["onLongPress", "onRemove", "onTap"]))), 128))
                  ], 64))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (y(), _(gd, { key: 2 }, {
            default: Z(() => [
              V(ST)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }),
      V(d(ra), null, {
        default: Z(() => [
          p.value ? (y(), _(cS, {
            key: 0,
            "device-id": t.deviceId,
            type: p.value,
            onClose: E[5] || (E[5] = (U) => p.value = null)
          }, null, 8, ["device-id", "type"])) : k.value ? (y(), _(dS, {
            key: 1,
            "device-id": t.deviceId,
            item: k.value,
            onClose: E[6] || (E[6] = (U) => k.value = null)
          }, null, 8, ["device-id", "item"])) : X("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), S$ = /* @__PURE__ */ H({
  __name: "ListWidget",
  setup(t) {
    const e = te(null), n = te(!1);
    return window.addEventListener("homeyReady", () => {
      const s = Homey.getDeviceIds();
      e.value = s[0] ?? null, n.value = !0, Homey.ready();
    }), (s, i) => (y(), _(d(eS), {
      class: x(s.$style.listWidget)
    }, {
      default: Z(() => [
        n.value ? (y(), _(w$, {
          key: 0,
          "device-id": e.value
        }, null, 8, ["device-id"])) : X("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const T$ = "listWidget";
var I$ = { listWidget: T$ };
const $$ = {
  $style: I$
};
var C$ = /* @__PURE__ */ je(S$, [["__cssModules", $$]]), x$ = /* @__PURE__ */ H({
  __name: "PairView",
  setup(t) {
    const e = Wn(), n = te([]), s = te([]), i = kn({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    Rn(async () => {
      Homey.setTitle(Homey.__("device.list.pair.title")), Homey.setSubtitle(Homey.__("device.list.pair.subtitle")), n.value = await Homey.emit("colors"), s.value = await Homey.emit("icons");
    });
    async function r() {
      Homey.showLoadingOverlay(), await Homey.createDevice({
        name: i.name,
        data: {
          id: await Homey.emit("id")
        },
        store: {
          color: i.color,
          icon: i.icon
        }
      }), Homey.done(), Homey.hideLoadingOverlay();
    }
    return as(xu, n), as(Eu, s), (a, o) => (y(), _(d(zm), {
      class: x(a.$style.pairView)
    }, {
      default: Z(() => [
        V(d(nr), {
          title: d(e)("device.list.pair.name.title"),
          description: d(e)("device.list.pair.name.description")
        }, {
          default: Z(() => [
            V(d(Wm), {
              modelValue: i.name,
              "onUpdate:modelValue": o[0] || (o[0] = (l) => i.name = l),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        V(d(nr), {
          title: d(e)("device.list.pair.color.title"),
          description: d(e)("device.list.pair.color.description")
        }, {
          default: Z(() => [
            V(d(Rm), {
              modelValue: i.color,
              "onUpdate:modelValue": o[1] || (o[1] = (l) => i.color = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        V(d(nr), {
          title: d(e)("device.list.pair.icon.title"),
          description: d(e)("device.list.pair.icon.description")
        }, {
          default: Z(() => [
            V(d(Pm), {
              modelValue: i.icon,
              "onUpdate:modelValue": o[2] || (o[2] = (l) => i.icon = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        V(d(_m), {
          label: d(e)("device.list.pair.submit"),
          onClick: o[3] || (o[3] = (l) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const E$ = "pairView";
var F$ = { pairView: E$ };
const O$ = {
  $style: F$
};
var M$ = /* @__PURE__ */ je(x$, [["__cssModules", O$]]), D$ = /* @__PURE__ */ H({
  __name: "RepairView",
  setup(t) {
    const e = Wn(), n = te([]), s = te([]), i = kn({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    Rn(async () => {
      Homey.setTitle(Homey.__("device.list.repair.title")), Homey.setSubtitle(Homey.__("device.list.repair.subtitle")), n.value = await Homey.emit("colors"), s.value = await Homey.emit("icons");
      const { name: a, data: o } = await Homey.emit("fetch");
      i.name = a, i.color = o.color, i.icon = o.icon, Homey.setTitle(i.name);
    });
    async function r() {
      Homey.showLoadingOverlay(), await Homey.emit("save", {
        name: i.name,
        store: {
          color: i.color,
          icon: i.icon
        }
      }), Homey.done(), Homey.hideLoadingOverlay();
    }
    return as(xu, n), as(Eu, s), (a, o) => (y(), _(d(zm), {
      class: x(a.$style.repairView)
    }, {
      default: Z(() => [
        V(d(nr), {
          title: d(e)("device.list.pair.color.title"),
          description: d(e)("device.list.pair.color.description")
        }, {
          default: Z(() => [
            V(d(Rm), {
              modelValue: i.color,
              "onUpdate:modelValue": o[0] || (o[0] = (l) => i.color = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        V(d(nr), {
          title: d(e)("device.list.pair.icon.title"),
          description: d(e)("device.list.pair.icon.description")
        }, {
          default: Z(() => [
            V(d(Pm), {
              modelValue: i.icon,
              "onUpdate:modelValue": o[1] || (o[1] = (l) => i.icon = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        V(d(_m), {
          label: d(e)("device.list.repair.submit"),
          onClick: o[2] || (o[2] = (l) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const A$ = "repairView";
var L$ = { repairView: A$ };
const N$ = {
  $style: L$
};
var V$ = /* @__PURE__ */ je(D$, [["__cssModules", N$]]);
var B$ = {
  prefix: "far",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z"]
}, _$ = {
  prefix: "far",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8l115.6 0c13.3 0 25.3 8.3 30 20.8L328 48 424 48c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48l96 0 16.2-43.2zm-84.6 448L28.7 144 76.9 144 99.5 449.2c.6 8.4 7.6 14.8 16 14.8l217.1 0c8.4 0 15.3-6.5 16-14.8l22.6-305.2 48.1 0-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3l-217.1 0c-33.5 0-61.3-25.9-63.8-59.3z"]
}, R$ = {
  prefix: "far",
  iconName: "bottle-droplet",
  icon: [320, 512, [], "e4c4", "M96-32c-17.7 0-32 14.3-32 32 0 11.8 6.4 22.2 16 27.7l0 121.7C32.2 177.1 0 228.7 0 288L0 456c0 48.6 39.4 88 88 88l144 0c48.6 0 88-39.4 88-88l0-168c0-59.3-32.2-110.9-80-138.6l0-121.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32L96-32zm32 64l64 0 0 132c0 9.4 5.5 18 14.1 21.9 38.9 17.6 65.9 56.7 65.9 102.1l0 168c0 22.1-17.9 40-40 40L88 496c-22.1 0-40-17.9-40-40l0-168c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9l0-132zm96 320c0-21.2-28.9-64.5-47.9-90.6-8.1-11.1-24.2-11.1-32.3 0-19 26.1-47.9 69.4-47.9 90.6 0 31.6 28.7 64 64 64s64-32.4 64-64z"]
}, z$ = {
  prefix: "far",
  iconName: "wheat",
  icon: [576, 512, [], "f72d", "M72.5 240c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L297.4 455c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-30.5-30.5-63 63c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l63-63-30.5-30.5c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zm145 202.9c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM184.5 128c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L409.4 343c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM73.7 299.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L73.7 299.1zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM296.5 16c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L521.4 231c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM185.7 187.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4l-27.9-27.9zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM297.7 75.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L297.7 75.1zM544.5-24c6.4 0 12.5 2.5 17 7s7 10.6 7 17l0 35-.1 5.2c-2.6 51.7-44 93.1-95.7 95.7l-5.2 .1-35 0c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17l0-35c0-55.8 45.2-101 101-101l35 0zm-35 48c-29.3 0-53 23.7-53 53l0 11 11 0 5.4-.3c25-2.5 44.8-22.4 47.3-47.3l.3-5.4 0-11-11 0z"]
}, W$ = {
  prefix: "far",
  iconName: "bottle-baby",
  icon: [320, 512, [], "e673", "M124.6 17.7L128 16 128 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 3.4 1.7c17.5 8.8 28.6 26.7 28.6 46.3 17.7 0 32 14.3 32 32l0 48 27.5 45.8c13.4 22.4 20.5 48 20.5 74.1L304 480c0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64l0-216.1c0-26.1 7.1-51.7 20.5-74.1L64 144 64 96c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3zM256 480l0-216.1c0-17.4-4.7-34.5-13.7-49.4l-13.5-22.5-137.6 0-13.5 22.5c-9 14.9-13.7 32-13.7 49.4l0 8.1 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 48c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"]
}, P$ = {
  prefix: "far",
  iconName: "bread-loaf",
  icon: [576, 512, [127838], "f7eb", "M152 80l96 0c57.4 0 104 46.6 104 104l0 31c0 3.7-2.5 6.9-6.1 7.8l-7.8 1.9C327.5 227.4 320 237 320 248l0 144c0 22.1-17.9 40-40 40l-160 0c-22.1 0-40-17.9-40-40l0-144c0-11-7.5-20.6-18.2-23.3l-7.8-1.9c-3.6-.9-6.1-4.1-6.1-7.8l0-31C48 126.6 94.6 80 152 80zM120 480l336 0c48.6 0 88-39.4 88-88l0-120.8c18.3-3.7 32-19.8 32-39.2l0-48c0-83.9-68.1-152-152-152L152 32C68.1 32 0 100.1 0 184l0 31c0 21.9 12.8 41.5 32 50.6L32 392c0 48.6 39.4 88 88 88zm336-48l-97.6 0c6.1-12 9.6-25.6 9.6-40l0-120 128 0 0 120c0 22.1-17.9 40-40 40zM399.3 224c.5-2.9 .7-5.9 .7-9l0-31c0-40.2-15.6-76.8-41.1-104L424 80c57.4 0 104 46.6 104 104l0 40-128.7 0z"]
}, H$ = {
  prefix: "far",
  iconName: "carrot",
  icon: [576, 512, [129365], "f787", "M392.4 25.9l6.5 6.5c21.9 21.9 21.9 57.3 0 79.2l-6.5 6.5-6.5-6.5c-21.9-21.9-21.9-57.3 0-79.2l6.5-6.5zm40.4 119.6c21.9-21.9 57.3-21.9 79.2 0l6.5 6.5-6.5 6.5c-21.9 21.9-57.3 21.9-79.2 0l-6.5-6.5 6.5-6.5zm30-64c2.7-29.7-7.3-60.4-30-83.1L420.7-13.7c-15.6-15.6-40.9-15.6-56.6 0L352-1.5c-27 27-36.1 65.2-27.1 99.7-8.2-1.4-16.6-2.1-25.3-2.1-58.3 0-111.3 34.1-135.5 87.2L35.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5L361.1 380.3c53.1-24.1 87.2-77.1 87.2-135.5 0-8.6-.7-17-2.1-25.2 34.5 8.9 72.7-.1 99.7-27.1L558 180.3c15.6-15.6 15.6-40.9 0-56.6l-12.1-12.1c-22.7-22.7-53.4-32.8-83.1-30zM234.3 168c17.9-15.2 40.9-24 65.3-24 55.7 0 100.8 45.1 100.8 100.8 0 39.5-23.1 75.4-59.1 91.8l-89.7 40.8-26.3-26.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L205 398.5 96.6 447.8 205.8 207.4 239.4 241c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-39-39z"]
}, U$ = {
  prefix: "far",
  iconName: "steak",
  icon: [576, 512, [129385], "f824", "M143.9 240.1l12.8 0c34.4 0 66-18.8 82.4-49.1l45.5-84.1C304.4 70.6 342.3 48 383.6 48 445.7 48 496 98.3 496 160.4L496 288c0 79.5-64.5 144-144 144l-208.1 0C91 432 48 389 48 336.1s43-95.9 95.9-95.9zm12.8-48l-12.8 0C64.4 192.1 0 256.6 0 336.1S64.4 480 143.9 480L352 480c106 0 192-86 192-192l0-127.6C544 71.8 472.2 0 383.6 0 324.7 0 270.5 32.3 242.5 84.1L197 168.2c-8 14.8-23.4 24-40.2 24zm-12.8 96c-26.5 0-47.9 21.5-47.9 47.9S117.5 384 143.9 384L352 384c53 0 96-43 96-96l0-127.6c0-35.6-28.8-64.4-64.4-64.4-23.6 0-45.4 13-56.7 33.8l-45.5 84.1c-24.8 45.8-72.6 74.3-124.6 74.3l-12.8 0zM360 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
}, Z$ = {
  prefix: "far",
  iconName: "bowl-spoon",
  icon: [512, 512, [129379], "e3e0", "M112 128c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48zm0 48c52.2 0 96-30.6 108.5-72L488 104c13.3 0 24-10.7 24-24s-10.7-24-24-24L220.5 56C208 14.6 164.2-16 112-16 50.1-16 0 27 0 80s50.1 96 112 96zm64.5 282.9C172 447.1 163 437.6 151.5 432.5 90.4 404.8 48 343.3 48 272l416 0c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1l-144 0c-3.3 0-6.3-2-7.5-5.1zM48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8l144 0c23.8 0 44.2-14.9 52.3-35.8 77.7-35.2 131.7-113.4 131.7-204.2 0-26.5-21.5-48-48-48L48 224z"]
}, q$ = {
  prefix: "far",
  iconName: "pump-soap",
  icon: [320, 512, [], "e06b", "M128 48l64 0 0 80-64 0 0-80zM80 32l0 96-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-16 0 0-40 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-8c0-17.7-14.3-32-32-32L112 0C94.3 0 80 14.3 80 32zM192 176l64 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l128 0zm32 168c0-32.5-37-80.9-50.9-97.9-3.2-3.9-8.1-6.1-13.1-6.1s-9.9 2.2-13.1 6.1c-13.8 16.9-50.9 65.3-50.9 97.9 0 35.3 28.7 56 64 56s64-20.7 64-56z"]
}, G$ = {
  prefix: "far",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"]
}, Y$ = {
  prefix: "far",
  iconName: "spray-can-sparkles",
  icon: [576, 512, ["air-freshener"], "f5d0", "M160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80zm0 176c-26.5 0-48 21.5-48 48l0 184c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-184c0-26.5-21.5-48-48-48l-128 0zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 184c0 39.8-32.2 72-72 72l-176 0c-39.8 0-72-32.2-72-72l0-184zm160 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM448 48c0 1.4-1 3-2.2 3.6L416 64 403.6 93.8C403 95 401.4 96 400 96s-3-1-3.6-2.2L384 64 354.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L384 32 396.4 2.2C397 1 398.6 0 400 0s3 1 3.6 2.2L416 32 445.8 44.4C447 45 448 46.6 448 48zm76.4 45.8L512 64 482.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 32 524.4 2.2C525 1 526.6 0 528 0s3 1 3.6 2.2L544 32 573.8 44.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 64 531.6 93.8C531 95 529.4 96 528 96s-3-1-3.6-2.2zm7.2 100.4L544 224 573.8 236.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 256 531.6 285.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L512 256 482.2 243.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 224 524.4 194.2c.6-1.2 2.2-2.2 3.6-2.2s3 1 3.6 2.2zM512 144c0 1.4-1 3-2.2 3.6L480 160 467.6 189.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L448 160 418.2 147.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L448 128 460.4 98.2C461 97 462.6 96 464 96s3 1 3.6 2.2L480 128 509.8 140.4c1.2 .6 2.2 2.2 2.2 3.6z"]
}, j$ = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, J$ = {
  prefix: "far",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9C512 342.1 403.9 448 273.2 448 191.7 448 121.9 392.4 101.8 316.8 68.7 347.4 48 391.3 48 440l0 16c0 13.3-10.7 24-24 24S0 469.2 0 456l0-16c0-75.1 38.3-141.2 96.4-179.9 6.1-91.7 82.4-164.1 175.6-164.1 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3zM464 79.9c-38.3 29.5-102.4 64.1-192 64.1-57.6 0-106.4 38.1-122.4 90.4 20.9-6.8 43.2-10.4 66.4-10.4l80 0c13.3 0 24 10.8 24 24s-10.7 24-24 24l-80 0c-25.4 0-49.4 5.7-71 15.8 7.9 63.1 62.6 112.2 128.2 112.2 104.7 0 190.8-84.9 190.8-189.1l0-131z"]
}, K$ = {
  prefix: "far",
  iconName: "fish",
  icon: [576, 512, [128031], "f578", "M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1 33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8-12.6-22.1-35-52.2-65.3-77.8-33.7-28.5-76-50.2-124.5-50.2s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1-14 15.8-36.7 20.6-56 11.8l-54.3-24.9 21.1 36.9c8.4 14.8 8.4 32.9 0 47.6l-21.1 36.9 54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35 39.2-33.1 92-61.5 155.5-61.5s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8 4.7 9.2 4.7 20.1 0 29.3-14.1 27.4-41.9 66.8-81 99.8-39.2 33.1-92 61.5-155.5 61.5s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5s-11.1-25.4-4.2-37.5zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Q$ = {
  prefix: "far",
  iconName: "olive-branch",
  icon: [640, 512, [], "e317", "M2.7 53.1C13.8 41.6 59 0 128 0 194.9 0 239.4 39.1 252.2 52L306 26.7C343.3 9.1 384 0 425.2 0L616 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L425.2 48c-34.2 0-67.9 7.5-98.8 22.1L191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0c-8.8 0-16-7.2-16-16l0-16C0 194.6 34.5 141.4 85.2 114.5 40.4 102.8 11.3 75.8 2.7 66.9 .9 65 0 62.6 0 60s.9-5 2.7-6.9zM399.4 427c19.3-25.7 32.6-63.3 32.6-107s-13.3-81.3-32.6-107c-19.2-25.7-42.2-37-63.4-37s-44.2 11.4-63.4 37C253.3 238.7 240 276.4 240 320s13.3 81.3 32.6 107c19.2 25.7 42.2 37 63.4 37s44.2-11.4 63.4-37zM336 512c-79.5 0-144-86-144-192s64.5-192 144-192 144 86 144 192-64.5 192-144 192zm129.7-40.2c9.4-13.1 17.6-27.5 24.4-43.1 3.6 .8 7.1 1.5 10.5 2 31.1 4.6 55-3.6 70.2-19.3 15.4-16 23.9-42.1 19.2-76-4.7-33.8-22.2-71.6-53.2-103.7-18-18.7-37.7-32.5-57.2-41.7-4.9-8.8-10.3-17.2-16.2-25-10.5-14-22.7-26.5-36.2-36.9 48.2 1.6 101.3 25.8 144.2 70.3 75 77.8 90.2 188.1 33.9 246.4-34.1 35.4-86.8 43.5-139.6 27z"]
}, X$ = {
  prefix: "far",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M209.5 369c-9.4 9.4-24.6 9.4-33.9 0L15.5 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143 143-143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-160 160z"]
}, eC = {
  prefix: "far",
  iconName: "can-food",
  icon: [384, 512, [129387], "e3e6", "M320 434.3c-3.4 3-10.2 7.5-21.7 12.2-24.8 10.1-62.3 17.5-106.3 17.5s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2l0-144.8c14.2 6.2 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1l0 144.8zm48 5.7l0-368c0-39.8-78.8-72-176-72S16 32.2 16 72l0 368c0 39.8 78.8 72 176 72s176-32.2 176-72zM304 72c0 13.3-50.1 24-112 24S80 85.3 80 72 130.1 48 192 48 304 58.7 304 72zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, tC = {
  prefix: "far",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"]
}, nC = {
  prefix: "far",
  iconName: "cup-straw",
  icon: [384, 512, [129380], "e363", "M232.6-16C207.2-16 185 1.1 178.5 25.6L159.7 96 32 96C18.7 96 8 106.7 8 120s10.7 24 24 24L60.2 468.2C62.3 493 83.1 512 108 512l168 0c24.9 0 45.7-19 47.8-43.8L352 144c13.3 0 24-10.7 24-24s-10.7-24-24-24l-142.6 0 15.5-58.1c.9-3.5 4.1-5.9 7.7-5.9L264 32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-31.4 0zM80.2 144l223.6 0-27.8 320-168 0-27.8-320z"]
}, sC = {
  prefix: "far",
  iconName: "salad",
  icon: [512, 512, [129367, "bowl-salad"], "f81e", "M272 208c0 11 1.2 21.7 3.6 32l-31.6 0 0-128c0-11-9-20-20-20s-20 9-20 20l0 127.7-93.9-93.9c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L147.7 240 96 240c-53 0-96-43-96-96S43 48 96 48c8.7 0 17.2 1.2 25.3 3.4 17.2-39.6 56.8-67.4 102.7-67.4s85.5 27.7 102.7 67.4c8-2.2 16.5-3.4 25.3-3.4 19.9 0 38.3 6 53.6 16.4-74.7 5.3-133.6 67.6-133.6 143.6zM117.9 422.3c12.9 5.7 22.7 16.7 26.8 30.3 2 6.6 8.2 11.4 15.3 11.4l192 0c7.2 0 13.4-4.8 15.3-11.4 4-13.5 13.8-24.6 26.8-30.3 35.2-15.4 61.2-47.6 68.1-86.3L49.8 336c6.9 38.7 32.9 70.9 68.1 86.3zM0 315.4C0 300.3 12.3 288 27.4 288l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 67.4-40.6 125.4-98.6 150.8-7.9 26.4-32.4 45.7-61.4 45.7l-192 0c-29 0-53.5-19.3-61.4-45.7-58.1-25.4-98.6-83.4-98.6-150.8zM464 208c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32l-54.8 0c-3.5-10-5.5-20.8-5.5-32 0-53 43-96 96-96s96 43 96 96c0 11.2-1.9 22-5.5 32l-54.8 0c7.6-8.5 12.2-19.7 12.2-32z"]
}, iC = {
  prefix: "far",
  iconName: "paw-simple",
  icon: [448, 512, ["paw-alt"], "f701", "M192 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-.7 146.1c7.1-11.3 19.4-18.1 32.7-18.1s25.7 6.9 32.7 18.1l49.2 78.6c8.7 14 20.9 22.8 32.2 28.1 17.8 8.4 30 26.4 30 47.1 0 28.7-23.3 52-52 52-11.1 0-21.2-3.4-29.6-9.2-19.6-13.6-43.8-17.6-62.4-17.6s-42.8 4-62.4 17.6c-8.4 5.8-18.5 9.2-29.6 9.2-28.7 0-52-23.3-52-52 0-20.8 12.2-38.8 30-47.1 11.2-5.3 23.4-14.1 32.2-28.1l49.2-78.6zm-89.9 53.2c-2.8 4.5-7.1 7.8-11.8 10.1-34 16-57.6 50.5-57.6 90.6 0 55.2 44.8 100 100 100 21.2 0 40.8-6.6 56.9-17.8 17.4-12 52.8-12 70.1 0 16.2 11.2 35.8 17.8 56.9 17.8 55.2 0 100-44.8 100-100 0-40.1-23.6-74.6-57.6-90.6-4.8-2.2-9-5.6-11.8-10.1l-49.1-78.6C281.6 175.4 253.9 160 224 160s-57.6 15.4-73.4 40.7l-49.2 78.6zM304 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm144 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 240a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, rC = {
  prefix: "far",
  iconName: "cheese-swiss",
  icon: [512, 512, [129472], "f7f0", "M464 256l0-15.8c0-88.5-71.7-160.2-160.2-160.2-.8 0-1.6 .2-2.3 .7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2C50 248.4 48 252.1 48 256l274.7 0c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32l50.7 0zM48 304l0 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-112-60.2 0c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16L48 304zm464-63.8L512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2zM176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
}, aC = {
  prefix: "far",
  iconName: "capsules",
  icon: [576, 512, [], "f46b", "M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112-128 0 0-112zm0 288l0-125.3 128 0 0 125.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM32 112l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-105.8 116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3c-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112zM283.4 249.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l53.3 77.7-106.1 74.3-51.5-75.1zM411.9 436.6l-49.8-72.6 106.1-74.3 48 70c20.9 30.4 13.3 72.2-15.8 93-28.5 20.4-68 13.7-88.5-16.2z"]
}, oC = {
  prefix: "far",
  iconName: "cookie",
  icon: [512, 512, [127850], "f563", "M240.5 64.6c-12-1.7-24.3 .5-35.1 6.2l-74 39.5C120.7 116 112 125 106.6 136L69.9 211.6c-5.4 11-7.1 23.5-5 35.6L79.4 330c2.1 12.1 8 23.2 16.8 31.7l60.3 58.4c8.8 8.5 20 14 32 15.7l83 11.7c12 1.7 24.3-.5 35.1-6.2l74-39.5C391.3 396 400 387 405.4 376l36.7-75.5c5.4-11 7.1-23.5 5-35.6L432.6 182c-2.1-12.1-8-23.2-16.8-31.7L355.5 91.9c-8.8-8.5-20-14-32-15.7l-83-11.7zM182.8 28.4c19.7-10.5 42.3-14.5 64.4-11.4l83 11.7c22.1 3.1 42.7 13.2 58.7 28.7l60.3 58.4c16.1 15.6 26.8 35.8 30.7 57.9l14.6 82.8c3.9 22.1 .7 44.8-9.1 64.9L448.6 397c-9.8 20.1-25.7 36.6-45.4 47.2l-74 39.5c-19.7 10.5-42.3 14.5-64.4 11.4l-83-11.7c-22.1-3.1-42.7-13.2-58.7-28.7L62.8 396.2C46.8 380.6 36 360.3 32.2 338.3L17.6 255.5c-3.9-22.1-.7-44.8 9.1-64.9L63.4 115c9.8-20.1 25.7-36.6 45.4-47.2l74-39.5zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, lC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  faAngleDown: X$,
  faBottleBaby: W$,
  faBottleDroplet: R$,
  faBowlSpoon: Z$,
  faBreadLoaf: P$,
  faCalendar: G$,
  faCanFood: eC,
  faCapsules: aC,
  faCarrot: H$,
  faCheeseSwiss: rC,
  faCookie: oC,
  faCupStraw: nC,
  faFish: K$,
  faLeaf: J$,
  faMinus: B$,
  faOliveBranch: Q$,
  faPawSimple: iC,
  faPlus: tC,
  faPumpSoap: q$,
  faSalad: sC,
  faSnowflake: j$,
  faSprayCanSparkles: Y$,
  faSteak: U$,
  faTrash: _$,
  faWheat: z$
});
vv(lC);
function Bu(t, e) {
  const n = Ip(t);
  return n.config.globalProperties.t = (s) => Homey.__(s) ?? s, n.use(tS()), n.mount(e), n;
}
function EC(t) {
  Bu(C$, t);
}
function FC(t) {
  Bu(M$, t);
}
function OC(t) {
  Bu(V$, t);
}
window.onHomeyReady = function() {
  document.documentElement.classList.contains("homey-dark-mode") && document.documentElement.setAttribute("dark", "dark"), window.dispatchEvent(new CustomEvent("homeyReady"));
};
export {
  _m as ButtonPrimary,
  CC as ButtonTransparent,
  Rm as ColorPicker,
  zm as Form,
  nr as FormGroup,
  Wm as FormInput,
  Ds as Icon,
  Pm as IconPicker,
  xC as ScrollContainer,
  EC as createListWidget,
  FC as createPairView,
  OC as createRepairView,
  Wn as useTranslate
};
