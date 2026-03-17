var Dl, Al;
let Vd, bt, _e, Sr, $r, Qa, Ru, Bd, Ws, Pu;
function Fo(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
let Ee = {}, Ti = [], Sn = () => {
}, Sm = () => !1, Oo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || 97 > t.charCodeAt(2)), _c = (t) => t.startsWith("onUpdate:"), Qe = Object.assign, zc = (t, e) => {
  let n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, sy = Object.prototype.hasOwnProperty, De = (t, e) => sy.call(t, e), re = Array.isArray, he = (t) => typeof t == "function", He = (t) => typeof t == "string", fn = (t) => typeof t == "symbol", Ve = (t) => t !== null && typeof t == "object", $m = (t) => (Ve(t) || he(t)) && he(t.then) && he(t.catch), ct = Object.prototype.toString, Do = (t) => He(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ir = Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Ao = (t) => {
  let e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, iy = /-\w/g, Rt = Ao((t) => t.replace(iy, (e) => e.slice(1).toUpperCase())), ry = /\B([A-Z])/g, Ds = Ao((t) => t.replace(ry, "-$1").toLowerCase()), Lo = Ao((t) => t.charAt(0).toUpperCase() + t.slice(1)), _a = Ao((t) => t ? `on${Lo(t)}` : ""), Lt = (t, e) => !Object.is(t, e), za = (t, ...e) => {
  for (let n = 0; n < t.length; n++) t[n](...e);
}, Im = (t, e, n, s = !1) => {
  Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: s, value: n });
}, No = (t) => {
  let e = parseFloat(t);
  return isNaN(e) ? t : e;
}, Ll = (t) => {
  let e = He(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
}, Vo = () => Vd || (Vd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), ay = Fo("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function st(t) {
  if (re(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) {
      let s = t[n], i = He(s) ? (function(r) {
        let a = {};
        return r.replace(uy, "").split(oy).forEach((o) => {
          if (o) {
            let l = o.split(ly);
            l.length > 1 && (a[l[0].trim()] = l[1].trim());
          }
        }), a;
      })(s) : st(s);
      if (i) for (let r in i) e[r] = i[r];
    }
    return e;
  }
  if (He(t) || Ve(t)) return t;
}
let oy = /;(?![^(]*\))/g, ly = /:([^]+)/, uy = /\/\*[^]*?\*\//g;
function $(t) {
  let e = "";
  if (He(t)) e = t;
  else if (re(t)) for (let n = 0; n < t.length; n++) {
    let s = $(t[n]);
    s && (e += s + " ");
  }
  else if (Ve(t)) for (let n in t) t[n] && (e += n + " ");
  return e.trim();
}
function Nl(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !He(e) && (t.class = $(e)), n && (t.style = st(n)), t;
}
let cy = Fo("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function ei(t, e) {
  let n, s;
  if (t === e) return !0;
  let i = (n = t, ct.call(n) === "[object Date]"), r = (s = e, ct.call(s) === "[object Date]");
  if (i || r) return !!i && !!r && t.getTime() === e.getTime();
  if (i = fn(t), r = fn(e), i || r) return t === e;
  if (i = re(t), r = re(e), i || r) return !!i && !!r && (function(a, o) {
    if (a.length !== o.length) return !1;
    let l = !0;
    for (let u = 0; l && u < a.length; u++) l = ei(a[u], o[u]);
    return l;
  })(t, e);
  if (i = Ve(t), r = Ve(e), i || r) {
    if (!i || !r || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (let a in t) {
      let o = t.hasOwnProperty(a), l = e.hasOwnProperty(a);
      if (o && !l || !o && l || !ei(t[a], e[a])) return !1;
    }
  }
  return String(t) === String(e);
}
function Rc(t, e) {
  return t.findIndex((n) => ei(n, e));
}
let Mm = (t) => !!(t && t.__v_isRef === !0), ye = (t) => He(t) ? t : t == null ? "" : re(t) || Ve(t) && (t.toString === ct || !he(t.toString)) ? Mm(t) ? ye(t.value) : JSON.stringify(t, Cm, 2) : String(t), Cm = (t, e) => {
  let n;
  if (Mm(e)) return Cm(t, e.value);
  if (n = e, ct.call(n) === "[object Map]") return { [`Map(${e.size})`]: [...e.entries()].reduce((s, [i, r], a) => (s[Vl(i, a) + " =>"] = r, s), {}) };
  {
    let s;
    if (s = e, ct.call(s) === "[object Set]") return { [`Set(${e.size})`]: [...e.values()].map((i) => Vl(i)) };
    {
      if (fn(e)) return Vl(e);
      let i;
      if (Ve(e) && !re(e) && (i = e, ct.call(i) !== "[object Object]")) return String(e);
    }
  }
  return e;
}, Vl = (t, e = "") => {
  var n;
  return fn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
class Em {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = bt, !e && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1);
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
      let n = bt;
      try {
        return bt = this, e();
      } finally {
        bt = n;
      }
    }
  }
  on() {
    ++this._on == 1 && (this.prevScope = bt, bt = this);
  }
  off() {
    this._on > 0 && --this._on == 0 && (bt = this.prevScope, this.prevScope = void 0);
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
function Fm(t) {
  return new Em(t);
}
function Om() {
  return bt;
}
function Dm(t, e = !1) {
  bt && bt.cleanups.push(t);
}
let Bl = /* @__PURE__ */ new WeakSet();
class Am {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, bt && bt.active && bt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, Bl.has(this) && (Bl.delete(this), this.trigger()));
  }
  notify() {
    (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || Lm(this));
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, _d(this), Nm(this);
    let e = _e, n = cn;
    _e = this, cn = !0;
    try {
      return this.fn();
    } finally {
      Vm(this), _e = e, cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) Wc(e);
      this.deps = this.depsTail = void 0, _d(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? Bl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Wu(this) && this.run();
  }
  get dirty() {
    return Wu(this);
  }
}
let Bo = 0;
function Lm(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = $r, $r = t;
    return;
  }
  t.next = Sr, Sr = t;
}
function Pc() {
  let t;
  if (!(--Bo > 0)) {
    if ($r) {
      let e = $r;
      for ($r = void 0; e; ) {
        let n = e.next;
        e.next = void 0, e.flags &= -9, e = n;
      }
    }
    for (; Sr; ) {
      let e = Sr;
      for (Sr = void 0; e; ) {
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
function Nm(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Vm(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    let i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Wc(s), (function(r) {
      let { prevDep: a, nextDep: o } = r;
      a && (a.nextDep = o, r.prevDep = void 0), o && (o.prevDep = a, r.nextDep = void 0);
    })(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  t.deps = e, t.depsTail = n;
}
function Wu(t) {
  for (let e = t.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (Bm(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty;
}
function Bm(t) {
  if (4 & t.flags && !(16 & t.flags) || (t.flags &= -17, t.globalVersion === _r) || (t.globalVersion = _r, !t.isSSR && 128 & t.flags && (!t.deps && !t._dirty || !Wu(t)))) return;
  t.flags |= 2;
  let e = t.dep, n = _e, s = cn;
  _e = t, cn = !0;
  try {
    Nm(t);
    let i = t.fn(t._value);
    (e.version === 0 || Lt(i, t._value)) && (t.flags |= 128, t._value = i, e.version++);
  } catch (i) {
    throw e.version++, i;
  } finally {
    _e = n, cn = s, Vm(t), t.flags &= -3;
  }
}
function Wc(t, e = !1) {
  let { dep: n, prevSub: s, nextSub: i } = t;
  if (s && (s.nextSub = i, t.prevSub = void 0), i && (i.prevSub = s, t.nextSub = void 0), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) Wc(r, !0);
  }
  e || --n.sc || !n.map || n.map.delete(n.key);
}
let cn = !0, _m = [];
function Zn() {
  _m.push(cn), cn = !1;
}
function jn() {
  let t = _m.pop();
  cn = t === void 0 || t;
}
function _d(t) {
  let { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    let n = _e;
    _e = void 0;
    try {
      e();
    } finally {
      _e = n;
    }
  }
}
let _r = 0;
class dy {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class _o {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!_e || !cn || _e === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e) n = this.activeLink = new dy(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, (function s(i) {
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
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = _e.depsTail, n.nextDep = void 0, _e.depsTail.nextDep = n, _e.depsTail = n, _e.deps === n && (_e.deps = s);
    }
    return n;
  }
  trigger(e) {
    this.version++, _r++, this.notify(e);
  }
  notify(e) {
    Bo++;
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      Pc();
    }
  }
}
let eo = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ Symbol(""), Hu = /* @__PURE__ */ Symbol(""), zr = /* @__PURE__ */ Symbol("");
function xt(t, e, n) {
  if (cn && _e) {
    let s = eo.get(t);
    s || eo.set(t, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new _o()), i.map = s, i.key = n), i.track();
  }
}
function Rn(t, e, n, s, i, r) {
  let a = eo.get(t);
  if (!a) return void _r++;
  let o = (l) => {
    l && l.trigger();
  };
  if (Bo++, e === "clear") a.forEach(o);
  else {
    let l = re(t), u = l && Do(n);
    if (l && n === "length") {
      let c = Number(s);
      a.forEach((f, m) => {
        (m === "length" || m === zr || !fn(m) && m >= c) && o(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && o(a.get(n)), u && o(a.get(zr)), e) {
      case "add":
        if (l) u && o(a.get("length"));
        else {
          let f;
          o(a.get(Ys)), f = t, ct.call(f) === "[object Map]" && o(a.get(Hu));
        }
        break;
      case "delete":
        if (!l) {
          let f;
          o(a.get(Ys)), f = t, ct.call(f) === "[object Map]" && o(a.get(Hu));
        }
        break;
      case "set":
        let c;
        c = t, ct.call(c) === "[object Map]" && o(a.get(Ys));
    }
  }
  Pc();
}
function ci(t) {
  let e = Te(t);
  return e === t ? e : (xt(e, "iterate", zr), Vt(t) ? e : e.map(dn));
}
function zo(t) {
  return xt(t = Te(t), "iterate", zr), t;
}
function hs(t, e) {
  return Gn(t) ? Mn(t) ? Si(dn(e)) : Si(e) : dn(e);
}
let fy = { __proto__: null, [Symbol.iterator]() {
  return _l(this, Symbol.iterator, (t) => hs(this, t));
}, concat(...t) {
  return ci(this).concat(...t.map((e) => re(e) ? ci(e) : e));
}, entries() {
  return _l(this, "entries", (t) => (t[1] = hs(this, t[1]), t));
}, every(t, e) {
  return Ln(this, "every", t, e, void 0, arguments);
}, filter(t, e) {
  return Ln(this, "filter", t, e, (n) => n.map((s) => hs(this, s)), arguments);
}, find(t, e) {
  return Ln(this, "find", t, e, (n) => hs(this, n), arguments);
}, findIndex(t, e) {
  return Ln(this, "findIndex", t, e, void 0, arguments);
}, findLast(t, e) {
  return Ln(this, "findLast", t, e, (n) => hs(this, n), arguments);
}, findLastIndex(t, e) {
  return Ln(this, "findLastIndex", t, e, void 0, arguments);
}, forEach(t, e) {
  return Ln(this, "forEach", t, e, void 0, arguments);
}, includes(...t) {
  return zl(this, "includes", t);
}, indexOf(...t) {
  return zl(this, "indexOf", t);
}, join(t) {
  return ci(this).join(t);
}, lastIndexOf(...t) {
  return zl(this, "lastIndexOf", t);
}, map(t, e) {
  return Ln(this, "map", t, e, void 0, arguments);
}, pop() {
  return rr(this, "pop");
}, push(...t) {
  return rr(this, "push", t);
}, reduce(t, ...e) {
  return zd(this, "reduce", t, e);
}, reduceRight(t, ...e) {
  return zd(this, "reduceRight", t, e);
}, shift() {
  return rr(this, "shift");
}, some(t, e) {
  return Ln(this, "some", t, e, void 0, arguments);
}, splice(...t) {
  return rr(this, "splice", t);
}, toReversed() {
  return ci(this).toReversed();
}, toSorted(t) {
  return ci(this).toSorted(t);
}, toSpliced(...t) {
  return ci(this).toSpliced(...t);
}, unshift(...t) {
  return rr(this, "unshift", t);
}, values() {
  return _l(this, "values", (t) => hs(this, t));
} };
function _l(t, e, n) {
  let s = zo(t), i = s[e]();
  return s === t || Vt(t) || (i._next = i.next, i.next = () => {
    let r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
let hy = Array.prototype;
function Ln(t, e, n, s, i, r) {
  let a = zo(t), o = a !== t && !Vt(t), l = a[e];
  if (l !== hy[e]) {
    let f = l.apply(t, r);
    return o ? dn(f) : f;
  }
  let u = n;
  a !== t && (o ? u = function(f, m) {
    return n.call(this, hs(t, f), m, t);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, t);
  }));
  let c = l.call(a, u, s);
  return o && i ? i(c) : c;
}
function zd(t, e, n, s) {
  let i = zo(t), r = n;
  return i !== t && (Vt(t) ? n.length > 3 && (r = function(a, o, l) {
    return n.call(this, a, o, l, t);
  }) : r = function(a, o, l) {
    return n.call(this, a, hs(t, o), l, t);
  }), i[e](r, ...s);
}
function zl(t, e, n) {
  let s = Te(t);
  xt(s, "iterate", zr);
  let i = s[e](...n);
  return (i === -1 || i === !1) && Po(n[0]) ? (n[0] = Te(n[0]), s[e](...n)) : i;
}
function rr(t, e, n = []) {
  Zn(), Bo++;
  let s = Te(t)[e].apply(t, n);
  return Pc(), jn(), s;
}
let my = Fo("__proto__,__v_isRef,__isVue"), zm = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(fn));
function py(t) {
  fn(t) || (t = String(t));
  let e = Te(this);
  return xt(e, "has", t), e.hasOwnProperty(t);
}
class Rm {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    let i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return s === (i ? r ? xy : qm : r ? Um : Hm).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    let a = re(e);
    if (!i) {
      let l;
      if (a && (l = fy[n])) return l;
      if (n === "hasOwnProperty") return py;
    }
    let o = Reflect.get(e, n, Ze(e) ? e : s);
    if ((fn(n) ? zm.has(n) : my(n)) || (i || xt(e, "get", n), r)) return o;
    if (Ze(o)) {
      let l = a && Do(n) ? o : o.value;
      return i && Ve(l) ? _n(l) : l;
    }
    return Ve(o) ? i ? _n(o) : On(o) : o;
  }
}
class Pm extends Rm {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, i) {
    let r = e[n], a = re(e) && Do(n);
    if (!this._isShallow) {
      let u = Gn(r);
      if (Vt(s) || Gn(s) || (r = Te(r), s = Te(s)), !a && Ze(r) && !Ze(s)) return u || (r.value = s), !0;
    }
    let o = a ? Number(n) < e.length : De(e, n), l = Reflect.set(e, n, s, Ze(e) ? e : i);
    return e === Te(i) && (o ? Lt(s, r) && Rn(e, "set", n, s) : Rn(e, "add", n, s)), l;
  }
  deleteProperty(e, n) {
    let s = De(e, n);
    e[n];
    let i = Reflect.deleteProperty(e, n);
    return i && s && Rn(e, "delete", n, void 0), i;
  }
  has(e, n) {
    let s = Reflect.has(e, n);
    return fn(n) && zm.has(n) || xt(e, "has", n), s;
  }
  ownKeys(e) {
    return xt(e, "iterate", re(e) ? "length" : Ys), Reflect.ownKeys(e);
  }
}
class Wm extends Rm {
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
let gy = new Pm(), yy = new Wm(), vy = new Pm(!0);
new Wm(!0);
let Rl = (t) => t;
function ga(t) {
  return function() {
    return t !== "delete" && (t === "clear" ? void 0 : this);
  };
}
function Ro(t, e) {
  let n, s = (Qe(n = { get(i) {
    let r = this.__v_raw, a = Te(r), o = Te(i);
    t || (Lt(i, o) && xt(a, "get", i), xt(a, "get", o));
    let { has: l } = Reflect.getPrototypeOf(a), u = e ? Rl : t ? Si : dn;
    return l.call(a, i) ? u(r.get(i)) : l.call(a, o) ? u(r.get(o)) : void (r !== a && r.get(i));
  }, get size() {
    let i = this.__v_raw;
    return t || xt(Te(i), "iterate", Ys), i.size;
  }, has(i) {
    let r = this.__v_raw, a = Te(r), o = Te(i);
    return t || (Lt(i, o) && xt(a, "has", i), xt(a, "has", o)), i === o ? r.has(i) : r.has(i) || r.has(o);
  }, forEach(i, r) {
    let a = this, o = a.__v_raw, l = Te(o), u = e ? Rl : t ? Si : dn;
    return t || xt(l, "iterate", Ys), o.forEach((c, f) => i.call(r, u(c), u(f), a));
  } }, t ? { add: ga("add"), set: ga("set"), delete: ga("delete"), clear: ga("clear") } : { add(i) {
    e || Vt(i) || Gn(i) || (i = Te(i));
    let r = Te(this);
    return Reflect.getPrototypeOf(r).has.call(r, i) || (r.add(i), Rn(r, "add", i, i)), this;
  }, set(i, r) {
    e || Vt(r) || Gn(r) || (r = Te(r));
    let a = Te(this), { has: o, get: l } = Reflect.getPrototypeOf(a), u = o.call(a, i);
    u || (i = Te(i), u = o.call(a, i));
    let c = l.call(a, i);
    return a.set(i, r), u ? Lt(r, c) && Rn(a, "set", i, r) : Rn(a, "add", i, r), this;
  }, delete(i) {
    let r = Te(this), { has: a, get: o } = Reflect.getPrototypeOf(r), l = a.call(r, i);
    l || (i = Te(i), l = a.call(r, i)), o && o.call(r, i);
    let u = r.delete(i);
    return l && Rn(r, "delete", i, void 0), u;
  }, clear() {
    let i = Te(this), r = i.size !== 0, a = i.clear();
    return r && Rn(i, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = function(...r) {
      let a, o = this.__v_raw, l = Te(o), u = (a = l, ct.call(a) === "[object Map]"), c = i === "entries" || i === Symbol.iterator && u, f = o[i](...r), m = e ? Rl : t ? Si : dn;
      return t || xt(l, "iterate", i === "keys" && u ? Hu : Ys), { next() {
        let { value: h, done: p } = f.next();
        return p ? { value: h, done: p } : { value: c ? [m(h[0]), m(h[1])] : m(h), done: p };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }), n);
  return (i, r, a) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(De(s, r) && r in i ? s : i, r, a);
}
let by = { get: Ro(!1, !1) }, ky = { get: Ro(!1, !0) }, wy = { get: Ro(!0, !1) };
Ro(!0, !0);
let Hm = /* @__PURE__ */ new WeakMap(), Um = /* @__PURE__ */ new WeakMap(), qm = /* @__PURE__ */ new WeakMap(), xy = /* @__PURE__ */ new WeakMap();
function On(t) {
  return Gn(t) ? t : Hc(t, !1, gy, by, Hm);
}
function Ty(t) {
  return Hc(t, !1, vy, ky, Um);
}
function _n(t) {
  return Hc(t, !0, yy, wy, qm);
}
function Hc(t, e, n, s, i) {
  var r;
  let a;
  if (!Ve(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
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
  })((a = r, ct.call(a)).slice(8, -1));
  if (o === 0) return t;
  let l = i.get(t);
  if (l) return l;
  let u = new Proxy(t, o === 2 ? s : n);
  return i.set(t, u), u;
}
function Mn(t) {
  return Gn(t) ? Mn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Gn(t) {
  return !!(t && t.__v_isReadonly);
}
function Vt(t) {
  return !!(t && t.__v_isShallow);
}
function Po(t) {
  return !!t && !!t.__v_raw;
}
function Te(t) {
  let e = t && t.__v_raw;
  return e ? Te(e) : t;
}
function Wo(t) {
  return !De(t, "__v_skip") && Object.isExtensible(t) && Im(t, "__v_skip", !0), t;
}
let dn = (t) => Ve(t) ? On(t) : t, Si = (t) => Ve(t) ? _n(t) : t;
function Ze(t) {
  return !!t && t.__v_isRef === !0;
}
function ie(t) {
  return Zm(t, !1);
}
function Sy(t) {
  return Zm(t, !0);
}
function Zm(t, e) {
  return Ze(t) ? t : new $y(t, e);
}
class $y {
  constructor(e, n) {
    this.dep = new _o(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : Te(e), this._value = n ? e : dn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    let n = this._rawValue, s = this.__v_isShallow || Vt(e) || Gn(e);
    Lt(e = s ? e : Te(e), n) && (this._rawValue = e, this._value = s ? e : dn(e), this.dep.trigger());
  }
}
function d(t) {
  return Ze(t) ? t.value : t;
}
let Iy = { get: (t, e, n) => e === "__v_raw" ? t : d(Reflect.get(t, e, n)), set: (t, e, n, s) => {
  let i = t[e];
  return Ze(i) && !Ze(n) ? (i.value = n, !0) : Reflect.set(t, e, n, s);
} };
function jm(t) {
  return Mn(t) ? t : new Proxy(t, Iy);
}
class My {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    let n = this.dep = new _o(), { get: s, set: i } = e(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function Gm(t) {
  return new My(t);
}
function Cy(t) {
  let e = re(t) ? Array(t.length) : {};
  for (let n in t) e[n] = new Ym(t, n, void 0);
  return e;
}
class Ym {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = Te(e);
    let i = !0, r = e;
    if (!re(e) || !Do(String(n))) do
      i = !Po(r) || Vt(r);
    while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = d(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && Ze(this._raw[this._key])) {
      let n = this._object[this._key];
      if (Ze(n)) {
        n.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    var e, n;
    let s;
    return e = this._raw, n = this._key, (s = eo.get(e)) && s.get(n);
  }
}
class Ey {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Yn(t, e, n) {
  return Ze(t) ? t : he(t) ? new Ey(t) : !Ve(t) || !(arguments.length > 1) ? ie(t) : new Ym(t, e, n);
}
class Fy {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new _o(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = _r - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && _e !== this) return Lm(this, !0), !0;
  }
  get value() {
    let e = this.dep.track();
    return Bm(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
let ya = {}, to = /* @__PURE__ */ new WeakMap();
function Oy(t, e = !1, n = Ws) {
  if (n) {
    let s = to.get(n);
    s || to.set(n, s = []), s.push(t);
  }
}
function Pn(t, e = 1 / 0, n) {
  if (e <= 0 || !Ve(t) || t.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(t) || 0) >= e) return t;
  if (n.set(t, e), e--, Ze(t)) Pn(t.value, e, n);
  else if (re(t)) for (let s = 0; s < t.length; s++) Pn(t[s], e, n);
  else {
    let s, i;
    if (s = t, ct.call(s) === "[object Set]" || (i = t, ct.call(i) === "[object Map]")) t.forEach((r) => {
      Pn(r, e, n);
    });
    else {
      let r;
      if (r = t, ct.call(r) === "[object Object]") {
        for (let a in t) Pn(t[a], e, n);
        for (let a of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, a) && Pn(t[a], e, n);
      }
    }
  }
  return t;
}
function Jr(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (i) {
    Ho(i, e, n);
  }
}
function hn(t, e, n, s) {
  if (he(t)) {
    let i = Jr(t, e, n, s);
    return i && $m(i) && i.catch((r) => {
      Ho(r, e, n);
    }), i;
  }
  if (re(t)) {
    let i = [];
    for (let r = 0; r < t.length; r++) i.push(hn(t[r], e, n, s));
    return i;
  }
}
function Ho(t, e, n, s = !0) {
  e && e.vnode;
  let { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || Ee;
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
      Zn(), Jr(i, null, 10, [t, o, l]), jn();
      return;
    }
  }
  (function(a, o, l, u = !0, c = !1) {
    if (c) throw a;
    console.error(a);
  })(t, 0, 0, s, r);
}
let Ot = [], wn = -1, $i = [], ms = null, vi = 0, Jm = Promise.resolve(), Ra = null;
function qs(t) {
  let e = Ra || Jm;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Uc(t) {
  if (!(1 & t.flags)) {
    let e = Mr(t), n = Ot[Ot.length - 1];
    !n || !(2 & t.flags) && e >= Mr(n) ? Ot.push(t) : Ot.splice((function(s) {
      let i = wn + 1, r = Ot.length;
      for (; i < r; ) {
        let a = i + r >>> 1, o = Ot[a], l = Mr(o);
        l < s || l === s && 2 & o.flags ? i = a + 1 : r = a;
      }
      return i;
    })(e), 0, t), t.flags |= 1, Xm();
  }
}
function Xm() {
  Ra || (Ra = Jm.then(function t(e) {
    try {
      for (wn = 0; wn < Ot.length; wn++) {
        let n = Ot[wn];
        n && !(8 & n.flags) && (4 & n.flags && (n.flags &= -2), Jr(n, n.i, n.i ? 15 : 14), 4 & n.flags || (n.flags &= -2));
      }
    } finally {
      for (; wn < Ot.length; wn++) {
        let n = Ot[wn];
        n && (n.flags &= -2);
      }
      wn = -1, Ot.length = 0, Km(), Ra = null, (Ot.length || $i.length) && t();
    }
  }));
}
function Dy(t) {
  re(t) ? $i.push(...t) : ms && t.id === -1 ? ms.splice(vi + 1, 0, t) : 1 & t.flags || ($i.push(t), t.flags |= 1), Xm();
}
function Rd(t, e, n = wn + 1) {
  for (; n < Ot.length; n++) {
    let s = Ot[n];
    if (s && 2 & s.flags) {
      if (t && s.id !== t.uid) continue;
      Ot.splice(n, 1), n--, 4 & s.flags && (s.flags &= -2), s(), 4 & s.flags || (s.flags &= -2);
    }
  }
}
function Km(t) {
  if ($i.length) {
    let e = [...new Set($i)].sort((n, s) => Mr(n) - Mr(s));
    if ($i.length = 0, ms) return void ms.push(...e);
    for (vi = 0, ms = e; vi < ms.length; vi++) {
      let n = ms[vi];
      4 & n.flags && (n.flags &= -2), 8 & n.flags || n(), n.flags &= -2;
    }
    ms = null, vi = 0;
  }
}
let Mr = (t) => t.id == null ? 2 & t.flags ? -1 : 1 / 0 : t.id, yt = null, Qm = null;
function no(t) {
  let e = yt;
  return yt = t, Qm = t && t.type.__scopeId || null, e;
}
function j(t, e = yt, n) {
  if (!e || t._n) return t;
  let s = (...i) => {
    let r;
    s._d && lo(-1);
    let a = no(e);
    try {
      r = t(...i);
    } finally {
      no(a), s._d && lo(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function qc(t, e) {
  if (yt === null) return t;
  let n = Go(yt), s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [r, a, o, l = Ee] = e[i];
    r && (he(r) && (r = { mounted: r, updated: r }), r.deep && Pn(a), s.push({ dir: r, instance: n, value: a, oldValue: void 0, arg: o, modifiers: l }));
  }
  return t;
}
function Ns(t, e, n, s) {
  let i = t.dirs, r = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    let o = i[a];
    r && (o.oldValue = r[a].value);
    let l = o.dir[s];
    l && (Zn(), hn(l, n, 8, [t.el, o, t, e]), jn());
  }
}
let e0 = /* @__PURE__ */ Symbol("_vte"), hr = (t) => t && (t.disabled || t.disabled === ""), Pd = (t) => t && (t.defer || t.defer === ""), Wd = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Hd = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, Pl = (t, e) => {
  let n = t && t.to;
  return He(n) ? e ? e(n) : null : n;
}, t0 = { name: "Teleport", __isTeleport: !0, process(t, e, n, s, i, r, a, o, l, u) {
  let { mc: c, pc: f, pbc: m, o: { insert: h, querySelector: p, createText: b } } = u, S = hr(e.props), { shapeFlag: k, children: F, dynamicChildren: T } = e;
  if (t == null) {
    let O = e.el = b(""), I = e.anchor = b("");
    h(O, n, s), h(I, n, s);
    let N = (w, x) => {
      16 & k && c(F, w, x, i, r, a, o, l);
    }, Z = () => {
      let w = e.target = Pl(e.props, p), x = Ud(w, e, b, h);
      w && (a !== "svg" && Wd(w) ? a = "svg" : a !== "mathml" && Hd(w) && (a = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(w), S || (N(w, x), ba(e, !1)));
    };
    S && (N(n, I), ba(e, !0)), Pd(e.props) ? (e.el.__isMounted = !1, Et(() => {
      Z(), delete e.el.__isMounted;
    }, r)) : Z();
  } else {
    if (Pd(e.props) && t.el.__isMounted === !1) return void Et(() => {
      t0.process(t, e, n, s, i, r, a, o, l, u);
    }, r);
    e.el = t.el, e.targetStart = t.targetStart;
    let O = e.anchor = t.anchor, I = e.target = t.target, N = e.targetAnchor = t.targetAnchor, Z = hr(t.props), w = Z ? n : I, x = Z ? O : N;
    if (a === "svg" || Wd(I) ? a = "svg" : (a === "mathml" || Hd(I)) && (a = "mathml"), T ? (m(t.dynamicChildren, T, w, i, r, a, o), Qc(t, e, !0)) : l || f(t, e, w, x, i, r, a, o, !1), S) Z ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : va(e, n, O, u, 1);
    else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
      let B = e.target = Pl(e.props, p);
      B && va(e, B, null, u, 0);
    } else Z && va(e, I, N, u, 1);
    ba(e, S);
  }
}, remove(t, e, n, { um: s, o: { remove: i } }, r) {
  let { shapeFlag: a, children: o, anchor: l, targetStart: u, targetAnchor: c, target: f, props: m } = t;
  if (f && (i(u), i(c)), r && i(l), 16 & a) {
    let h = r || !hr(m);
    for (let p = 0; p < o.length; p++) {
      let b = o[p];
      s(b, e, n, h, !!b.dynamicChildren);
    }
  }
}, move: va, hydrate: function(t, e, n, s, i, r, { o: { nextSibling: a, parentNode: o, querySelector: l, insert: u, createText: c } }, f) {
  function m(b, S, k, F) {
    S.anchor = f(a(b), S, o(b), n, s, i, r), S.targetStart = k, S.targetAnchor = F;
  }
  let h = e.target = Pl(e.props, l), p = hr(e.props);
  if (h) {
    let b = h._lpa || h.firstChild;
    if (16 & e.shapeFlag) if (p) m(t, e, b, b && a(b));
    else {
      e.anchor = a(t);
      let S = b;
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
      e.targetAnchor || Ud(h, e, c, u), f(b && a(b), e, h, n, s, i, r);
    }
    ba(e, p);
  } else p && 16 & e.shapeFlag && m(t, e, t, a(t));
  return e.anchor && a(e.anchor);
} };
function va(t, e, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  let { el: a, anchor: o, shapeFlag: l, children: u, props: c } = t, f = r === 2;
  if (f && s(a, e, n), (!f || hr(c)) && 16 & l) for (let m = 0; m < u.length; m++) i(u[m], e, n, 2);
  f && s(o, e, n);
}
let n0 = t0;
function ba(t, e) {
  let n = t.ctx;
  if (n && n.ut) {
    let s, i;
    for (e ? (s = t.el, i = t.anchor) : (s = t.targetStart, i = t.targetAnchor); s && s !== i; ) s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ud(t, e, n, s) {
  let i = e.targetStart = n(""), r = e.targetAnchor = n("");
  return i[e0] = r, t && (s(i, t), s(r, t)), r;
}
let zn = /* @__PURE__ */ Symbol("_leaveCb"), ka = /* @__PURE__ */ Symbol("_enterCb");
function s0() {
  let t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return es(() => {
    t.isMounted = !0;
  }), Gc(() => {
    t.isUnmounting = !0;
  }), t;
}
let Wt = [Function, Array], i0 = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: Wt, onEnter: Wt, onAfterEnter: Wt, onEnterCancelled: Wt, onBeforeLeave: Wt, onLeave: Wt, onAfterLeave: Wt, onLeaveCancelled: Wt, onBeforeAppear: Wt, onAppear: Wt, onAfterAppear: Wt, onAppearCancelled: Wt }, r0 = (t) => {
  let e = t.subTree;
  return e.component ? r0(e.component) : e;
};
function a0(t) {
  let e = t[0];
  if (t.length > 1) {
    for (let n of t) if (n.type !== gt) {
      e = n;
      break;
    }
  }
  return e;
}
let Ay = { name: "BaseTransition", props: i0, setup(t, { slots: e }) {
  let n = Dn(), s = s0();
  return () => {
    let i = e.default && Zc(e.default(), !0);
    if (!i || !i.length) return;
    let r = a0(i), a = Te(t), { mode: o } = a;
    if (s.isLeaving) return Wl(r);
    let l = qd(r);
    if (!l) return Wl(r);
    let u = Rr(l, a, s, n, (f) => u = f);
    l.type !== gt && ti(l, u);
    let c = n.subTree && qd(n.subTree);
    if (c && c.type !== gt && !Us(c, l) && r0(n).type !== gt) {
      let f = Rr(c, a, s, n);
      if (ti(c, f), o === "out-in" && l.type !== gt) return s.isLeaving = !0, f.afterLeave = () => {
        s.isLeaving = !1, 8 & n.job.flags || n.update(), delete f.afterLeave, c = void 0;
      }, Wl(r);
      o === "in-out" && l.type !== gt ? f.delayLeave = (m, h, p) => {
        o0(s, c)[String(c.key)] = c, m[zn] = () => {
          h(), m[zn] = void 0, delete u.delayedLeave, c = void 0;
        }, u.delayedLeave = () => {
          p(), delete u.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else c && (c = void 0);
    return r;
  };
} };
function o0(t, e) {
  let { leavingVNodes: n } = t, s = n.get(e.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(e.type, s)), s;
}
function Rr(t, e, n, s, i) {
  let { appear: r, mode: a, persisted: o = !1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: m, onLeave: h, onAfterLeave: p, onLeaveCancelled: b, onBeforeAppear: S, onAppear: k, onAfterAppear: F, onAppearCancelled: T } = e, O = String(t.key), I = o0(n, t), N = (x, B) => {
    x && hn(x, s, 9, B);
  }, Z = (x, B) => {
    let _ = B[1];
    N(x, B), re(x) ? x.every((A) => A.length <= 1) && _() : x.length <= 1 && _();
  }, w = { mode: a, persisted: o, beforeEnter(x) {
    let B = l;
    if (!n.isMounted) if (r) B = S || l;
    else return;
    x[zn] && x[zn](!0);
    let _ = I[O];
    _ && Us(t, _) && _.el[zn] && _.el[zn](), N(B, [x]);
  }, enter(x) {
    let B = u, _ = c, A = f;
    if (!n.isMounted) if (r) B = k || u, _ = F || c, A = T || f;
    else return;
    let se = !1, me = x[ka] = (te) => {
      se || (se = !0, te ? N(A, [x]) : N(_, [x]), w.delayedLeave && w.delayedLeave(), x[ka] = void 0);
    };
    B ? Z(B, [x, me]) : me();
  }, leave(x, B) {
    let _ = String(t.key);
    if (x[ka] && x[ka](!0), n.isUnmounting) return B();
    N(m, [x]);
    let A = !1, se = x[zn] = (me) => {
      A || (A = !0, B(), me ? N(b, [x]) : N(p, [x]), x[zn] = void 0, I[_] === t && delete I[_]);
    };
    I[_] = t, h ? Z(h, [x, se]) : se();
  }, clone(x) {
    let B = Rr(x, e, n, s, i);
    return i && i(B), B;
  } };
  return w;
}
function Wl(t) {
  if (Uo(t)) return (t = Is(t)).children = null, t;
}
function qd(t) {
  if (!Uo(t)) return t.type.__isTeleport && t.children ? a0(t.children) : t;
  if (t.component) return t.component.subTree;
  let { shapeFlag: e, children: n } = t;
  if (n) {
    if (16 & e) return n[0];
    if (32 & e && he(n.default)) return n.default();
  }
}
function ti(t, e) {
  6 & t.shapeFlag && t.component ? (t.transition = e, ti(t.component.subTree, e)) : 128 & t.shapeFlag ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Zc(t, e = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < t.length; r++) {
    let a = t[r], o = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === ve ? (128 & a.patchFlag && i++, s = s.concat(Zc(a.children, e, o))) : (e || a.type !== gt) && s.push(o != null ? Is(a, { key: o }) : a);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function q(t, e) {
  return he(t) ? Qe({ name: t.name }, e, { setup: t }) : t;
}
function jc() {
  let t = Dn();
  return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
}
function l0(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Hn(t) {
  let e = Dn(), n = Sy(null);
  return e && Object.defineProperty(e.refs === Ee ? e.refs = {} : e.refs, t, { enumerable: !0, get: () => n.value, set: (s) => n.value = s }), n;
}
let so = /* @__PURE__ */ new WeakMap();
function Cr(t, e, n, s, i = !1) {
  if (re(t)) return void t.forEach((p, b) => Cr(p, e && (re(e) ? e[b] : e), n, s, i));
  if (Ii(s) && !i) {
    512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && Cr(t, e, n, s.component.subTree);
    return;
  }
  let r = 4 & s.shapeFlag ? Go(s.component) : s.el, a = i ? null : r, { i: o, r: l } = t, u = e && e.r, c = o.refs === Ee ? o.refs = {} : o.refs, f = o.setupState, m = Te(f), h = f === Ee ? Sm : (p) => De(m, p);
  if (u != null && u !== l && (Zd(e), He(u) ? (c[u] = null, h(u) && (f[u] = null)) : Ze(u) && (u.value = null, e.k && (c[e.k] = null))), he(l)) Jr(l, o, 12, [a, c]);
  else {
    let p = He(l), b = Ze(l);
    if (p || b) {
      let S = () => {
        if (t.f) {
          let k = p ? h(l) ? f[l] : c[l] : l.value;
          if (i) re(k) && zc(k, r);
          else if (re(k)) k.includes(r) || k.push(r);
          else if (p) c[l] = [r], h(l) && (f[l] = c[l]);
          else {
            let F = [r];
            l.value = F, t.k && (c[t.k] = F);
          }
        } else p ? (c[l] = a, h(l) && (f[l] = a)) : b && (l.value = a, t.k && (c[t.k] = a));
      };
      if (a) {
        let k = () => {
          S(), so.delete(t);
        };
        k.id = -1, so.set(t, k), Et(k, n);
      } else Zd(t), S();
    }
  }
}
function Zd(t) {
  let e = so.get(t);
  e && (e.flags |= 8, so.delete(t));
}
Vo().requestIdleCallback;
Vo().cancelIdleCallback;
let Ii = (t) => !!t.type.__asyncLoader, Uo = (t) => t.type.__isKeepAlive;
function Ly(t, e) {
  u0(t, "a", e);
}
function Ny(t, e) {
  u0(t, "da", e);
}
function u0(t, e, n = St) {
  let s = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated) return;
      i = i.parent;
    }
    return t();
  });
  if (io(e, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) Uo(i.parent.vnode) && (function(r, a, o, l) {
      let u = io(a, r, l, !0);
      ni(() => {
        zc(l[a], u);
      }, o);
    })(s, e, n, i), i = i.parent;
  }
}
function io(t, e, n = St, s = !1) {
  if (n) {
    let i = n[t] || (n[t] = []), r = e.__weh || (e.__weh = (...a) => {
      Zn();
      let o = Kr(n), l = hn(e, n, t, a);
      return o(), jn(), l;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
let Qn = (t) => (e, n = St) => {
  Hr && t !== "sp" || io(t, (...s) => e(...s), n);
}, Vy = Qn("bm"), es = Qn("m"), By = Qn("bu"), c0 = Qn("u"), Gc = Qn("bum"), ni = Qn("um"), _y = Qn("sp"), zy = Qn("rtg"), Ry = Qn("rtc");
function Py(t, e = St) {
  io("ec", t, e);
}
let d0 = "components";
function Wy(t, e) {
  return h0(d0, t, !0, e) || t;
}
let f0 = /* @__PURE__ */ Symbol.for("v-ndc");
function Yc(t) {
  return He(t) ? h0(d0, t, !1) || t : t || f0;
}
function h0(t, e, n = !0, s = !1) {
  let i = yt || St;
  if (i) {
    let r = i.type;
    {
      let o = m2(r, !1);
      if (o && (o === e || o === Rt(e) || o === Lo(Rt(e)))) return r;
    }
    let a = jd(i[t] || r[t], e) || jd(i.appContext[t], e);
    return !a && s ? r : a;
  }
}
function jd(t, e) {
  return t && (t[e] || t[Rt(e)] || t[Lo(Rt(e))]);
}
function dt(t, e, n, s) {
  let i, r = n, a = re(t);
  if (a || He(t)) {
    let o = a && Mn(t), l = !1, u = !1;
    o && (l = !Vt(t), u = Gn(t), t = zo(t)), i = Array(t.length);
    for (let c = 0, f = t.length; c < f; c++) i[c] = e(l ? u ? Si(dn(t[c])) : dn(t[c]) : t[c], c, void 0, r);
  } else if (typeof t == "number") {
    i = Array(t);
    for (let o = 0; o < t; o++) i[o] = e(o + 1, o, void 0, r);
  } else if (Ve(t)) if (t[Symbol.iterator]) i = Array.from(t, (o, l) => e(o, l, void 0, r));
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
function Jc(t, e) {
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    if (re(s)) for (let i = 0; i < s.length; i++) t[s[i].name] = s[i].fn;
    else s && (t[s.name] = s.key ? (...i) => {
      let r = s.fn(...i);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return t;
}
function ce(t, e, n = {}, s, i) {
  if (yt.ce || yt.parent && Ii(yt.parent) && yt.parent.ce) {
    let u = Object.keys(n).length > 0;
    return e !== "default" && (n.name = e), y(), W(ve, null, [z("slot", n, s && s())], u ? -2 : 64);
  }
  let r = t[e];
  r && r._c && (r._d = !1), y();
  let a = r && m0(r(n)), o = n.key || a && a.key, l = W(ve, { key: (o && !fn(o) ? o : `_${e}`) + (!a && s ? "_fb" : "") }, a || (s ? s() : []), a && t._ === 1 ? 64 : -2);
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function m0(t) {
  return t.some((e) => !Wr(e) || e.type !== gt && (e.type !== ve || !!m0(e.children))) ? t : null;
}
function wa(t, e) {
  let n = {};
  for (let s in t) n[e && /[A-Z]/.test(s) ? `on:${s}` : _a(s)] = t[s];
  return n;
}
let Uu = (t) => t ? C0(t) ? Go(t) : Uu(t.parent) : null, Er = Qe(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => Uu(t.parent), $root: (t) => Uu(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => g0(t), $forceUpdate: (t) => t.f || (t.f = () => {
  Uc(t.update);
}), $nextTick: (t) => t.n || (t.n = qs.bind(t.proxy)), $watch: (t) => Jy.bind(t) }), Hl = (t, e) => t !== Ee && !t.__isScriptSetup && De(t, e), qu = { get({ _: t }, e) {
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
      if (Hl(r, e)) return l[e] = 1, r[e];
      if (a !== Ee && De(a, e)) return l[e] = 2, a[e];
      if (De(o, e)) return l[e] = 3, o[e];
      if (i !== Ee && De(i, e)) return l[e] = 4, i[e];
      Zu && (l[e] = 0);
    }
  }
  let f = Er[e];
  return f ? (e === "$attrs" && xt(t.attrs, "get", ""), f(t)) : (n = u.__cssModules) && (n = n[e]) ? n : i !== Ee && De(i, e) ? (l[e] = 4, i[e]) : De(s = c.config.globalProperties, e) ? s[e] : void 0;
}, set({ _: t }, e, n) {
  let { data: s, setupState: i, ctx: r } = t;
  return Hl(i, e) ? (i[e] = n, !0) : s !== Ee && De(s, e) ? (s[e] = n, !0) : !De(t.props, e) && !(e[0] === "$" && e.slice(1) in t) && (r[e] = n, !0);
}, has({ _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: i, props: r, type: a } }, o) {
  let l;
  return !!(n[o] || t !== Ee && o[0] !== "$" && De(t, o) || Hl(e, o) || De(r, o) || De(s, o) || De(Er, o) || De(i.config.globalProperties, o) || (l = a.__cssModules) && l[o]);
}, defineProperty(t, e, n) {
  return n.get != null ? t._.accessCache[e] = 0 : De(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
} };
Qe({}, qu, { get(t, e) {
  if (e !== Symbol.unscopables) return qu.get(t, e, t);
}, has: (t, e) => e[0] !== "_" && !ay(e) });
function p0() {
  return Hy().slots;
}
function Hy(t) {
  let e = Dn();
  return e.setupContext || (e.setupContext = F0(e));
}
function ro(t) {
  return re(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t;
}
function mn(t, e) {
  return t && e ? re(t) && re(e) ? t.concat(e) : Qe({}, ro(t), ro(e)) : t || e;
}
let Zu = !0;
function Gd(t, e, n) {
  hn(re(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function g0(t) {
  let e, n = t.type, { mixins: s, extends: i } = n, { mixins: r, optionsCache: a, config: { optionMergeStrategies: o } } = t.appContext, l = a.get(n);
  return l ? e = l : r.length || s || i ? (e = {}, r.length && r.forEach((u) => ao(e, u, o, !0)), ao(e, n, o)) : e = n, Ve(n) && a.set(n, e), e;
}
function ao(t, e, n, s = !1) {
  let { mixins: i, extends: r } = e;
  for (let a in r && ao(t, r, n, !0), i && i.forEach((o) => ao(t, o, n, !0)), e) if (!(s && a === "expose")) {
    let o = Uy[a] || n && n[a];
    t[a] = o ? o(t[a], e[a]) : e[a];
  }
  return t;
}
let Uy = { data: Yd, props: Jd, emits: Jd, methods: ar, computed: ar, beforeCreate: Ct, created: Ct, beforeMount: Ct, mounted: Ct, beforeUpdate: Ct, updated: Ct, beforeDestroy: Ct, beforeUnmount: Ct, destroyed: Ct, unmounted: Ct, activated: Ct, deactivated: Ct, errorCaptured: Ct, serverPrefetch: Ct, components: ar, directives: ar, watch: function(t, e) {
  if (!t) return e;
  if (!e) return t;
  let n = Qe(/* @__PURE__ */ Object.create(null), t);
  for (let s in e) n[s] = Ct(t[s], e[s]);
  return n;
}, provide: Yd, inject: function(t, e) {
  return ar(ju(t), ju(e));
} };
function Yd(t, e) {
  return e ? t ? function() {
    return Qe(he(t) ? t.call(this, this) : t, he(e) ? e.call(this, this) : e);
  } : e : t;
}
function ju(t) {
  if (re(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Ct(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ar(t, e) {
  return t ? Qe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Jd(t, e) {
  return t ? re(t) && re(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Qe(/* @__PURE__ */ Object.create(null), ro(t), ro(e ?? {})) : e;
}
function y0() {
  return { app: null, config: { isNativeTag: Sm, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let qy = 0, Js = null;
function $s(t, e) {
  if (St) {
    let n = St.provides, s = St.parent && St.parent.provides;
    s === n && (n = St.provides = Object.create(s)), n[t] = e;
  }
}
function qn(t, e, n = !1) {
  let s = Dn();
  if (s || Js) {
    let i = Js ? Js._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && he(e) ? e.call(s && s.proxy) : e;
  }
}
function Zy() {
  return !!(Dn() || Js);
}
let jy = /* @__PURE__ */ Symbol.for("v-scx"), Gy = () => qn(jy);
function qo(t, e) {
  return Zo(t, null, e);
}
function Yy(t, e) {
  return Zo(t, null, { flush: "sync" });
}
function Ue(t, e, n) {
  return Zo(t, e, n);
}
function Zo(t, e, n = Ee) {
  let s, { immediate: i, flush: r } = n, a = Qe({}, n), o = e && i || !e && r !== "post";
  if (Hr) {
    if (r === "sync") {
      let f = Gy();
      s = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!o) {
      let f = () => {
      };
      return f.stop = Sn, f.resume = Sn, f.pause = Sn, f;
    }
  }
  let l = St;
  a.call = (f, m, h) => hn(f, l, m, h);
  let u = !1;
  r === "post" ? a.scheduler = (f) => {
    Et(f, l && l.suspense);
  } : r !== "sync" && (u = !0, a.scheduler = (f, m) => {
    m ? f() : Uc(f);
  }), a.augmentJob = (f) => {
    e && (f.flags |= 4), u && (f.flags |= 2, l && (f.id = l.uid, f.i = l));
  };
  let c = (function(f, m, h = Ee) {
    let p, b, S, k, { immediate: F, deep: T, once: O, scheduler: I, augmentJob: N, call: Z } = h, w = (te) => T ? te : Vt(te) || T === !1 || T === 0 ? Pn(te, 1) : Pn(te), x = !1, B = !1;
    if (Ze(f) ? (b = () => f.value, x = Vt(f)) : Mn(f) ? (b = () => w(f), x = !0) : re(f) ? (B = !0, x = f.some((te) => Mn(te) || Vt(te)), b = () => f.map((te) => Ze(te) ? te.value : Mn(te) ? w(te) : he(te) ? Z ? Z(te, 2) : te() : void 0)) : b = he(f) ? m ? Z ? () => Z(f, 2) : f : () => {
      if (S) {
        Zn();
        try {
          S();
        } finally {
          jn();
        }
      }
      let te = Ws;
      Ws = p;
      try {
        return Z ? Z(f, 3, [k]) : f(k);
      } finally {
        Ws = te;
      }
    } : Sn, m && T) {
      let te = b, Ie = T === !0 ? 1 / 0 : T;
      b = () => Pn(te(), Ie);
    }
    let _ = Om(), A = () => {
      p.stop(), _ && _.active && zc(_.effects, p);
    };
    if (O && m) {
      let te = m;
      m = (...Ie) => {
        te(...Ie), A();
      };
    }
    let se = B ? Array(f.length).fill(ya) : ya, me = (te) => {
      if (1 & p.flags && (p.dirty || te)) if (m) {
        let Ie = p.run();
        if (T || x || (B ? Ie.some((ke, we) => Lt(ke, se[we])) : Lt(Ie, se))) {
          S && S();
          let ke = Ws;
          Ws = p;
          try {
            let we = [Ie, se === ya ? void 0 : B && se[0] === ya ? [] : se, k];
            se = Ie, Z ? Z(m, 3, we) : m(...we);
          } finally {
            Ws = ke;
          }
        }
      } else p.run();
    };
    return N && N(me), (p = new Am(b)).scheduler = I ? () => I(me, !1) : me, k = (te) => Oy(te, !1, p), S = p.onStop = () => {
      let te = to.get(p);
      if (te) {
        if (Z) Z(te, 4);
        else for (let Ie of te) Ie();
        to.delete(p);
      }
    }, m ? F ? me(!0) : se = p.run() : I ? I(me.bind(null, !0), !0) : p.run(), A.pause = p.pause.bind(p), A.resume = p.resume.bind(p), A.stop = A, A;
  })(t, e, a);
  return Hr && (s ? s.push(c) : o && c()), c;
}
function Jy(t, e, n) {
  let s, i = this.proxy, r = He(t) ? t.includes(".") ? v0(i, t) : () => i[t] : t.bind(i, i);
  he(e) ? s = e : (s = e.handler, n = e);
  let a = Kr(this), o = Zo(r, s.bind(i), n);
  return a(), o;
}
function v0(t, e) {
  let n = e.split(".");
  return () => {
    let s = t;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function Dt(t, e, n = Ee) {
  let s = Dn(), i = Rt(e), r = Ds(e), a = b0(t, i), o = Gm((l, u) => {
    let c, f, m = Ee;
    return Yy(() => {
      let h = t[i];
      Lt(c, h) && (c = h, u());
    }), { get: () => (l(), n.get ? n.get(c) : c), set(h) {
      let p = n.set ? n.set(h) : h;
      if (!Lt(p, c) && !(m !== Ee && Lt(h, m))) return;
      let b = s.vnode.props;
      b && (e in b || i in b || r in b) && (`onUpdate:${e}` in b || `onUpdate:${i}` in b || `onUpdate:${r}` in b) || (c = h, u()), s.emit(`update:${e}`, p), Lt(h, p) && Lt(h, m) && !Lt(p, f) && u(), m = h, f = p;
    } };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return { next: () => l < 2 ? { value: l++ ? a || Ee : o, done: !1 } : { done: !0 } };
  }, o;
}
let b0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Rt(e)}Modifiers`] || t[`${Ds(e)}Modifiers`];
function Xy(t, e, ...n) {
  let s;
  if (t.isUnmounted) return;
  let i = t.vnode.props || Ee, r = n, a = e.startsWith("update:"), o = a && b0(i, e.slice(7));
  o && (o.trim && (r = n.map((c) => He(c) ? c.trim() : c)), o.number && (r = n.map(No)));
  let l = i[s = _a(e)] || i[s = _a(Rt(e))];
  !l && a && (l = i[s = _a(Ds(e))]), l && hn(l, t, 6, r);
  let u = i[s + "Once"];
  if (u) {
    if (t.emitted) {
      if (t.emitted[s]) return;
    } else t.emitted = {};
    t.emitted[s] = !0, hn(u, t, 6, r);
  }
}
let Ky = /* @__PURE__ */ new WeakMap();
function oo(t, e) {
  return !!t && !!Oo(e) && (De(t, (e = e.slice(2).replace(/Once$/, ""))[0].toLowerCase() + e.slice(1)) || De(t, Ds(e)) || De(t, e));
}
function Xd(t) {
  let e, n, { type: s, vnode: i, proxy: r, withProxy: a, propsOptions: [o], slots: l, attrs: u, emit: c, render: f, renderCache: m, props: h, data: p, setupState: b, ctx: S, inheritAttrs: k } = t, F = no(t);
  try {
    if (4 & i.shapeFlag) {
      let O = a || r;
      e = xn(f.call(O, O, m, h, b, p, S)), n = u;
    } else e = xn(s.length > 1 ? s(h, { attrs: u, slots: l, emit: c }) : s(h, null)), n = s.props ? u : Qy(u);
  } catch (O) {
    Fr.length = 0, Ho(O, t, 1), e = z(gt);
  }
  let T = e;
  if (n && k !== !1) {
    let O = Object.keys(n), { shapeFlag: I } = T;
    O.length && 7 & I && (o && O.some(_c) && (n = e2(n, o)), T = Is(T, n, !1, !0));
  }
  return i.dirs && ((T = Is(T, null, !1, !0)).dirs = T.dirs ? T.dirs.concat(i.dirs) : i.dirs), i.transition && ti(T, i.transition), e = T, no(F), e;
}
let Qy = (t) => {
  let e;
  for (let n in t) (n === "class" || n === "style" || Oo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, e2 = (t, e) => {
  let n = {};
  for (let s in t) _c(s) && s.slice(9) in e || (n[s] = t[s]);
  return n;
};
function Kd(t, e, n) {
  let s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < s.length; i++) {
    let r = s[i];
    if (e[r] !== t[r] && !oo(n, r)) return !0;
  }
  return !1;
}
function t2({ vnode: t, parent: e }, n) {
  for (; e; ) {
    let s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t) (t = e.vnode).el = n, e = e.parent;
    else break;
  }
}
let Gu = {}, k0 = (t) => Object.getPrototypeOf(t) === Gu;
function w0(t, e, n, s) {
  let i, [r, a] = t.propsOptions, o = !1;
  if (e) for (let l in e) {
    let u;
    if (Ir(l)) continue;
    let c = e[l];
    r && De(r, u = Rt(l)) ? a && a.includes(u) ? (i || (i = {}))[u] = c : n[u] = c : oo(t.emitsOptions, l) || l in s && c === s[l] || (s[l] = c, o = !0);
  }
  if (a) {
    let l = Te(n), u = i || Ee;
    for (let c = 0; c < a.length; c++) {
      let f = a[c];
      n[f] = Yu(r, l, f, u[f], t, !De(u, f));
    }
  }
  return o;
}
function Yu(t, e, n, s, i, r) {
  let a = t[n];
  if (a != null) {
    let o = De(a, "default");
    if (o && s === void 0) {
      let l = a.default;
      if (a.type !== Function && !a.skipFactory && he(l)) {
        let { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          let c = Kr(i);
          s = u[n] = l.call(null, e), c();
        }
      } else s = l;
      i.ce && i.ce._setProp(n, s);
    }
    a[0] && (r && !o ? s = !1 : a[1] && (s === "" || s === Ds(n)) && (s = !0));
  }
  return s;
}
let n2 = /* @__PURE__ */ new WeakMap();
function Qd(t) {
  return !(t[0] === "$" || Ir(t));
}
let Xc = (t) => t === "_" || t === "_ctx" || t === "$stable", Kc = (t) => re(t) ? t.map(xn) : [xn(t)], s2 = (t, e, n) => {
  if (e._n) return e;
  let s = j((...i) => Kc(e(...i)), n);
  return s._c = !1, s;
}, x0 = (t, e, n) => {
  let s = t._ctx;
  for (let i in t) {
    if (Xc(i)) continue;
    let r = t[i];
    if (he(r)) e[i] = s2(i, r, s);
    else if (r != null) {
      let a = Kc(r);
      e[i] = () => a;
    }
  }
}, T0 = (t, e) => {
  let n = Kc(e);
  t.slots.default = () => n;
}, S0 = (t, e, n) => {
  for (let s in e) (n || !Xc(s)) && (t[s] = e[s]);
}, Et = o2;
function i2(t) {
  return r2(t);
}
function r2(t, e) {
  var n;
  let s, i;
  Vo().__VUE__ = !0;
  let { insert: r, remove: a, patchProp: o, createElement: l, createText: u, createComment: c, setText: f, setElementText: m, parentNode: h, nextSibling: p, setScopeId: b = Sn, insertStaticContent: S } = t, k = (g, v, M, H = null, V = null, C = null, R, D = null, L = !!v.dynamicChildren) => {
    if (g === v) return;
    g && !Us(g, v) && (H = rs(g), ze(g, V, C, !0), g = null), v.patchFlag === -2 && (L = !1, v.dynamicChildren = null);
    let { type: E, ref: G, shapeFlag: Q } = v;
    switch (E) {
      case jo:
        F(g, v, M, H);
        break;
      case gt:
        T(g, v, M, H);
        break;
      case ql:
        g == null && O(v, M, H, R);
        break;
      case ve:
        A(g, v, M, H, V, C, R, D, L);
        break;
      default:
        1 & Q ? I(g, v, M, H, V, C, R, D, L) : 6 & Q ? se(g, v, M, H, V, C, R, D, L) : (64 & Q || 128 & Q) && E.process(g, v, M, H, V, C, R, D, L, sr);
    }
    G != null && V ? Cr(G, g && g.ref, C, v || g, !v) : G == null && g && g.ref != null && Cr(g.ref, null, C, g, !0);
  }, F = (g, v, M, H) => {
    if (g == null) r(v.el = u(v.children), M, H);
    else {
      let V = v.el = g.el;
      v.children !== g.children && f(V, v.children);
    }
  }, T = (g, v, M, H) => {
    g == null ? r(v.el = c(v.children || ""), M, H) : v.el = g.el;
  }, O = (g, v, M, H) => {
    [g.el, g.anchor] = S(g.children, v, M, H, g.el, g.anchor);
  }, I = (g, v, M, H, V, C, R, D, L) => {
    if (v.type === "svg" ? R = "svg" : v.type === "math" && (R = "mathml"), g == null) N(v, M, H, V, C, R, D, L);
    else {
      let E = g.el && g.el._isVueCE ? g.el : null;
      try {
        E && E._beginPatch(), x(g, v, V, C, R, D, L);
      } finally {
        E && E._endPatch();
      }
    }
  }, N = (g, v, M, H, V, C, R, D) => {
    let L, E, { props: G, shapeFlag: Q, transition: J, dirs: ee } = g;
    if (L = g.el = l(g.type, C, G && G.is, G), 8 & Q ? m(L, g.children) : 16 & Q && w(g.children, L, null, H, V, Ul(g, C), R, D), ee && Ns(g, null, H, "created"), Z(L, g, g.scopeId, R, H), G) {
      for (let pe in G) pe === "value" || Ir(pe) || o(L, pe, null, G[pe], C, H);
      "value" in G && o(L, "value", null, G.value, C), (E = G.onVnodeBeforeMount) && bn(E, H, g);
    }
    ee && Ns(g, null, H, "beforeMount");
    let be = a2(V, J);
    be && J.beforeEnter(L), r(L, v, M), ((E = G && G.onVnodeMounted) || be || ee) && Et(() => {
      E && bn(E, H, g), be && J.enter(L), ee && Ns(g, null, H, "mounted");
    }, V);
  }, Z = (g, v, M, H, V) => {
    if (M && b(g, M), H) for (let C = 0; C < H.length; C++) b(g, H[C]);
    if (V) {
      let C = V.subTree;
      if (v === C || $0(C.type) && (C.ssContent === v || C.ssFallback === v)) {
        let R = V.vnode;
        Z(g, R, R.scopeId, R.slotScopeIds, V.parent);
      }
    }
  }, w = (g, v, M, H, V, C, R, D, L = 0) => {
    for (let E = L; E < g.length; E++) k(null, g[E] = D ? ps(g[E]) : xn(g[E]), v, M, H, V, C, R, D);
  }, x = (g, v, M, H, V, C, R) => {
    let D, L = v.el = g.el, { patchFlag: E, dynamicChildren: G, dirs: Q } = v;
    E |= 16 & g.patchFlag;
    let J = g.props || Ee, ee = v.props || Ee;
    if (M && Vs(M, !1), (D = ee.onVnodeBeforeUpdate) && bn(D, M, v, g), Q && Ns(v, g, M, "beforeUpdate"), M && Vs(M, !0), (J.innerHTML && ee.innerHTML == null || J.textContent && ee.textContent == null) && m(L, ""), G ? B(g.dynamicChildren, G, L, M, H, Ul(v, V), C) : R || we(g, v, L, null, M, H, Ul(v, V), C, !1), E > 0) {
      if (16 & E) _(L, J, ee, M, V);
      else if (2 & E && J.class !== ee.class && o(L, "class", null, ee.class, V), 4 & E && o(L, "style", J.style, ee.style, V), 8 & E) {
        let be = v.dynamicProps;
        for (let pe = 0; pe < be.length; pe++) {
          let xe = be[pe], ht = J[xe], mt = ee[xe];
          (mt !== ht || xe === "value") && o(L, xe, ht, mt, V, M);
        }
      }
      1 & E && g.children !== v.children && m(L, v.children);
    } else R || G != null || _(L, J, ee, M, V);
    ((D = ee.onVnodeUpdated) || Q) && Et(() => {
      D && bn(D, M, v, g), Q && Ns(v, g, M, "updated");
    }, H);
  }, B = (g, v, M, H, V, C, R) => {
    for (let D = 0; D < v.length; D++) {
      let L = g[D], E = v[D], G = L.el && (L.type === ve || !Us(L, E) || 198 & L.shapeFlag) ? h(L.el) : M;
      k(L, E, G, null, H, V, C, R, !0);
    }
  }, _ = (g, v, M, H, V) => {
    if (v !== M) {
      if (v !== Ee) for (let C in v) Ir(C) || C in M || o(g, C, v[C], null, V, H);
      for (let C in M) {
        if (Ir(C)) continue;
        let R = M[C], D = v[C];
        R !== D && C !== "value" && o(g, C, D, R, V, H);
      }
      "value" in M && o(g, "value", v.value, M.value, V);
    }
  }, A = (g, v, M, H, V, C, R, D, L) => {
    let E = v.el = g ? g.el : u(""), G = v.anchor = g ? g.anchor : u(""), { patchFlag: Q, dynamicChildren: J, slotScopeIds: ee } = v;
    ee && (D = D ? D.concat(ee) : ee), g == null ? (r(E, M, H), r(G, M, H), w(v.children || [], M, G, V, C, R, D, L)) : Q > 0 && 64 & Q && J && g.dynamicChildren ? (B(g.dynamicChildren, J, M, V, C, R, D), (v.key != null || V && v === V.subTree) && Qc(g, v, !0)) : we(g, v, M, G, V, C, R, D, L);
  }, se = (g, v, M, H, V, C, R, D, L) => {
    v.slotScopeIds = D, g == null ? 512 & v.shapeFlag ? V.ctx.activate(v, M, H, R, L) : me(v, M, H, V, C, R, L) : te(g, v, L);
  }, me = (g, v, M, H, V, C, R) => {
    let D = g.component = d2(g, H, V);
    if (Uo(g) && (D.ctx.renderer = sr), f2(D, !1, R), D.asyncDep) {
      if (V && V.registerDep(D, Ie, R), !g.el) {
        let L = D.subTree = z(gt);
        T(null, L, v, M), g.placeholder = L.el;
      }
    } else Ie(D, g, v, M, V, C, R);
  }, te = (g, v, M) => {
    let H = v.component = g.component;
    if ((function(V, C, R) {
      let { props: D, children: L, component: E } = V, { props: G, children: Q, patchFlag: J } = C, ee = E.emitsOptions;
      if (C.dirs || C.transition) return !0;
      if (!R || !(J >= 0)) return (!!L || !!Q) && (!Q || !Q.$stable) || D !== G && (D ? !G || Kd(D, G, ee) : !!G);
      if (1024 & J) return !0;
      if (16 & J) return D ? Kd(D, G, ee) : !!G;
      if (8 & J) {
        let be = C.dynamicProps;
        for (let pe = 0; pe < be.length; pe++) {
          let xe = be[pe];
          if (G[xe] !== D[xe] && !oo(ee, xe)) return !0;
        }
      }
      return !1;
    })(g, v, M)) {
      if (H.asyncDep && !H.asyncResolved) return void ke(H, v, M);
      H.next = v, H.update();
    } else v.el = g.el, H.vnode = v;
  }, Ie = (g, v, M, H, V, C, R) => {
    let D = () => {
      if (g.isMounted) {
        let Q, { next: J, bu: ee, u: be, parent: pe, vnode: xe } = g;
        {
          let vn = (function Ls(ma) {
            let Be = ma.subTree.component;
            if (Be) return Be.asyncDep && !Be.asyncResolved ? Be : Ls(Be);
          })(g);
          if (vn) {
            J && (J.el = xe.el, ke(g, J, R)), vn.asyncDep.then(() => {
              g.isUnmounted || D();
            });
            return;
          }
        }
        let ht = J;
        Vs(g, !1), J ? (J.el = xe.el, ke(g, J, R)) : J = xe, ee && za(ee), (Q = J.props && J.props.onVnodeBeforeUpdate) && bn(Q, pe, J, xe), Vs(g, !0);
        let mt = Xd(g), yn = g.subTree;
        g.subTree = mt, k(yn, mt, h(yn.el), rs(yn), g, V, C), J.el = mt.el, ht === null && t2(g, mt.el), be && Et(be, V), (Q = J.props && J.props.onVnodeUpdated) && Et(() => bn(Q, pe, J, xe), V);
      } else {
        let Q, { el: J, props: ee } = v, { bm: be, m: pe, parent: xe, root: ht, type: mt } = g, yn = Ii(v);
        if (Vs(g, !1), be && za(be), !yn && (Q = ee && ee.onVnodeBeforeMount) && bn(Q, xe, v), Vs(g, !0), !(J && i)) {
          ht.ce && ht.ce._def.shadowRoot !== !1 && ht.ce._injectChildStyle(mt);
          let vn = g.subTree = Xd(g);
          k(null, vn, M, H, g, V, C), v.el = vn.el;
        }
        if (pe && Et(pe, V), !yn && (Q = ee && ee.onVnodeMounted)) {
          let vn = v;
          Et(() => bn(Q, xe, vn), V);
        }
        (256 & v.shapeFlag || xe && Ii(xe.vnode) && 256 & xe.vnode.shapeFlag) && g.a && Et(g.a, V), g.isMounted = !0, v = M = H = null;
      }
    };
    g.scope.on();
    let L = g.effect = new Am(D);
    g.scope.off();
    let E = g.update = L.run.bind(L), G = g.job = L.runIfDirty.bind(L);
    G.i = g, G.id = g.uid, L.scheduler = () => Uc(G), Vs(g, !0), E();
  }, ke = (g, v, M) => {
    v.component = g;
    let H = g.vnode.props;
    g.vnode = v, g.next = null, (function(V, C, R, D) {
      let { props: L, attrs: E, vnode: { patchFlag: G } } = V, Q = Te(L), [J] = V.propsOptions, ee = !1;
      if ((D || G > 0) && !(16 & G)) {
        if (8 & G) {
          let be = V.vnode.dynamicProps;
          for (let pe = 0; pe < be.length; pe++) {
            let xe = be[pe];
            if (oo(V.emitsOptions, xe)) continue;
            let ht = C[xe];
            if (J) if (De(E, xe)) ht !== E[xe] && (E[xe] = ht, ee = !0);
            else {
              let mt = Rt(xe);
              L[mt] = Yu(J, Q, mt, ht, V, !1);
            }
            else ht !== E[xe] && (E[xe] = ht, ee = !0);
          }
        }
      } else {
        let be;
        for (let pe in w0(V, C, L, E) && (ee = !0), Q) C && (De(C, pe) || (be = Ds(pe)) !== pe && De(C, be)) || (J ? R && (R[pe] !== void 0 || R[be] !== void 0) && (L[pe] = Yu(J, Q, pe, void 0, V, !0)) : delete L[pe]);
        if (E !== Q) for (let pe in E) C && De(C, pe) || (delete E[pe], ee = !0);
      }
      ee && Rn(V.attrs, "set", "");
    })(g, v.props, H, M), ((V, C, R) => {
      let { vnode: D, slots: L } = V, E = !0, G = Ee;
      if (32 & D.shapeFlag) {
        let Q = C._;
        Q ? R && Q === 1 ? E = !1 : S0(L, C, R) : (E = !C.$stable, x0(C, L)), G = C;
      } else C && (T0(V, C), G = { default: 1 });
      if (E) for (let Q in L) Xc(Q) || G[Q] != null || delete L[Q];
    })(g, v.children, M), Zn(), Rd(g), jn();
  }, we = (g, v, M, H, V, C, R, D, L = !1) => {
    let E = g && g.children, G = g ? g.shapeFlag : 0, Q = v.children, { patchFlag: J, shapeFlag: ee } = v;
    if (J > 0) {
      if (128 & J) return void je(E, Q, M, H, V, C, R, D, L);
      if (256 & J) return void Me(E, Q, M, H, V, C, R, D, L);
    }
    8 & ee ? (16 & G && is(E, V, C), Q !== E && m(M, Q)) : 16 & G ? 16 & ee ? je(E, Q, M, H, V, C, R, D, L) : is(E, V, C, !0) : (8 & G && m(M, ""), 16 & ee && w(Q, M, H, V, C, R, D, L));
  }, Me = (g, v, M, H, V, C, R, D, L) => {
    let E;
    g = g || Ti, v = v || Ti;
    let G = g.length, Q = v.length, J = Math.min(G, Q);
    for (E = 0; E < J; E++) {
      let ee = v[E] = L ? ps(v[E]) : xn(v[E]);
      k(g[E], ee, M, null, V, C, R, D, L);
    }
    G > Q ? is(g, V, C, !0, !1, J) : w(v, M, H, V, C, R, D, L, J);
  }, je = (g, v, M, H, V, C, R, D, L) => {
    let E = 0, G = v.length, Q = g.length - 1, J = G - 1;
    for (; E <= Q && E <= J; ) {
      let ee = g[E], be = v[E] = L ? ps(v[E]) : xn(v[E]);
      if (Us(ee, be)) k(ee, be, M, null, V, C, R, D, L);
      else break;
      E++;
    }
    for (; E <= Q && E <= J; ) {
      let ee = g[Q], be = v[J] = L ? ps(v[J]) : xn(v[J]);
      if (Us(ee, be)) k(ee, be, M, null, V, C, R, D, L);
      else break;
      Q--, J--;
    }
    if (E > Q) {
      if (E <= J) {
        let ee = J + 1, be = ee < G ? v[ee].el : H;
        for (; E <= J; ) k(null, v[E] = L ? ps(v[E]) : xn(v[E]), M, be, V, C, R, D, L), E++;
      }
    } else if (E > J) for (; E <= Q; ) ze(g[E], V, C, !0), E++;
    else {
      let ee, be = E, pe = E, xe = /* @__PURE__ */ new Map();
      for (E = pe; E <= J; E++) {
        let Be = v[E] = L ? ps(v[E]) : xn(v[E]);
        Be.key != null && xe.set(Be.key, E);
      }
      let ht = 0, mt = J - pe + 1, yn = !1, vn = 0, Ls = Array(mt);
      for (E = 0; E < mt; E++) Ls[E] = 0;
      for (E = be; E <= Q; E++) {
        let Be, ot = g[E];
        if (ht >= mt) {
          ze(ot, V, C, !0);
          continue;
        }
        if (ot.key != null) Be = xe.get(ot.key);
        else for (ee = pe; ee <= J; ee++) if (Ls[ee - pe] === 0 && Us(ot, v[ee])) {
          Be = ee;
          break;
        }
        Be === void 0 ? ze(ot, V, C, !0) : (Ls[Be - pe] = E + 1, Be >= vn ? vn = Be : yn = !0, k(ot, v[Be], M, null, V, C, R, D, L), ht++);
      }
      let ma = yn ? (function(Be) {
        let ot, ir, Mt, as, Fl, Ol = Be.slice(), Pt = [0], ny = Be.length;
        for (ot = 0; ot < ny; ot++) {
          let pa = Be[ot];
          if (pa !== 0) {
            if (Be[ir = Pt[Pt.length - 1]] < pa) {
              Ol[ot] = ir, Pt.push(ot);
              continue;
            }
            for (Mt = 0, as = Pt.length - 1; Mt < as; ) Be[Pt[Fl = Mt + as >> 1]] < pa ? Mt = Fl + 1 : as = Fl;
            pa < Be[Pt[Mt]] && (Mt > 0 && (Ol[ot] = Pt[Mt - 1]), Pt[Mt] = ot);
          }
        }
        for (Mt = Pt.length, as = Pt[Mt - 1]; Mt-- > 0; ) Pt[Mt] = as, as = Ol[as];
        return Pt;
      })(Ls) : Ti;
      for (ee = ma.length - 1, E = mt - 1; E >= 0; E--) {
        let Be = pe + E, ot = v[Be], ir = v[Be + 1], Mt = Be + 1 < G ? ir.el || ir.placeholder : H;
        Ls[E] === 0 ? k(null, ot, M, Mt, V, C, R, D, L) : yn && (ee < 0 || E !== ma[ee] ? et(ot, M, Mt, 2) : ee--);
      }
    }
  }, et = (g, v, M, H, V = null) => {
    let { el: C, type: R, transition: D, children: L, shapeFlag: E } = g;
    if (6 & E) return void et(g.component.subTree, v, M, H);
    if (128 & E) return void g.suspense.move(v, M, H);
    if (64 & E) return void R.move(g, v, M, sr);
    if (R === ve) {
      r(C, v, M);
      for (let G = 0; G < L.length; G++) et(L[G], v, M, H);
      r(g.anchor, v, M);
      return;
    }
    if (R === ql) return void (({ el: G, anchor: Q }, J, ee) => {
      let be;
      for (; G && G !== Q; ) be = p(G), r(G, J, ee), G = be;
      r(Q, J, ee);
    })(g, v, M);
    if (H !== 2 && 1 & E && D) if (H === 0) D.beforeEnter(C), r(C, v, M), Et(() => D.enter(C), V);
    else {
      let { leave: G, delayLeave: Q, afterLeave: J } = D, ee = () => {
        g.ctx.isUnmounted ? a(C) : r(C, v, M);
      }, be = () => {
        C._isLeaving && C[zn](!0), G(C, () => {
          ee(), J && J();
        });
      };
      Q ? Q(C, ee, be) : be();
    }
    else r(C, v, M);
  }, ze = (g, v, M, H = !1, V = !1) => {
    let C, { type: R, props: D, ref: L, children: E, dynamicChildren: G, shapeFlag: Q, patchFlag: J, dirs: ee, cacheIndex: be } = g;
    if (J === -2 && (V = !1), L != null && (Zn(), Cr(L, null, M, g, !0), jn()), be != null && (v.renderCache[be] = void 0), 256 & Q) return void v.ctx.deactivate(g);
    let pe = 1 & Q && ee, xe = !Ii(g);
    if (xe && (C = D && D.onVnodeBeforeUnmount) && bn(C, v, g), 6 & Q) Qt(g.component, M, H);
    else {
      if (128 & Q) return void g.suspense.unmount(M, H);
      pe && Ns(g, null, v, "beforeUnmount"), 64 & Q ? g.type.remove(g, v, M, sr, H) : G && !G.hasOnce && (R !== ve || J > 0 && 64 & J) ? is(G, v, M, !1, !0) : (R === ve && 384 & J || !V && 16 & Q) && is(E, v, M), H && ft(g);
    }
    (xe && (C = D && D.onVnodeUnmounted) || pe) && Et(() => {
      C && bn(C, v, g), pe && Ns(g, null, v, "unmounted");
    }, M);
  }, ft = (g) => {
    let { type: v, el: M, anchor: H, transition: V } = g;
    if (v === ve) return void Kt(M, H);
    if (v === ql) return void (({ el: R, anchor: D }) => {
      let L;
      for (; R && R !== D; ) L = p(R), a(R), R = L;
      a(D);
    })(g);
    let C = () => {
      a(M), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (1 & g.shapeFlag && V && !V.persisted) {
      let { leave: R, delayLeave: D } = V, L = () => R(M, C);
      D ? D(g.el, C, L) : L();
    } else C();
  }, Kt = (g, v) => {
    let M;
    for (; g !== v; ) M = p(g), a(g), g = M;
    a(v);
  }, Qt = (g, v, M) => {
    let { bum: H, scope: V, job: C, subTree: R, um: D, m: L, a: E } = g;
    ef(L), ef(E), H && za(H), V.stop(), C && (C.flags |= 8, ze(R, g, v, M)), D && Et(D, v), Et(() => {
      g.isUnmounted = !0;
    }, v);
  }, is = (g, v, M, H = !1, V = !1, C = 0) => {
    for (let R = C; R < g.length; R++) ze(g[R], v, M, H, V);
  }, rs = (g) => {
    if (6 & g.shapeFlag) return rs(g.component.subTree);
    if (128 & g.shapeFlag) return g.suspense.next();
    let v = p(g.anchor || g.el), M = v && v[e0];
    return M ? p(M) : v;
  }, Cl = !1, El = (g, v, M) => {
    g == null ? v._vnode && ze(v._vnode, null, null, !0) : k(v._vnode || null, g, v, null, null, null, M), v._vnode = g, Cl || (Cl = !0, Rd(), Km(), Cl = !1);
  }, sr = { p: k, um: ze, m: et, r: ft, mt: me, mc: w, pc: we, pbc: B, n: rs, o: t };
  return { render: El, hydrate: s, createApp: (n = s, function(g, v = null) {
    he(g) || (g = Qe({}, g)), v == null || Ve(v) || (v = null);
    let M = y0(), H = /* @__PURE__ */ new WeakSet(), V = [], C = !1, R = M.app = { _uid: qy++, _component: g, _props: v, _container: null, _context: M, _instance: null, version: p2, get config() {
      return M.config;
    }, set config(D) {
    }, use: (D, ...L) => (H.has(D) || (D && he(D.install) ? (H.add(D), D.install(R, ...L)) : he(D) && (H.add(D), D(R, ...L))), R), mixin: (D) => (M.mixins.includes(D) || M.mixins.push(D), R), component: (D, L) => L ? (M.components[D] = L, R) : M.components[D], directive: (D, L) => L ? (M.directives[D] = L, R) : M.directives[D], mount(D, L, E) {
      if (!C) {
        let G = R._ceVNode || z(g, v);
        return G.appContext = M, E === !0 ? E = "svg" : E === !1 && (E = void 0), L && n ? n(G, D) : El(G, D, E), C = !0, R._container = D, D.__vue_app__ = R, Go(G.component);
      }
    }, onUnmount(D) {
      V.push(D);
    }, unmount() {
      C && (hn(V, R._instance, 16), El(null, R._container), delete R._container.__vue_app__);
    }, provide: (D, L) => (M.provides[D] = L, R), runWithContext(D) {
      let L = Js;
      Js = R;
      try {
        return D();
      } finally {
        Js = L;
      }
    } };
    return R;
  }) };
}
function Ul({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Vs({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function a2(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Qc(t, e, n = !1) {
  let s = t.children, i = e.children;
  if (re(s) && re(i)) for (let r = 0; r < s.length; r++) {
    let a = s[r], o = i[r];
    1 & o.shapeFlag && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && ((o = i[r] = ps(i[r])).el = a.el), n || o.patchFlag === -2 || Qc(a, o)), o.type === jo && o.patchFlag !== -1 && (o.el = a.el), o.type !== gt || o.el || (o.el = a.el);
  }
}
function ef(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
let $0 = (t) => t.__isSuspense;
function o2(t, e) {
  e && e.pendingBranch ? re(t) ? e.effects.push(...t) : e.effects.push(t) : Dy(t);
}
let ve = /* @__PURE__ */ Symbol.for("v-fgt"), jo = /* @__PURE__ */ Symbol.for("v-txt"), gt = /* @__PURE__ */ Symbol.for("v-cmt"), ql = /* @__PURE__ */ Symbol.for("v-stc"), Fr = [], Nt = null;
function y(t = !1) {
  Fr.push(Nt = t ? null : []);
}
function l2() {
  Fr.pop(), Nt = Fr[Fr.length - 1] || null;
}
let Pr = 1;
function lo(t, e = !1) {
  Pr += t, t < 0 && Nt && e && (Nt.hasOnce = !0);
}
function I0(t) {
  return t.dynamicChildren = Pr > 0 ? Nt || Ti : null, l2(), Pr > 0 && Nt && Nt.push(t), t;
}
function P(t, e, n, s, i, r) {
  return I0(fe(t, e, n, s, i, r, !0));
}
function W(t, e, n, s, i) {
  return I0(z(t, e, n, s, i, !0));
}
function Wr(t) {
  return !!t && t.__v_isVNode === !0;
}
function Us(t, e) {
  return t.type === e.type && t.key === e.key;
}
let M0 = ({ key: t }) => t ?? null, Pa = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? He(t) || Ze(t) || he(t) ? { i: yt, r: t, k: e, f: !!n } : t : null);
function fe(t, e = null, n = null, s = 0, i = null, r = +(t !== ve), a = !1, o = !1) {
  let l = { __v_isVNode: !0, __v_skip: !0, type: t, props: e, key: e && M0(e), ref: e && Pa(e), scopeId: Qm, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: s, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: yt };
  return o ? (ed(l, n), 128 & r && t.normalize(l)) : n && (l.shapeFlag |= He(n) ? 8 : 16), Pr > 0 && !a && Nt && (l.patchFlag > 0 || 6 & r) && l.patchFlag !== 32 && Nt.push(l), l;
}
let z = function(t, e = null, n = null, s = 0, i = null, r = !1) {
  var a;
  if (t && t !== f0 || (t = gt), Wr(t)) {
    let l = Is(t, e, !0);
    return n && ed(l, n), Pr > 0 && !r && Nt && (6 & l.shapeFlag ? Nt[Nt.indexOf(t)] = l : Nt.push(l)), l.patchFlag = -2, l;
  }
  if (he(a = t) && "__vccOpts" in a && (t = t.__vccOpts), e) {
    let { class: l, style: u } = e = Wa(e);
    l && !He(l) && (e.class = $(l)), Ve(u) && (Po(u) && !re(u) && (u = Qe({}, u)), e.style = st(u));
  }
  let o = He(t) ? 1 : $0(t) ? 128 : t.__isTeleport ? 64 : Ve(t) ? 4 : 2 * !!he(t);
  return fe(t, e, n, s, i, o, r, !0);
};
function Wa(t) {
  return t ? Po(t) || k0(t) ? Qe({}, t) : t : null;
}
function Is(t, e, n = !1, s = !1) {
  let { props: i, ref: r, patchFlag: a, children: o, transition: l } = t, u = e ? qt(i || {}, e) : i, c = { __v_isVNode: !0, __v_skip: !0, type: t.type, props: u, key: u && M0(u), ref: e && e.ref ? n && r ? re(r) ? r.concat(Pa(e)) : [r, Pa(e)] : Pa(e) : r, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: o, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: e && t.type !== ve ? a === -1 ? 16 : 16 | a : a, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: l, component: t.component, suspense: t.suspense, ssContent: t.ssContent && Is(t.ssContent), ssFallback: t.ssFallback && Is(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
  return l && s && ti(c, l.clone(c)), c;
}
function Xr(t = " ", e = 0) {
  return z(jo, null, t, e);
}
function ne(t = "", e = !1) {
  return e ? (y(), W(gt, null, t)) : z(gt, null, t);
}
function xn(t) {
  return t == null || typeof t == "boolean" ? z(gt) : re(t) ? z(ve, null, t.slice()) : Wr(t) ? ps(t) : z(jo, null, String(t));
}
function ps(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Is(t);
}
function ed(t, e) {
  let n = 0, { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (re(e)) n = 16;
  else if (typeof e == "object") if (65 & s) {
    let i = e.default;
    i && (i._c && (i._d = !1), ed(t, i()), i._c && (i._d = !0));
    return;
  } else {
    n = 32;
    let i = e._;
    i || k0(e) ? i === 3 && yt && (yt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024)) : e._ctx = yt;
  }
  else he(e) ? (e = { default: e, _ctx: yt }, n = 32) : (e = String(e), 64 & s ? (n = 16, e = [Xr(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function qt(...t) {
  let e = {};
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    for (let i in s) if (i === "class") e.class !== s.class && (e.class = $([e.class, s.class]));
    else if (i === "style") e.style = st([e.style, s.style]);
    else if (Oo(i)) {
      let r = e[i], a = s[i];
      a && r !== a && !(re(r) && r.includes(a)) && (e[i] = r ? [].concat(r, a) : a);
    } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function bn(t, e, n, s = null) {
  hn(t, e, 7, [n, s]);
}
let u2 = y0(), c2 = 0;
function d2(t, e, n) {
  let s = t.type, i = (e ? e.appContext : t.appContext) || u2, r = { uid: c2++, vnode: t, type: s, parent: e, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Em(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(i.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: (function a(o, l, u = !1) {
    let c = u ? n2 : l.propsCache, f = c.get(o);
    if (f) return f;
    let m = o.props, h = {}, p = [], b = !1;
    if (!he(o)) {
      let k = (F) => {
        b = !0;
        let [T, O] = a(F, l, !0);
        Qe(h, T), O && p.push(...O);
      };
      !u && l.mixins.length && l.mixins.forEach(k), o.extends && k(o.extends), o.mixins && o.mixins.forEach(k);
    }
    if (!m && !b) return Ve(o) && c.set(o, Ti), Ti;
    if (re(m)) for (let k = 0; k < m.length; k++) {
      let F = Rt(m[k]);
      Qd(F) && (h[F] = Ee);
    }
    else if (m) for (let k in m) {
      let F = Rt(k);
      if (Qd(F)) {
        let T = m[k], O = h[F] = re(T) || he(T) ? { type: T } : Qe({}, T), I = O.type, N = !1, Z = !0;
        if (re(I)) for (let w = 0; w < I.length; ++w) {
          let x = I[w], B = he(x) && x.name;
          if (B === "Boolean") {
            N = !0;
            break;
          }
          B === "String" && (Z = !1);
        }
        else N = he(I) && I.name === "Boolean";
        O[0] = N, O[1] = Z, (N || De(O, "default")) && p.push(F);
      }
    }
    let S = [h, p];
    return Ve(o) && c.set(o, S), S;
  })(s, i), emitsOptions: (function a(o, l, u = !1) {
    let c = u ? Ky : l.emitsCache, f = c.get(o);
    if (f !== void 0) return f;
    let m = o.emits, h = {}, p = !1;
    if (!he(o)) {
      let b = (S) => {
        let k = a(S, l, !0);
        k && (p = !0, Qe(h, k));
      };
      !u && l.mixins.length && l.mixins.forEach(b), o.extends && b(o.extends), o.mixins && o.mixins.forEach(b);
    }
    return m || p ? (re(m) ? m.forEach((b) => h[b] = null) : Qe(h, m), Ve(o) && c.set(o, h), h) : (Ve(o) && c.set(o, null), null);
  })(s, i), emit: null, emitted: null, propsDefaults: Ee, inheritAttrs: s.inheritAttrs, ctx: Ee, data: Ee, props: Ee, attrs: Ee, slots: Ee, refs: Ee, setupState: Ee, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = Xy.bind(null, r), t.ce && t.ce(r), r;
}
let St = null, Dn = () => St || yt;
{
  let t = Vo(), e = (n, s) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((a) => a(r)) : i[0](r);
    };
  };
  Qa = e("__VUE_INSTANCE_SETTERS__", (n) => St = n), Ru = e("__VUE_SSR_SETTERS__", (n) => Hr = n);
}
let Kr = (t) => {
  let e = St;
  return Qa(t), t.scope.on(), () => {
    t.scope.off(), Qa(e);
  };
}, tf = () => {
  St && St.scope.off(), Qa(null);
};
function C0(t) {
  return 4 & t.vnode.shapeFlag;
}
let Hr = !1;
function f2(t, e = !1, n = !1) {
  e && Ru(e);
  let { props: s, children: i } = t.vnode, r = C0(t);
  (function(u, c, f, m = !1) {
    let h = {}, p = Object.create(Gu);
    for (let b in u.propsDefaults = /* @__PURE__ */ Object.create(null), w0(u, c, h, p), u.propsOptions[0]) b in h || (h[b] = void 0);
    f ? u.props = m ? h : Ty(h) : u.type.props ? u.props = h : u.props = p, u.attrs = p;
  })(t, s, r, e);
  var a = n || e;
  let o = t.slots = Object.create(Gu);
  if (32 & t.vnode.shapeFlag) {
    let u = i._;
    u ? (S0(o, i, a), a && Im(o, "_", u, !0)) : x0(i, o);
  } else i && T0(t, i);
  let l = r ? (function(u, c) {
    let f = u.type;
    u.accessCache = /* @__PURE__ */ Object.create(null), u.proxy = new Proxy(u.ctx, qu);
    let { setup: m } = f;
    if (m) {
      Zn();
      let h = u.setupContext = m.length > 1 ? F0(u) : null, p = Kr(u), b = Jr(m, u, 0, [u.props, h]), S = $m(b);
      if (jn(), p(), (S || u.sp) && !Ii(u) && l0(u), S) {
        if (b.then(tf, tf), c) return b.then((k) => {
          nf(u, k);
        }).catch((k) => {
          Ho(k, u, 0);
        });
        u.asyncDep = b;
      } else nf(u, b);
    } else E0(u);
  })(t, e) : void 0;
  return e && Ru(!1), l;
}
function nf(t, e, n) {
  he(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ve(e) && (t.setupState = jm(e)), E0(t);
}
function E0(t, e, n) {
  let s = t.type;
  t.render || (t.render = s.render || Sn);
  {
    let i = Kr(t);
    Zn();
    try {
      (function(r) {
        let a = g0(r), o = r.proxy, l = r.ctx;
        Zu = !1, a.beforeCreate && Gd(a.beforeCreate, r, "bc");
        let { data: u, computed: c, methods: f, watch: m, provide: h, inject: p, created: b, beforeMount: S, mounted: k, beforeUpdate: F, updated: T, activated: O, deactivated: I, beforeUnmount: N, unmounted: Z, render: w, renderTracked: x, renderTriggered: B, errorCaptured: _, serverPrefetch: A, expose: se, inheritAttrs: me, components: te, directives: Ie } = a;
        if (p && (function(we, Me, je = Sn) {
          for (let et in re(we) && (we = ju(we)), we) {
            let ze, ft = we[et];
            Ze(ze = Ve(ft) ? "default" in ft ? qn(ft.from || et, ft.default, !0) : qn(ft.from || et) : qn(ft)) ? Object.defineProperty(Me, et, { enumerable: !0, configurable: !0, get: () => ze.value, set: (Kt) => ze.value = Kt }) : Me[et] = ze;
          }
        })(p, l, null), f) for (let we in f) {
          let Me = f[we];
          he(Me) && (l[we] = Me.bind(o));
        }
        if (u) {
          let we = u.call(o, o);
          Ve(we) && (r.data = On(we));
        }
        if (Zu = !0, c) for (let we in c) {
          let Me = c[we], je = he(Me) ? Me.bind(o, o) : he(Me.get) ? Me.get.bind(o, o) : Sn, et = $e({ get: je, set: !he(Me) && he(Me.set) ? Me.set.bind(o) : Sn });
          Object.defineProperty(l, we, { enumerable: !0, configurable: !0, get: () => et.value, set: (ze) => et.value = ze });
        }
        if (m) for (let we in m) (function Me(je, et, ze, ft) {
          let Kt = ft.includes(".") ? v0(ze, ft) : () => ze[ft];
          if (He(je)) {
            let Qt = et[je];
            he(Qt) && Ue(Kt, Qt);
          } else if (he(je)) Ue(Kt, je.bind(ze));
          else if (Ve(je)) if (re(je)) je.forEach((Qt) => Me(Qt, et, ze, ft));
          else {
            let Qt = he(je.handler) ? je.handler.bind(ze) : et[je.handler];
            he(Qt) && Ue(Kt, Qt, je);
          }
        })(m[we], l, o, we);
        if (h) {
          let we = he(h) ? h.call(o) : h;
          Reflect.ownKeys(we).forEach((Me) => {
            $s(Me, we[Me]);
          });
        }
        function ke(we, Me) {
          re(Me) ? Me.forEach((je) => we(je.bind(o))) : Me && we(Me.bind(o));
        }
        if (b && Gd(b, r, "c"), ke(Vy, S), ke(es, k), ke(By, F), ke(c0, T), ke(Ly, O), ke(Ny, I), ke(Py, _), ke(Ry, x), ke(zy, B), ke(Gc, N), ke(ni, Z), ke(_y, A), re(se)) if (se.length) {
          let we = r.exposed || (r.exposed = {});
          se.forEach((Me) => {
            Object.defineProperty(we, Me, { get: () => o[Me], set: (je) => o[Me] = je, enumerable: !0 });
          });
        } else r.exposed || (r.exposed = {});
        w && r.render === Sn && (r.render = w), me != null && (r.inheritAttrs = me), te && (r.components = te), Ie && (r.directives = Ie), A && l0(r);
      })(t);
    } finally {
      jn(), i();
    }
  }
}
let h2 = { get: (t, e) => (xt(t, "get", ""), t[e]) };
function F0(t) {
  return { attrs: new Proxy(t.attrs, h2), slots: t.slots, emit: t.emit, expose: (e) => {
    t.exposed = e || {};
  } };
}
function Go(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(jm(Wo(t.exposed)), { get: (e, n) => n in e ? e[n] : n in Er ? Er[n](t) : void 0, has: (e, n) => n in e || n in Er })) : t.proxy;
}
function m2(t, e = !0) {
  return he(t) ? t.displayName || t.name : t.name || e && t.__name;
}
let $e = (t, e) => (function(n, s, i = !1) {
  let r, a;
  return he(n) ? r = n : (r = n.get, a = n.set), new Fy(r, a, i);
})(t, 0, Hr);
function Mi(t, e, n) {
  try {
    lo(-1);
    let s = arguments.length;
    return s !== 2 ? (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Wr(n) && (n = [n]), z(t, e, n)) : !Ve(e) || re(e) ? z(t, null, e) : Wr(e) ? z(t, null, [e]) : z(t, e);
  } finally {
    lo(1);
  }
}
let p2 = "3.5.25", sf = typeof window < "u" && window.trustedTypes;
if (sf) try {
  Pu = sf.createPolicy("vue", { createHTML: (t) => t });
} catch {
}
let O0 = Pu ? (t) => Pu.createHTML(t) : (t) => t, Bn = typeof document < "u" ? document : null, rf = Bn && Bn.createElement("template"), g2 = { insert: (t, e, n) => {
  e.insertBefore(t, n || null);
}, remove: (t) => {
  let e = t.parentNode;
  e && e.removeChild(t);
}, createElement: (t, e, n, s) => {
  let i = e === "svg" ? Bn.createElementNS("http://www.w3.org/2000/svg", t) : e === "mathml" ? Bn.createElementNS("http://www.w3.org/1998/Math/MathML", t) : n ? Bn.createElement(t, { is: n }) : Bn.createElement(t);
  return t === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
}, createText: (t) => Bn.createTextNode(t), createComment: (t) => Bn.createComment(t), setText: (t, e) => {
  t.nodeValue = e;
}, setElementText: (t, e) => {
  t.textContent = e;
}, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => Bn.querySelector(t), setScopeId(t, e) {
  t.setAttribute(e, "");
}, insertStaticContent(t, e, n, s, i, r) {
  let a = n ? n.previousSibling : e.lastChild;
  if (i && (i === r || i.nextSibling)) for (; e.insertBefore(i.cloneNode(!0), n), i !== r && (i = i.nextSibling); ) ;
  else {
    rf.innerHTML = O0(s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t);
    let o = rf.content;
    if (s === "svg" || s === "mathml") {
      let l = o.firstChild;
      for (; l.firstChild; ) o.appendChild(l.firstChild);
      o.removeChild(l);
    }
    e.insertBefore(o, n);
  }
  return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
} }, os = "transition", or = "animation", Vi = /* @__PURE__ */ Symbol("_vtc"), D0 = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, A0 = Qe({}, i0, D0), Ms = ((Dl = (t, { slots: e }) => Mi(Ay, L0(t), e)).displayName = "Transition", Dl.props = A0, Dl), Bs = (t, e = []) => {
  re(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, af = (t) => !!t && (re(t) ? t.some((e) => e.length > 1) : t.length > 1);
function L0(t) {
  let e = {};
  for (let A in t) A in D0 || (e[A] = t[A]);
  if (t.css === !1) return e;
  let { name: n = "v", type: s, duration: i, enterFromClass: r = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: o = `${n}-enter-to`, appearFromClass: l = r, appearActiveClass: u = a, appearToClass: c = o, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = t, p = (function(A) {
    if (A == null) return null;
    {
      if (Ve(A)) return [(function(me) {
        return Ll(me);
      })(A.enter), (function(me) {
        return Ll(me);
      })(A.leave)];
      let se = (function(me) {
        return Ll(me);
      })(A);
      return [se, se];
    }
  })(i), b = p && p[0], S = p && p[1], { onBeforeEnter: k, onEnter: F, onEnterCancelled: T, onLeave: O, onLeaveCancelled: I, onBeforeAppear: N = k, onAppear: Z = F, onAppearCancelled: w = T } = e, x = (A, se, me, te) => {
    A._enterCancelled = te, ds(A, se ? c : o), ds(A, se ? u : a), me && me();
  }, B = (A, se) => {
    A._isLeaving = !1, ds(A, f), ds(A, h), ds(A, m), se && se();
  }, _ = (A) => (se, me) => {
    let te = A ? Z : F, Ie = () => x(se, A, me);
    Bs(te, [se, Ie]), of(() => {
      ds(se, A ? l : r), kn(se, A ? c : o), af(te) || lf(se, s, b, Ie);
    });
  };
  return Qe(e, { onBeforeEnter(A) {
    Bs(k, [A]), kn(A, r), kn(A, a);
  }, onBeforeAppear(A) {
    Bs(N, [A]), kn(A, l), kn(A, u);
  }, onEnter: _(!1), onAppear: _(!0), onLeave(A, se) {
    A._isLeaving = !0;
    let me = () => B(A, se);
    kn(A, f), A._enterCancelled ? (kn(A, m), Ju(A)) : (Ju(A), kn(A, m)), of(() => {
      A._isLeaving && (ds(A, f), kn(A, h), af(O) || lf(A, s, S, me));
    }), Bs(O, [A, me]);
  }, onEnterCancelled(A) {
    x(A, !1, void 0, !0), Bs(T, [A]);
  }, onAppearCancelled(A) {
    x(A, !0, void 0, !0), Bs(w, [A]);
  }, onLeaveCancelled(A) {
    B(A), Bs(I, [A]);
  } });
}
function kn(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[Vi] || (t[Vi] = /* @__PURE__ */ new Set())).add(e);
}
function ds(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  let n = t[Vi];
  n && (n.delete(e), n.size || (t[Vi] = void 0));
}
function of(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let y2 = 0;
function lf(t, e, n, s) {
  let i = t._endId = ++y2, r = () => {
    i === t._endId && s();
  };
  if (n != null) return setTimeout(r, n);
  let { type: a, timeout: o, propCount: l } = N0(t, e);
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
function N0(t, e) {
  let n = window.getComputedStyle(t), s = (p) => (n[p] || "").split(", "), i = s(`${os}Delay`), r = s(`${os}Duration`), a = uf(i, r), o = s(`${or}Delay`), l = s(`${or}Duration`), u = uf(o, l), c = null, f = 0, m = 0;
  e === os ? a > 0 && (c = os, f = a, m = r.length) : e === or ? u > 0 && (c = or, f = u, m = l.length) : m = (c = (f = Math.max(a, u)) > 0 ? a > u ? os : or : null) ? c === os ? r.length : l.length : 0;
  let h = c === os && /\b(?:transform|all)(?:,|$)/.test(s(`${os}Property`).toString());
  return { type: c, timeout: f, propCount: m, hasTransform: h };
}
function uf(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => cf(n) + cf(t[s])));
}
function cf(t) {
  return t === "auto" ? 0 : 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function Ju(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
let df = /* @__PURE__ */ Symbol("_vod"), v2 = /* @__PURE__ */ Symbol("_vsh"), b2 = /* @__PURE__ */ Symbol(""), k2 = /(?:^|;)\s*display\s*:/, ff = /\s*!important$/;
function Ha(t, e, n) {
  if (re(n)) n.forEach((s) => Ha(t, e, s));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    let s = (function(i, r) {
      let a = Zl[r];
      if (a) return a;
      let o = Rt(r);
      if (o !== "filter" && o in i) return Zl[r] = o;
      o = Lo(o);
      for (let l = 0; l < hf.length; l++) {
        let u = hf[l] + o;
        if (u in i) return Zl[r] = u;
      }
      return r;
    })(t, e);
    ff.test(n) ? t.setProperty(Ds(s), n.replace(ff, ""), "important") : t[s] = n;
  }
}
let hf = ["Webkit", "Moz", "ms"], Zl = {}, mf = "http://www.w3.org/1999/xlink";
function pf(t, e, n, s, i, r = cy(e)) {
  s && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(mf, e.slice(6, e.length)) : t.setAttributeNS(mf, e, n) : n == null || r && !(n || n === "") ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : fn(n) ? String(n) : n);
}
function gf(t, e, n, s, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? O0(n) : n);
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
function Wn(t, e, n, s) {
  t.addEventListener(e, n, s);
}
let yf = /* @__PURE__ */ Symbol("_vei"), vf = /(?:Once|Passive|Capture)$/, jl = 0, w2 = Promise.resolve(), bf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && 123 > t.charCodeAt(2), x2 = (t, e, n, s, i, r) => {
  let a = i === "svg";
  if (e === "class") {
    var o;
    let l;
    o = s, (l = t[Vi]) && (o = (o ? [o, ...l] : [...l]).join(" ")), o == null ? t.removeAttribute("class") : a ? t.setAttribute("class", o) : t.className = o;
  } else e === "style" ? (function(l, u, c) {
    let f = l.style, m = He(c), h = !1;
    if (c && !m) {
      if (u) if (He(u)) for (let p of u.split(";")) {
        let b = p.slice(0, p.indexOf(":")).trim();
        c[b] == null && Ha(f, b, "");
      }
      else for (let p in u) c[p] == null && Ha(f, p, "");
      for (let p in c) p === "display" && (h = !0), Ha(f, p, c[p]);
    } else if (m) {
      if (u !== c) {
        let p = f[b2];
        p && (c += ";" + p), f.cssText = c, h = k2.test(c);
      }
    } else u && l.removeAttribute("style");
    df in l && (l[df] = h ? f.display : "", l[v2] && (f.display = "none"));
  })(t, n, s) : Oo(e) ? _c(e) || (function(l, u, c, f, m = null) {
    let h = l[yf] || (l[yf] = {}), p = h[u];
    if (f && p) p.value = f;
    else {
      let [k, F] = (function(T) {
        let O;
        if (vf.test(T)) {
          let I;
          for (O = {}; I = T.match(vf); ) T = T.slice(0, T.length - I[0].length), O[I[0].toLowerCase()] = !0;
        }
        return [T[2] === ":" ? T.slice(3) : Ds(T.slice(2)), O];
      })(u);
      if (f) {
        var b, S;
        let T;
        Wn(l, k, h[u] = (b = f, S = m, (T = (O) => {
          if (O._vts) {
            if (O._vts <= T.attached) return;
          } else O._vts = Date.now();
          hn((function(I, N) {
            if (!re(N)) return N;
            {
              let Z = I.stopImmediatePropagation;
              return I.stopImmediatePropagation = () => {
                Z.call(I), I._stopped = !0;
              }, N.map((w) => (x) => !x._stopped && w && w(x));
            }
          })(O, T.value), S, 5, [O]);
        }).value = b, T.attached = jl || (w2.then(() => jl = 0), jl = Date.now()), T), F);
      } else p && (l.removeEventListener(k, p, F), h[u] = void 0);
    }
  })(t, e, 0, s, r) : (e[0] === "." ? (e = e.slice(1), 0) : e[0] === "^" ? (e = e.slice(1), 1) : !(function(l, u, c, f) {
    if (f) return !!(u === "innerHTML" || u === "textContent" || u in l && bf(u) && he(c));
    if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "autocorrect" || u === "sandbox" && l.tagName === "IFRAME" || u === "form" || u === "list" && l.tagName === "INPUT" || u === "type" && l.tagName === "TEXTAREA") return !1;
    if (u === "width" || u === "height") {
      let m = l.tagName;
      if (m === "IMG" || m === "VIDEO" || m === "CANVAS" || m === "SOURCE") return !1;
    }
    return !(bf(u) && He(c)) && u in l;
  })(t, e, s, a)) ? t._isVueCE && (/[A-Z]/.test(e) || !He(s)) ? gf(t, Rt(e), s, r, e) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), pf(t, e, s, a)) : (gf(t, e, s), t.tagName.includes("-") || e !== "value" && e !== "checked" && e !== "selected" || pf(t, e, s, a, r, e !== "value"));
}, V0 = /* @__PURE__ */ new WeakMap(), B0 = /* @__PURE__ */ new WeakMap(), uo = /* @__PURE__ */ Symbol("_moveCb"), kf = /* @__PURE__ */ Symbol("_enterCb"), _0 = (Al = { name: "TransitionGroup", props: Qe({}, A0, { tag: String, moveClass: String }), setup(t, { slots: e }) {
  let n, s, i = Dn(), r = s0();
  return c0(() => {
    if (!n.length) return;
    let a = t.moveClass || `${t.name || "v"}-move`;
    if (!(function(l, u, c) {
      let f = l.cloneNode(), m = l[Vi];
      m && m.forEach((b) => {
        b.split(/\s+/).forEach((S) => S && f.classList.remove(S));
      }), c.split(/\s+/).forEach((b) => b && f.classList.add(b)), f.style.display = "none";
      let h = u.nodeType === 1 ? u : u.parentNode;
      h.appendChild(f);
      let { hasTransform: p } = N0(f);
      return h.removeChild(f), p;
    })(n[0].el, i.vnode.el, a)) {
      n = [];
      return;
    }
    n.forEach(T2), n.forEach(S2);
    let o = n.filter($2);
    Ju(i.vnode.el), o.forEach((l) => {
      let u = l.el, c = u.style;
      kn(u, a), c.transform = c.webkitTransform = c.transitionDuration = "";
      let f = u[uo] = (m) => {
        (!m || m.target === u) && (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[uo] = null, ds(u, a));
      };
      u.addEventListener("transitionend", f);
    }), n = [];
  }), () => {
    let a = Te(t), o = L0(a), l = a.tag || ve;
    if (n = [], s) for (let u = 0; u < s.length; u++) {
      let c = s[u];
      c.el && c.el instanceof Element && (n.push(c), ti(c, Rr(c, o, r, i)), V0.set(c, { left: c.el.offsetLeft, top: c.el.offsetTop }));
    }
    s = e.default ? Zc(e.default()) : [];
    for (let u = 0; u < s.length; u++) {
      let c = s[u];
      c.key != null && ti(c, Rr(c, o, r, i));
    }
    return z(l, null, s);
  };
} }, delete Al.props.mode, Al);
function T2(t) {
  let e = t.el;
  e[uo] && e[uo](), e[kf] && e[kf]();
}
function S2(t) {
  B0.set(t, { left: t.el.offsetLeft, top: t.el.offsetTop });
}
function $2(t) {
  let e = V0.get(t), n = B0.get(t), s = e.left - n.left, i = e.top - n.top;
  if (s || i) {
    let r = t.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", t;
  }
}
let Cs = (t) => {
  let e = t.props["onUpdate:modelValue"] || !1;
  return re(e) ? (n) => za(e, n) : e;
};
function I2(t) {
  t.target.composing = !0;
}
function wf(t) {
  let e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
let Jt = /* @__PURE__ */ Symbol("_assign");
function xf(t, e, n) {
  return e && (t = t.trim()), n && (t = No(t)), t;
}
let co = { created(t, { modifiers: { lazy: e, trim: n, number: s } }, i) {
  t[Jt] = Cs(i);
  let r = s || i.props && i.props.type === "number";
  Wn(t, e ? "change" : "input", (a) => {
    a.target.composing || t[Jt](xf(t.value, n, r));
  }), (n || r) && Wn(t, "change", () => {
    t.value = xf(t.value, n, r);
  }), e || (Wn(t, "compositionstart", I2), Wn(t, "compositionend", wf), Wn(t, "change", wf));
}, mounted(t, { value: e }) {
  t.value = e ?? "";
}, beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, a) {
  if (t[Jt] = Cs(a), t.composing) return;
  let o = (r || t.type === "number") && !/^0\d/.test(t.value) ? No(t.value) : t.value, l = e ?? "";
  if (o !== l) {
    if (document.activeElement === t && t.type !== "range" && (s && e === n || i && t.value.trim() === l)) return;
    t.value = l;
  }
} }, M2 = { deep: !0, created(t, e, n) {
  t[Jt] = Cs(n), Wn(t, "change", () => {
    let s = t._modelValue, i = Bi(t), r = t.checked, a = t[Jt];
    if (re(s)) {
      let o = Rc(s, i), l = o !== -1;
      if (r && !l) a(s.concat(i));
      else if (!r && l) {
        let u = [...s];
        u.splice(o, 1), a(u);
      }
    } else {
      let o;
      if (o = s, ct.call(o) === "[object Set]") {
        let l = new Set(s);
        r ? l.add(i) : l.delete(i), a(l);
      } else a(z0(t, r));
    }
  });
}, mounted: Tf, beforeUpdate(t, e, n) {
  t[Jt] = Cs(n), Tf(t, e, n);
} };
function Tf(t, { value: e, oldValue: n }, s) {
  let i;
  if (t._modelValue = e, re(e)) i = Rc(e, s.props.value) > -1;
  else {
    let r;
    if (r = e, ct.call(r) === "[object Set]") i = e.has(s.props.value);
    else {
      if (e === n) return;
      i = ei(e, z0(t, !0));
    }
  }
  t.checked !== i && (t.checked = i);
}
let C2 = { created(t, { value: e }, n) {
  t.checked = ei(e, n.props.value), t[Jt] = Cs(n), Wn(t, "change", () => {
    t[Jt](Bi(t));
  });
}, beforeUpdate(t, { value: e, oldValue: n }, s) {
  t[Jt] = Cs(s), e !== n && (t.checked = ei(e, s.props.value));
} }, E2 = { deep: !0, created(t, { value: e, modifiers: { number: n } }, s) {
  let i, r = (i = e, ct.call(i) === "[object Set]");
  Wn(t, "change", () => {
    let a = Array.prototype.filter.call(t.options, (o) => o.selected).map((o) => n ? No(Bi(o)) : Bi(o));
    t[Jt](t.multiple ? r ? new Set(a) : a : a[0]), t._assigning = !0, qs(() => {
      t._assigning = !1;
    });
  }), t[Jt] = Cs(s);
}, mounted(t, { value: e }) {
  Sf(t, e);
}, beforeUpdate(t, e, n) {
  t[Jt] = Cs(n);
}, updated(t, { value: e }) {
  t._assigning || Sf(t, e);
} };
function Sf(t, e) {
  let n, s = t.multiple, i = re(e);
  if (!s || i || (n = e, ct.call(n) === "[object Set]")) {
    for (let r = 0, a = t.options.length; r < a; r++) {
      let o = t.options[r], l = Bi(o);
      if (s) if (i) {
        let u = typeof l;
        u === "string" || u === "number" ? o.selected = e.some((c) => String(c) === String(l)) : o.selected = Rc(e, l) > -1;
      } else o.selected = e.has(l);
      else if (ei(Bi(o), e)) {
        t.selectedIndex !== r && (t.selectedIndex = r);
        return;
      }
    }
    s || t.selectedIndex === -1 || (t.selectedIndex = -1);
  }
}
function Bi(t) {
  return "_value" in t ? t._value : t.value;
}
function z0(t, e) {
  let n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
let F2 = { created(t, e, n) {
  xa(t, e, n, null, "created");
}, mounted(t, e, n) {
  xa(t, e, n, null, "mounted");
}, beforeUpdate(t, e, n, s) {
  xa(t, e, n, s, "beforeUpdate");
}, updated(t, e, n, s) {
  xa(t, e, n, s, "updated");
} };
function O2(t, e) {
  switch (t) {
    case "SELECT":
      return E2;
    case "TEXTAREA":
      return co;
    default:
      switch (e) {
        case "checkbox":
          return M2;
        case "radio":
          return C2;
        default:
          return co;
      }
  }
}
function xa(t, e, n, s, i) {
  let r = O2(t.tagName, n.props && n.props.type)[i];
  r && r(t, e, n, s);
}
let D2 = ["ctrl", "shift", "alt", "meta"], A2 = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, e) => D2.some((n) => t[`${n}Key`] && !e.includes(n)) }, td = (t, e) => {
  let n = t._withMods || (t._withMods = {}), s = e.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let a = 0; a < e.length; a++) {
      let o = A2[e[a]];
      if (o && o(i, e)) return;
    }
    return t(i, ...r);
  });
}, L2 = Qe({ patchProp: x2 }, g2), N2 = (...t) => {
  let e = (Bd || (Bd = i2(L2))).createApp(...t), { mount: n } = e;
  return e.mount = (s) => {
    let i = B2(s);
    if (!i) return;
    let r = e._component;
    he(r) || r.render || r.template || (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    let a = n(i, !1, V2(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function V2(t) {
  return t instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && t instanceof MathMLElement ? "mathml" : void 0;
}
function B2(t) {
  return He(t) ? document.querySelector(t) : t;
}
function R0(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = R0(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function Xt() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = R0(t)) && (s && (s += " "), s += e);
  return s;
}
const P0 = /* @__PURE__ */ Symbol(), W0 = /* @__PURE__ */ Symbol(), _2 = /* @__PURE__ */ Symbol();
let si = class extends Error {
}, z2 = class extends si {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}, R2 = class extends si {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}, P2 = class extends si {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}, ki = class extends si {
}, H0 = class extends si {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}, kt = class extends si {
}, ls = class extends si {
  constructor() {
    super("Zone is an abstract class");
  }
};
const X = "numeric", pn = "short", Bt = "long", fo = {
  year: X,
  month: X,
  day: X
}, U0 = {
  year: X,
  month: pn,
  day: X
}, W2 = {
  year: X,
  month: pn,
  day: X,
  weekday: pn
}, q0 = {
  year: X,
  month: Bt,
  day: X
}, Z0 = {
  year: X,
  month: Bt,
  day: X,
  weekday: Bt
}, j0 = {
  hour: X,
  minute: X
}, G0 = {
  hour: X,
  minute: X,
  second: X
}, Y0 = {
  hour: X,
  minute: X,
  second: X,
  timeZoneName: pn
}, J0 = {
  hour: X,
  minute: X,
  second: X,
  timeZoneName: Bt
}, X0 = {
  hour: X,
  minute: X,
  hourCycle: "h23"
}, K0 = {
  hour: X,
  minute: X,
  second: X,
  hourCycle: "h23"
}, Q0 = {
  hour: X,
  minute: X,
  second: X,
  hourCycle: "h23",
  timeZoneName: pn
}, e1 = {
  hour: X,
  minute: X,
  second: X,
  hourCycle: "h23",
  timeZoneName: Bt
}, t1 = {
  year: X,
  month: X,
  day: X,
  hour: X,
  minute: X
}, n1 = {
  year: X,
  month: X,
  day: X,
  hour: X,
  minute: X,
  second: X
}, s1 = {
  year: X,
  month: pn,
  day: X,
  hour: X,
  minute: X
}, i1 = {
  year: X,
  month: pn,
  day: X,
  hour: X,
  minute: X,
  second: X
}, H2 = {
  year: X,
  month: pn,
  day: X,
  weekday: pn,
  hour: X,
  minute: X
}, r1 = {
  year: X,
  month: Bt,
  day: X,
  hour: X,
  minute: X,
  timeZoneName: pn
}, a1 = {
  year: X,
  month: Bt,
  day: X,
  hour: X,
  minute: X,
  second: X,
  timeZoneName: pn
}, o1 = {
  year: X,
  month: Bt,
  day: X,
  weekday: Bt,
  hour: X,
  minute: X,
  timeZoneName: Bt
}, l1 = {
  year: X,
  month: Bt,
  day: X,
  weekday: Bt,
  hour: X,
  minute: X,
  second: X,
  timeZoneName: Bt
};
let Qr = class {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ls();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ls();
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
    throw new ls();
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
    throw new ls();
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
    throw new ls();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new ls();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new ls();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ls();
  }
}, Gl = null, u1 = class c1 extends Qr {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Gl === null && (Gl = new c1()), Gl;
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
    return w1(e, n, s);
  }
  /** @override **/
  formatOffset(e, n) {
    return Or(this.offset(e), n);
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
const Xu = /* @__PURE__ */ new Map();
function U2(t) {
  let e = Xu.get(t);
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
  }), Xu.set(t, e)), e;
}
const q2 = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Z2(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, o, l, u, c] = s;
  return [a, i, r, o, l, u, c];
}
function j2(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], o = q2[r];
    r === "era" ? s[o] = a : le(o) || (s[o] = parseInt(a, 10));
  }
  return s;
}
const Yl = /* @__PURE__ */ new Map();
let Ui = class Ku extends Qr {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = Yl.get(e);
    return n === void 0 && Yl.set(e, n = new Ku(e)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Yl.clear(), Xu.clear();
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
    super(), this.zoneName = e, this.valid = Ku.isValidZone(e);
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
    return w1(e, n, s, this.name);
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
    return Or(this.offset(e), n);
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
    const s = U2(this.name);
    let [i, r, a, o, l, u, c] = s.formatToParts ? j2(s, n) : Z2(s, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const m = Jo({
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
}, $f = {};
function G2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = $f[n];
  return s || (s = new Intl.ListFormat(t, e), $f[n] = s), s;
}
const Qu = /* @__PURE__ */ new Map();
function ec(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Qu.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), Qu.set(n, s)), s;
}
const tc = /* @__PURE__ */ new Map();
function Y2(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = tc.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), tc.set(n, s)), s;
}
const nc = /* @__PURE__ */ new Map();
function J2(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = nc.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), nc.set(i, r)), r;
}
let mr = null;
function X2() {
  return mr || (mr = new Intl.DateTimeFormat().resolvedOptions().locale, mr);
}
const sc = /* @__PURE__ */ new Map();
function d1(t) {
  let e = sc.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), sc.set(t, e)), e;
}
const ic = /* @__PURE__ */ new Map();
function K2(t) {
  let e = ic.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...f1, ...e }), ic.set(t, e);
  }
  return e;
}
function Q2(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = ec(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      s = ec(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function ev(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function tv(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = qe.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function nv(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const s = qe.utc(2016, 11, 13 + n);
    e.push(t(s));
  }
  return e;
}
function Ta(t, e, n, s) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : s(e);
}
function sv(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || d1(t.locale).numberingSystem === "latn";
}
let iv = class {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...s };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = Y2(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : ad(e, 3);
      return tt(n, this.padTo);
    }
  }
}, rv = class {
  constructor(e, n, s) {
    this.opts = s, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Ui.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || i, this.dtf = ec(n, r);
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
}, av = class {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && b1() && (this.rtf = J2(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : Cv(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
};
const f1 = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
let Re = class pr {
  static fromOpts(e) {
    return pr.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, s, i, r = !1) {
    const a = e || Ye.defaultLocale, o = a || (r ? "en-US" : X2()), l = n || Ye.defaultNumberingSystem, u = s || Ye.defaultOutputCalendar, c = ac(i) || Ye.defaultWeekSettings;
    return new pr(o, l, u, c, a);
  }
  static resetCache() {
    mr = null, Qu.clear(), tc.clear(), nc.clear(), sc.clear(), ic.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return pr.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, o, l] = Q2(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = s || l || null, this.weekSettings = i, this.intl = ev(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = sv(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : pr.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      ac(e.weekSettings) || this.weekSettings,
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
    return Ta(this, e, S1, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (o) => this.dtFormatter(o, i).format() : (o) => this.extract(o, i, "month");
        this.monthsCache[r][e] = tv(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return Ta(this, e, M1, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = nv(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Ta(
      this,
      void 0,
      () => C1,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [qe.utc(2016, 11, 13, 9), qe.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Ta(this, e, E1, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [qe.utc(-40, 1, 1), qe.utc(2017, 1, 1)].map(
        (s) => this.extract(s, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, s) {
    const i = this.dtFormatter(e, n), r = i.formatToParts(), a = r.find((o) => o.type.toLowerCase() === s);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new iv(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new rv(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new av(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return G2(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || d1(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : k1() ? K2(this.locale) : f1;
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
}, Jl = null, Cn = class gr extends Qr {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Jl === null && (Jl = new gr(0)), Jl;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? gr.utcInstance : new gr(e);
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
        return new gr(Xo(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${Or(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Or(-this.fixed, "narrow")}`;
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
    return Or(this.fixed, n);
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
}, ov = class extends Qr {
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
function vs(t, e) {
  if (le(t) || t === null)
    return e;
  if (t instanceof Qr)
    return t;
  if (hv(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? u1.instance : n === "utc" || n === "gmt" ? Cn.utcInstance : Cn.parseSpecifier(n) || Ui.create(t);
  } else return xs(t) ? Cn.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new ov(t);
}
const nd = {
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
}, If = {
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
}, lv = nd.hanidec.replace(/[\[|\]]/g, "").split("");
function uv(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search(nd.hanidec) !== -1)
        e += lv.indexOf(t[n]);
      else
        for (const i in If) {
          const [r, a] = If[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const rc = /* @__PURE__ */ new Map();
function cv() {
  rc.clear();
}
function en({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = rc.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), rc.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${nd[n]}${e}`), s.set(e, i)), i;
}
let Mf = () => Date.now(), Cf = "system", Ef = null, Ff = null, Of = null, Df = 60, Af, Lf = null, Ye = class {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Mf;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Mf = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Cf = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return vs(Cf, u1.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Ef;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Ef = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Ff;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Ff = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Of;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Of = e;
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
    return Lf;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Lf = ac(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Df;
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
    Df = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Af;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Af = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Re.resetCache(), Ui.resetCache(), qe.resetCache(), cv();
  }
}, on = class {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
};
const h1 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], m1 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Zt(t, e) {
  return new on(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function sd(t, e, n) {
  const s = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const i = s.getUTCDay();
  return i === 0 ? 7 : i;
}
function p1(t, e, n) {
  return n + (ea(t) ? m1 : h1)[e - 1];
}
function g1(t, e) {
  const n = ea(t) ? m1 : h1, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function id(t, e) {
  return (t - e + 7) % 7 + 1;
}
function ho(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = p1(s, i, r), o = id(sd(s, i, r), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = s - 1, l = Ur(u, e, n)) : l > Ur(s, e, n) ? (u = s + 1, l = 1) : u = s, { weekYear: u, weekNumber: l, weekday: o, ...Ko(t) };
}
function Nf(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = id(sd(s, 1, e), n), o = Ci(s);
  let l = i * 7 + r - a - 7 + e, u;
  l < 1 ? (u = s - 1, l += Ci(u)) : l > o ? (u = s + 1, l -= Ci(s)) : u = s;
  const { month: c, day: f } = g1(u, l);
  return { year: u, month: c, day: f, ...Ko(t) };
}
function Xl(t) {
  const { year: e, month: n, day: s } = t, i = p1(e, n, s);
  return { year: e, ordinal: i, ...Ko(t) };
}
function Vf(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = g1(e, n);
  return { year: e, month: s, day: i, ...Ko(t) };
}
function Bf(t, e) {
  if (!le(t.localWeekday) || !le(t.localWeekNumber) || !le(t.localWeekYear)) {
    if (!le(t.weekday) || !le(t.weekNumber) || !le(t.weekYear))
      throw new ki(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return le(t.localWeekday) || (t.weekday = t.localWeekday), le(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), le(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function dv(t, e = 4, n = 1) {
  const s = Yo(t.weekYear), i = jt(
    t.weekNumber,
    1,
    Ur(t.weekYear, e, n)
  ), r = jt(t.weekday, 1, 7);
  return s ? i ? r ? !1 : Zt("weekday", t.weekday) : Zt("week", t.weekNumber) : Zt("weekYear", t.weekYear);
}
function fv(t) {
  const e = Yo(t.year), n = jt(t.ordinal, 1, Ci(t.year));
  return e ? n ? !1 : Zt("ordinal", t.ordinal) : Zt("year", t.year);
}
function y1(t) {
  const e = Yo(t.year), n = jt(t.month, 1, 12), s = jt(t.day, 1, mo(t.year, t.month));
  return e ? n ? s ? !1 : Zt("day", t.day) : Zt("month", t.month) : Zt("year", t.year);
}
function v1(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = jt(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = jt(n, 0, 59), o = jt(s, 0, 59), l = jt(i, 0, 999);
  return r ? a ? o ? l ? !1 : Zt("millisecond", i) : Zt("second", s) : Zt("minute", n) : Zt("hour", e);
}
function le(t) {
  return typeof t > "u";
}
function xs(t) {
  return typeof t == "number";
}
function Yo(t) {
  return typeof t == "number" && t % 1 === 0;
}
function hv(t) {
  return typeof t == "string";
}
function mv(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function b1() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function k1() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function pv(t) {
  return Array.isArray(t) ? t : [t];
}
function _f(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function gv(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function _i(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function ac(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new kt("Week settings must be an object");
  if (!jt(t.firstDay, 1, 7) || !jt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !jt(e, 1, 7)))
    throw new kt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function jt(t, e, n) {
  return Yo(t) && t >= e && t <= n;
}
function yv(t, e) {
  return t - e * Math.floor(t / e);
}
function tt(t, e = 2) {
  const n = t < 0;
  let s;
  return n ? s = "-" + ("" + -t).padStart(e, "0") : s = ("" + t).padStart(e, "0"), s;
}
function gs(t) {
  if (!(le(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function _s(t) {
  if (!(le(t) || t === null || t === ""))
    return parseFloat(t);
}
function rd(t) {
  if (!(le(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function ad(t, e, n = "round") {
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
function ea(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Ci(t) {
  return ea(t) ? 366 : 365;
}
function mo(t, e) {
  const n = yv(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? ea(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Jo(t) {
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
function zf(t, e, n) {
  return -id(sd(t, 1, e), n) + e - 1;
}
function Ur(t, e = 4, n = 1) {
  const s = zf(t, e, n), i = zf(t + 1, e, n);
  return (Ci(t) - s + i) / 7;
}
function oc(t) {
  return t > 99 ? t : t > Ye.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function w1(t, e, n, s = null) {
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
function Xo(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + i;
}
function x1(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new kt(`Invalid unit value ${t}`);
  return e;
}
function po(t, e) {
  const n = {};
  for (const s in t)
    if (_i(t, s)) {
      const i = t[s];
      if (i == null) continue;
      n[e(s)] = x1(i);
    }
  return n;
}
function Or(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), s = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${tt(n, 2)}:${tt(s, 2)}`;
    case "narrow":
      return `${i}${n}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${i}${tt(n, 2)}${tt(s, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Ko(t) {
  return gv(t, ["hour", "minute", "second", "millisecond"]);
}
const vv = [
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
], T1 = [
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
], bv = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function S1(t) {
  switch (t) {
    case "narrow":
      return [...bv];
    case "short":
      return [...T1];
    case "long":
      return [...vv];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const $1 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], I1 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], kv = ["M", "T", "W", "T", "F", "S", "S"];
function M1(t) {
  switch (t) {
    case "narrow":
      return [...kv];
    case "short":
      return [...I1];
    case "long":
      return [...$1];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const C1 = ["AM", "PM"], wv = ["Before Christ", "Anno Domini"], xv = ["BC", "AD"], Tv = ["B", "A"];
function E1(t) {
  switch (t) {
    case "narrow":
      return [...Tv];
    case "short":
      return [...xv];
    case "long":
      return [...wv];
    default:
      return null;
  }
}
function Sv(t) {
  return C1[t.hour < 12 ? 0 : 1];
}
function $v(t, e) {
  return M1(e)[t.weekday - 1];
}
function Iv(t, e) {
  return S1(e)[t.month - 1];
}
function Mv(t, e) {
  return E1(e)[t.year < 0 ? 0 : 1];
}
function Cv(t, e, n = "always", s = !1) {
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
function Rf(t, e) {
  let n = "";
  for (const s of t)
    s.literal ? n += s.val : n += e(s.val);
  return n;
}
const Ev = {
  D: fo,
  DD: U0,
  DDD: q0,
  DDDD: Z0,
  t: j0,
  tt: G0,
  ttt: Y0,
  tttt: J0,
  T: X0,
  TT: K0,
  TTT: Q0,
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
let an = class yr {
  static create(e, n = {}) {
    return new yr(e, n);
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
    return Ev[e];
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
      return tt(e, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), s && (i.signDisplay = s), this.loc.numberFormatter(i).format(e);
  }
  formatDateTimeFromString(e, n) {
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, p) => this.loc.extract(e, h, p), a = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", o = () => s ? Sv(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (h, p) => s ? Iv(e, h) : r(p ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, p) => s ? $v(e, h) : r(
      p ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), c = (h) => {
      const p = yr.macroTokenToFormatOpts(h);
      return p ? this.formatWithSystemDefault(e, p) : h;
    }, f = (h) => s ? Mv(e, h) : r({ era: h }, "era"), m = (h) => {
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
    return Rf(yr.parseFormat(n), m);
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
        let b;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? b = "never" : this.opts.signMode === "all" ? b = "always" : b = "auto", this.num(c.get(h) * p, m.length, b);
      } else
        return m;
    }, a = yr.parseFormat(n), o = a.reduce(
      (c, { literal: f, val: m }) => f ? c : c.concat(m),
      []
    ), l = e.shiftTo(...o.map(i).filter((c) => c)), u = {
      isNegativeDuration: l < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(l.values)[0]
    };
    return Rf(a, r(l, u));
  }
};
const F1 = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function qi(...t) {
  const e = t.reduce((n, s) => n + s.source, "");
  return RegExp(`^${e}$`);
}
function Zi(...t) {
  return (e) => t.reduce(
    ([n, s, i], r) => {
      const [a, o, l] = r(e, i);
      return [{ ...n, ...a }, o || s, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function ji(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, s] of e) {
    const i = n.exec(t);
    if (i)
      return s(i);
  }
  return [null, null];
}
function O1(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = gs(e[n + i]);
    return [s, null, n + i];
  };
}
const D1 = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, Fv = `(?:${D1.source}?(?:\\[(${F1.source})\\])?)?`, od = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, A1 = RegExp(`${od.source}${Fv}`), ld = RegExp(`(?:[Tt]${A1.source})?`), Ov = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Dv = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Av = /(\d{4})-?(\d{3})/, Lv = O1("weekYear", "weekNumber", "weekDay"), Nv = O1("year", "ordinal"), Vv = /(\d{4})-(\d\d)-(\d\d)/, L1 = RegExp(
  `${od.source} ?(?:${D1.source}|(${F1.source}))?`
), Bv = RegExp(`(?: ${L1.source})?`);
function Ei(t, e, n) {
  const s = t[e];
  return le(s) ? n : gs(s);
}
function _v(t, e) {
  return [{
    year: Ei(t, e),
    month: Ei(t, e + 1, 1),
    day: Ei(t, e + 2, 1)
  }, null, e + 3];
}
function Gi(t, e) {
  return [{
    hours: Ei(t, e, 0),
    minutes: Ei(t, e + 1, 0),
    seconds: Ei(t, e + 2, 0),
    milliseconds: rd(t[e + 3])
  }, null, e + 4];
}
function ta(t, e) {
  const n = !t[e] && !t[e + 1], s = Xo(t[e + 1], t[e + 2]), i = n ? null : Cn.instance(s);
  return [{}, i, e + 3];
}
function na(t, e) {
  const n = t[e] ? Ui.create(t[e]) : null;
  return [{}, n, e + 1];
}
const zv = RegExp(`^T?${od.source}$`), Rv = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Pv(t) {
  const [e, n, s, i, r, a, o, l, u] = t, c = e[0] === "-", f = l && l[0] === "-", m = (h, p = !1) => h !== void 0 && (p || h && c) ? -h : h;
  return [
    {
      years: m(_s(n)),
      months: m(_s(s)),
      weeks: m(_s(i)),
      days: m(_s(r)),
      hours: m(_s(a)),
      minutes: m(_s(o)),
      seconds: m(_s(l), l === "-0"),
      milliseconds: m(rd(u), f)
    }
  ];
}
const Wv = {
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
function ud(t, e, n, s, i, r, a) {
  const o = {
    year: e.length === 2 ? oc(gs(e)) : gs(e),
    month: T1.indexOf(n) + 1,
    day: gs(s),
    hour: gs(i),
    minute: gs(r)
  };
  return a && (o.second = gs(a)), t && (o.weekday = t.length > 3 ? $1.indexOf(t) + 1 : I1.indexOf(t) + 1), o;
}
const Hv = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Uv(t) {
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
  ] = t, m = ud(e, i, s, n, r, a, o);
  let h;
  return l ? h = Wv[l] : u ? h = 0 : h = Xo(c, f), [m, new Cn(h)];
}
function qv(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Zv = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, jv = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Gv = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Pf(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [ud(e, i, s, n, r, a, o), Cn.utcInstance];
}
function Yv(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [ud(e, o, n, s, i, r, a), Cn.utcInstance];
}
const Jv = qi(Ov, ld), Xv = qi(Dv, ld), Kv = qi(Av, ld), Qv = qi(A1), N1 = Zi(
  _v,
  Gi,
  ta,
  na
), e4 = Zi(
  Lv,
  Gi,
  ta,
  na
), t4 = Zi(
  Nv,
  Gi,
  ta,
  na
), n4 = Zi(
  Gi,
  ta,
  na
);
function s4(t) {
  return ji(
    t,
    [Jv, N1],
    [Xv, e4],
    [Kv, t4],
    [Qv, n4]
  );
}
function i4(t) {
  return ji(qv(t), [Hv, Uv]);
}
function r4(t) {
  return ji(
    t,
    [Zv, Pf],
    [jv, Pf],
    [Gv, Yv]
  );
}
function a4(t) {
  return ji(t, [Rv, Pv]);
}
const o4 = Zi(Gi);
function l4(t) {
  return ji(t, [zv, o4]);
}
const u4 = qi(Vv, Bv), c4 = qi(L1), d4 = Zi(
  Gi,
  ta,
  na
);
function f4(t) {
  return ji(
    t,
    [u4, N1],
    [c4, d4]
  );
}
const Wf = "Invalid Duration", V1 = {
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
}, h4 = {
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
  ...V1
}, Ht = 146097 / 400, di = 146097 / 4800, m4 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Ht / 7,
    days: Ht,
    hours: Ht * 24,
    minutes: Ht * 24 * 60,
    seconds: Ht * 24 * 60 * 60,
    milliseconds: Ht * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Ht / 28,
    days: Ht / 4,
    hours: Ht * 24 / 4,
    minutes: Ht * 24 * 60 / 4,
    seconds: Ht * 24 * 60 * 60 / 4,
    milliseconds: Ht * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: di / 7,
    days: di,
    hours: di * 24,
    minutes: di * 24 * 60,
    seconds: di * 24 * 60 * 60,
    milliseconds: di * 24 * 60 * 60 * 1e3
  },
  ...V1
}, Zs = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], p4 = Zs.slice(0).reverse();
function Nn(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Tt(s);
}
function B1(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of p4.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function Hf(t, e) {
  const n = B1(t, e) < 0 ? -1 : 1;
  Zs.reduceRight((s, i) => {
    if (le(e[i]))
      return s;
    if (s) {
      const r = e[s] * n, a = t[i][s], o = Math.floor(r / a);
      e[i] += o * n, e[s] -= o * a * n;
    }
    return i;
  }, null), Zs.reduce((s, i) => {
    if (le(e[i]))
      return s;
    if (s) {
      const r = e[s] % 1;
      e[s] -= r, e[i] += r * t[s][i];
    }
    return i;
  }, null);
}
function Uf(t) {
  const e = {};
  for (const [n, s] of Object.entries(t))
    s !== 0 && (e[n] = s);
  return e;
}
let Tt = class pt {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let s = n ? m4 : h4;
    e.matrix && (s = e.matrix), this.values = e.values, this.loc = e.loc || Re.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = s, this.isLuxonDuration = !0;
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
    return pt.fromObject({ milliseconds: e }, n);
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
      throw new kt(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new pt({
      values: po(e, pt.normalizeUnit),
      loc: Re.fromObject(n),
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
    if (xs(e))
      return pt.fromMillis(e);
    if (pt.isDuration(e))
      return e;
    if (typeof e == "object")
      return pt.fromObject(e);
    throw new kt(
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
    const [s] = a4(e);
    return s ? pt.fromObject(s, n) : pt.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    const [s] = l4(e);
    return s ? pt.fromObject(s, n) : pt.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new kt("need to specify a reason the Duration is invalid");
    const s = e instanceof on ? e : new on(e, n);
    if (Ye.throwOnInvalid)
      throw new P2(s);
    return new pt({ invalid: s });
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
    if (!n) throw new H0(e);
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
    return this.isValid ? an.create(this.loc, s).formatDurationFromString(this, e) : Wf;
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
    if (!this.isValid) return Wf;
    const n = e.showZeros !== !1, s = Zs.map((i) => {
      const r = this.values[i];
      return le(r) || r === 0 && !n ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: i.slice(0, -1) }).format(r);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += ad(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, qe.fromMillis(n, { zone: "UTC" }).toISOTime(e));
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
    return this.isValid ? B1(this.matrix, this.values) : NaN;
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
    const n = pt.fromDurationLike(e), s = {};
    for (const i of Zs)
      (_i(n.values, i) || _i(this.values, i)) && (s[i] = n.get(i) + this.get(i));
    return Nn(this, { values: s }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = pt.fromDurationLike(e);
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
      n[s] = x1(e(this.values[s], s));
    return Nn(this, { values: n }, !0);
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
    return this[pt.normalizeUnit(e)];
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
    const n = { ...this.values, ...po(e, pt.normalizeUnit) };
    return Nn(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: s, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: s };
    return Nn(this, a);
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
    return Hf(this.matrix, e), Nn(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = Uf(this.normalize().shiftToAll().toObject());
    return Nn(this, { values: e }, !0);
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
    e = e.map((a) => pt.normalizeUnit(a));
    const n = {}, s = {}, i = this.toObject();
    let r;
    for (const a of Zs)
      if (e.indexOf(a) >= 0) {
        r = a;
        let o = 0;
        for (const u in s)
          o += this.matrix[u][a] * s[u], s[u] = 0;
        xs(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, s[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else xs(i[a]) && (s[a] = i[a]);
    for (const a in s)
      s[a] !== 0 && (n[r] += a === r ? s[a] : s[a] / this.matrix[r][a]);
    return Hf(this.matrix, n), Nn(this, { values: n }, !0);
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
    return Nn(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = Uf(this.values);
    return Nn(this, { values: e }, !0);
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
    for (const s of Zs)
      if (!n(this.values[s], e.values[s]))
        return !1;
    return !0;
  }
};
const fi = "Invalid Interval";
function g4(t, e) {
  return !t || !t.isValid ? Ua.invalid("missing or invalid start") : !e || !e.isValid ? Ua.invalid("missing or invalid end") : e < t ? Ua.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
let Ua = class lt {
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
      throw new kt("need to specify a reason the Interval is invalid");
    const s = e instanceof on ? e : new on(e, n);
    if (Ye.throwOnInvalid)
      throw new R2(s);
    return new lt({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = lr(e), i = lr(n), r = g4(s, i);
    return r ?? new lt({
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
    const s = Tt.fromDurationLike(n), i = lr(e);
    return lt.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = Tt.fromDurationLike(n), i = lr(e);
    return lt.fromDateTimes(i.minus(s), i);
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
        r = qe.fromISO(s, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = qe.fromISO(i, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return lt.fromDateTimes(r, o);
      if (a) {
        const u = Tt.fromISO(i, n);
        if (u.isValid)
          return lt.after(r, u);
      } else if (l) {
        const u = Tt.fromISO(s, n);
        if (u.isValid)
          return lt.before(o, u);
      }
    }
    return lt.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    return this.isValid ? lt.fromDateTimes(e || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const n = e.map(lr).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), s = [];
    let { s: i } = this, r = 0;
    for (; i < this.e; ) {
      const a = n[r] || this.e, o = +a > +this.e ? this.e : a;
      s.push(lt.fromDateTimes(i, o)), i = o, r += 1;
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
    const n = Tt.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, i = 1, r;
    const a = [];
    for (; s < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * i));
      r = +o > +this.e ? this.e : o, a.push(lt.fromDateTimes(s, r)), s = r, i += 1;
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
    return n >= s ? null : lt.fromDateTimes(n, s);
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
    return lt.fromDateTimes(n, s);
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
      s += l.type === "s" ? 1 : -1, s === 1 ? n = l.time : (n && +n != +l.time && i.push(lt.fromDateTimes(n, l.time)), n = null);
    return lt.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return lt.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : fi;
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
  toLocaleString(e = fo, n = {}) {
    return this.isValid ? an.create(this.s.loc.clone(n), e).formatInterval(this) : fi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : fi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : fi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : fi;
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
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : fi;
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
    return this.isValid ? this.e.diff(this.s, e, n) : Tt.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return lt.fromDateTimes(e(this.s), e(this.e));
  }
}, Sa = class {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = Ye.defaultZone) {
    const n = qe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return Ui.isValidZone(e);
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
    return vs(e, Ye.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Re.create(e)).getStartOfWeek();
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
    return (n || Re.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Re.create(e)).getWeekendDays().slice();
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
    return (i || Re.create(n, s, r)).months(e);
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
    return (i || Re.create(n, s, r)).months(e, !0);
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
    return (i || Re.create(n, s, null)).weekdays(e);
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
    return (i || Re.create(n, s, null)).weekdays(e, !0);
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
    return Re.create(e).meridiems();
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
    return Re.create(n, null, "gregory").eras(e);
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
    return { relative: b1(), localeWeek: k1() };
  }
};
function qf(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(Tt.fromMillis(s).as("days"));
}
function y4(t, e, n) {
  const s = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const c = qf(l, u);
        return (c - c % 7) / 7;
      }
    ],
    ["days", qf]
  ], i = {}, r = t;
  let a, o;
  for (const [l, u] of s)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = r.plus(i), o > e ? (i[l]--, t = r.plus(i), t > e && (o = t, i[l]--, t = r.plus(i))) : t = o);
  return [t, i, o, a];
}
function v4(t, e, n, s) {
  let [i, r, a, o] = y4(t, e, n);
  const l = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (r[o] = (r[o] || 0) + l / (a - i)));
  const c = Tt.fromObject(r, s);
  return u.length > 0 ? Tt.fromMillis(l, s).shiftTo(...u).plus(c) : c;
}
const b4 = "missing Intl.DateTimeFormat.formatToParts support";
function Fe(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(uv(n)) };
}
const k4 = " ", _1 = `[ ${k4}]`, z1 = new RegExp(_1, "g");
function w4(t) {
  return t.replace(/\./g, "\\.?").replace(z1, _1);
}
function Zf(t) {
  return t.replace(/\./g, "").replace(z1, " ").toLowerCase();
}
function tn(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(w4).join("|")),
    deser: ([n]) => t.findIndex((s) => Zf(n) === Zf(s)) + e
  };
}
function jf(t, e) {
  return { regex: t, deser: ([, n, s]) => Xo(n, s), groups: e };
}
function $a(t) {
  return { regex: t, deser: ([e]) => e };
}
function x4(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function T4(t, e) {
  const n = en(e), s = en(e, "{2}"), i = en(e, "{3}"), r = en(e, "{4}"), a = en(e, "{6}"), o = en(e, "{1,2}"), l = en(e, "{1,3}"), u = en(e, "{1,6}"), c = en(e, "{1,9}"), f = en(e, "{2,4}"), m = en(e, "{4,6}"), h = (S) => ({ regex: RegExp(x4(S.val)), deser: ([k]) => k, literal: !0 }), b = ((S) => {
    if (t.literal)
      return h(S);
    switch (S.val) {
      // era
      case "G":
        return tn(e.eras("short"), 0);
      case "GG":
        return tn(e.eras("long"), 0);
      // years
      case "y":
        return Fe(u);
      case "yy":
        return Fe(f, oc);
      case "yyyy":
        return Fe(r);
      case "yyyyy":
        return Fe(m);
      case "yyyyyy":
        return Fe(a);
      // months
      case "M":
        return Fe(o);
      case "MM":
        return Fe(s);
      case "MMM":
        return tn(e.months("short", !0), 1);
      case "MMMM":
        return tn(e.months("long", !0), 1);
      case "L":
        return Fe(o);
      case "LL":
        return Fe(s);
      case "LLL":
        return tn(e.months("short", !1), 1);
      case "LLLL":
        return tn(e.months("long", !1), 1);
      // dates
      case "d":
        return Fe(o);
      case "dd":
        return Fe(s);
      // ordinals
      case "o":
        return Fe(l);
      case "ooo":
        return Fe(i);
      // time
      case "HH":
        return Fe(s);
      case "H":
        return Fe(o);
      case "hh":
        return Fe(s);
      case "h":
        return Fe(o);
      case "mm":
        return Fe(s);
      case "m":
        return Fe(o);
      case "q":
        return Fe(o);
      case "qq":
        return Fe(s);
      case "s":
        return Fe(o);
      case "ss":
        return Fe(s);
      case "S":
        return Fe(l);
      case "SSS":
        return Fe(i);
      case "u":
        return $a(c);
      case "uu":
        return $a(o);
      case "uuu":
        return Fe(n);
      // meridiem
      case "a":
        return tn(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Fe(r);
      case "kk":
        return Fe(f, oc);
      // weekNumber (W)
      case "W":
        return Fe(o);
      case "WW":
        return Fe(s);
      // weekdays
      case "E":
      case "c":
        return Fe(n);
      case "EEE":
        return tn(e.weekdays("short", !1), 1);
      case "EEEE":
        return tn(e.weekdays("long", !1), 1);
      case "ccc":
        return tn(e.weekdays("short", !0), 1);
      case "cccc":
        return tn(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return jf(new RegExp(`([+-]${o.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return jf(new RegExp(`([+-]${o.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return $a(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return $a(/[^\S\n\r]/);
      default:
        return h(S);
    }
  })(t) || {
    invalidReason: b4
  };
  return b.token = t, b;
}
const S4 = {
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
function $4(t, e, n) {
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
  let o = S4[a];
  if (typeof o == "object" && (o = o[r]), o)
    return {
      literal: !1,
      val: o
    };
}
function I4(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function M4(t, e, n) {
  const s = t.match(e);
  if (s) {
    const i = {};
    let r = 1;
    for (const a in n)
      if (_i(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(s.slice(r, r + l))), r += l;
      }
    return [s, i];
  } else
    return [s, {}];
}
function C4(t) {
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
  return le(t.z) || (n = Ui.create(t.z)), le(t.Z) || (n || (n = new Cn(t.Z)), s = t.Z), le(t.q) || (t.M = (t.q - 1) * 3 + 1), le(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), le(t.u) || (t.S = rd(t.u)), [Object.keys(t).reduce((r, a) => {
    const o = e(a);
    return o && (r[o] = t[a]), r;
  }, {}), n, s];
}
let Kl = null;
function E4() {
  return Kl || (Kl = qe.fromMillis(1555555555555)), Kl;
}
function F4(t, e) {
  if (t.literal)
    return t;
  const n = an.macroTokenToFormatOpts(t.val), s = H1(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function R1(t, e) {
  return Array.prototype.concat(...t.map((n) => F4(n, e)));
}
let P1 = class {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = R1(an.parseFormat(n), e), this.units = this.tokens.map((s) => T4(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = I4(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = M4(e, this.regex, this.handlers), [i, r, a] = s ? C4(s) : [null, null, void 0];
      if (_i(s, "a") && _i(s, "H"))
        throw new ki(
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
function W1(t, e, n) {
  return new P1(t, n).explainFromTokens(e);
}
function O4(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = W1(t, e, n);
  return [s, i, r, a];
}
function H1(t, e) {
  if (!t)
    return null;
  const s = an.create(e, t).dtFormatter(E4()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => $4(a, t, r));
}
const Ql = "Invalid DateTime", Gf = 864e13;
function vr(t) {
  return new on("unsupported zone", `the zone "${t.name}" is not supported`);
}
function eu(t) {
  return t.weekData === null && (t.weekData = ho(t.c)), t.weekData;
}
function tu(t) {
  return t.localWeekData === null && (t.localWeekData = ho(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function zs(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new qe({ ...n, ...e, old: n });
}
function U1(t, e, n) {
  let s = t - e * 60 * 1e3;
  const i = n.offset(s);
  if (e === i)
    return [s, e];
  s -= (i - e) * 60 * 1e3;
  const r = n.offset(s);
  return i === r ? [s, i] : [t - Math.min(i, r) * 60 * 1e3, Math.max(i, r)];
}
function Ia(t, e) {
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
function qa(t, e, n) {
  return U1(Jo(t), e, n);
}
function Yf(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, mo(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = Tt.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = Jo(r);
  let [l, u] = U1(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function hi(t, e, n, s, i, r) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = qe.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: r
    });
    return a ? u : u.setZone(o);
  } else
    return qe.invalid(
      new on("unparsable", `the input "${i}" can't be parsed as ${s}`)
    );
}
function Ma(t, e, n = !0) {
  return t.isValid ? an.create(Re.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function nu(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += tt(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += tt(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += tt(t.c.month), n === "month") return i;
  return i += tt(t.c.day), i;
}
function Jf(t, e, n, s, i, r, a) {
  let o = !n || t.c.millisecond !== 0 || t.c.second !== 0, l = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (l += tt(t.c.hour), a === "hour") break;
      if (e) {
        if (l += ":", l += tt(t.c.minute), a === "minute") break;
        o && (l += ":", l += tt(t.c.second));
      } else {
        if (l += tt(t.c.minute), a === "minute") break;
        o && (l += tt(t.c.second));
      }
      if (a === "second") break;
      o && (!s || t.c.millisecond !== 0) && (l += ".", l += tt(t.c.millisecond, 3));
  }
  return i && (t.isOffsetFixed && t.offset === 0 && !r ? l += "Z" : t.o < 0 ? (l += "-", l += tt(Math.trunc(-t.o / 60)), l += ":", l += tt(Math.trunc(-t.o % 60))) : (l += "+", l += tt(Math.trunc(t.o / 60)), l += ":", l += tt(Math.trunc(t.o % 60)))), r && (l += "[" + t.zone.ianaName + "]"), l;
}
const q1 = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, D4 = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, A4 = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Za = ["year", "month", "day", "hour", "minute", "second", "millisecond"], L4 = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], N4 = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function ja(t) {
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
  if (!e) throw new H0(t);
  return e;
}
function Xf(t) {
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
      return ja(t);
  }
}
function V4(t) {
  if (br === void 0 && (br = Ye.now()), t.type !== "iana")
    return t.offset(br);
  const e = t.name;
  let n = lc.get(e);
  return n === void 0 && (n = t.offset(br), lc.set(e, n)), n;
}
function Kf(t, e) {
  const n = vs(e.zone, Ye.defaultZone);
  if (!n.isValid)
    return qe.invalid(vr(n));
  const s = Re.fromObject(e);
  let i, r;
  if (le(t.year))
    i = Ye.now();
  else {
    for (const l of Za)
      le(t[l]) && (t[l] = q1[l]);
    const a = y1(t) || v1(t);
    if (a)
      return qe.invalid(a);
    const o = V4(n);
    [i, r] = qa(t, o, n);
  }
  return new qe({ ts: i, zone: n, loc: s, o: r });
}
function Qf(t, e, n) {
  const s = le(n.round) ? !0 : n.round, i = le(n.rounding) ? "trunc" : n.rounding, r = (o, l) => (o = ad(o, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(o, l)), a = (o) => n.calendary ? e.hasSame(t, o) ? 0 : e.startOf(o).diff(t.startOf(o), o).get(o) : e.diff(t, o).get(o);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const o of n.units) {
    const l = a(o);
    if (Math.abs(l) >= 1)
      return r(l, o);
  }
  return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function eh(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let br;
const lc = /* @__PURE__ */ new Map();
let qe = class We {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || Ye.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new on("invalid input") : null) || (n.isValid ? null : vr(n));
    this.ts = le(e.ts) ? Ye.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const o = xs(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Ia(this.ts, o), s = Number.isNaN(i.year) ? new on("invalid input") : null, i = s ? null : i, r = s ? null : o;
      }
    this._zone = n, this.loc = e.loc || Re.create(), this.invalid = s, this.weekData = null, this.localWeekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0;
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
    return new We({});
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
    const [e, n] = eh(arguments), [s, i, r, a, o, l, u] = n;
    return Kf({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
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
    const [e, n] = eh(arguments), [s, i, r, a, o, l, u] = n;
    return e.zone = Cn.utcInstance, Kf({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = mv(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return We.invalid("invalid input");
    const i = vs(n.zone, Ye.defaultZone);
    return i.isValid ? new We({
      ts: s,
      zone: i,
      loc: Re.fromObject(n)
    }) : We.invalid(vr(i));
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
    if (xs(e))
      return e < -Gf || e > Gf ? We.invalid("Timestamp out of range") : new We({
        ts: e,
        zone: vs(n.zone, Ye.defaultZone),
        loc: Re.fromObject(n)
      });
    throw new kt(
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
    if (xs(e))
      return new We({
        ts: e * 1e3,
        zone: vs(n.zone, Ye.defaultZone),
        loc: Re.fromObject(n)
      });
    throw new kt("fromSeconds requires a numerical input");
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
    const s = vs(n.zone, Ye.defaultZone);
    if (!s.isValid)
      return We.invalid(vr(s));
    const i = Re.fromObject(n), r = po(e, Xf), { minDaysInFirstWeek: a, startOfWeek: o } = Bf(r, i), l = Ye.now(), u = le(n.specificOffset) ? s.offset(l) : n.specificOffset, c = !le(r.ordinal), f = !le(r.year), m = !le(r.month) || !le(r.day), h = f || m, p = r.weekYear || r.weekNumber;
    if ((h || c) && p)
      throw new ki(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && c)
      throw new ki("Can't mix ordinal dates with month/day");
    const b = p || r.weekday && !h;
    let S, k, F = Ia(l, u);
    b ? (S = L4, k = D4, F = ho(F, a, o)) : c ? (S = N4, k = A4, F = Xl(F)) : (S = Za, k = q1);
    let T = !1;
    for (const B of S) {
      const _ = r[B];
      le(_) ? T ? r[B] = k[B] : r[B] = F[B] : T = !0;
    }
    const O = b ? dv(r, a, o) : c ? fv(r) : y1(r), I = O || v1(r);
    if (I)
      return We.invalid(I);
    const N = b ? Nf(r, a, o) : c ? Vf(r) : r, [Z, w] = qa(N, u, s), x = new We({
      ts: Z,
      zone: s,
      o: w,
      loc: i
    });
    return r.weekday && h && e.weekday !== x.weekday ? We.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${x.toISO()}`
    ) : x.isValid ? x : We.invalid(x.invalid);
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
    const [s, i] = s4(e);
    return hi(s, i, n, "ISO 8601", e);
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
    const [s, i] = i4(e);
    return hi(s, i, n, "RFC 2822", e);
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
    const [s, i] = r4(e);
    return hi(s, i, n, "HTTP", n);
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
    if (le(e) || le(n))
      throw new kt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: r = null } = s, a = Re.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [o, l, u, c] = O4(a, e, n);
    return c ? We.invalid(c) : hi(o, l, s, `format ${n}`, e, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, s = {}) {
    return We.fromFormat(e, n, s);
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
    const [s, i] = f4(e);
    return hi(s, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new kt("need to specify a reason the DateTime is invalid");
    const s = e instanceof on ? e : new on(e, n);
    if (Ye.throwOnInvalid)
      throw new z2(s);
    return new We({ invalid: s });
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
    const s = H1(e, Re.fromObject(n));
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
    return R1(an.parseFormat(e), Re.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    br = void 0, lc.clear();
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
    return this.isValid ? eu(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? eu(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? eu(this).weekday : NaN;
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
    return this.isValid ? tu(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? tu(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? tu(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Xl(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Sa.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Sa.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Sa.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Sa.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, s = Jo(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), o = this.zone.offset(s - r * n);
    if (a === o)
      return [this];
    const l = s - a * n, u = s - o * n, c = Ia(l, a), f = Ia(u, o);
    return c.hour === f.hour && c.minute === f.minute && c.second === f.second && c.millisecond === f.millisecond ? [zs(this, { ts: l }), zs(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return ea(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return mo(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Ci(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ur(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Ur(
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
    const { locale: n, numberingSystem: s, calendar: i } = an.create(
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
    return this.setZone(Cn.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Ye.defaultZone);
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
    if (e = vs(e, Ye.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || s) {
        const r = e.offset(this.ts), a = this.toObject();
        [i] = qa(a, r, e);
      }
      return zs(this, { ts: i, zone: e });
    } else
      return We.invalid(vr(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: s } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: s });
    return zs(this, { loc: i });
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
    const n = po(e, Xf), { minDaysInFirstWeek: s, startOfWeek: i } = Bf(n, this.loc), r = !le(n.weekYear) || !le(n.weekNumber) || !le(n.weekday), a = !le(n.ordinal), o = !le(n.year), l = !le(n.month) || !le(n.day), u = o || l, c = n.weekYear || n.weekNumber;
    if ((u || a) && c)
      throw new ki(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new ki("Can't mix ordinal dates with month/day");
    let f;
    r ? f = Nf(
      { ...ho(this.c, s, i), ...n },
      s,
      i
    ) : le(n.ordinal) ? (f = { ...this.toObject(), ...n }, le(n.day) && (f.day = Math.min(mo(f.year, f.month), f.day))) : f = Vf({ ...Xl(this.c), ...n });
    const [m, h] = qa(f, this.o, this.zone);
    return zs(this, { ts: m, o: h });
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
    const n = Tt.fromDurationLike(e);
    return zs(this, Yf(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = Tt.fromDurationLike(e).negate();
    return zs(this, Yf(this, n));
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
    const s = {}, i = Tt.normalizeUnit(e);
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
    return this.isValid ? an.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ql;
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
  toLocaleString(e = fo, n = {}) {
    return this.isValid ? an.create(this.loc.clone(n), e).formatDateTime(this) : Ql;
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
    return this.isValid ? an.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    a = ja(a);
    const o = e === "extended";
    let l = nu(this, o, a);
    return Za.indexOf(a) >= 3 && (l += "T"), l += Jf(
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
    return this.isValid ? nu(this, e === "extended", ja(n)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Ma(this, "kkkk-'W'WW-c");
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
    return this.isValid ? (o = ja(o), (i && Za.indexOf(o) >= 3 ? "T" : "") + Jf(
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
    return Ma(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Ma(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? nu(this, !0) : null;
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
    return (n || e) && (s && (i += " "), n ? i += "z" : e && (i += "ZZ")), Ma(this, i, !0);
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
    return this.isValid ? this.toISO() : Ql;
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
      return Tt.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = pv(n).map(Tt.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = v4(o, l, r, i);
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
    return this.diff(We.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? Ua.fromDateTimes(this, e) : this;
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
    const n = e.base || We.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, r = void 0), Qf(n, this.plus(s), {
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
    return this.isValid ? Qf(e.base || We.fromObject({}, { zone: this.zone }), this, {
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
    if (!e.every(We.isDateTime))
      throw new kt("min requires all arguments be DateTimes");
    return _f(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(We.isDateTime))
      throw new kt("max requires all arguments be DateTimes");
    return _f(e, (n) => n.valueOf(), Math.max);
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
    const { locale: i = null, numberingSystem: r = null } = s, a = Re.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    return W1(a, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, s = {}) {
    return We.fromFormatExplain(e, n, s);
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
    const { locale: s = null, numberingSystem: i = null } = n, r = Re.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new P1(r, e);
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
    if (le(e) || le(n))
      throw new kt(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: r = null } = s, a = Re.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new kt(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: o, zone: l, specificOffset: u, invalidReason: c } = n.explainFromTokens(e);
    return c ? We.invalid(c) : hi(
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
    return fo;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return U0;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return W2;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return q0;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Z0;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return j0;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return G0;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Y0;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return J0;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return X0;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return K0;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Q0;
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
    return H2;
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
};
function lr(t) {
  if (qe.isDateTime(t))
    return t;
  if (t && t.valueOf && xs(t.valueOf()))
    return qe.fromJSDate(t);
  if (t && typeof t == "object")
    return qe.fromObject(t);
  throw new kt(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
function B4(t) {
  let e = {};
  do {
    if (t.name === "") break;
    for (let [n, s] of Object.entries(Object.getOwnPropertyDescriptors(t.prototype))) ["constructor", "clone", "toJSON"].includes(n) || !s.get && !s.set || (e[n] = s);
  } while (t = Object.getPrototypeOf(t));
  return e;
}
function zi(t) {
  return globalThis.document ? t instanceof HTMLElement : !1;
}
function su(t, e, n) {
  t.prototype[e] = n;
}
function Ca(t, e, n) {
  Object.defineProperty(t, e, { value: n });
}
function _4(t, e, n, s) {
  const i = $e(() => {
    const o = d(t);
    return Array.isArray(o) ? o : [o];
  }), r = $e(() => {
    const o = [], l = d(s)?.trim().toLowerCase(), u = d(n).filter((c) => kr(c) || !l || c.label.toLowerCase().includes(l)).filter((c) => kr(c) || !e || !d(a).find((f) => f.value === c.value));
    if (u.length === 0)
      return [];
    if (!u.find(kr))
      return [[null, u]];
    for (let c = 0; c < u.length; ) {
      const f = u[c];
      if (Ar(f)) {
        ++c, o.push([null, [f]]);
        continue;
      }
      const m = [];
      for (++c; c <= u.length; ++c) {
        const h = u[c];
        if (kr(h) || c === u.length) {
          m.length > 0 && o.push([f, m]);
          break;
        }
        m.push(h);
      }
    }
    return o;
  }), a = $e(() => d(i).map((o) => d(n).find((l) => Ar(l) && l.value === o)).filter(Ar));
  return {
    groups: r,
    selected: a,
    values: i
  };
}
const z4 = (t, e) => {
  if (!(t in Dh))
    return t;
  let n = Dh[t];
  for (let s in e)
    n = n.replaceAll(`{${s}}`, e[s].toString());
  return n;
};
var sa = () => {
  const t = Dn()?.proxy;
  return !t || !R4(t) ? z4 : t.$t;
};
function R4(t) {
  return !!t && "$t" in t;
}
const Z1 = (t, e) => {
  if (typeof t == "number") {
    if (e === 3)
      return {
        mode: "rgb",
        r: (t >> 8 & 15 | t >> 4 & 240) / 255,
        g: (t >> 4 & 15 | t & 240) / 255,
        b: (t & 15 | t << 4 & 240) / 255
      };
    if (e === 4)
      return {
        mode: "rgb",
        r: (t >> 12 & 15 | t >> 8 & 240) / 255,
        g: (t >> 8 & 15 | t >> 4 & 240) / 255,
        b: (t >> 4 & 15 | t & 240) / 255,
        alpha: (t & 15 | t << 4 & 240) / 255
      };
    if (e === 6)
      return {
        mode: "rgb",
        r: (t >> 16 & 255) / 255,
        g: (t >> 8 & 255) / 255,
        b: (t & 255) / 255
      };
    if (e === 8)
      return {
        mode: "rgb",
        r: (t >> 24 & 255) / 255,
        g: (t >> 16 & 255) / 255,
        b: (t >> 8 & 255) / 255,
        alpha: (t & 255) / 255
      };
  }
}, P4 = {
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
}, W4 = (t) => Z1(P4[t.toLowerCase()], 6), H4 = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, U4 = (t) => {
  let e;
  return (e = t.match(H4)) ? Z1(parseInt(e[1], 16), e[1].length) : void 0;
}, Ts = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", Dr = `${Ts}%`, cd = `(?:${Ts}%|${Ts})`, q4 = `(?:${Ts}(deg|grad|rad|turn)|${Ts})`, Ri = "\\s*,\\s*", Z4 = new RegExp(
  `^rgba?\\(\\s*${Ts}${Ri}${Ts}${Ri}${Ts}\\s*(?:,\\s*${cd}\\s*)?\\)$`
), j4 = new RegExp(
  `^rgba?\\(\\s*${Dr}${Ri}${Dr}${Ri}${Dr}\\s*(?:,\\s*${cd}\\s*)?\\)$`
), G4 = (t) => {
  let e = { mode: "rgb" }, n;
  if (n = t.match(Z4))
    n[1] !== void 0 && (e.r = n[1] / 255), n[2] !== void 0 && (e.g = n[2] / 255), n[3] !== void 0 && (e.b = n[3] / 255);
  else if (n = t.match(j4))
    n[1] !== void 0 && (e.r = n[1] / 100), n[2] !== void 0 && (e.g = n[2] / 100), n[3] !== void 0 && (e.b = n[3] / 100);
  else
    return;
  return n[4] !== void 0 ? e.alpha = Math.max(0, Math.min(1, n[4] / 100)) : n[5] !== void 0 && (e.alpha = Math.max(0, Math.min(1, +n[5]))), e;
}, Y4 = (t, e) => t === void 0 ? void 0 : typeof t != "object" ? ab(t) : t.mode !== void 0 ? t : e ? { ...t, mode: e } : void 0, J4 = (t = "rgb") => (e) => (e = Y4(e, t)) !== void 0 ? (
  // if the color's mode corresponds to our target mode
  e.mode === t ? (
    // then just return the color
    e
  ) : (
    // otherwise check to see if we have a dedicated
    // converter for the target mode
    $n[e.mode][t] ? (
      // and return its result...
      $n[e.mode][t](e)
    ) : (
      // ...otherwise pass through RGB as an intermediary step.
      // if the target mode is RGB...
      t === "rgb" ? (
        // just return the RGB
        $n[e.mode].rgb(e)
      ) : (
        // otherwise convert color.mode -> RGB -> target_mode
        $n.rgb[t]($n[e.mode].rgb(e))
      )
    )
  )
) : void 0, $n = {}, j1 = {}, go = [], G1 = {}, X4 = (t) => t, Ne = (t) => ($n[t.mode] = {
  ...$n[t.mode],
  ...t.toMode
}, Object.keys(t.fromMode || {}).forEach((e) => {
  $n[e] || ($n[e] = {}), $n[e][t.mode] = t.fromMode[e];
}), t.ranges || (t.ranges = {}), t.difference || (t.difference = {}), t.channels.forEach((e) => {
  if (t.ranges[e] === void 0 && (t.ranges[e] = [0, 1]), !t.interpolate[e])
    throw new Error(`Missing interpolator for: ${e}`);
  typeof t.interpolate[e] == "function" && (t.interpolate[e] = {
    use: t.interpolate[e]
  }), t.interpolate[e].fixup || (t.interpolate[e].fixup = X4);
}), j1[t.mode] = t, (t.parse || []).forEach((e) => {
  Q4(e, t.mode);
}), J4(t.mode)), K4 = (t) => j1[t], Q4 = (t, e) => {
  if (typeof t == "string") {
    if (!e)
      throw new Error("'mode' required when 'parser' is a string");
    G1[t] = e;
  } else typeof t == "function" && go.indexOf(t) < 0 && go.push(t);
}, uc = /[^\x00-\x7F]|[a-zA-Z_]/, eb = /[^\x00-\x7F]|[-\w]/, U = {
  Function: "function",
  Ident: "ident",
  Number: "number",
  Percentage: "percentage",
  ParenClose: ")",
  None: "none",
  Hue: "hue",
  Alpha: "alpha"
};
let ae = 0;
function Ea(t) {
  let e = t[ae], n = t[ae + 1];
  return e === "-" || e === "+" ? /\d/.test(n) || n === "." && /\d/.test(t[ae + 2]) : e === "." ? /\d/.test(n) : /\d/.test(e);
}
function cc(t) {
  if (ae >= t.length)
    return !1;
  let e = t[ae];
  if (uc.test(e))
    return !0;
  if (e === "-") {
    if (t.length - ae < 2)
      return !1;
    let n = t[ae + 1];
    return !!(n === "-" || uc.test(n));
  }
  return !1;
}
const tb = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360
};
function ur(t) {
  let e = "";
  if ((t[ae] === "-" || t[ae] === "+") && (e += t[ae++]), e += Fa(t), t[ae] === "." && /\d/.test(t[ae + 1]) && (e += t[ae++] + Fa(t)), (t[ae] === "e" || t[ae] === "E") && ((t[ae + 1] === "-" || t[ae + 1] === "+") && /\d/.test(t[ae + 2]) ? e += t[ae++] + t[ae++] + Fa(t) : /\d/.test(t[ae + 1]) && (e += t[ae++] + Fa(t))), cc(t)) {
    let n = yo(t);
    return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? { type: U.Hue, value: e * tb[n] } : void 0;
  }
  return t[ae] === "%" ? (ae++, { type: U.Percentage, value: +e }) : { type: U.Number, value: +e };
}
function Fa(t) {
  let e = "";
  for (; /\d/.test(t[ae]); )
    e += t[ae++];
  return e;
}
function yo(t) {
  let e = "";
  for (; ae < t.length && eb.test(t[ae]); )
    e += t[ae++];
  return e;
}
function nb(t) {
  let e = yo(t);
  return t[ae] === "(" ? (ae++, { type: U.Function, value: e }) : e === "none" ? { type: U.None, value: void 0 } : { type: U.Ident, value: e };
}
function sb(t = "") {
  let e = t.trim(), n = [], s;
  for (ae = 0; ae < e.length; ) {
    if (s = e[ae++], s === `
` || s === "	" || s === " ") {
      for (; ae < e.length && (e[ae] === `
` || e[ae] === "	" || e[ae] === " "); )
        ae++;
      continue;
    }
    if (s === ",")
      return;
    if (s === ")") {
      n.push({ type: U.ParenClose });
      continue;
    }
    if (s === "+") {
      if (ae--, Ea(e)) {
        n.push(ur(e));
        continue;
      }
      return;
    }
    if (s === "-") {
      if (ae--, Ea(e)) {
        n.push(ur(e));
        continue;
      }
      if (cc(e)) {
        n.push({ type: U.Ident, value: yo(e) });
        continue;
      }
      return;
    }
    if (s === ".") {
      if (ae--, Ea(e)) {
        n.push(ur(e));
        continue;
      }
      return;
    }
    if (s === "/") {
      for (; ae < e.length && (e[ae] === `
` || e[ae] === "	" || e[ae] === " "); )
        ae++;
      let i;
      if (Ea(e) && (i = ur(e), i.type !== U.Hue)) {
        n.push({ type: U.Alpha, value: i });
        continue;
      }
      if (cc(e) && yo(e) === "none") {
        n.push({
          type: U.Alpha,
          value: { type: U.None, value: void 0 }
        });
        continue;
      }
      return;
    }
    if (/\d/.test(s)) {
      ae--, n.push(ur(e));
      continue;
    }
    if (uc.test(s)) {
      ae--, n.push(nb(e));
      continue;
    }
    return;
  }
  return n;
}
function ib(t) {
  t._i = 0;
  let e = t[t._i++];
  if (!e || e.type !== U.Function || e.value !== "color" || (e = t[t._i++], e.type !== U.Ident))
    return;
  const n = G1[e.value];
  if (!n)
    return;
  const s = { mode: n }, i = Y1(t, !1);
  if (!i)
    return;
  const r = K4(n).channels;
  for (let a = 0, o, l; a < r.length; a++)
    o = i[a], l = r[a], o.type !== U.None && (s[l] = o.type === U.Number ? o.value : o.value / 100, l === "alpha" && (s[l] = Math.max(0, Math.min(1, s[l]))));
  return s;
}
function Y1(t, e) {
  const n = [];
  let s;
  for (; t._i < t.length; ) {
    if (s = t[t._i++], s.type === U.None || s.type === U.Number || s.type === U.Alpha || s.type === U.Percentage || e && s.type === U.Hue) {
      n.push(s);
      continue;
    }
    if (s.type === U.ParenClose) {
      if (t._i < t.length)
        return;
      continue;
    }
    return;
  }
  if (!(n.length < 3 || n.length > 4)) {
    if (n.length === 4) {
      if (n[3].type !== U.Alpha)
        return;
      n[3] = n[3].value;
    }
    return n.length === 3 && n.push({ type: U.None, value: void 0 }), n.every((i) => i.type !== U.Alpha) ? n : void 0;
  }
}
function rb(t, e) {
  t._i = 0;
  let n = t[t._i++];
  if (!n || n.type !== U.Function)
    return;
  let s = Y1(t, e);
  if (s)
    return s.unshift(n.value), s;
}
const ab = (t) => {
  if (typeof t != "string")
    return;
  const e = sb(t), n = e ? rb(e, !0) : void 0;
  let s, i = 0, r = go.length;
  for (; i < r; )
    if ((s = go[i++](t, n)) !== void 0)
      return s;
  return e ? ib(e) : void 0;
};
function ob(t, e) {
  if (!e || e[0] !== "rgb" && e[0] !== "rgba")
    return;
  const n = { mode: "rgb" }, [, s, i, r, a] = e;
  if (!(s.type === U.Hue || i.type === U.Hue || r.type === U.Hue))
    return s.type !== U.None && (n.r = s.type === U.Number ? s.value / 255 : s.value / 100), i.type !== U.None && (n.g = i.type === U.Number ? i.value / 255 : i.value / 100), r.type !== U.None && (n.b = r.type === U.Number ? r.value / 255 : r.value / 100), a.type !== U.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        a.type === U.Number ? a.value : a.value / 100
      )
    )), n;
}
const lb = (t) => t === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, ub = (t, e, n) => t + n * (e - t), cb = (t) => {
  let e = [];
  for (let n = 0; n < t.length - 1; n++) {
    let s = t[n], i = t[n + 1];
    s === void 0 && i === void 0 ? e.push(void 0) : s !== void 0 && i !== void 0 ? e.push([s, i]) : e.push(s !== void 0 ? [s, s] : [i, i]);
  }
  return e;
}, db = (t) => (e) => {
  let n = cb(e);
  return (s) => {
    let i = s * n.length, r = s >= 1 ? n.length - 1 : Math.max(Math.floor(i), 0), a = n[r];
    return a === void 0 ? void 0 : t(a[0], a[1], i - r);
  };
}, Y = db(ub), at = (t) => {
  let e = !1, n = t.map((s) => s !== void 0 ? (e = !0, s) : 1);
  return e ? n : t;
}, Yi = {
  mode: "rgb",
  channels: ["r", "g", "b", "alpha"],
  parse: [
    ob,
    U4,
    G4,
    W4,
    lb,
    "srgb"
  ],
  serialize: "srgb",
  interpolate: {
    r: Y,
    g: Y,
    b: Y,
    alpha: { use: Y, fixup: at }
  },
  gamut: !0,
  white: { r: 1, g: 1, b: 1 },
  black: { r: 0, g: 0, b: 0 }
}, iu = (t = 0) => Math.pow(Math.abs(t), 563 / 256) * Math.sign(t), th = (t) => {
  let e = iu(t.r), n = iu(t.g), s = iu(t.b), i = {
    mode: "xyz65",
    x: 0.5766690429101305 * e + 0.1855582379065463 * n + 0.1882286462349947 * s,
    y: 0.297344975250536 * e + 0.6273635662554661 * n + 0.0752914584939979 * s,
    z: 0.0270313613864123 * e + 0.0706888525358272 * n + 0.9913375368376386 * s
  };
  return t.alpha !== void 0 && (i.alpha = t.alpha), i;
}, ru = (t) => Math.pow(Math.abs(t), 256 / 563) * Math.sign(t), nh = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = {
    mode: "a98",
    r: ru(
      t * 2.0415879038107465 - e * 0.5650069742788597 - 0.3447313507783297 * n
    ),
    g: ru(
      t * -0.9692436362808798 + e * 1.8759675015077206 + 0.0415550574071756 * n
    ),
    b: ru(
      t * 0.0134442806320312 - e * 0.1183623922310184 + 1.0151749943912058 * n
    )
  };
  return s !== void 0 && (i.alpha = s), i;
}, au = (t = 0) => {
  const e = Math.abs(t);
  return e <= 0.04045 ? t / 12.92 : (Math.sign(t) || 1) * Math.pow((e + 0.055) / 1.055, 2.4);
}, Ji = ({ r: t, g: e, b: n, alpha: s }) => {
  let i = {
    mode: "lrgb",
    r: au(t),
    g: au(e),
    b: au(n)
  };
  return s !== void 0 && (i.alpha = s), i;
}, ii = (t) => {
  let { r: e, g: n, b: s, alpha: i } = Ji(t), r = {
    mode: "xyz65",
    x: 0.4123907992659593 * e + 0.357584339383878 * n + 0.1804807884018343 * s,
    y: 0.2126390058715102 * e + 0.715168678767756 * n + 0.0721923153607337 * s,
    z: 0.0193308187155918 * e + 0.119194779794626 * n + 0.9505321522496607 * s
  };
  return i !== void 0 && (r.alpha = i), r;
}, ou = (t = 0) => {
  const e = Math.abs(t);
  return e > 31308e-7 ? (Math.sign(t) || 1) * (1.055 * Math.pow(e, 1 / 2.4) - 0.055) : t * 12.92;
}, Xi = ({ r: t, g: e, b: n, alpha: s }, i = "rgb") => {
  let r = {
    mode: i,
    r: ou(t),
    g: ou(e),
    b: ou(n)
  };
  return s !== void 0 && (r.alpha = s), r;
}, ri = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Xi({
    r: t * 3.2409699419045226 - e * 1.537383177570094 - 0.4986107602930034 * n,
    g: t * -0.9692436362808796 + e * 1.8759675015077204 + 0.0415550574071756 * n,
    b: t * 0.0556300796969936 - e * 0.2039769588889765 + 1.0569715142428784 * n
  });
  return s !== void 0 && (i.alpha = s), i;
}, fb = {
  ...Yi,
  mode: "a98",
  parse: ["a98-rgb"],
  serialize: "a98-rgb",
  fromMode: {
    rgb: (t) => nh(ii(t)),
    xyz65: nh
  },
  toMode: {
    rgb: (t) => ri(th(t)),
    xyz65: th
  }
}, vt = (t) => (t = t % 360) < 0 ? t + 360 : t, hb = (t, e) => t.map((n, s, i) => {
  if (n === void 0)
    return n;
  let r = vt(n);
  return s === 0 || t[s - 1] === void 0 ? r : e(r - vt(i[s - 1]));
}).reduce((n, s) => !n.length || s === void 0 || n[n.length - 1] === void 0 ? (n.push(s), n) : (n.push(s + n[n.length - 1]), n), []), ts = (t) => hb(t, (e) => Math.abs(e) <= 180 ? e : e - 360 * Math.sign(e)), ut = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], mb = Math.PI / 180, pb = 180 / Math.PI;
let sh = ut[3] * ut[4], ih = ut[1] * ut[4], rh = ut[1] * ut[2] - ut[0] * ut[3];
const gb = ({ r: t, g: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = (rh * n + t * sh - e * ih) / (rh + sh - ih), r = n - i, a = (ut[4] * (e - i) - ut[2] * r) / ut[3], o = {
    mode: "cubehelix",
    l: i,
    s: i === 0 || i === 1 ? void 0 : Math.sqrt(r * r + a * a) / (ut[4] * i * (1 - i))
  };
  return o.s && (o.h = Math.atan2(a, r) * pb - 120), s !== void 0 && (o.alpha = s), o;
}, yb = ({ h: t, s: e, l: n, alpha: s }) => {
  let i = { mode: "rgb" };
  t = (t === void 0 ? 0 : t + 120) * mb, n === void 0 && (n = 0);
  let r = e === void 0 ? 0 : e * n * (1 - n), a = Math.cos(t), o = Math.sin(t);
  return i.r = n + r * (ut[0] * a + ut[1] * o), i.g = n + r * (ut[2] * a + ut[3] * o), i.b = n + r * (ut[4] * a + ut[5] * o), s !== void 0 && (i.alpha = s), i;
}, Qo = (t, e) => {
  if (t.h === void 0 || e.h === void 0 || !t.s || !e.s)
    return 0;
  let n = vt(t.h), s = vt(e.h), i = Math.sin((s - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(t.s * e.s) * i;
}, vb = (t, e) => {
  if (t.h === void 0 || e.h === void 0)
    return 0;
  let n = vt(t.h), s = vt(e.h);
  return Math.abs(s - n) > 180 ? n - (s - 360 * Math.sign(s - n)) : s - n;
}, el = (t, e) => {
  if (t.h === void 0 || e.h === void 0 || !t.c || !e.c)
    return 0;
  let n = vt(t.h), s = vt(e.h), i = Math.sin((s - n + 360) / 2 * Math.PI / 180);
  return 2 * Math.sqrt(t.c * e.c) * i;
}, ns = (t) => {
  let e = t.reduce(
    (s, i) => {
      if (i !== void 0) {
        let r = i * Math.PI / 180;
        s.sin += Math.sin(r), s.cos += Math.cos(r);
      }
      return s;
    },
    { sin: 0, cos: 0 }
  ), n = Math.atan2(e.sin, e.cos) * 180 / Math.PI;
  return n < 0 ? 360 + n : n;
}, bb = {
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
    rgb: gb
  },
  toMode: {
    rgb: yb
  },
  interpolate: {
    h: {
      use: Y,
      fixup: ts
    },
    s: Y,
    l: Y,
    alpha: {
      use: Y,
      fixup: at
    }
  },
  difference: {
    h: Qo
  },
  average: {
    h: ns
  }
}, Es = ({ l: t, a: e, b: n, alpha: s }, i = "lch") => {
  e === void 0 && (e = 0), n === void 0 && (n = 0);
  let r = Math.sqrt(e * e + n * n), a = { mode: i, l: t, c: r };
  return r && (a.h = vt(Math.atan2(n, e) * 180 / Math.PI)), s !== void 0 && (a.alpha = s), a;
}, Fs = ({ l: t, c: e, h: n, alpha: s }, i = "lab") => {
  n === void 0 && (n = 0);
  let r = {
    mode: i,
    l: t,
    a: e ? e * Math.cos(n / 180 * Math.PI) : 0,
    b: e ? e * Math.sin(n / 180 * Math.PI) : 0
  };
  return s !== void 0 && (r.alpha = s), r;
}, J1 = Math.pow(29, 3) / Math.pow(3, 3), X1 = Math.pow(6, 3) / Math.pow(29, 3), it = {
  X: 0.3457 / 0.3585,
  Y: 1,
  Z: (1 - 0.3457 - 0.3585) / 0.3585
}, Fi = {
  X: 0.3127 / 0.329,
  Y: 1,
  Z: (1 - 0.3127 - 0.329) / 0.329
};
let lu = (t) => Math.pow(t, 3) > X1 ? Math.pow(t, 3) : (116 * t - 16) / J1;
const K1 = ({ l: t, a: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = (t + 16) / 116, r = e / 500 + i, a = i - n / 200, o = {
    mode: "xyz65",
    x: lu(r) * Fi.X,
    y: lu(i) * Fi.Y,
    z: lu(a) * Fi.Z
  };
  return s !== void 0 && (o.alpha = s), o;
}, tl = (t) => ri(K1(t)), uu = (t) => t > X1 ? Math.cbrt(t) : (J1 * t + 16) / 116, Q1 = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = uu(t / Fi.X), r = uu(e / Fi.Y), a = uu(n / Fi.Z), o = {
    mode: "lab65",
    l: 116 * r - 16,
    a: 500 * (i - r),
    b: 200 * (r - a)
  };
  return s !== void 0 && (o.alpha = s), o;
}, nl = (t) => {
  let e = Q1(ii(t));
  return t.r === t.b && t.b === t.g && (e.a = e.b = 0), e;
}, vo = 1, ep = 1, qr = 26 / 180 * Math.PI, bo = Math.cos(qr), ko = Math.sin(qr), tp = 100 / Math.log(139 / 100), dc = ({ l: t, c: e, h: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = {
    mode: "lab65",
    l: (Math.exp(t * vo / tp) - 1) / 39e-4
  }, r = (Math.exp(0.0435 * e * ep * vo) - 1) / 0.075, a = r * Math.cos(n / 180 * Math.PI - qr), o = r * Math.sin(n / 180 * Math.PI - qr);
  return i.a = a * bo - o / 0.83 * ko, i.b = a * ko + o / 0.83 * bo, s !== void 0 && (i.alpha = s), i;
}, fc = ({ l: t, a: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = e * bo + n * ko, r = 0.83 * (n * bo - e * ko), a = Math.sqrt(i * i + r * r), o = {
    mode: "dlch",
    l: tp / vo * Math.log(1 + 39e-4 * t),
    c: Math.log(1 + 0.075 * a) / (0.0435 * ep * vo)
  };
  return o.c && (o.h = vt((Math.atan2(r, i) + qr) / Math.PI * 180)), s !== void 0 && (o.alpha = s), o;
}, ah = (t) => dc(Es(t, "dlch")), oh = (t) => Fs(fc(t), "dlab"), kb = {
  mode: "dlab",
  parse: ["--din99o-lab"],
  serialize: "--din99o-lab",
  toMode: {
    lab65: ah,
    rgb: (t) => tl(ah(t))
  },
  fromMode: {
    lab65: oh,
    rgb: (t) => oh(nl(t))
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-40.09, 45.501],
    b: [-40.469, 44.344]
  },
  interpolate: {
    l: Y,
    a: Y,
    b: Y,
    alpha: {
      use: Y,
      fixup: at
    }
  }
}, wb = {
  mode: "dlch",
  parse: ["--din99o-lch"],
  serialize: "--din99o-lch",
  toMode: {
    lab65: dc,
    dlab: (t) => Fs(t, "dlab"),
    rgb: (t) => tl(dc(t))
  },
  fromMode: {
    lab65: fc,
    dlab: (t) => Es(t, "dlch"),
    rgb: (t) => fc(nl(t))
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 51.484],
    h: [0, 360]
  },
  interpolate: {
    l: Y,
    c: Y,
    h: {
      use: Y,
      fixup: ts
    },
    alpha: {
      use: Y,
      fixup: at
    }
  },
  difference: {
    h: el
  },
  average: {
    h: ns
  }
};
function xb({ h: t, s: e, i: n, alpha: s }) {
  t = vt(t !== void 0 ? t : 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.abs(t / 60 % 2 - 1), r;
  switch (Math.floor(t / 60)) {
    case 0:
      r = {
        r: n * (1 + e * (3 / (2 - i) - 1)),
        g: n * (1 + e * (3 * (1 - i) / (2 - i) - 1)),
        b: n * (1 - e)
      };
      break;
    case 1:
      r = {
        r: n * (1 + e * (3 * (1 - i) / (2 - i) - 1)),
        g: n * (1 + e * (3 / (2 - i) - 1)),
        b: n * (1 - e)
      };
      break;
    case 2:
      r = {
        r: n * (1 - e),
        g: n * (1 + e * (3 / (2 - i) - 1)),
        b: n * (1 + e * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    case 3:
      r = {
        r: n * (1 - e),
        g: n * (1 + e * (3 * (1 - i) / (2 - i) - 1)),
        b: n * (1 + e * (3 / (2 - i) - 1))
      };
      break;
    case 4:
      r = {
        r: n * (1 + e * (3 * (1 - i) / (2 - i) - 1)),
        g: n * (1 - e),
        b: n * (1 + e * (3 / (2 - i) - 1))
      };
      break;
    case 5:
      r = {
        r: n * (1 + e * (3 / (2 - i) - 1)),
        g: n * (1 - e),
        b: n * (1 + e * (3 * (1 - i) / (2 - i) - 1))
      };
      break;
    default:
      r = { r: n * (1 - e), g: n * (1 - e), b: n * (1 - e) };
  }
  return r.mode = "rgb", s !== void 0 && (r.alpha = s), r;
}
function Tb({ r: t, g: e, b: n, alpha: s }) {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.max(t, e, n), r = Math.min(t, e, n), a = {
    mode: "hsi",
    s: t + e + n === 0 ? 0 : 1 - 3 * r / (t + e + n),
    i: (t + e + n) / 3
  };
  return i - r !== 0 && (a.h = (i === t ? (e - n) / (i - r) + (e < n) * 6 : i === e ? (n - t) / (i - r) + 2 : (t - e) / (i - r) + 4) * 60), s !== void 0 && (a.alpha = s), a;
}
const Sb = {
  mode: "hsi",
  toMode: {
    rgb: xb
  },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: {
    rgb: Tb
  },
  channels: ["h", "s", "i", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: Y, fixup: ts },
    s: Y,
    i: Y,
    alpha: { use: Y, fixup: at }
  },
  difference: {
    h: Qo
  },
  average: {
    h: ns
  }
};
function $b({ h: t, s: e, l: n, alpha: s }) {
  t = vt(t !== void 0 ? t : 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = n + e * (n < 0.5 ? n : 1 - n), r = i - (i - n) * 2 * Math.abs(t / 60 % 2 - 1), a;
  switch (Math.floor(t / 60)) {
    case 0:
      a = { r: i, g: r, b: 2 * n - i };
      break;
    case 1:
      a = { r, g: i, b: 2 * n - i };
      break;
    case 2:
      a = { r: 2 * n - i, g: i, b: r };
      break;
    case 3:
      a = { r: 2 * n - i, g: r, b: i };
      break;
    case 4:
      a = { r, g: 2 * n - i, b: i };
      break;
    case 5:
      a = { r: i, g: 2 * n - i, b: r };
      break;
    default:
      a = { r: 2 * n - i, g: 2 * n - i, b: 2 * n - i };
  }
  return a.mode = "rgb", s !== void 0 && (a.alpha = s), a;
}
function Ib({ r: t, g: e, b: n, alpha: s }) {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.max(t, e, n), r = Math.min(t, e, n), a = {
    mode: "hsl",
    s: i === r ? 0 : (i - r) / (1 - Math.abs(i + r - 1)),
    l: 0.5 * (i + r)
  };
  return i - r !== 0 && (a.h = (i === t ? (e - n) / (i - r) + (e < n) * 6 : i === e ? (n - t) / (i - r) + 2 : (t - e) / (i - r) + 4) * 60), s !== void 0 && (a.alpha = s), a;
}
const Mb = (t, e) => {
  switch (e) {
    case "deg":
      return +t;
    case "rad":
      return t / Math.PI * 180;
    case "grad":
      return t / 10 * 9;
    case "turn":
      return t * 360;
  }
}, Cb = new RegExp(
  `^hsla?\\(\\s*${q4}${Ri}${Dr}${Ri}${Dr}\\s*(?:,\\s*${cd}\\s*)?\\)$`
), Eb = (t) => {
  let e = t.match(Cb);
  if (!e) return;
  let n = { mode: "hsl" };
  return e[3] !== void 0 ? n.h = +e[3] : e[1] !== void 0 && e[2] !== void 0 && (n.h = Mb(e[1], e[2])), e[4] !== void 0 && (n.s = Math.min(Math.max(0, e[4] / 100), 1)), e[5] !== void 0 && (n.l = Math.min(Math.max(0, e[5] / 100), 1)), e[6] !== void 0 ? n.alpha = Math.max(0, Math.min(1, e[6] / 100)) : e[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +e[7]))), n;
};
function Fb(t, e) {
  if (!e || e[0] !== "hsl" && e[0] !== "hsla")
    return;
  const n = { mode: "hsl" }, [, s, i, r, a] = e;
  if (s.type !== U.None) {
    if (s.type === U.Percentage)
      return;
    n.h = s.value;
  }
  if (i.type !== U.None) {
    if (i.type === U.Hue)
      return;
    n.s = i.value / 100;
  }
  if (r.type !== U.None) {
    if (r.type === U.Hue)
      return;
    n.l = r.value / 100;
  }
  return a.type !== U.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === U.Number ? a.value : a.value / 100
    )
  )), n;
}
const np = {
  mode: "hsl",
  toMode: {
    rgb: $b
  },
  fromMode: {
    rgb: Ib
  },
  channels: ["h", "s", "l", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Fb, Eb],
  serialize: (t) => `hsl(${t.h !== void 0 ? t.h : "none"} ${t.s !== void 0 ? t.s * 100 + "%" : "none"} ${t.l !== void 0 ? t.l * 100 + "%" : "none"}${t.alpha < 1 ? ` / ${t.alpha}` : ""})`,
  interpolate: {
    h: { use: Y, fixup: ts },
    s: Y,
    l: Y,
    alpha: { use: Y, fixup: at }
  },
  difference: {
    h: Qo
  },
  average: {
    h: ns
  }
};
function sp({ h: t, s: e, v: n, alpha: s }) {
  t = vt(t !== void 0 ? t : 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.abs(t / 60 % 2 - 1), r;
  switch (Math.floor(t / 60)) {
    case 0:
      r = { r: n, g: n * (1 - e * i), b: n * (1 - e) };
      break;
    case 1:
      r = { r: n * (1 - e * i), g: n, b: n * (1 - e) };
      break;
    case 2:
      r = { r: n * (1 - e), g: n, b: n * (1 - e * i) };
      break;
    case 3:
      r = { r: n * (1 - e), g: n * (1 - e * i), b: n };
      break;
    case 4:
      r = { r: n * (1 - e * i), g: n * (1 - e), b: n };
      break;
    case 5:
      r = { r: n, g: n * (1 - e), b: n * (1 - e * i) };
      break;
    default:
      r = { r: n * (1 - e), g: n * (1 - e), b: n * (1 - e) };
  }
  return r.mode = "rgb", s !== void 0 && (r.alpha = s), r;
}
function ip({ r: t, g: e, b: n, alpha: s }) {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.max(t, e, n), r = Math.min(t, e, n), a = {
    mode: "hsv",
    s: i === 0 ? 0 : 1 - r / i,
    v: i
  };
  return i - r !== 0 && (a.h = (i === t ? (e - n) / (i - r) + (e < n) * 6 : i === e ? (n - t) / (i - r) + 2 : (t - e) / (i - r) + 4) * 60), s !== void 0 && (a.alpha = s), a;
}
const rp = {
  mode: "hsv",
  toMode: {
    rgb: sp
  },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: {
    rgb: ip
  },
  channels: ["h", "s", "v", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  interpolate: {
    h: { use: Y, fixup: ts },
    s: Y,
    v: Y,
    alpha: { use: Y, fixup: at }
  },
  difference: {
    h: Qo
  },
  average: {
    h: ns
  }
};
function Ob({ h: t, w: e, b: n, alpha: s }) {
  if (e === void 0 && (e = 0), n === void 0 && (n = 0), e + n > 1) {
    let i = e + n;
    e /= i, n /= i;
  }
  return sp({
    h: t,
    s: n === 1 ? 1 : 1 - e / (1 - n),
    v: 1 - n,
    alpha: s
  });
}
function Db(t) {
  let e = ip(t);
  if (e === void 0) return;
  let n = e.s !== void 0 ? e.s : 0, s = e.v !== void 0 ? e.v : 0, i = {
    mode: "hwb",
    w: (1 - n) * s,
    b: 1 - s
  };
  return e.h !== void 0 && (i.h = e.h), e.alpha !== void 0 && (i.alpha = e.alpha), i;
}
function Ab(t, e) {
  if (!e || e[0] !== "hwb")
    return;
  const n = { mode: "hwb" }, [, s, i, r, a] = e;
  if (s.type !== U.None) {
    if (s.type === U.Percentage)
      return;
    n.h = s.value;
  }
  if (i.type !== U.None) {
    if (i.type === U.Hue)
      return;
    n.w = i.value / 100;
  }
  if (r.type !== U.None) {
    if (r.type === U.Hue)
      return;
    n.b = r.value / 100;
  }
  return a.type !== U.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === U.Number ? a.value : a.value / 100
    )
  )), n;
}
const Lb = {
  mode: "hwb",
  toMode: {
    rgb: Ob
  },
  fromMode: {
    rgb: Db
  },
  channels: ["h", "w", "b", "alpha"],
  ranges: {
    h: [0, 360]
  },
  gamut: "rgb",
  parse: [Ab],
  serialize: (t) => `hwb(${t.h !== void 0 ? t.h : "none"} ${t.w !== void 0 ? t.w * 100 + "%" : "none"} ${t.b !== void 0 ? t.b * 100 + "%" : "none"}${t.alpha < 1 ? ` / ${t.alpha}` : ""})`,
  interpolate: {
    h: { use: Y, fixup: ts },
    w: Y,
    b: Y,
    alpha: { use: Y, fixup: at }
  },
  difference: {
    h: vb
  },
  average: {
    h: ns
  }
}, ap = 203, sl = 0.1593017578125, op = 78.84375, il = 0.8359375, rl = 18.8515625, al = 18.6875;
function cu(t) {
  if (t < 0) return 0;
  const e = Math.pow(t, 1 / op);
  return 1e4 * Math.pow(Math.max(0, e - il) / (rl - al * e), 1 / sl);
}
function du(t) {
  if (t < 0) return 0;
  const e = Math.pow(t / 1e4, sl);
  return Math.pow((il + rl * e) / (1 + al * e), op);
}
const fu = (t) => Math.max(t / ap, 0), lh = ({ i: t, t: e, p: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  const i = cu(
    t + 0.008609037037932761 * e + 0.11102962500302593 * n
  ), r = cu(
    t - 0.00860903703793275 * e - 0.11102962500302599 * n
  ), a = cu(
    t + 0.5600313357106791 * e - 0.32062717498731885 * n
  ), o = {
    mode: "xyz65",
    x: fu(
      2.070152218389422 * i - 1.3263473389671556 * r + 0.2066510476294051 * a
    ),
    y: fu(
      0.3647385209748074 * i + 0.680566024947227 * r - 0.0453045459220346 * a
    ),
    z: fu(
      -0.049747207535812 * i - 0.0492609666966138 * r + 1.1880659249923042 * a
    )
  };
  return s !== void 0 && (o.alpha = s), o;
}, hu = (t = 0) => Math.max(t * ap, 0), uh = ({ x: t, y: e, z: n, alpha: s }) => {
  const i = hu(t), r = hu(e), a = hu(n), o = du(
    0.3592832590121217 * i + 0.6976051147779502 * r - 0.0358915932320289 * a
  ), l = du(
    -0.1920808463704995 * i + 1.1004767970374323 * r + 0.0753748658519118 * a
  ), u = du(
    0.0070797844607477 * i + 0.0748396662186366 * r + 0.8433265453898765 * a
  ), c = 0.5 * o + 0.5 * l, f = 1.61376953125 * o - 3.323486328125 * l + 1.709716796875 * u, m = 4.378173828125 * o - 4.24560546875 * l - 0.132568359375 * u, h = { mode: "itp", i: c, t: f, p: m };
  return s !== void 0 && (h.alpha = s), h;
}, Nb = {
  mode: "itp",
  channels: ["i", "t", "p", "alpha"],
  parse: ["--ictcp"],
  serialize: "--ictcp",
  toMode: {
    xyz65: lh,
    rgb: (t) => ri(lh(t))
  },
  fromMode: {
    xyz65: uh,
    rgb: (t) => uh(ii(t))
  },
  ranges: {
    i: [0, 0.581],
    t: [-0.369, 0.272],
    p: [-0.164, 0.331]
  },
  interpolate: {
    i: Y,
    t: Y,
    p: Y,
    alpha: { use: Y, fixup: at }
  }
}, Vb = 134.03437499999998, Bb = 16295499532821565e-27, mu = (t) => {
  if (t < 0) return 0;
  let e = Math.pow(t / 1e4, sl);
  return Math.pow((il + rl * e) / (1 + al * e), Vb);
}, pu = (t = 0) => Math.max(t * 203, 0), lp = ({ x: t, y: e, z: n, alpha: s }) => {
  t = pu(t), e = pu(e), n = pu(n);
  let i = 1.15 * t - 0.15 * n, r = 0.66 * e + 0.34 * t, a = mu(0.41478972 * i + 0.579999 * r + 0.014648 * n), o = mu(-0.20151 * i + 1.120649 * r + 0.0531008 * n), l = mu(-0.0166008 * i + 0.2648 * r + 0.6684799 * n), u = (a + o) / 2, c = {
    mode: "jab",
    j: 0.44 * u / (1 - 0.56 * u) - Bb,
    a: 3.524 * a - 4.066708 * o + 0.542708 * l,
    b: 0.199076 * a + 1.096799 * o - 1.295875 * l
  };
  return s !== void 0 && (c.alpha = s), c;
}, _b = 134.03437499999998, ch = 16295499532821565e-27, gu = (t) => {
  if (t < 0) return 0;
  let e = Math.pow(t, 1 / _b);
  return 1e4 * Math.pow((il - e) / (al * e - rl), 1 / sl);
}, yu = (t) => t / 203, up = ({ j: t, a: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = (t + ch) / (0.44 + 0.56 * (t + ch)), r = gu(i + 0.13860504 * e + 0.058047316 * n), a = gu(i - 0.13860504 * e - 0.058047316 * n), o = gu(i - 0.096019242 * e - 0.8118919 * n), l = {
    mode: "xyz65",
    x: yu(
      1.661373024652174 * r - 0.914523081304348 * a + 0.23136208173913045 * o
    ),
    y: yu(
      -0.3250758611844533 * r + 1.571847026732543 * a - 0.21825383453227928 * o
    ),
    z: yu(-0.090982811 * r - 0.31272829 * a + 1.5227666 * o)
  };
  return s !== void 0 && (l.alpha = s), l;
}, cp = (t) => {
  let e = lp(ii(t));
  return t.r === t.b && t.b === t.g && (e.a = e.b = 0), e;
}, dp = (t) => ri(up(t)), zb = {
  mode: "jab",
  channels: ["j", "a", "b", "alpha"],
  parse: ["--jzazbz"],
  serialize: "--jzazbz",
  fromMode: {
    rgb: cp,
    xyz65: lp
  },
  toMode: {
    rgb: dp,
    xyz65: up
  },
  ranges: {
    j: [0, 0.222],
    a: [-0.109, 0.129],
    b: [-0.185, 0.134]
  },
  interpolate: {
    j: Y,
    a: Y,
    b: Y,
    alpha: { use: Y, fixup: at }
  }
}, dh = ({ j: t, a: e, b: n, alpha: s }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.sqrt(e * e + n * n), r = {
    mode: "jch",
    j: t,
    c: i
  };
  return i && (r.h = vt(Math.atan2(n, e) * 180 / Math.PI)), s !== void 0 && (r.alpha = s), r;
}, fh = ({ j: t, c: e, h: n, alpha: s }) => {
  n === void 0 && (n = 0);
  let i = {
    mode: "jab",
    j: t,
    a: e ? e * Math.cos(n / 180 * Math.PI) : 0,
    b: e ? e * Math.sin(n / 180 * Math.PI) : 0
  };
  return s !== void 0 && (i.alpha = s), i;
}, Rb = {
  mode: "jch",
  parse: ["--jzczhz"],
  serialize: "--jzczhz",
  toMode: {
    jab: fh,
    rgb: (t) => dp(fh(t))
  },
  fromMode: {
    rgb: (t) => dh(cp(t)),
    jab: dh
  },
  channels: ["j", "c", "h", "alpha"],
  ranges: {
    j: [0, 0.221],
    c: [0, 0.19],
    h: [0, 360]
  },
  interpolate: {
    h: { use: Y, fixup: ts },
    c: Y,
    j: Y,
    alpha: { use: Y, fixup: at }
  },
  difference: {
    h: el
  },
  average: {
    h: ns
  }
}, ol = Math.pow(29, 3) / Math.pow(3, 3), dd = Math.pow(6, 3) / Math.pow(29, 3);
let vu = (t) => Math.pow(t, 3) > dd ? Math.pow(t, 3) : (116 * t - 16) / ol;
const fd = ({ l: t, a: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = (t + 16) / 116, r = e / 500 + i, a = i - n / 200, o = {
    mode: "xyz50",
    x: vu(r) * it.X,
    y: vu(i) * it.Y,
    z: vu(a) * it.Z
  };
  return s !== void 0 && (o.alpha = s), o;
}, ia = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Xi({
    r: t * 3.1341359569958707 - e * 1.6173863321612538 - 0.4906619460083532 * n,
    g: t * -0.978795502912089 + e * 1.916254567259524 + 0.03344273116131949 * n,
    b: t * 0.07195537988411677 - e * 0.2289768264158322 + 1.405386058324125 * n
  });
  return s !== void 0 && (i.alpha = s), i;
}, fp = (t) => ia(fd(t)), ra = (t) => {
  let { r: e, g: n, b: s, alpha: i } = Ji(t), r = {
    mode: "xyz50",
    x: 0.436065742824811 * e + 0.3851514688337912 * n + 0.14307845442264197 * s,
    y: 0.22249319175623702 * e + 0.7168870538238823 * n + 0.06061979053616537 * s,
    z: 0.013923904500943465 * e + 0.09708128566574634 * n + 0.7140993584005155 * s
  };
  return i !== void 0 && (r.alpha = i), r;
}, bu = (t) => t > dd ? Math.cbrt(t) : (ol * t + 16) / 116, hd = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = bu(t / it.X), r = bu(e / it.Y), a = bu(n / it.Z), o = {
    mode: "lab",
    l: 116 * r - 16,
    a: 500 * (i - r),
    b: 200 * (r - a)
  };
  return s !== void 0 && (o.alpha = s), o;
}, hp = (t) => {
  let e = hd(ra(t));
  return t.r === t.b && t.b === t.g && (e.a = e.b = 0), e;
};
function Pb(t, e) {
  if (!e || e[0] !== "lab")
    return;
  const n = { mode: "lab" }, [, s, i, r, a] = e;
  if (!(s.type === U.Hue || i.type === U.Hue || r.type === U.Hue))
    return s.type !== U.None && (n.l = Math.min(Math.max(0, s.value), 100)), i.type !== U.None && (n.a = i.type === U.Number ? i.value : i.value * 125 / 100), r.type !== U.None && (n.b = r.type === U.Number ? r.value : r.value * 125 / 100), a.type !== U.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        a.type === U.Number ? a.value : a.value / 100
      )
    )), n;
}
const md = {
  mode: "lab",
  toMode: {
    xyz50: fd,
    rgb: fp
  },
  fromMode: {
    xyz50: hd,
    rgb: hp
  },
  channels: ["l", "a", "b", "alpha"],
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  },
  parse: [Pb],
  serialize: (t) => `lab(${t.l !== void 0 ? t.l : "none"} ${t.a !== void 0 ? t.a : "none"} ${t.b !== void 0 ? t.b : "none"}${t.alpha < 1 ? ` / ${t.alpha}` : ""})`,
  interpolate: {
    l: Y,
    a: Y,
    b: Y,
    alpha: { use: Y, fixup: at }
  }
}, Wb = {
  ...md,
  mode: "lab65",
  parse: ["--lab-d65"],
  serialize: "--lab-d65",
  toMode: {
    xyz65: K1,
    rgb: tl
  },
  fromMode: {
    xyz65: Q1,
    rgb: nl
  },
  ranges: {
    l: [0, 100],
    a: [-125, 125],
    b: [-125, 125]
  }
};
function Hb(t, e) {
  if (!e || e[0] !== "lch")
    return;
  const n = { mode: "lch" }, [, s, i, r, a] = e;
  if (s.type !== U.None) {
    if (s.type === U.Hue)
      return;
    n.l = Math.min(Math.max(0, s.value), 100);
  }
  if (i.type !== U.None && (n.c = Math.max(
    0,
    i.type === U.Number ? i.value : i.value * 150 / 100
  )), r.type !== U.None) {
    if (r.type === U.Percentage)
      return;
    n.h = r.value;
  }
  return a.type !== U.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === U.Number ? a.value : a.value / 100
    )
  )), n;
}
const pd = {
  mode: "lch",
  toMode: {
    lab: Fs,
    rgb: (t) => fp(Fs(t))
  },
  fromMode: {
    rgb: (t) => Es(hp(t)),
    lab: Es
  },
  channels: ["l", "c", "h", "alpha"],
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  },
  parse: [Hb],
  serialize: (t) => `lch(${t.l !== void 0 ? t.l : "none"} ${t.c !== void 0 ? t.c : "none"} ${t.h !== void 0 ? t.h : "none"}${t.alpha < 1 ? ` / ${t.alpha}` : ""})`,
  interpolate: {
    h: { use: Y, fixup: ts },
    c: Y,
    l: Y,
    alpha: { use: Y, fixup: at }
  },
  difference: {
    h: el
  },
  average: {
    h: ns
  }
}, Ub = {
  ...pd,
  mode: "lch65",
  parse: ["--lch-d65"],
  serialize: "--lch-d65",
  toMode: {
    lab65: (t) => Fs(t, "lab65"),
    rgb: (t) => tl(Fs(t, "lab65"))
  },
  fromMode: {
    rgb: (t) => Es(nl(t), "lch65"),
    lab65: (t) => Es(t, "lch65")
  },
  ranges: {
    l: [0, 100],
    c: [0, 150],
    h: [0, 360]
  }
}, mp = ({ l: t, u: e, v: n, alpha: s }) => {
  e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.sqrt(e * e + n * n), r = {
    mode: "lchuv",
    l: t,
    c: i
  };
  return i && (r.h = vt(Math.atan2(n, e) * 180 / Math.PI)), s !== void 0 && (r.alpha = s), r;
}, pp = ({ l: t, c: e, h: n, alpha: s }) => {
  n === void 0 && (n = 0);
  let i = {
    mode: "luv",
    l: t,
    u: e ? e * Math.cos(n / 180 * Math.PI) : 0,
    v: e ? e * Math.sin(n / 180 * Math.PI) : 0
  };
  return s !== void 0 && (i.alpha = s), i;
}, gp = (t, e, n) => 4 * t / (t + 15 * e + 3 * n), yp = (t, e, n) => 9 * e / (t + 15 * e + 3 * n), qb = gp(it.X, it.Y, it.Z), Zb = yp(it.X, it.Y, it.Z), jb = (t) => t <= dd ? ol * t : 116 * Math.cbrt(t) - 16, hc = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = jb(e / it.Y), r = gp(t, e, n), a = yp(t, e, n);
  !isFinite(r) || !isFinite(a) ? i = r = a = 0 : (r = 13 * i * (r - qb), a = 13 * i * (a - Zb));
  let o = {
    mode: "luv",
    l: i,
    u: r,
    v: a
  };
  return s !== void 0 && (o.alpha = s), o;
}, Gb = (t, e, n) => 4 * t / (t + 15 * e + 3 * n), Yb = (t, e, n) => 9 * e / (t + 15 * e + 3 * n), Jb = Gb(it.X, it.Y, it.Z), Xb = Yb(it.X, it.Y, it.Z), mc = ({ l: t, u: e, v: n, alpha: s }) => {
  if (t === void 0 && (t = 0), t === 0)
    return { mode: "xyz50", x: 0, y: 0, z: 0 };
  e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = e / (13 * t) + Jb, r = n / (13 * t) + Xb, a = it.Y * (t <= 8 ? t / ol : Math.pow((t + 16) / 116, 3)), o = a * (9 * i) / (4 * r), l = a * (12 - 3 * i - 20 * r) / (4 * r), u = { mode: "xyz50", x: o, y: a, z: l };
  return s !== void 0 && (u.alpha = s), u;
}, Kb = (t) => mp(hc(ra(t))), Qb = (t) => ia(mc(pp(t))), e6 = {
  mode: "lchuv",
  toMode: {
    luv: pp,
    rgb: Qb
  },
  fromMode: {
    rgb: Kb,
    luv: mp
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
    h: { use: Y, fixup: ts },
    c: Y,
    l: Y,
    alpha: { use: Y, fixup: at }
  },
  difference: {
    h: el
  },
  average: {
    h: ns
  }
}, t6 = {
  ...Yi,
  mode: "lrgb",
  toMode: {
    rgb: Xi
  },
  fromMode: {
    rgb: Ji
  },
  parse: ["srgb-linear"],
  serialize: "srgb-linear"
}, n6 = {
  mode: "luv",
  toMode: {
    xyz50: mc,
    rgb: (t) => ia(mc(t))
  },
  fromMode: {
    xyz50: hc,
    rgb: (t) => hc(ra(t))
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
    l: Y,
    u: Y,
    v: Y,
    alpha: { use: Y, fixup: at }
  }
}, vp = ({ r: t, g: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.cbrt(
    0.412221469470763 * t + 0.5363325372617348 * e + 0.0514459932675022 * n
  ), r = Math.cbrt(
    0.2119034958178252 * t + 0.6806995506452344 * e + 0.1073969535369406 * n
  ), a = Math.cbrt(
    0.0883024591900564 * t + 0.2817188391361215 * e + 0.6299787016738222 * n
  ), o = {
    mode: "oklab",
    l: 0.210454268309314 * i + 0.7936177747023054 * r - 0.0040720430116193 * a,
    a: 1.9779985324311684 * i - 2.42859224204858 * r + 0.450593709617411 * a,
    b: 0.0259040424655478 * i + 0.7827717124575296 * r - 0.8086757549230774 * a
  };
  return s !== void 0 && (o.alpha = s), o;
}, ll = (t) => {
  let e = vp(Ji(t));
  return t.r === t.b && t.b === t.g && (e.a = e.b = 0), e;
}, aa = ({ l: t, a: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Math.pow(t + 0.3963377773761749 * e + 0.2158037573099136 * n, 3), r = Math.pow(t - 0.1055613458156586 * e - 0.0638541728258133 * n, 3), a = Math.pow(t - 0.0894841775298119 * e - 1.2914855480194092 * n, 3), o = {
    mode: "lrgb",
    r: 4.076741636075957 * i - 3.3077115392580616 * r + 0.2309699031821044 * a,
    g: -1.2684379732850317 * i + 2.6097573492876887 * r - 0.3413193760026573 * a,
    b: -0.0041960761386756 * i - 0.7034186179359362 * r + 1.7076146940746117 * a
  };
  return s !== void 0 && (o.alpha = s), o;
}, ul = (t) => Xi(aa(t));
function pc(t) {
  const s = 1.170873786407767;
  return 0.5 * (s * t - 0.206 + Math.sqrt((s * t - 0.206) * (s * t - 0.206) + 4 * 0.03 * s * t));
}
function wo(t) {
  return (t * t + 0.206 * t) / (1.170873786407767 * (t + 0.03));
}
function s6(t, e) {
  let n, s, i, r, a, o, l, u;
  -1.88170328 * t - 0.80936493 * e > 1 ? (n = 1.19086277, s = 1.76576728, i = 0.59662641, r = 0.75515197, a = 0.56771245, o = 4.0767416621, l = -3.3077115913, u = 0.2309699292) : 1.81444104 * t - 1.19445276 * e > 1 ? (n = 0.73956515, s = -0.45954404, i = 0.08285427, r = 0.1254107, a = 0.14503204, o = -1.2684380046, l = 2.6097574011, u = -0.3413193965) : (n = 1.35733652, s = -915799e-8, i = -1.1513021, r = -0.50559606, a = 692167e-8, o = -0.0041960863, l = -0.7034186147, u = 1.707614701);
  let c = n + s * t + i * e + r * t * t + a * t * e, f = 0.3963377774 * t + 0.2158037573 * e, m = -0.1055613458 * t - 0.0638541728 * e, h = -0.0894841775 * t - 1.291485548 * e;
  {
    let p = 1 + c * f, b = 1 + c * m, S = 1 + c * h, k = p * p * p, F = b * b * b, T = S * S * S, O = 3 * f * p * p, I = 3 * m * b * b, N = 3 * h * S * S, Z = 6 * f * f * p, w = 6 * m * m * b, x = 6 * h * h * S, B = o * k + l * F + u * T, _ = o * O + l * I + u * N, A = o * Z + l * w + u * x;
    c = c - B * _ / (_ * _ - 0.5 * B * A);
  }
  return c;
}
function gd(t, e) {
  let n = s6(t, e), s = aa({ l: 1, a: n * t, b: n * e }), i = Math.cbrt(1 / Math.max(s.r, s.g, s.b)), r = i * n;
  return [i, r];
}
function i6(t, e, n, s, i, r = null) {
  r || (r = gd(t, e));
  let a;
  if ((n - i) * r[1] - (r[0] - i) * s <= 0)
    a = r[1] * i / (s * r[0] + r[1] * (i - n));
  else {
    a = r[1] * (i - 1) / (s * (r[0] - 1) + r[1] * (i - n));
    {
      let o = n - i, l = s, u = 0.3963377774 * t + 0.2158037573 * e, c = -0.1055613458 * t - 0.0638541728 * e, f = -0.0894841775 * t - 1.291485548 * e, m = o + l * u, h = o + l * c, p = o + l * f;
      {
        let b = i * (1 - a) + a * n, S = a * s, k = b + S * u, F = b + S * c, T = b + S * f, O = k * k * k, I = F * F * F, N = T * T * T, Z = 3 * m * k * k, w = 3 * h * F * F, x = 3 * p * T * T, B = 6 * m * m * k, _ = 6 * h * h * F, A = 6 * p * p * T, se = 4.0767416621 * O - 3.3077115913 * I + 0.2309699292 * N - 1, me = 4.0767416621 * Z - 3.3077115913 * w + 0.2309699292 * x, te = 4.0767416621 * B - 3.3077115913 * _ + 0.2309699292 * A, Ie = me / (me * me - 0.5 * se * te), ke = -se * Ie, we = -1.2684380046 * O + 2.6097574011 * I - 0.3413193965 * N - 1, Me = -1.2684380046 * Z + 2.6097574011 * w - 0.3413193965 * x, je = -1.2684380046 * B + 2.6097574011 * _ - 0.3413193965 * A, et = Me / (Me * Me - 0.5 * we * je), ze = -we * et, ft = -0.0041960863 * O - 0.7034186147 * I + 1.707614701 * N - 1, Kt = -0.0041960863 * Z - 0.7034186147 * w + 1.707614701 * x, Qt = -0.0041960863 * B - 0.7034186147 * _ + 1.707614701 * A, is = Kt / (Kt * Kt - 0.5 * ft * Qt), rs = -ft * is;
        ke = Ie >= 0 ? ke : 1e6, ze = et >= 0 ? ze : 1e6, rs = is >= 0 ? rs : 1e6, a += Math.min(ke, Math.min(ze, rs));
      }
    }
  }
  return a;
}
function yd(t, e, n = null) {
  n || (n = gd(t, e));
  let s = n[0], i = n[1];
  return [i / s, i / (1 - s)];
}
function bp(t, e, n) {
  let s = gd(e, n), i = i6(e, n, t, 1, t, s), r = yd(e, n, s), a = 0.11516993 + 1 / (7.4477897 + 4.1590124 * n + e * (-2.19557347 + 1.75198401 * n + e * (-2.13704948 - 10.02301043 * n + e * (-4.24894561 + 5.38770819 * n + 4.69891013 * e)))), o = 0.11239642 + 1 / (1.6132032 - 0.68124379 * n + e * (0.40370612 + 0.90148123 * n + e * (-0.27087943 + 0.6122399 * n + e * (299215e-8 - 0.45399568 * n - 0.14661872 * e)))), l = i / Math.min(t * r[0], (1 - t) * r[1]), u = t * a, c = (1 - t) * o, f = 0.9 * l * Math.sqrt(
    Math.sqrt(
      1 / (1 / (u * u * u * u) + 1 / (c * c * c * c))
    )
  );
  return u = t * 0.4, c = (1 - t) * 0.8, [Math.sqrt(1 / (1 / (u * u) + 1 / (c * c))), f, i];
}
function hh(t) {
  const e = t.l !== void 0 ? t.l : 0, n = t.a !== void 0 ? t.a : 0, s = t.b !== void 0 ? t.b : 0, i = { mode: "okhsl", l: pc(e) };
  t.alpha !== void 0 && (i.alpha = t.alpha);
  let r = Math.sqrt(n * n + s * s);
  if (!r)
    return i.s = 0, i;
  let [a, o, l] = bp(e, n / r, s / r), u;
  if (r < o) {
    let c = 0, f = 0.8 * a, m = 1 - f / o;
    u = (r - c) / (f + m * (r - c)) * 0.8;
  } else {
    let c = o, f = 0.2 * o * o * 1.25 * 1.25 / a, m = 1 - f / (l - o);
    u = 0.8 + 0.2 * ((r - c) / (f + m * (r - c)));
  }
  return u && (i.s = u, i.h = vt(Math.atan2(s, n) * 180 / Math.PI)), i;
}
function mh(t) {
  let e = t.h !== void 0 ? t.h : 0, n = t.s !== void 0 ? t.s : 0, s = t.l !== void 0 ? t.l : 0;
  const i = { mode: "oklab", l: wo(s) };
  if (t.alpha !== void 0 && (i.alpha = t.alpha), !n || s === 1)
    return i.a = i.b = 0, i;
  let r = Math.cos(e / 180 * Math.PI), a = Math.sin(e / 180 * Math.PI), [o, l, u] = bp(i.l, r, a), c, f, m, h;
  n < 0.8 ? (c = 1.25 * n, f = 0, m = 0.8 * o, h = 1 - m / l) : (c = 5 * (n - 0.8), f = l, m = 0.2 * l * l * 1.25 * 1.25 / o, h = 1 - m / (u - l));
  let p = f + c * m / (1 - h * c);
  return i.a = p * r, i.b = p * a, i;
}
const r6 = {
  ...np,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: {
    oklab: hh,
    rgb: (t) => hh(ll(t))
  },
  toMode: {
    oklab: mh,
    rgb: (t) => ul(mh(t))
  }
};
function ph(t) {
  let e = t.l !== void 0 ? t.l : 0, n = t.a !== void 0 ? t.a : 0, s = t.b !== void 0 ? t.b : 0, i = Math.sqrt(n * n + s * s), r = i ? n / i : 1, a = i ? s / i : 1, [o, l] = yd(r, a), u = 0.5, c = 1 - u / o, f = l / (i + e * l), m = f * e, h = f * i, p = wo(m), b = h * p / m, S = aa({ l: p, a: r * b, b: a * b }), k = Math.cbrt(
    1 / Math.max(S.r, S.g, S.b, 0)
  );
  e = e / k, i = i / k * pc(e) / e, e = pc(e);
  const F = {
    mode: "okhsv",
    s: i ? (u + l) * h / (l * u + l * c * h) : 0,
    v: e ? e / m : 0
  };
  return F.s && (F.h = vt(Math.atan2(s, n) * 180 / Math.PI)), t.alpha !== void 0 && (F.alpha = t.alpha), F;
}
function gh(t) {
  const e = { mode: "oklab" };
  t.alpha !== void 0 && (e.alpha = t.alpha);
  const n = t.h !== void 0 ? t.h : 0, s = t.s !== void 0 ? t.s : 0, i = t.v !== void 0 ? t.v : 0, r = Math.cos(n / 180 * Math.PI), a = Math.sin(n / 180 * Math.PI), [o, l] = yd(r, a), u = 0.5, c = 1 - u / o, f = 1 - s * u / (u + l - l * c * s), m = s * l * u / (u + l - l * c * s), h = wo(f), p = m * h / f, b = aa({
    l: h,
    a: r * p,
    b: a * p
  }), S = Math.cbrt(
    1 / Math.max(b.r, b.g, b.b, 0)
  ), k = wo(i * f), F = m * k / f;
  return e.l = k * S, e.a = F * r * S, e.b = F * a * S, e;
}
const a6 = {
  ...rp,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: {
    oklab: ph,
    rgb: (t) => ph(ll(t))
  },
  toMode: {
    oklab: gh,
    rgb: (t) => ul(gh(t))
  }
};
function o6(t, e) {
  if (!e || e[0] !== "oklab")
    return;
  const n = { mode: "oklab" }, [, s, i, r, a] = e;
  if (!(s.type === U.Hue || i.type === U.Hue || r.type === U.Hue))
    return s.type !== U.None && (n.l = Math.min(
      Math.max(0, s.type === U.Number ? s.value : s.value / 100),
      1
    )), i.type !== U.None && (n.a = i.type === U.Number ? i.value : i.value * 0.4 / 100), r.type !== U.None && (n.b = r.type === U.Number ? r.value : r.value * 0.4 / 100), a.type !== U.None && (n.alpha = Math.min(
      1,
      Math.max(
        0,
        a.type === U.Number ? a.value : a.value / 100
      )
    )), n;
}
const l6 = {
  ...md,
  mode: "oklab",
  toMode: {
    lrgb: aa,
    rgb: ul
  },
  fromMode: {
    lrgb: vp,
    rgb: ll
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4]
  },
  parse: [o6],
  serialize: (t) => `oklab(${t.l !== void 0 ? t.l : "none"} ${t.a !== void 0 ? t.a : "none"} ${t.b !== void 0 ? t.b : "none"}${t.alpha < 1 ? ` / ${t.alpha}` : ""})`
};
function u6(t, e) {
  if (!e || e[0] !== "oklch")
    return;
  const n = { mode: "oklch" }, [, s, i, r, a] = e;
  if (s.type !== U.None) {
    if (s.type === U.Hue)
      return;
    n.l = Math.min(
      Math.max(0, s.type === U.Number ? s.value : s.value / 100),
      1
    );
  }
  if (i.type !== U.None && (n.c = Math.max(
    0,
    i.type === U.Number ? i.value : i.value * 0.4 / 100
  )), r.type !== U.None) {
    if (r.type === U.Percentage)
      return;
    n.h = r.value;
  }
  return a.type !== U.None && (n.alpha = Math.min(
    1,
    Math.max(
      0,
      a.type === U.Number ? a.value : a.value / 100
    )
  )), n;
}
const c6 = {
  ...pd,
  mode: "oklch",
  toMode: {
    oklab: (t) => Fs(t, "oklab"),
    rgb: (t) => ul(Fs(t, "oklab"))
  },
  fromMode: {
    rgb: (t) => Es(ll(t), "oklch"),
    oklab: (t) => Es(t, "oklch")
  },
  parse: [u6],
  serialize: (t) => `oklch(${t.l !== void 0 ? t.l : "none"} ${t.c !== void 0 ? t.c : "none"} ${t.h !== void 0 ? t.h : "none"}${t.alpha < 1 ? ` / ${t.alpha}` : ""})`,
  ranges: {
    l: [0, 1],
    c: [0, 0.4],
    h: [0, 360]
  }
}, yh = (t) => {
  let { r: e, g: n, b: s, alpha: i } = Ji(t), r = {
    mode: "xyz65",
    x: 0.486570948648216 * e + 0.265667693169093 * n + 0.1982172852343625 * s,
    y: 0.2289745640697487 * e + 0.6917385218365062 * n + 0.079286914093745 * s,
    z: 0 * e + 0.0451133818589026 * n + 1.043944368900976 * s
  };
  return i !== void 0 && (r.alpha = i), r;
}, vh = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = Xi(
    {
      r: t * 2.4934969119414263 - e * 0.9313836179191242 - 0.402710784450717 * n,
      g: t * -0.8294889695615749 + e * 1.7626640603183465 + 0.0236246858419436 * n,
      b: t * 0.0358458302437845 - e * 0.0761723892680418 + 0.9568845240076871 * n
    },
    "p3"
  );
  return s !== void 0 && (i.alpha = s), i;
}, d6 = {
  ...Yi,
  mode: "p3",
  parse: ["display-p3"],
  serialize: "display-p3",
  fromMode: {
    rgb: (t) => vh(ii(t)),
    xyz65: vh
  },
  toMode: {
    rgb: (t) => ri(yh(t)),
    xyz65: yh
  }
}, ku = (t) => {
  let e = Math.abs(t);
  return e >= 1 / 512 ? Math.sign(t) * Math.pow(e, 1 / 1.8) : 16 * t;
}, bh = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = {
    mode: "prophoto",
    r: ku(
      t * 1.3457868816471585 - e * 0.2555720873797946 - 0.0511018649755453 * n
    ),
    g: ku(
      t * -0.5446307051249019 + e * 1.5082477428451466 + 0.0205274474364214 * n
    ),
    b: ku(t * 0 + e * 0 + 1.2119675456389452 * n)
  };
  return s !== void 0 && (i.alpha = s), i;
}, wu = (t = 0) => {
  let e = Math.abs(t);
  return e >= 16 / 512 ? Math.sign(t) * Math.pow(e, 1.8) : t / 16;
}, kh = (t) => {
  let e = wu(t.r), n = wu(t.g), s = wu(t.b), i = {
    mode: "xyz50",
    x: 0.7977666449006423 * e + 0.1351812974005331 * n + 0.0313477341283922 * s,
    y: 0.2880748288194013 * e + 0.7118352342418731 * n + 899369387256e-16 * s,
    z: 0 * e + 0 * n + 0.8251046025104602 * s
  };
  return t.alpha !== void 0 && (i.alpha = t.alpha), i;
}, f6 = {
  ...Yi,
  mode: "prophoto",
  parse: ["prophoto-rgb"],
  serialize: "prophoto-rgb",
  fromMode: {
    xyz50: bh,
    rgb: (t) => bh(ra(t))
  },
  toMode: {
    xyz50: kh,
    rgb: (t) => ia(kh(t))
  }
}, wh = 1.09929682680944, h6 = 0.018053968510807, xu = (t) => {
  const e = Math.abs(t);
  return e > h6 ? (Math.sign(t) || 1) * (wh * Math.pow(e, 0.45) - (wh - 1)) : 4.5 * t;
}, xh = ({ x: t, y: e, z: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  let i = {
    mode: "rec2020",
    r: xu(
      t * 1.7166511879712683 - e * 0.3556707837763925 - 0.2533662813736599 * n
    ),
    g: xu(
      t * -0.6666843518324893 + e * 1.6164812366349395 + 0.0157685458139111 * n
    ),
    b: xu(
      t * 0.0176398574453108 - e * 0.0427706132578085 + 0.9421031212354739 * n
    )
  };
  return s !== void 0 && (i.alpha = s), i;
}, Th = 1.09929682680944, m6 = 0.018053968510807, Tu = (t = 0) => {
  let e = Math.abs(t);
  return e < m6 * 4.5 ? t / 4.5 : (Math.sign(t) || 1) * Math.pow((e + Th - 1) / Th, 1 / 0.45);
}, Sh = (t) => {
  let e = Tu(t.r), n = Tu(t.g), s = Tu(t.b), i = {
    mode: "xyz65",
    x: 0.6369580483012911 * e + 0.1446169035862083 * n + 0.1688809751641721 * s,
    y: 0.262700212011267 * e + 0.6779980715188708 * n + 0.059301716469862 * s,
    z: 0 * e + 0.0280726930490874 * n + 1.0609850577107909 * s
  };
  return t.alpha !== void 0 && (i.alpha = t.alpha), i;
}, p6 = {
  ...Yi,
  mode: "rec2020",
  fromMode: {
    xyz65: xh,
    rgb: (t) => xh(ii(t))
  },
  toMode: {
    xyz65: Sh,
    rgb: (t) => ri(Sh(t))
  },
  parse: ["rec2020"],
  serialize: "rec2020"
}, Xs = 0.0037930732552754493, kp = Math.cbrt(Xs), Su = (t) => Math.cbrt(t) - kp, g6 = (t) => {
  const { r: e, g: n, b: s, alpha: i } = Ji(t), r = Su(0.3 * e + 0.622 * n + 0.078 * s + Xs), a = Su(0.23 * e + 0.692 * n + 0.078 * s + Xs), o = Su(
    0.2434226892454782 * e + 0.2047674442449682 * n + 0.5518098665095535 * s + Xs
  ), l = {
    mode: "xyb",
    x: (r - a) / 2,
    y: (r + a) / 2,
    /* Apply default chroma from luma (subtract Y from B) */
    b: o - (r + a) / 2
  };
  return i !== void 0 && (l.alpha = i), l;
}, $u = (t) => Math.pow(t + kp, 3), y6 = ({ x: t, y: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  const i = $u(t + e) - Xs, r = $u(e - t) - Xs, a = $u(n + e) - Xs, o = Xi({
    r: 11.031566904639861 * i - 9.866943908131562 * r - 0.16462299650829934 * a,
    g: -3.2541473810744237 * i + 4.418770377582723 * r - 0.16462299650829934 * a,
    b: -3.6588512867136815 * i + 2.7129230459360922 * r + 1.9459282407775895 * a
  });
  return s !== void 0 && (o.alpha = s), o;
}, v6 = {
  mode: "xyb",
  channels: ["x", "y", "b", "alpha"],
  parse: ["--xyb"],
  serialize: "--xyb",
  toMode: {
    rgb: y6
  },
  fromMode: {
    rgb: g6
  },
  ranges: {
    x: [-0.0154, 0.0281],
    y: [0, 0.8453],
    b: [-0.2778, 0.388]
  },
  interpolate: {
    x: Y,
    y: Y,
    b: Y,
    alpha: { use: Y, fixup: at }
  }
}, b6 = {
  mode: "xyz50",
  parse: ["xyz-d50"],
  serialize: "xyz-d50",
  toMode: {
    rgb: ia,
    lab: hd
  },
  fromMode: {
    rgb: ra,
    lab: fd
  },
  channels: ["x", "y", "z", "alpha"],
  ranges: {
    x: [0, 0.964],
    y: [0, 0.999],
    z: [0, 0.825]
  },
  interpolate: {
    x: Y,
    y: Y,
    z: Y,
    alpha: { use: Y, fixup: at }
  }
}, k6 = (t) => {
  let { x: e, y: n, z: s, alpha: i } = t;
  e === void 0 && (e = 0), n === void 0 && (n = 0), s === void 0 && (s = 0);
  let r = {
    mode: "xyz50",
    x: 1.0479298208405488 * e + 0.0229467933410191 * n - 0.0501922295431356 * s,
    y: 0.0296278156881593 * e + 0.990434484573249 * n - 0.0170738250293851 * s,
    z: -0.0092430581525912 * e + 0.0150551448965779 * n + 0.7518742899580008 * s
  };
  return i !== void 0 && (r.alpha = i), r;
}, w6 = (t) => {
  let { x: e, y: n, z: s, alpha: i } = t;
  e === void 0 && (e = 0), n === void 0 && (n = 0), s === void 0 && (s = 0);
  let r = {
    mode: "xyz65",
    x: 0.9554734527042182 * e - 0.0230985368742614 * n + 0.0632593086610217 * s,
    y: -0.0283697069632081 * e + 1.0099954580058226 * n + 0.021041398966943 * s,
    z: 0.0123140016883199 * e - 0.0205076964334779 * n + 1.3303659366080753 * s
  };
  return i !== void 0 && (r.alpha = i), r;
}, x6 = {
  mode: "xyz65",
  toMode: {
    rgb: ri,
    xyz50: k6
  },
  fromMode: {
    rgb: ii,
    xyz50: w6
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
    x: Y,
    y: Y,
    z: Y,
    alpha: { use: Y, fixup: at }
  }
}, T6 = ({ r: t, g: e, b: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  const i = {
    mode: "yiq",
    y: 0.29889531 * t + 0.58662247 * e + 0.11448223 * n,
    i: 0.59597799 * t - 0.2741761 * e - 0.32180189 * n,
    q: 0.21147017 * t - 0.52261711 * e + 0.31114694 * n
  };
  return s !== void 0 && (i.alpha = s), i;
}, S6 = ({ y: t, i: e, q: n, alpha: s }) => {
  t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = 0);
  const i = {
    mode: "rgb",
    r: t + 0.95608445 * e + 0.6208885 * n,
    g: t - 0.27137664 * e - 0.6486059 * n,
    b: t - 1.10561724 * e + 1.70250126 * n
  };
  return s !== void 0 && (i.alpha = s), i;
}, $6 = {
  mode: "yiq",
  toMode: {
    rgb: S6
  },
  fromMode: {
    rgb: T6
  },
  channels: ["y", "i", "q", "alpha"],
  parse: ["--yiq"],
  serialize: "--yiq",
  ranges: {
    i: [-0.595, 0.595],
    q: [-0.522, 0.522]
  },
  interpolate: {
    y: Y,
    i: Y,
    q: Y,
    alpha: { use: Y, fixup: at }
  }
};
Ne(fb);
Ne(bb);
Ne(kb);
Ne(wb);
Ne(Sb);
Ne(np);
Ne(rp);
Ne(Lb);
Ne(Nb);
Ne(zb);
Ne(Rb);
Ne(md);
Ne(Wb);
Ne(pd);
Ne(Ub);
Ne(e6);
Ne(t6);
Ne(n6);
Ne(r6);
Ne(a6);
Ne(l6);
Ne(c6);
Ne(d6);
Ne(f6);
Ne(p6);
Ne(Yi);
Ne(v6);
Ne(b6);
Ne(x6);
Ne($6);
function I6(t) {
  return class extends t {
    constructor(...e) {
      throw Error("@adapter: cannot create instance of class.");
    }
  };
}
function M6(t, e) {
  return t === e ? !0 : t === e;
}
const wp = /* @__PURE__ */ Symbol(), Oi = /* @__PURE__ */ Symbol(), Di = /* @__PURE__ */ Symbol(), Ga = /* @__PURE__ */ Symbol(), Pi = /* @__PURE__ */ Symbol(), _t = /* @__PURE__ */ Symbol(), Ft = /* @__PURE__ */ Symbol(), vd = /* @__PURE__ */ Symbol(), xo = /* @__PURE__ */ Symbol(), xp = /* @__PURE__ */ Symbol(), Tp = /* @__PURE__ */ Symbol();
function Os(t) {
  return t && typeof t == "object" && !!t[Pi];
}
function Sp(t) {
  if (!Os(t)) throw Error("@dto assert given object is not a class decorated with @Dto.");
}
const C6 = /* @__PURE__ */ Symbol();
function $p(t, e = 0, n) {
  return function(...s) {
    let i = t[C6] ??= /* @__PURE__ */ new WeakMap(), r = s[e], a = n === void 0 ? "self" : s[n];
    if (typeof r != "object" || !r) return t.call(this, ...s);
    i.has(r) || i.set(r, []);
    let o = i.get(r);
    if (!o.includes(a)) {
      o.push(a);
      try {
        return t.call(this, ...s);
      } finally {
        let l = o.lastIndexOf(a);
        l !== -1 && o.splice(l, 1), o.length === 0 && i.delete(r);
      }
    }
  };
}
const Zr = $p(function(t, e, n, s) {
  let i = t[Tp];
  i(t, e, n, s), t[_t] && Zr(t[_t], t[Ft], t[_t][t[Ft]]);
}, 0, 1), To = $p(function(t, e) {
  Sp(t), t[Ga] || (t[Ga] = !0, Zr(t, Ga, !0, !1)), t[_t] && To(t[_t], t[Ft]);
});
function $h(t, e, n) {
  e[Oi] ??= [], !e[Oi].includes(t) && e[Oi].push(t), t[_t] !== e && (t[_t] = e), t[Ft] !== n && (t[Ft] = n);
}
function Ih(t, e, n) {
  if (Os(n)) $h(n, t, e);
  else if (Array.isArray(n)) {
    for (let s of n) Os(s) && $h(s, t, e);
    n[_t] = t, n[Ft] = e;
  }
}
function Ip(t, e) {
  let n = t[xp];
  n(t, e);
}
function Mh(t, e) {
  if (Oi in e) {
    let n = e[Oi].indexOf(t);
    n !== -1 && e[Oi].splice(n, 1);
  }
  t[_t] = void 0, t[Ft] = void 0;
}
function E6(t, e) {
  if (Os(e)) Mh(e, t);
  else if (Array.isArray(e)) {
    for (let n of e) Os(n) && Mh(n, t);
    e[_t] = void 0, e[Ft] = void 0;
  }
}
const Mp = {};
var Cp = { deleteProperty(t, e) {
  if (Reflect.deleteProperty(t, e), Iu(t, e)) return !0;
  let n = t[_t];
  return n && Zr(n, t[Ft], n[t[Ft]]), n && To(n, t[Ft]), !0;
}, get(t, e, n) {
  if (e === xo) return !0;
  if (Iu(t, e)) return Reflect.get(t, e, n);
  let s = t[_t];
  return s && Ip(s, t[Ft]), Reflect.get(t, e);
}, set(t, e, n, s) {
  if (Iu(t, e)) return Reflect.set(t, e, n, s);
  let i = t[_t];
  return i && Zr(i, t[Ft], i[t[Ft]]), i && To(i, t[Ft]), Reflect.set(t, e, n);
} };
function Iu(t, e) {
  return typeof e == "symbol" || typeof t[e] == "function" || e === "length";
}
var F6 = { get(t, e, n) {
  if (e === xo) return !0;
  if (typeof e == "symbol") return Reflect.get(t, e, n);
  let s = t[Di][e];
  if (!s || !s.get) return Reflect.get(t, e, n);
  let i = s.get.call(t);
  return Ip(t, e), Ih(t, e, i), i;
}, getOwnPropertyDescriptor(t, e) {
  return t[Di][e];
}, ownKeys(t) {
  return t[vd];
}, set(t, e, n, s) {
  if (typeof e == "symbol") return Reflect.set(t, e, n, s);
  let i = t[Di][e];
  if (!i || !i.set) return Reflect.set(t, e, n, s);
  let r = i.get?.call(t) ?? void 0;
  return M6(n, r) || (E6(t, r), Array.isArray(n) && !n[xo] && (n = new Proxy(n, Cp)), i.set.call(t, n), Ih(t, e, n), To(t, e), Zr(t, e, n, r)), !0;
} }, O6 = { get(t, e, n) {
  return e === "__v_isRef" ? !1 : e === xo ? !0 : e in t ? Reflect.get(t, e, n) : Reflect.get(t.value, e);
}, getOwnPropertyDescriptor(t, e) {
  return Reflect.getOwnPropertyDescriptor(t.value, e);
}, ownKeys(t) {
  return Reflect.ownKeys(t.value);
}, set(t, e, n, s) {
  return e in t ? Reflect.set(t, e, n, s) : Reflect.set(t.value, e, n);
} }, D6 = { construct(t, e, n) {
  e = e.map((i) => Array.isArray(i) ? new Proxy(i, Cp) : i);
  let s = Gm((i, r) => {
    let a = Wo(Reflect.construct(t, e, n));
    a[wp] = e, a[Ga] = !1, a[xp] = i, a[Tp] = r;
    let o = new Proxy(a, F6);
    return { get: () => (i(), o), set: () => {
    } };
  });
  return new Proxy(s, O6);
} };
function A6() {
  let t = this;
  Sp(t);
  let e = Mp[t[Pi]], n = new e(...t[wp]);
  for (let [s, i] of Object.entries(this[Di])) i.set && (n[s] = Os(this[s]) ? this[s].clone() : this[s]);
  return n;
}
function L6(t) {
  for (let e in t) {
    let n = this[Di][e];
    Os(this[e]) && typeof t[e] == "object" ? this[e].fill(t[e]) : n && n.set && (this[e] = t[e]);
  }
}
function N6() {
  let t = {};
  for (let e of this[vd]) {
    let n = this[e];
    Os(n) && (n = n.toJSON()), t[e] = n;
  }
  return t;
}
function cl(t) {
  B6(t);
  let e = Object.freeze(B4(t)), n = Object.keys(e);
  return Ca(t.prototype, Di, e), Ca(t.prototype, Pi, t.name), Ca(t.prototype, vd, n), Ca(t, Symbol.hasInstance, (s) => typeof s == "object" && s?.[Pi] === t.name), su(t, "clone", A6), su(t, "fill", L6), su(t, "toJSON", N6), V6(t);
}
function V6(t) {
  let e = new Proxy(t, D6);
  return Mp[t.name] = e, e;
}
function B6(t) {
  let e = Object.getPrototypeOf(t.prototype);
  if (Pi in e) throw Error(`⛔️ @dto ${t.name} cannot extend parent class which is also decorated with @dto ${e[Pi]}.`);
}
function oa(t, e, n, s) {
  var i = arguments.length, r = i < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, n) : s, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(t, e, n, s);
  else for (var o = t.length - 1; o >= 0; o--) (a = t[o]) && (r = (i < 3 ? a(r) : i > 3 ? a(e, n, r) : a(e, n)) || r);
  return i > 3 && r && Object.defineProperty(e, n, r), r;
}
let Ch = class {
  get blob() {
    return this.#t;
  }
  get name() {
    return this.#e;
  }
  #t;
  #e;
  constructor(t, e) {
    this.#t = t, this.#e = e;
  }
};
Ch = oa([cl], Ch);
let gc = class {
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
    return this.#s;
  }
  get total() {
    return this.#i;
  }
  #t;
  #e;
  #n;
  #s;
  #i;
  constructor(t, e, n, s, i) {
    this.#t = t, this.#e = e, this.#n = n, this.#s = s, this.#i = i;
  }
};
gc = oa([cl], gc);
var _6 = gc;
let yc = class {
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
    return this.#s;
  }
  #t;
  #e;
  #n;
  #s;
  constructor(t, e, n, s) {
    this.#t = t, this.#e = e, this.#n = n, this.#s = s;
  }
};
yc = oa([cl], yc);
var z6 = yc;
let vc = class {
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
    return this.#s;
  }
  get params() {
    return this.#i;
  }
  #t;
  #e;
  #n;
  #s;
  #i;
  constructor(e, n, s, i, r) {
    this.#t = e, this.#e = n, this.#n = s, this.#s = i, this.#i = r;
  }
};
vc = oa([cl], vc);
var R6 = vc, bc;
let Eh = bc = class {
  static parsePaginatedAdapter(t, e) {
    return new _6(t.items.map(e), t.page, t.page_size, t.pages, t.total);
  }
  static parseFileNameFromContentDispositionHeader(t) {
    let e = `download-${qe.now().toFormat("yyyy-MM-dd HH-mm-ss")}`;
    if (!t.startsWith("attachment")) return e;
    let n = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(t);
    return (n?.length || 0) < 2 ? e : n[1].replaceAll("'", "").replaceAll('"', "").replaceAll("/", "-").replaceAll(":", "-");
  }
  static parseRequestError(t, e) {
    return new z6(t.code, t.error, t.error_description, e);
  }
  static parseValidationError(t) {
    let e;
    return t.errors && (e = {}, Object.entries(t.errors).forEach(([n, s]) => {
      e[n] = bc.parseValidationError(s);
    })), new R6(t.code, t.error, t.error_description, e, t.params);
  }
};
Eh = bc = oa([I6], Eh);
function wi(t) {
  let e = d(t);
  return zi(e) ? e : e?.$el;
}
function Fh(t, e, n) {
  let s = ie([]);
  es(() => {
    document.addEventListener("pointerdown", i);
  }), ni(() => {
    document.removeEventListener("pointerdown", i);
  });
  function i(r) {
    d(e) && !d(s).some((a) => a.contains(r.target)) && n(r);
  }
  qo(() => {
    let r = [];
    (Array.isArray(t) ? t : [t]).forEach((a) => {
      let o = wi(a);
      o && r.push(o);
    }), s.value = r;
  });
}
function Ep(t, e, n) {
  n ??= { attributes: !0 };
  let s, i = Ue(t, (o) => {
    r();
    let l = wi(o);
    l && (s = new MutationObserver(e), s.observe(l, n));
  }, { immediate: !0 });
  function r() {
    s &&= (s.disconnect(), void 0);
  }
  function a() {
    r(), i();
  }
  Dm(a);
}
function P6(t) {
  let e = [];
  for (let n of t) {
    if (n.type === ve && Array.isArray(n.children)) {
      e.push(...n.children);
      continue;
    }
    e.push(n);
  }
  return e;
}
const W6 = ["a:not([disabled])", "button:not([disabled])", "input[type=checkbox]:not([disabled])", "input[type=radio]:not([disabled])", "input[type=text]:not([disabled])", '[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");
function Ks(t) {
  return Array.from(t.querySelectorAll(W6)).filter(zi).filter((e) => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement);
}
function H6(t, e, n) {
  let s = Ks(t), i = s.indexOf(e);
  if (i === -1) return null;
  let r = Z6(s);
  U6(r, i, n);
  let a = q6(i, n, r, s);
  return a || ((n === "up" || n === "left") && (a = s[i - 1]), (n === "down" || n === "right") && (a = s[i + 1])), a;
}
function U6(t, e, n) {
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
    i.distance = Math.sqrt((s.center.x - r.x) ** 2 + (s.center.y - r.y) ** 2);
  });
}
function q6(t, e, n, s) {
  let i = n[t], r = [];
  switch (e) {
    case "up":
      r = n.map((o, l) => l === t || o.top + o.height > i.top ? 2 ** 53 - 1 : o.distance);
      break;
    case "down":
      r = n.map((o, l) => l === t || o.top < i.top + i.height ? 2 ** 53 - 1 : o.distance);
      break;
    case "left":
      r = n.map((o, l) => l === t || o.left + o.width > i.left ? 2 ** 53 - 1 : o.distance);
      break;
    case "right":
      r = n.map((o, l) => l === t || o.left < i.left + i.width ? 2 ** 53 - 1 : o.distance);
      break;
  }
  let a = r.indexOf(Math.min(...r));
  return r[a] === 2 ** 53 - 1 ? null : s[a];
}
function Z6(t) {
  return t.map((e) => e.getBoundingClientRect()).map((e) => ({ height: e.height, width: e.width, top: e.top, left: e.left, right: e.right, bottom: e.bottom, center: { x: e.left + e.width / 2, y: e.top + e.height / 2 }, distance: 0 }));
}
function j6(t, e, n = void 0) {
  let s = Ks(t), i = n || document.activeElement;
  return !i || !zi(i) ? s[0] || void 0 : s[s.indexOf(i) + e] || void 0;
}
function Jn(t) {
  let e = d(t);
  return zi(e) ? e : e?.$el;
}
function G6(...t) {
  console.warn("[Flux]", ...t);
}
function Mu(t, e, n = !1) {
  let s = Y6(t), i = e.compareDocumentPosition(t), r;
  r = i && Node.DOCUMENT_POSITION_PRECEDING || n ? s.firstChild() : s.lastChild(), (r === null ? t : r).focus();
}
function Y6(t) {
  return document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
}
const Oh = new class {
  get active() {
    return this.current?.isEnabled ?? !1;
  }
  get current() {
    return this.#e[this.#e.length - 1] ?? null;
  }
  #t = [];
  #e = [];
  add(t, e, n = !0) {
    let s = { id: t, setEnabled: e, isEnabled: !0 };
    this.current && this.toggle(this.current, !1), this.#e.push(s), n && (this.toggle(s, !0), this.emit());
  }
  remove(t) {
    let e = this.#e.find((s) => s.id === t);
    e && this.toggle(e, !1);
    let n = this.current?.id === t;
    this.#e = this.#e.filter((s) => s.id !== t), n && this.current && this.toggle(this.current, !0), this.emit();
  }
  emit() {
    this.#t.forEach((t) => t(this.active, this.#e));
  }
  subscribe(t) {
    return this.#t.push(t), t(this.active, this.#e), () => this.#t = this.#t.filter((e) => e !== t);
  }
  toggle(t, e) {
    t.setEnabled(e), t.isEnabled = e;
  }
}(), J6 = !globalThis.document;
let X6 = 0;
function K6(t = !1) {
  let e = ie(`focus-trap-${++X6}`), n = ie(!1);
  return es(() => Oh.add(d(e), (s) => n.value = s, t)), ni(() => Oh.remove(d(e))), n;
}
function Q6(t, e) {
  Ue(t, (n, s, i) => {
    if (!Jn(t) || d(e)) return;
    let r = document.activeElement;
    i(() => {
      requestAnimationFrame(() => r?.focus());
    });
  });
}
function e3(t, e = {}) {
  if (J6) return;
  let { disable: n = ie(!1), disableReturn: s = ie(!1), attachTo: i = null } = e, r = K6(!n);
  Q6(t, s), Ue(t, (a, o, l) => {
    let u = Jn(t), c = i || document;
    r.value && u && document.activeElement && !u.contains(document.activeElement) && !u.querySelector("[autofocus]") && Mu(u, document.activeElement, !0);
    function f(h) {
      if (!r.value || !u) return;
      let p = h.target || document.body;
      u.contains(p) || (h.preventDefault(), h.stopImmediatePropagation(), Mu(u, p));
    }
    function m(h) {
      if (!r.value || !u) return;
      (!h.relatedTarget || h.relatedTarget === document.body) && (h.preventDefault(), u.focus());
      let p = h.target || document.body;
      u.contains(p) || Mu(u, p);
    }
    if (c.addEventListener("focusin", f, { capture: !0 }), c.addEventListener("focusout", m, { capture: !0 }), u) {
      let h = Ks(u), p = h.findIndex((k) => k.classList.contains("is-active")), b = h.findIndex((k) => !k.hasAttribute("aria-disabled")), S = h[0];
      p > -1 && (S = h[p]), b > -1 && (S = h[b]), S && S.focus();
    }
    l(() => {
      c.removeEventListener("focusin", f), c.removeEventListener("focusout", m);
    });
  }, { immediate: !0 }), Ue(() => n, () => {
    let a = Jn(t);
    if (r.value = !n, n || !a) return;
    let o = Ks(a);
    o.includes(document.activeElement) || o[0]?.focus();
  }, { immediate: !0 });
}
function t3(t, { cycle: e = !0, direction: n = "bidirectional" } = {}) {
  Ep(t, () => i(s(), !1));
  function s() {
    let a = Ks(wi(t)), o = a.findIndex((u) => u.classList.contains("is-active")), l = a.findIndex((u) => !u.hasAttribute("aria-disabled"));
    return o > -1 ? o : l > -1 ? l : 0;
  }
  function i(a, o = !0) {
    let l = Ks(wi(t));
    l.forEach((u, c) => u.tabIndex = c === a ? 0 : -1), o && l[a]?.focus();
  }
  function r(a) {
    let o = wi(t), l = Ks(o);
    if (!["Enter", " "].includes(a.key)) switch (n) {
      case "bidirectional":
        n3(a, o, l, i);
        break;
      case "horizontal":
      case "vertical":
        s3(a, o, e, n, l, i);
        break;
    }
  }
  Ue(t, (a, o, l) => {
    let u = wi(t);
    u && (u.addEventListener("keydown", r), i(s(), !1), l(() => u.removeEventListener("keydown", r)));
  }, { immediate: !0 });
}
function n3(t, e, n, s) {
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
  let r = H6(e, document.activeElement, i);
  r && s(n.indexOf(r)), t.preventDefault();
}
function s3(t, e, n, s, i, r) {
  let a;
  if (t.key === (s === "horizontal" ? "ArrowLeft" : "ArrowUp")) a = -1;
  else if (t.key === (s === "horizontal" ? "ArrowRight" : "ArrowDown")) a = 1;
  else return;
  let o = j6(e, a);
  o ? r(i.indexOf(o)) : n && r(a === 1 ? 0 : i.length - 1), t.preventDefault();
}
const i3 = "overlayView", r3 = "overlayProvider overlayView", a3 = "overlayShade overlayView", o3 = "overlay", l3 = "overlayTransitionLeaveActive", u3 = "slideOverTransitionLeaveActive", c3 = "basePaneStructure", d3 = "paneFooter", f3 = "isCurrent", h3 = "overlaySmall overlay", m3 = "overlayMedium overlay", p3 = "overlayLarge overlay", g3 = "slideOver overlay", y3 = "paneHeader", v3 = "tabs", b3 = "tabBar", k3 = "paneHeaderCaption", w3 = "overlayTransitionEnterActive", x3 = "overlayTransitionEnterFrom", T3 = "overlayTransitionLeaveTo", S3 = "slideOverTransitionEnterActive", $3 = "slideOverTransitionEnterFrom", I3 = "slideOverTransitionLeaveTo";
var ln = { overlayView: i3, overlayProvider: r3, overlayShade: a3, overlay: o3, overlayTransitionLeaveActive: l3, slideOverTransitionLeaveActive: u3, basePaneStructure: c3, paneFooter: d3, isCurrent: f3, overlaySmall: h3, overlayMedium: m3, overlayLarge: p3, slideOver: g3, paneHeader: y3, tabs: v3, tabBar: b3, paneHeaderCaption: k3, overlayTransitionEnterActive: w3, overlayTransitionEnterFrom: x3, overlayTransitionLeaveTo: T3, slideOverTransitionEnterActive: S3, slideOverTransitionEnterFrom: $3, slideOverTransitionLeaveTo: I3 };
const M3 = `.${ln.overlayProvider.replaceAll(" ", ".")}`;
let C3 = 0;
function E3(t, e, n, s, i, r) {
  const a = `flux-dialog:${C3++}`;
  let o = null, l = 0;
  const u = ie();
  e3(u), ni(() => {
    o?.();
  }), Ue(u, (f, m, h) => {
    f && (f.addEventListener("keydown", c, { passive: !0 }), f.focus(), h(() => {
      f.removeEventListener("keydown", c);
    }));
  });
  function c(f) {
    f.key !== "Escape" || !o || !e.isCloseable || n("close");
  }
  return () => {
    const { dialogCount: f } = la(), m = P6(s.default?.() ?? []), h = m.length > 0 && m.some((b) => b.type !== gt);
    let p;
    return h ? (o || ([l, o] = Lp()), p = Mi("div", {
      key: e.viewKey ?? a,
      ref: u,
      class: [i, l === f && ln.isCurrent],
      style: {
        zIndex: l + 1e3
      },
      tabindex: 0
    }, m)) : (o?.(), o = null), Mi(n0, { defer: !0, disabled: !p, to: M3 }, [
      Mi(r, t, {
        default: () => p
      })
    ]);
  };
}
function kr(t) {
  return t !== null && typeof t == "object" && !("value" in t);
}
function Ar(t) {
  return t !== null && typeof t == "object" && "value" in t;
}
const Dh = {
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
let Fp = {};
function F3(t) {
  Fp = Object.keys(t).reduce((e, n) => {
    if (!t[n])
      return e;
    const { icon: s, iconName: i } = t[n];
    return e[i] = s, Array.isArray(s[2]) && s[2].forEach((r) => e[r] = s), e;
  }, {});
}
const O3 = 6e3, Pe = On({
  dialogCount: 0,
  alerts: [],
  confirms: [],
  prompts: [],
  snackbars: [],
  tooltips: []
});
let dl = 0, D3 = 0;
function Op(t) {
  const e = ++dl;
  return Pe.alerts.push({
    id: e,
    ...t
  }), e;
}
function Dp(t) {
  const e = ++dl;
  return Pe.confirms.push({
    id: e,
    ...t
  }), e;
}
function Ap(t) {
  const e = ++dl;
  return Pe.prompts.push({
    id: e,
    ...t
  }), e;
}
function bd(t) {
  const e = ++dl;
  return Pe.snackbars.unshift({
    id: e,
    ...t
  }), e;
}
function A3(t) {
  const e = ++D3;
  return Pe.tooltips.push({
    id: e,
    ...t
  }), e;
}
function Lp() {
  return [
    ++Pe.dialogCount,
    () => --Pe.dialogCount
  ];
}
function Np(t) {
  const e = Pe.alerts.findIndex((n) => n.id === t);
  Pe.alerts.splice(e, 1);
}
function kc(t) {
  const e = Pe.confirms.findIndex((n) => n.id === t);
  Pe.confirms.splice(e, 1);
}
function wc(t) {
  const e = Pe.prompts.findIndex((n) => n.id === t);
  Pe.prompts.splice(e, 1);
}
function So(t) {
  const e = Pe.snackbars.findIndex((n) => n.id === t);
  Pe.snackbars.splice(e, 1);
}
function L3(t) {
  const e = Pe.tooltips.findIndex((n) => n.id === t);
  Pe.tooltips.splice(e, 1);
}
function Vp(t, e) {
  const n = Pe.snackbars.findIndex((s) => s.id === t);
  Object.assign(Pe.snackbars[n], e);
}
function N3(t, e) {
  const n = Pe.tooltips.findIndex((s) => s.id === t);
  Object.assign(Pe.tooltips[n], e);
}
async function V3(t) {
  return new Promise((e) => {
    const n = Op({
      ...t,
      onClose() {
        e(), Np(n);
      }
    });
  });
}
async function B3(t) {
  return new Promise((e) => {
    const n = Dp({
      ...t,
      onCancel() {
        e(!1), kc(n);
      },
      onConfirm() {
        e(!0), kc(n);
      }
    });
  });
}
async function _3(t) {
  return new Promise((e) => {
    const n = Ap({
      ...t,
      onCancel() {
        e(!1), wc(n);
      },
      onConfirm(s) {
        e(s), wc(n);
      }
    });
  });
}
async function Ah({ duration: t, ...e }) {
  const n = bd(e);
  await new Promise((s) => setTimeout(() => requestAnimationFrame(s), t ?? O3)), So(n);
}
function la() {
  const t = $e(() => Pe.dialogCount > 0), e = $e(() => Pe.tooltips[Pe.tooltips.length - 1] || null);
  return {
    ...Pe,
    inertMain: t,
    tooltip: e,
    addAlert: Op,
    addConfirm: Dp,
    addPrompt: Ap,
    addSnackbar: bd,
    addTooltip: A3,
    registerDialog: Lp,
    removeAlert: Np,
    removeConfirm: kc,
    removePrompt: wc,
    removeSnackbar: So,
    removeTooltip: L3,
    showAlert: V3,
    showConfirm: B3,
    showPrompt: _3,
    showSnackbar: Ah,
    updateSnackbar: Vp,
    updateTooltip: N3,
    showSnackbarSync: z3(Ah)
  };
}
function z3(t) {
  return (...e) => t(...e);
}
function Ai(t) {
  return typeof t == "string" || t instanceof String;
}
function Lh(t) {
  var e;
  return typeof t == "object" && t != null && (t == null || (e = t.constructor) == null ? void 0 : e.name) === "Object";
}
function Bp(t, e) {
  return Array.isArray(e) ? Bp(t, (n, s) => e.includes(s)) : Object.entries(t).reduce((n, s) => {
    let [i, r] = s;
    return e(r, i) && (n[i] = r), n;
  }, {});
}
const de = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function R3(t) {
  switch (t) {
    case de.LEFT:
      return de.FORCE_LEFT;
    case de.RIGHT:
      return de.FORCE_RIGHT;
    default:
      return t;
  }
}
function xc(t, e) {
  if (e === t) return !0;
  const n = Array.isArray(e), s = Array.isArray(t);
  let i;
  if (n && s) {
    if (e.length != t.length) return !1;
    for (i = 0; i < e.length; i++) if (!xc(e[i], t[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!xc(t[u[i]], e[u[i]])) return !1;
    return !0;
  } else if (e && t && typeof e == "function" && typeof t == "function")
    return e.toString() === t.toString();
  return !1;
}
class P3 {
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
    return !this.removedCount || this.insertedCount ? de.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? de.RIGHT : de.LEFT;
  }
}
function Se(t, e) {
  return new Se.InputMask(t, e);
}
function _p(t) {
  if (t == null) throw new Error("mask property should be defined");
  return t instanceof RegExp ? Se.MaskedRegExp : Ai(t) ? Se.MaskedPattern : t === Date ? Se.MaskedDate : t === Number ? Se.MaskedNumber : Array.isArray(t) || t === Array ? Se.MaskedDynamic : Se.Masked && t.prototype instanceof Se.Masked ? t : Se.Masked && t instanceof Se.Masked ? t.constructor : t instanceof Function ? Se.MaskedFunction : (console.warn("Mask not found for mask", t), Se.Masked);
}
function Tc(t) {
  if (!t) throw new Error("Options in not defined");
  if (Se.Masked) {
    if (t.prototype instanceof Se.Masked) return {
      mask: t
    };
    const {
      mask: e = void 0,
      ...n
    } = t instanceof Se.Masked ? {
      mask: t
    } : Lh(t) && t.mask instanceof Se.Masked ? t : {};
    if (e) {
      const s = e.mask;
      return {
        ...Bp(e, (i, r) => !r.startsWith("_")),
        mask: e.constructor,
        _mask: s,
        ...n
      };
    }
  }
  return Lh(t) ? {
    ...t
  } : {
    mask: t
  };
}
function jr(t) {
  if (Se.Masked && t instanceof Se.Masked) return t;
  const e = Tc(t), n = _p(e.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
  return e.mask === n && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new n(e);
}
Se.createMask = jr;
class kd {
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
Se.MaskElement = kd;
const Nh = 90, W3 = 89;
class fl extends kd {
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
    if (this._handlers.redo && (e.keyCode === Nh && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === W3 && e.ctrlKey))
      return e.preventDefault(), this._handlers.redo(e);
    if (this._handlers.undo && e.keyCode === Nh && (e.metaKey || e.ctrlKey))
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
Se.HTMLMaskElement = fl;
class H3 extends fl {
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
Se.HTMLMaskElement = fl;
class zp extends fl {
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
Se.HTMLContenteditableMaskElement = zp;
class hl {
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
    this.currentIndex < this.states.length - 1 && (this.states.length = this.currentIndex + 1), this.states.push(e), this.states.length > hl.MAX_LENGTH && this.states.shift(), this.currentIndex = this.states.length - 1;
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
hl.MAX_LENGTH = 100;
class U3 {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(e, n) {
    this.el = e instanceof kd ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new zp(e) : new H3(e), this.masked = jr(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new hl(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(e instanceof Se.Masked) && this.masked.constructor === _p(e)) {
      this.masked.updateOptions({
        mask: e
      });
      return;
    }
    const n = e instanceof Se.Masked ? e : jr({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, de.LEFT));
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
    const n = new P3({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), s = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, r = s === this.masked.rawInputValue ? n.removeDirection : de.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, r);
    r !== de.NONE && (a = this.masked.nearestInputPos(a, de.NONE)), this.updateControl(a), delete this._inputEvent;
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
Se.InputMask = U3;
class Ae {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(e) {
    return Array.isArray(e) ? e : [e, new Ae()];
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
Se.ChangeDetails = Ae;
class Un {
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
class En {
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
      ...En.DEFAULTS,
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), new Un(this.extractInput(e, n), e);
  }
  /** Appends tail */
  appendTail(e) {
    return Ai(e) && (e = new Un(String(e))), e.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(e, n) {
    return e ? (this._value += e, new Ae({
      inserted: e,
      rawInserted: e
    })) : new Ae();
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
      o || (r = new Ae(), this.state = i, s && a && (s.state = a));
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
  append(e, n, s) {
    if (!Ai(e)) throw new Error("value should be string");
    const i = Ai(s) ? new Un(String(s)) : s;
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(n), new Ae();
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
    return n === void 0 && (n = {}), Ae.normalize(this.prepare ? this.prepare(e, this, n) : e);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(e, n) {
    return n === void 0 && (n = {}), Ae.normalize(this.prepareChar ? this.prepareChar(e, this, n) : e);
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
    s === void 0 && (s = ""), i === void 0 && (i = de.NONE), r === void 0 && (r = {
      input: !0
    });
    const a = e + n, o = this.extractTail(a), l = this.eager === !0 || this.eager === "remove";
    let u;
    l && (i = R3(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let c = e;
    const f = new Ae();
    if (i !== de.NONE && (c = this.nearestInputPos(e, n > 1 && e !== 0 && !l ? de.NONE : i), f.tailShift = c - e), f.aggregate(this.remove(c)), l && i !== de.NONE && u === this.rawInputValue)
      if (i === de.FORCE_LEFT) {
        let m;
        for (; u === this.rawInputValue && (m = this.displayValue.length); )
          f.aggregate(new Ae({
            tailShift: -1
          })).aggregate(this.remove(m - 1));
      } else i === de.FORCE_RIGHT && o.unshift();
    return f.aggregate(this.append(s, r, o));
  }
  maskEquals(e) {
    return this.mask === e;
  }
  optionsIsChanged(e) {
    return !xc(this, e);
  }
  typedValueEquals(e) {
    const n = this.typedValue;
    return e === n || En.EMPTY_VALUES.includes(e) && En.EMPTY_VALUES.includes(n) || (this.format ? this.format(e, this) === this.format(this.typedValue, this) : !1);
  }
  pad(e) {
    return new Ae();
  }
}
En.DEFAULTS = {
  skipInvalid: !0
};
En.EMPTY_VALUES = [void 0, null, ""];
Se.Masked = En;
class js {
  /** */
  constructor(e, n) {
    e === void 0 && (e = []), n === void 0 && (n = 0), this.chunks = e, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(e) {
    if (!String(e)) return;
    e = Ai(e) ? new Un(String(e)) : e;
    const n = this.chunks[this.chunks.length - 1], s = n && // if stops are same or tail has no stop
    (n.stop === e.stop || e.stop == null) && // if tail chunk goes just after last chunk
    e.from === n.from + n.toString().length;
    if (e instanceof Un)
      s ? n.extend(e.toString()) : this.chunks.push(e);
    else if (e instanceof js) {
      if (e.stop == null) {
        let i;
        for (; e.chunks.length && e.chunks[0].stop == null; )
          i = e.chunks.shift(), i.from += e.from, this.extend(i);
      }
      e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
    }
  }
  appendTo(e) {
    if (!(e instanceof Se.MaskedPattern))
      return new Un(this.toString()).appendTo(e);
    const n = new Ae();
    for (let s = 0; s < this.chunks.length; ++s) {
      const i = this.chunks[s], r = e._mapPosToBlock(e.displayValue.length), a = i.stop;
      let o;
      if (a != null && // if block not found or stop is behind lastBlock
      (!r || r.index <= a) && ((i instanceof js || // for continuous block also check if stop is exist
      e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), o = i instanceof js && e._blocks[a]), o) {
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
      const r = "chunks" in i ? new js() : new Un();
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
class q3 {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, de.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, de.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, de.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, de.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, de.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, de.NONE), !0;
    });
  }
}
class Rp {
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
    return e === void 0 && (e = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(n), this._value || (this._isRawInput = !1), new Ae();
  }
  nearestInputPos(e, n) {
    n === void 0 && (n = de.NONE);
    const s = 0, i = this._value.length;
    switch (n) {
      case de.LEFT:
      case de.FORCE_LEFT:
        return s;
      case de.NONE:
      case de.RIGHT:
      case de.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new Ae();
    const s = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || n.input || n.raw) && (!n.raw || !s) && !n.tail, a = new Ae({
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
    const e = new Ae();
    return this.isFilled || (this._value = e.inserted = this.char), e;
  }
  extractTail() {
    return new Un("");
  }
  appendTail(e) {
    return Ai(e) && (e = new Un(String(e))), e.appendTo(this);
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
class $o {
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
    this.masked = jr(l), Object.assign(this, {
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.value.length), e === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(e, n)) : new Ae();
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
    if (n === void 0 && (n = {}), this.isFilled) return new Ae();
    const s = this.masked.state;
    let i = this.masked._appendChar(e, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new Ae(), this.masked.state = s), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(e, n, s) {
    return this.masked.append(e, this.currentMaskFlags(n), s);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new Ae() : (this.isFilled = !0, new Ae({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new Ae();
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
    n === void 0 && (n = de.NONE);
    const s = 0, i = this.value.length, r = Math.min(Math.max(e, s), i);
    switch (n) {
      case de.LEFT:
      case de.FORCE_LEFT:
        return this.isComplete ? r : s;
      case de.RIGHT:
      case de.FORCE_RIGHT:
        return this.isComplete ? r : i;
      case de.NONE:
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
    return new Ae();
  }
}
$o.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class Z3 extends En {
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
Se.MaskedRegExp = Z3;
class Fn extends En {
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
      ...Fn.DEFAULTS,
      ...e,
      definitions: Object.assign({}, $o.DEFAULT_DEFINITIONS, e?.definitions)
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
          } = Tc(this.blocks[f]), b = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...p,
            repeat: h,
            parent: this
          }, S = h != null ? new Se.RepeatBlock(
            b
            /* TODO */
          ) : jr(b);
          S && (this._blocks.push(S), m && (this.exposeBlock = S), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), r += f.length - 1;
          continue;
        }
      }
      let a = n[r], o = a in e;
      if (a === Fn.STOP_CHAR) {
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
      if (a === Fn.ESCAPE_CHAR) {
        if (++r, a = n[r], !a) break;
        o = !1;
      }
      const l = o ? new $o({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Tc(e[a]),
        parent: this
      }) : new Rp({
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
    const n = new Ae();
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
    const s = this._mapPosToBlock(this.displayValue.length), i = new Ae();
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
    const s = new js();
    return e === n || this._forEachBlocksInRange(e, n, (i, r, a, o) => {
      const l = i.extractTail(a, o);
      l.stop = this._findStopBefore(r), l.from = this._blockStartPos(r), l instanceof js && (l.blockIndex = r), s.extend(l);
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
    const n = new Ae();
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
    if (n === void 0 && (n = de.NONE), !this._blocks.length) return 0;
    const s = new q3(this, e);
    if (n === de.NONE)
      return s.pushRightBeforeInput() || (s.popState(), s.pushLeftBeforeInput()) ? s.pos : this.displayValue.length;
    if (n === de.LEFT || n === de.FORCE_LEFT) {
      if (n === de.LEFT) {
        if (s.pushRightBeforeFilled(), s.ok && s.pos === e) return e;
        s.popState();
      }
      if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), n === de.LEFT) {
        if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= e || (s.popState(), s.ok && s.pos <= e)) return s.pos;
        s.popState();
      }
      return s.ok ? s.pos : n === de.FORCE_LEFT ? 0 : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0);
    }
    return n === de.RIGHT || n === de.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : n === de.FORCE_RIGHT ? this.displayValue.length : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : this.nearestInputPos(e, de.LEFT))) : e;
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
    const n = new Ae();
    return this._forEachBlocksInRange(0, this.displayValue.length, (s) => n.aggregate(s.pad(e))), n;
  }
}
Fn.DEFAULTS = {
  ...En.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Fn.STOP_CHAR = "`";
Fn.ESCAPE_CHAR = "\\";
Fn.InputDefinition = $o;
Fn.FixedDefinition = Rp;
Se.MaskedPattern = Fn;
function j3(t) {
  return Se(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aaaaaa##[000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function G3(t) {
  return Se(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa00 #### 0000 0000[ 0000 0000 0000 0000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function Y3(t) {
  return Se(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa########[#####]",
    prepareChar: (e) => e.toUpperCase()
  });
}
var J3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  bic: j3,
  iban: G3,
  vat: Y3
});
function X3() {
  return qn(P0, ie(!1));
}
function Ki(t) {
  const e = X3();
  return $e(() => d(t) || d(e));
}
function wd() {
  return qn(W0, {
    id: jc()
  });
}
const K3 = "basePane", Q3 = "basePaneLoader", ek = "basePaneStructure basePane", tk = "basePaneElement", nk = "form", sk = "paneHeader";
var ml = { basePane: K3, basePaneLoader: Q3, basePaneStructure: ek, basePaneElement: tk, form: nk, paneHeader: sk };
const { basePane: ss } = ml, ik = "icon", rk = "fontAwesomeIcon icon", ak = `iconBoxed ${ss}`, ok = `iconBoxedDefault iconBoxed ${ss}`, lk = `iconBoxedColored iconBoxed ${ss}`, uk = `iconBoxedGray iconBoxedColored iconBoxed ${ss}`, ck = `iconBoxedPrimary iconBoxedColored iconBoxed ${ss}`, dk = `iconBoxedDanger iconBoxedColored iconBoxed ${ss}`, fk = `iconBoxedInfo iconBoxedColored iconBoxed ${ss}`, hk = `iconBoxedSuccess iconBoxedColored iconBoxed ${ss}`, mk = `iconBoxedWarning iconBoxedColored iconBoxed ${ss}`;
var Vh = { icon: ik, fontAwesomeIcon: rk, iconBoxed: ak, iconBoxedDefault: ok, iconBoxedColored: lk, iconBoxedGray: uk, iconBoxedPrimary: ck, iconBoxedDanger: dk, iconBoxedInfo: fk, iconBoxedSuccess: hk, iconBoxedWarning: mk };
const pk = ["viewBox"], gk = ["d"];
var It = /* @__PURE__ */ q({
  __name: "FluxIcon",
  props: {
    size: {},
    name: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e, s = $e(() => {
      if (!t.name)
        return null;
      const r = Fp[t.name];
      return r ? {
        width: r[0],
        height: r[1],
        paths: Array.isArray(r[4]) ? r[4] : [r[4]],
        scale: Math.max(1, r[0] / 512)
      } : (G6(`Unknown icon: ${t.name}`), null);
    }), i = (r) => n("click", r);
    return (r, a) => s.value ? (y(), P("svg", {
      key: 0,
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: $(d(Vh).fontAwesomeIcon),
      style: st({
        fontSize: t.size && `${t.size}px`,
        scale: s.value.scale > 1 ? s.value.scale : void 0
      }),
      focusable: "false",
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, [
      (y(!0), P(ve, null, dt(s.value.paths, (o) => (y(), P("path", {
        d: o,
        fill: "currentColor"
      }, null, 8, gk))), 256))
    ], 14, pk)) : (y(), P("i", {
      key: 1,
      class: $(d(Vh).icon)
    }, null, 2));
  }
});
const yk = ["href", "rel", "target"];
var Pp = /* @__PURE__ */ q({
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
    const n = e, s = {
      onMouseenter: (r) => n("mouseenter", r),
      onMouseleave: (r) => n("mouseleave", r)
    };
    function i(r, a) {
      n("click", r), !r.defaultPrevented && a?.(r);
    }
    return (r, a) => {
      const o = Wy("router-link");
      return t.componentType === "route" ? (y(), W(o, qt({ key: 0 }, r.$attrs, wa(s), {
        rel: t.rel,
        target: t.target,
        to: t.to,
        onClick: a[0] || (a[0] = (l) => i(l))
      }), {
        default: j(() => [
          ce(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["rel", "target", "to"])) : t.componentType === "link" ? (y(), P("a", qt({ key: 1 }, r.$attrs, wa(s, !0), {
        href: t.href,
        rel: t.rel,
        target: t.target,
        onClick: a[1] || (a[1] = (l) => i(l))
      }), [
        ce(r.$slots, "default")
      ], 16, yk)) : t.componentType === "button" ? (y(), P("button", qt({ key: 2 }, r.$attrs, wa(s, !0), {
        onClick: a[2] || (a[2] = (l) => i(l))
      }), [
        ce(r.$slots, "default")
      ], 16)) : (y(), P("div", qt({ key: 3 }, r.$attrs, wa(s, !0), { onClick: i }), [
        ce(r.$slots, "default")
      ], 16));
    };
  }
});
const vk = "spinner", bk = "spinnerTrack", kk = "spinnerEffect", wk = "spinnerValue";
var Oa = { spinner: vk, spinnerTrack: bk, spinnerEffect: kk, spinnerValue: wk }, Xn = /* @__PURE__ */ q({
  __name: "FluxSpinner",
  props: {
    size: {}
  },
  setup(t) {
    return (e, n) => (y(), P("svg", {
      class: $(d(Oa).spinner),
      viewBox: "0 0 24 24",
      style: st({
        fontSize: t.size && `${t.size}px`
      })
    }, [
      fe("circle", {
        class: $(d(Oa).spinnerTrack),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4"
      }, null, 2),
      fe("circle", {
        class: $(d(Oa).spinnerEffect),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2),
      fe("circle", {
        class: $(d(Oa).spinnerValue),
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
const xk = "button", Tk = "isSmall", Sk = "isMedium", $k = "isLarge", Ik = "isXl", Mk = "isFilled", Ck = "buttonIcon", Ek = "buttonLabel", Fk = "badge";
var bs = { button: xk, isSmall: Tk, isMedium: Sk, isLarge: $k, isXl: Ik, isFilled: Mk, buttonIcon: Ck, buttonLabel: Ek, badge: Fk };
const Wp = ["default", "after", "before", "iconLeading", "iconTrailing", "label"];
var pl = /* @__PURE__ */ q({
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
    const n = e, s = Ki(Yn(() => t.disabled));
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
    return (o, l) => (y(), W(Pp, {
      "component-type": t.type,
      class: $(d(Xt)(
        t.cssClass,
        t.isFilled && d(bs).isFilled,
        t.size === "small" && d(bs).isSmall,
        t.size === "medium" && d(bs).isMedium,
        t.size === "large" && d(bs).isLarge,
        t.size === "xl" && d(bs).isXl
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
      default: j(() => [
        ce(o.$slots, "before"),
        ce(o.$slots, "iconLeading", {}, () => [
          t.isLoading && (t.iconLeading || !t.iconTrailing) ? (y(), W(Xn, {
            key: 0,
            size: 20
          })) : t.iconLeading ? (y(), W(It, {
            key: 1,
            class: $(t.cssClassIcon),
            name: t.iconLeading
          }, null, 8, ["class", "name"])) : ne("", !0)
        ]),
        ce(o.$slots, "label", {}, () => [
          t.label ? (y(), P("span", {
            key: 0,
            class: $(t.cssClassLabel)
          }, ye(t.label), 3)) : ne("", !0)
        ]),
        ce(o.$slots, "iconTrailing", {}, () => [
          t.isLoading && !t.iconLeading && t.iconTrailing ? (y(), W(Xn, {
            key: 0,
            size: 20
          })) : t.iconTrailing ? (y(), W(It, {
            key: 1,
            class: $(t.cssClassIcon),
            name: t.iconTrailing
          }, null, 8, ["class", "name"])) : ne("", !0)
        ]),
        ce(o.$slots, "after")
      ]),
      _: 3
    }, 8, ["component-type", "class", "type", "aria-disabled", "disabled", "tabindex", "href", "rel", "target", "to"]));
  }
});
const { button: Ok, buttonIcon: Dk, buttonLabel: Ak } = bs, Lk = `action ${Ok}`, Nk = "spinner", Vk = `actionIcon ${Dk}`, Bk = "isDestructive", _k = `actionLabel ${Ak}`, zk = "actionBar", Rk = "separator", Pk = "formInput", Wk = "basePaneStructure", Hk = "paneHeader", Uk = "actionPane", qk = "actionPaneGrid", Zk = "actionPaneBody", jk = "paneBody";
var Da = { action: Lk, spinner: Nk, actionIcon: Vk, isDestructive: Bk, actionLabel: _k, actionBar: zk, separator: Rk, formInput: Pk, basePaneStructure: Wk, paneHeader: Hk, actionPane: Uk, actionPaneGrid: qk, actionPaneBody: Zk, paneBody: jk }, Gk = /* @__PURE__ */ q({
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
    return (e, n) => (y(), W(pl, qt({ disabled: t.disabled, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to, type: t.type }, {
      "css-class": d(Da).action,
      "css-class-icon": d(Da).actionIcon,
      "css-class-label": d(Da).actionLabel,
      class: t.isDestructive && d(Da).isDestructive,
      "icon-leading": t.icon,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), null, 16, ["css-class", "css-class-icon", "css-class-label", "class", "icon-leading"]));
  }
});
const { button: As, buttonIcon: ai, buttonLabel: oi } = bs, Yk = `primaryButton ${As}`, Jk = "spinner", Xk = `primaryButtonIcon ${ai}`, Kk = `primaryButtonLabel ${oi}`, Qk = `secondaryButton ${As}`, e8 = `secondaryButtonIcon ${ai}`, t8 = `secondaryButtonLabel ${oi}`, n8 = `destructiveButton ${As}`, s8 = `destructiveButtonIcon ${ai}`, i8 = `destructiveButtonLabel ${oi}`, r8 = `baseLinkButton ${As}`, a8 = `primaryLinkButton baseLinkButton ${As}`, o8 = `primaryLinkButtonIcon ${ai}`, l8 = `primaryLinkButtonLabel ${oi}`, u8 = `secondaryLinkButton baseLinkButton ${As}`, c8 = `secondaryLinkButtonIcon ${ai}`, d8 = `secondaryLinkButtonLabel ${oi}`, f8 = `linkButton ${As}`, h8 = `linkButtonIcon ${ai}`, m8 = "icon", p8 = `linkButtonLabel ${oi}`, g8 = `publishButton primaryButton ${As}`, y8 = `publishButtonIcon primaryButtonIcon ${ai}`, v8 = `publishButtonLabel primaryButtonLabel ${oi}`, b8 = "publishButtonAnimation", k8 = "isDone", w8 = "publishButtonAnimationArrow", x8 = "publishArrowOut", T8 = "publishButtonAnimationCheck", S8 = "publishButtonAnimationCircle", $8 = "isIdle", I8 = "isLoading", M8 = "publishArrowIn", C8 = "publishButtonCloud", E8 = "publish", F8 = "buttonGroup", O8 = "button";
var Qs = { primaryButton: Yk, spinner: Jk, primaryButtonIcon: Xk, primaryButtonLabel: Kk, secondaryButton: Qk, secondaryButtonIcon: e8, secondaryButtonLabel: t8, destructiveButton: n8, destructiveButtonIcon: s8, destructiveButtonLabel: i8, baseLinkButton: r8, primaryLinkButton: a8, primaryLinkButtonIcon: o8, primaryLinkButtonLabel: l8, secondaryLinkButton: u8, secondaryLinkButtonIcon: c8, secondaryLinkButtonLabel: d8, linkButton: f8, linkButtonIcon: h8, icon: m8, linkButtonLabel: p8, publishButton: g8, publishButtonIcon: y8, publishButtonLabel: v8, publishButtonAnimation: b8, isDone: k8, publishButtonAnimationArrow: w8, publishArrowOut: x8, publishButtonAnimationCheck: T8, publishButtonAnimationCircle: S8, isIdle: $8, isLoading: I8, publishArrowIn: M8, publishButtonCloud: C8, publish: E8, buttonGroup: F8, button: O8 }, D8 = /* @__PURE__ */ q({
  __name: "FluxButtonGroup",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(Qs).buttonGroup)
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const { basePaneStructure: ua, basePaneElement: xd, basePaneLoader: A8 } = ml, L8 = `pane ${ua}`, N8 = `paneDefault pane ${ua}`, V8 = `paneFlat pane ${ua}`, B8 = `paneWell pane ${ua}`, _8 = `paneHeader ${xd}`, z8 = "basePaneElement", R8 = `paneBody ${xd}`, P8 = "paneHeaderCaption", W8 = "paneHeaderIcon", H8 = `paneFooter ${xd}`, U8 = `paneLoader ${A8}`, q8 = "paneTag", Z8 = "paneMedia", j8 = "paneMediaInset paneMedia", G8 = "paneMediaImage", Y8 = `paneDeck paneDefault pane ${ua}`, J8 = "baseAutoGrid", X8 = "paneGroup", K8 = "paneIllustration", Q8 = "paneIllustrationContent", e5 = "paneIllustrationContentControlled paneIllustrationContent", t5 = "paneIllustrationMagic", n5 = "paneIllustrationMasked paneIllustration", s5 = "iconBoxed";
var In = { pane: L8, paneDefault: N8, paneFlat: V8, paneWell: B8, paneHeader: _8, basePaneElement: z8, paneBody: R8, paneHeaderCaption: P8, paneHeaderIcon: W8, paneFooter: H8, paneLoader: U8, paneTag: q8, paneMedia: Z8, paneMediaInset: j8, paneMediaImage: G8, paneDeck: Y8, baseAutoGrid: J8, paneGroup: X8, paneIllustration: K8, paneIllustrationContent: Q8, paneIllustrationContentControlled: e5, paneIllustrationMagic: t5, paneIllustrationMasked: n5, iconBoxed: s5 }, gl = /* @__PURE__ */ q({
  __name: "FluxPane",
  props: {
    isLoading: { type: Boolean },
    tag: {},
    variant: { default: "default" }
  },
  setup(t) {
    const e = {
      default: In.paneDefault,
      flat: In.paneFlat,
      well: In.paneWell
    };
    return (n, s) => (y(), P("div", {
      class: $(e[t.variant])
    }, [
      ce(n.$slots, "default"),
      t.isLoading ? ce(n.$slots, "loader", { key: 0 }, () => [
        fe("div", {
          class: $(d(In).paneLoader)
        }, [
          z(Xn)
        ], 2)
      ]) : ne("", !0),
      t.tag ? (y(), P("div", {
        key: 1,
        class: $(d(In).paneTag)
      }, ye(t.tag), 3)) : ne("", !0)
    ], 2));
  }
}), Wi = /* @__PURE__ */ q({
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
    return (e, n) => (y(), W(pl, qt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": d(Qs).secondaryButton,
      "css-class-icon": d(Qs).secondaryButtonIcon,
      "css-class-label": d(Qs).secondaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), Jc({ _: 2 }, [
      dt(d(Wp), (s) => ({
        name: s,
        fn: j(() => [
          ce(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
});
const i5 = "baseAutoGrid";
var r5 = { baseAutoGrid: i5 };
const { baseAutoGrid: a5 } = r5, o5 = "aspectRatio", l5 = `autoGrid ${a5}`, u5 = "container", c5 = "spacer", d5 = "stack", f5 = "isCentered", h5 = "isFill", m5 = "isWrapping", p5 = "stackHorizontal stack", g5 = "stackVertical stack";
var bi = { aspectRatio: o5, autoGrid: l5, container: u5, spacer: c5, stack: d5, isCentered: f5, isFill: h5, isWrapping: m5, stackHorizontal: p5, stackVertical: g5 }, yl = /* @__PURE__ */ q({
  __name: "FluxSpacer",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(bi).spacer)
    }, null, 2));
  }
}), Hp = /* @__PURE__ */ q({
  __name: "FluxStack",
  props: {
    direction: { default: "vertical" },
    gap: { default: 21 },
    isCentered: { type: Boolean },
    isFill: { type: Boolean },
    isWrapping: { type: Boolean },
    tag: {}
  },
  setup(t) {
    return (e, n) => (y(), W(Yc(t.tag ?? "div"), {
      class: $(d(Xt)(
        t.direction === "horizontal" && d(bi).stackHorizontal,
        t.direction === "vertical" && d(bi).stackVertical,
        t.isCentered && d(bi).isCentered,
        t.isFill && d(bi).isFill,
        t.isWrapping && d(bi).isWrapping
      )),
      style: st({
        "--gap": t.gap && `${t.gap}px`
      })
    }, {
      default: j(() => [
        ce(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), y5 = /* @__PURE__ */ q({
  __name: "FluxButtonStack",
  props: {
    direction: { default: "horizontal" },
    gap: { default: 9 },
    isFill: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), W(Hp, {
      direction: t.direction,
      gap: t.gap,
      "is-fill": t.isFill
    }, {
      default: j(() => [
        ce(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["direction", "gap", "is-fill"]));
  }
}), Gr = /* @__PURE__ */ q({
  __name: "FluxPaneBody",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(In).paneBody)
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const v5 = "breakthroughTransitionEnterActive", b5 = "breakthroughTransitionBackEnterActive", k5 = "breakthroughTransitionLeaveActive", w5 = "breakthroughTransitionBackLeaveActive", x5 = "breakthroughTransitionEnterFrom", T5 = "breakthroughTransitionBackLeaveTo", S5 = "breakthroughTransitionLeaveTo", $5 = "breakthroughTransitionBackEnterFrom", I5 = "fadeTransitionEnterActive", M5 = "fadeTransitionLeaveActive", C5 = "fadeTransitionEnterFrom", E5 = "fadeTransitionLeaveTo", F5 = "fadeTransitionEnterTo", O5 = "fadeTransitionLeaveFrom", D5 = "routeTransitionEnterActive", A5 = "routeTransitionBackEnterActive", L5 = "routeTransitionLeaveActive", N5 = "routeTransitionBackLeaveActive", V5 = "routeTransitionEnterFrom", B5 = "routeTransitionBackLeaveTo", _5 = "routeTransitionLeaveTo", z5 = "routeTransitionBackEnterFrom", R5 = "tooltipTransitionEnterActive", P5 = "tooltipTransitionLeaveActive", W5 = "tooltipTransitionEnterFrom", H5 = "tooltipTransitionLeaveTo", U5 = "verticalWindowTransitionEnterActive", q5 = "verticalWindowTransitionBackEnterActive", Z5 = "verticalWindowTransitionLeaveActive", j5 = "verticalWindowTransitionBackLeaveActive", G5 = "verticalWindowTransitionBackLeaveTo", Y5 = "verticalWindowTransitionEnterFrom", J5 = "verticalWindowTransitionBackEnterFrom", X5 = "verticalWindowTransitionLeaveTo", K5 = "windowTransitionEnterActive", Q5 = "windowTransitionBackEnterActive", ew = "windowTransitionLeaveActive", tw = "windowTransitionBackLeaveActive", nw = "windowTransitionBackLeaveTo", sw = "windowTransitionEnterFrom", iw = "windowTransitionBackEnterFrom", rw = "windowTransitionLeaveTo";
var Tn = { breakthroughTransitionEnterActive: v5, breakthroughTransitionBackEnterActive: b5, breakthroughTransitionLeaveActive: k5, breakthroughTransitionBackLeaveActive: w5, breakthroughTransitionEnterFrom: x5, breakthroughTransitionBackLeaveTo: T5, breakthroughTransitionLeaveTo: S5, breakthroughTransitionBackEnterFrom: $5, fadeTransitionEnterActive: I5, fadeTransitionLeaveActive: M5, fadeTransitionEnterFrom: C5, fadeTransitionLeaveTo: E5, fadeTransitionEnterTo: F5, fadeTransitionLeaveFrom: O5, routeTransitionEnterActive: D5, routeTransitionBackEnterActive: A5, routeTransitionLeaveActive: L5, routeTransitionBackLeaveActive: N5, routeTransitionEnterFrom: V5, routeTransitionBackLeaveTo: B5, routeTransitionLeaveTo: _5, routeTransitionBackEnterFrom: z5, tooltipTransitionEnterActive: R5, tooltipTransitionLeaveActive: P5, tooltipTransitionEnterFrom: W5, tooltipTransitionLeaveTo: H5, verticalWindowTransitionEnterActive: U5, verticalWindowTransitionBackEnterActive: q5, verticalWindowTransitionLeaveActive: Z5, verticalWindowTransitionBackLeaveActive: j5, verticalWindowTransitionBackLeaveTo: G5, verticalWindowTransitionEnterFrom: Y5, verticalWindowTransitionBackEnterFrom: J5, verticalWindowTransitionLeaveTo: X5, windowTransitionEnterActive: K5, windowTransitionBackEnterActive: Q5, windowTransitionLeaveActive: ew, windowTransitionBackLeaveActive: tw, windowTransitionBackLeaveTo: nw, windowTransitionEnterFrom: sw, windowTransitionBackEnterFrom: iw, windowTransitionLeaveTo: rw }, Sc = /* @__PURE__ */ q({
  __name: "FluxFadeTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (y(), W(Ms, {
      mode: t.mode,
      "enter-active-class": d(Tn).fadeTransitionEnterActive,
      "enter-from-class": d(Tn).fadeTransitionEnterFrom,
      "enter-to-class": d(Tn).fadeTransitionEnterTo,
      "leave-active-class": d(Tn).fadeTransitionLeaveActive,
      "leave-from-class": d(Tn).fadeTransitionLeaveFrom,
      "leave-to-class": d(Tn).fadeTransitionLeaveTo
    }, {
      default: j(() => [
        ce(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"]));
  }
}), aw = /* @__PURE__ */ q({
  __name: "FluxOverlayTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (y(), W(Ms, {
      mode: t.mode,
      "enter-active-class": d(ln).overlayTransitionEnterActive,
      "enter-from-class": d(ln).overlayTransitionEnterFrom,
      "leave-active-class": d(ln).overlayTransitionLeaveActive,
      "leave-to-class": d(ln).overlayTransitionLeaveTo
    }, {
      default: j(() => [
        ce(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
}), ow = /* @__PURE__ */ q({
  __name: "FluxTooltipTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (y(), W(Ms, {
      mode: t.mode,
      "enter-active-class": d(Tn).tooltipTransitionEnterActive,
      "enter-from-class": d(Tn).tooltipTransitionEnterFrom,
      "leave-active-class": d(Tn).tooltipTransitionLeaveActive,
      "leave-to-class": d(Tn).tooltipTransitionLeaveTo
    }, {
      default: j(() => [
        ce(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
});
const lw = "badge", uw = "spinner", cw = "badgeClose", dw = "icon", fw = "badgeDot", hw = "badgeIcon", mw = "badgeLabel", pw = "badgeGray badge", gw = "badgePrimary badge", yw = "badgeDanger badge", vw = "badgeInfo badge", bw = "badgeSuccess badge", kw = "badgeWarning badge", ww = "tag badge", xw = "tagClose badgeClose", Tw = "tagDot badgeDot", Sw = "tagIcon badgeIcon", $w = "tagLabel badgeLabel", Iw = "tagGray badgeGray badge tag badge", Mw = "tagPrimary badgePrimary badge tag badge", Cw = "tagDanger badgeDanger badge tag badge", Ew = "tagInfo badgeInfo badge tag badge", Fw = "tagSuccess badgeSuccess badge tag badge", Ow = "tagWarning badgeWarning badge tag badge";
var nn = { badge: lw, spinner: uw, badgeClose: cw, icon: dw, badgeDot: fw, badgeIcon: hw, badgeLabel: mw, badgeGray: pw, badgePrimary: gw, badgeDanger: yw, badgeInfo: vw, badgeSuccess: bw, badgeWarning: kw, tag: ww, tagClose: xw, tagDot: Tw, tagIcon: Sw, tagLabel: $w, tagGray: Iw, tagPrimary: Mw, tagDanger: Cw, tagInfo: Ew, tagSuccess: Fw, tagWarning: Ow }, Dw = /* @__PURE__ */ q({
  __name: "Anchor",
  props: {
    tagName: {}
  },
  setup(t) {
    return (e, n) => (y(), W(Yc(t.tagName), null, {
      default: j(() => [
        ce(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Aw = /* @__PURE__ */ q({
  __name: "AnchorPopup",
  props: {
    anchor: {},
    direction: { default: "vertical" },
    margin: { default: 12 },
    position: {},
    useAnchorWidth: { type: Boolean }
  },
  setup(t) {
    const e = ie(), n = Hn("popup"), s = On({
      x: 0,
      y: 0,
      width: null
    });
    es(() => {
      window.addEventListener("resize", a, { passive: !0 }), window.addEventListener("scroll", o, { capture: !0, passive: !0 });
    }), ni(() => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", o);
    }), Ep(n, () => {
      i();
    }, { childList: !0, subtree: !0 });
    function i() {
      const l = d(e), u = d(n);
      if (!l || !u)
        return;
      const { x: c, y: f, height: m, width: h } = l.getBoundingClientRect(), { height: p, width: b } = u.getBoundingClientRect();
      let S, k;
      switch (t.position) {
        case "top":
          S = c + h / 2 - b / 2, k = f - p - t.margin;
          break;
        case "top-left":
          S = c, k = f - p - t.margin;
          break;
        case "top-right":
          S = c - b + h, k = f - p - t.margin;
          break;
        case "left":
          S = c - b - t.margin, k = f + m / 2 - p / 2;
          break;
        case "left-top":
          S = c - b - t.margin, k = f;
          break;
        case "left-bottom":
          S = c - b - t.margin, k = f + m - p;
          break;
        case "right":
          S = c + h + t.margin, k = f + m / 2 - p / 2;
          break;
        case "right-top":
          S = c + h + t.margin, k = f;
          break;
        case "right-bottom":
          S = c + h + t.margin, k = f + m - p;
          break;
        case "bottom":
          S = c + h / 2 - b / 2, k = f + m + t.margin;
          break;
        case "bottom-left":
          S = c, k = f + m + t.margin;
          break;
        case "bottom-right":
          S = c - b + h, k = f + m + t.margin;
          break;
        default:
          t.direction === "horizontal" ? (S = c + h + t.margin, k = f + m / 2 - p / 2, S + b > innerWidth && (S = c - b - t.margin)) : (S = c + h / 2 - b / 2, k = f + m + t.margin, k + p + t.margin > innerHeight && (k = f - p - t.margin)), (k < 0 || k + p > innerHeight) && (k = innerHeight / 2 - p / 2);
          break;
      }
      s.x = S, s.y = k;
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
    return qo(() => {
      !t.anchor || !zi(t.anchor) && !t.anchor.$el || (e.value = zi(t.anchor) ? t.anchor : t.anchor.$el, requestAnimationFrame(() => {
        requestAnimationFrame(r), requestAnimationFrame(i);
      }));
    }), (l, u) => (y(), P("div", {
      ref: "popup",
      style: st({
        "--x": `${s.x}px`,
        "--y": `${s.y}px`,
        "--width": s.width ? `${s.width}px` : void 0
      })
    }, [
      ce(l.$slots, "default")
    ], 4));
  }
});
const { button: Lw, buttonIcon: Up, buttonLabel: Nw } = bs, Vw = "menu", Bw = "menuNormal menu", _w = "menuLarge menu", zw = "menuGroup", Rw = "menuGroupHorizontal menuGroup", Pw = "menuGroupVertical menuGroup", Ww = `menuItem ${Lw}`, Hw = "badge", Uw = `menuItemIcon ${Up}`, qw = `menuItemLabel ${Nw}`, Zw = "menuItemActive", jw = "menuItemDestructive", Gw = "menuItemHighlighted", Yw = "menuItemIndented", Jw = `menuItemSelectableIcon ${Up}`, Xw = "menuItemSelected", Kw = "menuItemCommand", Qw = "menuItemCommandIcon", e7 = "icon", t7 = "menuItemImage", n7 = "menuTitle", s7 = "menuSubHeader", i7 = "menuSubHeaderIcon", r7 = "menuSubHeaderLabel", a7 = "basePane", o7 = "divider", l7 = "separator", u7 = "expandableBody";
var Ke = { menu: Vw, menuNormal: Bw, menuLarge: _w, menuGroup: zw, menuGroupHorizontal: Rw, menuGroupVertical: Pw, menuItem: Ww, badge: Hw, menuItemIcon: Uw, menuItemLabel: qw, menuItemActive: Zw, menuItemDestructive: jw, menuItemHighlighted: Gw, menuItemIndented: Yw, menuItemSelectableIcon: Jw, menuItemSelected: Xw, menuItemCommand: Kw, menuItemCommandIcon: Qw, icon: e7, menuItemImage: t7, menuTitle: n7, menuSubHeader: s7, menuSubHeaderIcon: i7, menuSubHeaderLabel: r7, basePane: a7, divider: o7, separator: l7, expandableBody: u7 };
const c7 = ["src", "alt"];
var Cu = /* @__PURE__ */ q({
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
    const e = p0();
    return (n, s) => (y(), W(pl, qt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": d(Ke).menuItem,
      "css-class-icon": d(Ke).menuItemIcon,
      "css-class-label": d(Ke).menuItemLabel,
      "is-filled": "",
      role: t.isSelectable ? "menuitemradio" : "menuitem",
      class: {
        [d(Ke).menuItemActive]: t.isActive,
        [d(Ke).menuItemDestructive]: t.isDestructive,
        [d(Ke).menuItemHighlighted]: t.isHighlighted,
        [d(Ke).menuItemIndented]: t.isIndented,
        [d(Ke).menuItemSelected]: t.isSelectable && t.isSelected
      },
      "aria-checked": t.isSelectable ? t.isSelected : void 0,
      tabindex: t.tabindex,
      onClick: s[0] || (s[0] = (i) => n.$emit("click", i))
    }), Jc({ _: 2 }, [
      t.isSelectable && (!t.iconLeading || t.isSelected) ? {
        name: "iconLeading",
        fn: j(() => [
          z(It, {
            class: $(d(Ke).menuItemSelectableIcon),
            name: t.isSelected ? "circle-check" : void 0
          }, null, 8, ["class", "name"])
        ]),
        key: "0"
      } : t.imageSrc ? {
        name: "iconLeading",
        fn: j(() => [
          fe("img", {
            class: $(d(Ke).menuItemImage),
            src: t.imageSrc,
            alt: t.imageAlt ?? ""
          }, null, 10, c7)
        ]),
        key: "1"
      } : void 0,
      t.command || t.commandIcon || t.commandLoading || e.after ? {
        name: "after",
        fn: j(() => [
          t.commandLoading ? (y(), W(Xn, {
            key: 0,
            class: $(d(Ke).menuItemCommandIcon),
            size: 16
          }, null, 8, ["class"])) : (y(), P(ve, { key: 1 }, [
            t.command ? (y(), P("kbd", {
              key: 0,
              class: $(d(Ke).menuItemCommand)
            }, ye(t.command), 3)) : ne("", !0),
            t.commandIcon ? (y(), W(It, {
              key: 1,
              class: $(d(Ke).menuItemCommandIcon),
              name: t.commandIcon
            }, null, 8, ["class", "name"])) : ne("", !0)
          ], 64)),
          ce(n.$slots, "after")
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["css-class", "css-class-icon", "css-class-label", "role", "class", "aria-checked", "tabindex"]));
  }
});
const { basePane: d7 } = ml, f7 = "formInputGroup formInput", h7 = "buttonGroup", m7 = "button", p7 = "formInput", g7 = "formSelect formInput", y7 = "formStructureElement", v7 = "form formStructureElement", b7 = "pane", k7 = "formColumn formStructureElement", w7 = "formSection formStructureElement", x7 = "formGrid", T7 = "formRow", S7 = "formSectionTitle", $7 = "formField", I7 = "formFieldHeader", M7 = "formFieldLabel", C7 = "formFieldOptional", E7 = "formFieldValue", F7 = "formFieldCounter", O7 = "formFieldAddition", D7 = "formFieldAdditionIcon", A7 = "formFieldAdditionError formFieldAddition", L7 = "formFieldAdditionHint formFieldAddition", N7 = "isSecondary", V7 = "formInputDisabled formInput", B7 = "formInputEnabled formInput", _7 = "formInputIcon", z7 = "formInputIconTrailing formInputIcon", R7 = "formInputIconLeading formInputIcon", P7 = "formInputIconPasswordToggle formInputIconTrailing formInputIcon", W7 = "formInputNative", H7 = "formInputNativeHasIconLeading", U7 = "formInputNativeHasIconTrailing", q7 = "formInputAddition formInput", Z7 = "isCondensed", j7 = "secondaryButton", G7 = "buttonIcon", Y7 = "formDateInput", J7 = "formDateRangeInput formInput", X7 = "formDateTimeInput", K7 = "inputGroup", Q7 = "formTimeInput formDateInput", e9 = "isDisabled", t9 = "isFocused", n9 = "badge", s9 = "formSelectIcon", i9 = "formSelectInput", r9 = "formSelectPlaceholder", a9 = `formSelectPopup ${d7}`, o9 = "menuItem", l9 = "isKeyboardAction", u9 = "isSearchable", c9 = "menuSubHeader", d9 = "formSelectSelected", f9 = "buttonLabel", h9 = "formTextArea", m9 = "formTextAreaDisabled formInputDisabled formInput formTextArea", p9 = "formTextAreaEnabled formInputEnabled formInput formTextArea", g9 = "checkbox", y9 = "checkboxElement", v9 = "checkboxNative", b9 = "icon", k9 = "checkboxLabel", w9 = "quantitySelector", x9 = "quantitySelectorButton", T9 = "quantitySelectorInput formInput", S9 = "pinInput", $9 = "pinInputField", I9 = "pinInputEnabled pinInput", M9 = "pinInputDisabled pinInput", C9 = "toggle", E9 = "isChecked", F9 = "toggleInput", O9 = "isSwitch", D9 = "toggleIcon", A9 = "toggleIconOn toggleIcon", L9 = "toggleIconOff toggleIcon";
var ge = { formInputGroup: f7, buttonGroup: h7, button: m7, formInput: p7, formSelect: g7, formStructureElement: y7, form: v7, pane: b7, formColumn: k7, formSection: w7, formGrid: x7, formRow: T7, formSectionTitle: S7, formField: $7, formFieldHeader: I7, formFieldLabel: M7, formFieldOptional: C7, formFieldValue: E7, formFieldCounter: F7, formFieldAddition: O7, formFieldAdditionIcon: D7, formFieldAdditionError: A7, formFieldAdditionHint: L7, isSecondary: N7, formInputDisabled: V7, formInputEnabled: B7, formInputIcon: _7, formInputIconTrailing: z7, formInputIconLeading: R7, formInputIconPasswordToggle: P7, formInputNative: W7, formInputNativeHasIconLeading: H7, formInputNativeHasIconTrailing: U7, formInputAddition: q7, isCondensed: Z7, secondaryButton: j7, buttonIcon: G7, formDateInput: Y7, formDateRangeInput: J7, formDateTimeInput: X7, inputGroup: K7, formTimeInput: Q7, isDisabled: e9, isFocused: t9, badge: n9, formSelectIcon: s9, formSelectInput: i9, formSelectPlaceholder: r9, formSelectPopup: a9, menuItem: o9, isKeyboardAction: l9, isSearchable: u9, menuSubHeader: c9, formSelectSelected: d9, buttonLabel: f9, formTextArea: h9, formTextAreaDisabled: m9, formTextAreaEnabled: p9, checkbox: g9, checkboxElement: y9, checkboxNative: v9, icon: b9, checkboxLabel: k9, quantitySelector: w9, quantitySelectorButton: x9, quantitySelectorInput: T9, pinInput: S9, pinInputField: $9, pinInputEnabled: I9, pinInputDisabled: M9, toggle: C9, isChecked: E9, toggleInput: F9, isSwitch: O9, toggleIcon: D9, toggleIconOn: A9, toggleIconOff: L9 };
const N9 = ["aria-disabled"], V9 = ["id", "autocomplete", "autofocus", "aria-disabled", "disabled", "max", "maxlength", "min", "placeholder", "readonly", "step", "type", "value"];
var Lr = /* @__PURE__ */ q({
  __name: "FluxFormInput",
  props: /* @__PURE__ */ mn({
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
  emits: /* @__PURE__ */ mn(["blur", "focus", "showPicker"], ["update:modelValue"]),
  setup(t, { expose: e, emit: n }) {
    const s = n, i = Dt(t, "modelValue"), r = Ki(Yn(() => t.disabled)), a = Hn("input"), { id: o } = wd(), l = ie(null), u = ie(t.type);
    function c() {
      Jn(a)?.blur();
    }
    function f() {
      Jn(a)?.focus();
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
    function b(k) {
      const F = k.target.value;
      switch (t.type) {
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          const T = qe.fromISO(F);
          if (!T.isValid)
            return;
          i.value = T;
          break;
        case "number":
          i.value = Number(F);
          break;
        default:
          i.value = F;
          break;
      }
    }
    function S(k) {
      ["date", "datetime-local", "month", "week"].includes(t.type) && k.key === " " && (s("showPicker"), k.preventDefault());
    }
    return Ue([i, () => t.type], ([k, F]) => {
      if (!k && k !== 0) {
        l.value = null;
        return;
      }
      if (qe.isDateTime(k)) {
        const T = k.toISO();
        switch (F) {
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
      l.value = k.toString();
    }, { immediate: !0 }), Ue([a, () => t.pattern, l], ([k, F, T], O, I) => {
      if (!k || !F)
        return;
      const N = J3[F](k);
      T && (N.value = T, i.value = N.value), I(() => N.destroy());
    }, { immediate: !0 }), Ue(() => t.type, (k) => u.value = k), e({
      blur: c,
      focus: f
    }), (k, F) => (y(), P("div", {
      class: $(d(Xt)(
        d(r) ? d(ge).formInputDisabled : d(ge).formInputEnabled,
        t.isCondensed && d(ge).isCondensed,
        t.isSecondary && d(ge).isSecondary
      )),
      "aria-disabled": d(r) ? !0 : void 0
    }, [
      fe("input", {
        ref: "input",
        class: $(d(Xt)(
          d(ge).formInputNative,
          (!!t.iconTrailing || t.type === "password") && d(ge).formInputNativeHasIconTrailing,
          !!t.iconLeading && d(ge).formInputNativeHasIconLeading
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
        onBlur: F[0] || (F[0] = (T) => h()),
        onFocus: F[1] || (F[1] = (T) => p()),
        onInput: b,
        onKeydown: S
      }, null, 42, V9),
      t.iconLeading ? (y(), W(It, {
        key: 0,
        class: $(d(ge).formInputIconLeading),
        name: t.iconLeading,
        size: 18
      }, null, 8, ["class", "name"])) : ne("", !0),
      t.type === "password" ? (y(), W(It, {
        key: 1,
        class: $(d(ge).formInputIconPasswordToggle),
        name: u.value === "password" ? "eye" : "eye-slash",
        size: 18,
        onClick: F[2] || (F[2] = (T) => m())
      }, null, 8, ["class", "name"])) : t.iconTrailing ? (y(), W(It, {
        key: 2,
        class: $(d(ge).formInputIconTrailing),
        name: t.iconTrailing,
        size: 18
      }, null, 8, ["class", "name"])) : ne("", !0),
      t.isLoading ? (y(), W(Xn, {
        key: 3,
        class: $(d(ge).formInputIconTrailing),
        size: 18
      }, null, 8, ["class"])) : ne("", !0)
    ], 10, N9));
  }
}), B9 = /* @__PURE__ */ q({
  __name: "FluxMenuGroup",
  props: {
    isHorizontal: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(t.isHorizontal ? d(Ke).menuGroupHorizontal : d(Ke).menuGroupVertical),
      role: "group"
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
}), Bh = /* @__PURE__ */ q({
  __name: "FluxMenuSubHeader",
  props: {
    iconLeading: {},
    iconTrailing: {},
    label: {}
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(Ke).menuSubHeader),
      role: "presentation"
    }, [
      t.iconLeading ? (y(), W(It, {
        key: 0,
        class: $(d(Ke).menuSubHeaderIcon),
        name: t.iconLeading
      }, null, 8, ["class", "name"])) : ne("", !0),
      fe("span", {
        class: $(d(Ke).menuSubHeaderLabel)
      }, ye(t.label), 3),
      t.iconTrailing ? (y(), W(It, {
        key: 1,
        class: $(d(Ke).menuSubHeaderIcon),
        name: t.iconTrailing
      }, null, 8, ["class", "name"])) : ne("", !0)
    ], 2));
  }
}), _h = /* @__PURE__ */ q({
  __name: "FluxMenu",
  props: {
    isLarge: { type: Boolean }
  },
  setup(t) {
    const e = Hn("element");
    return t3(e, {
      direction: "vertical"
    }), (n, s) => (y(), P("nav", {
      ref: "element",
      class: $(t.isLarge ? d(Ke).menuLarge : d(Ke).menuNormal),
      role: "menu",
      "aria-orientation": "vertical"
    }, [
      ce(n.$slots, "default")
    ], 2));
  }
}), _9 = /* @__PURE__ */ q({
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
    return (i, r) => (y(), W(Pp, {
      class: $(d(Xt)(
        t.color === "gray" && d(nn).tagGray,
        t.color === "primary" && d(nn).tagPrimary,
        t.color === "danger" && d(nn).tagDanger,
        t.color === "info" && d(nn).tagInfo,
        t.color === "success" && d(nn).tagSuccess,
        t.color === "warning" && d(nn).tagWarning
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
      default: j(() => [
        t.isLoading ? (y(), W(Xn, {
          key: 0,
          class: $(d(nn).tagIcon),
          size: 16
        }, null, 8, ["class"])) : t.dot ? (y(), P("span", {
          key: 1,
          class: $(d(nn).tagDot)
        }, null, 2)) : t.icon ? (y(), W(It, {
          key: 2,
          class: $(d(nn).tagIcon),
          name: t.icon,
          size: 16
        }, null, 8, ["class", "name"])) : ne("", !0),
        fe("span", {
          class: $(d(nn).tagLabel)
        }, ye(t.label), 3),
        !t.isClickable && t.isDeletable ? (y(), P("button", {
          key: 3,
          class: $(d(nn).tagClose),
          type: "button",
          onClick: r[0] || (r[0] = (a) => s())
        }, [
          z(It, { name: "xmark" })
        ], 2)) : ne("", !0)
      ]),
      _: 1
    }, 8, ["class", "component-type", "tabindex", "href", "rel", "target", "to"]));
  }
});
const cr = -1;
var z9 = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "SelectBase",
  props: /* @__PURE__ */ mn({
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
  emits: /* @__PURE__ */ mn(["keyDown", "deselect", "select", "search", "close", "open"], ["update:searchQuery"]),
  setup(t, { emit: e }) {
    const n = e, s = Dt(t, "searchQuery"), i = Ki(Yn(() => t.disabled)), { id: r } = wd(), a = sa(), o = Hn("anchor"), l = Hn("anchorPopup"), u = Hn("optionElements"), c = Hn("searchInputElement"), f = ie(cr), m = ie(!1), h = ie(!1), p = $e(() => Jn(c) ?? Jn(o)), b = $e(() => d(S)[d(f)]?.value), S = $e(() => t.options.map((N) => N[1]).flat());
    Fh([o, l], h, () => h.value = !1), Fh(o, h, () => d(p)?.focus());
    function k(N) {
      n("deselect", N), qs(() => d(p)?.focus());
    }
    function F(N) {
      n("select", N), !t.isMultiple && (h.value = !1), f.value = cr, s.value = "", qs(() => d(p)?.focus());
    }
    function T() {
      d(i) || (h.value = !d(h));
    }
    function O(N) {
      if (n("keyDown", N), !d(h)) {
        N.key === "Enter" && (h.value = !0);
        return;
      }
      if (m.value = !0, d(f) === cr && ["ArrowDown", "ArrowUp"].includes(N.key)) {
        const w = d(u)?.findIndex((x) => "isActive" in x.$props && x.$props.isActive);
        f.value = w ?? cr;
      }
      switch (N.key) {
        case "ArrowUp":
          f.value = Math.max(0, d(f) - 1);
          break;
        case "ArrowDown":
          f.value = Math.min(d(S).length - 1, d(f) + 1);
          break;
        case "Backspace":
          if (d(s).length > 0 || t.selected.length === 0)
            return;
          k(t.selected[t.selected.length - 1].value);
          break;
        case "Enter":
          const w = d(b);
          w && F(w);
          break;
        case "Escape":
          h.value = !1;
          break;
        case "Tab":
          h.value = !1;
          return;
        default:
          N.key.length === 1 ? f.value = d(S).findIndex((x) => x.label.toLowerCase().startsWith(N.key.toLowerCase())) : f.value = -1;
          return;
      }
      N.preventDefault();
    }
    function I() {
      m.value = !1;
    }
    return Ue(f, (N) => {
      d(u)[N]?.$el.scrollIntoView({
        block: "center"
      });
    }), Ue(h, (N) => {
      if (!N) {
        n("close");
        return;
      }
      qs(() => {
        d(c)?.focus();
      }), qs(() => {
        const Z = d(u);
        if (!Z || t.isMultiple)
          return;
        const w = Z.findIndex((B) => "isActive" in B.$props && B.$props.isActive), x = Z[w];
        x && x.$el.scrollIntoView({
          block: "center"
        });
      }), n("open");
    }), Ue(s, (N) => n("search", N)), Ue([() => t.options, h], () => f.value = cr), (N, Z) => (y(), P(ve, null, [
      z(Dw, qt({ ref: "anchor" }, N.$attrs, {
        class: d(Xt)(
          d(ge).formSelect,
          d(i) && d(ge).isDisabled,
          h.value && d(ge).isFocused,
          t.isSearchable && d(ge).isSearchable
        ),
        id: d(r),
        "aria-disabled": d(i) ? !0 : void 0,
        tabindex: "0",
        "tag-name": "div",
        onClick: Z[0] || (Z[0] = (w) => T()),
        onKeydown: O,
        onKeyup: I
      }), {
        default: j(() => [
          !t.isMultiple && t.selected[0] ? (y(), W(Cu, {
            key: 0,
            class: $(d(ge).formSelectSelected),
            command: t.selected[0].command,
            "command-icon": t.selected[0].commandIcon,
            "icon-leading": t.selected[0].icon,
            "image-alt": t.selected[0].imageAlt,
            "image-src": t.selected[0].imageSrc,
            label: t.selected[0].label,
            tabindex: "-1"
          }, null, 8, ["class", "command", "command-icon", "icon-leading", "image-alt", "image-src", "label"])) : t.isMultiple && t.selected[0] ? (y(!0), P(ve, { key: 1 }, dt(t.selected, (w) => (y(), W(_9, {
            key: w.value ?? "null option",
            label: w.label,
            "is-deletable": "",
            onDelete: (x) => k(w.value)
          }, null, 8, ["label", "onDelete"]))), 128)) : t.placeholder ? (y(), P("span", {
            key: 2,
            class: $(d(ge).formSelectPlaceholder)
          }, ye(t.placeholder), 3)) : ne("", !0),
          t.isLoading ? (y(), W(Xn, {
            key: 3,
            class: $(d(ge).formSelectIcon),
            size: 16
          }, null, 8, ["class"])) : (y(), W(It, {
            key: 4,
            class: $(d(ge).formSelectIcon),
            name: "angle-down"
          }, null, 8, ["class"]))
        ]),
        _: 1
      }, 16, ["class", "id", "aria-disabled"]),
      (y(), W(n0, { to: "body" }, [
        z(d(Sc), null, {
          default: j(() => [
            h.value && !d(i) ? (y(), W(Aw, {
              key: 0,
              ref: "anchorPopup",
              class: $(d(Xt)(
                d(ge).formSelectPopup,
                m.value && d(ge).isKeyboardAction,
                t.isSearchable && d(ge).isSearchable
              )),
              anchor: o.value,
              direction: "vertical",
              "use-anchor-width": ""
            }, {
              default: j(() => [
                t.isSearchable ? (y(), W(Lr, {
                  key: 0,
                  modelValue: s.value,
                  "onUpdate:modelValue": Z[1] || (Z[1] = (w) => s.value = w),
                  ref: "searchInputElement",
                  "auto-complete": "off",
                  class: $(d(ge).formSelectInput),
                  type: "search",
                  "icon-trailing": "magnifying-glass",
                  placeholder: d(a)("flux.search"),
                  onKeydown: O
                }, null, 8, ["modelValue", "class", "placeholder"])) : ne("", !0),
                !t.isLoading && t.options.length === 0 ? (y(), W(_h, { key: 1 }, {
                  default: j(() => [
                    z(Bh, {
                      label: d(a)("flux.noItems")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })) : (y(), W(_h, { key: 2 }, {
                  default: j(() => [
                    (y(!0), P(ve, null, dt(t.options, ([w, x], B) => (y(), P(ve, {
                      key: `group-${B}`
                    }, [
                      z(B9, null, {
                        default: j(() => [
                          d(kr)(w) ? (y(), W(Bh, {
                            key: 0,
                            "icon-leading": w.icon,
                            label: w.label
                          }, null, 8, ["icon-leading", "label"])) : ne("", !0),
                          (y(!0), P(ve, null, dt(x, (_, A) => (y(), P(ve, null, [
                            d(Ar)(_) ? (y(), W(Cu, {
                              ref_for: !0,
                              ref: "optionElements",
                              key: A,
                              command: _.command,
                              "command-icon": _.commandIcon,
                              "icon-leading": _.icon,
                              "image-alt": _.imageAlt,
                              "image-src": _.imageSrc,
                              "is-active": !!t.selected.find((se) => se.value === _.value),
                              "is-highlighted": b.value === _.value,
                              label: _.label,
                              type: "button",
                              onClick: (se) => F(_.value)
                            }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : ne("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1024),
                      d(Ar)(w) ? (y(), W(Cu, {
                        ref_for: !0,
                        ref: "optionElements",
                        key: `item-${B}`,
                        command: w.command,
                        "command-icon": w.commandIcon,
                        "icon-leading": w.icon,
                        "image-alt": w.imageAlt,
                        "image-src": w.imageSrc,
                        "is-active": !!t.selected.find((_) => _.value === w.value),
                        "is-highlighted": b.value === w.value,
                        label: w.label,
                        type: "button",
                        onClick: (_) => F(w.value)
                      }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : ne("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["class", "anchor"])) : ne("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
});
const R9 = "divider", P9 = "dividerContentStart divider", W9 = "dividerContentCenter divider", H9 = "dividerContentEnd divider", U9 = "dividerContent", q9 = "dividerLine", Z9 = "separator", j9 = "separatorHorizontal separator", G9 = "separatorVertical separator";
var zh = { divider: R9, dividerContentStart: P9, dividerContentCenter: W9, dividerContentEnd: H9, dividerContent: U9, dividerLine: q9, separator: Z9, separatorHorizontal: j9, separatorVertical: G9 };
const Y9 = ["aria-orientation"];
var J9 = /* @__PURE__ */ q({
  __name: "FluxSeparator",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(t.direction === "horizontal" ? d(zh).separatorHorizontal : d(zh).separatorVertical),
      role: "separator",
      "aria-orientation": t.direction
    }, null, 10, Y9));
  }
});
const X9 = { key: 1 };
var Rh = /* @__PURE__ */ q({
  __name: "FluxFormFieldAddition",
  props: {
    icon: {},
    message: {},
    mode: { default: "hint" }
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(Xt)(
        t.mode === "error" && d(ge).formFieldAdditionError,
        t.mode === "hint" && d(ge).formFieldAdditionHint
      )),
      role: "alert"
    }, [
      t.icon ? (y(), W(It, {
        key: 0,
        class: $(d(ge).formFieldAdditionIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : ne("", !0),
      t.message ? (y(), P("span", X9, ye(t.message), 1)) : ne("", !0),
      ce(e.$slots, "default")
    ], 2));
  }
});
const K9 = ["for"];
var Hs = /* @__PURE__ */ q({
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
    const e = p0(), n = jc(), s = sa();
    return $s(W0, {
      id: n
    }), (i, r) => (y(), P("div", {
      class: $(d(ge).formField)
    }, [
      fe("label", {
        for: d(n),
        class: $(d(ge).formFieldHeader)
      }, [
        fe("span", {
          class: $(d(ge).formFieldLabel)
        }, ye(t.label), 3),
        t.isOptional ? (y(), P("span", {
          key: 0,
          class: $(d(ge).formFieldOptional)
        }, " (" + ye(d(s)("flux.optional")) + ") ", 3)) : ne("", !0),
        "value" in e ? (y(), P("span", {
          key: 1,
          class: $(d(ge).formFieldValue)
        }, [
          ce(i.$slots, "value", Nl(Wa({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: d(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
        ], 2)) : ne("", !0)
      ], 10, K9),
      ce(i.$slots, "default", Nl(Wa({ id: d(n) }))),
      t.currentLength && t.maxLength && t.maxLength > 0 ? (y(), P("span", {
        key: 0,
        class: $(d(ge).formFieldCounter)
      }, ye(t.currentLength) + " / " + ye(t.maxLength), 3)) : ne("", !0),
      t.error ? (y(), W(Rh, {
        key: 1,
        icon: "circle-exclamation",
        mode: "error",
        message: t.error
      }, null, 8, ["message"])) : ne("", !0),
      t.hint ? (y(), W(Rh, {
        key: 2,
        icon: "circle-info",
        message: t.hint
      }, null, 8, ["message"])) : ne("", !0),
      ce(i.$slots, "addition", Nl(Wa({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: d(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
    ], 2));
  }
}), vl = /* @__PURE__ */ q({
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
    return (e, n) => (y(), W(pl, qt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": d(Qs).primaryButton,
      "css-class-icon": d(Qs).primaryButtonIcon,
      "css-class-label": d(Qs).primaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), Jc({ _: 2 }, [
      dt(d(Wp), (s) => ({
        name: s,
        fn: j(() => [
          ce(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
}), Ph = /* @__PURE__ */ q({
  __name: "FluxFormSelect",
  props: /* @__PURE__ */ mn({
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
    const e = Dt(t, "searchQuery"), n = Dt(t, "modelValue"), s = Ki(Yn(() => t.disabled)), { groups: i, selected: r, values: a } = _4(n, t.isMultiple, Yn(() => t.options), e);
    function o(u) {
      t.isMultiple && (n.value = d(a).filter((c) => c !== u));
    }
    function l(u) {
      t.isMultiple ? n.value = [...d(a), u] : n.value = u;
    }
    return (u, c) => (y(), W(d(z9), {
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
}), Q9 = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "FluxDisabled",
  props: {
    disabled: { type: Boolean, default: !0 }
  },
  setup(t) {
    return $s(P0, Yn(() => t.disabled)), (e, n) => ce(e.$slots, "default");
  }
}), ex = /* @__PURE__ */ q({
  __name: "FluxFormColumn",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(ge).formColumn)
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
}), Td = /* @__PURE__ */ q({
  __name: "FluxPaneFooter",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(In).paneFooter)
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const tx = ["aria-disabled"];
var nx = /* @__PURE__ */ q({
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
    return (i, r) => (y(), P("form", {
      class: $(d(ge).form),
      "aria-disabled": t.disabled ? !0 : void 0,
      onSubmit: r[0] || (r[0] = td((a) => s(), ["prevent"]))
    }, [
      z(Q9, { disabled: t.disabled }, {
        default: j(() => [
          ce(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled"])
    ], 42, tx));
  }
}), sx = /* @__PURE__ */ q({
  __name: "FluxFormInputGroup",
  props: {
    isSecondary: { type: Boolean },
    isCondensed: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(Xt)(
        d(ge).formInputGroup,
        t.isCondensed && d(ge).isCondensed,
        t.isSecondary && d(ge).isSecondary
      )),
      role: "textbox"
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const ix = ["id", "autocomplete", "autofocus", "disabled", "readonly", "maxlength", "placeholder", "aria-disabled"];
var rx = /* @__PURE__ */ q({
  __name: "FluxFormTextArea",
  props: /* @__PURE__ */ mn({
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
  emits: /* @__PURE__ */ mn(["blur", "focus"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const n = e, s = Dt(t, "modelValue"), i = Ki(Yn(() => t.disabled)), { id: r } = wd();
    return (a, o) => qc((y(), P("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (l) => s.value = l),
      ref: "input",
      class: $(d(i) ? d(ge).formTextAreaDisabled : d(ge).formTextAreaEnabled),
      id: d(r),
      autocomplete: t.autoComplete,
      autofocus: t.autoFocus,
      disabled: d(i),
      readonly: t.isReadonly,
      maxlength: t.maxLength,
      placeholder: t.placeholder,
      style: st({
        "--rows": t.rows
      }),
      "aria-disabled": d(i) ? !0 : void 0,
      onBlur: o[1] || (o[1] = (l) => n("blur")),
      onFocus: o[2] || (o[2] = (l) => n("focus"))
    }, null, 46, ix)), [
      [co, s.value]
    ]);
  }
}), Ya = q({
  emits: ["close"],
  inheritAttrs: !1,
  props: {
    isCloseable: { default: !1, type: Boolean },
    size: { default: "small", type: String }
  },
  setup(t, { attrs: e, emit: n, slots: s }) {
    return E3(
      e,
      t,
      n,
      s,
      Xt(
        t.size === "small" && ln.overlaySmall,
        t.size === "medium" && ln.overlayMedium,
        t.size === "large" && ln.overlayLarge
      ),
      aw
    );
  }
});
const ax = { key: 0 }, ox = { key: 1 };
var bl = /* @__PURE__ */ q({
  __name: "FluxPaneHeader",
  props: {
    icon: {},
    subTitle: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(d(In).paneHeader)
    }, [
      ce(e.$slots, "before"),
      t.icon ? (y(), W(It, {
        key: 0,
        class: $(d(In).paneHeaderIcon),
        size: 20,
        name: t.icon
      }, null, 8, ["class", "name"])) : ne("", !0),
      t.title || t.subTitle ? (y(), P("div", {
        key: 1,
        class: $(d(In).paneHeaderCaption)
      }, [
        t.title ? (y(), P("strong", ax, ye(t.title), 1)) : ne("", !0),
        t.subTitle ? (y(), P("span", ox, ye(t.subTitle), 1)) : ne("", !0)
      ], 2)) : ne("", !0),
      ce(e.$slots, "after")
    ], 2));
  }
}), lx = /* @__PURE__ */ q({
  __name: "FluxAlert",
  props: {
    alert: {}
  },
  setup(t) {
    const e = sa();
    return (n, s) => (y(), W(gl, null, {
      default: j(() => [
        z(bl, {
          icon: t.alert.icon,
          title: t.alert.title
        }, null, 8, ["icon", "title"]),
        z(Gr, {
          innerHTML: t.alert.message
        }, null, 8, ["innerHTML"]),
        z(Td, null, {
          default: j(() => [
            z(yl),
            z(vl, {
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
}), ux = /* @__PURE__ */ q({
  __name: "FluxConfirm",
  props: {
    confirm: {}
  },
  setup(t) {
    const e = sa();
    return (n, s) => (y(), W(gl, null, {
      default: j(() => [
        z(bl, {
          icon: t.confirm.icon,
          title: t.confirm.title
        }, null, 8, ["icon", "title"]),
        z(Gr, {
          innerHTML: t.confirm.message
        }, null, 8, ["innerHTML"]),
        z(Td, null, {
          default: j(() => [
            z(yl),
            z(Wi, {
              label: d(e)("flux.cancel"),
              onClick: s[0] || (s[0] = (i) => t.confirm.onCancel())
            }, null, 8, ["label"]),
            z(vl, {
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
}), cx = /* @__PURE__ */ q({
  __name: "FluxPrompt",
  props: {
    prompt: {}
  },
  setup(t) {
    const e = Hn("input"), n = sa(), s = ie(""), i = $e(() => d(s).trim().length > 0);
    es(() => {
      const a = d(e);
      requestAnimationFrame(() => a?.$el.querySelector("input")?.focus());
    });
    function r(a) {
      !d(i) || a.key !== "Enter" || t.prompt.onConfirm(d(s));
    }
    return (a, o) => (y(), W(gl, null, {
      default: j(() => [
        z(bl, {
          icon: t.prompt.icon,
          title: t.prompt.title
        }, null, 8, ["icon", "title"]),
        z(Gr, {
          innerHTML: t.prompt.message
        }, null, 8, ["innerHTML"]),
        z(Gr, null, {
          default: j(() => [
            z(Hs, {
              label: t.prompt.fieldLabel
            }, {
              default: j(() => [
                z(Lr, {
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
        z(Td, null, {
          default: j(() => [
            z(yl),
            z(Wi, {
              label: d(n)("flux.cancel"),
              onClick: o[1] || (o[1] = (l) => t.prompt.onCancel())
            }, null, 8, ["label"]),
            z(vl, {
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
}), dx = /* @__PURE__ */ q({
  __name: "FluxOverlayProvider",
  setup(t) {
    const { alerts: e, confirms: n, prompts: s } = la();
    return (i, r) => (y(), P(ve, null, [
      fe("div", {
        class: $(d(ln).overlayProvider)
      }, [
        fe("div", {
          class: $(d(ln).overlayShade)
        }, null, 2)
      ], 2),
      z(Ya, { size: "medium" }, {
        default: j(() => [
          (y(!0), P(ve, null, dt(d(e), (a) => (y(), W(lx, {
            key: a.id,
            alert: a
          }, null, 8, ["alert"]))), 128))
        ]),
        _: 1
      }),
      z(Ya, { size: "medium" }, {
        default: j(() => [
          (y(!0), P(ve, null, dt(d(n), (a) => (y(), W(ux, {
            key: a.id,
            confirm: a
          }, null, 8, ["confirm"]))), 128))
        ]),
        _: 1
      }),
      z(Ya, { size: "medium" }, {
        default: j(() => [
          (y(!0), P(ve, null, dt(d(s), (a) => (y(), W(cx, {
            key: a.id,
            prompt: a
          }, null, 8, ["prompt"]))), 128))
        ]),
        _: 1
      })
    ], 64));
  }
});
const fx = "progressBar", hx = "progressBarTrack", mx = "progressBarValue", px = "progressBarValueComplete progressBarValue", gx = "progressBarValueIncomplete progressBarValue", yx = "progressBarTrackIndeterminate progressBarTrack", vx = "progressBarIndeterminate", bx = "progressBarInfo", kx = "progressBarProgress", wx = "progressBarStatus", xx = "basePaneStructure";
var us = { progressBar: fx, progressBarTrack: hx, progressBarValue: mx, progressBarValueComplete: px, progressBarValueIncomplete: gx, progressBarTrackIndeterminate: yx, progressBarIndeterminate: vx, progressBarInfo: bx, progressBarProgress: kx, progressBarStatus: wx, basePaneStructure: xx }, Tx = /* @__PURE__ */ q({
  __name: "FluxProgressBar",
  props: {
    isIndeterminate: { type: Boolean },
    max: { default: 1 },
    min: { default: 0 },
    status: {},
    value: {}
  },
  setup(t) {
    const e = $e(() => t.isIndeterminate ? 0 : ((t.value ?? t.min) - t.min) / (t.max - t.min)), n = $e(() => new Intl.NumberFormat(navigator.language, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(d(e) ?? 0));
    return (s, i) => (y(), W(Hp, {
      class: $(d(us).progressBar),
      gap: 6,
      role: "progressbar",
      "aria-valuenow": t.value,
      "aria-valuemax": t.max,
      "aria-valuemin": t.min
    }, {
      default: j(() => [
        fe("div", {
          class: $(t.isIndeterminate ? d(us).progressBarTrackIndeterminate : d(us).progressBarTrack)
        }, [
          fe("div", {
            class: $(e.value >= 1 ? d(us).progressBarValueComplete : d(us).progressBarValueIncomplete),
            style: st({
              width: `${t.isIndeterminate ? 100 : e.value * 100}%`
            })
          }, null, 6)
        ], 2),
        t.status ? (y(), P("div", {
          key: 0,
          class: $(d(us).progressBarInfo)
        }, [
          z(d(Sc), null, {
            default: j(() => [
              (y(), P("span", {
                key: t.status,
                class: $(d(us).progressBarStatus)
              }, ye(t.status), 3))
            ]),
            _: 1
          }),
          z(d(Sc), null, {
            default: j(() => [
              t.isIndeterminate ? ne("", !0) : (y(), P("span", {
                key: 0,
                class: $(d(us).progressBarProgress)
              }, ye(n.value), 3))
            ]),
            _: 1
          })
        ], 2)) : ne("", !0)
      ]),
      _: 1
    }, 8, ["class", "aria-valuenow", "aria-valuemax", "aria-valuemin"]));
  }
});
const Sx = ["disabled", "max", "min", "step"];
var $x = /* @__PURE__ */ q({
  __name: "FluxQuantitySelector",
  props: /* @__PURE__ */ mn({
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
    const e = Dt(t, "modelValue"), n = Ki(Yn(() => t.disabled)), s = Hn("input"), i = ie(0);
    function r() {
      d(n) || (e.value = Math.max(t.min, d(e) - t.step));
    }
    function a() {
      d(n) || (e.value = Math.min(t.max, d(e) + t.step));
    }
    function o() {
      const l = Jn(s);
      !l || isNaN(l.valueAsNumber) || (i.value = 0, requestAnimationFrame(() => {
        i.value = Math.max(51, l.scrollWidth + 30);
      }));
    }
    return qo(() => {
      const l = d(e);
      if (l > t.max || l < t.min) {
        e.value = Math.min(t.max, Math.max(t.min, l));
        return;
      }
      o();
    }), (l, u) => (y(), W(D8, {
      class: $(d(ge).quantitySelector),
      "aria-disabled": d(n) ? !0 : void 0
    }, {
      default: j(() => [
        z(Wi, {
          class: $(d(ge).quantitySelectorButton),
          disabled: d(n) || e.value <= t.min,
          "icon-leading": "minus",
          tabindex: "-1",
          onClick: r
        }, null, 8, ["class", "disabled"]),
        qc(fe("input", {
          ref: "input",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => e.value = c),
          class: $(d(ge).quantitySelectorInput),
          style: st({
            width: `${i.value}px`
          }),
          disabled: d(n),
          tabindex: "0",
          type: "number",
          max: t.max,
          min: t.min,
          step: t.step
        }, null, 14, Sx), [
          [co, e.value]
        ]),
        z(Wi, {
          class: $(d(ge).quantitySelectorButton),
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
const { basePane: li } = ml, Ix = `snackbar ${li}`, Mx = "action", Cx = "progressBar", Ex = "snackbarContent", Fx = "icon", Ox = "spinner", Dx = "snackbarBody", Ax = "snackbarMessage", Lx = "snackbarSubMessage", Nx = "snackbarTitle", Vx = "snackbarAction", Bx = "snackbarActions", _x = `snackbarGray snackbar ${li}`, zx = `snackbarPrimary snackbar ${li}`, Rx = "spinnerEffect", Px = "spinnerValue", Wx = `snackbarDanger snackbar ${li}`, Hx = `snackbarInfo snackbar ${li}`, Ux = `snackbarSuccess snackbar ${li}`, qx = `snackbarWarning snackbar ${li}`, Zx = "snackbars", jx = "snackbarsEnterActive", Gx = "snackbarsLeaveActive", Yx = "snackbarsMove", Jx = "snackbarsEnterFrom", Xx = "snackbarsLeaveTo";
var rt = { snackbar: Ix, action: Mx, progressBar: Cx, snackbarContent: Ex, icon: Fx, spinner: Ox, snackbarBody: Dx, snackbarMessage: Ax, snackbarSubMessage: Lx, snackbarTitle: Nx, snackbarAction: Vx, snackbarActions: Bx, snackbarGray: _x, snackbarPrimary: zx, spinnerEffect: Rx, spinnerValue: Px, snackbarDanger: Wx, snackbarInfo: Hx, snackbarSuccess: Ux, snackbarWarning: qx, snackbars: Zx, snackbarsEnterActive: jx, snackbarsLeaveActive: Gx, snackbarsMove: Yx, snackbarsEnterFrom: Jx, snackbarsLeaveTo: Xx };
const Kx = ["onClick"];
var Qx = /* @__PURE__ */ q({
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
    const n = e, s = Dn(), i = ie(null), r = $e(() => t.actions && Object.entries(t.actions).length > 0);
    Gc(() => {
      i.value && So(i.value);
    });
    function a(l) {
      n("action", l);
    }
    function o() {
      n("close");
    }
    return qo(() => {
      i.value && Vp(i.value, s.props);
    }), Ue(() => t.isRendered, () => {
      if (t.isRendered) {
        i.value && So(i.value);
        return;
      }
      const l = {
        ...s.props,
        onAction: a,
        onClose: o
      };
      i.value = bd(l);
    }, { immediate: !0 }), (l, u) => t.isRendered ? (y(), P("div", {
      key: 0,
      class: $(d(Xt)(
        t.color === "gray" && d(rt).snackbarGray,
        t.color === "primary" && d(rt).snackbarPrimary,
        t.color === "danger" && d(rt).snackbarDanger,
        t.color === "info" && d(rt).snackbarInfo,
        t.color === "success" && d(rt).snackbarSuccess,
        t.color === "warning" && d(rt).snackbarWarning
      ))
    }, [
      fe("div", {
        class: $(d(rt).snackbarContent)
      }, [
        t.isLoading ? (y(), W(Xn, {
          key: 0,
          size: 18
        })) : t.icon ? (y(), W(It, {
          key: 1,
          size: 18,
          name: t.icon
        }, null, 8, ["name"])) : ne("", !0),
        fe("div", {
          class: $(d(rt).snackbarBody)
        }, [
          t.title ? (y(), P("div", {
            key: 0,
            class: $(d(rt).snackbarTitle)
          }, ye(t.title), 3)) : ne("", !0),
          t.message ? (y(), P("div", {
            key: 1,
            class: $(d(rt).snackbarMessage)
          }, ye(t.message), 3)) : ne("", !0),
          t.progressIndeterminate || t.progressValue ? (y(), W(Tx, {
            key: 2,
            "is-indeterminate": t.progressIndeterminate,
            max: t.progressMax,
            min: t.progressMin,
            status: t.progressStatus,
            value: t.progressValue
          }, null, 8, ["is-indeterminate", "max", "min", "status", "value"])) : ne("", !0),
          t.subMessage ? (y(), P("div", {
            key: 3,
            class: $(d(rt).snackbarSubMessage)
          }, ye(t.subMessage), 3)) : ne("", !0)
        ], 2)
      ], 2),
      r.value ? (y(), P("div", {
        key: 0,
        class: $(d(rt).snackbarActions)
      }, [
        (y(!0), P(ve, null, dt(t.actions, (c, f) => (y(), P("button", {
          key: f,
          class: $(d(rt).snackbarAction),
          tabindex: "-1",
          type: "button",
          onClick: (m) => a(f)
        }, [
          fe("span", null, ye(c), 1)
        ], 10, Kx))), 128))
      ], 2)) : ne("", !0),
      t.isCloseable ? (y(), W(Gk, {
        key: 1,
        icon: "xmark",
        onClick: u[0] || (u[0] = (c) => o())
      })) : ne("", !0)
    ], 2)) : ne("", !0);
  }
}), eT = /* @__PURE__ */ q({
  __name: "FluxSnackbarProvider",
  setup(t) {
    const { snackbars: e } = la();
    function n(s) {
      return (i) => s.onAction?.(i);
    }
    return (s, i) => (y(), W(_0, {
      name: "flux-snackbars",
      tag: "div",
      class: $(d(rt).snackbars),
      "enter-active-class": d(rt).snackbarsEnterActive,
      "enter-from-class": d(rt).snackbarsEnterFrom,
      "leave-active-class": d(rt).snackbarsLeaveActive,
      "leave-to-class": d(rt).snackbarsLeaveTo,
      "move-class": d(rt).snackbarsMove
    }, {
      default: j(() => [
        (y(!0), P(ve, null, dt(d(e).toReversed(), (r) => (y(), W(Qx, qt({
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
const tT = "tooltip", nT = "tooltipAbove tooltip", sT = "tooltipBelow tooltip", iT = "tooltipEnd tooltip", rT = "tooltipStart tooltip";
var dr = { tooltip: tT, tooltipAbove: nT, tooltipBelow: sT, tooltipEnd: iT, tooltipStart: rT }, aT = q(() => {
  const { tooltip: t } = la(), e = ie(null), n = ie(null), s = $e(() => d(t) ? d(t).contentSlot?.() ?? [d(t).content] : null), i = $e(() => !!d(t));
  function r() {
    const a = Jn(e), o = d(t);
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
    const { scale: p } = getComputedStyle(a), { top: b, left: S, width: k, height: F } = u.getBoundingClientRect();
    let T = Number(p ?? 1);
    T = isNaN(T) ? 1 : T, h /= T, m /= T, l === "horizontal" ? n.value = oT(b, S, m, h, k, F, c, f) : n.value = lT(b, S, m, h, k, F, c, f);
  }
  return $s(_2, {
    calculate: r
  }), Ue(s, () => requestAnimationFrame(r)), () => Mi(ow, {}, {
    default: () => {
      if (!d(i))
        return;
      const a = d(n);
      return Mi("div", {
        ref: e,
        class: a ? Xt(
          a.transition === "above" && dr.tooltipAbove,
          a.transition === "below" && dr.tooltipBelow,
          a.transition === "end" && dr.tooltipEnd,
          a.transition === "start" && dr.tooltipStart
        ) : dr.tooltip,
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
function oT(t, e, n, s, i, r, a, o) {
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
function lT(t, e, n, s, i, r, a, o) {
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
const uT = "root", cT = "isLocked";
var Eu = { root: uT, isLocked: cT };
const dT = ["inert"];
var fT = /* @__PURE__ */ q({
  inheritAttrs: !1,
  __name: "FluxRoot",
  setup(t) {
    const { inertMain: e } = la();
    return Ue(e, (n, s, i) => {
      n && (document.body.classList.add(Eu.isLocked), i(() => document.body.classList.remove(Eu.isLocked)));
    }, { immediate: !0 }), (n, s) => (y(), P(ve, null, [
      fe("div", qt(n.$attrs, {
        class: d(Eu).root,
        inert: d(e)
      }), [
        ce(n.$slots, "default")
      ], 16, dT),
      z(dx),
      z(eT),
      z(aT)
    ], 64));
  }
});
let qp;
const kl = (t) => qp = t, Zp = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function $c(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Nr;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Nr || (Nr = {}));
function hT() {
  const t = Fm(!0), e = t.run(() => ie({}));
  let n = [], s = [];
  const i = Wo({
    install(r) {
      kl(i), i._a = r, r.provide(Zp, i), r.config.globalProperties.$pinia = i, s.forEach((a) => n.push(a)), s = [];
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
const jp = () => {
};
function Wh(t, e, n, s = jp) {
  t.add(e);
  const i = () => {
    t.delete(e) && s();
  };
  return !n && Om() && Dm(i), i;
}
function mi(t, ...e) {
  t.forEach((n) => {
    n(...e);
  });
}
const mT = (t) => t(), Hh = /* @__PURE__ */ Symbol(), Fu = /* @__PURE__ */ Symbol();
function Ic(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((n, s) => t.set(s, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], i = t[n];
    $c(i) && $c(s) && t.hasOwnProperty(n) && !Ze(s) && !Mn(s) ? t[n] = Ic(i, s) : t[n] = s;
  }
  return t;
}
const pT = (
  /* istanbul ignore next */
  /* @__PURE__ */ Symbol()
);
function gT(t) {
  return !$c(t) || !Object.prototype.hasOwnProperty.call(t, pT);
}
const { assign: fs } = Object;
function yT(t) {
  return !!(Ze(t) && t.effect);
}
function vT(t, e, n, s) {
  const { state: i, actions: r, getters: a } = e, o = n.state.value[t];
  let l;
  function u() {
    o || (n.state.value[t] = i ? i() : {});
    const c = Cy(n.state.value[t]);
    return fs(c, r, Object.keys(a || {}).reduce((f, m) => (f[m] = Wo($e(() => {
      kl(n);
      const h = n._s.get(t);
      return a[m].call(h, h);
    })), f), {}));
  }
  return l = Gp(t, u, e, n, s, !0), l;
}
function Gp(t, e, n = {}, s, i, r) {
  let a;
  const o = fs({ actions: {} }, n), l = { deep: !0 };
  let u, c, f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h;
  const p = s.state.value[t];
  !r && !p && (s.state.value[t] = {}), ie({});
  let b;
  function S(w) {
    let x;
    u = c = !1, typeof w == "function" ? (w(s.state.value[t]), x = {
      type: Nr.patchFunction,
      storeId: t,
      events: h
    }) : (Ic(s.state.value[t], w), x = {
      type: Nr.patchObject,
      payload: w,
      storeId: t,
      events: h
    });
    const B = b = /* @__PURE__ */ Symbol();
    qs().then(() => {
      b === B && (u = !0);
    }), c = !0, mi(f, x, s.state.value[t]);
  }
  const k = r ? function() {
    const { state: x } = n, B = x ? x() : {};
    this.$patch((_) => {
      fs(_, B);
    });
  } : (
    /* istanbul ignore next */
    jp
  );
  function F() {
    a.stop(), f.clear(), m.clear(), s._s.delete(t);
  }
  const T = (w, x = "") => {
    if (Hh in w)
      return w[Fu] = x, w;
    const B = function() {
      kl(s);
      const _ = Array.from(arguments), A = /* @__PURE__ */ new Set(), se = /* @__PURE__ */ new Set();
      function me(ke) {
        A.add(ke);
      }
      function te(ke) {
        se.add(ke);
      }
      mi(m, {
        args: _,
        name: B[Fu],
        store: I,
        after: me,
        onError: te
      });
      let Ie;
      try {
        Ie = w.apply(this && this.$id === t ? this : I, _);
      } catch (ke) {
        throw mi(se, ke), ke;
      }
      return Ie instanceof Promise ? Ie.then((ke) => (mi(A, ke), ke)).catch((ke) => (mi(se, ke), Promise.reject(ke))) : (mi(A, Ie), Ie);
    };
    return B[Hh] = !0, B[Fu] = x, B;
  }, O = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Wh.bind(null, m),
    $patch: S,
    $reset: k,
    $subscribe(w, x = {}) {
      const B = Wh(f, w, x.detached, () => _()), _ = a.run(() => Ue(() => s.state.value[t], (A) => {
        (x.flush === "sync" ? c : u) && w({
          storeId: t,
          type: Nr.direct,
          events: h
        }, A);
      }, fs({}, l, x)));
      return B;
    },
    $dispose: F
  }, I = On(O);
  s._s.set(t, I);
  const Z = (s._a && s._a.runWithContext || mT)(() => s._e.run(() => (a = Fm()).run(() => e({ action: T }))));
  for (const w in Z) {
    const x = Z[w];
    if (Ze(x) && !yT(x) || Mn(x))
      r || (p && gT(x) && (Ze(x) ? x.value = p[w] : Ic(x, p[w])), s.state.value[t][w] = x);
    else if (typeof x == "function") {
      const B = T(x, w);
      Z[w] = B, o.actions[w] = x;
    }
  }
  return fs(I, Z), fs(Te(I), Z), Object.defineProperty(I, "$state", {
    get: () => s.state.value[t],
    set: (w) => {
      S((x) => {
        fs(x, w);
      });
    }
  }), s._p.forEach((w) => {
    fs(I, a.run(() => w({
      store: I,
      app: s._a,
      pinia: s,
      options: o
    })));
  }), p && r && n.hydrate && n.hydrate(I.$state, p), u = !0, c = !0, I;
}
// @__NO_SIDE_EFFECTS__
function bT(t, e, n) {
  let s;
  const i = typeof e == "function";
  s = i ? n : e;
  function r(a, o) {
    const l = Zy();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (l ? qn(Zp, null) : null), a && kl(a), a = qp, a._s.has(t) || (i ? Gp(t, e, s, a) : vT(t, s, a)), a._s.get(t);
  }
  return r.$id = t, r;
}
function kT(t) {
  const e = Te(t), n = {};
  for (const s in e) {
    const i = e[s];
    i.effect ? n[s] = // ...
    $e({
      get: () => t[s],
      set(r) {
        t[s] = r;
      }
    }) : (Ze(i) || Mn(i)) && (n[s] = // ---
    Yn(t, s));
  }
  return n;
}
function An() {
  return (t) => Homey.__(t) ?? t;
}
function wT(t, e) {
  const n = /* @__PURE__ */ bT(t, e);
  return () => {
    const s = n(), i = Object.getOwnPropertyNames(s), r = kT(s), a = {};
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
function xT() {
  const t = /* @__PURE__ */ new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}
var Sd = wT("list", () => {
  const t = ie([]), e = ie({
    date: "all",
    type: "all",
    personId: null
  }), n = ie(!0), s = ie([]), i = ie(null), r = ie([]), a = $e(() => {
    const w = d(e), x = xT();
    return d(s).filter((B) => {
      if (w.type !== "all" && B.type !== w.type)
        return !1;
      if (w.date !== "all") {
        const _ = B.type === "task" ? B.dueDate : void 0;
        if (w.date === "no_date") {
          if (_)
            return !1;
        } else if (!_ || w.date === "overdue" && _ >= x || w.date === "upcoming" && _ < x)
          return !1;
      }
      return !(w.personId !== null && (B.type !== "task" || B.person?.id !== w.personId));
    });
  }), o = $e(() => m(d(s))), l = $e(() => m(d(a))), u = $e(() => {
    const w = d(e);
    return w.date !== "all" || w.type !== "all" || w.personId !== null;
  }), c = $e(() => d(a).length > 0), f = $e(() => d(s).length > 0);
  function m(w) {
    const x = Object.groupBy(w, (_) => _.category || "__other__"), B = Object.entries(x).sort(([_], [A]) => {
      if (_ === "__other__") return 1;
      if (A === "__other__") return -1;
      const se = d(t).findIndex((te) => te.category === _), me = d(t).findIndex((te) => te.category === A);
      return se - me;
    });
    return Object.fromEntries(B);
  }
  async function h(w, x, B) {
    const _ = d(s).findIndex((A) => A.id === x.id);
    _ !== -1 && (s.value[_].checked = B, B ? await Homey.api("POST", `/${w}/items/${x.id}/checked`) : await Homey.api("POST", `/${w}/items/${x.id}/unchecked`));
  }
  async function p(w, x, B) {
    const _ = d(s).findIndex((A) => A.id === x.id);
    _ === -1 || x.quantity === void 0 || (s.value[_].quantity = B === "increase" ? x.quantity + 1 : x.quantity - 1, await Homey.api("POST", `/${w}/items/${x.id}/quantity`, {
      quantity: B === "increase" ? 1 : -1
    }));
  }
  function b(w, x) {
    e.value = {
      date: x ?? "all",
      type: w ?? "all",
      personId: null
    };
  }
  async function S(w) {
    n.value = !0, t.value = await Homey.api("GET", `/${w}/categories`), n.value = !1;
  }
  async function k(w) {
    n.value = !0, await Z(
      await Homey.api("GET", `/${w}/items`)
    ), n.value = !1;
  }
  async function F(w) {
    n.value = !0, i.value = await Homey.api("GET", `/${w}`), n.value = !1;
  }
  async function T(w) {
    n.value = !0, r.value = await Homey.api("GET", `/${w}/persons`), n.value = !1;
  }
  async function O(w, x) {
    const B = d(s).findIndex((_) => _.id === x.id);
    B !== -1 && (s.value.splice(B, 1), await Homey.api("DELETE", `/${w}/items/${x.id}`));
  }
  function I() {
    e.value = {
      date: "all",
      type: "all",
      personId: null
    };
  }
  function N(w, x) {
    e.value = {
      ...d(e),
      [w]: x
    };
  }
  async function Z(w) {
    s.value = w;
  }
  return {
    categories: _n(t),
    filters: _n(e),
    isLoading: _n(n),
    items: _n(s),
    look: _n(i),
    persons: _n(r),
    categorizedItems: o,
    filteredCategorizedItems: l,
    filteredItems: a,
    hasActiveFilters: u,
    hasFilteredItems: c,
    hasItems: f,
    changeChecked: h,
    changeQuantity: p,
    initFilters: b,
    loadCategories: S,
    loadItems: k,
    loadLook: F,
    loadPersons: T,
    removeItem: O,
    resetFilters: I,
    setFilter: N,
    setItems: Z
  };
}), Yp = /* @__PURE__ */ q({
  __name: "ListForm",
  props: /* @__PURE__ */ mn({
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
  emits: /* @__PURE__ */ mn(["close", "save"], ["update:category", "update:content", "update:person", "update:dueDate", "update:dueTime", "update:quantity"]),
  setup(t, { emit: e }) {
    const n = e, s = Dt(t, "category"), i = Dt(t, "content"), r = Dt(t, "person"), a = Dt(t, "dueDate"), o = Dt(t, "dueTime"), l = Dt(t, "quantity"), u = An(), {
      categories: c,
      persons: f,
      loadCategories: m,
      loadPersons: h
    } = Sd(), p = $e(() => d(i).trim().length > 2), b = $e(() => d(c).map((O) => ({
      label: u(`grocery.category.${O.category}`),
      icon: O.icon,
      value: O.category
    }))), S = $e(() => [
      { value: null, label: u("widget.list.add.anyone") },
      ...d(f).map((O) => ({
        label: O.name,
        imageSrc: O.image,
        value: O.id
      }))
    ]);
    es(async () => {
      await Promise.allSettled([
        m(t.deviceId),
        h(t.deviceId)
      ]);
    });
    function k() {
      a.value = null, o.value = null;
    }
    async function F() {
      n("close");
    }
    async function T() {
      n("save");
    }
    return (O, I) => (y(), W(d(gl), { style: { "max-height": "calc(100dvh - 30px)", width: "calc(100dvw - 30px)", "overflow-x": "hidden" } }, {
      default: j(() => [
        z(d(bl), { title: t.title }, null, 8, ["title"]),
        z(d(Gr), null, {
          default: j(() => [
            z(d(nx), null, {
              default: j(() => [
                z(d(ex), null, {
                  default: j(() => [
                    t.type === "product" ? (y(), P(ve, { key: 0 }, [
                      z(d(Hs), {
                        label: d(u)("widget.list.add.product")
                      }, {
                        default: j(() => [
                          z(d(Lr), {
                            modelValue: i.value,
                            "onUpdate:modelValue": I[0] || (I[0] = (N) => i.value = N)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      z(d(Hs), {
                        "is-optional": "",
                        label: d(u)("widget.list.add.category")
                      }, {
                        default: j(() => [
                          z(d(Ph), {
                            modelValue: s.value,
                            "onUpdate:modelValue": I[1] || (I[1] = (N) => s.value = N),
                            options: b.value
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      z(d(Hs), {
                        label: d(u)("widget.list.add.quantity")
                      }, {
                        default: j(() => [
                          z(d($x), {
                            modelValue: l.value,
                            "onUpdate:modelValue": I[2] || (I[2] = (N) => l.value = N),
                            min: 1,
                            step: 1,
                            style: { "align-self": "start" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ], 64)) : (y(), W(d(Hs), {
                      key: 1,
                      label: d(u)("widget.list.add.content")
                    }, {
                      default: j(() => [
                        z(d(rx), {
                          modelValue: i.value,
                          "onUpdate:modelValue": I[3] || (I[3] = (N) => i.value = N),
                          rows: 2
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])),
                    t.type === "task" ? (y(), W(d(Hs), {
                      key: 2,
                      "is-optional": "",
                      label: d(u)("widget.list.add.person")
                    }, {
                      default: j(() => [
                        z(d(Ph), {
                          modelValue: r.value,
                          "onUpdate:modelValue": I[4] || (I[4] = (N) => r.value = N),
                          options: S.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : ne("", !0),
                    t.type === "task" ? (y(), W(d(Hs), {
                      key: 3,
                      "is-optional": "",
                      label: d(u)("widget.list.add.due")
                    }, {
                      default: j(() => [
                        z(d(sx), null, {
                          default: j(() => [
                            z(d(Lr), {
                              modelValue: a.value,
                              "onUpdate:modelValue": I[5] || (I[5] = (N) => a.value = N),
                              type: "date"
                            }, null, 8, ["modelValue"]),
                            z(d(J9), { direction: "vertical" }),
                            z(d(Lr), {
                              modelValue: o.value,
                              "onUpdate:modelValue": I[6] || (I[6] = (N) => o.value = N),
                              type: "time"
                            }, null, 8, ["modelValue"]),
                            z(d(Wi), {
                              "icon-leading": "trash",
                              onClick: I[7] || (I[7] = (N) => k())
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : ne("", !0),
                    z(d(y5), { style: { width: "100%" } }, {
                      default: j(() => [
                        z(d(Wi), {
                          label: d(u)("widget.list.add.cancel"),
                          style: { "flex-grow": "1" },
                          onClick: I[8] || (I[8] = (N) => F())
                        }, null, 8, ["label"]),
                        z(d(vl), {
                          disabled: !p.value,
                          label: t.saveLabel,
                          style: { "flex-grow": "1" },
                          onClick: I[9] || (I[9] = (N) => T())
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
}), TT = /* @__PURE__ */ q({
  __name: "ListAdd",
  props: {
    deviceId: {},
    type: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = An(), i = On({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = $e(() => {
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
    return (l, u) => (y(), W(Yp, {
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
}), ST = /* @__PURE__ */ q({
  __name: "ListEdit",
  props: {
    deviceId: {},
    item: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = An(), i = On({
      category: "",
      content: "",
      person: null,
      dueDate: null,
      dueTime: null,
      quantity: 1
    }), r = $e(() => {
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
    return Ue(() => t.item, (l) => {
      i.category = l.category, i.content = l.content, i.person = l.person?.id, i.dueDate = l.dueDate, i.dueTime = l.dueTime, i.quantity = l.quantity;
    }, { immediate: !0 }), (l, u) => (y(), W(Yp, {
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
});
const $T = ["onClick"], IT = ["onClick"], MT = ["onClick"];
var CT = /* @__PURE__ */ q({
  __name: "ListFilter",
  setup(t) {
    const e = An(), {
      filters: n,
      look: s,
      persons: i,
      hasActiveFilters: r,
      resetFilters: a,
      setFilter: o
    } = Sd(), l = [
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
    return (c, f) => (y(), P("div", {
      class: $(c.$style.listFilter)
    }, [
      fe("div", {
        class: $(c.$style.listFilterGroup)
      }, [
        fe("span", {
          class: $(c.$style.listFilterLabel)
        }, ye(d(e)("widget.list.filter.type")), 3),
        fe("div", {
          class: $(c.$style.listFilterChips)
        }, [
          (y(), P(ve, null, dt(l, (m) => fe("button", {
            key: m.value,
            class: $([c.$style.listFilterChip, d(n).type === m.value && c.$style.isActive]),
            style: st(d(n).type === m.value ? { "--chip-color": d(s)?.color } : void 0),
            onClick: (h) => d(o)("type", m.value)
          }, ye(m.label), 15, $T)), 64))
        ], 2)
      ], 2),
      fe("div", {
        class: $(c.$style.listFilterGroup)
      }, [
        fe("span", {
          class: $(c.$style.listFilterLabel)
        }, ye(d(e)("widget.list.filter.date")), 3),
        fe("div", {
          class: $(c.$style.listFilterChips)
        }, [
          (y(), P(ve, null, dt(u, (m) => fe("button", {
            key: m.value,
            class: $([c.$style.listFilterChip, d(n).date === m.value && c.$style.isActive]),
            style: st(d(n).date === m.value ? { "--chip-color": d(s)?.color } : void 0),
            onClick: (h) => d(o)("date", m.value)
          }, ye(m.label), 15, IT)), 64))
        ], 2)
      ], 2),
      d(i).length > 0 ? (y(), P("div", {
        key: 0,
        class: $(c.$style.listFilterGroup)
      }, [
        fe("span", {
          class: $(c.$style.listFilterLabel)
        }, ye(d(e)("widget.list.filter.person")), 3),
        fe("div", {
          class: $(c.$style.listFilterChips)
        }, [
          fe("button", {
            class: $([c.$style.listFilterChip, d(n).personId === null && c.$style.isActive]),
            style: st(d(n).personId === null ? { "--chip-color": d(s)?.color } : void 0),
            onClick: f[0] || (f[0] = (m) => d(o)("personId", null))
          }, ye(d(e)("widget.list.filter.anyone")), 7),
          (y(!0), P(ve, null, dt(d(i), (m) => (y(), P("button", {
            key: m.id,
            class: $([c.$style.listFilterChip, d(n).personId === m.id && c.$style.isActive]),
            style: st(d(n).personId === m.id ? { "--chip-color": d(s)?.color } : void 0),
            onClick: (h) => d(o)("personId", m.id)
          }, ye(m.name), 15, MT))), 128))
        ], 2)
      ], 2)) : ne("", !0),
      d(r) ? (y(), P("button", {
        key: 1,
        class: $(c.$style.listFilterClear),
        onClick: f[1] || (f[1] = (m) => d(a)())
      }, ye(d(e)("widget.list.filter.clear")), 3)) : ne("", !0)
    ], 2));
  }
});
const ET = "listFilter", FT = "listFilterGroup", OT = "listFilterLabel", DT = "listFilterChips", AT = "listFilterChip", LT = "isActive", NT = "listFilterClear";
var VT = { listFilter: ET, listFilterGroup: FT, listFilterLabel: OT, listFilterChips: DT, listFilterChip: AT, isActive: LT, listFilterClear: NT }, Xe = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, i] of e)
    n[s] = i;
  return n;
};
const BT = {
  $style: VT
};
var _T = /* @__PURE__ */ Xe(CT, [["__cssModules", BT]]), Jp = /* @__PURE__ */ q({
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
    return (i, r) => (y(), P("button", {
      class: "homey-button-primary-full",
      type: "button",
      onClick: s
    }, ye(t.label), 1));
  }
}), eE = /* @__PURE__ */ q({
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
    return (i, r) => (y(), P("button", {
      class: "homey-button-transparent",
      type: "button",
      onClick: s
    }, ye(t.label), 1));
  }
});
const $d = /* @__PURE__ */ Symbol(), Id = /* @__PURE__ */ Symbol(), zT = ["title", "onClick"];
var RT = /* @__PURE__ */ q({
  __name: "ColorPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = Dt(t, "modelValue"), n = An(), s = qn($d);
    return (i, r) => (y(), P("div", {
      class: $(i.$style.colorSelect)
    }, [
      (y(!0), P(ve, null, dt(d(s), (a) => (y(), P("div", {
        class: $(e.value === a.hex ? i.$style.colorSelectItemActive : i.$style.colorSelectItem),
        style: st({ "--color": a.hex }),
        title: d(n)(a.label),
        onClick: (o) => e.value = a.hex
      }, null, 14, zT))), 256))
    ], 2));
  }
});
const PT = "colorSelect", WT = "colorSelectItem", HT = "colorSelectItemActive colorSelectItem";
var UT = { colorSelect: PT, colorSelectItem: WT, colorSelectItemActive: HT };
const qT = {
  $style: UT
};
var Xp = /* @__PURE__ */ Xe(RT, [["__cssModules", qT]]);
const ZT = { class: "homey-form" };
var Kp = /* @__PURE__ */ q({
  __name: "Form",
  setup(t) {
    return (e, n) => (y(), P("form", ZT, [
      ce(e.$slots, "default")
    ]));
  }
});
const jT = { class: "homey-form-fieldset" }, GT = { class: "homey-form-legend" }, YT = {
  key: 0,
  class: "homey-form-group",
  style: { "margin-top": "6px" }
}, JT = {
  key: 1,
  class: "homey-form-group"
}, XT = { class: "homey-form-group" };
var Vr = /* @__PURE__ */ q({
  __name: "FormGroup",
  props: {
    description: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (y(), P("fieldset", jT, [
      fe("legend", GT, ye(t.title), 1),
      t.description ? (y(), P("div", YT, ye(t.description), 1)) : ne("", !0),
      e.$slots.before ? (y(), P("div", JT, [
        ce(e.$slots, "before")
      ])) : ne("", !0),
      fe("div", XT, [
        ce(e.$slots, "default")
      ])
    ]));
  }
});
const KT = ["for"], QT = ["disabled", "id", "type"];
var Qp = /* @__PURE__ */ q({
  __name: "FormInput",
  props: /* @__PURE__ */ mn({
    disabled: { type: Boolean },
    label: {},
    type: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = Dt(t, "modelValue"), n = jc();
    return (s, i) => (y(), P(ve, null, [
      t.label ? (y(), P("label", {
        key: 0,
        class: "homey-form-label",
        for: d(n)
      }, ye(t.label), 9, KT)) : ne("", !0),
      qc(fe("input", {
        class: "homey-form-input",
        disabled: t.disabled,
        id: d(n),
        type: t.type,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.value = r)
      }, null, 8, QT), [
        [F2, e.value]
      ])
    ], 64));
  }
}), eS = /* @__PURE__ */ q({
  __name: "Icon",
  props: {
    icon: {}
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(e.$style.uiIcon),
      "data-icon": "",
      style: st({
        "--icon": JSON.stringify(t.icon),
        "--icon-secondary": JSON.stringify(t.icon + t.icon)
      })
    }, null, 6));
  }
});
const tS = "uiIcon";
var nS = { uiIcon: tS };
const sS = {
  $style: nS
};
var ws = /* @__PURE__ */ Xe(eS, [["__cssModules", sS]]), iS = /* @__PURE__ */ q({
  __name: "IconPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = Dt(t, "modelValue"), n = An(), s = qn(Id), i = ie(""), r = $e(() => {
      const a = d(i).toLowerCase().trim();
      return d(s).filter((o) => a.length > 0 && o.name.toLowerCase().includes(a) || a.length === 0 && o.unicode === d(e)).slice(0, 54);
    });
    return (a, o) => (y(), P(ve, null, [
      z(Qp, {
        modelValue: i.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l),
        label: d(n)("element.search_icon"),
        type: "text"
      }, null, 8, ["modelValue", "label"]),
      fe("div", {
        class: $(a.$style.iconSelect)
      }, [
        (y(!0), P(ve, null, dt(r.value, (l) => (y(), W(ws, {
          class: $(e.value === l.unicode ? a.$style.iconSelectItemActive : a.$style.iconSelectItem),
          icon: l.unicode,
          title: l.name,
          onClick: (u) => e.value = l.unicode
        }, null, 8, ["class", "icon", "title", "onClick"]))), 256))
      ], 2)
    ], 64));
  }
});
const rS = "iconSelect", aS = "iconSelectItem", oS = "iconSelectItemActive iconSelectItem";
var lS = { iconSelect: rS, iconSelectItem: aS, iconSelectItemActive: oS };
const uS = {
  $style: lS
};
var eg = /* @__PURE__ */ Xe(iS, [["__cssModules", uS]]), tE = /* @__PURE__ */ q({
  __name: "ScrollContainer",
  props: {
    tag: { default: "div" }
  },
  setup(t) {
    const e = ie(null), n = ie(!1), s = ie(0), i = ie(0), r = ie(0), a = ie([]), o = ie(0), l = ie(0);
    let u = null;
    ni(() => {
      f();
    });
    function c(F, T) {
      const N = (1 - 1 / (Math.abs(F) * 0.55 / T + 1)) * T;
      return Math.sign(F) * N;
    }
    function f() {
      u && (cancelAnimationFrame(u), u = null);
    }
    function m() {
      const F = d(a);
      if (F.length === 0)
        return 0;
      let T = 0, O = 0;
      for (let I = 0; I < F.length; I++) {
        const N = I + 1;
        O += F[I] * N, T += N;
      }
      return O / T;
    }
    function h() {
      const F = d(e);
      if (!F)
        return;
      const T = d(r), O = F.clientHeight, I = c(T, O), N = Math.min(400, Math.max(200, Math.abs(I) * 3));
      F.style.transition = `transform ${N}ms cubic-bezier(0.25, 0.1, 0.25, 1)`, F.style.transform = "translateY(0)", r.value = 0;
    }
    function p(F) {
      const T = d(e);
      if (!T)
        return;
      const O = T.clientHeight;
      let I = F, N = performance.now();
      function Z(w) {
        const x = Math.min((w - N) / 16.67, 2);
        N = w;
        const B = T.scrollHeight - T.clientHeight;
        I *= Math.pow(0.95, x);
        const A = T.scrollTop + I * x;
        if (A < 0) {
          T.scrollTop = 0;
          const se = Math.min(O * 0.3, Math.abs(I) * 8);
          r.value = se;
          const me = c(se, O);
          T.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => h());
        } else if (A > B) {
          T.scrollTop = B;
          const se = -Math.min(O * 0.3, Math.abs(I) * 8);
          r.value = se;
          const me = c(se, O);
          T.style.transform = `translateY(${me}px)`, requestAnimationFrame(() => h());
        } else
          T.scrollTop = A, Math.abs(I) > 0.1 && (u = requestAnimationFrame(Z));
      }
      u = requestAnimationFrame(Z);
    }
    function b(F) {
      f();
      const T = d(e);
      if (!T)
        return;
      const O = F.touches[0];
      s.value = O.clientY, n.value = !0, o.value = O.clientY, l.value = Date.now(), a.value = [], i.value = T.scrollTop, T.style.transition = "none", r.value === 0 && (T.style.transform = "translateY(0)"), F.preventDefault();
    }
    function S(F) {
      if (!d(n))
        return;
      const T = d(e);
      if (!T)
        return;
      const O = F.touches[0], I = Date.now(), N = I - d(l);
      if (N > 0 && N < 100) {
        const A = (d(o) - O.clientY) / N * 16;
        a.value.push(A), a.value.length > 5 && a.value.shift();
      }
      o.value = O.clientY, l.value = I;
      const Z = d(s) - O.clientY, w = T.scrollHeight - T.clientHeight, x = d(i) + Z, B = T.clientHeight;
      if (x < 0) {
        T.scrollTop = 0;
        const _ = -x;
        r.value = _;
        const A = c(_, B);
        T.style.transform = `translateY(${A}px)`;
      } else if (x > w) {
        T.scrollTop = w;
        const _ = -(x - w);
        r.value = _;
        const A = c(_, B);
        T.style.transform = `translateY(${A}px)`;
      } else
        T.scrollTop = x, r.value = 0, T.style.transform = "translateY(0)";
      F.preventDefault();
    }
    function k(F) {
      if (!n.value)
        return;
      const T = e.value, O = m(), I = r.value !== 0;
      n.value = !1, T && I ? h() : T && Math.abs(O) > 0.5 && p(O), F.preventDefault();
    }
    return (F, T) => (y(), W(Yc(t.tag), {
      ref_key: "containerRef",
      ref: e,
      onTouchstart: b,
      onTouchmove: S,
      onTouchend: k,
      onTouchcancel: k
    }, {
      default: j(() => [
        ce(F.$slots, "default")
      ]),
      _: 3
    }, 544));
  }
}), cS = /* @__PURE__ */ q({
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
    return (a, o) => (y(), P("div", {
      class: $(a.$style.listHeader)
    }, [
      z(d(ws), {
        class: $(a.$style.listHeaderIcon),
        icon: t.icon,
        style: st({
          "--color": t.color
        })
      }, null, 8, ["class", "icon", "style"]),
      fe("div", {
        class: $(["homey-text-bold", a.$style.listHeaderName])
      }, ye(t.name), 3),
      fe("button", {
        class: $(a.$style.listHeaderAdd),
        onClick: o[0] || (o[0] = (l) => r())
      }, [
        z(d(ws), {
          class: $(a.$style.listHeaderAddIcon),
          icon: "",
          style: st(t.hasActiveFilters ? { "--color": t.color } : void 0)
        }, null, 8, ["class", "style"])
      ], 2),
      fe("button", {
        class: $(a.$style.listHeaderAdd),
        onClick: o[1] || (o[1] = (l) => i())
      }, [
        z(d(ws), {
          class: $(a.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2),
      fe("button", {
        class: $(a.$style.listHeaderAdd),
        onClick: o[2] || (o[2] = (l) => s())
      }, [
        z(d(ws), {
          class: $(a.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
});
const dS = "listHeader", fS = "listHeaderIcon", hS = "listHeaderName", mS = "listHeaderAdd", pS = "listHeaderAddIcon";
var gS = { listHeader: dS, listHeaderIcon: fS, listHeaderName: hS, listHeaderAdd: mS, listHeaderAddIcon: pS };
const yS = {
  $style: gS
};
var vS = /* @__PURE__ */ Xe(cS, [["__cssModules", yS]]), bS = /* @__PURE__ */ q({
  __name: "ListLoading",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(e.$style.listLoading)
    }, [
      z(d(Xn))
    ], 2));
  }
});
const kS = "listLoading";
var wS = { listLoading: kS };
const xS = {
  $style: wS
};
var TS = /* @__PURE__ */ Xe(bS, [["__cssModules", xS]]), SS = /* @__PURE__ */ q({
  __name: "ListItemCategory",
  props: {
    icon: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(e.$style.listItemCategory)
    }, [
      t.icon ? (y(), W(d(It), {
        key: 0,
        class: $(e.$style.listItemCategoryIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : ne("", !0),
      fe("span", null, ye(t.name), 1)
    ], 2));
  }
});
const $S = "listItemCategory", IS = "listItemCategoryIcon";
var MS = { listItemCategory: $S, listItemCategoryIcon: IS };
const CS = {
  $style: MS
};
var Uh = /* @__PURE__ */ Xe(SS, [["__cssModules", CS]]);
const ES = ["aria-checked"];
var FS = /* @__PURE__ */ q({
  __name: "ListItem",
  props: {
    completable: { type: Boolean },
    direction: { default: "vertical" },
    icon: {},
    item: {},
    tappable: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      "aria-checked": t.item ? "checked" in t.item && t.item.checked ? "true" : "false" : void 0,
      class: $([
        t.direction === "horizontal" ? e.$style.listItemHorizontal : e.$style.listItemVertical,
        t.completable && e.$style.isCompletable,
        t.tappable && e.$style.isTappable
      ])
    }, [
      z(Ms, {
        mode: "out-in",
        name: "check"
      }, {
        default: j(() => [
          (y(), W(d(ws), {
            key: t.icon,
            class: $(e.$style.listItemIcon),
            icon: t.icon
          }, null, 8, ["class", "icon"]))
        ]),
        _: 1
      }),
      fe("div", {
        class: $(e.$style.listItemBody)
      }, [
        ce(e.$slots, "default")
      ], 2)
    ], 10, ES));
  }
});
const OS = "listItem", DS = "isTappable", AS = "listItemBody", LS = "listItemIcon", NS = "listItemHorizontal listItem", VS = "listItemVertical listItem", BS = "isCompletable";
var _S = { listItem: OS, isTappable: DS, listItemBody: AS, listItemIcon: LS, listItemHorizontal: NS, listItemVertical: VS, isCompletable: BS };
const zS = {
  $style: _S
};
var wl = /* @__PURE__ */ Xe(FS, [["__cssModules", zS]]), RS = /* @__PURE__ */ q({
  __name: "ListItemContent",
  props: {
    grow: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(t.grow ? e.$style.listItemContentGrow : e.$style.listItemContent),
      "data-content": ""
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const PS = "listItemContent", WS = "listItemContentGrow listItemContent";
var HS = { listItemContent: PS, listItemContentGrow: WS };
const US = {
  $style: HS
};
var xl = /* @__PURE__ */ Xe(RS, [["__cssModules", US]]), qS = /* @__PURE__ */ q({
  __name: "ListItemEmpty",
  props: {
    filtered: { type: Boolean }
  },
  setup(t) {
    const e = An();
    return (n, s) => (y(), W(wl, {
      class: $(n.$style.listItemEmpty),
      icon: ""
    }, {
      default: j(() => [
        z(xl, null, {
          default: j(() => [
            Xr(ye(t.filtered ? d(e)("widget.list.filter.no_results") : d(e)("widget.list.no_items")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const ZS = "listItemEmpty";
var jS = { listItemEmpty: ZS };
const GS = {
  $style: jS
};
var qh = /* @__PURE__ */ Xe(qS, [["__cssModules", GS]]), YS = /* @__PURE__ */ q({
  __name: "ListItemMount",
  props: {
    longPressDuration: { default: 300 }
  },
  emits: ["longPress", "remove", "tap"],
  setup(t, { emit: e }) {
    const n = e, s = ie(!1), i = ie(!1), r = ie(0), a = ie(0), o = ie(0), l = ie(0), u = ie(!0), c = ie(!1), f = ie(null), m = ie(!1), h = $e(() => s.value ? r.value - o.value > 180 : !1), p = $e(() => {
      if (!s.value)
        return i.value ? -90 : 0;
      const O = r.value - o.value, I = 90, N = 0.3;
      if (O <= 0)
        return 0;
      if (O <= I)
        return -O;
      const Z = O - I;
      return -(I + Z * N);
    });
    function b() {
      d(f) && (clearTimeout(d(f)), f.value = null);
    }
    function S() {
      i.value = !1, n("remove");
    }
    function k(O) {
      if (d(i))
        return;
      const I = O.touches[0];
      r.value = I.clientX, a.value = I.clientY, o.value = I.clientX, l.value = I.clientY, s.value = !0, u.value = !0, m.value = !1, c.value = O.target.closest("[data-interactive]") !== null, b(), f.value = setTimeout(() => {
        d(u) && !d(c) && (m.value = !0, n("longPress"));
      }, t.longPressDuration);
    }
    function F(O) {
      if (!d(s))
        return;
      const I = O.touches[0];
      o.value = I.clientX, l.value = I.clientY;
      const N = Math.abs(o.value - r.value), Z = Math.abs(l.value - a.value);
      (N > 10 || Z > 10) && (u.value = !1, b()), N > Z && N > 15 && O.preventDefault();
    }
    function T(O) {
      if (b(), d(i)) {
        if (O.target.closest("[data-delete-button]") !== null)
          return;
        setTimeout(() => i.value = !1, 50), O.stopPropagation();
        return;
      }
      if (!d(s))
        return;
      s.value = !1;
      const I = r.value - o.value;
      if (d(u) && !d(c) && !d(m)) {
        n("tap");
        return;
      }
      if (I > 180) {
        n("remove");
        return;
      }
      i.value = I > 45;
    }
    return Ue(i, (O, I, N) => {
      if (!O)
        return;
      const Z = setTimeout(() => {
        i.value = !1;
      }, 3e3);
      N(() => clearTimeout(Z));
    }), (O, I) => (y(), P("div", {
      class: $([
        O.$style.listItemMount,
        h.value && O.$style.isDestructive,
        s.value && O.$style.isDragging,
        i.value && O.$style.isOpen
      ]),
      style: st({
        "--x": p.value + "px"
      })
    }, [
      fe("div", {
        class: $(O.$style.listItemMountBody),
        onTouchstart: k,
        onTouchmove: F,
        onTouchend: T,
        onTouchcancel: T
      }, [
        ce(O.$slots, "default")
      ], 34),
      fe("div", {
        class: $(O.$style.listItemMountRemove),
        "data-delete-button": "",
        onClick: I[0] || (I[0] = (N) => S()),
        onTouchend: I[1] || (I[1] = td((N) => S(), ["stop", "prevent"]))
      }, [
        z(d(ws), {
          class: $(O.$style.listItemMountRemoveIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 34)
    ], 6));
  }
});
const JS = "listItemMount", XS = "listItemMountBody", KS = "listItemMountRemove", QS = "isDragging", e$ = "isOpen", t$ = "isDestructive", n$ = "listItemMountRemoveIcon";
var s$ = { listItemMount: JS, listItemMountBody: XS, listItemMountRemove: KS, isDragging: QS, isOpen: e$, isDestructive: t$, listItemMountRemoveIcon: n$ };
const i$ = {
  $style: s$
};
var r$ = /* @__PURE__ */ Xe(YS, [["__cssModules", i$]]), a$ = /* @__PURE__ */ q({
  __name: "ListItems",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(e.$style.listItems)
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const o$ = "listItems";
var l$ = { listItems: o$ };
const u$ = {
  $style: l$
};
var Zh = /* @__PURE__ */ Xe(a$, [["__cssModules", u$]]), c$ = /* @__PURE__ */ q({
  __name: "ListItemNote",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (y(), W(wl, {
      class: $(e.$style.listItemNote),
      icon: "",
      item: t.item
    }, {
      default: j(() => [
        z(xl, null, {
          default: j(() => [
            Xr(ye(t.item.content), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "item"]));
  }
});
const d$ = "listItemNote";
var f$ = { listItemNote: d$ };
const h$ = {
  $style: f$
};
var m$ = /* @__PURE__ */ Xe(c$, [["__cssModules", h$]]), p$ = /* @__PURE__ */ q({
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
    return (i, r) => (y(), P("button", {
      class: $(i.$style.listItemButton),
      "data-interactive": "",
      onTouchend: td(s, ["stop", "prevent"])
    }, [
      z(d(ws), {
        class: $(i.$style.listItemButtonIcon),
        icon: t.icon
      }, null, 8, ["class", "icon"])
    ], 34));
  }
});
const g$ = "listItemButton", y$ = "listItemButtonIcon";
var v$ = { listItemButton: g$, listItemButtonIcon: y$ };
const b$ = {
  $style: v$
};
var jh = /* @__PURE__ */ Xe(p$, [["__cssModules", b$]]), k$ = /* @__PURE__ */ q({
  __name: "ListItemButtons",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(e.$style.listItemButtons)
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const w$ = "listItemButtons";
var x$ = { listItemButtons: w$ };
const T$ = {
  $style: x$
};
var S$ = /* @__PURE__ */ Xe(k$, [["__cssModules", T$]]), $$ = /* @__PURE__ */ q({
  __name: "ListItemQuantity",
  props: {
    quantity: {}
  },
  setup(t) {
    const e = new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }), n = $e(() => e.format(t.quantity));
    return (s, i) => (y(), P("div", {
      class: $(s.$style.listItemQuantity)
    }, ye(n.value) + "x ", 3));
  }
});
const I$ = "listItemQuantity";
var M$ = { listItemQuantity: I$ };
const C$ = {
  $style: M$
};
var E$ = /* @__PURE__ */ Xe($$, [["__cssModules", C$]]), F$ = /* @__PURE__ */ q({
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
    return (r, a) => (y(), W(wl, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item,
      direction: "horizontal"
    }, {
      default: j(() => [
        z(xl, null, {
          default: j(() => [
            Xr(ye(t.item.content), 1)
          ]),
          _: 1
        }),
        z(Ms, { name: "check" }, {
          default: j(() => [
            t.item.quantity && t.item.quantity > 1 ? (y(), W(E$, {
              key: 0,
              quantity: t.item.quantity
            }, null, 8, ["quantity"])) : ne("", !0)
          ]),
          _: 1
        }),
        z(d(yl)),
        z(Ms, { name: "check" }, {
          default: j(() => [
            t.item.checked ? ne("", !0) : (y(), W(S$, { key: 0 }, {
              default: j(() => [
                t.item.quantity && t.item.quantity > 1 ? (y(), W(jh, {
                  key: 0,
                  icon: "",
                  onTap: a[0] || (a[0] = (o) => s())
                })) : ne("", !0),
                z(jh, {
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
}), O$ = /* @__PURE__ */ q({
  __name: "ListItemFooter",
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(e.$style.listItemFooter)
    }, [
      ce(e.$slots, "default")
    ], 2));
  }
});
const D$ = "listItemFooter";
var A$ = { listItemFooter: D$ };
const L$ = {
  $style: A$
};
var N$ = /* @__PURE__ */ Xe(O$, [["__cssModules", L$]]);
const V$ = ["src", "alt"];
var B$ = /* @__PURE__ */ q({
  __name: "ListItemPerson",
  props: {
    image: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (y(), P("div", {
      class: $(e.$style.listItemPerson)
    }, [
      t.image ? (y(), P("img", {
        key: 0,
        class: $(e.$style.listItemPersonImage),
        src: t.image,
        alt: t.name
      }, null, 10, V$)) : ne("", !0),
      fe("span", null, ye(t.name), 1)
    ], 2));
  }
});
const _$ = "listItemPerson", z$ = "listItemPersonImage";
var R$ = { listItemPerson: _$, listItemPersonImage: z$ };
const P$ = {
  $style: R$
};
var W$ = /* @__PURE__ */ Xe(B$, [["__cssModules", P$]]);
class ui extends Error {
}
class H$ extends ui {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class U$ extends ui {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class q$ extends ui {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class xi extends ui {
}
class tg extends ui {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class wt extends ui {
}
class cs extends ui {
  constructor() {
    super("Zone is an abstract class");
  }
}
const K = "numeric", gn = "short", zt = "long", Io = {
  year: K,
  month: K,
  day: K
}, ng = {
  year: K,
  month: gn,
  day: K
}, Z$ = {
  year: K,
  month: gn,
  day: K,
  weekday: gn
}, sg = {
  year: K,
  month: zt,
  day: K
}, ig = {
  year: K,
  month: zt,
  day: K,
  weekday: zt
}, rg = {
  hour: K,
  minute: K
}, ag = {
  hour: K,
  minute: K,
  second: K
}, og = {
  hour: K,
  minute: K,
  second: K,
  timeZoneName: gn
}, lg = {
  hour: K,
  minute: K,
  second: K,
  timeZoneName: zt
}, ug = {
  hour: K,
  minute: K,
  hourCycle: "h23"
}, cg = {
  hour: K,
  minute: K,
  second: K,
  hourCycle: "h23"
}, dg = {
  hour: K,
  minute: K,
  second: K,
  hourCycle: "h23",
  timeZoneName: gn
}, fg = {
  hour: K,
  minute: K,
  second: K,
  hourCycle: "h23",
  timeZoneName: zt
}, hg = {
  year: K,
  month: K,
  day: K,
  hour: K,
  minute: K
}, mg = {
  year: K,
  month: K,
  day: K,
  hour: K,
  minute: K,
  second: K
}, pg = {
  year: K,
  month: gn,
  day: K,
  hour: K,
  minute: K
}, gg = {
  year: K,
  month: gn,
  day: K,
  hour: K,
  minute: K,
  second: K
}, j$ = {
  year: K,
  month: gn,
  day: K,
  weekday: gn,
  hour: K,
  minute: K
}, yg = {
  year: K,
  month: zt,
  day: K,
  hour: K,
  minute: K,
  timeZoneName: gn
}, vg = {
  year: K,
  month: zt,
  day: K,
  hour: K,
  minute: K,
  second: K,
  timeZoneName: gn
}, bg = {
  year: K,
  month: zt,
  day: K,
  weekday: zt,
  hour: K,
  minute: K,
  timeZoneName: zt
}, kg = {
  year: K,
  month: zt,
  day: K,
  weekday: zt,
  hour: K,
  minute: K,
  second: K,
  timeZoneName: zt
};
class ca {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new cs();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new cs();
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
    throw new cs();
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
    throw new cs();
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
    throw new cs();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new cs();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new cs();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new cs();
  }
}
let Ou = null;
class Tl extends ca {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Ou === null && (Ou = new Tl()), Ou;
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
    return Og(e, n, s);
  }
  /** @override **/
  formatOffset(e, n) {
    return Br(this.offset(e), n);
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
const Mc = /* @__PURE__ */ new Map();
function G$(t) {
  let e = Mc.get(t);
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
  }), Mc.set(t, e)), e;
}
const Y$ = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function J$(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, o, l, u, c] = s;
  return [a, i, r, o, l, u, c];
}
function X$(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], o = Y$[r];
    r === "era" ? s[o] = a : ue(o) || (s[o] = parseInt(a, 10));
  }
  return s;
}
const Du = /* @__PURE__ */ new Map();
class Kn extends ca {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = Du.get(e);
    return n === void 0 && Du.set(e, n = new Kn(e)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Du.clear(), Mc.clear();
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
    super(), this.zoneName = e, this.valid = Kn.isValidZone(e);
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
    return Og(e, n, s, this.name);
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
    return Br(this.offset(e), n);
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
    const s = G$(this.name);
    let [i, r, a, o, l, u, c] = s.formatToParts ? X$(s, n) : J$(s, n);
    o === "BC" && (i = -Math.abs(i) + 1);
    const m = $l({
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
let Gh = {};
function K$(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Gh[n];
  return s || (s = new Intl.ListFormat(t, e), Gh[n] = s), s;
}
const Cc = /* @__PURE__ */ new Map();
function Ec(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Cc.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), Cc.set(n, s)), s;
}
const Fc = /* @__PURE__ */ new Map();
function Q$(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Fc.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), Fc.set(n, s)), s;
}
const Oc = /* @__PURE__ */ new Map();
function eI(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = Oc.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), Oc.set(i, r)), r;
}
let wr = null;
function tI() {
  return wr || (wr = new Intl.DateTimeFormat().resolvedOptions().locale, wr);
}
const Dc = /* @__PURE__ */ new Map();
function wg(t) {
  let e = Dc.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), Dc.set(t, e)), e;
}
const Ac = /* @__PURE__ */ new Map();
function nI(t) {
  let e = Ac.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...xg, ...e }), Ac.set(t, e);
  }
  return e;
}
function sI(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = Ec(t).resolvedOptions(), i = t;
    } catch {
      const l = t.substring(0, n);
      s = Ec(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function iI(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function rI(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = oe.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function aI(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const s = oe.utc(2016, 11, 13 + n);
    e.push(t(s));
  }
  return e;
}
function Aa(t, e, n, s) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : s(e);
}
function oI(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || wg(t.locale).numberingSystem === "latn";
}
class lI {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...s };
      s.padTo > 0 && (o.minimumIntegerDigits = s.padTo), this.inf = Q$(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Od(e, 3);
      return nt(n, this.padTo);
    }
  }
}
class uI {
  constructor(e, n, s) {
    this.opts = s, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && Kn.create(o).valid ? (i = o, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || i, this.dtf = Ec(n, r);
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
class cI {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && Eg() && (this.rtf = eI(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : DI(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const xg = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Le {
  static fromOpts(e) {
    return Le.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, s, i, r = !1) {
    const a = e || Je.defaultLocale, o = a || (r ? "en-US" : tI()), l = n || Je.defaultNumberingSystem, u = s || Je.defaultOutputCalendar, c = Nc(i) || Je.defaultWeekSettings;
    return new Le(o, l, u, c, a);
  }
  static resetCache() {
    wr = null, Cc.clear(), Fc.clear(), Oc.clear(), Dc.clear(), Ac.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return Le.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, o, l] = sI(e);
    this.locale = a, this.numberingSystem = n || o || null, this.outputCalendar = s || l || null, this.weekSettings = i, this.intl = iI(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = oI(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Le.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      Nc(e.weekSettings) || this.weekSettings,
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
    return Aa(this, e, Lg, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (o) => this.dtFormatter(o, i).format() : (o) => this.extract(o, i, "month");
        this.monthsCache[r][e] = rI(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return Aa(this, e, Bg, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = aI(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Aa(
      this,
      void 0,
      () => _g,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [oe.utc(2016, 11, 13, 9), oe.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Aa(this, e, zg, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [oe.utc(-40, 1, 1), oe.utc(2017, 1, 1)].map(
        (s) => this.extract(s, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, s) {
    const i = this.dtFormatter(e, n), r = i.formatToParts(), a = r.find((o) => o.type.toLowerCase() === s);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new lI(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new uI(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new cI(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return K$(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || wg(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Fg() ? nI(this.locale) : xg;
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
let Au = null;
class At extends ca {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Au === null && (Au = new At(0)), Au;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? At.utcInstance : new At(e);
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
        return new At(Il(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${Br(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Br(-this.fixed, "narrow")}`;
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
    return Br(this.fixed, n);
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
class dI extends ca {
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
function ks(t, e) {
  if (ue(t) || t === null)
    return e;
  if (t instanceof ca)
    return t;
  if (yI(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Tl.instance : n === "utc" || n === "gmt" ? At.utcInstance : At.parseSpecifier(n) || Kn.create(t);
  } else return Ss(t) ? At.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new dI(t);
}
const Md = {
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
}, Yh = {
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
}, fI = Md.hanidec.replace(/[\[|\]]/g, "").split("");
function hI(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search(Md.hanidec) !== -1)
        e += fI.indexOf(t[n]);
      else
        for (const i in Yh) {
          const [r, a] = Yh[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const Lc = /* @__PURE__ */ new Map();
function mI() {
  Lc.clear();
}
function sn({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = Lc.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), Lc.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${Md[n]}${e}`), s.set(e, i)), i;
}
let Jh = () => Date.now(), Xh = "system", Kh = null, Qh = null, em = null, tm = 60, nm, sm = null;
class Je {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Jh;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Jh = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Xh = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return ks(Xh, Tl.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Kh;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Kh = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Qh;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Qh = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return em;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    em = e;
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
    return sm;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    sm = Nc(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return tm;
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
    tm = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return nm;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    nm = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Le.resetCache(), Kn.resetCache(), oe.resetCache(), mI();
  }
}
class un {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Tg = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Sg = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Gt(t, e) {
  return new un(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Cd(t, e, n) {
  const s = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const i = s.getUTCDay();
  return i === 0 ? 7 : i;
}
function $g(t, e, n) {
  return n + (da(t) ? Sg : Tg)[e - 1];
}
function Ig(t, e) {
  const n = da(t) ? Sg : Tg, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function Ed(t, e) {
  return (t - e + 7) % 7 + 1;
}
function Mo(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = $g(s, i, r), o = Ed(Cd(s, i, r), n);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = s - 1, l = Yr(u, e, n)) : l > Yr(s, e, n) ? (u = s + 1, l = 1) : u = s, { weekYear: u, weekNumber: l, weekday: o, ...Ml(t) };
}
function im(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = Ed(Cd(s, 1, e), n), o = Li(s);
  let l = i * 7 + r - a - 7 + e, u;
  l < 1 ? (u = s - 1, l += Li(u)) : l > o ? (u = s + 1, l -= Li(s)) : u = s;
  const { month: c, day: f } = Ig(u, l);
  return { year: u, month: c, day: f, ...Ml(t) };
}
function Lu(t) {
  const { year: e, month: n, day: s } = t, i = $g(e, n, s);
  return { year: e, ordinal: i, ...Ml(t) };
}
function rm(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = Ig(e, n);
  return { year: e, month: s, day: i, ...Ml(t) };
}
function am(t, e) {
  if (!ue(t.localWeekday) || !ue(t.localWeekNumber) || !ue(t.localWeekYear)) {
    if (!ue(t.weekday) || !ue(t.weekNumber) || !ue(t.weekYear))
      throw new xi(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ue(t.localWeekday) || (t.weekday = t.localWeekday), ue(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), ue(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function pI(t, e = 4, n = 1) {
  const s = Sl(t.weekYear), i = Yt(
    t.weekNumber,
    1,
    Yr(t.weekYear, e, n)
  ), r = Yt(t.weekday, 1, 7);
  return s ? i ? r ? !1 : Gt("weekday", t.weekday) : Gt("week", t.weekNumber) : Gt("weekYear", t.weekYear);
}
function gI(t) {
  const e = Sl(t.year), n = Yt(t.ordinal, 1, Li(t.year));
  return e ? n ? !1 : Gt("ordinal", t.ordinal) : Gt("year", t.year);
}
function Mg(t) {
  const e = Sl(t.year), n = Yt(t.month, 1, 12), s = Yt(t.day, 1, Co(t.year, t.month));
  return e ? n ? s ? !1 : Gt("day", t.day) : Gt("month", t.month) : Gt("year", t.year);
}
function Cg(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = Yt(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = Yt(n, 0, 59), o = Yt(s, 0, 59), l = Yt(i, 0, 999);
  return r ? a ? o ? l ? !1 : Gt("millisecond", i) : Gt("second", s) : Gt("minute", n) : Gt("hour", e);
}
function ue(t) {
  return typeof t > "u";
}
function Ss(t) {
  return typeof t == "number";
}
function Sl(t) {
  return typeof t == "number" && t % 1 === 0;
}
function yI(t) {
  return typeof t == "string";
}
function vI(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Eg() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Fg() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function bI(t) {
  return Array.isArray(t) ? t : [t];
}
function om(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function kI(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function Hi(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function Nc(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new wt("Week settings must be an object");
  if (!Yt(t.firstDay, 1, 7) || !Yt(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !Yt(e, 1, 7)))
    throw new wt("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function Yt(t, e, n) {
  return Sl(t) && t >= e && t <= n;
}
function wI(t, e) {
  return t - e * Math.floor(t / e);
}
function nt(t, e = 2) {
  const n = t < 0;
  let s;
  return n ? s = "-" + ("" + -t).padStart(e, "0") : s = ("" + t).padStart(e, "0"), s;
}
function ys(t) {
  if (!(ue(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Rs(t) {
  if (!(ue(t) || t === null || t === ""))
    return parseFloat(t);
}
function Fd(t) {
  if (!(ue(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Od(t, e, n = "round") {
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
function da(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Li(t) {
  return da(t) ? 366 : 365;
}
function Co(t, e) {
  const n = wI(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? da(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function $l(t) {
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
function lm(t, e, n) {
  return -Ed(Cd(t, 1, e), n) + e - 1;
}
function Yr(t, e = 4, n = 1) {
  const s = lm(t, e, n), i = lm(t + 1, e, n);
  return (Li(t) - s + i) / 7;
}
function Vc(t) {
  return t > 99 ? t : t > Je.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Og(t, e, n, s = null) {
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
function Il(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + i;
}
function Dg(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new wt(`Invalid unit value ${t}`);
  return e;
}
function Eo(t, e) {
  const n = {};
  for (const s in t)
    if (Hi(t, s)) {
      const i = t[s];
      if (i == null) continue;
      n[e(s)] = Dg(i);
    }
  return n;
}
function Br(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), s = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${nt(n, 2)}:${nt(s, 2)}`;
    case "narrow":
      return `${i}${n}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${i}${nt(n, 2)}${nt(s, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Ml(t) {
  return kI(t, ["hour", "minute", "second", "millisecond"]);
}
const xI = [
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
], Ag = [
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
], TI = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Lg(t) {
  switch (t) {
    case "narrow":
      return [...TI];
    case "short":
      return [...Ag];
    case "long":
      return [...xI];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Ng = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Vg = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], SI = ["M", "T", "W", "T", "F", "S", "S"];
function Bg(t) {
  switch (t) {
    case "narrow":
      return [...SI];
    case "short":
      return [...Vg];
    case "long":
      return [...Ng];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const _g = ["AM", "PM"], $I = ["Before Christ", "Anno Domini"], II = ["BC", "AD"], MI = ["B", "A"];
function zg(t) {
  switch (t) {
    case "narrow":
      return [...MI];
    case "short":
      return [...II];
    case "long":
      return [...$I];
    default:
      return null;
  }
}
function CI(t) {
  return _g[t.hour < 12 ? 0 : 1];
}
function EI(t, e) {
  return Bg(e)[t.weekday - 1];
}
function FI(t, e) {
  return Lg(e)[t.month - 1];
}
function OI(t, e) {
  return zg(e)[t.year < 0 ? 0 : 1];
}
function DI(t, e, n = "always", s = !1) {
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
function um(t, e) {
  let n = "";
  for (const s of t)
    s.literal ? n += s.val : n += e(s.val);
  return n;
}
const AI = {
  D: Io,
  DD: ng,
  DDD: sg,
  DDDD: ig,
  t: rg,
  tt: ag,
  ttt: og,
  tttt: lg,
  T: ug,
  TT: cg,
  TTT: dg,
  TTTT: fg,
  f: hg,
  ff: pg,
  fff: yg,
  ffff: bg,
  F: mg,
  FF: gg,
  FFF: vg,
  FFFF: kg
};
class $t {
  static create(e, n = {}) {
    return new $t(e, n);
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
    return AI[e];
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
      return nt(e, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), s && (i.signDisplay = s), this.loc.numberFormatter(i).format(e);
  }
  formatDateTimeFromString(e, n) {
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, p) => this.loc.extract(e, h, p), a = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", o = () => s ? CI(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (h, p) => s ? FI(e, h) : r(p ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, p) => s ? EI(e, h) : r(
      p ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), c = (h) => {
      const p = $t.macroTokenToFormatOpts(h);
      return p ? this.formatWithSystemDefault(e, p) : h;
    }, f = (h) => s ? OI(e, h) : r({ era: h }, "era"), m = (h) => {
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
    return um($t.parseFormat(n), m);
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
        let b;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? b = "never" : this.opts.signMode === "all" ? b = "always" : b = "auto", this.num(c.get(h) * p, m.length, b);
      } else
        return m;
    }, a = $t.parseFormat(n), o = a.reduce(
      (c, { literal: f, val: m }) => f ? c : c.concat(m),
      []
    ), l = e.shiftTo(...o.map(i).filter((c) => c)), u = {
      isNegativeDuration: l < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(l.values)[0]
    };
    return um(a, r(l, u));
  }
}
const Rg = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Qi(...t) {
  const e = t.reduce((n, s) => n + s.source, "");
  return RegExp(`^${e}$`);
}
function er(...t) {
  return (e) => t.reduce(
    ([n, s, i], r) => {
      const [a, o, l] = r(e, i);
      return [{ ...n, ...a }, o || s, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function tr(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, s] of e) {
    const i = n.exec(t);
    if (i)
      return s(i);
  }
  return [null, null];
}
function Pg(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = ys(e[n + i]);
    return [s, null, n + i];
  };
}
const Wg = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, LI = `(?:${Wg.source}?(?:\\[(${Rg.source})\\])?)?`, Dd = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Hg = RegExp(`${Dd.source}${LI}`), Ad = RegExp(`(?:[Tt]${Hg.source})?`), NI = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, VI = /(\d{4})-?W(\d\d)(?:-?(\d))?/, BI = /(\d{4})-?(\d{3})/, _I = Pg("weekYear", "weekNumber", "weekDay"), zI = Pg("year", "ordinal"), RI = /(\d{4})-(\d\d)-(\d\d)/, Ug = RegExp(
  `${Dd.source} ?(?:${Wg.source}|(${Rg.source}))?`
), PI = RegExp(`(?: ${Ug.source})?`);
function Ni(t, e, n) {
  const s = t[e];
  return ue(s) ? n : ys(s);
}
function WI(t, e) {
  return [{
    year: Ni(t, e),
    month: Ni(t, e + 1, 1),
    day: Ni(t, e + 2, 1)
  }, null, e + 3];
}
function nr(t, e) {
  return [{
    hours: Ni(t, e, 0),
    minutes: Ni(t, e + 1, 0),
    seconds: Ni(t, e + 2, 0),
    milliseconds: Fd(t[e + 3])
  }, null, e + 4];
}
function fa(t, e) {
  const n = !t[e] && !t[e + 1], s = Il(t[e + 1], t[e + 2]), i = n ? null : At.instance(s);
  return [{}, i, e + 3];
}
function ha(t, e) {
  const n = t[e] ? Kn.create(t[e]) : null;
  return [{}, n, e + 1];
}
const HI = RegExp(`^T?${Dd.source}$`), UI = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function qI(t) {
  const [e, n, s, i, r, a, o, l, u] = t, c = e[0] === "-", f = l && l[0] === "-", m = (h, p = !1) => h !== void 0 && (p || h && c) ? -h : h;
  return [
    {
      years: m(Rs(n)),
      months: m(Rs(s)),
      weeks: m(Rs(i)),
      days: m(Rs(r)),
      hours: m(Rs(a)),
      minutes: m(Rs(o)),
      seconds: m(Rs(l), l === "-0"),
      milliseconds: m(Fd(u), f)
    }
  ];
}
const ZI = {
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
function Ld(t, e, n, s, i, r, a) {
  const o = {
    year: e.length === 2 ? Vc(ys(e)) : ys(e),
    month: Ag.indexOf(n) + 1,
    day: ys(s),
    hour: ys(i),
    minute: ys(r)
  };
  return a && (o.second = ys(a)), t && (o.weekday = t.length > 3 ? Ng.indexOf(t) + 1 : Vg.indexOf(t) + 1), o;
}
const jI = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function GI(t) {
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
  ] = t, m = Ld(e, i, s, n, r, a, o);
  let h;
  return l ? h = ZI[l] : u ? h = 0 : h = Il(c, f), [m, new At(h)];
}
function YI(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const JI = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, XI = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, KI = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function cm(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [Ld(e, i, s, n, r, a, o), At.utcInstance];
}
function QI(t) {
  const [, e, n, s, i, r, a, o] = t;
  return [Ld(e, o, n, s, i, r, a), At.utcInstance];
}
const eM = Qi(NI, Ad), tM = Qi(VI, Ad), nM = Qi(BI, Ad), sM = Qi(Hg), qg = er(
  WI,
  nr,
  fa,
  ha
), iM = er(
  _I,
  nr,
  fa,
  ha
), rM = er(
  zI,
  nr,
  fa,
  ha
), aM = er(
  nr,
  fa,
  ha
);
function oM(t) {
  return tr(
    t,
    [eM, qg],
    [tM, iM],
    [nM, rM],
    [sM, aM]
  );
}
function lM(t) {
  return tr(YI(t), [jI, GI]);
}
function uM(t) {
  return tr(
    t,
    [JI, cm],
    [XI, cm],
    [KI, QI]
  );
}
function cM(t) {
  return tr(t, [UI, qI]);
}
const dM = er(nr);
function fM(t) {
  return tr(t, [HI, dM]);
}
const hM = Qi(RI, PI), mM = Qi(Ug), pM = er(
  nr,
  fa,
  ha
);
function gM(t) {
  return tr(
    t,
    [hM, qg],
    [mM, pM]
  );
}
const dm = "Invalid Duration", Zg = {
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
}, yM = {
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
  ...Zg
}, Ut = 146097 / 400, pi = 146097 / 4800, vM = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Ut / 7,
    days: Ut,
    hours: Ut * 24,
    minutes: Ut * 24 * 60,
    seconds: Ut * 24 * 60 * 60,
    milliseconds: Ut * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Ut / 28,
    days: Ut / 4,
    hours: Ut * 24 / 4,
    minutes: Ut * 24 * 60 / 4,
    seconds: Ut * 24 * 60 * 60 / 4,
    milliseconds: Ut * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: pi / 7,
    days: pi,
    hours: pi * 24,
    minutes: pi * 24 * 60,
    seconds: pi * 24 * 60 * 60,
    milliseconds: pi * 24 * 60 * 60 * 1e3
  },
  ...Zg
}, Gs = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], bM = Gs.slice(0).reverse();
function Vn(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new Ce(s);
}
function jg(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of bM.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function fm(t, e) {
  const n = jg(t, e) < 0 ? -1 : 1;
  Gs.reduceRight((s, i) => {
    if (ue(e[i]))
      return s;
    if (s) {
      const r = e[s] * n, a = t[i][s], o = Math.floor(r / a);
      e[i] += o * n, e[s] -= o * a * n;
    }
    return i;
  }, null), Gs.reduce((s, i) => {
    if (ue(e[i]))
      return s;
    if (s) {
      const r = e[s] % 1;
      e[s] -= r, e[i] += r * t[s][i];
    }
    return i;
  }, null);
}
function hm(t) {
  const e = {};
  for (const [n, s] of Object.entries(t))
    s !== 0 && (e[n] = s);
  return e;
}
class Ce {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let s = n ? vM : yM;
    e.matrix && (s = e.matrix), this.values = e.values, this.loc = e.loc || Le.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = s, this.isLuxonDuration = !0;
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
    return Ce.fromObject({ milliseconds: e }, n);
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
      throw new wt(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new Ce({
      values: Eo(e, Ce.normalizeUnit),
      loc: Le.fromObject(n),
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
    if (Ss(e))
      return Ce.fromMillis(e);
    if (Ce.isDuration(e))
      return e;
    if (typeof e == "object")
      return Ce.fromObject(e);
    throw new wt(
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
    const [s] = cM(e);
    return s ? Ce.fromObject(s, n) : Ce.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    const [s] = fM(e);
    return s ? Ce.fromObject(s, n) : Ce.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new wt("need to specify a reason the Duration is invalid");
    const s = e instanceof un ? e : new un(e, n);
    if (Je.throwOnInvalid)
      throw new q$(s);
    return new Ce({ invalid: s });
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
    if (!n) throw new tg(e);
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
    return this.isValid ? $t.create(this.loc, s).formatDurationFromString(this, e) : dm;
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
    if (!this.isValid) return dm;
    const n = e.showZeros !== !1, s = Gs.map((i) => {
      const r = this.values[i];
      return ue(r) || r === 0 && !n ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: i.slice(0, -1) }).format(r);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Od(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, oe.fromMillis(n, { zone: "UTC" }).toISOTime(e));
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
    return this.isValid ? jg(this.matrix, this.values) : NaN;
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
    const n = Ce.fromDurationLike(e), s = {};
    for (const i of Gs)
      (Hi(n.values, i) || Hi(this.values, i)) && (s[i] = n.get(i) + this.get(i));
    return Vn(this, { values: s }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = Ce.fromDurationLike(e);
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
      n[s] = Dg(e(this.values[s], s));
    return Vn(this, { values: n }, !0);
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
    return this[Ce.normalizeUnit(e)];
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
    const n = { ...this.values, ...Eo(e, Ce.normalizeUnit) };
    return Vn(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: s, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: s };
    return Vn(this, a);
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
    return fm(this.matrix, e), Vn(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = hm(this.normalize().shiftToAll().toObject());
    return Vn(this, { values: e }, !0);
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
    e = e.map((a) => Ce.normalizeUnit(a));
    const n = {}, s = {}, i = this.toObject();
    let r;
    for (const a of Gs)
      if (e.indexOf(a) >= 0) {
        r = a;
        let o = 0;
        for (const u in s)
          o += this.matrix[u][a] * s[u], s[u] = 0;
        Ss(i[a]) && (o += i[a]);
        const l = Math.trunc(o);
        n[a] = l, s[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else Ss(i[a]) && (s[a] = i[a]);
    for (const a in s)
      s[a] !== 0 && (n[r] += a === r ? s[a] : s[a] / this.matrix[r][a]);
    return fm(this.matrix, n), Vn(this, { values: n }, !0);
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
    return Vn(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = hm(this.values);
    return Vn(this, { values: e }, !0);
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
    for (const s of Gs)
      if (!n(this.values[s], e.values[s]))
        return !1;
    return !0;
  }
}
const gi = "Invalid Interval";
function kM(t, e) {
  return !t || !t.isValid ? Ge.invalid("missing or invalid start") : !e || !e.isValid ? Ge.invalid("missing or invalid end") : e < t ? Ge.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class Ge {
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
      throw new wt("need to specify a reason the Interval is invalid");
    const s = e instanceof un ? e : new un(e, n);
    if (Je.throwOnInvalid)
      throw new U$(s);
    return new Ge({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = fr(e), i = fr(n), r = kM(s, i);
    return r ?? new Ge({
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
    const s = Ce.fromDurationLike(n), i = fr(e);
    return Ge.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = Ce.fromDurationLike(n), i = fr(e);
    return Ge.fromDateTimes(i.minus(s), i);
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
        r = oe.fromISO(s, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = oe.fromISO(i, n), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return Ge.fromDateTimes(r, o);
      if (a) {
        const u = Ce.fromISO(i, n);
        if (u.isValid)
          return Ge.after(r, u);
      } else if (l) {
        const u = Ce.fromISO(s, n);
        if (u.isValid)
          return Ge.before(o, u);
      }
    }
    return Ge.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    return this.isValid ? Ge.fromDateTimes(e || this.s, n || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const n = e.map(fr).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), s = [];
    let { s: i } = this, r = 0;
    for (; i < this.e; ) {
      const a = n[r] || this.e, o = +a > +this.e ? this.e : a;
      s.push(Ge.fromDateTimes(i, o)), i = o, r += 1;
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
    const n = Ce.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, i = 1, r;
    const a = [];
    for (; s < this.e; ) {
      const o = this.start.plus(n.mapUnits((l) => l * i));
      r = +o > +this.e ? this.e : o, a.push(Ge.fromDateTimes(s, r)), s = r, i += 1;
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
    return n >= s ? null : Ge.fromDateTimes(n, s);
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
    return Ge.fromDateTimes(n, s);
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
      s += l.type === "s" ? 1 : -1, s === 1 ? n = l.time : (n && +n != +l.time && i.push(Ge.fromDateTimes(n, l.time)), n = null);
    return Ge.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return Ge.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : gi;
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
  toLocaleString(e = Io, n = {}) {
    return this.isValid ? $t.create(this.s.loc.clone(n), e).formatInterval(this) : gi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : gi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : gi;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : gi;
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
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : gi;
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
    return this.isValid ? this.e.diff(this.s, e, n) : Ce.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return Ge.fromDateTimes(e(this.s), e(this.e));
  }
}
class La {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = Je.defaultZone) {
    const n = oe.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return Kn.isValidZone(e);
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
    return ks(e, Je.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Le.create(e)).getStartOfWeek();
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
    return (n || Le.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Le.create(e)).getWeekendDays().slice();
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
    return (i || Le.create(n, s, r)).months(e);
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
    return (i || Le.create(n, s, r)).months(e, !0);
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
    return (i || Le.create(n, s, null)).weekdays(e);
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
    return (i || Le.create(n, s, null)).weekdays(e, !0);
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
    return Le.create(e).meridiems();
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
    return Le.create(n, null, "gregory").eras(e);
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
    return { relative: Eg(), localeWeek: Fg() };
  }
}
function mm(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(Ce.fromMillis(s).as("days"));
}
function wM(t, e, n) {
  const s = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const c = mm(l, u);
        return (c - c % 7) / 7;
      }
    ],
    ["days", mm]
  ], i = {}, r = t;
  let a, o;
  for (const [l, u] of s)
    n.indexOf(l) >= 0 && (a = l, i[l] = u(t, e), o = r.plus(i), o > e ? (i[l]--, t = r.plus(i), t > e && (o = t, i[l]--, t = r.plus(i))) : t = o);
  return [t, i, o, a];
}
function xM(t, e, n, s) {
  let [i, r, a, o] = wM(t, e, n);
  const l = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [o]: 1 })), a !== i && (r[o] = (r[o] || 0) + l / (a - i)));
  const c = Ce.fromObject(r, s);
  return u.length > 0 ? Ce.fromMillis(l, s).shiftTo(...u).plus(c) : c;
}
const TM = "missing Intl.DateTimeFormat.formatToParts support";
function Oe(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(hI(n)) };
}
const SM = " ", Gg = `[ ${SM}]`, Yg = new RegExp(Gg, "g");
function $M(t) {
  return t.replace(/\./g, "\\.?").replace(Yg, Gg);
}
function pm(t) {
  return t.replace(/\./g, "").replace(Yg, " ").toLowerCase();
}
function rn(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map($M).join("|")),
    deser: ([n]) => t.findIndex((s) => pm(n) === pm(s)) + e
  };
}
function gm(t, e) {
  return { regex: t, deser: ([, n, s]) => Il(n, s), groups: e };
}
function Na(t) {
  return { regex: t, deser: ([e]) => e };
}
function IM(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function MM(t, e) {
  const n = sn(e), s = sn(e, "{2}"), i = sn(e, "{3}"), r = sn(e, "{4}"), a = sn(e, "{6}"), o = sn(e, "{1,2}"), l = sn(e, "{1,3}"), u = sn(e, "{1,6}"), c = sn(e, "{1,9}"), f = sn(e, "{2,4}"), m = sn(e, "{4,6}"), h = (S) => ({ regex: RegExp(IM(S.val)), deser: ([k]) => k, literal: !0 }), b = ((S) => {
    if (t.literal)
      return h(S);
    switch (S.val) {
      // era
      case "G":
        return rn(e.eras("short"), 0);
      case "GG":
        return rn(e.eras("long"), 0);
      // years
      case "y":
        return Oe(u);
      case "yy":
        return Oe(f, Vc);
      case "yyyy":
        return Oe(r);
      case "yyyyy":
        return Oe(m);
      case "yyyyyy":
        return Oe(a);
      // months
      case "M":
        return Oe(o);
      case "MM":
        return Oe(s);
      case "MMM":
        return rn(e.months("short", !0), 1);
      case "MMMM":
        return rn(e.months("long", !0), 1);
      case "L":
        return Oe(o);
      case "LL":
        return Oe(s);
      case "LLL":
        return rn(e.months("short", !1), 1);
      case "LLLL":
        return rn(e.months("long", !1), 1);
      // dates
      case "d":
        return Oe(o);
      case "dd":
        return Oe(s);
      // ordinals
      case "o":
        return Oe(l);
      case "ooo":
        return Oe(i);
      // time
      case "HH":
        return Oe(s);
      case "H":
        return Oe(o);
      case "hh":
        return Oe(s);
      case "h":
        return Oe(o);
      case "mm":
        return Oe(s);
      case "m":
        return Oe(o);
      case "q":
        return Oe(o);
      case "qq":
        return Oe(s);
      case "s":
        return Oe(o);
      case "ss":
        return Oe(s);
      case "S":
        return Oe(l);
      case "SSS":
        return Oe(i);
      case "u":
        return Na(c);
      case "uu":
        return Na(o);
      case "uuu":
        return Oe(n);
      // meridiem
      case "a":
        return rn(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Oe(r);
      case "kk":
        return Oe(f, Vc);
      // weekNumber (W)
      case "W":
        return Oe(o);
      case "WW":
        return Oe(s);
      // weekdays
      case "E":
      case "c":
        return Oe(n);
      case "EEE":
        return rn(e.weekdays("short", !1), 1);
      case "EEEE":
        return rn(e.weekdays("long", !1), 1);
      case "ccc":
        return rn(e.weekdays("short", !0), 1);
      case "cccc":
        return rn(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return gm(new RegExp(`([+-]${o.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return gm(new RegExp(`([+-]${o.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return Na(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return Na(/[^\S\n\r]/);
      default:
        return h(S);
    }
  })(t) || {
    invalidReason: TM
  };
  return b.token = t, b;
}
const CM = {
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
function EM(t, e, n) {
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
  let o = CM[a];
  if (typeof o == "object" && (o = o[r]), o)
    return {
      literal: !1,
      val: o
    };
}
function FM(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function OM(t, e, n) {
  const s = t.match(e);
  if (s) {
    const i = {};
    let r = 1;
    for (const a in n)
      if (Hi(n, a)) {
        const o = n[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (i[o.token.val[0]] = o.deser(s.slice(r, r + l))), r += l;
      }
    return [s, i];
  } else
    return [s, {}];
}
function DM(t) {
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
  return ue(t.z) || (n = Kn.create(t.z)), ue(t.Z) || (n || (n = new At(t.Z)), s = t.Z), ue(t.q) || (t.M = (t.q - 1) * 3 + 1), ue(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), ue(t.u) || (t.S = Fd(t.u)), [Object.keys(t).reduce((r, a) => {
    const o = e(a);
    return o && (r[o] = t[a]), r;
  }, {}), n, s];
}
let Nu = null;
function AM() {
  return Nu || (Nu = oe.fromMillis(1555555555555)), Nu;
}
function LM(t, e) {
  if (t.literal)
    return t;
  const n = $t.macroTokenToFormatOpts(t.val), s = Qg(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function Jg(t, e) {
  return Array.prototype.concat(...t.map((n) => LM(n, e)));
}
class Xg {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = Jg($t.parseFormat(n), e), this.units = this.tokens.map((s) => MM(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = FM(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = OM(e, this.regex, this.handlers), [i, r, a] = s ? DM(s) : [null, null, void 0];
      if (Hi(s, "a") && Hi(s, "H"))
        throw new xi(
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
function Kg(t, e, n) {
  return new Xg(t, n).explainFromTokens(e);
}
function NM(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = Kg(t, e, n);
  return [s, i, r, a];
}
function Qg(t, e) {
  if (!t)
    return null;
  const s = $t.create(e, t).dtFormatter(AM()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => EM(a, t, r));
}
const Vu = "Invalid DateTime", ym = 864e13;
function xr(t) {
  return new un("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Bu(t) {
  return t.weekData === null && (t.weekData = Mo(t.c)), t.weekData;
}
function _u(t) {
  return t.localWeekData === null && (t.localWeekData = Mo(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Ps(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new oe({ ...n, ...e, old: n });
}
function ey(t, e, n) {
  let s = t - e * 60 * 1e3;
  const i = n.offset(s);
  if (e === i)
    return [s, e];
  s -= (i - e) * 60 * 1e3;
  const r = n.offset(s);
  return i === r ? [s, i] : [t - Math.min(i, r) * 60 * 1e3, Math.max(i, r)];
}
function Va(t, e) {
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
function Ja(t, e, n) {
  return ey($l(t), e, n);
}
function vm(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, Co(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = Ce.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = $l(r);
  let [l, u] = ey(o, n, t.zone);
  return a !== 0 && (l += a, u = t.zone.offset(l)), { ts: l, o: u };
}
function yi(t, e, n, s, i, r) {
  const { setZone: a, zone: o } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const l = e || o, u = oe.fromObject(t, {
      ...n,
      zone: l,
      specificOffset: r
    });
    return a ? u : u.setZone(o);
  } else
    return oe.invalid(
      new un("unparsable", `the input "${i}" can't be parsed as ${s}`)
    );
}
function Ba(t, e, n = !0) {
  return t.isValid ? $t.create(Le.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function zu(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += nt(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += nt(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += nt(t.c.month), n === "month") return i;
  return i += nt(t.c.day), i;
}
function bm(t, e, n, s, i, r, a) {
  let o = !n || t.c.millisecond !== 0 || t.c.second !== 0, l = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (l += nt(t.c.hour), a === "hour") break;
      if (e) {
        if (l += ":", l += nt(t.c.minute), a === "minute") break;
        o && (l += ":", l += nt(t.c.second));
      } else {
        if (l += nt(t.c.minute), a === "minute") break;
        o && (l += nt(t.c.second));
      }
      if (a === "second") break;
      o && (!s || t.c.millisecond !== 0) && (l += ".", l += nt(t.c.millisecond, 3));
  }
  return i && (t.isOffsetFixed && t.offset === 0 && !r ? l += "Z" : t.o < 0 ? (l += "-", l += nt(Math.trunc(-t.o / 60)), l += ":", l += nt(Math.trunc(-t.o % 60))) : (l += "+", l += nt(Math.trunc(t.o / 60)), l += ":", l += nt(Math.trunc(t.o % 60)))), r && (l += "[" + t.zone.ianaName + "]"), l;
}
const ty = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, VM = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, BM = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Xa = ["year", "month", "day", "hour", "minute", "second", "millisecond"], _M = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], zM = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ka(t) {
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
  if (!e) throw new tg(t);
  return e;
}
function km(t) {
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
      return Ka(t);
  }
}
function RM(t) {
  if (Tr === void 0 && (Tr = Je.now()), t.type !== "iana")
    return t.offset(Tr);
  const e = t.name;
  let n = Bc.get(e);
  return n === void 0 && (n = t.offset(Tr), Bc.set(e, n)), n;
}
function wm(t, e) {
  const n = ks(e.zone, Je.defaultZone);
  if (!n.isValid)
    return oe.invalid(xr(n));
  const s = Le.fromObject(e);
  let i, r;
  if (ue(t.year))
    i = Je.now();
  else {
    for (const l of Xa)
      ue(t[l]) && (t[l] = ty[l]);
    const a = Mg(t) || Cg(t);
    if (a)
      return oe.invalid(a);
    const o = RM(n);
    [i, r] = Ja(t, o, n);
  }
  return new oe({ ts: i, zone: n, loc: s, o: r });
}
function xm(t, e, n) {
  const s = ue(n.round) ? !0 : n.round, i = ue(n.rounding) ? "trunc" : n.rounding, r = (o, l) => (o = Od(o, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(o, l)), a = (o) => n.calendary ? e.hasSame(t, o) ? 0 : e.startOf(o).diff(t.startOf(o), o).get(o) : e.diff(t, o).get(o);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const o of n.units) {
    const l = a(o);
    if (Math.abs(l) >= 1)
      return r(l, o);
  }
  return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function Tm(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let Tr;
const Bc = /* @__PURE__ */ new Map();
class oe {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || Je.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new un("invalid input") : null) || (n.isValid ? null : xr(n));
    this.ts = ue(e.ts) ? Je.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const o = Ss(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Va(this.ts, o), s = Number.isNaN(i.year) ? new un("invalid input") : null, i = s ? null : i, r = s ? null : o;
      }
    this._zone = n, this.loc = e.loc || Le.create(), this.invalid = s, this.weekData = null, this.localWeekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0;
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
    return new oe({});
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
    const [e, n] = Tm(arguments), [s, i, r, a, o, l, u] = n;
    return wm({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
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
    const [e, n] = Tm(arguments), [s, i, r, a, o, l, u] = n;
    return e.zone = At.utcInstance, wm({ year: s, month: i, day: r, hour: a, minute: o, second: l, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = vI(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return oe.invalid("invalid input");
    const i = ks(n.zone, Je.defaultZone);
    return i.isValid ? new oe({
      ts: s,
      zone: i,
      loc: Le.fromObject(n)
    }) : oe.invalid(xr(i));
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
    if (Ss(e))
      return e < -ym || e > ym ? oe.invalid("Timestamp out of range") : new oe({
        ts: e,
        zone: ks(n.zone, Je.defaultZone),
        loc: Le.fromObject(n)
      });
    throw new wt(
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
    if (Ss(e))
      return new oe({
        ts: e * 1e3,
        zone: ks(n.zone, Je.defaultZone),
        loc: Le.fromObject(n)
      });
    throw new wt("fromSeconds requires a numerical input");
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
    const s = ks(n.zone, Je.defaultZone);
    if (!s.isValid)
      return oe.invalid(xr(s));
    const i = Le.fromObject(n), r = Eo(e, km), { minDaysInFirstWeek: a, startOfWeek: o } = am(r, i), l = Je.now(), u = ue(n.specificOffset) ? s.offset(l) : n.specificOffset, c = !ue(r.ordinal), f = !ue(r.year), m = !ue(r.month) || !ue(r.day), h = f || m, p = r.weekYear || r.weekNumber;
    if ((h || c) && p)
      throw new xi(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && c)
      throw new xi("Can't mix ordinal dates with month/day");
    const b = p || r.weekday && !h;
    let S, k, F = Va(l, u);
    b ? (S = _M, k = VM, F = Mo(F, a, o)) : c ? (S = zM, k = BM, F = Lu(F)) : (S = Xa, k = ty);
    let T = !1;
    for (const B of S) {
      const _ = r[B];
      ue(_) ? T ? r[B] = k[B] : r[B] = F[B] : T = !0;
    }
    const O = b ? pI(r, a, o) : c ? gI(r) : Mg(r), I = O || Cg(r);
    if (I)
      return oe.invalid(I);
    const N = b ? im(r, a, o) : c ? rm(r) : r, [Z, w] = Ja(N, u, s), x = new oe({
      ts: Z,
      zone: s,
      o: w,
      loc: i
    });
    return r.weekday && h && e.weekday !== x.weekday ? oe.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${x.toISO()}`
    ) : x.isValid ? x : oe.invalid(x.invalid);
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
    const [s, i] = oM(e);
    return yi(s, i, n, "ISO 8601", e);
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
    const [s, i] = lM(e);
    return yi(s, i, n, "RFC 2822", e);
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
    const [s, i] = uM(e);
    return yi(s, i, n, "HTTP", n);
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
    if (ue(e) || ue(n))
      throw new wt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: r = null } = s, a = Le.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [o, l, u, c] = NM(a, e, n);
    return c ? oe.invalid(c) : yi(o, l, s, `format ${n}`, e, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, s = {}) {
    return oe.fromFormat(e, n, s);
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
    const [s, i] = gM(e);
    return yi(s, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new wt("need to specify a reason the DateTime is invalid");
    const s = e instanceof un ? e : new un(e, n);
    if (Je.throwOnInvalid)
      throw new H$(s);
    return new oe({ invalid: s });
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
    const s = Qg(e, Le.fromObject(n));
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
    return Jg($t.parseFormat(e), Le.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    Tr = void 0, Bc.clear();
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
    return this.isValid ? Bu(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? Bu(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? Bu(this).weekday : NaN;
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
    return this.isValid ? _u(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? _u(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? _u(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Lu(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? La.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? La.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? La.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? La.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, s = $l(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), o = this.zone.offset(s - r * n);
    if (a === o)
      return [this];
    const l = s - a * n, u = s - o * n, c = Va(l, a), f = Va(u, o);
    return c.hour === f.hour && c.minute === f.minute && c.second === f.second && c.millisecond === f.millisecond ? [Ps(this, { ts: l }), Ps(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return da(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Co(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Li(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Yr(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Yr(
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
    const { locale: n, numberingSystem: s, calendar: i } = $t.create(
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
    return this.setZone(At.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Je.defaultZone);
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
    if (e = ks(e, Je.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || s) {
        const r = e.offset(this.ts), a = this.toObject();
        [i] = Ja(a, r, e);
      }
      return Ps(this, { ts: i, zone: e });
    } else
      return oe.invalid(xr(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: s } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: s });
    return Ps(this, { loc: i });
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
    const n = Eo(e, km), { minDaysInFirstWeek: s, startOfWeek: i } = am(n, this.loc), r = !ue(n.weekYear) || !ue(n.weekNumber) || !ue(n.weekday), a = !ue(n.ordinal), o = !ue(n.year), l = !ue(n.month) || !ue(n.day), u = o || l, c = n.weekYear || n.weekNumber;
    if ((u || a) && c)
      throw new xi(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new xi("Can't mix ordinal dates with month/day");
    let f;
    r ? f = im(
      { ...Mo(this.c, s, i), ...n },
      s,
      i
    ) : ue(n.ordinal) ? (f = { ...this.toObject(), ...n }, ue(n.day) && (f.day = Math.min(Co(f.year, f.month), f.day))) : f = rm({ ...Lu(this.c), ...n });
    const [m, h] = Ja(f, this.o, this.zone);
    return Ps(this, { ts: m, o: h });
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
    const n = Ce.fromDurationLike(e);
    return Ps(this, vm(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = Ce.fromDurationLike(e).negate();
    return Ps(this, vm(this, n));
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
    const s = {}, i = Ce.normalizeUnit(e);
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
    return this.isValid ? $t.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Vu;
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
  toLocaleString(e = Io, n = {}) {
    return this.isValid ? $t.create(this.loc.clone(n), e).formatDateTime(this) : Vu;
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
    return this.isValid ? $t.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    a = Ka(a);
    const o = e === "extended";
    let l = zu(this, o, a);
    return Xa.indexOf(a) >= 3 && (l += "T"), l += bm(
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
    return this.isValid ? zu(this, e === "extended", Ka(n)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Ba(this, "kkkk-'W'WW-c");
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
    return this.isValid ? (o = Ka(o), (i && Xa.indexOf(o) >= 3 ? "T" : "") + bm(
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
    return Ba(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Ba(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? zu(this, !0) : null;
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
    return (n || e) && (s && (i += " "), n ? i += "z" : e && (i += "ZZ")), Ba(this, i, !0);
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
    return this.isValid ? this.toISO() : Vu;
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
      return Ce.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = bI(n).map(Ce.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, u = xM(o, l, r, i);
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
    return this.diff(oe.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? Ge.fromDateTimes(this, e) : this;
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
    const n = e.base || oe.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, r = void 0), xm(n, this.plus(s), {
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
    return this.isValid ? xm(e.base || oe.fromObject({}, { zone: this.zone }), this, {
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
    if (!e.every(oe.isDateTime))
      throw new wt("min requires all arguments be DateTimes");
    return om(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(oe.isDateTime))
      throw new wt("max requires all arguments be DateTimes");
    return om(e, (n) => n.valueOf(), Math.max);
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
    const { locale: i = null, numberingSystem: r = null } = s, a = Le.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    return Kg(a, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, s = {}) {
    return oe.fromFormatExplain(e, n, s);
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
    const { locale: s = null, numberingSystem: i = null } = n, r = Le.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new Xg(r, e);
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
    if (ue(e) || ue(n))
      throw new wt(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: r = null } = s, a = Le.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new wt(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: o, zone: l, specificOffset: u, invalidReason: c } = n.explainFromTokens(e);
    return c ? oe.invalid(c) : yi(
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
    return Io;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return ng;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Z$;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return sg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return ig;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return rg;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return ag;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return og;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return lg;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return ug;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return cg;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return dg;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return fg;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return hg;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return mg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return pg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return gg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return j$;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return yg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return vg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return bg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return kg;
  }
}
function fr(t) {
  if (oe.isDateTime(t))
    return t;
  if (t && t.valueOf && Ss(t.valueOf()))
    return oe.fromJSDate(t);
  if (t && typeof t == "object")
    return oe.fromObject(t);
  throw new wt(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
var PM = /* @__PURE__ */ q({
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
    }), s = $e(() => {
      const i = oe.now();
      if (t.time) {
        const r = oe.fromFormat(`${t.date} ${t.time}`, "yyyy-MM-dd HH:mm:ss"), a = r.toFormat("HH:mm");
        return i.toISODate() === r.toISODate() ? `${Homey.__("widget.list.today_at")} ${a}` : i.year === r.year ? `${e.format(r.toJSDate())} ${a}` : `${n.format(r.toJSDate())} ${a}`;
      } else {
        const r = oe.fromFormat(t.date, "yyyy-MM-dd");
        return i.toISODate() === r.toISODate() ? Homey.__("widget.list.today") : i.year === r.year ? e.format(r.toJSDate()) : n.format(r.toJSDate());
      }
    });
    return (i, r) => (y(), P("div", {
      class: $(i.$style.listItemDate)
    }, ye(s.value), 3));
  }
});
const WM = "listItemDate";
var HM = { listItemDate: WM };
const UM = {
  $style: HM
};
var qM = /* @__PURE__ */ Xe(PM, [["__cssModules", UM]]), ZM = /* @__PURE__ */ q({
  __name: "ListItemTask",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (y(), W(wl, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item
    }, {
      default: j(() => [
        z(xl, null, {
          default: j(() => [
            Xr(ye(t.item.content), 1)
          ]),
          _: 1
        }),
        t.item.dueDate || t.item.person ? (y(), W(N$, { key: 0 }, {
          default: j(() => [
            t.item.person ? (y(), W(W$, {
              key: 0,
              image: t.item.person.image,
              name: t.item.person.name
            }, null, 8, ["image", "name"])) : ne("", !0),
            t.item.dueDate ? (y(), W(qM, {
              key: 1,
              date: t.item.dueDate,
              time: t.item.dueTime
            }, null, 8, ["date", "time"])) : ne("", !0)
          ]),
          _: 1
        })) : ne("", !0)
      ]),
      _: 1
    }, 8, ["icon", "item"]));
  }
}), jM = /* @__PURE__ */ q({
  __name: "List",
  props: {
    defaultDateFilter: {},
    defaultTypeFilter: {},
    deviceId: {},
    dynamicHeight: { type: Boolean },
    fixedHeight: {}
  },
  setup(t) {
    const e = An(), {
      categories: n,
      filteredCategorizedItems: s,
      hasActiveFilters: i,
      hasFilteredItems: r,
      hasItems: a,
      isLoading: o,
      look: l,
      changeChecked: u,
      changeQuantity: c,
      initFilters: f,
      loadCategories: m,
      loadItems: h,
      loadLook: p,
      loadPersons: b,
      removeItem: S,
      setItems: k
    } = Sd(), F = ie(null), T = ie(null), O = ie(!1);
    async function I() {
      switch (d(l)?.type) {
        case "grocery_list":
          F.value = "product";
          break;
        case "list":
          F.value = "task";
          break;
      }
    }
    async function N() {
      F.value = "note";
    }
    async function Z(B) {
      T.value = B;
    }
    async function w(B) {
      switch (B.type) {
        case "product":
        case "task":
          await u(t.deviceId, B, !B.checked);
          break;
      }
    }
    async function x() {
      if (!t.dynamicHeight) {
        Homey.setHeight(Math.max(120, t.fixedHeight));
        return;
      }
      const B = document.querySelector("#app"), { height: _ } = B.getBoundingClientRect();
      Homey.setHeight(d(F) || d(T) ? Math.max(420, _) : _);
    }
    return Homey.on("list-items-changed", async ({ id: B, items: _ }) => {
      B === t.deviceId && await k(_);
    }), Homey.on("list-look-changed", async (B) => B === t.deviceId && await p(t.deviceId)), Ue([F, T, s, O], async () => {
      await x();
    }, { flush: "post" }), Ue(() => t.deviceId, async () => {
      f(
        t.defaultTypeFilter,
        t.defaultDateFilter
      ), await Promise.allSettled([
        m(t.deviceId),
        p(t.deviceId),
        h(t.deviceId),
        b(t.deviceId)
      ]);
    }, { immediate: !0 }), (B, _) => (y(), P(ve, null, [
      d(l) ? (y(), W(vS, {
        key: 0,
        color: d(l).color,
        "has-active-filters": d(i),
        icon: d(l).icon,
        name: d(l).name,
        onAdd: _[0] || (_[0] = (A) => I()),
        onAddNote: _[1] || (_[1] = (A) => N()),
        onFilter: _[2] || (_[2] = (A) => O.value = !O.value)
      }, null, 8, ["color", "has-active-filters", "icon", "name"])) : ne("", !0),
      z(Ms, {
        mode: "out-in",
        name: "check",
        onEnter: _[5] || (_[5] = (A) => x())
      }, {
        default: j(() => [
          d(o) && !d(a) ? (y(), W(TS, { key: 0 })) : d(a) ? (y(), W(Zh, { key: 1 }, {
            default: j(() => [
              z(Ms, { name: "filter-slide" }, {
                default: j(() => [
                  O.value ? (y(), W(_T, { key: 0 })) : ne("", !0)
                ]),
                _: 1
              }),
              d(r) ? (y(), W(_0, {
                key: 0,
                name: "items",
                onAfterEnter: _[3] || (_[3] = (A) => x()),
                onAfterLeave: _[4] || (_[4] = (A) => x())
              }, {
                default: j(() => [
                  (y(!0), P(ve, null, dt(d(s), (A, se, me) => (y(), P(ve, { key: se }, [
                    se !== "__other__" ? (y(), W(Uh, {
                      key: 0,
                      icon: d(n).find((te) => te.category === se)?.icon,
                      name: d(e)(`grocery.category.${se}`)
                    }, null, 8, ["icon", "name"])) : me > 0 ? (y(), W(Uh, {
                      key: 1,
                      name: d(e)("widget.list.other")
                    }, null, 8, ["name"])) : ne("", !0),
                    (y(!0), P(ve, null, dt(A, (te) => (y(), W(r$, {
                      key: te.id,
                      onLongPress: (Ie) => Z(te),
                      onRemove: (Ie) => d(S)(t.deviceId, te),
                      onTap: (Ie) => w(te)
                    }, {
                      default: j(() => [
                        te.type === "note" ? (y(), W(m$, {
                          key: 0,
                          item: te
                        }, null, 8, ["item"])) : te.type === "product" ? (y(), W(F$, {
                          key: 1,
                          item: te,
                          onDecrease: (Ie) => d(c)(t.deviceId, te, "decrease"),
                          onIncrease: (Ie) => d(c)(t.deviceId, te, "increase")
                        }, null, 8, ["item", "onDecrease", "onIncrease"])) : te.type === "task" ? (y(), W(ZM, {
                          key: 2,
                          item: te
                        }, null, 8, ["item"])) : ne("", !0)
                      ]),
                      _: 2
                    }, 1032, ["onLongPress", "onRemove", "onTap"]))), 128))
                  ], 64))), 128))
                ]),
                _: 1
              })) : ne("", !0),
              d(r) ? ne("", !0) : (y(), W(qh, {
                key: 1,
                filtered: !0
              }))
            ]),
            _: 1
          })) : (y(), W(Zh, { key: 2 }, {
            default: j(() => [
              z(qh)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }),
      z(d(Ya), null, {
        default: j(() => [
          F.value ? (y(), W(TT, {
            key: 0,
            "device-id": t.deviceId,
            type: F.value,
            onClose: _[6] || (_[6] = (A) => F.value = null)
          }, null, 8, ["device-id", "type"])) : T.value ? (y(), W(ST, {
            key: 1,
            "device-id": t.deviceId,
            item: T.value,
            onClose: _[7] || (_[7] = (A) => T.value = null)
          }, null, 8, ["device-id", "item"])) : ne("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), GM = /* @__PURE__ */ q({
  __name: "ListWidget",
  setup(t) {
    const e = ie("all"), n = ie("all"), s = ie(null), i = ie(!0), r = ie(400), a = ie(!1);
    return window.addEventListener("homeyReady", () => {
      const o = Homey.getDeviceIds(), l = Homey.getSettings();
      e.value = l.defaultDateFilter ?? "all", n.value = l.defaultTypeFilter ?? "all", s.value = o[0] ?? null, i.value = l.dynamicHeight ?? !0, r.value = l.fixedHeight ?? 400, a.value = !0, Homey.ready();
    }), (o, l) => (y(), W(d(fT), {
      class: $([o.$style.listWidget, !i.value && o.$style.listWidgetFixed])
    }, {
      default: j(() => [
        a.value ? (y(), W(jM, {
          key: 0,
          "default-date-filter": e.value,
          "default-type-filter": n.value,
          "device-id": s.value,
          "dynamic-height": i.value,
          "fixed-height": r.value
        }, null, 8, ["default-date-filter", "default-type-filter", "device-id", "dynamic-height", "fixed-height"])) : ne("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const YM = "listWidget", JM = "listWidgetFixed";
var XM = { listWidget: YM, listWidgetFixed: JM };
const KM = {
  $style: XM
};
var QM = /* @__PURE__ */ Xe(GM, [["__cssModules", KM]]), eC = /* @__PURE__ */ q({
  __name: "PairView",
  setup(t) {
    const e = An(), n = ie([]), s = ie([]), i = On({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    es(async () => {
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
    return $s($d, n), $s(Id, s), (a, o) => (y(), W(d(Kp), {
      class: $(a.$style.pairView)
    }, {
      default: j(() => [
        z(d(Vr), {
          title: d(e)("device.list.pair.name.title"),
          description: d(e)("device.list.pair.name.description")
        }, {
          default: j(() => [
            z(d(Qp), {
              modelValue: i.name,
              "onUpdate:modelValue": o[0] || (o[0] = (l) => i.name = l),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        z(d(Vr), {
          title: d(e)("device.list.pair.color.title"),
          description: d(e)("device.list.pair.color.description")
        }, {
          default: j(() => [
            z(d(Xp), {
              modelValue: i.color,
              "onUpdate:modelValue": o[1] || (o[1] = (l) => i.color = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        z(d(Vr), {
          title: d(e)("device.list.pair.icon.title"),
          description: d(e)("device.list.pair.icon.description")
        }, {
          default: j(() => [
            z(d(eg), {
              modelValue: i.icon,
              "onUpdate:modelValue": o[2] || (o[2] = (l) => i.icon = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        z(d(Jp), {
          label: d(e)("device.list.pair.submit"),
          onClick: o[3] || (o[3] = (l) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const tC = "pairView";
var nC = { pairView: tC };
const sC = {
  $style: nC
};
var iC = /* @__PURE__ */ Xe(eC, [["__cssModules", sC]]), rC = /* @__PURE__ */ q({
  __name: "RepairView",
  setup(t) {
    const e = An(), n = ie([]), s = ie([]), i = On({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    es(async () => {
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
    return $s($d, n), $s(Id, s), (a, o) => (y(), W(d(Kp), {
      class: $(a.$style.repairView)
    }, {
      default: j(() => [
        z(d(Vr), {
          title: d(e)("device.list.pair.color.title"),
          description: d(e)("device.list.pair.color.description")
        }, {
          default: j(() => [
            z(d(Xp), {
              modelValue: i.color,
              "onUpdate:modelValue": o[0] || (o[0] = (l) => i.color = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        z(d(Vr), {
          title: d(e)("device.list.pair.icon.title"),
          description: d(e)("device.list.pair.icon.description")
        }, {
          default: j(() => [
            z(d(eg), {
              modelValue: i.icon,
              "onUpdate:modelValue": o[1] || (o[1] = (l) => i.icon = l)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        z(d(Jp), {
          label: d(e)("device.list.repair.submit"),
          onClick: o[2] || (o[2] = (l) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const aC = "repairView";
var oC = { repairView: aC };
const lC = {
  $style: oC
};
var uC = /* @__PURE__ */ Xe(rC, [["__cssModules", lC]]);
var cC = {
  prefix: "far",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z"]
}, dC = {
  prefix: "far",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8l115.6 0c13.3 0 25.3 8.3 30 20.8L328 48 424 48c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48l96 0 16.2-43.2zm-84.6 448L28.7 144 76.9 144 99.5 449.2c.6 8.4 7.6 14.8 16 14.8l217.1 0c8.4 0 15.3-6.5 16-14.8l22.6-305.2 48.1 0-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3l-217.1 0c-33.5 0-61.3-25.9-63.8-59.3z"]
}, fC = {
  prefix: "far",
  iconName: "bottle-droplet",
  icon: [320, 512, [], "e4c4", "M96-32c-17.7 0-32 14.3-32 32 0 11.8 6.4 22.2 16 27.7l0 121.7C32.2 177.1 0 228.7 0 288L0 456c0 48.6 39.4 88 88 88l144 0c48.6 0 88-39.4 88-88l0-168c0-59.3-32.2-110.9-80-138.6l0-121.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32L96-32zm32 64l64 0 0 132c0 9.4 5.5 18 14.1 21.9 38.9 17.6 65.9 56.7 65.9 102.1l0 168c0 22.1-17.9 40-40 40L88 496c-22.1 0-40-17.9-40-40l0-168c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9l0-132zm96 320c0-21.2-28.9-64.5-47.9-90.6-8.1-11.1-24.2-11.1-32.3 0-19 26.1-47.9 69.4-47.9 90.6 0 31.6 28.7 64 64 64s64-32.4 64-64z"]
}, hC = {
  prefix: "far",
  iconName: "wheat",
  icon: [576, 512, [], "f72d", "M72.5 240c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L297.4 455c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-30.5-30.5-63 63c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l63-63-30.5-30.5c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zm145 202.9c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM184.5 128c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L409.4 343c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM73.7 299.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L73.7 299.1zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM296.5 16c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L521.4 231c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM185.7 187.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4l-27.9-27.9zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM297.7 75.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L297.7 75.1zM544.5-24c6.4 0 12.5 2.5 17 7s7 10.6 7 17l0 35-.1 5.2c-2.6 51.7-44 93.1-95.7 95.7l-5.2 .1-35 0c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17l0-35c0-55.8 45.2-101 101-101l35 0zm-35 48c-29.3 0-53 23.7-53 53l0 11 11 0 5.4-.3c25-2.5 44.8-22.4 47.3-47.3l.3-5.4 0-11-11 0z"]
}, mC = {
  prefix: "far",
  iconName: "bottle-baby",
  icon: [320, 512, [], "e673", "M124.6 17.7L128 16 128 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 3.4 1.7c17.5 8.8 28.6 26.7 28.6 46.3 17.7 0 32 14.3 32 32l0 48 27.5 45.8c13.4 22.4 20.5 48 20.5 74.1L304 480c0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64l0-216.1c0-26.1 7.1-51.7 20.5-74.1L64 144 64 96c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3zM256 480l0-216.1c0-17.4-4.7-34.5-13.7-49.4l-13.5-22.5-137.6 0-13.5 22.5c-9 14.9-13.7 32-13.7 49.4l0 8.1 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 48c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"]
}, pC = {
  prefix: "far",
  iconName: "bread-loaf",
  icon: [576, 512, [127838], "f7eb", "M152 80l96 0c57.4 0 104 46.6 104 104l0 31c0 3.7-2.5 6.9-6.1 7.8l-7.8 1.9C327.5 227.4 320 237 320 248l0 144c0 22.1-17.9 40-40 40l-160 0c-22.1 0-40-17.9-40-40l0-144c0-11-7.5-20.6-18.2-23.3l-7.8-1.9c-3.6-.9-6.1-4.1-6.1-7.8l0-31C48 126.6 94.6 80 152 80zM120 480l336 0c48.6 0 88-39.4 88-88l0-120.8c18.3-3.7 32-19.8 32-39.2l0-48c0-83.9-68.1-152-152-152L152 32C68.1 32 0 100.1 0 184l0 31c0 21.9 12.8 41.5 32 50.6L32 392c0 48.6 39.4 88 88 88zm336-48l-97.6 0c6.1-12 9.6-25.6 9.6-40l0-120 128 0 0 120c0 22.1-17.9 40-40 40zM399.3 224c.5-2.9 .7-5.9 .7-9l0-31c0-40.2-15.6-76.8-41.1-104L424 80c57.4 0 104 46.6 104 104l0 40-128.7 0z"]
}, gC = {
  prefix: "far",
  iconName: "carrot",
  icon: [576, 512, [129365], "f787", "M392.4 25.9l6.5 6.5c21.9 21.9 21.9 57.3 0 79.2l-6.5 6.5-6.5-6.5c-21.9-21.9-21.9-57.3 0-79.2l6.5-6.5zm40.4 119.6c21.9-21.9 57.3-21.9 79.2 0l6.5 6.5-6.5 6.5c-21.9 21.9-57.3 21.9-79.2 0l-6.5-6.5 6.5-6.5zm30-64c2.7-29.7-7.3-60.4-30-83.1L420.7-13.7c-15.6-15.6-40.9-15.6-56.6 0L352-1.5c-27 27-36.1 65.2-27.1 99.7-8.2-1.4-16.6-2.1-25.3-2.1-58.3 0-111.3 34.1-135.5 87.2L35.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5L361.1 380.3c53.1-24.1 87.2-77.1 87.2-135.5 0-8.6-.7-17-2.1-25.2 34.5 8.9 72.7-.1 99.7-27.1L558 180.3c15.6-15.6 15.6-40.9 0-56.6l-12.1-12.1c-22.7-22.7-53.4-32.8-83.1-30zM234.3 168c17.9-15.2 40.9-24 65.3-24 55.7 0 100.8 45.1 100.8 100.8 0 39.5-23.1 75.4-59.1 91.8l-89.7 40.8-26.3-26.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L205 398.5 96.6 447.8 205.8 207.4 239.4 241c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-39-39z"]
}, yC = {
  prefix: "far",
  iconName: "steak",
  icon: [576, 512, [129385], "f824", "M143.9 240.1l12.8 0c34.4 0 66-18.8 82.4-49.1l45.5-84.1C304.4 70.6 342.3 48 383.6 48 445.7 48 496 98.3 496 160.4L496 288c0 79.5-64.5 144-144 144l-208.1 0C91 432 48 389 48 336.1s43-95.9 95.9-95.9zm12.8-48l-12.8 0C64.4 192.1 0 256.6 0 336.1S64.4 480 143.9 480L352 480c106 0 192-86 192-192l0-127.6C544 71.8 472.2 0 383.6 0 324.7 0 270.5 32.3 242.5 84.1L197 168.2c-8 14.8-23.4 24-40.2 24zm-12.8 96c-26.5 0-47.9 21.5-47.9 47.9S117.5 384 143.9 384L352 384c53 0 96-43 96-96l0-127.6c0-35.6-28.8-64.4-64.4-64.4-23.6 0-45.4 13-56.7 33.8l-45.5 84.1c-24.8 45.8-72.6 74.3-124.6 74.3l-12.8 0zM360 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
}, vC = {
  prefix: "far",
  iconName: "bowl-spoon",
  icon: [512, 512, [129379], "e3e0", "M112 128c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48zm0 48c52.2 0 96-30.6 108.5-72L488 104c13.3 0 24-10.7 24-24s-10.7-24-24-24L220.5 56C208 14.6 164.2-16 112-16 50.1-16 0 27 0 80s50.1 96 112 96zm64.5 282.9C172 447.1 163 437.6 151.5 432.5 90.4 404.8 48 343.3 48 272l416 0c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1l-144 0c-3.3 0-6.3-2-7.5-5.1zM48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8l144 0c23.8 0 44.2-14.9 52.3-35.8 77.7-35.2 131.7-113.4 131.7-204.2 0-26.5-21.5-48-48-48L48 224z"]
}, bC = {
  prefix: "far",
  iconName: "pump-soap",
  icon: [320, 512, [], "e06b", "M128 48l64 0 0 80-64 0 0-80zM80 32l0 96-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-16 0 0-40 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-8c0-17.7-14.3-32-32-32L112 0C94.3 0 80 14.3 80 32zM192 176l64 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l128 0zm32 168c0-32.5-37-80.9-50.9-97.9-3.2-3.9-8.1-6.1-13.1-6.1s-9.9 2.2-13.1 6.1c-13.8 16.9-50.9 65.3-50.9 97.9 0 35.3 28.7 56 64 56s64-20.7 64-56z"]
}, kC = {
  prefix: "far",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"]
}, wC = {
  prefix: "far",
  iconName: "spray-can-sparkles",
  icon: [576, 512, ["air-freshener"], "f5d0", "M160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80zm0 176c-26.5 0-48 21.5-48 48l0 184c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-184c0-26.5-21.5-48-48-48l-128 0zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 184c0 39.8-32.2 72-72 72l-176 0c-39.8 0-72-32.2-72-72l0-184zm160 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM448 48c0 1.4-1 3-2.2 3.6L416 64 403.6 93.8C403 95 401.4 96 400 96s-3-1-3.6-2.2L384 64 354.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L384 32 396.4 2.2C397 1 398.6 0 400 0s3 1 3.6 2.2L416 32 445.8 44.4C447 45 448 46.6 448 48zm76.4 45.8L512 64 482.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 32 524.4 2.2C525 1 526.6 0 528 0s3 1 3.6 2.2L544 32 573.8 44.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 64 531.6 93.8C531 95 529.4 96 528 96s-3-1-3.6-2.2zm7.2 100.4L544 224 573.8 236.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 256 531.6 285.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L512 256 482.2 243.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 224 524.4 194.2c.6-1.2 2.2-2.2 3.6-2.2s3 1 3.6 2.2zM512 144c0 1.4-1 3-2.2 3.6L480 160 467.6 189.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L448 160 418.2 147.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L448 128 460.4 98.2C461 97 462.6 96 464 96s3 1 3.6 2.2L480 128 509.8 140.4c1.2 .6 2.2 2.2 2.2 3.6z"]
}, xC = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, TC = {
  prefix: "far",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9C512 342.1 403.9 448 273.2 448 191.7 448 121.9 392.4 101.8 316.8 68.7 347.4 48 391.3 48 440l0 16c0 13.3-10.7 24-24 24S0 469.2 0 456l0-16c0-75.1 38.3-141.2 96.4-179.9 6.1-91.7 82.4-164.1 175.6-164.1 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3zM464 79.9c-38.3 29.5-102.4 64.1-192 64.1-57.6 0-106.4 38.1-122.4 90.4 20.9-6.8 43.2-10.4 66.4-10.4l80 0c13.3 0 24 10.8 24 24s-10.7 24-24 24l-80 0c-25.4 0-49.4 5.7-71 15.8 7.9 63.1 62.6 112.2 128.2 112.2 104.7 0 190.8-84.9 190.8-189.1l0-131z"]
}, SC = {
  prefix: "far",
  iconName: "fish",
  icon: [576, 512, [128031], "f578", "M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1 33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8-12.6-22.1-35-52.2-65.3-77.8-33.7-28.5-76-50.2-124.5-50.2s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1-14 15.8-36.7 20.6-56 11.8l-54.3-24.9 21.1 36.9c8.4 14.8 8.4 32.9 0 47.6l-21.1 36.9 54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35 39.2-33.1 92-61.5 155.5-61.5s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8 4.7 9.2 4.7 20.1 0 29.3-14.1 27.4-41.9 66.8-81 99.8-39.2 33.1-92 61.5-155.5 61.5s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5s-11.1-25.4-4.2-37.5zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, $C = {
  prefix: "far",
  iconName: "olive-branch",
  icon: [640, 512, [], "e317", "M2.7 53.1C13.8 41.6 59 0 128 0 194.9 0 239.4 39.1 252.2 52L306 26.7C343.3 9.1 384 0 425.2 0L616 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L425.2 48c-34.2 0-67.9 7.5-98.8 22.1L191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0c-8.8 0-16-7.2-16-16l0-16C0 194.6 34.5 141.4 85.2 114.5 40.4 102.8 11.3 75.8 2.7 66.9 .9 65 0 62.6 0 60s.9-5 2.7-6.9zM399.4 427c19.3-25.7 32.6-63.3 32.6-107s-13.3-81.3-32.6-107c-19.2-25.7-42.2-37-63.4-37s-44.2 11.4-63.4 37C253.3 238.7 240 276.4 240 320s13.3 81.3 32.6 107c19.2 25.7 42.2 37 63.4 37s44.2-11.4 63.4-37zM336 512c-79.5 0-144-86-144-192s64.5-192 144-192 144 86 144 192-64.5 192-144 192zm129.7-40.2c9.4-13.1 17.6-27.5 24.4-43.1 3.6 .8 7.1 1.5 10.5 2 31.1 4.6 55-3.6 70.2-19.3 15.4-16 23.9-42.1 19.2-76-4.7-33.8-22.2-71.6-53.2-103.7-18-18.7-37.7-32.5-57.2-41.7-4.9-8.8-10.3-17.2-16.2-25-10.5-14-22.7-26.5-36.2-36.9 48.2 1.6 101.3 25.8 144.2 70.3 75 77.8 90.2 188.1 33.9 246.4-34.1 35.4-86.8 43.5-139.6 27z"]
}, IC = {
  prefix: "far",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M209.5 369c-9.4 9.4-24.6 9.4-33.9 0L15.5 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143 143-143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-160 160z"]
}, MC = {
  prefix: "far",
  iconName: "can-food",
  icon: [384, 512, [129387], "e3e6", "M320 434.3c-3.4 3-10.2 7.5-21.7 12.2-24.8 10.1-62.3 17.5-106.3 17.5s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2l0-144.8c14.2 6.2 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1l0 144.8zm48 5.7l0-368c0-39.8-78.8-72-176-72S16 32.2 16 72l0 368c0 39.8 78.8 72 176 72s176-32.2 176-72zM304 72c0 13.3-50.1 24-112 24S80 85.3 80 72 130.1 48 192 48 304 58.7 304 72zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, CC = {
  prefix: "far",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"]
}, EC = {
  prefix: "far",
  iconName: "cup-straw",
  icon: [384, 512, [129380], "e363", "M232.6-16C207.2-16 185 1.1 178.5 25.6L159.7 96 32 96C18.7 96 8 106.7 8 120s10.7 24 24 24L60.2 468.2C62.3 493 83.1 512 108 512l168 0c24.9 0 45.7-19 47.8-43.8L352 144c13.3 0 24-10.7 24-24s-10.7-24-24-24l-142.6 0 15.5-58.1c.9-3.5 4.1-5.9 7.7-5.9L264 32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-31.4 0zM80.2 144l223.6 0-27.8 320-168 0-27.8-320z"]
}, FC = {
  prefix: "far",
  iconName: "salad",
  icon: [512, 512, [129367, "bowl-salad"], "f81e", "M272 208c0 11 1.2 21.7 3.6 32l-31.6 0 0-128c0-11-9-20-20-20s-20 9-20 20l0 127.7-93.9-93.9c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L147.7 240 96 240c-53 0-96-43-96-96S43 48 96 48c8.7 0 17.2 1.2 25.3 3.4 17.2-39.6 56.8-67.4 102.7-67.4s85.5 27.7 102.7 67.4c8-2.2 16.5-3.4 25.3-3.4 19.9 0 38.3 6 53.6 16.4-74.7 5.3-133.6 67.6-133.6 143.6zM117.9 422.3c12.9 5.7 22.7 16.7 26.8 30.3 2 6.6 8.2 11.4 15.3 11.4l192 0c7.2 0 13.4-4.8 15.3-11.4 4-13.5 13.8-24.6 26.8-30.3 35.2-15.4 61.2-47.6 68.1-86.3L49.8 336c6.9 38.7 32.9 70.9 68.1 86.3zM0 315.4C0 300.3 12.3 288 27.4 288l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 67.4-40.6 125.4-98.6 150.8-7.9 26.4-32.4 45.7-61.4 45.7l-192 0c-29 0-53.5-19.3-61.4-45.7-58.1-25.4-98.6-83.4-98.6-150.8zM464 208c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32l-54.8 0c-3.5-10-5.5-20.8-5.5-32 0-53 43-96 96-96s96 43 96 96c0 11.2-1.9 22-5.5 32l-54.8 0c7.6-8.5 12.2-19.7 12.2-32z"]
}, OC = {
  prefix: "far",
  iconName: "paw-simple",
  icon: [448, 512, ["paw-alt"], "f701", "M192 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-.7 146.1c7.1-11.3 19.4-18.1 32.7-18.1s25.7 6.9 32.7 18.1l49.2 78.6c8.7 14 20.9 22.8 32.2 28.1 17.8 8.4 30 26.4 30 47.1 0 28.7-23.3 52-52 52-11.1 0-21.2-3.4-29.6-9.2-19.6-13.6-43.8-17.6-62.4-17.6s-42.8 4-62.4 17.6c-8.4 5.8-18.5 9.2-29.6 9.2-28.7 0-52-23.3-52-52 0-20.8 12.2-38.8 30-47.1 11.2-5.3 23.4-14.1 32.2-28.1l49.2-78.6zm-89.9 53.2c-2.8 4.5-7.1 7.8-11.8 10.1-34 16-57.6 50.5-57.6 90.6 0 55.2 44.8 100 100 100 21.2 0 40.8-6.6 56.9-17.8 17.4-12 52.8-12 70.1 0 16.2 11.2 35.8 17.8 56.9 17.8 55.2 0 100-44.8 100-100 0-40.1-23.6-74.6-57.6-90.6-4.8-2.2-9-5.6-11.8-10.1l-49.1-78.6C281.6 175.4 253.9 160 224 160s-57.6 15.4-73.4 40.7l-49.2 78.6zM304 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm144 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 240a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, DC = {
  prefix: "far",
  iconName: "cheese-swiss",
  icon: [512, 512, [129472], "f7f0", "M464 256l0-15.8c0-88.5-71.7-160.2-160.2-160.2-.8 0-1.6 .2-2.3 .7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2C50 248.4 48 252.1 48 256l274.7 0c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32l50.7 0zM48 304l0 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-112-60.2 0c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16L48 304zm464-63.8L512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2zM176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
}, AC = {
  prefix: "far",
  iconName: "capsules",
  icon: [576, 512, [], "f46b", "M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112-128 0 0-112zm0 288l0-125.3 128 0 0 125.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM32 112l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-105.8 116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3c-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112zM283.4 249.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l53.3 77.7-106.1 74.3-51.5-75.1zM411.9 436.6l-49.8-72.6 106.1-74.3 48 70c20.9 30.4 13.3 72.2-15.8 93-28.5 20.4-68 13.7-88.5-16.2z"]
}, LC = {
  prefix: "far",
  iconName: "cookie",
  icon: [512, 512, [127850], "f563", "M240.5 64.6c-12-1.7-24.3 .5-35.1 6.2l-74 39.5C120.7 116 112 125 106.6 136L69.9 211.6c-5.4 11-7.1 23.5-5 35.6L79.4 330c2.1 12.1 8 23.2 16.8 31.7l60.3 58.4c8.8 8.5 20 14 32 15.7l83 11.7c12 1.7 24.3-.5 35.1-6.2l74-39.5C391.3 396 400 387 405.4 376l36.7-75.5c5.4-11 7.1-23.5 5-35.6L432.6 182c-2.1-12.1-8-23.2-16.8-31.7L355.5 91.9c-8.8-8.5-20-14-32-15.7l-83-11.7zM182.8 28.4c19.7-10.5 42.3-14.5 64.4-11.4l83 11.7c22.1 3.1 42.7 13.2 58.7 28.7l60.3 58.4c16.1 15.6 26.8 35.8 30.7 57.9l14.6 82.8c3.9 22.1 .7 44.8-9.1 64.9L448.6 397c-9.8 20.1-25.7 36.6-45.4 47.2l-74 39.5c-19.7 10.5-42.3 14.5-64.4 11.4l-83-11.7c-22.1-3.1-42.7-13.2-58.7-28.7L62.8 396.2C46.8 380.6 36 360.3 32.2 338.3L17.6 255.5c-3.9-22.1-.7-44.8 9.1-64.9L63.4 115c9.8-20.1 25.7-36.6 45.4-47.2l74-39.5zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, NC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  faAngleDown: IC,
  faBottleBaby: mC,
  faBottleDroplet: fC,
  faBowlSpoon: vC,
  faBreadLoaf: pC,
  faCalendar: kC,
  faCanFood: MC,
  faCapsules: AC,
  faCarrot: gC,
  faCheeseSwiss: DC,
  faCookie: LC,
  faCupStraw: EC,
  faFish: SC,
  faLeaf: TC,
  faMinus: cC,
  faOliveBranch: $C,
  faPawSimple: OC,
  faPlus: CC,
  faPumpSoap: bC,
  faSalad: FC,
  faSnowflake: xC,
  faSprayCanSparkles: wC,
  faSteak: yC,
  faTrash: dC,
  faWheat: hC
});
F3(NC);
function Nd(t, e) {
  const n = N2(t);
  return n.config.globalProperties.t = (s) => Homey.__(s) ?? s, n.use(hT()), n.mount(e), n;
}
function nE(t) {
  Nd(QM, t);
}
function sE(t) {
  Nd(iC, t);
}
function iE(t) {
  Nd(uC, t);
}
window.onHomeyReady = function() {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("homeyReady"));
  }, 300);
};
export {
  Jp as ButtonPrimary,
  eE as ButtonTransparent,
  Xp as ColorPicker,
  Kp as Form,
  Vr as FormGroup,
  Qp as FormInput,
  ws as Icon,
  eg as IconPicker,
  tE as ScrollContainer,
  nE as createListWidget,
  sE as createPairView,
  iE as createRepairView,
  An as useTranslate
};
