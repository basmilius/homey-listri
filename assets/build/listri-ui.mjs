var ta, na;
let Ul, Qe, $e, js, Gs, Ji, Ba, ql, zn, La;
function gr(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
let ke = {}, ps = [], zt = () => {
}, Su = () => !1, vr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || 97 > t.charCodeAt(2)), ul = (t) => t.startsWith("onUpdate:"), He = Object.assign, cl = (t, e) => {
  let n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, pf = Object.prototype.hasOwnProperty, Se = (t, e) => pf.call(t, e), X = Array.isArray, ae = (t) => typeof t == "function", Be = (t) => typeof t == "string", Bt = (t) => typeof t == "symbol", Ee = (t) => t !== null && typeof t == "object", Tu = (t) => (Ee(t) || ae(t)) && ae(t.then) && ae(t.catch), je = Object.prototype.toString, yr = (t) => Be(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Zs = gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), br = (t) => {
  let e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, gf = /-\w/g, vt = br((t) => t.replace(gf, (e) => e.slice(1).toUpperCase())), vf = /\B([A-Z])/g, Dn = br((t) => t.replace(vf, "-$1").toLowerCase()), kr = br((t) => t.charAt(0).toUpperCase() + t.slice(1)), sa = br((t) => t ? `on${kr(t)}` : ""), ht = (t, e) => !Object.is(t, e), Wi = (t, ...e) => {
  for (let n = 0; n < t.length; n++) t[n](...e);
}, xu = (t, e, n, s = !1) => {
  Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: s, value: n });
}, wr = (t) => {
  let e = parseFloat(t);
  return isNaN(e) ? t : e;
}, ia = (t) => {
  let e = Be(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
}, Ir = () => Ul || (Ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), yf = gr("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function st(t) {
  if (X(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) {
      let s = t[n], i = Be(s) ? (function(r) {
        let a = {};
        return r.replace(wf, "").split(bf).forEach((l) => {
          if (l) {
            let o = l.split(kf);
            o.length > 1 && (a[o[0].trim()] = o[1].trim());
          }
        }), a;
      })(s) : st(s);
      if (i) for (let r in i) e[r] = i[r];
    }
    return e;
  }
  if (Be(t) || Ee(t)) return t;
}
let bf = /;(?![^(]*\))/g, kf = /:([^]+)/, wf = /\/\*[^]*?\*\//g;
function E(t) {
  let e = "";
  if (Be(t)) e = t;
  else if (X(t)) for (let n = 0; n < t.length; n++) {
    let s = E(t[n]);
    s && (e += s + " ");
  }
  else if (Ee(t)) for (let n in t) t[n] && (e += n + " ");
  return e.trim();
}
function ra(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !Be(e) && (t.class = E(e)), n && (t.style = st(n)), t;
}
let If = gr("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function es(t, e) {
  let n, s;
  if (t === e) return !0;
  let i = (n = t, je.call(n) === "[object Date]"), r = (s = e, je.call(s) === "[object Date]");
  if (i || r) return !!i && !!r && t.getTime() === e.getTime();
  if (i = Bt(t), r = Bt(e), i || r) return t === e;
  if (i = X(t), r = X(e), i || r) return !!i && !!r && (function(a, l) {
    if (a.length !== l.length) return !1;
    let o = !0;
    for (let u = 0; o && u < a.length; u++) o = es(a[u], l[u]);
    return o;
  })(t, e);
  if (i = Ee(t), r = Ee(e), i || r) {
    if (!i || !r || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (let a in t) {
      let l = t.hasOwnProperty(a), o = e.hasOwnProperty(a);
      if (l && !o || !l && o || !es(t[a], e[a])) return !1;
    }
  }
  return String(t) === String(e);
}
function dl(t, e) {
  return t.findIndex((n) => es(n, e));
}
let Cu = (t) => !!(t && t.__v_isRef === !0), ge = (t) => Be(t) ? t : t == null ? "" : X(t) || Ee(t) && (t.toString === je || !ae(t.toString)) ? Cu(t) ? ge(t.value) : JSON.stringify(t, Eu, 2) : String(t), Eu = (t, e) => {
  let n;
  if (Cu(e)) return Eu(t, e.value);
  if (n = e, je.call(n) === "[object Map]") return { [`Map(${e.size})`]: [...e.entries()].reduce((s, [i, r], a) => (s[aa(i, a) + " =>"] = r, s), {}) };
  {
    let s;
    if (s = e, je.call(s) === "[object Set]") return { [`Set(${e.size})`]: [...e.values()].map((i) => aa(i)) };
    {
      if (Bt(e)) return aa(e);
      let i;
      if (Ee(e) && !X(e) && (i = e, je.call(i) !== "[object Object]")) return String(e);
    }
  }
  return e;
}, aa = (t, e = "") => {
  var n;
  return Bt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
};
class Au {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Qe, !e && Qe && (this.index = (Qe.scopes || (Qe.scopes = [])).push(this) - 1);
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
      let n = Qe;
      try {
        return Qe = this, e();
      } finally {
        Qe = n;
      }
    }
  }
  on() {
    ++this._on == 1 && (this.prevScope = Qe, Qe = this);
  }
  off() {
    this._on > 0 && --this._on == 0 && (Qe = this.prevScope, this.prevScope = void 0);
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
function Fu(t) {
  return new Au(t);
}
function $u() {
  return Qe;
}
function Ou(t, e = !1) {
  Qe && Qe.cleanups.push(t);
}
let la = /* @__PURE__ */ new WeakSet();
class Mu {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Qe && Qe.active && Qe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, la.has(this) && (la.delete(this), this.trigger()));
  }
  notify() {
    (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || Bu(this));
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, jl(this), Lu(this);
    let e = $e, n = Ot;
    $e = this, Ot = !0;
    try {
      return this.fn();
    } finally {
      Du(this), $e = e, Ot = n, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) hl(e);
      this.deps = this.depsTail = void 0, jl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? la.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    Da(this) && this.run();
  }
  get dirty() {
    return Da(this);
  }
}
let Sr = 0;
function Bu(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Gs, Gs = t;
    return;
  }
  t.next = js, js = t;
}
function fl() {
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
function Lu(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Du(t) {
  let e, n = t.depsTail, s = n;
  for (; s; ) {
    let i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), hl(s), (function(r) {
      let { prevDep: a, nextDep: l } = r;
      a && (a.nextDep = l, r.prevDep = void 0), l && (l.prevDep = a, r.nextDep = void 0);
    })(s)) : e = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  t.deps = e, t.depsTail = n;
}
function Da(t) {
  for (let e = t.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (_u(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty;
}
function _u(t) {
  if (4 & t.flags && !(16 & t.flags) || (t.flags &= -17, t.globalVersion === si) || (t.globalVersion = si, !t.isSSR && 128 & t.flags && (!t.deps && !t._dirty || !Da(t)))) return;
  t.flags |= 2;
  let e = t.dep, n = $e, s = Ot;
  $e = t, Ot = !0;
  try {
    Lu(t);
    let i = t.fn(t._value);
    (e.version === 0 || ht(i, t._value)) && (t.flags |= 128, t._value = i, e.version++);
  } catch (i) {
    throw e.version++, i;
  } finally {
    $e = n, Ot = s, Du(t), t.flags &= -3;
  }
}
function hl(t, e = !1) {
  let { dep: n, prevSub: s, nextSub: i } = t;
  if (s && (s.nextSub = i, t.prevSub = void 0), i && (i.prevSub = s, t.nextSub = void 0), n.subs === t && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep) hl(r, !0);
  }
  e || --n.sc || !n.map || n.map.delete(n.key);
}
let Ot = !0, Vu = [];
function ln() {
  Vu.push(Ot), Ot = !1;
}
function on() {
  let t = Vu.pop();
  Ot = t === void 0 || t;
}
function jl(t) {
  let { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    let n = $e;
    $e = void 0;
    try {
      e();
    } finally {
      $e = n;
    }
  }
}
let si = 0;
class Sf {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tr {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!$e || !Ot || $e === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $e) n = this.activeLink = new Sf($e, this), $e.deps ? (n.prevDep = $e.depsTail, $e.depsTail.nextDep = n, $e.depsTail = n) : $e.deps = $e.depsTail = n, (function s(i) {
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
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = $e.depsTail, n.nextDep = void 0, $e.depsTail.nextDep = n, $e.depsTail = n, $e.deps === n && ($e.deps = s);
    }
    return n;
  }
  trigger(e) {
    this.version++, si++, this.notify(e);
  }
  notify(e) {
    Sr++;
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      fl();
    }
  }
}
let Qi = /* @__PURE__ */ new WeakMap(), Kn = Symbol(""), _a = Symbol(""), ii = Symbol("");
function et(t, e, n) {
  if (Ot && $e) {
    let s = Qi.get(t);
    s || Qi.set(t, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Tr()), i.map = s, i.key = n), i.track();
  }
}
function en(t, e, n, s, i, r) {
  let a = Qi.get(t);
  if (!a) return void si++;
  let l = (o) => {
    o && o.trigger();
  };
  if (Sr++, e === "clear") a.forEach(l);
  else {
    let o = X(t), u = o && yr(n);
    if (o && n === "length") {
      let d = Number(s);
      a.forEach((f, m) => {
        (m === "length" || m === ii || !Bt(m) && m >= d) && l(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && l(a.get(n)), u && l(a.get(ii)), e) {
      case "add":
        if (o) u && l(a.get("length"));
        else {
          let f;
          l(a.get(Kn)), f = t, je.call(f) === "[object Map]" && l(a.get(_a));
        }
        break;
      case "delete":
        if (!o) {
          let f;
          l(a.get(Kn)), f = t, je.call(f) === "[object Map]" && l(a.get(_a));
        }
        break;
      case "set":
        let d;
        d = t, je.call(d) === "[object Map]" && l(a.get(Kn));
    }
  }
  fl();
}
function ls(t) {
  let e = me(t);
  return e === t ? e : (et(e, "iterate", ii), pt(t) ? e : e.map(Mt));
}
function xr(t) {
  return et(t = me(t), "iterate", ii), t;
}
function Tn(t, e) {
  return un(t) ? qt(t) ? gs(Mt(e)) : gs(e) : Mt(e);
}
let Tf = { __proto__: null, [Symbol.iterator]() {
  return oa(this, Symbol.iterator, (t) => Tn(this, t));
}, concat(...t) {
  return ls(this).concat(...t.map((e) => X(e) ? ls(e) : e));
}, entries() {
  return oa(this, "entries", (t) => (t[1] = Tn(this, t[1]), t));
}, every(t, e) {
  return Kt(this, "every", t, e, void 0, arguments);
}, filter(t, e) {
  return Kt(this, "filter", t, e, (n) => n.map((s) => Tn(this, s)), arguments);
}, find(t, e) {
  return Kt(this, "find", t, e, (n) => Tn(this, n), arguments);
}, findIndex(t, e) {
  return Kt(this, "findIndex", t, e, void 0, arguments);
}, findLast(t, e) {
  return Kt(this, "findLast", t, e, (n) => Tn(this, n), arguments);
}, findLastIndex(t, e) {
  return Kt(this, "findLastIndex", t, e, void 0, arguments);
}, forEach(t, e) {
  return Kt(this, "forEach", t, e, void 0, arguments);
}, includes(...t) {
  return ua(this, "includes", t);
}, indexOf(...t) {
  return ua(this, "indexOf", t);
}, join(t) {
  return ls(this).join(t);
}, lastIndexOf(...t) {
  return ua(this, "lastIndexOf", t);
}, map(t, e) {
  return Kt(this, "map", t, e, void 0, arguments);
}, pop() {
  return _s(this, "pop");
}, push(...t) {
  return _s(this, "push", t);
}, reduce(t, ...e) {
  return Gl(this, "reduce", t, e);
}, reduceRight(t, ...e) {
  return Gl(this, "reduceRight", t, e);
}, shift() {
  return _s(this, "shift");
}, some(t, e) {
  return Kt(this, "some", t, e, void 0, arguments);
}, splice(...t) {
  return _s(this, "splice", t);
}, toReversed() {
  return ls(this).toReversed();
}, toSorted(t) {
  return ls(this).toSorted(t);
}, toSpliced(...t) {
  return ls(this).toSpliced(...t);
}, unshift(...t) {
  return _s(this, "unshift", t);
}, values() {
  return oa(this, "values", (t) => Tn(this, t));
} };
function oa(t, e, n) {
  let s = xr(t), i = s[e]();
  return s === t || pt(t) || (i._next = i.next, i.next = () => {
    let r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
let xf = Array.prototype;
function Kt(t, e, n, s, i, r) {
  let a = xr(t), l = a !== t && !pt(t), o = a[e];
  if (o !== xf[e]) {
    let f = o.apply(t, r);
    return l ? Mt(f) : f;
  }
  let u = n;
  a !== t && (l ? u = function(f, m) {
    return n.call(this, Tn(t, f), m, t);
  } : n.length > 2 && (u = function(f, m) {
    return n.call(this, f, m, t);
  }));
  let d = o.call(a, u, s);
  return l && i ? i(d) : d;
}
function Gl(t, e, n, s) {
  let i = xr(t), r = n;
  return i !== t && (pt(t) ? n.length > 3 && (r = function(a, l, o) {
    return n.call(this, a, l, o, t);
  }) : r = function(a, l, o) {
    return n.call(this, a, Tn(t, l), o, t);
  }), i[e](r, ...s);
}
function ua(t, e, n) {
  let s = me(t);
  et(s, "iterate", ii);
  let i = s[e](...n);
  return (i === -1 || i === !1) && Er(n[0]) ? (n[0] = me(n[0]), s[e](...n)) : i;
}
function _s(t, e, n = []) {
  ln(), Sr++;
  let s = me(t)[e].apply(t, n);
  return fl(), on(), s;
}
let Cf = gr("__proto__,__v_isRef,__isVue"), Nu = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Bt));
function Ef(t) {
  Bt(t) || (t = String(t));
  let e = me(this);
  return et(e, "has", t), e.hasOwnProperty(t);
}
class Ru {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, s) {
    if (n === "__v_skip") return e.__v_skip;
    let i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return r;
    if (n === "__v_raw") return s === (i ? r ? Lf : Uu : r ? zu : Wu).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    let a = X(e);
    if (!i) {
      let o;
      if (a && (o = Tf[n])) return o;
      if (n === "hasOwnProperty") return Ef;
    }
    let l = Reflect.get(e, n, De(e) ? e : s);
    if ((Bt(n) ? Nu.has(n) : Cf(n)) || (i || et(e, "get", n), r)) return l;
    if (De(l)) {
      let o = a && yr(n) ? l : l.value;
      return i && Ee(o) ? jn(o) : o;
    }
    return Ee(l) ? i ? jn(l) : mn(l) : l;
  }
}
class Pu extends Ru {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, s, i) {
    let r = e[n], a = X(e) && yr(n);
    if (!this._isShallow) {
      let u = un(r);
      if (pt(s) || un(s) || (r = me(r), s = me(s)), !a && De(r) && !De(s)) return u || (r.value = s), !0;
    }
    let l = a ? Number(n) < e.length : Se(e, n), o = Reflect.set(e, n, s, De(e) ? e : i);
    return e === me(i) && (l ? ht(s, r) && en(e, "set", n, s) : en(e, "add", n, s)), o;
  }
  deleteProperty(e, n) {
    let s = Se(e, n);
    e[n];
    let i = Reflect.deleteProperty(e, n);
    return i && s && en(e, "delete", n, void 0), i;
  }
  has(e, n) {
    let s = Reflect.has(e, n);
    return Bt(n) && Nu.has(n) || et(e, "has", n), s;
  }
  ownKeys(e) {
    return et(e, "iterate", X(e) ? "length" : Kn), Reflect.ownKeys(e);
  }
}
class Hu extends Ru {
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
let Af = new Pu(), Ff = new Hu(), $f = new Pu(!0);
new Hu(!0);
let ca = (t) => t;
function Fi(t) {
  return function() {
    return t !== "delete" && (t === "clear" ? void 0 : this);
  };
}
function Cr(t, e) {
  let n, s = (He(n = { get(i) {
    let r = this.__v_raw, a = me(r), l = me(i);
    t || (ht(i, l) && et(a, "get", i), et(a, "get", l));
    let { has: o } = Reflect.getPrototypeOf(a), u = e ? ca : t ? gs : Mt;
    return o.call(a, i) ? u(r.get(i)) : o.call(a, l) ? u(r.get(l)) : void (r !== a && r.get(i));
  }, get size() {
    let i = this.__v_raw;
    return t || et(me(i), "iterate", Kn), i.size;
  }, has(i) {
    let r = this.__v_raw, a = me(r), l = me(i);
    return t || (ht(i, l) && et(a, "has", i), et(a, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
  }, forEach(i, r) {
    let a = this, l = a.__v_raw, o = me(l), u = e ? ca : t ? gs : Mt;
    return t || et(o, "iterate", Kn), l.forEach((d, f) => i.call(r, u(d), u(f), a));
  } }, t ? { add: Fi("add"), set: Fi("set"), delete: Fi("delete"), clear: Fi("clear") } : { add(i) {
    e || pt(i) || un(i) || (i = me(i));
    let r = me(this);
    return Reflect.getPrototypeOf(r).has.call(r, i) || (r.add(i), en(r, "add", i, i)), this;
  }, set(i, r) {
    e || pt(r) || un(r) || (r = me(r));
    let a = me(this), { has: l, get: o } = Reflect.getPrototypeOf(a), u = l.call(a, i);
    u || (i = me(i), u = l.call(a, i));
    let d = o.call(a, i);
    return a.set(i, r), u ? ht(r, d) && en(a, "set", i, r) : en(a, "add", i, r), this;
  }, delete(i) {
    let r = me(this), { has: a, get: l } = Reflect.getPrototypeOf(r), o = a.call(r, i);
    o || (i = me(i), o = a.call(r, i)), l && l.call(r, i);
    let u = r.delete(i);
    return o && en(r, "delete", i, void 0), u;
  }, clear() {
    let i = me(this), r = i.size !== 0, a = i.clear();
    return r && en(i, "clear", void 0, void 0), a;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    n[i] = function(...r) {
      let a, l = this.__v_raw, o = me(l), u = (a = o, je.call(a) === "[object Map]"), d = i === "entries" || i === Symbol.iterator && u, f = l[i](...r), m = e ? ca : t ? gs : Mt;
      return t || et(o, "iterate", i === "keys" && u ? _a : Kn), { next() {
        let { value: h, done: g } = f.next();
        return g ? { value: h, done: g } : { value: d ? [m(h[0]), m(h[1])] : m(h), done: g };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }), n);
  return (i, r, a) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(Se(s, r) && r in i ? s : i, r, a);
}
let Of = { get: Cr(!1, !1) }, Mf = { get: Cr(!1, !0) }, Bf = { get: Cr(!0, !1) };
Cr(!0, !0);
let Wu = /* @__PURE__ */ new WeakMap(), zu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), Lf = /* @__PURE__ */ new WeakMap();
function mn(t) {
  return un(t) ? t : ml(t, !1, Af, Of, Wu);
}
function Df(t) {
  return ml(t, !1, $f, Mf, zu);
}
function jn(t) {
  return ml(t, !0, Ff, Bf, Uu);
}
function ml(t, e, n, s, i) {
  var r;
  let a;
  if (!Ee(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
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
  })((a = r, je.call(a)).slice(8, -1));
  if (l === 0) return t;
  let o = i.get(t);
  if (o) return o;
  let u = new Proxy(t, l === 2 ? s : n);
  return i.set(t, u), u;
}
function qt(t) {
  return un(t) ? qt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function un(t) {
  return !!(t && t.__v_isReadonly);
}
function pt(t) {
  return !!(t && t.__v_isShallow);
}
function Er(t) {
  return !!t && !!t.__v_raw;
}
function me(t) {
  let e = t && t.__v_raw;
  return e ? me(e) : t;
}
function pl(t) {
  return !Se(t, "__v_skip") && Object.isExtensible(t) && xu(t, "__v_skip", !0), t;
}
let Mt = (t) => Ee(t) ? mn(t) : t, gs = (t) => Ee(t) ? jn(t) : t;
function De(t) {
  return !!t && t.__v_isRef === !0;
}
function ee(t) {
  return qu(t, !1);
}
function _f(t) {
  return qu(t, !0);
}
function qu(t, e) {
  return De(t) ? t : new Vf(t, e);
}
class Vf {
  constructor(e, n) {
    this.dep = new Tr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : me(e), this._value = n ? e : Mt(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    let n = this._rawValue, s = this.__v_isShallow || pt(e) || un(e);
    ht(e = s ? e : me(e), n) && (this._rawValue = e, this._value = s ? e : Mt(e), this.dep.trigger());
  }
}
function c(t) {
  return De(t) ? t.value : t;
}
let Nf = { get: (t, e, n) => e === "__v_raw" ? t : c(Reflect.get(t, e, n)), set: (t, e, n, s) => {
  let i = t[e];
  return De(i) && !De(n) ? (i.value = n, !0) : Reflect.set(t, e, n, s);
} };
function ju(t) {
  return qt(t) ? t : new Proxy(t, Nf);
}
class Rf {
  constructor(e) {
    this.__v_isRef = !0, this._value = void 0;
    let n = this.dep = new Tr(), { get: s, set: i } = e(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function Pf(t) {
  return new Rf(t);
}
function Hf(t) {
  let e = X(t) ? Array(t.length) : {};
  for (let n in t) e[n] = new Gu(t, n, void 0);
  return e;
}
class Gu {
  constructor(e, n, s) {
    this._object = e, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = me(e);
    let i = !0, r = e;
    if (!X(e) || !yr(String(n))) do
      i = !Er(r) || pt(r);
    while (i && (r = r.__v_raw));
    this._shallow = i;
  }
  get value() {
    let e = this._object[this._key];
    return this._shallow && (e = c(e)), this._value = e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    if (this._shallow && De(this._raw[this._key])) {
      let n = this._object[this._key];
      if (De(n)) {
        n.value = e;
        return;
      }
    }
    this._object[this._key] = e;
  }
  get dep() {
    var e, n;
    let s;
    return e = this._raw, n = this._key, (s = Qi.get(e)) && s.get(n);
  }
}
class Wf {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function cn(t, e, n) {
  return De(t) ? t : ae(t) ? new Wf(t) : !Ee(t) || !(arguments.length > 1) ? ee(t) : new Gu(t, e, n);
}
class zf {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Tr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = si - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && $e !== this) return Bu(this, !0), !0;
  }
  get value() {
    let e = this.dep.track();
    return _u(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
let $i = {}, Xi = /* @__PURE__ */ new WeakMap();
function Uf(t, e = !1, n = zn) {
  if (n) {
    let s = Xi.get(n);
    s || Xi.set(n, s = []), s.push(t);
  }
}
function tn(t, e = 1 / 0, n) {
  if (e <= 0 || !Ee(t) || t.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(t) || 0) >= e) return t;
  if (n.set(t, e), e--, De(t)) tn(t.value, e, n);
  else if (X(t)) for (let s = 0; s < t.length; s++) tn(t[s], e, n);
  else {
    let s, i;
    if (s = t, je.call(s) === "[object Set]" || (i = t, je.call(i) === "[object Map]")) t.forEach((r) => {
      tn(r, e, n);
    });
    else {
      let r;
      if (r = t, je.call(r) === "[object Object]") {
        for (let a in t) tn(t[a], e, n);
        for (let a of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, a) && tn(t[a], e, n);
      }
    }
  }
  return t;
}
function hi(t, e, n, s) {
  try {
    return s ? t(...s) : t();
  } catch (i) {
    Ar(i, e, n);
  }
}
function Lt(t, e, n, s) {
  if (ae(t)) {
    let i = hi(t, e, n, s);
    return i && Tu(i) && i.catch((r) => {
      Ar(r, e, n);
    }), i;
  }
  if (X(t)) {
    let i = [];
    for (let r = 0; r < t.length; r++) i.push(Lt(t[r], e, n, s));
    return i;
  }
}
function Ar(t, e, n, s = !0) {
  e && e.vnode;
  let { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || ke;
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
      ln(), hi(i, null, 10, [t, l, o]), on();
      return;
    }
  }
  (function(a, l, o, u = !0, d = !1) {
    if (d) throw a;
    console.error(a);
  })(t, 0, 0, s, r);
}
let lt = [], Pt = -1, vs = [], xn = null, fs = 0, Zu = Promise.resolve(), zi = null;
function Gn(t) {
  let e = zi || Zu;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function gl(t) {
  if (!(1 & t.flags)) {
    let e = Ys(t), n = lt[lt.length - 1];
    !n || !(2 & t.flags) && e >= Ys(n) ? lt.push(t) : lt.splice((function(s) {
      let i = Pt + 1, r = lt.length;
      for (; i < r; ) {
        let a = i + r >>> 1, l = lt[a], o = Ys(l);
        o < s || o === s && 2 & l.flags ? i = a + 1 : r = a;
      }
      return i;
    })(e), 0, t), t.flags |= 1, Yu();
  }
}
function Yu() {
  zi || (zi = Zu.then(function t(e) {
    try {
      for (Pt = 0; Pt < lt.length; Pt++) {
        let n = lt[Pt];
        n && !(8 & n.flags) && (4 & n.flags && (n.flags &= -2), hi(n, n.i, n.i ? 15 : 14), 4 & n.flags || (n.flags &= -2));
      }
    } finally {
      for (; Pt < lt.length; Pt++) {
        let n = lt[Pt];
        n && (n.flags &= -2);
      }
      Pt = -1, lt.length = 0, Ku(), zi = null, (lt.length || vs.length) && t();
    }
  }));
}
function qf(t) {
  X(t) ? vs.push(...t) : xn && t.id === -1 ? xn.splice(fs + 1, 0, t) : 1 & t.flags || (vs.push(t), t.flags |= 1), Yu();
}
function Zl(t, e, n = Pt + 1) {
  for (; n < lt.length; n++) {
    let s = lt[n];
    if (s && 2 & s.flags) {
      if (t && s.id !== t.uid) continue;
      lt.splice(n, 1), n--, 4 & s.flags && (s.flags &= -2), s(), 4 & s.flags || (s.flags &= -2);
    }
  }
}
function Ku(t) {
  if (vs.length) {
    let e = [...new Set(vs)].sort((n, s) => Ys(n) - Ys(s));
    if (vs.length = 0, xn) return void xn.push(...e);
    for (fs = 0, xn = e; fs < xn.length; fs++) {
      let n = xn[fs];
      4 & n.flags && (n.flags &= -2), 8 & n.flags || n(), n.flags &= -2;
    }
    xn = null, fs = 0;
  }
}
let Ys = (t) => t.id == null ? 2 & t.flags ? -1 : 1 / 0 : t.id, Je = null, Ju = null;
function er(t) {
  let e = Je;
  return Je = t, Ju = t && t.type.__scopeId || null, e;
}
function W(t, e = Je, n) {
  if (!e || t._n) return t;
  let s = (...i) => {
    let r;
    s._d && ar(-1);
    let a = er(e);
    try {
      r = t(...i);
    } finally {
      er(a), s._d && ar(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vl(t, e) {
  if (Je === null) return t;
  let n = Br(Je), s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [r, a, l, o = ke] = e[i];
    r && (ae(r) && (r = { mounted: r, updated: r }), r.deep && tn(a), s.push({ dir: r, instance: n, value: a, oldValue: void 0, arg: l, modifiers: o }));
  }
  return t;
}
function Nn(t, e, n, s) {
  let i = t.dirs, r = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    let l = i[a];
    r && (l.oldValue = r[a].value);
    let o = l.dir[s];
    o && (ln(), Lt(o, n, 8, [t.el, l, t, e]), on());
  }
}
let Qu = Symbol("_vte"), Ws = (t) => t && (t.disabled || t.disabled === ""), Yl = (t) => t && (t.defer || t.defer === ""), Kl = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Jl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, da = (t, e) => {
  let n = t && t.to;
  return Be(n) ? e ? e(n) : null : n;
}, Xu = { name: "Teleport", __isTeleport: !0, process(t, e, n, s, i, r, a, l, o, u) {
  let { mc: d, pc: f, pbc: m, o: { insert: h, querySelector: g, createText: b } } = u, k = Ws(e.props), { shapeFlag: I, children: D, dynamicChildren: w } = e;
  if (t == null) {
    let P = e.el = b(""), L = e.anchor = b("");
    h(P, n, s), h(L, n, s);
    let H = (B, $) => {
      16 & I && d(D, B, $, i, r, a, l, o);
    }, K = () => {
      let B = e.target = da(e.props, g), $ = Ql(B, e, b, h);
      B && (a !== "svg" && Kl(B) ? a = "svg" : a !== "mathml" && Jl(B) && (a = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(B), k || (H(B, $), Mi(e, !1)));
    };
    k && (H(n, L), Mi(e, !0)), Yl(e.props) ? (e.el.__isMounted = !1, at(() => {
      K(), delete e.el.__isMounted;
    }, r)) : K();
  } else {
    if (Yl(e.props) && t.el.__isMounted === !1) return void at(() => {
      Xu.process(t, e, n, s, i, r, a, l, o, u);
    }, r);
    e.el = t.el, e.targetStart = t.targetStart;
    let P = e.anchor = t.anchor, L = e.target = t.target, H = e.targetAnchor = t.targetAnchor, K = Ws(t.props), B = K ? n : L, $ = K ? P : H;
    if (a === "svg" || Kl(L) ? a = "svg" : (a === "mathml" || Jl(L)) && (a = "mathml"), w ? (m(t.dynamicChildren, w, B, i, r, a, l), xl(t, e, !0)) : o || f(t, e, B, $, i, r, a, l, !1), k) K ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Oi(e, n, P, u, 1);
    else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
      let Y = e.target = da(e.props, g);
      Y && Oi(e, Y, null, u, 0);
    } else K && Oi(e, L, H, u, 1);
    Mi(e, k);
  }
}, remove(t, e, n, { um: s, o: { remove: i } }, r) {
  let { shapeFlag: a, children: l, anchor: o, targetStart: u, targetAnchor: d, target: f, props: m } = t;
  if (f && (i(u), i(d)), r && i(o), 16 & a) {
    let h = r || !Ws(m);
    for (let g = 0; g < l.length; g++) {
      let b = l[g];
      s(b, e, n, h, !!b.dynamicChildren);
    }
  }
}, move: Oi, hydrate: function(t, e, n, s, i, r, { o: { nextSibling: a, parentNode: l, querySelector: o, insert: u, createText: d } }, f) {
  function m(b, k, I, D) {
    k.anchor = f(a(b), k, l(b), n, s, i, r), k.targetStart = I, k.targetAnchor = D;
  }
  let h = e.target = da(e.props, o), g = Ws(e.props);
  if (h) {
    let b = h._lpa || h.firstChild;
    if (16 & e.shapeFlag) if (g) m(t, e, b, b && a(b));
    else {
      e.anchor = a(t);
      let k = b;
      for (; k; ) {
        if (k && k.nodeType === 8) {
          if (k.data === "teleport start anchor") e.targetStart = k;
          else if (k.data === "teleport anchor") {
            e.targetAnchor = k, h._lpa = e.targetAnchor && a(e.targetAnchor);
            break;
          }
        }
        k = a(k);
      }
      e.targetAnchor || Ql(h, e, d, u), f(b && a(b), e, h, n, s, i, r);
    }
    Mi(e, g);
  } else g && 16 & e.shapeFlag && m(t, e, t, a(t));
  return e.anchor && a(e.anchor);
} };
function Oi(t, e, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  let { el: a, anchor: l, shapeFlag: o, children: u, props: d } = t, f = r === 2;
  if (f && s(a, e, n), (!f || Ws(d)) && 16 & o) for (let m = 0; m < u.length; m++) i(u[m], e, n, 2);
  f && s(l, e, n);
}
let ec = Xu;
function Mi(t, e) {
  let n = t.ctx;
  if (n && n.ut) {
    let s, i;
    for (e ? (s = t.el, i = t.anchor) : (s = t.targetStart, i = t.targetAnchor); s && s !== i; ) s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ql(t, e, n, s) {
  let i = e.targetStart = n(""), r = e.targetAnchor = n("");
  return i[Qu] = r, t && (s(i, t), s(r, t)), r;
}
let Xt = Symbol("_leaveCb"), Bi = Symbol("_enterCb");
function tc() {
  let t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return gn(() => {
    t.isMounted = !0;
  }), kl(() => {
    t.isUnmounting = !0;
  }), t;
}
let bt = [Function, Array], nc = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: bt, onEnter: bt, onAfterEnter: bt, onEnterCancelled: bt, onBeforeLeave: bt, onLeave: bt, onAfterLeave: bt, onLeaveCancelled: bt, onBeforeAppear: bt, onAppear: bt, onAfterAppear: bt, onAppearCancelled: bt }, sc = (t) => {
  let e = t.subTree;
  return e.component ? sc(e.component) : e;
};
function ic(t) {
  let e = t[0];
  if (t.length > 1) {
    for (let n of t) if (n.type !== Ke) {
      e = n;
      break;
    }
  }
  return e;
}
let jf = { name: "BaseTransition", props: nc, setup(t, { slots: e }) {
  let n = Zt(), s = tc();
  return () => {
    let i = e.default && yl(e.default(), !0);
    if (!i || !i.length) return;
    let r = ic(i), a = me(t), { mode: l } = a;
    if (s.isLeaving) return fa(r);
    let o = Xl(r);
    if (!o) return fa(r);
    let u = ri(o, a, s, n, (f) => u = f);
    o.type !== Ke && ts(o, u);
    let d = n.subTree && Xl(n.subTree);
    if (d && d.type !== Ke && !qn(d, o) && sc(n).type !== Ke) {
      let f = ri(d, a, s, n);
      if (ts(d, f), l === "out-in" && o.type !== Ke) return s.isLeaving = !0, f.afterLeave = () => {
        s.isLeaving = !1, 8 & n.job.flags || n.update(), delete f.afterLeave, d = void 0;
      }, fa(r);
      l === "in-out" && o.type !== Ke ? f.delayLeave = (m, h, g) => {
        rc(s, d)[String(d.key)] = d, m[Xt] = () => {
          h(), m[Xt] = void 0, delete u.delayedLeave, d = void 0;
        }, u.delayedLeave = () => {
          g(), delete u.delayedLeave, d = void 0;
        };
      } : d = void 0;
    } else d && (d = void 0);
    return r;
  };
} };
function rc(t, e) {
  let { leavingVNodes: n } = t, s = n.get(e.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(e.type, s)), s;
}
function ri(t, e, n, s, i) {
  let { appear: r, mode: a, persisted: l = !1, onBeforeEnter: o, onEnter: u, onAfterEnter: d, onEnterCancelled: f, onBeforeLeave: m, onLeave: h, onAfterLeave: g, onLeaveCancelled: b, onBeforeAppear: k, onAppear: I, onAfterAppear: D, onAppearCancelled: w } = e, P = String(t.key), L = rc(n, t), H = ($, Y) => {
    $ && Lt($, s, 9, Y);
  }, K = ($, Y) => {
    let Q = Y[1];
    H($, Y), X($) ? $.every((R) => R.length <= 1) && Q() : $.length <= 1 && Q();
  }, B = { mode: a, persisted: l, beforeEnter($) {
    let Y = o;
    if (!n.isMounted) if (r) Y = k || o;
    else return;
    $[Xt] && $[Xt](!0);
    let Q = L[P];
    Q && qn(t, Q) && Q.el[Xt] && Q.el[Xt](), H(Y, [$]);
  }, enter($) {
    let Y = u, Q = d, R = f;
    if (!n.isMounted) if (r) Y = I || u, Q = D || d, R = w || f;
    else return;
    let te = !1, fe = $[Bi] = (oe) => {
      te || (te = !0, oe ? H(R, [$]) : H(Q, [$]), B.delayedLeave && B.delayedLeave(), $[Bi] = void 0);
    };
    Y ? K(Y, [$, fe]) : fe();
  }, leave($, Y) {
    let Q = String(t.key);
    if ($[Bi] && $[Bi](!0), n.isUnmounting) return Y();
    H(m, [$]);
    let R = !1, te = $[Xt] = (fe) => {
      R || (R = !0, Y(), fe ? H(b, [$]) : H(g, [$]), $[Xt] = void 0, L[Q] === t && delete L[Q]);
    };
    L[Q] = t, h ? K(h, [$, te]) : te();
  }, clone($) {
    let Y = ri($, e, n, s, i);
    return i && i(Y), Y;
  } };
  return B;
}
function fa(t) {
  if (Fr(t)) return (t = Mn(t)).children = null, t;
}
function Xl(t) {
  if (!Fr(t)) return t.type.__isTeleport && t.children ? ic(t.children) : t;
  if (t.component) return t.component.subTree;
  let { shapeFlag: e, children: n } = t;
  if (n) {
    if (16 & e) return n[0];
    if (32 & e && ae(n.default)) return n.default();
  }
}
function ts(t, e) {
  6 & t.shapeFlag && t.component ? (t.transition = e, ts(t.component.subTree, e)) : 128 & t.shapeFlag ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function yl(t, e = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < t.length; r++) {
    let a = t[r], l = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === de ? (128 & a.patchFlag && i++, s = s.concat(yl(a.children, e, l))) : (e || a.type !== Ke) && s.push(l != null ? Mn(a, { key: l }) : a);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function U(t, e) {
  return ae(t) ? He({ name: t.name }, e, { setup: t }) : t;
}
function bl() {
  let t = Zt();
  return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
}
function ac(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function sn(t) {
  let e = Zt(), n = _f(null);
  return e && Object.defineProperty(e.refs === ke ? e.refs = {} : e.refs, t, { enumerable: !0, get: () => n.value, set: (s) => n.value = s }), n;
}
let tr = /* @__PURE__ */ new WeakMap();
function Ks(t, e, n, s, i = !1) {
  if (X(t)) return void t.forEach((g, b) => Ks(g, e && (X(e) ? e[b] : e), n, s, i));
  if (ys(s) && !i) {
    512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && Ks(t, e, n, s.component.subTree);
    return;
  }
  let r = 4 & s.shapeFlag ? Br(s.component) : s.el, a = i ? null : r, { i: l, r: o } = t, u = e && e.r, d = l.refs === ke ? l.refs = {} : l.refs, f = l.setupState, m = me(f), h = f === ke ? Su : (g) => Se(m, g);
  if (u != null && u !== o && (eo(e), Be(u) ? (d[u] = null, h(u) && (f[u] = null)) : De(u) && (u.value = null, e.k && (d[e.k] = null))), ae(o)) hi(o, l, 12, [a, d]);
  else {
    let g = Be(o), b = De(o);
    if (g || b) {
      let k = () => {
        if (t.f) {
          let I = g ? h(o) ? f[o] : d[o] : o.value;
          if (i) X(I) && cl(I, r);
          else if (X(I)) I.includes(r) || I.push(r);
          else if (g) d[o] = [r], h(o) && (f[o] = d[o]);
          else {
            let D = [r];
            o.value = D, t.k && (d[t.k] = D);
          }
        } else g ? (d[o] = a, h(o) && (f[o] = a)) : b && (o.value = a, t.k && (d[t.k] = a));
      };
      if (a) {
        let I = () => {
          k(), tr.delete(t);
        };
        I.id = -1, tr.set(t, I), at(I, n);
      } else eo(t), k();
    }
  }
}
function eo(t) {
  let e = tr.get(t);
  e && (e.flags |= 8, tr.delete(t));
}
Ir().requestIdleCallback;
Ir().cancelIdleCallback;
let ys = (t) => !!t.type.__asyncLoader, Fr = (t) => t.type.__isKeepAlive;
function Gf(t, e) {
  lc(t, "a", e);
}
function Zf(t, e) {
  lc(t, "da", e);
}
function lc(t, e, n = tt) {
  let s = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated) return;
      i = i.parent;
    }
    return t();
  });
  if (nr(e, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; ) Fr(i.parent.vnode) && (function(r, a, l, o) {
      let u = nr(a, r, o, !0);
      ss(() => {
        cl(o[a], u);
      }, l);
    })(s, e, n, i), i = i.parent;
  }
}
function nr(t, e, n = tt, s = !1) {
  if (n) {
    let i = n[t] || (n[t] = []), r = e.__weh || (e.__weh = (...a) => {
      ln();
      let l = pi(n), o = Lt(e, n, t, a);
      return l(), on(), o;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
let pn = (t) => (e, n = tt) => {
  oi && t !== "sp" || nr(t, (...s) => e(...s), n);
}, Yf = pn("bm"), gn = pn("m"), Kf = pn("bu"), oc = pn("u"), kl = pn("bum"), ss = pn("um"), Jf = pn("sp"), Qf = pn("rtg"), Xf = pn("rtc");
function eh(t, e = tt) {
  nr("ec", t, e);
}
let uc = "components";
function th(t, e) {
  return dc(uc, t, !0, e) || t;
}
let cc = Symbol.for("v-ndc");
function wl(t) {
  return Be(t) ? dc(uc, t, !1) || t : t || cc;
}
function dc(t, e, n = !0, s = !1) {
  let i = Je || tt;
  if (i) {
    let r = i.type;
    {
      let l = Ah(r, !1);
      if (l && (l === e || l === vt(e) || l === kr(vt(e)))) return r;
    }
    let a = to(i[t] || r[t], e) || to(i.appContext[t], e);
    return !a && s ? r : a;
  }
}
function to(t, e) {
  return t && (t[e] || t[vt(e)] || t[kr(vt(e))]);
}
function ct(t, e, n, s) {
  let i, r = n, a = X(t);
  if (a || Be(t)) {
    let l = a && qt(t), o = !1, u = !1;
    l && (o = !pt(t), u = un(t), t = xr(t)), i = Array(t.length);
    for (let d = 0, f = t.length; d < f; d++) i[d] = e(o ? u ? gs(Mt(t[d])) : Mt(t[d]) : t[d], d, void 0, r);
  } else if (typeof t == "number") {
    i = Array(t);
    for (let l = 0; l < t; l++) i[l] = e(l + 1, l, void 0, r);
  } else if (Ee(t)) if (t[Symbol.iterator]) i = Array.from(t, (l, o) => e(l, o, void 0, r));
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
function Il(t, e) {
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    if (X(s)) for (let i = 0; i < s.length; i++) t[s[i].name] = s[i].fn;
    else s && (t[s.name] = s.key ? (...i) => {
      let r = s.fn(...i);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return t;
}
function re(t, e, n = {}, s, i) {
  if (Je.ce || Je.parent && ys(Je.parent) && Je.parent.ce) {
    let u = Object.keys(n).length > 0;
    return e !== "default" && (n.name = e), v(), _(de, null, [M("slot", n, s && s())], u ? -2 : 64);
  }
  let r = t[e];
  r && r._c && (r._d = !1), v();
  let a = r && fc(r(n)), l = n.key || a && a.key, o = _(de, { key: (l && !Bt(l) ? l : `_${e}`) + (!a && s ? "_fb" : "") }, a || (s ? s() : []), a && t._ === 1 ? 64 : -2);
  return o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), r && r._c && (r._d = !0), o;
}
function fc(t) {
  return t.some((e) => !li(e) || e.type !== Ke && (e.type !== de || !!fc(e.children))) ? t : null;
}
let Va = (t) => t ? xc(t) ? Br(t) : Va(t.parent) : null, Js = He(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => Va(t.parent), $root: (t) => Va(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => hc(t), $forceUpdate: (t) => t.f || (t.f = () => {
  gl(t.update);
}), $nextTick: (t) => t.n || (t.n = Gn.bind(t.proxy)), $watch: (t) => ch.bind(t) }), ha = (t, e) => t !== ke && !t.__isScriptSetup && Se(t, e), Na = { get({ _: t }, e) {
  let n, s;
  if (e === "__v_skip") return !0;
  let { ctx: i, setupState: r, data: a, props: l, accessCache: o, type: u, appContext: d } = t;
  if (e[0] !== "$") {
    let m = o[e];
    if (m !== void 0) switch (m) {
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
      if (a !== ke && Se(a, e)) return o[e] = 2, a[e];
      if (Se(l, e)) return o[e] = 3, l[e];
      if (i !== ke && Se(i, e)) return o[e] = 4, i[e];
      Ra && (o[e] = 0);
    }
  }
  let f = Js[e];
  return f ? (e === "$attrs" && et(t.attrs, "get", ""), f(t)) : (n = u.__cssModules) && (n = n[e]) ? n : i !== ke && Se(i, e) ? (o[e] = 4, i[e]) : Se(s = d.config.globalProperties, e) ? s[e] : void 0;
}, set({ _: t }, e, n) {
  let { data: s, setupState: i, ctx: r } = t;
  return ha(i, e) ? (i[e] = n, !0) : s !== ke && Se(s, e) ? (s[e] = n, !0) : !Se(t.props, e) && !(e[0] === "$" && e.slice(1) in t) && (r[e] = n, !0);
}, has({ _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: i, props: r, type: a } }, l) {
  let o;
  return !!(n[l] || t !== ke && l[0] !== "$" && Se(t, l) || ha(e, l) || Se(r, l) || Se(s, l) || Se(Js, l) || Se(i.config.globalProperties, l) || (o = a.__cssModules) && o[l]);
}, defineProperty(t, e, n) {
  return n.get != null ? t._.accessCache[e] = 0 : Se(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
} };
He({}, Na, { get(t, e) {
  if (e !== Symbol.unscopables) return Na.get(t, e, t);
}, has: (t, e) => e[0] !== "_" && !yf(e) });
function nh() {
  return sh().slots;
}
function sh(t) {
  let e = Zt();
  return e.setupContext || (e.setupContext = Ec(e));
}
function sr(t) {
  return X(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t;
}
function dn(t, e) {
  return t && e ? X(t) && X(e) ? t.concat(e) : He({}, sr(t), sr(e)) : t || e;
}
let Ra = !0;
function no(t, e, n) {
  Lt(X(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function hc(t) {
  let e, n = t.type, { mixins: s, extends: i } = n, { mixins: r, optionsCache: a, config: { optionMergeStrategies: l } } = t.appContext, o = a.get(n);
  return o ? e = o : r.length || s || i ? (e = {}, r.length && r.forEach((u) => ir(e, u, l, !0)), ir(e, n, l)) : e = n, Ee(n) && a.set(n, e), e;
}
function ir(t, e, n, s = !1) {
  let { mixins: i, extends: r } = e;
  for (let a in r && ir(t, r, n, !0), i && i.forEach((l) => ir(t, l, n, !0)), e) if (!(s && a === "expose")) {
    let l = ih[a] || n && n[a];
    t[a] = l ? l(t[a], e[a]) : e[a];
  }
  return t;
}
let ih = { data: so, props: io, emits: io, methods: Vs, computed: Vs, beforeCreate: rt, created: rt, beforeMount: rt, mounted: rt, beforeUpdate: rt, updated: rt, beforeDestroy: rt, beforeUnmount: rt, destroyed: rt, unmounted: rt, activated: rt, deactivated: rt, errorCaptured: rt, serverPrefetch: rt, components: Vs, directives: Vs, watch: function(t, e) {
  if (!t) return e;
  if (!e) return t;
  let n = He(/* @__PURE__ */ Object.create(null), t);
  for (let s in e) n[s] = rt(t[s], e[s]);
  return n;
}, provide: so, inject: function(t, e) {
  return Vs(Pa(t), Pa(e));
} };
function so(t, e) {
  return e ? t ? function() {
    return He(ae(t) ? t.call(this, this) : t, ae(e) ? e.call(this, this) : e);
  } : e : t;
}
function Pa(t) {
  if (X(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function rt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Vs(t, e) {
  return t ? He(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function io(t, e) {
  return t ? X(t) && X(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : He(/* @__PURE__ */ Object.create(null), sr(t), sr(e ?? {})) : e;
}
function mc() {
  return { app: null, config: { isNativeTag: Su, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let rh = 0, Jn = null;
function On(t, e) {
  if (tt) {
    let n = tt.provides, s = tt.parent && tt.parent.provides;
    s === n && (n = tt.provides = Object.create(s)), n[t] = e;
  }
}
function an(t, e, n = !1) {
  let s = Zt();
  if (s || Jn) {
    let i = Jn ? Jn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && t in i) return i[t];
    if (arguments.length > 1) return n && ae(e) ? e.call(s && s.proxy) : e;
  }
}
function ah() {
  return !!(Zt() || Jn);
}
let lh = Symbol.for("v-scx"), oh = () => an(lh);
function $r(t, e) {
  return Or(t, null, e);
}
function uh(t, e) {
  return Or(t, null, { flush: "sync" });
}
function Le(t, e, n) {
  return Or(t, e, n);
}
function Or(t, e, n = ke) {
  let s, { immediate: i, flush: r } = n, a = He({}, n), l = e && i || !e && r !== "post";
  if (oi) {
    if (r === "sync") {
      let f = oh();
      s = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      let f = () => {
      };
      return f.stop = zt, f.resume = zt, f.pause = zt, f;
    }
  }
  let o = tt;
  a.call = (f, m, h) => Lt(f, o, m, h);
  let u = !1;
  r === "post" ? a.scheduler = (f) => {
    at(f, o && o.suspense);
  } : r !== "sync" && (u = !0, a.scheduler = (f, m) => {
    m ? f() : gl(f);
  }), a.augmentJob = (f) => {
    e && (f.flags |= 4), u && (f.flags |= 2, o && (f.id = o.uid, f.i = o));
  };
  let d = (function(f, m, h = ke) {
    let g, b, k, I, { immediate: D, deep: w, once: P, scheduler: L, augmentJob: H, call: K } = h, B = (oe) => w ? oe : pt(oe) || w === !1 || w === 0 ? tn(oe, 1) : tn(oe), $ = !1, Y = !1;
    if (De(f) ? (b = () => f.value, $ = pt(f)) : qt(f) ? (b = () => B(f), $ = !0) : X(f) ? (Y = !0, $ = f.some((oe) => qt(oe) || pt(oe)), b = () => f.map((oe) => De(oe) ? oe.value : qt(oe) ? B(oe) : ae(oe) ? K ? K(oe, 2) : oe() : void 0)) : b = ae(f) ? m ? K ? () => K(f, 2) : f : () => {
      if (k) {
        ln();
        try {
          k();
        } finally {
          on();
        }
      }
      let oe = zn;
      zn = g;
      try {
        return K ? K(f, 3, [I]) : f(I);
      } finally {
        zn = oe;
      }
    } : zt, m && w) {
      let oe = b, Oe = w === !0 ? 1 / 0 : w;
      b = () => tn(oe(), Oe);
    }
    let Q = $u(), R = () => {
      g.stop(), Q && Q.active && cl(Q.effects, g);
    };
    if (P && m) {
      let oe = m;
      m = (...Oe) => {
        oe(...Oe), R();
      };
    }
    let te = Y ? Array(f.length).fill($i) : $i, fe = (oe) => {
      if (1 & g.flags && (g.dirty || oe)) if (m) {
        let Oe = g.run();
        if (w || $ || (Y ? Oe.some((ye, ve) => ht(ye, te[ve])) : ht(Oe, te))) {
          k && k();
          let ye = zn;
          zn = g;
          try {
            let ve = [Oe, te === $i ? void 0 : Y && te[0] === $i ? [] : te, I];
            te = Oe, K ? K(m, 3, ve) : m(...ve);
          } finally {
            zn = ye;
          }
        }
      } else g.run();
    };
    return H && H(fe), (g = new Mu(b)).scheduler = L ? () => L(fe, !1) : fe, I = (oe) => Uf(oe, !1, g), k = g.onStop = () => {
      let oe = Xi.get(g);
      if (oe) {
        if (K) K(oe, 4);
        else for (let Oe of oe) Oe();
        Xi.delete(g);
      }
    }, m ? D ? fe(!0) : te = g.run() : L ? L(fe.bind(null, !0), !0) : g.run(), R.pause = g.pause.bind(g), R.resume = g.resume.bind(g), R.stop = R, R;
  })(t, e, a);
  return oi && (s ? s.push(d) : l && d()), d;
}
function ch(t, e, n) {
  let s, i = this.proxy, r = Be(t) ? t.includes(".") ? pc(i, t) : () => i[t] : t.bind(i, i);
  ae(e) ? s = e : (s = e.handler, n = e);
  let a = pi(this), l = Or(r, s.bind(i), n);
  return a(), l;
}
function pc(t, e) {
  let n = e.split(".");
  return () => {
    let s = t;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function fn(t, e, n = ke) {
  let s = Zt(), i = vt(e), r = Dn(e), a = gc(t, i), l = Pf((o, u) => {
    let d, f, m = ke;
    return uh(() => {
      let h = t[i];
      ht(d, h) && (d = h, u());
    }), { get: () => (o(), n.get ? n.get(d) : d), set(h) {
      let g = n.set ? n.set(h) : h;
      if (!ht(g, d) && !(m !== ke && ht(h, m))) return;
      let b = s.vnode.props;
      b && (e in b || i in b || r in b) && (`onUpdate:${e}` in b || `onUpdate:${i}` in b || `onUpdate:${r}` in b) || (d = h, u()), s.emit(`update:${e}`, g), ht(h, g) && ht(h, m) && !ht(g, f) && u(), m = h, f = g;
    } };
  });
  return l[Symbol.iterator] = () => {
    let o = 0;
    return { next: () => o < 2 ? { value: o++ ? a || ke : l, done: !1 } : { done: !0 } };
  }, l;
}
let gc = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${vt(e)}Modifiers`] || t[`${Dn(e)}Modifiers`];
function dh(t, e, ...n) {
  let s;
  if (t.isUnmounted) return;
  let i = t.vnode.props || ke, r = n, a = e.startsWith("update:"), l = a && gc(i, e.slice(7));
  l && (l.trim && (r = n.map((d) => Be(d) ? d.trim() : d)), l.number && (r = n.map(wr)));
  let o = i[s = sa(e)] || i[s = sa(vt(e))];
  !o && a && (o = i[s = sa(Dn(e))]), o && Lt(o, t, 6, r);
  let u = i[s + "Once"];
  if (u) {
    if (t.emitted) {
      if (t.emitted[s]) return;
    } else t.emitted = {};
    t.emitted[s] = !0, Lt(u, t, 6, r);
  }
}
let fh = /* @__PURE__ */ new WeakMap();
function rr(t, e) {
  return !!t && !!vr(e) && (Se(t, (e = e.slice(2).replace(/Once$/, ""))[0].toLowerCase() + e.slice(1)) || Se(t, Dn(e)) || Se(t, e));
}
function ro(t) {
  let e, n, { type: s, vnode: i, proxy: r, withProxy: a, propsOptions: [l], slots: o, attrs: u, emit: d, render: f, renderCache: m, props: h, data: g, setupState: b, ctx: k, inheritAttrs: I } = t, D = er(t);
  try {
    if (4 & i.shapeFlag) {
      let P = a || r;
      e = Ht(f.call(P, P, m, h, b, g, k)), n = u;
    } else e = Ht(s.length > 1 ? s(h, { attrs: u, slots: o, emit: d }) : s(h, null)), n = s.props ? u : hh(u);
  } catch (P) {
    Qs.length = 0, Ar(P, t, 1), e = M(Ke);
  }
  let w = e;
  if (n && I !== !1) {
    let P = Object.keys(n), { shapeFlag: L } = w;
    P.length && 7 & L && (l && P.some(ul) && (n = mh(n, l)), w = Mn(w, n, !1, !0));
  }
  return i.dirs && ((w = Mn(w, null, !1, !0)).dirs = w.dirs ? w.dirs.concat(i.dirs) : i.dirs), i.transition && ts(w, i.transition), e = w, er(D), e;
}
let hh = (t) => {
  let e;
  for (let n in t) (n === "class" || n === "style" || vr(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, mh = (t, e) => {
  let n = {};
  for (let s in t) ul(s) && s.slice(9) in e || (n[s] = t[s]);
  return n;
};
function ao(t, e, n) {
  let s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let i = 0; i < s.length; i++) {
    let r = s[i];
    if (e[r] !== t[r] && !rr(n, r)) return !0;
  }
  return !1;
}
function ph({ vnode: t, parent: e }, n) {
  for (; e; ) {
    let s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t) (t = e.vnode).el = n, e = e.parent;
    else break;
  }
}
let Ha = {}, vc = (t) => Object.getPrototypeOf(t) === Ha;
function yc(t, e, n, s) {
  let i, [r, a] = t.propsOptions, l = !1;
  if (e) for (let o in e) {
    let u;
    if (Zs(o)) continue;
    let d = e[o];
    r && Se(r, u = vt(o)) ? a && a.includes(u) ? (i || (i = {}))[u] = d : n[u] = d : rr(t.emitsOptions, o) || o in s && d === s[o] || (s[o] = d, l = !0);
  }
  if (a) {
    let o = me(n), u = i || ke;
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      n[f] = Wa(r, o, f, u[f], t, !Se(u, f));
    }
  }
  return l;
}
function Wa(t, e, n, s, i, r) {
  let a = t[n];
  if (a != null) {
    let l = Se(a, "default");
    if (l && s === void 0) {
      let o = a.default;
      if (a.type !== Function && !a.skipFactory && ae(o)) {
        let { propsDefaults: u } = i;
        if (n in u) s = u[n];
        else {
          let d = pi(i);
          s = u[n] = o.call(null, e), d();
        }
      } else s = o;
      i.ce && i.ce._setProp(n, s);
    }
    a[0] && (r && !l ? s = !1 : a[1] && (s === "" || s === Dn(n)) && (s = !0));
  }
  return s;
}
let gh = /* @__PURE__ */ new WeakMap();
function lo(t) {
  return !(t[0] === "$" || Zs(t));
}
let Sl = (t) => t === "_" || t === "_ctx" || t === "$stable", Tl = (t) => X(t) ? t.map(Ht) : [Ht(t)], vh = (t, e, n) => {
  if (e._n) return e;
  let s = W((...i) => Tl(e(...i)), n);
  return s._c = !1, s;
}, bc = (t, e, n) => {
  let s = t._ctx;
  for (let i in t) {
    if (Sl(i)) continue;
    let r = t[i];
    if (ae(r)) e[i] = vh(i, r, s);
    else if (r != null) {
      let a = Tl(r);
      e[i] = () => a;
    }
  }
}, kc = (t, e) => {
  let n = Tl(e);
  t.slots.default = () => n;
}, wc = (t, e, n) => {
  for (let s in e) (n || !Sl(s)) && (t[s] = e[s]);
}, at = wh;
function yh(t) {
  return bh(t);
}
function bh(t, e) {
  var n;
  let s, i;
  Ir().__VUE__ = !0;
  let { insert: r, remove: a, patchProp: l, createElement: o, createText: u, createComment: d, setText: f, setElementText: m, parentNode: h, nextSibling: g, setScopeId: b = zt, insertStaticContent: k } = t, I = (p, y, S, V = null, F = null, T = null, O, C = null, A = !!y.dynamicChildren) => {
    if (p === y) return;
    p && !qn(p, y) && (V = Ci(p), Re(p, F, T, !0), p = null), y.patchFlag === -2 && (A = !1, y.dynamicChildren = null);
    let { type: x, ref: z, shapeFlag: G } = y;
    switch (x) {
      case Mr:
        D(p, y, S, V);
        break;
      case Ke:
        w(p, y, S, V);
        break;
      case pa:
        p == null && P(y, S, V, O);
        break;
      case de:
        R(p, y, S, V, F, T, O, C, A);
        break;
      default:
        1 & G ? L(p, y, S, V, F, T, O, C, A) : 6 & G ? te(p, y, S, V, F, T, O, C, A) : (64 & G || 128 & G) && x.process(p, y, S, V, F, T, O, C, A, Ls);
    }
    z != null && F ? Ks(z, p && p.ref, T, y || p, !y) : z == null && p && p.ref != null && Ks(p.ref, null, T, p, !0);
  }, D = (p, y, S, V) => {
    if (p == null) r(y.el = u(y.children), S, V);
    else {
      let F = y.el = p.el;
      y.children !== p.children && f(F, y.children);
    }
  }, w = (p, y, S, V) => {
    p == null ? r(y.el = d(y.children || ""), S, V) : y.el = p.el;
  }, P = (p, y, S, V) => {
    [p.el, p.anchor] = k(p.children, y, S, V, p.el, p.anchor);
  }, L = (p, y, S, V, F, T, O, C, A) => {
    if (y.type === "svg" ? O = "svg" : y.type === "math" && (O = "mathml"), p == null) H(y, S, V, F, T, O, C, A);
    else {
      let x = p.el && p.el._isVueCE ? p.el : null;
      try {
        x && x._beginPatch(), $(p, y, F, T, O, C, A);
      } finally {
        x && x._endPatch();
      }
    }
  }, H = (p, y, S, V, F, T, O, C) => {
    let A, x, { props: z, shapeFlag: G, transition: q, dirs: Z } = p;
    if (A = p.el = o(p.type, T, z && z.is, z), 8 & G ? m(A, p.children) : 16 & G && B(p.children, A, null, V, F, ma(p, T), O, C), Z && Nn(p, null, V, "created"), K(A, p, p.scopeId, O, V), z) {
      for (let le in z) le === "value" || Zs(le) || l(A, le, null, z[le], T, V);
      "value" in z && l(A, "value", null, z.value, T), (x = z.onVnodeBeforeMount) && Nt(x, V, p);
    }
    Z && Nn(p, null, V, "beforeMount");
    let ce = kh(F, q);
    ce && q.beforeEnter(A), r(A, y, S), ((x = z && z.onVnodeMounted) || ce || Z) && at(() => {
      x && Nt(x, V, p), ce && q.enter(A), Z && Nn(p, null, V, "mounted");
    }, F);
  }, K = (p, y, S, V, F) => {
    if (S && b(p, S), V) for (let T = 0; T < V.length; T++) b(p, V[T]);
    if (F) {
      let T = F.subTree;
      if (y === T || Ic(T.type) && (T.ssContent === y || T.ssFallback === y)) {
        let O = F.vnode;
        K(p, O, O.scopeId, O.slotScopeIds, F.parent);
      }
    }
  }, B = (p, y, S, V, F, T, O, C, A = 0) => {
    for (let x = A; x < p.length; x++) I(null, p[x] = C ? Cn(p[x]) : Ht(p[x]), y, S, V, F, T, O, C);
  }, $ = (p, y, S, V, F, T, O) => {
    let C, A = y.el = p.el, { patchFlag: x, dynamicChildren: z, dirs: G } = y;
    x |= 16 & p.patchFlag;
    let q = p.props || ke, Z = y.props || ke;
    if (S && Rn(S, !1), (C = Z.onVnodeBeforeUpdate) && Nt(C, S, y, p), G && Nn(y, p, S, "beforeUpdate"), S && Rn(S, !0), (q.innerHTML && Z.innerHTML == null || q.textContent && Z.textContent == null) && m(A, ""), z ? Y(p.dynamicChildren, z, A, S, V, ma(y, F), T) : O || ve(p, y, A, null, S, V, ma(y, F), T, !1), x > 0) {
      if (16 & x) Q(A, q, Z, S, F);
      else if (2 & x && q.class !== Z.class && l(A, "class", null, Z.class, F), 4 & x && l(A, "style", q.style, Z.style, F), 8 & x) {
        let ce = y.dynamicProps;
        for (let le = 0; le < ce.length; le++) {
          let he = ce[le], Ze = q[he], Ye = Z[he];
          (Ye !== Ze || he === "value") && l(A, he, Ze, Ye, F, S);
        }
      }
      1 & x && p.children !== y.children && m(A, y.children);
    } else O || z != null || Q(A, q, Z, S, F);
    ((C = Z.onVnodeUpdated) || G) && at(() => {
      C && Nt(C, S, y, p), G && Nn(y, p, S, "updated");
    }, V);
  }, Y = (p, y, S, V, F, T, O) => {
    for (let C = 0; C < y.length; C++) {
      let A = p[C], x = y[C], z = A.el && (A.type === de || !qn(A, x) || 198 & A.shapeFlag) ? h(A.el) : S;
      I(A, x, z, null, V, F, T, O, !0);
    }
  }, Q = (p, y, S, V, F) => {
    if (y !== S) {
      if (y !== ke) for (let T in y) Zs(T) || T in S || l(p, T, y[T], null, F, V);
      for (let T in S) {
        if (Zs(T)) continue;
        let O = S[T], C = y[T];
        O !== C && T !== "value" && l(p, T, C, O, F, V);
      }
      "value" in S && l(p, "value", y.value, S.value, F);
    }
  }, R = (p, y, S, V, F, T, O, C, A) => {
    let x = y.el = p ? p.el : u(""), z = y.anchor = p ? p.anchor : u(""), { patchFlag: G, dynamicChildren: q, slotScopeIds: Z } = y;
    Z && (C = C ? C.concat(Z) : Z), p == null ? (r(x, S, V), r(z, S, V), B(y.children || [], S, z, F, T, O, C, A)) : G > 0 && 64 & G && q && p.dynamicChildren ? (Y(p.dynamicChildren, q, S, F, T, O, C), (y.key != null || F && y === F.subTree) && xl(p, y, !0)) : ve(p, y, S, z, F, T, O, C, A);
  }, te = (p, y, S, V, F, T, O, C, A) => {
    y.slotScopeIds = C, p == null ? 512 & y.shapeFlag ? F.ctx.activate(y, S, V, O, A) : fe(y, S, V, F, T, O, A) : oe(p, y, A);
  }, fe = (p, y, S, V, F, T, O) => {
    let C = p.component = xh(p, V, F);
    if (Fr(p) && (C.ctx.renderer = Ls), Ch(C, !1, O), C.asyncDep) {
      if (F && F.registerDep(C, Oe, O), !p.el) {
        let A = C.subTree = M(Ke);
        w(null, A, y, S), p.placeholder = A.el;
      }
    } else Oe(C, p, y, S, F, T, O);
  }, oe = (p, y, S) => {
    let V = y.component = p.component;
    if ((function(F, T, O) {
      let { props: C, children: A, component: x } = F, { props: z, children: G, patchFlag: q } = T, Z = x.emitsOptions;
      if (T.dirs || T.transition) return !0;
      if (!O || !(q >= 0)) return (!!A || !!G) && (!G || !G.$stable) || C !== z && (C ? !z || ao(C, z, Z) : !!z);
      if (1024 & q) return !0;
      if (16 & q) return C ? ao(C, z, Z) : !!z;
      if (8 & q) {
        let ce = T.dynamicProps;
        for (let le = 0; le < ce.length; le++) {
          let he = ce[le];
          if (z[he] !== C[he] && !rr(Z, he)) return !0;
        }
      }
      return !1;
    })(p, y, S)) {
      if (V.asyncDep && !V.asyncResolved) return void ye(V, y, S);
      V.next = y, V.update();
    } else y.el = p.el, V.vnode = y;
  }, Oe = (p, y, S, V, F, T, O) => {
    let C = () => {
      if (p.isMounted) {
        let G, { next: q, bu: Z, u: ce, parent: le, vnode: he } = p;
        {
          let Vt = (function Vn(Ei) {
            let Fe = Ei.subTree.component;
            if (Fe) return Fe.asyncDep && !Fe.asyncResolved ? Fe : Vn(Fe);
          })(p);
          if (Vt) {
            q && (q.el = he.el, ye(p, q, O)), Vt.asyncDep.then(() => {
              p.isUnmounted || C();
            });
            return;
          }
        }
        let Ze = q;
        Rn(p, !1), q ? (q.el = he.el, ye(p, q, O)) : q = he, Z && Wi(Z), (G = q.props && q.props.onVnodeBeforeUpdate) && Nt(G, le, q, he), Rn(p, !0);
        let Ye = ro(p), _t = p.subTree;
        p.subTree = Ye, I(_t, Ye, h(_t.el), Ci(_t), p, F, T), q.el = Ye.el, Ze === null && ph(p, Ye.el), ce && at(ce, F), (G = q.props && q.props.onVnodeUpdated) && at(() => Nt(G, le, q, he), F);
      } else {
        let G, { el: q, props: Z } = y, { bm: ce, m: le, parent: he, root: Ze, type: Ye } = p, _t = ys(y);
        if (Rn(p, !1), ce && Wi(ce), !_t && (G = Z && Z.onVnodeBeforeMount) && Nt(G, he, y), Rn(p, !0), !(q && i)) {
          Ze.ce && Ze.ce._def.shadowRoot !== !1 && Ze.ce._injectChildStyle(Ye);
          let Vt = p.subTree = ro(p);
          I(null, Vt, S, V, p, F, T), y.el = Vt.el;
        }
        if (le && at(le, F), !_t && (G = Z && Z.onVnodeMounted)) {
          let Vt = y;
          at(() => Nt(G, he, Vt), F);
        }
        (256 & y.shapeFlag || he && ys(he.vnode) && 256 & he.vnode.shapeFlag) && p.a && at(p.a, F), p.isMounted = !0, y = S = V = null;
      }
    };
    p.scope.on();
    let A = p.effect = new Mu(C);
    p.scope.off();
    let x = p.update = A.run.bind(A), z = p.job = A.runIfDirty.bind(A);
    z.i = p, z.id = p.uid, A.scheduler = () => gl(z), Rn(p, !0), x();
  }, ye = (p, y, S) => {
    y.component = p;
    let V = p.vnode.props;
    p.vnode = y, p.next = null, (function(F, T, O, C) {
      let { props: A, attrs: x, vnode: { patchFlag: z } } = F, G = me(A), [q] = F.propsOptions, Z = !1;
      if ((C || z > 0) && !(16 & z)) {
        if (8 & z) {
          let ce = F.vnode.dynamicProps;
          for (let le = 0; le < ce.length; le++) {
            let he = ce[le];
            if (rr(F.emitsOptions, he)) continue;
            let Ze = T[he];
            if (q) if (Se(x, he)) Ze !== x[he] && (x[he] = Ze, Z = !0);
            else {
              let Ye = vt(he);
              A[Ye] = Wa(q, G, Ye, Ze, F, !1);
            }
            else Ze !== x[he] && (x[he] = Ze, Z = !0);
          }
        }
      } else {
        let ce;
        for (let le in yc(F, T, A, x) && (Z = !0), G) T && (Se(T, le) || (ce = Dn(le)) !== le && Se(T, ce)) || (q ? O && (O[le] !== void 0 || O[ce] !== void 0) && (A[le] = Wa(q, G, le, void 0, F, !0)) : delete A[le]);
        if (x !== G) for (let le in x) T && Se(T, le) || (delete x[le], Z = !0);
      }
      Z && en(F.attrs, "set", "");
    })(p, y.props, V, S), ((F, T, O) => {
      let { vnode: C, slots: A } = F, x = !0, z = ke;
      if (32 & C.shapeFlag) {
        let G = T._;
        G ? O && G === 1 ? x = !1 : wc(A, T, O) : (x = !T.$stable, bc(T, A)), z = T;
      } else T && (kc(F, T), z = { default: 1 });
      if (x) for (let G in A) Sl(G) || z[G] != null || delete A[G];
    })(p, y.children, S), ln(), Zl(p), on();
  }, ve = (p, y, S, V, F, T, O, C, A = !1) => {
    let x = p && p.children, z = p ? p.shapeFlag : 0, G = y.children, { patchFlag: q, shapeFlag: Z } = y;
    if (q > 0) {
      if (128 & q) return void Ne(x, G, S, V, F, T, O, C, A);
      if (256 & q) return void Ce(x, G, S, V, F, T, O, C, A);
    }
    8 & Z ? (16 & z && Bs(x, F, T), G !== x && m(S, G)) : 16 & z ? 16 & Z ? Ne(x, G, S, V, F, T, O, C, A) : Bs(x, F, T, !0) : (8 & z && m(S, ""), 16 & Z && B(G, S, V, F, T, O, C, A));
  }, Ce = (p, y, S, V, F, T, O, C, A) => {
    let x;
    p = p || ps, y = y || ps;
    let z = p.length, G = y.length, q = Math.min(z, G);
    for (x = 0; x < q; x++) {
      let Z = y[x] = A ? Cn(y[x]) : Ht(y[x]);
      I(p[x], Z, S, null, F, T, O, C, A);
    }
    z > G ? Bs(p, F, T, !0, !1, q) : B(y, S, V, F, T, O, C, A, q);
  }, Ne = (p, y, S, V, F, T, O, C, A) => {
    let x = 0, z = y.length, G = p.length - 1, q = z - 1;
    for (; x <= G && x <= q; ) {
      let Z = p[x], ce = y[x] = A ? Cn(y[x]) : Ht(y[x]);
      if (qn(Z, ce)) I(Z, ce, S, null, F, T, O, C, A);
      else break;
      x++;
    }
    for (; x <= G && x <= q; ) {
      let Z = p[G], ce = y[q] = A ? Cn(y[q]) : Ht(y[q]);
      if (qn(Z, ce)) I(Z, ce, S, null, F, T, O, C, A);
      else break;
      G--, q--;
    }
    if (x > G) {
      if (x <= q) {
        let Z = q + 1, ce = Z < z ? y[Z].el : V;
        for (; x <= q; ) I(null, y[x] = A ? Cn(y[x]) : Ht(y[x]), S, ce, F, T, O, C, A), x++;
      }
    } else if (x > q) for (; x <= G; ) Re(p[x], F, T, !0), x++;
    else {
      let Z, ce = x, le = x, he = /* @__PURE__ */ new Map();
      for (x = le; x <= q; x++) {
        let Fe = y[x] = A ? Cn(y[x]) : Ht(y[x]);
        Fe.key != null && he.set(Fe.key, x);
      }
      let Ze = 0, Ye = q - le + 1, _t = !1, Vt = 0, Vn = Array(Ye);
      for (x = 0; x < Ye; x++) Vn[x] = 0;
      for (x = ce; x <= G; x++) {
        let Fe, qe = p[x];
        if (Ze >= Ye) {
          Re(qe, F, T, !0);
          continue;
        }
        if (qe.key != null) Fe = he.get(qe.key);
        else for (Z = le; Z <= q; Z++) if (Vn[Z - le] === 0 && qn(qe, y[Z])) {
          Fe = Z;
          break;
        }
        Fe === void 0 ? Re(qe, F, T, !0) : (Vn[Fe - le] = x + 1, Fe >= Vt ? Vt = Fe : _t = !0, I(qe, y[Fe], S, null, F, T, O, C, A), Ze++);
      }
      let Ei = _t ? (function(Fe) {
        let qe, Ds, it, yn, Xr, ea = Fe.slice(), yt = [0], mf = Fe.length;
        for (qe = 0; qe < mf; qe++) {
          let Ai = Fe[qe];
          if (Ai !== 0) {
            if (Fe[Ds = yt[yt.length - 1]] < Ai) {
              ea[qe] = Ds, yt.push(qe);
              continue;
            }
            for (it = 0, yn = yt.length - 1; it < yn; ) Fe[yt[Xr = it + yn >> 1]] < Ai ? it = Xr + 1 : yn = Xr;
            Ai < Fe[yt[it]] && (it > 0 && (ea[qe] = yt[it - 1]), yt[it] = qe);
          }
        }
        for (it = yt.length, yn = yt[it - 1]; it-- > 0; ) yt[it] = yn, yn = ea[yn];
        return yt;
      })(Vn) : ps;
      for (Z = Ei.length - 1, x = Ye - 1; x >= 0; x--) {
        let Fe = le + x, qe = y[Fe], Ds = y[Fe + 1], it = Fe + 1 < z ? Ds.el || Ds.placeholder : V;
        Vn[x] === 0 ? I(null, qe, S, it, F, T, O, C, A) : _t && (Z < 0 || x !== Ei[Z] ? Ge(qe, S, it, 2) : Z--);
      }
    }
  }, Ge = (p, y, S, V, F = null) => {
    let { el: T, type: O, transition: C, children: A, shapeFlag: x } = p;
    if (6 & x) return void Ge(p.component.subTree, y, S, V);
    if (128 & x) return void p.suspense.move(y, S, V);
    if (64 & x) return void O.move(p, y, S, Ls);
    if (O === de) {
      r(T, y, S);
      for (let z = 0; z < A.length; z++) Ge(A[z], y, S, V);
      r(p.anchor, y, S);
      return;
    }
    if (O === pa) return void (({ el: z, anchor: G }, q, Z) => {
      let ce;
      for (; z && z !== G; ) ce = g(z), r(z, q, Z), z = ce;
      r(G, q, Z);
    })(p, y, S);
    if (V !== 2 && 1 & x && C) if (V === 0) C.beforeEnter(T), r(T, y, S), at(() => C.enter(T), F);
    else {
      let { leave: z, delayLeave: G, afterLeave: q } = C, Z = () => {
        p.ctx.isUnmounted ? a(T) : r(T, y, S);
      }, ce = () => {
        T._isLeaving && T[Xt](!0), z(T, () => {
          Z(), q && q();
        });
      };
      G ? G(T, Z, ce) : ce();
    }
    else r(T, y, S);
  }, Re = (p, y, S, V = !1, F = !1) => {
    let T, { type: O, props: C, ref: A, children: x, dynamicChildren: z, shapeFlag: G, patchFlag: q, dirs: Z, cacheIndex: ce } = p;
    if (q === -2 && (F = !1), A != null && (ln(), Ks(A, null, S, p, !0), on()), ce != null && (y.renderCache[ce] = void 0), 256 & G) return void y.ctx.deactivate(p);
    let le = 1 & G && Z, he = !ys(p);
    if (he && (T = C && C.onVnodeBeforeUnmount) && Nt(T, y, p), 6 & G) Yt(p.component, S, V);
    else {
      if (128 & G) return void p.suspense.unmount(S, V);
      le && Nn(p, null, y, "beforeUnmount"), 64 & G ? p.type.remove(p, y, S, Ls, V) : z && !z.hasOnce && (O !== de || q > 0 && 64 & q) ? Bs(z, y, S, !1, !0) : (O === de && 384 & q || !F && 16 & G) && Bs(x, y, S), V && ft(p);
    }
    (he && (T = C && C.onVnodeUnmounted) || le) && at(() => {
      T && Nt(T, y, p), le && Nn(p, null, y, "unmounted");
    }, S);
  }, ft = (p) => {
    let { type: y, el: S, anchor: V, transition: F } = p;
    if (y === de) return void _n(S, V);
    if (y === pa) return void (({ el: O, anchor: C }) => {
      let A;
      for (; O && O !== C; ) A = g(O), a(O), O = A;
      a(C);
    })(p);
    let T = () => {
      a(S), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (1 & p.shapeFlag && F && !F.persisted) {
      let { leave: O, delayLeave: C } = F, A = () => O(S, T);
      C ? C(p.el, T, A) : A();
    } else T();
  }, _n = (p, y) => {
    let S;
    for (; p !== y; ) S = g(p), a(p), p = S;
    a(y);
  }, Yt = (p, y, S) => {
    let { bum: V, scope: F, job: T, subTree: O, um: C, m: A, a: x } = p;
    oo(A), oo(x), V && Wi(V), F.stop(), T && (T.flags |= 8, Re(O, p, y, S)), C && at(C, y), at(() => {
      p.isUnmounted = !0;
    }, y);
  }, Bs = (p, y, S, V = !1, F = !1, T = 0) => {
    for (let O = T; O < p.length; O++) Re(p[O], y, S, V, F);
  }, Ci = (p) => {
    if (6 & p.shapeFlag) return Ci(p.component.subTree);
    if (128 & p.shapeFlag) return p.suspense.next();
    let y = g(p.anchor || p.el), S = y && y[Qu];
    return S ? g(S) : y;
  }, Jr = !1, Qr = (p, y, S) => {
    p == null ? y._vnode && Re(y._vnode, null, null, !0) : I(y._vnode || null, p, y, null, null, null, S), y._vnode = p, Jr || (Jr = !0, Zl(), Ku(), Jr = !1);
  }, Ls = { p: I, um: Re, m: Ge, r: ft, mt: fe, mc: B, pc: ve, pbc: Y, n: Ci, o: t };
  return { render: Qr, hydrate: s, createApp: (n = s, function(p, y = null) {
    ae(p) || (p = He({}, p)), y == null || Ee(y) || (y = null);
    let S = mc(), V = /* @__PURE__ */ new WeakSet(), F = [], T = !1, O = S.app = { _uid: rh++, _component: p, _props: y, _container: null, _context: S, _instance: null, version: Fh, get config() {
      return S.config;
    }, set config(C) {
    }, use: (C, ...A) => (V.has(C) || (C && ae(C.install) ? (V.add(C), C.install(O, ...A)) : ae(C) && (V.add(C), C(O, ...A))), O), mixin: (C) => (S.mixins.includes(C) || S.mixins.push(C), O), component: (C, A) => A ? (S.components[C] = A, O) : S.components[C], directive: (C, A) => A ? (S.directives[C] = A, O) : S.directives[C], mount(C, A, x) {
      if (!T) {
        let z = O._ceVNode || M(p, y);
        return z.appContext = S, x === !0 ? x = "svg" : x === !1 && (x = void 0), A && n ? n(z, C) : Qr(z, C, x), T = !0, O._container = C, C.__vue_app__ = O, Br(z.component);
      }
    }, onUnmount(C) {
      F.push(C);
    }, unmount() {
      T && (Lt(F, O._instance, 16), Qr(null, O._container), delete O._container.__vue_app__);
    }, provide: (C, A) => (S.provides[C] = A, O), runWithContext(C) {
      let A = Jn;
      Jn = O;
      try {
        return C();
      } finally {
        Jn = A;
      }
    } };
    return O;
  }) };
}
function ma({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Rn({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function kh(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function xl(t, e, n = !1) {
  let s = t.children, i = e.children;
  if (X(s) && X(i)) for (let r = 0; r < s.length; r++) {
    let a = s[r], l = i[r];
    1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[r] = Cn(i[r])).el = a.el), n || l.patchFlag === -2 || xl(a, l)), l.type === Mr && l.patchFlag !== -1 && (l.el = a.el), l.type !== Ke || l.el || (l.el = a.el);
  }
}
function oo(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
let Ic = (t) => t.__isSuspense;
function wh(t, e) {
  e && e.pendingBranch ? X(t) ? e.effects.push(...t) : e.effects.push(t) : qf(t);
}
let de = Symbol.for("v-fgt"), Mr = Symbol.for("v-txt"), Ke = Symbol.for("v-cmt"), pa = Symbol.for("v-stc"), Qs = [], mt = null;
function v(t = !1) {
  Qs.push(mt = t ? null : []);
}
function Ih() {
  Qs.pop(), mt = Qs[Qs.length - 1] || null;
}
let ai = 1;
function ar(t, e = !1) {
  ai += t, t < 0 && mt && e && (mt.hasOnce = !0);
}
function Sc(t) {
  return t.dynamicChildren = ai > 0 ? mt || ps : null, Ih(), ai > 0 && mt && mt.push(t), t;
}
function N(t, e, n, s, i, r) {
  return Sc(we(t, e, n, s, i, r, !0));
}
function _(t, e, n, s, i) {
  return Sc(M(t, e, n, s, i, !0));
}
function li(t) {
  return !!t && t.__v_isVNode === !0;
}
function qn(t, e) {
  return t.type === e.type && t.key === e.key;
}
let Tc = ({ key: t }) => t ?? null, Ui = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? Be(t) || De(t) || ae(t) ? { i: Je, r: t, k: e, f: !!n } : t : null);
function we(t, e = null, n = null, s = 0, i = null, r = +(t !== de), a = !1, l = !1) {
  let o = { __v_isVNode: !0, __v_skip: !0, type: t, props: e, key: e && Tc(e), ref: e && Ui(e), scopeId: Ju, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: s, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Je };
  return l ? (Cl(o, n), 128 & r && t.normalize(o)) : n && (o.shapeFlag |= Be(n) ? 8 : 16), ai > 0 && !a && mt && (o.patchFlag > 0 || 6 & r) && o.patchFlag !== 32 && mt.push(o), o;
}
let M = function(t, e = null, n = null, s = 0, i = null, r = !1) {
  var a;
  if (t && t !== cc || (t = Ke), li(t)) {
    let o = Mn(t, e, !0);
    return n && Cl(o, n), ai > 0 && !r && mt && (6 & o.shapeFlag ? mt[mt.indexOf(t)] = o : mt.push(o)), o.patchFlag = -2, o;
  }
  if (ae(a = t) && "__vccOpts" in a && (t = t.__vccOpts), e) {
    let { class: o, style: u } = e = qi(e);
    o && !Be(o) && (e.class = E(o)), Ee(u) && (Er(u) && !X(u) && (u = He({}, u)), e.style = st(u));
  }
  let l = Be(t) ? 1 : Ic(t) ? 128 : t.__isTeleport ? 64 : Ee(t) ? 4 : 2 * !!ae(t);
  return we(t, e, n, s, i, l, r, !0);
};
function qi(t) {
  return t ? Er(t) || vc(t) ? He({}, t) : t : null;
}
function Mn(t, e, n = !1, s = !1) {
  let { props: i, ref: r, patchFlag: a, children: l, transition: o } = t, u = e ? wt(i || {}, e) : i, d = { __v_isVNode: !0, __v_skip: !0, type: t.type, props: u, key: u && Tc(u), ref: e && e.ref ? n && r ? X(r) ? r.concat(Ui(e)) : [r, Ui(e)] : Ui(e) : r, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: e && t.type !== de ? a === -1 ? 16 : 16 | a : a, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: o, component: t.component, suspense: t.suspense, ssContent: t.ssContent && Mn(t.ssContent), ssFallback: t.ssFallback && Mn(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
  return o && s && ts(d, o.clone(d)), d;
}
function mi(t = " ", e = 0) {
  return M(Mr, null, t, e);
}
function J(t = "", e = !1) {
  return e ? (v(), _(Ke, null, t)) : M(Ke, null, t);
}
function Ht(t) {
  return t == null || typeof t == "boolean" ? M(Ke) : X(t) ? M(de, null, t.slice()) : li(t) ? Cn(t) : M(Mr, null, String(t));
}
function Cn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Mn(t);
}
function Cl(t, e) {
  let n = 0, { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (X(e)) n = 16;
  else if (typeof e == "object") if (65 & s) {
    let i = e.default;
    i && (i._c && (i._d = !1), Cl(t, i()), i._c && (i._d = !0));
    return;
  } else {
    n = 32;
    let i = e._;
    i || vc(e) ? i === 3 && Je && (Je.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024)) : e._ctx = Je;
  }
  else ae(e) ? (e = { default: e, _ctx: Je }, n = 32) : (e = String(e), 64 & s ? (n = 16, e = [mi(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function wt(...t) {
  let e = {};
  for (let n = 0; n < t.length; n++) {
    let s = t[n];
    for (let i in s) if (i === "class") e.class !== s.class && (e.class = E([e.class, s.class]));
    else if (i === "style") e.style = st([e.style, s.style]);
    else if (vr(i)) {
      let r = e[i], a = s[i];
      a && r !== a && !(X(r) && r.includes(a)) && (e[i] = r ? [].concat(r, a) : a);
    } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function Nt(t, e, n, s = null) {
  Lt(t, e, 7, [n, s]);
}
let Sh = mc(), Th = 0;
function xh(t, e, n) {
  let s = t.type, i = (e ? e.appContext : t.appContext) || Sh, r = { uid: Th++, vnode: t, type: s, parent: e, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Au(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(i.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: (function a(l, o, u = !1) {
    let d = u ? gh : o.propsCache, f = d.get(l);
    if (f) return f;
    let m = l.props, h = {}, g = [], b = !1;
    if (!ae(l)) {
      let I = (D) => {
        b = !0;
        let [w, P] = a(D, o, !0);
        He(h, w), P && g.push(...P);
      };
      !u && o.mixins.length && o.mixins.forEach(I), l.extends && I(l.extends), l.mixins && l.mixins.forEach(I);
    }
    if (!m && !b) return Ee(l) && d.set(l, ps), ps;
    if (X(m)) for (let I = 0; I < m.length; I++) {
      let D = vt(m[I]);
      lo(D) && (h[D] = ke);
    }
    else if (m) for (let I in m) {
      let D = vt(I);
      if (lo(D)) {
        let w = m[I], P = h[D] = X(w) || ae(w) ? { type: w } : He({}, w), L = P.type, H = !1, K = !0;
        if (X(L)) for (let B = 0; B < L.length; ++B) {
          let $ = L[B], Y = ae($) && $.name;
          if (Y === "Boolean") {
            H = !0;
            break;
          }
          Y === "String" && (K = !1);
        }
        else H = ae(L) && L.name === "Boolean";
        P[0] = H, P[1] = K, (H || Se(P, "default")) && g.push(D);
      }
    }
    let k = [h, g];
    return Ee(l) && d.set(l, k), k;
  })(s, i), emitsOptions: (function a(l, o, u = !1) {
    let d = u ? fh : o.emitsCache, f = d.get(l);
    if (f !== void 0) return f;
    let m = l.emits, h = {}, g = !1;
    if (!ae(l)) {
      let b = (k) => {
        let I = a(k, o, !0);
        I && (g = !0, He(h, I));
      };
      !u && o.mixins.length && o.mixins.forEach(b), l.extends && b(l.extends), l.mixins && l.mixins.forEach(b);
    }
    return m || g ? (X(m) ? m.forEach((b) => h[b] = null) : He(h, m), Ee(l) && d.set(l, h), h) : (Ee(l) && d.set(l, null), null);
  })(s, i), emit: null, emitted: null, propsDefaults: ke, inheritAttrs: s.inheritAttrs, ctx: ke, data: ke, props: ke, attrs: ke, slots: ke, refs: ke, setupState: ke, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = dh.bind(null, r), t.ce && t.ce(r), r;
}
let tt = null, Zt = () => tt || Je;
{
  let t = Ir(), e = (n, s) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((a) => a(r)) : i[0](r);
    };
  };
  Ji = e("__VUE_INSTANCE_SETTERS__", (n) => tt = n), Ba = e("__VUE_SSR_SETTERS__", (n) => oi = n);
}
let pi = (t) => {
  let e = tt;
  return Ji(t), t.scope.on(), () => {
    t.scope.off(), Ji(e);
  };
}, uo = () => {
  tt && tt.scope.off(), Ji(null);
};
function xc(t) {
  return 4 & t.vnode.shapeFlag;
}
let oi = !1;
function Ch(t, e = !1, n = !1) {
  e && Ba(e);
  let { props: s, children: i } = t.vnode, r = xc(t);
  (function(u, d, f, m = !1) {
    let h = {}, g = Object.create(Ha);
    for (let b in u.propsDefaults = /* @__PURE__ */ Object.create(null), yc(u, d, h, g), u.propsOptions[0]) b in h || (h[b] = void 0);
    f ? u.props = m ? h : Df(h) : u.type.props ? u.props = h : u.props = g, u.attrs = g;
  })(t, s, r, e);
  var a = n || e;
  let l = t.slots = Object.create(Ha);
  if (32 & t.vnode.shapeFlag) {
    let u = i._;
    u ? (wc(l, i, a), a && xu(l, "_", u, !0)) : bc(i, l);
  } else i && kc(t, i);
  let o = r ? (function(u, d) {
    let f = u.type;
    u.accessCache = /* @__PURE__ */ Object.create(null), u.proxy = new Proxy(u.ctx, Na);
    let { setup: m } = f;
    if (m) {
      ln();
      let h = u.setupContext = m.length > 1 ? Ec(u) : null, g = pi(u), b = hi(m, u, 0, [u.props, h]), k = Tu(b);
      if (on(), g(), (k || u.sp) && !ys(u) && ac(u), k) {
        if (b.then(uo, uo), d) return b.then((I) => {
          co(u, I);
        }).catch((I) => {
          Ar(I, u, 0);
        });
        u.asyncDep = b;
      } else co(u, b);
    } else Cc(u);
  })(t, e) : void 0;
  return e && Ba(!1), o;
}
function co(t, e, n) {
  ae(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ee(e) && (t.setupState = ju(e)), Cc(t);
}
function Cc(t, e, n) {
  let s = t.type;
  t.render || (t.render = s.render || zt);
  {
    let i = pi(t);
    ln();
    try {
      (function(r) {
        let a = hc(r), l = r.proxy, o = r.ctx;
        Ra = !1, a.beforeCreate && no(a.beforeCreate, r, "bc");
        let { data: u, computed: d, methods: f, watch: m, provide: h, inject: g, created: b, beforeMount: k, mounted: I, beforeUpdate: D, updated: w, activated: P, deactivated: L, beforeUnmount: H, unmounted: K, render: B, renderTracked: $, renderTriggered: Y, errorCaptured: Q, serverPrefetch: R, expose: te, inheritAttrs: fe, components: oe, directives: Oe } = a;
        if (g && (function(ve, Ce, Ne = zt) {
          for (let Ge in X(ve) && (ve = Pa(ve)), ve) {
            let Re, ft = ve[Ge];
            De(Re = Ee(ft) ? "default" in ft ? an(ft.from || Ge, ft.default, !0) : an(ft.from || Ge) : an(ft)) ? Object.defineProperty(Ce, Ge, { enumerable: !0, configurable: !0, get: () => Re.value, set: (_n) => Re.value = _n }) : Ce[Ge] = Re;
          }
        })(g, o, null), f) for (let ve in f) {
          let Ce = f[ve];
          ae(Ce) && (o[ve] = Ce.bind(l));
        }
        if (u) {
          let ve = u.call(l, l);
          Ee(ve) && (r.data = mn(ve));
        }
        if (Ra = !0, d) for (let ve in d) {
          let Ce = d[ve], Ne = ae(Ce) ? Ce.bind(l, l) : ae(Ce.get) ? Ce.get.bind(l, l) : zt, Ge = Ae({ get: Ne, set: !ae(Ce) && ae(Ce.set) ? Ce.set.bind(l) : zt });
          Object.defineProperty(o, ve, { enumerable: !0, configurable: !0, get: () => Ge.value, set: (Re) => Ge.value = Re });
        }
        if (m) for (let ve in m) (function Ce(Ne, Ge, Re, ft) {
          let _n = ft.includes(".") ? pc(Re, ft) : () => Re[ft];
          if (Be(Ne)) {
            let Yt = Ge[Ne];
            ae(Yt) && Le(_n, Yt);
          } else if (ae(Ne)) Le(_n, Ne.bind(Re));
          else if (Ee(Ne)) if (X(Ne)) Ne.forEach((Yt) => Ce(Yt, Ge, Re, ft));
          else {
            let Yt = ae(Ne.handler) ? Ne.handler.bind(Re) : Ge[Ne.handler];
            ae(Yt) && Le(_n, Yt, Ne);
          }
        })(m[ve], o, l, ve);
        if (h) {
          let ve = ae(h) ? h.call(l) : h;
          Reflect.ownKeys(ve).forEach((Ce) => {
            On(Ce, ve[Ce]);
          });
        }
        function ye(ve, Ce) {
          X(Ce) ? Ce.forEach((Ne) => ve(Ne.bind(l))) : Ce && ve(Ce.bind(l));
        }
        if (b && no(b, r, "c"), ye(Yf, k), ye(gn, I), ye(Kf, D), ye(oc, w), ye(Gf, P), ye(Zf, L), ye(eh, Q), ye(Xf, $), ye(Qf, Y), ye(kl, H), ye(ss, K), ye(Jf, R), X(te)) if (te.length) {
          let ve = r.exposed || (r.exposed = {});
          te.forEach((Ce) => {
            Object.defineProperty(ve, Ce, { get: () => l[Ce], set: (Ne) => l[Ce] = Ne, enumerable: !0 });
          });
        } else r.exposed || (r.exposed = {});
        B && r.render === zt && (r.render = B), fe != null && (r.inheritAttrs = fe), oe && (r.components = oe), Oe && (r.directives = Oe), R && ac(r);
      })(t);
    } finally {
      on(), i();
    }
  }
}
let Eh = { get: (t, e) => (et(t, "get", ""), t[e]) };
function Ec(t) {
  return { attrs: new Proxy(t.attrs, Eh), slots: t.slots, emit: t.emit, expose: (e) => {
    t.exposed = e || {};
  } };
}
function Br(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(ju(pl(t.exposed)), { get: (e, n) => n in e ? e[n] : n in Js ? Js[n](t) : void 0, has: (e, n) => n in e || n in Js })) : t.proxy;
}
function Ah(t, e = !0) {
  return ae(t) ? t.displayName || t.name : t.name || e && t.__name;
}
let Ae = (t, e) => (function(n, s, i = !1) {
  let r, a;
  return ae(n) ? r = n : (r = n.get, a = n.set), new zf(r, a, i);
})(t, 0, oi);
function bs(t, e, n) {
  try {
    ar(-1);
    let s = arguments.length;
    return s !== 2 ? (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && li(n) && (n = [n]), M(t, e, n)) : !Ee(e) || X(e) ? M(t, null, e) : li(e) ? M(t, null, [e]) : M(t, e);
  } finally {
    ar(1);
  }
}
let Fh = "3.5.25", fo = typeof window < "u" && window.trustedTypes;
if (fo) try {
  La = fo.createPolicy("vue", { createHTML: (t) => t });
} catch {
}
let Ac = La ? (t) => La.createHTML(t) : (t) => t, Qt = typeof document < "u" ? document : null, ho = Qt && Qt.createElement("template"), $h = { insert: (t, e, n) => {
  e.insertBefore(t, n || null);
}, remove: (t) => {
  let e = t.parentNode;
  e && e.removeChild(t);
}, createElement: (t, e, n, s) => {
  let i = e === "svg" ? Qt.createElementNS("http://www.w3.org/2000/svg", t) : e === "mathml" ? Qt.createElementNS("http://www.w3.org/1998/Math/MathML", t) : n ? Qt.createElement(t, { is: n }) : Qt.createElement(t);
  return t === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
}, createText: (t) => Qt.createTextNode(t), createComment: (t) => Qt.createComment(t), setText: (t, e) => {
  t.nodeValue = e;
}, setElementText: (t, e) => {
  t.textContent = e;
}, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => Qt.querySelector(t), setScopeId(t, e) {
  t.setAttribute(e, "");
}, insertStaticContent(t, e, n, s, i, r) {
  let a = n ? n.previousSibling : e.lastChild;
  if (i && (i === r || i.nextSibling)) for (; e.insertBefore(i.cloneNode(!0), n), i !== r && (i = i.nextSibling); ) ;
  else {
    ho.innerHTML = Ac(s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t);
    let l = ho.content;
    if (s === "svg" || s === "mathml") {
      let o = l.firstChild;
      for (; o.firstChild; ) l.appendChild(o.firstChild);
      l.removeChild(o);
    }
    e.insertBefore(l, n);
  }
  return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
} }, bn = "transition", Ns = "animation", Ss = Symbol("_vtc"), Fc = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, $c = He({}, nc, Fc), ns = ((ta = (t, { slots: e }) => bs(jf, Oc(t), e)).displayName = "Transition", ta.props = $c, ta), Pn = (t, e = []) => {
  X(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, mo = (t) => !!t && (X(t) ? t.some((e) => e.length > 1) : t.length > 1);
function Oc(t) {
  let e = {};
  for (let R in t) R in Fc || (e[R] = t[R]);
  if (t.css === !1) return e;
  let { name: n = "v", type: s, duration: i, enterFromClass: r = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: o = r, appearActiveClass: u = a, appearToClass: d = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: m = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = t, g = (function(R) {
    if (R == null) return null;
    {
      if (Ee(R)) return [(function(fe) {
        return ia(fe);
      })(R.enter), (function(fe) {
        return ia(fe);
      })(R.leave)];
      let te = (function(fe) {
        return ia(fe);
      })(R);
      return [te, te];
    }
  })(i), b = g && g[0], k = g && g[1], { onBeforeEnter: I, onEnter: D, onEnterCancelled: w, onLeave: P, onLeaveCancelled: L, onBeforeAppear: H = I, onAppear: K = D, onAppearCancelled: B = w } = e, $ = (R, te, fe, oe) => {
    R._enterCancelled = oe, In(R, te ? d : l), In(R, te ? u : a), fe && fe();
  }, Y = (R, te) => {
    R._isLeaving = !1, In(R, f), In(R, h), In(R, m), te && te();
  }, Q = (R) => (te, fe) => {
    let oe = R ? K : D, Oe = () => $(te, R, fe);
    Pn(oe, [te, Oe]), po(() => {
      In(te, R ? o : r), Rt(te, R ? d : l), mo(oe) || go(te, s, b, Oe);
    });
  };
  return He(e, { onBeforeEnter(R) {
    Pn(I, [R]), Rt(R, r), Rt(R, a);
  }, onBeforeAppear(R) {
    Pn(H, [R]), Rt(R, o), Rt(R, u);
  }, onEnter: Q(!1), onAppear: Q(!0), onLeave(R, te) {
    R._isLeaving = !0;
    let fe = () => Y(R, te);
    Rt(R, f), R._enterCancelled ? (Rt(R, m), za(R)) : (za(R), Rt(R, m)), po(() => {
      R._isLeaving && (In(R, f), Rt(R, h), mo(P) || go(R, s, k, fe));
    }), Pn(P, [R, fe]);
  }, onEnterCancelled(R) {
    $(R, !1, void 0, !0), Pn(w, [R]);
  }, onAppearCancelled(R) {
    $(R, !0, void 0, !0), Pn(B, [R]);
  }, onLeaveCancelled(R) {
    Y(R), Pn(L, [R]);
  } });
}
function Rt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[Ss] || (t[Ss] = /* @__PURE__ */ new Set())).add(e);
}
function In(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  let n = t[Ss];
  n && (n.delete(e), n.size || (t[Ss] = void 0));
}
function po(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Oh = 0;
function go(t, e, n, s) {
  let i = t._endId = ++Oh, r = () => {
    i === t._endId && s();
  };
  if (n != null) return setTimeout(r, n);
  let { type: a, timeout: l, propCount: o } = Mc(t, e);
  if (!a) return s();
  let u = a + "end", d = 0, f = () => {
    t.removeEventListener(u, m), r();
  }, m = (h) => {
    h.target === t && ++d >= o && f();
  };
  setTimeout(() => {
    d < o && f();
  }, l + 1), t.addEventListener(u, m);
}
function Mc(t, e) {
  let n = window.getComputedStyle(t), s = (g) => (n[g] || "").split(", "), i = s(`${bn}Delay`), r = s(`${bn}Duration`), a = vo(i, r), l = s(`${Ns}Delay`), o = s(`${Ns}Duration`), u = vo(l, o), d = null, f = 0, m = 0;
  e === bn ? a > 0 && (d = bn, f = a, m = r.length) : e === Ns ? u > 0 && (d = Ns, f = u, m = o.length) : m = (d = (f = Math.max(a, u)) > 0 ? a > u ? bn : Ns : null) ? d === bn ? r.length : o.length : 0;
  let h = d === bn && /\b(?:transform|all)(?:,|$)/.test(s(`${bn}Property`).toString());
  return { type: d, timeout: f, propCount: m, hasTransform: h };
}
function vo(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => yo(n) + yo(t[s])));
}
function yo(t) {
  return t === "auto" ? 0 : 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function za(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
let bo = Symbol("_vod"), Mh = Symbol("_vsh"), Bh = Symbol(""), Lh = /(?:^|;)\s*display\s*:/, ko = /\s*!important$/;
function ji(t, e, n) {
  if (X(n)) n.forEach((s) => ji(t, e, s));
  else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
  else {
    let s = (function(i, r) {
      let a = ga[r];
      if (a) return a;
      let l = vt(r);
      if (l !== "filter" && l in i) return ga[r] = l;
      l = kr(l);
      for (let o = 0; o < wo.length; o++) {
        let u = wo[o] + l;
        if (u in i) return ga[r] = u;
      }
      return r;
    })(t, e);
    ko.test(n) ? t.setProperty(Dn(s), n.replace(ko, ""), "important") : t[s] = n;
  }
}
let wo = ["Webkit", "Moz", "ms"], ga = {}, Io = "http://www.w3.org/1999/xlink";
function So(t, e, n, s, i, r = If(e)) {
  s && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(Io, e.slice(6, e.length)) : t.setAttributeNS(Io, e, n) : n == null || r && !(n || n === "") ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : Bt(n) ? String(n) : n);
}
function To(t, e, n, s, i) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? Ac(n) : n);
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
function nn(t, e, n, s) {
  t.addEventListener(e, n, s);
}
let xo = Symbol("_vei"), Co = /(?:Once|Passive|Capture)$/, va = 0, Dh = Promise.resolve(), Eo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && 123 > t.charCodeAt(2), _h = (t, e, n, s, i, r) => {
  let a = i === "svg";
  if (e === "class") {
    var l;
    let o;
    l = s, (o = t[Ss]) && (l = (l ? [l, ...o] : [...o]).join(" ")), l == null ? t.removeAttribute("class") : a ? t.setAttribute("class", l) : t.className = l;
  } else e === "style" ? (function(o, u, d) {
    let f = o.style, m = Be(d), h = !1;
    if (d && !m) {
      if (u) if (Be(u)) for (let g of u.split(";")) {
        let b = g.slice(0, g.indexOf(":")).trim();
        d[b] == null && ji(f, b, "");
      }
      else for (let g in u) d[g] == null && ji(f, g, "");
      for (let g in d) g === "display" && (h = !0), ji(f, g, d[g]);
    } else if (m) {
      if (u !== d) {
        let g = f[Bh];
        g && (d += ";" + g), f.cssText = d, h = Lh.test(d);
      }
    } else u && o.removeAttribute("style");
    bo in o && (o[bo] = h ? f.display : "", o[Mh] && (f.display = "none"));
  })(t, n, s) : vr(e) ? ul(e) || (function(o, u, d, f, m = null) {
    let h = o[xo] || (o[xo] = {}), g = h[u];
    if (f && g) g.value = f;
    else {
      let [I, D] = (function(w) {
        let P;
        if (Co.test(w)) {
          let L;
          for (P = {}; L = w.match(Co); ) w = w.slice(0, w.length - L[0].length), P[L[0].toLowerCase()] = !0;
        }
        return [w[2] === ":" ? w.slice(3) : Dn(w.slice(2)), P];
      })(u);
      if (f) {
        var b, k;
        let w;
        nn(o, I, h[u] = (b = f, k = m, (w = (P) => {
          if (P._vts) {
            if (P._vts <= w.attached) return;
          } else P._vts = Date.now();
          Lt((function(L, H) {
            if (!X(H)) return H;
            {
              let K = L.stopImmediatePropagation;
              return L.stopImmediatePropagation = () => {
                K.call(L), L._stopped = !0;
              }, H.map((B) => ($) => !$._stopped && B && B($));
            }
          })(P, w.value), k, 5, [P]);
        }).value = b, w.attached = va || (Dh.then(() => va = 0), va = Date.now()), w), D);
      } else g && (o.removeEventListener(I, g, D), h[u] = void 0);
    }
  })(t, e, 0, s, r) : (e[0] === "." ? (e = e.slice(1), 0) : e[0] === "^" ? (e = e.slice(1), 1) : !(function(o, u, d, f) {
    if (f) return !!(u === "innerHTML" || u === "textContent" || u in o && Eo(u) && ae(d));
    if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "autocorrect" || u === "sandbox" && o.tagName === "IFRAME" || u === "form" || u === "list" && o.tagName === "INPUT" || u === "type" && o.tagName === "TEXTAREA") return !1;
    if (u === "width" || u === "height") {
      let m = o.tagName;
      if (m === "IMG" || m === "VIDEO" || m === "CANVAS" || m === "SOURCE") return !1;
    }
    return !(Eo(u) && Be(d)) && u in o;
  })(t, e, s, a)) ? t._isVueCE && (/[A-Z]/.test(e) || !Be(s)) ? To(t, vt(e), s, r, e) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), So(t, e, s, a)) : (To(t, e, s), t.tagName.includes("-") || e !== "value" && e !== "checked" && e !== "selected" || So(t, e, s, a, r, e !== "value"));
}, Bc = /* @__PURE__ */ new WeakMap(), Lc = /* @__PURE__ */ new WeakMap(), lr = Symbol("_moveCb"), Ao = Symbol("_enterCb"), Dc = (na = { name: "TransitionGroup", props: He({}, $c, { tag: String, moveClass: String }), setup(t, { slots: e }) {
  let n, s, i = Zt(), r = tc();
  return oc(() => {
    if (!n.length) return;
    let a = t.moveClass || `${t.name || "v"}-move`;
    if (!(function(o, u, d) {
      let f = o.cloneNode(), m = o[Ss];
      m && m.forEach((b) => {
        b.split(/\s+/).forEach((k) => k && f.classList.remove(k));
      }), d.split(/\s+/).forEach((b) => b && f.classList.add(b)), f.style.display = "none";
      let h = u.nodeType === 1 ? u : u.parentNode;
      h.appendChild(f);
      let { hasTransform: g } = Mc(f);
      return h.removeChild(f), g;
    })(n[0].el, i.vnode.el, a)) {
      n = [];
      return;
    }
    n.forEach(Vh), n.forEach(Nh);
    let l = n.filter(Rh);
    za(i.vnode.el), l.forEach((o) => {
      let u = o.el, d = u.style;
      Rt(u, a), d.transform = d.webkitTransform = d.transitionDuration = "";
      let f = u[lr] = (m) => {
        (!m || m.target === u) && (!m || m.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[lr] = null, In(u, a));
      };
      u.addEventListener("transitionend", f);
    }), n = [];
  }), () => {
    let a = me(t), l = Oc(a), o = a.tag || de;
    if (n = [], s) for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.el && d.el instanceof Element && (n.push(d), ts(d, ri(d, l, r, i)), Bc.set(d, { left: d.el.offsetLeft, top: d.el.offsetTop }));
    }
    s = e.default ? yl(e.default()) : [];
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.key != null && ts(d, ri(d, l, r, i));
    }
    return M(o, null, s);
  };
} }, delete na.props.mode, na);
function Vh(t) {
  let e = t.el;
  e[lr] && e[lr](), e[Ao] && e[Ao]();
}
function Nh(t) {
  Lc.set(t, { left: t.el.offsetLeft, top: t.el.offsetTop });
}
function Rh(t) {
  let e = Bc.get(t), n = Lc.get(t), s = e.left - n.left, i = e.top - n.top;
  if (s || i) {
    let r = t.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", t;
  }
}
let Bn = (t) => {
  let e = t.props["onUpdate:modelValue"] || !1;
  return X(e) ? (n) => Wi(e, n) : e;
};
function Ph(t) {
  t.target.composing = !0;
}
function Fo(t) {
  let e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
let Tt = Symbol("_assign");
function $o(t, e, n) {
  return e && (t = t.trim()), n && (t = wr(t)), t;
}
let or = { created(t, { modifiers: { lazy: e, trim: n, number: s } }, i) {
  t[Tt] = Bn(i);
  let r = s || i.props && i.props.type === "number";
  nn(t, e ? "change" : "input", (a) => {
    a.target.composing || t[Tt]($o(t.value, n, r));
  }), (n || r) && nn(t, "change", () => {
    t.value = $o(t.value, n, r);
  }), e || (nn(t, "compositionstart", Ph), nn(t, "compositionend", Fo), nn(t, "change", Fo));
}, mounted(t, { value: e }) {
  t.value = e ?? "";
}, beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, a) {
  if (t[Tt] = Bn(a), t.composing) return;
  let l = (r || t.type === "number") && !/^0\d/.test(t.value) ? wr(t.value) : t.value, o = e ?? "";
  if (l !== o) {
    if (document.activeElement === t && t.type !== "range" && (s && e === n || i && t.value.trim() === o)) return;
    t.value = o;
  }
} }, Hh = { deep: !0, created(t, e, n) {
  t[Tt] = Bn(n), nn(t, "change", () => {
    let s = t._modelValue, i = Ts(t), r = t.checked, a = t[Tt];
    if (X(s)) {
      let l = dl(s, i), o = l !== -1;
      if (r && !o) a(s.concat(i));
      else if (!r && o) {
        let u = [...s];
        u.splice(l, 1), a(u);
      }
    } else {
      let l;
      if (l = s, je.call(l) === "[object Set]") {
        let o = new Set(s);
        r ? o.add(i) : o.delete(i), a(o);
      } else a(_c(t, r));
    }
  });
}, mounted: Oo, beforeUpdate(t, e, n) {
  t[Tt] = Bn(n), Oo(t, e, n);
} };
function Oo(t, { value: e, oldValue: n }, s) {
  let i;
  if (t._modelValue = e, X(e)) i = dl(e, s.props.value) > -1;
  else {
    let r;
    if (r = e, je.call(r) === "[object Set]") i = e.has(s.props.value);
    else {
      if (e === n) return;
      i = es(e, _c(t, !0));
    }
  }
  t.checked !== i && (t.checked = i);
}
let Wh = { created(t, { value: e }, n) {
  t.checked = es(e, n.props.value), t[Tt] = Bn(n), nn(t, "change", () => {
    t[Tt](Ts(t));
  });
}, beforeUpdate(t, { value: e, oldValue: n }, s) {
  t[Tt] = Bn(s), e !== n && (t.checked = es(e, s.props.value));
} }, zh = { deep: !0, created(t, { value: e, modifiers: { number: n } }, s) {
  let i, r = (i = e, je.call(i) === "[object Set]");
  nn(t, "change", () => {
    let a = Array.prototype.filter.call(t.options, (l) => l.selected).map((l) => n ? wr(Ts(l)) : Ts(l));
    t[Tt](t.multiple ? r ? new Set(a) : a : a[0]), t._assigning = !0, Gn(() => {
      t._assigning = !1;
    });
  }), t[Tt] = Bn(s);
}, mounted(t, { value: e }) {
  Mo(t, e);
}, beforeUpdate(t, e, n) {
  t[Tt] = Bn(n);
}, updated(t, { value: e }) {
  t._assigning || Mo(t, e);
} };
function Mo(t, e) {
  let n, s = t.multiple, i = X(e);
  if (!s || i || (n = e, je.call(n) === "[object Set]")) {
    for (let r = 0, a = t.options.length; r < a; r++) {
      let l = t.options[r], o = Ts(l);
      if (s) if (i) {
        let u = typeof o;
        u === "string" || u === "number" ? l.selected = e.some((d) => String(d) === String(o)) : l.selected = dl(e, o) > -1;
      } else l.selected = e.has(o);
      else if (es(Ts(l), e)) {
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
function _c(t, e) {
  let n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
let Uh = { created(t, e, n) {
  Li(t, e, n, null, "created");
}, mounted(t, e, n) {
  Li(t, e, n, null, "mounted");
}, beforeUpdate(t, e, n, s) {
  Li(t, e, n, s, "beforeUpdate");
}, updated(t, e, n, s) {
  Li(t, e, n, s, "updated");
} };
function qh(t, e) {
  switch (t) {
    case "SELECT":
      return zh;
    case "TEXTAREA":
      return or;
    default:
      switch (e) {
        case "checkbox":
          return Hh;
        case "radio":
          return Wh;
        default:
          return or;
      }
  }
}
function Li(t, e, n, s, i) {
  let r = qh(t.tagName, n.props && n.props.type)[i];
  r && r(t, e, n, s);
}
let jh = ["ctrl", "shift", "alt", "meta"], Gh = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, e) => jh.some((n) => t[`${n}Key`] && !e.includes(n)) }, El = (t, e) => {
  let n = t._withMods || (t._withMods = {}), s = e.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let a = 0; a < e.length; a++) {
      let l = Gh[e[a]];
      if (l && l(i, e)) return;
    }
    return t(i, ...r);
  });
}, Zh = He({ patchProp: _h }, $h), Yh = (...t) => {
  let e = (ql || (ql = yh(Zh))).createApp(...t), { mount: n } = e;
  return e.mount = (s) => {
    let i = Jh(s);
    if (!i) return;
    let r = e._component;
    ae(r) || r.render || r.template || (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    let a = n(i, !1, Kh(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, e;
};
function Kh(t) {
  return t instanceof SVGElement ? "svg" : typeof MathMLElement == "function" && t instanceof MathMLElement ? "mathml" : void 0;
}
function Jh(t) {
  return Be(t) ? document.querySelector(t) : t;
}
function Vc(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Vc(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function xt() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Vc(t)) && (s && (s += " "), s += e);
  return s;
}
const Nc = Symbol(), Rc = Symbol(), Qh = Symbol();
function Ua(t) {
  return t !== null && typeof t == "object" && !("value" in t);
}
function Xs(t) {
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
let Pc = {};
function Xh(t) {
  Pc = Object.keys(t).reduce((e, n) => {
    const { icon: s, iconName: i } = t[n];
    return e[i] = s, Array.isArray(s[2]) && s[2].forEach((r) => e[r] = s), e;
  }, {});
}
const em = 6e3, Me = mn({
  dialogCount: 0,
  alerts: [],
  confirms: [],
  prompts: [],
  snackbars: [],
  tooltips: []
});
let Lr = 0, tm = 0;
function Hc(t) {
  const e = ++Lr;
  return Me.alerts.push({
    id: e,
    ...t
  }), e;
}
function Wc(t) {
  const e = ++Lr;
  return Me.confirms.push({
    id: e,
    ...t
  }), e;
}
function zc(t) {
  const e = ++Lr;
  return Me.prompts.push({
    id: e,
    ...t
  }), e;
}
function Al(t) {
  const e = ++Lr;
  return Me.snackbars.unshift({
    id: e,
    ...t
  }), e;
}
function nm(t) {
  const e = ++tm;
  return Me.tooltips.push({
    id: e,
    ...t
  }), e;
}
function Uc() {
  return [
    ++Me.dialogCount,
    () => --Me.dialogCount
  ];
}
function qc(t) {
  const e = Me.alerts.findIndex((n) => n.id === t);
  Me.alerts.splice(e, 1);
}
function qa(t) {
  const e = Me.confirms.findIndex((n) => n.id === t);
  Me.confirms.splice(e, 1);
}
function ja(t) {
  const e = Me.prompts.findIndex((n) => n.id === t);
  Me.prompts.splice(e, 1);
}
function ur(t) {
  const e = Me.snackbars.findIndex((n) => n.id === t);
  Me.snackbars.splice(e, 1);
}
function sm(t) {
  const e = Me.tooltips.findIndex((n) => n.id === t);
  Me.tooltips.splice(e, 1);
}
function jc(t, e) {
  const n = Me.snackbars.findIndex((s) => s.id === t);
  Object.assign(Me.snackbars[n], e);
}
function im(t, e) {
  const n = Me.tooltips.findIndex((s) => s.id === t);
  Object.assign(Me.tooltips[n], e);
}
async function rm(t) {
  return new Promise((e) => {
    const n = Hc({
      ...t,
      onClose() {
        e(), qc(n);
      }
    });
  });
}
async function am(t) {
  return new Promise((e) => {
    const n = Wc({
      ...t,
      onCancel() {
        e(!1), qa(n);
      },
      onConfirm() {
        e(!0), qa(n);
      }
    });
  });
}
async function lm(t) {
  return new Promise((e) => {
    const n = zc({
      ...t,
      onCancel() {
        e(!1), ja(n);
      },
      onConfirm(s) {
        e(s), ja(n);
      }
    });
  });
}
async function Lo({ duration: t, ...e }) {
  const n = Al(e);
  await new Promise((s) => setTimeout(() => requestAnimationFrame(s), t ?? em)), ur(n);
}
function gi() {
  const t = Ae(() => Me.dialogCount > 0), e = Ae(() => Me.tooltips[Me.tooltips.length - 1] || null);
  return {
    ...Me,
    inertMain: t,
    tooltip: e,
    addAlert: Hc,
    addConfirm: Wc,
    addPrompt: zc,
    addSnackbar: Al,
    addTooltip: nm,
    registerDialog: Uc,
    removeAlert: qc,
    removeConfirm: qa,
    removePrompt: ja,
    removeSnackbar: ur,
    removeTooltip: sm,
    showAlert: rm,
    showConfirm: am,
    showPrompt: lm,
    showSnackbar: Lo,
    updateSnackbar: jc,
    updateTooltip: im,
    showSnackbarSync: om(Lo)
  };
}
function om(t) {
  return (...e) => t(...e);
}
function ks(t) {
  return typeof t == "string" || t instanceof String;
}
function Do(t) {
  var e;
  return typeof t == "object" && t != null && (t == null || (e = t.constructor) == null ? void 0 : e.name) === "Object";
}
function Gc(t, e) {
  return Array.isArray(e) ? Gc(t, (n, s) => e.includes(s)) : Object.entries(t).reduce((n, s) => {
    let [i, r] = s;
    return e(r, i) && (n[i] = r), n;
  }, {});
}
const ie = {
  NONE: "NONE",
  LEFT: "LEFT",
  FORCE_LEFT: "FORCE_LEFT",
  RIGHT: "RIGHT",
  FORCE_RIGHT: "FORCE_RIGHT"
};
function um(t) {
  switch (t) {
    case ie.LEFT:
      return ie.FORCE_LEFT;
    case ie.RIGHT:
      return ie.FORCE_RIGHT;
    default:
      return t;
  }
}
function Ga(t, e) {
  if (e === t) return !0;
  const n = Array.isArray(e), s = Array.isArray(t);
  let i;
  if (n && s) {
    if (e.length != t.length) return !1;
    for (i = 0; i < e.length; i++) if (!Ga(e[i], t[i])) return !1;
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
    for (i = 0; i < u.length; i++) if (!Ga(t[u[i]], e[u[i]])) return !1;
    return !0;
  } else if (e && t && typeof e == "function" && typeof t == "function")
    return e.toString() === t.toString();
  return !1;
}
class cm {
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
    return !this.removedCount || this.insertedCount ? ie.NONE : (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? ie.RIGHT : ie.LEFT;
  }
}
function pe(t, e) {
  return new pe.InputMask(t, e);
}
function Zc(t) {
  if (t == null) throw new Error("mask property should be defined");
  return t instanceof RegExp ? pe.MaskedRegExp : ks(t) ? pe.MaskedPattern : t === Date ? pe.MaskedDate : t === Number ? pe.MaskedNumber : Array.isArray(t) || t === Array ? pe.MaskedDynamic : pe.Masked && t.prototype instanceof pe.Masked ? t : pe.Masked && t instanceof pe.Masked ? t.constructor : t instanceof Function ? pe.MaskedFunction : (console.warn("Mask not found for mask", t), pe.Masked);
}
function Za(t) {
  if (!t) throw new Error("Options in not defined");
  if (pe.Masked) {
    if (t.prototype instanceof pe.Masked) return {
      mask: t
    };
    const {
      mask: e = void 0,
      ...n
    } = t instanceof pe.Masked ? {
      mask: t
    } : Do(t) && t.mask instanceof pe.Masked ? t : {};
    if (e) {
      const s = e.mask;
      return {
        ...Gc(e, (i, r) => !r.startsWith("_")),
        mask: e.constructor,
        _mask: s,
        ...n
      };
    }
  }
  return Do(t) ? {
    ...t
  } : {
    mask: t
  };
}
function ui(t) {
  if (pe.Masked && t instanceof pe.Masked) return t;
  const e = Za(t), n = Zc(e.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
  return e.mask === n && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new n(e);
}
pe.createMask = ui;
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
pe.MaskElement = Fl;
const _o = 90, dm = 89;
class Dr extends Fl {
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
    if (this._handlers.redo && (e.keyCode === _o && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === dm && e.ctrlKey))
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
pe.HTMLMaskElement = Dr;
class fm extends Dr {
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
pe.HTMLMaskElement = Dr;
class Yc extends Dr {
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
pe.HTMLContenteditableMaskElement = Yc;
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
class hm {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(e, n) {
    this.el = e instanceof Fl ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Yc(e) : new fm(e), this.masked = ui(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new _r(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    if (!(e instanceof pe.Masked) && this.masked.constructor === Zc(e)) {
      this.masked.updateOptions({
        mask: e
      });
      return;
    }
    const n = e instanceof pe.Masked ? e : ui({
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
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, ie.LEFT));
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
    const n = new cm({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    }), s = this.masked.rawInputValue, i = this.masked.splice(n.startChangePos, n.removed.length, n.inserted, n.removeDirection, {
      input: !0,
      raw: !0
    }).offset, r = s === this.masked.rawInputValue ? n.removeDirection : ie.NONE;
    let a = this.masked.nearestInputPos(n.startChangePos + i, r);
    r !== ie.NONE && (a = this.masked.nearestInputPos(a, ie.NONE)), this.updateControl(a), delete this._inputEvent;
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
pe.InputMask = hm;
class Te {
  /** Inserted symbols */
  /** Additional offset if any changes occurred before tail */
  /** Raw inserted is used by dynamic mask */
  /** Can skip chars */
  static normalize(e) {
    return Array.isArray(e) ? e : [e, new Te()];
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
pe.ChangeDetails = Te;
class rn {
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
class jt {
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
      ...jt.DEFAULTS,
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), new rn(this.extractInput(e, n), e);
  }
  /** Appends tail */
  appendTail(e) {
    return ks(e) && (e = new rn(String(e))), e.appendTo(this);
  }
  /** Appends char */
  _appendCharRaw(e, n) {
    return e ? (this._value += e, new Te({
      inserted: e,
      rawInserted: e
    })) : new Te();
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
      l || (r = new Te(), this.state = i, s && a && (s.state = a));
    }
    return r;
  }
  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new Te();
  }
  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new Te();
  }
  /** Appends symbols considering flags */
  append(e, n, s) {
    if (!ks(e)) throw new Error("value should be string");
    const i = ks(s) ? new rn(String(s)) : s;
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.displayValue.length), this._value = this.displayValue.slice(0, e) + this.displayValue.slice(n), new Te();
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
    return n === void 0 && (n = {}), Te.normalize(this.prepare ? this.prepare(e, this, n) : e);
  }
  /** Prepares each char before mask processing */
  doPrepareChar(e, n) {
    return n === void 0 && (n = {}), Te.normalize(this.prepareChar ? this.prepareChar(e, this, n) : e);
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
    s === void 0 && (s = ""), i === void 0 && (i = ie.NONE), r === void 0 && (r = {
      input: !0
    });
    const a = e + n, l = this.extractTail(a), o = this.eager === !0 || this.eager === "remove";
    let u;
    o && (i = um(i), u = this.extractInput(0, a, {
      raw: !0
    }));
    let d = e;
    const f = new Te();
    if (i !== ie.NONE && (d = this.nearestInputPos(e, n > 1 && e !== 0 && !o ? ie.NONE : i), f.tailShift = d - e), f.aggregate(this.remove(d)), o && i !== ie.NONE && u === this.rawInputValue)
      if (i === ie.FORCE_LEFT) {
        let m;
        for (; u === this.rawInputValue && (m = this.displayValue.length); )
          f.aggregate(new Te({
            tailShift: -1
          })).aggregate(this.remove(m - 1));
      } else i === ie.FORCE_RIGHT && l.unshift();
    return f.aggregate(this.append(s, r, l));
  }
  maskEquals(e) {
    return this.mask === e;
  }
  optionsIsChanged(e) {
    return !Ga(this, e);
  }
  typedValueEquals(e) {
    const n = this.typedValue;
    return e === n || jt.EMPTY_VALUES.includes(e) && jt.EMPTY_VALUES.includes(n) || (this.format ? this.format(e, this) === this.format(this.typedValue, this) : !1);
  }
  pad(e) {
    return new Te();
  }
}
jt.DEFAULTS = {
  skipInvalid: !0
};
jt.EMPTY_VALUES = [void 0, null, ""];
pe.Masked = jt;
class Zn {
  /** */
  constructor(e, n) {
    e === void 0 && (e = []), n === void 0 && (n = 0), this.chunks = e, this.from = n;
  }
  toString() {
    return this.chunks.map(String).join("");
  }
  extend(e) {
    if (!String(e)) return;
    e = ks(e) ? new rn(String(e)) : e;
    const n = this.chunks[this.chunks.length - 1], s = n && // if stops are same or tail has no stop
    (n.stop === e.stop || e.stop == null) && // if tail chunk goes just after last chunk
    e.from === n.from + n.toString().length;
    if (e instanceof rn)
      s ? n.extend(e.toString()) : this.chunks.push(e);
    else if (e instanceof Zn) {
      if (e.stop == null) {
        let i;
        for (; e.chunks.length && e.chunks[0].stop == null; )
          i = e.chunks.shift(), i.from += e.from, this.extend(i);
      }
      e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
    }
  }
  appendTo(e) {
    if (!(e instanceof pe.MaskedPattern))
      return new rn(this.toString()).appendTo(e);
    const n = new Te();
    for (let s = 0; s < this.chunks.length; ++s) {
      const i = this.chunks[s], r = e._mapPosToBlock(e.displayValue.length), a = i.stop;
      let l;
      if (a != null && // if block not found or stop is behind lastBlock
      (!r || r.index <= a) && ((i instanceof Zn || // for continuous block also check if stop is exist
      e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), l = i instanceof Zn && e._blocks[a]), l) {
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
      const r = "chunks" in i ? new Zn() : new rn();
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
class mm {
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
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, ie.FORCE_LEFT), this.offset !== 0))
        return !0;
    });
  }
  pushLeftBeforeInput() {
    return this._pushLeft(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, ie.LEFT), !0;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, ie.LEFT), !0;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || !this.block.value) && (this.offset = this.block.nearestInputPos(this.offset, ie.FORCE_RIGHT), this.offset !== this.block.value.length))
        return !0;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (!this.block.isFixed)
        return this.offset = this.block.nearestInputPos(this.offset, ie.NONE), !0;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (!(this.block.isFixed || this.block.isOptional && !this.block.value))
        return this.offset = this.block.nearestInputPos(this.offset, ie.NONE), !0;
    });
  }
}
class Kc {
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
    return e === void 0 && (e = 0), n === void 0 && (n = this._value.length), this._value = this._value.slice(0, e) + this._value.slice(n), this._value || (this._isRawInput = !1), new Te();
  }
  nearestInputPos(e, n) {
    n === void 0 && (n = ie.NONE);
    const s = 0, i = this._value.length;
    switch (n) {
      case ie.LEFT:
      case ie.FORCE_LEFT:
        return s;
      case ie.NONE:
      case ie.RIGHT:
      case ie.FORCE_RIGHT:
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
    if (n === void 0 && (n = {}), this.isFilled) return new Te();
    const s = this.eager === !0 || this.eager === "append", r = this.char === e && (this.isUnmasking || n.input || n.raw) && (!n.raw || !s) && !n.tail, a = new Te({
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
    const e = new Te();
    return this.isFilled || (this._value = e.inserted = this.char), e;
  }
  extractTail() {
    return new rn("");
  }
  appendTail(e) {
    return ks(e) && (e = new rn(String(e))), e.appendTo(this);
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
class cr {
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
    this.masked = ui(o), Object.assign(this, {
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
    return e === void 0 && (e = 0), n === void 0 && (n = this.value.length), e === 0 && n >= 1 ? (this.isFilled = !1, this.masked.remove(e, n)) : new Te();
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
    if (n === void 0 && (n = {}), this.isFilled) return new Te();
    const s = this.masked.state;
    let i = this.masked._appendChar(e, this.currentMaskFlags(n));
    return i.inserted && this.doValidate(n) === !1 && (i = new Te(), this.masked.state = s), !i.inserted && !this.isOptional && !this.lazy && !n.input && (i.inserted = this.placeholderChar), i.skip = !i.inserted && !this.isOptional, this.isFilled = !!i.inserted, i;
  }
  append(e, n, s) {
    return this.masked.append(e, this.currentMaskFlags(n), s);
  }
  _appendPlaceholder() {
    return this.isFilled || this.isOptional ? new Te() : (this.isFilled = !0, new Te({
      inserted: this.placeholderChar
    }));
  }
  _appendEager() {
    return new Te();
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
    n === void 0 && (n = ie.NONE);
    const s = 0, i = this.value.length, r = Math.min(Math.max(e, s), i);
    switch (n) {
      case ie.LEFT:
      case ie.FORCE_LEFT:
        return this.isComplete ? r : s;
      case ie.RIGHT:
      case ie.FORCE_RIGHT:
        return this.isComplete ? r : i;
      case ie.NONE:
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
    return new Te();
  }
}
cr.DEFAULT_DEFINITIONS = {
  0: /\d/,
  a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  "*": /./
};
class pm extends jt {
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
pe.MaskedRegExp = pm;
class Gt extends jt {
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
      ...Gt.DEFAULTS,
      ...e,
      definitions: Object.assign({}, cr.DEFAULT_DEFINITIONS, e?.definitions)
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
        const u = n.slice(r), d = Object.keys(this.blocks).filter((m) => u.indexOf(m) === 0);
        d.sort((m, h) => h.length - m.length);
        const f = d[0];
        if (f) {
          const {
            expose: m,
            repeat: h,
            ...g
          } = Za(this.blocks[f]), b = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...g,
            repeat: h,
            parent: this
          }, k = h != null ? new pe.RepeatBlock(
            b
            /* TODO */
          ) : ui(b);
          k && (this._blocks.push(k), m && (this.exposeBlock = k), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), r += f.length - 1;
          continue;
        }
      }
      let a = n[r], l = a in e;
      if (a === Gt.STOP_CHAR) {
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
      if (a === Gt.ESCAPE_CHAR) {
        if (++r, a = n[r], !a) break;
        l = !1;
      }
      const o = l ? new cr({
        isOptional: i,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...Za(e[a]),
        parent: this
      }) : new Kc({
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
    const n = new Te();
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
    const s = this._mapPosToBlock(this.displayValue.length), i = new Te();
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
    const s = new Zn();
    return e === n || this._forEachBlocksInRange(e, n, (i, r, a, l) => {
      const o = i.extractTail(a, l);
      o.stop = this._findStopBefore(r), o.from = this._blockStartPos(r), o instanceof Zn && (o.blockIndex = r), s.extend(o);
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
    const n = new Te();
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
    if (n === void 0 && (n = ie.NONE), !this._blocks.length) return 0;
    const s = new mm(this, e);
    if (n === ie.NONE)
      return s.pushRightBeforeInput() || (s.popState(), s.pushLeftBeforeInput()) ? s.pos : this.displayValue.length;
    if (n === ie.LEFT || n === ie.FORCE_LEFT) {
      if (n === ie.LEFT) {
        if (s.pushRightBeforeFilled(), s.ok && s.pos === e) return e;
        s.popState();
      }
      if (s.pushLeftBeforeInput(), s.pushLeftBeforeRequired(), s.pushLeftBeforeFilled(), n === ie.LEFT) {
        if (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.ok && s.pos <= e || (s.popState(), s.ok && s.pos <= e)) return s.pos;
        s.popState();
      }
      return s.ok ? s.pos : n === ie.FORCE_LEFT ? 0 : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : 0);
    }
    return n === ie.RIGHT || n === ie.FORCE_RIGHT ? (s.pushRightBeforeInput(), s.pushRightBeforeRequired(), s.pushRightBeforeFilled() ? s.pos : n === ie.FORCE_RIGHT ? this.displayValue.length : (s.popState(), s.ok || (s.popState(), s.ok) ? s.pos : this.nearestInputPos(e, ie.LEFT))) : e;
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
    const n = new Te();
    return this._forEachBlocksInRange(0, this.displayValue.length, (s) => n.aggregate(s.pad(e))), n;
  }
}
Gt.DEFAULTS = {
  ...jt.DEFAULTS,
  lazy: !0,
  placeholderChar: "_"
};
Gt.STOP_CHAR = "`";
Gt.ESCAPE_CHAR = "\\";
Gt.InputDefinition = cr;
Gt.FixedDefinition = Kc;
pe.MaskedPattern = Gt;
function gm(t) {
  return pe(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aaaaaa##[000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function vm(t) {
  return pe(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa00 #### 0000 0000[ 0000 0000 0000 0000]",
    prepareChar: (e) => e.toUpperCase()
  });
}
function ym(t) {
  return pe(t, {
    definitions: {
      "#": /[A-Z0-9]/
    },
    mask: "aa########[#####]",
    prepareChar: (e) => e.toUpperCase()
  });
}
var bm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  bic: gm,
  iban: vm,
  vat: ym
});
function km() {
  return an(Nc, ee(!1));
}
function As(t) {
  const e = km();
  return Ae(() => c(t) || c(e));
}
function $l() {
  return an(Rc, {
    id: bl()
  });
}
let Jc;
const Vr = (t) => Jc = t, Qc = (
  /* istanbul ignore next */
  Symbol()
);
function Ya(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var ei;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(ei || (ei = {}));
function wm() {
  const t = Fu(!0), e = t.run(() => ee({}));
  let n = [], s = [];
  const i = pl({
    install(r) {
      Vr(i), i._a = r, r.provide(Qc, i), r.config.globalProperties.$pinia = i, s.forEach((a) => n.push(a)), s = [];
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
const Xc = () => {
};
function Vo(t, e, n, s = Xc) {
  t.add(e);
  const i = () => {
    t.delete(e) && s();
  };
  return !n && $u() && Ou(i), i;
}
function os(t, ...e) {
  t.forEach((n) => {
    n(...e);
  });
}
const Im = (t) => t(), No = Symbol(), ya = Symbol();
function Ka(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((n, s) => t.set(s, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], i = t[n];
    Ya(i) && Ya(s) && t.hasOwnProperty(n) && !De(s) && !qt(s) ? t[n] = Ka(i, s) : t[n] = s;
  }
  return t;
}
const Sm = (
  /* istanbul ignore next */
  Symbol()
);
function Tm(t) {
  return !Ya(t) || !Object.prototype.hasOwnProperty.call(t, Sm);
}
const { assign: Sn } = Object;
function xm(t) {
  return !!(De(t) && t.effect);
}
function Cm(t, e, n, s) {
  const { state: i, actions: r, getters: a } = e, l = n.state.value[t];
  let o;
  function u() {
    l || (n.state.value[t] = i ? i() : {});
    const d = Hf(n.state.value[t]);
    return Sn(d, r, Object.keys(a || {}).reduce((f, m) => (f[m] = pl(Ae(() => {
      Vr(n);
      const h = n._s.get(t);
      return a[m].call(h, h);
    })), f), {}));
  }
  return o = ed(t, u, e, n, s, !0), o;
}
function ed(t, e, n = {}, s, i, r) {
  let a;
  const l = Sn({ actions: {} }, n), o = { deep: !0 };
  let u, d, f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h;
  const g = s.state.value[t];
  !r && !g && (s.state.value[t] = {}), ee({});
  let b;
  function k(B) {
    let $;
    u = d = !1, typeof B == "function" ? (B(s.state.value[t]), $ = {
      type: ei.patchFunction,
      storeId: t,
      events: h
    }) : (Ka(s.state.value[t], B), $ = {
      type: ei.patchObject,
      payload: B,
      storeId: t,
      events: h
    });
    const Y = b = Symbol();
    Gn().then(() => {
      b === Y && (u = !0);
    }), d = !0, os(f, $, s.state.value[t]);
  }
  const I = r ? function() {
    const { state: $ } = n, Y = $ ? $() : {};
    this.$patch((Q) => {
      Sn(Q, Y);
    });
  } : (
    /* istanbul ignore next */
    Xc
  );
  function D() {
    a.stop(), f.clear(), m.clear(), s._s.delete(t);
  }
  const w = (B, $ = "") => {
    if (No in B)
      return B[ya] = $, B;
    const Y = function() {
      Vr(s);
      const Q = Array.from(arguments), R = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set();
      function fe(ye) {
        R.add(ye);
      }
      function oe(ye) {
        te.add(ye);
      }
      os(m, {
        args: Q,
        name: Y[ya],
        store: L,
        after: fe,
        onError: oe
      });
      let Oe;
      try {
        Oe = B.apply(this && this.$id === t ? this : L, Q);
      } catch (ye) {
        throw os(te, ye), ye;
      }
      return Oe instanceof Promise ? Oe.then((ye) => (os(R, ye), ye)).catch((ye) => (os(te, ye), Promise.reject(ye))) : (os(R, Oe), Oe);
    };
    return Y[No] = !0, Y[ya] = $, Y;
  }, P = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Vo.bind(null, m),
    $patch: k,
    $reset: I,
    $subscribe(B, $ = {}) {
      const Y = Vo(f, B, $.detached, () => Q()), Q = a.run(() => Le(() => s.state.value[t], (R) => {
        ($.flush === "sync" ? d : u) && B({
          storeId: t,
          type: ei.direct,
          events: h
        }, R);
      }, Sn({}, o, $)));
      return Y;
    },
    $dispose: D
  }, L = mn(P);
  s._s.set(t, L);
  const K = (s._a && s._a.runWithContext || Im)(() => s._e.run(() => (a = Fu()).run(() => e({ action: w }))));
  for (const B in K) {
    const $ = K[B];
    if (De($) && !xm($) || qt($))
      r || (g && Tm($) && (De($) ? $.value = g[B] : Ka($, g[B])), s.state.value[t][B] = $);
    else if (typeof $ == "function") {
      const Y = w($, B);
      K[B] = Y, l.actions[B] = $;
    }
  }
  return Sn(L, K), Sn(me(L), K), Object.defineProperty(L, "$state", {
    get: () => s.state.value[t],
    set: (B) => {
      k(($) => {
        Sn($, B);
      });
    }
  }), s._p.forEach((B) => {
    Sn(L, a.run(() => B({
      store: L,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), g && r && n.hydrate && n.hydrate(L.$state, g), u = !0, d = !0, L;
}
// @__NO_SIDE_EFFECTS__
function Em(t, e, n) {
  let s;
  const i = typeof e == "function";
  s = i ? n : e;
  function r(a, l) {
    const o = ah();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (o ? an(Qc, null) : null), a && Vr(a), a = Jc, a._s.has(t) || (i ? ed(t, e, s, a) : Cm(t, s, a)), a._s.get(t);
  }
  return r.$id = t, r;
}
function Am(t) {
  const e = me(t), n = {};
  for (const s in e) {
    const i = e[s];
    i.effect ? n[s] = // ...
    Ae({
      get: () => t[s],
      set(r) {
        t[s] = r;
      }
    }) : (De(i) || qt(i)) && (n[s] = // ---
    cn(t, s));
  }
  return n;
}
class is extends Error {
}
class Fm extends is {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class $m extends is {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Om extends is {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class ms extends is {
}
class td extends is {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class Xe extends is {
}
class kn extends is {
  constructor() {
    super("Zone is an abstract class");
  }
}
const j = "numeric", Dt = "short", gt = "long", dr = {
  year: j,
  month: j,
  day: j
}, nd = {
  year: j,
  month: Dt,
  day: j
}, Mm = {
  year: j,
  month: Dt,
  day: j,
  weekday: Dt
}, sd = {
  year: j,
  month: gt,
  day: j
}, id = {
  year: j,
  month: gt,
  day: j,
  weekday: gt
}, rd = {
  hour: j,
  minute: j
}, ad = {
  hour: j,
  minute: j,
  second: j
}, ld = {
  hour: j,
  minute: j,
  second: j,
  timeZoneName: Dt
}, od = {
  hour: j,
  minute: j,
  second: j,
  timeZoneName: gt
}, ud = {
  hour: j,
  minute: j,
  hourCycle: "h23"
}, cd = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23"
}, dd = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23",
  timeZoneName: Dt
}, fd = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23",
  timeZoneName: gt
}, hd = {
  year: j,
  month: j,
  day: j,
  hour: j,
  minute: j
}, md = {
  year: j,
  month: j,
  day: j,
  hour: j,
  minute: j,
  second: j
}, pd = {
  year: j,
  month: Dt,
  day: j,
  hour: j,
  minute: j
}, gd = {
  year: j,
  month: Dt,
  day: j,
  hour: j,
  minute: j,
  second: j
}, Bm = {
  year: j,
  month: Dt,
  day: j,
  weekday: Dt,
  hour: j,
  minute: j
}, vd = {
  year: j,
  month: gt,
  day: j,
  hour: j,
  minute: j,
  timeZoneName: Dt
}, yd = {
  year: j,
  month: gt,
  day: j,
  hour: j,
  minute: j,
  second: j,
  timeZoneName: Dt
}, bd = {
  year: j,
  month: gt,
  day: j,
  weekday: gt,
  hour: j,
  minute: j,
  timeZoneName: gt
}, kd = {
  year: j,
  month: gt,
  day: j,
  weekday: gt,
  hour: j,
  minute: j,
  second: j,
  timeZoneName: gt
};
class vi {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new kn();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new kn();
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
    throw new kn();
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
    throw new kn();
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
    throw new kn();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new kn();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new kn();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new kn();
  }
}
let ba = null;
class Nr extends vi {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return ba === null && (ba = new Nr()), ba;
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
function Lm(t) {
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
const Dm = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function _m(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, l, o, u, d] = s;
  return [a, i, r, l, o, u, d];
}
function Vm(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], l = Dm[r];
    r === "era" ? s[l] = a : se(l) || (s[l] = parseInt(a, 10));
  }
  return s;
}
const ka = /* @__PURE__ */ new Map();
class hn extends vi {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = ka.get(e);
    return n === void 0 && ka.set(e, n = new hn(e)), n;
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
    super(), this.zoneName = e, this.valid = hn.isValidZone(e);
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
    const s = Lm(this.name);
    let [i, r, a, l, o, u, d] = s.formatToParts ? Vm(s, n) : _m(s, n);
    l === "BC" && (i = -Math.abs(i) + 1);
    const m = Pr({
      year: i,
      month: r,
      day: a,
      hour: o === 24 ? 0 : o,
      minute: u,
      second: d,
      millisecond: 0
    });
    let h = +n;
    const g = h % 1e3;
    return h -= g >= 0 ? g : 1e3 + g, (m - h) / (60 * 1e3);
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
function Nm(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Ro[n];
  return s || (s = new Intl.ListFormat(t, e), Ro[n] = s), s;
}
const Qa = /* @__PURE__ */ new Map();
function Xa(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Qa.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), Qa.set(n, s)), s;
}
const el = /* @__PURE__ */ new Map();
function Rm(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = el.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), el.set(n, s)), s;
}
const tl = /* @__PURE__ */ new Map();
function Pm(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = tl.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), tl.set(i, r)), r;
}
let zs = null;
function Hm() {
  return zs || (zs = new Intl.DateTimeFormat().resolvedOptions().locale, zs);
}
const nl = /* @__PURE__ */ new Map();
function wd(t) {
  let e = nl.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), nl.set(t, e)), e;
}
const sl = /* @__PURE__ */ new Map();
function Wm(t) {
  let e = sl.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...Id, ...e }), sl.set(t, e);
  }
  return e;
}
function zm(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = Xa(t).resolvedOptions(), i = t;
    } catch {
      const o = t.substring(0, n);
      s = Xa(o).resolvedOptions(), i = o;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function Um(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function qm(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = ne.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function jm(t) {
  const e = [];
  for (let n = 1; n <= 7; n++) {
    const s = ne.utc(2016, 11, 13 + n);
    e.push(t(s));
  }
  return e;
}
function Di(t, e, n, s) {
  const i = t.listingMode();
  return i === "error" ? null : i === "en" ? n(e) : s(e);
}
function Gm(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || wd(t.locale).numberingSystem === "latn";
}
class Zm {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const l = { useGrouping: !1, ...s };
      s.padTo > 0 && (l.minimumIntegerDigits = s.padTo), this.inf = Rm(e, l);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Dl(e, 3);
      return We(n, this.padTo);
    }
  }
}
class Ym {
  constructor(e, n, s) {
    this.opts = s, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), l = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && hn.create(l).valid ? (i = l, this.dt = e) : (i = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, i = e.zone.name) : (i = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const r = { ...this.opts };
    r.timeZone = r.timeZone || i, this.dtf = Xa(n, r);
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
class Km {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && Fd() && (this.rtf = Pm(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : yp(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const Id = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class xe {
  static fromOpts(e) {
    return xe.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, s, i, r = !1) {
    const a = e || Ve.defaultLocale, l = a || (r ? "en-US" : Hm()), o = n || Ve.defaultNumberingSystem, u = s || Ve.defaultOutputCalendar, d = rl(i) || Ve.defaultWeekSettings;
    return new xe(l, o, u, d, a);
  }
  static resetCache() {
    zs = null, Qa.clear(), el.clear(), tl.clear(), nl.clear(), sl.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return xe.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, l, o] = zm(e);
    this.locale = a, this.numberingSystem = n || l || null, this.outputCalendar = s || o || null, this.weekSettings = i, this.intl = Um(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Gm(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : xe.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      rl(e.weekSettings) || this.weekSettings,
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
    return Di(this, e, Ld, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (l) => this.dtFormatter(l, i).format() : (l) => this.extract(l, i, "month");
        this.monthsCache[r][e] = qm(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return Di(this, e, Vd, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = jm(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Di(
      this,
      void 0,
      () => Nd,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [ne.utc(2016, 11, 13, 9), ne.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return Di(this, e, Rd, () => {
      const n = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [ne.utc(-40, 1, 1), ne.utc(2017, 1, 1)].map(
        (s) => this.extract(s, n, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, n, s) {
    const i = this.dtFormatter(e, n), r = i.formatToParts(), a = r.find((l) => l.type.toLowerCase() === s);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new Zm(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new Ym(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new Km(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Nm(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || wd(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : $d() ? Wm(this.locale) : Id;
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
class ot extends vi {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return wa === null && (wa = new ot(0)), wa;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? ot.utcInstance : new ot(e);
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
        return new ot(Hr(n[1], n[2]));
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
class Jm extends vi {
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
function An(t, e) {
  if (se(t) || t === null)
    return e;
  if (t instanceof vi)
    return t;
  if (sp(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? Nr.instance : n === "utc" || n === "gmt" ? ot.utcInstance : ot.parseSpecifier(n) || hn.create(t);
  } else return $n(t) ? ot.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Jm(t);
}
const Ol = {
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
}, Po = {
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
}, Qm = Ol.hanidec.replace(/[\[|\]]/g, "").split("");
function Xm(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search(Ol.hanidec) !== -1)
        e += Qm.indexOf(t[n]);
      else
        for (const i in Po) {
          const [r, a] = Po[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const il = /* @__PURE__ */ new Map();
function ep() {
  il.clear();
}
function Ct({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = il.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), il.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${Ol[n]}${e}`), s.set(e, i)), i;
}
let Ho = () => Date.now(), Wo = "system", zo = null, Uo = null, qo = null, jo = 60, Go, Zo = null;
class Ve {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Ho;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Ho = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Wo = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return An(Wo, Nr.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return zo;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    zo = e;
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
    Zo = rl(e);
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
    xe.resetCache(), hn.resetCache(), ne.resetCache(), ep();
  }
}
class Ft {
  constructor(e, n) {
    this.reason = e, this.explanation = n;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Sd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Td = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function It(t, e) {
  return new Ft(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`
  );
}
function Ml(t, e, n) {
  const s = new Date(Date.UTC(t, e - 1, n));
  t < 100 && t >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
  const i = s.getUTCDay();
  return i === 0 ? 7 : i;
}
function xd(t, e, n) {
  return n + (yi(t) ? Td : Sd)[e - 1];
}
function Cd(t, e) {
  const n = yi(t) ? Td : Sd, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function Bl(t, e) {
  return (t - e + 7) % 7 + 1;
}
function fr(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = xd(s, i, r), l = Bl(Ml(s, i, r), n);
  let o = Math.floor((a - l + 14 - e) / 7), u;
  return o < 1 ? (u = s - 1, o = ci(u, e, n)) : o > ci(s, e, n) ? (u = s + 1, o = 1) : u = s, { weekYear: u, weekNumber: o, weekday: l, ...Wr(t) };
}
function Yo(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = Bl(Ml(s, 1, e), n), l = ws(s);
  let o = i * 7 + r - a - 7 + e, u;
  o < 1 ? (u = s - 1, o += ws(u)) : o > l ? (u = s + 1, o -= ws(s)) : u = s;
  const { month: d, day: f } = Cd(u, o);
  return { year: u, month: d, day: f, ...Wr(t) };
}
function Ia(t) {
  const { year: e, month: n, day: s } = t, i = xd(e, n, s);
  return { year: e, ordinal: i, ...Wr(t) };
}
function Ko(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = Cd(e, n);
  return { year: e, month: s, day: i, ...Wr(t) };
}
function Jo(t, e) {
  if (!se(t.localWeekday) || !se(t.localWeekNumber) || !se(t.localWeekYear)) {
    if (!se(t.weekday) || !se(t.weekNumber) || !se(t.weekYear))
      throw new ms(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return se(t.localWeekday) || (t.weekday = t.localWeekday), se(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), se(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function tp(t, e = 4, n = 1) {
  const s = Rr(t.weekYear), i = St(
    t.weekNumber,
    1,
    ci(t.weekYear, e, n)
  ), r = St(t.weekday, 1, 7);
  return s ? i ? r ? !1 : It("weekday", t.weekday) : It("week", t.weekNumber) : It("weekYear", t.weekYear);
}
function np(t) {
  const e = Rr(t.year), n = St(t.ordinal, 1, ws(t.year));
  return e ? n ? !1 : It("ordinal", t.ordinal) : It("year", t.year);
}
function Ed(t) {
  const e = Rr(t.year), n = St(t.month, 1, 12), s = St(t.day, 1, hr(t.year, t.month));
  return e ? n ? s ? !1 : It("day", t.day) : It("month", t.month) : It("year", t.year);
}
function Ad(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = St(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = St(n, 0, 59), l = St(s, 0, 59), o = St(i, 0, 999);
  return r ? a ? l ? o ? !1 : It("millisecond", i) : It("second", s) : It("minute", n) : It("hour", e);
}
function se(t) {
  return typeof t > "u";
}
function $n(t) {
  return typeof t == "number";
}
function Rr(t) {
  return typeof t == "number" && t % 1 === 0;
}
function sp(t) {
  return typeof t == "string";
}
function ip(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Fd() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function $d() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function rp(t) {
  return Array.isArray(t) ? t : [t];
}
function Qo(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function ap(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function xs(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function rl(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new Xe("Week settings must be an object");
  if (!St(t.firstDay, 1, 7) || !St(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !St(e, 1, 7)))
    throw new Xe("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function St(t, e, n) {
  return Rr(t) && t >= e && t <= n;
}
function lp(t, e) {
  return t - e * Math.floor(t / e);
}
function We(t, e = 2) {
  const n = t < 0;
  let s;
  return n ? s = "-" + ("" + -t).padStart(e, "0") : s = ("" + t).padStart(e, "0"), s;
}
function En(t) {
  if (!(se(t) || t === null || t === ""))
    return parseInt(t, 10);
}
function Hn(t) {
  if (!(se(t) || t === null || t === ""))
    return parseFloat(t);
}
function Ll(t) {
  if (!(se(t) || t === null || t === "")) {
    const e = parseFloat("0." + t) * 1e3;
    return Math.floor(e);
  }
}
function Dl(t, e, n = "round") {
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
function yi(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function ws(t) {
  return yi(t) ? 366 : 365;
}
function hr(t, e) {
  const n = lp(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? yi(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Pr(t) {
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
  return -Bl(Ml(t, 1, e), n) + e - 1;
}
function ci(t, e = 4, n = 1) {
  const s = Xo(t, e, n), i = Xo(t + 1, e, n);
  return (ws(t) - s + i) / 7;
}
function al(t) {
  return t > 99 ? t : t > Ve.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
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
function Hr(t, e) {
  let n = parseInt(t, 10);
  Number.isNaN(n) && (n = 0);
  const s = parseInt(e, 10) || 0, i = n < 0 || Object.is(n, -0) ? -s : s;
  return n * 60 + i;
}
function Md(t) {
  const e = Number(t);
  if (typeof t == "boolean" || t === "" || !Number.isFinite(e))
    throw new Xe(`Invalid unit value ${t}`);
  return e;
}
function mr(t, e) {
  const n = {};
  for (const s in t)
    if (xs(t, s)) {
      const i = t[s];
      if (i == null) continue;
      n[e(s)] = Md(i);
    }
  return n;
}
function ti(t, e) {
  const n = Math.trunc(Math.abs(t / 60)), s = Math.trunc(Math.abs(t % 60)), i = t >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${i}${We(n, 2)}:${We(s, 2)}`;
    case "narrow":
      return `${i}${n}${s > 0 ? `:${s}` : ""}`;
    case "techie":
      return `${i}${We(n, 2)}${We(s, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Wr(t) {
  return ap(t, ["hour", "minute", "second", "millisecond"]);
}
const op = [
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
], Bd = [
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
], up = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Ld(t) {
  switch (t) {
    case "narrow":
      return [...up];
    case "short":
      return [...Bd];
    case "long":
      return [...op];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Dd = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], _d = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], cp = ["M", "T", "W", "T", "F", "S", "S"];
function Vd(t) {
  switch (t) {
    case "narrow":
      return [...cp];
    case "short":
      return [..._d];
    case "long":
      return [...Dd];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Nd = ["AM", "PM"], dp = ["Before Christ", "Anno Domini"], fp = ["BC", "AD"], hp = ["B", "A"];
function Rd(t) {
  switch (t) {
    case "narrow":
      return [...hp];
    case "short":
      return [...fp];
    case "long":
      return [...dp];
    default:
      return null;
  }
}
function mp(t) {
  return Nd[t.hour < 12 ? 0 : 1];
}
function pp(t, e) {
  return Vd(e)[t.weekday - 1];
}
function gp(t, e) {
  return Ld(e)[t.month - 1];
}
function vp(t, e) {
  return Rd(e)[t.year < 0 ? 0 : 1];
}
function yp(t, e, n = "always", s = !1) {
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
const bp = {
  D: dr,
  DD: nd,
  DDD: sd,
  DDDD: id,
  t: rd,
  tt: ad,
  ttt: ld,
  tttt: od,
  T: ud,
  TT: cd,
  TTT: dd,
  TTTT: fd,
  f: hd,
  ff: pd,
  fff: vd,
  ffff: bd,
  F: md,
  FF: gd,
  FFF: yd,
  FFFF: kd
};
class nt {
  static create(e, n = {}) {
    return new nt(e, n);
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
    return bp[e];
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
      return We(e, n);
    const i = { ...this.opts };
    return n > 0 && (i.padTo = n), s && (i.signDisplay = s), this.loc.numberFormatter(i).format(e);
  }
  formatDateTimeFromString(e, n) {
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, g) => this.loc.extract(e, h, g), a = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", l = () => s ? mp(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), o = (h, g) => s ? gp(e, h) : r(g ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, g) => s ? pp(e, h) : r(
      g ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), d = (h) => {
      const g = nt.macroTokenToFormatOpts(h);
      return g ? this.formatWithSystemDefault(e, g) : h;
    }, f = (h) => s ? vp(e, h) : r({ era: h }, "era"), m = (h) => {
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
    return eu(nt.parseFormat(n), m);
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
    }, r = (d, f) => (m) => {
      const h = i(m);
      if (h) {
        const g = f.isNegativeDuration && h !== f.largestUnit ? s : 1;
        let b;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? b = "never" : this.opts.signMode === "all" ? b = "always" : b = "auto", this.num(d.get(h) * g, m.length, b);
      } else
        return m;
    }, a = nt.parseFormat(n), l = a.reduce(
      (d, { literal: f, val: m }) => f ? d : d.concat(m),
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
const Pd = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Fs(...t) {
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
function Os(t, ...e) {
  if (t == null)
    return [null, null];
  for (const [n, s] of e) {
    const i = n.exec(t);
    if (i)
      return s(i);
  }
  return [null, null];
}
function Hd(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = En(e[n + i]);
    return [s, null, n + i];
  };
}
const Wd = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, kp = `(?:${Wd.source}?(?:\\[(${Pd.source})\\])?)?`, _l = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, zd = RegExp(`${_l.source}${kp}`), Vl = RegExp(`(?:[Tt]${zd.source})?`), wp = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Ip = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Sp = /(\d{4})-?(\d{3})/, Tp = Hd("weekYear", "weekNumber", "weekDay"), xp = Hd("year", "ordinal"), Cp = /(\d{4})-(\d\d)-(\d\d)/, Ud = RegExp(
  `${_l.source} ?(?:${Wd.source}|(${Pd.source}))?`
), Ep = RegExp(`(?: ${Ud.source})?`);
function Is(t, e, n) {
  const s = t[e];
  return se(s) ? n : En(s);
}
function Ap(t, e) {
  return [{
    year: Is(t, e),
    month: Is(t, e + 1, 1),
    day: Is(t, e + 2, 1)
  }, null, e + 3];
}
function Ms(t, e) {
  return [{
    hours: Is(t, e, 0),
    minutes: Is(t, e + 1, 0),
    seconds: Is(t, e + 2, 0),
    milliseconds: Ll(t[e + 3])
  }, null, e + 4];
}
function bi(t, e) {
  const n = !t[e] && !t[e + 1], s = Hr(t[e + 1], t[e + 2]), i = n ? null : ot.instance(s);
  return [{}, i, e + 3];
}
function ki(t, e) {
  const n = t[e] ? hn.create(t[e]) : null;
  return [{}, n, e + 1];
}
const Fp = RegExp(`^T?${_l.source}$`), $p = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Op(t) {
  const [e, n, s, i, r, a, l, o, u] = t, d = e[0] === "-", f = o && o[0] === "-", m = (h, g = !1) => h !== void 0 && (g || h && d) ? -h : h;
  return [
    {
      years: m(Hn(n)),
      months: m(Hn(s)),
      weeks: m(Hn(i)),
      days: m(Hn(r)),
      hours: m(Hn(a)),
      minutes: m(Hn(l)),
      seconds: m(Hn(o), o === "-0"),
      milliseconds: m(Ll(u), f)
    }
  ];
}
const Mp = {
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
    year: e.length === 2 ? al(En(e)) : En(e),
    month: Bd.indexOf(n) + 1,
    day: En(s),
    hour: En(i),
    minute: En(r)
  };
  return a && (l.second = En(a)), t && (l.weekday = t.length > 3 ? Dd.indexOf(t) + 1 : _d.indexOf(t) + 1), l;
}
const Bp = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Lp(t) {
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
  ] = t, m = Nl(e, i, s, n, r, a, l);
  let h;
  return o ? h = Mp[o] : u ? h = 0 : h = Hr(d, f), [m, new ot(h)];
}
function Dp(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const _p = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Vp = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Np = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function tu(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [Nl(e, i, s, n, r, a, l), ot.utcInstance];
}
function Rp(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [Nl(e, l, n, s, i, r, a), ot.utcInstance];
}
const Pp = Fs(wp, Vl), Hp = Fs(Ip, Vl), Wp = Fs(Sp, Vl), zp = Fs(zd), qd = $s(
  Ap,
  Ms,
  bi,
  ki
), Up = $s(
  Tp,
  Ms,
  bi,
  ki
), qp = $s(
  xp,
  Ms,
  bi,
  ki
), jp = $s(
  Ms,
  bi,
  ki
);
function Gp(t) {
  return Os(
    t,
    [Pp, qd],
    [Hp, Up],
    [Wp, qp],
    [zp, jp]
  );
}
function Zp(t) {
  return Os(Dp(t), [Bp, Lp]);
}
function Yp(t) {
  return Os(
    t,
    [_p, tu],
    [Vp, tu],
    [Np, Rp]
  );
}
function Kp(t) {
  return Os(t, [$p, Op]);
}
const Jp = $s(Ms);
function Qp(t) {
  return Os(t, [Fp, Jp]);
}
const Xp = Fs(Cp, Ep), eg = Fs(Ud), tg = $s(
  Ms,
  bi,
  ki
);
function ng(t) {
  return Os(
    t,
    [Xp, qd],
    [eg, tg]
  );
}
const nu = "Invalid Duration", jd = {
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
}, sg = {
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
  ...jd
}, kt = 146097 / 400, us = 146097 / 4800, ig = {
  years: {
    quarters: 4,
    months: 12,
    weeks: kt / 7,
    days: kt,
    hours: kt * 24,
    minutes: kt * 24 * 60,
    seconds: kt * 24 * 60 * 60,
    milliseconds: kt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: kt / 28,
    days: kt / 4,
    hours: kt * 24 / 4,
    minutes: kt * 24 * 60 / 4,
    seconds: kt * 24 * 60 * 60 / 4,
    milliseconds: kt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: us / 7,
    days: us,
    hours: us * 24,
    minutes: us * 24 * 60,
    seconds: us * 24 * 60 * 60,
    milliseconds: us * 24 * 60 * 60 * 1e3
  },
  ...jd
}, Yn = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], rg = Yn.slice(0).reverse();
function Jt(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new be(s);
}
function Gd(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of rg.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function su(t, e) {
  const n = Gd(t, e) < 0 ? -1 : 1;
  Yn.reduceRight((s, i) => {
    if (se(e[i]))
      return s;
    if (s) {
      const r = e[s] * n, a = t[i][s], l = Math.floor(r / a);
      e[i] += l * n, e[s] -= l * a * n;
    }
    return i;
  }, null), Yn.reduce((s, i) => {
    if (se(e[i]))
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
class be {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let s = n ? ig : sg;
    e.matrix && (s = e.matrix), this.values = e.values, this.loc = e.loc || xe.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = s, this.isLuxonDuration = !0;
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
    return be.fromObject({ milliseconds: e }, n);
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
      throw new Xe(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new be({
      values: mr(e, be.normalizeUnit),
      loc: xe.fromObject(n),
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
    if ($n(e))
      return be.fromMillis(e);
    if (be.isDuration(e))
      return e;
    if (typeof e == "object")
      return be.fromObject(e);
    throw new Xe(
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
    const [s] = Kp(e);
    return s ? be.fromObject(s, n) : be.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    const [s] = Qp(e);
    return s ? be.fromObject(s, n) : be.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new Xe("need to specify a reason the Duration is invalid");
    const s = e instanceof Ft ? e : new Ft(e, n);
    if (Ve.throwOnInvalid)
      throw new Om(s);
    return new be({ invalid: s });
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
    if (!n) throw new td(e);
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
    return this.isValid ? nt.create(this.loc, s).formatDurationFromString(this, e) : nu;
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
    const n = e.showZeros !== !1, s = Yn.map((i) => {
      const r = this.values[i];
      return se(r) || r === 0 && !n ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: i.slice(0, -1) }).format(r);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Dl(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    }, ne.fromMillis(n, { zone: "UTC" }).toISOTime(e));
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
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? Gd(this.matrix, this.values) : NaN;
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
    const n = be.fromDurationLike(e), s = {};
    for (const i of Yn)
      (xs(n.values, i) || xs(this.values, i)) && (s[i] = n.get(i) + this.get(i));
    return Jt(this, { values: s }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = be.fromDurationLike(e);
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
      n[s] = Md(e(this.values[s], s));
    return Jt(this, { values: n }, !0);
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
    return this[be.normalizeUnit(e)];
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
    const n = { ...this.values, ...mr(e, be.normalizeUnit) };
    return Jt(this, { values: n });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: n, conversionAccuracy: s, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: n }), matrix: i, conversionAccuracy: s };
    return Jt(this, a);
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
    return su(this.matrix, e), Jt(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = iu(this.normalize().shiftToAll().toObject());
    return Jt(this, { values: e }, !0);
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
    e = e.map((a) => be.normalizeUnit(a));
    const n = {}, s = {}, i = this.toObject();
    let r;
    for (const a of Yn)
      if (e.indexOf(a) >= 0) {
        r = a;
        let l = 0;
        for (const u in s)
          l += this.matrix[u][a] * s[u], s[u] = 0;
        $n(i[a]) && (l += i[a]);
        const o = Math.trunc(l);
        n[a] = o, s[a] = (l * 1e3 - o * 1e3) / 1e3;
      } else $n(i[a]) && (s[a] = i[a]);
    for (const a in s)
      s[a] !== 0 && (n[r] += a === r ? s[a] : s[a] / this.matrix[r][a]);
    return su(this.matrix, n), Jt(this, { values: n }, !0);
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
    return Jt(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = iu(this.values);
    return Jt(this, { values: e }, !0);
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
    for (const s of Yn)
      if (!n(this.values[s], e.values[s]))
        return !1;
    return !0;
  }
}
const cs = "Invalid Interval";
function ag(t, e) {
  return !t || !t.isValid ? _e.invalid("missing or invalid start") : !e || !e.isValid ? _e.invalid("missing or invalid end") : e < t ? _e.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`
  ) : null;
}
class _e {
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
      throw new Xe("need to specify a reason the Interval is invalid");
    const s = e instanceof Ft ? e : new Ft(e, n);
    if (Ve.throwOnInvalid)
      throw new $m(s);
    return new _e({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = Rs(e), i = Rs(n), r = ag(s, i);
    return r ?? new _e({
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
    const s = be.fromDurationLike(n), i = Rs(e);
    return _e.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = be.fromDurationLike(n), i = Rs(e);
    return _e.fromDateTimes(i.minus(s), i);
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
        r = ne.fromISO(s, n), a = r.isValid;
      } catch {
        a = !1;
      }
      let l, o;
      try {
        l = ne.fromISO(i, n), o = l.isValid;
      } catch {
        o = !1;
      }
      if (a && o)
        return _e.fromDateTimes(r, l);
      if (a) {
        const u = be.fromISO(i, n);
        if (u.isValid)
          return _e.after(r, u);
      } else if (o) {
        const u = be.fromISO(s, n);
        if (u.isValid)
          return _e.before(l, u);
      }
    }
    return _e.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    return this.isValid ? _e.fromDateTimes(e || this.s, n || this.e) : this;
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
      s.push(_e.fromDateTimes(i, l)), i = l, r += 1;
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
    const n = be.fromDurationLike(e);
    if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
      return [];
    let { s } = this, i = 1, r;
    const a = [];
    for (; s < this.e; ) {
      const l = this.start.plus(n.mapUnits((o) => o * i));
      r = +l > +this.e ? this.e : l, a.push(_e.fromDateTimes(s, r)), s = r, i += 1;
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
    return n >= s ? null : _e.fromDateTimes(n, s);
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
    return _e.fromDateTimes(n, s);
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
      s += o.type === "s" ? 1 : -1, s === 1 ? n = o.time : (n && +n != +o.time && i.push(_e.fromDateTimes(n, o.time)), n = null);
    return _e.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return _e.xor([this].concat(e)).map((n) => this.intersection(n)).filter((n) => n && !n.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : cs;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
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
  toLocaleString(e = dr, n = {}) {
    return this.isValid ? nt.create(this.s.loc.clone(n), e).formatInterval(this) : cs;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : cs;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : cs;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : cs;
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
    return this.isValid ? `${this.s.toFormat(e)}${n}${this.e.toFormat(e)}` : cs;
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
    return this.isValid ? this.e.diff(this.s, e, n) : be.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return _e.fromDateTimes(e(this.s), e(this.e));
  }
}
class _i {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = Ve.defaultZone) {
    const n = ne.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && n.offset !== n.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return hn.isValidZone(e);
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
    return An(e, Ve.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || xe.create(e)).getStartOfWeek();
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
    return (n || xe.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || xe.create(e)).getWeekendDays().slice();
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
    return (i || xe.create(n, s, r)).months(e);
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
    return (i || xe.create(n, s, r)).months(e, !0);
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
    return (i || xe.create(n, s, null)).weekdays(e);
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
    return (i || xe.create(n, s, null)).weekdays(e, !0);
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
    return xe.create(e).meridiems();
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
    return xe.create(n, null, "gregory").eras(e);
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
    return { relative: Fd(), localeWeek: $d() };
  }
}
function ru(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(be.fromMillis(s).as("days"));
}
function lg(t, e, n) {
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
function og(t, e, n, s) {
  let [i, r, a, l] = lg(t, e, n);
  const o = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [l]: 1 })), a !== i && (r[l] = (r[l] || 0) + o / (a - i)));
  const d = be.fromObject(r, s);
  return u.length > 0 ? be.fromMillis(o, s).shiftTo(...u).plus(d) : d;
}
const ug = "missing Intl.DateTimeFormat.formatToParts support";
function Ie(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(Xm(n)) };
}
const cg = " ", Zd = `[ ${cg}]`, Yd = new RegExp(Zd, "g");
function dg(t) {
  return t.replace(/\./g, "\\.?").replace(Yd, Zd);
}
function au(t) {
  return t.replace(/\./g, "").replace(Yd, " ").toLowerCase();
}
function Et(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(dg).join("|")),
    deser: ([n]) => t.findIndex((s) => au(n) === au(s)) + e
  };
}
function lu(t, e) {
  return { regex: t, deser: ([, n, s]) => Hr(n, s), groups: e };
}
function Vi(t) {
  return { regex: t, deser: ([e]) => e };
}
function fg(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function hg(t, e) {
  const n = Ct(e), s = Ct(e, "{2}"), i = Ct(e, "{3}"), r = Ct(e, "{4}"), a = Ct(e, "{6}"), l = Ct(e, "{1,2}"), o = Ct(e, "{1,3}"), u = Ct(e, "{1,6}"), d = Ct(e, "{1,9}"), f = Ct(e, "{2,4}"), m = Ct(e, "{4,6}"), h = (k) => ({ regex: RegExp(fg(k.val)), deser: ([I]) => I, literal: !0 }), b = ((k) => {
    if (t.literal)
      return h(k);
    switch (k.val) {
      // era
      case "G":
        return Et(e.eras("short"), 0);
      case "GG":
        return Et(e.eras("long"), 0);
      // years
      case "y":
        return Ie(u);
      case "yy":
        return Ie(f, al);
      case "yyyy":
        return Ie(r);
      case "yyyyy":
        return Ie(m);
      case "yyyyyy":
        return Ie(a);
      // months
      case "M":
        return Ie(l);
      case "MM":
        return Ie(s);
      case "MMM":
        return Et(e.months("short", !0), 1);
      case "MMMM":
        return Et(e.months("long", !0), 1);
      case "L":
        return Ie(l);
      case "LL":
        return Ie(s);
      case "LLL":
        return Et(e.months("short", !1), 1);
      case "LLLL":
        return Et(e.months("long", !1), 1);
      // dates
      case "d":
        return Ie(l);
      case "dd":
        return Ie(s);
      // ordinals
      case "o":
        return Ie(o);
      case "ooo":
        return Ie(i);
      // time
      case "HH":
        return Ie(s);
      case "H":
        return Ie(l);
      case "hh":
        return Ie(s);
      case "h":
        return Ie(l);
      case "mm":
        return Ie(s);
      case "m":
        return Ie(l);
      case "q":
        return Ie(l);
      case "qq":
        return Ie(s);
      case "s":
        return Ie(l);
      case "ss":
        return Ie(s);
      case "S":
        return Ie(o);
      case "SSS":
        return Ie(i);
      case "u":
        return Vi(d);
      case "uu":
        return Vi(l);
      case "uuu":
        return Ie(n);
      // meridiem
      case "a":
        return Et(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Ie(r);
      case "kk":
        return Ie(f, al);
      // weekNumber (W)
      case "W":
        return Ie(l);
      case "WW":
        return Ie(s);
      // weekdays
      case "E":
      case "c":
        return Ie(n);
      case "EEE":
        return Et(e.weekdays("short", !1), 1);
      case "EEEE":
        return Et(e.weekdays("long", !1), 1);
      case "ccc":
        return Et(e.weekdays("short", !0), 1);
      case "cccc":
        return Et(e.weekdays("long", !0), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return lu(new RegExp(`([+-]${l.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return lu(new RegExp(`([+-]${l.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return Vi(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return Vi(/[^\S\n\r]/);
      default:
        return h(k);
    }
  })(t) || {
    invalidReason: ug
  };
  return b.token = t, b;
}
const mg = {
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
function pg(t, e, n) {
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
  let l = mg[a];
  if (typeof l == "object" && (l = l[r]), l)
    return {
      literal: !1,
      val: l
    };
}
function gg(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function vg(t, e, n) {
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
function yg(t) {
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
  return se(t.z) || (n = hn.create(t.z)), se(t.Z) || (n || (n = new ot(t.Z)), s = t.Z), se(t.q) || (t.M = (t.q - 1) * 3 + 1), se(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), se(t.u) || (t.S = Ll(t.u)), [Object.keys(t).reduce((r, a) => {
    const l = e(a);
    return l && (r[l] = t[a]), r;
  }, {}), n, s];
}
let Sa = null;
function bg() {
  return Sa || (Sa = ne.fromMillis(1555555555555)), Sa;
}
function kg(t, e) {
  if (t.literal)
    return t;
  const n = nt.macroTokenToFormatOpts(t.val), s = Xd(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function Kd(t, e) {
  return Array.prototype.concat(...t.map((n) => kg(n, e)));
}
class Jd {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = Kd(nt.parseFormat(n), e), this.units = this.tokens.map((s) => hg(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = gg(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = vg(e, this.regex, this.handlers), [i, r, a] = s ? yg(s) : [null, null, void 0];
      if (xs(s, "a") && xs(s, "H"))
        throw new ms(
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
function Qd(t, e, n) {
  return new Jd(t, n).explainFromTokens(e);
}
function wg(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = Qd(t, e, n);
  return [s, i, r, a];
}
function Xd(t, e) {
  if (!t)
    return null;
  const s = nt.create(e, t).dtFormatter(bg()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => pg(a, t, r));
}
const Ta = "Invalid DateTime", ou = 864e13;
function Us(t) {
  return new Ft("unsupported zone", `the zone "${t.name}" is not supported`);
}
function xa(t) {
  return t.weekData === null && (t.weekData = fr(t.c)), t.weekData;
}
function Ca(t) {
  return t.localWeekData === null && (t.localWeekData = fr(
    t.c,
    t.loc.getMinDaysInFirstWeek(),
    t.loc.getStartOfWeek()
  )), t.localWeekData;
}
function Wn(t, e) {
  const n = {
    ts: t.ts,
    zone: t.zone,
    c: t.c,
    o: t.o,
    loc: t.loc,
    invalid: t.invalid
  };
  return new ne({ ...n, ...e, old: n });
}
function ef(t, e, n) {
  let s = t - e * 60 * 1e3;
  const i = n.offset(s);
  if (e === i)
    return [s, e];
  s -= (i - e) * 60 * 1e3;
  const r = n.offset(s);
  return i === r ? [s, i] : [t - Math.min(i, r) * 60 * 1e3, Math.max(i, r)];
}
function Ni(t, e) {
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
function Gi(t, e, n) {
  return ef(Pr(t), e, n);
}
function uu(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, hr(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = be.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), l = Pr(r);
  let [o, u] = ef(l, n, t.zone);
  return a !== 0 && (o += a, u = t.zone.offset(o)), { ts: o, o: u };
}
function ds(t, e, n, s, i, r) {
  const { setZone: a, zone: l } = n;
  if (t && Object.keys(t).length !== 0 || e) {
    const o = e || l, u = ne.fromObject(t, {
      ...n,
      zone: o,
      specificOffset: r
    });
    return a ? u : u.setZone(l);
  } else
    return ne.invalid(
      new Ft("unparsable", `the input "${i}" can't be parsed as ${s}`)
    );
}
function Ri(t, e, n = !0) {
  return t.isValid ? nt.create(xe.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function Ea(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += We(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += We(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += We(t.c.month), n === "month") return i;
  return i += We(t.c.day), i;
}
function cu(t, e, n, s, i, r, a) {
  let l = !n || t.c.millisecond !== 0 || t.c.second !== 0, o = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (o += We(t.c.hour), a === "hour") break;
      if (e) {
        if (o += ":", o += We(t.c.minute), a === "minute") break;
        l && (o += ":", o += We(t.c.second));
      } else {
        if (o += We(t.c.minute), a === "minute") break;
        l && (o += We(t.c.second));
      }
      if (a === "second") break;
      l && (!s || t.c.millisecond !== 0) && (o += ".", o += We(t.c.millisecond, 3));
  }
  return i && (t.isOffsetFixed && t.offset === 0 && !r ? o += "Z" : t.o < 0 ? (o += "-", o += We(Math.trunc(-t.o / 60)), o += ":", o += We(Math.trunc(-t.o % 60))) : (o += "+", o += We(Math.trunc(t.o / 60)), o += ":", o += We(Math.trunc(t.o % 60)))), r && (o += "[" + t.zone.ianaName + "]"), o;
}
const tf = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ig = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Sg = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Zi = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Tg = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], xg = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Yi(t) {
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
  if (!e) throw new td(t);
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
      return Yi(t);
  }
}
function Cg(t) {
  if (qs === void 0 && (qs = Ve.now()), t.type !== "iana")
    return t.offset(qs);
  const e = t.name;
  let n = ll.get(e);
  return n === void 0 && (n = t.offset(qs), ll.set(e, n)), n;
}
function fu(t, e) {
  const n = An(e.zone, Ve.defaultZone);
  if (!n.isValid)
    return ne.invalid(Us(n));
  const s = xe.fromObject(e);
  let i, r;
  if (se(t.year))
    i = Ve.now();
  else {
    for (const o of Zi)
      se(t[o]) && (t[o] = tf[o]);
    const a = Ed(t) || Ad(t);
    if (a)
      return ne.invalid(a);
    const l = Cg(n);
    [i, r] = Gi(t, l, n);
  }
  return new ne({ ts: i, zone: n, loc: s, o: r });
}
function hu(t, e, n) {
  const s = se(n.round) ? !0 : n.round, i = se(n.rounding) ? "trunc" : n.rounding, r = (l, o) => (l = Dl(l, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(l, o)), a = (l) => n.calendary ? e.hasSame(t, l) ? 0 : e.startOf(l).diff(t.startOf(l), l).get(l) : e.diff(t, l).get(l);
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
const ll = /* @__PURE__ */ new Map();
class ne {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || Ve.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new Ft("invalid input") : null) || (n.isValid ? null : Us(n));
    this.ts = se(e.ts) ? Ve.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const l = $n(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Ni(this.ts, l), s = Number.isNaN(i.year) ? new Ft("invalid input") : null, i = s ? null : i, r = s ? null : l;
      }
    this._zone = n, this.loc = e.loc || xe.create(), this.invalid = s, this.weekData = null, this.localWeekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0;
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
    return new ne({});
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
    return e.zone = ot.utcInstance, fu({ year: s, month: i, day: r, hour: a, minute: l, second: o, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = ip(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return ne.invalid("invalid input");
    const i = An(n.zone, Ve.defaultZone);
    return i.isValid ? new ne({
      ts: s,
      zone: i,
      loc: xe.fromObject(n)
    }) : ne.invalid(Us(i));
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
    if ($n(e))
      return e < -ou || e > ou ? ne.invalid("Timestamp out of range") : new ne({
        ts: e,
        zone: An(n.zone, Ve.defaultZone),
        loc: xe.fromObject(n)
      });
    throw new Xe(
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
    if ($n(e))
      return new ne({
        ts: e * 1e3,
        zone: An(n.zone, Ve.defaultZone),
        loc: xe.fromObject(n)
      });
    throw new Xe("fromSeconds requires a numerical input");
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
    const s = An(n.zone, Ve.defaultZone);
    if (!s.isValid)
      return ne.invalid(Us(s));
    const i = xe.fromObject(n), r = mr(e, du), { minDaysInFirstWeek: a, startOfWeek: l } = Jo(r, i), o = Ve.now(), u = se(n.specificOffset) ? s.offset(o) : n.specificOffset, d = !se(r.ordinal), f = !se(r.year), m = !se(r.month) || !se(r.day), h = f || m, g = r.weekYear || r.weekNumber;
    if ((h || d) && g)
      throw new ms(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (m && d)
      throw new ms("Can't mix ordinal dates with month/day");
    const b = g || r.weekday && !h;
    let k, I, D = Ni(o, u);
    b ? (k = Tg, I = Ig, D = fr(D, a, l)) : d ? (k = xg, I = Sg, D = Ia(D)) : (k = Zi, I = tf);
    let w = !1;
    for (const Y of k) {
      const Q = r[Y];
      se(Q) ? w ? r[Y] = I[Y] : r[Y] = D[Y] : w = !0;
    }
    const P = b ? tp(r, a, l) : d ? np(r) : Ed(r), L = P || Ad(r);
    if (L)
      return ne.invalid(L);
    const H = b ? Yo(r, a, l) : d ? Ko(r) : r, [K, B] = Gi(H, u, s), $ = new ne({
      ts: K,
      zone: s,
      o: B,
      loc: i
    });
    return r.weekday && h && e.weekday !== $.weekday ? ne.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${$.toISO()}`
    ) : $.isValid ? $ : ne.invalid($.invalid);
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
    const [s, i] = Gp(e);
    return ds(s, i, n, "ISO 8601", e);
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
    const [s, i] = Zp(e);
    return ds(s, i, n, "RFC 2822", e);
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
    const [s, i] = Yp(e);
    return ds(s, i, n, "HTTP", n);
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
    if (se(e) || se(n))
      throw new Xe("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: r = null } = s, a = xe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [l, o, u, d] = wg(a, e, n);
    return d ? ne.invalid(d) : ds(l, o, s, `format ${n}`, e, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, n, s = {}) {
    return ne.fromFormat(e, n, s);
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
    const [s, i] = ng(e);
    return ds(s, i, n, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, n = null) {
    if (!e)
      throw new Xe("need to specify a reason the DateTime is invalid");
    const s = e instanceof Ft ? e : new Ft(e, n);
    if (Ve.throwOnInvalid)
      throw new Fm(s);
    return new ne({ invalid: s });
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
    const s = Xd(e, xe.fromObject(n));
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
    return Kd(nt.parseFormat(e), xe.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    qs = void 0, ll.clear();
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
    return this.isValid ? xa(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? xa(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? xa(this).weekday : NaN;
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
    return this.isValid ? Ca(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? Ca(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? Ca(this).weekYear : NaN;
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
    const e = 864e5, n = 6e4, s = Pr(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), l = this.zone.offset(s - r * n);
    if (a === l)
      return [this];
    const o = s - a * n, u = s - l * n, d = Ni(o, a), f = Ni(u, l);
    return d.hour === f.hour && d.minute === f.minute && d.second === f.second && d.millisecond === f.millisecond ? [Wn(this, { ts: o }), Wn(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return yi(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return hr(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? ws(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? ci(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? ci(
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
    const { locale: n, numberingSystem: s, calendar: i } = nt.create(
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
    return this.setZone(ot.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Ve.defaultZone);
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
    if (e = An(e, Ve.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let i = this.ts;
      if (n || s) {
        const r = e.offset(this.ts), a = this.toObject();
        [i] = Gi(a, r, e);
      }
      return Wn(this, { ts: i, zone: e });
    } else
      return ne.invalid(Us(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: n, outputCalendar: s } = {}) {
    const i = this.loc.clone({ locale: e, numberingSystem: n, outputCalendar: s });
    return Wn(this, { loc: i });
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
    const n = mr(e, du), { minDaysInFirstWeek: s, startOfWeek: i } = Jo(n, this.loc), r = !se(n.weekYear) || !se(n.weekNumber) || !se(n.weekday), a = !se(n.ordinal), l = !se(n.year), o = !se(n.month) || !se(n.day), u = l || o, d = n.weekYear || n.weekNumber;
    if ((u || a) && d)
      throw new ms(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && a)
      throw new ms("Can't mix ordinal dates with month/day");
    let f;
    r ? f = Yo(
      { ...fr(this.c, s, i), ...n },
      s,
      i
    ) : se(n.ordinal) ? (f = { ...this.toObject(), ...n }, se(n.day) && (f.day = Math.min(hr(f.year, f.month), f.day))) : f = Ko({ ...Ia(this.c), ...n });
    const [m, h] = Gi(f, this.o, this.zone);
    return Wn(this, { ts: m, o: h });
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
    const n = be.fromDurationLike(e);
    return Wn(this, uu(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = be.fromDurationLike(e).negate();
    return Wn(this, uu(this, n));
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
    const s = {}, i = be.normalizeUnit(e);
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
    return this.isValid ? nt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ta;
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
  toLocaleString(e = dr, n = {}) {
    return this.isValid ? nt.create(this.loc.clone(n), e).formatDateTime(this) : Ta;
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
    return this.isValid ? nt.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    a = Yi(a);
    const l = e === "extended";
    let o = Ea(this, l, a);
    return Zi.indexOf(a) >= 3 && (o += "T"), o += cu(
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
    return this.isValid ? Ea(this, e === "extended", Yi(n)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Ri(this, "kkkk-'W'WW-c");
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
    return this.isValid ? (l = Yi(l), (i && Zi.indexOf(l) >= 3 ? "T" : "") + cu(
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
    return Ri(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Ri(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
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
    return (n || e) && (s && (i += " "), n ? i += "z" : e && (i += "ZZ")), Ri(this, i, !0);
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
    return this.isValid ? this.toISO() : Ta;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
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
      return be.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = rp(n).map(be.normalizeUnit), a = e.valueOf() > this.valueOf(), l = a ? this : e, o = a ? e : this, u = og(l, o, r, i);
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
    return this.diff(ne.now(), e, n);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? _e.fromDateTimes(this, e) : this;
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
    const n = e.base || ne.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
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
    return this.isValid ? hu(e.base || ne.fromObject({}, { zone: this.zone }), this, {
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
    if (!e.every(ne.isDateTime))
      throw new Xe("min requires all arguments be DateTimes");
    return Qo(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(ne.isDateTime))
      throw new Xe("max requires all arguments be DateTimes");
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
    const { locale: i = null, numberingSystem: r = null } = s, a = xe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    return Qd(a, e, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, n, s = {}) {
    return ne.fromFormatExplain(e, n, s);
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
    const { locale: s = null, numberingSystem: i = null } = n, r = xe.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new Jd(r, e);
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
    if (se(e) || se(n))
      throw new Xe(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: i = null, numberingSystem: r = null } = s, a = xe.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    if (!a.equals(n.locale))
      throw new Xe(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${n.locale}`
      );
    const { result: l, zone: o, specificOffset: u, invalidReason: d } = n.explainFromTokens(e);
    return d ? ne.invalid(d) : ds(
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
    return dr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return nd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Mm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return sd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return id;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return rd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return ad;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return ld;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return od;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return ud;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return cd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return dd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return fd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return hd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return md;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return pd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return gd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Bm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return vd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return yd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return bd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return kd;
  }
}
function Rs(t) {
  if (ne.isDateTime(t))
    return t;
  if (t && t.valueOf && $n(t.valueOf()))
    return ne.fromJSDate(t);
  if (t && typeof t == "object")
    return ne.fromObject(t);
  throw new Xe(
    `Unknown datetime argument: ${t}, of type ${typeof t}`
  );
}
function di(t) {
  return globalThis.document ? t instanceof HTMLElement : !1;
}
function Eg(t) {
  let e = [];
  for (let n of t) {
    if (n.type === de && Array.isArray(n.children)) {
      e.push(...n.children);
      continue;
    }
    e.push(n);
  }
  return e;
}
var Ag = ["a:not([disabled])", "button:not([disabled])", "input[type=checkbox]:not([disabled])", "input[type=radio]:not([disabled])", "input[type=text]:not([disabled])", '[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");
function Qn(t) {
  return Array.from(t.querySelectorAll(Ag)).filter(di).filter((e) => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement);
}
function Fg(t, e, n) {
  let s = Qn(t), i = s.indexOf(e);
  if (i === -1) return null;
  let r = Mg(s);
  $g(r, i, n);
  let a = Og(i, n, r, s);
  return a || ((n === "up" || n === "left") && (a = s[i - 1]), (n === "down" || n === "right") && (a = s[i + 1])), a;
}
function $g(t, e, n) {
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
function Og(t, e, n, s) {
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
function Mg(t) {
  return t.map((e) => e.getBoundingClientRect()).map((e) => ({ height: e.height, width: e.width, top: e.top, left: e.left, right: e.right, bottom: e.bottom, center: { x: e.left + e.width / 2, y: e.top + e.height / 2 }, distance: 0 }));
}
function Bg(t, e, n = void 0) {
  let s = Qn(t), i = n || document.activeElement;
  if (!i || !di(i)) return s[0] || void 0;
  let r = s.indexOf(i);
  return s[r + e] || void 0;
}
function ut(t) {
  let e = c(t);
  return di(e) ? e : e?.$el;
}
function Lg(...t) {
  console.warn("[Flux]", ...t);
}
function Aa(t, e, n = !1) {
  let s = Dg(t), i = e.compareDocumentPosition(t), r;
  i && Node.DOCUMENT_POSITION_PRECEDING || n ? r = s.firstChild() : r = s.lastChild(), (r !== null ? r : t).focus();
}
function Dg(t) {
  return document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
}
class _g {
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
var pu = new _g(), Vg = !globalThis.document;
function gu(t, e, n) {
  let s = ee([]);
  gn(() => {
    document.addEventListener("pointerdown", i);
  }), ss(() => {
    document.removeEventListener("pointerdown", i);
  });
  function i(r) {
    c(e) && !c(s).some((a) => a.contains(r.target)) && n(r);
  }
  $r(() => {
    let r = [];
    (Array.isArray(t) ? t : [t]).forEach((a) => {
      let l = ut(a);
      l && r.push(l);
    }), s.value = r;
  });
}
function nf(t, e, n) {
  n ??= { attributes: !0 };
  let s, i = Le(() => ut(t), (l) => {
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
var Ng = 0;
function Rg(t = !1) {
  let e = ee(`focus-trap-${++Ng}`), n = ee(!1);
  return gn(() => pu.add(c(e), (s) => n.value = s, t)), ss(() => pu.remove(c(e))), n;
}
function Pg(t, e) {
  Le(t, (n, s, i) => {
    if (!ut(t) || c(e)) return;
    let r = document.activeElement;
    i(() => {
      requestAnimationFrame(() => r?.focus());
    });
  });
}
function Hg(t, e = {}) {
  if (Vg) return;
  let { disable: n = ee(!1), disableReturn: s = ee(!1), attachTo: i = null } = e, r = Rg(!n);
  Pg(t, s), Le(t, (a, l, o) => {
    let u = ut(t), d = i || document;
    r.value && u && document.activeElement && !u.contains(document.activeElement) && !u.querySelector("[autofocus]") && Aa(u, document.activeElement, !0);
    function f(h) {
      if (!r.value || !u) return;
      let g = h.target || document.body;
      u.contains(g) || (h.preventDefault(), h.stopImmediatePropagation(), Aa(u, g));
    }
    function m(h) {
      if (!r.value || !u) return;
      (!h.relatedTarget || h.relatedTarget === document.body) && (h.preventDefault(), u.focus());
      let g = h.target || document.body;
      u.contains(g) || Aa(u, g);
    }
    if (d.addEventListener("focusin", f, { capture: !0 }), d.addEventListener("focusout", m, { capture: !0 }), u) {
      let h = Qn(u), g = h.findIndex((I) => I.classList.contains("is-active")), b = h.findIndex((I) => !I.hasAttribute("aria-disabled")), k = h[0];
      g > -1 && (k = h[g]), b > -1 && (k = h[b]), k && k.focus();
    }
    o(() => {
      d.removeEventListener("focusin", f), d.removeEventListener("focusout", m);
    });
  }, { immediate: !0 }), Le(() => n, () => {
    let a = ut(t);
    if (r.value = !n, n || !a) return;
    let l = Qn(a);
    l.includes(document.activeElement) || l[0]?.focus();
  }, { immediate: !0 });
}
function Wg(t, { cycle: e = !0, direction: n = "bidirectional" } = {}) {
  nf(t, () => i(s(), !1));
  function s() {
    let a = ut(t), l = Qn(a), o = l.findIndex((d) => d.classList.contains("is-active")), u = l.findIndex((d) => !d.hasAttribute("aria-disabled"));
    return o > -1 ? o : u > -1 ? u : 0;
  }
  function i(a, l = !0) {
    let o = ut(t), u = Qn(o);
    u.forEach((d, f) => d.tabIndex = f === a ? 0 : -1), l && u[a]?.focus();
  }
  function r(a) {
    let l = ut(t), o = Qn(l);
    if (!["Enter", " "].includes(a.key))
      switch (n) {
        case "bidirectional":
          zg(a, l, o, i);
          break;
        case "horizontal":
        case "vertical":
          Ug(a, l, e, n, o, i);
          break;
      }
  }
  Le(t, (a, l, o) => {
    let u = ut(t);
    u && (u.addEventListener("keydown", r), i(s(), !1), o(() => u.removeEventListener("keydown", r)));
  }, { immediate: !0 });
}
function zg(t, e, n, s) {
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
  let r = Fg(e, document.activeElement, i);
  r && s(n.indexOf(r)), t.preventDefault();
}
function Ug(t, e, n, s, i, r) {
  let a;
  if (t.key === (s === "horizontal" ? "ArrowLeft" : "ArrowUp")) a = -1;
  else if (t.key === (s === "horizontal" ? "ArrowRight" : "ArrowDown")) a = 1;
  else return;
  let l = Bg(e, a);
  l ? r(i.indexOf(l)) : n && r(a === 1 ? 0 : i.length - 1), t.preventDefault();
}
const qg = "basePane", jg = "basePaneLoader", Gg = "basePaneStructure basePane", Zg = "basePaneElement", Yg = "form", Kg = "paneHeader";
var zr = { basePane: qg, basePaneLoader: jg, basePaneStructure: Gg, basePaneElement: Zg, form: Yg, paneHeader: Kg };
const { basePane: vn } = zr, Jg = "icon", Qg = "fontAwesomeIcon icon", Xg = "materialSymbolIcon icon", ev = `iconBoxed ${vn}`, tv = `iconBoxedDefault iconBoxed ${vn}`, nv = `iconBoxedColored iconBoxed ${vn}`, sv = `iconBoxedGray iconBoxedColored iconBoxed ${vn}`, iv = `iconBoxedPrimary iconBoxedColored iconBoxed ${vn}`, rv = `iconBoxedDanger iconBoxedColored iconBoxed ${vn}`, av = `iconBoxedInfo iconBoxedColored iconBoxed ${vn}`, lv = `iconBoxedSuccess iconBoxedColored iconBoxed ${vn}`, ov = `iconBoxedWarning iconBoxedColored iconBoxed ${vn}`;
var Fa = { icon: Jg, fontAwesomeIcon: Qg, materialSymbolIcon: Xg, iconBoxed: ev, iconBoxedDefault: tv, iconBoxedColored: nv, iconBoxedGray: sv, iconBoxedPrimary: iv, iconBoxedDanger: rv, iconBoxedInfo: av, iconBoxedSuccess: lv, iconBoxedWarning: ov };
const uv = ["viewBox"], cv = ["d"];
var dt = /* @__PURE__ */ U({
  __name: "FluxIcon",
  props: {
    size: {},
    name: {}
  },
  emits: ["click"],
  setup(t, { emit: e }) {
    const n = e, s = Ae(() => {
      if (!t.name)
        return null;
      const r = Pc[t.name];
      return r ? {
        width: r[0],
        height: r[1],
        paths: Array.isArray(r[4]) ? r[4] : [r[4]],
        scale: Math.max(1, r[0] / 512)
      } : (Lg(`Unknown icon: ${t.name}`), null);
    }), i = (r) => n("click", r);
    return (r, a) => s.value ? (v(), N("svg", {
      key: 0,
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: E(c(Fa).fontAwesomeIcon),
      style: st({
        fontSize: t.size && `${t.size}px`,
        scale: s.value.scale > 1 ? s.value.scale : void 0
      }),
      focusable: "false",
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, [
      (v(!0), N(de, null, ct(s.value.paths, (l) => (v(), N("path", {
        d: l,
        fill: "currentColor"
      }, null, 8, cv))), 256))
    ], 14, uv)) : t.name ? (v(), N("i", {
      key: 1,
      class: E(c(Fa).materialSymbolIcon),
      style: st({
        fontSize: t.size && `${t.size}px`
      }),
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, ge(t.name), 7)) : (v(), N("i", {
      key: 2,
      class: E(c(Fa).icon)
    }, null, 2));
  }
});
const dv = ["href", "rel", "target"];
var sf = /* @__PURE__ */ U({
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
      const a = th("router-link");
      return t.componentType === "route" ? (v(), _(a, wt({ key: 0 }, i.$attrs, {
        rel: t.rel,
        target: t.target,
        to: t.to,
        onClick: r[0] || (r[0] = (l) => s(l)),
        onMouseenter: r[1] || (r[1] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[2] || (r[2] = (l) => i.$emit("mouseleave", l))
      }), {
        default: W(() => [
          re(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["rel", "target", "to"])) : t.componentType === "link" ? (v(), N("a", wt({ key: 1 }, i.$attrs, {
        href: t.href,
        rel: t.rel,
        target: t.target,
        onClick: r[3] || (r[3] = (l) => s(l)),
        onMouseenter: r[4] || (r[4] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[5] || (r[5] = (l) => i.$emit("mouseleave", l))
      }), [
        re(i.$slots, "default")
      ], 16, dv)) : t.componentType === "button" ? (v(), N("button", wt({ key: 2 }, i.$attrs, {
        onClick: r[6] || (r[6] = (l) => s(l)),
        onMouseenter: r[7] || (r[7] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[8] || (r[8] = (l) => i.$emit("mouseleave", l))
      }), [
        re(i.$slots, "default")
      ], 16)) : (v(), N("div", wt({ key: 3 }, i.$attrs, {
        onClick: s,
        onMouseenter: r[9] || (r[9] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[10] || (r[10] = (l) => i.$emit("mouseleave", l))
      }), [
        re(i.$slots, "default")
      ], 16));
    };
  }
});
const fv = "spinner", hv = "spinnerTrack", mv = "spinnerEffect", pv = "spinnerValue";
var Pi = { spinner: fv, spinnerTrack: hv, spinnerEffect: mv, spinnerValue: pv }, Ln = /* @__PURE__ */ U({
  __name: "FluxSpinner",
  props: {
    size: {}
  },
  setup(t) {
    return (e, n) => (v(), N("svg", {
      class: E(c(Pi).spinner),
      viewBox: "0 0 24 24",
      style: st({
        fontSize: t.size && `${t.size}px`
      })
    }, [
      we("circle", {
        class: E(c(Pi).spinnerTrack),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4"
      }, null, 2),
      we("circle", {
        class: E(c(Pi).spinnerEffect),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2),
      we("circle", {
        class: E(c(Pi).spinnerValue),
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
const gv = "button", vv = "isSmall", yv = "isMedium", bv = "isLarge", kv = "isXl", wv = "isFilled", Iv = "buttonIcon", Sv = "buttonLabel";
var Fn = { button: gv, isSmall: vv, isMedium: yv, isLarge: bv, isXl: kv, isFilled: wv, buttonIcon: Iv, buttonLabel: Sv };
const rf = ["default", "after", "before", "iconLeading", "iconTrailing", "label"];
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
    const n = e, s = As(cn(() => t.disabled));
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
    return (l, o) => (v(), _(sf, {
      "component-type": t.type,
      class: E(c(xt)(
        t.cssClass,
        t.isFilled && c(Fn).isFilled,
        t.size === "small" && c(Fn).isSmall,
        t.size === "medium" && c(Fn).isMedium,
        t.size === "large" && c(Fn).isLarge,
        t.size === "xl" && c(Fn).isXl
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
      default: W(() => [
        re(l.$slots, "before"),
        re(l.$slots, "iconLeading", {}, () => [
          t.isLoading && (t.iconLeading || !t.iconTrailing) ? (v(), _(Ln, {
            key: 0,
            size: 20
          })) : t.iconLeading ? (v(), _(dt, {
            key: 1,
            class: E(t.cssClassIcon),
            name: t.iconLeading
          }, null, 8, ["class", "name"])) : J("", !0)
        ]),
        re(l.$slots, "label", {}, () => [
          t.label ? (v(), N("span", {
            key: 0,
            class: E(t.cssClassLabel)
          }, ge(t.label), 3)) : J("", !0)
        ]),
        re(l.$slots, "iconTrailing", {}, () => [
          t.isLoading && !t.iconLeading && t.iconTrailing ? (v(), _(Ln, {
            key: 0,
            size: 20
          })) : t.iconTrailing ? (v(), _(dt, {
            key: 1,
            class: E(t.cssClassIcon),
            name: t.iconTrailing
          }, null, 8, ["class", "name"])) : J("", !0)
        ]),
        re(l.$slots, "after")
      ]),
      _: 3
    }, 8, ["component-type", "class", "type", "aria-disabled", "disabled", "tabindex", "href", "rel", "target", "to"]));
  }
});
const { button: Tv, buttonIcon: xv, buttonLabel: Cv } = Fn, Ev = `action ${Tv}`, Av = "spinner", Fv = `actionIcon ${xv}`, $v = "isDestructive", Ov = `actionLabel ${Cv}`, Mv = "actionBar", Bv = "separator", Lv = "formInput", Dv = "basePaneStructure", _v = "paneHeader", Vv = "actionPane", Nv = "actionPaneGrid", Rv = "actionPaneBody", Pv = "paneBody";
var Hi = { action: Ev, spinner: Av, actionIcon: Fv, isDestructive: $v, actionLabel: Ov, actionBar: Mv, separator: Bv, formInput: Lv, basePaneStructure: Dv, paneHeader: _v, actionPane: Vv, actionPaneGrid: Nv, actionPaneBody: Rv, paneBody: Pv }, Hv = /* @__PURE__ */ U({
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
    return (e, n) => (v(), _(Ur, wt({ disabled: t.disabled, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to, type: t.type }, {
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
function Wv(t, e, n, s) {
  const i = Ae(() => {
    const l = c(t);
    return Array.isArray(l) ? l : [l];
  }), r = Ae(() => {
    const l = [], o = c(s)?.trim().toLowerCase(), u = c(n).filter((d) => !("value" in d) || !o || d.label.toLowerCase().includes(o)).filter((d) => !("value" in d) || !e || !c(a).find((f) => f.value === d.value));
    if (u.length === 0)
      return [];
    if (!u.find(Ua))
      return [[null, u]];
    for (let d = 0; d < u.length; ) {
      const f = u[d];
      if (Xs(f)) {
        ++d, l.push([null, [f]]);
        continue;
      }
      const m = [];
      for (++d; d <= u.length; ++d) {
        const h = u[d];
        if (Ua(h) || d === u.length) {
          m.length > 0 && l.push([f, m]);
          break;
        }
        m.push(h);
      }
    }
    return l;
  }), a = Ae(() => c(i).map((l) => c(n).find((o) => Xs(o) && o.value === l)).filter(Xs));
  return {
    groups: r,
    selected: a,
    values: i
  };
}
const zv = (t, e) => {
  if (!(t in Bo))
    return t;
  let n = Bo[t];
  for (let s in e)
    n = n.replaceAll(`{${s}}`, e[s].toString());
  return n;
};
var wi = () => {
  const t = Zt()?.proxy;
  return !t || !Uv(t) ? zv : t.$t;
};
function Uv(t) {
  return !!t && "$t" in t;
}
const { button: Ii, buttonIcon: Si, buttonLabel: Ti } = Fn, qv = `primaryButton ${Ii}`, jv = "spinner", Gv = `primaryButtonIcon ${Si}`, Zv = `primaryButtonLabel ${Ti}`, Yv = `secondaryButton ${Ii}`, Kv = `secondaryButtonIcon ${Si}`, Jv = `secondaryButtonLabel ${Ti}`, Qv = `destructiveButton ${Ii}`, Xv = `destructiveButtonIcon ${Si}`, ey = `destructiveButtonLabel ${Ti}`, ty = `linkButton ${Ii}`, ny = `linkButtonIcon ${Si}`, sy = "icon", iy = `linkButtonLabel ${Ti}`, ry = `publishButton primaryButton ${Ii}`, ay = `publishButtonIcon primaryButtonIcon ${Si}`, ly = `publishButtonLabel primaryButtonLabel ${Ti}`, oy = "publishButtonAnimation", uy = "isDone", cy = "publishButtonAnimationArrow", dy = "publishArrowOut", fy = "publishButtonAnimationCheck", hy = "publishButtonAnimationCircle", my = "isIdle", py = "isLoading", gy = "publishArrowIn", vy = "publishButtonCloud", yy = "publish", by = "buttonGroup", ky = "button";
var Xn = { primaryButton: qv, spinner: jv, primaryButtonIcon: Gv, primaryButtonLabel: Zv, secondaryButton: Yv, secondaryButtonIcon: Kv, secondaryButtonLabel: Jv, destructiveButton: Qv, destructiveButtonIcon: Xv, destructiveButtonLabel: ey, linkButton: ty, linkButtonIcon: ny, icon: sy, linkButtonLabel: iy, publishButton: ry, publishButtonIcon: ay, publishButtonLabel: ly, publishButtonAnimation: oy, isDone: uy, publishButtonAnimationArrow: cy, publishArrowOut: dy, publishButtonAnimationCheck: fy, publishButtonAnimationCircle: hy, isIdle: my, isLoading: py, publishArrowIn: gy, publishButtonCloud: vy, publish: yy, buttonGroup: by, button: ky }, wy = /* @__PURE__ */ U({
  __name: "FluxButtonGroup",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(Xn).buttonGroup)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const { basePaneStructure: xi, basePaneElement: Rl, basePaneLoader: Iy } = zr, Sy = `pane ${xi}`, Ty = `paneDefault pane ${xi}`, xy = `paneFlat pane ${xi}`, Cy = `paneWell pane ${xi}`, Ey = `paneHeader ${Rl}`, Ay = "basePaneElement", Fy = `paneBody ${Rl}`, $y = "paneHeaderCaption", Oy = "paneHeaderIcon", My = `paneFooter ${Rl}`, By = `paneLoader ${Iy}`, Ly = "paneTag", Dy = "paneMedia", _y = "paneMediaInset paneMedia", Vy = "paneMediaImage", Ny = `paneDeck paneDefault pane ${xi}`, Ry = "baseAutoGrid", Py = "paneGroup", Hy = "paneIllustration", Wy = "paneIllustrationContent", zy = "paneIllustrationContentControlled paneIllustrationContent", Uy = "paneIllustrationMagic", qy = "paneIllustrationMasked paneIllustration", jy = "iconBoxed";
var Ut = { pane: Sy, paneDefault: Ty, paneFlat: xy, paneWell: Cy, paneHeader: Ey, basePaneElement: Ay, paneBody: Fy, paneHeaderCaption: $y, paneHeaderIcon: Oy, paneFooter: My, paneLoader: By, paneTag: Ly, paneMedia: Dy, paneMediaInset: _y, paneMediaImage: Vy, paneDeck: Ny, baseAutoGrid: Ry, paneGroup: Py, paneIllustration: Hy, paneIllustrationContent: Wy, paneIllustrationContentControlled: zy, paneIllustrationMagic: Uy, paneIllustrationMasked: qy, iconBoxed: jy }, qr = /* @__PURE__ */ U({
  __name: "FluxPane",
  props: {
    isLoading: { type: Boolean },
    tag: {},
    variant: { default: "default" }
  },
  setup(t) {
    const e = {
      default: Ut.paneDefault,
      flat: Ut.paneFlat,
      well: Ut.paneWell
    };
    return (n, s) => (v(), N("div", {
      class: E(e[t.variant])
    }, [
      re(n.$slots, "default"),
      t.isLoading ? re(n.$slots, "loader", { key: 0 }, () => [
        we("div", {
          class: E(c(Ut).paneLoader)
        }, [
          M(Ln)
        ], 2)
      ]) : J("", !0),
      t.tag ? (v(), N("div", {
        key: 1,
        class: E(c(Ut).paneTag)
      }, ge(t.tag), 3)) : J("", !0)
    ], 2));
  }
}), Cs = /* @__PURE__ */ U({
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
    return (e, n) => (v(), _(Ur, wt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(Xn).secondaryButton,
      "css-class-icon": c(Xn).secondaryButtonIcon,
      "css-class-label": c(Xn).secondaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), Il({ _: 2 }, [
      ct(c(rf), (s) => ({
        name: s,
        fn: W(() => [
          re(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
});
const Gy = "baseAutoGrid";
var Zy = { baseAutoGrid: Gy };
const { baseAutoGrid: Yy } = Zy, Ky = "aspectRatio", Jy = `autoGrid ${Yy}`, Qy = "container", Xy = "spacer", e0 = "stack", t0 = "isCentered", n0 = "isFill", s0 = "isWrapping", i0 = "stackHorizontal stack", r0 = "stackVertical stack";
var hs = { aspectRatio: Ky, autoGrid: Jy, container: Qy, spacer: Xy, stack: e0, isCentered: t0, isFill: n0, isWrapping: s0, stackHorizontal: i0, stackVertical: r0 }, jr = /* @__PURE__ */ U({
  __name: "FluxSpacer",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(hs).spacer)
    }, null, 2));
  }
}), af = /* @__PURE__ */ U({
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
    return (e, n) => (v(), _(wl(t.tag ?? "div"), {
      class: E(c(xt)(
        t.direction === "horizontal" && c(hs).stackHorizontal,
        t.direction === "vertical" && c(hs).stackVertical,
        t.isCentered && c(hs).isCentered,
        t.isFill && c(hs).isFill,
        t.isWrapping && c(hs).isWrapping
      )),
      style: st({
        "--gap": t.gap && `${t.gap}px`
      })
    }, {
      default: W(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), a0 = /* @__PURE__ */ U({
  __name: "FluxButtonStack",
  props: {
    direction: { default: "horizontal" },
    gap: { default: 9 },
    isFill: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), _(af, {
      direction: t.direction,
      gap: t.gap,
      "is-fill": t.isFill
    }, {
      default: W(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["direction", "gap", "is-fill"]));
  }
}), fi = /* @__PURE__ */ U({
  __name: "FluxPaneBody",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(Ut).paneBody)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const l0 = "breakthroughTransitionEnterActive", o0 = "breakthroughTransitionBackEnterActive", u0 = "breakthroughTransitionLeaveActive", c0 = "breakthroughTransitionBackLeaveActive", d0 = "breakthroughTransitionEnterFrom", f0 = "breakthroughTransitionBackLeaveTo", h0 = "breakthroughTransitionLeaveTo", m0 = "breakthroughTransitionBackEnterFrom", p0 = "fadeTransitionEnterActive", g0 = "fadeTransitionLeaveActive", v0 = "fadeTransitionEnterFrom", y0 = "fadeTransitionLeaveTo", b0 = "fadeTransitionEnterTo", k0 = "fadeTransitionLeaveFrom", w0 = "routeTransitionEnterActive", I0 = "routeTransitionBackEnterActive", S0 = "routeTransitionLeaveActive", T0 = "routeTransitionBackLeaveActive", x0 = "routeTransitionEnterFrom", C0 = "routeTransitionBackLeaveTo", E0 = "routeTransitionLeaveTo", A0 = "routeTransitionBackEnterFrom", F0 = "tooltipTransitionEnterActive", $0 = "tooltipTransitionLeaveActive", O0 = "tooltipTransitionEnterFrom", M0 = "tooltipTransitionLeaveTo", B0 = "verticalWindowTransitionEnterActive", L0 = "verticalWindowTransitionBackEnterActive", D0 = "verticalWindowTransitionLeaveActive", _0 = "verticalWindowTransitionBackLeaveActive", V0 = "verticalWindowTransitionBackLeaveTo", N0 = "verticalWindowTransitionEnterFrom", R0 = "verticalWindowTransitionBackEnterFrom", P0 = "verticalWindowTransitionLeaveTo", H0 = "windowTransitionEnterActive", W0 = "windowTransitionBackEnterActive", z0 = "windowTransitionLeaveActive", U0 = "windowTransitionBackLeaveActive", q0 = "windowTransitionBackLeaveTo", j0 = "windowTransitionEnterFrom", G0 = "windowTransitionBackEnterFrom", Z0 = "windowTransitionLeaveTo";
var Wt = { breakthroughTransitionEnterActive: l0, breakthroughTransitionBackEnterActive: o0, breakthroughTransitionLeaveActive: u0, breakthroughTransitionBackLeaveActive: c0, breakthroughTransitionEnterFrom: d0, breakthroughTransitionBackLeaveTo: f0, breakthroughTransitionLeaveTo: h0, breakthroughTransitionBackEnterFrom: m0, fadeTransitionEnterActive: p0, fadeTransitionLeaveActive: g0, fadeTransitionEnterFrom: v0, fadeTransitionLeaveTo: y0, fadeTransitionEnterTo: b0, fadeTransitionLeaveFrom: k0, routeTransitionEnterActive: w0, routeTransitionBackEnterActive: I0, routeTransitionLeaveActive: S0, routeTransitionBackLeaveActive: T0, routeTransitionEnterFrom: x0, routeTransitionBackLeaveTo: C0, routeTransitionLeaveTo: E0, routeTransitionBackEnterFrom: A0, tooltipTransitionEnterActive: F0, tooltipTransitionLeaveActive: $0, tooltipTransitionEnterFrom: O0, tooltipTransitionLeaveTo: M0, verticalWindowTransitionEnterActive: B0, verticalWindowTransitionBackEnterActive: L0, verticalWindowTransitionLeaveActive: D0, verticalWindowTransitionBackLeaveActive: _0, verticalWindowTransitionBackLeaveTo: V0, verticalWindowTransitionEnterFrom: N0, verticalWindowTransitionBackEnterFrom: R0, verticalWindowTransitionLeaveTo: P0, windowTransitionEnterActive: H0, windowTransitionBackEnterActive: W0, windowTransitionLeaveActive: z0, windowTransitionBackLeaveActive: U0, windowTransitionBackLeaveTo: q0, windowTransitionEnterFrom: j0, windowTransitionBackEnterFrom: G0, windowTransitionLeaveTo: Z0 }, ol = /* @__PURE__ */ U({
  __name: "FluxFadeTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (v(), _(ns, {
      mode: t.mode,
      "enter-active-class": c(Wt).fadeTransitionEnterActive,
      "enter-from-class": c(Wt).fadeTransitionEnterFrom,
      "enter-to-class": c(Wt).fadeTransitionEnterTo,
      "leave-active-class": c(Wt).fadeTransitionLeaveActive,
      "leave-from-class": c(Wt).fadeTransitionLeaveFrom,
      "leave-to-class": c(Wt).fadeTransitionLeaveTo
    }, {
      default: W(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"]));
  }
});
const Y0 = "overlayView", K0 = "overlayProvider overlayView", J0 = "overlayShade overlayView", Q0 = "overlay", X0 = "overlayTransitionLeaveActive", eb = "basePaneStructure", tb = "paneFooter", nb = "isCurrent", sb = "overlaySmall overlay", ib = "overlayMedium overlay", rb = "overlayLarge overlay", ab = "slideOver overlay", lb = "paneHeader", ob = "tabs", ub = "tabBar", cb = "paneHeaderCaption", db = "overlayTransitionEnterActive", fb = "overlayTransitionEnterFrom", hb = "overlayTransitionLeaveTo", mb = "slideOverTransitionEnterActive", pb = "slideOverTransitionLeaveActive", gb = "slideOverTransitionEnterFrom", vb = "slideOverTransitionLeaveTo";
var $t = { overlayView: Y0, overlayProvider: K0, overlayShade: J0, overlay: Q0, overlayTransitionLeaveActive: X0, basePaneStructure: eb, paneFooter: tb, isCurrent: nb, overlaySmall: sb, overlayMedium: ib, overlayLarge: rb, slideOver: ab, paneHeader: lb, tabs: ob, tabBar: ub, paneHeaderCaption: cb, overlayTransitionEnterActive: db, overlayTransitionEnterFrom: fb, overlayTransitionLeaveTo: hb, slideOverTransitionEnterActive: mb, slideOverTransitionLeaveActive: pb, slideOverTransitionEnterFrom: gb, slideOverTransitionLeaveTo: vb }, yb = /* @__PURE__ */ U({
  __name: "FluxOverlayTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (v(), _(ns, {
      mode: t.mode,
      "enter-active-class": c($t).overlayTransitionEnterActive,
      "enter-from-class": c($t).overlayTransitionEnterFrom,
      "leave-active-class": c($t).overlayTransitionLeaveActive,
      "leave-to-class": c($t).overlayTransitionLeaveTo
    }, {
      default: W(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
}), bb = /* @__PURE__ */ U({
  __name: "FluxTooltipTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (v(), _(ns, {
      mode: t.mode,
      "enter-active-class": c(Wt).tooltipTransitionEnterActive,
      "enter-from-class": c(Wt).tooltipTransitionEnterFrom,
      "leave-active-class": c(Wt).tooltipTransitionLeaveActive,
      "leave-to-class": c(Wt).tooltipTransitionLeaveTo
    }, {
      default: W(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
});
const kb = "badge", wb = "spinner", Ib = "badgeClose", Sb = "icon", Tb = "badgeDot", xb = "badgeIcon", Cb = "badgeLabel", Eb = "badgeGray badge", Ab = "badgePrimary badge", Fb = "badgeDanger badge", $b = "badgeInfo badge", Ob = "badgeSuccess badge", Mb = "badgeWarning badge", Bb = "tag badge", Lb = "tagClose badgeClose", Db = "tagDot badgeDot", _b = "tagIcon badgeIcon", Vb = "tagLabel badgeLabel", Nb = "tagGray badgeGray badge tag badge", Rb = "tagPrimary badgePrimary badge tag badge", Pb = "tagDanger badgeDanger badge tag badge", Hb = "tagInfo badgeInfo badge tag badge", Wb = "tagSuccess badgeSuccess badge tag badge", zb = "tagWarning badgeWarning badge tag badge";
var At = { badge: kb, spinner: wb, badgeClose: Ib, icon: Sb, badgeDot: Tb, badgeIcon: xb, badgeLabel: Cb, badgeGray: Eb, badgePrimary: Ab, badgeDanger: Fb, badgeInfo: $b, badgeSuccess: Ob, badgeWarning: Mb, tag: Bb, tagClose: Lb, tagDot: Db, tagIcon: _b, tagLabel: Vb, tagGray: Nb, tagPrimary: Rb, tagDanger: Pb, tagInfo: Hb, tagSuccess: Wb, tagWarning: zb }, Ub = /* @__PURE__ */ U({
  __name: "Anchor",
  props: {
    tagName: {}
  },
  setup(t) {
    return (e, n) => (v(), _(wl(t.tagName), null, {
      default: W(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), qb = /* @__PURE__ */ U({
  __name: "AnchorPopup",
  props: {
    anchor: {},
    direction: { default: "vertical" },
    margin: { default: 12 },
    position: {},
    useAnchorWidth: { type: Boolean }
  },
  setup(t) {
    const e = ee(), n = sn("popup"), s = mn({
      x: 0,
      y: 0,
      width: null
    });
    gn(() => {
      window.addEventListener("resize", a, { passive: !0 }), window.addEventListener("scroll", l, { capture: !0, passive: !0 });
    }), ss(() => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", l);
    }), nf(n, () => {
      i();
    }, { childList: !0, subtree: !0 });
    function i() {
      const o = c(e), u = c(n);
      if (!o || !u)
        return;
      const { x: d, y: f, height: m, width: h } = o.getBoundingClientRect(), { height: g, width: b } = u.getBoundingClientRect();
      let k, I;
      switch (t.position) {
        case "top":
          k = d + h / 2 - b / 2, I = f - g - t.margin;
          break;
        case "top-left":
          k = d, I = f - g - t.margin;
          break;
        case "top-right":
          k = d - b + h, I = f - g - t.margin;
          break;
        case "left":
          k = d - b - t.margin, I = f + m / 2 - g / 2;
          break;
        case "left-top":
          k = d - b - t.margin, I = f;
          break;
        case "left-bottom":
          k = d - b - t.margin, I = f + m - g;
          break;
        case "right":
          k = d + h + t.margin, I = f + m / 2 - g / 2;
          break;
        case "right-top":
          k = d + h + t.margin, I = f;
          break;
        case "right-bottom":
          k = d + h + t.margin, I = f + m - g;
          break;
        case "bottom":
          k = d + h / 2 - b / 2, I = f + m + t.margin;
          break;
        case "bottom-left":
          k = d, I = f + m + t.margin;
          break;
        case "bottom-right":
          k = d - b + h, I = f + m + t.margin;
          break;
        default:
          t.direction === "horizontal" ? (k = d + h + t.margin, I = f + m / 2 - g / 2, k + b > innerWidth && (k = d - b - t.margin)) : (k = d + h / 2 - b / 2, I = f + m + t.margin, I + g + t.margin > innerHeight && (I = f - g - t.margin));
          break;
      }
      s.x = k, s.y = I;
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
      !t.anchor || !di(t.anchor) && !t.anchor.$el || (e.value = di(t.anchor) ? t.anchor : t.anchor.$el, requestAnimationFrame(() => {
        requestAnimationFrame(r), requestAnimationFrame(i);
      }));
    }), (o, u) => (v(), N("div", {
      ref: "popup",
      style: st({
        "--x": `${s.x}px`,
        "--y": `${s.y}px`,
        "--width": s.width ? `${s.width}px` : void 0
      })
    }, [
      re(o.$slots, "default")
    ], 4));
  }
});
const { button: jb, buttonIcon: lf, buttonLabel: Gb } = Fn, Zb = "menu", Yb = "menuNormal menu", Kb = "menuLarge menu", Jb = "menuGroup", Qb = "menuGroupHorizontal menuGroup", Xb = "menuGroupVertical menuGroup", ek = `menuItem ${jb}`, tk = `menuItemIcon ${lf}`, nk = `menuItemLabel ${Gb}`, sk = "menuItemActive", ik = "menuItemDestructive", rk = "menuItemHighlighted", ak = "menuItemIndented", lk = `menuItemSelectableIcon ${lf}`, ok = "menuItemSelected", uk = "menuItemCommand", ck = "menuItemCommandIcon", dk = "icon", fk = "menuItemImage", hk = "menuTitle", mk = "menuSubHeader", pk = "menuSubHeaderIcon", gk = "menuSubHeaderLabel", vk = "basePane", yk = "divider", bk = "separator", kk = "expandableBody";
var Pe = { menu: Zb, menuNormal: Yb, menuLarge: Kb, menuGroup: Jb, menuGroupHorizontal: Qb, menuGroupVertical: Xb, menuItem: ek, menuItemIcon: tk, menuItemLabel: nk, menuItemActive: sk, menuItemDestructive: ik, menuItemHighlighted: rk, menuItemIndented: ak, menuItemSelectableIcon: lk, menuItemSelected: ok, menuItemCommand: uk, menuItemCommandIcon: ck, icon: dk, menuItemImage: fk, menuTitle: hk, menuSubHeader: mk, menuSubHeaderIcon: pk, menuSubHeaderLabel: gk, basePane: vk, divider: yk, separator: bk, expandableBody: kk };
const wk = ["src", "alt"];
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
    return (e, n) => (v(), _(Ur, wt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
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
    }), Il({ _: 2 }, [
      t.isSelectable && (!t.iconLeading || t.isSelected) ? {
        name: "iconLeading",
        fn: W(() => [
          M(dt, {
            class: E(c(Pe).menuItemSelectableIcon),
            name: t.isSelected ? "circle-check" : void 0
          }, null, 8, ["class", "name"])
        ]),
        key: "0"
      } : t.imageSrc ? {
        name: "iconLeading",
        fn: W(() => [
          we("img", {
            class: E(c(Pe).menuItemImage),
            src: t.imageSrc,
            alt: t.imageAlt ?? ""
          }, null, 10, wk)
        ]),
        key: "1"
      } : void 0,
      t.command || t.commandIcon || t.commandLoading ? {
        name: "after",
        fn: W(() => [
          t.commandLoading ? (v(), _(Ln, {
            key: 0,
            class: E(c(Pe).menuItemCommandIcon),
            size: 16
          }, null, 8, ["class"])) : (v(), N(de, { key: 1 }, [
            t.command ? (v(), N("kbd", {
              key: 0,
              class: E(c(Pe).menuItemCommand)
            }, ge(t.command), 3)) : J("", !0),
            t.commandIcon ? (v(), _(dt, {
              key: 1,
              class: E(c(Pe).menuItemCommandIcon),
              name: t.commandIcon
            }, null, 8, ["class", "name"])) : J("", !0)
          ], 64))
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["css-class", "css-class-icon", "css-class-label", "role", "class", "aria-checked", "tabindex"]));
  }
});
const { basePane: Ik } = zr, Sk = "formInputGroup formInputEnabled formInput", Tk = "buttonGroup", xk = "button", Ck = "formInput", Ek = "formSelect formInput", Ak = "formStructureElement", Fk = "form formStructureElement", $k = "pane", Ok = "formColumn formStructureElement", Mk = "formSection formStructureElement", Bk = "formRow", Lk = "formSectionTitle", Dk = "formField", _k = "formFieldHeader", Vk = "formFieldLabel", Nk = "formFieldOptional", Rk = "formFieldValue", Pk = "formFieldCounter", Hk = "formFieldAddition", Wk = "formFieldAdditionIcon", zk = "formFieldAdditionError formFieldAddition", Uk = "formFieldAdditionHint formFieldAddition", qk = "isSecondary", jk = "formInputDisabled formInput", Gk = "formInputEnabled formInput", Zk = "formInputIcon", Yk = "formInputIconTrailing formInputIcon", Kk = "formInputIconLeading formInputIcon", Jk = "formInputIconPasswordToggle formInputIconTrailing formInputIcon", Qk = "formInputNative", Xk = "formInputNativeHasIconLeading", e1 = "formInputNativeHasIconTrailing", t1 = "formInputAddition formInput", n1 = "isCondensed", s1 = "secondaryButton", i1 = "formDateInput", r1 = "formDateRangeInput formInput", a1 = "formDateTimeInput", l1 = "inputGroup", o1 = "formTimeInput formDateInput", u1 = "isDisabled", c1 = "isFocused", d1 = "badge", f1 = "formSelectIcon", h1 = "formSelectInput", m1 = "formSelectPlaceholder", p1 = `formSelectPopup ${Ik}`, g1 = "menuItem", v1 = "isKeyboardAction", y1 = "isSearchable", b1 = "menuSubHeader", k1 = "formSelectSelected", w1 = "buttonLabel", I1 = "formTextArea", S1 = "formTextAreaDisabled formInputDisabled formInput formTextArea", T1 = "formTextAreaEnabled formInputEnabled formInput formTextArea", x1 = "checkbox", C1 = "checkboxElement", E1 = "checkboxNative", A1 = "icon", F1 = "checkboxLabel", $1 = "quantitySelector", O1 = "quantitySelectorButton", M1 = "quantitySelectorInput formInput", B1 = "pinInput", L1 = "pinInputField", D1 = "pinInputEnabled pinInput", _1 = "pinInputDisabled pinInput", V1 = "toggle", N1 = "isChecked", R1 = "toggleInput", P1 = "isSwitch", H1 = "toggleIcon", W1 = "toggleIconOn toggleIcon", z1 = "toggleIconOff toggleIcon";
var ue = { formInputGroup: Sk, buttonGroup: Tk, button: xk, formInput: Ck, formSelect: Ek, formStructureElement: Ak, form: Fk, pane: $k, formColumn: Ok, formSection: Mk, formRow: Bk, formSectionTitle: Lk, formField: Dk, formFieldHeader: _k, formFieldLabel: Vk, formFieldOptional: Nk, formFieldValue: Rk, formFieldCounter: Pk, formFieldAddition: Hk, formFieldAdditionIcon: Wk, formFieldAdditionError: zk, formFieldAdditionHint: Uk, isSecondary: qk, formInputDisabled: jk, formInputEnabled: Gk, formInputIcon: Zk, formInputIconTrailing: Yk, formInputIconLeading: Kk, formInputIconPasswordToggle: Jk, formInputNative: Qk, formInputNativeHasIconLeading: Xk, formInputNativeHasIconTrailing: e1, formInputAddition: t1, isCondensed: n1, secondaryButton: s1, formDateInput: i1, formDateRangeInput: r1, formDateTimeInput: a1, inputGroup: l1, formTimeInput: o1, isDisabled: u1, isFocused: c1, badge: d1, formSelectIcon: f1, formSelectInput: h1, formSelectPlaceholder: m1, formSelectPopup: p1, menuItem: g1, isKeyboardAction: v1, isSearchable: y1, menuSubHeader: b1, formSelectSelected: k1, buttonLabel: w1, formTextArea: I1, formTextAreaDisabled: S1, formTextAreaEnabled: T1, checkbox: x1, checkboxElement: C1, checkboxNative: E1, icon: A1, checkboxLabel: F1, quantitySelector: $1, quantitySelectorButton: O1, quantitySelectorInput: M1, pinInput: B1, pinInputField: L1, pinInputEnabled: D1, pinInputDisabled: _1, toggle: V1, isChecked: N1, toggleInput: R1, isSwitch: P1, toggleIcon: H1, toggleIconOn: W1, toggleIconOff: z1 };
const U1 = ["aria-disabled"], q1 = ["id", "autocomplete", "autofocus", "aria-disabled", "disabled", "max", "maxlength", "min", "placeholder", "readonly", "step", "type", "value"];
var pr = /* @__PURE__ */ U({
  __name: "FluxFormInput",
  props: /* @__PURE__ */ dn({
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
  emits: /* @__PURE__ */ dn(["blur", "focus", "showPicker"], ["update:modelValue"]),
  setup(t, { expose: e, emit: n }) {
    const s = n, i = fn(t, "modelValue"), r = As(cn(() => t.disabled)), a = sn("input"), { id: l } = $l(), o = ee(null), u = ee(t.type);
    function d() {
      ut(a)?.blur();
    }
    function f() {
      ut(a)?.focus();
    }
    function m() {
      t.type === "password" && (u.value = c(u) === "password" ? "text" : "password");
    }
    function h() {
      s("blur");
    }
    function g() {
      s("focus");
    }
    function b(I) {
      const D = I.target.value;
      switch (t.type) {
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          const w = ne.fromISO(D);
          if (!w.isValid)
            return;
          i.value = w;
          break;
        case "number":
          i.value = Number(D);
          break;
        default:
          i.value = D;
          break;
      }
    }
    function k(I) {
      ["date", "datetime-local", "month", "week"].includes(t.type) && I.key === " " && (s("showPicker"), I.preventDefault());
    }
    return Le([i, () => t.type], ([I, D]) => {
      if (!I && I !== 0) {
        o.value = null;
        return;
      }
      if (ne.isDateTime(I)) {
        const w = I.toISO();
        switch (D) {
          case "date":
            o.value = w.substring(0, 10);
            break;
          case "datetime-local":
            o.value = w.substring(0, 16);
            break;
          case "time":
            o.value = w.substring(11, 16);
            break;
          default:
            o.value = w;
            break;
        }
        return;
      }
      o.value = I.toString();
    }, { immediate: !0 }), Le([a, () => t.pattern, o], ([I, D, w], P, L) => {
      if (!I || !D)
        return;
      const H = bm[D](I);
      w && (H.value = w, i.value = H.value), L(() => H.destroy());
    }, { immediate: !0 }), Le(() => t.type, (I) => u.value = I), e({
      blur: d,
      focus: f
    }), (I, D) => (v(), N("div", {
      class: E(c(xt)(
        c(r) ? c(ue).formInputDisabled : c(ue).formInputEnabled,
        t.isCondensed && c(ue).isCondensed,
        t.isSecondary && c(ue).isSecondary
      )),
      "aria-disabled": c(r) ? !0 : void 0
    }, [
      we("input", {
        ref: "input",
        class: E(c(xt)(
          c(ue).formInputNative,
          (!!t.iconTrailing || t.type === "password") && c(ue).formInputNativeHasIconTrailing,
          !!t.iconLeading && c(ue).formInputNativeHasIconLeading
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
        onBlur: D[0] || (D[0] = (w) => h()),
        onFocus: D[1] || (D[1] = (w) => g()),
        onInput: b,
        onKeydown: k
      }, null, 42, q1),
      t.iconLeading ? (v(), _(dt, {
        key: 0,
        class: E(c(ue).formInputIconLeading),
        name: t.iconLeading,
        size: 18
      }, null, 8, ["class", "name"])) : J("", !0),
      t.type === "password" ? (v(), _(dt, {
        key: 1,
        class: E(c(ue).formInputIconPasswordToggle),
        name: u.value === "password" ? "eye" : "eye-slash",
        size: 18,
        onClick: D[2] || (D[2] = (w) => m())
      }, null, 8, ["class", "name"])) : t.iconTrailing ? (v(), _(dt, {
        key: 2,
        class: E(c(ue).formInputIconTrailing),
        name: t.iconTrailing,
        size: 18
      }, null, 8, ["class", "name"])) : J("", !0)
    ], 10, U1));
  }
}), j1 = /* @__PURE__ */ U({
  __name: "FluxMenuGroup",
  props: {
    isHorizontal: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(t.isHorizontal ? c(Pe).menuGroupHorizontal : c(Pe).menuGroupVertical),
      role: "group"
    }, [
      re(e.$slots, "default")
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
    return (e, n) => (v(), N("div", {
      class: E(c(Pe).menuSubHeader),
      role: "presentation"
    }, [
      t.iconLeading ? (v(), _(dt, {
        key: 0,
        class: E(c(Pe).menuSubHeaderIcon),
        name: t.iconLeading
      }, null, 8, ["class", "name"])) : J("", !0),
      we("span", {
        class: E(c(Pe).menuSubHeaderLabel)
      }, ge(t.label), 3),
      t.iconTrailing ? (v(), _(dt, {
        key: 1,
        class: E(c(Pe).menuSubHeaderIcon),
        name: t.iconTrailing
      }, null, 8, ["class", "name"])) : J("", !0)
    ], 2));
  }
}), yu = /* @__PURE__ */ U({
  __name: "FluxMenu",
  props: {
    isLarge: { type: Boolean }
  },
  setup(t) {
    const e = sn("element");
    return Wg(e, {
      direction: "vertical"
    }), (n, s) => (v(), N("nav", {
      ref: "element",
      class: E(t.isLarge ? c(Pe).menuLarge : c(Pe).menuNormal),
      role: "menu",
      "aria-orientation": "vertical"
    }, [
      re(n.$slots, "default")
    ], 2));
  }
}), G1 = /* @__PURE__ */ U({
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
    return (i, r) => (v(), _(sf, {
      class: E(c(xt)(
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
      default: W(() => [
        t.isLoading ? (v(), _(Ln, {
          key: 0,
          class: E(c(At).tagIcon),
          size: 16
        }, null, 8, ["class"])) : t.dot ? (v(), N("span", {
          key: 1,
          class: E(c(At).tagDot)
        }, null, 2)) : t.icon ? (v(), _(dt, {
          key: 2,
          class: E(c(At).tagIcon),
          name: t.icon,
          size: 16
        }, null, 8, ["class", "name"])) : J("", !0),
        we("span", {
          class: E(c(At).tagLabel)
        }, ge(t.label), 3),
        !t.isClickable && t.isDeletable ? (v(), N("button", {
          key: 3,
          class: E(c(At).tagClose),
          type: "button",
          onClick: r[0] || (r[0] = (a) => s())
        }, [
          M(dt, { name: "xmark" })
        ], 2)) : J("", !0)
      ]),
      _: 1
    }, 8, ["class", "component-type", "tabindex", "href", "rel", "target", "to"]));
  }
});
const Ps = -1;
var Z1 = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "SelectBase",
  props: /* @__PURE__ */ dn({
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
  emits: /* @__PURE__ */ dn(["keyDown", "deselect", "select", "search", "close", "open"], ["update:searchQuery"]),
  setup(t, { emit: e }) {
    const n = e, s = fn(t, "searchQuery"), i = As(cn(() => t.disabled)), { id: r } = $l(), a = wi(), l = sn("anchor"), o = sn("anchorPopup"), u = sn("optionElements"), d = sn("searchInputElement"), f = ee(Ps), m = ee(!1), h = ee(!1), g = Ae(() => ut(d) ?? ut(l)), b = Ae(() => c(k)[c(f)]?.value), k = Ae(() => t.options.map((H) => H[1]).flat());
    gu([l, o], h, () => h.value = !1), gu(l, h, () => c(g)?.focus());
    function I(H) {
      n("deselect", H), Gn(() => c(g)?.focus());
    }
    function D(H) {
      n("select", H), !t.isMultiple && (h.value = !1), f.value = Ps, s.value = "", Gn(() => c(g)?.focus());
    }
    function w() {
      c(i) || (h.value = !c(h));
    }
    function P(H) {
      if (n("keyDown", H), !c(h)) {
        H.key === "Enter" && (h.value = !0);
        return;
      }
      if (m.value = !0, c(f) === Ps && ["ArrowDown", "ArrowUp"].includes(H.key)) {
        const B = c(u)?.findIndex(($) => "isActive" in $.$props && $.$props.isActive);
        f.value = B ?? Ps;
      }
      switch (H.key) {
        case "ArrowUp":
          f.value = Math.max(0, c(f) - 1);
          break;
        case "ArrowDown":
          f.value = Math.min(c(k).length - 1, c(f) + 1);
          break;
        case "Backspace":
          if (c(s).length > 0 || t.selected.length === 0)
            return;
          I(t.selected[t.selected.length - 1].value);
          break;
        case "Enter":
          const B = c(b);
          B && D(B);
          break;
        case "Escape":
          h.value = !1;
          break;
        case "Tab":
          h.value = !1;
          return;
        default:
          H.key.match(/[a-z]/) ? f.value = c(k).findIndex(($) => $.label.toLowerCase().startsWith(H.key)) : f.value = -1;
          return;
      }
      H.preventDefault();
    }
    function L() {
      m.value = !1;
    }
    return Le(f, (H) => {
      c(u)[H]?.$el.scrollIntoView({
        block: "center"
      });
    }), Le(h, (H) => {
      if (!H) {
        n("close");
        return;
      }
      Gn(() => {
        c(d)?.focus();
      }), Gn(() => {
        const K = c(u);
        if (!K || t.isMultiple)
          return;
        const B = K.findIndex((Y) => "isActive" in Y.$props && Y.$props.isActive), $ = K[B];
        $ && $.$el.scrollIntoView({
          block: "center"
        });
      }), n("open");
    }), Le(s, (H) => n("search", H)), Le([() => t.options, h], () => f.value = Ps), (H, K) => (v(), N(de, null, [
      M(Ub, wt({ ref: "anchor" }, H.$attrs, {
        class: c(xt)(
          c(ue).formSelect,
          c(i) && c(ue).isDisabled,
          h.value && c(ue).isFocused,
          t.isSearchable && c(ue).isSearchable
        ),
        id: c(r),
        "aria-disabled": c(i) ? !0 : void 0,
        tabindex: "0",
        "tag-name": "div",
        onClick: K[0] || (K[0] = (B) => w()),
        onKeydown: P,
        onKeyup: L
      }), {
        default: W(() => [
          !t.isMultiple && t.selected[0] ? (v(), _($a, {
            key: 0,
            class: E(c(ue).formSelectSelected),
            command: t.selected[0].command,
            "command-icon": t.selected[0].commandIcon,
            "icon-leading": t.selected[0].icon,
            "image-alt": t.selected[0].imageAlt,
            "image-src": t.selected[0].imageSrc,
            label: t.selected[0].label,
            tabindex: "-1"
          }, null, 8, ["class", "command", "command-icon", "icon-leading", "image-alt", "image-src", "label"])) : t.isMultiple && t.selected[0] ? (v(!0), N(de, { key: 1 }, ct(t.selected, (B) => (v(), _(G1, {
            key: B.value ?? "null option",
            label: B.label,
            "is-deletable": "",
            onDelete: ($) => I(B.value)
          }, null, 8, ["label", "onDelete"]))), 128)) : t.placeholder ? (v(), N("span", {
            key: 2,
            class: E(c(ue).formSelectPlaceholder)
          }, ge(t.placeholder), 3)) : J("", !0),
          t.isLoading ? (v(), _(Ln, {
            key: 3,
            class: E(c(ue).formSelectIcon),
            size: 16
          }, null, 8, ["class"])) : (v(), _(dt, {
            key: 4,
            class: E(c(ue).formSelectIcon),
            name: "angle-down"
          }, null, 8, ["class"]))
        ]),
        _: 1
      }, 16, ["class", "id", "aria-disabled"]),
      (v(), _(ec, { to: "body" }, [
        M(c(ol), null, {
          default: W(() => [
            h.value && !c(i) ? (v(), _(qb, {
              key: 0,
              ref: "anchorPopup",
              class: E(c(xt)(
                c(ue).formSelectPopup,
                m.value && c(ue).isKeyboardAction,
                t.isSearchable && c(ue).isSearchable
              )),
              anchor: l.value,
              direction: "vertical",
              "use-anchor-width": ""
            }, {
              default: W(() => [
                t.isSearchable ? (v(), _(pr, {
                  key: 0,
                  modelValue: s.value,
                  "onUpdate:modelValue": K[1] || (K[1] = (B) => s.value = B),
                  ref: "searchInputElement",
                  "auto-complete": "off",
                  class: E(c(ue).formSelectInput),
                  type: "search",
                  "icon-trailing": "magnifying-glass",
                  placeholder: c(a)("flux.search"),
                  onKeydown: P
                }, null, 8, ["modelValue", "class", "placeholder"])) : J("", !0),
                !t.isLoading && t.options.length === 0 ? (v(), _(yu, { key: 1 }, {
                  default: W(() => [
                    M(vu, {
                      label: c(a)("flux.noItems")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })) : (v(), _(yu, { key: 2 }, {
                  default: W(() => [
                    (v(!0), N(de, null, ct(t.options, ([B, $], Y) => (v(), N(de, {
                      key: `group-${Y}`
                    }, [
                      M(j1, null, {
                        default: W(() => [
                          c(Ua)(B) ? (v(), _(vu, {
                            key: 0,
                            "icon-leading": B.icon,
                            label: B.label
                          }, null, 8, ["icon-leading", "label"])) : J("", !0),
                          (v(!0), N(de, null, ct($, (Q, R) => (v(), N(de, null, [
                            c(Xs)(Q) ? (v(), _($a, {
                              ref_for: !0,
                              ref: "optionElements",
                              key: R,
                              command: Q.command,
                              "command-icon": Q.commandIcon,
                              "icon-leading": Q.icon,
                              "image-alt": Q.imageAlt,
                              "image-src": Q.imageSrc,
                              "is-active": !!t.selected.find((te) => te.value === Q.value),
                              "is-highlighted": b.value === Q.value,
                              label: Q.label,
                              type: "button",
                              onClick: (te) => D(Q.value)
                            }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : J("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1024),
                      c(Xs)(B) ? (v(), _($a, {
                        ref_for: !0,
                        ref: "optionElements",
                        key: `item-${Y}`,
                        command: B.command,
                        "command-icon": B.commandIcon,
                        "icon-leading": B.icon,
                        "image-alt": B.imageAlt,
                        "image-src": B.imageSrc,
                        "is-active": !!t.selected.find((Q) => Q.value === B.value),
                        "is-highlighted": b.value === B.value,
                        label: B.label,
                        type: "button",
                        onClick: (Q) => D(B.value)
                      }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : J("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 8, ["class", "anchor"])) : J("", !0)
          ]),
          _: 1
        })
      ]))
    ], 64));
  }
});
const Y1 = `.${$t.overlayProvider.replaceAll(" ", ".")}`;
function K1(t, e, n, s, i, r) {
  let a = null, l = 0;
  const o = ee();
  Hg(o), ss(() => {
    a?.();
  }), Le(o, (d, f, m) => {
    d && (d.addEventListener("keydown", u, { passive: !0 }), d.focus(), m(() => {
      d.removeEventListener("keydown", u);
    }));
  });
  function u(d) {
    d.key !== "Escape" || !a || !e.isCloseable || n("close");
  }
  return () => {
    const { dialogCount: d } = gi(), f = Eg(s.default?.() ?? []), m = f.length > 0 && f.some((g) => g.type !== Ke);
    let h;
    return m ? (a || ([l, a] = Uc()), h = bs("div", {
      key: e.viewKey,
      ref: o,
      class: [i, l === d && $t.isCurrent],
      style: {
        zIndex: l + 1e3
      },
      tabindex: 0
    }, f)) : (a?.(), a = null), bs(ec, { defer: !0, disabled: !h, to: Y1 }, [
      bs(r, t, {
        default: () => h
      })
    ]);
  };
}
const J1 = { key: 1 };
var bu = /* @__PURE__ */ U({
  __name: "FluxFormFieldAddition",
  props: {
    icon: {},
    message: {},
    mode: { default: "hint" }
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(xt)(
        t.mode === "error" && c(ue).formFieldAdditionError,
        t.mode === "hint" && c(ue).formFieldAdditionHint
      )),
      role: "alert"
    }, [
      t.icon ? (v(), _(dt, {
        key: 0,
        class: E(c(ue).formFieldAdditionIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : J("", !0),
      t.message ? (v(), N("span", J1, ge(t.message), 1)) : J("", !0),
      re(e.$slots, "default")
    ], 2));
  }
});
const Q1 = ["for"];
var Un = /* @__PURE__ */ U({
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
    const e = nh(), n = bl(), s = wi();
    return On(Rc, {
      id: n
    }), (i, r) => (v(), N("div", {
      class: E(c(ue).formField)
    }, [
      we("label", {
        for: c(n),
        class: E(c(ue).formFieldHeader)
      }, [
        we("span", {
          class: E(c(ue).formFieldLabel)
        }, ge(t.label), 3),
        t.isOptional ? (v(), N("span", {
          key: 0,
          class: E(c(ue).formFieldOptional)
        }, " (" + ge(c(s)("flux.optional")) + ") ", 3)) : J("", !0),
        "value" in e ? (v(), N("span", {
          key: 1,
          class: E(c(ue).formFieldValue)
        }, [
          re(i.$slots, "value", ra(qi({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
        ], 2)) : J("", !0)
      ], 10, Q1),
      re(i.$slots, "default", ra(qi({ id: c(n) }))),
      t.currentLength && t.maxLength && t.maxLength > 0 ? (v(), N("span", {
        key: 0,
        class: E(c(ue).formFieldCounter)
      }, ge(t.currentLength) + " / " + ge(t.maxLength), 3)) : J("", !0),
      t.error ? (v(), _(bu, {
        key: 1,
        icon: "circle-exclamation",
        mode: "error",
        message: t.error
      }, null, 8, ["message"])) : J("", !0),
      t.hint ? (v(), _(bu, {
        key: 2,
        icon: "circle-info",
        message: t.hint
      }, null, 8, ["message"])) : J("", !0),
      re(i.$slots, "addition", ra(qi({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
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
    return (e, n) => (v(), _(Ur, wt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(Xn).primaryButton,
      "css-class-icon": c(Xn).primaryButtonIcon,
      "css-class-label": c(Xn).primaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), Il({ _: 2 }, [
      ct(c(rf), (s) => ({
        name: s,
        fn: W(() => [
          re(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
}), ku = /* @__PURE__ */ U({
  __name: "FluxFormSelect",
  props: /* @__PURE__ */ dn({
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
    const e = fn(t, "searchQuery"), n = fn(t, "modelValue"), s = As(cn(() => t.disabled)), { groups: i, selected: r, values: a } = Wv(n, t.isMultiple, cn(() => t.options), e);
    function l(u) {
      c(t.isMultiple) && (n.value = c(a).filter((d) => d !== u));
    }
    function o(u) {
      c(t.isMultiple) ? n.value = [...c(a), u] : n.value = u;
    }
    return (u, d) => (v(), _(c(Z1), {
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
}), X1 = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "FluxDisabled",
  props: {
    disabled: { type: Boolean, default: !0 }
  },
  setup(t) {
    return On(Nc, cn(() => t.disabled)), (e, n) => re(e.$slots, "default");
  }
}), ew = /* @__PURE__ */ U({
  __name: "FluxFormColumn",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(ue).formColumn)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
}), Pl = /* @__PURE__ */ U({
  __name: "FluxPaneFooter",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(Ut).paneFooter)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const tw = ["aria-disabled"];
var nw = /* @__PURE__ */ U({
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
    return (i, r) => (v(), _(X1, { disabled: t.disabled }, {
      default: W(() => [
        we("form", {
          class: E(c(ue).form),
          "aria-disabled": t.disabled ? !0 : void 0,
          onSubmit: r[0] || (r[0] = El((a) => s(), ["prevent"]))
        }, [
          re(i.$slots, "default")
        ], 42, tw)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
}), sw = /* @__PURE__ */ U({
  __name: "FluxFormInputGroup",
  props: {
    isSecondary: { type: Boolean },
    isCondensed: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(xt)(
        c(ue).formInputGroup,
        t.isCondensed && c(ue).isCondensed,
        t.isSecondary && c(ue).isSecondary
      )),
      role: "textbox"
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const iw = ["id", "autocomplete", "autofocus", "disabled", "maxlength", "placeholder", "aria-disabled"];
var rw = /* @__PURE__ */ U({
  __name: "FluxFormTextArea",
  props: /* @__PURE__ */ dn({
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
  emits: /* @__PURE__ */ dn(["blur", "focus"], ["update:modelValue"]),
  setup(t, { emit: e }) {
    const n = e, s = fn(t, "modelValue"), i = As(cn(() => t.disabled)), { id: r } = $l();
    return (a, l) => vl((v(), N("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (o) => s.value = o),
      ref: "input",
      class: E(c(i) ? c(ue).formTextAreaDisabled : c(ue).formTextAreaEnabled),
      id: c(r),
      autocomplete: t.autoComplete,
      autofocus: t.autoFocus,
      disabled: c(i),
      maxlength: t.maxLength,
      placeholder: t.placeholder,
      style: st({
        "--rows": t.rows
      }),
      "aria-disabled": c(i) ? !0 : void 0,
      onBlur: l[1] || (l[1] = (o) => n("blur")),
      onFocus: l[2] || (l[2] = (o) => n("focus"))
    }, null, 46, iw)), [
      [or, s.value]
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
    return K1(
      e,
      t,
      n,
      s,
      xt(
        t.size === "small" && $t.overlaySmall,
        t.size === "medium" && $t.overlayMedium,
        t.size === "large" && $t.overlayLarge
      ),
      yb
    );
  }
});
const aw = { key: 0 }, lw = { key: 1 };
var Zr = /* @__PURE__ */ U({
  __name: "FluxPaneHeader",
  props: {
    icon: {},
    subTitle: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(c(Ut).paneHeader)
    }, [
      re(e.$slots, "before"),
      t.icon ? (v(), _(dt, {
        key: 0,
        class: E(c(Ut).paneHeaderIcon),
        size: 20,
        name: t.icon
      }, null, 8, ["class", "name"])) : J("", !0),
      t.title || t.subTitle ? (v(), N("div", {
        key: 1,
        class: E(c(Ut).paneHeaderCaption)
      }, [
        t.title ? (v(), N("strong", aw, ge(t.title), 1)) : J("", !0),
        t.subTitle ? (v(), N("span", lw, ge(t.subTitle), 1)) : J("", !0)
      ], 2)) : J("", !0),
      re(e.$slots, "after")
    ], 2));
  }
}), ow = /* @__PURE__ */ U({
  __name: "FluxAlert",
  props: {
    alert: {}
  },
  setup(t) {
    const e = wi();
    return (n, s) => (v(), _(qr, null, {
      default: W(() => [
        M(Zr, {
          icon: t.alert.icon,
          title: t.alert.title
        }, null, 8, ["icon", "title"]),
        M(fi, {
          innerHTML: t.alert.message
        }, null, 8, ["innerHTML"]),
        M(Pl, null, {
          default: W(() => [
            M(jr),
            M(Gr, {
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
}), uw = /* @__PURE__ */ U({
  __name: "FluxConfirm",
  props: {
    confirm: {}
  },
  setup(t) {
    const e = wi();
    return (n, s) => (v(), _(qr, null, {
      default: W(() => [
        M(Zr, {
          icon: t.confirm.icon,
          title: t.confirm.title
        }, null, 8, ["icon", "title"]),
        M(fi, {
          innerHTML: t.confirm.message
        }, null, 8, ["innerHTML"]),
        M(Pl, null, {
          default: W(() => [
            M(jr),
            M(Cs, {
              label: c(e)("flux.cancel"),
              onClick: s[0] || (s[0] = (i) => t.confirm.onCancel())
            }, null, 8, ["label"]),
            M(Gr, {
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
}), cw = /* @__PURE__ */ U({
  __name: "FluxPrompt",
  props: {
    prompt: {}
  },
  setup(t) {
    const e = sn("input"), n = wi(), s = ee(""), i = Ae(() => c(s).trim().length > 0);
    gn(() => {
      const a = c(e);
      requestAnimationFrame(() => a?.$el.querySelector("input")?.focus());
    });
    function r(a) {
      !c(i) || a.key !== "Enter" || t.prompt.onConfirm(c(s));
    }
    return (a, l) => (v(), _(qr, null, {
      default: W(() => [
        M(Zr, {
          icon: t.prompt.icon,
          title: t.prompt.title
        }, null, 8, ["icon", "title"]),
        M(fi, {
          innerHTML: t.prompt.message
        }, null, 8, ["innerHTML"]),
        M(fi, null, {
          default: W(() => [
            M(Un, {
              label: t.prompt.fieldLabel
            }, {
              default: W(() => [
                M(pr, {
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
        M(Pl, null, {
          default: W(() => [
            M(jr),
            M(Cs, {
              label: c(n)("flux.cancel"),
              onClick: l[1] || (l[1] = (o) => t.prompt.onCancel())
            }, null, 8, ["label"]),
            M(Gr, {
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
}), dw = /* @__PURE__ */ U({
  __name: "FluxOverlayProvider",
  setup(t) {
    const { alerts: e, confirms: n, prompts: s } = gi();
    return (i, r) => (v(), N(de, null, [
      we("div", {
        class: E(c($t).overlayProvider)
      }, [
        we("div", {
          class: E(c($t).overlayShade)
        }, null, 2)
      ], 2),
      M(Ki, { size: "medium" }, {
        default: W(() => [
          (v(!0), N(de, null, ct(c(e), (a) => (v(), _(ow, {
            key: a.id,
            alert: a
          }, null, 8, ["alert"]))), 128))
        ]),
        _: 1
      }),
      M(Ki, { size: "medium" }, {
        default: W(() => [
          (v(!0), N(de, null, ct(c(n), (a) => (v(), _(uw, {
            key: a.id,
            confirm: a
          }, null, 8, ["confirm"]))), 128))
        ]),
        _: 1
      }),
      M(Ki, { size: "medium" }, {
        default: W(() => [
          (v(!0), N(de, null, ct(c(s), (a) => (v(), _(cw, {
            key: a.id,
            prompt: a
          }, null, 8, ["prompt"]))), 128))
        ]),
        _: 1
      })
    ], 64));
  }
});
const fw = "progressBar", hw = "progressBarTrack", mw = "progressBarValue", pw = "progressBarValueComplete progressBarValue", gw = "progressBarValueIncomplete progressBarValue", vw = "progressBarTrackIndeterminate progressBarTrack", yw = "progressBarIndeterminate", bw = "progressBarInfo", kw = "progressBarProgress", ww = "progressBarStatus", Iw = "basePaneStructure";
var wn = { progressBar: fw, progressBarTrack: hw, progressBarValue: mw, progressBarValueComplete: pw, progressBarValueIncomplete: gw, progressBarTrackIndeterminate: vw, progressBarIndeterminate: yw, progressBarInfo: bw, progressBarProgress: kw, progressBarStatus: ww, basePaneStructure: Iw }, Sw = /* @__PURE__ */ U({
  __name: "FluxProgressBar",
  props: {
    isIndeterminate: { type: Boolean },
    max: { default: 1 },
    min: { default: 0 },
    status: {},
    value: {}
  },
  setup(t) {
    const e = Ae(() => t.isIndeterminate ? 0 : ((t.value ?? t.min) - t.min) / (t.max - t.min)), n = Ae(() => new Intl.NumberFormat(navigator.language, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(c(e) ?? 0));
    return (s, i) => (v(), _(af, {
      class: E(c(wn).progressBar),
      gap: 6,
      role: "progressbar",
      "aria-valuenow": t.value,
      "aria-valuemax": t.max,
      "aria-valuemin": t.min
    }, {
      default: W(() => [
        we("div", {
          class: E(t.isIndeterminate ? c(wn).progressBarTrackIndeterminate : c(wn).progressBarTrack)
        }, [
          we("div", {
            class: E(e.value >= 1 ? c(wn).progressBarValueComplete : c(wn).progressBarValueIncomplete),
            style: st({
              width: `${t.isIndeterminate ? 100 : e.value * 100}%`
            })
          }, null, 6)
        ], 2),
        t.status ? (v(), N("div", {
          key: 0,
          class: E(c(wn).progressBarInfo)
        }, [
          M(c(ol), null, {
            default: W(() => [
              (v(), N("span", {
                key: t.status,
                class: E(c(wn).progressBarStatus)
              }, ge(t.status), 3))
            ]),
            _: 1
          }),
          M(c(ol), null, {
            default: W(() => [
              t.isIndeterminate ? J("", !0) : (v(), N("span", {
                key: 0,
                class: E(c(wn).progressBarProgress)
              }, ge(n.value), 3))
            ]),
            _: 1
          })
        ], 2)) : J("", !0)
      ]),
      _: 1
    }, 8, ["class", "aria-valuenow", "aria-valuemax", "aria-valuemin"]));
  }
});
const Tw = ["disabled", "max", "min", "step"];
var xw = /* @__PURE__ */ U({
  __name: "FluxQuantitySelector",
  props: /* @__PURE__ */ dn({
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
    const e = fn(t, "modelValue"), n = As(cn(() => t.disabled)), s = sn("input"), i = ee(0);
    function r() {
      c(n) || (e.value = Math.max(t.min, c(e) - t.step));
    }
    function a() {
      c(n) || (e.value = Math.min(t.max, c(e) + t.step));
    }
    function l() {
      const o = ut(s);
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
    }), (o, u) => (v(), _(wy, {
      class: E(c(ue).quantitySelector),
      "aria-disabled": c(n) ? !0 : void 0
    }, {
      default: W(() => [
        M(Cs, {
          class: E(c(ue).quantitySelectorButton),
          disabled: c(n) || e.value <= t.min,
          "icon-leading": "minus",
          tabindex: "-1",
          onClick: r
        }, null, 8, ["class", "disabled"]),
        vl(we("input", {
          ref: "input",
          "onUpdate:modelValue": u[0] || (u[0] = (d) => e.value = d),
          class: E(c(ue).quantitySelectorInput),
          style: st({
            width: `${i.value}px`
          }),
          disabled: c(n),
          tabindex: "0",
          type: "number",
          max: t.max,
          min: t.min,
          step: t.step
        }, null, 14, Tw), [
          [or, e.value]
        ]),
        M(Cs, {
          class: E(c(ue).quantitySelectorButton),
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
const { basePane: rs } = zr, Cw = `snackbar ${rs}`, Ew = "action", Aw = "progressBar", Fw = "progressBarTrack", $w = "snackbarContent", Ow = "icon", Mw = "spinner", Bw = "snackbarBody", Lw = "snackbarMessage", Dw = "snackbarSubMessage", _w = "snackbarTitle", Vw = "snackbarAction", Nw = "snackbarActions", Rw = `snackbarGray snackbar ${rs}`, Pw = `snackbarPrimary snackbar ${rs}`, Hw = "spinnerEffect", Ww = "spinnerValue", zw = `snackbarDanger snackbar ${rs}`, Uw = `snackbarInfo snackbar ${rs}`, qw = `snackbarSuccess snackbar ${rs}`, jw = `snackbarWarning snackbar ${rs}`, Gw = "snackbars", Zw = "snackbarsEnterActive", Yw = "snackbarsLeaveActive", Kw = "snackbarsMove", Jw = "snackbarsEnterFrom", Qw = "snackbarsLeaveTo";
var Ue = { snackbar: Cw, action: Ew, progressBar: Aw, progressBarTrack: Fw, snackbarContent: $w, icon: Ow, spinner: Mw, snackbarBody: Bw, snackbarMessage: Lw, snackbarSubMessage: Dw, snackbarTitle: _w, snackbarAction: Vw, snackbarActions: Nw, snackbarGray: Rw, snackbarPrimary: Pw, spinnerEffect: Hw, spinnerValue: Ww, snackbarDanger: zw, snackbarInfo: Uw, snackbarSuccess: qw, snackbarWarning: jw, snackbars: Gw, snackbarsEnterActive: Zw, snackbarsLeaveActive: Yw, snackbarsMove: Kw, snackbarsEnterFrom: Jw, snackbarsLeaveTo: Qw };
const Xw = ["onClick"];
var eI = /* @__PURE__ */ U({
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
    const n = e, s = Zt(), i = ee(null), r = Ae(() => t.actions && Object.entries(t.actions).length > 0);
    kl(() => {
      i.value && ur(i.value);
    });
    function a(o) {
      n("action", o);
    }
    function l() {
      n("close");
    }
    return $r(() => {
      i.value && jc(i.value, s.props);
    }), Le(() => t.isRendered, () => {
      if (t.isRendered) {
        i.value && ur(i.value);
        return;
      }
      let o = s.props;
      o.onAction = a, o.onClose = l, i.value = Al(o);
    }, { immediate: !0 }), (o, u) => t.isRendered ? (v(), N("div", {
      key: 0,
      class: E(c(xt)(
        t.color === "gray" && c(Ue).snackbarGray,
        t.color === "primary" && c(Ue).snackbarPrimary,
        t.color === "danger" && c(Ue).snackbarDanger,
        t.color === "info" && c(Ue).snackbarInfo,
        t.color === "success" && c(Ue).snackbarSuccess,
        t.color === "warning" && c(Ue).snackbarWarning
      ))
    }, [
      we("div", {
        class: E(c(Ue).snackbarContent)
      }, [
        t.isLoading ? (v(), _(Ln, {
          key: 0,
          size: 18
        })) : t.icon ? (v(), _(dt, {
          key: 1,
          size: 18,
          name: t.icon
        }, null, 8, ["name"])) : J("", !0),
        we("div", {
          class: E(c(Ue).snackbarBody)
        }, [
          t.title ? (v(), N("div", {
            key: 0,
            class: E(c(Ue).snackbarTitle)
          }, ge(t.title), 3)) : J("", !0),
          t.message ? (v(), N("div", {
            key: 1,
            class: E(c(Ue).snackbarMessage)
          }, ge(t.message), 3)) : J("", !0),
          t.progressIndeterminate || t.progressValue ? (v(), _(Sw, {
            key: 2,
            "is-indeterminate": t.progressIndeterminate,
            max: t.progressMax,
            min: t.progressMin,
            status: t.progressStatus,
            value: t.progressValue
          }, null, 8, ["is-indeterminate", "max", "min", "status", "value"])) : J("", !0),
          t.subMessage ? (v(), N("div", {
            key: 3,
            class: E(c(Ue).snackbarSubMessage)
          }, ge(t.subMessage), 3)) : J("", !0)
        ], 2)
      ], 2),
      r.value ? (v(), N("div", {
        key: 0,
        class: E(c(Ue).snackbarActions)
      }, [
        (v(!0), N(de, null, ct(t.actions, (d, f) => (v(), N("button", {
          key: f,
          class: E(c(Ue).snackbarAction),
          tabindex: "-1",
          type: "button",
          onClick: (m) => a(f)
        }, [
          we("span", null, ge(d), 1)
        ], 10, Xw))), 128))
      ], 2)) : J("", !0),
      t.isCloseable ? (v(), _(Hv, {
        key: 1,
        icon: "xmark",
        onClick: u[0] || (u[0] = (d) => l())
      })) : J("", !0)
    ], 2)) : J("", !0);
  }
}), tI = /* @__PURE__ */ U({
  __name: "FluxSnackbarProvider",
  setup(t) {
    const { snackbars: e } = gi();
    function n(s) {
      return (i) => s.onAction?.(i);
    }
    return (s, i) => (v(), _(Dc, {
      name: "flux-snackbars",
      tag: "div",
      class: E(c(Ue).snackbars),
      "enter-active-class": c(Ue).snackbarsEnterActive,
      "enter-from-class": c(Ue).snackbarsEnterFrom,
      "leave-active-class": c(Ue).snackbarsLeaveActive,
      "leave-to-class": c(Ue).snackbarsLeaveTo,
      "move-class": c(Ue).snackbarsMove
    }, {
      default: W(() => [
        (v(!0), N(de, null, ct(c(e).toReversed(), (r) => (v(), _(eI, wt({
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
const nI = "tooltip", sI = "tooltipAbove tooltip", iI = "tooltipBelow tooltip", rI = "tooltipEnd tooltip", aI = "tooltipStart tooltip";
var Hs = { tooltip: nI, tooltipAbove: sI, tooltipBelow: iI, tooltipEnd: rI, tooltipStart: aI }, lI = U(() => {
  const { tooltip: t } = gi(), e = ee(null), n = ee(null), s = Ae(() => c(t) ? c(t).contentSlot?.() ?? [c(t).content] : null), i = Ae(() => !!c(t));
  function r() {
    const a = ut(e), l = c(t);
    if (!l || !a || !c(s)) {
      n.value = null;
      return;
    }
    const { direction: o, origin: u } = l, d = 9, f = 15;
    if (!u) {
      n.value = null;
      return;
    }
    let { width: m, height: h } = a.getBoundingClientRect();
    const { scale: g } = getComputedStyle(a), { top: b, left: k, width: I, height: D } = u.getBoundingClientRect();
    let w = Number(g ?? 1);
    w = isNaN(w) ? 1 : w, h /= w, m /= w, o === "horizontal" ? n.value = oI(b, k, m, h, I, D, d, f) : n.value = uI(b, k, m, h, I, D, d, f);
  }
  return On(Qh, {
    calculate: r
  }), Le(s, () => requestAnimationFrame(r)), () => bs(bb, {}, {
    default: () => {
      if (!c(i))
        return;
      const a = c(n);
      return bs("div", {
        ref: e,
        class: a ? xt(
          a.transition === "above" && Hs.tooltipAbove,
          a.transition === "below" && Hs.tooltipBelow,
          a.transition === "end" && Hs.tooltipEnd,
          a.transition === "start" && Hs.tooltipStart
        ) : Hs.tooltip,
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
function oI(t, e, n, s, i, r, a, l) {
  let o, u, d, f, m, h;
  if (e > innerWidth / 2 ? (o = e - n - a, u = t + r / 2 - s / 2, d = "315deg", f = "100%", m = "50%", h = "start") : (o = e + i + a, u = t + r / 2 - s / 2, d = "135deg", f = "0", m = "50%", h = "end"), u + s > innerHeight - l) {
    const g = Math.min(u, innerHeight - s - l) - u;
    m = `calc(50% - ${g}px)`, u += g;
  }
  if (u < l) {
    const g = Math.max(u, l) - u;
    m = `calc(50% - ${g}px)`, u += g;
  }
  return {
    x: Math.round(o),
    y: Math.round(u),
    arrowAngle: d,
    arrowX: f,
    arrowY: m,
    transition: h
  };
}
function uI(t, e, n, s, i, r, a, l) {
  let o, u, d, f, m, h;
  if (t > 300 ? (o = e + i / 2 - n / 2, u = t - s - a, d = "45deg", f = "50%", m = "100%", h = "above") : (o = e + i / 2 - n / 2, u = t + r + a, d = "225deg", f = "50%", m = "0", h = "below"), o + n > innerWidth - l) {
    const g = Math.min(o, innerWidth - n - l) - o;
    f = `calc(50% - ${g}px)`, o += g;
  }
  if (o < l) {
    const g = Math.max(o, l) - o;
    f = `calc(50% - ${g}px)`, o += g;
  }
  return {
    x: Math.round(o),
    y: Math.round(u),
    arrowAngle: d,
    arrowX: f,
    arrowY: m,
    transition: h
  };
}
const cI = "root", dI = "isLocked";
var Oa = { root: cI, isLocked: dI };
const fI = ["inert"];
var hI = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "FluxRoot",
  setup(t) {
    const { inertMain: e } = gi();
    return Le(e, (n, s, i) => {
      n && (document.body.classList.add(Oa.isLocked), i(() => document.body.classList.remove(Oa.isLocked)));
    }, { immediate: !0 }), (n, s) => (v(), N(de, null, [
      we("div", wt(n.$attrs, {
        class: c(Oa).root,
        inert: c(e)
      }), [
        re(n.$slots, "default")
      ], 16, fI),
      M(dw),
      M(tI),
      M(lI)
    ], 64));
  }
});
function as() {
  return (t) => Homey.__(t) ?? t;
}
function mI(t, e) {
  const n = /* @__PURE__ */ Em(t, e);
  return () => {
    const s = n(), i = Object.getOwnPropertyNames(s), r = Am(s), a = {};
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
var of = mI("list", () => {
  const t = ee(!0), e = ee([]), n = ee(null), s = ee([]), i = Ae(() => {
    const h = Object.groupBy(c(e), (b) => b.category ?? "__other__"), g = Object.entries(h).sort(([b], [k]) => b === "__other__" ? 1 : k === "__other__" ? -1 : b.localeCompare(k));
    return Object.fromEntries(g);
  }), r = Ae(() => c(e).length > 0);
  async function a(h, g, b) {
    const k = c(e).findIndex((I) => I.id === g.id);
    k !== -1 && (e.value[k].checked = b, b ? await Homey.api("POST", `/${h}/items/${g.id}/checked`) : await Homey.api("POST", `/${h}/items/${g.id}/unchecked`));
  }
  async function l(h, g, b) {
    const k = c(e).findIndex((I) => I.id === g.id);
    k === -1 || g.quantity === void 0 || (e.value[k].quantity = b === "increase" ? g.quantity + 1 : g.quantity - 1, await Homey.api("POST", `/${h}/items/${g.id}/quantity`, {
      quantity: b === "increase" ? 1 : -1
    }));
  }
  async function o(h) {
    t.value = !0, await m(
      await Homey.api("GET", `/${h}/items`)
    ), t.value = !1;
  }
  async function u(h) {
    t.value = !0, n.value = await Homey.api("GET", `/${h}`), t.value = !1;
  }
  async function d(h) {
    t.value = !0, s.value = await Homey.api("GET", `/${h}/persons`), t.value = !1;
  }
  async function f(h, g) {
    const b = c(e).findIndex((k) => k.id === g.id);
    b !== -1 && (e.value.splice(b, 1), await Homey.api("DELETE", `/${h}/items/${g.id}`));
  }
  async function m(h) {
    e.value = h;
  }
  return {
    isLoading: jn(t),
    items: jn(e),
    look: jn(n),
    persons: jn(s),
    categorizedItems: i,
    hasItems: r,
    changeChecked: a,
    changeQuantity: l,
    loadItems: o,
    loadLook: u,
    loadPersons: d,
    removeItem: f,
    setItems: m
  };
}), pI = /* @__PURE__ */ U({
  __name: "ListAdd",
  props: {
    deviceId: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = as(), {
      look: i,
      persons: r,
      loadItems: a,
      loadPersons: l
    } = of(), o = mn({
      type: "note",
      content: "",
      person: null,
      due: null,
      quantity: 1
    }), u = Ae(() => o.content.trim().length > 2), d = Ae(() => [
      { value: null, label: s("widget.list.add.anyone") },
      ...c(r).map((g) => ({
        label: g.name,
        imageSrc: g.image,
        value: g.id
      }))
    ]), f = Ae(() => {
      const g = [];
      switch (c(i)?.type) {
        case "list":
          g.push({ value: "task", label: s("widget.list.add.task") }), g.push({ value: "note", label: s("widget.list.add.note") });
          break;
        case "grocery_list":
          g.push({ value: "product", label: s("widget.list.add.product") }), g.push({ value: "note", label: s("widget.list.add.note") });
          break;
      }
      return g;
    });
    gn(async () => {
      await l(t.deviceId);
    });
    async function m() {
      n("close");
    }
    async function h() {
      await Homey.api("POST", `/${t.deviceId}/items`, {
        type: o.type,
        content: o.content,
        personId: o.person,
        due: o.due,
        quantity: o.quantity
      }), await a(t.deviceId), await m();
    }
    return Le([i, f], ([g, b]) => {
      o.type = b[0]?.value ?? "-";
    }, { immediate: !0 }), (g, b) => (v(), _(c(qr), { style: { "max-height": "calc(100dvh - 30px)", width: "calc(100dvw - 30px)", "overflow-x": "hidden" } }, {
      default: W(() => [
        M(c(Zr), {
          title: c(s)("widget.list.add.title")
        }, null, 8, ["title"]),
        M(c(fi), null, {
          default: W(() => [
            M(c(nw), null, {
              default: W(() => [
                M(c(ew), null, {
                  default: W(() => [
                    f.value.length > 1 ? (v(), _(c(Un), {
                      key: 0,
                      label: c(s)("widget.list.add.type")
                    }, {
                      default: W(() => [
                        M(c(ku), {
                          modelValue: o.type,
                          "onUpdate:modelValue": b[0] || (b[0] = (k) => o.type = k),
                          options: f.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : J("", !0),
                    o.type === "product" ? (v(), N(de, { key: 1 }, [
                      M(c(Un), {
                        label: c(s)("widget.list.add.product")
                      }, {
                        default: W(() => [
                          M(c(pr), {
                            modelValue: o.content,
                            "onUpdate:modelValue": b[1] || (b[1] = (k) => o.content = k)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      M(c(Un), {
                        label: c(s)("widget.list.add.quantity")
                      }, {
                        default: W(() => [
                          M(c(xw), {
                            modelValue: o.quantity,
                            "onUpdate:modelValue": b[2] || (b[2] = (k) => o.quantity = k),
                            min: 1,
                            step: 1,
                            style: { "align-self": "start" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ], 64)) : (v(), _(c(Un), {
                      key: 2,
                      label: c(s)("widget.list.add.content")
                    }, {
                      default: W(() => [
                        M(c(rw), {
                          modelValue: o.content,
                          "onUpdate:modelValue": b[3] || (b[3] = (k) => o.content = k),
                          rows: 2
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])),
                    o.type === "task" ? (v(), _(c(Un), {
                      key: 3,
                      "is-optional": "",
                      label: c(s)("widget.list.add.person")
                    }, {
                      default: W(() => [
                        M(c(ku), {
                          modelValue: o.person,
                          "onUpdate:modelValue": b[4] || (b[4] = (k) => o.person = k),
                          options: d.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : J("", !0),
                    o.type === "task" ? (v(), _(c(Un), {
                      key: 4,
                      "is-optional": "",
                      label: c(s)("widget.list.add.due")
                    }, {
                      default: W(() => [
                        M(c(sw), null, {
                          default: W(() => [
                            M(c(pr), {
                              modelValue: o.due,
                              "onUpdate:modelValue": b[5] || (b[5] = (k) => o.due = k),
                              type: "datetime-local"
                            }, null, 8, ["modelValue"]),
                            M(c(Cs), {
                              "icon-leading": "trash",
                              onClick: b[6] || (b[6] = (k) => o.due = null)
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : J("", !0),
                    M(c(a0), { style: { width: "100%" } }, {
                      default: W(() => [
                        M(c(Cs), {
                          label: c(s)("widget.list.add.cancel"),
                          style: { "flex-grow": "1" },
                          onClick: b[7] || (b[7] = (k) => m())
                        }, null, 8, ["label"]),
                        M(c(Gr), {
                          disabled: !u.value,
                          label: c(s)("widget.list.add.submit"),
                          style: { "flex-grow": "1" },
                          onClick: b[8] || (b[8] = (k) => h())
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
}), uf = /* @__PURE__ */ U({
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
    return (i, r) => (v(), N("button", {
      class: "homey-button-primary-full",
      type: "button",
      onClick: s
    }, ge(t.label), 1));
  }
}), WT = /* @__PURE__ */ U({
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
    return (i, r) => (v(), N("button", {
      class: "homey-button-transparent",
      type: "button",
      onClick: s
    }, ge(t.label), 1));
  }
});
const Hl = Symbol(), Wl = Symbol(), gI = ["title", "onClick"];
var vI = /* @__PURE__ */ U({
  __name: "ColorPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = fn(t, "modelValue"), n = as(), s = an(Hl);
    return (i, r) => (v(), N("div", {
      class: E(i.$style.colorSelect)
    }, [
      (v(!0), N(de, null, ct(c(s), (a) => (v(), N("div", {
        class: E(e.value === a.hex ? i.$style.colorSelectItemActive : i.$style.colorSelectItem),
        style: st({ "--color": a.hex }),
        title: c(n)(a.label),
        onClick: (l) => e.value = a.hex
      }, null, 14, gI))), 256))
    ], 2));
  }
});
const yI = "colorSelect", bI = "colorSelectItem", kI = "colorSelectItemActive colorSelectItem";
var wI = { colorSelect: yI, colorSelectItem: bI, colorSelectItemActive: kI }, ze = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, i] of e)
    n[s] = i;
  return n;
};
const II = {
  $style: wI
};
var cf = /* @__PURE__ */ ze(vI, [["__cssModules", II]]);
const SI = { class: "homey-form" };
var df = /* @__PURE__ */ U({
  __name: "Form",
  setup(t) {
    return (e, n) => (v(), N("form", SI, [
      re(e.$slots, "default")
    ]));
  }
});
const TI = { class: "homey-form-fieldset" }, xI = { class: "homey-form-legend" }, CI = {
  key: 0,
  class: "homey-form-group",
  style: { "margin-top": "6px" }
}, EI = {
  key: 1,
  class: "homey-form-group"
}, AI = { class: "homey-form-group" };
var ni = /* @__PURE__ */ U({
  __name: "FormGroup",
  props: {
    description: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (v(), N("fieldset", TI, [
      we("legend", xI, ge(t.title), 1),
      t.description ? (v(), N("div", CI, ge(t.description), 1)) : J("", !0),
      e.$slots.before ? (v(), N("div", EI, [
        re(e.$slots, "before")
      ])) : J("", !0),
      we("div", AI, [
        re(e.$slots, "default")
      ])
    ]));
  }
});
const FI = ["for"], $I = ["disabled", "id", "type"];
var ff = /* @__PURE__ */ U({
  __name: "FormInput",
  props: /* @__PURE__ */ dn({
    disabled: { type: Boolean },
    label: {},
    type: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    const e = fn(t, "modelValue"), n = bl();
    return (s, i) => (v(), N(de, null, [
      t.label ? (v(), N("label", {
        key: 0,
        class: "homey-form-label",
        for: c(n)
      }, ge(t.label), 9, FI)) : J("", !0),
      vl(we("input", {
        class: "homey-form-input",
        disabled: t.disabled,
        id: c(n),
        type: t.type,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.value = r)
      }, null, 8, $I), [
        [Uh, e.value]
      ])
    ], 64));
  }
}), OI = /* @__PURE__ */ U({
  __name: "Icon",
  props: {
    icon: {}
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(e.$style.uiIcon),
      "data-icon": "",
      style: st({
        "--icon": JSON.stringify(t.icon),
        "--icon-secondary": JSON.stringify(t.icon + t.icon)
      })
    }, null, 6));
  }
});
const MI = "uiIcon";
var BI = { uiIcon: MI };
const LI = {
  $style: BI
};
var Es = /* @__PURE__ */ ze(OI, [["__cssModules", LI]]), DI = /* @__PURE__ */ U({
  __name: "IconPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = fn(t, "modelValue"), n = as(), s = an(Wl), i = ee(""), r = Ae(() => {
      const a = c(i).toLowerCase().trim();
      return c(s).filter((l) => a.length > 0 && l.name.toLowerCase().includes(a) || a.length === 0 && l.unicode === c(e)).slice(0, 54);
    });
    return (a, l) => (v(), N(de, null, [
      M(ff, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (o) => i.value = o),
        label: c(n)("element.search_icon"),
        type: "text"
      }, null, 8, ["modelValue", "label"]),
      we("div", {
        class: E(a.$style.iconSelect)
      }, [
        (v(!0), N(de, null, ct(r.value, (o) => (v(), _(Es, {
          class: E(e.value === o.unicode ? a.$style.iconSelectItemActive : a.$style.iconSelectItem),
          icon: o.unicode,
          title: o.name,
          onClick: (u) => e.value = o.unicode
        }, null, 8, ["class", "icon", "title", "onClick"]))), 256))
      ], 2)
    ], 64));
  }
});
const _I = "iconSelect", VI = "iconSelectItem", NI = "iconSelectItemActive iconSelectItem";
var RI = { iconSelect: _I, iconSelectItem: VI, iconSelectItemActive: NI };
const PI = {
  $style: RI
};
var hf = /* @__PURE__ */ ze(DI, [["__cssModules", PI]]), zT = /* @__PURE__ */ U({
  __name: "ScrollContainer",
  props: {
    tag: { default: "div" }
  },
  setup(t) {
    const e = ee(null), n = ee(!1), s = ee(0), i = ee(0), r = ee(0), a = ee([]), l = ee(0), o = ee(0);
    let u = null;
    ss(() => {
      f();
    });
    function d(D, w) {
      const H = (1 - 1 / (Math.abs(D) * 0.55 / w + 1)) * w;
      return Math.sign(D) * H;
    }
    function f() {
      u && (cancelAnimationFrame(u), u = null);
    }
    function m() {
      const D = c(a);
      if (D.length === 0)
        return 0;
      let w = 0, P = 0;
      for (let L = 0; L < D.length; L++) {
        const H = L + 1;
        P += D[L] * H, w += H;
      }
      return P / w;
    }
    function h() {
      const D = c(e);
      if (!D)
        return;
      const w = c(r), P = D.clientHeight, L = d(w, P), H = Math.min(400, Math.max(200, Math.abs(L) * 3));
      D.style.transition = `transform ${H}ms cubic-bezier(0.25, 0.1, 0.25, 1)`, D.style.transform = "translateY(0)", r.value = 0;
    }
    function g(D) {
      const w = c(e);
      if (!w)
        return;
      const P = w.clientHeight;
      let L = D, H = performance.now();
      function K(B) {
        const $ = Math.min((B - H) / 16.67, 2);
        H = B;
        const Y = w.scrollHeight - w.clientHeight;
        L *= Math.pow(0.95, $);
        const R = w.scrollTop + L * $;
        if (R < 0) {
          w.scrollTop = 0;
          const te = Math.min(P * 0.3, Math.abs(L) * 8);
          r.value = te;
          const fe = d(te, P);
          w.style.transform = `translateY(${fe}px)`, requestAnimationFrame(() => h());
        } else if (R > Y) {
          w.scrollTop = Y;
          const te = -Math.min(P * 0.3, Math.abs(L) * 8);
          r.value = te;
          const fe = d(te, P);
          w.style.transform = `translateY(${fe}px)`, requestAnimationFrame(() => h());
        } else
          w.scrollTop = R, Math.abs(L) > 0.1 && (u = requestAnimationFrame(K));
      }
      u = requestAnimationFrame(K);
    }
    function b(D) {
      f();
      const w = c(e);
      if (!w)
        return;
      const P = D.touches[0];
      s.value = P.clientY, n.value = !0, l.value = P.clientY, o.value = Date.now(), a.value = [], i.value = w.scrollTop, w.style.transition = "none", r.value === 0 && (w.style.transform = "translateY(0)"), D.preventDefault();
    }
    function k(D) {
      if (!c(n))
        return;
      const w = c(e);
      if (!w)
        return;
      const P = D.touches[0], L = Date.now(), H = L - c(o);
      if (H > 0 && H < 100) {
        const R = (c(l) - P.clientY) / H * 16;
        a.value.push(R), a.value.length > 5 && a.value.shift();
      }
      l.value = P.clientY, o.value = L;
      const K = c(s) - P.clientY, B = w.scrollHeight - w.clientHeight, $ = c(i) + K, Y = w.clientHeight;
      if ($ < 0) {
        w.scrollTop = 0;
        const Q = -$;
        r.value = Q;
        const R = d(Q, Y);
        w.style.transform = `translateY(${R}px)`;
      } else if ($ > B) {
        w.scrollTop = B;
        const Q = -($ - B);
        r.value = Q;
        const R = d(Q, Y);
        w.style.transform = `translateY(${R}px)`;
      } else
        w.scrollTop = $, r.value = 0, w.style.transform = "translateY(0)";
      D.preventDefault();
    }
    function I(D) {
      if (!n.value)
        return;
      const w = e.value, P = m(), L = r.value !== 0;
      n.value = !1, w && L ? h() : w && Math.abs(P) > 0.5 && g(P), D.preventDefault();
    }
    return (D, w) => (v(), _(wl(t.tag), {
      ref_key: "containerRef",
      ref: e,
      onTouchstart: b,
      onTouchmove: k,
      onTouchend: I,
      onTouchcancel: I
    }, {
      default: W(() => [
        re(D.$slots, "default")
      ]),
      _: 3
    }, 544));
  }
}), HI = /* @__PURE__ */ U({
  __name: "ListHeader",
  props: {
    color: {},
    icon: {},
    name: {}
  },
  emits: ["add"],
  setup(t, { emit: e }) {
    const n = e;
    function s() {
      n("add");
    }
    return (i, r) => (v(), N("div", {
      class: E(i.$style.listHeader)
    }, [
      M(c(Es), {
        class: E(i.$style.listHeaderIcon),
        icon: t.icon,
        style: st({
          "--color": t.color
        })
      }, null, 8, ["class", "icon", "style"]),
      we("div", {
        class: E(["homey-text-bold", i.$style.listHeaderName])
      }, ge(t.name), 3),
      we("button", {
        class: E(i.$style.listHeaderAdd),
        onClick: r[0] || (r[0] = (a) => s())
      }, [
        M(c(Es), {
          class: E(i.$style.listHeaderAddIcon),
          icon: "+"
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
});
const WI = "listHeader", zI = "listHeaderIcon", UI = "listHeaderName", qI = "listHeaderAdd", jI = "listHeaderAddIcon";
var GI = { listHeader: WI, listHeaderIcon: zI, listHeaderName: UI, listHeaderAdd: qI, listHeaderAddIcon: jI };
const ZI = {
  $style: GI
};
var YI = /* @__PURE__ */ ze(HI, [["__cssModules", ZI]]), KI = /* @__PURE__ */ U({
  __name: "ListItemCategory",
  props: {
    name: {}
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(e.$style.listItemCategory)
    }, ge(t.name), 3));
  }
});
const JI = "listItemCategory";
var QI = { listItemCategory: JI };
const XI = {
  $style: QI
};
var wu = /* @__PURE__ */ ze(KI, [["__cssModules", XI]]);
const eS = ["aria-checked"];
var tS = /* @__PURE__ */ U({
  __name: "ListItem",
  props: {
    completable: { type: Boolean },
    direction: { default: "vertical" },
    icon: {},
    item: {},
    tappable: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      "aria-checked": "checked" in t.item && t.item?.checked ? "true" : "false",
      class: E([
        t.direction === "horizontal" ? e.$style.listItemHorizontal : e.$style.listItemVertical,
        t.completable && e.$style.isCompletable,
        t.tappable && e.$style.isTappable
      ])
    }, [
      M(ns, {
        mode: "out-in",
        name: "check"
      }, {
        default: W(() => [
          (v(), _(c(Es), {
            key: t.icon,
            class: E(e.$style.listItemIcon),
            icon: t.icon
          }, null, 8, ["class", "icon"]))
        ]),
        _: 1
      }),
      we("div", {
        class: E(e.$style.listItemBody)
      }, [
        re(e.$slots, "default")
      ], 2)
    ], 10, eS));
  }
});
const nS = "listItem", sS = "isTappable", iS = "listItemBody", rS = "listItemIcon", aS = "listItemHorizontal listItem", lS = "listItemVertical listItem", oS = "isCompletable";
var uS = { listItem: nS, isTappable: sS, listItemBody: iS, listItemIcon: rS, listItemHorizontal: aS, listItemVertical: lS, isCompletable: oS };
const cS = {
  $style: uS
};
var Yr = /* @__PURE__ */ ze(tS, [["__cssModules", cS]]), dS = /* @__PURE__ */ U({
  __name: "ListItemContent",
  props: {
    grow: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(t.grow ? e.$style.listItemContentGrow : e.$style.listItemContent),
      "data-content": ""
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const fS = "listItemContent", hS = "listItemContentGrow listItemContent";
var mS = { listItemContent: fS, listItemContentGrow: hS };
const pS = {
  $style: mS
};
var Kr = /* @__PURE__ */ ze(dS, [["__cssModules", pS]]), gS = /* @__PURE__ */ U({
  __name: "ListItemEmpty",
  setup(t) {
    const e = as();
    return (n, s) => (v(), _(Yr, {
      class: E(n.$style.listItemEmpty),
      icon: ""
    }, {
      default: W(() => [
        M(Kr, null, {
          default: W(() => [
            mi(ge(c(e)("widget.list.no_items")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const vS = "listItemEmpty";
var yS = { listItemEmpty: vS };
const bS = {
  $style: yS
};
var kS = /* @__PURE__ */ ze(gS, [["__cssModules", bS]]), wS = /* @__PURE__ */ U({
  __name: "ListItemMount",
  props: {
    longPressDuration: { default: 500 }
  },
  emits: ["longPress", "remove", "tap"],
  setup(t, { emit: e }) {
    const n = e, s = ee(!1), i = ee(!1), r = ee(0), a = ee(0), l = ee(0), o = ee(0), u = ee(!0), d = ee(!1), f = ee(null), m = ee(!1), h = Ae(() => {
      if (!s.value)
        return i.value ? -90 : 0;
      const w = r.value - l.value;
      return -Math.max(0, Math.min(90, w));
    });
    function g() {
      c(f) && (clearTimeout(c(f)), f.value = null);
    }
    function b() {
      i.value = !1, n("remove");
    }
    function k(w) {
      if (c(i))
        return;
      const P = w.touches[0];
      r.value = P.clientX, a.value = P.clientY, l.value = P.clientX, o.value = P.clientY, s.value = !0, u.value = !0, m.value = !1, d.value = w.target.closest("[data-interactive]") !== null, g(), f.value = setTimeout(() => {
        c(u) && !c(d) && (m.value = !0, n("longPress"));
      }, t.longPressDuration);
    }
    function I(w) {
      if (!c(s))
        return;
      const P = w.touches[0];
      l.value = P.clientX, o.value = P.clientY;
      const L = Math.abs(l.value - r.value), H = Math.abs(o.value - a.value);
      (L > 10 || H > 10) && (u.value = !1, g()), L > H && L > 5 && w.preventDefault();
    }
    function D(w) {
      if (g(), c(i)) {
        setTimeout(() => i.value = !1, 50), w.stopPropagation();
        return;
      }
      if (!c(s))
        return;
      s.value = !1;
      const P = r.value - l.value;
      if (c(u) && !c(d) && !c(m)) {
        n("tap");
        return;
      }
      i.value = P > 45;
    }
    return Le(i, (w, P, L) => {
      if (!w)
        return;
      const H = setTimeout(() => {
        i.value = !1;
      }, 3e3);
      L(() => clearTimeout(H));
    }), (w, P) => (v(), N("div", {
      class: E([
        w.$style.listItemMount,
        s.value && w.$style.isDragging,
        i.value && w.$style.isOpen
      ]),
      style: st({
        "--x": h.value + "px"
      })
    }, [
      we("div", {
        class: E(w.$style.listItemMountBody),
        onTouchstart: k,
        onTouchmove: I,
        onTouchend: D,
        onTouchcancel: D
      }, [
        re(w.$slots, "default")
      ], 34),
      we("div", {
        class: E(w.$style.listItemMountRemove),
        onClick: P[0] || (P[0] = (L) => b()),
        onTouchend: P[1] || (P[1] = El((L) => b(), ["stop", "prevent"]))
      }, [
        M(c(Es), {
          class: E(w.$style.listItemMountRemoveIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 34)
    ], 6));
  }
});
const IS = "listItemMount", SS = "listItemMountBody", TS = "listItemMountRemove", xS = "isDragging", CS = "isOpen", ES = "listItemMountRemoveIcon";
var AS = { listItemMount: IS, listItemMountBody: SS, listItemMountRemove: TS, isDragging: xS, isOpen: CS, listItemMountRemoveIcon: ES };
const FS = {
  $style: AS
};
var $S = /* @__PURE__ */ ze(wS, [["__cssModules", FS]]), OS = /* @__PURE__ */ U({
  __name: "ListItems",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(e.$style.listItems)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const MS = "listItems";
var BS = { listItems: MS };
const LS = {
  $style: BS
};
var Ma = /* @__PURE__ */ ze(OS, [["__cssModules", LS]]), DS = /* @__PURE__ */ U({
  __name: "ListItemNote",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (v(), _(Yr, {
      class: E(e.$style.listItemNote),
      icon: ""
    }, {
      default: W(() => [
        M(Kr, null, {
          default: W(() => [
            mi(ge(t.item.content), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const _S = "listItemNote";
var VS = { listItemNote: _S };
const NS = {
  $style: VS
};
var RS = /* @__PURE__ */ ze(DS, [["__cssModules", NS]]), PS = /* @__PURE__ */ U({
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
    return (i, r) => (v(), N("button", {
      class: E(i.$style.listItemButton),
      "data-interactive": "",
      onTouchend: El(s, ["stop", "prevent"])
    }, [
      M(c(Es), {
        class: E(i.$style.listItemButtonIcon),
        icon: t.icon
      }, null, 8, ["class", "icon"])
    ], 34));
  }
});
const HS = "listItemButton", WS = "listItemButtonIcon";
var zS = { listItemButton: HS, listItemButtonIcon: WS };
const US = {
  $style: zS
};
var Iu = /* @__PURE__ */ ze(PS, [["__cssModules", US]]), qS = /* @__PURE__ */ U({
  __name: "ListItemButtons",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(e.$style.listItemButtons)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const jS = "listItemButtons";
var GS = { listItemButtons: jS };
const ZS = {
  $style: GS
};
var YS = /* @__PURE__ */ ze(qS, [["__cssModules", ZS]]), KS = /* @__PURE__ */ U({
  __name: "ListItemQuantity",
  props: {
    quantity: {}
  },
  setup(t) {
    const e = new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }), n = Ae(() => e.format(t.quantity));
    return (s, i) => (v(), N("div", {
      class: E(s.$style.listItemQuantity)
    }, ge(n.value) + "x ", 3));
  }
});
const JS = "listItemQuantity";
var QS = { listItemQuantity: JS };
const XS = {
  $style: QS
};
var eT = /* @__PURE__ */ ze(KS, [["__cssModules", XS]]), tT = /* @__PURE__ */ U({
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
    return (r, a) => (v(), _(Yr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item,
      direction: "horizontal"
    }, {
      default: W(() => [
        M(Kr, null, {
          default: W(() => [
            mi(ge(t.item.content), 1)
          ]),
          _: 1
        }),
        M(ns, { name: "check" }, {
          default: W(() => [
            t.item.quantity && t.item.quantity > 1 ? (v(), _(eT, {
              key: 0,
              quantity: t.item.quantity
            }, null, 8, ["quantity"])) : J("", !0)
          ]),
          _: 1
        }),
        M(c(jr)),
        M(ns, { name: "check" }, {
          default: W(() => [
            t.item.checked ? J("", !0) : (v(), _(YS, { key: 0 }, {
              default: W(() => [
                t.item.quantity && t.item.quantity > 1 ? (v(), _(Iu, {
                  key: 0,
                  icon: "",
                  onTap: a[0] || (a[0] = (l) => s())
                })) : J("", !0),
                M(Iu, {
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
}), nT = /* @__PURE__ */ U({
  __name: "ListItemFooter",
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(e.$style.listItemFooter)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const sT = "listItemFooter";
var iT = { listItemFooter: sT };
const rT = {
  $style: iT
};
var aT = /* @__PURE__ */ ze(nT, [["__cssModules", rT]]);
const lT = ["src", "alt"];
var oT = /* @__PURE__ */ U({
  __name: "ListItemPerson",
  props: {
    image: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (v(), N("div", {
      class: E(e.$style.listItemPerson)
    }, [
      t.image ? (v(), N("img", {
        key: 0,
        class: E(e.$style.listItemPersonImage),
        src: t.image,
        alt: t.name
      }, null, 10, lT)) : J("", !0),
      we("span", null, ge(t.name), 1)
    ], 2));
  }
});
const uT = "listItemPerson", cT = "listItemPersonImage";
var dT = { listItemPerson: uT, listItemPersonImage: cT };
const fT = {
  $style: dT
};
var hT = /* @__PURE__ */ ze(oT, [["__cssModules", fT]]), mT = /* @__PURE__ */ U({
  __name: "ListItemDate",
  props: {
    due: {}
  },
  setup(t) {
    const e = new Intl.DateTimeFormat(navigator.language, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }), n = new Intl.DateTimeFormat(navigator.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }), s = new Intl.DateTimeFormat(navigator.language, {
      hour: "2-digit",
      minute: "2-digit"
    }), i = Ae(() => {
      if (!t.due)
        return null;
      const r = new Date(t.due), a = /* @__PURE__ */ new Date();
      return a.toDateString() === r.toDateString() ? `${Homey.__("widget.list.today_at")} ${s.format(r)}` : a.getFullYear() === r.getFullYear() ? e.format(r) : n.format(r);
    });
    return (r, a) => (v(), N("div", {
      class: E(r.$style.listItemDate)
    }, ge(i.value), 3));
  }
});
const pT = "listItemDate";
var gT = { listItemDate: pT };
const vT = {
  $style: gT
};
var yT = /* @__PURE__ */ ze(mT, [["__cssModules", vT]]), bT = /* @__PURE__ */ U({
  __name: "ListItemTask",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (v(), _(Yr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item
    }, {
      default: W(() => [
        M(Kr, null, {
          default: W(() => [
            mi(ge(t.item.content), 1)
          ]),
          _: 1
        }),
        t.item.due || t.item.person ? (v(), _(aT, { key: 0 }, {
          default: W(() => [
            t.item.person ? (v(), _(hT, {
              key: 0,
              image: t.item.person.image,
              name: t.item.person.name
            }, null, 8, ["image", "name"])) : J("", !0),
            t.item.due ? (v(), _(yT, {
              key: 1,
              due: t.item.due
            }, null, 8, ["due"])) : J("", !0)
          ]),
          _: 1
        })) : J("", !0)
      ]),
      _: 1
    }, 8, ["icon", "item"]));
  }
}), kT = /* @__PURE__ */ U({
  __name: "List",
  props: {
    deviceId: {}
  },
  setup(t) {
    const e = as(), {
      categorizedItems: n,
      hasItems: s,
      isLoading: i,
      look: r,
      changeChecked: a,
      changeQuantity: l,
      loadItems: o,
      loadLook: u,
      removeItem: d,
      setItems: f
    } = of(), m = ee(!1);
    async function h() {
      m.value = !0;
    }
    async function g(k) {
      switch (k.type) {
        case "product":
        case "task":
          await a(t.deviceId, k, !k.checked);
          break;
      }
    }
    async function b() {
      const k = document.querySelector("#app"), { height: I } = k.getBoundingClientRect();
      Homey.setHeight(c(m) ? Math.max(420, I) : I);
    }
    return Homey.on("list-items-changed", async ({ id: k, items: I }) => {
      k === t.deviceId && await f(I);
    }), Homey.on("list-look-changed", async (k) => k === t.deviceId && await u(t.deviceId)), Le([m, n], async () => {
      await b();
    }, { flush: "post" }), Le(() => t.deviceId, async () => {
      await u(t.deviceId), await o(t.deviceId);
    }, { immediate: !0 }), (k, I) => (v(), N(de, null, [
      c(r) ? (v(), _(YI, {
        key: 0,
        color: c(r).color,
        icon: c(r).icon,
        name: c(r).name,
        onAdd: I[0] || (I[0] = (D) => h())
      }, null, 8, ["color", "icon", "name"])) : J("", !0),
      M(ns, {
        mode: "out-in",
        name: "check",
        onEnter: I[3] || (I[3] = (D) => b())
      }, {
        default: W(() => [
          c(i) && !c(s) ? (v(), _(Ma, { key: 0 }, {
            default: W(() => [
              M(c(Ln))
            ]),
            _: 1
          })) : c(s) ? (v(), _(Ma, { key: 1 }, {
            default: W(() => [
              M(Dc, {
                name: "items",
                onAfterEnter: I[1] || (I[1] = (D) => b()),
                onAfterLeave: I[2] || (I[2] = (D) => b())
              }, {
                default: W(() => [
                  (v(!0), N(de, null, ct(c(n), (D, w, P) => (v(), N(de, { key: w }, [
                    w !== "__other__" ? (v(), _(wu, {
                      key: 0,
                      name: w
                    }, null, 8, ["name"])) : P > 0 ? (v(), _(wu, {
                      key: 1,
                      name: c(e)("widget.list.other")
                    }, null, 8, ["name"])) : J("", !0),
                    (v(!0), N(de, null, ct(D, (L) => (v(), _($S, {
                      key: L.id,
                      onLongPress: (H) => g(L),
                      onRemove: (H) => c(d)(t.deviceId, L),
                      onTap: (H) => g(L)
                    }, {
                      default: W(() => [
                        L.type === "note" ? (v(), _(RS, {
                          key: 0,
                          item: L
                        }, null, 8, ["item"])) : L.type === "product" ? (v(), _(tT, {
                          key: 1,
                          item: L,
                          onDecrease: (H) => c(l)(t.deviceId, L, "decrease"),
                          onIncrease: (H) => c(l)(t.deviceId, L, "increase")
                        }, null, 8, ["item", "onDecrease", "onIncrease"])) : L.type === "task" ? (v(), _(bT, {
                          key: 2,
                          item: L
                        }, null, 8, ["item"])) : J("", !0)
                      ]),
                      _: 2
                    }, 1032, ["onLongPress", "onRemove", "onTap"]))), 128))
                  ], 64))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (v(), _(Ma, { key: 2 }, {
            default: W(() => [
              M(kS)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }),
      M(c(Ki), null, {
        default: W(() => [
          m.value ? (v(), _(pI, {
            key: 0,
            "device-id": t.deviceId,
            onClose: I[4] || (I[4] = (D) => m.value = !1)
          }, null, 8, ["device-id"])) : J("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), wT = /* @__PURE__ */ U({
  __name: "ListWidget",
  setup(t) {
    const e = ee(null), n = ee(!1);
    return window.addEventListener("homeyReady", () => {
      const s = Homey.getDeviceIds();
      e.value = s[0] ?? null, n.value = !0, Homey.ready();
    }), (s, i) => (v(), _(c(hI), {
      class: E(s.$style.listWidget)
    }, {
      default: W(() => [
        n.value ? (v(), _(kT, {
          key: 0,
          "device-id": e.value
        }, null, 8, ["device-id"])) : J("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const IT = "listWidget";
var ST = { listWidget: IT };
const TT = {
  $style: ST
};
var xT = /* @__PURE__ */ ze(wT, [["__cssModules", TT]]), CT = /* @__PURE__ */ U({
  __name: "PairView",
  setup(t) {
    const e = as(), n = ee([]), s = ee([]), i = mn({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    gn(async () => {
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
    return On(Hl, n), On(Wl, s), (a, l) => (v(), _(c(df), {
      class: E(a.$style.pairView)
    }, {
      default: W(() => [
        M(c(ni), {
          title: c(e)("device.list.pair.name.title"),
          description: c(e)("device.list.pair.name.description")
        }, {
          default: W(() => [
            M(c(ff), {
              modelValue: i.name,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.name = o),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        M(c(ni), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: W(() => [
            M(c(cf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        M(c(ni), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: W(() => [
            M(c(hf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[2] || (l[2] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        M(c(uf), {
          label: c(e)("device.list.pair.submit"),
          onClick: l[3] || (l[3] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const ET = "pairView";
var AT = { pairView: ET };
const FT = {
  $style: AT
};
var $T = /* @__PURE__ */ ze(CT, [["__cssModules", FT]]), OT = /* @__PURE__ */ U({
  __name: "RepairView",
  setup(t) {
    const e = as(), n = ee([]), s = ee([]), i = mn({
      color: "#0ea5e9",
      icon: "",
      name: ""
    });
    gn(async () => {
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
    return On(Hl, n), On(Wl, s), (a, l) => (v(), _(c(df), {
      class: E(a.$style.repairView)
    }, {
      default: W(() => [
        M(c(ni), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: W(() => [
            M(c(cf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        M(c(ni), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: W(() => [
            M(c(hf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        M(c(uf), {
          label: c(e)("device.list.repair.submit"),
          onClick: l[2] || (l[2] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const MT = "repairView";
var BT = { repairView: MT };
const LT = {
  $style: BT
};
var DT = /* @__PURE__ */ ze(OT, [["__cssModules", LT]]);
var _T = {
  prefix: "far",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z"]
}, VT = {
  prefix: "far",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8l115.6 0c13.3 0 25.3 8.3 30 20.8L328 48 424 48c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48l96 0 16.2-43.2zm-84.6 448L28.7 144 76.9 144 99.5 449.2c.6 8.4 7.6 14.8 16 14.8l217.1 0c8.4 0 15.3-6.5 16-14.8l22.6-305.2 48.1 0-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3l-217.1 0c-33.5 0-61.3-25.9-63.8-59.3z"]
}, NT = {
  prefix: "far",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"]
}, RT = {
  prefix: "far",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M209.5 369c-9.4 9.4-24.6 9.4-33.9 0L15.5 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143 143-143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-160 160z"]
}, PT = {
  prefix: "far",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"]
}, HT = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  faAngleDown: RT,
  faCalendar: NT,
  faMinus: _T,
  faPlus: PT,
  faTrash: VT
});
Xh(HT);
function zl(t, e) {
  const n = Yh(t);
  return n.config.globalProperties.t = (s) => Homey.__(s) ?? s, n.use(wm()), n.mount(e), n;
}
function UT(t) {
  zl(xT, t);
}
function qT(t) {
  zl($T, t);
}
function jT(t) {
  zl(DT, t);
}
window.onHomeyReady = function() {
  window.dispatchEvent(new CustomEvent("homeyReady"));
};
export {
  uf as ButtonPrimary,
  WT as ButtonTransparent,
  cf as ColorPicker,
  df as Form,
  ni as FormGroup,
  ff as FormInput,
  Es as Icon,
  hf as IconPicker,
  zT as ScrollContainer,
  UT as createListWidget,
  qT as createPairView,
  jT as createRepairView,
  as as useTranslate
};
