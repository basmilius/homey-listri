var co, fo;
let Pu, ot, Be, Ms, Es, Rr, dl, Hu, di, fl;
function fa(e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
let Te = {}, Hi = [], nn = () => {
}, Xd = () => !1, ha = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || 97 > e.charCodeAt(2)), Kl = (e) => e.startsWith("onUpdate:"), qe = Object.assign, Ql = (e, t) => {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $m = Object.prototype.hasOwnProperty, Ee = (e, t) => $m.call(e, t), te = Array.isArray, ce = (e) => typeof e == "function", Ve = (e) => typeof e == "string", qt = (e) => typeof e == "symbol", Le = (e) => e !== null && typeof e == "object", Kd = (e) => (Le(e) || ce(e)) && ce(e.then) && ce(e.catch), et = Object.prototype.toString, ma = (e) => Ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $s = fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), pa = (e) => {
  let t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Am = /-\w/g, Mt = pa((e) => e.replace(Am, (t) => t.slice(1).toUpperCase())), Fm = /\B([A-Z])/g, ii = pa((e) => e.replace(Fm, "-$1").toLowerCase()), ga = pa((e) => e.charAt(0).toUpperCase() + e.slice(1)), ho = pa((e) => e ? `on${ga(e)}` : ""), xt = (e, t) => !Object.is(e, t), $r = (e, ...t) => {
  for (let n = 0; n < e.length; n++) e[n](...t);
}, Qd = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: i, value: n });
}, ya = (e) => {
  let t = parseFloat(e);
  return isNaN(t) ? e : t;
}, mo = (e) => {
  let t = Ve(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
}, va = () => Pu || (Pu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Lm = fa("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function wt(e) {
  if (te(e)) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
      let i = e[n], s = Ve(i) ? (function(r) {
        let a = {};
        return r.replace(Bm, "").split(Om).forEach((o) => {
          if (o) {
            let l = o.split(Dm);
            l.length > 1 && (a[l[0].trim()] = l[1].trim());
          }
        }), a;
      })(i) : wt(i);
      if (s) for (let r in s) t[r] = s[r];
    }
    return t;
  }
  if (Ve(e) || Le(e)) return e;
}
let Om = /;(?![^(]*\))/g, Dm = /:([^]+)/, Bm = /\/\*[^]*?\*\//g;
function E(e) {
  let t = "";
  if (Ve(e)) t = e;
  else if (te(e)) for (let n = 0; n < e.length; n++) {
    let i = E(e[n]);
    i && (t += i + " ");
  }
  else if (Le(e)) for (let n in e) e[n] && (t += n + " ");
  return t.trim();
}
function po(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ve(t) && (e.class = E(t)), n && (e.style = wt(n)), e;
}
let _m = fa("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function Si(e, t) {
  let n, i;
  if (e === t) return !0;
  let s = (n = e, et.call(n) === "[object Date]"), r = (i = t, et.call(i) === "[object Date]");
  if (s || r) return !!s && !!r && e.getTime() === t.getTime();
  if (s = qt(e), r = qt(t), s || r) return e === t;
  if (s = te(e), r = te(t), s || r) return !!s && !!r && (function(a, o) {
    if (a.length !== o.length) return !1;
    let l = !0;
    for (let u = 0; l && u < a.length; u++) l = Si(a[u], o[u]);
    return l;
  })(e, t);
  if (s = Le(e), r = Le(t), s || r) {
    if (!s || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
    for (let a in e) {
      let o = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (o && !l || !o && l || !Si(e[a], t[a])) return !1;
    }
  }
  return String(e) === String(t);
}
function eu(e, t) {
  return e.findIndex((n) => Si(n, t));
}
let ef = (e) => !!(e && e.__v_isRef === !0), we = (e) => Ve(e) ? e : e == null ? "" : te(e) || Le(e) && (e.toString === et || !ce(e.toString)) ? ef(e) ? we(e.value) : JSON.stringify(e, tf, 2) : String(e), tf = (e, t) => {
  let n;
  if (ef(t)) return tf(e, t.value);
  if (n = t, et.call(n) === "[object Map]") return { [`Map(${t.size})`]: [...t.entries()].reduce((i, [s, r], a) => (i[go(s, a) + " =>"] = r, i), {}) };
  {
    let i;
    if (i = t, et.call(i) === "[object Set]") return { [`Set(${t.size})`]: [...t.values()].map((s) => go(s)) };
    {
      if (qt(t)) return go(t);
      let s;
      if (Le(t) && !te(t) && (s = t, et.call(s) !== "[object Object]")) return String(t);
    }
  }
  return t;
}, go = (e, t = "") => {
  var n;
  return qt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
class nf {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ot, !t && ot && (this.index = (ot.scopes || (ot.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      let t, n;
      if (this._isPaused = !0, this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      let t, n;
      if (this._isPaused = !1, this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      let n = ot;
      try {
        return ot = this, t();
      } finally {
        ot = n;
      }
    }
  }
  on() {
    ++this._on == 1 && (this.prevScope = ot, ot = this);
  }
  off() {
    this._on > 0 && --this._on == 0 && (ot = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, this._active = !1, i = this.effects.length; n < i; n++) this.effects[n].stop();
      for (n = 0, this.effects.length = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        let s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function sf(e) {
  return new nf(e);
}
function rf() {
  return ot;
}
function af(e, t = !1) {
  ot && ot.cleanups.push(e);
}
let yo = /* @__PURE__ */ new WeakSet();
class of {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ot && ot.active && ot.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, yo.has(this) && (yo.delete(this), this.trigger()));
  }
  notify() {
    (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || lf(this));
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, Wu(this), uf(this);
    let t = Be, n = Wt;
    Be = this, Wt = !0;
    try {
      return this.fn();
    } finally {
      cf(this), Be = t, Wt = n, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let t = this.deps; t; t = t.nextDep) nu(t);
      this.deps = this.depsTail = void 0, Wu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? yo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    hl(this) && this.run();
  }
  get dirty() {
    return hl(this);
  }
}
let ba = 0;
function lf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Es, Es = e;
    return;
  }
  e.next = Ms, Ms = e;
}
function tu() {
  let e;
  if (!(--ba > 0)) {
    if (Es) {
      let t = Es;
      for (Es = void 0; t; ) {
        let n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    for (; Ms; ) {
      let t = Ms;
      for (Ms = void 0; t; ) {
        let n = t.next;
        if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
}
function uf(e) {
  for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function cf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    let s = i.prevDep;
    i.version === -1 ? (i === n && (n = s), nu(i), (function(r) {
      let { prevDep: a, nextDep: o } = r;
      a && (a.nextDep = o, r.prevDep = void 0), o && (o.prevDep = a, r.nextDep = void 0);
    })(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = s;
  }
  e.deps = t, e.depsTail = n;
}
function hl(e) {
  for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (df(t.dep.computed) || t.dep.version !== t.version)) return !0;
  return !!e._dirty;
}
function df(e) {
  if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === zs) || (e.globalVersion = zs, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !hl(e)))) return;
  e.flags |= 2;
  let t = e.dep, n = Be, i = Wt;
  Be = e, Wt = !0;
  try {
    uf(e);
    let s = e.fn(e._value);
    (t.version === 0 || xt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Be = n, Wt = i, cf(e), e.flags &= -3;
  }
}
function nu(e, t = !1) {
  let { dep: n, prevSub: i, nextSub: s } = e;
  if (i && (i.nextSub = s, e.prevSub = void 0), s && (s.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) nu(r, !0);
  }
  t || --n.sc || !n.map || n.map.delete(n.key);
}
let Wt = !0, ff = [];
function wn() {
  ff.push(Wt), Wt = !1;
}
function xn() {
  let e = ff.pop();
  Wt = e === void 0 || e;
}
function Wu(e) {
  let { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    let n = Be;
    Be = void 0;
    try {
      t();
    } finally {
      Be = n;
    }
  }
}
let zs = 0;
class Nm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ka {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Be || !Wt || Be === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Be) n = this.activeLink = new Nm(Be, this), Be.deps ? (n.prevDep = Be.depsTail, Be.depsTail.nextDep = n, Be.depsTail = n) : Be.deps = Be.depsTail = n, (function i(s) {
      if (s.dep.sc++, 4 & s.sub.flags) {
        let r = s.dep.computed;
        if (r && !s.dep.subs) {
          r.flags |= 20;
          for (let o = r.deps; o; o = o.nextDep) i(o);
        }
        let a = s.dep.subs;
        a !== s && (s.prevSub = a, a && (a.nextSub = s)), s.dep.subs = s;
      }
    })(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      let i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Be.depsTail, n.nextDep = void 0, Be.depsTail.nextDep = n, Be.depsTail = n, Be.deps === n && (Be.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, zs++, this.notify(t);
  }
  notify(t) {
    ba++;
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      tu();
    }
  }
}
let zr = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ Symbol(""), ml = /* @__PURE__ */ Symbol(""), Ps = /* @__PURE__ */ Symbol("");
function ut(e, t, n) {
  if (Wt && Be) {
    let i = zr.get(e);
    i || zr.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || (i.set(n, s = new ka()), s.map = i, s.key = n), s.track();
  }
}
function pn(e, t, n, i, s, r) {
  let a = zr.get(e);
  if (!a) return void zs++;
  let o = (l) => {
    l && l.trigger();
  };
  if (ba++, t === "clear") a.forEach(o);
  else {
    let l = te(e), u = l && ma(n);
    if (l && n === "length") {
      let d = Number(i);
      a.forEach((f, m) => {
        (m === "length" || m === Ps || !qt(m) && m >= d) && o(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), u && o(a.get(Ps)), t) {
      case "add":
        if (l) u && o(a.get("length"));
        else {
          let f;
          o(a.get(yi)), f = e, et.call(f) === "[object Map]" && o(a.get(ml));
        }
        break;
      case "delete":
        if (!l) {
          let f;
          o(a.get(yi)), f = e, et.call(f) === "[object Map]" && o(a.get(ml));
        }
        break;
      case "set":
        let d;
        d = e, et.call(d) === "[object Map]" && o(a.get(yi));
    }
  }
  tu();
}
function Oi(e) {
  let t = be(e);
  return t === e ? t : (ut(t, "iterate", Ps), It(e) ? t : t.map(Ut));
}
function wa(e) {
  return ut(e = be(e), "iterate", Ps), e;
}
function Hn(e, t) {
  return Sn(e) ? an(e) ? Wi(Ut(t)) : Wi(t) : Ut(t);
}
let Vm = { __proto__: null, [Symbol.iterator]() {
  return vo(this, Symbol.iterator, (e) => Hn(this, e));
}, concat(...e) {
  return Oi(this).concat(...e.map((t) => te(t) ? Oi(t) : t));
}, entries() {
  return vo(this, "entries", (e) => (e[1] = Hn(this, e[1]), e));
}, every(e, t) {
  return dn(this, "every", e, t, void 0, arguments);
}, filter(e, t) {
  return dn(this, "filter", e, t, (n) => n.map((i) => Hn(this, i)), arguments);
}, find(e, t) {
  return dn(this, "find", e, t, (n) => Hn(this, n), arguments);
}, findIndex(e, t) {
  return dn(this, "findIndex", e, t, void 0, arguments);
}, findLast(e, t) {
  return dn(this, "findLast", e, t, (n) => Hn(this, n), arguments);
}, findLastIndex(e, t) {
  return dn(this, "findLastIndex", e, t, void 0, arguments);
}, forEach(e, t) {
  return dn(this, "forEach", e, t, void 0, arguments);
}, includes(...e) {
  return bo(this, "includes", e);
}, indexOf(...e) {
  return bo(this, "indexOf", e);
}, join(e) {
  return Oi(this).join(e);
}, lastIndexOf(...e) {
  return bo(this, "lastIndexOf", e);
}, map(e, t) {
  return dn(this, "map", e, t, void 0, arguments);
}, pop() {
  return gs(this, "pop");
}, push(...e) {
  return gs(this, "push", e);
}, reduce(e, ...t) {
  return Uu(this, "reduce", e, t);
}, reduceRight(e, ...t) {
  return Uu(this, "reduceRight", e, t);
}, shift() {
  return gs(this, "shift");
}, some(e, t) {
  return dn(this, "some", e, t, void 0, arguments);
}, splice(...e) {
  return gs(this, "splice", e);
}, toReversed() {
  return Oi(this).toReversed();
}, toSorted(e) {
  return Oi(this).toSorted(e);
}, toSpliced(...e) {
  return Oi(this).toSpliced(...e);
}, unshift(...e) {
  return gs(this, "unshift", e);
}, values() {
  return vo(this, "values", (e) => Hn(this, e));
} };
function vo(e, t, n) {
  let i = wa(e), s = i[t]();
  return i === e || It(e) || (s._next = s.next, s.next = () => {
    let r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
let Rm = Array.prototype;
function dn(e, t, n, i, s, r) {
  let a = wa(e), o = a !== e && !It(e), l = a[t];
  if (l !== Rm[t]) {
    let f = l.apply(e, r);
    return o ? Ut(f) : f;
  }
  let u = n;
  a !== e && (o ? u = function(f, m) {
    return n.call(this, Hn(e, f), m, e);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, e);
  }));
  let d = l.call(a, u, i);
  return o && s ? s(d) : d;
}
function Uu(e, t, n, i) {
  let s = wa(e), r = n;
  return s !== e && (It(e) ? n.length > 3 && (r = function(a, o, l) {
    return n.call(this, a, o, l, e);
  }) : r = function(a, o, l) {
    return n.call(this, a, Hn(e, o), l, e);
  }), s[t](r, ...i);
}
function bo(e, t, n) {
  let i = be(e);
  ut(i, "iterate", Ps);
  let s = i[t](...n);
  return (s === -1 || s === !1) && Sa(n[0]) ? (n[0] = be(n[0]), i[t](...n)) : s;
}
function gs(e, t, n = []) {
  wn(), ba++;
  let i = be(e)[t].apply(e, n);
  return tu(), xn(), i;
}
let zm = fa("__proto__,__v_isRef,__isVue"), hf = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qt));
function Pm(e) {
  qt(e) || (e = String(e));
  let t = be(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
class mf {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    let s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return i === (s ? r ? Zm : bf : r ? vf : yf).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    let a = te(t);
    if (!s) {
      let l;
      if (a && (l = Vm[n])) return l;
      if (n === "hasOwnProperty") return Pm;
    }
    let o = Reflect.get(t, n, ze(t) ? t : i);
    if ((qt(n) ? hf.has(n) : zm(n)) || (s || ut(t, "get", n), r)) return o;
    if (ze(o)) {
      let l = a && ma(n) ? o : o.value;
      return s && Le(l) ? jn(l) : l;
    }
    return Le(o) ? s ? jn(o) : un(o) : o;
  }
}
class pf extends mf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n], a = te(t) && ma(n);
    if (!this._isShallow) {
      let u = Sn(r);
      if (It(i) || Sn(i) || (r = be(r), i = be(i)), !a && ze(r) && !ze(i)) return u || (r.value = i), !0;
    }
    let o = a ? Number(n) < t.length : Ee(t, n), l = Reflect.set(t, n, i, ze(t) ? t : s);
    return t === be(s) && (o ? xt(i, r) && pn(t, "set", n, i) : pn(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    let i = Ee(t, n);
    t[n];
    let s = Reflect.deleteProperty(t, n);
    return s && i && pn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    let i = Reflect.has(t, n);
    return qt(n) && hf.has(n) || ut(t, "has", n), i;
  }
  ownKeys(t) {
    return ut(t, "iterate", te(t) ? "length" : yi), Reflect.ownKeys(t);
  }
}
class gf extends mf {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
let Hm = new pf(), Wm = new gf(), Um = new pf(!0);
new gf(!0);
let ko = (e) => e;
function hr(e) {
  return function() {
    return e !== "delete" && (e === "clear" ? void 0 : this);
  };
}
function xa(e, t) {
  let n, i = (qe(n = { get(s) {
    let r = this.__v_raw, a = be(r), o = be(s);
    e || (xt(s, o) && ut(a, "get", s), ut(a, "get", o));
    let { has: l } = Reflect.getPrototypeOf(a), u = t ? ko : e ? Wi : Ut;
    return l.call(a, s) ? u(r.get(s)) : l.call(a, o) ? u(r.get(o)) : void (r !== a && r.get(s));
  }, get size() {
    let s = this.__v_raw;
    return e || ut(be(s), "iterate", yi), s.size;
  }, has(s) {
    let r = this.__v_raw, a = be(r), o = be(s);
    return e || (xt(s, o) && ut(a, "has", s), ut(a, "has", o)), s === o ? r.has(s) : r.has(s) || r.has(o);
  }, forEach(s, r) {
    let a = this, o = a.__v_raw, l = be(o), u = t ? ko : e ? Wi : Ut;
    return e || ut(l, "iterate", yi), o.forEach((d, f) => s.call(r, u(d), u(f), a));
  } }, e ? { add: hr("add"), set: hr("set"), delete: hr("delete"), clear: hr("clear") } : { add(s) {
    t || It(s) || Sn(s) || (s = be(s));
    let r = be(this);
    return Reflect.getPrototypeOf(r).has.call(r, s) || (r.add(s), pn(r, "add", s, s)), this;
  }, set(s, r) {
    t || It(r) || Sn(r) || (r = be(r));
    let a = be(this), { has: o, get: l } = Reflect.getPrototypeOf(a), u = o.call(a, s);
    u || (s = be(s), u = o.call(a, s));
    let d = l.call(a, s);
    return a.set(s, r), u ? xt(r, d) && pn(a, "set", s, r) : pn(a, "add", s, r), this;
  }, delete(s) {
    let r = be(this), { has: a, get: o } = Reflect.getPrototypeOf(r), l = a.call(r, s);
    l || (s = be(s), l = a.call(r, s)), o && o.call(r, s);
    let u = r.delete(s);
    return l && pn(r, "delete", s, void 0), u;
  }, clear() {
    let s = be(this), r = s.size !== 0, a = s.clear();
    return r && pn(s, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    n[s] = function(...r) {
      let a, o = this.__v_raw, l = be(o), u = (a = l, et.call(a) === "[object Map]"), d = s === "entries" || s === Symbol.iterator && u, f = o[s](...r), m = t ? ko : e ? Wi : Ut;
      return e || ut(l, "iterate", s === "keys" && u ? ml : yi), { next() {
        let { value: h, done: p } = f.next();
        return p ? { value: h, done: p } : { value: d ? [m(h[0]), m(h[1])] : m(h), done: p };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }), n);
  return (s, r, a) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(Ee(i, r) && r in s ? i : s, r, a);
}
let qm = { get: xa(!1, !1) }, jm = { get: xa(!1, !0) }, Gm = { get: xa(!0, !1) };
xa(!0, !0);
let yf = /* @__PURE__ */ new WeakMap(), vf = /* @__PURE__ */ new WeakMap(), bf = /* @__PURE__ */ new WeakMap(), Zm = /* @__PURE__ */ new WeakMap();
function un(e) {
  return Sn(e) ? e : iu(e, !1, Hm, qm, yf);
}
function Ym(e) {
  return iu(e, !1, Um, jm, vf);
}
function jn(e) {
  return iu(e, !0, Wm, Gm, bf);
}
function iu(e, t, n, i, s) {
  var r;
  let a;
  if (!Le(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  let o = (r = e).__v_skip || !Object.isExtensible(r) ? 0 : (function(d) {
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
  })((a = r, et.call(a)).slice(8, -1));
  if (o === 0) return e;
  let l = s.get(e);
  if (l) return l;
  let u = new Proxy(e, o === 2 ? i : n);
  return s.set(e, u), u;
}
function an(e) {
  return Sn(e) ? an(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Sn(e) {
  return !!(e && e.__v_isReadonly);
}
function It(e) {
  return !!(e && e.__v_isShallow);
}
function Sa(e) {
  return !!e && !!e.__v_raw;
}
function be(e) {
  let t = e && e.__v_raw;
  return t ? be(t) : e;
}
function Ia(e) {
  return !Ee(e, "__v_skip") && Object.isExtensible(e) && Qd(e, "__v_skip", !0), e;
}
let Ut = (e) => Le(e) ? un(e) : e, Wi = (e) => Le(e) ? jn(e) : e;
function ze(e) {
  return !!e && e.__v_isRef === !0;
}
function ne(e) {
  return kf(e, !1);
}
function Jm(e) {
  return kf(e, !0);
}
function kf(e, t) {
  return ze(e) ? e : new Xm(e, t);
}
class Xm {
  constructor(t, n) {
    this.dep = new ka(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : be(t), this._value = n ? t : Ut(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    let n = this._rawValue, i = this.__v_isShallow || It(t) || Sn(t);
    xt(t = i ? t : be(t), n) && (this._rawValue = t, this._value = i ? t : Ut(t), this.dep.trigger());
  }
}
function c(e) {
  return ze(e) ? e.value : e;
}
let Km = { get: (e, t, n) => t === "__v_raw" ? e : c(Reflect.get(e, t, n)), set: (e, t, n, i) => {
  let s = e[t];
  return ze(s) && !ze(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
} };
function wf(e) {
  return an(e) ? e : new Proxy(e, Km);
}
class Qm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    let n = this.dep = new ka(), { get: i, set: s } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = s;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function xf(e) {
  return new Qm(e);
}
function e1(e) {
  let t = te(e) ? Array(e.length) : {};
  for (let n in e) t[n] = new Sf(e, n, void 0);
  return t;
}
class Sf {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0, this._value = void 0, this._raw = be(t);
    let s = !0, r = t;
    if (!te(t) || !ma(String(n))) do
      s = !Sa(r) || It(r);
    while (s && (r = r.__v_raw));
    this._shallow = s;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = c(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && ze(this._raw[this._key])) {
      let n = this._object[this._key];
      if (ze(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    var t, n;
    let i;
    return t = this._raw, n = this._key, (i = zr.get(t)) && i.get(n);
  }
}
class t1 {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function In(e, t, n) {
  return ze(e) ? e : ce(e) ? new t1(e) : !Le(e) || !(arguments.length > 1) ? ne(e) : new Sf(e, t, n);
}
class n1 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ka(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && Be !== this) return lf(this, !0), !0;
  }
  get value() {
    let t = this.dep.track();
    return df(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
let mr = {}, Pr = /* @__PURE__ */ new WeakMap();
function i1(e, t = !1, n = di) {
  if (n) {
    let i = Pr.get(n);
    i || Pr.set(n, i = []), i.push(e);
  }
}
function gn(e, t = 1 / 0, n) {
  if (t <= 0 || !Le(e) || e.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(e) || 0) >= t) return e;
  if (n.set(e, t), t--, ze(e)) gn(e.value, t, n);
  else if (te(e)) for (let i = 0; i < e.length; i++) gn(e[i], t, n);
  else {
    let i, s;
    if (i = e, et.call(i) === "[object Set]" || (s = e, et.call(s) === "[object Map]")) e.forEach((r) => {
      gn(r, t, n);
    });
    else {
      let r;
      if (r = e, et.call(r) === "[object Object]") {
        for (let a in e) gn(e[a], t, n);
        for (let a of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, a) && gn(e[a], t, n);
      }
    }
  }
  return e;
}
function Xs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    Ta(s, t, n);
  }
}
function jt(e, t, n, i) {
  if (ce(e)) {
    let s = Xs(e, t, n, i);
    return s && Kd(s) && s.catch((r) => {
      Ta(r, t, n);
    }), s;
  }
  if (te(e)) {
    let s = [];
    for (let r = 0; r < e.length; r++) s.push(jt(e[r], t, n, i));
    return s;
  }
}
function Ta(e, t, n, i = !0) {
  t && t.vnode;
  let { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Te;
  if (t) {
    let a = t.parent, o = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      let u = a.ec;
      if (u) {
        for (let d = 0; d < u.length; d++) if (u[d](e, o, l) === !1) return;
      }
      a = a.parent;
    }
    if (s) {
      wn(), Xs(s, null, 10, [e, o, l]), xn();
      return;
    }
  }
  (function(a, o, l, u = !0, d = !1) {
    if (d) throw a;
    console.error(a);
  })(e, 0, 0, i, r);
}
let yt = [], Qt = -1, Ui = [], Wn = null, Vi = 0, If = Promise.resolve(), Ar = null;
function mi(e) {
  let t = Ar || If;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function su(e) {
  if (!(1 & e.flags)) {
    let t = As(e), n = yt[yt.length - 1];
    !n || !(2 & e.flags) && t >= As(n) ? yt.push(e) : yt.splice((function(i) {
      let s = Qt + 1, r = yt.length;
      for (; s < r; ) {
        let a = s + r >>> 1, o = yt[a], l = As(o);
        l < i || l === i && 2 & o.flags ? s = a + 1 : r = a;
      }
      return s;
    })(t), 0, e), e.flags |= 1, Tf();
  }
}
function Tf() {
  Ar || (Ar = If.then(function e(t) {
    try {
      for (Qt = 0; Qt < yt.length; Qt++) {
        let n = yt[Qt];
        n && !(8 & n.flags) && (4 & n.flags && (n.flags &= -2), Xs(n, n.i, n.i ? 15 : 14), 4 & n.flags || (n.flags &= -2));
      }
    } finally {
      for (; Qt < yt.length; Qt++) {
        let n = yt[Qt];
        n && (n.flags &= -2);
      }
      Qt = -1, yt.length = 0, Cf(), Ar = null, (yt.length || Ui.length) && e();
    }
  }));
}
function s1(e) {
  te(e) ? Ui.push(...e) : Wn && e.id === -1 ? Wn.splice(Vi + 1, 0, e) : 1 & e.flags || (Ui.push(e), e.flags |= 1), Tf();
}
function qu(e, t, n = Qt + 1) {
  for (; n < yt.length; n++) {
    let i = yt[n];
    if (i && 2 & i.flags) {
      if (e && i.id !== e.uid) continue;
      yt.splice(n, 1), n--, 4 & i.flags && (i.flags &= -2), i(), 4 & i.flags || (i.flags &= -2);
    }
  }
}
function Cf(e) {
  if (Ui.length) {
    let t = [...new Set(Ui)].sort((n, i) => As(n) - As(i));
    if (Ui.length = 0, Wn) return void Wn.push(...t);
    for (Vi = 0, Wn = t; Vi < Wn.length; Vi++) {
      let n = Wn[Vi];
      4 & n.flags && (n.flags &= -2), 8 & n.flags || n(), n.flags &= -2;
    }
    Wn = null, Vi = 0;
  }
}
let As = (e) => e.id == null ? 2 & e.flags ? -1 : 1 / 0 : e.id, rt = null, Mf = null;
function Hr(e) {
  let t = rt;
  return rt = e, Mf = e && e.type.__scopeId || null, t;
}
function j(e, t = rt, n) {
  if (!t || e._n) return e;
  let i = (...s) => {
    let r;
    i._d && Zr(-1);
    let a = Hr(t);
    try {
      r = e(...s);
    } finally {
      Hr(a), i._d && Zr(1);
    }
    return r;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function ru(e, t) {
  if (rt === null) return e;
  let n = Aa(rt), i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, a, o, l = Te] = t[s];
    r && (ce(r) && (r = { mounted: r, updated: r }), r.deep && gn(a), i.push({ dir: r, instance: n, value: a, oldValue: void 0, arg: o, modifiers: l }));
  }
  return e;
}
function ai(e, t, n, i) {
  let s = e.dirs, r = t && t.dirs;
  for (let a = 0; a < s.length; a++) {
    let o = s[a];
    r && (o.oldValue = r[a].value);
    let l = o.dir[i];
    l && (wn(), jt(l, n, 8, [e.el, o, e, t]), xn());
  }
}
let Ef = /* @__PURE__ */ Symbol("_vte"), Ss = (e) => e && (e.disabled || e.disabled === ""), ju = (e) => e && (e.defer || e.defer === ""), Gu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Zu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, wo = (e, t) => {
  let n = e && e.to;
  return Ve(n) ? t ? t(n) : null : n;
}, $f = { name: "Teleport", __isTeleport: !0, process(e, t, n, i, s, r, a, o, l, u) {
  let { mc: d, pc: f, pbc: m, o: { insert: h, querySelector: p, createText: b } } = u, x = Ss(t.props), { shapeFlag: k, children: $, dynamicChildren: S } = t;
  if (e == null) {
    let R = t.el = b(""), w = t.anchor = b("");
    h(R, n, i), h(w, n, i);
    let I = (F, L) => {
      16 & k && d($, F, L, s, r, a, o, l);
    }, U = () => {
      let F = t.target = wo(t.props, p), L = Yu(F, t, b, h);
      F && (a !== "svg" && Gu(F) ? a = "svg" : a !== "mathml" && Zu(F) && (a = "mathml"), s && s.isCE && (s.ce._teleportTargets || (s.ce._teleportTargets = /* @__PURE__ */ new Set())).add(F), x || (I(F, L), gr(t, !1)));
    };
    x && (I(n, w), gr(t, !0)), ju(t.props) ? (t.el.__isMounted = !1, pt(() => {
      U(), delete t.el.__isMounted;
    }, r)) : U();
  } else {
    if (ju(t.props) && e.el.__isMounted === !1) return void pt(() => {
      $f.process(e, t, n, i, s, r, a, o, l, u);
    }, r);
    t.el = e.el, t.targetStart = e.targetStart;
    let R = t.anchor = e.anchor, w = t.target = e.target, I = t.targetAnchor = e.targetAnchor, U = Ss(e.props), F = U ? n : w, L = U ? R : I;
    if (a === "svg" || Gu(w) ? a = "svg" : (a === "mathml" || Zu(w)) && (a = "mathml"), S ? (m(e.dynamicChildren, S, F, s, r, a, o), hu(e, t, !0)) : l || f(e, t, F, L, s, r, a, o, !1), x) U ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : pr(t, n, R, u, 1);
    else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
      let W = t.target = wo(t.props, p);
      W && pr(t, W, null, u, 0);
    } else U && pr(t, w, I, u, 1);
    gr(t, x);
  }
}, remove(e, t, n, { um: i, o: { remove: s } }, r) {
  let { shapeFlag: a, children: o, anchor: l, targetStart: u, targetAnchor: d, target: f, props: m } = e;
  if (f && (s(u), s(d)), r && s(l), 16 & a) {
    let h = r || !Ss(m);
    for (let p = 0; p < o.length; p++) {
      let b = o[p];
      i(b, t, n, h, !!b.dynamicChildren);
    }
  }
}, move: pr, hydrate: function(e, t, n, i, s, r, { o: { nextSibling: a, parentNode: o, querySelector: l, insert: u, createText: d } }, f) {
  function m(b, x, k, $) {
    x.anchor = f(a(b), x, o(b), n, i, s, r), x.targetStart = k, x.targetAnchor = $;
  }
  let h = t.target = wo(t.props, l), p = Ss(t.props);
  if (h) {
    let b = h._lpa || h.firstChild;
    if (16 & t.shapeFlag) if (p) m(e, t, b, b && a(b));
    else {
      t.anchor = a(e);
      let x = b;
      for (; x; ) {
        if (x && x.nodeType === 8) {
          if (x.data === "teleport start anchor") t.targetStart = x;
          else if (x.data === "teleport anchor") {
            t.targetAnchor = x, h._lpa = t.targetAnchor && a(t.targetAnchor);
            break;
          }
        }
        x = a(x);
      }
      t.targetAnchor || Yu(h, t, d, u), f(b && a(b), t, h, n, i, s, r);
    }
    gr(t, p);
  } else p && 16 & t.shapeFlag && m(e, t, e, a(e));
  return t.anchor && a(t.anchor);
} };
function pr(e, t, n, { o: { insert: i }, m: s }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  let { el: a, anchor: o, shapeFlag: l, children: u, props: d } = e, f = r === 2;
  if (f && i(a, t, n), (!f || Ss(d)) && 16 & l) for (let m = 0; m < u.length; m++) s(u[m], t, n, 2);
  f && i(o, t, n);
}
let Af = $f;
function gr(e, t) {
  let n = e.ctx;
  if (n && n.ut) {
    let i, s;
    for (t ? (i = e.el, s = e.anchor) : (i = e.targetStart, s = e.targetAnchor); i && i !== s; ) i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Yu(e, t, n, i) {
  let s = t.targetStart = n(""), r = t.targetAnchor = n("");
  return s[Ef] = r, e && (i(s, e), i(r, e)), r;
}
let mn = /* @__PURE__ */ Symbol("_leaveCb"), yr = /* @__PURE__ */ Symbol("_enterCb");
function Ff() {
  let e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return $n(() => {
    e.isMounted = !0;
  }), lu(() => {
    e.isUnmounting = !0;
  }), e;
}
let $t = [Function, Array], Lf = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: $t, onEnter: $t, onAfterEnter: $t, onEnterCancelled: $t, onBeforeLeave: $t, onLeave: $t, onAfterLeave: $t, onLeaveCancelled: $t, onBeforeAppear: $t, onAppear: $t, onAfterAppear: $t, onAppearCancelled: $t }, Of = (e) => {
  let t = e.subTree;
  return t.component ? Of(t.component) : t;
};
function Df(e) {
  let t = e[0];
  if (e.length > 1) {
    for (let n of e) if (n.type !== st) {
      t = n;
      break;
    }
  }
  return t;
}
let r1 = { name: "BaseTransition", props: Lf, setup(e, { slots: t }) {
  let n = cn(), i = Ff();
  return () => {
    let s = t.default && au(t.default(), !0);
    if (!s || !s.length) return;
    let r = Df(s), a = be(e), { mode: o } = a;
    if (i.isLeaving) return xo(r);
    let l = Ju(r);
    if (!l) return xo(r);
    let u = Hs(l, a, i, n, (f) => u = f);
    l.type !== st && Ii(l, u);
    let d = n.subTree && Ju(n.subTree);
    if (d && d.type !== st && !hi(d, l) && Of(n).type !== st) {
      let f = Hs(d, a, i, n);
      if (Ii(d, f), o === "out-in" && l.type !== st) return i.isLeaving = !0, f.afterLeave = () => {
        i.isLeaving = !1, 8 & n.job.flags || n.update(), delete f.afterLeave, d = void 0;
      }, xo(r);
      o === "in-out" && l.type !== st ? f.delayLeave = (m, h, p) => {
        Bf(i, d)[String(d.key)] = d, m[mn] = () => {
          h(), m[mn] = void 0, delete u.delayedLeave, d = void 0;
        }, u.delayedLeave = () => {
          p(), delete u.delayedLeave, d = void 0;
        };
      } : d = void 0;
    } else d && (d = void 0);
    return r;
  };
} };
function Bf(e, t) {
  let { leavingVNodes: n } = e, i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Hs(e, t, n, i, s) {
  let { appear: r, mode: a, persisted: o = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: d, onEnterCancelled: f, onBeforeLeave: m, onLeave: h, onAfterLeave: p, onLeaveCancelled: b, onBeforeAppear: x, onAppear: k, onAfterAppear: $, onAppearCancelled: S } = t, R = String(e.key), w = Bf(n, e), I = (L, W) => {
    L && jt(L, i, 9, W);
  }, U = (L, W) => {
    let Q = W[1];
    I(L, W), te(L) ? L.every((N) => N.length <= 1) && Q() : L.length <= 1 && Q();
  }, F = { mode: a, persisted: o, beforeEnter(L) {
    let W = l;
    if (!n.isMounted) if (r) W = x || l;
    else return;
    L[mn] && L[mn](!0);
    let Q = w[R];
    Q && hi(e, Q) && Q.el[mn] && Q.el[mn](), I(W, [L]);
  }, enter(L) {
    let W = u, Q = d, N = f;
    if (!n.isMounted) if (r) W = k || u, Q = $ || d, N = S || f;
    else return;
    let ie = !1, me = L[yr] = (ue) => {
      ie || (ie = !0, ue ? I(N, [L]) : I(Q, [L]), F.delayedLeave && F.delayedLeave(), L[yr] = void 0);
    };
    W ? U(W, [L, me]) : me();
  }, leave(L, W) {
    let Q = String(e.key);
    if (L[yr] && L[yr](!0), n.isUnmounting) return W();
    I(m, [L]);
    let N = !1, ie = L[mn] = (me) => {
      N || (N = !0, W(), me ? I(b, [L]) : I(p, [L]), L[mn] = void 0, w[Q] === e && delete w[Q]);
    };
    w[Q] = e, h ? U(h, [L, ie]) : ie();
  }, clone(L) {
    let W = Hs(L, t, n, i, s);
    return s && s(W), W;
  } };
  return F;
}
function xo(e) {
  if (Ca(e)) return (e = Kn(e)).children = null, e;
}
function Ju(e) {
  if (!Ca(e)) return e.type.__isTeleport && e.children ? Df(e.children) : e;
  if (e.component) return e.component.subTree;
  let { shapeFlag: t, children: n } = e;
  if (n) {
    if (16 & t) return n[0];
    if (32 & t && ce(n.default)) return n.default();
  }
}
function Ii(e, t) {
  6 & e.shapeFlag && e.component ? (e.transition = t, Ii(e.component.subTree, t)) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function au(e, t = !1, n) {
  let i = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let a = e[r], o = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === pe ? (128 & a.patchFlag && s++, i = i.concat(au(a.children, t, o))) : (t || a.type !== st) && i.push(o != null ? Kn(a, { key: o }) : a);
  }
  if (s > 1) for (let r = 0; r < i.length; r++) i[r].patchFlag = -2;
  return i;
}
function q(e, t) {
  return ce(e) ? qe({ name: e.name }, t, { setup: e }) : e;
}
function ou() {
  let e = cn();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function _f(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vn(e) {
  let t = cn(), n = Jm(null);
  return t && Object.defineProperty(t.refs === Te ? t.refs = {} : t.refs, e, { enumerable: !0, get: () => n.value, set: (i) => n.value = i }), n;
}
let Wr = /* @__PURE__ */ new WeakMap();
function Fs(e, t, n, i, s = !1) {
  if (te(e)) return void e.forEach((p, b) => Fs(p, t && (te(t) ? t[b] : t), n, i, s));
  if (qi(i) && !s) {
    512 & i.shapeFlag && i.type.__asyncResolved && i.component.subTree.component && Fs(e, t, n, i.component.subTree);
    return;
  }
  let r = 4 & i.shapeFlag ? Aa(i.component) : i.el, a = s ? null : r, { i: o, r: l } = e, u = t && t.r, d = o.refs === Te ? o.refs = {} : o.refs, f = o.setupState, m = be(f), h = f === Te ? Xd : (p) => Ee(m, p);
  if (u != null && u !== l && (Xu(t), Ve(u) ? (d[u] = null, h(u) && (f[u] = null)) : ze(u) && (u.value = null, t.k && (d[t.k] = null))), ce(l)) Xs(l, o, 12, [a, d]);
  else {
    let p = Ve(l), b = ze(l);
    if (p || b) {
      let x = () => {
        if (e.f) {
          let k = p ? h(l) ? f[l] : d[l] : l.value;
          if (s) te(k) && Ql(k, r);
          else if (te(k)) k.includes(r) || k.push(r);
          else if (p) d[l] = [r], h(l) && (f[l] = d[l]);
          else {
            let $ = [r];
            l.value = $, e.k && (d[e.k] = $);
          }
        } else p ? (d[l] = a, h(l) && (f[l] = a)) : b && (l.value = a, e.k && (d[e.k] = a));
      };
      if (a) {
        let k = () => {
          x(), Wr.delete(e);
        };
        k.id = -1, Wr.set(e, k), pt(k, n);
      } else Xu(e), x();
    }
  }
}
function Xu(e) {
  let t = Wr.get(e);
  t && (t.flags |= 8, Wr.delete(e));
}
va().requestIdleCallback;
va().cancelIdleCallback;
let qi = (e) => !!e.type.__asyncLoader, Ca = (e) => e.type.__isKeepAlive;
function a1(e, t) {
  Nf(e, "a", t);
}
function o1(e, t) {
  Nf(e, "da", t);
}
function Nf(e, t, n = ct) {
  let i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated) return;
      s = s.parent;
    }
    return e();
  });
  if (Ur(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; ) Ca(s.parent.vnode) && (function(r, a, o, l) {
      let u = Ur(a, r, l, !0);
      Ci(() => {
        Ql(l[a], u);
      }, o);
    })(i, t, n, s), s = s.parent;
  }
}
function Ur(e, t, n = ct, i = !1) {
  if (n) {
    let s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...a) => {
      wn();
      let o = Qs(n), l = jt(t, n, e, a);
      return o(), xn(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
let En = (e) => (t, n = ct) => {
  qs && e !== "sp" || Ur(e, (...i) => t(...i), n);
}, l1 = En("bm"), $n = En("m"), u1 = En("bu"), Vf = En("u"), lu = En("bum"), Ci = En("um"), c1 = En("sp"), d1 = En("rtg"), f1 = En("rtc");
function h1(e, t = ct) {
  Ur("ec", e, t);
}
let Rf = "components";
function m1(e, t) {
  return Pf(Rf, e, !0, t) || e;
}
let zf = /* @__PURE__ */ Symbol.for("v-ndc");
function uu(e) {
  return Ve(e) ? Pf(Rf, e, !1) || e : e || zf;
}
function Pf(e, t, n = !0, i = !1) {
  let s = rt || ct;
  if (s) {
    let r = s.type;
    {
      let o = z1(r, !1);
      if (o && (o === t || o === Mt(t) || o === ga(Mt(t)))) return r;
    }
    let a = Ku(s[e] || r[e], t) || Ku(s.appContext[e], t);
    return !a && i ? r : a;
  }
}
function Ku(e, t) {
  return e && (e[t] || e[Mt(t)] || e[ga(Mt(t))]);
}
function kt(e, t, n, i) {
  let s, r = n, a = te(e);
  if (a || Ve(e)) {
    let o = a && an(e), l = !1, u = !1;
    o && (l = !It(e), u = Sn(e), e = wa(e)), s = Array(e.length);
    for (let d = 0, f = e.length; d < f; d++) s[d] = t(l ? u ? Wi(Ut(e[d])) : Ut(e[d]) : e[d], d, void 0, r);
  } else if (typeof e == "number") {
    s = Array(e);
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, r);
  } else if (Le(e)) if (e[Symbol.iterator]) s = Array.from(e, (o, l) => t(o, l, void 0, r));
  else {
    let o = Object.keys(e);
    s = Array(o.length);
    for (let l = 0, u = o.length; l < u; l++) {
      let d = o[l];
      s[l] = t(e[d], d, l, r);
    }
  }
  else s = [];
  return s;
}
function cu(e, t) {
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    if (te(i)) for (let s = 0; s < i.length; s++) e[i[s].name] = i[s].fn;
    else i && (e[i.name] = i.key ? (...s) => {
      let r = i.fn(...s);
      return r && (r.key = i.key), r;
    } : i.fn);
  }
  return e;
}
function oe(e, t, n = {}, i, s) {
  if (rt.ce || rt.parent && qi(rt.parent) && rt.parent.ce) {
    let u = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), y(), V(pe, null, [B("slot", n, i && i())], u ? -2 : 64);
  }
  let r = e[t];
  r && r._c && (r._d = !1), y();
  let a = r && Hf(r(n)), o = n.key || a && a.key, l = V(pe, { key: (o && !qt(o) ? o : `_${t}`) + (!a && i ? "_fb" : "") }, a || (i ? i() : []), a && e._ === 1 ? 64 : -2);
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Hf(e) {
  return e.some((t) => !Us(t) || t.type !== st && (t.type !== pe || !!Hf(t.children))) ? e : null;
}
let pl = (e) => e ? nh(e) ? Aa(e) : pl(e.parent) : null, Ls = qe(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => pl(e.parent), $root: (e) => pl(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => Uf(e), $forceUpdate: (e) => e.f || (e.f = () => {
  su(e.update);
}), $nextTick: (e) => e.n || (e.n = mi.bind(e.proxy)), $watch: (e) => x1.bind(e) }), So = (e, t) => e !== Te && !e.__isScriptSetup && Ee(e, t), gl = { get({ _: e }, t) {
  let n, i;
  if (t === "__v_skip") return !0;
  let { ctx: s, setupState: r, data: a, props: o, accessCache: l, type: u, appContext: d } = e;
  if (t[0] !== "$") {
    let m = l[t];
    if (m !== void 0) switch (m) {
      case 1:
        return r[t];
      case 2:
        return a[t];
      case 4:
        return s[t];
      case 3:
        return o[t];
    }
    else {
      if (So(r, t)) return l[t] = 1, r[t];
      if (a !== Te && Ee(a, t)) return l[t] = 2, a[t];
      if (Ee(o, t)) return l[t] = 3, o[t];
      if (s !== Te && Ee(s, t)) return l[t] = 4, s[t];
      yl && (l[t] = 0);
    }
  }
  let f = Ls[t];
  return f ? (t === "$attrs" && ut(e.attrs, "get", ""), f(e)) : (n = u.__cssModules) && (n = n[t]) ? n : s !== Te && Ee(s, t) ? (l[t] = 4, s[t]) : Ee(i = d.config.globalProperties, t) ? i[t] : void 0;
}, set({ _: e }, t, n) {
  let { data: i, setupState: s, ctx: r } = e;
  return So(s, t) ? (s[t] = n, !0) : i !== Te && Ee(i, t) ? (i[t] = n, !0) : !Ee(e.props, t) && !(t[0] === "$" && t.slice(1) in e) && (r[t] = n, !0);
}, has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, props: r, type: a } }, o) {
  let l;
  return !!(n[o] || e !== Te && o[0] !== "$" && Ee(e, o) || So(t, o) || Ee(r, o) || Ee(i, o) || Ee(Ls, o) || Ee(s.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
}, defineProperty(e, t, n) {
  return n.get != null ? e._.accessCache[t] = 0 : Ee(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
} };
qe({}, gl, { get(e, t) {
  if (t !== Symbol.unscopables) return gl.get(e, t, e);
}, has: (e, t) => t[0] !== "_" && !Lm(t) });
function Wf() {
  return p1().slots;
}
function p1(e) {
  let t = cn();
  return t.setupContext || (t.setupContext = sh(t));
}
function qr(e) {
  return te(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
function Gt(e, t) {
  return e && t ? te(e) && te(t) ? e.concat(t) : qe({}, qr(e), qr(t)) : e || t;
}
let yl = !0;
function Qu(e, t, n) {
  jt(te(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Uf(e) {
  let t, n = e.type, { mixins: i, extends: s } = n, { mixins: r, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, l = a.get(n);
  return l ? t = l : r.length || i || s ? (t = {}, r.length && r.forEach((u) => jr(t, u, o, !0)), jr(t, n, o)) : t = n, Le(n) && a.set(n, t), t;
}
function jr(e, t, n, i = !1) {
  let { mixins: s, extends: r } = t;
  for (let a in r && jr(e, r, n, !0), s && s.forEach((o) => jr(e, o, n, !0)), t) if (!(i && a === "expose")) {
    let o = g1[a] || n && n[a];
    e[a] = o ? o(e[a], t[a]) : t[a];
  }
  return e;
}
let g1 = { data: ec, props: tc, emits: tc, methods: ys, computed: ys, beforeCreate: mt, created: mt, beforeMount: mt, mounted: mt, beforeUpdate: mt, updated: mt, beforeDestroy: mt, beforeUnmount: mt, destroyed: mt, unmounted: mt, activated: mt, deactivated: mt, errorCaptured: mt, serverPrefetch: mt, components: ys, directives: ys, watch: function(e, t) {
  if (!e) return t;
  if (!t) return e;
  let n = qe(/* @__PURE__ */ Object.create(null), e);
  for (let i in t) n[i] = mt(e[i], t[i]);
  return n;
}, provide: ec, inject: function(e, t) {
  return ys(vl(e), vl(t));
} };
function ec(e, t) {
  return t ? e ? function() {
    return qe(ce(e) ? e.call(this, this) : e, ce(t) ? t.call(this, this) : t);
  } : t : e;
}
function vl(e) {
  if (te(e)) {
    let t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function mt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ys(e, t) {
  return e ? qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tc(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : qe(/* @__PURE__ */ Object.create(null), qr(e), qr(t ?? {})) : t;
}
function qf() {
  return { app: null, config: { isNativeTag: Xd, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let y1 = 0, vi = null;
function Xn(e, t) {
  if (ct) {
    let n = ct.provides, i = ct.parent && ct.parent.provides;
    i === n && (n = ct.provides = Object.create(i)), n[e] = t;
  }
}
function kn(e, t, n = !1) {
  let i = cn();
  if (i || vi) {
    let s = vi ? vi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && ce(t) ? t.call(i && i.proxy) : t;
  }
}
function v1() {
  return !!(cn() || vi);
}
let b1 = /* @__PURE__ */ Symbol.for("v-scx"), k1 = () => kn(b1);
function Ma(e, t) {
  return Ea(e, null, t);
}
function w1(e, t) {
  return Ea(e, null, { flush: "sync" });
}
function Re(e, t, n) {
  return Ea(e, t, n);
}
function Ea(e, t, n = Te) {
  let i, { immediate: s, flush: r } = n, a = qe({}, n), o = t && s || !t && r !== "post";
  if (qs) {
    if (r === "sync") {
      let f = k1();
      i = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!o) {
      let f = () => {
      };
      return f.stop = nn, f.resume = nn, f.pause = nn, f;
    }
  }
  let l = ct;
  a.call = (f, m, h) => jt(f, l, m, h);
  let u = !1;
  r === "post" ? a.scheduler = (f) => {
    pt(f, l && l.suspense);
  } : r !== "sync" && (u = !0, a.scheduler = (f, m) => {
    m ? f() : su(f);
  }), a.augmentJob = (f) => {
    t && (f.flags |= 4), u && (f.flags |= 2, l && (f.id = l.uid, f.i = l));
  };
  let d = (function(f, m, h = Te) {
    let p, b, x, k, { immediate: $, deep: S, once: R, scheduler: w, augmentJob: I, call: U } = h, F = (ue) => S ? ue : It(ue) || S === !1 || S === 0 ? gn(ue, 1) : gn(ue), L = !1, W = !1;
    if (ze(f) ? (b = () => f.value, L = It(f)) : an(f) ? (b = () => F(f), L = !0) : te(f) ? (W = !0, L = f.some((ue) => an(ue) || It(ue)), b = () => f.map((ue) => ze(ue) ? ue.value : an(ue) ? F(ue) : ce(ue) ? U ? U(ue, 2) : ue() : void 0)) : b = ce(f) ? m ? U ? () => U(f, 2) : f : () => {
      if (x) {
        wn();
        try {
          x();
        } finally {
          xn();
        }
      }
      let ue = di;
      di = p;
      try {
        return U ? U(f, 3, [k]) : f(k);
      } finally {
        di = ue;
      }
    } : nn, m && S) {
      let ue = b, Oe = S === !0 ? 1 / 0 : S;
      b = () => gn(ue(), Oe);
    }
    let Q = rf(), N = () => {
      p.stop(), Q && Q.active && Ql(Q.effects, p);
    };
    if (R && m) {
      let ue = m;
      m = (...Oe) => {
        ue(...Oe), N();
      };
    }
    let ie = W ? Array(f.length).fill(mr) : mr, me = (ue) => {
      if (1 & p.flags && (p.dirty || ue)) if (m) {
        let Oe = p.run();
        if (S || L || (W ? Oe.some((ge, ye) => xt(ge, ie[ye])) : xt(Oe, ie))) {
          x && x();
          let ge = di;
          di = p;
          try {
            let ye = [Oe, ie === mr ? void 0 : W && ie[0] === mr ? [] : ie, k];
            ie = Oe, U ? U(m, 3, ye) : m(...ye);
          } finally {
            di = ge;
          }
        }
      } else p.run();
    };
    return I && I(me), (p = new of(b)).scheduler = w ? () => w(me, !1) : me, k = (ue) => i1(ue, !1, p), x = p.onStop = () => {
      let ue = Pr.get(p);
      if (ue) {
        if (U) U(ue, 4);
        else for (let Oe of ue) Oe();
        Pr.delete(p);
      }
    }, m ? $ ? me(!0) : ie = p.run() : w ? w(me.bind(null, !0), !0) : p.run(), N.pause = p.pause.bind(p), N.resume = p.resume.bind(p), N.stop = N, N;
  })(e, t, a);
  return qs && (i ? i.push(d) : o && d()), d;
}
function x1(e, t, n) {
  let i, s = this.proxy, r = Ve(e) ? e.includes(".") ? jf(s, e) : () => s[e] : e.bind(s, s);
  ce(t) ? i = t : (i = t.handler, n = t);
  let a = Qs(this), o = Ea(r, i.bind(s), n);
  return a(), o;
}
function jf(e, t) {
  let n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++) i = i[n[s]];
    return i;
  };
}
function vt(e, t, n = Te) {
  let i = cn(), s = Mt(t), r = ii(t), a = Gf(e, s), o = xf((l, u) => {
    let d, f, m = Te;
    return w1(() => {
      let h = e[s];
      xt(d, h) && (d = h, u());
    }), { get: () => (l(), n.get ? n.get(d) : d), set(h) {
      let p = n.set ? n.set(h) : h;
      if (!xt(p, d) && !(m !== Te && xt(h, m))) return;
      let b = i.vnode.props;
      b && (t in b || s in b || r in b) && (`onUpdate:${t}` in b || `onUpdate:${s}` in b || `onUpdate:${r}` in b) || (d = h, u()), i.emit(`update:${t}`, p), xt(h, p) && xt(h, m) && !xt(p, f) && u(), m = h, f = p;
    } };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return { next: () => l < 2 ? { value: l++ ? a || Te : o, done: !1 } : { done: !0 } };
  }, o;
}
let Gf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mt(t)}Modifiers`] || e[`${ii(t)}Modifiers`];
function S1(e, t, ...n) {
  let i;
  if (e.isUnmounted) return;
  let s = e.vnode.props || Te, r = n, a = t.startsWith("update:"), o = a && Gf(s, t.slice(7));
  o && (o.trim && (r = n.map((d) => Ve(d) ? d.trim() : d)), o.number && (r = n.map(ya)));
  let l = s[i = ho(t)] || s[i = ho(Mt(t))];
  !l && a && (l = s[i = ho(ii(t))]), l && jt(l, e, 6, r);
  let u = s[i + "Once"];
  if (u) {
    if (e.emitted) {
      if (e.emitted[i]) return;
    } else e.emitted = {};
    e.emitted[i] = !0, jt(u, e, 6, r);
  }
}
let I1 = /* @__PURE__ */ new WeakMap();
function Gr(e, t) {
  return !!e && !!ha(t) && (Ee(e, (t = t.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t.slice(1)) || Ee(e, ii(t)) || Ee(e, t));
}
function nc(e) {
  let t, n, { type: i, vnode: s, proxy: r, withProxy: a, propsOptions: [o], slots: l, attrs: u, emit: d, render: f, renderCache: m, props: h, data: p, setupState: b, ctx: x, inheritAttrs: k } = e, $ = Hr(e);
  try {
    if (4 & s.shapeFlag) {
      let R = a || r;
      t = en(f.call(R, R, m, h, b, p, x)), n = u;
    } else t = en(i.length > 1 ? i(h, { attrs: u, slots: l, emit: d }) : i(h, null)), n = i.props ? u : T1(u);
  } catch (R) {
    Os.length = 0, Ta(R, e, 1), t = B(st);
  }
  let S = t;
  if (n && k !== !1) {
    let R = Object.keys(n), { shapeFlag: w } = S;
    R.length && 7 & w && (o && R.some(Kl) && (n = C1(n, o)), S = Kn(S, n, !1, !0));
  }
  return s.dirs && ((S = Kn(S, null, !1, !0)).dirs = S.dirs ? S.dirs.concat(s.dirs) : s.dirs), s.transition && Ii(S, s.transition), t = S, Hr($), t;
}
let T1 = (e) => {
  let t;
  for (let n in e) (n === "class" || n === "style" || ha(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, C1 = (e, t) => {
  let n = {};
  for (let i in e) Kl(i) && i.slice(9) in t || (n[i] = e[i]);
  return n;
};
function ic(e, t, n) {
  let i = Object.keys(t);
  if (i.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < i.length; s++) {
    let r = i[s];
    if (t[r] !== e[r] && !Gr(n, r)) return !0;
  }
  return !1;
}
function M1({ vnode: e, parent: t }, n) {
  for (; t; ) {
    let i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e) (e = t.vnode).el = n, t = t.parent;
    else break;
  }
}
let bl = {}, Zf = (e) => Object.getPrototypeOf(e) === bl;
function Yf(e, t, n, i) {
  let s, [r, a] = e.propsOptions, o = !1;
  if (t) for (let l in t) {
    let u;
    if ($s(l)) continue;
    let d = t[l];
    r && Ee(r, u = Mt(l)) ? a && a.includes(u) ? (s || (s = {}))[u] = d : n[u] = d : Gr(e.emitsOptions, l) || l in i && d === i[l] || (i[l] = d, o = !0);
  }
  if (a) {
    let l = be(n), u = s || Te;
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      n[f] = kl(r, l, f, u[f], e, !Ee(u, f));
    }
  }
  return o;
}
function kl(e, t, n, i, s, r) {
  let a = e[n];
  if (a != null) {
    let o = Ee(a, "default");
    if (o && i === void 0) {
      let l = a.default;
      if (a.type !== Function && !a.skipFactory && ce(l)) {
        let { propsDefaults: u } = s;
        if (n in u) i = u[n];
        else {
          let d = Qs(s);
          i = u[n] = l.call(null, t), d();
        }
      } else i = l;
      s.ce && s.ce._setProp(n, i);
    }
    a[0] && (r && !o ? i = !1 : a[1] && (i === "" || i === ii(n)) && (i = !0));
  }
  return i;
}
let E1 = /* @__PURE__ */ new WeakMap();
function sc(e) {
  return !(e[0] === "$" || $s(e));
}
let du = (e) => e === "_" || e === "_ctx" || e === "$stable", fu = (e) => te(e) ? e.map(en) : [en(e)], $1 = (e, t, n) => {
  if (t._n) return t;
  let i = j((...s) => fu(t(...s)), n);
  return i._c = !1, i;
}, Jf = (e, t, n) => {
  let i = e._ctx;
  for (let s in e) {
    if (du(s)) continue;
    let r = e[s];
    if (ce(r)) t[s] = $1(s, r, i);
    else if (r != null) {
      let a = fu(r);
      t[s] = () => a;
    }
  }
}, Xf = (e, t) => {
  let n = fu(t);
  e.slots.default = () => n;
}, Kf = (e, t, n) => {
  for (let i in t) (n || !du(i)) && (e[i] = t[i]);
}, pt = O1;
function A1(e) {
  return F1(e);
}
function F1(e, t) {
  var n;
  let i, s;
  va().__VUE__ = !0;
  let { insert: r, remove: a, patchProp: o, createElement: l, createText: u, createComment: d, setText: f, setElementText: m, parentNode: h, nextSibling: p, setScopeId: b = nn, insertStaticContent: x } = e, k = (g, v, T, P = null, D = null, C = null, _, A = null, O = !!v.dynamicChildren) => {
    if (g === v) return;
    g && !hi(g, v) && (P = Bn(g), _e(g, D, C, !0), g = null), v.patchFlag === -2 && (O = !1, v.dynamicChildren = null);
    let { type: M, ref: G, shapeFlag: X } = v;
    switch (M) {
      case $a:
        $(g, v, T, P);
        break;
      case st:
        S(g, v, T, P);
        break;
      case To:
        g == null && R(v, T, P, _);
        break;
      case pe:
        N(g, v, T, P, D, C, _, A, O);
        break;
      default:
        1 & X ? w(g, v, T, P, D, C, _, A, O) : 6 & X ? ie(g, v, T, P, D, C, _, A, O) : (64 & X || 128 & X) && M.process(g, v, T, P, D, C, _, A, O, ms);
    }
    G != null && D ? Fs(G, g && g.ref, C, v || g, !v) : G == null && g && g.ref != null && Fs(g.ref, null, C, g, !0);
  }, $ = (g, v, T, P) => {
    if (g == null) r(v.el = u(v.children), T, P);
    else {
      let D = v.el = g.el;
      v.children !== g.children && f(D, v.children);
    }
  }, S = (g, v, T, P) => {
    g == null ? r(v.el = d(v.children || ""), T, P) : v.el = g.el;
  }, R = (g, v, T, P) => {
    [g.el, g.anchor] = x(g.children, v, T, P, g.el, g.anchor);
  }, w = (g, v, T, P, D, C, _, A, O) => {
    if (v.type === "svg" ? _ = "svg" : v.type === "math" && (_ = "mathml"), g == null) I(v, T, P, D, C, _, A, O);
    else {
      let M = g.el && g.el._isVueCE ? g.el : null;
      try {
        M && M._beginPatch(), L(g, v, D, C, _, A, O);
      } finally {
        M && M._endPatch();
      }
    }
  }, I = (g, v, T, P, D, C, _, A) => {
    let O, M, { props: G, shapeFlag: X, transition: Y, dirs: K } = g;
    if (O = g.el = l(g.type, C, G && G.is, G), 8 & X ? m(O, g.children) : 16 & X && F(g.children, O, null, P, D, Io(g, C), _, A), K && ai(g, null, P, "created"), U(O, g, g.scopeId, _, P), G) {
      for (let de in G) de === "value" || $s(de) || o(O, de, null, G[de], C, P);
      "value" in G && o(O, "value", null, G.value, C), (M = G.onVnodeBeforeMount) && Xt(M, P, g);
    }
    K && ai(g, null, P, "beforeMount");
    let he = L1(D, Y);
    he && Y.beforeEnter(O), r(O, v, T), ((M = G && G.onVnodeMounted) || he || K) && pt(() => {
      M && Xt(M, P, g), he && Y.enter(O), K && ai(g, null, P, "mounted");
    }, D);
  }, U = (g, v, T, P, D) => {
    if (T && b(g, T), P) for (let C = 0; C < P.length; C++) b(g, P[C]);
    if (D) {
      let C = D.subTree;
      if (v === C || Qf(C.type) && (C.ssContent === v || C.ssFallback === v)) {
        let _ = D.vnode;
        U(g, _, _.scopeId, _.slotScopeIds, D.parent);
      }
    }
  }, F = (g, v, T, P, D, C, _, A, O = 0) => {
    for (let M = O; M < g.length; M++) k(null, g[M] = A ? Un(g[M]) : en(g[M]), v, T, P, D, C, _, A);
  }, L = (g, v, T, P, D, C, _) => {
    let A, O = v.el = g.el, { patchFlag: M, dynamicChildren: G, dirs: X } = v;
    M |= 16 & g.patchFlag;
    let Y = g.props || Te, K = v.props || Te;
    if (T && oi(T, !1), (A = K.onVnodeBeforeUpdate) && Xt(A, T, v, g), X && ai(v, g, T, "beforeUpdate"), T && oi(T, !0), (Y.innerHTML && K.innerHTML == null || Y.textContent && K.textContent == null) && m(O, ""), G ? W(g.dynamicChildren, G, O, T, P, Io(v, D), C) : _ || ye(g, v, O, null, T, P, Io(v, D), C, !1), M > 0) {
      if (16 & M) Q(O, Y, K, T, D);
      else if (2 & M && Y.class !== K.class && o(O, "class", null, K.class, D), 4 & M && o(O, "style", Y.style, K.style, D), 8 & M) {
        let he = v.dynamicProps;
        for (let de = 0; de < he.length; de++) {
          let ve = he[de], nt = Y[ve], it = K[ve];
          (it !== nt || ve === "value") && o(O, ve, nt, it, D, T);
        }
      }
      1 & M && g.children !== v.children && m(O, v.children);
    } else _ || G != null || Q(O, Y, K, T, D);
    ((A = K.onVnodeUpdated) || X) && pt(() => {
      A && Xt(A, T, v, g), X && ai(v, g, T, "updated");
    }, P);
  }, W = (g, v, T, P, D, C, _) => {
    for (let A = 0; A < v.length; A++) {
      let O = g[A], M = v[A], G = O.el && (O.type === pe || !hi(O, M) || 198 & O.shapeFlag) ? h(O.el) : T;
      k(O, M, G, null, P, D, C, _, !0);
    }
  }, Q = (g, v, T, P, D) => {
    if (v !== T) {
      if (v !== Te) for (let C in v) $s(C) || C in T || o(g, C, v[C], null, D, P);
      for (let C in T) {
        if ($s(C)) continue;
        let _ = T[C], A = v[C];
        _ !== A && C !== "value" && o(g, C, A, _, D, P);
      }
      "value" in T && o(g, "value", v.value, T.value, D);
    }
  }, N = (g, v, T, P, D, C, _, A, O) => {
    let M = v.el = g ? g.el : u(""), G = v.anchor = g ? g.anchor : u(""), { patchFlag: X, dynamicChildren: Y, slotScopeIds: K } = v;
    K && (A = A ? A.concat(K) : K), g == null ? (r(M, T, P), r(G, T, P), F(v.children || [], T, G, D, C, _, A, O)) : X > 0 && 64 & X && Y && g.dynamicChildren ? (W(g.dynamicChildren, Y, T, D, C, _, A), (v.key != null || D && v === D.subTree) && hu(g, v, !0)) : ye(g, v, T, G, D, C, _, A, O);
  }, ie = (g, v, T, P, D, C, _, A, O) => {
    v.slotScopeIds = A, g == null ? 512 & v.shapeFlag ? D.ctx.activate(v, T, P, _, O) : me(v, T, P, D, C, _, O) : ue(g, v, O);
  }, me = (g, v, T, P, D, C, _) => {
    let A = g.component = N1(g, P, D);
    if (Ca(g) && (A.ctx.renderer = ms), V1(A, !1, _), A.asyncDep) {
      if (D && D.registerDep(A, Oe, _), !g.el) {
        let O = A.subTree = B(st);
        S(null, O, v, T), g.placeholder = O.el;
      }
    } else Oe(A, g, v, T, D, C, _);
  }, ue = (g, v, T) => {
    let P = v.component = g.component;
    if ((function(D, C, _) {
      let { props: A, children: O, component: M } = D, { props: G, children: X, patchFlag: Y } = C, K = M.emitsOptions;
      if (C.dirs || C.transition) return !0;
      if (!_ || !(Y >= 0)) return (!!O || !!X) && (!X || !X.$stable) || A !== G && (A ? !G || ic(A, G, K) : !!G);
      if (1024 & Y) return !0;
      if (16 & Y) return A ? ic(A, G, K) : !!G;
      if (8 & Y) {
        let he = C.dynamicProps;
        for (let de = 0; de < he.length; de++) {
          let ve = he[de];
          if (G[ve] !== A[ve] && !Gr(K, ve)) return !0;
        }
      }
      return !1;
    })(g, v, T)) {
      if (P.asyncDep && !P.asyncResolved) return void ge(P, v, T);
      P.next = v, P.update();
    } else v.el = g.el, P.vnode = v;
  }, Oe = (g, v, T, P, D, C, _) => {
    let A = () => {
      if (g.isMounted) {
        let X, { next: Y, bu: K, u: he, parent: de, vnode: ve } = g;
        {
          let Jt = (function ri(dr) {
            let De = dr.subTree.component;
            if (De) return De.asyncDep && !De.asyncResolved ? De : ri(De);
          })(g);
          if (Jt) {
            Y && (Y.el = ve.el, ge(g, Y, _)), Jt.asyncDep.then(() => {
              g.isUnmounted || A();
            });
            return;
          }
        }
        let nt = Y;
        oi(g, !1), Y ? (Y.el = ve.el, ge(g, Y, _)) : Y = ve, K && $r(K), (X = Y.props && Y.props.onVnodeBeforeUpdate) && Xt(X, de, Y, ve), oi(g, !0);
        let it = nc(g), Yt = g.subTree;
        g.subTree = it, k(Yt, it, h(Yt.el), Bn(Yt), g, D, C), Y.el = it.el, nt === null && M1(g, it.el), he && pt(he, D), (X = Y.props && Y.props.onVnodeUpdated) && pt(() => Xt(X, de, Y, ve), D);
      } else {
        let X, { el: Y, props: K } = v, { bm: he, m: de, parent: ve, root: nt, type: it } = g, Yt = qi(v);
        if (oi(g, !1), he && $r(he), !Yt && (X = K && K.onVnodeBeforeMount) && Xt(X, ve, v), oi(g, !0), !(Y && s)) {
          nt.ce && nt.ce._def.shadowRoot !== !1 && nt.ce._injectChildStyle(it);
          let Jt = g.subTree = nc(g);
          k(null, Jt, T, P, g, D, C), v.el = Jt.el;
        }
        if (de && pt(de, D), !Yt && (X = K && K.onVnodeMounted)) {
          let Jt = v;
          pt(() => Xt(X, ve, Jt), D);
        }
        (256 & v.shapeFlag || ve && qi(ve.vnode) && 256 & ve.vnode.shapeFlag) && g.a && pt(g.a, D), g.isMounted = !0, v = T = P = null;
      }
    };
    g.scope.on();
    let O = g.effect = new of(A);
    g.scope.off();
    let M = g.update = O.run.bind(O), G = g.job = O.runIfDirty.bind(O);
    G.i = g, G.id = g.uid, O.scheduler = () => su(G), oi(g, !0), M();
  }, ge = (g, v, T) => {
    v.component = g;
    let P = g.vnode.props;
    g.vnode = v, g.next = null, (function(D, C, _, A) {
      let { props: O, attrs: M, vnode: { patchFlag: G } } = D, X = be(O), [Y] = D.propsOptions, K = !1;
      if ((A || G > 0) && !(16 & G)) {
        if (8 & G) {
          let he = D.vnode.dynamicProps;
          for (let de = 0; de < he.length; de++) {
            let ve = he[de];
            if (Gr(D.emitsOptions, ve)) continue;
            let nt = C[ve];
            if (Y) if (Ee(M, ve)) nt !== M[ve] && (M[ve] = nt, K = !0);
            else {
              let it = Mt(ve);
              O[it] = kl(Y, X, it, nt, D, !1);
            }
            else nt !== M[ve] && (M[ve] = nt, K = !0);
          }
        }
      } else {
        let he;
        for (let de in Yf(D, C, O, M) && (K = !0), X) C && (Ee(C, de) || (he = ii(de)) !== de && Ee(C, he)) || (Y ? _ && (_[de] !== void 0 || _[he] !== void 0) && (O[de] = kl(Y, X, de, void 0, D, !0)) : delete O[de]);
        if (M !== X) for (let de in M) C && Ee(C, de) || (delete M[de], K = !0);
      }
      K && pn(D.attrs, "set", "");
    })(g, v.props, P, T), ((D, C, _) => {
      let { vnode: A, slots: O } = D, M = !0, G = Te;
      if (32 & A.shapeFlag) {
        let X = C._;
        X ? _ && X === 1 ? M = !1 : Kf(O, C, _) : (M = !C.$stable, Jf(C, O)), G = C;
      } else C && (Xf(D, C), G = { default: 1 });
      if (M) for (let X in O) du(X) || G[X] != null || delete O[X];
    })(g, v.children, T), wn(), qu(g), xn();
  }, ye = (g, v, T, P, D, C, _, A, O = !1) => {
    let M = g && g.children, G = g ? g.shapeFlag : 0, X = v.children, { patchFlag: Y, shapeFlag: K } = v;
    if (Y > 0) {
      if (128 & Y) return void Pe(M, X, T, P, D, C, _, A, O);
      if (256 & Y) return void xe(M, X, T, P, D, C, _, A, O);
    }
    8 & K ? (16 & G && Dn(M, D, C), X !== M && m(T, X)) : 16 & G ? 16 & K ? Pe(M, X, T, P, D, C, _, A, O) : Dn(M, D, C, !0) : (8 & G && m(T, ""), 16 & K && F(X, T, P, D, C, _, A, O));
  }, xe = (g, v, T, P, D, C, _, A, O) => {
    let M;
    g = g || Hi, v = v || Hi;
    let G = g.length, X = v.length, Y = Math.min(G, X);
    for (M = 0; M < Y; M++) {
      let K = v[M] = O ? Un(v[M]) : en(v[M]);
      k(g[M], K, T, null, D, C, _, A, O);
    }
    G > X ? Dn(g, D, C, !0, !1, Y) : F(v, T, P, D, C, _, A, O, Y);
  }, Pe = (g, v, T, P, D, C, _, A, O) => {
    let M = 0, G = v.length, X = g.length - 1, Y = G - 1;
    for (; M <= X && M <= Y; ) {
      let K = g[M], he = v[M] = O ? Un(v[M]) : en(v[M]);
      if (hi(K, he)) k(K, he, T, null, D, C, _, A, O);
      else break;
      M++;
    }
    for (; M <= X && M <= Y; ) {
      let K = g[X], he = v[Y] = O ? Un(v[Y]) : en(v[Y]);
      if (hi(K, he)) k(K, he, T, null, D, C, _, A, O);
      else break;
      X--, Y--;
    }
    if (M > X) {
      if (M <= Y) {
        let K = Y + 1, he = K < G ? v[K].el : P;
        for (; M <= Y; ) k(null, v[M] = O ? Un(v[M]) : en(v[M]), T, he, D, C, _, A, O), M++;
      }
    } else if (M > Y) for (; M <= X; ) _e(g[M], D, C, !0), M++;
    else {
      let K, he = M, de = M, ve = /* @__PURE__ */ new Map();
      for (M = de; M <= Y; M++) {
        let De = v[M] = O ? Un(v[M]) : en(v[M]);
        De.key != null && ve.set(De.key, M);
      }
      let nt = 0, it = Y - de + 1, Yt = !1, Jt = 0, ri = Array(it);
      for (M = 0; M < it; M++) ri[M] = 0;
      for (M = he; M <= X; M++) {
        let De, Ke = g[M];
        if (nt >= it) {
          _e(Ke, D, C, !0);
          continue;
        }
        if (Ke.key != null) De = ve.get(Ke.key);
        else for (K = de; K <= Y; K++) if (ri[K - de] === 0 && hi(Ke, v[K])) {
          De = K;
          break;
        }
        De === void 0 ? _e(Ke, D, C, !0) : (ri[De - de] = M + 1, De >= Jt ? Jt = De : Yt = !0, k(Ke, v[De], T, null, D, C, _, A, O), nt++);
      }
      let dr = Yt ? (function(De) {
        let Ke, ps, ht, _n, lo, uo = De.slice(), Et = [0], Em = De.length;
        for (Ke = 0; Ke < Em; Ke++) {
          let fr = De[Ke];
          if (fr !== 0) {
            if (De[ps = Et[Et.length - 1]] < fr) {
              uo[Ke] = ps, Et.push(Ke);
              continue;
            }
            for (ht = 0, _n = Et.length - 1; ht < _n; ) De[Et[lo = ht + _n >> 1]] < fr ? ht = lo + 1 : _n = lo;
            fr < De[Et[ht]] && (ht > 0 && (uo[Ke] = Et[ht - 1]), Et[ht] = Ke);
          }
        }
        for (ht = Et.length, _n = Et[ht - 1]; ht-- > 0; ) Et[ht] = _n, _n = uo[_n];
        return Et;
      })(ri) : Hi;
      for (K = dr.length - 1, M = it - 1; M >= 0; M--) {
        let De = de + M, Ke = v[De], ps = v[De + 1], ht = De + 1 < G ? ps.el || ps.placeholder : P;
        ri[M] === 0 ? k(null, Ke, T, ht, D, C, _, A, O) : Yt && (K < 0 || M !== dr[K] ? Ge(Ke, T, ht, 2) : K--);
      }
    }
  }, Ge = (g, v, T, P, D = null) => {
    let { el: C, type: _, transition: A, children: O, shapeFlag: M } = g;
    if (6 & M) return void Ge(g.component.subTree, v, T, P);
    if (128 & M) return void g.suspense.move(v, T, P);
    if (64 & M) return void _.move(g, v, T, ms);
    if (_ === pe) {
      r(C, v, T);
      for (let G = 0; G < O.length; G++) Ge(O[G], v, T, P);
      r(g.anchor, v, T);
      return;
    }
    if (_ === To) return void (({ el: G, anchor: X }, Y, K) => {
      let he;
      for (; G && G !== X; ) he = p(G), r(G, Y, K), G = he;
      r(X, Y, K);
    })(g, v, T);
    if (P !== 2 && 1 & M && A) if (P === 0) A.beforeEnter(C), r(C, v, T), pt(() => A.enter(C), D);
    else {
      let { leave: G, delayLeave: X, afterLeave: Y } = A, K = () => {
        g.ctx.isUnmounted ? a(C) : r(C, v, T);
      }, he = () => {
        C._isLeaving && C[mn](!0), G(C, () => {
          K(), Y && Y();
        });
      };
      X ? X(C, K, he) : he();
    }
    else r(C, v, T);
  }, _e = (g, v, T, P = !1, D = !1) => {
    let C, { type: _, props: A, ref: O, children: M, dynamicChildren: G, shapeFlag: X, patchFlag: Y, dirs: K, cacheIndex: he } = g;
    if (Y === -2 && (D = !1), O != null && (wn(), Fs(O, null, T, g, !0), xn()), he != null && (v.renderCache[he] = void 0), 256 & X) return void v.ctx.deactivate(g);
    let de = 1 & X && K, ve = !qi(g);
    if (ve && (C = A && A.onVnodeBeforeUnmount) && Xt(C, v, g), 6 & X) Nt(g.component, T, P);
    else {
      if (128 & X) return void g.suspense.unmount(T, P);
      de && ai(g, null, v, "beforeUnmount"), 64 & X ? g.type.remove(g, v, T, ms, P) : G && !G.hasOnce && (_ !== pe || Y > 0 && 64 & Y) ? Dn(G, v, T, !1, !0) : (_ === pe && 384 & Y || !D && 16 & X) && Dn(M, v, T), P && tt(g);
    }
    (ve && (C = A && A.onVnodeUnmounted) || de) && pt(() => {
      C && Xt(C, v, g), de && ai(g, null, v, "unmounted");
    }, T);
  }, tt = (g) => {
    let { type: v, el: T, anchor: P, transition: D } = g;
    if (v === pe) return void _t(T, P);
    if (v === To) return void (({ el: _, anchor: A }) => {
      let O;
      for (; _ && _ !== A; ) O = p(_), a(_), _ = O;
      a(A);
    })(g);
    let C = () => {
      a(T), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (1 & g.shapeFlag && D && !D.persisted) {
      let { leave: _, delayLeave: A } = D, O = () => _(T, C);
      A ? A(g.el, C, O) : O();
    } else C();
  }, _t = (g, v) => {
    let T;
    for (; g !== v; ) T = p(g), a(g), g = T;
    a(v);
  }, Nt = (g, v, T) => {
    let { bum: P, scope: D, job: C, subTree: _, um: A, m: O, a: M } = g;
    rc(O), rc(M), P && $r(P), D.stop(), C && (C.flags |= 8, _e(_, g, v, T)), A && pt(A, v), pt(() => {
      g.isUnmounted = !0;
    }, v);
  }, Dn = (g, v, T, P = !1, D = !1, C = 0) => {
    for (let _ = C; _ < g.length; _++) _e(g[_], v, T, P, D);
  }, Bn = (g) => {
    if (6 & g.shapeFlag) return Bn(g.component.subTree);
    if (128 & g.shapeFlag) return g.suspense.next();
    let v = p(g.anchor || g.el), T = v && v[Ef];
    return T ? p(T) : v;
  }, ao = !1, oo = (g, v, T) => {
    g == null ? v._vnode && _e(v._vnode, null, null, !0) : k(v._vnode || null, g, v, null, null, null, T), v._vnode = g, ao || (ao = !0, qu(), Cf(), ao = !1);
  }, ms = { p: k, um: _e, m: Ge, r: tt, mt: me, mc: F, pc: ye, pbc: W, n: Bn, o: e };
  return { render: oo, hydrate: i, createApp: (n = i, function(g, v = null) {
    ce(g) || (g = qe({}, g)), v == null || Le(v) || (v = null);
    let T = qf(), P = /* @__PURE__ */ new WeakSet(), D = [], C = !1, _ = T.app = { _uid: y1++, _component: g, _props: v, _container: null, _context: T, _instance: null, version: P1, get config() {
      return T.config;
    }, set config(A) {
    }, use: (A, ...O) => (P.has(A) || (A && ce(A.install) ? (P.add(A), A.install(_, ...O)) : ce(A) && (P.add(A), A(_, ...O))), _), mixin: (A) => (T.mixins.includes(A) || T.mixins.push(A), _), component: (A, O) => O ? (T.components[A] = O, _) : T.components[A], directive: (A, O) => O ? (T.directives[A] = O, _) : T.directives[A], mount(A, O, M) {
      if (!C) {
        let G = _._ceVNode || B(g, v);
        return G.appContext = T, M === !0 ? M = "svg" : M === !1 && (M = void 0), O && n ? n(G, A) : oo(G, A, M), C = !0, _._container = A, A.__vue_app__ = _, Aa(G.component);
      }
    }, onUnmount(A) {
      D.push(A);
    }, unmount() {
      C && (jt(D, _._instance, 16), oo(null, _._container), delete _._container.__vue_app__);
    }, provide: (A, O) => (T.provides[A] = O, _), runWithContext(A) {
      let O = vi;
      vi = _;
      try {
        return A();
      } finally {
        vi = O;
      }
    } };
    return _;
  }) };
}
function Io({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function oi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function L1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hu(e, t, n = !1) {
  let i = e.children, s = t.children;
  if (te(i) && te(s)) for (let r = 0; r < i.length; r++) {
    let a = i[r], o = s[r];
    1 & o.shapeFlag && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && ((o = s[r] = Un(s[r])).el = a.el), n || o.patchFlag === -2 || hu(a, o)), o.type === $a && o.patchFlag !== -1 && (o.el = a.el), o.type !== st || o.el || (o.el = a.el);
  }
}
function rc(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
let Qf = (e) => e.__isSuspense;
function O1(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : s1(e);
}
let pe = /* @__PURE__ */ Symbol.for("v-fgt"), $a = /* @__PURE__ */ Symbol.for("v-txt"), st = /* @__PURE__ */ Symbol.for("v-cmt"), To = /* @__PURE__ */ Symbol.for("v-stc"), Os = [], St = null;
function y(e = !1) {
  Os.push(St = e ? null : []);
}
function D1() {
  Os.pop(), St = Os[Os.length - 1] || null;
}
let Ws = 1;
function Zr(e, t = !1) {
  Ws += e, e < 0 && St && t && (St.hasOnce = !0);
}
function eh(e) {
  return e.dynamicChildren = Ws > 0 ? St || Hi : null, D1(), Ws > 0 && St && St.push(e), e;
}
function z(e, t, n, i, s, r) {
  return eh(Ie(e, t, n, i, s, r, !0));
}
function V(e, t, n, i, s) {
  return eh(B(e, t, n, i, s, !0));
}
function Us(e) {
  return !!e && e.__v_isVNode === !0;
}
function hi(e, t) {
  return e.type === t.type && e.key === t.key;
}
let th = ({ key: e }) => e ?? null, Fr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Ve(e) || ze(e) || ce(e) ? { i: rt, r: e, k: t, f: !!n } : e : null);
function Ie(e, t = null, n = null, i = 0, s = null, r = +(e !== pe), a = !1, o = !1) {
  let l = { __v_isVNode: !0, __v_skip: !0, type: e, props: t, key: t && th(t), ref: t && Fr(t), scopeId: Mf, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: i, dynamicProps: s, dynamicChildren: null, appContext: null, ctx: rt };
  return o ? (mu(l, n), 128 & r && e.normalize(l)) : n && (l.shapeFlag |= Ve(n) ? 8 : 16), Ws > 0 && !a && St && (l.patchFlag > 0 || 6 & r) && l.patchFlag !== 32 && St.push(l), l;
}
let B = function(e, t = null, n = null, i = 0, s = null, r = !1) {
  var a;
  if (e && e !== zf || (e = st), Us(e)) {
    let l = Kn(e, t, !0);
    return n && mu(l, n), Ws > 0 && !r && St && (6 & l.shapeFlag ? St[St.indexOf(e)] = l : St.push(l)), l.patchFlag = -2, l;
  }
  if (ce(a = e) && "__vccOpts" in a && (e = e.__vccOpts), t) {
    let { class: l, style: u } = t = Lr(t);
    l && !Ve(l) && (t.class = E(l)), Le(u) && (Sa(u) && !te(u) && (u = qe({}, u)), t.style = wt(u));
  }
  let o = Ve(e) ? 1 : Qf(e) ? 128 : e.__isTeleport ? 64 : Le(e) ? 4 : 2 * !!ce(e);
  return Ie(e, t, n, i, s, o, r, !0);
};
function Lr(e) {
  return e ? Sa(e) || Zf(e) ? qe({}, e) : e : null;
}
function Kn(e, t, n = !1, i = !1) {
  let { props: s, ref: r, patchFlag: a, children: o, transition: l } = e, u = t ? Ft(s || {}, t) : s, d = { __v_isVNode: !0, __v_skip: !0, type: e.type, props: u, key: u && th(u), ref: t && t.ref ? n && r ? te(r) ? r.concat(Fr(t)) : [r, Fr(t)] : Fr(t) : r, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: o, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== pe ? a === -1 ? 16 : 16 | a : a, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: l, component: e.component, suspense: e.suspense, ssContent: e.ssContent && Kn(e.ssContent), ssFallback: e.ssFallback && Kn(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return l && i && Ii(d, l.clone(d)), d;
}
function Ks(e = " ", t = 0) {
  return B($a, null, e, t);
}
function ee(e = "", t = !1) {
  return t ? (y(), V(st, null, e)) : B(st, null, e);
}
function en(e) {
  return e == null || typeof e == "boolean" ? B(st) : te(e) ? B(pe, null, e.slice()) : Us(e) ? Un(e) : B($a, null, String(e));
}
function Un(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Kn(e);
}
function mu(e, t) {
  let n = 0, { shapeFlag: i } = e;
  if (t == null) t = null;
  else if (te(t)) n = 16;
  else if (typeof t == "object") if (65 & i) {
    let s = t.default;
    s && (s._c && (s._d = !1), mu(e, s()), s._c && (s._d = !0));
    return;
  } else {
    n = 32;
    let s = t._;
    s || Zf(t) ? s === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = rt;
  }
  else ce(t) ? (t = { default: t, _ctx: rt }, n = 32) : (t = String(t), 64 & i ? (n = 16, t = [Ks(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ft(...e) {
  let t = {};
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    for (let s in i) if (s === "class") t.class !== i.class && (t.class = E([t.class, i.class]));
    else if (s === "style") t.style = wt([t.style, i.style]);
    else if (ha(s)) {
      let r = t[s], a = i[s];
      a && r !== a && !(te(r) && r.includes(a)) && (t[s] = r ? [].concat(r, a) : a);
    } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Xt(e, t, n, i = null) {
  jt(e, t, 7, [n, i]);
}
let B1 = qf(), _1 = 0;
function N1(e, t, n) {
  let i = e.type, s = (t ? t.appContext : e.appContext) || B1, r = { uid: _1++, vnode: e, type: i, parent: t, appContext: s, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new nf(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t ? t.provides : Object.create(s.provides), ids: t ? t.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: (function a(o, l, u = !1) {
    let d = u ? E1 : l.propsCache, f = d.get(o);
    if (f) return f;
    let m = o.props, h = {}, p = [], b = !1;
    if (!ce(o)) {
      let k = ($) => {
        b = !0;
        let [S, R] = a($, l, !0);
        qe(h, S), R && p.push(...R);
      };
      !u && l.mixins.length && l.mixins.forEach(k), o.extends && k(o.extends), o.mixins && o.mixins.forEach(k);
    }
    if (!m && !b) return Le(o) && d.set(o, Hi), Hi;
    if (te(m)) for (let k = 0; k < m.length; k++) {
      let $ = Mt(m[k]);
      sc($) && (h[$] = Te);
    }
    else if (m) for (let k in m) {
      let $ = Mt(k);
      if (sc($)) {
        let S = m[k], R = h[$] = te(S) || ce(S) ? { type: S } : qe({}, S), w = R.type, I = !1, U = !0;
        if (te(w)) for (let F = 0; F < w.length; ++F) {
          let L = w[F], W = ce(L) && L.name;
          if (W === "Boolean") {
            I = !0;
            break;
          }
          W === "String" && (U = !1);
        }
        else I = ce(w) && w.name === "Boolean";
        R[0] = I, R[1] = U, (I || Ee(R, "default")) && p.push($);
      }
    }
    let x = [h, p];
    return Le(o) && d.set(o, x), x;
  })(i, s), emitsOptions: (function a(o, l, u = !1) {
    let d = u ? I1 : l.emitsCache, f = d.get(o);
    if (f !== void 0) return f;
    let m = o.emits, h = {}, p = !1;
    if (!ce(o)) {
      let b = (x) => {
        let k = a(x, l, !0);
        k && (p = !0, qe(h, k));
      };
      !u && l.mixins.length && l.mixins.forEach(b), o.extends && b(o.extends), o.mixins && o.mixins.forEach(b);
    }
    return m || p ? (te(m) ? m.forEach((b) => h[b] = null) : qe(h, m), Le(o) && d.set(o, h), h) : (Le(o) && d.set(o, null), null);
  })(i, s), emit: null, emitted: null, propsDefaults: Te, inheritAttrs: i.inheritAttrs, ctx: Te, data: Te, props: Te, attrs: Te, slots: Te, refs: Te, setupState: Te, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = S1.bind(null, r), e.ce && e.ce(r), r;
}
let ct = null, cn = () => ct || rt;
{
  let e = va(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((a) => a(r)) : s[0](r);
    };
  };
  Rr = t("__VUE_INSTANCE_SETTERS__", (n) => ct = n), dl = t("__VUE_SSR_SETTERS__", (n) => qs = n);
}
let Qs = (e) => {
  let t = ct;
  return Rr(e), e.scope.on(), () => {
    e.scope.off(), Rr(t);
  };
}, ac = () => {
  ct && ct.scope.off(), Rr(null);
};
function nh(e) {
  return 4 & e.vnode.shapeFlag;
}
let qs = !1;
function V1(e, t = !1, n = !1) {
  t && dl(t);
  let { props: i, children: s } = e.vnode, r = nh(e);
  (function(u, d, f, m = !1) {
    let h = {}, p = Object.create(bl);
    for (let b in u.propsDefaults = /* @__PURE__ */ Object.create(null), Yf(u, d, h, p), u.propsOptions[0]) b in h || (h[b] = void 0);
    f ? u.props = m ? h : Ym(h) : u.type.props ? u.props = h : u.props = p, u.attrs = p;
  })(e, i, r, t);
  var a = n || t;
  let o = e.slots = Object.create(bl);
  if (32 & e.vnode.shapeFlag) {
    let u = s._;
    u ? (Kf(o, s, a), a && Qd(o, "_", u, !0)) : Jf(s, o);
  } else s && Xf(e, s);
  let l = r ? (function(u, d) {
    let f = u.type;
    u.accessCache = /* @__PURE__ */ Object.create(null), u.proxy = new Proxy(u.ctx, gl);
    let { setup: m } = f;
    if (m) {
      wn();
      let h = u.setupContext = m.length > 1 ? sh(u) : null, p = Qs(u), b = Xs(m, u, 0, [u.props, h]), x = Kd(b);
      if (xn(), p(), (x || u.sp) && !qi(u) && _f(u), x) {
        if (b.then(ac, ac), d) return b.then((k) => {
          oc(u, k);
        }).catch((k) => {
          Ta(k, u, 0);
        });
        u.asyncDep = b;
      } else oc(u, b);
    } else ih(u);
  })(e, t) : void 0;
  return t && dl(!1), l;
}
function oc(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Le(t) && (e.setupState = wf(t)), ih(e);
}
function ih(e, t, n) {
  let i = e.type;
  e.render || (e.render = i.render || nn);
  {
    let s = Qs(e);
    wn();
    try {
      (function(r) {
        let a = Uf(r), o = r.proxy, l = r.ctx;
        yl = !1, a.beforeCreate && Qu(a.beforeCreate, r, "bc");
        let { data: u, computed: d, methods: f, watch: m, provide: h, inject: p, created: b, beforeMount: x, mounted: k, beforeUpdate: $, updated: S, activated: R, deactivated: w, beforeUnmount: I, unmounted: U, render: F, renderTracked: L, renderTriggered: W, errorCaptured: Q, serverPrefetch: N, expose: ie, inheritAttrs: me, components: ue, directives: Oe } = a;
        if (p && (function(ye, xe, Pe = nn) {
          for (let Ge in te(ye) && (ye = vl(ye)), ye) {
            let _e, tt = ye[Ge];
            ze(_e = Le(tt) ? "default" in tt ? kn(tt.from || Ge, tt.default, !0) : kn(tt.from || Ge) : kn(tt)) ? Object.defineProperty(xe, Ge, { enumerable: !0, configurable: !0, get: () => _e.value, set: (_t) => _e.value = _t }) : xe[Ge] = _e;
          }
        })(p, l, null), f) for (let ye in f) {
          let xe = f[ye];
          ce(xe) && (l[ye] = xe.bind(o));
        }
        if (u) {
          let ye = u.call(o, o);
          Le(ye) && (r.data = un(ye));
        }
        if (yl = !0, d) for (let ye in d) {
          let xe = d[ye], Pe = ce(xe) ? xe.bind(o, o) : ce(xe.get) ? xe.get.bind(o, o) : nn, Ge = Me({ get: Pe, set: !ce(xe) && ce(xe.set) ? xe.set.bind(o) : nn });
          Object.defineProperty(l, ye, { enumerable: !0, configurable: !0, get: () => Ge.value, set: (_e) => Ge.value = _e });
        }
        if (m) for (let ye in m) (function xe(Pe, Ge, _e, tt) {
          let _t = tt.includes(".") ? jf(_e, tt) : () => _e[tt];
          if (Ve(Pe)) {
            let Nt = Ge[Pe];
            ce(Nt) && Re(_t, Nt);
          } else if (ce(Pe)) Re(_t, Pe.bind(_e));
          else if (Le(Pe)) if (te(Pe)) Pe.forEach((Nt) => xe(Nt, Ge, _e, tt));
          else {
            let Nt = ce(Pe.handler) ? Pe.handler.bind(_e) : Ge[Pe.handler];
            ce(Nt) && Re(_t, Nt, Pe);
          }
        })(m[ye], l, o, ye);
        if (h) {
          let ye = ce(h) ? h.call(o) : h;
          Reflect.ownKeys(ye).forEach((xe) => {
            Xn(xe, ye[xe]);
          });
        }
        function ge(ye, xe) {
          te(xe) ? xe.forEach((Pe) => ye(Pe.bind(o))) : xe && ye(xe.bind(o));
        }
        if (b && Qu(b, r, "c"), ge(l1, x), ge($n, k), ge(u1, $), ge(Vf, S), ge(a1, R), ge(o1, w), ge(h1, Q), ge(f1, L), ge(d1, W), ge(lu, I), ge(Ci, U), ge(c1, N), te(ie)) if (ie.length) {
          let ye = r.exposed || (r.exposed = {});
          ie.forEach((xe) => {
            Object.defineProperty(ye, xe, { get: () => o[xe], set: (Pe) => o[xe] = Pe, enumerable: !0 });
          });
        } else r.exposed || (r.exposed = {});
        F && r.render === nn && (r.render = F), me != null && (r.inheritAttrs = me), ue && (r.components = ue), Oe && (r.directives = Oe), N && _f(r);
      })(e);
    } finally {
      xn(), s();
    }
  }
}
let R1 = { get: (e, t) => (ut(e, "get", ""), e[t]) };
function sh(e) {
  return { attrs: new Proxy(e.attrs, R1), slots: e.slots, emit: e.emit, expose: (t) => {
    e.exposed = t || {};
  } };
}
function Aa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wf(Ia(e.exposed)), { get: (t, n) => n in t ? t[n] : n in Ls ? Ls[n](e) : void 0, has: (t, n) => n in t || n in Ls })) : e.proxy;
}
function z1(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
let Me = (e, t) => (function(n, i, s = !1) {
  let r, a;
  return ce(n) ? r = n : (r = n.get, a = n.set), new n1(r, a, s);
})(e, 0, qs);
function ji(e, t, n) {
  try {
    Zr(-1);
    let i = arguments.length;
    return i !== 2 ? (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Us(n) && (n = [n]), B(e, t, n)) : !Le(t) || te(t) ? B(e, null, t) : Us(t) ? B(e, null, [t]) : B(e, t);
  } finally {
    Zr(1);
  }
}
let P1 = "3.5.25", lc = typeof window < "u" && window.trustedTypes;
if (lc) try {
  fl = lc.createPolicy("vue", { createHTML: (e) => e });
} catch {
}
let rh = fl ? (e) => fl.createHTML(e) : (e) => e, hn = typeof document < "u" ? document : null, uc = hn && hn.createElement("template"), H1 = { insert: (e, t, n) => {
  t.insertBefore(e, n || null);
}, remove: (e) => {
  let t = e.parentNode;
  t && t.removeChild(e);
}, createElement: (e, t, n, i) => {
  let s = t === "svg" ? hn.createElementNS("http://www.w3.org/2000/svg", e) : t === "mathml" ? hn.createElementNS("http://www.w3.org/1998/Math/MathML", e) : n ? hn.createElement(e, { is: n }) : hn.createElement(e);
  return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
}, createText: (e) => hn.createTextNode(e), createComment: (e) => hn.createComment(e), setText: (e, t) => {
  e.nodeValue = t;
}, setElementText: (e, t) => {
  e.textContent = t;
}, parentNode: (e) => e.parentNode, nextSibling: (e) => e.nextSibling, querySelector: (e) => hn.querySelector(e), setScopeId(e, t) {
  e.setAttribute(t, "");
}, insertStaticContent(e, t, n, i, s, r) {
  let a = n ? n.previousSibling : t.lastChild;
  if (s && (s === r || s.nextSibling)) for (; t.insertBefore(s.cloneNode(!0), n), s !== r && (s = s.nextSibling); ) ;
  else {
    uc.innerHTML = rh(i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e);
    let o = uc.content;
    if (i === "svg" || i === "mathml") {
      let l = o.firstChild;
      for (; l.firstChild; ) o.appendChild(l.firstChild);
      o.removeChild(l);
    }
    t.insertBefore(o, n);
  }
  return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
} }, Nn = "transition", vs = "animation", Qi = /* @__PURE__ */ Symbol("_vtc"), ah = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, oh = qe({}, Lf, ah), Ti = ((co = (e, { slots: t }) => ji(r1, lh(e), t)).displayName = "Transition", co.props = oh, co), li = (e, t = []) => {
  te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, cc = (e) => !!e && (te(e) ? e.some((t) => t.length > 1) : e.length > 1);
function lh(e) {
  let t = {};
  for (let N in e) N in ah || (t[N] = e[N]);
  if (e.css === !1) return t;
  let { name: n = "v", type: i, duration: s, enterFromClass: r = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: o = `${n}-enter-to`, appearFromClass: l = r, appearActiveClass: u = a, appearToClass: d = o, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = e, p = (function(N) {
    if (N == null) return null;
    {
      if (Le(N)) return [(function(me) {
        return mo(me);
      })(N.enter), (function(me) {
        return mo(me);
      })(N.leave)];
      let ie = (function(me) {
        return mo(me);
      })(N);
      return [ie, ie];
    }
  })(s), b = p && p[0], x = p && p[1], { onBeforeEnter: k, onEnter: $, onEnterCancelled: S, onLeave: R, onLeaveCancelled: w, onBeforeAppear: I = k, onAppear: U = $, onAppearCancelled: F = S } = t, L = (N, ie, me, ue) => {
    N._enterCancelled = ue, zn(N, ie ? d : o), zn(N, ie ? u : a), me && me();
  }, W = (N, ie) => {
    N._isLeaving = !1, zn(N, f), zn(N, h), zn(N, m), ie && ie();
  }, Q = (N) => (ie, me) => {
    let ue = N ? U : $, Oe = () => L(ie, N, me);
    li(ue, [ie, Oe]), dc(() => {
      zn(ie, N ? l : r), Kt(ie, N ? d : o), cc(ue) || fc(ie, i, b, Oe);
    });
  };
  return qe(t, { onBeforeEnter(N) {
    li(k, [N]), Kt(N, r), Kt(N, a);
  }, onBeforeAppear(N) {
    li(I, [N]), Kt(N, l), Kt(N, u);
  }, onEnter: Q(!1), onAppear: Q(!0), onLeave(N, ie) {
    N._isLeaving = !0;
    let me = () => W(N, ie);
    Kt(N, f), N._enterCancelled ? (Kt(N, m), wl(N)) : (wl(N), Kt(N, m)), dc(() => {
      N._isLeaving && (zn(N, f), Kt(N, h), cc(R) || fc(N, i, x, me));
    }), li(R, [N, me]);
  }, onEnterCancelled(N) {
    L(N, !1, void 0, !0), li(S, [N]);
  }, onAppearCancelled(N) {
    L(N, !0, void 0, !0), li(F, [N]);
  }, onLeaveCancelled(N) {
    W(N), li(w, [N]);
  } });
}
function Kt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qi] || (e[Qi] = /* @__PURE__ */ new Set())).add(t);
}
function zn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  let n = e[Qi];
  n && (n.delete(t), n.size || (e[Qi] = void 0));
}
function dc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let W1 = 0;
function fc(e, t, n, i) {
  let s = e._endId = ++W1, r = () => {
    s === e._endId && i();
  };
  if (n != null) return setTimeout(r, n);
  let { type: a, timeout: o, propCount: l } = uh(e, t);
  if (!a) return i();
  let u = a + "end", d = 0, f = () => {
    e.removeEventListener(u, m), r();
  }, m = (h) => {
    h.target === e && ++d >= l && f();
  };
  setTimeout(() => {
    d < l && f();
  }, o + 1), e.addEventListener(u, m);
}
function uh(e, t) {
  let n = window.getComputedStyle(e), i = (p) => (n[p] || "").split(", "), s = i(`${Nn}Delay`), r = i(`${Nn}Duration`), a = hc(s, r), o = i(`${vs}Delay`), l = i(`${vs}Duration`), u = hc(o, l), d = null, f = 0, m = 0;
  t === Nn ? a > 0 && (d = Nn, f = a, m = r.length) : t === vs ? u > 0 && (d = vs, f = u, m = l.length) : m = (d = (f = Math.max(a, u)) > 0 ? a > u ? Nn : vs : null) ? d === Nn ? r.length : l.length : 0;
  let h = d === Nn && /\b(?:transform|all)(?:,|$)/.test(i(`${Nn}Property`).toString());
  return { type: d, timeout: f, propCount: m, hasTransform: h };
}
function hc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, i) => mc(n) + mc(e[i])));
}
function mc(e) {
  return e === "auto" ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
function wl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
let pc = /* @__PURE__ */ Symbol("_vod"), U1 = /* @__PURE__ */ Symbol("_vsh"), q1 = /* @__PURE__ */ Symbol(""), j1 = /(?:^|;)\s*display\s*:/, gc = /\s*!important$/;
function Or(e, t, n) {
  if (te(n)) n.forEach((i) => Or(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
  else {
    let i = (function(s, r) {
      let a = Co[r];
      if (a) return a;
      let o = Mt(r);
      if (o !== "filter" && o in s) return Co[r] = o;
      o = ga(o);
      for (let l = 0; l < yc.length; l++) {
        let u = yc[l] + o;
        if (u in s) return Co[r] = u;
      }
      return r;
    })(e, t);
    gc.test(n) ? e.setProperty(ii(i), n.replace(gc, ""), "important") : e[i] = n;
  }
}
let yc = ["Webkit", "Moz", "ms"], Co = {}, vc = "http://www.w3.org/1999/xlink";
function bc(e, t, n, i, s, r = _m(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(vc, t.slice(6, t.length)) : e.setAttributeNS(vc, t, n) : n == null || r && !(n || n === "") ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : qt(n) ? String(n) : n);
}
function kc(e, t, n, i, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rh(n) : n);
    return;
  }
  let r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    let l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
    l === u && "_value" in e || (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    let l = typeof e[t];
    if (l === "boolean") {
      var o;
      n = !!(o = n) || o === "";
    } else n == null && l === "string" ? (n = "", a = !0) : l === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(s || t);
}
function yn(e, t, n, i) {
  e.addEventListener(t, n, i);
}
let wc = /* @__PURE__ */ Symbol("_vei"), xc = /(?:Once|Passive|Capture)$/, Mo = 0, G1 = Promise.resolve(), Sc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && 123 > e.charCodeAt(2), Z1 = (e, t, n, i, s, r) => {
  let a = s === "svg";
  if (t === "class") {
    var o;
    let l;
    o = i, (l = e[Qi]) && (o = (o ? [o, ...l] : [...l]).join(" ")), o == null ? e.removeAttribute("class") : a ? e.setAttribute("class", o) : e.className = o;
  } else t === "style" ? (function(l, u, d) {
    let f = l.style, m = Ve(d), h = !1;
    if (d && !m) {
      if (u) if (Ve(u)) for (let p of u.split(";")) {
        let b = p.slice(0, p.indexOf(":")).trim();
        d[b] == null && Or(f, b, "");
      }
      else for (let p in u) d[p] == null && Or(f, p, "");
      for (let p in d) p === "display" && (h = !0), Or(f, p, d[p]);
    } else if (m) {
      if (u !== d) {
        let p = f[q1];
        p && (d += ";" + p), f.cssText = d, h = j1.test(d);
      }
    } else u && l.removeAttribute("style");
    pc in l && (l[pc] = h ? f.display : "", l[U1] && (f.display = "none"));
  })(e, n, i) : ha(t) ? Kl(t) || (function(l, u, d, f, m = null) {
    let h = l[wc] || (l[wc] = {}), p = h[u];
    if (f && p) p.value = f;
    else {
      let [k, $] = (function(S) {
        let R;
        if (xc.test(S)) {
          let w;
          for (R = {}; w = S.match(xc); ) S = S.slice(0, S.length - w[0].length), R[w[0].toLowerCase()] = !0;
        }
        return [S[2] === ":" ? S.slice(3) : ii(S.slice(2)), R];
      })(u);
      if (f) {
        var b, x;
        let S;
        yn(l, k, h[u] = (b = f, x = m, (S = (R) => {
          if (R._vts) {
            if (R._vts <= S.attached) return;
          } else R._vts = Date.now();
          jt((function(w, I) {
            if (!te(I)) return I;
            {
              let U = w.stopImmediatePropagation;
              return w.stopImmediatePropagation = () => {
                U.call(w), w._stopped = !0;
              }, I.map((F) => (L) => !L._stopped && F && F(L));
            }
          })(R, S.value), x, 5, [R]);
        }).value = b, S.attached = Mo || (G1.then(() => Mo = 0), Mo = Date.now()), S), $);
      } else p && (l.removeEventListener(k, p, $), h[u] = void 0);
    }
  })(e, t, 0, i, r) : (t[0] === "." ? (t = t.slice(1), 0) : t[0] === "^" ? (t = t.slice(1), 1) : !(function(l, u, d, f) {
    if (f) return !!(u === "innerHTML" || u === "textContent" || u in l && Sc(u) && ce(d));
    if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "autocorrect" || u === "sandbox" && l.tagName === "IFRAME" || u === "form" || u === "list" && l.tagName === "INPUT" || u === "type" && l.tagName === "TEXTAREA") return !1;
    if (u === "width" || u === "height") {
      let m = l.tagName;
      if (m === "IMG" || m === "VIDEO" || m === "CANVAS" || m === "SOURCE") return !1;
    }
    return !(Sc(u) && Ve(d)) && u in l;
  })(e, t, i, a)) ? e._isVueCE && (/[A-Z]/.test(t) || !Ve(i)) ? kc(e, Mt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), bc(e, t, i, a)) : (kc(e, t, i), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || bc(e, t, i, a, r, t !== "value"));
}, ch = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ Symbol("_moveCb"), Ic = /* @__PURE__ */ Symbol("_enterCb"), fh = (fo = { name: "TransitionGroup", props: qe({}, oh, { tag: String, moveClass: String }), setup(e, { slots: t }) {
  let n, i, s = cn(), r = Ff();
  return Vf(() => {
    if (!n.length) return;
    let a = e.moveClass || `${e.name || "v"}-move`;
    if (!(function(l, u, d) {
      let f = l.cloneNode(), m = l[Qi];
      m && m.forEach((b) => {
        b.split(/\s+/).forEach((x) => x && f.classList.remove(x));
      }), d.split(/\s+/).forEach((b) => b && f.classList.add(b)), f.style.display = "none";
      let h = u.nodeType === 1 ? u : u.parentNode;
      h.appendChild(f);
      let { hasTransform: p } = uh(f);
      return h.removeChild(f), p;
    })(n[0].el, s.vnode.el, a)) {
      n = [];
      return;
    }
    n.forEach(Y1), n.forEach(J1);
    let o = n.filter(X1);
    wl(s.vnode.el), o.forEach((l) => {
      let u = l.el, d = u.style;
      Kt(u, a), d.transform = d.webkitTransform = d.transitionDuration = "";
      let f = u[Yr] = (m) => {
        (!m || m.target === u) && (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[Yr] = null, zn(u, a));
      };
      u.addEventListener("transitionend", f);
    }), n = [];
  }), () => {
    let a = be(e), o = lh(a), l = a.tag || pe;
    if (n = [], i) for (let u = 0; u < i.length; u++) {
      let d = i[u];
      d.el && d.el instanceof Element && (n.push(d), Ii(d, Hs(d, o, r, s)), ch.set(d, { left: d.el.offsetLeft, top: d.el.offsetTop }));
    }
    i = t.default ? au(t.default()) : [];
    for (let u = 0; u < i.length; u++) {
      let d = i[u];
      d.key != null && Ii(d, Hs(d, o, r, s));
    }
    return B(l, null, i);
  };
} }, delete fo.props.mode, fo);
function Y1(e) {
  let t = e.el;
  t[Yr] && t[Yr](), t[Ic] && t[Ic]();
}
function J1(e) {
  dh.set(e, { left: e.el.offsetLeft, top: e.el.offsetTop });
}
function X1(e) {
  let t = ch.get(e), n = dh.get(e), i = t.left - n.left, s = t.top - n.top;
  if (i || s) {
    let r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${i}px,${s}px)`, r.transitionDuration = "0s", e;
  }
}
let Qn = (e) => {
  let t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (n) => $r(t, n) : t;
};
function K1(e) {
  e.target.composing = !0;
}
function Tc(e) {
  let t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
let Dt = /* @__PURE__ */ Symbol("_assign");
function Cc(e, t, n) {
  return t && (e = e.trim()), n && (e = ya(e)), e;
}
let Jr = { created(e, { modifiers: { lazy: t, trim: n, number: i } }, s) {
  e[Dt] = Qn(s);
  let r = i || s.props && s.props.type === "number";
  yn(e, t ? "change" : "input", (a) => {
    a.target.composing || e[Dt](Cc(e.value, n, r));
  }), (n || r) && yn(e, "change", () => {
    e.value = Cc(e.value, n, r);
  }), t || (yn(e, "compositionstart", K1), yn(e, "compositionend", Tc), yn(e, "change", Tc));
}, mounted(e, { value: t }) {
  e.value = t ?? "";
}, beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: s, number: r } }, a) {
  if (e[Dt] = Qn(a), e.composing) return;
  let o = (r || e.type === "number") && !/^0\d/.test(e.value) ? ya(e.value) : e.value, l = t ?? "";
  if (o !== l) {
    if (document.activeElement === e && e.type !== "range" && (i && t === n || s && e.value.trim() === l)) return;
    e.value = l;
  }
} }, Q1 = { deep: !0, created(e, t, n) {
  e[Dt] = Qn(n), yn(e, "change", () => {
    let i = e._modelValue, s = es(e), r = e.checked, a = e[Dt];
    if (te(i)) {
      let o = eu(i, s), l = o !== -1;
      if (r && !l) a(i.concat(s));
      else if (!r && l) {
        let u = [...i];
        u.splice(o, 1), a(u);
      }
    } else {
      let o;
      if (o = i, et.call(o) === "[object Set]") {
        let l = new Set(i);
        r ? l.add(s) : l.delete(s), a(l);
      } else a(hh(e, r));
    }
  });
}, mounted: Mc, beforeUpdate(e, t, n) {
  e[Dt] = Qn(n), Mc(e, t, n);
} };
function Mc(e, { value: t, oldValue: n }, i) {
  let s;
  if (e._modelValue = t, te(t)) s = eu(t, i.props.value) > -1;
  else {
    let r;
    if (r = t, et.call(r) === "[object Set]") s = t.has(i.props.value);
    else {
      if (t === n) return;
      s = Si(t, hh(e, !0));
    }
  }
  e.checked !== s && (e.checked = s);
}
let ep = { created(e, { value: t }, n) {
  e.checked = Si(t, n.props.value), e[Dt] = Qn(n), yn(e, "change", () => {
    e[Dt](es(e));
  });
}, beforeUpdate(e, { value: t, oldValue: n }, i) {
  e[Dt] = Qn(i), t !== n && (e.checked = Si(t, i.props.value));
} }, tp = { deep: !0, created(e, { value: t, modifiers: { number: n } }, i) {
  let s, r = (s = t, et.call(s) === "[object Set]");
  yn(e, "change", () => {
    let a = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? ya(es(o)) : es(o));
    e[Dt](e.multiple ? r ? new Set(a) : a : a[0]), e._assigning = !0, mi(() => {
      e._assigning = !1;
    });
  }), e[Dt] = Qn(i);
}, mounted(e, { value: t }) {
  Ec(e, t);
}, beforeUpdate(e, t, n) {
  e[Dt] = Qn(n);
}, updated(e, { value: t }) {
  e._assigning || Ec(e, t);
} };
function Ec(e, t) {
  let n, i = e.multiple, s = te(t);
  if (!i || s || (n = t, et.call(n) === "[object Set]")) {
    for (let r = 0, a = e.options.length; r < a; r++) {
      let o = e.options[r], l = es(o);
      if (i) if (s) {
        let u = typeof l;
        u === "string" || u === "number" ? o.selected = t.some((d) => String(d) === String(l)) : o.selected = eu(t, l) > -1;
      } else o.selected = t.has(l);
      else if (Si(es(o), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    i || e.selectedIndex === -1 || (e.selectedIndex = -1);
  }
}
function es(e) {
  return "_value" in e ? e._value : e.value;
}
function hh(e, t) {
  let n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
let np = { created(e, t, n) {
  vr(e, t, n, null, "created");
}, mounted(e, t, n) {
  vr(e, t, n, null, "mounted");
}, beforeUpdate(e, t, n, i) {
  vr(e, t, n, i, "beforeUpdate");
}, updated(e, t, n, i) {
  vr(e, t, n, i, "updated");
} };
function ip(e, t) {
  switch (e) {
    case "SELECT":
      return tp;
    case "TEXTAREA":
      return Jr;
    default:
      switch (t) {
        case "checkbox":
          return Q1;
        case "radio":
          return ep;
        default:
          return Jr;
      }
  }
}
function vr(e, t, n, i, s) {
  let r = ip(e.tagName, n.props && n.props.type)[s];
  r && r(e, t, n, i);
}
let sp = ["ctrl", "shift", "alt", "meta"], rp = { stop: (e) => e.stopPropagation(), prevent: (e) => e.preventDefault(), self: (e) => e.target !== e.currentTarget, ctrl: (e) => !e.ctrlKey, shift: (e) => !e.shiftKey, alt: (e) => !e.altKey, meta: (e) => !e.metaKey, left: (e) => "button" in e && e.button !== 0, middle: (e) => "button" in e && e.button !== 1, right: (e) => "button" in e && e.button !== 2, exact: (e, t) => sp.some((n) => e[`${n}Key`] && !t.includes(n)) }, pu = (e, t) => {
  let n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let a = 0; a < t.length; a++) {
      let o = rp[t[a]];
      if (o && o(s, t)) return;
    }
    return e(s, ...r);
  });
}, ap = qe({ patchProp: Z1 }, H1), op = (...e) => {
  let t = (Hu || (Hu = A1(ap))).createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    let s = up(i);
    if (!s) return;
    let r = t._component;
    ce(r) || r.render || r.template || (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    let a = n(s, !1, lp(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), a;
  }, t;
};
function lp(e) {
  return e instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && e instanceof MathMLElement ? "mathml" : void 0;
}
function up(e) {
  return Ve(e) ? document.querySelector(e) : e;
}
function mh(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = mh(e[t])) && (i && (i += " "), i += n);
  } else for (n in e) e[n] && (i && (i += " "), i += n);
  return i;
}
function Bt() {
  for (var e, t, n = 0, i = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = mh(e)) && (i && (i += " "), i += t);
  return i;
}
const ph = /* @__PURE__ */ Symbol(), gh = /* @__PURE__ */ Symbol(), cp = /* @__PURE__ */ Symbol();
class Mi extends Error {
}
class dp extends Mi {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class fp extends Mi {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class hp extends Mi {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class zi extends Mi {
}
class yh extends Mi {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class lt extends Mi {
}
class Vn extends Mi {
  constructor() {
    super("Zone is an abstract class");
  }
}
const J = "numeric", Zt = "short", Tt = "long", Xr = {
  year: J,
  month: J,
  day: J
}, vh = {
  year: J,
  month: Zt,
  day: J
}, mp = {
  year: J,
  month: Zt,
  day: J,
  weekday: Zt
}, bh = {
  year: J,
  month: Tt,
  day: J
}, kh = {
  year: J,
  month: Tt,
  day: J,
  weekday: Tt
}, wh = {
  hour: J,
  minute: J
}, xh = {
  hour: J,
  minute: J,
  second: J
}, Sh = {
  hour: J,
  minute: J,
  second: J,
  timeZoneName: Zt
}, Ih = {
  hour: J,
  minute: J,
  second: J,
  timeZoneName: Tt
}, Th = {
  hour: J,
  minute: J,
  hourCycle: "h23"
}, Ch = {
  hour: J,
  minute: J,
  second: J,
  hourCycle: "h23"
}, Mh = {
  hour: J,
  minute: J,
  second: J,
  hourCycle: "h23",
  timeZoneName: Zt
}, Eh = {
  hour: J,
  minute: J,
  second: J,
  hourCycle: "h23",
  timeZoneName: Tt
}, $h = {
  year: J,
  month: J,
  day: J,
  hour: J,
  minute: J
}, Ah = {
  year: J,
  month: J,
  day: J,
  hour: J,
  minute: J,
  second: J
}, Fh = {
  year: J,
  month: Zt,
  day: J,
  hour: J,
  minute: J
}, Lh = {
  year: J,
  month: Zt,
  day: J,
  hour: J,
  minute: J,
  second: J
}, pp = {
  year: J,
  month: Zt,
  day: J,
  weekday: Zt,
  hour: J,
  minute: J
}, Oh = {
  year: J,
  month: Tt,
  day: J,
  hour: J,
  minute: J,
  timeZoneName: Zt
}, Dh = {
  year: J,
  month: Tt,
  day: J,
  hour: J,
  minute: J,
  second: J,
  timeZoneName: Zt
}, Bh = {
  year: J,
  month: Tt,
  day: J,
  weekday: Tt,
  hour: J,
  minute: J,
  timeZoneName: Tt
}, _h = {
  year: J,
  month: Tt,
  day: J,
  weekday: Tt,
  hour: J,
  minute: J,
  second: J,
  timeZoneName: Tt
};
class er {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Vn();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Vn();
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
    throw new Vn();
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
  offsetName(t, n) {
    throw new Vn();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(t, n) {
    throw new Vn();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(t) {
    throw new Vn();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(t) {
    throw new Vn();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Vn();
  }
}
let Eo = null;
class Fa extends er {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Eo === null && (Eo = new Fa()), Eo;
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
  offsetName(t, { format: n, locale: i }) {
    return Gh(t, n, i);
  }
  /** @override **/
  formatOffset(t, n) {
    return Ds(this.offset(t), n);
  }
  /** @override **/
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  /** @override **/
  equals(t) {
    return t.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
const xl = /* @__PURE__ */ new Map();
function gp(e) {
  let t = xl.get(e);
  return t === void 0 && (t = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  }), xl.set(e, t)), t;
}
const yp = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function vp(e, t) {
  const n = e.format(t).replace(/\u200E/g, ""), i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, s, r, a, o, l, u, d] = i;
  return [a, s, r, o, l, u, d];
}
function bp(e, t) {
  const n = e.formatToParts(t), i = [];
  for (let s = 0; s < n.length; s++) {
    const { type: r, value: a } = n[s], o = yp[r];
    r === "era" ? i[o] = a : ae(o) || (i[o] = parseInt(a, 10));
  }
  return i;
}
const $o = /* @__PURE__ */ new Map();
class Tn extends er {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(t) {
    let n = $o.get(t);
    return n === void 0 && $o.set(t, n = new Tn(t)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    $o.clear(), xl.clear();
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(t) {
    return this.isValidZone(t);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(t) {
    if (!t)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(t) {
    super(), this.zoneName = t, this.valid = Tn.isValidZone(t);
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
  offsetName(t, { format: n, locale: i }) {
    return Gh(t, n, i, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(t, n) {
    return Ds(this.offset(t), n);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(t) {
    if (!this.valid) return NaN;
    const n = new Date(t);
    if (isNaN(n)) return NaN;
    const i = gp(this.name);
    let [s, r, a, o, l, u, d] = i.formatToParts ? bp(i, n) : vp(i, n);
    o === "BC" && (s = -Math.abs(s) + 1);
    const m = Oa({
      year: s,
      month: r,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: d,
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
  equals(t) {
    return t.type === "iana" && t.name === this.name;
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
let $c = {};
function kp(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = $c[n];
  return i || (i = new Intl.ListFormat(e, t), $c[n] = i), i;
}
const Sl = /* @__PURE__ */ new Map();
function Il(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = Sl.get(n);
  return i === void 0 && (i = new Intl.DateTimeFormat(e, t), Sl.set(n, i)), i;
}
const Tl = /* @__PURE__ */ new Map();
function wp(e, t = {}) {
  const n = JSON.stringify([e, t]);
  let i = Tl.get(n);
  return i === void 0 && (i = new Intl.NumberFormat(e, t), Tl.set(n, i)), i;
}
const Cl = /* @__PURE__ */ new Map();
function xp(e, t = {}) {
  const { base: n, ...i } = t, s = JSON.stringify([e, i]);
  let r = Cl.get(s);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(e, t), Cl.set(s, r)), r;
}
let Is = null;
function Sp() {
  return Is || (Is = new Intl.DateTimeFormat().resolvedOptions().locale, Is);
}
const Ml = /* @__PURE__ */ new Map();
function Nh(e) {
  let t = Ml.get(e);
  return t === void 0 && (t = new Intl.DateTimeFormat(e).resolvedOptions(), Ml.set(e, t)), t;
}
const El = /* @__PURE__ */ new Map();
function Ip(e) {
  let t = El.get(e);
  if (!t) {
    const n = new Intl.Locale(e);
    t = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in t || (t = { ...Vh, ...t }), El.set(e, t);
  }
  return t;
}
function Tp(e) {
  const t = e.indexOf("-x-");
  t !== -1 && (e = e.substring(0, t));
  const n = e.indexOf("-u-");
  if (n === -1)
    return [e];
  {
    let i, s;
    try {
      i = Il(e).resolvedOptions(), s = e;
    } catch {
      const l = e.substring(0, n);
      i = Il(l).resolvedOptions(), s = l;
    }
    const { numberingSystem: r, calendar: a } = i;
    return [s, r, a];
  }
}
function Cp(e, t, n) {
  return (n || t) && (e.includes("-u-") || (e += "-u"), n && (e += `-ca-${n}`), t && (e += `-nu-${t}`)), e;
}
function Mp(e) {
  const t = [];
  for (let n = 1; n <= 12; n++) {
    const i = se.utc(2009, n, 1);
    t.push(e(i));
  }
  return t;
}
function Ep(e) {
  const t = [];
  for (let n = 1; n <= 7; n++) {
    const i = se.utc(2016, 11, 13 + n);
    t.push(e(i));
  }
  return t;
}
function br(e, t, n, i) {
  const s = e.listingMode();
  return s === "error" ? null : s === "en" ? n(t) : i(t);
}
function $p(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || Nh(e.locale).numberingSystem === "latn";
}
class Ap {
  constructor(t, n, i) {
    this.padTo = i.padTo || 0, this.floor = i.floor || !1;
    const { padTo: s, floor: r, ...a } = i;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...i };
      i.padTo > 0 && (o.minimumIntegerDigits = i.padTo), this.inf = wp(t, o);
    }
  }
  format(t) {
    if (this.inf) {
      const n = this.floor ? Math.floor(t) : t;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(t) : ku(t, 3);
      return Ze(n, this.padTo);
    }
  }
}
class Fp {
  constructor(t, n, i) {
    this.opts = i, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = t;
    else if (t.zone.type === "fixed") {
      const a = -1 * (t.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      t.offset !== 0 && Tn.create(o).valid ? (s = o, this.dt = t) : (s = "UTC", this.dt = t.offset === 0 ? t : t.setZone("UTC").plus({ minutes: t.offset }), this.originalZone = t.zone);
    } else t.zone.type === "system" ? this.dt = t : t.zone.type === "iana" ? (this.dt = t, s = t.zone.name) : (s = "UTC", this.dt = t.setZone("UTC").plus({ minutes: t.offset }), this.originalZone = t.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || s, this.dtf = Il(n, r);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: t }) => t).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const t = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? t.map((n) => {
      if (n.type === "timeZoneName") {
        const i = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...n,
          value: i
        };
      } else
        return n;
    }) : t;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Lp {
  constructor(t, n, i) {
    this.opts = { style: "long", ...i }, !n && qh() && (this.rtf = xp(t, i));
  }
  format(t, n) {
    return this.rtf ? this.rtf.format(t, n) : e2(n, t, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(t, n) {
    return this.rtf ? this.rtf.formatToParts(t, n) : [];
  }
}
const Vh = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class $e {
  static fromOpts(t) {
    return $e.create(
      t.locale,
      t.numberingSystem,
      t.outputCalendar,
      t.weekSettings,
      t.defaultToEN
    );
  }
  static create(t, n, i, s, r = !1) {
    const a = t || We.defaultLocale, o = a || (r ? "en-US" : Sp()), l = n || We.defaultNumberingSystem, u = i || We.defaultOutputCalendar, d = Al(s) || We.defaultWeekSettings;
    return new $e(o, l, u, d, a);
  }
  static resetCache() {
    Is = null, Sl.clear(), Tl.clear(), Cl.clear(), Ml.clear(), El.clear();
  }
  static fromObject({ locale: t, numberingSystem: n, outputCalendar: i, weekSettings: s } = {}) {
    return $e.create(t, n, i, s);
  }
  constructor(t, n, i, s, r) {
    const [a, o, l] = Tp(t);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = i || l || null, this.weekSettings = s, this.intl = Cp(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = $p(this)), this.fastNumbersCached;
  }
  listingMode() {
    const t = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return t && n ? "en" : "intl";
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0 ? this : $e.create(
      t.locale || this.specifiedLocale,
      t.numberingSystem || this.numberingSystem,
      t.outputCalendar || this.outputCalendar,
      Al(t.weekSettings) || this.weekSettings,
      t.defaultToEN || !1
    );
  }
  redefaultToEN(t = {}) {
    return this.clone({ ...t, defaultToEN: !0 });
  }
  redefaultToSystem(t = {}) {
    return this.clone({ ...t, defaultToEN: !1 });
  }
  months(t, n = !1) {
    return br(this, t, Jh, () => {
      const i = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !i;
      const s = n ? { month: t, day: "numeric" } : { month: t }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][t]) {
        const a = i ? (o) => this.dtFormatter(o, s).format() : (o) => this.extract(o, s, "month");
        this.monthsCache[r][t] = Mp(a);
      }
      return this.monthsCache[r][t];
    });
  }
  weekdays(t, n = !1) {
    return br(this, t, Qh, () => {
      const i = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, s = n ? "format" : "standalone";
      return this.weekdaysCache[s][t] || (this.weekdaysCache[s][t] = Ep(
        (r) => this.extract(r, i, "weekday")
      )), this.weekdaysCache[s][t];
    });
  }
  meridiems() {
    return br(
      this,
      void 0,
      () => e0,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [se.utc(2016, 11, 13, 9), se.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, t, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(t) {
    return br(this, t, t0, () => {
      const n = { era: t };
      return this.eraCache[t] || (this.eraCache[t] = [se.utc(-40, 1, 1), se.utc(2017, 1, 1)].map(
        (i) => this.extract(i, n, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, n, i) {
    const s = this.dtFormatter(t, n), r = s.formatToParts(), a = r.find((o) => o.type.toLowerCase() === i);
    return a ? a.value : null;
  }
  numberFormatter(t = {}) {
    return new Ap(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, n = {}) {
    return new Fp(t, this.intl, n);
  }
  relFormatter(t = {}) {
    return new Lp(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return kp(this.intl, t);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Nh(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : jh() ? Ip(this.locale) : Vh;
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
  equals(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let Ao = null;
class bt extends er {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ao === null && (Ao = new bt(0)), Ao;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(t) {
    return t === 0 ? bt.utcInstance : new bt(t);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(t) {
    if (t) {
      const n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (n)
        return new bt(Da(n[1], n[2]));
    }
    return null;
  }
  constructor(t) {
    super(), this.fixed = t;
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
    return this.fixed === 0 ? "UTC" : `UTC${Ds(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ds(-this.fixed, "narrow")}`;
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
  formatOffset(t, n) {
    return Ds(this.fixed, n);
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
  equals(t) {
    return t.type === "fixed" && t.fixed === this.fixed;
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
class Op extends er {
  constructor(t) {
    super(), this.zoneName = t;
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
function Gn(e, t) {
  if (ae(e) || e === null)
    return t;
  if (e instanceof er)
    return e;
  if (Rp(e)) {
    const n = e.toLowerCase();
    return n === "default" ? t : n === "local" || n === "system" ? Fa.instance : n === "utc" || n === "gmt" ? bt.utcInstance : bt.parseSpecifier(n) || Tn.create(e);
  } else return Yn(e) ? bt.instance(e) : typeof e == "object" && "offset" in e && typeof e.offset == "function" ? e : new Op(e);
}
const gu = {
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
}, Ac = {
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
}, Dp = gu.hanidec.replace(/[\[|\]]/g, "").split("");
function Bp(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let n = 0; n < e.length; n++) {
      const i = e.charCodeAt(n);
      if (e[n].search(gu.hanidec) !== -1)
        t += Dp.indexOf(e[n]);
      else
        for (const s in Ac) {
          const [r, a] = Ac[s];
          i >= r && i <= a && (t += i - r);
        }
    }
    return parseInt(t, 10);
  } else
    return t;
}
const $l = /* @__PURE__ */ new Map();
function _p() {
  $l.clear();
}
function Vt({ numberingSystem: e }, t = "") {
  const n = e || "latn";
  let i = $l.get(n);
  i === void 0 && (i = /* @__PURE__ */ new Map(), $l.set(n, i));
  let s = i.get(t);
  return s === void 0 && (s = new RegExp(`${gu[n]}${t}`), i.set(t, s)), s;
}
let Fc = () => Date.now(), Lc = "system", Oc = null, Dc = null, Bc = null, _c = 60, Nc, Vc = null;
class We {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Fc;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(t) {
    Fc = t;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(t) {
    Lc = t;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Gn(Lc, Fa.instance);
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
  static set defaultLocale(t) {
    Oc = t;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Dc;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(t) {
    Dc = t;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Bc;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(t) {
    Bc = t;
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
    return Vc;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(t) {
    Vc = Al(t);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return _c;
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
  static set twoDigitCutoffYear(t) {
    _c = t % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Nc;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    Nc = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    $e.resetCache(), Tn.resetCache(), se.resetCache(), _p();
  }
}
class Pt {
  constructor(t, n) {
    this.reason = t, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Rh = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], zh = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Lt(e, t) {
  return new Pt(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function yu(e, t, n) {
  const i = new Date(Date.UTC(e, t - 1, n));
  e < 100 && e >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
  const s = i.getUTCDay();
  return s === 0 ? 7 : s;
}
function Ph(e, t, n) {
  return n + (tr(e) ? zh : Rh)[t - 1];
}
function Hh(e, t) {
  const n = tr(e) ? zh : Rh, i = n.findIndex((r) => r < t), s = t - n[i];
  return { month: i + 1, day: s };
}
function vu(e, t) {
  return (e - t + 7) % 7 + 1;
}
function Kr(e, t = 4, n = 1) {
  const { year: i, month: s, day: r } = e, a = Ph(i, s, r), o = vu(yu(i, s, r), n);
  let l = Math.floor((a - o + 14 - t) / 7), u;
  return l < 1 ? (u = i - 1, l = js(u, t, n)) : l > js(i, t, n) ? (u = i + 1, l = 1) : u = i, { weekYear: u, weekNumber: l, weekday: o, ...Ba(e) };
}
function Rc(e, t = 4, n = 1) {
  const { weekYear: i, weekNumber: s, weekday: r } = e, a = vu(yu(i, 1, t), n), o = Gi(i);
  let l = s * 7 + r - a - 7 + t, u;
  l < 1 ? (u = i - 1, l += Gi(u)) : l > o ? (u = i + 1, l -= Gi(i)) : u = i;
  const { month: d, day: f } = Hh(u, l);
  return { year: u, month: d, day: f, ...Ba(e) };
}
function Fo(e) {
  const { year: t, month: n, day: i } = e, s = Ph(t, n, i);
  return { year: t, ordinal: s, ...Ba(e) };
}
function zc(e) {
  const { year: t, ordinal: n } = e, { month: i, day: s } = Hh(t, n);
  return { year: t, month: i, day: s, ...Ba(e) };
}
function Pc(e, t) {
  if (!ae(e.localWeekday) || !ae(e.localWeekNumber) || !ae(e.localWeekYear)) {
    if (!ae(e.weekday) || !ae(e.weekNumber) || !ae(e.weekYear))
      throw new zi(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ae(e.localWeekday) || (e.weekday = e.localWeekday), ae(e.localWeekNumber) || (e.weekNumber = e.localWeekNumber), ae(e.localWeekYear) || (e.weekYear = e.localWeekYear), delete e.localWeekday, delete e.localWeekNumber, delete e.localWeekYear, {
      minDaysInFirstWeek: t.getMinDaysInFirstWeek(),
      startOfWeek: t.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Np(e, t = 4, n = 1) {
  const i = La(e.weekYear), s = Ot(
    e.weekNumber,
    1,
    js(e.weekYear, t, n)
  ), r = Ot(e.weekday, 1, 7);
  return i ? s ? r ? !1 : Lt("weekday", e.weekday) : Lt("week", e.weekNumber) : Lt("weekYear", e.weekYear);
}
function Vp(e) {
  const t = La(e.year), n = Ot(e.ordinal, 1, Gi(e.year));
  return t ? n ? !1 : Lt("ordinal", e.ordinal) : Lt("year", e.year);
}
function Wh(e) {
  const t = La(e.year), n = Ot(e.month, 1, 12), i = Ot(e.day, 1, Qr(e.year, e.month));
  return t ? n ? i ? !1 : Lt("day", e.day) : Lt("month", e.month) : Lt("year", e.year);
}
function Uh(e) {
  const { hour: t, minute: n, second: i, millisecond: s } = e, r = Ot(t, 0, 23) || t === 24 && n === 0 && i === 0 && s === 0, a = Ot(n, 0, 59), o = Ot(i, 0, 59), l = Ot(s, 0, 999);
  return r ? a ? o ? l ? !1 : Lt("millisecond", s) : Lt("second", i) : Lt("minute", n) : Lt("hour", t);
}
function ae(e) {
  return typeof e > "u";
}
function Yn(e) {
  return typeof e == "number";
}
function La(e) {
  return typeof e == "number" && e % 1 === 0;
}
function Rp(e) {
  return typeof e == "string";
}
function zp(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function qh() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function jh() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function Pp(e) {
  return Array.isArray(e) ? e : [e];
}
function Hc(e, t, n) {
  if (e.length !== 0)
    return e.reduce((i, s) => {
      const r = [t(s), s];
      return i && n(i[0], r[0]) === i[0] ? i : r;
    }, null)[1];
}
function Hp(e, t) {
  return t.reduce((n, i) => (n[i] = e[i], n), {});
}
function ts(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Al(e) {
  if (e == null)
    return null;
  if (typeof e != "object")
    throw new lt("Week settings must be an object");
  if (!Ot(e.firstDay, 1, 7) || !Ot(e.minimalDays, 1, 7) || !Array.isArray(e.weekend) || e.weekend.some((t) => !Ot(t, 1, 7)))
    throw new lt("Invalid week settings");
  return {
    firstDay: e.firstDay,
    minimalDays: e.minimalDays,
    weekend: Array.from(e.weekend)
  };
}
function Ot(e, t, n) {
  return La(e) && e >= t && e <= n;
}
function Wp(e, t) {
  return e - t * Math.floor(e / t);
}
function Ze(e, t = 2) {
  const n = e < 0;
  let i;
  return n ? i = "-" + ("" + -e).padStart(t, "0") : i = ("" + e).padStart(t, "0"), i;
}
function qn(e) {
  if (!(ae(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function ui(e) {
  if (!(ae(e) || e === null || e === ""))
    return parseFloat(e);
}
function bu(e) {
  if (!(ae(e) || e === null || e === "")) {
    const t = parseFloat("0." + e) * 1e3;
    return Math.floor(t);
  }
}
function ku(e, t, n = "round") {
  const i = 10 ** t;
  switch (n) {
    case "expand":
      return e > 0 ? Math.ceil(e * i) / i : Math.floor(e * i) / i;
    case "trunc":
      return Math.trunc(e * i) / i;
    case "round":
      return Math.round(e * i) / i;
    case "floor":
      return Math.floor(e * i) / i;
    case "ceil":
      return Math.ceil(e * i) / i;
    default:
      throw new RangeError(`Value rounding ${n} is out of range`);
  }
}
function tr(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Gi(e) {
  return tr(e) ? 366 : 365;
}
function Qr(e, t) {
  const n = Wp(t - 1, 12) + 1, i = e + (t - n) / 12;
  return n === 2 ? tr(i) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Oa(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond
  );
  return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(e.year, e.month - 1, e.day)), +t;
}
function Wc(e, t, n) {
  return -vu(yu(e, 1, t), n) + t - 1;
}
function js(e, t = 4, n = 1) {
  const i = Wc(e, t, n), s = Wc(e + 1, t, n);
  return (Gi(e) - i + s) / 7;
}
function Fl(e) {
  return e > 99 ? e : e > We.twoDigitCutoffYear ? 1900 + e : 2e3 + e;
}
function Gh(e, t, n, i = null) {
  const s = new Date(e), r = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  i && (r.timeZone = i);
  const a = { timeZoneName: t, ...r }, o = new Intl.DateTimeFormat(n, a).formatToParts(s).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Da(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  const i = parseInt(t, 10) || 0, s = n < 0 || Object.is(n, -0) ? -i : i;
  return n * 60 + s;
}
function Zh(e) {
  const t = Number(e);
  if (typeof e == "boolean" || e === "" || !Number.isFinite(t))
    throw new lt(`Invalid unit value ${e}`);
  return t;
}
function ea(e, t) {
  const n = {};
  for (const i in e)
    if (ts(e, i)) {
      const s = e[i];
      if (s == null) continue;
      n[t(i)] = Zh(s);
    }
  return n;
}
function Ds(e, t) {
  const n = Math.trunc(Math.abs(e / 60)), i = Math.trunc(Math.abs(e % 60)), s = e >= 0 ? "+" : "-";
  switch (t) {
    case "short":
      return `${s}${Ze(n, 2)}:${Ze(i, 2)}`;
    case "narrow":
      return `${s}${n}${i > 0 ? `:${i}` : ""}`;
    case "techie":
      return `${s}${Ze(n, 2)}${Ze(i, 2)}`;
    default:
      throw new RangeError(`Value format ${t} is out of range for property format`);
  }
}
function Ba(e) {
  return Hp(e, ["hour", "minute", "second", "millisecond"]);
}
const Up = [
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
], Yh = [
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
], qp = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Jh(e) {
  switch (e) {
    case "narrow":
      return [...qp];
    case "short":
      return [...Yh];
    case "long":
      return [...Up];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Xh = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Kh = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], jp = ["M", "T", "W", "T", "F", "S", "S"];
function Qh(e) {
  switch (e) {
    case "narrow":
      return [...jp];
    case "short":
      return [...Kh];
    case "long":
      return [...Xh];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const e0 = ["AM", "PM"], Gp = ["Before Christ", "Anno Domini"], Zp = ["BC", "AD"], Yp = ["B", "A"];
function t0(e) {
  switch (e) {
    case "narrow":
      return [...Yp];
    case "short":
      return [...Zp];
    case "long":
      return [...Gp];
    default:
      return null;
  }
}
function Jp(e) {
  return e0[e.hour < 12 ? 0 : 1];
}
function Xp(e, t) {
  return Qh(t)[e.weekday - 1];
}
function Kp(e, t) {
  return Jh(t)[e.month - 1];
}
function Qp(e, t) {
  return t0(t)[e.year < 0 ? 0 : 1];
}
function e2(e, t, n = "always", i = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, r = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (n === "auto" && r) {
    const f = e === "days";
    switch (t) {
      case 1:
        return f ? "tomorrow" : `next ${s[e][0]}`;
      case -1:
        return f ? "yesterday" : `last ${s[e][0]}`;
      case 0:
        return f ? "today" : `this ${s[e][0]}`;
    }
  }
  const a = Object.is(t, -0) || t < 0, o = Math.abs(t), l = o === 1, u = s[e], d = i ? l ? u[1] : u[2] || u[1] : l ? s[e][0] : e;
  return a ? `${o} ${d} ago` : `in ${o} ${d}`;
}
function Uc(e, t) {
  let n = "";
  for (const i of e)
    i.literal ? n += i.val : n += t(i.val);
  return n;
}
const t2 = {
  D: Xr,
  DD: vh,
  DDD: bh,
  DDDD: kh,
  t: wh,
  tt: xh,
  ttt: Sh,
  tttt: Ih,
  T: Th,
  TT: Ch,
  TTT: Mh,
  TTTT: Eh,
  f: $h,
  ff: Fh,
  fff: Oh,
  ffff: Bh,
  F: Ah,
  FF: Lh,
  FFF: Dh,
  FFFF: _h
};
class dt {
  static create(t, n = {}) {
    return new dt(t, n);
  }
  static parseFormat(t) {
    let n = null, i = "", s = !1;
    const r = [];
    for (let a = 0; a < t.length; a++) {
      const o = t.charAt(a);
      o === "'" ? ((i.length > 0 || s) && r.push({
        literal: s || /^\s+$/.test(i),
        val: i === "" ? "'" : i
      }), n = null, i = "", s = !s) : s || o === n ? i += o : (i.length > 0 && r.push({ literal: /^\s+$/.test(i), val: i }), i = o, n = o);
    }
    return i.length > 0 && r.push({ literal: s || /^\s+$/.test(i), val: i }), r;
  }
  static macroTokenToFormatOpts(t) {
    return t2[t];
  }
  constructor(t, n) {
    this.opts = n, this.loc = t, this.systemLoc = null;
  }
  formatWithSystemDefault(t, n) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, { ...this.opts, ...n }).format();
  }
  dtFormatter(t, n = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...n });
  }
  formatDateTime(t, n) {
    return this.dtFormatter(t, n).format();
  }
  formatDateTimeParts(t, n) {
    return this.dtFormatter(t, n).formatToParts();
  }
  formatInterval(t, n) {
    return this.dtFormatter(t.start, n).dtf.formatRange(t.start.toJSDate(), t.end.toJSDate());
  }
  resolvedOptions(t, n) {
    return this.dtFormatter(t, n).resolvedOptions();
  }
  num(t, n = 0, i = void 0) {
    if (this.opts.forceSimple)
      return Ze(t, n);
    const s = { ...this.opts };
    return n > 0 && (s.padTo = n), i && (s.signDisplay = i), this.loc.numberFormatter(s).format(t);
  }
  formatDateTimeFromString(t, n) {
    const i = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, p) => this.loc.extract(t, h, p), a = (h) => t.isOffsetFixed && t.offset === 0 && h.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, h.format) : "", o = () => i ? Jp(t) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (h, p) => i ? Kp(t, h) : r(p ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, p) => i ? Xp(t, h) : r(
      p ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), d = (h) => {
      const p = dt.macroTokenToFormatOpts(h);
      return p ? this.formatWithSystemDefault(t, p) : h;
    }, f = (h) => i ? Qp(t, h) : r({ era: h }, "era"), m = (h) => {
      switch (h) {
        // ms
        case "S":
          return this.num(t.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(t.millisecond, 3);
        // seconds
        case "s":
          return this.num(t.second);
        case "ss":
          return this.num(t.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(t.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(t.millisecond / 100));
        // minutes
        case "m":
          return this.num(t.minute);
        case "mm":
          return this.num(t.minute, 2);
        // hours
        case "h":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
        case "hh":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
        case "H":
          return this.num(t.hour);
        case "HH":
          return this.num(t.hour, 2);
        // offset
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return t.zoneName;
        // meridiems
        case "a":
          return o();
        // dates
        case "d":
          return s ? r({ day: "numeric" }, "day") : this.num(t.day);
        case "dd":
          return s ? r({ day: "2-digit" }, "day") : this.num(t.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(t.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        // weekdays - format
        case "E":
          return this.num(t.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        // months - standalone
        case "L":
          return s ? r({ month: "numeric", day: "numeric" }, "month") : this.num(t.month);
        case "LL":
          return s ? r({ month: "2-digit", day: "numeric" }, "month") : this.num(t.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        // months - format
        case "M":
          return s ? r({ month: "numeric" }, "month") : this.num(t.month);
        case "MM":
          return s ? r({ month: "2-digit" }, "month") : this.num(t.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        // years
        case "y":
          return s ? r({ year: "numeric" }, "year") : this.num(t.year);
        case "yy":
          return s ? r({ year: "2-digit" }, "year") : this.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? r({ year: "numeric" }, "year") : this.num(t.year, 4);
        case "yyyyyy":
          return s ? r({ year: "numeric" }, "year") : this.num(t.year, 6);
        // eras
        case "G":
          return f("short");
        case "GG":
          return f("long");
        case "GGGGG":
          return f("narrow");
        case "kk":
          return this.num(t.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(t.weekYear, 4);
        case "W":
          return this.num(t.weekNumber);
        case "WW":
          return this.num(t.weekNumber, 2);
        case "n":
          return this.num(t.localWeekNumber);
        case "nn":
          return this.num(t.localWeekNumber, 2);
        case "ii":
          return this.num(t.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(t.localWeekYear, 4);
        case "o":
          return this.num(t.ordinal);
        case "ooo":
          return this.num(t.ordinal, 3);
        case "q":
          return this.num(t.quarter);
        case "qq":
          return this.num(t.quarter, 2);
        case "X":
          return this.num(Math.floor(t.ts / 1e3));
        case "x":
          return this.num(t.ts);
        default:
          return d(h);
      }
    };
    return Uc(dt.parseFormat(n), m);
  }
  formatDurationFromString(t, n) {
    const i = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, s = (d) => {
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
    }, r = (d, f) => (m) => {
      const h = s(m);
      if (h) {
        const p = f.isNegativeDuration && h !== f.largestUnit ? i : 1;
        let b;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? b = "never" : this.opts.signMode === "all" ? b = "always" : b = "auto", this.num(d.get(h) * p, m.length, b);
      } else
        return m;
    }, a = dt.parseFormat(n), o = a.reduce(
      (d, { literal: f, val: m }) => f ? d : d.concat(m),
      []
    ), l = t.shiftTo(...o.map(s).filter((d) => d)), u = {
      isNegativeDuration: l < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(l.values)[0]
    };
    return Uc(a, r(l, u));
  }
}
const n0 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function as(...e) {
  const t = e.reduce((n, i) => n + i.source, "");
  return RegExp(`^${t}$`);
}
function os(...e) {
  return (t) => e.reduce(
    ([n, i, s], r) => {
      const [a, o, l] = r(t, s);
      return [{ ...n, ...a }, o || i, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ls(e, ...t) {
  if (e == null)
    return [null, null];
  for (const [n, i] of t) {
    const s = n.exec(e);
    if (s)
      return i(s);
  }
  return [null, null];
}
function i0(...e) {
  return (t, n) => {
    const i = {};
    let s;
    for (s = 0; s < e.length; s++)
      i[e[s]] = qn(t[n + s]);
    return [i, null, n + s];
  };
}
const s0 = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, n2 = `(?:${s0.source}?(?:\\[(${n0.source})\\])?)?`, wu = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, r0 = RegExp(`${wu.source}${n2}`), xu = RegExp(`(?:[Tt]${r0.source})?`), i2 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, s2 = /(\d{4})-?W(\d\d)(?:-?(\d))?/, r2 = /(\d{4})-?(\d{3})/, a2 = i0("weekYear", "weekNumber", "weekDay"), o2 = i0("year", "ordinal"), l2 = /(\d{4})-(\d\d)-(\d\d)/, a0 = RegExp(
  `${wu.source} ?(?:${s0.source}|(${n0.source}))?`
), u2 = RegExp(`(?: ${a0.source})?`);
function Zi(e, t, n) {
  const i = e[t];
  return ae(i) ? n : qn(i);
}
function c2(e, t) {
  return [{
    year: Zi(e, t),
    month: Zi(e, t + 1, 1),
    day: Zi(e, t + 2, 1)
  }, null, t + 3];
}
function us(e, t) {
  return [{
    hours: Zi(e, t, 0),
    minutes: Zi(e, t + 1, 0),
    seconds: Zi(e, t + 2, 0),
    milliseconds: bu(e[t + 3])
  }, null, t + 4];
}
function nr(e, t) {
  const n = !e[t] && !e[t + 1], i = Da(e[t + 1], e[t + 2]), s = n ? null : bt.instance(i);
  return [{}, s, t + 3];
}
function ir(e, t) {
  const n = e[t] ? Tn.create(e[t]) : null;
  return [{}, n, t + 1];
}
const d2 = RegExp(`^T?${wu.source}$`), f2 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function h2(e) {
  const [t, n, i, s, r, a, o, l, u] = e, d = t[0] === "-", f = l && l[0] === "-", m = (h, p = !1) => h !== void 0 && (p || h && d) ? -h : h;
  return [
    {
      years: m(ui(n)),
      months: m(ui(i)),
      weeks: m(ui(s)),
      days: m(ui(r)),
      hours: m(ui(a)),
      minutes: m(ui(o)),
      seconds: m(ui(l), l === "-0"),
      milliseconds: m(bu(u), f)
    }
  ];
}
const m2 = {
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
function Su(e, t, n, i, s, r, a) {
  const o = {
    year: t.length === 2 ? Fl(qn(t)) : qn(t),
    month: Yh.indexOf(n) + 1,
    day: qn(i),
    hour: qn(s),
    minute: qn(r)
  };
  return a && (o.second = qn(a)), e && (o.weekday = e.length > 3 ? Xh.indexOf(e) + 1 : Kh.indexOf(e) + 1), o;
}
const p2 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function g2(e) {
  const [
    ,
    t,
    n,
    i,
    s,
    r,
    a,
    o,
    l,
    u,
    d,
    f
  ] = e, m = Su(t, s, i, n, r, a, o);
  let h;
  return l ? h = m2[l] : u ? h = 0 : h = Da(d, f), [m, new bt(h)];
}
function y2(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const v2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, b2 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, k2 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function qc(e) {
  const [, t, n, i, s, r, a, o] = e;
  return [Su(t, s, i, n, r, a, o), bt.utcInstance];
}
function w2(e) {
  const [, t, n, i, s, r, a, o] = e;
  return [Su(t, o, n, i, s, r, a), bt.utcInstance];
}
const x2 = as(i2, xu), S2 = as(s2, xu), I2 = as(r2, xu), T2 = as(r0), o0 = os(
  c2,
  us,
  nr,
  ir
), C2 = os(
  a2,
  us,
  nr,
  ir
), M2 = os(
  o2,
  us,
  nr,
  ir
), E2 = os(
  us,
  nr,
  ir
);
function $2(e) {
  return ls(
    e,
    [x2, o0],
    [S2, C2],
    [I2, M2],
    [T2, E2]
  );
}
function A2(e) {
  return ls(y2(e), [p2, g2]);
}
function F2(e) {
  return ls(
    e,
    [v2, qc],
    [b2, qc],
    [k2, w2]
  );
}
function L2(e) {
  return ls(e, [f2, h2]);
}
const O2 = os(us);
function D2(e) {
  return ls(e, [d2, O2]);
}
const B2 = as(l2, u2), _2 = as(a0), N2 = os(
  us,
  nr,
  ir
);
function V2(e) {
  return ls(
    e,
    [B2, o0],
    [_2, N2]
  );
}
const jc = "Invalid Duration", l0 = {
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
}, R2 = {
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
  ...l0
}, At = 146097 / 400, Di = 146097 / 4800, z2 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: At / 7,
    days: At,
    hours: At * 24,
    minutes: At * 24 * 60,
    seconds: At * 24 * 60 * 60,
    milliseconds: At * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: At / 28,
    days: At / 4,
    hours: At * 24 / 4,
    minutes: At * 24 * 60 / 4,
    seconds: At * 24 * 60 * 60 / 4,
    milliseconds: At * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Di / 7,
    days: Di,
    hours: Di * 24,
    minutes: Di * 24 * 60,
    seconds: Di * 24 * 60 * 60,
    milliseconds: Di * 24 * 60 * 60 * 1e3
  },
  ...l0
}, pi = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], P2 = pi.slice(0).reverse();
function fn(e, t, n = !1) {
  const i = {
    values: n ? t.values : { ...e.values, ...t.values || {} },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
    matrix: t.matrix || e.matrix
  };
  return new Se(i);
}
function u0(e, t) {
  let n = t.milliseconds ?? 0;
  for (const i of P2.slice(1))
    t[i] && (n += t[i] * e[i].milliseconds);
  return n;
}
function Gc(e, t) {
  const n = u0(e, t) < 0 ? -1 : 1;
  pi.reduceRight((i, s) => {
    if (ae(t[s]))
      return i;
    if (i) {
      const r = t[i] * n, a = e[s][i], o = Math.floor(r / a);
      t[s] += o * n, t[i] -= o * a * n;
    }
    return s;
  }, null), pi.reduce((i, s) => {
    if (ae(t[s]))
      return i;
    if (i) {
      const r = t[i] % 1;
      t[i] -= r, t[s] += r * e[i][s];
    }
    return s;
  }, null);
}
function Zc(e) {
  const t = {};
  for (const [n, i] of Object.entries(e))
    i !== 0 && (t[n] = i);
  return t;
}
class Se {
  /**
   * @private
   */
  constructor(t) {
    const n = t.conversionAccuracy === "longterm" || !1;
    let i = n ? z2 : R2;
    t.matrix && (i = t.matrix), this.values = t.values, this.loc = t.loc || $e.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = i, this.isLuxonDuration = !0;
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
  static fromMillis(t, n) {
    return Se.fromObject({ milliseconds: t }, n);
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
  static fromObject(t, n = {}) {
    if (t == null || typeof t != "object")
      throw new lt(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new Se({
      values: ea(t, Se.normalizeUnit),
      loc: $e.fromObject(n),
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
  static fromDurationLike(t) {
    if (Yn(t))
      return Se.fromMillis(t);
    if (Se.isDuration(t))
      return t;
    if (typeof t == "object")
      return Se.fromObject(t);
    throw new lt(
      `Unknown duration argument ${t} of type ${typeof t}`
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
  static fromISO(t, n) {
    const [i] = L2(t);
    return i ? Se.fromObject(i, n) : Se.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
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
  static fromISOTime(t, n) {
    const [i] = D2(t);
    return i ? Se.fromObject(i, n) : Se.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new lt("need to specify a reason the Duration is invalid");
    const i = t instanceof Pt ? t : new Pt(t, n);
    if (We.throwOnInvalid)
      throw new hp(i);
    return new Se({ invalid: i });
  }
  /**
   * @private
   */
  static normalizeUnit(t) {
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
    }[t && t.toLowerCase()];
    if (!n) throw new yh(t);
    return n;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(t) {
    return t && t.isLuxonDuration || !1;
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
  toFormat(t, n = {}) {
    const i = {
      ...n,
      floor: n.round !== !1 && n.floor !== !1
    };
    return this.isValid ? dt.create(this.loc, i).formatDurationFromString(this, t) : jc;
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
  toHuman(t = {}) {
    if (!this.isValid) return jc;
    const n = t.showZeros !== !1, i = pi.map((s) => {
      const r = this.values[s];
      return ae(r) || r === 0 && !n ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...t, unit: s.slice(0, -1) }).format(r);
    }).filter((s) => s);
    return this.loc.listFormatter({ type: "conjunction", style: t.listStyle || "narrow", ...t }).format(i);
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
    let t = "P";
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += ku(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
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
  toISOTime(t = {}) {
    if (!this.isValid) return null;
    const n = this.toMillis();
    return n < 0 || n >= 864e5 ? null : (t = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...t,
      includeOffset: !1
    }, se.fromMillis(n, { zone: "UTC" }).toISOTime(t));
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
    return this.isValid ? u0(this.matrix, this.values) : NaN;
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
  plus(t) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(t), i = {};
    for (const s of pi)
      (ts(n.values, s) || ts(this.values, s)) && (i[s] = n.get(s) + this.get(s));
    return fn(this, { values: i }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(t) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(t);
    return this.plus(n.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(t) {
    if (!this.isValid) return this;
    const n = {};
    for (const i of Object.keys(this.values))
      n[i] = Zh(t(this.values[i], i));
    return fn(this, { values: n }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(t) {
    return this[Se.normalizeUnit(t)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(t) {
    if (!this.isValid) return this;
    const n = { ...this.values, ...ea(t, Se.normalizeUnit) };
    return fn(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: t, numberingSystem: n, conversionAccuracy: i, matrix: s } = {}) {
    const a = { loc: this.loc.clone({ locale: t, numberingSystem: n }), matrix: s, conversionAccuracy: i };
    return fn(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
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
    const t = this.toObject();
    return Gc(this.matrix, t), fn(this, { values: t }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const t = Zc(this.normalize().shiftToAll().toObject());
    return fn(this, { values: t }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...t) {
    if (!this.isValid) return this;
    if (t.length === 0)
      return this;
    t = t.map((a) => Se.normalizeUnit(a));
    const n = {}, i = {}, s = this.toObject();
    let r;
    for (const a of pi)
      if (t.indexOf(a) >= 0) {
        r = a;
        let o = 0;
        for (const u in i)
          o += this.matrix[u][a] * i[u], i[u] = 0;
        Yn(s[a]) && (o += s[a]);
        const l = Math.trunc(o);
        n[a] = l, i[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else Yn(s[a]) && (i[a] = s[a]);
    for (const a in i)
      i[a] !== 0 && (n[r] += a === r ? i[a] : i[a] / this.matrix[r][a]);
    return Gc(this.matrix, n), fn(this, { values: n }, !0);
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
    const t = {};
    for (const n of Object.keys(this.values))
      t[n] = this.values[n] === 0 ? 0 : -this.values[n];
    return fn(this, { values: t }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const t = Zc(this.values);
    return fn(this, { values: t }, !0);
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
  equals(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
      return !1;
    function n(i, s) {
      return i === void 0 || i === 0 ? s === void 0 || s === 0 : i === s;
    }
    for (const i of pi)
      if (!n(this.values[i], t.values[i]))
        return !1;
    return !0;
  }
}
const Bi = "Invalid Interval";
function H2(e, t) {
  return !e || !e.isValid ? He.invalid("missing or invalid start") : !t || !t.isValid ? He.invalid("missing or invalid end") : t < e ? He.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`
  ) : null;
}
class He {
  /**
   * @private
   */
  constructor(t) {
    this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new lt("need to specify a reason the Interval is invalid");
    const i = t instanceof Pt ? t : new Pt(t, n);
    if (We.throwOnInvalid)
      throw new fp(i);
    return new He({ invalid: i });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(t, n) {
    const i = bs(t), s = bs(n), r = H2(i, s);
    return r ?? new He({
      start: i,
      end: s
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(t, n) {
    const i = Se.fromDurationLike(n), s = bs(t);
    return He.fromDateTimes(s, s.plus(i));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(t, n) {
    const i = Se.fromDurationLike(n), s = bs(t);
    return He.fromDateTimes(s.minus(i), s);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(t, n) {
    const [i, s] = (t || "").split("/", 2);
    if (i && s) {
      let r, a;
      try {
        r = se.fromISO(i, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = se.fromISO(s, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return He.fromDateTimes(r, o);
      if (a) {
        const u = Se.fromISO(s, n);
        if (u.isValid)
          return He.after(r, u);
      } else if (l) {
        const u = Se.fromISO(i, n);
        if (u.isValid)
          return He.before(o, u);
      }
    }
    return He.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(t) {
    return t && t.isLuxonInterval || !1;
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
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
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
  count(t = "milliseconds", n) {
    if (!this.isValid) return NaN;
    const i = this.start.startOf(t, n);
    let s;
    return n?.useLocaleWeeks ? s = this.end.reconfigure({ locale: i.locale }) : s = this.end, s = s.startOf(t, n), Math.floor(s.diff(i, t).get(t)) + (s.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(t) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
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
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: t, end: n } = {}) {
    return this.isValid ? He.fromDateTimes(t || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...t) {
    if (!this.isValid) return [];
    const n = t.map(bs).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), i = [];
    let { s } = this, r = 0;
    for (; s < this.e; ) {
      const a = n[r] || this.e, o = +a > +this.e ? this.e : a;
      i.push(He.fromDateTimes(s, o)), s = o, r += 1;
    }
    return i;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(t) {
    const n = Se.fromDurationLike(t);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s: i } = this, s = 1, r;
    const a = [];
    for (; i < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * s));
      r = +o > +this.e ? this.e : o, a.push(He.fromDateTimes(i, r)), i = r, s += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(t) {
    return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(t) {
    if (!this.isValid) return this;
    const n = this.s > t.s ? this.s : t.s, i = this.e < t.e ? this.e : t.e;
    return n >= i ? null : He.fromDateTimes(n, i);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(t) {
    if (!this.isValid) return this;
    const n = this.s < t.s ? this.s : t.s, i = this.e > t.e ? this.e : t.e;
    return He.fromDateTimes(n, i);
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
  static merge(t) {
    const [n, i] = t.sort((s, r) => s.s - r.s).reduce(
      ([s, r], a) => r ? r.overlaps(a) || r.abutsStart(a) ? [s, r.union(a)] : [s.concat([r]), a] : [s, a],
      [[], null]
    );
    return i && n.push(i), n;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(t) {
    let n = null, i = 0;
    const s = [], r = t.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...r), o = a.sort((l, u) => l.time - u.time);
    for (const l of o)
      i += l.type === "s" ? 1 : -1, i === 1 ? n = l.time : (n && +n != +l.time && s.push(He.fromDateTimes(n, l.time)), n = null);
    return He.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...t) {
    return He.xor([this].concat(t)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Bi;
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
  toLocaleString(t = Xr, n = {}) {
    return this.isValid ? dt.create(this.s.loc.clone(n), t).formatInterval(this) : Bi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Bi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Bi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Bi;
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
  toFormat(t, { separator: n = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${n}${this.e.toFormat(t)}` : Bi;
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
  toDuration(t, n) {
    return this.isValid ? this.e.diff(this.s, t, n) : Se.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(t) {
    return He.fromDateTimes(t(this.s), t(this.e));
  }
}
class kr {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(t = We.defaultZone) {
    const n = se.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(t) {
    return Tn.isValidZone(t);
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
  static normalizeZone(t) {
    return Gn(t, We.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: t = null, locObj: n = null } = {}) {
    return (n || $e.create(t)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: t = null, locObj: n = null } = {}) {
    return (n || $e.create(t)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: t = null, locObj: n = null } = {}) {
    return (n || $e.create(t)).getWeekendDays().slice();
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
  static months(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null, outputCalendar: r = "gregory" } = {}) {
    return (s || $e.create(n, i, r)).months(t);
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
  static monthsFormat(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null, outputCalendar: r = "gregory" } = {}) {
    return (s || $e.create(n, i, r)).months(t, !0);
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
  static weekdays(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null } = {}) {
    return (s || $e.create(n, i, null)).weekdays(t);
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
  static weekdaysFormat(t = "long", { locale: n = null, numberingSystem: i = null, locObj: s = null } = {}) {
    return (s || $e.create(n, i, null)).weekdays(t, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: t = null } = {}) {
    return $e.create(t).meridiems();
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
  static eras(t = "short", { locale: n = null } = {}) {
    return $e.create(n, null, "gregory").eras(t);
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
    return { relative: qh(), localeWeek: jh() };
  }
}
function Yc(e, t) {
  const n = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), i = n(t) - n(e);
  return Math.floor(Se.fromMillis(i).as("days"));
}
function W2(e, t, n) {
  const i = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const d = Yc(l, u);
        return (d - d % 7) / 7;
      }
    ],
    ["days", Yc]
  ], s = {}, r = e;
  let a, o;
  for (const [l, u] of i)
    n.indexOf(l) >= 0 && (a = l, s[l] = u(e, t), o = r.plus(s), o > t ? (s[l]--, e = r.plus(s), e > t && (o = e, s[l]--, e = r.plus(s))) : e = o);
  return [e, s, o, a];
}
function U2(e, t, n, i) {
  let [s, r, a, o] = W2(e, t, n);
  const l = t - s, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < t && (a = s.plus({ [o]: 1 })), a !== s && (r[o] = (r[o] || 0) + l / (a - s)));
  const d = Se.fromObject(r, i);
  return u.length > 0 ? Se.fromMillis(l, i).shiftTo(...u).plus(d) : d;
}
const q2 = "missing Intl.DateTimeFormat.formatToParts support";
function Ce(e, t = (n) => n) {
  return { regex: e, deser: ([n]) => t(Bp(n)) };
}
const j2 = " ", c0 = `[ ${j2}]`, d0 = new RegExp(c0, "g");
function G2(e) {
  return e.replace(/\./g, "\\.?").replace(d0, c0);
}
function Jc(e) {
  return e.replace(/\./g, "").replace(d0, " ").toLowerCase();
}
function Rt(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(G2).join("|")),
    deser: ([n]) => e.findIndex((i) => Jc(n) === Jc(i)) + t
  };
}
function Xc(e, t) {
  return { regex: e, deser: ([, n, i]) => Da(n, i), groups: t };
}
function wr(e) {
  return { regex: e, deser: ([t]) => t };
}
function Z2(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Y2(e, t) {
  const n = Vt(t), i = Vt(t, "{2}"), s = Vt(t, "{3}"), r = Vt(t, "{4}"), a = Vt(t, "{6}"), o = Vt(t, "{1,2}"), l = Vt(t, "{1,3}"), u = Vt(t, "{1,6}"), d = Vt(t, "{1,9}"), f = Vt(t, "{2,4}"), m = Vt(t, "{4,6}"), h = (x) => ({ regex: RegExp(Z2(x.val)), deser: ([k]) => k, literal: !0 }), b = ((x) => {
    if (e.literal)
      return h(x);
    switch (x.val) {
      // era
      case "G":
        return Rt(t.eras("short"), 0);
      case "GG":
        return Rt(t.eras("long"), 0);
      // years
      case "y":
        return Ce(u);
      case "yy":
        return Ce(f, Fl);
      case "yyyy":
        return Ce(r);
      case "yyyyy":
        return Ce(m);
      case "yyyyyy":
        return Ce(a);
      // months
      case "M":
        return Ce(o);
      case "MM":
        return Ce(i);
      case "MMM":
        return Rt(t.months("short", !0), 1);
      case "MMMM":
        return Rt(t.months("long", !0), 1);
      case "L":
        return Ce(o);
      case "LL":
        return Ce(i);
      case "LLL":
        return Rt(t.months("short", !1), 1);
      case "LLLL":
        return Rt(t.months("long", !1), 1);
      // dates
      case "d":
        return Ce(o);
      case "dd":
        return Ce(i);
      // ordinals
      case "o":
        return Ce(l);
      case "ooo":
        return Ce(s);
      // time
      case "HH":
        return Ce(i);
      case "H":
        return Ce(o);
      case "hh":
        return Ce(i);
      case "h":
        return Ce(o);
      case "mm":
        return Ce(i);
      case "m":
        return Ce(o);
      case "q":
        return Ce(o);
      case "qq":
        return Ce(i);
      case "s":
        return Ce(o);
      case "ss":
        return Ce(i);
      case "S":
        return Ce(l);
      case "SSS":
        return Ce(s);
      case "u":
        return wr(d);
      case "uu":
        return wr(o);
      case "uuu":
        return Ce(n);
      // meridiem
      case "a":
        return Rt(t.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Ce(r);
      case "kk":
        return Ce(f, Fl);
      // weekNumber (W)
      case "W":
        return Ce(o);
      case "WW":
        return Ce(i);
      // weekdays
      case "E":
      case "c":
        return Ce(n);
      case "EEE":
        return Rt(t.weekdays("short", !1), 1);
      case "EEEE":
        return Rt(t.weekdays("long", !1), 1);
      case "ccc":
        return Rt(t.weekdays("short", !0), 1);
      case "cccc":
        return Rt(t.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return Xc(new RegExp(`([+-]${o.source})(?::(${i.source}))?`), 2);
      case "ZZZ":
        return Xc(new RegExp(`([+-]${o.source})(${i.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return wr(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return wr(/[^\S\n\r]/);
      default:
        return h(x);
    }
  })(e) || {
    invalidReason: q2
  };
  return b.token = e, b;
}
const J2 = {
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
function X2(e, t, n) {
  const { type: i, value: s } = e;
  if (i === "literal") {
    const l = /^\s+$/.test(s);
    return {
      literal: !l,
      val: l ? " " : s
    };
  }
  const r = t[i];
  let a = i;
  i === "hour" && (t.hour12 != null ? a = t.hour12 ? "hour12" : "hour24" : t.hourCycle != null ? t.hourCycle === "h11" || t.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = n.hour12 ? "hour12" : "hour24");
  let o = J2[a];
  if (typeof o == "object" && (o = o[r]), o)
    return {
      literal: !1,
      val: o
    };
}
function K2(e) {
  return [`^${e.map((n) => n.regex).reduce((n, i) => `${n}(${i.source})`, "")}$`, e];
}
function Q2(e, t, n) {
  const i = e.match(t);
  if (i) {
    const s = {};
    let r = 1;
    for (const a in n)
      if (ts(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (s[o.token.val[0]] = o.deser(i.slice(r, r + l))), r += l;
      }
    return [i, s];
  } else
    return [i, {}];
}
function eg(e) {
  const t = (r) => {
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
  let n = null, i;
  return ae(e.z) || (n = Tn.create(e.z)), ae(e.Z) || (n || (n = new bt(e.Z)), i = e.Z), ae(e.q) || (e.M = (e.q - 1) * 3 + 1), ae(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), ae(e.u) || (e.S = bu(e.u)), [Object.keys(e).reduce((r, a) => {
    const o = t(a);
    return o && (r[o] = e[a]), r;
  }, {}), n, i];
}
let Lo = null;
function tg() {
  return Lo || (Lo = se.fromMillis(1555555555555)), Lo;
}
function ng(e, t) {
  if (e.literal)
    return e;
  const n = dt.macroTokenToFormatOpts(e.val), i = p0(n, t);
  return i == null || i.includes(void 0) ? e : i;
}
function f0(e, t) {
  return Array.prototype.concat(...e.map((n) => ng(n, t)));
}
class h0 {
  constructor(t, n) {
    if (this.locale = t, this.format = n, this.tokens = f0(dt.parseFormat(n), t), this.units = this.tokens.map((i) => Y2(i, t)), this.disqualifyingUnit = this.units.find((i) => i.invalidReason), !this.disqualifyingUnit) {
      const [i, s] = K2(this.units);
      this.regex = RegExp(i, "i"), this.handlers = s;
    }
  }
  explainFromTokens(t) {
    if (this.isValid) {
      const [n, i] = Q2(t, this.regex, this.handlers), [s, r, a] = i ? eg(i) : [null, null, void 0];
      if (ts(i, "a") && ts(i, "H"))
        throw new zi(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: t,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: n,
        matches: i,
        result: s,
        zone: r,
        specificOffset: a
      };
    } else
      return { input: t, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function m0(e, t, n) {
  return new h0(e, n).explainFromTokens(t);
}
function ig(e, t, n) {
  const { result: i, zone: s, specificOffset: r, invalidReason: a } = m0(e, t, n);
  return [i, s, r, a];
}
function p0(e, t) {
  if (!e)
    return null;
  const i = dt.create(t, e).dtFormatter(tg()), s = i.formatToParts(), r = i.resolvedOptions();
  return s.map((a) => X2(a, e, r));
}
const Oo = "Invalid DateTime", Kc = 864e13;
function Ts(e) {
  return new Pt("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Do(e) {
  return e.weekData === null && (e.weekData = Kr(e.c)), e.weekData;
}
function Bo(e) {
  return e.localWeekData === null && (e.localWeekData = Kr(
    e.c,
    e.loc.getMinDaysInFirstWeek(),
    e.loc.getStartOfWeek()
  )), e.localWeekData;
}
function ci(e, t) {
  const n = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new se({ ...n, ...t, old: n });
}
function g0(e, t, n) {
  let i = e - t * 60 * 1e3;
  const s = n.offset(i);
  if (t === s)
    return [i, t];
  i -= (s - t) * 60 * 1e3;
  const r = n.offset(i);
  return s === r ? [i, s] : [e - Math.min(s, r) * 60 * 1e3, Math.max(s, r)];
}
function xr(e, t) {
  e += t * 60 * 1e3;
  const n = new Date(e);
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
function Dr(e, t, n) {
  return g0(Oa(e), t, n);
}
function Qc(e, t) {
  const n = e.o, i = e.c.year + Math.trunc(t.years), s = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3, r = {
    ...e.c,
    year: i,
    month: s,
    day: Math.min(e.c.day, Qr(i, s)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
  }, a = Se.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), o = Oa(r);
  let [l, u] = g0(o, n, e.zone);
  return a !== 0 && (l += a, u = e.zone.offset(l)), { ts: l, o: u };
}
function _i(e, t, n, i, s, r) {
  const { setZone: a, zone: o } = n;
  if (e && Object.keys(e).length !== 0 || t) {
    const l = t || o, u = se.fromObject(e, {
      ...n,
      zone: l,
      specificOffset: r
    });
    return a ? u : u.setZone(o);
  } else
    return se.invalid(
      new Pt("unparsable", `the input "${s}" can't be parsed as ${i}`)
    );
}
function Sr(e, t, n = !0) {
  return e.isValid ? dt.create($e.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}
function _o(e, t, n) {
  const i = e.c.year > 9999 || e.c.year < 0;
  let s = "";
  if (i && e.c.year >= 0 && (s += "+"), s += Ze(e.c.year, i ? 6 : 4), n === "year") return s;
  if (t) {
    if (s += "-", s += Ze(e.c.month), n === "month") return s;
    s += "-";
  } else if (s += Ze(e.c.month), n === "month") return s;
  return s += Ze(e.c.day), s;
}
function ed(e, t, n, i, s, r, a) {
  let o = !n || e.c.millisecond !== 0 || e.c.second !== 0, l = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (l += Ze(e.c.hour), a === "hour") break;
      if (t) {
        if (l += ":", l += Ze(e.c.minute), a === "minute") break;
        o && (l += ":", l += Ze(e.c.second));
      } else {
        if (l += Ze(e.c.minute), a === "minute") break;
        o && (l += Ze(e.c.second));
      }
      if (a === "second") break;
      o && (!i || e.c.millisecond !== 0) && (l += ".", l += Ze(e.c.millisecond, 3));
  }
  return s && (e.isOffsetFixed && e.offset === 0 && !r ? l += "Z" : e.o < 0 ? (l += "-", l += Ze(Math.trunc(-e.o / 60)), l += ":", l += Ze(Math.trunc(-e.o % 60))) : (l += "+", l += Ze(Math.trunc(e.o / 60)), l += ":", l += Ze(Math.trunc(e.o % 60)))), r && (l += "[" + e.zone.ianaName + "]"), l;
}
const y0 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, sg = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, rg = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Br = ["year", "month", "day", "hour", "minute", "second", "millisecond"], ag = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], og = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function _r(e) {
  const t = {
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
  }[e.toLowerCase()];
  if (!t) throw new yh(e);
  return t;
}
function td(e) {
  switch (e.toLowerCase()) {
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
      return _r(e);
  }
}
function lg(e) {
  if (Cs === void 0 && (Cs = We.now()), e.type !== "iana")
    return e.offset(Cs);
  const t = e.name;
  let n = Ll.get(t);
  return n === void 0 && (n = e.offset(Cs), Ll.set(t, n)), n;
}
function nd(e, t) {
  const n = Gn(t.zone, We.defaultZone);
  if (!n.isValid)
    return se.invalid(Ts(n));
  const i = $e.fromObject(t);
  let s, r;
  if (ae(e.year))
    s = We.now();
  else {
    for (const l of Br)
      ae(e[l]) && (e[l] = y0[l]);
    const a = Wh(e) || Uh(e);
    if (a)
      return se.invalid(a);
    const o = lg(n);
    [s, r] = Dr(e, o, n);
  }
  return new se({ ts: s, zone: n, loc: i, o: r });
}
function id(e, t, n) {
  const i = ae(n.round) ? !0 : n.round, s = ae(n.rounding) ? "trunc" : n.rounding, r = (o, l) => (o = ku(o, i || n.calendary ? 0 : 2, n.calendary ? "round" : s), t.loc.clone(n).relFormatter(n).format(o, l)), a = (o) => n.calendary ? t.hasSame(e, o) ? 0 : t.startOf(o).diff(e.startOf(o), o).get(o) : t.diff(e, o).get(o);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const o of n.units) {
    const l = a(o);
    if (Math.abs(l) >= 1)
      return r(l, o);
  }
  return r(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
function sd(e) {
  let t = {}, n;
  return e.length > 0 && typeof e[e.length - 1] == "object" ? (t = e[e.length - 1], n = Array.from(e).slice(0, e.length - 1)) : n = Array.from(e), [t, n];
}
let Cs;
const Ll = /* @__PURE__ */ new Map();
class se {
  /**
   * @access private
   */
  constructor(t) {
    const n = t.zone || We.defaultZone;
    let i = t.invalid || (Number.isNaN(t.ts) ? new Pt("invalid input") : null) || (n.isValid ? null : Ts(n));
    this.ts = ae(t.ts) ? We.now() : t.ts;
    let s = null, r = null;
    if (!i)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(n))
        [s, r] = [t.old.c, t.old.o];
      else {
        const o = Yn(t.o) && !t.old ? t.o : n.offset(this.ts);
        s = xr(this.ts, o), i = Number.isNaN(s.year) ? new Pt("invalid input") : null, s = i ? null : s, r = i ? null : o;
      }
    this._zone = n, this.loc = t.loc || $e.create(), this.invalid = i, this.weekData = null, this.localWeekData = null, this.c = s, this.o = r, this.isLuxonDateTime = !0;
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
    const [t, n] = sd(arguments), [i, s, r, a, o, l, u] = n;
    return nd({ year: i, month: s, day: r, hour: a, minute: o, second: l, millisecond: u }, t);
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
    const [t, n] = sd(arguments), [i, s, r, a, o, l, u] = n;
    return t.zone = bt.utcInstance, nd({ year: i, month: s, day: r, hour: a, minute: o, second: l, millisecond: u }, t);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(t, n = {}) {
    const i = zp(t) ? t.valueOf() : NaN;
    if (Number.isNaN(i))
      return se.invalid("invalid input");
    const s = Gn(n.zone, We.defaultZone);
    return s.isValid ? new se({
      ts: i,
      zone: s,
      loc: $e.fromObject(n)
    }) : se.invalid(Ts(s));
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
  static fromMillis(t, n = {}) {
    if (Yn(t))
      return t < -Kc || t > Kc ? se.invalid("Timestamp out of range") : new se({
        ts: t,
        zone: Gn(n.zone, We.defaultZone),
        loc: $e.fromObject(n)
      });
    throw new lt(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`
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
  static fromSeconds(t, n = {}) {
    if (Yn(t))
      return new se({
        ts: t * 1e3,
        zone: Gn(n.zone, We.defaultZone),
        loc: $e.fromObject(n)
      });
    throw new lt("fromSeconds requires a numerical input");
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
  static fromObject(t, n = {}) {
    t = t || {};
    const i = Gn(n.zone, We.defaultZone);
    if (!i.isValid)
      return se.invalid(Ts(i));
    const s = $e.fromObject(n), r = ea(t, td), { minDaysInFirstWeek: a, startOfWeek: o } = Pc(r, s), l = We.now(), u = ae(n.specificOffset) ? i.offset(l) : n.specificOffset, d = !ae(r.ordinal), f = !ae(r.year), m = !ae(r.month) || !ae(r.day), h = f || m, p = r.weekYear || r.weekNumber;
    if ((h || d) && p)
      throw new zi(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && d)
      throw new zi("Can't mix ordinal dates with month/day");
    const b = p || r.weekday && !h;
    let x, k, $ = xr(l, u);
    b ? (x = ag, k = sg, $ = Kr($, a, o)) : d ? (x = og, k = rg, $ = Fo($)) : (x = Br, k = y0);
    let S = !1;
    for (const W of x) {
      const Q = r[W];
      ae(Q) ? S ? r[W] = k[W] : r[W] = $[W] : S = !0;
    }
    const R = b ? Np(r, a, o) : d ? Vp(r) : Wh(r), w = R || Uh(r);
    if (w)
      return se.invalid(w);
    const I = b ? Rc(r, a, o) : d ? zc(r) : r, [U, F] = Dr(I, u, i), L = new se({
      ts: U,
      zone: i,
      o: F,
      loc: s
    });
    return r.weekday && h && t.weekday !== L.weekday ? se.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${L.toISO()}`
    ) : L.isValid ? L : se.invalid(L.invalid);
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
  static fromISO(t, n = {}) {
    const [i, s] = $2(t);
    return _i(i, s, n, "ISO 8601", t);
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
  static fromRFC2822(t, n = {}) {
    const [i, s] = A2(t);
    return _i(i, s, n, "RFC 2822", t);
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
  static fromHTTP(t, n = {}) {
    const [i, s] = F2(t);
    return _i(i, s, n, "HTTP", n);
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
  static fromFormat(t, n, i = {}) {
    if (ae(t) || ae(n))
      throw new lt("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: r = null } = i, a = $e.fromOpts({
      locale: s,
      numberingSystem: r,
      defaultToEN: !0
    }), [o, l, u, d] = ig(a, t, n);
    return d ? se.invalid(d) : _i(o, l, i, `format ${n}`, t, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(t, n, i = {}) {
    return se.fromFormat(t, n, i);
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
  static fromSQL(t, n = {}) {
    const [i, s] = V2(t);
    return _i(i, s, n, "SQL", t);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(t, n = null) {
    if (!t)
      throw new lt("need to specify a reason the DateTime is invalid");
    const i = t instanceof Pt ? t : new Pt(t, n);
    if (We.throwOnInvalid)
      throw new dp(i);
    return new se({ invalid: i });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(t) {
    return t && t.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(t, n = {}) {
    const i = p0(t, $e.fromObject(n));
    return i ? i.map((s) => s ? s.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(t, n = {}) {
    return f0(dt.parseFormat(t), $e.fromObject(n)).map((s) => s.val).join("");
  }
  static resetCache() {
    Cs = void 0, Ll.clear();
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(t) {
    return this[t];
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
    return this.isValid ? Do(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Do(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Do(this).weekday : NaN;
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
    return this.isValid ? Bo(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Bo(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Bo(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Fo(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? kr.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? kr.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? kr.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? kr.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const t = 864e5, n = 6e4, i = Oa(this.c), s = this.zone.offset(i - t), r = this.zone.offset(i + t), a = this.zone.offset(i - s * n), o = this.zone.offset(i - r * n);
    if (a === o)
      return [this];
    const l = i - a * n, u = i - o * n, d = xr(l, a), f = xr(u, o);
    return d.hour === f.hour && d.minute === f.minute && d.second === f.second && d.millisecond === f.millisecond ? [ci(this, { ts: l }), ci(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return tr(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Qr(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Gi(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? js(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? js(
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
  resolvedLocaleOptions(t = {}) {
    const { locale: n, numberingSystem: i, calendar: s } = dt.create(
      this.loc.clone(t),
      t
    ).resolvedOptions(this);
    return { locale: n, numberingSystem: i, outputCalendar: s };
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
  toUTC(t = 0, n = {}) {
    return this.setZone(bt.instance(t), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(We.defaultZone);
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
  setZone(t, { keepLocalTime: n = !1, keepCalendarTime: i = !1 } = {}) {
    if (t = Gn(t, We.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let s = this.ts;
      if (n || i) {
        const r = t.offset(this.ts), a = this.toObject();
        [s] = Dr(a, r, t);
      }
      return ci(this, { ts: s, zone: t });
    } else
      return se.invalid(Ts(t));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: t, numberingSystem: n, outputCalendar: i } = {}) {
    const s = this.loc.clone({ locale: t, numberingSystem: n, outputCalendar: i });
    return ci(this, { loc: s });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(t) {
    return this.reconfigure({ locale: t });
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
  set(t) {
    if (!this.isValid) return this;
    const n = ea(t, td), { minDaysInFirstWeek: i, startOfWeek: s } = Pc(n, this.loc), r = !ae(n.weekYear) || !ae(n.weekNumber) || !ae(n.weekday), a = !ae(n.ordinal), o = !ae(n.year), l = !ae(n.month) || !ae(n.day), u = o || l, d = n.weekYear || n.weekNumber;
    if ((u || a) && d)
      throw new zi(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new zi("Can't mix ordinal dates with month/day");
    let f;
    r ? f = Rc(
      { ...Kr(this.c, i, s), ...n },
      i,
      s
    ) : ae(n.ordinal) ? (f = { ...this.toObject(), ...n }, ae(n.day) && (f.day = Math.min(Qr(f.year, f.month), f.day))) : f = zc({ ...Fo(this.c), ...n });
    const [m, h] = Dr(f, this.o, this.zone);
    return ci(this, { ts: m, o: h });
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
  plus(t) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(t);
    return ci(this, Qc(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(t) {
    if (!this.isValid) return this;
    const n = Se.fromDurationLike(t).negate();
    return ci(this, Qc(this, n));
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
  startOf(t, { useLocaleWeeks: n = !1 } = {}) {
    if (!this.isValid) return this;
    const i = {}, s = Se.normalizeUnit(t);
    switch (s) {
      case "years":
        i.month = 1;
      // falls through
      case "quarters":
      case "months":
        i.day = 1;
      // falls through
      case "weeks":
      case "days":
        i.hour = 0;
      // falls through
      case "hours":
        i.minute = 0;
      // falls through
      case "minutes":
        i.second = 0;
      // falls through
      case "seconds":
        i.millisecond = 0;
        break;
    }
    if (s === "weeks")
      if (n) {
        const r = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < r && (i.weekNumber = this.weekNumber - 1), i.weekday = r;
      } else
        i.weekday = 1;
    if (s === "quarters") {
      const r = Math.ceil(this.month / 3);
      i.month = (r - 1) * 3 + 1;
    }
    return this.set(i);
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
  endOf(t, n) {
    return this.isValid ? this.plus({ [t]: 1 }).startOf(t, n).minus(1) : this;
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
  toFormat(t, n = {}) {
    return this.isValid ? dt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : Oo;
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
  toLocaleString(t = Xr, n = {}) {
    return this.isValid ? dt.create(this.loc.clone(n), t).formatDateTime(this) : Oo;
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
  toLocaleParts(t = {}) {
    return this.isValid ? dt.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
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
    format: t = "extended",
    suppressSeconds: n = !1,
    suppressMilliseconds: i = !1,
    includeOffset: s = !0,
    extendedZone: r = !1,
    precision: a = "milliseconds"
  } = {}) {
    if (!this.isValid)
      return null;
    a = _r(a);
    const o = t === "extended";
    let l = _o(this, o, a);
    return Br.indexOf(a) >= 3 && (l += "T"), l += ed(
      this,
      o,
      n,
      i,
      s,
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
  toISODate({ format: t = "extended", precision: n = "day" } = {}) {
    return this.isValid ? _o(this, t === "extended", _r(n)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Sr(this, "kkkk-'W'WW-c");
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
    suppressMilliseconds: t = !1,
    suppressSeconds: n = !1,
    includeOffset: i = !0,
    includePrefix: s = !1,
    extendedZone: r = !1,
    format: a = "extended",
    precision: o = "milliseconds"
  } = {}) {
    return this.isValid ? (o = _r(o), (s && Br.indexOf(o) >= 3 ? "T" : "") + ed(
      this,
      a === "extended",
      n,
      t,
      i,
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
    return Sr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Sr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? _o(this, !0) : null;
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
  toSQLTime({ includeOffset: t = !0, includeZone: n = !1, includeOffsetSpace: i = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (n || t) && (i && (s += " "), n ? s += "z" : t && (s += "ZZ")), Sr(this, s, !0);
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
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : Oo;
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
  toObject(t = {}) {
    if (!this.isValid) return {};
    const n = { ...this.c };
    return t.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
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
  diff(t, n = "milliseconds", i = {}) {
    if (!this.isValid || !t.isValid)
      return Se.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...i }, r = Pp(n).map(Se.normalizeUnit), a = t.valueOf() > this.valueOf(), o = a ? this : t, l = a ? t : this, u = U2(o, l, r, s);
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
  diffNow(t = "milliseconds", n = {}) {
    return this.diff(se.now(), t, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(t) {
    return this.isValid ? He.fromDateTimes(this, t) : this;
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
  hasSame(t, n, i) {
    if (!this.isValid) return !1;
    const s = t.valueOf(), r = this.setZone(t.zone, { keepLocalTime: !0 });
    return r.startOf(n, i) <= s && s <= r.endOf(n, i);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(t) {
    return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
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
  toRelative(t = {}) {
    if (!this.isValid) return null;
    const n = t.base || se.fromObject({}, { zone: this.zone }), i = t.padding ? this < n ? -t.padding : t.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], r = t.unit;
    return Array.isArray(t.unit) && (s = t.unit, r = void 0), id(n, this.plus(i), {
      ...t,
      numeric: "always",
      units: s,
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
  toRelativeCalendar(t = {}) {
    return this.isValid ? id(t.base || se.fromObject({}, { zone: this.zone }), this, {
      ...t,
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
  static min(...t) {
    if (!t.every(se.isDateTime))
      throw new lt("min requires all arguments be DateTimes");
    return Hc(t, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...t) {
    if (!t.every(se.isDateTime))
      throw new lt("max requires all arguments be DateTimes");
    return Hc(t, (n) => n.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(t, n, i = {}) {
    const { locale: s = null, numberingSystem: r = null } = i, a = $e.fromOpts({
      locale: s,
      numberingSystem: r,
      defaultToEN: !0
    });
    return m0(a, t, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(t, n, i = {}) {
    return se.fromFormatExplain(t, n, i);
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
  static buildFormatParser(t, n = {}) {
    const { locale: i = null, numberingSystem: s = null } = n, r = $e.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return new h0(r, t);
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
  static fromFormatParser(t, n, i = {}) {
    if (ae(t) || ae(n))
      throw new lt(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: s = null, numberingSystem: r = null } = i, a = $e.fromOpts({
      locale: s,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new lt(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: o, zone: l, specificOffset: u, invalidReason: d } = n.explainFromTokens(t);
    return d ? se.invalid(d) : _i(
      o,
      l,
      i,
      `format ${n.format}`,
      t,
      u
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Xr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return vh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return mp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return bh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return kh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return wh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return xh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Sh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Ih;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Th;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Ch;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Mh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Eh;
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
    return Ah;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Fh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Lh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return pp;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Oh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Dh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Bh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return _h;
  }
}
function bs(e) {
  if (se.isDateTime(e))
    return e;
  if (e && e.valueOf && Yn(e.valueOf()))
    return se.fromJSDate(e);
  if (e && typeof e == "object")
    return se.fromObject(e);
  throw new lt(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
function ug(e) {
  let t = {};
  do {
    if (e.name === "") break;
    for (let [n, i] of Object.entries(Object.getOwnPropertyDescriptors(e.prototype))) ["constructor", "clone", "toJSON"].includes(n) || !i.get && !i.set || (t[n] = i);
  } while (e = Object.getPrototypeOf(e));
  return t;
}
function ns(e) {
  return globalThis.document ? e instanceof HTMLElement : !1;
}
function No(e, t, n) {
  e.prototype[t] = n;
}
function Ir(e, t, n) {
  Object.defineProperty(e, t, { value: n });
}
function cg(e, t, n, i) {
  const s = Me(() => {
    const o = c(e);
    return Array.isArray(o) ? o : [o];
  }), r = Me(() => {
    const o = [], l = c(i)?.trim().toLowerCase(), u = c(n).filter((d) => !("value" in d) || !l || d.label.toLowerCase().includes(l)).filter((d) => !("value" in d) || !t || !c(a).find((f) => f.value === d.value));
    if (u.length === 0)
      return [];
    if (!u.find(jl))
      return [[null, u]];
    for (let d = 0; d < u.length; ) {
      const f = u[d];
      if (Ns(f)) {
        ++d, o.push([null, [f]]);
        continue;
      }
      const m = [];
      for (++d; d <= u.length; ++d) {
        const h = u[d];
        if (jl(h) || d === u.length) {
          m.length > 0 && o.push([f, m]);
          break;
        }
        m.push(h);
      }
    }
    return o;
  }), a = Me(() => c(s).map((o) => c(n).find((l) => Ns(l) && l.value === o)).filter(Ns));
  return {
    groups: r,
    selected: a,
    values: s
  };
}
const dg = (e, t) => {
  if (!(e in Vd))
    return e;
  let n = Vd[e];
  for (let i in t)
    n = n.replaceAll(`{${i}}`, t[i].toString());
  return n;
};
var sr = () => {
  const e = cn()?.proxy;
  return !e || !fg(e) ? dg : e.$t;
};
function fg(e) {
  return !!e && "$t" in e;
}
const v0 = (e, t) => {
  if (typeof e == "number") {
    if (t === 3)
      return {
        mode: "rgb",
        r: (e >> 8 & 15 | e >> 4 & 240) / 255,
        g: (e >> 4 & 15 | e & 240) / 255,
        b: (e & 15 | e << 4 & 240) / 255
      };
    if (t === 4)
      return {
        mode: "rgb",
        r: (e >> 12 & 15 | e >> 8 & 240) / 255,
        g: (e >> 8 & 15 | e >> 4 & 240) / 255,
        b: (e >> 4 & 15 | e & 240) / 255,
        alpha: (e & 15 | e << 4 & 240) / 255
      };
    if (t === 6)
      return {
        mode: "rgb",
        r: (e >> 16 & 255) / 255,
        g: (e >> 8 & 255) / 255,
        b: (e & 255) / 255
      };
    if (t === 8)
      return {
        mode: "rgb",
        r: (e >> 24 & 255) / 255,
        g: (e >> 16 & 255) / 255,
        b: (e >> 8 & 255) / 255,
        alpha: (e & 255) / 255
      };
  }
}, hg = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  // Added in CSS Colors Level 4:
  // https://drafts.csswg.org/css-color/#changes-from-3
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, mg = (e) => v0(hg[e.toLowerCase()], 6), pg = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, gg = (e) => {
  let t;
  return (t = e.match(pg)) ? v0(parseInt(t[1], 16), t[1].length) : void 0;
}, Jn = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Bs = `${Jn}%`, Iu = `(?:${Jn}%|${Jn})`, yg = `(?:${Jn}(deg|grad|rad|turn)|${Jn})`, is = "\\s*,\\s*", vg = new RegExp(
  `^rgba?\\(\\s*${Jn}${is}${Jn}${is}${Jn}\\s*(?:,\\s*${Iu}\\s*)?\\)$`
), bg = new RegExp(
  `^rgba?\\(\\s*${Bs}${is}${Bs}${is}${Bs}\\s*(?:,\\s*${Iu}\\s*)?\\)$`
), kg = (e) => {
  let t = { mode: "rgb" }, n;
  if (n = e.match(vg))
    n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
  else if (n = e.match(bg))
    n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
  else
    return;
  return n[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, n[4] / 100)) : n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))), t;
}, wg = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? Lg(e) : e.mode !== void 0 ? e : t ? { ...e, mode: t } : void 0, xg = (e = "rgb") => (t) => (t = wg(t, e)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  t.mode === e ? (
    // then just return the color
    t
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    sn[t.mode][e] ? (
      // and return its result...
      sn[t.mode][e](t)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      e === "rgb" ? (
        // just return the RGB
        sn[t.mode].rgb(t)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        sn.rgb[e](sn[t.mode].rgb(t))
      )
    )
  )
) : void 0, sn = {}, b0 = {}, ta = [], k0 = {}, Sg = (e) => e, Fe = (e) => (sn[e.mode] = {
  ...sn[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
  sn[t] || (sn[t] = {}), sn[t][e.mode] = e.fromMode[t];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
  if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t])
    throw new Error(`Missing interpolator for: ${t}`);
  typeof e.interpolate[t] == "function" && (e.interpolate[t] = {
    use: e.interpolate[t]
  }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Sg);
}), b0[e.mode] = e, (e.parse || []).forEach((t) => {
  Tg(t, e.mode);
}), xg(e.mode)), Ig = (e) => b0[e], Tg = (e, t) => {
  if (typeof e == "string") {
    if (!t)
      throw new Error("'mode' required when 'parser' is a string");
    k0[e] = t;
  } else typeof e == "function" && ta.indexOf(e) < 0 && ta.push(e);
}, Ol = /[^\x00-\x7F]|[a-zA-Z_]/, Cg = /[^\x00-\x7F]|[-\w]/, H = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let re = 0;
function Tr(e) {
  let t = e[re], n = e[re + 1];
  return t === "-" || t === "+" ? /\d/.test(n) || n === "." && /\d/.test(e[re + 2]) : t === "." ? /\d/.test(n) : /\d/.test(t);
}
function Dl(e) {
  if (re >= e.length)
    return !1;
  let t = e[re];
  if (Ol.test(t))
    return !0;
  if (t === "-") {
    if (e.length - re < 2)
      return !1;
    let n = e[re + 1];
    return !!(n === "-" || Ol.test(n));
  }
  return !1;
}
const Mg = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ks(e) {
  let t = "";
  if ((e[re] === "-" || e[re] === "+") && (t += e[re++]), t += Cr(e), e[re] === "." && /\d/.test(e[re + 1]) && (t += e[re++] + Cr(e)), (e[re] === "e" || e[re] === "E") && ((e[re + 1] === "-" || e[re + 1] === "+") && /\d/.test(e[re + 2]) ? t += e[re++] + e[re++] + Cr(e) : /\d/.test(e[re + 1]) && (t += e[re++] + Cr(e))), Dl(e)) {
    let n = na(e);
    return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? { type: H.Hue, value: t * Mg[n] } : void 0;
  }
  return e[re] === "%" ? (re++, { type: H.Percentage, value: +t }) : { type: H.Number, value: +t };
}
function Cr(e) {
  let t = "";
  for (; /\d/.test(e[re]); )
    t += e[re++];
  return t;
}
function na(e) {
  let t = "";
  for (; re < e.length && Cg.test(e[re]); )
    t += e[re++];
  return t;
}
function Eg(e) {
  let t = na(e);
  return e[re] === "(" ? (re++, { type: H.Function, value: t }) : t === "none" ? { type: H.None, value: void 0 } : { type: H.Ident, value: t };
}
function $g(e = "") {
  let t = e.trim(), n = [], i;
  for (re = 0; re < t.length; ) {
    if (i = t[re++], i === `
` || i === "	" || i === " ") {
      for (; re < t.length && (t[re] === `
` || t[re] === "	" || t[re] === " "); )
        re++;
      continue;
    }
    if (i === ",")
      return;
    if (i === ")") {
      n.push({ type: H.ParenClose });
      continue;
    }
    if (i === "+") {
      if (re--, Tr(t)) {
        n.push(ks(t));
        continue;
      }
      return;
    }
    if (i === "-") {
      if (re--, Tr(t)) {
        n.push(ks(t));
        continue;
      }
      if (Dl(t)) {
        n.push({ type: H.Ident, value: na(t) });
        continue;
      }
      return;
    }
    if (i === ".") {
      if (re--, Tr(t)) {
        n.push(ks(t));
        continue;
      }
      return;
    }
    if (i === "/") {
      for (; re < t.length && (t[re] === `
` || t[re] === "	" || t[re] === " "); )
        re++;
      let s;
      if (Tr(t) && (s = ks(t), s.type !== H.Hue)) {
        n.push({ type: H.Alpha, value: s });
        continue;
      }
      if (Dl(t) && na(t) === "none") {
        n.push({
          type: H.Alpha,
          value: { type: H.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(i)) {
      re--, n.push(ks(t));
      continue;
    }
    if (Ol.test(i)) {
      re--, n.push(Eg(t));
      continue;
    }
    return;
  }
  return n;
}
function Ag(e) {
  e._i = 0;
  let t = e[e._i++];
  if (!t || t.type !== H.Function || t.value !== "color" || (t = e[e._i++], t.type !== H.Ident))
    return;
  const n = k0[t.value];
  if (!n)
    return;
  const i = { mode: n }, s = w0(e, !1);
  if (!s)
    return;
  const r = Ig(n).channels;
  for (let a = 0, o, l; a < r.length; a++)
    o = s[a], l = r[a], o.type !== H.None && (i[l] = o.type === H.Number ? o.value : o.value / 100, l === "alpha" && (i[l] = Math.max(0, Math.min(1, i[l]))));
  return i;
}
function w0(e, t) {
  const n = [];
  let i;
  for (; e._i < e.length; ) {
    if (i = e[e._i++], i.type === H.None || i.type === H.Number || i.type === H.Alpha || i.type === H.Percentage || t && i.type === H.Hue) {
      n.push(i);
      continue;
    }
    if (i.type === H.ParenClose) {
      if (e._i < e.length)
        return;
      continue;
    }
    return;
  }
  if (!(n.length < 3 || n.length > 4)) {
    if (n.length === 4) {
      if (n[3].type !== H.Alpha)
        return;
      n[3] = n[3].value;
    }
    return n.length === 3 && n.push({ type: H.None, value: void 0 }), n.every((s) => s.type !== H.Alpha) ? n : void 0;
  }
}
function Fg(e, t) {
  e._i = 0;
  let n = e[e._i++];
  if (!n || n.type !== H.Function)
    return;
  let i = w0(e, t);
  if (i)
    return i.unshift(n.value), i;
}
const Lg = (e) => {
  if (typeof e != "string")
    return;
  const t = $g(e), n = t ? Fg(t, !0) : void 0;
  let i, s = 0, r = ta.length;
  for (; s < r; )
    if ((i = ta[s++](e, n)) !== void 0)
      return i;
  return t ? Ag(t) : void 0;
};
function Og(e, t) {
  if (!t || t[0] !== "rgb" && t[0] !== "rgba")
    return;
  const n = { mode: "rgb" }, [, i, s, r, a] = t;
  if (!(i.type === H.Hue || s.type === H.Hue || r.type === H.Hue))
    return i.type !== H.None && (n.r = i.type === H.Number ? i.value / 255 : i.value / 100), s.type !== H.None && (n.g = s.type === H.Number ? s.value / 255 : s.value / 100), r.type !== H.None && (n.b = r.type === H.Number ? r.value / 255 : r.value / 100), a.type !== H.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        a.type === H.Number ? a.value : a.value / 100
      )
    )), n;
}
const Dg = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, Bg = (e, t, n) => e + n * (t - e), _g = (e) => {
  let t = [];
  for (let n = 0; n < e.length - 1; n++) {
    let i = e[n], s = e[n + 1];
    i === void 0 && s === void 0 ? t.push(void 0) : i !== void 0 && s !== void 0 ? t.push([i, s]) : t.push(i !== void 0 ? [i, i] : [s, s]);
  }
  return t;
}, Ng = (e) => (t) => {
  let n = _g(t);
  return (i) => {
    let s = i * n.length, r = i >= 1 ? n.length - 1 : Math.max(Math.floor(s), 0), a = n[r];
    return a === void 0 ? void 0 : e(a[0], a[1], s - r);
  };
}, Z = Ng(Bg), Xe = (e) => {
  let t = !1, n = e.map((i) => i !== void 0 ? (t = !0, i) : 1);
  return t ? n : e;
}, cs = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    Og,
    gg,
    kg,
    mg,
    Dg,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: Z,
    g: Z,
    b: Z,
    alpha: { use: Z, fixup: Xe }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, Vo = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), rd = (e) => {
  let t = Vo(e.r), n = Vo(e.g), i = Vo(e.b), s = {
    mode: "xyz65",
    x: 0.5766690429101305 * t + 0.1855582379065463 * n + 0.1882286462349947 * i,
    y: 0.297344975250536 * t + 0.6273635662554661 * n + 0.0752914584939979 * i,
    z: 0.0270313613864123 * t + 0.0706888525358272 * n + 0.9913375368376386 * i
  };
  return e.alpha !== void 0 && (s.alpha = e.alpha), s;
}, Ro = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), ad = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = {
    mode: "a98",
    r: Ro(
      e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * n
    ),
    g: Ro(
      e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * n
    ),
    b: Ro(
      e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * n
    )
  };
  return i !== void 0 && (s.alpha = i), s;
}, zo = (e = 0) => {
  const t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
}, ds = ({ r: e, g: t, b: n, alpha: i }) => {
  let s = {
    mode: "lrgb",
    r: zo(e),
    g: zo(t),
    b: zo(n)
  };
  return i !== void 0 && (s.alpha = i), s;
}, Ei = (e) => {
  let { r: t, g: n, b: i, alpha: s } = ds(e), r = {
    mode: "xyz65",
    x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * i,
    y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * i,
    z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * i
  };
  return s !== void 0 && (r.alpha = s), r;
}, Po = (e = 0) => {
  const t = Math.abs(e);
  return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
}, fs = ({ r: e, g: t, b: n, alpha: i }, s = "rgb") => {
  let r = {
    mode: s,
    r: Po(e),
    g: Po(t),
    b: Po(n)
  };
  return i !== void 0 && (r.alpha = i), r;
}, $i = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = fs({
    r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
    g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
    b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n
  });
  return i !== void 0 && (s.alpha = i), s;
}, Vg = {
  ...cs,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (e) => ad(Ei(e)),
    xyz65: ad
  },
  toMode: {
    rgb: (e) => $i(rd(e)),
    xyz65: rd
  }
}, at = (e) => (e = e % 360) < 0 ? e + 360 : e, Rg = (e, t) => e.map((n, i, s) => {
  if (n === void 0)
    return n;
  let r = at(n);
  return i === 0 || e[i - 1] === void 0 ? r : t(r - at(s[i - 1]));
}).reduce((n, i) => !n.length || i === void 0 || n[n.length - 1] === void 0 ? (n.push(i), n) : (n.push(i + n[n.length - 1]), n), []), An = (e) => Rg(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), Qe = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], zg = Math.PI / 180, Pg = 180 / Math.PI;
let od = Qe[3] * Qe[4], ld = Qe[1] * Qe[4], ud = Qe[1] * Qe[2] - Qe[0] * Qe[3];
const Hg = ({ r: e, g: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = (ud * n + e * od - t * ld) / (ud + od - ld), r = n - s, a = (Qe[4] * (t - s) - Qe[2] * r) / Qe[3], o = {
    mode: "cubehelix",
    l: s,
    s: s === 0 || s === 1 ? void 0 : Math.sqrt(r * r + a * a) / (Qe[4] * s * (1 - s))
  };
  return o.s && (o.h = Math.atan2(a, r) * Pg - 120), i !== void 0 && (o.alpha = i), o;
}, Wg = ({ h: e, s: t, l: n, alpha: i }) => {
  let s = { mode: "rgb" };
  e = (e === void 0 ? 0 : e + 120) * zg, n === void 0 && (n = 0);
  let r = t === void 0 ? 0 : t * n * (1 - n), a = Math.cos(e), o = Math.sin(e);
  return s.r = n + r * (Qe[0] * a + Qe[1] * o), s.g = n + r * (Qe[2] * a + Qe[3] * o), s.b = n + r * (Qe[4] * a + Qe[5] * o), i !== void 0 && (s.alpha = i), s;
}, _a = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.s || !t.s)
    return 0;
  let n = at(e.h), i = at(t.h), s = Math.sin((i - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.s * t.s) * s;
}, Ug = (e, t) => {
  if (e.h === void 0 || t.h === void 0)
    return 0;
  let n = at(e.h), i = at(t.h);
  return Math.abs(i - n) > 180 ? n - (i - 360 * Math.sign(i - n)) : i - n;
}, Na = (e, t) => {
  if (e.h === void 0 || t.h === void 0 || !e.c || !t.c)
    return 0;
  let n = at(e.h), i = at(t.h), s = Math.sin((i - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(e.c * t.c) * s;
}, Fn = (e) => {
  let t = e.reduce(
    (i, s) => {
      if (s !== void 0) {
        let r = s * Math.PI / 180;
        i.sin += Math.sin(r), i.cos += Math.cos(r);
      }
      return i;
    },
    { sin: 0, cos: 0 }
  ), n = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
  return n < 0 ? 360 + n : n;
}, qg = {
  mode: "cubehelix",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--cubehelix"],
  serialize: "--cubehelix",
  ranges: {
    h: [0, 360],
    s: [0, 4.614],
    l: [0, 1]
  },
  fromMode: {
    rgb: Hg
  },
  toMode: {
    rgb: Wg
  },
  interpolate: {
    h: {
      use: Z,
      fixup: An
    },
    s: Z,
    l: Z,
    alpha: {
      use: Z,
      fixup: Xe
    }
  },
  difference: {
    h: _a
  },
  average: {
    h: Fn
  }
}, ei = ({ l: e, a: t, b: n, alpha: i }, s = "lch") => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let r = Math.sqrt(t * t + n * n), a = { mode: s, l: e, c: r };
  return r && (a.h = at(Math.atan2(n, t) * 180 / Math.PI)), i !== void 0 && (a.alpha = i), a;
}, ti = ({ l: e, c: t, h: n, alpha: i }, s = "lab") => {
  n === void 0 && (n = 0);
  let r = {
    mode: s,
    l: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return i !== void 0 && (r.alpha = i), r;
}, x0 = Math.pow(29, 3) / Math.pow(3, 3), S0 = Math.pow(6, 3) / Math.pow(29, 3), Ye = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, Yi = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let Ho = (e) => Math.pow(e, 3) > S0 ? Math.pow(e, 3) : (116 * e - 16) / x0;
const I0 = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = (e + 16) / 116, r = t / 500 + s, a = s - n / 200, o = {
    mode: "xyz65",
    x: Ho(r) * Yi.X,
    y: Ho(s) * Yi.Y,
    z: Ho(a) * Yi.Z
  };
  return i !== void 0 && (o.alpha = i), o;
}, Va = (e) => $i(I0(e)), Wo = (e) => e > S0 ? Math.cbrt(e) : (x0 * e + 16) / 116, T0 = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Wo(e / Yi.X), r = Wo(t / Yi.Y), a = Wo(n / Yi.Z), o = {
    mode: "lab65",
    l: 116 * r - 16,
    a: 500 * (s - r),
    b: 200 * (r - a)
  };
  return i !== void 0 && (o.alpha = i), o;
}, Ra = (e) => {
  let t = T0(Ei(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ia = 1, C0 = 1, Gs = 26 / 180 * Math.PI, sa = Math.cos(Gs), ra = Math.sin(Gs), M0 = 100 / Math.log(139 / 100), Bl = ({ l: e, c: t, h: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = {
    mode: "lab65",
    l: (Math.exp(e * ia / M0) - 1) / 39e-4
  }, r = (Math.exp(0.0435 * t * C0 * ia) - 1) / 0.075, a = r * Math.cos(n / 180 * Math.PI - Gs), o = r * Math.sin(n / 180 * Math.PI - Gs);
  return s.a = a * sa - o / 0.83 * ra, s.b = a * ra + o / 0.83 * sa, i !== void 0 && (s.alpha = i), s;
}, _l = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = t * sa + n * ra, r = 0.83 * (n * sa - t * ra), a = Math.sqrt(s * s + r * r), o = {
    mode: "dlch",
    l: M0 / ia * Math.log(1 + 39e-4 * e),
    c: Math.log(1 + 0.075 * a) / (0.0435 * C0 * ia)
  };
  return o.c && (o.h = at((Math.atan2(r, s) + Gs) / Math.PI * 180)), i !== void 0 && (o.alpha = i), o;
}, cd = (e) => Bl(ei(e, "dlch")), dd = (e) => ti(_l(e), "dlab"), jg = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: cd,
    rgb: (e) => Va(cd(e))
  },
  fromMode: {
    lab65: dd,
    rgb: (e) => dd(Ra(e))
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: Z,
    a: Z,
    b: Z,
    alpha: {
      use: Z,
      fixup: Xe
    }
  }
}, Gg = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: Bl,
    dlab: (e) => ti(e, "dlab"),
    rgb: (e) => Va(Bl(e))
  },
  fromMode: {
    lab65: _l,
    dlab: (e) => ei(e, "dlch"),
    rgb: (e) => _l(Ra(e))
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: Z,
    c: Z,
    h: {
      use: Z,
      fixup: An
    },
    alpha: {
      use: Z,
      fixup: Xe
    }
  },
  difference: {
    h: Na
  },
  average: {
    h: Fn
  }
};
function Zg({ h: e, s: t, i: n, alpha: i }) {
  e = at(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.abs(e / 60 % 2 - 1), r;
  switch (Math.floor(e / 60)) {
    case 0:
      r = {
        r: n * (1 + t * (3 / (2 - s) - 1)),
        g: n * (1 + t * (3 * (1 - s) / (2 - s) - 1)),
        b: n * (1 - t)
      };
      break;
    case 1:
      r = {
        r: n * (1 + t * (3 * (1 - s) / (2 - s) - 1)),
        g: n * (1 + t * (3 / (2 - s) - 1)),
        b: n * (1 - t)
      };
      break;
    case 2:
      r = {
        r: n * (1 - t),
        g: n * (1 + t * (3 / (2 - s) - 1)),
        b: n * (1 + t * (3 * (1 - s) / (2 - s) - 1))
      };
      break;
    case 3:
      r = {
        r: n * (1 - t),
        g: n * (1 + t * (3 * (1 - s) / (2 - s) - 1)),
        b: n * (1 + t * (3 / (2 - s) - 1))
      };
      break;
    case 4:
      r = {
        r: n * (1 + t * (3 * (1 - s) / (2 - s) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 / (2 - s) - 1))
      };
      break;
    case 5:
      r = {
        r: n * (1 + t * (3 / (2 - s) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 * (1 - s) / (2 - s) - 1))
      };
      break;
    default:
      r = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return r.mode = "rgb", i !== void 0 && (r.alpha = i), r;
}
function Yg({ r: e, g: t, b: n, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.max(e, t, n), r = Math.min(e, t, n), a = {
    mode: "hsi",
    s: e + t + n === 0 ? 0 : 1 - 3 * r / (e + t + n),
    i: (e + t + n) / 3
  };
  return s - r !== 0 && (a.h = (s === e ? (t - n) / (s - r) + (t < n) * 6 : s === t ? (n - e) / (s - r) + 2 : (e - t) / (s - r) + 4) * 60), i !== void 0 && (a.alpha = i), a;
}
const Jg = {
  mode: "hsi",
  toMode: {
    rgb: Zg
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Yg
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: Z, fixup: An },
    s: Z,
    i: Z,
    alpha: { use: Z, fixup: Xe }
  },
  difference: {
    h: _a
  },
  average: {
    h: Fn
  }
};
function Xg({ h: e, s: t, l: n, alpha: i }) {
  e = at(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = n + t * (n < 0.5 ? n : 1 - n), r = s - (s - n) * 2 * Math.abs(e / 60 % 2 - 1), a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = { r: s, g: r, b: 2 * n - s };
      break;
    case 1:
      a = { r, g: s, b: 2 * n - s };
      break;
    case 2:
      a = { r: 2 * n - s, g: s, b: r };
      break;
    case 3:
      a = { r: 2 * n - s, g: r, b: s };
      break;
    case 4:
      a = { r, g: 2 * n - s, b: s };
      break;
    case 5:
      a = { r: s, g: 2 * n - s, b: r };
      break;
    default:
      a = { r: 2 * n - s, g: 2 * n - s, b: 2 * n - s };
  }
  return a.mode = "rgb", i !== void 0 && (a.alpha = i), a;
}
function Kg({ r: e, g: t, b: n, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.max(e, t, n), r = Math.min(e, t, n), a = {
    mode: "hsl",
    s: s === r ? 0 : (s - r) / (1 - Math.abs(s + r - 1)),
    l: 0.5 * (s + r)
  };
  return s - r !== 0 && (a.h = (s === e ? (t - n) / (s - r) + (t < n) * 6 : s === t ? (n - e) / (s - r) + 2 : (e - t) / (s - r) + 4) * 60), i !== void 0 && (a.alpha = i), a;
}
const Qg = (e, t) => {
  switch (t) {
    case "deg":
      return +e;
    case "rad":
      return e / Math.PI * 180;
    case "grad":
      return e / 10 * 9;
    case "turn":
      return e * 360;
  }
}, ey = new RegExp(
  `^hsla?\\(\\s*${yg}${is}${Bs}${is}${Bs}\\s*(?:,\\s*${Iu}\\s*)?\\)$`
), ty = (e) => {
  let t = e.match(ey);
  if (!t) return;
  let n = { mode: "hsl" };
  return t[3] !== void 0 ? n.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (n.h = Qg(t[1], t[2])), t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? n.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))), n;
};
function ny(e, t) {
  if (!t || t[0] !== "hsl" && t[0] !== "hsla")
    return;
  const n = { mode: "hsl" }, [, i, s, r, a] = t;
  if (i.type !== H.None) {
    if (i.type === H.Percentage)
      return;
    n.h = i.value;
  }
  if (s.type !== H.None) {
    if (s.type === H.Hue)
      return;
    n.s = s.value / 100;
  }
  if (r.type !== H.None) {
    if (r.type === H.Hue)
      return;
    n.l = r.value / 100;
  }
  return a.type !== H.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === H.Number ? a.value : a.value / 100
    )
  )), n;
}
const E0 = {
  mode: "hsl",
  toMode: {
    rgb: Xg
  },
  fromMode: {
    rgb: Kg
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [ny, ty],
  serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: Z, fixup: An },
    s: Z,
    l: Z,
    alpha: { use: Z, fixup: Xe }
  },
  difference: {
    h: _a
  },
  average: {
    h: Fn
  }
};
function $0({ h: e, s: t, v: n, alpha: i }) {
  e = at(e !== void 0 ? e : 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.abs(e / 60 % 2 - 1), r;
  switch (Math.floor(e / 60)) {
    case 0:
      r = { r: n, g: n * (1 - t * s), b: n * (1 - t) };
      break;
    case 1:
      r = { r: n * (1 - t * s), g: n, b: n * (1 - t) };
      break;
    case 2:
      r = { r: n * (1 - t), g: n, b: n * (1 - t * s) };
      break;
    case 3:
      r = { r: n * (1 - t), g: n * (1 - t * s), b: n };
      break;
    case 4:
      r = { r: n * (1 - t * s), g: n * (1 - t), b: n };
      break;
    case 5:
      r = { r: n, g: n * (1 - t), b: n * (1 - t * s) };
      break;
    default:
      r = { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t) };
  }
  return r.mode = "rgb", i !== void 0 && (r.alpha = i), r;
}
function A0({ r: e, g: t, b: n, alpha: i }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.max(e, t, n), r = Math.min(e, t, n), a = {
    mode: "hsv",
    s: s === 0 ? 0 : 1 - r / s,
    v: s
  };
  return s - r !== 0 && (a.h = (s === e ? (t - n) / (s - r) + (t < n) * 6 : s === t ? (n - e) / (s - r) + 2 : (e - t) / (s - r) + 4) * 60), i !== void 0 && (a.alpha = i), a;
}
const F0 = {
  mode: "hsv",
  toMode: {
    rgb: $0
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: A0
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: Z, fixup: An },
    s: Z,
    v: Z,
    alpha: { use: Z, fixup: Xe }
  },
  difference: {
    h: _a
  },
  average: {
    h: Fn
  }
};
function iy({ h: e, w: t, b: n, alpha: i }) {
  if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
    let s = t + n;
    t /= s, n /= s;
  }
  return $0({
    h: e,
    s: n === 1 ? 1 : 1 - t / (1 - n),
    v: 1 - n,
    alpha: i
  });
}
function sy(e) {
  let t = A0(e);
  if (t === void 0) return;
  let n = t.s !== void 0 ? t.s : 0, i = t.v !== void 0 ? t.v : 0, s = {
    mode: "hwb",
    w: (1 - n) * i,
    b: 1 - i
  };
  return t.h !== void 0 && (s.h = t.h), t.alpha !== void 0 && (s.alpha = t.alpha), s;
}
function ry(e, t) {
  if (!t || t[0] !== "hwb")
    return;
  const n = { mode: "hwb" }, [, i, s, r, a] = t;
  if (i.type !== H.None) {
    if (i.type === H.Percentage)
      return;
    n.h = i.value;
  }
  if (s.type !== H.None) {
    if (s.type === H.Hue)
      return;
    n.w = s.value / 100;
  }
  if (r.type !== H.None) {
    if (r.type === H.Hue)
      return;
    n.b = r.value / 100;
  }
  return a.type !== H.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === H.Number ? a.value : a.value / 100
    )
  )), n;
}
const ay = {
  mode: "hwb",
  toMode: {
    rgb: iy
  },
  fromMode: {
    rgb: sy
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [ry],
  serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: Z, fixup: An },
    w: Z,
    b: Z,
    alpha: { use: Z, fixup: Xe }
  },
  difference: {
    h: Ug
  },
  average: {
    h: Fn
  }
}, L0 = 203, za = 0.1593017578125, O0 = 78.84375, Pa = 0.8359375, Ha = 18.8515625, Wa = 18.6875;
function Uo(e) {
  if (e < 0) return 0;
  const t = Math.pow(e, 1 / O0);
  return 1e4 * Math.pow(Math.max(0, t - Pa) / (Ha - Wa * t), 1 / za);
}
function qo(e) {
  if (e < 0) return 0;
  const t = Math.pow(e / 1e4, za);
  return Math.pow((Pa + Ha * t) / (1 + Wa * t), O0);
}
const jo = (e) => Math.max(e / L0, 0), fd = ({ i: e, t, p: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const s = Uo(
    e + 0.008609037037932761 * t + 0.11102962500302593 * n
  ), r = Uo(
    e - 0.00860903703793275 * t - 0.11102962500302599 * n
  ), a = Uo(
    e + 0.5600313357106791 * t - 0.32062717498731885 * n
  ), o = {
    mode: "xyz65",
    x: jo(
      2.070152218389422 * s - 1.3263473389671556 * r + 0.2066510476294051 * a
    ),
    y: jo(
      0.3647385209748074 * s + 0.680566024947227 * r - 0.0453045459220346 * a
    ),
    z: jo(
      -0.049747207535812 * s - 0.0492609666966138 * r + 1.1880659249923042 * a
    )
  };
  return i !== void 0 && (o.alpha = i), o;
}, Go = (e = 0) => Math.max(e * L0, 0), hd = ({ x: e, y: t, z: n, alpha: i }) => {
  const s = Go(e), r = Go(t), a = Go(n), o = qo(
    0.3592832590121217 * s + 0.6976051147779502 * r - 0.0358915932320289 * a
  ), l = qo(
    -0.1920808463704995 * s + 1.1004767970374323 * r + 0.0753748658519118 * a
  ), u = qo(
    0.0070797844607477 * s + 0.0748396662186366 * r + 0.8433265453898765 * a
  ), d = 0.5 * o + 0.5 * l, f = 1.61376953125 * o - 3.323486328125 * l + 1.709716796875 * u, m = 4.378173828125 * o - 4.24560546875 * l - 0.132568359375 * u, h = { mode: "itp", i: d, t: f, p: m };
  return i !== void 0 && (h.alpha = i), h;
}, oy = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: fd,
    rgb: (e) => $i(fd(e))
  },
  fromMode: {
    xyz65: hd,
    rgb: (e) => hd(Ei(e))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: Z,
    t: Z,
    p: Z,
    alpha: { use: Z, fixup: Xe }
  }
}, ly = 134.03437499999998, uy = 16295499532821565e-27, Zo = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e / 1e4, za);
  return Math.pow((Pa + Ha * t) / (1 + Wa * t), ly);
}, Yo = (e = 0) => Math.max(e * 203, 0), D0 = ({ x: e, y: t, z: n, alpha: i }) => {
  e = Yo(e), t = Yo(t), n = Yo(n);
  let s = 1.15 * e - 0.15 * n, r = 0.66 * t + 0.34 * e, a = Zo(0.41478972 * s + 0.579999 * r + 0.014648 * n), o = Zo(-0.20151 * s + 1.120649 * r + 0.0531008 * n), l = Zo(-0.0166008 * s + 0.2648 * r + 0.6684799 * n), u = (a + o) / 2, d = {
    mode: "jab",
    j: 0.44 * u / (1 - 0.56 * u) - uy,
    a: 3.524 * a - 4.066708 * o + 0.542708 * l,
    b: 0.199076 * a + 1.096799 * o - 1.295875 * l
  };
  return i !== void 0 && (d.alpha = i), d;
}, cy = 134.03437499999998, md = 16295499532821565e-27, Jo = (e) => {
  if (e < 0) return 0;
  let t = Math.pow(e, 1 / cy);
  return 1e4 * Math.pow((Pa - t) / (Wa * t - Ha), 1 / za);
}, Xo = (e) => e / 203, B0 = ({ j: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = (e + md) / (0.44 + 0.56 * (e + md)), r = Jo(s + 0.13860504 * t + 0.058047316 * n), a = Jo(s - 0.13860504 * t - 0.058047316 * n), o = Jo(s - 0.096019242 * t - 0.8118919 * n), l = {
    mode: "xyz65",
    x: Xo(
      1.661373024652174 * r - 0.914523081304348 * a + 0.23136208173913045 * o
    ),
    y: Xo(
      -0.3250758611844533 * r + 1.571847026732543 * a - 0.21825383453227928 * o
    ),
    z: Xo(-0.090982811 * r - 0.31272829 * a + 1.5227666 * o)
  };
  return i !== void 0 && (l.alpha = i), l;
}, _0 = (e) => {
  let t = D0(Ei(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, N0 = (e) => $i(B0(e)), dy = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: _0,
    xyz65: D0
  },
  toMode: {
    rgb: N0,
    xyz65: B0
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: Z,
    a: Z,
    b: Z,
    alpha: { use: Z, fixup: Xe }
  }
}, pd = ({ j: e, a: t, b: n, alpha: i }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.sqrt(t * t + n * n), r = {
    mode: "jch",
    j: e,
    c: s
  };
  return s && (r.h = at(Math.atan2(n, t) * 180 / Math.PI)), i !== void 0 && (r.alpha = i), r;
}, gd = ({ j: e, c: t, h: n, alpha: i }) => {
  n === void 0 && (n = 0);
  let s = {
    mode: "jab",
    j: e,
    a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    b: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return i !== void 0 && (s.alpha = i), s;
}, fy = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: gd,
    rgb: (e) => N0(gd(e))
  },
  fromMode: {
    rgb: (e) => pd(_0(e)),
    jab: pd
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: Z, fixup: An },
    c: Z,
    j: Z,
    alpha: { use: Z, fixup: Xe }
  },
  difference: {
    h: Na
  },
  average: {
    h: Fn
  }
}, Ua = Math.pow(29, 3) / Math.pow(3, 3), Tu = Math.pow(6, 3) / Math.pow(29, 3);
let Ko = (e) => Math.pow(e, 3) > Tu ? Math.pow(e, 3) : (116 * e - 16) / Ua;
const Cu = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = (e + 16) / 116, r = t / 500 + s, a = s - n / 200, o = {
    mode: "xyz50",
    x: Ko(r) * Ye.X,
    y: Ko(s) * Ye.Y,
    z: Ko(a) * Ye.Z
  };
  return i !== void 0 && (o.alpha = i), o;
}, rr = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = fs({
    r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * n,
    g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * n,
    b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * n
  });
  return i !== void 0 && (s.alpha = i), s;
}, V0 = (e) => rr(Cu(e)), ar = (e) => {
  let { r: t, g: n, b: i, alpha: s } = ds(e), r = {
    mode: "xyz50",
    x: 0.436065742824811 * t + 0.3851514688337912 * n + 0.14307845442264197 * i,
    y: 0.22249319175623702 * t + 0.7168870538238823 * n + 0.06061979053616537 * i,
    z: 0.013923904500943465 * t + 0.09708128566574634 * n + 0.7140993584005155 * i
  };
  return s !== void 0 && (r.alpha = s), r;
}, Qo = (e) => e > Tu ? Math.cbrt(e) : (Ua * e + 16) / 116, Mu = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Qo(e / Ye.X), r = Qo(t / Ye.Y), a = Qo(n / Ye.Z), o = {
    mode: "lab",
    l: 116 * r - 16,
    a: 500 * (s - r),
    b: 200 * (r - a)
  };
  return i !== void 0 && (o.alpha = i), o;
}, R0 = (e) => {
  let t = Mu(ar(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
function hy(e, t) {
  if (!t || t[0] !== "lab")
    return;
  const n = { mode: "lab" }, [, i, s, r, a] = t;
  if (!(i.type === H.Hue || s.type === H.Hue || r.type === H.Hue))
    return i.type !== H.None && (n.l = Math.min(Math.max(0, i.value), 100)), s.type !== H.None && (n.a = s.type === H.Number ? s.value : s.value * 125 / 100), r.type !== H.None && (n.b = r.type === H.Number ? r.value : r.value * 125 / 100), a.type !== H.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        a.type === H.Number ? a.value : a.value / 100
      )
    )), n;
}
const Eu = {
  mode: "lab",
  toMode: {
    xyz50: Cu,
    rgb: V0
  },
  fromMode: {
    xyz50: Mu,
    rgb: R0
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [hy],
  serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    l: Z,
    a: Z,
    b: Z,
    alpha: { use: Z, fixup: Xe }
  }
}, my = {
  ...Eu,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: I0,
    rgb: Va
  },
  fromMode: {
    xyz65: T0,
    rgb: Ra
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function py(e, t) {
  if (!t || t[0] !== "lch")
    return;
  const n = { mode: "lch" }, [, i, s, r, a] = t;
  if (i.type !== H.None) {
    if (i.type === H.Hue)
      return;
    n.l = Math.min(Math.max(0, i.value), 100);
  }
  if (s.type !== H.None && (n.c = Math.max(
    0,
    s.type === H.Number ? s.value : s.value * 150 / 100
  )), r.type !== H.None) {
    if (r.type === H.Percentage)
      return;
    n.h = r.value;
  }
  return a.type !== H.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === H.Number ? a.value : a.value / 100
    )
  )), n;
}
const $u = {
  mode: "lch",
  toMode: {
    lab: ti,
    rgb: (e) => V0(ti(e))
  },
  fromMode: {
    rgb: (e) => ei(R0(e)),
    lab: ei
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [py],
  serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  interpolate: {
    h: { use: Z, fixup: An },
    c: Z,
    l: Z,
    alpha: { use: Z, fixup: Xe }
  },
  difference: {
    h: Na
  },
  average: {
    h: Fn
  }
}, gy = {
  ...$u,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (e) => ti(e, "lab65"),
    rgb: (e) => Va(ti(e, "lab65"))
  },
  fromMode: {
    rgb: (e) => ei(Ra(e), "lch65"),
    lab65: (e) => ei(e, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, z0 = ({ l: e, u: t, v: n, alpha: i }) => {
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.sqrt(t * t + n * n), r = {
    mode: "lchuv",
    l: e,
    c: s
  };
  return s && (r.h = at(Math.atan2(n, t) * 180 / Math.PI)), i !== void 0 && (r.alpha = i), r;
}, P0 = ({ l: e, c: t, h: n, alpha: i }) => {
  n === void 0 && (n = 0);
  let s = {
    mode: "luv",
    l: e,
    u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
    v: t ? t * Math.sin(n / 180 * Math.PI) : 0
  };
  return i !== void 0 && (s.alpha = i), s;
}, H0 = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), W0 = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), yy = H0(Ye.X, Ye.Y, Ye.Z), vy = W0(Ye.X, Ye.Y, Ye.Z), by = (e) => e <= Tu ? Ua * e : 116 * Math.cbrt(e) - 16, Nl = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = by(t / Ye.Y), r = H0(e, t, n), a = W0(e, t, n);
  !isFinite(r) || !isFinite(a) ? s = r = a = 0 : (r = 13 * s * (r - yy), a = 13 * s * (a - vy));
  let o = {
    mode: "luv",
    l: s,
    u: r,
    v: a
  };
  return i !== void 0 && (o.alpha = i), o;
}, ky = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), wy = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), xy = ky(Ye.X, Ye.Y, Ye.Z), Sy = wy(Ye.X, Ye.Y, Ye.Z), Vl = ({ l: e, u: t, v: n, alpha: i }) => {
  if (e === void 0 && (e = 0), e === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = t / (13 * e) + xy, r = n / (13 * e) + Sy, a = Ye.Y * (e <= 8 ? e / Ua : Math.pow((e + 16) / 116, 3)), o = a * (9 * s) / (4 * r), l = a * (12 - 3 * s - 20 * r) / (4 * r), u = { mode: "xyz50", x: o, y: a, z: l };
  return i !== void 0 && (u.alpha = i), u;
}, Iy = (e) => z0(Nl(ar(e))), Ty = (e) => rr(Vl(P0(e))), Cy = {
  mode: "lchuv",
  toMode: {
    luv: P0,
    rgb: Ty
  },
  fromMode: {
    rgb: Iy,
    luv: z0
  },
  channels: ["l", "c", "h", "alpha"],
  parse: ["--lchuv"],
  serialize: "--lchuv",
  ranges: {
    l: [0, 100],
    c: [0, 176.956],
    h: [0, 360]
  },
  interpolate: {
    h: { use: Z, fixup: An },
    c: Z,
    l: Z,
    alpha: { use: Z, fixup: Xe }
  },
  difference: {
    h: Na
  },
  average: {
    h: Fn
  }
}, My = {
  ...cs,
  mode: "lrgb",
  toMode: {
    rgb: fs
  },
  fromMode: {
    rgb: ds
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, Ey = {
  mode: "luv",
  toMode: {
    xyz50: Vl,
    rgb: (e) => rr(Vl(e))
  },
  fromMode: {
    xyz50: Nl,
    rgb: (e) => Nl(ar(e))
  },
  channels: ["l", "u", "v", "alpha"],
  parse: ["--luv"],
  serialize: "--luv",
  ranges: {
    l: [0, 100],
    u: [-84.936, 175.042],
    v: [-125.882, 87.243]
  },
  interpolate: {
    l: Z,
    u: Z,
    v: Z,
    alpha: { use: Z, fixup: Xe }
  }
}, U0 = ({ r: e, g: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.cbrt(
    0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * n
  ), r = Math.cbrt(
    0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * n
  ), a = Math.cbrt(
    0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * n
  ), o = {
    mode: "oklab",
    l: 0.210454268309314 * s + 0.7936177747023054 * r - 0.0040720430116193 * a,
    a: 1.9779985324311684 * s - 2.42859224204858 * r + 0.450593709617411 * a,
    b: 0.0259040424655478 * s + 0.7827717124575296 * r - 0.8086757549230774 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, qa = (e) => {
  let t = U0(ds(e));
  return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, or = ({ l: e, a: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = Math.pow(e + 0.3963377773761749 * t + 0.2158037573099136 * n, 3), r = Math.pow(e - 0.1055613458156586 * t - 0.0638541728258133 * n, 3), a = Math.pow(e - 0.0894841775298119 * t - 1.2914855480194092 * n, 3), o = {
    mode: "lrgb",
    r: 4.076741636075957 * s - 3.3077115392580616 * r + 0.2309699031821044 * a,
    g: -1.2684379732850317 * s + 2.6097573492876887 * r - 0.3413193760026573 * a,
    b: -0.0041960761386756 * s - 0.7034186179359362 * r + 1.7076146940746117 * a
  };
  return i !== void 0 && (o.alpha = i), o;
}, ja = (e) => fs(or(e));
function Rl(e) {
  const i = 1.170873786407767;
  return 0.5 * (i * e - 0.206 + Math.sqrt((i * e - 0.206) * (i * e - 0.206) + 4 * 0.03 * i * e));
}
function aa(e) {
  return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
}
function $y(e, t) {
  let n, i, s, r, a, o, l, u;
  -1.88170328 * e - 0.80936493 * t > 1 ? (n = 1.19086277, i = 1.76576728, s = 0.59662641, r = 0.75515197, a = 0.56771245, o = 4.0767416621, l = -3.3077115913, u = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = 0.73956515, i = -0.45954404, s = 0.08285427, r = 0.1254107, a = 0.14503204, o = -1.2684380046, l = 2.6097574011, u = -0.3413193965) : (n = 1.35733652, i = -915799e-8, s = -1.1513021, r = -0.50559606, a = 692167e-8, o = -0.0041960863, l = -0.7034186147, u = 1.707614701);
  let d = n + i * e + s * t + r * e * e + a * e * t, f = 0.3963377774 * e + 0.2158037573 * t, m = -0.1055613458 * e - 0.0638541728 * t, h = -0.0894841775 * e - 1.291485548 * t;
  {
    let p = 1 + d * f, b = 1 + d * m, x = 1 + d * h, k = p * p * p, $ = b * b * b, S = x * x * x, R = 3 * f * p * p, w = 3 * m * b * b, I = 3 * h * x * x, U = 6 * f * f * p, F = 6 * m * m * b, L = 6 * h * h * x, W = o * k + l * $ + u * S, Q = o * R + l * w + u * I, N = o * U + l * F + u * L;
    d = d - W * Q / (Q * Q - 0.5 * W * N);
  }
  return d;
}
function Au(e, t) {
  let n = $y(e, t), i = or({ l: 1, a: n * e, b: n * t }), s = Math.cbrt(1 / Math.max(i.r, i.g, i.b)), r = s * n;
  return [s, r];
}
function Ay(e, t, n, i, s, r = null) {
  r || (r = Au(e, t));
  let a;
  if ((n - s) * r[1] - (r[0] - s) * i <= 0)
    a = r[1] * s / (i * r[0] + r[1] * (s - n));
  else {
    a = r[1] * (s - 1) / (i * (r[0] - 1) + r[1] * (s - n));
    {
      let o = n - s, l = i, u = 0.3963377774 * e + 0.2158037573 * t, d = -0.1055613458 * e - 0.0638541728 * t, f = -0.0894841775 * e - 1.291485548 * t, m = o + l * u, h = o + l * d, p = o + l * f;
      {
        let b = s * (1 - a) + a * n, x = a * i, k = b + x * u, $ = b + x * d, S = b + x * f, R = k * k * k, w = $ * $ * $, I = S * S * S, U = 3 * m * k * k, F = 3 * h * $ * $, L = 3 * p * S * S, W = 6 * m * m * k, Q = 6 * h * h * $, N = 6 * p * p * S, ie = 4.0767416621 * R - 3.3077115913 * w + 0.2309699292 * I - 1, me = 4.0767416621 * U - 3.3077115913 * F + 0.2309699292 * L, ue = 4.0767416621 * W - 3.3077115913 * Q + 0.2309699292 * N, Oe = me / (me * me - 0.5 * ie * ue), ge = -ie * Oe, ye = -1.2684380046 * R + 2.6097574011 * w - 0.3413193965 * I - 1, xe = -1.2684380046 * U + 2.6097574011 * F - 0.3413193965 * L, Pe = -1.2684380046 * W + 2.6097574011 * Q - 0.3413193965 * N, Ge = xe / (xe * xe - 0.5 * ye * Pe), _e = -ye * Ge, tt = -0.0041960863 * R - 0.7034186147 * w + 1.707614701 * I - 1, _t = -0.0041960863 * U - 0.7034186147 * F + 1.707614701 * L, Nt = -0.0041960863 * W - 0.7034186147 * Q + 1.707614701 * N, Dn = _t / (_t * _t - 0.5 * tt * Nt), Bn = -tt * Dn;
        ge = Oe >= 0 ? ge : 1e6, _e = Ge >= 0 ? _e : 1e6, Bn = Dn >= 0 ? Bn : 1e6, a += Math.min(ge, Math.min(_e, Bn));
      }
    }
  }
  return a;
}
function Fu(e, t, n = null) {
  n || (n = Au(e, t));
  let i = n[0], s = n[1];
  return [s / i, s / (1 - i)];
}
function q0(e, t, n) {
  let i = Au(t, n), s = Ay(t, n, e, 1, e, i), r = Fu(t, n, i), a = 0.11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), o = 0.11239642 + 1 / (1.6132032 - 0.68124379 * n + t * (0.40370612 + 0.90148123 * n + t * (-0.27087943 + 0.6122399 * n + t * (299215e-8 - 0.45399568 * n - 0.14661872 * t)))), l = s / Math.min(e * r[0], (1 - e) * r[1]), u = e * a, d = (1 - e) * o, f = 0.9 * l * Math.sqrt(
    Math.sqrt(
      1 / (1 / (u * u * u * u) + 1 / (d * d * d * d))
    )
  );
  return u = e * 0.4, d = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (u * u) + 1 / (d * d))), f, s];
}
function yd(e) {
  const t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, s = { mode: "okhsl", l: Rl(t) };
  e.alpha !== void 0 && (s.alpha = e.alpha);
  let r = Math.sqrt(n * n + i * i);
  if (!r)
    return s.s = 0, s;
  let [a, o, l] = q0(t, n / r, i / r), u;
  if (r < o) {
    let d = 0, f = 0.8 * a, m = 1 - f / o;
    u = (r - d) / (f + m * (r - d)) * 0.8;
  } else {
    let d = o, f = 0.2 * o * o * 1.25 * 1.25 / a, m = 1 - f / (l - o);
    u = 0.8 + 0.2 * ((r - d) / (f + m * (r - d)));
  }
  return u && (s.s = u, s.h = at(Math.atan2(i, n) * 180 / Math.PI)), s;
}
function vd(e) {
  let t = e.h !== void 0 ? e.h : 0, n = e.s !== void 0 ? e.s : 0, i = e.l !== void 0 ? e.l : 0;
  const s = { mode: "oklab", l: aa(i) };
  if (e.alpha !== void 0 && (s.alpha = e.alpha), !n || i === 1)
    return s.a = s.b = 0, s;
  let r = Math.cos(t / 180 * Math.PI), a = Math.sin(t / 180 * Math.PI), [o, l, u] = q0(s.l, r, a), d, f, m, h;
  n < 0.8 ? (d = 1.25 * n, f = 0, m = 0.8 * o, h = 1 - m / l) : (d = 5 * (n - 0.8), f = l, m = 0.2 * l * l * 1.25 * 1.25 / o, h = 1 - m / (u - l));
  let p = f + d * m / (1 - h * d);
  return s.a = p * r, s.b = p * a, s;
}
const Fy = {
  ...E0,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: yd,
    rgb: (e) => yd(qa(e))
  },
  toMode: {
    oklab: vd,
    rgb: (e) => ja(vd(e))
  }
};
function bd(e) {
  let t = e.l !== void 0 ? e.l : 0, n = e.a !== void 0 ? e.a : 0, i = e.b !== void 0 ? e.b : 0, s = Math.sqrt(n * n + i * i), r = s ? n / s : 1, a = s ? i / s : 1, [o, l] = Fu(r, a), u = 0.5, d = 1 - u / o, f = l / (s + t * l), m = f * t, h = f * s, p = aa(m), b = h * p / m, x = or({ l: p, a: r * b, b: a * b }), k = Math.cbrt(
    1 / Math.max(x.r, x.g, x.b, 0)
  );
  t = t / k, s = s / k * Rl(t) / t, t = Rl(t);
  const $ = {
    mode: "okhsv",
    s: s ? (u + l) * h / (l * u + l * d * h) : 0,
    v: t ? t / m : 0
  };
  return $.s && ($.h = at(Math.atan2(i, n) * 180 / Math.PI)), e.alpha !== void 0 && ($.alpha = e.alpha), $;
}
function kd(e) {
  const t = { mode: "oklab" };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const n = e.h !== void 0 ? e.h : 0, i = e.s !== void 0 ? e.s : 0, s = e.v !== void 0 ? e.v : 0, r = Math.cos(n / 180 * Math.PI), a = Math.sin(n / 180 * Math.PI), [o, l] = Fu(r, a), u = 0.5, d = 1 - u / o, f = 1 - i * u / (u + l - l * d * i), m = i * l * u / (u + l - l * d * i), h = aa(f), p = m * h / f, b = or({
    l: h,
    a: r * p,
    b: a * p
  }), x = Math.cbrt(
    1 / Math.max(b.r, b.g, b.b, 0)
  ), k = aa(s * f), $ = m * k / f;
  return t.l = k * x, t.a = $ * r * x, t.b = $ * a * x, t;
}
const Ly = {
  ...F0,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: bd,
    rgb: (e) => bd(qa(e))
  },
  toMode: {
    oklab: kd,
    rgb: (e) => ja(kd(e))
  }
};
function Oy(e, t) {
  if (!t || t[0] !== "oklab")
    return;
  const n = { mode: "oklab" }, [, i, s, r, a] = t;
  if (!(i.type === H.Hue || s.type === H.Hue || r.type === H.Hue))
    return i.type !== H.None && (n.l = Math.min(
      Math.max(0, i.type === H.Number ? i.value : i.value / 100),
      1
    )), s.type !== H.None && (n.a = s.type === H.Number ? s.value : s.value * 0.4 / 100), r.type !== H.None && (n.b = r.type === H.Number ? r.value : r.value * 0.4 / 100), a.type !== H.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        a.type === H.Number ? a.value : a.value / 100
      )
    )), n;
}
const Dy = {
  ...Eu,
  mode: "oklab",
  toMode: {
    lrgb: or,
    rgb: ja
  },
  fromMode: {
    lrgb: U0,
    rgb: qa
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [Oy],
  serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
function By(e, t) {
  if (!t || t[0] !== "oklch")
    return;
  const n = { mode: "oklch" }, [, i, s, r, a] = t;
  if (i.type !== H.None) {
    if (i.type === H.Hue)
      return;
    n.l = Math.min(
      Math.max(0, i.type === H.Number ? i.value : i.value / 100),
      1
    );
  }
  if (s.type !== H.None && (n.c = Math.max(
    0,
    s.type === H.Number ? s.value : s.value * 0.4 / 100
  )), r.type !== H.None) {
    if (r.type === H.Percentage)
      return;
    n.h = r.value;
  }
  return a.type !== H.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === H.Number ? a.value : a.value / 100
    )
  )), n;
}
const _y = {
  ...$u,
  mode: "oklch",
  toMode: {
    oklab: (e) => ti(e, "oklab"),
    rgb: (e) => ja(ti(e, "oklab"))
  },
  fromMode: {
    rgb: (e) => ei(qa(e), "oklch"),
    oklab: (e) => ei(e, "oklch")
  },
  parse: [By],
  serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, wd = (e) => {
  let { r: t, g: n, b: i, alpha: s } = ds(e), r = {
    mode: "xyz65",
    x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * i,
    y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * i,
    z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * i
  };
  return s !== void 0 && (r.alpha = s), r;
}, xd = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = fs(
    {
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n
    },
    "p3"
  );
  return i !== void 0 && (s.alpha = i), s;
}, Ny = {
  ...cs,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (e) => xd(Ei(e)),
    xyz65: xd
  },
  toMode: {
    rgb: (e) => $i(wd(e)),
    xyz65: wd
  }
}, el = (e) => {
  let t = Math.abs(e);
  return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
}, Sd = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = {
    mode: "prophoto",
    r: el(
      e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * n
    ),
    g: el(
      e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * n
    ),
    b: el(e * 0 + t * 0 + 1.2119675456389452 * n)
  };
  return i !== void 0 && (s.alpha = i), s;
}, tl = (e = 0) => {
  let t = Math.abs(e);
  return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
}, Id = (e) => {
  let t = tl(e.r), n = tl(e.g), i = tl(e.b), s = {
    mode: "xyz50",
    x: 0.7977666449006423 * t + 0.1351812974005331 * n + 0.0313477341283922 * i,
    y: 0.2880748288194013 * t + 0.7118352342418731 * n + 899369387256e-16 * i,
    z: 0 * t + 0 * n + 0.8251046025104602 * i
  };
  return e.alpha !== void 0 && (s.alpha = e.alpha), s;
}, Vy = {
  ...cs,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: Sd,
    rgb: (e) => Sd(ar(e))
  },
  toMode: {
    xyz50: Id,
    rgb: (e) => rr(Id(e))
  }
}, Td = 1.09929682680944, Ry = 0.018053968510807, nl = (e) => {
  const t = Math.abs(e);
  return t > Ry ? (Math.sign(e) || 1) * (Td * Math.pow(t, 0.45) - (Td - 1)) : 4.5 * e;
}, Cd = ({ x: e, y: t, z: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  let s = {
    mode: "rec2020",
    r: nl(
      e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * n
    ),
    g: nl(
      e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * n
    ),
    b: nl(
      e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * n
    )
  };
  return i !== void 0 && (s.alpha = i), s;
}, Md = 1.09929682680944, zy = 0.018053968510807, il = (e = 0) => {
  let t = Math.abs(e);
  return t < zy * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Md - 1) / Md, 1 / 0.45);
}, Ed = (e) => {
  let t = il(e.r), n = il(e.g), i = il(e.b), s = {
    mode: "xyz65",
    x: 0.6369580483012911 * t + 0.1446169035862083 * n + 0.1688809751641721 * i,
    y: 0.262700212011267 * t + 0.6779980715188708 * n + 0.059301716469862 * i,
    z: 0 * t + 0.0280726930490874 * n + 1.0609850577107909 * i
  };
  return e.alpha !== void 0 && (s.alpha = e.alpha), s;
}, Py = {
  ...cs,
  mode: "rec2020",
  fromMode: {
    xyz65: Cd,
    rgb: (e) => Cd(Ei(e))
  },
  toMode: {
    xyz65: Ed,
    rgb: (e) => $i(Ed(e))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, bi = 0.0037930732552754493, j0 = Math.cbrt(bi), sl = (e) => Math.cbrt(e) - j0, Hy = (e) => {
  const { r: t, g: n, b: i, alpha: s } = ds(e), r = sl(0.3 * t + 0.622 * n + 0.078 * i + bi), a = sl(0.23 * t + 0.692 * n + 0.078 * i + bi), o = sl(
    0.2434226892454782 * t + 0.2047674442449682 * n + 0.5518098665095535 * i + bi
  ), l = {
    mode: "xyb",
    x: (r - a) / 2,
    y: (r + a) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: o - (r + a) / 2
  };
  return s !== void 0 && (l.alpha = s), l;
}, rl = (e) => Math.pow(e + j0, 3), Wy = ({ x: e, y: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const s = rl(e + t) - bi, r = rl(t - e) - bi, a = rl(n + t) - bi, o = fs({
    r: 11.031566904639861 * s - 9.866943908131562 * r - 0.16462299650829934 * a,
    g: -3.2541473810744237 * s + 4.418770377582723 * r - 0.16462299650829934 * a,
    b: -3.6588512867136815 * s + 2.7129230459360922 * r + 1.9459282407775895 * a
  });
  return i !== void 0 && (o.alpha = i), o;
}, Uy = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: Wy
  },
  fromMode: {
    rgb: Hy
  },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: Z,
    y: Z,
    b: Z,
    alpha: { use: Z, fixup: Xe }
  }
}, qy = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: rr,
    lab: Mu
  },
  fromMode: {
    rgb: ar,
    lab: Cu
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: Z,
    y: Z,
    z: Z,
    alpha: { use: Z, fixup: Xe }
  }
}, jy = (e) => {
  let { x: t, y: n, z: i, alpha: s } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), i === void 0 && (i = 0);
  let r = {
    mode: "xyz50",
    x: 1.0479298208405488 * t + 0.0229467933410191 * n - 0.0501922295431356 * i,
    y: 0.0296278156881593 * t + 0.990434484573249 * n - 0.0170738250293851 * i,
    z: -0.0092430581525912 * t + 0.0150551448965779 * n + 0.7518742899580008 * i
  };
  return s !== void 0 && (r.alpha = s), r;
}, Gy = (e) => {
  let { x: t, y: n, z: i, alpha: s } = e;
  t === void 0 && (t = 0), n === void 0 && (n = 0), i === void 0 && (i = 0);
  let r = {
    mode: "xyz65",
    x: 0.9554734527042182 * t - 0.0230985368742614 * n + 0.0632593086610217 * i,
    y: -0.0283697069632081 * t + 1.0099954580058226 * n + 0.021041398966943 * i,
    z: 0.0123140016883199 * t - 0.0205076964334779 * n + 1.3303659366080753 * i
  };
  return s !== void 0 && (r.alpha = s), r;
}, Zy = {
  mode: "xyz65",
  toMode: {
    rgb: $i,
    xyz50: jy
  },
  fromMode: {
    rgb: Ei,
    xyz50: Gy
  },
  ranges: {
    x: [0, 0.95],
    y: [0, 1],
    z: [0, 1.088]
  },
  channels: ["x", "y", "z", "alpha"],
  parse: ["xyz", "xyz-d65"],
  serialize: "xyz-d65",
  interpolate: {
    x: Z,
    y: Z,
    z: Z,
    alpha: { use: Z, fixup: Xe }
  }
}, Yy = ({ r: e, g: t, b: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const s = {
    mode: "yiq",
    y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * n,
    i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * n,
    q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * n
  };
  return i !== void 0 && (s.alpha = i), s;
}, Jy = ({ y: e, i: t, q: n, alpha: i }) => {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const s = {
    mode: "rgb",
    r: e + 0.95608445 * t + 0.6208885 * n,
    g: e - 0.27137664 * t - 0.6486059 * n,
    b: e - 1.10561724 * t + 1.70250126 * n
  };
  return i !== void 0 && (s.alpha = i), s;
}, Xy = {
  mode: "yiq",
  toMode: {
    rgb: Jy
  },
  fromMode: {
    rgb: Yy
  },
  channels: ["y", "i", "q", "alpha"],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: Z,
    i: Z,
    q: Z,
    alpha: { use: Z, fixup: Xe }
  }
};
Fe(Vg);
Fe(qg);
Fe(jg);
Fe(Gg);
Fe(Jg);
Fe(E0);
Fe(F0);
Fe(ay);
Fe(oy);
Fe(dy);
Fe(fy);
Fe(Eu);
Fe(my);
Fe($u);
Fe(gy);
Fe(Cy);
Fe(My);
Fe(Ey);
Fe(Fy);
Fe(Ly);
Fe(Dy);
Fe(_y);
Fe(Ny);
Fe(Vy);
Fe(Py);
Fe(cs);
Fe(Uy);
Fe(qy);
Fe(Zy);
Fe(Xy);
function Ky(e) {
  return class extends e {
    constructor(...t) {
      throw new Error("@adapter: cannot create instance of class.");
    }
  };
}
function Qy(e, t) {
  return e === t ? !0 : e === t;
}
const G0 = /* @__PURE__ */ Symbol(), Ji = /* @__PURE__ */ Symbol(), Xi = /* @__PURE__ */ Symbol(), Nr = /* @__PURE__ */ Symbol(), ss = /* @__PURE__ */ Symbol(), Ct = /* @__PURE__ */ Symbol(), gt = /* @__PURE__ */ Symbol(), Lu = /* @__PURE__ */ Symbol(), oa = /* @__PURE__ */ Symbol(), Z0 = /* @__PURE__ */ Symbol(), Y0 = /* @__PURE__ */ Symbol();
function ni(e) {
  return e && typeof e == "object" && !!e[ss];
}
function J0(e) {
  if (!ni(e)) throw new Error("@dto assert given object is not a class decorated with @Dto.");
}
const ev = /* @__PURE__ */ Symbol();
function X0(e, t = 0, n) {
  return function(...i) {
    const s = e[ev] ??= /* @__PURE__ */ new WeakMap(), r = i[t], a = n !== void 0 ? i[n] : "self";
    if (typeof r != "object" || r === null) return e.call(this, ...i);
    s.has(r) || s.set(r, []);
    const o = s.get(r);
    if (!o.includes(a)) {
      o.push(a);
      try {
        return e.call(this, ...i);
      } finally {
        const l = o.lastIndexOf(a);
        l !== -1 && o.splice(l, 1), o.length === 0 && s.delete(r);
      }
    }
  };
}
const Zs = X0(function(e, t, n, i) {
  const s = e[Y0];
  s(e, t, n, i), e[Ct] && Zs(e[Ct], e[gt], e[Ct][e[gt]]);
}, 0, 1), la = X0(function(e, t) {
  J0(e), e[Nr] || (e[Nr] = !0, Zs(e, Nr, !0, !1)), e[Ct] && la(e[Ct], e[gt]);
});
function $d(e, t, n) {
  t[Ji] ??= [], !t[Ji].includes(e) && t[Ji].push(e), e[Ct] !== t && (e[Ct] = t), e[gt] !== n && (e[gt] = n);
}
function Ad(e, t, n) {
  if (ni(n)) $d(n, e, t);
  else if (Array.isArray(n)) {
    for (const i of n)
      ni(i) && $d(i, e, t);
    n[Ct] = e, n[gt] = t;
  }
}
function K0(e, t) {
  const n = e[Z0];
  n(e, t);
}
function Fd(e, t) {
  if (Ji in t) {
    const n = t[Ji].indexOf(e);
    n !== -1 && t[Ji].splice(n, 1);
  }
  e[Ct] = void 0, e[gt] = void 0;
}
function tv(e, t) {
  if (ni(t)) Fd(t, e);
  else if (Array.isArray(t)) {
    for (const n of t) ni(n) && Fd(n, e);
    t[Ct] = void 0, t[gt] = void 0;
  }
}
const Q0 = {};
var em = {
  /**
  * Trap for when a property is deleted from the target. This
  * will mark the parent dto as dirty and trigger an update.
  */
  deleteProperty(e, t) {
    if (Reflect.deleteProperty(e, t), al(e, t)) return !0;
    const n = e[Ct];
    return n && Zs(n, e[gt], n[e[gt]]), n && la(n, e[gt]), !0;
  },
  /**
  * Trap for when a property of the target is being accessed. The
  * property access is being tracked for further updates.
  */
  get(e, t, n) {
    if (t === oa) return !0;
    if (al(e, t)) return Reflect.get(e, t, n);
    const i = e[Ct];
    return i && K0(i, e[gt]), Reflect.get(e, t);
  },
  /**
  * Trap for when a property of the target is being updated. This
  * will mark the parent dto as dirty and trigger an update.
  */
  set(e, t, n, i) {
    if (al(e, t)) return Reflect.set(e, t, n, i);
    const s = e[Ct];
    return s && Zs(s, e[gt], s[e[gt]]), s && la(s, e[gt]), Reflect.set(e, t, n);
  }
};
function al(e, t) {
  return typeof t == "symbol" || typeof e[t] == "function" || t === "length";
}
var nv = {
  /**
  * Trap for when a dto property is being accessed. The property
  * access is being tracked for further updates. If the dto has
  * any child dtos, a relationship will be added between them.
  */
  get(e, t, n) {
    if (t === oa) return !0;
    if (typeof t == "symbol") return Reflect.get(e, t, n);
    const i = e[Xi][t];
    if (!i || !i.get) return Reflect.get(e, t, n);
    const s = i.get.call(e);
    return K0(e, t), Ad(e, t, s), s;
  },
  /**
  * Trap for when a descriptor of a dto property is requested.
  */
  getOwnPropertyDescriptor(e, t) {
    return e[Xi][t];
  },
  /**
  * Trap for when the keys of a dto are requested.
  */
  ownKeys(e) {
    return e[Lu];
  },
  /**
  * Trap for when a dto property is being updated. This will
  * mark the dto dirty and trigger an update. If an array is
  * passed, that array will be made reactive as well.
  */
  set(e, t, n, i) {
    if (typeof t == "symbol") return Reflect.set(e, t, n, i);
    const s = e[Xi][t];
    if (!s || !s.set) return Reflect.set(e, t, n, i);
    const r = s.get?.call(e) ?? void 0;
    return Qy(n, r) || (tv(e, r), Array.isArray(n) && !n[oa] && (n = new Proxy(n, em)), s.set.call(e, n), Ad(e, t, n), la(e, t), Zs(e, t, n, r)), !0;
  }
}, iv = {
  /**
  * Trap for when a ref property is being accessed. The property
  * access is being tracked for further updates. If the requested
  * property is not a part of {Ref}, the get is proxied to the
  * underlying dto instance.
  *
  * A little trick with __v_isRef is done here, all the features
  * of refs are used by our dto, but we don't want Vue to treat
  * it as a ref. We return false here to trick Vue.
  */
  get(e, t, n) {
    return t === "__v_isRef" ? !1 : t === oa ? !0 : t in e ? Reflect.get(e, t, n) : Reflect.get(e.value, t);
  },
  /**
  * Trap for when a descriptor of a property is requested, that
  * request is proxied to the underlying dto.
  */
  getOwnPropertyDescriptor(e, t) {
    return Reflect.getOwnPropertyDescriptor(e.value, t);
  },
  /**
  * Trap for when the keys of the ref are requested, that request
  * is proxied to the underlying dto.
  */
  ownKeys(e) {
    return Reflect.ownKeys(e.value);
  },
  /**
  * Trap for when a ref property is being updated. If the property
  * is not part of {Ref}, the set is proxied to the underlying dto
  * instance. In that proxy, the dto will be marked dirty and an
  * update is triggered.
  */
  set(e, t, n, i) {
    return t in e ? Reflect.set(e, t, n, i) : Reflect.set(e.value, t, n);
  }
}, sv = {
  /**
  * Trap for when a dto is being constructed. Reactivity is provided
  * to all arguments and a proxied custom ref is returned that references
  * the actual dto instance.
  */
  construct(e, t, n) {
    t = t.map((s) => Array.isArray(s) ? new Proxy(s, em) : s);
    const i = xf((s, r) => {
      const a = Ia(Reflect.construct(e, t, n));
      a[G0] = t, a[Nr] = !1, a[Z0] = s, a[Y0] = r;
      const o = new Proxy(a, nv);
      return {
        get: () => (s(), o),
        set: () => {
        }
      };
    });
    return new Proxy(i, iv);
  }
};
function rv() {
  const e = this;
  J0(e);
  const t = Q0[e[ss]], n = new t(...e[G0]);
  for (const [i, s] of Object.entries(this[Xi]))
    s.set && (n[i] = ni(this[i]) ? this[i].clone() : this[i]);
  return n;
}
function av(e) {
  for (let t in e) {
    const n = this[Xi][t];
    ni(this[t]) && typeof e[t] == "object" ? this[t].fill(e[t]) : n && n.set && (this[t] = e[t]);
  }
}
function ov() {
  const e = {};
  for (const t of this[Lu]) {
    let n = this[t];
    ni(n) && (n = n.toJSON()), e[t] = n;
  }
  return e;
}
function Ga(e) {
  uv(e);
  const t = Object.freeze(ug(e)), n = Object.keys(t);
  return Ir(e.prototype, Xi, t), Ir(e.prototype, ss, e.name), Ir(e.prototype, Lu, n), Ir(e, Symbol.hasInstance, (i) => typeof i == "object" && i?.[ss] === e.name), No(e, "clone", rv), No(e, "fill", av), No(e, "toJSON", ov), lv(e);
}
function lv(e) {
  const t = new Proxy(e, sv);
  return Q0[e.name] = t, t;
}
function uv(e) {
  const t = Object.getPrototypeOf(e.prototype);
  if (ss in t) throw new Error(`⛔️ @dto ${e.name} cannot extend parent class which is also decorated with @dto ${t[ss]}.`);
}
function lr(e, t, n, i) {
  var s = arguments.length, r = s < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(e, t, n, i);
  else for (var o = e.length - 1; o >= 0; o--) (a = e[o]) && (r = (s < 3 ? a(r) : s > 3 ? a(t, n, r) : a(t, n)) || r);
  return s > 3 && r && Object.defineProperty(t, n, r), r;
}
let Ld = class {
  get blob() {
    return this.#t;
  }
  get name() {
    return this.#e;
  }
  #t;
  #e;
  constructor(t, n) {
    this.#t = t, this.#e = n;
  }
};
Ld = lr([Ga], Ld);
let zl = class {
  get items() {
    return this.#t;
  }
  get page() {
    return this.#e;
  }
  get pageSize() {
    return this.#n;
  }
  get pages() {
    return this.#i;
  }
  get total() {
    return this.#s;
  }
  #t;
  #e;
  #n;
  #i;
  #s;
  constructor(t, n, i, s, r) {
    this.#t = t, this.#e = n, this.#n = i, this.#i = s, this.#s = r;
  }
};
zl = lr([Ga], zl);
var cv = zl;
let Pl = class {
  get code() {
    return this.#t;
  }
  get error() {
    return this.#e;
  }
  get errorDescription() {
    return this.#n;
  }
  get statusCode() {
    return this.#i;
  }
  #t;
  #e;
  #n;
  #i;
  constructor(t, n, i, s) {
    this.#t = t, this.#e = n, this.#n = i, this.#i = s;
  }
};
Pl = lr([Ga], Pl);
var dv = Pl;
let Hl = class {
  get code() {
    return this.#t;
  }
  get error() {
    return this.#e;
  }
  get errorDescription() {
    return this.#n;
  }
  get errors() {
    return this.#i;
  }
  get params() {
    return this.#s;
  }
  #t;
  #e;
  #n;
  #i;
  #s;
  constructor(t, n, i, s, r) {
    this.#t = t, this.#e = n, this.#n = i, this.#i = s, this.#s = r;
  }
};
Hl = lr([Ga], Hl);
var fv = Hl, Wl;
let Od = Wl = class {
  static parsePaginatedAdapter(t, n) {
    return new cv(t.items.map(n), t.page, t.page_size, t.pages, t.total);
  }
  static parseFileNameFromContentDispositionHeader(t) {
    const n = `download-${se.now().toFormat("yyyy-MM-dd HH-mm-ss")}`;
    if (!t.startsWith("attachment")) return n;
    const i = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(t);
    return (i?.length || 0) < 2 ? n : i[1].replaceAll("'", "").replaceAll('"', "").replaceAll("/", "-").replaceAll(":", "-");
  }
  static parseRequestError(t, n) {
    return new dv(t.code, t.error, t.error_description ?? t.errorDescription, n);
  }
  static parseValidationError(t) {
    let n;
    return t.errors && (n = {}, Object.entries(t.errors).forEach(([i, s]) => {
      n[i] = Wl.parseValidationError(s);
    })), new fv(t.code, t.error, t.error_description ?? t.errorDescription, n, t.params);
  }
};
Od = Wl = lr([Ky], Od);
let tm;
const Za = (e) => tm = e, nm = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function Ul(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var _s;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(_s || (_s = {}));
function hv() {
  const e = sf(!0), t = e.run(() => ne({}));
  let n = [], i = [];
  const s = Ia({
    install(r) {
      Za(s), s._a = r, r.provide(nm, s), r.config.globalProperties.$pinia = s, i.forEach((a) => n.push(a)), i = [];
    },
    use(r) {
      return this._a ? n.push(r) : i.push(r), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return s;
}
const im = () => {
};
function Dd(e, t, n, i = im) {
  e.add(t);
  const s = () => {
    e.delete(t) && i();
  };
  return !n && rf() && af(s), s;
}
function Ni(e, ...t) {
  e.forEach((n) => {
    n(...t);
  });
}
const mv = (e) => e(), Bd = /* @__PURE__ */ Symbol(), ol = /* @__PURE__ */ Symbol();
function ql(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, i) => e.set(i, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const i = t[n], s = e[n];
    Ul(s) && Ul(i) && e.hasOwnProperty(n) && !ze(i) && !an(i) ? e[n] = ql(s, i) : e[n] = i;
  }
  return e;
}
const pv = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function gv(e) {
  return !Ul(e) || !Object.prototype.hasOwnProperty.call(e, pv);
}
const { assign: Pn } = Object;
function yv(e) {
  return !!(ze(e) && e.effect);
}
function vv(e, t, n, i) {
  const { state: s, actions: r, getters: a } = t, o = n.state.value[e];
  let l;
  function u() {
    o || (n.state.value[e] = s ? s() : {});
    const d = e1(n.state.value[e]);
    return Pn(d, r, Object.keys(a || {}).reduce((f, m) => (f[m] = Ia(Me(() => {
      Za(n);
      const h = n._s.get(e);
      return a[m].call(h, h);
    })), f), {}));
  }
  return l = sm(e, u, t, n, i, !0), l;
}
function sm(e, t, n = {}, i, s, r) {
  let a;
  const o = Pn({ actions: {} }, n), l = { deep: !0 };
  let u, d, f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h;
  const p = i.state.value[e];
  !r && !p && (i.state.value[e] = {}), ne({});
  let b;
  function x(F) {
    let L;
    u = d = !1, typeof F == "function" ? (F(i.state.value[e]), L = {
      type: _s.patchFunction,
      storeId: e,
      events: h
    }) : (ql(i.state.value[e], F), L = {
      type: _s.patchObject,
      payload: F,
      storeId: e,
      events: h
    });
    const W = b = /* @__PURE__ */ Symbol();
    mi().then(() => {
      b === W && (u = !0);
    }), d = !0, Ni(f, L, i.state.value[e]);
  }
  const k = r ? function() {
    const { state: L } = n, W = L ? L() : {};
    this.$patch((Q) => {
      Pn(Q, W);
    });
  } : (
    /* istanbul ignore next */
    im
  );
  function $() {
    a.stop(), f.clear(), m.clear(), i._s.delete(e);
  }
  const S = (F, L = "") => {
    if (Bd in F)
      return F[ol] = L, F;
    const W = function() {
      Za(i);
      const Q = Array.from(arguments), N = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set();
      function me(ge) {
        N.add(ge);
      }
      function ue(ge) {
        ie.add(ge);
      }
      Ni(m, {
        args: Q,
        name: W[ol],
        store: w,
        after: me,
        onError: ue
      });
      let Oe;
      try {
        Oe = F.apply(this && this.$id === e ? this : w, Q);
      } catch (ge) {
        throw Ni(ie, ge), ge;
      }
      return Oe instanceof Promise ? Oe.then((ge) => (Ni(N, ge), ge)).catch((ge) => (Ni(ie, ge), Promise.reject(ge))) : (Ni(N, Oe), Oe);
    };
    return W[Bd] = !0, W[ol] = L, W;
  }, R = {
    _p: i,
    // _s: scope,
    $id: e,
    $onAction: Dd.bind(null, m),
    $patch: x,
    $reset: k,
    $subscribe(F, L = {}) {
      const W = Dd(f, F, L.detached, () => Q()), Q = a.run(() => Re(() => i.state.value[e], (N) => {
        (L.flush === "sync" ? d : u) && F({
          storeId: e,
          type: _s.direct,
          events: h
        }, N);
      }, Pn({}, l, L)));
      return W;
    },
    $dispose: $
  }, w = un(R);
  i._s.set(e, w);
  const U = (i._a && i._a.runWithContext || mv)(() => i._e.run(() => (a = sf()).run(() => t({ action: S }))));
  for (const F in U) {
    const L = U[F];
    if (ze(L) && !yv(L) || an(L))
      r || (p && gv(L) && (ze(L) ? L.value = p[F] : ql(L, p[F])), i.state.value[e][F] = L);
    else if (typeof L == "function") {
      const W = S(L, F);
      U[F] = W, o.actions[F] = L;
    }
  }
  return Pn(w, U), Pn(be(w), U), Object.defineProperty(w, "$state", {
    get: () => i.state.value[e],
    set: (F) => {
      x((L) => {
        Pn(L, F);
      });
    }
  }), i._p.forEach((F) => {
    Pn(w, a.run(() => F({
      store: w,
      app: i._a,
      pinia: i,
      options: o
    })));
  }), p && r && n.hydrate && n.hydrate(w.$state, p), u = !0, d = !0, w;
}
// @__NO_SIDE_EFFECTS__
function bv(e, t, n) {
  let i;
  const s = typeof t == "function";
  i = s ? n : t;
  function r(a, o) {
    const l = v1();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (l ? kn(nm, null) : null), a && Za(a), a = tm, a._s.has(e) || (s ? sm(e, t, i, a) : vv(e, i, a)), a._s.get(e);
  }
  return r.$id = e, r;
}
function kv(e) {
  const t = be(e), n = {};
  for (const i in t) {
    const s = t[i];
    s.effect ? n[i] = // ...
    Me({
      get: () => e[i],
      set(r) {
        e[i] = r;
      }
    }) : (ze(s) || an(s)) && (n[i] = // ---
    In(e, i));
  }
  return n;
}
function Pi(e) {
  let t = c(e);
  return t ? ns(t) ? t : t.$el ?? null : null;
}
function _d(e, t, n) {
  let i = ne([]);
  $n(() => {
    document.addEventListener("pointerdown", s);
  }), Ci(() => {
    document.removeEventListener("pointerdown", s);
  });
  function s(r) {
    c(t) && !c(i).some((a) => a.contains(r.target)) && n(r);
  }
  Ma(() => {
    let r = [];
    (Array.isArray(e) ? e : [e]).forEach((a) => {
      let o = Pi(a);
      o && r.push(o);
    }), i.value = r;
  });
}
const ua = /* @__PURE__ */ new WeakMap();
function wv(e) {
  let t = {};
  for (let n of Object.keys(e).sort()) t[n] = n === "attributeFilter" && e.attributeFilter ? [...e.attributeFilter].sort() : e[n];
  return JSON.stringify(t);
}
function xv(e, t, n, i) {
  let s = ua.get(e);
  s || (s = /* @__PURE__ */ new Map(), ua.set(e, s));
  let r = s.get(n);
  if (!r) {
    let a = /* @__PURE__ */ new Set(), o = new MutationObserver((l, u) => {
      for (let d of a) d(l, u);
    });
    o.observe(e, i), r = { callbacks: a, observer: o }, s.set(n, r);
  }
  r.callbacks.add(t);
}
function Sv(e, t, n) {
  let i = ua.get(e), s = i?.get(n);
  !i || !s || (s.callbacks.delete(t), !(s.callbacks.size > 0) && (s.observer.disconnect(), i.delete(n), i.size === 0 && ua.delete(e)));
}
function rm(e, t, n) {
  n ??= { attributes: !0 };
  let i = wv(n), s = n, r = null, a = Re(e, (u) => {
    o();
    let d = Pi(u);
    d && (xv(d, t, i, s), r = d);
  }, { immediate: !0 });
  function o() {
    r &&= (Sv(r, t, i), null);
  }
  function l() {
    o(), a();
  }
  af(l);
}
function Iv(e) {
  let t = [];
  for (let n of e) {
    if (n.type === pe && Array.isArray(n.children)) {
      t.push(...n.children);
      continue;
    }
    t.push(n);
  }
  return t;
}
const Tv = ["a:not([disabled])", "button:not([disabled])", "input[type=checkbox]:not([disabled])", "input[type=radio]:not([disabled])", "input[type=text]:not([disabled])", '[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");
function ki(e) {
  return Array.from(e.querySelectorAll(Tv)).filter(ns).filter((t) => t.offsetWidth > 0 || t.offsetHeight > 0 || t === document.activeElement);
}
function Cv(e, t, n) {
  let i = ki(e), s = i.indexOf(t);
  if (s === -1) return null;
  let r = $v(i);
  Mv(r, s, n);
  let a = Ev(s, n, r, i);
  return a || ((n === "up" || n === "left") && (a = i[s - 1]), (n === "down" || n === "right") && (a = i[s + 1])), a;
}
function Mv(e, t, n) {
  let i = e[t];
  e.forEach((s) => {
    let r = s.center;
    switch (n) {
      case "up":
        r = { x: r.x, y: s.top + s.height };
        break;
      case "down":
        r = { x: r.x, y: s.top };
        break;
      case "left":
        r = { x: s.left + s.width, y: r.y };
        break;
      case "right":
        r = { x: s.left, y: r.y };
        break;
    }
    s.distance = Math.sqrt((i.center.x - r.x) ** 2 + (i.center.y - r.y) ** 2);
  });
}
function Ev(e, t, n, i) {
  let s = n[e], r = [];
  switch (t) {
    case "up":
      r = n.map((o, l) => l === e || o.top + o.height > s.top ? 2 ** 53 - 1 : o.distance);
      break;
    case "down":
      r = n.map((o, l) => l === e || o.top < s.top + s.height ? 2 ** 53 - 1 : o.distance);
      break;
    case "left":
      r = n.map((o, l) => l === e || o.left + o.width > s.left ? 2 ** 53 - 1 : o.distance);
      break;
    case "right":
      r = n.map((o, l) => l === e || o.left < s.left + s.width ? 2 ** 53 - 1 : o.distance);
      break;
  }
  let a = r.indexOf(Math.min(...r));
  return r[a] === 2 ** 53 - 1 ? null : i[a];
}
function $v(e) {
  return e.map((t) => t.getBoundingClientRect()).map((t) => ({ height: t.height, width: t.width, top: t.top, left: t.left, right: t.right, bottom: t.bottom, center: { x: t.left + t.width / 2, y: t.top + t.height / 2 }, distance: 0 }));
}
function Av(e, t, n = void 0) {
  let i = ki(e), s = n || document.activeElement;
  return !s || !ns(s) ? i[0] || void 0 : i[i.indexOf(s) + t] || void 0;
}
function Cn(e) {
  let t = c(e);
  return ns(t) ? t : t?.$el;
}
function Fv(...e) {
  console.warn("[Flux]", ...e);
}
function ll(e, t, n = !1) {
  let i = Lv(e), s = t.compareDocumentPosition(e), r;
  r = s && Node.DOCUMENT_POSITION_PRECEDING || n ? i.firstChild() : i.lastChild(), (r === null ? e : r).focus();
}
function Lv(e) {
  return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (t) => t.tabIndex >= 0 && !t.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
}
const Nd = new class {
  get active() {
    return this.current?.isEnabled ?? !1;
  }
  get current() {
    return this.#e[this.#e.length - 1] ?? null;
  }
  #t = [];
  #e = [];
  add(e, t, n = !0) {
    let i = { id: e, setEnabled: t, isEnabled: !0 };
    this.current && this.toggle(this.current, !1), this.#e.push(i), n && (this.toggle(i, !0), this.emit());
  }
  remove(e) {
    let t = this.#e.find((i) => i.id === e);
    t && this.toggle(t, !1);
    let n = this.current?.id === e;
    this.#e = this.#e.filter((i) => i.id !== e), n && this.current && this.toggle(this.current, !0), this.emit();
  }
  emit() {
    this.#t.forEach((e) => e(this.active, this.#e));
  }
  subscribe(e) {
    return this.#t.push(e), e(this.active, this.#e), () => this.#t = this.#t.filter((t) => t !== e);
  }
  toggle(e, t) {
    e.setEnabled(t), e.isEnabled = t;
  }
}(), Ov = !globalThis.document;
let Dv = 0;
function Bv(e = !1) {
  let t = ne(`focus-trap-${++Dv}`), n = ne(!1);
  return $n(() => Nd.add(c(t), (i) => n.value = i, e)), Ci(() => Nd.remove(c(t))), n;
}
function _v(e, t) {
  Re(e, (n, i, s) => {
    if (!Cn(e) || c(t)) return;
    let r = document.activeElement;
    s(() => {
      requestAnimationFrame(() => r?.focus());
    });
  });
}
function Nv(e, t = {}) {
  if (Ov) return;
  let { disable: n = ne(!1), disableReturn: i = ne(!1), attachTo: s = null } = t, r = Bv(!n);
  _v(e, i), Re(e, (a, o, l) => {
    let u = Cn(e), d = s || document;
    r.value && u && document.activeElement && !u.contains(document.activeElement) && !u.querySelector("[autofocus]") && ll(u, document.activeElement, !0);
    function f(h) {
      if (!r.value || !u) return;
      let p = h.target || document.body;
      u.contains(p) || (h.preventDefault(), h.stopImmediatePropagation(), ll(u, p));
    }
    function m(h) {
      if (!r.value || !u) return;
      (!h.relatedTarget || h.relatedTarget === document.body) && (h.preventDefault(), u.focus());
      let p = h.target || document.body;
      u.contains(p) || ll(u, p);
    }
    if (d.addEventListener("focusin", f, { capture: !0 }), d.addEventListener("focusout", m, { capture: !0 }), u) {
      let h = ki(u), p = h.findIndex((k) => k.classList.contains("is-active")), b = h.findIndex((k) => !k.hasAttribute("aria-disabled")), x = h[0];
      p > -1 && (x = h[p]), b > -1 && (x = h[b]), x && x.focus();
    }
    l(() => {
      d.removeEventListener("focusin", f), d.removeEventListener("focusout", m);
    });
  }, { immediate: !0 }), Re(() => n, () => {
    let a = Cn(e);
    if (r.value = !n, n || !a) return;
    let o = ki(a);
    o.includes(document.activeElement) || o[0]?.focus();
  }, { immediate: !0 });
}
function Vv(e, { cycle: t = !0, direction: n = "bidirectional" } = {}) {
  rm(e, () => s(i(), !1));
  function i() {
    let a = ki(Pi(e)), o = a.findIndex((u) => u.classList.contains("is-active")), l = a.findIndex((u) => !u.hasAttribute("aria-disabled"));
    return o > -1 ? o : l > -1 ? l : 0;
  }
  function s(a, o = !0) {
    let l = ki(Pi(e));
    l.forEach((u, d) => u.tabIndex = d === a ? 0 : -1), o && l[a]?.focus();
  }
  function r(a) {
    let o = Pi(e), l = ki(o);
    if (!["Enter", " "].includes(a.key)) switch (n) {
      case "bidirectional":
        Rv(a, o, l, s);
        break;
      case "horizontal":
      case "vertical":
        zv(a, o, t, n, l, s);
        break;
    }
  }
  Re(e, (a, o, l) => {
    let u = Pi(e);
    u && (u.addEventListener("keydown", r), s(i(), !1), l(() => u.removeEventListener("keydown", r)));
  }, { immediate: !0 });
}
function Rv(e, t, n, i) {
  let s;
  switch (e.key) {
    case "ArrowUp":
      s = "up";
      break;
    case "ArrowDown":
      s = "down";
      break;
    case "ArrowLeft":
      s = "left";
      break;
    case "ArrowRight":
      s = "right";
      break;
    default:
      return;
  }
  let r = Cv(t, document.activeElement, s);
  r && i(n.indexOf(r)), e.preventDefault();
}
function zv(e, t, n, i, s, r) {
  let a;
  if (e.key === (i === "horizontal" ? "ArrowLeft" : "ArrowUp")) a = -1;
  else if (e.key === (i === "horizontal" ? "ArrowRight" : "ArrowDown")) a = 1;
  else return;
  let o = Av(t, a);
  o ? r(s.indexOf(o)) : n && r(a === 1 ? 0 : s.length - 1), e.preventDefault();
}
const Pv = "overlayView", Hv = "overlayProvider overlayView", Wv = "overlayShade overlayView", Uv = "overlay", qv = "overlayTransitionLeaveActive", jv = "slideOverTransitionLeaveActive", Gv = "basePaneStructure", Zv = "paneFooter", Yv = "isCurrent", Jv = "overlaySmall overlay", Xv = "overlayMedium overlay", Kv = "overlayLarge overlay", Qv = "slideOver overlay", e4 = "paneHeader", t4 = "tabs", n4 = "tabBar", i4 = "paneHeaderCaption", s4 = "overlayTransitionEnterActive", r4 = "overlayTransitionEnterFrom", a4 = "overlayTransitionLeaveTo", o4 = "slideOverTransitionEnterActive", l4 = "slideOverTransitionEnterFrom", u4 = "slideOverTransitionLeaveTo";
var Ht = { overlayView: Pv, overlayProvider: Hv, overlayShade: Wv, overlay: Uv, overlayTransitionLeaveActive: qv, slideOverTransitionLeaveActive: jv, basePaneStructure: Gv, paneFooter: Zv, isCurrent: Yv, overlaySmall: Jv, overlayMedium: Xv, overlayLarge: Kv, slideOver: Qv, paneHeader: e4, tabs: t4, tabBar: n4, paneHeaderCaption: i4, overlayTransitionEnterActive: s4, overlayTransitionEnterFrom: r4, overlayTransitionLeaveTo: a4, slideOverTransitionEnterActive: o4, slideOverTransitionEnterFrom: l4, slideOverTransitionLeaveTo: u4 };
const c4 = `.${Ht.overlayProvider.replaceAll(" ", ".")}`;
let d4 = 0;
function f4(e, t, n, i, s, r) {
  const a = `flux-dialog:${d4++}`;
  let o = null, l = 0;
  const u = ne();
  Nv(u), Ci(() => {
    o?.();
  }), Re(u, (f, m, h) => {
    f && (f.addEventListener("keydown", d, { passive: !0 }), f.focus(), h(() => {
      f.removeEventListener("keydown", d);
    }));
  });
  function d(f) {
    f.key !== "Escape" || !o || !t.isCloseable || n("close");
  }
  return () => {
    const { dialogCount: f } = ur(), m = Iv(i.default?.() ?? []), h = m.length > 0 && m.some((b) => b.type !== st);
    let p;
    return h ? (o || ([l, o] = cm()), p = ji("div", {
      key: t.viewKey ?? a,
      ref: u,
      class: [s, l === f && Ht.isCurrent],
      style: {
        zIndex: l + 1e3
      },
      tabindex: 0
    }, m)) : (o?.(), o = null), ji(Af, { defer: !0, disabled: !p, to: c4 }, [
      ji(r, e, {
        default: () => p
      })
    ]);
  };
}
function jl(e) {
  return e !== null && typeof e == "object" && !("value" in e);
}
function Ns(e) {
  return e !== null && typeof e == "object" && "value" in e;
}
const Vd = {
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
let am = {};
function h4(e) {
  am = Object.keys(e).reduce((t, n) => {
    if (!e[n])
      return t;
    const { icon: i, iconName: s } = e[n];
    return t[s] = i, Array.isArray(i[2]) && i[2].forEach((r) => t[r] = i), t;
  }, {});
}
const m4 = 6e3, Ne = un({
  dialogCount: 0,
  alerts: [],
  confirms: [],
  prompts: [],
  snackbars: [],
  tooltips: []
});
let Ya = 0, p4 = 0;
function om(e) {
  const t = ++Ya;
  return Ne.alerts.push({
    id: t,
    ...e
  }), t;
}
function lm(e) {
  const t = ++Ya;
  return Ne.confirms.push({
    id: t,
    ...e
  }), t;
}
function um(e) {
  const t = ++Ya;
  return Ne.prompts.push({
    id: t,
    ...e
  }), t;
}
function Ou(e) {
  const t = ++Ya;
  return Ne.snackbars.unshift({
    id: t,
    ...e
  }), t;
}
function g4(e) {
  const t = ++p4;
  return Ne.tooltips.push({
    id: t,
    ...e
  }), t;
}
function cm() {
  return [
    ++Ne.dialogCount,
    () => --Ne.dialogCount
  ];
}
function dm(e) {
  const t = Ne.alerts.findIndex((n) => n.id === e);
  Ne.alerts.splice(t, 1);
}
function Gl(e) {
  const t = Ne.confirms.findIndex((n) => n.id === e);
  Ne.confirms.splice(t, 1);
}
function Zl(e) {
  const t = Ne.prompts.findIndex((n) => n.id === e);
  Ne.prompts.splice(t, 1);
}
function ca(e) {
  const t = Ne.snackbars.findIndex((n) => n.id === e);
  Ne.snackbars.splice(t, 1);
}
function y4(e) {
  const t = Ne.tooltips.findIndex((n) => n.id === e);
  Ne.tooltips.splice(t, 1);
}
function fm(e, t) {
  const n = Ne.snackbars.findIndex((i) => i.id === e);
  Object.assign(Ne.snackbars[n], t);
}
function v4(e, t) {
  const n = Ne.tooltips.findIndex((i) => i.id === e);
  Object.assign(Ne.tooltips[n], t);
}
async function b4(e) {
  return new Promise((t) => {
    const n = om({
      ...e,
      onClose() {
        t(), dm(n);
      }
    });
  });
}
async function k4(e) {
  return new Promise((t) => {
    const n = lm({
      ...e,
      onCancel() {
        t(!1), Gl(n);
      },
      onConfirm() {
        t(!0), Gl(n);
      }
    });
  });
}
async function w4(e) {
  return new Promise((t) => {
    const n = um({
      ...e,
      onCancel() {
        t(!1), Zl(n);
      },
      onConfirm(i) {
        t(i), Zl(n);
      }
    });
  });
}
async function Rd({ duration: e, ...t }) {
  const n = Ou(t);
  await new Promise((i) => setTimeout(() => requestAnimationFrame(i), e ?? m4)), ca(n);
}
function ur() {
  const e = Me(() => Ne.dialogCount > 0), t = Me(() => Ne.tooltips[Ne.tooltips.length - 1] || null);
  return {
    ...Ne,
    inertMain: e,
    tooltip: t,
    addAlert: om,
    addConfirm: lm,
    addPrompt: um,
    addSnackbar: Ou,
    addTooltip: g4,
    registerDialog: cm,
    removeAlert: dm,
    removeConfirm: Gl,
    removePrompt: Zl,
    removeSnackbar: ca,
    removeTooltip: y4,
    showAlert: b4,
    showConfirm: k4,
    showPrompt: w4,
    showSnackbar: Rd,
    updateSnackbar: fm,
    updateTooltip: v4,
    showSnackbarSync: x4(Rd)
  };
}
function x4(e) {
  return (...t) => e(...t);
}
function Ki(e) {
  return typeof e == "string" || e instanceof String;
}
function zd(e) {
  var t;
  return typeof e == "object" && e != null && (e == null || (t = e.constructor) == null ? void 0 : t.name) === "Object";
}
function hm(e, t) {
  return Array.isArray(t) ? hm(e, (n, i) => t.includes(i)) : Object.entries(e).reduce((n, i) => {
    let [s, r] = i;
    return t(r, s) && (n[s] = r), n;
  }, {});
}
const le = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function S4(e) {
  switch (e) {
    case le.LEFT:
      return le.FORCE_LEFT;
    case le.RIGHT:
      return le.FORCE_RIGHT;
    default:
      return e;
  }
}
function Yl(e, t) {
  if (t === e) return !0;
  const n = Array.isArray(t), i = Array.isArray(e);
  let s;
  if (n && i) {
    if (t.length != e.length) return !1;
    for (s = 0; s < t.length; s++) if (!Yl(t[s], e[s])) return !1;
    return !0;
  }
  if (n != i) return !1;
  if (t && e && typeof t == "object" && typeof e == "object") {
    const r = t instanceof Date, a = e instanceof Date;
    if (r && a) return t.getTime() == e.getTime();
    if (r != a) return !1;
    const o = t instanceof RegExp, l = e instanceof RegExp;
    if (o && l) return t.toString() == e.toString();
    if (o != l) return !1;
    const u = Object.keys(t);
    for (s = 0; s < u.length; s++) if (!Object.prototype.hasOwnProperty.call(e, u[s])) return !1;
    for (s = 0; s < u.length; s++) if (!Yl(e[u[s]], t[u[s]])) return !1;
    return !0;
  } else if (t && e && typeof t == "function" && typeof e == "function")
    return t.toString() === e.toString();
  return !1;
}
class I4 {
  /** Current input value */
  /** Current cursor position */
  /** Old input value */
  /** Old selection */
  constructor(t) {
    for (Object.assign(this, t); this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos); )
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
function ke(e, t) {
  return new ke.InputMask(e, t);
}
function mm(e) {
  if (e == null) throw new Error("mask property should be defined");
  return e instanceof RegExp ? ke.MaskedRegExp : Ki(e) ? ke.MaskedPattern : e === Date ? ke.MaskedDate : e === Number ? ke.MaskedNumber : Array.isArray(e) || e === Array ? ke.MaskedDynamic : ke.Masked && e.prototype instanceof ke.Masked ? e : ke.Masked && e instanceof ke.Masked ? e.constructor : e instanceof Function ? ke.MaskedFunction : (console.warn("Mask not found for mask", e), ke.Masked);
}
function Jl(e) {
  if (!e) throw new Error("Options in not defined");
  if (ke.Masked) {
    if (e.prototype instanceof ke.Masked) return {
      mask: e
    };
    const {
      mask: t = void 0,
      ...n
    } = e instanceof ke.Masked ? {
      mask: e
    } : zd(e) && e.mask instanceof ke.Masked ? e : {};
    if (t) {
      const i = t.mask;
      return {
        ...hm(t, (s, r) => !r.startsWith("_")),
        mask: t.constructor,
        _mask: i,
        ...n
      };
    }
  }
  return zd(e) ? {
    ...e
  } : {
    mask: e
  };
}
function Ys(e) {
  if (ke.Masked && e instanceof ke.Masked) return e;
  const t = Jl(e), n = mm(t.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + t.mask + ", appropriate module needs to be imported manually before creating mask.");
  return t.mask === n && delete t.mask, t._mask && (t.mask = t._mask, delete t._mask), new n(t);
}
ke.createMask = Ys;
class Du {
  /** */
  /** */
  /** */
  /** Safely returns selection start */
  get selectionStart() {
    let t;
    try {
      t = this._unsafeSelectionStart;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely returns selection end */
  get selectionEnd() {
    let t;
    try {
      t = this._unsafeSelectionEnd;
    } catch {
    }
    return t ?? this.value.length;
  }
  /** Safely sets element selection */
  select(t, n) {
    if (!(t == null || n == null || t === this.selectionStart && n === this.selectionEnd))
      try {
        this._unsafeSelect(t, n);
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
ke.MaskElement = Du;
const Pd = 90, T4 = 89;
class Ja extends Du {
  /** HTMLElement to use mask on */
  constructor(t) {
    super(), this.input = t, this._onKeydown = this._onKeydown.bind(this), this._onInput = this._onInput.bind(this), this._onBeforeinput = this._onBeforeinput.bind(this), this._onCompositionEnd = this._onCompositionEnd.bind(this);
  }
  get rootElement() {
    var t, n, i;
    return (t = (n = (i = this.input).getRootNode) == null ? void 0 : n.call(i)) != null ? t : document;
  }
  /** Is element in focus */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }
  /** Binds HTMLElement events to mask internal events */
  bindEvents(t) {
    this.input.addEventListener("keydown", this._onKeydown), this.input.addEventListener("input", this._onInput), this.input.addEventListener("beforeinput", this._onBeforeinput), this.input.addEventListener("compositionend", this._onCompositionEnd), this.input.addEventListener("drop", t.drop), this.input.addEventListener("click", t.click), this.input.addEventListener("focus", t.focus), this.input.addEventListener("blur", t.commit), this._handlers = t;
  }
  _onKeydown(t) {
    if (this._handlers.redo && (t.keyCode === Pd && t.shiftKey && (t.metaKey || t.ctrlKey) || t.keyCode === T4 && t.ctrlKey))
      return t.preventDefault(), this._handlers.redo(t);
    if (this._handlers.undo && t.keyCode === Pd && (t.metaKey || t.ctrlKey))
      return t.preventDefault(), this._handlers.undo(t);
    t.isComposing || this._handlers.selectionChange(t);
  }
  _onBeforeinput(t) {
    if (t.inputType === "historyUndo" && this._handlers.undo)
      return t.preventDefault(), this._handlers.undo(t);
    if (t.inputType === "historyRedo" && this._handlers.redo)
      return t.preventDefault(), this._handlers.redo(t);
  }
  _onCompositionEnd(t) {
    this._handlers.input(t);
  }
  _onInput(t) {
    t.isComposing || this._handlers.input(t);
  }
  /** Unbinds HTMLElement events to mask internal events */
  unbindEvents() {
    this.input.removeEventListener("keydown", this._onKeydown), this.input.removeEventListener("input", this._onInput), this.input.removeEventListener("beforeinput", this._onBeforeinput), this.input.removeEventListener("compositionend", this._onCompositionEnd), this.input.removeEventListener("drop", this._handlers.drop), this.input.removeEventListener("click", this._handlers.click), this.input.removeEventListener("focus", this._handlers.focus), this.input.removeEventListener("blur", this._handlers.commit), this._handlers = {};
  }
}
ke.HTMLMaskElement = Ja;
class C4 extends Ja {
  /** InputElement to use mask on */
  constructor(t) {
    super(t), this.input = t;
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
  _unsafeSelect(t, n) {
    this.input.setSelectionRange(t, n);
  }
  get value() {
    return this.input.value;
  }
  set value(t) {
    this.input.value = t;
  }
}
ke.HTMLMaskElement = Ja;
class pm extends Ja {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), i = n && n.anchorOffset, s = n && n.focusOffset;
    return s == null || i == null || i < s ? i : s;
  }
  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const t = this.rootElement, n = t.getSelection && t.getSelection(), i = n && n.anchorOffset, s = n && n.focusOffset;
    return s == null || i == null || i > s ? i : s;
  }
  /** Sets HTMLElement selection */
  _unsafeSelect(t, n) {
    if (!this.rootElement.createRange) return;
    const i = this.rootElement.createRange();
    i.setStart(this.input.firstChild || this.input, t), i.setEnd(this.input.lastChild || this.input, n);
    const s = this.rootElement, r = s.getSelection && s.getSelection();
    r && (r.removeAllRanges(), r.addRange(i));
  }
  /** HTMLElement value */
  get value() {
    return this.input.textContent || "";
  }
  set value(t) {
    this.input.textContent = t;
  }
}
ke.HTMLContenteditableMaskElement = pm;
class Xa {
  constructor() {
    this.states = [], this.currentIndex = 0;
  }
  get currentState() {
    return this.states[this.currentIndex];
  }
  get isEmpty() {
    return this.states.length === 0;
  }
  push(t) {
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(t), this.states.length > Xa.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
  }
  go(t) {
    return this.currentIndex = Math.min(Math.max(this.currentIndex + t, 0), this.states.length - 1), this.currentState;
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
Xa.MAX_LENGTH = 100;
class M4 {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(t, n) {
    this.el = t instanceof Du ? t : t.isContentEditable && t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" ? new pm(t) : new C4(t), this.masked = Ys(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Xa(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
  }
  maskEquals(t) {
    var n;
    return t == null || ((n = this.masked) == null ? void 0 : n.maskEquals(t));
  }
  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(t) {
    if (this.maskEquals(t)) return;
    if (!(t instanceof ke.Masked) && this.masked.constructor === mm(t)) {
      this.masked.updateOptions({
        mask: t
      });
      return;
    }
    const n = t instanceof ke.Masked ? t : Ys({
      mask: t
    });
    n.unmaskedValue = this.masked.unmaskedValue, this.masked = n;
  }
  /** Raw value */
  get value() {
    return this._value;
  }
  set value(t) {
    this.value !== t && (this.masked.value = t, this.updateControl("auto"));
  }
  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(t) {
    this.unmaskedValue !== t && (this.masked.unmaskedValue = t, this.updateControl("auto"));
  }
  /** Raw input value */
  get rawInputValue() {
    return this._rawInputValue;
  }
  set rawInputValue(t) {
    this.rawInputValue !== t && (this.masked.rawInputValue = t, this.updateControl(), this.alignCursor());
  }
  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(t) {
    this.masked.typedValueEquals(t) || (this.masked.typedValue = t, this.updateControl("auto"));
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
  _fireEvent(t, n) {
    const i = this._listeners[t];
    i && i.forEach((s) => s(n));
  }
  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }
  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(t) {
    !this.el || !this.el.isActive || (this.el.select(t, t), this._saveSelection());
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
  updateControl(t) {
    const n = this.masked.unmaskedValue, i = this.masked.value, s = this.masked.rawInputValue, r = this.displayValue, a = this.unmaskedValue !== n || this.value !== i || this._rawInputValue !== s;
    this._unmaskedValue = n, this._value = i, this._rawInputValue = s, this.el.value !== r && (this.el.value = r), t === "auto" ? this.alignCursor() : t != null && (this.cursorPos = t), a && this._fireChangeEvents(), !this._historyChanging && (a || this.history.isEmpty) && this.history.push({
      unmaskedValue: n,
      selection: {
        start: this.selectionStart,
        end: this.cursorPos
      }
    });
  }
  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(t) {
    const {
      mask: n,
      ...i
    } = t, s = !this.maskEquals(n), r = this.masked.optionsIsChanged(i);
    s && (this.mask = n), r && this.masked.updateOptions(i), (s || r) && this.updateControl();
  }
  /** Updates cursor */
  updateCursor(t) {
    t != null && (this.cursorPos = t, this._delayUpdateCursor(t));
  }
  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(t) {
    this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(() => {
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
  on(t, n) {
    return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(n), this;
  }
  /** Removes custom event listener */
  off(t, n) {
    if (!this._listeners[t]) return this;
    if (!n)
      return delete this._listeners[t], this;
    const i = this._listeners[t].indexOf(n);
    return i >= 0 && this._listeners[t].splice(i, 1), this;
  }
  /** Handles view input event */
  _onInput(t) {
    this._inputEvent = t, this._abortUpdateCursor();
    const n = new I4({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), i = this.masked.rawInputValue, s = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, r = i === this.masked.rawInputValue ? n.removeDirection : le.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + s, r);
    r !== le.NONE && (a = this.masked.nearestInputPos(a, le.NONE)), this.updateControl(a), delete this._inputEvent;
  }
  /** Handles view change event and commits model value */
  _onChange() {
    this.displayValue !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
  }
  /** Handles view drop event, prevents by default */
  _onDrop(t) {
    t.preventDefault(), t.stopPropagation();
  }
  /** Restore last selection on focus */
  _onFocus(t) {
    this.alignCursorFriendly();
  }
  /** Restore last selection on focus */
  _onClick(t) {
    this.alignCursorFriendly();
  }
  _onUndo() {
    this._applyHistoryState(this.history.undo());
  }
  _onRedo() {
    this._applyHistoryState(this.history.redo());
  }
  _applyHistoryState(t) {
    t && (this._historyChanging = !0, this.unmaskedValue = t.unmaskedValue, this.el.select(t.selection.start, t.selection.end), this._saveSelection(), this._historyChanging = !1);
  }
  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents(), this._listeners.length = 0, delete this.el;
  }
}
ke.InputMask = M4;
class Ae {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(t) {
    return Array.isArray(t) ? t : [t, new Ae()];
  }
  constructor(t) {
    Object.assign(this, {
      inserted: "",
      rawInserted: "",
      tailShift: 0,
      skip: !1
    }, t);
  }
  /** Aggregate changes */
  aggregate(t) {
    return this.inserted += t.inserted, this.rawInserted += t.rawInserted, this.tailShift += t.tailShift, this.skip = this.skip || t.skip, this;
  }
  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
  get consumed() {
    return !!this.rawInserted || this.skip;
  }
  equals(t) {
    return this.inserted === t.inserted && this.tailShift === t.tailShift && this.rawInserted === t.rawInserted && this.skip === t.skip;
  }
}
ke.ChangeDetails = Ae;
class bn {
  /** Tail value as string */
  /** Tail start position */
  /** Start position */
  constructor(t, n, i) {
    t === void 0 && (t = ""), n === void 0 && (n = 0), this.value = t, this.from = n, this.stop = i;
  }
  toString() {
    return this.value;
  }
  extend(t) {
    this.value += String(t);
  }
  appendTo(t) {
    return t.append(this.toString(), {
      tail: !0
    }).aggregate(t._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(t) {
    Object.assign(this, t);
  }
  unshift(t) {
    if (!this.value.length || t != null && this.from >= t) return "";
    const n = this.value[0];
    return this.value = this.value.slice(1), n;
  }
  shift() {
    if (!this.value.length) return "";
    const t = this.value[this.value.length - 1];
    return this.value = this.value.slice(0, -1), t;
  }
}
class on {
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
  constructor(t) {
    this._value = "", this._update({
      ...on.DEFAULTS,
      ...t
    }), this._initialized = !0;
  }
  /** Sets and applies new options */
  updateOptions(t) {
    this.optionsIsChanged(t) && this.withValueRefresh(this._update.bind(this, t));
  }
  /** Sets new options */
  _update(t) {
    Object.assign(this, t);
  }
  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value;
  }
  /** Resets value */
  reset() {
    this._value = "";
  }
  get value() {
    return this._value;
  }
  set value(t) {
    this.resolve(t, {
      input: !0
    });
  }
  /** Resolve new value */
  resolve(t, n) {
    n === void 0 && (n = {
      input: !0
    }), this.reset(), this.append(t, n, ""), this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(t) {
    this.resolve(t, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(t) {
    this.format ? this.value = this.format(t, this) : this.unmaskedValue = String(t);
  }
  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: !0
    });
  }
  set rawInputValue(t) {
    this.resolve(t, {
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
  nearestInputPos(t, n) {
    return t;
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), Math.min(this.displayValue.length, n - t);
  }
  /** Extracts value in range considering flags */
  extractInput(t, n, i) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this.displayValue.slice(t, n);
  }
  /** Extracts tail in range */
  extractTail(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), new bn(this.extractInput(t, n), t);
  }
  /** Appends tail */
  appendTail(t) {
    return Ki(t) && (t = new bn(String(t))), t.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(t, n) {
    return t ? (this._value += t, new Ae({
      inserted: t,
      rawInserted: t
    })) : new Ae();
  }
  /** Appends char */
  _appendChar(t, n, i) {
    n === void 0 && (n = {});
    const s = this.state;
    let r;
    if ([t, r] = this.doPrepareChar(t, n), t && (r = r.aggregate(this._appendCharRaw(t, n)), !r.rawInserted && this.autofix === "pad")) {
      const a = this.state;
      this.state = s;
      let o = this.pad(n);
      const l = this._appendCharRaw(t, n);
      o = o.aggregate(l), l.rawInserted || o.equals(r) ? r = o : this.state = a;
    }
    if (r.inserted) {
      let a, o = this.doValidate(n) !== !1;
      if (o && i != null) {
        const l = this.state;
        if (this.overwrite === !0) {
          a = i.state;
          for (let d = 0; d < r.rawInserted.length; ++d)
            i.unshift(this.displayValue.length - r.tailShift);
        }
        let u = this.appendTail(i);
        if (o = u.rawInserted.length === i.toString().length, !(o && u.inserted) && this.overwrite === "shift") {
          this.state = l, a = i.state;
          for (let d = 0; d < r.rawInserted.length; ++d)
            i.shift();
          u = this.appendTail(i), o = u.rawInserted.length === i.toString().length;
        }
        o && u.inserted && (this.state = l);
      }
      o || (r = new Ae(), this.state = s, i && a && (i.state = a));
    }
    return r;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new Ae();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new Ae();
  }
  /** Appends symbols considering flags */
  append(t, n, i) {
    if (!Ki(t)) throw new Error("value should be string");
    const s = Ki(i) ? new bn(String(i)) : i;
    n != null && n.tail && (n._beforeTailState = this.state);
    let r;
    [t, r] = this.doPrepare(t, n);
    for (let a = 0; a < t.length; ++a) {
      const o = this._appendChar(t[a], n, s);
      if (!o.rawInserted && !this.doSkipInvalid(t[a], n, s)) break;
      r.aggregate(o);
    }
    return (this.eager === !0 || this.eager === "append") && n != null && n.input && t && r.aggregate(this._appendEager()), s != null && (r.tailShift += this.appendTail(s).tailShift), r;
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, t) + this.displayValue.slice(n), new Ae();
  }
  /** Calls function and reapplies current value */
  withValueRefresh(t) {
    if (this._refreshing || !this._initialized) return t();
    this._refreshing = !0;
    const n = this.rawInputValue, i = this.value, s = t();
    return this.rawInputValue = n, this.value && this.value !== i && i.indexOf(this.value) === 0 && (this.append(i.slice(this.displayValue.length), {}, ""), this.doCommit()), delete this._refreshing, s;
  }
  runIsolated(t) {
    if (this._isolated || !this._initialized) return t(this);
    this._isolated = !0;
    const n = this.state, i = t(this);
    return this.state = n, delete this._isolated, i;
  }
  doSkipInvalid(t, n, i) {
    return !!this.skipInvalid;
  }
  /** Prepares string before mask processing */
  doPrepare(t, n) {
    return n === void 0 && (n = {}), Ae.normalize(this.prepare ? this.prepare(t, this, n) : t);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(t, n) {
    return n === void 0 && (n = {}), Ae.normalize(this.prepareChar ? this.prepareChar(t, this, n) : t);
  }
  /** Validates if value is acceptable */
  doValidate(t) {
    return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
  }
  /** Does additional processing at the end of editing */
  doCommit() {
    this.commit && this.commit(this.value, this);
  }
  splice(t, n, i, s, r) {
    i === void 0 && (i = ""), s === void 0 && (s = le.NONE), r === void 0 && (r = {
      input: !0
    });
    const a = t + n, o = this.extractTail(a), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (s = S4(s), u = this.extractInput(0, a, {
      raw: !0
    }));
    let d = t;
    const f = new Ae();
    if (s !== le.NONE && (d = this.nearestInputPos(t, n > 1 && t !== 0 && !l ? le.NONE : s), f.tailShift = d - t), f.aggregate(this.remove(d)), l && s !== le.NONE && u === this.rawInputValue)
      if (s === le.FORCE_LEFT) {
        let m;
        for (; u === this.rawInputValue && (m = this.displayValue.length); )
          f.aggregate(new Ae({
            tailShift: -1
          })).aggregate(this.remove(m - 1));
      } else s === le.FORCE_RIGHT && o.unshift();
    return f.aggregate(this.append(i, r, o));
  }
  maskEquals(t) {
    return this.mask === t;
  }
  optionsIsChanged(t) {
    return !Yl(this, t);
  }
  typedValueEquals(t) {
    const n = this.typedValue;
    return t === n || on.EMPTY_VALUES.includes(t) && on.EMPTY_VALUES.includes(n) || (this.format ? this.format(t, this) === this.format(this.typedValue, this) : !1);
  }
  pad(t) {
    return new Ae();
  }
}
on.DEFAULTS = {
  skipInvalid: !0
};
on.EMPTY_VALUES = [void 0, null, ""];
ke.Masked = on;
class gi {
  /** */
  constructor(t, n) {
    t === void 0 && (t = []), n === void 0 && (n = 0), this.chunks = t, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(t) {
    if (!String(t)) return;
    t = Ki(t) ? new bn(String(t)) : t;
    const n = this.chunks[this.chunks.length - 1], i = n && // if stops are same or tail has no stop
    (n.stop === t.stop || t.stop == null) && // if tail chunk goes just after last chunk
    t.from === n.from + n.toString().length;
    if (t instanceof bn)
      i ? n.extend(t.toString()) : this.chunks.push(t);
    else if (t instanceof gi) {
      if (t.stop == null) {
        let s;
        for (; t.chunks.length && t.chunks[0].stop == null; )
          s = t.chunks.shift(), s.from += t.from, this.extend(s);
      }
      t.toString() && (t.stop = t.blockIndex, this.chunks.push(t));
    }
  }
  appendTo(t) {
    if (!(t instanceof ke.MaskedPattern))
      return new bn(this.toString()).appendTo(t);
    const n = new Ae();
    for (let i = 0; i < this.chunks.length; ++i) {
      const s = this.chunks[i], r = t._mapPosToBlock(t.displayValue.length), a = s.stop;
      let o;
      if (a != null && // if block not found or stop is behind lastBlock
      (!r || r.index <= a) && ((s instanceof gi || // for continuous block also check if stop is exist
      t._stops.indexOf(a) >= 0) && n.aggregate(t._appendPlaceholder(a)), o = s instanceof gi && t._blocks[a]), o) {
        const l = o.appendTail(s);
        n.aggregate(l);
        const u = s.toString().slice(l.rawInserted.length);
        u && n.aggregate(t.append(u, {
          tail: !0
        }));
      } else
        n.aggregate(t.append(s.toString(), {
          tail: !0
        }));
    }
    return n;
  }
  get state() {
    return {
      chunks: this.chunks.map((t) => t.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(t) {
    const {
      chunks: n,
      ...i
    } = t;
    Object.assign(this, i), this.chunks = n.map((s) => {
      const r = "chunks" in s ? new gi() : new bn();
      return r.state = s, r;
    });
  }
  unshift(t) {
    if (!this.chunks.length || t != null && this.from >= t) return "";
    const n = t != null ? t - this.from : t;
    let i = 0;
    for (; i < this.chunks.length; ) {
      const s = this.chunks[i], r = s.unshift(n);
      if (s.toString()) {
        if (!r) break;
        ++i;
      } else
        this.chunks.splice(i, 1);
      if (r) return r;
    }
    return "";
  }
  shift() {
    if (!this.chunks.length) return "";
    let t = this.chunks.length - 1;
    for (; 0 <= t; ) {
      const n = this.chunks[t], i = n.shift();
      if (n.toString()) {
        if (!i) break;
        --t;
      } else
        this.chunks.splice(t, 1);
      if (i) return i;
    }
    return "";
  }
}
class E4 {
  constructor(t, n) {
    this.masked = t, this._log = [];
    const {
      offset: i,
      index: s
    } = t._mapPosToBlock(n) || (n < 0 ? (
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
    this.offset = i, this.index = s, this.ok = !1;
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
  set state(t) {
    Object.assign(this, t);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const t = this._log.pop();
    return t && (this.state = t), t;
  }
  bindBlock() {
    this.block || (this.index < 0 && (this.index = 0, this.offset = 0), this.index >= this.masked._blocks.length && (this.index = this.masked._blocks.length - 1, this.offset = this.block.displayValue.length));
  }
  _pushLeft(t) {
    for (this.pushState(), this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((n = this.block) == null ? void 0 : n.displayValue.length) || 0) {
      var n;
      if (t()) return this.ok = !0;
    }
    return this.ok = !1;
  }
  _pushRight(t) {
    for (this.pushState(), this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0)
      if (t()) return this.ok = !0;
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
class gm {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    Object.assign(this, t), this._value = "", this.isFixed = !0;
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
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, t) + this._value.slice(n), this._value || (this._isRawInput = !1), new Ae();
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = le.NONE);
    const i = 0, s = this._value.length;
    switch (n) {
      case le.LEFT:
      case le.FORCE_LEFT:
        return i;
      case le.NONE:
      case le.RIGHT:
      case le.FORCE_RIGHT:
      default:
        return s;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), this._isRawInput ? n - t : 0;
  }
  extractInput(t, n, i) {
    return t === void 0 && (t = 0), n === void 0 && (n = this._value.length), i === void 0 && (i = {}), i.raw && this._isRawInput && this._value.slice(t, n) || "";
  }
  get isComplete() {
    return !0;
  }
  get isFilled() {
    return !!this._value;
  }
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new Ae();
    const i = this.eager === !0 || this.eager === "append", r = this.char === t && (this.isUnmasking || n.input || n.raw) && (!n.raw || !i) && !n.tail, a = new Ae({
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
    const t = new Ae();
    return this.isFilled || (this._value = t.inserted = this.char), t;
  }
  extractTail() {
    return new bn("");
  }
  appendTail(t) {
    return Ki(t) && (t = new bn(String(t))), t.appendTo(this);
  }
  append(t, n, i) {
    const s = this._appendChar(t[0], n);
    return i != null && (s.tailShift += this.appendTail(i).tailShift), s;
  }
  doCommit() {
  }
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(t) {
    this._value = t._value, this._isRawInput = !!t._rawInputValue;
  }
  pad(t) {
    return this._appendPlaceholder();
  }
}
class da {
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  /** */
  constructor(t) {
    const {
      parent: n,
      isOptional: i,
      placeholderChar: s,
      displayChar: r,
      lazy: a,
      eager: o,
      ...l
    } = t;
    this.masked = Ys(l), Object.assign(this, {
      parent: n,
      isOptional: i,
      placeholderChar: s,
      displayChar: r,
      lazy: a,
      eager: o
    });
  }
  reset() {
    this.isFilled = !1, this.masked.reset();
  }
  remove(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), t === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(t, n)) : new Ae();
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
  _appendChar(t, n) {
    if (n === void 0 && (n = {}), this.isFilled) return new Ae();
    const i = this.masked.state;
    let s = this.masked._appendChar(t, this.currentMaskFlags(n));
    return s.inserted && this.doValidate(n) === !1 && (s = new Ae(), this.masked.state = i), !s.inserted && !this.isOptional && !this.lazy && !n.input && (s.inserted = this.placeholderChar), s.skip = !s.inserted && !this.isOptional, this.isFilled = !!s.inserted, s;
  }
  append(t, n, i) {
    return this.masked.append(t, this.currentMaskFlags(n), i);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new Ae() : (this.isFilled = !0, new Ae({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new Ae();
  }
  extractTail(t, n) {
    return this.masked.extractTail(t, n);
  }
  appendTail(t) {
    return this.masked.appendTail(t);
  }
  extractInput(t, n, i) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.masked.extractInput(t, n, i);
  }
  nearestInputPos(t, n) {
    n === void 0 && (n = le.NONE);
    const i = 0, s = this.value.length, r = Math.min(Math.max(t, i), s);
    switch (n) {
      case le.LEFT:
      case le.FORCE_LEFT:
        return this.isComplete ? r : i;
      case le.RIGHT:
      case le.FORCE_RIGHT:
        return this.isComplete ? r : s;
      case le.NONE:
      default:
        return r;
    }
  }
  totalInputPositions(t, n) {
    return t === void 0 && (t = 0), n === void 0 && (n = this.value.length), this.value.slice(t, n).length;
  }
  doValidate(t) {
    return this.masked.doValidate(this.currentMaskFlags(t)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(t)));
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
  set state(t) {
    this.masked.state = t.masked, this.isFilled = t.isFilled;
  }
  currentMaskFlags(t) {
    var n;
    return {
      ...t,
      _beforeTailState: (t == null || (n = t._beforeTailState) == null ? void 0 : n.masked) || t?._beforeTailState
    };
  }
  pad(t) {
    return new Ae();
  }
}
da.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class $4 extends on {
  /** */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    const n = t.mask;
    n && (t.validate = (i) => i.search(n) >= 0), super._update(t);
  }
}
ke.MaskedRegExp = $4;
class ln extends on {
  /** */
  /** */
  /** Single char for empty input */
  /** Single char for filled input */
  /** Show placeholder only when needed */
  /** Enable characters overwriting */
  /** */
  /** */
  /** */
  constructor(t) {
    super({
      ...ln.DEFAULTS,
      ...t,
      definitions: Object.assign({}, da.DEFAULT_DEFINITIONS, t?.definitions)
    });
  }
  updateOptions(t) {
    super.updateOptions(t);
  }
  _update(t) {
    t.definitions = Object.assign({}, this.definitions, t.definitions), super._update(t), this._rebuildMask();
  }
  _rebuildMask() {
    const t = this.definitions;
    this._blocks = [], this.exposeBlock = void 0, this._stops = [], this._maskedBlocks = {};
    const n = this.mask;
    if (!n || !t) return;
    let i = !1, s = !1;
    for (let r = 0; r < n.length; ++r) {
      if (this.blocks) {
        const u = n.slice(r), d = Object.keys(this.blocks).filter((m) => u.indexOf(m) === 0);
        d.sort((m, h) => h.length - m.length);
        const f = d[0];
        if (f) {
          const {
            expose: m,
            repeat: h,
            ...p
          } = Jl(this.blocks[f]), b = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...p,
            repeat: h,
            parent: this
          }, x = h != null ? new ke.RepeatBlock(
            b
            /* TODO */
          ) : Ys(b);
          x && (this._blocks.push(x), m && (this.exposeBlock = x), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), r += f.length - 1;
          continue;
        }
      }
      let a = n[r], o = a in t;
      if (a === ln.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (a === "{" || a === "}") {
        i = !i;
        continue;
      }
      if (a === "[" || a === "]") {
        s = !s;
        continue;
      }
      if (a === ln.ESCAPE_CHAR) {
        if (++r, a = n[r], !a) break;
        o = !1;
      }
      const l = o ? new da({
        isOptional: s,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Jl(t[a]),
        parent: this
      }) : new gm({
        char: a,
        eager: this.eager,
        isUnmasking: i
      });
      this._blocks.push(l);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map((t) => t.state)
    };
  }
  set state(t) {
    if (!t) {
      this.reset();
      return;
    }
    const {
      _blocks: n,
      ...i
    } = t;
    this._blocks.forEach((s, r) => s.state = n[r]), super.state = i;
  }
  reset() {
    super.reset(), this._blocks.forEach((t) => t.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every((t) => t.isComplete);
  }
  get isFilled() {
    return this._blocks.every((t) => t.isFilled);
  }
  get isFixed() {
    return this._blocks.every((t) => t.isFixed);
  }
  get isOptional() {
    return this._blocks.every((t) => t.isOptional);
  }
  doCommit() {
    this._blocks.forEach((t) => t.doCommit()), super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((t, n) => t += n.unmaskedValue, "");
  }
  set unmaskedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = t, this.appendTail(n), this.doCommit();
    } else super.unmaskedValue = t;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value : (
      // TODO return _value when not in change?
      this._blocks.reduce((t, n) => t += n.value, "")
    );
  }
  set value(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = t, this.appendTail(n), this.doCommit();
    } else super.value = t;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(t) {
    if (this.exposeBlock) {
      const n = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = t, this.appendTail(n), this.doCommit();
    } else super.typedValue = t;
  }
  get displayValue() {
    return this._blocks.reduce((t, n) => t += n.displayValue, "");
  }
  appendTail(t) {
    return super.appendTail(t).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var t;
    const n = new Ae();
    let i = (t = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : t.index;
    if (i == null) return n;
    this._blocks[i].isFilled && ++i;
    for (let s = i; s < this._blocks.length; ++s) {
      const r = this._blocks[s]._appendEager();
      if (!r.inserted) break;
      n.aggregate(r);
    }
    return n;
  }
  _appendCharRaw(t, n) {
    n === void 0 && (n = {});
    const i = this._mapPosToBlock(this.displayValue.length), s = new Ae();
    if (!i) return s;
    for (let a = i.index, o; o = this._blocks[a]; ++a) {
      var r;
      const l = o._appendChar(t, {
        ...n,
        _beforeTailState: (r = n._beforeTailState) == null || (r = r._blocks) == null ? void 0 : r[a]
      });
      if (s.aggregate(l), l.consumed) break;
    }
    return s;
  }
  extractTail(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const i = new gi();
    return t === n || this._forEachBlocksInRange(t, n, (s, r, a, o) => {
      const l = s.extractTail(a, o);
      l.stop = this._findStopBefore(r), l.from = this._blockStartPos(r), l instanceof gi && (l.blockIndex = r), i.extend(l);
    }), i;
  }
  extractInput(t, n, i) {
    if (t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length), i === void 0 && (i = {}), t === n) return "";
    let s = "";
    return this._forEachBlocksInRange(t, n, (r, a, o, l) => {
      s += r.extractInput(o, l, i);
    }), s;
  }
  _findStopBefore(t) {
    let n;
    for (let i = 0; i < this._stops.length; ++i) {
      const s = this._stops[i];
      if (s <= t) n = s;
      else break;
    }
    return n;
  }
  /** Appends placeholder depending on laziness */
  _appendPlaceholder(t) {
    const n = new Ae();
    if (this.lazy && t == null) return n;
    const i = this._mapPosToBlock(this.displayValue.length);
    if (!i) return n;
    const s = i.index, r = t ?? this._blocks.length;
    return this._blocks.slice(s, r).forEach((a) => {
      if (!a.lazy || t != null) {
        var o;
        n.aggregate(a._appendPlaceholder((o = a._blocks) == null ? void 0 : o.length));
      }
    }), n;
  }
  /** Finds block in pos */
  _mapPosToBlock(t) {
    let n = "";
    for (let i = 0; i < this._blocks.length; ++i) {
      const s = this._blocks[i], r = n.length;
      if (n += s.displayValue, t <= n.length)
        return {
          index: i,
          offset: t - r
        };
    }
  }
  _blockStartPos(t) {
    return this._blocks.slice(0, t).reduce((n, i) => n += i.displayValue.length, 0);
  }
  _forEachBlocksInRange(t, n, i) {
    n === void 0 && (n = this.displayValue.length);
    const s = this._mapPosToBlock(t);
    if (s) {
      const r = this._mapPosToBlock(n), a = r && s.index === r.index, o = s.offset, l = r && a ? r.offset : this._blocks[s.index].displayValue.length;
      if (i(this._blocks[s.index], s.index, o, l), r && !a) {
        for (let u = s.index + 1; u < r.index; ++u)
          i(this._blocks[u], u, 0, this._blocks[u].displayValue.length);
        i(this._blocks[r.index], r.index, 0, r.offset);
      }
    }
  }
  remove(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    const i = super.remove(t, n);
    return this._forEachBlocksInRange(t, n, (s, r, a, o) => {
      i.aggregate(s.remove(a, o));
    }), i;
  }
  nearestInputPos(t, n) {
    if (n === void 0 && (n = le.NONE), !this._blocks.length) return 0;
    const i = new E4(this, t);
    if (n === le.NONE)
      return i.pushRightBeforeInput() || (i.popState(), i.pushLeftBeforeInput()) ? i.pos : this.displayValue.length;
    if (n === le.LEFT || n === le.FORCE_LEFT) {
      if (n === le.LEFT) {
        if (i.pushRightBeforeFilled(), i.ok && i.pos === t) return t;
        i.popState();
      }
      if (i.pushLeftBeforeInput(), i.pushLeftBeforeRequired(), i.pushLeftBeforeFilled(), n === le.LEFT) {
        if (i.pushRightBeforeInput(), i.pushRightBeforeRequired(), i.ok && i.pos <= t || (i.popState(), i.ok && i.pos <= t)) return i.pos;
        i.popState();
      }
      return i.ok ? i.pos : n === le.FORCE_LEFT ? 0 : (i.popState(), i.ok || (i.popState(), i.ok) ? i.pos : 0);
    }
    return n === le.RIGHT || n === le.FORCE_RIGHT ? (i.pushRightBeforeInput(), i.pushRightBeforeRequired(), i.pushRightBeforeFilled() ? i.pos : n === le.FORCE_RIGHT ? this.displayValue.length : (i.popState(), i.ok || (i.popState(), i.ok) ? i.pos : this.nearestInputPos(t, le.LEFT))) : t;
  }
  totalInputPositions(t, n) {
    t === void 0 && (t = 0), n === void 0 && (n = this.displayValue.length);
    let i = 0;
    return this._forEachBlocksInRange(t, n, (s, r, a, o) => {
      i += s.totalInputPositions(a, o);
    }), i;
  }
  /** Get block by name */
  maskedBlock(t) {
    return this.maskedBlocks(t)[0];
  }
  /** Get all blocks by name */
  maskedBlocks(t) {
    const n = this._maskedBlocks[t];
    return n ? n.map((i) => this._blocks[i]) : [];
  }
  pad(t) {
    const n = new Ae();
    return this._forEachBlocksInRange(0, this.displayValue.length, (i) => n.aggregate(i.pad(t))), n;
  }
}
ln.DEFAULTS = {
  ...on.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
ln.STOP_CHAR = "`";
ln.ESCAPE_CHAR = "\\";
ln.InputDefinition = da;
ln.FixedDefinition = gm;
ke.MaskedPattern = ln;
function A4(e) {
  return ke(e, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aaaaaa##[000]",
    prepareChar: (t) => t.toUpperCase()
  });
}
function F4(e) {
  return ke(e, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa00 #### 0000 0000[ 0000 0000 0000 0000]",
    prepareChar: (t) => t.toUpperCase()
  });
}
function L4(e) {
  return ke(e, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa########[#####]",
    prepareChar: (t) => t.toUpperCase()
  });
}
var O4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  bic: A4,
  iban: F4,
  vat: L4
});
function D4() {
  return kn(ph, ne(!1));
}
function hs(e) {
  const t = D4();
  return Me(() => c(e) || c(t));
}
function Bu() {
  return kn(gh, {
    id: ou()
  });
}
const B4 = "basePane", _4 = "basePaneLoader", N4 = "basePaneStructure basePane", V4 = "basePaneElement", R4 = "form", z4 = "paneHeader";
var Ka = { basePane: B4, basePaneLoader: _4, basePaneStructure: N4, basePaneElement: V4, form: R4, paneHeader: z4 };
const { basePane: Ln } = Ka, P4 = "icon", H4 = "fontAwesomeIcon icon", W4 = `iconBoxed ${Ln}`, U4 = `iconBoxedDefault iconBoxed ${Ln}`, q4 = `iconBoxedColored iconBoxed ${Ln}`, j4 = `iconBoxedGray iconBoxedColored iconBoxed ${Ln}`, G4 = `iconBoxedPrimary iconBoxedColored iconBoxed ${Ln}`, Z4 = `iconBoxedDanger iconBoxedColored iconBoxed ${Ln}`, Y4 = `iconBoxedInfo iconBoxedColored iconBoxed ${Ln}`, J4 = `iconBoxedSuccess iconBoxedColored iconBoxed ${Ln}`, X4 = `iconBoxedWarning iconBoxedColored iconBoxed ${Ln}`;
var Hd = { icon: P4, fontAwesomeIcon: H4, iconBoxed: W4, iconBoxedDefault: U4, iconBoxedColored: q4, iconBoxedGray: j4, iconBoxedPrimary: G4, iconBoxedDanger: Z4, iconBoxedInfo: Y4, iconBoxedSuccess: J4, iconBoxedWarning: X4 };
const K4 = ["viewBox"], Q4 = ["d"];
var ft = /* @__PURE__ */ q({
  __name: "FluxIcon",
  props: {
    size: {},
    name: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t, i = Me(() => {
      if (!e.name)
        return null;
      const r = am[e.name];
      return r ? {
        width: r[0],
        height: r[1],
        paths: Array.isArray(r[4]) ? r[4] : [r[4]],
        scale: Math.max(1, r[0] / 512)
      } : (Fv(`Unknown icon: ${e.name}`), null);
    }), s = (r) => n("click", r);
    return (r, a) => i.value ? (y(), z("svg", {
      key: 0,
      viewBox: `0 0 ${i.value.width} ${i.value.height}`,
      class: E(c(Hd).fontAwesomeIcon),
      style: wt({
        fontSize: e.size && `${e.size}px`,
        scale: i.value.scale > 1 ? i.value.scale : void 0
      }),
      focusable: "false",
      role: "img",
      "aria-hidden": "true",
      onClick: s
    }, [
      (y(!0), z(pe, null, kt(i.value.paths, (o) => (y(), z("path", {
        d: o,
        fill: "currentColor"
      }, null, 8, Q4))), 256))
    ], 14, K4)) : (y(), z("i", {
      key: 1,
      class: E(c(Hd).icon)
    }, null, 2));
  }
});
const eb = ["href", "rel", "target"];
var ym = /* @__PURE__ */ q({
  __name: "FluxPressable",
  props: {
    componentType: {},
    href: {},
    rel: {},
    target: {},
    to: {}
  },
  emits: ["click", "mouseenter", "mouseleave"],
  setup(e, { emit: t }) {
    const n = t;
    function i(s, r) {
      n("click", s), !s.defaultPrevented && r?.(s);
    }
    return (s, r) => {
      const a = m1("router-link");
      return e.componentType === "route" ? (y(), V(a, Ft({ key: 0 }, s.$attrs, {
        rel: e.rel,
        target: e.target,
        to: e.to,
        onClick: r[0] || (r[0] = (o) => i(o)),
        onMouseenter: r[1] || (r[1] = (o) => s.$emit("mouseenter", o)),
        onMouseleave: r[2] || (r[2] = (o) => s.$emit("mouseleave", o))
      }), {
        default: j(() => [
          oe(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["rel", "target", "to"])) : e.componentType === "link" ? (y(), z("a", Ft({ key: 1 }, s.$attrs, {
        href: e.href,
        rel: e.rel,
        target: e.target,
        onClick: r[3] || (r[3] = (o) => i(o)),
        onMouseenter: r[4] || (r[4] = (o) => s.$emit("mouseenter", o)),
        onMouseleave: r[5] || (r[5] = (o) => s.$emit("mouseleave", o))
      }), [
        oe(s.$slots, "default")
      ], 16, eb)) : e.componentType === "button" ? (y(), z("button", Ft({ key: 2 }, s.$attrs, {
        onClick: r[6] || (r[6] = (o) => i(o)),
        onMouseenter: r[7] || (r[7] = (o) => s.$emit("mouseenter", o)),
        onMouseleave: r[8] || (r[8] = (o) => s.$emit("mouseleave", o))
      }), [
        oe(s.$slots, "default")
      ], 16)) : (y(), z("div", Ft({ key: 3 }, s.$attrs, {
        onClick: i,
        onMouseenter: r[9] || (r[9] = (o) => s.$emit("mouseenter", o)),
        onMouseleave: r[10] || (r[10] = (o) => s.$emit("mouseleave", o))
      }), [
        oe(s.$slots, "default")
      ], 16));
    };
  }
});
const tb = "spinner", nb = "spinnerTrack", ib = "spinnerEffect", sb = "spinnerValue";
var Mr = { spinner: tb, spinnerTrack: nb, spinnerEffect: ib, spinnerValue: sb }, Mn = /* @__PURE__ */ q({
  __name: "FluxSpinner",
  props: {
    size: {}
  },
  setup(e) {
    return (t, n) => (y(), z("svg", {
      class: E(c(Mr).spinner),
      viewBox: "0 0 24 24",
      style: wt({
        fontSize: e.size && `${e.size}px`
      })
    }, [
      Ie("circle", {
        class: E(c(Mr).spinnerTrack),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4"
      }, null, 2),
      Ie("circle", {
        class: E(c(Mr).spinnerEffect),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2),
      Ie("circle", {
        class: E(c(Mr).spinnerValue),
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
const rb = "button", ab = "isSmall", ob = "isMedium", lb = "isLarge", ub = "isXl", cb = "isFilled", db = "buttonIcon", fb = "buttonLabel";
var Zn = { button: rb, isSmall: ab, isMedium: ob, isLarge: lb, isXl: ub, isFilled: cb, buttonIcon: db, buttonLabel: fb };
const vm = ["default", "after", "before", "iconLeading", "iconTrailing", "label"];
var Qa = /* @__PURE__ */ q({
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
  setup(e, { emit: t }) {
    const n = t, i = hs(In(() => e.disabled));
    function s(o) {
      if (c(i) || e.isLoading) {
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
    return (o, l) => (y(), V(ym, {
      "component-type": e.type,
      class: E(c(Bt)(
        e.cssClass,
        e.isFilled && c(Zn).isFilled,
        e.size === "small" && c(Zn).isSmall,
        e.size === "medium" && c(Zn).isMedium,
        e.size === "large" && c(Zn).isLarge,
        e.size === "xl" && c(Zn).isXl
      )),
      type: e.isSubmit ? "submit" : "button",
      "aria-disabled": c(i) ? !0 : void 0,
      disabled: c(i) ? !0 : void 0,
      tabindex: c(i) ? -1 : e.tabindex,
      href: e.href,
      rel: e.rel,
      target: e.target,
      to: e.to,
      onClick: s,
      onMouseenter: r,
      onMouseleave: a
    }, {
      default: j(() => [
        oe(o.$slots, "before"),
        oe(o.$slots, "iconLeading", {}, () => [
          e.isLoading && (e.iconLeading || !e.iconTrailing) ? (y(), V(Mn, {
            key: 0,
            size: 20
          })) : e.iconLeading ? (y(), V(ft, {
            key: 1,
            class: E(e.cssClassIcon),
            name: e.iconLeading
          }, null, 8, ["class", "name"])) : ee("", !0)
        ]),
        oe(o.$slots, "label", {}, () => [
          e.label ? (y(), z("span", {
            key: 0,
            class: E(e.cssClassLabel)
          }, we(e.label), 3)) : ee("", !0)
        ]),
        oe(o.$slots, "iconTrailing", {}, () => [
          e.isLoading && !e.iconLeading && e.iconTrailing ? (y(), V(Mn, {
            key: 0,
            size: 20
          })) : e.iconTrailing ? (y(), V(ft, {
            key: 1,
            class: E(e.cssClassIcon),
            name: e.iconTrailing
          }, null, 8, ["class", "name"])) : ee("", !0)
        ]),
        oe(o.$slots, "after")
      ]),
      _: 3
    }, 8, ["component-type", "class", "type", "aria-disabled", "disabled", "tabindex", "href", "rel", "target", "to"]));
  }
});
const { button: hb, buttonIcon: mb, buttonLabel: pb } = Zn, gb = `action ${hb}`, yb = "spinner", vb = `actionIcon ${mb}`, bb = "isDestructive", kb = `actionLabel ${pb}`, wb = "actionBar", xb = "separator", Sb = "formInput", Ib = "basePaneStructure", Tb = "paneHeader", Cb = "actionPane", Mb = "actionPaneGrid", Eb = "actionPaneBody", $b = "paneBody";
var Er = { action: gb, spinner: yb, actionIcon: vb, isDestructive: bb, actionLabel: kb, actionBar: wb, separator: xb, formInput: Sb, basePaneStructure: Ib, paneHeader: Tb, actionPane: Cb, actionPaneGrid: Mb, actionPaneBody: Eb, paneBody: $b }, Ab = /* @__PURE__ */ q({
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
  setup(e) {
    return (t, n) => (y(), V(Qa, Ft({ disabled: e.disabled, isLoading: e.isLoading, label: e.label, href: e.href, rel: e.rel, target: e.target, to: e.to, type: e.type }, {
      "css-class": c(Er).action,
      "css-class-icon": c(Er).actionIcon,
      "css-class-label": c(Er).actionLabel,
      class: e.isDestructive && c(Er).isDestructive,
      "icon-leading": e.icon,
      onClick: n[0] || (n[0] = (i) => t.$emit("click", i)),
      onMouseenter: n[1] || (n[1] = (i) => t.$emit("mouseenter", i)),
      onMouseleave: n[2] || (n[2] = (i) => t.$emit("mouseleave", i))
    }), null, 16, ["css-class", "css-class-icon", "css-class-label", "class", "icon-leading"]));
  }
});
const { button: si, buttonIcon: Ai, buttonLabel: Fi } = Zn, Fb = `primaryButton ${si}`, Lb = "spinner", Ob = `primaryButtonIcon ${Ai}`, Db = `primaryButtonLabel ${Fi}`, Bb = `secondaryButton ${si}`, _b = `secondaryButtonIcon ${Ai}`, Nb = `secondaryButtonLabel ${Fi}`, Vb = `destructiveButton ${si}`, Rb = `destructiveButtonIcon ${Ai}`, zb = `destructiveButtonLabel ${Fi}`, Pb = `baseLinkButton ${si}`, Hb = `primaryLinkButton baseLinkButton ${si}`, Wb = `primaryLinkButtonIcon ${Ai}`, Ub = `primaryLinkButtonLabel ${Fi}`, qb = `secondaryLinkButton baseLinkButton ${si}`, jb = `secondaryLinkButtonIcon ${Ai}`, Gb = `secondaryLinkButtonLabel ${Fi}`, Zb = `linkButton ${si}`, Yb = `linkButtonIcon ${Ai}`, Jb = "icon", Xb = `linkButtonLabel ${Fi}`, Kb = `publishButton primaryButton ${si}`, Qb = `publishButtonIcon primaryButtonIcon ${Ai}`, e6 = `publishButtonLabel primaryButtonLabel ${Fi}`, t6 = "publishButtonAnimation", n6 = "isDone", i6 = "publishButtonAnimationArrow", s6 = "publishArrowOut", r6 = "publishButtonAnimationCheck", a6 = "publishButtonAnimationCircle", o6 = "isIdle", l6 = "isLoading", u6 = "publishArrowIn", c6 = "publishButtonCloud", d6 = "publish", f6 = "buttonGroup", h6 = "button";
var wi = { primaryButton: Fb, spinner: Lb, primaryButtonIcon: Ob, primaryButtonLabel: Db, secondaryButton: Bb, secondaryButtonIcon: _b, secondaryButtonLabel: Nb, destructiveButton: Vb, destructiveButtonIcon: Rb, destructiveButtonLabel: zb, baseLinkButton: Pb, primaryLinkButton: Hb, primaryLinkButtonIcon: Wb, primaryLinkButtonLabel: Ub, secondaryLinkButton: qb, secondaryLinkButtonIcon: jb, secondaryLinkButtonLabel: Gb, linkButton: Zb, linkButtonIcon: Yb, icon: Jb, linkButtonLabel: Xb, publishButton: Kb, publishButtonIcon: Qb, publishButtonLabel: e6, publishButtonAnimation: t6, isDone: n6, publishButtonAnimationArrow: i6, publishArrowOut: s6, publishButtonAnimationCheck: r6, publishButtonAnimationCircle: a6, isIdle: o6, isLoading: l6, publishArrowIn: u6, publishButtonCloud: c6, publish: d6, buttonGroup: f6, button: h6 }, m6 = /* @__PURE__ */ q({
  __name: "FluxButtonGroup",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(wi).buttonGroup)
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const { basePaneStructure: cr, basePaneElement: _u, basePaneLoader: p6 } = Ka, g6 = `pane ${cr}`, y6 = `paneDefault pane ${cr}`, v6 = `paneFlat pane ${cr}`, b6 = `paneWell pane ${cr}`, k6 = `paneHeader ${_u}`, w6 = "basePaneElement", x6 = `paneBody ${_u}`, S6 = "paneHeaderCaption", I6 = "paneHeaderIcon", T6 = `paneFooter ${_u}`, C6 = `paneLoader ${p6}`, M6 = "paneTag", E6 = "paneMedia", $6 = "paneMediaInset paneMedia", A6 = "paneMediaImage", F6 = `paneDeck paneDefault pane ${cr}`, L6 = "baseAutoGrid", O6 = "paneGroup", D6 = "paneIllustration", B6 = "paneIllustrationContent", _6 = "paneIllustrationContentControlled paneIllustrationContent", N6 = "paneIllustrationMagic", V6 = "paneIllustrationMasked paneIllustration", R6 = "iconBoxed";
var rn = { pane: g6, paneDefault: y6, paneFlat: v6, paneWell: b6, paneHeader: k6, basePaneElement: w6, paneBody: x6, paneHeaderCaption: S6, paneHeaderIcon: I6, paneFooter: T6, paneLoader: C6, paneTag: M6, paneMedia: E6, paneMediaInset: $6, paneMediaImage: A6, paneDeck: F6, baseAutoGrid: L6, paneGroup: O6, paneIllustration: D6, paneIllustrationContent: B6, paneIllustrationContentControlled: _6, paneIllustrationMagic: N6, paneIllustrationMasked: V6, iconBoxed: R6 }, eo = /* @__PURE__ */ q({
  __name: "FluxPane",
  props: {
    isLoading: { type: Boolean },
    tag: {},
    variant: { default: "default" }
  },
  setup(e) {
    const t = {
      default: rn.paneDefault,
      flat: rn.paneFlat,
      well: rn.paneWell
    };
    return (n, i) => (y(), z("div", {
      class: E(t[e.variant])
    }, [
      oe(n.$slots, "default"),
      e.isLoading ? oe(n.$slots, "loader", { key: 0 }, () => [
        Ie("div", {
          class: E(c(rn).paneLoader)
        }, [
          B(Mn)
        ], 2)
      ]) : ee("", !0),
      e.tag ? (y(), z("div", {
        key: 1,
        class: E(c(rn).paneTag)
      }, we(e.tag), 3)) : ee("", !0)
    ], 2));
  }
}), rs = /* @__PURE__ */ q({
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
  setup(e) {
    return (t, n) => (y(), V(Qa, Ft({ type: e.type, disabled: e.disabled, iconLeading: e.iconLeading, iconTrailing: e.iconTrailing, isFilled: e.isFilled, isLoading: e.isLoading, isSubmit: e.isSubmit, label: e.label, size: e.size, href: e.href, rel: e.rel, target: e.target, to: e.to }, {
      "css-class": c(wi).secondaryButton,
      "css-class-icon": c(wi).secondaryButtonIcon,
      "css-class-label": c(wi).secondaryButtonLabel,
      onClick: n[0] || (n[0] = (i) => t.$emit("click", i)),
      onMouseenter: n[1] || (n[1] = (i) => t.$emit("mouseenter", i)),
      onMouseleave: n[2] || (n[2] = (i) => t.$emit("mouseleave", i))
    }), cu({ _: 2 }, [
      kt(c(vm), (i) => ({
        name: i,
        fn: j(() => [
          oe(t.$slots, i)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
});
const z6 = "baseAutoGrid";
var P6 = { baseAutoGrid: z6 };
const { baseAutoGrid: H6 } = P6, W6 = "aspectRatio", U6 = `autoGrid ${H6}`, q6 = "container", j6 = "spacer", G6 = "stack", Z6 = "isCentered", Y6 = "isFill", J6 = "isWrapping", X6 = "stackHorizontal stack", K6 = "stackVertical stack";
var Ri = { aspectRatio: W6, autoGrid: U6, container: q6, spacer: j6, stack: G6, isCentered: Z6, isFill: Y6, isWrapping: J6, stackHorizontal: X6, stackVertical: K6 }, to = /* @__PURE__ */ q({
  __name: "FluxSpacer",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(Ri).spacer)
    }, null, 2));
  }
}), bm = /* @__PURE__ */ q({
  __name: "FluxStack",
  props: {
    direction: { default: "vertical" },
    gap: { default: 21 },
    isCentered: { type: Boolean },
    isFill: { type: Boolean },
    isWrapping: { type: Boolean },
    tag: {}
  },
  setup(e) {
    return (t, n) => (y(), V(uu(e.tag ?? "div"), {
      class: E(c(Bt)(
        e.direction === "horizontal" && c(Ri).stackHorizontal,
        e.direction === "vertical" && c(Ri).stackVertical,
        e.isCentered && c(Ri).isCentered,
        e.isFill && c(Ri).isFill,
        e.isWrapping && c(Ri).isWrapping
      )),
      style: wt({
        "--gap": e.gap && `${e.gap}px`
      })
    }, {
      default: j(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), Q6 = /* @__PURE__ */ q({
  __name: "FluxButtonStack",
  props: {
    direction: { default: "horizontal" },
    gap: { default: 9 },
    isFill: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (y(), V(bm, {
      direction: e.direction,
      gap: e.gap,
      "is-fill": e.isFill
    }, {
      default: j(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["direction", "gap", "is-fill"]));
  }
}), Js = /* @__PURE__ */ q({
  __name: "FluxPaneBody",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(rn).paneBody)
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const e3 = "breakthroughTransitionEnterActive", t3 = "breakthroughTransitionBackEnterActive", n3 = "breakthroughTransitionLeaveActive", i3 = "breakthroughTransitionBackLeaveActive", s3 = "breakthroughTransitionEnterFrom", r3 = "breakthroughTransitionBackLeaveTo", a3 = "breakthroughTransitionLeaveTo", o3 = "breakthroughTransitionBackEnterFrom", l3 = "fadeTransitionEnterActive", u3 = "fadeTransitionLeaveActive", c3 = "fadeTransitionEnterFrom", d3 = "fadeTransitionLeaveTo", f3 = "fadeTransitionEnterTo", h3 = "fadeTransitionLeaveFrom", m3 = "routeTransitionEnterActive", p3 = "routeTransitionBackEnterActive", g3 = "routeTransitionLeaveActive", y3 = "routeTransitionBackLeaveActive", v3 = "routeTransitionEnterFrom", b3 = "routeTransitionBackLeaveTo", k3 = "routeTransitionLeaveTo", w3 = "routeTransitionBackEnterFrom", x3 = "tooltipTransitionEnterActive", S3 = "tooltipTransitionLeaveActive", I3 = "tooltipTransitionEnterFrom", T3 = "tooltipTransitionLeaveTo", C3 = "verticalWindowTransitionEnterActive", M3 = "verticalWindowTransitionBackEnterActive", E3 = "verticalWindowTransitionLeaveActive", $3 = "verticalWindowTransitionBackLeaveActive", A3 = "verticalWindowTransitionBackLeaveTo", F3 = "verticalWindowTransitionEnterFrom", L3 = "verticalWindowTransitionBackEnterFrom", O3 = "verticalWindowTransitionLeaveTo", D3 = "windowTransitionEnterActive", B3 = "windowTransitionBackEnterActive", _3 = "windowTransitionLeaveActive", N3 = "windowTransitionBackLeaveActive", V3 = "windowTransitionBackLeaveTo", R3 = "windowTransitionEnterFrom", z3 = "windowTransitionBackEnterFrom", P3 = "windowTransitionLeaveTo";
var tn = { breakthroughTransitionEnterActive: e3, breakthroughTransitionBackEnterActive: t3, breakthroughTransitionLeaveActive: n3, breakthroughTransitionBackLeaveActive: i3, breakthroughTransitionEnterFrom: s3, breakthroughTransitionBackLeaveTo: r3, breakthroughTransitionLeaveTo: a3, breakthroughTransitionBackEnterFrom: o3, fadeTransitionEnterActive: l3, fadeTransitionLeaveActive: u3, fadeTransitionEnterFrom: c3, fadeTransitionLeaveTo: d3, fadeTransitionEnterTo: f3, fadeTransitionLeaveFrom: h3, routeTransitionEnterActive: m3, routeTransitionBackEnterActive: p3, routeTransitionLeaveActive: g3, routeTransitionBackLeaveActive: y3, routeTransitionEnterFrom: v3, routeTransitionBackLeaveTo: b3, routeTransitionLeaveTo: k3, routeTransitionBackEnterFrom: w3, tooltipTransitionEnterActive: x3, tooltipTransitionLeaveActive: S3, tooltipTransitionEnterFrom: I3, tooltipTransitionLeaveTo: T3, verticalWindowTransitionEnterActive: C3, verticalWindowTransitionBackEnterActive: M3, verticalWindowTransitionLeaveActive: E3, verticalWindowTransitionBackLeaveActive: $3, verticalWindowTransitionBackLeaveTo: A3, verticalWindowTransitionEnterFrom: F3, verticalWindowTransitionBackEnterFrom: L3, verticalWindowTransitionLeaveTo: O3, windowTransitionEnterActive: D3, windowTransitionBackEnterActive: B3, windowTransitionLeaveActive: _3, windowTransitionBackLeaveActive: N3, windowTransitionBackLeaveTo: V3, windowTransitionEnterFrom: R3, windowTransitionBackEnterFrom: z3, windowTransitionLeaveTo: P3 }, Xl = /* @__PURE__ */ q({
  __name: "FluxFadeTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(e) {
    return (t, n) => (y(), V(Ti, {
      mode: e.mode,
      "enter-active-class": c(tn).fadeTransitionEnterActive,
      "enter-from-class": c(tn).fadeTransitionEnterFrom,
      "enter-to-class": c(tn).fadeTransitionEnterTo,
      "leave-active-class": c(tn).fadeTransitionLeaveActive,
      "leave-from-class": c(tn).fadeTransitionLeaveFrom,
      "leave-to-class": c(tn).fadeTransitionLeaveTo
    }, {
      default: j(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"]));
  }
}), H3 = /* @__PURE__ */ q({
  __name: "FluxOverlayTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(e) {
    return (t, n) => (y(), V(Ti, {
      mode: e.mode,
      "enter-active-class": c(Ht).overlayTransitionEnterActive,
      "enter-from-class": c(Ht).overlayTransitionEnterFrom,
      "leave-active-class": c(Ht).overlayTransitionLeaveActive,
      "leave-to-class": c(Ht).overlayTransitionLeaveTo
    }, {
      default: j(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
}), W3 = /* @__PURE__ */ q({
  __name: "FluxTooltipTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(e) {
    return (t, n) => (y(), V(Ti, {
      mode: e.mode,
      "enter-active-class": c(tn).tooltipTransitionEnterActive,
      "enter-from-class": c(tn).tooltipTransitionEnterFrom,
      "leave-active-class": c(tn).tooltipTransitionLeaveActive,
      "leave-to-class": c(tn).tooltipTransitionLeaveTo
    }, {
      default: j(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
});
const U3 = "badge", q3 = "spinner", j3 = "badgeClose", G3 = "icon", Z3 = "badgeDot", Y3 = "badgeIcon", J3 = "badgeLabel", X3 = "badgeGray badge", K3 = "badgePrimary badge", Q3 = "badgeDanger badge", e8 = "badgeInfo badge", t8 = "badgeSuccess badge", n8 = "badgeWarning badge", i8 = "tag badge", s8 = "tagClose badgeClose", r8 = "tagDot badgeDot", a8 = "tagIcon badgeIcon", o8 = "tagLabel badgeLabel", l8 = "tagGray badgeGray badge tag badge", u8 = "tagPrimary badgePrimary badge tag badge", c8 = "tagDanger badgeDanger badge tag badge", d8 = "tagInfo badgeInfo badge tag badge", f8 = "tagSuccess badgeSuccess badge tag badge", h8 = "tagWarning badgeWarning badge tag badge";
var zt = { badge: U3, spinner: q3, badgeClose: j3, icon: G3, badgeDot: Z3, badgeIcon: Y3, badgeLabel: J3, badgeGray: X3, badgePrimary: K3, badgeDanger: Q3, badgeInfo: e8, badgeSuccess: t8, badgeWarning: n8, tag: i8, tagClose: s8, tagDot: r8, tagIcon: a8, tagLabel: o8, tagGray: l8, tagPrimary: u8, tagDanger: c8, tagInfo: d8, tagSuccess: f8, tagWarning: h8 }, m8 = /* @__PURE__ */ q({
  __name: "Anchor",
  props: {
    tagName: {}
  },
  setup(e) {
    return (t, n) => (y(), V(uu(e.tagName), null, {
      default: j(() => [
        oe(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), p8 = /* @__PURE__ */ q({
  __name: "AnchorPopup",
  props: {
    anchor: {},
    direction: { default: "vertical" },
    margin: { default: 12 },
    position: {},
    useAnchorWidth: { type: Boolean }
  },
  setup(e) {
    const t = ne(), n = vn("popup"), i = un({
      x: 0,
      y: 0,
      width: null
    });
    $n(() => {
      window.addEventListener("resize", a, { passive: !0 }), window.addEventListener("scroll", o, { capture: !0, passive: !0 });
    }), Ci(() => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", o);
    }), rm(n, () => {
      s();
    }, { childList: !0, subtree: !0 });
    function s() {
      const l = c(t), u = c(n);
      if (!l || !u)
        return;
      const { x: d, y: f, height: m, width: h } = l.getBoundingClientRect(), { height: p, width: b } = u.getBoundingClientRect();
      let x, k;
      switch (e.position) {
        case "top":
          x = d + h / 2 - b / 2, k = f - p - e.margin;
          break;
        case "top-left":
          x = d, k = f - p - e.margin;
          break;
        case "top-right":
          x = d - b + h, k = f - p - e.margin;
          break;
        case "left":
          x = d - b - e.margin, k = f + m / 2 - p / 2;
          break;
        case "left-top":
          x = d - b - e.margin, k = f;
          break;
        case "left-bottom":
          x = d - b - e.margin, k = f + m - p;
          break;
        case "right":
          x = d + h + e.margin, k = f + m / 2 - p / 2;
          break;
        case "right-top":
          x = d + h + e.margin, k = f;
          break;
        case "right-bottom":
          x = d + h + e.margin, k = f + m - p;
          break;
        case "bottom":
          x = d + h / 2 - b / 2, k = f + m + e.margin;
          break;
        case "bottom-left":
          x = d, k = f + m + e.margin;
          break;
        case "bottom-right":
          x = d - b + h, k = f + m + e.margin;
          break;
        default:
          e.direction === "horizontal" ? (x = d + h + e.margin, k = f + m / 2 - p / 2, x + b > innerWidth && (x = d - b - e.margin)) : (x = d + h / 2 - b / 2, k = f + m + e.margin, k + p + e.margin > innerHeight && (k = f - p - e.margin)), (k < 0 || k + p > innerHeight) && (k = innerHeight / 2 - p / 2);
          break;
      }
      i.x = x, i.y = k;
    }
    function r() {
      const l = c(t);
      if (!l)
        return;
      const { width: u } = l.getBoundingClientRect();
      i.width = e.useAnchorWidth ? u : null;
    }
    function a() {
      r(), s();
    }
    function o() {
      s();
    }
    return Ma(() => {
      !e.anchor || !ns(e.anchor) && !e.anchor.$el || (t.value = ns(e.anchor) ? e.anchor : e.anchor.$el, requestAnimationFrame(() => {
        requestAnimationFrame(r), requestAnimationFrame(s);
      }));
    }), (l, u) => (y(), z("div", {
      ref: "popup",
      style: wt({
        "--x": `${i.x}px`,
        "--y": `${i.y}px`,
        "--width": i.width ? `${i.width}px` : void 0
      })
    }, [
      oe(l.$slots, "default")
    ], 4));
  }
});
const { button: g8, buttonIcon: km, buttonLabel: y8 } = Zn, v8 = "menu", b8 = "menuNormal menu", k8 = "menuLarge menu", w8 = "menuGroup", x8 = "menuGroupHorizontal menuGroup", S8 = "menuGroupVertical menuGroup", I8 = `menuItem ${g8}`, T8 = "badge", C8 = `menuItemIcon ${km}`, M8 = `menuItemLabel ${y8}`, E8 = "menuItemActive", $8 = "menuItemDestructive", A8 = "menuItemHighlighted", F8 = "menuItemIndented", L8 = `menuItemSelectableIcon ${km}`, O8 = "menuItemSelected", D8 = "menuItemCommand", B8 = "menuItemCommandIcon", _8 = "icon", N8 = "menuItemImage", V8 = "menuTitle", R8 = "menuSubHeader", z8 = "menuSubHeaderIcon", P8 = "menuSubHeaderLabel", H8 = "basePane", W8 = "divider", U8 = "separator", q8 = "expandableBody";
var Ue = { menu: v8, menuNormal: b8, menuLarge: k8, menuGroup: w8, menuGroupHorizontal: x8, menuGroupVertical: S8, menuItem: I8, badge: T8, menuItemIcon: C8, menuItemLabel: M8, menuItemActive: E8, menuItemDestructive: $8, menuItemHighlighted: A8, menuItemIndented: F8, menuItemSelectableIcon: L8, menuItemSelected: O8, menuItemCommand: D8, menuItemCommandIcon: B8, icon: _8, menuItemImage: N8, menuTitle: V8, menuSubHeader: R8, menuSubHeaderIcon: z8, menuSubHeaderLabel: P8, basePane: H8, divider: W8, separator: U8, expandableBody: q8 };
const j8 = ["src", "alt"];
var ul = /* @__PURE__ */ q({
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
  setup(e) {
    const t = Wf();
    return (n, i) => (y(), V(Qa, Ft({ type: e.type, disabled: e.disabled, iconLeading: e.iconLeading, iconTrailing: e.iconTrailing, isLoading: e.isLoading, label: e.label, href: e.href, rel: e.rel, target: e.target, to: e.to }, {
      "css-class": c(Ue).menuItem,
      "css-class-icon": c(Ue).menuItemIcon,
      "css-class-label": c(Ue).menuItemLabel,
      "is-filled": "",
      role: e.isSelectable ? "menuitemradio" : "menuitem",
      class: {
        [c(Ue).menuItemActive]: e.isActive,
        [c(Ue).menuItemDestructive]: e.isDestructive,
        [c(Ue).menuItemHighlighted]: e.isHighlighted,
        [c(Ue).menuItemIndented]: e.isIndented,
        [c(Ue).menuItemSelected]: e.isSelectable && e.isSelected
      },
      "aria-checked": e.isSelectable ? e.isSelected : void 0,
      tabindex: e.tabindex,
      onClick: i[0] || (i[0] = (s) => n.$emit("click", s))
    }), cu({ _: 2 }, [
      e.isSelectable && (!e.iconLeading || e.isSelected) ? {
        name: "iconLeading",
        fn: j(() => [
          B(ft, {
            class: E(c(Ue).menuItemSelectableIcon),
            name: e.isSelected ? "circle-check" : void 0
          }, null, 8, ["class", "name"])
        ]),
        key: "0"
      } : e.imageSrc ? {
        name: "iconLeading",
        fn: j(() => [
          Ie("img", {
            class: E(c(Ue).menuItemImage),
            src: e.imageSrc,
            alt: e.imageAlt ?? ""
          }, null, 10, j8)
        ]),
        key: "1"
      } : void 0,
      e.command || e.commandIcon || e.commandLoading || t.after ? {
        name: "after",
        fn: j(() => [
          e.commandLoading ? (y(), V(Mn, {
            key: 0,
            class: E(c(Ue).menuItemCommandIcon),
            size: 16
          }, null, 8, ["class"])) : (y(), z(pe, { key: 1 }, [
            e.command ? (y(), z("kbd", {
              key: 0,
              class: E(c(Ue).menuItemCommand)
            }, we(e.command), 3)) : ee("", !0),
            e.commandIcon ? (y(), V(ft, {
              key: 1,
              class: E(c(Ue).menuItemCommandIcon),
              name: e.commandIcon
            }, null, 8, ["class", "name"])) : ee("", !0)
          ], 64)),
          oe(n.$slots, "after")
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["css-class", "css-class-icon", "css-class-label", "role", "class", "aria-checked", "tabindex"]));
  }
});
const { basePane: G8 } = Ka, Z8 = "formInputGroup formInput", Y8 = "buttonGroup", J8 = "button", X8 = "formInput", K8 = "formSelect formInput", Q8 = "formStructureElement", e5 = "form formStructureElement", t5 = "pane", n5 = "formColumn formStructureElement", i5 = "formSection formStructureElement", s5 = "formGrid", r5 = "formRow", a5 = "formSectionTitle", o5 = "formField", l5 = "formFieldHeader", u5 = "formFieldLabel", c5 = "formFieldOptional", d5 = "formFieldValue", f5 = "formFieldCounter", h5 = "formFieldAddition", m5 = "formFieldAdditionIcon", p5 = "formFieldAdditionError formFieldAddition", g5 = "formFieldAdditionHint formFieldAddition", y5 = "isSecondary", v5 = "formInputDisabled formInput", b5 = "formInputEnabled formInput", k5 = "formInputIcon", w5 = "formInputIconTrailing formInputIcon", x5 = "formInputIconLeading formInputIcon", S5 = "formInputIconPasswordToggle formInputIconTrailing formInputIcon", I5 = "formInputNative", T5 = "formInputNativeHasIconLeading", C5 = "formInputNativeHasIconTrailing", M5 = "formInputAddition formInput", E5 = "isCondensed", $5 = "secondaryButton", A5 = "buttonIcon", F5 = "formDateInput", L5 = "formDateRangeInput formInput", O5 = "formDateTimeInput", D5 = "inputGroup", B5 = "formTimeInput formDateInput", _5 = "isDisabled", N5 = "isFocused", V5 = "badge", R5 = "formSelectIcon", z5 = "formSelectInput", P5 = "formSelectPlaceholder", H5 = `formSelectPopup ${G8}`, W5 = "menuItem", U5 = "isKeyboardAction", q5 = "isSearchable", j5 = "menuSubHeader", G5 = "formSelectSelected", Z5 = "buttonLabel", Y5 = "formTextArea", J5 = "formTextAreaDisabled formInputDisabled formInput formTextArea", X5 = "formTextAreaEnabled formInputEnabled formInput formTextArea", K5 = "checkbox", Q5 = "checkboxElement", ek = "checkboxNative", tk = "icon", nk = "checkboxLabel", ik = "quantitySelector", sk = "quantitySelectorButton", rk = "quantitySelectorInput formInput", ak = "pinInput", ok = "pinInputField", lk = "pinInputEnabled pinInput", uk = "pinInputDisabled pinInput", ck = "toggle", dk = "isChecked", fk = "toggleInput", hk = "isSwitch", mk = "toggleIcon", pk = "toggleIconOn toggleIcon", gk = "toggleIconOff toggleIcon";
var fe = { formInputGroup: Z8, buttonGroup: Y8, button: J8, formInput: X8, formSelect: K8, formStructureElement: Q8, form: e5, pane: t5, formColumn: n5, formSection: i5, formGrid: s5, formRow: r5, formSectionTitle: a5, formField: o5, formFieldHeader: l5, formFieldLabel: u5, formFieldOptional: c5, formFieldValue: d5, formFieldCounter: f5, formFieldAddition: h5, formFieldAdditionIcon: m5, formFieldAdditionError: p5, formFieldAdditionHint: g5, isSecondary: y5, formInputDisabled: v5, formInputEnabled: b5, formInputIcon: k5, formInputIconTrailing: w5, formInputIconLeading: x5, formInputIconPasswordToggle: S5, formInputNative: I5, formInputNativeHasIconLeading: T5, formInputNativeHasIconTrailing: C5, formInputAddition: M5, isCondensed: E5, secondaryButton: $5, buttonIcon: A5, formDateInput: F5, formDateRangeInput: L5, formDateTimeInput: O5, inputGroup: D5, formTimeInput: B5, isDisabled: _5, isFocused: N5, badge: V5, formSelectIcon: R5, formSelectInput: z5, formSelectPlaceholder: P5, formSelectPopup: H5, menuItem: W5, isKeyboardAction: U5, isSearchable: q5, menuSubHeader: j5, formSelectSelected: G5, buttonLabel: Z5, formTextArea: Y5, formTextAreaDisabled: J5, formTextAreaEnabled: X5, checkbox: K5, checkboxElement: Q5, checkboxNative: ek, icon: tk, checkboxLabel: nk, quantitySelector: ik, quantitySelectorButton: sk, quantitySelectorInput: rk, pinInput: ak, pinInputField: ok, pinInputEnabled: lk, pinInputDisabled: uk, toggle: ck, isChecked: dk, toggleInput: fk, isSwitch: hk, toggleIcon: mk, toggleIconOn: pk, toggleIconOff: gk };
const yk = ["aria-disabled"], vk = ["id", "autocomplete", "autofocus", "aria-disabled", "disabled", "max", "maxlength", "min", "placeholder", "readonly", "step", "type", "value"];
var Vs = /* @__PURE__ */ q({
  __name: "FluxFormInput",
  props: /* @__PURE__ */ Gt({
    autoComplete: {},
    autoFocus: { type: Boolean, default: !1 },
    iconLeading: {},
    iconTrailing: {},
    disabled: { type: Boolean },
    isCondensed: { type: Boolean },
    isLoading: { type: Boolean },
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
  emits: /* @__PURE__ */ Gt(["blur", "focus", "showPicker"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const i = n, s = vt(e, "modelValue"), r = hs(In(() => e.disabled)), a = vn("input"), { id: o } = Bu(), l = ne(null), u = ne(e.type);
    function d() {
      Cn(a)?.blur();
    }
    function f() {
      Cn(a)?.focus();
    }
    function m() {
      e.type === "password" && (u.value = c(u) === "password" ? "text" : "password");
    }
    function h() {
      i("blur");
    }
    function p() {
      i("focus");
    }
    function b(k) {
      const $ = k.target.value;
      switch (e.type) {
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          const S = se.fromISO($);
          if (!S.isValid)
            return;
          s.value = S;
          break;
        case "number":
          s.value = Number($);
          break;
        default:
          s.value = $;
          break;
      }
    }
    function x(k) {
      ["date", "datetime-local", "month", "week"].includes(e.type) && k.key === " " && (i("showPicker"), k.preventDefault());
    }
    return Re([s, () => e.type], ([k, $]) => {
      if (!k && k !== 0) {
        l.value = null;
        return;
      }
      if (se.isDateTime(k)) {
        const S = k.toISO();
        switch ($) {
          case "date":
            l.value = S.substring(0, 10);
            break;
          case "datetime-local":
            l.value = S.substring(0, 16);
            break;
          case "time":
            l.value = S.substring(11, 16);
            break;
          default:
            l.value = S;
            break;
        }
        return;
      }
      l.value = k.toString();
    }, { immediate: !0 }), Re([a, () => e.pattern, l], ([k, $, S], R, w) => {
      if (!k || !$)
        return;
      const I = O4[$](k);
      S && (I.value = S, s.value = I.value), w(() => I.destroy());
    }, { immediate: !0 }), Re(() => e.type, (k) => u.value = k), t({
      blur: d,
      focus: f
    }), (k, $) => (y(), z("div", {
      class: E(c(Bt)(
        c(r) ? c(fe).formInputDisabled : c(fe).formInputEnabled,
        e.isCondensed && c(fe).isCondensed,
        e.isSecondary && c(fe).isSecondary
      )),
      "aria-disabled": c(r) ? !0 : void 0
    }, [
      Ie("input", {
        ref: "input",
        class: E(c(Bt)(
          c(fe).formInputNative,
          (!!e.iconTrailing || e.type === "password") && c(fe).formInputNativeHasIconTrailing,
          !!e.iconLeading && c(fe).formInputNativeHasIconLeading
        )),
        id: c(o),
        autocomplete: e.autoComplete,
        autofocus: e.autoFocus,
        "aria-disabled": c(r) ? !0 : void 0,
        disabled: c(r),
        max: e.max,
        maxlength: e.maxLength,
        min: e.min,
        placeholder: e.placeholder,
        readonly: e.isReadonly,
        step: e.step,
        type: u.value,
        value: l.value,
        onBlur: $[0] || ($[0] = (S) => h()),
        onFocus: $[1] || ($[1] = (S) => p()),
        onInput: b,
        onKeydown: x
      }, null, 42, vk),
      e.iconLeading ? (y(), V(ft, {
        key: 0,
        class: E(c(fe).formInputIconLeading),
        name: e.iconLeading,
        size: 18
      }, null, 8, ["class", "name"])) : ee("", !0),
      e.type === "password" ? (y(), V(ft, {
        key: 1,
        class: E(c(fe).formInputIconPasswordToggle),
        name: u.value === "password" ? "eye" : "eye-slash",
        size: 18,
        onClick: $[2] || ($[2] = (S) => m())
      }, null, 8, ["class", "name"])) : e.iconTrailing ? (y(), V(ft, {
        key: 2,
        class: E(c(fe).formInputIconTrailing),
        name: e.iconTrailing,
        size: 18
      }, null, 8, ["class", "name"])) : ee("", !0),
      e.isLoading ? (y(), V(Mn, {
        key: 3,
        class: E(c(fe).formInputIconTrailing),
        size: 18
      }, null, 8, ["class"])) : ee("", !0)
    ], 10, yk));
  }
}), bk = /* @__PURE__ */ q({
  __name: "FluxMenuGroup",
  props: {
    isHorizontal: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(e.isHorizontal ? c(Ue).menuGroupHorizontal : c(Ue).menuGroupVertical),
      role: "group"
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
}), Wd = /* @__PURE__ */ q({
  __name: "FluxMenuSubHeader",
  props: {
    iconLeading: {},
    iconTrailing: {},
    label: {}
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(Ue).menuSubHeader),
      role: "presentation"
    }, [
      e.iconLeading ? (y(), V(ft, {
        key: 0,
        class: E(c(Ue).menuSubHeaderIcon),
        name: e.iconLeading
      }, null, 8, ["class", "name"])) : ee("", !0),
      Ie("span", {
        class: E(c(Ue).menuSubHeaderLabel)
      }, we(e.label), 3),
      e.iconTrailing ? (y(), V(ft, {
        key: 1,
        class: E(c(Ue).menuSubHeaderIcon),
        name: e.iconTrailing
      }, null, 8, ["class", "name"])) : ee("", !0)
    ], 2));
  }
}), Ud = /* @__PURE__ */ q({
  __name: "FluxMenu",
  props: {
    isLarge: { type: Boolean }
  },
  setup(e) {
    const t = vn("element");
    return Vv(t, {
      direction: "vertical"
    }), (n, i) => (y(), z("nav", {
      ref: "element",
      class: E(e.isLarge ? c(Ue).menuLarge : c(Ue).menuNormal),
      role: "menu",
      "aria-orientation": "vertical"
    }, [
      oe(n.$slots, "default")
    ], 2));
  }
}), kk = /* @__PURE__ */ q({
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
  setup(e, { emit: t }) {
    const n = t;
    function i() {
      n("delete");
    }
    return (s, r) => (y(), V(ym, {
      class: E(c(Bt)(
        e.color === "gray" && c(zt).tagGray,
        e.color === "primary" && c(zt).tagPrimary,
        e.color === "danger" && c(zt).tagDanger,
        e.color === "info" && c(zt).tagInfo,
        e.color === "success" && c(zt).tagSuccess,
        e.color === "warning" && c(zt).tagWarning
      )),
      "component-type": e.type,
      tabindex: e.tabindex,
      href: e.href,
      rel: e.rel,
      target: e.target,
      to: e.to,
      onClick: r[1] || (r[1] = (a) => s.$emit("click", a)),
      onMouseenter: r[2] || (r[2] = (a) => s.$emit("mouseenter", a)),
      onMouseleave: r[3] || (r[3] = (a) => s.$emit("mouseleave", a))
    }, {
      default: j(() => [
        e.isLoading ? (y(), V(Mn, {
          key: 0,
          class: E(c(zt).tagIcon),
          size: 16
        }, null, 8, ["class"])) : e.dot ? (y(), z("span", {
          key: 1,
          class: E(c(zt).tagDot)
        }, null, 2)) : e.icon ? (y(), V(ft, {
          key: 2,
          class: E(c(zt).tagIcon),
          name: e.icon,
          size: 16
        }, null, 8, ["class", "name"])) : ee("", !0),
        Ie("span", {
          class: E(c(zt).tagLabel)
        }, we(e.label), 3),
        !e.isClickable && e.isDeletable ? (y(), z("button", {
          key: 3,
          class: E(c(zt).tagClose),
          type: "button",
          onClick: r[0] || (r[0] = (a) => i())
        }, [
          B(ft, { name: "xmark" })
        ], 2)) : ee("", !0)
      ]),
      _: 1
    }, 8, ["class", "component-type", "tabindex", "href", "rel", "target", "to"]));
  }
});
const ws = -1;
var wk = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "SelectBase",
  props: /* @__PURE__ */ Gt({
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
  emits: /* @__PURE__ */ Gt(["keyDown", "deselect", "select", "search", "close", "open"], ["update:searchQuery"]),
  setup(e, { emit: t }) {
    const n = t, i = vt(e, "searchQuery"), s = hs(In(() => e.disabled)), { id: r } = Bu(), a = sr(), o = vn("anchor"), l = vn("anchorPopup"), u = vn("optionElements"), d = vn("searchInputElement"), f = ne(ws), m = ne(!1), h = ne(!1), p = Me(() => Cn(d) ?? Cn(o)), b = Me(() => c(x)[c(f)]?.value), x = Me(() => e.options.map((I) => I[1]).flat());
    _d([o, l], h, () => h.value = !1), _d(o, h, () => c(p)?.focus());
    function k(I) {
      n("deselect", I), mi(() => c(p)?.focus());
    }
    function $(I) {
      n("select", I), !e.isMultiple && (h.value = !1), f.value = ws, i.value = "", mi(() => c(p)?.focus());
    }
    function S() {
      c(s) || (h.value = !c(h));
    }
    function R(I) {
      if (n("keyDown", I), !c(h)) {
        I.key === "Enter" && (h.value = !0);
        return;
      }
      if (m.value = !0, c(f) === ws && ["ArrowDown", "ArrowUp"].includes(I.key)) {
        const F = c(u)?.findIndex((L) => "isActive" in L.$props && L.$props.isActive);
        f.value = F ?? ws;
      }
      switch (I.key) {
        case "ArrowUp":
          f.value = Math.max(0, c(f) - 1);
          break;
        case "ArrowDown":
          f.value = Math.min(c(x).length - 1, c(f) + 1);
          break;
        case "Backspace":
          if (c(i).length > 0 || e.selected.length === 0)
            return;
          k(e.selected[e.selected.length - 1].value);
          break;
        case "Enter":
          const F = c(b);
          F && $(F);
          break;
        case "Escape":
          h.value = !1;
          break;
        case "Tab":
          h.value = !1;
          return;
        default:
          I.key.match(/[a-z]/) ? f.value = c(x).findIndex((L) => L.label.toLowerCase().startsWith(I.key)) : f.value = -1;
          return;
      }
      I.preventDefault();
    }
    function w() {
      m.value = !1;
    }
    return Re(f, (I) => {
      c(u)[I]?.$el.scrollIntoView({
        block: "center"
      });
    }), Re(h, (I) => {
      if (!I) {
        n("close");
        return;
      }
      mi(() => {
        c(d)?.focus();
      }), mi(() => {
        const U = c(u);
        if (!U || e.isMultiple)
          return;
        const F = U.findIndex((W) => "isActive" in W.$props && W.$props.isActive), L = U[F];
        L && L.$el.scrollIntoView({
          block: "center"
        });
      }), n("open");
    }), Re(i, (I) => n("search", I)), Re([() => e.options, h], () => f.value = ws), (I, U) => (y(), z(pe, null, [
      B(m8, Ft({ ref: "anchor" }, I.$attrs, {
        class: c(Bt)(
          c(fe).formSelect,
          c(s) && c(fe).isDisabled,
          h.value && c(fe).isFocused,
          e.isSearchable && c(fe).isSearchable
        ),
        id: c(r),
        "aria-disabled": c(s) ? !0 : void 0,
        tabindex: "0",
        "tag-name": "div",
        onClick: U[0] || (U[0] = (F) => S()),
        onKeydown: R,
        onKeyup: w
      }), {
        default: j(() => [
          !e.isMultiple && e.selected[0] ? (y(), V(ul, {
            key: 0,
            class: E(c(fe).formSelectSelected),
            command: e.selected[0].command,
            "command-icon": e.selected[0].commandIcon,
            "icon-leading": e.selected[0].icon,
            "image-alt": e.selected[0].imageAlt,
            "image-src": e.selected[0].imageSrc,
            label: e.selected[0].label,
            tabindex: "-1"
          }, null, 8, ["class", "command", "command-icon", "icon-leading", "image-alt", "image-src", "label"])) : e.isMultiple && e.selected[0] ? (y(!0), z(pe, { key: 1 }, kt(e.selected, (F) => (y(), V(kk, {
            key: F.value ?? "null option",
            label: F.label,
            "is-deletable": "",
            onDelete: (L) => k(F.value)
          }, null, 8, ["label", "onDelete"]))), 128)) : e.placeholder ? (y(), z("span", {
            key: 2,
            class: E(c(fe).formSelectPlaceholder)
          }, we(e.placeholder), 3)) : ee("", !0),
          e.isLoading ? (y(), V(Mn, {
            key: 3,
            class: E(c(fe).formSelectIcon),
            size: 16
          }, null, 8, ["class"])) : (y(), V(ft, {
            key: 4,
            class: E(c(fe).formSelectIcon),
            name: "angle-down"
          }, null, 8, ["class"]))
        ]),
        _: 1
      }, 16, ["class", "id", "aria-disabled"]),
      (y(), V(Af, { to: "body" }, [
        B(c(Xl), null, {
          default: j(() => [
            h.value && !c(s) ? (y(), V(p8, {
              key: 0,
              ref: "anchorPopup",
              class: E(c(Bt)(
                c(fe).formSelectPopup,
                m.value && c(fe).isKeyboardAction,
                e.isSearchable && c(fe).isSearchable
              )),
              anchor: o.value,
              direction: "vertical",
              "use-anchor-width": ""
            }, {
              default: j(() => [
                e.isSearchable ? (y(), V(Vs, {
                  key: 0,
                  modelValue: i.value,
                  "onUpdate:modelValue": U[1] || (U[1] = (F) => i.value = F),
                  ref: "searchInputElement",
                  "auto-complete": "off",
                  class: E(c(fe).formSelectInput),
                  type: "search",
                  "icon-trailing": "magnifying-glass",
                  placeholder: c(a)("flux.search"),
                  onKeydown: R
                }, null, 8, ["modelValue", "class", "placeholder"])) : ee("", !0),
                !e.isLoading && e.options.length === 0 ? (y(), V(Ud, { key: 1 }, {
                  default: j(() => [
                    B(Wd, {
                      label: c(a)("flux.noItems")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })) : (y(), V(Ud, { key: 2 }, {
                  default: j(() => [
                    (y(!0), z(pe, null, kt(e.options, ([F, L], W) => (y(), z(pe, {
                      key: `group-${W}`
                    }, [
                      B(bk, null, {
                        default: j(() => [
                          c(jl)(F) ? (y(), V(Wd, {
                            key: 0,
                            "icon-leading": F.icon,
                            label: F.label
                          }, null, 8, ["icon-leading", "label"])) : ee("", !0),
                          (y(!0), z(pe, null, kt(L, (Q, N) => (y(), z(pe, null, [
                            c(Ns)(Q) ? (y(), V(ul, {
                              ref_for: !0,
                              ref: "optionElements",
                              key: N,
                              command: Q.command,
                              "command-icon": Q.commandIcon,
                              "icon-leading": Q.icon,
                              "image-alt": Q.imageAlt,
                              "image-src": Q.imageSrc,
                              "is-active": !!e.selected.find((ie) => ie.value === Q.value),
                              "is-highlighted": b.value === Q.value,
                              label: Q.label,
                              type: "button",
                              onClick: (ie) => $(Q.value)
                            }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : ee("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1024),
                      c(Ns)(F) ? (y(), V(ul, {
                        ref_for: !0,
                        ref: "optionElements",
                        key: `item-${W}`,
                        command: F.command,
                        "command-icon": F.commandIcon,
                        "icon-leading": F.icon,
                        "image-alt": F.imageAlt,
                        "image-src": F.imageSrc,
                        "is-active": !!e.selected.find((Q) => Q.value === F.value),
                        "is-highlighted": b.value === F.value,
                        label: F.label,
                        type: "button",
                        onClick: (Q) => $(F.value)
                      }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : ee("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["class", "anchor"])) : ee("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
});
const xk = "divider", Sk = "dividerContentStart divider", Ik = "dividerContentCenter divider", Tk = "dividerContentEnd divider", Ck = "dividerContent", Mk = "dividerLine", Ek = "separator", $k = "separatorHorizontal separator", Ak = "separatorVertical separator";
var qd = { divider: xk, dividerContentStart: Sk, dividerContentCenter: Ik, dividerContentEnd: Tk, dividerContent: Ck, dividerLine: Mk, separator: Ek, separatorHorizontal: $k, separatorVertical: Ak };
const Fk = ["aria-orientation"];
var Lk = /* @__PURE__ */ q({
  __name: "FluxSeparator",
  props: {
    direction: { default: "horizontal" }
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(e.direction === "horizontal" ? c(qd).separatorHorizontal : c(qd).separatorVertical),
      role: "separator",
      "aria-orientation": e.direction
    }, null, 10, Fk));
  }
});
const Ok = { key: 1 };
var jd = /* @__PURE__ */ q({
  __name: "FluxFormFieldAddition",
  props: {
    icon: {},
    message: {},
    mode: { default: "hint" }
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(Bt)(
        e.mode === "error" && c(fe).formFieldAdditionError,
        e.mode === "hint" && c(fe).formFieldAdditionHint
      )),
      role: "alert"
    }, [
      e.icon ? (y(), V(ft, {
        key: 0,
        class: E(c(fe).formFieldAdditionIcon),
        name: e.icon,
        size: 16
      }, null, 8, ["class", "name"])) : ee("", !0),
      e.message ? (y(), z("span", Ok, we(e.message), 1)) : ee("", !0),
      oe(t.$slots, "default")
    ], 2));
  }
});
const Dk = ["for"];
var fi = /* @__PURE__ */ q({
  __name: "FluxFormField",
  props: {
    currentLength: {},
    error: {},
    hint: {},
    isOptional: { type: Boolean },
    label: {},
    maxLength: {}
  },
  setup(e) {
    const t = Wf(), n = ou(), i = sr();
    return Xn(gh, {
      id: n
    }), (s, r) => (y(), z("div", {
      class: E(c(fe).formField)
    }, [
      Ie("label", {
        for: c(n),
        class: E(c(fe).formFieldHeader)
      }, [
        Ie("span", {
          class: E(c(fe).formFieldLabel)
        }, we(e.label), 3),
        e.isOptional ? (y(), z("span", {
          key: 0,
          class: E(c(fe).formFieldOptional)
        }, " (" + we(c(i)("flux.optional")) + ") ", 3)) : ee("", !0),
        "value" in t ? (y(), z("span", {
          key: 1,
          class: E(c(fe).formFieldValue)
        }, [
          oe(s.$slots, "value", po(Lr({ currentLength: e.currentLength, error: e.error, hint: e.hint, id: c(n), isOptional: e.isOptional, label: e.label, maxLength: e.maxLength })))
        ], 2)) : ee("", !0)
      ], 10, Dk),
      oe(s.$slots, "default", po(Lr({ id: c(n) }))),
      e.currentLength && e.maxLength && e.maxLength > 0 ? (y(), z("span", {
        key: 0,
        class: E(c(fe).formFieldCounter)
      }, we(e.currentLength) + " / " + we(e.maxLength), 3)) : ee("", !0),
      e.error ? (y(), V(jd, {
        key: 1,
        icon: "circle-exclamation",
        mode: "error",
        message: e.error
      }, null, 8, ["message"])) : ee("", !0),
      e.hint ? (y(), V(jd, {
        key: 2,
        icon: "circle-info",
        message: e.hint
      }, null, 8, ["message"])) : ee("", !0),
      oe(s.$slots, "addition", po(Lr({ currentLength: e.currentLength, error: e.error, hint: e.hint, id: c(n), isOptional: e.isOptional, label: e.label, maxLength: e.maxLength })))
    ], 2));
  }
}), no = /* @__PURE__ */ q({
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
  setup(e) {
    return (t, n) => (y(), V(Qa, Ft({ type: e.type, disabled: e.disabled, iconLeading: e.iconLeading, iconTrailing: e.iconTrailing, isFilled: e.isFilled, isLoading: e.isLoading, isSubmit: e.isSubmit, label: e.label, size: e.size, href: e.href, rel: e.rel, target: e.target, to: e.to }, {
      "css-class": c(wi).primaryButton,
      "css-class-icon": c(wi).primaryButtonIcon,
      "css-class-label": c(wi).primaryButtonLabel,
      onClick: n[0] || (n[0] = (i) => t.$emit("click", i)),
      onMouseenter: n[1] || (n[1] = (i) => t.$emit("mouseenter", i)),
      onMouseleave: n[2] || (n[2] = (i) => t.$emit("mouseleave", i))
    }), cu({ _: 2 }, [
      kt(c(vm), (i) => ({
        name: i,
        fn: j(() => [
          oe(t.$slots, i)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
}), Gd = /* @__PURE__ */ q({
  __name: "FluxFormSelect",
  props: /* @__PURE__ */ Gt({
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
  setup(e) {
    const t = vt(e, "searchQuery"), n = vt(e, "modelValue"), i = hs(In(() => e.disabled)), { groups: s, selected: r, values: a } = cg(n, e.isMultiple, In(() => e.options), t);
    function o(u) {
      c(e.isMultiple) && (n.value = c(a).filter((d) => d !== u));
    }
    function l(u) {
      c(e.isMultiple) ? n.value = [...c(a), u] : n.value = u;
    }
    return (u, d) => (y(), V(c(wk), {
      searchQuery: t.value,
      "onUpdate:searchQuery": d[0] || (d[0] = (f) => t.value = f),
      disabled: c(i),
      "is-multiple": e.isMultiple,
      "is-searchable": e.isSearchable,
      options: c(s),
      placeholder: e.placeholder,
      selected: c(r),
      onDeselect: o,
      onSelect: l
    }, null, 8, ["searchQuery", "disabled", "is-multiple", "is-searchable", "options", "placeholder", "selected"]));
  }
}), Bk = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "FluxDisabled",
  props: {
    disabled: { type: Boolean, default: !0 }
  },
  setup(e) {
    return Xn(ph, In(() => e.disabled)), (t, n) => oe(t.$slots, "default");
  }
}), _k = /* @__PURE__ */ q({
  __name: "FluxFormColumn",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(fe).formColumn)
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
}), Nu = /* @__PURE__ */ q({
  __name: "FluxPaneFooter",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(rn).paneFooter)
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const Nk = ["aria-disabled"];
var Vk = /* @__PURE__ */ q({
  __name: "FluxForm",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = t;
    function i() {
      n("submit");
    }
    return (s, r) => (y(), z("form", {
      class: E(c(fe).form),
      "aria-disabled": e.disabled ? !0 : void 0,
      onSubmit: r[0] || (r[0] = pu((a) => i(), ["prevent"]))
    }, [
      B(Bk, { disabled: e.disabled }, {
        default: j(() => [
          oe(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled"])
    ], 42, Nk));
  }
}), Rk = /* @__PURE__ */ q({
  __name: "FluxFormInputGroup",
  props: {
    isSecondary: { type: Boolean },
    isCondensed: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(Bt)(
        c(fe).formInputGroup,
        e.isCondensed && c(fe).isCondensed,
        e.isSecondary && c(fe).isSecondary
      )),
      role: "textbox"
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const zk = ["id", "autocomplete", "autofocus", "disabled", "maxlength", "placeholder", "aria-disabled"];
var Pk = /* @__PURE__ */ q({
  __name: "FluxFormTextArea",
  props: /* @__PURE__ */ Gt({
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
  emits: /* @__PURE__ */ Gt(["blur", "focus"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = t, i = vt(e, "modelValue"), s = hs(In(() => e.disabled)), { id: r } = Bu();
    return (a, o) => ru((y(), z("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l),
      ref: "input",
      class: E(c(s) ? c(fe).formTextAreaDisabled : c(fe).formTextAreaEnabled),
      id: c(r),
      autocomplete: e.autoComplete,
      autofocus: e.autoFocus,
      disabled: c(s),
      maxlength: e.maxLength,
      placeholder: e.placeholder,
      style: wt({
        "--rows": e.rows
      }),
      "aria-disabled": c(s) ? !0 : void 0,
      onBlur: o[1] || (o[1] = (l) => n("blur")),
      onFocus: o[2] || (o[2] = (l) => n("focus"))
    }, null, 46, zk)), [
      [Jr, i.value]
    ]);
  }
}), Vr = q({
  emits: ["close"],
  inheritAttrs: !1,
  props: {
    isCloseable: { default: !1, type: Boolean },
    size: { default: "small", type: String }
  },
  setup(e, { attrs: t, emit: n, slots: i }) {
    return f4(
      t,
      e,
      n,
      i,
      Bt(
        e.size === "small" && Ht.overlaySmall,
        e.size === "medium" && Ht.overlayMedium,
        e.size === "large" && Ht.overlayLarge
      ),
      H3
    );
  }
});
const Hk = { key: 0 }, Wk = { key: 1 };
var io = /* @__PURE__ */ q({
  __name: "FluxPaneHeader",
  props: {
    icon: {},
    subTitle: {},
    title: {}
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(c(rn).paneHeader)
    }, [
      oe(t.$slots, "before"),
      e.icon ? (y(), V(ft, {
        key: 0,
        class: E(c(rn).paneHeaderIcon),
        size: 20,
        name: e.icon
      }, null, 8, ["class", "name"])) : ee("", !0),
      e.title || e.subTitle ? (y(), z("div", {
        key: 1,
        class: E(c(rn).paneHeaderCaption)
      }, [
        e.title ? (y(), z("strong", Hk, we(e.title), 1)) : ee("", !0),
        e.subTitle ? (y(), z("span", Wk, we(e.subTitle), 1)) : ee("", !0)
      ], 2)) : ee("", !0),
      oe(t.$slots, "after")
    ], 2));
  }
}), Uk = /* @__PURE__ */ q({
  __name: "FluxAlert",
  props: {
    alert: {}
  },
  setup(e) {
    const t = sr();
    return (n, i) => (y(), V(eo, null, {
      default: j(() => [
        B(io, {
          icon: e.alert.icon,
          title: e.alert.title
        }, null, 8, ["icon", "title"]),
        B(Js, {
          innerHTML: e.alert.message
        }, null, 8, ["innerHTML"]),
        B(Nu, null, {
          default: j(() => [
            B(to),
            B(no, {
              "icon-leading": "circle-check",
              label: c(t)("flux.ok"),
              onClick: i[0] || (i[0] = (s) => e.alert.onClose())
            }, null, 8, ["label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), qk = /* @__PURE__ */ q({
  __name: "FluxConfirm",
  props: {
    confirm: {}
  },
  setup(e) {
    const t = sr();
    return (n, i) => (y(), V(eo, null, {
      default: j(() => [
        B(io, {
          icon: e.confirm.icon,
          title: e.confirm.title
        }, null, 8, ["icon", "title"]),
        B(Js, {
          innerHTML: e.confirm.message
        }, null, 8, ["innerHTML"]),
        B(Nu, null, {
          default: j(() => [
            B(to),
            B(rs, {
              label: c(t)("flux.cancel"),
              onClick: i[0] || (i[0] = (s) => e.confirm.onCancel())
            }, null, 8, ["label"]),
            B(no, {
              "icon-leading": "circle-check",
              label: c(t)("flux.ok"),
              onClick: i[1] || (i[1] = (s) => e.confirm.onConfirm())
            }, null, 8, ["label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), jk = /* @__PURE__ */ q({
  __name: "FluxPrompt",
  props: {
    prompt: {}
  },
  setup(e) {
    const t = vn("input"), n = sr(), i = ne(""), s = Me(() => c(i).trim().length > 0);
    $n(() => {
      const a = c(t);
      requestAnimationFrame(() => a?.$el.querySelector("input")?.focus());
    });
    function r(a) {
      !c(s) || a.key !== "Enter" || e.prompt.onConfirm(c(i));
    }
    return (a, o) => (y(), V(eo, null, {
      default: j(() => [
        B(io, {
          icon: e.prompt.icon,
          title: e.prompt.title
        }, null, 8, ["icon", "title"]),
        B(Js, {
          innerHTML: e.prompt.message
        }, null, 8, ["innerHTML"]),
        B(Js, null, {
          default: j(() => [
            B(fi, {
              label: e.prompt.fieldLabel
            }, {
              default: j(() => [
                B(Vs, {
                  ref: "input",
                  modelValue: i.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l),
                  placeholder: e.prompt.fieldPlaceholder,
                  type: e.prompt.fieldType ?? "text",
                  onKeydown: r
                }, null, 8, ["modelValue", "placeholder", "type"])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }),
        B(Nu, null, {
          default: j(() => [
            B(to),
            B(rs, {
              label: c(n)("flux.cancel"),
              onClick: o[1] || (o[1] = (l) => e.prompt.onCancel())
            }, null, 8, ["label"]),
            B(no, {
              disabled: !s.value,
              "icon-leading": "circle-check",
              label: c(n)("flux.ok"),
              onClick: o[2] || (o[2] = (l) => e.prompt.onConfirm(i.value))
            }, null, 8, ["disabled", "label"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Gk = /* @__PURE__ */ q({
  __name: "FluxOverlayProvider",
  setup(e) {
    const { alerts: t, confirms: n, prompts: i } = ur();
    return (s, r) => (y(), z(pe, null, [
      Ie("div", {
        class: E(c(Ht).overlayProvider)
      }, [
        Ie("div", {
          class: E(c(Ht).overlayShade)
        }, null, 2)
      ], 2),
      B(Vr, { size: "medium" }, {
        default: j(() => [
          (y(!0), z(pe, null, kt(c(t), (a) => (y(), V(Uk, {
            key: a.id,
            alert: a
          }, null, 8, ["alert"]))), 128))
        ]),
        _: 1
      }),
      B(Vr, { size: "medium" }, {
        default: j(() => [
          (y(!0), z(pe, null, kt(c(n), (a) => (y(), V(qk, {
            key: a.id,
            confirm: a
          }, null, 8, ["confirm"]))), 128))
        ]),
        _: 1
      }),
      B(Vr, { size: "medium" }, {
        default: j(() => [
          (y(!0), z(pe, null, kt(c(i), (a) => (y(), V(jk, {
            key: a.id,
            prompt: a
          }, null, 8, ["prompt"]))), 128))
        ]),
        _: 1
      })
    ], 64));
  }
});
const Zk = "progressBar", Yk = "progressBarTrack", Jk = "progressBarValue", Xk = "progressBarValueComplete progressBarValue", Kk = "progressBarValueIncomplete progressBarValue", Qk = "progressBarTrackIndeterminate progressBarTrack", e7 = "progressBarIndeterminate", t7 = "progressBarInfo", n7 = "progressBarProgress", i7 = "progressBarStatus", s7 = "basePaneStructure";
var Rn = { progressBar: Zk, progressBarTrack: Yk, progressBarValue: Jk, progressBarValueComplete: Xk, progressBarValueIncomplete: Kk, progressBarTrackIndeterminate: Qk, progressBarIndeterminate: e7, progressBarInfo: t7, progressBarProgress: n7, progressBarStatus: i7, basePaneStructure: s7 }, r7 = /* @__PURE__ */ q({
  __name: "FluxProgressBar",
  props: {
    isIndeterminate: { type: Boolean },
    max: { default: 1 },
    min: { default: 0 },
    status: {},
    value: {}
  },
  setup(e) {
    const t = Me(() => e.isIndeterminate ? 0 : ((e.value ?? e.min) - e.min) / (e.max - e.min)), n = Me(() => new Intl.NumberFormat(navigator.language, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(c(t) ?? 0));
    return (i, s) => (y(), V(bm, {
      class: E(c(Rn).progressBar),
      gap: 6,
      role: "progressbar",
      "aria-valuenow": e.value,
      "aria-valuemax": e.max,
      "aria-valuemin": e.min
    }, {
      default: j(() => [
        Ie("div", {
          class: E(e.isIndeterminate ? c(Rn).progressBarTrackIndeterminate : c(Rn).progressBarTrack)
        }, [
          Ie("div", {
            class: E(t.value >= 1 ? c(Rn).progressBarValueComplete : c(Rn).progressBarValueIncomplete),
            style: wt({
              width: `${e.isIndeterminate ? 100 : t.value * 100}%`
            })
          }, null, 6)
        ], 2),
        e.status ? (y(), z("div", {
          key: 0,
          class: E(c(Rn).progressBarInfo)
        }, [
          B(c(Xl), null, {
            default: j(() => [
              (y(), z("span", {
                key: e.status,
                class: E(c(Rn).progressBarStatus)
              }, we(e.status), 3))
            ]),
            _: 1
          }),
          B(c(Xl), null, {
            default: j(() => [
              e.isIndeterminate ? ee("", !0) : (y(), z("span", {
                key: 0,
                class: E(c(Rn).progressBarProgress)
              }, we(n.value), 3))
            ]),
            _: 1
          })
        ], 2)) : ee("", !0)
      ]),
      _: 1
    }, 8, ["class", "aria-valuenow", "aria-valuemax", "aria-valuemin"]));
  }
});
const a7 = ["disabled", "max", "min", "step"];
var o7 = /* @__PURE__ */ q({
  __name: "FluxQuantitySelector",
  props: /* @__PURE__ */ Gt({
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
  setup(e) {
    const t = vt(e, "modelValue"), n = hs(In(() => e.disabled)), i = vn("input"), s = ne(0);
    function r() {
      c(n) || (t.value = Math.max(e.min, c(t) - e.step));
    }
    function a() {
      c(n) || (t.value = Math.min(e.max, c(t) + e.step));
    }
    function o() {
      const l = Cn(i);
      !l || isNaN(l.valueAsNumber) || (s.value = 0, requestAnimationFrame(() => {
        s.value = Math.max(51, l.scrollWidth + 30);
      }));
    }
    return Ma(() => {
      if (c(t) > e.max) {
        a();
        return;
      }
      if (c(t) < e.min) {
        r();
        return;
      }
      o();
    }), (l, u) => (y(), V(m6, {
      class: E(c(fe).quantitySelector),
      "aria-disabled": c(n) ? !0 : void 0
    }, {
      default: j(() => [
        B(rs, {
          class: E(c(fe).quantitySelectorButton),
          disabled: c(n) || t.value <= e.min,
          "icon-leading": "minus",
          tabindex: "-1",
          onClick: r
        }, null, 8, ["class", "disabled"]),
        ru(Ie("input", {
          ref: "input",
          "onUpdate:modelValue": u[0] || (u[0] = (d) => t.value = d),
          class: E(c(fe).quantitySelectorInput),
          style: wt({
            width: `${s.value}px`
          }),
          disabled: c(n),
          tabindex: "0",
          type: "number",
          max: e.max,
          min: e.min,
          step: e.step
        }, null, 14, a7), [
          [Jr, t.value]
        ]),
        B(rs, {
          class: E(c(fe).quantitySelectorButton),
          disabled: c(n) || t.value >= e.max,
          "icon-leading": "plus",
          tabindex: "-1",
          onClick: a
        }, null, 8, ["class", "disabled"])
      ]),
      _: 1
    }, 8, ["class", "aria-disabled"]));
  }
});
const { basePane: Li } = Ka, l7 = `snackbar ${Li}`, u7 = "action", c7 = "progressBar", d7 = "snackbarContent", f7 = "icon", h7 = "spinner", m7 = "snackbarBody", p7 = "snackbarMessage", g7 = "snackbarSubMessage", y7 = "snackbarTitle", v7 = "snackbarAction", b7 = "snackbarActions", k7 = `snackbarGray snackbar ${Li}`, w7 = `snackbarPrimary snackbar ${Li}`, x7 = "spinnerEffect", S7 = "spinnerValue", I7 = `snackbarDanger snackbar ${Li}`, T7 = `snackbarInfo snackbar ${Li}`, C7 = `snackbarSuccess snackbar ${Li}`, M7 = `snackbarWarning snackbar ${Li}`, E7 = "snackbars", $7 = "snackbarsEnterActive", A7 = "snackbarsLeaveActive", F7 = "snackbarsMove", L7 = "snackbarsEnterFrom", O7 = "snackbarsLeaveTo";
var Je = { snackbar: l7, action: u7, progressBar: c7, snackbarContent: d7, icon: f7, spinner: h7, snackbarBody: m7, snackbarMessage: p7, snackbarSubMessage: g7, snackbarTitle: y7, snackbarAction: v7, snackbarActions: b7, snackbarGray: k7, snackbarPrimary: w7, spinnerEffect: x7, spinnerValue: S7, snackbarDanger: I7, snackbarInfo: T7, snackbarSuccess: C7, snackbarWarning: M7, snackbars: E7, snackbarsEnterActive: $7, snackbarsLeaveActive: A7, snackbarsMove: F7, snackbarsEnterFrom: L7, snackbarsLeaveTo: O7 };
const D7 = ["onClick"];
var B7 = /* @__PURE__ */ q({
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
  setup(e, { emit: t }) {
    const n = t, i = cn(), s = ne(null), r = Me(() => e.actions && Object.entries(e.actions).length > 0);
    lu(() => {
      s.value && ca(s.value);
    });
    function a(l) {
      n("action", l);
    }
    function o() {
      n("close");
    }
    return Ma(() => {
      s.value && fm(s.value, i.props);
    }), Re(() => e.isRendered, () => {
      if (e.isRendered) {
        s.value && ca(s.value);
        return;
      }
      let l = i.props;
      l.onAction = a, l.onClose = o, s.value = Ou(l);
    }, { immediate: !0 }), (l, u) => e.isRendered ? (y(), z("div", {
      key: 0,
      class: E(c(Bt)(
        e.color === "gray" && c(Je).snackbarGray,
        e.color === "primary" && c(Je).snackbarPrimary,
        e.color === "danger" && c(Je).snackbarDanger,
        e.color === "info" && c(Je).snackbarInfo,
        e.color === "success" && c(Je).snackbarSuccess,
        e.color === "warning" && c(Je).snackbarWarning
      ))
    }, [
      Ie("div", {
        class: E(c(Je).snackbarContent)
      }, [
        e.isLoading ? (y(), V(Mn, {
          key: 0,
          size: 18
        })) : e.icon ? (y(), V(ft, {
          key: 1,
          size: 18,
          name: e.icon
        }, null, 8, ["name"])) : ee("", !0),
        Ie("div", {
          class: E(c(Je).snackbarBody)
        }, [
          e.title ? (y(), z("div", {
            key: 0,
            class: E(c(Je).snackbarTitle)
          }, we(e.title), 3)) : ee("", !0),
          e.message ? (y(), z("div", {
            key: 1,
            class: E(c(Je).snackbarMessage)
          }, we(e.message), 3)) : ee("", !0),
          e.progressIndeterminate || e.progressValue ? (y(), V(r7, {
            key: 2,
            "is-indeterminate": e.progressIndeterminate,
            max: e.progressMax,
            min: e.progressMin,
            status: e.progressStatus,
            value: e.progressValue
          }, null, 8, ["is-indeterminate", "max", "min", "status", "value"])) : ee("", !0),
          e.subMessage ? (y(), z("div", {
            key: 3,
            class: E(c(Je).snackbarSubMessage)
          }, we(e.subMessage), 3)) : ee("", !0)
        ], 2)
      ], 2),
      r.value ? (y(), z("div", {
        key: 0,
        class: E(c(Je).snackbarActions)
      }, [
        (y(!0), z(pe, null, kt(e.actions, (d, f) => (y(), z("button", {
          key: f,
          class: E(c(Je).snackbarAction),
          tabindex: "-1",
          type: "button",
          onClick: (m) => a(f)
        }, [
          Ie("span", null, we(d), 1)
        ], 10, D7))), 128))
      ], 2)) : ee("", !0),
      e.isCloseable ? (y(), V(Ab, {
        key: 1,
        icon: "xmark",
        onClick: u[0] || (u[0] = (d) => o())
      })) : ee("", !0)
    ], 2)) : ee("", !0);
  }
}), _7 = /* @__PURE__ */ q({
  __name: "FluxSnackbarProvider",
  setup(e) {
    const { snackbars: t } = ur();
    function n(i) {
      return (s) => i.onAction?.(s);
    }
    return (i, s) => (y(), V(fh, {
      name: "flux-snackbars",
      tag: "div",
      class: E(c(Je).snackbars),
      "enter-active-class": c(Je).snackbarsEnterActive,
      "enter-from-class": c(Je).snackbarsEnterFrom,
      "leave-active-class": c(Je).snackbarsLeaveActive,
      "leave-to-class": c(Je).snackbarsLeaveTo,
      "move-class": c(Je).snackbarsMove
    }, {
      default: j(() => [
        (y(!0), z(pe, null, kt(c(t).toReversed(), (r) => (y(), V(B7, Ft({
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
const N7 = "tooltip", V7 = "tooltipAbove tooltip", R7 = "tooltipBelow tooltip", z7 = "tooltipEnd tooltip", P7 = "tooltipStart tooltip";
var xs = { tooltip: N7, tooltipAbove: V7, tooltipBelow: R7, tooltipEnd: z7, tooltipStart: P7 }, H7 = q(() => {
  const { tooltip: e } = ur(), t = ne(null), n = ne(null), i = Me(() => c(e) ? c(e).contentSlot?.() ?? [c(e).content] : null), s = Me(() => !!c(e));
  function r() {
    const a = Cn(t), o = c(e);
    if (!o || !a || !c(i)) {
      n.value = null;
      return;
    }
    const { direction: l, origin: u } = o, d = 9, f = 15;
    if (!u) {
      n.value = null;
      return;
    }
    let { width: m, height: h } = a.getBoundingClientRect();
    const { scale: p } = getComputedStyle(a), { top: b, left: x, width: k, height: $ } = u.getBoundingClientRect();
    let S = Number(p ?? 1);
    S = isNaN(S) ? 1 : S, h /= S, m /= S, l === "horizontal" ? n.value = W7(b, x, m, h, k, $, d, f) : n.value = U7(b, x, m, h, k, $, d, f);
  }
  return Xn(cp, {
    calculate: r
  }), Re(i, () => requestAnimationFrame(r)), () => ji(W3, {}, {
    default: () => {
      if (!c(s))
        return;
      const a = c(n);
      return ji("div", {
        ref: t,
        class: a ? Bt(
          a.transition === "above" && xs.tooltipAbove,
          a.transition === "below" && xs.tooltipBelow,
          a.transition === "end" && xs.tooltipEnd,
          a.transition === "start" && xs.tooltipStart
        ) : xs.tooltip,
        style: {
          "--x": a?.x ?? void 0,
          "--y": a?.y ?? void 0,
          "--arrowAngle": a?.arrowAngle ?? void 0,
          "--arrowX": a?.arrowX ?? void 0,
          "--arrowY": a?.arrowY ?? void 0
        }
      }, c(i));
    }
  });
});
function W7(e, t, n, i, s, r, a, o) {
  let l, u, d, f, m, h;
  if (t > innerWidth / 2 ? (l = t - n - a, u = e + r / 2 - i / 2, d = "315deg", f = "100%", m = "50%", h = "start") : (l = t + s + a, u = e + r / 2 - i / 2, d = "135deg", f = "0", m = "50%", h = "end"), u + i > innerHeight - o) {
    const p = Math.min(u, innerHeight - i - o) - u;
    m = `calc(50% - ${p}px)`, u += p;
  }
  if (u < o) {
    const p = Math.max(u, o) - u;
    m = `calc(50% - ${p}px)`, u += p;
  }
  return {
    x: Math.round(l),
    y: Math.round(u),
    arrowAngle: d,
    arrowX: f,
    arrowY: m,
    transition: h
  };
}
function U7(e, t, n, i, s, r, a, o) {
  let l, u, d, f, m, h;
  if (e > 300 ? (l = t + s / 2 - n / 2, u = e - i - a, d = "45deg", f = "50%", m = "100%", h = "above") : (l = t + s / 2 - n / 2, u = e + r + a, d = "225deg", f = "50%", m = "0", h = "below"), l + n > innerWidth - o) {
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
    arrowAngle: d,
    arrowX: f,
    arrowY: m,
    transition: h
  };
}
const q7 = "root", j7 = "isLocked";
var cl = { root: q7, isLocked: j7 };
const G7 = ["inert"];
var Z7 = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "FluxRoot",
  setup(e) {
    const { inertMain: t } = ur();
    return Re(t, (n, i, s) => {
      n && (document.body.classList.add(cl.isLocked), s(() => document.body.classList.remove(cl.isLocked)));
    }, { immediate: !0 }), (n, i) => (y(), z(pe, null, [
      Ie("div", Ft(n.$attrs, {
        class: c(cl).root,
        inert: c(t)
      }), [
        oe(n.$slots, "default")
      ], 16, G7),
      B(Gk),
      B(_7),
      B(H7)
    ], 64));
  }
});
function On() {
  return (e) => Homey.__(e) ?? e;
}
function Y7(e, t) {
  const n = /* @__PURE__ */ bv(e, t);
  return () => {
    const i = n(), s = Object.getOwnPropertyNames(i), r = kv(i), a = {};
    for (const o of s)
      if (!(o.startsWith("$") || o.startsWith("_"))) {
        if (o in r) {
          a[o] = r[o];
          continue;
        }
        a[o] = i[o];
      }
    return a;
  };
}
var wm = Y7("list", () => {
  const e = ne([]), t = ne(!0), n = ne([]), i = ne(null), s = ne([]), r = Me(() => {
    const b = Object.groupBy(c(n), (k) => k.category || "__other__"), x = Object.entries(b).sort(([k], [$]) => {
      if (k === "__other__") return 1;
      if ($ === "__other__") return -1;
      const S = c(e).findIndex((w) => w.category === k), R = c(e).findIndex((w) => w.category === $);
      return S - R;
    });
    return Object.fromEntries(x);
  }), a = Me(() => c(n).length > 0);
  async function o(b, x, k) {
    const $ = c(n).findIndex((S) => S.id === x.id);
    $ !== -1 && (n.value[$].checked = k, k ? await Homey.api("POST", `/${b}/items/${x.id}/checked`) : await Homey.api("POST", `/${b}/items/${x.id}/unchecked`));
  }
  async function l(b, x, k) {
    const $ = c(n).findIndex((S) => S.id === x.id);
    $ === -1 || x.quantity === void 0 || (n.value[$].quantity = k === "increase" ? x.quantity + 1 : x.quantity - 1, await Homey.api("POST", `/${b}/items/${x.id}/quantity`, {
      quantity: k === "increase" ? 1 : -1
    }));
  }
  async function u(b) {
    t.value = !0, e.value = await Homey.api("GET", `/${b}/categories`), t.value = !1;
  }
  async function d(b) {
    t.value = !0, await p(
      await Homey.api("GET", `/${b}/items`)
    ), t.value = !1;
  }
  async function f(b) {
    t.value = !0, i.value = await Homey.api("GET", `/${b}`), t.value = !1;
  }
  async function m(b) {
    t.value = !0, s.value = await Homey.api("GET", `/${b}/persons`), t.value = !1;
  }
  async function h(b, x) {
    const k = c(n).findIndex(($) => $.id === x.id);
    k !== -1 && (n.value.splice(k, 1), await Homey.api("DELETE", `/${b}/items/${x.id}`));
  }
  async function p(b) {
    n.value = b;
  }
  return {
    categories: jn(e),
    isLoading: jn(t),
    items: jn(n),
    look: jn(i),
    persons: jn(s),
    categorizedItems: r,
    hasItems: a,
    changeChecked: o,
    changeQuantity: l,
    loadCategories: u,
    loadItems: d,
    loadLook: f,
    loadPersons: m,
    removeItem: h,
    setItems: p
  };
}), xm = /* @__PURE__ */ q({
  __name: "ListForm",
  props: /* @__PURE__ */ Gt({
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
  emits: /* @__PURE__ */ Gt(["close", "save"], ["update:category", "update:content", "update:person", "update:dueDate", "update:dueTime", "update:quantity"]),
  setup(e, { emit: t }) {
    const n = t, i = vt(e, "category"), s = vt(e, "content"), r = vt(e, "person"), a = vt(e, "dueDate"), o = vt(e, "dueTime"), l = vt(e, "quantity"), u = On(), {
      categories: d,
      persons: f,
      loadCategories: m,
      loadPersons: h
    } = wm(), p = Me(() => c(s).trim().length > 2), b = Me(() => c(d).map((R) => ({
      label: u(`grocery.category.${R.category}`),
      icon: R.icon,
      value: R.category
    }))), x = Me(() => [
      { value: null, label: u("widget.list.add.anyone") },
      ...c(f).map((R) => ({
        label: R.name,
        imageSrc: R.image,
        value: R.id
      }))
    ]);
    $n(async () => {
      await Promise.allSettled([
        m(e.deviceId),
        h(e.deviceId)
      ]);
    });
    function k() {
      a.value = null, o.value = null;
    }
    async function $() {
      n("close");
    }
    async function S() {
      n("save");
    }
    return (R, w) => (y(), V(c(eo), { style: { "max-height": "calc(100dvh - 30px)", width: "calc(100dvw - 30px)", "overflow-x": "hidden" } }, {
      default: j(() => [
        B(c(io), { title: e.title }, null, 8, ["title"]),
        B(c(Js), null, {
          default: j(() => [
            B(c(Vk), null, {
              default: j(() => [
                B(c(_k), null, {
                  default: j(() => [
                    e.type === "product" ? (y(), z(pe, { key: 0 }, [
                      B(c(fi), {
                        label: c(u)("widget.list.add.product")
                      }, {
                        default: j(() => [
                          B(c(Vs), {
                            modelValue: s.value,
                            "onUpdate:modelValue": w[0] || (w[0] = (I) => s.value = I)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      B(c(fi), {
                        "is-optional": "",
                        label: c(u)("widget.list.add.category")
                      }, {
                        default: j(() => [
                          B(c(Gd), {
                            modelValue: i.value,
                            "onUpdate:modelValue": w[1] || (w[1] = (I) => i.value = I),
                            options: b.value
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      B(c(fi), {
                        label: c(u)("widget.list.add.quantity")
                      }, {
                        default: j(() => [
                          B(c(o7), {
                            modelValue: l.value,
                            "onUpdate:modelValue": w[2] || (w[2] = (I) => l.value = I),
                            min: 1,
                            step: 1,
                            style: { "align-self": "start" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ], 64)) : (y(), V(c(fi), {
                      key: 1,
                      label: c(u)("widget.list.add.content")
                    }, {
                      default: j(() => [
                        B(c(Pk), {
                          modelValue: s.value,
                          "onUpdate:modelValue": w[3] || (w[3] = (I) => s.value = I),
                          rows: 2
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])),
                    e.type === "task" ? (y(), V(c(fi), {
                      key: 2,
                      "is-optional": "",
                      label: c(u)("widget.list.add.person")
                    }, {
                      default: j(() => [
                        B(c(Gd), {
                          modelValue: r.value,
                          "onUpdate:modelValue": w[4] || (w[4] = (I) => r.value = I),
                          options: x.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : ee("", !0),
                    e.type === "task" ? (y(), V(c(fi), {
                      key: 3,
                      "is-optional": "",
                      label: c(u)("widget.list.add.due")
                    }, {
                      default: j(() => [
                        B(c(Rk), null, {
                          default: j(() => [
                            B(c(Vs), {
                              modelValue: a.value,
                              "onUpdate:modelValue": w[5] || (w[5] = (I) => a.value = I),
                              type: "date"
                            }, null, 8, ["modelValue"]),
                            B(c(Lk), { direction: "vertical" }),
                            B(c(Vs), {
                              modelValue: o.value,
                              "onUpdate:modelValue": w[6] || (w[6] = (I) => o.value = I),
                              type: "time"
                            }, null, 8, ["modelValue"]),
                            B(c(rs), {
                              "icon-leading": "trash",
                              onClick: w[7] || (w[7] = (I) => k())
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : ee("", !0),
                    B(c(Q6), { style: { width: "100%" } }, {
                      default: j(() => [
                        B(c(rs), {
                          label: c(u)("widget.list.add.cancel"),
                          style: { "flex-grow": "1" },
                          onClick: w[8] || (w[8] = (I) => $())
                        }, null, 8, ["label"]),
                        B(c(no), {
                          disabled: !p.value,
                          label: e.saveLabel,
                          style: { "flex-grow": "1" },
                          onClick: w[9] || (w[9] = (I) => S())
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
}), J7 = /* @__PURE__ */ q({
  __name: "ListAdd",
  props: {
    deviceId: {},
    type: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, i = On(), s = un({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = Me(() => {
      switch (e.type) {
        case "note":
          return i("widget.list.add.title.note");
        case "product":
          return i("widget.list.add.title.product");
        case "task":
          return i("widget.list.add.title.task");
      }
    });
    async function a() {
      n("close");
    }
    async function o() {
      await Homey.api("POST", `/${e.deviceId}/items`, {
        type: e.type,
        category: s.category,
        content: s.content,
        personId: s.person,
        dueDate: s.dueDate,
        dueTime: s.dueTime,
        quantity: s.quantity
      }), await a();
    }
    return (l, u) => (y(), V(xm, {
      category: s.category,
      "onUpdate:category": u[0] || (u[0] = (d) => s.category = d),
      content: s.content,
      "onUpdate:content": u[1] || (u[1] = (d) => s.content = d),
      person: s.person,
      "onUpdate:person": u[2] || (u[2] = (d) => s.person = d),
      "due-date": s.dueDate,
      "onUpdate:dueDate": u[3] || (u[3] = (d) => s.dueDate = d),
      "due-time": s.dueTime,
      "onUpdate:dueTime": u[4] || (u[4] = (d) => s.dueTime = d),
      quantity: s.quantity,
      "onUpdate:quantity": u[5] || (u[5] = (d) => s.quantity = d),
      "device-id": e.deviceId,
      "save-label": c(i)("widget.list.add.add"),
      title: r.value,
      type: e.type,
      onClose: u[6] || (u[6] = (d) => a()),
      onSave: u[7] || (u[7] = (d) => o())
    }, null, 8, ["category", "content", "person", "due-date", "due-time", "quantity", "device-id", "save-label", "title", "type"]));
  }
}), X7 = /* @__PURE__ */ q({
  __name: "ListEdit",
  props: {
    deviceId: {},
    item: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, i = On(), s = un({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = Me(() => {
      switch (e.item.type) {
        case "note":
          return i("widget.list.edit.title.note");
        case "product":
          return i("widget.list.edit.title.product");
        case "task":
          return i("widget.list.edit.title.task");
      }
    });
    async function a() {
      n("close");
    }
    async function o() {
      await Homey.api("POST", `/${e.deviceId}/items/${e.item.id}`, {
        category: s.category,
        content: s.content,
        personId: s.person,
        dueDate: s.dueDate,
        dueTime: s.dueTime,
        quantity: s.quantity
      }), await a();
    }
    return Re(() => e.item, (l) => {
      s.category = l.category, s.content = l.content, s.person = l.person?.id, s.dueDate = l.dueDate, s.dueTime = l.dueTime, s.quantity = l.quantity;
    }, { immediate: !0 }), (l, u) => (y(), V(xm, {
      category: s.category,
      "onUpdate:category": u[0] || (u[0] = (d) => s.category = d),
      content: s.content,
      "onUpdate:content": u[1] || (u[1] = (d) => s.content = d),
      person: s.person,
      "onUpdate:person": u[2] || (u[2] = (d) => s.person = d),
      "due-date": s.dueDate,
      "onUpdate:dueDate": u[3] || (u[3] = (d) => s.dueDate = d),
      "due-time": s.dueTime,
      "onUpdate:dueTime": u[4] || (u[4] = (d) => s.dueTime = d),
      quantity: s.quantity,
      "onUpdate:quantity": u[5] || (u[5] = (d) => s.quantity = d),
      "device-id": e.deviceId,
      "save-label": c(i)("widget.list.add.save"),
      title: r.value,
      type: e.item.type,
      onClose: u[6] || (u[6] = (d) => a()),
      onSave: u[7] || (u[7] = (d) => o())
    }, null, 8, ["category", "content", "person", "due-date", "due-time", "quantity", "device-id", "save-label", "title", "type"]));
  }
}), Sm = /* @__PURE__ */ q({
  __name: "ButtonPrimary",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    function i(s) {
      n("click", s);
    }
    return (s, r) => (y(), z("button", {
      class: "homey-button-primary-full",
      type: "button",
      onClick: i
    }, we(e.label), 1));
  }
}), iS = /* @__PURE__ */ q({
  __name: "ButtonTransparent",
  props: {
    label: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = t;
    function i(s) {
      n("click", s);
    }
    return (s, r) => (y(), z("button", {
      class: "homey-button-transparent",
      type: "button",
      onClick: i
    }, we(e.label), 1));
  }
});
const Vu = /* @__PURE__ */ Symbol(), Ru = /* @__PURE__ */ Symbol(), K7 = ["title", "onClick"];
var Q7 = /* @__PURE__ */ q({
  __name: "ColorPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = vt(e, "modelValue"), n = On(), i = kn(Vu);
    return (s, r) => (y(), z("div", {
      class: E(s.$style.colorSelect)
    }, [
      (y(!0), z(pe, null, kt(c(i), (a) => (y(), z("div", {
        class: E(t.value === a.hex ? s.$style.colorSelectItemActive : s.$style.colorSelectItem),
        style: wt({ "--color": a.hex }),
        title: c(n)(a.label),
        onClick: (o) => t.value = a.hex
      }, null, 14, K7))), 256))
    ], 2));
  }
});
const e9 = "colorSelect", t9 = "colorSelectItem", n9 = "colorSelectItemActive colorSelectItem";
var i9 = { colorSelect: e9, colorSelectItem: t9, colorSelectItemActive: n9 }, je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
};
const s9 = {
  $style: i9
};
var Im = /* @__PURE__ */ je(Q7, [["__cssModules", s9]]);
const r9 = { class: "homey-form" };
var Tm = /* @__PURE__ */ q({
  __name: "Form",
  setup(e) {
    return (t, n) => (y(), z("form", r9, [
      oe(t.$slots, "default")
    ]));
  }
});
const a9 = { class: "homey-form-fieldset" }, o9 = { class: "homey-form-legend" }, l9 = {
  key: 0,
  class: "homey-form-group",
  style: { "margin-top": "6px" }
}, u9 = {
  key: 1,
  class: "homey-form-group"
}, c9 = { class: "homey-form-group" };
var Rs = /* @__PURE__ */ q({
  __name: "FormGroup",
  props: {
    description: {},
    title: {}
  },
  setup(e) {
    return (t, n) => (y(), z("fieldset", a9, [
      Ie("legend", o9, we(e.title), 1),
      e.description ? (y(), z("div", l9, we(e.description), 1)) : ee("", !0),
      t.$slots.before ? (y(), z("div", u9, [
        oe(t.$slots, "before")
      ])) : ee("", !0),
      Ie("div", c9, [
        oe(t.$slots, "default")
      ])
    ]));
  }
});
const d9 = ["for"], f9 = ["disabled", "id", "type"];
var Cm = /* @__PURE__ */ q({
  __name: "FormInput",
  props: /* @__PURE__ */ Gt({
    disabled: { type: Boolean },
    label: {},
    type: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = vt(e, "modelValue"), n = ou();
    return (i, s) => (y(), z(pe, null, [
      e.label ? (y(), z("label", {
        key: 0,
        class: "homey-form-label",
        for: c(n)
      }, we(e.label), 9, d9)) : ee("", !0),
      ru(Ie("input", {
        class: "homey-form-input",
        disabled: e.disabled,
        id: c(n),
        type: e.type,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => t.value = r)
      }, null, 8, f9), [
        [np, t.value]
      ])
    ], 64));
  }
}), h9 = /* @__PURE__ */ q({
  __name: "Icon",
  props: {
    icon: {}
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(t.$style.uiIcon),
      "data-icon": "",
      style: wt({
        "--icon": JSON.stringify(e.icon),
        "--icon-secondary": JSON.stringify(e.icon + e.icon)
      })
    }, null, 6));
  }
});
const m9 = "uiIcon";
var p9 = { uiIcon: m9 };
const g9 = {
  $style: p9
};
var xi = /* @__PURE__ */ je(h9, [["__cssModules", g9]]), y9 = /* @__PURE__ */ q({
  __name: "IconPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = vt(e, "modelValue"), n = On(), i = kn(Ru), s = ne(""), r = Me(() => {
      const a = c(s).toLowerCase().trim();
      return c(i).filter((o) => a.length > 0 && o.name.toLowerCase().includes(a) || a.length === 0 && o.unicode === c(t)).slice(0, 54);
    });
    return (a, o) => (y(), z(pe, null, [
      B(Cm, {
        modelValue: s.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => s.value = l),
        label: c(n)("element.search_icon"),
        type: "text"
      }, null, 8, ["modelValue", "label"]),
      Ie("div", {
        class: E(a.$style.iconSelect)
      }, [
        (y(!0), z(pe, null, kt(r.value, (l) => (y(), V(xi, {
          class: E(t.value === l.unicode ? a.$style.iconSelectItemActive : a.$style.iconSelectItem),
          icon: l.unicode,
          title: l.name,
          onClick: (u) => t.value = l.unicode
        }, null, 8, ["class", "icon", "title", "onClick"]))), 256))
      ], 2)
    ], 64));
  }
});
const v9 = "iconSelect", b9 = "iconSelectItem", k9 = "iconSelectItemActive iconSelectItem";
var w9 = { iconSelect: v9, iconSelectItem: b9, iconSelectItemActive: k9 };
const x9 = {
  $style: w9
};
var Mm = /* @__PURE__ */ je(y9, [["__cssModules", x9]]), sS = /* @__PURE__ */ q({
  __name: "ScrollContainer",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    const t = ne(null), n = ne(!1), i = ne(0), s = ne(0), r = ne(0), a = ne([]), o = ne(0), l = ne(0);
    let u = null;
    Ci(() => {
      f();
    });
    function d($, S) {
      const I = (1 - 1 / (Math.abs($) * 0.55 / S + 1)) * S;
      return Math.sign($) * I;
    }
    function f() {
      u && (cancelAnimationFrame(u), u = null);
    }
    function m() {
      const $ = c(a);
      if ($.length === 0)
        return 0;
      let S = 0, R = 0;
      for (let w = 0; w < $.length; w++) {
        const I = w + 1;
        R += $[w] * I, S += I;
      }
      return R / S;
    }
    function h() {
      const $ = c(t);
      if (!$)
        return;
      const S = c(r), R = $.clientHeight, w = d(S, R), I = Math.min(400, Math.max(200, Math.abs(w) * 3));
      $.style.transition = `transform ${I}ms cubic-bezier(0.25, 0.1, 0.25, 1)`, $.style.transform = "translateY(0)", r.value = 0;
    }
    function p($) {
      const S = c(t);
      if (!S)
        return;
      const R = S.clientHeight;
      let w = $, I = performance.now();
      function U(F) {
        const L = Math.min((F - I) / 16.67, 2);
        I = F;
        const W = S.scrollHeight - S.clientHeight;
        w *= Math.pow(0.95, L);
        const N = S.scrollTop + w * L;
        if (N < 0) {
          S.scrollTop = 0;
          const ie = Math.min(R * 0.3, Math.abs(w) * 8);
          r.value = ie;
          const me = d(ie, R);
          S.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => h());
        } else if (N > W) {
          S.scrollTop = W;
          const ie = -Math.min(R * 0.3, Math.abs(w) * 8);
          r.value = ie;
          const me = d(ie, R);
          S.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => h());
        } else
          S.scrollTop = N, Math.abs(w) > 0.1 && (u = requestAnimationFrame(U));
      }
      u = requestAnimationFrame(U);
    }
    function b($) {
      f();
      const S = c(t);
      if (!S)
        return;
      const R = $.touches[0];
      i.value = R.clientY, n.value = !0, o.value = R.clientY, l.value = Date.now(), a.value = [], s.value = S.scrollTop, S.style.transition = "none", r.value === 0 && (S.style.transform = "translateY(0)"), $.preventDefault();
    }
    function x($) {
      if (!c(n))
        return;
      const S = c(t);
      if (!S)
        return;
      const R = $.touches[0], w = Date.now(), I = w - c(l);
      if (I > 0 && I < 100) {
        const N = (c(o) - R.clientY) / I * 16;
        a.value.push(N), a.value.length > 5 && a.value.shift();
      }
      o.value = R.clientY, l.value = w;
      const U = c(i) - R.clientY, F = S.scrollHeight - S.clientHeight, L = c(s) + U, W = S.clientHeight;
      if (L < 0) {
        S.scrollTop = 0;
        const Q = -L;
        r.value = Q;
        const N = d(Q, W);
        S.style.transform = `translateY(${N}px)`;
      } else if (L > F) {
        S.scrollTop = F;
        const Q = -(L - F);
        r.value = Q;
        const N = d(Q, W);
        S.style.transform = `translateY(${N}px)`;
      } else
        S.scrollTop = L, r.value = 0, S.style.transform = "translateY(0)";
      $.preventDefault();
    }
    function k($) {
      if (!n.value)
        return;
      const S = t.value, R = m(), w = r.value !== 0;
      n.value = !1, S && w ? h() : S && Math.abs(R) > 0.5 && p(R), $.preventDefault();
    }
    return ($, S) => (y(), V(uu(e.tag), {
      ref_key: "containerRef",
      ref: t,
      onTouchstart: b,
      onTouchmove: x,
      onTouchend: k,
      onTouchcancel: k
    }, {
      default: j(() => [
        oe($.$slots, "default")
      ]),
      _: 3
    }, 544));
  }
}), S9 = /* @__PURE__ */ q({
  __name: "ListHeader",
  props: {
    color: {},
    icon: {},
    name: {}
  },
  emits: ["add", "addNote"],
  setup(e, { emit: t }) {
    const n = t;
    function i() {
      n("add");
    }
    function s() {
      n("addNote");
    }
    return (r, a) => (y(), z("div", {
      class: E(r.$style.listHeader)
    }, [
      B(c(xi), {
        class: E(r.$style.listHeaderIcon),
        icon: e.icon,
        style: wt({
          "--color": e.color
        })
      }, null, 8, ["class", "icon", "style"]),
      Ie("div", {
        class: E(["homey-text-bold", r.$style.listHeaderName])
      }, we(e.name), 3),
      Ie("button", {
        class: E(r.$style.listHeaderAdd),
        onClick: a[0] || (a[0] = (o) => s())
      }, [
        B(c(xi), {
          class: E(r.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2),
      Ie("button", {
        class: E(r.$style.listHeaderAdd),
        onClick: a[1] || (a[1] = (o) => i())
      }, [
        B(c(xi), {
          class: E(r.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
});
const I9 = "listHeader", T9 = "listHeaderIcon", C9 = "listHeaderName", M9 = "listHeaderAdd", E9 = "listHeaderAddIcon";
var $9 = { listHeader: I9, listHeaderIcon: T9, listHeaderName: C9, listHeaderAdd: M9, listHeaderAddIcon: E9 };
const A9 = {
  $style: $9
};
var F9 = /* @__PURE__ */ je(S9, [["__cssModules", A9]]), L9 = /* @__PURE__ */ q({
  __name: "ListLoading",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(t.$style.listLoading)
    }, [
      B(c(Mn))
    ], 2));
  }
});
const O9 = "listLoading";
var D9 = { listLoading: O9 };
const B9 = {
  $style: D9
};
var _9 = /* @__PURE__ */ je(L9, [["__cssModules", B9]]), N9 = /* @__PURE__ */ q({
  __name: "ListItemCategory",
  props: {
    icon: {},
    name: {}
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(t.$style.listItemCategory)
    }, [
      e.icon ? (y(), V(c(ft), {
        key: 0,
        class: E(t.$style.listItemCategoryIcon),
        name: e.icon,
        size: 16
      }, null, 8, ["class", "name"])) : ee("", !0),
      Ie("span", null, we(e.name), 1)
    ], 2));
  }
});
const V9 = "listItemCategory", R9 = "listItemCategoryIcon";
var z9 = { listItemCategory: V9, listItemCategoryIcon: R9 };
const P9 = {
  $style: z9
};
var Zd = /* @__PURE__ */ je(N9, [["__cssModules", P9]]);
const H9 = ["aria-checked"];
var W9 = /* @__PURE__ */ q({
  __name: "ListItem",
  props: {
    completable: { type: Boolean },
    direction: { default: "vertical" },
    icon: {},
    item: {},
    tappable: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      "aria-checked": e.item ? "checked" in e.item && e.item.checked ? "true" : "false" : void 0,
      class: E([
        e.direction === "horizontal" ? t.$style.listItemHorizontal : t.$style.listItemVertical,
        e.completable && t.$style.isCompletable,
        e.tappable && t.$style.isTappable
      ])
    }, [
      B(Ti, {
        mode: "out-in",
        name: "check"
      }, {
        default: j(() => [
          (y(), V(c(xi), {
            key: e.icon,
            class: E(t.$style.listItemIcon),
            icon: e.icon
          }, null, 8, ["class", "icon"]))
        ]),
        _: 1
      }),
      Ie("div", {
        class: E(t.$style.listItemBody)
      }, [
        oe(t.$slots, "default")
      ], 2)
    ], 10, H9));
  }
});
const U9 = "listItem", q9 = "isTappable", j9 = "listItemBody", G9 = "listItemIcon", Z9 = "listItemHorizontal listItem", Y9 = "listItemVertical listItem", J9 = "isCompletable";
var X9 = { listItem: U9, isTappable: q9, listItemBody: j9, listItemIcon: G9, listItemHorizontal: Z9, listItemVertical: Y9, isCompletable: J9 };
const K9 = {
  $style: X9
};
var so = /* @__PURE__ */ je(W9, [["__cssModules", K9]]), Q9 = /* @__PURE__ */ q({
  __name: "ListItemContent",
  props: {
    grow: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(e.grow ? t.$style.listItemContentGrow : t.$style.listItemContent),
      "data-content": ""
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const ew = "listItemContent", tw = "listItemContentGrow listItemContent";
var nw = { listItemContent: ew, listItemContentGrow: tw };
const iw = {
  $style: nw
};
var ro = /* @__PURE__ */ je(Q9, [["__cssModules", iw]]), sw = /* @__PURE__ */ q({
  __name: "ListItemEmpty",
  setup(e) {
    const t = On();
    return (n, i) => (y(), V(so, {
      class: E(n.$style.listItemEmpty),
      icon: ""
    }, {
      default: j(() => [
        B(ro, null, {
          default: j(() => [
            Ks(we(c(t)("widget.list.no_items")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const rw = "listItemEmpty";
var aw = { listItemEmpty: rw };
const ow = {
  $style: aw
};
var lw = /* @__PURE__ */ je(sw, [["__cssModules", ow]]), uw = /* @__PURE__ */ q({
  __name: "ListItemMount",
  props: {
    longPressDuration: { default: 300 }
  },
  emits: ["longPress", "remove", "tap"],
  setup(e, { emit: t }) {
    const n = t, i = ne(!1), s = ne(!1), r = ne(0), a = ne(0), o = ne(0), l = ne(0), u = ne(!0), d = ne(null), f = ne(!1), m = ne(null), h = ne(!1), p = Me(() => i.value ? r.value - o.value > 180 : !1), b = Me(() => {
      if (!i.value || d.value === "vertical")
        return s.value ? -90 : 0;
      const w = r.value - o.value, I = 90, U = 0.3;
      if (w <= 0)
        return 0;
      if (w <= I)
        return -w;
      const F = w - I;
      return -(I + F * U);
    });
    function x() {
      c(m) && (clearTimeout(c(m)), m.value = null);
    }
    function k() {
      s.value = !1, n("remove");
    }
    function $(w) {
      if (c(s))
        return;
      const I = w.touches[0];
      r.value = I.clientX, a.value = I.clientY, o.value = I.clientX, l.value = I.clientY, i.value = !0, u.value = !0, h.value = !1, d.value = null, f.value = w.target.closest("[data-interactive]") !== null, x(), m.value = setTimeout(() => {
        c(u) && !c(f) && (h.value = !0, n("longPress"));
      }, e.longPressDuration);
    }
    function S(w) {
      if (!c(i))
        return;
      const I = w.touches[0];
      o.value = I.clientX, l.value = I.clientY;
      const U = Math.abs(o.value - r.value), F = Math.abs(l.value - a.value);
      (U > 10 || F > 10) && (u.value = !1, x()), c(d) === null && (U > 4 || F > 4) && (d.value = U > F ? "horizontal" : "vertical"), c(d) === "horizontal" && w.cancelable && w.preventDefault();
    }
    function R(w) {
      if (x(), c(s)) {
        if (w.target.closest("[data-delete-button]") !== null)
          return;
        setTimeout(() => s.value = !1, 50), w.stopPropagation();
        return;
      }
      if (!c(i))
        return;
      i.value = !1;
      const I = r.value - o.value;
      if (c(u) && !c(f) && !c(h)) {
        n("tap");
        return;
      }
      if (c(d) === "horizontal") {
        if (I > 180) {
          n("remove");
          return;
        }
        s.value = I > 45;
      }
    }
    return Re(s, (w, I, U) => {
      if (!w)
        return;
      const F = setTimeout(() => {
        s.value = !1;
      }, 3e3);
      U(() => clearTimeout(F));
    }), (w, I) => (y(), z("div", {
      class: E([
        w.$style.listItemMount,
        p.value && w.$style.isDestructive,
        i.value && w.$style.isDragging,
        s.value && w.$style.isOpen
      ]),
      style: wt({
        "--x": b.value + "px"
      })
    }, [
      Ie("div", {
        class: E(w.$style.listItemMountBody),
        onTouchstart: $,
        onTouchmove: S,
        onTouchend: R,
        onTouchcancel: R
      }, [
        oe(w.$slots, "default")
      ], 34),
      Ie("div", {
        class: E(w.$style.listItemMountRemove),
        "data-delete-button": "",
        onClick: I[0] || (I[0] = (U) => k()),
        onTouchend: I[1] || (I[1] = pu((U) => k(), ["stop", "prevent"]))
      }, [
        B(c(xi), {
          class: E(w.$style.listItemMountRemoveIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 34)
    ], 6));
  }
});
const cw = "listItemMount", dw = "listItemMountBody", fw = "listItemMountRemove", hw = "isDragging", mw = "isOpen", pw = "isDestructive", gw = "listItemMountRemoveIcon";
var yw = { listItemMount: cw, listItemMountBody: dw, listItemMountRemove: fw, isDragging: hw, isOpen: mw, isDestructive: pw, listItemMountRemoveIcon: gw };
const vw = {
  $style: yw
};
var bw = /* @__PURE__ */ je(uw, [["__cssModules", vw]]), kw = /* @__PURE__ */ q({
  __name: "ListItems",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(t.$style.listItems)
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const ww = "listItems";
var xw = { listItems: ww };
const Sw = {
  $style: xw
};
var Yd = /* @__PURE__ */ je(kw, [["__cssModules", Sw]]), Iw = /* @__PURE__ */ q({
  __name: "ListItemNote",
  props: {
    item: {}
  },
  setup(e) {
    return (t, n) => (y(), V(so, {
      class: E(t.$style.listItemNote),
      icon: "",
      item: e.item
    }, {
      default: j(() => [
        B(ro, null, {
          default: j(() => [
            Ks(we(e.item.content), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "item"]));
  }
});
const Tw = "listItemNote";
var Cw = { listItemNote: Tw };
const Mw = {
  $style: Cw
};
var Ew = /* @__PURE__ */ je(Iw, [["__cssModules", Mw]]), $w = /* @__PURE__ */ q({
  __name: "ListItemButton",
  props: {
    icon: {}
  },
  emits: ["tap"],
  setup(e, { emit: t }) {
    const n = t;
    function i() {
      n("tap");
    }
    return (s, r) => (y(), z("button", {
      class: E(s.$style.listItemButton),
      "data-interactive": "",
      onTouchend: pu(i, ["stop", "prevent"])
    }, [
      B(c(xi), {
        class: E(s.$style.listItemButtonIcon),
        icon: e.icon
      }, null, 8, ["class", "icon"])
    ], 34));
  }
});
const Aw = "listItemButton", Fw = "listItemButtonIcon";
var Lw = { listItemButton: Aw, listItemButtonIcon: Fw };
const Ow = {
  $style: Lw
};
var Jd = /* @__PURE__ */ je($w, [["__cssModules", Ow]]), Dw = /* @__PURE__ */ q({
  __name: "ListItemButtons",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(t.$style.listItemButtons)
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const Bw = "listItemButtons";
var _w = { listItemButtons: Bw };
const Nw = {
  $style: _w
};
var Vw = /* @__PURE__ */ je(Dw, [["__cssModules", Nw]]), Rw = /* @__PURE__ */ q({
  __name: "ListItemQuantity",
  props: {
    quantity: {}
  },
  setup(e) {
    const t = new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }), n = Me(() => t.format(e.quantity));
    return (i, s) => (y(), z("div", {
      class: E(i.$style.listItemQuantity)
    }, we(n.value) + "x ", 3));
  }
});
const zw = "listItemQuantity";
var Pw = { listItemQuantity: zw };
const Hw = {
  $style: Pw
};
var Ww = /* @__PURE__ */ je(Rw, [["__cssModules", Hw]]), Uw = /* @__PURE__ */ q({
  __name: "ListItemProduct",
  props: {
    item: {}
  },
  emits: ["decrease", "increase"],
  setup(e, { emit: t }) {
    const n = t;
    function i() {
      n("decrease");
    }
    function s() {
      n("increase");
    }
    return (r, a) => (y(), V(so, {
      completable: "",
      tappable: "",
      icon: e.item.checked ? "" : "",
      item: e.item,
      direction: "horizontal"
    }, {
      default: j(() => [
        B(ro, null, {
          default: j(() => [
            Ks(we(e.item.content), 1)
          ]),
          _: 1
        }),
        B(Ti, { name: "check" }, {
          default: j(() => [
            e.item.quantity && e.item.quantity > 1 ? (y(), V(Ww, {
              key: 0,
              quantity: e.item.quantity
            }, null, 8, ["quantity"])) : ee("", !0)
          ]),
          _: 1
        }),
        B(c(to)),
        B(Ti, { name: "check" }, {
          default: j(() => [
            e.item.checked ? ee("", !0) : (y(), V(Vw, { key: 0 }, {
              default: j(() => [
                e.item.quantity && e.item.quantity > 1 ? (y(), V(Jd, {
                  key: 0,
                  icon: "",
                  onTap: a[0] || (a[0] = (o) => i())
                })) : ee("", !0),
                B(Jd, {
                  icon: "+",
                  onTap: a[1] || (a[1] = (o) => s())
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
}), qw = /* @__PURE__ */ q({
  __name: "ListItemFooter",
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(t.$style.listItemFooter)
    }, [
      oe(t.$slots, "default")
    ], 2));
  }
});
const jw = "listItemFooter";
var Gw = { listItemFooter: jw };
const Zw = {
  $style: Gw
};
var Yw = /* @__PURE__ */ je(qw, [["__cssModules", Zw]]);
const Jw = ["src", "alt"];
var Xw = /* @__PURE__ */ q({
  __name: "ListItemPerson",
  props: {
    image: {},
    name: {}
  },
  setup(e) {
    return (t, n) => (y(), z("div", {
      class: E(t.$style.listItemPerson)
    }, [
      e.image ? (y(), z("img", {
        key: 0,
        class: E(t.$style.listItemPersonImage),
        src: e.image,
        alt: e.name
      }, null, 10, Jw)) : ee("", !0),
      Ie("span", null, we(e.name), 1)
    ], 2));
  }
});
const Kw = "listItemPerson", Qw = "listItemPersonImage";
var ex = { listItemPerson: Kw, listItemPersonImage: Qw };
const tx = {
  $style: ex
};
var nx = /* @__PURE__ */ je(Xw, [["__cssModules", tx]]), ix = /* @__PURE__ */ q({
  __name: "ListItemDate",
  props: {
    date: {},
    time: {}
  },
  setup(e) {
    const t = new Intl.DateTimeFormat(navigator.language, {
      month: "short",
      day: "numeric"
    }), n = new Intl.DateTimeFormat(navigator.language, {
      year: "numeric",
      month: "short",
      day: "numeric"
    }), i = Me(() => {
      const s = se.now();
      if (e.time) {
        const r = se.fromFormat(`${e.date} ${e.time}`, "yyyy-MM-dd HH:mm:ss"), a = r.toFormat("HH:mm");
        return s.toISODate() === r.toISODate() ? `${Homey.__("widget.list.today_at")} ${a}` : s.year === r.year ? `${t.format(r.toJSDate())} ${a}` : `${n.format(r.toJSDate())} ${a}`;
      } else {
        const r = se.fromFormat(e.date, "yyyy-MM-dd");
        return s.toISODate() === r.toISODate() ? Homey.__("widget.list.today") : s.year === r.year ? t.format(r.toJSDate()) : n.format(r.toJSDate());
      }
    });
    return (s, r) => (y(), z("div", {
      class: E(s.$style.listItemDate)
    }, we(i.value), 3));
  }
});
const sx = "listItemDate";
var rx = { listItemDate: sx };
const ax = {
  $style: rx
};
var ox = /* @__PURE__ */ je(ix, [["__cssModules", ax]]), lx = /* @__PURE__ */ q({
  __name: "ListItemTask",
  props: {
    item: {}
  },
  setup(e) {
    return (t, n) => (y(), V(so, {
      completable: "",
      tappable: "",
      icon: e.item.checked ? "" : "",
      item: e.item
    }, {
      default: j(() => [
        B(ro, null, {
          default: j(() => [
            Ks(we(e.item.content), 1)
          ]),
          _: 1
        }),
        e.item.dueDate || e.item.person ? (y(), V(Yw, { key: 0 }, {
          default: j(() => [
            e.item.person ? (y(), V(nx, {
              key: 0,
              image: e.item.person.image,
              name: e.item.person.name
            }, null, 8, ["image", "name"])) : ee("", !0),
            e.item.dueDate ? (y(), V(ox, {
              key: 1,
              date: e.item.dueDate,
              time: e.item.dueTime
            }, null, 8, ["date", "time"])) : ee("", !0)
          ]),
          _: 1
        })) : ee("", !0)
      ]),
      _: 1
    }, 8, ["icon", "item"]));
  }
}), ux = /* @__PURE__ */ q({
  __name: "List",
  props: {
    deviceId: {},
    dynamicHeight: { type: Boolean },
    fixedHeight: {}
  },
  setup(e) {
    const t = On(), {
      categories: n,
      categorizedItems: i,
      hasItems: s,
      isLoading: r,
      look: a,
      changeChecked: o,
      changeQuantity: l,
      loadCategories: u,
      loadItems: d,
      loadLook: f,
      removeItem: m,
      setItems: h
    } = wm(), p = ne(null), b = ne(null);
    async function x() {
      switch (c(a)?.type) {
        case "grocery_list":
          p.value = "product";
          break;
        case "list":
          p.value = "task";
          break;
      }
    }
    async function k() {
      p.value = "note";
    }
    async function $(w) {
      b.value = w;
    }
    async function S(w) {
      switch (w.type) {
        case "product":
        case "task":
          await o(e.deviceId, w, !w.checked);
          break;
      }
    }
    async function R() {
      if (!e.dynamicHeight) {
        Homey.setHeight(Math.max(120, e.fixedHeight));
        return;
      }
      const w = document.querySelector("#app"), { height: I } = w.getBoundingClientRect();
      Homey.setHeight(c(p) || c(b) ? Math.max(420, I) : I);
    }
    return Homey.on("list-items-changed", async ({ id: w, items: I }) => {
      w === e.deviceId && await h(I);
    }), Homey.on("list-look-changed", async (w) => w === e.deviceId && await f(e.deviceId)), Re([p, b, i], async () => {
      await R();
    }, { flush: "post" }), Re(() => e.deviceId, async () => {
      await Promise.allSettled([
        u(e.deviceId),
        f(e.deviceId),
        d(e.deviceId)
      ]);
    }, { immediate: !0 }), (w, I) => (y(), z(pe, null, [
      c(a) ? (y(), V(F9, {
        key: 0,
        color: c(a).color,
        icon: c(a).icon,
        name: c(a).name,
        onAdd: I[0] || (I[0] = (U) => x()),
        onAddNote: I[1] || (I[1] = (U) => k())
      }, null, 8, ["color", "icon", "name"])) : ee("", !0),
      B(Ti, {
        mode: "out-in",
        name: "check",
        onEnter: I[4] || (I[4] = (U) => R())
      }, {
        default: j(() => [
          c(r) && !c(s) ? (y(), V(_9, { key: 0 })) : c(s) ? (y(), V(Yd, { key: 1 }, {
            default: j(() => [
              B(fh, {
                name: "items",
                onAfterEnter: I[2] || (I[2] = (U) => R()),
                onAfterLeave: I[3] || (I[3] = (U) => R())
              }, {
                default: j(() => [
                  (y(!0), z(pe, null, kt(c(i), (U, F, L) => (y(), z(pe, { key: F }, [
                    F !== "__other__" ? (y(), V(Zd, {
                      key: 0,
                      icon: c(n).find((W) => W.category === F)?.icon,
                      name: c(t)(`grocery.category.${F}`)
                    }, null, 8, ["icon", "name"])) : L > 0 ? (y(), V(Zd, {
                      key: 1,
                      name: c(t)("widget.list.other")
                    }, null, 8, ["name"])) : ee("", !0),
                    (y(!0), z(pe, null, kt(U, (W) => (y(), V(bw, {
                      key: W.id,
                      onLongPress: (Q) => $(W),
                      onRemove: (Q) => c(m)(e.deviceId, W),
                      onTap: (Q) => S(W)
                    }, {
                      default: j(() => [
                        W.type === "note" ? (y(), V(Ew, {
                          key: 0,
                          item: W
                        }, null, 8, ["item"])) : W.type === "product" ? (y(), V(Uw, {
                          key: 1,
                          item: W,
                          onDecrease: (Q) => c(l)(e.deviceId, W, "decrease"),
                          onIncrease: (Q) => c(l)(e.deviceId, W, "increase")
                        }, null, 8, ["item", "onDecrease", "onIncrease"])) : W.type === "task" ? (y(), V(lx, {
                          key: 2,
                          item: W
                        }, null, 8, ["item"])) : ee("", !0)
                      ]),
                      _: 2
                    }, 1032, ["onLongPress", "onRemove", "onTap"]))), 128))
                  ], 64))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (y(), V(Yd, { key: 2 }, {
            default: j(() => [
              B(lw)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }),
      B(c(Vr), null, {
        default: j(() => [
          p.value ? (y(), V(J7, {
            key: 0,
            "device-id": e.deviceId,
            type: p.value,
            onClose: I[5] || (I[5] = (U) => p.value = null)
          }, null, 8, ["device-id", "type"])) : b.value ? (y(), V(X7, {
            key: 1,
            "device-id": e.deviceId,
            item: b.value,
            onClose: I[6] || (I[6] = (U) => b.value = null)
          }, null, 8, ["device-id", "item"])) : ee("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), cx = /* @__PURE__ */ q({
  __name: "ListWidget",
  setup(e) {
    const t = ne(null), n = ne(!0), i = ne(400), s = ne(!1);
    return window.addEventListener("homeyReady", () => {
      const r = Homey.getDeviceIds(), a = Homey.getSettings();
      t.value = r[0] ?? null, n.value = a.dynamicHeight ?? !0, i.value = a.fixedHeight ?? 400, s.value = !0, Homey.ready();
    }), (r, a) => (y(), V(c(Z7), {
      class: E([r.$style.listWidget, !n.value && r.$style.listWidgetFixed])
    }, {
      default: j(() => [
        s.value ? (y(), V(ux, {
          key: 0,
          "device-id": t.value,
          "dynamic-height": n.value,
          "fixed-height": i.value
        }, null, 8, ["device-id", "dynamic-height", "fixed-height"])) : ee("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const dx = "listWidget", fx = "listWidgetFixed";
var hx = { listWidget: dx, listWidgetFixed: fx };
const mx = {
  $style: hx
};
var px = /* @__PURE__ */ je(cx, [["__cssModules", mx]]), gx = /* @__PURE__ */ q({
  __name: "PairView",
  setup(e) {
    const t = On(), n = ne([]), i = ne([]), s = un({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    $n(async () => {
      Homey.setTitle(Homey.__("device.list.pair.title")), Homey.setSubtitle(Homey.__("device.list.pair.subtitle")), n.value = await Homey.emit("colors"), i.value = await Homey.emit("icons");
    });
    async function r() {
      Homey.showLoadingOverlay(), await Homey.createDevice({
        name: s.name,
        data: {
          id: await Homey.emit("id")
        },
        store: {
          color: s.color,
          icon: s.icon
        }
      }), Homey.done(), Homey.hideLoadingOverlay();
    }
    return Xn(Vu, n), Xn(Ru, i), (a, o) => (y(), V(c(Tm), {
      class: E(a.$style.pairView)
    }, {
      default: j(() => [
        B(c(Rs), {
          title: c(t)("device.list.pair.name.title"),
          description: c(t)("device.list.pair.name.description")
        }, {
          default: j(() => [
            B(c(Cm), {
              modelValue: s.name,
              "onUpdate:modelValue": o[0] || (o[0] = (l) => s.name = l),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(Rs), {
          title: c(t)("device.list.pair.color.title"),
          description: c(t)("device.list.pair.color.description")
        }, {
          default: j(() => [
            B(c(Im), {
              modelValue: s.color,
              "onUpdate:modelValue": o[1] || (o[1] = (l) => s.color = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(Rs), {
          title: c(t)("device.list.pair.icon.title"),
          description: c(t)("device.list.pair.icon.description")
        }, {
          default: j(() => [
            B(c(Mm), {
              modelValue: s.icon,
              "onUpdate:modelValue": o[2] || (o[2] = (l) => s.icon = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(Sm), {
          label: c(t)("device.list.pair.submit"),
          onClick: o[3] || (o[3] = (l) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const yx = "pairView";
var vx = { pairView: yx };
const bx = {
  $style: vx
};
var kx = /* @__PURE__ */ je(gx, [["__cssModules", bx]]), wx = /* @__PURE__ */ q({
  __name: "RepairView",
  setup(e) {
    const t = On(), n = ne([]), i = ne([]), s = un({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    $n(async () => {
      Homey.setTitle(Homey.__("device.list.repair.title")), Homey.setSubtitle(Homey.__("device.list.repair.subtitle")), n.value = await Homey.emit("colors"), i.value = await Homey.emit("icons");
      const { name: a, data: o } = await Homey.emit("fetch");
      s.name = a, s.color = o.color, s.icon = o.icon, Homey.setTitle(s.name);
    });
    async function r() {
      Homey.showLoadingOverlay(), await Homey.emit("save", {
        name: s.name,
        store: {
          color: s.color,
          icon: s.icon
        }
      }), Homey.done(), Homey.hideLoadingOverlay();
    }
    return Xn(Vu, n), Xn(Ru, i), (a, o) => (y(), V(c(Tm), {
      class: E(a.$style.repairView)
    }, {
      default: j(() => [
        B(c(Rs), {
          title: c(t)("device.list.pair.color.title"),
          description: c(t)("device.list.pair.color.description")
        }, {
          default: j(() => [
            B(c(Im), {
              modelValue: s.color,
              "onUpdate:modelValue": o[0] || (o[0] = (l) => s.color = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(Rs), {
          title: c(t)("device.list.pair.icon.title"),
          description: c(t)("device.list.pair.icon.description")
        }, {
          default: j(() => [
            B(c(Mm), {
              modelValue: s.icon,
              "onUpdate:modelValue": o[1] || (o[1] = (l) => s.icon = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(Sm), {
          label: c(t)("device.list.repair.submit"),
          onClick: o[2] || (o[2] = (l) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const xx = "repairView";
var Sx = { repairView: xx };
const Ix = {
  $style: Sx
};
var Tx = /* @__PURE__ */ je(wx, [["__cssModules", Ix]]);
var Cx = {
  prefix: "far",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z"]
}, Mx = {
  prefix: "far",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8l115.6 0c13.3 0 25.3 8.3 30 20.8L328 48 424 48c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48l96 0 16.2-43.2zm-84.6 448L28.7 144 76.9 144 99.5 449.2c.6 8.4 7.6 14.8 16 14.8l217.1 0c8.4 0 15.3-6.5 16-14.8l22.6-305.2 48.1 0-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3l-217.1 0c-33.5 0-61.3-25.9-63.8-59.3z"]
}, Ex = {
  prefix: "far",
  iconName: "bottle-droplet",
  icon: [320, 512, [], "e4c4", "M96-32c-17.7 0-32 14.3-32 32 0 11.8 6.4 22.2 16 27.7l0 121.7C32.2 177.1 0 228.7 0 288L0 456c0 48.6 39.4 88 88 88l144 0c48.6 0 88-39.4 88-88l0-168c0-59.3-32.2-110.9-80-138.6l0-121.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32L96-32zm32 64l64 0 0 132c0 9.4 5.5 18 14.1 21.9 38.9 17.6 65.9 56.7 65.9 102.1l0 168c0 22.1-17.9 40-40 40L88 496c-22.1 0-40-17.9-40-40l0-168c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9l0-132zm96 320c0-21.2-28.9-64.5-47.9-90.6-8.1-11.1-24.2-11.1-32.3 0-19 26.1-47.9 69.4-47.9 90.6 0 31.6 28.7 64 64 64s64-32.4 64-64z"]
}, $x = {
  prefix: "far",
  iconName: "wheat",
  icon: [576, 512, [], "f72d", "M72.5 240c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L297.4 455c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-30.5-30.5-63 63c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l63-63-30.5-30.5c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zm145 202.9c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM184.5 128c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L409.4 343c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM73.7 299.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L73.7 299.1zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM296.5 16c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L521.4 231c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM185.7 187.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4l-27.9-27.9zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM297.7 75.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L297.7 75.1zM544.5-24c6.4 0 12.5 2.5 17 7s7 10.6 7 17l0 35-.1 5.2c-2.6 51.7-44 93.1-95.7 95.7l-5.2 .1-35 0c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17l0-35c0-55.8 45.2-101 101-101l35 0zm-35 48c-29.3 0-53 23.7-53 53l0 11 11 0 5.4-.3c25-2.5 44.8-22.4 47.3-47.3l.3-5.4 0-11-11 0z"]
}, Ax = {
  prefix: "far",
  iconName: "bottle-baby",
  icon: [320, 512, [], "e673", "M124.6 17.7L128 16 128 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 3.4 1.7c17.5 8.8 28.6 26.7 28.6 46.3 17.7 0 32 14.3 32 32l0 48 27.5 45.8c13.4 22.4 20.5 48 20.5 74.1L304 480c0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64l0-216.1c0-26.1 7.1-51.7 20.5-74.1L64 144 64 96c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3zM256 480l0-216.1c0-17.4-4.7-34.5-13.7-49.4l-13.5-22.5-137.6 0-13.5 22.5c-9 14.9-13.7 32-13.7 49.4l0 8.1 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 48c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"]
}, Fx = {
  prefix: "far",
  iconName: "bread-loaf",
  icon: [576, 512, [127838], "f7eb", "M152 80l96 0c57.4 0 104 46.6 104 104l0 31c0 3.7-2.5 6.9-6.1 7.8l-7.8 1.9C327.5 227.4 320 237 320 248l0 144c0 22.1-17.9 40-40 40l-160 0c-22.1 0-40-17.9-40-40l0-144c0-11-7.5-20.6-18.2-23.3l-7.8-1.9c-3.6-.9-6.1-4.1-6.1-7.8l0-31C48 126.6 94.6 80 152 80zM120 480l336 0c48.6 0 88-39.4 88-88l0-120.8c18.3-3.7 32-19.8 32-39.2l0-48c0-83.9-68.1-152-152-152L152 32C68.1 32 0 100.1 0 184l0 31c0 21.9 12.8 41.5 32 50.6L32 392c0 48.6 39.4 88 88 88zm336-48l-97.6 0c6.1-12 9.6-25.6 9.6-40l0-120 128 0 0 120c0 22.1-17.9 40-40 40zM399.3 224c.5-2.9 .7-5.9 .7-9l0-31c0-40.2-15.6-76.8-41.1-104L424 80c57.4 0 104 46.6 104 104l0 40-128.7 0z"]
}, Lx = {
  prefix: "far",
  iconName: "carrot",
  icon: [576, 512, [129365], "f787", "M392.4 25.9l6.5 6.5c21.9 21.9 21.9 57.3 0 79.2l-6.5 6.5-6.5-6.5c-21.9-21.9-21.9-57.3 0-79.2l6.5-6.5zm40.4 119.6c21.9-21.9 57.3-21.9 79.2 0l6.5 6.5-6.5 6.5c-21.9 21.9-57.3 21.9-79.2 0l-6.5-6.5 6.5-6.5zm30-64c2.7-29.7-7.3-60.4-30-83.1L420.7-13.7c-15.6-15.6-40.9-15.6-56.6 0L352-1.5c-27 27-36.1 65.2-27.1 99.7-8.2-1.4-16.6-2.1-25.3-2.1-58.3 0-111.3 34.1-135.5 87.2L35.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5L361.1 380.3c53.1-24.1 87.2-77.1 87.2-135.5 0-8.6-.7-17-2.1-25.2 34.5 8.9 72.7-.1 99.7-27.1L558 180.3c15.6-15.6 15.6-40.9 0-56.6l-12.1-12.1c-22.7-22.7-53.4-32.8-83.1-30zM234.3 168c17.9-15.2 40.9-24 65.3-24 55.7 0 100.8 45.1 100.8 100.8 0 39.5-23.1 75.4-59.1 91.8l-89.7 40.8-26.3-26.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L205 398.5 96.6 447.8 205.8 207.4 239.4 241c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-39-39z"]
}, Ox = {
  prefix: "far",
  iconName: "steak",
  icon: [576, 512, [129385], "f824", "M143.9 240.1l12.8 0c34.4 0 66-18.8 82.4-49.1l45.5-84.1C304.4 70.6 342.3 48 383.6 48 445.7 48 496 98.3 496 160.4L496 288c0 79.5-64.5 144-144 144l-208.1 0C91 432 48 389 48 336.1s43-95.9 95.9-95.9zm12.8-48l-12.8 0C64.4 192.1 0 256.6 0 336.1S64.4 480 143.9 480L352 480c106 0 192-86 192-192l0-127.6C544 71.8 472.2 0 383.6 0 324.7 0 270.5 32.3 242.5 84.1L197 168.2c-8 14.8-23.4 24-40.2 24zm-12.8 96c-26.5 0-47.9 21.5-47.9 47.9S117.5 384 143.9 384L352 384c53 0 96-43 96-96l0-127.6c0-35.6-28.8-64.4-64.4-64.4-23.6 0-45.4 13-56.7 33.8l-45.5 84.1c-24.8 45.8-72.6 74.3-124.6 74.3l-12.8 0zM360 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
}, Dx = {
  prefix: "far",
  iconName: "bowl-spoon",
  icon: [512, 512, [129379], "e3e0", "M112 128c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48zm0 48c52.2 0 96-30.6 108.5-72L488 104c13.3 0 24-10.7 24-24s-10.7-24-24-24L220.5 56C208 14.6 164.2-16 112-16 50.1-16 0 27 0 80s50.1 96 112 96zm64.5 282.9C172 447.1 163 437.6 151.5 432.5 90.4 404.8 48 343.3 48 272l416 0c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1l-144 0c-3.3 0-6.3-2-7.5-5.1zM48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8l144 0c23.8 0 44.2-14.9 52.3-35.8 77.7-35.2 131.7-113.4 131.7-204.2 0-26.5-21.5-48-48-48L48 224z"]
}, Bx = {
  prefix: "far",
  iconName: "pump-soap",
  icon: [320, 512, [], "e06b", "M128 48l64 0 0 80-64 0 0-80zM80 32l0 96-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-16 0 0-40 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-8c0-17.7-14.3-32-32-32L112 0C94.3 0 80 14.3 80 32zM192 176l64 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l128 0zm32 168c0-32.5-37-80.9-50.9-97.9-3.2-3.9-8.1-6.1-13.1-6.1s-9.9 2.2-13.1 6.1c-13.8 16.9-50.9 65.3-50.9 97.9 0 35.3 28.7 56 64 56s64-20.7 64-56z"]
}, _x = {
  prefix: "far",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"]
}, Nx = {
  prefix: "far",
  iconName: "spray-can-sparkles",
  icon: [576, 512, ["air-freshener"], "f5d0", "M160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80zm0 176c-26.5 0-48 21.5-48 48l0 184c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-184c0-26.5-21.5-48-48-48l-128 0zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 184c0 39.8-32.2 72-72 72l-176 0c-39.8 0-72-32.2-72-72l0-184zm160 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM448 48c0 1.4-1 3-2.2 3.6L416 64 403.6 93.8C403 95 401.4 96 400 96s-3-1-3.6-2.2L384 64 354.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L384 32 396.4 2.2C397 1 398.6 0 400 0s3 1 3.6 2.2L416 32 445.8 44.4C447 45 448 46.6 448 48zm76.4 45.8L512 64 482.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 32 524.4 2.2C525 1 526.6 0 528 0s3 1 3.6 2.2L544 32 573.8 44.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 64 531.6 93.8C531 95 529.4 96 528 96s-3-1-3.6-2.2zm7.2 100.4L544 224 573.8 236.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 256 531.6 285.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L512 256 482.2 243.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 224 524.4 194.2c.6-1.2 2.2-2.2 3.6-2.2s3 1 3.6 2.2zM512 144c0 1.4-1 3-2.2 3.6L480 160 467.6 189.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L448 160 418.2 147.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L448 128 460.4 98.2C461 97 462.6 96 464 96s3 1 3.6 2.2L480 128 509.8 140.4c1.2 .6 2.2 2.2 2.2 3.6z"]
}, Vx = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, Rx = {
  prefix: "far",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9C512 342.1 403.9 448 273.2 448 191.7 448 121.9 392.4 101.8 316.8 68.7 347.4 48 391.3 48 440l0 16c0 13.3-10.7 24-24 24S0 469.2 0 456l0-16c0-75.1 38.3-141.2 96.4-179.9 6.1-91.7 82.4-164.1 175.6-164.1 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3zM464 79.9c-38.3 29.5-102.4 64.1-192 64.1-57.6 0-106.4 38.1-122.4 90.4 20.9-6.8 43.2-10.4 66.4-10.4l80 0c13.3 0 24 10.8 24 24s-10.7 24-24 24l-80 0c-25.4 0-49.4 5.7-71 15.8 7.9 63.1 62.6 112.2 128.2 112.2 104.7 0 190.8-84.9 190.8-189.1l0-131z"]
}, zx = {
  prefix: "far",
  iconName: "fish",
  icon: [576, 512, [128031], "f578", "M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1 33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8-12.6-22.1-35-52.2-65.3-77.8-33.7-28.5-76-50.2-124.5-50.2s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1-14 15.8-36.7 20.6-56 11.8l-54.3-24.9 21.1 36.9c8.4 14.8 8.4 32.9 0 47.6l-21.1 36.9 54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35 39.2-33.1 92-61.5 155.5-61.5s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8 4.7 9.2 4.7 20.1 0 29.3-14.1 27.4-41.9 66.8-81 99.8-39.2 33.1-92 61.5-155.5 61.5s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5s-11.1-25.4-4.2-37.5zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Px = {
  prefix: "far",
  iconName: "olive-branch",
  icon: [640, 512, [], "e317", "M2.7 53.1C13.8 41.6 59 0 128 0 194.9 0 239.4 39.1 252.2 52L306 26.7C343.3 9.1 384 0 425.2 0L616 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L425.2 48c-34.2 0-67.9 7.5-98.8 22.1L191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0c-8.8 0-16-7.2-16-16l0-16C0 194.6 34.5 141.4 85.2 114.5 40.4 102.8 11.3 75.8 2.7 66.9 .9 65 0 62.6 0 60s.9-5 2.7-6.9zM399.4 427c19.3-25.7 32.6-63.3 32.6-107s-13.3-81.3-32.6-107c-19.2-25.7-42.2-37-63.4-37s-44.2 11.4-63.4 37C253.3 238.7 240 276.4 240 320s13.3 81.3 32.6 107c19.2 25.7 42.2 37 63.4 37s44.2-11.4 63.4-37zM336 512c-79.5 0-144-86-144-192s64.5-192 144-192 144 86 144 192-64.5 192-144 192zm129.7-40.2c9.4-13.1 17.6-27.5 24.4-43.1 3.6 .8 7.1 1.5 10.5 2 31.1 4.6 55-3.6 70.2-19.3 15.4-16 23.9-42.1 19.2-76-4.7-33.8-22.2-71.6-53.2-103.7-18-18.7-37.7-32.5-57.2-41.7-4.9-8.8-10.3-17.2-16.2-25-10.5-14-22.7-26.5-36.2-36.9 48.2 1.6 101.3 25.8 144.2 70.3 75 77.8 90.2 188.1 33.9 246.4-34.1 35.4-86.8 43.5-139.6 27z"]
}, Hx = {
  prefix: "far",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M209.5 369c-9.4 9.4-24.6 9.4-33.9 0L15.5 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143 143-143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-160 160z"]
}, Wx = {
  prefix: "far",
  iconName: "can-food",
  icon: [384, 512, [129387], "e3e6", "M320 434.3c-3.4 3-10.2 7.5-21.7 12.2-24.8 10.1-62.3 17.5-106.3 17.5s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2l0-144.8c14.2 6.2 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1l0 144.8zm48 5.7l0-368c0-39.8-78.8-72-176-72S16 32.2 16 72l0 368c0 39.8 78.8 72 176 72s176-32.2 176-72zM304 72c0 13.3-50.1 24-112 24S80 85.3 80 72 130.1 48 192 48 304 58.7 304 72zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, Ux = {
  prefix: "far",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"]
}, qx = {
  prefix: "far",
  iconName: "cup-straw",
  icon: [384, 512, [129380], "e363", "M232.6-16C207.2-16 185 1.1 178.5 25.6L159.7 96 32 96C18.7 96 8 106.7 8 120s10.7 24 24 24L60.2 468.2C62.3 493 83.1 512 108 512l168 0c24.9 0 45.7-19 47.8-43.8L352 144c13.3 0 24-10.7 24-24s-10.7-24-24-24l-142.6 0 15.5-58.1c.9-3.5 4.1-5.9 7.7-5.9L264 32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-31.4 0zM80.2 144l223.6 0-27.8 320-168 0-27.8-320z"]
}, jx = {
  prefix: "far",
  iconName: "salad",
  icon: [512, 512, [129367, "bowl-salad"], "f81e", "M272 208c0 11 1.2 21.7 3.6 32l-31.6 0 0-128c0-11-9-20-20-20s-20 9-20 20l0 127.7-93.9-93.9c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L147.7 240 96 240c-53 0-96-43-96-96S43 48 96 48c8.7 0 17.2 1.2 25.3 3.4 17.2-39.6 56.8-67.4 102.7-67.4s85.5 27.7 102.7 67.4c8-2.2 16.5-3.4 25.3-3.4 19.9 0 38.3 6 53.6 16.4-74.7 5.3-133.6 67.6-133.6 143.6zM117.9 422.3c12.9 5.7 22.7 16.7 26.8 30.3 2 6.6 8.2 11.4 15.3 11.4l192 0c7.2 0 13.4-4.8 15.3-11.4 4-13.5 13.8-24.6 26.8-30.3 35.2-15.4 61.2-47.6 68.1-86.3L49.8 336c6.9 38.7 32.9 70.9 68.1 86.3zM0 315.4C0 300.3 12.3 288 27.4 288l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 67.4-40.6 125.4-98.6 150.8-7.9 26.4-32.4 45.7-61.4 45.7l-192 0c-29 0-53.5-19.3-61.4-45.7-58.1-25.4-98.6-83.4-98.6-150.8zM464 208c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32l-54.8 0c-3.5-10-5.5-20.8-5.5-32 0-53 43-96 96-96s96 43 96 96c0 11.2-1.9 22-5.5 32l-54.8 0c7.6-8.5 12.2-19.7 12.2-32z"]
}, Gx = {
  prefix: "far",
  iconName: "paw-simple",
  icon: [448, 512, ["paw-alt"], "f701", "M192 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-.7 146.1c7.1-11.3 19.4-18.1 32.7-18.1s25.7 6.9 32.7 18.1l49.2 78.6c8.7 14 20.9 22.8 32.2 28.1 17.8 8.4 30 26.4 30 47.1 0 28.7-23.3 52-52 52-11.1 0-21.2-3.4-29.6-9.2-19.6-13.6-43.8-17.6-62.4-17.6s-42.8 4-62.4 17.6c-8.4 5.8-18.5 9.2-29.6 9.2-28.7 0-52-23.3-52-52 0-20.8 12.2-38.8 30-47.1 11.2-5.3 23.4-14.1 32.2-28.1l49.2-78.6zm-89.9 53.2c-2.8 4.5-7.1 7.8-11.8 10.1-34 16-57.6 50.5-57.6 90.6 0 55.2 44.8 100 100 100 21.2 0 40.8-6.6 56.9-17.8 17.4-12 52.8-12 70.1 0 16.2 11.2 35.8 17.8 56.9 17.8 55.2 0 100-44.8 100-100 0-40.1-23.6-74.6-57.6-90.6-4.8-2.2-9-5.6-11.8-10.1l-49.1-78.6C281.6 175.4 253.9 160 224 160s-57.6 15.4-73.4 40.7l-49.2 78.6zM304 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm144 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 240a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, Zx = {
  prefix: "far",
  iconName: "cheese-swiss",
  icon: [512, 512, [129472], "f7f0", "M464 256l0-15.8c0-88.5-71.7-160.2-160.2-160.2-.8 0-1.6 .2-2.3 .7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2C50 248.4 48 252.1 48 256l274.7 0c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32l50.7 0zM48 304l0 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-112-60.2 0c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16L48 304zm464-63.8L512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2zM176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
}, Yx = {
  prefix: "far",
  iconName: "capsules",
  icon: [576, 512, [], "f46b", "M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112-128 0 0-112zm0 288l0-125.3 128 0 0 125.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM32 112l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-105.8 116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3c-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112zM283.4 249.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l53.3 77.7-106.1 74.3-51.5-75.1zM411.9 436.6l-49.8-72.6 106.1-74.3 48 70c20.9 30.4 13.3 72.2-15.8 93-28.5 20.4-68 13.7-88.5-16.2z"]
}, Jx = {
  prefix: "far",
  iconName: "cookie",
  icon: [512, 512, [127850], "f563", "M240.5 64.6c-12-1.7-24.3 .5-35.1 6.2l-74 39.5C120.7 116 112 125 106.6 136L69.9 211.6c-5.4 11-7.1 23.5-5 35.6L79.4 330c2.1 12.1 8 23.2 16.8 31.7l60.3 58.4c8.8 8.5 20 14 32 15.7l83 11.7c12 1.7 24.3-.5 35.1-6.2l74-39.5C391.3 396 400 387 405.4 376l36.7-75.5c5.4-11 7.1-23.5 5-35.6L432.6 182c-2.1-12.1-8-23.2-16.8-31.7L355.5 91.9c-8.8-8.5-20-14-32-15.7l-83-11.7zM182.8 28.4c19.7-10.5 42.3-14.5 64.4-11.4l83 11.7c22.1 3.1 42.7 13.2 58.7 28.7l60.3 58.4c16.1 15.6 26.8 35.8 30.7 57.9l14.6 82.8c3.9 22.1 .7 44.8-9.1 64.9L448.6 397c-9.8 20.1-25.7 36.6-45.4 47.2l-74 39.5c-19.7 10.5-42.3 14.5-64.4 11.4l-83-11.7c-22.1-3.1-42.7-13.2-58.7-28.7L62.8 396.2C46.8 380.6 36 360.3 32.2 338.3L17.6 255.5c-3.9-22.1-.7-44.8 9.1-64.9L63.4 115c9.8-20.1 25.7-36.6 45.4-47.2l74-39.5zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Xx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  faAngleDown: Hx,
  faBottleBaby: Ax,
  faBottleDroplet: Ex,
  faBowlSpoon: Dx,
  faBreadLoaf: Fx,
  faCalendar: _x,
  faCanFood: Wx,
  faCapsules: Yx,
  faCarrot: Lx,
  faCheeseSwiss: Zx,
  faCookie: Jx,
  faCupStraw: qx,
  faFish: zx,
  faLeaf: Rx,
  faMinus: Cx,
  faOliveBranch: Px,
  faPawSimple: Gx,
  faPlus: Ux,
  faPumpSoap: Bx,
  faSalad: jx,
  faSnowflake: Vx,
  faSprayCanSparkles: Nx,
  faSteak: Ox,
  faTrash: Mx,
  faWheat: $x
});
h4(Xx);
function zu(e, t) {
  const n = op(e);
  return n.config.globalProperties.t = (i) => Homey.__(i) ?? i, n.use(hv()), n.mount(t), n;
}
function rS(e) {
  zu(px, e);
}
function aS(e) {
  zu(kx, e);
}
function oS(e) {
  zu(Tx, e);
}
window.onHomeyReady = function() {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("homeyReady"));
  }, 300);
};
export {
  Sm as ButtonPrimary,
  iS as ButtonTransparent,
  Im as ColorPicker,
  Tm as Form,
  Rs as FormGroup,
  Cm as FormInput,
  xi as Icon,
  Mm as IconPicker,
  sS as ScrollContainer,
  rS as createListWidget,
  aS as createPairView,
  oS as createRepairView,
  On as useTranslate
};
