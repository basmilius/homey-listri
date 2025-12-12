var ta, na;
let Wl, Qe, $e, js, Gs, Ji, Ma, Ul, Un, Ba;
function gr(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
let we = {}, gs = [], Wt = () => {
}, Iu = () => !1, vr = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || 97 > t.charCodeAt(2)), ol = (t) => t.startsWith("onUpdate:"), ze = Object.assign, ul = (t, e) => {
  let n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, pf = Object.prototype.hasOwnProperty, Ie = (t, e) => pf.call(t, e), X = Array.isArray, ae = (t) => typeof t == "function", Be = (t) => typeof t == "string", Bt = (t) => typeof t == "symbol", Ee = (t) => t !== null && typeof t == "object", Tu = (t) => (Ee(t) || ae(t)) && ae(t.then) && ae(t.catch), je = Object.prototype.toString, yr = (t) => Be(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Zs = gr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), br = (t) => {
  let e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, gf = /-\w/g, vt = br((t) => t.replace(gf, (e) => e.slice(1).toUpperCase())), vf = /\B([A-Z])/g, Vn = br((t) => t.replace(vf, "-$1").toLowerCase()), kr = br((t) => t.charAt(0).toUpperCase() + t.slice(1)), sa = br((t) => t ? `on${kr(t)}` : ""), ht = (t, e) => !Object.is(t, e), Hi = (t, ...e) => {
  for (let n = 0; n < t.length; n++) t[n](...e);
}, Cu = (t, e, n, s = !1) => {
  Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: s, value: n });
}, wr = (t) => {
  let e = parseFloat(t);
  return isNaN(e) ? t : e;
}, ia = (t) => {
  let e = Be(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
}, Sr = () => Wl || (Wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), yf = gr("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function it(t) {
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
      })(s) : it(s);
      if (i) for (let r in i) e[r] = i[r];
    }
    return e;
  }
  if (Be(t) || Ee(t)) return t;
}
let bf = /;(?![^(]*\))/g, kf = /:([^]+)/, wf = /\/\*[^]*?\*\//g;
function x(t) {
  let e = "";
  if (Be(t)) e = t;
  else if (X(t)) for (let n = 0; n < t.length; n++) {
    let s = x(t[n]);
    s && (e += s + " ");
  }
  else if (Ee(t)) for (let n in t) t[n] && (e += n + " ");
  return e.trim();
}
function ra(t) {
  if (!t) return null;
  let { class: e, style: n } = t;
  return e && !Be(e) && (t.class = x(e)), n && (t.style = it(n)), t;
}
let Sf = gr("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function ts(t, e) {
  let n, s;
  if (t === e) return !0;
  let i = (n = t, je.call(n) === "[object Date]"), r = (s = e, je.call(s) === "[object Date]");
  if (i || r) return !!i && !!r && t.getTime() === e.getTime();
  if (i = Bt(t), r = Bt(e), i || r) return t === e;
  if (i = X(t), r = X(e), i || r) return !!i && !!r && (function(a, l) {
    if (a.length !== l.length) return !1;
    let o = !0;
    for (let u = 0; o && u < a.length; u++) o = ts(a[u], l[u]);
    return o;
  })(t, e);
  if (i = Ee(t), r = Ee(e), i || r) {
    if (!i || !r || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (let a in t) {
      let l = t.hasOwnProperty(a), o = e.hasOwnProperty(a);
      if (l && !o || !l && o || !ts(t[a], e[a])) return !1;
    }
  }
  return String(t) === String(e);
}
function cl(t, e) {
  return t.findIndex((n) => ts(n, e));
}
let xu = (t) => !!(t && t.__v_isRef === !0), ge = (t) => Be(t) ? t : t == null ? "" : X(t) || Ee(t) && (t.toString === je || !ae(t.toString)) ? xu(t) ? ge(t.value) : JSON.stringify(t, Eu, 2) : String(t), Eu = (t, e) => {
  let n;
  if (xu(e)) return Eu(t, e.value);
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
function Lu(t, e = !1) {
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
    this.flags |= 2, ql(this), Ou(this);
    let e = $e, n = Lt;
    $e = this, Lt = !0;
    try {
      return this.fn();
    } finally {
      Du(this), $e = e, Lt = n, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e = this.deps; e; e = e.nextDep) fl(e);
      this.deps = this.depsTail = void 0, ql(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Ir = 0;
function Bu(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Gs, Gs = t;
    return;
  }
  t.next = js, js = t;
}
function dl() {
  let t;
  if (!(--Ir > 0)) {
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
function Ou(t) {
  for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Du(t) {
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
  for (let e = t.deps; e; e = e.nextDep) if (e.dep.version !== e.version || e.dep.computed && (Vu(e.dep.computed) || e.dep.version !== e.version)) return !0;
  return !!t._dirty;
}
function Vu(t) {
  if (4 & t.flags && !(16 & t.flags) || (t.flags &= -17, t.globalVersion === si) || (t.globalVersion = si, !t.isSSR && 128 & t.flags && (!t.deps && !t._dirty || !Oa(t)))) return;
  t.flags |= 2;
  let e = t.dep, n = $e, s = Lt;
  $e = t, Lt = !0;
  try {
    Ou(t);
    let i = t.fn(t._value);
    (e.version === 0 || ht(i, t._value)) && (t.flags |= 128, t._value = i, e.version++);
  } catch (i) {
    throw e.version++, i;
  } finally {
    $e = n, Lt = s, Du(t), t.flags &= -3;
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
let Lt = !0, _u = [];
function ln() {
  _u.push(Lt), Lt = !1;
}
function on() {
  let t = _u.pop();
  Lt = t === void 0 || t;
}
function ql(t) {
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
class If {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tr {
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!$e || !Lt || $e === this.computed) return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $e) n = this.activeLink = new If($e, this), $e.deps ? (n.prevDep = $e.depsTail, $e.depsTail.nextDep = n, $e.depsTail = n) : $e.deps = $e.depsTail = n, (function s(i) {
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
    Ir++;
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
    } finally {
      dl();
    }
  }
}
let Qi = /* @__PURE__ */ new WeakMap(), Kn = Symbol(""), Da = Symbol(""), ii = Symbol("");
function et(t, e, n) {
  if (Lt && $e) {
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
  if (Ir++, e === "clear") a.forEach(l);
  else {
    let o = X(t), u = o && yr(n);
    if (o && n === "length") {
      let d = Number(s);
      a.forEach((f, p) => {
        (p === "length" || p === ii || !Bt(p) && p >= d) && l(f);
      });
    } else switch ((n !== void 0 || a.has(void 0)) && l(a.get(n)), u && l(a.get(ii)), e) {
      case "add":
        if (o) u && l(a.get("length"));
        else {
          let f;
          l(a.get(Kn)), f = t, je.call(f) === "[object Map]" && l(a.get(Da));
        }
        break;
      case "delete":
        if (!o) {
          let f;
          l(a.get(Kn)), f = t, je.call(f) === "[object Map]" && l(a.get(Da));
        }
        break;
      case "set":
        let d;
        d = t, je.call(d) === "[object Map]" && l(a.get(Kn));
    }
  }
  dl();
}
function os(t) {
  let e = me(t);
  return e === t ? e : (et(e, "iterate", ii), pt(t) ? e : e.map(Mt));
}
function Cr(t) {
  return et(t = me(t), "iterate", ii), t;
}
function Tn(t, e) {
  return un(t) ? qt(t) ? vs(Mt(e)) : vs(e) : Mt(e);
}
let Tf = { __proto__: null, [Symbol.iterator]() {
  return oa(this, Symbol.iterator, (t) => Tn(this, t));
}, concat(...t) {
  return os(this).concat(...t.map((e) => X(e) ? os(e) : e));
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
  return os(this).join(t);
}, lastIndexOf(...t) {
  return ua(this, "lastIndexOf", t);
}, map(t, e) {
  return Kt(this, "map", t, e, void 0, arguments);
}, pop() {
  return Vs(this, "pop");
}, push(...t) {
  return Vs(this, "push", t);
}, reduce(t, ...e) {
  return jl(this, "reduce", t, e);
}, reduceRight(t, ...e) {
  return jl(this, "reduceRight", t, e);
}, shift() {
  return Vs(this, "shift");
}, some(t, e) {
  return Kt(this, "some", t, e, void 0, arguments);
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
  return oa(this, "values", (t) => Tn(this, t));
} };
function oa(t, e, n) {
  let s = Cr(t), i = s[e]();
  return s === t || pt(t) || (i._next = i.next, i.next = () => {
    let r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
let Cf = Array.prototype;
function Kt(t, e, n, s, i, r) {
  let a = Cr(t), l = a !== t && !pt(t), o = a[e];
  if (o !== Cf[e]) {
    let f = o.apply(t, r);
    return l ? Mt(f) : f;
  }
  let u = n;
  a !== t && (l ? u = function(f, p) {
    return n.call(this, Tn(t, f), p, t);
  } : n.length > 2 && (u = function(f, p) {
    return n.call(this, f, p, t);
  }));
  let d = o.call(a, u, s);
  return l && i ? i(d) : d;
}
function jl(t, e, n, s) {
  let i = Cr(t), r = n;
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
function Vs(t, e, n = []) {
  ln(), Ir++;
  let s = me(t)[e].apply(t, n);
  return dl(), on(), s;
}
let xf = gr("__proto__,__v_isRef,__isVue"), Nu = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Bt));
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
    if (n === "__v_raw") return s === (i ? r ? Of : Uu : r ? Wu : Hu).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(s) ? e : void 0;
    let a = X(e);
    if (!i) {
      let o;
      if (a && (o = Tf[n])) return o;
      if (n === "hasOwnProperty") return Ef;
    }
    let l = Reflect.get(e, n, Oe(e) ? e : s);
    if ((Bt(n) ? Nu.has(n) : xf(n)) || (i || et(e, "get", n), r)) return l;
    if (Oe(l)) {
      let o = a && yr(n) ? l : l.value;
      return i && Ee(o) ? An(o) : o;
    }
    return Ee(l) ? i ? An(l) : mn(l) : l;
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
      if (pt(s) || un(s) || (r = me(r), s = me(s)), !a && Oe(r) && !Oe(s)) return u || (r.value = s), !0;
    }
    let l = a ? Number(n) < e.length : Ie(e, n), o = Reflect.set(e, n, s, Oe(e) ? e : i);
    return e === me(i) && (l ? ht(s, r) && en(e, "set", n, s) : en(e, "add", n, s)), o;
  }
  deleteProperty(e, n) {
    let s = Ie(e, n);
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
class zu extends Ru {
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
let Af = new Pu(), Ff = new zu(), $f = new Pu(!0);
new zu(!0);
let ca = (t) => t;
function Fi(t) {
  return function() {
    return t !== "delete" && (t === "clear" ? void 0 : this);
  };
}
function xr(t, e) {
  let n, s = (ze(n = { get(i) {
    let r = this.__v_raw, a = me(r), l = me(i);
    t || (ht(i, l) && et(a, "get", i), et(a, "get", l));
    let { has: o } = Reflect.getPrototypeOf(a), u = e ? ca : t ? vs : Mt;
    return o.call(a, i) ? u(r.get(i)) : o.call(a, l) ? u(r.get(l)) : void (r !== a && r.get(i));
  }, get size() {
    let i = this.__v_raw;
    return t || et(me(i), "iterate", Kn), i.size;
  }, has(i) {
    let r = this.__v_raw, a = me(r), l = me(i);
    return t || (ht(i, l) && et(a, "has", i), et(a, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
  }, forEach(i, r) {
    let a = this, l = a.__v_raw, o = me(l), u = e ? ca : t ? vs : Mt;
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
      let a, l = this.__v_raw, o = me(l), u = (a = o, je.call(a) === "[object Map]"), d = i === "entries" || i === Symbol.iterator && u, f = l[i](...r), p = e ? ca : t ? vs : Mt;
      return t || et(o, "iterate", i === "keys" && u ? Da : Kn), { next() {
        let { value: h, done: g } = f.next();
        return g ? { value: h, done: g } : { value: d ? [p(h[0]), p(h[1])] : p(h), done: g };
      }, [Symbol.iterator]() {
        return this;
      } };
    };
  }), n);
  return (i, r, a) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(Ie(s, r) && r in i ? s : i, r, a);
}
let Lf = { get: xr(!1, !1) }, Mf = { get: xr(!1, !0) }, Bf = { get: xr(!0, !1) };
xr(!0, !0);
let Hu = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), Of = /* @__PURE__ */ new WeakMap();
function mn(t) {
  return un(t) ? t : hl(t, !1, Af, Lf, Hu);
}
function Df(t) {
  return hl(t, !1, $f, Mf, Wu);
}
function An(t) {
  return hl(t, !0, Ff, Bf, Uu);
}
function hl(t, e, n, s, i) {
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
function ml(t) {
  return !Ie(t, "__v_skip") && Object.isExtensible(t) && Cu(t, "__v_skip", !0), t;
}
let Mt = (t) => Ee(t) ? mn(t) : t, vs = (t) => Ee(t) ? An(t) : t;
function Oe(t) {
  return !!t && t.__v_isRef === !0;
}
function ee(t) {
  return qu(t, !1);
}
function Vf(t) {
  return qu(t, !0);
}
function qu(t, e) {
  return Oe(t) ? t : new _f(t, e);
}
class _f {
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
  return Oe(t) ? t.value : t;
}
let Nf = { get: (t, e, n) => e === "__v_raw" ? t : c(Reflect.get(t, e, n)), set: (t, e, n, s) => {
  let i = t[e];
  return Oe(i) && !Oe(n) ? (i.value = n, !0) : Reflect.set(t, e, n, s);
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
function zf(t) {
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
    if (this._shallow && Oe(this._raw[this._key])) {
      let n = this._object[this._key];
      if (Oe(n)) {
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
class Hf {
  constructor(e) {
    this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function cn(t, e, n) {
  return Oe(t) ? t : ae(t) ? new Hf(t) : !Ee(t) || !(arguments.length > 1) ? ee(t) : new Gu(t, e, n);
}
class Wf {
  constructor(e, n, s) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Tr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = si - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && $e !== this) return Bu(this, !0), !0;
  }
  get value() {
    let e = this.dep.track();
    return Vu(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
let $i = {}, Xi = /* @__PURE__ */ new WeakMap();
function Uf(t, e = !1, n = Un) {
  if (n) {
    let s = Xi.get(n);
    s || Xi.set(n, s = []), s.push(t);
  }
}
function tn(t, e = 1 / 0, n) {
  if (e <= 0 || !Ee(t) || t.__v_skip || ((n = n || /* @__PURE__ */ new Map()).get(t) || 0) >= e) return t;
  if (n.set(t, e), e--, Oe(t)) tn(t.value, e, n);
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
function Ot(t, e, n, s) {
  if (ae(t)) {
    let i = hi(t, e, n, s);
    return i && Tu(i) && i.catch((r) => {
      Ar(r, e, n);
    }), i;
  }
  if (X(t)) {
    let i = [];
    for (let r = 0; r < t.length; r++) i.push(Ot(t[r], e, n, s));
    return i;
  }
}
function Ar(t, e, n, s = !0) {
  e && e.vnode;
  let { errorHandler: i, throwUnhandledErrorInProduction: r } = e && e.appContext.config || we;
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
let ot = [], Pt = -1, ys = [], Cn = null, hs = 0, Zu = Promise.resolve(), Wi = null;
function Gn(t) {
  let e = Wi || Zu;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function pl(t) {
  if (!(1 & t.flags)) {
    let e = Ys(t), n = ot[ot.length - 1];
    !n || !(2 & t.flags) && e >= Ys(n) ? ot.push(t) : ot.splice((function(s) {
      let i = Pt + 1, r = ot.length;
      for (; i < r; ) {
        let a = i + r >>> 1, l = ot[a], o = Ys(l);
        o < s || o === s && 2 & l.flags ? i = a + 1 : r = a;
      }
      return i;
    })(e), 0, t), t.flags |= 1, Yu();
  }
}
function Yu() {
  Wi || (Wi = Zu.then(function t(e) {
    try {
      for (Pt = 0; Pt < ot.length; Pt++) {
        let n = ot[Pt];
        n && !(8 & n.flags) && (4 & n.flags && (n.flags &= -2), hi(n, n.i, n.i ? 15 : 14), 4 & n.flags || (n.flags &= -2));
      }
    } finally {
      for (; Pt < ot.length; Pt++) {
        let n = ot[Pt];
        n && (n.flags &= -2);
      }
      Pt = -1, ot.length = 0, Ku(), Wi = null, (ot.length || ys.length) && t();
    }
  }));
}
function qf(t) {
  X(t) ? ys.push(...t) : Cn && t.id === -1 ? Cn.splice(hs + 1, 0, t) : 1 & t.flags || (ys.push(t), t.flags |= 1), Yu();
}
function Gl(t, e, n = Pt + 1) {
  for (; n < ot.length; n++) {
    let s = ot[n];
    if (s && 2 & s.flags) {
      if (t && s.id !== t.uid) continue;
      ot.splice(n, 1), n--, 4 & s.flags && (s.flags &= -2), s(), 4 & s.flags || (s.flags &= -2);
    }
  }
}
function Ku(t) {
  if (ys.length) {
    let e = [...new Set(ys)].sort((n, s) => Ys(n) - Ys(s));
    if (ys.length = 0, Cn) return void Cn.push(...e);
    for (hs = 0, Cn = e; hs < Cn.length; hs++) {
      let n = Cn[hs];
      4 & n.flags && (n.flags &= -2), 8 & n.flags || n(), n.flags &= -2;
    }
    Cn = null, hs = 0;
  }
}
let Ys = (t) => t.id == null ? 2 & t.flags ? -1 : 1 / 0 : t.id, Je = null, Ju = null;
function er(t) {
  let e = Je;
  return Je = t, Ju = t && t.type.__scopeId || null, e;
}
function H(t, e = Je, n) {
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
function gl(t, e) {
  if (Je === null) return t;
  let n = Br(Je), s = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [r, a, l, o = we] = e[i];
    r && (ae(r) && (r = { mounted: r, updated: r }), r.deep && tn(a), s.push({ dir: r, instance: n, value: a, oldValue: void 0, arg: l, modifiers: o }));
  }
  return t;
}
function Rn(t, e, n, s) {
  let i = t.dirs, r = e && e.dirs;
  for (let a = 0; a < i.length; a++) {
    let l = i[a];
    r && (l.oldValue = r[a].value);
    let o = l.dir[s];
    o && (ln(), Ot(o, n, 8, [t.el, l, t, e]), on());
  }
}
let Qu = Symbol("_vte"), Hs = (t) => t && (t.disabled || t.disabled === ""), Zl = (t) => t && (t.defer || t.defer === ""), Yl = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Kl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, da = (t, e) => {
  let n = t && t.to;
  return Be(n) ? e ? e(n) : null : n;
}, Xu = { name: "Teleport", __isTeleport: !0, process(t, e, n, s, i, r, a, l, o, u) {
  let { mc: d, pc: f, pbc: p, o: { insert: h, querySelector: g, createText: w } } = u, S = Hs(e.props), { shapeFlag: b, children: E, dynamicChildren: k } = e;
  if (t == null) {
    let B = e.el = w(""), N = e.anchor = w("");
    h(B, n, s), h(N, n, s);
    let z = ($, M) => {
      16 & b && d(E, $, M, i, r, a, l, o);
    }, K = () => {
      let $ = e.target = da(e.props, g), M = Jl($, e, w, h);
      $ && (a !== "svg" && Yl($) ? a = "svg" : a !== "mathml" && Kl($) && (a = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add($), S || (z($, M), Mi(e, !1)));
    };
    S && (z(n, N), Mi(e, !0)), Zl(e.props) ? (e.el.__isMounted = !1, lt(() => {
      K(), delete e.el.__isMounted;
    }, r)) : K();
  } else {
    if (Zl(e.props) && t.el.__isMounted === !1) return void lt(() => {
      Xu.process(t, e, n, s, i, r, a, l, o, u);
    }, r);
    e.el = t.el, e.targetStart = t.targetStart;
    let B = e.anchor = t.anchor, N = e.target = t.target, z = e.targetAnchor = t.targetAnchor, K = Hs(t.props), $ = K ? n : N, M = K ? B : z;
    if (a === "svg" || Yl(N) ? a = "svg" : (a === "mathml" || Kl(N)) && (a = "mathml"), k ? (p(t.dynamicChildren, k, $, i, r, a, l), Tl(t, e, !0)) : o || f(t, e, $, M, i, r, a, l, !1), S) K ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to) : Li(e, n, B, u, 1);
    else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
      let Y = e.target = da(e.props, g);
      Y && Li(e, Y, null, u, 0);
    } else K && Li(e, N, z, u, 1);
    Mi(e, S);
  }
}, remove(t, e, n, { um: s, o: { remove: i } }, r) {
  let { shapeFlag: a, children: l, anchor: o, targetStart: u, targetAnchor: d, target: f, props: p } = t;
  if (f && (i(u), i(d)), r && i(o), 16 & a) {
    let h = r || !Hs(p);
    for (let g = 0; g < l.length; g++) {
      let w = l[g];
      s(w, e, n, h, !!w.dynamicChildren);
    }
  }
}, move: Li, hydrate: function(t, e, n, s, i, r, { o: { nextSibling: a, parentNode: l, querySelector: o, insert: u, createText: d } }, f) {
  function p(w, S, b, E) {
    S.anchor = f(a(w), S, l(w), n, s, i, r), S.targetStart = b, S.targetAnchor = E;
  }
  let h = e.target = da(e.props, o), g = Hs(e.props);
  if (h) {
    let w = h._lpa || h.firstChild;
    if (16 & e.shapeFlag) if (g) p(t, e, w, w && a(w));
    else {
      e.anchor = a(t);
      let S = w;
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
      e.targetAnchor || Jl(h, e, d, u), f(w && a(w), e, h, n, s, i, r);
    }
    Mi(e, g);
  } else g && 16 & e.shapeFlag && p(t, e, t, a(t));
  return e.anchor && a(e.anchor);
} };
function Li(t, e, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(t.targetAnchor, e, n);
  let { el: a, anchor: l, shapeFlag: o, children: u, props: d } = t, f = r === 2;
  if (f && s(a, e, n), (!f || Hs(d)) && 16 & o) for (let p = 0; p < u.length; p++) i(u[p], e, n, 2);
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
function Jl(t, e, n, s) {
  let i = e.targetStart = n(""), r = e.targetAnchor = n("");
  return i[Qu] = r, t && (s(i, t), s(r, t)), r;
}
let Xt = Symbol("_leaveCb"), Bi = Symbol("_enterCb");
function tc() {
  let t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return gn(() => {
    t.isMounted = !0;
  }), bl(() => {
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
    let i = e.default && vl(e.default(), !0);
    if (!i || !i.length) return;
    let r = ic(i), a = me(t), { mode: l } = a;
    if (s.isLeaving) return fa(r);
    let o = Ql(r);
    if (!o) return fa(r);
    let u = ri(o, a, s, n, (f) => u = f);
    o.type !== Ke && ns(o, u);
    let d = n.subTree && Ql(n.subTree);
    if (d && d.type !== Ke && !jn(d, o) && sc(n).type !== Ke) {
      let f = ri(d, a, s, n);
      if (ns(d, f), l === "out-in" && o.type !== Ke) return s.isLeaving = !0, f.afterLeave = () => {
        s.isLeaving = !1, 8 & n.job.flags || n.update(), delete f.afterLeave, d = void 0;
      }, fa(r);
      l === "in-out" && o.type !== Ke ? f.delayLeave = (p, h, g) => {
        rc(s, d)[String(d.key)] = d, p[Xt] = () => {
          h(), p[Xt] = void 0, delete u.delayedLeave, d = void 0;
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
  let { appear: r, mode: a, persisted: l = !1, onBeforeEnter: o, onEnter: u, onAfterEnter: d, onEnterCancelled: f, onBeforeLeave: p, onLeave: h, onAfterLeave: g, onLeaveCancelled: w, onBeforeAppear: S, onAppear: b, onAfterAppear: E, onAppearCancelled: k } = e, B = String(t.key), N = rc(n, t), z = (M, Y) => {
    M && Ot(M, s, 9, Y);
  }, K = (M, Y) => {
    let Q = Y[1];
    z(M, Y), X(M) ? M.every((P) => P.length <= 1) && Q() : M.length <= 1 && Q();
  }, $ = { mode: a, persisted: l, beforeEnter(M) {
    let Y = o;
    if (!n.isMounted) if (r) Y = S || o;
    else return;
    M[Xt] && M[Xt](!0);
    let Q = N[B];
    Q && jn(t, Q) && Q.el[Xt] && Q.el[Xt](), z(Y, [M]);
  }, enter(M) {
    let Y = u, Q = d, P = f;
    if (!n.isMounted) if (r) Y = b || u, Q = E || d, P = k || f;
    else return;
    let te = !1, fe = M[Bi] = (oe) => {
      te || (te = !0, oe ? z(P, [M]) : z(Q, [M]), $.delayedLeave && $.delayedLeave(), M[Bi] = void 0);
    };
    Y ? K(Y, [M, fe]) : fe();
  }, leave(M, Y) {
    let Q = String(t.key);
    if (M[Bi] && M[Bi](!0), n.isUnmounting) return Y();
    z(p, [M]);
    let P = !1, te = M[Xt] = (fe) => {
      P || (P = !0, Y(), fe ? z(w, [M]) : z(g, [M]), M[Xt] = void 0, N[Q] === t && delete N[Q]);
    };
    N[Q] = t, h ? K(h, [M, te]) : te();
  }, clone(M) {
    let Y = ri(M, e, n, s, i);
    return i && i(Y), Y;
  } };
  return $;
}
function fa(t) {
  if (Fr(t)) return (t = Bn(t)).children = null, t;
}
function Ql(t) {
  if (!Fr(t)) return t.type.__isTeleport && t.children ? ic(t.children) : t;
  if (t.component) return t.component.subTree;
  let { shapeFlag: e, children: n } = t;
  if (n) {
    if (16 & e) return n[0];
    if (32 & e && ae(n.default)) return n.default();
  }
}
function ns(t, e) {
  6 & t.shapeFlag && t.component ? (t.transition = e, ns(t.component.subTree, e)) : 128 & t.shapeFlag ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function vl(t, e = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < t.length; r++) {
    let a = t[r], l = n == null ? a.key : String(n) + String(a.key != null ? a.key : r);
    a.type === de ? (128 & a.patchFlag && i++, s = s.concat(vl(a.children, e, l))) : (e || a.type !== Ke) && s.push(l != null ? Bn(a, { key: l }) : a);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function U(t, e) {
  return ae(t) ? ze({ name: t.name }, e, { setup: t }) : t;
}
function yl() {
  let t = Zt();
  return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
}
function ac(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function sn(t) {
  let e = Zt(), n = Vf(null);
  return e && Object.defineProperty(e.refs === we ? e.refs = {} : e.refs, t, { enumerable: !0, get: () => n.value, set: (s) => n.value = s }), n;
}
let tr = /* @__PURE__ */ new WeakMap();
function Ks(t, e, n, s, i = !1) {
  if (X(t)) return void t.forEach((g, w) => Ks(g, e && (X(e) ? e[w] : e), n, s, i));
  if (bs(s) && !i) {
    512 & s.shapeFlag && s.type.__asyncResolved && s.component.subTree.component && Ks(t, e, n, s.component.subTree);
    return;
  }
  let r = 4 & s.shapeFlag ? Br(s.component) : s.el, a = i ? null : r, { i: l, r: o } = t, u = e && e.r, d = l.refs === we ? l.refs = {} : l.refs, f = l.setupState, p = me(f), h = f === we ? Iu : (g) => Ie(p, g);
  if (u != null && u !== o && (Xl(e), Be(u) ? (d[u] = null, h(u) && (f[u] = null)) : Oe(u) && (u.value = null, e.k && (d[e.k] = null))), ae(o)) hi(o, l, 12, [a, d]);
  else {
    let g = Be(o), w = Oe(o);
    if (g || w) {
      let S = () => {
        if (t.f) {
          let b = g ? h(o) ? f[o] : d[o] : o.value;
          if (i) X(b) && ul(b, r);
          else if (X(b)) b.includes(r) || b.push(r);
          else if (g) d[o] = [r], h(o) && (f[o] = d[o]);
          else {
            let E = [r];
            o.value = E, t.k && (d[t.k] = E);
          }
        } else g ? (d[o] = a, h(o) && (f[o] = a)) : w && (o.value = a, t.k && (d[t.k] = a));
      };
      if (a) {
        let b = () => {
          S(), tr.delete(t);
        };
        b.id = -1, tr.set(t, b), lt(b, n);
      } else Xl(t), S();
    }
  }
}
function Xl(t) {
  let e = tr.get(t);
  e && (e.flags |= 8, tr.delete(t));
}
Sr().requestIdleCallback;
Sr().cancelIdleCallback;
let bs = (t) => !!t.type.__asyncLoader, Fr = (t) => t.type.__isKeepAlive;
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
      is(() => {
        ul(o[a], u);
      }, l);
    })(s, e, n, i), i = i.parent;
  }
}
function nr(t, e, n = tt, s = !1) {
  if (n) {
    let i = n[t] || (n[t] = []), r = e.__weh || (e.__weh = (...a) => {
      ln();
      let l = pi(n), o = Ot(e, n, t, a);
      return l(), on(), o;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
let pn = (t) => (e, n = tt) => {
  oi && t !== "sp" || nr(t, (...s) => e(...s), n);
}, Yf = pn("bm"), gn = pn("m"), Kf = pn("bu"), oc = pn("u"), bl = pn("bum"), is = pn("um"), Jf = pn("sp"), Qf = pn("rtg"), Xf = pn("rtc");
function eh(t, e = tt) {
  nr("ec", t, e);
}
let uc = "components";
function th(t, e) {
  return dc(uc, t, !0, e) || t;
}
let cc = Symbol.for("v-ndc");
function kl(t) {
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
    let a = eo(i[t] || r[t], e) || eo(i.appContext[t], e);
    return !a && s ? r : a;
  }
}
function eo(t, e) {
  return t && (t[e] || t[vt(e)] || t[kr(vt(e))]);
}
function dt(t, e, n, s) {
  let i, r = n, a = X(t);
  if (a || Be(t)) {
    let l = a && qt(t), o = !1, u = !1;
    l && (o = !pt(t), u = un(t), t = Cr(t)), i = Array(t.length);
    for (let d = 0, f = t.length; d < f; d++) i[d] = e(o ? u ? vs(Mt(t[d])) : Mt(t[d]) : t[d], d, void 0, r);
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
function wl(t, e) {
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
  if (Je.ce || Je.parent && bs(Je.parent) && Je.parent.ce) {
    let u = Object.keys(n).length > 0;
    return e !== "default" && (n.name = e), v(), V(de, null, [D("slot", n, s && s())], u ? -2 : 64);
  }
  let r = t[e];
  r && r._c && (r._d = !1), v();
  let a = r && fc(r(n)), l = n.key || a && a.key, o = V(de, { key: (l && !Bt(l) ? l : `_${e}`) + (!a && s ? "_fb" : "") }, a || (s ? s() : []), a && t._ === 1 ? 64 : -2);
  return o.scopeId && (o.slotScopeIds = [o.scopeId + "-s"]), r && r._c && (r._d = !0), o;
}
function fc(t) {
  return t.some((e) => !li(e) || e.type !== Ke && (e.type !== de || !!fc(e.children))) ? t : null;
}
let Va = (t) => t ? Cc(t) ? Br(t) : Va(t.parent) : null, Js = ze(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => Va(t.parent), $root: (t) => Va(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => hc(t), $forceUpdate: (t) => t.f || (t.f = () => {
  pl(t.update);
}), $nextTick: (t) => t.n || (t.n = Gn.bind(t.proxy)), $watch: (t) => ch.bind(t) }), ha = (t, e) => t !== we && !t.__isScriptSetup && Ie(t, e), _a = { get({ _: t }, e) {
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
      if (ha(r, e)) return o[e] = 1, r[e];
      if (a !== we && Ie(a, e)) return o[e] = 2, a[e];
      if (Ie(l, e)) return o[e] = 3, l[e];
      if (i !== we && Ie(i, e)) return o[e] = 4, i[e];
      Na && (o[e] = 0);
    }
  }
  let f = Js[e];
  return f ? (e === "$attrs" && et(t.attrs, "get", ""), f(t)) : (n = u.__cssModules) && (n = n[e]) ? n : i !== we && Ie(i, e) ? (o[e] = 4, i[e]) : Ie(s = d.config.globalProperties, e) ? s[e] : void 0;
}, set({ _: t }, e, n) {
  let { data: s, setupState: i, ctx: r } = t;
  return ha(i, e) ? (i[e] = n, !0) : s !== we && Ie(s, e) ? (s[e] = n, !0) : !Ie(t.props, e) && !(e[0] === "$" && e.slice(1) in t) && (r[e] = n, !0);
}, has({ _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: i, props: r, type: a } }, l) {
  let o;
  return !!(n[l] || t !== we && l[0] !== "$" && Ie(t, l) || ha(e, l) || Ie(r, l) || Ie(s, l) || Ie(Js, l) || Ie(i.config.globalProperties, l) || (o = a.__cssModules) && o[l]);
}, defineProperty(t, e, n) {
  return n.get != null ? t._.accessCache[e] = 0 : Ie(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
} };
ze({}, _a, { get(t, e) {
  if (e !== Symbol.unscopables) return _a.get(t, e, t);
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
  return t && e ? X(t) && X(e) ? t.concat(e) : ze({}, sr(t), sr(e)) : t || e;
}
let Na = !0;
function to(t, e, n) {
  Ot(X(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
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
let ih = { data: no, props: so, emits: so, methods: _s, computed: _s, beforeCreate: at, created: at, beforeMount: at, mounted: at, beforeUpdate: at, updated: at, beforeDestroy: at, beforeUnmount: at, destroyed: at, unmounted: at, activated: at, deactivated: at, errorCaptured: at, serverPrefetch: at, components: _s, directives: _s, watch: function(t, e) {
  if (!t) return e;
  if (!e) return t;
  let n = ze(/* @__PURE__ */ Object.create(null), t);
  for (let s in e) n[s] = at(t[s], e[s]);
  return n;
}, provide: no, inject: function(t, e) {
  return _s(Ra(t), Ra(e));
} };
function no(t, e) {
  return e ? t ? function() {
    return ze(ae(t) ? t.call(this, this) : t, ae(e) ? e.call(this, this) : e);
  } : e : t;
}
function Ra(t) {
  if (X(t)) {
    let e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function at(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function _s(t, e) {
  return t ? ze(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function so(t, e) {
  return t ? X(t) && X(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ze(/* @__PURE__ */ Object.create(null), sr(t), sr(e ?? {})) : e;
}
function mc() {
  return { app: null, config: { isNativeTag: Iu, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let rh = 0, Jn = null;
function Mn(t, e) {
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
  return Lr(t, null, e);
}
function uh(t, e) {
  return Lr(t, null, { flush: "sync" });
}
function De(t, e, n) {
  return Lr(t, e, n);
}
function Lr(t, e, n = we) {
  let s, { immediate: i, flush: r } = n, a = ze({}, n), l = e && i || !e && r !== "post";
  if (oi) {
    if (r === "sync") {
      let f = oh();
      s = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!l) {
      let f = () => {
      };
      return f.stop = Wt, f.resume = Wt, f.pause = Wt, f;
    }
  }
  let o = tt;
  a.call = (f, p, h) => Ot(f, o, p, h);
  let u = !1;
  r === "post" ? a.scheduler = (f) => {
    lt(f, o && o.suspense);
  } : r !== "sync" && (u = !0, a.scheduler = (f, p) => {
    p ? f() : pl(f);
  }), a.augmentJob = (f) => {
    e && (f.flags |= 4), u && (f.flags |= 2, o && (f.id = o.uid, f.i = o));
  };
  let d = (function(f, p, h = we) {
    let g, w, S, b, { immediate: E, deep: k, once: B, scheduler: N, augmentJob: z, call: K } = h, $ = (oe) => k ? oe : pt(oe) || k === !1 || k === 0 ? tn(oe, 1) : tn(oe), M = !1, Y = !1;
    if (Oe(f) ? (w = () => f.value, M = pt(f)) : qt(f) ? (w = () => $(f), M = !0) : X(f) ? (Y = !0, M = f.some((oe) => qt(oe) || pt(oe)), w = () => f.map((oe) => Oe(oe) ? oe.value : qt(oe) ? $(oe) : ae(oe) ? K ? K(oe, 2) : oe() : void 0)) : w = ae(f) ? p ? K ? () => K(f, 2) : f : () => {
      if (S) {
        ln();
        try {
          S();
        } finally {
          on();
        }
      }
      let oe = Un;
      Un = g;
      try {
        return K ? K(f, 3, [b]) : f(b);
      } finally {
        Un = oe;
      }
    } : Wt, p && k) {
      let oe = w, Le = k === !0 ? 1 / 0 : k;
      w = () => tn(oe(), Le);
    }
    let Q = $u(), P = () => {
      g.stop(), Q && Q.active && ul(Q.effects, g);
    };
    if (B && p) {
      let oe = p;
      p = (...Le) => {
        oe(...Le), P();
      };
    }
    let te = Y ? Array(f.length).fill($i) : $i, fe = (oe) => {
      if (1 & g.flags && (g.dirty || oe)) if (p) {
        let Le = g.run();
        if (k || M || (Y ? Le.some((be, ve) => ht(be, te[ve])) : ht(Le, te))) {
          S && S();
          let be = Un;
          Un = g;
          try {
            let ve = [Le, te === $i ? void 0 : Y && te[0] === $i ? [] : te, b];
            te = Le, K ? K(p, 3, ve) : p(...ve);
          } finally {
            Un = be;
          }
        }
      } else g.run();
    };
    return z && z(fe), (g = new Mu(w)).scheduler = N ? () => N(fe, !1) : fe, b = (oe) => Uf(oe, !1, g), S = g.onStop = () => {
      let oe = Xi.get(g);
      if (oe) {
        if (K) K(oe, 4);
        else for (let Le of oe) Le();
        Xi.delete(g);
      }
    }, p ? E ? fe(!0) : te = g.run() : N ? N(fe.bind(null, !0), !0) : g.run(), P.pause = g.pause.bind(g), P.resume = g.resume.bind(g), P.stop = P, P;
  })(t, e, a);
  return oi && (s ? s.push(d) : l && d()), d;
}
function ch(t, e, n) {
  let s, i = this.proxy, r = Be(t) ? t.includes(".") ? pc(i, t) : () => i[t] : t.bind(i, i);
  ae(e) ? s = e : (s = e.handler, n = e);
  let a = pi(this), l = Lr(r, s.bind(i), n);
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
function fn(t, e, n = we) {
  let s = Zt(), i = vt(e), r = Vn(e), a = gc(t, i), l = Pf((o, u) => {
    let d, f, p = we;
    return uh(() => {
      let h = t[i];
      ht(d, h) && (d = h, u());
    }), { get: () => (o(), n.get ? n.get(d) : d), set(h) {
      let g = n.set ? n.set(h) : h;
      if (!ht(g, d) && !(p !== we && ht(h, p))) return;
      let w = s.vnode.props;
      w && (e in w || i in w || r in w) && (`onUpdate:${e}` in w || `onUpdate:${i}` in w || `onUpdate:${r}` in w) || (d = h, u()), s.emit(`update:${e}`, g), ht(h, g) && ht(h, p) && !ht(g, f) && u(), p = h, f = g;
    } };
  });
  return l[Symbol.iterator] = () => {
    let o = 0;
    return { next: () => o < 2 ? { value: o++ ? a || we : l, done: !1 } : { done: !0 } };
  }, l;
}
let gc = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${vt(e)}Modifiers`] || t[`${Vn(e)}Modifiers`];
function dh(t, e, ...n) {
  let s;
  if (t.isUnmounted) return;
  let i = t.vnode.props || we, r = n, a = e.startsWith("update:"), l = a && gc(i, e.slice(7));
  l && (l.trim && (r = n.map((d) => Be(d) ? d.trim() : d)), l.number && (r = n.map(wr)));
  let o = i[s = sa(e)] || i[s = sa(vt(e))];
  !o && a && (o = i[s = sa(Vn(e))]), o && Ot(o, t, 6, r);
  let u = i[s + "Once"];
  if (u) {
    if (t.emitted) {
      if (t.emitted[s]) return;
    } else t.emitted = {};
    t.emitted[s] = !0, Ot(u, t, 6, r);
  }
}
let fh = /* @__PURE__ */ new WeakMap();
function rr(t, e) {
  return !!t && !!vr(e) && (Ie(t, (e = e.slice(2).replace(/Once$/, ""))[0].toLowerCase() + e.slice(1)) || Ie(t, Vn(e)) || Ie(t, e));
}
function io(t) {
  let e, n, { type: s, vnode: i, proxy: r, withProxy: a, propsOptions: [l], slots: o, attrs: u, emit: d, render: f, renderCache: p, props: h, data: g, setupState: w, ctx: S, inheritAttrs: b } = t, E = er(t);
  try {
    if (4 & i.shapeFlag) {
      let B = a || r;
      e = zt(f.call(B, B, p, h, w, g, S)), n = u;
    } else e = zt(s.length > 1 ? s(h, { attrs: u, slots: o, emit: d }) : s(h, null)), n = s.props ? u : hh(u);
  } catch (B) {
    Qs.length = 0, Ar(B, t, 1), e = D(Ke);
  }
  let k = e;
  if (n && b !== !1) {
    let B = Object.keys(n), { shapeFlag: N } = k;
    B.length && 7 & N && (l && B.some(ol) && (n = mh(n, l)), k = Bn(k, n, !1, !0));
  }
  return i.dirs && ((k = Bn(k, null, !1, !0)).dirs = k.dirs ? k.dirs.concat(i.dirs) : i.dirs), i.transition && ns(k, i.transition), e = k, er(E), e;
}
let hh = (t) => {
  let e;
  for (let n in t) (n === "class" || n === "style" || vr(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, mh = (t, e) => {
  let n = {};
  for (let s in t) ol(s) && s.slice(9) in e || (n[s] = t[s]);
  return n;
};
function ro(t, e, n) {
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
let Pa = {}, vc = (t) => Object.getPrototypeOf(t) === Pa;
function yc(t, e, n, s) {
  let i, [r, a] = t.propsOptions, l = !1;
  if (e) for (let o in e) {
    let u;
    if (Zs(o)) continue;
    let d = e[o];
    r && Ie(r, u = vt(o)) ? a && a.includes(u) ? (i || (i = {}))[u] = d : n[u] = d : rr(t.emitsOptions, o) || o in s && d === s[o] || (s[o] = d, l = !0);
  }
  if (a) {
    let o = me(n), u = i || we;
    for (let d = 0; d < a.length; d++) {
      let f = a[d];
      n[f] = za(r, o, f, u[f], t, !Ie(u, f));
    }
  }
  return l;
}
function za(t, e, n, s, i, r) {
  let a = t[n];
  if (a != null) {
    let l = Ie(a, "default");
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
    a[0] && (r && !l ? s = !1 : a[1] && (s === "" || s === Vn(n)) && (s = !0));
  }
  return s;
}
let gh = /* @__PURE__ */ new WeakMap();
function ao(t) {
  return !(t[0] === "$" || Zs(t));
}
let Sl = (t) => t === "_" || t === "_ctx" || t === "$stable", Il = (t) => X(t) ? t.map(zt) : [zt(t)], vh = (t, e, n) => {
  if (e._n) return e;
  let s = H((...i) => Il(e(...i)), n);
  return s._c = !1, s;
}, bc = (t, e, n) => {
  let s = t._ctx;
  for (let i in t) {
    if (Sl(i)) continue;
    let r = t[i];
    if (ae(r)) e[i] = vh(i, r, s);
    else if (r != null) {
      let a = Il(r);
      e[i] = () => a;
    }
  }
}, kc = (t, e) => {
  let n = Il(e);
  t.slots.default = () => n;
}, wc = (t, e, n) => {
  for (let s in e) (n || !Sl(s)) && (t[s] = e[s]);
}, lt = wh;
function yh(t) {
  return bh(t);
}
function bh(t, e) {
  var n;
  let s, i;
  Sr().__VUE__ = !0;
  let { insert: r, remove: a, patchProp: l, createElement: o, createText: u, createComment: d, setText: f, setElementText: p, parentNode: h, nextSibling: g, setScopeId: w = Wt, insertStaticContent: S } = t, b = (m, y, I, R = null, L = null, T = null, O, A = null, F = !!y.dynamicChildren) => {
    if (m === y) return;
    m && !jn(m, y) && (R = xi(m), Re(m, L, T, !0), m = null), y.patchFlag === -2 && (F = !1, y.dynamicChildren = null);
    let { type: C, ref: W, shapeFlag: G } = y;
    switch (C) {
      case Mr:
        E(m, y, I, R);
        break;
      case Ke:
        k(m, y, I, R);
        break;
      case pa:
        m == null && B(y, I, R, O);
        break;
      case de:
        P(m, y, I, R, L, T, O, A, F);
        break;
      default:
        1 & G ? N(m, y, I, R, L, T, O, A, F) : 6 & G ? te(m, y, I, R, L, T, O, A, F) : (64 & G || 128 & G) && C.process(m, y, I, R, L, T, O, A, F, Os);
    }
    W != null && L ? Ks(W, m && m.ref, T, y || m, !y) : W == null && m && m.ref != null && Ks(m.ref, null, T, m, !0);
  }, E = (m, y, I, R) => {
    if (m == null) r(y.el = u(y.children), I, R);
    else {
      let L = y.el = m.el;
      y.children !== m.children && f(L, y.children);
    }
  }, k = (m, y, I, R) => {
    m == null ? r(y.el = d(y.children || ""), I, R) : y.el = m.el;
  }, B = (m, y, I, R) => {
    [m.el, m.anchor] = S(m.children, y, I, R, m.el, m.anchor);
  }, N = (m, y, I, R, L, T, O, A, F) => {
    if (y.type === "svg" ? O = "svg" : y.type === "math" && (O = "mathml"), m == null) z(y, I, R, L, T, O, A, F);
    else {
      let C = m.el && m.el._isVueCE ? m.el : null;
      try {
        C && C._beginPatch(), M(m, y, L, T, O, A, F);
      } finally {
        C && C._endPatch();
      }
    }
  }, z = (m, y, I, R, L, T, O, A) => {
    let F, C, { props: W, shapeFlag: G, transition: q, dirs: Z } = m;
    if (F = m.el = o(m.type, T, W && W.is, W), 8 & G ? p(F, m.children) : 16 & G && $(m.children, F, null, R, L, ma(m, T), O, A), Z && Rn(m, null, R, "created"), K(F, m, m.scopeId, O, R), W) {
      for (let le in W) le === "value" || Zs(le) || l(F, le, null, W[le], T, R);
      "value" in W && l(F, "value", null, W.value, T), (C = W.onVnodeBeforeMount) && Nt(C, R, m);
    }
    Z && Rn(m, null, R, "beforeMount");
    let ce = kh(L, q);
    ce && q.beforeEnter(F), r(F, y, I), ((C = W && W.onVnodeMounted) || ce || Z) && lt(() => {
      C && Nt(C, R, m), ce && q.enter(F), Z && Rn(m, null, R, "mounted");
    }, L);
  }, K = (m, y, I, R, L) => {
    if (I && w(m, I), R) for (let T = 0; T < R.length; T++) w(m, R[T]);
    if (L) {
      let T = L.subTree;
      if (y === T || Sc(T.type) && (T.ssContent === y || T.ssFallback === y)) {
        let O = L.vnode;
        K(m, O, O.scopeId, O.slotScopeIds, L.parent);
      }
    }
  }, $ = (m, y, I, R, L, T, O, A, F = 0) => {
    for (let C = F; C < m.length; C++) b(null, m[C] = A ? xn(m[C]) : zt(m[C]), y, I, R, L, T, O, A);
  }, M = (m, y, I, R, L, T, O) => {
    let A, F = y.el = m.el, { patchFlag: C, dynamicChildren: W, dirs: G } = y;
    C |= 16 & m.patchFlag;
    let q = m.props || we, Z = y.props || we;
    if (I && Pn(I, !1), (A = Z.onVnodeBeforeUpdate) && Nt(A, I, y, m), G && Rn(y, m, I, "beforeUpdate"), I && Pn(I, !0), (q.innerHTML && Z.innerHTML == null || q.textContent && Z.textContent == null) && p(F, ""), W ? Y(m.dynamicChildren, W, F, I, R, ma(y, L), T) : O || ve(m, y, F, null, I, R, ma(y, L), T, !1), C > 0) {
      if (16 & C) Q(F, q, Z, I, L);
      else if (2 & C && q.class !== Z.class && l(F, "class", null, Z.class, L), 4 & C && l(F, "style", q.style, Z.style, L), 8 & C) {
        let ce = y.dynamicProps;
        for (let le = 0; le < ce.length; le++) {
          let he = ce[le], Ze = q[he], Ye = Z[he];
          (Ye !== Ze || he === "value") && l(F, he, Ze, Ye, L, I);
        }
      }
      1 & C && m.children !== y.children && p(F, y.children);
    } else O || W != null || Q(F, q, Z, I, L);
    ((A = Z.onVnodeUpdated) || G) && lt(() => {
      A && Nt(A, I, y, m), G && Rn(y, m, I, "updated");
    }, R);
  }, Y = (m, y, I, R, L, T, O) => {
    for (let A = 0; A < y.length; A++) {
      let F = m[A], C = y[A], W = F.el && (F.type === de || !jn(F, C) || 198 & F.shapeFlag) ? h(F.el) : I;
      b(F, C, W, null, R, L, T, O, !0);
    }
  }, Q = (m, y, I, R, L) => {
    if (y !== I) {
      if (y !== we) for (let T in y) Zs(T) || T in I || l(m, T, y[T], null, L, R);
      for (let T in I) {
        if (Zs(T)) continue;
        let O = I[T], A = y[T];
        O !== A && T !== "value" && l(m, T, A, O, L, R);
      }
      "value" in I && l(m, "value", y.value, I.value, L);
    }
  }, P = (m, y, I, R, L, T, O, A, F) => {
    let C = y.el = m ? m.el : u(""), W = y.anchor = m ? m.anchor : u(""), { patchFlag: G, dynamicChildren: q, slotScopeIds: Z } = y;
    Z && (A = A ? A.concat(Z) : Z), m == null ? (r(C, I, R), r(W, I, R), $(y.children || [], I, W, L, T, O, A, F)) : G > 0 && 64 & G && q && m.dynamicChildren ? (Y(m.dynamicChildren, q, I, L, T, O, A), (y.key != null || L && y === L.subTree) && Tl(m, y, !0)) : ve(m, y, I, W, L, T, O, A, F);
  }, te = (m, y, I, R, L, T, O, A, F) => {
    y.slotScopeIds = A, m == null ? 512 & y.shapeFlag ? L.ctx.activate(y, I, R, O, F) : fe(y, I, R, L, T, O, F) : oe(m, y, F);
  }, fe = (m, y, I, R, L, T, O) => {
    let A = m.component = Ch(m, R, L);
    if (Fr(m) && (A.ctx.renderer = Os), xh(A, !1, O), A.asyncDep) {
      if (L && L.registerDep(A, Le, O), !m.el) {
        let F = A.subTree = D(Ke);
        k(null, F, y, I), m.placeholder = F.el;
      }
    } else Le(A, m, y, I, L, T, O);
  }, oe = (m, y, I) => {
    let R = y.component = m.component;
    if ((function(L, T, O) {
      let { props: A, children: F, component: C } = L, { props: W, children: G, patchFlag: q } = T, Z = C.emitsOptions;
      if (T.dirs || T.transition) return !0;
      if (!O || !(q >= 0)) return (!!F || !!G) && (!G || !G.$stable) || A !== W && (A ? !W || ro(A, W, Z) : !!W);
      if (1024 & q) return !0;
      if (16 & q) return A ? ro(A, W, Z) : !!W;
      if (8 & q) {
        let ce = T.dynamicProps;
        for (let le = 0; le < ce.length; le++) {
          let he = ce[le];
          if (W[he] !== A[he] && !rr(Z, he)) return !0;
        }
      }
      return !1;
    })(m, y, I)) {
      if (R.asyncDep && !R.asyncResolved) return void be(R, y, I);
      R.next = y, R.update();
    } else y.el = m.el, R.vnode = y;
  }, Le = (m, y, I, R, L, T, O) => {
    let A = () => {
      if (m.isMounted) {
        let G, { next: q, bu: Z, u: ce, parent: le, vnode: he } = m;
        {
          let _t = (function Nn(Ei) {
            let Fe = Ei.subTree.component;
            if (Fe) return Fe.asyncDep && !Fe.asyncResolved ? Fe : Nn(Fe);
          })(m);
          if (_t) {
            q && (q.el = he.el, be(m, q, O)), _t.asyncDep.then(() => {
              m.isUnmounted || A();
            });
            return;
          }
        }
        let Ze = q;
        Pn(m, !1), q ? (q.el = he.el, be(m, q, O)) : q = he, Z && Hi(Z), (G = q.props && q.props.onVnodeBeforeUpdate) && Nt(G, le, q, he), Pn(m, !0);
        let Ye = io(m), Vt = m.subTree;
        m.subTree = Ye, b(Vt, Ye, h(Vt.el), xi(Vt), m, L, T), q.el = Ye.el, Ze === null && ph(m, Ye.el), ce && lt(ce, L), (G = q.props && q.props.onVnodeUpdated) && lt(() => Nt(G, le, q, he), L);
      } else {
        let G, { el: q, props: Z } = y, { bm: ce, m: le, parent: he, root: Ze, type: Ye } = m, Vt = bs(y);
        if (Pn(m, !1), ce && Hi(ce), !Vt && (G = Z && Z.onVnodeBeforeMount) && Nt(G, he, y), Pn(m, !0), !(q && i)) {
          Ze.ce && Ze.ce._def.shadowRoot !== !1 && Ze.ce._injectChildStyle(Ye);
          let _t = m.subTree = io(m);
          b(null, _t, I, R, m, L, T), y.el = _t.el;
        }
        if (le && lt(le, L), !Vt && (G = Z && Z.onVnodeMounted)) {
          let _t = y;
          lt(() => Nt(G, he, _t), L);
        }
        (256 & y.shapeFlag || he && bs(he.vnode) && 256 & he.vnode.shapeFlag) && m.a && lt(m.a, L), m.isMounted = !0, y = I = R = null;
      }
    };
    m.scope.on();
    let F = m.effect = new Mu(A);
    m.scope.off();
    let C = m.update = F.run.bind(F), W = m.job = F.runIfDirty.bind(F);
    W.i = m, W.id = m.uid, F.scheduler = () => pl(W), Pn(m, !0), C();
  }, be = (m, y, I) => {
    y.component = m;
    let R = m.vnode.props;
    m.vnode = y, m.next = null, (function(L, T, O, A) {
      let { props: F, attrs: C, vnode: { patchFlag: W } } = L, G = me(F), [q] = L.propsOptions, Z = !1;
      if ((A || W > 0) && !(16 & W)) {
        if (8 & W) {
          let ce = L.vnode.dynamicProps;
          for (let le = 0; le < ce.length; le++) {
            let he = ce[le];
            if (rr(L.emitsOptions, he)) continue;
            let Ze = T[he];
            if (q) if (Ie(C, he)) Ze !== C[he] && (C[he] = Ze, Z = !0);
            else {
              let Ye = vt(he);
              F[Ye] = za(q, G, Ye, Ze, L, !1);
            }
            else Ze !== C[he] && (C[he] = Ze, Z = !0);
          }
        }
      } else {
        let ce;
        for (let le in yc(L, T, F, C) && (Z = !0), G) T && (Ie(T, le) || (ce = Vn(le)) !== le && Ie(T, ce)) || (q ? O && (O[le] !== void 0 || O[ce] !== void 0) && (F[le] = za(q, G, le, void 0, L, !0)) : delete F[le]);
        if (C !== G) for (let le in C) T && Ie(T, le) || (delete C[le], Z = !0);
      }
      Z && en(L.attrs, "set", "");
    })(m, y.props, R, I), ((L, T, O) => {
      let { vnode: A, slots: F } = L, C = !0, W = we;
      if (32 & A.shapeFlag) {
        let G = T._;
        G ? O && G === 1 ? C = !1 : wc(F, T, O) : (C = !T.$stable, bc(T, F)), W = T;
      } else T && (kc(L, T), W = { default: 1 });
      if (C) for (let G in F) Sl(G) || W[G] != null || delete F[G];
    })(m, y.children, I), ln(), Gl(m), on();
  }, ve = (m, y, I, R, L, T, O, A, F = !1) => {
    let C = m && m.children, W = m ? m.shapeFlag : 0, G = y.children, { patchFlag: q, shapeFlag: Z } = y;
    if (q > 0) {
      if (128 & q) return void Ne(C, G, I, R, L, T, O, A, F);
      if (256 & q) return void xe(C, G, I, R, L, T, O, A, F);
    }
    8 & Z ? (16 & W && Bs(C, L, T), G !== C && p(I, G)) : 16 & W ? 16 & Z ? Ne(C, G, I, R, L, T, O, A, F) : Bs(C, L, T, !0) : (8 & W && p(I, ""), 16 & Z && $(G, I, R, L, T, O, A, F));
  }, xe = (m, y, I, R, L, T, O, A, F) => {
    let C;
    m = m || gs, y = y || gs;
    let W = m.length, G = y.length, q = Math.min(W, G);
    for (C = 0; C < q; C++) {
      let Z = y[C] = F ? xn(y[C]) : zt(y[C]);
      b(m[C], Z, I, null, L, T, O, A, F);
    }
    W > G ? Bs(m, L, T, !0, !1, q) : $(y, I, R, L, T, O, A, F, q);
  }, Ne = (m, y, I, R, L, T, O, A, F) => {
    let C = 0, W = y.length, G = m.length - 1, q = W - 1;
    for (; C <= G && C <= q; ) {
      let Z = m[C], ce = y[C] = F ? xn(y[C]) : zt(y[C]);
      if (jn(Z, ce)) b(Z, ce, I, null, L, T, O, A, F);
      else break;
      C++;
    }
    for (; C <= G && C <= q; ) {
      let Z = m[G], ce = y[q] = F ? xn(y[q]) : zt(y[q]);
      if (jn(Z, ce)) b(Z, ce, I, null, L, T, O, A, F);
      else break;
      G--, q--;
    }
    if (C > G) {
      if (C <= q) {
        let Z = q + 1, ce = Z < W ? y[Z].el : R;
        for (; C <= q; ) b(null, y[C] = F ? xn(y[C]) : zt(y[C]), I, ce, L, T, O, A, F), C++;
      }
    } else if (C > q) for (; C <= G; ) Re(m[C], L, T, !0), C++;
    else {
      let Z, ce = C, le = C, he = /* @__PURE__ */ new Map();
      for (C = le; C <= q; C++) {
        let Fe = y[C] = F ? xn(y[C]) : zt(y[C]);
        Fe.key != null && he.set(Fe.key, C);
      }
      let Ze = 0, Ye = q - le + 1, Vt = !1, _t = 0, Nn = Array(Ye);
      for (C = 0; C < Ye; C++) Nn[C] = 0;
      for (C = ce; C <= G; C++) {
        let Fe, qe = m[C];
        if (Ze >= Ye) {
          Re(qe, L, T, !0);
          continue;
        }
        if (qe.key != null) Fe = he.get(qe.key);
        else for (Z = le; Z <= q; Z++) if (Nn[Z - le] === 0 && jn(qe, y[Z])) {
          Fe = Z;
          break;
        }
        Fe === void 0 ? Re(qe, L, T, !0) : (Nn[Fe - le] = C + 1, Fe >= _t ? _t = Fe : Vt = !0, b(qe, y[Fe], I, null, L, T, O, A, F), Ze++);
      }
      let Ei = Vt ? (function(Fe) {
        let qe, Ds, rt, yn, Xr, ea = Fe.slice(), yt = [0], mf = Fe.length;
        for (qe = 0; qe < mf; qe++) {
          let Ai = Fe[qe];
          if (Ai !== 0) {
            if (Fe[Ds = yt[yt.length - 1]] < Ai) {
              ea[qe] = Ds, yt.push(qe);
              continue;
            }
            for (rt = 0, yn = yt.length - 1; rt < yn; ) Fe[yt[Xr = rt + yn >> 1]] < Ai ? rt = Xr + 1 : yn = Xr;
            Ai < Fe[yt[rt]] && (rt > 0 && (ea[qe] = yt[rt - 1]), yt[rt] = qe);
          }
        }
        for (rt = yt.length, yn = yt[rt - 1]; rt-- > 0; ) yt[rt] = yn, yn = ea[yn];
        return yt;
      })(Nn) : gs;
      for (Z = Ei.length - 1, C = Ye - 1; C >= 0; C--) {
        let Fe = le + C, qe = y[Fe], Ds = y[Fe + 1], rt = Fe + 1 < W ? Ds.el || Ds.placeholder : R;
        Nn[C] === 0 ? b(null, qe, I, rt, L, T, O, A, F) : Vt && (Z < 0 || C !== Ei[Z] ? Ge(qe, I, rt, 2) : Z--);
      }
    }
  }, Ge = (m, y, I, R, L = null) => {
    let { el: T, type: O, transition: A, children: F, shapeFlag: C } = m;
    if (6 & C) return void Ge(m.component.subTree, y, I, R);
    if (128 & C) return void m.suspense.move(y, I, R);
    if (64 & C) return void O.move(m, y, I, Os);
    if (O === de) {
      r(T, y, I);
      for (let W = 0; W < F.length; W++) Ge(F[W], y, I, R);
      r(m.anchor, y, I);
      return;
    }
    if (O === pa) return void (({ el: W, anchor: G }, q, Z) => {
      let ce;
      for (; W && W !== G; ) ce = g(W), r(W, q, Z), W = ce;
      r(G, q, Z);
    })(m, y, I);
    if (R !== 2 && 1 & C && A) if (R === 0) A.beforeEnter(T), r(T, y, I), lt(() => A.enter(T), L);
    else {
      let { leave: W, delayLeave: G, afterLeave: q } = A, Z = () => {
        m.ctx.isUnmounted ? a(T) : r(T, y, I);
      }, ce = () => {
        T._isLeaving && T[Xt](!0), W(T, () => {
          Z(), q && q();
        });
      };
      G ? G(T, Z, ce) : ce();
    }
    else r(T, y, I);
  }, Re = (m, y, I, R = !1, L = !1) => {
    let T, { type: O, props: A, ref: F, children: C, dynamicChildren: W, shapeFlag: G, patchFlag: q, dirs: Z, cacheIndex: ce } = m;
    if (q === -2 && (L = !1), F != null && (ln(), Ks(F, null, I, m, !0), on()), ce != null && (y.renderCache[ce] = void 0), 256 & G) return void y.ctx.deactivate(m);
    let le = 1 & G && Z, he = !bs(m);
    if (he && (T = A && A.onVnodeBeforeUnmount) && Nt(T, y, m), 6 & G) Yt(m.component, I, R);
    else {
      if (128 & G) return void m.suspense.unmount(I, R);
      le && Rn(m, null, y, "beforeUnmount"), 64 & G ? m.type.remove(m, y, I, Os, R) : W && !W.hasOnce && (O !== de || q > 0 && 64 & q) ? Bs(W, y, I, !1, !0) : (O === de && 384 & q || !L && 16 & G) && Bs(C, y, I), R && ft(m);
    }
    (he && (T = A && A.onVnodeUnmounted) || le) && lt(() => {
      T && Nt(T, y, m), le && Rn(m, null, y, "unmounted");
    }, I);
  }, ft = (m) => {
    let { type: y, el: I, anchor: R, transition: L } = m;
    if (y === de) return void _n(I, R);
    if (y === pa) return void (({ el: O, anchor: A }) => {
      let F;
      for (; O && O !== A; ) F = g(O), a(O), O = F;
      a(A);
    })(m);
    let T = () => {
      a(I), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (1 & m.shapeFlag && L && !L.persisted) {
      let { leave: O, delayLeave: A } = L, F = () => O(I, T);
      A ? A(m.el, T, F) : F();
    } else T();
  }, _n = (m, y) => {
    let I;
    for (; m !== y; ) I = g(m), a(m), m = I;
    a(y);
  }, Yt = (m, y, I) => {
    let { bum: R, scope: L, job: T, subTree: O, um: A, m: F, a: C } = m;
    lo(F), lo(C), R && Hi(R), L.stop(), T && (T.flags |= 8, Re(O, m, y, I)), A && lt(A, y), lt(() => {
      m.isUnmounted = !0;
    }, y);
  }, Bs = (m, y, I, R = !1, L = !1, T = 0) => {
    for (let O = T; O < m.length; O++) Re(m[O], y, I, R, L);
  }, xi = (m) => {
    if (6 & m.shapeFlag) return xi(m.component.subTree);
    if (128 & m.shapeFlag) return m.suspense.next();
    let y = g(m.anchor || m.el), I = y && y[Qu];
    return I ? g(I) : y;
  }, Jr = !1, Qr = (m, y, I) => {
    m == null ? y._vnode && Re(y._vnode, null, null, !0) : b(y._vnode || null, m, y, null, null, null, I), y._vnode = m, Jr || (Jr = !0, Gl(), Ku(), Jr = !1);
  }, Os = { p: b, um: Re, m: Ge, r: ft, mt: fe, mc: $, pc: ve, pbc: Y, n: xi, o: t };
  return { render: Qr, hydrate: s, createApp: (n = s, function(m, y = null) {
    ae(m) || (m = ze({}, m)), y == null || Ee(y) || (y = null);
    let I = mc(), R = /* @__PURE__ */ new WeakSet(), L = [], T = !1, O = I.app = { _uid: rh++, _component: m, _props: y, _container: null, _context: I, _instance: null, version: Fh, get config() {
      return I.config;
    }, set config(A) {
    }, use: (A, ...F) => (R.has(A) || (A && ae(A.install) ? (R.add(A), A.install(O, ...F)) : ae(A) && (R.add(A), A(O, ...F))), O), mixin: (A) => (I.mixins.includes(A) || I.mixins.push(A), O), component: (A, F) => F ? (I.components[A] = F, O) : I.components[A], directive: (A, F) => F ? (I.directives[A] = F, O) : I.directives[A], mount(A, F, C) {
      if (!T) {
        let W = O._ceVNode || D(m, y);
        return W.appContext = I, C === !0 ? C = "svg" : C === !1 && (C = void 0), F && n ? n(W, A) : Qr(W, A, C), T = !0, O._container = A, A.__vue_app__ = O, Br(W.component);
      }
    }, onUnmount(A) {
      L.push(A);
    }, unmount() {
      T && (Ot(L, O._instance, 16), Qr(null, O._container), delete O._container.__vue_app__);
    }, provide: (A, F) => (I.provides[A] = F, O), runWithContext(A) {
      let F = Jn;
      Jn = O;
      try {
        return A();
      } finally {
        Jn = F;
      }
    } };
    return O;
  }) };
}
function ma({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Pn({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function kh(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Tl(t, e, n = !1) {
  let s = t.children, i = e.children;
  if (X(s) && X(i)) for (let r = 0; r < s.length; r++) {
    let a = s[r], l = i[r];
    1 & l.shapeFlag && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[r] = xn(i[r])).el = a.el), n || l.patchFlag === -2 || Tl(a, l)), l.type === Mr && l.patchFlag !== -1 && (l.el = a.el), l.type !== Ke || l.el || (l.el = a.el);
  }
}
function lo(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8;
}
let Sc = (t) => t.__isSuspense;
function wh(t, e) {
  e && e.pendingBranch ? X(t) ? e.effects.push(...t) : e.effects.push(t) : qf(t);
}
let de = Symbol.for("v-fgt"), Mr = Symbol.for("v-txt"), Ke = Symbol.for("v-cmt"), pa = Symbol.for("v-stc"), Qs = [], mt = null;
function v(t = !1) {
  Qs.push(mt = t ? null : []);
}
function Sh() {
  Qs.pop(), mt = Qs[Qs.length - 1] || null;
}
let ai = 1;
function ar(t, e = !1) {
  ai += t, t < 0 && mt && e && (mt.hasOnce = !0);
}
function Ic(t) {
  return t.dynamicChildren = ai > 0 ? mt || gs : null, Sh(), ai > 0 && mt && mt.push(t), t;
}
function _(t, e, n, s, i, r) {
  return Ic(ye(t, e, n, s, i, r, !0));
}
function V(t, e, n, s, i) {
  return Ic(D(t, e, n, s, i, !0));
}
function li(t) {
  return !!t && t.__v_isVNode === !0;
}
function jn(t, e) {
  return t.type === e.type && t.key === e.key;
}
let Tc = ({ key: t }) => t ?? null, Ui = ({ ref: t, ref_key: e, ref_for: n }) => (typeof t == "number" && (t = "" + t), t != null ? Be(t) || Oe(t) || ae(t) ? { i: Je, r: t, k: e, f: !!n } : t : null);
function ye(t, e = null, n = null, s = 0, i = null, r = +(t !== de), a = !1, l = !1) {
  let o = { __v_isVNode: !0, __v_skip: !0, type: t, props: e, key: e && Tc(e), ref: e && Ui(e), scopeId: Ju, slotScopeIds: null, children: n, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: r, patchFlag: s, dynamicProps: i, dynamicChildren: null, appContext: null, ctx: Je };
  return l ? (Cl(o, n), 128 & r && t.normalize(o)) : n && (o.shapeFlag |= Be(n) ? 8 : 16), ai > 0 && !a && mt && (o.patchFlag > 0 || 6 & r) && o.patchFlag !== 32 && mt.push(o), o;
}
let D = function(t, e = null, n = null, s = 0, i = null, r = !1) {
  var a;
  if (t && t !== cc || (t = Ke), li(t)) {
    let o = Bn(t, e, !0);
    return n && Cl(o, n), ai > 0 && !r && mt && (6 & o.shapeFlag ? mt[mt.indexOf(t)] = o : mt.push(o)), o.patchFlag = -2, o;
  }
  if (ae(a = t) && "__vccOpts" in a && (t = t.__vccOpts), e) {
    let { class: o, style: u } = e = qi(e);
    o && !Be(o) && (e.class = x(o)), Ee(u) && (Er(u) && !X(u) && (u = ze({}, u)), e.style = it(u));
  }
  let l = Be(t) ? 1 : Sc(t) ? 128 : t.__isTeleport ? 64 : Ee(t) ? 4 : 2 * !!ae(t);
  return ye(t, e, n, s, i, l, r, !0);
};
function qi(t) {
  return t ? Er(t) || vc(t) ? ze({}, t) : t : null;
}
function Bn(t, e, n = !1, s = !1) {
  let { props: i, ref: r, patchFlag: a, children: l, transition: o } = t, u = e ? wt(i || {}, e) : i, d = { __v_isVNode: !0, __v_skip: !0, type: t.type, props: u, key: u && Tc(u), ref: e && e.ref ? n && r ? X(r) ? r.concat(Ui(e)) : [r, Ui(e)] : Ui(e) : r, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: e && t.type !== de ? a === -1 ? 16 : 16 | a : a, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: o, component: t.component, suspense: t.suspense, ssContent: t.ssContent && Bn(t.ssContent), ssFallback: t.ssFallback && Bn(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
  return o && s && ns(d, o.clone(d)), d;
}
function mi(t = " ", e = 0) {
  return D(Mr, null, t, e);
}
function J(t = "", e = !1) {
  return e ? (v(), V(Ke, null, t)) : D(Ke, null, t);
}
function zt(t) {
  return t == null || typeof t == "boolean" ? D(Ke) : X(t) ? D(de, null, t.slice()) : li(t) ? xn(t) : D(Mr, null, String(t));
}
function xn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Bn(t);
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
    for (let i in s) if (i === "class") e.class !== s.class && (e.class = x([e.class, s.class]));
    else if (i === "style") e.style = it([e.style, s.style]);
    else if (vr(i)) {
      let r = e[i], a = s[i];
      a && r !== a && !(X(r) && r.includes(a)) && (e[i] = r ? [].concat(r, a) : a);
    } else i !== "" && (e[i] = s[i]);
  }
  return e;
}
function Nt(t, e, n, s = null) {
  Ot(t, e, 7, [n, s]);
}
let Ih = mc(), Th = 0;
function Ch(t, e, n) {
  let s = t.type, i = (e ? e.appContext : t.appContext) || Ih, r = { uid: Th++, vnode: t, type: s, parent: e, appContext: i, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new Au(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: e ? e.provides : Object.create(i.provides), ids: e ? e.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: (function a(l, o, u = !1) {
    let d = u ? gh : o.propsCache, f = d.get(l);
    if (f) return f;
    let p = l.props, h = {}, g = [], w = !1;
    if (!ae(l)) {
      let b = (E) => {
        w = !0;
        let [k, B] = a(E, o, !0);
        ze(h, k), B && g.push(...B);
      };
      !u && o.mixins.length && o.mixins.forEach(b), l.extends && b(l.extends), l.mixins && l.mixins.forEach(b);
    }
    if (!p && !w) return Ee(l) && d.set(l, gs), gs;
    if (X(p)) for (let b = 0; b < p.length; b++) {
      let E = vt(p[b]);
      ao(E) && (h[E] = we);
    }
    else if (p) for (let b in p) {
      let E = vt(b);
      if (ao(E)) {
        let k = p[b], B = h[E] = X(k) || ae(k) ? { type: k } : ze({}, k), N = B.type, z = !1, K = !0;
        if (X(N)) for (let $ = 0; $ < N.length; ++$) {
          let M = N[$], Y = ae(M) && M.name;
          if (Y === "Boolean") {
            z = !0;
            break;
          }
          Y === "String" && (K = !1);
        }
        else z = ae(N) && N.name === "Boolean";
        B[0] = z, B[1] = K, (z || Ie(B, "default")) && g.push(E);
      }
    }
    let S = [h, g];
    return Ee(l) && d.set(l, S), S;
  })(s, i), emitsOptions: (function a(l, o, u = !1) {
    let d = u ? fh : o.emitsCache, f = d.get(l);
    if (f !== void 0) return f;
    let p = l.emits, h = {}, g = !1;
    if (!ae(l)) {
      let w = (S) => {
        let b = a(S, o, !0);
        b && (g = !0, ze(h, b));
      };
      !u && o.mixins.length && o.mixins.forEach(w), l.extends && w(l.extends), l.mixins && l.mixins.forEach(w);
    }
    return p || g ? (X(p) ? p.forEach((w) => h[w] = null) : ze(h, p), Ee(l) && d.set(l, h), h) : (Ee(l) && d.set(l, null), null);
  })(s, i), emit: null, emitted: null, propsDefaults: we, inheritAttrs: s.inheritAttrs, ctx: we, data: we, props: we, attrs: we, slots: we, refs: we, setupState: we, setupContext: null, suspense: n, suspenseId: n ? n.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return r.ctx = { _: r }, r.root = e ? e.root : r, r.emit = dh.bind(null, r), t.ce && t.ce(r), r;
}
let tt = null, Zt = () => tt || Je;
{
  let t = Sr(), e = (n, s) => {
    let i;
    return (i = t[n]) || (i = t[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((a) => a(r)) : i[0](r);
    };
  };
  Ji = e("__VUE_INSTANCE_SETTERS__", (n) => tt = n), Ma = e("__VUE_SSR_SETTERS__", (n) => oi = n);
}
let pi = (t) => {
  let e = tt;
  return Ji(t), t.scope.on(), () => {
    t.scope.off(), Ji(e);
  };
}, oo = () => {
  tt && tt.scope.off(), Ji(null);
};
function Cc(t) {
  return 4 & t.vnode.shapeFlag;
}
let oi = !1;
function xh(t, e = !1, n = !1) {
  e && Ma(e);
  let { props: s, children: i } = t.vnode, r = Cc(t);
  (function(u, d, f, p = !1) {
    let h = {}, g = Object.create(Pa);
    for (let w in u.propsDefaults = /* @__PURE__ */ Object.create(null), yc(u, d, h, g), u.propsOptions[0]) w in h || (h[w] = void 0);
    f ? u.props = p ? h : Df(h) : u.type.props ? u.props = h : u.props = g, u.attrs = g;
  })(t, s, r, e);
  var a = n || e;
  let l = t.slots = Object.create(Pa);
  if (32 & t.vnode.shapeFlag) {
    let u = i._;
    u ? (wc(l, i, a), a && Cu(l, "_", u, !0)) : bc(i, l);
  } else i && kc(t, i);
  let o = r ? (function(u, d) {
    let f = u.type;
    u.accessCache = /* @__PURE__ */ Object.create(null), u.proxy = new Proxy(u.ctx, _a);
    let { setup: p } = f;
    if (p) {
      ln();
      let h = u.setupContext = p.length > 1 ? Ec(u) : null, g = pi(u), w = hi(p, u, 0, [u.props, h]), S = Tu(w);
      if (on(), g(), (S || u.sp) && !bs(u) && ac(u), S) {
        if (w.then(oo, oo), d) return w.then((b) => {
          uo(u, b);
        }).catch((b) => {
          Ar(b, u, 0);
        });
        u.asyncDep = w;
      } else uo(u, w);
    } else xc(u);
  })(t, e) : void 0;
  return e && Ma(!1), o;
}
function uo(t, e, n) {
  ae(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ee(e) && (t.setupState = ju(e)), xc(t);
}
function xc(t, e, n) {
  let s = t.type;
  t.render || (t.render = s.render || Wt);
  {
    let i = pi(t);
    ln();
    try {
      (function(r) {
        let a = hc(r), l = r.proxy, o = r.ctx;
        Na = !1, a.beforeCreate && to(a.beforeCreate, r, "bc");
        let { data: u, computed: d, methods: f, watch: p, provide: h, inject: g, created: w, beforeMount: S, mounted: b, beforeUpdate: E, updated: k, activated: B, deactivated: N, beforeUnmount: z, unmounted: K, render: $, renderTracked: M, renderTriggered: Y, errorCaptured: Q, serverPrefetch: P, expose: te, inheritAttrs: fe, components: oe, directives: Le } = a;
        if (g && (function(ve, xe, Ne = Wt) {
          for (let Ge in X(ve) && (ve = Ra(ve)), ve) {
            let Re, ft = ve[Ge];
            Oe(Re = Ee(ft) ? "default" in ft ? an(ft.from || Ge, ft.default, !0) : an(ft.from || Ge) : an(ft)) ? Object.defineProperty(xe, Ge, { enumerable: !0, configurable: !0, get: () => Re.value, set: (_n) => Re.value = _n }) : xe[Ge] = Re;
          }
        })(g, o, null), f) for (let ve in f) {
          let xe = f[ve];
          ae(xe) && (o[ve] = xe.bind(l));
        }
        if (u) {
          let ve = u.call(l, l);
          Ee(ve) && (r.data = mn(ve));
        }
        if (Na = !0, d) for (let ve in d) {
          let xe = d[ve], Ne = ae(xe) ? xe.bind(l, l) : ae(xe.get) ? xe.get.bind(l, l) : Wt, Ge = Ae({ get: Ne, set: !ae(xe) && ae(xe.set) ? xe.set.bind(l) : Wt });
          Object.defineProperty(o, ve, { enumerable: !0, configurable: !0, get: () => Ge.value, set: (Re) => Ge.value = Re });
        }
        if (p) for (let ve in p) (function xe(Ne, Ge, Re, ft) {
          let _n = ft.includes(".") ? pc(Re, ft) : () => Re[ft];
          if (Be(Ne)) {
            let Yt = Ge[Ne];
            ae(Yt) && De(_n, Yt);
          } else if (ae(Ne)) De(_n, Ne.bind(Re));
          else if (Ee(Ne)) if (X(Ne)) Ne.forEach((Yt) => xe(Yt, Ge, Re, ft));
          else {
            let Yt = ae(Ne.handler) ? Ne.handler.bind(Re) : Ge[Ne.handler];
            ae(Yt) && De(_n, Yt, Ne);
          }
        })(p[ve], o, l, ve);
        if (h) {
          let ve = ae(h) ? h.call(l) : h;
          Reflect.ownKeys(ve).forEach((xe) => {
            Mn(xe, ve[xe]);
          });
        }
        function be(ve, xe) {
          X(xe) ? xe.forEach((Ne) => ve(Ne.bind(l))) : xe && ve(xe.bind(l));
        }
        if (w && to(w, r, "c"), be(Yf, S), be(gn, b), be(Kf, E), be(oc, k), be(Gf, B), be(Zf, N), be(eh, Q), be(Xf, M), be(Qf, Y), be(bl, z), be(is, K), be(Jf, P), X(te)) if (te.length) {
          let ve = r.exposed || (r.exposed = {});
          te.forEach((xe) => {
            Object.defineProperty(ve, xe, { get: () => l[xe], set: (Ne) => l[xe] = Ne, enumerable: !0 });
          });
        } else r.exposed || (r.exposed = {});
        $ && r.render === Wt && (r.render = $), fe != null && (r.inheritAttrs = fe), oe && (r.components = oe), Le && (r.directives = Le), P && ac(r);
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
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(ju(ml(t.exposed)), { get: (e, n) => n in e ? e[n] : n in Js ? Js[n](t) : void 0, has: (e, n) => n in e || n in Js })) : t.proxy;
}
function Ah(t, e = !0) {
  return ae(t) ? t.displayName || t.name : t.name || e && t.__name;
}
let Ae = (t, e) => (function(n, s, i = !1) {
  let r, a;
  return ae(n) ? r = n : (r = n.get, a = n.set), new Wf(r, a, i);
})(t, 0, oi);
function ks(t, e, n) {
  try {
    ar(-1);
    let s = arguments.length;
    return s !== 2 ? (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && li(n) && (n = [n]), D(t, e, n)) : !Ee(e) || X(e) ? D(t, null, e) : li(e) ? D(t, null, [e]) : D(t, e);
  } finally {
    ar(1);
  }
}
let Fh = "3.5.25", co = typeof window < "u" && window.trustedTypes;
if (co) try {
  Ba = co.createPolicy("vue", { createHTML: (t) => t });
} catch {
}
let Ac = Ba ? (t) => Ba.createHTML(t) : (t) => t, Qt = typeof document < "u" ? document : null, fo = Qt && Qt.createElement("template"), $h = { insert: (t, e, n) => {
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
    fo.innerHTML = Ac(s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t);
    let l = fo.content;
    if (s === "svg" || s === "mathml") {
      let o = l.firstChild;
      for (; o.firstChild; ) l.appendChild(o.firstChild);
      l.removeChild(o);
    }
    e.insertBefore(l, n);
  }
  return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
} }, bn = "transition", Ns = "animation", Ts = Symbol("_vtc"), Fc = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, $c = ze({}, nc, Fc), ss = ((ta = (t, { slots: e }) => ks(jf, Lc(t), e)).displayName = "Transition", ta.props = $c, ta), zn = (t, e = []) => {
  X(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, ho = (t) => !!t && (X(t) ? t.some((e) => e.length > 1) : t.length > 1);
function Lc(t) {
  let e = {};
  for (let P in t) P in Fc || (e[P] = t[P]);
  if (t.css === !1) return e;
  let { name: n = "v", type: s, duration: i, enterFromClass: r = `${n}-enter-from`, enterActiveClass: a = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: o = r, appearActiveClass: u = a, appearToClass: d = l, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = t, g = (function(P) {
    if (P == null) return null;
    {
      if (Ee(P)) return [(function(fe) {
        return ia(fe);
      })(P.enter), (function(fe) {
        return ia(fe);
      })(P.leave)];
      let te = (function(fe) {
        return ia(fe);
      })(P);
      return [te, te];
    }
  })(i), w = g && g[0], S = g && g[1], { onBeforeEnter: b, onEnter: E, onEnterCancelled: k, onLeave: B, onLeaveCancelled: N, onBeforeAppear: z = b, onAppear: K = E, onAppearCancelled: $ = k } = e, M = (P, te, fe, oe) => {
    P._enterCancelled = oe, Sn(P, te ? d : l), Sn(P, te ? u : a), fe && fe();
  }, Y = (P, te) => {
    P._isLeaving = !1, Sn(P, f), Sn(P, h), Sn(P, p), te && te();
  }, Q = (P) => (te, fe) => {
    let oe = P ? K : E, Le = () => M(te, P, fe);
    zn(oe, [te, Le]), mo(() => {
      Sn(te, P ? o : r), Rt(te, P ? d : l), ho(oe) || po(te, s, w, Le);
    });
  };
  return ze(e, { onBeforeEnter(P) {
    zn(b, [P]), Rt(P, r), Rt(P, a);
  }, onBeforeAppear(P) {
    zn(z, [P]), Rt(P, o), Rt(P, u);
  }, onEnter: Q(!1), onAppear: Q(!0), onLeave(P, te) {
    P._isLeaving = !0;
    let fe = () => Y(P, te);
    Rt(P, f), P._enterCancelled ? (Rt(P, p), Ha(P)) : (Ha(P), Rt(P, p)), mo(() => {
      P._isLeaving && (Sn(P, f), Rt(P, h), ho(B) || po(P, s, S, fe));
    }), zn(B, [P, fe]);
  }, onEnterCancelled(P) {
    M(P, !1, void 0, !0), zn(k, [P]);
  }, onAppearCancelled(P) {
    M(P, !0, void 0, !0), zn($, [P]);
  }, onLeaveCancelled(P) {
    Y(P), zn(N, [P]);
  } });
}
function Rt(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t[Ts] || (t[Ts] = /* @__PURE__ */ new Set())).add(e);
}
function Sn(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  let n = t[Ts];
  n && (n.delete(e), n.size || (t[Ts] = void 0));
}
function mo(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let Lh = 0;
function po(t, e, n, s) {
  let i = t._endId = ++Lh, r = () => {
    i === t._endId && s();
  };
  if (n != null) return setTimeout(r, n);
  let { type: a, timeout: l, propCount: o } = Mc(t, e);
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
function Mc(t, e) {
  let n = window.getComputedStyle(t), s = (g) => (n[g] || "").split(", "), i = s(`${bn}Delay`), r = s(`${bn}Duration`), a = go(i, r), l = s(`${Ns}Delay`), o = s(`${Ns}Duration`), u = go(l, o), d = null, f = 0, p = 0;
  e === bn ? a > 0 && (d = bn, f = a, p = r.length) : e === Ns ? u > 0 && (d = Ns, f = u, p = o.length) : p = (d = (f = Math.max(a, u)) > 0 ? a > u ? bn : Ns : null) ? d === bn ? r.length : o.length : 0;
  let h = d === bn && /\b(?:transform|all)(?:,|$)/.test(s(`${bn}Property`).toString());
  return { type: d, timeout: f, propCount: p, hasTransform: h };
}
function go(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => vo(n) + vo(t[s])));
}
function vo(t) {
  return t === "auto" ? 0 : 1e3 * Number(t.slice(0, -1).replace(",", "."));
}
function Ha(t) {
  return (t ? t.ownerDocument : document).body.offsetHeight;
}
let yo = Symbol("_vod"), Mh = Symbol("_vsh"), Bh = Symbol(""), Oh = /(?:^|;)\s*display\s*:/, bo = /\s*!important$/;
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
      for (let o = 0; o < ko.length; o++) {
        let u = ko[o] + l;
        if (u in i) return ga[r] = u;
      }
      return r;
    })(t, e);
    bo.test(n) ? t.setProperty(Vn(s), n.replace(bo, ""), "important") : t[s] = n;
  }
}
let ko = ["Webkit", "Moz", "ms"], ga = {}, wo = "http://www.w3.org/1999/xlink";
function So(t, e, n, s, i, r = Sf(e)) {
  s && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(wo, e.slice(6, e.length)) : t.setAttributeNS(wo, e, n) : n == null || r && !(n || n === "") ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : Bt(n) ? String(n) : n);
}
function Io(t, e, n, s, i) {
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
let To = Symbol("_vei"), Co = /(?:Once|Passive|Capture)$/, va = 0, Dh = Promise.resolve(), xo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && 123 > t.charCodeAt(2), Vh = (t, e, n, s, i, r) => {
  let a = i === "svg";
  if (e === "class") {
    var l;
    let o;
    l = s, (o = t[Ts]) && (l = (l ? [l, ...o] : [...o]).join(" ")), l == null ? t.removeAttribute("class") : a ? t.setAttribute("class", l) : t.className = l;
  } else e === "style" ? (function(o, u, d) {
    let f = o.style, p = Be(d), h = !1;
    if (d && !p) {
      if (u) if (Be(u)) for (let g of u.split(";")) {
        let w = g.slice(0, g.indexOf(":")).trim();
        d[w] == null && ji(f, w, "");
      }
      else for (let g in u) d[g] == null && ji(f, g, "");
      for (let g in d) g === "display" && (h = !0), ji(f, g, d[g]);
    } else if (p) {
      if (u !== d) {
        let g = f[Bh];
        g && (d += ";" + g), f.cssText = d, h = Oh.test(d);
      }
    } else u && o.removeAttribute("style");
    yo in o && (o[yo] = h ? f.display : "", o[Mh] && (f.display = "none"));
  })(t, n, s) : vr(e) ? ol(e) || (function(o, u, d, f, p = null) {
    let h = o[To] || (o[To] = {}), g = h[u];
    if (f && g) g.value = f;
    else {
      let [b, E] = (function(k) {
        let B;
        if (Co.test(k)) {
          let N;
          for (B = {}; N = k.match(Co); ) k = k.slice(0, k.length - N[0].length), B[N[0].toLowerCase()] = !0;
        }
        return [k[2] === ":" ? k.slice(3) : Vn(k.slice(2)), B];
      })(u);
      if (f) {
        var w, S;
        let k;
        nn(o, b, h[u] = (w = f, S = p, (k = (B) => {
          if (B._vts) {
            if (B._vts <= k.attached) return;
          } else B._vts = Date.now();
          Ot((function(N, z) {
            if (!X(z)) return z;
            {
              let K = N.stopImmediatePropagation;
              return N.stopImmediatePropagation = () => {
                K.call(N), N._stopped = !0;
              }, z.map(($) => (M) => !M._stopped && $ && $(M));
            }
          })(B, k.value), S, 5, [B]);
        }).value = w, k.attached = va || (Dh.then(() => va = 0), va = Date.now()), k), E);
      } else g && (o.removeEventListener(b, g, E), h[u] = void 0);
    }
  })(t, e, 0, s, r) : (e[0] === "." ? (e = e.slice(1), 0) : e[0] === "^" ? (e = e.slice(1), 1) : !(function(o, u, d, f) {
    if (f) return !!(u === "innerHTML" || u === "textContent" || u in o && xo(u) && ae(d));
    if (u === "spellcheck" || u === "draggable" || u === "translate" || u === "autocorrect" || u === "sandbox" && o.tagName === "IFRAME" || u === "form" || u === "list" && o.tagName === "INPUT" || u === "type" && o.tagName === "TEXTAREA") return !1;
    if (u === "width" || u === "height") {
      let p = o.tagName;
      if (p === "IMG" || p === "VIDEO" || p === "CANVAS" || p === "SOURCE") return !1;
    }
    return !(xo(u) && Be(d)) && u in o;
  })(t, e, s, a)) ? t._isVueCE && (/[A-Z]/.test(e) || !Be(s)) ? Io(t, vt(e), s, r, e) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), So(t, e, s, a)) : (Io(t, e, s), t.tagName.includes("-") || e !== "value" && e !== "checked" && e !== "selected" || So(t, e, s, a, r, e !== "value"));
}, Bc = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap(), lr = Symbol("_moveCb"), Eo = Symbol("_enterCb"), Dc = (na = { name: "TransitionGroup", props: ze({}, $c, { tag: String, moveClass: String }), setup(t, { slots: e }) {
  let n, s, i = Zt(), r = tc();
  return oc(() => {
    if (!n.length) return;
    let a = t.moveClass || `${t.name || "v"}-move`;
    if (!(function(o, u, d) {
      let f = o.cloneNode(), p = o[Ts];
      p && p.forEach((w) => {
        w.split(/\s+/).forEach((S) => S && f.classList.remove(S));
      }), d.split(/\s+/).forEach((w) => w && f.classList.add(w)), f.style.display = "none";
      let h = u.nodeType === 1 ? u : u.parentNode;
      h.appendChild(f);
      let { hasTransform: g } = Mc(f);
      return h.removeChild(f), g;
    })(n[0].el, i.vnode.el, a)) {
      n = [];
      return;
    }
    n.forEach(_h), n.forEach(Nh);
    let l = n.filter(Rh);
    Ha(i.vnode.el), l.forEach((o) => {
      let u = o.el, d = u.style;
      Rt(u, a), d.transform = d.webkitTransform = d.transitionDuration = "";
      let f = u[lr] = (p) => {
        (!p || p.target === u) && (!p || p.propertyName.endsWith("transform")) && (u.removeEventListener("transitionend", f), u[lr] = null, Sn(u, a));
      };
      u.addEventListener("transitionend", f);
    }), n = [];
  }), () => {
    let a = me(t), l = Lc(a), o = a.tag || de;
    if (n = [], s) for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.el && d.el instanceof Element && (n.push(d), ns(d, ri(d, l, r, i)), Bc.set(d, { left: d.el.offsetLeft, top: d.el.offsetTop }));
    }
    s = e.default ? vl(e.default()) : [];
    for (let u = 0; u < s.length; u++) {
      let d = s[u];
      d.key != null && ns(d, ri(d, l, r, i));
    }
    return D(o, null, s);
  };
} }, delete na.props.mode, na);
function _h(t) {
  let e = t.el;
  e[lr] && e[lr](), e[Eo] && e[Eo]();
}
function Nh(t) {
  Oc.set(t, { left: t.el.offsetLeft, top: t.el.offsetTop });
}
function Rh(t) {
  let e = Bc.get(t), n = Oc.get(t), s = e.left - n.left, i = e.top - n.top;
  if (s || i) {
    let r = t.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", t;
  }
}
let On = (t) => {
  let e = t.props["onUpdate:modelValue"] || !1;
  return X(e) ? (n) => Hi(e, n) : e;
};
function Ph(t) {
  t.target.composing = !0;
}
function Ao(t) {
  let e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
let Tt = Symbol("_assign");
function Fo(t, e, n) {
  return e && (t = t.trim()), n && (t = wr(t)), t;
}
let or = { created(t, { modifiers: { lazy: e, trim: n, number: s } }, i) {
  t[Tt] = On(i);
  let r = s || i.props && i.props.type === "number";
  nn(t, e ? "change" : "input", (a) => {
    a.target.composing || t[Tt](Fo(t.value, n, r));
  }), (n || r) && nn(t, "change", () => {
    t.value = Fo(t.value, n, r);
  }), e || (nn(t, "compositionstart", Ph), nn(t, "compositionend", Ao), nn(t, "change", Ao));
}, mounted(t, { value: e }) {
  t.value = e ?? "";
}, beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, a) {
  if (t[Tt] = On(a), t.composing) return;
  let l = (r || t.type === "number") && !/^0\d/.test(t.value) ? wr(t.value) : t.value, o = e ?? "";
  if (l !== o) {
    if (document.activeElement === t && t.type !== "range" && (s && e === n || i && t.value.trim() === o)) return;
    t.value = o;
  }
} }, zh = { deep: !0, created(t, e, n) {
  t[Tt] = On(n), nn(t, "change", () => {
    let s = t._modelValue, i = Cs(t), r = t.checked, a = t[Tt];
    if (X(s)) {
      let l = cl(s, i), o = l !== -1;
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
      } else a(Vc(t, r));
    }
  });
}, mounted: $o, beforeUpdate(t, e, n) {
  t[Tt] = On(n), $o(t, e, n);
} };
function $o(t, { value: e, oldValue: n }, s) {
  let i;
  if (t._modelValue = e, X(e)) i = cl(e, s.props.value) > -1;
  else {
    let r;
    if (r = e, je.call(r) === "[object Set]") i = e.has(s.props.value);
    else {
      if (e === n) return;
      i = ts(e, Vc(t, !0));
    }
  }
  t.checked !== i && (t.checked = i);
}
let Hh = { created(t, { value: e }, n) {
  t.checked = ts(e, n.props.value), t[Tt] = On(n), nn(t, "change", () => {
    t[Tt](Cs(t));
  });
}, beforeUpdate(t, { value: e, oldValue: n }, s) {
  t[Tt] = On(s), e !== n && (t.checked = ts(e, s.props.value));
} }, Wh = { deep: !0, created(t, { value: e, modifiers: { number: n } }, s) {
  let i, r = (i = e, je.call(i) === "[object Set]");
  nn(t, "change", () => {
    let a = Array.prototype.filter.call(t.options, (l) => l.selected).map((l) => n ? wr(Cs(l)) : Cs(l));
    t[Tt](t.multiple ? r ? new Set(a) : a : a[0]), t._assigning = !0, Gn(() => {
      t._assigning = !1;
    });
  }), t[Tt] = On(s);
}, mounted(t, { value: e }) {
  Lo(t, e);
}, beforeUpdate(t, e, n) {
  t[Tt] = On(n);
}, updated(t, { value: e }) {
  t._assigning || Lo(t, e);
} };
function Lo(t, e) {
  let n, s = t.multiple, i = X(e);
  if (!s || i || (n = e, je.call(n) === "[object Set]")) {
    for (let r = 0, a = t.options.length; r < a; r++) {
      let l = t.options[r], o = Cs(l);
      if (s) if (i) {
        let u = typeof o;
        u === "string" || u === "number" ? l.selected = e.some((d) => String(d) === String(o)) : l.selected = cl(e, o) > -1;
      } else l.selected = e.has(o);
      else if (ts(Cs(l), e)) {
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
function Vc(t, e) {
  let n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
let Uh = { created(t, e, n) {
  Oi(t, e, n, null, "created");
}, mounted(t, e, n) {
  Oi(t, e, n, null, "mounted");
}, beforeUpdate(t, e, n, s) {
  Oi(t, e, n, s, "beforeUpdate");
}, updated(t, e, n, s) {
  Oi(t, e, n, s, "updated");
} };
function qh(t, e) {
  switch (t) {
    case "SELECT":
      return Wh;
    case "TEXTAREA":
      return or;
    default:
      switch (e) {
        case "checkbox":
          return zh;
        case "radio":
          return Hh;
        default:
          return or;
      }
  }
}
function Oi(t, e, n, s, i) {
  let r = qh(t.tagName, n.props && n.props.type)[i];
  r && r(t, e, n, s);
}
let jh = ["ctrl", "shift", "alt", "meta"], Gh = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, e) => jh.some((n) => t[`${n}Key`] && !e.includes(n)) }, xl = (t, e) => {
  let n = t._withMods || (t._withMods = {}), s = e.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let a = 0; a < e.length; a++) {
      let l = Gh[e[a]];
      if (l && l(i, e)) return;
    }
    return t(i, ...r);
  });
}, Zh = ze({ patchProp: Vh }, $h), Yh = (...t) => {
  let e = (Ul || (Ul = yh(Zh))).createApp(...t), { mount: n } = e;
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
function _c(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = _c(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function Ct() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = _c(t)) && (s && (s += " "), s += e);
  return s;
}
const Nc = Symbol(), Rc = Symbol(), Qh = Symbol();
function Wa(t) {
  return t !== null && typeof t == "object" && !("value" in t);
}
function Xs(t) {
  return t !== null && typeof t == "object" && "value" in t;
}
const Mo = {
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
let Or = 0, tm = 0;
function zc(t) {
  const e = ++Or;
  return Me.alerts.push({
    id: e,
    ...t
  }), e;
}
function Hc(t) {
  const e = ++Or;
  return Me.confirms.push({
    id: e,
    ...t
  }), e;
}
function Wc(t) {
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
function Ua(t) {
  const e = Me.confirms.findIndex((n) => n.id === t);
  Me.confirms.splice(e, 1);
}
function qa(t) {
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
    const n = zc({
      ...t,
      onClose() {
        e(), qc(n);
      }
    });
  });
}
async function am(t) {
  return new Promise((e) => {
    const n = Hc({
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
async function lm(t) {
  return new Promise((e) => {
    const n = Wc({
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
async function Bo({ duration: t, ...e }) {
  const n = El(e);
  await new Promise((s) => setTimeout(() => requestAnimationFrame(s), t ?? em)), ur(n);
}
function gi() {
  const t = Ae(() => Me.dialogCount > 0), e = Ae(() => Me.tooltips[Me.tooltips.length - 1] || null);
  return {
    ...Me,
    inertMain: t,
    tooltip: e,
    addAlert: zc,
    addConfirm: Hc,
    addPrompt: Wc,
    addSnackbar: El,
    addTooltip: nm,
    registerDialog: Uc,
    removeAlert: qc,
    removeConfirm: Ua,
    removePrompt: qa,
    removeSnackbar: ur,
    removeTooltip: sm,
    showAlert: rm,
    showConfirm: am,
    showPrompt: lm,
    showSnackbar: Bo,
    updateSnackbar: jc,
    updateTooltip: im,
    showSnackbarSync: om(Bo)
  };
}
function om(t) {
  return (...e) => t(...e);
}
function ws(t) {
  return typeof t == "string" || t instanceof String;
}
function Oo(t) {
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
  return t instanceof RegExp ? pe.MaskedRegExp : ws(t) ? pe.MaskedPattern : t === Date ? pe.MaskedDate : t === Number ? pe.MaskedNumber : Array.isArray(t) || t === Array ? pe.MaskedDynamic : pe.Masked && t.prototype instanceof pe.Masked ? t : pe.Masked && t instanceof pe.Masked ? t.constructor : t instanceof Function ? pe.MaskedFunction : (console.warn("Mask not found for mask", t), pe.Masked);
}
function Ga(t) {
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
    } : Oo(t) && t.mask instanceof pe.Masked ? t : {};
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
  return Oo(t) ? {
    ...t
  } : {
    mask: t
  };
}
function ui(t) {
  if (pe.Masked && t instanceof pe.Masked) return t;
  const e = Ga(t), n = Zc(e.mask);
  if (!n) throw new Error("Masked class is not found for provided mask " + e.mask + ", appropriate module needs to be imported manually before creating mask.");
  return e.mask === n && delete e.mask, e._mask && (e.mask = e._mask, delete e._mask), new n(e);
}
pe.createMask = ui;
class Al {
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
pe.MaskElement = Al;
const Do = 90, dm = 89;
class Dr extends Al {
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
    if (this._handlers.redo && (e.keyCode === Do && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === dm && e.ctrlKey))
      return e.preventDefault(), this._handlers.redo(e);
    if (this._handlers.undo && e.keyCode === Do && (e.metaKey || e.ctrlKey))
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
class hm {
  /**
    View element
  */
  /** Internal {@link Masked} model */
  constructor(e, n) {
    this.el = e instanceof Al ? e : e.isContentEditable && e.tagName !== "INPUT" && e.tagName !== "TEXTAREA" ? new Yc(e) : new fm(e), this.masked = ui(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._rawInputValue = "", this.history = new Vr(), this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this._onUndo = this._onUndo.bind(this), this._onRedo = this._onRedo.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
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
    return ws(e) && (e = new rn(String(e))), e.appendTo(this);
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
    if (!ws(e)) throw new Error("value should be string");
    const i = ws(s) ? new rn(String(s)) : s;
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
        let p;
        for (; u === this.rawInputValue && (p = this.displayValue.length); )
          f.aggregate(new Te({
            tailShift: -1
          })).aggregate(this.remove(p - 1));
      } else i === ie.FORCE_RIGHT && l.unshift();
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
    e = ws(e) ? new rn(String(e)) : e;
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
    return ws(e) && (e = new rn(String(e))), e.appendTo(this);
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
        const u = n.slice(r), d = Object.keys(this.blocks).filter((p) => u.indexOf(p) === 0);
        d.sort((p, h) => h.length - p.length);
        const f = d[0];
        if (f) {
          const {
            expose: p,
            repeat: h,
            ...g
          } = Ga(this.blocks[f]), w = {
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            autofix: this.autofix,
            ...g,
            repeat: h,
            parent: this
          }, S = h != null ? new pe.RepeatBlock(
            w
            /* TODO */
          ) : ui(w);
          S && (this._blocks.push(S), p && (this.exposeBlock = S), this._maskedBlocks[f] || (this._maskedBlocks[f] = []), this._maskedBlocks[f].push(this._blocks.length - 1)), r += f.length - 1;
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
        ...Ga(e[a]),
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
function Fl() {
  return an(Rc, {
    id: yl()
  });
}
class rs extends Error {
}
class wm extends rs {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class Sm extends rs {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Im extends rs {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class ps extends rs {
}
class Jc extends rs {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class Xe extends rs {
}
class kn extends rs {
  constructor() {
    super("Zone is an abstract class");
  }
}
const j = "numeric", Dt = "short", gt = "long", dr = {
  year: j,
  month: j,
  day: j
}, Qc = {
  year: j,
  month: Dt,
  day: j
}, Tm = {
  year: j,
  month: Dt,
  day: j,
  weekday: Dt
}, Xc = {
  year: j,
  month: gt,
  day: j
}, ed = {
  year: j,
  month: gt,
  day: j,
  weekday: gt
}, td = {
  hour: j,
  minute: j
}, nd = {
  hour: j,
  minute: j,
  second: j
}, sd = {
  hour: j,
  minute: j,
  second: j,
  timeZoneName: Dt
}, id = {
  hour: j,
  minute: j,
  second: j,
  timeZoneName: gt
}, rd = {
  hour: j,
  minute: j,
  hourCycle: "h23"
}, ad = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23"
}, ld = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23",
  timeZoneName: Dt
}, od = {
  hour: j,
  minute: j,
  second: j,
  hourCycle: "h23",
  timeZoneName: gt
}, ud = {
  year: j,
  month: j,
  day: j,
  hour: j,
  minute: j
}, cd = {
  year: j,
  month: j,
  day: j,
  hour: j,
  minute: j,
  second: j
}, dd = {
  year: j,
  month: Dt,
  day: j,
  hour: j,
  minute: j
}, fd = {
  year: j,
  month: Dt,
  day: j,
  hour: j,
  minute: j,
  second: j
}, Cm = {
  year: j,
  month: Dt,
  day: j,
  weekday: Dt,
  hour: j,
  minute: j
}, hd = {
  year: j,
  month: gt,
  day: j,
  hour: j,
  minute: j,
  timeZoneName: Dt
}, md = {
  year: j,
  month: gt,
  day: j,
  hour: j,
  minute: j,
  second: j,
  timeZoneName: Dt
}, pd = {
  year: j,
  month: gt,
  day: j,
  weekday: gt,
  hour: j,
  minute: j,
  timeZoneName: gt
}, gd = {
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
let ya = null;
class _r extends vi {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return ya === null && (ya = new _r()), ya;
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
    return Ed(e, n, s);
  }
  /** @override **/
  formatOffset(e, n) {
    return ei(this.offset(e), n);
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
const Za = /* @__PURE__ */ new Map();
function xm(t) {
  let e = Za.get(t);
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
  }), Za.set(t, e)), e;
}
const Em = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Am(t, e) {
  const n = t.format(e).replace(/\u200E/g, ""), s = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n), [, i, r, a, l, o, u, d] = s;
  return [a, i, r, l, o, u, d];
}
function Fm(t, e) {
  const n = t.formatToParts(e), s = [];
  for (let i = 0; i < n.length; i++) {
    const { type: r, value: a } = n[i], l = Em[r];
    r === "era" ? s[l] = a : se(l) || (s[l] = parseInt(a, 10));
  }
  return s;
}
const ba = /* @__PURE__ */ new Map();
class hn extends vi {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let n = ba.get(e);
    return n === void 0 && ba.set(e, n = new hn(e)), n;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ba.clear(), Za.clear();
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
    return Ed(e, n, s, this.name);
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
    return ei(this.offset(e), n);
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
    const s = xm(this.name);
    let [i, r, a, l, o, u, d] = s.formatToParts ? Fm(s, n) : Am(s, n);
    l === "BC" && (i = -Math.abs(i) + 1);
    const p = Rr({
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
    return h -= g >= 0 ? g : 1e3 + g, (p - h) / (60 * 1e3);
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
let Vo = {};
function $m(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Vo[n];
  return s || (s = new Intl.ListFormat(t, e), Vo[n] = s), s;
}
const Ya = /* @__PURE__ */ new Map();
function Ka(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Ya.get(n);
  return s === void 0 && (s = new Intl.DateTimeFormat(t, e), Ya.set(n, s)), s;
}
const Ja = /* @__PURE__ */ new Map();
function Lm(t, e = {}) {
  const n = JSON.stringify([t, e]);
  let s = Ja.get(n);
  return s === void 0 && (s = new Intl.NumberFormat(t, e), Ja.set(n, s)), s;
}
const Qa = /* @__PURE__ */ new Map();
function Mm(t, e = {}) {
  const { base: n, ...s } = e, i = JSON.stringify([t, s]);
  let r = Qa.get(i);
  return r === void 0 && (r = new Intl.RelativeTimeFormat(t, e), Qa.set(i, r)), r;
}
let Ws = null;
function Bm() {
  return Ws || (Ws = new Intl.DateTimeFormat().resolvedOptions().locale, Ws);
}
const Xa = /* @__PURE__ */ new Map();
function vd(t) {
  let e = Xa.get(t);
  return e === void 0 && (e = new Intl.DateTimeFormat(t).resolvedOptions(), Xa.set(t, e)), e;
}
const el = /* @__PURE__ */ new Map();
function Om(t) {
  let e = el.get(t);
  if (!e) {
    const n = new Intl.Locale(t);
    e = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, "minimalDays" in e || (e = { ...yd, ...e }), el.set(t, e);
  }
  return e;
}
function Dm(t) {
  const e = t.indexOf("-x-");
  e !== -1 && (t = t.substring(0, e));
  const n = t.indexOf("-u-");
  if (n === -1)
    return [t];
  {
    let s, i;
    try {
      s = Ka(t).resolvedOptions(), i = t;
    } catch {
      const o = t.substring(0, n);
      s = Ka(o).resolvedOptions(), i = o;
    }
    const { numberingSystem: r, calendar: a } = s;
    return [i, r, a];
  }
}
function Vm(t, e, n) {
  return (n || e) && (t.includes("-u-") || (t += "-u"), n && (t += `-ca-${n}`), e && (t += `-nu-${e}`)), t;
}
function _m(t) {
  const e = [];
  for (let n = 1; n <= 12; n++) {
    const s = ne.utc(2009, n, 1);
    e.push(t(s));
  }
  return e;
}
function Nm(t) {
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
function Rm(t) {
  return t.numberingSystem && t.numberingSystem !== "latn" ? !1 : t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || vd(t.locale).numberingSystem === "latn";
}
class Pm {
  constructor(e, n, s) {
    this.padTo = s.padTo || 0, this.floor = s.floor || !1;
    const { padTo: i, floor: r, ...a } = s;
    if (!n || Object.keys(a).length > 0) {
      const l = { useGrouping: !1, ...s };
      s.padTo > 0 && (l.minimumIntegerDigits = s.padTo), this.inf = Lm(e, l);
    }
  }
  format(e) {
    if (this.inf) {
      const n = this.floor ? Math.floor(e) : e;
      return this.inf.format(n);
    } else {
      const n = this.floor ? Math.floor(e) : Ol(e, 3);
      return We(n, this.padTo);
    }
  }
}
class zm {
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
    r.timeZone = r.timeZone || i, this.dtf = Ka(n, r);
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
class Hm {
  constructor(e, n, s) {
    this.opts = { style: "long", ...s }, !n && Cd() && (this.rtf = Mm(e, s));
  }
  format(e, n) {
    return this.rtf ? this.rtf.format(e, n) : c0(n, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, n) {
    return this.rtf ? this.rtf.formatToParts(e, n) : [];
  }
}
const yd = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Ce {
  static fromOpts(e) {
    return Ce.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, n, s, i, r = !1) {
    const a = e || _e.defaultLocale, l = a || (r ? "en-US" : Bm()), o = n || _e.defaultNumberingSystem, u = s || _e.defaultOutputCalendar, d = nl(i) || _e.defaultWeekSettings;
    return new Ce(l, o, u, d, a);
  }
  static resetCache() {
    Ws = null, Ya.clear(), Ja.clear(), Qa.clear(), Xa.clear(), el.clear();
  }
  static fromObject({ locale: e, numberingSystem: n, outputCalendar: s, weekSettings: i } = {}) {
    return Ce.create(e, n, s, i);
  }
  constructor(e, n, s, i, r) {
    const [a, l, o] = Dm(e);
    this.locale = a, this.numberingSystem = n || l || null, this.outputCalendar = s || o || null, this.weekSettings = i, this.intl = Vm(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = r, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Rm(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), n = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && n ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : Ce.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      nl(e.weekSettings) || this.weekSettings,
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
    return Di(this, e, $d, () => {
      const s = this.intl === "ja" || this.intl.startsWith("ja-");
      n &= !s;
      const i = n ? { month: e, day: "numeric" } : { month: e }, r = n ? "format" : "standalone";
      if (!this.monthsCache[r][e]) {
        const a = s ? (l) => this.dtFormatter(l, i).format() : (l) => this.extract(l, i, "month");
        this.monthsCache[r][e] = _m(a);
      }
      return this.monthsCache[r][e];
    });
  }
  weekdays(e, n = !1) {
    return Di(this, e, Bd, () => {
      const s = n ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, i = n ? "format" : "standalone";
      return this.weekdaysCache[i][e] || (this.weekdaysCache[i][e] = Nm(
        (r) => this.extract(r, s, "weekday")
      )), this.weekdaysCache[i][e];
    });
  }
  meridiems() {
    return Di(
      this,
      void 0,
      () => Od,
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
    return Di(this, e, Dd, () => {
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
    return new Pm(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, n = {}) {
    return new zm(e, this.intl, n);
  }
  relFormatter(e = {}) {
    return new Hm(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return $m(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || vd(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : xd() ? Om(this.locale) : yd;
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
let ka = null;
class ut extends vi {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return ka === null && (ka = new ut(0)), ka;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? ut.utcInstance : new ut(e);
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
        return new ut(Pr(n[1], n[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${ei(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${ei(-this.fixed, "narrow")}`;
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
    return ei(this.fixed, n);
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
class Wm extends vi {
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
function Fn(t, e) {
  if (se(t) || t === null)
    return e;
  if (t instanceof vi)
    return t;
  if (Ym(t)) {
    const n = t.toLowerCase();
    return n === "default" ? e : n === "local" || n === "system" ? _r.instance : n === "utc" || n === "gmt" ? ut.utcInstance : ut.parseSpecifier(n) || hn.create(t);
  } else return Ln(t) ? ut.instance(t) : typeof t == "object" && "offset" in t && typeof t.offset == "function" ? t : new Wm(t);
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
}, _o = {
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
}, Um = $l.hanidec.replace(/[\[|\]]/g, "").split("");
function qm(t) {
  let e = parseInt(t, 10);
  if (isNaN(e)) {
    e = "";
    for (let n = 0; n < t.length; n++) {
      const s = t.charCodeAt(n);
      if (t[n].search($l.hanidec) !== -1)
        e += Um.indexOf(t[n]);
      else
        for (const i in _o) {
          const [r, a] = _o[i];
          s >= r && s <= a && (e += s - r);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const tl = /* @__PURE__ */ new Map();
function jm() {
  tl.clear();
}
function xt({ numberingSystem: t }, e = "") {
  const n = t || "latn";
  let s = tl.get(n);
  s === void 0 && (s = /* @__PURE__ */ new Map(), tl.set(n, s));
  let i = s.get(e);
  return i === void 0 && (i = new RegExp(`${$l[n]}${e}`), s.set(e, i)), i;
}
let No = () => Date.now(), Ro = "system", Po = null, zo = null, Ho = null, Wo = 60, Uo, qo = null;
class _e {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return No;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    No = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Ro = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Fn(Ro, _r.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Po;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Po = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return zo;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    zo = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Ho;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Ho = e;
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
    return qo;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    qo = nl(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return Wo;
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
    Wo = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Uo;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Uo = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Ce.resetCache(), hn.resetCache(), ne.resetCache(), jm();
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
const bd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], kd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function St(t, e) {
  return new Ft(
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
function wd(t, e, n) {
  return n + (yi(t) ? kd : bd)[e - 1];
}
function Sd(t, e) {
  const n = yi(t) ? kd : bd, s = n.findIndex((r) => r < e), i = e - n[s];
  return { month: s + 1, day: i };
}
function Ml(t, e) {
  return (t - e + 7) % 7 + 1;
}
function fr(t, e = 4, n = 1) {
  const { year: s, month: i, day: r } = t, a = wd(s, i, r), l = Ml(Ll(s, i, r), n);
  let o = Math.floor((a - l + 14 - e) / 7), u;
  return o < 1 ? (u = s - 1, o = ci(u, e, n)) : o > ci(s, e, n) ? (u = s + 1, o = 1) : u = s, { weekYear: u, weekNumber: o, weekday: l, ...zr(t) };
}
function jo(t, e = 4, n = 1) {
  const { weekYear: s, weekNumber: i, weekday: r } = t, a = Ml(Ll(s, 1, e), n), l = Ss(s);
  let o = i * 7 + r - a - 7 + e, u;
  o < 1 ? (u = s - 1, o += Ss(u)) : o > l ? (u = s + 1, o -= Ss(s)) : u = s;
  const { month: d, day: f } = Sd(u, o);
  return { year: u, month: d, day: f, ...zr(t) };
}
function wa(t) {
  const { year: e, month: n, day: s } = t, i = wd(e, n, s);
  return { year: e, ordinal: i, ...zr(t) };
}
function Go(t) {
  const { year: e, ordinal: n } = t, { month: s, day: i } = Sd(e, n);
  return { year: e, month: s, day: i, ...zr(t) };
}
function Zo(t, e) {
  if (!se(t.localWeekday) || !se(t.localWeekNumber) || !se(t.localWeekYear)) {
    if (!se(t.weekday) || !se(t.weekNumber) || !se(t.weekYear))
      throw new ps(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return se(t.localWeekday) || (t.weekday = t.localWeekday), se(t.localWeekNumber) || (t.weekNumber = t.localWeekNumber), se(t.localWeekYear) || (t.weekYear = t.localWeekYear), delete t.localWeekday, delete t.localWeekNumber, delete t.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Gm(t, e = 4, n = 1) {
  const s = Nr(t.weekYear), i = It(
    t.weekNumber,
    1,
    ci(t.weekYear, e, n)
  ), r = It(t.weekday, 1, 7);
  return s ? i ? r ? !1 : St("weekday", t.weekday) : St("week", t.weekNumber) : St("weekYear", t.weekYear);
}
function Zm(t) {
  const e = Nr(t.year), n = It(t.ordinal, 1, Ss(t.year));
  return e ? n ? !1 : St("ordinal", t.ordinal) : St("year", t.year);
}
function Id(t) {
  const e = Nr(t.year), n = It(t.month, 1, 12), s = It(t.day, 1, hr(t.year, t.month));
  return e ? n ? s ? !1 : St("day", t.day) : St("month", t.month) : St("year", t.year);
}
function Td(t) {
  const { hour: e, minute: n, second: s, millisecond: i } = t, r = It(e, 0, 23) || e === 24 && n === 0 && s === 0 && i === 0, a = It(n, 0, 59), l = It(s, 0, 59), o = It(i, 0, 999);
  return r ? a ? l ? o ? !1 : St("millisecond", i) : St("second", s) : St("minute", n) : St("hour", e);
}
function se(t) {
  return typeof t > "u";
}
function Ln(t) {
  return typeof t == "number";
}
function Nr(t) {
  return typeof t == "number" && t % 1 === 0;
}
function Ym(t) {
  return typeof t == "string";
}
function Km(t) {
  return Object.prototype.toString.call(t) === "[object Date]";
}
function Cd() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function xd() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function Jm(t) {
  return Array.isArray(t) ? t : [t];
}
function Yo(t, e, n) {
  if (t.length !== 0)
    return t.reduce((s, i) => {
      const r = [e(i), i];
      return s && n(s[0], r[0]) === s[0] ? s : r;
    }, null)[1];
}
function Qm(t, e) {
  return e.reduce((n, s) => (n[s] = t[s], n), {});
}
function xs(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function nl(t) {
  if (t == null)
    return null;
  if (typeof t != "object")
    throw new Xe("Week settings must be an object");
  if (!It(t.firstDay, 1, 7) || !It(t.minimalDays, 1, 7) || !Array.isArray(t.weekend) || t.weekend.some((e) => !It(e, 1, 7)))
    throw new Xe("Invalid week settings");
  return {
    firstDay: t.firstDay,
    minimalDays: t.minimalDays,
    weekend: Array.from(t.weekend)
  };
}
function It(t, e, n) {
  return Nr(t) && t >= e && t <= n;
}
function Xm(t, e) {
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
function Bl(t) {
  if (!(se(t) || t === null || t === "")) {
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
function yi(t) {
  return t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0);
}
function Ss(t) {
  return yi(t) ? 366 : 365;
}
function hr(t, e) {
  const n = Xm(e - 1, 12) + 1, s = t + (e - n) / 12;
  return n === 2 ? yi(s) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Rr(t) {
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
function Ko(t, e, n) {
  return -Ml(Ll(t, 1, e), n) + e - 1;
}
function ci(t, e = 4, n = 1) {
  const s = Ko(t, e, n), i = Ko(t + 1, e, n);
  return (Ss(t) - s + i) / 7;
}
function sl(t) {
  return t > 99 ? t : t > _e.twoDigitCutoffYear ? 1900 + t : 2e3 + t;
}
function Ed(t, e, n, s = null) {
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
function Ad(t) {
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
      n[e(s)] = Ad(i);
    }
  return n;
}
function ei(t, e) {
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
function zr(t) {
  return Qm(t, ["hour", "minute", "second", "millisecond"]);
}
const e0 = [
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
], Fd = [
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
], t0 = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function $d(t) {
  switch (t) {
    case "narrow":
      return [...t0];
    case "short":
      return [...Fd];
    case "long":
      return [...e0];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Ld = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Md = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], n0 = ["M", "T", "W", "T", "F", "S", "S"];
function Bd(t) {
  switch (t) {
    case "narrow":
      return [...n0];
    case "short":
      return [...Md];
    case "long":
      return [...Ld];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Od = ["AM", "PM"], s0 = ["Before Christ", "Anno Domini"], i0 = ["BC", "AD"], r0 = ["B", "A"];
function Dd(t) {
  switch (t) {
    case "narrow":
      return [...r0];
    case "short":
      return [...i0];
    case "long":
      return [...s0];
    default:
      return null;
  }
}
function a0(t) {
  return Od[t.hour < 12 ? 0 : 1];
}
function l0(t, e) {
  return Bd(e)[t.weekday - 1];
}
function o0(t, e) {
  return $d(e)[t.month - 1];
}
function u0(t, e) {
  return Dd(e)[t.year < 0 ? 0 : 1];
}
function c0(t, e, n = "always", s = !1) {
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
function Jo(t, e) {
  let n = "";
  for (const s of t)
    s.literal ? n += s.val : n += e(s.val);
  return n;
}
const d0 = {
  D: dr,
  DD: Qc,
  DDD: Xc,
  DDDD: ed,
  t: td,
  tt: nd,
  ttt: sd,
  tttt: id,
  T: rd,
  TT: ad,
  TTT: ld,
  TTTT: od,
  f: ud,
  ff: dd,
  fff: hd,
  ffff: pd,
  F: cd,
  FF: fd,
  FFF: md,
  FFFF: gd
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
    return d0[e];
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
    const s = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", r = (h, g) => this.loc.extract(e, h, g), a = (h) => e.isOffsetFixed && e.offset === 0 && h.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, h.format) : "", l = () => s ? a0(e) : r({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), o = (h, g) => s ? o0(e, h) : r(g ? { month: h } : { month: h, day: "numeric" }, "month"), u = (h, g) => s ? l0(e, h) : r(
      g ? { weekday: h } : { weekday: h, month: "long", day: "numeric" },
      "weekday"
    ), d = (h) => {
      const g = nt.macroTokenToFormatOpts(h);
      return g ? this.formatWithSystemDefault(e, g) : h;
    }, f = (h) => s ? u0(e, h) : r({ era: h }, "era"), p = (h) => {
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
    return Jo(nt.parseFormat(n), p);
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
        const g = f.isNegativeDuration && h !== f.largestUnit ? s : 1;
        let w;
        return this.opts.signMode === "negativeLargestOnly" && h !== f.largestUnit ? w = "never" : this.opts.signMode === "all" ? w = "always" : w = "auto", this.num(d.get(h) * g, p.length, w);
      } else
        return p;
    }, a = nt.parseFormat(n), l = a.reduce(
      (d, { literal: f, val: p }) => f ? d : d.concat(p),
      []
    ), o = e.shiftTo(...l.map(i).filter((d) => d)), u = {
      isNegativeDuration: o < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(o.values)[0]
    };
    return Jo(a, r(o, u));
  }
}
const Vd = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
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
function _d(...t) {
  return (e, n) => {
    const s = {};
    let i;
    for (i = 0; i < t.length; i++)
      s[t[i]] = En(e[n + i]);
    return [s, null, n + i];
  };
}
const Nd = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, f0 = `(?:${Nd.source}?(?:\\[(${Vd.source})\\])?)?`, Dl = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Rd = RegExp(`${Dl.source}${f0}`), Vl = RegExp(`(?:[Tt]${Rd.source})?`), h0 = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, m0 = /(\d{4})-?W(\d\d)(?:-?(\d))?/, p0 = /(\d{4})-?(\d{3})/, g0 = _d("weekYear", "weekNumber", "weekDay"), v0 = _d("year", "ordinal"), y0 = /(\d{4})-(\d\d)-(\d\d)/, Pd = RegExp(
  `${Dl.source} ?(?:${Nd.source}|(${Vd.source}))?`
), b0 = RegExp(`(?: ${Pd.source})?`);
function Is(t, e, n) {
  const s = t[e];
  return se(s) ? n : En(s);
}
function k0(t, e) {
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
    milliseconds: Bl(t[e + 3])
  }, null, e + 4];
}
function bi(t, e) {
  const n = !t[e] && !t[e + 1], s = Pr(t[e + 1], t[e + 2]), i = n ? null : ut.instance(s);
  return [{}, i, e + 3];
}
function ki(t, e) {
  const n = t[e] ? hn.create(t[e]) : null;
  return [{}, n, e + 1];
}
const w0 = RegExp(`^T?${Dl.source}$`), S0 = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function I0(t) {
  const [e, n, s, i, r, a, l, o, u] = t, d = e[0] === "-", f = o && o[0] === "-", p = (h, g = !1) => h !== void 0 && (g || h && d) ? -h : h;
  return [
    {
      years: p(Hn(n)),
      months: p(Hn(s)),
      weeks: p(Hn(i)),
      days: p(Hn(r)),
      hours: p(Hn(a)),
      minutes: p(Hn(l)),
      seconds: p(Hn(o), o === "-0"),
      milliseconds: p(Bl(u), f)
    }
  ];
}
const T0 = {
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
function _l(t, e, n, s, i, r, a) {
  const l = {
    year: e.length === 2 ? sl(En(e)) : En(e),
    month: Fd.indexOf(n) + 1,
    day: En(s),
    hour: En(i),
    minute: En(r)
  };
  return a && (l.second = En(a)), t && (l.weekday = t.length > 3 ? Ld.indexOf(t) + 1 : Md.indexOf(t) + 1), l;
}
const C0 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function x0(t) {
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
  ] = t, p = _l(e, i, s, n, r, a, l);
  let h;
  return o ? h = T0[o] : u ? h = 0 : h = Pr(d, f), [p, new ut(h)];
}
function E0(t) {
  return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const A0 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, F0 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, $0 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Qo(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [_l(e, i, s, n, r, a, l), ut.utcInstance];
}
function L0(t) {
  const [, e, n, s, i, r, a, l] = t;
  return [_l(e, l, n, s, i, r, a), ut.utcInstance];
}
const M0 = Fs(h0, Vl), B0 = Fs(m0, Vl), O0 = Fs(p0, Vl), D0 = Fs(Rd), zd = $s(
  k0,
  Ms,
  bi,
  ki
), V0 = $s(
  g0,
  Ms,
  bi,
  ki
), _0 = $s(
  v0,
  Ms,
  bi,
  ki
), N0 = $s(
  Ms,
  bi,
  ki
);
function R0(t) {
  return Ls(
    t,
    [M0, zd],
    [B0, V0],
    [O0, _0],
    [D0, N0]
  );
}
function P0(t) {
  return Ls(E0(t), [C0, x0]);
}
function z0(t) {
  return Ls(
    t,
    [A0, Qo],
    [F0, Qo],
    [$0, L0]
  );
}
function H0(t) {
  return Ls(t, [S0, I0]);
}
const W0 = $s(Ms);
function U0(t) {
  return Ls(t, [w0, W0]);
}
const q0 = Fs(y0, b0), j0 = Fs(Pd), G0 = $s(
  Ms,
  bi,
  ki
);
function Z0(t) {
  return Ls(
    t,
    [q0, zd],
    [j0, G0]
  );
}
const Xo = "Invalid Duration", Hd = {
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
}, Y0 = {
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
  ...Hd
}, kt = 146097 / 400, us = 146097 / 4800, K0 = {
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
  ...Hd
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
], J0 = Yn.slice(0).reverse();
function Jt(t, e, n = !1) {
  const s = {
    values: n ? e.values : { ...t.values, ...e.values || {} },
    loc: t.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || t.conversionAccuracy,
    matrix: e.matrix || t.matrix
  };
  return new ke(s);
}
function Wd(t, e) {
  let n = e.milliseconds ?? 0;
  for (const s of J0.slice(1))
    e[s] && (n += e[s] * t[s].milliseconds);
  return n;
}
function eu(t, e) {
  const n = Wd(t, e) < 0 ? -1 : 1;
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
function tu(t) {
  const e = {};
  for (const [n, s] of Object.entries(t))
    s !== 0 && (e[n] = s);
  return e;
}
class ke {
  /**
   * @private
   */
  constructor(e) {
    const n = e.conversionAccuracy === "longterm" || !1;
    let s = n ? K0 : Y0;
    e.matrix && (s = e.matrix), this.values = e.values, this.loc = e.loc || Ce.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = s, this.isLuxonDuration = !0;
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
    return ke.fromObject({ milliseconds: e }, n);
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
    return new ke({
      values: mr(e, ke.normalizeUnit),
      loc: Ce.fromObject(n),
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
    if (Ln(e))
      return ke.fromMillis(e);
    if (ke.isDuration(e))
      return e;
    if (typeof e == "object")
      return ke.fromObject(e);
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
    const [s] = H0(e);
    return s ? ke.fromObject(s, n) : ke.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    const [s] = U0(e);
    return s ? ke.fromObject(s, n) : ke.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    if (_e.throwOnInvalid)
      throw new Im(s);
    return new ke({ invalid: s });
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
    if (!n) throw new Jc(e);
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
    return this.isValid ? nt.create(this.loc, s).formatDurationFromString(this, e) : Xo;
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
    if (!this.isValid) return Xo;
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
    return this.isValid ? Wd(this.matrix, this.values) : NaN;
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
    const n = ke.fromDurationLike(e), s = {};
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
    const n = ke.fromDurationLike(e);
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
      n[s] = Ad(e(this.values[s], s));
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
    return this[ke.normalizeUnit(e)];
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
    const n = { ...this.values, ...mr(e, ke.normalizeUnit) };
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
    return eu(this.matrix, e), Jt(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = tu(this.normalize().shiftToAll().toObject());
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
    e = e.map((a) => ke.normalizeUnit(a));
    const n = {}, s = {}, i = this.toObject();
    let r;
    for (const a of Yn)
      if (e.indexOf(a) >= 0) {
        r = a;
        let l = 0;
        for (const u in s)
          l += this.matrix[u][a] * s[u], s[u] = 0;
        Ln(i[a]) && (l += i[a]);
        const o = Math.trunc(l);
        n[a] = o, s[a] = (l * 1e3 - o * 1e3) / 1e3;
      } else Ln(i[a]) && (s[a] = i[a]);
    for (const a in s)
      s[a] !== 0 && (n[r] += a === r ? s[a] : s[a] / this.matrix[r][a]);
    return eu(this.matrix, n), Jt(this, { values: n }, !0);
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
    const e = tu(this.values);
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
function Q0(t, e) {
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
      throw new Xe("need to specify a reason the Interval is invalid");
    const s = e instanceof Ft ? e : new Ft(e, n);
    if (_e.throwOnInvalid)
      throw new Sm(s);
    return new Ve({ invalid: s });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, n) {
    const s = Rs(e), i = Rs(n), r = Q0(s, i);
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
    const s = ke.fromDurationLike(n), i = Rs(e);
    return Ve.fromDateTimes(i, i.plus(s));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, n) {
    const s = ke.fromDurationLike(n), i = Rs(e);
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
        return Ve.fromDateTimes(r, l);
      if (a) {
        const u = ke.fromISO(i, n);
        if (u.isValid)
          return Ve.after(r, u);
      } else if (o) {
        const u = ke.fromISO(s, n);
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
    const n = ke.fromDurationLike(e);
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
    return this.isValid ? this.e.diff(this.s, e, n) : ke.invalid(this.invalidReason);
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
class Vi {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = _e.defaultZone) {
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
    return Fn(e, _e.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ce.create(e)).getStartOfWeek();
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
    return (n || Ce.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: n = null } = {}) {
    return (n || Ce.create(e)).getWeekendDays().slice();
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
    return (i || Ce.create(n, s, r)).months(e);
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
    return (i || Ce.create(n, s, r)).months(e, !0);
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
    return (i || Ce.create(n, s, null)).weekdays(e);
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
    return (i || Ce.create(n, s, null)).weekdays(e, !0);
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
    return Ce.create(e).meridiems();
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
    return Ce.create(n, null, "gregory").eras(e);
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
    return { relative: Cd(), localeWeek: xd() };
  }
}
function nu(t, e) {
  const n = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), s = n(e) - n(t);
  return Math.floor(ke.fromMillis(s).as("days"));
}
function X0(t, e, n) {
  const s = [
    ["years", (o, u) => u.year - o.year],
    ["quarters", (o, u) => u.quarter - o.quarter + (u.year - o.year) * 4],
    ["months", (o, u) => u.month - o.month + (u.year - o.year) * 12],
    [
      "weeks",
      (o, u) => {
        const d = nu(o, u);
        return (d - d % 7) / 7;
      }
    ],
    ["days", nu]
  ], i = {}, r = t;
  let a, l;
  for (const [o, u] of s)
    n.indexOf(o) >= 0 && (a = o, i[o] = u(t, e), l = r.plus(i), l > e ? (i[o]--, t = r.plus(i), t > e && (l = t, i[o]--, t = r.plus(i))) : t = l);
  return [t, i, l, a];
}
function ep(t, e, n, s) {
  let [i, r, a, l] = X0(t, e, n);
  const o = e - i, u = n.filter(
    (f) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(f) >= 0
  );
  u.length === 0 && (a < e && (a = i.plus({ [l]: 1 })), a !== i && (r[l] = (r[l] || 0) + o / (a - i)));
  const d = ke.fromObject(r, s);
  return u.length > 0 ? ke.fromMillis(o, s).shiftTo(...u).plus(d) : d;
}
const tp = "missing Intl.DateTimeFormat.formatToParts support";
function Se(t, e = (n) => n) {
  return { regex: t, deser: ([n]) => e(qm(n)) };
}
const np = " ", Ud = `[ ${np}]`, qd = new RegExp(Ud, "g");
function sp(t) {
  return t.replace(/\./g, "\\.?").replace(qd, Ud);
}
function su(t) {
  return t.replace(/\./g, "").replace(qd, " ").toLowerCase();
}
function Et(t, e) {
  return t === null ? null : {
    regex: RegExp(t.map(sp).join("|")),
    deser: ([n]) => t.findIndex((s) => su(n) === su(s)) + e
  };
}
function iu(t, e) {
  return { regex: t, deser: ([, n, s]) => Pr(n, s), groups: e };
}
function _i(t) {
  return { regex: t, deser: ([e]) => e };
}
function ip(t) {
  return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function rp(t, e) {
  const n = xt(e), s = xt(e, "{2}"), i = xt(e, "{3}"), r = xt(e, "{4}"), a = xt(e, "{6}"), l = xt(e, "{1,2}"), o = xt(e, "{1,3}"), u = xt(e, "{1,6}"), d = xt(e, "{1,9}"), f = xt(e, "{2,4}"), p = xt(e, "{4,6}"), h = (S) => ({ regex: RegExp(ip(S.val)), deser: ([b]) => b, literal: !0 }), w = ((S) => {
    if (t.literal)
      return h(S);
    switch (S.val) {
      // era
      case "G":
        return Et(e.eras("short"), 0);
      case "GG":
        return Et(e.eras("long"), 0);
      // years
      case "y":
        return Se(u);
      case "yy":
        return Se(f, sl);
      case "yyyy":
        return Se(r);
      case "yyyyy":
        return Se(p);
      case "yyyyyy":
        return Se(a);
      // months
      case "M":
        return Se(l);
      case "MM":
        return Se(s);
      case "MMM":
        return Et(e.months("short", !0), 1);
      case "MMMM":
        return Et(e.months("long", !0), 1);
      case "L":
        return Se(l);
      case "LL":
        return Se(s);
      case "LLL":
        return Et(e.months("short", !1), 1);
      case "LLLL":
        return Et(e.months("long", !1), 1);
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
        return Et(e.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return Se(r);
      case "kk":
        return Se(f, sl);
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
        return iu(new RegExp(`([+-]${l.source})(?::(${s.source}))?`), 2);
      case "ZZZ":
        return iu(new RegExp(`([+-]${l.source})(${s.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return _i(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return _i(/[^\S\n\r]/);
      default:
        return h(S);
    }
  })(t) || {
    invalidReason: tp
  };
  return w.token = t, w;
}
const ap = {
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
function lp(t, e, n) {
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
  let l = ap[a];
  if (typeof l == "object" && (l = l[r]), l)
    return {
      literal: !1,
      val: l
    };
}
function op(t) {
  return [`^${t.map((n) => n.regex).reduce((n, s) => `${n}(${s.source})`, "")}$`, t];
}
function up(t, e, n) {
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
function cp(t) {
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
  return se(t.z) || (n = hn.create(t.z)), se(t.Z) || (n || (n = new ut(t.Z)), s = t.Z), se(t.q) || (t.M = (t.q - 1) * 3 + 1), se(t.h) || (t.h < 12 && t.a === 1 ? t.h += 12 : t.h === 12 && t.a === 0 && (t.h = 0)), t.G === 0 && t.y && (t.y = -t.y), se(t.u) || (t.S = Bl(t.u)), [Object.keys(t).reduce((r, a) => {
    const l = e(a);
    return l && (r[l] = t[a]), r;
  }, {}), n, s];
}
let Sa = null;
function dp() {
  return Sa || (Sa = ne.fromMillis(1555555555555)), Sa;
}
function fp(t, e) {
  if (t.literal)
    return t;
  const n = nt.macroTokenToFormatOpts(t.val), s = Yd(n, e);
  return s == null || s.includes(void 0) ? t : s;
}
function jd(t, e) {
  return Array.prototype.concat(...t.map((n) => fp(n, e)));
}
class Gd {
  constructor(e, n) {
    if (this.locale = e, this.format = n, this.tokens = jd(nt.parseFormat(n), e), this.units = this.tokens.map((s) => rp(s, e)), this.disqualifyingUnit = this.units.find((s) => s.invalidReason), !this.disqualifyingUnit) {
      const [s, i] = op(this.units);
      this.regex = RegExp(s, "i"), this.handlers = i;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [n, s] = up(e, this.regex, this.handlers), [i, r, a] = s ? cp(s) : [null, null, void 0];
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
function Zd(t, e, n) {
  return new Gd(t, n).explainFromTokens(e);
}
function hp(t, e, n) {
  const { result: s, zone: i, specificOffset: r, invalidReason: a } = Zd(t, e, n);
  return [s, i, r, a];
}
function Yd(t, e) {
  if (!t)
    return null;
  const s = nt.create(e, t).dtFormatter(dp()), i = s.formatToParts(), r = s.resolvedOptions();
  return i.map((a) => lp(a, t, r));
}
const Ia = "Invalid DateTime", ru = 864e13;
function Us(t) {
  return new Ft("unsupported zone", `the zone "${t.name}" is not supported`);
}
function Ta(t) {
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
function Kd(t, e, n) {
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
  return Kd(Rr(t), e, n);
}
function au(t, e) {
  const n = t.o, s = t.c.year + Math.trunc(e.years), i = t.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, r = {
    ...t.c,
    year: s,
    month: i,
    day: Math.min(t.c.day, hr(s, i)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = ke.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), l = Rr(r);
  let [o, u] = Kd(l, n, t.zone);
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
  return t.isValid ? nt.create(Ce.create("en-US"), {
    allowZ: n,
    forceSimple: !0
  }).formatDateTimeFromString(t, e) : null;
}
function xa(t, e, n) {
  const s = t.c.year > 9999 || t.c.year < 0;
  let i = "";
  if (s && t.c.year >= 0 && (i += "+"), i += We(t.c.year, s ? 6 : 4), n === "year") return i;
  if (e) {
    if (i += "-", i += We(t.c.month), n === "month") return i;
    i += "-";
  } else if (i += We(t.c.month), n === "month") return i;
  return i += We(t.c.day), i;
}
function lu(t, e, n, s, i, r, a) {
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
const Jd = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, mp = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, pp = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Zi = ["year", "month", "day", "hour", "minute", "second", "millisecond"], gp = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], vp = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
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
  if (!e) throw new Jc(t);
  return e;
}
function ou(t) {
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
function yp(t) {
  if (qs === void 0 && (qs = _e.now()), t.type !== "iana")
    return t.offset(qs);
  const e = t.name;
  let n = il.get(e);
  return n === void 0 && (n = t.offset(qs), il.set(e, n)), n;
}
function uu(t, e) {
  const n = Fn(e.zone, _e.defaultZone);
  if (!n.isValid)
    return ne.invalid(Us(n));
  const s = Ce.fromObject(e);
  let i, r;
  if (se(t.year))
    i = _e.now();
  else {
    for (const o of Zi)
      se(t[o]) && (t[o] = Jd[o]);
    const a = Id(t) || Td(t);
    if (a)
      return ne.invalid(a);
    const l = yp(n);
    [i, r] = Gi(t, l, n);
  }
  return new ne({ ts: i, zone: n, loc: s, o: r });
}
function cu(t, e, n) {
  const s = se(n.round) ? !0 : n.round, i = se(n.rounding) ? "trunc" : n.rounding, r = (l, o) => (l = Ol(l, s || n.calendary ? 0 : 2, n.calendary ? "round" : i), e.loc.clone(n).relFormatter(n).format(l, o)), a = (l) => n.calendary ? e.hasSame(t, l) ? 0 : e.startOf(l).diff(t.startOf(l), l).get(l) : e.diff(t, l).get(l);
  if (n.unit)
    return r(a(n.unit), n.unit);
  for (const l of n.units) {
    const o = a(l);
    if (Math.abs(o) >= 1)
      return r(o, l);
  }
  return r(t > e ? -0 : 0, n.units[n.units.length - 1]);
}
function du(t) {
  let e = {}, n;
  return t.length > 0 && typeof t[t.length - 1] == "object" ? (e = t[t.length - 1], n = Array.from(t).slice(0, t.length - 1)) : n = Array.from(t), [e, n];
}
let qs;
const il = /* @__PURE__ */ new Map();
class ne {
  /**
   * @access private
   */
  constructor(e) {
    const n = e.zone || _e.defaultZone;
    let s = e.invalid || (Number.isNaN(e.ts) ? new Ft("invalid input") : null) || (n.isValid ? null : Us(n));
    this.ts = se(e.ts) ? _e.now() : e.ts;
    let i = null, r = null;
    if (!s)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(n))
        [i, r] = [e.old.c, e.old.o];
      else {
        const l = Ln(e.o) && !e.old ? e.o : n.offset(this.ts);
        i = Ni(this.ts, l), s = Number.isNaN(i.year) ? new Ft("invalid input") : null, i = s ? null : i, r = s ? null : l;
      }
    this._zone = n, this.loc = e.loc || Ce.create(), this.invalid = s, this.weekData = null, this.localWeekData = null, this.c = i, this.o = r, this.isLuxonDateTime = !0;
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
    const [e, n] = du(arguments), [s, i, r, a, l, o, u] = n;
    return uu({ year: s, month: i, day: r, hour: a, minute: l, second: o, millisecond: u }, e);
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
    const [e, n] = du(arguments), [s, i, r, a, l, o, u] = n;
    return e.zone = ut.utcInstance, uu({ year: s, month: i, day: r, hour: a, minute: l, second: o, millisecond: u }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, n = {}) {
    const s = Km(e) ? e.valueOf() : NaN;
    if (Number.isNaN(s))
      return ne.invalid("invalid input");
    const i = Fn(n.zone, _e.defaultZone);
    return i.isValid ? new ne({
      ts: s,
      zone: i,
      loc: Ce.fromObject(n)
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
    if (Ln(e))
      return e < -ru || e > ru ? ne.invalid("Timestamp out of range") : new ne({
        ts: e,
        zone: Fn(n.zone, _e.defaultZone),
        loc: Ce.fromObject(n)
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
    if (Ln(e))
      return new ne({
        ts: e * 1e3,
        zone: Fn(n.zone, _e.defaultZone),
        loc: Ce.fromObject(n)
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
    const s = Fn(n.zone, _e.defaultZone);
    if (!s.isValid)
      return ne.invalid(Us(s));
    const i = Ce.fromObject(n), r = mr(e, ou), { minDaysInFirstWeek: a, startOfWeek: l } = Zo(r, i), o = _e.now(), u = se(n.specificOffset) ? s.offset(o) : n.specificOffset, d = !se(r.ordinal), f = !se(r.year), p = !se(r.month) || !se(r.day), h = f || p, g = r.weekYear || r.weekNumber;
    if ((h || d) && g)
      throw new ps(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (p && d)
      throw new ps("Can't mix ordinal dates with month/day");
    const w = g || r.weekday && !h;
    let S, b, E = Ni(o, u);
    w ? (S = gp, b = mp, E = fr(E, a, l)) : d ? (S = vp, b = pp, E = wa(E)) : (S = Zi, b = Jd);
    let k = !1;
    for (const Y of S) {
      const Q = r[Y];
      se(Q) ? k ? r[Y] = b[Y] : r[Y] = E[Y] : k = !0;
    }
    const B = w ? Gm(r, a, l) : d ? Zm(r) : Id(r), N = B || Td(r);
    if (N)
      return ne.invalid(N);
    const z = w ? jo(r, a, l) : d ? Go(r) : r, [K, $] = Gi(z, u, s), M = new ne({
      ts: K,
      zone: s,
      o: $,
      loc: i
    });
    return r.weekday && h && e.weekday !== M.weekday ? ne.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${r.weekday} and a date of ${M.toISO()}`
    ) : M.isValid ? M : ne.invalid(M.invalid);
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
    const [s, i] = R0(e);
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
    const [s, i] = P0(e);
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
    const [s, i] = z0(e);
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
    const { locale: i = null, numberingSystem: r = null } = s, a = Ce.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    }), [l, o, u, d] = hp(a, e, n);
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
    const [s, i] = Z0(e);
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
    if (_e.throwOnInvalid)
      throw new wm(s);
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
    const s = Yd(e, Ce.fromObject(n));
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
    return jd(nt.parseFormat(e), Ce.fromObject(n)).map((i) => i.val).join("");
  }
  static resetCache() {
    qs = void 0, il.clear();
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
    return this.isValid ? wa(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Vi.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Vi.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Vi.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Vi.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    const e = 864e5, n = 6e4, s = Rr(this.c), i = this.zone.offset(s - e), r = this.zone.offset(s + e), a = this.zone.offset(s - i * n), l = this.zone.offset(s - r * n);
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
    return this.isValid ? Ss(this.year) : NaN;
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
    return this.setZone(ut.instance(e), n);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(_e.defaultZone);
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
    if (e = Fn(e, _e.defaultZone), e.equals(this.zone))
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
    const n = mr(e, ou), { minDaysInFirstWeek: s, startOfWeek: i } = Zo(n, this.loc), r = !se(n.weekYear) || !se(n.weekNumber) || !se(n.weekday), a = !se(n.ordinal), l = !se(n.year), o = !se(n.month) || !se(n.day), u = l || o, d = n.weekYear || n.weekNumber;
    if ((u || a) && d)
      throw new ps(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && a)
      throw new ps("Can't mix ordinal dates with month/day");
    let f;
    r ? f = jo(
      { ...fr(this.c, s, i), ...n },
      s,
      i
    ) : se(n.ordinal) ? (f = { ...this.toObject(), ...n }, se(n.day) && (f.day = Math.min(hr(f.year, f.month), f.day))) : f = Go({ ...wa(this.c), ...n });
    const [p, h] = Gi(f, this.o, this.zone);
    return Wn(this, { ts: p, o: h });
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
    const n = ke.fromDurationLike(e);
    return Wn(this, au(this, n));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const n = ke.fromDurationLike(e).negate();
    return Wn(this, au(this, n));
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
    const s = {}, i = ke.normalizeUnit(e);
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
    return this.isValid ? nt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, e) : Ia;
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
    return this.isValid ? nt.create(this.loc.clone(n), e).formatDateTime(this) : Ia;
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
    let o = xa(this, l, a);
    return Zi.indexOf(a) >= 3 && (o += "T"), o += lu(
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
    return this.isValid ? xa(this, e === "extended", Yi(n)) : null;
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
    return this.isValid ? (l = Yi(l), (i && Zi.indexOf(l) >= 3 ? "T" : "") + lu(
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
    return this.isValid ? xa(this, !0) : null;
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
    return this.isValid ? this.toISO() : Ia;
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
      return ke.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...s }, r = Jm(n).map(ke.normalizeUnit), a = e.valueOf() > this.valueOf(), l = a ? this : e, o = a ? e : this, u = ep(l, o, r, i);
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
    const n = e.base || ne.fromObject({}, { zone: this.zone }), s = e.padding ? this < n ? -e.padding : e.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], r = e.unit;
    return Array.isArray(e.unit) && (i = e.unit, r = void 0), cu(n, this.plus(s), {
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
    return this.isValid ? cu(e.base || ne.fromObject({}, { zone: this.zone }), this, {
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
    return Yo(e, (n) => n.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(ne.isDateTime))
      throw new Xe("max requires all arguments be DateTimes");
    return Yo(e, (n) => n.valueOf(), Math.max);
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
    const { locale: i = null, numberingSystem: r = null } = s, a = Ce.fromOpts({
      locale: i,
      numberingSystem: r,
      defaultToEN: !0
    });
    return Zd(a, e, n);
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
    const { locale: s = null, numberingSystem: i = null } = n, r = Ce.fromOpts({
      locale: s,
      numberingSystem: i,
      defaultToEN: !0
    });
    return new Gd(r, e);
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
    const { locale: i = null, numberingSystem: r = null } = s, a = Ce.fromOpts({
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
    return Qc;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Tm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Xc;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return ed;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return td;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return nd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return sd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return id;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return rd;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return ad;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return ld;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return od;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return ud;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return cd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return dd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return fd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Cm;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return hd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return md;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return pd;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return gd;
  }
}
function Rs(t) {
  if (ne.isDateTime(t))
    return t;
  if (t && t.valueOf && Ln(t.valueOf()))
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
function bp(t) {
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
var kp = ["a:not([disabled])", "button:not([disabled])", "input[type=checkbox]:not([disabled])", "input[type=radio]:not([disabled])", "input[type=text]:not([disabled])", '[tabindex]:not([disabled]):not([tabindex="-1"])'].join(",");
function Qn(t) {
  return Array.from(t.querySelectorAll(kp)).filter(di).filter((e) => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement);
}
function wp(t, e, n) {
  let s = Qn(t), i = s.indexOf(e);
  if (i === -1) return null;
  let r = Tp(s);
  Sp(r, i, n);
  let a = Ip(i, n, r, s);
  return a || ((n === "up" || n === "left") && (a = s[i - 1]), (n === "down" || n === "right") && (a = s[i + 1])), a;
}
function Sp(t, e, n) {
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
function Ip(t, e, n, s) {
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
function Tp(t) {
  return t.map((e) => e.getBoundingClientRect()).map((e) => ({ height: e.height, width: e.width, top: e.top, left: e.left, right: e.right, bottom: e.bottom, center: { x: e.left + e.width / 2, y: e.top + e.height / 2 }, distance: 0 }));
}
function Cp(t, e, n = void 0) {
  let s = Qn(t), i = n || document.activeElement;
  if (!i || !di(i)) return s[0] || void 0;
  let r = s.indexOf(i);
  return s[r + e] || void 0;
}
function ct(t) {
  let e = c(t);
  return di(e) ? e : e?.$el;
}
function xp(...t) {
  console.warn("[Flux]", ...t);
}
function Ea(t, e, n = !1) {
  let s = Ep(t), i = e.compareDocumentPosition(t), r;
  i && Node.DOCUMENT_POSITION_PRECEDING || n ? r = s.firstChild() : r = s.lastChild(), (r !== null ? r : t).focus();
}
function Ep(t) {
  return document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
}
class Ap {
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
var fu = new Ap(), Fp = !globalThis.document;
function hu(t, e, n) {
  let s = ee([]);
  gn(() => {
    document.addEventListener("pointerdown", i);
  }), is(() => {
    document.removeEventListener("pointerdown", i);
  });
  function i(r) {
    c(e) && !c(s).some((a) => a.contains(r.target)) && n(r);
  }
  $r(() => {
    let r = [];
    (Array.isArray(t) ? t : [t]).forEach((a) => {
      let l = ct(a);
      l && r.push(l);
    }), s.value = r;
  });
}
function Qd(t, e, n) {
  n ??= { attributes: !0 };
  let s, i = De(() => ct(t), (l) => {
    r(), l && (s = new MutationObserver(e), s.observe(l, n));
  }, { immediate: !0 });
  function r() {
    s && (s.disconnect(), s = void 0);
  }
  function a() {
    r(), i();
  }
  Lu(a);
}
var $p = 0;
function Lp(t = !1) {
  let e = ee(`focus-trap-${++$p}`), n = ee(!1);
  return gn(() => fu.add(c(e), (s) => n.value = s, t)), is(() => fu.remove(c(e))), n;
}
function Mp(t, e) {
  De(t, (n, s, i) => {
    if (!ct(t) || c(e)) return;
    let r = document.activeElement;
    i(() => {
      requestAnimationFrame(() => r?.focus());
    });
  });
}
function Bp(t, e = {}) {
  if (Fp) return;
  let { disable: n = ee(!1), disableReturn: s = ee(!1), attachTo: i = null } = e, r = Lp(!n);
  Mp(t, s), De(t, (a, l, o) => {
    let u = ct(t), d = i || document;
    r.value && u && document.activeElement && !u.contains(document.activeElement) && !u.querySelector("[autofocus]") && Ea(u, document.activeElement, !0);
    function f(h) {
      if (!r.value || !u) return;
      let g = h.target || document.body;
      u.contains(g) || (h.preventDefault(), h.stopImmediatePropagation(), Ea(u, g));
    }
    function p(h) {
      if (!r.value || !u) return;
      (!h.relatedTarget || h.relatedTarget === document.body) && (h.preventDefault(), u.focus());
      let g = h.target || document.body;
      u.contains(g) || Ea(u, g);
    }
    if (d.addEventListener("focusin", f, { capture: !0 }), d.addEventListener("focusout", p, { capture: !0 }), u) {
      let h = Qn(u), g = h.findIndex((b) => b.classList.contains("is-active")), w = h.findIndex((b) => !b.hasAttribute("aria-disabled")), S = h[0];
      g > -1 && (S = h[g]), w > -1 && (S = h[w]), S && S.focus();
    }
    o(() => {
      d.removeEventListener("focusin", f), d.removeEventListener("focusout", p);
    });
  }, { immediate: !0 }), De(() => n, () => {
    let a = ct(t);
    if (r.value = !n, n || !a) return;
    let l = Qn(a);
    l.includes(document.activeElement) || l[0]?.focus();
  }, { immediate: !0 });
}
function Op(t, { cycle: e = !0, direction: n = "bidirectional" } = {}) {
  Qd(t, () => i(s(), !1));
  function s() {
    let a = ct(t), l = Qn(a), o = l.findIndex((d) => d.classList.contains("is-active")), u = l.findIndex((d) => !d.hasAttribute("aria-disabled"));
    return o > -1 ? o : u > -1 ? u : 0;
  }
  function i(a, l = !0) {
    let o = ct(t), u = Qn(o);
    u.forEach((d, f) => d.tabIndex = f === a ? 0 : -1), l && u[a]?.focus();
  }
  function r(a) {
    let l = ct(t), o = Qn(l);
    if (!["Enter", " "].includes(a.key))
      switch (n) {
        case "bidirectional":
          Dp(a, l, o, i);
          break;
        case "horizontal":
        case "vertical":
          Vp(a, l, e, n, o, i);
          break;
      }
  }
  De(t, (a, l, o) => {
    let u = ct(t);
    u && (u.addEventListener("keydown", r), i(s(), !1), o(() => u.removeEventListener("keydown", r)));
  }, { immediate: !0 });
}
function Dp(t, e, n, s) {
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
  let r = wp(e, document.activeElement, i);
  r && s(n.indexOf(r)), t.preventDefault();
}
function Vp(t, e, n, s, i, r) {
  let a;
  if (t.key === (s === "horizontal" ? "ArrowLeft" : "ArrowUp")) a = -1;
  else if (t.key === (s === "horizontal" ? "ArrowRight" : "ArrowDown")) a = 1;
  else return;
  let l = Cp(e, a);
  l ? r(i.indexOf(l)) : n && r(a === 1 ? 0 : i.length - 1), t.preventDefault();
}
const _p = "basePane", Np = "basePaneLoader", Rp = "basePaneStructure basePane", Pp = "basePaneElement", zp = "form", Hp = "paneHeader";
var Hr = { basePane: _p, basePaneLoader: Np, basePaneStructure: Rp, basePaneElement: Pp, form: zp, paneHeader: Hp };
const { basePane: vn } = Hr, Wp = "icon", Up = "fontAwesomeIcon icon", qp = "materialSymbolIcon icon", jp = `iconBoxed ${vn}`, Gp = `iconBoxedDefault iconBoxed ${vn}`, Zp = `iconBoxedColored iconBoxed ${vn}`, Yp = `iconBoxedGray iconBoxedColored iconBoxed ${vn}`, Kp = `iconBoxedPrimary iconBoxedColored iconBoxed ${vn}`, Jp = `iconBoxedDanger iconBoxedColored iconBoxed ${vn}`, Qp = `iconBoxedInfo iconBoxedColored iconBoxed ${vn}`, Xp = `iconBoxedSuccess iconBoxedColored iconBoxed ${vn}`, e1 = `iconBoxedWarning iconBoxedColored iconBoxed ${vn}`;
var Aa = { icon: Wp, fontAwesomeIcon: Up, materialSymbolIcon: qp, iconBoxed: jp, iconBoxedDefault: Gp, iconBoxedColored: Zp, iconBoxedGray: Yp, iconBoxedPrimary: Kp, iconBoxedDanger: Jp, iconBoxedInfo: Qp, iconBoxedSuccess: Xp, iconBoxedWarning: e1 };
const t1 = ["viewBox"], n1 = ["d"];
var st = /* @__PURE__ */ U({
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
      } : (xp(`Unknown icon: ${t.name}`), null);
    }), i = (r) => n("click", r);
    return (r, a) => s.value ? (v(), _("svg", {
      key: 0,
      viewBox: `0 0 ${s.value.width} ${s.value.height}`,
      class: x(c(Aa).fontAwesomeIcon),
      style: it({
        fontSize: t.size && `${t.size}px`,
        scale: s.value.scale > 1 ? s.value.scale : void 0
      }),
      focusable: "false",
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, [
      (v(!0), _(de, null, dt(s.value.paths, (l) => (v(), _("path", {
        d: l,
        fill: "currentColor"
      }, null, 8, n1))), 256))
    ], 14, t1)) : t.name ? (v(), _("i", {
      key: 1,
      class: x(c(Aa).materialSymbolIcon),
      style: it({
        fontSize: t.size && `${t.size}px`
      }),
      role: "img",
      "aria-hidden": "true",
      onClick: i
    }, ge(t.name), 7)) : (v(), _("i", {
      key: 2,
      class: x(c(Aa).icon)
    }, null, 2));
  }
});
const s1 = ["href", "rel", "target"];
var Xd = /* @__PURE__ */ U({
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
      return t.componentType === "route" ? (v(), V(a, wt({ key: 0 }, i.$attrs, {
        rel: t.rel,
        target: t.target,
        to: t.to,
        onClick: r[0] || (r[0] = (l) => s(l)),
        onMouseenter: r[1] || (r[1] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[2] || (r[2] = (l) => i.$emit("mouseleave", l))
      }), {
        default: H(() => [
          re(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["rel", "target", "to"])) : t.componentType === "link" ? (v(), _("a", wt({ key: 1 }, i.$attrs, {
        href: t.href,
        rel: t.rel,
        target: t.target,
        onClick: r[3] || (r[3] = (l) => s(l)),
        onMouseenter: r[4] || (r[4] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[5] || (r[5] = (l) => i.$emit("mouseleave", l))
      }), [
        re(i.$slots, "default")
      ], 16, s1)) : t.componentType === "button" ? (v(), _("button", wt({ key: 2 }, i.$attrs, {
        onClick: r[6] || (r[6] = (l) => s(l)),
        onMouseenter: r[7] || (r[7] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[8] || (r[8] = (l) => i.$emit("mouseleave", l))
      }), [
        re(i.$slots, "default")
      ], 16)) : (v(), _("div", wt({ key: 3 }, i.$attrs, {
        onClick: s,
        onMouseenter: r[9] || (r[9] = (l) => i.$emit("mouseenter", l)),
        onMouseleave: r[10] || (r[10] = (l) => i.$emit("mouseleave", l))
      }), [
        re(i.$slots, "default")
      ], 16));
    };
  }
});
const i1 = "spinner", r1 = "spinnerTrack", a1 = "spinnerEffect", l1 = "spinnerValue";
var Pi = { spinner: i1, spinnerTrack: r1, spinnerEffect: a1, spinnerValue: l1 }, Dn = /* @__PURE__ */ U({
  __name: "FluxSpinner",
  props: {
    size: {}
  },
  setup(t) {
    return (e, n) => (v(), _("svg", {
      class: x(c(Pi).spinner),
      viewBox: "0 0 24 24",
      style: it({
        fontSize: t.size && `${t.size}px`
      })
    }, [
      ye("circle", {
        class: x(c(Pi).spinnerTrack),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4"
      }, null, 2),
      ye("circle", {
        class: x(c(Pi).spinnerEffect),
        cx: "12",
        cy: "12",
        r: "10",
        fill: "transparent",
        "stroke-width": "4",
        "stroke-dasharray": "21 45",
        "stroke-dashoffset": "30",
        "stroke-linecap": "round"
      }, null, 2),
      ye("circle", {
        class: x(c(Pi).spinnerValue),
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
const o1 = "button", u1 = "isSmall", c1 = "isMedium", d1 = "isLarge", f1 = "isXl", h1 = "isFilled", m1 = "buttonIcon", p1 = "buttonLabel";
var $n = { button: o1, isSmall: u1, isMedium: c1, isLarge: d1, isXl: f1, isFilled: h1, buttonIcon: m1, buttonLabel: p1 };
const ef = ["default", "after", "before", "iconLeading", "iconTrailing", "label"];
var Wr = /* @__PURE__ */ U({
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
    return (l, o) => (v(), V(Xd, {
      "component-type": t.type,
      class: x(c(Ct)(
        t.cssClass,
        t.isFilled && c($n).isFilled,
        t.size === "small" && c($n).isSmall,
        t.size === "medium" && c($n).isMedium,
        t.size === "large" && c($n).isLarge,
        t.size === "xl" && c($n).isXl
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
      default: H(() => [
        re(l.$slots, "before"),
        re(l.$slots, "iconLeading", {}, () => [
          t.isLoading && (t.iconLeading || !t.iconTrailing) ? (v(), V(Dn, {
            key: 0,
            size: 20
          })) : t.iconLeading ? (v(), V(st, {
            key: 1,
            class: x(t.cssClassIcon),
            name: t.iconLeading
          }, null, 8, ["class", "name"])) : J("", !0)
        ]),
        re(l.$slots, "label", {}, () => [
          t.label ? (v(), _("span", {
            key: 0,
            class: x(t.cssClassLabel)
          }, ge(t.label), 3)) : J("", !0)
        ]),
        re(l.$slots, "iconTrailing", {}, () => [
          t.isLoading && !t.iconLeading && t.iconTrailing ? (v(), V(Dn, {
            key: 0,
            size: 20
          })) : t.iconTrailing ? (v(), V(st, {
            key: 1,
            class: x(t.cssClassIcon),
            name: t.iconTrailing
          }, null, 8, ["class", "name"])) : J("", !0)
        ]),
        re(l.$slots, "after")
      ]),
      _: 3
    }, 8, ["component-type", "class", "type", "aria-disabled", "disabled", "tabindex", "href", "rel", "target", "to"]));
  }
});
const { button: g1, buttonIcon: v1, buttonLabel: y1 } = $n, b1 = `action ${g1}`, k1 = "spinner", w1 = `actionIcon ${v1}`, S1 = "isDestructive", I1 = `actionLabel ${y1}`, T1 = "actionBar", C1 = "separator", x1 = "formInput", E1 = "basePaneStructure", A1 = "paneHeader", F1 = "actionPane", $1 = "actionPaneGrid", L1 = "actionPaneBody", M1 = "paneBody";
var zi = { action: b1, spinner: k1, actionIcon: w1, isDestructive: S1, actionLabel: I1, actionBar: T1, separator: C1, formInput: x1, basePaneStructure: E1, paneHeader: A1, actionPane: F1, actionPaneGrid: $1, actionPaneBody: L1, paneBody: M1 }, B1 = /* @__PURE__ */ U({
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
    return (e, n) => (v(), V(Wr, wt({ disabled: t.disabled, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to, type: t.type }, {
      "css-class": c(zi).action,
      "css-class-icon": c(zi).actionIcon,
      "css-class-label": c(zi).actionLabel,
      class: t.isDestructive && c(zi).isDestructive,
      "icon-leading": t.icon,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), null, 16, ["css-class", "css-class-icon", "css-class-label", "class", "icon-leading"]));
  }
});
function O1(t, e, n, s) {
  const i = Ae(() => {
    const l = c(t);
    return Array.isArray(l) ? l : [l];
  }), r = Ae(() => {
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
      const p = [];
      for (++d; d <= u.length; ++d) {
        const h = u[d];
        if (Wa(h) || d === u.length) {
          p.length > 0 && l.push([f, p]);
          break;
        }
        p.push(h);
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
const D1 = (t, e) => {
  if (!(t in Mo))
    return t;
  let n = Mo[t];
  for (let s in e)
    n = n.replaceAll(`{${s}}`, e[s].toString());
  return n;
};
var wi = () => {
  const t = Zt()?.proxy;
  return !t || !V1(t) ? D1 : t.$t;
};
function V1(t) {
  return !!t && "$t" in t;
}
const { button: Si, buttonIcon: Ii, buttonLabel: Ti } = $n, _1 = `primaryButton ${Si}`, N1 = "spinner", R1 = `primaryButtonIcon ${Ii}`, P1 = `primaryButtonLabel ${Ti}`, z1 = `secondaryButton ${Si}`, H1 = `secondaryButtonIcon ${Ii}`, W1 = `secondaryButtonLabel ${Ti}`, U1 = `destructiveButton ${Si}`, q1 = `destructiveButtonIcon ${Ii}`, j1 = `destructiveButtonLabel ${Ti}`, G1 = `linkButton ${Si}`, Z1 = `linkButtonIcon ${Ii}`, Y1 = "icon", K1 = `linkButtonLabel ${Ti}`, J1 = `publishButton primaryButton ${Si}`, Q1 = `publishButtonIcon primaryButtonIcon ${Ii}`, X1 = `publishButtonLabel primaryButtonLabel ${Ti}`, eg = "publishButtonAnimation", tg = "isDone", ng = "publishButtonAnimationArrow", sg = "publishArrowOut", ig = "publishButtonAnimationCheck", rg = "publishButtonAnimationCircle", ag = "isIdle", lg = "isLoading", og = "publishArrowIn", ug = "publishButtonCloud", cg = "publish", dg = "buttonGroup", fg = "button";
var Xn = { primaryButton: _1, spinner: N1, primaryButtonIcon: R1, primaryButtonLabel: P1, secondaryButton: z1, secondaryButtonIcon: H1, secondaryButtonLabel: W1, destructiveButton: U1, destructiveButtonIcon: q1, destructiveButtonLabel: j1, linkButton: G1, linkButtonIcon: Z1, icon: Y1, linkButtonLabel: K1, publishButton: J1, publishButtonIcon: Q1, publishButtonLabel: X1, publishButtonAnimation: eg, isDone: tg, publishButtonAnimationArrow: ng, publishArrowOut: sg, publishButtonAnimationCheck: ig, publishButtonAnimationCircle: rg, isIdle: ag, isLoading: lg, publishArrowIn: og, publishButtonCloud: ug, publish: cg, buttonGroup: dg, button: fg }, hg = /* @__PURE__ */ U({
  __name: "FluxButtonGroup",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(Xn).buttonGroup)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const { basePaneStructure: Ci, basePaneElement: Nl, basePaneLoader: mg } = Hr, pg = `pane ${Ci}`, gg = `paneDefault pane ${Ci}`, vg = `paneFlat pane ${Ci}`, yg = `paneWell pane ${Ci}`, bg = `paneHeader ${Nl}`, kg = "basePaneElement", wg = `paneBody ${Nl}`, Sg = "paneHeaderCaption", Ig = "paneHeaderIcon", Tg = `paneFooter ${Nl}`, Cg = `paneLoader ${mg}`, xg = "paneTag", Eg = "paneMedia", Ag = "paneMediaInset paneMedia", Fg = "paneMediaImage", $g = `paneDeck paneDefault pane ${Ci}`, Lg = "baseAutoGrid", Mg = "paneGroup", Bg = "paneIllustration", Og = "paneIllustrationContent", Dg = "paneIllustrationContentControlled paneIllustrationContent", Vg = "paneIllustrationMagic", _g = "paneIllustrationMasked paneIllustration", Ng = "iconBoxed";
var Ut = { pane: pg, paneDefault: gg, paneFlat: vg, paneWell: yg, paneHeader: bg, basePaneElement: kg, paneBody: wg, paneHeaderCaption: Sg, paneHeaderIcon: Ig, paneFooter: Tg, paneLoader: Cg, paneTag: xg, paneMedia: Eg, paneMediaInset: Ag, paneMediaImage: Fg, paneDeck: $g, baseAutoGrid: Lg, paneGroup: Mg, paneIllustration: Bg, paneIllustrationContent: Og, paneIllustrationContentControlled: Dg, paneIllustrationMagic: Vg, paneIllustrationMasked: _g, iconBoxed: Ng }, Ur = /* @__PURE__ */ U({
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
    return (n, s) => (v(), _("div", {
      class: x(e[t.variant])
    }, [
      re(n.$slots, "default"),
      t.isLoading ? re(n.$slots, "loader", { key: 0 }, () => [
        ye("div", {
          class: x(c(Ut).paneLoader)
        }, [
          D(Dn)
        ], 2)
      ]) : J("", !0),
      t.tag ? (v(), _("div", {
        key: 1,
        class: x(c(Ut).paneTag)
      }, ge(t.tag), 3)) : J("", !0)
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
    return (e, n) => (v(), V(Wr, wt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(Xn).secondaryButton,
      "css-class-icon": c(Xn).secondaryButtonIcon,
      "css-class-label": c(Xn).secondaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), wl({ _: 2 }, [
      dt(c(ef), (s) => ({
        name: s,
        fn: H(() => [
          re(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
});
const Rg = "baseAutoGrid";
var Pg = { baseAutoGrid: Rg };
const { baseAutoGrid: zg } = Pg, Hg = "aspectRatio", Wg = `autoGrid ${zg}`, Ug = "container", qg = "spacer", jg = "stack", Gg = "isCentered", Zg = "isFill", Yg = "isWrapping", Kg = "stackHorizontal stack", Jg = "stackVertical stack";
var ms = { aspectRatio: Hg, autoGrid: Wg, container: Ug, spacer: qg, stack: jg, isCentered: Gg, isFill: Zg, isWrapping: Yg, stackHorizontal: Kg, stackVertical: Jg }, qr = /* @__PURE__ */ U({
  __name: "FluxSpacer",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(ms).spacer)
    }, null, 2));
  }
}), tf = /* @__PURE__ */ U({
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
    return (e, n) => (v(), V(kl(t.tag ?? "div"), {
      class: x(c(Ct)(
        t.direction === "horizontal" && c(ms).stackHorizontal,
        t.direction === "vertical" && c(ms).stackVertical,
        t.isCentered && c(ms).isCentered,
        t.isFill && c(ms).isFill,
        t.isWrapping && c(ms).isWrapping
      )),
      style: it({
        "--gap": t.gap && `${t.gap}px`
      })
    }, {
      default: H(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), Qg = /* @__PURE__ */ U({
  __name: "FluxButtonStack",
  props: {
    direction: { default: "horizontal" },
    gap: { default: 9 },
    isFill: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), V(tf, {
      direction: t.direction,
      gap: t.gap,
      "is-fill": t.isFill
    }, {
      default: H(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["direction", "gap", "is-fill"]));
  }
}), fi = /* @__PURE__ */ U({
  __name: "FluxPaneBody",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(Ut).paneBody)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const Xg = "breakthroughTransitionEnterActive", e2 = "breakthroughTransitionBackEnterActive", t2 = "breakthroughTransitionLeaveActive", n2 = "breakthroughTransitionBackLeaveActive", s2 = "breakthroughTransitionEnterFrom", i2 = "breakthroughTransitionBackLeaveTo", r2 = "breakthroughTransitionLeaveTo", a2 = "breakthroughTransitionBackEnterFrom", l2 = "fadeTransitionEnterActive", o2 = "fadeTransitionLeaveActive", u2 = "fadeTransitionEnterFrom", c2 = "fadeTransitionLeaveTo", d2 = "fadeTransitionEnterTo", f2 = "fadeTransitionLeaveFrom", h2 = "routeTransitionEnterActive", m2 = "routeTransitionBackEnterActive", p2 = "routeTransitionLeaveActive", g2 = "routeTransitionBackLeaveActive", v2 = "routeTransitionEnterFrom", y2 = "routeTransitionBackLeaveTo", b2 = "routeTransitionLeaveTo", k2 = "routeTransitionBackEnterFrom", w2 = "tooltipTransitionEnterActive", S2 = "tooltipTransitionLeaveActive", I2 = "tooltipTransitionEnterFrom", T2 = "tooltipTransitionLeaveTo", C2 = "verticalWindowTransitionEnterActive", x2 = "verticalWindowTransitionBackEnterActive", E2 = "verticalWindowTransitionLeaveActive", A2 = "verticalWindowTransitionBackLeaveActive", F2 = "verticalWindowTransitionBackLeaveTo", $2 = "verticalWindowTransitionEnterFrom", L2 = "verticalWindowTransitionBackEnterFrom", M2 = "verticalWindowTransitionLeaveTo", B2 = "windowTransitionEnterActive", O2 = "windowTransitionBackEnterActive", D2 = "windowTransitionLeaveActive", V2 = "windowTransitionBackLeaveActive", _2 = "windowTransitionBackLeaveTo", N2 = "windowTransitionEnterFrom", R2 = "windowTransitionBackEnterFrom", P2 = "windowTransitionLeaveTo";
var Ht = { breakthroughTransitionEnterActive: Xg, breakthroughTransitionBackEnterActive: e2, breakthroughTransitionLeaveActive: t2, breakthroughTransitionBackLeaveActive: n2, breakthroughTransitionEnterFrom: s2, breakthroughTransitionBackLeaveTo: i2, breakthroughTransitionLeaveTo: r2, breakthroughTransitionBackEnterFrom: a2, fadeTransitionEnterActive: l2, fadeTransitionLeaveActive: o2, fadeTransitionEnterFrom: u2, fadeTransitionLeaveTo: c2, fadeTransitionEnterTo: d2, fadeTransitionLeaveFrom: f2, routeTransitionEnterActive: h2, routeTransitionBackEnterActive: m2, routeTransitionLeaveActive: p2, routeTransitionBackLeaveActive: g2, routeTransitionEnterFrom: v2, routeTransitionBackLeaveTo: y2, routeTransitionLeaveTo: b2, routeTransitionBackEnterFrom: k2, tooltipTransitionEnterActive: w2, tooltipTransitionLeaveActive: S2, tooltipTransitionEnterFrom: I2, tooltipTransitionLeaveTo: T2, verticalWindowTransitionEnterActive: C2, verticalWindowTransitionBackEnterActive: x2, verticalWindowTransitionLeaveActive: E2, verticalWindowTransitionBackLeaveActive: A2, verticalWindowTransitionBackLeaveTo: F2, verticalWindowTransitionEnterFrom: $2, verticalWindowTransitionBackEnterFrom: L2, verticalWindowTransitionLeaveTo: M2, windowTransitionEnterActive: B2, windowTransitionBackEnterActive: O2, windowTransitionLeaveActive: D2, windowTransitionBackLeaveActive: V2, windowTransitionBackLeaveTo: _2, windowTransitionEnterFrom: N2, windowTransitionBackEnterFrom: R2, windowTransitionLeaveTo: P2 }, rl = /* @__PURE__ */ U({
  __name: "FluxFadeTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (v(), V(ss, {
      mode: t.mode,
      "enter-active-class": c(Ht).fadeTransitionEnterActive,
      "enter-from-class": c(Ht).fadeTransitionEnterFrom,
      "enter-to-class": c(Ht).fadeTransitionEnterTo,
      "leave-active-class": c(Ht).fadeTransitionLeaveActive,
      "leave-from-class": c(Ht).fadeTransitionLeaveFrom,
      "leave-to-class": c(Ht).fadeTransitionLeaveTo
    }, {
      default: H(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class"]));
  }
});
const z2 = "overlayView", H2 = "overlayProvider overlayView", W2 = "overlayShade overlayView", U2 = "overlay", q2 = "overlayTransitionLeaveActive", j2 = "basePaneStructure", G2 = "paneFooter", Z2 = "isCurrent", Y2 = "overlaySmall overlay", K2 = "overlayMedium overlay", J2 = "overlayLarge overlay", Q2 = "slideOver overlay", X2 = "paneHeader", ev = "tabs", tv = "tabBar", nv = "paneHeaderCaption", sv = "overlayTransitionEnterActive", iv = "overlayTransitionEnterFrom", rv = "overlayTransitionLeaveTo", av = "slideOverTransitionEnterActive", lv = "slideOverTransitionLeaveActive", ov = "slideOverTransitionEnterFrom", uv = "slideOverTransitionLeaveTo";
var $t = { overlayView: z2, overlayProvider: H2, overlayShade: W2, overlay: U2, overlayTransitionLeaveActive: q2, basePaneStructure: j2, paneFooter: G2, isCurrent: Z2, overlaySmall: Y2, overlayMedium: K2, overlayLarge: J2, slideOver: Q2, paneHeader: X2, tabs: ev, tabBar: tv, paneHeaderCaption: nv, overlayTransitionEnterActive: sv, overlayTransitionEnterFrom: iv, overlayTransitionLeaveTo: rv, slideOverTransitionEnterActive: av, slideOverTransitionLeaveActive: lv, slideOverTransitionEnterFrom: ov, slideOverTransitionLeaveTo: uv }, cv = /* @__PURE__ */ U({
  __name: "FluxOverlayTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (v(), V(ss, {
      mode: t.mode,
      "enter-active-class": c($t).overlayTransitionEnterActive,
      "enter-from-class": c($t).overlayTransitionEnterFrom,
      "leave-active-class": c($t).overlayTransitionLeaveActive,
      "leave-to-class": c($t).overlayTransitionLeaveTo
    }, {
      default: H(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
}), dv = /* @__PURE__ */ U({
  __name: "FluxTooltipTransition",
  props: {
    mode: { default: "out-in" }
  },
  setup(t) {
    return (e, n) => (v(), V(ss, {
      mode: t.mode,
      "enter-active-class": c(Ht).tooltipTransitionEnterActive,
      "enter-from-class": c(Ht).tooltipTransitionEnterFrom,
      "leave-active-class": c(Ht).tooltipTransitionLeaveActive,
      "leave-to-class": c(Ht).tooltipTransitionLeaveTo
    }, {
      default: H(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["mode", "enter-active-class", "enter-from-class", "leave-active-class", "leave-to-class"]));
  }
});
const fv = "badge", hv = "spinner", mv = "badgeClose", pv = "icon", gv = "badgeDot", vv = "badgeIcon", yv = "badgeLabel", bv = "badgeGray badge", kv = "badgePrimary badge", wv = "badgeDanger badge", Sv = "badgeInfo badge", Iv = "badgeSuccess badge", Tv = "badgeWarning badge", Cv = "tag badge", xv = "tagClose badgeClose", Ev = "tagDot badgeDot", Av = "tagIcon badgeIcon", Fv = "tagLabel badgeLabel", $v = "tagGray badgeGray badge tag badge", Lv = "tagPrimary badgePrimary badge tag badge", Mv = "tagDanger badgeDanger badge tag badge", Bv = "tagInfo badgeInfo badge tag badge", Ov = "tagSuccess badgeSuccess badge tag badge", Dv = "tagWarning badgeWarning badge tag badge";
var At = { badge: fv, spinner: hv, badgeClose: mv, icon: pv, badgeDot: gv, badgeIcon: vv, badgeLabel: yv, badgeGray: bv, badgePrimary: kv, badgeDanger: wv, badgeInfo: Sv, badgeSuccess: Iv, badgeWarning: Tv, tag: Cv, tagClose: xv, tagDot: Ev, tagIcon: Av, tagLabel: Fv, tagGray: $v, tagPrimary: Lv, tagDanger: Mv, tagInfo: Bv, tagSuccess: Ov, tagWarning: Dv }, Vv = /* @__PURE__ */ U({
  __name: "Anchor",
  props: {
    tagName: {}
  },
  setup(t) {
    return (e, n) => (v(), V(kl(t.tagName), null, {
      default: H(() => [
        re(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}), _v = /* @__PURE__ */ U({
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
    }), is(() => {
      window.removeEventListener("resize", a), window.removeEventListener("scroll", l);
    }), Qd(n, () => {
      i();
    }, { childList: !0, subtree: !0 });
    function i() {
      const o = c(e), u = c(n);
      if (!o || !u)
        return;
      const { x: d, y: f, height: p, width: h } = o.getBoundingClientRect(), { height: g, width: w } = u.getBoundingClientRect();
      let S, b;
      switch (t.position) {
        case "top":
          S = d + h / 2 - w / 2, b = f - g - t.margin;
          break;
        case "top-left":
          S = d, b = f - g - t.margin;
          break;
        case "top-right":
          S = d - w + h, b = f - g - t.margin;
          break;
        case "left":
          S = d - w - t.margin, b = f + p / 2 - g / 2;
          break;
        case "left-top":
          S = d - w - t.margin, b = f;
          break;
        case "left-bottom":
          S = d - w - t.margin, b = f + p - g;
          break;
        case "right":
          S = d + h + t.margin, b = f + p / 2 - g / 2;
          break;
        case "right-top":
          S = d + h + t.margin, b = f;
          break;
        case "right-bottom":
          S = d + h + t.margin, b = f + p - g;
          break;
        case "bottom":
          S = d + h / 2 - w / 2, b = f + p + t.margin;
          break;
        case "bottom-left":
          S = d, b = f + p + t.margin;
          break;
        case "bottom-right":
          S = d - w + h, b = f + p + t.margin;
          break;
        default:
          t.direction === "horizontal" ? (S = d + h + t.margin, b = f + p / 2 - g / 2, S + w > innerWidth && (S = d - w - t.margin)) : (S = d + h / 2 - w / 2, b = f + p + t.margin, b + g + t.margin > innerHeight && (b = f - g - t.margin)), (b < 0 || b + g > innerHeight) && (b = innerHeight / 2 - g / 2);
          break;
      }
      s.x = S, s.y = b;
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
    }), (o, u) => (v(), _("div", {
      ref: "popup",
      style: it({
        "--x": `${s.x}px`,
        "--y": `${s.y}px`,
        "--width": s.width ? `${s.width}px` : void 0
      })
    }, [
      re(o.$slots, "default")
    ], 4));
  }
});
const { button: Nv, buttonIcon: nf, buttonLabel: Rv } = $n, Pv = "menu", zv = "menuNormal menu", Hv = "menuLarge menu", Wv = "menuGroup", Uv = "menuGroupHorizontal menuGroup", qv = "menuGroupVertical menuGroup", jv = `menuItem ${Nv}`, Gv = `menuItemIcon ${nf}`, Zv = `menuItemLabel ${Rv}`, Yv = "menuItemActive", Kv = "menuItemDestructive", Jv = "menuItemHighlighted", Qv = "menuItemIndented", Xv = `menuItemSelectableIcon ${nf}`, ey = "menuItemSelected", ty = "menuItemCommand", ny = "menuItemCommandIcon", sy = "icon", iy = "menuItemImage", ry = "menuTitle", ay = "menuSubHeader", ly = "menuSubHeaderIcon", oy = "menuSubHeaderLabel", uy = "basePane", cy = "divider", dy = "separator", fy = "expandableBody";
var Pe = { menu: Pv, menuNormal: zv, menuLarge: Hv, menuGroup: Wv, menuGroupHorizontal: Uv, menuGroupVertical: qv, menuItem: jv, menuItemIcon: Gv, menuItemLabel: Zv, menuItemActive: Yv, menuItemDestructive: Kv, menuItemHighlighted: Jv, menuItemIndented: Qv, menuItemSelectableIcon: Xv, menuItemSelected: ey, menuItemCommand: ty, menuItemCommandIcon: ny, icon: sy, menuItemImage: iy, menuTitle: ry, menuSubHeader: ay, menuSubHeaderIcon: ly, menuSubHeaderLabel: oy, basePane: uy, divider: cy, separator: dy, expandableBody: fy };
const hy = ["src", "alt"];
var Fa = /* @__PURE__ */ U({
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
    return (e, n) => (v(), V(Wr, wt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isLoading: t.isLoading, label: t.label, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
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
        fn: H(() => [
          D(st, {
            class: x(c(Pe).menuItemSelectableIcon),
            name: t.isSelected ? "circle-check" : void 0
          }, null, 8, ["class", "name"])
        ]),
        key: "0"
      } : t.imageSrc ? {
        name: "iconLeading",
        fn: H(() => [
          ye("img", {
            class: x(c(Pe).menuItemImage),
            src: t.imageSrc,
            alt: t.imageAlt ?? ""
          }, null, 10, hy)
        ]),
        key: "1"
      } : void 0,
      t.command || t.commandIcon || t.commandLoading ? {
        name: "after",
        fn: H(() => [
          t.commandLoading ? (v(), V(Dn, {
            key: 0,
            class: x(c(Pe).menuItemCommandIcon),
            size: 16
          }, null, 8, ["class"])) : (v(), _(de, { key: 1 }, [
            t.command ? (v(), _("kbd", {
              key: 0,
              class: x(c(Pe).menuItemCommand)
            }, ge(t.command), 3)) : J("", !0),
            t.commandIcon ? (v(), V(st, {
              key: 1,
              class: x(c(Pe).menuItemCommandIcon),
              name: t.commandIcon
            }, null, 8, ["class", "name"])) : J("", !0)
          ], 64))
        ]),
        key: "2"
      } : void 0
    ]), 1040, ["css-class", "css-class-icon", "css-class-label", "role", "class", "aria-checked", "tabindex"]));
  }
});
const { basePane: my } = Hr, py = "formInputGroup formInputEnabled formInput", gy = "buttonGroup", vy = "button", yy = "formInput", by = "formSelect formInput", ky = "formStructureElement", wy = "form formStructureElement", Sy = "pane", Iy = "formColumn formStructureElement", Ty = "formSection formStructureElement", Cy = "formRow", xy = "formSectionTitle", Ey = "formField", Ay = "formFieldHeader", Fy = "formFieldLabel", $y = "formFieldOptional", Ly = "formFieldValue", My = "formFieldCounter", By = "formFieldAddition", Oy = "formFieldAdditionIcon", Dy = "formFieldAdditionError formFieldAddition", Vy = "formFieldAdditionHint formFieldAddition", _y = "isSecondary", Ny = "formInputDisabled formInput", Ry = "formInputEnabled formInput", Py = "formInputIcon", zy = "formInputIconTrailing formInputIcon", Hy = "formInputIconLeading formInputIcon", Wy = "formInputIconPasswordToggle formInputIconTrailing formInputIcon", Uy = "formInputNative", qy = "formInputNativeHasIconLeading", jy = "formInputNativeHasIconTrailing", Gy = "formInputAddition formInput", Zy = "isCondensed", Yy = "secondaryButton", Ky = "formDateInput", Jy = "formDateRangeInput formInput", Qy = "formDateTimeInput", Xy = "inputGroup", e4 = "formTimeInput formDateInput", t4 = "isDisabled", n4 = "isFocused", s4 = "badge", i4 = "formSelectIcon", r4 = "formSelectInput", a4 = "formSelectPlaceholder", l4 = `formSelectPopup ${my}`, o4 = "menuItem", u4 = "isKeyboardAction", c4 = "isSearchable", d4 = "menuSubHeader", f4 = "formSelectSelected", h4 = "buttonLabel", m4 = "formTextArea", p4 = "formTextAreaDisabled formInputDisabled formInput formTextArea", g4 = "formTextAreaEnabled formInputEnabled formInput formTextArea", v4 = "checkbox", y4 = "checkboxElement", b4 = "checkboxNative", k4 = "icon", w4 = "checkboxLabel", S4 = "quantitySelector", I4 = "quantitySelectorButton", T4 = "quantitySelectorInput formInput", C4 = "pinInput", x4 = "pinInputField", E4 = "pinInputEnabled pinInput", A4 = "pinInputDisabled pinInput", F4 = "toggle", $4 = "isChecked", L4 = "toggleInput", M4 = "isSwitch", B4 = "toggleIcon", O4 = "toggleIconOn toggleIcon", D4 = "toggleIconOff toggleIcon";
var ue = { formInputGroup: py, buttonGroup: gy, button: vy, formInput: yy, formSelect: by, formStructureElement: ky, form: wy, pane: Sy, formColumn: Iy, formSection: Ty, formRow: Cy, formSectionTitle: xy, formField: Ey, formFieldHeader: Ay, formFieldLabel: Fy, formFieldOptional: $y, formFieldValue: Ly, formFieldCounter: My, formFieldAddition: By, formFieldAdditionIcon: Oy, formFieldAdditionError: Dy, formFieldAdditionHint: Vy, isSecondary: _y, formInputDisabled: Ny, formInputEnabled: Ry, formInputIcon: Py, formInputIconTrailing: zy, formInputIconLeading: Hy, formInputIconPasswordToggle: Wy, formInputNative: Uy, formInputNativeHasIconLeading: qy, formInputNativeHasIconTrailing: jy, formInputAddition: Gy, isCondensed: Zy, secondaryButton: Yy, formDateInput: Ky, formDateRangeInput: Jy, formDateTimeInput: Qy, inputGroup: Xy, formTimeInput: e4, isDisabled: t4, isFocused: n4, badge: s4, formSelectIcon: i4, formSelectInput: r4, formSelectPlaceholder: a4, formSelectPopup: l4, menuItem: o4, isKeyboardAction: u4, isSearchable: c4, menuSubHeader: d4, formSelectSelected: f4, buttonLabel: h4, formTextArea: m4, formTextAreaDisabled: p4, formTextAreaEnabled: g4, checkbox: v4, checkboxElement: y4, checkboxNative: b4, icon: k4, checkboxLabel: w4, quantitySelector: S4, quantitySelectorButton: I4, quantitySelectorInput: T4, pinInput: C4, pinInputField: x4, pinInputEnabled: E4, pinInputDisabled: A4, toggle: F4, isChecked: $4, toggleInput: L4, isSwitch: M4, toggleIcon: B4, toggleIconOn: O4, toggleIconOff: D4 };
const V4 = ["aria-disabled"], _4 = ["id", "autocomplete", "autofocus", "aria-disabled", "disabled", "max", "maxlength", "min", "placeholder", "readonly", "step", "type", "value"];
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
    const s = n, i = fn(t, "modelValue"), r = As(cn(() => t.disabled)), a = sn("input"), { id: l } = Fl(), o = ee(null), u = ee(t.type);
    function d() {
      ct(a)?.blur();
    }
    function f() {
      ct(a)?.focus();
    }
    function p() {
      t.type === "password" && (u.value = c(u) === "password" ? "text" : "password");
    }
    function h() {
      s("blur");
    }
    function g() {
      s("focus");
    }
    function w(b) {
      const E = b.target.value;
      switch (t.type) {
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          const k = ne.fromISO(E);
          if (!k.isValid)
            return;
          i.value = k;
          break;
        case "number":
          i.value = Number(E);
          break;
        default:
          i.value = E;
          break;
      }
    }
    function S(b) {
      ["date", "datetime-local", "month", "week"].includes(t.type) && b.key === " " && (s("showPicker"), b.preventDefault());
    }
    return De([i, () => t.type], ([b, E]) => {
      if (!b && b !== 0) {
        o.value = null;
        return;
      }
      if (ne.isDateTime(b)) {
        const k = b.toISO();
        switch (E) {
          case "date":
            o.value = k.substring(0, 10);
            break;
          case "datetime-local":
            o.value = k.substring(0, 16);
            break;
          case "time":
            o.value = k.substring(11, 16);
            break;
          default:
            o.value = k;
            break;
        }
        return;
      }
      o.value = b.toString();
    }, { immediate: !0 }), De([a, () => t.pattern, o], ([b, E, k], B, N) => {
      if (!b || !E)
        return;
      const z = bm[E](b);
      k && (z.value = k, i.value = z.value), N(() => z.destroy());
    }, { immediate: !0 }), De(() => t.type, (b) => u.value = b), e({
      blur: d,
      focus: f
    }), (b, E) => (v(), _("div", {
      class: x(c(Ct)(
        c(r) ? c(ue).formInputDisabled : c(ue).formInputEnabled,
        t.isCondensed && c(ue).isCondensed,
        t.isSecondary && c(ue).isSecondary
      )),
      "aria-disabled": c(r) ? !0 : void 0
    }, [
      ye("input", {
        ref: "input",
        class: x(c(Ct)(
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
        onBlur: E[0] || (E[0] = (k) => h()),
        onFocus: E[1] || (E[1] = (k) => g()),
        onInput: w,
        onKeydown: S
      }, null, 42, _4),
      t.iconLeading ? (v(), V(st, {
        key: 0,
        class: x(c(ue).formInputIconLeading),
        name: t.iconLeading,
        size: 18
      }, null, 8, ["class", "name"])) : J("", !0),
      t.type === "password" ? (v(), V(st, {
        key: 1,
        class: x(c(ue).formInputIconPasswordToggle),
        name: u.value === "password" ? "eye" : "eye-slash",
        size: 18,
        onClick: E[2] || (E[2] = (k) => p())
      }, null, 8, ["class", "name"])) : t.iconTrailing ? (v(), V(st, {
        key: 2,
        class: x(c(ue).formInputIconTrailing),
        name: t.iconTrailing,
        size: 18
      }, null, 8, ["class", "name"])) : J("", !0)
    ], 10, V4));
  }
}), N4 = /* @__PURE__ */ U({
  __name: "FluxMenuGroup",
  props: {
    isHorizontal: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(t.isHorizontal ? c(Pe).menuGroupHorizontal : c(Pe).menuGroupVertical),
      role: "group"
    }, [
      re(e.$slots, "default")
    ], 2));
  }
}), mu = /* @__PURE__ */ U({
  __name: "FluxMenuSubHeader",
  props: {
    iconLeading: {},
    iconTrailing: {},
    label: {}
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(Pe).menuSubHeader),
      role: "presentation"
    }, [
      t.iconLeading ? (v(), V(st, {
        key: 0,
        class: x(c(Pe).menuSubHeaderIcon),
        name: t.iconLeading
      }, null, 8, ["class", "name"])) : J("", !0),
      ye("span", {
        class: x(c(Pe).menuSubHeaderLabel)
      }, ge(t.label), 3),
      t.iconTrailing ? (v(), V(st, {
        key: 1,
        class: x(c(Pe).menuSubHeaderIcon),
        name: t.iconTrailing
      }, null, 8, ["class", "name"])) : J("", !0)
    ], 2));
  }
}), pu = /* @__PURE__ */ U({
  __name: "FluxMenu",
  props: {
    isLarge: { type: Boolean }
  },
  setup(t) {
    const e = sn("element");
    return Op(e, {
      direction: "vertical"
    }), (n, s) => (v(), _("nav", {
      ref: "element",
      class: x(t.isLarge ? c(Pe).menuLarge : c(Pe).menuNormal),
      role: "menu",
      "aria-orientation": "vertical"
    }, [
      re(n.$slots, "default")
    ], 2));
  }
}), R4 = /* @__PURE__ */ U({
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
    return (i, r) => (v(), V(Xd, {
      class: x(c(Ct)(
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
      default: H(() => [
        t.isLoading ? (v(), V(Dn, {
          key: 0,
          class: x(c(At).tagIcon),
          size: 16
        }, null, 8, ["class"])) : t.dot ? (v(), _("span", {
          key: 1,
          class: x(c(At).tagDot)
        }, null, 2)) : t.icon ? (v(), V(st, {
          key: 2,
          class: x(c(At).tagIcon),
          name: t.icon,
          size: 16
        }, null, 8, ["class", "name"])) : J("", !0),
        ye("span", {
          class: x(c(At).tagLabel)
        }, ge(t.label), 3),
        !t.isClickable && t.isDeletable ? (v(), _("button", {
          key: 3,
          class: x(c(At).tagClose),
          type: "button",
          onClick: r[0] || (r[0] = (a) => s())
        }, [
          D(st, { name: "xmark" })
        ], 2)) : J("", !0)
      ]),
      _: 1
    }, 8, ["class", "component-type", "tabindex", "href", "rel", "target", "to"]));
  }
});
const Ps = -1;
var P4 = /* @__PURE__ */ U({
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
    const n = e, s = fn(t, "searchQuery"), i = As(cn(() => t.disabled)), { id: r } = Fl(), a = wi(), l = sn("anchor"), o = sn("anchorPopup"), u = sn("optionElements"), d = sn("searchInputElement"), f = ee(Ps), p = ee(!1), h = ee(!1), g = Ae(() => ct(d) ?? ct(l)), w = Ae(() => c(S)[c(f)]?.value), S = Ae(() => t.options.map((z) => z[1]).flat());
    hu([l, o], h, () => h.value = !1), hu(l, h, () => c(g)?.focus());
    function b(z) {
      n("deselect", z), Gn(() => c(g)?.focus());
    }
    function E(z) {
      n("select", z), !t.isMultiple && (h.value = !1), f.value = Ps, s.value = "", Gn(() => c(g)?.focus());
    }
    function k() {
      c(i) || (h.value = !c(h));
    }
    function B(z) {
      if (n("keyDown", z), !c(h)) {
        z.key === "Enter" && (h.value = !0);
        return;
      }
      if (p.value = !0, c(f) === Ps && ["ArrowDown", "ArrowUp"].includes(z.key)) {
        const $ = c(u)?.findIndex((M) => "isActive" in M.$props && M.$props.isActive);
        f.value = $ ?? Ps;
      }
      switch (z.key) {
        case "ArrowUp":
          f.value = Math.max(0, c(f) - 1);
          break;
        case "ArrowDown":
          f.value = Math.min(c(S).length - 1, c(f) + 1);
          break;
        case "Backspace":
          if (c(s).length > 0 || t.selected.length === 0)
            return;
          b(t.selected[t.selected.length - 1].value);
          break;
        case "Enter":
          const $ = c(w);
          $ && E($);
          break;
        case "Escape":
          h.value = !1;
          break;
        case "Tab":
          h.value = !1;
          return;
        default:
          z.key.match(/[a-z]/) ? f.value = c(S).findIndex((M) => M.label.toLowerCase().startsWith(z.key)) : f.value = -1;
          return;
      }
      z.preventDefault();
    }
    function N() {
      p.value = !1;
    }
    return De(f, (z) => {
      c(u)[z]?.$el.scrollIntoView({
        block: "center"
      });
    }), De(h, (z) => {
      if (!z) {
        n("close");
        return;
      }
      Gn(() => {
        c(d)?.focus();
      }), Gn(() => {
        const K = c(u);
        if (!K || t.isMultiple)
          return;
        const $ = K.findIndex((Y) => "isActive" in Y.$props && Y.$props.isActive), M = K[$];
        M && M.$el.scrollIntoView({
          block: "center"
        });
      }), n("open");
    }), De(s, (z) => n("search", z)), De([() => t.options, h], () => f.value = Ps), (z, K) => (v(), _(de, null, [
      D(Vv, wt({ ref: "anchor" }, z.$attrs, {
        class: c(Ct)(
          c(ue).formSelect,
          c(i) && c(ue).isDisabled,
          h.value && c(ue).isFocused,
          t.isSearchable && c(ue).isSearchable
        ),
        id: c(r),
        "aria-disabled": c(i) ? !0 : void 0,
        tabindex: "0",
        "tag-name": "div",
        onClick: K[0] || (K[0] = ($) => k()),
        onKeydown: B,
        onKeyup: N
      }), {
        default: H(() => [
          !t.isMultiple && t.selected[0] ? (v(), V(Fa, {
            key: 0,
            class: x(c(ue).formSelectSelected),
            command: t.selected[0].command,
            "command-icon": t.selected[0].commandIcon,
            "icon-leading": t.selected[0].icon,
            "image-alt": t.selected[0].imageAlt,
            "image-src": t.selected[0].imageSrc,
            label: t.selected[0].label,
            tabindex: "-1"
          }, null, 8, ["class", "command", "command-icon", "icon-leading", "image-alt", "image-src", "label"])) : t.isMultiple && t.selected[0] ? (v(!0), _(de, { key: 1 }, dt(t.selected, ($) => (v(), V(R4, {
            key: $.value ?? "null option",
            label: $.label,
            "is-deletable": "",
            onDelete: (M) => b($.value)
          }, null, 8, ["label", "onDelete"]))), 128)) : t.placeholder ? (v(), _("span", {
            key: 2,
            class: x(c(ue).formSelectPlaceholder)
          }, ge(t.placeholder), 3)) : J("", !0),
          t.isLoading ? (v(), V(Dn, {
            key: 3,
            class: x(c(ue).formSelectIcon),
            size: 16
          }, null, 8, ["class"])) : (v(), V(st, {
            key: 4,
            class: x(c(ue).formSelectIcon),
            name: "angle-down"
          }, null, 8, ["class"]))
        ]),
        _: 1
      }, 16, ["class", "id", "aria-disabled"]),
      (v(), V(ec, { to: "body" }, [
        D(c(rl), null, {
          default: H(() => [
            h.value && !c(i) ? (v(), V(_v, {
              key: 0,
              ref: "anchorPopup",
              class: x(c(Ct)(
                c(ue).formSelectPopup,
                p.value && c(ue).isKeyboardAction,
                t.isSearchable && c(ue).isSearchable
              )),
              anchor: l.value,
              direction: "vertical",
              "use-anchor-width": ""
            }, {
              default: H(() => [
                t.isSearchable ? (v(), V(pr, {
                  key: 0,
                  modelValue: s.value,
                  "onUpdate:modelValue": K[1] || (K[1] = ($) => s.value = $),
                  ref: "searchInputElement",
                  "auto-complete": "off",
                  class: x(c(ue).formSelectInput),
                  type: "search",
                  "icon-trailing": "magnifying-glass",
                  placeholder: c(a)("flux.search"),
                  onKeydown: B
                }, null, 8, ["modelValue", "class", "placeholder"])) : J("", !0),
                !t.isLoading && t.options.length === 0 ? (v(), V(pu, { key: 1 }, {
                  default: H(() => [
                    D(mu, {
                      label: c(a)("flux.noItems")
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })) : (v(), V(pu, { key: 2 }, {
                  default: H(() => [
                    (v(!0), _(de, null, dt(t.options, ([$, M], Y) => (v(), _(de, {
                      key: `group-${Y}`
                    }, [
                      D(N4, null, {
                        default: H(() => [
                          c(Wa)($) ? (v(), V(mu, {
                            key: 0,
                            "icon-leading": $.icon,
                            label: $.label
                          }, null, 8, ["icon-leading", "label"])) : J("", !0),
                          (v(!0), _(de, null, dt(M, (Q, P) => (v(), _(de, null, [
                            c(Xs)(Q) ? (v(), V(Fa, {
                              ref_for: !0,
                              ref: "optionElements",
                              key: P,
                              command: Q.command,
                              "command-icon": Q.commandIcon,
                              "icon-leading": Q.icon,
                              "image-alt": Q.imageAlt,
                              "image-src": Q.imageSrc,
                              "is-active": !!t.selected.find((te) => te.value === Q.value),
                              "is-highlighted": w.value === Q.value,
                              label: Q.label,
                              type: "button",
                              onClick: (te) => E(Q.value)
                            }, null, 8, ["command", "command-icon", "icon-leading", "image-alt", "image-src", "is-active", "is-highlighted", "label", "onClick"])) : J("", !0)
                          ], 64))), 256))
                        ]),
                        _: 2
                      }, 1024),
                      c(Xs)($) ? (v(), V(Fa, {
                        ref_for: !0,
                        ref: "optionElements",
                        key: `item-${Y}`,
                        command: $.command,
                        "command-icon": $.commandIcon,
                        "icon-leading": $.icon,
                        "image-alt": $.imageAlt,
                        "image-src": $.imageSrc,
                        "is-active": !!t.selected.find((Q) => Q.value === $.value),
                        "is-highlighted": w.value === $.value,
                        label: $.label,
                        type: "button",
                        onClick: (Q) => E($.value)
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
const z4 = `.${$t.overlayProvider.replaceAll(" ", ".")}`;
function H4(t, e, n, s, i, r) {
  let a = null, l = 0;
  const o = ee();
  Bp(o), is(() => {
    a?.();
  }), De(o, (d, f, p) => {
    d && (d.addEventListener("keydown", u, { passive: !0 }), d.focus(), p(() => {
      d.removeEventListener("keydown", u);
    }));
  });
  function u(d) {
    d.key !== "Escape" || !a || !e.isCloseable || n("close");
  }
  return () => {
    const { dialogCount: d } = gi(), f = bp(s.default?.() ?? []), p = f.length > 0 && f.some((g) => g.type !== Ke);
    let h;
    return p ? (a || ([l, a] = Uc()), h = ks("div", {
      key: e.viewKey,
      ref: o,
      class: [i, l === d && $t.isCurrent],
      style: {
        zIndex: l + 1e3
      },
      tabindex: 0
    }, f)) : (a?.(), a = null), ks(ec, { defer: !0, disabled: !h, to: z4 }, [
      ks(r, t, {
        default: () => h
      })
    ]);
  };
}
const W4 = { key: 1 };
var gu = /* @__PURE__ */ U({
  __name: "FluxFormFieldAddition",
  props: {
    icon: {},
    message: {},
    mode: { default: "hint" }
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(Ct)(
        t.mode === "error" && c(ue).formFieldAdditionError,
        t.mode === "hint" && c(ue).formFieldAdditionHint
      )),
      role: "alert"
    }, [
      t.icon ? (v(), V(st, {
        key: 0,
        class: x(c(ue).formFieldAdditionIcon),
        name: t.icon,
        size: 16
      }, null, 8, ["class", "name"])) : J("", !0),
      t.message ? (v(), _("span", W4, ge(t.message), 1)) : J("", !0),
      re(e.$slots, "default")
    ], 2));
  }
});
const U4 = ["for"];
var qn = /* @__PURE__ */ U({
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
    const e = nh(), n = yl(), s = wi();
    return Mn(Rc, {
      id: n
    }), (i, r) => (v(), _("div", {
      class: x(c(ue).formField)
    }, [
      ye("label", {
        for: c(n),
        class: x(c(ue).formFieldHeader)
      }, [
        ye("span", {
          class: x(c(ue).formFieldLabel)
        }, ge(t.label), 3),
        t.isOptional ? (v(), _("span", {
          key: 0,
          class: x(c(ue).formFieldOptional)
        }, " (" + ge(c(s)("flux.optional")) + ") ", 3)) : J("", !0),
        "value" in e ? (v(), _("span", {
          key: 1,
          class: x(c(ue).formFieldValue)
        }, [
          re(i.$slots, "value", ra(qi({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
        ], 2)) : J("", !0)
      ], 10, U4),
      re(i.$slots, "default", ra(qi({ id: c(n) }))),
      t.currentLength && t.maxLength && t.maxLength > 0 ? (v(), _("span", {
        key: 0,
        class: x(c(ue).formFieldCounter)
      }, ge(t.currentLength) + " / " + ge(t.maxLength), 3)) : J("", !0),
      t.error ? (v(), V(gu, {
        key: 1,
        icon: "circle-exclamation",
        mode: "error",
        message: t.error
      }, null, 8, ["message"])) : J("", !0),
      t.hint ? (v(), V(gu, {
        key: 2,
        icon: "circle-info",
        message: t.hint
      }, null, 8, ["message"])) : J("", !0),
      re(i.$slots, "addition", ra(qi({ currentLength: t.currentLength, error: t.error, hint: t.hint, id: c(n), isOptional: t.isOptional, label: t.label, maxLength: t.maxLength })))
    ], 2));
  }
}), jr = /* @__PURE__ */ U({
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
    return (e, n) => (v(), V(Wr, wt({ type: t.type, disabled: t.disabled, iconLeading: t.iconLeading, iconTrailing: t.iconTrailing, isFilled: t.isFilled, isLoading: t.isLoading, isSubmit: t.isSubmit, label: t.label, size: t.size, href: t.href, rel: t.rel, target: t.target, to: t.to }, {
      "css-class": c(Xn).primaryButton,
      "css-class-icon": c(Xn).primaryButtonIcon,
      "css-class-label": c(Xn).primaryButtonLabel,
      onClick: n[0] || (n[0] = (s) => e.$emit("click", s)),
      onMouseenter: n[1] || (n[1] = (s) => e.$emit("mouseenter", s)),
      onMouseleave: n[2] || (n[2] = (s) => e.$emit("mouseleave", s))
    }), wl({ _: 2 }, [
      dt(c(ef), (s) => ({
        name: s,
        fn: H(() => [
          re(e.$slots, s)
        ])
      }))
    ]), 1040, ["css-class", "css-class-icon", "css-class-label"]));
  }
}), vu = /* @__PURE__ */ U({
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
    const e = fn(t, "searchQuery"), n = fn(t, "modelValue"), s = As(cn(() => t.disabled)), { groups: i, selected: r, values: a } = O1(n, t.isMultiple, cn(() => t.options), e);
    function l(u) {
      c(t.isMultiple) && (n.value = c(a).filter((d) => d !== u));
    }
    function o(u) {
      c(t.isMultiple) ? n.value = [...c(a), u] : n.value = u;
    }
    return (u, d) => (v(), V(c(P4), {
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
}), q4 = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "FluxDisabled",
  props: {
    disabled: { type: Boolean, default: !0 }
  },
  setup(t) {
    return Mn(Nc, cn(() => t.disabled)), (e, n) => re(e.$slots, "default");
  }
}), j4 = /* @__PURE__ */ U({
  __name: "FluxFormColumn",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(ue).formColumn)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
}), Rl = /* @__PURE__ */ U({
  __name: "FluxPaneFooter",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(Ut).paneFooter)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const G4 = ["aria-disabled"];
var Z4 = /* @__PURE__ */ U({
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
    return (i, r) => (v(), V(q4, { disabled: t.disabled }, {
      default: H(() => [
        ye("form", {
          class: x(c(ue).form),
          "aria-disabled": t.disabled ? !0 : void 0,
          onSubmit: r[0] || (r[0] = xl((a) => s(), ["prevent"]))
        }, [
          re(i.$slots, "default")
        ], 42, G4)
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
}), Y4 = /* @__PURE__ */ U({
  __name: "FluxFormInputGroup",
  props: {
    isSecondary: { type: Boolean },
    isCondensed: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(Ct)(
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
const K4 = ["id", "autocomplete", "autofocus", "disabled", "maxlength", "placeholder", "aria-disabled"];
var J4 = /* @__PURE__ */ U({
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
    const n = e, s = fn(t, "modelValue"), i = As(cn(() => t.disabled)), { id: r } = Fl();
    return (a, l) => gl((v(), _("textarea", {
      "onUpdate:modelValue": l[0] || (l[0] = (o) => s.value = o),
      ref: "input",
      class: x(c(i) ? c(ue).formTextAreaDisabled : c(ue).formTextAreaEnabled),
      id: c(r),
      autocomplete: t.autoComplete,
      autofocus: t.autoFocus,
      disabled: c(i),
      maxlength: t.maxLength,
      placeholder: t.placeholder,
      style: it({
        "--rows": t.rows
      }),
      "aria-disabled": c(i) ? !0 : void 0,
      onBlur: l[1] || (l[1] = (o) => n("blur")),
      onFocus: l[2] || (l[2] = (o) => n("focus"))
    }, null, 46, K4)), [
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
    return H4(
      e,
      t,
      n,
      s,
      Ct(
        t.size === "small" && $t.overlaySmall,
        t.size === "medium" && $t.overlayMedium,
        t.size === "large" && $t.overlayLarge
      ),
      cv
    );
  }
});
const Q4 = { key: 0 }, X4 = { key: 1 };
var Gr = /* @__PURE__ */ U({
  __name: "FluxPaneHeader",
  props: {
    icon: {},
    subTitle: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(c(Ut).paneHeader)
    }, [
      re(e.$slots, "before"),
      t.icon ? (v(), V(st, {
        key: 0,
        class: x(c(Ut).paneHeaderIcon),
        size: 20,
        name: t.icon
      }, null, 8, ["class", "name"])) : J("", !0),
      t.title || t.subTitle ? (v(), _("div", {
        key: 1,
        class: x(c(Ut).paneHeaderCaption)
      }, [
        t.title ? (v(), _("strong", Q4, ge(t.title), 1)) : J("", !0),
        t.subTitle ? (v(), _("span", X4, ge(t.subTitle), 1)) : J("", !0)
      ], 2)) : J("", !0),
      re(e.$slots, "after")
    ], 2));
  }
}), eb = /* @__PURE__ */ U({
  __name: "FluxAlert",
  props: {
    alert: {}
  },
  setup(t) {
    const e = wi();
    return (n, s) => (v(), V(Ur, null, {
      default: H(() => [
        D(Gr, {
          icon: t.alert.icon,
          title: t.alert.title
        }, null, 8, ["icon", "title"]),
        D(fi, {
          innerHTML: t.alert.message
        }, null, 8, ["innerHTML"]),
        D(Rl, null, {
          default: H(() => [
            D(qr),
            D(jr, {
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
}), tb = /* @__PURE__ */ U({
  __name: "FluxConfirm",
  props: {
    confirm: {}
  },
  setup(t) {
    const e = wi();
    return (n, s) => (v(), V(Ur, null, {
      default: H(() => [
        D(Gr, {
          icon: t.confirm.icon,
          title: t.confirm.title
        }, null, 8, ["icon", "title"]),
        D(fi, {
          innerHTML: t.confirm.message
        }, null, 8, ["innerHTML"]),
        D(Rl, null, {
          default: H(() => [
            D(qr),
            D(Es, {
              label: c(e)("flux.cancel"),
              onClick: s[0] || (s[0] = (i) => t.confirm.onCancel())
            }, null, 8, ["label"]),
            D(jr, {
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
}), nb = /* @__PURE__ */ U({
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
    return (a, l) => (v(), V(Ur, null, {
      default: H(() => [
        D(Gr, {
          icon: t.prompt.icon,
          title: t.prompt.title
        }, null, 8, ["icon", "title"]),
        D(fi, {
          innerHTML: t.prompt.message
        }, null, 8, ["innerHTML"]),
        D(fi, null, {
          default: H(() => [
            D(qn, {
              label: t.prompt.fieldLabel
            }, {
              default: H(() => [
                D(pr, {
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
        D(Rl, null, {
          default: H(() => [
            D(qr),
            D(Es, {
              label: c(n)("flux.cancel"),
              onClick: l[1] || (l[1] = (o) => t.prompt.onCancel())
            }, null, 8, ["label"]),
            D(jr, {
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
}), sb = /* @__PURE__ */ U({
  __name: "FluxOverlayProvider",
  setup(t) {
    const { alerts: e, confirms: n, prompts: s } = gi();
    return (i, r) => (v(), _(de, null, [
      ye("div", {
        class: x(c($t).overlayProvider)
      }, [
        ye("div", {
          class: x(c($t).overlayShade)
        }, null, 2)
      ], 2),
      D(Ki, { size: "medium" }, {
        default: H(() => [
          (v(!0), _(de, null, dt(c(e), (a) => (v(), V(eb, {
            key: a.id,
            alert: a
          }, null, 8, ["alert"]))), 128))
        ]),
        _: 1
      }),
      D(Ki, { size: "medium" }, {
        default: H(() => [
          (v(!0), _(de, null, dt(c(n), (a) => (v(), V(tb, {
            key: a.id,
            confirm: a
          }, null, 8, ["confirm"]))), 128))
        ]),
        _: 1
      }),
      D(Ki, { size: "medium" }, {
        default: H(() => [
          (v(!0), _(de, null, dt(c(s), (a) => (v(), V(nb, {
            key: a.id,
            prompt: a
          }, null, 8, ["prompt"]))), 128))
        ]),
        _: 1
      })
    ], 64));
  }
});
const ib = "progressBar", rb = "progressBarTrack", ab = "progressBarValue", lb = "progressBarValueComplete progressBarValue", ob = "progressBarValueIncomplete progressBarValue", ub = "progressBarTrackIndeterminate progressBarTrack", cb = "progressBarIndeterminate", db = "progressBarInfo", fb = "progressBarProgress", hb = "progressBarStatus", mb = "basePaneStructure";
var wn = { progressBar: ib, progressBarTrack: rb, progressBarValue: ab, progressBarValueComplete: lb, progressBarValueIncomplete: ob, progressBarTrackIndeterminate: ub, progressBarIndeterminate: cb, progressBarInfo: db, progressBarProgress: fb, progressBarStatus: hb, basePaneStructure: mb }, pb = /* @__PURE__ */ U({
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
    return (s, i) => (v(), V(tf, {
      class: x(c(wn).progressBar),
      gap: 6,
      role: "progressbar",
      "aria-valuenow": t.value,
      "aria-valuemax": t.max,
      "aria-valuemin": t.min
    }, {
      default: H(() => [
        ye("div", {
          class: x(t.isIndeterminate ? c(wn).progressBarTrackIndeterminate : c(wn).progressBarTrack)
        }, [
          ye("div", {
            class: x(e.value >= 1 ? c(wn).progressBarValueComplete : c(wn).progressBarValueIncomplete),
            style: it({
              width: `${t.isIndeterminate ? 100 : e.value * 100}%`
            })
          }, null, 6)
        ], 2),
        t.status ? (v(), _("div", {
          key: 0,
          class: x(c(wn).progressBarInfo)
        }, [
          D(c(rl), null, {
            default: H(() => [
              (v(), _("span", {
                key: t.status,
                class: x(c(wn).progressBarStatus)
              }, ge(t.status), 3))
            ]),
            _: 1
          }),
          D(c(rl), null, {
            default: H(() => [
              t.isIndeterminate ? J("", !0) : (v(), _("span", {
                key: 0,
                class: x(c(wn).progressBarProgress)
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
const gb = ["disabled", "max", "min", "step"];
var vb = /* @__PURE__ */ U({
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
      const o = ct(s);
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
    }), (o, u) => (v(), V(hg, {
      class: x(c(ue).quantitySelector),
      "aria-disabled": c(n) ? !0 : void 0
    }, {
      default: H(() => [
        D(Es, {
          class: x(c(ue).quantitySelectorButton),
          disabled: c(n) || e.value <= t.min,
          "icon-leading": "minus",
          tabindex: "-1",
          onClick: r
        }, null, 8, ["class", "disabled"]),
        gl(ye("input", {
          ref: "input",
          "onUpdate:modelValue": u[0] || (u[0] = (d) => e.value = d),
          class: x(c(ue).quantitySelectorInput),
          style: it({
            width: `${i.value}px`
          }),
          disabled: c(n),
          tabindex: "0",
          type: "number",
          max: t.max,
          min: t.min,
          step: t.step
        }, null, 14, gb), [
          [or, e.value]
        ]),
        D(Es, {
          class: x(c(ue).quantitySelectorButton),
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
const { basePane: as } = Hr, yb = `snackbar ${as}`, bb = "action", kb = "progressBar", wb = "progressBarTrack", Sb = "snackbarContent", Ib = "icon", Tb = "spinner", Cb = "snackbarBody", xb = "snackbarMessage", Eb = "snackbarSubMessage", Ab = "snackbarTitle", Fb = "snackbarAction", $b = "snackbarActions", Lb = `snackbarGray snackbar ${as}`, Mb = `snackbarPrimary snackbar ${as}`, Bb = "spinnerEffect", Ob = "spinnerValue", Db = `snackbarDanger snackbar ${as}`, Vb = `snackbarInfo snackbar ${as}`, _b = `snackbarSuccess snackbar ${as}`, Nb = `snackbarWarning snackbar ${as}`, Rb = "snackbars", Pb = "snackbarsEnterActive", zb = "snackbarsLeaveActive", Hb = "snackbarsMove", Wb = "snackbarsEnterFrom", Ub = "snackbarsLeaveTo";
var Ue = { snackbar: yb, action: bb, progressBar: kb, progressBarTrack: wb, snackbarContent: Sb, icon: Ib, spinner: Tb, snackbarBody: Cb, snackbarMessage: xb, snackbarSubMessage: Eb, snackbarTitle: Ab, snackbarAction: Fb, snackbarActions: $b, snackbarGray: Lb, snackbarPrimary: Mb, spinnerEffect: Bb, spinnerValue: Ob, snackbarDanger: Db, snackbarInfo: Vb, snackbarSuccess: _b, snackbarWarning: Nb, snackbars: Rb, snackbarsEnterActive: Pb, snackbarsLeaveActive: zb, snackbarsMove: Hb, snackbarsEnterFrom: Wb, snackbarsLeaveTo: Ub };
const qb = ["onClick"];
var jb = /* @__PURE__ */ U({
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
    bl(() => {
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
    }), De(() => t.isRendered, () => {
      if (t.isRendered) {
        i.value && ur(i.value);
        return;
      }
      let o = s.props;
      o.onAction = a, o.onClose = l, i.value = El(o);
    }, { immediate: !0 }), (o, u) => t.isRendered ? (v(), _("div", {
      key: 0,
      class: x(c(Ct)(
        t.color === "gray" && c(Ue).snackbarGray,
        t.color === "primary" && c(Ue).snackbarPrimary,
        t.color === "danger" && c(Ue).snackbarDanger,
        t.color === "info" && c(Ue).snackbarInfo,
        t.color === "success" && c(Ue).snackbarSuccess,
        t.color === "warning" && c(Ue).snackbarWarning
      ))
    }, [
      ye("div", {
        class: x(c(Ue).snackbarContent)
      }, [
        t.isLoading ? (v(), V(Dn, {
          key: 0,
          size: 18
        })) : t.icon ? (v(), V(st, {
          key: 1,
          size: 18,
          name: t.icon
        }, null, 8, ["name"])) : J("", !0),
        ye("div", {
          class: x(c(Ue).snackbarBody)
        }, [
          t.title ? (v(), _("div", {
            key: 0,
            class: x(c(Ue).snackbarTitle)
          }, ge(t.title), 3)) : J("", !0),
          t.message ? (v(), _("div", {
            key: 1,
            class: x(c(Ue).snackbarMessage)
          }, ge(t.message), 3)) : J("", !0),
          t.progressIndeterminate || t.progressValue ? (v(), V(pb, {
            key: 2,
            "is-indeterminate": t.progressIndeterminate,
            max: t.progressMax,
            min: t.progressMin,
            status: t.progressStatus,
            value: t.progressValue
          }, null, 8, ["is-indeterminate", "max", "min", "status", "value"])) : J("", !0),
          t.subMessage ? (v(), _("div", {
            key: 3,
            class: x(c(Ue).snackbarSubMessage)
          }, ge(t.subMessage), 3)) : J("", !0)
        ], 2)
      ], 2),
      r.value ? (v(), _("div", {
        key: 0,
        class: x(c(Ue).snackbarActions)
      }, [
        (v(!0), _(de, null, dt(t.actions, (d, f) => (v(), _("button", {
          key: f,
          class: x(c(Ue).snackbarAction),
          tabindex: "-1",
          type: "button",
          onClick: (p) => a(f)
        }, [
          ye("span", null, ge(d), 1)
        ], 10, qb))), 128))
      ], 2)) : J("", !0),
      t.isCloseable ? (v(), V(B1, {
        key: 1,
        icon: "xmark",
        onClick: u[0] || (u[0] = (d) => l())
      })) : J("", !0)
    ], 2)) : J("", !0);
  }
}), Gb = /* @__PURE__ */ U({
  __name: "FluxSnackbarProvider",
  setup(t) {
    const { snackbars: e } = gi();
    function n(s) {
      return (i) => s.onAction?.(i);
    }
    return (s, i) => (v(), V(Dc, {
      name: "flux-snackbars",
      tag: "div",
      class: x(c(Ue).snackbars),
      "enter-active-class": c(Ue).snackbarsEnterActive,
      "enter-from-class": c(Ue).snackbarsEnterFrom,
      "leave-active-class": c(Ue).snackbarsLeaveActive,
      "leave-to-class": c(Ue).snackbarsLeaveTo,
      "move-class": c(Ue).snackbarsMove
    }, {
      default: H(() => [
        (v(!0), _(de, null, dt(c(e).toReversed(), (r) => (v(), V(jb, wt({
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
const Zb = "tooltip", Yb = "tooltipAbove tooltip", Kb = "tooltipBelow tooltip", Jb = "tooltipEnd tooltip", Qb = "tooltipStart tooltip";
var zs = { tooltip: Zb, tooltipAbove: Yb, tooltipBelow: Kb, tooltipEnd: Jb, tooltipStart: Qb }, Xb = U(() => {
  const { tooltip: t } = gi(), e = ee(null), n = ee(null), s = Ae(() => c(t) ? c(t).contentSlot?.() ?? [c(t).content] : null), i = Ae(() => !!c(t));
  function r() {
    const a = ct(e), l = c(t);
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
    const { scale: g } = getComputedStyle(a), { top: w, left: S, width: b, height: E } = u.getBoundingClientRect();
    let k = Number(g ?? 1);
    k = isNaN(k) ? 1 : k, h /= k, p /= k, o === "horizontal" ? n.value = ek(w, S, p, h, b, E, d, f) : n.value = tk(w, S, p, h, b, E, d, f);
  }
  return Mn(Qh, {
    calculate: r
  }), De(s, () => requestAnimationFrame(r)), () => ks(dv, {}, {
    default: () => {
      if (!c(i))
        return;
      const a = c(n);
      return ks("div", {
        ref: e,
        class: a ? Ct(
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
function ek(t, e, n, s, i, r, a, l) {
  let o, u, d, f, p, h;
  if (e > innerWidth / 2 ? (o = e - n - a, u = t + r / 2 - s / 2, d = "315deg", f = "100%", p = "50%", h = "start") : (o = e + i + a, u = t + r / 2 - s / 2, d = "135deg", f = "0", p = "50%", h = "end"), u + s > innerHeight - l) {
    const g = Math.min(u, innerHeight - s - l) - u;
    p = `calc(50% - ${g}px)`, u += g;
  }
  if (u < l) {
    const g = Math.max(u, l) - u;
    p = `calc(50% - ${g}px)`, u += g;
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
function tk(t, e, n, s, i, r, a, l) {
  let o, u, d, f, p, h;
  if (t > 300 ? (o = e + i / 2 - n / 2, u = t - s - a, d = "45deg", f = "50%", p = "100%", h = "above") : (o = e + i / 2 - n / 2, u = t + r + a, d = "225deg", f = "50%", p = "0", h = "below"), o + n > innerWidth - l) {
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
    arrowY: p,
    transition: h
  };
}
const nk = "root", sk = "isLocked";
var $a = { root: nk, isLocked: sk };
const ik = ["inert"];
var rk = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "FluxRoot",
  setup(t) {
    const { inertMain: e } = gi();
    return De(e, (n, s, i) => {
      n && (document.body.classList.add($a.isLocked), i(() => document.body.classList.remove($a.isLocked)));
    }, { immediate: !0 }), (n, s) => (v(), _(de, null, [
      ye("div", wt(n.$attrs, {
        class: c($a).root,
        inert: c(e)
      }), [
        re(n.$slots, "default")
      ], 16, ik),
      D(sb),
      D(Gb),
      D(Xb)
    ], 64));
  }
});
let sf;
const Zr = (t) => sf = t, rf = (
  /* istanbul ignore next */
  Symbol()
);
function al(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var ti;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(ti || (ti = {}));
function ak() {
  const t = Fu(!0), e = t.run(() => ee({}));
  let n = [], s = [];
  const i = ml({
    install(r) {
      Zr(i), i._a = r, r.provide(rf, i), r.config.globalProperties.$pinia = i, s.forEach((a) => n.push(a)), s = [];
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
const af = () => {
};
function yu(t, e, n, s = af) {
  t.add(e);
  const i = () => {
    t.delete(e) && s();
  };
  return !n && $u() && Lu(i), i;
}
function fs(t, ...e) {
  t.forEach((n) => {
    n(...e);
  });
}
const lk = (t) => t(), bu = Symbol(), La = Symbol();
function ll(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((n, s) => t.set(s, n)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const s = e[n], i = t[n];
    al(i) && al(s) && t.hasOwnProperty(n) && !Oe(s) && !qt(s) ? t[n] = ll(i, s) : t[n] = s;
  }
  return t;
}
const ok = (
  /* istanbul ignore next */
  Symbol()
);
function uk(t) {
  return !al(t) || !Object.prototype.hasOwnProperty.call(t, ok);
}
const { assign: In } = Object;
function ck(t) {
  return !!(Oe(t) && t.effect);
}
function dk(t, e, n, s) {
  const { state: i, actions: r, getters: a } = e, l = n.state.value[t];
  let o;
  function u() {
    l || (n.state.value[t] = i ? i() : {});
    const d = zf(n.state.value[t]);
    return In(d, r, Object.keys(a || {}).reduce((f, p) => (f[p] = ml(Ae(() => {
      Zr(n);
      const h = n._s.get(t);
      return a[p].call(h, h);
    })), f), {}));
  }
  return o = lf(t, u, e, n, s, !0), o;
}
function lf(t, e, n = {}, s, i, r) {
  let a;
  const l = In({ actions: {} }, n), o = { deep: !0 };
  let u, d, f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), h;
  const g = s.state.value[t];
  !r && !g && (s.state.value[t] = {}), ee({});
  let w;
  function S($) {
    let M;
    u = d = !1, typeof $ == "function" ? ($(s.state.value[t]), M = {
      type: ti.patchFunction,
      storeId: t,
      events: h
    }) : (ll(s.state.value[t], $), M = {
      type: ti.patchObject,
      payload: $,
      storeId: t,
      events: h
    });
    const Y = w = Symbol();
    Gn().then(() => {
      w === Y && (u = !0);
    }), d = !0, fs(f, M, s.state.value[t]);
  }
  const b = r ? function() {
    const { state: M } = n, Y = M ? M() : {};
    this.$patch((Q) => {
      In(Q, Y);
    });
  } : (
    /* istanbul ignore next */
    af
  );
  function E() {
    a.stop(), f.clear(), p.clear(), s._s.delete(t);
  }
  const k = ($, M = "") => {
    if (bu in $)
      return $[La] = M, $;
    const Y = function() {
      Zr(s);
      const Q = Array.from(arguments), P = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set();
      function fe(be) {
        P.add(be);
      }
      function oe(be) {
        te.add(be);
      }
      fs(p, {
        args: Q,
        name: Y[La],
        store: N,
        after: fe,
        onError: oe
      });
      let Le;
      try {
        Le = $.apply(this && this.$id === t ? this : N, Q);
      } catch (be) {
        throw fs(te, be), be;
      }
      return Le instanceof Promise ? Le.then((be) => (fs(P, be), be)).catch((be) => (fs(te, be), Promise.reject(be))) : (fs(P, Le), Le);
    };
    return Y[bu] = !0, Y[La] = M, Y;
  }, B = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: yu.bind(null, p),
    $patch: S,
    $reset: b,
    $subscribe($, M = {}) {
      const Y = yu(f, $, M.detached, () => Q()), Q = a.run(() => De(() => s.state.value[t], (P) => {
        (M.flush === "sync" ? d : u) && $({
          storeId: t,
          type: ti.direct,
          events: h
        }, P);
      }, In({}, o, M)));
      return Y;
    },
    $dispose: E
  }, N = mn(B);
  s._s.set(t, N);
  const K = (s._a && s._a.runWithContext || lk)(() => s._e.run(() => (a = Fu()).run(() => e({ action: k }))));
  for (const $ in K) {
    const M = K[$];
    if (Oe(M) && !ck(M) || qt(M))
      r || (g && uk(M) && (Oe(M) ? M.value = g[$] : ll(M, g[$])), s.state.value[t][$] = M);
    else if (typeof M == "function") {
      const Y = k(M, $);
      K[$] = Y, l.actions[$] = M;
    }
  }
  return In(N, K), In(me(N), K), Object.defineProperty(N, "$state", {
    get: () => s.state.value[t],
    set: ($) => {
      S((M) => {
        In(M, $);
      });
    }
  }), s._p.forEach(($) => {
    In(N, a.run(() => $({
      store: N,
      app: s._a,
      pinia: s,
      options: l
    })));
  }), g && r && n.hydrate && n.hydrate(N.$state, g), u = !0, d = !0, N;
}
// @__NO_SIDE_EFFECTS__
function fk(t, e, n) {
  let s;
  const i = typeof e == "function";
  s = i ? n : e;
  function r(a, l) {
    const o = ah();
    return a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    a || (o ? an(rf, null) : null), a && Zr(a), a = sf, a._s.has(t) || (i ? lf(t, e, s, a) : dk(t, s, a)), a._s.get(t);
  }
  return r.$id = t, r;
}
function hk(t) {
  const e = me(t), n = {};
  for (const s in e) {
    const i = e[s];
    i.effect ? n[s] = // ...
    Ae({
      get: () => t[s],
      set(r) {
        t[s] = r;
      }
    }) : (Oe(i) || qt(i)) && (n[s] = // ---
    cn(t, s));
  }
  return n;
}
function ls() {
  return (t) => Homey.__(t) ?? t;
}
function mk(t, e) {
  const n = /* @__PURE__ */ fk(t, e);
  return () => {
    const s = n(), i = Object.getOwnPropertyNames(s), r = hk(s), a = {};
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
var of = mk("list", () => {
  const t = ee([]), e = ee(!0), n = ee([]), s = ee(null), i = ee([]), r = Ae(() => {
    const w = Object.groupBy(c(n), (b) => b.category ?? "__other__"), S = Object.entries(w).sort(([b], [E]) => b === "__other__" ? 1 : E === "__other__" ? -1 : b.localeCompare(E));
    return Object.fromEntries(S);
  }), a = Ae(() => c(n).length > 0);
  async function l(w, S, b) {
    const E = c(n).findIndex((k) => k.id === S.id);
    E !== -1 && (n.value[E].checked = b, b ? await Homey.api("POST", `/${w}/items/${S.id}/checked`) : await Homey.api("POST", `/${w}/items/${S.id}/unchecked`));
  }
  async function o(w, S, b) {
    const E = c(n).findIndex((k) => k.id === S.id);
    E === -1 || S.quantity === void 0 || (n.value[E].quantity = b === "increase" ? S.quantity + 1 : S.quantity - 1, await Homey.api("POST", `/${w}/items/${S.id}/quantity`, {
      quantity: b === "increase" ? 1 : -1
    }));
  }
  async function u(w) {
    e.value = !0, t.value = await Homey.api("GET", `/${w}/categories`), e.value = !1;
  }
  async function d(w) {
    e.value = !0, await g(
      await Homey.api("GET", `/${w}/items`)
    ), e.value = !1;
  }
  async function f(w) {
    e.value = !0, s.value = await Homey.api("GET", `/${w}`), e.value = !1;
  }
  async function p(w) {
    e.value = !0, i.value = await Homey.api("GET", `/${w}/persons`), e.value = !1;
  }
  async function h(w, S) {
    const b = c(n).findIndex((E) => E.id === S.id);
    b !== -1 && (n.value.splice(b, 1), await Homey.api("DELETE", `/${w}/items/${S.id}`));
  }
  async function g(w) {
    n.value = w;
  }
  return {
    categories: An(t),
    isLoading: An(e),
    items: An(n),
    look: An(s),
    persons: An(i),
    categorizedItems: r,
    hasItems: a,
    changeChecked: l,
    changeQuantity: o,
    loadCategories: u,
    loadItems: d,
    loadLook: f,
    loadPersons: p,
    removeItem: h,
    setItems: g
  };
}), pk = /* @__PURE__ */ U({
  __name: "ListAdd",
  props: {
    deviceId: {},
    type: {}
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, s = ls(), {
      categories: i,
      persons: r,
      loadCategories: a,
      loadItems: l,
      loadPersons: o
    } = of(), u = mn({
      category: "",
      content: "",
      person: null,
      due: null,
      quantity: 1
    }), d = Ae(() => u.content.trim().length > 2), f = Ae(() => c(i).map((S) => ({
      label: s(`grocery.category.${S.category}`),
      icon: S.icon,
      value: S.category
    }))), p = Ae(() => [
      { value: null, label: s("widget.list.add.anyone") },
      ...c(r).map((S) => ({
        label: S.name,
        imageSrc: S.image,
        value: S.id
      }))
    ]), h = Ae(() => {
      switch (t.type) {
        case "note":
          return s("widget.list.add.title.note");
        case "product":
          return s("widget.list.add.title.product");
        case "task":
          return s("widget.list.add.title.task");
      }
    });
    gn(async () => {
      await Promise.allSettled([
        a(t.deviceId),
        o(t.deviceId)
      ]);
    });
    async function g() {
      n("close");
    }
    async function w() {
      await Homey.api("POST", `/${t.deviceId}/items`, {
        type: t.type,
        category: u.category,
        content: u.content,
        personId: u.person,
        due: u.due,
        quantity: u.quantity
      }), await l(t.deviceId), await g();
    }
    return (S, b) => (v(), V(c(Ur), { style: { "max-height": "calc(100dvh - 30px)", width: "calc(100dvw - 30px)", "overflow-x": "hidden" } }, {
      default: H(() => [
        D(c(Gr), { title: h.value }, null, 8, ["title"]),
        D(c(fi), null, {
          default: H(() => [
            D(c(Z4), null, {
              default: H(() => [
                D(c(j4), null, {
                  default: H(() => [
                    t.type === "product" ? (v(), _(de, { key: 0 }, [
                      D(c(qn), {
                        label: c(s)("widget.list.add.product")
                      }, {
                        default: H(() => [
                          D(c(pr), {
                            modelValue: u.content,
                            "onUpdate:modelValue": b[0] || (b[0] = (E) => u.content = E)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      D(c(qn), {
                        "is-optional": "",
                        label: c(s)("widget.list.add.category")
                      }, {
                        default: H(() => [
                          D(c(vu), {
                            modelValue: u.category,
                            "onUpdate:modelValue": b[1] || (b[1] = (E) => u.category = E),
                            options: f.value
                          }, null, 8, ["modelValue", "options"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      D(c(qn), {
                        label: c(s)("widget.list.add.quantity")
                      }, {
                        default: H(() => [
                          D(c(vb), {
                            modelValue: u.quantity,
                            "onUpdate:modelValue": b[2] || (b[2] = (E) => u.quantity = E),
                            min: 1,
                            step: 1,
                            style: { "align-self": "start" }
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ], 64)) : (v(), V(c(qn), {
                      key: 1,
                      label: c(s)("widget.list.add.content")
                    }, {
                      default: H(() => [
                        D(c(J4), {
                          modelValue: u.content,
                          "onUpdate:modelValue": b[3] || (b[3] = (E) => u.content = E),
                          rows: 2
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])),
                    t.type === "task" ? (v(), V(c(qn), {
                      key: 2,
                      "is-optional": "",
                      label: c(s)("widget.list.add.person")
                    }, {
                      default: H(() => [
                        D(c(vu), {
                          modelValue: u.person,
                          "onUpdate:modelValue": b[4] || (b[4] = (E) => u.person = E),
                          options: p.value
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["label"])) : J("", !0),
                    t.type === "task" ? (v(), V(c(qn), {
                      key: 3,
                      "is-optional": "",
                      label: c(s)("widget.list.add.due")
                    }, {
                      default: H(() => [
                        D(c(Y4), null, {
                          default: H(() => [
                            D(c(pr), {
                              modelValue: u.due,
                              "onUpdate:modelValue": b[5] || (b[5] = (E) => u.due = E),
                              type: "datetime-local"
                            }, null, 8, ["modelValue"]),
                            D(c(Es), {
                              "icon-leading": "trash",
                              onClick: b[6] || (b[6] = (E) => u.due = null)
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["label"])) : J("", !0),
                    D(c(Qg), { style: { width: "100%" } }, {
                      default: H(() => [
                        D(c(Es), {
                          label: c(s)("widget.list.add.cancel"),
                          style: { "flex-grow": "1" },
                          onClick: b[7] || (b[7] = (E) => g())
                        }, null, 8, ["label"]),
                        D(c(jr), {
                          disabled: !d.value,
                          label: c(s)("widget.list.add.submit"),
                          style: { "flex-grow": "1" },
                          onClick: b[8] || (b[8] = (E) => w())
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
    return (i, r) => (v(), _("button", {
      class: "homey-button-primary-full",
      type: "button",
      onClick: s
    }, ge(t.label), 1));
  }
}), h8 = /* @__PURE__ */ U({
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
    return (i, r) => (v(), _("button", {
      class: "homey-button-transparent",
      type: "button",
      onClick: s
    }, ge(t.label), 1));
  }
});
const Pl = Symbol(), zl = Symbol(), gk = ["title", "onClick"];
var vk = /* @__PURE__ */ U({
  __name: "ColorPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = fn(t, "modelValue"), n = ls(), s = an(Pl);
    return (i, r) => (v(), _("div", {
      class: x(i.$style.colorSelect)
    }, [
      (v(!0), _(de, null, dt(c(s), (a) => (v(), _("div", {
        class: x(e.value === a.hex ? i.$style.colorSelectItemActive : i.$style.colorSelectItem),
        style: it({ "--color": a.hex }),
        title: c(n)(a.label),
        onClick: (l) => e.value = a.hex
      }, null, 14, gk))), 256))
    ], 2));
  }
});
const yk = "colorSelect", bk = "colorSelectItem", kk = "colorSelectItemActive colorSelectItem";
var wk = { colorSelect: yk, colorSelectItem: bk, colorSelectItemActive: kk }, He = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, i] of e)
    n[s] = i;
  return n;
};
const Sk = {
  $style: wk
};
var cf = /* @__PURE__ */ He(vk, [["__cssModules", Sk]]);
const Ik = { class: "homey-form" };
var df = /* @__PURE__ */ U({
  __name: "Form",
  setup(t) {
    return (e, n) => (v(), _("form", Ik, [
      re(e.$slots, "default")
    ]));
  }
});
const Tk = { class: "homey-form-fieldset" }, Ck = { class: "homey-form-legend" }, xk = {
  key: 0,
  class: "homey-form-group",
  style: { "margin-top": "6px" }
}, Ek = {
  key: 1,
  class: "homey-form-group"
}, Ak = { class: "homey-form-group" };
var ni = /* @__PURE__ */ U({
  __name: "FormGroup",
  props: {
    description: {},
    title: {}
  },
  setup(t) {
    return (e, n) => (v(), _("fieldset", Tk, [
      ye("legend", Ck, ge(t.title), 1),
      t.description ? (v(), _("div", xk, ge(t.description), 1)) : J("", !0),
      e.$slots.before ? (v(), _("div", Ek, [
        re(e.$slots, "before")
      ])) : J("", !0),
      ye("div", Ak, [
        re(e.$slots, "default")
      ])
    ]));
  }
});
const Fk = ["for"], $k = ["disabled", "id", "type"];
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
    const e = fn(t, "modelValue"), n = yl();
    return (s, i) => (v(), _(de, null, [
      t.label ? (v(), _("label", {
        key: 0,
        class: "homey-form-label",
        for: c(n)
      }, ge(t.label), 9, Fk)) : J("", !0),
      gl(ye("input", {
        class: "homey-form-input",
        disabled: t.disabled,
        id: c(n),
        type: t.type,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.value = r)
      }, null, 8, $k), [
        [Uh, e.value]
      ])
    ], 64));
  }
}), Lk = /* @__PURE__ */ U({
  __name: "Icon",
  props: {
    icon: {}
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(e.$style.uiIcon),
      "data-icon": "",
      style: it({
        "--icon": JSON.stringify(t.icon),
        "--icon-secondary": JSON.stringify(t.icon + t.icon)
      })
    }, null, 6));
  }
});
const Mk = "uiIcon";
var Bk = { uiIcon: Mk };
const Ok = {
  $style: Bk
};
var es = /* @__PURE__ */ He(Lk, [["__cssModules", Ok]]), Dk = /* @__PURE__ */ U({
  __name: "IconPicker",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const e = fn(t, "modelValue"), n = ls(), s = an(zl), i = ee(""), r = Ae(() => {
      const a = c(i).toLowerCase().trim();
      return c(s).filter((l) => a.length > 0 && l.name.toLowerCase().includes(a) || a.length === 0 && l.unicode === c(e)).slice(0, 54);
    });
    return (a, l) => (v(), _(de, null, [
      D(ff, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (o) => i.value = o),
        label: c(n)("element.search_icon"),
        type: "text"
      }, null, 8, ["modelValue", "label"]),
      ye("div", {
        class: x(a.$style.iconSelect)
      }, [
        (v(!0), _(de, null, dt(r.value, (o) => (v(), V(es, {
          class: x(e.value === o.unicode ? a.$style.iconSelectItemActive : a.$style.iconSelectItem),
          icon: o.unicode,
          title: o.name,
          onClick: (u) => e.value = o.unicode
        }, null, 8, ["class", "icon", "title", "onClick"]))), 256))
      ], 2)
    ], 64));
  }
});
const Vk = "iconSelect", _k = "iconSelectItem", Nk = "iconSelectItemActive iconSelectItem";
var Rk = { iconSelect: Vk, iconSelectItem: _k, iconSelectItemActive: Nk };
const Pk = {
  $style: Rk
};
var hf = /* @__PURE__ */ He(Dk, [["__cssModules", Pk]]), m8 = /* @__PURE__ */ U({
  __name: "ScrollContainer",
  props: {
    tag: { default: "div" }
  },
  setup(t) {
    const e = ee(null), n = ee(!1), s = ee(0), i = ee(0), r = ee(0), a = ee([]), l = ee(0), o = ee(0);
    let u = null;
    is(() => {
      f();
    });
    function d(E, k) {
      const z = (1 - 1 / (Math.abs(E) * 0.55 / k + 1)) * k;
      return Math.sign(E) * z;
    }
    function f() {
      u && (cancelAnimationFrame(u), u = null);
    }
    function p() {
      const E = c(a);
      if (E.length === 0)
        return 0;
      let k = 0, B = 0;
      for (let N = 0; N < E.length; N++) {
        const z = N + 1;
        B += E[N] * z, k += z;
      }
      return B / k;
    }
    function h() {
      const E = c(e);
      if (!E)
        return;
      const k = c(r), B = E.clientHeight, N = d(k, B), z = Math.min(400, Math.max(200, Math.abs(N) * 3));
      E.style.transition = `transform ${z}ms cubic-bezier(0.25, 0.1, 0.25, 1)`, E.style.transform = "translateY(0)", r.value = 0;
    }
    function g(E) {
      const k = c(e);
      if (!k)
        return;
      const B = k.clientHeight;
      let N = E, z = performance.now();
      function K($) {
        const M = Math.min(($ - z) / 16.67, 2);
        z = $;
        const Y = k.scrollHeight - k.clientHeight;
        N *= Math.pow(0.95, M);
        const P = k.scrollTop + N * M;
        if (P < 0) {
          k.scrollTop = 0;
          const te = Math.min(B * 0.3, Math.abs(N) * 8);
          r.value = te;
          const fe = d(te, B);
          k.style.transform = `translateY(${fe}px)`, requestAnimationFrame(() => h());
        } else if (P > Y) {
          k.scrollTop = Y;
          const te = -Math.min(B * 0.3, Math.abs(N) * 8);
          r.value = te;
          const fe = d(te, B);
          k.style.transform = `translateY(${fe}px)`, requestAnimationFrame(() => h());
        } else
          k.scrollTop = P, Math.abs(N) > 0.1 && (u = requestAnimationFrame(K));
      }
      u = requestAnimationFrame(K);
    }
    function w(E) {
      f();
      const k = c(e);
      if (!k)
        return;
      const B = E.touches[0];
      s.value = B.clientY, n.value = !0, l.value = B.clientY, o.value = Date.now(), a.value = [], i.value = k.scrollTop, k.style.transition = "none", r.value === 0 && (k.style.transform = "translateY(0)"), E.preventDefault();
    }
    function S(E) {
      if (!c(n))
        return;
      const k = c(e);
      if (!k)
        return;
      const B = E.touches[0], N = Date.now(), z = N - c(o);
      if (z > 0 && z < 100) {
        const P = (c(l) - B.clientY) / z * 16;
        a.value.push(P), a.value.length > 5 && a.value.shift();
      }
      l.value = B.clientY, o.value = N;
      const K = c(s) - B.clientY, $ = k.scrollHeight - k.clientHeight, M = c(i) + K, Y = k.clientHeight;
      if (M < 0) {
        k.scrollTop = 0;
        const Q = -M;
        r.value = Q;
        const P = d(Q, Y);
        k.style.transform = `translateY(${P}px)`;
      } else if (M > $) {
        k.scrollTop = $;
        const Q = -(M - $);
        r.value = Q;
        const P = d(Q, Y);
        k.style.transform = `translateY(${P}px)`;
      } else
        k.scrollTop = M, r.value = 0, k.style.transform = "translateY(0)";
      E.preventDefault();
    }
    function b(E) {
      if (!n.value)
        return;
      const k = e.value, B = p(), N = r.value !== 0;
      n.value = !1, k && N ? h() : k && Math.abs(B) > 0.5 && g(B), E.preventDefault();
    }
    return (E, k) => (v(), V(kl(t.tag), {
      ref_key: "containerRef",
      ref: e,
      onTouchstart: w,
      onTouchmove: S,
      onTouchend: b,
      onTouchcancel: b
    }, {
      default: H(() => [
        re(E.$slots, "default")
      ]),
      _: 3
    }, 544));
  }
}), zk = /* @__PURE__ */ U({
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
    return (r, a) => (v(), _("div", {
      class: x(r.$style.listHeader)
    }, [
      D(c(es), {
        class: x(r.$style.listHeaderIcon),
        icon: t.icon,
        style: it({
          "--color": t.color
        })
      }, null, 8, ["class", "icon", "style"]),
      ye("div", {
        class: x(["homey-text-bold", r.$style.listHeaderName])
      }, ge(t.name), 3),
      ye("button", {
        class: x(r.$style.listHeaderAdd),
        onClick: a[0] || (a[0] = (l) => i())
      }, [
        D(c(es), {
          class: x(r.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2),
      ye("button", {
        class: x(r.$style.listHeaderAdd),
        onClick: a[1] || (a[1] = (l) => s())
      }, [
        D(c(es), {
          class: x(r.$style.listHeaderAddIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 2)
    ], 2));
  }
});
const Hk = "listHeader", Wk = "listHeaderIcon", Uk = "listHeaderName", qk = "listHeaderAdd", jk = "listHeaderAddIcon";
var Gk = { listHeader: Hk, listHeaderIcon: Wk, listHeaderName: Uk, listHeaderAdd: qk, listHeaderAddIcon: jk };
const Zk = {
  $style: Gk
};
var Yk = /* @__PURE__ */ He(zk, [["__cssModules", Zk]]), Kk = /* @__PURE__ */ U({
  __name: "ListLoading",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(e.$style.listLoading)
    }, [
      D(c(Dn))
    ], 2));
  }
});
const Jk = "listLoading";
var Qk = { listLoading: Jk };
const Xk = {
  $style: Qk
};
var e3 = /* @__PURE__ */ He(Kk, [["__cssModules", Xk]]), t3 = /* @__PURE__ */ U({
  __name: "ListItemCategory",
  props: {
    icon: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(e.$style.listItemCategory)
    }, [
      t.icon ? (v(), V(c(st), {
        key: 0,
        class: x(e.$style.listItemCategoryIcon),
        name: t.icon,
        size: 14
      }, null, 8, ["class", "name"])) : J("", !0),
      ye("span", null, ge(t.name), 1)
    ], 2));
  }
});
const n3 = "listItemCategory";
var s3 = { listItemCategory: n3 };
const i3 = {
  $style: s3
};
var ku = /* @__PURE__ */ He(t3, [["__cssModules", i3]]);
const r3 = ["aria-checked"];
var a3 = /* @__PURE__ */ U({
  __name: "ListItem",
  props: {
    completable: { type: Boolean },
    direction: { default: "vertical" },
    icon: {},
    item: {},
    tappable: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      "aria-checked": t.item ? "checked" in t.item && t.item.checked ? "true" : "false" : void 0,
      class: x([
        t.direction === "horizontal" ? e.$style.listItemHorizontal : e.$style.listItemVertical,
        t.completable && e.$style.isCompletable,
        t.tappable && e.$style.isTappable
      ])
    }, [
      D(ss, {
        mode: "out-in",
        name: "check"
      }, {
        default: H(() => [
          (v(), V(c(es), {
            key: t.icon,
            class: x(e.$style.listItemIcon),
            icon: t.icon
          }, null, 8, ["class", "icon"]))
        ]),
        _: 1
      }),
      ye("div", {
        class: x(e.$style.listItemBody)
      }, [
        re(e.$slots, "default")
      ], 2)
    ], 10, r3));
  }
});
const l3 = "listItem", o3 = "isTappable", u3 = "listItemBody", c3 = "listItemIcon", d3 = "listItemHorizontal listItem", f3 = "listItemVertical listItem", h3 = "isCompletable";
var m3 = { listItem: l3, isTappable: o3, listItemBody: u3, listItemIcon: c3, listItemHorizontal: d3, listItemVertical: f3, isCompletable: h3 };
const p3 = {
  $style: m3
};
var Yr = /* @__PURE__ */ He(a3, [["__cssModules", p3]]), g3 = /* @__PURE__ */ U({
  __name: "ListItemContent",
  props: {
    grow: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(t.grow ? e.$style.listItemContentGrow : e.$style.listItemContent),
      "data-content": ""
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const v3 = "listItemContent", y3 = "listItemContentGrow listItemContent";
var b3 = { listItemContent: v3, listItemContentGrow: y3 };
const k3 = {
  $style: b3
};
var Kr = /* @__PURE__ */ He(g3, [["__cssModules", k3]]), w3 = /* @__PURE__ */ U({
  __name: "ListItemEmpty",
  setup(t) {
    const e = ls();
    return (n, s) => (v(), V(Yr, {
      class: x(n.$style.listItemEmpty),
      icon: ""
    }, {
      default: H(() => [
        D(Kr, null, {
          default: H(() => [
            mi(ge(c(e)("widget.list.no_items")), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const S3 = "listItemEmpty";
var I3 = { listItemEmpty: S3 };
const T3 = {
  $style: I3
};
var C3 = /* @__PURE__ */ He(w3, [["__cssModules", T3]]), x3 = /* @__PURE__ */ U({
  __name: "ListItemMount",
  props: {
    longPressDuration: { default: 500 }
  },
  emits: ["longPress", "remove", "tap"],
  setup(t, { emit: e }) {
    const n = e, s = ee(!1), i = ee(!1), r = ee(0), a = ee(0), l = ee(0), o = ee(0), u = ee(!0), d = ee(!1), f = ee(null), p = ee(!1), h = Ae(() => {
      if (!s.value)
        return i.value ? -90 : 0;
      const k = r.value - l.value;
      return -Math.max(0, Math.min(90, k));
    });
    function g() {
      c(f) && (clearTimeout(c(f)), f.value = null);
    }
    function w() {
      i.value = !1, n("remove");
    }
    function S(k) {
      if (c(i))
        return;
      const B = k.touches[0];
      r.value = B.clientX, a.value = B.clientY, l.value = B.clientX, o.value = B.clientY, s.value = !0, u.value = !0, p.value = !1, d.value = k.target.closest("[data-interactive]") !== null, g(), f.value = setTimeout(() => {
        c(u) && !c(d) && (p.value = !0, n("longPress"));
      }, t.longPressDuration);
    }
    function b(k) {
      if (!c(s))
        return;
      const B = k.touches[0];
      l.value = B.clientX, o.value = B.clientY;
      const N = Math.abs(l.value - r.value), z = Math.abs(o.value - a.value);
      (N > 10 || z > 10) && (u.value = !1, g()), N > z && N > 5 && k.preventDefault();
    }
    function E(k) {
      if (g(), c(i)) {
        setTimeout(() => i.value = !1, 50), k.stopPropagation();
        return;
      }
      if (!c(s))
        return;
      s.value = !1;
      const B = r.value - l.value;
      if (c(u) && !c(d) && !c(p)) {
        n("tap");
        return;
      }
      i.value = B > 45;
    }
    return De(i, (k, B, N) => {
      if (!k)
        return;
      const z = setTimeout(() => {
        i.value = !1;
      }, 3e3);
      N(() => clearTimeout(z));
    }), (k, B) => (v(), _("div", {
      class: x([
        k.$style.listItemMount,
        s.value && k.$style.isDragging,
        i.value && k.$style.isOpen
      ]),
      style: it({
        "--x": h.value + "px"
      })
    }, [
      ye("div", {
        class: x(k.$style.listItemMountBody),
        onTouchstart: S,
        onTouchmove: b,
        onTouchend: E,
        onTouchcancel: E
      }, [
        re(k.$slots, "default")
      ], 34),
      ye("div", {
        class: x(k.$style.listItemMountRemove),
        onClick: B[0] || (B[0] = (N) => w()),
        onTouchend: B[1] || (B[1] = xl((N) => w(), ["stop", "prevent"]))
      }, [
        D(c(es), {
          class: x(k.$style.listItemMountRemoveIcon),
          icon: ""
        }, null, 8, ["class"])
      ], 34)
    ], 6));
  }
});
const E3 = "listItemMount", A3 = "listItemMountBody", F3 = "listItemMountRemove", $3 = "isDragging", L3 = "isOpen", M3 = "listItemMountRemoveIcon";
var B3 = { listItemMount: E3, listItemMountBody: A3, listItemMountRemove: F3, isDragging: $3, isOpen: L3, listItemMountRemoveIcon: M3 };
const O3 = {
  $style: B3
};
var D3 = /* @__PURE__ */ He(x3, [["__cssModules", O3]]), V3 = /* @__PURE__ */ U({
  __name: "ListItems",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(e.$style.listItems)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const _3 = "listItems";
var N3 = { listItems: _3 };
const R3 = {
  $style: N3
};
var wu = /* @__PURE__ */ He(V3, [["__cssModules", R3]]), P3 = /* @__PURE__ */ U({
  __name: "ListItemNote",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (v(), V(Yr, {
      class: x(e.$style.listItemNote),
      icon: "",
      item: t.item
    }, {
      default: H(() => [
        D(Kr, null, {
          default: H(() => [
            mi(ge(t.item.content), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class", "item"]));
  }
});
const z3 = "listItemNote";
var H3 = { listItemNote: z3 };
const W3 = {
  $style: H3
};
var U3 = /* @__PURE__ */ He(P3, [["__cssModules", W3]]), q3 = /* @__PURE__ */ U({
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
    return (i, r) => (v(), _("button", {
      class: x(i.$style.listItemButton),
      "data-interactive": "",
      onTouchend: xl(s, ["stop", "prevent"])
    }, [
      D(c(es), {
        class: x(i.$style.listItemButtonIcon),
        icon: t.icon
      }, null, 8, ["class", "icon"])
    ], 34));
  }
});
const j3 = "listItemButton", G3 = "listItemButtonIcon";
var Z3 = { listItemButton: j3, listItemButtonIcon: G3 };
const Y3 = {
  $style: Z3
};
var Su = /* @__PURE__ */ He(q3, [["__cssModules", Y3]]), K3 = /* @__PURE__ */ U({
  __name: "ListItemButtons",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(e.$style.listItemButtons)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const J3 = "listItemButtons";
var Q3 = { listItemButtons: J3 };
const X3 = {
  $style: Q3
};
var e6 = /* @__PURE__ */ He(K3, [["__cssModules", X3]]), t6 = /* @__PURE__ */ U({
  __name: "ListItemQuantity",
  props: {
    quantity: {}
  },
  setup(t) {
    const e = new Intl.NumberFormat(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }), n = Ae(() => e.format(t.quantity));
    return (s, i) => (v(), _("div", {
      class: x(s.$style.listItemQuantity)
    }, ge(n.value) + "x ", 3));
  }
});
const n6 = "listItemQuantity";
var s6 = { listItemQuantity: n6 };
const i6 = {
  $style: s6
};
var r6 = /* @__PURE__ */ He(t6, [["__cssModules", i6]]), a6 = /* @__PURE__ */ U({
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
    return (r, a) => (v(), V(Yr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item,
      direction: "horizontal"
    }, {
      default: H(() => [
        D(Kr, null, {
          default: H(() => [
            mi(ge(t.item.content), 1)
          ]),
          _: 1
        }),
        D(ss, { name: "check" }, {
          default: H(() => [
            t.item.quantity && t.item.quantity > 1 ? (v(), V(r6, {
              key: 0,
              quantity: t.item.quantity
            }, null, 8, ["quantity"])) : J("", !0)
          ]),
          _: 1
        }),
        D(c(qr)),
        D(ss, { name: "check" }, {
          default: H(() => [
            t.item.checked ? J("", !0) : (v(), V(e6, { key: 0 }, {
              default: H(() => [
                t.item.quantity && t.item.quantity > 1 ? (v(), V(Su, {
                  key: 0,
                  icon: "",
                  onTap: a[0] || (a[0] = (l) => s())
                })) : J("", !0),
                D(Su, {
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
}), l6 = /* @__PURE__ */ U({
  __name: "ListItemFooter",
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(e.$style.listItemFooter)
    }, [
      re(e.$slots, "default")
    ], 2));
  }
});
const o6 = "listItemFooter";
var u6 = { listItemFooter: o6 };
const c6 = {
  $style: u6
};
var d6 = /* @__PURE__ */ He(l6, [["__cssModules", c6]]);
const f6 = ["src", "alt"];
var h6 = /* @__PURE__ */ U({
  __name: "ListItemPerson",
  props: {
    image: {},
    name: {}
  },
  setup(t) {
    return (e, n) => (v(), _("div", {
      class: x(e.$style.listItemPerson)
    }, [
      t.image ? (v(), _("img", {
        key: 0,
        class: x(e.$style.listItemPersonImage),
        src: t.image,
        alt: t.name
      }, null, 10, f6)) : J("", !0),
      ye("span", null, ge(t.name), 1)
    ], 2));
  }
});
const m6 = "listItemPerson", p6 = "listItemPersonImage";
var g6 = { listItemPerson: m6, listItemPersonImage: p6 };
const v6 = {
  $style: g6
};
var y6 = /* @__PURE__ */ He(h6, [["__cssModules", v6]]), b6 = /* @__PURE__ */ U({
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
    return (r, a) => (v(), _("div", {
      class: x(r.$style.listItemDate)
    }, ge(i.value), 3));
  }
});
const k6 = "listItemDate";
var w6 = { listItemDate: k6 };
const S6 = {
  $style: w6
};
var I6 = /* @__PURE__ */ He(b6, [["__cssModules", S6]]), T6 = /* @__PURE__ */ U({
  __name: "ListItemTask",
  props: {
    item: {}
  },
  setup(t) {
    return (e, n) => (v(), V(Yr, {
      completable: "",
      tappable: "",
      icon: t.item.checked ? "" : "",
      item: t.item
    }, {
      default: H(() => [
        D(Kr, null, {
          default: H(() => [
            mi(ge(t.item.content), 1)
          ]),
          _: 1
        }),
        t.item.due || t.item.person ? (v(), V(d6, { key: 0 }, {
          default: H(() => [
            t.item.person ? (v(), V(y6, {
              key: 0,
              image: t.item.person.image,
              name: t.item.person.name
            }, null, 8, ["image", "name"])) : J("", !0),
            t.item.due ? (v(), V(I6, {
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
}), C6 = /* @__PURE__ */ U({
  __name: "List",
  props: {
    deviceId: {}
  },
  setup(t) {
    const e = ls(), {
      categories: n,
      categorizedItems: s,
      hasItems: i,
      isLoading: r,
      look: a,
      changeChecked: l,
      changeQuantity: o,
      loadCategories: u,
      loadItems: d,
      loadLook: f,
      removeItem: p,
      setItems: h
    } = of(), g = ee(null);
    async function w() {
      switch (c(a)?.type) {
        case "grocery_list":
          g.value = "product";
          break;
        case "list":
          g.value = "task";
          break;
      }
    }
    async function S() {
      g.value = "note";
    }
    async function b(k) {
      switch (k.type) {
        case "product":
        case "task":
          await l(t.deviceId, k, !k.checked);
          break;
      }
    }
    async function E() {
      const k = document.querySelector("#app"), { height: B } = k.getBoundingClientRect();
      Homey.setHeight(c(g) ? Math.max(420, B) : B);
    }
    return Homey.on("list-items-changed", async ({ id: k, items: B }) => {
      k === t.deviceId && await h(B);
    }), Homey.on("list-look-changed", async (k) => k === t.deviceId && await f(t.deviceId)), De([g, s], async () => {
      await E();
    }, { flush: "post" }), De(() => t.deviceId, async () => {
      await Promise.allSettled([
        u(t.deviceId),
        f(t.deviceId),
        d(t.deviceId)
      ]);
    }, { immediate: !0 }), (k, B) => (v(), _(de, null, [
      c(a) ? (v(), V(Yk, {
        key: 0,
        color: c(a).color,
        icon: c(a).icon,
        name: c(a).name,
        onAdd: B[0] || (B[0] = (N) => w()),
        onAddNote: B[1] || (B[1] = (N) => S())
      }, null, 8, ["color", "icon", "name"])) : J("", !0),
      D(ss, {
        mode: "out-in",
        name: "check",
        onEnter: B[4] || (B[4] = (N) => E())
      }, {
        default: H(() => [
          c(r) && !c(i) ? (v(), V(e3, { key: 0 })) : c(i) ? (v(), V(wu, { key: 1 }, {
            default: H(() => [
              D(Dc, {
                name: "items",
                onAfterEnter: B[2] || (B[2] = (N) => E()),
                onAfterLeave: B[3] || (B[3] = (N) => E())
              }, {
                default: H(() => [
                  (v(!0), _(de, null, dt(c(s), (N, z, K) => (v(), _(de, { key: z }, [
                    z !== "__other__" ? (v(), V(ku, {
                      key: 0,
                      icon: c(n).find(($) => $.category === z)?.icon,
                      name: c(e)(`grocery.category.${z}`)
                    }, null, 8, ["icon", "name"])) : K > 0 ? (v(), V(ku, {
                      key: 1,
                      name: c(e)("widget.list.other")
                    }, null, 8, ["name"])) : J("", !0),
                    (v(!0), _(de, null, dt(N, ($) => (v(), V(D3, {
                      key: $.id,
                      onLongPress: (M) => b($),
                      onRemove: (M) => c(p)(t.deviceId, $),
                      onTap: (M) => b($)
                    }, {
                      default: H(() => [
                        $.type === "note" ? (v(), V(U3, {
                          key: 0,
                          item: $
                        }, null, 8, ["item"])) : $.type === "product" ? (v(), V(a6, {
                          key: 1,
                          item: $,
                          onDecrease: (M) => c(o)(t.deviceId, $, "decrease"),
                          onIncrease: (M) => c(o)(t.deviceId, $, "increase")
                        }, null, 8, ["item", "onDecrease", "onIncrease"])) : $.type === "task" ? (v(), V(T6, {
                          key: 2,
                          item: $
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
          })) : (v(), V(wu, { key: 2 }, {
            default: H(() => [
              D(C3)
            ]),
            _: 1
          }))
        ]),
        _: 1
      }),
      D(c(Ki), null, {
        default: H(() => [
          g.value ? (v(), V(pk, {
            key: 0,
            "device-id": t.deviceId,
            type: g.value,
            onClose: B[5] || (B[5] = (N) => g.value = null)
          }, null, 8, ["device-id", "type"])) : J("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), x6 = /* @__PURE__ */ U({
  __name: "ListWidget",
  setup(t) {
    const e = ee(null), n = ee(!1);
    return window.addEventListener("homeyReady", () => {
      const s = Homey.getDeviceIds();
      e.value = s[0] ?? null, n.value = !0, Homey.ready();
    }), (s, i) => (v(), V(c(rk), {
      class: x(s.$style.listWidget)
    }, {
      default: H(() => [
        n.value ? (v(), V(C6, {
          key: 0,
          "device-id": e.value
        }, null, 8, ["device-id"])) : J("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const E6 = "listWidget";
var A6 = { listWidget: E6 };
const F6 = {
  $style: A6
};
var $6 = /* @__PURE__ */ He(x6, [["__cssModules", F6]]), L6 = /* @__PURE__ */ U({
  __name: "PairView",
  setup(t) {
    const e = ls(), n = ee([]), s = ee([]), i = mn({
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
    return Mn(Pl, n), Mn(zl, s), (a, l) => (v(), V(c(df), {
      class: x(a.$style.pairView)
    }, {
      default: H(() => [
        D(c(ni), {
          title: c(e)("device.list.pair.name.title"),
          description: c(e)("device.list.pair.name.description")
        }, {
          default: H(() => [
            D(c(ff), {
              modelValue: i.name,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.name = o),
              type: "text"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        D(c(ni), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: H(() => [
            D(c(cf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        D(c(ni), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: H(() => [
            D(c(hf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[2] || (l[2] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        D(c(uf), {
          label: c(e)("device.list.pair.submit"),
          onClick: l[3] || (l[3] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const M6 = "pairView";
var B6 = { pairView: M6 };
const O6 = {
  $style: B6
};
var D6 = /* @__PURE__ */ He(L6, [["__cssModules", O6]]), V6 = /* @__PURE__ */ U({
  __name: "RepairView",
  setup(t) {
    const e = ls(), n = ee([]), s = ee([]), i = mn({
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
    return Mn(Pl, n), Mn(zl, s), (a, l) => (v(), V(c(df), {
      class: x(a.$style.repairView)
    }, {
      default: H(() => [
        D(c(ni), {
          title: c(e)("device.list.pair.color.title"),
          description: c(e)("device.list.pair.color.description")
        }, {
          default: H(() => [
            D(c(cf), {
              modelValue: i.color,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => i.color = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        D(c(ni), {
          title: c(e)("device.list.pair.icon.title"),
          description: c(e)("device.list.pair.icon.description")
        }, {
          default: H(() => [
            D(c(hf), {
              modelValue: i.icon,
              "onUpdate:modelValue": l[1] || (l[1] = (o) => i.icon = o)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["title", "description"]),
        D(c(uf), {
          label: c(e)("device.list.repair.submit"),
          onClick: l[2] || (l[2] = (o) => r())
        }, null, 8, ["label"])
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const _6 = "repairView";
var N6 = { repairView: _6 };
const R6 = {
  $style: N6
};
var P6 = /* @__PURE__ */ He(V6, [["__cssModules", R6]]);
var z6 = {
  prefix: "far",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M0 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 280c-13.3 0-24-10.7-24-24z"]
}, H6 = {
  prefix: "far",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M136.2 4.8c4.7-12.5 16.6-20.8 30-20.8l115.6 0c13.3 0 25.3 8.3 30 20.8L328 48 424 48c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48l96 0 16.2-43.2zm-84.6 448L28.7 144 76.9 144 99.5 449.2c.6 8.4 7.6 14.8 16 14.8l217.1 0c8.4 0 15.3-6.5 16-14.8l22.6-305.2 48.1 0-22.9 308.7c-2.5 33.4-30.3 59.3-63.8 59.3l-217.1 0c-33.5 0-61.3-25.9-63.8-59.3z"]
}, W6 = {
  prefix: "far",
  iconName: "bottle-droplet",
  icon: [320, 512, [], "e4c4", "M96-32c-17.7 0-32 14.3-32 32 0 11.8 6.4 22.2 16 27.7l0 121.7C32.2 177.1 0 228.7 0 288L0 456c0 48.6 39.4 88 88 88l144 0c48.6 0 88-39.4 88-88l0-168c0-59.3-32.2-110.9-80-138.6l0-121.7c9.6-5.5 16-15.9 16-27.7 0-17.7-14.3-32-32-32L96-32zm32 64l64 0 0 132c0 9.4 5.5 18 14.1 21.9 38.9 17.6 65.9 56.7 65.9 102.1l0 168c0 22.1-17.9 40-40 40L88 496c-22.1 0-40-17.9-40-40l0-168c0-45.4 27-84.5 65.9-102.1 8.6-3.9 14.1-12.4 14.1-21.9l0-132zm96 320c0-21.2-28.9-64.5-47.9-90.6-8.1-11.1-24.2-11.1-32.3 0-19 26.1-47.9 69.4-47.9 90.6 0 31.6 28.7 64 64 64s64-32.4 64-64z"]
}, U6 = {
  prefix: "far",
  iconName: "wheat",
  icon: [576, 512, [], "f72d", "M72.5 240c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L297.4 455c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-30.5-30.5-63 63c-9.4 9.4-24.5 9.4-33.9 0-9.4-9.4-9.4-24.6 0-33.9l63-63-30.5-30.5c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zm145 202.9c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM184.5 128c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L409.4 343c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM73.7 299.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L73.7 299.1zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM296.5 16c6.4 0 12.5 2.5 17 7l46.1 46.1c23.4 23.4 33.4 55.4 29.7 86.2 30.8-3.8 62.9 6.3 86.2 29.7L521.4 231c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-7.4 7.4c-40.6 40.6-106.5 40.6-147.1 0l-94.9-94.9c-40.6-40.6-40.6-106.5 0-147.1l7.4-7.4 3.7-3c3.9-2.6 8.5-4 13.3-4zM185.7 187.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4l-27.9-27.9zm255.8 31.8c-18.4-18.4-46.7-21.5-68.5-8.3l27.9 27.9c18.6 18.6 46.9 21.3 68.4 8.3l-27.9-27.9zM297.7 75.1c-13 21.5-10.2 49.9 8.3 68.5l27.9 27.9c13.1-21.8 10.1-50.1-8.3-68.4L297.7 75.1zM544.5-24c6.4 0 12.5 2.5 17 7s7 10.6 7 17l0 35-.1 5.2c-2.6 51.7-44 93.1-95.7 95.7l-5.2 .1-35 0c-6.4 0-12.5-2.5-17-7s-7-10.6-7-17l0-35c0-55.8 45.2-101 101-101l35 0zm-35 48c-29.3 0-53 23.7-53 53l0 11 11 0 5.4-.3c25-2.5 44.8-22.4 47.3-47.3l.3-5.4 0-11-11 0z"]
}, q6 = {
  prefix: "far",
  iconName: "bottle-baby",
  icon: [320, 512, [], "e673", "M124.6 17.7L128 16 128 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 3.4 1.7c17.5 8.8 28.6 26.7 28.6 46.3 17.7 0 32 14.3 32 32l0 48 27.5 45.8c13.4 22.4 20.5 48 20.5 74.1L304 480c0 35.3-28.7 64-64 64L80 544c-35.3 0-64-28.7-64-64l0-216.1c0-26.1 7.1-51.7 20.5-74.1L64 144 64 96c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3zM256 480l0-216.1c0-17.4-4.7-34.5-13.7-49.4l-13.5-22.5-137.6 0-13.5 22.5c-9 14.9-13.7 32-13.7 49.4l0 8.1 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 64 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 48c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z"]
}, j6 = {
  prefix: "far",
  iconName: "bread-loaf",
  icon: [576, 512, [127838], "f7eb", "M152 80l96 0c57.4 0 104 46.6 104 104l0 31c0 3.7-2.5 6.9-6.1 7.8l-7.8 1.9C327.5 227.4 320 237 320 248l0 144c0 22.1-17.9 40-40 40l-160 0c-22.1 0-40-17.9-40-40l0-144c0-11-7.5-20.6-18.2-23.3l-7.8-1.9c-3.6-.9-6.1-4.1-6.1-7.8l0-31C48 126.6 94.6 80 152 80zM120 480l336 0c48.6 0 88-39.4 88-88l0-120.8c18.3-3.7 32-19.8 32-39.2l0-48c0-83.9-68.1-152-152-152L152 32C68.1 32 0 100.1 0 184l0 31c0 21.9 12.8 41.5 32 50.6L32 392c0 48.6 39.4 88 88 88zm336-48l-97.6 0c6.1-12 9.6-25.6 9.6-40l0-120 128 0 0 120c0 22.1-17.9 40-40 40zM399.3 224c.5-2.9 .7-5.9 .7-9l0-31c0-40.2-15.6-76.8-41.1-104L424 80c57.4 0 104 46.6 104 104l0 40-128.7 0z"]
}, G6 = {
  prefix: "far",
  iconName: "carrot",
  icon: [576, 512, [129365], "f787", "M392.4 25.9l6.5 6.5c21.9 21.9 21.9 57.3 0 79.2l-6.5 6.5-6.5-6.5c-21.9-21.9-21.9-57.3 0-79.2l6.5-6.5zm40.4 119.6c21.9-21.9 57.3-21.9 79.2 0l6.5 6.5-6.5 6.5c-21.9 21.9-57.3 21.9-79.2 0l-6.5-6.5 6.5-6.5zm30-64c2.7-29.7-7.3-60.4-30-83.1L420.7-13.7c-15.6-15.6-40.9-15.6-56.6 0L352-1.5c-27 27-36.1 65.2-27.1 99.7-8.2-1.4-16.6-2.1-25.3-2.1-58.3 0-111.3 34.1-135.5 87.2L35.2 466.8c-5.5 12.1-2.9 26.4 6.5 35.9s23.7 12 35.9 6.5L361.1 380.3c53.1-24.1 87.2-77.1 87.2-135.5 0-8.6-.7-17-2.1-25.2 34.5 8.9 72.7-.1 99.7-27.1L558 180.3c15.6-15.6 15.6-40.9 0-56.6l-12.1-12.1c-22.7-22.7-53.4-32.8-83.1-30zM234.3 168c17.9-15.2 40.9-24 65.3-24 55.7 0 100.8 45.1 100.8 100.8 0 39.5-23.1 75.4-59.1 91.8l-89.7 40.8-26.3-26.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L205 398.5 96.6 447.8 205.8 207.4 239.4 241c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-39-39z"]
}, Z6 = {
  prefix: "far",
  iconName: "steak",
  icon: [576, 512, [129385], "f824", "M143.9 240.1l12.8 0c34.4 0 66-18.8 82.4-49.1l45.5-84.1C304.4 70.6 342.3 48 383.6 48 445.7 48 496 98.3 496 160.4L496 288c0 79.5-64.5 144-144 144l-208.1 0C91 432 48 389 48 336.1s43-95.9 95.9-95.9zm12.8-48l-12.8 0C64.4 192.1 0 256.6 0 336.1S64.4 480 143.9 480L352 480c106 0 192-86 192-192l0-127.6C544 71.8 472.2 0 383.6 0 324.7 0 270.5 32.3 242.5 84.1L197 168.2c-8 14.8-23.4 24-40.2 24zm-12.8 96c-26.5 0-47.9 21.5-47.9 47.9S117.5 384 143.9 384L352 384c53 0 96-43 96-96l0-127.6c0-35.6-28.8-64.4-64.4-64.4-23.6 0-45.4 13-56.7 33.8l-45.5 84.1c-24.8 45.8-72.6 74.3-124.6 74.3l-12.8 0zM360 160a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]
}, Y6 = {
  prefix: "far",
  iconName: "bowl-spoon",
  icon: [512, 512, [129379], "e3e0", "M112 128c-42.6 0-64-28.2-64-48s21.4-48 64-48 64 28.2 64 48-21.4 48-64 48zm0 48c52.2 0 96-30.6 108.5-72L488 104c13.3 0 24-10.7 24-24s-10.7-24-24-24L220.5 56C208 14.6 164.2-16 112-16 50.1-16 0 27 0 80s50.1 96 112 96zm64.5 282.9C172 447.1 163 437.6 151.5 432.5 90.4 404.8 48 343.3 48 272l416 0c0 71.3-42.4 132.8-103.5 160.5-11.5 5.2-20.4 14.7-25 26.4-1.2 3.1-4.2 5.1-7.5 5.1l-144 0c-3.3 0-6.3-2-7.5-5.1zM48 224c-26.5 0-48 21.5-48 48 0 90.8 54.1 169 131.7 204.2 8.1 21 28.4 35.8 52.3 35.8l144 0c23.8 0 44.2-14.9 52.3-35.8 77.7-35.2 131.7-113.4 131.7-204.2 0-26.5-21.5-48-48-48L48 224z"]
}, K6 = {
  prefix: "far",
  iconName: "pump-soap",
  icon: [320, 512, [], "e06b", "M128 48l64 0 0 80-64 0 0-80zM80 32l0 96-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-16 0 0-40 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-8c0-17.7-14.3-32-32-32L112 0C94.3 0 80 14.3 80 32zM192 176l64 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l128 0zm32 168c0-32.5-37-80.9-50.9-97.9-3.2-3.9-8.1-6.1-13.1-6.1s-9.9 2.2-13.1 6.1c-13.8 16.9-50.9 65.3-50.9 97.9 0 35.3 28.7 56 64 56s64-20.7 64-56z"]
}, J6 = {
  prefix: "far",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"]
}, Q6 = {
  prefix: "far",
  iconName: "spray-can-sparkles",
  icon: [576, 512, ["air-freshener"], "f5d0", "M160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 80-128 0 0-80zm0 176c-26.5 0-48 21.5-48 48l0 184c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24l0-184c0-26.5-21.5-48-48-48l-128 0zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 184c0 39.8-32.2 72-72 72l-176 0c-39.8 0-72-32.2-72-72l0-184zm160 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM448 48c0 1.4-1 3-2.2 3.6L416 64 403.6 93.8C403 95 401.4 96 400 96s-3-1-3.6-2.2L384 64 354.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L384 32 396.4 2.2C397 1 398.6 0 400 0s3 1 3.6 2.2L416 32 445.8 44.4C447 45 448 46.6 448 48zm76.4 45.8L512 64 482.2 51.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 32 524.4 2.2C525 1 526.6 0 528 0s3 1 3.6 2.2L544 32 573.8 44.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 64 531.6 93.8C531 95 529.4 96 528 96s-3-1-3.6-2.2zm7.2 100.4L544 224 573.8 236.4c1.2 .6 2.2 2.2 2.2 3.6 0 1.4-1 3-2.2 3.6L544 256 531.6 285.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L512 256 482.2 243.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L512 224 524.4 194.2c.6-1.2 2.2-2.2 3.6-2.2s3 1 3.6 2.2zM512 144c0 1.4-1 3-2.2 3.6L480 160 467.6 189.8c-.6 1.2-2.2 2.2-3.6 2.2s-3-1-3.6-2.2L448 160 418.2 147.6c-1.2-.6-2.2-2.2-2.2-3.6 0-1.4 1-3 2.2-3.6L448 128 460.4 98.2C461 97 462.6 96 464 96s3 1 3.6 2.2L480 128 509.8 140.4c1.2 .6 2.2 2.2 2.2 3.6z"]
}, X6 = {
  prefix: "far",
  iconName: "snowflake",
  icon: [512, 512, [10052, 10054], "f2dc", "M280.1-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 78.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l57 57 0 76.5-66.2-38.2-20.9-77.8c-3.4-12.8-16.6-20.4-29.4-17S95.2 98 98.7 110.8l8.4 31.5-67.6-39C28 96.6 13.3 100.5 6.7 112S4 138.2 15.5 144.8l67.6 39-31.5 8.4c-12.8 3.4-20.4 16.6-17 29.4s16.6 20.4 29.4 17l77.8-20.9 66.2 38.2-66.2 38.2-77.8-20.9c-12.8-3.4-26 4.2-29.4 17s4.2 26 17 29.4l31.5 8.4-67.6 39C4 373.8 .1 388.5 6.7 400s21.3 15.4 32.8 8.8l67.6-39-8.4 31.5c-3.4 12.8 4.2 26 17 29.4s26-4.2 29.4-17l20.9-77.8 66.2-38.2 0 76.5-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 78.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-78.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-57-57 0-76.5 66.2 38.2 20.9 77.8c3.4 12.8 16.6 20.4 29.4 17s20.4-16.6 17-29.4l-8.4-31.5 67.6 39c11.5 6.6 26.2 2.7 32.8-8.8s2.7-26.2-8.8-32.8l-67.6-39 31.5-8.4c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17l-77.8 20.9-66.2-38.2 66.2-38.2 77.8 20.9c12.8 3.4 26-4.2 29.4-17s-4.2-26-17-29.4l-31.5-8.4 67.6-39c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-67.6 39 8.4-31.5c3.4-12.8-4.2-26-17-29.4s-26 4.2-29.4 17l-20.9 77.8-66.2 38.2 0-76.5 57-57c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-78.1z"]
}, e8 = {
  prefix: "far",
  iconName: "leaf",
  icon: [512, 512, [], "f06c", "M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9C512 342.1 403.9 448 273.2 448 191.7 448 121.9 392.4 101.8 316.8 68.7 347.4 48 391.3 48 440l0 16c0 13.3-10.7 24-24 24S0 469.2 0 456l0-16c0-75.1 38.3-141.2 96.4-179.9 6.1-91.7 82.4-164.1 175.6-164.1 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3zM464 79.9c-38.3 29.5-102.4 64.1-192 64.1-57.6 0-106.4 38.1-122.4 90.4 20.9-6.8 43.2-10.4 66.4-10.4l80 0c13.3 0 24 10.8 24 24s-10.7 24-24 24l-80 0c-25.4 0-49.4 5.7-71 15.8 7.9 63.1 62.6 112.2 128.2 112.2 104.7 0 190.8-84.9 190.8-189.1l0-131z"]
}, t8 = {
  prefix: "far",
  iconName: "fish",
  icon: [576, 512, [128031], "f578", "M180.8 303.7c9.2 10.4 19.4 20.6 30.7 30.1 33.7 28.5 76 50.2 124.5 50.2s90.8-21.8 124.5-50.2c30.3-25.5 52.7-55.7 65.3-77.8-12.6-22.1-35-52.2-65.3-77.8-33.7-28.5-76-50.2-124.5-50.2s-90.8 21.7-124.5 50.2c-11.3 9.5-21.5 19.7-30.7 30.1-14 15.8-36.7 20.6-56 11.8l-54.3-24.9 21.1 36.9c8.4 14.8 8.4 32.9 0 47.6l-21.1 36.9 54.3-24.9c19.2-8.8 41.9-4 56 11.8zM4.2 336.1L50 256 4.2 175.9c-6.9-12.1-5.2-27.2 4.2-37.5s24.3-13.3 36.9-7.5l99.5 45.6c10.5-11.9 22.5-23.8 35.7-35 39.2-33.1 92-61.5 155.5-61.5s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8 4.7 9.2 4.7 20.1 0 29.3-14.1 27.4-41.9 66.8-81 99.8-39.2 33.1-92 61.5-155.5 61.5s-116.3-28.5-155.5-61.5c-13.2-11.2-25.1-23.1-35.7-35L45.3 381.1c-12.6 5.8-27.6 2.8-36.9-7.5s-11.1-25.4-4.2-37.5zM416 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, n8 = {
  prefix: "far",
  iconName: "olive-branch",
  icon: [640, 512, [], "e317", "M2.7 53.1C13.8 41.6 59 0 128 0 194.9 0 239.4 39.1 252.2 52L306 26.7C343.3 9.1 384 0 425.2 0L616 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L425.2 48c-34.2 0-67.9 7.5-98.8 22.1L191.9 133.4C189.1 219.3 118.6 288 32 288l-16 0c-8.8 0-16-7.2-16-16l0-16C0 194.6 34.5 141.4 85.2 114.5 40.4 102.8 11.3 75.8 2.7 66.9 .9 65 0 62.6 0 60s.9-5 2.7-6.9zM399.4 427c19.3-25.7 32.6-63.3 32.6-107s-13.3-81.3-32.6-107c-19.2-25.7-42.2-37-63.4-37s-44.2 11.4-63.4 37C253.3 238.7 240 276.4 240 320s13.3 81.3 32.6 107c19.2 25.7 42.2 37 63.4 37s44.2-11.4 63.4-37zM336 512c-79.5 0-144-86-144-192s64.5-192 144-192 144 86 144 192-64.5 192-144 192zm129.7-40.2c9.4-13.1 17.6-27.5 24.4-43.1 3.6 .8 7.1 1.5 10.5 2 31.1 4.6 55-3.6 70.2-19.3 15.4-16 23.9-42.1 19.2-76-4.7-33.8-22.2-71.6-53.2-103.7-18-18.7-37.7-32.5-57.2-41.7-4.9-8.8-10.3-17.2-16.2-25-10.5-14-22.7-26.5-36.2-36.9 48.2 1.6 101.3 25.8 144.2 70.3 75 77.8 90.2 188.1 33.9 246.4-34.1 35.4-86.8 43.5-139.6 27z"]
}, s8 = {
  prefix: "far",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M209.5 369c-9.4 9.4-24.6 9.4-33.9 0L15.5 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l143 143 143-143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-160 160z"]
}, i8 = {
  prefix: "far",
  iconName: "can-food",
  icon: [384, 512, [129387], "e3e6", "M320 434.3c-3.4 3-10.2 7.5-21.7 12.2-24.8 10.1-62.3 17.5-106.3 17.5s-81.5-7.4-106.3-17.5c-11.5-4.7-18.3-9.2-21.7-12.2l0-144.8c14.2 6.2 31 11.3 49.7 15.1 7.6 36.3 39.8 63.5 78.3 63.5s70.7-27.2 78.3-63.5c18.7-3.8 35.5-8.9 49.7-15.1l0 144.8zm48 5.7l0-368c0-39.8-78.8-72-176-72S16 32.2 16 72l0 368c0 39.8 78.8 72 176 72s176-32.2 176-72zM304 72c0 13.3-50.1 24-112 24S80 85.3 80 72 130.1 48 192 48 304 58.7 304 72zM192 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, r8 = {
  prefix: "far",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M248 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176-176 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0 0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176 176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0 0-176z"]
}, a8 = {
  prefix: "far",
  iconName: "cup-straw",
  icon: [384, 512, [129380], "e363", "M232.6-16C207.2-16 185 1.1 178.5 25.6L159.7 96 32 96C18.7 96 8 106.7 8 120s10.7 24 24 24L60.2 468.2C62.3 493 83.1 512 108 512l168 0c24.9 0 45.7-19 47.8-43.8L352 144c13.3 0 24-10.7 24-24s-10.7-24-24-24l-142.6 0 15.5-58.1c.9-3.5 4.1-5.9 7.7-5.9L264 32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-31.4 0zM80.2 144l223.6 0-27.8 320-168 0-27.8-320z"]
}, l8 = {
  prefix: "far",
  iconName: "salad",
  icon: [512, 512, [129367, "bowl-salad"], "f81e", "M272 208c0 11 1.2 21.7 3.6 32l-31.6 0 0-128c0-11-9-20-20-20s-20 9-20 20l0 127.7-93.9-93.9c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L147.7 240 96 240c-53 0-96-43-96-96S43 48 96 48c8.7 0 17.2 1.2 25.3 3.4 17.2-39.6 56.8-67.4 102.7-67.4s85.5 27.7 102.7 67.4c8-2.2 16.5-3.4 25.3-3.4 19.9 0 38.3 6 53.6 16.4-74.7 5.3-133.6 67.6-133.6 143.6zM117.9 422.3c12.9 5.7 22.7 16.7 26.8 30.3 2 6.6 8.2 11.4 15.3 11.4l192 0c7.2 0 13.4-4.8 15.3-11.4 4-13.5 13.8-24.6 26.8-30.3 35.2-15.4 61.2-47.6 68.1-86.3L49.8 336c6.9 38.7 32.9 70.9 68.1 86.3zM0 315.4C0 300.3 12.3 288 27.4 288l457.1 0c15.1 0 27.4 12.3 27.4 27.4 0 67.4-40.6 125.4-98.6 150.8-7.9 26.4-32.4 45.7-61.4 45.7l-192 0c-29 0-53.5-19.3-61.4-45.7-58.1-25.4-98.6-83.4-98.6-150.8zM464 208c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 12.3 4.6 23.5 12.2 32l-54.8 0c-3.5-10-5.5-20.8-5.5-32 0-53 43-96 96-96s96 43 96 96c0 11.2-1.9 22-5.5 32l-54.8 0c7.6-8.5 12.2-19.7 12.2-32z"]
}, o8 = {
  prefix: "far",
  iconName: "paw-simple",
  icon: [448, 512, ["paw-alt"], "f701", "M192 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-.7 146.1c7.1-11.3 19.4-18.1 32.7-18.1s25.7 6.9 32.7 18.1l49.2 78.6c8.7 14 20.9 22.8 32.2 28.1 17.8 8.4 30 26.4 30 47.1 0 28.7-23.3 52-52 52-11.1 0-21.2-3.4-29.6-9.2-19.6-13.6-43.8-17.6-62.4-17.6s-42.8 4-62.4 17.6c-8.4 5.8-18.5 9.2-29.6 9.2-28.7 0-52-23.3-52-52 0-20.8 12.2-38.8 30-47.1 11.2-5.3 23.4-14.1 32.2-28.1l49.2-78.6zm-89.9 53.2c-2.8 4.5-7.1 7.8-11.8 10.1-34 16-57.6 50.5-57.6 90.6 0 55.2 44.8 100 100 100 21.2 0 40.8-6.6 56.9-17.8 17.4-12 52.8-12 70.1 0 16.2 11.2 35.8 17.8 56.9 17.8 55.2 0 100-44.8 100-100 0-40.1-23.6-74.6-57.6-90.6-4.8-2.2-9-5.6-11.8-10.1l-49.1-78.6C281.6 175.4 253.9 160 224 160s-57.6 15.4-73.4 40.7l-49.2 78.6zM304 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm144 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 240a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, u8 = {
  prefix: "far",
  iconName: "cheese-swiss",
  icon: [512, 512, [129472], "f7f0", "M464 256l0-15.8c0-88.5-71.7-160.2-160.2-160.2-.8 0-1.6 .2-2.3 .7l-35 23.3c12.9 8.6 21.5 23.3 21.5 40 0 26.5-21.5 48-48 48-23.4 0-42.9-16.7-47.1-38.9L53.3 246.2C50 248.4 48 252.1 48 256l274.7 0c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32l50.7 0zM48 304l0 112c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-112-60.2 0c-8.8 9.8-21.6 16-35.8 16s-27-6.2-35.8-16L48 304zm464-63.8L512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7 115 0 208.2 93.2 208.2 208.2zM176 320a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
}, c8 = {
  prefix: "far",
  iconName: "capsules",
  icon: [576, 512, [], "f46b", "M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112-128 0 0-112zm0 288l0-125.3 128 0 0 125.3c0 35.3-28.7 64-64 64s-64-28.7-64-64zM32 112l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-105.8 116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3c-35.5-51.7-105.3-64.3-156-28.1-5.6 4-10.7 8.4-15.3 13.1l0-18.3C256 50.1 205.9 0 144 0S32 50.1 32 112zM283.4 249.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l53.3 77.7-106.1 74.3-51.5-75.1zM411.9 436.6l-49.8-72.6 106.1-74.3 48 70c20.9 30.4 13.3 72.2-15.8 93-28.5 20.4-68 13.7-88.5-16.2z"]
}, d8 = {
  prefix: "far",
  iconName: "cookie",
  icon: [512, 512, [127850], "f563", "M240.5 64.6c-12-1.7-24.3 .5-35.1 6.2l-74 39.5C120.7 116 112 125 106.6 136L69.9 211.6c-5.4 11-7.1 23.5-5 35.6L79.4 330c2.1 12.1 8 23.2 16.8 31.7l60.3 58.4c8.8 8.5 20 14 32 15.7l83 11.7c12 1.7 24.3-.5 35.1-6.2l74-39.5C391.3 396 400 387 405.4 376l36.7-75.5c5.4-11 7.1-23.5 5-35.6L432.6 182c-2.1-12.1-8-23.2-16.8-31.7L355.5 91.9c-8.8-8.5-20-14-32-15.7l-83-11.7zM182.8 28.4c19.7-10.5 42.3-14.5 64.4-11.4l83 11.7c22.1 3.1 42.7 13.2 58.7 28.7l60.3 58.4c16.1 15.6 26.8 35.8 30.7 57.9l14.6 82.8c3.9 22.1 .7 44.8-9.1 64.9L448.6 397c-9.8 20.1-25.7 36.6-45.4 47.2l-74 39.5c-19.7 10.5-42.3 14.5-64.4 11.4l-83-11.7c-22.1-3.1-42.7-13.2-58.7-28.7L62.8 396.2C46.8 380.6 36 360.3 32.2 338.3L17.6 255.5c-3.9-22.1-.7-44.8 9.1-64.9L63.4 115c9.8-20.1 25.7-36.6 45.4-47.2l74-39.5zM208 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, f8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  faAngleDown: s8,
  faBottleBaby: q6,
  faBottleDroplet: W6,
  faBowlSpoon: Y6,
  faBreadLoaf: j6,
  faCalendar: J6,
  faCanFood: i8,
  faCapsules: c8,
  faCarrot: G6,
  faCheeseSwiss: u8,
  faCookie: d8,
  faCupStraw: a8,
  faFish: t8,
  faLeaf: e8,
  faMinus: z6,
  faOliveBranch: n8,
  faPawSimple: o8,
  faPlus: r8,
  faPumpSoap: K6,
  faSalad: l8,
  faSnowflake: X6,
  faSprayCanSparkles: Q6,
  faSteak: Z6,
  faTrash: H6,
  faWheat: U6
});
Xh(f8);
function Hl(t, e) {
  const n = Yh(t);
  return n.config.globalProperties.t = (s) => Homey.__(s) ?? s, n.use(ak()), n.mount(e), n;
}
function p8(t) {
  Hl($6, t);
}
function g8(t) {
  Hl(D6, t);
}
function v8(t) {
  Hl(P6, t);
}
window.onHomeyReady = function() {
  window.dispatchEvent(new CustomEvent("homeyReady"));
};
export {
  uf as ButtonPrimary,
  h8 as ButtonTransparent,
  cf as ColorPicker,
  df as Form,
  ni as FormGroup,
  ff as FormInput,
  es as Icon,
  hf as IconPicker,
  m8 as ScrollContainer,
  p8 as createListWidget,
  g8 as createPairView,
  v8 as createRepairView,
  ls as useTranslate
};
