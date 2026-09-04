var sa, ia;
let jl, et, Le, Gs, Zs, Xi, Oa, Gl, Gn, Ba;
function vr(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
let Te = {}, gs = [], jt = () => {
}, Au = () => !1, yr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || 97 > t.charCodeAt(2)), dl = (t) => t.startsWith("onUpdate:"), He = Object.assign, fl = (t, e) => {
  let n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, xf = Object.prototype.hasOwnProperty, xe = (t, e) => xf.call(t, e), se = Array.isArray, ue = (t) => typeof t == "function", De = (t) => typeof t == "string", Ot = (t) => typeof t == "symbol", Ae = (t) => t !== null && typeof t == "object", $u = (t) => (Ae(t) || ue(t)) && ue(t.then) && ue(t.catch), Ge = Object.prototype.toString, br = (t) => De(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ys = vr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), kr = (t) => {
  let e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Ef = /-\w/g, yt = kr((t) => t.replace(Ef, (e) => e.slice(1).toUpperCase())), Ff = /\B([A-Z])/g, Rn = kr((t) => t.replace(Ff, "-$1").toLowerCase()), wr = kr((t) => t.charAt(0).toUpperCase() + t.slice(1)), ra = kr((t) => t ? `on${wr(t)}` : ""), mt = (t, e) => !Object.is(t, e), Ui = (t, ...e) => {
  for (let n = 0; n < t.length; n++) t[n](...e);
}, Lu = (t, e, n, s = !1) => {
  Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: s, value: n });
}, Ir = (t) => {
  let e = parseFloat(t);
  return isNaN(e) ? t : e;
}, aa = (t) => {
  let e = De(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
}, Sr = () => jl || (jl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Af = vr("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function We(t) {
  if (se(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) {
      let s = t[n], i = De(s) ? (function(r) {
        let a = {};
        return r.replace(Mf, "").split($f).forEach((l) => {
          if (l) {
            let o = l.split(Lf);
            o.length > 1 && (a[o[0].trim()] = o[1].trim());
          }
        }), a;
      })(s) : We(s);
      if (i) for (let r in i) e[r] = i[r];
    }
    return e;
  }
  if (De(t) || Ae(t)) return t;
}
let $f = /;(?![^(]*\))/g, Lf = /:([^]+)/, Mf = /\/\*[^]*?\*\//g;
function w(t) {
  let e = "";
  if (De(t)) e = t;
  else if (se(t)) for (let n = 0; n < t.length; n++) {
    let s = w(t[n]);
    s && (e += s + " ");
  }
  else if (Ae(t)) for (let n in t) t[n] && (e += n + " ");
  return e.trim();
}
function la(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !De(e) && (t.class = w(e)), n && (t.style = We(n)), t;
}
let Df = vr("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function ss(t, e) {
  let n, s;
  if (t === e) return !0;
  let i = (n = t, Ge.call(n) === "[object Date]"), r = (s = e, Ge.call(s) === "[object Date]");
  if (i || r) return !!i && !!r && t.getTime() === e.getTime();
  if (i = Ot(t), r = Ot(e), i || r) return t === e;
  if (i = se(t), r = se(e), i || r) return !!i && !!r && (function(a, l) {
    if (a.length !== l.length) return !1;
    let o = !0;
    for (let u = 0; o && u < a.length; u++) o = ss(a[u], l[u]);
    return o;
  })(t, e);
  if (i = Ae(t), r = Ae(e), i || r) {
    if (!i || !r || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (let a in t) {
      let l = t.hasOwnProperty(a), o = e.hasOwnProperty(a);
      if (l && !o || !l && o || !ss(t[a], e[a])) return !1;
    }
  }
  return String(t) === String(e);
}
function hl(t, e) {
  return t.findIndex((n) => ss(n, e));
}
let Mu = (t) => !!(t && t.__v_isRef === !0), fe = (t) => De(t) ? t : t == null ? "" : se(t) || Ae(t) && (t.toString === Ge || !ue(t.toString)) ? Mu(t) ? fe(t.value) : JSON.stringify(t, Du, 2) : String(t), Du = (t, e) => {
  let n;
  if (Mu(e)) return Du(t, e.value);
  if (n = e, Ge.call(n) === "[object Map]") return { [`Map(${e.size})`]: [...e.entries()].reduce((s, [i, r], a) => (s[oa(i, a) + " =>"] = r, s), {}) };
  {
    let s;
    if (s = e, Ge.call(s) === "[object Set]") return { [`Set(${e.size})`]: [...e.values()].map((i) => oa(i)) };
    {
      if (Ot(e)) return oa(e);
      let i;
      if (Ae(e) && !se(e) && (i = e, Ge.call(i) !== "[object Object]")) return String(e);
    }
  }
  return e;
}, oa = (t, e = "") => {
  var n;
  return Ot(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
class Ou {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = et, !e && et && (this.index = (et.scopes || (et.scopes = [])).push(this) - 1);
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
      let n = et;
      try {
        return et = this, e();
      } finally {
        et = n;
      }
    }
  }
  on() {
    ++this._on == 1 && (this.prevScope = et, et = this);
  }
  off() {
    this._on > 0 && --this._on == 0 && (et = this.prevScope, this.prevScope = void 0);
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
function Bu(t) {
  return new Ou(t);
}
function Vu() {
  return et;
}
function Nu(t, e = !1) {
  et && et.cleanups.push(t);
}
let ua = /* @__PURE__ */ new WeakSet();
class _u {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, et && et.active && et.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, ua.has(this) && (ua.delete(this), this.trigger()));
  }
  notify() {
    (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || Ru(this));
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, Zl(this), Pu(this);
    let e = Le, n = Mt;
    Le = this, Mt = !0;
    try {
      return this.fn();
    } finally {
      zu(this), Le = e, Mt = n, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) pl(e);
      this.deps = this.depsTail = void 0, Zl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? ua.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Va(this) && this.run();
  }
  get dirty() {
    return Va(this);
  }
}
let Tr = 0;
function Ru(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Zs, Zs = t;
    return;
  }
  t.next = Gs, Gs = t;
}
function ml() {
  let t;
  if (!(--Tr > 0)) {
    if (Zs) {
      let e = Zs;
      for (Zs = void 0; e; ) {
        let n = e.next;
        e.next = void 0, e.flags &= -9, e = n;
      }
    }
    for (; Gs; ) {
      let e = Gs;
      for (Gs = void 0; e; ) {
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
function Pu(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function zu(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    let i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), pl(s), (function(r) {
      let { prevDep: a, nextDep: l } = r;
      a && (a.nextDep = l, r.prevDep = void 0), l && (l.prevDep = a, r.nextDep = void 0);
    })(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  t.deps = e, t.depsTail = n;
}
function Va(t) {
  for (let e = t.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (Hu(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty;
}
function Hu(t) {
  if (4 & t.flags && !(16 & t.flags) || (t.flags &= -17, t.globalVersion === ri) || (t.globalVersion = ri, !t.isSSR && 128 & t.flags && (!t.deps && !t._dirty || !Va(t)))) return;
  t.flags |= 2;
  let e = t.dep, n = Le, s = Mt;
  Le = t, Mt = !0;
  try {
    Pu(t);
    let i = t.fn(t._value);
    (e.version === 0 || mt(i, t._value)) && (t.flags |= 128, t._value = i, e.version++);
  } catch (i) {
    throw e.version++, i;
  } finally {
    Le = n, Mt = s, zu(t), t.flags &= -3;
  }
}
function pl(t, e = !1) {
  let { dep: n, prevSub: s, nextSub: i } = t;
  if (s && (s.nextSub = i, t.prevSub = void 0), i && (i.prevSub = s, t.nextSub = void 0), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) pl(r, !0);
  }
  e || --n.sc || !n.map || n.map.delete(n.key);
}
let Mt = !0, Wu = [];
function fn() {
  Wu.push(Mt), Mt = !1;
}
function hn() {
  let t = Wu.pop();
  Mt = t === void 0 || t;
}
function Zl(t) {
  let { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    let n = Le;
    Le = void 0;
    try {
      e();
    } finally {
      Le = n;
    }
  }
}
let ri = 0;
class Of {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Cr {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!Le || !Mt || Le === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Le) n = this.activeLink = new Of(Le, this), Le.deps ? (n.prevDep = Le.depsTail, Le.depsTail.nextDep = n, Le.depsTail = n) : Le.deps = Le.depsTail = n, (function s(i) {
      if (i.dep.sc++, 4 & i.sub.flags) {
        let r = i.dep.computed;
        if (r && !i.dep.subs) {
          r.flags |= 20;
          for (let l = r.deps; l; l = l.nextDep) s(l);
        }
        let a = i.dep.subs;
        a !== i && (i.prevSub = a, a && (a.nextSub = i)), i.dep.subs = i;
      }
    })(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      let s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Le.depsTail, n.nextDep = void 0, Le.depsTail.nextDep = n, Le.depsTail = n, Le.deps === n && (Le.deps = s);
    }
    return n;
  }
  trigger(e) {
    this.version++, ri++, this.notify(e);
  }
  notify(e) {
    Tr++;
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      ml();
    }
  }
}
let er = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ Symbol(""), Na = /* @__PURE__ */ Symbol(""), ai = /* @__PURE__ */ Symbol("");
function nt(t, e, n) {
  if (Mt && Le) {
    let s = er.get(t);
    s || er.set(t, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Cr()), i.map = s, i.key = n), i.track();
  }
}
function an(t, e, n, s, i, r) {
  let a = er.get(t);
  if (!a) return void ri++;
  let l = (o) => {
    o && o.trigger();
  };
  if (Tr++, e === "clear") a.forEach(l);
  else {
    let o = se(t), u = o && br(n);
    if (o && n === "length") {
      let d = Number(s);
      a.forEach((f, p) => {
        (p === "length" || p === ai || !Ot(p) && p >= d) && l(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && l(a.get(n)), u && l(a.get(ai)), e) {
      case "add":
        if (o) u && l(a.get("length"));
        else {
          let f;
          l(a.get(Xn)), f = t, Ge.call(f) === "[object Map]" && l(a.get(Na));
        }
        break;
      case "delete":
        if (!o) {
          let f;
          l(a.get(Xn)), f = t, Ge.call(f) === "[object Map]" && l(a.get(Na));
        }
        break;
      case "set":
        let d;
        d = t, Ge.call(d) === "[object Map]" && l(a.get(Xn));
    }
  }
  ml();
}
function os(t) {
  let e = ke(t);
  return e === t ? e : (nt(e, "iterate", ai), gt(t) ? e : e.map(Dt));
}
function xr(t) {
  return nt(t = ke(t), "iterate", ai), t;
}
function xn(t, e) {
  return mn(t) ? Zt(t) ? vs(Dt(e)) : vs(e) : Dt(e);
}
let Bf = { __proto__: null, [Symbol.iterator]() {
  return ca(this, Symbol.iterator, (t) => xn(this, t));
}, concat(...t) {
  return os(this).concat(...t.map((e) => se(e) ? os(e) : e));
}, entries() {
  return ca(this, "entries", (t) => (t[1] = xn(this, t[1]), t));
}, every(t, e) {
  return en(this, "every", t, e, void 0, arguments);
}, filter(t, e) {
  return en(this, "filter", t, e, (n) => n.map((s) => xn(this, s)), arguments);
}, find(t, e) {
  return en(this, "find", t, e, (n) => xn(this, n), arguments);
}, findIndex(t, e) {
  return en(this, "findIndex", t, e, void 0, arguments);
}, findLast(t, e) {
  return en(this, "findLast", t, e, (n) => xn(this, n), arguments);
}, findLastIndex(t, e) {
  return en(this, "findLastIndex", t, e, void 0, arguments);
}, forEach(t, e) {
  return en(this, "forEach", t, e, void 0, arguments);
}, includes(...t) {
  return da(this, "includes", t);
}, indexOf(...t) {
  return da(this, "indexOf", t);
}, join(t) {
  return os(this).join(t);
}, lastIndexOf(...t) {
  return da(this, "lastIndexOf", t);
}, map(t, e) {
  return en(this, "map", t, e, void 0, arguments);
}, pop() {
  return Vs(this, "pop");
}, push(...t) {
  return Vs(this, "push", t);
}, reduce(t, ...e) {
  return Yl(this, "reduce", t, e);
}, reduceRight(t, ...e) {
  return Yl(this, "reduceRight", t, e);
}, shift() {
  return Vs(this, "shift");
}, some(t, e) {
  return en(this, "some", t, e, void 0, arguments);
}, splice(...t) {
  return Vs(this, "splice", t);
}, toReversed() {
  return os(this).toReversed();
}, toSorted(t) {
  return os(this).toSorted(t);
}, toSpliced(...t) {
  return os(this).toSpliced(...t);
}, unshift(...t) {
  return Vs(this, "unshift", t);
}, values() {
  return ca(this, "values", (t) => xn(this, t));
} };
function ca(t, e, n) {
  let s = xr(t), i = s[e]();
  return s === t || gt(t) || (i._next = i.next, i.next = () => {
    let r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
let Vf = Array.prototype;
function en(t, e, n, s, i, r) {
  let a = xr(t), l = a !== t && !gt(t), o = a[e];
  if (o !== Vf[e]) {
    let f = o.apply(t, r);
    return l ? Dt(f) : f;
  }
  let u = n;
  a !== t && (l ? u = function(f, p) {
    return n.call(this, xn(t, f), p, t);
  } : n.length > 2 && (u = function(f, p) {
    return n.call(this, f, p, t);
  }));
  let d = o.call(a, u, s);
  return l && i ? i(d) : d;
}
function Yl(t, e, n, s) {
  let i = xr(t), r = n;
  return i !== t && (gt(t) ? n.length > 3 && (r = function(a, l, o) {
    return n.call(this, a, l, o, t);
  }) : r = function(a, l, o) {
    return n.call(this, a, xn(t, l), o, t);
  }), i[e](r, ...s);
}
function da(t, e, n) {
  let s = ke(t);
  nt(s, "iterate", ai);
  let i = s[e](...n);
  return (i === -1 || i === !1) && Ar(n[0]) ? (n[0] = ke(n[0]), s[e](...n)) : i;
}
function Vs(t, e, n = []) {
  fn(), Tr++;
  let s = ke(t)[e].apply(t, n);
  return ml(), hn(), s;
}
let Nf = vr("__proto__,__v_isRef,__isVue"), Uu = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ot));
function _f(t) {
  Ot(t) || (t = String(t));
  let e = ke(this);
  return nt(e, "has", t), e.hasOwnProperty(t);
}
class qu {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    let i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return s === (i ? r ? Ku : Ju : r ? Yu : Zu).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    let a = se(e);
    if (!i) {
      let o;
      if (a && (o = Bf[n])) return o;
      if (n === "hasOwnProperty") return _f;
    }
    let l = Reflect.get(e, n, Be(e) ? e : s);
    if ((Ot(n) ? Uu.has(n) : Nf(n)) || (i || nt(e, "get", n), r)) return l;
    if (Be(l)) {
      let o = a && br(n) ? l : l.value;
      return i && Ae(o) ? sn(o) : o;
    }
    return Ae(l) ? i ? sn(l) : Kt(l) : l;
  }
}
class ju extends qu {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, i) {
    let r = e[n], a = se(e) && br(n);
    if (!this._isShallow) {
      let u = mn(r);
      if (gt(s) || mn(s) || (r = ke(r), s = ke(s)), !a && Be(r) && !Be(s)) return u || (r.value = s), !0;
    }
    let l = a ? Number(n) < e.length : xe(e, n), o = Reflect.set(e, n, s, Be(e) ? e : i);
    return e === ke(i) && (l ? mt(s, r) && an(e, "set", n, s) : an(e, "add", n, s)), o;
  }
  deleteProperty(e, n) {
    let s = xe(e, n);
    e[n];
    let i = Reflect.deleteProperty(e, n);
    return i && s && an(e, "delete", n, void 0), i;
  }
  has(e, n) {
    let s = Reflect.has(e, n);
    return Ot(n) && Uu.has(n) || nt(e, "has", n), s;
  }
  ownKeys(e) {
    return nt(e, "iterate", se(e) ? "length" : Xn), Reflect.ownKeys(e);
  }
}
class Gu extends qu {
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
let Rf = new ju(), Pf = new Gu(), zf = new ju(!0), Hf = new Gu(!0), fa = (t) => t;
function Li(t) {
  return function() {
    return t !== "delete" && (t === "clear" ? void 0 : this);
  };
}
function Er(t, e) {
  let n, s = (He(n = { get(i) {
    let r = this.__v_raw, a = ke(r), l = ke(i);
    t || (mt(i, l) && nt(a, "get", i), nt(a, "get", l));
    let { has: o } = Reflect.getPrototypeOf(a), u = e ? fa : t ? vs : Dt;
    return o.call(a, i) ? u(r.get(i)) : o.call(a, l) ? u(r.get(l)) : void (r !== a && r.get(i));
  }, get size() {
    let i = this.__v_raw;
    return t || nt(ke(i), "iterate", Xn), i.size;
  }, has(i) {
    let r = this.__v_raw, a = ke(r), l = ke(i);
    return t || (mt(i, l) && nt(a, "has", i), nt(a, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
  }, forEach(i, r) {
    let a = this, l = a.__v_raw, o = ke(l), u = e ? fa : t ? vs : Dt;
    return t || nt(o, "iterate", Xn), l.forEach((d, f) => i.call(r, u(d), u(f), a));
  } }, t ? { add: Li("add"), set: Li("set"), delete: Li("delete"), clear: Li("clear") } : { add(i) {
    e || gt(i) || mn(i) || (i = ke(i));
    let r = ke(this);
    return Reflect.getPrototypeOf(r).has.call(r, i) || (r.add(i), an(r, "add", i, i)), this;
  }, set(i, r) {
    e || gt(r) || mn(r) || (r = ke(r));
    let a = ke(this), { has: l, get: o } = Reflect.getPrototypeOf(a), u = l.call(a, i);
    u || (i = ke(i), u = l.call(a, i));
    let d = o.call(a, i);
    return a.set(i, r), u ? mt(r, d) && an(a, "set", i, r) : an(a, "add", i, r), this;
  }, delete(i) {
    let r = ke(this), { has: a, get: l } = Reflect.getPrototypeOf(r), o = a.call(r, i);
    o || (i = ke(i), o = a.call(r, i)), l && l.call(r, i);
    let u = r.delete(i);
    return o && an(r, "delete", i, void 0), u;
  }, clear() {
    let i = ke(this), r = i.size !== 0, a = i.clear();
    return r && an(i, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = function(...r) {
      let a, l = this.__v_raw, o = ke(l), u = (a = o, Ge.call(a) === "[object Map]"), d = i === "entries" || i === Symbol.iterator && u, f = l[i](...r), p = e ? fa : t ? vs : Dt;
      return t || nt(o, "iterate", i === "keys" && u ? Na : Xn), { next() {
        let { value: h, done: v } = f.next();
        return v ? { value: h, done: v } : { value: d ? [p(h[0]), p(h[1])] : p(h), done: v };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }), n);
  return (i, r, a) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(xe(s, r) && r in i ? s : i, r, a);
}
let Wf = { get: Er(!1, !1) }, Uf = { get: Er(!1, !0) }, qf = { get: Er(!0, !1) }, jf = { get: Er(!0, !0) }, Zu = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap(), Ku = /* @__PURE__ */ new WeakMap();
function Kt(t) {
  return mn(t) ? t : Fr(t, !1, Rf, Wf, Zu);
}
function Gf(t) {
  return Fr(t, !1, zf, Uf, Yu);
}
function sn(t) {
  return Fr(t, !0, Pf, qf, Ju);
}
function Zf(t) {
  return Fr(t, !0, Hf, jf, Ku);
}
function Fr(t, e, n, s, i) {
  var r;
  let a;
  if (!Ae(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
  let l = (r = t).__v_skip || !Object.isExtensible(r) ? 0 : (function(d) {
    switch (d) {
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
  })((a = r, Ge.call(a)).slice(8, -1));
  if (l === 0) return t;
  let o = i.get(t);
  if (o) return o;
  let u = new Proxy(t, l === 2 ? s : n);
  return i.set(t, u), u;
}
function Zt(t) {
  return mn(t) ? Zt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function mn(t) {
  return !!(t && t.__v_isReadonly);
}
function gt(t) {
  return !!(t && t.__v_isShallow);
}
function Ar(t) {
  return !!t && !!t.__v_raw;
}
function ke(t) {
  let e = t && t.__v_raw;
  return e ? ke(e) : t;
}
function gl(t) {
  return !xe(t, "__v_skip") && Object.isExtensible(t) && Lu(t, "__v_skip", !0), t;
}
let Dt = (t) => Ae(t) ? Kt(t) : t, vs = (t) => Ae(t) ? sn(t) : t;
function Be(t) {
  return !!t && t.__v_isRef === !0;
}
function ne(t) {
  return Xu(t, !1);
}
function Qu(t) {
  return Xu(t, !0);
}
function Xu(t, e) {
  return Be(t) ? t : new Yf(t, e);
}
class Yf {
  constructor(e, n) {
    this.dep = new Cr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : ke(e), this._value = n ? e : Dt(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    let n = this._rawValue, s = this.__v_isShallow || gt(e) || mn(e);
    mt(e = s ? e : ke(e), n) && (this._rawValue = e, this._value = s ? e : Dt(e), this.dep.trigger());
  }
}
function c(t) {
  return Be(t) ? t.value : t;
}
let Jf = { get: (t, e, n) => e === "__v_raw" ? t : c(Reflect.get(t, e, n)), set: (t, e, n, s) => {
  let i = t[e];
  return Be(i) && !Be(n) ? (i.value = n, !0) : Reflect.set(t, e, n, s);
} };
function ec(t) {
  return Zt(t) ? t : new Proxy(t, Jf);
}
class Kf {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    let n = this.dep = new Cr(), { get: s, set: i } = e(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function Qf(t) {
  return new Kf(t);
}
function Xf(t) {
  let e = se(t) ? Array(t.length) : {};
  for (let n in t) e[n] = new tc(t, n, void 0);
  return e;
}
class tc {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = ke(e);
    let i = !0, r = e;
    if (!se(e) || !br(String(n))) do
      i = !Ar(r) || gt(r);
    while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = c(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && Be(this._raw[this._key])) {
      let n = this._object[this._key];
      if (Be(n)) {
        n.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    var e, n;
    let s;
    return e = this._raw, n = this._key, (s = er.get(e)) && s.get(n);
  }
}
class eh {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function pn(t, e, n) {
  return Be(t) ? t : ue(t) ? new eh(t) : !Ae(t) || !(arguments.length > 1) ? ne(t) : new tc(t, e, n);
}
class th {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Cr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ri - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && Le !== this) return Ru(this, !0), !0;
  }
  get value() {
    let e = this.dep.track();
    return Hu(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
let Mi = {}, tr = /* @__PURE__ */ new WeakMap();
function nh(t, e = !1, n = Gn) {
  if (n) {
    let s = tr.get(n);
    s || tr.set(n, s = []), s.push(t);
  }
}
function ln(t, e = 1 / 0, n) {
  if (e <= 0 || !Ae(t) || t.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(t) || 0) >= e) return t;
  if (n.set(t, e), e--, Be(t)) ln(t.value, e, n);
  else if (se(t)) for (let s = 0; s < t.length; s++) ln(t[s], e, n);
  else {
    let s, i;
    if (s = t, Ge.call(s) === "[object Set]" || (i = t, Ge.call(i) === "[object Map]")) t.forEach((r) => {
      ln(r, e, n);
    });
    else {
      let r;
      if (r = t, Ge.call(r) === "[object Object]") {
        for (let a in t) ln(t[a], e, n);
        for (let a of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, a) && ln(t[a], e, n);
      }
    }
  }
  return t;
}
function pi(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (i) {
    $r(i, e, n);
  }
}
function Bt(t, e, n, s) {
  if (ue(t)) {
    let i = pi(t, e, n, s);
    return i && $u(i) && i.catch((r) => {
      $r(r, e, n);
    }), i;
  }
  if (se(t)) {
    let i = [];
    for (let r = 0; r < t.length; r++) i.push(Bt(t[r], e, n, s));
    return i;
  }
}
function $r(t, e, n, s = !0) {
  e && e.vnode;
  let { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || Te;
  if (e) {
    let a = e.parent, l = e.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      let u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](t, l, o) === !1) return;
      }
      a = a.parent;
    }
    if (i) {
      fn(), pi(i, null, 10, [t, l, o]), hn();
      return;
    }
  }
  (function(a, l, o, u = !0, d = !1) {
    if (d) throw a;
    console.error(a);
  })(t, 0, 0, s, r);
}
let ut = [], Wt = -1, ys = [], En = null, hs = 0, nc = Promise.resolve(), qi = null;
function Jn(t) {
  let e = qi || nc;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function vl(t) {
  if (!(1 & t.flags)) {
    let e = Js(t), n = ut[ut.length - 1];
    !n || !(2 & t.flags) && e >= Js(n) ? ut.push(t) : ut.splice((function(s) {
      let i = Wt + 1, r = ut.length;
      for (; i < r; ) {
        let a = i + r >>> 1, l = ut[a], o = Js(l);
        o < s || o === s && 2 & l.flags ? i = a + 1 : r = a;
      }
      return i;
    })(e), 0, t), t.flags |= 1, sc();
  }
}
function sc() {
  qi || (qi = nc.then(function t(e) {
    try {
      for (Wt = 0; Wt < ut.length; Wt++) {
        let n = ut[Wt];
        n && !(8 & n.flags) && (4 & n.flags && (n.flags &= -2), pi(n, n.i, n.i ? 15 : 14), 4 & n.flags || (n.flags &= -2));
      }
    } finally {
      for (; Wt < ut.length; Wt++) {
        let n = ut[Wt];
        n && (n.flags &= -2);
      }
      Wt = -1, ut.length = 0, ic(), qi = null, (ut.length || ys.length) && t();
    }
  }));
}
function sh(t) {
  se(t) ? ys.push(...t) : En && t.id === -1 ? En.splice(hs + 1, 0, t) : 1 & t.flags || (ys.push(t), t.flags |= 1), sc();
}
function Jl(t, e, n = Wt + 1) {
  for (; n < ut.length; n++) {
    let s = ut[n];
    if (s && 2 & s.flags) {
      if (t && s.id !== t.uid) continue;
      ut.splice(n, 1), n--, 4 & s.flags && (s.flags &= -2), s(), 4 & s.flags || (s.flags &= -2);
    }
  }
}
function ic(t) {
  if (ys.length) {
    let e = [...new Set(ys)].sort((n, s) => Js(n) - Js(s));
    if (ys.length = 0, En) return void En.push(...e);
    for (hs = 0, En = e; hs < En.length; hs++) {
      let n = En[hs];
      4 & n.flags && (n.flags &= -2), 8 & n.flags || n(), n.flags &= -2;
    }
    En = null, hs = 0;
  }
}
let Js = (t) => t.id == null ? 2 & t.flags ? -1 : 1 / 0 : t.id, Xe = null, rc = null;
function nr(t) {
  let e = Xe;
  return Xe = t, rc = t && t.type.__scopeId || null, e;
}
function U(t, e = Xe, n) {
  if (!e || t._n) return t;
  let s = (...i) => {
    let r;
    s._d && or(-1);
    let a = nr(e);
    try {
      r = t(...i);
    } finally {
      nr(a), s._d && or(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function yl(t, e) {
  if (Xe === null) return t;
  let n = Br(Xe), s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [r, a, l, o = Te] = e[i];
    r && (ue(r) && (r = { mounted: r, updated: r }), r.deep && ln(a), s.push({ dir: r, instance: n, value: a, oldValue: void 0, arg: l, modifiers: o }));
  }
  return t;
}
function Hn(t, e, n, s) {
  let i = t.dirs, r = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    let l = i[a];
    r && (l.oldValue = r[a].value);
    let o = l.dir[s];
    o && (fn(), Bt(o, n, 8, [t.el, l, t, e]), hn());
  }
}
let ac = /* @__PURE__ */ Symbol("_vte"), Ws = (t) => t && (t.disabled || t.disabled === ""), Kl = (t) => t && (t.defer || t.defer === ""), Ql = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Xl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, ha = (t, e) => {
  let n = t && t.to;
  return De(n) ? e ? e(n) : null : n;
}, lc = { name: "Teleport", __isTeleport: !0, process(t, e, n, s, i, r, a, l, o, u) {
  let { mc: d, pc: f, pbc: p, o: { insert: h, querySelector: v, createText: b } } = u, A = Ws(e.props), { shapeFlag: S, children: P, dynamicChildren: C } = e;
  if (t == null) {
    let z = e.el = b(""), I = e.anchor = b("");
    h(z, n, s), h(I, n, s);
    let $ = (O, D) => {
      16 & S && d(P, O, D, i, r, a, l, o);
    }, Z = () => {
      let O = e.target = ha(e.props, v), D = eo(O, e, b, h);
      O && (a !== "svg" && Ql(O) ? a = "svg" : a !== "mathml" && Xl(O) && (a = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), A || ($(O, D), Oi(e, !1)));
    };
    A && ($(n, I), Oi(e, !0)), Kl(e.props) ? (e.el.__isMounted = !1, ot(() => {
      Z(), delete e.el.__isMounted;
    }, r)) : Z();
  } else {
    if (Kl(e.props) && t.el.__isMounted === !1) return void ot(() => {
      lc.process(t, e, n, s, i, r, a, l, o, u);
    }, r);
    e.el = t.el, e.targetStart = t.targetStart;
    let z = e.anchor = t.anchor, I = e.target = t.target, $ = e.targetAnchor = t.targetAnchor, Z = Ws(t.props), O = Z ? n : I, D = Z ? z : $;
    if (a === "svg" || Ql(I) ? a = "svg" : (a === "mathml" || Xl(I)) && (a = "mathml"), C ? (p(t.dynamicChildren, C, O, i, r, a, l), xl(t, e, !0)) : o || f(t, e, O, D, i, r, a, l, !1), A) Z ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Di(e, n, z, u, 1);
    else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
      let Y = e.target = ha(e.props, v);
      Y && Di(e, Y, null, u, 0);
    } else Z && Di(e, I, $, u, 1);
    Oi(e, A);
  }
}, remove(t, e, n, { um: s, o: { remove: i } }, r) {
  let { shapeFlag: a, children: l, anchor: o, targetStart: u, targetAnchor: d, target: f, props: p } = t;
  if (f && (i(u), i(d)), r && i(o), 16 & a) {
    let h = r || !Ws(p);
    for (let v = 0; v < l.length; v++) {
      let b = l[v];
      s(b, e, n, h, !!b.dynamicChildren);
    }
  }
}, move: Di, hydrate: function(t, e, n, s, i, r, { o: { nextSibling: a, parentNode: l, querySelector: o, insert: u, createText: d } }, f) {
  function p(b, A, S, P) {
    A.anchor = f(a(b), A, l(b), n, s, i, r), A.targetStart = S, A.targetAnchor = P;
  }
  let h = e.target = ha(e.props, o), v = Ws(e.props);
  if (h) {
    let b = h._lpa || h.firstChild;
    if (16 & e.shapeFlag) if (v) p(t, e, b, b && a(b));
    else {
      e.anchor = a(t);
      let A = b;
      for (; A; ) {
        if (A && A.nodeType === 8) {
          if (A.data === "teleport start anchor") e.targetStart = A;
          else if (A.data === "teleport anchor") {
            e.targetAnchor = A, h._lpa = e.targetAnchor && a(e.targetAnchor);
            break;
          }
        }
        A = a(A);
      }
      e.targetAnchor || eo(h, e, d, u), f(b && a(b), e, h, n, s, i, r);
    }
    Oi(e, v);
  } else v && 16 & e.shapeFlag && p(t, e, t, a(t));
  return e.anchor && a(e.anchor);
} };
function Di(t, e, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  let { el: a, anchor: l, shapeFlag: o, children: u, props: d } = t, f = r === 2;
  if (f && s(a, e, n), (!f || Ws(d)) && 16 & o) for (let p = 0; p < u.length; p++) i(u[p], e, n, 2);
  f && s(l, e, n);
}
let oc = lc;
function Oi(t, e) {
  let n = t.ctx;
  if (n && n.ut) {
    let s, i;
    for (e ? (s = t.el, i = t.anchor) : (s = t.targetStart, i = t.targetAnchor); s && s !== i; ) s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function eo(t, e, n, s) {
  let i = e.targetStart = n(""), r = e.targetAnchor = n("");
  return i[ac] = r, t && (s(i, t), s(r, t)), r;
}
let rn = /* @__PURE__ */ Symbol("_leaveCb"), Bi = /* @__PURE__ */ Symbol("_enterCb");
function uc() {
  let t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return yn(() => {
    t.isMounted = !0;
  }), wl(() => {
    t.isUnmounting = !0;
  }), t;
}
let kt = [Function, Array], cc = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: kt, onEnter: kt, onAfterEnter: kt, onEnterCancelled: kt, onBeforeLeave: kt, onLeave: kt, onAfterLeave: kt, onLeaveCancelled: kt, onBeforeAppear: kt, onAppear: kt, onAfterAppear: kt, onAppearCancelled: kt }, dc = (t) => {
  let e = t.subTree;
  return e.component ? dc(e.component) : e;
};
function fc(t) {
  let e = t[0];
  if (t.length > 1) {
    for (let n of t) if (n.type !== Qe) {
      e = n;
      break;
    }
  }
  return e;
}
let ih = { name: "BaseTransition", props: cc, setup(t, { slots: e }) {
  let n = Qt(), s = uc();
  return () => {
    let i = e.default && bl(e.default(), !0);
    if (!i || !i.length) return;
    let r = fc(i), a = ke(t), { mode: l } = a;
    if (s.isLeaving) return ma(r);
    let o = to(r);
    if (!o) return ma(r);
    let u = li(o, a, s, n, (f) => u = f);
    o.type !== Qe && is(o, u);
    let d = n.subTree && to(n.subTree);
    if (d && d.type !== Qe && !Yn(d, o) && dc(n).type !== Qe) {
      let f = li(d, a, s, n);
      if (is(d, f), l === "out-in" && o.type !== Qe) return s.isLeaving = !0, f.afterLeave = () => {
        s.isLeaving = !1, 8 & n.job.flags || n.update(), delete f.afterLeave, d = void 0;
      }, ma(r);
      l === "in-out" && o.type !== Qe ? f.delayLeave = (p, h, v) => {
        hc(s, d)[String(d.key)] = d, p[rn] = () => {
          h(), p[rn] = void 0, delete u.delayedLeave, d = void 0;
        }, u.delayedLeave = () => {
          v(), delete u.delayedLeave, d = void 0;
        };
      } : d = void 0;
    } else d && (d = void 0);
    return r;
  };
} };
function hc(t, e) {
  let { leavingVNodes: n } = t, s = n.get(e.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(e.type, s)), s;
}
function li(t, e, n, s, i) {
  let { appear: r, mode: a, persisted: l = !1, onBeforeEnter: o, onEnter: u, onAfterEnter: d, onEnterCancelled: f, onBeforeLeave: p, onLeave: h, onAfterLeave: v, onLeaveCancelled: b, onBeforeAppear: A, onAppear: S, onAfterAppear: P, onAppearCancelled: C } = e, z = String(t.key), I = hc(n, t), $ = (D, Y) => {
    D && Bt(D, s, 9, Y);
  }, Z = (D, Y) => {
    let X = Y[1];
    $(D, Y), se(D) ? D.every((k) => k.length <= 1) && X() : D.length <= 1 && X();
  }, O = { mode: a, persisted: l, beforeEnter(D) {
    let Y = o;
    if (!n.isMounted) if (r) Y = A || o;
    else return;
    D[rn] && D[rn](!0);
    let X = I[z];
    X && Yn(t, X) && X.el[rn] && X.el[rn](), $(Y, [D]);
  }, enter(D) {
    let Y = u, X = d, k = f;
    if (!n.isMounted) if (r) Y = S || u, X = P || d, k = C || f;
    else return;
    let _ = !1, ee = D[Bi] = (Q) => {
      _ || (_ = !0, Q ? $(k, [D]) : $(X, [D]), O.delayedLeave && O.delayedLeave(), D[Bi] = void 0);
    };
    Y ? Z(Y, [D, ee]) : ee();
  }, leave(D, Y) {
    let X = String(t.key);
    if (D[Bi] && D[Bi](!0), n.isUnmounting) return Y();
    $(p, [D]);
    let k = !1, _ = D[rn] = (ee) => {
      k || (k = !0, Y(), ee ? $(b, [D]) : $(v, [D]), D[rn] = void 0, I[X] === t && delete I[X]);
    };
    I[X] = t, h ? Z(h, [D, _]) : _();
  }, clone(D) {
    let Y = li(D, e, n, s, i);
    return i && i(Y), Y;
  } };
  return O;
}
function ma(t) {
  if (Lr(t)) return (t = Bn(t)).children = null, t;
}
function to(t) {
  if (!Lr(t)) return t.type.__isTeleport && t.children ? fc(t.children) : t;
  if (t.component) return t.component.subTree;
  let { shapeFlag: e, children: n } = t;
  if (n) {
    if (16 & e) return n[0];
    if (32 & e && ue(n.default)) return n.default();
  }
}
function is(t, e) {
  6 & t.shapeFlag && t.component ? (t.transition = e, is(t.component.subTree, e)) : 128 & t.shapeFlag ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function bl(t, e = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < t.length; r++) {
    let a = t[r], l = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === me ? (128 & a.patchFlag && i++, s = s.concat(bl(a.children, e, l))) : (e || a.type !== Qe) && s.push(l != null ? Bn(a, { key: l }) : a);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function W(t, e) {
  return ue(t) ? He({ name: t.name }, e, { setup: t }) : t;
}
function kl() {
  let t = Qt();
  return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
}
function mc(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function un(t) {
  let e = Qt(), n = Qu(null);
  return e && Object.defineProperty(e.refs === Te ? e.refs = {} : e.refs, t, { enumerable: !0, get: () => n.value, set: (s) => n.value = s }), n;
}
let sr = /* @__PURE__ */ new WeakMap();
function Ks(t, e, n, s, i = !1) {
  if (se(t)) return void t.forEach((v, b) => Ks(v, e && (se(e) ? e[b] : e), n, s, i));
  if (bs(s) && !i) {
    512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && Ks(t, e, n, s.component.subTree);
    return;
  }
  let r = 4 & s.shapeFlag ? Br(s.component) : s.el, a = i ? null : r, { i: l, r: o } = t, u = e && e.r, d = l.refs === Te ? l.refs = {} : l.refs, f = l.setupState, p = ke(f), h = f === Te ? Au : (v) => xe(p, v);
  if (u != null && u !== o && (no(e), De(u) ? (d[u] = null, h(u) && (f[u] = null)) : Be(u) && (u.value = null, e.k && (d[e.k] = null))), ue(o)) pi(o, l, 12, [a, d]);
  else {
    let v = De(o), b = Be(o);
    if (v || b) {
      let A = () => {
        if (t.f) {
          let S = v ? h(o) ? f[o] : d[o] : o.value;
          if (i) se(S) && fl(S, r);
          else if (se(S)) S.includes(r) || S.push(r);
          else if (v) d[o] = [r], h(o) && (f[o] = d[o]);
          else {
            let P = [r];
            o.value = P, t.k && (d[t.k] = P);
          }
        } else v ? (d[o] = a, h(o) && (f[o] = a)) : b && (o.value = a, t.k && (d[t.k] = a));
      };
      if (a) {
        let S = () => {
          A(), sr.delete(t);
        };
        S.id = -1, sr.set(t, S), ot(S, n);
      } else no(t), A();
    }
  }
}
function no(t) {
  let e = sr.get(t);
  e && (e.flags |= 8, sr.delete(t));
}
Sr().requestIdleCallback;
Sr().cancelIdleCallback;
let bs = (t) => !!t.type.__asyncLoader, Lr = (t) => t.type.__isKeepAlive;
function rh(t, e) {
  pc(t, "a", e);
}
function ah(t, e) {
  pc(t, "da", e);
}
function pc(t, e, n = st) {
  let s = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated) return;
      i = i.parent;
    }
    return t();
  });
  if (ir(e, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) Lr(i.parent.vnode) && (function(r, a, l, o) {
      let u = ir(a, r, o, !0);
      rs(() => {
        fl(o[a], u);
      }, l);
    })(s, e, n, i), i = i.parent;
  }
}
function ir(t, e, n = st, s = !1) {
  if (n) {
    let i = n[t] || (n[t] = []), r = e.__weh || (e.__weh = (...a) => {
      fn();
      let l = vi(n), o = Bt(e, n, t, a);
      return l(), hn(), o;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
let vn = (t) => (e, n = st) => {
  ci && t !== "sp" || ir(t, (...s) => e(...s), n);
}, lh = vn("bm"), yn = vn("m"), oh = vn("bu"), gc = vn("u"), wl = vn("bum"), rs = vn("um"), uh = vn("sp"), ch = vn("rtg"), dh = vn("rtc");
function fh(t, e = st) {
  ir("ec", t, e);
}
let vc = "components";
function hh(t, e) {
  return bc(vc, t, !0, e) || t;
}
let yc = /* @__PURE__ */ Symbol.for("v-ndc");
function Il(t) {
  return De(t) ? bc(vc, t, !1) || t : t || yc;
}
function bc(t, e, n = !0, s = !1) {
  let i = Xe || st;
  if (i) {
    let r = i.type;
    {
      let l = Ph(r, !1);
      if (l && (l === e || l === yt(e) || l === wr(yt(e)))) return r;
    }
    let a = so(i[t] || r[t], e) || so(i.appContext[t], e);
    return !a && s ? r : a;
  }
}
function so(t, e) {
  return t && (t[e] || t[yt(e)] || t[wr(yt(e))]);
}
function Ze(t, e, n, s) {
  let i, r = n, a = se(t);
  if (a || De(t)) {
    let l = a && Zt(t), o = !1, u = !1;
    l && (o = !gt(t), u = mn(t), t = xr(t)), i = Array(t.length);
    for (let d = 0, f = t.length; d < f; d++) i[d] = e(o ? u ? vs(Dt(t[d])) : Dt(t[d]) : t[d], d, void 0, r);
  } else if (typeof t == "number") {
    i = Array(t);
    for (let l = 0; l < t; l++) i[l] = e(l + 1, l, void 0, r);
  } else if (Ae(t)) if (t[Symbol.iterator]) i = Array.from(t, (l, o) => e(l, o, void 0, r));
  else {
    let l = Object.keys(t);
    i = Array(l.length);
    for (let o = 0, u = l.length; o < u; o++) {
      let d = l[o];
      i[o] = e(t[d], d, o, r);
    }
  }
  else i = [];
  return i;
}
function Sl(t, e) {
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    if (se(s)) for (let i = 0; i < s.length; i++) t[s[i].name] = s[i].fn;
    else s && (t[s.name] = s.key ? (...i) => {
      let r = s.fn(...i);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return t;
}
function oe(t, e, n = {}, s, i) {
  if (Xe.ce || Xe.parent && bs(Xe.parent) && Xe.parent.ce) {
    let u = Object.keys(n).length > 0;
    return e !== "default" && (n.name = e), g(), R(me, null, [B("slot", n, s && s())], u ? -2 : 64);
  }
  let r = t[e];
  r && r._c && (r._d = !1), g();
  let a = r && kc(r(n)), l = n.key || a && a.key, o = R(me, { key: (l && !Ot(l) ? l : `_${e}`) + (!a && s ? "_fb" : "") }, a || (s ? s() : []), a && t._ === 1 ? 64 : -2);
  return o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), r && r._c && (r._d = !0), o;
}
function kc(t) {
  return t.some((e) => !ui(e) || e.type !== Qe && (e.type !== me || !!kc(e.children))) ? t : null;
}
let _a = (t) => t ? Dc(t) ? Br(t) : _a(t.parent) : null, Qs = He(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => _a(t.parent), $root: (t) => _a(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => wc(t), $forceUpdate: (t) => t.f || (t.f = () => {
  vl(t.update);
}), $nextTick: (t) => t.n || (t.n = Jn.bind(t.proxy)), $watch: (t) => Ih.bind(t) }), pa = (t, e) => t !== Te && !t.__isScriptSetup && xe(t, e), Ra = { get({ _: t }, e) {
  let n, s;
  if (e === "__v_skip") return !0;
  let { ctx: i, setupState: r, data: a, props: l, accessCache: o, type: u, appContext: d } = t;
  if (e[0] !== "$") {
    let p = o[e];
    if (p !== void 0) switch (p) {
      case 1:
        return r[e];
      case 2:
        return a[e];
      case 4:
        return i[e];
      case 3:
        return l[e];
    }
    else {
      if (pa(r, e)) return o[e] = 1, r[e];
      if (a !== Te && xe(a, e)) return o[e] = 2, a[e];
      if (xe(l, e)) return o[e] = 3, l[e];
      if (i !== Te && xe(i, e)) return o[e] = 4, i[e];
      Pa && (o[e] = 0);
    }
  }
  let f = Qs[e];
  return f ? (e === "$attrs" && nt(t.attrs, "get", ""), f(t)) : (n = u.__cssModules) && (n = n[e]) ? n : i !== Te && xe(i, e) ? (o[e] = 4, i[e]) : xe(s = d.config.globalProperties, e) ? s[e] : void 0;
}, set({ _: t }, e, n) {
  let { data: s, setupState: i, ctx: r } = t;
  return pa(i, e) ? (i[e] = n, !0) : s !== Te && xe(s, e) ? (s[e] = n, !0) : !xe(t.props, e) && !(e[0] === "$" && e.slice(1) in t) && (r[e] = n, !0);
}, has({ _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: i, props: r, type: a } }, l) {
  let o;
  return !!(n[l] || t !== Te && l[0] !== "$" && xe(t, l) || pa(e, l) || xe(r, l) || xe(s, l) || xe(Qs, l) || xe(i.config.globalProperties, l) || (o = a.__cssModules) && o[l]);
}, defineProperty(t, e, n) {
  return n.get != null ? t._.accessCache[e] = 0 : xe(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
} };
He({}, Ra, { get(t, e) {
  if (e !== Symbol.unscopables) return Ra.get(t, e, t);
}, has: (t, e) => e[0] !== "_" && !Af(e) });
function mh() {
  return ph().slots;
}
function ph(t) {
  let e = Qt();
  return e.setupContext || (e.setupContext = Bc(e));
}
function rr(t) {
  return se(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t;
}
function Vt(t, e) {
  return t && e ? se(t) && se(e) ? t.concat(e) : He({}, rr(t), rr(e)) : t || e;
}
let Pa = !0;
function io(t, e, n) {
  Bt(se(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function wc(t) {
  let e, n = t.type, { mixins: s, extends: i } = n, { mixins: r, optionsCache: a, config: { optionMergeStrategies: l } } = t.appContext, o = a.get(n);
  return o ? e = o : r.length || s || i ? (e = {}, r.length && r.forEach((u) => ar(e, u, l, !0)), ar(e, n, l)) : e = n, Ae(n) && a.set(n, e), e;
}
function ar(t, e, n, s = !1) {
  let { mixins: i, extends: r } = e;
  for (let a in r && ar(t, r, n, !0), i && i.forEach((l) => ar(t, l, n, !0)), e) if (!(s && a === "expose")) {
    let l = gh[a] || n && n[a];
    t[a] = l ? l(t[a], e[a]) : e[a];
  }
  return t;
}
let gh = { data: ro, props: ao, emits: ao, methods: Ns, computed: Ns, beforeCreate: lt, created: lt, beforeMount: lt, mounted: lt, beforeUpdate: lt, updated: lt, beforeDestroy: lt, beforeUnmount: lt, destroyed: lt, unmounted: lt, activated: lt, deactivated: lt, errorCaptured: lt, serverPrefetch: lt, components: Ns, directives: Ns, watch: function(t, e) {
  if (!t) return e;
  if (!e) return t;
  let n = He(/* @__PURE__ */ Object.create(null), t);
  for (let s in e) n[s] = lt(t[s], e[s]);
  return n;
}, provide: ro, inject: function(t, e) {
  return Ns(za(t), za(e));
} };
function ro(t, e) {
  return e ? t ? function() {
    return He(ue(t) ? t.call(this, this) : t, ue(e) ? e.call(this, this) : e);
  } : e : t;
}
function za(t) {
  if (se(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function lt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Ns(t, e) {
  return t ? He(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function ao(t, e) {
  return t ? se(t) && se(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : He(/* @__PURE__ */ Object.create(null), rr(t), rr(e ?? {})) : e;
}
function Ic() {
  return { app: null, config: { isNativeTag: Au, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let vh = 0, es = null;
function On(t, e) {
  if (st) {
    let n = st.provides, s = st.parent && st.parent.provides;
    s === n && (n = st.provides = Object.create(s)), n[t] = e;
  }
}
function dn(t, e, n = !1) {
  let s = Qt();
  if (s || es) {
    let i = es ? es._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && ue(e) ? e.call(s && s.proxy) : e;
  }
}
function yh() {
  return !!(Qt() || es);
}
let bh = /* @__PURE__ */ Symbol.for("v-scx"), kh = () => dn(bh);
function Mr(t, e) {
  return Dr(t, null, e);
}
function wh(t, e) {
  return Dr(t, null, { flush: "sync" });
}
function Oe(t, e, n) {
  return Dr(t, e, n);
}
function Dr(t, e, n = Te) {
  let s, { immediate: i, flush: r } = n, a = He({}, n), l = e && i || !e && r !== "post";
  if (ci) {
    if (r === "sync") {
      let f = kh();
      s = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      let f = () => {
      };
      return f.stop = jt, f.resume = jt, f.pause = jt, f;
    }
  }
  let o = st;
  a.call = (f, p, h) => Bt(f, o, p, h);
  let u = !1;
  r === "post" ? a.scheduler = (f) => {
    ot(f, o && o.suspense);
  } : r !== "sync" && (u = !0, a.scheduler = (f, p) => {
    p ? f() : vl(f);
  }), a.augmentJob = (f) => {
    e && (f.flags |= 4), u && (f.flags |= 2, o && (f.id = o.uid, f.i = o));
  };
  let d = (function(f, p, h = Te) {
    let v, b, A, S, { immediate: P, deep: C, once: z, scheduler: I, augmentJob: $, call: Z } = h, O = (Q) => C ? Q : gt(Q) || C === !1 || C === 0 ? ln(Q, 1) : ln(Q), D = !1, Y = !1;
    if (Be(f) ? (b = () => f.value, D = gt(f)) : Zt(f) ? (b = () => O(f), D = !0) : se(f) ? (Y = !0, D = f.some((Q) => Zt(Q) || gt(Q)), b = () => f.map((Q) => Be(Q) ? Q.value : Zt(Q) ? O(Q) : ue(Q) ? Z ? Z(Q, 2) : Q() : void 0)) : b = ue(f) ? p ? Z ? () => Z(f, 2) : f : () => {
      if (A) {
        fn();
        try {
          A();
        } finally {
          hn();
        }
      }
      let Q = Gn;
      Gn = v;
      try {
        return Z ? Z(f, 3, [S]) : f(S);
      } finally {
        Gn = Q;
      }
    } : jt, p && C) {
      let Q = b, ve = C === !0 ? 1 / 0 : C;
      b = () => ln(Q(), ve);
    }
    let X = Vu(), k = () => {
      v.stop(), X && X.active && fl(X.effects, v);
    };
    if (z && p) {
      let Q = p;
      p = (...ve) => {
        Q(...ve), k();
      };
    }
    let _ = Y ? Array(f.length).fill(Mi) : Mi, ee = (Q) => {
      if (1 & v.flags && (v.dirty || Q)) if (p) {
        let ve = v.run();
        if (C || D || (Y ? ve.some((ie, pe) => mt(ie, _[pe])) : mt(ve, _))) {
          A && A();
          let ie = Gn;
          Gn = v;
          try {
            let pe = [ve, _ === Mi ? void 0 : Y && _[0] === Mi ? [] : _, S];
            _ = ve, Z ? Z(p, 3, pe) : p(...pe);
          } finally {
            Gn = ie;
          }
        }
      } else v.run();
    };
    return $ && $(ee), (v = new _u(b)).scheduler = I ? () => I(ee, !1) : ee, S = (Q) => nh(Q, !1, v), A = v.onStop = () => {
      let Q = tr.get(v);
      if (Q) {
        if (Z) Z(Q, 4);
        else for (let ve of Q) ve();
        tr.delete(v);
      }
    }, p ? P ? ee(!0) : _ = v.run() : I ? I(ee.bind(null, !0), !0) : v.run(), k.pause = v.pause.bind(v), k.resume = v.resume.bind(v), k.stop = k, k;
  })(t, e, a);
  return ci && (s ? s.push(d) : l && d()), d;
}
function Ih(t, e, n) {
  let s, i = this.proxy, r = De(t) ? t.includes(".") ? Sc(i, t) : () => i[t] : t.bind(i, i);
  ue(e) ? s = e : (s = e.handler, n = e);
  let a = vi(this), l = Dr(r, s.bind(i), n);
  return a(), l;
}
function Sc(t, e) {
  let n = e.split(".");
  return () => {
    let s = t;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function ct(t, e, n = Te) {
  let s = Qt(), i = yt(e), r = Rn(e), a = Tc(t, i), l = Qf((o, u) => {
    let d, f, p = Te;
    return wh(() => {
      let h = t[i];
      mt(d, h) && (d = h, u());
    }), { get: () => (o(), n.get ? n.get(d) : d), set(h) {
      let v = n.set ? n.set(h) : h;
      if (!mt(v, d) && !(p !== Te && mt(h, p))) return;
      let b = s.vnode.props;
      b && (e in b || i in b || r in b) && (`onUpdate:${e}` in b || `onUpdate:${i}` in b || `onUpdate:${r}` in b) || (d = h, u()), s.emit(`update:${e}`, v), mt(h, v) && mt(h, p) && !mt(v, f) && u(), p = h, f = v;
    } };
  });
  return l[Symbol.iterator] = () => {
    let o = 0;
    return { next: () => o < 2 ? { value: o++ ? a || Te : l, done: !1 } : { done: !0 } };
  }, l;
}
let Tc = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${yt(e)}Modifiers`] || t[`${Rn(e)}Modifiers`];
function Sh(t, e, ...n) {
  let s;
  if (t.isUnmounted) return;
  let i = t.vnode.props || Te, r = n, a = e.startsWith("update:"), l = a && Tc(i, e.slice(7));
  l && (l.trim && (r = n.map((d) => De(d) ? d.trim() : d)), l.number && (r = n.map(Ir)));
  let o = i[s = ra(e)] || i[s = ra(yt(e))];
  !o && a && (o = i[s = ra(Rn(e))]), o && Bt(o, t, 6, r);
  let u = i[s + "Once"];
  if (u) {
    if (t.emitted) {
      if (t.emitted[s]) return;
    } else t.emitted = {};
    t.emitted[s] = !0, Bt(u, t, 6, r);
  }
}
let Th = /* @__PURE__ */ new WeakMap();
function lr(t, e) {
  return !!t && !!yr(e) && (xe(t, (e = e.slice(2).replace(/Once$/, ""))[0].toLowerCase() + e.slice(1)) || xe(t, Rn(e)) || xe(t, e));
}
function lo(t) {
  let e, n, { type: s, vnode: i, proxy: r, withProxy: a, propsOptions: [l], slots: o, attrs: u, emit: d, render: f, renderCache: p, props: h, data: v, setupState: b, ctx: A, inheritAttrs: S } = t, P = nr(t);
  try {
    if (4 & i.shapeFlag) {
      let z = a || r;
      e = Ut(f.call(z, z, p, h, b, v, A)), n = u;
    } else e = Ut(s.length > 1 ? s(h, { attrs: u, slots: o, emit: d }) : s(h, null)), n = s.props ? u : Ch(u);
  } catch (z) {
    Xs.length = 0, $r(z, t, 1), e = B(Qe);
  }
  let C = e;
  if (n && S !== !1) {
    let z = Object.keys(n), { shapeFlag: I } = C;
    z.length && 7 & I && (l && z.some(dl) && (n = xh(n, l)), C = Bn(C, n, !1, !0));
  }
  return i.dirs && ((C = Bn(C, null, !1, !0)).dirs = C.dirs ? C.dirs.concat(i.dirs) : i.dirs), i.transition && is(C, i.transition), e = C, nr(P), e;
}
let Ch = (t) => {
  let e;
  for (let n in t) (n === "class" || n === "style" || yr(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, xh = (t, e) => {
  let n = {};
  for (let s in t) dl(s) && s.slice(9) in e || (n[s] = t[s]);
  return n;
};
function oo(t, e, n) {
  let s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < s.length; i++) {
    let r = s[i];
    if (e[r] !== t[r] && !lr(n, r)) return !0;
  }
  return !1;
}
function Eh({ vnode: t, parent: e }, n) {
  for (; e; ) {
    let s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t) (t = e.vnode).el = n, e = e.parent;
    else break;
  }
}
let Ha = {}, Cc = (t) => Object.getPrototypeOf(t) === Ha;
function xc(t, e, n, s) {
  let i, [r, a] = t.propsOptions, l = !1;
  if (e) for (let o in e) {
    let u;
    if (Ys(o)) continue;
    let d = e[o];
    r && xe(r, u = yt(o)) ? a && a.includes(u) ? (i || (i = {}))[u] = d : n[u] = d : lr(t.emitsOptions, o) || o in s && d === s[o] || (s[o] = d, l = !0);
  }
  if (a) {
    let o = ke(n), u = i || Te;
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      n[f] = Wa(r, o, f, u[f], t, !xe(u, f));
    }
  }
  return l;
}
function Wa(t, e, n, s, i, r) {
  let a = t[n];
  if (a != null) {
    let l = xe(a, "default");
    if (l && s === void 0) {
      let o = a.default;
      if (a.type !== Function && !a.skipFactory && ue(o)) {
        let { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          let d = vi(i);
          s = u[n] = o.call(null, e), d();
        }
      } else s = o;
      i.ce && i.ce._setProp(n, s);
    }
    a[0] && (r && !l ? s = !1 : a[1] && (s === "" || s === Rn(n)) && (s = !0));
  }
  return s;
}
let Fh = /* @__PURE__ */ new WeakMap();
function uo(t) {
  return !(t[0] === "$" || Ys(t));
}
let Tl = (t) => t === "_" || t === "_ctx" || t === "$stable", Cl = (t) => se(t) ? t.map(Ut) : [Ut(t)], Ah = (t, e, n) => {
  if (e._n) return e;
  let s = U((...i) => Cl(e(...i)), n);
  return s._c = !1, s;
}, Ec = (t, e, n) => {
  let s = t._ctx;
  for (let i in t) {
    if (Tl(i)) continue;
    let r = t[i];
    if (ue(r)) e[i] = Ah(i, r, s);
    else if (r != null) {
      let a = Cl(r);
      e[i] = () => a;
    }
  }
}, Fc = (t, e) => {
  let n = Cl(e);
  t.slots.default = () => n;
}, Ac = (t, e, n) => {
  for (let s in e) (n || !Tl(s)) && (t[s] = e[s]);
}, ot = Dh;
function $h(t) {
  return Lh(t);
}
function Lh(t, e) {
  var n;
  let s, i;
  Sr().__VUE__ = !0;
  let { insert: r, remove: a, patchProp: l, createElement: o, createText: u, createComment: d, setText: f, setElementText: p, parentNode: h, nextSibling: v, setScopeId: b = jt, insertStaticContent: A } = t, S = (m, y, T, H = null, M = null, x = null, N, F = null, L = !!y.dynamicChildren) => {
    if (m === y) return;
    m && !Yn(m, y) && (H = Fi(m), Pe(m, M, x, !0), m = null), y.patchFlag === -2 && (L = !1, y.dynamicChildren = null);
    let { type: E, ref: q, shapeFlag: J } = y;
    switch (E) {
      case Or:
        P(m, y, T, H);
        break;
      case Qe:
        C(m, y, T, H);
        break;
      case va:
        m == null && z(y, T, H, N);
        break;
      case me:
        k(m, y, T, H, M, x, N, F, L);
        break;
      default:
        1 & J ? I(m, y, T, H, M, x, N, F, L) : 6 & J ? _(m, y, T, H, M, x, N, F, L) : (64 & J || 128 & J) && E.process(m, y, T, H, M, x, N, F, L, Os);
    }
    q != null && M ? Ks(q, m && m.ref, x, y || m, !y) : q == null && m && m.ref != null && Ks(m.ref, null, x, m, !0);
  }, P = (m, y, T, H) => {
    if (m == null) r(y.el = u(y.children), T, H);
    else {
      let M = y.el = m.el;
      y.children !== m.children && f(M, y.children);
    }
  }, C = (m, y, T, H) => {
    m == null ? r(y.el = d(y.children || ""), T, H) : y.el = m.el;
  }, z = (m, y, T, H) => {
    [m.el, m.anchor] = A(m.children, y, T, H, m.el, m.anchor);
  }, I = (m, y, T, H, M, x, N, F, L) => {
    if (y.type === "svg" ? N = "svg" : y.type === "math" && (N = "mathml"), m == null) $(y, T, H, M, x, N, F, L);
    else {
      let E = m.el && m.el._isVueCE ? m.el : null;
      try {
        E && E._beginPatch(), D(m, y, M, x, N, F, L);
      } finally {
        E && E._endPatch();
      }
    }
  }, $ = (m, y, T, H, M, x, N, F) => {
    let L, E, { props: q, shapeFlag: J, transition: j, dirs: K } = m;
    if (L = m.el = o(m.type, x, q && q.is, q), 8 & J ? p(L, m.children) : 16 & J && O(m.children, L, null, H, M, ga(m, x), N, F), K && Hn(m, null, H, "created"), Z(L, m, m.scopeId, N, H), q) {
      for (let ce in q) ce === "value" || Ys(ce) || l(L, ce, null, q[ce], x, H);
      "value" in q && l(L, "value", null, q.value, x), (E = q.onVnodeBeforeMount) && zt(E, H, m);
    }
    K && Hn(m, null, H, "beforeMount");
    let ge = Mh(M, j);
    ge && j.beforeEnter(L), r(L, y, T), ((E = q && q.onVnodeMounted) || ge || K) && ot(() => {
      E && zt(E, H, m), ge && j.enter(L), K && Hn(m, null, H, "mounted");
    }, M);
  }, Z = (m, y, T, H, M) => {
    if (T && b(m, T), H) for (let x = 0; x < H.length; x++) b(m, H[x]);
    if (M) {
      let x = M.subTree;
      if (y === x || $c(x.type) && (x.ssContent === y || x.ssFallback === y)) {
        let N = M.vnode;
        Z(m, N, N.scopeId, N.slotScopeIds, M.parent);
      }
    }
  }, O = (m, y, T, H, M, x, N, F, L = 0) => {
    for (let E = L; E < m.length; E++) S(null, m[E] = F ? Fn(m[E]) : Ut(m[E]), y, T, H, M, x, N, F);
  }, D = (m, y, T, H, M, x, N) => {
    let F, L = y.el = m.el, { patchFlag: E, dynamicChildren: q, dirs: J } = y;
    E |= 16 & m.patchFlag;
    let j = m.props || Te, K = y.props || Te;
    if (T && Wn(T, !1), (F = K.onVnodeBeforeUpdate) && zt(F, T, y, m), J && Hn(y, m, T, "beforeUpdate"), T && Wn(T, !0), (j.innerHTML && K.innerHTML == null || j.textContent && K.textContent == null) && p(L, ""), q ? Y(m.dynamicChildren, q, L, T, H, ga(y, M), x) : N || pe(m, y, L, null, T, H, ga(y, M), x, !1), E > 0) {
      if (16 & E) X(L, j, K, T, M);
      else if (2 & E && j.class !== K.class && l(L, "class", null, K.class, M), 4 & E && l(L, "style", j.style, K.style, M), 8 & E) {
        let ge = y.dynamicProps;
        for (let ce = 0; ce < ge.length; ce++) {
          let be = ge[ce], Je = j[be], Ke = K[be];
          (Ke !== Je || be === "value") && l(L, be, Je, Ke, M, T);
        }
      }
      1 & E && m.children !== y.children && p(L, y.children);
    } else N || q != null || X(L, j, K, T, M);
    ((F = K.onVnodeUpdated) || J) && ot(() => {
      F && zt(F, T, y, m), J && Hn(y, m, T, "updated");
    }, H);
  }, Y = (m, y, T, H, M, x, N) => {
    for (let F = 0; F < y.length; F++) {
      let L = m[F], E = y[F], q = L.el && (L.type === me || !Yn(L, E) || 198 & L.shapeFlag) ? h(L.el) : T;
      S(L, E, q, null, H, M, x, N, !0);
    }
  }, X = (m, y, T, H, M) => {
    if (y !== T) {
      if (y !== Te) for (let x in y) Ys(x) || x in T || l(m, x, y[x], null, M, H);
      for (let x in T) {
        if (Ys(x)) continue;
        let N = T[x], F = y[x];
        N !== F && x !== "value" && l(m, x, F, N, M, H);
      }
      "value" in T && l(m, "value", y.value, T.value, M);
    }
  }, k = (m, y, T, H, M, x, N, F, L) => {
    let E = y.el = m ? m.el : u(""), q = y.anchor = m ? m.anchor : u(""), { patchFlag: J, dynamicChildren: j, slotScopeIds: K } = y;
    K && (F = F ? F.concat(K) : K), m == null ? (r(E, T, H), r(q, T, H), O(y.children || [], T, q, M, x, N, F, L)) : J > 0 && 64 & J && j && m.dynamicChildren ? (Y(m.dynamicChildren, j, T, M, x, N, F), (y.key != null || M && y === M.subTree) && xl(m, y, !0)) : pe(m, y, T, q, M, x, N, F, L);
  }, _ = (m, y, T, H, M, x, N, F, L) => {
    y.slotScopeIds = F, m == null ? 512 & y.shapeFlag ? M.ctx.activate(y, T, H, N, L) : ee(y, T, H, M, x, N, L) : Q(m, y, L);
  }, ee = (m, y, T, H, M, x, N) => {
    let F = m.component = Nh(m, H, M);
    if (Lr(m) && (F.ctx.renderer = Os), _h(F, !1, N), F.asyncDep) {
      if (M && M.registerDep(F, ve, N), !m.el) {
        let L = F.subTree = B(Qe);
        C(null, L, y, T), m.placeholder = L.el;
      }
    } else ve(F, m, y, T, M, x, N);
  }, Q = (m, y, T) => {
    let H = y.component = m.component;
    if ((function(M, x, N) {
      let { props: F, children: L, component: E } = M, { props: q, children: J, patchFlag: j } = x, K = E.emitsOptions;
      if (x.dirs || x.transition) return !0;
      if (!N || !(j >= 0)) return (!!L || !!J) && (!J || !J.$stable) || F !== q && (F ? !q || oo(F, q, K) : !!q);
      if (1024 & j) return !0;
      if (16 & j) return F ? oo(F, q, K) : !!q;
      if (8 & j) {
        let ge = x.dynamicProps;
        for (let ce = 0; ce < ge.length; ce++) {
          let be = ge[ce];
          if (q[be] !== F[be] && !lr(K, be)) return !0;
        }
      }
      return !1;
    })(m, y, T)) {
      if (H.asyncDep && !H.asyncResolved) return void ie(H, y, T);
      H.next = y, H.update();
    } else y.el = m.el, H.vnode = y;
  }, ve = (m, y, T, H, M, x, N) => {
    let F = () => {
      if (m.isMounted) {
        let J, { next: j, bu: K, u: ge, parent: ce, vnode: be } = m;
        {
          let Pt = (function zn(Ai) {
            let $e = Ai.subTree.component;
            if ($e) return $e.asyncDep && !$e.asyncResolved ? $e : zn($e);
          })(m);
          if (Pt) {
            j && (j.el = be.el, ie(m, j, N)), Pt.asyncDep.then(() => {
              m.isUnmounted || F();
            });
            return;
          }
        }
        let Je = j;
        Wn(m, !1), j ? (j.el = be.el, ie(m, j, N)) : j = be, K && Ui(K), (J = j.props && j.props.onVnodeBeforeUpdate) && zt(J, ce, j, be), Wn(m, !0);
        let Ke = lo(m), Rt = m.subTree;
        m.subTree = Ke, S(Rt, Ke, h(Rt.el), Fi(Rt), m, M, x), j.el = Ke.el, Je === null && Eh(m, Ke.el), ge && ot(ge, M), (J = j.props && j.props.onVnodeUpdated) && ot(() => zt(J, ce, j, be), M);
      } else {
        let J, { el: j, props: K } = y, { bm: ge, m: ce, parent: be, root: Je, type: Ke } = m, Rt = bs(y);
        if (Wn(m, !1), ge && Ui(ge), !Rt && (J = K && K.onVnodeBeforeMount) && zt(J, be, y), Wn(m, !0), !(j && i)) {
          Je.ce && Je.ce._def.shadowRoot !== !1 && Je.ce._injectChildStyle(Ke);
          let Pt = m.subTree = lo(m);
          S(null, Pt, T, H, m, M, x), y.el = Pt.el;
        }
        if (ce && ot(ce, M), !Rt && (J = K && K.onVnodeMounted)) {
          let Pt = y;
          ot(() => zt(J, be, Pt), M);
        }
        (256 & y.shapeFlag || be && bs(be.vnode) && 256 & be.vnode.shapeFlag) && m.a && ot(m.a, M), m.isMounted = !0, y = T = H = null;
      }
    };
    m.scope.on();
    let L = m.effect = new _u(F);
    m.scope.off();
    let E = m.update = L.run.bind(L), q = m.job = L.runIfDirty.bind(L);
    q.i = m, q.id = m.uid, L.scheduler = () => vl(q), Wn(m, !0), E();
  }, ie = (m, y, T) => {
    y.component = m;
    let H = m.vnode.props;
    m.vnode = y, m.next = null, (function(M, x, N, F) {
      let { props: L, attrs: E, vnode: { patchFlag: q } } = M, J = ke(L), [j] = M.propsOptions, K = !1;
      if ((F || q > 0) && !(16 & q)) {
        if (8 & q) {
          let ge = M.vnode.dynamicProps;
          for (let ce = 0; ce < ge.length; ce++) {
            let be = ge[ce];
            if (lr(M.emitsOptions, be)) continue;
            let Je = x[be];
            if (j) if (xe(E, be)) Je !== E[be] && (E[be] = Je, K = !0);
            else {
              let Ke = yt(be);
              L[Ke] = Wa(j, J, Ke, Je, M, !1);
            }
            else Je !== E[be] && (E[be] = Je, K = !0);
          }
        }
      } else {
        let ge;
        for (let ce in xc(M, x, L, E) && (K = !0), J) x && (xe(x, ce) || (ge = Rn(ce)) !== ce && xe(x, ge)) || (j ? N && (N[ce] !== void 0 || N[ge] !== void 0) && (L[ce] = Wa(j, J, ce, void 0, M, !0)) : delete L[ce]);
        if (E !== J) for (let ce in E) x && xe(x, ce) || (delete E[ce], K = !0);
      }
      K && an(M.attrs, "set", "");
    })(m, y.props, H, T), ((M, x, N) => {
      let { vnode: F, slots: L } = M, E = !0, q = Te;
      if (32 & F.shapeFlag) {
        let J = x._;
        J ? N && J === 1 ? E = !1 : Ac(L, x, N) : (E = !x.$stable, Ec(x, L)), q = x;
      } else x && (Fc(M, x), q = { default: 1 });
      if (E) for (let J in L) Tl(J) || q[J] != null || delete L[J];
    })(m, y.children, T), fn(), Jl(m), hn();
  }, pe = (m, y, T, H, M, x, N, F, L = !1) => {
    let E = m && m.children, q = m ? m.shapeFlag : 0, J = y.children, { patchFlag: j, shapeFlag: K } = y;
    if (j > 0) {
      if (128 & j) return void Re(E, J, T, H, M, x, N, F, L);
      if (256 & j) return void Ie(E, J, T, H, M, x, N, F, L);
    }
    8 & K ? (16 & q && Ds(E, M, x), J !== E && p(T, J)) : 16 & q ? 16 & K ? Re(E, J, T, H, M, x, N, F, L) : Ds(E, M, x, !0) : (8 & q && p(T, ""), 16 & K && O(J, T, H, M, x, N, F, L));
  }, Ie = (m, y, T, H, M, x, N, F, L) => {
    let E;
    m = m || gs, y = y || gs;
    let q = m.length, J = y.length, j = Math.min(q, J);
    for (E = 0; E < j; E++) {
      let K = y[E] = L ? Fn(y[E]) : Ut(y[E]);
      S(m[E], K, T, null, M, x, N, F, L);
    }
    q > J ? Ds(m, M, x, !0, !1, j) : O(y, T, H, M, x, N, F, L, j);
  }, Re = (m, y, T, H, M, x, N, F, L) => {
    let E = 0, q = y.length, J = m.length - 1, j = q - 1;
    for (; E <= J && E <= j; ) {
      let K = m[E], ge = y[E] = L ? Fn(y[E]) : Ut(y[E]);
      if (Yn(K, ge)) S(K, ge, T, null, M, x, N, F, L);
      else break;
      E++;
    }
    for (; E <= J && E <= j; ) {
      let K = m[J], ge = y[j] = L ? Fn(y[j]) : Ut(y[j]);
      if (Yn(K, ge)) S(K, ge, T, null, M, x, N, F, L);
      else break;
      J--, j--;
    }
    if (E > J) {
      if (E <= j) {
        let K = j + 1, ge = K < q ? y[K].el : H;
        for (; E <= j; ) S(null, y[E] = L ? Fn(y[E]) : Ut(y[E]), T, ge, M, x, N, F, L), E++;
      }
    } else if (E > j) for (; E <= J; ) Pe(m[E], M, x, !0), E++;
    else {
      let K, ge = E, ce = E, be = /* @__PURE__ */ new Map();
      for (E = ce; E <= j; E++) {
        let $e = y[E] = L ? Fn(y[E]) : Ut(y[E]);
        $e.key != null && be.set($e.key, E);
      }
      let Je = 0, Ke = j - ce + 1, Rt = !1, Pt = 0, zn = Array(Ke);
      for (E = 0; E < Ke; E++) zn[E] = 0;
      for (E = ge; E <= J; E++) {
        let $e, je = m[E];
        if (Je >= Ke) {
          Pe(je, M, x, !0);
          continue;
        }
        if (je.key != null) $e = be.get(je.key);
        else for (K = ce; K <= j; K++) if (zn[K - ce] === 0 && Yn(je, y[K])) {
          $e = K;
          break;
        }
        $e === void 0 ? Pe(je, M, x, !0) : (zn[$e - ce] = E + 1, $e >= Pt ? Pt = $e : Rt = !0, S(je, y[$e], T, null, M, x, N, F, L), Je++);
      }
      let Ai = Rt ? (function($e) {
        let je, Bs, at, kn, ta, na = $e.slice(), bt = [0], Cf = $e.length;
        for (je = 0; je < Cf; je++) {
          let $i = $e[je];
          if ($i !== 0) {
            if ($e[Bs = bt[bt.length - 1]] < $i) {
              na[je] = Bs, bt.push(je);
              continue;
            }
            for (at = 0, kn = bt.length - 1; at < kn; ) $e[bt[ta = at + kn >> 1]] < $i ? at = ta + 1 : kn = ta;
            $i < $e[bt[at]] && (at > 0 && (na[je] = bt[at - 1]), bt[at] = je);
          }
        }
        for (at = bt.length, kn = bt[at - 1]; at-- > 0; ) bt[at] = kn, kn = na[kn];
        return bt;
      })(zn) : gs;
      for (K = Ai.length - 1, E = Ke - 1; E >= 0; E--) {
        let $e = ce + E, je = y[$e], Bs = y[$e + 1], at = $e + 1 < q ? Bs.el || Bs.placeholder : H;
        zn[E] === 0 ? S(null, je, T, at, M, x, N, F, L) : Rt && (K < 0 || E !== Ai[K] ? Ye(je, T, at, 2) : K--);
      }
    }
  }, Ye = (m, y, T, H, M = null) => {
    let { el: x, type: N, transition: F, children: L, shapeFlag: E } = m;
    if (6 & E) return void Ye(m.component.subTree, y, T, H);
    if (128 & E) return void m.suspense.move(y, T, H);
    if (64 & E) return void N.move(m, y, T, Os);
    if (N === me) {
      r(x, y, T);
      for (let q = 0; q < L.length; q++) Ye(L[q], y, T, H);
      r(m.anchor, y, T);
      return;
    }
    if (N === va) return void (({ el: q, anchor: J }, j, K) => {
      let ge;
      for (; q && q !== J; ) ge = v(q), r(q, j, K), q = ge;
      r(J, j, K);
    })(m, y, T);
    if (H !== 2 && 1 & E && F) if (H === 0) F.beforeEnter(x), r(x, y, T), ot(() => F.enter(x), M);
    else {
      let { leave: q, delayLeave: J, afterLeave: j } = F, K = () => {
        m.ctx.isUnmounted ? a(x) : r(x, y, T);
      }, ge = () => {
        x._isLeaving && x[rn](!0), q(x, () => {
          K(), j && j();
        });
      };
      J ? J(x, K, ge) : ge();
    }
    else r(x, y, T);
  }, Pe = (m, y, T, H = !1, M = !1) => {
    let x, { type: N, props: F, ref: L, children: E, dynamicChildren: q, shapeFlag: J, patchFlag: j, dirs: K, cacheIndex: ge } = m;
    if (j === -2 && (M = !1), L != null && (fn(), Ks(L, null, T, m, !0), hn()), ge != null && (y.renderCache[ge] = void 0), 256 & J) return void y.ctx.deactivate(m);
    let ce = 1 & J && K, be = !bs(m);
    if (be && (x = F && F.onVnodeBeforeUnmount) && zt(x, y, m), 6 & J) Xt(m.component, T, H);
    else {
      if (128 & J) return void m.suspense.unmount(T, H);
      ce && Hn(m, null, y, "beforeUnmount"), 64 & J ? m.type.remove(m, y, T, Os, H) : q && !q.hasOnce && (N !== me || j > 0 && 64 & j) ? Ds(q, y, T, !1, !0) : (N === me && 384 & j || !M && 16 & J) && Ds(E, y, T), H && ht(m);
    }
    (be && (x = F && F.onVnodeUnmounted) || ce) && ot(() => {
      x && zt(x, y, m), ce && Hn(m, null, y, "unmounted");
    }, T);
  }, ht = (m) => {
    let { type: y, el: T, anchor: H, transition: M } = m;
    if (y === me) return void Pn(T, H);
    if (y === va) return void (({ el: N, anchor: F }) => {
      let L;
      for (; N && N !== F; ) L = v(N), a(N), N = L;
      a(F);
    })(m);
    let x = () => {
      a(T), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (1 & m.shapeFlag && M && !M.persisted) {
      let { leave: N, delayLeave: F } = M, L = () => N(T, x);
      F ? F(m.el, x, L) : L();
    } else x();
  }, Pn = (m, y) => {
    let T;
    for (; m !== y; ) T = v(m), a(m), m = T;
    a(y);
  }, Xt = (m, y, T) => {
    let { bum: H, scope: M, job: x, subTree: N, um: F, m: L, a: E } = m;
    co(L), co(E), H && Ui(H), M.stop(), x && (x.flags |= 8, Pe(N, m, y, T)), F && ot(F, y), ot(() => {
      m.isUnmounted = !0;
    }, y);
  }, Ds = (m, y, T, H = !1, M = !1, x = 0) => {
    for (let N = x; N < m.length; N++) Pe(m[N], y, T, H, M);
  }, Fi = (m) => {
    if (6 & m.shapeFlag) return Fi(m.component.subTree);
    if (128 & m.shapeFlag) return m.suspense.next();
    let y = v(m.anchor || m.el), T = y && y[ac];
    return T ? v(T) : y;
  }, Xr = !1, ea = (m, y, T) => {
    m == null ? y._vnode && Pe(y._vnode, null, null, !0) : S(y._vnode || null, m, y, null, null, null, T), y._vnode = m, Xr || (Xr = !0, Jl(), ic(), Xr = !1);
  }, Os = { p: S, um: Pe, m: Ye, r: ht, mt: ee, mc: O, pc: pe, pbc: Y, n: Fi, o: t };
  return { render: ea, hydrate: s, createApp: (n = s, function(m, y = null) {
    ue(m) || (m = He({}, m)), y == null || Ae(y) || (y = null);
    let T = Ic(), H = /* @__PURE__ */ new WeakSet(), M = [], x = !1, N = T.app = { _uid: vh++, _component: m, _props: y, _container: null, _context: T, _instance: null, version: zh, get config() {
      return T.config;
    }, set config(F) {
    }, use: (F, ...L) => (H.has(F) || (F && ue(F.install) ? (H.add(F), F.install(N, ...L)) : ue(F) && (H.add(F), F(N, ...L))), N), mixin: (F) => (T.mixins.includes(F) || T.mixins.push(F), N), component: (F, L) => L ? (T.components[F] = L, N) : T.components[F], directive: (F, L) => L ? (T.directives[F] = L, N) : T.directives[F], mount(F, L, E) {
      if (!x) {
        let q = N._ceVNode || B(m, y);
        return q.appContext = T, E === !0 ? E = "svg" : E === !1 && (E = void 0), L && n ? n(q, F) : ea(q, F, E), x = !0, N._container = F, F.__vue_app__ = N, Br(q.component);
      }
    }, onUnmount(F) {
      M.push(F);
    }, unmount() {
      x && (Bt(M, N._instance, 16), ea(null, N._container), delete N._container.__vue_app__);
    }, provide: (F, L) => (T.provides[F] = L, N), runWithContext(F) {
      let L = es;
      es = N;
      try {
        return F();
      } finally {
        es = L;
      }
    } };
    return N;
  }) };
}
function ga({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Wn({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Mh(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function xl(t, e, n = !1) {
  let s = t.children, i = e.children;
  if (se(s) && se(i)) for (let r = 0; r < s.length; r++) {
    let a = s[r], l = i[r];
    1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[r] = Fn(i[r])).el = a.el), n || l.patchFlag === -2 || xl(a, l)), l.type === Or && l.patchFlag !== -1 && (l.el = a.el), l.type !== Qe || l.el || (l.el = a.el);
  }
}
function co(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
let $c = (t) => t.__isSuspense;
function Dh(t, e) {
  e && e.pendingBranch ? se(t) ? e.effects.push(...t) : e.effects.push(t) : sh(t);
}
let me = /* @__PURE__ */ Symbol.for("v-fgt"), Or = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), va = /* @__PURE__ */ Symbol.for("v-stc"), Xs = [], pt = null;
function g(t = !1) {
  Xs.push(pt = t ? null : []);
}
function Oh() {
  Xs.pop(), pt = Xs[Xs.length - 1] || null;
}
let oi = 1;
function or(t, e = !1) {
  oi += t, t < 0 && pt && e && (pt.hasOnce = !0);
}
function Lc(t) {
  return t.dynamicChildren = oi > 0 ? pt || gs : null, Oh(), oi > 0 && pt && pt.push(t), t;
}
function V(t, e, n, s, i, r) {
  return Lc(de(t, e, n, s, i, r, !0));
}
function R(t, e, n, s, i) {
  return Lc(B(t, e, n, s, i, !0));
}
function ui(t) {
  return !!t && t.__v_isVNode === !0;
}
function Yn(t, e) {
  return t.type === e.type && t.key === e.key;
}
let Mc = ({ key: t }) => t ?? null, ji = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? De(t) || Be(t) || ue(t) ? { i: Xe, r: t, k: e, f: !!n } : t : null);
function de(t, e = null, n = null, s = 0, i = null, r = +(t !== me), a = !1, l = !1) {
  let o = { __v_isVNode: !0, __v_skip: !0, type: t, props: e, key: e && Mc(e), ref: e && ji(e), scopeId: rc, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: s, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Xe };
  return l ? (El(o, n), 128 & r && t.normalize(o)) : n && (o.shapeFlag |= De(n) ? 8 : 16), oi > 0 && !a && pt && (o.patchFlag > 0 || 6 & r) && o.patchFlag !== 32 && pt.push(o), o;
}
let B = function(t, e = null, n = null, s = 0, i = null, r = !1) {
  var a;
  if (t && t !== yc || (t = Qe), ui(t)) {
    let o = Bn(t, e, !0);
    return n && El(o, n), oi > 0 && !r && pt && (6 & o.shapeFlag ? pt[pt.indexOf(t)] = o : pt.push(o)), o.patchFlag = -2, o;
  }
  if (ue(a = t) && "__vccOpts" in a && (t = t.__vccOpts), e) {
    let { class: o, style: u } = e = Gi(e);
    o && !De(o) && (e.class = w(o)), Ae(u) && (Ar(u) && !se(u) && (u = He({}, u)), e.style = We(u));
  }
  let l = De(t) ? 1 : $c(t) ? 128 : t.__isTeleport ? 64 : Ae(t) ? 4 : 2 * !!ue(t);
  return de(t, e, n, s, i, l, r, !0);
};
function Gi(t) {
  return t ? Ar(t) || Cc(t) ? He({}, t) : t : null;
}
function Bn(t, e, n = !1, s = !1) {
  let { props: i, ref: r, patchFlag: a, children: l, transition: o } = t, u = e ? It(i || {}, e) : i, d = { __v_isVNode: !0, __v_skip: !0, type: t.type, props: u, key: u && Mc(u), ref: e && e.ref ? n && r ? se(r) ? r.concat(ji(e)) : [r, ji(e)] : ji(e) : r, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: e && t.type !== me ? a === -1 ? 16 : 16 | a : a, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: o, component: t.component, suspense: t.suspense, ssContent: t.ssContent && Bn(t.ssContent), ssFallback: t.ssFallback && Bn(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
  return o && s && is(d, o.clone(d)), d;
}
function gi(t = " ", e = 0) {
  return B(Or, null, t, e);
}
function te(t = "", e = !1) {
  return e ? (g(), R(Qe, null, t)) : B(Qe, null, t);
}
function Ut(t) {
  return t == null || typeof t == "boolean" ? B(Qe) : se(t) ? B(me, null, t.slice()) : ui(t) ? Fn(t) : B(Or, null, String(t));
}
function Fn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Bn(t);
}
function El(t, e) {
  let n = 0, { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (se(e)) n = 16;
  else if (typeof e == "object") if (65 & s) {
    let i = e.default;
    i && (i._c && (i._d = !1), El(t, i()), i._c && (i._d = !0));
    return;
  } else {
    n = 32;
    let i = e._;
    i || Cc(e) ? i === 3 && Xe && (Xe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024)) : e._ctx = Xe;
  }
  else ue(e) ? (e = { default: e, _ctx: Xe }, n = 32) : (e = String(e), 64 & s ? (n = 16, e = [gi(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function It(...t) {
  let e = {};
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    for (let i in s) if (i === "class") e.class !== s.class && (e.class = w([e.class, s.class]));
    else if (i === "style") e.style = We([e.style, s.style]);
    else if (yr(i)) {
      let r = e[i], a = s[i];
      a && r !== a && !(se(r) && r.includes(a)) && (e[i] = r ? [].concat(r, a) : a);
    } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function zt(t, e, n, s = null) {
  Bt(t, e, 7, [n, s]);
}
let Bh = Ic(), Vh = 0;
function Nh(t, e, n) {
  let s = t.type, i = (e ? e.appContext : t.appContext) || Bh, r = { uid: Vh++, vnode: t, type: s, parent: e, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Ou(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(i.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: (function a(l, o, u = !1) {
    let d = u ? Fh : o.propsCache, f = d.get(l);
    if (f) return f;
    let p = l.props, h = {}, v = [], b = !1;
    if (!ue(l)) {
      let S = (P) => {
        b = !0;
        let [C, z] = a(P, o, !0);
        He(h, C), z && v.push(...z);
      };
      !u && o.mixins.length && o.mixins.forEach(S), l.extends && S(l.extends), l.mixins && l.mixins.forEach(S);
    }
    if (!p && !b) return Ae(l) && d.set(l, gs), gs;
    if (se(p)) for (let S = 0; S < p.length; S++) {
      let P = yt(p[S]);
      uo(P) && (h[P] = Te);
    }
    else if (p) for (let S in p) {
      let P = yt(S);
      if (uo(P)) {
        let C = p[S], z = h[P] = se(C) || ue(C) ? { type: C } : He({}, C), I = z.type, $ = !1, Z = !0;
        if (se(I)) for (let O = 0; O < I.length; ++O) {
          let D = I[O], Y = ue(D) && D.name;
          if (Y === "Boolean") {
            $ = !0;
            break;
          }
          Y === "String" && (Z = !1);
        }
        else $ = ue(I) && I.name === "Boolean";
        z[0] = $, z[1] = Z, ($ || xe(z, "default")) && v.push(P);
      }
    }
    let A = [h, v];
    return Ae(l) && d.set(l, A), A;
  })(s, i), emitsOptions: (function a(l, o, u = !1) {
    let d = u ? Th : o.emitsCache, f = d.get(l);
    if (f !== void 0) return f;
    let p = l.emits, h = {}, v = !1;
    if (!ue(l)) {
      let b = (A) => {
        let S = a(A, o, !0);
        S && (v = !0, He(h, S));
      };
      !u && o.mixins.length && o.mixins.forEach(b), l.extends && b(l.extends), l.mixins && l.mixins.forEach(b);
    }
    return p || v ? (se(p) ? p.forEach((b) => h[b] = null) : He(h, p), Ae(l) && d.set(l, h), h) : (Ae(l) && d.set(l, null), null);
  })(s, i), emit: null, emitted: null, propsDefaults: Te, inheritAttrs: s.inheritAttrs, ctx: Te, data: Te, props: Te, attrs: Te, slots: Te, refs: Te, setupState: Te, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = Sh.bind(null, r), t.ce && t.ce(r), r;
}
let st = null, Qt = () => st || Xe;
{
  let t = Sr(), e = (n, s) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((a) => a(r)) : i[0](r);
    };
  };
  Xi = e("__VUE_INSTANCE_SETTERS__", (n) => st = n), Oa = e("__VUE_SSR_SETTERS__", (n) => ci = n);
}
let vi = (t) => {
  let e = st;
  return Xi(t), t.scope.on(), () => {
    t.scope.off(), Xi(e);
  };
}, fo = () => {
  st && st.scope.off(), Xi(null);
};
function Dc(t) {
  return 4 & t.vnode.shapeFlag;
}
let ci = !1;
function _h(t, e = !1, n = !1) {
  e && Oa(e);
  let { props: s, children: i } = t.vnode, r = Dc(t);
  (function(u, d, f, p = !1) {
    let h = {}, v = Object.create(Ha);
    for (let b in u.propsDefaults = /* @__PURE__ */ Object.create(null), xc(u, d, h, v), u.propsOptions[0]) b in h || (h[b] = void 0);
    f ? u.props = p ? h : Gf(h) : u.type.props ? u.props = h : u.props = v, u.attrs = v;
  })(t, s, r, e);
  var a = n || e;
  let l = t.slots = Object.create(Ha);
  if (32 & t.vnode.shapeFlag) {
    let u = i._;
    u ? (Ac(l, i, a), a && Lu(l, "_", u, !0)) : Ec(i, l);
  } else i && Fc(t, i);
  let o = r ? (function(u, d) {
    let f = u.type;
    u.accessCache = /* @__PURE__ */ Object.create(null), u.proxy = new Proxy(u.ctx, Ra);
    let { setup: p } = f;
    if (p) {
      fn();
      let h = u.setupContext = p.length > 1 ? Bc(u) : null, v = vi(u), b = pi(p, u, 0, [u.props, h]), A = $u(b);
      if (hn(), v(), (A || u.sp) && !bs(u) && mc(u), A) {
        if (b.then(fo, fo), d) return b.then((S) => {
          ho(u, S);
        }).catch((S) => {
          $r(S, u, 0);
        });
        u.asyncDep = b;
      } else ho(u, b);
    } else Oc(u);
  })(t, e) : void 0;
  return e && Oa(!1), o;
}
function ho(t, e, n) {
  ue(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ae(e) && (t.setupState = ec(e)), Oc(t);
}
function Oc(t, e, n) {
  let s = t.type;
  t.render || (t.render = s.render || jt);
  {
    let i = vi(t);
    fn();
    try {
      (function(r) {
        let a = wc(r), l = r.proxy, o = r.ctx;
        Pa = !1, a.beforeCreate && io(a.beforeCreate, r, "bc");
        let { data: u, computed: d, methods: f, watch: p, provide: h, inject: v, created: b, beforeMount: A, mounted: S, beforeUpdate: P, updated: C, activated: z, deactivated: I, beforeUnmount: $, unmounted: Z, render: O, renderTracked: D, renderTriggered: Y, errorCaptured: X, serverPrefetch: k, expose: _, inheritAttrs: ee, components: Q, directives: ve } = a;
        if (v && (function(pe, Ie, Re = jt) {
          for (let Ye in se(pe) && (pe = za(pe)), pe) {
            let Pe, ht = pe[Ye];
            Be(Pe = Ae(ht) ? "default" in ht ? dn(ht.from || Ye, ht.default, !0) : dn(ht.from || Ye) : dn(ht)) ? Object.defineProperty(Ie, Ye, { enumerable: !0, configurable: !0, get: () => Pe.value, set: (Pn) => Pe.value = Pn }) : Ie[Ye] = Pe;
          }
        })(v, o, null), f) for (let pe in f) {
          let Ie = f[pe];
          ue(Ie) && (o[pe] = Ie.bind(l));
        }
        if (u) {
          let pe = u.call(l, l);
          Ae(pe) && (r.data = Kt(pe));
        }
        if (Pa = !0, d) for (let pe in d) {
          let Ie = d[pe], Re = ue(Ie) ? Ie.bind(l, l) : ue(Ie.get) ? Ie.get.bind(l, l) : jt, Ye = ye({ get: Re, set: !ue(Ie) && ue(Ie.set) ? Ie.set.bind(l) : jt });
          Object.defineProperty(o, pe, { enumerable: !0, configurable: !0, get: () => Ye.value, set: (Pe) => Ye.value = Pe });
        }
        if (p) for (let pe in p) (function Ie(Re, Ye, Pe, ht) {
          let Pn = ht.includes(".") ? Sc(Pe, ht) : () => Pe[ht];
          if (De(Re)) {
            let Xt = Ye[Re];
            ue(Xt) && Oe(Pn, Xt);
          } else if (ue(Re)) Oe(Pn, Re.bind(Pe));
          else if (Ae(Re)) if (se(Re)) Re.forEach((Xt) => Ie(Xt, Ye, Pe, ht));
          else {
            let Xt = ue(Re.handler) ? Re.handler.bind(Pe) : Ye[Re.handler];
            ue(Xt) && Oe(Pn, Xt, Re);
          }
        })(p[pe], o, l, pe);
        if (h) {
          let pe = ue(h) ? h.call(l) : h;
          Reflect.ownKeys(pe).forEach((Ie) => {
            On(Ie, pe[Ie]);
          });
        }
        function ie(pe, Ie) {
          se(Ie) ? Ie.forEach((Re) => pe(Re.bind(l))) : Ie && pe(Ie.bind(l));
        }
        if (b && io(b, r, "c"), ie(lh, A), ie(yn, S), ie(oh, P), ie(gc, C), ie(rh, z), ie(ah, I), ie(fh, X), ie(dh, D), ie(ch, Y), ie(wl, $), ie(rs, Z), ie(uh, k), se(_)) if (_.length) {
          let pe = r.exposed || (r.exposed = {});
          _.forEach((Ie) => {
            Object.defineProperty(pe, Ie, { get: () => l[Ie], set: (Re) => l[Ie] = Re, enumerable: !0 });
          });
        } else r.exposed || (r.exposed = {});
        O && r.render === jt && (r.render = O), ee != null && (r.inheritAttrs = ee), Q && (r.components = Q), ve && (r.directives = ve), k && mc(r);
      })(t);
    } finally {
      hn(), i();
    }
  }
}
let Rh = { get: (t, e) => (nt(t, "get", ""), t[e]) };
function Bc(t) {
  return { attrs: new Proxy(t.attrs, Rh), slots: t.slots, emit: t.emit, expose: (e) => {
    t.exposed = e || {};
  } };
}
function Br(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(ec(gl(t.exposed)), { get: (e, n) => n in e ? e[n] : n in Qs ? Qs[n](t) : void 0, has: (e, n) => n in e || n in Qs })) : t.proxy;
}
function Ph(t, e = !0) {
  return ue(t) ? t.displayName || t.name : t.name || e && t.__name;
}
let ye = (t, e) => (function(n, s, i = !1) {
  let r, a;
  return ue(n) ? r = n : (r = n.get, a = n.set), new th(r, a, i);
})(t, 0, ci);
function ks(t, e, n) {
  try {
    or(-1);
    let s = arguments.length;
    return s !== 2 ? (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ui(n) && (n = [n]), B(t, e, n)) : !Ae(e) || se(e) ? B(t, null, e) : ui(e) ? B(t, null, [e]) : B(t, e);
  } finally {
    or(1);
  }
}
let zh = "3.5.25", mo = typeof window < "u" && window.trustedTypes;
if (mo) try {
  Ba = mo.createPolicy("vue", { createHTML: (t) => t });
} catch {
}
let Vc = Ba ? (t) => Ba.createHTML(t) : (t) => t, nn = typeof document < "u" ? document : null, po = nn && nn.createElement("template"), Hh = { insert: (t, e, n) => {
  e.insertBefore(t, n || null);
}, remove: (t) => {
  let e = t.parentNode;
  e && e.removeChild(t);
}, createElement: (t, e, n, s) => {
  let i = e === "svg" ? nn.createElementNS("http://www.w3.org/2000/svg", t) : e === "mathml" ? nn.createElementNS("http://www.w3.org/1998/Math/MathML", t) : n ? nn.createElement(t, { is: n }) : nn.createElement(t);
  return t === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
}, createText: (t) => nn.createTextNode(t), createComment: (t) => nn.createComment(t), setText: (t, e) => {
  t.nodeValue = e;
}, setElementText: (t, e) => {
  t.textContent = e;
}, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => nn.querySelector(t), setScopeId(t, e) {
  t.setAttribute(e, "");
}, insertStaticContent(t, e, n, s, i, r) {
  let a = n ? n.previousSibling : e.lastChild;
  if (i && (i === r || i.nextSibling)) for (; e.insertBefore(i.cloneNode(!0), n), i !== r && (i = i.nextSibling); ) ;
  else {
    po.innerHTML = Vc(s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t);
    let l = po.content;
    if (s === "svg" || s === "mathml") {
      let o = l.firstChild;
      for (; o.firstChild; ) l.appendChild(o.firstChild);
      l.removeChild(o);
    }
    e.insertBefore(l, n);
  }
  return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
} }, wn = "transition", _s = "animation", Ts = /* @__PURE__ */ Symbol("_vtc"), Nc = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, _c = He({}, cc, Nc), Vn = ((sa = (t, { slots: e }) => ks(ih, Rc(t), e)).displayName = "Transition", sa.props = _c, sa), Un = (t, e = []) => {
  se(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, go = (t) => !!t && (se(t) ? t.some((e) => e.length > 1) : t.length > 1);
function Rc(t) {
  let e = {};
  for (let k in t) k in Nc || (e[k] = t[k]);
  if (t.css === !1) return e;
  let { name: n = "v", type: s, duration: i, enterFromClass: r = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: o = r, appearActiveClass: u = a, appearToClass: d = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = t, v = (function(k) {
    if (k == null) return null;
    {
      if (Ae(k)) return [(function(ee) {
        return aa(ee);
      })(k.enter), (function(ee) {
        return aa(ee);
      })(k.leave)];
      let _ = (function(ee) {
        return aa(ee);
      })(k);
      return [_, _];
    }
  })(i), b = v && v[0], A = v && v[1], { onBeforeEnter: S, onEnter: P, onEnterCancelled: C, onLeave: z, onLeaveCancelled: I, onBeforeAppear: $ = S, onAppear: Z = P, onAppearCancelled: O = C } = e, D = (k, _, ee, Q) => {
    k._enterCancelled = Q, Tn(k, _ ? d : l), Tn(k, _ ? u : a), ee && ee();
  }, Y = (k, _) => {
    k._isLeaving = !1, Tn(k, f), Tn(k, h), Tn(k, p), _ && _();
  }, X = (k) => (_, ee) => {
    let Q = k ? Z : P, ve = () => D(_, k, ee);
    Un(Q, [_, ve]), vo(() => {
      Tn(_, k ? o : r), Ht(_, k ? d : l), go(Q) || yo(_, s, b, ve);
    });
  };
  return He(e, { onBeforeEnter(k) {
    Un(S, [k]), Ht(k, r), Ht(k, a);
  }, onBeforeAppear(k) {
    Un($, [k]), Ht(k, o), Ht(k, u);
  }, onEnter: X(!1), onAppear: X(!0), onLeave(k, _) {
    k._isLeaving = !0;
    let ee = () => Y(k, _);
    Ht(k, f), k._enterCancelled ? (Ht(k, p), Ua(k)) : (Ua(k), Ht(k, p)), vo(() => {
      k._isLeaving && (Tn(k, f), Ht(k, h), go(z) || yo(k, s, A, ee));
    }), Un(z, [k, ee]);
  }, onEnterCancelled(k) {
    D(k, !1, void 0, !0), Un(C, [k]);
  }, onAppearCancelled(k) {
    D(k, !0, void 0, !0), Un(O, [k]);
  }, onLeaveCancelled(k) {
    Y(k), Un(I, [k]);
  } });
}
function Ht(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[Ts] || (t[Ts] = /* @__PURE__ */ new Set())).add(e);
}
function Tn(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  let n = t[Ts];
  n && (n.delete(e), n.size || (t[Ts] = void 0));
}
function vo(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Wh = 0;
function yo(t, e, n, s) {
  let i = t._endId = ++Wh, r = () => {
    i === t._endId && s();
  };
  if (n != null) return setTimeout(r, n);
  let { type: a, timeout: l, propCount: o } = Pc(t, e);
  if (!a) return s();
  let u = a + "end", d = 0, f = () => {
    t.removeEventListener(u, p), r();
  }, p = (h) => {
    h.target === t && ++d >= o && f();
  };
  setTimeout(() => {
    d < o && f();
  }, l + 1), t.addEventListener(u, p);
}
function Pc(t, e) {
  let n = window.getComputedStyle(t), s = (v) => (n[v] || "").split(", "), i = s(`${wn}Delay`), r = s(`${wn}Duration`), a = bo(i, r), l = s(`${_s}Delay`), o = s(`${_s}Duration`), u = bo(l, o), d = null, f = 0, p = 0;
  e === wn ? a > 0 && (d = wn, f = a, p = r.length) : e === _s ? u > 0 && (d = _s, f = u, p = o.length) : p = (d = (f = Math.max(a, u)) > 0 ? a > u ? wn : _s : null) ? d === wn ? r.length : o.length : 0;
  let h = d === wn && /\b(?:transform|all)(?:,|$)/.test(s(`${wn}Property`).toString());
  return { type: d, timeout: f, propCount: p, hasTransform: h };
}
function bo(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => ko(n) + ko(t[s])));
}
function ko(t) {
  return t === "auto" ? 0 : 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function Ua(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
let wo = /* @__PURE__ */ Symbol("_vod"), Uh = /* @__PURE__ */ Symbol("_vsh"), qh = /* @__PURE__ */ Symbol(""), jh = /(?:^|;)\s*display\s*:/, Io = /\s*!important$/;
function Zi(t, e, n) {
  if (se(n)) n.forEach((s) => Zi(t, e, s));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    let s = (function(i, r) {
      let a = ya[r];
      if (a) return a;
      let l = yt(r);
      if (l !== "filter" && l in i) return ya[r] = l;
      l = wr(l);
      for (let o = 0; o < So.length; o++) {
        let u = So[o] + l;
        if (u in i) return ya[r] = u;
      }
      return r;
    })(t, e);
    Io.test(n) ? t.setProperty(Rn(s), n.replace(Io, ""), "important") : t[s] = n;
  }
}
let So = ["Webkit", "Moz", "ms"], ya = {}, To = "http://www.w3.org/1999/xlink";
function Co(t, e, n, s, i, r = Df(e)) {
  s && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(To, e.slice(6, e.length)) : t.setAttributeNS(To, e, n) : n == null || r && !(n || n === "") ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : Ot(n) ? String(n) : n);
}
function xo(t, e, n, s, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? Vc(n) : n);
    return;
  }
  let r = t.tagName;
  if (e === "value" && r !== "PROGRESS" && !r.includes("-")) {
    let o = r === "OPTION" ? t.getAttribute("value") || "" : t.value, u = n == null ? t.type === "checkbox" ? "on" : "" : String(n);
    o === u && "_value" in t || (t.value = u), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    let o = typeof t[e];
    if (o === "boolean") {
      var l;
      n = !!(l = n) || l === "";
    } else n == null && o === "string" ? (n = "", a = !0) : o === "number" && (n = 0, a = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  a && t.removeAttribute(i || e);
}
function on(t, e, n, s) {
  t.addEventListener(e, n, s);
}
let Eo = /* @__PURE__ */ Symbol("_vei"), Fo = /(?:Once|Passive|Capture)$/, ba = 0, Gh = Promise.resolve(), Ao = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && 123 > t.charCodeAt(2), Zh = (t, e, n, s, i, r) => {
  let a = i === "svg";
  if (e === "class") {
    var l;
    let o;
    l = s, (o = t[Ts]) && (l = (l ? [l, ...o] : [...o]).join(" ")), l == null ? t.removeAttribute("class") : a ? t.setAttribute("class", l) : t.className = l;
  } else e === "style" ? (function(o, u, d) {
    let f = o.style, p = De(d), h = !1;
    if (d && !p) {
      if (u) if (De(u)) for (let v of u.split(";")) {
        let b = v.slice(0, v.indexOf(":")).trim();
        d[b] == null && Zi(f, b, "");
      }
      else for (let v in u) d[v] == null && Zi(f, v, "");
      for (let v in d) v === "display" && (h = !0), Zi(f, v, d[v]);
    } else if (p) {
      if (u !== d) {
        let v = f[qh];
        v && (d += ";" + v), f.cssText = d, h = jh.test(d);
      }
    } else u && o.removeAttribute("style");
    wo in o && (o[wo] = h ? f.display : "", o[Uh] && (f.display = "none"));
  })(t, n, s) : yr(e) ? dl(e) || (function(o, u, d, f, p = null) {
    let h = o[Eo] || (o[Eo] = {}), v = h[u];
    if (f && v) v.value = f;
    else {
      let [S, P] = (function(C) {
        let z;
        if (Fo.test(C)) {
          let I;
          for (z = {}; I = C.match(Fo); ) C = C.slice(0, C.length - I[0].length), z[I[0].toLowerCase()] = !0;
        }
        return [C[2] === ":" ? C.slice(3) : Rn(C.slice(2)), z];
      })(u);
      if (f) {
        var b, A;
        let C;
        on(o, S, h[u] = (b = f, A = p, (C = (z) => {
          if (z._vts) {
            if (z._vts <= C.attached) return;
          } else z._vts = Date.now();
          Bt((function(I, $) {
            if (!se($)) return $;
            {
              let Z = I.stopImmediatePropagation;
              return I.stopImmediatePropagation = () => {
                Z.call(I), I._stopped = !0;
              }, $.map((O) => (D) => !D._stopped && O && O(D));
            }
          })(z, C.value), A, 5, [z]);
        }).value = b, C.attached = ba || (Gh.then(() => ba = 0), ba = Date.now()), C), P);
      } else v && (o.removeEventListener(S, v, P), h[u] = void 0);
    }
  })(t, e, 0, s, r) : (e[0] === "." ? (e = e.slice(1), 0) : e[0] === "^" ? (e = e.slice(1), 1) : !(function(o, u, d, f) {
    if (f) return !!(u === "innerHTML" || u === "textContent" || u in o && Ao(u) && ue(d));
    if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "autocorrect" || u === "sandbox" && o.tagName === "IFRAME" || u === "form" || u === "list" && o.tagName === "INPUT" || u === "type" && o.tagName === "TEXTAREA") return !1;
    if (u === "width" || u === "height") {
      let p = o.tagName;
      if (p === "IMG" || p === "VIDEO" || p === "CANVAS" || p === "SOURCE") return !1;
    }
    return !(Ao(u) && De(d)) && u in o;
  })(t, e, s, a)) ? t._isVueCE && (/[A-Z]/.test(e) || !De(s)) ? xo(t, yt(e), s, r, e) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), Co(t, e, s, a)) : (xo(t, e, s), t.tagName.includes("-") || e !== "value" && e !== "checked" && e !== "selected" || Co(t, e, s, a, r, e !== "value"));
}, zc = /* @__PURE__ */ new WeakMap(), Hc = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ Symbol("_moveCb"), $o = /* @__PURE__ */ Symbol("_enterCb"), Wc = (ia = { name: "TransitionGroup", props: He({}, _c, { tag: String, moveClass: String }), setup(t, { slots: e }) {
  let n, s, i = Qt(), r = uc();
  return gc(() => {
    if (!n.length) return;
    let a = t.moveClass || `${t.name || "v"}-move`;
    if (!(function(o, u, d) {
      let f = o.cloneNode(), p = o[Ts];
      p && p.forEach((b) => {
        b.split(/\s+/).forEach((A) => A && f.classList.remove(A));
      }), d.split(/\s+/).forEach((b) => b && f.classList.add(b)), f.style.display = "none";
      let h = u.nodeType === 1 ? u : u.parentNode;
      h.appendChild(f);
      let { hasTransform: v } = Pc(f);
      return h.removeChild(f), v;
    })(n[0].el, i.vnode.el, a)) {
      n = [];
      return;
    }
    n.forEach(Yh), n.forEach(Jh);
    let l = n.filter(Kh);
    Ua(i.vnode.el), l.forEach((o) => {
      let u = o.el, d = u.style;
      Ht(u, a), d.transform = d.webkitTransform = d.transitionDuration = "";
      let f = u[ur] = (p) => {
        (!p || p.target === u) && (!p || p.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[ur] = null, Tn(u, a));
      };
      u.addEventListener("transitionend", f);
    }), n = [];
  }), () => {
    let a = ke(t), l = Rc(a), o = a.tag || me;
    if (n = [], s) for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.el && d.el instanceof Element && (n.push(d), is(d, li(d, l, r, i)), zc.set(d, { left: d.el.offsetLeft, top: d.el.offsetTop }));
    }
    s = e.default ? bl(e.default()) : [];
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.key != null && is(d, li(d, l, r, i));
    }
    return B(o, null, s);
  };
} }, delete ia.props.mode, ia);
function Yh(t) {
  let e = t.el;
  e[ur] && e[ur](), e[$o] && e[$o]();
}
function Jh(t) {
  Hc.set(t, { left: t.el.offsetLeft, top: t.el.offsetTop });
}
function Kh(t) {
  let e = zc.get(t), n = Hc.get(t), s = e.left - n.left, i = e.top - n.top;
  if (s || i) {
    let r = t.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", t;
  }
}
let Nn = (t) => {
  let e = t.props["onUpdate:modelValue"] || !1;
  return se(e) ? (n) => Ui(e, n) : e;
};
function Qh(t) {
  t.target.composing = !0;
}
function Lo(t) {
  let e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
let Ct = /* @__PURE__ */ Symbol("_assign");
function Mo(t, e, n) {
  return e && (t = t.trim()), n && (t = Ir(t)), t;
}
let cr = { created(t, { modifiers: { lazy: e, trim: n, number: s } }, i) {
  t[Ct] = Nn(i);
  let r = s || i.props && i.props.type === "number";
  on(t, e ? "change" : "input", (a) => {
    a.target.composing || t[Ct](Mo(t.value, n, r));
  }), (n || r) && on(t, "change", () => {
    t.value = Mo(t.value, n, r);
  }), e || (on(t, "compositionstart", Qh), on(t, "compositionend", Lo), on(t, "change", Lo));
}, mounted(t, { value: e }) {
  t.value = e ?? "";
}, beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, a) {
  if (t[Ct] = Nn(a), t.composing) return;
  let l = (r || t.type === "number") && !/^0\d/.test(t.value) ? Ir(t.value) : t.value, o = e ?? "";
  if (l !== o) {
    if (document.activeElement === t && t.type !== "range" && (s && e === n || i && t.value.trim() === o)) return;
    t.value = o;
  }
} }, Xh = { deep: !0, created(t, e, n) {
  t[Ct] = Nn(n), on(t, "change", () => {
    let s = t._modelValue, i = Cs(t), r = t.checked, a = t[Ct];
    if (se(s)) {
      let l = hl(s, i), o = l !== -1;
      if (r && !o) a(s.concat(i));
      else if (!r && o) {
        let u = [...s];
        u.splice(l, 1), a(u);
      }
    } else {
      let l;
      if (l = s, Ge.call(l) === "[object Set]") {
        let o = new Set(s);
        r ? o.add(i) : o.delete(i), a(o);
      } else a(Uc(t, r));
    }
  });
}, mounted: Do, beforeUpdate(t, e, n) {
  t[Ct] = Nn(n), Do(t, e, n);
} };
function Do(t, { value: e, oldValue: n }, s) {
  let i;
  if (t._modelValue = e, se(e)) i = hl(e, s.props.value) > -1;
  else {
    let r;
    if (r = e, Ge.call(r) === "[object Set]") i = e.has(s.props.value);
    else {
      if (e === n) return;
      i = ss(e, Uc(t, !0));
    }
  }
  t.checked !== i && (t.checked = i);
}
let em = { created(t, { value: e }, n) {
  t.checked = ss(e, n.props.value), t[Ct] = Nn(n), on(t, "change", () => {
    t[Ct](Cs(t));
  });
}, beforeUpdate(t, { value: e, oldValue: n }, s) {
  t[Ct] = Nn(s), e !== n && (t.checked = ss(e, s.props.value));
} }, tm = { deep: !0, created(t, { value: e, modifiers: { number: n } }, s) {
  let i, r = (i = e, Ge.call(i) === "[object Set]");
  on(t, "change", () => {
    let a = Array.prototype.filter.call(t.options, (l) => l.selected).map((l) => n ? Ir(Cs(l)) : Cs(l));
    t[Ct](t.multiple ? r ? new Set(a) : a : a[0]), t._assigning = !0, Jn(() => {
      t._assigning = !1;
    });
  }), t[Ct] = Nn(s);
}, mounted(t, { value: e }) {
  Oo(t, e);
}, beforeUpdate(t, e, n) {
  t[Ct] = Nn(n);
}, updated(t, { value: e }) {
  t._assigning || Oo(t, e);
} };
function Oo(t, e) {
  let n, s = t.multiple, i = se(e);
  if (!s || i || (n = e, Ge.call(n) === "[object Set]")) {
    for (let r = 0, a = t.options.length; r < a; r++) {
      let l = t.options[r], o = Cs(l);
      if (s) if (i) {
        let u = typeof o;
        u === "string" || u === "number" ? l.selected = e.some((d) => String(d) === String(o)) : l.selected = hl(e, o) > -1;
      } else l.selected = e.has(o);
      else if (ss(Cs(l), e)) {
        t.selectedIndex !== r && (t.selectedIndex = r);
        return;
      }
    }
    s || t.selectedIndex === -1 || (t.selectedIndex = -1);
  }
}
function Cs(t) {
  return "_value" in t ? t._value : t.value;
}
function Uc(t, e) {
  let n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
let nm = { created(t, e, n) {
  Vi(t, e, n, null, "created");
}, mounted(t, e, n) {
  Vi(t, e, n, null, "mounted");
}, beforeUpdate(t, e, n, s) {
  Vi(t, e, n, s, "beforeUpdate");
}, updated(t, e, n, s) {
  Vi(t, e, n, s, "updated");
} };
function sm(t, e) {
  switch (t) {
    case "SELECT":
      return tm;
    case "TEXTAREA":
      return cr;
    default:
      switch (e) {
        case "checkbox":
          return Xh;
        case "radio":
          return em;
        default:
          return cr;
      }
  }
}
function Vi(t, e, n, s, i) {
  let r = sm(t.tagName, n.props && n.props.type)[i];
  r && r(t, e, n, s);
}
let im = ["ctrl", "shift", "alt", "meta"], rm = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, e) => im.some((n) => t[`${n}Key`] && !e.includes(n)) }, Fl = (t, e) => {
  let n = t._withMods || (t._withMods = {}), s = e.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let a = 0; a < e.length; a++) {
      let l = rm[e[a]];
      if (l && l(i, e)) return;
    }
    return t(i, ...r);
  });
}, am = He({ patchProp: Zh }, Hh), lm = (...t) => {
  let e = (Gl || (Gl = $h(am))).createApp(...t), { mount: n } = e;
  return e.mount = (s) => {
    let i = um(s);
    if (!i) return;
    let r = e._component;
    ue(r) || r.render || r.template || (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    let a = n(i, !1, om(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function om(t) {
  return t instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && t instanceof MathMLElement ? "mathml" : void 0;
}
function um(t) {
  return De(t) ? document.querySelector(t) : t;
}
function qc(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = qc(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function xt() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = qc(t)) && (s && (s += " "), s += e);
  return s;
}
const jc = /* @__PURE__ */ Symbol(), Gc = /* @__PURE__ */ Symbol(), cm = /* @__PURE__ */ Symbol();
function qa(t) {
  return t !== null && typeof t == "object" && !("value" in t);
}
function ei(t) {
  return t !== null && typeof t == "object" && "value" in t;
}
const Bo = {
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
let Zc = {};
function dm(t) {
  Zc = Object.keys(t).reduce((e, n) => {
    const { icon: s, iconName: i } = t[n];
    return e[i] = s, Array.isArray(s[2]) && s[2].forEach((r) => e[r] = s), e;
  }, {});
}
const fm = 6e3, Me = Kt({
  dialogCount: 0,
  alerts: [],
  confirms: [],
  prompts: [],
  snackbars: [],
  tooltips: []
});
let Vr = 0, hm = 0;
function Yc(t) {
  const e = ++Vr;
  return Me.alerts.push({
    id: e,
    ...t
  }), e;
}
function Jc(t) {
  const e = ++Vr;
  return Me.confirms.push({
    id: e,
    ...t
  }), e;
}
function Kc(t) {
  const e = ++Vr;
  return Me.prompts.push({
    id: e,
    ...t
  }), e;
}
function Al(t) {
  const e = ++Vr;
  return Me.snackbars.unshift({
    id: e,
    ...t
  }), e;
}
function mm(t) {
  const e = ++hm;
  return Me.tooltips.push({
    id: e,
    ...t
  }), e;
}
function Qc() {
  return [
    ++Me.dialogCount,
    () => --Me.dialogCount
  ];
}
function Xc(t) {
  const e = Me.alerts.findIndex((n) => n.id === t);
  Me.alerts.splice(e, 1);
}
function ja(t) {
  const e = Me.confirms.findIndex((n) => n.id === t);
  Me.confirms.splice(e, 1);
}
function Ga(t) {
  const e = Me.prompts.findIndex((n) => n.id === t);
  Me.prompts.splice(e, 1);
}
function dr(t) {
  const e = Me.snackbars.findIndex((n) => n.id === t);
  Me.snackbars.splice(e, 1);
}
function pm(t) {
  const e = Me.tooltips.findIndex((n) => n.id === t);
  Me.tooltips.splice(e, 1);
}
function ed(t, e) {
  const n = Me.snackbars.findIndex((s) => s.id === t);
  Object.assign(Me.snackbars[n], e);
}
function gm(t, e) {
  const n = Me.tooltips.findIndex((s) => s.id === t);
  Object.assign(Me.tooltips[n], e);
}
async function vm(t) {
  return new Promise((e) => {
    const n = Yc({
      ...t,
      onClose() {
        e(), Xc(n);
      }
    });
  });
}
async function ym(t) {
  return new Promise((e) => {
    const n = Jc({
      ...t,
      onCancel() {
        e(!1), ja(n);
      },
      onConfirm() {
        e(!0), ja(n);
      }
    });
  });
}
async function bm(t) {
  return new Promise((e) => {
    const n = Kc({
      ...t,
      onCancel() {
        e(!1), Ga(n);
      },
      onConfirm(s) {
        e(s), Ga(n);
      }
    });
  });
}
async function Vo({ duration: t, ...e }) {
  const n = Al(e);
  await new Promise((s) => setTimeout(() => requestAnimationFrame(s), t ?? fm)), dr(n);
}
function yi() {
  const t = ye(() => Me.dialogCount > 0), e = ye(() => Me.tooltips[Me.tooltips.length - 1] || null);
  return {
    ...Me,
    inertMain: t,
    tooltip: e,
    addAlert: Yc,
    addConfirm: Jc,
    addPrompt: Kc,
    addSnackbar: Al,
    addTooltip: mm,
    registerDialog: Qc,
    removeAlert: Xc,
    removeConfirm: ja,
    removePrompt: Ga,
    removeSnackbar: dr,
    removeTooltip: pm,
    showAlert: vm,
    showConfirm: ym,
    showPrompt: bm,
    showSnackbar: Vo,
    updateSnackbar: ed,
    updateTooltip: gm,
    showSnackbarSync: km(Vo)
  };
}
function km(t) {
  return (...e) => t(...e);
}
function ws(t) {
  return typeof t == "string" || t instanceof String;
}
function No(t) {
  var e;
  return typeof t == "object" && t != null && (t == null || (e = t.constructor) == null ? void 0 : e.name) === "Object";
}
function td(t, e) {
  return Array.isArray(e) ? td(t, (n, s) => e.includes(s)) : Object.entries(t).reduce((n, s) => {
    let [i, r] = s;
    return e(r, i) && (n[i] = r), n;
  }, {});
}
const le = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function wm(t) {
  switch (t) {
    case le.LEFT:
      return le.FORCE_LEFT;
    case le.RIGHT:
      return le.FORCE_RIGHT;
    default:
      return t;
  }
}
function Za(t, e) {
  if (e === t) return !0;
  const n = Array.isArray(e), s = Array.isArray(t);
  let i;
  if (n && s) {
    if (e.length != t.length) return !1;
    for (i = 0; i < e.length; i++) if (!Za(e[i], t[i])) return !1;
    return !0;
  }
  if (n != s) return !1;
  if (e && t && typeof e == "object" && typeof t == "object") {
    const r = e instanceof Date, a = t instanceof Date;
    if (r && a) return e.getTime() == t.getTime();
    if (r != a) return !1;
    const l = e instanceof RegExp, o = t instanceof RegExp;
    if (l && o) return e.toString() == t.toString();
    if (l != o) return !1;
    const u = Object.keys(e);
    for (i = 0; i < u.length; i++) if (!Object.prototype.hasOwnProperty.call(t, u[i])) return !1;
    for (i = 0; i < u.length; i++) if (!Za(t[u[i]], e[u[i]])) return !1;
    return !0;
  } else if (e && t && typeof e == "function" && typeof t == "function")
    return e.toString() === t.toString();
  return !1;
}
class Im {
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
    return !this.removedCount || this.insertedCount ? le.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? le.RIGHT : le.LEFT;
  }
}
function we(t, e) {
  return new we.InputMask(t, e);
}
function nd(t) {
  if (t == null) throw new Error("mask property should be defined");
  return t instanceof RegExp ? we.MaskedRegExp : ws(t) ? we.MaskedPattern : t === Date ? we.MaskedDate : t === Number ? we.MaskedNumber : Array.isArray(t) || t === Array ? we.MaskedDynamic : we.Masked && t.prototype instanceof we.Masked ? t : we.Masked && t instanceof we.Masked ? t.constructor : t instanceof Function ? we.MaskedFunction : (console.warn("Mask not found for mask", t), we.Masked);
}
function Ya(t) {
  if (!t) throw new Error("Options in not defined");
  if (we.Masked) {
    if (t.prototype instanceof we.Masked) return {
      mask: t
    };
    const {
      mask: e = void 0,
      ...n
    } = t instanceof we.Masked ? {
      mask: t
    } : No(t) && t.mask instanceof we.Masked ? t : {};
    if (e) {
      const s = e.mask;
      return {
        ...td(e, (i, r) => !r.startsWith("_")),
        mask: e.constructor,
        _mask: s,
        ...n
      };
    }
  }
  return No(t) ? {
    ...t
  } : {
    mask: t
  };
}
function di(t) {
  if (we.Masked && t instanceof we.Masked) return t;
  const e = Ya(t), n = nd(e.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
  return e.mask === n && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new n(e);
}
we.createMask = di;
class $l {
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
we.MaskElement = $l;
const _o = 90, Sm = 89;
class Nr extends $l {
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
    if (this._handlers.redo && (e.keyCode === _o && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === Sm && e.ctrlKey))
      return e.preventDefault(), this._handlers.redo(e);
    if (this._handlers.undo && e.keyCode === _o && (e.metaKey || e.ctrlKey))
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
we.HTMLMaskElement = Nr;
class Tm extends Nr {
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
we.HTMLMaskElement = Nr;
class sd extends Nr {
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
we.HTMLContenteditableMaskElement = sd;
class _r {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(e), this.states.length > _r.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
_r.MAX_LENGTH = 100;
class Cm {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(e, n) {
    this.el = e instanceof $l ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new sd(e) : new Tm(e), this.masked = di(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new _r(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(e instanceof we.Masked) && this.masked.constructor === nd(e)) {
      this.masked.updateOptions({
        mask: e
      });
      return;
    }
    const n = e instanceof we.Masked ? e : di({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, le.LEFT));
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
    const n = new Im({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), s = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, r = s === this.masked.rawInputValue ? n.removeDirection : le.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, r);
    r !== le.NONE && (a = this.masked.nearestInputPos(a, le.NONE)), this.updateControl(a), delete this._inputEvent;
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
we.InputMask = Cm;
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
we.ChangeDetails = Ee;
class cn {
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
class Yt {
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
      ...Yt.DEFAULTS,
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), new cn(this.extractInput(e, n), e);
  }
  /** Appends tail */
  appendTail(e) {
    return ws(e) && (e = new cn(String(e))), e.appendTo(this);
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
      let l = this.pad(n);
      const o = this._appendCharRaw(e, n);
      l = l.aggregate(o), o.rawInserted || l.equals(r) ? r = l : this.state = a;
    }
    if (r.inserted) {
      let a, l = this.doValidate(n) !== !1;
      if (l && s != null) {
        const o = this.state;
        if (this.overwrite === !0) {
          a = s.state;
          for (let d = 0; d < r.rawInserted.length; ++d)
            s.unshift(this.displayValue.length - r.tailShift);
        }
        let u = this.appendTail(s);
        if (l = u.rawInserted.length === s.toString().length, !(l && u.inserted) && this.overwrite === "shift") {
          this.state = o, a = s.state;
          for (let d = 0; d < r.rawInserted.length; ++d)
            s.shift();
          u = this.appendTail(s), l = u.rawInserted.length === s.toString().length;
        }
        l && u.inserted && (this.state = o);
      }
      l || (r = new Ee(), this.state = i, s && a && (s.state = a));
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
    if (!ws(e)) throw new Error("value should be string");
    const i = ws(s) ? new cn(String(s)) : s;
    n != null && n.tail && (n._beforeTailState = this.state);
    let r;
    [e, r] = this.doPrepare(e, n);
    for (let a = 0; a < e.length; ++a) {
      const l = this._appendChar(e[a], n, i);
      if (!l.rawInserted && !this.doSkipInvalid(e[a], n, i)) break;
      r.aggregate(l);
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
    s === void 0 && (s = ""), i === void 0 && (i = le.NONE), r === void 0 && (r = {
      input: !0
    });
    const a = e + n, l = this.extractTail(a), o = this.eager === !0 || this.eager === "remove";
    let u;
    o && (i = wm(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let d = e;
    const f = new Ee();
    if (i !== le.NONE && (d = this.nearestInputPos(e, n > 1 && e !== 0 && !o ? le.NONE : i), f.tailShift = d - e), f.aggregate(this.remove(d)), o && i !== le.NONE && u === this.rawInputValue)
      if (i === le.FORCE_LEFT) {
        let p;
        for (; u === this.rawInputValue && (p = this.displayValue.length); )
          f.aggregate(new Ee({
            tailShift: -1
          })).aggregate(this.remove(p - 1));
      } else i === le.FORCE_RIGHT && l.unshift();
    return f.aggregate(this.append(s, r, l));
  }
  maskEquals(e) {
    return this.mask === e;
  }
  optionsIsChanged(e) {
    return !Za(this, e);
  }
  typedValueEquals(e) {
    const n = this.typedValue;
    return e === n || Yt.EMPTY_VALUES.includes(e) && Yt.EMPTY_VALUES.includes(n) || (this.format ? this.format(e, this) === this.format(this.typedValue, this) : !1);
  }
  pad(e) {
    return new Ee();
  }
}
Yt.DEFAULTS = {
  skipInvalid: !0
};
Yt.EMPTY_VALUES = [void 0, null, ""];
we.Masked = Yt;
class Kn {
  /** */
  constructor(e, n) {
    e === void 0 && (e = []), n === void 0 && (n = 0), this.chunks = e, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(e) {
    if (!String(e)) return;
    e = ws(e) ? new cn(String(e)) : e;
    const n = this.chunks[this.chunks.length - 1], s = n && // if stops are same or tail has no stop
    (n.stop === e.stop || e.stop == null) && // if tail chunk goes just after last chunk
    e.from === n.from + n.toString().length;
    if (e instanceof cn)
      s ? n.extend(e.toString()) : this.chunks.push(e);
    else if (e instanceof Kn) {
      if (e.stop == null) {
        let i;
        for (; e.chunks.length && e.chunks[0].stop == null; )
          i = e.chunks.shift(), i.from += e.from, this.extend(i);
      }
      e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
    }
  }
  appendTo(e) {
    if (!(e instanceof we.MaskedPattern))
      return new cn(this.toString()).appendTo(e);
    const n = new Ee();
    for (let s = 0; s < this.chunks.length; ++s) {
      const i = this.chunks[s], r = e._mapPosToBlock(e.displayValue.length), a = i.stop;
      let l;
      if (a != null && // if block not found or stop is behind lastBlock
      (!r || r.index <= a) && ((i instanceof Kn || // for continuous block also check if stop is exist
      e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), l = i instanceof Kn && e._blocks[a]), l) {
        const o = l.appendTail(i);
        n.aggregate(o);
        const u = i.toString().slice(o.rawInserted.length);
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
      const r = "chunks" in i ? new Kn() : new cn();
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
class xm {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, le.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, le.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, le.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, le.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, le.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, le.NONE), !0;
    });
  }
}
class id {
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
    n === void 0 && (n = le.NONE);
    const s = 0, i = this._value.length;
    switch (n) {
      case le.LEFT:
      case le.FORCE_LEFT:
        return s;
      case le.NONE:
      case le.RIGHT:
      case le.FORCE_RIGHT:
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
    return new cn("");
  }
  appendTail(e) {
    return ws(e) && (e = new cn(String(e))), e.appendTo(this);
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
class fr {
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
      eager: l,
      ...o
    } = e;
    this.masked = di(o), Object.assign(this, {
      parent: n,
      isOptional: s,
      placeholderChar: i,
      displayChar: r,
      lazy: a,
      eager: l
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
    n === void 0 && (n = le.NONE);
    const s = 0, i = this.value.length, r = Math.min(Math.max(e, s), i);
    switch (n) {
      case le.LEFT:
      case le.FORCE_LEFT:
        return this.isComplete ? r : s;
      case le.RIGHT:
      case le.FORCE_RIGHT:
        return this.isComplete ? r : i;
      case le.NONE:
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
fr.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class Em extends Yt {
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
we.MaskedRegExp = Em;
class Jt extends Yt {
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
      ...Jt.DEFAULTS,
      ...e,
      definitions: Object.assign({}, fr.DEFAULT_DEFINITIONS, e?.definitions)
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
        const u = n.slice(r), d = Object.keys(this.blocks).filter((p) => u.indexOf(p) === 0);
        d.sort((p, h) => h.length - p.length);
        const f = d[0];
        if (f) {
          const {
            expose: p,
            repeat: h,
            ...v
          } = Ya(this.blocks[f]), b = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...v,
            repeat: h,
            parent: this
          }, A = h != null ? new we.RepeatBlock(
            b
            /* TODO */
          ) : di(b);
          A && (this._blocks.push(A), p && (this.exposeBlock = A), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), r += f.length - 1;
          continue;
        }
      }
      let a = n[r], l = a in e;
      if (a === Jt.STOP_CHAR) {
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
      if (a === Jt.ESCAPE_CHAR) {
        if (++r, a = n[r], !a) break;
        l = !1;
      }
      const o = l ? new fr({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Ya(e[a]),
        parent: this
      }) : new id({
        char: a,
        eager: this.eager,
        isUnmasking: s
      });
      this._blocks.push(o);
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
    for (let a = s.index, l; l = this._blocks[a]; ++a) {
      var r;
      const o = l._appendChar(e, {
        ...n,
        _beforeTailState: (r = n._beforeTailState) == null || (r = r._blocks) == null ? void 0 : r[a]
      });
      if (i.aggregate(o), o.consumed) break;
    }
    return i;
  }
  extractTail(e, n) {
    e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length);
    const s = new Kn();
    return e === n || this._forEachBlocksInRange(e, n, (i, r, a, l) => {
      const o = i.extractTail(a, l);
      o.stop = this._findStopBefore(r), o.from = this._blockStartPos(r), o instanceof Kn && (o.blockIndex = r), s.extend(o);
    }), s;
  }
  extractInput(e, n, s) {
    if (e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), s === void 0 && (s = {}), e === n) return "";
    let i = "";
    return this._forEachBlocksInRange(e, n, (r, a, l, o) => {
      i += r.extractInput(l, o, s);
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
        var l;
        n.aggregate(a._appendPlaceholder((l = a._blocks) == null ? void 0 : l.length));
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
      const r = this._mapPosToBlock(n), a = r && i.index === r.index, l = i.offset, o = r && a ? r.offset : this._blocks[i.index].displayValue.length;
      if (s(this._blocks[i.index], i.index, l, o), r && !a) {
        for (let u = i.index + 1; u < r.index; ++u)
          s(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
        s(this._blocks[r.index], r.index, 0, r.offset);
      }
    }
  }
  remove(e, n) {
    e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length);
    const s = super.remove(e, n);
    return this._forEachBlocksInRange(e, n, (i, r, a, l) => {
      s.aggregate(i.remove(a, l));
    }), s;
  }
  nearestInputPos(e, n) {
    if (n === void 0 && (n = le.NONE), !this._blocks.length) return 0;
    const s = new xm(this, e);
    if (n === le.NONE)
      return s.pushRightBeforeInput() || (s.popState(), s.pushLeftBeforeInput()) ? s.pos : this.displayValue.length;
    if (n === le.LEFT || n === le.FORCE_LEFT) {
      if (n === le.LEFT) {
        if (s.pushRightBeforeFilled(), s.ok && s.pos === e) return e;
        s.popState();
      }
      if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), n === le.LEFT) {
        if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= e || (s.popState(), s.ok && s.pos <= e)) return s.pos;
        s.popState();
      }
      return s.ok ? s.pos : n === le.FORCE_LEFT ? 0 : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0);
    }
    return n === le.RIGHT || n === le.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : n === le.FORCE_RIGHT ? this.displayValue.length : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : this.nearestInputPos(e, le.LEFT))) : e;
  }
  totalInputPositions(e, n) {
    e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length);
    let s = 0;
    return this._forEachBlocksInRange(e, n, (i, r, a, l) => {
      s += i.totalInputPositions(a, l);
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
Jt.DEFAULTS = {
  ...Yt.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Jt.STOP_CHAR = "`";
Jt.ESCAPE_CHAR = "\\";
Jt.InputDefinition = fr;
Jt.FixedDefinition = id;
we.MaskedPattern = Jt;
function Fm(t) {
  return we(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aaaaaa##[000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function Am(t) {
  return we(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa00 #### 0000 0000[ 0000 0000 0000 0000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function $m(t) {
  return we(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa########[#####]",
    prepareChar: (e) => e.toUpperCase()
  });
}
var Lm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  bic: Fm,
  iban: Am,
  vat: $m
});
function Mm() {
  return dn(jc, ne(!1));
}
function Fs(t) {
  const e = Mm();
  return ye(() => c(t) || c(e));
}
function Ll() {
  return dn(Gc, {
    id: kl()
  });
}
let rd;
const Rr = (t) => rd = t, ad = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function Ja(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var ti;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(ti || (ti = {}));
function Dm() {
  const t = Bu(!0), e = t.run(() => ne({}));
  let n = [], s = [];
  const i = gl({
    install(r) {
      Rr(i), i._a = r, r.provide(ad, i), r.config.globalProperties.$pinia = i, s.forEach((a) => n.push(a)), s = [];
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
const ld = () => {
};
function Ro(t, e, n, s = ld) {
  t.add(e);
  const i = () => {
    t.delete(e) && s();
  };
  return !n && Vu() && Nu(i), i;
}
function us(t, ...e) {
  t.forEach((n) => {
    n(...e);
  });
}
const Om = (t) => t(), Po = /* @__PURE__ */ Symbol(), ka = /* @__PURE__ */ Symbol();
function Ka(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((n, s) => t.set(s, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], i = t[n];
    Ja(i) && Ja(s) && t.hasOwnProperty(n) && !Be(s) && !Zt(s) ? t[n] = Ka(i, s) : t[n] = s;
  }
  return t;
}
const Bm = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function Vm(t) {
  return !Ja(t) || !Object.prototype.hasOwnProperty.call(t, Bm);
}
const { assign: Cn } = Object;
function Nm(t) {
  return !!(Be(t) && t.effect);
}
function _m(t, e, n, s) {
  const { state: i, actions: r, getters: a } = e, l = n.state.value[t];
  let o;
  function u() {
    l || (n.state.value[t] = i ? i() : {});
    const d = Xf(n.state.value[t]);
    return Cn(d, r, Object.keys(a || {}).reduce((f, p) => (f[p] = gl(ye(() => {
      Rr(n);
      const h = n._s.get(t);
      return a[p].call(h, h);
    })), f), {}));
  }
  return o = od(t, u, e, n, s, !0), o;
}
function od(t, e, n = {}, s, i, r) {
  let a;
  const l = Cn({ actions: {} }, n), o = { deep: !0 };
  let u, d, f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), h;
  const v = s.state.value[t];
  !r && !v && (s.state.value[t] = {}), ne({});
  let b;
  function A(O) {
    let D;
    u = d = !1, typeof O == "function" ? (O(s.state.value[t]), D = {
      type: ti.patchFunction,
      storeId: t,
      events: h
    }) : (Ka(s.state.value[t], O), D = {
      type: ti.patchObject,
      payload: O,
      storeId: t,
      events: h
    });
    const Y = b = /* @__PURE__ */ Symbol();
    Jn().then(() => {
      b === Y && (u = !0);
    }), d = !0, us(f, D, s.state.value[t]);
  }
  const S = r ? function() {
    const { state: D } = n, Y = D ? D() : {};
    this.$patch((X) => {
      Cn(X, Y);
    });
  } : (
    /* istanbul ignore next */
    ld
  );
  function P() {
    a.stop(), f.clear(), p.clear(), s._s.delete(t);
  }
  const C = (O, D = "") => {
    if (Po in O)
      return O[ka] = D, O;
    const Y = function() {
      Rr(s);
      const X = Array.from(arguments), k = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      function ee(ie) {
        k.add(ie);
      }
      function Q(ie) {
        _.add(ie);
      }
      us(p, {
        args: X,
        name: Y[ka],
        store: I,
        after: ee,
        onError: Q
      });
      let ve;
      try {
        ve = O.apply(this && this.$id === t ? this : I, X);
      } catch (ie) {
        throw us(_, ie), ie;
      }
      return ve instanceof Promise ? ve.then((ie) => (us(k, ie), ie)).catch((ie) => (us(_, ie), Promise.reject(ie))) : (us(k, ve), ve);
    };
    return Y[Po] = !0, Y[ka] = D, Y;
  }, z = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Ro.bind(null, p),
    $patch: A,
    $reset: S,
    $subscribe(O, D = {}) {
      const Y = Ro(f, O, D.detached, () => X()), X = a.run(() => Oe(() => s.state.value[t], (k) => {
        (D.flush === "sync" ? d : u) && O({
          storeId: t,
          type: ti.direct,
          events: h
        }, k);
      }, Cn({}, o, D)));
      return Y;
    },
    $dispose: P
  }, I = Kt(z);
  s._s.set(t, I);
  const Z = (s._a && s._a.runWithContext || Om)(() => s._e.run(() => (a = Bu()).run(() => e({ action: C }))));
  for (const O in Z) {
    const D = Z[O];
    if (Be(D) && !Nm(D) || Zt(D))
      r || (v && Vm(D) && (Be(D) ? D.value = v[O] : Ka(D, v[O])), s.state.value[t][O] = D);
    else if (typeof D == "function") {
      const Y = C(D, O);
      Z[O] = Y, l.actions[O] = D;
    }
  }
  return Cn(I, Z), Cn(ke(I), Z), Object.defineProperty(I, "$state", {
    get: () => s.state.value[t],
    set: (O) => {
      A((D) => {
        Cn(D, O);
      });
    }
  }), s._p.forEach((O) => {
    Cn(I, a.run(() => O({
      store: I,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), v && r && n.hydrate && n.hydrate(I.$state, v), u = !0, d = !0, I;
}
// @__NO_SIDE_EFFECTS__
function Rm(t, e, n) {
  let s;
  const i = typeof e == "function";
  s = i ? n : e;
  function r(a, l) {
    const o = yh();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (o ? dn(ad, null) : null), a && Rr(a), a = rd, a._s.has(t) || (i ? od(t, e, s, a) : _m(t, s, a)), a._s.get(t);
  }
  return r.$id = t, r;
}
function Pm(t) {
  const e = ke(t), n = {};
  for (const s in e) {
    const i = e[s];
    i.effect ? n[s] = // ...
    ye({
      get: () => t[s],
      set(r) {
        t[s] = r;
      }
    }) : (Be(i) || Zt(i)) && (n[s] = // ---
    pn(t, s));
  }
  return n;
}
class as extends Error {
}
class zm extends as {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class Hm extends as {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Wm extends as {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class ps extends as {
}
class ud extends as {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class tt extends as {
}
class In extends as {
  constructor() {
    super("Zone is an abstract class");
  }
}
const G = "numeric", Nt = "short", vt = "long", hr = {
  year: G,
  month: G,
  day: G
}, cd = {
  year: G,
  month: Nt,
  day: G
}, Um = {
  year: G,
  month: Nt,
  day: G,
  weekday: Nt
}, dd = {
  year: G,
  month: vt,
  day: G
}, fd = {
  year: G,
  month: vt,
  day: G,
  weekday: vt
}, hd = {
  hour: G,
  minute: G
}, md = {
  hour: G,
  minute: G,
  second: G
}, pd = {
  hour: G,
  minute: G,
  second: G,
  timeZoneName: Nt
}, gd = {
  hour: G,
  minute: G,
  second: G,
  timeZoneName: vt
}, vd = {
  hour: G,
  minute: G,
  hourCycle: "h23"
}, yd = {
  hour: G,
  minute: G,
  second: G,
  hourCycle: "h23"
}, bd = {
  hour: G,
  minute: G,
  second: G,
  hourCycle: "h23",
  timeZoneName: Nt
}, kd = {
  hour: G,
  minute: G,
  second: G,
  hourCycle: "h23",
  timeZoneName: vt
}, wd = {
  year: G,
  month: G,
  day: G,
  hour: G,
  minute: G
}, Id = {
  year: G,
  month: G,
  day: G,
  hour: G,
  minute: G,
  second: G
}, Sd = {
  year: G,
  month: Nt,
  day: G,
  hour: G,
  minute: G
}, Td = {
  year: G,
  month: Nt,
  day: G,
  hour: G,
  minute: G,
  second: G
}, qm = {
  year: G,
  month: Nt,
  day: G,
  weekday: Nt,
  hour: G,
  minute: G
}, Cd = {
  year: G,
  month: vt,
  day: G,
  hour: G,
  minute: G,
  timeZoneName: Nt
}, xd = {
  year: G,
  month: vt,
  day: G,
  hour: G,
  minute: G,
  second: G,
  timeZoneName: Nt
}, Ed = {
  year: G,
  month: vt,
  day: G,
  weekday: vt,
  hour: G,
  minute: G,
  timeZoneName: vt
}, Fd = {
  year: G,
  month: vt,
  day: G,
  weekday: vt,
  hour: G,
  minute: G,
  second: G,
  timeZoneName: vt
};
class bi {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new In();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new In();
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
    throw new In();
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
    throw new In();
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
    throw new In();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new In();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new In();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new In();
  }
}
let wa = null;
class Pr extends bi {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return wa === null && (wa = new Pr()), wa;
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
    return Rd(e, n, s);
  }
  /** @override **/
  formatOffset(e, n) {
    return ni(this.offset(e), n);
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
const Qa = /* @__PURE__ */ new Map();
function jm(t) {
  let e = Qa.get(t);
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
  }), Qa.set(t, e)), e;
}
const Gm = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Zm(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, l, o, u, d] = s;
  return [a, i, r, l, o, u, d];
}
function Ym(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], l = Gm[r];
    r === "era" ? s[l] = a : ae(l) || (s[l] = parseInt(a, 10));
  }
  return s;
}
const Ia = /* @__PURE__ */ new Map();
class gn extends bi {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = Ia.get(e);
    return n === void 0 && Ia.set(e, n = new gn(e)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Ia.clear(), Qa.clear();
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
    super(), this.zoneName = e, this.valid = gn.isValidZone(e);
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
    return Rd(e, n, s, this.name);
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
    return ni(this.offset(e), n);
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
    const s = jm(this.name);
    let [i, r, a, l, o, u, d] = s.formatToParts ? Ym(s, n) : Zm(s, n);
    l === "BC" && (i = -Math.abs(i) + 1);
    const p = Hr({
      year: i,
      month: r,
      day: a,
      hour: o === 24 ? 0 : o,
      minute: u,
      second: d,
      millisecond: 0
    });
    let h = +n;
    const v = h % 1e3;
    return h -= v >= 0 ? v : 1e3 + v, (p - h) / (60 * 1e3);
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
let zo = {};
function Jm(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = zo[n];
  return s || (s = new Intl.ListFormat(t, e), zo[n] = s), s;
}
const Xa = /* @__PURE__ */ new Map();
function el(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Xa.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), Xa.set(n, s)), s;
}
const tl = /* @__PURE__ */ new Map();
function Km(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = tl.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), tl.set(n, s)), s;
}
const nl = /* @__PURE__ */ new Map();
function Qm(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = nl.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), nl.set(i, r)), r;
}
let Us = null;
function Xm() {
  return Us || (Us = new Intl.DateTimeFormat().resolvedOptions().locale, Us);
}
const sl = /* @__PURE__ */ new Map();
function Ad(t) {
  let e = sl.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), sl.set(t, e)), e;
}
const il = /* @__PURE__ */ new Map();
function ep(t) {
  let e = il.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...$d, ...e }), il.set(t, e);
  }
  return e;
}
function tp(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = el(t).resolvedOptions(), i = t;
    } catch {
      const o = t.substring(0, n);
      s = el(o).resolvedOptions(), i = o;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function np(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function sp(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = re.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function ip(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const s = re.utc(2016, 11, 13 + n);
    e.push(t(s));
  }
  return e;
}
function Ni(t, e, n, s) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : s(e);
}
function rp(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || Ad(t.locale).numberingSystem === "latn";
}
class ap {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const l = { useGrouping: !1, ...s };
      s.padTo > 0 && (l.minimumIntegerDigits = s.padTo), this.inf = Km(e, l);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Vl(e, 3);
      return Ue(n, this.padTo);
    }
  }
}
class lp {
  constructor(e, n, s) {
    this.opts = s, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), l = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && gn.create(l).valid ? (i = l, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || i, this.dtf = el(n, r);
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
class op {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && Nd() && (this.rtf = Qm(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : $p(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const $d = {
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
    const a = e || Ne.defaultLocale, l = a || (r ? "en-US" : Xm()), o = n || Ne.defaultNumberingSystem, u = s || Ne.defaultOutputCalendar, d = al(i) || Ne.defaultWeekSettings;
    return new Fe(l, o, u, d, a);
  }
  static resetCache() {
    Us = null, Xa.clear(), tl.clear(), nl.clear(), sl.clear(), il.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return Fe.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, l, o] = tp(e);
    this.locale = a, this.numberingSystem = n || l || null, this.outputCalendar = s || o || null, this.weekSettings = i, this.intl = np(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = rp(this)), this.fastNumbersCached;
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
      al(e.weekSettings) || this.weekSettings,
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
    return Ni(this, e, Hd, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (l) => this.dtFormatter(l, i).format() : (l) => this.extract(l, i, "month");
        this.monthsCache[r][e] = sp(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return Ni(this, e, qd, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = ip(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Ni(
      this,
      void 0,
      () => jd,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [re.utc(2016, 11, 13, 9), re.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Ni(this, e, Gd, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [re.utc(-40, 1, 1), re.utc(2017, 1, 1)].map(
        (s) => this.extract(s, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, s) {
    const i = this.dtFormatter(e, n), r = i.formatToParts(), a = r.find((l) => l.type.toLowerCase() === s);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new ap(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new lp(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new op(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Jm(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Ad(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : _d() ? ep(this.locale) : $d;
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
let Sa = null;
class dt extends bi {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Sa === null && (Sa = new dt(0)), Sa;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? dt.utcInstance : new dt(e);
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
        return new dt(Wr(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${ni(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${ni(-this.fixed, "narrow")}`;
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
    return ni(this.fixed, n);
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
class up extends bi {
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
function $n(t, e) {
  if (ae(t) || t === null)
    return e;
  if (t instanceof bi)
    return t;
  if (pp(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Pr.instance : n === "utc" || n === "gmt" ? dt.utcInstance : dt.parseSpecifier(n) || gn.create(t);
  } else return Dn(t) ? dt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new up(t);
}
const Ml = {
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
}, Ho = {
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
}, cp = Ml.hanidec.replace(/[\[|\]]/g, "").split("");
function dp(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search(Ml.hanidec) !== -1)
        e += cp.indexOf(t[n]);
      else
        for (const i in Ho) {
          const [r, a] = Ho[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const rl = /* @__PURE__ */ new Map();
function fp() {
  rl.clear();
}
function Et({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = rl.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), rl.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${Ml[n]}${e}`), s.set(e, i)), i;
}
let Wo = () => Date.now(), Uo = "system", qo = null, jo = null, Go = null, Zo = 60, Yo, Jo = null;
class Ne {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Wo;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Wo = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Uo = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return $n(Uo, Pr.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return qo;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    qo = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return jo;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    jo = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Go;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Go = e;
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
    return Jo;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Jo = al(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Zo;
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
    Zo = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Yo;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Yo = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Fe.resetCache(), gn.resetCache(), re.resetCache(), fp();
  }
}
class $t {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Ld = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Md = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function St(t, e) {
  return new $t(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Dl(t, e, n) {
  const s = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const i = s.getUTCDay();
  return i === 0 ? 7 : i;
}
function Dd(t, e, n) {
  return n + (ki(t) ? Md : Ld)[e - 1];
}
function Od(t, e) {
  const n = ki(t) ? Md : Ld, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function Ol(t, e) {
  return (t - e + 7) % 7 + 1;
}
function mr(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = Dd(s, i, r), l = Ol(Dl(s, i, r), n);
  let o = Math.floor((a - l + 14 - e) / 7), u;
  return o < 1 ? (u = s - 1, o = fi(u, e, n)) : o > fi(s, e, n) ? (u = s + 1, o = 1) : u = s, { weekYear: u, weekNumber: o, weekday: l, ...Ur(t) };
}
function Ko(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = Ol(Dl(s, 1, e), n), l = Is(s);
  let o = i * 7 + r - a - 7 + e, u;
  o < 1 ? (u = s - 1, o += Is(u)) : o > l ? (u = s + 1, o -= Is(s)) : u = s;
  const { month: d, day: f } = Od(u, o);
  return { year: u, month: d, day: f, ...Ur(t) };
}
function Ta(t) {
  const { year: e, month: n, day: s } = t, i = Dd(e, n, s);
  return { year: e, ordinal: i, ...Ur(t) };
}
function Qo(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = Od(e, n);
  return { year: e, month: s, day: i, ...Ur(t) };
}
function Xo(t, e) {
  if (!ae(t.localWeekday) || !ae(t.localWeekNumber) || !ae(t.localWeekYear)) {
    if (!ae(t.weekday) || !ae(t.weekNumber) || !ae(t.weekYear))
      throw new ps(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ae(t.localWeekday) || (t.weekday = t.localWeekday), ae(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), ae(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function hp(t, e = 4, n = 1) {
  const s = zr(t.weekYear), i = Tt(
    t.weekNumber,
    1,
    fi(t.weekYear, e, n)
  ), r = Tt(t.weekday, 1, 7);
  return s ? i ? r ? !1 : St("weekday", t.weekday) : St("week", t.weekNumber) : St("weekYear", t.weekYear);
}
function mp(t) {
  const e = zr(t.year), n = Tt(t.ordinal, 1, Is(t.year));
  return e ? n ? !1 : St("ordinal", t.ordinal) : St("year", t.year);
}
function Bd(t) {
  const e = zr(t.year), n = Tt(t.month, 1, 12), s = Tt(t.day, 1, pr(t.year, t.month));
  return e ? n ? s ? !1 : St("day", t.day) : St("month", t.month) : St("year", t.year);
}
function Vd(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = Tt(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = Tt(n, 0, 59), l = Tt(s, 0, 59), o = Tt(i, 0, 999);
  return r ? a ? l ? o ? !1 : St("millisecond", i) : St("second", s) : St("minute", n) : St("hour", e);
}
function ae(t) {
  return typeof t > "u";
}
function Dn(t) {
  return typeof t == "number";
}
function zr(t) {
  return typeof t == "number" && t % 1 === 0;
}
function pp(t) {
  return typeof t == "string";
}
function gp(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Nd() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function _d() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function vp(t) {
  return Array.isArray(t) ? t : [t];
}
function eu(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function yp(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function xs(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function al(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new tt("Week settings must be an object");
  if (!Tt(t.firstDay, 1, 7) || !Tt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Tt(e, 1, 7)))
    throw new tt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Tt(t, e, n) {
  return zr(t) && t >= e && t <= n;
}
function bp(t, e) {
  return t - e * Math.floor(t / e);
}
function Ue(t, e = 2) {
  const n = t < 0;
  let s;
  return n ? s = "-" + ("" + -t).padStart(e, "0") : s = ("" + t).padStart(e, "0"), s;
}
function An(t) {
  if (!(ae(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function qn(t) {
  if (!(ae(t) || t === null || t === ""))
    return parseFloat(t);
}
function Bl(t) {
  if (!(ae(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Vl(t, e, n = "round") {
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
function ki(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Is(t) {
  return ki(t) ? 366 : 365;
}
function pr(t, e) {
  const n = bp(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? ki(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Hr(t) {
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
function tu(t, e, n) {
  return -Ol(Dl(t, 1, e), n) + e - 1;
}
function fi(t, e = 4, n = 1) {
  const s = tu(t, e, n), i = tu(t + 1, e, n);
  return (Is(t) - s + i) / 7;
}
function ll(t) {
  return t > 99 ? t : t > Ne.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Rd(t, e, n, s = null) {
  const i = new Date(t), r = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  s && (r.timeZone = s);
  const a = { timeZoneName: e, ...r }, l = new Intl.DateTimeFormat(n, a).formatToParts(i).find((o) => o.type.toLowerCase() === "timezonename");
  return l ? l.value : null;
}
function Wr(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + i;
}
function Pd(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new tt(`Invalid unit value ${t}`);
  return e;
}
function gr(t, e) {
  const n = {};
  for (const s in t)
    if (xs(t, s)) {
      const i = t[s];
      if (i == null) continue;
      n[e(s)] = Pd(i);
    }
  return n;
}
function ni(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), s = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${Ue(n, 2)}:${Ue(s, 2)}`;
    case "narrow":
      return `${i}${n}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${i}${Ue(n, 2)}${Ue(s, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Ur(t) {
  return yp(t, ["hour", "minute", "second", "millisecond"]);
}
const kp = [
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
], zd = [
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
], wp = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Hd(t) {
  switch (t) {
    case "narrow":
      return [...wp];
    case "short":
      return [...zd];
    case "long":
      return [...kp];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Wd = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Ud = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Ip = ["M", "T", "W", "T", "F", "S", "S"];
function qd(t) {
  switch (t) {
    case "narrow":
      return [...Ip];
    case "short":
      return [...Ud];
    case "long":
      return [...Wd];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const jd = ["AM", "PM"], Sp = ["Before Christ", "Anno Domini"], Tp = ["BC", "AD"], Cp = ["B", "A"];
function Gd(t) {
  switch (t) {
    case "narrow":
      return [...Cp];
    case "short":
      return [...Tp];
    case "long":
      return [...Sp];
    default:
      return null;
  }
}
function xp(t) {
  return jd[t.hour < 12 ? 0 : 1];
}
function Ep(t, e) {
  return qd(e)[t.weekday - 1];
}
function Fp(t, e) {
  return Hd(e)[t.month - 1];
}
function Ap(t, e) {
  return Gd(e)[t.year < 0 ? 0 : 1];
}
function $p(t, e, n = "always", s = !1) {
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
  const a = Object.is(e, -0) || e < 0, l = Math.abs(e), o = l === 1, u = i[t], d = s ? o ? u[1] : u[2] || u[1] : o ? i[t][0] : t;
  return a ? `${l} ${d} ago` : `in ${l} ${d}`;
}
function nu(t, e) {
  let n = "";
  for (const s of t)
    s.literal ? n += s.val : n += e(s.val);
  return n;
}
const Lp = {
  D: hr,
  DD: cd,
  DDD: dd,
  DDDD: fd,
  t: hd,
  tt: md,
  ttt: pd,
  tttt: gd,
  T: vd,
  TT: yd,
  TTT: bd,
  TTTT: kd,
  f: wd,
  ff: Sd,
  fff: Cd,
  ffff: Ed,
  F: Id,
  FF: Td,
  FFF: xd,
  FFFF: Fd
};
class it {
  static create(e, n = {}) {
    return new it(e, n);
  }
  static parseFormat(e) {
    let n = null, s = "", i = !1;
    const r = [];
    for (let a = 0; a < e.length; a++) {
      const l = e.charAt(a);
      l === "'" ? ((s.length > 0 || i) && r.push({
        literal: i || /^\s+$/.test(s),
        val: s === "" ? "'" : s
      }), n = null, s = "", i = !i) : i || l === n ? s += l : (s.length > 0 && r.push({ literal: /^\s+$/.test(s), val: s }), s = l, n = l);
    }
    return s.length > 0 && r.push({ literal: i || /^\s+$/.test(s), val: s }), r;
  }
  static macroTokenToFormatOpts(e) {
    return Lp[e];
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
      return Ue(e, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), s && (i.signDisplay = s), this.loc.numberFormatter(i).format(e);
  }
  formatDateTimeFromString(e, n) {
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, v) => this.loc.extract(e, h, v), a = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", l = () => s ? xp(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), o = (h, v) => s ? Fp(e, h) : r(v ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, v) => s ? Ep(e, h) : r(
      v ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), d = (h) => {
      const v = it.macroTokenToFormatOpts(h);
      return v ? this.formatWithSystemDefault(e, v) : h;
    }, f = (h) => s ? Ap(e, h) : r({ era: h }, "era"), p = (h) => {
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
          return l();
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
          return o("short", !0);
        case "LLLL":
          return o("long", !0);
        case "LLLLL":
          return o("narrow", !0);
        // months - format
        case "M":
          return i ? r({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return i ? r({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return o("short", !1);
        case "MMMM":
          return o("long", !1);
        case "MMMMM":
          return o("narrow", !1);
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
          return d(h);
      }
    };
    return nu(it.parseFormat(n), p);
  }
  formatDurationFromString(e, n) {
    const s = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, i = (d) => {
      switch (d[0]) {
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
    }, r = (d, f) => (p) => {
      const h = i(p);
      if (h) {
        const v = f.isNegativeDuration && h !== f.largestUnit ? s : 1;
        let b;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? b = "never" : this.opts.signMode === "all" ? b = "always" : b = "auto", this.num(d.get(h) * v, p.length, b);
      } else
        return p;
    }, a = it.parseFormat(n), l = a.reduce(
      (d, { literal: f, val: p }) => f ? d : d.concat(p),
      []
    ), o = e.shiftTo(...l.map(i).filter((d) => d)), u = {
      isNegativeDuration: o < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(o.values)[0]
    };
    return nu(a, r(o, u));
  }
}
const Zd = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function As(...t) {
  const e = t.reduce((n, s) => n + s.source, "");
  return RegExp(`^${e}$`);
}
function $s(...t) {
  return (e) => t.reduce(
    ([n, s, i], r) => {
      const [a, l, o] = r(e, i);
      return [{ ...n, ...a }, l || s, o];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Ls(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, s] of e) {
    const i = n.exec(t);
    if (i)
      return s(i);
  }
  return [null, null];
}
function Yd(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = An(e[n + i]);
    return [s, null, n + i];
  };
}
const Jd = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, Mp = `(?:${Jd.source}?(?:\\[(${Zd.source})\\])?)?`, Nl = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Kd = RegExp(`${Nl.source}${Mp}`), _l = RegExp(`(?:[Tt]${Kd.source})?`), Dp = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Op = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Bp = /(\d{4})-?(\d{3})/, Vp = Yd("weekYear", "weekNumber", "weekDay"), Np = Yd("year", "ordinal"), _p = /(\d{4})-(\d\d)-(\d\d)/, Qd = RegExp(
  `${Nl.source} ?(?:${Jd.source}|(${Zd.source}))?`
), Rp = RegExp(`(?: ${Qd.source})?`);
function Ss(t, e, n) {
  const s = t[e];
  return ae(s) ? n : An(s);
}
function Pp(t, e) {
  return [{
    year: Ss(t, e),
    month: Ss(t, e + 1, 1),
    day: Ss(t, e + 2, 1)
  }, null, e + 3];
}
function Ms(t, e) {
  return [{
    hours: Ss(t, e, 0),
    minutes: Ss(t, e + 1, 0),
    seconds: Ss(t, e + 2, 0),
    milliseconds: Bl(t[e + 3])
  }, null, e + 4];
}
function wi(t, e) {
  const n = !t[e] && !t[e + 1], s = Wr(t[e + 1], t[e + 2]), i = n ? null : dt.instance(s);
  return [{}, i, e + 3];
}
function Ii(t, e) {
  const n = t[e] ? gn.create(t[e]) : null;
  return [{}, n, e + 1];
}
const zp = RegExp(`^T?${Nl.source}$`), Hp = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Wp(t) {
  const [e, n, s, i, r, a, l, o, u] = t, d = e[0] === "-", f = o && o[0] === "-", p = (h, v = !1) => h !== void 0 && (v || h && d) ? -h : h;
  return [
    {
      years: p(qn(n)),
      months: p(qn(s)),
      weeks: p(qn(i)),
      days: p(qn(r)),
      hours: p(qn(a)),
      minutes: p(qn(l)),
      seconds: p(qn(o), o === "-0"),
      milliseconds: p(Bl(u), f)
    }
  ];
}
const Up = {
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
function Rl(t, e, n, s, i, r, a) {
  const l = {
    year: e.length === 2 ? ll(An(e)) : An(e),
    month: zd.indexOf(n) + 1,
    day: An(s),
    hour: An(i),
    minute: An(r)
  };
  return a && (l.second = An(a)), t && (l.weekday = t.length > 3 ? Wd.indexOf(t) + 1 : Ud.indexOf(t) + 1), l;
}
const qp = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function jp(t) {
  const [
    ,
    e,
    n,
    s,
    i,
    r,
    a,
    l,
    o,
    u,
    d,
    f
  ] = t, p = Rl(e, i, s, n, r, a, l);
  let h;
  return o ? h = Up[o] : u ? h = 0 : h = Wr(d, f), [p, new dt(h)];
}
function Gp(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Zp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Yp = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Jp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function su(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [Rl(e, i, s, n, r, a, l), dt.utcInstance];
}
function Kp(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [Rl(e, l, n, s, i, r, a), dt.utcInstance];
}
const Qp = As(Dp, _l), Xp = As(Op, _l), e0 = As(Bp, _l), t0 = As(Kd), Xd = $s(
  Pp,
  Ms,
  wi,
  Ii
), n0 = $s(
  Vp,
  Ms,
  wi,
  Ii
), s0 = $s(
  Np,
  Ms,
  wi,
  Ii
), i0 = $s(
  Ms,
  wi,
  Ii
);
function r0(t) {
  return Ls(
    t,
    [Qp, Xd],
    [Xp, n0],
    [e0, s0],
    [t0, i0]
  );
}
function a0(t) {
  return Ls(Gp(t), [qp, jp]);
}
function l0(t) {
  return Ls(
    t,
    [Zp, su],
    [Yp, su],
    [Jp, Kp]
  );
}
function o0(t) {
  return Ls(t, [Hp, Wp]);
}
const u0 = $s(Ms);
function c0(t) {
  return Ls(t, [zp, u0]);
}
const d0 = As(_p, Rp), f0 = As(Qd), h0 = $s(
  Ms,
  wi,
  Ii
);
function m0(t) {
  return Ls(
    t,
    [d0, Xd],
    [f0, h0]
  );
}
const iu = "Invalid Duration", ef = {
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
}, p0 = {
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
  ...ef
}, wt = 146097 / 400, cs = 146097 / 4800, g0 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: wt / 7,
    days: wt,
    hours: wt * 24,
    minutes: wt * 24 * 60,
    seconds: wt * 24 * 60 * 60,
    milliseconds: wt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: wt / 28,
    days: wt / 4,
    hours: wt * 24 / 4,
    minutes: wt * 24 * 60 / 4,
    seconds: wt * 24 * 60 * 60 / 4,
    milliseconds: wt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: cs / 7,
    days: cs,
    hours: cs * 24,
    minutes: cs * 24 * 60,
    seconds: cs * 24 * 60 * 60,
    milliseconds: cs * 24 * 60 * 60 * 1e3
  },
  ...ef
}, Qn = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], v0 = Qn.slice(0).reverse();
function tn(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Se(s);
}
function tf(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of v0.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function ru(t, e) {
  const n = tf(t, e) < 0 ? -1 : 1;
  Qn.reduceRight((s, i) => {
    if (ae(e[i]))
      return s;
    if (s) {
      const r = e[s] * n, a = t[i][s], l = Math.floor(r / a);
      e[i] += l * n, e[s] -= l * a * n;
    }
    return i;
  }, null), Qn.reduce((s, i) => {
    if (ae(e[i]))
      return s;
    if (s) {
      const r = e[s] % 1;
      e[s] -= r, e[i] += r * t[s][i];
    }
    return i;
  }, null);
}
function au(t) {
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
    let s = n ? g0 : p0;
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
      throw new tt(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new Se({
      values: gr(e, Se.normalizeUnit),
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
    if (Dn(e))
      return Se.fromMillis(e);
    if (Se.isDuration(e))
      return e;
    if (typeof e == "object")
      return Se.fromObject(e);
    throw new tt(
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
    const [s] = o0(e);
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
    const [s] = c0(e);
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
      throw new tt("need to specify a reason the Duration is invalid");
    const s = e instanceof $t ? e : new $t(e, n);
    if (Ne.throwOnInvalid)
      throw new Wm(s);
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
    if (!n) throw new ud(e);
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
    return this.isValid ? it.create(this.loc, s).formatDurationFromString(this, e) : iu;
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
    if (!this.isValid) return iu;
    const n = e.showZeros !== !1, s = Qn.map((i) => {
      const r = this.values[i];
      return ae(r) || r === 0 && !n ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: i.slice(0, -1) }).format(r);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Vl(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, re.fromMillis(n, { zone: "UTC" }).toISOTime(e));
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
    return this.isValid ? tf(this.matrix, this.values) : NaN;
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
    for (const i of Qn)
      (xs(n.values, i) || xs(this.values, i)) && (s[i] = n.get(i) + this.get(i));
    return tn(this, { values: s }, !0);
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
      n[s] = Pd(e(this.values[s], s));
    return tn(this, { values: n }, !0);
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
    const n = { ...this.values, ...gr(e, Se.normalizeUnit) };
    return tn(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: s, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: s };
    return tn(this, a);
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
    return ru(this.matrix, e), tn(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = au(this.normalize().shiftToAll().toObject());
    return tn(this, { values: e }, !0);
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
    for (const a of Qn)
      if (e.indexOf(a) >= 0) {
        r = a;
        let l = 0;
        for (const u in s)
          l += this.matrix[u][a] * s[u], s[u] = 0;
        Dn(i[a]) && (l += i[a]);
        const o = Math.trunc(l);
        n[a] = o, s[a] = (l * 1e3 - o * 1e3) / 1e3;
      } else Dn(i[a]) && (s[a] = i[a]);
    for (const a in s)
      s[a] !== 0 && (n[r] += a === r ? s[a] : s[a] / this.matrix[r][a]);
    return ru(this.matrix, n), tn(this, { values: n }, !0);
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
    return tn(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = au(this.values);
    return tn(this, { values: e }, !0);
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
    for (const s of Qn)
      if (!n(this.values[s], e.values[s]))
        return !1;
    return !0;
  }
}
const ds = "Invalid Interval";
function y0(t, e) {
  return !t || !t.isValid ? Ve.invalid("missing or invalid start") : !e || !e.isValid ? Ve.invalid("missing or invalid end") : e < t ? Ve.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class Ve {
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
      throw new tt("need to specify a reason the Interval is invalid");
    const s = e instanceof $t ? e : new $t(e, n);
    if (Ne.throwOnInvalid)
      throw new Hm(s);
    return new Ve({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = Rs(e), i = Rs(n), r = y0(s, i);
    return r ?? new Ve({
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
    const s = Se.fromDurationLike(n), i = Rs(e);
    return Ve.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = Se.fromDurationLike(n), i = Rs(e);
    return Ve.fromDateTimes(i.minus(s), i);
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
        r = re.fromISO(s, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let l, o;
      try {
        l = re.fromISO(i, n), o = l.isValid;
      } catch {
        o = !1;
      }
      if (a && o)
        return Ve.fromDateTimes(r, l);
      if (a) {
        const u = Se.fromISO(i, n);
        if (u.isValid)
          return Ve.after(r, u);
      } else if (o) {
        const u = Se.fromISO(s, n);
        if (u.isValid)
          return Ve.before(l, u);
      }
    }
    return Ve.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    return this.isValid ? Ve.fromDateTimes(e || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const n = e.map(Rs).filter((a) => this.contains(a)).sort((a, l) => a.toMillis() - l.toMillis()), s = [];
    let { s: i } = this, r = 0;
    for (; i < this.e; ) {
      const a = n[r] || this.e, l = +a > +this.e ? this.e : a;
      s.push(Ve.fromDateTimes(i, l)), i = l, r += 1;
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
      const l = this.start.plus(n.mapUnits((o) => o * i));
      r = +l > +this.e ? this.e : l, a.push(Ve.fromDateTimes(s, r)), s = r, i += 1;
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
    return n >= s ? null : Ve.fromDateTimes(n, s);
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
    return Ve.fromDateTimes(n, s);
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
    const i = [], r = e.map((o) => [
      { time: o.s, type: "s" },
      { time: o.e, type: "e" }
    ]), a = Array.prototype.concat(...r), l = a.sort((o, u) => o.time - u.time);
    for (const o of l)
      s += o.type === "s" ? 1 : -1, s === 1 ? n = o.time : (n && +n != +o.time && i.push(Ve.fromDateTimes(n, o.time)), n = null);
    return Ve.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return Ve.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : ds;
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
  toLocaleString(e = hr, n = {}) {
    return this.isValid ? it.create(this.s.loc.clone(n), e).formatInterval(this) : ds;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : ds;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : ds;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : ds;
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
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : ds;
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
    return Ve.fromDateTimes(e(this.s), e(this.e));
  }
}
class _i {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = Ne.defaultZone) {
    const n = re.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return gn.isValidZone(e);
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
    return $n(e, Ne.defaultZone);
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
    return { relative: Nd(), localeWeek: _d() };
  }
}
function lu(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(Se.fromMillis(s).as("days"));
}
function b0(t, e, n) {
  const s = [
    ["years", (o, u) => u.year - o.year],
    ["quarters", (o, u) => u.quarter - o.quarter + (u.year - o.year) * 4],
    ["months", (o, u) => u.month - o.month + (u.year - o.year) * 12],
    [
      "weeks",
      (o, u) => {
        const d = lu(o, u);
        return (d - d % 7) / 7;
      }
    ],
    ["days", lu]
  ], i = {}, r = t;
  let a, l;
  for (const [o, u] of s)
    n.indexOf(o) >= 0 && (a = o, i[o] = u(t, e), l = r.plus(i), l > e ? (i[o]--, t = r.plus(i), t > e && (l = t, i[o]--, t = r.plus(i))) : t = l);
  return [t, i, l, a];
}
function k0(t, e, n, s) {
  let [i, r, a, l] = b0(t, e, n);
  const o = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [l]: 1 })), a !== i && (r[l] = (r[l] || 0) + o / (a - i)));
  const d = Se.fromObject(r, s);
  return u.length > 0 ? Se.fromMillis(o, s).shiftTo(...u).plus(d) : d;
}
const w0 = "missing Intl.DateTimeFormat.formatToParts support";
function Ce(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(dp(n)) };
}
const I0 = " ", nf = `[ ${I0}]`, sf = new RegExp(nf, "g");
function S0(t) {
  return t.replace(/\./g, "\\.?").replace(sf, nf);
}
function ou(t) {
  return t.replace(/\./g, "").replace(sf, " ").toLowerCase();
}
function Ft(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(S0).join("|")),
    deser: ([n]) => t.findIndex((s) => ou(n) === ou(s)) + e
  };
}
function uu(t, e) {
  return { regex: t, deser: ([, n, s]) => Wr(n, s), groups: e };
}
function Ri(t) {
  return { regex: t, deser: ([e]) => e };
}
function T0(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function C0(t, e) {
  const n = Et(e), s = Et(e, "{2}"), i = Et(e, "{3}"), r = Et(e, "{4}"), a = Et(e, "{6}"), l = Et(e, "{1,2}"), o = Et(e, "{1,3}"), u = Et(e, "{1,6}"), d = Et(e, "{1,9}"), f = Et(e, "{2,4}"), p = Et(e, "{4,6}"), h = (A) => ({ regex: RegExp(T0(A.val)), deser: ([S]) => S, literal: !0 }), b = ((A) => {
    if (t.literal)
      return h(A);
    switch (A.val) {
      // era
      case "G":
        return Ft(e.eras("short"), 0);
      case "GG":
        return Ft(e.eras("long"), 0);
      // years
      case "y":
        return Ce(u);
      case "yy":
        return Ce(f, ll);
      case "yyyy":
        return Ce(r);
      case "yyyyy":
        return Ce(p);
      case "yyyyyy":
        return Ce(a);
      // months
      case "M":
        return Ce(l);
      case "MM":
        return Ce(s);
      case "MMM":
        return Ft(e.months("short", !0), 1);
      case "MMMM":
        return Ft(e.months("long", !0), 1);
      case "L":
        return Ce(l);
      case "LL":
        return Ce(s);
      case "LLL":
        return Ft(e.months("short", !1), 1);
      case "LLLL":
        return Ft(e.months("long", !1), 1);
      // dates
      case "d":
        return Ce(l);
      case "dd":
        return Ce(s);
      // ordinals
      case "o":
        return Ce(o);
      case "ooo":
        return Ce(i);
      // time
      case "HH":
        return Ce(s);
      case "H":
        return Ce(l);
      case "hh":
        return Ce(s);
      case "h":
        return Ce(l);
      case "mm":
        return Ce(s);
      case "m":
        return Ce(l);
      case "q":
        return Ce(l);
      case "qq":
        return Ce(s);
      case "s":
        return Ce(l);
      case "ss":
        return Ce(s);
      case "S":
        return Ce(o);
      case "SSS":
        return Ce(i);
      case "u":
        return Ri(d);
      case "uu":
        return Ri(l);
      case "uuu":
        return Ce(n);
      // meridiem
      case "a":
        return Ft(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Ce(r);
      case "kk":
        return Ce(f, ll);
      // weekNumber (W)
      case "W":
        return Ce(l);
      case "WW":
        return Ce(s);
      // weekdays
      case "E":
      case "c":
        return Ce(n);
      case "EEE":
        return Ft(e.weekdays("short", !1), 1);
      case "EEEE":
        return Ft(e.weekdays("long", !1), 1);
      case "ccc":
        return Ft(e.weekdays("short", !0), 1);
      case "cccc":
        return Ft(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return uu(new RegExp(`([+-]${l.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return uu(new RegExp(`([+-]${l.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return Ri(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return Ri(/[^\S\n\r]/);
      default:
        return h(A);
    }
  })(t) || {
    invalidReason: w0
  };
  return b.token = t, b;
}
const x0 = {
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
function E0(t, e, n) {
  const { type: s, value: i } = t;
  if (s === "literal") {
    const o = /^\s+$/.test(i);
    return {
      literal: !o,
      val: o ? " " : i
    };
  }
  const r = e[s];
  let a = s;
  s === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = n.hour12 ? "hour12" : "hour24");
  let l = x0[a];
  if (typeof l == "object" && (l = l[r]), l)
    return {
      literal: !1,
      val: l
    };
}
function F0(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function A0(t, e, n) {
  const s = t.match(e);
  if (s) {
    const i = {};
    let r = 1;
    for (const a in n)
      if (xs(n, a)) {
        const l = n[a], o = l.groups ? l.groups + 1 : 1;
        !l.literal && l.token && (i[l.token.val[0]] = l.deser(s.slice(r, r + o))), r += o;
      }
    return [s, i];
  } else
    return [s, {}];
}
function $0(t) {
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
  return ae(t.z) || (n = gn.create(t.z)), ae(t.Z) || (n || (n = new dt(t.Z)), s = t.Z), ae(t.q) || (t.M = (t.q - 1) * 3 + 1), ae(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), ae(t.u) || (t.S = Bl(t.u)), [Object.keys(t).reduce((r, a) => {
    const l = e(a);
    return l && (r[l] = t[a]), r;
  }, {}), n, s];
}
let Ca = null;
function L0() {
  return Ca || (Ca = re.fromMillis(1555555555555)), Ca;
}
function M0(t, e) {
  if (t.literal)
    return t;
  const n = it.macroTokenToFormatOpts(t.val), s = of(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function rf(t, e) {
  return Array.prototype.concat(...t.map((n) => M0(n, e)));
}
class af {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = rf(it.parseFormat(n), e), this.units = this.tokens.map((s) => C0(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = F0(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = A0(e, this.regex, this.handlers), [i, r, a] = s ? $0(s) : [null, null, void 0];
      if (xs(s, "a") && xs(s, "H"))
        throw new ps(
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
function lf(t, e, n) {
  return new af(t, n).explainFromTokens(e);
}
function D0(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = lf(t, e, n);
  return [s, i, r, a];
}
function of(t, e) {
  if (!t)
    return null;
  const s = it.create(e, t).dtFormatter(L0()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => E0(a, t, r));
}
const xa = "Invalid DateTime", cu = 864e13;
function qs(t) {
  return new $t("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Ea(t) {
  return t.weekData === null && (t.weekData = mr(t.c)), t.weekData;
}
function Fa(t) {
  return t.localWeekData === null && (t.localWeekData = mr(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function jn(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new re({ ...n, ...e, old: n });
}
function uf(t, e, n) {
  let s = t - e * 60 * 1e3;
  const i = n.offset(s);
  if (e === i)
    return [s, e];
  s -= (i - e) * 60 * 1e3;
  const r = n.offset(s);
  return i === r ? [s, i] : [t - Math.min(i, r) * 60 * 1e3, Math.max(i, r)];
}
function Pi(t, e) {
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
function Yi(t, e, n) {
  return uf(Hr(t), e, n);
}
function du(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, pr(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
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
  }).as("milliseconds"), l = Hr(r);
  let [o, u] = uf(l, n, t.zone);
  return a !== 0 && (o += a, u = t.zone.offset(o)), { ts: o, o: u };
}
function fs(t, e, n, s, i, r) {
  const { setZone: a, zone: l } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const o = e || l, u = re.fromObject(t, {
      ...n,
      zone: o,
      specificOffset: r
    });
    return a ? u : u.setZone(l);
  } else
    return re.invalid(
      new $t("unparsable", `the input "${i}" can't be parsed as ${s}`)
    );
}
function zi(t, e, n = !0) {
  return t.isValid ? it.create(Fe.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Aa(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += Ue(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += Ue(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += Ue(t.c.month), n === "month") return i;
  return i += Ue(t.c.day), i;
}
function fu(t, e, n, s, i, r, a) {
  let l = !n || t.c.millisecond !== 0 || t.c.second !== 0, o = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (o += Ue(t.c.hour), a === "hour") break;
      if (e) {
        if (o += ":", o += Ue(t.c.minute), a === "minute") break;
        l && (o += ":", o += Ue(t.c.second));
      } else {
        if (o += Ue(t.c.minute), a === "minute") break;
        l && (o += Ue(t.c.second));
      }
      if (a === "second") break;
      l && (!s || t.c.millisecond !== 0) && (o += ".", o += Ue(t.c.millisecond, 3));
  }
  return i && (t.isOffsetFixed && t.offset === 0 && !r ? o += "Z" : t.o < 0 ? (o += "-", o += Ue(Math.trunc(-t.o / 60)), o += ":", o += Ue(Math.trunc(-t.o % 60))) : (o += "+", o += Ue(Math.trunc(t.o / 60)), o += ":", o += Ue(Math.trunc(t.o % 60)))), r && (o += "[" + t.zone.ianaName + "]"), o;
}
const cf = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, O0 = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, B0 = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ji = ["year", "month", "day", "hour", "minute", "second", "millisecond"], V0 = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], N0 = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ki(t) {
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
  if (!e) throw new ud(t);
  return e;
}
function hu(t) {
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
      return Ki(t);
  }
}
function _0(t) {
  if (js === void 0 && (js = Ne.now()), t.type !== "iana")
    return t.offset(js);
  const e = t.name;
  let n = ol.get(e);
  return n === void 0 && (n = t.offset(js), ol.set(e, n)), n;
}
function mu(t, e) {
  const n = $n(e.zone, Ne.defaultZone);
  if (!n.isValid)
    return re.invalid(qs(n));
  const s = Fe.fromObject(e);
  let i, r;
  if (ae(t.year))
    i = Ne.now();
  else {
    for (const o of Ji)
      ae(t[o]) && (t[o] = cf[o]);
    const a = Bd(t) || Vd(t);
    if (a)
      return re.invalid(a);
    const l = _0(n);
    [i, r] = Yi(t, l, n);
  }
  return new re({ ts: i, zone: n, loc: s, o: r });
}
function pu(t, e, n) {
  const s = ae(n.round) ? !0 : n.round, i = ae(n.rounding) ? "trunc" : n.rounding, r = (l, o) => (l = Vl(l, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(l, o)), a = (l) => n.calendary ? e.hasSame(t, l) ? 0 : e.startOf(l).diff(t.startOf(l), l).get(l) : e.diff(t, l).get(l);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const l of n.units) {
    const o = a(l);
    if (Math.abs(o) >= 1)
      return r(o, l);
  }
  return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function gu(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let js;
const ol = /* @__PURE__ */ new Map();
class re {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || Ne.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new $t("invalid input") : null) || (n.isValid ? null : qs(n));
    this.ts = ae(e.ts) ? Ne.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const l = Dn(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Pi(this.ts, l), s = Number.isNaN(i.year) ? new $t("invalid input") : null, i = s ? null : i, r = s ? null : l;
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
    return new re({});
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
    const [e, n] = gu(arguments), [s, i, r, a, l, o, u] = n;
    return mu({ year: s, month: i, day: r, hour: a, minute: l, second: o, millisecond: u }, e);
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
    const [e, n] = gu(arguments), [s, i, r, a, l, o, u] = n;
    return e.zone = dt.utcInstance, mu({ year: s, month: i, day: r, hour: a, minute: l, second: o, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = gp(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return re.invalid("invalid input");
    const i = $n(n.zone, Ne.defaultZone);
    return i.isValid ? new re({
      ts: s,
      zone: i,
      loc: Fe.fromObject(n)
    }) : re.invalid(qs(i));
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
    if (Dn(e))
      return e < -cu || e > cu ? re.invalid("Timestamp out of range") : new re({
        ts: e,
        zone: $n(n.zone, Ne.defaultZone),
        loc: Fe.fromObject(n)
      });
    throw new tt(
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
    if (Dn(e))
      return new re({
        ts: e * 1e3,
        zone: $n(n.zone, Ne.defaultZone),
        loc: Fe.fromObject(n)
      });
    throw new tt("fromSeconds requires a numerical input");
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
    const s = $n(n.zone, Ne.defaultZone);
    if (!s.isValid)
      return re.invalid(qs(s));
    const i = Fe.fromObject(n), r = gr(e, hu), { minDaysInFirstWeek: a, startOfWeek: l } = Xo(r, i), o = Ne.now(), u = ae(n.specificOffset) ? s.offset(o) : n.specificOffset, d = !ae(r.ordinal), f = !ae(r.year), p = !ae(r.month) || !ae(r.day), h = f || p, v = r.weekYear || r.weekNumber;
    if ((h || d) && v)
      throw new ps(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (p && d)
      throw new ps("Can't mix ordinal dates with month/day");
    const b = v || r.weekday && !h;
    let A, S, P = Pi(o, u);
    b ? (A = V0, S = O0, P = mr(P, a, l)) : d ? (A = N0, S = B0, P = Ta(P)) : (A = Ji, S = cf);
    let C = !1;
    for (const Y of A) {
      const X = r[Y];
      ae(X) ? C ? r[Y] = S[Y] : r[Y] = P[Y] : C = !0;
    }
    const z = b ? hp(r, a, l) : d ? mp(r) : Bd(r), I = z || Vd(r);
    if (I)
      return re.invalid(I);
    const $ = b ? Ko(r, a, l) : d ? Qo(r) : r, [Z, O] = Yi($, u, s), D = new re({
      ts: Z,
      zone: s,
      o: O,
      loc: i
    });
    return r.weekday && h && e.weekday !== D.weekday ? re.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${D.toISO()}`
    ) : D.isValid ? D : re.invalid(D.invalid);
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
    const [s, i] = r0(e);
    return fs(s, i, n, "ISO 8601", e);
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
    const [s, i] = a0(e);
    return fs(s, i, n, "RFC 2822", e);
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
    const [s, i] = l0(e);
    return fs(s, i, n, "HTTP", n);
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
    if (ae(e) || ae(n))
      throw new tt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: r = null } = s, a = Fe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [l, o, u, d] = D0(a, e, n);
    return d ? re.invalid(d) : fs(l, o, s, `format ${n}`, e, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, s = {}) {
    return re.fromFormat(e, n, s);
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
    const [s, i] = m0(e);
    return fs(s, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new tt("need to specify a reason the DateTime is invalid");
    const s = e instanceof $t ? e : new $t(e, n);
    if (Ne.throwOnInvalid)
      throw new zm(s);
    return new re({ invalid: s });
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
    const s = of(e, Fe.fromObject(n));
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
    return rf(it.parseFormat(e), Fe.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    js = void 0, ol.clear();
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
    return this.isValid ? Ea(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Ea(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Ea(this).weekday : NaN;
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
    return this.isValid ? Fa(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Fa(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Fa(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Ta(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? _i.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? _i.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? _i.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? _i.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, s = Hr(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), l = this.zone.offset(s - r * n);
    if (a === l)
      return [this];
    const o = s - a * n, u = s - l * n, d = Pi(o, a), f = Pi(u, l);
    return d.hour === f.hour && d.minute === f.minute && d.second === f.second && d.millisecond === f.millisecond ? [jn(this, { ts: o }), jn(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return ki(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return pr(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Is(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? fi(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? fi(
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
    const { locale: n, numberingSystem: s, calendar: i } = it.create(
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
    return this.setZone(dt.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Ne.defaultZone);
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
    if (e = $n(e, Ne.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || s) {
        const r = e.offset(this.ts), a = this.toObject();
        [i] = Yi(a, r, e);
      }
      return jn(this, { ts: i, zone: e });
    } else
      return re.invalid(qs(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: s } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: s });
    return jn(this, { loc: i });
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
    const n = gr(e, hu), { minDaysInFirstWeek: s, startOfWeek: i } = Xo(n, this.loc), r = !ae(n.weekYear) || !ae(n.weekNumber) || !ae(n.weekday), a = !ae(n.ordinal), l = !ae(n.year), o = !ae(n.month) || !ae(n.day), u = l || o, d = n.weekYear || n.weekNumber;
    if ((u || a) && d)
      throw new ps(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && a)
      throw new ps("Can't mix ordinal dates with month/day");
    let f;
    r ? f = Ko(
      { ...mr(this.c, s, i), ...n },
      s,
      i
    ) : ae(n.ordinal) ? (f = { ...this.toObject(), ...n }, ae(n.day) && (f.day = Math.min(pr(f.year, f.month), f.day))) : f = Qo({ ...Ta(this.c), ...n });
    const [p, h] = Yi(f, this.o, this.zone);
    return jn(this, { ts: p, o: h });
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
    return jn(this, du(this, n));
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
    return jn(this, du(this, n));
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
    return this.isValid ? it.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : xa;
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
  toLocaleString(e = hr, n = {}) {
    return this.isValid ? it.create(this.loc.clone(n), e).formatDateTime(this) : xa;
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
    return this.isValid ? it.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    a = Ki(a);
    const l = e === "extended";
    let o = Aa(this, l, a);
    return Ji.indexOf(a) >= 3 && (o += "T"), o += fu(
      this,
      l,
      n,
      s,
      i,
      r,
      a
    ), o;
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
    return this.isValid ? Aa(this, e === "extended", Ki(n)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return zi(this, "kkkk-'W'WW-c");
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
    precision: l = "milliseconds"
  } = {}) {
    return this.isValid ? (l = Ki(l), (i && Ji.indexOf(l) >= 3 ? "T" : "") + fu(
      this,
      a === "extended",
      n,
      e,
      s,
      r,
      l
    )) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return zi(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return zi(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? Aa(this, !0) : null;
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
    return (n || e) && (s && (i += " "), n ? i += "z" : e && (i += "ZZ")), zi(this, i, !0);
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
    return this.isValid ? this.toISO() : xa;
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
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = vp(n).map(Se.normalizeUnit), a = e.valueOf() > this.valueOf(), l = a ? this : e, o = a ? e : this, u = k0(l, o, r, i);
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
    return this.diff(re.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? Ve.fromDateTimes(this, e) : this;
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
    const n = e.base || re.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, r = void 0), pu(n, this.plus(s), {
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
    return this.isValid ? pu(e.base || re.fromObject({}, { zone: this.zone }), this, {
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
    if (!e.every(re.isDateTime))
      throw new tt("min requires all arguments be DateTimes");
    return eu(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(re.isDateTime))
      throw new tt("max requires all arguments be DateTimes");
    return eu(e, (n) => n.valueOf(), Math.max);
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
    return lf(a, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, s = {}) {
    return re.fromFormatExplain(e, n, s);
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
    return new af(r, e);
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
    if (ae(e) || ae(n))
      throw new tt(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: r = null } = s, a = Fe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new tt(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: l, zone: o, specificOffset: u, invalidReason: d } = n.explainFromTokens(e);
    return d ? re.invalid(d) : fs(
      l,
      o,
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
    return hr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return cd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Um;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return dd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return fd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return hd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return md;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return pd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return gd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return vd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return yd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return bd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return kd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return wd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Id;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Sd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Td;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return qm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Cd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return xd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Ed;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Fd;
  }
}
function Rs(t) {
  if (re.isDateTime(t))
    return t;
  if (t && t.valueOf && Dn(t.valueOf()))
    return re.fromJSDate(t);
  if (t && typeof t == "object")
    return re.fromObject(t);
  throw new tt(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
function hi(t) {
  return globalThis.document ? t instanceof HTMLElement : !1;
}
function R0(t) {
  let e = [];
  for (let n of t) {
    if (n.type === me && Array.isArray(n.children)) {
      e.push(...n.children);
      continue;
    }
    e.push(n);
  }
  return e;
}
var P0 = ["a:not([disabled])", "button:not([disabled])", "input[type=checkbox]:not([disabled])", "input[type=radio]:not([disabled])", "input[type=text]:not([disabled])", '[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");
function ts(t) {
  return Array.from(t.querySelectorAll(P0)).filter(hi).filter((e) => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement);
}
function z0(t, e, n) {
  let s = ts(t), i = s.indexOf(e);
  if (i === -1) return null;
  let r = U0(s);
  H0(r, i, n);
  let a = W0(i, n, r, s);
  return a || ((n === "up" || n === "left") && (a = s[i - 1]), (n === "down" || n === "right") && (a = s[i + 1])), a;
}
function H0(t, e, n) {
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
function W0(t, e, n, s) {
  let i = n[t], r = [];
  switch (e) {
    case "up":
      r = n.map((l, o) => o === t || l.top + l.height > i.top ? Number.MAX_SAFE_INTEGER : l.distance);
      break;
    case "down":
      r = n.map((l, o) => o === t || l.top < i.top + i.height ? Number.MAX_SAFE_INTEGER : l.distance);
      break;
    case "left":
      r = n.map((l, o) => o === t || l.left + l.width > i.left ? Number.MAX_SAFE_INTEGER : l.distance);
      break;
    case "right":
      r = n.map((l, o) => o === t || l.left < i.left + i.width ? Number.MAX_SAFE_INTEGER : l.distance);
      break;
  }
  let a = r.indexOf(Math.min(...r));
  return r[a] !== Number.MAX_SAFE_INTEGER ? s[a] : null;
}
function U0(t) {
  return t.map((e) => e.getBoundingClientRect()).map((e) => ({ height: e.height, width: e.width, top: e.top, left: e.left, right: e.right, bottom: e.bottom, center: { x: e.left + e.width / 2, y: e.top + e.height / 2 }, distance: 0 }));
}
function q0(t, e, n = void 0) {
  let s = ts(t), i = n || document.activeElement;
  if (!i || !hi(i)) return s[0] || void 0;
  let r = s.indexOf(i);
  return s[r + e] || void 0;
}
function ft(t) {
  let e = c(t);
  return hi(e) ? e : e?.$el;
}
function j0(...t) {
  console.warn("[Flux]", ...t);
}
function $a(t, e, n = !1) {
  let s = G0(t), i = e.compareDocumentPosition(t), r;
  i && Node.DOCUMENT_POSITION_PRECEDING || n ? r = s.firstChild() : r = s.lastChild(), (r !== null ? r : t).focus();
}
function G0(t) {
  return document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
}
class Z0 {
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
var vu = new Z0(), Y0 = !globalThis.document;
function yu(t, e, n) {
  let s = ne([]);
  yn(() => {
    document.addEventListener("pointerdown", i);
  }), rs(() => {
    document.removeEventListener("pointerdown", i);
  });
  function i(r) {
    c(e) && !c(s).some((a) => a.contains(r.target)) && n(r);
  }
  Mr(() => {
    let r = [];
    (Array.isArray(t) ? t : [t]).forEach((a) => {
      let l = ft(a);
      l && r.push(l);
    }), s.value = r;
  });
}
function df(t, e, n) {
  n ??= { attributes: !0 };
  let s, i = Oe(() => ft(t), (l) => {
    r(), l && (s = new MutationObserver(e), s.observe(l, n));
  }, { immediate: !0 });
  function r() {
    s && (s.disconnect(), s = void 0);
  }
  function a() {
    r(), i();
  }
  Nu(a);
}
var J0 = 0;
function K0(t = !1) {
  let e = ne(`focus-trap-${++J0}`), n = ne(!1);
  return yn(() => vu.add(c(e), (s) => n.value = s, t)), rs(() => vu.remove(c(e))), n;
}
function Q0(t, e) {
  Oe(t, (n, s, i) => {
    if (!ft(t) || c(e)) return;
    let r = document.activeElement;
    i(() => {
      requestAnimationFrame(() => r?.focus());
    });
  });
}
function X0(t, e = {}) {
  if (Y0) return;
  let { disable: n = ne(!1), disableReturn: s = ne(!1), attachTo: i = null } = e, r = K0(!n);
  Q0(t, s), Oe(t, (a, l, o) => {
    let u = ft(t), d = i || document;
    r.value && u && document.activeElement && !u.contains(document.activeElement) && !u.querySelector("[autofocus]") && $a(u, document.activeElement, !0);
    function f(h) {
      if (!r.value || !u) return;
      let v = h.target || document.body;
      u.contains(v) || (h.preventDefault(), h.stopImmediatePropagation(), $a(u, v));
    }
    function p(h) {
      if (!r.value || !u) return;
      (!h.relatedTarget || h.relatedTarget === document.body) && (h.preventDefault(), u.focus());
      let v = h.target || document.body;
      u.contains(v) || $a(u, v);
    }
    if (d.addEventListener("focusin", f, { capture: !0 }), d.addEventListener("focusout", p, { capture: !0 }), u) {
      let h = ts(u), v = h.findIndex((S) => S.classList.contains("is-active")), b = h.findIndex((S) => !S.hasAttribute("aria-disabled")), A = h[0];
      v > -1 && (A = h[v]), b > -1 && (A = h[b]), A && A.focus();
    }
    o(() => {
      d.removeEventListener("focusin", f), d.removeEventListener("focusout", p);
    });
  }, { immediate: !0 }), Oe(() => n, () => {
    let a = ft(t);
    if (r.value = !n, n || !a) return;
    let l = ts(a);
    l.includes(document.activeElement) || l[0]?.focus();
  }, { immediate: !0 });
}
function e1(t, { cycle: e = !0, direction: n = "bidirectional" } = {}) {
  df(t, () => i(s(), !1));
  function s() {
    let a = ft(t), l = ts(a), o = l.findIndex((d) => d.classList.contains("is-active")), u = l.findIndex((d) => !d.hasAttribute("aria-disabled"));
    return o > -1 ? o : u > -1 ? u : 0;
  }
  function i(a, l = !0) {
    let o = ft(t), u = ts(o);
    u.forEach((d, f) => d.tabIndex = f === a ? 0 : -1), l && u[a]?.focus();
  }
  function r(a) {
    let l = ft(t), o = ts(l);
    if (!["Enter", " "].includes(a.key))
      switch (n) {
        case "bidirectional":
          t1(a, l, o, i);
          break;
        case "horizontal":
        case "vertical":
          n1(a, l, e, n, o, i);
          break;
      }
  }
  Oe(t, (a, l, o) => {
    let u = ft(t);
    u && (u.addEventListener("keydown", r), i(s(), !1), o(() => u.removeEventListener("keydown", r)));
  }, { immediate: !0 });
}
function t1(t, e, n, s) {
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
  let r = z0(e, document.activeElement, i);
  r && s(n.indexOf(r)), t.preventDefault();
}
function n1(t, e, n, s, i, r) {
  let a;
  if (t.key === (s === "horizontal" ? "ArrowLeft" : "ArrowUp")) a = -1;
  else if (t.key === (s === "horizontal" ? "ArrowRight" : "ArrowDown")) a = 1;
  else return;
  let l = q0(e, a);
  l ? r(i.indexOf(l)) : n && r(a === 1 ? 0 : i.length - 1), t.preventDefault();
}
const s1 = "basePane", i1 = "basePaneLoader", r1 = "basePaneStructure basePane", a1 = "basePaneElement", l1 = "form", o1 = "paneHeader";
var qr = { basePane: s1, basePaneLoader: i1, basePaneStructure: r1, basePaneElement: a1, form: l1, paneHeader: o1 };
const { basePane: bn } = qr, u1 = "icon", c1 = "fontAwesomeIcon icon", d1 = "materialSymbolIcon icon", f1 = `iconBoxed ${bn}`, h1 = `iconBoxedDefault iconBoxed ${bn}`, m1 = `iconBoxedColored iconBoxed ${bn}`, p1 = `iconBoxedGray iconBoxedColored iconBoxed ${bn}`, g1 = `iconBoxedPrimary iconBoxedColored iconBoxed ${bn}`, v1 = `iconBoxedDanger iconBoxedColored iconBoxed ${bn}`, y1 = `iconBoxedInfo iconBoxedColored iconBoxed ${bn}`, b1 = `iconBoxedSuccess iconBoxedColored iconBoxed ${bn}`, k1 = `iconBoxedWarning iconBoxedColored iconBoxed ${bn}`;
var La = { icon: u1, fontAwesomeIcon: c1, materialSymbolIcon: d1, iconBoxed: f1, iconBoxedDefault: h1, iconBoxedColored: m1, iconBoxedGray: p1, iconBoxedPrimary: g1, iconBoxedDanger: v1, iconBoxedInfo: y1, iconBoxedSuccess: b1, iconBoxedWarning: k1 };
const w1 = ["viewBox"], I1 = ["d"];
var rt = /* @__PURE__ */ W({
  __name: "FluxIcon",
  props: {
    size: {},
    name: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e, s = ye(() => {
      if (!t.name)
        return null;
      const r = Zc[t.name];
      return r ? {
        width: r[0],
        height: r[1],
        paths: Array.isArray(r[4]) ? r[4] : [r[4]],
        scale: Math.max(1, r[0] / 512)
      } : (j0(`Unknown icon: ${t.name}`), null);
    }), i = (r) => n("click", r);
    return (r, a) => s.value ? (g(), V("svg", {
      key: 0,
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: w(c(La).fontAwesomeIcon),
      style: We({
        fontSize: t.size && `${t.size}px`,
        scale: s.value.scale > 1 ? s.value.scale : void 0
      }),
      focusable: "false",
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, [
      (g(!0), V(me, null, Ze(s.value.paths, (l) => (g(), V("path", {
        d: l,
        fill: "currentColor"
      }, null, 8, I1))), 256))
    ], 14, w1)) : t.name ? (g(), V("i", {
      key: 1,
      class: w(c(La).materialSymbolIcon),
      style: We({
        fontSize: t.size && `${t.size}px`
      }),
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, fe(t.name), 7)) : (g(), V("i", {
      key: 2,
      class: w(c(La).icon)
    }, null, 2));
  }
});
const S1 = ["href", "rel", "target"];
var ff = /* @__PURE__ */ W({
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
      const a = hh("router-link");
      return t.componentType === "route" ? (g(), R(a, It({ key: 0 }, i.$attrs, {
        rel: t.rel,
        target: t.target,
        to: t.to,
        onClick: r[0] || (r[0] = (l) => s(l)),
        onMouseenter: r[1] || (r[1] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[2] || (r[2] = (l) => i.$emit("mouseleave", l))
      }), {
        default: U(() => [
          oe(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["rel", "target", "to"])) : t.componentType === "link" ? (g(), V("a", It({ key: 1 }, i.$attrs, {
        href: t.href,
        rel: t.rel,
        target: t.target,
        onClick: r[3] || (r[3] = (l) => s(l)),
        onMouseenter: r[4] || (r[4] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[5] || (r[5] = (l) => i.$emit("mouseleave", l))
      }), [
        oe(i.$slots, "default")
      ], 16, S1)) : t.componentType === "button" ? (g(), V("button", It({ key: 2 }, i.$attrs, {
        onClick: r[6] || (r[6] = (l) => s(l)),
        onMouseenter: r[7] || (r[7] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[8] || (r[8] = (l) => i.$emit("mouseleave", l))
      }), [
        oe(i.$slots, "default")
      ], 16)) : (g(), V("div", It({ key: 3 }, i.$attrs, {
        onClick: s,
        onMouseenter: r[9] || (r[9] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[10] || (r[10] = (l) => i.$emit("mouseleave", l))
      }), [
        oe(i.$slots, "default")
      ], 16));
    };
  }
});
const T1 = "spinner", C1 = "spinnerTrack", x1 = "spinnerEffect", E1 = "spinnerValue";
var Hi = { spinner: T1, spinnerTrack: C1, spinnerEffect: x1, spinnerValue: E1 }, _n = /* @__PURE__ */ W({
  __name: "FluxSpinner",
  props: {
    size: {}
  },
  setup(t) {
    return (e, n) => (g(), V("svg", {
      class: w(c(Hi).spinner),
      viewBox: "0 0 24 24",
      style: We({
        fontSize: t.size && `${t.size}px`
      })
    }, [
      de("circle", {
        class: w(c(Hi).spinnerTrack),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4"
      }, null, 2),
      de("circle", {
        class: w(c(Hi).spinnerEffect),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2),
      de("circle", {
        class: w(c(Hi).spinnerValue),
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
const F1 = "button", A1 = "isSmall", $1 = "isMedium", L1 = "isLarge", M1 = "isXl", D1 = "isFilled", O1 = "buttonIcon", B1 = "buttonLabel";
var Ln = { button: F1, isSmall: A1, isMedium: $1, isLarge: L1, isXl: M1, isFilled: D1, buttonIcon: O1, buttonLabel: B1 };
const hf = ["default", "after", "before", "iconLeading", "iconTrailing", "label"];
var jr = /* @__PURE__ */ W({
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
    const n = e, s = Fs(pn(() => t.disabled));
    function i(l) {
      if (c(s) || t.isLoading) {
        l.preventDefault(), l.stopPropagation();
        return;
      }
      n("click", l);
    }
    function r(l) {
      n("mouseenter", l);
    }
    function a(l) {
      n("mouseleave", l);
    }
    return (l, o) => (g(), R(ff, {
      "component-type": t.type,
      class: w(c(xt)(
        t.cssClass,
        t.isFilled && c(Ln).isFilled,
        t.size === "small" && c(Ln).isSmall,
        t.size === "medium" && c(Ln).isMedium,
        t.size === "large" && c(Ln).isLarge,
        t.size === "xl" && c(Ln).isXl
      )),
      type: t.isSubmit ? "submit" : "button",
      "aria-disabled": c(s) ? !0 : void 0,
      disabled: c(s) ? !0 : void 0,
      tabindex: c(s) ? -1 : t.tabindex,
      href: t.href,
      rel: t.rel,
      target: t.target,
      to: t.to,
      onClick: i,
      onMouseenter: r,
      onMouseleave: a
    }, {
      default: U(() => [
        oe(l.$slots, "before"),
        oe(l.$slots, "iconLeading", {}, () => [
          t.isLoading && (t.iconLeading || !t.iconTrailing) ? (g(), R(_n, {
            key: 0,
            size: 20
          })) : t.iconLeading ? (g(), R(rt, {
            key: 1,
            class: w(t.cssClassIcon),
            name: t.iconLeading
          }, null, 8, ["class", "name"])) : te("", !0)
        ]),
        oe(l.$slots, "label", {}, () => [
          t.label ? (g(), V("span", {
            key: 0,
            class: w(t.cssClassLabel)
          }, fe(t.label), 3)) : te("", !0)
        ]),
        oe(l.$slots, "iconTrailing", {}, () => [
          t.isLoading && !t.iconLeading && t.iconTrailing ? (g(), R(_n, {
            key: 0,
            size: 20
          })) : t.iconTrailing ? (g(), R(rt, {
            key: 1,
            class: w(t.cssClassIcon),
            name: t.iconTrailing
          }, null, 8, ["class", "name"])) : te("", !0)
        ]),
        oe(l.$slots, "after")
      ]),
      _: 3
    }, 8, ["component-type", "class", "type", "aria-disabled", "disabled", "tabindex", "href", "rel", "target", "to"]));
  }
});
const { button: V1, buttonIcon: N1, buttonLabel: _1 } = Ln, R1 = `action ${V1}`, P1 = "spinner", z1 = `actionIcon ${N1}`, H1 = "isDestructive", W1 = `actionLabel ${_1}`, U1 = "actionBar", q1 = "separator", j1 = "formInput", G1 = "basePaneStructure", Z1 = "paneHeader", Y1 = "actionPane", J1 = "actionPaneGrid", K1 = "actionPaneBody", Q1 = "paneBody";
var Wi = { action: R1, spinner: P1, actionIcon: z1, isDestructive: H1, actionLabel: W1, actionBar: U1, separator: q1, formInput: j1, basePaneStructure: G1, paneHeader: Z1, actionPane: Y1, actionPaneGrid: J1, actionPaneBody: K1, paneBody: Q1 }, X1 = /* @__PURE__ */ W({
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
    return (e, n) => (g(), R(jr, It({ disabled: t.disabled, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to, type: t.type }, {
      "css-class": c(Wi).action,
      "css-class-icon": c(Wi).actionIcon,
      "css-class-label": c(Wi).actionLabel,
      class: t.isDestructive && c(Wi).isDestructive,
      "icon-leading": t.icon,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), null, 16, ["css-class", "css-class-icon", "css-class-label", "class", "icon-leading"]));
  }
});
function eg(t, e, n, s) {
  const i = ye(() => {
    const l = c(t);
    return Array.isArray(l) ? l : [l];
  }), r = ye(() => {
    const l = [], o = c(s)?.trim().toLowerCase(), u = c(n).filter((d) => !("value" in d) || !o || d.label.toLowerCase().includes(o)).filter((d) => !("value" in d) || !e || !c(a).find((f) => f.value === d.value));
    if (u.length === 0)
      return [];
    if (!u.find(qa))
      return [[null, u]];
    for (let d = 0; d < u.length; ) {
      const f = u[d];
      if (ei(f)) {
        ++d, l.push([null, [f]]);
        continue;
      }
      const p = [];
      for (++d; d <= u.length; ++d) {
        const h = u[d];
        if (qa(h) || d === u.length) {
          p.length > 0 && l.push([f, p]);
          break;
        }
        p.push(h);
      }
    }
    return l;
  }), a = ye(() => c(i).map((l) => c(n).find((o) => ei(o) && o.value === l)).filter(ei));
  return {
    groups: r,
    selected: a,
    values: i
  };
}
const tg = (t, e) => {
  if (!(t in Bo))
    return t;
  let n = Bo[t];
  for (let s in e)
    n = n.replaceAll(`{${s}}`, e[s].toString());
  return n;
};
var Si = () => {
  const t = Qt()?.proxy;
  return !t || !ng(t) ? tg : t.$t;
};
function ng(t) {
  return !!t && "$t" in t;
}
const { button: Ti, buttonIcon: Ci, buttonLabel: xi } = Ln, sg = `primaryButton ${Ti}`, ig = "spinner", rg = `primaryButtonIcon ${Ci}`, ag = `primaryButtonLabel ${xi}`, lg = `secondaryButton ${Ti}`, og = `secondaryButtonIcon ${Ci}`, ug = `secondaryButtonLabel ${xi}`, cg = `destructiveButton ${Ti}`, dg = `destructiveButtonIcon ${Ci}`, fg = `destructiveButtonLabel ${xi}`, hg = `linkButton ${Ti}`, mg = `linkButtonIcon ${Ci}`, pg = "icon", gg = `linkButtonLabel ${xi}`, vg = `publishButton primaryButton ${Ti}`, yg = `publishButtonIcon primaryButtonIcon ${Ci}`, bg = `publishButtonLabel primaryButtonLabel ${xi}`, kg = "publishButtonAnimation", wg = "isDone", Ig = "publishButtonAnimationArrow", Sg = "publishArrowOut", Tg = "publishButtonAnimationCheck", Cg = "publishButtonAnimationCircle", xg = "isIdle", Eg = "isLoading", Fg = "publishArrowIn", Ag = "publishButtonCloud", $g = "publish", Lg = "buttonGroup", Mg = "button";
var ns = { primaryButton: sg, spinner: ig, primaryButtonIcon: rg, primaryButtonLabel: ag, secondaryButton: lg, secondaryButtonIcon: og, secondaryButtonLabel: ug, destructiveButton: cg, destructiveButtonIcon: dg, destructiveButtonLabel: fg, linkButton: hg, linkButtonIcon: mg, icon: pg, linkButtonLabel: gg, publishButton: vg, publishButtonIcon: yg, publishButtonLabel: bg, publishButtonAnimation: kg, isDone: wg, publishButtonAnimationArrow: Ig, publishArrowOut: Sg, publishButtonAnimationCheck: Tg, publishButtonAnimationCircle: Cg, isIdle: xg, isLoading: Eg, publishArrowIn: Fg, publishButtonCloud: Ag, publish: $g, buttonGroup: Lg, button: Mg }, Dg = /* @__PURE__ */ W({
  __name: "FluxButtonGroup",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(ns).buttonGroup)
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const { basePaneStructure: Ei, basePaneElement: Pl, basePaneLoader: Og } = qr, Bg = `pane ${Ei}`, Vg = `paneDefault pane ${Ei}`, Ng = `paneFlat pane ${Ei}`, _g = `paneWell pane ${Ei}`, Rg = `paneHeader ${Pl}`, Pg = "basePaneElement", zg = `paneBody ${Pl}`, Hg = "paneHeaderCaption", Wg = "paneHeaderIcon", Ug = `paneFooter ${Pl}`, qg = `paneLoader ${Og}`, jg = "paneTag", Gg = "paneMedia", Zg = "paneMediaInset paneMedia", Yg = "paneMediaImage", Jg = `paneDeck paneDefault pane ${Ei}`, Kg = "baseAutoGrid", Qg = "paneGroup", Xg = "paneIllustration", ev = "paneIllustrationContent", tv = "paneIllustrationContentControlled paneIllustrationContent", nv = "paneIllustrationMagic", sv = "paneIllustrationMasked paneIllustration", iv = "iconBoxed";
var Gt = { pane: Bg, paneDefault: Vg, paneFlat: Ng, paneWell: _g, paneHeader: Rg, basePaneElement: Pg, paneBody: zg, paneHeaderCaption: Hg, paneHeaderIcon: Wg, paneFooter: Ug, paneLoader: qg, paneTag: jg, paneMedia: Gg, paneMediaInset: Zg, paneMediaImage: Yg, paneDeck: Jg, baseAutoGrid: Kg, paneGroup: Qg, paneIllustration: Xg, paneIllustrationContent: ev, paneIllustrationContentControlled: tv, paneIllustrationMagic: nv, paneIllustrationMasked: sv, iconBoxed: iv }, Gr = /* @__PURE__ */ W({
  __name: "FluxPane",
  props: {
    isLoading: { type: Boolean },
    tag: {},
    variant: { default: "default" }
  },
  setup(t) {
    const e = {
      default: Gt.paneDefault,
      flat: Gt.paneFlat,
      well: Gt.paneWell
    };
    return (n, s) => (g(), V("div", {
      class: w(e[t.variant])
    }, [
      oe(n.$slots, "default"),
      t.isLoading ? oe(n.$slots, "loader", { key: 0 }, () => [
        de("div", {
          class: w(c(Gt).paneLoader)
        }, [
          B(_n)
        ], 2)
      ]) : te("", !0),
      t.tag ? (g(), V("div", {
        key: 1,
        class: w(c(Gt).paneTag)
      }, fe(t.tag), 3)) : te("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ W({
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
    return (e, n) => (g(), R(jr, It({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(ns).secondaryButton,
      "css-class-icon": c(ns).secondaryButtonIcon,
      "css-class-label": c(ns).secondaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), Sl({ _: 2 }, [
      Ze(c(hf), (s) => ({
        name: s,
        fn: U(() => [
          oe(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
});
const rv = "baseAutoGrid";
var av = { baseAutoGrid: rv };
const { baseAutoGrid: lv } = av, ov = "aspectRatio", uv = `autoGrid ${lv}`, cv = "container", dv = "spacer", fv = "stack", hv = "isCentered", mv = "isFill", pv = "isWrapping", gv = "stackHorizontal stack", vv = "stackVertical stack";
var ms = { aspectRatio: ov, autoGrid: uv, container: cv, spacer: dv, stack: fv, isCentered: hv, isFill: mv, isWrapping: pv, stackHorizontal: gv, stackVertical: vv }, Zr = /* @__PURE__ */ W({
  __name: "FluxSpacer",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(ms).spacer)
    }, null, 2));
  }
}), mf = /* @__PURE__ */ W({
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
    return (e, n) => (g(), R(Il(t.tag ?? "div"), {
      class: w(c(xt)(
        t.direction === "horizontal" && c(ms).stackHorizontal,
        t.direction === "vertical" && c(ms).stackVertical,
        t.isCentered && c(ms).isCentered,
        t.isFill && c(ms).isFill,
        t.isWrapping && c(ms).isWrapping
      )),
      style: We({
        "--gap": t.gap && `${t.gap}px`
      })
    }, {
      default: U(() => [
        oe(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), yv = /* @__PURE__ */ W({
  __name: "FluxButtonStack",
  props: {
    direction: { default: "horizontal" },
    gap: { default: 9 },
    isFill: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), R(mf, {
      direction: t.direction,
      gap: t.gap,
      "is-fill": t.isFill
    }, {
      default: U(() => [
        oe(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["direction", "gap", "is-fill"]));
  }
}), mi = /* @__PURE__ */ W({
  __name: "FluxPaneBody",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(Gt).paneBody)
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const bv = "breakthroughTransitionEnterActive", kv = "breakthroughTransitionBackEnterActive", wv = "breakthroughTransitionLeaveActive", Iv = "breakthroughTransitionBackLeaveActive", Sv = "breakthroughTransitionEnterFrom", Tv = "breakthroughTransitionBackLeaveTo", Cv = "breakthroughTransitionLeaveTo", xv = "breakthroughTransitionBackEnterFrom", Ev = "fadeTransitionEnterActive", Fv = "fadeTransitionLeaveActive", Av = "fadeTransitionEnterFrom", $v = "fadeTransitionLeaveTo", Lv = "fadeTransitionEnterTo", Mv = "fadeTransitionLeaveFrom", Dv = "routeTransitionEnterActive", Ov = "routeTransitionBackEnterActive", Bv = "routeTransitionLeaveActive", Vv = "routeTransitionBackLeaveActive", Nv = "routeTransitionEnterFrom", _v = "routeTransitionBackLeaveTo", Rv = "routeTransitionLeaveTo", Pv = "routeTransitionBackEnterFrom", zv = "tooltipTransitionEnterActive", Hv = "tooltipTransitionLeaveActive", Wv = "tooltipTransitionEnterFrom", Uv = "tooltipTransitionLeaveTo", qv = "verticalWindowTransitionEnterActive", jv = "verticalWindowTransitionBackEnterActive", Gv = "verticalWindowTransitionLeaveActive", Zv = "verticalWindowTransitionBackLeaveActive", Yv = "verticalWindowTransitionBackLeaveTo", Jv = "verticalWindowTransitionEnterFrom", Kv = "verticalWindowTransitionBackEnterFrom", Qv = "verticalWindowTransitionLeaveTo", Xv = "windowTransitionEnterActive", ey = "windowTransitionBackEnterActive", ty = "windowTransitionLeaveActive", ny = "windowTransitionBackLeaveActive", sy = "windowTransitionBackLeaveTo", iy = "windowTransitionEnterFrom", ry = "windowTransitionBackEnterFrom", ay = "windowTransitionLeaveTo";
var qt = { breakthroughTransitionEnterActive: bv, breakthroughTransitionBackEnterActive: kv, breakthroughTransitionLeaveActive: wv, breakthroughTransitionBackLeaveActive: Iv, breakthroughTransitionEnterFrom: Sv, breakthroughTransitionBackLeaveTo: Tv, breakthroughTransitionLeaveTo: Cv, breakthroughTransitionBackEnterFrom: xv, fadeTransitionEnterActive: Ev, fadeTransitionLeaveActive: Fv, fadeTransitionEnterFrom: Av, fadeTransitionLeaveTo: $v, fadeTransitionEnterTo: Lv, fadeTransitionLeaveFrom: Mv, routeTransitionEnterActive: Dv, routeTransitionBackEnterActive: Ov, routeTransitionLeaveActive: Bv, routeTransitionBackLeaveActive: Vv, routeTransitionEnterFrom: Nv, routeTransitionBackLeaveTo: _v, routeTransitionLeaveTo: Rv, routeTransitionBackEnterFrom: Pv, tooltipTransitionEnterActive: zv, tooltipTransitionLeaveActive: Hv, tooltipTransitionEnterFrom: Wv, tooltipTransitionLeaveTo: Uv, verticalWindowTransitionEnterActive: qv, verticalWindowTransitionBackEnterActive: jv, verticalWindowTransitionLeaveActive: Gv, verticalWindowTransitionBackLeaveActive: Zv, verticalWindowTransitionBackLeaveTo: Yv, verticalWindowTransitionEnterFrom: Jv, verticalWindowTransitionBackEnterFrom: Kv, verticalWindowTransitionLeaveTo: Qv, windowTransitionEnterActive: Xv, windowTransitionBackEnterActive: ey, windowTransitionLeaveActive: ty, windowTransitionBackLeaveActive: ny, windowTransitionBackLeaveTo: sy, windowTransitionEnterFrom: iy, windowTransitionBackEnterFrom: ry, windowTransitionLeaveTo: ay }, ul = /* @__PURE__ */ W({
  __name: "FluxFadeTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (g(), R(Vn, {
      mode: t.mode,
      "enter-active-class": c(qt).fadeTransitionEnterActive,
      "enter-from-class": c(qt).fadeTransitionEnterFrom,
      "enter-to-class": c(qt).fadeTransitionEnterTo,
      "leave-active-class": c(qt).fadeTransitionLeaveActive,
      "leave-from-class": c(qt).fadeTransitionLeaveFrom,
      "leave-to-class": c(qt).fadeTransitionLeaveTo
    }, {
      default: U(() => [
        oe(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"]));
  }
});
const ly = "overlayView", oy = "overlayProvider overlayView", uy = "overlayShade overlayView", cy = "overlay", dy = "overlayTransitionLeaveActive", fy = "basePaneStructure", hy = "paneFooter", my = "isCurrent", py = "overlaySmall overlay", gy = "overlayMedium overlay", vy = "overlayLarge overlay", yy = "slideOver overlay", by = "paneHeader", ky = "tabs", wy = "tabBar", Iy = "paneHeaderCaption", Sy = "overlayTransitionEnterActive", Ty = "overlayTransitionEnterFrom", Cy = "overlayTransitionLeaveTo", xy = "slideOverTransitionEnterActive", Ey = "slideOverTransitionLeaveActive", Fy = "slideOverTransitionEnterFrom", Ay = "slideOverTransitionLeaveTo";
var Lt = { overlayView: ly, overlayProvider: oy, overlayShade: uy, overlay: cy, overlayTransitionLeaveActive: dy, basePaneStructure: fy, paneFooter: hy, isCurrent: my, overlaySmall: py, overlayMedium: gy, overlayLarge: vy, slideOver: yy, paneHeader: by, tabs: ky, tabBar: wy, paneHeaderCaption: Iy, overlayTransitionEnterActive: Sy, overlayTransitionEnterFrom: Ty, overlayTransitionLeaveTo: Cy, slideOverTransitionEnterActive: xy, slideOverTransitionLeaveActive: Ey, slideOverTransitionEnterFrom: Fy, slideOverTransitionLeaveTo: Ay }, $y = /* @__PURE__ */ W({
  __name: "FluxOverlayTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (g(), R(Vn, {
      mode: t.mode,
      "enter-active-class": c(Lt).overlayTransitionEnterActive,
      "enter-from-class": c(Lt).overlayTransitionEnterFrom,
      "leave-active-class": c(Lt).overlayTransitionLeaveActive,
      "leave-to-class": c(Lt).overlayTransitionLeaveTo
    }, {
      default: U(() => [
        oe(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
}), Ly = /* @__PURE__ */ W({
  __name: "FluxTooltipTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (g(), R(Vn, {
      mode: t.mode,
      "enter-active-class": c(qt).tooltipTransitionEnterActive,
      "enter-from-class": c(qt).tooltipTransitionEnterFrom,
      "leave-active-class": c(qt).tooltipTransitionLeaveActive,
      "leave-to-class": c(qt).tooltipTransitionLeaveTo
    }, {
      default: U(() => [
        oe(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
});
const My = "badge", Dy = "spinner", Oy = "badgeClose", By = "icon", Vy = "badgeDot", Ny = "badgeIcon", _y = "badgeLabel", Ry = "badgeGray badge", Py = "badgePrimary badge", zy = "badgeDanger badge", Hy = "badgeInfo badge", Wy = "badgeSuccess badge", Uy = "badgeWarning badge", qy = "tag badge", jy = "tagClose badgeClose", Gy = "tagDot badgeDot", Zy = "tagIcon badgeIcon", Yy = "tagLabel badgeLabel", Jy = "tagGray badgeGray badge tag badge", Ky = "tagPrimary badgePrimary badge tag badge", Qy = "tagDanger badgeDanger badge tag badge", Xy = "tagInfo badgeInfo badge tag badge", e2 = "tagSuccess badgeSuccess badge tag badge", t2 = "tagWarning badgeWarning badge tag badge";
var At = { badge: My, spinner: Dy, badgeClose: Oy, icon: By, badgeDot: Vy, badgeIcon: Ny, badgeLabel: _y, badgeGray: Ry, badgePrimary: Py, badgeDanger: zy, badgeInfo: Hy, badgeSuccess: Wy, badgeWarning: Uy, tag: qy, tagClose: jy, tagDot: Gy, tagIcon: Zy, tagLabel: Yy, tagGray: Jy, tagPrimary: Ky, tagDanger: Qy, tagInfo: Xy, tagSuccess: e2, tagWarning: t2 }, n2 = /* @__PURE__ */ W({
  __name: "Anchor",
  props: {
    tagName: {}
  },
  setup(t) {
    return (e, n) => (g(), R(Il(t.tagName), null, {
      default: U(() => [
        oe(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), s2 = /* @__PURE__ */ W({
  __name: "AnchorPopup",
  props: {
    anchor: {},
    direction: { default: "vertical" },
    margin: { default: 12 },
    position: {},
    useAnchorWidth: { type: Boolean }
  },
  setup(t) {
    const e = ne(), n = un("popup"), s = Kt({
      x: 0,
      y: 0,
      width: null
    });
    yn(() => {
      window.addEventListener("resize", a, { passive: !0 }), window.addEventListener("scroll", l, { capture: !0, passive: !0 });
    }), rs(() => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", l);
    }), df(n, () => {
      i();
    }, { childList: !0, subtree: !0 });
    function i() {
      const o = c(e), u = c(n);
      if (!o || !u)
        return;
      const { x: d, y: f, height: p, width: h } = o.getBoundingClientRect(), { height: v, width: b } = u.getBoundingClientRect();
      let A, S;
      switch (t.position) {
        case "top":
          A = d + h / 2 - b / 2, S = f - v - t.margin;
          break;
        case "top-left":
          A = d, S = f - v - t.margin;
          break;
        case "top-right":
          A = d - b + h, S = f - v - t.margin;
          break;
        case "left":
          A = d - b - t.margin, S = f + p / 2 - v / 2;
          break;
        case "left-top":
          A = d - b - t.margin, S = f;
          break;
        case "left-bottom":
          A = d - b - t.margin, S = f + p - v;
          break;
        case "right":
          A = d + h + t.margin, S = f + p / 2 - v / 2;
          break;
        case "right-top":
          A = d + h + t.margin, S = f;
          break;
        case "right-bottom":
          A = d + h + t.margin, S = f + p - v;
          break;
        case "bottom":
          A = d + h / 2 - b / 2, S = f + p + t.margin;
          break;
        case "bottom-left":
          A = d, S = f + p + t.margin;
          break;
        case "bottom-right":
          A = d - b + h, S = f + p + t.margin;
          break;
        default:
          t.direction === "horizontal" ? (A = d + h + t.margin, S = f + p / 2 - v / 2, A + b > innerWidth && (A = d - b - t.margin)) : (A = d + h / 2 - b / 2, S = f + p + t.margin, S + v + t.margin > innerHeight && (S = f - v - t.margin)), (S < 0 || S + v > innerHeight) && (S = innerHeight / 2 - v / 2);
          break;
      }
      s.x = A, s.y = S;
    }
    function r() {
      const o = c(e);
      if (!o)
        return;
      const { width: u } = o.getBoundingClientRect();
      s.width = t.useAnchorWidth ? u : null;
    }
    function a() {
      r(), i();
    }
    function l() {
      i();
    }
    return Mr(() => {
      !t.anchor || !hi(t.anchor) && !t.anchor.$el || (e.value = hi(t.anchor) ? t.anchor : t.anchor.$el, requestAnimationFrame(() => {
        requestAnimationFrame(r), requestAnimationFrame(i);
      }));
    }), (o, u) => (g(), V("div", {
      ref: "popup",
      style: We({
        "--x": `${s.x}px`,
        "--y": `${s.y}px`,
        "--width": s.width ? `${s.width}px` : void 0
      })
    }, [
      oe(o.$slots, "default")
    ], 4));
  }
});
const { button: i2, buttonIcon: pf, buttonLabel: r2 } = Ln, a2 = "menu", l2 = "menuNormal menu", o2 = "menuLarge menu", u2 = "menuGroup", c2 = "menuGroupHorizontal menuGroup", d2 = "menuGroupVertical menuGroup", f2 = `menuItem ${i2}`, h2 = `menuItemIcon ${pf}`, m2 = `menuItemLabel ${r2}`, p2 = "menuItemActive", g2 = "menuItemDestructive", v2 = "menuItemHighlighted", y2 = "menuItemIndented", b2 = `menuItemSelectableIcon ${pf}`, k2 = "menuItemSelected", w2 = "menuItemCommand", I2 = "menuItemCommandIcon", S2 = "icon", T2 = "menuItemImage", C2 = "menuTitle", x2 = "menuSubHeader", E2 = "menuSubHeaderIcon", F2 = "menuSubHeaderLabel", A2 = "basePane", $2 = "divider", L2 = "separator", M2 = "expandableBody";
var ze = { menu: a2, menuNormal: l2, menuLarge: o2, menuGroup: u2, menuGroupHorizontal: c2, menuGroupVertical: d2, menuItem: f2, menuItemIcon: h2, menuItemLabel: m2, menuItemActive: p2, menuItemDestructive: g2, menuItemHighlighted: v2, menuItemIndented: y2, menuItemSelectableIcon: b2, menuItemSelected: k2, menuItemCommand: w2, menuItemCommandIcon: I2, icon: S2, menuItemImage: T2, menuTitle: C2, menuSubHeader: x2, menuSubHeaderIcon: E2, menuSubHeaderLabel: F2, basePane: A2, divider: $2, separator: L2, expandableBody: M2 };
const D2 = ["src", "alt"];
var Ma = /* @__PURE__ */ W({
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
    return (e, n) => (g(), R(jr, It({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(ze).menuItem,
      "css-class-icon": c(ze).menuItemIcon,
      "css-class-label": c(ze).menuItemLabel,
      "is-filled": "",
      role: t.isSelectable ? "menuitemradio" : "menuitem",
      class: {
        [c(ze).menuItemActive]: t.isActive,
        [c(ze).menuItemDestructive]: t.isDestructive,
        [c(ze).menuItemHighlighted]: t.isHighlighted,
        [c(ze).menuItemIndented]: t.isIndented,
        [c(ze).menuItemSelected]: t.isSelectable && t.isSelected
      },
      "aria-checked": t.isSelectable ? t.isSelected : void 0,
      tabindex: t.tabindex,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s))
    }), Sl({ _: 2 }, [
      t.isSelectable && (!t.iconLeading || t.isSelected) ? {
        name: "iconLeading",
        fn: U(() => [
          B(rt, {
            class: w(c(ze).menuItemSelectableIcon),
            name: t.isSelected ? "circle-check" : void 0
          }, null, 8, ["class", "name"])
        ]),
        key: "0"
      } : t.imageSrc ? {
        name: "iconLeading",
        fn: U(() => [
          de("img", {
            class: w(c(ze).menuItemImage),
            src: t.imageSrc,
            alt: t.imageAlt ?? ""
          }, null, 10, D2)
        ]),
        key: "1"
      } : void 0,
      t.command || t.commandIcon || t.commandLoading ? {
        name: "after",
        fn: U(() => [
          t.commandLoading ? (g(), R(_n, {
            key: 0,
            class: w(c(ze).menuItemCommandIcon),
            size: 16
          }, null, 8, ["class"])) : (g(), V(me, { key: 1 }, [
            t.command ? (g(), V("kbd", {
              key: 0,
              class: w(c(ze).menuItemCommand)
            }, fe(t.command), 3)) : te("", !0),
            t.commandIcon ? (g(), R(rt, {
              key: 1,
              class: w(c(ze).menuItemCommandIcon),
              name: t.commandIcon
            }, null, 8, ["class", "name"])) : te("", !0)
          ], 64))
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["css-class", "css-class-icon", "css-class-label", "role", "class", "aria-checked", "tabindex"]));
  }
});
const { basePane: O2 } = qr, B2 = "formInputGroup formInputEnabled formInput", V2 = "buttonGroup", N2 = "button", _2 = "formInput", R2 = "formSelect formInput", P2 = "formStructureElement", z2 = "form formStructureElement", H2 = "pane", W2 = "formColumn formStructureElement", U2 = "formSection formStructureElement", q2 = "formRow", j2 = "formSectionTitle", G2 = "formField", Z2 = "formFieldHeader", Y2 = "formFieldLabel", J2 = "formFieldOptional", K2 = "formFieldValue", Q2 = "formFieldCounter", X2 = "formFieldAddition", e4 = "formFieldAdditionIcon", t4 = "formFieldAdditionError formFieldAddition", n4 = "formFieldAdditionHint formFieldAddition", s4 = "isSecondary", i4 = "formInputDisabled formInput", r4 = "formInputEnabled formInput", a4 = "formInputIcon", l4 = "formInputIconTrailing formInputIcon", o4 = "formInputIconLeading formInputIcon", u4 = "formInputIconPasswordToggle formInputIconTrailing formInputIcon", c4 = "formInputNative", d4 = "formInputNativeHasIconLeading", f4 = "formInputNativeHasIconTrailing", h4 = "formInputAddition formInput", m4 = "isCondensed", p4 = "secondaryButton", g4 = "formDateInput", v4 = "formDateRangeInput formInput", y4 = "formDateTimeInput", b4 = "inputGroup", k4 = "formTimeInput formDateInput", w4 = "isDisabled", I4 = "isFocused", S4 = "badge", T4 = "formSelectIcon", C4 = "formSelectInput", x4 = "formSelectPlaceholder", E4 = `formSelectPopup ${O2}`, F4 = "menuItem", A4 = "isKeyboardAction", $4 = "isSearchable", L4 = "menuSubHeader", M4 = "formSelectSelected", D4 = "buttonLabel", O4 = "formTextArea", B4 = "formTextAreaDisabled formInputDisabled formInput formTextArea", V4 = "formTextAreaEnabled formInputEnabled formInput formTextArea", N4 = "checkbox", _4 = "checkboxElement", R4 = "checkboxNative", P4 = "icon", z4 = "checkboxLabel", H4 = "quantitySelector", W4 = "quantitySelectorButton", U4 = "quantitySelectorInput formInput", q4 = "pinInput", j4 = "pinInputField", G4 = "pinInputEnabled pinInput", Z4 = "pinInputDisabled pinInput", Y4 = "toggle", J4 = "isChecked", K4 = "toggleInput", Q4 = "isSwitch", X4 = "toggleIcon", eb = "toggleIconOn toggleIcon", tb = "toggleIconOff toggleIcon";
var he = { formInputGroup: B2, buttonGroup: V2, button: N2, formInput: _2, formSelect: R2, formStructureElement: P2, form: z2, pane: H2, formColumn: W2, formSection: U2, formRow: q2, formSectionTitle: j2, formField: G2, formFieldHeader: Z2, formFieldLabel: Y2, formFieldOptional: J2, formFieldValue: K2, formFieldCounter: Q2, formFieldAddition: X2, formFieldAdditionIcon: e4, formFieldAdditionError: t4, formFieldAdditionHint: n4, isSecondary: s4, formInputDisabled: i4, formInputEnabled: r4, formInputIcon: a4, formInputIconTrailing: l4, formInputIconLeading: o4, formInputIconPasswordToggle: u4, formInputNative: c4, formInputNativeHasIconLeading: d4, formInputNativeHasIconTrailing: f4, formInputAddition: h4, isCondensed: m4, secondaryButton: p4, formDateInput: g4, formDateRangeInput: v4, formDateTimeInput: y4, inputGroup: b4, formTimeInput: k4, isDisabled: w4, isFocused: I4, badge: S4, formSelectIcon: T4, formSelectInput: C4, formSelectPlaceholder: x4, formSelectPopup: E4, menuItem: F4, isKeyboardAction: A4, isSearchable: $4, menuSubHeader: L4, formSelectSelected: M4, buttonLabel: D4, formTextArea: O4, formTextAreaDisabled: B4, formTextAreaEnabled: V4, checkbox: N4, checkboxElement: _4, checkboxNative: R4, icon: P4, checkboxLabel: z4, quantitySelector: H4, quantitySelectorButton: W4, quantitySelectorInput: U4, pinInput: q4, pinInputField: j4, pinInputEnabled: G4, pinInputDisabled: Z4, toggle: Y4, isChecked: J4, toggleInput: K4, isSwitch: Q4, toggleIcon: X4, toggleIconOn: eb, toggleIconOff: tb };
const nb = ["aria-disabled"], sb = ["id", "autocomplete", "autofocus", "aria-disabled", "disabled", "max", "maxlength", "min", "placeholder", "readonly", "step", "type", "value"];
var si = /* @__PURE__ */ W({
  __name: "FluxFormInput",
  props: /* @__PURE__ */ Vt({
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
  emits: /* @__PURE__ */ Vt(["blur", "focus", "showPicker"], ["update:modelValue"]),
  setup(t, { expose: e, emit: n }) {
    const s = n, i = ct(t, "modelValue"), r = Fs(pn(() => t.disabled)), a = un("input"), { id: l } = Ll(), o = ne(null), u = ne(t.type);
    function d() {
      ft(a)?.blur();
    }
    function f() {
      ft(a)?.focus();
    }
    function p() {
      t.type === "password" && (u.value = c(u) === "password" ? "text" : "password");
    }
    function h() {
      s("blur");
    }
    function v() {
      s("focus");
    }
    function b(S) {
      const P = S.target.value;
      switch (t.type) {
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          const C = re.fromISO(P);
          if (!C.isValid)
            return;
          i.value = C;
          break;
        case "number":
          i.value = Number(P);
          break;
        default:
          i.value = P;
          break;
      }
    }
    function A(S) {
      ["date", "datetime-local", "month", "week"].includes(t.type) && S.key === " " && (s("showPicker"), S.preventDefault());
    }
    return Oe([i, () => t.type], ([S, P]) => {
      if (!S && S !== 0) {
        o.value = null;
        return;
      }
      if (re.isDateTime(S)) {
        const C = S.toISO();
        switch (P) {
          case "date":
            o.value = C.substring(0, 10);
            break;
          case "datetime-local":
            o.value = C.substring(0, 16);
            break;
          case "time":
            o.value = C.substring(11, 16);
            break;
          default:
            o.value = C;
            break;
        }
        return;
      }
      o.value = S.toString();
    }, { immediate: !0 }), Oe([a, () => t.pattern, o], ([S, P, C], z, I) => {
      if (!S || !P)
        return;
      const $ = Lm[P](S);
      C && ($.value = C, i.value = $.value), I(() => $.destroy());
    }, { immediate: !0 }), Oe(() => t.type, (S) => u.value = S), e({
      blur: d,
      focus: f
    }), (S, P) => (g(), V("div", {
      class: w(c(xt)(
        c(r) ? c(he).formInputDisabled : c(he).formInputEnabled,
        t.isCondensed && c(he).isCondensed,
        t.isSecondary && c(he).isSecondary
      )),
      "aria-disabled": c(r) ? !0 : void 0
    }, [
      de("input", {
        ref: "input",
        class: w(c(xt)(
          c(he).formInputNative,
          (!!t.iconTrailing || t.type === "password") && c(he).formInputNativeHasIconTrailing,
          !!t.iconLeading && c(he).formInputNativeHasIconLeading
        )),
        id: c(l),
        autocomplete: t.autoComplete,
        autofocus: t.autoFocus,
        "aria-disabled": c(r) ? !0 : void 0,
        disabled: c(r),
        max: t.max,
        maxlength: t.maxLength,
        min: t.min,
        placeholder: t.placeholder,
        readonly: t.isReadonly,
        step: t.step,
        type: u.value,
        value: o.value,
        onBlur: P[0] || (P[0] = (C) => h()),
        onFocus: P[1] || (P[1] = (C) => v()),
        onInput: b,
        onKeydown: A
      }, null, 42, sb),
      t.iconLeading ? (g(), R(rt, {
        key: 0,
        class: w(c(he).formInputIconLeading),
        name: t.iconLeading,
        size: 18
      }, null, 8, ["class", "name"])) : te("", !0),
      t.type === "password" ? (g(), R(rt, {
        key: 1,
        class: w(c(he).formInputIconPasswordToggle),
        name: u.value === "password" ? "eye" : "eye-slash",
        size: 18,
        onClick: P[2] || (P[2] = (C) => p())
      }, null, 8, ["class", "name"])) : t.iconTrailing ? (g(), R(rt, {
        key: 2,
        class: w(c(he).formInputIconTrailing),
        name: t.iconTrailing,
        size: 18
      }, null, 8, ["class", "name"])) : te("", !0)
    ], 10, nb));
  }
}), ib = /* @__PURE__ */ W({
  __name: "FluxMenuGroup",
  props: {
    isHorizontal: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(t.isHorizontal ? c(ze).menuGroupHorizontal : c(ze).menuGroupVertical),
      role: "group"
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
}), bu = /* @__PURE__ */ W({
  __name: "FluxMenuSubHeader",
  props: {
    iconLeading: {},
    iconTrailing: {},
    label: {}
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(ze).menuSubHeader),
      role: "presentation"
    }, [
      t.iconLeading ? (g(), R(rt, {
        key: 0,
        class: w(c(ze).menuSubHeaderIcon),
        name: t.iconLeading
      }, null, 8, ["class", "name"])) : te("", !0),
      de("span", {
        class: w(c(ze).menuSubHeaderLabel)
      }, fe(t.label), 3),
      t.iconTrailing ? (g(), R(rt, {
        key: 1,
        class: w(c(ze).menuSubHeaderIcon),
        name: t.iconTrailing
      }, null, 8, ["class", "name"])) : te("", !0)
    ], 2));
  }
}), ku = /* @__PURE__ */ W({
  __name: "FluxMenu",
  props: {
    isLarge: { type: Boolean }
  },
  setup(t) {
    const e = un("element");
    return e1(e, {
      direction: "vertical"
    }), (n, s) => (g(), V("nav", {
      ref: "element",
      class: w(t.isLarge ? c(ze).menuLarge : c(ze).menuNormal),
      role: "menu",
      "aria-orientation": "vertical"
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), rb = /* @__PURE__ */ W({
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
    return (i, r) => (g(), R(ff, {
      class: w(c(xt)(
        t.color === "gray" && c(At).tagGray,
        t.color === "primary" && c(At).tagPrimary,
        t.color === "danger" && c(At).tagDanger,
        t.color === "info" && c(At).tagInfo,
        t.color === "success" && c(At).tagSuccess,
        t.color === "warning" && c(At).tagWarning
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
      default: U(() => [
        t.isLoading ? (g(), R(_n, {
          key: 0,
          class: w(c(At).tagIcon),
          size: 16
        }, null, 8, ["class"])) : t.dot ? (g(), V("span", {
          key: 1,
          class: w(c(At).tagDot)
        }, null, 2)) : t.icon ? (g(), R(rt, {
          key: 2,
          class: w(c(At).tagIcon),
          name: t.icon,
          size: 16
        }, null, 8, ["class", "name"])) : te("", !0),
        de("span", {
          class: w(c(At).tagLabel)
        }, fe(t.label), 3),
        !t.isClickable && t.isDeletable ? (g(), V("button", {
          key: 3,
          class: w(c(At).tagClose),
          type: "button",
          onClick: r[0] || (r[0] = (a) => s())
        }, [
          B(rt, { name: "xmark" })
        ], 2)) : te("", !0)
      ]),
      _: 1
    }, 8, ["class", "component-type", "tabindex", "href", "rel", "target", "to"]));
  }
});
const Ps = -1;
var ab = /* @__PURE__ */ W({
  inheritAttrs: !1,
  __name: "SelectBase",
  props: /* @__PURE__ */ Vt({
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
  emits: /* @__PURE__ */ Vt(["keyDown", "deselect", "select", "search", "close", "open"], ["update:searchQuery"]),
  setup(t, { emit: e }) {
    const n = e, s = ct(t, "searchQuery"), i = Fs(pn(() => t.disabled)), { id: r } = Ll(), a = Si(), l = un("anchor"), o = un("anchorPopup"), u = un("optionElements"), d = un("searchInputElement"), f = ne(Ps), p = ne(!1), h = ne(!1), v = ye(() => ft(d) ?? ft(l)), b = ye(() => c(A)[c(f)]?.value), A = ye(() => t.options.map(($) => $[1]).flat());
    yu([l, o], h, () => h.value = !1), yu(l, h, () => c(v)?.focus());
    function S($) {
      n("deselect", $), Jn(() => c(v)?.focus());
    }
    function P($) {
      n("select", $), !t.isMultiple && (h.value = !1), f.value = Ps, s.value = "", Jn(() => c(v)?.focus());
    }
    function C() {
      c(i) || (h.value = !c(h));
    }
    function z($) {
      if (n("keyDown", $), !c(h)) {
        $.key === "Enter" && (h.value = !0);
        return;
      }
      if (p.value = !0, c(f) === Ps && ["ArrowDown", "ArrowUp"].includes($.key)) {
        const O = c(u)?.findIndex((D) => "isActive" in D.$props && D.$props.isActive);
        f.value = O ?? Ps;
      }
      switch ($.key) {
        case "ArrowUp":
          f.value = Math.max(0, c(f) - 1);
          break;
        case "ArrowDown":
          f.value = Math.min(c(A).length - 1, c(f) + 1);
          break;
        case "Backspace":
          if (c(s).length > 0 || t.selected.length === 0)
            return;
          S(t.selected[t.selected.length - 1].value);
          break;
        case "Enter":
          const O = c(b);
          O && P(O);
          break;
        case "Escape":
          h.value = !1;
          break;
        case "Tab":
          h.value = !1;
          return;
        default:
          $.key.match(/[a-z]/) ? f.value = c(A).findIndex((D) => D.label.toLowerCase().startsWith($.key)) : f.value = -1;
          return;
      }
      $.preventDefault();
    }
    function I() {
      p.value = !1;
    }
    return Oe(f, ($) => {
      c(u)[$]?.$el.scrollIntoView({
        block: "center"
      });
    }), Oe(h, ($) => {
      if (!$) {
        n("close");
        return;
      }
      Jn(() => {
        c(d)?.focus();
      }), Jn(() => {
        const Z = c(u);
        if (!Z || t.isMultiple)
          return;
        const O = Z.findIndex((Y) => "isActive" in Y.$props && Y.$props.isActive), D = Z[O];
        D && D.$el.scrollIntoView({
          block: "center"
        });
      }), n("open");
    }), Oe(s, ($) => n("search", $)), Oe([() => t.options, h], () => f.value = Ps), ($, Z) => (g(), V(me, null, [
      B(n2, It({ ref: "anchor" }, $.$attrs, {
        class: c(xt)(
          c(he).formSelect,
          c(i) && c(he).isDisabled,
          h.value && c(he).isFocused,
          t.isSearchable && c(he).isSearchable
        ),
        id: c(r),
        "aria-disabled": c(i) ? !0 : void 0,
        tabindex: "0",
        "tag-name": "div",
        onClick: Z[0] || (Z[0] = (O) => C()),
        onKeydown: z,
        onKeyup: I
      }), {
        default: U(() => [
          !t.isMultiple && t.selected[0] ? (g(), R(Ma, {
            key: 0,
            class: w(c(he).formSelectSelected),
            command: t.selected[0].command,
            "command-icon": t.selected[0].commandIcon,
            "icon-leading": t.selected[0].icon,
            "image-alt": t.selected[0].imageAlt,
            "image-src": t.selected[0].imageSrc,
            label: t.selected[0].label,
            tabindex: "-1"
          }, null, 8, ["class", "command", "command-icon", "icon-leading", "image-alt", "image-src", "label"])) : t.isMultiple && t.selected[0] ? (g(!0), V(me, { key: 1 }, Ze(t.selected, (O) => (g(), R(rb, {
            key: O.value ?? "null option",
            label: O.label,
            "is-deletable": "",
            onDelete: (D) => S(O.value)
          }, null, 8, ["label", "onDelete"]))), 128)) : t.placeholder ? (g(), V("span", {
            key: 2,
            class: w(c(he).formSelectPlaceholder)
          }, fe(t.placeholder), 3)) : te("", !0),
          t.isLoading ? (g(), R(_n, {
            key: 3,
            class: w(c(he).formSelectIcon),
            size: 16
          }, null, 8, ["class"])) : (g(), R(rt, {
            key: 4,
            class: w(c(he).formSelectIcon),
            name: "angle-down"
          }, null, 8, ["class"]))
        ]),
        _: 1
      }, 16, ["class", "id", "aria-disabled"]),
      (g(), R(oc, { to: "body" }, [
        B(c(ul), null, {
          default: U(() => [
            h.value && !c(i) ? (g(), R(s2, {
              key: 0,
              ref: "anchorPopup",
              class: w(c(xt)(
                c(he).formSelectPopup,
                p.value && c(he).isKeyboardAction,
                t.isSearchable && c(he).isSearchable
              )),
              anchor: l.value,
              direction: "vertical",
              "use-anchor-width": ""
            }, {
              default: U(() => [
                t.isSearchable ? (g(), R(si, {
                  key: 0,
                  modelValue: s.value,
                  "onUpdate:modelValue": Z[1] || (Z[1] = (O) => s.value = O),
                  ref: "searchInputElement",
                  "auto-complete": "off",
                  class: w(c(he).formSelectInput),
                  type: "search",
                  "icon-trailing": "magnifying-glass",
                  placeholder: c(a)("flux.search"),
                  onKeydown: z
                }, null, 8, ["modelValue", "class", "placeholder"])) : te("", !0),
                !t.isLoading && t.options.length === 0 ? (g(), R(ku, { key: 1 }, {
                  default: U(() => [
                    B(bu, {
                      label: c(a)("flux.noItems")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })) : (g(), R(ku, { key: 2 }, {
                  default: U(() => [
                    (g(!0), V(me, null, Ze(t.options, ([O, D], Y) => (g(), V(me, {
                      key: `group-${Y}`
                    }, [
                      B(ib, null, {
                        default: U(() => [
                          c(qa)(O) ? (g(), R(bu, {
                            key: 0,
                            "icon-leading": O.icon,
                            label: O.label
                          }, null, 8, ["icon-leading", "label"])) : te("", !0),
                          (g(!0), V(me, null, Ze(D, (X, k) => (g(), V(me, null, [
                            c(ei)(X) ? (g(), R(Ma, {
                              ref_for: !0,
                              ref: "optionElements",
                              key: k,
                              command: X.command,
                              "command-icon": X.commandIcon,
                              "icon-leading": X.icon,
                              "image-alt": X.imageAlt,
                              "image-src": X.imageSrc,
                              "is-active": !!t.selected.find((_) => _.value === X.value),
                              "is-highlighted": b.value === X.value,
                              label: X.label,
                              type: "button",
                              onClick: (_) => P(X.value)
                            }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : te("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1024),
                      c(ei)(O) ? (g(), R(Ma, {
                        ref_for: !0,
                        ref: "optionElements",
                        key: `item-${Y}`,
                        command: O.command,
                        "command-icon": O.commandIcon,
                        "icon-leading": O.icon,
                        "image-alt": O.imageAlt,
                        "image-src": O.imageSrc,
                        "is-active": !!t.selected.find((X) => X.value === O.value),
                        "is-highlighted": b.value === O.value,
                        label: O.label,
                        type: "button",
                        onClick: (X) => P(O.value)
                      }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : te("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["class", "anchor"])) : te("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
});
const lb = `.${Lt.overlayProvider.replaceAll(" ", ".")}`;
function ob(t, e, n, s, i, r) {
  let a = null, l = 0;
  const o = ne();
  X0(o), rs(() => {
    a?.();
  }), Oe(o, (d, f, p) => {
    d && (d.addEventListener("keydown", u, { passive: !0 }), d.focus(), p(() => {
      d.removeEventListener("keydown", u);
    }));
  });
  function u(d) {
    d.key !== "Escape" || !a || !e.isCloseable || n("close");
  }
  return () => {
    const { dialogCount: d } = yi(), f = R0(s.default?.() ?? []), p = f.length > 0 && f.some((v) => v.type !== Qe);
    let h;
    return p ? (a || ([l, a] = Qc()), h = ks("div", {
      key: e.viewKey,
      ref: o,
      class: [i, l === d && Lt.isCurrent],
      style: {
        zIndex: l + 1e3
      },
      tabindex: 0
    }, f)) : (a?.(), a = null), ks(oc, { defer: !0, disabled: !h, to: lb }, [
      ks(r, t, {
        default: () => h
      })
    ]);
  };
}
const ub = "divider", cb = "dividerContentStart divider", db = "dividerContentCenter divider", fb = "dividerContentEnd divider", hb = "dividerContent", mb = "dividerLine", pb = "separator", gb = "separatorHorizontal separator", vb = "separatorVertical separator";
var wu = { divider: ub, dividerContentStart: cb, dividerContentCenter: db, dividerContentEnd: fb, dividerContent: hb, dividerLine: mb, separator: pb, separatorHorizontal: gb, separatorVertical: vb };
const yb = ["aria-orientation"];
var bb = /* @__PURE__ */ W({
  __name: "FluxSeparator",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(t.direction === "horizontal" ? c(wu).separatorHorizontal : c(wu).separatorVertical),
      role: "separator",
      "aria-orientation": t.direction
    }, null, 10, yb));
  }
});
const kb = { key: 1 };
var Iu = /* @__PURE__ */ W({
  __name: "FluxFormFieldAddition",
  props: {
    icon: {},
    message: {},
    mode: { default: "hint" }
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(xt)(
        t.mode === "error" && c(he).formFieldAdditionError,
        t.mode === "hint" && c(he).formFieldAdditionHint
      )),
      role: "alert"
    }, [
      t.icon ? (g(), R(rt, {
        key: 0,
        class: w(c(he).formFieldAdditionIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : te("", !0),
      t.message ? (g(), V("span", kb, fe(t.message), 1)) : te("", !0),
      oe(e.$slots, "default")
    ], 2));
  }
});
const wb = ["for"];
var Zn = /* @__PURE__ */ W({
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
    const e = mh(), n = kl(), s = Si();
    return On(Gc, {
      id: n
    }), (i, r) => (g(), V("div", {
      class: w(c(he).formField)
    }, [
      de("label", {
        for: c(n),
        class: w(c(he).formFieldHeader)
      }, [
        de("span", {
          class: w(c(he).formFieldLabel)
        }, fe(t.label), 3),
        t.isOptional ? (g(), V("span", {
          key: 0,
          class: w(c(he).formFieldOptional)
        }, " (" + fe(c(s)("flux.optional")) + ") ", 3)) : te("", !0),
        "value" in e ? (g(), V("span", {
          key: 1,
          class: w(c(he).formFieldValue)
        }, [
          oe(i.$slots, "value", la(Gi({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
        ], 2)) : te("", !0)
      ], 10, wb),
      oe(i.$slots, "default", la(Gi({ id: c(n) }))),
      t.currentLength && t.maxLength && t.maxLength > 0 ? (g(), V("span", {
        key: 0,
        class: w(c(he).formFieldCounter)
      }, fe(t.currentLength) + " / " + fe(t.maxLength), 3)) : te("", !0),
      t.error ? (g(), R(Iu, {
        key: 1,
        icon: "circle-exclamation",
        mode: "error",
        message: t.error
      }, null, 8, ["message"])) : te("", !0),
      t.hint ? (g(), R(Iu, {
        key: 2,
        icon: "circle-info",
        message: t.hint
      }, null, 8, ["message"])) : te("", !0),
      oe(i.$slots, "addition", la(Gi({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
    ], 2));
  }
}), Yr = /* @__PURE__ */ W({
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
    return (e, n) => (g(), R(jr, It({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(ns).primaryButton,
      "css-class-icon": c(ns).primaryButtonIcon,
      "css-class-label": c(ns).primaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), Sl({ _: 2 }, [
      Ze(c(hf), (s) => ({
        name: s,
        fn: U(() => [
          oe(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
}), Su = /* @__PURE__ */ W({
  __name: "FluxFormSelect",
  props: /* @__PURE__ */ Vt({
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
    const e = ct(t, "searchQuery"), n = ct(t, "modelValue"), s = Fs(pn(() => t.disabled)), { groups: i, selected: r, values: a } = eg(n, t.isMultiple, pn(() => t.options), e);
    function l(u) {
      c(t.isMultiple) && (n.value = c(a).filter((d) => d !== u));
    }
    function o(u) {
      c(t.isMultiple) ? n.value = [...c(a), u] : n.value = u;
    }
    return (u, d) => (g(), R(c(ab), {
      searchQuery: e.value,
      "onUpdate:searchQuery": d[0] || (d[0] = (f) => e.value = f),
      disabled: c(s),
      "is-multiple": t.isMultiple,
      "is-searchable": t.isSearchable,
      options: c(i),
      placeholder: t.placeholder,
      selected: c(r),
      onDeselect: l,
      onSelect: o
    }, null, 8, ["searchQuery", "disabled", "is-multiple", "is-searchable", "options", "placeholder", "selected"]));
  }
}), Ib = /* @__PURE__ */ W({
  inheritAttrs: !1,
  __name: "FluxDisabled",
  props: {
    disabled: { type: Boolean, default: !0 }
  },
  setup(t) {
    return On(jc, pn(() => t.disabled)), (e, n) => oe(e.$slots, "default");
  }
}), Sb = /* @__PURE__ */ W({
  __name: "FluxFormColumn",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(he).formColumn)
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
}), zl = /* @__PURE__ */ W({
  __name: "FluxPaneFooter",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(Gt).paneFooter)
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const Tb = ["aria-disabled"];
var Cb = /* @__PURE__ */ W({
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
    return (i, r) => (g(), R(Ib, { disabled: t.disabled }, {
      default: U(() => [
        de("form", {
          class: w(c(he).form),
          "aria-disabled": t.disabled ? !0 : void 0,
          onSubmit: r[0] || (r[0] = Fl((a) => s(), ["prevent"]))
        }, [
          oe(i.$slots, "default")
        ], 42, Tb)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
}), xb = /* @__PURE__ */ W({
  __name: "FluxFormInputGroup",
  props: {
    isSecondary: { type: Boolean },
    isCondensed: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(xt)(
        c(he).formInputGroup,
        t.isCondensed && c(he).isCondensed,
        t.isSecondary && c(he).isSecondary
      )),
      role: "textbox"
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const Eb = ["id", "autocomplete", "autofocus", "disabled", "maxlength", "placeholder", "aria-disabled"];
var Fb = /* @__PURE__ */ W({
  __name: "FluxFormTextArea",
  props: /* @__PURE__ */ Vt({
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
  emits: /* @__PURE__ */ Vt(["blur", "focus"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const n = e, s = ct(t, "modelValue"), i = Fs(pn(() => t.disabled)), { id: r } = Ll();
    return (a, l) => yl((g(), V("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (o) => s.value = o),
      ref: "input",
      class: w(c(i) ? c(he).formTextAreaDisabled : c(he).formTextAreaEnabled),
      id: c(r),
      autocomplete: t.autoComplete,
      autofocus: t.autoFocus,
      disabled: c(i),
      maxlength: t.maxLength,
      placeholder: t.placeholder,
      style: We({
        "--rows": t.rows
      }),
      "aria-disabled": c(i) ? !0 : void 0,
      onBlur: l[1] || (l[1] = (o) => n("blur")),
      onFocus: l[2] || (l[2] = (o) => n("focus"))
    }, null, 46, Eb)), [
      [cr, s.value]
    ]);
  }
}), Qi = W({
  emits: ["close"],
  inheritAttrs: !1,
  props: {
    isCloseable: { default: !1, type: Boolean },
    size: { default: "small", type: String }
  },
  setup(t, { attrs: e, emit: n, slots: s }) {
    return ob(
      e,
      t,
      n,
      s,
      xt(
        t.size === "small" && Lt.overlaySmall,
        t.size === "medium" && Lt.overlayMedium,
        t.size === "large" && Lt.overlayLarge
      ),
      $y
    );
  }
});
const Ab = { key: 0 }, $b = { key: 1 };
var Jr = /* @__PURE__ */ W({
  __name: "FluxPaneHeader",
  props: {
    icon: {},
    subTitle: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(c(Gt).paneHeader)
    }, [
      oe(e.$slots, "before"),
      t.icon ? (g(), R(rt, {
        key: 0,
        class: w(c(Gt).paneHeaderIcon),
        size: 20,
        name: t.icon
      }, null, 8, ["class", "name"])) : te("", !0),
      t.title || t.subTitle ? (g(), V("div", {
        key: 1,
        class: w(c(Gt).paneHeaderCaption)
      }, [
        t.title ? (g(), V("strong", Ab, fe(t.title), 1)) : te("", !0),
        t.subTitle ? (g(), V("span", $b, fe(t.subTitle), 1)) : te("", !0)
      ], 2)) : te("", !0),
      oe(e.$slots, "after")
    ], 2));
  }
}), Lb = /* @__PURE__ */ W({
  __name: "FluxAlert",
  props: {
    alert: {}
  },
  setup(t) {
    const e = Si();
    return (n, s) => (g(), R(Gr, null, {
      default: U(() => [
        B(Jr, {
          icon: t.alert.icon,
          title: t.alert.title
        }, null, 8, ["icon", "title"]),
        B(mi, {
          innerHTML: t.alert.message
        }, null, 8, ["innerHTML"]),
        B(zl, null, {
          default: U(() => [
            B(Zr),
            B(Yr, {
              "icon-leading": "circle-check",
              label: c(e)("flux.ok"),
              onClick: s[0] || (s[0] = (i) => t.alert.onClose())
            }, null, 8, ["label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Mb = /* @__PURE__ */ W({
  __name: "FluxConfirm",
  props: {
    confirm: {}
  },
  setup(t) {
    const e = Si();
    return (n, s) => (g(), R(Gr, null, {
      default: U(() => [
        B(Jr, {
          icon: t.confirm.icon,
          title: t.confirm.title
        }, null, 8, ["icon", "title"]),
        B(mi, {
          innerHTML: t.confirm.message
        }, null, 8, ["innerHTML"]),
        B(zl, null, {
          default: U(() => [
            B(Zr),
            B(Es, {
              label: c(e)("flux.cancel"),
              onClick: s[0] || (s[0] = (i) => t.confirm.onCancel())
            }, null, 8, ["label"]),
            B(Yr, {
              "icon-leading": "circle-check",
              label: c(e)("flux.ok"),
              onClick: s[1] || (s[1] = (i) => t.confirm.onConfirm())
            }, null, 8, ["label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Db = /* @__PURE__ */ W({
  __name: "FluxPrompt",
  props: {
    prompt: {}
  },
  setup(t) {
    const e = un("input"), n = Si(), s = ne(""), i = ye(() => c(s).trim().length > 0);
    yn(() => {
      const a = c(e);
      requestAnimationFrame(() => a?.$el.querySelector("input")?.focus());
    });
    function r(a) {
      !c(i) || a.key !== "Enter" || t.prompt.onConfirm(c(s));
    }
    return (a, l) => (g(), R(Gr, null, {
      default: U(() => [
        B(Jr, {
          icon: t.prompt.icon,
          title: t.prompt.title
        }, null, 8, ["icon", "title"]),
        B(mi, {
          innerHTML: t.prompt.message
        }, null, 8, ["innerHTML"]),
        B(mi, null, {
          default: U(() => [
            B(Zn, {
              label: t.prompt.fieldLabel
            }, {
              default: U(() => [
                B(si, {
                  ref: "input",
                  modelValue: s.value,
                  "onUpdate:modelValue": l[0] || (l[0] = (o) => s.value = o),
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
        B(zl, null, {
          default: U(() => [
            B(Zr),
            B(Es, {
              label: c(n)("flux.cancel"),
              onClick: l[1] || (l[1] = (o) => t.prompt.onCancel())
            }, null, 8, ["label"]),
            B(Yr, {
              disabled: !i.value,
              "icon-leading": "circle-check",
              label: c(n)("flux.ok"),
              onClick: l[2] || (l[2] = (o) => t.prompt.onConfirm(s.value))
            }, null, 8, ["disabled", "label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ob = /* @__PURE__ */ W({
  __name: "FluxOverlayProvider",
  setup(t) {
    const { alerts: e, confirms: n, prompts: s } = yi();
    return (i, r) => (g(), V(me, null, [
      de("div", {
        class: w(c(Lt).overlayProvider)
      }, [
        de("div", {
          class: w(c(Lt).overlayShade)
        }, null, 2)
      ], 2),
      B(Qi, { size: "medium" }, {
        default: U(() => [
          (g(!0), V(me, null, Ze(c(e), (a) => (g(), R(Lb, {
            key: a.id,
            alert: a
          }, null, 8, ["alert"]))), 128))
        ]),
        _: 1
      }),
      B(Qi, { size: "medium" }, {
        default: U(() => [
          (g(!0), V(me, null, Ze(c(n), (a) => (g(), R(Mb, {
            key: a.id,
            confirm: a
          }, null, 8, ["confirm"]))), 128))
        ]),
        _: 1
      }),
      B(Qi, { size: "medium" }, {
        default: U(() => [
          (g(!0), V(me, null, Ze(c(s), (a) => (g(), R(Db, {
            key: a.id,
            prompt: a
          }, null, 8, ["prompt"]))), 128))
        ]),
        _: 1
      })
    ], 64));
  }
});
const Bb = "progressBar", Vb = "progressBarTrack", Nb = "progressBarValue", _b = "progressBarValueComplete progressBarValue", Rb = "progressBarValueIncomplete progressBarValue", Pb = "progressBarTrackIndeterminate progressBarTrack", zb = "progressBarIndeterminate", Hb = "progressBarInfo", Wb = "progressBarProgress", Ub = "progressBarStatus", qb = "basePaneStructure";
var Sn = { progressBar: Bb, progressBarTrack: Vb, progressBarValue: Nb, progressBarValueComplete: _b, progressBarValueIncomplete: Rb, progressBarTrackIndeterminate: Pb, progressBarIndeterminate: zb, progressBarInfo: Hb, progressBarProgress: Wb, progressBarStatus: Ub, basePaneStructure: qb }, jb = /* @__PURE__ */ W({
  __name: "FluxProgressBar",
  props: {
    isIndeterminate: { type: Boolean },
    max: { default: 1 },
    min: { default: 0 },
    status: {},
    value: {}
  },
  setup(t) {
    const e = ye(() => t.isIndeterminate ? 0 : ((t.value ?? t.min) - t.min) / (t.max - t.min)), n = ye(() => new Intl.NumberFormat(navigator.language, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(c(e) ?? 0));
    return (s, i) => (g(), R(mf, {
      class: w(c(Sn).progressBar),
      gap: 6,
      role: "progressbar",
      "aria-valuenow": t.value,
      "aria-valuemax": t.max,
      "aria-valuemin": t.min
    }, {
      default: U(() => [
        de("div", {
          class: w(t.isIndeterminate ? c(Sn).progressBarTrackIndeterminate : c(Sn).progressBarTrack)
        }, [
          de("div", {
            class: w(e.value >= 1 ? c(Sn).progressBarValueComplete : c(Sn).progressBarValueIncomplete),
            style: We({
              width: `${t.isIndeterminate ? 100 : e.value * 100}%`
            })
          }, null, 6)
        ], 2),
        t.status ? (g(), V("div", {
          key: 0,
          class: w(c(Sn).progressBarInfo)
        }, [
          B(c(ul), null, {
            default: U(() => [
              (g(), V("span", {
                key: t.status,
                class: w(c(Sn).progressBarStatus)
              }, fe(t.status), 3))
            ]),
            _: 1
          }),
          B(c(ul), null, {
            default: U(() => [
              t.isIndeterminate ? te("", !0) : (g(), V("span", {
                key: 0,
                class: w(c(Sn).progressBarProgress)
              }, fe(n.value), 3))
            ]),
            _: 1
          })
        ], 2)) : te("", !0)
      ]),
      _: 1
    }, 8, ["class", "aria-valuenow", "aria-valuemax", "aria-valuemin"]));
  }
});
const Gb = ["disabled", "max", "min", "step"];
var Zb = /* @__PURE__ */ W({
  __name: "FluxQuantitySelector",
  props: /* @__PURE__ */ Vt({
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
    const e = ct(t, "modelValue"), n = Fs(pn(() => t.disabled)), s = un("input"), i = ne(0);
    function r() {
      c(n) || (e.value = Math.max(t.min, c(e) - t.step));
    }
    function a() {
      c(n) || (e.value = Math.min(t.max, c(e) + t.step));
    }
    function l() {
      const o = ft(s);
      !o || isNaN(o.valueAsNumber) || (i.value = 0, requestAnimationFrame(() => {
        i.value = Math.max(51, o.scrollWidth + 30);
      }));
    }
    return Mr(() => {
      if (c(e) > t.max) {
        a();
        return;
      }
      if (c(e) < t.min) {
        r();
        return;
      }
      l();
    }), (o, u) => (g(), R(Dg, {
      class: w(c(he).quantitySelector),
      "aria-disabled": c(n) ? !0 : void 0
    }, {
      default: U(() => [
        B(Es, {
          class: w(c(he).quantitySelectorButton),
          disabled: c(n) || e.value <= t.min,
          "icon-leading": "minus",
          tabindex: "-1",
          onClick: r
        }, null, 8, ["class", "disabled"]),
        yl(de("input", {
          ref: "input",
          "onUpdate:modelValue": u[0] || (u[0] = (d) => e.value = d),
          class: w(c(he).quantitySelectorInput),
          style: We({
            width: `${i.value}px`
          }),
          disabled: c(n),
          tabindex: "0",
          type: "number",
          max: t.max,
          min: t.min,
          step: t.step
        }, null, 14, Gb), [
          [cr, e.value]
        ]),
        B(Es, {
          class: w(c(he).quantitySelectorButton),
          disabled: c(n) || e.value >= t.max,
          "icon-leading": "plus",
          tabindex: "-1",
          onClick: a
        }, null, 8, ["class", "disabled"])
      ]),
      _: 1
    }, 8, ["class", "aria-disabled"]));
  }
});
const { basePane: ls } = qr, Yb = `snackbar ${ls}`, Jb = "action", Kb = "progressBar", Qb = "progressBarTrack", Xb = "snackbarContent", ek = "icon", tk = "spinner", nk = "snackbarBody", sk = "snackbarMessage", ik = "snackbarSubMessage", rk = "snackbarTitle", ak = "snackbarAction", lk = "snackbarActions", ok = `snackbarGray snackbar ${ls}`, uk = `snackbarPrimary snackbar ${ls}`, ck = "spinnerEffect", dk = "spinnerValue", fk = `snackbarDanger snackbar ${ls}`, hk = `snackbarInfo snackbar ${ls}`, mk = `snackbarSuccess snackbar ${ls}`, pk = `snackbarWarning snackbar ${ls}`, gk = "snackbars", vk = "snackbarsEnterActive", yk = "snackbarsLeaveActive", bk = "snackbarsMove", kk = "snackbarsEnterFrom", wk = "snackbarsLeaveTo";
var qe = { snackbar: Yb, action: Jb, progressBar: Kb, progressBarTrack: Qb, snackbarContent: Xb, icon: ek, spinner: tk, snackbarBody: nk, snackbarMessage: sk, snackbarSubMessage: ik, snackbarTitle: rk, snackbarAction: ak, snackbarActions: lk, snackbarGray: ok, snackbarPrimary: uk, spinnerEffect: ck, spinnerValue: dk, snackbarDanger: fk, snackbarInfo: hk, snackbarSuccess: mk, snackbarWarning: pk, snackbars: gk, snackbarsEnterActive: vk, snackbarsLeaveActive: yk, snackbarsMove: bk, snackbarsEnterFrom: kk, snackbarsLeaveTo: wk };
const Ik = ["onClick"];
var Sk = /* @__PURE__ */ W({
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
    const n = e, s = Qt(), i = ne(null), r = ye(() => t.actions && Object.entries(t.actions).length > 0);
    wl(() => {
      i.value && dr(i.value);
    });
    function a(o) {
      n("action", o);
    }
    function l() {
      n("close");
    }
    return Mr(() => {
      i.value && ed(i.value, s.props);
    }), Oe(() => t.isRendered, () => {
      if (t.isRendered) {
        i.value && dr(i.value);
        return;
      }
      let o = s.props;
      o.onAction = a, o.onClose = l, i.value = Al(o);
    }, { immediate: !0 }), (o, u) => t.isRendered ? (g(), V("div", {
      key: 0,
      class: w(c(xt)(
        t.color === "gray" && c(qe).snackbarGray,
        t.color === "primary" && c(qe).snackbarPrimary,
        t.color === "danger" && c(qe).snackbarDanger,
        t.color === "info" && c(qe).snackbarInfo,
        t.color === "success" && c(qe).snackbarSuccess,
        t.color === "warning" && c(qe).snackbarWarning
      ))
    }, [
      de("div", {
        class: w(c(qe).snackbarContent)
      }, [
        t.isLoading ? (g(), R(_n, {
          key: 0,
          size: 18
        })) : t.icon ? (g(), R(rt, {
          key: 1,
          size: 18,
          name: t.icon
        }, null, 8, ["name"])) : te("", !0),
        de("div", {
          class: w(c(qe).snackbarBody)
        }, [
          t.title ? (g(), V("div", {
            key: 0,
            class: w(c(qe).snackbarTitle)
          }, fe(t.title), 3)) : te("", !0),
          t.message ? (g(), V("div", {
            key: 1,
            class: w(c(qe).snackbarMessage)
          }, fe(t.message), 3)) : te("", !0),
          t.progressIndeterminate || t.progressValue ? (g(), R(jb, {
            key: 2,
            "is-indeterminate": t.progressIndeterminate,
            max: t.progressMax,
            min: t.progressMin,
            status: t.progressStatus,
            value: t.progressValue
          }, null, 8, ["is-indeterminate", "max", "min", "status", "value"])) : te("", !0),
          t.subMessage ? (g(), V("div", {
            key: 3,
            class: w(c(qe).snackbarSubMessage)
          }, fe(t.subMessage), 3)) : te("", !0)
        ], 2)
      ], 2),
      r.value ? (g(), V("div", {
        key: 0,
        class: w(c(qe).snackbarActions)
      }, [
        (g(!0), V(me, null, Ze(t.actions, (d, f) => (g(), V("button", {
          key: f,
          class: w(c(qe).snackbarAction),
          tabindex: "-1",
          type: "button",
          onClick: (p) => a(f)
        }, [
          de("span", null, fe(d), 1)
        ], 10, Ik))), 128))
      ], 2)) : te("", !0),
      t.isCloseable ? (g(), R(X1, {
        key: 1,
        icon: "xmark",
        onClick: u[0] || (u[0] = (d) => l())
      })) : te("", !0)
    ], 2)) : te("", !0);
  }
}), Tk = /* @__PURE__ */ W({
  __name: "FluxSnackbarProvider",
  setup(t) {
    const { snackbars: e } = yi();
    function n(s) {
      return (i) => s.onAction?.(i);
    }
    return (s, i) => (g(), R(Wc, {
      name: "flux-snackbars",
      tag: "div",
      class: w(c(qe).snackbars),
      "enter-active-class": c(qe).snackbarsEnterActive,
      "enter-from-class": c(qe).snackbarsEnterFrom,
      "leave-active-class": c(qe).snackbarsLeaveActive,
      "leave-to-class": c(qe).snackbarsLeaveTo,
      "move-class": c(qe).snackbarsMove
    }, {
      default: U(() => [
        (g(!0), V(me, null, Ze(c(e).toReversed(), (r) => (g(), R(Sk, It({
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
const Ck = "tooltip", xk = "tooltipAbove tooltip", Ek = "tooltipBelow tooltip", Fk = "tooltipEnd tooltip", Ak = "tooltipStart tooltip";
var zs = { tooltip: Ck, tooltipAbove: xk, tooltipBelow: Ek, tooltipEnd: Fk, tooltipStart: Ak }, $k = W(() => {
  const { tooltip: t } = yi(), e = ne(null), n = ne(null), s = ye(() => c(t) ? c(t).contentSlot?.() ?? [c(t).content] : null), i = ye(() => !!c(t));
  function r() {
    const a = ft(e), l = c(t);
    if (!l || !a || !c(s)) {
      n.value = null;
      return;
    }
    const { direction: o, origin: u } = l, d = 9, f = 15;
    if (!u) {
      n.value = null;
      return;
    }
    let { width: p, height: h } = a.getBoundingClientRect();
    const { scale: v } = getComputedStyle(a), { top: b, left: A, width: S, height: P } = u.getBoundingClientRect();
    let C = Number(v ?? 1);
    C = isNaN(C) ? 1 : C, h /= C, p /= C, o === "horizontal" ? n.value = Lk(b, A, p, h, S, P, d, f) : n.value = Mk(b, A, p, h, S, P, d, f);
  }
  return On(cm, {
    calculate: r
  }), Oe(s, () => requestAnimationFrame(r)), () => ks(Ly, {}, {
    default: () => {
      if (!c(i))
        return;
      const a = c(n);
      return ks("div", {
        ref: e,
        class: a ? xt(
          a.transition === "above" && zs.tooltipAbove,
          a.transition === "below" && zs.tooltipBelow,
          a.transition === "end" && zs.tooltipEnd,
          a.transition === "start" && zs.tooltipStart
        ) : zs.tooltip,
        style: {
          "--x": a?.x ?? void 0,
          "--y": a?.y ?? void 0,
          "--arrowAngle": a?.arrowAngle ?? void 0,
          "--arrowX": a?.arrowX ?? void 0,
          "--arrowY": a?.arrowY ?? void 0
        }
      }, c(s));
    }
  });
});
function Lk(t, e, n, s, i, r, a, l) {
  let o, u, d, f, p, h;
  if (e > innerWidth / 2 ? (o = e - n - a, u = t + r / 2 - s / 2, d = "315deg", f = "100%", p = "50%", h = "start") : (o = e + i + a, u = t + r / 2 - s / 2, d = "135deg", f = "0", p = "50%", h = "end"), u + s > innerHeight - l) {
    const v = Math.min(u, innerHeight - s - l) - u;
    p = `calc(50% - ${v}px)`, u += v;
  }
  if (u < l) {
    const v = Math.max(u, l) - u;
    p = `calc(50% - ${v}px)`, u += v;
  }
  return {
    x: Math.round(o),
    y: Math.round(u),
    arrowAngle: d,
    arrowX: f,
    arrowY: p,
    transition: h
  };
}
function Mk(t, e, n, s, i, r, a, l) {
  let o, u, d, f, p, h;
  if (t > 300 ? (o = e + i / 2 - n / 2, u = t - s - a, d = "45deg", f = "50%", p = "100%", h = "above") : (o = e + i / 2 - n / 2, u = t + r + a, d = "225deg", f = "50%", p = "0", h = "below"), o + n > innerWidth - l) {
    const v = Math.min(o, innerWidth - n - l) - o;
    f = `calc(50% - ${v}px)`, o += v;
  }
  if (o < l) {
    const v = Math.max(o, l) - o;
    f = `calc(50% - ${v}px)`, o += v;
  }
  return {
    x: Math.round(o),
    y: Math.round(u),
    arrowAngle: d,
    arrowX: f,
    arrowY: p,
    transition: h
  };
}
const Dk = "root", Ok = "isLocked";
var Da = { root: Dk, isLocked: Ok };
const Bk = ["inert"];
var Vk = /* @__PURE__ */ W({
  inheritAttrs: !1,
  __name: "FluxRoot",
  setup(t) {
    const { inertMain: e } = yi();
    return Oe(e, (n, s, i) => {
      n && (document.body.classList.add(Da.isLocked), i(() => document.body.classList.remove(Da.isLocked)));
    }, { immediate: !0 }), (n, s) => (g(), V(me, null, [
      de("div", It(n.$attrs, {
        class: c(Da).root,
        inert: c(e)
      }), [
        oe(n.$slots, "default")
      ], 16, Bk),
      B(Ob),
      B(Tk),
      B($k)
    ], 64));
  }
});
const cl = Qu(re.now().startOf("day"));
let Tu = !1;
function gf() {
  const t = re.now().startOf("day");
  +t != +cl.value && (cl.value = t), window.setTimeout(gf, t.plus({ days: 1 }).diff(re.now()).toMillis());
}
function vf() {
  return Tu || (Tu = !0, gf()), Zf(cl);
}
function _t() {
  return (t) => Homey.__(t) ?? t;
}
function Nk(t, e) {
  const n = /* @__PURE__ */ Rm(t, e);
  return () => {
    const s = n(), i = Object.getOwnPropertyNames(s), r = Pm(s), a = {};
    for (const l of i)
      if (!(l.startsWith("$") || l.startsWith("_"))) {
        if (l in r) {
          a[l] = r[l];
          continue;
        }
        a[l] = s[l];
      }
    return a;
  };
}
function yf(t, e) {
  return re.fromFormat(t, "yyyy-MM-dd").isValid || (t = re.fromFormat(t, "dd-MM-yyyy").toFormat("yyyy-MM-dd")), e ? re.fromFormat(`${t} ${e.length === 5 ? `${e}:00` : e}`, "yyyy-MM-dd HH:mm:ss") : re.fromFormat(t, "yyyy-MM-dd").endOf("day");
}
const Hs = {
  date: "all",
  type: "all",
  personId: null
};
function _k(t) {
  return t === "no_date" || t === "due_by_today" || t === "upcoming" ? t : "all";
}
function Rk(t) {
  return t === "note" || t === "product" || t === "task" ? t : "all";
}
var Hl = Nk("list", () => {
  const t = ne([]), e = ne({ ...Hs }), n = ne(!0), s = ne([]), i = ne(null), r = ne([]), a = vf(), l = ye(() => c(i)?.type === "grocery_list" ? ["all", "note", "product"] : ["all", "note", "task"]), o = ye(() => S(c(e).type)), u = ye(() => {
    const k = c(e), _ = c(a), ee = k.date !== "all" || k.personId !== null;
    return c(s).filter((Q) => {
      if (k.type !== "all" && Q.type !== k.type)
        return !1;
      if (Q.type !== "task")
        return !ee;
      if (k.personId !== null && Q.person?.id !== k.personId)
        return !1;
      if (k.date === "all")
        return !0;
      const ve = Q.dueDate ? yf(Q.dueDate, Q.dueTime) : void 0, ie = ve?.isValid ? ve.startOf("day") : void 0;
      return k.date === "no_date" ? ie === void 0 : ie === void 0 ? !1 : k.date === "due_by_today" ? ie <= _ : ie > _;
    });
  }), d = ye(() => v(c(u))), f = ye(() => {
    const k = c(e);
    return k.date !== Hs.date || k.type !== Hs.type || k.personId !== Hs.personId;
  }), p = ye(() => c(u).length > 0), h = ye(() => c(s).length > 0);
  function v(k) {
    const _ = Object.groupBy(k, (Q) => Q.category || "__other__"), ee = Object.entries(_).sort(([Q], [ve]) => {
      if (Q === "__other__") return 1;
      if (ve === "__other__") return -1;
      const ie = c(t).findIndex((Ie) => Ie.category === Q), pe = c(t).findIndex((Ie) => Ie.category === ve);
      return ie - pe;
    });
    return Object.fromEntries(ee);
  }
  async function b(k, _, ee) {
    const Q = c(s).findIndex((ve) => ve.id === _.id);
    Q !== -1 && (s.value[Q].checked = ee, ee ? await Homey.api("POST", `/${k}/items/${_.id}/checked`) : await Homey.api("POST", `/${k}/items/${_.id}/unchecked`));
  }
  async function A(k, _, ee) {
    const Q = c(s).findIndex((ve) => ve.id === _.id);
    Q === -1 || _.quantity === void 0 || (s.value[Q].quantity = ee === "increase" ? _.quantity + 1 : _.quantity - 1, await Homey.api("POST", `/${k}/items/${_.id}/quantity`, {
      quantity: ee === "increase" ? 1 : -1
    }));
  }
  function S(k) {
    return c(l).includes("task") && (k === "all" || k === "task");
  }
  function P(k, _) {
    e.value = {
      date: _,
      type: k,
      personId: null
    };
  }
  async function C(k) {
    n.value = !0, t.value = await Homey.api("GET", `/${k}/categories`), n.value = !1;
  }
  async function z(k) {
    n.value = !0, await X(
      await Homey.api("GET", `/${k}/items`)
    ), n.value = !1;
  }
  async function I(k) {
    n.value = !0, i.value = await Homey.api("GET", `/${k}`), Y(c(e)), n.value = !1;
  }
  async function $(k) {
    n.value = !0, r.value = await Homey.api("GET", `/${k}/persons`), n.value = !1;
  }
  async function Z(k, _) {
    const ee = c(s).findIndex((Q) => Q.id === _.id);
    ee !== -1 && (s.value.splice(ee, 1), await Homey.api("DELETE", `/${k}/items/${_.id}`));
  }
  function O() {
    e.value = { ...Hs };
  }
  function D(k, _) {
    Y({
      ...c(e),
      [k]: _
    });
  }
  function Y(k) {
    const _ = c(l).includes(k.type) ? k.type : "all", ee = S(_);
    e.value = {
      date: ee ? k.date : "all",
      type: _,
      personId: ee ? k.personId : null
    };
  }
  async function X(k) {
    s.value = k;
  }
  return {
    categories: sn(t),
    filters: sn(e),
    isLoading: sn(n),
    items: sn(s),
    look: sn(i),
    persons: sn(r),
    availableTypeFilters: l,
    canFilterByTaskFields: o,
    filteredCategorizedItems: d,
    hasActiveFilters: f,
    hasFilteredItems: p,
    hasItems: h,
    changeChecked: b,
    changeQuantity: A,
    initFilters: P,
    loadCategories: C,
    loadItems: z,
    loadLook: I,
    loadPersons: $,
    removeItem: Z,
    resetFilters: O,
    setFilter: D,
    setItems: X
  };
}), bf = /* @__PURE__ */ W({
  __name: "ListForm",
  props: /* @__PURE__ */ Vt({
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
  emits: /* @__PURE__ */ Vt(["close", "save"], ["update:category", "update:content", "update:person", "update:dueDate", "update:dueTime", "update:quantity"]),
  setup(t, { emit: e }) {
    const n = e, s = ct(t, "category"), i = ct(t, "content"), r = ct(t, "person"), a = ct(t, "dueDate"), l = ct(t, "dueTime"), o = ct(t, "quantity"), u = _t(), {
      categories: d,
      persons: f,
      loadCategories: p,
      loadPersons: h
    } = Hl(), v = ye(() => c(i).trim().length > 2), b = ye(() => c(d).map((z) => ({
      label: u(`grocery.category.${z.category}`),
      icon: z.icon,
      value: z.category
    }))), A = ye(() => [
      { value: null, label: u("widget.list.add.anyone") },
      ...c(f).map((z) => ({
        label: z.name,
        imageSrc: z.image,
        value: z.id
      }))
    ]);
    yn(async () => {
      await Promise.allSettled([
        p(t.deviceId),
        h(t.deviceId)
      ]);
    });
    function S() {
      a.value = null, l.value = null;
    }
    async function P() {
      n("close");
    }
    async function C() {
      n("save");
    }
    return (z, I) => (g(), R(c(Gr), { style: { "max-height": "calc(100dvh - 30px)", width: "calc(100dvw - 30px)", "overflow-x": "hidden" } }, {
      default: U(() => [
        B(c(Jr), { title: t.title }, null, 8, ["title"]),
        B(c(mi), null, {
          default: U(() => [
            B(c(Cb), null, {
              default: U(() => [
                B(c(Sb), null, {
                  default: U(() => [
                    t.type === "product" ? (g(), V(me, { key: 0 }, [
                      B(c(Zn), {
                        label: c(u)("widget.list.add.product")
                      }, {
                        default: U(() => [
                          B(c(si), {
                            modelValue: i.value,
                            "onUpdate:modelValue": I[0] || (I[0] = ($) => i.value = $)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      B(c(Zn), {
                        "is-optional": "",
                        label: c(u)("widget.list.add.category")
                      }, {
                        default: U(() => [
                          B(c(Su), {
                            modelValue: s.value,
                            "onUpdate:modelValue": I[1] || (I[1] = ($) => s.value = $),
                            options: b.value
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      B(c(Zn), {
                        label: c(u)("widget.list.add.quantity")
                      }, {
                        default: U(() => [
                          B(c(Zb), {
                            modelValue: o.value,
                            "onUpdate:modelValue": I[2] || (I[2] = ($) => o.value = $),
                            min: 1,
                            step: 1,
                            style: { "align-self": "start" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ], 64)) : (g(), R(c(Zn), {
                      key: 1,
                      label: c(u)("widget.list.add.content")
                    }, {
                      default: U(() => [
                        B(c(Fb), {
                          modelValue: i.value,
                          "onUpdate:modelValue": I[3] || (I[3] = ($) => i.value = $),
                          rows: 2
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])),
                    t.type === "task" ? (g(), R(c(Zn), {
                      key: 2,
                      "is-optional": "",
                      label: c(u)("widget.list.add.person")
                    }, {
                      default: U(() => [
                        B(c(Su), {
                          modelValue: r.value,
                          "onUpdate:modelValue": I[4] || (I[4] = ($) => r.value = $),
                          options: A.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : te("", !0),
                    t.type === "task" ? (g(), R(c(Zn), {
                      key: 3,
                      "is-optional": "",
                      label: c(u)("widget.list.add.due")
                    }, {
                      default: U(() => [
                        B(c(xb), null, {
                          default: U(() => [
                            B(c(si), {
                              modelValue: a.value,
                              "onUpdate:modelValue": I[5] || (I[5] = ($) => a.value = $),
                              type: "date"
                            }, null, 8, ["modelValue"]),
                            B(c(bb), { direction: "vertical" }),
                            B(c(si), {
                              modelValue: l.value,
                              "onUpdate:modelValue": I[6] || (I[6] = ($) => l.value = $),
                              type: "time"
                            }, null, 8, ["modelValue"]),
                            B(c(Es), {
                              "icon-leading": "trash",
                              onClick: I[7] || (I[7] = ($) => S())
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : te("", !0),
                    B(c(yv), { style: { width: "100%" } }, {
                      default: U(() => [
                        B(c(Es), {
                          label: c(u)("widget.list.add.cancel"),
                          style: { "flex-grow": "1" },
                          onClick: I[8] || (I[8] = ($) => P())
                        }, null, 8, ["label"]),
                        B(c(Yr), {
                          disabled: !v.value,
                          label: t.saveLabel,
                          style: { "flex-grow": "1" },
                          onClick: I[9] || (I[9] = ($) => C())
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
}), Pk = /* @__PURE__ */ W({
  __name: "ListAdd",
  props: {
    deviceId: {},
    type: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = _t(), i = Kt({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = ye(() => {
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
    async function l() {
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
    return (o, u) => (g(), R(bf, {
      category: i.category,
      "onUpdate:category": u[0] || (u[0] = (d) => i.category = d),
      content: i.content,
      "onUpdate:content": u[1] || (u[1] = (d) => i.content = d),
      person: i.person,
      "onUpdate:person": u[2] || (u[2] = (d) => i.person = d),
      "due-date": i.dueDate,
      "onUpdate:dueDate": u[3] || (u[3] = (d) => i.dueDate = d),
      "due-time": i.dueTime,
      "onUpdate:dueTime": u[4] || (u[4] = (d) => i.dueTime = d),
      quantity: i.quantity,
      "onUpdate:quantity": u[5] || (u[5] = (d) => i.quantity = d),
      "device-id": t.deviceId,
      "save-label": c(s)("widget.list.add.add"),
      title: r.value,
      type: t.type,
      onClose: u[6] || (u[6] = (d) => a()),
      onSave: u[7] || (u[7] = (d) => l())
    }, null, 8, ["category", "content", "person", "due-date", "due-time", "quantity", "device-id", "save-label", "title", "type"]));
  }
}), zk = /* @__PURE__ */ W({
  __name: "ListEdit",
  props: {
    deviceId: {},
    item: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = _t(), i = Kt({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = ye(() => {
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
    async function l() {
      await Homey.api("POST", `/${t.deviceId}/items/${t.item.id}`, {
        category: i.category,
        content: i.content,
        personId: i.person,
        dueDate: i.dueDate,
        dueTime: i.dueTime,
        quantity: i.quantity
      }), await a();
    }
    return Oe(() => t.item, (o) => {
      i.category = o.category, i.content = o.content, i.person = o.person?.id, i.dueDate = o.dueDate, i.dueTime = o.dueTime, i.quantity = o.quantity;
    }, { immediate: !0 }), (o, u) => (g(), R(bf, {
      category: i.category,
      "onUpdate:category": u[0] || (u[0] = (d) => i.category = d),
      content: i.content,
      "onUpdate:content": u[1] || (u[1] = (d) => i.content = d),
      person: i.person,
      "onUpdate:person": u[2] || (u[2] = (d) => i.person = d),
      "due-date": i.dueDate,
      "onUpdate:dueDate": u[3] || (u[3] = (d) => i.dueDate = d),
      "due-time": i.dueTime,
      "onUpdate:dueTime": u[4] || (u[4] = (d) => i.dueTime = d),
      quantity: i.quantity,
      "onUpdate:quantity": u[5] || (u[5] = (d) => i.quantity = d),
      "device-id": t.deviceId,
      "save-label": c(s)("widget.list.add.save"),
      title: r.value,
      type: t.item.type,
      onClose: u[6] || (u[6] = (d) => a()),
      onSave: u[7] || (u[7] = (d) => l())
    }, null, 8, ["category", "content", "person", "due-date", "due-time", "quantity", "device-id", "save-label", "title", "type"]));
  }
});
const Hk = ["aria-pressed", "onClick"], Wk = ["aria-pressed", "onClick"], Uk = ["aria-pressed"], qk = ["aria-pressed", "onClick"];
var jk = /* @__PURE__ */ W({
  __name: "ListFilter",
  setup(t) {
    const e = {
      all: "widget.list.filter.all_types",
      note: "widget.list.filter.notes",
      product: "widget.list.filter.products",
      task: "widget.list.filter.tasks"
    }, {
      availableTypeFilters: n,
      canFilterByTaskFields: s,
      filters: i,
      look: r,
      persons: a,
      hasActiveFilters: l,
      resetFilters: o,
      setFilter: u
    } = Hl(), d = _t(), f = [
      { value: "all", label: d("widget.list.filter.all_dates") },
      { value: "due_by_today", label: d("widget.list.filter.due_by_today") },
      { value: "upcoming", label: d("widget.list.filter.upcoming") },
      { value: "no_date", label: d("widget.list.filter.no_date") }
    ], p = ye(() => c(n).map((h) => ({
      value: h,
      label: d(e[h])
    })));
    return (h, v) => (g(), V("div", {
      class: w(h.$style.listFilter)
    }, [
      de("div", {
        class: w(h.$style.listFilterGroup)
      }, [
        de("span", {
          id: "list-filter-type",
          class: w(h.$style.listFilterLabel)
        }, fe(c(d)("widget.list.filter.type")), 3),
        de("div", {
          "aria-labelledby": "list-filter-type",
          class: w(h.$style.listFilterChips),
          role: "group"
        }, [
          (g(!0), V(me, null, Ze(p.value, (b) => (g(), V("button", {
            key: b.value,
            "aria-pressed": c(i).type === b.value,
            class: w([h.$style.listFilterChip, c(i).type === b.value && h.$style.isActive]),
            style: We(c(i).type === b.value ? { "--chip-color": c(r)?.color } : void 0),
            onClick: (A) => c(u)("type", b.value)
          }, fe(b.label), 15, Hk))), 128))
        ], 2)
      ], 2),
      c(s) ? (g(), V("div", {
        key: 0,
        class: w(h.$style.listFilterGroup)
      }, [
        de("span", {
          id: "list-filter-date",
          class: w(h.$style.listFilterLabel)
        }, fe(c(d)("widget.list.filter.date")), 3),
        de("div", {
          "aria-labelledby": "list-filter-date",
          class: w(h.$style.listFilterChips),
          role: "group"
        }, [
          (g(), V(me, null, Ze(f, (b) => de("button", {
            key: b.value,
            "aria-pressed": c(i).date === b.value,
            class: w([h.$style.listFilterChip, c(i).date === b.value && h.$style.isActive]),
            style: We(c(i).date === b.value ? { "--chip-color": c(r)?.color } : void 0),
            onClick: (A) => c(u)("date", b.value)
          }, fe(b.label), 15, Wk)), 64))
        ], 2)
      ], 2)) : te("", !0),
      c(s) && c(a).length > 0 ? (g(), V("div", {
        key: 1,
        class: w(h.$style.listFilterGroup)
      }, [
        de("span", {
          id: "list-filter-person",
          class: w(h.$style.listFilterLabel)
        }, fe(c(d)("widget.list.filter.person")), 3),
        de("div", {
          "aria-labelledby": "list-filter-person",
          class: w(h.$style.listFilterChips),
          role: "group"
        }, [
          de("button", {
            "aria-pressed": c(i).personId === null,
            class: w([h.$style.listFilterChip, c(i).personId === null && h.$style.isActive]),
            style: We(c(i).personId === null ? { "--chip-color": c(r)?.color } : void 0),
            onClick: v[0] || (v[0] = (b) => c(u)("personId", null))
          }, fe(c(d)("widget.list.filter.anyone")), 15, Uk),
          (g(!0), V(me, null, Ze(c(a), (b) => (g(), V("button", {
            key: b.id,
            "aria-pressed": c(i).personId === b.id,
            class: w([h.$style.listFilterChip, c(i).personId === b.id && h.$style.isActive]),
            style: We(c(i).personId === b.id ? { "--chip-color": c(r)?.color } : void 0),
            onClick: (A) => c(u)("personId", b.id)
          }, fe(b.name), 15, qk))), 128))
        ], 2)
      ], 2)) : te("", !0),
      c(l) ? (g(), V("button", {
        key: 2,
        class: w(h.$style.listFilterClear),
        onClick: v[1] || (v[1] = (b) => c(o)())
      }, fe(c(d)("widget.list.filter.clear")), 3)) : te("", !0)
    ], 2));
  }
});
const Gk = "listFilter", Zk = "listFilterGroup", Yk = "listFilterLabel", Jk = "listFilterChips", Kk = "listFilterChip", Qk = "listFilterClear", Xk = "isActive";
var e3 = { listFilter: Gk, listFilterGroup: Zk, listFilterLabel: Yk, listFilterChips: Jk, listFilterChip: Kk, listFilterClear: Qk, isActive: Xk }, _e = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, i] of e)
    n[s] = i;
  return n;
};
const t3 = {
  $style: e3
};
var n3 = /* @__PURE__ */ _e(jk, [["__cssModules", t3]]), kf = /* @__PURE__ */ W({
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
    return (i, r) => (g(), V("button", {
      class: "homey-button-primary-full",
      type: "button",
      onClick: s
    }, fe(t.label), 1));
  }
}), sw = /* @__PURE__ */ W({
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
    return (i, r) => (g(), V("button", {
      class: "homey-button-transparent",
      type: "button",
      onClick: s
    }, fe(t.label), 1));
  }
});
const Wl = /* @__PURE__ */ Symbol(), Ul = /* @__PURE__ */ Symbol(), s3 = ["title", "onClick"];
var i3 = /* @__PURE__ */ W({
  __name: "ColorPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = ct(t, "modelValue"), n = _t(), s = dn(Wl);
    return (i, r) => (g(), V("div", {
      class: w(i.$style.colorSelect)
    }, [
      (g(!0), V(me, null, Ze(c(s), (a) => (g(), V("div", {
        class: w(e.value === a.hex ? i.$style.colorSelectItemActive : i.$style.colorSelectItem),
        style: We({ "--color": a.hex }),
        title: c(n)(a.label),
        onClick: (l) => e.value = a.hex
      }, null, 14, s3))), 256))
    ], 2));
  }
});
const r3 = "colorSelect", a3 = "colorSelectItem", l3 = "colorSelectItemActive colorSelectItem";
var o3 = { colorSelect: r3, colorSelectItem: a3, colorSelectItemActive: l3 };
const u3 = {
  $style: o3
};
var wf = /* @__PURE__ */ _e(i3, [["__cssModules", u3]]);
const c3 = { class: "homey-form" };
var If = /* @__PURE__ */ W({
  __name: "Form",
  setup(t) {
    return (e, n) => (g(), V("form", c3, [
      oe(e.$slots, "default")
    ]));
  }
});
const d3 = { class: "homey-form-fieldset" }, f3 = { class: "homey-form-legend" }, h3 = {
  key: 0,
  class: "homey-form-group",
  style: { "margin-top": "6px" }
}, m3 = {
  key: 1,
  class: "homey-form-group"
}, p3 = { class: "homey-form-group" };
var ii = /* @__PURE__ */ W({
  __name: "FormGroup",
  props: {
    description: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (g(), V("fieldset", d3, [
      de("legend", f3, fe(t.title), 1),
      t.description ? (g(), V("div", h3, fe(t.description), 1)) : te("", !0),
      e.$slots.before ? (g(), V("div", m3, [
        oe(e.$slots, "before")
      ])) : te("", !0),
      de("div", p3, [
        oe(e.$slots, "default")
      ])
    ]));
  }
});
const g3 = ["for"], v3 = ["disabled", "id", "type"];
var Sf = /* @__PURE__ */ W({
  __name: "FormInput",
  props: /* @__PURE__ */ Vt({
    disabled: { type: Boolean },
    label: {},
    type: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = ct(t, "modelValue"), n = kl();
    return (s, i) => (g(), V(me, null, [
      t.label ? (g(), V("label", {
        key: 0,
        class: "homey-form-label",
        for: c(n)
      }, fe(t.label), 9, g3)) : te("", !0),
      yl(de("input", {
        class: "homey-form-input",
        disabled: t.disabled,
        id: c(n),
        type: t.type,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.value = r)
      }, null, 8, v3), [
        [nm, e.value]
      ])
    ], 64));
  }
}), y3 = /* @__PURE__ */ W({
  __name: "Icon",
  props: {
    icon: {}
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(e.$style.uiIcon),
      "data-icon": "",
      style: We({
        "--icon": JSON.stringify(t.icon),
        "--icon-secondary": JSON.stringify(t.icon + t.icon)
      })
    }, null, 6));
  }
});
const b3 = "uiIcon";
var k3 = { uiIcon: b3 };
const w3 = {
  $style: k3
};
var Mn = /* @__PURE__ */ _e(y3, [["__cssModules", w3]]), I3 = /* @__PURE__ */ W({
  __name: "IconPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = ct(t, "modelValue"), n = _t(), s = dn(Ul), i = ne(""), r = ye(() => {
      const a = c(i).toLowerCase().trim();
      return c(s).filter((l) => a.length > 0 && l.name.toLowerCase().includes(a) || a.length === 0 && l.unicode === c(e)).slice(0, 54);
    });
    return (a, l) => (g(), V(me, null, [
      B(Sf, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (o) => i.value = o),
        label: c(n)("element.search_icon"),
        type: "text"
      }, null, 8, ["modelValue", "label"]),
      de("div", {
        class: w(a.$style.iconSelect)
      }, [
        (g(!0), V(me, null, Ze(r.value, (o) => (g(), R(Mn, {
          class: w(e.value === o.unicode ? a.$style.iconSelectItemActive : a.$style.iconSelectItem),
          icon: o.unicode,
          title: o.name,
          onClick: (u) => e.value = o.unicode
        }, null, 8, ["class", "icon", "title", "onClick"]))), 256))
      ], 2)
    ], 64));
  }
});
const S3 = "iconSelect", T3 = "iconSelectItem", C3 = "iconSelectItemActive iconSelectItem";
var x3 = { iconSelect: S3, iconSelectItem: T3, iconSelectItemActive: C3 };
const E3 = {
  $style: x3
};
var Tf = /* @__PURE__ */ _e(I3, [["__cssModules", E3]]), iw = /* @__PURE__ */ W({
  __name: "ScrollContainer",
  props: {
    tag: { default: "div" }
  },
  setup(t) {
    const e = ne(null), n = ne(!1), s = ne(0), i = ne(0), r = ne(0), a = ne([]), l = ne(0), o = ne(0);
    let u = null;
    rs(() => {
      f();
    });
    function d(P, C) {
      const $ = (1 - 1 / (Math.abs(P) * 0.55 / C + 1)) * C;
      return Math.sign(P) * $;
    }
    function f() {
      u && (cancelAnimationFrame(u), u = null);
    }
    function p() {
      const P = c(a);
      if (P.length === 0)
        return 0;
      let C = 0, z = 0;
      for (let I = 0; I < P.length; I++) {
        const $ = I + 1;
        z += P[I] * $, C += $;
      }
      return z / C;
    }
    function h() {
      const P = c(e);
      if (!P)
        return;
      const C = c(r), z = P.clientHeight, I = d(C, z), $ = Math.min(400, Math.max(200, Math.abs(I) * 3));
      P.style.transition = `transform ${$}ms cubic-bezier(0.25, 0.1, 0.25, 1)`, P.style.transform = "translateY(0)", r.value = 0;
    }
    function v(P) {
      const C = c(e);
      if (!C)
        return;
      const z = C.clientHeight;
      let I = P, $ = performance.now();
      function Z(O) {
        const D = Math.min((O - $) / 16.67, 2);
        $ = O;
        const Y = C.scrollHeight - C.clientHeight;
        I *= Math.pow(0.95, D);
        const k = C.scrollTop + I * D;
        if (k < 0) {
          C.scrollTop = 0;
          const _ = Math.min(z * 0.3, Math.abs(I) * 8);
          r.value = _;
          const ee = d(_, z);
          C.style.transform = `translateY(${ee}px)`, requestAnimationFrame(() => h());
        } else if (k > Y) {
          C.scrollTop = Y;
          const _ = -Math.min(z * 0.3, Math.abs(I) * 8);
          r.value = _;
          const ee = d(_, z);
          C.style.transform = `translateY(${ee}px)`, requestAnimationFrame(() => h());
        } else
          C.scrollTop = k, Math.abs(I) > 0.1 && (u = requestAnimationFrame(Z));
      }
      u = requestAnimationFrame(Z);
    }
    function b(P) {
      f();
      const C = c(e);
      if (!C)
        return;
      const z = P.touches[0];
      s.value = z.clientY, n.value = !0, l.value = z.clientY, o.value = Date.now(), a.value = [], i.value = C.scrollTop, C.style.transition = "none", r.value === 0 && (C.style.transform = "translateY(0)"), P.preventDefault();
    }
    function A(P) {
      if (!c(n))
        return;
      const C = c(e);
      if (!C)
        return;
      const z = P.touches[0], I = Date.now(), $ = I - c(o);
      if ($ > 0 && $ < 100) {
        const k = (c(l) - z.clientY) / $ * 16;
        a.value.push(k), a.value.length > 5 && a.value.shift();
      }
      l.value = z.clientY, o.value = I;
      const Z = c(s) - z.clientY, O = C.scrollHeight - C.clientHeight, D = c(i) + Z, Y = C.clientHeight;
      if (D < 0) {
        C.scrollTop = 0;
        const X = -D;
        r.value = X;
        const k = d(X, Y);
        C.style.transform = `translateY(${k}px)`;
      } else if (D > O) {
        C.scrollTop = O;
        const X = -(D - O);
        r.value = X;
        const k = d(X, Y);
        C.style.transform = `translateY(${k}px)`;
      } else
        C.scrollTop = D, r.value = 0, C.style.transform = "translateY(0)";
      P.preventDefault();
    }
    function S(P) {
      if (!n.value)
        return;
      const C = e.value, z = p(), I = r.value !== 0;
      n.value = !1, C && I ? h() : C && Math.abs(z) > 0.5 && v(z), P.preventDefault();
    }
    return (P, C) => (g(), R(Il(t.tag), {
      ref_key: "containerRef",
      ref: e,
      onTouchstart: b,
      onTouchmove: A,
      onTouchend: S,
      onTouchcancel: S
    }, {
      default: U(() => [
        oe(P.$slots, "default")
      ]),
      _: 3
    }, 544));
  }
});
const F3 = ["aria-label"];
var A3 = /* @__PURE__ */ W({
  __name: "ListHeader",
  props: {
    canFilter: { type: Boolean },
    color: {},
    hasActiveFilters: { type: Boolean },
    icon: {},
    name: {}
  },
  emits: ["add", "addNote", "filter"],
  setup(t, { emit: e }) {
    const n = e, s = _t();
    function i() {
      n("add");
    }
    function r() {
      n("addNote");
    }
    function a() {
      n("filter");
    }
    return (l, o) => (g(), V("div", {
      class: w(l.$style.listHeader)
    }, [
      B(c(Mn), {
        class: w(l.$style.listHeaderIcon),
        icon: t.icon,
        style: We({
          "--color": t.color
        })
      }, null, 8, ["class", "icon", "style"]),
      de("div", {
        class: w(["homey-text-bold", l.$style.listHeaderName])
      }, fe(t.name), 3),
      t.canFilter ? (g(), V("button", {
        key: 0,
        "aria-label": c(s)("widget.list.filter.title"),
        class: w(l.$style.listHeaderAction),
        onClick: o[0] || (o[0] = (u) => a())
      }, [
        B(c(Mn), {
          class: w(l.$style.listHeaderActionIcon),
          icon: "",
          style: We(t.hasActiveFilters ? { "--color": t.color } : void 0)
        }, null, 8, ["class", "style"])
      ], 10, F3)) : te("", !0),
      de("button", {
        class: w(l.$style.listHeaderAction),
        onClick: o[1] || (o[1] = (u) => r())
      }, [
        B(c(Mn), {
          class: w(l.$style.listHeaderActionIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2),
      de("button", {
        class: w(l.$style.listHeaderAction),
        onClick: o[2] || (o[2] = (u) => i())
      }, [
        B(c(Mn), {
          class: w(l.$style.listHeaderActionIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
});
const $3 = "listHeader", L3 = "listHeaderIcon", M3 = "listHeaderName", D3 = "listHeaderAction", O3 = "listHeaderActionIcon";
var B3 = { listHeader: $3, listHeaderIcon: L3, listHeaderName: M3, listHeaderAction: D3, listHeaderActionIcon: O3 };
const V3 = {
  $style: B3
};
var N3 = /* @__PURE__ */ _e(A3, [["__cssModules", V3]]), _3 = /* @__PURE__ */ W({
  __name: "ListLoading",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(e.$style.listLoading)
    }, [
      B(c(_n))
    ], 2));
  }
});
const R3 = "listLoading";
var P3 = { listLoading: R3 };
const z3 = {
  $style: P3
};
var H3 = /* @__PURE__ */ _e(_3, [["__cssModules", z3]]), W3 = /* @__PURE__ */ W({
  __name: "ListItemCategory",
  props: {
    icon: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(e.$style.listItemCategory)
    }, [
      t.icon ? (g(), R(c(rt), {
        key: 0,
        class: w(e.$style.listItemCategoryIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : te("", !0),
      de("span", null, fe(t.name), 1)
    ], 2));
  }
});
const U3 = "listItemCategory", q3 = "listItemCategoryIcon";
var j3 = { listItemCategory: U3, listItemCategoryIcon: q3 };
const G3 = {
  $style: j3
};
var Cu = /* @__PURE__ */ _e(W3, [["__cssModules", G3]]);
const Z3 = ["aria-checked"];
var Y3 = /* @__PURE__ */ W({
  __name: "ListItem",
  props: {
    completable: { type: Boolean },
    direction: { default: "vertical" },
    icon: {},
    item: {},
    tappable: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      "aria-checked": t.item ? "checked" in t.item && t.item.checked ? "true" : "false" : void 0,
      class: w([
        t.direction === "horizontal" ? e.$style.listItemHorizontal : e.$style.listItemVertical,
        t.completable && e.$style.isCompletable,
        t.tappable && e.$style.isTappable
      ])
    }, [
      B(Vn, {
        mode: "out-in",
        name: "check"
      }, {
        default: U(() => [
          (g(), R(c(Mn), {
            key: t.icon,
            class: w(e.$style.listItemIcon),
            icon: t.icon
          }, null, 8, ["class", "icon"]))
        ]),
        _: 1
      }),
      de("div", {
        class: w(e.$style.listItemBody)
      }, [
        oe(e.$slots, "default")
      ], 2)
    ], 10, Z3));
  }
});
const J3 = "listItem", K3 = "isTappable", Q3 = "listItemBody", X3 = "listItemIcon", e6 = "listItemHorizontal listItem", t6 = "listItemVertical listItem", n6 = "isCompletable";
var s6 = { listItem: J3, isTappable: K3, listItemBody: Q3, listItemIcon: X3, listItemHorizontal: e6, listItemVertical: t6, isCompletable: n6 };
const i6 = {
  $style: s6
};
var Kr = /* @__PURE__ */ _e(Y3, [["__cssModules", i6]]), r6 = /* @__PURE__ */ W({
  __name: "ListItemContent",
  props: {
    grow: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(t.grow ? e.$style.listItemContentGrow : e.$style.listItemContent),
      "data-content": ""
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const a6 = "listItemContent", l6 = "listItemContentGrow listItemContent";
var o6 = { listItemContent: a6, listItemContentGrow: l6 };
const u6 = {
  $style: o6
};
var Qr = /* @__PURE__ */ _e(r6, [["__cssModules", u6]]), c6 = /* @__PURE__ */ W({
  __name: "ListItemEmpty",
  props: {
    filtered: { type: Boolean }
  },
  setup(t) {
    const e = _t();
    return (n, s) => (g(), R(Kr, {
      class: w(n.$style.listItemEmpty),
      icon: ""
    }, {
      default: U(() => [
        B(Qr, null, {
          default: U(() => [
            gi(fe(t.filtered ? c(e)("widget.list.filter.no_results") : c(e)("widget.list.no_items")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const d6 = "listItemEmpty";
var f6 = { listItemEmpty: d6 };
const h6 = {
  $style: f6
};
var xu = /* @__PURE__ */ _e(c6, [["__cssModules", h6]]), m6 = /* @__PURE__ */ W({
  __name: "ListItemMount",
  props: {
    longPressDuration: { default: 300 }
  },
  emits: ["longPress", "remove", "tap"],
  setup(t, { emit: e }) {
    const n = e, s = ne(!1), i = ne(!1), r = ne(0), a = ne(0), l = ne(0), o = ne(0), u = ne(!0), d = ne(null), f = ne(!1), p = ne(null), h = ne(!1), v = ye(() => s.value ? r.value - l.value > 180 : !1), b = ye(() => {
      if (!s.value || d.value === "vertical")
        return i.value ? -90 : 0;
      const I = r.value - l.value, $ = 90, Z = 0.3;
      if (I <= 0)
        return 0;
      if (I <= $)
        return -I;
      const O = I - $;
      return -($ + O * Z);
    });
    function A() {
      c(p) && (clearTimeout(c(p)), p.value = null);
    }
    function S() {
      i.value = !1, n("remove");
    }
    function P(I) {
      if (c(i))
        return;
      const $ = I.touches[0];
      r.value = $.clientX, a.value = $.clientY, l.value = $.clientX, o.value = $.clientY, s.value = !0, u.value = !0, h.value = !1, d.value = null, f.value = I.target.closest("[data-interactive]") !== null, A(), p.value = setTimeout(() => {
        c(u) && !c(f) && (h.value = !0, n("longPress"));
      }, t.longPressDuration);
    }
    function C(I) {
      if (!c(s))
        return;
      const $ = I.touches[0];
      l.value = $.clientX, o.value = $.clientY;
      const Z = Math.abs(l.value - r.value), O = Math.abs(o.value - a.value);
      (Z > 10 || O > 10) && (u.value = !1, A()), c(d) === null && (Z > 4 || O > 4) && (d.value = Z > O ? "horizontal" : "vertical"), c(d) === "horizontal" && I.cancelable && I.preventDefault();
    }
    function z(I) {
      if (A(), c(i)) {
        if (I.target.closest("[data-delete-button]") !== null)
          return;
        setTimeout(() => i.value = !1, 50), I.stopPropagation();
        return;
      }
      if (!c(s))
        return;
      s.value = !1;
      const $ = r.value - l.value;
      if (c(u) && !c(f) && !c(h)) {
        n("tap");
        return;
      }
      if (c(d) === "horizontal") {
        if ($ > 180) {
          n("remove");
          return;
        }
        i.value = $ > 45;
      }
    }
    return Oe(i, (I, $, Z) => {
      if (!I)
        return;
      const O = setTimeout(() => {
        i.value = !1;
      }, 3e3);
      Z(() => clearTimeout(O));
    }), (I, $) => (g(), V("div", {
      class: w([
        I.$style.listItemMount,
        v.value && I.$style.isDestructive,
        s.value && I.$style.isDragging,
        i.value && I.$style.isOpen
      ]),
      style: We({
        "--x": b.value + "px"
      })
    }, [
      de("div", {
        class: w(I.$style.listItemMountBody),
        onTouchstart: P,
        onTouchmove: C,
        onTouchend: z,
        onTouchcancel: z
      }, [
        oe(I.$slots, "default")
      ], 34),
      de("div", {
        class: w(I.$style.listItemMountRemove),
        "data-delete-button": "",
        onClick: $[0] || ($[0] = (Z) => S()),
        onTouchend: $[1] || ($[1] = Fl((Z) => S(), ["stop", "prevent"]))
      }, [
        B(c(Mn), {
          class: w(I.$style.listItemMountRemoveIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 34)
    ], 6));
  }
});
const p6 = "listItemMount", g6 = "listItemMountBody", v6 = "listItemMountRemove", y6 = "isDragging", b6 = "isOpen", k6 = "isDestructive", w6 = "listItemMountRemoveIcon";
var I6 = { listItemMount: p6, listItemMountBody: g6, listItemMountRemove: v6, isDragging: y6, isOpen: b6, isDestructive: k6, listItemMountRemoveIcon: w6 };
const S6 = {
  $style: I6
};
var T6 = /* @__PURE__ */ _e(m6, [["__cssModules", S6]]), C6 = /* @__PURE__ */ W({
  __name: "ListItems",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(e.$style.listItems)
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const x6 = "listItems";
var E6 = { listItems: x6 };
const F6 = {
  $style: E6
};
var Eu = /* @__PURE__ */ _e(C6, [["__cssModules", F6]]), A6 = /* @__PURE__ */ W({
  __name: "ListItemNote",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (g(), R(Kr, {
      class: w(e.$style.listItemNote),
      icon: "",
      item: t.item
    }, {
      default: U(() => [
        B(Qr, null, {
          default: U(() => [
            gi(fe(t.item.content), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "item"]));
  }
});
const $6 = "listItemNote";
var L6 = { listItemNote: $6 };
const M6 = {
  $style: L6
};
var D6 = /* @__PURE__ */ _e(A6, [["__cssModules", M6]]), O6 = /* @__PURE__ */ W({
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
    return (i, r) => (g(), V("button", {
      class: w(i.$style.listItemButton),
      "data-interactive": "",
      onTouchend: Fl(s, ["stop", "prevent"])
    }, [
      B(c(Mn), {
        class: w(i.$style.listItemButtonIcon),
        icon: t.icon
      }, null, 8, ["class", "icon"])
    ], 34));
  }
});
const B6 = "listItemButton", V6 = "listItemButtonIcon";
var N6 = { listItemButton: B6, listItemButtonIcon: V6 };
const _6 = {
  $style: N6
};
var Fu = /* @__PURE__ */ _e(O6, [["__cssModules", _6]]), R6 = /* @__PURE__ */ W({
  __name: "ListItemButtons",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(e.$style.listItemButtons)
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const P6 = "listItemButtons";
var z6 = { listItemButtons: P6 };
const H6 = {
  $style: z6
};
var W6 = /* @__PURE__ */ _e(R6, [["__cssModules", H6]]), U6 = /* @__PURE__ */ W({
  __name: "ListItemQuantity",
  props: {
    quantity: {}
  },
  setup(t) {
    const e = new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }), n = ye(() => e.format(t.quantity));
    return (s, i) => (g(), V("div", {
      class: w(s.$style.listItemQuantity)
    }, fe(n.value) + "x ", 3));
  }
});
const q6 = "listItemQuantity";
var j6 = { listItemQuantity: q6 };
const G6 = {
  $style: j6
};
var Z6 = /* @__PURE__ */ _e(U6, [["__cssModules", G6]]), Y6 = /* @__PURE__ */ W({
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
    return (r, a) => (g(), R(Kr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item,
      direction: "horizontal"
    }, {
      default: U(() => [
        B(Qr, null, {
          default: U(() => [
            gi(fe(t.item.content), 1)
          ]),
          _: 1
        }),
        B(Vn, { name: "check" }, {
          default: U(() => [
            t.item.quantity && t.item.quantity > 1 ? (g(), R(Z6, {
              key: 0,
              quantity: t.item.quantity
            }, null, 8, ["quantity"])) : te("", !0)
          ]),
          _: 1
        }),
        B(c(Zr)),
        B(Vn, { name: "check" }, {
          default: U(() => [
            t.item.checked ? te("", !0) : (g(), R(W6, { key: 0 }, {
              default: U(() => [
                t.item.quantity && t.item.quantity > 1 ? (g(), R(Fu, {
                  key: 0,
                  icon: "",
                  onTap: a[0] || (a[0] = (l) => s())
                })) : te("", !0),
                B(Fu, {
                  icon: "+",
                  onTap: a[1] || (a[1] = (l) => i())
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
}), J6 = /* @__PURE__ */ W({
  __name: "ListItemFooter",
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(e.$style.listItemFooter)
    }, [
      oe(e.$slots, "default")
    ], 2));
  }
});
const K6 = "listItemFooter";
var Q6 = { listItemFooter: K6 };
const X6 = {
  $style: Q6
};
var e8 = /* @__PURE__ */ _e(J6, [["__cssModules", X6]]);
const t8 = ["src", "alt"];
var n8 = /* @__PURE__ */ W({
  __name: "ListItemPerson",
  props: {
    image: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (g(), V("div", {
      class: w(e.$style.listItemPerson)
    }, [
      t.image ? (g(), V("img", {
        key: 0,
        class: w(e.$style.listItemPersonImage),
        src: t.image,
        alt: t.name
      }, null, 10, t8)) : te("", !0),
      de("span", null, fe(t.name), 1)
    ], 2));
  }
});
const s8 = "listItemPerson", i8 = "listItemPersonImage";
var r8 = { listItemPerson: s8, listItemPersonImage: i8 };
const a8 = {
  $style: r8
};
var l8 = /* @__PURE__ */ _e(n8, [["__cssModules", a8]]), o8 = /* @__PURE__ */ W({
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
    }), s = vf(), i = ye(() => {
      const r = c(s), a = yf(t.date, t.time);
      if (!a.isValid)
        return t.date;
      if (t.time) {
        const l = a.toFormat("HH:mm");
        return r.toISODate() === a.toISODate() ? `${Homey.__("widget.list.today_at")} ${l}` : r.year === a.year ? `${e.format(a.toJSDate())} ${l}` : `${n.format(a.toJSDate())} ${l}`;
      } else
        return r.toISODate() === a.toISODate() ? Homey.__("widget.list.today") : r.year === a.year ? e.format(a.toJSDate()) : n.format(a.toJSDate());
    });
    return (r, a) => (g(), V("div", {
      class: w(r.$style.listItemDate)
    }, fe(i.value), 3));
  }
});
const u8 = "listItemDate";
var c8 = { listItemDate: u8 };
const d8 = {
  $style: c8
};
var f8 = /* @__PURE__ */ _e(o8, [["__cssModules", d8]]), h8 = /* @__PURE__ */ W({
  __name: "ListItemTask",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (g(), R(Kr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item
    }, {
      default: U(() => [
        B(Qr, null, {
          default: U(() => [
            gi(fe(t.item.content), 1)
          ]),
          _: 1
        }),
        t.item.dueDate || t.item.person ? (g(), R(e8, { key: 0 }, {
          default: U(() => [
            t.item.person ? (g(), R(l8, {
              key: 0,
              image: t.item.person.image,
              name: t.item.person.name
            }, null, 8, ["image", "name"])) : te("", !0),
            t.item.dueDate ? (g(), R(f8, {
              key: 1,
              date: t.item.dueDate,
              time: t.item.dueTime
            }, null, 8, ["date", "time"])) : te("", !0)
          ]),
          _: 1
        })) : te("", !0)
      ]),
      _: 1
    }, 8, ["icon", "item"]));
  }
}), m8 = /* @__PURE__ */ W({
  __name: "List",
  props: {
    defaultDateFilter: {},
    defaultTypeFilter: {},
    deviceId: {},
    dynamicHeight: { type: Boolean },
    fixedHeight: {}
  },
  setup(t) {
    const e = _t(), {
      availableTypeFilters: n,
      categories: s,
      filteredCategorizedItems: i,
      hasActiveFilters: r,
      hasFilteredItems: a,
      hasItems: l,
      isLoading: o,
      look: u,
      persons: d,
      changeChecked: f,
      changeQuantity: p,
      initFilters: h,
      loadCategories: v,
      loadItems: b,
      loadLook: A,
      loadPersons: S,
      removeItem: P,
      setItems: C
    } = Hl(), z = ne(null), I = ne(null), $ = ne(!1);
    async function Z() {
      switch (c(u)?.type) {
        case "grocery_list":
          z.value = "product";
          break;
        case "list":
          z.value = "task";
          break;
      }
    }
    async function O() {
      z.value = "note";
    }
    async function D(k) {
      I.value = k;
    }
    async function Y(k) {
      switch (k.type) {
        case "product":
        case "task":
          await f(t.deviceId, k, !k.checked);
          break;
      }
    }
    async function X() {
      if (!t.dynamicHeight) {
        Homey.setHeight(Math.max(120, t.fixedHeight));
        return;
      }
      const k = document.querySelector("#app"), { height: _ } = k.getBoundingClientRect();
      Homey.setHeight(c(z) || c(I) ? Math.max(420, _) : _);
    }
    return Homey.on("list-items-changed", async ({ id: k, items: _ }) => {
      k === t.deviceId && await C(_);
    }), Homey.on("list-look-changed", async (k) => k === t.deviceId && await A(t.deviceId)), Oe([z, n, I, i, d], async () => {
      await X();
    }, { flush: "post" }), Oe(() => t.deviceId, async () => {
      h(t.defaultTypeFilter, t.defaultDateFilter), await A(t.deviceId), await Promise.allSettled([
        v(t.deviceId),
        b(t.deviceId),
        S(t.deviceId)
      ]);
    }, { immediate: !0 }), (k, _) => (g(), V(me, null, [
      c(u) ? (g(), R(N3, {
        key: 0,
        "can-filter": c(l),
        color: c(u).color,
        "has-active-filters": c(r),
        icon: c(u).icon,
        name: c(u).name,
        onAdd: _[0] || (_[0] = (ee) => Z()),
        onAddNote: _[1] || (_[1] = (ee) => O()),
        onFilter: _[2] || (_[2] = (ee) => $.value = !$.value)
      }, null, 8, ["can-filter", "color", "has-active-filters", "icon", "name"])) : te("", !0),
      B(Vn, {
        mode: "out-in",
        name: "check",
        onEnter: _[7] || (_[7] = (ee) => X())
      }, {
        default: U(() => [
          c(o) && !c(l) ? (g(), R(H3, { key: 0 })) : c(l) ? (g(), R(Eu, { key: 1 }, {
            default: U(() => [
              B(Vn, {
                name: "filter-slide",
                onAfterLeave: _[3] || (_[3] = (ee) => X()),
                onEnter: _[4] || (_[4] = (ee) => X())
              }, {
                default: U(() => [
                  $.value ? (g(), R(n3, { key: 0 })) : te("", !0)
                ]),
                _: 1
              }),
              B(Wc, {
                name: "items",
                onAfterEnter: _[5] || (_[5] = (ee) => X()),
                onAfterLeave: _[6] || (_[6] = (ee) => X())
              }, {
                default: U(() => [
                  (g(!0), V(me, null, Ze(c(i), (ee, Q, ve) => (g(), V(me, { key: Q }, [
                    Q !== "__other__" ? (g(), R(Cu, {
                      key: 0,
                      icon: c(s).find((ie) => ie.category === Q)?.icon,
                      name: c(e)(`grocery.category.${Q}`)
                    }, null, 8, ["icon", "name"])) : ve > 0 ? (g(), R(Cu, {
                      key: 1,
                      name: c(e)("widget.list.other")
                    }, null, 8, ["name"])) : te("", !0),
                    (g(!0), V(me, null, Ze(ee, (ie) => (g(), R(T6, {
                      key: ie.id,
                      onLongPress: (pe) => D(ie),
                      onRemove: (pe) => c(P)(t.deviceId, ie),
                      onTap: (pe) => Y(ie)
                    }, {
                      default: U(() => [
                        ie.type === "note" ? (g(), R(D6, {
                          key: 0,
                          item: ie
                        }, null, 8, ["item"])) : ie.type === "product" ? (g(), R(Y6, {
                          key: 1,
                          item: ie,
                          onDecrease: (pe) => c(p)(t.deviceId, ie, "decrease"),
                          onIncrease: (pe) => c(p)(t.deviceId, ie, "increase")
                        }, null, 8, ["item", "onDecrease", "onIncrease"])) : ie.type === "task" ? (g(), R(h8, {
                          key: 2,
                          item: ie
                        }, null, 8, ["item"])) : te("", !0)
                      ]),
                      _: 2
                    }, 1032, ["onLongPress", "onRemove", "onTap"]))), 128))
                  ], 64))), 128))
                ]),
                _: 1
              }),
              c(a) ? te("", !0) : (g(), R(xu, {
                key: 0,
                filtered: ""
              }))
            ]),
            _: 1
          })) : (g(), R(Eu, { key: 2 }, {
            default: U(() => [
              B(xu)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }),
      B(c(Qi), null, {
        default: U(() => [
          z.value ? (g(), R(Pk, {
            key: 0,
            "device-id": t.deviceId,
            type: z.value,
            onClose: _[8] || (_[8] = (ee) => z.value = null)
          }, null, 8, ["device-id", "type"])) : I.value ? (g(), R(zk, {
            key: 1,
            "device-id": t.deviceId,
            item: I.value,
            onClose: _[9] || (_[9] = (ee) => I.value = null)
          }, null, 8, ["device-id", "item"])) : te("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), p8 = /* @__PURE__ */ W({
  __name: "ListWidget",
  setup(t) {
    const e = ne("all"), n = ne("all"), s = ne(null), i = ne(!0), r = ne(400), a = ne(!1);
    return window.addEventListener("homeyReady", () => {
      const l = Homey.getDeviceIds(), o = Homey.getSettings();
      e.value = _k(o.defaultDateFilter), n.value = Rk(o.defaultTypeFilter), s.value = l[0] ?? null, i.value = o.dynamicHeight ?? !0, r.value = o.fixedHeight ?? 400, a.value = !0, Homey.ready();
    }), (l, o) => (g(), R(c(Vk), {
      class: w([l.$style.listWidget, !i.value && l.$style.listWidgetFixed])
    }, {
      default: U(() => [
        a.value ? (g(), R(m8, {
          key: 0,
          "default-date-filter": e.value,
          "default-type-filter": n.value,
          "device-id": s.value,
          "dynamic-height": i.value,
          "fixed-height": r.value
        }, null, 8, ["default-date-filter", "default-type-filter", "device-id", "dynamic-height", "fixed-height"])) : te("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const g8 = "listWidget", v8 = "listWidgetFixed";
var y8 = { listWidget: g8, listWidgetFixed: v8 };
const b8 = {
  $style: y8
};
var k8 = /* @__PURE__ */ _e(p8, [["__cssModules", b8]]), w8 = /* @__PURE__ */ W({
  __name: "PairView",
  setup(t) {
    const e = _t(), n = ne([]), s = ne([]), i = Kt({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    yn(async () => {
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
    return On(Wl, n), On(Ul, s), (a, l) => (g(), R(c(If), {
      class: w(a.$style.pairView)
    }, {
      default: U(() => [
        B(c(ii), {
          title: c(e)("device.list.pair.name.title"),
          description: c(e)("device.list.pair.name.description")
        }, {
          default: U(() => [
            B(c(Sf), {
              modelValue: i.name,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.name = o),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(ii), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: U(() => [
            B(c(wf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(ii), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: U(() => [
            B(c(Tf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[2] || (l[2] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(kf), {
          label: c(e)("device.list.pair.submit"),
          onClick: l[3] || (l[3] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const I8 = "pairView";
var S8 = { pairView: I8 };
const T8 = {
  $style: S8
};
var C8 = /* @__PURE__ */ _e(w8, [["__cssModules", T8]]), x8 = /* @__PURE__ */ W({
  __name: "RepairView",
  setup(t) {
    const e = _t(), n = ne([]), s = ne([]), i = Kt({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    yn(async () => {
      Homey.setTitle(Homey.__("device.list.repair.title")), Homey.setSubtitle(Homey.__("device.list.repair.subtitle")), n.value = await Homey.emit("colors"), s.value = await Homey.emit("icons");
      const { name: a, data: l } = await Homey.emit("fetch");
      i.name = a, i.color = l.color, i.icon = l.icon, Homey.setTitle(i.name);
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
    return On(Wl, n), On(Ul, s), (a, l) => (g(), R(c(If), {
      class: w(a.$style.repairView)
    }, {
      default: U(() => [
        B(c(ii), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: U(() => [
            B(c(wf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(ii), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: U(() => [
            B(c(Tf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(kf), {
          label: c(e)("device.list.repair.submit"),
          onClick: l[2] || (l[2] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const E8 = "repairView";
var F8 = { repairView: E8 };
const A8 = {
  $style: F8
};
var $8 = /* @__PURE__ */ _e(x8, [["__cssModules", A8]]);
var L8 = {
  prefix: "far",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z"]
}, M8 = {
  prefix: "far",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8l115.6 0c13.3 0 25.3 8.3 30 20.8L328 48 424 48c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48l96 0 16.2-43.2zm-84.6 448L28.7 144 76.9 144 99.5 449.2c.6 8.4 7.6 14.8 16 14.8l217.1 0c8.4 0 15.3-6.5 16-14.8l22.6-305.2 48.1 0-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3l-217.1 0c-33.5 0-61.3-25.9-63.8-59.3z"]
}, D8 = {
  prefix: "far",
  iconName: "bottle-droplet",
  icon: [320, 512, [], "e4c4", "M96-32c-17.7 0-32 14.3-32 32 0 11.8 6.4 22.2 16 27.7l0 121.7C32.2 177.1 0 228.7 0 288L0 456c0 48.6 39.4 88 88 88l144 0c48.6 0 88-39.4 88-88l0-168c0-59.3-32.2-110.9-80-138.6l0-121.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32L96-32zm32 64l64 0 0 132c0 9.4 5.5 18 14.1 21.9 38.9 17.6 65.9 56.7 65.9 102.1l0 168c0 22.1-17.9 40-40 40L88 496c-22.1 0-40-17.9-40-40l0-168c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9l0-132zm96 320c0-21.2-28.9-64.5-47.9-90.6-8.1-11.1-24.2-11.1-32.3 0-19 26.1-47.9 69.4-47.9 90.6 0 31.6 28.7 64 64 64s64-32.4 64-64z"]
}, O8 = {
  prefix: "far",
  iconName: "wheat",
  icon: [576, 512, [], "f72d", "M72.5 240c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L297.4 455c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-30.5-30.5-63 63c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l63-63-30.5-30.5c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zm145 202.9c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM184.5 128c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L409.4 343c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM73.7 299.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L73.7 299.1zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM296.5 16c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L521.4 231c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM185.7 187.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4l-27.9-27.9zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM297.7 75.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L297.7 75.1zM544.5-24c6.4 0 12.5 2.5 17 7s7 10.6 7 17l0 35-.1 5.2c-2.6 51.7-44 93.1-95.7 95.7l-5.2 .1-35 0c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17l0-35c0-55.8 45.2-101 101-101l35 0zm-35 48c-29.3 0-53 23.7-53 53l0 11 11 0 5.4-.3c25-2.5 44.8-22.4 47.3-47.3l.3-5.4 0-11-11 0z"]
}, B8 = {
  prefix: "far",
  iconName: "bottle-baby",
  icon: [320, 512, [], "e673", "M124.6 17.7L128 16 128 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 3.4 1.7c17.5 8.8 28.6 26.7 28.6 46.3 17.7 0 32 14.3 32 32l0 48 27.5 45.8c13.4 22.4 20.5 48 20.5 74.1L304 480c0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64l0-216.1c0-26.1 7.1-51.7 20.5-74.1L64 144 64 96c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3zM256 480l0-216.1c0-17.4-4.7-34.5-13.7-49.4l-13.5-22.5-137.6 0-13.5 22.5c-9 14.9-13.7 32-13.7 49.4l0 8.1 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 48c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"]
}, V8 = {
  prefix: "far",
  iconName: "bread-loaf",
  icon: [576, 512, [127838], "f7eb", "M152 80l96 0c57.4 0 104 46.6 104 104l0 31c0 3.7-2.5 6.9-6.1 7.8l-7.8 1.9C327.5 227.4 320 237 320 248l0 144c0 22.1-17.9 40-40 40l-160 0c-22.1 0-40-17.9-40-40l0-144c0-11-7.5-20.6-18.2-23.3l-7.8-1.9c-3.6-.9-6.1-4.1-6.1-7.8l0-31C48 126.6 94.6 80 152 80zM120 480l336 0c48.6 0 88-39.4 88-88l0-120.8c18.3-3.7 32-19.8 32-39.2l0-48c0-83.9-68.1-152-152-152L152 32C68.1 32 0 100.1 0 184l0 31c0 21.9 12.8 41.5 32 50.6L32 392c0 48.6 39.4 88 88 88zm336-48l-97.6 0c6.1-12 9.6-25.6 9.6-40l0-120 128 0 0 120c0 22.1-17.9 40-40 40zM399.3 224c.5-2.9 .7-5.9 .7-9l0-31c0-40.2-15.6-76.8-41.1-104L424 80c57.4 0 104 46.6 104 104l0 40-128.7 0z"]
}, N8 = {
  prefix: "far",
  iconName: "carrot",
  icon: [576, 512, [129365], "f787", "M392.4 25.9l6.5 6.5c21.9 21.9 21.9 57.3 0 79.2l-6.5 6.5-6.5-6.5c-21.9-21.9-21.9-57.3 0-79.2l6.5-6.5zm40.4 119.6c21.9-21.9 57.3-21.9 79.2 0l6.5 6.5-6.5 6.5c-21.9 21.9-57.3 21.9-79.2 0l-6.5-6.5 6.5-6.5zm30-64c2.7-29.7-7.3-60.4-30-83.1L420.7-13.7c-15.6-15.6-40.9-15.6-56.6 0L352-1.5c-27 27-36.1 65.2-27.1 99.7-8.2-1.4-16.6-2.1-25.3-2.1-58.3 0-111.3 34.1-135.5 87.2L35.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5L361.1 380.3c53.1-24.1 87.2-77.1 87.2-135.5 0-8.6-.7-17-2.1-25.2 34.5 8.9 72.7-.1 99.7-27.1L558 180.3c15.6-15.6 15.6-40.9 0-56.6l-12.1-12.1c-22.7-22.7-53.4-32.8-83.1-30zM234.3 168c17.9-15.2 40.9-24 65.3-24 55.7 0 100.8 45.1 100.8 100.8 0 39.5-23.1 75.4-59.1 91.8l-89.7 40.8-26.3-26.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L205 398.5 96.6 447.8 205.8 207.4 239.4 241c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-39-39z"]
}, _8 = {
  prefix: "far",
  iconName: "steak",
  icon: [576, 512, [129385], "f824", "M143.9 240.1l12.8 0c34.4 0 66-18.8 82.4-49.1l45.5-84.1C304.4 70.6 342.3 48 383.6 48 445.7 48 496 98.3 496 160.4L496 288c0 79.5-64.5 144-144 144l-208.1 0C91 432 48 389 48 336.1s43-95.9 95.9-95.9zm12.8-48l-12.8 0C64.4 192.1 0 256.6 0 336.1S64.4 480 143.9 480L352 480c106 0 192-86 192-192l0-127.6C544 71.8 472.2 0 383.6 0 324.7 0 270.5 32.3 242.5 84.1L197 168.2c-8 14.8-23.4 24-40.2 24zm-12.8 96c-26.5 0-47.9 21.5-47.9 47.9S117.5 384 143.9 384L352 384c53 0 96-43 96-96l0-127.6c0-35.6-28.8-64.4-64.4-64.4-23.6 0-45.4 13-56.7 33.8l-45.5 84.1c-24.8 45.8-72.6 74.3-124.6 74.3l-12.8 0zM360 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
}, R8 = {
  prefix: "far",
  iconName: "bowl-spoon",
  icon: [512, 512, [129379], "e3e0", "M112 128c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48zm0 48c52.2 0 96-30.6 108.5-72L488 104c13.3 0 24-10.7 24-24s-10.7-24-24-24L220.5 56C208 14.6 164.2-16 112-16 50.1-16 0 27 0 80s50.1 96 112 96zm64.5 282.9C172 447.1 163 437.6 151.5 432.5 90.4 404.8 48 343.3 48 272l416 0c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1l-144 0c-3.3 0-6.3-2-7.5-5.1zM48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8l144 0c23.8 0 44.2-14.9 52.3-35.8 77.7-35.2 131.7-113.4 131.7-204.2 0-26.5-21.5-48-48-48L48 224z"]
}, P8 = {
  prefix: "far",
  iconName: "pump-soap",
  icon: [320, 512, [], "e06b", "M128 48l64 0 0 80-64 0 0-80zM80 32l0 96-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-16 0 0-40 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-8c0-17.7-14.3-32-32-32L112 0C94.3 0 80 14.3 80 32zM192 176l64 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l128 0zm32 168c0-32.5-37-80.9-50.9-97.9-3.2-3.9-8.1-6.1-13.1-6.1s-9.9 2.2-13.1 6.1c-13.8 16.9-50.9 65.3-50.9 97.9 0 35.3 28.7 56 64 56s64-20.7 64-56z"]
}, z8 = {
  prefix: "far",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"]
}, H8 = {
  prefix: "far",
  iconName: "spray-can-sparkles",
  icon: [576, 512, ["air-freshener"], "f5d0", "M160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80zm0 176c-26.5 0-48 21.5-48 48l0 184c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-184c0-26.5-21.5-48-48-48l-128 0zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 184c0 39.8-32.2 72-72 72l-176 0c-39.8 0-72-32.2-72-72l0-184zm160 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM448 48c0 1.4-1 3-2.2 3.6L416 64 403.6 93.8C403 95 401.4 96 400 96s-3-1-3.6-2.2L384 64 354.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L384 32 396.4 2.2C397 1 398.6 0 400 0s3 1 3.6 2.2L416 32 445.8 44.4C447 45 448 46.6 448 48zm76.4 45.8L512 64 482.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 32 524.4 2.2C525 1 526.6 0 528 0s3 1 3.6 2.2L544 32 573.8 44.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 64 531.6 93.8C531 95 529.4 96 528 96s-3-1-3.6-2.2zm7.2 100.4L544 224 573.8 236.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 256 531.6 285.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L512 256 482.2 243.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 224 524.4 194.2c.6-1.2 2.2-2.2 3.6-2.2s3 1 3.6 2.2zM512 144c0 1.4-1 3-2.2 3.6L480 160 467.6 189.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L448 160 418.2 147.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L448 128 460.4 98.2C461 97 462.6 96 464 96s3 1 3.6 2.2L480 128 509.8 140.4c1.2 .6 2.2 2.2 2.2 3.6z"]
}, W8 = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, U8 = {
  prefix: "far",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9C512 342.1 403.9 448 273.2 448 191.7 448 121.9 392.4 101.8 316.8 68.7 347.4 48 391.3 48 440l0 16c0 13.3-10.7 24-24 24S0 469.2 0 456l0-16c0-75.1 38.3-141.2 96.4-179.9 6.1-91.7 82.4-164.1 175.6-164.1 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3zM464 79.9c-38.3 29.5-102.4 64.1-192 64.1-57.6 0-106.4 38.1-122.4 90.4 20.9-6.8 43.2-10.4 66.4-10.4l80 0c13.3 0 24 10.8 24 24s-10.7 24-24 24l-80 0c-25.4 0-49.4 5.7-71 15.8 7.9 63.1 62.6 112.2 128.2 112.2 104.7 0 190.8-84.9 190.8-189.1l0-131z"]
}, q8 = {
  prefix: "far",
  iconName: "fish",
  icon: [576, 512, [128031], "f578", "M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1 33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8-12.6-22.1-35-52.2-65.3-77.8-33.7-28.5-76-50.2-124.5-50.2s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1-14 15.8-36.7 20.6-56 11.8l-54.3-24.9 21.1 36.9c8.4 14.8 8.4 32.9 0 47.6l-21.1 36.9 54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35 39.2-33.1 92-61.5 155.5-61.5s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8 4.7 9.2 4.7 20.1 0 29.3-14.1 27.4-41.9 66.8-81 99.8-39.2 33.1-92 61.5-155.5 61.5s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5s-11.1-25.4-4.2-37.5zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, j8 = {
  prefix: "far",
  iconName: "olive-branch",
  icon: [640, 512, [], "e317", "M2.7 53.1C13.8 41.6 59 0 128 0 194.9 0 239.4 39.1 252.2 52L306 26.7C343.3 9.1 384 0 425.2 0L616 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L425.2 48c-34.2 0-67.9 7.5-98.8 22.1L191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0c-8.8 0-16-7.2-16-16l0-16C0 194.6 34.5 141.4 85.2 114.5 40.4 102.8 11.3 75.8 2.7 66.9 .9 65 0 62.6 0 60s.9-5 2.7-6.9zM399.4 427c19.3-25.7 32.6-63.3 32.6-107s-13.3-81.3-32.6-107c-19.2-25.7-42.2-37-63.4-37s-44.2 11.4-63.4 37C253.3 238.7 240 276.4 240 320s13.3 81.3 32.6 107c19.2 25.7 42.2 37 63.4 37s44.2-11.4 63.4-37zM336 512c-79.5 0-144-86-144-192s64.5-192 144-192 144 86 144 192-64.5 192-144 192zm129.7-40.2c9.4-13.1 17.6-27.5 24.4-43.1 3.6 .8 7.1 1.5 10.5 2 31.1 4.6 55-3.6 70.2-19.3 15.4-16 23.9-42.1 19.2-76-4.7-33.8-22.2-71.6-53.2-103.7-18-18.7-37.7-32.5-57.2-41.7-4.9-8.8-10.3-17.2-16.2-25-10.5-14-22.7-26.5-36.2-36.9 48.2 1.6 101.3 25.8 144.2 70.3 75 77.8 90.2 188.1 33.9 246.4-34.1 35.4-86.8 43.5-139.6 27z"]
}, G8 = {
  prefix: "far",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M209.5 369c-9.4 9.4-24.6 9.4-33.9 0L15.5 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143 143-143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-160 160z"]
}, Z8 = {
  prefix: "far",
  iconName: "can-food",
  icon: [384, 512, [129387], "e3e6", "M320 434.3c-3.4 3-10.2 7.5-21.7 12.2-24.8 10.1-62.3 17.5-106.3 17.5s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2l0-144.8c14.2 6.2 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1l0 144.8zm48 5.7l0-368c0-39.8-78.8-72-176-72S16 32.2 16 72l0 368c0 39.8 78.8 72 176 72s176-32.2 176-72zM304 72c0 13.3-50.1 24-112 24S80 85.3 80 72 130.1 48 192 48 304 58.7 304 72zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Y8 = {
  prefix: "far",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"]
}, J8 = {
  prefix: "far",
  iconName: "cup-straw",
  icon: [384, 512, [129380], "e363", "M232.6-16C207.2-16 185 1.1 178.5 25.6L159.7 96 32 96C18.7 96 8 106.7 8 120s10.7 24 24 24L60.2 468.2C62.3 493 83.1 512 108 512l168 0c24.9 0 45.7-19 47.8-43.8L352 144c13.3 0 24-10.7 24-24s-10.7-24-24-24l-142.6 0 15.5-58.1c.9-3.5 4.1-5.9 7.7-5.9L264 32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-31.4 0zM80.2 144l223.6 0-27.8 320-168 0-27.8-320z"]
}, K8 = {
  prefix: "far",
  iconName: "salad",
  icon: [512, 512, [129367, "bowl-salad"], "f81e", "M272 208c0 11 1.2 21.7 3.6 32l-31.6 0 0-128c0-11-9-20-20-20s-20 9-20 20l0 127.7-93.9-93.9c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L147.7 240 96 240c-53 0-96-43-96-96S43 48 96 48c8.7 0 17.2 1.2 25.3 3.4 17.2-39.6 56.8-67.4 102.7-67.4s85.5 27.7 102.7 67.4c8-2.2 16.5-3.4 25.3-3.4 19.9 0 38.3 6 53.6 16.4-74.7 5.3-133.6 67.6-133.6 143.6zM117.9 422.3c12.9 5.7 22.7 16.7 26.8 30.3 2 6.6 8.2 11.4 15.3 11.4l192 0c7.2 0 13.4-4.8 15.3-11.4 4-13.5 13.8-24.6 26.8-30.3 35.2-15.4 61.2-47.6 68.1-86.3L49.8 336c6.9 38.7 32.9 70.9 68.1 86.3zM0 315.4C0 300.3 12.3 288 27.4 288l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 67.4-40.6 125.4-98.6 150.8-7.9 26.4-32.4 45.7-61.4 45.7l-192 0c-29 0-53.5-19.3-61.4-45.7-58.1-25.4-98.6-83.4-98.6-150.8zM464 208c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32l-54.8 0c-3.5-10-5.5-20.8-5.5-32 0-53 43-96 96-96s96 43 96 96c0 11.2-1.9 22-5.5 32l-54.8 0c7.6-8.5 12.2-19.7 12.2-32z"]
}, Q8 = {
  prefix: "far",
  iconName: "paw-simple",
  icon: [448, 512, ["paw-alt"], "f701", "M192 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-.7 146.1c7.1-11.3 19.4-18.1 32.7-18.1s25.7 6.9 32.7 18.1l49.2 78.6c8.7 14 20.9 22.8 32.2 28.1 17.8 8.4 30 26.4 30 47.1 0 28.7-23.3 52-52 52-11.1 0-21.2-3.4-29.6-9.2-19.6-13.6-43.8-17.6-62.4-17.6s-42.8 4-62.4 17.6c-8.4 5.8-18.5 9.2-29.6 9.2-28.7 0-52-23.3-52-52 0-20.8 12.2-38.8 30-47.1 11.2-5.3 23.4-14.1 32.2-28.1l49.2-78.6zm-89.9 53.2c-2.8 4.5-7.1 7.8-11.8 10.1-34 16-57.6 50.5-57.6 90.6 0 55.2 44.8 100 100 100 21.2 0 40.8-6.6 56.9-17.8 17.4-12 52.8-12 70.1 0 16.2 11.2 35.8 17.8 56.9 17.8 55.2 0 100-44.8 100-100 0-40.1-23.6-74.6-57.6-90.6-4.8-2.2-9-5.6-11.8-10.1l-49.1-78.6C281.6 175.4 253.9 160 224 160s-57.6 15.4-73.4 40.7l-49.2 78.6zM304 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm144 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 240a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, X8 = {
  prefix: "far",
  iconName: "cheese-swiss",
  icon: [512, 512, [129472], "f7f0", "M464 256l0-15.8c0-88.5-71.7-160.2-160.2-160.2-.8 0-1.6 .2-2.3 .7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2C50 248.4 48 252.1 48 256l274.7 0c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32l50.7 0zM48 304l0 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-112-60.2 0c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16L48 304zm464-63.8L512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2zM176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
}, ew = {
  prefix: "far",
  iconName: "capsules",
  icon: [576, 512, [], "f46b", "M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112-128 0 0-112zm0 288l0-125.3 128 0 0 125.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM32 112l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-105.8 116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3c-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112zM283.4 249.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l53.3 77.7-106.1 74.3-51.5-75.1zM411.9 436.6l-49.8-72.6 106.1-74.3 48 70c20.9 30.4 13.3 72.2-15.8 93-28.5 20.4-68 13.7-88.5-16.2z"]
}, tw = {
  prefix: "far",
  iconName: "cookie",
  icon: [512, 512, [127850], "f563", "M240.5 64.6c-12-1.7-24.3 .5-35.1 6.2l-74 39.5C120.7 116 112 125 106.6 136L69.9 211.6c-5.4 11-7.1 23.5-5 35.6L79.4 330c2.1 12.1 8 23.2 16.8 31.7l60.3 58.4c8.8 8.5 20 14 32 15.7l83 11.7c12 1.7 24.3-.5 35.1-6.2l74-39.5C391.3 396 400 387 405.4 376l36.7-75.5c5.4-11 7.1-23.5 5-35.6L432.6 182c-2.1-12.1-8-23.2-16.8-31.7L355.5 91.9c-8.8-8.5-20-14-32-15.7l-83-11.7zM182.8 28.4c19.7-10.5 42.3-14.5 64.4-11.4l83 11.7c22.1 3.1 42.7 13.2 58.7 28.7l60.3 58.4c16.1 15.6 26.8 35.8 30.7 57.9l14.6 82.8c3.9 22.1 .7 44.8-9.1 64.9L448.6 397c-9.8 20.1-25.7 36.6-45.4 47.2l-74 39.5c-19.7 10.5-42.3 14.5-64.4 11.4l-83-11.7c-22.1-3.1-42.7-13.2-58.7-28.7L62.8 396.2C46.8 380.6 36 360.3 32.2 338.3L17.6 255.5c-3.9-22.1-.7-44.8 9.1-64.9L63.4 115c9.8-20.1 25.7-36.6 45.4-47.2l74-39.5zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, nw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  faAngleDown: G8,
  faBottleBaby: B8,
  faBottleDroplet: D8,
  faBowlSpoon: R8,
  faBreadLoaf: V8,
  faCalendar: z8,
  faCanFood: Z8,
  faCapsules: ew,
  faCarrot: N8,
  faCheeseSwiss: X8,
  faCookie: tw,
  faCupStraw: J8,
  faFish: q8,
  faLeaf: U8,
  faMinus: L8,
  faOliveBranch: j8,
  faPawSimple: Q8,
  faPlus: Y8,
  faPumpSoap: P8,
  faSalad: K8,
  faSnowflake: W8,
  faSprayCanSparkles: H8,
  faSteak: _8,
  faTrash: M8,
  faWheat: O8
});
dm(nw);
function ql(t, e) {
  const n = lm(t);
  return n.config.globalProperties.t = (s) => Homey.__(s) ?? s, n.use(Dm()), n.mount(e), n;
}
function rw(t) {
  ql(k8, t);
}
function aw(t) {
  ql(C8, t);
}
function lw(t) {
  ql($8, t);
}
window.onHomeyReady = function() {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("homeyReady"));
  }, 300);
};
export {
  kf as ButtonPrimary,
  sw as ButtonTransparent,
  wf as ColorPicker,
  If as Form,
  ii as FormGroup,
  Sf as FormInput,
  Mn as Icon,
  Tf as IconPicker,
  iw as ScrollContainer,
  rw as createListWidget,
  aw as createPairView,
  lw as createRepairView,
  vf as useToday,
  _t as useTranslate
};
