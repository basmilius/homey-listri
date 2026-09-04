var ta, na;
let Ul, et, Le, js, Gs, Qi, Ma, ql, Gn, Da;
function gr(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
let Ie = {}, gs = [], qt = () => {
}, xu = () => !1, vr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || 97 > t.charCodeAt(2)), ol = (t) => t.startsWith("onUpdate:"), He = Object.assign, ul = (t, e) => {
  let n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, bf = Object.prototype.hasOwnProperty, Te = (t, e) => bf.call(t, e), te = Array.isArray, oe = (t) => typeof t == "function", De = (t) => typeof t == "string", Ot = (t) => typeof t == "symbol", Ae = (t) => t !== null && typeof t == "object", Eu = (t) => (Ae(t) || oe(t)) && oe(t.then) && oe(t.catch), Ge = Object.prototype.toString, yr = (t) => De(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Zs = gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), br = (t) => {
  let e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, kf = /-\w/g, yt = br((t) => t.replace(kf, (e) => e.slice(1).toUpperCase())), wf = /\B([A-Z])/g, Rn = br((t) => t.replace(wf, "-$1").toLowerCase()), kr = br((t) => t.charAt(0).toUpperCase() + t.slice(1)), sa = br((t) => t ? `on${kr(t)}` : ""), mt = (t, e) => !Object.is(t, e), Wi = (t, ...e) => {
  for (let n = 0; n < t.length; n++) t[n](...e);
}, Fu = (t, e, n, s = !1) => {
  Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: s, value: n });
}, wr = (t) => {
  let e = parseFloat(t);
  return isNaN(e) ? t : e;
}, ia = (t) => {
  let e = De(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
}, Ir = () => Ul || (Ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), If = gr("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function We(t) {
  if (te(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) {
      let s = t[n], i = De(s) ? (function(r) {
        let a = {};
        return r.replace(Tf, "").split(Sf).forEach((l) => {
          if (l) {
            let o = l.split(Cf);
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
let Sf = /;(?![^(]*\))/g, Cf = /:([^]+)/, Tf = /\/\*[^]*?\*\//g;
function k(t) {
  let e = "";
  if (De(t)) e = t;
  else if (te(t)) for (let n = 0; n < t.length; n++) {
    let s = k(t[n]);
    s && (e += s + " ");
  }
  else if (Ae(t)) for (let n in t) t[n] && (e += n + " ");
  return e.trim();
}
function ra(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !De(e) && (t.class = k(e)), n && (t.style = We(n)), t;
}
let xf = gr("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function ss(t, e) {
  let n, s;
  if (t === e) return !0;
  let i = (n = t, Ge.call(n) === "[object Date]"), r = (s = e, Ge.call(s) === "[object Date]");
  if (i || r) return !!i && !!r && t.getTime() === e.getTime();
  if (i = Ot(t), r = Ot(e), i || r) return t === e;
  if (i = te(t), r = te(e), i || r) return !!i && !!r && (function(a, l) {
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
function cl(t, e) {
  return t.findIndex((n) => ss(n, e));
}
let Au = (t) => !!(t && t.__v_isRef === !0), ce = (t) => De(t) ? t : t == null ? "" : te(t) || Ae(t) && (t.toString === Ge || !oe(t.toString)) ? Au(t) ? ce(t.value) : JSON.stringify(t, $u, 2) : String(t), $u = (t, e) => {
  let n;
  if (Au(e)) return $u(t, e.value);
  if (n = e, Ge.call(n) === "[object Map]") return { [`Map(${e.size})`]: [...e.entries()].reduce((s, [i, r], a) => (s[aa(i, a) + " =>"] = r, s), {}) };
  {
    let s;
    if (s = e, Ge.call(s) === "[object Set]") return { [`Set(${e.size})`]: [...e.values()].map((i) => aa(i)) };
    {
      if (Ot(e)) return aa(e);
      let i;
      if (Ae(e) && !te(e) && (i = e, Ge.call(i) !== "[object Object]")) return String(e);
    }
  }
  return e;
}, aa = (t, e = "") => {
  var n;
  return Ot(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
class Lu {
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
function Mu(t) {
  return new Lu(t);
}
function Du() {
  return et;
}
function Ou(t, e = !1) {
  et && et.cleanups.push(t);
}
let la = /* @__PURE__ */ new WeakSet();
class Bu {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, et && et.active && et.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, la.has(this) && (la.delete(this), this.trigger()));
  }
  notify() {
    (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || Vu(this));
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, jl(this), Nu(this);
    let e = Le, n = Mt;
    Le = this, Mt = !0;
    try {
      return this.fn();
    } finally {
      _u(this), Le = e, Mt = n, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) fl(e);
      this.deps = this.depsTail = void 0, jl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? la.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Oa(this) && this.run();
  }
  get dirty() {
    return Oa(this);
  }
}
let Sr = 0;
function Vu(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Gs, Gs = t;
    return;
  }
  t.next = js, js = t;
}
function dl() {
  let t;
  if (!(--Sr > 0)) {
    if (Gs) {
      let e = Gs;
      for (Gs = void 0; e; ) {
        let n = e.next;
        e.next = void 0, e.flags &= -9, e = n;
      }
    }
    for (; js; ) {
      let e = js;
      for (js = void 0; e; ) {
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
function Nu(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function _u(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    let i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), fl(s), (function(r) {
      let { prevDep: a, nextDep: l } = r;
      a && (a.nextDep = l, r.prevDep = void 0), l && (l.prevDep = a, r.nextDep = void 0);
    })(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  t.deps = e, t.depsTail = n;
}
function Oa(t) {
  for (let e = t.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (Ru(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty;
}
function Ru(t) {
  if (4 & t.flags && !(16 & t.flags) || (t.flags &= -17, t.globalVersion === ii) || (t.globalVersion = ii, !t.isSSR && 128 & t.flags && (!t.deps && !t._dirty || !Oa(t)))) return;
  t.flags |= 2;
  let e = t.dep, n = Le, s = Mt;
  Le = t, Mt = !0;
  try {
    Nu(t);
    let i = t.fn(t._value);
    (e.version === 0 || mt(i, t._value)) && (t.flags |= 128, t._value = i, e.version++);
  } catch (i) {
    throw e.version++, i;
  } finally {
    Le = n, Mt = s, _u(t), t.flags &= -3;
  }
}
function fl(t, e = !1) {
  let { dep: n, prevSub: s, nextSub: i } = t;
  if (s && (s.nextSub = i, t.prevSub = void 0), i && (i.prevSub = s, t.nextSub = void 0), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) fl(r, !0);
  }
  e || --n.sc || !n.map || n.map.delete(n.key);
}
let Mt = !0, zu = [];
function fn() {
  zu.push(Mt), Mt = !1;
}
function hn() {
  let t = zu.pop();
  Mt = t === void 0 || t;
}
function jl(t) {
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
let ii = 0;
class Ef {
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
    if (n === void 0 || n.sub !== Le) n = this.activeLink = new Ef(Le, this), Le.deps ? (n.prevDep = Le.depsTail, Le.depsTail.nextDep = n, Le.depsTail = n) : Le.deps = Le.depsTail = n, (function s(i) {
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
    this.version++, ii++, this.notify(e);
  }
  notify(e) {
    Sr++;
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      dl();
    }
  }
}
let Xi = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ Symbol(""), Ba = /* @__PURE__ */ Symbol(""), ri = /* @__PURE__ */ Symbol("");
function nt(t, e, n) {
  if (Mt && Le) {
    let s = Xi.get(t);
    s || Xi.set(t, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Cr()), i.map = s, i.key = n), i.track();
  }
}
function an(t, e, n, s, i, r) {
  let a = Xi.get(t);
  if (!a) return void ii++;
  let l = (o) => {
    o && o.trigger();
  };
  if (Sr++, e === "clear") a.forEach(l);
  else {
    let o = te(t), u = o && yr(n);
    if (o && n === "length") {
      let d = Number(s);
      a.forEach((f, h) => {
        (h === "length" || h === ri || !Ot(h) && h >= d) && l(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && l(a.get(n)), u && l(a.get(ri)), e) {
      case "add":
        if (o) u && l(a.get("length"));
        else {
          let f;
          l(a.get(Xn)), f = t, Ge.call(f) === "[object Map]" && l(a.get(Ba));
        }
        break;
      case "delete":
        if (!o) {
          let f;
          l(a.get(Xn)), f = t, Ge.call(f) === "[object Map]" && l(a.get(Ba));
        }
        break;
      case "set":
        let d;
        d = t, Ge.call(d) === "[object Map]" && l(a.get(Xn));
    }
  }
  dl();
}
function os(t) {
  let e = ge(t);
  return e === t ? e : (nt(e, "iterate", ri), gt(t) ? e : e.map(Dt));
}
function Tr(t) {
  return nt(t = ge(t), "iterate", ri), t;
}
function xn(t, e) {
  return mn(t) ? Gt(t) ? vs(Dt(e)) : vs(e) : Dt(e);
}
let Ff = { __proto__: null, [Symbol.iterator]() {
  return oa(this, Symbol.iterator, (t) => xn(this, t));
}, concat(...t) {
  return os(this).concat(...t.map((e) => te(e) ? os(e) : e));
}, entries() {
  return oa(this, "entries", (t) => (t[1] = xn(this, t[1]), t));
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
  return ua(this, "includes", t);
}, indexOf(...t) {
  return ua(this, "indexOf", t);
}, join(t) {
  return os(this).join(t);
}, lastIndexOf(...t) {
  return ua(this, "lastIndexOf", t);
}, map(t, e) {
  return en(this, "map", t, e, void 0, arguments);
}, pop() {
  return Vs(this, "pop");
}, push(...t) {
  return Vs(this, "push", t);
}, reduce(t, ...e) {
  return Gl(this, "reduce", t, e);
}, reduceRight(t, ...e) {
  return Gl(this, "reduceRight", t, e);
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
  return oa(this, "values", (t) => xn(this, t));
} };
function oa(t, e, n) {
  let s = Tr(t), i = s[e]();
  return s === t || gt(t) || (i._next = i.next, i.next = () => {
    let r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
let Af = Array.prototype;
function en(t, e, n, s, i, r) {
  let a = Tr(t), l = a !== t && !gt(t), o = a[e];
  if (o !== Af[e]) {
    let f = o.apply(t, r);
    return l ? Dt(f) : f;
  }
  let u = n;
  a !== t && (l ? u = function(f, h) {
    return n.call(this, xn(t, f), h, t);
  } : n.length > 2 && (u = function(f, h) {
    return n.call(this, f, h, t);
  }));
  let d = o.call(a, u, s);
  return l && i ? i(d) : d;
}
function Gl(t, e, n, s) {
  let i = Tr(t), r = n;
  return i !== t && (gt(t) ? n.length > 3 && (r = function(a, l, o) {
    return n.call(this, a, l, o, t);
  }) : r = function(a, l, o) {
    return n.call(this, a, xn(t, l), o, t);
  }), i[e](r, ...s);
}
function ua(t, e, n) {
  let s = ge(t);
  nt(s, "iterate", ri);
  let i = s[e](...n);
  return (i === -1 || i === !1) && Er(n[0]) ? (n[0] = ge(n[0]), s[e](...n)) : i;
}
function Vs(t, e, n = []) {
  fn(), Sr++;
  let s = ge(t)[e].apply(t, n);
  return dl(), hn(), s;
}
let $f = gr("__proto__,__v_isRef,__isVue"), Pu = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ot));
function Lf(t) {
  Ot(t) || (t = String(t));
  let e = ge(this);
  return nt(e, "has", t), e.hasOwnProperty(t);
}
class Hu {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    let i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return s === (i ? r ? _f : Gu : r ? ju : qu).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    let a = te(e);
    if (!i) {
      let o;
      if (a && (o = Ff[n])) return o;
      if (n === "hasOwnProperty") return Lf;
    }
    let l = Reflect.get(e, n, Be(e) ? e : s);
    if ((Ot(n) ? Pu.has(n) : $f(n)) || (i || nt(e, "get", n), r)) return l;
    if (Be(l)) {
      let o = a && yr(n) ? l : l.value;
      return i && Ae(o) ? sn(o) : o;
    }
    return Ae(l) ? i ? sn(l) : Jt(l) : l;
  }
}
class Wu extends Hu {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, i) {
    let r = e[n], a = te(e) && yr(n);
    if (!this._isShallow) {
      let u = mn(r);
      if (gt(s) || mn(s) || (r = ge(r), s = ge(s)), !a && Be(r) && !Be(s)) return u || (r.value = s), !0;
    }
    let l = a ? Number(n) < e.length : Te(e, n), o = Reflect.set(e, n, s, Be(e) ? e : i);
    return e === ge(i) && (l ? mt(s, r) && an(e, "set", n, s) : an(e, "add", n, s)), o;
  }
  deleteProperty(e, n) {
    let s = Te(e, n);
    e[n];
    let i = Reflect.deleteProperty(e, n);
    return i && s && an(e, "delete", n, void 0), i;
  }
  has(e, n) {
    let s = Reflect.has(e, n);
    return Ot(n) && Pu.has(n) || nt(e, "has", n), s;
  }
  ownKeys(e) {
    return nt(e, "iterate", te(e) ? "length" : Xn), Reflect.ownKeys(e);
  }
}
class Uu extends Hu {
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
let Mf = new Wu(), Df = new Uu(), Of = new Wu(!0);
new Uu(!0);
let ca = (t) => t;
function $i(t) {
  return function() {
    return t !== "delete" && (t === "clear" ? void 0 : this);
  };
}
function xr(t, e) {
  let n, s = (He(n = { get(i) {
    let r = this.__v_raw, a = ge(r), l = ge(i);
    t || (mt(i, l) && nt(a, "get", i), nt(a, "get", l));
    let { has: o } = Reflect.getPrototypeOf(a), u = e ? ca : t ? vs : Dt;
    return o.call(a, i) ? u(r.get(i)) : o.call(a, l) ? u(r.get(l)) : void (r !== a && r.get(i));
  }, get size() {
    let i = this.__v_raw;
    return t || nt(ge(i), "iterate", Xn), i.size;
  }, has(i) {
    let r = this.__v_raw, a = ge(r), l = ge(i);
    return t || (mt(i, l) && nt(a, "has", i), nt(a, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
  }, forEach(i, r) {
    let a = this, l = a.__v_raw, o = ge(l), u = e ? ca : t ? vs : Dt;
    return t || nt(o, "iterate", Xn), l.forEach((d, f) => i.call(r, u(d), u(f), a));
  } }, t ? { add: $i("add"), set: $i("set"), delete: $i("delete"), clear: $i("clear") } : { add(i) {
    e || gt(i) || mn(i) || (i = ge(i));
    let r = ge(this);
    return Reflect.getPrototypeOf(r).has.call(r, i) || (r.add(i), an(r, "add", i, i)), this;
  }, set(i, r) {
    e || gt(r) || mn(r) || (r = ge(r));
    let a = ge(this), { has: l, get: o } = Reflect.getPrototypeOf(a), u = l.call(a, i);
    u || (i = ge(i), u = l.call(a, i));
    let d = o.call(a, i);
    return a.set(i, r), u ? mt(r, d) && an(a, "set", i, r) : an(a, "add", i, r), this;
  }, delete(i) {
    let r = ge(this), { has: a, get: l } = Reflect.getPrototypeOf(r), o = a.call(r, i);
    o || (i = ge(i), o = a.call(r, i)), l && l.call(r, i);
    let u = r.delete(i);
    return o && an(r, "delete", i, void 0), u;
  }, clear() {
    let i = ge(this), r = i.size !== 0, a = i.clear();
    return r && an(i, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = function(...r) {
      let a, l = this.__v_raw, o = ge(l), u = (a = o, Ge.call(a) === "[object Map]"), d = i === "entries" || i === Symbol.iterator && u, f = l[i](...r), h = e ? ca : t ? vs : Dt;
      return t || nt(o, "iterate", i === "keys" && u ? Ba : Xn), { next() {
        let { value: m, done: v } = f.next();
        return v ? { value: m, done: v } : { value: d ? [h(m[0]), h(m[1])] : h(m), done: v };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }), n);
  return (i, r, a) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(Te(s, r) && r in i ? s : i, r, a);
}
let Bf = { get: xr(!1, !1) }, Vf = { get: xr(!1, !0) }, Nf = { get: xr(!0, !1) };
xr(!0, !0);
let qu = /* @__PURE__ */ new WeakMap(), ju = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), _f = /* @__PURE__ */ new WeakMap();
function Jt(t) {
  return mn(t) ? t : hl(t, !1, Mf, Bf, qu);
}
function Rf(t) {
  return hl(t, !1, Of, Vf, ju);
}
function sn(t) {
  return hl(t, !0, Df, Nf, Gu);
}
function hl(t, e, n, s, i) {
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
function Gt(t) {
  return mn(t) ? Gt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function mn(t) {
  return !!(t && t.__v_isReadonly);
}
function gt(t) {
  return !!(t && t.__v_isShallow);
}
function Er(t) {
  return !!t && !!t.__v_raw;
}
function ge(t) {
  let e = t && t.__v_raw;
  return e ? ge(e) : t;
}
function ml(t) {
  return !Te(t, "__v_skip") && Object.isExtensible(t) && Fu(t, "__v_skip", !0), t;
}
let Dt = (t) => Ae(t) ? Jt(t) : t, vs = (t) => Ae(t) ? sn(t) : t;
function Be(t) {
  return !!t && t.__v_isRef === !0;
}
function ee(t) {
  return Zu(t, !1);
}
function zf(t) {
  return Zu(t, !0);
}
function Zu(t, e) {
  return Be(t) ? t : new Pf(t, e);
}
class Pf {
  constructor(e, n) {
    this.dep = new Cr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : ge(e), this._value = n ? e : Dt(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    let n = this._rawValue, s = this.__v_isShallow || gt(e) || mn(e);
    mt(e = s ? e : ge(e), n) && (this._rawValue = e, this._value = s ? e : Dt(e), this.dep.trigger());
  }
}
function c(t) {
  return Be(t) ? t.value : t;
}
let Hf = { get: (t, e, n) => e === "__v_raw" ? t : c(Reflect.get(t, e, n)), set: (t, e, n, s) => {
  let i = t[e];
  return Be(i) && !Be(n) ? (i.value = n, !0) : Reflect.set(t, e, n, s);
} };
function Yu(t) {
  return Gt(t) ? t : new Proxy(t, Hf);
}
class Wf {
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
function Uf(t) {
  return new Wf(t);
}
function qf(t) {
  let e = te(t) ? Array(t.length) : {};
  for (let n in t) e[n] = new Ju(t, n, void 0);
  return e;
}
class Ju {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = ge(e);
    let i = !0, r = e;
    if (!te(e) || !yr(String(n))) do
      i = !Er(r) || gt(r);
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
    return e = this._raw, n = this._key, (s = Xi.get(e)) && s.get(n);
  }
}
class jf {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function pn(t, e, n) {
  return Be(t) ? t : oe(t) ? new jf(t) : !Ae(t) || !(arguments.length > 1) ? ee(t) : new Ju(t, e, n);
}
class Gf {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Cr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ii - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && Le !== this) return Vu(this, !0), !0;
  }
  get value() {
    let e = this.dep.track();
    return Ru(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
let Li = {}, er = /* @__PURE__ */ new WeakMap();
function Zf(t, e = !1, n = Gn) {
  if (n) {
    let s = er.get(n);
    s || er.set(n, s = []), s.push(t);
  }
}
function ln(t, e = 1 / 0, n) {
  if (e <= 0 || !Ae(t) || t.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(t) || 0) >= e) return t;
  if (n.set(t, e), e--, Be(t)) ln(t.value, e, n);
  else if (te(t)) for (let s = 0; s < t.length; s++) ln(t[s], e, n);
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
function mi(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (i) {
    Fr(i, e, n);
  }
}
function Bt(t, e, n, s) {
  if (oe(t)) {
    let i = mi(t, e, n, s);
    return i && Eu(i) && i.catch((r) => {
      Fr(r, e, n);
    }), i;
  }
  if (te(t)) {
    let i = [];
    for (let r = 0; r < t.length; r++) i.push(Bt(t[r], e, n, s));
    return i;
  }
}
function Fr(t, e, n, s = !0) {
  e && e.vnode;
  let { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || Ie;
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
      fn(), mi(i, null, 10, [t, l, o]), hn();
      return;
    }
  }
  (function(a, l, o, u = !0, d = !1) {
    if (d) throw a;
    console.error(a);
  })(t, 0, 0, s, r);
}
let ut = [], Ht = -1, ys = [], En = null, hs = 0, Ku = Promise.resolve(), Ui = null;
function Jn(t) {
  let e = Ui || Ku;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function pl(t) {
  if (!(1 & t.flags)) {
    let e = Ys(t), n = ut[ut.length - 1];
    !n || !(2 & t.flags) && e >= Ys(n) ? ut.push(t) : ut.splice((function(s) {
      let i = Ht + 1, r = ut.length;
      for (; i < r; ) {
        let a = i + r >>> 1, l = ut[a], o = Ys(l);
        o < s || o === s && 2 & l.flags ? i = a + 1 : r = a;
      }
      return i;
    })(e), 0, t), t.flags |= 1, Qu();
  }
}
function Qu() {
  Ui || (Ui = Ku.then(function t(e) {
    try {
      for (Ht = 0; Ht < ut.length; Ht++) {
        let n = ut[Ht];
        n && !(8 & n.flags) && (4 & n.flags && (n.flags &= -2), mi(n, n.i, n.i ? 15 : 14), 4 & n.flags || (n.flags &= -2));
      }
    } finally {
      for (; Ht < ut.length; Ht++) {
        let n = ut[Ht];
        n && (n.flags &= -2);
      }
      Ht = -1, ut.length = 0, Xu(), Ui = null, (ut.length || ys.length) && t();
    }
  }));
}
function Yf(t) {
  te(t) ? ys.push(...t) : En && t.id === -1 ? En.splice(hs + 1, 0, t) : 1 & t.flags || (ys.push(t), t.flags |= 1), Qu();
}
function Zl(t, e, n = Ht + 1) {
  for (; n < ut.length; n++) {
    let s = ut[n];
    if (s && 2 & s.flags) {
      if (t && s.id !== t.uid) continue;
      ut.splice(n, 1), n--, 4 & s.flags && (s.flags &= -2), s(), 4 & s.flags || (s.flags &= -2);
    }
  }
}
function Xu(t) {
  if (ys.length) {
    let e = [...new Set(ys)].sort((n, s) => Ys(n) - Ys(s));
    if (ys.length = 0, En) return void En.push(...e);
    for (hs = 0, En = e; hs < En.length; hs++) {
      let n = En[hs];
      4 & n.flags && (n.flags &= -2), 8 & n.flags || n(), n.flags &= -2;
    }
    En = null, hs = 0;
  }
}
let Ys = (t) => t.id == null ? 2 & t.flags ? -1 : 1 / 0 : t.id, Xe = null, ec = null;
function tr(t) {
  let e = Xe;
  return Xe = t, ec = t && t.type.__scopeId || null, e;
}
function q(t, e = Xe, n) {
  if (!e || t._n) return t;
  let s = (...i) => {
    let r;
    s._d && lr(-1);
    let a = tr(e);
    try {
      r = t(...i);
    } finally {
      tr(a), s._d && lr(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function gl(t, e) {
  if (Xe === null) return t;
  let n = Dr(Xe), s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [r, a, l, o = Ie] = e[i];
    r && (oe(r) && (r = { mounted: r, updated: r }), r.deep && ln(a), s.push({ dir: r, instance: n, value: a, oldValue: void 0, arg: l, modifiers: o }));
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
let tc = /* @__PURE__ */ Symbol("_vte"), Hs = (t) => t && (t.disabled || t.disabled === ""), Yl = (t) => t && (t.defer || t.defer === ""), Jl = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Kl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, da = (t, e) => {
  let n = t && t.to;
  return De(n) ? e ? e(n) : null : n;
}, nc = { name: "Teleport", __isTeleport: !0, process(t, e, n, s, i, r, a, l, o, u) {
  let { mc: d, pc: f, pbc: h, o: { insert: m, querySelector: v, createText: C } } = u, M = Hs(e.props), { shapeFlag: T, children: _, dynamicChildren: I } = e;
  if (t == null) {
    let W = e.el = C(""), x = e.anchor = C("");
    m(W, n, s), m(x, n, s);
    let $ = (b, w) => {
      16 & T && d(_, b, w, i, r, a, l, o);
    }, G = () => {
      let b = e.target = da(e.props, v), w = Ql(b, e, C, m);
      b && (a !== "svg" && Jl(b) ? a = "svg" : a !== "mathml" && Kl(b) && (a = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(b), M || ($(b, w), Di(e, !1)));
    };
    M && ($(n, x), Di(e, !0)), Yl(e.props) ? (e.el.__isMounted = !1, ot(() => {
      G(), delete e.el.__isMounted;
    }, r)) : G();
  } else {
    if (Yl(e.props) && t.el.__isMounted === !1) return void ot(() => {
      nc.process(t, e, n, s, i, r, a, l, o, u);
    }, r);
    e.el = t.el, e.targetStart = t.targetStart;
    let W = e.anchor = t.anchor, x = e.target = t.target, $ = e.targetAnchor = t.targetAnchor, G = Hs(t.props), b = G ? n : x, w = G ? W : $;
    if (a === "svg" || Jl(x) ? a = "svg" : (a === "mathml" || Kl(x)) && (a = "mathml"), I ? (h(t.dynamicChildren, I, b, i, r, a, l), Cl(t, e, !0)) : o || f(t, e, b, w, i, r, a, l, !1), M) G ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Mi(e, n, W, u, 1);
    else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
      let P = e.target = da(e.props, v);
      P && Mi(e, P, null, u, 0);
    } else G && Mi(e, x, $, u, 1);
    Di(e, M);
  }
}, remove(t, e, n, { um: s, o: { remove: i } }, r) {
  let { shapeFlag: a, children: l, anchor: o, targetStart: u, targetAnchor: d, target: f, props: h } = t;
  if (f && (i(u), i(d)), r && i(o), 16 & a) {
    let m = r || !Hs(h);
    for (let v = 0; v < l.length; v++) {
      let C = l[v];
      s(C, e, n, m, !!C.dynamicChildren);
    }
  }
}, move: Mi, hydrate: function(t, e, n, s, i, r, { o: { nextSibling: a, parentNode: l, querySelector: o, insert: u, createText: d } }, f) {
  function h(C, M, T, _) {
    M.anchor = f(a(C), M, l(C), n, s, i, r), M.targetStart = T, M.targetAnchor = _;
  }
  let m = e.target = da(e.props, o), v = Hs(e.props);
  if (m) {
    let C = m._lpa || m.firstChild;
    if (16 & e.shapeFlag) if (v) h(t, e, C, C && a(C));
    else {
      e.anchor = a(t);
      let M = C;
      for (; M; ) {
        if (M && M.nodeType === 8) {
          if (M.data === "teleport start anchor") e.targetStart = M;
          else if (M.data === "teleport anchor") {
            e.targetAnchor = M, m._lpa = e.targetAnchor && a(e.targetAnchor);
            break;
          }
        }
        M = a(M);
      }
      e.targetAnchor || Ql(m, e, d, u), f(C && a(C), e, m, n, s, i, r);
    }
    Di(e, v);
  } else v && 16 & e.shapeFlag && h(t, e, t, a(t));
  return e.anchor && a(e.anchor);
} };
function Mi(t, e, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  let { el: a, anchor: l, shapeFlag: o, children: u, props: d } = t, f = r === 2;
  if (f && s(a, e, n), (!f || Hs(d)) && 16 & o) for (let h = 0; h < u.length; h++) i(u[h], e, n, 2);
  f && s(l, e, n);
}
let sc = nc;
function Di(t, e) {
  let n = t.ctx;
  if (n && n.ut) {
    let s, i;
    for (e ? (s = t.el, i = t.anchor) : (s = t.targetStart, i = t.targetAnchor); s && s !== i; ) s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ql(t, e, n, s) {
  let i = e.targetStart = n(""), r = e.targetAnchor = n("");
  return i[tc] = r, t && (s(i, t), s(r, t)), r;
}
let rn = /* @__PURE__ */ Symbol("_leaveCb"), Oi = /* @__PURE__ */ Symbol("_enterCb");
function ic() {
  let t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return yn(() => {
    t.isMounted = !0;
  }), bl(() => {
    t.isUnmounting = !0;
  }), t;
}
let kt = [Function, Array], rc = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: kt, onEnter: kt, onAfterEnter: kt, onEnterCancelled: kt, onBeforeLeave: kt, onLeave: kt, onAfterLeave: kt, onLeaveCancelled: kt, onBeforeAppear: kt, onAppear: kt, onAfterAppear: kt, onAppearCancelled: kt }, ac = (t) => {
  let e = t.subTree;
  return e.component ? ac(e.component) : e;
};
function lc(t) {
  let e = t[0];
  if (t.length > 1) {
    for (let n of t) if (n.type !== Qe) {
      e = n;
      break;
    }
  }
  return e;
}
let Jf = { name: "BaseTransition", props: rc, setup(t, { slots: e }) {
  let n = Kt(), s = ic();
  return () => {
    let i = e.default && vl(e.default(), !0);
    if (!i || !i.length) return;
    let r = lc(i), a = ge(t), { mode: l } = a;
    if (s.isLeaving) return fa(r);
    let o = Xl(r);
    if (!o) return fa(r);
    let u = ai(o, a, s, n, (f) => u = f);
    o.type !== Qe && is(o, u);
    let d = n.subTree && Xl(n.subTree);
    if (d && d.type !== Qe && !Yn(d, o) && ac(n).type !== Qe) {
      let f = ai(d, a, s, n);
      if (is(d, f), l === "out-in" && o.type !== Qe) return s.isLeaving = !0, f.afterLeave = () => {
        s.isLeaving = !1, 8 & n.job.flags || n.update(), delete f.afterLeave, d = void 0;
      }, fa(r);
      l === "in-out" && o.type !== Qe ? f.delayLeave = (h, m, v) => {
        oc(s, d)[String(d.key)] = d, h[rn] = () => {
          m(), h[rn] = void 0, delete u.delayedLeave, d = void 0;
        }, u.delayedLeave = () => {
          v(), delete u.delayedLeave, d = void 0;
        };
      } : d = void 0;
    } else d && (d = void 0);
    return r;
  };
} };
function oc(t, e) {
  let { leavingVNodes: n } = t, s = n.get(e.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(e.type, s)), s;
}
function ai(t, e, n, s, i) {
  let { appear: r, mode: a, persisted: l = !1, onBeforeEnter: o, onEnter: u, onAfterEnter: d, onEnterCancelled: f, onBeforeLeave: h, onLeave: m, onAfterLeave: v, onLeaveCancelled: C, onBeforeAppear: M, onAppear: T, onAfterAppear: _, onAppearCancelled: I } = e, W = String(t.key), x = oc(n, t), $ = (w, P) => {
    w && Bt(w, s, 9, P);
  }, G = (w, P) => {
    let z = P[1];
    $(w, P), te(w) ? w.every((D) => D.length <= 1) && z() : w.length <= 1 && z();
  }, b = { mode: a, persisted: l, beforeEnter(w) {
    let P = o;
    if (!n.isMounted) if (r) P = M || o;
    else return;
    w[rn] && w[rn](!0);
    let z = x[W];
    z && Yn(t, z) && z.el[rn] && z.el[rn](), $(P, [w]);
  }, enter(w) {
    let P = u, z = d, D = f;
    if (!n.isMounted) if (r) P = T || u, z = _ || d, D = I || f;
    else return;
    let ne = !1, me = w[Oi] = (X) => {
      ne || (ne = !0, X ? $(D, [w]) : $(z, [w]), b.delayedLeave && b.delayedLeave(), w[Oi] = void 0);
    };
    P ? G(P, [w, me]) : me();
  }, leave(w, P) {
    let z = String(t.key);
    if (w[Oi] && w[Oi](!0), n.isUnmounting) return P();
    $(h, [w]);
    let D = !1, ne = w[rn] = (me) => {
      D || (D = !0, P(), me ? $(C, [w]) : $(v, [w]), w[rn] = void 0, x[z] === t && delete x[z]);
    };
    x[z] = t, m ? G(m, [w, ne]) : ne();
  }, clone(w) {
    let P = ai(w, e, n, s, i);
    return i && i(P), P;
  } };
  return b;
}
function fa(t) {
  if (Ar(t)) return (t = Bn(t)).children = null, t;
}
function Xl(t) {
  if (!Ar(t)) return t.type.__isTeleport && t.children ? lc(t.children) : t;
  if (t.component) return t.component.subTree;
  let { shapeFlag: e, children: n } = t;
  if (n) {
    if (16 & e) return n[0];
    if (32 & e && oe(n.default)) return n.default();
  }
}
function is(t, e) {
  6 & t.shapeFlag && t.component ? (t.transition = e, is(t.component.subTree, e)) : 128 & t.shapeFlag ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function vl(t, e = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < t.length; r++) {
    let a = t[r], l = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === fe ? (128 & a.patchFlag && i++, s = s.concat(vl(a.children, e, l))) : (e || a.type !== Qe) && s.push(l != null ? Bn(a, { key: l }) : a);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function U(t, e) {
  return oe(t) ? He({ name: t.name }, e, { setup: t }) : t;
}
function yl() {
  let t = Kt();
  return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
}
function uc(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function un(t) {
  let e = Kt(), n = zf(null);
  return e && Object.defineProperty(e.refs === Ie ? e.refs = {} : e.refs, t, { enumerable: !0, get: () => n.value, set: (s) => n.value = s }), n;
}
let nr = /* @__PURE__ */ new WeakMap();
function Js(t, e, n, s, i = !1) {
  if (te(t)) return void t.forEach((v, C) => Js(v, e && (te(e) ? e[C] : e), n, s, i));
  if (bs(s) && !i) {
    512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && Js(t, e, n, s.component.subTree);
    return;
  }
  let r = 4 & s.shapeFlag ? Dr(s.component) : s.el, a = i ? null : r, { i: l, r: o } = t, u = e && e.r, d = l.refs === Ie ? l.refs = {} : l.refs, f = l.setupState, h = ge(f), m = f === Ie ? xu : (v) => Te(h, v);
  if (u != null && u !== o && (eo(e), De(u) ? (d[u] = null, m(u) && (f[u] = null)) : Be(u) && (u.value = null, e.k && (d[e.k] = null))), oe(o)) mi(o, l, 12, [a, d]);
  else {
    let v = De(o), C = Be(o);
    if (v || C) {
      let M = () => {
        if (t.f) {
          let T = v ? m(o) ? f[o] : d[o] : o.value;
          if (i) te(T) && ul(T, r);
          else if (te(T)) T.includes(r) || T.push(r);
          else if (v) d[o] = [r], m(o) && (f[o] = d[o]);
          else {
            let _ = [r];
            o.value = _, t.k && (d[t.k] = _);
          }
        } else v ? (d[o] = a, m(o) && (f[o] = a)) : C && (o.value = a, t.k && (d[t.k] = a));
      };
      if (a) {
        let T = () => {
          M(), nr.delete(t);
        };
        T.id = -1, nr.set(t, T), ot(T, n);
      } else eo(t), M();
    }
  }
}
function eo(t) {
  let e = nr.get(t);
  e && (e.flags |= 8, nr.delete(t));
}
Ir().requestIdleCallback;
Ir().cancelIdleCallback;
let bs = (t) => !!t.type.__asyncLoader, Ar = (t) => t.type.__isKeepAlive;
function Kf(t, e) {
  cc(t, "a", e);
}
function Qf(t, e) {
  cc(t, "da", e);
}
function cc(t, e, n = st) {
  let s = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated) return;
      i = i.parent;
    }
    return t();
  });
  if (sr(e, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) Ar(i.parent.vnode) && (function(r, a, l, o) {
      let u = sr(a, r, o, !0);
      rs(() => {
        ul(o[a], u);
      }, l);
    })(s, e, n, i), i = i.parent;
  }
}
function sr(t, e, n = st, s = !1) {
  if (n) {
    let i = n[t] || (n[t] = []), r = e.__weh || (e.__weh = (...a) => {
      fn();
      let l = gi(n), o = Bt(e, n, t, a);
      return l(), hn(), o;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
let vn = (t) => (e, n = st) => {
  ui && t !== "sp" || sr(t, (...s) => e(...s), n);
}, Xf = vn("bm"), yn = vn("m"), eh = vn("bu"), dc = vn("u"), bl = vn("bum"), rs = vn("um"), th = vn("sp"), nh = vn("rtg"), sh = vn("rtc");
function ih(t, e = st) {
  sr("ec", t, e);
}
let fc = "components";
function rh(t, e) {
  return mc(fc, t, !0, e) || t;
}
let hc = /* @__PURE__ */ Symbol.for("v-ndc");
function kl(t) {
  return De(t) ? mc(fc, t, !1) || t : t || hc;
}
function mc(t, e, n = !0, s = !1) {
  let i = Xe || st;
  if (i) {
    let r = i.type;
    {
      let l = Mh(r, !1);
      if (l && (l === e || l === yt(e) || l === kr(yt(e)))) return r;
    }
    let a = to(i[t] || r[t], e) || to(i.appContext[t], e);
    return !a && s ? r : a;
  }
}
function to(t, e) {
  return t && (t[e] || t[yt(e)] || t[kr(yt(e))]);
}
function Ze(t, e, n, s) {
  let i, r = n, a = te(t);
  if (a || De(t)) {
    let l = a && Gt(t), o = !1, u = !1;
    l && (o = !gt(t), u = mn(t), t = Tr(t)), i = Array(t.length);
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
function wl(t, e) {
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    if (te(s)) for (let i = 0; i < s.length; i++) t[s[i].name] = s[i].fn;
    else s && (t[s.name] = s.key ? (...i) => {
      let r = s.fn(...i);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return t;
}
function le(t, e, n = {}, s, i) {
  if (Xe.ce || Xe.parent && bs(Xe.parent) && Xe.parent.ce) {
    let u = Object.keys(n).length > 0;
    return e !== "default" && (n.name = e), g(), R(fe, null, [B("slot", n, s && s())], u ? -2 : 64);
  }
  let r = t[e];
  r && r._c && (r._d = !1), g();
  let a = r && pc(r(n)), l = n.key || a && a.key, o = R(fe, { key: (l && !Ot(l) ? l : `_${e}`) + (!a && s ? "_fb" : "") }, a || (s ? s() : []), a && t._ === 1 ? 64 : -2);
  return o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), r && r._c && (r._d = !0), o;
}
function pc(t) {
  return t.some((e) => !oi(e) || e.type !== Qe && (e.type !== fe || !!pc(e.children))) ? t : null;
}
let Va = (t) => t ? Fc(t) ? Dr(t) : Va(t.parent) : null, Ks = He(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => Va(t.parent), $root: (t) => Va(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => gc(t), $forceUpdate: (t) => t.f || (t.f = () => {
  pl(t.update);
}), $nextTick: (t) => t.n || (t.n = Jn.bind(t.proxy)), $watch: (t) => mh.bind(t) }), ha = (t, e) => t !== Ie && !t.__isScriptSetup && Te(t, e), Na = { get({ _: t }, e) {
  let n, s;
  if (e === "__v_skip") return !0;
  let { ctx: i, setupState: r, data: a, props: l, accessCache: o, type: u, appContext: d } = t;
  if (e[0] !== "$") {
    let h = o[e];
    if (h !== void 0) switch (h) {
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
      if (ha(r, e)) return o[e] = 1, r[e];
      if (a !== Ie && Te(a, e)) return o[e] = 2, a[e];
      if (Te(l, e)) return o[e] = 3, l[e];
      if (i !== Ie && Te(i, e)) return o[e] = 4, i[e];
      _a && (o[e] = 0);
    }
  }
  let f = Ks[e];
  return f ? (e === "$attrs" && nt(t.attrs, "get", ""), f(t)) : (n = u.__cssModules) && (n = n[e]) ? n : i !== Ie && Te(i, e) ? (o[e] = 4, i[e]) : Te(s = d.config.globalProperties, e) ? s[e] : void 0;
}, set({ _: t }, e, n) {
  let { data: s, setupState: i, ctx: r } = t;
  return ha(i, e) ? (i[e] = n, !0) : s !== Ie && Te(s, e) ? (s[e] = n, !0) : !Te(t.props, e) && !(e[0] === "$" && e.slice(1) in t) && (r[e] = n, !0);
}, has({ _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: i, props: r, type: a } }, l) {
  let o;
  return !!(n[l] || t !== Ie && l[0] !== "$" && Te(t, l) || ha(e, l) || Te(r, l) || Te(s, l) || Te(Ks, l) || Te(i.config.globalProperties, l) || (o = a.__cssModules) && o[l]);
}, defineProperty(t, e, n) {
  return n.get != null ? t._.accessCache[e] = 0 : Te(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
} };
He({}, Na, { get(t, e) {
  if (e !== Symbol.unscopables) return Na.get(t, e, t);
}, has: (t, e) => e[0] !== "_" && !If(e) });
function ah() {
  return lh().slots;
}
function lh(t) {
  let e = Kt();
  return e.setupContext || (e.setupContext = $c(e));
}
function ir(t) {
  return te(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t;
}
function Vt(t, e) {
  return t && e ? te(t) && te(e) ? t.concat(e) : He({}, ir(t), ir(e)) : t || e;
}
let _a = !0;
function no(t, e, n) {
  Bt(te(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function gc(t) {
  let e, n = t.type, { mixins: s, extends: i } = n, { mixins: r, optionsCache: a, config: { optionMergeStrategies: l } } = t.appContext, o = a.get(n);
  return o ? e = o : r.length || s || i ? (e = {}, r.length && r.forEach((u) => rr(e, u, l, !0)), rr(e, n, l)) : e = n, Ae(n) && a.set(n, e), e;
}
function rr(t, e, n, s = !1) {
  let { mixins: i, extends: r } = e;
  for (let a in r && rr(t, r, n, !0), i && i.forEach((l) => rr(t, l, n, !0)), e) if (!(s && a === "expose")) {
    let l = oh[a] || n && n[a];
    t[a] = l ? l(t[a], e[a]) : e[a];
  }
  return t;
}
let oh = { data: so, props: io, emits: io, methods: Ns, computed: Ns, beforeCreate: lt, created: lt, beforeMount: lt, mounted: lt, beforeUpdate: lt, updated: lt, beforeDestroy: lt, beforeUnmount: lt, destroyed: lt, unmounted: lt, activated: lt, deactivated: lt, errorCaptured: lt, serverPrefetch: lt, components: Ns, directives: Ns, watch: function(t, e) {
  if (!t) return e;
  if (!e) return t;
  let n = He(/* @__PURE__ */ Object.create(null), t);
  for (let s in e) n[s] = lt(t[s], e[s]);
  return n;
}, provide: so, inject: function(t, e) {
  return Ns(Ra(t), Ra(e));
} };
function so(t, e) {
  return e ? t ? function() {
    return He(oe(t) ? t.call(this, this) : t, oe(e) ? e.call(this, this) : e);
  } : e : t;
}
function Ra(t) {
  if (te(t)) {
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
function io(t, e) {
  return t ? te(t) && te(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : He(/* @__PURE__ */ Object.create(null), ir(t), ir(e ?? {})) : e;
}
function vc() {
  return { app: null, config: { isNativeTag: xu, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let uh = 0, es = null;
function On(t, e) {
  if (st) {
    let n = st.provides, s = st.parent && st.parent.provides;
    s === n && (n = st.provides = Object.create(s)), n[t] = e;
  }
}
function dn(t, e, n = !1) {
  let s = Kt();
  if (s || es) {
    let i = es ? es._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && oe(e) ? e.call(s && s.proxy) : e;
  }
}
function ch() {
  return !!(Kt() || es);
}
let dh = /* @__PURE__ */ Symbol.for("v-scx"), fh = () => dn(dh);
function $r(t, e) {
  return Lr(t, null, e);
}
function hh(t, e) {
  return Lr(t, null, { flush: "sync" });
}
function Oe(t, e, n) {
  return Lr(t, e, n);
}
function Lr(t, e, n = Ie) {
  let s, { immediate: i, flush: r } = n, a = He({}, n), l = e && i || !e && r !== "post";
  if (ui) {
    if (r === "sync") {
      let f = fh();
      s = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      let f = () => {
      };
      return f.stop = qt, f.resume = qt, f.pause = qt, f;
    }
  }
  let o = st;
  a.call = (f, h, m) => Bt(f, o, h, m);
  let u = !1;
  r === "post" ? a.scheduler = (f) => {
    ot(f, o && o.suspense);
  } : r !== "sync" && (u = !0, a.scheduler = (f, h) => {
    h ? f() : pl(f);
  }), a.augmentJob = (f) => {
    e && (f.flags |= 4), u && (f.flags |= 2, o && (f.id = o.uid, f.i = o));
  };
  let d = (function(f, h, m = Ie) {
    let v, C, M, T, { immediate: _, deep: I, once: W, scheduler: x, augmentJob: $, call: G } = m, b = (X) => I ? X : gt(X) || I === !1 || I === 0 ? ln(X, 1) : ln(X), w = !1, P = !1;
    if (Be(f) ? (C = () => f.value, w = gt(f)) : Gt(f) ? (C = () => b(f), w = !0) : te(f) ? (P = !0, w = f.some((X) => Gt(X) || gt(X)), C = () => f.map((X) => Be(X) ? X.value : Gt(X) ? b(X) : oe(X) ? G ? G(X, 2) : X() : void 0)) : C = oe(f) ? h ? G ? () => G(f, 2) : f : () => {
      if (M) {
        fn();
        try {
          M();
        } finally {
          hn();
        }
      }
      let X = Gn;
      Gn = v;
      try {
        return G ? G(f, 3, [T]) : f(T);
      } finally {
        Gn = X;
      }
    } : qt, h && I) {
      let X = C, Ce = I === !0 ? 1 / 0 : I;
      C = () => ln(X(), Ce);
    }
    let z = Du(), D = () => {
      v.stop(), z && z.active && ul(z.effects, v);
    };
    if (W && h) {
      let X = h;
      h = (...Ce) => {
        X(...Ce), D();
      };
    }
    let ne = P ? Array(f.length).fill(Li) : Li, me = (X) => {
      if (1 & v.flags && (v.dirty || X)) if (h) {
        let Ce = v.run();
        if (I || w || (P ? Ce.some((ke, be) => mt(ke, ne[be])) : mt(Ce, ne))) {
          M && M();
          let ke = Gn;
          Gn = v;
          try {
            let be = [Ce, ne === Li ? void 0 : P && ne[0] === Li ? [] : ne, T];
            ne = Ce, G ? G(h, 3, be) : h(...be);
          } finally {
            Gn = ke;
          }
        }
      } else v.run();
    };
    return $ && $(me), (v = new Bu(C)).scheduler = x ? () => x(me, !1) : me, T = (X) => Zf(X, !1, v), M = v.onStop = () => {
      let X = er.get(v);
      if (X) {
        if (G) G(X, 4);
        else for (let Ce of X) Ce();
        er.delete(v);
      }
    }, h ? _ ? me(!0) : ne = v.run() : x ? x(me.bind(null, !0), !0) : v.run(), D.pause = v.pause.bind(v), D.resume = v.resume.bind(v), D.stop = D, D;
  })(t, e, a);
  return ui && (s ? s.push(d) : l && d()), d;
}
function mh(t, e, n) {
  let s, i = this.proxy, r = De(t) ? t.includes(".") ? yc(i, t) : () => i[t] : t.bind(i, i);
  oe(e) ? s = e : (s = e.handler, n = e);
  let a = gi(this), l = Lr(r, s.bind(i), n);
  return a(), l;
}
function yc(t, e) {
  let n = e.split(".");
  return () => {
    let s = t;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function ct(t, e, n = Ie) {
  let s = Kt(), i = yt(e), r = Rn(e), a = bc(t, i), l = Uf((o, u) => {
    let d, f, h = Ie;
    return hh(() => {
      let m = t[i];
      mt(d, m) && (d = m, u());
    }), { get: () => (o(), n.get ? n.get(d) : d), set(m) {
      let v = n.set ? n.set(m) : m;
      if (!mt(v, d) && !(h !== Ie && mt(m, h))) return;
      let C = s.vnode.props;
      C && (e in C || i in C || r in C) && (`onUpdate:${e}` in C || `onUpdate:${i}` in C || `onUpdate:${r}` in C) || (d = m, u()), s.emit(`update:${e}`, v), mt(m, v) && mt(m, h) && !mt(v, f) && u(), h = m, f = v;
    } };
  });
  return l[Symbol.iterator] = () => {
    let o = 0;
    return { next: () => o < 2 ? { value: o++ ? a || Ie : l, done: !1 } : { done: !0 } };
  }, l;
}
let bc = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${yt(e)}Modifiers`] || t[`${Rn(e)}Modifiers`];
function ph(t, e, ...n) {
  let s;
  if (t.isUnmounted) return;
  let i = t.vnode.props || Ie, r = n, a = e.startsWith("update:"), l = a && bc(i, e.slice(7));
  l && (l.trim && (r = n.map((d) => De(d) ? d.trim() : d)), l.number && (r = n.map(wr)));
  let o = i[s = sa(e)] || i[s = sa(yt(e))];
  !o && a && (o = i[s = sa(Rn(e))]), o && Bt(o, t, 6, r);
  let u = i[s + "Once"];
  if (u) {
    if (t.emitted) {
      if (t.emitted[s]) return;
    } else t.emitted = {};
    t.emitted[s] = !0, Bt(u, t, 6, r);
  }
}
let gh = /* @__PURE__ */ new WeakMap();
function ar(t, e) {
  return !!t && !!vr(e) && (Te(t, (e = e.slice(2).replace(/Once$/, ""))[0].toLowerCase() + e.slice(1)) || Te(t, Rn(e)) || Te(t, e));
}
function ro(t) {
  let e, n, { type: s, vnode: i, proxy: r, withProxy: a, propsOptions: [l], slots: o, attrs: u, emit: d, render: f, renderCache: h, props: m, data: v, setupState: C, ctx: M, inheritAttrs: T } = t, _ = tr(t);
  try {
    if (4 & i.shapeFlag) {
      let W = a || r;
      e = Wt(f.call(W, W, h, m, C, v, M)), n = u;
    } else e = Wt(s.length > 1 ? s(m, { attrs: u, slots: o, emit: d }) : s(m, null)), n = s.props ? u : vh(u);
  } catch (W) {
    Qs.length = 0, Fr(W, t, 1), e = B(Qe);
  }
  let I = e;
  if (n && T !== !1) {
    let W = Object.keys(n), { shapeFlag: x } = I;
    W.length && 7 & x && (l && W.some(ol) && (n = yh(n, l)), I = Bn(I, n, !1, !0));
  }
  return i.dirs && ((I = Bn(I, null, !1, !0)).dirs = I.dirs ? I.dirs.concat(i.dirs) : i.dirs), i.transition && is(I, i.transition), e = I, tr(_), e;
}
let vh = (t) => {
  let e;
  for (let n in t) (n === "class" || n === "style" || vr(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, yh = (t, e) => {
  let n = {};
  for (let s in t) ol(s) && s.slice(9) in e || (n[s] = t[s]);
  return n;
};
function ao(t, e, n) {
  let s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < s.length; i++) {
    let r = s[i];
    if (e[r] !== t[r] && !ar(n, r)) return !0;
  }
  return !1;
}
function bh({ vnode: t, parent: e }, n) {
  for (; e; ) {
    let s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t) (t = e.vnode).el = n, e = e.parent;
    else break;
  }
}
let za = {}, kc = (t) => Object.getPrototypeOf(t) === za;
function wc(t, e, n, s) {
  let i, [r, a] = t.propsOptions, l = !1;
  if (e) for (let o in e) {
    let u;
    if (Zs(o)) continue;
    let d = e[o];
    r && Te(r, u = yt(o)) ? a && a.includes(u) ? (i || (i = {}))[u] = d : n[u] = d : ar(t.emitsOptions, o) || o in s && d === s[o] || (s[o] = d, l = !0);
  }
  if (a) {
    let o = ge(n), u = i || Ie;
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      n[f] = Pa(r, o, f, u[f], t, !Te(u, f));
    }
  }
  return l;
}
function Pa(t, e, n, s, i, r) {
  let a = t[n];
  if (a != null) {
    let l = Te(a, "default");
    if (l && s === void 0) {
      let o = a.default;
      if (a.type !== Function && !a.skipFactory && oe(o)) {
        let { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          let d = gi(i);
          s = u[n] = o.call(null, e), d();
        }
      } else s = o;
      i.ce && i.ce._setProp(n, s);
    }
    a[0] && (r && !l ? s = !1 : a[1] && (s === "" || s === Rn(n)) && (s = !0));
  }
  return s;
}
let kh = /* @__PURE__ */ new WeakMap();
function lo(t) {
  return !(t[0] === "$" || Zs(t));
}
let Il = (t) => t === "_" || t === "_ctx" || t === "$stable", Sl = (t) => te(t) ? t.map(Wt) : [Wt(t)], wh = (t, e, n) => {
  if (e._n) return e;
  let s = q((...i) => Sl(e(...i)), n);
  return s._c = !1, s;
}, Ic = (t, e, n) => {
  let s = t._ctx;
  for (let i in t) {
    if (Il(i)) continue;
    let r = t[i];
    if (oe(r)) e[i] = wh(i, r, s);
    else if (r != null) {
      let a = Sl(r);
      e[i] = () => a;
    }
  }
}, Sc = (t, e) => {
  let n = Sl(e);
  t.slots.default = () => n;
}, Cc = (t, e, n) => {
  for (let s in e) (n || !Il(s)) && (t[s] = e[s]);
}, ot = Th;
function Ih(t) {
  return Sh(t);
}
function Sh(t, e) {
  var n;
  let s, i;
  Ir().__VUE__ = !0;
  let { insert: r, remove: a, patchProp: l, createElement: o, createText: u, createComment: d, setText: f, setElementText: h, parentNode: m, nextSibling: v, setScopeId: C = qt, insertStaticContent: M } = t, T = (p, y, S, H = null, O = null, E = null, V, A = null, L = !!y.dynamicChildren) => {
    if (p === y) return;
    p && !Yn(p, y) && (H = Ei(p), ze(p, O, E, !0), p = null), y.patchFlag === -2 && (L = !1, y.dynamicChildren = null);
    let { type: F, ref: j, shapeFlag: J } = y;
    switch (F) {
      case Mr:
        _(p, y, S, H);
        break;
      case Qe:
        I(p, y, S, H);
        break;
      case pa:
        p == null && W(y, S, H, V);
        break;
      case fe:
        D(p, y, S, H, O, E, V, A, L);
        break;
      default:
        1 & J ? x(p, y, S, H, O, E, V, A, L) : 6 & J ? ne(p, y, S, H, O, E, V, A, L) : (64 & J || 128 & J) && F.process(p, y, S, H, O, E, V, A, L, Os);
    }
    j != null && O ? Js(j, p && p.ref, E, y || p, !y) : j == null && p && p.ref != null && Js(p.ref, null, E, p, !0);
  }, _ = (p, y, S, H) => {
    if (p == null) r(y.el = u(y.children), S, H);
    else {
      let O = y.el = p.el;
      y.children !== p.children && f(O, y.children);
    }
  }, I = (p, y, S, H) => {
    p == null ? r(y.el = d(y.children || ""), S, H) : y.el = p.el;
  }, W = (p, y, S, H) => {
    [p.el, p.anchor] = M(p.children, y, S, H, p.el, p.anchor);
  }, x = (p, y, S, H, O, E, V, A, L) => {
    if (y.type === "svg" ? V = "svg" : y.type === "math" && (V = "mathml"), p == null) $(y, S, H, O, E, V, A, L);
    else {
      let F = p.el && p.el._isVueCE ? p.el : null;
      try {
        F && F._beginPatch(), w(p, y, O, E, V, A, L);
      } finally {
        F && F._endPatch();
      }
    }
  }, $ = (p, y, S, H, O, E, V, A) => {
    let L, F, { props: j, shapeFlag: J, transition: Z, dirs: K } = p;
    if (L = p.el = o(p.type, E, j && j.is, j), 8 & J ? h(L, p.children) : 16 & J && b(p.children, L, null, H, O, ma(p, E), V, A), K && Hn(p, null, H, "created"), G(L, p, p.scopeId, V, H), j) {
      for (let ue in j) ue === "value" || Zs(ue) || l(L, ue, null, j[ue], E, H);
      "value" in j && l(L, "value", null, j.value, E), (F = j.onVnodeBeforeMount) && zt(F, H, p);
    }
    K && Hn(p, null, H, "beforeMount");
    let he = Ch(O, Z);
    he && Z.beforeEnter(L), r(L, y, S), ((F = j && j.onVnodeMounted) || he || K) && ot(() => {
      F && zt(F, H, p), he && Z.enter(L), K && Hn(p, null, H, "mounted");
    }, O);
  }, G = (p, y, S, H, O) => {
    if (S && C(p, S), H) for (let E = 0; E < H.length; E++) C(p, H[E]);
    if (O) {
      let E = O.subTree;
      if (y === E || Tc(E.type) && (E.ssContent === y || E.ssFallback === y)) {
        let V = O.vnode;
        G(p, V, V.scopeId, V.slotScopeIds, O.parent);
      }
    }
  }, b = (p, y, S, H, O, E, V, A, L = 0) => {
    for (let F = L; F < p.length; F++) T(null, p[F] = A ? Fn(p[F]) : Wt(p[F]), y, S, H, O, E, V, A);
  }, w = (p, y, S, H, O, E, V) => {
    let A, L = y.el = p.el, { patchFlag: F, dynamicChildren: j, dirs: J } = y;
    F |= 16 & p.patchFlag;
    let Z = p.props || Ie, K = y.props || Ie;
    if (S && Wn(S, !1), (A = K.onVnodeBeforeUpdate) && zt(A, S, y, p), J && Hn(y, p, S, "beforeUpdate"), S && Wn(S, !0), (Z.innerHTML && K.innerHTML == null || Z.textContent && K.textContent == null) && h(L, ""), j ? P(p.dynamicChildren, j, L, S, H, ma(y, O), E) : V || be(p, y, L, null, S, H, ma(y, O), E, !1), F > 0) {
      if (16 & F) z(L, Z, K, S, O);
      else if (2 & F && Z.class !== K.class && l(L, "class", null, K.class, O), 4 & F && l(L, "style", Z.style, K.style, O), 8 & F) {
        let he = y.dynamicProps;
        for (let ue = 0; ue < he.length; ue++) {
          let pe = he[ue], Je = Z[pe], Ke = K[pe];
          (Ke !== Je || pe === "value") && l(L, pe, Je, Ke, O, S);
        }
      }
      1 & F && p.children !== y.children && h(L, y.children);
    } else V || j != null || z(L, Z, K, S, O);
    ((A = K.onVnodeUpdated) || J) && ot(() => {
      A && zt(A, S, y, p), J && Hn(y, p, S, "updated");
    }, H);
  }, P = (p, y, S, H, O, E, V) => {
    for (let A = 0; A < y.length; A++) {
      let L = p[A], F = y[A], j = L.el && (L.type === fe || !Yn(L, F) || 198 & L.shapeFlag) ? m(L.el) : S;
      T(L, F, j, null, H, O, E, V, !0);
    }
  }, z = (p, y, S, H, O) => {
    if (y !== S) {
      if (y !== Ie) for (let E in y) Zs(E) || E in S || l(p, E, y[E], null, O, H);
      for (let E in S) {
        if (Zs(E)) continue;
        let V = S[E], A = y[E];
        V !== A && E !== "value" && l(p, E, A, V, O, H);
      }
      "value" in S && l(p, "value", y.value, S.value, O);
    }
  }, D = (p, y, S, H, O, E, V, A, L) => {
    let F = y.el = p ? p.el : u(""), j = y.anchor = p ? p.anchor : u(""), { patchFlag: J, dynamicChildren: Z, slotScopeIds: K } = y;
    K && (A = A ? A.concat(K) : K), p == null ? (r(F, S, H), r(j, S, H), b(y.children || [], S, j, O, E, V, A, L)) : J > 0 && 64 & J && Z && p.dynamicChildren ? (P(p.dynamicChildren, Z, S, O, E, V, A), (y.key != null || O && y === O.subTree) && Cl(p, y, !0)) : be(p, y, S, j, O, E, V, A, L);
  }, ne = (p, y, S, H, O, E, V, A, L) => {
    y.slotScopeIds = A, p == null ? 512 & y.shapeFlag ? O.ctx.activate(y, S, H, V, L) : me(y, S, H, O, E, V, L) : X(p, y, L);
  }, me = (p, y, S, H, O, E, V) => {
    let A = p.component = Ah(p, H, O);
    if (Ar(p) && (A.ctx.renderer = Os), $h(A, !1, V), A.asyncDep) {
      if (O && O.registerDep(A, Ce, V), !p.el) {
        let L = A.subTree = B(Qe);
        I(null, L, y, S), p.placeholder = L.el;
      }
    } else Ce(A, p, y, S, O, E, V);
  }, X = (p, y, S) => {
    let H = y.component = p.component;
    if ((function(O, E, V) {
      let { props: A, children: L, component: F } = O, { props: j, children: J, patchFlag: Z } = E, K = F.emitsOptions;
      if (E.dirs || E.transition) return !0;
      if (!V || !(Z >= 0)) return (!!L || !!J) && (!J || !J.$stable) || A !== j && (A ? !j || ao(A, j, K) : !!j);
      if (1024 & Z) return !0;
      if (16 & Z) return A ? ao(A, j, K) : !!j;
      if (8 & Z) {
        let he = E.dynamicProps;
        for (let ue = 0; ue < he.length; ue++) {
          let pe = he[ue];
          if (j[pe] !== A[pe] && !ar(K, pe)) return !0;
        }
      }
      return !1;
    })(p, y, S)) {
      if (H.asyncDep && !H.asyncResolved) return void ke(H, y, S);
      H.next = y, H.update();
    } else y.el = p.el, H.vnode = y;
  }, Ce = (p, y, S, H, O, E, V) => {
    let A = () => {
      if (p.isMounted) {
        let J, { next: Z, bu: K, u: he, parent: ue, vnode: pe } = p;
        {
          let Rt = (function Pn(Fi) {
            let $e = Fi.subTree.component;
            if ($e) return $e.asyncDep && !$e.asyncResolved ? $e : Pn($e);
          })(p);
          if (Rt) {
            Z && (Z.el = pe.el, ke(p, Z, V)), Rt.asyncDep.then(() => {
              p.isUnmounted || A();
            });
            return;
          }
        }
        let Je = Z;
        Wn(p, !1), Z ? (Z.el = pe.el, ke(p, Z, V)) : Z = pe, K && Wi(K), (J = Z.props && Z.props.onVnodeBeforeUpdate) && zt(J, ue, Z, pe), Wn(p, !0);
        let Ke = ro(p), _t = p.subTree;
        p.subTree = Ke, T(_t, Ke, m(_t.el), Ei(_t), p, O, E), Z.el = Ke.el, Je === null && bh(p, Ke.el), he && ot(he, O), (J = Z.props && Z.props.onVnodeUpdated) && ot(() => zt(J, ue, Z, pe), O);
      } else {
        let J, { el: Z, props: K } = y, { bm: he, m: ue, parent: pe, root: Je, type: Ke } = p, _t = bs(y);
        if (Wn(p, !1), he && Wi(he), !_t && (J = K && K.onVnodeBeforeMount) && zt(J, pe, y), Wn(p, !0), !(Z && i)) {
          Je.ce && Je.ce._def.shadowRoot !== !1 && Je.ce._injectChildStyle(Ke);
          let Rt = p.subTree = ro(p);
          T(null, Rt, S, H, p, O, E), y.el = Rt.el;
        }
        if (ue && ot(ue, O), !_t && (J = K && K.onVnodeMounted)) {
          let Rt = y;
          ot(() => zt(J, pe, Rt), O);
        }
        (256 & y.shapeFlag || pe && bs(pe.vnode) && 256 & pe.vnode.shapeFlag) && p.a && ot(p.a, O), p.isMounted = !0, y = S = H = null;
      }
    };
    p.scope.on();
    let L = p.effect = new Bu(A);
    p.scope.off();
    let F = p.update = L.run.bind(L), j = p.job = L.runIfDirty.bind(L);
    j.i = p, j.id = p.uid, L.scheduler = () => pl(j), Wn(p, !0), F();
  }, ke = (p, y, S) => {
    y.component = p;
    let H = p.vnode.props;
    p.vnode = y, p.next = null, (function(O, E, V, A) {
      let { props: L, attrs: F, vnode: { patchFlag: j } } = O, J = ge(L), [Z] = O.propsOptions, K = !1;
      if ((A || j > 0) && !(16 & j)) {
        if (8 & j) {
          let he = O.vnode.dynamicProps;
          for (let ue = 0; ue < he.length; ue++) {
            let pe = he[ue];
            if (ar(O.emitsOptions, pe)) continue;
            let Je = E[pe];
            if (Z) if (Te(F, pe)) Je !== F[pe] && (F[pe] = Je, K = !0);
            else {
              let Ke = yt(pe);
              L[Ke] = Pa(Z, J, Ke, Je, O, !1);
            }
            else Je !== F[pe] && (F[pe] = Je, K = !0);
          }
        }
      } else {
        let he;
        for (let ue in wc(O, E, L, F) && (K = !0), J) E && (Te(E, ue) || (he = Rn(ue)) !== ue && Te(E, he)) || (Z ? V && (V[ue] !== void 0 || V[he] !== void 0) && (L[ue] = Pa(Z, J, ue, void 0, O, !0)) : delete L[ue]);
        if (F !== J) for (let ue in F) E && Te(E, ue) || (delete F[ue], K = !0);
      }
      K && an(O.attrs, "set", "");
    })(p, y.props, H, S), ((O, E, V) => {
      let { vnode: A, slots: L } = O, F = !0, j = Ie;
      if (32 & A.shapeFlag) {
        let J = E._;
        J ? V && J === 1 ? F = !1 : Cc(L, E, V) : (F = !E.$stable, Ic(E, L)), j = E;
      } else E && (Sc(O, E), j = { default: 1 });
      if (F) for (let J in L) Il(J) || j[J] != null || delete L[J];
    })(p, y.children, S), fn(), Zl(p), hn();
  }, be = (p, y, S, H, O, E, V, A, L = !1) => {
    let F = p && p.children, j = p ? p.shapeFlag : 0, J = y.children, { patchFlag: Z, shapeFlag: K } = y;
    if (Z > 0) {
      if (128 & Z) return void Re(F, J, S, H, O, E, V, A, L);
      if (256 & Z) return void Fe(F, J, S, H, O, E, V, A, L);
    }
    8 & K ? (16 & j && Ds(F, O, E), J !== F && h(S, J)) : 16 & j ? 16 & K ? Re(F, J, S, H, O, E, V, A, L) : Ds(F, O, E, !0) : (8 & j && h(S, ""), 16 & K && b(J, S, H, O, E, V, A, L));
  }, Fe = (p, y, S, H, O, E, V, A, L) => {
    let F;
    p = p || gs, y = y || gs;
    let j = p.length, J = y.length, Z = Math.min(j, J);
    for (F = 0; F < Z; F++) {
      let K = y[F] = L ? Fn(y[F]) : Wt(y[F]);
      T(p[F], K, S, null, O, E, V, A, L);
    }
    j > J ? Ds(p, O, E, !0, !1, Z) : b(y, S, H, O, E, V, A, L, Z);
  }, Re = (p, y, S, H, O, E, V, A, L) => {
    let F = 0, j = y.length, J = p.length - 1, Z = j - 1;
    for (; F <= J && F <= Z; ) {
      let K = p[F], he = y[F] = L ? Fn(y[F]) : Wt(y[F]);
      if (Yn(K, he)) T(K, he, S, null, O, E, V, A, L);
      else break;
      F++;
    }
    for (; F <= J && F <= Z; ) {
      let K = p[J], he = y[Z] = L ? Fn(y[Z]) : Wt(y[Z]);
      if (Yn(K, he)) T(K, he, S, null, O, E, V, A, L);
      else break;
      J--, Z--;
    }
    if (F > J) {
      if (F <= Z) {
        let K = Z + 1, he = K < j ? y[K].el : H;
        for (; F <= Z; ) T(null, y[F] = L ? Fn(y[F]) : Wt(y[F]), S, he, O, E, V, A, L), F++;
      }
    } else if (F > Z) for (; F <= J; ) ze(p[F], O, E, !0), F++;
    else {
      let K, he = F, ue = F, pe = /* @__PURE__ */ new Map();
      for (F = ue; F <= Z; F++) {
        let $e = y[F] = L ? Fn(y[F]) : Wt(y[F]);
        $e.key != null && pe.set($e.key, F);
      }
      let Je = 0, Ke = Z - ue + 1, _t = !1, Rt = 0, Pn = Array(Ke);
      for (F = 0; F < Ke; F++) Pn[F] = 0;
      for (F = he; F <= J; F++) {
        let $e, je = p[F];
        if (Je >= Ke) {
          ze(je, O, E, !0);
          continue;
        }
        if (je.key != null) $e = pe.get(je.key);
        else for (K = ue; K <= Z; K++) if (Pn[K - ue] === 0 && Yn(je, y[K])) {
          $e = K;
          break;
        }
        $e === void 0 ? ze(je, O, E, !0) : (Pn[$e - ue] = F + 1, $e >= Rt ? Rt = $e : _t = !0, T(je, y[$e], S, null, O, E, V, A, L), Je++);
      }
      let Fi = _t ? (function($e) {
        let je, Bs, at, kn, Xr, ea = $e.slice(), bt = [0], yf = $e.length;
        for (je = 0; je < yf; je++) {
          let Ai = $e[je];
          if (Ai !== 0) {
            if ($e[Bs = bt[bt.length - 1]] < Ai) {
              ea[je] = Bs, bt.push(je);
              continue;
            }
            for (at = 0, kn = bt.length - 1; at < kn; ) $e[bt[Xr = at + kn >> 1]] < Ai ? at = Xr + 1 : kn = Xr;
            Ai < $e[bt[at]] && (at > 0 && (ea[je] = bt[at - 1]), bt[at] = je);
          }
        }
        for (at = bt.length, kn = bt[at - 1]; at-- > 0; ) bt[at] = kn, kn = ea[kn];
        return bt;
      })(Pn) : gs;
      for (K = Fi.length - 1, F = Ke - 1; F >= 0; F--) {
        let $e = ue + F, je = y[$e], Bs = y[$e + 1], at = $e + 1 < j ? Bs.el || Bs.placeholder : H;
        Pn[F] === 0 ? T(null, je, S, at, O, E, V, A, L) : _t && (K < 0 || F !== Fi[K] ? Ye(je, S, at, 2) : K--);
      }
    }
  }, Ye = (p, y, S, H, O = null) => {
    let { el: E, type: V, transition: A, children: L, shapeFlag: F } = p;
    if (6 & F) return void Ye(p.component.subTree, y, S, H);
    if (128 & F) return void p.suspense.move(y, S, H);
    if (64 & F) return void V.move(p, y, S, Os);
    if (V === fe) {
      r(E, y, S);
      for (let j = 0; j < L.length; j++) Ye(L[j], y, S, H);
      r(p.anchor, y, S);
      return;
    }
    if (V === pa) return void (({ el: j, anchor: J }, Z, K) => {
      let he;
      for (; j && j !== J; ) he = v(j), r(j, Z, K), j = he;
      r(J, Z, K);
    })(p, y, S);
    if (H !== 2 && 1 & F && A) if (H === 0) A.beforeEnter(E), r(E, y, S), ot(() => A.enter(E), O);
    else {
      let { leave: j, delayLeave: J, afterLeave: Z } = A, K = () => {
        p.ctx.isUnmounted ? a(E) : r(E, y, S);
      }, he = () => {
        E._isLeaving && E[rn](!0), j(E, () => {
          K(), Z && Z();
        });
      };
      J ? J(E, K, he) : he();
    }
    else r(E, y, S);
  }, ze = (p, y, S, H = !1, O = !1) => {
    let E, { type: V, props: A, ref: L, children: F, dynamicChildren: j, shapeFlag: J, patchFlag: Z, dirs: K, cacheIndex: he } = p;
    if (Z === -2 && (O = !1), L != null && (fn(), Js(L, null, S, p, !0), hn()), he != null && (y.renderCache[he] = void 0), 256 & J) return void y.ctx.deactivate(p);
    let ue = 1 & J && K, pe = !bs(p);
    if (pe && (E = A && A.onVnodeBeforeUnmount) && zt(E, y, p), 6 & J) Xt(p.component, S, H);
    else {
      if (128 & J) return void p.suspense.unmount(S, H);
      ue && Hn(p, null, y, "beforeUnmount"), 64 & J ? p.type.remove(p, y, S, Os, H) : j && !j.hasOnce && (V !== fe || Z > 0 && 64 & Z) ? Ds(j, y, S, !1, !0) : (V === fe && 384 & Z || !O && 16 & J) && Ds(F, y, S), H && ht(p);
    }
    (pe && (E = A && A.onVnodeUnmounted) || ue) && ot(() => {
      E && zt(E, y, p), ue && Hn(p, null, y, "unmounted");
    }, S);
  }, ht = (p) => {
    let { type: y, el: S, anchor: H, transition: O } = p;
    if (y === fe) return void zn(S, H);
    if (y === pa) return void (({ el: V, anchor: A }) => {
      let L;
      for (; V && V !== A; ) L = v(V), a(V), V = L;
      a(A);
    })(p);
    let E = () => {
      a(S), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (1 & p.shapeFlag && O && !O.persisted) {
      let { leave: V, delayLeave: A } = O, L = () => V(S, E);
      A ? A(p.el, E, L) : L();
    } else E();
  }, zn = (p, y) => {
    let S;
    for (; p !== y; ) S = v(p), a(p), p = S;
    a(y);
  }, Xt = (p, y, S) => {
    let { bum: H, scope: O, job: E, subTree: V, um: A, m: L, a: F } = p;
    oo(L), oo(F), H && Wi(H), O.stop(), E && (E.flags |= 8, ze(V, p, y, S)), A && ot(A, y), ot(() => {
      p.isUnmounted = !0;
    }, y);
  }, Ds = (p, y, S, H = !1, O = !1, E = 0) => {
    for (let V = E; V < p.length; V++) ze(p[V], y, S, H, O);
  }, Ei = (p) => {
    if (6 & p.shapeFlag) return Ei(p.component.subTree);
    if (128 & p.shapeFlag) return p.suspense.next();
    let y = v(p.anchor || p.el), S = y && y[tc];
    return S ? v(S) : y;
  }, Kr = !1, Qr = (p, y, S) => {
    p == null ? y._vnode && ze(y._vnode, null, null, !0) : T(y._vnode || null, p, y, null, null, null, S), y._vnode = p, Kr || (Kr = !0, Zl(), Xu(), Kr = !1);
  }, Os = { p: T, um: ze, m: Ye, r: ht, mt: me, mc: b, pc: be, pbc: P, n: Ei, o: t };
  return { render: Qr, hydrate: s, createApp: (n = s, function(p, y = null) {
    oe(p) || (p = He({}, p)), y == null || Ae(y) || (y = null);
    let S = vc(), H = /* @__PURE__ */ new WeakSet(), O = [], E = !1, V = S.app = { _uid: uh++, _component: p, _props: y, _container: null, _context: S, _instance: null, version: Dh, get config() {
      return S.config;
    }, set config(A) {
    }, use: (A, ...L) => (H.has(A) || (A && oe(A.install) ? (H.add(A), A.install(V, ...L)) : oe(A) && (H.add(A), A(V, ...L))), V), mixin: (A) => (S.mixins.includes(A) || S.mixins.push(A), V), component: (A, L) => L ? (S.components[A] = L, V) : S.components[A], directive: (A, L) => L ? (S.directives[A] = L, V) : S.directives[A], mount(A, L, F) {
      if (!E) {
        let j = V._ceVNode || B(p, y);
        return j.appContext = S, F === !0 ? F = "svg" : F === !1 && (F = void 0), L && n ? n(j, A) : Qr(j, A, F), E = !0, V._container = A, A.__vue_app__ = V, Dr(j.component);
      }
    }, onUnmount(A) {
      O.push(A);
    }, unmount() {
      E && (Bt(O, V._instance, 16), Qr(null, V._container), delete V._container.__vue_app__);
    }, provide: (A, L) => (S.provides[A] = L, V), runWithContext(A) {
      let L = es;
      es = V;
      try {
        return A();
      } finally {
        es = L;
      }
    } };
    return V;
  }) };
}
function ma({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Wn({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Ch(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Cl(t, e, n = !1) {
  let s = t.children, i = e.children;
  if (te(s) && te(i)) for (let r = 0; r < s.length; r++) {
    let a = s[r], l = i[r];
    1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[r] = Fn(i[r])).el = a.el), n || l.patchFlag === -2 || Cl(a, l)), l.type === Mr && l.patchFlag !== -1 && (l.el = a.el), l.type !== Qe || l.el || (l.el = a.el);
  }
}
function oo(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
let Tc = (t) => t.__isSuspense;
function Th(t, e) {
  e && e.pendingBranch ? te(t) ? e.effects.push(...t) : e.effects.push(t) : Yf(t);
}
let fe = /* @__PURE__ */ Symbol.for("v-fgt"), Mr = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), pa = /* @__PURE__ */ Symbol.for("v-stc"), Qs = [], pt = null;
function g(t = !1) {
  Qs.push(pt = t ? null : []);
}
function xh() {
  Qs.pop(), pt = Qs[Qs.length - 1] || null;
}
let li = 1;
function lr(t, e = !1) {
  li += t, t < 0 && pt && e && (pt.hasOnce = !0);
}
function xc(t) {
  return t.dynamicChildren = li > 0 ? pt || gs : null, xh(), li > 0 && pt && pt.push(t), t;
}
function N(t, e, n, s, i, r) {
  return xc(re(t, e, n, s, i, r, !0));
}
function R(t, e, n, s, i) {
  return xc(B(t, e, n, s, i, !0));
}
function oi(t) {
  return !!t && t.__v_isVNode === !0;
}
function Yn(t, e) {
  return t.type === e.type && t.key === e.key;
}
let Ec = ({ key: t }) => t ?? null, qi = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? De(t) || Be(t) || oe(t) ? { i: Xe, r: t, k: e, f: !!n } : t : null);
function re(t, e = null, n = null, s = 0, i = null, r = +(t !== fe), a = !1, l = !1) {
  let o = { __v_isVNode: !0, __v_skip: !0, type: t, props: e, key: e && Ec(e), ref: e && qi(e), scopeId: ec, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: s, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Xe };
  return l ? (Tl(o, n), 128 & r && t.normalize(o)) : n && (o.shapeFlag |= De(n) ? 8 : 16), li > 0 && !a && pt && (o.patchFlag > 0 || 6 & r) && o.patchFlag !== 32 && pt.push(o), o;
}
let B = function(t, e = null, n = null, s = 0, i = null, r = !1) {
  var a;
  if (t && t !== hc || (t = Qe), oi(t)) {
    let o = Bn(t, e, !0);
    return n && Tl(o, n), li > 0 && !r && pt && (6 & o.shapeFlag ? pt[pt.indexOf(t)] = o : pt.push(o)), o.patchFlag = -2, o;
  }
  if (oe(a = t) && "__vccOpts" in a && (t = t.__vccOpts), e) {
    let { class: o, style: u } = e = ji(e);
    o && !De(o) && (e.class = k(o)), Ae(u) && (Er(u) && !te(u) && (u = He({}, u)), e.style = We(u));
  }
  let l = De(t) ? 1 : Tc(t) ? 128 : t.__isTeleport ? 64 : Ae(t) ? 4 : 2 * !!oe(t);
  return re(t, e, n, s, i, l, r, !0);
};
function ji(t) {
  return t ? Er(t) || kc(t) ? He({}, t) : t : null;
}
function Bn(t, e, n = !1, s = !1) {
  let { props: i, ref: r, patchFlag: a, children: l, transition: o } = t, u = e ? It(i || {}, e) : i, d = { __v_isVNode: !0, __v_skip: !0, type: t.type, props: u, key: u && Ec(u), ref: e && e.ref ? n && r ? te(r) ? r.concat(qi(e)) : [r, qi(e)] : qi(e) : r, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: e && t.type !== fe ? a === -1 ? 16 : 16 | a : a, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: o, component: t.component, suspense: t.suspense, ssContent: t.ssContent && Bn(t.ssContent), ssFallback: t.ssFallback && Bn(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
  return o && s && is(d, o.clone(d)), d;
}
function pi(t = " ", e = 0) {
  return B(Mr, null, t, e);
}
function Q(t = "", e = !1) {
  return e ? (g(), R(Qe, null, t)) : B(Qe, null, t);
}
function Wt(t) {
  return t == null || typeof t == "boolean" ? B(Qe) : te(t) ? B(fe, null, t.slice()) : oi(t) ? Fn(t) : B(Mr, null, String(t));
}
function Fn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Bn(t);
}
function Tl(t, e) {
  let n = 0, { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (te(e)) n = 16;
  else if (typeof e == "object") if (65 & s) {
    let i = e.default;
    i && (i._c && (i._d = !1), Tl(t, i()), i._c && (i._d = !0));
    return;
  } else {
    n = 32;
    let i = e._;
    i || kc(e) ? i === 3 && Xe && (Xe.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024)) : e._ctx = Xe;
  }
  else oe(e) ? (e = { default: e, _ctx: Xe }, n = 32) : (e = String(e), 64 & s ? (n = 16, e = [pi(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function It(...t) {
  let e = {};
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    for (let i in s) if (i === "class") e.class !== s.class && (e.class = k([e.class, s.class]));
    else if (i === "style") e.style = We([e.style, s.style]);
    else if (vr(i)) {
      let r = e[i], a = s[i];
      a && r !== a && !(te(r) && r.includes(a)) && (e[i] = r ? [].concat(r, a) : a);
    } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function zt(t, e, n, s = null) {
  Bt(t, e, 7, [n, s]);
}
let Eh = vc(), Fh = 0;
function Ah(t, e, n) {
  let s = t.type, i = (e ? e.appContext : t.appContext) || Eh, r = { uid: Fh++, vnode: t, type: s, parent: e, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Lu(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(i.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: (function a(l, o, u = !1) {
    let d = u ? kh : o.propsCache, f = d.get(l);
    if (f) return f;
    let h = l.props, m = {}, v = [], C = !1;
    if (!oe(l)) {
      let T = (_) => {
        C = !0;
        let [I, W] = a(_, o, !0);
        He(m, I), W && v.push(...W);
      };
      !u && o.mixins.length && o.mixins.forEach(T), l.extends && T(l.extends), l.mixins && l.mixins.forEach(T);
    }
    if (!h && !C) return Ae(l) && d.set(l, gs), gs;
    if (te(h)) for (let T = 0; T < h.length; T++) {
      let _ = yt(h[T]);
      lo(_) && (m[_] = Ie);
    }
    else if (h) for (let T in h) {
      let _ = yt(T);
      if (lo(_)) {
        let I = h[T], W = m[_] = te(I) || oe(I) ? { type: I } : He({}, I), x = W.type, $ = !1, G = !0;
        if (te(x)) for (let b = 0; b < x.length; ++b) {
          let w = x[b], P = oe(w) && w.name;
          if (P === "Boolean") {
            $ = !0;
            break;
          }
          P === "String" && (G = !1);
        }
        else $ = oe(x) && x.name === "Boolean";
        W[0] = $, W[1] = G, ($ || Te(W, "default")) && v.push(_);
      }
    }
    let M = [m, v];
    return Ae(l) && d.set(l, M), M;
  })(s, i), emitsOptions: (function a(l, o, u = !1) {
    let d = u ? gh : o.emitsCache, f = d.get(l);
    if (f !== void 0) return f;
    let h = l.emits, m = {}, v = !1;
    if (!oe(l)) {
      let C = (M) => {
        let T = a(M, o, !0);
        T && (v = !0, He(m, T));
      };
      !u && o.mixins.length && o.mixins.forEach(C), l.extends && C(l.extends), l.mixins && l.mixins.forEach(C);
    }
    return h || v ? (te(h) ? h.forEach((C) => m[C] = null) : He(m, h), Ae(l) && d.set(l, m), m) : (Ae(l) && d.set(l, null), null);
  })(s, i), emit: null, emitted: null, propsDefaults: Ie, inheritAttrs: s.inheritAttrs, ctx: Ie, data: Ie, props: Ie, attrs: Ie, slots: Ie, refs: Ie, setupState: Ie, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = ph.bind(null, r), t.ce && t.ce(r), r;
}
let st = null, Kt = () => st || Xe;
{
  let t = Ir(), e = (n, s) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((a) => a(r)) : i[0](r);
    };
  };
  Qi = e("__VUE_INSTANCE_SETTERS__", (n) => st = n), Ma = e("__VUE_SSR_SETTERS__", (n) => ui = n);
}
let gi = (t) => {
  let e = st;
  return Qi(t), t.scope.on(), () => {
    t.scope.off(), Qi(e);
  };
}, uo = () => {
  st && st.scope.off(), Qi(null);
};
function Fc(t) {
  return 4 & t.vnode.shapeFlag;
}
let ui = !1;
function $h(t, e = !1, n = !1) {
  e && Ma(e);
  let { props: s, children: i } = t.vnode, r = Fc(t);
  (function(u, d, f, h = !1) {
    let m = {}, v = Object.create(za);
    for (let C in u.propsDefaults = /* @__PURE__ */ Object.create(null), wc(u, d, m, v), u.propsOptions[0]) C in m || (m[C] = void 0);
    f ? u.props = h ? m : Rf(m) : u.type.props ? u.props = m : u.props = v, u.attrs = v;
  })(t, s, r, e);
  var a = n || e;
  let l = t.slots = Object.create(za);
  if (32 & t.vnode.shapeFlag) {
    let u = i._;
    u ? (Cc(l, i, a), a && Fu(l, "_", u, !0)) : Ic(i, l);
  } else i && Sc(t, i);
  let o = r ? (function(u, d) {
    let f = u.type;
    u.accessCache = /* @__PURE__ */ Object.create(null), u.proxy = new Proxy(u.ctx, Na);
    let { setup: h } = f;
    if (h) {
      fn();
      let m = u.setupContext = h.length > 1 ? $c(u) : null, v = gi(u), C = mi(h, u, 0, [u.props, m]), M = Eu(C);
      if (hn(), v(), (M || u.sp) && !bs(u) && uc(u), M) {
        if (C.then(uo, uo), d) return C.then((T) => {
          co(u, T);
        }).catch((T) => {
          Fr(T, u, 0);
        });
        u.asyncDep = C;
      } else co(u, C);
    } else Ac(u);
  })(t, e) : void 0;
  return e && Ma(!1), o;
}
function co(t, e, n) {
  oe(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ae(e) && (t.setupState = Yu(e)), Ac(t);
}
function Ac(t, e, n) {
  let s = t.type;
  t.render || (t.render = s.render || qt);
  {
    let i = gi(t);
    fn();
    try {
      (function(r) {
        let a = gc(r), l = r.proxy, o = r.ctx;
        _a = !1, a.beforeCreate && no(a.beforeCreate, r, "bc");
        let { data: u, computed: d, methods: f, watch: h, provide: m, inject: v, created: C, beforeMount: M, mounted: T, beforeUpdate: _, updated: I, activated: W, deactivated: x, beforeUnmount: $, unmounted: G, render: b, renderTracked: w, renderTriggered: P, errorCaptured: z, serverPrefetch: D, expose: ne, inheritAttrs: me, components: X, directives: Ce } = a;
        if (v && (function(be, Fe, Re = qt) {
          for (let Ye in te(be) && (be = Ra(be)), be) {
            let ze, ht = be[Ye];
            Be(ze = Ae(ht) ? "default" in ht ? dn(ht.from || Ye, ht.default, !0) : dn(ht.from || Ye) : dn(ht)) ? Object.defineProperty(Fe, Ye, { enumerable: !0, configurable: !0, get: () => ze.value, set: (zn) => ze.value = zn }) : Fe[Ye] = ze;
          }
        })(v, o, null), f) for (let be in f) {
          let Fe = f[be];
          oe(Fe) && (o[be] = Fe.bind(l));
        }
        if (u) {
          let be = u.call(l, l);
          Ae(be) && (r.data = Jt(be));
        }
        if (_a = !0, d) for (let be in d) {
          let Fe = d[be], Re = oe(Fe) ? Fe.bind(l, l) : oe(Fe.get) ? Fe.get.bind(l, l) : qt, Ye = ye({ get: Re, set: !oe(Fe) && oe(Fe.set) ? Fe.set.bind(l) : qt });
          Object.defineProperty(o, be, { enumerable: !0, configurable: !0, get: () => Ye.value, set: (ze) => Ye.value = ze });
        }
        if (h) for (let be in h) (function Fe(Re, Ye, ze, ht) {
          let zn = ht.includes(".") ? yc(ze, ht) : () => ze[ht];
          if (De(Re)) {
            let Xt = Ye[Re];
            oe(Xt) && Oe(zn, Xt);
          } else if (oe(Re)) Oe(zn, Re.bind(ze));
          else if (Ae(Re)) if (te(Re)) Re.forEach((Xt) => Fe(Xt, Ye, ze, ht));
          else {
            let Xt = oe(Re.handler) ? Re.handler.bind(ze) : Ye[Re.handler];
            oe(Xt) && Oe(zn, Xt, Re);
          }
        })(h[be], o, l, be);
        if (m) {
          let be = oe(m) ? m.call(l) : m;
          Reflect.ownKeys(be).forEach((Fe) => {
            On(Fe, be[Fe]);
          });
        }
        function ke(be, Fe) {
          te(Fe) ? Fe.forEach((Re) => be(Re.bind(l))) : Fe && be(Fe.bind(l));
        }
        if (C && no(C, r, "c"), ke(Xf, M), ke(yn, T), ke(eh, _), ke(dc, I), ke(Kf, W), ke(Qf, x), ke(ih, z), ke(sh, w), ke(nh, P), ke(bl, $), ke(rs, G), ke(th, D), te(ne)) if (ne.length) {
          let be = r.exposed || (r.exposed = {});
          ne.forEach((Fe) => {
            Object.defineProperty(be, Fe, { get: () => l[Fe], set: (Re) => l[Fe] = Re, enumerable: !0 });
          });
        } else r.exposed || (r.exposed = {});
        b && r.render === qt && (r.render = b), me != null && (r.inheritAttrs = me), X && (r.components = X), Ce && (r.directives = Ce), D && uc(r);
      })(t);
    } finally {
      hn(), i();
    }
  }
}
let Lh = { get: (t, e) => (nt(t, "get", ""), t[e]) };
function $c(t) {
  return { attrs: new Proxy(t.attrs, Lh), slots: t.slots, emit: t.emit, expose: (e) => {
    t.exposed = e || {};
  } };
}
function Dr(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Yu(ml(t.exposed)), { get: (e, n) => n in e ? e[n] : n in Ks ? Ks[n](t) : void 0, has: (e, n) => n in e || n in Ks })) : t.proxy;
}
function Mh(t, e = !0) {
  return oe(t) ? t.displayName || t.name : t.name || e && t.__name;
}
let ye = (t, e) => (function(n, s, i = !1) {
  let r, a;
  return oe(n) ? r = n : (r = n.get, a = n.set), new Gf(r, a, i);
})(t, 0, ui);
function ks(t, e, n) {
  try {
    lr(-1);
    let s = arguments.length;
    return s !== 2 ? (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && oi(n) && (n = [n]), B(t, e, n)) : !Ae(e) || te(e) ? B(t, null, e) : oi(e) ? B(t, null, [e]) : B(t, e);
  } finally {
    lr(1);
  }
}
let Dh = "3.5.25", fo = typeof window < "u" && window.trustedTypes;
if (fo) try {
  Da = fo.createPolicy("vue", { createHTML: (t) => t });
} catch {
}
let Lc = Da ? (t) => Da.createHTML(t) : (t) => t, nn = typeof document < "u" ? document : null, ho = nn && nn.createElement("template"), Oh = { insert: (t, e, n) => {
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
    ho.innerHTML = Lc(s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t);
    let l = ho.content;
    if (s === "svg" || s === "mathml") {
      let o = l.firstChild;
      for (; o.firstChild; ) l.appendChild(o.firstChild);
      l.removeChild(o);
    }
    e.insertBefore(l, n);
  }
  return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
} }, wn = "transition", _s = "animation", Cs = /* @__PURE__ */ Symbol("_vtc"), Mc = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Dc = He({}, rc, Mc), Vn = ((ta = (t, { slots: e }) => ks(Jf, Oc(t), e)).displayName = "Transition", ta.props = Dc, ta), Un = (t, e = []) => {
  te(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, mo = (t) => !!t && (te(t) ? t.some((e) => e.length > 1) : t.length > 1);
function Oc(t) {
  let e = {};
  for (let D in t) D in Mc || (e[D] = t[D]);
  if (t.css === !1) return e;
  let { name: n = "v", type: s, duration: i, enterFromClass: r = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: o = r, appearActiveClass: u = a, appearToClass: d = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = t, v = (function(D) {
    if (D == null) return null;
    {
      if (Ae(D)) return [(function(me) {
        return ia(me);
      })(D.enter), (function(me) {
        return ia(me);
      })(D.leave)];
      let ne = (function(me) {
        return ia(me);
      })(D);
      return [ne, ne];
    }
  })(i), C = v && v[0], M = v && v[1], { onBeforeEnter: T, onEnter: _, onEnterCancelled: I, onLeave: W, onLeaveCancelled: x, onBeforeAppear: $ = T, onAppear: G = _, onAppearCancelled: b = I } = e, w = (D, ne, me, X) => {
    D._enterCancelled = X, Cn(D, ne ? d : l), Cn(D, ne ? u : a), me && me();
  }, P = (D, ne) => {
    D._isLeaving = !1, Cn(D, f), Cn(D, m), Cn(D, h), ne && ne();
  }, z = (D) => (ne, me) => {
    let X = D ? G : _, Ce = () => w(ne, D, me);
    Un(X, [ne, Ce]), po(() => {
      Cn(ne, D ? o : r), Pt(ne, D ? d : l), mo(X) || go(ne, s, C, Ce);
    });
  };
  return He(e, { onBeforeEnter(D) {
    Un(T, [D]), Pt(D, r), Pt(D, a);
  }, onBeforeAppear(D) {
    Un($, [D]), Pt(D, o), Pt(D, u);
  }, onEnter: z(!1), onAppear: z(!0), onLeave(D, ne) {
    D._isLeaving = !0;
    let me = () => P(D, ne);
    Pt(D, f), D._enterCancelled ? (Pt(D, h), Ha(D)) : (Ha(D), Pt(D, h)), po(() => {
      D._isLeaving && (Cn(D, f), Pt(D, m), mo(W) || go(D, s, M, me));
    }), Un(W, [D, me]);
  }, onEnterCancelled(D) {
    w(D, !1, void 0, !0), Un(I, [D]);
  }, onAppearCancelled(D) {
    w(D, !0, void 0, !0), Un(b, [D]);
  }, onLeaveCancelled(D) {
    P(D), Un(x, [D]);
  } });
}
function Pt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[Cs] || (t[Cs] = /* @__PURE__ */ new Set())).add(e);
}
function Cn(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  let n = t[Cs];
  n && (n.delete(e), n.size || (t[Cs] = void 0));
}
function po(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Bh = 0;
function go(t, e, n, s) {
  let i = t._endId = ++Bh, r = () => {
    i === t._endId && s();
  };
  if (n != null) return setTimeout(r, n);
  let { type: a, timeout: l, propCount: o } = Bc(t, e);
  if (!a) return s();
  let u = a + "end", d = 0, f = () => {
    t.removeEventListener(u, h), r();
  }, h = (m) => {
    m.target === t && ++d >= o && f();
  };
  setTimeout(() => {
    d < o && f();
  }, l + 1), t.addEventListener(u, h);
}
function Bc(t, e) {
  let n = window.getComputedStyle(t), s = (v) => (n[v] || "").split(", "), i = s(`${wn}Delay`), r = s(`${wn}Duration`), a = vo(i, r), l = s(`${_s}Delay`), o = s(`${_s}Duration`), u = vo(l, o), d = null, f = 0, h = 0;
  e === wn ? a > 0 && (d = wn, f = a, h = r.length) : e === _s ? u > 0 && (d = _s, f = u, h = o.length) : h = (d = (f = Math.max(a, u)) > 0 ? a > u ? wn : _s : null) ? d === wn ? r.length : o.length : 0;
  let m = d === wn && /\b(?:transform|all)(?:,|$)/.test(s(`${wn}Property`).toString());
  return { type: d, timeout: f, propCount: h, hasTransform: m };
}
function vo(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => yo(n) + yo(t[s])));
}
function yo(t) {
  return t === "auto" ? 0 : 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function Ha(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
let bo = /* @__PURE__ */ Symbol("_vod"), Vh = /* @__PURE__ */ Symbol("_vsh"), Nh = /* @__PURE__ */ Symbol(""), _h = /(?:^|;)\s*display\s*:/, ko = /\s*!important$/;
function Gi(t, e, n) {
  if (te(n)) n.forEach((s) => Gi(t, e, s));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    let s = (function(i, r) {
      let a = ga[r];
      if (a) return a;
      let l = yt(r);
      if (l !== "filter" && l in i) return ga[r] = l;
      l = kr(l);
      for (let o = 0; o < wo.length; o++) {
        let u = wo[o] + l;
        if (u in i) return ga[r] = u;
      }
      return r;
    })(t, e);
    ko.test(n) ? t.setProperty(Rn(s), n.replace(ko, ""), "important") : t[s] = n;
  }
}
let wo = ["Webkit", "Moz", "ms"], ga = {}, Io = "http://www.w3.org/1999/xlink";
function So(t, e, n, s, i, r = xf(e)) {
  s && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(Io, e.slice(6, e.length)) : t.setAttributeNS(Io, e, n) : n == null || r && !(n || n === "") ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : Ot(n) ? String(n) : n);
}
function Co(t, e, n, s, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? Lc(n) : n);
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
let To = /* @__PURE__ */ Symbol("_vei"), xo = /(?:Once|Passive|Capture)$/, va = 0, Rh = Promise.resolve(), Eo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && 123 > t.charCodeAt(2), zh = (t, e, n, s, i, r) => {
  let a = i === "svg";
  if (e === "class") {
    var l;
    let o;
    l = s, (o = t[Cs]) && (l = (l ? [l, ...o] : [...o]).join(" ")), l == null ? t.removeAttribute("class") : a ? t.setAttribute("class", l) : t.className = l;
  } else e === "style" ? (function(o, u, d) {
    let f = o.style, h = De(d), m = !1;
    if (d && !h) {
      if (u) if (De(u)) for (let v of u.split(";")) {
        let C = v.slice(0, v.indexOf(":")).trim();
        d[C] == null && Gi(f, C, "");
      }
      else for (let v in u) d[v] == null && Gi(f, v, "");
      for (let v in d) v === "display" && (m = !0), Gi(f, v, d[v]);
    } else if (h) {
      if (u !== d) {
        let v = f[Nh];
        v && (d += ";" + v), f.cssText = d, m = _h.test(d);
      }
    } else u && o.removeAttribute("style");
    bo in o && (o[bo] = m ? f.display : "", o[Vh] && (f.display = "none"));
  })(t, n, s) : vr(e) ? ol(e) || (function(o, u, d, f, h = null) {
    let m = o[To] || (o[To] = {}), v = m[u];
    if (f && v) v.value = f;
    else {
      let [T, _] = (function(I) {
        let W;
        if (xo.test(I)) {
          let x;
          for (W = {}; x = I.match(xo); ) I = I.slice(0, I.length - x[0].length), W[x[0].toLowerCase()] = !0;
        }
        return [I[2] === ":" ? I.slice(3) : Rn(I.slice(2)), W];
      })(u);
      if (f) {
        var C, M;
        let I;
        on(o, T, m[u] = (C = f, M = h, (I = (W) => {
          if (W._vts) {
            if (W._vts <= I.attached) return;
          } else W._vts = Date.now();
          Bt((function(x, $) {
            if (!te($)) return $;
            {
              let G = x.stopImmediatePropagation;
              return x.stopImmediatePropagation = () => {
                G.call(x), x._stopped = !0;
              }, $.map((b) => (w) => !w._stopped && b && b(w));
            }
          })(W, I.value), M, 5, [W]);
        }).value = C, I.attached = va || (Rh.then(() => va = 0), va = Date.now()), I), _);
      } else v && (o.removeEventListener(T, v, _), m[u] = void 0);
    }
  })(t, e, 0, s, r) : (e[0] === "." ? (e = e.slice(1), 0) : e[0] === "^" ? (e = e.slice(1), 1) : !(function(o, u, d, f) {
    if (f) return !!(u === "innerHTML" || u === "textContent" || u in o && Eo(u) && oe(d));
    if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "autocorrect" || u === "sandbox" && o.tagName === "IFRAME" || u === "form" || u === "list" && o.tagName === "INPUT" || u === "type" && o.tagName === "TEXTAREA") return !1;
    if (u === "width" || u === "height") {
      let h = o.tagName;
      if (h === "IMG" || h === "VIDEO" || h === "CANVAS" || h === "SOURCE") return !1;
    }
    return !(Eo(u) && De(d)) && u in o;
  })(t, e, s, a)) ? t._isVueCE && (/[A-Z]/.test(e) || !De(s)) ? Co(t, yt(e), s, r, e) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), So(t, e, s, a)) : (Co(t, e, s), t.tagName.includes("-") || e !== "value" && e !== "checked" && e !== "selected" || So(t, e, s, a, r, e !== "value"));
}, Vc = /* @__PURE__ */ new WeakMap(), Nc = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ Symbol("_moveCb"), Fo = /* @__PURE__ */ Symbol("_enterCb"), _c = (na = { name: "TransitionGroup", props: He({}, Dc, { tag: String, moveClass: String }), setup(t, { slots: e }) {
  let n, s, i = Kt(), r = ic();
  return dc(() => {
    if (!n.length) return;
    let a = t.moveClass || `${t.name || "v"}-move`;
    if (!(function(o, u, d) {
      let f = o.cloneNode(), h = o[Cs];
      h && h.forEach((C) => {
        C.split(/\s+/).forEach((M) => M && f.classList.remove(M));
      }), d.split(/\s+/).forEach((C) => C && f.classList.add(C)), f.style.display = "none";
      let m = u.nodeType === 1 ? u : u.parentNode;
      m.appendChild(f);
      let { hasTransform: v } = Bc(f);
      return m.removeChild(f), v;
    })(n[0].el, i.vnode.el, a)) {
      n = [];
      return;
    }
    n.forEach(Ph), n.forEach(Hh);
    let l = n.filter(Wh);
    Ha(i.vnode.el), l.forEach((o) => {
      let u = o.el, d = u.style;
      Pt(u, a), d.transform = d.webkitTransform = d.transitionDuration = "";
      let f = u[or] = (h) => {
        (!h || h.target === u) && (!h || h.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[or] = null, Cn(u, a));
      };
      u.addEventListener("transitionend", f);
    }), n = [];
  }), () => {
    let a = ge(t), l = Oc(a), o = a.tag || fe;
    if (n = [], s) for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.el && d.el instanceof Element && (n.push(d), is(d, ai(d, l, r, i)), Vc.set(d, { left: d.el.offsetLeft, top: d.el.offsetTop }));
    }
    s = e.default ? vl(e.default()) : [];
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.key != null && is(d, ai(d, l, r, i));
    }
    return B(o, null, s);
  };
} }, delete na.props.mode, na);
function Ph(t) {
  let e = t.el;
  e[or] && e[or](), e[Fo] && e[Fo]();
}
function Hh(t) {
  Nc.set(t, { left: t.el.offsetLeft, top: t.el.offsetTop });
}
function Wh(t) {
  let e = Vc.get(t), n = Nc.get(t), s = e.left - n.left, i = e.top - n.top;
  if (s || i) {
    let r = t.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", t;
  }
}
let Nn = (t) => {
  let e = t.props["onUpdate:modelValue"] || !1;
  return te(e) ? (n) => Wi(e, n) : e;
};
function Uh(t) {
  t.target.composing = !0;
}
function Ao(t) {
  let e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
let Tt = /* @__PURE__ */ Symbol("_assign");
function $o(t, e, n) {
  return e && (t = t.trim()), n && (t = wr(t)), t;
}
let ur = { created(t, { modifiers: { lazy: e, trim: n, number: s } }, i) {
  t[Tt] = Nn(i);
  let r = s || i.props && i.props.type === "number";
  on(t, e ? "change" : "input", (a) => {
    a.target.composing || t[Tt]($o(t.value, n, r));
  }), (n || r) && on(t, "change", () => {
    t.value = $o(t.value, n, r);
  }), e || (on(t, "compositionstart", Uh), on(t, "compositionend", Ao), on(t, "change", Ao));
}, mounted(t, { value: e }) {
  t.value = e ?? "";
}, beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, a) {
  if (t[Tt] = Nn(a), t.composing) return;
  let l = (r || t.type === "number") && !/^0\d/.test(t.value) ? wr(t.value) : t.value, o = e ?? "";
  if (l !== o) {
    if (document.activeElement === t && t.type !== "range" && (s && e === n || i && t.value.trim() === o)) return;
    t.value = o;
  }
} }, qh = { deep: !0, created(t, e, n) {
  t[Tt] = Nn(n), on(t, "change", () => {
    let s = t._modelValue, i = Ts(t), r = t.checked, a = t[Tt];
    if (te(s)) {
      let l = cl(s, i), o = l !== -1;
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
      } else a(Rc(t, r));
    }
  });
}, mounted: Lo, beforeUpdate(t, e, n) {
  t[Tt] = Nn(n), Lo(t, e, n);
} };
function Lo(t, { value: e, oldValue: n }, s) {
  let i;
  if (t._modelValue = e, te(e)) i = cl(e, s.props.value) > -1;
  else {
    let r;
    if (r = e, Ge.call(r) === "[object Set]") i = e.has(s.props.value);
    else {
      if (e === n) return;
      i = ss(e, Rc(t, !0));
    }
  }
  t.checked !== i && (t.checked = i);
}
let jh = { created(t, { value: e }, n) {
  t.checked = ss(e, n.props.value), t[Tt] = Nn(n), on(t, "change", () => {
    t[Tt](Ts(t));
  });
}, beforeUpdate(t, { value: e, oldValue: n }, s) {
  t[Tt] = Nn(s), e !== n && (t.checked = ss(e, s.props.value));
} }, Gh = { deep: !0, created(t, { value: e, modifiers: { number: n } }, s) {
  let i, r = (i = e, Ge.call(i) === "[object Set]");
  on(t, "change", () => {
    let a = Array.prototype.filter.call(t.options, (l) => l.selected).map((l) => n ? wr(Ts(l)) : Ts(l));
    t[Tt](t.multiple ? r ? new Set(a) : a : a[0]), t._assigning = !0, Jn(() => {
      t._assigning = !1;
    });
  }), t[Tt] = Nn(s);
}, mounted(t, { value: e }) {
  Mo(t, e);
}, beforeUpdate(t, e, n) {
  t[Tt] = Nn(n);
}, updated(t, { value: e }) {
  t._assigning || Mo(t, e);
} };
function Mo(t, e) {
  let n, s = t.multiple, i = te(e);
  if (!s || i || (n = e, Ge.call(n) === "[object Set]")) {
    for (let r = 0, a = t.options.length; r < a; r++) {
      let l = t.options[r], o = Ts(l);
      if (s) if (i) {
        let u = typeof o;
        u === "string" || u === "number" ? l.selected = e.some((d) => String(d) === String(o)) : l.selected = cl(e, o) > -1;
      } else l.selected = e.has(o);
      else if (ss(Ts(l), e)) {
        t.selectedIndex !== r && (t.selectedIndex = r);
        return;
      }
    }
    s || t.selectedIndex === -1 || (t.selectedIndex = -1);
  }
}
function Ts(t) {
  return "_value" in t ? t._value : t.value;
}
function Rc(t, e) {
  let n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
let Zh = { created(t, e, n) {
  Bi(t, e, n, null, "created");
}, mounted(t, e, n) {
  Bi(t, e, n, null, "mounted");
}, beforeUpdate(t, e, n, s) {
  Bi(t, e, n, s, "beforeUpdate");
}, updated(t, e, n, s) {
  Bi(t, e, n, s, "updated");
} };
function Yh(t, e) {
  switch (t) {
    case "SELECT":
      return Gh;
    case "TEXTAREA":
      return ur;
    default:
      switch (e) {
        case "checkbox":
          return qh;
        case "radio":
          return jh;
        default:
          return ur;
      }
  }
}
function Bi(t, e, n, s, i) {
  let r = Yh(t.tagName, n.props && n.props.type)[i];
  r && r(t, e, n, s);
}
let Jh = ["ctrl", "shift", "alt", "meta"], Kh = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, e) => Jh.some((n) => t[`${n}Key`] && !e.includes(n)) }, xl = (t, e) => {
  let n = t._withMods || (t._withMods = {}), s = e.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let a = 0; a < e.length; a++) {
      let l = Kh[e[a]];
      if (l && l(i, e)) return;
    }
    return t(i, ...r);
  });
}, Qh = He({ patchProp: zh }, Oh), Xh = (...t) => {
  let e = (ql || (ql = Ih(Qh))).createApp(...t), { mount: n } = e;
  return e.mount = (s) => {
    let i = tm(s);
    if (!i) return;
    let r = e._component;
    oe(r) || r.render || r.template || (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    let a = n(i, !1, em(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function em(t) {
  return t instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && t instanceof MathMLElement ? "mathml" : void 0;
}
function tm(t) {
  return De(t) ? document.querySelector(t) : t;
}
function zc(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = zc(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function xt() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = zc(t)) && (s && (s += " "), s += e);
  return s;
}
const Pc = /* @__PURE__ */ Symbol(), Hc = /* @__PURE__ */ Symbol(), nm = /* @__PURE__ */ Symbol();
function Wa(t) {
  return t !== null && typeof t == "object" && !("value" in t);
}
function Xs(t) {
  return t !== null && typeof t == "object" && "value" in t;
}
const Do = {
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
let Wc = {};
function sm(t) {
  Wc = Object.keys(t).reduce((e, n) => {
    const { icon: s, iconName: i } = t[n];
    return e[i] = s, Array.isArray(s[2]) && s[2].forEach((r) => e[r] = s), e;
  }, {});
}
const im = 6e3, Me = Jt({
  dialogCount: 0,
  alerts: [],
  confirms: [],
  prompts: [],
  snackbars: [],
  tooltips: []
});
let Or = 0, rm = 0;
function Uc(t) {
  const e = ++Or;
  return Me.alerts.push({
    id: e,
    ...t
  }), e;
}
function qc(t) {
  const e = ++Or;
  return Me.confirms.push({
    id: e,
    ...t
  }), e;
}
function jc(t) {
  const e = ++Or;
  return Me.prompts.push({
    id: e,
    ...t
  }), e;
}
function El(t) {
  const e = ++Or;
  return Me.snackbars.unshift({
    id: e,
    ...t
  }), e;
}
function am(t) {
  const e = ++rm;
  return Me.tooltips.push({
    id: e,
    ...t
  }), e;
}
function Gc() {
  return [
    ++Me.dialogCount,
    () => --Me.dialogCount
  ];
}
function Zc(t) {
  const e = Me.alerts.findIndex((n) => n.id === t);
  Me.alerts.splice(e, 1);
}
function Ua(t) {
  const e = Me.confirms.findIndex((n) => n.id === t);
  Me.confirms.splice(e, 1);
}
function qa(t) {
  const e = Me.prompts.findIndex((n) => n.id === t);
  Me.prompts.splice(e, 1);
}
function cr(t) {
  const e = Me.snackbars.findIndex((n) => n.id === t);
  Me.snackbars.splice(e, 1);
}
function lm(t) {
  const e = Me.tooltips.findIndex((n) => n.id === t);
  Me.tooltips.splice(e, 1);
}
function Yc(t, e) {
  const n = Me.snackbars.findIndex((s) => s.id === t);
  Object.assign(Me.snackbars[n], e);
}
function om(t, e) {
  const n = Me.tooltips.findIndex((s) => s.id === t);
  Object.assign(Me.tooltips[n], e);
}
async function um(t) {
  return new Promise((e) => {
    const n = Uc({
      ...t,
      onClose() {
        e(), Zc(n);
      }
    });
  });
}
async function cm(t) {
  return new Promise((e) => {
    const n = qc({
      ...t,
      onCancel() {
        e(!1), Ua(n);
      },
      onConfirm() {
        e(!0), Ua(n);
      }
    });
  });
}
async function dm(t) {
  return new Promise((e) => {
    const n = jc({
      ...t,
      onCancel() {
        e(!1), qa(n);
      },
      onConfirm(s) {
        e(s), qa(n);
      }
    });
  });
}
async function Oo({ duration: t, ...e }) {
  const n = El(e);
  await new Promise((s) => setTimeout(() => requestAnimationFrame(s), t ?? im)), cr(n);
}
function vi() {
  const t = ye(() => Me.dialogCount > 0), e = ye(() => Me.tooltips[Me.tooltips.length - 1] || null);
  return {
    ...Me,
    inertMain: t,
    tooltip: e,
    addAlert: Uc,
    addConfirm: qc,
    addPrompt: jc,
    addSnackbar: El,
    addTooltip: am,
    registerDialog: Gc,
    removeAlert: Zc,
    removeConfirm: Ua,
    removePrompt: qa,
    removeSnackbar: cr,
    removeTooltip: lm,
    showAlert: um,
    showConfirm: cm,
    showPrompt: dm,
    showSnackbar: Oo,
    updateSnackbar: Yc,
    updateTooltip: om,
    showSnackbarSync: fm(Oo)
  };
}
function fm(t) {
  return (...e) => t(...e);
}
function ws(t) {
  return typeof t == "string" || t instanceof String;
}
function Bo(t) {
  var e;
  return typeof t == "object" && t != null && (t == null || (e = t.constructor) == null ? void 0 : e.name) === "Object";
}
function Jc(t, e) {
  return Array.isArray(e) ? Jc(t, (n, s) => e.includes(s)) : Object.entries(t).reduce((n, s) => {
    let [i, r] = s;
    return e(r, i) && (n[i] = r), n;
  }, {});
}
const ae = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function hm(t) {
  switch (t) {
    case ae.LEFT:
      return ae.FORCE_LEFT;
    case ae.RIGHT:
      return ae.FORCE_RIGHT;
    default:
      return t;
  }
}
function ja(t, e) {
  if (e === t) return !0;
  const n = Array.isArray(e), s = Array.isArray(t);
  let i;
  if (n && s) {
    if (e.length != t.length) return !1;
    for (i = 0; i < e.length; i++) if (!ja(e[i], t[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!ja(t[u[i]], e[u[i]])) return !1;
    return !0;
  } else if (e && t && typeof e == "function" && typeof t == "function")
    return e.toString() === t.toString();
  return !1;
}
class mm {
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
    return !this.removedCount || this.insertedCount ? ae.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? ae.RIGHT : ae.LEFT;
  }
}
function ve(t, e) {
  return new ve.InputMask(t, e);
}
function Kc(t) {
  if (t == null) throw new Error("mask property should be defined");
  return t instanceof RegExp ? ve.MaskedRegExp : ws(t) ? ve.MaskedPattern : t === Date ? ve.MaskedDate : t === Number ? ve.MaskedNumber : Array.isArray(t) || t === Array ? ve.MaskedDynamic : ve.Masked && t.prototype instanceof ve.Masked ? t : ve.Masked && t instanceof ve.Masked ? t.constructor : t instanceof Function ? ve.MaskedFunction : (console.warn("Mask not found for mask", t), ve.Masked);
}
function Ga(t) {
  if (!t) throw new Error("Options in not defined");
  if (ve.Masked) {
    if (t.prototype instanceof ve.Masked) return {
      mask: t
    };
    const {
      mask: e = void 0,
      ...n
    } = t instanceof ve.Masked ? {
      mask: t
    } : Bo(t) && t.mask instanceof ve.Masked ? t : {};
    if (e) {
      const s = e.mask;
      return {
        ...Jc(e, (i, r) => !r.startsWith("_")),
        mask: e.constructor,
        _mask: s,
        ...n
      };
    }
  }
  return Bo(t) ? {
    ...t
  } : {
    mask: t
  };
}
function ci(t) {
  if (ve.Masked && t instanceof ve.Masked) return t;
  const e = Ga(t), n = Kc(e.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
  return e.mask === n && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new n(e);
}
ve.createMask = ci;
class Fl {
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
ve.MaskElement = Fl;
const Vo = 90, pm = 89;
class Br extends Fl {
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
    if (this._handlers.redo && (e.keyCode === Vo && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === pm && e.ctrlKey))
      return e.preventDefault(), this._handlers.redo(e);
    if (this._handlers.undo && e.keyCode === Vo && (e.metaKey || e.ctrlKey))
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
ve.HTMLMaskElement = Br;
class gm extends Br {
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
ve.HTMLMaskElement = Br;
class Qc extends Br {
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
ve.HTMLContenteditableMaskElement = Qc;
class Vr {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(e), this.states.length > Vr.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
Vr.MAX_LENGTH = 100;
class vm {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(e, n) {
    this.el = e instanceof Fl ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Qc(e) : new gm(e), this.masked = ci(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Vr(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(e instanceof ve.Masked) && this.masked.constructor === Kc(e)) {
      this.masked.updateOptions({
        mask: e
      });
      return;
    }
    const n = e instanceof ve.Masked ? e : ci({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, ae.LEFT));
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
    const n = new mm({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), s = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, r = s === this.masked.rawInputValue ? n.removeDirection : ae.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, r);
    r !== ae.NONE && (a = this.masked.nearestInputPos(a, ae.NONE)), this.updateControl(a), delete this._inputEvent;
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
ve.InputMask = vm;
class xe {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(e) {
    return Array.isArray(e) ? e : [e, new xe()];
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
ve.ChangeDetails = xe;
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
class Zt {
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
      ...Zt.DEFAULTS,
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
    return e ? (this._value += e, new xe({
      inserted: e,
      rawInserted: e
    })) : new xe();
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
      l || (r = new xe(), this.state = i, s && a && (s.state = a));
    }
    return r;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new xe();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new xe();
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(n), new xe();
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
    return n === void 0 && (n = {}), xe.normalize(this.prepare ? this.prepare(e, this, n) : e);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(e, n) {
    return n === void 0 && (n = {}), xe.normalize(this.prepareChar ? this.prepareChar(e, this, n) : e);
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
    s === void 0 && (s = ""), i === void 0 && (i = ae.NONE), r === void 0 && (r = {
      input: !0
    });
    const a = e + n, l = this.extractTail(a), o = this.eager === !0 || this.eager === "remove";
    let u;
    o && (i = hm(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let d = e;
    const f = new xe();
    if (i !== ae.NONE && (d = this.nearestInputPos(e, n > 1 && e !== 0 && !o ? ae.NONE : i), f.tailShift = d - e), f.aggregate(this.remove(d)), o && i !== ae.NONE && u === this.rawInputValue)
      if (i === ae.FORCE_LEFT) {
        let h;
        for (; u === this.rawInputValue && (h = this.displayValue.length); )
          f.aggregate(new xe({
            tailShift: -1
          })).aggregate(this.remove(h - 1));
      } else i === ae.FORCE_RIGHT && l.unshift();
    return f.aggregate(this.append(s, r, l));
  }
  maskEquals(e) {
    return this.mask === e;
  }
  optionsIsChanged(e) {
    return !ja(this, e);
  }
  typedValueEquals(e) {
    const n = this.typedValue;
    return e === n || Zt.EMPTY_VALUES.includes(e) && Zt.EMPTY_VALUES.includes(n) || (this.format ? this.format(e, this) === this.format(this.typedValue, this) : !1);
  }
  pad(e) {
    return new xe();
  }
}
Zt.DEFAULTS = {
  skipInvalid: !0
};
Zt.EMPTY_VALUES = [void 0, null, ""];
ve.Masked = Zt;
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
    if (!(e instanceof ve.MaskedPattern))
      return new cn(this.toString()).appendTo(e);
    const n = new xe();
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
class ym {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, ae.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, ae.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, ae.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, ae.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, ae.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, ae.NONE), !0;
    });
  }
}
class Xc {
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
    return e === void 0 && (e = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(n), this._value || (this._isRawInput = !1), new xe();
  }
  nearestInputPos(e, n) {
    n === void 0 && (n = ae.NONE);
    const s = 0, i = this._value.length;
    switch (n) {
      case ae.LEFT:
      case ae.FORCE_LEFT:
        return s;
      case ae.NONE:
      case ae.RIGHT:
      case ae.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new xe();
    const s = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || n.input || n.raw) && (!n.raw || !s) && !n.tail, a = new xe({
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
    const e = new xe();
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
class dr {
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
    this.masked = ci(o), Object.assign(this, {
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.value.length), e === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(e, n)) : new xe();
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
    if (n === void 0 && (n = {}), this.isFilled) return new xe();
    const s = this.masked.state;
    let i = this.masked._appendChar(e, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new xe(), this.masked.state = s), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(e, n, s) {
    return this.masked.append(e, this.currentMaskFlags(n), s);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new xe() : (this.isFilled = !0, new xe({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new xe();
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
    n === void 0 && (n = ae.NONE);
    const s = 0, i = this.value.length, r = Math.min(Math.max(e, s), i);
    switch (n) {
      case ae.LEFT:
      case ae.FORCE_LEFT:
        return this.isComplete ? r : s;
      case ae.RIGHT:
      case ae.FORCE_RIGHT:
        return this.isComplete ? r : i;
      case ae.NONE:
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
    return new xe();
  }
}
dr.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class bm extends Zt {
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
ve.MaskedRegExp = bm;
class Yt extends Zt {
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
      ...Yt.DEFAULTS,
      ...e,
      definitions: Object.assign({}, dr.DEFAULT_DEFINITIONS, e?.definitions)
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
        const u = n.slice(r), d = Object.keys(this.blocks).filter((h) => u.indexOf(h) === 0);
        d.sort((h, m) => m.length - h.length);
        const f = d[0];
        if (f) {
          const {
            expose: h,
            repeat: m,
            ...v
          } = Ga(this.blocks[f]), C = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...v,
            repeat: m,
            parent: this
          }, M = m != null ? new ve.RepeatBlock(
            C
            /* TODO */
          ) : ci(C);
          M && (this._blocks.push(M), h && (this.exposeBlock = M), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), r += f.length - 1;
          continue;
        }
      }
      let a = n[r], l = a in e;
      if (a === Yt.STOP_CHAR) {
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
      if (a === Yt.ESCAPE_CHAR) {
        if (++r, a = n[r], !a) break;
        l = !1;
      }
      const o = l ? new dr({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Ga(e[a]),
        parent: this
      }) : new Xc({
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
    const n = new xe();
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
    const s = this._mapPosToBlock(this.displayValue.length), i = new xe();
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
    const n = new xe();
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
    if (n === void 0 && (n = ae.NONE), !this._blocks.length) return 0;
    const s = new ym(this, e);
    if (n === ae.NONE)
      return s.pushRightBeforeInput() || (s.popState(), s.pushLeftBeforeInput()) ? s.pos : this.displayValue.length;
    if (n === ae.LEFT || n === ae.FORCE_LEFT) {
      if (n === ae.LEFT) {
        if (s.pushRightBeforeFilled(), s.ok && s.pos === e) return e;
        s.popState();
      }
      if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), n === ae.LEFT) {
        if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= e || (s.popState(), s.ok && s.pos <= e)) return s.pos;
        s.popState();
      }
      return s.ok ? s.pos : n === ae.FORCE_LEFT ? 0 : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0);
    }
    return n === ae.RIGHT || n === ae.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : n === ae.FORCE_RIGHT ? this.displayValue.length : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : this.nearestInputPos(e, ae.LEFT))) : e;
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
    const n = new xe();
    return this._forEachBlocksInRange(0, this.displayValue.length, (s) => n.aggregate(s.pad(e))), n;
  }
}
Yt.DEFAULTS = {
  ...Zt.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Yt.STOP_CHAR = "`";
Yt.ESCAPE_CHAR = "\\";
Yt.InputDefinition = dr;
Yt.FixedDefinition = Xc;
ve.MaskedPattern = Yt;
function km(t) {
  return ve(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aaaaaa##[000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function wm(t) {
  return ve(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa00 #### 0000 0000[ 0000 0000 0000 0000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function Im(t) {
  return ve(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa########[#####]",
    prepareChar: (e) => e.toUpperCase()
  });
}
var Sm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  bic: km,
  iban: wm,
  vat: Im
});
function Cm() {
  return dn(Pc, ee(!1));
}
function Fs(t) {
  const e = Cm();
  return ye(() => c(t) || c(e));
}
function Al() {
  return dn(Hc, {
    id: yl()
  });
}
let ed;
const Nr = (t) => ed = t, td = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function Za(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var ei;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(ei || (ei = {}));
function Tm() {
  const t = Mu(!0), e = t.run(() => ee({}));
  let n = [], s = [];
  const i = ml({
    install(r) {
      Nr(i), i._a = r, r.provide(td, i), r.config.globalProperties.$pinia = i, s.forEach((a) => n.push(a)), s = [];
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
const nd = () => {
};
function No(t, e, n, s = nd) {
  t.add(e);
  const i = () => {
    t.delete(e) && s();
  };
  return !n && Du() && Ou(i), i;
}
function us(t, ...e) {
  t.forEach((n) => {
    n(...e);
  });
}
const xm = (t) => t(), _o = /* @__PURE__ */ Symbol(), ya = /* @__PURE__ */ Symbol();
function Ya(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((n, s) => t.set(s, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], i = t[n];
    Za(i) && Za(s) && t.hasOwnProperty(n) && !Be(s) && !Gt(s) ? t[n] = Ya(i, s) : t[n] = s;
  }
  return t;
}
const Em = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function Fm(t) {
  return !Za(t) || !Object.prototype.hasOwnProperty.call(t, Em);
}
const { assign: Tn } = Object;
function Am(t) {
  return !!(Be(t) && t.effect);
}
function $m(t, e, n, s) {
  const { state: i, actions: r, getters: a } = e, l = n.state.value[t];
  let o;
  function u() {
    l || (n.state.value[t] = i ? i() : {});
    const d = qf(n.state.value[t]);
    return Tn(d, r, Object.keys(a || {}).reduce((f, h) => (f[h] = ml(ye(() => {
      Nr(n);
      const m = n._s.get(t);
      return a[h].call(m, m);
    })), f), {}));
  }
  return o = sd(t, u, e, n, s, !0), o;
}
function sd(t, e, n = {}, s, i, r) {
  let a;
  const l = Tn({ actions: {} }, n), o = { deep: !0 };
  let u, d, f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), m;
  const v = s.state.value[t];
  !r && !v && (s.state.value[t] = {}), ee({});
  let C;
  function M(b) {
    let w;
    u = d = !1, typeof b == "function" ? (b(s.state.value[t]), w = {
      type: ei.patchFunction,
      storeId: t,
      events: m
    }) : (Ya(s.state.value[t], b), w = {
      type: ei.patchObject,
      payload: b,
      storeId: t,
      events: m
    });
    const P = C = /* @__PURE__ */ Symbol();
    Jn().then(() => {
      C === P && (u = !0);
    }), d = !0, us(f, w, s.state.value[t]);
  }
  const T = r ? function() {
    const { state: w } = n, P = w ? w() : {};
    this.$patch((z) => {
      Tn(z, P);
    });
  } : (
    /* istanbul ignore next */
    nd
  );
  function _() {
    a.stop(), f.clear(), h.clear(), s._s.delete(t);
  }
  const I = (b, w = "") => {
    if (_o in b)
      return b[ya] = w, b;
    const P = function() {
      Nr(s);
      const z = Array.from(arguments), D = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
      function me(ke) {
        D.add(ke);
      }
      function X(ke) {
        ne.add(ke);
      }
      us(h, {
        args: z,
        name: P[ya],
        store: x,
        after: me,
        onError: X
      });
      let Ce;
      try {
        Ce = b.apply(this && this.$id === t ? this : x, z);
      } catch (ke) {
        throw us(ne, ke), ke;
      }
      return Ce instanceof Promise ? Ce.then((ke) => (us(D, ke), ke)).catch((ke) => (us(ne, ke), Promise.reject(ke))) : (us(D, Ce), Ce);
    };
    return P[_o] = !0, P[ya] = w, P;
  }, W = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: No.bind(null, h),
    $patch: M,
    $reset: T,
    $subscribe(b, w = {}) {
      const P = No(f, b, w.detached, () => z()), z = a.run(() => Oe(() => s.state.value[t], (D) => {
        (w.flush === "sync" ? d : u) && b({
          storeId: t,
          type: ei.direct,
          events: m
        }, D);
      }, Tn({}, o, w)));
      return P;
    },
    $dispose: _
  }, x = Jt(W);
  s._s.set(t, x);
  const G = (s._a && s._a.runWithContext || xm)(() => s._e.run(() => (a = Mu()).run(() => e({ action: I }))));
  for (const b in G) {
    const w = G[b];
    if (Be(w) && !Am(w) || Gt(w))
      r || (v && Fm(w) && (Be(w) ? w.value = v[b] : Ya(w, v[b])), s.state.value[t][b] = w);
    else if (typeof w == "function") {
      const P = I(w, b);
      G[b] = P, l.actions[b] = w;
    }
  }
  return Tn(x, G), Tn(ge(x), G), Object.defineProperty(x, "$state", {
    get: () => s.state.value[t],
    set: (b) => {
      M((w) => {
        Tn(w, b);
      });
    }
  }), s._p.forEach((b) => {
    Tn(x, a.run(() => b({
      store: x,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), v && r && n.hydrate && n.hydrate(x.$state, v), u = !0, d = !0, x;
}
// @__NO_SIDE_EFFECTS__
function Lm(t, e, n) {
  let s;
  const i = typeof e == "function";
  s = i ? n : e;
  function r(a, l) {
    const o = ch();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (o ? dn(td, null) : null), a && Nr(a), a = ed, a._s.has(t) || (i ? sd(t, e, s, a) : $m(t, s, a)), a._s.get(t);
  }
  return r.$id = t, r;
}
function Mm(t) {
  const e = ge(t), n = {};
  for (const s in e) {
    const i = e[s];
    i.effect ? n[s] = // ...
    ye({
      get: () => t[s],
      set(r) {
        t[s] = r;
      }
    }) : (Be(i) || Gt(i)) && (n[s] = // ---
    pn(t, s));
  }
  return n;
}
class as extends Error {
}
class Dm extends as {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class Om extends as {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Bm extends as {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class ps extends as {
}
class id extends as {
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
const Y = "numeric", Nt = "short", vt = "long", fr = {
  year: Y,
  month: Y,
  day: Y
}, rd = {
  year: Y,
  month: Nt,
  day: Y
}, Vm = {
  year: Y,
  month: Nt,
  day: Y,
  weekday: Nt
}, ad = {
  year: Y,
  month: vt,
  day: Y
}, ld = {
  year: Y,
  month: vt,
  day: Y,
  weekday: vt
}, od = {
  hour: Y,
  minute: Y
}, ud = {
  hour: Y,
  minute: Y,
  second: Y
}, cd = {
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: Nt
}, dd = {
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: vt
}, fd = {
  hour: Y,
  minute: Y,
  hourCycle: "h23"
}, hd = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23"
}, md = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23",
  timeZoneName: Nt
}, pd = {
  hour: Y,
  minute: Y,
  second: Y,
  hourCycle: "h23",
  timeZoneName: vt
}, gd = {
  year: Y,
  month: Y,
  day: Y,
  hour: Y,
  minute: Y
}, vd = {
  year: Y,
  month: Y,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y
}, yd = {
  year: Y,
  month: Nt,
  day: Y,
  hour: Y,
  minute: Y
}, bd = {
  year: Y,
  month: Nt,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y
}, Nm = {
  year: Y,
  month: Nt,
  day: Y,
  weekday: Nt,
  hour: Y,
  minute: Y
}, kd = {
  year: Y,
  month: vt,
  day: Y,
  hour: Y,
  minute: Y,
  timeZoneName: Nt
}, wd = {
  year: Y,
  month: vt,
  day: Y,
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: Nt
}, Id = {
  year: Y,
  month: vt,
  day: Y,
  weekday: vt,
  hour: Y,
  minute: Y,
  timeZoneName: vt
}, Sd = {
  year: Y,
  month: vt,
  day: Y,
  weekday: vt,
  hour: Y,
  minute: Y,
  second: Y,
  timeZoneName: vt
};
class yi {
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
let ba = null;
class _r extends yi {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return ba === null && (ba = new _r()), ba;
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
    return Od(e, n, s);
  }
  /** @override **/
  formatOffset(e, n) {
    return ti(this.offset(e), n);
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
const Ja = /* @__PURE__ */ new Map();
function _m(t) {
  let e = Ja.get(t);
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
  }), Ja.set(t, e)), e;
}
const Rm = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function zm(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, l, o, u, d] = s;
  return [a, i, r, l, o, u, d];
}
function Pm(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], l = Rm[r];
    r === "era" ? s[l] = a : ie(l) || (s[l] = parseInt(a, 10));
  }
  return s;
}
const ka = /* @__PURE__ */ new Map();
class gn extends yi {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = ka.get(e);
    return n === void 0 && ka.set(e, n = new gn(e)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ka.clear(), Ja.clear();
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
    return Od(e, n, s, this.name);
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
    return ti(this.offset(e), n);
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
    const s = _m(this.name);
    let [i, r, a, l, o, u, d] = s.formatToParts ? Pm(s, n) : zm(s, n);
    l === "BC" && (i = -Math.abs(i) + 1);
    const h = zr({
      year: i,
      month: r,
      day: a,
      hour: o === 24 ? 0 : o,
      minute: u,
      second: d,
      millisecond: 0
    });
    let m = +n;
    const v = m % 1e3;
    return m -= v >= 0 ? v : 1e3 + v, (h - m) / (60 * 1e3);
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
let Ro = {};
function Hm(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Ro[n];
  return s || (s = new Intl.ListFormat(t, e), Ro[n] = s), s;
}
const Ka = /* @__PURE__ */ new Map();
function Qa(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Ka.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), Ka.set(n, s)), s;
}
const Xa = /* @__PURE__ */ new Map();
function Wm(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Xa.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), Xa.set(n, s)), s;
}
const el = /* @__PURE__ */ new Map();
function Um(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = el.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), el.set(i, r)), r;
}
let Ws = null;
function qm() {
  return Ws || (Ws = new Intl.DateTimeFormat().resolvedOptions().locale, Ws);
}
const tl = /* @__PURE__ */ new Map();
function Cd(t) {
  let e = tl.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), tl.set(t, e)), e;
}
const nl = /* @__PURE__ */ new Map();
function jm(t) {
  let e = nl.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...Td, ...e }), nl.set(t, e);
  }
  return e;
}
function Gm(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = Qa(t).resolvedOptions(), i = t;
    } catch {
      const o = t.substring(0, n);
      s = Qa(o).resolvedOptions(), i = o;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function Zm(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function Ym(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = se.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function Jm(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const s = se.utc(2016, 11, 13 + n);
    e.push(t(s));
  }
  return e;
}
function Vi(t, e, n, s) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : s(e);
}
function Km(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || Cd(t.locale).numberingSystem === "latn";
}
class Qm {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const l = { useGrouping: !1, ...s };
      s.padTo > 0 && (l.minimumIntegerDigits = s.padTo), this.inf = Wm(e, l);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Ol(e, 3);
      return Ue(n, this.padTo);
    }
  }
}
class Xm {
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
    r.timeZone = r.timeZone || i, this.dtf = Qa(n, r);
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
class ep {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && Md() && (this.rtf = Um(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : Ip(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const Td = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Ee {
  static fromOpts(e) {
    return Ee.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, s, i, r = !1) {
    const a = e || Ne.defaultLocale, l = a || (r ? "en-US" : qm()), o = n || Ne.defaultNumberingSystem, u = s || Ne.defaultOutputCalendar, d = il(i) || Ne.defaultWeekSettings;
    return new Ee(l, o, u, d, a);
  }
  static resetCache() {
    Ws = null, Ka.clear(), Xa.clear(), el.clear(), tl.clear(), nl.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return Ee.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, l, o] = Gm(e);
    this.locale = a, this.numberingSystem = n || l || null, this.outputCalendar = s || o || null, this.weekSettings = i, this.intl = Zm(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Km(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Ee.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      il(e.weekSettings) || this.weekSettings,
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
    return Vi(this, e, Nd, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (l) => this.dtFormatter(l, i).format() : (l) => this.extract(l, i, "month");
        this.monthsCache[r][e] = Ym(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return Vi(this, e, zd, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = Jm(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Vi(
      this,
      void 0,
      () => Pd,
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
    return Vi(this, e, Hd, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [se.utc(-40, 1, 1), se.utc(2017, 1, 1)].map(
        (s) => this.extract(s, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, s) {
    const i = this.dtFormatter(e, n), r = i.formatToParts(), a = r.find((l) => l.type.toLowerCase() === s);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new Qm(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new Xm(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new ep(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Hm(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || Cd(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Dd() ? jm(this.locale) : Td;
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
let wa = null;
class dt extends yi {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return wa === null && (wa = new dt(0)), wa;
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
        return new dt(Pr(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${ti(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${ti(-this.fixed, "narrow")}`;
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
    return ti(this.fixed, n);
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
class tp extends yi {
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
  if (ie(t) || t === null)
    return e;
  if (t instanceof yi)
    return t;
  if (lp(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? _r.instance : n === "utc" || n === "gmt" ? dt.utcInstance : dt.parseSpecifier(n) || gn.create(t);
  } else return Dn(t) ? dt.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new tp(t);
}
const $l = {
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
}, zo = {
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
}, np = $l.hanidec.replace(/[\[|\]]/g, "").split("");
function sp(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search($l.hanidec) !== -1)
        e += np.indexOf(t[n]);
      else
        for (const i in zo) {
          const [r, a] = zo[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const sl = /* @__PURE__ */ new Map();
function ip() {
  sl.clear();
}
function Et({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = sl.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), sl.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${$l[n]}${e}`), s.set(e, i)), i;
}
let Po = () => Date.now(), Ho = "system", Wo = null, Uo = null, qo = null, jo = 60, Go, Zo = null;
class Ne {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Po;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Po = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Ho = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return $n(Ho, _r.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Wo;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Wo = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Uo;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Uo = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return qo;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    qo = e;
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
    return Zo;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Zo = il(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return jo;
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
    jo = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Go;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Go = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Ee.resetCache(), gn.resetCache(), se.resetCache(), ip();
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
const xd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Ed = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function St(t, e) {
  return new $t(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Ll(t, e, n) {
  const s = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const i = s.getUTCDay();
  return i === 0 ? 7 : i;
}
function Fd(t, e, n) {
  return n + (bi(t) ? Ed : xd)[e - 1];
}
function Ad(t, e) {
  const n = bi(t) ? Ed : xd, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function Ml(t, e) {
  return (t - e + 7) % 7 + 1;
}
function hr(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = Fd(s, i, r), l = Ml(Ll(s, i, r), n);
  let o = Math.floor((a - l + 14 - e) / 7), u;
  return o < 1 ? (u = s - 1, o = di(u, e, n)) : o > di(s, e, n) ? (u = s + 1, o = 1) : u = s, { weekYear: u, weekNumber: o, weekday: l, ...Hr(t) };
}
function Yo(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = Ml(Ll(s, 1, e), n), l = Is(s);
  let o = i * 7 + r - a - 7 + e, u;
  o < 1 ? (u = s - 1, o += Is(u)) : o > l ? (u = s + 1, o -= Is(s)) : u = s;
  const { month: d, day: f } = Ad(u, o);
  return { year: u, month: d, day: f, ...Hr(t) };
}
function Ia(t) {
  const { year: e, month: n, day: s } = t, i = Fd(e, n, s);
  return { year: e, ordinal: i, ...Hr(t) };
}
function Jo(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = Ad(e, n);
  return { year: e, month: s, day: i, ...Hr(t) };
}
function Ko(t, e) {
  if (!ie(t.localWeekday) || !ie(t.localWeekNumber) || !ie(t.localWeekYear)) {
    if (!ie(t.weekday) || !ie(t.weekNumber) || !ie(t.weekYear))
      throw new ps(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ie(t.localWeekday) || (t.weekday = t.localWeekday), ie(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), ie(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function rp(t, e = 4, n = 1) {
  const s = Rr(t.weekYear), i = Ct(
    t.weekNumber,
    1,
    di(t.weekYear, e, n)
  ), r = Ct(t.weekday, 1, 7);
  return s ? i ? r ? !1 : St("weekday", t.weekday) : St("week", t.weekNumber) : St("weekYear", t.weekYear);
}
function ap(t) {
  const e = Rr(t.year), n = Ct(t.ordinal, 1, Is(t.year));
  return e ? n ? !1 : St("ordinal", t.ordinal) : St("year", t.year);
}
function $d(t) {
  const e = Rr(t.year), n = Ct(t.month, 1, 12), s = Ct(t.day, 1, mr(t.year, t.month));
  return e ? n ? s ? !1 : St("day", t.day) : St("month", t.month) : St("year", t.year);
}
function Ld(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = Ct(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = Ct(n, 0, 59), l = Ct(s, 0, 59), o = Ct(i, 0, 999);
  return r ? a ? l ? o ? !1 : St("millisecond", i) : St("second", s) : St("minute", n) : St("hour", e);
}
function ie(t) {
  return typeof t > "u";
}
function Dn(t) {
  return typeof t == "number";
}
function Rr(t) {
  return typeof t == "number" && t % 1 === 0;
}
function lp(t) {
  return typeof t == "string";
}
function op(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Md() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Dd() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function up(t) {
  return Array.isArray(t) ? t : [t];
}
function Qo(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function cp(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function xs(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function il(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new tt("Week settings must be an object");
  if (!Ct(t.firstDay, 1, 7) || !Ct(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Ct(e, 1, 7)))
    throw new tt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Ct(t, e, n) {
  return Rr(t) && t >= e && t <= n;
}
function dp(t, e) {
  return t - e * Math.floor(t / e);
}
function Ue(t, e = 2) {
  const n = t < 0;
  let s;
  return n ? s = "-" + ("" + -t).padStart(e, "0") : s = ("" + t).padStart(e, "0"), s;
}
function An(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function qn(t) {
  if (!(ie(t) || t === null || t === ""))
    return parseFloat(t);
}
function Dl(t) {
  if (!(ie(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Ol(t, e, n = "round") {
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
function bi(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Is(t) {
  return bi(t) ? 366 : 365;
}
function mr(t, e) {
  const n = dp(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? bi(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function zr(t) {
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
function Xo(t, e, n) {
  return -Ml(Ll(t, 1, e), n) + e - 1;
}
function di(t, e = 4, n = 1) {
  const s = Xo(t, e, n), i = Xo(t + 1, e, n);
  return (Is(t) - s + i) / 7;
}
function rl(t) {
  return t > 99 ? t : t > Ne.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Od(t, e, n, s = null) {
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
function Pr(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + i;
}
function Bd(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new tt(`Invalid unit value ${t}`);
  return e;
}
function pr(t, e) {
  const n = {};
  for (const s in t)
    if (xs(t, s)) {
      const i = t[s];
      if (i == null) continue;
      n[e(s)] = Bd(i);
    }
  return n;
}
function ti(t, e) {
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
function Hr(t) {
  return cp(t, ["hour", "minute", "second", "millisecond"]);
}
const fp = [
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
], Vd = [
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
], hp = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Nd(t) {
  switch (t) {
    case "narrow":
      return [...hp];
    case "short":
      return [...Vd];
    case "long":
      return [...fp];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const _d = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Rd = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], mp = ["M", "T", "W", "T", "F", "S", "S"];
function zd(t) {
  switch (t) {
    case "narrow":
      return [...mp];
    case "short":
      return [...Rd];
    case "long":
      return [..._d];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Pd = ["AM", "PM"], pp = ["Before Christ", "Anno Domini"], gp = ["BC", "AD"], vp = ["B", "A"];
function Hd(t) {
  switch (t) {
    case "narrow":
      return [...vp];
    case "short":
      return [...gp];
    case "long":
      return [...pp];
    default:
      return null;
  }
}
function yp(t) {
  return Pd[t.hour < 12 ? 0 : 1];
}
function bp(t, e) {
  return zd(e)[t.weekday - 1];
}
function kp(t, e) {
  return Nd(e)[t.month - 1];
}
function wp(t, e) {
  return Hd(e)[t.year < 0 ? 0 : 1];
}
function Ip(t, e, n = "always", s = !1) {
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
function eu(t, e) {
  let n = "";
  for (const s of t)
    s.literal ? n += s.val : n += e(s.val);
  return n;
}
const Sp = {
  D: fr,
  DD: rd,
  DDD: ad,
  DDDD: ld,
  t: od,
  tt: ud,
  ttt: cd,
  tttt: dd,
  T: fd,
  TT: hd,
  TTT: md,
  TTTT: pd,
  f: gd,
  ff: yd,
  fff: kd,
  ffff: Id,
  F: vd,
  FF: bd,
  FFF: wd,
  FFFF: Sd
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
    return Sp[e];
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
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (m, v) => this.loc.extract(e, m, v), a = (m) => e.isOffsetFixed && e.offset === 0 && m.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, m.format) : "", l = () => s ? yp(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), o = (m, v) => s ? kp(e, m) : r(v ? { month: m } : { month: m, day: "numeric" }, "month"), u = (m, v) => s ? bp(e, m) : r(
      v ? { weekday: m } : { weekday: m, month: "long", day: "numeric" },
      "weekday"
    ), d = (m) => {
      const v = it.macroTokenToFormatOpts(m);
      return v ? this.formatWithSystemDefault(e, v) : m;
    }, f = (m) => s ? wp(e, m) : r({ era: m }, "era"), h = (m) => {
      switch (m) {
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
          return d(m);
      }
    };
    return eu(it.parseFormat(n), h);
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
    }, r = (d, f) => (h) => {
      const m = i(h);
      if (m) {
        const v = f.isNegativeDuration && m !== f.largestUnit ? s : 1;
        let C;
        return this.opts.signMode === "negativeLargestOnly" && m !== f.largestUnit ? C = "never" : this.opts.signMode === "all" ? C = "always" : C = "auto", this.num(d.get(m) * v, h.length, C);
      } else
        return h;
    }, a = it.parseFormat(n), l = a.reduce(
      (d, { literal: f, val: h }) => f ? d : d.concat(h),
      []
    ), o = e.shiftTo(...l.map(i).filter((d) => d)), u = {
      isNegativeDuration: o < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(o.values)[0]
    };
    return eu(a, r(o, u));
  }
}
const Wd = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
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
function Ud(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = An(e[n + i]);
    return [s, null, n + i];
  };
}
const qd = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, Cp = `(?:${qd.source}?(?:\\[(${Wd.source})\\])?)?`, Bl = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, jd = RegExp(`${Bl.source}${Cp}`), Vl = RegExp(`(?:[Tt]${jd.source})?`), Tp = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, xp = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Ep = /(\d{4})-?(\d{3})/, Fp = Ud("weekYear", "weekNumber", "weekDay"), Ap = Ud("year", "ordinal"), $p = /(\d{4})-(\d\d)-(\d\d)/, Gd = RegExp(
  `${Bl.source} ?(?:${qd.source}|(${Wd.source}))?`
), Lp = RegExp(`(?: ${Gd.source})?`);
function Ss(t, e, n) {
  const s = t[e];
  return ie(s) ? n : An(s);
}
function Mp(t, e) {
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
    milliseconds: Dl(t[e + 3])
  }, null, e + 4];
}
function ki(t, e) {
  const n = !t[e] && !t[e + 1], s = Pr(t[e + 1], t[e + 2]), i = n ? null : dt.instance(s);
  return [{}, i, e + 3];
}
function wi(t, e) {
  const n = t[e] ? gn.create(t[e]) : null;
  return [{}, n, e + 1];
}
const Dp = RegExp(`^T?${Bl.source}$`), Op = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Bp(t) {
  const [e, n, s, i, r, a, l, o, u] = t, d = e[0] === "-", f = o && o[0] === "-", h = (m, v = !1) => m !== void 0 && (v || m && d) ? -m : m;
  return [
    {
      years: h(qn(n)),
      months: h(qn(s)),
      weeks: h(qn(i)),
      days: h(qn(r)),
      hours: h(qn(a)),
      minutes: h(qn(l)),
      seconds: h(qn(o), o === "-0"),
      milliseconds: h(Dl(u), f)
    }
  ];
}
const Vp = {
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
function Nl(t, e, n, s, i, r, a) {
  const l = {
    year: e.length === 2 ? rl(An(e)) : An(e),
    month: Vd.indexOf(n) + 1,
    day: An(s),
    hour: An(i),
    minute: An(r)
  };
  return a && (l.second = An(a)), t && (l.weekday = t.length > 3 ? _d.indexOf(t) + 1 : Rd.indexOf(t) + 1), l;
}
const Np = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function _p(t) {
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
  ] = t, h = Nl(e, i, s, n, r, a, l);
  let m;
  return o ? m = Vp[o] : u ? m = 0 : m = Pr(d, f), [h, new dt(m)];
}
function Rp(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const zp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Pp = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Hp = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function tu(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [Nl(e, i, s, n, r, a, l), dt.utcInstance];
}
function Wp(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [Nl(e, l, n, s, i, r, a), dt.utcInstance];
}
const Up = As(Tp, Vl), qp = As(xp, Vl), jp = As(Ep, Vl), Gp = As(jd), Zd = $s(
  Mp,
  Ms,
  ki,
  wi
), Zp = $s(
  Fp,
  Ms,
  ki,
  wi
), Yp = $s(
  Ap,
  Ms,
  ki,
  wi
), Jp = $s(
  Ms,
  ki,
  wi
);
function Kp(t) {
  return Ls(
    t,
    [Up, Zd],
    [qp, Zp],
    [jp, Yp],
    [Gp, Jp]
  );
}
function Qp(t) {
  return Ls(Rp(t), [Np, _p]);
}
function Xp(t) {
  return Ls(
    t,
    [zp, tu],
    [Pp, tu],
    [Hp, Wp]
  );
}
function e0(t) {
  return Ls(t, [Op, Bp]);
}
const t0 = $s(Ms);
function n0(t) {
  return Ls(t, [Dp, t0]);
}
const s0 = As($p, Lp), i0 = As(Gd), r0 = $s(
  Ms,
  ki,
  wi
);
function a0(t) {
  return Ls(
    t,
    [s0, Zd],
    [i0, r0]
  );
}
const nu = "Invalid Duration", Yd = {
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
}, l0 = {
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
  ...Yd
}, wt = 146097 / 400, cs = 146097 / 4800, o0 = {
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
  ...Yd
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
], u0 = Qn.slice(0).reverse();
function tn(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new we(s);
}
function Jd(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of u0.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function su(t, e) {
  const n = Jd(t, e) < 0 ? -1 : 1;
  Qn.reduceRight((s, i) => {
    if (ie(e[i]))
      return s;
    if (s) {
      const r = e[s] * n, a = t[i][s], l = Math.floor(r / a);
      e[i] += l * n, e[s] -= l * a * n;
    }
    return i;
  }, null), Qn.reduce((s, i) => {
    if (ie(e[i]))
      return s;
    if (s) {
      const r = e[s] % 1;
      e[s] -= r, e[i] += r * t[s][i];
    }
    return i;
  }, null);
}
function iu(t) {
  const e = {};
  for (const [n, s] of Object.entries(t))
    s !== 0 && (e[n] = s);
  return e;
}
class we {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let s = n ? o0 : l0;
    e.matrix && (s = e.matrix), this.values = e.values, this.loc = e.loc || Ee.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = s, this.isLuxonDuration = !0;
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
    return we.fromObject({ milliseconds: e }, n);
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
    return new we({
      values: pr(e, we.normalizeUnit),
      loc: Ee.fromObject(n),
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
      return we.fromMillis(e);
    if (we.isDuration(e))
      return e;
    if (typeof e == "object")
      return we.fromObject(e);
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
    const [s] = e0(e);
    return s ? we.fromObject(s, n) : we.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    const [s] = n0(e);
    return s ? we.fromObject(s, n) : we.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
      throw new Bm(s);
    return new we({ invalid: s });
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
    if (!n) throw new id(e);
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
    return this.isValid ? it.create(this.loc, s).formatDurationFromString(this, e) : nu;
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
    if (!this.isValid) return nu;
    const n = e.showZeros !== !1, s = Qn.map((i) => {
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Ol(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    return this.isValid ? Jd(this.matrix, this.values) : NaN;
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
    const n = we.fromDurationLike(e), s = {};
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
    const n = we.fromDurationLike(e);
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
      n[s] = Bd(e(this.values[s], s));
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
    return this[we.normalizeUnit(e)];
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
    const n = { ...this.values, ...pr(e, we.normalizeUnit) };
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
    return su(this.matrix, e), tn(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = iu(this.normalize().shiftToAll().toObject());
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
    e = e.map((a) => we.normalizeUnit(a));
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
    return su(this.matrix, n), tn(this, { values: n }, !0);
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
    const e = iu(this.values);
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
function c0(t, e) {
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
      throw new Om(s);
    return new Ve({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = Rs(e), i = Rs(n), r = c0(s, i);
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
    const s = we.fromDurationLike(n), i = Rs(e);
    return Ve.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = we.fromDurationLike(n), i = Rs(e);
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
        r = se.fromISO(s, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let l, o;
      try {
        l = se.fromISO(i, n), o = l.isValid;
      } catch {
        o = !1;
      }
      if (a && o)
        return Ve.fromDateTimes(r, l);
      if (a) {
        const u = we.fromISO(i, n);
        if (u.isValid)
          return Ve.after(r, u);
      } else if (o) {
        const u = we.fromISO(s, n);
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
    const n = we.fromDurationLike(e);
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
  toLocaleString(e = fr, n = {}) {
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
    return this.isValid ? this.e.diff(this.s, e, n) : we.invalid(this.invalidReason);
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
class Ni {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = Ne.defaultZone) {
    const n = se.now().setZone(e).set({ month: 12 });
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
    return (n || Ee.create(e)).getStartOfWeek();
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
    return (n || Ee.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ee.create(e)).getWeekendDays().slice();
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
    return (i || Ee.create(n, s, r)).months(e);
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
    return (i || Ee.create(n, s, r)).months(e, !0);
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
    return (i || Ee.create(n, s, null)).weekdays(e);
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
    return (i || Ee.create(n, s, null)).weekdays(e, !0);
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
    return Ee.create(e).meridiems();
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
    return Ee.create(n, null, "gregory").eras(e);
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
    return { relative: Md(), localeWeek: Dd() };
  }
}
function ru(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(we.fromMillis(s).as("days"));
}
function d0(t, e, n) {
  const s = [
    ["years", (o, u) => u.year - o.year],
    ["quarters", (o, u) => u.quarter - o.quarter + (u.year - o.year) * 4],
    ["months", (o, u) => u.month - o.month + (u.year - o.year) * 12],
    [
      "weeks",
      (o, u) => {
        const d = ru(o, u);
        return (d - d % 7) / 7;
      }
    ],
    ["days", ru]
  ], i = {}, r = t;
  let a, l;
  for (const [o, u] of s)
    n.indexOf(o) >= 0 && (a = o, i[o] = u(t, e), l = r.plus(i), l > e ? (i[o]--, t = r.plus(i), t > e && (l = t, i[o]--, t = r.plus(i))) : t = l);
  return [t, i, l, a];
}
function f0(t, e, n, s) {
  let [i, r, a, l] = d0(t, e, n);
  const o = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [l]: 1 })), a !== i && (r[l] = (r[l] || 0) + o / (a - i)));
  const d = we.fromObject(r, s);
  return u.length > 0 ? we.fromMillis(o, s).shiftTo(...u).plus(d) : d;
}
const h0 = "missing Intl.DateTimeFormat.formatToParts support";
function Se(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(sp(n)) };
}
const m0 = " ", Kd = `[ ${m0}]`, Qd = new RegExp(Kd, "g");
function p0(t) {
  return t.replace(/\./g, "\\.?").replace(Qd, Kd);
}
function au(t) {
  return t.replace(/\./g, "").replace(Qd, " ").toLowerCase();
}
function Ft(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(p0).join("|")),
    deser: ([n]) => t.findIndex((s) => au(n) === au(s)) + e
  };
}
function lu(t, e) {
  return { regex: t, deser: ([, n, s]) => Pr(n, s), groups: e };
}
function _i(t) {
  return { regex: t, deser: ([e]) => e };
}
function g0(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function v0(t, e) {
  const n = Et(e), s = Et(e, "{2}"), i = Et(e, "{3}"), r = Et(e, "{4}"), a = Et(e, "{6}"), l = Et(e, "{1,2}"), o = Et(e, "{1,3}"), u = Et(e, "{1,6}"), d = Et(e, "{1,9}"), f = Et(e, "{2,4}"), h = Et(e, "{4,6}"), m = (M) => ({ regex: RegExp(g0(M.val)), deser: ([T]) => T, literal: !0 }), C = ((M) => {
    if (t.literal)
      return m(M);
    switch (M.val) {
      // era
      case "G":
        return Ft(e.eras("short"), 0);
      case "GG":
        return Ft(e.eras("long"), 0);
      // years
      case "y":
        return Se(u);
      case "yy":
        return Se(f, rl);
      case "yyyy":
        return Se(r);
      case "yyyyy":
        return Se(h);
      case "yyyyyy":
        return Se(a);
      // months
      case "M":
        return Se(l);
      case "MM":
        return Se(s);
      case "MMM":
        return Ft(e.months("short", !0), 1);
      case "MMMM":
        return Ft(e.months("long", !0), 1);
      case "L":
        return Se(l);
      case "LL":
        return Se(s);
      case "LLL":
        return Ft(e.months("short", !1), 1);
      case "LLLL":
        return Ft(e.months("long", !1), 1);
      // dates
      case "d":
        return Se(l);
      case "dd":
        return Se(s);
      // ordinals
      case "o":
        return Se(o);
      case "ooo":
        return Se(i);
      // time
      case "HH":
        return Se(s);
      case "H":
        return Se(l);
      case "hh":
        return Se(s);
      case "h":
        return Se(l);
      case "mm":
        return Se(s);
      case "m":
        return Se(l);
      case "q":
        return Se(l);
      case "qq":
        return Se(s);
      case "s":
        return Se(l);
      case "ss":
        return Se(s);
      case "S":
        return Se(o);
      case "SSS":
        return Se(i);
      case "u":
        return _i(d);
      case "uu":
        return _i(l);
      case "uuu":
        return Se(n);
      // meridiem
      case "a":
        return Ft(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Se(r);
      case "kk":
        return Se(f, rl);
      // weekNumber (W)
      case "W":
        return Se(l);
      case "WW":
        return Se(s);
      // weekdays
      case "E":
      case "c":
        return Se(n);
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
        return lu(new RegExp(`([+-]${l.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return lu(new RegExp(`([+-]${l.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return _i(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return _i(/[^\S\n\r]/);
      default:
        return m(M);
    }
  })(t) || {
    invalidReason: h0
  };
  return C.token = t, C;
}
const y0 = {
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
function b0(t, e, n) {
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
  let l = y0[a];
  if (typeof l == "object" && (l = l[r]), l)
    return {
      literal: !1,
      val: l
    };
}
function k0(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function w0(t, e, n) {
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
function I0(t) {
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
  return ie(t.z) || (n = gn.create(t.z)), ie(t.Z) || (n || (n = new dt(t.Z)), s = t.Z), ie(t.q) || (t.M = (t.q - 1) * 3 + 1), ie(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), ie(t.u) || (t.S = Dl(t.u)), [Object.keys(t).reduce((r, a) => {
    const l = e(a);
    return l && (r[l] = t[a]), r;
  }, {}), n, s];
}
let Sa = null;
function S0() {
  return Sa || (Sa = se.fromMillis(1555555555555)), Sa;
}
function C0(t, e) {
  if (t.literal)
    return t;
  const n = it.macroTokenToFormatOpts(t.val), s = nf(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function Xd(t, e) {
  return Array.prototype.concat(...t.map((n) => C0(n, e)));
}
class ef {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = Xd(it.parseFormat(n), e), this.units = this.tokens.map((s) => v0(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = k0(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = w0(e, this.regex, this.handlers), [i, r, a] = s ? I0(s) : [null, null, void 0];
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
function tf(t, e, n) {
  return new ef(t, n).explainFromTokens(e);
}
function T0(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = tf(t, e, n);
  return [s, i, r, a];
}
function nf(t, e) {
  if (!t)
    return null;
  const s = it.create(e, t).dtFormatter(S0()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => b0(a, t, r));
}
const Ca = "Invalid DateTime", ou = 864e13;
function Us(t) {
  return new $t("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Ta(t) {
  return t.weekData === null && (t.weekData = hr(t.c)), t.weekData;
}
function xa(t) {
  return t.localWeekData === null && (t.localWeekData = hr(
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
  return new se({ ...n, ...e, old: n });
}
function sf(t, e, n) {
  let s = t - e * 60 * 1e3;
  const i = n.offset(s);
  if (e === i)
    return [s, e];
  s -= (i - e) * 60 * 1e3;
  const r = n.offset(s);
  return i === r ? [s, i] : [t - Math.min(i, r) * 60 * 1e3, Math.max(i, r)];
}
function Ri(t, e) {
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
function Zi(t, e, n) {
  return sf(zr(t), e, n);
}
function uu(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, mr(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = we.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), l = zr(r);
  let [o, u] = sf(l, n, t.zone);
  return a !== 0 && (o += a, u = t.zone.offset(o)), { ts: o, o: u };
}
function fs(t, e, n, s, i, r) {
  const { setZone: a, zone: l } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const o = e || l, u = se.fromObject(t, {
      ...n,
      zone: o,
      specificOffset: r
    });
    return a ? u : u.setZone(l);
  } else
    return se.invalid(
      new $t("unparsable", `the input "${i}" can't be parsed as ${s}`)
    );
}
function zi(t, e, n = !0) {
  return t.isValid ? it.create(Ee.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Ea(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += Ue(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += Ue(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += Ue(t.c.month), n === "month") return i;
  return i += Ue(t.c.day), i;
}
function cu(t, e, n, s, i, r, a) {
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
const rf = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, x0 = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, E0 = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Yi = ["year", "month", "day", "hour", "minute", "second", "millisecond"], F0 = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], A0 = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ji(t) {
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
  if (!e) throw new id(t);
  return e;
}
function du(t) {
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
      return Ji(t);
  }
}
function $0(t) {
  if (qs === void 0 && (qs = Ne.now()), t.type !== "iana")
    return t.offset(qs);
  const e = t.name;
  let n = al.get(e);
  return n === void 0 && (n = t.offset(qs), al.set(e, n)), n;
}
function fu(t, e) {
  const n = $n(e.zone, Ne.defaultZone);
  if (!n.isValid)
    return se.invalid(Us(n));
  const s = Ee.fromObject(e);
  let i, r;
  if (ie(t.year))
    i = Ne.now();
  else {
    for (const o of Yi)
      ie(t[o]) && (t[o] = rf[o]);
    const a = $d(t) || Ld(t);
    if (a)
      return se.invalid(a);
    const l = $0(n);
    [i, r] = Zi(t, l, n);
  }
  return new se({ ts: i, zone: n, loc: s, o: r });
}
function hu(t, e, n) {
  const s = ie(n.round) ? !0 : n.round, i = ie(n.rounding) ? "trunc" : n.rounding, r = (l, o) => (l = Ol(l, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(l, o)), a = (l) => n.calendary ? e.hasSame(t, l) ? 0 : e.startOf(l).diff(t.startOf(l), l).get(l) : e.diff(t, l).get(l);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const l of n.units) {
    const o = a(l);
    if (Math.abs(o) >= 1)
      return r(o, l);
  }
  return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function mu(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let qs;
const al = /* @__PURE__ */ new Map();
class se {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || Ne.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new $t("invalid input") : null) || (n.isValid ? null : Us(n));
    this.ts = ie(e.ts) ? Ne.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const l = Dn(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Ri(this.ts, l), s = Number.isNaN(i.year) ? new $t("invalid input") : null, i = s ? null : i, r = s ? null : l;
      }
    this._zone = n, this.loc = e.loc || Ee.create(), this.invalid = s, this.weekData = null, this.localWeekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0;
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
    const [e, n] = mu(arguments), [s, i, r, a, l, o, u] = n;
    return fu({ year: s, month: i, day: r, hour: a, minute: l, second: o, millisecond: u }, e);
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
    const [e, n] = mu(arguments), [s, i, r, a, l, o, u] = n;
    return e.zone = dt.utcInstance, fu({ year: s, month: i, day: r, hour: a, minute: l, second: o, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = op(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return se.invalid("invalid input");
    const i = $n(n.zone, Ne.defaultZone);
    return i.isValid ? new se({
      ts: s,
      zone: i,
      loc: Ee.fromObject(n)
    }) : se.invalid(Us(i));
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
      return e < -ou || e > ou ? se.invalid("Timestamp out of range") : new se({
        ts: e,
        zone: $n(n.zone, Ne.defaultZone),
        loc: Ee.fromObject(n)
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
      return new se({
        ts: e * 1e3,
        zone: $n(n.zone, Ne.defaultZone),
        loc: Ee.fromObject(n)
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
      return se.invalid(Us(s));
    const i = Ee.fromObject(n), r = pr(e, du), { minDaysInFirstWeek: a, startOfWeek: l } = Ko(r, i), o = Ne.now(), u = ie(n.specificOffset) ? s.offset(o) : n.specificOffset, d = !ie(r.ordinal), f = !ie(r.year), h = !ie(r.month) || !ie(r.day), m = f || h, v = r.weekYear || r.weekNumber;
    if ((m || d) && v)
      throw new ps(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && d)
      throw new ps("Can't mix ordinal dates with month/day");
    const C = v || r.weekday && !m;
    let M, T, _ = Ri(o, u);
    C ? (M = F0, T = x0, _ = hr(_, a, l)) : d ? (M = A0, T = E0, _ = Ia(_)) : (M = Yi, T = rf);
    let I = !1;
    for (const P of M) {
      const z = r[P];
      ie(z) ? I ? r[P] = T[P] : r[P] = _[P] : I = !0;
    }
    const W = C ? rp(r, a, l) : d ? ap(r) : $d(r), x = W || Ld(r);
    if (x)
      return se.invalid(x);
    const $ = C ? Yo(r, a, l) : d ? Jo(r) : r, [G, b] = Zi($, u, s), w = new se({
      ts: G,
      zone: s,
      o: b,
      loc: i
    });
    return r.weekday && m && e.weekday !== w.weekday ? se.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${w.toISO()}`
    ) : w.isValid ? w : se.invalid(w.invalid);
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
    const [s, i] = Kp(e);
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
    const [s, i] = Qp(e);
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
    const [s, i] = Xp(e);
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
    if (ie(e) || ie(n))
      throw new tt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: r = null } = s, a = Ee.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [l, o, u, d] = T0(a, e, n);
    return d ? se.invalid(d) : fs(l, o, s, `format ${n}`, e, u);
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
    const [s, i] = a0(e);
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
      throw new Dm(s);
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
    const s = nf(e, Ee.fromObject(n));
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
    return Xd(it.parseFormat(e), Ee.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    qs = void 0, al.clear();
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
    return this.isValid ? Ta(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Ta(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Ta(this).weekday : NaN;
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
    return this.isValid ? xa(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? xa(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? xa(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Ia(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Ni.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Ni.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Ni.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Ni.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, s = zr(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), l = this.zone.offset(s - r * n);
    if (a === l)
      return [this];
    const o = s - a * n, u = s - l * n, d = Ri(o, a), f = Ri(u, l);
    return d.hour === f.hour && d.minute === f.minute && d.second === f.second && d.millisecond === f.millisecond ? [jn(this, { ts: o }), jn(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return bi(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return mr(this.year, this.month);
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
    return this.isValid ? di(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? di(
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
        [i] = Zi(a, r, e);
      }
      return jn(this, { ts: i, zone: e });
    } else
      return se.invalid(Us(e));
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
    const n = pr(e, du), { minDaysInFirstWeek: s, startOfWeek: i } = Ko(n, this.loc), r = !ie(n.weekYear) || !ie(n.weekNumber) || !ie(n.weekday), a = !ie(n.ordinal), l = !ie(n.year), o = !ie(n.month) || !ie(n.day), u = l || o, d = n.weekYear || n.weekNumber;
    if ((u || a) && d)
      throw new ps(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && a)
      throw new ps("Can't mix ordinal dates with month/day");
    let f;
    r ? f = Yo(
      { ...hr(this.c, s, i), ...n },
      s,
      i
    ) : ie(n.ordinal) ? (f = { ...this.toObject(), ...n }, ie(n.day) && (f.day = Math.min(mr(f.year, f.month), f.day))) : f = Jo({ ...Ia(this.c), ...n });
    const [h, m] = Zi(f, this.o, this.zone);
    return jn(this, { ts: h, o: m });
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
    const n = we.fromDurationLike(e);
    return jn(this, uu(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = we.fromDurationLike(e).negate();
    return jn(this, uu(this, n));
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
    const s = {}, i = we.normalizeUnit(e);
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
    return this.isValid ? it.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ca;
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
  toLocaleString(e = fr, n = {}) {
    return this.isValid ? it.create(this.loc.clone(n), e).formatDateTime(this) : Ca;
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
    a = Ji(a);
    const l = e === "extended";
    let o = Ea(this, l, a);
    return Yi.indexOf(a) >= 3 && (o += "T"), o += cu(
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
    return this.isValid ? Ea(this, e === "extended", Ji(n)) : null;
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
    return this.isValid ? (l = Ji(l), (i && Yi.indexOf(l) >= 3 ? "T" : "") + cu(
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
    return this.isValid ? Ea(this, !0) : null;
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
    return this.isValid ? this.toISO() : Ca;
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
      return we.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = up(n).map(we.normalizeUnit), a = e.valueOf() > this.valueOf(), l = a ? this : e, o = a ? e : this, u = f0(l, o, r, i);
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
    const n = e.base || se.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, r = void 0), hu(n, this.plus(s), {
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
    return this.isValid ? hu(e.base || se.fromObject({}, { zone: this.zone }), this, {
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
      throw new tt("min requires all arguments be DateTimes");
    return Qo(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(se.isDateTime))
      throw new tt("max requires all arguments be DateTimes");
    return Qo(e, (n) => n.valueOf(), Math.max);
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
    const { locale: i = null, numberingSystem: r = null } = s, a = Ee.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    return tf(a, e, n);
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
    const { locale: s = null, numberingSystem: i = null } = n, r = Ee.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new ef(r, e);
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
      throw new tt(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: r = null } = s, a = Ee.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new tt(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: l, zone: o, specificOffset: u, invalidReason: d } = n.explainFromTokens(e);
    return d ? se.invalid(d) : fs(
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
    return fr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return rd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Vm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return ad;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return ld;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return od;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return ud;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return cd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return dd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return fd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return hd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return md;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return pd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return gd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return vd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return yd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return bd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Nm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return kd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return wd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Id;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Sd;
  }
}
function Rs(t) {
  if (se.isDateTime(t))
    return t;
  if (t && t.valueOf && Dn(t.valueOf()))
    return se.fromJSDate(t);
  if (t && typeof t == "object")
    return se.fromObject(t);
  throw new tt(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
function fi(t) {
  return globalThis.document ? t instanceof HTMLElement : !1;
}
function L0(t) {
  let e = [];
  for (let n of t) {
    if (n.type === fe && Array.isArray(n.children)) {
      e.push(...n.children);
      continue;
    }
    e.push(n);
  }
  return e;
}
var M0 = ["a:not([disabled])", "button:not([disabled])", "input[type=checkbox]:not([disabled])", "input[type=radio]:not([disabled])", "input[type=text]:not([disabled])", '[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");
function ts(t) {
  return Array.from(t.querySelectorAll(M0)).filter(fi).filter((e) => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement);
}
function D0(t, e, n) {
  let s = ts(t), i = s.indexOf(e);
  if (i === -1) return null;
  let r = V0(s);
  O0(r, i, n);
  let a = B0(i, n, r, s);
  return a || ((n === "up" || n === "left") && (a = s[i - 1]), (n === "down" || n === "right") && (a = s[i + 1])), a;
}
function O0(t, e, n) {
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
function B0(t, e, n, s) {
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
function V0(t) {
  return t.map((e) => e.getBoundingClientRect()).map((e) => ({ height: e.height, width: e.width, top: e.top, left: e.left, right: e.right, bottom: e.bottom, center: { x: e.left + e.width / 2, y: e.top + e.height / 2 }, distance: 0 }));
}
function N0(t, e, n = void 0) {
  let s = ts(t), i = n || document.activeElement;
  if (!i || !fi(i)) return s[0] || void 0;
  let r = s.indexOf(i);
  return s[r + e] || void 0;
}
function ft(t) {
  let e = c(t);
  return fi(e) ? e : e?.$el;
}
function _0(...t) {
  console.warn("[Flux]", ...t);
}
function Fa(t, e, n = !1) {
  let s = R0(t), i = e.compareDocumentPosition(t), r;
  i && Node.DOCUMENT_POSITION_PRECEDING || n ? r = s.firstChild() : r = s.lastChild(), (r !== null ? r : t).focus();
}
function R0(t) {
  return document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
}
class z0 {
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
var pu = new z0(), P0 = !globalThis.document;
function gu(t, e, n) {
  let s = ee([]);
  yn(() => {
    document.addEventListener("pointerdown", i);
  }), rs(() => {
    document.removeEventListener("pointerdown", i);
  });
  function i(r) {
    c(e) && !c(s).some((a) => a.contains(r.target)) && n(r);
  }
  $r(() => {
    let r = [];
    (Array.isArray(t) ? t : [t]).forEach((a) => {
      let l = ft(a);
      l && r.push(l);
    }), s.value = r;
  });
}
function af(t, e, n) {
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
  Ou(a);
}
var H0 = 0;
function W0(t = !1) {
  let e = ee(`focus-trap-${++H0}`), n = ee(!1);
  return yn(() => pu.add(c(e), (s) => n.value = s, t)), rs(() => pu.remove(c(e))), n;
}
function U0(t, e) {
  Oe(t, (n, s, i) => {
    if (!ft(t) || c(e)) return;
    let r = document.activeElement;
    i(() => {
      requestAnimationFrame(() => r?.focus());
    });
  });
}
function q0(t, e = {}) {
  if (P0) return;
  let { disable: n = ee(!1), disableReturn: s = ee(!1), attachTo: i = null } = e, r = W0(!n);
  U0(t, s), Oe(t, (a, l, o) => {
    let u = ft(t), d = i || document;
    r.value && u && document.activeElement && !u.contains(document.activeElement) && !u.querySelector("[autofocus]") && Fa(u, document.activeElement, !0);
    function f(m) {
      if (!r.value || !u) return;
      let v = m.target || document.body;
      u.contains(v) || (m.preventDefault(), m.stopImmediatePropagation(), Fa(u, v));
    }
    function h(m) {
      if (!r.value || !u) return;
      (!m.relatedTarget || m.relatedTarget === document.body) && (m.preventDefault(), u.focus());
      let v = m.target || document.body;
      u.contains(v) || Fa(u, v);
    }
    if (d.addEventListener("focusin", f, { capture: !0 }), d.addEventListener("focusout", h, { capture: !0 }), u) {
      let m = ts(u), v = m.findIndex((T) => T.classList.contains("is-active")), C = m.findIndex((T) => !T.hasAttribute("aria-disabled")), M = m[0];
      v > -1 && (M = m[v]), C > -1 && (M = m[C]), M && M.focus();
    }
    o(() => {
      d.removeEventListener("focusin", f), d.removeEventListener("focusout", h);
    });
  }, { immediate: !0 }), Oe(() => n, () => {
    let a = ft(t);
    if (r.value = !n, n || !a) return;
    let l = ts(a);
    l.includes(document.activeElement) || l[0]?.focus();
  }, { immediate: !0 });
}
function j0(t, { cycle: e = !0, direction: n = "bidirectional" } = {}) {
  af(t, () => i(s(), !1));
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
          G0(a, l, o, i);
          break;
        case "horizontal":
        case "vertical":
          Z0(a, l, e, n, o, i);
          break;
      }
  }
  Oe(t, (a, l, o) => {
    let u = ft(t);
    u && (u.addEventListener("keydown", r), i(s(), !1), o(() => u.removeEventListener("keydown", r)));
  }, { immediate: !0 });
}
function G0(t, e, n, s) {
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
  let r = D0(e, document.activeElement, i);
  r && s(n.indexOf(r)), t.preventDefault();
}
function Z0(t, e, n, s, i, r) {
  let a;
  if (t.key === (s === "horizontal" ? "ArrowLeft" : "ArrowUp")) a = -1;
  else if (t.key === (s === "horizontal" ? "ArrowRight" : "ArrowDown")) a = 1;
  else return;
  let l = N0(e, a);
  l ? r(i.indexOf(l)) : n && r(a === 1 ? 0 : i.length - 1), t.preventDefault();
}
const Y0 = "basePane", J0 = "basePaneLoader", K0 = "basePaneStructure basePane", Q0 = "basePaneElement", X0 = "form", e1 = "paneHeader";
var Wr = { basePane: Y0, basePaneLoader: J0, basePaneStructure: K0, basePaneElement: Q0, form: X0, paneHeader: e1 };
const { basePane: bn } = Wr, t1 = "icon", n1 = "fontAwesomeIcon icon", s1 = "materialSymbolIcon icon", i1 = `iconBoxed ${bn}`, r1 = `iconBoxedDefault iconBoxed ${bn}`, a1 = `iconBoxedColored iconBoxed ${bn}`, l1 = `iconBoxedGray iconBoxedColored iconBoxed ${bn}`, o1 = `iconBoxedPrimary iconBoxedColored iconBoxed ${bn}`, u1 = `iconBoxedDanger iconBoxedColored iconBoxed ${bn}`, c1 = `iconBoxedInfo iconBoxedColored iconBoxed ${bn}`, d1 = `iconBoxedSuccess iconBoxedColored iconBoxed ${bn}`, f1 = `iconBoxedWarning iconBoxedColored iconBoxed ${bn}`;
var Aa = { icon: t1, fontAwesomeIcon: n1, materialSymbolIcon: s1, iconBoxed: i1, iconBoxedDefault: r1, iconBoxedColored: a1, iconBoxedGray: l1, iconBoxedPrimary: o1, iconBoxedDanger: u1, iconBoxedInfo: c1, iconBoxedSuccess: d1, iconBoxedWarning: f1 };
const h1 = ["viewBox"], m1 = ["d"];
var rt = /* @__PURE__ */ U({
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
      const r = Wc[t.name];
      return r ? {
        width: r[0],
        height: r[1],
        paths: Array.isArray(r[4]) ? r[4] : [r[4]],
        scale: Math.max(1, r[0] / 512)
      } : (_0(`Unknown icon: ${t.name}`), null);
    }), i = (r) => n("click", r);
    return (r, a) => s.value ? (g(), N("svg", {
      key: 0,
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: k(c(Aa).fontAwesomeIcon),
      style: We({
        fontSize: t.size && `${t.size}px`,
        scale: s.value.scale > 1 ? s.value.scale : void 0
      }),
      focusable: "false",
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, [
      (g(!0), N(fe, null, Ze(s.value.paths, (l) => (g(), N("path", {
        d: l,
        fill: "currentColor"
      }, null, 8, m1))), 256))
    ], 14, h1)) : t.name ? (g(), N("i", {
      key: 1,
      class: k(c(Aa).materialSymbolIcon),
      style: We({
        fontSize: t.size && `${t.size}px`
      }),
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, ce(t.name), 7)) : (g(), N("i", {
      key: 2,
      class: k(c(Aa).icon)
    }, null, 2));
  }
});
const p1 = ["href", "rel", "target"];
var lf = /* @__PURE__ */ U({
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
      const a = rh("router-link");
      return t.componentType === "route" ? (g(), R(a, It({ key: 0 }, i.$attrs, {
        rel: t.rel,
        target: t.target,
        to: t.to,
        onClick: r[0] || (r[0] = (l) => s(l)),
        onMouseenter: r[1] || (r[1] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[2] || (r[2] = (l) => i.$emit("mouseleave", l))
      }), {
        default: q(() => [
          le(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["rel", "target", "to"])) : t.componentType === "link" ? (g(), N("a", It({ key: 1 }, i.$attrs, {
        href: t.href,
        rel: t.rel,
        target: t.target,
        onClick: r[3] || (r[3] = (l) => s(l)),
        onMouseenter: r[4] || (r[4] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[5] || (r[5] = (l) => i.$emit("mouseleave", l))
      }), [
        le(i.$slots, "default")
      ], 16, p1)) : t.componentType === "button" ? (g(), N("button", It({ key: 2 }, i.$attrs, {
        onClick: r[6] || (r[6] = (l) => s(l)),
        onMouseenter: r[7] || (r[7] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[8] || (r[8] = (l) => i.$emit("mouseleave", l))
      }), [
        le(i.$slots, "default")
      ], 16)) : (g(), N("div", It({ key: 3 }, i.$attrs, {
        onClick: s,
        onMouseenter: r[9] || (r[9] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[10] || (r[10] = (l) => i.$emit("mouseleave", l))
      }), [
        le(i.$slots, "default")
      ], 16));
    };
  }
});
const g1 = "spinner", v1 = "spinnerTrack", y1 = "spinnerEffect", b1 = "spinnerValue";
var Pi = { spinner: g1, spinnerTrack: v1, spinnerEffect: y1, spinnerValue: b1 }, _n = /* @__PURE__ */ U({
  __name: "FluxSpinner",
  props: {
    size: {}
  },
  setup(t) {
    return (e, n) => (g(), N("svg", {
      class: k(c(Pi).spinner),
      viewBox: "0 0 24 24",
      style: We({
        fontSize: t.size && `${t.size}px`
      })
    }, [
      re("circle", {
        class: k(c(Pi).spinnerTrack),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4"
      }, null, 2),
      re("circle", {
        class: k(c(Pi).spinnerEffect),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2),
      re("circle", {
        class: k(c(Pi).spinnerValue),
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
const k1 = "button", w1 = "isSmall", I1 = "isMedium", S1 = "isLarge", C1 = "isXl", T1 = "isFilled", x1 = "buttonIcon", E1 = "buttonLabel";
var Ln = { button: k1, isSmall: w1, isMedium: I1, isLarge: S1, isXl: C1, isFilled: T1, buttonIcon: x1, buttonLabel: E1 };
const of = ["default", "after", "before", "iconLeading", "iconTrailing", "label"];
var Ur = /* @__PURE__ */ U({
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
    return (l, o) => (g(), R(lf, {
      "component-type": t.type,
      class: k(c(xt)(
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
      default: q(() => [
        le(l.$slots, "before"),
        le(l.$slots, "iconLeading", {}, () => [
          t.isLoading && (t.iconLeading || !t.iconTrailing) ? (g(), R(_n, {
            key: 0,
            size: 20
          })) : t.iconLeading ? (g(), R(rt, {
            key: 1,
            class: k(t.cssClassIcon),
            name: t.iconLeading
          }, null, 8, ["class", "name"])) : Q("", !0)
        ]),
        le(l.$slots, "label", {}, () => [
          t.label ? (g(), N("span", {
            key: 0,
            class: k(t.cssClassLabel)
          }, ce(t.label), 3)) : Q("", !0)
        ]),
        le(l.$slots, "iconTrailing", {}, () => [
          t.isLoading && !t.iconLeading && t.iconTrailing ? (g(), R(_n, {
            key: 0,
            size: 20
          })) : t.iconTrailing ? (g(), R(rt, {
            key: 1,
            class: k(t.cssClassIcon),
            name: t.iconTrailing
          }, null, 8, ["class", "name"])) : Q("", !0)
        ]),
        le(l.$slots, "after")
      ]),
      _: 3
    }, 8, ["component-type", "class", "type", "aria-disabled", "disabled", "tabindex", "href", "rel", "target", "to"]));
  }
});
const { button: F1, buttonIcon: A1, buttonLabel: $1 } = Ln, L1 = `action ${F1}`, M1 = "spinner", D1 = `actionIcon ${A1}`, O1 = "isDestructive", B1 = `actionLabel ${$1}`, V1 = "actionBar", N1 = "separator", _1 = "formInput", R1 = "basePaneStructure", z1 = "paneHeader", P1 = "actionPane", H1 = "actionPaneGrid", W1 = "actionPaneBody", U1 = "paneBody";
var Hi = { action: L1, spinner: M1, actionIcon: D1, isDestructive: O1, actionLabel: B1, actionBar: V1, separator: N1, formInput: _1, basePaneStructure: R1, paneHeader: z1, actionPane: P1, actionPaneGrid: H1, actionPaneBody: W1, paneBody: U1 }, q1 = /* @__PURE__ */ U({
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
    return (e, n) => (g(), R(Ur, It({ disabled: t.disabled, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to, type: t.type }, {
      "css-class": c(Hi).action,
      "css-class-icon": c(Hi).actionIcon,
      "css-class-label": c(Hi).actionLabel,
      class: t.isDestructive && c(Hi).isDestructive,
      "icon-leading": t.icon,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), null, 16, ["css-class", "css-class-icon", "css-class-label", "class", "icon-leading"]));
  }
});
function j1(t, e, n, s) {
  const i = ye(() => {
    const l = c(t);
    return Array.isArray(l) ? l : [l];
  }), r = ye(() => {
    const l = [], o = c(s)?.trim().toLowerCase(), u = c(n).filter((d) => !("value" in d) || !o || d.label.toLowerCase().includes(o)).filter((d) => !("value" in d) || !e || !c(a).find((f) => f.value === d.value));
    if (u.length === 0)
      return [];
    if (!u.find(Wa))
      return [[null, u]];
    for (let d = 0; d < u.length; ) {
      const f = u[d];
      if (Xs(f)) {
        ++d, l.push([null, [f]]);
        continue;
      }
      const h = [];
      for (++d; d <= u.length; ++d) {
        const m = u[d];
        if (Wa(m) || d === u.length) {
          h.length > 0 && l.push([f, h]);
          break;
        }
        h.push(m);
      }
    }
    return l;
  }), a = ye(() => c(i).map((l) => c(n).find((o) => Xs(o) && o.value === l)).filter(Xs));
  return {
    groups: r,
    selected: a,
    values: i
  };
}
const G1 = (t, e) => {
  if (!(t in Do))
    return t;
  let n = Do[t];
  for (let s in e)
    n = n.replaceAll(`{${s}}`, e[s].toString());
  return n;
};
var Ii = () => {
  const t = Kt()?.proxy;
  return !t || !Z1(t) ? G1 : t.$t;
};
function Z1(t) {
  return !!t && "$t" in t;
}
const { button: Si, buttonIcon: Ci, buttonLabel: Ti } = Ln, Y1 = `primaryButton ${Si}`, J1 = "spinner", K1 = `primaryButtonIcon ${Ci}`, Q1 = `primaryButtonLabel ${Ti}`, X1 = `secondaryButton ${Si}`, eg = `secondaryButtonIcon ${Ci}`, tg = `secondaryButtonLabel ${Ti}`, ng = `destructiveButton ${Si}`, sg = `destructiveButtonIcon ${Ci}`, ig = `destructiveButtonLabel ${Ti}`, rg = `linkButton ${Si}`, ag = `linkButtonIcon ${Ci}`, lg = "icon", og = `linkButtonLabel ${Ti}`, ug = `publishButton primaryButton ${Si}`, cg = `publishButtonIcon primaryButtonIcon ${Ci}`, dg = `publishButtonLabel primaryButtonLabel ${Ti}`, fg = "publishButtonAnimation", hg = "isDone", mg = "publishButtonAnimationArrow", pg = "publishArrowOut", gg = "publishButtonAnimationCheck", vg = "publishButtonAnimationCircle", yg = "isIdle", bg = "isLoading", kg = "publishArrowIn", wg = "publishButtonCloud", Ig = "publish", Sg = "buttonGroup", Cg = "button";
var ns = { primaryButton: Y1, spinner: J1, primaryButtonIcon: K1, primaryButtonLabel: Q1, secondaryButton: X1, secondaryButtonIcon: eg, secondaryButtonLabel: tg, destructiveButton: ng, destructiveButtonIcon: sg, destructiveButtonLabel: ig, linkButton: rg, linkButtonIcon: ag, icon: lg, linkButtonLabel: og, publishButton: ug, publishButtonIcon: cg, publishButtonLabel: dg, publishButtonAnimation: fg, isDone: hg, publishButtonAnimationArrow: mg, publishArrowOut: pg, publishButtonAnimationCheck: gg, publishButtonAnimationCircle: vg, isIdle: yg, isLoading: bg, publishArrowIn: kg, publishButtonCloud: wg, publish: Ig, buttonGroup: Sg, button: Cg }, Tg = /* @__PURE__ */ U({
  __name: "FluxButtonGroup",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(ns).buttonGroup)
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const { basePaneStructure: xi, basePaneElement: _l, basePaneLoader: xg } = Wr, Eg = `pane ${xi}`, Fg = `paneDefault pane ${xi}`, Ag = `paneFlat pane ${xi}`, $g = `paneWell pane ${xi}`, Lg = `paneHeader ${_l}`, Mg = "basePaneElement", Dg = `paneBody ${_l}`, Og = "paneHeaderCaption", Bg = "paneHeaderIcon", Vg = `paneFooter ${_l}`, Ng = `paneLoader ${xg}`, _g = "paneTag", Rg = "paneMedia", zg = "paneMediaInset paneMedia", Pg = "paneMediaImage", Hg = `paneDeck paneDefault pane ${xi}`, Wg = "baseAutoGrid", Ug = "paneGroup", qg = "paneIllustration", jg = "paneIllustrationContent", Gg = "paneIllustrationContentControlled paneIllustrationContent", Zg = "paneIllustrationMagic", Yg = "paneIllustrationMasked paneIllustration", Jg = "iconBoxed";
var jt = { pane: Eg, paneDefault: Fg, paneFlat: Ag, paneWell: $g, paneHeader: Lg, basePaneElement: Mg, paneBody: Dg, paneHeaderCaption: Og, paneHeaderIcon: Bg, paneFooter: Vg, paneLoader: Ng, paneTag: _g, paneMedia: Rg, paneMediaInset: zg, paneMediaImage: Pg, paneDeck: Hg, baseAutoGrid: Wg, paneGroup: Ug, paneIllustration: qg, paneIllustrationContent: jg, paneIllustrationContentControlled: Gg, paneIllustrationMagic: Zg, paneIllustrationMasked: Yg, iconBoxed: Jg }, qr = /* @__PURE__ */ U({
  __name: "FluxPane",
  props: {
    isLoading: { type: Boolean },
    tag: {},
    variant: { default: "default" }
  },
  setup(t) {
    const e = {
      default: jt.paneDefault,
      flat: jt.paneFlat,
      well: jt.paneWell
    };
    return (n, s) => (g(), N("div", {
      class: k(e[t.variant])
    }, [
      le(n.$slots, "default"),
      t.isLoading ? le(n.$slots, "loader", { key: 0 }, () => [
        re("div", {
          class: k(c(jt).paneLoader)
        }, [
          B(_n)
        ], 2)
      ]) : Q("", !0),
      t.tag ? (g(), N("div", {
        key: 1,
        class: k(c(jt).paneTag)
      }, ce(t.tag), 3)) : Q("", !0)
    ], 2));
  }
}), Es = /* @__PURE__ */ U({
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
    return (e, n) => (g(), R(Ur, It({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(ns).secondaryButton,
      "css-class-icon": c(ns).secondaryButtonIcon,
      "css-class-label": c(ns).secondaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), wl({ _: 2 }, [
      Ze(c(of), (s) => ({
        name: s,
        fn: q(() => [
          le(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
});
const Kg = "baseAutoGrid";
var Qg = { baseAutoGrid: Kg };
const { baseAutoGrid: Xg } = Qg, ev = "aspectRatio", tv = `autoGrid ${Xg}`, nv = "container", sv = "spacer", iv = "stack", rv = "isCentered", av = "isFill", lv = "isWrapping", ov = "stackHorizontal stack", uv = "stackVertical stack";
var ms = { aspectRatio: ev, autoGrid: tv, container: nv, spacer: sv, stack: iv, isCentered: rv, isFill: av, isWrapping: lv, stackHorizontal: ov, stackVertical: uv }, jr = /* @__PURE__ */ U({
  __name: "FluxSpacer",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(ms).spacer)
    }, null, 2));
  }
}), uf = /* @__PURE__ */ U({
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
    return (e, n) => (g(), R(kl(t.tag ?? "div"), {
      class: k(c(xt)(
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
      default: q(() => [
        le(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), cv = /* @__PURE__ */ U({
  __name: "FluxButtonStack",
  props: {
    direction: { default: "horizontal" },
    gap: { default: 9 },
    isFill: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), R(uf, {
      direction: t.direction,
      gap: t.gap,
      "is-fill": t.isFill
    }, {
      default: q(() => [
        le(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["direction", "gap", "is-fill"]));
  }
}), hi = /* @__PURE__ */ U({
  __name: "FluxPaneBody",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(jt).paneBody)
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const dv = "breakthroughTransitionEnterActive", fv = "breakthroughTransitionBackEnterActive", hv = "breakthroughTransitionLeaveActive", mv = "breakthroughTransitionBackLeaveActive", pv = "breakthroughTransitionEnterFrom", gv = "breakthroughTransitionBackLeaveTo", vv = "breakthroughTransitionLeaveTo", yv = "breakthroughTransitionBackEnterFrom", bv = "fadeTransitionEnterActive", kv = "fadeTransitionLeaveActive", wv = "fadeTransitionEnterFrom", Iv = "fadeTransitionLeaveTo", Sv = "fadeTransitionEnterTo", Cv = "fadeTransitionLeaveFrom", Tv = "routeTransitionEnterActive", xv = "routeTransitionBackEnterActive", Ev = "routeTransitionLeaveActive", Fv = "routeTransitionBackLeaveActive", Av = "routeTransitionEnterFrom", $v = "routeTransitionBackLeaveTo", Lv = "routeTransitionLeaveTo", Mv = "routeTransitionBackEnterFrom", Dv = "tooltipTransitionEnterActive", Ov = "tooltipTransitionLeaveActive", Bv = "tooltipTransitionEnterFrom", Vv = "tooltipTransitionLeaveTo", Nv = "verticalWindowTransitionEnterActive", _v = "verticalWindowTransitionBackEnterActive", Rv = "verticalWindowTransitionLeaveActive", zv = "verticalWindowTransitionBackLeaveActive", Pv = "verticalWindowTransitionBackLeaveTo", Hv = "verticalWindowTransitionEnterFrom", Wv = "verticalWindowTransitionBackEnterFrom", Uv = "verticalWindowTransitionLeaveTo", qv = "windowTransitionEnterActive", jv = "windowTransitionBackEnterActive", Gv = "windowTransitionLeaveActive", Zv = "windowTransitionBackLeaveActive", Yv = "windowTransitionBackLeaveTo", Jv = "windowTransitionEnterFrom", Kv = "windowTransitionBackEnterFrom", Qv = "windowTransitionLeaveTo";
var Ut = { breakthroughTransitionEnterActive: dv, breakthroughTransitionBackEnterActive: fv, breakthroughTransitionLeaveActive: hv, breakthroughTransitionBackLeaveActive: mv, breakthroughTransitionEnterFrom: pv, breakthroughTransitionBackLeaveTo: gv, breakthroughTransitionLeaveTo: vv, breakthroughTransitionBackEnterFrom: yv, fadeTransitionEnterActive: bv, fadeTransitionLeaveActive: kv, fadeTransitionEnterFrom: wv, fadeTransitionLeaveTo: Iv, fadeTransitionEnterTo: Sv, fadeTransitionLeaveFrom: Cv, routeTransitionEnterActive: Tv, routeTransitionBackEnterActive: xv, routeTransitionLeaveActive: Ev, routeTransitionBackLeaveActive: Fv, routeTransitionEnterFrom: Av, routeTransitionBackLeaveTo: $v, routeTransitionLeaveTo: Lv, routeTransitionBackEnterFrom: Mv, tooltipTransitionEnterActive: Dv, tooltipTransitionLeaveActive: Ov, tooltipTransitionEnterFrom: Bv, tooltipTransitionLeaveTo: Vv, verticalWindowTransitionEnterActive: Nv, verticalWindowTransitionBackEnterActive: _v, verticalWindowTransitionLeaveActive: Rv, verticalWindowTransitionBackLeaveActive: zv, verticalWindowTransitionBackLeaveTo: Pv, verticalWindowTransitionEnterFrom: Hv, verticalWindowTransitionBackEnterFrom: Wv, verticalWindowTransitionLeaveTo: Uv, windowTransitionEnterActive: qv, windowTransitionBackEnterActive: jv, windowTransitionLeaveActive: Gv, windowTransitionBackLeaveActive: Zv, windowTransitionBackLeaveTo: Yv, windowTransitionEnterFrom: Jv, windowTransitionBackEnterFrom: Kv, windowTransitionLeaveTo: Qv }, ll = /* @__PURE__ */ U({
  __name: "FluxFadeTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (g(), R(Vn, {
      mode: t.mode,
      "enter-active-class": c(Ut).fadeTransitionEnterActive,
      "enter-from-class": c(Ut).fadeTransitionEnterFrom,
      "enter-to-class": c(Ut).fadeTransitionEnterTo,
      "leave-active-class": c(Ut).fadeTransitionLeaveActive,
      "leave-from-class": c(Ut).fadeTransitionLeaveFrom,
      "leave-to-class": c(Ut).fadeTransitionLeaveTo
    }, {
      default: q(() => [
        le(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"]));
  }
});
const Xv = "overlayView", ey = "overlayProvider overlayView", ty = "overlayShade overlayView", ny = "overlay", sy = "overlayTransitionLeaveActive", iy = "basePaneStructure", ry = "paneFooter", ay = "isCurrent", ly = "overlaySmall overlay", oy = "overlayMedium overlay", uy = "overlayLarge overlay", cy = "slideOver overlay", dy = "paneHeader", fy = "tabs", hy = "tabBar", my = "paneHeaderCaption", py = "overlayTransitionEnterActive", gy = "overlayTransitionEnterFrom", vy = "overlayTransitionLeaveTo", yy = "slideOverTransitionEnterActive", by = "slideOverTransitionLeaveActive", ky = "slideOverTransitionEnterFrom", wy = "slideOverTransitionLeaveTo";
var Lt = { overlayView: Xv, overlayProvider: ey, overlayShade: ty, overlay: ny, overlayTransitionLeaveActive: sy, basePaneStructure: iy, paneFooter: ry, isCurrent: ay, overlaySmall: ly, overlayMedium: oy, overlayLarge: uy, slideOver: cy, paneHeader: dy, tabs: fy, tabBar: hy, paneHeaderCaption: my, overlayTransitionEnterActive: py, overlayTransitionEnterFrom: gy, overlayTransitionLeaveTo: vy, slideOverTransitionEnterActive: yy, slideOverTransitionLeaveActive: by, slideOverTransitionEnterFrom: ky, slideOverTransitionLeaveTo: wy }, Iy = /* @__PURE__ */ U({
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
      default: q(() => [
        le(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
}), Sy = /* @__PURE__ */ U({
  __name: "FluxTooltipTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (g(), R(Vn, {
      mode: t.mode,
      "enter-active-class": c(Ut).tooltipTransitionEnterActive,
      "enter-from-class": c(Ut).tooltipTransitionEnterFrom,
      "leave-active-class": c(Ut).tooltipTransitionLeaveActive,
      "leave-to-class": c(Ut).tooltipTransitionLeaveTo
    }, {
      default: q(() => [
        le(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
});
const Cy = "badge", Ty = "spinner", xy = "badgeClose", Ey = "icon", Fy = "badgeDot", Ay = "badgeIcon", $y = "badgeLabel", Ly = "badgeGray badge", My = "badgePrimary badge", Dy = "badgeDanger badge", Oy = "badgeInfo badge", By = "badgeSuccess badge", Vy = "badgeWarning badge", Ny = "tag badge", _y = "tagClose badgeClose", Ry = "tagDot badgeDot", zy = "tagIcon badgeIcon", Py = "tagLabel badgeLabel", Hy = "tagGray badgeGray badge tag badge", Wy = "tagPrimary badgePrimary badge tag badge", Uy = "tagDanger badgeDanger badge tag badge", qy = "tagInfo badgeInfo badge tag badge", jy = "tagSuccess badgeSuccess badge tag badge", Gy = "tagWarning badgeWarning badge tag badge";
var At = { badge: Cy, spinner: Ty, badgeClose: xy, icon: Ey, badgeDot: Fy, badgeIcon: Ay, badgeLabel: $y, badgeGray: Ly, badgePrimary: My, badgeDanger: Dy, badgeInfo: Oy, badgeSuccess: By, badgeWarning: Vy, tag: Ny, tagClose: _y, tagDot: Ry, tagIcon: zy, tagLabel: Py, tagGray: Hy, tagPrimary: Wy, tagDanger: Uy, tagInfo: qy, tagSuccess: jy, tagWarning: Gy }, Zy = /* @__PURE__ */ U({
  __name: "Anchor",
  props: {
    tagName: {}
  },
  setup(t) {
    return (e, n) => (g(), R(kl(t.tagName), null, {
      default: q(() => [
        le(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Yy = /* @__PURE__ */ U({
  __name: "AnchorPopup",
  props: {
    anchor: {},
    direction: { default: "vertical" },
    margin: { default: 12 },
    position: {},
    useAnchorWidth: { type: Boolean }
  },
  setup(t) {
    const e = ee(), n = un("popup"), s = Jt({
      x: 0,
      y: 0,
      width: null
    });
    yn(() => {
      window.addEventListener("resize", a, { passive: !0 }), window.addEventListener("scroll", l, { capture: !0, passive: !0 });
    }), rs(() => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", l);
    }), af(n, () => {
      i();
    }, { childList: !0, subtree: !0 });
    function i() {
      const o = c(e), u = c(n);
      if (!o || !u)
        return;
      const { x: d, y: f, height: h, width: m } = o.getBoundingClientRect(), { height: v, width: C } = u.getBoundingClientRect();
      let M, T;
      switch (t.position) {
        case "top":
          M = d + m / 2 - C / 2, T = f - v - t.margin;
          break;
        case "top-left":
          M = d, T = f - v - t.margin;
          break;
        case "top-right":
          M = d - C + m, T = f - v - t.margin;
          break;
        case "left":
          M = d - C - t.margin, T = f + h / 2 - v / 2;
          break;
        case "left-top":
          M = d - C - t.margin, T = f;
          break;
        case "left-bottom":
          M = d - C - t.margin, T = f + h - v;
          break;
        case "right":
          M = d + m + t.margin, T = f + h / 2 - v / 2;
          break;
        case "right-top":
          M = d + m + t.margin, T = f;
          break;
        case "right-bottom":
          M = d + m + t.margin, T = f + h - v;
          break;
        case "bottom":
          M = d + m / 2 - C / 2, T = f + h + t.margin;
          break;
        case "bottom-left":
          M = d, T = f + h + t.margin;
          break;
        case "bottom-right":
          M = d - C + m, T = f + h + t.margin;
          break;
        default:
          t.direction === "horizontal" ? (M = d + m + t.margin, T = f + h / 2 - v / 2, M + C > innerWidth && (M = d - C - t.margin)) : (M = d + m / 2 - C / 2, T = f + h + t.margin, T + v + t.margin > innerHeight && (T = f - v - t.margin)), (T < 0 || T + v > innerHeight) && (T = innerHeight / 2 - v / 2);
          break;
      }
      s.x = M, s.y = T;
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
    return $r(() => {
      !t.anchor || !fi(t.anchor) && !t.anchor.$el || (e.value = fi(t.anchor) ? t.anchor : t.anchor.$el, requestAnimationFrame(() => {
        requestAnimationFrame(r), requestAnimationFrame(i);
      }));
    }), (o, u) => (g(), N("div", {
      ref: "popup",
      style: We({
        "--x": `${s.x}px`,
        "--y": `${s.y}px`,
        "--width": s.width ? `${s.width}px` : void 0
      })
    }, [
      le(o.$slots, "default")
    ], 4));
  }
});
const { button: Jy, buttonIcon: cf, buttonLabel: Ky } = Ln, Qy = "menu", Xy = "menuNormal menu", e2 = "menuLarge menu", t2 = "menuGroup", n2 = "menuGroupHorizontal menuGroup", s2 = "menuGroupVertical menuGroup", i2 = `menuItem ${Jy}`, r2 = `menuItemIcon ${cf}`, a2 = `menuItemLabel ${Ky}`, l2 = "menuItemActive", o2 = "menuItemDestructive", u2 = "menuItemHighlighted", c2 = "menuItemIndented", d2 = `menuItemSelectableIcon ${cf}`, f2 = "menuItemSelected", h2 = "menuItemCommand", m2 = "menuItemCommandIcon", p2 = "icon", g2 = "menuItemImage", v2 = "menuTitle", y2 = "menuSubHeader", b2 = "menuSubHeaderIcon", k2 = "menuSubHeaderLabel", w2 = "basePane", I2 = "divider", S2 = "separator", C2 = "expandableBody";
var Pe = { menu: Qy, menuNormal: Xy, menuLarge: e2, menuGroup: t2, menuGroupHorizontal: n2, menuGroupVertical: s2, menuItem: i2, menuItemIcon: r2, menuItemLabel: a2, menuItemActive: l2, menuItemDestructive: o2, menuItemHighlighted: u2, menuItemIndented: c2, menuItemSelectableIcon: d2, menuItemSelected: f2, menuItemCommand: h2, menuItemCommandIcon: m2, icon: p2, menuItemImage: g2, menuTitle: v2, menuSubHeader: y2, menuSubHeaderIcon: b2, menuSubHeaderLabel: k2, basePane: w2, divider: I2, separator: S2, expandableBody: C2 };
const T2 = ["src", "alt"];
var $a = /* @__PURE__ */ U({
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
    return (e, n) => (g(), R(Ur, It({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(Pe).menuItem,
      "css-class-icon": c(Pe).menuItemIcon,
      "css-class-label": c(Pe).menuItemLabel,
      "is-filled": "",
      role: t.isSelectable ? "menuitemradio" : "menuitem",
      class: {
        [c(Pe).menuItemActive]: t.isActive,
        [c(Pe).menuItemDestructive]: t.isDestructive,
        [c(Pe).menuItemHighlighted]: t.isHighlighted,
        [c(Pe).menuItemIndented]: t.isIndented,
        [c(Pe).menuItemSelected]: t.isSelectable && t.isSelected
      },
      "aria-checked": t.isSelectable ? t.isSelected : void 0,
      tabindex: t.tabindex,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s))
    }), wl({ _: 2 }, [
      t.isSelectable && (!t.iconLeading || t.isSelected) ? {
        name: "iconLeading",
        fn: q(() => [
          B(rt, {
            class: k(c(Pe).menuItemSelectableIcon),
            name: t.isSelected ? "circle-check" : void 0
          }, null, 8, ["class", "name"])
        ]),
        key: "0"
      } : t.imageSrc ? {
        name: "iconLeading",
        fn: q(() => [
          re("img", {
            class: k(c(Pe).menuItemImage),
            src: t.imageSrc,
            alt: t.imageAlt ?? ""
          }, null, 10, T2)
        ]),
        key: "1"
      } : void 0,
      t.command || t.commandIcon || t.commandLoading ? {
        name: "after",
        fn: q(() => [
          t.commandLoading ? (g(), R(_n, {
            key: 0,
            class: k(c(Pe).menuItemCommandIcon),
            size: 16
          }, null, 8, ["class"])) : (g(), N(fe, { key: 1 }, [
            t.command ? (g(), N("kbd", {
              key: 0,
              class: k(c(Pe).menuItemCommand)
            }, ce(t.command), 3)) : Q("", !0),
            t.commandIcon ? (g(), R(rt, {
              key: 1,
              class: k(c(Pe).menuItemCommandIcon),
              name: t.commandIcon
            }, null, 8, ["class", "name"])) : Q("", !0)
          ], 64))
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["css-class", "css-class-icon", "css-class-label", "role", "class", "aria-checked", "tabindex"]));
  }
});
const { basePane: x2 } = Wr, E2 = "formInputGroup formInputEnabled formInput", F2 = "buttonGroup", A2 = "button", $2 = "formInput", L2 = "formSelect formInput", M2 = "formStructureElement", D2 = "form formStructureElement", O2 = "pane", B2 = "formColumn formStructureElement", V2 = "formSection formStructureElement", N2 = "formRow", _2 = "formSectionTitle", R2 = "formField", z2 = "formFieldHeader", P2 = "formFieldLabel", H2 = "formFieldOptional", W2 = "formFieldValue", U2 = "formFieldCounter", q2 = "formFieldAddition", j2 = "formFieldAdditionIcon", G2 = "formFieldAdditionError formFieldAddition", Z2 = "formFieldAdditionHint formFieldAddition", Y2 = "isSecondary", J2 = "formInputDisabled formInput", K2 = "formInputEnabled formInput", Q2 = "formInputIcon", X2 = "formInputIconTrailing formInputIcon", e4 = "formInputIconLeading formInputIcon", t4 = "formInputIconPasswordToggle formInputIconTrailing formInputIcon", n4 = "formInputNative", s4 = "formInputNativeHasIconLeading", i4 = "formInputNativeHasIconTrailing", r4 = "formInputAddition formInput", a4 = "isCondensed", l4 = "secondaryButton", o4 = "formDateInput", u4 = "formDateRangeInput formInput", c4 = "formDateTimeInput", d4 = "inputGroup", f4 = "formTimeInput formDateInput", h4 = "isDisabled", m4 = "isFocused", p4 = "badge", g4 = "formSelectIcon", v4 = "formSelectInput", y4 = "formSelectPlaceholder", b4 = `formSelectPopup ${x2}`, k4 = "menuItem", w4 = "isKeyboardAction", I4 = "isSearchable", S4 = "menuSubHeader", C4 = "formSelectSelected", T4 = "buttonLabel", x4 = "formTextArea", E4 = "formTextAreaDisabled formInputDisabled formInput formTextArea", F4 = "formTextAreaEnabled formInputEnabled formInput formTextArea", A4 = "checkbox", $4 = "checkboxElement", L4 = "checkboxNative", M4 = "icon", D4 = "checkboxLabel", O4 = "quantitySelector", B4 = "quantitySelectorButton", V4 = "quantitySelectorInput formInput", N4 = "pinInput", _4 = "pinInputField", R4 = "pinInputEnabled pinInput", z4 = "pinInputDisabled pinInput", P4 = "toggle", H4 = "isChecked", W4 = "toggleInput", U4 = "isSwitch", q4 = "toggleIcon", j4 = "toggleIconOn toggleIcon", G4 = "toggleIconOff toggleIcon";
var de = { formInputGroup: E2, buttonGroup: F2, button: A2, formInput: $2, formSelect: L2, formStructureElement: M2, form: D2, pane: O2, formColumn: B2, formSection: V2, formRow: N2, formSectionTitle: _2, formField: R2, formFieldHeader: z2, formFieldLabel: P2, formFieldOptional: H2, formFieldValue: W2, formFieldCounter: U2, formFieldAddition: q2, formFieldAdditionIcon: j2, formFieldAdditionError: G2, formFieldAdditionHint: Z2, isSecondary: Y2, formInputDisabled: J2, formInputEnabled: K2, formInputIcon: Q2, formInputIconTrailing: X2, formInputIconLeading: e4, formInputIconPasswordToggle: t4, formInputNative: n4, formInputNativeHasIconLeading: s4, formInputNativeHasIconTrailing: i4, formInputAddition: r4, isCondensed: a4, secondaryButton: l4, formDateInput: o4, formDateRangeInput: u4, formDateTimeInput: c4, inputGroup: d4, formTimeInput: f4, isDisabled: h4, isFocused: m4, badge: p4, formSelectIcon: g4, formSelectInput: v4, formSelectPlaceholder: y4, formSelectPopup: b4, menuItem: k4, isKeyboardAction: w4, isSearchable: I4, menuSubHeader: S4, formSelectSelected: C4, buttonLabel: T4, formTextArea: x4, formTextAreaDisabled: E4, formTextAreaEnabled: F4, checkbox: A4, checkboxElement: $4, checkboxNative: L4, icon: M4, checkboxLabel: D4, quantitySelector: O4, quantitySelectorButton: B4, quantitySelectorInput: V4, pinInput: N4, pinInputField: _4, pinInputEnabled: R4, pinInputDisabled: z4, toggle: P4, isChecked: H4, toggleInput: W4, isSwitch: U4, toggleIcon: q4, toggleIconOn: j4, toggleIconOff: G4 };
const Z4 = ["aria-disabled"], Y4 = ["id", "autocomplete", "autofocus", "aria-disabled", "disabled", "max", "maxlength", "min", "placeholder", "readonly", "step", "type", "value"];
var ni = /* @__PURE__ */ U({
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
    const s = n, i = ct(t, "modelValue"), r = Fs(pn(() => t.disabled)), a = un("input"), { id: l } = Al(), o = ee(null), u = ee(t.type);
    function d() {
      ft(a)?.blur();
    }
    function f() {
      ft(a)?.focus();
    }
    function h() {
      t.type === "password" && (u.value = c(u) === "password" ? "text" : "password");
    }
    function m() {
      s("blur");
    }
    function v() {
      s("focus");
    }
    function C(T) {
      const _ = T.target.value;
      switch (t.type) {
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          const I = se.fromISO(_);
          if (!I.isValid)
            return;
          i.value = I;
          break;
        case "number":
          i.value = Number(_);
          break;
        default:
          i.value = _;
          break;
      }
    }
    function M(T) {
      ["date", "datetime-local", "month", "week"].includes(t.type) && T.key === " " && (s("showPicker"), T.preventDefault());
    }
    return Oe([i, () => t.type], ([T, _]) => {
      if (!T && T !== 0) {
        o.value = null;
        return;
      }
      if (se.isDateTime(T)) {
        const I = T.toISO();
        switch (_) {
          case "date":
            o.value = I.substring(0, 10);
            break;
          case "datetime-local":
            o.value = I.substring(0, 16);
            break;
          case "time":
            o.value = I.substring(11, 16);
            break;
          default:
            o.value = I;
            break;
        }
        return;
      }
      o.value = T.toString();
    }, { immediate: !0 }), Oe([a, () => t.pattern, o], ([T, _, I], W, x) => {
      if (!T || !_)
        return;
      const $ = Sm[_](T);
      I && ($.value = I, i.value = $.value), x(() => $.destroy());
    }, { immediate: !0 }), Oe(() => t.type, (T) => u.value = T), e({
      blur: d,
      focus: f
    }), (T, _) => (g(), N("div", {
      class: k(c(xt)(
        c(r) ? c(de).formInputDisabled : c(de).formInputEnabled,
        t.isCondensed && c(de).isCondensed,
        t.isSecondary && c(de).isSecondary
      )),
      "aria-disabled": c(r) ? !0 : void 0
    }, [
      re("input", {
        ref: "input",
        class: k(c(xt)(
          c(de).formInputNative,
          (!!t.iconTrailing || t.type === "password") && c(de).formInputNativeHasIconTrailing,
          !!t.iconLeading && c(de).formInputNativeHasIconLeading
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
        onBlur: _[0] || (_[0] = (I) => m()),
        onFocus: _[1] || (_[1] = (I) => v()),
        onInput: C,
        onKeydown: M
      }, null, 42, Y4),
      t.iconLeading ? (g(), R(rt, {
        key: 0,
        class: k(c(de).formInputIconLeading),
        name: t.iconLeading,
        size: 18
      }, null, 8, ["class", "name"])) : Q("", !0),
      t.type === "password" ? (g(), R(rt, {
        key: 1,
        class: k(c(de).formInputIconPasswordToggle),
        name: u.value === "password" ? "eye" : "eye-slash",
        size: 18,
        onClick: _[2] || (_[2] = (I) => h())
      }, null, 8, ["class", "name"])) : t.iconTrailing ? (g(), R(rt, {
        key: 2,
        class: k(c(de).formInputIconTrailing),
        name: t.iconTrailing,
        size: 18
      }, null, 8, ["class", "name"])) : Q("", !0)
    ], 10, Z4));
  }
}), J4 = /* @__PURE__ */ U({
  __name: "FluxMenuGroup",
  props: {
    isHorizontal: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(t.isHorizontal ? c(Pe).menuGroupHorizontal : c(Pe).menuGroupVertical),
      role: "group"
    }, [
      le(e.$slots, "default")
    ], 2));
  }
}), vu = /* @__PURE__ */ U({
  __name: "FluxMenuSubHeader",
  props: {
    iconLeading: {},
    iconTrailing: {},
    label: {}
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(Pe).menuSubHeader),
      role: "presentation"
    }, [
      t.iconLeading ? (g(), R(rt, {
        key: 0,
        class: k(c(Pe).menuSubHeaderIcon),
        name: t.iconLeading
      }, null, 8, ["class", "name"])) : Q("", !0),
      re("span", {
        class: k(c(Pe).menuSubHeaderLabel)
      }, ce(t.label), 3),
      t.iconTrailing ? (g(), R(rt, {
        key: 1,
        class: k(c(Pe).menuSubHeaderIcon),
        name: t.iconTrailing
      }, null, 8, ["class", "name"])) : Q("", !0)
    ], 2));
  }
}), yu = /* @__PURE__ */ U({
  __name: "FluxMenu",
  props: {
    isLarge: { type: Boolean }
  },
  setup(t) {
    const e = un("element");
    return j0(e, {
      direction: "vertical"
    }), (n, s) => (g(), N("nav", {
      ref: "element",
      class: k(t.isLarge ? c(Pe).menuLarge : c(Pe).menuNormal),
      role: "menu",
      "aria-orientation": "vertical"
    }, [
      le(n.$slots, "default")
    ], 2));
  }
}), K4 = /* @__PURE__ */ U({
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
    return (i, r) => (g(), R(lf, {
      class: k(c(xt)(
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
      default: q(() => [
        t.isLoading ? (g(), R(_n, {
          key: 0,
          class: k(c(At).tagIcon),
          size: 16
        }, null, 8, ["class"])) : t.dot ? (g(), N("span", {
          key: 1,
          class: k(c(At).tagDot)
        }, null, 2)) : t.icon ? (g(), R(rt, {
          key: 2,
          class: k(c(At).tagIcon),
          name: t.icon,
          size: 16
        }, null, 8, ["class", "name"])) : Q("", !0),
        re("span", {
          class: k(c(At).tagLabel)
        }, ce(t.label), 3),
        !t.isClickable && t.isDeletable ? (g(), N("button", {
          key: 3,
          class: k(c(At).tagClose),
          type: "button",
          onClick: r[0] || (r[0] = (a) => s())
        }, [
          B(rt, { name: "xmark" })
        ], 2)) : Q("", !0)
      ]),
      _: 1
    }, 8, ["class", "component-type", "tabindex", "href", "rel", "target", "to"]));
  }
});
const zs = -1;
var Q4 = /* @__PURE__ */ U({
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
    const n = e, s = ct(t, "searchQuery"), i = Fs(pn(() => t.disabled)), { id: r } = Al(), a = Ii(), l = un("anchor"), o = un("anchorPopup"), u = un("optionElements"), d = un("searchInputElement"), f = ee(zs), h = ee(!1), m = ee(!1), v = ye(() => ft(d) ?? ft(l)), C = ye(() => c(M)[c(f)]?.value), M = ye(() => t.options.map(($) => $[1]).flat());
    gu([l, o], m, () => m.value = !1), gu(l, m, () => c(v)?.focus());
    function T($) {
      n("deselect", $), Jn(() => c(v)?.focus());
    }
    function _($) {
      n("select", $), !t.isMultiple && (m.value = !1), f.value = zs, s.value = "", Jn(() => c(v)?.focus());
    }
    function I() {
      c(i) || (m.value = !c(m));
    }
    function W($) {
      if (n("keyDown", $), !c(m)) {
        $.key === "Enter" && (m.value = !0);
        return;
      }
      if (h.value = !0, c(f) === zs && ["ArrowDown", "ArrowUp"].includes($.key)) {
        const b = c(u)?.findIndex((w) => "isActive" in w.$props && w.$props.isActive);
        f.value = b ?? zs;
      }
      switch ($.key) {
        case "ArrowUp":
          f.value = Math.max(0, c(f) - 1);
          break;
        case "ArrowDown":
          f.value = Math.min(c(M).length - 1, c(f) + 1);
          break;
        case "Backspace":
          if (c(s).length > 0 || t.selected.length === 0)
            return;
          T(t.selected[t.selected.length - 1].value);
          break;
        case "Enter":
          const b = c(C);
          b && _(b);
          break;
        case "Escape":
          m.value = !1;
          break;
        case "Tab":
          m.value = !1;
          return;
        default:
          $.key.match(/[a-z]/) ? f.value = c(M).findIndex((w) => w.label.toLowerCase().startsWith($.key)) : f.value = -1;
          return;
      }
      $.preventDefault();
    }
    function x() {
      h.value = !1;
    }
    return Oe(f, ($) => {
      c(u)[$]?.$el.scrollIntoView({
        block: "center"
      });
    }), Oe(m, ($) => {
      if (!$) {
        n("close");
        return;
      }
      Jn(() => {
        c(d)?.focus();
      }), Jn(() => {
        const G = c(u);
        if (!G || t.isMultiple)
          return;
        const b = G.findIndex((P) => "isActive" in P.$props && P.$props.isActive), w = G[b];
        w && w.$el.scrollIntoView({
          block: "center"
        });
      }), n("open");
    }), Oe(s, ($) => n("search", $)), Oe([() => t.options, m], () => f.value = zs), ($, G) => (g(), N(fe, null, [
      B(Zy, It({ ref: "anchor" }, $.$attrs, {
        class: c(xt)(
          c(de).formSelect,
          c(i) && c(de).isDisabled,
          m.value && c(de).isFocused,
          t.isSearchable && c(de).isSearchable
        ),
        id: c(r),
        "aria-disabled": c(i) ? !0 : void 0,
        tabindex: "0",
        "tag-name": "div",
        onClick: G[0] || (G[0] = (b) => I()),
        onKeydown: W,
        onKeyup: x
      }), {
        default: q(() => [
          !t.isMultiple && t.selected[0] ? (g(), R($a, {
            key: 0,
            class: k(c(de).formSelectSelected),
            command: t.selected[0].command,
            "command-icon": t.selected[0].commandIcon,
            "icon-leading": t.selected[0].icon,
            "image-alt": t.selected[0].imageAlt,
            "image-src": t.selected[0].imageSrc,
            label: t.selected[0].label,
            tabindex: "-1"
          }, null, 8, ["class", "command", "command-icon", "icon-leading", "image-alt", "image-src", "label"])) : t.isMultiple && t.selected[0] ? (g(!0), N(fe, { key: 1 }, Ze(t.selected, (b) => (g(), R(K4, {
            key: b.value ?? "null option",
            label: b.label,
            "is-deletable": "",
            onDelete: (w) => T(b.value)
          }, null, 8, ["label", "onDelete"]))), 128)) : t.placeholder ? (g(), N("span", {
            key: 2,
            class: k(c(de).formSelectPlaceholder)
          }, ce(t.placeholder), 3)) : Q("", !0),
          t.isLoading ? (g(), R(_n, {
            key: 3,
            class: k(c(de).formSelectIcon),
            size: 16
          }, null, 8, ["class"])) : (g(), R(rt, {
            key: 4,
            class: k(c(de).formSelectIcon),
            name: "angle-down"
          }, null, 8, ["class"]))
        ]),
        _: 1
      }, 16, ["class", "id", "aria-disabled"]),
      (g(), R(sc, { to: "body" }, [
        B(c(ll), null, {
          default: q(() => [
            m.value && !c(i) ? (g(), R(Yy, {
              key: 0,
              ref: "anchorPopup",
              class: k(c(xt)(
                c(de).formSelectPopup,
                h.value && c(de).isKeyboardAction,
                t.isSearchable && c(de).isSearchable
              )),
              anchor: l.value,
              direction: "vertical",
              "use-anchor-width": ""
            }, {
              default: q(() => [
                t.isSearchable ? (g(), R(ni, {
                  key: 0,
                  modelValue: s.value,
                  "onUpdate:modelValue": G[1] || (G[1] = (b) => s.value = b),
                  ref: "searchInputElement",
                  "auto-complete": "off",
                  class: k(c(de).formSelectInput),
                  type: "search",
                  "icon-trailing": "magnifying-glass",
                  placeholder: c(a)("flux.search"),
                  onKeydown: W
                }, null, 8, ["modelValue", "class", "placeholder"])) : Q("", !0),
                !t.isLoading && t.options.length === 0 ? (g(), R(yu, { key: 1 }, {
                  default: q(() => [
                    B(vu, {
                      label: c(a)("flux.noItems")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })) : (g(), R(yu, { key: 2 }, {
                  default: q(() => [
                    (g(!0), N(fe, null, Ze(t.options, ([b, w], P) => (g(), N(fe, {
                      key: `group-${P}`
                    }, [
                      B(J4, null, {
                        default: q(() => [
                          c(Wa)(b) ? (g(), R(vu, {
                            key: 0,
                            "icon-leading": b.icon,
                            label: b.label
                          }, null, 8, ["icon-leading", "label"])) : Q("", !0),
                          (g(!0), N(fe, null, Ze(w, (z, D) => (g(), N(fe, null, [
                            c(Xs)(z) ? (g(), R($a, {
                              ref_for: !0,
                              ref: "optionElements",
                              key: D,
                              command: z.command,
                              "command-icon": z.commandIcon,
                              "icon-leading": z.icon,
                              "image-alt": z.imageAlt,
                              "image-src": z.imageSrc,
                              "is-active": !!t.selected.find((ne) => ne.value === z.value),
                              "is-highlighted": C.value === z.value,
                              label: z.label,
                              type: "button",
                              onClick: (ne) => _(z.value)
                            }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : Q("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1024),
                      c(Xs)(b) ? (g(), R($a, {
                        ref_for: !0,
                        ref: "optionElements",
                        key: `item-${P}`,
                        command: b.command,
                        "command-icon": b.commandIcon,
                        "icon-leading": b.icon,
                        "image-alt": b.imageAlt,
                        "image-src": b.imageSrc,
                        "is-active": !!t.selected.find((z) => z.value === b.value),
                        "is-highlighted": C.value === b.value,
                        label: b.label,
                        type: "button",
                        onClick: (z) => _(b.value)
                      }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : Q("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["class", "anchor"])) : Q("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
});
const X4 = `.${Lt.overlayProvider.replaceAll(" ", ".")}`;
function eb(t, e, n, s, i, r) {
  let a = null, l = 0;
  const o = ee();
  q0(o), rs(() => {
    a?.();
  }), Oe(o, (d, f, h) => {
    d && (d.addEventListener("keydown", u, { passive: !0 }), d.focus(), h(() => {
      d.removeEventListener("keydown", u);
    }));
  });
  function u(d) {
    d.key !== "Escape" || !a || !e.isCloseable || n("close");
  }
  return () => {
    const { dialogCount: d } = vi(), f = L0(s.default?.() ?? []), h = f.length > 0 && f.some((v) => v.type !== Qe);
    let m;
    return h ? (a || ([l, a] = Gc()), m = ks("div", {
      key: e.viewKey,
      ref: o,
      class: [i, l === d && Lt.isCurrent],
      style: {
        zIndex: l + 1e3
      },
      tabindex: 0
    }, f)) : (a?.(), a = null), ks(sc, { defer: !0, disabled: !m, to: X4 }, [
      ks(r, t, {
        default: () => m
      })
    ]);
  };
}
const tb = "divider", nb = "dividerContentStart divider", sb = "dividerContentCenter divider", ib = "dividerContentEnd divider", rb = "dividerContent", ab = "dividerLine", lb = "separator", ob = "separatorHorizontal separator", ub = "separatorVertical separator";
var bu = { divider: tb, dividerContentStart: nb, dividerContentCenter: sb, dividerContentEnd: ib, dividerContent: rb, dividerLine: ab, separator: lb, separatorHorizontal: ob, separatorVertical: ub };
const cb = ["aria-orientation"];
var db = /* @__PURE__ */ U({
  __name: "FluxSeparator",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(t.direction === "horizontal" ? c(bu).separatorHorizontal : c(bu).separatorVertical),
      role: "separator",
      "aria-orientation": t.direction
    }, null, 10, cb));
  }
});
const fb = { key: 1 };
var ku = /* @__PURE__ */ U({
  __name: "FluxFormFieldAddition",
  props: {
    icon: {},
    message: {},
    mode: { default: "hint" }
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(xt)(
        t.mode === "error" && c(de).formFieldAdditionError,
        t.mode === "hint" && c(de).formFieldAdditionHint
      )),
      role: "alert"
    }, [
      t.icon ? (g(), R(rt, {
        key: 0,
        class: k(c(de).formFieldAdditionIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : Q("", !0),
      t.message ? (g(), N("span", fb, ce(t.message), 1)) : Q("", !0),
      le(e.$slots, "default")
    ], 2));
  }
});
const hb = ["for"];
var Zn = /* @__PURE__ */ U({
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
    const e = ah(), n = yl(), s = Ii();
    return On(Hc, {
      id: n
    }), (i, r) => (g(), N("div", {
      class: k(c(de).formField)
    }, [
      re("label", {
        for: c(n),
        class: k(c(de).formFieldHeader)
      }, [
        re("span", {
          class: k(c(de).formFieldLabel)
        }, ce(t.label), 3),
        t.isOptional ? (g(), N("span", {
          key: 0,
          class: k(c(de).formFieldOptional)
        }, " (" + ce(c(s)("flux.optional")) + ") ", 3)) : Q("", !0),
        "value" in e ? (g(), N("span", {
          key: 1,
          class: k(c(de).formFieldValue)
        }, [
          le(i.$slots, "value", ra(ji({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
        ], 2)) : Q("", !0)
      ], 10, hb),
      le(i.$slots, "default", ra(ji({ id: c(n) }))),
      t.currentLength && t.maxLength && t.maxLength > 0 ? (g(), N("span", {
        key: 0,
        class: k(c(de).formFieldCounter)
      }, ce(t.currentLength) + " / " + ce(t.maxLength), 3)) : Q("", !0),
      t.error ? (g(), R(ku, {
        key: 1,
        icon: "circle-exclamation",
        mode: "error",
        message: t.error
      }, null, 8, ["message"])) : Q("", !0),
      t.hint ? (g(), R(ku, {
        key: 2,
        icon: "circle-info",
        message: t.hint
      }, null, 8, ["message"])) : Q("", !0),
      le(i.$slots, "addition", ra(ji({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
    ], 2));
  }
}), Gr = /* @__PURE__ */ U({
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
    return (e, n) => (g(), R(Ur, It({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(ns).primaryButton,
      "css-class-icon": c(ns).primaryButtonIcon,
      "css-class-label": c(ns).primaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), wl({ _: 2 }, [
      Ze(c(of), (s) => ({
        name: s,
        fn: q(() => [
          le(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
}), wu = /* @__PURE__ */ U({
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
    const e = ct(t, "searchQuery"), n = ct(t, "modelValue"), s = Fs(pn(() => t.disabled)), { groups: i, selected: r, values: a } = j1(n, t.isMultiple, pn(() => t.options), e);
    function l(u) {
      c(t.isMultiple) && (n.value = c(a).filter((d) => d !== u));
    }
    function o(u) {
      c(t.isMultiple) ? n.value = [...c(a), u] : n.value = u;
    }
    return (u, d) => (g(), R(c(Q4), {
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
}), mb = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "FluxDisabled",
  props: {
    disabled: { type: Boolean, default: !0 }
  },
  setup(t) {
    return On(Pc, pn(() => t.disabled)), (e, n) => le(e.$slots, "default");
  }
}), pb = /* @__PURE__ */ U({
  __name: "FluxFormColumn",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(de).formColumn)
    }, [
      le(e.$slots, "default")
    ], 2));
  }
}), Rl = /* @__PURE__ */ U({
  __name: "FluxPaneFooter",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(jt).paneFooter)
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const gb = ["aria-disabled"];
var vb = /* @__PURE__ */ U({
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
    return (i, r) => (g(), R(mb, { disabled: t.disabled }, {
      default: q(() => [
        re("form", {
          class: k(c(de).form),
          "aria-disabled": t.disabled ? !0 : void 0,
          onSubmit: r[0] || (r[0] = xl((a) => s(), ["prevent"]))
        }, [
          le(i.$slots, "default")
        ], 42, gb)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
}), yb = /* @__PURE__ */ U({
  __name: "FluxFormInputGroup",
  props: {
    isSecondary: { type: Boolean },
    isCondensed: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(xt)(
        c(de).formInputGroup,
        t.isCondensed && c(de).isCondensed,
        t.isSecondary && c(de).isSecondary
      )),
      role: "textbox"
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const bb = ["id", "autocomplete", "autofocus", "disabled", "maxlength", "placeholder", "aria-disabled"];
var kb = /* @__PURE__ */ U({
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
    const n = e, s = ct(t, "modelValue"), i = Fs(pn(() => t.disabled)), { id: r } = Al();
    return (a, l) => gl((g(), N("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (o) => s.value = o),
      ref: "input",
      class: k(c(i) ? c(de).formTextAreaDisabled : c(de).formTextAreaEnabled),
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
    }, null, 46, bb)), [
      [ur, s.value]
    ]);
  }
}), Ki = U({
  emits: ["close"],
  inheritAttrs: !1,
  props: {
    isCloseable: { default: !1, type: Boolean },
    size: { default: "small", type: String }
  },
  setup(t, { attrs: e, emit: n, slots: s }) {
    return eb(
      e,
      t,
      n,
      s,
      xt(
        t.size === "small" && Lt.overlaySmall,
        t.size === "medium" && Lt.overlayMedium,
        t.size === "large" && Lt.overlayLarge
      ),
      Iy
    );
  }
});
const wb = { key: 0 }, Ib = { key: 1 };
var Zr = /* @__PURE__ */ U({
  __name: "FluxPaneHeader",
  props: {
    icon: {},
    subTitle: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(c(jt).paneHeader)
    }, [
      le(e.$slots, "before"),
      t.icon ? (g(), R(rt, {
        key: 0,
        class: k(c(jt).paneHeaderIcon),
        size: 20,
        name: t.icon
      }, null, 8, ["class", "name"])) : Q("", !0),
      t.title || t.subTitle ? (g(), N("div", {
        key: 1,
        class: k(c(jt).paneHeaderCaption)
      }, [
        t.title ? (g(), N("strong", wb, ce(t.title), 1)) : Q("", !0),
        t.subTitle ? (g(), N("span", Ib, ce(t.subTitle), 1)) : Q("", !0)
      ], 2)) : Q("", !0),
      le(e.$slots, "after")
    ], 2));
  }
}), Sb = /* @__PURE__ */ U({
  __name: "FluxAlert",
  props: {
    alert: {}
  },
  setup(t) {
    const e = Ii();
    return (n, s) => (g(), R(qr, null, {
      default: q(() => [
        B(Zr, {
          icon: t.alert.icon,
          title: t.alert.title
        }, null, 8, ["icon", "title"]),
        B(hi, {
          innerHTML: t.alert.message
        }, null, 8, ["innerHTML"]),
        B(Rl, null, {
          default: q(() => [
            B(jr),
            B(Gr, {
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
}), Cb = /* @__PURE__ */ U({
  __name: "FluxConfirm",
  props: {
    confirm: {}
  },
  setup(t) {
    const e = Ii();
    return (n, s) => (g(), R(qr, null, {
      default: q(() => [
        B(Zr, {
          icon: t.confirm.icon,
          title: t.confirm.title
        }, null, 8, ["icon", "title"]),
        B(hi, {
          innerHTML: t.confirm.message
        }, null, 8, ["innerHTML"]),
        B(Rl, null, {
          default: q(() => [
            B(jr),
            B(Es, {
              label: c(e)("flux.cancel"),
              onClick: s[0] || (s[0] = (i) => t.confirm.onCancel())
            }, null, 8, ["label"]),
            B(Gr, {
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
}), Tb = /* @__PURE__ */ U({
  __name: "FluxPrompt",
  props: {
    prompt: {}
  },
  setup(t) {
    const e = un("input"), n = Ii(), s = ee(""), i = ye(() => c(s).trim().length > 0);
    yn(() => {
      const a = c(e);
      requestAnimationFrame(() => a?.$el.querySelector("input")?.focus());
    });
    function r(a) {
      !c(i) || a.key !== "Enter" || t.prompt.onConfirm(c(s));
    }
    return (a, l) => (g(), R(qr, null, {
      default: q(() => [
        B(Zr, {
          icon: t.prompt.icon,
          title: t.prompt.title
        }, null, 8, ["icon", "title"]),
        B(hi, {
          innerHTML: t.prompt.message
        }, null, 8, ["innerHTML"]),
        B(hi, null, {
          default: q(() => [
            B(Zn, {
              label: t.prompt.fieldLabel
            }, {
              default: q(() => [
                B(ni, {
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
        B(Rl, null, {
          default: q(() => [
            B(jr),
            B(Es, {
              label: c(n)("flux.cancel"),
              onClick: l[1] || (l[1] = (o) => t.prompt.onCancel())
            }, null, 8, ["label"]),
            B(Gr, {
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
}), xb = /* @__PURE__ */ U({
  __name: "FluxOverlayProvider",
  setup(t) {
    const { alerts: e, confirms: n, prompts: s } = vi();
    return (i, r) => (g(), N(fe, null, [
      re("div", {
        class: k(c(Lt).overlayProvider)
      }, [
        re("div", {
          class: k(c(Lt).overlayShade)
        }, null, 2)
      ], 2),
      B(Ki, { size: "medium" }, {
        default: q(() => [
          (g(!0), N(fe, null, Ze(c(e), (a) => (g(), R(Sb, {
            key: a.id,
            alert: a
          }, null, 8, ["alert"]))), 128))
        ]),
        _: 1
      }),
      B(Ki, { size: "medium" }, {
        default: q(() => [
          (g(!0), N(fe, null, Ze(c(n), (a) => (g(), R(Cb, {
            key: a.id,
            confirm: a
          }, null, 8, ["confirm"]))), 128))
        ]),
        _: 1
      }),
      B(Ki, { size: "medium" }, {
        default: q(() => [
          (g(!0), N(fe, null, Ze(c(s), (a) => (g(), R(Tb, {
            key: a.id,
            prompt: a
          }, null, 8, ["prompt"]))), 128))
        ]),
        _: 1
      })
    ], 64));
  }
});
const Eb = "progressBar", Fb = "progressBarTrack", Ab = "progressBarValue", $b = "progressBarValueComplete progressBarValue", Lb = "progressBarValueIncomplete progressBarValue", Mb = "progressBarTrackIndeterminate progressBarTrack", Db = "progressBarIndeterminate", Ob = "progressBarInfo", Bb = "progressBarProgress", Vb = "progressBarStatus", Nb = "basePaneStructure";
var Sn = { progressBar: Eb, progressBarTrack: Fb, progressBarValue: Ab, progressBarValueComplete: $b, progressBarValueIncomplete: Lb, progressBarTrackIndeterminate: Mb, progressBarIndeterminate: Db, progressBarInfo: Ob, progressBarProgress: Bb, progressBarStatus: Vb, basePaneStructure: Nb }, _b = /* @__PURE__ */ U({
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
    return (s, i) => (g(), R(uf, {
      class: k(c(Sn).progressBar),
      gap: 6,
      role: "progressbar",
      "aria-valuenow": t.value,
      "aria-valuemax": t.max,
      "aria-valuemin": t.min
    }, {
      default: q(() => [
        re("div", {
          class: k(t.isIndeterminate ? c(Sn).progressBarTrackIndeterminate : c(Sn).progressBarTrack)
        }, [
          re("div", {
            class: k(e.value >= 1 ? c(Sn).progressBarValueComplete : c(Sn).progressBarValueIncomplete),
            style: We({
              width: `${t.isIndeterminate ? 100 : e.value * 100}%`
            })
          }, null, 6)
        ], 2),
        t.status ? (g(), N("div", {
          key: 0,
          class: k(c(Sn).progressBarInfo)
        }, [
          B(c(ll), null, {
            default: q(() => [
              (g(), N("span", {
                key: t.status,
                class: k(c(Sn).progressBarStatus)
              }, ce(t.status), 3))
            ]),
            _: 1
          }),
          B(c(ll), null, {
            default: q(() => [
              t.isIndeterminate ? Q("", !0) : (g(), N("span", {
                key: 0,
                class: k(c(Sn).progressBarProgress)
              }, ce(n.value), 3))
            ]),
            _: 1
          })
        ], 2)) : Q("", !0)
      ]),
      _: 1
    }, 8, ["class", "aria-valuenow", "aria-valuemax", "aria-valuemin"]));
  }
});
const Rb = ["disabled", "max", "min", "step"];
var zb = /* @__PURE__ */ U({
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
    const e = ct(t, "modelValue"), n = Fs(pn(() => t.disabled)), s = un("input"), i = ee(0);
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
    return $r(() => {
      if (c(e) > t.max) {
        a();
        return;
      }
      if (c(e) < t.min) {
        r();
        return;
      }
      l();
    }), (o, u) => (g(), R(Tg, {
      class: k(c(de).quantitySelector),
      "aria-disabled": c(n) ? !0 : void 0
    }, {
      default: q(() => [
        B(Es, {
          class: k(c(de).quantitySelectorButton),
          disabled: c(n) || e.value <= t.min,
          "icon-leading": "minus",
          tabindex: "-1",
          onClick: r
        }, null, 8, ["class", "disabled"]),
        gl(re("input", {
          ref: "input",
          "onUpdate:modelValue": u[0] || (u[0] = (d) => e.value = d),
          class: k(c(de).quantitySelectorInput),
          style: We({
            width: `${i.value}px`
          }),
          disabled: c(n),
          tabindex: "0",
          type: "number",
          max: t.max,
          min: t.min,
          step: t.step
        }, null, 14, Rb), [
          [ur, e.value]
        ]),
        B(Es, {
          class: k(c(de).quantitySelectorButton),
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
const { basePane: ls } = Wr, Pb = `snackbar ${ls}`, Hb = "action", Wb = "progressBar", Ub = "progressBarTrack", qb = "snackbarContent", jb = "icon", Gb = "spinner", Zb = "snackbarBody", Yb = "snackbarMessage", Jb = "snackbarSubMessage", Kb = "snackbarTitle", Qb = "snackbarAction", Xb = "snackbarActions", ek = `snackbarGray snackbar ${ls}`, tk = `snackbarPrimary snackbar ${ls}`, nk = "spinnerEffect", sk = "spinnerValue", ik = `snackbarDanger snackbar ${ls}`, rk = `snackbarInfo snackbar ${ls}`, ak = `snackbarSuccess snackbar ${ls}`, lk = `snackbarWarning snackbar ${ls}`, ok = "snackbars", uk = "snackbarsEnterActive", ck = "snackbarsLeaveActive", dk = "snackbarsMove", fk = "snackbarsEnterFrom", hk = "snackbarsLeaveTo";
var qe = { snackbar: Pb, action: Hb, progressBar: Wb, progressBarTrack: Ub, snackbarContent: qb, icon: jb, spinner: Gb, snackbarBody: Zb, snackbarMessage: Yb, snackbarSubMessage: Jb, snackbarTitle: Kb, snackbarAction: Qb, snackbarActions: Xb, snackbarGray: ek, snackbarPrimary: tk, spinnerEffect: nk, spinnerValue: sk, snackbarDanger: ik, snackbarInfo: rk, snackbarSuccess: ak, snackbarWarning: lk, snackbars: ok, snackbarsEnterActive: uk, snackbarsLeaveActive: ck, snackbarsMove: dk, snackbarsEnterFrom: fk, snackbarsLeaveTo: hk };
const mk = ["onClick"];
var pk = /* @__PURE__ */ U({
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
    const n = e, s = Kt(), i = ee(null), r = ye(() => t.actions && Object.entries(t.actions).length > 0);
    bl(() => {
      i.value && cr(i.value);
    });
    function a(o) {
      n("action", o);
    }
    function l() {
      n("close");
    }
    return $r(() => {
      i.value && Yc(i.value, s.props);
    }), Oe(() => t.isRendered, () => {
      if (t.isRendered) {
        i.value && cr(i.value);
        return;
      }
      let o = s.props;
      o.onAction = a, o.onClose = l, i.value = El(o);
    }, { immediate: !0 }), (o, u) => t.isRendered ? (g(), N("div", {
      key: 0,
      class: k(c(xt)(
        t.color === "gray" && c(qe).snackbarGray,
        t.color === "primary" && c(qe).snackbarPrimary,
        t.color === "danger" && c(qe).snackbarDanger,
        t.color === "info" && c(qe).snackbarInfo,
        t.color === "success" && c(qe).snackbarSuccess,
        t.color === "warning" && c(qe).snackbarWarning
      ))
    }, [
      re("div", {
        class: k(c(qe).snackbarContent)
      }, [
        t.isLoading ? (g(), R(_n, {
          key: 0,
          size: 18
        })) : t.icon ? (g(), R(rt, {
          key: 1,
          size: 18,
          name: t.icon
        }, null, 8, ["name"])) : Q("", !0),
        re("div", {
          class: k(c(qe).snackbarBody)
        }, [
          t.title ? (g(), N("div", {
            key: 0,
            class: k(c(qe).snackbarTitle)
          }, ce(t.title), 3)) : Q("", !0),
          t.message ? (g(), N("div", {
            key: 1,
            class: k(c(qe).snackbarMessage)
          }, ce(t.message), 3)) : Q("", !0),
          t.progressIndeterminate || t.progressValue ? (g(), R(_b, {
            key: 2,
            "is-indeterminate": t.progressIndeterminate,
            max: t.progressMax,
            min: t.progressMin,
            status: t.progressStatus,
            value: t.progressValue
          }, null, 8, ["is-indeterminate", "max", "min", "status", "value"])) : Q("", !0),
          t.subMessage ? (g(), N("div", {
            key: 3,
            class: k(c(qe).snackbarSubMessage)
          }, ce(t.subMessage), 3)) : Q("", !0)
        ], 2)
      ], 2),
      r.value ? (g(), N("div", {
        key: 0,
        class: k(c(qe).snackbarActions)
      }, [
        (g(!0), N(fe, null, Ze(t.actions, (d, f) => (g(), N("button", {
          key: f,
          class: k(c(qe).snackbarAction),
          tabindex: "-1",
          type: "button",
          onClick: (h) => a(f)
        }, [
          re("span", null, ce(d), 1)
        ], 10, mk))), 128))
      ], 2)) : Q("", !0),
      t.isCloseable ? (g(), R(q1, {
        key: 1,
        icon: "xmark",
        onClick: u[0] || (u[0] = (d) => l())
      })) : Q("", !0)
    ], 2)) : Q("", !0);
  }
}), gk = /* @__PURE__ */ U({
  __name: "FluxSnackbarProvider",
  setup(t) {
    const { snackbars: e } = vi();
    function n(s) {
      return (i) => s.onAction?.(i);
    }
    return (s, i) => (g(), R(_c, {
      name: "flux-snackbars",
      tag: "div",
      class: k(c(qe).snackbars),
      "enter-active-class": c(qe).snackbarsEnterActive,
      "enter-from-class": c(qe).snackbarsEnterFrom,
      "leave-active-class": c(qe).snackbarsLeaveActive,
      "leave-to-class": c(qe).snackbarsLeaveTo,
      "move-class": c(qe).snackbarsMove
    }, {
      default: q(() => [
        (g(!0), N(fe, null, Ze(c(e).toReversed(), (r) => (g(), R(pk, It({
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
const vk = "tooltip", yk = "tooltipAbove tooltip", bk = "tooltipBelow tooltip", kk = "tooltipEnd tooltip", wk = "tooltipStart tooltip";
var Ps = { tooltip: vk, tooltipAbove: yk, tooltipBelow: bk, tooltipEnd: kk, tooltipStart: wk }, Ik = U(() => {
  const { tooltip: t } = vi(), e = ee(null), n = ee(null), s = ye(() => c(t) ? c(t).contentSlot?.() ?? [c(t).content] : null), i = ye(() => !!c(t));
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
    let { width: h, height: m } = a.getBoundingClientRect();
    const { scale: v } = getComputedStyle(a), { top: C, left: M, width: T, height: _ } = u.getBoundingClientRect();
    let I = Number(v ?? 1);
    I = isNaN(I) ? 1 : I, m /= I, h /= I, o === "horizontal" ? n.value = Sk(C, M, h, m, T, _, d, f) : n.value = Ck(C, M, h, m, T, _, d, f);
  }
  return On(nm, {
    calculate: r
  }), Oe(s, () => requestAnimationFrame(r)), () => ks(Sy, {}, {
    default: () => {
      if (!c(i))
        return;
      const a = c(n);
      return ks("div", {
        ref: e,
        class: a ? xt(
          a.transition === "above" && Ps.tooltipAbove,
          a.transition === "below" && Ps.tooltipBelow,
          a.transition === "end" && Ps.tooltipEnd,
          a.transition === "start" && Ps.tooltipStart
        ) : Ps.tooltip,
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
function Sk(t, e, n, s, i, r, a, l) {
  let o, u, d, f, h, m;
  if (e > innerWidth / 2 ? (o = e - n - a, u = t + r / 2 - s / 2, d = "315deg", f = "100%", h = "50%", m = "start") : (o = e + i + a, u = t + r / 2 - s / 2, d = "135deg", f = "0", h = "50%", m = "end"), u + s > innerHeight - l) {
    const v = Math.min(u, innerHeight - s - l) - u;
    h = `calc(50% - ${v}px)`, u += v;
  }
  if (u < l) {
    const v = Math.max(u, l) - u;
    h = `calc(50% - ${v}px)`, u += v;
  }
  return {
    x: Math.round(o),
    y: Math.round(u),
    arrowAngle: d,
    arrowX: f,
    arrowY: h,
    transition: m
  };
}
function Ck(t, e, n, s, i, r, a, l) {
  let o, u, d, f, h, m;
  if (t > 300 ? (o = e + i / 2 - n / 2, u = t - s - a, d = "45deg", f = "50%", h = "100%", m = "above") : (o = e + i / 2 - n / 2, u = t + r + a, d = "225deg", f = "50%", h = "0", m = "below"), o + n > innerWidth - l) {
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
    arrowY: h,
    transition: m
  };
}
const Tk = "root", xk = "isLocked";
var La = { root: Tk, isLocked: xk };
const Ek = ["inert"];
var Fk = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "FluxRoot",
  setup(t) {
    const { inertMain: e } = vi();
    return Oe(e, (n, s, i) => {
      n && (document.body.classList.add(La.isLocked), i(() => document.body.classList.remove(La.isLocked)));
    }, { immediate: !0 }), (n, s) => (g(), N(fe, null, [
      re("div", It(n.$attrs, {
        class: c(La).root,
        inert: c(e)
      }), [
        le(n.$slots, "default")
      ], 16, Ek),
      B(xb),
      B(gk),
      B(Ik)
    ], 64));
  }
});
function Qt() {
  return (t) => Homey.__(t) ?? t;
}
function Ak(t, e) {
  const n = /* @__PURE__ */ Lm(t, e);
  return () => {
    const s = n(), i = Object.getOwnPropertyNames(s), r = Mm(s), a = {};
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
function df(t, e) {
  return e ? se.fromFormat(`${t} ${e.length === 5 ? `${e}:00` : e}`, "yyyy-MM-dd HH:mm:ss") : se.fromFormat(t, "yyyy-MM-dd").endOf("day");
}
var zl = Ak("list", () => {
  const t = ee([]), e = ee({
    date: "all",
    type: "all",
    personId: null
  }), n = ee(!0), s = ee([]), i = ee(null), r = ee([]), a = ye(() => {
    const b = c(e), w = se.now();
    return c(s).filter((P) => {
      const z = P.type === "task" ? P : void 0;
      if (b.type !== "all" && P.type !== b.type)
        return !1;
      if (b.date !== "all") {
        const D = z?.dueDate ? df(z.dueDate, z.dueTime) : void 0;
        if (b.date === "no_date") {
          if (D)
            return !1;
        } else if (!D || b.date === "overdue" && D >= w || b.date === "upcoming" && D < w)
          return !1;
      }
      return !(b.personId !== null && z?.person?.id !== b.personId);
    });
  }), l = ye(() => h(c(s))), o = ye(() => h(c(a))), u = ye(() => {
    const b = c(e);
    return b.date !== "all" || b.type !== "all" || b.personId !== null;
  }), d = ye(() => c(a).length > 0), f = ye(() => c(s).length > 0);
  function h(b) {
    const w = Object.groupBy(b, (z) => z.category || "__other__"), P = Object.entries(w).sort(([z], [D]) => {
      if (z === "__other__") return 1;
      if (D === "__other__") return -1;
      const ne = c(t).findIndex((X) => X.category === z), me = c(t).findIndex((X) => X.category === D);
      return ne - me;
    });
    return Object.fromEntries(P);
  }
  async function m(b, w, P) {
    const z = c(s).findIndex((D) => D.id === w.id);
    z !== -1 && (s.value[z].checked = P, P ? await Homey.api("POST", `/${b}/items/${w.id}/checked`) : await Homey.api("POST", `/${b}/items/${w.id}/unchecked`));
  }
  async function v(b, w, P) {
    const z = c(s).findIndex((D) => D.id === w.id);
    z === -1 || w.quantity === void 0 || (s.value[z].quantity = P === "increase" ? w.quantity + 1 : w.quantity - 1, await Homey.api("POST", `/${b}/items/${w.id}/quantity`, {
      quantity: P === "increase" ? 1 : -1
    }));
  }
  function C(b, w) {
    e.value = {
      date: w ?? "all",
      type: b ?? "all",
      personId: null
    };
  }
  async function M(b) {
    n.value = !0, t.value = await Homey.api("GET", `/${b}/categories`), n.value = !1;
  }
  async function T(b) {
    n.value = !0, await G(
      await Homey.api("GET", `/${b}/items`)
    ), n.value = !1;
  }
  async function _(b) {
    n.value = !0, i.value = await Homey.api("GET", `/${b}`), n.value = !1;
  }
  async function I(b) {
    n.value = !0, r.value = await Homey.api("GET", `/${b}/persons`), n.value = !1;
  }
  async function W(b, w) {
    const P = c(s).findIndex((z) => z.id === w.id);
    P !== -1 && (s.value.splice(P, 1), await Homey.api("DELETE", `/${b}/items/${w.id}`));
  }
  function x() {
    C();
  }
  function $(b, w) {
    e.value = {
      ...c(e),
      [b]: w
    };
  }
  async function G(b) {
    s.value = b;
  }
  return {
    categories: sn(t),
    filters: sn(e),
    isLoading: sn(n),
    items: sn(s),
    look: sn(i),
    persons: sn(r),
    categorizedItems: l,
    filteredCategorizedItems: o,
    filteredItems: a,
    hasActiveFilters: u,
    hasFilteredItems: d,
    hasItems: f,
    changeChecked: m,
    changeQuantity: v,
    initFilters: C,
    loadCategories: M,
    loadItems: T,
    loadLook: _,
    loadPersons: I,
    removeItem: W,
    resetFilters: x,
    setFilter: $,
    setItems: G
  };
}), ff = /* @__PURE__ */ U({
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
    const n = e, s = ct(t, "category"), i = ct(t, "content"), r = ct(t, "person"), a = ct(t, "dueDate"), l = ct(t, "dueTime"), o = ct(t, "quantity"), u = Qt(), {
      categories: d,
      persons: f,
      loadCategories: h,
      loadPersons: m
    } = zl(), v = ye(() => c(i).trim().length > 2), C = ye(() => c(d).map((W) => ({
      label: u(`grocery.category.${W.category}`),
      icon: W.icon,
      value: W.category
    }))), M = ye(() => [
      { value: null, label: u("widget.list.add.anyone") },
      ...c(f).map((W) => ({
        label: W.name,
        imageSrc: W.image,
        value: W.id
      }))
    ]);
    yn(async () => {
      await Promise.allSettled([
        h(t.deviceId),
        m(t.deviceId)
      ]);
    });
    function T() {
      a.value = null, l.value = null;
    }
    async function _() {
      n("close");
    }
    async function I() {
      n("save");
    }
    return (W, x) => (g(), R(c(qr), { style: { "max-height": "calc(100dvh - 30px)", width: "calc(100dvw - 30px)", "overflow-x": "hidden" } }, {
      default: q(() => [
        B(c(Zr), { title: t.title }, null, 8, ["title"]),
        B(c(hi), null, {
          default: q(() => [
            B(c(vb), null, {
              default: q(() => [
                B(c(pb), null, {
                  default: q(() => [
                    t.type === "product" ? (g(), N(fe, { key: 0 }, [
                      B(c(Zn), {
                        label: c(u)("widget.list.add.product")
                      }, {
                        default: q(() => [
                          B(c(ni), {
                            modelValue: i.value,
                            "onUpdate:modelValue": x[0] || (x[0] = ($) => i.value = $)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      B(c(Zn), {
                        "is-optional": "",
                        label: c(u)("widget.list.add.category")
                      }, {
                        default: q(() => [
                          B(c(wu), {
                            modelValue: s.value,
                            "onUpdate:modelValue": x[1] || (x[1] = ($) => s.value = $),
                            options: C.value
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      B(c(Zn), {
                        label: c(u)("widget.list.add.quantity")
                      }, {
                        default: q(() => [
                          B(c(zb), {
                            modelValue: o.value,
                            "onUpdate:modelValue": x[2] || (x[2] = ($) => o.value = $),
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
                      default: q(() => [
                        B(c(kb), {
                          modelValue: i.value,
                          "onUpdate:modelValue": x[3] || (x[3] = ($) => i.value = $),
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
                      default: q(() => [
                        B(c(wu), {
                          modelValue: r.value,
                          "onUpdate:modelValue": x[4] || (x[4] = ($) => r.value = $),
                          options: M.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : Q("", !0),
                    t.type === "task" ? (g(), R(c(Zn), {
                      key: 3,
                      "is-optional": "",
                      label: c(u)("widget.list.add.due")
                    }, {
                      default: q(() => [
                        B(c(yb), null, {
                          default: q(() => [
                            B(c(ni), {
                              modelValue: a.value,
                              "onUpdate:modelValue": x[5] || (x[5] = ($) => a.value = $),
                              type: "date"
                            }, null, 8, ["modelValue"]),
                            B(c(db), { direction: "vertical" }),
                            B(c(ni), {
                              modelValue: l.value,
                              "onUpdate:modelValue": x[6] || (x[6] = ($) => l.value = $),
                              type: "time"
                            }, null, 8, ["modelValue"]),
                            B(c(Es), {
                              "icon-leading": "trash",
                              onClick: x[7] || (x[7] = ($) => T())
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : Q("", !0),
                    B(c(cv), { style: { width: "100%" } }, {
                      default: q(() => [
                        B(c(Es), {
                          label: c(u)("widget.list.add.cancel"),
                          style: { "flex-grow": "1" },
                          onClick: x[8] || (x[8] = ($) => _())
                        }, null, 8, ["label"]),
                        B(c(Gr), {
                          disabled: !v.value,
                          label: t.saveLabel,
                          style: { "flex-grow": "1" },
                          onClick: x[9] || (x[9] = ($) => I())
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
}), $k = /* @__PURE__ */ U({
  __name: "ListAdd",
  props: {
    deviceId: {},
    type: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = Qt(), i = Jt({
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
    return (o, u) => (g(), R(ff, {
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
}), Lk = /* @__PURE__ */ U({
  __name: "ListEdit",
  props: {
    deviceId: {},
    item: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = Qt(), i = Jt({
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
    }, { immediate: !0 }), (o, u) => (g(), R(ff, {
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
const Mk = ["onClick"], Dk = ["onClick"], Ok = ["onClick"];
var Bk = /* @__PURE__ */ U({
  __name: "ListFilter",
  setup(t) {
    const e = Qt(), {
      filters: n,
      look: s,
      persons: i,
      hasActiveFilters: r,
      resetFilters: a,
      setFilter: l
    } = zl(), o = [
      { value: "all", label: e("widget.list.filter.all") },
      { value: "note", label: e("widget.list.filter.notes") },
      { value: "product", label: e("widget.list.filter.products") },
      { value: "task", label: e("widget.list.filter.tasks") }
    ], u = [
      { value: "all", label: e("widget.list.filter.all") },
      { value: "overdue", label: e("widget.list.filter.overdue") },
      { value: "upcoming", label: e("widget.list.filter.upcoming") },
      { value: "no_date", label: e("widget.list.filter.no_date") }
    ];
    return (d, f) => (g(), N("div", {
      class: k(d.$style.listFilter)
    }, [
      re("div", {
        class: k(d.$style.listFilterGroup)
      }, [
        re("span", {
          class: k(d.$style.listFilterLabel)
        }, ce(c(e)("widget.list.filter.type")), 3),
        re("div", {
          class: k(d.$style.listFilterChips)
        }, [
          (g(), N(fe, null, Ze(o, (h) => re("button", {
            key: h.value,
            class: k([d.$style.listFilterChip, c(n).type === h.value && d.$style.isActive]),
            style: We(c(n).type === h.value ? { "--chip-color": c(s)?.color } : void 0),
            onClick: (m) => c(l)("type", h.value)
          }, ce(h.label), 15, Mk)), 64))
        ], 2)
      ], 2),
      re("div", {
        class: k(d.$style.listFilterGroup)
      }, [
        re("span", {
          class: k(d.$style.listFilterLabel)
        }, ce(c(e)("widget.list.filter.date")), 3),
        re("div", {
          class: k(d.$style.listFilterChips)
        }, [
          (g(), N(fe, null, Ze(u, (h) => re("button", {
            key: h.value,
            class: k([d.$style.listFilterChip, c(n).date === h.value && d.$style.isActive]),
            style: We(c(n).date === h.value ? { "--chip-color": c(s)?.color } : void 0),
            onClick: (m) => c(l)("date", h.value)
          }, ce(h.label), 15, Dk)), 64))
        ], 2)
      ], 2),
      c(i).length > 0 ? (g(), N("div", {
        key: 0,
        class: k(d.$style.listFilterGroup)
      }, [
        re("span", {
          class: k(d.$style.listFilterLabel)
        }, ce(c(e)("widget.list.filter.person")), 3),
        re("div", {
          class: k(d.$style.listFilterChips)
        }, [
          re("button", {
            class: k([d.$style.listFilterChip, c(n).personId === null && d.$style.isActive]),
            style: We(c(n).personId === null ? { "--chip-color": c(s)?.color } : void 0),
            onClick: f[0] || (f[0] = (h) => c(l)("personId", null))
          }, ce(c(e)("widget.list.filter.anyone")), 7),
          (g(!0), N(fe, null, Ze(c(i), (h) => (g(), N("button", {
            key: h.id,
            class: k([d.$style.listFilterChip, c(n).personId === h.id && d.$style.isActive]),
            style: We(c(n).personId === h.id ? { "--chip-color": c(s)?.color } : void 0),
            onClick: (m) => c(l)("personId", h.id)
          }, ce(h.name), 15, Ok))), 128))
        ], 2)
      ], 2)) : Q("", !0),
      c(r) ? (g(), N("button", {
        key: 1,
        class: k(d.$style.listFilterClear),
        onClick: f[1] || (f[1] = (h) => c(a)())
      }, ce(c(e)("widget.list.filter.clear")), 3)) : Q("", !0)
    ], 2));
  }
});
const Vk = "listFilter", Nk = "listFilterGroup", _k = "listFilterLabel", Rk = "listFilterChips", zk = "listFilterChip", Pk = "isActive", Hk = "listFilterClear";
var Wk = { listFilter: Vk, listFilterGroup: Nk, listFilterLabel: _k, listFilterChips: Rk, listFilterChip: zk, isActive: Pk, listFilterClear: Hk }, _e = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, i] of e)
    n[s] = i;
  return n;
};
const Uk = {
  $style: Wk
};
var qk = /* @__PURE__ */ _e(Bk, [["__cssModules", Uk]]), hf = /* @__PURE__ */ U({
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
    return (i, r) => (g(), N("button", {
      class: "homey-button-primary-full",
      type: "button",
      onClick: s
    }, ce(t.label), 1));
  }
}), q8 = /* @__PURE__ */ U({
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
    return (i, r) => (g(), N("button", {
      class: "homey-button-transparent",
      type: "button",
      onClick: s
    }, ce(t.label), 1));
  }
});
const Pl = /* @__PURE__ */ Symbol(), Hl = /* @__PURE__ */ Symbol(), jk = ["title", "onClick"];
var Gk = /* @__PURE__ */ U({
  __name: "ColorPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = ct(t, "modelValue"), n = Qt(), s = dn(Pl);
    return (i, r) => (g(), N("div", {
      class: k(i.$style.colorSelect)
    }, [
      (g(!0), N(fe, null, Ze(c(s), (a) => (g(), N("div", {
        class: k(e.value === a.hex ? i.$style.colorSelectItemActive : i.$style.colorSelectItem),
        style: We({ "--color": a.hex }),
        title: c(n)(a.label),
        onClick: (l) => e.value = a.hex
      }, null, 14, jk))), 256))
    ], 2));
  }
});
const Zk = "colorSelect", Yk = "colorSelectItem", Jk = "colorSelectItemActive colorSelectItem";
var Kk = { colorSelect: Zk, colorSelectItem: Yk, colorSelectItemActive: Jk };
const Qk = {
  $style: Kk
};
var mf = /* @__PURE__ */ _e(Gk, [["__cssModules", Qk]]);
const Xk = { class: "homey-form" };
var pf = /* @__PURE__ */ U({
  __name: "Form",
  setup(t) {
    return (e, n) => (g(), N("form", Xk, [
      le(e.$slots, "default")
    ]));
  }
});
const e3 = { class: "homey-form-fieldset" }, t3 = { class: "homey-form-legend" }, n3 = {
  key: 0,
  class: "homey-form-group",
  style: { "margin-top": "6px" }
}, s3 = {
  key: 1,
  class: "homey-form-group"
}, i3 = { class: "homey-form-group" };
var si = /* @__PURE__ */ U({
  __name: "FormGroup",
  props: {
    description: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (g(), N("fieldset", e3, [
      re("legend", t3, ce(t.title), 1),
      t.description ? (g(), N("div", n3, ce(t.description), 1)) : Q("", !0),
      e.$slots.before ? (g(), N("div", s3, [
        le(e.$slots, "before")
      ])) : Q("", !0),
      re("div", i3, [
        le(e.$slots, "default")
      ])
    ]));
  }
});
const r3 = ["for"], a3 = ["disabled", "id", "type"];
var gf = /* @__PURE__ */ U({
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
    const e = ct(t, "modelValue"), n = yl();
    return (s, i) => (g(), N(fe, null, [
      t.label ? (g(), N("label", {
        key: 0,
        class: "homey-form-label",
        for: c(n)
      }, ce(t.label), 9, r3)) : Q("", !0),
      gl(re("input", {
        class: "homey-form-input",
        disabled: t.disabled,
        id: c(n),
        type: t.type,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.value = r)
      }, null, 8, a3), [
        [Zh, e.value]
      ])
    ], 64));
  }
}), l3 = /* @__PURE__ */ U({
  __name: "Icon",
  props: {
    icon: {}
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(e.$style.uiIcon),
      "data-icon": "",
      style: We({
        "--icon": JSON.stringify(t.icon),
        "--icon-secondary": JSON.stringify(t.icon + t.icon)
      })
    }, null, 6));
  }
});
const o3 = "uiIcon";
var u3 = { uiIcon: o3 };
const c3 = {
  $style: u3
};
var Mn = /* @__PURE__ */ _e(l3, [["__cssModules", c3]]), d3 = /* @__PURE__ */ U({
  __name: "IconPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = ct(t, "modelValue"), n = Qt(), s = dn(Hl), i = ee(""), r = ye(() => {
      const a = c(i).toLowerCase().trim();
      return c(s).filter((l) => a.length > 0 && l.name.toLowerCase().includes(a) || a.length === 0 && l.unicode === c(e)).slice(0, 54);
    });
    return (a, l) => (g(), N(fe, null, [
      B(gf, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (o) => i.value = o),
        label: c(n)("element.search_icon"),
        type: "text"
      }, null, 8, ["modelValue", "label"]),
      re("div", {
        class: k(a.$style.iconSelect)
      }, [
        (g(!0), N(fe, null, Ze(r.value, (o) => (g(), R(Mn, {
          class: k(e.value === o.unicode ? a.$style.iconSelectItemActive : a.$style.iconSelectItem),
          icon: o.unicode,
          title: o.name,
          onClick: (u) => e.value = o.unicode
        }, null, 8, ["class", "icon", "title", "onClick"]))), 256))
      ], 2)
    ], 64));
  }
});
const f3 = "iconSelect", h3 = "iconSelectItem", m3 = "iconSelectItemActive iconSelectItem";
var p3 = { iconSelect: f3, iconSelectItem: h3, iconSelectItemActive: m3 };
const g3 = {
  $style: p3
};
var vf = /* @__PURE__ */ _e(d3, [["__cssModules", g3]]), j8 = /* @__PURE__ */ U({
  __name: "ScrollContainer",
  props: {
    tag: { default: "div" }
  },
  setup(t) {
    const e = ee(null), n = ee(!1), s = ee(0), i = ee(0), r = ee(0), a = ee([]), l = ee(0), o = ee(0);
    let u = null;
    rs(() => {
      f();
    });
    function d(_, I) {
      const $ = (1 - 1 / (Math.abs(_) * 0.55 / I + 1)) * I;
      return Math.sign(_) * $;
    }
    function f() {
      u && (cancelAnimationFrame(u), u = null);
    }
    function h() {
      const _ = c(a);
      if (_.length === 0)
        return 0;
      let I = 0, W = 0;
      for (let x = 0; x < _.length; x++) {
        const $ = x + 1;
        W += _[x] * $, I += $;
      }
      return W / I;
    }
    function m() {
      const _ = c(e);
      if (!_)
        return;
      const I = c(r), W = _.clientHeight, x = d(I, W), $ = Math.min(400, Math.max(200, Math.abs(x) * 3));
      _.style.transition = `transform ${$}ms cubic-bezier(0.25, 0.1, 0.25, 1)`, _.style.transform = "translateY(0)", r.value = 0;
    }
    function v(_) {
      const I = c(e);
      if (!I)
        return;
      const W = I.clientHeight;
      let x = _, $ = performance.now();
      function G(b) {
        const w = Math.min((b - $) / 16.67, 2);
        $ = b;
        const P = I.scrollHeight - I.clientHeight;
        x *= Math.pow(0.95, w);
        const D = I.scrollTop + x * w;
        if (D < 0) {
          I.scrollTop = 0;
          const ne = Math.min(W * 0.3, Math.abs(x) * 8);
          r.value = ne;
          const me = d(ne, W);
          I.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => m());
        } else if (D > P) {
          I.scrollTop = P;
          const ne = -Math.min(W * 0.3, Math.abs(x) * 8);
          r.value = ne;
          const me = d(ne, W);
          I.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => m());
        } else
          I.scrollTop = D, Math.abs(x) > 0.1 && (u = requestAnimationFrame(G));
      }
      u = requestAnimationFrame(G);
    }
    function C(_) {
      f();
      const I = c(e);
      if (!I)
        return;
      const W = _.touches[0];
      s.value = W.clientY, n.value = !0, l.value = W.clientY, o.value = Date.now(), a.value = [], i.value = I.scrollTop, I.style.transition = "none", r.value === 0 && (I.style.transform = "translateY(0)"), _.preventDefault();
    }
    function M(_) {
      if (!c(n))
        return;
      const I = c(e);
      if (!I)
        return;
      const W = _.touches[0], x = Date.now(), $ = x - c(o);
      if ($ > 0 && $ < 100) {
        const D = (c(l) - W.clientY) / $ * 16;
        a.value.push(D), a.value.length > 5 && a.value.shift();
      }
      l.value = W.clientY, o.value = x;
      const G = c(s) - W.clientY, b = I.scrollHeight - I.clientHeight, w = c(i) + G, P = I.clientHeight;
      if (w < 0) {
        I.scrollTop = 0;
        const z = -w;
        r.value = z;
        const D = d(z, P);
        I.style.transform = `translateY(${D}px)`;
      } else if (w > b) {
        I.scrollTop = b;
        const z = -(w - b);
        r.value = z;
        const D = d(z, P);
        I.style.transform = `translateY(${D}px)`;
      } else
        I.scrollTop = w, r.value = 0, I.style.transform = "translateY(0)";
      _.preventDefault();
    }
    function T(_) {
      if (!n.value)
        return;
      const I = e.value, W = h(), x = r.value !== 0;
      n.value = !1, I && x ? m() : I && Math.abs(W) > 0.5 && v(W), _.preventDefault();
    }
    return (_, I) => (g(), R(kl(t.tag), {
      ref_key: "containerRef",
      ref: e,
      onTouchstart: C,
      onTouchmove: M,
      onTouchend: T,
      onTouchcancel: T
    }, {
      default: q(() => [
        le(_.$slots, "default")
      ]),
      _: 3
    }, 544));
  }
}), v3 = /* @__PURE__ */ U({
  __name: "ListHeader",
  props: {
    color: {},
    hasActiveFilters: { type: Boolean },
    icon: {},
    name: {}
  },
  emits: ["add", "addNote", "filter"],
  setup(t, { emit: e }) {
    const n = e;
    function s() {
      n("add");
    }
    function i() {
      n("addNote");
    }
    function r() {
      n("filter");
    }
    return (a, l) => (g(), N("div", {
      class: k(a.$style.listHeader)
    }, [
      B(c(Mn), {
        class: k(a.$style.listHeaderIcon),
        icon: t.icon,
        style: We({
          "--color": t.color
        })
      }, null, 8, ["class", "icon", "style"]),
      re("div", {
        class: k(["homey-text-bold", a.$style.listHeaderName])
      }, ce(t.name), 3),
      re("button", {
        class: k(a.$style.listHeaderAdd),
        onClick: l[0] || (l[0] = (o) => r())
      }, [
        B(c(Mn), {
          class: k(a.$style.listHeaderAddIcon),
          icon: "",
          style: We(t.hasActiveFilters ? { "--color": t.color } : void 0)
        }, null, 8, ["class", "style"])
      ], 2),
      re("button", {
        class: k(a.$style.listHeaderAdd),
        onClick: l[1] || (l[1] = (o) => i())
      }, [
        B(c(Mn), {
          class: k(a.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2),
      re("button", {
        class: k(a.$style.listHeaderAdd),
        onClick: l[2] || (l[2] = (o) => s())
      }, [
        B(c(Mn), {
          class: k(a.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
});
const y3 = "listHeader", b3 = "listHeaderIcon", k3 = "listHeaderName", w3 = "listHeaderAdd", I3 = "listHeaderAddIcon";
var S3 = { listHeader: y3, listHeaderIcon: b3, listHeaderName: k3, listHeaderAdd: w3, listHeaderAddIcon: I3 };
const C3 = {
  $style: S3
};
var T3 = /* @__PURE__ */ _e(v3, [["__cssModules", C3]]), x3 = /* @__PURE__ */ U({
  __name: "ListLoading",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(e.$style.listLoading)
    }, [
      B(c(_n))
    ], 2));
  }
});
const E3 = "listLoading";
var F3 = { listLoading: E3 };
const A3 = {
  $style: F3
};
var $3 = /* @__PURE__ */ _e(x3, [["__cssModules", A3]]), L3 = /* @__PURE__ */ U({
  __name: "ListItemCategory",
  props: {
    icon: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(e.$style.listItemCategory)
    }, [
      t.icon ? (g(), R(c(rt), {
        key: 0,
        class: k(e.$style.listItemCategoryIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : Q("", !0),
      re("span", null, ce(t.name), 1)
    ], 2));
  }
});
const M3 = "listItemCategory", D3 = "listItemCategoryIcon";
var O3 = { listItemCategory: M3, listItemCategoryIcon: D3 };
const B3 = {
  $style: O3
};
var Iu = /* @__PURE__ */ _e(L3, [["__cssModules", B3]]);
const V3 = ["aria-checked"];
var N3 = /* @__PURE__ */ U({
  __name: "ListItem",
  props: {
    completable: { type: Boolean },
    direction: { default: "vertical" },
    icon: {},
    item: {},
    tappable: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      "aria-checked": t.item ? "checked" in t.item && t.item.checked ? "true" : "false" : void 0,
      class: k([
        t.direction === "horizontal" ? e.$style.listItemHorizontal : e.$style.listItemVertical,
        t.completable && e.$style.isCompletable,
        t.tappable && e.$style.isTappable
      ])
    }, [
      B(Vn, {
        mode: "out-in",
        name: "check"
      }, {
        default: q(() => [
          (g(), R(c(Mn), {
            key: t.icon,
            class: k(e.$style.listItemIcon),
            icon: t.icon
          }, null, 8, ["class", "icon"]))
        ]),
        _: 1
      }),
      re("div", {
        class: k(e.$style.listItemBody)
      }, [
        le(e.$slots, "default")
      ], 2)
    ], 10, V3));
  }
});
const _3 = "listItem", R3 = "isTappable", z3 = "listItemBody", P3 = "listItemIcon", H3 = "listItemHorizontal listItem", W3 = "listItemVertical listItem", U3 = "isCompletable";
var q3 = { listItem: _3, isTappable: R3, listItemBody: z3, listItemIcon: P3, listItemHorizontal: H3, listItemVertical: W3, isCompletable: U3 };
const j3 = {
  $style: q3
};
var Yr = /* @__PURE__ */ _e(N3, [["__cssModules", j3]]), G3 = /* @__PURE__ */ U({
  __name: "ListItemContent",
  props: {
    grow: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(t.grow ? e.$style.listItemContentGrow : e.$style.listItemContent),
      "data-content": ""
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const Z3 = "listItemContent", Y3 = "listItemContentGrow listItemContent";
var J3 = { listItemContent: Z3, listItemContentGrow: Y3 };
const K3 = {
  $style: J3
};
var Jr = /* @__PURE__ */ _e(G3, [["__cssModules", K3]]), Q3 = /* @__PURE__ */ U({
  __name: "ListItemEmpty",
  props: {
    filtered: { type: Boolean }
  },
  setup(t) {
    const e = Qt();
    return (n, s) => (g(), R(Yr, {
      class: k(n.$style.listItemEmpty),
      icon: ""
    }, {
      default: q(() => [
        B(Jr, null, {
          default: q(() => [
            pi(ce(t.filtered ? c(e)("widget.list.filter.no_results") : c(e)("widget.list.no_items")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const X3 = "listItemEmpty";
var e6 = { listItemEmpty: X3 };
const t6 = {
  $style: e6
};
var Su = /* @__PURE__ */ _e(Q3, [["__cssModules", t6]]), n6 = /* @__PURE__ */ U({
  __name: "ListItemMount",
  props: {
    longPressDuration: { default: 300 }
  },
  emits: ["longPress", "remove", "tap"],
  setup(t, { emit: e }) {
    const n = e, s = ee(!1), i = ee(!1), r = ee(0), a = ee(0), l = ee(0), o = ee(0), u = ee(!0), d = ee(null), f = ee(!1), h = ee(null), m = ee(!1), v = ye(() => s.value ? r.value - l.value > 180 : !1), C = ye(() => {
      if (!s.value || d.value === "vertical")
        return i.value ? -90 : 0;
      const x = r.value - l.value, $ = 90, G = 0.3;
      if (x <= 0)
        return 0;
      if (x <= $)
        return -x;
      const b = x - $;
      return -($ + b * G);
    });
    function M() {
      c(h) && (clearTimeout(c(h)), h.value = null);
    }
    function T() {
      i.value = !1, n("remove");
    }
    function _(x) {
      if (c(i))
        return;
      const $ = x.touches[0];
      r.value = $.clientX, a.value = $.clientY, l.value = $.clientX, o.value = $.clientY, s.value = !0, u.value = !0, m.value = !1, d.value = null, f.value = x.target.closest("[data-interactive]") !== null, M(), h.value = setTimeout(() => {
        c(u) && !c(f) && (m.value = !0, n("longPress"));
      }, t.longPressDuration);
    }
    function I(x) {
      if (!c(s))
        return;
      const $ = x.touches[0];
      l.value = $.clientX, o.value = $.clientY;
      const G = Math.abs(l.value - r.value), b = Math.abs(o.value - a.value);
      (G > 10 || b > 10) && (u.value = !1, M()), c(d) === null && (G > 4 || b > 4) && (d.value = G > b ? "horizontal" : "vertical"), c(d) === "horizontal" && x.cancelable && x.preventDefault();
    }
    function W(x) {
      if (M(), c(i)) {
        if (x.target.closest("[data-delete-button]") !== null)
          return;
        setTimeout(() => i.value = !1, 50), x.stopPropagation();
        return;
      }
      if (!c(s))
        return;
      s.value = !1;
      const $ = r.value - l.value;
      if (c(u) && !c(f) && !c(m)) {
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
    return Oe(i, (x, $, G) => {
      if (!x)
        return;
      const b = setTimeout(() => {
        i.value = !1;
      }, 3e3);
      G(() => clearTimeout(b));
    }), (x, $) => (g(), N("div", {
      class: k([
        x.$style.listItemMount,
        v.value && x.$style.isDestructive,
        s.value && x.$style.isDragging,
        i.value && x.$style.isOpen
      ]),
      style: We({
        "--x": C.value + "px"
      })
    }, [
      re("div", {
        class: k(x.$style.listItemMountBody),
        onTouchstart: _,
        onTouchmove: I,
        onTouchend: W,
        onTouchcancel: W
      }, [
        le(x.$slots, "default")
      ], 34),
      re("div", {
        class: k(x.$style.listItemMountRemove),
        "data-delete-button": "",
        onClick: $[0] || ($[0] = (G) => T()),
        onTouchend: $[1] || ($[1] = xl((G) => T(), ["stop", "prevent"]))
      }, [
        B(c(Mn), {
          class: k(x.$style.listItemMountRemoveIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 34)
    ], 6));
  }
});
const s6 = "listItemMount", i6 = "listItemMountBody", r6 = "listItemMountRemove", a6 = "isDragging", l6 = "isOpen", o6 = "isDestructive", u6 = "listItemMountRemoveIcon";
var c6 = { listItemMount: s6, listItemMountBody: i6, listItemMountRemove: r6, isDragging: a6, isOpen: l6, isDestructive: o6, listItemMountRemoveIcon: u6 };
const d6 = {
  $style: c6
};
var f6 = /* @__PURE__ */ _e(n6, [["__cssModules", d6]]), h6 = /* @__PURE__ */ U({
  __name: "ListItems",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(e.$style.listItems)
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const m6 = "listItems";
var p6 = { listItems: m6 };
const g6 = {
  $style: p6
};
var Cu = /* @__PURE__ */ _e(h6, [["__cssModules", g6]]), v6 = /* @__PURE__ */ U({
  __name: "ListItemNote",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (g(), R(Yr, {
      class: k(e.$style.listItemNote),
      icon: "",
      item: t.item
    }, {
      default: q(() => [
        B(Jr, null, {
          default: q(() => [
            pi(ce(t.item.content), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "item"]));
  }
});
const y6 = "listItemNote";
var b6 = { listItemNote: y6 };
const k6 = {
  $style: b6
};
var w6 = /* @__PURE__ */ _e(v6, [["__cssModules", k6]]), I6 = /* @__PURE__ */ U({
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
    return (i, r) => (g(), N("button", {
      class: k(i.$style.listItemButton),
      "data-interactive": "",
      onTouchend: xl(s, ["stop", "prevent"])
    }, [
      B(c(Mn), {
        class: k(i.$style.listItemButtonIcon),
        icon: t.icon
      }, null, 8, ["class", "icon"])
    ], 34));
  }
});
const S6 = "listItemButton", C6 = "listItemButtonIcon";
var T6 = { listItemButton: S6, listItemButtonIcon: C6 };
const x6 = {
  $style: T6
};
var Tu = /* @__PURE__ */ _e(I6, [["__cssModules", x6]]), E6 = /* @__PURE__ */ U({
  __name: "ListItemButtons",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(e.$style.listItemButtons)
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const F6 = "listItemButtons";
var A6 = { listItemButtons: F6 };
const $6 = {
  $style: A6
};
var L6 = /* @__PURE__ */ _e(E6, [["__cssModules", $6]]), M6 = /* @__PURE__ */ U({
  __name: "ListItemQuantity",
  props: {
    quantity: {}
  },
  setup(t) {
    const e = new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }), n = ye(() => e.format(t.quantity));
    return (s, i) => (g(), N("div", {
      class: k(s.$style.listItemQuantity)
    }, ce(n.value) + "x ", 3));
  }
});
const D6 = "listItemQuantity";
var O6 = { listItemQuantity: D6 };
const B6 = {
  $style: O6
};
var V6 = /* @__PURE__ */ _e(M6, [["__cssModules", B6]]), N6 = /* @__PURE__ */ U({
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
    return (r, a) => (g(), R(Yr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item,
      direction: "horizontal"
    }, {
      default: q(() => [
        B(Jr, null, {
          default: q(() => [
            pi(ce(t.item.content), 1)
          ]),
          _: 1
        }),
        B(Vn, { name: "check" }, {
          default: q(() => [
            t.item.quantity && t.item.quantity > 1 ? (g(), R(V6, {
              key: 0,
              quantity: t.item.quantity
            }, null, 8, ["quantity"])) : Q("", !0)
          ]),
          _: 1
        }),
        B(c(jr)),
        B(Vn, { name: "check" }, {
          default: q(() => [
            t.item.checked ? Q("", !0) : (g(), R(L6, { key: 0 }, {
              default: q(() => [
                t.item.quantity && t.item.quantity > 1 ? (g(), R(Tu, {
                  key: 0,
                  icon: "",
                  onTap: a[0] || (a[0] = (l) => s())
                })) : Q("", !0),
                B(Tu, {
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
}), _6 = /* @__PURE__ */ U({
  __name: "ListItemFooter",
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(e.$style.listItemFooter)
    }, [
      le(e.$slots, "default")
    ], 2));
  }
});
const R6 = "listItemFooter";
var z6 = { listItemFooter: R6 };
const P6 = {
  $style: z6
};
var H6 = /* @__PURE__ */ _e(_6, [["__cssModules", P6]]);
const W6 = ["src", "alt"];
var U6 = /* @__PURE__ */ U({
  __name: "ListItemPerson",
  props: {
    image: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (g(), N("div", {
      class: k(e.$style.listItemPerson)
    }, [
      t.image ? (g(), N("img", {
        key: 0,
        class: k(e.$style.listItemPersonImage),
        src: t.image,
        alt: t.name
      }, null, 10, W6)) : Q("", !0),
      re("span", null, ce(t.name), 1)
    ], 2));
  }
});
const q6 = "listItemPerson", j6 = "listItemPersonImage";
var G6 = { listItemPerson: q6, listItemPersonImage: j6 };
const Z6 = {
  $style: G6
};
var Y6 = /* @__PURE__ */ _e(U6, [["__cssModules", Z6]]), J6 = /* @__PURE__ */ U({
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
    }), s = ye(() => {
      const i = se.now(), r = df(t.date, t.time);
      if (t.time) {
        const a = r.toFormat("HH:mm");
        return i.toISODate() === r.toISODate() ? `${Homey.__("widget.list.today_at")} ${a}` : i.year === r.year ? `${e.format(r.toJSDate())} ${a}` : `${n.format(r.toJSDate())} ${a}`;
      } else
        return i.toISODate() === r.toISODate() ? Homey.__("widget.list.today") : i.year === r.year ? e.format(r.toJSDate()) : n.format(r.toJSDate());
    });
    return (i, r) => (g(), N("div", {
      class: k(i.$style.listItemDate)
    }, ce(s.value), 3));
  }
});
const K6 = "listItemDate";
var Q6 = { listItemDate: K6 };
const X6 = {
  $style: Q6
};
var e8 = /* @__PURE__ */ _e(J6, [["__cssModules", X6]]), t8 = /* @__PURE__ */ U({
  __name: "ListItemTask",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (g(), R(Yr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item
    }, {
      default: q(() => [
        B(Jr, null, {
          default: q(() => [
            pi(ce(t.item.content), 1)
          ]),
          _: 1
        }),
        t.item.dueDate || t.item.person ? (g(), R(H6, { key: 0 }, {
          default: q(() => [
            t.item.person ? (g(), R(Y6, {
              key: 0,
              image: t.item.person.image,
              name: t.item.person.name
            }, null, 8, ["image", "name"])) : Q("", !0),
            t.item.dueDate ? (g(), R(e8, {
              key: 1,
              date: t.item.dueDate,
              time: t.item.dueTime
            }, null, 8, ["date", "time"])) : Q("", !0)
          ]),
          _: 1
        })) : Q("", !0)
      ]),
      _: 1
    }, 8, ["icon", "item"]));
  }
}), n8 = /* @__PURE__ */ U({
  __name: "List",
  props: {
    defaultDateFilter: {},
    defaultTypeFilter: {},
    deviceId: {},
    dynamicHeight: { type: Boolean },
    fixedHeight: {}
  },
  setup(t) {
    const e = Qt(), {
      categories: n,
      filteredCategorizedItems: s,
      hasActiveFilters: i,
      hasFilteredItems: r,
      hasItems: a,
      isLoading: l,
      look: o,
      changeChecked: u,
      changeQuantity: d,
      initFilters: f,
      loadCategories: h,
      loadItems: m,
      loadLook: v,
      loadPersons: C,
      removeItem: M,
      setItems: T
    } = zl(), _ = ee(null), I = ee(null), W = ee(!1);
    async function x() {
      switch (c(o)?.type) {
        case "grocery_list":
          _.value = "product";
          break;
        case "list":
          _.value = "task";
          break;
      }
    }
    async function $() {
      _.value = "note";
    }
    async function G(P) {
      I.value = P;
    }
    async function b(P) {
      switch (P.type) {
        case "product":
        case "task":
          await u(t.deviceId, P, !P.checked);
          break;
      }
    }
    async function w() {
      if (!t.dynamicHeight) {
        Homey.setHeight(Math.max(120, t.fixedHeight));
        return;
      }
      const P = document.querySelector("#app"), { height: z } = P.getBoundingClientRect();
      Homey.setHeight(c(_) || c(I) ? Math.max(420, z) : z);
    }
    return Homey.on("list-items-changed", async ({ id: P, items: z }) => {
      P === t.deviceId && await T(z);
    }), Homey.on("list-look-changed", async (P) => P === t.deviceId && await v(t.deviceId)), Oe([_, I, s, W], async () => {
      await w();
    }, { flush: "post" }), Oe(() => t.deviceId, async () => {
      f(
        t.defaultTypeFilter,
        t.defaultDateFilter
      ), await Promise.allSettled([
        h(t.deviceId),
        v(t.deviceId),
        m(t.deviceId),
        C(t.deviceId)
      ]);
    }, { immediate: !0 }), (P, z) => (g(), N(fe, null, [
      c(o) ? (g(), R(T3, {
        key: 0,
        color: c(o).color,
        "has-active-filters": c(i),
        icon: c(o).icon,
        name: c(o).name,
        onAdd: z[0] || (z[0] = (D) => x()),
        onAddNote: z[1] || (z[1] = (D) => $()),
        onFilter: z[2] || (z[2] = (D) => W.value = !W.value)
      }, null, 8, ["color", "has-active-filters", "icon", "name"])) : Q("", !0),
      B(Vn, {
        mode: "out-in",
        name: "check",
        onEnter: z[5] || (z[5] = (D) => w())
      }, {
        default: q(() => [
          c(l) && !c(a) ? (g(), R($3, { key: 0 })) : c(a) ? (g(), R(Cu, { key: 1 }, {
            default: q(() => [
              B(Vn, { name: "filter-slide" }, {
                default: q(() => [
                  W.value ? (g(), R(qk, { key: 0 })) : Q("", !0)
                ]),
                _: 1
              }),
              c(r) ? (g(), R(_c, {
                key: 0,
                name: "items",
                onAfterEnter: z[3] || (z[3] = (D) => w()),
                onAfterLeave: z[4] || (z[4] = (D) => w())
              }, {
                default: q(() => [
                  (g(!0), N(fe, null, Ze(c(s), (D, ne, me) => (g(), N(fe, { key: ne }, [
                    ne !== "__other__" ? (g(), R(Iu, {
                      key: 0,
                      icon: c(n).find((X) => X.category === ne)?.icon,
                      name: c(e)(`grocery.category.${ne}`)
                    }, null, 8, ["icon", "name"])) : me > 0 ? (g(), R(Iu, {
                      key: 1,
                      name: c(e)("widget.list.other")
                    }, null, 8, ["name"])) : Q("", !0),
                    (g(!0), N(fe, null, Ze(D, (X) => (g(), R(f6, {
                      key: X.id,
                      onLongPress: (Ce) => G(X),
                      onRemove: (Ce) => c(M)(t.deviceId, X),
                      onTap: (Ce) => b(X)
                    }, {
                      default: q(() => [
                        X.type === "note" ? (g(), R(w6, {
                          key: 0,
                          item: X
                        }, null, 8, ["item"])) : X.type === "product" ? (g(), R(N6, {
                          key: 1,
                          item: X,
                          onDecrease: (Ce) => c(d)(t.deviceId, X, "decrease"),
                          onIncrease: (Ce) => c(d)(t.deviceId, X, "increase")
                        }, null, 8, ["item", "onDecrease", "onIncrease"])) : X.type === "task" ? (g(), R(t8, {
                          key: 2,
                          item: X
                        }, null, 8, ["item"])) : Q("", !0)
                      ]),
                      _: 2
                    }, 1032, ["onLongPress", "onRemove", "onTap"]))), 128))
                  ], 64))), 128))
                ]),
                _: 1
              })) : Q("", !0),
              c(r) ? Q("", !0) : (g(), R(Su, {
                key: 1,
                filtered: !0
              }))
            ]),
            _: 1
          })) : (g(), R(Cu, { key: 2 }, {
            default: q(() => [
              B(Su)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }),
      B(c(Ki), null, {
        default: q(() => [
          _.value ? (g(), R($k, {
            key: 0,
            "device-id": t.deviceId,
            type: _.value,
            onClose: z[6] || (z[6] = (D) => _.value = null)
          }, null, 8, ["device-id", "type"])) : I.value ? (g(), R(Lk, {
            key: 1,
            "device-id": t.deviceId,
            item: I.value,
            onClose: z[7] || (z[7] = (D) => I.value = null)
          }, null, 8, ["device-id", "item"])) : Q("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), s8 = /* @__PURE__ */ U({
  __name: "ListWidget",
  setup(t) {
    const e = ee("all"), n = ee("all"), s = ee(null), i = ee(!0), r = ee(400), a = ee(!1);
    return window.addEventListener("homeyReady", () => {
      const l = Homey.getDeviceIds(), o = Homey.getSettings();
      e.value = o.defaultDateFilter ?? "all", n.value = o.defaultTypeFilter ?? "all", s.value = l[0] ?? null, i.value = o.dynamicHeight ?? !0, r.value = o.fixedHeight ?? 400, a.value = !0, Homey.ready();
    }), (l, o) => (g(), R(c(Fk), {
      class: k([l.$style.listWidget, !i.value && l.$style.listWidgetFixed])
    }, {
      default: q(() => [
        a.value ? (g(), R(n8, {
          key: 0,
          "default-date-filter": e.value,
          "default-type-filter": n.value,
          "device-id": s.value,
          "dynamic-height": i.value,
          "fixed-height": r.value
        }, null, 8, ["default-date-filter", "default-type-filter", "device-id", "dynamic-height", "fixed-height"])) : Q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const i8 = "listWidget", r8 = "listWidgetFixed";
var a8 = { listWidget: i8, listWidgetFixed: r8 };
const l8 = {
  $style: a8
};
var o8 = /* @__PURE__ */ _e(s8, [["__cssModules", l8]]), u8 = /* @__PURE__ */ U({
  __name: "PairView",
  setup(t) {
    const e = Qt(), n = ee([]), s = ee([]), i = Jt({
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
    return On(Pl, n), On(Hl, s), (a, l) => (g(), R(c(pf), {
      class: k(a.$style.pairView)
    }, {
      default: q(() => [
        B(c(si), {
          title: c(e)("device.list.pair.name.title"),
          description: c(e)("device.list.pair.name.description")
        }, {
          default: q(() => [
            B(c(gf), {
              modelValue: i.name,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.name = o),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(si), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: q(() => [
            B(c(mf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(si), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: q(() => [
            B(c(vf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[2] || (l[2] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(hf), {
          label: c(e)("device.list.pair.submit"),
          onClick: l[3] || (l[3] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const c8 = "pairView";
var d8 = { pairView: c8 };
const f8 = {
  $style: d8
};
var h8 = /* @__PURE__ */ _e(u8, [["__cssModules", f8]]), m8 = /* @__PURE__ */ U({
  __name: "RepairView",
  setup(t) {
    const e = Qt(), n = ee([]), s = ee([]), i = Jt({
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
    return On(Pl, n), On(Hl, s), (a, l) => (g(), R(c(pf), {
      class: k(a.$style.repairView)
    }, {
      default: q(() => [
        B(c(si), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: q(() => [
            B(c(mf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(si), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: q(() => [
            B(c(vf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        B(c(hf), {
          label: c(e)("device.list.repair.submit"),
          onClick: l[2] || (l[2] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const p8 = "repairView";
var g8 = { repairView: p8 };
const v8 = {
  $style: g8
};
var y8 = /* @__PURE__ */ _e(m8, [["__cssModules", v8]]);
var b8 = {
  prefix: "far",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z"]
}, k8 = {
  prefix: "far",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8l115.6 0c13.3 0 25.3 8.3 30 20.8L328 48 424 48c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48l96 0 16.2-43.2zm-84.6 448L28.7 144 76.9 144 99.5 449.2c.6 8.4 7.6 14.8 16 14.8l217.1 0c8.4 0 15.3-6.5 16-14.8l22.6-305.2 48.1 0-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3l-217.1 0c-33.5 0-61.3-25.9-63.8-59.3z"]
}, w8 = {
  prefix: "far",
  iconName: "bottle-droplet",
  icon: [320, 512, [], "e4c4", "M96-32c-17.7 0-32 14.3-32 32 0 11.8 6.4 22.2 16 27.7l0 121.7C32.2 177.1 0 228.7 0 288L0 456c0 48.6 39.4 88 88 88l144 0c48.6 0 88-39.4 88-88l0-168c0-59.3-32.2-110.9-80-138.6l0-121.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32L96-32zm32 64l64 0 0 132c0 9.4 5.5 18 14.1 21.9 38.9 17.6 65.9 56.7 65.9 102.1l0 168c0 22.1-17.9 40-40 40L88 496c-22.1 0-40-17.9-40-40l0-168c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9l0-132zm96 320c0-21.2-28.9-64.5-47.9-90.6-8.1-11.1-24.2-11.1-32.3 0-19 26.1-47.9 69.4-47.9 90.6 0 31.6 28.7 64 64 64s64-32.4 64-64z"]
}, I8 = {
  prefix: "far",
  iconName: "wheat",
  icon: [576, 512, [], "f72d", "M72.5 240c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L297.4 455c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-30.5-30.5-63 63c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l63-63-30.5-30.5c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zm145 202.9c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM184.5 128c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L409.4 343c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM73.7 299.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L73.7 299.1zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM296.5 16c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L521.4 231c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM185.7 187.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4l-27.9-27.9zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM297.7 75.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L297.7 75.1zM544.5-24c6.4 0 12.5 2.5 17 7s7 10.6 7 17l0 35-.1 5.2c-2.6 51.7-44 93.1-95.7 95.7l-5.2 .1-35 0c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17l0-35c0-55.8 45.2-101 101-101l35 0zm-35 48c-29.3 0-53 23.7-53 53l0 11 11 0 5.4-.3c25-2.5 44.8-22.4 47.3-47.3l.3-5.4 0-11-11 0z"]
}, S8 = {
  prefix: "far",
  iconName: "bottle-baby",
  icon: [320, 512, [], "e673", "M124.6 17.7L128 16 128 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 3.4 1.7c17.5 8.8 28.6 26.7 28.6 46.3 17.7 0 32 14.3 32 32l0 48 27.5 45.8c13.4 22.4 20.5 48 20.5 74.1L304 480c0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64l0-216.1c0-26.1 7.1-51.7 20.5-74.1L64 144 64 96c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3zM256 480l0-216.1c0-17.4-4.7-34.5-13.7-49.4l-13.5-22.5-137.6 0-13.5 22.5c-9 14.9-13.7 32-13.7 49.4l0 8.1 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 48c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"]
}, C8 = {
  prefix: "far",
  iconName: "bread-loaf",
  icon: [576, 512, [127838], "f7eb", "M152 80l96 0c57.4 0 104 46.6 104 104l0 31c0 3.7-2.5 6.9-6.1 7.8l-7.8 1.9C327.5 227.4 320 237 320 248l0 144c0 22.1-17.9 40-40 40l-160 0c-22.1 0-40-17.9-40-40l0-144c0-11-7.5-20.6-18.2-23.3l-7.8-1.9c-3.6-.9-6.1-4.1-6.1-7.8l0-31C48 126.6 94.6 80 152 80zM120 480l336 0c48.6 0 88-39.4 88-88l0-120.8c18.3-3.7 32-19.8 32-39.2l0-48c0-83.9-68.1-152-152-152L152 32C68.1 32 0 100.1 0 184l0 31c0 21.9 12.8 41.5 32 50.6L32 392c0 48.6 39.4 88 88 88zm336-48l-97.6 0c6.1-12 9.6-25.6 9.6-40l0-120 128 0 0 120c0 22.1-17.9 40-40 40zM399.3 224c.5-2.9 .7-5.9 .7-9l0-31c0-40.2-15.6-76.8-41.1-104L424 80c57.4 0 104 46.6 104 104l0 40-128.7 0z"]
}, T8 = {
  prefix: "far",
  iconName: "carrot",
  icon: [576, 512, [129365], "f787", "M392.4 25.9l6.5 6.5c21.9 21.9 21.9 57.3 0 79.2l-6.5 6.5-6.5-6.5c-21.9-21.9-21.9-57.3 0-79.2l6.5-6.5zm40.4 119.6c21.9-21.9 57.3-21.9 79.2 0l6.5 6.5-6.5 6.5c-21.9 21.9-57.3 21.9-79.2 0l-6.5-6.5 6.5-6.5zm30-64c2.7-29.7-7.3-60.4-30-83.1L420.7-13.7c-15.6-15.6-40.9-15.6-56.6 0L352-1.5c-27 27-36.1 65.2-27.1 99.7-8.2-1.4-16.6-2.1-25.3-2.1-58.3 0-111.3 34.1-135.5 87.2L35.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5L361.1 380.3c53.1-24.1 87.2-77.1 87.2-135.5 0-8.6-.7-17-2.1-25.2 34.5 8.9 72.7-.1 99.7-27.1L558 180.3c15.6-15.6 15.6-40.9 0-56.6l-12.1-12.1c-22.7-22.7-53.4-32.8-83.1-30zM234.3 168c17.9-15.2 40.9-24 65.3-24 55.7 0 100.8 45.1 100.8 100.8 0 39.5-23.1 75.4-59.1 91.8l-89.7 40.8-26.3-26.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L205 398.5 96.6 447.8 205.8 207.4 239.4 241c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-39-39z"]
}, x8 = {
  prefix: "far",
  iconName: "steak",
  icon: [576, 512, [129385], "f824", "M143.9 240.1l12.8 0c34.4 0 66-18.8 82.4-49.1l45.5-84.1C304.4 70.6 342.3 48 383.6 48 445.7 48 496 98.3 496 160.4L496 288c0 79.5-64.5 144-144 144l-208.1 0C91 432 48 389 48 336.1s43-95.9 95.9-95.9zm12.8-48l-12.8 0C64.4 192.1 0 256.6 0 336.1S64.4 480 143.9 480L352 480c106 0 192-86 192-192l0-127.6C544 71.8 472.2 0 383.6 0 324.7 0 270.5 32.3 242.5 84.1L197 168.2c-8 14.8-23.4 24-40.2 24zm-12.8 96c-26.5 0-47.9 21.5-47.9 47.9S117.5 384 143.9 384L352 384c53 0 96-43 96-96l0-127.6c0-35.6-28.8-64.4-64.4-64.4-23.6 0-45.4 13-56.7 33.8l-45.5 84.1c-24.8 45.8-72.6 74.3-124.6 74.3l-12.8 0zM360 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
}, E8 = {
  prefix: "far",
  iconName: "bowl-spoon",
  icon: [512, 512, [129379], "e3e0", "M112 128c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48zm0 48c52.2 0 96-30.6 108.5-72L488 104c13.3 0 24-10.7 24-24s-10.7-24-24-24L220.5 56C208 14.6 164.2-16 112-16 50.1-16 0 27 0 80s50.1 96 112 96zm64.5 282.9C172 447.1 163 437.6 151.5 432.5 90.4 404.8 48 343.3 48 272l416 0c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1l-144 0c-3.3 0-6.3-2-7.5-5.1zM48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8l144 0c23.8 0 44.2-14.9 52.3-35.8 77.7-35.2 131.7-113.4 131.7-204.2 0-26.5-21.5-48-48-48L48 224z"]
}, F8 = {
  prefix: "far",
  iconName: "pump-soap",
  icon: [320, 512, [], "e06b", "M128 48l64 0 0 80-64 0 0-80zM80 32l0 96-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-16 0 0-40 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-8c0-17.7-14.3-32-32-32L112 0C94.3 0 80 14.3 80 32zM192 176l64 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l128 0zm32 168c0-32.5-37-80.9-50.9-97.9-3.2-3.9-8.1-6.1-13.1-6.1s-9.9 2.2-13.1 6.1c-13.8 16.9-50.9 65.3-50.9 97.9 0 35.3 28.7 56 64 56s64-20.7 64-56z"]
}, A8 = {
  prefix: "far",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"]
}, $8 = {
  prefix: "far",
  iconName: "spray-can-sparkles",
  icon: [576, 512, ["air-freshener"], "f5d0", "M160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80zm0 176c-26.5 0-48 21.5-48 48l0 184c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-184c0-26.5-21.5-48-48-48l-128 0zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 184c0 39.8-32.2 72-72 72l-176 0c-39.8 0-72-32.2-72-72l0-184zm160 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM448 48c0 1.4-1 3-2.2 3.6L416 64 403.6 93.8C403 95 401.4 96 400 96s-3-1-3.6-2.2L384 64 354.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L384 32 396.4 2.2C397 1 398.6 0 400 0s3 1 3.6 2.2L416 32 445.8 44.4C447 45 448 46.6 448 48zm76.4 45.8L512 64 482.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 32 524.4 2.2C525 1 526.6 0 528 0s3 1 3.6 2.2L544 32 573.8 44.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 64 531.6 93.8C531 95 529.4 96 528 96s-3-1-3.6-2.2zm7.2 100.4L544 224 573.8 236.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 256 531.6 285.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L512 256 482.2 243.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 224 524.4 194.2c.6-1.2 2.2-2.2 3.6-2.2s3 1 3.6 2.2zM512 144c0 1.4-1 3-2.2 3.6L480 160 467.6 189.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L448 160 418.2 147.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L448 128 460.4 98.2C461 97 462.6 96 464 96s3 1 3.6 2.2L480 128 509.8 140.4c1.2 .6 2.2 2.2 2.2 3.6z"]
}, L8 = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, M8 = {
  prefix: "far",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9C512 342.1 403.9 448 273.2 448 191.7 448 121.9 392.4 101.8 316.8 68.7 347.4 48 391.3 48 440l0 16c0 13.3-10.7 24-24 24S0 469.2 0 456l0-16c0-75.1 38.3-141.2 96.4-179.9 6.1-91.7 82.4-164.1 175.6-164.1 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3zM464 79.9c-38.3 29.5-102.4 64.1-192 64.1-57.6 0-106.4 38.1-122.4 90.4 20.9-6.8 43.2-10.4 66.4-10.4l80 0c13.3 0 24 10.8 24 24s-10.7 24-24 24l-80 0c-25.4 0-49.4 5.7-71 15.8 7.9 63.1 62.6 112.2 128.2 112.2 104.7 0 190.8-84.9 190.8-189.1l0-131z"]
}, D8 = {
  prefix: "far",
  iconName: "fish",
  icon: [576, 512, [128031], "f578", "M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1 33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8-12.6-22.1-35-52.2-65.3-77.8-33.7-28.5-76-50.2-124.5-50.2s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1-14 15.8-36.7 20.6-56 11.8l-54.3-24.9 21.1 36.9c8.4 14.8 8.4 32.9 0 47.6l-21.1 36.9 54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35 39.2-33.1 92-61.5 155.5-61.5s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8 4.7 9.2 4.7 20.1 0 29.3-14.1 27.4-41.9 66.8-81 99.8-39.2 33.1-92 61.5-155.5 61.5s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5s-11.1-25.4-4.2-37.5zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, O8 = {
  prefix: "far",
  iconName: "olive-branch",
  icon: [640, 512, [], "e317", "M2.7 53.1C13.8 41.6 59 0 128 0 194.9 0 239.4 39.1 252.2 52L306 26.7C343.3 9.1 384 0 425.2 0L616 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L425.2 48c-34.2 0-67.9 7.5-98.8 22.1L191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0c-8.8 0-16-7.2-16-16l0-16C0 194.6 34.5 141.4 85.2 114.5 40.4 102.8 11.3 75.8 2.7 66.9 .9 65 0 62.6 0 60s.9-5 2.7-6.9zM399.4 427c19.3-25.7 32.6-63.3 32.6-107s-13.3-81.3-32.6-107c-19.2-25.7-42.2-37-63.4-37s-44.2 11.4-63.4 37C253.3 238.7 240 276.4 240 320s13.3 81.3 32.6 107c19.2 25.7 42.2 37 63.4 37s44.2-11.4 63.4-37zM336 512c-79.5 0-144-86-144-192s64.5-192 144-192 144 86 144 192-64.5 192-144 192zm129.7-40.2c9.4-13.1 17.6-27.5 24.4-43.1 3.6 .8 7.1 1.5 10.5 2 31.1 4.6 55-3.6 70.2-19.3 15.4-16 23.9-42.1 19.2-76-4.7-33.8-22.2-71.6-53.2-103.7-18-18.7-37.7-32.5-57.2-41.7-4.9-8.8-10.3-17.2-16.2-25-10.5-14-22.7-26.5-36.2-36.9 48.2 1.6 101.3 25.8 144.2 70.3 75 77.8 90.2 188.1 33.9 246.4-34.1 35.4-86.8 43.5-139.6 27z"]
}, B8 = {
  prefix: "far",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M209.5 369c-9.4 9.4-24.6 9.4-33.9 0L15.5 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143 143-143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-160 160z"]
}, V8 = {
  prefix: "far",
  iconName: "can-food",
  icon: [384, 512, [129387], "e3e6", "M320 434.3c-3.4 3-10.2 7.5-21.7 12.2-24.8 10.1-62.3 17.5-106.3 17.5s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2l0-144.8c14.2 6.2 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1l0 144.8zm48 5.7l0-368c0-39.8-78.8-72-176-72S16 32.2 16 72l0 368c0 39.8 78.8 72 176 72s176-32.2 176-72zM304 72c0 13.3-50.1 24-112 24S80 85.3 80 72 130.1 48 192 48 304 58.7 304 72zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, N8 = {
  prefix: "far",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"]
}, _8 = {
  prefix: "far",
  iconName: "cup-straw",
  icon: [384, 512, [129380], "e363", "M232.6-16C207.2-16 185 1.1 178.5 25.6L159.7 96 32 96C18.7 96 8 106.7 8 120s10.7 24 24 24L60.2 468.2C62.3 493 83.1 512 108 512l168 0c24.9 0 45.7-19 47.8-43.8L352 144c13.3 0 24-10.7 24-24s-10.7-24-24-24l-142.6 0 15.5-58.1c.9-3.5 4.1-5.9 7.7-5.9L264 32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-31.4 0zM80.2 144l223.6 0-27.8 320-168 0-27.8-320z"]
}, R8 = {
  prefix: "far",
  iconName: "salad",
  icon: [512, 512, [129367, "bowl-salad"], "f81e", "M272 208c0 11 1.2 21.7 3.6 32l-31.6 0 0-128c0-11-9-20-20-20s-20 9-20 20l0 127.7-93.9-93.9c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L147.7 240 96 240c-53 0-96-43-96-96S43 48 96 48c8.7 0 17.2 1.2 25.3 3.4 17.2-39.6 56.8-67.4 102.7-67.4s85.5 27.7 102.7 67.4c8-2.2 16.5-3.4 25.3-3.4 19.9 0 38.3 6 53.6 16.4-74.7 5.3-133.6 67.6-133.6 143.6zM117.9 422.3c12.9 5.7 22.7 16.7 26.8 30.3 2 6.6 8.2 11.4 15.3 11.4l192 0c7.2 0 13.4-4.8 15.3-11.4 4-13.5 13.8-24.6 26.8-30.3 35.2-15.4 61.2-47.6 68.1-86.3L49.8 336c6.9 38.7 32.9 70.9 68.1 86.3zM0 315.4C0 300.3 12.3 288 27.4 288l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 67.4-40.6 125.4-98.6 150.8-7.9 26.4-32.4 45.7-61.4 45.7l-192 0c-29 0-53.5-19.3-61.4-45.7-58.1-25.4-98.6-83.4-98.6-150.8zM464 208c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32l-54.8 0c-3.5-10-5.5-20.8-5.5-32 0-53 43-96 96-96s96 43 96 96c0 11.2-1.9 22-5.5 32l-54.8 0c7.6-8.5 12.2-19.7 12.2-32z"]
}, z8 = {
  prefix: "far",
  iconName: "paw-simple",
  icon: [448, 512, ["paw-alt"], "f701", "M192 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-.7 146.1c7.1-11.3 19.4-18.1 32.7-18.1s25.7 6.9 32.7 18.1l49.2 78.6c8.7 14 20.9 22.8 32.2 28.1 17.8 8.4 30 26.4 30 47.1 0 28.7-23.3 52-52 52-11.1 0-21.2-3.4-29.6-9.2-19.6-13.6-43.8-17.6-62.4-17.6s-42.8 4-62.4 17.6c-8.4 5.8-18.5 9.2-29.6 9.2-28.7 0-52-23.3-52-52 0-20.8 12.2-38.8 30-47.1 11.2-5.3 23.4-14.1 32.2-28.1l49.2-78.6zm-89.9 53.2c-2.8 4.5-7.1 7.8-11.8 10.1-34 16-57.6 50.5-57.6 90.6 0 55.2 44.8 100 100 100 21.2 0 40.8-6.6 56.9-17.8 17.4-12 52.8-12 70.1 0 16.2 11.2 35.8 17.8 56.9 17.8 55.2 0 100-44.8 100-100 0-40.1-23.6-74.6-57.6-90.6-4.8-2.2-9-5.6-11.8-10.1l-49.1-78.6C281.6 175.4 253.9 160 224 160s-57.6 15.4-73.4 40.7l-49.2 78.6zM304 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm144 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 240a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, P8 = {
  prefix: "far",
  iconName: "cheese-swiss",
  icon: [512, 512, [129472], "f7f0", "M464 256l0-15.8c0-88.5-71.7-160.2-160.2-160.2-.8 0-1.6 .2-2.3 .7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2C50 248.4 48 252.1 48 256l274.7 0c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32l50.7 0zM48 304l0 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-112-60.2 0c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16L48 304zm464-63.8L512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2zM176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
}, H8 = {
  prefix: "far",
  iconName: "capsules",
  icon: [576, 512, [], "f46b", "M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112-128 0 0-112zm0 288l0-125.3 128 0 0 125.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM32 112l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-105.8 116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3c-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112zM283.4 249.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l53.3 77.7-106.1 74.3-51.5-75.1zM411.9 436.6l-49.8-72.6 106.1-74.3 48 70c20.9 30.4 13.3 72.2-15.8 93-28.5 20.4-68 13.7-88.5-16.2z"]
}, W8 = {
  prefix: "far",
  iconName: "cookie",
  icon: [512, 512, [127850], "f563", "M240.5 64.6c-12-1.7-24.3 .5-35.1 6.2l-74 39.5C120.7 116 112 125 106.6 136L69.9 211.6c-5.4 11-7.1 23.5-5 35.6L79.4 330c2.1 12.1 8 23.2 16.8 31.7l60.3 58.4c8.8 8.5 20 14 32 15.7l83 11.7c12 1.7 24.3-.5 35.1-6.2l74-39.5C391.3 396 400 387 405.4 376l36.7-75.5c5.4-11 7.1-23.5 5-35.6L432.6 182c-2.1-12.1-8-23.2-16.8-31.7L355.5 91.9c-8.8-8.5-20-14-32-15.7l-83-11.7zM182.8 28.4c19.7-10.5 42.3-14.5 64.4-11.4l83 11.7c22.1 3.1 42.7 13.2 58.7 28.7l60.3 58.4c16.1 15.6 26.8 35.8 30.7 57.9l14.6 82.8c3.9 22.1 .7 44.8-9.1 64.9L448.6 397c-9.8 20.1-25.7 36.6-45.4 47.2l-74 39.5c-19.7 10.5-42.3 14.5-64.4 11.4l-83-11.7c-22.1-3.1-42.7-13.2-58.7-28.7L62.8 396.2C46.8 380.6 36 360.3 32.2 338.3L17.6 255.5c-3.9-22.1-.7-44.8 9.1-64.9L63.4 115c9.8-20.1 25.7-36.6 45.4-47.2l74-39.5zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, U8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  faAngleDown: B8,
  faBottleBaby: S8,
  faBottleDroplet: w8,
  faBowlSpoon: E8,
  faBreadLoaf: C8,
  faCalendar: A8,
  faCanFood: V8,
  faCapsules: H8,
  faCarrot: T8,
  faCheeseSwiss: P8,
  faCookie: W8,
  faCupStraw: _8,
  faFish: D8,
  faLeaf: M8,
  faMinus: b8,
  faOliveBranch: O8,
  faPawSimple: z8,
  faPlus: N8,
  faPumpSoap: F8,
  faSalad: R8,
  faSnowflake: L8,
  faSprayCanSparkles: $8,
  faSteak: x8,
  faTrash: k8,
  faWheat: I8
});
sm(U8);
function Wl(t, e) {
  const n = Xh(t);
  return n.config.globalProperties.t = (s) => Homey.__(s) ?? s, n.use(Tm()), n.mount(e), n;
}
function G8(t) {
  Wl(o8, t);
}
function Z8(t) {
  Wl(h8, t);
}
function Y8(t) {
  Wl(y8, t);
}
window.onHomeyReady = function() {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("homeyReady"));
  }, 300);
};
export {
  hf as ButtonPrimary,
  q8 as ButtonTransparent,
  mf as ColorPicker,
  pf as Form,
  si as FormGroup,
  gf as FormInput,
  Mn as Icon,
  vf as IconPicker,
  j8 as ScrollContainer,
  G8 as createListWidget,
  Z8 as createPairView,
  Y8 as createRepairView,
  Qt as useTranslate
};
