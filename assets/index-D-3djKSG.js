(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xo="167",Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_d=0,Xo=1,vd=2,al=1,yd=2,zn=3,ci=0,Zt=1,kn=2,ii=0,Ji=1,Yo=2,jo=3,$o=4,xd=5,Mi=100,Sd=101,Md=102,Ed=103,bd=104,Td=200,Ad=201,wd=202,Cd=203,Os=204,Bs=205,Rd=206,Pd=207,Ld=208,Dd=209,Id=210,Ud=211,Nd=212,Fd=213,Od=214,Bd=0,zd=1,Hd=2,Pa=3,kd=4,Vd=5,Gd=6,Wd=7,sl=0,Xd=1,Yd=2,ri=0,jd=1,$d=2,qd=3,Kd=4,Zd=5,Jd=6,Qd=7,ol=300,tr=301,nr=302,zs=303,Hs=304,za=306,ks=1e3,bi=1001,Vs=1002,wt=1003,ef=1004,jr=1005,gn=1006,os=1007,Ti=1008,Gn=1009,cl=1010,ll=1011,Rr=1012,So=1013,Ai=1014,rn=1015,Lr=1016,Mo=1017,Eo=1018,ir=1020,ul=35902,dl=1021,fl=1022,Xt=1023,hl=1024,pl=1025,Qi=1026,rr=1027,ml=1028,bo=1029,gl=1030,To=1031,Ao=1033,Ma=33776,Ea=33777,ba=33778,Ta=33779,Gs=35840,Ws=35841,Xs=35842,Ys=35843,js=36196,$s=37492,qs=37496,Ks=37808,Zs=37809,Js=37810,Qs=37811,eo=37812,to=37813,no=37814,io=37815,ro=37816,ao=37817,so=37818,oo=37819,co=37820,lo=37821,Aa=36492,uo=36494,fo=36495,_l=36283,ho=36284,po=36285,mo=36286,tf=3200,nf=3201,rf=0,af=1,ni="",Mn="srgb",ui="srgb-linear",wo="display-p3",Ha="display-p3-linear",La="linear",gt="srgb",Da="rec709",Ia="p3",Ii=7680,qo=519,sf=512,of=513,cf=514,vl=515,lf=516,uf=517,df=518,ff=519,Ko=35044,Zo="300 es",Vn=2e3,Ua=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const Ar=Math.PI/180,Pr=180/Math.PI;function lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function Co(i,e){return(i%e+e)%e}function hf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pf(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function mf(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function gf(i,e=1){return e-Math.abs(Co(i,e*2)-e)}function _f(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xf(i,e){return i+Math.random()*(e-i)}function Sf(i){return i*(.5-Math.random())}function Mf(i){i!==void 0&&(Jo=i);let e=Jo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ef(i){return i*Ar}function bf(i){return i*Pr}function Tf(i){return(i&i-1)===0&&i!==0}function Af(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cf(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),u=s((e+n)/2),f=a((e-n)/2),d=s((e-n)/2),m=a((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(o*u,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const go={DEG2RAD:Ar,RAD2DEG:Pr,generateUUID:lr,clamp:kt,euclideanModulo:Co,mapLinear:hf,inverseLerp:pf,lerp:wr,damp:mf,pingpong:gf,smoothstep:_f,smootherstep:vf,randInt:yf,randFloat:xf,randFloatSpread:Sf,seededRandom:Mf,degToRad:Ef,radToDeg:bf,isPowerOfTwo:Tf,ceilPowerOfTwo:Af,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Cf,normalize:Gt,denormalize:Ki};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,a,s,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],v=n[8],x=r[0],p=r[3],h=r[6],R=r[1],b=r[4],C=r[7],F=r[2],U=r[5],D=r[8];return a[0]=s*x+o*R+c*F,a[3]=s*p+o*b+c*U,a[6]=s*h+o*C+c*D,a[1]=l*x+u*R+f*F,a[4]=l*p+u*b+f*U,a[7]=l*h+u*C+f*D,a[2]=d*x+m*R+v*F,a[5]=d*p+m*b+v*U,a[8]=d*h+m*C+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*a*u+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*s-o*l,d=o*c-u*a,m=l*a-s*c,v=t*f+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*l-u*n)*x,e[2]=(o*n-r*s)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*a-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(s*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(cs.makeScale(e,t)),this}rotate(e){return this.premultiply(cs.makeRotation(-e)),this}translate(e,t){return this.premultiply(cs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cs=new Je;function yl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=Na("canvas");return i.style.display="block",i}const Qo={};function Cr(i){i in Qo||(Qo[i]=!0,console.warn(i))}function Pf(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ec=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tc=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[ui]:{transfer:La,primaries:Da,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Mn]:{transfer:gt,primaries:Da,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ha]:{transfer:La,primaries:Ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(tc),fromReference:i=>i.applyMatrix3(ec)},[wo]:{transfer:gt,primaries:Ia,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(tc),fromReference:i=>i.applyMatrix3(ec).convertLinearToSRGB()}},Lf=new Set([ui,Ha]),ut={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Lf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=_r[e].toReference,r=_r[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return _r[i].primaries},getTransfer:function(i){return i===ni?La:_r[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(_r[e].luminanceCoefficients)}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Na("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=er(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let If=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(us(r[s].image)):a.push(us(r[s]))}else a=us(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class Jt extends Ci{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=bi,r=bi,a=gn,s=Ti,o=Xt,c=Gn,l=Jt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=lr(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=ol;Jt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],v=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,C=(m+1)/2,F=(h+1)/2,U=(u+d)/4,D=(f+x)/4,z=(v+p)/4;return b>C&&b>F?b<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(b),r=U/n,a=D/n):C>F?C<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(C),n=U/r,a=z/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=D/a,r=z/a),this.set(n,r,a,t),this}let R=Math.sqrt((p-v)*(p-v)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(p-v)/R,this.y=(f-x)/R,this.z=(d-u)/R,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nf extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Nf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sl extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ff extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=a[s+0],m=a[s+1],v=a[s+2],x=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f!==x||c!==d||l!==m||u!==v){let p=1-o;const h=c*d+l*m+u*v+f*x,R=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const F=Math.sqrt(b),U=Math.atan2(F,h*R);p=Math.sin(p*U)/F,o=Math.sin(o*U)/F}const C=o*R;if(c=c*p+d*C,l=l*p+m*C,u=u*p+v*C,f=f*p+x*C,p===1-o){const F=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=F,l*=F,u*=F,f*=F}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=a[s],d=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+u*f+c*m-l*d,e[t+1]=c*v+u*d+l*f-o*m,e[t+2]=l*v+u*m+o*d-c*f,e[t+3]=u*v-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(a/2),d=c(n/2),m=c(r/2),v=c(a/2);switch(s){case"XYZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"YZX":this._x=d*u*f+l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f-d*m*v;break;case"XZY":this._x=d*u*f-l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(s-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(a-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(s-r)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-n*l,this._z=a*u+s*l+n*c-r*o,this._w=s*u-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=s*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),u=2*(o*t-a*r),f=2*(a*n-s*t);return this.x=t+c*l+s*f-o*u,this.y=n+c*u+o*l-a*f,this.z=r+c*f+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ds.copy(this).projectOnVector(e),this.sub(ds)}reflect(e){return this.sub(ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new k,nc=new wi;class ur{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,hn):hn.fromBufferAttribute(a,s),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),qr.subVectors(this.max,vr),Ni.subVectors(e.a,vr),Fi.subVectors(e.b,vr),Oi.subVectors(e.c,vr),$n.subVectors(Fi,Ni),qn.subVectors(Oi,Fi),mi.subVectors(Ni,Oi);let t=[0,-$n.z,$n.y,0,-qn.z,qn.y,0,-mi.z,mi.y,$n.z,0,-$n.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-$n.y,$n.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!fs(t,Ni,Fi,Oi,qr)||(t=[1,0,0,0,1,0,0,0,1],!fs(t,Ni,Fi,Oi,qr))?!1:(Kr.crossVectors($n,qn),t=[Kr.x,Kr.y,Kr.z],fs(t,Ni,Fi,Oi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new k,new k,new k,new k,new k,new k,new k,new k],hn=new k,$r=new ur,Ni=new k,Fi=new k,Oi=new k,$n=new k,qn=new k,mi=new k,vr=new k,qr=new k,Kr=new k,gi=new k;function fs(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){gi.fromArray(i,a);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Of=new ur,yr=new k,hs=new k;class Dr{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Of.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(hs)),this.expandByPoint(yr.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new k,ps=new k,Zr=new k,Kn=new k,ms=new k,Jr=new k,gs=new k;class ka{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ps.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ps);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Zr),o=Kn.dot(this.direction),c=-Kn.dot(Zr),l=Kn.lengthSq(),u=Math.abs(1-s*s);let f,d,m,v;if(u>0)if(f=s*c-o,d=s*o-c,v=a*u,f>=0)if(d>=-v)if(d<=v){const x=1/u;f*=x,d*=x,m=f*(f+s*d+2*o)+d*(s*f+d+2*c)+l}else d=a,f=Math.max(0,-(s*d+o)),m=-f*f+d*(d+2*c)+l;else d=-a,f=Math.max(0,-(s*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-s*a+o)),d=f>0?-a:Math.min(Math.max(-a,-c),a),m=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-a,-c),a),m=d*(d+2*c)+l):(f=Math.max(0,-(s*a+o)),d=f>0?a:Math.min(Math.max(-a,-c),a),m=-f*f+d*(d+2*c)+l);else d=s>0?-a:a,f=Math.max(0,-(s*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ps).addScaledVector(Zr,d),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,a){ms.subVectors(t,e),Jr.subVectors(n,e),gs.crossVectors(ms,Jr);let s=this.direction.dot(gs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(Jr.crossVectors(Kn,Jr));if(c<0)return null;const l=o*this.direction.dot(ms.cross(Kn));if(l<0||c+l>s)return null;const u=-o*Kn.dot(gs);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,n,r,a,s,o,c,l,u,f,d,m,v,x,p){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,u,f,d,m,v,x,p)}set(e,t,n,r,a,s,o,c,l,u,f,d,m,v,x,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),a=1/Bi.setFromMatrixColumn(e,1).length(),s=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=s*u,m=s*f,v=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=v+m*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,v=l*u,x=l*f;t[0]=d+x*o,t[4]=v*o-m,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=m*o-v,t[6]=x+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,v=l*u,x=l*f;t[0]=d-x*o,t[4]=-s*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*u,t[9]=x-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,m=s*f,v=o*u,x=o*f;t[0]=c*u,t[4]=v*l-m,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,m=s*l,v=o*c,x=o*l;t[0]=c*u,t[4]=x-d*f,t[8]=v*f+m,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+v,t[10]=d-x*f}else if(e.order==="XZY"){const d=s*c,m=s*l,v=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=s*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,zf)}lookAt(e,t,n){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Zn.crossVectors(n,tn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Zn.crossVectors(n,tn)),Zn.normalize(),Qr.crossVectors(tn,Zn),r[0]=Zn.x,r[4]=Qr.x,r[8]=tn.x,r[1]=Zn.y,r[5]=Qr.y,r[9]=tn.y,r[2]=Zn.z,r[6]=Qr.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],v=n[2],x=n[6],p=n[10],h=n[14],R=n[3],b=n[7],C=n[11],F=n[15],U=r[0],D=r[4],z=r[8],T=r[12],E=r[1],w=r[5],ee=r[9],q=r[13],P=r[2],N=r[6],V=r[10],Q=r[14],Y=r[3],ne=r[7],he=r[11],ve=r[15];return a[0]=s*U+o*E+c*P+l*Y,a[4]=s*D+o*w+c*N+l*ne,a[8]=s*z+o*ee+c*V+l*he,a[12]=s*T+o*q+c*Q+l*ve,a[1]=u*U+f*E+d*P+m*Y,a[5]=u*D+f*w+d*N+m*ne,a[9]=u*z+f*ee+d*V+m*he,a[13]=u*T+f*q+d*Q+m*ve,a[2]=v*U+x*E+p*P+h*Y,a[6]=v*D+x*w+p*N+h*ne,a[10]=v*z+x*ee+p*V+h*he,a[14]=v*T+x*q+p*Q+h*ve,a[3]=R*U+b*E+C*P+F*Y,a[7]=R*D+b*w+C*N+F*ne,a[11]=R*z+b*ee+C*V+F*he,a[15]=R*T+b*q+C*Q+F*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],x=e[7],p=e[11],h=e[15];return v*(+a*c*f-r*l*f-a*o*d+n*l*d+r*o*m-n*c*m)+x*(+t*c*m-t*l*d+a*s*d-r*s*m+r*l*u-a*c*u)+p*(+t*l*f-t*o*m-a*s*f+n*s*m+a*o*u-n*l*u)+h*(-r*o*u-t*c*f+t*o*d+r*s*f-n*s*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],x=e[13],p=e[14],h=e[15],R=f*p*l-x*d*l+x*c*m-o*p*m-f*c*h+o*d*h,b=v*d*l-u*p*l-v*c*m+s*p*m+u*c*h-s*d*h,C=u*x*l-v*f*l+v*o*m-s*x*m-u*o*h+s*f*h,F=v*f*c-u*x*c-v*o*d+s*x*d+u*o*p-s*f*p,U=t*R+n*b+r*C+a*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=R*D,e[1]=(x*d*a-f*p*a-x*r*m+n*p*m+f*r*h-n*d*h)*D,e[2]=(o*p*a-x*c*a+x*r*l-n*p*l-o*r*h+n*c*h)*D,e[3]=(f*c*a-o*d*a-f*r*l+n*d*l+o*r*m-n*c*m)*D,e[4]=b*D,e[5]=(u*p*a-v*d*a+v*r*m-t*p*m-u*r*h+t*d*h)*D,e[6]=(v*c*a-s*p*a-v*r*l+t*p*l+s*r*h-t*c*h)*D,e[7]=(s*d*a-u*c*a+u*r*l-t*d*l-s*r*m+t*c*m)*D,e[8]=C*D,e[9]=(v*f*a-u*x*a-v*n*m+t*x*m+u*n*h-t*f*h)*D,e[10]=(s*x*a-v*o*a+v*n*l-t*x*l-s*n*h+t*o*h)*D,e[11]=(u*o*a-s*f*a-u*n*l+t*f*l+s*n*m-t*o*m)*D,e[12]=F*D,e[13]=(u*x*r-v*f*r+v*n*d-t*x*d-u*n*p+t*f*p)*D,e[14]=(v*o*r-s*x*r-v*n*c+t*x*c+s*n*p-t*o*p)*D,e[15]=(s*f*r-u*o*r+u*n*c-t*f*c-s*n*d+t*o*d)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,f=o+o,d=a*l,m=a*u,v=a*f,x=s*u,p=s*f,h=o*f,R=c*l,b=c*u,C=c*f,F=n.x,U=n.y,D=n.z;return r[0]=(1-(x+h))*F,r[1]=(m+C)*F,r[2]=(v-b)*F,r[3]=0,r[4]=(m-C)*U,r[5]=(1-(d+h))*U,r[6]=(p+R)*U,r[7]=0,r[8]=(v+b)*D,r[9]=(p-R)*D,r[10]=(1-(d+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Bi.set(r[0],r[1],r[2]).length();const s=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const l=1/a,u=1/s,f=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=Vn){const c=this.elements,l=2*a/(t-e),u=2*a/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,v;if(o===Vn)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===Ua)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=Vn){const c=this.elements,l=1/(t-e),u=1/(n-r),f=1/(s-a),d=(t+e)*l,m=(n+r)*u;let v,x;if(o===Vn)v=(s+a)*f,x=-2*f;else if(o===Ua)v=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new k,pn=new Mt,Bf=new k(0,0,0),zf=new k(1,1,1),Zn=new k,Qr=new k,tn=new k,ic=new Mt,rc=new wi;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rc.setFromEuler(this),this.setFromQuaternion(rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hf=0;const ac=new k,zi=new wi,Fn=new Mt,ea=new k,xr=new k,kf=new k,Vf=new wi,sc=new k(1,0,0),oc=new k(0,1,0),cc=new k(0,0,1),lc={type:"added"},Gf={type:"removed"},Hi={type:"childadded",child:null},_s={type:"childremoved",child:null};class Yt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new k,t=new Wn,n=new wi,r=new k(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(xr,ea,this.up):Fn.lookAt(ea,xr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gf),_s.child=e,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new k(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new k,On=new k,vs=new k,Bn=new k,ki=new k,Vi=new k,uc=new k,ys=new k,xs=new k,Ss=new k;class bn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mn.subVectors(e,t),r.cross(mn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){mn.subVectors(r,t),On.subVectors(n,t),vs.subVectors(e,t);const s=mn.dot(mn),o=mn.dot(On),c=mn.dot(vs),l=On.dot(On),u=On.dot(vs),f=s*l-o*o;if(f===0)return a.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,v=(s*u-o*c)*d;return a.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Bn.x),c.addScaledVector(s,Bn.y),c.addScaledVector(o,Bn.z),c)}static isFrontFacing(e,t,n,r){return mn.subVectors(n,t),On.subVectors(e,t),mn.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;ki.subVectors(r,n),Vi.subVectors(a,n),ys.subVectors(e,n);const c=ki.dot(ys),l=Vi.dot(ys);if(c<=0&&l<=0)return t.copy(n);xs.subVectors(e,r);const u=ki.dot(xs),f=Vi.dot(xs);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(ki,s);Ss.subVectors(e,a);const m=ki.dot(Ss),v=Vi.dot(Ss);if(v>=0&&m<=v)return t.copy(a);const x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Vi,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return uc.subVectors(a,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(uc,o);const h=1/(p+x+d);return s=x*h,o=d*h,t.copy(n).addScaledVector(ki,s).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Ms(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=Co(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ms(s,a,e+1/3),this.g=Ms(s,a,e),this.b=Ms(s,a,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return ut.fromWorkingColorSpace(zt.copy(this),e),Math.round(kt(zt.r*255,0,255))*65536+Math.round(kt(zt.g*255,0,255))*256+Math.round(kt(zt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,a=zt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=u<=.5?f/(s+o):f/(2-s-o),s){case n:c=(r-a)/f+(r<a?6:0);break;case r:c=(a-n)/f+2;break;case a:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Mn){ut.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ta);const n=wr(Jn.h,ta.h,t),r=wr(Jn.s,ta.s,t),a=wr(Jn.l,ta.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new st;st.NAMES=El;let Wf=0;class dr extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Ji,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Os,this.blendDst=Bs,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Os&&(n.blendSrc=this.blendSrc),this.blendDst!==Bs&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class bl extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new k,na=new Ke;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ko,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array),a=Gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),e}}class Tl extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xf=0;const sn=new Mt,Es=new Yt,Gi=new k,nn=new ur,Sr=new ur,Dt=new k;class un extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yl(e)?Al:Tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Es.lookAt(e),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];nn.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(nn.min,Sr.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,Sr.max),nn.expandByPoint(Dt)):(nn.expandByPoint(Sr.min),nn.expandByPoint(Sr.max))}nn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Dt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(e,l),Dt.add(Gi)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new k,c[z]=new k;const l=new k,u=new k,f=new k,d=new Ke,m=new Ke,v=new Ke,x=new k,p=new k;function h(z,T,E){l.fromBufferAttribute(n,z),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,E),d.fromBufferAttribute(a,z),m.fromBufferAttribute(a,T),v.fromBufferAttribute(a,E),u.sub(l),f.sub(l),m.sub(d),v.sub(d);const w=1/(m.x*v.y-v.x*m.y);isFinite(w)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(w),o[z].add(x),o[T].add(x),o[E].add(x),c[z].add(p),c[T].add(p),c[E].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let z=0,T=R.length;z<T;++z){const E=R[z],w=E.start,ee=E.count;for(let q=w,P=w+ee;q<P;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new k,C=new k,F=new k,U=new k;function D(z){F.fromBufferAttribute(r,z),U.copy(F);const T=o[z];b.copy(T),b.sub(F.multiplyScalar(F.dot(T))).normalize(),C.crossVectors(U,T);const w=C.dot(c[z])<0?-1:1;s.setXYZW(z,b.x,b.y,b.z,w)}for(let z=0,T=R.length;z<T;++z){const E=R[z],w=E.start,ee=E.count;for(let q=w,P=w+ee;q<P;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new k,a=new k,s=new k,o=new k,c=new k,l=new k,u=new k,f=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,v=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let h=0;h<u;h++)d[v++]=l[m++]}return new ln(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],f=a[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new Mt,_i=new ka,ia=new Dr,fc=new k,Wi=new k,Xi=new k,Yi=new k,bs=new k,ra=new k,aa=new Ke,sa=new Ke,oa=new Ke,hc=new k,pc=new k,mc=new k,ca=new k,la=new k;class An extends Yt{constructor(e=new un,t=new bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ra.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],f=a[c];u!==0&&(bs.fromBufferAttribute(f,e),s?ra.addScaledVector(bs,u):ra.addScaledVector(bs.sub(t),u))}t.add(ra)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(a),_i.copy(e.ray).recast(e.near),!(ia.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ia,fc)===null||_i.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(a).invert(),_i.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,x=d.length;v<x;v++){const p=d[v],h=s[p.materialIndex],R=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let C=R,F=b;C<F;C+=3){const U=o.getX(C),D=o.getX(C+1),z=o.getX(C+2);r=ua(this,h,e,n,l,u,f,U,D,z),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){const R=o.getX(p),b=o.getX(p+1),C=o.getX(p+2);r=ua(this,s,e,n,l,u,f,R,b,C),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,x=d.length;v<x;v++){const p=d[v],h=s[p.materialIndex],R=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let C=R,F=b;C<F;C+=3){const U=C,D=C+1,z=C+2;r=ua(this,h,e,n,l,u,f,U,D,z),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){const R=p,b=p+1,C=p+2;r=ua(this,s,e,n,l,u,f,R,b,C),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Yf(i,e,t,n,r,a,s,o){let c;if(e.side===Zt?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===ci,o),c===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:i}}function ua(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,Yi);const u=Yf(i,e,t,n,Wi,Xi,Yi,ca);if(u){r&&(aa.fromBufferAttribute(r,o),sa.fromBufferAttribute(r,c),oa.fromBufferAttribute(r,l),u.uv=bn.getInterpolation(ca,Wi,Xi,Yi,aa,sa,oa,new Ke)),a&&(aa.fromBufferAttribute(a,o),sa.fromBufferAttribute(a,c),oa.fromBufferAttribute(a,l),u.uv1=bn.getInterpolation(ca,Wi,Xi,Yi,aa,sa,oa,new Ke)),s&&(hc.fromBufferAttribute(s,o),pc.fromBufferAttribute(s,c),mc.fromBufferAttribute(s,l),u.normal=bn.getInterpolation(ca,Wi,Xi,Yi,hc,pc,mc,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new k,materialIndex:0};bn.getNormal(Wi,Xi,Yi,f.normal),u.face=f}return u}class Ir extends un{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(f,2));function v(x,p,h,R,b,C,F,U,D,z,T){const E=C/D,w=F/z,ee=C/2,q=F/2,P=U/2,N=D+1,V=z+1;let Q=0,Y=0;const ne=new k;for(let he=0;he<V;he++){const ve=he*w-q;for(let Xe=0;Xe<N;Xe++){const Ie=Xe*E-ee;ne[x]=Ie*R,ne[p]=ve*b,ne[h]=P,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[p]=0,ne[h]=U>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Xe/D),f.push(1-he/z),Q+=1}}for(let he=0;he<z;he++)for(let ve=0;ve<D;ve++){const Xe=d+ve+N*he,Ie=d+ve+N*(he+1),j=d+(ve+1)+N*(he+1),de=d+(ve+1)+N*he;c.push(Xe,Ie,de),c.push(Ie,j,de),Y+=6}o.addGroup(m,Y,T),m+=Y,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=ar(i[t]);for(const r in n)e[r]=n[r]}return e}function jf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const $f={clone:ar,merge:Wt};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=jf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cl extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new k,gc=new Ke,_c=new Ke;class cn extends Cl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,_c),t.subVectors(_c,gc)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,$i=1;class Zf extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(ji,$i,e,t);r.layers=this.layers,this.add(r);const a=new cn(ji,$i,e,t);a.layers=this.layers,this.add(a);const s=new cn(ji,$i,e,t);s.layers=this.layers,this.add(s);const o=new cn(ji,$i,e,t);o.layers=this.layers,this.add(o);const c=new cn(ji,$i,e,t);c.layers=this.layers,this.add(c);const l=new cn(ji,$i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Rl extends Jt{constructor(e,t,n,r,a,s,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,n,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jf extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Rl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ir(5,5,5),a=new Rn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ii});a.uniforms.tEquirect.value=t;const s=new An(r,a),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=gn),new Zf(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const Ts=new k,Qf=new k,eh=new Je;class ti{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ts.subVectors(n,t).cross(Qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eh.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Dr,da=new k;class Ro{constructor(e=new ti,t=new ti,n=new ti,r=new ti,a=new ti,s=new ti){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],x=r[10],p=r[11],h=r[12],R=r[13],b=r[14],C=r[15];if(n[0].setComponents(c-a,d-l,p-m,C-h).normalize(),n[1].setComponents(c+a,d+l,p+m,C+h).normalize(),n[2].setComponents(c+s,d+u,p+v,C+R).normalize(),n[3].setComponents(c-s,d-u,p-v,C-R).normalize(),n[4].setComponents(c-o,d-f,p-x,C-b).normalize(),t===Vn)n[5].setComponents(c+o,d+f,p+x,C+b).normalize();else if(t===Ua)n[5].setComponents(o,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function th(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,o),f.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let m=0,v=d.length;m<v;m++){const x=d[m];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}class Ur extends un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,m=[],v=[],x=[],p=[];for(let h=0;h<u;h++){const R=h*d-s;for(let b=0;b<l;b++){const C=b*f-a;v.push(C,-R,0),x.push(0,0,1),p.push(b/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let R=0;R<o;R++){const b=R+l*h,C=R+l*(h+1),F=R+1+l*(h+1),U=R+1+l*h;m.push(b,C,U),m.push(C,F,U)}this.setIndex(m),this.setAttribute("position",new an(v,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ch=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ih=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$h=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:rh,alphamap_pars_fragment:ah,alphatest_fragment:sh,alphatest_pars_fragment:oh,aomap_fragment:ch,aomap_pars_fragment:lh,batching_pars_vertex:uh,batching_vertex:dh,begin_vertex:fh,beginnormal_vertex:hh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:xh,color_fragment:Sh,color_pars_fragment:Mh,color_pars_vertex:Eh,color_vertex:bh,common:Th,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:wh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Ih,envmap_fragment:Uh,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:$h,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Hh,fog_fragment:kh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Gh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:Yh,lights_pars_begin:jh,lights_toon_fragment:qh,lights_toon_pars_fragment:Kh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Jh,lights_physical_fragment:Qh,lights_physical_pars_fragment:ep,lights_fragment_begin:tp,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:op,map_fragment:cp,map_pars_fragment:lp,map_particle_fragment:up,map_particle_pars_fragment:dp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:hp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:vp,normal_fragment_begin:yp,normal_fragment_maps:xp,normal_pars_fragment:Sp,normal_pars_vertex:Mp,normal_vertex:Ep,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Cp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Ip,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:Hp,skinbase_vertex:kp,skinning_pars_vertex:Vp,skinning_vertex:Gp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:Yp,tonemapping_fragment:jp,tonemapping_pars_fragment:$p,transmission_fragment:qp,transmission_pars_fragment:Kp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:em,background_vert:tm,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:rm,cube_vert:am,cube_frag:sm,depth_vert:om,depth_frag:cm,distanceRGBA_vert:lm,distanceRGBA_frag:um,equirect_vert:dm,equirect_frag:fm,linedashed_vert:hm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:vm,meshmatcap_vert:ym,meshmatcap_frag:xm,meshnormal_vert:Sm,meshnormal_frag:Mm,meshphong_vert:Em,meshphong_frag:bm,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:wm,meshtoon_frag:Cm,points_vert:Rm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Im,sprite_frag:Um},_e={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},En={basic:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Wt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Wt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new st(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Wt([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Wt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Wt([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Wt([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Wt([_e.common,_e.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Wt([_e.lights,_e.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};En.physical={uniforms:Wt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const fa={r:0,b:0,g:0},yi=new Wn,Nm=new Mt;function Fm(i,e,t,n,r,a,s){const o=new st(0);let c=a===!0?0:1,l,u,f=null,d=0,m=null;function v(R){let b=R.isScene===!0?R.background:null;return b&&b.isTexture&&(b=(R.backgroundBlurriness>0?t:e).get(b)),b}function x(R){let b=!1;const C=v(R);C===null?h(o,c):C&&C.isColor&&(h(C,1),b=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,s):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(R,b){const C=v(b);C&&(C.isCubeTexture||C.mapping===za)?(u===void 0&&(u=new An(new Ir(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ar(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(b.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(yi)),u.material.toneMapped=ut.getTransfer(C.colorSpace)!==gt,(f!==C||d!==C.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,m=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new An(new Ur(2,2),new Rn({name:"BackgroundMaterial",uniforms:ar(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ut.getTransfer(C.colorSpace)!==gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=C,d=C.version,m=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function h(R,b){R.getRGB(fa,wl(i)),n.buffers.color.setClear(fa.r,fa.g,fa.b,b,s)}return{getClearColor:function(){return o},setClearColor:function(R,b=1){o.set(R),c=b,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,h(o,c)},render:x,addToRenderList:p}}function Om(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(E,w,ee,q,P){let N=!1;const V=f(q,ee,w);a!==V&&(a=V,l(a.object)),N=m(E,q,ee,P),N&&v(E,q,ee,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(N||s)&&(s=!1,C(E,w,ee,q),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function f(E,w,ee){const q=ee.wireframe===!0;let P=n[E.id];P===void 0&&(P={},n[E.id]=P);let N=P[w.id];N===void 0&&(N={},P[w.id]=N);let V=N[q];return V===void 0&&(V=d(c()),N[q]=V),V}function d(E){const w=[],ee=[],q=[];for(let P=0;P<t;P++)w[P]=0,ee[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:ee,attributeDivisors:q,object:E,attributes:{},index:null}}function m(E,w,ee,q){const P=a.attributes,N=w.attributes;let V=0;const Q=ee.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const he=P[Y];let ve=N[Y];if(ve===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;V++}return a.attributesNum!==V||a.index!==q}function v(E,w,ee,q){const P={},N=w.attributes;let V=0;const Q=ee.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let he=N[Y];he===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(he=E.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),P[Y]=ve,V++}a.attributes=P,a.attributesNum=V,a.index=q}function x(){const E=a.newAttributes;for(let w=0,ee=E.length;w<ee;w++)E[w]=0}function p(E){h(E,0)}function h(E,w){const ee=a.newAttributes,q=a.enabledAttributes,P=a.attributeDivisors;ee[E]=1,q[E]===0&&(i.enableVertexAttribArray(E),q[E]=1),P[E]!==w&&(i.vertexAttribDivisor(E,w),P[E]=w)}function R(){const E=a.newAttributes,w=a.enabledAttributes;for(let ee=0,q=w.length;ee<q;ee++)w[ee]!==E[ee]&&(i.disableVertexAttribArray(ee),w[ee]=0)}function b(E,w,ee,q,P,N,V){V===!0?i.vertexAttribIPointer(E,w,ee,P,N):i.vertexAttribPointer(E,w,ee,q,P,N)}function C(E,w,ee,q){x();const P=q.attributes,N=ee.getAttributes(),V=w.defaultAttributeValues;for(const Q in N){const Y=N[Q];if(Y.location>=0){let ne=P[Q];if(ne===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),ne!==void 0){const he=ne.normalized,ve=ne.itemSize,Xe=e.get(ne);if(Xe===void 0)continue;const Ie=Xe.buffer,j=Xe.type,de=Xe.bytesPerElement,Ee=j===i.INT||j===i.UNSIGNED_INT||ne.gpuType===So;if(ne.isInterleavedBufferAttribute){const Me=ne.data,Ve=Me.stride,Ye=ne.offset;if(Me.isInstancedInterleavedBuffer){for(let $e=0;$e<Y.locationSize;$e++)h(Y.location+$e,Me.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let $e=0;$e<Y.locationSize;$e++)p(Y.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let $e=0;$e<Y.locationSize;$e++)b(Y.location+$e,ve/Y.locationSize,j,he,Ve*de,(Ye+ve/Y.locationSize*$e)*de,Ee)}else{if(ne.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)h(Y.location+Me,ne.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Me=0;Me<Y.locationSize;Me++)b(Y.location+Me,ve/Y.locationSize,j,he,ve*de,ve/Y.locationSize*Me*de,Ee)}}else if(V!==void 0){const he=V[Q];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Y.location,he);break;case 3:i.vertexAttrib3fv(Y.location,he);break;case 4:i.vertexAttrib4fv(Y.location,he);break;default:i.vertexAttrib1fv(Y.location,he)}}}}R()}function F(){z();for(const E in n){const w=n[E];for(const ee in w){const q=w[ee];for(const P in q)u(q[P].object),delete q[P];delete w[ee]}delete n[E]}}function U(E){if(n[E.id]===void 0)return;const w=n[E.id];for(const ee in w){const q=w[ee];for(const P in q)u(q[P].object),delete q[P];delete w[ee]}delete n[E.id]}function D(E){for(const w in n){const ee=n[w];if(ee[E.id]===void 0)continue;const q=ee[E.id];for(const P in q)u(q[P].object),delete q[P];delete ee[E.id]}}function z(){T(),s=!0,a!==r&&(a=r,l(a.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:p,disableUnusedAttributes:R}}function Bm(i,e,t){let n;function r(l){n=l}function a(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,n,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)s(l[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x];for(let x=0;x<d.length;x++)t.update(v,n,d[x])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(U){return!(U!==Xt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const D=U===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Gn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==rn&&!D)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:R,maxFragmentUniforms:b,vertexTextures:C,maxSamples:F}}function Hm(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new ti,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||v===null||v.length===0||a&&!p)a?u(null):l();else{const R=a?0:n,b=R*4;let C=h.clippingState||null;c.value=C,C=u(v,d,b,m);for(let F=0;F!==b;++F)C[F]=t[F];h.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,v){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,v!==!0||p===null){const h=m+x*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,C=m;b!==x;++b,C+=4)s.copy(f[b]).applyMatrix4(R,o),s.normal.toArray(p,C),p[C+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function km(i){let e=new WeakMap;function t(s,o){return o===zs?s.mapping=tr:o===Hs&&(s.mapping=nr),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===zs||o===Hs)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Jf(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ll extends Cl{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,vc=[.125,.215,.35,.446,.526,.582],Ei=20,As=new Ll,yc=new st;let ws=null,Cs=0,Rs=0,Ps=!1;const Si=(1+Math.sqrt(5))/2,qi=1/Si,xc=[new k(-Si,qi,0),new k(Si,qi,0),new k(-qi,0,Si),new k(qi,0,Si),new k(0,Si,-qi),new k(0,Si,qi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ws=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ws,Cs,Rs),this._renderer.xr.enabled=Ps,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ws=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Rs=this._renderer.getActiveMipmapLevel(),Ps=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Lr,format:Xt,colorSpace:ui,depthBuffer:!1},r=Mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(a)),this._blurMaterial=Gm(a,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,r){const o=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(yc),u.toneMapping=ri,u.autoClear=!1;const m=new bl({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),v=new An(new Ir,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(yc),x=!0);for(let h=0;h<6;h++){const R=h%3;R===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):R===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const b=this._cubeSize;ha(r,R*b,h>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===tr||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new An(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ha(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=xc[(r-a-1)%xc.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new An(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),x=a/v,p=isFinite(a)?1+Math.floor(u*x):Ei;p>Ei&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const h=[];let R=0;for(let D=0;D<Ei;++D){const z=D/x,T=Math.exp(-z*z/2);h.push(T),D===0?R+=T:D<p&&(R+=2*T)}for(let D=0;D<h.length;D++)h[D]=h[D]/R;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;const C=this._sizeLods[r],F=3*C*(r>b-Zi?r-b+Zi:0),U=4*(this._cubeSize-C);ha(t,F,U,3*C,2*C),c.setRenderTarget(t),c.render(f,As)}}function Vm(i){const e=[],t=[],n=[];let r=i;const a=i-Zi+1+vc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>i-Zi?c=vc[s-i+Zi-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,x=3,p=2,h=1,R=new Float32Array(x*v*m),b=new Float32Array(p*v*m),C=new Float32Array(h*v*m);for(let U=0;U<m;U++){const D=U%3*2/3-1,z=U>2?0:-1,T=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];R.set(T,x*v*U),b.set(d,p*v*U);const E=[U,U,U,U,U,U];C.set(E,h*v*U)}const F=new un;F.setAttribute("position",new ln(R,x)),F.setAttribute("uv",new ln(b,p)),F.setAttribute("faceIndex",new ln(C,h)),e.push(F),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mc(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gm(i,e,t){const n=new Float32Array(Ei),r=new k(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ec(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function bc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===zs||c===Hs,u=c===tr||c===nr;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Sc(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new Sc(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ym(i,e,t,n){const r={},a=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,h=x.length;p<h;p++)e.remove(x[p])}d.removeEventListener("dispose",s),delete r[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const x=m[v];for(let p=0,h=x.length;p<h;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const R=m.array;x=m.version;for(let b=0,C=R.length;b<C;b+=3){const F=R[b+0],U=R[b+1],D=R[b+2];d.push(F,U,U,D,D,F)}}else if(v!==void 0){const R=v.array;x=v.version;for(let b=0,C=R.length/3-1;b<C;b+=3){const F=b+0,U=b+1,D=b+2;d.push(F,U,U,D,D,F)}}else return;const p=new(yl(d)?Al:Tl)(d,1);p.version=x;const h=a.get(f);h&&e.remove(h),a.set(f,p)}function u(f){const d=a.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function jm(i,e,t){let n;function r(d){n=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function c(d,m){i.drawElements(n,m,a,d*s),t.update(m,n,1)}function l(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,a,d*s,v),t.update(m,n,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,d,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];t.update(p,n,1)}function f(d,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/s,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,d,0,x,0,v);let h=0;for(let R=0;R<v;R++)h+=m[R];for(let R=0;R<x.length;R++)t.update(h,n,x[R])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $m(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qm(i,e,t){const n=new WeakMap,r=new It;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let E=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var m=E;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let C=0;v===!0&&(C=1),x===!0&&(C=2),p===!0&&(C=3);let F=o.attributes.position.count*C,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const D=new Float32Array(F*U*4*f),z=new Sl(D,F,U,f);z.type=rn,z.needsUpdate=!0;const T=C*4;for(let w=0;w<f;w++){const ee=h[w],q=R[w],P=b[w],N=F*U*4*w;for(let V=0;V<ee.count;V++){const Q=V*T;v===!0&&(r.fromBufferAttribute(ee,V),D[N+Q+0]=r.x,D[N+Q+1]=r.y,D[N+Q+2]=r.z,D[N+Q+3]=0),x===!0&&(r.fromBufferAttribute(q,V),D[N+Q+4]=r.x,D[N+Q+5]=r.y,D[N+Q+6]=r.z,D[N+Q+7]=0),p===!0&&(r.fromBufferAttribute(P,V),D[N+Q+8]=r.x,D[N+Q+9]=r.y,D[N+Q+10]=r.z,D[N+Q+11]=P.itemSize===4?r.w:1)}}d={count:f,texture:z,size:new Ke(F,U)},n.set(o,d),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const x=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Km(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}class Dl extends Jt{constructor(e,t,n,r,a,s,o,c,l,u=Qi){if(u!==Qi&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qi&&(n=Ai),n===void 0&&u===rr&&(n=ir),super(null,r,a,s,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Il=new Jt,Tc=new Dl(1,1),Ul=new Sl,Nl=new Ff,Fl=new Rl,Ac=[],wc=[],Cc=new Float32Array(16),Rc=new Float32Array(9),Pc=new Float32Array(4);function fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ac[r];if(a===void 0&&(a=new Float32Array(r),Ac[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Va(i,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Pc.set(n),i.uniformMatrix2fv(this.addr,!1,Pc),Lt(t,n)}}function ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Rc.set(n),i.uniformMatrix3fv(this.addr,!1,Rc),Lt(t,n)}}function ig(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),Lt(t,n)}}function rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function fg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=vl,a=Tc):a=Il,t.setTexture2D(e||a,r)}function hg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nl,r)}function pg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fl,r)}function mg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ul,r)}function gg(i){switch(i){case 5126:return Zm;case 35664:return Jm;case 35665:return Qm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return sg;case 35669:case 35673:return og;case 5125:return cg;case 36294:return lg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(i,e){i.uniform1fv(this.addr,e)}function vg(i,e){const t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function yg(i,e){const t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function xg(i,e){const t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Sg(i,e){const t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mg(i,e){const t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Eg(i,e){const t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bg(i,e){i.uniform1iv(this.addr,e)}function Tg(i,e){i.uniform2iv(this.addr,e)}function Ag(i,e){i.uniform3iv(this.addr,e)}function wg(i,e){i.uniform4iv(this.addr,e)}function Cg(i,e){i.uniform1uiv(this.addr,e)}function Rg(i,e){i.uniform2uiv(this.addr,e)}function Pg(i,e){i.uniform3uiv(this.addr,e)}function Lg(i,e){i.uniform4uiv(this.addr,e)}function Dg(i,e,t){const n=this.cache,r=e.length,a=Va(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Il,a[s])}function Ig(i,e,t){const n=this.cache,r=e.length,a=Va(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Nl,a[s])}function Ug(i,e,t){const n=this.cache,r=e.length,a=Va(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Fl,a[s])}function Ng(i,e,t){const n=this.cache,r=e.length,a=Va(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Ul,a[s])}function Fg(i){switch(i){case 5126:return _g;case 35664:return vg;case 35665:return yg;case 35666:return xg;case 35674:return Sg;case 35675:return Mg;case 35676:return Eg;case 5124:case 35670:return bg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return wg;case 5125:return Cg;case 36294:return Rg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gg(t.type)}}class Bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Ls=/(\w+)(\])?(\[|\.)?/g;function Lc(i,e){i.seq.push(e),i.map[e.id]=e}function Hg(i,e,t){const n=i.name,r=n.length;for(Ls.lastIndex=0;;){const a=Ls.exec(n),s=Ls.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Lc(t,l===void 0?new Og(o,i,e):new Bg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new zg(o),Lc(t,f)),t=f}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Hg(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Dc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const kg=37297;let Vg=0;function Gg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Wg(i){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i);let n;switch(e===t?n="":e===Ia&&t===Da?n="LinearDisplayP3ToLinearSRGB":e===Da&&t===Ia&&(n="LinearSRGBToLinearDisplayP3"),i){case ui:case Ha:return[n,"LinearTransferOETF"];case Mn:case wo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Gg(i.getShaderSource(e),s)}else return r}function Xg(i,e){const t=Wg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yg(i,e){let t;switch(e){case jd:t="Linear";break;case $d:t="Reinhard";break;case qd:t="OptimizedCineon";break;case Kd:t="ACESFilmic";break;case Jd:t="AgX";break;case Qd:t="Neutral";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new k;function jg(){ut.getLuminanceCoefficients(pa);const i=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function qg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function br(i){return i!==""}function Uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(Zg,Qg)}const Jg=new Map;function Qg(i,e){let t=Ze[e];if(t===void 0){const n=Jg.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _o(t)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(e_,t_)}function t_(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Oc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===al?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function i_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function a_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Xd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function s_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o_(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=n_(t),l=i_(t),u=r_(t),f=a_(t),d=s_(t),m=$g(t),v=qg(a),x=r.createProgram();let p,h,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(br).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(br).join(`
`),h.length>0&&(h+=`
`)):(p=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),h=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ri?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),s=_o(s),s=Uc(s,t),s=Nc(s,t),o=_o(o),o=Uc(o,t),o=Nc(o,t),s=Fc(s),o=Fc(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=R+p+s,C=R+h+o,F=Dc(r,r.VERTEX_SHADER,b),U=Dc(r,r.FRAGMENT_SHADER,C);r.attachShader(x,F),r.attachShader(x,U),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(w){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(F).trim(),P=r.getShaderInfoLog(U).trim();let N=!0,V=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,F,U);else{const Q=Ic(r,F,"vertex"),Y=Ic(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+ee+`
`+Q+`
`+Y)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||P==="")&&(V=!1);V&&(w.diagnostics={runnable:N,programLog:ee,vertexShader:{log:q,prefix:p},fragmentShader:{log:P,prefix:h}})}r.deleteShader(F),r.deleteShader(U),z=new wa(r,x),T=Kg(r,x)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,kg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=U,this}let c_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new u_(e),t.set(e,n)),n}}class u_{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}}function d_(i,e,t,n,r,a,s){const o=new Ml,c=new l_,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function p(T,E,w,ee,q){const P=ee.fog,N=q.geometry,V=T.isMeshStandardMaterial?ee.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||V),Y=Q&&Q.mapping===za?Q.image.height:null,ne=v[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const he=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ve=he!==void 0?he.length:0;let Xe=0;N.morphAttributes.position!==void 0&&(Xe=1),N.morphAttributes.normal!==void 0&&(Xe=2),N.morphAttributes.color!==void 0&&(Xe=3);let Ie,j,de,Ee;if(ne){const nt=En[ne];Ie=nt.vertexShader,j=nt.fragmentShader}else Ie=T.vertexShader,j=T.fragmentShader,c.update(T),de=c.getVertexShaderID(T),Ee=c.getFragmentShaderID(T);const Me=i.getRenderTarget(),Ve=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,$e=!!T.map,ft=!!T.matcap,I=!!Q,mt=!!T.aoMap,tt=!!T.lightMap,it=!!T.bumpMap,we=!!T.normalMap,_t=!!T.displacementMap,Ge=!!T.emissiveMap,We=!!T.metalnessMap,L=!!T.roughnessMap,S=T.anisotropy>0,K=T.clearcoat>0,ae=T.dispersion>0,oe=T.iridescence>0,ie=T.sheen>0,Re=T.transmission>0,ge=S&&!!T.anisotropyMap,xe=K&&!!T.clearcoatMap,Pe=K&&!!T.clearcoatNormalMap,le=K&&!!T.clearcoatRoughnessMap,Se=oe&&!!T.iridescenceMap,Qe=oe&&!!T.iridescenceThicknessMap,Oe=ie&&!!T.sheenColorMap,me=ie&&!!T.sheenRoughnessMap,Ce=!!T.specularMap,ze=!!T.specularColorMap,ht=!!T.specularIntensityMap,y=Re&&!!T.transmissionMap,G=Re&&!!T.thicknessMap,W=!!T.gradientMap,J=!!T.alphaMap,ue=T.alphaTest>0,Le=!!T.alphaHash,He=!!T.extensions;let yt=ri;T.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(yt=i.toneMapping);const xt={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:Ie,fragmentShader:j,defines:T.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ui,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:ft,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:Y,aoMap:mt,lightMap:tt,bumpMap:it,normalMap:we,displacementMap:d&&_t,emissiveMap:Ge,normalMapObjectSpace:we&&T.normalMapType===af,normalMapTangentSpace:we&&T.normalMapType===rf,metalnessMap:We,roughnessMap:L,anisotropy:S,anisotropyMap:ge,clearcoat:K,clearcoatMap:xe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:le,dispersion:ae,iridescence:oe,iridescenceMap:Se,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:Oe,sheenRoughnessMap:me,specularMap:Ce,specularColorMap:ze,specularIntensityMap:ht,transmission:Re,transmissionMap:y,thicknessMap:G,gradientMap:W,opaque:T.transparent===!1&&T.blending===Ji&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:ue,alphaHash:Le,combine:T.combine,mapUv:$e&&x(T.map.channel),aoMapUv:mt&&x(T.aoMap.channel),lightMapUv:tt&&x(T.lightMap.channel),bumpMapUv:it&&x(T.bumpMap.channel),normalMapUv:we&&x(T.normalMap.channel),displacementMapUv:_t&&x(T.displacementMap.channel),emissiveMapUv:Ge&&x(T.emissiveMap.channel),metalnessMapUv:We&&x(T.metalnessMap.channel),roughnessMapUv:L&&x(T.roughnessMap.channel),anisotropyMapUv:ge&&x(T.anisotropyMap.channel),clearcoatMapUv:xe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(T.sheenRoughnessMap.channel),specularMapUv:Ce&&x(T.specularMap.channel),specularColorMapUv:ze&&x(T.specularColorMap.channel),specularIntensityMapUv:ht&&x(T.specularIntensityMap.channel),transmissionMapUv:y&&x(T.transmissionMap.channel),thicknessMapUv:G&&x(T.thicknessMap.channel),alphaMapUv:J&&x(T.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(we||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&($e||J),fog:!!P,useFog:T.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===kn,flipSided:T.side===Zt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function h(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const w in T.defines)E.push(w),E.push(T.defines[w]);return T.isRawShaderMaterial===!1&&(R(E,T),b(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function R(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function b(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),T.push(o.mask)}function C(T){const E=v[T.type];let w;if(E){const ee=En[E];w=$f.clone(ee.uniforms)}else w=T.uniforms;return w}function F(T,E){let w;for(let ee=0,q=u.length;ee<q;ee++){const P=u[ee];if(P.cacheKey===E){w=P,++w.usedTimes;break}}return w===void 0&&(w=new o_(i,E,T,a),u.push(w)),w}function U(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function D(T){c.remove(T)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:C,acquireProgram:F,releaseProgram:U,releaseShaderCache:D,programs:u,dispose:z}}function f_(){let i=new WeakMap;function e(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function t(a){i.delete(a)}function n(a,s,o){i.get(a)[s]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function h_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(f,d,m,v,x,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=x,h.group=p),e++,h}function o(f,d,m,v,x,p){const h=s(f,d,m,v,x,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(f,d,m,v,x,p){const h=s(f,d,m,v,x,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||h_),n.length>1&&n.sort(d||Bc),r.length>1&&r.sort(d||Bc)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:u,sort:l}}function p_(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new zc,i.set(n,[s])):r>=a.length?(s=new zc,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function m_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new st};break;case"SpotLight":t={position:new k,direction:new k,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function g_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let __=0;function v_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y_(i){const e=new m_,t=g_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const r=new k,a=new Mt,s=new Mt;function o(l){let u=0,f=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,v=0,x=0,p=0,h=0,R=0,b=0,C=0,F=0,U=0,D=0;l.sort(v_);for(let T=0,E=l.length;T<E;T++){const w=l[T],ee=w.color,q=w.intensity,P=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=ee.r*q,f+=ee.g*q,d+=ee.b*q;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],q);D++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,Y=t.get(w);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=w.shadow.matrix,R++}n.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(ee).multiplyScalar(q),V.distance=P,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[x]=V;const Q=w.shadow;if(w.map&&(n.spotLightMap[F]=w.map,F++,Q.updateMatrices(w),w.castShadow&&U++),n.spotLightMatrix[x]=Q.matrix,w.castShadow){const Y=t.get(w);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=N,C++}x++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(ee).multiplyScalar(q),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=V,p++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const Q=w.shadow,Y=t.get(w);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=N,n.pointShadowMatrix[v]=w.shadow.matrix,b++}n.point[v]=V,v++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(q),V.groundColor.copy(w.groundColor).multiplyScalar(q),n.hemi[h]=V,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const z=n.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==x||z.rectAreaLength!==p||z.hemiLength!==h||z.numDirectionalShadows!==R||z.numPointShadows!==b||z.numSpotShadows!==C||z.numSpotMaps!==F||z.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=C+F-U,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,z.directionalLength=m,z.pointLength=v,z.spotLength=x,z.rectAreaLength=p,z.hemiLength=h,z.numDirectionalShadows=R,z.numPointShadows=b,z.numSpotShadows=C,z.numSpotMaps=F,z.numLightProbes=D,n.version=__++)}function c(l,u){let f=0,d=0,m=0,v=0,x=0;const p=u.matrixWorldInverse;for(let h=0,R=l.length;h<R;h++){const b=l[h];if(b.isDirectionalLight){const C=n.directional[f];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),f++}else if(b.isSpotLight){const C=n.spot[m];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const C=n.rectArea[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),s.identity(),a.copy(b.matrixWorld),a.premultiply(p),s.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),v++}else if(b.isPointLight){const C=n.point[d];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const C=n.hemi[x];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function Hc(i){const e=new y_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function x_(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Hc(i),e.set(r,[o])):a>=s.length?(o=new Hc(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class S_ extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T_(i,e,t){let n=new Ro;const r=new Ke,a=new Ke,s=new It,o=new S_({depthPacking:nf}),c=new M_,l={},u=t.maxTextureSize,f={[ci]:Zt,[Zt]:ci,[kn]:kn},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new un;v.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new An(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let h=this.type;this.render=function(U,D,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(ii),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=h!==zn&&this.type===zn,P=h===zn&&this.type!==zn;for(let N=0,V=U.length;N<V;N++){const Q=U[N],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ne=Y.getFrameExtents();if(r.multiply(ne),a.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ne.x),r.x=a.x*ne.x,Y.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ne.y),r.y=a.y*ne.y,Y.mapSize.y=a.y)),Y.map===null||q===!0||P===!0){const ve=this.type!==zn?{minFilter:wt,magFilter:wt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new _n(r.x,r.y,ve),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const he=Y.getViewportCount();for(let ve=0;ve<he;ve++){const Xe=Y.getViewport(ve);s.set(a.x*Xe.x,a.y*Xe.y,a.x*Xe.z,a.y*Xe.w),ee.viewport(s),Y.updateMatrices(Q,ve),n=Y.getFrustum(),C(D,z,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===zn&&R(Y,z),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(T,E,w)};function R(U,D){const z=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new _n(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(D,null,z,d,x,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(D,null,z,m,x,null)}function b(U,D,z,T){let E=null;const w=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(w!==void 0)E=w;else if(E=z.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ee=E.uuid,q=D.uuid;let P=l[ee];P===void 0&&(P={},l[ee]=P);let N=P[q];N===void 0&&(N=E.clone(),P[q]=N,D.addEventListener("dispose",F)),E=N}if(E.visible=D.visible,E.wireframe=D.wireframe,T===zn?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:f[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ee=i.properties.get(E);ee.light=z}return E}function C(U,D,z,T,E){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&E===zn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const q=e.update(U),P=U.material;if(Array.isArray(P)){const N=q.groups;for(let V=0,Q=N.length;V<Q;V++){const Y=N[V],ne=P[Y.materialIndex];if(ne&&ne.visible){const he=b(U,ne,T,E);U.onBeforeShadow(i,U,D,z,q,he,Y),i.renderBufferDirect(z,null,q,he,U,Y),U.onAfterShadow(i,U,D,z,q,he,Y)}}}else if(P.visible){const N=b(U,P,T,E);U.onBeforeShadow(i,U,D,z,q,N,null),i.renderBufferDirect(z,null,q,N,U,null),U.onAfterShadow(i,U,D,z,q,N,null)}}const ee=U.children;for(let q=0,P=ee.length;q<P;q++)C(ee[q],D,z,T,E)}function F(U){U.target.removeEventListener("dispose",F);for(const z in l){const T=l[z],E=U.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function A_(i){function e(){let y=!1;const G=new It;let W=null;const J=new It(0,0,0,0);return{setMask:function(ue){W!==ue&&!y&&(i.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){y=ue},setClear:function(ue,Le,He,yt,xt){xt===!0&&(ue*=yt,Le*=yt,He*=yt),G.set(ue,Le,He,yt),J.equals(G)===!1&&(i.clearColor(ue,Le,He,yt),J.copy(G))},reset:function(){y=!1,W=null,J.set(-1,0,0,0)}}}function t(){let y=!1,G=null,W=null,J=null;return{setTest:function(ue){ue?Ee(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ue){G!==ue&&!y&&(i.depthMask(ue),G=ue)},setFunc:function(ue){if(W!==ue){switch(ue){case Bd:i.depthFunc(i.NEVER);break;case zd:i.depthFunc(i.ALWAYS);break;case Hd:i.depthFunc(i.LESS);break;case Pa:i.depthFunc(i.LEQUAL);break;case kd:i.depthFunc(i.EQUAL);break;case Vd:i.depthFunc(i.GEQUAL);break;case Gd:i.depthFunc(i.GREATER);break;case Wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=ue}},setLocked:function(ue){y=ue},setClear:function(ue){J!==ue&&(i.clearDepth(ue),J=ue)},reset:function(){y=!1,G=null,W=null,J=null}}}function n(){let y=!1,G=null,W=null,J=null,ue=null,Le=null,He=null,yt=null,xt=null;return{setTest:function(nt){y||(nt?Ee(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(nt){G!==nt&&!y&&(i.stencilMask(nt),G=nt)},setFunc:function(nt,Et,at){(W!==nt||J!==Et||ue!==at)&&(i.stencilFunc(nt,Et,at),W=nt,J=Et,ue=at)},setOp:function(nt,Et,at){(Le!==nt||He!==Et||yt!==at)&&(i.stencilOp(nt,Et,at),Le=nt,He=Et,yt=at)},setLocked:function(nt){y=nt},setClear:function(nt){xt!==nt&&(i.clearStencil(nt),xt=nt)},reset:function(){y=!1,G=null,W=null,J=null,ue=null,Le=null,He=null,yt=null,xt=null}}}const r=new e,a=new t,s=new n,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],m=null,v=!1,x=null,p=null,h=null,R=null,b=null,C=null,F=null,U=new st(0,0,0),D=0,z=!1,T=null,E=null,w=null,ee=null,q=null;const P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),N=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),N=V>=2);let Y=null,ne={};const he=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Xe=new It().fromArray(he),Ie=new It().fromArray(ve);function j(y,G,W,J){const ue=new Uint8Array(4),Le=i.createTexture();i.bindTexture(y,Le),i.texParameteri(y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<W;He++)y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY?i.texImage3D(G,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(G+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Le}const de={};de[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),Ee(i.DEPTH_TEST),a.setFunc(Pa),it(!1),we(Xo),Ee(i.CULL_FACE),mt(ii);function Ee(y){l[y]!==!0&&(i.enable(y),l[y]=!0)}function Me(y){l[y]!==!1&&(i.disable(y),l[y]=!1)}function Ve(y,G){return u[y]!==G?(i.bindFramebuffer(y,G),u[y]=G,y===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=G),y===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=G),!0):!1}function Ye(y,G){let W=d,J=!1;if(y){W=f.get(G),W===void 0&&(W=[],f.set(G,W));const ue=y.textures;if(W.length!==ue.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,He=ue.length;Le<He;Le++)W[Le]=i.COLOR_ATTACHMENT0+Le;W.length=ue.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function $e(y){return m!==y?(i.useProgram(y),m=y,!0):!1}const ft={[Mi]:i.FUNC_ADD,[Sd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};ft[Ed]=i.MIN,ft[bd]=i.MAX;const I={[Td]:i.ZERO,[Ad]:i.ONE,[wd]:i.SRC_COLOR,[Os]:i.SRC_ALPHA,[Id]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Rd]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[Bs]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Pd]:i.ONE_MINUS_DST_ALPHA,[Ud]:i.CONSTANT_COLOR,[Nd]:i.ONE_MINUS_CONSTANT_COLOR,[Fd]:i.CONSTANT_ALPHA,[Od]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(y,G,W,J,ue,Le,He,yt,xt,nt){if(y===ii){v===!0&&(Me(i.BLEND),v=!1);return}if(v===!1&&(Ee(i.BLEND),v=!0),y!==xd){if(y!==x||nt!==z){if((p!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,b=Mi),nt)switch(y){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}h=null,R=null,C=null,F=null,U.set(0,0,0),D=0,x=y,z=nt}return}ue=ue||G,Le=Le||W,He=He||J,(G!==p||ue!==b)&&(i.blendEquationSeparate(ft[G],ft[ue]),p=G,b=ue),(W!==h||J!==R||Le!==C||He!==F)&&(i.blendFuncSeparate(I[W],I[J],I[Le],I[He]),h=W,R=J,C=Le,F=He),(yt.equals(U)===!1||xt!==D)&&(i.blendColor(yt.r,yt.g,yt.b,xt),U.copy(yt),D=xt),x=y,z=!1}function tt(y,G){y.side===kn?Me(i.CULL_FACE):Ee(i.CULL_FACE);let W=y.side===Zt;G&&(W=!W),it(W),y.blending===Ji&&y.transparent===!1?mt(ii):mt(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),a.setFunc(y.depthFunc),a.setTest(y.depthTest),a.setMask(y.depthWrite),r.setMask(y.colorWrite);const J=y.stencilWrite;s.setTest(J),J&&(s.setMask(y.stencilWriteMask),s.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),s.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Ge(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(y){T!==y&&(y?i.frontFace(i.CW):i.frontFace(i.CCW),T=y)}function we(y){y!==_d?(Ee(i.CULL_FACE),y!==E&&(y===Xo?i.cullFace(i.BACK):y===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),E=y}function _t(y){y!==w&&(N&&i.lineWidth(y),w=y)}function Ge(y,G,W){y?(Ee(i.POLYGON_OFFSET_FILL),(ee!==G||q!==W)&&(i.polygonOffset(G,W),ee=G,q=W)):Me(i.POLYGON_OFFSET_FILL)}function We(y){y?Ee(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function L(y){y===void 0&&(y=i.TEXTURE0+P-1),Y!==y&&(i.activeTexture(y),Y=y)}function S(y,G,W){W===void 0&&(Y===null?W=i.TEXTURE0+P-1:W=Y);let J=ne[W];J===void 0&&(J={type:void 0,texture:void 0},ne[W]=J),(J.type!==y||J.texture!==G)&&(Y!==W&&(i.activeTexture(W),Y=W),i.bindTexture(y,G||de[y]),J.type=y,J.texture=G)}function K(){const y=ne[Y];y!==void 0&&y.type!==void 0&&(i.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Pe(){try{i.texStorage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Oe(y){Xe.equals(y)===!1&&(i.scissor(y.x,y.y,y.z,y.w),Xe.copy(y))}function me(y){Ie.equals(y)===!1&&(i.viewport(y.x,y.y,y.z,y.w),Ie.copy(y))}function Ce(y,G){let W=c.get(G);W===void 0&&(W=new WeakMap,c.set(G,W));let J=W.get(y);J===void 0&&(J=i.getUniformBlockIndex(G,y.name),W.set(y,J))}function ze(y,G){const J=c.get(G).get(y);o.get(G)!==J&&(i.uniformBlockBinding(G,J,y.__bindingPointIndex),o.set(G,J))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Y=null,ne={},u={},f=new WeakMap,d=[],m=null,v=!1,x=null,p=null,h=null,R=null,b=null,C=null,F=null,U=new st(0,0,0),D=0,z=!1,T=null,E=null,w=null,ee=null,q=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:Ee,disable:Me,bindFramebuffer:Ve,drawBuffers:Ye,useProgram:$e,setBlending:mt,setMaterial:tt,setFlipSided:it,setCullFace:we,setLineWidth:_t,setPolygonOffset:Ge,setScissorTest:We,activeTexture:L,bindTexture:S,unbindTexture:K,compressedTexImage2D:ae,compressedTexImage3D:oe,texImage2D:Se,texImage3D:Qe,updateUBOMapping:Ce,uniformBlockBinding:ze,texStorage2D:Pe,texStorage3D:le,texSubImage2D:ie,texSubImage3D:Re,compressedTexSubImage2D:ge,compressedTexSubImage3D:xe,scissor:Oe,viewport:me,reset:ht}}function kc(i,e,t,n){const r=w_(n);switch(t){case dl:return i*e;case hl:return i*e;case pl:return i*e*2;case ml:return i*e/r.components*r.byteLength;case bo:return i*e/r.components*r.byteLength;case gl:return i*e*2/r.components*r.byteLength;case To:return i*e*2/r.components*r.byteLength;case fl:return i*e*3/r.components*r.byteLength;case Xt:return i*e*4/r.components*r.byteLength;case Ao:return i*e*4/r.components*r.byteLength;case Ma:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ba:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ws:case Ys:return Math.max(i,16)*Math.max(e,8)/4;case Gs:case Xs:return Math.max(i,8)*Math.max(e,8)/2;case js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Js:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Aa:case uo:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _l:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w_(i){switch(i){case Gn:case cl:return{byteLength:1,components:1};case Rr:case ll:case Lr:return{byteLength:2,components:1};case Mo:case Eo:return{byteLength:2,components:4};case Ai:case So:case rn:return{byteLength:4,components:1};case ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C_(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,S){return m?new OffscreenCanvas(L,S):Na("canvas")}function x(L,S,K){let ae=1;const oe=We(L);if((oe.width>K||oe.height>K)&&(ae=K/Math.max(oe.width,oe.height)),ae<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ie=Math.floor(ae*oe.width),Re=Math.floor(ae*oe.height);f===void 0&&(f=v(ie,Re));const ge=S?v(ie,Re):f;return ge.width=ie,ge.height=Re,ge.getContext("2d").drawImage(L,0,0,ie,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+Re+")."),ge}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function p(L){return L.generateMipmaps&&L.minFilter!==wt&&L.minFilter!==gn}function h(L){i.generateMipmap(L)}function R(L,S,K,ae,oe=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=S;if(S===i.RED&&(K===i.FLOAT&&(ie=i.R32F),K===i.HALF_FLOAT&&(ie=i.R16F),K===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.R8UI),K===i.UNSIGNED_SHORT&&(ie=i.R16UI),K===i.UNSIGNED_INT&&(ie=i.R32UI),K===i.BYTE&&(ie=i.R8I),K===i.SHORT&&(ie=i.R16I),K===i.INT&&(ie=i.R32I)),S===i.RG&&(K===i.FLOAT&&(ie=i.RG32F),K===i.HALF_FLOAT&&(ie=i.RG16F),K===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.RG8UI),K===i.UNSIGNED_SHORT&&(ie=i.RG16UI),K===i.UNSIGNED_INT&&(ie=i.RG32UI),K===i.BYTE&&(ie=i.RG8I),K===i.SHORT&&(ie=i.RG16I),K===i.INT&&(ie=i.RG32I)),S===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),S===i.RGBA){const Re=oe?La:ut.getTransfer(ae);K===i.FLOAT&&(ie=i.RGBA32F),K===i.HALF_FLOAT&&(ie=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ie=Re===gt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(L,S){let K;return L?S===null||S===Ai||S===ir?K=i.DEPTH24_STENCIL8:S===rn?K=i.DEPTH32F_STENCIL8:S===Rr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===ir?K=i.DEPTH_COMPONENT24:S===rn?K=i.DEPTH_COMPONENT32F:S===Rr&&(K=i.DEPTH_COMPONENT16),K}function C(L,S){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==wt&&L.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function F(L){const S=L.target;S.removeEventListener("dispose",F),D(S),S.isVideoTexture&&u.delete(S)}function U(L){const S=L.target;S.removeEventListener("dispose",U),T(S)}function D(L){const S=n.get(L);if(S.__webglInit===void 0)return;const K=L.source,ae=d.get(K);if(ae){const oe=ae[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&z(L),Object.keys(ae).length===0&&d.delete(K)}n.remove(L)}function z(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const K=L.source,ae=d.get(K);delete ae[S.__cacheKey],s.memory.textures--}function T(L){const S=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let oe=0;oe<S.__webglFramebuffer[ae].length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[ae][oe]);else i.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[ae]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=L.textures;for(let ae=0,oe=K.length;ae<oe;ae++){const ie=n.get(K[ae]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),s.memory.textures--),n.remove(K[ae])}n.remove(L)}let E=0;function w(){E=0}function ee(){const L=E;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),E+=1,L}function q(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function P(L,S){const K=n.get(L);if(L.isVideoTexture&&_t(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const ae=L.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(K,L,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function N(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Ie(K,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function V(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){Ie(K,L,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function Q(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){j(K,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}const Y={[ks]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},ne={[wt]:i.NEAREST,[ef]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[os]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},he={[sf]:i.NEVER,[ff]:i.ALWAYS,[of]:i.LESS,[vl]:i.LEQUAL,[cf]:i.EQUAL,[df]:i.GEQUAL,[lf]:i.GREATER,[uf]:i.NOTEQUAL};function ve(L,S){if(S.type===rn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===os||S.magFilter===jr||S.magFilter===Ti||S.minFilter===gn||S.minFilter===os||S.minFilter===jr||S.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Y[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ne[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,he[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wt||S.minFilter!==jr&&S.minFilter!==Ti||S.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(L,S){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",F));const ae=S.source;let oe=d.get(ae);oe===void 0&&(oe={},d.set(ae,oe));const ie=q(S);if(ie!==L.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,K=!0),oe[ie].usedTimes++;const Re=oe[L.__cacheKey];Re!==void 0&&(oe[L.__cacheKey].usedTimes--,Re.usedTimes===0&&z(S)),L.__cacheKey=ie,L.__webglTexture=oe[ie].texture}return K}function Ie(L,S,K){let ae=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=i.TEXTURE_3D);const oe=Xe(L,S),ie=S.source;t.bindTexture(ae,L.__webglTexture,i.TEXTURE0+K);const Re=n.get(ie);if(ie.version!==Re.__version||oe===!0){t.activeTexture(i.TEXTURE0+K);const ge=ut.getPrimaries(ut.workingColorSpace),xe=S.colorSpace===ni?null:ut.getPrimaries(S.colorSpace),Pe=S.colorSpace===ni||ge===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let le=x(S.image,!1,r.maxTextureSize);le=Ge(S,le);const Se=a.convert(S.format,S.colorSpace),Qe=a.convert(S.type);let Oe=R(S.internalFormat,Se,Qe,S.colorSpace,S.isVideoTexture);ve(ae,S);let me;const Ce=S.mipmaps,ze=S.isVideoTexture!==!0,ht=Re.__version===void 0||oe===!0,y=ie.dataReady,G=C(S,le);if(S.isDepthTexture)Oe=b(S.format===rr,S.type),ht&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Oe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,Se,Qe,null));else if(S.isDataTexture)if(Ce.length>0){ze&&ht&&t.texStorage2D(i.TEXTURE_2D,G,Oe,Ce[0].width,Ce[0].height);for(let W=0,J=Ce.length;W<J;W++)me=Ce[W],ze?y&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,me.width,me.height,Se,Qe,me.data):t.texImage2D(i.TEXTURE_2D,W,Oe,me.width,me.height,0,Se,Qe,me.data);S.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(i.TEXTURE_2D,G,Oe,le.width,le.height),y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Se,Qe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,Se,Qe,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,Oe,Ce[0].width,Ce[0].height,le.depth);for(let W=0,J=Ce.length;W<J;W++)if(me=Ce[W],S.format!==Xt)if(Se!==null)if(ze){if(y)if(S.layerUpdates.size>0){const ue=kc(me.width,me.height,S.format,S.type);for(const Le of S.layerUpdates){const He=me.data.subarray(Le*ue/me.data.BYTES_PER_ELEMENT,(Le+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Le,me.width,me.height,1,Se,He,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,le.depth,Se,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Oe,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,le.depth,Se,Qe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Oe,me.width,me.height,le.depth,0,Se,Qe,me.data)}else{ze&&ht&&t.texStorage2D(i.TEXTURE_2D,G,Oe,Ce[0].width,Ce[0].height);for(let W=0,J=Ce.length;W<J;W++)me=Ce[W],S.format!==Xt?Se!==null?ze?y&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,me.width,me.height,Se,me.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Oe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?y&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,me.width,me.height,Se,Qe,me.data):t.texImage2D(i.TEXTURE_2D,W,Oe,me.width,me.height,0,Se,Qe,me.data)}else if(S.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,Oe,le.width,le.height,le.depth),y)if(S.layerUpdates.size>0){const W=kc(le.width,le.height,S.format,S.type);for(const J of S.layerUpdates){const ue=le.data.subarray(J*W/le.data.BYTES_PER_ELEMENT,(J+1)*W/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,le.width,le.height,1,Se,Qe,ue)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Qe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,Se,Qe,le.data);else if(S.isData3DTexture)ze?(ht&&t.texStorage3D(i.TEXTURE_3D,G,Oe,le.width,le.height,le.depth),y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Qe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,Se,Qe,le.data);else if(S.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(i.TEXTURE_2D,G,Oe,le.width,le.height);else{let W=le.width,J=le.height;for(let ue=0;ue<G;ue++)t.texImage2D(i.TEXTURE_2D,ue,Oe,W,J,0,Se,Qe,null),W>>=1,J>>=1}}else if(Ce.length>0){if(ze&&ht){const W=We(Ce[0]);t.texStorage2D(i.TEXTURE_2D,G,Oe,W.width,W.height)}for(let W=0,J=Ce.length;W<J;W++)me=Ce[W],ze?y&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Se,Qe,me):t.texImage2D(i.TEXTURE_2D,W,Oe,Se,Qe,me);S.generateMipmaps=!1}else if(ze){if(ht){const W=We(le);t.texStorage2D(i.TEXTURE_2D,G,Oe,W.width,W.height)}y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Qe,le)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Se,Qe,le);p(S)&&h(ae),Re.__version=ie.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function j(L,S,K){if(S.image.length!==6)return;const ae=Xe(L,S),oe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const ie=n.get(oe);if(oe.version!==ie.__version||ae===!0){t.activeTexture(i.TEXTURE0+K);const Re=ut.getPrimaries(ut.workingColorSpace),ge=S.colorSpace===ni?null:ut.getPrimaries(S.colorSpace),xe=S.colorSpace===ni||Re===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!Pe&&!le?Se[J]=x(S.image[J],!0,r.maxCubemapSize):Se[J]=le?S.image[J].image:S.image[J],Se[J]=Ge(S,Se[J]);const Qe=Se[0],Oe=a.convert(S.format,S.colorSpace),me=a.convert(S.type),Ce=R(S.internalFormat,Oe,me,S.colorSpace),ze=S.isVideoTexture!==!0,ht=ie.__version===void 0||ae===!0,y=oe.dataReady;let G=C(S,Qe);ve(i.TEXTURE_CUBE_MAP,S);let W;if(Pe){ze&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Ce,Qe.width,Qe.height);for(let J=0;J<6;J++){W=Se[J].mipmaps;for(let ue=0;ue<W.length;ue++){const Le=W[ue];S.format!==Xt?Oe!==null?ze?y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ce,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Le.width,Le.height,Oe,me,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ce,Le.width,Le.height,0,Oe,me,Le.data)}}}else{if(W=S.mipmaps,ze&&ht){W.length>0&&G++;const J=We(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Ce,J.width,J.height)}for(let J=0;J<6;J++)if(le){ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,Oe,me,Se[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,Se[J].width,Se[J].height,0,Oe,me,Se[J].data);for(let ue=0;ue<W.length;ue++){const He=W[ue].image[J].image;ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,He.width,He.height,Oe,me,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ce,He.width,He.height,0,Oe,me,He.data)}}else{ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,me,Se[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,Oe,me,Se[J]);for(let ue=0;ue<W.length;ue++){const Le=W[ue];ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Oe,me,Le.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ce,Oe,me,Le.image[J])}}}p(S)&&h(i.TEXTURE_CUBE_MAP),ie.__version=oe.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function de(L,S,K,ae,oe,ie){const Re=a.convert(K.format,K.colorSpace),ge=a.convert(K.type),xe=R(K.internalFormat,Re,ge,K.colorSpace);if(!n.get(S).__hasExternalTextures){const le=Math.max(1,S.width>>ie),Se=Math.max(1,S.height>>ie);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,xe,le,Se,S.depth,0,Re,ge,null):t.texImage2D(oe,ie,xe,le,Se,0,Re,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),we(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,oe,n.get(K).__webglTexture,0,it(S)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,oe,n.get(K).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(L,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const ae=S.depthTexture,oe=ae&&ae.isDepthTexture?ae.type:null,ie=b(S.stencilBuffer,oe),Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=it(S);we(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ie,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,L)}else{const ae=S.textures;for(let oe=0;oe<ae.length;oe++){const ie=ae[oe],Re=a.convert(ie.format,ie.colorSpace),ge=a.convert(ie.type),xe=R(ie.internalFormat,Re,ge,ie.colorSpace),Pe=it(S);K&&we(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,xe,S.width,S.height):we(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const ae=n.get(S.depthTexture).__webglTexture,oe=it(S);if(S.depthTexture.format===Qi)we(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===rr)we(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ve(L){const S=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Me(S.__webglFramebuffer,L)}else if(K){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ee(S.__webglDepthbuffer[ae],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ee(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(L,S,K){const ae=n.get(L);S!==void 0&&de(ae.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ve(L)}function $e(L){const S=L.texture,K=n.get(L),ae=n.get(S);L.addEventListener("dispose",U);const oe=L.textures,ie=L.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=S.version,s.memory.textures++),ie){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let xe=0;xe<S.mipmaps.length;xe++)K.__webglFramebuffer[ge][xe]=i.createFramebuffer()}else K.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)K.__webglFramebuffer[ge]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ge=0,xe=oe.length;ge<xe;ge++){const Pe=n.get(oe[ge]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),s.memory.textures++)}if(L.samples>0&&we(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const xe=oe[ge];K.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const Pe=a.convert(xe.format,xe.colorSpace),le=a.convert(xe.type),Se=R(xe.internalFormat,Pe,le,xe.colorSpace,L.isXRRenderTarget===!0),Qe=it(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Se,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),ve(i.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)de(K.__webglFramebuffer[ge][xe],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else de(K.__webglFramebuffer[ge],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(S)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ge=0,xe=oe.length;ge<xe;ge++){const Pe=oe[ge],le=n.get(Pe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),ve(i.TEXTURE_2D,Pe),de(K.__webglFramebuffer,L,Pe,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),p(Pe)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ae.__webglTexture),ve(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)de(K.__webglFramebuffer[xe],L,S,i.COLOR_ATTACHMENT0,ge,xe);else de(K.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,ge,0);p(S)&&h(ge),t.unbindTexture()}L.depthBuffer&&Ve(L)}function ft(L){const S=L.textures;for(let K=0,ae=S.length;K<ae;K++){const oe=S[K];if(p(oe)){const ie=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(oe).__webglTexture;t.bindTexture(ie,Re),h(ie),t.unbindTexture()}}}const I=[],mt=[];function tt(L){if(L.samples>0){if(we(L)===!1){const S=L.textures,K=L.width,ae=L.height;let oe=i.COLOR_BUFFER_BIT;const ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(L),ge=S.length>1;if(ge)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Pe=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,K,ae,0,0,K,ae,oe,i.NEAREST),c===!0&&(I.length=0,mt.length=0,I.push(i.COLOR_ATTACHMENT0+xe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(ie),mt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Pe=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function it(L){return Math.min(r.maxSamples,L.samples)}function we(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(L){const S=s.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function Ge(L,S){const K=L.colorSpace,ae=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==ui&&K!==ni&&(ut.getTransfer(K)===gt?(ae!==Xt||oe!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=w,this.setTexture2D=P,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=Q,this.rebindTextures=Ye,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=we}function R_(i,e){function t(n,r=ni){let a;const s=ut.getTransfer(r);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cl)return i.BYTE;if(n===ll)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===So)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Lr)return i.HALF_FLOAT;if(n===dl)return i.ALPHA;if(n===fl)return i.RGB;if(n===Xt)return i.RGBA;if(n===hl)return i.LUMINANCE;if(n===pl)return i.LUMINANCE_ALPHA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===gl)return i.RG;if(n===To)return i.RG_INTEGER;if(n===Ao)return i.RGBA_INTEGER;if(n===Ma||n===Ea||n===ba||n===Ta)if(s===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gs||n===Ws||n===Xs||n===Ys)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Gs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ws)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ys)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===js||n===$s||n===qs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===js||n===$s)return s===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===qs)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ks||n===Zs||n===Js||n===Qs||n===eo||n===to||n===no||n===io||n===ro||n===ao||n===so||n===oo||n===co||n===lo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ks)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zs)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Js)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qs)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===uo||n===fo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Aa)return s===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===ho||n===po||n===mo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class P_ extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ma extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class Ds{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ma;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Jt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:D_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends Ci{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,v=null;const x=new U_,p=t.getContextAttributes();let h=null,R=null;const b=[],C=[],F=new Ke;let U=null;const D=new cn;D.layers.enable(1),D.viewport=new It;const z=new cn;z.layers.enable(2),z.viewport=new It;const T=[D,z],E=new P_;E.layers.enable(1),E.layers.enable(2);let w=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=b[j];return de===void 0&&(de=new Ds,b[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=b[j];return de===void 0&&(de=new Ds,b[j]=de),de.getGripSpace()},this.getHand=function(j){let de=b[j];return de===void 0&&(de=new Ds,b[j]=de),de.getHandSpace()};function q(j){const de=C.indexOf(j.inputSource);if(de===-1)return;const Ee=b[de];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,l||s),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function P(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let j=0;j<b.length;j++){const de=C[j];de!==null&&(C[j]=null,b[j].disconnect(de))}w=null,ee=null,x.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,R=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new _n(m.framebufferWidth,m.framebufferHeight,{format:Xt,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,Ee=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?rr:Qi,Ee=p.stencil?ir:Ai);const Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new _n(d.textureWidth,d.textureHeight,{format:Xt,type:Gn,depthTexture:new Dl(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(j){for(let de=0;de<j.removed.length;de++){const Ee=j.removed[de],Me=C.indexOf(Ee);Me>=0&&(C[Me]=null,b[Me].disconnect(Ee))}for(let de=0;de<j.added.length;de++){const Ee=j.added[de];let Me=C.indexOf(Ee);if(Me===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=C.length){C.push(Ee),Me=Ye;break}else if(C[Ye]===null){C[Ye]=Ee,Me=Ye;break}if(Me===-1)break}const Ve=b[Me];Ve&&Ve.connect(Ee)}}const V=new k,Q=new k;function Y(j,de,Ee){V.setFromMatrixPosition(de.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);const Me=V.distanceTo(Q),Ve=de.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,$e=Ve[14]/(Ve[10]-1),ft=Ve[14]/(Ve[10]+1),I=(Ve[9]+1)/Ve[5],mt=(Ve[9]-1)/Ve[5],tt=(Ve[8]-1)/Ve[0],it=(Ye[8]+1)/Ye[0],we=$e*tt,_t=$e*it,Ge=Me/(-tt+it),We=Ge*-tt;de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(We),j.translateZ(Ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const L=$e+Ge,S=ft+Ge,K=we-We,ae=_t+(Me-We),oe=I*ft/S*L,ie=mt*ft/S*L;j.projectionMatrix.makePerspective(K,ae,oe,ie,L,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ne(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),E.near=z.near=D.near=j.near,E.far=z.far=D.far=j.far,(w!==E.near||ee!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,ee=E.far,D.near=w,D.far=ee,z.near=w,z.far=ee,D.updateProjectionMatrix(),z.updateProjectionMatrix(),j.updateProjectionMatrix());const de=j.parent,Ee=E.cameras;ne(E,de);for(let Me=0;Me<Ee.length;Me++)ne(Ee[Me],de);Ee.length===2?Y(E,D,z):E.projectionMatrix.copy(D.projectionMatrix),he(j,E,de)};function he(j,de,Ee){Ee===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ve=null;function Xe(j,de){if(u=de.getViewerPose(l||s),v=de,u!==null){const Ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let Me=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,Me=!0);for(let Ye=0;Ye<Ee.length;Ye++){const $e=Ee[Ye];let ft=null;if(m!==null)ft=m.getViewport($e);else{const mt=f.getViewSubImage(d,$e);ft=mt.viewport,Ye===0&&(e.setRenderTargetTextures(R,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(R))}let I=T[Ye];I===void 0&&(I=new cn,I.layers.enable(Ye),I.viewport=new It,T[Ye]=I),I.matrix.fromArray($e.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray($e.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ft.x,ft.y,ft.width,ft.height),Ye===0&&(E.matrix.copy(I.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Me===!0&&E.cameras.push(I)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const Ye=f.getDepthInformation(Ee[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(e,Ye,r.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const Me=C[Ee],Ve=b[Ee];Me!==null&&Ve!==void 0&&Ve.update(Me,de,l||s)}ve&&ve(j,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),v=null}const Ie=new Pl;Ie.setAnimationLoop(Xe),this.setAnimationLoop=function(j){ve=j},this.dispose=function(){}}}const xi=new Wn,F_=new Mt;function O_(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,wl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,R,b,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),f(p,h)):h.isMeshPhongMaterial?(a(p,h),u(p,h)):h.isMeshStandardMaterial?(a(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,C)):h.isMeshMatcapMaterial?(a(p,h),v(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),x(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,R,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Zt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Zt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const R=e.get(h),b=R.envMap,C=R.envMapRotation;b&&(p.envMap.value=b,xi.copy(C),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(xi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,R,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*R,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,R){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const R=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function B_(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,b){const C=b.program;n.uniformBlockBinding(R,C)}function l(R,b){let C=r[R.id];C===void 0&&(v(R),C=u(R),r[R.id]=C,R.addEventListener("dispose",p));const F=b.program;n.updateUBOMapping(R,F);const U=e.render.frame;a[R.id]!==U&&(d(R),a[R.id]=U)}function u(R){const b=f();R.__bindingPointIndex=b;const C=i.createBuffer(),F=R.__size,U=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,F,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,C),C}function f(){for(let R=0;R<o;R++)if(s.indexOf(R)===-1)return s.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const b=r[R.id],C=R.uniforms,F=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let U=0,D=C.length;U<D;U++){const z=Array.isArray(C[U])?C[U]:[C[U]];for(let T=0,E=z.length;T<E;T++){const w=z[T];if(m(w,U,T,F)===!0){const ee=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let P=0;for(let N=0;N<q.length;N++){const V=q[N],Q=x(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,ee+P,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,P),P+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,b,C,F){const U=R.value,D=b+"_"+C;if(F[D]===void 0)return typeof U=="number"||typeof U=="boolean"?F[D]=U:F[D]=U.clone(),!0;{const z=F[D];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return F[D]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function v(R){const b=R.uniforms;let C=0;const F=16;for(let D=0,z=b.length;D<z;D++){const T=Array.isArray(b[D])?b[D]:[b[D]];for(let E=0,w=T.length;E<w;E++){const ee=T[E],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let P=0,N=q.length;P<N;P++){const V=q[P],Q=x(V),Y=C%F,ne=Y%Q.boundary,he=Y+ne;C+=ne,he!==0&&F-he<Q.storage&&(C+=F-he),ee.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=C,C+=Q.storage}}}const U=C%F;return U>0&&(C+=F-U),R.__size=C,R.__cache={},this}function x(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function p(R){const b=R.target;b.removeEventListener("dispose",p);const C=s.indexOf(b.__bindingPointIndex);s.splice(C,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete a[b.id]}function h(){for(const R in r)i.deleteBuffer(r[R]);s=[],r={},a={}}return{bind:c,update:l,dispose:h}}class z_{constructor(e={}){const{canvas:t=Rf(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=s;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const h=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=ri,this.toneMappingExposure=1;const b=this;let C=!1,F=0,U=0,D=null,z=-1,T=null;const E=new It,w=new It;let ee=null;const q=new st(0);let P=0,N=t.width,V=t.height,Q=1,Y=null,ne=null;const he=new It(0,0,N,V),ve=new It(0,0,N,V);let Xe=!1;const Ie=new Ro;let j=!1,de=!1;const Ee=new Mt,Me=new k,Ve=new It,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function ft(){return D===null?Q:1}let I=n;function mt(M,B){return t.getContext(M,B)}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xo}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const B="webgl2";if(I=mt(B,M),I===null)throw mt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let tt,it,we,_t,Ge,We,L,S,K,ae,oe,ie,Re,ge,xe,Pe,le,Se,Qe,Oe,me,Ce,ze,ht;function y(){tt=new Xm(I),tt.init(),Ce=new R_(I,tt),it=new zm(I,tt,e,Ce),we=new A_(I),_t=new $m(I),Ge=new f_,We=new C_(I,tt,we,Ge,it,Ce,_t),L=new km(b),S=new Wm(b),K=new th(I),ze=new Om(I,K),ae=new Ym(I,K,_t,ze),oe=new Km(I,ae,K,_t),Qe=new qm(I,it,We),Pe=new Hm(Ge),ie=new d_(b,L,S,tt,it,ze,Pe),Re=new O_(b,Ge),ge=new p_,xe=new x_(tt),Se=new Fm(b,L,S,we,oe,d,c),le=new T_(b,oe,it),ht=new B_(I,_t,it,we),Oe=new Bm(I,tt,_t),me=new jm(I,tt,_t),_t.programs=ie.programs,b.capabilities=it,b.extensions=tt,b.properties=Ge,b.renderLists=ge,b.shadowMap=le,b.state=we,b.info=_t}y();const G=new N_(b,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(N,V,!1))},this.getSize=function(M){return M.set(N,V)},this.setSize=function(M,B,X=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,V=B,t.width=Math.floor(M*Q),t.height=Math.floor(B*Q),X===!0&&(t.style.width=M+"px",t.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(N*Q,V*Q).floor()},this.setDrawingBufferSize=function(M,B,X){N=M,V=B,Q=X,t.width=Math.floor(M*X),t.height=Math.floor(B*X),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(he)},this.setViewport=function(M,B,X,$){M.isVector4?he.set(M.x,M.y,M.z,M.w):he.set(M,B,X,$),we.viewport(E.copy(he).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(ve)},this.setScissor=function(M,B,X,$){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,B,X,$),we.scissor(w.copy(ve).multiplyScalar(Q).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){we.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){ne=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(M=!0,B=!0,X=!0){let $=0;if(M){let H=!1;if(D!==null){const pe=D.texture.format;H=pe===Ao||pe===To||pe===bo}if(H){const pe=D.texture.type,ye=pe===Gn||pe===Ai||pe===Rr||pe===ir||pe===Mo||pe===Eo,Te=Se.getClearColor(),Ae=Se.getClearAlpha(),Ne=Te.r,Be=Te.g,Ue=Te.b;ye?(m[0]=Ne,m[1]=Be,m[2]=Ue,m[3]=Ae,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Ne,v[1]=Be,v[2]=Ue,v[3]=Ae,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}B&&($|=I.DEPTH_BUFFER_BIT),X&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),xe.dispose(),Ge.dispose(),L.dispose(),S.dispose(),oe.dispose(),ze.dispose(),ht.dispose(),ie.dispose(),G.dispose(),G.removeEventListener("sessionstart",at),G.removeEventListener("sessionend",Vt),vt.stop()};function W(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=_t.autoReset,B=le.enabled,X=le.autoUpdate,$=le.needsUpdate,H=le.type;y(),_t.autoReset=M,le.enabled=B,le.autoUpdate=X,le.needsUpdate=$,le.type=H}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){const B=M.target;B.removeEventListener("dispose",Le),He(B)}function He(M){yt(M),Ge.remove(M)}function yt(M){const B=Ge.get(M).programs;B!==void 0&&(B.forEach(function(X){ie.releaseProgram(X)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,X,$,H,pe){B===null&&(B=Ye);const ye=H.isMesh&&H.matrixWorld.determinant()<0,Te=kr(M,B,X,$,H);we.setMaterial($,ye);let Ae=X.index,Ne=1;if($.wireframe===!0){if(Ae=ae.getWireframeAttribute(X),Ae===void 0)return;Ne=2}const Be=X.drawRange,Ue=X.attributes.position;let ot=Be.start*Ne,dt=(Be.start+Be.count)*Ne;pe!==null&&(ot=Math.max(ot,pe.start*Ne),dt=Math.min(dt,(pe.start+pe.count)*Ne)),Ae!==null?(ot=Math.max(ot,0),dt=Math.min(dt,Ae.count)):Ue!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,Ue.count));const pt=dt-ot;if(pt<0||pt===1/0)return;ze.setup(H,$,Te,X,Ae);let Ct,ct=Oe;if(Ae!==null&&(Ct=K.get(Ae),ct=me,ct.setIndex(Ct)),H.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*ft()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(H.isLine){let De=$.linewidth;De===void 0&&(De=1),we.setLineWidth(De*ft()),H.isLineSegments?ct.setMode(I.LINES):H.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else H.isPoints?ct.setMode(I.POINTS):H.isSprite&&ct.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ct.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const De=H._multiDrawStarts,St=H._multiDrawCounts,lt=H._multiDrawCount,Qt=Ae?K.get(Ae).bytesPerElement:1,fn=Ge.get($).currentProgram.getUniforms();for(let Ft=0;Ft<lt;Ft++)fn.setValue(I,"_gl_DrawID",Ft),ct.render(De[Ft]/Qt,St[Ft])}else if(H.isInstancedMesh)ct.renderInstances(ot,pt,H.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,St=Math.min(X.instanceCount,De);ct.renderInstances(ot,pt,St)}else ct.render(ot,pt)};function xt(M,B,X){M.transparent===!0&&M.side===kn&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Yn(M,B,X),M.side=ci,M.needsUpdate=!0,Yn(M,B,X),M.side=kn):Yn(M,B,X)}this.compile=function(M,B,X=null){X===null&&(X=M),p=xe.get(X),p.init(B),R.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==X&&M.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const $=new Set;return M.traverse(function(H){const pe=H.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const Te=pe[ye];xt(Te,X,H),$.add(Te)}else xt(pe,X,H),$.add(pe)}),R.pop(),p=null,$},this.compileAsync=function(M,B,X=null){const $=this.compile(M,B,X);return new Promise(H=>{function pe(){if($.forEach(function(ye){Ge.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){H(M);return}setTimeout(pe,10)}tt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let nt=null;function Et(M){nt&&nt(M)}function at(){vt.stop()}function Vt(){vt.start()}const vt=new Pl;vt.setAnimationLoop(Et),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(M){nt=M,G.setAnimationLoop(M),M===null?vt.stop():vt.start()},G.addEventListener("sessionstart",at),G.addEventListener("sessionend",Vt),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(B),B=G.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,B,D),p=xe.get(M,R.length),p.init(B),R.push(p),Ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ie.setFromProjectionMatrix(Ee),de=this.localClippingEnabled,j=Pe.init(this.clippingPlanes,de),x=ge.get(M,h.length),x.init(),h.push(x),G.enabled===!0&&G.isPresenting===!0){const pe=b.xr.getDepthSensingMesh();pe!==null&&jt(pe,B,-1/0,b.sortObjects)}jt(M,B,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Y,ne),$e=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,$e&&Se.addToRenderList(x,M),this.info.render.frame++,j===!0&&Pe.beginShadows();const X=p.state.shadowsArray;le.render(X,M,B),j===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,H=x.transmissive;if(p.setupLights(),B.isArrayCamera){const pe=B.cameras;if(H.length>0)for(let ye=0,Te=pe.length;ye<Te;ye++){const Ae=pe[ye];fi($,H,M,Ae)}$e&&Se.render(M);for(let ye=0,Te=pe.length;ye<Te;ye++){const Ae=pe[ye];Pn(x,M,Ae,Ae.viewport)}}else H.length>0&&fi($,H,M,B),$e&&Se.render(M),Pn(x,M,B);D!==null&&(We.updateMultisampleRenderTarget(D),We.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(b,M,B),ze.resetDefaultState(),z=-1,T=null,R.pop(),R.length>0?(p=R[R.length-1],j===!0&&Pe.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function jt(M,B,X,$){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){$&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const ye=oe.update(M),Te=M.material;Te.visible&&x.push(M,ye,Te,X,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){const ye=oe.update(M),Te=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ve.copy(ye.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const Ae=ye.groups;for(let Ne=0,Be=Ae.length;Ne<Be;Ne++){const Ue=Ae[Ne],ot=Te[Ue.materialIndex];ot&&ot.visible&&x.push(M,ye,ot,X,Ve.z,Ue)}}else Te.visible&&x.push(M,ye,Te,X,Ve.z,null)}}const pe=M.children;for(let ye=0,Te=pe.length;ye<Te;ye++)jt(pe[ye],B,X,$)}function Pn(M,B,X,$){const H=M.opaque,pe=M.transmissive,ye=M.transparent;p.setupLightsView(X),j===!0&&Pe.setGlobalState(b.clippingPlanes,X),$&&we.viewport(E.copy($)),H.length>0&&Xn(H,B,X),pe.length>0&&Xn(pe,B,X),ye.length>0&&Xn(ye,B,X),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function fi(M,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new _n(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Lr:Gn,minFilter:Ti,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const pe=p.state.transmissionRenderTarget[$.id],ye=$.viewport||E;pe.setSize(ye.z,ye.w);const Te=b.getRenderTarget();b.setRenderTarget(pe),b.getClearColor(q),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear(),$e&&Se.render(X);const Ae=b.toneMapping;b.toneMapping=ri;const Ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),j===!0&&Pe.setGlobalState(b.clippingPlanes,$),Xn(M,X,$),We.updateMultisampleRenderTarget(pe),We.updateRenderTargetMipmap(pe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ue=0,ot=B.length;Ue<ot;Ue++){const dt=B[Ue],pt=dt.object,Ct=dt.geometry,ct=dt.material,De=dt.group;if(ct.side===kn&&pt.layers.test($.layers)){const St=ct.side;ct.side=Zt,ct.needsUpdate=!0,Ri(pt,X,$,Ct,ct,De),ct.side=St,ct.needsUpdate=!0,Be=!0}}Be===!0&&(We.updateMultisampleRenderTarget(pe),We.updateRenderTargetMipmap(pe))}b.setRenderTarget(Te),b.setClearColor(q,P),Ne!==void 0&&($.viewport=Ne),b.toneMapping=Ae}function Xn(M,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let H=0,pe=M.length;H<pe;H++){const ye=M[H],Te=ye.object,Ae=ye.geometry,Ne=$===null?ye.material:$,Be=ye.group;Te.layers.test(X.layers)&&Ri(Te,B,X,Ae,Ne,Be)}}function Ri(M,B,X,$,H,pe){M.onBeforeRender(b,B,X,$,H,pe),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.transparent===!0&&H.side===kn&&H.forceSinglePass===!1?(H.side=Zt,H.needsUpdate=!0,b.renderBufferDirect(X,B,$,H,M,pe),H.side=ci,H.needsUpdate=!0,b.renderBufferDirect(X,B,$,H,M,pe),H.side=kn):b.renderBufferDirect(X,B,$,H,M,pe),M.onAfterRender(b,B,X,$,H,pe)}function Yn(M,B,X){B.isScene!==!0&&(B=Ye);const $=Ge.get(M),H=p.state.lights,pe=p.state.shadowsArray,ye=H.state.version,Te=ie.getParameters(M,H.state,pe,B,X),Ae=ie.getProgramCacheKey(Te);let Ne=$.programs;$.environment=M.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(M.isMeshStandardMaterial?S:L).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Le),Ne=new Map,$.programs=Ne);let Be=Ne.get(Ae);if(Be!==void 0){if($.currentProgram===Be&&$.lightsStateVersion===ye)return rt(M,Te),Be}else Te.uniforms=ie.getUniforms(M),M.onBeforeCompile(Te,b),Be=ie.acquireProgram(Te,Ae),Ne.set(Ae,Be),$.uniforms=Te.uniforms;const Ue=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Pe.uniform),rt(M,Te),$.needsLights=hi(M),$.lightsStateVersion=ye,$.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Be,$.uniformsList=null,Be}function Ln(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=wa.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function rt(M,B){const X=Ge.get(M);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function kr(M,B,X,$,H){B.isScene!==!0&&(B=Ye),We.resetTextureUnits();const pe=B.fog,ye=$.isMeshStandardMaterial?B.environment:null,Te=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ui,Ae=($.isMeshStandardMaterial?S:L).get($.envMap||ye),Ne=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,dt=!!X.morphAttributes.color;let pt=ri;$.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=b.toneMapping);const Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=Ct!==void 0?Ct.length:0,De=Ge.get($),St=p.state.lights;if(j===!0&&(de===!0||M!==T)){const $t=M===T&&$.id===z;Pe.setState($,M,$t)}let lt=!1;$.version===De.__version?(De.needsLights&&De.lightsStateVersion!==St.state.version||De.outputColorSpace!==Te||H.isBatchedMesh&&De.batching===!1||!H.isBatchedMesh&&De.batching===!0||H.isBatchedMesh&&De.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&De.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||H.isInstancedMesh&&De.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&De.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&De.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&De.instancingMorph===!1&&H.morphTexture!==null||De.envMap!==Ae||$.fog===!0&&De.fog!==pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Pe.numPlanes||De.numIntersection!==Pe.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Be||De.morphTargets!==Ue||De.morphNormals!==ot||De.morphColors!==dt||De.toneMapping!==pt||De.morphTargetsCount!==ct)&&(lt=!0):(lt=!0,De.__version=$.version);let Qt=De.currentProgram;lt===!0&&(Qt=Yn($,B,H));let fn=!1,Ft=!1,Dn=!1;const bt=Qt.getUniforms(),vn=De.uniforms;if(we.useProgram(Qt.program)&&(fn=!0,Ft=!0,Dn=!0),$.id!==z&&(z=$.id,Ft=!0),fn||T!==M){bt.setValue(I,"projectionMatrix",M.projectionMatrix),bt.setValue(I,"viewMatrix",M.matrixWorldInverse);const $t=bt.map.cameraPosition;$t!==void 0&&$t.setValue(I,Me.setFromMatrixPosition(M.matrixWorld)),it.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Ft=!0,Dn=!0)}if(H.isSkinnedMesh){bt.setOptional(I,H,"bindMatrix"),bt.setOptional(I,H,"bindMatrixInverse");const $t=H.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),bt.setValue(I,"boneTexture",$t.boneTexture,We))}H.isBatchedMesh&&(bt.setOptional(I,H,"batchingTexture"),bt.setValue(I,"batchingTexture",H._matricesTexture,We),bt.setOptional(I,H,"batchingIdTexture"),bt.setValue(I,"batchingIdTexture",H._indirectTexture,We),bt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(I,"batchingColorTexture",H._colorsTexture,We));const hr=X.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Qe.update(H,X,Qt),(Ft||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,bt.setValue(I,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(vn.envMap.value=Ae,vn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(vn.envMapIntensity.value=B.environmentIntensity),Ft&&(bt.setValue(I,"toneMappingExposure",b.toneMappingExposure),De.needsLights&&Pi(vn,Dn),pe&&$.fog===!0&&Re.refreshFogUniforms(vn,pe),Re.refreshMaterialUniforms(vn,$,Q,V,p.state.transmissionRenderTarget[M.id]),wa.upload(I,Ln(De),vn,We)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(wa.upload(I,Ln(De),vn,We),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(I,"center",H.center),bt.setValue(I,"modelViewMatrix",H.modelViewMatrix),bt.setValue(I,"normalMatrix",H.normalMatrix),bt.setValue(I,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const $t=$.uniformsGroups;for(let pr=0,yn=$t.length;pr<yn;pr++){const mr=$t[pr];ht.update(mr,Qt),ht.bind(mr,Qt)}}return Qt}function Pi(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function hi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,B,X){Ge.get(M.texture).__webglTexture=B,Ge.get(M.depthTexture).__webglTexture=X;const $=Ge.get(M);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,B){const X=Ge.get(M);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,X=0){D=M,F=B,U=X;let $=!0,H=null,pe=!1,ye=!1;if(M){const Ae=Ge.get(M);Ae.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(I.FRAMEBUFFER,null),$=!1):Ae.__webglFramebuffer===void 0?We.setupRenderTarget(M):Ae.__hasExternalTextures&&We.rebindTextures(M,Ge.get(M.texture).__webglTexture,Ge.get(M.depthTexture).__webglTexture);const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Be=Ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?H=Be[B][X]:H=Be[B],pe=!0):M.samples>0&&We.useMultisampledRTT(M)===!1?H=Ge.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[X]:H=Be,E.copy(M.viewport),w.copy(M.scissor),ee=M.scissorTest}else E.copy(he).multiplyScalar(Q).floor(),w.copy(ve).multiplyScalar(Q).floor(),ee=Xe;if(we.bindFramebuffer(I.FRAMEBUFFER,H)&&$&&we.drawBuffers(M,H),we.viewport(E),we.scissor(w),we.setScissorTest(ee),pe){const Ae=Ge.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,X)}else if(ye){const Ae=Ge.get(M.texture),Ne=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Ne)}z=-1},this.readRenderTargetPixels=function(M,B,X,$,H,pe,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){we.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=M.texture,Ne=Ae.format,Be=Ae.type;if(!it.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-$&&X>=0&&X<=M.height-H&&I.readPixels(B,X,$,H,Ce.convert(Ne),Ce.convert(Be),pe)}finally{const Ae=D!==null?Ge.get(D).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,B,X,$,H,pe,ye){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){we.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=M.texture,Ne=Ae.format,Be=Ae.type;if(!it.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=M.width-$&&X>=0&&X<=M.height-H){const Ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),I.readPixels(B,X,$,H,Ce.convert(Ne),Ce.convert(Be),0),I.flush();const ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Pf(I,ot,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe)}finally{I.deleteBuffer(Ue),I.deleteSync(ot)}return pe}}finally{const Ae=D!==null?Ge.get(D).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(M,B=null,X=0){M.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1]);const $=Math.pow(2,-X),H=Math.floor(M.image.width*$),pe=Math.floor(M.image.height*$),ye=B!==null?B.x:0,Te=B!==null?B.y:0;We.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ye,Te,H,pe),we.unbindTexture()},this.copyTextureToTexture=function(M,B,X=null,$=null,H=0){M.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,M=arguments[1],B=arguments[2],H=arguments[3]||0,X=null);let pe,ye,Te,Ae,Ne,Be;X!==null?(pe=X.max.x-X.min.x,ye=X.max.y-X.min.y,Te=X.min.x,Ae=X.min.y):(pe=M.image.width,ye=M.image.height,Te=0,Ae=0),$!==null?(Ne=$.x,Be=$.y):(Ne=0,Be=0);const Ue=Ce.convert(B.format),ot=Ce.convert(B.type);We.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const dt=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ct=I.getParameter(I.UNPACK_SKIP_PIXELS),ct=I.getParameter(I.UNPACK_SKIP_ROWS),De=I.getParameter(I.UNPACK_SKIP_IMAGES),St=M.isCompressedTexture?M.mipmaps[H]:M.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,Ne,Be,pe,ye,Ue,ot,St.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,Ne,Be,St.width,St.height,Ue,St.data):I.texSubImage2D(I.TEXTURE_2D,H,Ne,Be,pe,ye,Ue,ot,St),I.pixelStorei(I.UNPACK_ROW_LENGTH,dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De),H===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,B,X=null,$=null,H=0){M.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,M=arguments[2],B=arguments[3],H=arguments[4]||0);let pe,ye,Te,Ae,Ne,Be,Ue,ot,dt;const pt=M.isCompressedTexture?M.mipmaps[H]:M.image;X!==null?(pe=X.max.x-X.min.x,ye=X.max.y-X.min.y,Te=X.max.z-X.min.z,Ae=X.min.x,Ne=X.min.y,Be=X.min.z):(pe=pt.width,ye=pt.height,Te=pt.depth,Ae=0,Ne=0,Be=0),$!==null?(Ue=$.x,ot=$.y,dt=$.z):(Ue=0,ot=0,dt=0);const Ct=Ce.convert(B.format),ct=Ce.convert(B.type);let De;if(B.isData3DTexture)We.setTexture3D(B,0),De=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)We.setTexture2DArray(B,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const St=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qt=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),Ft=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be),M.isDataTexture||M.isData3DTexture?I.texSubImage3D(De,H,Ue,ot,dt,pe,ye,Te,Ct,ct,pt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(De,H,Ue,ot,dt,pe,ye,Te,Ct,pt.data):I.texSubImage3D(De,H,Ue,ot,dt,pe,ye,Te,Ct,ct,pt),I.pixelStorei(I.UNPACK_ROW_LENGTH,St),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qt),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ft),H===0&&B.generateMipmaps&&I.generateMipmap(De),we.unbindTexture()},this.initRenderTarget=function(M){Ge.get(M).__webglFramebuffer===void 0&&We.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){F=0,U=0,D=null,we.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wo?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Ha?"display-p3":"srgb"}}class Vc extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lo extends dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new k,Oa=new k,Gc=new Mt,Mr=new ka,ga=new Dr,Is=new k,Wc=new k;class H_ extends Yt{constructor(e=new un,t=new Lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Fa.fromBufferAttribute(t,r-1),Oa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Fa.distanceTo(Oa);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),ga.radius+=a,e.ray.intersectsSphere(ga)===!1)return;Gc.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(Gc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,s.start),v=Math.min(u.count,s.start+s.count);for(let x=m,p=v-1;x<p;x+=l){const h=u.getX(x),R=u.getX(x+1),b=_a(this,e,Mr,c,h,R);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(v-1),p=u.getX(m),h=_a(this,e,Mr,c,x,p);h&&t.push(h)}}else{const m=Math.max(0,s.start),v=Math.min(d.count,s.start+s.count);for(let x=m,p=v-1;x<p;x+=l){const h=_a(this,e,Mr,c,x,x+1);h&&t.push(h)}if(this.isLineLoop){const x=_a(this,e,Mr,c,v-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function _a(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(Fa.fromBufferAttribute(s,r),Oa.fromBufferAttribute(s,a),t.distanceSqToSegment(Fa,Oa,Is,Wc)>n)return;Is.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Is);if(!(c<e.near||c>e.far))return{distance:c,point:Wc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Xc=new k,Yc=new k;class Ol extends H_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Xc.fromBufferAttribute(t,r),Yc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Xc.distanceTo(Yc);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k_ extends dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jc=new Mt,vo=new ka,va=new Dr,ya=new k;class xa extends Yt{constructor(e=new un,t=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),va.radius+=a,e.ray.intersectsSphere(va)===!1)return;jc.copy(r).invert(),vo.copy(e.ray).applyMatrix4(jc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let v=d,x=m;v<x;v++){const p=l.getX(v);ya.fromBufferAttribute(f,p),$c(ya,p,c,r,e,t,this)}}else{const d=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let v=d,x=m;v<x;v++)ya.fromBufferAttribute(f,v),$c(ya,v,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function $c(i,e,t,n,r,a,s){const o=vo.distanceSqToPoint(i);if(o<t){const c=new k;vo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:s})}}class V_ extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kc extends Ol{constructor(e=10,t=10,n=4473924,r=8947848){n=new st(n),r=new st(r);const a=t/2,s=e/t,o=e/2,c=[],l=[];for(let d=0,m=0,v=-o;d<=t;d++,v+=s){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const x=d===a?n:r;x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3}const u=new un;u.setAttribute("position",new an(c,3)),u.setAttribute("color",new an(l,3));const f=new Lo({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class G_ extends Ol{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new un;r.setAttribute("position",new an(t,3)),r.setAttribute("color",new an(n,3));const a=new Lo({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,n){const r=new st,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(n),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);const Zc={type:"change"},Us={type:"start"},Jc={type:"end"},Sa=new ka,Qc=new ti,W_=Math.cos(70*go.DEG2RAD);class el extends Ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",xe),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zc),n.update(),a=r.NONE},this.update=function(){const y=new k,G=new wi().setFromUnitVectors(e.up,new k(0,1,0)),W=G.clone().invert(),J=new k,ue=new wi,Le=new k,He=2*Math.PI;return function(xt=null){const nt=n.object.position;y.copy(nt).sub(n.target),y.applyQuaternion(G),o.setFromVector3(y),n.autoRotate&&a===r.NONE&&ee(E(xt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Et=n.minAzimuthAngle,at=n.maxAzimuthAngle;isFinite(Et)&&isFinite(at)&&(Et<-Math.PI?Et+=He:Et>Math.PI&&(Et-=He),at<-Math.PI?at+=He:at>Math.PI&&(at-=He),Et<=at?o.theta=Math.max(Et,Math.min(at,o.theta)):o.theta=o.theta>(Et+at)/2?Math.max(Et,o.theta):Math.min(at,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Vt=!1;if(n.zoomToCursor&&U||n.object.isOrthographicCamera)o.radius=he(o.radius);else{const vt=o.radius;o.radius=he(o.radius*l),Vt=vt!=o.radius}if(y.setFromSpherical(o),y.applyQuaternion(W),nt.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&U){let vt=null;if(n.object.isPerspectiveCamera){const jt=y.length();vt=he(jt*l);const Pn=jt-vt;n.object.position.addScaledVector(C,Pn),n.object.updateMatrixWorld(),Vt=!!Pn}else if(n.object.isOrthographicCamera){const jt=new k(F.x,F.y,0);jt.unproject(n.object);const Pn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Vt=Pn!==n.object.zoom;const fi=new k(F.x,F.y,0);fi.unproject(n.object),n.object.position.sub(fi).add(jt),n.object.updateMatrixWorld(),vt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;vt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(vt).add(n.object.position):(Sa.origin.copy(n.object.position),Sa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Sa.direction))<W_?e.lookAt(n.target):(Qc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Sa.intersectPlane(Qc,n.target))))}else if(n.object.isOrthographicCamera){const vt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),vt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Vt=!0)}return l=1,U=!1,Vt||J.distanceToSquared(n.object.position)>s||8*(1-ue.dot(n.object.quaternion))>s||Le.distanceToSquared(n.target)>s?(n.dispatchEvent(Zc),J.copy(n.object.position),ue.copy(n.object.quaternion),Le.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Se),n.domElement.removeEventListener("pointerdown",We),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",Re,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",xe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const s=1e-6,o=new qc,c=new qc;let l=1;const u=new k,f=new Ke,d=new Ke,m=new Ke,v=new Ke,x=new Ke,p=new Ke,h=new Ke,R=new Ke,b=new Ke,C=new k,F=new Ke;let U=!1;const D=[],z={};let T=!1;function E(y){return y!==null?2*Math.PI/60*n.autoRotateSpeed*y:2*Math.PI/60/60*n.autoRotateSpeed}function w(y){const G=Math.abs(y*.01);return Math.pow(.95,n.zoomSpeed*G)}function ee(y){c.theta-=y}function q(y){c.phi-=y}const P=function(){const y=new k;return function(W,J){y.setFromMatrixColumn(J,0),y.multiplyScalar(-W),u.add(y)}}(),N=function(){const y=new k;return function(W,J){n.screenSpacePanning===!0?y.setFromMatrixColumn(J,1):(y.setFromMatrixColumn(J,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(W),u.add(y)}}(),V=function(){const y=new k;return function(W,J){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;y.copy(Le).sub(n.target);let He=y.length();He*=Math.tan(n.object.fov/2*Math.PI/180),P(2*W*He/ue.clientHeight,n.object.matrix),N(2*J*He/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(W*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),N(J*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Q(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(y,G){if(!n.zoomToCursor)return;U=!0;const W=n.domElement.getBoundingClientRect(),J=y-W.left,ue=G-W.top,Le=W.width,He=W.height;F.x=J/Le*2-1,F.y=-(ue/He)*2+1,C.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function he(y){return Math.max(n.minDistance,Math.min(n.maxDistance,y))}function ve(y){f.set(y.clientX,y.clientY)}function Xe(y){ne(y.clientX,y.clientX),h.set(y.clientX,y.clientY)}function Ie(y){v.set(y.clientX,y.clientY)}function j(y){d.set(y.clientX,y.clientY),m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const G=n.domElement;ee(2*Math.PI*m.x/G.clientHeight),q(2*Math.PI*m.y/G.clientHeight),f.copy(d),n.update()}function de(y){R.set(y.clientX,y.clientY),b.subVectors(R,h),b.y>0?Q(w(b.y)):b.y<0&&Y(w(b.y)),h.copy(R),n.update()}function Ee(y){x.set(y.clientX,y.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),V(p.x,p.y),v.copy(x),n.update()}function Me(y){ne(y.clientX,y.clientY),y.deltaY<0?Y(w(y.deltaY)):y.deltaY>0&&Q(w(y.deltaY)),n.update()}function Ve(y){let G=!1;switch(y.code){case n.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?ee(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?ee(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):V(-n.keyPanSpeed,0),G=!0;break}G&&(y.preventDefault(),n.update())}function Ye(y){if(D.length===1)f.set(y.pageX,y.pageY);else{const G=ze(y),W=.5*(y.pageX+G.x),J=.5*(y.pageY+G.y);f.set(W,J)}}function $e(y){if(D.length===1)v.set(y.pageX,y.pageY);else{const G=ze(y),W=.5*(y.pageX+G.x),J=.5*(y.pageY+G.y);v.set(W,J)}}function ft(y){const G=ze(y),W=y.pageX-G.x,J=y.pageY-G.y,ue=Math.sqrt(W*W+J*J);h.set(0,ue)}function I(y){n.enableZoom&&ft(y),n.enablePan&&$e(y)}function mt(y){n.enableZoom&&ft(y),n.enableRotate&&Ye(y)}function tt(y){if(D.length==1)d.set(y.pageX,y.pageY);else{const W=ze(y),J=.5*(y.pageX+W.x),ue=.5*(y.pageY+W.y);d.set(J,ue)}m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const G=n.domElement;ee(2*Math.PI*m.x/G.clientHeight),q(2*Math.PI*m.y/G.clientHeight),f.copy(d)}function it(y){if(D.length===1)x.set(y.pageX,y.pageY);else{const G=ze(y),W=.5*(y.pageX+G.x),J=.5*(y.pageY+G.y);x.set(W,J)}p.subVectors(x,v).multiplyScalar(n.panSpeed),V(p.x,p.y),v.copy(x)}function we(y){const G=ze(y),W=y.pageX-G.x,J=y.pageY-G.y,ue=Math.sqrt(W*W+J*J);R.set(0,ue),b.set(0,Math.pow(R.y/h.y,n.zoomSpeed)),Q(b.y),h.copy(R);const Le=(y.pageX+G.x)*.5,He=(y.pageY+G.y)*.5;ne(Le,He)}function _t(y){n.enableZoom&&we(y),n.enablePan&&it(y)}function Ge(y){n.enableZoom&&we(y),n.enableRotate&&tt(y)}function We(y){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",S)),!me(y)&&(Qe(y),y.pointerType==="touch"?Pe(y):K(y)))}function L(y){n.enabled!==!1&&(y.pointerType==="touch"?le(y):ae(y))}function S(y){switch(Oe(y),D.length){case 0:n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(Jc),a=r.NONE;break;case 1:const G=D[0],W=z[G];Pe({pointerId:G,pageX:W.x,pageY:W.y});break}}function K(y){let G;switch(y.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Hn.DOLLY:if(n.enableZoom===!1)return;Xe(y),a=r.DOLLY;break;case Hn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;Ie(y),a=r.PAN}else{if(n.enableRotate===!1)return;ve(y),a=r.ROTATE}break;case Hn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;ve(y),a=r.ROTATE}else{if(n.enablePan===!1)return;Ie(y),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Us)}function ae(y){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;j(y);break;case r.DOLLY:if(n.enableZoom===!1)return;de(y);break;case r.PAN:if(n.enablePan===!1)return;Ee(y);break}}function oe(y){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(y.preventDefault(),n.dispatchEvent(Us),Me(ie(y)),n.dispatchEvent(Jc))}function ie(y){const G=y.deltaMode,W={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(G){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return y.ctrlKey&&!T&&(W.deltaY*=10),W}function Re(y){y.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(y){y.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function xe(y){n.enabled===!1||n.enablePan===!1||Ve(y)}function Pe(y){switch(Ce(y),D.length){case 1:switch(n.touches.ONE){case ei.ROTATE:if(n.enableRotate===!1)return;Ye(y),a=r.TOUCH_ROTATE;break;case ei.PAN:if(n.enablePan===!1)return;$e(y),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(y),a=r.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(y),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Us)}function le(y){switch(Ce(y),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;tt(y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;it(y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ge(y),n.update();break;default:a=r.NONE}}function Se(y){n.enabled!==!1&&y.preventDefault()}function Qe(y){D.push(y.pointerId)}function Oe(y){delete z[y.pointerId];for(let G=0;G<D.length;G++)if(D[G]==y.pointerId){D.splice(G,1);return}}function me(y){for(let G=0;G<D.length;G++)if(D[G]==y.pointerId)return!0;return!1}function Ce(y){let G=z[y.pointerId];G===void 0&&(G=new Ke,z[y.pointerId]=G),G.set(y.pageX,y.pageY)}function ze(y){const G=y.pointerId===D[0]?D[1]:D[0];return z[G]}n.domElement.addEventListener("contextmenu",Se),n.domElement.addEventListener("pointerdown",We),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",oe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Re,{passive:!0,capture:!0}),this.update()}}var je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X_(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Ca={},Bl={},zl={};Object.defineProperty(zl,"__esModule",{value:!0});var Ga={};Object.defineProperty(Ga,"__esModule",{value:!0});Ga.Hierarchy=void 0;Ga.Hierarchy={parse:Y_};function Y_(i){return Object.entries(i).reduce((e,[t,n])=>(n===-1?e.pages[t]={}:n&&(e.nodes[t]={pointCount:n}),e),{nodes:{},pages:{}})}(function(i){var e=je&&je.__createBinding||(Object.create?function(n,r,a,s){s===void 0&&(s=a);var o=Object.getOwnPropertyDescriptor(r,a);(!o||("get"in o?!r.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(n,s,o)}:function(n,r,a,s){s===void 0&&(s=a),n[s]=r[a]}),t=je&&je.__exportStar||function(n,r){for(var a in n)a!=="default"&&!Object.prototype.hasOwnProperty.call(r,a)&&e(r,n,a)};Object.defineProperty(i,"__esModule",{value:!0}),t(zl,i),t(Ga,i)})(Bl);var Hl={},li={};Object.defineProperty(li,"__esModule",{value:!0});li.hierarchyItemLength=li.infoLength=void 0;li.infoLength=160;li.hierarchyItemLength=32;var Wa={},Do={},wn={};Object.defineProperty(wn,"__esModule",{value:!0});wn.evlrHeaderLength=wn.vlrHeaderLength=wn.minHeaderLength=void 0;wn.minHeaderLength=375;wn.vlrHeaderLength=54;wn.evlrHeaderLength=60;var Nr={},dn={},sr={};Object.defineProperty(sr,"__esModule",{value:!0});sr.getBigUint64=sr.parseBigInt=void 0;function j_(i){if(i>BigInt(Number.MAX_SAFE_INTEGER)||i<BigInt(-Number.MAX_SAFE_INTEGER))throw new Error(`Cannot convert bigint to number: ${i}`);return Number(i)}sr.parseBigInt=j_;function $_(i,e,t){if(i.getBigUint64)return i.getBigUint64(e,t);const[n,r]=t?[4,0]:[0,4],a=BigInt(i.getUint32(e+n,t)),s=BigInt(i.getUint32(e+r,t));return(a<<BigInt(32))+s}sr.getBigUint64=$_;var ai={};Object.defineProperty(ai,"__esModule",{value:!0});ai.toCString=ai.toDataView=ai.Binary=void 0;ai.Binary={toDataView:Io,toCString:kl};function Io(i){return new DataView(i.buffer,i.byteOffset,i.length)}ai.toDataView=Io;function kl(i){const e=Io(i);let t="";for(let n=0;n<e.byteLength;++n){const r=e.getInt8(n);if(r===0)return t;t+=String.fromCharCode(r)}return t}ai.toCString=kl;var Xa={};Object.defineProperty(Xa,"__esModule",{value:!0});Xa.Bounds=void 0;Xa.Bounds={min:q_,max:K_,mid:Uo,width:Vl,depth:Gl,height:Wl,cube:Z_,step:Xl,stepTo:J_,intersection:Q_};function q_(i){return[i[0],i[1],i[2]]}function K_(i){return[i[3],i[4],i[5]]}function Uo([i,e,t,n,r,a]){return[i+(n-i)/2,e+(r-e)/2,t+(a-t)/2]}function Vl(i){return i[3]-i[0]}function Gl(i){return i[4]-i[1]}function Wl(i){return i[5]-i[2]}function Z_(i){const e=Uo(i),t=Math.max(Vl(i),Gl(i),Wl(i))/2;return[e[0]-t,e[1]-t,e[2]-t,e[0]+t,e[1]+t,e[2]+t]}function Xl(i,[e,t,n]){const[r,a,s,o,c,l]=i,[u,f,d]=Uo(i);return[e?u:r,t?f:a,n?d:s,e?o:u,t?c:f,n?l:d]}function J_(i,[e,t,n,r]){for(let a=e-1;a>=0;--a)i=Xl(i,[t>>a&1,n>>a&1,r>>a&1]);return i}function Q_(i,e){return[Math.max(i[0],e[0]),Math.max(i[1],e[1]),Math.max(i[2],e[2]),Math.min(i[3],e[3]),Math.min(i[4],e[4]),Math.min(i[5],e[5])]}var Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});Ya.Dimension=void 0;const ev={int8:{type:"signed",size:1},int16:{type:"signed",size:2},int32:{type:"signed",size:4},int64:{type:"signed",size:8},uint8:{type:"unsigned",size:1},uint16:{type:"unsigned",size:2},uint32:{type:"unsigned",size:4},uint64:{type:"unsigned",size:8},float32:{type:"float",size:4},float64:{type:"float",size:8},float:{type:"float",size:4},double:{type:"float",size:8},bool:{type:"unsigned",size:1},boolean:{type:"unsigned",size:1}};Ya.Dimension={Type:ev,ctype:tv};function tv({type:i,size:e}){switch(i){case"signed":switch(e){case 1:return"int8";case 2:return"int16";case 4:return"int32";case 8:return"int64"}case"unsigned":switch(e){case 1:return"uint8";case 2:return"uint16";case 4:return"uint32";case 8:return"uint64"}case"float":switch(e){case 4:return"float";case 8:return"double"}}throw new Error(`Invalid dimension type/size: ${i}/${e}`)}var ja={},yo={exports:{}};(function(i,e){var t=typeof self<"u"?self:je,n=function(){function a(){this.fetch=!1,this.DOMException=t.DOMException}return a.prototype=t,new a}();(function(a){(function(s){var o={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function c(P){return P&&DataView.prototype.isPrototypeOf(P)}if(o.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(P){return P&&l.indexOf(Object.prototype.toString.call(P))>-1};function f(P){if(typeof P!="string"&&(P=String(P)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(P))throw new TypeError("Invalid character in header field name");return P.toLowerCase()}function d(P){return typeof P!="string"&&(P=String(P)),P}function m(P){var N={next:function(){var V=P.shift();return{done:V===void 0,value:V}}};return o.iterable&&(N[Symbol.iterator]=function(){return N}),N}function v(P){this.map={},P instanceof v?P.forEach(function(N,V){this.append(V,N)},this):Array.isArray(P)?P.forEach(function(N){this.append(N[0],N[1])},this):P&&Object.getOwnPropertyNames(P).forEach(function(N){this.append(N,P[N])},this)}v.prototype.append=function(P,N){P=f(P),N=d(N);var V=this.map[P];this.map[P]=V?V+", "+N:N},v.prototype.delete=function(P){delete this.map[f(P)]},v.prototype.get=function(P){return P=f(P),this.has(P)?this.map[P]:null},v.prototype.has=function(P){return this.map.hasOwnProperty(f(P))},v.prototype.set=function(P,N){this.map[f(P)]=d(N)},v.prototype.forEach=function(P,N){for(var V in this.map)this.map.hasOwnProperty(V)&&P.call(N,this.map[V],V,this)},v.prototype.keys=function(){var P=[];return this.forEach(function(N,V){P.push(V)}),m(P)},v.prototype.values=function(){var P=[];return this.forEach(function(N){P.push(N)}),m(P)},v.prototype.entries=function(){var P=[];return this.forEach(function(N,V){P.push([V,N])}),m(P)},o.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function x(P){if(P.bodyUsed)return Promise.reject(new TypeError("Already read"));P.bodyUsed=!0}function p(P){return new Promise(function(N,V){P.onload=function(){N(P.result)},P.onerror=function(){V(P.error)}})}function h(P){var N=new FileReader,V=p(N);return N.readAsArrayBuffer(P),V}function R(P){var N=new FileReader,V=p(N);return N.readAsText(P),V}function b(P){for(var N=new Uint8Array(P),V=new Array(N.length),Q=0;Q<N.length;Q++)V[Q]=String.fromCharCode(N[Q]);return V.join("")}function C(P){if(P.slice)return P.slice(0);var N=new Uint8Array(P.byteLength);return N.set(new Uint8Array(P)),N.buffer}function F(){return this.bodyUsed=!1,this._initBody=function(P){this._bodyInit=P,P?typeof P=="string"?this._bodyText=P:o.blob&&Blob.prototype.isPrototypeOf(P)?this._bodyBlob=P:o.formData&&FormData.prototype.isPrototypeOf(P)?this._bodyFormData=P:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(P)?this._bodyText=P.toString():o.arrayBuffer&&o.blob&&c(P)?(this._bodyArrayBuffer=C(P.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(P)||u(P))?this._bodyArrayBuffer=C(P):this._bodyText=P=Object.prototype.toString.call(P):this._bodyText="",this.headers.get("content-type")||(typeof P=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(P)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var P=x(this);if(P)return P;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?x(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var P=x(this);if(P)return P;if(this._bodyBlob)return R(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(b(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}var U=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function D(P){var N=P.toUpperCase();return U.indexOf(N)>-1?N:P}function z(P,N){N=N||{};var V=N.body;if(P instanceof z){if(P.bodyUsed)throw new TypeError("Already read");this.url=P.url,this.credentials=P.credentials,N.headers||(this.headers=new v(P.headers)),this.method=P.method,this.mode=P.mode,this.signal=P.signal,!V&&P._bodyInit!=null&&(V=P._bodyInit,P.bodyUsed=!0)}else this.url=String(P);if(this.credentials=N.credentials||this.credentials||"same-origin",(N.headers||!this.headers)&&(this.headers=new v(N.headers)),this.method=D(N.method||this.method||"GET"),this.mode=N.mode||this.mode||null,this.signal=N.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&V)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(V)}z.prototype.clone=function(){return new z(this,{body:this._bodyInit})};function T(P){var N=new FormData;return P.trim().split("&").forEach(function(V){if(V){var Q=V.split("="),Y=Q.shift().replace(/\+/g," "),ne=Q.join("=").replace(/\+/g," ");N.append(decodeURIComponent(Y),decodeURIComponent(ne))}}),N}function E(P){var N=new v,V=P.replace(/\r?\n[\t ]+/g," ");return V.split(/\r?\n/).forEach(function(Q){var Y=Q.split(":"),ne=Y.shift().trim();if(ne){var he=Y.join(":").trim();N.append(ne,he)}}),N}F.call(z.prototype);function w(P,N){N||(N={}),this.type="default",this.status=N.status===void 0?200:N.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in N?N.statusText:"OK",this.headers=new v(N.headers),this.url=N.url||"",this._initBody(P)}F.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},w.error=function(){var P=new w(null,{status:0,statusText:""});return P.type="error",P};var ee=[301,302,303,307,308];w.redirect=function(P,N){if(ee.indexOf(N)===-1)throw new RangeError("Invalid status code");return new w(null,{status:N,headers:{location:P}})},s.DOMException=a.DOMException;try{new s.DOMException}catch{s.DOMException=function(N,V){this.message=N,this.name=V;var Q=Error(N);this.stack=Q.stack},s.DOMException.prototype=Object.create(Error.prototype),s.DOMException.prototype.constructor=s.DOMException}function q(P,N){return new Promise(function(V,Q){var Y=new z(P,N);if(Y.signal&&Y.signal.aborted)return Q(new s.DOMException("Aborted","AbortError"));var ne=new XMLHttpRequest;function he(){ne.abort()}ne.onload=function(){var ve={status:ne.status,statusText:ne.statusText,headers:E(ne.getAllResponseHeaders()||"")};ve.url="responseURL"in ne?ne.responseURL:ve.headers.get("X-Request-URL");var Xe="response"in ne?ne.response:ne.responseText;V(new w(Xe,ve))},ne.onerror=function(){Q(new TypeError("Network request failed"))},ne.ontimeout=function(){Q(new TypeError("Network request failed"))},ne.onabort=function(){Q(new s.DOMException("Aborted","AbortError"))},ne.open(Y.method,Y.url,!0),Y.credentials==="include"?ne.withCredentials=!0:Y.credentials==="omit"&&(ne.withCredentials=!1),"responseType"in ne&&o.blob&&(ne.responseType="blob"),Y.headers.forEach(function(ve,Xe){ne.setRequestHeader(Xe,ve)}),Y.signal&&(Y.signal.addEventListener("abort",he),ne.onreadystatechange=function(){ne.readyState===4&&Y.signal.removeEventListener("abort",he)}),ne.send(typeof Y._bodyInit>"u"?null:Y._bodyInit)})}return q.polyfill=!0,a.fetch||(a.fetch=q,a.Headers=v,a.Request=z,a.Response=w),s.Headers=v,s.Request=z,s.Response=w,s.fetch=q,Object.defineProperty(s,"__esModule",{value:!0}),s})({})})(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var r=n;e=r.fetch,e.default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,i.exports=e})(yo,yo.exports);var nv=yo.exports;const iv={},rv=Object.freeze(Object.defineProperty({__proto__:null,default:iv},Symbol.toStringTag,{value:"Module"})),av=X_(rv);var sv=je&&je.__createBinding||(Object.create?function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}:function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]}),ov=je&&je.__setModuleDefault||(Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e}),cv=je&&je.__importStar||function(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)t!=="default"&&Object.prototype.hasOwnProperty.call(i,t)&&sv(e,i,t);return ov(e,i),e},lv=je&&je.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(ja,"__esModule",{value:!0});ja.Getter=void 0;const uv=lv(nv);ja.Getter={create:dv,http:Yl,file:jl};function dv(i){return typeof i=="function"?i:i.startsWith("http://")||i.startsWith("https://")?Yl(i):jl(i)}function Yl(i){return async function(t,n){if(t<0||n<0||t>n)throw new Error("Invalid range");const a=await(await(0,uv.default)(i,{headers:{Range:`bytes=${t}-${n-1}`}})).arrayBuffer();return new Uint8Array(a)}}function jl(i){return async function(t,n){const r=await Promise.resolve().then(()=>cv(av));async function a(s=0,o=1/0){if(s<0||o<0||s>o)throw new Error("Invalid range");await r.promises.access(i);const c=r.createReadStream(i,{start:s,end:o-1,autoClose:!0});return fv(c)}return a(t,n)}}async function fv(i){return await new Promise((e,t)=>{const n=[];i.on("data",r=>n.push(r)),i.on("error",t),i.on("end",()=>e(Buffer.concat(n)))})}var $l={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.Key=void 0,i.Key={create:e,parse:t,toString:n,step:r,up:a,compare:s,depth:o};function e(c,l=0,u=0,f=0){return typeof c!="number"?t(c):[c,l,u,f]}function t(c){if(typeof c!="string")return c;const[l,u,f,d,...m]=c.split("-").map(x=>parseInt(x,10)),v=[l,u,f,d];if(m.length!==0||v.some(x=>typeof x!="number"||Number.isNaN(x)))throw new Error(`Invalid key: ${c}`);return v}function n(c){return typeof c=="string"?c:c.join("-")}function r(c,[l,u,f]){const[d,m,v,x]=i.Key.create(c);return[d+1,m*2+l,v*2+u,x*2+f]}function a(c,l=1){const[u,f,d,m]=i.Key.create(c);return[u-l,f>>l,d>>l,m>>l]}function s(c,l){for(let u=0;u<c.length;++u){if(c[u]<l[u])return-1;if(c[u]>l[u])return 1}return 0}function o(c){return c[0]}})($l);var $a={};Object.defineProperty($a,"__esModule",{value:!0});$a.Scale=void 0;$a.Scale={apply:(i,e=1,t=0)=>(i-t)/e,unapply:(i,e=1,t=0)=>i*e+t};var qa={};Object.defineProperty(qa,"__esModule",{value:!0});qa.Step=void 0;qa.Step={fromIndex:hv,list:pv};function hv(i){if(i<0||i>=8)throw new Error(`Invalid step index: ${i}`);const e=i>>0&1?1:0,t=i>>1&1?1:0,n=i>>2&1?1:0;return[e,t,n]}function pv(){return[[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]]}(function(i){var e=je&&je.__createBinding||(Object.create?function(u,f,d,m){m===void 0&&(m=d);var v=Object.getOwnPropertyDescriptor(f,d);(!v||("get"in v?!f.__esModule:v.writable||v.configurable))&&(v={enumerable:!0,get:function(){return f[d]}}),Object.defineProperty(u,m,v)}:function(u,f,d,m){m===void 0&&(m=d),u[m]=f[d]}),t=je&&je.__exportStar||function(u,f){for(var d in u)d!=="default"&&!Object.prototype.hasOwnProperty.call(f,d)&&e(f,u,d)};Object.defineProperty(i,"__esModule",{value:!0}),i.Step=i.Scale=i.Key=i.Getter=i.Dimension=i.Bounds=i.Binary=void 0,t(sr,i);var n=ai;Object.defineProperty(i,"Binary",{enumerable:!0,get:function(){return n.Binary}});var r=Xa;Object.defineProperty(i,"Bounds",{enumerable:!0,get:function(){return r.Bounds}});var a=Ya;Object.defineProperty(i,"Dimension",{enumerable:!0,get:function(){return a.Dimension}});var s=ja;Object.defineProperty(i,"Getter",{enumerable:!0,get:function(){return s.Getter}});var o=$l;Object.defineProperty(i,"Key",{enumerable:!0,get:function(){return o.Key}});var c=$a;Object.defineProperty(i,"Scale",{enumerable:!0,get:function(){return c.Scale}});var l=qa;Object.defineProperty(i,"Step",{enumerable:!0,get:function(){return l.Step}})})(dn);var Fr={};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.ExtraBytes=void 0;const Ht=dn;Fr.ExtraBytes={getDimension:mv,parse:gv,parseOne:ql};const Ra=192;function mv({type:i,length:e}){switch(i){case"signed":case"unsigned":switch(e){case 1:case 2:case 4:case 8:return{type:i,size:e}}case"float":switch(e){case 4:case 8:return{type:i,size:e}}}}function gv(i){if(i.byteLength%Ra!==0)throw new Error(`Invalid extra bytes VLR length: ${i.byteLength}`);const e=[];for(let t=0;t<i.byteLength;t+=Ra)e.push(ql(i.slice(t,t+Ra)));return e}function ql(i){if(i.byteLength!==Ra)throw new Error(`Invalid extra bytes entry length: ${i.byteLength}`);const e=Ht.Binary.toDataView(i),t=Ht.Binary.toCString(i.slice(4,36)),n=Ht.Binary.toCString(i.slice(60,192)),r=e.getUint8(2),a=e.getUint8(3);if(r>=11)throw new Error(`Invalid extra bytes "type" value: ${r}`);if(r===0)return{name:t,description:n,length:a};const s=vv(a),o=_v(r);if(!o)throw new Error(`Failed to extract dimension type: ${r}`);const{type:c,size:l}=o;function u(d){switch(c){case"signed":return(0,Ht.parseBigInt)(e.getBigInt64(d,!0));case"unsigned":return(0,Ht.parseBigInt)((0,Ht.getBigUint64)(e,d,!0));case"float":return e.getFloat64(d,!0)}}const f={name:t,description:n,type:c,length:l};return s.hasNodata&&(f.nodata=u(40)),s.hasMin&&(f.min=u(64)),s.hasMax&&(f.max=u(88)),s.hasScale&&(f.scale=e.getFloat64(112)),s.hasOffset&&(f.offset=e.getFloat64(136)),f}function _v(i){switch(i){case 1:return Ht.Dimension.Type.uint8;case 2:return Ht.Dimension.Type.int8;case 3:return Ht.Dimension.Type.uint16;case 4:return Ht.Dimension.Type.int16;case 5:return Ht.Dimension.Type.uint32;case 6:return Ht.Dimension.Type.int32;case 7:return Ht.Dimension.Type.uint64;case 8:return Ht.Dimension.Type.int64;case 9:return Ht.Dimension.Type.float32;case 10:return Ht.Dimension.Type.float64}}function vv(i){return{hasNodata:!!(i&1),hasMin:!!(i>>1&1),hasMax:!!(i>>2&1),hasScale:!!(i>>3&1),hasOffset:!!(i>>4&1)}}Object.defineProperty(Nr,"__esModule",{value:!0});Nr.Dimensions=void 0;const yv=dn,xv=Fr;Nr.Dimensions={create:Mv};const{Type:Tt}=yv.Dimension,Sv={X:Tt.float64,Y:Tt.float64,Z:Tt.float64,Intensity:Tt.uint16,ReturnNumber:Tt.uint8,NumberOfReturns:Tt.uint8,ScanDirectionFlag:Tt.boolean,EdgeOfFlightLine:Tt.boolean,Classification:Tt.uint8,Synthetic:Tt.boolean,KeyPoint:Tt.boolean,Withheld:Tt.boolean,Overlap:Tt.boolean,ScanAngle:Tt.float32,UserData:Tt.uint8,PointSourceId:Tt.uint16,GpsTime:Tt.float64,Red:Tt.uint16,Green:Tt.uint16,Blue:Tt.uint16,ScannerChannel:Tt.uint8,Infrared:Tt.uint16};function Mv(i,e=[]){return Object.keys(i).reduce((t,n)=>{const r=Sv[n];if(r)return{...t,[n]:r};const a=e.find(o=>o.name===n),s=a&&xv.ExtraBytes.getDimension(a);if(s)return{...t,[n]:s};throw new Error(`Failed to look up LAS type: ${n}`)},{})}var Or={};Object.defineProperty(Or,"__esModule",{value:!0});Or.Extractor=void 0;const Cn=dn;Or.Extractor={create:Av};function Ev(i){switch(i){case 0:return 20;case 1:return 28;case 2:return 26;case 3:return 34;case 6:return 30;case 7:return 36;case 8:return 38;default:throw new Error(`Unsupported point data record format: ${i}`)}}function bv(i,e,{type:t,length:n}){const r=di(i);switch(t){case"signed":switch(n){case 1:return(a,s)=>a.getInt8(r(s)+e);case 2:return(a,s)=>a.getInt16(r(s)+e,!0);case 4:return(a,s)=>a.getInt32(r(s)+e,!0);case 8:return(a,s)=>(0,Cn.parseBigInt)(a.getBigInt64(r(s)+e,!0))}case"unsigned":switch(n){case 1:return(a,s)=>a.getUint8(r(s)+e);case 2:return(a,s)=>a.getUint16(r(s)+e,!0);case 4:return(a,s)=>a.getUint32(r(s)+e,!0);case 8:return(a,s)=>(0,Cn.parseBigInt)((0,Cn.getBigUint64)(a,r(s)+e,!0))}case"float":switch(n){case 4:return(a,s)=>a.getFloat32(r(s)+e,!0);case 8:return(a,s)=>a.getFloat64(r(s)+e,!0)}}}function Tv(i,e){let n=Ev(i.pointDataRecordFormat);return e.reduce((r,a)=>{const s=n;n+=a.length;const o=bv(i,s,a);if(!o)return r;const c=(l,u)=>Cn.Scale.unapply(o(l,u),a.scale,a.offset);return{...r,[a.name]:c}},{})}function Av(i,e=[]){const t=Tv(i,e);return{...(()=>{const{pointDataRecordFormat:r}=i;switch(r){case 0:return Ka(i);case 1:return wv(i);case 2:return Cv(i);case 3:return Rv(i);case 6:return Kl(i);case 7:return Zl(i);case 8:return Pv(i);default:throw new Error(`Unsupported point data record format: ${r}`)}})(),...t}}function Ka(i){const{scale:e,offset:t}=i,n=di(i);function r(o,c){return o.getUint8(n(c)+14)}function a(o,c){return o.getUint8(n(c)+15)}function s(o,c){return a(o,c)&31}return{X:(o,c)=>Cn.Scale.unapply(o.getInt32(n(c),!0),e[0],t[0]),Y:(o,c)=>Cn.Scale.unapply(o.getInt32(n(c)+4,!0),e[1],t[1]),Z:(o,c)=>Cn.Scale.unapply(o.getInt32(n(c)+8,!0),e[2],t[2]),Intensity:(o,c)=>o.getUint16(n(c)+12,!0),ReturnNumber:(o,c)=>r(o,c)&7,NumberOfReturns:(o,c)=>(r(o,c)&56)>>3,ScanDirectionFlag:(o,c)=>(r(o,c)&64)>>6,EdgeOfFlightLine:(o,c)=>(r(o,c)&128)>>7,Classification:(o,c)=>{const l=s(o,c);return l===12?0:l},Synthetic:(o,c)=>(a(o,c)&32)>>5,KeyPoint:(o,c)=>(a(o,c)&64)>>6,Withheld:(o,c)=>(a(o,c)&128)>>7,Overlap:(o,c)=>s(o,c)===12?1:0,ScanAngle:(o,c)=>o.getInt8(n(c)+16),UserData:(o,c)=>o.getUint8(n(c)+17),PointSourceId:(o,c)=>o.getUint16(n(c)+18,!0)}}function wv(i){const e=di(i);return{...Ka(i),GpsTime:(t,n)=>t.getFloat64(e(n)+20,!0)}}function Cv(i){const e=di(i);return{...Ka(i),Red:(t,n)=>t.getUint16(e(n)+20,!0),Green:(t,n)=>t.getUint16(e(n)+22,!0),Blue:(t,n)=>t.getUint16(e(n)+24,!0)}}function Rv(i){const e=di(i);return{...Ka(i),GpsTime:(t,n)=>t.getFloat64(e(n)+20,!0),Red:(t,n)=>t.getUint16(e(n)+28,!0),Green:(t,n)=>t.getUint16(e(n)+30,!0),Blue:(t,n)=>t.getUint16(e(n)+32,!0)}}function Kl(i){const{scale:e,offset:t}=i,n=di(i);function r(a,s){return a.getUint8(n(s)+15)}return{X:(a,s)=>Cn.Scale.unapply(a.getInt32(n(s),!0),e[0],t[0]),Y:(a,s)=>Cn.Scale.unapply(a.getInt32(n(s)+4,!0),e[1],t[1]),Z:(a,s)=>Cn.Scale.unapply(a.getInt32(n(s)+8,!0),e[2],t[2]),Intensity:(a,s)=>a.getUint16(n(s)+12,!0),ReturnNumber:(a,s)=>a.getUint16(n(s)+14,!0)&15,NumberOfReturns:(a,s)=>(a.getUint16(n(s)+14,!0)&240)>>4,Synthetic:(a,s)=>r(a,s)&1,KeyPoint:(a,s)=>(r(a,s)&2)>>1,Withheld:(a,s)=>(r(a,s)&4)>>2,Overlap:(a,s)=>(r(a,s)&8)>>3,ScannerChannel:(a,s)=>(r(a,s)&48)>>4,ScanDirectionFlag:(a,s)=>(r(a,s)&64)>>6,EdgeOfFlightLine:(a,s)=>(r(a,s)&128)>>7,Classification:(a,s)=>a.getUint8(n(s)+16),UserData:(a,s)=>a.getUint8(n(s)+17),ScanAngle:(a,s)=>a.getInt16(n(s)+18,!0)*.006,PointSourceId:(a,s)=>a.getUint16(n(s)+20,!0),GpsTime:(a,s)=>a.getFloat64(n(s)+22,!0)}}function Zl(i){const e=di(i);return{...Kl(i),Red:(t,n)=>t.getUint16(e(n)+30,!0),Green:(t,n)=>t.getUint16(e(n)+32,!0),Blue:(t,n)=>t.getUint16(e(n)+34,!0)}}function Pv(i){const e=di(i);return{...Zl(i),Infrared:(t,n)=>t.getUint16(e(n)+36,!0)}}function di(i){const{pointDataRecordLength:e}=i;return function(n){return n*e}}var Br={},or={};Object.defineProperty(or,"__esModule",{value:!0});or.formatGuid=or.parsePoint=void 0;const Jl=dn;function Lv(i){const e=Jl.Binary.toDataView(i);if(e.byteLength!==24)throw new Error(`Invalid tuple buffer length: ${e.byteLength}`);return[e.getFloat64(0,!0),e.getFloat64(8,!0),e.getFloat64(16,!0)]}or.parsePoint=Lv;function Dv(i){const e=Jl.Binary.toDataView(i);if(e.byteLength!==16)throw new Error(`Invalid GUID buffer length: ${e.byteLength}`);let t="";for(let n=0;n<e.byteLength;n+=4){const r=e.getUint32(n,!0);t+=r.toString(16).padStart(8,"0")}return[t.slice(0,8),t.slice(8,12),t.slice(12,16),t.slice(16,32)].join("-")}or.formatGuid=Dv;Object.defineProperty(Br,"__esModule",{value:!0});Br.Header=void 0;const Kt=dn,tl=wn,Ns=or;Br.Header={parse:Iv};function Iv(i){if(i.byteLength<tl.minHeaderLength)throw new Error(`Invalid header: must be at least ${tl.minHeaderLength} bytes`);const e=Kt.Binary.toDataView(i),t=Kt.Binary.toCString(i.slice(0,4));if(t!=="LASF")throw new Error(`Invalid file signature: ${t}`);const n=e.getUint8(24),r=e.getUint8(25);if(n!==1||r!==2&&r!==4)throw new Error(`Invalid version (only 1.2 and 1.4 supported): ${n}.${r}`);const a={fileSignature:t,fileSourceId:e.getUint16(4,!0),globalEncoding:e.getUint16(6,!0),projectId:(0,Ns.formatGuid)(i.slice(8,24)),majorVersion:n,minorVersion:r,systemIdentifier:Kt.Binary.toCString(i.slice(26,58)),generatingSoftware:Kt.Binary.toCString(i.slice(58,90)),fileCreationDayOfYear:e.getUint16(90,!0),fileCreationYear:e.getUint16(92,!0),headerLength:e.getUint16(94,!0),pointDataOffset:e.getUint32(96,!0),vlrCount:e.getUint32(100,!0),pointDataRecordFormat:e.getUint8(104)&15,pointDataRecordLength:e.getUint16(105,!0),pointCount:e.getUint32(107,!0),pointCountByReturn:Nv(i.slice(111,131)),scale:(0,Ns.parsePoint)(i.slice(131,155)),offset:(0,Ns.parsePoint)(i.slice(155,179)),min:[e.getFloat64(187,!0),e.getFloat64(203,!0),e.getFloat64(219,!0)],max:[e.getFloat64(179,!0),e.getFloat64(195,!0),e.getFloat64(211,!0)],waveformDataOffset:0,evlrOffset:0,evlrCount:0};return r==2?a:{...a,pointCount:(0,Kt.parseBigInt)((0,Kt.getBigUint64)(e,247,!0)),pointCountByReturn:Uv(i.slice(255,375)),waveformDataOffset:(0,Kt.parseBigInt)((0,Kt.getBigUint64)(e,227,!0)),evlrOffset:(0,Kt.parseBigInt)((0,Kt.getBigUint64)(e,235,!0)),evlrCount:e.getUint32(243,!0)}}function Uv(i){const e=Kt.Binary.toDataView(i),t=[];for(let n=0;n<15*8;n+=8)t.push((0,Kt.getBigUint64)(e,n,!0));return t.map(n=>(0,Kt.parseBigInt)(n))}function Nv(i){const e=Kt.Binary.toDataView(i),t=[];for(let n=0;n<5*4;n+=4)t.push(e.getUint32(n,!0));return t}var si={},oi={},Ql={exports:{}};(function(i,e){var t=(()=>{var n=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(r){r=r||{};var a=typeof r<"u"?r:{},s,o;a.ready=new Promise(function(g,_){s=g,o=_}),["_main","___getTypeName","__embind_initialize_bindings","_fflush","onRuntimeInitialized"].forEach(g=>{Object.getOwnPropertyDescriptor(a.ready,g)||Object.defineProperty(a.ready,g,{get:()=>Pe("You are getting "+g+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>Pe("You are setting "+g+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var c=Object.assign({},a),l="./this.program",u=!0,f=!1,d=!1,m=!1;if(a.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var v="";function x(g){return a.locateFile?a.locateFile(g,v):v+g}var p;if(typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),n&&(v=n),v.indexOf("blob:")!==0?v=v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):v="",!(typeof window=="object"||typeof importScripts=="function"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var h=a.print||console.log.bind(console),R=a.printErr||console.warn.bind(console);Object.assign(a,c),c=null,dd(),a.arguments&&a.arguments,b("arguments","arguments_"),a.thisProgram&&(l=a.thisProgram),b("thisProgram","thisProgram"),a.quit&&a.quit,b("quit","quit_"),w(typeof a.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),w(typeof a.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),w(typeof a.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),w(typeof a.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),w(typeof a.read>"u","Module.read option was removed (modify read_ in JS)"),w(typeof a.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),w(typeof a.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),w(typeof a.setWindowTitle>"u","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),w(typeof a.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),b("read","read_"),b("readAsync","readAsync"),b("readBinary","readBinary"),b("setWindowTitle","setWindowTitle"),w(!f,"worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable."),w(!d,"node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable."),w(!m,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");function b(g,_){Object.getOwnPropertyDescriptor(a,g)||Object.defineProperty(a,g,{configurable:!0,get:function(){Pe("Module."+g+" has been replaced with plain "+_+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function C(g){Object.getOwnPropertyDescriptor(a,g)&&Pe("`Module."+g+"` was supplied but `"+g+"` not included in INCOMING_MODULE_JS_API")}function F(g){return g==="FS_createPath"||g==="FS_createDataFile"||g==="FS_createPreloadedFile"||g==="FS_unlink"||g==="addRunDependency"||g==="FS_createLazyFile"||g==="FS_createDevice"||g==="removeRunDependency"}function U(g){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,g)&&Object.defineProperty(globalThis,g,{configurable:!0,get:function(){var _="`"+g+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";F(g)&&(_+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),W(_)}})}function D(g){Object.getOwnPropertyDescriptor(a,g)||Object.defineProperty(a,g,{configurable:!0,get:function(){var _="'"+g+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";F(g)&&(_+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Pe(_)}})}var z;a.wasmBinary&&(z=a.wasmBinary),b("wasmBinary","wasmBinary"),a.noExitRuntime,b("noExitRuntime","noExitRuntime"),typeof WebAssembly!="object"&&Pe("no native wasm support detected");var T,E=!1;function w(g,_){g||Pe("Assertion failed"+(_?": "+_:""))}var ee=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function q(g,_,A){for(var O=_+A,Z=_;g[Z]&&!(Z>=O);)++Z;if(Z-_>16&&g.buffer&&ee)return ee.decode(g.subarray(_,Z));for(var re="";_<Z;){var ce=g[_++];if(!(ce&128)){re+=String.fromCharCode(ce);continue}var te=g[_++]&63;if((ce&224)==192){re+=String.fromCharCode((ce&31)<<6|te);continue}var se=g[_++]&63;if((ce&240)==224?ce=(ce&15)<<12|te<<6|se:((ce&248)!=240&&W("Invalid UTF-8 leading byte 0x"+ce.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),ce=(ce&7)<<18|te<<12|se<<6|g[_++]&63),ce<65536)re+=String.fromCharCode(ce);else{var be=ce-65536;re+=String.fromCharCode(55296|be>>10,56320|be&1023)}}return re}function P(g,_){return g?q(he,g,_):""}function N(g,_,A,O){if(!(O>0))return 0;for(var Z=A,re=A+O-1,ce=0;ce<g.length;++ce){var te=g.charCodeAt(ce);if(te>=55296&&te<=57343){var se=g.charCodeAt(++ce);te=65536+((te&1023)<<10)|se&1023}if(te<=127){if(A>=re)break;_[A++]=te}else if(te<=2047){if(A+1>=re)break;_[A++]=192|te>>6,_[A++]=128|te&63}else if(te<=65535){if(A+2>=re)break;_[A++]=224|te>>12,_[A++]=128|te>>6&63,_[A++]=128|te&63}else{if(A+3>=re)break;te>1114111&&W("Invalid Unicode code point 0x"+te.toString(16)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),_[A++]=240|te>>18,_[A++]=128|te>>12&63,_[A++]=128|te>>6&63,_[A++]=128|te&63}}return _[A]=0,A-Z}function V(g,_,A){return w(typeof A=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),N(g,he,_,A)}function Q(g){for(var _=0,A=0;A<g.length;++A){var O=g.charCodeAt(A);O<=127?_++:O<=2047?_+=2:O>=55296&&O<=57343?(_+=4,++A):_+=3}return _}var Y,ne,he,ve,Xe,Ie,j,de,Ee;function Me(g){Y=g,a.HEAP8=ne=new Int8Array(g),a.HEAP16=ve=new Int16Array(g),a.HEAP32=Ie=new Int32Array(g),a.HEAPU8=he=new Uint8Array(g),a.HEAPU16=Xe=new Uint16Array(g),a.HEAPU32=j=new Uint32Array(g),a.HEAPF32=de=new Float32Array(g),a.HEAPF64=Ee=new Float64Array(g)}var Ve=65536;a.TOTAL_STACK&&w(Ve===a.TOTAL_STACK,"the stack size can no longer be determined at runtime");var Ye=a.INITIAL_MEMORY||262144;b("INITIAL_MEMORY","INITIAL_MEMORY"),w(Ye>=Ve,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+Ye+"! (TOTAL_STACK="+Ve+")"),w(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),w(!a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),w(Ye==262144,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");var $e;function ft(){var g=ss();w((g&3)==0),j[g>>2]=34821223,j[g+4>>2]=2310721022,j[0]=1668509029}function I(){if(!E){var g=ss(),_=j[g>>2],A=j[g+4>>2];(_!=34821223||A!=2310721022)&&Pe("Stack overflow! Stack cookie has been overwritten at 0x"+g.toString(16)+", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+A.toString(16)+" 0x"+_.toString(16)),j[0]!==1668509029&&Pe("Runtime error: The application has corrupted its heap memory area (address zero)!")}}(function(){var g=new Int16Array(1),_=new Int8Array(g.buffer);if(g[0]=25459,_[0]!==115||_[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();var mt=[],tt=[],it=[],we=!1;function _t(){if(a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)L(a.preRun.shift());G(mt)}function Ge(){w(!we),we=!0,I(),G(tt)}function We(){if(I(),a.postRun)for(typeof a.postRun=="function"&&(a.postRun=[a.postRun]);a.postRun.length;)K(a.postRun.shift());G(it)}function L(g){mt.unshift(g)}function S(g){tt.unshift(g)}function K(g){it.unshift(g)}w(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),w(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),w(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),w(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var ae=0,oe=null,ie=null,Re={};function ge(g){ae++,a.monitorRunDependencies&&a.monitorRunDependencies(ae),w(!Re[g]),Re[g]=1,oe===null&&typeof setInterval<"u"&&(oe=setInterval(function(){if(E){clearInterval(oe),oe=null;return}var _=!1;for(var A in Re)_||(_=!0,R("still waiting on run dependencies:")),R("dependency: "+A);_&&R("(end of list)")},1e4))}function xe(g){if(ae--,a.monitorRunDependencies&&a.monitorRunDependencies(ae),w(Re[g]),delete Re[g],ae==0&&(oe!==null&&(clearInterval(oe),oe=null),ie)){var _=ie;ie=null,_()}}function Pe(g){a.onAbort&&a.onAbort(g),g="Aborted("+g+")",R(g),E=!0;var _=new WebAssembly.RuntimeError(g);throw o(_),_}var le={error:function(){Pe("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init:function(){le.error()},createDataFile:function(){le.error()},createPreloadedFile:function(){le.error()},createLazyFile:function(){le.error()},open:function(){le.error()},mkdev:function(){le.error()},registerDevice:function(){le.error()},analyzePath:function(){le.error()},loadFilesFromDB:function(){le.error()},ErrnoError:function(){le.error()}};a.FS_createDataFile=le.createDataFile,a.FS_createPreloadedFile=le.createPreloadedFile;var Se="data:application/octet-stream;base64,";function Qe(g){return g.startsWith(Se)}function Oe(g){return g.startsWith("file://")}function me(g,_){return function(){var A=g,O=_;return O=a.asm,w(we,"native function `"+A+"` called before runtime initialization"),O[g]||w(O[g],"exported native function `"+A+"` not found"),O[g].apply(null,arguments)}}var Ce;Ce="laz-perf.wasm",Qe(Ce)||(Ce=x(Ce));function ze(g){try{if(g==Ce&&z)return new Uint8Array(z);throw"both async and sync fetching of the wasm failed"}catch(_){Pe(_)}}function ht(){return!z&&u&&typeof fetch=="function"?fetch(Ce,{credentials:"same-origin"}).then(function(g){if(!g.ok)throw"failed to load wasm binary file at '"+Ce+"'";return g.arrayBuffer()}).catch(function(){return ze(Ce)}):Promise.resolve().then(function(){return ze(Ce)})}function y(){var g={env:Vo,wasi_snapshot_preview1:Vo};function _(te,se){var be=te.exports;a.asm=be,T=a.asm.memory,w(T,"memory not found in wasm exports"),Me(T.buffer),$e=a.asm.__indirect_function_table,w($e,"table not found in wasm exports"),S(a.asm.__wasm_call_ctors),xe("wasm-instantiate")}ge("wasm-instantiate");var A=a;function O(te){w(a===A,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),A=null,_(te.instance)}function Z(te){return ht().then(function(se){return WebAssembly.instantiate(se,g)}).then(function(se){return se}).then(te,function(se){R("failed to asynchronously prepare wasm: "+se),Oe(Ce)&&R("warning: Loading from a file URI ("+Ce+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),Pe(se)})}function re(){return!z&&typeof WebAssembly.instantiateStreaming=="function"&&!Qe(Ce)&&typeof fetch=="function"?fetch(Ce,{credentials:"same-origin"}).then(function(te){var se=WebAssembly.instantiateStreaming(te,g);return se.then(O,function(be){return R("wasm streaming compile failed: "+be),R("falling back to ArrayBuffer instantiation"),Z(O)})}):Z(O)}if(a.instantiateWasm)try{var ce=a.instantiateWasm(g,_);return ce}catch(te){return R("Module.instantiateWasm callback failed with error: "+te),!1}return re().catch(o),{}}function G(g){for(;g.length>0;)g.shift()(a)}function W(g){W.shown||(W.shown={}),W.shown[g]||(W.shown[g]=1,R(g))}function J(g,_){w(g.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ne.set(g,_)}function ue(g){return as(g+24)+24}function Le(g){this.excPtr=g,this.ptr=g-24,this.set_type=function(_){j[this.ptr+4>>2]=_},this.get_type=function(){return j[this.ptr+4>>2]},this.set_destructor=function(_){j[this.ptr+8>>2]=_},this.get_destructor=function(){return j[this.ptr+8>>2]},this.set_refcount=function(_){Ie[this.ptr>>2]=_},this.set_caught=function(_){_=_?1:0,ne[this.ptr+12>>0]=_},this.get_caught=function(){return ne[this.ptr+12>>0]!=0},this.set_rethrown=function(_){_=_?1:0,ne[this.ptr+13>>0]=_},this.get_rethrown=function(){return ne[this.ptr+13>>0]!=0},this.init=function(_,A){this.set_adjusted_ptr(0),this.set_type(_),this.set_destructor(A),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var _=Ie[this.ptr>>2];Ie[this.ptr>>2]=_+1},this.release_ref=function(){var _=Ie[this.ptr>>2];return Ie[this.ptr>>2]=_-1,w(_>0),_===1},this.set_adjusted_ptr=function(_){j[this.ptr+16>>2]=_},this.get_adjusted_ptr=function(){return j[this.ptr+16>>2]},this.get_exception_ptr=function(){var _=hd(this.get_type());if(_)return j[this.excPtr>>2];var A=this.get_adjusted_ptr();return A!==0?A:this.excPtr}}function He(g,_,A){var O=new Le(g);throw O.init(_,A),g+" - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch."}function yt(g,_,A,O,Z){}function xt(g){switch(g){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+g)}}function nt(){for(var g=new Array(256),_=0;_<256;++_)g[_]=String.fromCharCode(_);Et=g}var Et=void 0;function at(g){for(var _="",A=g;he[A];)_+=Et[he[A++]];return _}var Vt={},vt={},jt={},Pn=48,fi=57;function Xn(g){if(g===void 0)return"_unknown";g=g.replace(/[^a-zA-Z0-9_]/g,"$");var _=g.charCodeAt(0);return _>=Pn&&_<=fi?"_"+g:g}function Ri(g,_){return g=Xn(g),new Function("body","return function "+g+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(_)}function Yn(g,_){var A=Ri(_,function(O){this.name=_,this.message=O;var Z=new Error(O).stack;Z!==void 0&&(this.stack=this.toString()+`
`+Z.replace(/^Error(:[^\n]*)?\n/,""))});return A.prototype=Object.create(g.prototype),A.prototype.constructor=A,A.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},A}var Ln=void 0;function rt(g){throw new Ln(g)}var kr=void 0;function Pi(g){throw new kr(g)}function hi(g,_,A){g.forEach(function(te){jt[te]=_});function O(te){var se=A(te);se.length!==g.length&&Pi("Mismatched type converter count");for(var be=0;be<g.length;++be)M(g[be],se[be])}var Z=new Array(_.length),re=[],ce=0;_.forEach((te,se)=>{vt.hasOwnProperty(te)?Z[se]=vt[te]:(re.push(te),Vt.hasOwnProperty(te)||(Vt[te]=[]),Vt[te].push(()=>{Z[se]=vt[te],++ce,ce===re.length&&O(Z)}))}),re.length===0&&O(Z)}function M(g,_,A={}){if(!("argPackAdvance"in _))throw new TypeError("registerType registeredInstance requires argPackAdvance");var O=_.name;if(g||rt('type "'+O+'" must have a positive integer typeid pointer'),vt.hasOwnProperty(g)){if(A.ignoreDuplicateRegistrations)return;rt("Cannot register type '"+O+"' twice")}if(vt[g]=_,delete jt[g],Vt.hasOwnProperty(g)){var Z=Vt[g];delete Vt[g],Z.forEach(re=>re())}}function B(g,_,A,O,Z){var re=xt(A);_=at(_),M(g,{name:_,fromWireType:function(ce){return!!ce},toWireType:function(ce,te){return te?O:Z},argPackAdvance:8,readValueFromPointer:function(ce){var te;if(A===1)te=ne;else if(A===2)te=ve;else if(A===4)te=Ie;else throw new TypeError("Unknown boolean type size: "+_);return this.fromWireType(te[ce>>re])},destructorFunction:null})}function X(g){if(!(this instanceof yn)||!(g instanceof yn))return!1;for(var _=this.$$.ptrType.registeredClass,A=this.$$.ptr,O=g.$$.ptrType.registeredClass,Z=g.$$.ptr;_.baseClass;)A=_.upcast(A),_=_.baseClass;for(;O.baseClass;)Z=O.upcast(Z),O=O.baseClass;return _===O&&A===Z}function $(g){return{count:g.count,deleteScheduled:g.deleteScheduled,preservePointerOnDelete:g.preservePointerOnDelete,ptr:g.ptr,ptrType:g.ptrType,smartPtr:g.smartPtr,smartPtrType:g.smartPtrType}}function H(g){function _(A){return A.$$.ptrType.registeredClass.name}rt(_(g)+" instance already deleted")}var pe=!1;function ye(g){}function Te(g){g.smartPtr?g.smartPtrType.rawDestructor(g.smartPtr):g.ptrType.registeredClass.rawDestructor(g.ptr)}function Ae(g){g.count.value-=1;var _=g.count.value===0;_&&Te(g)}function Ne(g,_,A){if(_===A)return g;if(A.baseClass===void 0)return null;var O=Ne(g,_,A.baseClass);return O===null?null:A.downcast(O)}var Be={};function Ue(){return Object.keys(St).length}function ot(){var g=[];for(var _ in St)St.hasOwnProperty(_)&&g.push(St[_]);return g}var dt=[];function pt(){for(;dt.length;){var g=dt.pop();g.$$.deleteScheduled=!1,g.delete()}}var Ct=void 0;function ct(g){Ct=g,dt.length&&Ct&&Ct(pt)}function De(){a.getInheritedInstanceCount=Ue,a.getLiveInheritedInstances=ot,a.flushPendingDeletes=pt,a.setDelayFunction=ct}var St={};function lt(g,_){for(_===void 0&&rt("ptr should not be undefined");g.baseClass;)_=g.upcast(_),g=g.baseClass;return _}function Qt(g,_){return _=lt(g,_),St[_]}function fn(g,_){(!_.ptrType||!_.ptr)&&Pi("makeClassHandle requires ptr and ptrType");var A=!!_.smartPtrType,O=!!_.smartPtr;return A!==O&&Pi("Both smartPtrType and smartPtr must be specified"),_.count={value:1},Dn(Object.create(g,{$$:{value:_}}))}function Ft(g){var _=this.getPointee(g);if(!_)return this.destructor(g),null;var A=Qt(this.registeredClass,_);if(A!==void 0){if(A.$$.count.value===0)return A.$$.ptr=_,A.$$.smartPtr=g,A.clone();var O=A.clone();return this.destructor(g),O}function Z(){return this.isSmartPointer?fn(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:_,smartPtrType:this,smartPtr:g}):fn(this.registeredClass.instancePrototype,{ptrType:this,ptr:g})}var re=this.registeredClass.getActualType(_),ce=Be[re];if(!ce)return Z.call(this);var te;this.isConst?te=ce.constPointerType:te=ce.pointerType;var se=Ne(_,this.registeredClass,te.registeredClass);return se===null?Z.call(this):this.isSmartPointer?fn(te.registeredClass.instancePrototype,{ptrType:te,ptr:se,smartPtrType:this,smartPtr:g}):fn(te.registeredClass.instancePrototype,{ptrType:te,ptr:se})}function Dn(g){return typeof FinalizationRegistry>"u"?(Dn=_=>_,g):(pe=new FinalizationRegistry(_=>{console.warn(_.leakWarning.stack.replace(/^Error: /,"")),Ae(_.$$)}),Dn=_=>{var A=_.$$,O=!!A.smartPtr;if(O){var Z={$$:A},re=A.ptrType.registeredClass;Z.leakWarning=new Error("Embind found a leaked C++ instance "+re.name+" <0x"+A.ptr.toString(16)+`>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`),"captureStackTrace"in Error&&Error.captureStackTrace(Z.leakWarning,Ft),pe.register(_,Z,_)}return _},ye=_=>pe.unregister(_),Dn(g))}function bt(){if(this.$$.ptr||H(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var g=Dn(Object.create(Object.getPrototypeOf(this),{$$:{value:$(this.$$)}}));return g.$$.count.value+=1,g.$$.deleteScheduled=!1,g}function vn(){this.$$.ptr||H(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&rt("Object already scheduled for deletion"),ye(this),Ae(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function hr(){return!this.$$.ptr}function $t(){return this.$$.ptr||H(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&rt("Object already scheduled for deletion"),dt.push(this),dt.length===1&&Ct&&Ct(pt),this.$$.deleteScheduled=!0,this}function pr(){yn.prototype.isAliasOf=X,yn.prototype.clone=bt,yn.prototype.delete=vn,yn.prototype.isDeleted=hr,yn.prototype.deleteLater=$t}function yn(){}function mr(g,_,A){if(g[_].overloadTable===void 0){var O=g[_];g[_]=function(){return g[_].overloadTable.hasOwnProperty(arguments.length)||rt("Function '"+A+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+g[_].overloadTable+")!"),g[_].overloadTable[arguments.length].apply(this,arguments)},g[_].overloadTable=[],g[_].overloadTable[O.argCount]=O}}function cu(g,_,A){a.hasOwnProperty(g)?(rt("Cannot register public name '"+g+"' twice"),mr(a,g,g),a.hasOwnProperty(A)&&rt("Cannot register multiple overloads of a function with the same number of arguments ("+A+")!"),a[g].overloadTable[A]=_):a[g]=_}function lu(g,_,A,O,Z,re,ce,te){this.name=g,this.constructor=_,this.instancePrototype=A,this.rawDestructor=O,this.baseClass=Z,this.getActualType=re,this.upcast=ce,this.downcast=te,this.pureVirtualFunctions=[]}function Qa(g,_,A){for(;_!==A;)_.upcast||rt("Expected null or instance of "+A.name+", got an instance of "+_.name),g=_.upcast(g),_=_.baseClass;return g}function uu(g,_){if(_===null)return this.isReference&&rt("null is not a valid "+this.name),0;_.$$||rt('Cannot pass "'+Di(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name);var A=_.$$.ptrType.registeredClass,O=Qa(_.$$.ptr,A,this.registeredClass);return O}function du(g,_){var A;if(_===null)return this.isReference&&rt("null is not a valid "+this.name),this.isSmartPointer?(A=this.rawConstructor(),g!==null&&g.push(this.rawDestructor,A),A):0;_.$$||rt('Cannot pass "'+Di(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&_.$$.ptrType.isConst&&rt("Cannot convert argument of type "+(_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name)+" to parameter type "+this.name);var O=_.$$.ptrType.registeredClass;if(A=Qa(_.$$.ptr,O,this.registeredClass),this.isSmartPointer)switch(_.$$.smartPtr===void 0&&rt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:_.$$.smartPtrType===this?A=_.$$.smartPtr:rt("Cannot convert argument of type "+(_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:A=_.$$.smartPtr;break;case 2:if(_.$$.smartPtrType===this)A=_.$$.smartPtr;else{var Z=_.clone();A=this.rawShare(A,is.toHandle(function(){Z.delete()})),g!==null&&g.push(this.rawDestructor,A)}break;default:rt("Unsupporting sharing policy")}return A}function fu(g,_){if(_===null)return this.isReference&&rt("null is not a valid "+this.name),0;_.$$||rt('Cannot pass "'+Di(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name),_.$$.ptrType.isConst&&rt("Cannot convert argument of type "+_.$$.ptrType.name+" to parameter type "+this.name);var A=_.$$.ptrType.registeredClass,O=Qa(_.$$.ptr,A,this.registeredClass);return O}function Vr(g){return this.fromWireType(Ie[g>>2])}function hu(g){return this.rawGetPointee&&(g=this.rawGetPointee(g)),g}function pu(g){this.rawDestructor&&this.rawDestructor(g)}function mu(g){g!==null&&g.delete()}function gu(){In.prototype.getPointee=hu,In.prototype.destructor=pu,In.prototype.argPackAdvance=8,In.prototype.readValueFromPointer=Vr,In.prototype.deleteObject=mu,In.prototype.fromWireType=Ft}function In(g,_,A,O,Z,re,ce,te,se,be,et){this.name=g,this.registeredClass=_,this.isReference=A,this.isConst=O,this.isSmartPointer=Z,this.pointeeType=re,this.sharingPolicy=ce,this.rawGetPointee=te,this.rawConstructor=se,this.rawShare=be,this.rawDestructor=et,!Z&&_.baseClass===void 0?O?(this.toWireType=uu,this.destructorFunction=null):(this.toWireType=fu,this.destructorFunction=null):this.toWireType=du}function _u(g,_,A){a.hasOwnProperty(g)||Pi("Replacing nonexistant public symbol"),a[g].overloadTable!==void 0&&A!==void 0?a[g].overloadTable[A]=_:(a[g]=_,a[g].argCount=A)}function vu(g,_,A){w("dynCall_"+g in a,"bad function pointer type - no table for sig '"+g+"'"),A&&A.length?w(A.length===g.substring(1).replace(/j/g,"--").length):w(g.length==1);var O=a["dynCall_"+g];return A&&A.length?O.apply(null,[_].concat(A)):O.call(null,_)}var Gr=[];function es(g){var _=Gr[g];return _||(g>=Gr.length&&(Gr.length=g+1),Gr[g]=_=$e.get(g)),w($e.get(g)==_,"JavaScript-side Wasm function table mirror is out of date!"),_}function yu(g,_,A){if(g.includes("j"))return vu(g,_,A);w(es(_),"missing table entry in dynCall: "+_);var O=es(_).apply(null,A);return O}function xu(g,_){w(g.includes("j")||g.includes("p"),"getDynCaller should only be called with i64 sigs");var A=[];return function(){return A.length=0,Object.assign(A,arguments),yu(g,_,A)}}function Li(g,_){g=at(g);function A(){return g.includes("j")?xu(g,_):es(_)}var O=A();return typeof O!="function"&&rt("unknown function pointer with signature "+g+": "+_),O}var Fo=void 0;function Su(g){var _=fd(g),A=at(_);return jn(_),A}function ts(g,_){var A=[],O={};function Z(re){if(!O[re]&&!vt[re]){if(jt[re]){jt[re].forEach(Z);return}A.push(re),O[re]=!0}}throw _.forEach(Z),new Fo(g+": "+A.map(Su).join([", "]))}function Mu(g,_,A,O,Z,re,ce,te,se,be,et,qe,ke){et=at(et),re=Li(Z,re),te&&(te=Li(ce,te)),be&&(be=Li(se,be)),ke=Li(qe,ke);var Rt=Xn(et);cu(Rt,function(){ts("Cannot construct "+et+" due to unbound types",[O])}),hi([g,_,A],O?[O]:[],function(Ut){Ut=Ut[0];var Ot,en;O?(Ot=Ut.registeredClass,en=Ot.instancePrototype):en=yn.prototype;var Sn=Ri(Rt,function(){if(Object.getPrototypeOf(this)!==fe)throw new Ln("Use 'new' to construct "+et);if(Fe.constructor_body===void 0)throw new Ln(et+" has no accessible constructor");var Yr=Fe.constructor_body[arguments.length];if(Yr===void 0)throw new Ln("Tried to invoke ctor of "+et+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Fe.constructor_body).toString()+") parameters instead!");return Yr.apply(this,arguments)}),fe=Object.create(en,{constructor:{value:Sn}});Sn.prototype=fe;var Fe=new lu(et,Sn,fe,ke,Ot,re,te,be),qt=new In(et,Fe,!0,!1,!1),Nt=new In(et+"*",Fe,!1,!1,!1),pi=new In(et+" const*",Fe,!1,!0,!1);return Be[g]={pointerType:Nt,constPointerType:pi},_u(Rt,Sn),[qt,Nt,pi]})}function Oo(g,_){for(var A=[],O=0;O<g;O++)A.push(j[_+O*4>>2]);return A}function Eu(g){for(;g.length;){var _=g.pop(),A=g.pop();A(_)}}function bu(g,_){if(!(g instanceof Function))throw new TypeError("new_ called with constructor type "+typeof g+" which is not a function");var A=Ri(g.name||"unknownFunctionName",function(){});A.prototype=g.prototype;var O=new A,Z=g.apply(O,_);return Z instanceof Object?Z:O}function Bo(g,_,A,O,Z){var re=_.length;re<2&&rt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ce=_[1]!==null&&A!==null,te=!1,se=1;se<_.length;++se)if(_[se]!==null&&_[se].destructorFunction===void 0){te=!0;break}for(var be=_[0].name!=="void",et="",qe="",se=0;se<re-2;++se)et+=(se!==0?", ":"")+"arg"+se,qe+=(se!==0?", ":"")+"arg"+se+"Wired";var ke="return function "+Xn(g)+"("+et+`) {
if (arguments.length !== `+(re-2)+`) {
throwBindingError('function `+g+" called with ' + arguments.length + ' arguments, expected "+(re-2)+` args!');
}
`;te&&(ke+=`var destructors = [];
`);var Rt=te?"destructors":"null",Ut=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Ot=[rt,O,Z,Eu,_[0],_[1]];ce&&(ke+="var thisWired = classParam.toWireType("+Rt+`, this);
`);for(var se=0;se<re-2;++se)ke+="var arg"+se+"Wired = argType"+se+".toWireType("+Rt+", arg"+se+"); // "+_[se+2].name+`
`,Ut.push("argType"+se),Ot.push(_[se+2]);if(ce&&(qe="thisWired"+(qe.length>0?", ":"")+qe),ke+=(be?"var rv = ":"")+"invoker(fn"+(qe.length>0?", ":"")+qe+`);
`,te)ke+=`runDestructors(destructors);
`;else for(var se=ce?1:2;se<_.length;++se){var en=se===1?"thisWired":"arg"+(se-2)+"Wired";_[se].destructorFunction!==null&&(ke+=en+"_dtor("+en+"); // "+_[se].name+`
`,Ut.push(en+"_dtor"),Ot.push(_[se].destructorFunction))}be&&(ke+=`var ret = retType.fromWireType(rv);
return ret;
`),ke+=`}
`,Ut.push(ke);var Sn=bu(Function,Ut).apply(null,Ot);return Sn}function Tu(g,_,A,O,Z,re){w(_>0);var ce=Oo(_,A);Z=Li(O,Z),hi([],[g],function(te){te=te[0];var se="constructor "+te.name;if(te.registeredClass.constructor_body===void 0&&(te.registeredClass.constructor_body=[]),te.registeredClass.constructor_body[_-1]!==void 0)throw new Ln("Cannot register multiple constructors with identical number of parameters ("+(_-1)+") for class '"+te.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return te.registeredClass.constructor_body[_-1]=()=>{ts("Cannot construct "+te.name+" due to unbound types",ce)},hi([],ce,function(be){return be.splice(1,0,null),te.registeredClass.constructor_body[_-1]=Bo(se,be,null,Z,re),[]}),[]})}function Au(g,_,A,O,Z,re,ce,te){var se=Oo(A,O);_=at(_),re=Li(Z,re),hi([],[g],function(be){be=be[0];var et=be.name+"."+_;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),te&&be.registeredClass.pureVirtualFunctions.push(_);function qe(){ts("Cannot call "+et+" due to unbound types",se)}var ke=be.registeredClass.instancePrototype,Rt=ke[_];return Rt===void 0||Rt.overloadTable===void 0&&Rt.className!==be.name&&Rt.argCount===A-2?(qe.argCount=A-2,qe.className=be.name,ke[_]=qe):(mr(ke,_,et),ke[_].overloadTable[A-2]=qe),hi([],se,function(Ut){var Ot=Bo(et,Ut,be,re,ce);return ke[_].overloadTable===void 0?(Ot.argCount=A-2,ke[_]=Ot):ke[_].overloadTable[A-2]=Ot,[]}),[]})}var ns=[],xn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function wu(g){g>4&&--xn[g].refcount===0&&(xn[g]=void 0,ns.push(g))}function Cu(){for(var g=0,_=5;_<xn.length;++_)xn[_]!==void 0&&++g;return g}function Ru(){for(var g=5;g<xn.length;++g)if(xn[g]!==void 0)return xn[g];return null}function Pu(){a.count_emval_handles=Cu,a.get_first_emval=Ru}var is={toValue:g=>(g||rt("Cannot use deleted val. handle = "+g),xn[g].value),toHandle:g=>{switch(g){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var _=ns.length?ns.pop():xn.length;return xn[_]={refcount:1,value:g},_}}}};function Lu(g,_){_=at(_),M(g,{name:_,fromWireType:function(A){var O=is.toValue(A);return wu(A),O},toWireType:function(A,O){return is.toHandle(O)},argPackAdvance:8,readValueFromPointer:Vr,destructorFunction:null})}function Di(g){if(g===null)return"null";var _=typeof g;return _==="object"||_==="array"||_==="function"?g.toString():""+g}function Du(g,_){switch(_){case 2:return function(A){return this.fromWireType(de[A>>2])};case 3:return function(A){return this.fromWireType(Ee[A>>3])};default:throw new TypeError("Unknown float type: "+g)}}function Iu(g,_,A){var O=xt(A);_=at(_),M(g,{name:_,fromWireType:function(Z){return Z},toWireType:function(Z,re){if(typeof re!="number"&&typeof re!="boolean")throw new TypeError('Cannot convert "'+Di(re)+'" to '+this.name);return re},argPackAdvance:8,readValueFromPointer:Du(_,O),destructorFunction:null})}function Uu(g,_,A){switch(_){case 0:return A?function(Z){return ne[Z]}:function(Z){return he[Z]};case 1:return A?function(Z){return ve[Z>>1]}:function(Z){return Xe[Z>>1]};case 2:return A?function(Z){return Ie[Z>>2]}:function(Z){return j[Z>>2]};default:throw new TypeError("Unknown integer type: "+g)}}function Nu(g,_,A,O,Z){_=at(_),Z===-1&&(Z=4294967295);var re=xt(A),ce=qe=>qe;if(O===0){var te=32-8*A;ce=qe=>qe<<te>>>te}var se=_.includes("unsigned"),be=(qe,ke)=>{if(typeof qe!="number"&&typeof qe!="boolean")throw new TypeError('Cannot convert "'+Di(qe)+'" to '+ke);if(qe<O||qe>Z)throw new TypeError('Passing a number "'+Di(qe)+'" from JS side to C/C++ side to an argument of type "'+_+'", which is outside the valid range ['+O+", "+Z+"]!")},et;se?et=function(qe,ke){return be(ke,this.name),ke>>>0}:et=function(qe,ke){return be(ke,this.name),ke},M(g,{name:_,fromWireType:ce,toWireType:et,argPackAdvance:8,readValueFromPointer:Uu(_,re,O!==0),destructorFunction:null})}function Fu(g,_,A){var O=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Z=O[_];function re(ce){ce=ce>>2;var te=j,se=te[ce],be=te[ce+1];return new Z(Y,be,se)}A=at(A),M(g,{name:A,fromWireType:re,argPackAdvance:8,readValueFromPointer:re},{ignoreDuplicateRegistrations:!0})}function Ou(g,_){_=at(_);var A=_==="std::string";M(g,{name:_,fromWireType:function(O){var Z=j[O>>2],re=O+4,ce;if(A)for(var te=re,se=0;se<=Z;++se){var be=re+se;if(se==Z||he[be]==0){var et=be-te,qe=P(te,et);ce===void 0?ce=qe:(ce+="\0",ce+=qe),te=be+1}}else{for(var ke=new Array(Z),se=0;se<Z;++se)ke[se]=String.fromCharCode(he[re+se]);ce=ke.join("")}return jn(O),ce},toWireType:function(O,Z){Z instanceof ArrayBuffer&&(Z=new Uint8Array(Z));var re,ce=typeof Z=="string";ce||Z instanceof Uint8Array||Z instanceof Uint8ClampedArray||Z instanceof Int8Array||rt("Cannot pass non-string to std::string"),A&&ce?re=Q(Z):re=Z.length;var te=as(4+re+1),se=te+4;if(j[te>>2]=re,A&&ce)V(Z,se,re+1);else if(ce)for(var be=0;be<re;++be){var et=Z.charCodeAt(be);et>255&&(jn(se),rt("String has UTF-16 code units that do not fit in 8 bits")),he[se+be]=et}else for(var be=0;be<re;++be)he[se+be]=Z[be];return O!==null&&O.push(jn,te),te},argPackAdvance:8,readValueFromPointer:Vr,destructorFunction:function(O){jn(O)}})}var zo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Bu(g,_){w(g%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var A=g,O=A>>1,Z=O+_/2;!(O>=Z)&&Xe[O];)++O;if(A=O<<1,A-g>32&&zo)return zo.decode(he.subarray(g,A));for(var re="",ce=0;!(ce>=_/2);++ce){var te=ve[g+ce*2>>1];if(te==0)break;re+=String.fromCharCode(te)}return re}function zu(g,_,A){if(w(_%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),w(typeof A=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),A===void 0&&(A=2147483647),A<2)return 0;A-=2;for(var O=_,Z=A<g.length*2?A/2:g.length,re=0;re<Z;++re){var ce=g.charCodeAt(re);ve[_>>1]=ce,_+=2}return ve[_>>1]=0,_-O}function Hu(g){return g.length*2}function ku(g,_){w(g%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var A=0,O="";!(A>=_/4);){var Z=Ie[g+A*4>>2];if(Z==0)break;if(++A,Z>=65536){var re=Z-65536;O+=String.fromCharCode(55296|re>>10,56320|re&1023)}else O+=String.fromCharCode(Z)}return O}function Vu(g,_,A){if(w(_%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),w(typeof A=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),A===void 0&&(A=2147483647),A<4)return 0;for(var O=_,Z=O+A-4,re=0;re<g.length;++re){var ce=g.charCodeAt(re);if(ce>=55296&&ce<=57343){var te=g.charCodeAt(++re);ce=65536+((ce&1023)<<10)|te&1023}if(Ie[_>>2]=ce,_+=4,_+4>Z)break}return Ie[_>>2]=0,_-O}function Gu(g){for(var _=0,A=0;A<g.length;++A){var O=g.charCodeAt(A);O>=55296&&O<=57343&&++A,_+=4}return _}function Wu(g,_,A){A=at(A);var O,Z,re,ce,te;_===2?(O=Bu,Z=zu,ce=Hu,re=()=>Xe,te=1):_===4&&(O=ku,Z=Vu,ce=Gu,re=()=>j,te=2),M(g,{name:A,fromWireType:function(se){for(var be=j[se>>2],et=re(),qe,ke=se+4,Rt=0;Rt<=be;++Rt){var Ut=se+4+Rt*_;if(Rt==be||et[Ut>>te]==0){var Ot=Ut-ke,en=O(ke,Ot);qe===void 0?qe=en:(qe+="\0",qe+=en),ke=Ut+_}}return jn(se),qe},toWireType:function(se,be){typeof be!="string"&&rt("Cannot pass non-string to C++ string type "+A);var et=ce(be),qe=as(4+et+_);return j[qe>>2]=et>>te,Z(be,qe+4,et+_),se!==null&&se.push(jn,qe),qe},argPackAdvance:8,readValueFromPointer:Vr,destructorFunction:function(se){jn(se)}})}function Xu(g,_){_=at(_),M(g,{isVoid:!0,name:_,argPackAdvance:0,fromWireType:function(){},toWireType:function(A,O){}})}function Yu(){Pe("native code called abort()")}function ju(g,_,A){he.copyWithin(g,_,_+A)}function $u(){return 2147483648}function qu(g){try{return T.grow(g-Y.byteLength+65535>>>16),Me(T.buffer),1}catch(_){R("emscripten_realloc_buffer: Attempted to grow heap from "+Y.byteLength+" bytes to "+g+" bytes, but got error: "+_)}}function Ku(g){var _=he.length;g=g>>>0,w(g>_);var A=$u();if(g>A)return R("Cannot enlarge memory, asked to go up to "+g+" bytes, but the limit is "+A+" bytes!"),!1;let O=(se,be)=>se+(be-se%be)%be;for(var Z=1;Z<=4;Z*=2){var re=_*(1+.2/Z);re=Math.min(re,g+100663296);var ce=Math.min(A,O(Math.max(g,re),65536)),te=qu(ce);if(te)return!0}return R("Failed to grow the heap from "+_+" bytes to "+ce+" bytes, not enough memory!"),!1}var rs={};function Zu(){return l||"./this.program"}function gr(){if(!gr.strings){var g=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:g,_:Zu()};for(var A in rs)rs[A]===void 0?delete _[A]:_[A]=rs[A];var O=[];for(var A in _)O.push(A+"="+_[A]);gr.strings=O}return gr.strings}function Ju(g,_,A){for(var O=0;O<g.length;++O)w(g.charCodeAt(O)===(g.charCodeAt(O)&255)),ne[_++>>0]=g.charCodeAt(O);ne[_>>0]=0}function Qu(g,_){var A=0;return gr().forEach(function(O,Z){var re=_+A;j[g+Z*4>>2]=re,Ju(O,re),A+=O.length+1}),0}function ed(g,_){var A=gr();j[g>>2]=A.length;var O=0;return A.forEach(function(Z){O+=Z.length+1}),j[_>>2]=O,0}function td(g){Pe("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function nd(g,_,A,O,Z){return 70}var id=[null,[],[]];function rd(g,_){var A=id[g];w(A),_===0||_===10?((g===1?h:R)(q(A,0)),A.length=0):A.push(_)}function ad(g,_,A,O){for(var Z=0,re=0;re<A;re++){var ce=j[_>>2],te=j[_+4>>2];_+=8;for(var se=0;se<te;se++)rd(g,he[ce+se]);Z+=te}return j[O>>2]=Z,0}function Wr(g){return g%4===0&&(g%100!==0||g%400===0)}function sd(g,_){for(var A=0,O=0;O<=_;A+=g[O++]);return A}var Ho=[31,29,31,30,31,30,31,31,30,31,30,31],ko=[31,28,31,30,31,30,31,31,30,31,30,31];function od(g,_){for(var A=new Date(g.getTime());_>0;){var O=Wr(A.getFullYear()),Z=A.getMonth(),re=(O?Ho:ko)[Z];if(_>re-A.getDate())_-=re-A.getDate()+1,A.setDate(1),Z<11?A.setMonth(Z+1):(A.setMonth(0),A.setFullYear(A.getFullYear()+1));else return A.setDate(A.getDate()+_),A}return A}function cd(g,_,A){var O=Q(g)+1,Z=new Array(O);return N(g,Z,0,Z.length),Z}function ld(g,_,A,O){var Z=Ie[O+40>>2],re={tm_sec:Ie[O>>2],tm_min:Ie[O+4>>2],tm_hour:Ie[O+8>>2],tm_mday:Ie[O+12>>2],tm_mon:Ie[O+16>>2],tm_year:Ie[O+20>>2],tm_wday:Ie[O+24>>2],tm_yday:Ie[O+28>>2],tm_isdst:Ie[O+32>>2],tm_gmtoff:Ie[O+36>>2],tm_zone:Z?P(Z):""},ce=P(A),te={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var se in te)ce=ce.replace(new RegExp(se,"g"),te[se]);var be=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],et=["January","February","March","April","May","June","July","August","September","October","November","December"];function qe(fe,Fe,qt){for(var Nt=typeof fe=="number"?fe.toString():fe||"";Nt.length<Fe;)Nt=qt[0]+Nt;return Nt}function ke(fe,Fe){return qe(fe,Fe,"0")}function Rt(fe,Fe){function qt(pi){return pi<0?-1:pi>0?1:0}var Nt;return(Nt=qt(fe.getFullYear()-Fe.getFullYear()))===0&&(Nt=qt(fe.getMonth()-Fe.getMonth()))===0&&(Nt=qt(fe.getDate()-Fe.getDate())),Nt}function Ut(fe){switch(fe.getDay()){case 0:return new Date(fe.getFullYear()-1,11,29);case 1:return fe;case 2:return new Date(fe.getFullYear(),0,3);case 3:return new Date(fe.getFullYear(),0,2);case 4:return new Date(fe.getFullYear(),0,1);case 5:return new Date(fe.getFullYear()-1,11,31);case 6:return new Date(fe.getFullYear()-1,11,30)}}function Ot(fe){var Fe=od(new Date(fe.tm_year+1900,0,1),fe.tm_yday),qt=new Date(Fe.getFullYear(),0,4),Nt=new Date(Fe.getFullYear()+1,0,4),pi=Ut(qt),Yr=Ut(Nt);return Rt(pi,Fe)<=0?Rt(Yr,Fe)<=0?Fe.getFullYear()+1:Fe.getFullYear():Fe.getFullYear()-1}var en={"%a":function(fe){return be[fe.tm_wday].substring(0,3)},"%A":function(fe){return be[fe.tm_wday]},"%b":function(fe){return et[fe.tm_mon].substring(0,3)},"%B":function(fe){return et[fe.tm_mon]},"%C":function(fe){var Fe=fe.tm_year+1900;return ke(Fe/100|0,2)},"%d":function(fe){return ke(fe.tm_mday,2)},"%e":function(fe){return qe(fe.tm_mday,2," ")},"%g":function(fe){return Ot(fe).toString().substring(2)},"%G":function(fe){return Ot(fe)},"%H":function(fe){return ke(fe.tm_hour,2)},"%I":function(fe){var Fe=fe.tm_hour;return Fe==0?Fe=12:Fe>12&&(Fe-=12),ke(Fe,2)},"%j":function(fe){return ke(fe.tm_mday+sd(Wr(fe.tm_year+1900)?Ho:ko,fe.tm_mon-1),3)},"%m":function(fe){return ke(fe.tm_mon+1,2)},"%M":function(fe){return ke(fe.tm_min,2)},"%n":function(){return`
`},"%p":function(fe){return fe.tm_hour>=0&&fe.tm_hour<12?"AM":"PM"},"%S":function(fe){return ke(fe.tm_sec,2)},"%t":function(){return"	"},"%u":function(fe){return fe.tm_wday||7},"%U":function(fe){var Fe=fe.tm_yday+7-fe.tm_wday;return ke(Math.floor(Fe/7),2)},"%V":function(fe){var Fe=Math.floor((fe.tm_yday+7-(fe.tm_wday+6)%7)/7);if((fe.tm_wday+371-fe.tm_yday-2)%7<=2&&Fe++,Fe){if(Fe==53){var Nt=(fe.tm_wday+371-fe.tm_yday)%7;Nt!=4&&(Nt!=3||!Wr(fe.tm_year))&&(Fe=1)}}else{Fe=52;var qt=(fe.tm_wday+7-fe.tm_yday-1)%7;(qt==4||qt==5&&Wr(fe.tm_year%400-1))&&Fe++}return ke(Fe,2)},"%w":function(fe){return fe.tm_wday},"%W":function(fe){var Fe=fe.tm_yday+7-(fe.tm_wday+6)%7;return ke(Math.floor(Fe/7),2)},"%y":function(fe){return(fe.tm_year+1900).toString().substring(2)},"%Y":function(fe){return fe.tm_year+1900},"%z":function(fe){var Fe=fe.tm_gmtoff,qt=Fe>=0;return Fe=Math.abs(Fe)/60,Fe=Fe/60*100+Fe%60,(qt?"+":"-")+("0000"+Fe).slice(-4)},"%Z":function(fe){return fe.tm_zone},"%%":function(){return"%"}};ce=ce.replace(/%%/g,"\0\0");for(var se in en)ce.includes(se)&&(ce=ce.replace(new RegExp(se,"g"),en[se](re)));ce=ce.replace(/\0\0/g,"%");var Sn=cd(ce);return Sn.length>_?0:(J(Sn,g),Sn.length-1)}function ud(g,_,A,O){return ld(g,_,A,O)}nt(),Ln=a.BindingError=Yn(Error,"BindingError"),kr=a.InternalError=Yn(Error,"InternalError"),pr(),De(),gu(),Fo=a.UnboundTypeError=Yn(Error,"UnboundTypeError"),Pu();function dd(){C("fetchSettings")}var Vo={__cxa_allocate_exception:ue,__cxa_throw:He,_embind_register_bigint:yt,_embind_register_bool:B,_embind_register_class:Mu,_embind_register_class_constructor:Tu,_embind_register_class_function:Au,_embind_register_emval:Lu,_embind_register_float:Iu,_embind_register_integer:Nu,_embind_register_memory_view:Fu,_embind_register_std_string:Ou,_embind_register_std_wstring:Wu,_embind_register_void:Xu,abort:Yu,emscripten_memcpy_big:ju,emscripten_resize_heap:Ku,environ_get:Qu,environ_sizes_get:ed,fd_close:td,fd_seek:nd,fd_write:ad,strftime_l:ud};y(),a.___wasm_call_ctors=me("__wasm_call_ctors");var as=a._malloc=me("malloc"),jn=a._free=me("free"),fd=a.___getTypeName=me("__getTypeName");a.__embind_initialize_bindings=me("_embind_initialize_bindings"),a.___errno_location=me("__errno_location"),a._fflush=me("fflush");var Go=a._emscripten_stack_init=function(){return(Go=a._emscripten_stack_init=a.asm.emscripten_stack_init).apply(null,arguments)};a._emscripten_stack_get_free=function(){return(a._emscripten_stack_get_free=a.asm.emscripten_stack_get_free).apply(null,arguments)},a._emscripten_stack_get_base=function(){return(a._emscripten_stack_get_base=a.asm.emscripten_stack_get_base).apply(null,arguments)};var ss=a._emscripten_stack_get_end=function(){return(ss=a._emscripten_stack_get_end=a.asm.emscripten_stack_get_end).apply(null,arguments)};a.stackSave=me("stackSave"),a.stackRestore=me("stackRestore"),a.stackAlloc=me("stackAlloc");var hd=a.___cxa_is_pointer_type=me("__cxa_is_pointer_type");a.dynCall_viijii=me("dynCall_viijii"),a.dynCall_ji=me("dynCall_ji"),a.dynCall_jiji=me("dynCall_jiji"),a.dynCall_iiiiij=me("dynCall_iiiiij"),a.dynCall_iiiiijj=me("dynCall_iiiiijj"),a.dynCall_iiiiiijj=me("dynCall_iiiiiijj");var pd=["run","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","getLEB","getFunctionTables","alignFunctionTables","registerFunctions","prettyPrint","getCompilerSetting","print","printErr","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","zeroMemory","stringToNewUTF8","exitJS","getHeapMax","emscripten_realloc_buffer","ENV","ERRNO_CODES","ERRNO_MESSAGES","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","DNS","getHostByName","Protocols","Sockets","getRandomDevice","warnOnce","traverseStack","UNWIND_CACHE","convertPCtoSourceLocation","readAsmConstArgsArray","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","setValue","getValue","PATH","PATH_FS","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","SYSCALLS","getSocketFromFD","getSocketAddress","JSEvents","registerKeyEventCallback","specialHTMLTargets","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","currentFullscreenStrategy","restoreOldWindowedStyle","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","dlopenMissingError","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","exception_addRef","exception_decRef","Browser","setMainLoop","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","_setNetworkCallback","tempFixedLengthArray","miniTempWebGLFloatBuffers","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","GL","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","AL","SDL_unicode","SDL_ttfContext","SDL_audio","SDL","SDL_gfx","GLUT","EGL","GLFW_Window","GLFW","GLEW","IDBStore","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","InternalError","BindingError","UnboundTypeError","PureVirtualError","init_embind","throwInternalError","throwBindingError","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","extendError","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","registeredTypes","awaitingDependencies","typeDependencies","registeredPointers","registerType","whenDependentTypesAreResolved","embind_charCodes","embind_init_charCodes","readLatin1String","getTypeName","heap32VectorToArray","requireRegisteredType","getShiftFromSize","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","simpleReadValueFromPointer","runDestructors","new_","craftInvokerFunction","embind__requireFunction","tupleRegistrations","structRegistrations","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_getPointee","RegisteredPointer_destructor","RegisteredPointer_deleteObject","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","ClassHandle_isAliasOf","throwInstanceAlreadyDeleted","ClassHandle_clone","ClassHandle_delete","deletionQueue","ClassHandle_isDeleted","ClassHandle_deleteLater","flushPendingDeletes","delayFunction","setDelayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_handle_array","emval_free_list","emval_symbols","init_emval","count_emval_handles","get_first_emval","getStringOrSymbol","Emval","emval_newers","craftEmvalAllocator","emval_get_global","emval_lookupTypes","emval_allocateDestructors","emval_methodCallers","emval_addMethodCaller","emval_registeredMethods"];pd.forEach(D);var md=["ptrToString","zeroMemory","stringToNewUTF8","exitJS","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","getRandomDevice","traverseStack","convertPCtoSourceLocation","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","listenOnce","autoResumeAudioContext","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertU32PairToI53","reallyNegative","unSign","strLen","reSign","formatString","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","checkWasiClock","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","exception_addRef","exception_decRef","setMainLoop","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","SDL_unicode","SDL_ttfContext","SDL_audio","GLFW_Window","runAndAbortIfError","registerInheritedInstance","unregisterInheritedInstance","requireRegisteredType","enumReadValueFromPointer","validateThis","getStringOrSymbol","craftEmvalAllocator","emval_get_global","emval_lookupTypes","emval_allocateDestructors","emval_addMethodCaller"];md.forEach(U);var Xr;ie=function g(){Xr||Wo(),Xr||(ie=g)};function gd(){Go(),ft()}function Wo(g){if(ae>0||(gd(),_t(),ae>0))return;function _(){Xr||(Xr=!0,a.calledRun=!0,!E&&(Ge(),s(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),w(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),We()))}a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),_()},1)):_(),I()}if(a.preInit)for(typeof a.preInit=="function"&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Wo(),r.ready}})();i.exports=t})(Ql);var Fv=Ql.exports,Ov=je&&je.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(oi,"__esModule",{value:!0});oi.LazPerf=oi.create=oi.createLazPerf=void 0;const No=Ov(Fv);oi.createLazPerf=No.default;oi.create=No.default;oi.LazPerf={create:No.default};Object.defineProperty(si,"__esModule",{value:!0});si.decompressFile=si.decompressChunk=si.PointData=void 0;const eu=oi,Bv=Br;si.PointData={createLazPerf:eu.createLazPerf,decompressChunk:nu,decompressFile:iu};let Fs;async function tu(i){return i||(Fs||(Fs=(0,eu.createLazPerf)()),Fs)}async function nu(i,{pointCount:e,pointDataRecordFormat:t,pointDataRecordLength:n},r){const a=await tu(r),s=new Uint8Array(e*n),o=a._malloc(i.byteLength),c=a._malloc(n),l=new a.ChunkDecoder;try{a.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o),l.open(t,n,o);for(let u=0;u<e;++u)l.getPoint(c),s.set(new Uint8Array(a.HEAPU8.buffer,c,n),u*n)}finally{a._free(o),a._free(c),l.delete()}return s}si.decompressChunk=nu;async function iu(i,e){const t=await tu(e),n=Bv.Header.parse(i),{pointCount:r,pointDataRecordLength:a}=n,s=new Uint8Array(r*a),o=t._malloc(i.byteLength),c=t._malloc(a),l=new t.LASZip;try{t.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o),l.open(o,i.byteLength);for(let u=0;u<r;++u)l.getPoint(c),s.set(new Uint8Array(t.HEAPU8.buffer,c,a),u*a)}finally{l.delete()}return s}si.decompressFile=iu;var Za={};Object.defineProperty(Za,"__esModule",{value:!0});Za.View=void 0;const zv=dn,Hv=Nr,kv=Or;Za.View={create:Vv};function Vv(i,e,t=[],n){let r=kv.Extractor.create(e,t);if(n){const u=new Set([...n]);r=Object.entries(r).reduce((f,[d,m])=>(u.has(d)&&(f[d]=m),f),{})}const a=Hv.Dimensions.create(r,t),s=zv.Binary.toDataView(i),o=e.pointDataRecordLength;if(s.byteLength%o!==0)throw new Error(`Invalid buffer length (${s.byteLength}) for point length ${o}`);const c=s.byteLength/e.pointDataRecordLength;function l(u){const f=r[u];if(!f)throw new Error(`No extractor for dimension: ${u}`);return function(d){if(d>=c)throw new RangeError(`View index (${d}) out of range: ${c}`);return f(s,d)}}return{pointCount:c,dimensions:a,getter:l}}var Ja={};Object.defineProperty(Ja,"__esModule",{value:!0});Ja.Vlr=void 0;const Tn=dn,cr=wn;Ja.Vlr={walk:Xv,parse:au,find:ru,at:Gv,fetch:Wv};function ru(i,e,t){return i.find(n=>n.userId===e&&n.recordId===t)}function Gv(i,e,t){const n=ru(i,e,t);if(!n)throw new Error(`VLR not found: ${e}/${t}`);return n}function Wv(i,{contentOffset:e,contentLength:t}){return t===0?new Uint8Array:Tn.Getter.create(i)(e,e+t)}async function Xv(i,e){const t=Tn.Getter.create(i),n=await nl({get:t,startOffset:e.headerLength,count:e.vlrCount,isExtended:!1}),r=await nl({get:t,startOffset:e.evlrOffset,count:e.evlrCount,isExtended:!0});return[...n,...r]}function au(i,e){return(e?jv:Yv)(i)}function Yv(i){const e=Tn.Binary.toDataView(i);if(e.byteLength!==cr.vlrHeaderLength)throw new Error(`Invalid VLR header length (must be ${cr.vlrHeaderLength}): ${e.byteLength}`);return{userId:Tn.Binary.toCString(i.slice(2,18)),recordId:e.getUint16(18,!0),contentLength:e.getUint16(20,!0),description:Tn.Binary.toCString(i.slice(22,54)),isExtended:!1}}function jv(i){const e=Tn.Binary.toDataView(i);if(e.byteLength!==cr.evlrHeaderLength)throw new Error(`Invalid EVLR header length (must be ${cr.evlrHeaderLength}): ${e.byteLength}`);return{userId:Tn.Binary.toCString(i.slice(2,18)),recordId:e.getUint16(18,!0),contentLength:(0,Tn.parseBigInt)((0,Tn.getBigUint64)(e,20,!0)),description:Tn.Binary.toCString(i.slice(28,60)),isExtended:!0}}async function nl({get:i,startOffset:e,count:t,isExtended:n}){const r=[];let a=e;const s=n?cr.evlrHeaderLength:cr.vlrHeaderLength;for(let o=0;o<t;++o){const c=s?await i(a,a+s):new Uint8Array,{userId:l,recordId:u,contentLength:f,description:d}=au(c,n);r.push({userId:l,recordId:u,contentOffset:a+s,contentLength:f,description:d,isExtended:n}),a+=s+f}return r}(function(i){var e=je&&je.__createBinding||(Object.create?function(f,d,m,v){v===void 0&&(v=m);var x=Object.getOwnPropertyDescriptor(d,m);(!x||("get"in x?!d.__esModule:x.writable||x.configurable))&&(x={enumerable:!0,get:function(){return d[m]}}),Object.defineProperty(f,v,x)}:function(f,d,m,v){v===void 0&&(v=m),f[v]=d[m]}),t=je&&je.__setModuleDefault||(Object.create?function(f,d){Object.defineProperty(f,"default",{enumerable:!0,value:d})}:function(f,d){f.default=d}),n=je&&je.__importStar||function(f){if(f&&f.__esModule)return f;var d={};if(f!=null)for(var m in f)m!=="default"&&Object.prototype.hasOwnProperty.call(f,m)&&e(d,f,m);return t(d,f),d};Object.defineProperty(i,"__esModule",{value:!0}),i.Vlr=i.View=i.PointData=i.Header=i.Extractor=i.ExtraBytes=i.Dimensions=i.Constants=void 0,i.Constants=n(wn);var r=Nr;Object.defineProperty(i,"Dimensions",{enumerable:!0,get:function(){return r.Dimensions}});var a=Fr;Object.defineProperty(i,"ExtraBytes",{enumerable:!0,get:function(){return a.ExtraBytes}});var s=Or;Object.defineProperty(i,"Extractor",{enumerable:!0,get:function(){return s.Extractor}});var o=Br;Object.defineProperty(i,"Header",{enumerable:!0,get:function(){return o.Header}});var c=si;Object.defineProperty(i,"PointData",{enumerable:!0,get:function(){return c.PointData}});var l=Za;Object.defineProperty(i,"View",{enumerable:!0,get:function(){return l.View}});var u=Ja;Object.defineProperty(i,"Vlr",{enumerable:!0,get:function(){return u.Vlr}})})(Do);var zr={};Object.defineProperty(zr,"__esModule",{value:!0});zr.Hierarchy=void 0;const Tr=dn,il=li;zr.Hierarchy={parse:su,load:$v};function su(i){const e=Tr.Binary.toDataView(i);if(e.byteLength%il.hierarchyItemLength!==0)throw new Error(`Invalid hierarchy page length: ${e.byteLength}`);const t={},n={};for(let r=0;r<e.byteLength;r+=il.hierarchyItemLength){const a=e.getInt32(r+0,!0),s=e.getInt32(r+4,!0),o=e.getInt32(r+8,!0),c=e.getInt32(r+12,!0),l=(0,Tr.parseBigInt)((0,Tr.getBigUint64)(e,r+16,!0)),u=e.getInt32(r+24,!0),f=e.getInt32(r+28,!0),d=Tr.Key.toString([a,s,o,c]);if(f<-1)throw new Error(`Invalid hierarchy point count at key: ${d}`);f===-1?n[d]={pageOffset:l,pageLength:u}:t[d]={pointCount:f,pointDataOffset:l,pointDataLength:u}}return{nodes:t,pages:n}}async function $v(i,e){const t=Tr.Getter.create(i);return su(await t(e.pageOffset,e.pageOffset+e.pageLength))}var Hr={};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.Info=void 0;const Er=dn,rl=li;Hr.Info={parse:qv};function qv(i){const e=Er.Binary.toDataView(i);if(e.byteLength!==rl.infoLength)throw new Error(`Invalid COPC info VLR length (should be ${rl.infoLength}): ${e.byteLength}`);const t=[e.getFloat64(0,!0),e.getFloat64(8,!0),e.getFloat64(16,!0)],n=e.getFloat64(24,!0);return{cube:[t[0]-n,t[1]-n,t[2]-n,t[0]+n,t[1]+n,t[2]+n],spacing:e.getFloat64(32,!0),rootHierarchyPage:{pageOffset:(0,Er.parseBigInt)((0,Er.getBigUint64)(e,40,!0)),pageLength:(0,Er.parseBigInt)((0,Er.getBigUint64)(e,48,!0))},gpsTimeRange:[e.getFloat64(56,!0),e.getFloat64(64,!0)]}}var Kv=je&&je.__createBinding||(Object.create?function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}:function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]}),Zv=je&&je.__setModuleDefault||(Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e}),Jv=je&&je.__importStar||function(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)t!=="default"&&Object.prototype.hasOwnProperty.call(i,t)&&Kv(e,i,t);return Zv(e,i),e};Object.defineProperty(Wa,"__esModule",{value:!0});Wa.Copc=void 0;const on=Jv(Do),Ba=dn,Qv=zr,e0=Hr;Wa.Copc={create:t0,loadHierarchyPage:n0,loadPointDataBuffer:ou,loadPointDataView:r0};async function t0(i){const e=Ba.Getter.create(i),t=65536,n=e(0,t);async function r(m,v){return v>=t?e(m,v):(await n).slice(m,v)}const a=on.Header.parse(await r(0,on.Constants.minHeaderLength)),s=await on.Vlr.walk(r,a),o=on.Vlr.find(s,"copc",1);if(!o)throw new Error("COPC info VLR is required");const c=e0.Info.parse(await on.Vlr.fetch(r,o));let l;const u=on.Vlr.find(s,"LASF_Projection",2112);u&&u.contentLength&&(l=Ba.Binary.toCString(await on.Vlr.fetch(r,u)),l===""&&(l=void 0));let f=[];const d=on.Vlr.find(s,"LASF_Spec",4);return d&&(f=on.ExtraBytes.parse(await on.Vlr.fetch(r,d))),{header:a,vlrs:s,info:c,wkt:l,eb:f}}async function n0(i,e){const t=Ba.Getter.create(i);return Qv.Hierarchy.load(t,e)}async function i0(i,{pointDataOffset:e,pointDataLength:t}){return Ba.Getter.create(i)(e,e+t)}async function ou(i,{pointDataRecordFormat:e,pointDataRecordLength:t},n,r){const a=await i0(i,n),{pointCount:s}=n;return on.PointData.decompressChunk(a,{pointCount:s,pointDataRecordFormat:e,pointDataRecordLength:t},r)}async function r0(i,e,t,{lazPerf:n,include:r}={}){const a=await ou(i,e.header,t,n);return on.View.create(a,e.header,e.eb,r)}(function(i){var e=je&&je.__createBinding||(Object.create?function(o,c,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(c,l);(!f||("get"in f?!c.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(o,u,f)}:function(o,c,l,u){u===void 0&&(u=l),o[u]=c[l]}),t=je&&je.__setModuleDefault||(Object.create?function(o,c){Object.defineProperty(o,"default",{enumerable:!0,value:c})}:function(o,c){o.default=c}),n=je&&je.__importStar||function(o){if(o&&o.__esModule)return o;var c={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&e(c,o,l);return t(c,o),c};Object.defineProperty(i,"__esModule",{value:!0}),i.Info=i.Hierarchy=i.Copc=i.Constants=void 0,i.Constants=n(li);var r=Wa;Object.defineProperty(i,"Copc",{enumerable:!0,get:function(){return r.Copc}});var a=zr;Object.defineProperty(i,"Hierarchy",{enumerable:!0,get:function(){return a.Hierarchy}});var s=Hr;Object.defineProperty(i,"Info",{enumerable:!0,get:function(){return s.Info}})})(Hl);(function(i){var e=je&&je.__createBinding||(Object.create?function(a,s,o,c){c===void 0&&(c=o);var l=Object.getOwnPropertyDescriptor(s,o);(!l||("get"in l?!s.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return s[o]}}),Object.defineProperty(a,c,l)}:function(a,s,o,c){c===void 0&&(c=o),a[c]=s[o]}),t=je&&je.__setModuleDefault||(Object.create?function(a,s){Object.defineProperty(a,"default",{enumerable:!0,value:s})}:function(a,s){a.default=s}),n=je&&je.__importStar||function(a){if(a&&a.__esModule)return a;var s={};if(a!=null)for(var o in a)o!=="default"&&Object.prototype.hasOwnProperty.call(a,o)&&e(s,a,o);return t(s,a),s},r=je&&je.__exportStar||function(a,s){for(var o in a)o!=="default"&&!Object.prototype.hasOwnProperty.call(s,o)&&e(s,a,o)};Object.defineProperty(i,"__esModule",{value:!0}),i.Las=i.Ept=void 0,i.Ept=n(Bl),r(Hl,i),i.Las=n(Do),r(dn,i)})(Ca);class a0 extends V_{constructor(e={}){super(),this._neighbourCount=8,this.neighbours=new Float32Array(this._neighbourCount*2);for(let n=0;n<this._neighbourCount;n++)this.neighbours[2*n+0]=Math.cos(2*n*Math.PI/this._neighbourCount),this.neighbours[2*n+1]=Math.sin(2*n*Math.PI/this._neighbourCount);const t={screenWidth:{value:0},screenHeight:{value:0},edlStrength:{value:1},uNear:{value:1},uFar:{value:1},radius:{value:1},neighbours:{value:this.neighbours},tDepth:{value:null},tDiffuse:{value:null},opacity:{value:1},uProj:{value:new Mt}};this.setValues({uniforms:t,vertexShader:`
                precision highp float;
                precision highp int;

                attribute vec3 position;
                attribute vec2 uv;

                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;

                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                precision highp float;
                precision highp int;

                #define NEIGHBOUR_COUNT 8
                
                uniform sampler2D tDiffuse;
                uniform sampler2D tDepth;
                uniform float screenWidth;
                uniform float screenHeight;
                uniform float edlStrength;
                uniform float radius;
                uniform float opacity;
                uniform float uNear;
                uniform float uFar;
                uniform vec2 neighbours[NEIGHBOUR_COUNT];
                uniform mat4 uProj;
                
                varying vec2 vUv;

                float linearizeDepth(float depth) {
                    float z_n = 2.0 * depth - 1.0;
                    return 2.0 * uNear * uFar / (uFar + uNear - z_n * (uFar - uNear));
                }

                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    
                    float depth = texture2D(tDepth, vUv).r;
                    depth = linearizeDepth(depth);

                    if (depth >= 0.999999) {
                        discard;
                    }

                    float sum = 0.0;
                    vec2 pixelSize = vec2(1.0 / screenWidth, 1.0 / screenHeight);

                    for (int i = 0; i < NEIGHBOUR_COUNT; i++) {
                        vec2 offset = neighbours[i] * radius * pixelSize;
                        float neighbourDepth = texture2D(tDepth, vUv + offset).r;
                        neighbourDepth = linearizeDepth(neighbourDepth);

                        float diff = depth - neighbourDepth;
                        float weight = diff > 0.0 ? 1.0 : 0.0;
                        
                        sum += weight * (1.0 - exp(-2.0 * diff * edlStrength));
                    }

                    float ao = sum / float(NEIGHBOUR_COUNT);
                    float intensity = 1.0 - ao;

                    gl_FragColor = vec4(color.rgb * intensity, opacity);
                }
            `,transparent:!0,lights:!1})}}const s0=`
varying vec3 vColor;
uniform float size;
uniform float scale;
uniform float spacing;
uniform float densityAdaptiveFactor;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // More moderate distance-based scaling
    float dist = max(0.1, -mvPosition.z);
    float distanceFactor = 1.0 / dist;
    
    // Reduced base size and more moderate adaptive scaling
    float adaptiveSpacing = pow(spacing, 0.4);
    float baseSize = size * 2.0; // Reduced from 4.0
    
    // More moderate size scaling in sparse areas
    float adaptiveFactor = densityAdaptiveFactor * (1.0 + adaptiveSpacing * 2.0);
    float adaptiveSize = baseSize * mix(1.0, 3.0, adaptiveSpacing) * adaptiveFactor;
    
    // Reduced size multiplier range
    float sizeMultiplier = mix(1.5, 2.5, smoothstep(0.0, 1.0, distanceFactor));
    
    // More moderate size limits
    gl_PointSize = max(
        3.0, // Reduced minimum size
        min(60.0, adaptiveSize * scale * sizeMultiplier) // Reduced maximum size
    );
}`,o0=`
varying vec3 vColor;

void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    
    // Slightly harder edges for better definition
    float alpha = 1.0 - smoothstep(0.35, 0.5, dist);
    
    if(dist > 0.5) {
        discard;
    }
    
    // Reduced center boost
    float centerBoost = 1.0 - smoothstep(0.0, 0.2, dist);
    vec3 adjustedColor = vColor * (1.0 + centerBoost * 0.1);
    
    gl_FragColor = vec4(adjustedColor, alpha);
}`;class c0{constructor(e,t){if(console.log("Initializing COPC viewer with:",{containerSelector:e,filename:t}),this.container=typeof e=="string"?document.querySelector(e):e,!this.container)throw new Error(`Container not found: ${e}`);(this.container.clientWidth===0||this.container.clientHeight===0)&&(this.container.style.width="100%",this.container.style.height="100%",(this.container.clientWidth===0||this.container.clientHeight===0)&&(this.container.parentElement?(this.container.style.width=`${this.container.parentElement.clientWidth}px`,this.container.style.height=`${this.container.parentElement.clientHeight}px`):(this.container.style.width="800px",this.container.style.height="600px"))),getComputedStyle(this.container).position==="static"&&(this.container.style.position="relative"),this.filename=t,this.loadedNodes=new Map,this.maxLoadedNodes=50,this.isInitialized=!1,this.stats={totalPointsLoaded:0,nodesLoaded:0,lastFrameTime:performance.now(),frameCount:0,fps:0},this.controlState={rotateSpeed:1,zoomSpeed:1.2,panSpeed:1,basePointSize:.025,minPointSize:.003,maxPointSize:.15,densityAdaptiveFactor:1.5,pointSizeScalingFactor:1.5},this.pointBudget={target:5e6,current:0,nodeScores:new Map},this.lodState={maxScreenSpaceError:8,maxConcurrentLoads:4,loadingNodes:new Set,nodeHierarchy:null,visibleNodes:new Set,lastViewUpdateTime:0,viewUpdateThrottle:100,spacing:null,cubeBounds:null,nodeDepths:new Map,minNodeSpacing:null,maxNodeSpacing:null},this.createStatsDisplay(),this.init()}async init(){console.log("Starting initialization...");try{this.scene=new Vc,this.camera=new cn(75,this.container.clientWidth/this.container.clientHeight,.1,1e4),this.renderer=new z_({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.appendChild(this.renderer.domElement),this.controls=new el(this.camera,this.renderer.domElement),this.controls.addEventListener("change",()=>this.updateVisibleNodes()),console.log("Loading COPC file..."),this.copc=await Ca.Copc.create(this.filename),this.lodState.spacing=this.copc.info.spacing,this.lodState.cubeBounds=this.copc.info.cube,console.log("COPC info loaded:",{spacing:this.lodState.spacing,cubeBounds:this.lodState.cubeBounds}),console.log("COPC file loaded:",{header:this.copc.header,pointFormat:this.copc.header.pointDataRecordFormat,pointLength:this.copc.header.pointDataRecordLength,totalPoints:this.copc.header.totalPoints});const{header:e}=this.copc;this.centerOffset=new k((e.max[0]+e.min[0])/2,(e.max[1]+e.min[1])/2,(e.max[2]+e.min[2])/2);const t=Math.abs(e.max[0]-e.min[0]),n=Math.abs(e.max[1]-e.min[1]),r=Math.abs(e.max[2]-e.min[2]),a=Math.max(t,n,r);this.scale=a>0?1/a:1,console.log("Point cloud stats:",{centerOffset:{x:this.centerOffset.x,y:this.centerOffset.y,z:this.centerOffset.z},size:{x:t,y:n,z:r},scale:this.scale}),console.log("Loading hierarchy page...");const{nodes:s,pages:o}=await Ca.Copc.loadHierarchyPage(this.filename,this.copc.info.rootHierarchyPage);console.log("Hierarchy loaded:",{nodeKeys:Object.keys(s),nodeCount:Object.keys(s).length,pageCount:Object.keys(o).length}),this.setupScene();const c=()=>{if(!this.lodState.nodeHierarchy||!this.copc?.info?.spacing){console.warn("Unable to calculate node spacings - missing required data");return}const l=this.copc.info.spacing,u=12;this.lodState.minNodeSpacing=l*Math.pow(.5,u),this.lodState.maxNodeSpacing=l,console.log("Node spacings calculated:",{min:this.lodState.minNodeSpacing,max:this.lodState.maxNodeSpacing})};console.log("Loading initial nodes..."),await this.loadInitialNodes(s),c(),this.isInitialized=!0,this.animate(),this.setupResizeObserver(),console.log("Initialization complete")}catch(e){throw console.error("Failed to initialize viewer:",e),this.container.innerHTML=`
        <div style="color: red; padding: 20px;">
          Failed to initialize viewer: ${e.message}
        </div>
      `,e}}setupScene(){const e=new G_(1);this.scene.add(e);const t=new Kc(2,20);this.scene.add(t),this.camera.position.set(2,2,2),this.camera.lookAt(0,0,0),this.controls=new el(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=this.controlState.rotateSpeed,this.controls.zoomSpeed=this.controlState.zoomSpeed,this.controls.panSpeed=this.controlState.panSpeed,this.controls.enableRotate=!0,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.controls.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.controls.minDistance=.1,this.controls.maxDistance=10,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=Math.PI,this.setupScrollHandler();const{header:n}=this.copc,r=Math.max(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);this.camera.near=r*this.scale*1e-4,this.camera.far=r*this.scale*10,this.camera.updateProjectionMatrix(),this.setupKeyboardControls(),this.setupEDLRendering()}setupEDLRendering(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderTarget=new _n(e,t,{minFilter:wt,magFilter:wt,format:Xt,type:rn}),this.depthTarget=new _n(e,t,{minFilter:wt,magFilter:wt,format:Xt,type:rn});const n=new a0;n.uniforms.tDiffuse.value=this.renderTarget.texture,n.uniforms.tDepth.value=this.depthTarget.texture,n.uniforms.screenWidth.value=e,n.uniforms.screenHeight.value=t,n.uniforms.edlStrength.value=1,n.uniforms.radius.value=1.5,n.uniforms.uNear.value=this.camera.near,n.uniforms.uFar.value=this.camera.far;const r=new Ur(2,2);this.edlQuad=new An(r,n),this.edlQuad.frustumCulled=!1,this.edlScene=new Vc,this.edlScene.add(this.edlQuad),this.edlCamera=new Ll(-1,1,1,-1,0,1)}setupScrollHandler(){this.renderer.domElement.addEventListener("wheel",e=>{if(e.shiftKey){e.preventDefault();const t=e.deltaY>0?.9:1.1;this.adjustPointSize(t)}},{passive:!1})}setupKeyboardControls(){window.addEventListener("keydown",e=>{switch(e.key.toLowerCase()){case"r":this.resetView();break;case"+":this.adjustPointSize(1.1);break;case"-":this.adjustPointSize(.9);break;case"g":this.toggleGrid();break;case"[":this.updateDensityAdaptiveFactor(this.controlState.densityAdaptiveFactor*.9);break;case"]":this.updateDensityAdaptiveFactor(this.controlState.densityAdaptiveFactor*1.1);break}})}resetView(){this.camera.position.set(2,2,2),this.controls.target.set(0,0,0),this.camera.lookAt(0,0,0),this.controls.reset(),this.controlState.pointSize=.01,this.scene.traverse(e=>{e instanceof xa&&(e.material.size=this.controlState.pointSize)})}adjustPointSize(e){this.controlState.basePointSize=go.clamp(this.controlState.basePointSize*e,this.controlState.minPointSize,this.controlState.maxPointSize),this.scene.traverse(t=>{t instanceof xa&&t.material.uniforms&&t.material.uniforms.size&&(t.material.uniforms.size.value=this.controlState.basePointSize)})}updateDensityAdaptiveFactor(e){this.controlState.densityAdaptiveFactor=go.clamp(e,.1,2),this.scene.traverse(t=>{t instanceof xa&&t.material.uniforms&&t.material.uniforms.densityAdaptiveFactor&&(t.material.uniforms.densityAdaptiveFactor.value=this.controlState.densityAdaptiveFactor)})}toggleGrid(){this.scene.traverse(e=>{e instanceof Kc&&(e.visible=!e.visible)})}async loadInitialNodes(e){this.lodState.nodeHierarchy=e;const t=e["0-0-0-0"];if(!t){console.error("Root node not found!");return}await this.loadNode(t,"0-0-0-0"),await this.updateVisibleNodes(!0)}async loadNode(e,t){if(!(!e||this.loadedNodes.has(t)))try{this.lodState.loadingNodes.add(t);const n=await Ca.Copc.loadPointDataView(this.filename,this.copc,e),r=n.getter("X"),a=n.getter("Y"),s=n.getter("Z"),o=n.getter("Red"),c=n.getter("Green"),l=n.getter("Blue");if(!e.pointCount){console.warn(`Node ${t} has no points`);return}const u=this.getNodeBounds(t),f=new k((u.min[0]+u.max[0])/2,(u.min[1]+u.max[1])/2,(u.min[2]+u.max[2])/2),d=new Float32Array(e.pointCount*3),m=new Float32Array(e.pointCount*3);let v=0;for(let z=0;z<e.pointCount;z++){const T=r(z),E=a(z),w=s(z);if(!isFinite(T)||!isFinite(E)||!isFinite(w))continue;const ee=T-f.x,q=E-f.y,P=w-f.z,N=(f.x-this.centerOffset.x+ee)*this.scale,V=(f.z-this.centerOffset.z+P)*this.scale,Q=-(f.y-this.centerOffset.y+q)*this.scale;d[v*3]=N,d[v*3+1]=V,d[v*3+2]=Q,o&&c&&l?(m[v*3]=o(z)/65535,m[v*3+1]=c(z)/65535,m[v*3+2]=l(z)/65535):(m[v*3]=.7,m[v*3+1]=.7,m[v*3+2]=.7),v++}if(v===0)return;const x=new un,p=new Float32Array(d.buffer,0,v*3),h=new Float32Array(m.buffer,0,v*3);x.setAttribute("position",new ln(p,3)),x.setAttribute("color",new ln(h,3));const R=parseInt(t.split("-")[0]),b=Math.max(u.max[0]-u.min[0],u.max[1]-u.min[1],u.max[2]-u.min[2]),C=this.copc.info.spacing*Math.pow(.5,R),F=(C-this.lodState.minNodeSpacing)/(this.lodState.maxNodeSpacing-this.lodState.minNodeSpacing),U=new Rn({vertexShader:s0,fragmentShader:o0,uniforms:{size:{value:this.controlState.basePointSize},scale:{value:window.devicePixelRatio},spacing:{value:this.lodState.maxNodeSpacing?(C-this.lodState.minNodeSpacing)/(this.lodState.maxNodeSpacing-this.lodState.minNodeSpacing):1},densityAdaptiveFactor:{value:this.controlState.densityAdaptiveFactor}},vertexColors:!0}),D=new xa(x,U);D.name=`node-${t}`,this.scene.add(D),this.loadedNodes.set(t,{lastAccessed:performance.now(),pointCount:v}),this.stats.totalPointsLoaded+=v,this.stats.nodesLoaded=this.loadedNodes.size}catch(n){console.error(`Failed to load node ${t}:`,n)}finally{this.lodState.loadingNodes.delete(t)}}unloadNode(e){const t=this.scene.getObjectByName(`node-${e}`);if(t){this.scene.remove(t),t.geometry.dispose(),t.material.dispose();const n=this.loadedNodes.get(e);n&&(this.stats.totalPointsLoaded-=n.pointCount),this.loadedNodes.delete(e)}}async updateVisibleNodes(e=!1){const t=performance.now();if(!(!e&&t-this.lodState.lastViewUpdateTime<this.lodState.viewUpdateThrottle)&&!this.lodState.isUpdating)try{if(this.lodState.isUpdating=!0,this.lodState.lastViewUpdateTime=t,this.lodState.loadingNodes.size>=this.lodState.maxConcurrentLoads)return;const n=new Ro,r=new Mt;r.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),n.setFromProjectionMatrix(r);const a=C=>{const F=this.getNodeBounds(C),U=new ur(new k(...F.min).sub(this.centerOffset).multiplyScalar(this.scale),new k(...F.max).sub(this.centerOffset).multiplyScalar(this.scale));return n.intersectsBox(U)};let s=0;const o=new Map;for(const[C,F]of this.loadedNodes)a(C)?(o.set(C,F),s+=F.pointCount):this.unloadNode(C);this.loadedNodes=o;const c=new Map,l=new Set(this.loadedNodes.keys()),u=C=>{const F=this.getNodeBounds(C),U=new k((F.max[0]+F.min[0])/2,(F.max[1]+F.min[1])/2,(F.max[2]+F.min[2])/2).sub(this.centerOffset).multiplyScalar(this.scale),D=this.camera.position.distanceTo(U),z=new k(F.max[0]-F.min[0],F.max[1]-F.min[1],F.max[2]-F.min[2]).length()*this.scale,T=this.camera.fov*Math.PI/180;return z*this.renderer.domElement.height/(2*D*Math.tan(T/2))},f=C=>{const F=this.getNodeBounds(C),U=new k((F.max[0]+F.min[0])/2,(F.max[1]+F.min[1])/2,(F.max[2]+F.min[2])/2).sub(this.centerOffset).multiplyScalar(this.scale),D=this.camera.position.distanceTo(U);return Math.min(Math.floor(8-Math.log2(D)),12)},d=C=>{const F=this.lodState.nodeHierarchy[C];if(!F||!a(C))return;const U=parseInt(C.split("-")[0]),D=f(C);if(!(U>D)&&(c.has(U)||c.set(U,new Set),c.get(U).add({key:C,node:F}),U<D&&u(C)>this.lodState.maxScreenSpaceError)){const T=this.getChildKeys(C);for(const E of T)this.lodState.nodeHierarchy[E]&&d(E)}};d("0-0-0-0");const m=this.pointBudget.target-s,v=this.lodState.maxConcurrentLoads-this.lodState.loadingNodes.size,x=new Map;let p=0;const h=Array.from(c.keys()).sort((C,F)=>C-F);for(const C of h){const F=c.get(C);for(const{key:U,node:D}of F)if(!(this.loadedNodes.has(U)||this.lodState.loadingNodes.has(U))){if(p>=v||D.pointCount>m-s)break;x.set(U,D),s+=D.pointCount,p++,l.add(U)}if(p>=v||s>=this.pointBudget.target)break}const R=[];for(const[C,F]of x)R.push(this.loadNode(F,C));await Promise.all(R),this.lodState.visibleNodes=l,this.pointBudget.current=s;const b=Array.from(c.entries()).map(([C,F])=>`D${C}: ${F.size}`).join(", ");console.log(`Selected ${p} nodes to load`),console.log(`Visible nodes by depth: ${b}`),console.log(`Total points: ${s.toLocaleString()}/${this.pointBudget.target.toLocaleString()}`)}finally{this.lodState.isUpdating=!1}}calculateScreenSpaceError(e,t){if(!this.lodState.nodeHierarchy[e])return 1/0;const r=this.getNodeBounds(e),a=new k((r.max[0]+r.min[0])/2,(r.max[1]+r.min[1])/2,(r.max[2]+r.min[2])/2),s=new k(r.max[0]-r.min[0],r.max[1]-r.min[1],r.max[2]-r.min[2]).length();a.sub(this.centerOffset).multiplyScalar(this.scale);const o=t.distanceTo(a);if(o===0)return 1/0;const c=parseInt(e.split("-")[0]),l=s*Math.pow(2,-c),u=this.renderer.domElement.height,f=this.camera.fov*Math.PI/180;return l*u/(2*o*Math.tan(f/2))}getNodeBounds(e){const[t,n,r,a]=e.split("-").map(Number),[s,o,c,l,u,f]=this.lodState.cubeBounds,d=(l-s)/Math.pow(2,t),m=s+n*d,v=o+r*d,x=c+a*d;return{min:[m,v,x],max:[m+d,v+d,x+d]}}getChildKeys(e){const[t,n,r,a]=e.split("-").map(Number),s=t+1,o=n*2,c=r*2,l=a*2;return[`${s}-${o}-${c}-${l}`,`${s}-${o+1}-${c}-${l}`,`${s}-${o}-${c+1}-${l}`,`${s}-${o+1}-${c+1}-${l}`,`${s}-${o}-${c}-${l+1}`,`${s}-${o+1}-${c}-${l+1}`,`${s}-${o}-${c+1}-${l+1}`,`${s}-${o+1}-${c+1}-${l+1}`]}createStatsDisplay(){this.statsDisplay=document.createElement("div"),this.statsDisplay.style.cssText=`
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            font-family: monospace;
            font-size: 12px;
            pointer-events: none;
            z-index: 100;
            white-space: pre;
        `,this.container.appendChild(this.statsDisplay)}updateStatsDisplay(){if(!this.statsDisplay)return;const e=new Map;for(const n of this.lodState.visibleNodes){const r=parseInt(n.split("-")[0]);e.has(r)||e.set(r,0),e.set(r,e.get(r)+1)}const t={FPS:this.stats.fps.toFixed(1),"Points Loaded":this.stats.totalPointsLoaded.toLocaleString(),"Point Budget":`${this.pointBudget.current.toLocaleString()} / ${this.pointBudget.target.toLocaleString()}`,"Nodes by Depth":Array.from(e.entries()).sort((n,r)=>n[0]-r[0]).map(([n,r])=>`D${n}: ${r}`).join(", "),"Loading Nodes":this.lodState.loadingNodes.size,"Camera Position":this.camera?{X:this.camera.position.x.toFixed(2),Y:this.camera.position.y.toFixed(2),Z:this.camera.position.z.toFixed(2)}:"Not set"};this.statsDisplay.innerHTML=Object.entries(t).map(([n,r])=>typeof r=="object"?`${n}:
  ${Object.entries(r).map(([a,s])=>`${a}: ${s}`).join(`
  `)}`:`${n}: ${r}`).join(`
`)}animate(){if(!this.isInitialized)return;if(requestAnimationFrame(()=>this.animate()),this.controls.update(),this.updateVisibleNodes(),this.edlQuad&&this.edlQuad.material.uniforms.uProj.value.copy(this.camera.projectionMatrix),this.renderTarget&&this.depthTarget){const n=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.depthTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.edlScene,this.edlCamera),this.renderer.setRenderTarget(n)}else this.renderer.render(this.scene,this.camera);const e=performance.now(),t=e-this.stats.lastFrameTime;this.stats.frameCount++,t>=1e3&&(this.stats.fps=this.stats.frameCount*1e3/t,this.stats.frameCount=0,this.stats.lastFrameTime=e,this.updateStatsDisplay())}toggleEDL(e=!0){e?(this.renderTarget=new _n(this.container.clientWidth,this.container.clientHeight,{minFilter:wt,magFilter:wt,format:Xt,type:rn}),this.depthTarget=new _n(this.container.clientWidth,this.container.clientHeight,{minFilter:wt,magFilter:wt,format:Xt,type:rn})):(this.renderTarget&&(this.renderTarget.dispose(),this.renderTarget=null),this.depthTarget&&(this.depthTarget.dispose(),this.depthTarget=null))}setEDLStrength(e){this.edlQuad&&(this.edlQuad.material.uniforms.edlStrength.value=e)}setEDLRadius(e){this.edlQuad&&(this.edlQuad.material.uniforms.radius.value=e)}dispose(){this.isInitialized=!1,this.loadedNodes.forEach((e,t)=>this.unloadNode(t)),this.renderTarget&&this.renderTarget.dispose(),this.depthTarget&&this.depthTarget.dispose(),this.edlQuad&&(this.edlQuad.geometry.dispose(),this.edlQuad.material.dispose()),this.renderer&&this.renderer.dispose(),this.controls&&this.controls.dispose(),this.container.innerHTML=""}updatePointBudget(e){this.pointBudget.target=e,this.updateVisibleNodes(!0)}manageMemory(){if(this.loadedNodes.size>this.maxLoadedNodes){const e=Array.from(this.loadedNodes.entries()).sort((t,n)=>t[1].lastAccessed-n[1].lastAccessed);for(;this.loadedNodes.size>this.maxLoadedNodes;){const[t]=e.shift();this.unloadNode(t)}}}setupResizeObserver(){new ResizeObserver(t=>{for(const n of t)n.target===this.container&&this.onResize()}).observe(this.container)}onResize(){if(!this.isInitialized)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.edlQuad&&(this.edlQuad.material.uniforms.screenWidth.value=e,this.edlQuad.material.uniforms.screenHeight.value=t,this.edlQuad.material.uniforms.uProj.value.copy(this.camera.projectionMatrix)),this.renderTarget.setSize(e,t),this.depthTarget.setSize(e,t)}}const l0="https://public-aco-data.s3.us-east-1.amazonaws.com/data/4012_PlaceGlacier/23_4012_07/23_4012_07_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";async function u0(){console.log("Starting main function"),new c0("#app",l0)}u0();
