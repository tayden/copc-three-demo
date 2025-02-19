(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="167",Hn={ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pd=0,Wo=1,md=2,rl=1,gd=2,zn=3,ci=0,Kt=1,kn=2,ii=0,Zi=1,Xo=2,Yo=3,jo=4,_d=5,Mi=100,vd=101,yd=102,xd=103,Sd=104,Md=200,Ed=201,bd=202,Td=203,Fs=204,Os=205,Ad=206,wd=207,Cd=208,Rd=209,Pd=210,Ld=211,Dd=212,Id=213,Ud=214,Nd=0,Fd=1,Od=2,wa=3,Bd=4,zd=5,Hd=6,kd=7,al=0,Vd=1,Gd=2,ri=0,Wd=1,Xd=2,Yd=3,jd=4,$d=5,qd=6,Kd=7,sl=300,er=301,tr=302,Bs=303,zs=304,Fa=306,Hs=1e3,bi=1001,ks=1002,At=1003,Zd=1004,Wr=1005,vn=1006,ss=1007,Ti=1008,Gn=1009,ol=1010,cl=1011,wr=1012,xo=1013,Ai=1014,nn=1015,Rr=1016,So=1017,Mo=1018,nr=1020,ll=35902,ul=1021,dl=1022,Yt=1023,fl=1024,hl=1025,Ji=1026,ir=1027,pl=1028,Eo=1029,ml=1030,bo=1031,To=1033,ya=33776,xa=33777,Sa=33778,Ma=33779,Vs=35840,Gs=35841,Ws=35842,Xs=35843,Ys=36196,js=37492,$s=37496,qs=37808,Ks=37809,Zs=37810,Js=37811,Qs=37812,eo=37813,to=37814,no=37815,io=37816,ro=37817,ao=37818,so=37819,oo=37820,co=37821,Ea=36492,lo=36494,uo=36495,gl=36283,fo=36284,ho=36285,po=36286,Jd=3200,Qd=3201,ef=0,tf=1,ni="",bn="srgb",ui="srgb-linear",Ao="display-p3",Oa="display-p3-linear",Ca="linear",gt="srgb",Ra="rec709",Pa="p3",Di=7680,$o=519,nf=512,rf=513,af=514,_l=515,sf=516,of=517,cf=518,lf=519,qo=35044,Ko="300 es",Vn=2e3,La=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zo=1234567;const br=Math.PI/180,Cr=180/Math.PI;function cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function wo(i,e){return(i%e+e)%e}function uf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function df(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function ff(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function hf(i,e=1){return e-Math.abs(wo(i,e*2)-e)}function pf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function _f(i,e){return i+Math.random()*(e-i)}function vf(i){return i*(.5-Math.random())}function yf(i){i!==void 0&&(Zo=i);let e=Zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xf(i){return i*br}function Sf(i){return i*Cr}function Mf(i){return(i&i-1)===0&&i!==0}function Ef(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tf(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),u=s((e+n)/2),d=a((e-n)/2),f=s((e-n)/2),m=a((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(o*u,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mo={DEG2RAD:br,RAD2DEG:Cr,generateUUID:cr,clamp:kt,euclideanModulo:wo,mapLinear:uf,inverseLerp:df,lerp:Tr,damp:ff,pingpong:hf,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:_f,randFloatSpread:vf,seededRandom:yf,degToRad:xf,radToDeg:Sf,isPowerOfTwo:Mf,ceilPowerOfTwo:Ef,floorPowerOfTwo:bf,setQuaternionFromProperEuler:Tf,normalize:Wt,denormalize:qi};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,a,s,o,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],x=r[0],p=r[3],h=r[6],L=r[1],A=r[4],w=r[7],O=r[2],D=r[5],P=r[8];return a[0]=s*x+o*L+c*O,a[3]=s*p+o*A+c*D,a[6]=s*h+o*w+c*P,a[1]=l*x+u*L+d*O,a[4]=l*p+u*A+d*D,a[7]=l*h+u*w+d*P,a[2]=f*x+m*L+v*O,a[5]=f*p+m*A+v*D,a[8]=f*h+m*w+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*a*u+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*s-o*l,f=o*c-u*a,m=l*a-s*c,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*l-u*n)*x,e[2]=(o*n-r*s)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*a-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(s*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new Qe;function vl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){const i=Da("canvas");return i.style.display="block",i}const Jo={};function Ar(i){i in Jo||(Jo[i]=!0,console.warn(i))}function wf(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const Qo=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ec=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[ui]:{transfer:Ca,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[bn]:{transfer:gt,primaries:Ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Oa]:{transfer:Ca,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ec),fromReference:i=>i.applyMatrix3(Qo)},[Ao]:{transfer:gt,primaries:Pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ec),fromReference:i=>i.applyMatrix3(Qo).convertLinearToSRGB()}},Cf=new Set([ui,Oa]),dt={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Cf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=mr[e].toReference,r=mr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return mr[i].primaries},getTransfer:function(i){return i===ni?Ca:mr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(mr[e].luminanceCoefficients)}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class Rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Da("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Qi(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pf=0;class yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ls(r[s].image)):a.push(ls(r[s]))}else a=ls(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ls(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class Zt extends Ci{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=bi,r=bi,a=vn,s=Ti,o=Yt,c=Gn,l=Zt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=cr(),this.name="",this.source=new yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hs:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hs:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=sl;Zt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],v=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,w=(m+1)/2,O=(h+1)/2,D=(u+f)/4,P=(d+x)/4,I=(v+p)/4;return A>w&&A>O?A<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(A),r=D/n,a=P/n):w>O?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=D/r,a=I/r):O<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(O),n=P/a,r=I/a),this.set(n,r,a,t),this}let L=Math.sqrt((p-v)*(p-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(L)<.001&&(L=1),this.x=(p-v)/L,this.y=(d-x)/L,this.z=(f-u)/L,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Df extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xl extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const f=a[s+0],m=a[s+1],v=a[s+2],x=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(d!==x||c!==f||l!==m||u!==v){let p=1-o;const h=c*f+l*m+u*v+d*x,L=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const O=Math.sqrt(A),D=Math.atan2(O,h*L);p=Math.sin(p*D)/O,o=Math.sin(o*D)/O}const w=o*L;if(c=c*p+f*w,l=l*p+m*w,u=u*p+v*w,d=d*p+x*w,p===1-o){const O=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=O,l*=O,u*=O,d*=O}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=a[s],f=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+u*d+c*m-l*f,e[t+1]=c*v+u*f+l*d-o*m,e[t+2]=l*v+u*m+o*f-c*d,e[t+3]=u*v-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(a/2),f=c(n/2),m=c(r/2),v=c(a/2);switch(s){case"XYZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"YZX":this._x=f*u*d+l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d-f*m*v;break;case"XZY":this._x=f*u*d-l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(s-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(a-l)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(s-r)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-n*l,this._z=a*u+s*l+n*c-r*o,this._w=s*u-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),u=2*(o*t-a*r),d=2*(a*n-s*t);return this.x=t+c*l+s*d-o*u,this.y=n+c*u+o*l-a*d,this.z=r+c*d+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new V,tc=new wi;class lr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,mn):mn.fromBufferAttribute(a,s),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),Yr.subVectors(this.max,gr),Ui.subVectors(e.a,gr),Ni.subVectors(e.b,gr),Fi.subVectors(e.c,gr),$n.subVectors(Ni,Ui),qn.subVectors(Fi,Ni),mi.subVectors(Ui,Fi);let t=[0,-$n.z,$n.y,0,-qn.z,qn.y,0,-mi.z,mi.y,$n.z,0,-$n.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-$n.y,$n.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!ds(t,Ui,Ni,Fi,Yr)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,Ui,Ni,Fi,Yr))?!1:(jr.crossVectors($n,qn),t=[jr.x,jr.y,jr.z],ds(t,Ui,Ni,Fi,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new V,new V,new V,new V,new V,new V,new V,new V],mn=new V,Xr=new lr,Ui=new V,Ni=new V,Fi=new V,$n=new V,qn=new V,mi=new V,gr=new V,Yr=new V,jr=new V,gi=new V;function ds(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){gi.fromArray(i,a);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Uf=new lr,_r=new V,fs=new V;class Pr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uf.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);const t=_r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_r,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(fs)),this.expandByPoint(_r.copy(e.center).sub(fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new V,hs=new V,$r=new V,Kn=new V,ps=new V,qr=new V,ms=new V;class Ba{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hs.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(hs);const a=e.distanceTo(t)*.5,s=-this.direction.dot($r),o=Kn.dot(this.direction),c=-Kn.dot($r),l=Kn.lengthSq(),u=Math.abs(1-s*s);let d,f,m,v;if(u>0)if(d=s*c-o,f=s*o-c,v=a*u,d>=0)if(f>=-v)if(f<=v){const x=1/u;d*=x,f*=x,m=d*(d+s*f+2*o)+f*(s*d+f+2*c)+l}else f=a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+l);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hs).addScaledVector($r,f),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,a){ps.subVectors(t,e),qr.subVectors(n,e),ms.crossVectors(ps,qr);let s=this.direction.dot(ms),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(qr.crossVectors(Kn,qr));if(c<0)return null;const l=o*this.direction.dot(ps.cross(Kn));if(l<0||c+l>s)return null;const u=-o*Kn.dot(ms);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,n,r,a,s,o,c,l,u,d,f,m,v,x,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,u,d,f,m,v,x,p)}set(e,t,n,r,a,s,o,c,l,u,d,f,m,v,x,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),a=1/Oi.setFromMatrixColumn(e,1).length(),s=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*u,m=s*d,v=o*u,x=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+v*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=v+m*l,t[10]=s*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,v=l*u,x=l*d;t[0]=f+x*o,t[4]=v*o-m,t[8]=s*l,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=m*o-v,t[6]=x+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,v=l*u,x=l*d;t[0]=f-x*o,t[4]=-s*d,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*u,t[9]=x-f*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*u,m=s*d,v=o*u,x=o*d;t[0]=c*u,t[4]=v*l-m,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,m=s*l,v=o*c,x=o*l;t[0]=c*u,t[4]=x-f*d,t[8]=v*d+m,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*d+v,t[10]=f-x*d}else if(e.order==="XZY"){const f=s*c,m=s*l,v=o*c,x=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+x,t[5]=s*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nf,e,Ff)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Zn.crossVectors(n,en),Zn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Zn.crossVectors(n,en)),Zn.normalize(),Kr.crossVectors(en,Zn),r[0]=Zn.x,r[4]=Kr.x,r[8]=en.x,r[1]=Zn.y,r[5]=Kr.y,r[9]=en.y,r[2]=Zn.z,r[6]=Kr.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],x=n[6],p=n[10],h=n[14],L=n[3],A=n[7],w=n[11],O=n[15],D=r[0],P=r[4],I=r[8],b=r[12],E=r[1],N=r[5],Q=r[9],q=r[13],R=r[2],F=r[6],H=r[10],K=r[14],Y=r[3],re=r[7],le=r[11],ue=r[15];return a[0]=s*D+o*E+c*R+l*Y,a[4]=s*P+o*N+c*F+l*re,a[8]=s*I+o*Q+c*H+l*le,a[12]=s*b+o*q+c*K+l*ue,a[1]=u*D+d*E+f*R+m*Y,a[5]=u*P+d*N+f*F+m*re,a[9]=u*I+d*Q+f*H+m*le,a[13]=u*b+d*q+f*K+m*ue,a[2]=v*D+x*E+p*R+h*Y,a[6]=v*P+x*N+p*F+h*re,a[10]=v*I+x*Q+p*H+h*le,a[14]=v*b+x*q+p*K+h*ue,a[3]=L*D+A*E+w*R+O*Y,a[7]=L*P+A*N+w*F+O*re,a[11]=L*I+A*Q+w*H+O*le,a[15]=L*b+A*q+w*K+O*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],x=e[7],p=e[11],h=e[15];return v*(+a*c*d-r*l*d-a*o*f+n*l*f+r*o*m-n*c*m)+x*(+t*c*m-t*l*f+a*s*f-r*s*m+r*l*u-a*c*u)+p*(+t*l*d-t*o*m-a*s*d+n*s*m+a*o*u-n*l*u)+h*(-r*o*u-t*c*d+t*o*f+r*s*d-n*s*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],x=e[13],p=e[14],h=e[15],L=d*p*l-x*f*l+x*c*m-o*p*m-d*c*h+o*f*h,A=v*f*l-u*p*l-v*c*m+s*p*m+u*c*h-s*f*h,w=u*x*l-v*d*l+v*o*m-s*x*m-u*o*h+s*d*h,O=v*d*c-u*x*c-v*o*f+s*x*f+u*o*p-s*d*p,D=t*L+n*A+r*w+a*O;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=L*P,e[1]=(x*f*a-d*p*a-x*r*m+n*p*m+d*r*h-n*f*h)*P,e[2]=(o*p*a-x*c*a+x*r*l-n*p*l-o*r*h+n*c*h)*P,e[3]=(d*c*a-o*f*a-d*r*l+n*f*l+o*r*m-n*c*m)*P,e[4]=A*P,e[5]=(u*p*a-v*f*a+v*r*m-t*p*m-u*r*h+t*f*h)*P,e[6]=(v*c*a-s*p*a-v*r*l+t*p*l+s*r*h-t*c*h)*P,e[7]=(s*f*a-u*c*a+u*r*l-t*f*l-s*r*m+t*c*m)*P,e[8]=w*P,e[9]=(v*d*a-u*x*a-v*n*m+t*x*m+u*n*h-t*d*h)*P,e[10]=(s*x*a-v*o*a+v*n*l-t*x*l-s*n*h+t*o*h)*P,e[11]=(u*o*a-s*d*a-u*n*l+t*d*l+s*n*m-t*o*m)*P,e[12]=O*P,e[13]=(u*x*r-v*d*r+v*n*f-t*x*f-u*n*p+t*d*p)*P,e[14]=(v*o*r-s*x*r-v*n*c+t*x*c+s*n*p-t*o*p)*P,e[15]=(s*d*r-u*o*r+u*n*c-t*d*c-s*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,d=o+o,f=a*l,m=a*u,v=a*d,x=s*u,p=s*d,h=o*d,L=c*l,A=c*u,w=c*d,O=n.x,D=n.y,P=n.z;return r[0]=(1-(x+h))*O,r[1]=(m+w)*O,r[2]=(v-A)*O,r[3]=0,r[4]=(m-w)*D,r[5]=(1-(f+h))*D,r[6]=(p+L)*D,r[7]=0,r[8]=(v+A)*P,r[9]=(p-L)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Oi.set(r[0],r[1],r[2]).length();const s=Oi.set(r[4],r[5],r[6]).length(),o=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const l=1/a,u=1/s,d=1/o;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=Vn){const c=this.elements,l=2*a/(t-e),u=2*a/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(o===Vn)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===La)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=Vn){const c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(s-a),f=(t+e)*l,m=(n+r)*u;let v,x;if(o===Vn)v=(s+a)*d,x=-2*d;else if(o===La)v=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new V,gn=new St,Nf=new V(0,0,0),Ff=new V(1,1,1),Zn=new V,Kr=new V,en=new V,nc=new St,ic=new wi;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Of=0;const rc=new V,Bi=new wi,Fn=new St,Zr=new V,vr=new V,Bf=new V,zf=new wi,ac=new V(1,0,0),sc=new V(0,1,0),oc=new V(0,0,1),cc={type:"added"},Hf={type:"removed"},zi={type:"childadded",child:null},gs={type:"childremoved",child:null};class jt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new V,t=new Wn,n=new wi,r=new V(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(sc,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(sc,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(vr,Zr,this.up):Fn.lookAt(Zr,vr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cc),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),gs.child=e,this.dispatchEvent(gs),gs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cc),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new V(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new V,On=new V,_s=new V,Bn=new V,Hi=new V,ki=new V,lc=new V,vs=new V,ys=new V,xs=new V;class An{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_n.subVectors(e,t),r.cross(_n);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){_n.subVectors(r,t),On.subVectors(n,t),_s.subVectors(e,t);const s=_n.dot(_n),o=_n.dot(On),c=_n.dot(_s),l=On.dot(On),u=On.dot(_s),d=s*l-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,m=(l*c-o*u)*f,v=(s*u-o*c)*f;return a.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Bn.x),c.addScaledVector(s,Bn.y),c.addScaledVector(o,Bn.z),c)}static isFrontFacing(e,t,n,r){return _n.subVectors(n,t),On.subVectors(e,t),_n.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),On.subVectors(this.a,this.b),_n.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return An.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Hi.subVectors(r,n),ki.subVectors(a,n),vs.subVectors(e,n);const c=Hi.dot(vs),l=ki.dot(vs);if(c<=0&&l<=0)return t.copy(n);ys.subVectors(e,r);const u=Hi.dot(ys),d=ki.dot(ys);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(Hi,s);xs.subVectors(e,a);const m=Hi.dot(xs),v=ki.dot(xs);if(v>=0&&m<=v)return t.copy(a);const x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(ki,o);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return lc.subVectors(a,r),o=(d-u)/(d-u+(m-v)),t.copy(r).addScaledVector(lc,o);const h=1/(p+x+f);return s=x*h,o=f*h,t.copy(n).addScaledVector(Hi,s).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Ss(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=wo(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ss(s,a,e+1/3),this.g=Ss(s,a,e),this.b=Ss(s,a,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const n=Ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return dt.fromWorkingColorSpace(zt.copy(this),e),Math.round(kt(zt.r*255,0,255))*65536+Math.round(kt(zt.g*255,0,255))*256+Math.round(kt(zt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,a=zt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const d=s-o;switch(l=u<=.5?d/(s+o):d/(2-s-o),s){case n:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-n)/d+2;break;case a:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=bn){dt.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Jr);const n=Tr(Jn.h,Jr.h,t),r=Tr(Jn.s,Jr.s,t),a=Tr(Jn.l,Jr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new ot;ot.NAMES=Ml;let kf=0;class ur extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Zi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fs,this.blendDst=Os,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fs&&(n.blendSrc=this.blendSrc),this.blendDst!==Os&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class El extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new V,Qr=new Ke;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ar("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),r=Wt(r,this.array),a=Wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class bl extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tl extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rn extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vf=0;const sn=new St,Ms=new jt,Vi=new V,tn=new lr,yr=new lr,Dt=new V;class un extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vl(e)?Tl:bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Qe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];tn.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(tn.min,yr.min),tn.expandByPoint(Dt),Dt.addVectors(tn.max,yr.max),tn.expandByPoint(Dt)):(tn.expandByPoint(yr.min),tn.expandByPoint(yr.max))}tn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Dt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(Vi.fromBufferAttribute(e,l),Dt.add(Vi)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new V,c[I]=new V;const l=new V,u=new V,d=new V,f=new Ke,m=new Ke,v=new Ke,x=new V,p=new V;function h(I,b,E){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,E),f.fromBufferAttribute(a,I),m.fromBufferAttribute(a,b),v.fromBufferAttribute(a,E),u.sub(l),d.sub(l),m.sub(f),v.sub(f);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(N),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(N),o[I].add(x),o[b].add(x),o[E].add(x),c[I].add(p),c[b].add(p),c[E].add(p))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let I=0,b=L.length;I<b;++I){const E=L[I],N=E.start,Q=E.count;for(let q=N,R=N+Q;q<R;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const A=new V,w=new V,O=new V,D=new V;function P(I){O.fromBufferAttribute(r,I),D.copy(O);const b=o[I];A.copy(b),A.sub(O.multiplyScalar(O.dot(b))).normalize(),w.crossVectors(D,b);const N=w.dot(c[I])<0?-1:1;s.setXYZW(I,A.x,A.y,A.z,N)}for(let I=0,b=L.length;I<b;++I){const E=L[I],N=E.start,Q=E.count;for(let q=N,R=N+Q;q<R;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new V,a=new V,s=new V,o=new V,c=new V,l=new V,u=new V,d=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let m=0,v=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let h=0;h<u;h++)f[v++]=l[m++]}return new ln(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],d=a[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new St,_i=new Ba,ea=new Pr,dc=new V,Gi=new V,Wi=new V,Xi=new V,Es=new V,ta=new V,na=new Ke,ia=new Ke,ra=new Ke,fc=new V,hc=new V,pc=new V,aa=new V,sa=new V;class Cn extends jt{constructor(e=new un,t=new El){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ta.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(Es.fromBufferAttribute(d,e),s?ta.addScaledVector(Es,u):ta.addScaledVector(Es.sub(t),u))}t.add(ta)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(a),_i.copy(e.ray).recast(e.near),!(ea.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ea,dc)===null||_i.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(uc.copy(a).invert(),_i.copy(e.ray).applyMatrix4(uc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,x=f.length;v<x;v++){const p=f[v],h=s[p.materialIndex],L=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=L,O=A;w<O;w+=3){const D=o.getX(w),P=o.getX(w+1),I=o.getX(w+2);r=oa(this,h,e,n,l,u,d,D,P,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){const L=o.getX(p),A=o.getX(p+1),w=o.getX(p+2);r=oa(this,s,e,n,l,u,d,L,A,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,x=f.length;v<x;v++){const p=f[v],h=s[p.materialIndex],L=Math.max(p.start,m.start),A=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=L,O=A;w<O;w+=3){const D=w,P=w+1,I=w+2;r=oa(this,h,e,n,l,u,d,D,P,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){const L=p,A=p+1,w=p+2;r=oa(this,s,e,n,l,u,d,L,A,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Gf(i,e,t,n,r,a,s,o){let c;if(e.side===Kt?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===ci,o),c===null)return null;sa.copy(o),sa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:i}}function oa(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,Gi),i.getVertexPosition(c,Wi),i.getVertexPosition(l,Xi);const u=Gf(i,e,t,n,Gi,Wi,Xi,aa);if(u){r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,c),ra.fromBufferAttribute(r,l),u.uv=An.getInterpolation(aa,Gi,Wi,Xi,na,ia,ra,new Ke)),a&&(na.fromBufferAttribute(a,o),ia.fromBufferAttribute(a,c),ra.fromBufferAttribute(a,l),u.uv1=An.getInterpolation(aa,Gi,Wi,Xi,na,ia,ra,new Ke)),s&&(fc.fromBufferAttribute(s,o),hc.fromBufferAttribute(s,c),pc.fromBufferAttribute(s,l),u.normal=An.getInterpolation(aa,Gi,Wi,Xi,fc,hc,pc,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new V,materialIndex:0};An.getNormal(Gi,Wi,Xi,d.normal),u.face=d}return u}class Lr extends un{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(d,2));function v(x,p,h,L,A,w,O,D,P,I,b){const E=w/P,N=O/I,Q=w/2,q=O/2,R=D/2,F=P+1,H=I+1;let K=0,Y=0;const re=new V;for(let le=0;le<H;le++){const ue=le*N-q;for(let je=0;je<F;je++){const nt=je*E-Q;re[x]=nt*L,re[p]=ue*A,re[h]=R,l.push(re.x,re.y,re.z),re[x]=0,re[p]=0,re[h]=D>0?1:-1,u.push(re.x,re.y,re.z),d.push(je/P),d.push(1-le/I),K+=1}}for(let le=0;le<I;le++)for(let ue=0;ue<P;ue++){const je=f+ue+F*le,nt=f+ue+F*(le+1),te=f+(ue+1)+F*(le+1),fe=f+(ue+1)+F*le;c.push(je,nt,fe),c.push(nt,te,fe),Y+=6}o.addGroup(m,Y,b),m+=Y,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=rr(i[t]);for(const r in n)e[r]=n[r]}return e}function Wf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Al(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Xf={clone:rr,merge:Xt};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wl extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new V,mc=new Ke,gc=new Ke;class cn extends wl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,mc,gc),t.subVectors(gc,mc)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,ji=1;class $f extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Yi,ji,e,t);r.layers=this.layers,this.add(r);const a=new cn(Yi,ji,e,t);a.layers=this.layers,this.add(a);const s=new cn(Yi,ji,e,t);s.layers=this.layers,this.add(s);const o=new cn(Yi,ji,e,t);o.layers=this.layers,this.add(o);const c=new cn(Yi,ji,e,t);c.layers=this.layers,this.add(c);const l=new cn(Yi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Cl extends Zt{constructor(e,t,n,r,a,s,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qf extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lr(5,5,5),a=new Ln({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ii});a.uniforms.tEquirect.value=t;const s=new Cn(r,a),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=vn),new $f(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const bs=new V,Kf=new V,Zf=new Qe;class ti{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bs.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zf.getNormalMatrix(e),r=this.coplanarPoint(bs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Pr,ca=new V;class Co{constructor(e=new ti,t=new ti,n=new ti,r=new ti,a=new ti,s=new ti){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],x=r[10],p=r[11],h=r[12],L=r[13],A=r[14],w=r[15];if(n[0].setComponents(c-a,f-l,p-m,w-h).normalize(),n[1].setComponents(c+a,f+l,p+m,w+h).normalize(),n[2].setComponents(c+s,f+u,p+v,w+L).normalize(),n[3].setComponents(c-s,f-u,p-v,w-L).normalize(),n[4].setComponents(c-o,f-d,p-x,w-A).normalize(),t===Vn)n[5].setComponents(c+o,f+d,p+x,w+A).normalize();else if(t===La)n[5].setComponents(o,d,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rl(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Jf(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,o),d.count===-1&&f.length===0&&i.bufferSubData(l,0,u),f.length!==0){for(let m=0,v=f.length;m<v;m++){const x=f[m];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(l,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}class Dr extends un{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=t/c,m=[],v=[],x=[],p=[];for(let h=0;h<u;h++){const L=h*f-s;for(let A=0;A<l;A++){const w=A*d-a;v.push(w,-L,0),x.push(0,0,1),p.push(A/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let L=0;L<o;L++){const A=L+l*h,w=L+l*(h+1),O=L+1+l*(h+1),D=L+1+l*h;m.push(A,w,D),m.push(w,O,D)}this.setIndex(m),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
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
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
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
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fh=`#ifdef USE_IRIDESCENCE
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
#endif`,hh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mh=`#define PI 3.141592653589793
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
} // validated`,Eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bh=`vec3 transformedNormal = objectNormal;
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
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`
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
}`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hh=`#ifdef USE_GRADIENTMAP
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
}`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
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
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
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
#endif`,Zh=`struct PhysicalMaterial {
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
}`,Jh=`
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Op=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`#include <common>
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
}`,am=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,om=`#define DISTANCE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,vm=`#define NORMAL
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
}`,ym=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,Sm=`#define PHONG
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
}`,Mm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,bm=`#define TOON
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
}`,Tm=`#define TOON
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
}`,Am=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Rm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Qf,alphahash_pars_fragment:eh,alphamap_fragment:th,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:ah,aomap_pars_fragment:sh,batching_pars_vertex:oh,batching_vertex:ch,begin_vertex:lh,beginnormal_vertex:uh,bsdfs:dh,iridescence_fragment:fh,bumpmap_pars_fragment:hh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:yh,color_pars_vertex:xh,color_vertex:Sh,common:Mh,cube_uv_reflection_fragment:Eh,defaultnormal_vertex:bh,displacementmap_pars_vertex:Th,displacementmap_vertex:Ah,emissivemap_fragment:wh,emissivemap_pars_fragment:Ch,colorspace_fragment:Rh,colorspace_pars_fragment:Ph,envmap_fragment:Lh,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Ih,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Xh,envmap_vertex:Nh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:Bh,fog_pars_fragment:zh,gradientmap_pars_fragment:Hh,lightmap_pars_fragment:kh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Wh,lights_toon_fragment:Yh,lights_toon_pars_fragment:jh,lights_phong_fragment:$h,lights_phong_pars_fragment:qh,lights_physical_fragment:Kh,lights_physical_pars_fragment:Zh,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:ep,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:rp,map_fragment:ap,map_pars_fragment:sp,map_particle_fragment:op,map_particle_pars_fragment:cp,metalnessmap_fragment:lp,metalnessmap_pars_fragment:up,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:hp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:vp,normal_pars_vertex:yp,normal_vertex:xp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Tp,opaque_fragment:Ap,packing:wp,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:Hp,skinnormal_vertex:kp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:Yp,transmission_pars_fragment:jp,uv_pars_fragment:$p,uv_pars_vertex:qp,uv_vertex:Kp,worldpos_vertex:Zp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:em,backgroundCube_frag:tm,cube_vert:nm,cube_frag:im,depth_vert:rm,depth_frag:am,distanceRGBA_vert:sm,distanceRGBA_frag:om,equirect_vert:cm,equirect_frag:lm,linedashed_vert:um,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:hm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:vm,meshnormal_frag:ym,meshphong_vert:xm,meshphong_frag:Sm,meshphysical_vert:Mm,meshphysical_frag:Em,meshtoon_vert:bm,meshtoon_frag:Tm,points_vert:Am,points_frag:wm,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Lm},ve={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Tn={basic:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Xt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Xt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ot(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Xt([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Xt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Xt([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Xt([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Xt([ve.common,ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Xt([ve.lights,ve.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Tn.physical={uniforms:Xt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const la={r:0,b:0,g:0},yi=new Wn,Dm=new St;function Im(i,e,t,n,r,a,s){const o=new ot(0);let c=a===!0?0:1,l,u,d=null,f=0,m=null;function v(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?t:e).get(A)),A}function x(L){let A=!1;const w=v(L);w===null?h(o,c):w&&w.isColor&&(h(w,1),A=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,s):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(L,A){const w=v(A);w&&(w.isCubeTexture||w.mapping===Fa)?(u===void 0&&(u=new Cn(new Lr(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:rr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(A.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(yi)),u.material.toneMapped=dt.getTransfer(w.colorSpace)!==gt,(d!==w||f!==w.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,m=i.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Cn(new Dr(2,2),new Ln({name:"BackgroundMaterial",uniforms:rr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=dt.getTransfer(w.colorSpace)!==gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,m=i.toneMapping),l.layers.enableAll(),L.unshift(l,l.geometry,l.material,0,0,null))}function h(L,A){L.getRGB(la,Al(i)),n.buffers.color.setClear(la.r,la.g,la.b,A,s)}return{getClearColor:function(){return o},setClearColor:function(L,A=1){o.set(L),c=A,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(L){c=L,h(o,c)},render:x,addToRenderList:p}}function Um(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let a=r,s=!1;function o(E,N,Q,q,R){let F=!1;const H=d(q,Q,N);a!==H&&(a=H,l(a.object)),F=m(E,q,Q,R),F&&v(E,q,Q,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(F||s)&&(s=!1,w(E,N,Q,q),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function d(E,N,Q){const q=Q.wireframe===!0;let R=n[E.id];R===void 0&&(R={},n[E.id]=R);let F=R[N.id];F===void 0&&(F={},R[N.id]=F);let H=F[q];return H===void 0&&(H=f(c()),F[q]=H),H}function f(E){const N=[],Q=[],q=[];for(let R=0;R<t;R++)N[R]=0,Q[R]=0,q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Q,attributeDivisors:q,object:E,attributes:{},index:null}}function m(E,N,Q,q){const R=a.attributes,F=N.attributes;let H=0;const K=Q.getAttributes();for(const Y in K)if(K[Y].location>=0){const le=R[Y];let ue=F[Y];if(ue===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),le===void 0||le.attribute!==ue||ue&&le.data!==ue.data)return!0;H++}return a.attributesNum!==H||a.index!==q}function v(E,N,Q,q){const R={},F=N.attributes;let H=0;const K=Q.getAttributes();for(const Y in K)if(K[Y].location>=0){let le=F[Y];le===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(le=E.instanceColor));const ue={};ue.attribute=le,le&&le.data&&(ue.data=le.data),R[Y]=ue,H++}a.attributes=R,a.attributesNum=H,a.index=q}function x(){const E=a.newAttributes;for(let N=0,Q=E.length;N<Q;N++)E[N]=0}function p(E){h(E,0)}function h(E,N){const Q=a.newAttributes,q=a.enabledAttributes,R=a.attributeDivisors;Q[E]=1,q[E]===0&&(i.enableVertexAttribArray(E),q[E]=1),R[E]!==N&&(i.vertexAttribDivisor(E,N),R[E]=N)}function L(){const E=a.newAttributes,N=a.enabledAttributes;for(let Q=0,q=N.length;Q<q;Q++)N[Q]!==E[Q]&&(i.disableVertexAttribArray(Q),N[Q]=0)}function A(E,N,Q,q,R,F,H){H===!0?i.vertexAttribIPointer(E,N,Q,R,F):i.vertexAttribPointer(E,N,Q,q,R,F)}function w(E,N,Q,q){x();const R=q.attributes,F=Q.getAttributes(),H=N.defaultAttributeValues;for(const K in F){const Y=F[K];if(Y.location>=0){let re=R[K];if(re===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){const le=re.normalized,ue=re.itemSize,je=e.get(re);if(je===void 0)continue;const nt=je.buffer,te=je.type,fe=je.bytesPerElement,Ee=te===i.INT||te===i.UNSIGNED_INT||re.gpuType===xo;if(re.isInterleavedBufferAttribute){const xe=re.data,We=xe.stride,Xe=re.offset;if(xe.isInstancedInterleavedBuffer){for(let qe=0;qe<Y.locationSize;qe++)h(Y.location+qe,xe.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let qe=0;qe<Y.locationSize;qe++)p(Y.location+qe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let qe=0;qe<Y.locationSize;qe++)A(Y.location+qe,ue/Y.locationSize,te,le,We*fe,(Xe+ue/Y.locationSize*qe)*fe,Ee)}else{if(re.isInstancedBufferAttribute){for(let xe=0;xe<Y.locationSize;xe++)h(Y.location+xe,re.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<Y.locationSize;xe++)p(Y.location+xe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let xe=0;xe<Y.locationSize;xe++)A(Y.location+xe,ue/Y.locationSize,te,le,ue*fe,ue/Y.locationSize*xe*fe,Ee)}}else if(H!==void 0){const le=H[K];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Y.location,le);break;case 3:i.vertexAttrib3fv(Y.location,le);break;case 4:i.vertexAttrib4fv(Y.location,le);break;default:i.vertexAttrib1fv(Y.location,le)}}}}L()}function O(){I();for(const E in n){const N=n[E];for(const Q in N){const q=N[Q];for(const R in q)u(q[R].object),delete q[R];delete N[Q]}delete n[E]}}function D(E){if(n[E.id]===void 0)return;const N=n[E.id];for(const Q in N){const q=N[Q];for(const R in q)u(q[R].object),delete q[R];delete N[Q]}delete n[E.id]}function P(E){for(const N in n){const Q=n[N];if(Q[E.id]===void 0)continue;const q=Q[E.id];for(const R in q)u(q[R].object),delete q[R];delete Q[E.id]}}function I(){b(),s=!0,a!==r&&(a=r,l(a.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:L}}function Nm(i,e,t){let n;function r(l){n=l}function a(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];t.update(m,n,1)}function c(l,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)s(l[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x];for(let x=0;x<f.length;x++)t.update(v,n,f[x])}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Fm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(D){return!(D!==Yt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const P=D===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==nn&&!P)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:w,maxSamples:O}}function Om(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new ti,o=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||v===null||v.length===0||a&&!p)a?u(null):l();else{const L=a?0:n,A=L*4;let w=h.clippingState||null;c.value=w,w=u(v,f,A,m);for(let O=0;O!==A;++O)w[O]=t[O];h.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,v){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,v!==!0||p===null){const h=m+x*4,L=f.matrixWorldInverse;o.getNormalMatrix(L),(p===null||p.length<h)&&(p=new Float32Array(h));for(let A=0,w=m;A!==x;++A,w+=4)s.copy(d[A]).applyMatrix4(L,o),s.normal.toArray(p,w),p[w+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Bm(i){let e=new WeakMap;function t(s,o){return o===Bs?s.mapping=er:o===zs&&(s.mapping=tr),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Bs||o===zs)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new qf(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Pl extends wl{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,_c=[.125,.215,.35,.446,.526,.582],Ei=20,Ts=new Pl,vc=new ot;let As=null,ws=0,Cs=0,Rs=!1;const Si=(1+Math.sqrt(5))/2,$i=1/Si,yc=[new V(-Si,$i,0),new V(Si,$i,0),new V(-$i,0,Si),new V($i,0,Si),new V(0,Si,-$i),new V(0,Si,$i),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(As,ws,Cs),this._renderer.xr.enabled=Rs,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),Rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Rr,format:Yt,colorSpace:ui,depthBuffer:!1},r=Sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(a)),this._blurMaterial=Hm(a,e,t)}return r}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r){const o=new cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vc),u.toneMapping=ri,u.autoClear=!1;const m=new El({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new Cn(new Lr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(vc),x=!0);for(let h=0;h<6;h++){const L=h%3;L===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):L===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const A=this._cubeSize;ua(r,L*A,h>2?A:0,A,A),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===er||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Cn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ua(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=yc[(r-a-1)%yc.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Cn(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),x=a/v,p=isFinite(a)?1+Math.floor(u*x):Ei;p>Ei&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const h=[];let L=0;for(let P=0;P<Ei;++P){const I=P/x,b=Math.exp(-I*I/2);h.push(b),P===0?L+=b:P<p&&(L+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/L;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-n;const w=this._sizeLods[r],O=3*w*(r>A-Ki?r-A+Ki:0),D=4*(this._cubeSize-w);ua(t,O,D,3*w,2*w),c.setRenderTarget(t),c.render(d,Ts)}}function zm(i){const e=[],t=[],n=[];let r=i;const a=i-Ki+1+_c.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>i-Ki?c=_c[s-i+Ki-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,x=3,p=2,h=1,L=new Float32Array(x*v*m),A=new Float32Array(p*v*m),w=new Float32Array(h*v*m);for(let D=0;D<m;D++){const P=D%3*2/3-1,I=D>2?0:-1,b=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];L.set(b,x*v*D),A.set(f,p*v*D);const E=[D,D,D,D,D,D];w.set(E,h*v*D)}const O=new un;O.setAttribute("position",new ln(L,x)),O.setAttribute("uv",new ln(A,p)),O.setAttribute("faceIndex",new ln(w,h)),e.push(O),r>Ki&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sc(i,e,t){const n=new yn(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Hm(i,e,t){const n=new Float32Array(Ei),r=new V(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Mc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ec(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function km(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Bs||c===zs,u=c===er||c===tr;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new xc(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new xc(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Vm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gm(i,e,t,n){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let p=0,h=x.length;p<h;p++)e.remove(x[p])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let p=0,h=x.length;p<h;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const L=m.array;x=m.version;for(let A=0,w=L.length;A<w;A+=3){const O=L[A+0],D=L[A+1],P=L[A+2];f.push(O,D,D,P,P,O)}}else if(v!==void 0){const L=v.array;x=v.version;for(let A=0,w=L.length/3-1;A<w;A+=3){const O=A+0,D=A+1,P=A+2;f.push(O,D,D,P,P,O)}}else return;const p=new(vl(f)?Tl:bl)(f,1);p.version=x;const h=a.get(d);h&&e.remove(h),a.set(d,p)}function u(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Wm(i,e,t){let n;function r(f){n=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function c(f,m){i.drawElements(n,m,a,f*s),t.update(m,n,1)}function l(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,a,f*s,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];t.update(p,n,1)}function d(f,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/s,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,x,0,v);let h=0;for(let L=0;L<v;L++)h+=m[L];for(let L=0;L<x.length;L++)t.update(h,n,x[L])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Xm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ym(i,e,t){const n=new WeakMap,r=new It;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],L=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let w=0;v===!0&&(w=1),x===!0&&(w=2),p===!0&&(w=3);let O=o.attributes.position.count*w,D=1;O>e.maxTextureSize&&(D=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*D*4*d),I=new xl(P,O,D,d);I.type=nn,I.needsUpdate=!0;const b=w*4;for(let N=0;N<d;N++){const Q=h[N],q=L[N],R=A[N],F=O*D*4*N;for(let H=0;H<Q.count;H++){const K=H*b;v===!0&&(r.fromBufferAttribute(Q,H),P[F+K+0]=r.x,P[F+K+1]=r.y,P[F+K+2]=r.z,P[F+K+3]=0),x===!0&&(r.fromBufferAttribute(q,H),P[F+K+4]=r.x,P[F+K+5]=r.y,P[F+K+6]=r.z,P[F+K+7]=0),p===!0&&(r.fromBufferAttribute(R,H),P[F+K+8]=r.x,P[F+K+9]=r.y,P[F+K+10]=r.z,P[F+K+11]=R.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new Ke(O,D)},n.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const x=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function jm(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}class Ll extends Zt{constructor(e,t,n,r,a,s,o,c,l,u=Ji){if(u!==Ji&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ji&&(n=Ai),n===void 0&&u===ir&&(n=nr),super(null,r,a,s,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dl=new Zt,bc=new Ll(1,1),Il=new xl,Ul=new If,Nl=new Cl,Tc=[],Ac=[],wc=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Tc[r];if(a===void 0&&(a=new Float32Array(r),Tc[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function za(i,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Lt(t,n)}}function Qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),Lt(t,n)}}function eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Lt(t,n)}}function tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(bc.compareFunction=_l,a=bc):a=Dl,t.setTexture2D(e||a,r)}function ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ul,r)}function dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nl,r)}function fg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Il,r)}function hg(i){switch(i){case 5126:return $m;case 35664:return qm;case 35665:return Km;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return sg;case 36295:return og;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(i,e){i.uniform1fv(this.addr,e)}function mg(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function gg(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function _g(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function vg(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yg(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xg(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sg(i,e){i.uniform1iv(this.addr,e)}function Mg(i,e){i.uniform2iv(this.addr,e)}function Eg(i,e){i.uniform3iv(this.addr,e)}function bg(i,e){i.uniform4iv(this.addr,e)}function Tg(i,e){i.uniform1uiv(this.addr,e)}function Ag(i,e){i.uniform2uiv(this.addr,e)}function wg(i,e){i.uniform3uiv(this.addr,e)}function Cg(i,e){i.uniform4uiv(this.addr,e)}function Rg(i,e,t){const n=this.cache,r=e.length,a=za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Dl,a[s])}function Pg(i,e,t){const n=this.cache,r=e.length,a=za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ul,a[s])}function Lg(i,e,t){const n=this.cache,r=e.length,a=za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Nl,a[s])}function Dg(i,e,t){const n=this.cache,r=e.length,a=za(t,r);Pt(n,a)||(i.uniform1iv(this.addr,a),Lt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Il,a[s])}function Ig(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return yg;case 35676:return xg;case 5124:case 35670:return Sg;case 35667:case 35671:return Mg;case 35668:case 35672:return Eg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return Ag;case 36295:return wg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ug{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ig(t.type)}}class Fg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function Pc(i,e){i.seq.push(e),i.map[e.id]=e}function Og(i,e,t){const n=i.name,r=n.length;for(Ps.lastIndex=0;;){const a=Ps.exec(n),s=Ps.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Pc(t,l===void 0?new Ug(o,i,e):new Ng(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Fg(o),Pc(t,d)),t=d}}}class ba{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Og(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Bg=37297;let zg=0;function Hg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function kg(i){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(i);let n;switch(e===t?n="":e===Pa&&t===Ra?n="LinearDisplayP3ToLinearSRGB":e===Ra&&t===Pa&&(n="LinearSRGBToLinearDisplayP3"),i){case ui:case Oa:return[n,"LinearTransferOETF"];case bn:case Ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Dc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Hg(i.getShaderSource(e),s)}else return r}function Vg(i,e){const t=kg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gg(i,e){let t;switch(e){case Wd:t="Linear";break;case Xd:t="Reinhard";break;case Yd:t="OptimizedCineon";break;case jd:t="ACESFilmic";break;case qd:t="AgX";break;case Kd:t="Neutral";break;case $d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const da=new V;function Wg(){dt.getLuminanceCoefficients(da);const i=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function Yg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Mr(i){return i!==""}function Ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace($g,Kg)}const qg=new Map;function Kg(i,e){let t=Je[e];if(t===void 0){const n=qg.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return go(t)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(i){return i.replace(Zg,Jg)}function Jg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Fc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Qg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function e_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function n_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case Vd:e="ENVMAP_BLENDING_MIX";break;case Gd:e="ENVMAP_BLENDING_ADD";break}return e}function i_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function r_(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Qg(t),l=e_(t),u=t_(t),d=n_(t),f=i_(t),m=Xg(t),v=Yg(a),x=r.createProgram();let p,h,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mr).join(`
`),h.length>0&&(h+=`
`)):(p=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),h=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Je.tonemapping_pars_fragment:"",t.toneMapping!==ri?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Vg("linearToOutputTexel",t.outputColorSpace),Wg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),s=go(s),s=Ic(s,t),s=Uc(s,t),o=go(o),o=Ic(o,t),o=Uc(o,t),s=Nc(s),o=Nc(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=L+p+s,w=L+h+o,O=Lc(r,r.VERTEX_SHADER,A),D=Lc(r,r.FRAGMENT_SHADER,w);r.attachShader(x,O),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(N){if(i.debug.checkShaderErrors){const Q=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(O).trim(),R=r.getShaderInfoLog(D).trim();let F=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,O,D);else{const K=Dc(r,O,"vertex"),Y=Dc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Q+`
`+K+`
`+Y)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(q===""||R==="")&&(H=!1);H&&(N.diagnostics={runnable:F,programLog:Q,vertexShader:{log:q,prefix:p},fragmentShader:{log:R,prefix:h}})}r.deleteShader(O),r.deleteShader(D),I=new ba(r,x),b=jg(r,x)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,Bg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=O,this.fragmentShader=D,this}let a_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o_(e),t.set(e,n)),n}}class o_{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}}function c_(i,e,t,n,r,a,s){const o=new Sl,c=new s_,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,E,N,Q,q){const R=Q.fog,F=q.geometry,H=b.isMeshStandardMaterial?Q.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),Y=K&&K.mapping===Fa?K.image.height:null,re=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=le!==void 0?le.length:0;let je=0;F.morphAttributes.position!==void 0&&(je=1),F.morphAttributes.normal!==void 0&&(je=2),F.morphAttributes.color!==void 0&&(je=3);let nt,te,fe,Ee;if(re){const Ze=Tn[re];nt=Ze.vertexShader,te=Ze.fragmentShader}else nt=b.vertexShader,te=b.fragmentShader,c.update(b),fe=c.getVertexShaderID(b),Ee=c.getFragmentShaderID(b);const xe=i.getRenderTarget(),We=q.isInstancedMesh===!0,Xe=q.isBatchedMesh===!0,qe=!!b.map,ft=!!b.matcap,U=!!K,ht=!!b.aoMap,it=!!b.lightMap,at=!!b.bumpMap,Re=!!b.normalMap,_t=!!b.displacementMap,ke=!!b.emissiveMap,Ve=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,j=b.clearcoat>0,ae=b.dispersion>0,de=b.iridescence>0,se=b.sheen>0,Me=b.transmission>0,pe=S&&!!b.anisotropyMap,Se=j&&!!b.clearcoatMap,Ge=j&&!!b.clearcoatNormalMap,me=j&&!!b.clearcoatRoughnessMap,ge=de&&!!b.iridescenceMap,Ie=de&&!!b.iridescenceThicknessMap,Ue=se&&!!b.sheenColorMap,be=se&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Fe=!!b.specularColorMap,ct=!!b.specularIntensityMap,y=Me&&!!b.transmissionMap,G=Me&&!!b.thicknessMap,W=!!b.gradientMap,J=!!b.alphaMap,ce=b.alphaTest>0,Ce=!!b.alphaHash,ze=!!b.extensions;let vt=ri;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(vt=i.toneMapping);const lt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:te,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Xe,batchingColor:Xe&&q._colorsTexture!==null,instancing:We,instancingColor:We&&q.instanceColor!==null,instancingMorph:We&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ui,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:ft,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:Y,aoMap:ht,lightMap:it,bumpMap:at,normalMap:Re,displacementMap:f&&_t,emissiveMap:ke,normalMapObjectSpace:Re&&b.normalMapType===tf,normalMapTangentSpace:Re&&b.normalMapType===ef,metalnessMap:Ve,roughnessMap:C,anisotropy:S,anisotropyMap:pe,clearcoat:j,clearcoatMap:Se,clearcoatNormalMap:Ge,clearcoatRoughnessMap:me,dispersion:ae,iridescence:de,iridescenceMap:ge,iridescenceThicknessMap:Ie,sheen:se,sheenColorMap:Ue,sheenRoughnessMap:be,specularMap:Be,specularColorMap:Fe,specularIntensityMap:ct,transmission:Me,transmissionMap:y,thicknessMap:G,gradientMap:W,opaque:b.transparent===!1&&b.blending===Zi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ce,alphaHash:Ce,combine:b.combine,mapUv:qe&&x(b.map.channel),aoMapUv:ht&&x(b.aoMap.channel),lightMapUv:it&&x(b.lightMap.channel),bumpMapUv:at&&x(b.bumpMap.channel),normalMapUv:Re&&x(b.normalMap.channel),displacementMapUv:_t&&x(b.displacementMap.channel),emissiveMapUv:ke&&x(b.emissiveMap.channel),metalnessMapUv:Ve&&x(b.metalnessMap.channel),roughnessMapUv:C&&x(b.roughnessMap.channel),anisotropyMapUv:pe&&x(b.anisotropyMap.channel),clearcoatMapUv:Se&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(b.sheenRoughnessMap.channel),specularMapUv:Be&&x(b.specularMap.channel),specularColorMapUv:Fe&&x(b.specularColorMap.channel),specularIntensityMapUv:ct&&x(b.specularIntensityMap.channel),transmissionMapUv:y&&x(b.transmissionMap.channel),thicknessMapUv:G&&x(b.thicknessMap.channel),alphaMapUv:J&&x(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Re||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!F.attributes.uv&&(qe||J),fog:!!R,useFog:b.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===kn,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function h(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)E.push(N),E.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(L(E,b),A(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function L(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function A(b,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),b.push(o.mask)}function w(b){const E=v[b.type];let N;if(E){const Q=Tn[E];N=Xf.clone(Q.uniforms)}else N=b.uniforms;return N}function O(b,E){let N;for(let Q=0,q=u.length;Q<q;Q++){const R=u[Q];if(R.cacheKey===E){N=R,++N.usedTimes;break}}return N===void 0&&(N=new r_(i,E,b,a),u.push(N)),N}function D(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function P(b){c.remove(b)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:O,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:I}}function l_(){let i=new WeakMap;function e(a){let s=i.get(a);return s===void 0&&(s={},i.set(a,s)),s}function t(a){i.delete(a)}function n(a,s,o){i.get(a)[s]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function u_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(d,f,m,v,x,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=p),e++,h}function o(d,f,m,v,x,p){const h=s(d,f,m,v,x,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,v,x,p){const h=s(d,f,m,v,x,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||u_),n.length>1&&n.sort(f||Oc),r.length>1&&r.sort(f||Oc)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:u,sort:l}}function d_(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new Bc,i.set(n,[s])):r>=a.length?(s=new Bc,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function f_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ot};break;case"SpotLight":t={position:new V,direction:new V,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function h_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let p_=0;function m_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g_(i){const e=new f_,t=h_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const r=new V,a=new St,s=new St;function o(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,x=0,p=0,h=0,L=0,A=0,w=0,O=0,D=0,P=0;l.sort(m_);for(let b=0,E=l.length;b<E;b++){const N=l[b],Q=N.color,q=N.intensity,R=N.distance,F=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=Q.r*q,d+=Q.g*q,f+=Q.b*q;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],q);P++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,Y=t.get(N);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=N.shadow.matrix,L++}n.directional[m]=H,m++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(Q).multiplyScalar(q),H.distance=R,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[x]=H;const K=N.shadow;if(N.map&&(n.spotLightMap[O]=N.map,O++,K.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[x]=K.matrix,N.castShadow){const Y=t.get(N);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=F,w++}x++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy(Q).multiplyScalar(q),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=H,p++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const K=N.shadow,Y=t.get(N);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=F,n.pointShadowMatrix[v]=N.shadow.matrix,A++}n.point[v]=H,v++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(q),H.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[h]=H,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==h||I.numDirectionalShadows!==L||I.numPointShadows!==A||I.numSpotShadows!==w||I.numSpotMaps!==O||I.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=w+O-D,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,I.directionalLength=m,I.pointLength=v,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=h,I.numDirectionalShadows=L,I.numPointShadows=A,I.numSpotShadows=w,I.numSpotMaps=O,I.numLightProbes=P,n.version=p_++)}function c(l,u){let d=0,f=0,m=0,v=0,x=0;const p=u.matrixWorldInverse;for(let h=0,L=l.length;h<L;h++){const A=l[h];if(A.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),d++}else if(A.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(p),s.identity(),a.copy(A.matrixWorld),a.premultiply(p),s.extractRotation(a),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function zc(i){const e=new g_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function __(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new zc(i),e.set(r,[o])):a>=s.length?(o=new zc(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class v_ extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y_ extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`;function M_(i,e,t){let n=new Co;const r=new Ke,a=new Ke,s=new It,o=new v_({depthPacking:Qd}),c=new y_,l={},u=t.maxTextureSize,d={[ci]:Kt,[Kt]:ci,[kn]:kn},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:x_,fragmentShader:S_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new un;v.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Cn(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let h=this.type;this.render=function(D,P,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const b=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(ii),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const q=h!==zn&&this.type===zn,R=h===zn&&this.type!==zn;for(let F=0,H=D.length;F<H;F++){const K=D[F],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const re=Y.getFrameExtents();if(r.multiply(re),a.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/re.x),r.x=a.x*re.x,Y.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/re.y),r.y=a.y*re.y,Y.mapSize.y=a.y)),Y.map===null||q===!0||R===!0){const ue=this.type!==zn?{minFilter:At,magFilter:At}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yn(r.x,r.y,ue),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const le=Y.getViewportCount();for(let ue=0;ue<le;ue++){const je=Y.getViewport(ue);s.set(a.x*je.x,a.y*je.y,a.x*je.z,a.y*je.w),Q.viewport(s),Y.updateMatrices(K,ue),n=Y.getFrustum(),w(P,I,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===zn&&L(Y,I),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(b,E,N)};function L(D,P){const I=e.update(x);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new yn(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(P,null,I,f,x,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(P,null,I,m,x,null)}function A(D,P,I,b){let E=null;const N=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)E=N;else if(E=I.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=E.uuid,q=P.uuid;let R=l[Q];R===void 0&&(R={},l[Q]=R);let F=R[q];F===void 0&&(F=E.clone(),R[q]=F,P.addEventListener("dispose",O)),E=F}if(E.visible=P.visible,E.wireframe=P.wireframe,b===zn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:d[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=i.properties.get(E);Q.light=I}return E}function w(D,P,I,b,E){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===zn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const q=e.update(D),R=D.material;if(Array.isArray(R)){const F=q.groups;for(let H=0,K=F.length;H<K;H++){const Y=F[H],re=R[Y.materialIndex];if(re&&re.visible){const le=A(D,re,b,E);D.onBeforeShadow(i,D,P,I,q,le,Y),i.renderBufferDirect(I,null,q,le,D,Y),D.onAfterShadow(i,D,P,I,q,le,Y)}}}else if(R.visible){const F=A(D,R,b,E);D.onBeforeShadow(i,D,P,I,q,F,null),i.renderBufferDirect(I,null,q,F,D,null),D.onAfterShadow(i,D,P,I,q,F,null)}}const Q=D.children;for(let q=0,R=Q.length;q<R;q++)w(Q[q],P,I,b,E)}function O(D){D.target.removeEventListener("dispose",O);for(const I in l){const b=l[I],E=D.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function E_(i){function e(){let y=!1;const G=new It;let W=null;const J=new It(0,0,0,0);return{setMask:function(ce){W!==ce&&!y&&(i.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){y=ce},setClear:function(ce,Ce,ze,vt,lt){lt===!0&&(ce*=vt,Ce*=vt,ze*=vt),G.set(ce,Ce,ze,vt),J.equals(G)===!1&&(i.clearColor(ce,Ce,ze,vt),J.copy(G))},reset:function(){y=!1,W=null,J.set(-1,0,0,0)}}}function t(){let y=!1,G=null,W=null,J=null;return{setTest:function(ce){ce?Ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ce){G!==ce&&!y&&(i.depthMask(ce),G=ce)},setFunc:function(ce){if(W!==ce){switch(ce){case Nd:i.depthFunc(i.NEVER);break;case Fd:i.depthFunc(i.ALWAYS);break;case Od:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case Bd:i.depthFunc(i.EQUAL);break;case zd:i.depthFunc(i.GEQUAL);break;case Hd:i.depthFunc(i.GREATER);break;case kd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=ce}},setLocked:function(ce){y=ce},setClear:function(ce){J!==ce&&(i.clearDepth(ce),J=ce)},reset:function(){y=!1,G=null,W=null,J=null}}}function n(){let y=!1,G=null,W=null,J=null,ce=null,Ce=null,ze=null,vt=null,lt=null;return{setTest:function(Ze){y||(Ze?Ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(Ze){G!==Ze&&!y&&(i.stencilMask(Ze),G=Ze)},setFunc:function(Ze,pt,mt){(W!==Ze||J!==pt||ce!==mt)&&(i.stencilFunc(Ze,pt,mt),W=Ze,J=pt,ce=mt)},setOp:function(Ze,pt,mt){(Ce!==Ze||ze!==pt||vt!==mt)&&(i.stencilOp(Ze,pt,mt),Ce=Ze,ze=pt,vt=mt)},setLocked:function(Ze){y=Ze},setClear:function(Ze){lt!==Ze&&(i.clearStencil(Ze),lt=Ze)},reset:function(){y=!1,G=null,W=null,J=null,ce=null,Ce=null,ze=null,vt=null,lt=null}}}const r=new e,a=new t,s=new n,o=new WeakMap,c=new WeakMap;let l={},u={},d=new WeakMap,f=[],m=null,v=!1,x=null,p=null,h=null,L=null,A=null,w=null,O=null,D=new ot(0,0,0),P=0,I=!1,b=null,E=null,N=null,Q=null,q=null;const R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),F=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),F=H>=2);let Y=null,re={};const le=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),je=new It().fromArray(le),nt=new It().fromArray(ue);function te(y,G,W,J){const ce=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(y,Ce),i.texParameteri(y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<W;ze++)y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY?i.texImage3D(G,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(G+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return Ce}const fe={};fe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),s.setClear(0),Ee(i.DEPTH_TEST),a.setFunc(wa),at(!1),Re(Wo),Ee(i.CULL_FACE),ht(ii);function Ee(y){l[y]!==!0&&(i.enable(y),l[y]=!0)}function xe(y){l[y]!==!1&&(i.disable(y),l[y]=!1)}function We(y,G){return u[y]!==G?(i.bindFramebuffer(y,G),u[y]=G,y===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=G),y===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=G),!0):!1}function Xe(y,G){let W=f,J=!1;if(y){W=d.get(G),W===void 0&&(W=[],d.set(G,W));const ce=y.textures;if(W.length!==ce.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,ze=ce.length;Ce<ze;Ce++)W[Ce]=i.COLOR_ATTACHMENT0+Ce;W.length=ce.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function qe(y){return m!==y?(i.useProgram(y),m=y,!0):!1}const ft={[Mi]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};ft[xd]=i.MIN,ft[Sd]=i.MAX;const U={[Md]:i.ZERO,[Ed]:i.ONE,[bd]:i.SRC_COLOR,[Fs]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[Td]:i.ONE_MINUS_SRC_COLOR,[Os]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(y,G,W,J,ce,Ce,ze,vt,lt,Ze){if(y===ii){v===!0&&(xe(i.BLEND),v=!1);return}if(v===!1&&(Ee(i.BLEND),v=!0),y!==_d){if(y!==x||Ze!==I){if((p!==Mi||A!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,A=Mi),Ze)switch(y){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}h=null,L=null,w=null,O=null,D.set(0,0,0),P=0,x=y,I=Ze}return}ce=ce||G,Ce=Ce||W,ze=ze||J,(G!==p||ce!==A)&&(i.blendEquationSeparate(ft[G],ft[ce]),p=G,A=ce),(W!==h||J!==L||Ce!==w||ze!==O)&&(i.blendFuncSeparate(U[W],U[J],U[Ce],U[ze]),h=W,L=J,w=Ce,O=ze),(vt.equals(D)===!1||lt!==P)&&(i.blendColor(vt.r,vt.g,vt.b,lt),D.copy(vt),P=lt),x=y,I=!1}function it(y,G){y.side===kn?xe(i.CULL_FACE):Ee(i.CULL_FACE);let W=y.side===Kt;G&&(W=!W),at(W),y.blending===Zi&&y.transparent===!1?ht(ii):ht(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),a.setFunc(y.depthFunc),a.setTest(y.depthTest),a.setMask(y.depthWrite),r.setMask(y.colorWrite);const J=y.stencilWrite;s.setTest(J),J&&(s.setMask(y.stencilWriteMask),s.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),s.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),ke(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(y){b!==y&&(y?i.frontFace(i.CW):i.frontFace(i.CCW),b=y)}function Re(y){y!==pd?(Ee(i.CULL_FACE),y!==E&&(y===Wo?i.cullFace(i.BACK):y===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),E=y}function _t(y){y!==N&&(F&&i.lineWidth(y),N=y)}function ke(y,G,W){y?(Ee(i.POLYGON_OFFSET_FILL),(Q!==G||q!==W)&&(i.polygonOffset(G,W),Q=G,q=W)):xe(i.POLYGON_OFFSET_FILL)}function Ve(y){y?Ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function C(y){y===void 0&&(y=i.TEXTURE0+R-1),Y!==y&&(i.activeTexture(y),Y=y)}function S(y,G,W){W===void 0&&(Y===null?W=i.TEXTURE0+R-1:W=Y);let J=re[W];J===void 0&&(J={type:void 0,texture:void 0},re[W]=J),(J.type!==y||J.texture!==G)&&(Y!==W&&(i.activeTexture(W),Y=W),i.bindTexture(y,G||fe[y]),J.type=y,J.texture=G)}function j(){const y=re[Y];y!==void 0&&y.type!==void 0&&(i.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ue(y){je.equals(y)===!1&&(i.scissor(y.x,y.y,y.z,y.w),je.copy(y))}function be(y){nt.equals(y)===!1&&(i.viewport(y.x,y.y,y.z,y.w),nt.copy(y))}function Be(y,G){let W=c.get(G);W===void 0&&(W=new WeakMap,c.set(G,W));let J=W.get(y);J===void 0&&(J=i.getUniformBlockIndex(G,y.name),W.set(y,J))}function Fe(y,G){const J=c.get(G).get(y);o.get(G)!==J&&(i.uniformBlockBinding(G,J,y.__bindingPointIndex),o.set(G,J))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Y=null,re={},u={},d=new WeakMap,f=[],m=null,v=!1,x=null,p=null,h=null,L=null,A=null,w=null,O=null,D=new ot(0,0,0),P=0,I=!1,b=null,E=null,N=null,Q=null,q=null,je.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),s.reset()}return{buffers:{color:r,depth:a,stencil:s},enable:Ee,disable:xe,bindFramebuffer:We,drawBuffers:Xe,useProgram:qe,setBlending:ht,setMaterial:it,setFlipSided:at,setCullFace:Re,setLineWidth:_t,setPolygonOffset:ke,setScissorTest:Ve,activeTexture:C,bindTexture:S,unbindTexture:j,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:ge,texImage3D:Ie,updateUBOMapping:Be,uniformBlockBinding:Fe,texStorage2D:Ge,texStorage3D:me,texSubImage2D:se,texSubImage3D:Me,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:Ue,viewport:be,reset:ct}}function Hc(i,e,t,n){const r=b_(n);switch(t){case ul:return i*e;case fl:return i*e;case hl:return i*e*2;case pl:return i*e/r.components*r.byteLength;case Eo:return i*e/r.components*r.byteLength;case ml:return i*e*2/r.components*r.byteLength;case bo:return i*e*2/r.components*r.byteLength;case dl:return i*e*3/r.components*r.byteLength;case Yt:return i*e*4/r.components*r.byteLength;case To:return i*e*4/r.components*r.byteLength;case ya:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gs:case Xs:return Math.max(i,16)*Math.max(e,8)/4;case Vs:case Ws:return Math.max(i,8)*Math.max(e,8)/2;case Ys:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Js:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ea:case lo:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gl:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ho:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b_(i){switch(i){case Gn:case ol:return{byteLength:1,components:1};case wr:case cl:case Rr:return{byteLength:2,components:1};case So:case Mo:return{byteLength:2,components:4};case Ai:case xo:case nn:return{byteLength:4,components:1};case ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function T_(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,S){return m?new OffscreenCanvas(C,S):Da("canvas")}function x(C,S,j){let ae=1;const de=Ve(C);if((de.width>j||de.height>j)&&(ae=j/Math.max(de.width,de.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(ae*de.width),Me=Math.floor(ae*de.height);d===void 0&&(d=v(se,Me));const pe=S?v(se,Me):d;return pe.width=se,pe.height=Me,pe.getContext("2d").drawImage(C,0,0,se,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+se+"x"+Me+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==At&&C.minFilter!==vn}function h(C){i.generateMipmap(C)}function L(C,S,j,ae,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=S;if(S===i.RED&&(j===i.FLOAT&&(se=i.R32F),j===i.HALF_FLOAT&&(se=i.R16F),j===i.UNSIGNED_BYTE&&(se=i.R8)),S===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(se=i.R8UI),j===i.UNSIGNED_SHORT&&(se=i.R16UI),j===i.UNSIGNED_INT&&(se=i.R32UI),j===i.BYTE&&(se=i.R8I),j===i.SHORT&&(se=i.R16I),j===i.INT&&(se=i.R32I)),S===i.RG&&(j===i.FLOAT&&(se=i.RG32F),j===i.HALF_FLOAT&&(se=i.RG16F),j===i.UNSIGNED_BYTE&&(se=i.RG8)),S===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(se=i.RG8UI),j===i.UNSIGNED_SHORT&&(se=i.RG16UI),j===i.UNSIGNED_INT&&(se=i.RG32UI),j===i.BYTE&&(se=i.RG8I),j===i.SHORT&&(se=i.RG16I),j===i.INT&&(se=i.RG32I)),S===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),S===i.RGBA){const Me=de?Ca:dt.getTransfer(ae);j===i.FLOAT&&(se=i.RGBA32F),j===i.HALF_FLOAT&&(se=i.RGBA16F),j===i.UNSIGNED_BYTE&&(se=Me===gt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function A(C,S){let j;return C?S===null||S===Ai||S===nr?j=i.DEPTH24_STENCIL8:S===nn?j=i.DEPTH32F_STENCIL8:S===wr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===nr?j=i.DEPTH_COMPONENT24:S===nn?j=i.DEPTH_COMPONENT32F:S===wr&&(j=i.DEPTH_COMPONENT16),j}function w(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==At&&C.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function O(C){const S=C.target;S.removeEventListener("dispose",O),P(S),S.isVideoTexture&&u.delete(S)}function D(C){const S=C.target;S.removeEventListener("dispose",D),b(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const j=C.source,ae=f.get(j);if(ae){const de=ae[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&I(C),Object.keys(ae).length===0&&f.delete(j)}n.remove(C)}function I(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const j=C.source,ae=f.get(j);delete ae[S.__cacheKey],s.memory.textures--}function b(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let de=0;de<S.__webglFramebuffer[ae].length;de++)i.deleteFramebuffer(S.__webglFramebuffer[ae][de]);else i.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)i.deleteFramebuffer(S.__webglFramebuffer[ae]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const j=C.textures;for(let ae=0,de=j.length;ae<de;ae++){const se=n.get(j[ae]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),s.memory.textures--),n.remove(j[ae])}n.remove(C)}let E=0;function N(){E=0}function Q(){const C=E;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),E+=1,C}function q(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function R(C,S){const j=n.get(C);if(C.isVideoTexture&&_t(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(j,C,S);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+S)}function F(C,S){const j=n.get(C);if(C.version>0&&j.__version!==C.version){nt(j,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+S)}function H(C,S){const j=n.get(C);if(C.version>0&&j.__version!==C.version){nt(j,C,S);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+S)}function K(C,S){const j=n.get(C);if(C.version>0&&j.__version!==C.version){te(j,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+S)}const Y={[Hs]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},re={[At]:i.NEAREST,[Zd]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[ss]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},le={[nf]:i.NEVER,[lf]:i.ALWAYS,[rf]:i.LESS,[_l]:i.LEQUAL,[af]:i.EQUAL,[cf]:i.GEQUAL,[sf]:i.GREATER,[of]:i.NOTEQUAL};function ue(C,S){if(S.type===nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===ss||S.magFilter===Wr||S.magFilter===Ti||S.minFilter===vn||S.minFilter===ss||S.minFilter===Wr||S.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Y[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,re[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===At||S.minFilter!==Wr&&S.minFilter!==Ti||S.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(C,S){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",O));const ae=S.source;let de=f.get(ae);de===void 0&&(de={},f.set(ae,de));const se=q(S);if(se!==C.__cacheKey){de[se]===void 0&&(de[se]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,j=!0),de[se].usedTimes++;const Me=de[C.__cacheKey];Me!==void 0&&(de[C.__cacheKey].usedTimes--,Me.usedTimes===0&&I(S)),C.__cacheKey=se,C.__webglTexture=de[se].texture}return j}function nt(C,S,j){let ae=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=i.TEXTURE_3D);const de=je(C,S),se=S.source;t.bindTexture(ae,C.__webglTexture,i.TEXTURE0+j);const Me=n.get(se);if(se.version!==Me.__version||de===!0){t.activeTexture(i.TEXTURE0+j);const pe=dt.getPrimaries(dt.workingColorSpace),Se=S.colorSpace===ni?null:dt.getPrimaries(S.colorSpace),Ge=S.colorSpace===ni||pe===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let me=x(S.image,!1,r.maxTextureSize);me=ke(S,me);const ge=a.convert(S.format,S.colorSpace),Ie=a.convert(S.type);let Ue=L(S.internalFormat,ge,Ie,S.colorSpace,S.isVideoTexture);ue(ae,S);let be;const Be=S.mipmaps,Fe=S.isVideoTexture!==!0,ct=Me.__version===void 0||de===!0,y=se.dataReady,G=w(S,me);if(S.isDepthTexture)Ue=A(S.format===ir,S.type),ct&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Ue,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Ue,me.width,me.height,0,ge,Ie,null));else if(S.isDataTexture)if(Be.length>0){Fe&&ct&&t.texStorage2D(i.TEXTURE_2D,G,Ue,Be[0].width,Be[0].height);for(let W=0,J=Be.length;W<J;W++)be=Be[W],Fe?y&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,be.width,be.height,ge,Ie,be.data):t.texImage2D(i.TEXTURE_2D,W,Ue,be.width,be.height,0,ge,Ie,be.data);S.generateMipmaps=!1}else Fe?(ct&&t.texStorage2D(i.TEXTURE_2D,G,Ue,me.width,me.height),y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,ge,Ie,me.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,me.width,me.height,0,ge,Ie,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,Ue,Be[0].width,Be[0].height,me.depth);for(let W=0,J=Be.length;W<J;W++)if(be=Be[W],S.format!==Yt)if(ge!==null)if(Fe){if(y)if(S.layerUpdates.size>0){const ce=Hc(be.width,be.height,S.format,S.type);for(const Ce of S.layerUpdates){const ze=be.data.subarray(Ce*ce/be.data.BYTES_PER_ELEMENT,(Ce+1)*ce/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Ce,be.width,be.height,1,ge,ze,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,me.depth,ge,be.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ue,be.width,be.height,me.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,me.depth,ge,Ie,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ue,be.width,be.height,me.depth,0,ge,Ie,be.data)}else{Fe&&ct&&t.texStorage2D(i.TEXTURE_2D,G,Ue,Be[0].width,Be[0].height);for(let W=0,J=Be.length;W<J;W++)be=Be[W],S.format!==Yt?ge!==null?Fe?y&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?y&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,be.width,be.height,ge,Ie,be.data):t.texImage2D(i.TEXTURE_2D,W,Ue,be.width,be.height,0,ge,Ie,be.data)}else if(S.isDataArrayTexture)if(Fe){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,Ue,me.width,me.height,me.depth),y)if(S.layerUpdates.size>0){const W=Hc(me.width,me.height,S.format,S.type);for(const J of S.layerUpdates){const ce=me.data.subarray(J*W/me.data.BYTES_PER_ELEMENT,(J+1)*W/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,me.width,me.height,1,ge,Ie,ce)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ge,Ie,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,me.width,me.height,me.depth,0,ge,Ie,me.data);else if(S.isData3DTexture)Fe?(ct&&t.texStorage3D(i.TEXTURE_3D,G,Ue,me.width,me.height,me.depth),y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ge,Ie,me.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,me.width,me.height,me.depth,0,ge,Ie,me.data);else if(S.isFramebufferTexture){if(ct)if(Fe)t.texStorage2D(i.TEXTURE_2D,G,Ue,me.width,me.height);else{let W=me.width,J=me.height;for(let ce=0;ce<G;ce++)t.texImage2D(i.TEXTURE_2D,ce,Ue,W,J,0,ge,Ie,null),W>>=1,J>>=1}}else if(Be.length>0){if(Fe&&ct){const W=Ve(Be[0]);t.texStorage2D(i.TEXTURE_2D,G,Ue,W.width,W.height)}for(let W=0,J=Be.length;W<J;W++)be=Be[W],Fe?y&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,Ie,be):t.texImage2D(i.TEXTURE_2D,W,Ue,ge,Ie,be);S.generateMipmaps=!1}else if(Fe){if(ct){const W=Ve(me);t.texStorage2D(i.TEXTURE_2D,G,Ue,W.width,W.height)}y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ie,me)}else t.texImage2D(i.TEXTURE_2D,0,Ue,ge,Ie,me);p(S)&&h(ae),Me.__version=se.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function te(C,S,j){if(S.image.length!==6)return;const ae=je(C,S),de=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+j);const se=n.get(de);if(de.version!==se.__version||ae===!0){t.activeTexture(i.TEXTURE0+j);const Me=dt.getPrimaries(dt.workingColorSpace),pe=S.colorSpace===ni?null:dt.getPrimaries(S.colorSpace),Se=S.colorSpace===ni||Me===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!Ge&&!me?ge[J]=x(S.image[J],!0,r.maxCubemapSize):ge[J]=me?S.image[J].image:S.image[J],ge[J]=ke(S,ge[J]);const Ie=ge[0],Ue=a.convert(S.format,S.colorSpace),be=a.convert(S.type),Be=L(S.internalFormat,Ue,be,S.colorSpace),Fe=S.isVideoTexture!==!0,ct=se.__version===void 0||ae===!0,y=de.dataReady;let G=w(S,Ie);ue(i.TEXTURE_CUBE_MAP,S);let W;if(Ge){Fe&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Be,Ie.width,Ie.height);for(let J=0;J<6;J++){W=ge[J].mipmaps;for(let ce=0;ce<W.length;ce++){const Ce=W[ce];S.format!==Yt?Ue!==null?Fe?y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Ce.width,Ce.height,Ue,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,Ce.width,Ce.height,Ue,be,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Be,Ce.width,Ce.height,0,Ue,be,Ce.data)}}}else{if(W=S.mipmaps,Fe&&ct){W.length>0&&G++;const J=Ve(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Be,J.width,J.height)}for(let J=0;J<6;J++)if(me){Fe?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ue,be,ge[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,ge[J].width,ge[J].height,0,Ue,be,ge[J].data);for(let ce=0;ce<W.length;ce++){const ze=W[ce].image[J].image;Fe?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,ze.width,ze.height,Ue,be,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Be,ze.width,ze.height,0,Ue,be,ze.data)}}else{Fe?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,be,ge[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Ue,be,ge[J]);for(let ce=0;ce<W.length;ce++){const Ce=W[ce];Fe?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Ue,be,Ce.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Be,Ue,be,Ce.image[J])}}}p(S)&&h(i.TEXTURE_CUBE_MAP),se.__version=de.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function fe(C,S,j,ae,de,se){const Me=a.convert(j.format,j.colorSpace),pe=a.convert(j.type),Se=L(j.internalFormat,Me,pe,j.colorSpace);if(!n.get(S).__hasExternalTextures){const me=Math.max(1,S.width>>se),ge=Math.max(1,S.height>>se);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,se,Se,me,ge,S.depth,0,Me,pe,null):t.texImage2D(de,se,Se,me,ge,0,Me,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,de,n.get(j).__webglTexture,0,at(S)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,de,n.get(j).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(C,S,j){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const ae=S.depthTexture,de=ae&&ae.isDepthTexture?ae.type:null,se=A(S.stencilBuffer,de),Me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=at(S);Re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,se,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,C)}else{const ae=S.textures;for(let de=0;de<ae.length;de++){const se=ae[de],Me=a.convert(se.format,se.colorSpace),pe=a.convert(se.type),Se=L(se.internalFormat,Me,pe,se.colorSpace),Ge=at(S);j&&Re(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Se,S.width,S.height):Re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,Se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R(S.depthTexture,0);const ae=n.get(S.depthTexture).__webglTexture,de=at(S);if(S.depthTexture.format===Ji)Re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(S.depthTexture.format===ir)Re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function We(C){const S=n.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");xe(S.__webglFramebuffer,C)}else if(j){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ee(S.__webglDepthbuffer[ae],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ee(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(C,S,j){const ae=n.get(C);S!==void 0&&fe(ae.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&We(C)}function qe(C){const S=C.texture,j=n.get(C),ae=n.get(S);C.addEventListener("dispose",D);const de=C.textures,se=C.isWebGLCubeRenderTarget===!0,Me=de.length>1;if(Me||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=S.version,s.memory.textures++),se){j.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[pe]=[];for(let Se=0;Se<S.mipmaps.length;Se++)j.__webglFramebuffer[pe][Se]=i.createFramebuffer()}else j.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)j.__webglFramebuffer[pe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Me)for(let pe=0,Se=de.length;pe<Se;pe++){const Ge=n.get(de[pe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),s.memory.textures++)}if(C.samples>0&&Re(C)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const Se=de[pe];j.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const Ge=a.convert(Se.format,Se.colorSpace),me=a.convert(Se.type),ge=L(Se.internalFormat,Ge,me,Se.colorSpace,C.isXRRenderTarget===!0),Ie=at(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ge,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,j.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),ue(i.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)fe(j.__webglFramebuffer[pe][Se],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else fe(j.__webglFramebuffer[pe],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(S)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let pe=0,Se=de.length;pe<Se;pe++){const Ge=de[pe],me=n.get(Ge);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),ue(i.TEXTURE_2D,Ge),fe(j.__webglFramebuffer,C,Ge,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),p(Ge)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),ue(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)fe(j.__webglFramebuffer[Se],C,S,i.COLOR_ATTACHMENT0,pe,Se);else fe(j.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,pe,0);p(S)&&h(pe),t.unbindTexture()}C.depthBuffer&&We(C)}function ft(C){const S=C.textures;for(let j=0,ae=S.length;j<ae;j++){const de=S[j];if(p(de)){const se=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(de).__webglTexture;t.bindTexture(se,Me),h(se),t.unbindTexture()}}}const U=[],ht=[];function it(C){if(C.samples>0){if(Re(C)===!1){const S=C.textures,j=C.width,ae=C.height;let de=i.COLOR_BUFFER_BIT;const se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(C),pe=S.length>1;if(pe)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);const Ge=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,j,ae,0,0,j,ae,de,i.NEAREST),c===!0&&(U.length=0,ht.length=0,U.push(i.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(U.push(se),ht.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);const Ge=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function at(C){return Math.min(r.maxSamples,C.samples)}function Re(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(C){const S=s.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function ke(C,S){const j=C.colorSpace,ae=C.format,de=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||j!==ui&&j!==ni&&(dt.getTransfer(j)===gt?(ae!==Yt||de!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function Ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=N,this.setTexture2D=R,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Re}function A_(i,e){function t(n,r=ni){let a;const s=dt.getTransfer(r);if(n===Gn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.BYTE;if(n===cl)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Rr)return i.HALF_FLOAT;if(n===ul)return i.ALPHA;if(n===dl)return i.RGB;if(n===Yt)return i.RGBA;if(n===fl)return i.LUMINANCE;if(n===hl)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===ml)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===ya||n===xa||n===Sa||n===Ma)if(s===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vs||n===Gs||n===Ws||n===Xs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Vs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ws)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ys||n===js||n===$s)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Ys||n===js)return s===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===$s)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qs||n===Ks||n===Zs||n===Js||n===Qs||n===eo||n===to||n===no||n===io||n===ro||n===ao||n===so||n===oo||n===co)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===qs)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ks)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zs)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Js)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qs)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===lo||n===uo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ea)return s===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===fo||n===ho||n===po)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ea)return a.COMPRESSED_RED_RGTC1_EXT;if(n===fo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class w_ extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fa extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C_={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Zt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:R_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends Ci{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,v=null;const x=new L_,p=t.getContextAttributes();let h=null,L=null;const A=[],w=[],O=new Ke;let D=null;const P=new cn;P.layers.enable(1),P.viewport=new It;const I=new cn;I.layers.enable(2),I.viewport=new It;const b=[P,I],E=new w_;E.layers.enable(1),E.layers.enable(2);let N=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let fe=A[te];return fe===void 0&&(fe=new Ls,A[te]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(te){let fe=A[te];return fe===void 0&&(fe=new Ls,A[te]=fe),fe.getGripSpace()},this.getHand=function(te){let fe=A[te];return fe===void 0&&(fe=new Ls,A[te]=fe),fe.getHandSpace()};function q(te){const fe=w.indexOf(te.inputSource);if(fe===-1)return;const Ee=A[fe];Ee!==void 0&&(Ee.update(te.inputSource,te.frame,l||s),Ee.dispatchEvent({type:te.type,data:te.inputSource}))}function R(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",F);for(let te=0;te<A.length;te++){const fe=w[te];fe!==null&&(w[te]=null,A[te].disconnect(fe))}N=null,Q=null,x.reset(),e.setRenderTarget(h),m=null,f=null,d=null,r=null,L=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",R),r.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),L=new yn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,Ee=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?ir:Ji,Ee=p.stencil?nr:Ai);const We={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),L=new yn(f.textureWidth,f.textureHeight,{format:Yt,type:Gn,depthTexture:new Ll(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(te){for(let fe=0;fe<te.removed.length;fe++){const Ee=te.removed[fe],xe=w.indexOf(Ee);xe>=0&&(w[xe]=null,A[xe].disconnect(Ee))}for(let fe=0;fe<te.added.length;fe++){const Ee=te.added[fe];let xe=w.indexOf(Ee);if(xe===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=w.length){w.push(Ee),xe=Xe;break}else if(w[Xe]===null){w[Xe]=Ee,xe=Xe;break}if(xe===-1)break}const We=A[xe];We&&We.connect(Ee)}}const H=new V,K=new V;function Y(te,fe,Ee){H.setFromMatrixPosition(fe.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);const xe=H.distanceTo(K),We=fe.projectionMatrix.elements,Xe=Ee.projectionMatrix.elements,qe=We[14]/(We[10]-1),ft=We[14]/(We[10]+1),U=(We[9]+1)/We[5],ht=(We[9]-1)/We[5],it=(We[8]-1)/We[0],at=(Xe[8]+1)/Xe[0],Re=qe*it,_t=qe*at,ke=xe/(-it+at),Ve=ke*-it;fe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ve),te.translateZ(ke),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const C=qe+ke,S=ft+ke,j=Re-Ve,ae=_t+(xe-Ve),de=U*ft/S*C,se=ht*ft/S*C;te.projectionMatrix.makePerspective(j,ae,de,se,C,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function re(te,fe){fe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(fe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;x.texture!==null&&(te.near=x.depthNear,te.far=x.depthFar),E.near=I.near=P.near=te.near,E.far=I.far=P.far=te.far,(N!==E.near||Q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,Q=E.far,P.near=N,P.far=Q,I.near=N,I.far=Q,P.updateProjectionMatrix(),I.updateProjectionMatrix(),te.updateProjectionMatrix());const fe=te.parent,Ee=E.cameras;re(E,fe);for(let xe=0;xe<Ee.length;xe++)re(Ee[xe],fe);Ee.length===2?Y(E,P,I):E.projectionMatrix.copy(P.projectionMatrix),le(te,E,fe)};function le(te,fe,Ee){Ee===null?te.matrix.copy(fe.matrixWorld):(te.matrix.copy(Ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(fe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(fe.projectionMatrix),te.projectionMatrixInverse.copy(fe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Cr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ue=null;function je(te,fe){if(u=fe.getViewerPose(l||s),v=fe,u!==null){const Ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(L,m.framebuffer),e.setRenderTarget(L));let xe=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,xe=!0);for(let Xe=0;Xe<Ee.length;Xe++){const qe=Ee[Xe];let ft=null;if(m!==null)ft=m.getViewport(qe);else{const ht=d.getViewSubImage(f,qe);ft=ht.viewport,Xe===0&&(e.setRenderTargetTextures(L,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(L))}let U=b[Xe];U===void 0&&(U=new cn,U.layers.enable(Xe),U.viewport=new It,b[Xe]=U),U.matrix.fromArray(qe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(qe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ft.x,ft.y,ft.width,ft.height),Xe===0&&(E.matrix.copy(U.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),xe===!0&&E.cameras.push(U)}const We=r.enabledFeatures;if(We&&We.includes("depth-sensing")){const Xe=d.getDepthInformation(Ee[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(e,Xe,r.renderState)}}for(let Ee=0;Ee<A.length;Ee++){const xe=w[Ee],We=A[Ee];xe!==null&&We!==void 0&&We.update(xe,fe,l||s)}ue&&ue(te,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const nt=new Rl;nt.setAnimationLoop(je),this.setAnimationLoop=function(te){ue=te},this.dispose=function(){}}}const xi=new Wn,I_=new St;function U_(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Al(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,L,A,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),d(p,h)):h.isMeshPhongMaterial?(a(p,h),u(p,h)):h.isMeshStandardMaterial?(a(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,w)):h.isMeshMatcapMaterial?(a(p,h),v(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),x(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,L,A):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Kt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Kt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const L=e.get(h),A=L.envMap,w=L.envMapRotation;A&&(p.envMap.value=A,xi.copy(w),xi.x*=-1,xi.y*=-1,xi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(xi)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,L,A){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*L,p.scale.value=A*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,L){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=L.texture,p.transmissionSamplerSize.value.set(L.width,L.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const L=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(L.matrixWorld),p.nearDistance.value=L.shadow.camera.near,p.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N_(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,A){const w=A.program;n.uniformBlockBinding(L,w)}function l(L,A){let w=r[L.id];w===void 0&&(v(L),w=u(L),r[L.id]=w,L.addEventListener("dispose",p));const O=A.program;n.updateUBOMapping(L,O);const D=e.render.frame;a[L.id]!==D&&(f(L),a[L.id]=D)}function u(L){const A=d();L.__bindingPointIndex=A;const w=i.createBuffer(),O=L.__size,D=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,O,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let L=0;L<o;L++)if(s.indexOf(L)===-1)return s.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(L){const A=r[L.id],w=L.uniforms,O=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let D=0,P=w.length;D<P;D++){const I=Array.isArray(w[D])?w[D]:[w[D]];for(let b=0,E=I.length;b<E;b++){const N=I[b];if(m(N,D,b,O)===!0){const Q=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let R=0;for(let F=0;F<q.length;F++){const H=q[F],K=x(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,Q+R,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,R),R+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(L,A,w,O){const D=L.value,P=A+"_"+w;if(O[P]===void 0)return typeof D=="number"||typeof D=="boolean"?O[P]=D:O[P]=D.clone(),!0;{const I=O[P];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return O[P]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function v(L){const A=L.uniforms;let w=0;const O=16;for(let P=0,I=A.length;P<I;P++){const b=Array.isArray(A[P])?A[P]:[A[P]];for(let E=0,N=b.length;E<N;E++){const Q=b[E],q=Array.isArray(Q.value)?Q.value:[Q.value];for(let R=0,F=q.length;R<F;R++){const H=q[R],K=x(H),Y=w%O,re=Y%K.boundary,le=Y+re;w+=re,le!==0&&O-le<K.storage&&(w+=O-le),Q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=K.storage}}}const D=w%O;return D>0&&(w+=O-D),L.__size=w,L.__cache={},this}function x(L){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),A}function p(L){const A=L.target;A.removeEventListener("dispose",p);const w=s.indexOf(A.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function h(){for(const L in r)i.deleteBuffer(r[L]);s=[],r={},a={}}return{bind:c,update:l,dispose:h}}class F_{constructor(e={}){const{canvas:t=Af(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const h=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=ri,this.toneMappingExposure=1;const A=this;let w=!1,O=0,D=0,P=null,I=-1,b=null;const E=new It,N=new It;let Q=null;const q=new ot(0);let R=0,F=t.width,H=t.height,K=1,Y=null,re=null;const le=new It(0,0,F,H),ue=new It(0,0,F,H);let je=!1;const nt=new Co;let te=!1,fe=!1;const Ee=new St,xe=new V,We=new It,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ft(){return P===null?K:1}let U=n;function ht(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){const z="webgl2";if(U=ht(z,M),U===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let it,at,Re,_t,ke,Ve,C,S,j,ae,de,se,Me,pe,Se,Ge,me,ge,Ie,Ue,be,Be,Fe,ct;function y(){it=new Vm(U),it.init(),Be=new A_(U,it),at=new Fm(U,it,e,Be),Re=new E_(U),_t=new Xm(U),ke=new l_,Ve=new T_(U,it,Re,ke,at,Be,_t),C=new Bm(A),S=new km(A),j=new Jf(U),Fe=new Um(U,j),ae=new Gm(U,j,_t,Fe),de=new jm(U,ae,j,_t),Ie=new Ym(U,at,Ve),Ge=new Om(ke),se=new c_(A,C,S,it,at,Fe,Ge),Me=new U_(A,ke),pe=new d_,Se=new __(it),ge=new Im(A,C,S,Re,de,f,c),me=new M_(A,de,at),ct=new N_(U,_t,at,Re),Ue=new Nm(U,it,_t),be=new Wm(U,it,_t),_t.programs=se.programs,A.capabilities=at,A.extensions=it,A.properties=ke,A.renderLists=pe,A.shadowMap=me,A.state=Re,A.info=_t}y();const G=new D_(A,U);this.xr=G,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(F,H,!1))},this.getSize=function(M){return M.set(F,H)},this.setSize=function(M,z,X=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=M,H=z,t.width=Math.floor(M*K),t.height=Math.floor(z*K),X===!0&&(t.style.width=M+"px",t.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(F*K,H*K).floor()},this.setDrawingBufferSize=function(M,z,X){F=M,H=z,K=X,t.width=Math.floor(M*X),t.height=Math.floor(z*X),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,z,X,$){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,z,X,$),Re.viewport(E.copy(le).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(ue)},this.setScissor=function(M,z,X,$){M.isVector4?ue.set(M.x,M.y,M.z,M.w):ue.set(M,z,X,$),Re.scissor(N.copy(ue).multiplyScalar(K).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){Re.setScissorTest(je=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(M=!0,z=!0,X=!0){let $=0;if(M){let k=!1;if(P!==null){const _e=P.texture.format;k=_e===To||_e===bo||_e===Eo}if(k){const _e=P.texture.type,ye=_e===Gn||_e===Ai||_e===wr||_e===nr||_e===So||_e===Mo,Ae=ge.getClearColor(),we=ge.getClearAlpha(),Oe=Ae.r,De=Ae.g,Le=Ae.b;ye?(m[0]=Oe,m[1]=De,m[2]=Le,m[3]=we,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Oe,v[1]=De,v[2]=Le,v[3]=we,U.clearBufferiv(U.COLOR,0,v))}else $|=U.COLOR_BUFFER_BIT}z&&($|=U.DEPTH_BUFFER_BIT),X&&($|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),Se.dispose(),ke.dispose(),C.dispose(),S.dispose(),de.dispose(),Fe.dispose(),ct.dispose(),se.dispose(),G.dispose(),G.removeEventListener("sessionstart",mt),G.removeEventListener("sessionend",xn),wt.stop()};function W(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=_t.autoReset,z=me.enabled,X=me.autoUpdate,$=me.needsUpdate,k=me.type;y(),_t.autoReset=M,me.enabled=z,me.autoUpdate=X,me.needsUpdate=$,me.type=k}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ce(M){const z=M.target;z.removeEventListener("dispose",Ce),ze(z)}function ze(M){vt(M),ke.remove(M)}function vt(M){const z=ke.get(M).programs;z!==void 0&&(z.forEach(function(X){se.releaseProgram(X)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,X,$,k,_e){z===null&&(z=Xe);const ye=k.isMesh&&k.matrixWorld.determinant()<0,Ae=pn(M,z,X,$,k);Re.setMaterial($,ye);let we=X.index,Oe=1;if($.wireframe===!0){if(we=ae.getWireframeAttribute(X),we===void 0)return;Oe=2}const De=X.drawRange,Le=X.attributes.position;let tt=De.start*Oe,yt=(De.start+De.count)*Oe;_e!==null&&(tt=Math.max(tt,_e.start*Oe),yt=Math.min(yt,(_e.start+_e.count)*Oe)),we!==null?(tt=Math.max(tt,0),yt=Math.min(yt,we.count)):Le!=null&&(tt=Math.max(tt,0),yt=Math.min(yt,Le.count));const xt=yt-tt;if(xt<0||xt===1/0)return;Fe.setup(k,$,Ae,X,we);let Ct,ut=Ue;if(we!==null&&(Ct=j.get(we),ut=be,ut.setIndex(Ct)),k.isMesh)$.wireframe===!0?(Re.setLineWidth($.wireframeLinewidth*ft()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(k.isLine){let Pe=$.linewidth;Pe===void 0&&(Pe=1),Re.setLineWidth(Pe*ft()),k.isLineSegments?ut.setMode(U.LINES):k.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else k.isPoints?ut.setMode(U.POINTS):k.isSprite&&ut.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ut.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ut.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pe=k._multiDrawStarts,Mt=k._multiDrawCounts,st=k._multiDrawCount,Ut=we?j.get(we).bytesPerElement:1,Yn=ke.get($).currentProgram.getUniforms();for(let Vt=0;Vt<st;Vt++)Yn.setValue(U,"_gl_DrawID",Vt),ut.render(Pe[Vt]/Ut,Mt[Vt])}else if(k.isInstancedMesh)ut.renderInstances(tt,xt,k.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Mt=Math.min(X.instanceCount,Pe);ut.renderInstances(tt,xt,Mt)}else ut.render(tt,xt)};function lt(M,z,X){M.transparent===!0&&M.side===kn&&M.forceSinglePass===!1?(M.side=Kt,M.needsUpdate=!0,fi(M,z,X),M.side=ci,M.needsUpdate=!0,fi(M,z,X),M.side=kn):fi(M,z,X)}this.compile=function(M,z,X=null){X===null&&(X=M),p=Se.get(X),p.init(z),L.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==X&&M.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const $=new Set;return M.traverse(function(k){const _e=k.material;if(_e)if(Array.isArray(_e))for(let ye=0;ye<_e.length;ye++){const Ae=_e[ye];lt(Ae,X,k),$.add(Ae)}else lt(_e,X,k),$.add(_e)}),L.pop(),p=null,$},this.compileAsync=function(M,z,X=null){const $=this.compile(M,z,X);return new Promise(k=>{function _e(){if($.forEach(function(ye){ke.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){k(M);return}setTimeout(_e,10)}it.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ze=null;function pt(M){Ze&&Ze(M)}function mt(){wt.stop()}function xn(){wt.start()}const wt=new Rl;wt.setAnimationLoop(pt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(M){Ze=M,G.setAnimationLoop(M),M===null?wt.stop():wt.start()},G.addEventListener("sessionstart",mt),G.addEventListener("sessionend",xn),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(z),z=G.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,z,P),p=Se.get(M,L.length),p.init(z),L.push(p),Ee.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(Ee),fe=this.localClippingEnabled,te=Ge.init(this.clippingPlanes,fe),x=pe.get(M,h.length),x.init(),h.push(x),G.enabled===!0&&G.isPresenting===!0){const _e=A.xr.getDepthSensingMesh();_e!==null&&Jt(_e,z,-1/0,A.sortObjects)}Jt(M,z,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(Y,re),qe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,qe&&ge.addToRenderList(x,M),this.info.render.frame++,te===!0&&Ge.beginShadows();const X=p.state.shadowsArray;me.render(X,M,z),te===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,k=x.transmissive;if(p.setupLights(),z.isArrayCamera){const _e=z.cameras;if(k.length>0)for(let ye=0,Ae=_e.length;ye<Ae;ye++){const we=_e[ye];Dn($,k,M,we)}qe&&ge.render(M);for(let ye=0,Ae=_e.length;ye<Ae;ye++){const we=_e[ye];fn(x,M,we,we.viewport)}}else k.length>0&&Dn($,k,M,z),qe&&ge.render(M),fn(x,M,z);P!==null&&(Ve.updateMultisampleRenderTarget(P),Ve.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(A,M,z),Fe.resetDefaultState(),I=-1,b=null,L.pop(),L.length>0?(p=L[L.length-1],te===!0&&Ge.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Jt(M,z,X,$){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||nt.intersectsSprite(M)){$&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const ye=de.update(M),Ae=M.material;Ae.visible&&x.push(M,ye,Ae,X,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||nt.intersectsObject(M))){const ye=de.update(M),Ae=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),We.copy(ye.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ae)){const we=ye.groups;for(let Oe=0,De=we.length;Oe<De;Oe++){const Le=we[Oe],tt=Ae[Le.materialIndex];tt&&tt.visible&&x.push(M,ye,tt,X,We.z,Le)}}else Ae.visible&&x.push(M,ye,Ae,X,We.z,null)}}const _e=M.children;for(let ye=0,Ae=_e.length;ye<Ae;ye++)Jt(_e[ye],z,X,$)}function fn(M,z,X,$){const k=M.opaque,_e=M.transmissive,ye=M.transparent;p.setupLightsView(X),te===!0&&Ge.setGlobalState(A.clippingPlanes,X),$&&Re.viewport(E.copy($)),k.length>0&&hn(k,z,X),_e.length>0&&hn(_e,z,X),ye.length>0&&hn(ye,z,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Dn(M,z,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new yn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Rr:Gn,minFilter:Ti,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const _e=p.state.transmissionRenderTarget[$.id],ye=$.viewport||E;_e.setSize(ye.z,ye.w);const Ae=A.getRenderTarget();A.setRenderTarget(_e),A.getClearColor(q),R=A.getClearAlpha(),R<1&&A.setClearColor(16777215,.5),A.clear(),qe&&ge.render(X);const we=A.toneMapping;A.toneMapping=ri;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),te===!0&&Ge.setGlobalState(A.clippingPlanes,$),hn(M,X,$),Ve.updateMultisampleRenderTarget(_e),Ve.updateRenderTargetMipmap(_e),it.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Le=0,tt=z.length;Le<tt;Le++){const yt=z[Le],xt=yt.object,Ct=yt.geometry,ut=yt.material,Pe=yt.group;if(ut.side===kn&&xt.layers.test($.layers)){const Mt=ut.side;ut.side=Kt,ut.needsUpdate=!0,rt(xt,X,$,Ct,ut,Pe),ut.side=Mt,ut.needsUpdate=!0,De=!0}}De===!0&&(Ve.updateMultisampleRenderTarget(_e),Ve.updateRenderTargetMipmap(_e))}A.setRenderTarget(Ae),A.setClearColor(q,R),Oe!==void 0&&($.viewport=Oe),A.toneMapping=we}function hn(M,z,X){const $=z.isScene===!0?z.overrideMaterial:null;for(let k=0,_e=M.length;k<_e;k++){const ye=M[k],Ae=ye.object,we=ye.geometry,Oe=$===null?ye.material:$,De=ye.group;Ae.layers.test(X.layers)&&rt(Ae,z,X,we,Oe,De)}}function rt(M,z,X,$,k,_e){M.onBeforeRender(A,z,X,$,k,_e),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.transparent===!0&&k.side===kn&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,A.renderBufferDirect(X,z,$,k,M,_e),k.side=ci,k.needsUpdate=!0,A.renderBufferDirect(X,z,$,k,M,_e),k.side=kn):A.renderBufferDirect(X,z,$,k,M,_e),M.onAfterRender(A,z,X,$,k,_e)}function fi(M,z,X){z.isScene!==!0&&(z=Xe);const $=ke.get(M),k=p.state.lights,_e=p.state.shadowsArray,ye=k.state.version,Ae=se.getParameters(M,k.state,_e,z,X),we=se.getProgramCacheKey(Ae);let Oe=$.programs;$.environment=M.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(M.isMeshStandardMaterial?S:C).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Oe===void 0&&(M.addEventListener("dispose",Ce),Oe=new Map,$.programs=Oe);let De=Oe.get(we);if(De!==void 0){if($.currentProgram===De&&$.lightsStateVersion===ye)return Xn(M,Ae),De}else Ae.uniforms=se.getUniforms(M),M.onBeforeCompile(Ae,A),De=se.acquireProgram(Ae,we),Oe.set(we,De),$.uniforms=Ae.uniforms;const Le=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=Ge.uniform),Xn(M,Ae),$.needsLights=Za(M),$.lightsStateVersion=ye,$.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=De,$.uniformsList=null,De}function hi(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=ba.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Xn(M,z){const X=ke.get(M);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function pn(M,z,X,$,k){z.isScene!==!0&&(z=Xe),Ve.resetTextureUnits();const _e=z.fog,ye=$.isMeshStandardMaterial?z.environment:null,Ae=P===null?A.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ui,we=($.isMeshStandardMaterial?S:C).get($.envMap||ye),Oe=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color;let xt=ri;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xt=A.toneMapping);const Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=Ct!==void 0?Ct.length:0,Pe=ke.get($),Mt=p.state.lights;if(te===!0&&(fe===!0||M!==b)){const Gt=M===b&&$.id===I;Ge.setState($,M,Gt)}let st=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Mt.state.version||Pe.outputColorSpace!==Ae||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==we||$.fog===!0&&Pe.fog!==_e||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ge.numPlanes||Pe.numIntersection!==Ge.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==De||Pe.morphTargets!==Le||Pe.morphNormals!==tt||Pe.morphColors!==yt||Pe.toneMapping!==xt||Pe.morphTargetsCount!==ut)&&(st=!0):(st=!0,Pe.__version=$.version);let Ut=Pe.currentProgram;st===!0&&(Ut=fi($,z,k));let Yn=!1,Vt=!1,fr=!1;const Et=Ut.getUniforms(),Sn=Pe.uniforms;if(Re.useProgram(Ut.program)&&(Yn=!0,Vt=!0,fr=!0),$.id!==I&&(I=$.id,Vt=!0),Yn||b!==M){Et.setValue(U,"projectionMatrix",M.projectionMatrix),Et.setValue(U,"viewMatrix",M.matrixWorldInverse);const Gt=Et.map.cameraPosition;Gt!==void 0&&Gt.setValue(U,xe.setFromMatrixPosition(M.matrixWorld)),at.logarithmicDepthBuffer&&Et.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Vt=!0,fr=!0)}if(k.isSkinnedMesh){Et.setOptional(U,k,"bindMatrix"),Et.setOptional(U,k,"bindMatrixInverse");const Gt=k.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Et.setValue(U,"boneTexture",Gt.boneTexture,Ve))}k.isBatchedMesh&&(Et.setOptional(U,k,"batchingTexture"),Et.setValue(U,"batchingTexture",k._matricesTexture,Ve),Et.setOptional(U,k,"batchingIdTexture"),Et.setValue(U,"batchingIdTexture",k._indirectTexture,Ve),Et.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Et.setValue(U,"batchingColorTexture",k._colorsTexture,Ve));const an=X.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Ie.update(k,X,Ut),(Vt||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,Et.setValue(U,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=we,Sn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Sn.envMapIntensity.value=z.environmentIntensity),Vt&&(Et.setValue(U,"toneMappingExposure",A.toneMappingExposure),Pe.needsLights&&Ka(Sn,fr),_e&&$.fog===!0&&Me.refreshFogUniforms(Sn,_e),Me.refreshMaterialUniforms(Sn,$,K,H,p.state.transmissionRenderTarget[M.id]),ba.upload(U,hi(Pe),Sn,Ve)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ba.upload(U,hi(Pe),Sn,Ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(U,"center",k.center),Et.setValue(U,"modelViewMatrix",k.modelViewMatrix),Et.setValue(U,"normalMatrix",k.normalMatrix),Et.setValue(U,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Gt=$.uniformsGroups;for(let hr=0,Ja=Gt.length;hr<Ja;hr++){const Ri=Gt[hr];ct.update(Ri,Ut),ct.bind(Ri,Ut)}}return Ut}function Ka(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Za(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,z,X){ke.get(M.texture).__webglTexture=z,ke.get(M.depthTexture).__webglTexture=X;const $=ke.get(M);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,z){const X=ke.get(M);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,X=0){P=M,O=z,D=X;let $=!0,k=null,_e=!1,ye=!1;if(M){const we=ke.get(M);we.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(U.FRAMEBUFFER,null),$=!1):we.__webglFramebuffer===void 0?Ve.setupRenderTarget(M):we.__hasExternalTextures&&Ve.rebindTextures(M,ke.get(M.texture).__webglTexture,ke.get(M.depthTexture).__webglTexture);const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const De=ke.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[z])?k=De[z][X]:k=De[z],_e=!0):M.samples>0&&Ve.useMultisampledRTT(M)===!1?k=ke.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[X]:k=De,E.copy(M.viewport),N.copy(M.scissor),Q=M.scissorTest}else E.copy(le).multiplyScalar(K).floor(),N.copy(ue).multiplyScalar(K).floor(),Q=je;if(Re.bindFramebuffer(U.FRAMEBUFFER,k)&&$&&Re.drawBuffers(M,k),Re.viewport(E),Re.scissor(N),Re.setScissorTest(Q),_e){const we=ke.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,X)}else if(ye){const we=ke.get(M.texture),Oe=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.__webglTexture,X||0,Oe)}I=-1},this.readRenderTargetPixels=function(M,z,X,$,k,_e,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){Re.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const we=M.texture,Oe=we.format,De=we.type;if(!at.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-$&&X>=0&&X<=M.height-k&&U.readPixels(z,X,$,k,Be.convert(Oe),Be.convert(De),_e)}finally{const we=P!==null?ke.get(P).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,z,X,$,k,_e,ye){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){Re.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const we=M.texture,Oe=we.format,De=we.type;if(!at.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=M.width-$&&X>=0&&X<=M.height-k){const Le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.bufferData(U.PIXEL_PACK_BUFFER,_e.byteLength,U.STREAM_READ),U.readPixels(z,X,$,k,Be.convert(Oe),Be.convert(De),0),U.flush();const tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await wf(U,tt,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_e)}finally{U.deleteBuffer(Le),U.deleteSync(tt)}return _e}}finally{const we=P!==null?ke.get(P).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(M,z=null,X=0){M.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1]);const $=Math.pow(2,-X),k=Math.floor(M.image.width*$),_e=Math.floor(M.image.height*$),ye=z!==null?z.x:0,Ae=z!==null?z.y:0;Ve.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,ye,Ae,k,_e),Re.unbindTexture()},this.copyTextureToTexture=function(M,z,X=null,$=null,k=0){M.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,M=arguments[1],z=arguments[2],k=arguments[3]||0,X=null);let _e,ye,Ae,we,Oe,De;X!==null?(_e=X.max.x-X.min.x,ye=X.max.y-X.min.y,Ae=X.min.x,we=X.min.y):(_e=M.image.width,ye=M.image.height,Ae=0,we=0),$!==null?(Oe=$.x,De=$.y):(Oe=0,De=0);const Le=Be.convert(z.format),tt=Be.convert(z.type);Ve.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const yt=U.getParameter(U.UNPACK_ROW_LENGTH),xt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ct=U.getParameter(U.UNPACK_SKIP_PIXELS),ut=U.getParameter(U.UNPACK_SKIP_ROWS),Pe=U.getParameter(U.UNPACK_SKIP_IMAGES),Mt=M.isCompressedTexture?M.mipmaps[k]:M.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Mt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,we),M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Oe,De,_e,ye,Le,tt,Mt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Oe,De,Mt.width,Mt.height,Le,Mt.data):U.texSubImage2D(U.TEXTURE_2D,k,Oe,De,_e,ye,Le,tt,Mt),U.pixelStorei(U.UNPACK_ROW_LENGTH,yt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pe),k===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(M,z,X=null,$=null,k=0){M.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,M=arguments[2],z=arguments[3],k=arguments[4]||0);let _e,ye,Ae,we,Oe,De,Le,tt,yt;const xt=M.isCompressedTexture?M.mipmaps[k]:M.image;X!==null?(_e=X.max.x-X.min.x,ye=X.max.y-X.min.y,Ae=X.max.z-X.min.z,we=X.min.x,Oe=X.min.y,De=X.min.z):(_e=xt.width,ye=xt.height,Ae=xt.depth,we=0,Oe=0,De=0),$!==null?(Le=$.x,tt=$.y,yt=$.z):(Le=0,tt=0,yt=0);const Ct=Be.convert(z.format),ut=Be.convert(z.type);let Pe;if(z.isData3DTexture)Ve.setTexture3D(z,0),Pe=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Ve.setTexture2DArray(z,0),Pe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Mt=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ut=U.getParameter(U.UNPACK_SKIP_PIXELS),Yn=U.getParameter(U.UNPACK_SKIP_ROWS),Vt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,we),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De),M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Pe,k,Le,tt,yt,_e,ye,Ae,Ct,ut,xt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,k,Le,tt,yt,_e,ye,Ae,Ct,xt.data):U.texSubImage3D(Pe,k,Le,tt,yt,_e,ye,Ae,Ct,ut,xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Mt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt),k===0&&z.generateMipmaps&&U.generateMipmap(Pe),Re.unbindTexture()},this.initRenderTarget=function(M){ke.get(M).__webglFramebuffer===void 0&&Ve.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ve.setTextureCube(M,0):M.isData3DTexture?Ve.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ve.setTexture2DArray(M,0):Ve.setTexture2D(M,0),Re.unbindTexture()},this.resetState=function(){O=0,D=0,P=null,Re.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ao?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Oa?"display-p3":"srgb"}}class kc extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Po extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new V,Ua=new V,Vc=new St,xr=new Ba,ha=new Pr,Ds=new V,Gc=new V;class O_ extends jt{constructor(e=new un,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ia.fromBufferAttribute(t,r-1),Ua.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ia.distanceTo(Ua);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),ha.radius+=a,e.ray.intersectsSphere(ha)===!1)return;Vc.copy(r).invert(),xr.copy(e.ray).applyMatrix4(Vc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,s.start),v=Math.min(u.count,s.start+s.count);for(let x=m,p=v-1;x<p;x+=l){const h=u.getX(x),L=u.getX(x+1),A=pa(this,e,xr,c,h,L);A&&t.push(A)}if(this.isLineLoop){const x=u.getX(v-1),p=u.getX(m),h=pa(this,e,xr,c,x,p);h&&t.push(h)}}else{const m=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let x=m,p=v-1;x<p;x+=l){const h=pa(this,e,xr,c,x,x+1);h&&t.push(h)}if(this.isLineLoop){const x=pa(this,e,xr,c,v-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function pa(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(Ia.fromBufferAttribute(s,r),Ua.fromBufferAttribute(s,a),t.distanceSqToSegment(Ia,Ua,Ds,Gc)>n)return;Ds.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ds);if(!(c<e.near||c>e.far))return{distance:c,point:Gc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Wc=new V,Xc=new V;class Fl extends O_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Wc.fromBufferAttribute(t,r),Xc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wc.distanceTo(Xc);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new St,_o=new Ba,ma=new Pr,ga=new V;class _a extends jt{constructor(e=new un,t=new B_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ma.radius+=a,e.ray.intersectsSphere(ma)===!1)return;Yc.copy(r).invert(),_o.copy(e.ray).applyMatrix4(Yc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,s.start),m=Math.min(l.count,s.start+s.count);for(let v=f,x=m;v<x;v++){const p=l.getX(v);ga.fromBufferAttribute(d,p),jc(ga,p,c,r,e,t,this)}}else{const f=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let v=f,x=m;v<x;v++)ga.fromBufferAttribute(d,v),jc(ga,v,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function jc(i,e,t,n,r,a,s){const o=_o.distanceSqToPoint(i);if(o<t){const c=new V;_o.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:s})}}class z_ extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $c{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qc extends Fl{constructor(e=10,t=10,n=4473924,r=8947848){n=new ot(n),r=new ot(r);const a=t/2,s=e/t,o=e/2,c=[],l=[];for(let f=0,m=0,v=-o;f<=t;f++,v+=s){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const x=f===a?n:r;x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3}const u=new un;u.setAttribute("position",new rn(c,3)),u.setAttribute("color",new rn(l,3));const d=new Po({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class H_ extends Fl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new un;r.setAttribute("position",new rn(t,3)),r.setAttribute("color",new rn(n,3));const a=new Po({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,n){const r=new ot,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(n),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);const Kc={type:"change"},Is={type:"start"},Zc={type:"end"},va=new Ba,Jc=new ti,k_=Math.cos(70*mo.DEG2RAD);class Qc extends Ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",Se),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kc),n.update(),a=r.NONE},this.update=function(){const y=new V,G=new wi().setFromUnitVectors(e.up,new V(0,1,0)),W=G.clone().invert(),J=new V,ce=new wi,Ce=new V,ze=2*Math.PI;return function(lt=null){const Ze=n.object.position;y.copy(Ze).sub(n.target),y.applyQuaternion(G),o.setFromVector3(y),n.autoRotate&&a===r.NONE&&Q(E(lt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let pt=n.minAzimuthAngle,mt=n.maxAzimuthAngle;isFinite(pt)&&isFinite(mt)&&(pt<-Math.PI?pt+=ze:pt>Math.PI&&(pt-=ze),mt<-Math.PI?mt+=ze:mt>Math.PI&&(mt-=ze),pt<=mt?o.theta=Math.max(pt,Math.min(mt,o.theta)):o.theta=o.theta>(pt+mt)/2?Math.max(pt,o.theta):Math.min(mt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let xn=!1;if(n.zoomToCursor&&D||n.object.isOrthographicCamera)o.radius=le(o.radius);else{const wt=o.radius;o.radius=le(o.radius*l),xn=wt!=o.radius}if(y.setFromSpherical(o),y.applyQuaternion(W),Ze.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&D){let wt=null;if(n.object.isPerspectiveCamera){const Jt=y.length();wt=le(Jt*l);const fn=Jt-wt;n.object.position.addScaledVector(w,fn),n.object.updateMatrixWorld(),xn=!!fn}else if(n.object.isOrthographicCamera){const Jt=new V(O.x,O.y,0);Jt.unproject(n.object);const fn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),xn=fn!==n.object.zoom;const Dn=new V(O.x,O.y,0);Dn.unproject(n.object),n.object.position.sub(Dn).add(Jt),n.object.updateMatrixWorld(),wt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wt).add(n.object.position):(va.origin.copy(n.object.position),va.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(va.direction))<k_?e.lookAt(n.target):(Jc.setFromNormalAndCoplanarPoint(n.object.up,n.target),va.intersectPlane(Jc,n.target))))}else if(n.object.isOrthographicCamera){const wt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),wt!==n.object.zoom&&(n.object.updateProjectionMatrix(),xn=!0)}return l=1,D=!1,xn||J.distanceToSquared(n.object.position)>s||8*(1-ce.dot(n.object.quaternion))>s||Ce.distanceToSquared(n.target)>s?(n.dispatchEvent(Kc),J.copy(n.object.position),ce.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ge),n.domElement.removeEventListener("pointerdown",Ve),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",de),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",Me,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const s=1e-6,o=new $c,c=new $c;let l=1;const u=new V,d=new Ke,f=new Ke,m=new Ke,v=new Ke,x=new Ke,p=new Ke,h=new Ke,L=new Ke,A=new Ke,w=new V,O=new Ke;let D=!1;const P=[],I={};let b=!1;function E(y){return y!==null?2*Math.PI/60*n.autoRotateSpeed*y:2*Math.PI/60/60*n.autoRotateSpeed}function N(y){const G=Math.abs(y*.01);return Math.pow(.95,n.zoomSpeed*G)}function Q(y){c.theta-=y}function q(y){c.phi-=y}const R=function(){const y=new V;return function(W,J){y.setFromMatrixColumn(J,0),y.multiplyScalar(-W),u.add(y)}}(),F=function(){const y=new V;return function(W,J){n.screenSpacePanning===!0?y.setFromMatrixColumn(J,1):(y.setFromMatrixColumn(J,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(W),u.add(y)}}(),H=function(){const y=new V;return function(W,J){const ce=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;y.copy(Ce).sub(n.target);let ze=y.length();ze*=Math.tan(n.object.fov/2*Math.PI/180),R(2*W*ze/ce.clientHeight,n.object.matrix),F(2*J*ze/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(W*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),F(J*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(y,G){if(!n.zoomToCursor)return;D=!0;const W=n.domElement.getBoundingClientRect(),J=y-W.left,ce=G-W.top,Ce=W.width,ze=W.height;O.x=J/Ce*2-1,O.y=-(ce/ze)*2+1,w.set(O.x,O.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(y){return Math.max(n.minDistance,Math.min(n.maxDistance,y))}function ue(y){d.set(y.clientX,y.clientY)}function je(y){re(y.clientX,y.clientX),h.set(y.clientX,y.clientY)}function nt(y){v.set(y.clientX,y.clientY)}function te(y){f.set(y.clientX,y.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const G=n.domElement;Q(2*Math.PI*m.x/G.clientHeight),q(2*Math.PI*m.y/G.clientHeight),d.copy(f),n.update()}function fe(y){L.set(y.clientX,y.clientY),A.subVectors(L,h),A.y>0?K(N(A.y)):A.y<0&&Y(N(A.y)),h.copy(L),n.update()}function Ee(y){x.set(y.clientX,y.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),H(p.x,p.y),v.copy(x),n.update()}function xe(y){re(y.clientX,y.clientY),y.deltaY<0?Y(N(y.deltaY)):y.deltaY>0&&K(N(y.deltaY)),n.update()}function We(y){let G=!1;switch(y.code){case n.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),G=!0;break}G&&(y.preventDefault(),n.update())}function Xe(y){if(P.length===1)d.set(y.pageX,y.pageY);else{const G=Fe(y),W=.5*(y.pageX+G.x),J=.5*(y.pageY+G.y);d.set(W,J)}}function qe(y){if(P.length===1)v.set(y.pageX,y.pageY);else{const G=Fe(y),W=.5*(y.pageX+G.x),J=.5*(y.pageY+G.y);v.set(W,J)}}function ft(y){const G=Fe(y),W=y.pageX-G.x,J=y.pageY-G.y,ce=Math.sqrt(W*W+J*J);h.set(0,ce)}function U(y){n.enableZoom&&ft(y),n.enablePan&&qe(y)}function ht(y){n.enableZoom&&ft(y),n.enableRotate&&Xe(y)}function it(y){if(P.length==1)f.set(y.pageX,y.pageY);else{const W=Fe(y),J=.5*(y.pageX+W.x),ce=.5*(y.pageY+W.y);f.set(J,ce)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const G=n.domElement;Q(2*Math.PI*m.x/G.clientHeight),q(2*Math.PI*m.y/G.clientHeight),d.copy(f)}function at(y){if(P.length===1)x.set(y.pageX,y.pageY);else{const G=Fe(y),W=.5*(y.pageX+G.x),J=.5*(y.pageY+G.y);x.set(W,J)}p.subVectors(x,v).multiplyScalar(n.panSpeed),H(p.x,p.y),v.copy(x)}function Re(y){const G=Fe(y),W=y.pageX-G.x,J=y.pageY-G.y,ce=Math.sqrt(W*W+J*J);L.set(0,ce),A.set(0,Math.pow(L.y/h.y,n.zoomSpeed)),K(A.y),h.copy(L);const Ce=(y.pageX+G.x)*.5,ze=(y.pageY+G.y)*.5;re(Ce,ze)}function _t(y){n.enableZoom&&Re(y),n.enablePan&&at(y)}function ke(y){n.enableZoom&&Re(y),n.enableRotate&&it(y)}function Ve(y){n.enabled!==!1&&(P.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",S)),!be(y)&&(Ie(y),y.pointerType==="touch"?Ge(y):j(y)))}function C(y){n.enabled!==!1&&(y.pointerType==="touch"?me(y):ae(y))}function S(y){switch(Ue(y),P.length){case 0:n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(Zc),a=r.NONE;break;case 1:const G=P[0],W=I[G];Ge({pointerId:G,pageX:W.x,pageY:W.y});break}}function j(y){let G;switch(y.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Hn.DOLLY:if(n.enableZoom===!1)return;je(y),a=r.DOLLY;break;case Hn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;nt(y),a=r.PAN}else{if(n.enableRotate===!1)return;ue(y),a=r.ROTATE}break;case Hn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;ue(y),a=r.ROTATE}else{if(n.enablePan===!1)return;nt(y),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Is)}function ae(y){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;te(y);break;case r.DOLLY:if(n.enableZoom===!1)return;fe(y);break;case r.PAN:if(n.enablePan===!1)return;Ee(y);break}}function de(y){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(y.preventDefault(),n.dispatchEvent(Is),xe(se(y)),n.dispatchEvent(Zc))}function se(y){const G=y.deltaMode,W={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(G){case 1:W.deltaY*=16;break;case 2:W.deltaY*=100;break}return y.ctrlKey&&!b&&(W.deltaY*=10),W}function Me(y){y.key==="Control"&&(b=!0,n.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(y){y.key==="Control"&&(b=!1,n.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Se(y){n.enabled===!1||n.enablePan===!1||We(y)}function Ge(y){switch(Be(y),P.length){case 1:switch(n.touches.ONE){case ei.ROTATE:if(n.enableRotate===!1)return;Xe(y),a=r.TOUCH_ROTATE;break;case ei.PAN:if(n.enablePan===!1)return;qe(y),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(y),a=r.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(y),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Is)}function me(y){switch(Be(y),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;it(y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;at(y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(y),n.update();break;default:a=r.NONE}}function ge(y){n.enabled!==!1&&y.preventDefault()}function Ie(y){P.push(y.pointerId)}function Ue(y){delete I[y.pointerId];for(let G=0;G<P.length;G++)if(P[G]==y.pointerId){P.splice(G,1);return}}function be(y){for(let G=0;G<P.length;G++)if(P[G]==y.pointerId)return!0;return!1}function Be(y){let G=I[y.pointerId];G===void 0&&(G=new Ke,I[y.pointerId]=G),G.set(y.pageX,y.pageY)}function Fe(y){const G=y.pointerId===P[0]?P[1]:P[0];return I[G]}n.domElement.addEventListener("contextmenu",ge),n.domElement.addEventListener("pointerdown",Ve),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",de,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Me,{passive:!0,capture:!0}),this.update()}}var Ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V_(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Ta={},Ol={},Bl={};Object.defineProperty(Bl,"__esModule",{value:!0});var Ha={};Object.defineProperty(Ha,"__esModule",{value:!0});Ha.Hierarchy=void 0;Ha.Hierarchy={parse:G_};function G_(i){return Object.entries(i).reduce((e,[t,n])=>(n===-1?e.pages[t]={}:n&&(e.nodes[t]={pointCount:n}),e),{nodes:{},pages:{}})}(function(i){var e=Ye&&Ye.__createBinding||(Object.create?function(n,r,a,s){s===void 0&&(s=a);var o=Object.getOwnPropertyDescriptor(r,a);(!o||("get"in o?!r.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(n,s,o)}:function(n,r,a,s){s===void 0&&(s=a),n[s]=r[a]}),t=Ye&&Ye.__exportStar||function(n,r){for(var a in n)a!=="default"&&!Object.prototype.hasOwnProperty.call(r,a)&&e(r,n,a)};Object.defineProperty(i,"__esModule",{value:!0}),t(Bl,i),t(Ha,i)})(Ol);var zl={},li={};Object.defineProperty(li,"__esModule",{value:!0});li.hierarchyItemLength=li.infoLength=void 0;li.infoLength=160;li.hierarchyItemLength=32;var ka={},Lo={},Rn={};Object.defineProperty(Rn,"__esModule",{value:!0});Rn.evlrHeaderLength=Rn.vlrHeaderLength=Rn.minHeaderLength=void 0;Rn.minHeaderLength=375;Rn.vlrHeaderLength=54;Rn.evlrHeaderLength=60;var Ir={},dn={},ar={};Object.defineProperty(ar,"__esModule",{value:!0});ar.getBigUint64=ar.parseBigInt=void 0;function W_(i){if(i>BigInt(Number.MAX_SAFE_INTEGER)||i<BigInt(-Number.MAX_SAFE_INTEGER))throw new Error(`Cannot convert bigint to number: ${i}`);return Number(i)}ar.parseBigInt=W_;function X_(i,e,t){if(i.getBigUint64)return i.getBigUint64(e,t);const[n,r]=t?[4,0]:[0,4],a=BigInt(i.getUint32(e+n,t)),s=BigInt(i.getUint32(e+r,t));return(a<<BigInt(32))+s}ar.getBigUint64=X_;var ai={};Object.defineProperty(ai,"__esModule",{value:!0});ai.toCString=ai.toDataView=ai.Binary=void 0;ai.Binary={toDataView:Do,toCString:Hl};function Do(i){return new DataView(i.buffer,i.byteOffset,i.length)}ai.toDataView=Do;function Hl(i){const e=Do(i);let t="";for(let n=0;n<e.byteLength;++n){const r=e.getInt8(n);if(r===0)return t;t+=String.fromCharCode(r)}return t}ai.toCString=Hl;var Va={};Object.defineProperty(Va,"__esModule",{value:!0});Va.Bounds=void 0;Va.Bounds={min:Y_,max:j_,mid:Io,width:kl,depth:Vl,height:Gl,cube:$_,step:Wl,stepTo:q_,intersection:K_};function Y_(i){return[i[0],i[1],i[2]]}function j_(i){return[i[3],i[4],i[5]]}function Io([i,e,t,n,r,a]){return[i+(n-i)/2,e+(r-e)/2,t+(a-t)/2]}function kl(i){return i[3]-i[0]}function Vl(i){return i[4]-i[1]}function Gl(i){return i[5]-i[2]}function $_(i){const e=Io(i),t=Math.max(kl(i),Vl(i),Gl(i))/2;return[e[0]-t,e[1]-t,e[2]-t,e[0]+t,e[1]+t,e[2]+t]}function Wl(i,[e,t,n]){const[r,a,s,o,c,l]=i,[u,d,f]=Io(i);return[e?u:r,t?d:a,n?f:s,e?o:u,t?c:d,n?l:f]}function q_(i,[e,t,n,r]){for(let a=e-1;a>=0;--a)i=Wl(i,[t>>a&1,n>>a&1,r>>a&1]);return i}function K_(i,e){return[Math.max(i[0],e[0]),Math.max(i[1],e[1]),Math.max(i[2],e[2]),Math.min(i[3],e[3]),Math.min(i[4],e[4]),Math.min(i[5],e[5])]}var Ga={};Object.defineProperty(Ga,"__esModule",{value:!0});Ga.Dimension=void 0;const Z_={int8:{type:"signed",size:1},int16:{type:"signed",size:2},int32:{type:"signed",size:4},int64:{type:"signed",size:8},uint8:{type:"unsigned",size:1},uint16:{type:"unsigned",size:2},uint32:{type:"unsigned",size:4},uint64:{type:"unsigned",size:8},float32:{type:"float",size:4},float64:{type:"float",size:8},float:{type:"float",size:4},double:{type:"float",size:8},bool:{type:"unsigned",size:1},boolean:{type:"unsigned",size:1}};Ga.Dimension={Type:Z_,ctype:J_};function J_({type:i,size:e}){switch(i){case"signed":switch(e){case 1:return"int8";case 2:return"int16";case 4:return"int32";case 8:return"int64"}case"unsigned":switch(e){case 1:return"uint8";case 2:return"uint16";case 4:return"uint32";case 8:return"uint64"}case"float":switch(e){case 4:return"float";case 8:return"double"}}throw new Error(`Invalid dimension type/size: ${i}/${e}`)}var Wa={},vo={exports:{}};(function(i,e){var t=typeof self<"u"?self:Ye,n=function(){function a(){this.fetch=!1,this.DOMException=t.DOMException}return a.prototype=t,new a}();(function(a){(function(s){var o={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function c(R){return R&&DataView.prototype.isPrototypeOf(R)}if(o.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(R){return R&&l.indexOf(Object.prototype.toString.call(R))>-1};function d(R){if(typeof R!="string"&&(R=String(R)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(R))throw new TypeError("Invalid character in header field name");return R.toLowerCase()}function f(R){return typeof R!="string"&&(R=String(R)),R}function m(R){var F={next:function(){var H=R.shift();return{done:H===void 0,value:H}}};return o.iterable&&(F[Symbol.iterator]=function(){return F}),F}function v(R){this.map={},R instanceof v?R.forEach(function(F,H){this.append(H,F)},this):Array.isArray(R)?R.forEach(function(F){this.append(F[0],F[1])},this):R&&Object.getOwnPropertyNames(R).forEach(function(F){this.append(F,R[F])},this)}v.prototype.append=function(R,F){R=d(R),F=f(F);var H=this.map[R];this.map[R]=H?H+", "+F:F},v.prototype.delete=function(R){delete this.map[d(R)]},v.prototype.get=function(R){return R=d(R),this.has(R)?this.map[R]:null},v.prototype.has=function(R){return this.map.hasOwnProperty(d(R))},v.prototype.set=function(R,F){this.map[d(R)]=f(F)},v.prototype.forEach=function(R,F){for(var H in this.map)this.map.hasOwnProperty(H)&&R.call(F,this.map[H],H,this)},v.prototype.keys=function(){var R=[];return this.forEach(function(F,H){R.push(H)}),m(R)},v.prototype.values=function(){var R=[];return this.forEach(function(F){R.push(F)}),m(R)},v.prototype.entries=function(){var R=[];return this.forEach(function(F,H){R.push([H,F])}),m(R)},o.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function x(R){if(R.bodyUsed)return Promise.reject(new TypeError("Already read"));R.bodyUsed=!0}function p(R){return new Promise(function(F,H){R.onload=function(){F(R.result)},R.onerror=function(){H(R.error)}})}function h(R){var F=new FileReader,H=p(F);return F.readAsArrayBuffer(R),H}function L(R){var F=new FileReader,H=p(F);return F.readAsText(R),H}function A(R){for(var F=new Uint8Array(R),H=new Array(F.length),K=0;K<F.length;K++)H[K]=String.fromCharCode(F[K]);return H.join("")}function w(R){if(R.slice)return R.slice(0);var F=new Uint8Array(R.byteLength);return F.set(new Uint8Array(R)),F.buffer}function O(){return this.bodyUsed=!1,this._initBody=function(R){this._bodyInit=R,R?typeof R=="string"?this._bodyText=R:o.blob&&Blob.prototype.isPrototypeOf(R)?this._bodyBlob=R:o.formData&&FormData.prototype.isPrototypeOf(R)?this._bodyFormData=R:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(R)?this._bodyText=R.toString():o.arrayBuffer&&o.blob&&c(R)?(this._bodyArrayBuffer=w(R.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(R)||u(R))?this._bodyArrayBuffer=w(R):this._bodyText=R=Object.prototype.toString.call(R):this._bodyText="",this.headers.get("content-type")||(typeof R=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(R)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var R=x(this);if(R)return R;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?x(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var R=x(this);if(R)return R;if(this._bodyBlob)return L(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(A(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}var D=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function P(R){var F=R.toUpperCase();return D.indexOf(F)>-1?F:R}function I(R,F){F=F||{};var H=F.body;if(R instanceof I){if(R.bodyUsed)throw new TypeError("Already read");this.url=R.url,this.credentials=R.credentials,F.headers||(this.headers=new v(R.headers)),this.method=R.method,this.mode=R.mode,this.signal=R.signal,!H&&R._bodyInit!=null&&(H=R._bodyInit,R.bodyUsed=!0)}else this.url=String(R);if(this.credentials=F.credentials||this.credentials||"same-origin",(F.headers||!this.headers)&&(this.headers=new v(F.headers)),this.method=P(F.method||this.method||"GET"),this.mode=F.mode||this.mode||null,this.signal=F.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&H)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(H)}I.prototype.clone=function(){return new I(this,{body:this._bodyInit})};function b(R){var F=new FormData;return R.trim().split("&").forEach(function(H){if(H){var K=H.split("="),Y=K.shift().replace(/\+/g," "),re=K.join("=").replace(/\+/g," ");F.append(decodeURIComponent(Y),decodeURIComponent(re))}}),F}function E(R){var F=new v,H=R.replace(/\r?\n[\t ]+/g," ");return H.split(/\r?\n/).forEach(function(K){var Y=K.split(":"),re=Y.shift().trim();if(re){var le=Y.join(":").trim();F.append(re,le)}}),F}O.call(I.prototype);function N(R,F){F||(F={}),this.type="default",this.status=F.status===void 0?200:F.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in F?F.statusText:"OK",this.headers=new v(F.headers),this.url=F.url||"",this._initBody(R)}O.call(N.prototype),N.prototype.clone=function(){return new N(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},N.error=function(){var R=new N(null,{status:0,statusText:""});return R.type="error",R};var Q=[301,302,303,307,308];N.redirect=function(R,F){if(Q.indexOf(F)===-1)throw new RangeError("Invalid status code");return new N(null,{status:F,headers:{location:R}})},s.DOMException=a.DOMException;try{new s.DOMException}catch{s.DOMException=function(F,H){this.message=F,this.name=H;var K=Error(F);this.stack=K.stack},s.DOMException.prototype=Object.create(Error.prototype),s.DOMException.prototype.constructor=s.DOMException}function q(R,F){return new Promise(function(H,K){var Y=new I(R,F);if(Y.signal&&Y.signal.aborted)return K(new s.DOMException("Aborted","AbortError"));var re=new XMLHttpRequest;function le(){re.abort()}re.onload=function(){var ue={status:re.status,statusText:re.statusText,headers:E(re.getAllResponseHeaders()||"")};ue.url="responseURL"in re?re.responseURL:ue.headers.get("X-Request-URL");var je="response"in re?re.response:re.responseText;H(new N(je,ue))},re.onerror=function(){K(new TypeError("Network request failed"))},re.ontimeout=function(){K(new TypeError("Network request failed"))},re.onabort=function(){K(new s.DOMException("Aborted","AbortError"))},re.open(Y.method,Y.url,!0),Y.credentials==="include"?re.withCredentials=!0:Y.credentials==="omit"&&(re.withCredentials=!1),"responseType"in re&&o.blob&&(re.responseType="blob"),Y.headers.forEach(function(ue,je){re.setRequestHeader(je,ue)}),Y.signal&&(Y.signal.addEventListener("abort",le),re.onreadystatechange=function(){re.readyState===4&&Y.signal.removeEventListener("abort",le)}),re.send(typeof Y._bodyInit>"u"?null:Y._bodyInit)})}return q.polyfill=!0,a.fetch||(a.fetch=q,a.Headers=v,a.Request=I,a.Response=N),s.Headers=v,s.Request=I,s.Response=N,s.fetch=q,Object.defineProperty(s,"__esModule",{value:!0}),s})({})})(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var r=n;e=r.fetch,e.default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,i.exports=e})(vo,vo.exports);var Q_=vo.exports;const ev={},tv=Object.freeze(Object.defineProperty({__proto__:null,default:ev},Symbol.toStringTag,{value:"Module"})),nv=V_(tv);var iv=Ye&&Ye.__createBinding||(Object.create?function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}:function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]}),rv=Ye&&Ye.__setModuleDefault||(Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e}),av=Ye&&Ye.__importStar||function(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)t!=="default"&&Object.prototype.hasOwnProperty.call(i,t)&&iv(e,i,t);return rv(e,i),e},sv=Ye&&Ye.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Wa,"__esModule",{value:!0});Wa.Getter=void 0;const ov=sv(Q_);Wa.Getter={create:cv,http:Xl,file:Yl};function cv(i){return typeof i=="function"?i:i.startsWith("http://")||i.startsWith("https://")?Xl(i):Yl(i)}function Xl(i){return async function(t,n){if(t<0||n<0||t>n)throw new Error("Invalid range");const a=await(await(0,ov.default)(i,{headers:{Range:`bytes=${t}-${n-1}`}})).arrayBuffer();return new Uint8Array(a)}}function Yl(i){return async function(t,n){const r=await Promise.resolve().then(()=>av(nv));async function a(s=0,o=1/0){if(s<0||o<0||s>o)throw new Error("Invalid range");await r.promises.access(i);const c=r.createReadStream(i,{start:s,end:o-1,autoClose:!0});return lv(c)}return a(t,n)}}async function lv(i){return await new Promise((e,t)=>{const n=[];i.on("data",r=>n.push(r)),i.on("error",t),i.on("end",()=>e(Buffer.concat(n)))})}var jl={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.Key=void 0,i.Key={create:e,parse:t,toString:n,step:r,up:a,compare:s,depth:o};function e(c,l=0,u=0,d=0){return typeof c!="number"?t(c):[c,l,u,d]}function t(c){if(typeof c!="string")return c;const[l,u,d,f,...m]=c.split("-").map(x=>parseInt(x,10)),v=[l,u,d,f];if(m.length!==0||v.some(x=>typeof x!="number"||Number.isNaN(x)))throw new Error(`Invalid key: ${c}`);return v}function n(c){return typeof c=="string"?c:c.join("-")}function r(c,[l,u,d]){const[f,m,v,x]=i.Key.create(c);return[f+1,m*2+l,v*2+u,x*2+d]}function a(c,l=1){const[u,d,f,m]=i.Key.create(c);return[u-l,d>>l,f>>l,m>>l]}function s(c,l){for(let u=0;u<c.length;++u){if(c[u]<l[u])return-1;if(c[u]>l[u])return 1}return 0}function o(c){return c[0]}})(jl);var Xa={};Object.defineProperty(Xa,"__esModule",{value:!0});Xa.Scale=void 0;Xa.Scale={apply:(i,e=1,t=0)=>(i-t)/e,unapply:(i,e=1,t=0)=>i*e+t};var Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});Ya.Step=void 0;Ya.Step={fromIndex:uv,list:dv};function uv(i){if(i<0||i>=8)throw new Error(`Invalid step index: ${i}`);const e=i>>0&1?1:0,t=i>>1&1?1:0,n=i>>2&1?1:0;return[e,t,n]}function dv(){return[[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]]}(function(i){var e=Ye&&Ye.__createBinding||(Object.create?function(u,d,f,m){m===void 0&&(m=f);var v=Object.getOwnPropertyDescriptor(d,f);(!v||("get"in v?!d.__esModule:v.writable||v.configurable))&&(v={enumerable:!0,get:function(){return d[f]}}),Object.defineProperty(u,m,v)}:function(u,d,f,m){m===void 0&&(m=f),u[m]=d[f]}),t=Ye&&Ye.__exportStar||function(u,d){for(var f in u)f!=="default"&&!Object.prototype.hasOwnProperty.call(d,f)&&e(d,u,f)};Object.defineProperty(i,"__esModule",{value:!0}),i.Step=i.Scale=i.Key=i.Getter=i.Dimension=i.Bounds=i.Binary=void 0,t(ar,i);var n=ai;Object.defineProperty(i,"Binary",{enumerable:!0,get:function(){return n.Binary}});var r=Va;Object.defineProperty(i,"Bounds",{enumerable:!0,get:function(){return r.Bounds}});var a=Ga;Object.defineProperty(i,"Dimension",{enumerable:!0,get:function(){return a.Dimension}});var s=Wa;Object.defineProperty(i,"Getter",{enumerable:!0,get:function(){return s.Getter}});var o=jl;Object.defineProperty(i,"Key",{enumerable:!0,get:function(){return o.Key}});var c=Xa;Object.defineProperty(i,"Scale",{enumerable:!0,get:function(){return c.Scale}});var l=Ya;Object.defineProperty(i,"Step",{enumerable:!0,get:function(){return l.Step}})})(dn);var Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});Ur.ExtraBytes=void 0;const Ht=dn;Ur.ExtraBytes={getDimension:fv,parse:hv,parseOne:$l};const Aa=192;function fv({type:i,length:e}){switch(i){case"signed":case"unsigned":switch(e){case 1:case 2:case 4:case 8:return{type:i,size:e}}case"float":switch(e){case 4:case 8:return{type:i,size:e}}}}function hv(i){if(i.byteLength%Aa!==0)throw new Error(`Invalid extra bytes VLR length: ${i.byteLength}`);const e=[];for(let t=0;t<i.byteLength;t+=Aa)e.push($l(i.slice(t,t+Aa)));return e}function $l(i){if(i.byteLength!==Aa)throw new Error(`Invalid extra bytes entry length: ${i.byteLength}`);const e=Ht.Binary.toDataView(i),t=Ht.Binary.toCString(i.slice(4,36)),n=Ht.Binary.toCString(i.slice(60,192)),r=e.getUint8(2),a=e.getUint8(3);if(r>=11)throw new Error(`Invalid extra bytes "type" value: ${r}`);if(r===0)return{name:t,description:n,length:a};const s=mv(a),o=pv(r);if(!o)throw new Error(`Failed to extract dimension type: ${r}`);const{type:c,size:l}=o;function u(f){switch(c){case"signed":return(0,Ht.parseBigInt)(e.getBigInt64(f,!0));case"unsigned":return(0,Ht.parseBigInt)((0,Ht.getBigUint64)(e,f,!0));case"float":return e.getFloat64(f,!0)}}const d={name:t,description:n,type:c,length:l};return s.hasNodata&&(d.nodata=u(40)),s.hasMin&&(d.min=u(64)),s.hasMax&&(d.max=u(88)),s.hasScale&&(d.scale=e.getFloat64(112)),s.hasOffset&&(d.offset=e.getFloat64(136)),d}function pv(i){switch(i){case 1:return Ht.Dimension.Type.uint8;case 2:return Ht.Dimension.Type.int8;case 3:return Ht.Dimension.Type.uint16;case 4:return Ht.Dimension.Type.int16;case 5:return Ht.Dimension.Type.uint32;case 6:return Ht.Dimension.Type.int32;case 7:return Ht.Dimension.Type.uint64;case 8:return Ht.Dimension.Type.int64;case 9:return Ht.Dimension.Type.float32;case 10:return Ht.Dimension.Type.float64}}function mv(i){return{hasNodata:!!(i&1),hasMin:!!(i>>1&1),hasMax:!!(i>>2&1),hasScale:!!(i>>3&1),hasOffset:!!(i>>4&1)}}Object.defineProperty(Ir,"__esModule",{value:!0});Ir.Dimensions=void 0;const gv=dn,_v=Ur;Ir.Dimensions={create:yv};const{Type:bt}=gv.Dimension,vv={X:bt.float64,Y:bt.float64,Z:bt.float64,Intensity:bt.uint16,ReturnNumber:bt.uint8,NumberOfReturns:bt.uint8,ScanDirectionFlag:bt.boolean,EdgeOfFlightLine:bt.boolean,Classification:bt.uint8,Synthetic:bt.boolean,KeyPoint:bt.boolean,Withheld:bt.boolean,Overlap:bt.boolean,ScanAngle:bt.float32,UserData:bt.uint8,PointSourceId:bt.uint16,GpsTime:bt.float64,Red:bt.uint16,Green:bt.uint16,Blue:bt.uint16,ScannerChannel:bt.uint8,Infrared:bt.uint16};function yv(i,e=[]){return Object.keys(i).reduce((t,n)=>{const r=vv[n];if(r)return{...t,[n]:r};const a=e.find(o=>o.name===n),s=a&&_v.ExtraBytes.getDimension(a);if(s)return{...t,[n]:s};throw new Error(`Failed to look up LAS type: ${n}`)},{})}var Nr={};Object.defineProperty(Nr,"__esModule",{value:!0});Nr.Extractor=void 0;const Pn=dn;Nr.Extractor={create:Ev};function xv(i){switch(i){case 0:return 20;case 1:return 28;case 2:return 26;case 3:return 34;case 6:return 30;case 7:return 36;case 8:return 38;default:throw new Error(`Unsupported point data record format: ${i}`)}}function Sv(i,e,{type:t,length:n}){const r=di(i);switch(t){case"signed":switch(n){case 1:return(a,s)=>a.getInt8(r(s)+e);case 2:return(a,s)=>a.getInt16(r(s)+e,!0);case 4:return(a,s)=>a.getInt32(r(s)+e,!0);case 8:return(a,s)=>(0,Pn.parseBigInt)(a.getBigInt64(r(s)+e,!0))}case"unsigned":switch(n){case 1:return(a,s)=>a.getUint8(r(s)+e);case 2:return(a,s)=>a.getUint16(r(s)+e,!0);case 4:return(a,s)=>a.getUint32(r(s)+e,!0);case 8:return(a,s)=>(0,Pn.parseBigInt)((0,Pn.getBigUint64)(a,r(s)+e,!0))}case"float":switch(n){case 4:return(a,s)=>a.getFloat32(r(s)+e,!0);case 8:return(a,s)=>a.getFloat64(r(s)+e,!0)}}}function Mv(i,e){let n=xv(i.pointDataRecordFormat);return e.reduce((r,a)=>{const s=n;n+=a.length;const o=Sv(i,s,a);if(!o)return r;const c=(l,u)=>Pn.Scale.unapply(o(l,u),a.scale,a.offset);return{...r,[a.name]:c}},{})}function Ev(i,e=[]){const t=Mv(i,e);return{...(()=>{const{pointDataRecordFormat:r}=i;switch(r){case 0:return ja(i);case 1:return bv(i);case 2:return Tv(i);case 3:return Av(i);case 6:return ql(i);case 7:return Kl(i);case 8:return wv(i);default:throw new Error(`Unsupported point data record format: ${r}`)}})(),...t}}function ja(i){const{scale:e,offset:t}=i,n=di(i);function r(o,c){return o.getUint8(n(c)+14)}function a(o,c){return o.getUint8(n(c)+15)}function s(o,c){return a(o,c)&31}return{X:(o,c)=>Pn.Scale.unapply(o.getInt32(n(c),!0),e[0],t[0]),Y:(o,c)=>Pn.Scale.unapply(o.getInt32(n(c)+4,!0),e[1],t[1]),Z:(o,c)=>Pn.Scale.unapply(o.getInt32(n(c)+8,!0),e[2],t[2]),Intensity:(o,c)=>o.getUint16(n(c)+12,!0),ReturnNumber:(o,c)=>r(o,c)&7,NumberOfReturns:(o,c)=>(r(o,c)&56)>>3,ScanDirectionFlag:(o,c)=>(r(o,c)&64)>>6,EdgeOfFlightLine:(o,c)=>(r(o,c)&128)>>7,Classification:(o,c)=>{const l=s(o,c);return l===12?0:l},Synthetic:(o,c)=>(a(o,c)&32)>>5,KeyPoint:(o,c)=>(a(o,c)&64)>>6,Withheld:(o,c)=>(a(o,c)&128)>>7,Overlap:(o,c)=>s(o,c)===12?1:0,ScanAngle:(o,c)=>o.getInt8(n(c)+16),UserData:(o,c)=>o.getUint8(n(c)+17),PointSourceId:(o,c)=>o.getUint16(n(c)+18,!0)}}function bv(i){const e=di(i);return{...ja(i),GpsTime:(t,n)=>t.getFloat64(e(n)+20,!0)}}function Tv(i){const e=di(i);return{...ja(i),Red:(t,n)=>t.getUint16(e(n)+20,!0),Green:(t,n)=>t.getUint16(e(n)+22,!0),Blue:(t,n)=>t.getUint16(e(n)+24,!0)}}function Av(i){const e=di(i);return{...ja(i),GpsTime:(t,n)=>t.getFloat64(e(n)+20,!0),Red:(t,n)=>t.getUint16(e(n)+28,!0),Green:(t,n)=>t.getUint16(e(n)+30,!0),Blue:(t,n)=>t.getUint16(e(n)+32,!0)}}function ql(i){const{scale:e,offset:t}=i,n=di(i);function r(a,s){return a.getUint8(n(s)+15)}return{X:(a,s)=>Pn.Scale.unapply(a.getInt32(n(s),!0),e[0],t[0]),Y:(a,s)=>Pn.Scale.unapply(a.getInt32(n(s)+4,!0),e[1],t[1]),Z:(a,s)=>Pn.Scale.unapply(a.getInt32(n(s)+8,!0),e[2],t[2]),Intensity:(a,s)=>a.getUint16(n(s)+12,!0),ReturnNumber:(a,s)=>a.getUint16(n(s)+14,!0)&15,NumberOfReturns:(a,s)=>(a.getUint16(n(s)+14,!0)&240)>>4,Synthetic:(a,s)=>r(a,s)&1,KeyPoint:(a,s)=>(r(a,s)&2)>>1,Withheld:(a,s)=>(r(a,s)&4)>>2,Overlap:(a,s)=>(r(a,s)&8)>>3,ScannerChannel:(a,s)=>(r(a,s)&48)>>4,ScanDirectionFlag:(a,s)=>(r(a,s)&64)>>6,EdgeOfFlightLine:(a,s)=>(r(a,s)&128)>>7,Classification:(a,s)=>a.getUint8(n(s)+16),UserData:(a,s)=>a.getUint8(n(s)+17),ScanAngle:(a,s)=>a.getInt16(n(s)+18,!0)*.006,PointSourceId:(a,s)=>a.getUint16(n(s)+20,!0),GpsTime:(a,s)=>a.getFloat64(n(s)+22,!0)}}function Kl(i){const e=di(i);return{...ql(i),Red:(t,n)=>t.getUint16(e(n)+30,!0),Green:(t,n)=>t.getUint16(e(n)+32,!0),Blue:(t,n)=>t.getUint16(e(n)+34,!0)}}function wv(i){const e=di(i);return{...Kl(i),Infrared:(t,n)=>t.getUint16(e(n)+36,!0)}}function di(i){const{pointDataRecordLength:e}=i;return function(n){return n*e}}var Fr={},sr={};Object.defineProperty(sr,"__esModule",{value:!0});sr.formatGuid=sr.parsePoint=void 0;const Zl=dn;function Cv(i){const e=Zl.Binary.toDataView(i);if(e.byteLength!==24)throw new Error(`Invalid tuple buffer length: ${e.byteLength}`);return[e.getFloat64(0,!0),e.getFloat64(8,!0),e.getFloat64(16,!0)]}sr.parsePoint=Cv;function Rv(i){const e=Zl.Binary.toDataView(i);if(e.byteLength!==16)throw new Error(`Invalid GUID buffer length: ${e.byteLength}`);let t="";for(let n=0;n<e.byteLength;n+=4){const r=e.getUint32(n,!0);t+=r.toString(16).padStart(8,"0")}return[t.slice(0,8),t.slice(8,12),t.slice(12,16),t.slice(16,32)].join("-")}sr.formatGuid=Rv;Object.defineProperty(Fr,"__esModule",{value:!0});Fr.Header=void 0;const qt=dn,el=Rn,Us=sr;Fr.Header={parse:Pv};function Pv(i){if(i.byteLength<el.minHeaderLength)throw new Error(`Invalid header: must be at least ${el.minHeaderLength} bytes`);const e=qt.Binary.toDataView(i),t=qt.Binary.toCString(i.slice(0,4));if(t!=="LASF")throw new Error(`Invalid file signature: ${t}`);const n=e.getUint8(24),r=e.getUint8(25);if(n!==1||r!==2&&r!==4)throw new Error(`Invalid version (only 1.2 and 1.4 supported): ${n}.${r}`);const a={fileSignature:t,fileSourceId:e.getUint16(4,!0),globalEncoding:e.getUint16(6,!0),projectId:(0,Us.formatGuid)(i.slice(8,24)),majorVersion:n,minorVersion:r,systemIdentifier:qt.Binary.toCString(i.slice(26,58)),generatingSoftware:qt.Binary.toCString(i.slice(58,90)),fileCreationDayOfYear:e.getUint16(90,!0),fileCreationYear:e.getUint16(92,!0),headerLength:e.getUint16(94,!0),pointDataOffset:e.getUint32(96,!0),vlrCount:e.getUint32(100,!0),pointDataRecordFormat:e.getUint8(104)&15,pointDataRecordLength:e.getUint16(105,!0),pointCount:e.getUint32(107,!0),pointCountByReturn:Dv(i.slice(111,131)),scale:(0,Us.parsePoint)(i.slice(131,155)),offset:(0,Us.parsePoint)(i.slice(155,179)),min:[e.getFloat64(187,!0),e.getFloat64(203,!0),e.getFloat64(219,!0)],max:[e.getFloat64(179,!0),e.getFloat64(195,!0),e.getFloat64(211,!0)],waveformDataOffset:0,evlrOffset:0,evlrCount:0};return r==2?a:{...a,pointCount:(0,qt.parseBigInt)((0,qt.getBigUint64)(e,247,!0)),pointCountByReturn:Lv(i.slice(255,375)),waveformDataOffset:(0,qt.parseBigInt)((0,qt.getBigUint64)(e,227,!0)),evlrOffset:(0,qt.parseBigInt)((0,qt.getBigUint64)(e,235,!0)),evlrCount:e.getUint32(243,!0)}}function Lv(i){const e=qt.Binary.toDataView(i),t=[];for(let n=0;n<15*8;n+=8)t.push((0,qt.getBigUint64)(e,n,!0));return t.map(n=>(0,qt.parseBigInt)(n))}function Dv(i){const e=qt.Binary.toDataView(i),t=[];for(let n=0;n<5*4;n+=4)t.push(e.getUint32(n,!0));return t}var si={},oi={},Jl={exports:{}};(function(i,e){var t=(()=>{var n=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(r){r=r||{};var a=typeof r<"u"?r:{},s,o;a.ready=new Promise(function(g,_){s=g,o=_}),["_main","___getTypeName","__embind_initialize_bindings","_fflush","onRuntimeInitialized"].forEach(g=>{Object.getOwnPropertyDescriptor(a.ready,g)||Object.defineProperty(a.ready,g,{get:()=>Me("You are getting "+g+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>Me("You are setting "+g+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var c=Object.assign({},a),l="./this.program",u=!0;if(a.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var d="";function f(g){return a.locateFile?a.locateFile(g,d):d+g}var m;if(typeof document<"u"&&document.currentScript&&(d=document.currentScript.src),n&&(d=n),d.indexOf("blob:")!==0?d=d.substr(0,d.replace(/[?#].*/,"").lastIndexOf("/")+1):d="",!(typeof window=="object"||typeof importScripts=="function"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var v=a.print||console.log.bind(console),x=a.printErr||console.warn.bind(console);Object.assign(a,c),c=null,cd(),a.arguments&&a.arguments,p("arguments","arguments_"),a.thisProgram&&(l=a.thisProgram),p("thisProgram","thisProgram"),a.quit&&a.quit,p("quit","quit_"),I(typeof a.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),I(typeof a.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),I(typeof a.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),I(typeof a.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),I(typeof a.read>"u","Module.read option was removed (modify read_ in JS)"),I(typeof a.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),I(typeof a.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),I(typeof a.setWindowTitle>"u","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),I(typeof a.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),p("read","read_"),p("readAsync","readAsync"),p("readBinary","readBinary"),p("setWindowTitle","setWindowTitle"),I(!0,"worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable."),I(!0,"node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable."),I(!0,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");function p(g,_){Object.getOwnPropertyDescriptor(a,g)||Object.defineProperty(a,g,{configurable:!0,get:function(){Me("Module."+g+" has been replaced with plain "+_+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function h(g){Object.getOwnPropertyDescriptor(a,g)&&Me("`Module."+g+"` was supplied but `"+g+"` not included in INCOMING_MODULE_JS_API")}function L(g){return g==="FS_createPath"||g==="FS_createDataFile"||g==="FS_createPreloadedFile"||g==="FS_unlink"||g==="addRunDependency"||g==="FS_createLazyFile"||g==="FS_createDevice"||g==="removeRunDependency"}function A(g){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,g)&&Object.defineProperty(globalThis,g,{configurable:!0,get:function(){var _="`"+g+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";L(g)&&(_+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ct(_)}})}function w(g){Object.getOwnPropertyDescriptor(a,g)||Object.defineProperty(a,g,{configurable:!0,get:function(){var _="'"+g+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";L(g)&&(_+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Me(_)}})}var O;a.wasmBinary&&(O=a.wasmBinary),p("wasmBinary","wasmBinary"),a.noExitRuntime,p("noExitRuntime","noExitRuntime"),typeof WebAssembly!="object"&&Me("no native wasm support detected");var D,P=!1;function I(g,_){g||Me("Assertion failed"+(_?": "+_:""))}var b=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function E(g,_,T){for(var B=_+T,Z=_;g[Z]&&!(Z>=B);)++Z;if(Z-_>16&&g.buffer&&b)return b.decode(g.subarray(_,Z));for(var ne="";_<Z;){var oe=g[_++];if(!(oe&128)){ne+=String.fromCharCode(oe);continue}var ee=g[_++]&63;if((oe&224)==192){ne+=String.fromCharCode((oe&31)<<6|ee);continue}var ie=g[_++]&63;if((oe&240)==224?oe=(oe&15)<<12|ee<<6|ie:((oe&248)!=240&&ct("Invalid UTF-8 leading byte 0x"+oe.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),oe=(oe&7)<<18|ee<<12|ie<<6|g[_++]&63),oe<65536)ne+=String.fromCharCode(oe);else{var Te=oe-65536;ne+=String.fromCharCode(55296|Te>>10,56320|Te&1023)}}return ne}function N(g,_){return g?E(K,g,_):""}function Q(g,_,T,B){if(!(B>0))return 0;for(var Z=T,ne=T+B-1,oe=0;oe<g.length;++oe){var ee=g.charCodeAt(oe);if(ee>=55296&&ee<=57343){var ie=g.charCodeAt(++oe);ee=65536+((ee&1023)<<10)|ie&1023}if(ee<=127){if(T>=ne)break;_[T++]=ee}else if(ee<=2047){if(T+1>=ne)break;_[T++]=192|ee>>6,_[T++]=128|ee&63}else if(ee<=65535){if(T+2>=ne)break;_[T++]=224|ee>>12,_[T++]=128|ee>>6&63,_[T++]=128|ee&63}else{if(T+3>=ne)break;ee>1114111&&ct("Invalid Unicode code point 0x"+ee.toString(16)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),_[T++]=240|ee>>18,_[T++]=128|ee>>12&63,_[T++]=128|ee>>6&63,_[T++]=128|ee&63}}return _[T]=0,T-Z}function q(g,_,T){return I(typeof T=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Q(g,K,_,T)}function R(g){for(var _=0,T=0;T<g.length;++T){var B=g.charCodeAt(T);B<=127?_++:B<=2047?_+=2:B>=55296&&B<=57343?(_+=4,++T):_+=3}return _}var F,H,K,Y,re,le,ue,je,nt;function te(g){F=g,a.HEAP8=H=new Int8Array(g),a.HEAP16=Y=new Int16Array(g),a.HEAP32=le=new Int32Array(g),a.HEAPU8=K=new Uint8Array(g),a.HEAPU16=re=new Uint16Array(g),a.HEAPU32=ue=new Uint32Array(g),a.HEAPF32=je=new Float32Array(g),a.HEAPF64=nt=new Float64Array(g)}var fe=65536;a.TOTAL_STACK&&I(fe===a.TOTAL_STACK,"the stack size can no longer be determined at runtime");var Ee=a.INITIAL_MEMORY||262144;p("INITIAL_MEMORY","INITIAL_MEMORY"),I(Ee>=fe,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+Ee+"! (TOTAL_STACK="+fe+")"),I(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),I(!a.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),I(Ee==262144,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");var xe;function We(){var g=as();I((g&3)==0),ue[g>>2]=34821223,ue[g+4>>2]=2310721022,ue[0]=1668509029}function Xe(){if(!P){var g=as(),_=ue[g>>2],T=ue[g+4>>2];(_!=34821223||T!=2310721022)&&Me("Stack overflow! Stack cookie has been overwritten at 0x"+g.toString(16)+", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+T.toString(16)+" 0x"+_.toString(16)),ue[0]!==1668509029&&Me("Runtime error: The application has corrupted its heap memory area (address zero)!")}}(function(){var g=new Int16Array(1),_=new Int8Array(g.buffer);if(g[0]=25459,_[0]!==115||_[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();var qe=[],ft=[],U=[],ht=!1;function it(){if(a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)_t(a.preRun.shift());Fe(qe)}function at(){I(!ht),ht=!0,Xe(),Fe(ft)}function Re(){if(Xe(),a.postRun)for(typeof a.postRun=="function"&&(a.postRun=[a.postRun]);a.postRun.length;)Ve(a.postRun.shift());Fe(U)}function _t(g){qe.unshift(g)}function ke(g){ft.unshift(g)}function Ve(g){U.unshift(g)}I(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),I(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),I(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),I(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var C=0,S=null,j=null,ae={};function de(g){C++,a.monitorRunDependencies&&a.monitorRunDependencies(C),I(!ae[g]),ae[g]=1,S===null&&typeof setInterval<"u"&&(S=setInterval(function(){if(P){clearInterval(S),S=null;return}var _=!1;for(var T in ae)_||(_=!0,x("still waiting on run dependencies:")),x("dependency: "+T);_&&x("(end of list)")},1e4))}function se(g){if(C--,a.monitorRunDependencies&&a.monitorRunDependencies(C),I(ae[g]),delete ae[g],C==0&&(S!==null&&(clearInterval(S),S=null),j)){var _=j;j=null,_()}}function Me(g){a.onAbort&&a.onAbort(g),g="Aborted("+g+")",x(g),P=!0;var _=new WebAssembly.RuntimeError(g);throw o(_),_}var pe={error:function(){Me("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init:function(){pe.error()},createDataFile:function(){pe.error()},createPreloadedFile:function(){pe.error()},createLazyFile:function(){pe.error()},open:function(){pe.error()},mkdev:function(){pe.error()},registerDevice:function(){pe.error()},analyzePath:function(){pe.error()},loadFilesFromDB:function(){pe.error()},ErrnoError:function(){pe.error()}};a.FS_createDataFile=pe.createDataFile,a.FS_createPreloadedFile=pe.createPreloadedFile;var Se="data:application/octet-stream;base64,";function Ge(g){return g.startsWith(Se)}function me(g){return g.startsWith("file://")}function ge(g,_){return function(){var T=g,B=_;return B=a.asm,I(ht,"native function `"+T+"` called before runtime initialization"),B[g]||I(B[g],"exported native function `"+T+"` not found"),B[g].apply(null,arguments)}}var Ie;Ie="laz-perf.wasm",Ge(Ie)||(Ie=f(Ie));function Ue(g){try{if(g==Ie&&O)return new Uint8Array(O);throw"both async and sync fetching of the wasm failed"}catch(_){Me(_)}}function be(){return!O&&u&&typeof fetch=="function"?fetch(Ie,{credentials:"same-origin"}).then(function(g){if(!g.ok)throw"failed to load wasm binary file at '"+Ie+"'";return g.arrayBuffer()}).catch(function(){return Ue(Ie)}):Promise.resolve().then(function(){return Ue(Ie)})}function Be(){var g={env:ko,wasi_snapshot_preview1:ko};function _(ee,ie){var Te=ee.exports;a.asm=Te,D=a.asm.memory,I(D,"memory not found in wasm exports"),te(D.buffer),xe=a.asm.__indirect_function_table,I(xe,"table not found in wasm exports"),ke(a.asm.__wasm_call_ctors),se("wasm-instantiate")}de("wasm-instantiate");var T=a;function B(ee){I(a===T,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),T=null,_(ee.instance)}function Z(ee){return be().then(function(ie){return WebAssembly.instantiate(ie,g)}).then(function(ie){return ie}).then(ee,function(ie){x("failed to asynchronously prepare wasm: "+ie),me(Ie)&&x("warning: Loading from a file URI ("+Ie+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),Me(ie)})}function ne(){return!O&&typeof WebAssembly.instantiateStreaming=="function"&&!Ge(Ie)&&typeof fetch=="function"?fetch(Ie,{credentials:"same-origin"}).then(function(ee){var ie=WebAssembly.instantiateStreaming(ee,g);return ie.then(B,function(Te){return x("wasm streaming compile failed: "+Te),x("falling back to ArrayBuffer instantiation"),Z(B)})}):Z(B)}if(a.instantiateWasm)try{var oe=a.instantiateWasm(g,_);return oe}catch(ee){return x("Module.instantiateWasm callback failed with error: "+ee),!1}return ne().catch(o),{}}function Fe(g){for(;g.length>0;)g.shift()(a)}function ct(g){ct.shown||(ct.shown={}),ct.shown[g]||(ct.shown[g]=1,x(g))}function y(g,_){I(g.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),H.set(g,_)}function G(g){return rs(g+24)+24}function W(g){this.excPtr=g,this.ptr=g-24,this.set_type=function(_){ue[this.ptr+4>>2]=_},this.get_type=function(){return ue[this.ptr+4>>2]},this.set_destructor=function(_){ue[this.ptr+8>>2]=_},this.get_destructor=function(){return ue[this.ptr+8>>2]},this.set_refcount=function(_){le[this.ptr>>2]=_},this.set_caught=function(_){_=_?1:0,H[this.ptr+12>>0]=_},this.get_caught=function(){return H[this.ptr+12>>0]!=0},this.set_rethrown=function(_){_=_?1:0,H[this.ptr+13>>0]=_},this.get_rethrown=function(){return H[this.ptr+13>>0]!=0},this.init=function(_,T){this.set_adjusted_ptr(0),this.set_type(_),this.set_destructor(T),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var _=le[this.ptr>>2];le[this.ptr>>2]=_+1},this.release_ref=function(){var _=le[this.ptr>>2];return le[this.ptr>>2]=_-1,I(_>0),_===1},this.set_adjusted_ptr=function(_){ue[this.ptr+16>>2]=_},this.get_adjusted_ptr=function(){return ue[this.ptr+16>>2]},this.get_exception_ptr=function(){var _=ud(this.get_type());if(_)return ue[this.excPtr>>2];var T=this.get_adjusted_ptr();return T!==0?T:this.excPtr}}function J(g,_,T){var B=new W(g);throw B.init(_,T),g+" - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch."}function ce(g,_,T,B,Z){}function Ce(g){switch(g){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+g)}}function ze(){for(var g=new Array(256),_=0;_<256;++_)g[_]=String.fromCharCode(_);vt=g}var vt=void 0;function lt(g){for(var _="",T=g;K[T];)_+=vt[K[T++]];return _}var Ze={},pt={},mt={},xn=48,wt=57;function Jt(g){if(g===void 0)return"_unknown";g=g.replace(/[^a-zA-Z0-9_]/g,"$");var _=g.charCodeAt(0);return _>=xn&&_<=wt?"_"+g:g}function fn(g,_){return g=Jt(g),new Function("body","return function "+g+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(_)}function Dn(g,_){var T=fn(_,function(B){this.name=_,this.message=B;var Z=new Error(B).stack;Z!==void 0&&(this.stack=this.toString()+`
`+Z.replace(/^Error(:[^\n]*)?\n/,""))});return T.prototype=Object.create(g.prototype),T.prototype.constructor=T,T.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},T}var hn=void 0;function rt(g){throw new hn(g)}var fi=void 0;function hi(g){throw new fi(g)}function Xn(g,_,T){g.forEach(function(ee){mt[ee]=_});function B(ee){var ie=T(ee);ie.length!==g.length&&hi("Mismatched type converter count");for(var Te=0;Te<g.length;++Te)pn(g[Te],ie[Te])}var Z=new Array(_.length),ne=[],oe=0;_.forEach((ee,ie)=>{pt.hasOwnProperty(ee)?Z[ie]=pt[ee]:(ne.push(ee),Ze.hasOwnProperty(ee)||(Ze[ee]=[]),Ze[ee].push(()=>{Z[ie]=pt[ee],++oe,oe===ne.length&&B(Z)}))}),ne.length===0&&B(Z)}function pn(g,_,T={}){if(!("argPackAdvance"in _))throw new TypeError("registerType registeredInstance requires argPackAdvance");var B=_.name;if(g||rt('type "'+B+'" must have a positive integer typeid pointer'),pt.hasOwnProperty(g)){if(T.ignoreDuplicateRegistrations)return;rt("Cannot register type '"+B+"' twice")}if(pt[g]=_,delete mt[g],Ze.hasOwnProperty(g)){var Z=Ze[g];delete Ze[g],Z.forEach(ne=>ne())}}function Ka(g,_,T,B,Z){var ne=Ce(T);_=lt(_),pn(g,{name:_,fromWireType:function(oe){return!!oe},toWireType:function(oe,ee){return ee?B:Z},argPackAdvance:8,readValueFromPointer:function(oe){var ee;if(T===1)ee=H;else if(T===2)ee=Y;else if(T===4)ee=le;else throw new TypeError("Unknown boolean type size: "+_);return this.fromWireType(ee[oe>>ne])},destructorFunction:null})}function Za(g){if(!(this instanceof an)||!(g instanceof an))return!1;for(var _=this.$$.ptrType.registeredClass,T=this.$$.ptr,B=g.$$.ptrType.registeredClass,Z=g.$$.ptr;_.baseClass;)T=_.upcast(T),_=_.baseClass;for(;B.baseClass;)Z=B.upcast(Z),B=B.baseClass;return _===B&&T===Z}function M(g){return{count:g.count,deleteScheduled:g.deleteScheduled,preservePointerOnDelete:g.preservePointerOnDelete,ptr:g.ptr,ptrType:g.ptrType,smartPtr:g.smartPtr,smartPtrType:g.smartPtrType}}function z(g){function _(T){return T.$$.ptrType.registeredClass.name}rt(_(g)+" instance already deleted")}var X=!1;function $(g){}function k(g){g.smartPtr?g.smartPtrType.rawDestructor(g.smartPtr):g.ptrType.registeredClass.rawDestructor(g.ptr)}function _e(g){g.count.value-=1;var _=g.count.value===0;_&&k(g)}function ye(g,_,T){if(_===T)return g;if(T.baseClass===void 0)return null;var B=ye(g,_,T.baseClass);return B===null?null:T.downcast(B)}var Ae={};function we(){return Object.keys(Ct).length}function Oe(){var g=[];for(var _ in Ct)Ct.hasOwnProperty(_)&&g.push(Ct[_]);return g}var De=[];function Le(){for(;De.length;){var g=De.pop();g.$$.deleteScheduled=!1,g.delete()}}var tt=void 0;function yt(g){tt=g,De.length&&tt&&tt(Le)}function xt(){a.getInheritedInstanceCount=we,a.getLiveInheritedInstances=Oe,a.flushPendingDeletes=Le,a.setDelayFunction=yt}var Ct={};function ut(g,_){for(_===void 0&&rt("ptr should not be undefined");g.baseClass;)_=g.upcast(_),g=g.baseClass;return _}function Pe(g,_){return _=ut(g,_),Ct[_]}function Mt(g,_){(!_.ptrType||!_.ptr)&&hi("makeClassHandle requires ptr and ptrType");var T=!!_.smartPtrType,B=!!_.smartPtr;return T!==B&&hi("Both smartPtrType and smartPtr must be specified"),_.count={value:1},Ut(Object.create(g,{$$:{value:_}}))}function st(g){var _=this.getPointee(g);if(!_)return this.destructor(g),null;var T=Pe(this.registeredClass,_);if(T!==void 0){if(T.$$.count.value===0)return T.$$.ptr=_,T.$$.smartPtr=g,T.clone();var B=T.clone();return this.destructor(g),B}function Z(){return this.isSmartPointer?Mt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:_,smartPtrType:this,smartPtr:g}):Mt(this.registeredClass.instancePrototype,{ptrType:this,ptr:g})}var ne=this.registeredClass.getActualType(_),oe=Ae[ne];if(!oe)return Z.call(this);var ee;this.isConst?ee=oe.constPointerType:ee=oe.pointerType;var ie=ye(_,this.registeredClass,ee.registeredClass);return ie===null?Z.call(this):this.isSmartPointer?Mt(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:ie,smartPtrType:this,smartPtr:g}):Mt(ee.registeredClass.instancePrototype,{ptrType:ee,ptr:ie})}function Ut(g){return typeof FinalizationRegistry>"u"?(Ut=_=>_,g):(X=new FinalizationRegistry(_=>{console.warn(_.leakWarning.stack.replace(/^Error: /,"")),_e(_.$$)}),Ut=_=>{var T=_.$$,B=!!T.smartPtr;if(B){var Z={$$:T},ne=T.ptrType.registeredClass;Z.leakWarning=new Error("Embind found a leaked C++ instance "+ne.name+" <0x"+T.ptr.toString(16)+`>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`),"captureStackTrace"in Error&&Error.captureStackTrace(Z.leakWarning,st),X.register(_,Z,_)}return _},$=_=>X.unregister(_),Ut(g))}function Yn(){if(this.$$.ptr||z(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var g=Ut(Object.create(Object.getPrototypeOf(this),{$$:{value:M(this.$$)}}));return g.$$.count.value+=1,g.$$.deleteScheduled=!1,g}function Vt(){this.$$.ptr||z(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&rt("Object already scheduled for deletion"),$(this),_e(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function fr(){return!this.$$.ptr}function Et(){return this.$$.ptr||z(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&rt("Object already scheduled for deletion"),De.push(this),De.length===1&&tt&&tt(Le),this.$$.deleteScheduled=!0,this}function Sn(){an.prototype.isAliasOf=Za,an.prototype.clone=Yn,an.prototype.delete=Vt,an.prototype.isDeleted=fr,an.prototype.deleteLater=Et}function an(){}function Gt(g,_,T){if(g[_].overloadTable===void 0){var B=g[_];g[_]=function(){return g[_].overloadTable.hasOwnProperty(arguments.length)||rt("Function '"+T+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+g[_].overloadTable+")!"),g[_].overloadTable[arguments.length].apply(this,arguments)},g[_].overloadTable=[],g[_].overloadTable[B.argCount]=B}}function hr(g,_,T){a.hasOwnProperty(g)?(rt("Cannot register public name '"+g+"' twice"),Gt(a,g,g),a.hasOwnProperty(T)&&rt("Cannot register multiple overloads of a function with the same number of arguments ("+T+")!"),a[g].overloadTable[T]=_):a[g]=_}function Ja(g,_,T,B,Z,ne,oe,ee){this.name=g,this.constructor=_,this.instancePrototype=T,this.rawDestructor=B,this.baseClass=Z,this.getActualType=ne,this.upcast=oe,this.downcast=ee,this.pureVirtualFunctions=[]}function Ri(g,_,T){for(;_!==T;)_.upcast||rt("Expected null or instance of "+T.name+", got an instance of "+_.name),g=_.upcast(g),_=_.baseClass;return g}function ou(g,_){if(_===null)return this.isReference&&rt("null is not a valid "+this.name),0;_.$$||rt('Cannot pass "'+Li(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name);var T=_.$$.ptrType.registeredClass,B=Ri(_.$$.ptr,T,this.registeredClass);return B}function cu(g,_){var T;if(_===null)return this.isReference&&rt("null is not a valid "+this.name),this.isSmartPointer?(T=this.rawConstructor(),g!==null&&g.push(this.rawDestructor,T),T):0;_.$$||rt('Cannot pass "'+Li(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&_.$$.ptrType.isConst&&rt("Cannot convert argument of type "+(_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name)+" to parameter type "+this.name);var B=_.$$.ptrType.registeredClass;if(T=Ri(_.$$.ptr,B,this.registeredClass),this.isSmartPointer)switch(_.$$.smartPtr===void 0&&rt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:_.$$.smartPtrType===this?T=_.$$.smartPtr:rt("Cannot convert argument of type "+(_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:T=_.$$.smartPtr;break;case 2:if(_.$$.smartPtrType===this)T=_.$$.smartPtr;else{var Z=_.clone();T=this.rawShare(T,ns.toHandle(function(){Z.delete()})),g!==null&&g.push(this.rawDestructor,T)}break;default:rt("Unsupporting sharing policy")}return T}function lu(g,_){if(_===null)return this.isReference&&rt("null is not a valid "+this.name),0;_.$$||rt('Cannot pass "'+Li(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name),_.$$.ptrType.isConst&&rt("Cannot convert argument of type "+_.$$.ptrType.name+" to parameter type "+this.name);var T=_.$$.ptrType.registeredClass,B=Ri(_.$$.ptr,T,this.registeredClass);return B}function zr(g){return this.fromWireType(le[g>>2])}function uu(g){return this.rawGetPointee&&(g=this.rawGetPointee(g)),g}function du(g){this.rawDestructor&&this.rawDestructor(g)}function fu(g){g!==null&&g.delete()}function hu(){In.prototype.getPointee=uu,In.prototype.destructor=du,In.prototype.argPackAdvance=8,In.prototype.readValueFromPointer=zr,In.prototype.deleteObject=fu,In.prototype.fromWireType=st}function In(g,_,T,B,Z,ne,oe,ee,ie,Te,et){this.name=g,this.registeredClass=_,this.isReference=T,this.isConst=B,this.isSmartPointer=Z,this.pointeeType=ne,this.sharingPolicy=oe,this.rawGetPointee=ee,this.rawConstructor=ie,this.rawShare=Te,this.rawDestructor=et,!Z&&_.baseClass===void 0?B?(this.toWireType=ou,this.destructorFunction=null):(this.toWireType=lu,this.destructorFunction=null):this.toWireType=cu}function pu(g,_,T){a.hasOwnProperty(g)||hi("Replacing nonexistant public symbol"),a[g].overloadTable!==void 0&&T!==void 0||(a[g]=_,a[g].argCount=T)}function mu(g,_,T){I("dynCall_"+g in a,"bad function pointer type - no table for sig '"+g+"'"),T&&T.length?I(T.length===g.substring(1).replace(/j/g,"--").length):I(g.length==1);var B=a["dynCall_"+g];return T&&T.length?B.apply(null,[_].concat(T)):B.call(null,_)}var Hr=[];function Qa(g){var _=Hr[g];return _||(g>=Hr.length&&(Hr.length=g+1),Hr[g]=_=xe.get(g)),I(xe.get(g)==_,"JavaScript-side Wasm function table mirror is out of date!"),_}function gu(g,_,T){if(g.includes("j"))return mu(g,_,T);I(Qa(_),"missing table entry in dynCall: "+_);var B=Qa(_).apply(null,T);return B}function _u(g,_){I(g.includes("j")||g.includes("p"),"getDynCaller should only be called with i64 sigs");var T=[];return function(){return T.length=0,Object.assign(T,arguments),gu(g,_,T)}}function Pi(g,_){g=lt(g);function T(){return g.includes("j")?_u(g,_):Qa(_)}var B=T();return typeof B!="function"&&rt("unknown function pointer with signature "+g+": "+_),B}var No=void 0;function vu(g){var _=ld(g),T=lt(_);return jn(_),T}function es(g,_){var T=[],B={};function Z(ne){if(!B[ne]&&!pt[ne]){if(mt[ne]){mt[ne].forEach(Z);return}T.push(ne),B[ne]=!0}}throw _.forEach(Z),new No(g+": "+T.map(vu).join([", "]))}function yu(g,_,T,B,Z,ne,oe,ee,ie,Te,et,$e,He){et=lt(et),ne=Pi(Z,ne),ee&&(ee=Pi(oe,ee)),Te&&(Te=Pi(ie,Te)),He=Pi($e,He);var Rt=Jt(et);hr(Rt,function(){es("Cannot construct "+et+" due to unbound types",[B])}),Xn([g,_,T],B?[B]:[],function(Nt){Nt=Nt[0];var Ot,Qt;B?(Ot=Nt.registeredClass,Qt=Ot.instancePrototype):Qt=an.prototype;var En=fn(Rt,function(){if(Object.getPrototypeOf(this)!==he)throw new hn("Use 'new' to construct "+et);if(Ne.constructor_body===void 0)throw new hn(et+" has no accessible constructor");var Gr=Ne.constructor_body[arguments.length];if(Gr===void 0)throw new hn("Tried to invoke ctor of "+et+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Ne.constructor_body).toString()+") parameters instead!");return Gr.apply(this,arguments)}),he=Object.create(Qt,{constructor:{value:En}});En.prototype=he;var Ne=new Ja(et,En,he,He,Ot,ne,ee,Te),$t=new In(et,Ne,!0,!1,!1),Ft=new In(et+"*",Ne,!1,!1,!1),pi=new In(et+" const*",Ne,!1,!0,!1);return Ae[g]={pointerType:Ft,constPointerType:pi},pu(Rt,En),[$t,Ft,pi]})}function Fo(g,_){for(var T=[],B=0;B<g;B++)T.push(ue[_+B*4>>2]);return T}function xu(g){for(;g.length;){var _=g.pop(),T=g.pop();T(_)}}function Su(g,_){if(!(g instanceof Function))throw new TypeError("new_ called with constructor type "+typeof g+" which is not a function");var T=fn(g.name||"unknownFunctionName",function(){});T.prototype=g.prototype;var B=new T,Z=g.apply(B,_);return Z instanceof Object?Z:B}function Oo(g,_,T,B,Z){var ne=_.length;ne<2&&rt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var oe=_[1]!==null&&T!==null,ee=!1,ie=1;ie<_.length;++ie)if(_[ie]!==null&&_[ie].destructorFunction===void 0){ee=!0;break}for(var Te=_[0].name!=="void",et="",$e="",ie=0;ie<ne-2;++ie)et+=(ie!==0?", ":"")+"arg"+ie,$e+=(ie!==0?", ":"")+"arg"+ie+"Wired";var He="return function "+Jt(g)+"("+et+`) {
if (arguments.length !== `+(ne-2)+`) {
throwBindingError('function `+g+" called with ' + arguments.length + ' arguments, expected "+(ne-2)+` args!');
}
`;ee&&(He+=`var destructors = [];
`);var Rt=ee?"destructors":"null",Nt=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Ot=[rt,B,Z,xu,_[0],_[1]];oe&&(He+="var thisWired = classParam.toWireType("+Rt+`, this);
`);for(var ie=0;ie<ne-2;++ie)He+="var arg"+ie+"Wired = argType"+ie+".toWireType("+Rt+", arg"+ie+"); // "+_[ie+2].name+`
`,Nt.push("argType"+ie),Ot.push(_[ie+2]);if(oe&&($e="thisWired"+($e.length>0?", ":"")+$e),He+=(Te?"var rv = ":"")+"invoker(fn"+($e.length>0?", ":"")+$e+`);
`,ee)He+=`runDestructors(destructors);
`;else for(var ie=oe?1:2;ie<_.length;++ie){var Qt=ie===1?"thisWired":"arg"+(ie-2)+"Wired";_[ie].destructorFunction!==null&&(He+=Qt+"_dtor("+Qt+"); // "+_[ie].name+`
`,Nt.push(Qt+"_dtor"),Ot.push(_[ie].destructorFunction))}Te&&(He+=`var ret = retType.fromWireType(rv);
return ret;
`),He+=`}
`,Nt.push(He);var En=Su(Function,Nt).apply(null,Ot);return En}function Mu(g,_,T,B,Z,ne){I(_>0);var oe=Fo(_,T);Z=Pi(B,Z),Xn([],[g],function(ee){ee=ee[0];var ie="constructor "+ee.name;if(ee.registeredClass.constructor_body===void 0&&(ee.registeredClass.constructor_body=[]),ee.registeredClass.constructor_body[_-1]!==void 0)throw new hn("Cannot register multiple constructors with identical number of parameters ("+(_-1)+") for class '"+ee.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return ee.registeredClass.constructor_body[_-1]=()=>{es("Cannot construct "+ee.name+" due to unbound types",oe)},Xn([],oe,function(Te){return Te.splice(1,0,null),ee.registeredClass.constructor_body[_-1]=Oo(ie,Te,null,Z,ne),[]}),[]})}function Eu(g,_,T,B,Z,ne,oe,ee){var ie=Fo(T,B);_=lt(_),ne=Pi(Z,ne),Xn([],[g],function(Te){Te=Te[0];var et=Te.name+"."+_;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),ee&&Te.registeredClass.pureVirtualFunctions.push(_);function $e(){es("Cannot call "+et+" due to unbound types",ie)}var He=Te.registeredClass.instancePrototype,Rt=He[_];return Rt===void 0||Rt.overloadTable===void 0&&Rt.className!==Te.name&&Rt.argCount===T-2?($e.argCount=T-2,$e.className=Te.name,He[_]=$e):(Gt(He,_,et),He[_].overloadTable[T-2]=$e),Xn([],ie,function(Nt){var Ot=Oo(et,Nt,Te,ne,oe);return He[_].overloadTable===void 0?(Ot.argCount=T-2,He[_]=Ot):He[_].overloadTable[T-2]=Ot,[]}),[]})}var ts=[],Mn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function bu(g){g>4&&--Mn[g].refcount===0&&(Mn[g]=void 0,ts.push(g))}function Tu(){for(var g=0,_=5;_<Mn.length;++_)Mn[_]!==void 0&&++g;return g}function Au(){for(var g=5;g<Mn.length;++g)if(Mn[g]!==void 0)return Mn[g];return null}function wu(){a.count_emval_handles=Tu,a.get_first_emval=Au}var ns={toValue:g=>(g||rt("Cannot use deleted val. handle = "+g),Mn[g].value),toHandle:g=>{switch(g){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var _=ts.length?ts.pop():Mn.length;return Mn[_]={refcount:1,value:g},_}}}};function Cu(g,_){_=lt(_),pn(g,{name:_,fromWireType:function(T){var B=ns.toValue(T);return bu(T),B},toWireType:function(T,B){return ns.toHandle(B)},argPackAdvance:8,readValueFromPointer:zr,destructorFunction:null})}function Li(g){if(g===null)return"null";var _=typeof g;return _==="object"||_==="array"||_==="function"?g.toString():""+g}function Ru(g,_){switch(_){case 2:return function(T){return this.fromWireType(je[T>>2])};case 3:return function(T){return this.fromWireType(nt[T>>3])};default:throw new TypeError("Unknown float type: "+g)}}function Pu(g,_,T){var B=Ce(T);_=lt(_),pn(g,{name:_,fromWireType:function(Z){return Z},toWireType:function(Z,ne){if(typeof ne!="number"&&typeof ne!="boolean")throw new TypeError('Cannot convert "'+Li(ne)+'" to '+this.name);return ne},argPackAdvance:8,readValueFromPointer:Ru(_,B),destructorFunction:null})}function Lu(g,_,T){switch(_){case 0:return T?function(Z){return H[Z]}:function(Z){return K[Z]};case 1:return T?function(Z){return Y[Z>>1]}:function(Z){return re[Z>>1]};case 2:return T?function(Z){return le[Z>>2]}:function(Z){return ue[Z>>2]};default:throw new TypeError("Unknown integer type: "+g)}}function Du(g,_,T,B,Z){_=lt(_),Z===-1&&(Z=4294967295);var ne=Ce(T),oe=$e=>$e;if(B===0){var ee=32-8*T;oe=$e=>$e<<ee>>>ee}var ie=_.includes("unsigned"),Te=($e,He)=>{if(typeof $e!="number"&&typeof $e!="boolean")throw new TypeError('Cannot convert "'+Li($e)+'" to '+He);if($e<B||$e>Z)throw new TypeError('Passing a number "'+Li($e)+'" from JS side to C/C++ side to an argument of type "'+_+'", which is outside the valid range ['+B+", "+Z+"]!")},et;ie?et=function($e,He){return Te(He,this.name),He>>>0}:et=function($e,He){return Te(He,this.name),He},pn(g,{name:_,fromWireType:oe,toWireType:et,argPackAdvance:8,readValueFromPointer:Lu(_,ne,B!==0),destructorFunction:null})}function Iu(g,_,T){var B=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Z=B[_];function ne(oe){oe=oe>>2;var ee=ue,ie=ee[oe],Te=ee[oe+1];return new Z(F,Te,ie)}T=lt(T),pn(g,{name:T,fromWireType:ne,argPackAdvance:8,readValueFromPointer:ne},{ignoreDuplicateRegistrations:!0})}function Uu(g,_){_=lt(_);var T=_==="std::string";pn(g,{name:_,fromWireType:function(B){var Z=ue[B>>2],ne=B+4,oe;if(T)for(var ee=ne,ie=0;ie<=Z;++ie){var Te=ne+ie;if(ie==Z||K[Te]==0){var et=Te-ee,$e=N(ee,et);oe===void 0?oe=$e:(oe+="\0",oe+=$e),ee=Te+1}}else{for(var He=new Array(Z),ie=0;ie<Z;++ie)He[ie]=String.fromCharCode(K[ne+ie]);oe=He.join("")}return jn(B),oe},toWireType:function(B,Z){Z instanceof ArrayBuffer&&(Z=new Uint8Array(Z));var ne,oe=typeof Z=="string";oe||Z instanceof Uint8Array||Z instanceof Uint8ClampedArray||Z instanceof Int8Array||rt("Cannot pass non-string to std::string"),T&&oe?ne=R(Z):ne=Z.length;var ee=rs(4+ne+1),ie=ee+4;if(ue[ee>>2]=ne,T&&oe)q(Z,ie,ne+1);else if(oe)for(var Te=0;Te<ne;++Te){var et=Z.charCodeAt(Te);et>255&&(jn(ie),rt("String has UTF-16 code units that do not fit in 8 bits")),K[ie+Te]=et}else for(var Te=0;Te<ne;++Te)K[ie+Te]=Z[Te];return B!==null&&B.push(jn,ee),ee},argPackAdvance:8,readValueFromPointer:zr,destructorFunction:function(B){jn(B)}})}var Bo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Nu(g,_){I(g%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var T=g,B=T>>1,Z=B+_/2;!(B>=Z)&&re[B];)++B;if(T=B<<1,T-g>32&&Bo)return Bo.decode(K.subarray(g,T));for(var ne="",oe=0;!(oe>=_/2);++oe){var ee=Y[g+oe*2>>1];if(ee==0)break;ne+=String.fromCharCode(ee)}return ne}function Fu(g,_,T){if(I(_%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),I(typeof T=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),T===void 0&&(T=2147483647),T<2)return 0;T-=2;for(var B=_,Z=T<g.length*2?T/2:g.length,ne=0;ne<Z;++ne){var oe=g.charCodeAt(ne);Y[_>>1]=oe,_+=2}return Y[_>>1]=0,_-B}function Ou(g){return g.length*2}function Bu(g,_){I(g%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var T=0,B="";!(T>=_/4);){var Z=le[g+T*4>>2];if(Z==0)break;if(++T,Z>=65536){var ne=Z-65536;B+=String.fromCharCode(55296|ne>>10,56320|ne&1023)}else B+=String.fromCharCode(Z)}return B}function zu(g,_,T){if(I(_%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),I(typeof T=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),T===void 0&&(T=2147483647),T<4)return 0;for(var B=_,Z=B+T-4,ne=0;ne<g.length;++ne){var oe=g.charCodeAt(ne);if(oe>=55296&&oe<=57343){var ee=g.charCodeAt(++ne);oe=65536+((oe&1023)<<10)|ee&1023}if(le[_>>2]=oe,_+=4,_+4>Z)break}return le[_>>2]=0,_-B}function Hu(g){for(var _=0,T=0;T<g.length;++T){var B=g.charCodeAt(T);B>=55296&&B<=57343&&++T,_+=4}return _}function ku(g,_,T){T=lt(T);var B,Z,ne,oe,ee;_===2?(B=Nu,Z=Fu,oe=Ou,ne=()=>re,ee=1):_===4&&(B=Bu,Z=zu,oe=Hu,ne=()=>ue,ee=2),pn(g,{name:T,fromWireType:function(ie){for(var Te=ue[ie>>2],et=ne(),$e,He=ie+4,Rt=0;Rt<=Te;++Rt){var Nt=ie+4+Rt*_;if(Rt==Te||et[Nt>>ee]==0){var Ot=Nt-He,Qt=B(He,Ot);$e===void 0?$e=Qt:($e+="\0",$e+=Qt),He=Nt+_}}return jn(ie),$e},toWireType:function(ie,Te){typeof Te!="string"&&rt("Cannot pass non-string to C++ string type "+T);var et=oe(Te),$e=rs(4+et+_);return ue[$e>>2]=et>>ee,Z(Te,$e+4,et+_),ie!==null&&ie.push(jn,$e),$e},argPackAdvance:8,readValueFromPointer:zr,destructorFunction:function(ie){jn(ie)}})}function Vu(g,_){_=lt(_),pn(g,{isVoid:!0,name:_,argPackAdvance:0,fromWireType:function(){},toWireType:function(T,B){}})}function Gu(){Me("native code called abort()")}function Wu(g,_,T){K.copyWithin(g,_,_+T)}function Xu(){return 2147483648}function Yu(g){try{return D.grow(g-F.byteLength+65535>>>16),te(D.buffer),1}catch(_){x("emscripten_realloc_buffer: Attempted to grow heap from "+F.byteLength+" bytes to "+g+" bytes, but got error: "+_)}}function ju(g){var _=K.length;g=g>>>0,I(g>_);var T=Xu();if(g>T)return x("Cannot enlarge memory, asked to go up to "+g+" bytes, but the limit is "+T+" bytes!"),!1;let B=(ie,Te)=>ie+(Te-ie%Te)%Te;for(var Z=1;Z<=4;Z*=2){var ne=_*(1+.2/Z);ne=Math.min(ne,g+100663296);var oe=Math.min(T,B(Math.max(g,ne),65536)),ee=Yu(oe);if(ee)return!0}return x("Failed to grow the heap from "+_+" bytes to "+oe+" bytes, not enough memory!"),!1}var is={};function $u(){return l||"./this.program"}function pr(){if(!pr.strings){var g=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:g,_:$u()};for(var T in is)is[T]===void 0?delete _[T]:_[T]=is[T];var B=[];for(var T in _)B.push(T+"="+_[T]);pr.strings=B}return pr.strings}function qu(g,_,T){for(var B=0;B<g.length;++B)I(g.charCodeAt(B)===(g.charCodeAt(B)&255)),H[_++>>0]=g.charCodeAt(B);H[_>>0]=0}function Ku(g,_){var T=0;return pr().forEach(function(B,Z){var ne=_+T;ue[g+Z*4>>2]=ne,qu(B,ne),T+=B.length+1}),0}function Zu(g,_){var T=pr();ue[g>>2]=T.length;var B=0;return T.forEach(function(Z){B+=Z.length+1}),ue[_>>2]=B,0}function Ju(g){Me("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function Qu(g,_,T,B,Z){return 70}var ed=[null,[],[]];function td(g,_){var T=ed[g];I(T),_===0||_===10?((g===1?v:x)(E(T,0)),T.length=0):T.push(_)}function nd(g,_,T,B){for(var Z=0,ne=0;ne<T;ne++){var oe=ue[_>>2],ee=ue[_+4>>2];_+=8;for(var ie=0;ie<ee;ie++)td(g,K[oe+ie]);Z+=ee}return ue[B>>2]=Z,0}function kr(g){return g%4===0&&(g%100!==0||g%400===0)}function id(g,_){for(var T=0,B=0;B<=_;T+=g[B++]);return T}var zo=[31,29,31,30,31,30,31,31,30,31,30,31],Ho=[31,28,31,30,31,30,31,31,30,31,30,31];function rd(g,_){for(var T=new Date(g.getTime());_>0;){var B=kr(T.getFullYear()),Z=T.getMonth(),ne=(B?zo:Ho)[Z];if(_>ne-T.getDate())_-=ne-T.getDate()+1,T.setDate(1),Z<11?T.setMonth(Z+1):(T.setMonth(0),T.setFullYear(T.getFullYear()+1));else return T.setDate(T.getDate()+_),T}return T}function ad(g,_,T){var B=R(g)+1,Z=new Array(B);return Q(g,Z,0,Z.length),Z}function sd(g,_,T,B){var Z=le[B+40>>2],ne={tm_sec:le[B>>2],tm_min:le[B+4>>2],tm_hour:le[B+8>>2],tm_mday:le[B+12>>2],tm_mon:le[B+16>>2],tm_year:le[B+20>>2],tm_wday:le[B+24>>2],tm_yday:le[B+28>>2],tm_isdst:le[B+32>>2],tm_gmtoff:le[B+36>>2],tm_zone:Z?N(Z):""},oe=N(T),ee={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var ie in ee)oe=oe.replace(new RegExp(ie,"g"),ee[ie]);var Te=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],et=["January","February","March","April","May","June","July","August","September","October","November","December"];function $e(he,Ne,$t){for(var Ft=typeof he=="number"?he.toString():he||"";Ft.length<Ne;)Ft=$t[0]+Ft;return Ft}function He(he,Ne){return $e(he,Ne,"0")}function Rt(he,Ne){function $t(pi){return pi<0?-1:pi>0?1:0}var Ft;return(Ft=$t(he.getFullYear()-Ne.getFullYear()))===0&&(Ft=$t(he.getMonth()-Ne.getMonth()))===0&&(Ft=$t(he.getDate()-Ne.getDate())),Ft}function Nt(he){switch(he.getDay()){case 0:return new Date(he.getFullYear()-1,11,29);case 1:return he;case 2:return new Date(he.getFullYear(),0,3);case 3:return new Date(he.getFullYear(),0,2);case 4:return new Date(he.getFullYear(),0,1);case 5:return new Date(he.getFullYear()-1,11,31);case 6:return new Date(he.getFullYear()-1,11,30)}}function Ot(he){var Ne=rd(new Date(he.tm_year+1900,0,1),he.tm_yday),$t=new Date(Ne.getFullYear(),0,4),Ft=new Date(Ne.getFullYear()+1,0,4),pi=Nt($t),Gr=Nt(Ft);return Rt(pi,Ne)<=0?Rt(Gr,Ne)<=0?Ne.getFullYear()+1:Ne.getFullYear():Ne.getFullYear()-1}var Qt={"%a":function(he){return Te[he.tm_wday].substring(0,3)},"%A":function(he){return Te[he.tm_wday]},"%b":function(he){return et[he.tm_mon].substring(0,3)},"%B":function(he){return et[he.tm_mon]},"%C":function(he){var Ne=he.tm_year+1900;return He(Ne/100|0,2)},"%d":function(he){return He(he.tm_mday,2)},"%e":function(he){return $e(he.tm_mday,2," ")},"%g":function(he){return Ot(he).toString().substring(2)},"%G":function(he){return Ot(he)},"%H":function(he){return He(he.tm_hour,2)},"%I":function(he){var Ne=he.tm_hour;return Ne==0?Ne=12:Ne>12&&(Ne-=12),He(Ne,2)},"%j":function(he){return He(he.tm_mday+id(kr(he.tm_year+1900)?zo:Ho,he.tm_mon-1),3)},"%m":function(he){return He(he.tm_mon+1,2)},"%M":function(he){return He(he.tm_min,2)},"%n":function(){return`
`},"%p":function(he){return he.tm_hour>=0&&he.tm_hour<12?"AM":"PM"},"%S":function(he){return He(he.tm_sec,2)},"%t":function(){return"	"},"%u":function(he){return he.tm_wday||7},"%U":function(he){var Ne=he.tm_yday+7-he.tm_wday;return He(Math.floor(Ne/7),2)},"%V":function(he){var Ne=Math.floor((he.tm_yday+7-(he.tm_wday+6)%7)/7);if((he.tm_wday+371-he.tm_yday-2)%7<=2&&Ne++,Ne){if(Ne==53){var Ft=(he.tm_wday+371-he.tm_yday)%7;Ft!=4&&(Ft!=3||!kr(he.tm_year))&&(Ne=1)}}else{Ne=52;var $t=(he.tm_wday+7-he.tm_yday-1)%7;($t==4||$t==5&&kr(he.tm_year%400-1))&&Ne++}return He(Ne,2)},"%w":function(he){return he.tm_wday},"%W":function(he){var Ne=he.tm_yday+7-(he.tm_wday+6)%7;return He(Math.floor(Ne/7),2)},"%y":function(he){return(he.tm_year+1900).toString().substring(2)},"%Y":function(he){return he.tm_year+1900},"%z":function(he){var Ne=he.tm_gmtoff,$t=Ne>=0;return Ne=Math.abs(Ne)/60,Ne=Ne/60*100+Ne%60,($t?"+":"-")+("0000"+Ne).slice(-4)},"%Z":function(he){return he.tm_zone},"%%":function(){return"%"}};oe=oe.replace(/%%/g,"\0\0");for(var ie in Qt)oe.includes(ie)&&(oe=oe.replace(new RegExp(ie,"g"),Qt[ie](ne)));oe=oe.replace(/\0\0/g,"%");var En=ad(oe);return En.length>_?0:(y(En,g),En.length-1)}function od(g,_,T,B){return sd(g,_,T,B)}ze(),hn=a.BindingError=Dn(Error,"BindingError"),fi=a.InternalError=Dn(Error,"InternalError"),Sn(),xt(),hu(),No=a.UnboundTypeError=Dn(Error,"UnboundTypeError"),wu();function cd(){h("fetchSettings")}var ko={__cxa_allocate_exception:G,__cxa_throw:J,_embind_register_bigint:ce,_embind_register_bool:Ka,_embind_register_class:yu,_embind_register_class_constructor:Mu,_embind_register_class_function:Eu,_embind_register_emval:Cu,_embind_register_float:Pu,_embind_register_integer:Du,_embind_register_memory_view:Iu,_embind_register_std_string:Uu,_embind_register_std_wstring:ku,_embind_register_void:Vu,abort:Gu,emscripten_memcpy_big:Wu,emscripten_resize_heap:ju,environ_get:Ku,environ_sizes_get:Zu,fd_close:Ju,fd_seek:Qu,fd_write:nd,strftime_l:od};Be(),a.___wasm_call_ctors=ge("__wasm_call_ctors");var rs=a._malloc=ge("malloc"),jn=a._free=ge("free"),ld=a.___getTypeName=ge("__getTypeName");a.__embind_initialize_bindings=ge("_embind_initialize_bindings"),a.___errno_location=ge("__errno_location"),a._fflush=ge("fflush");var Vo=a._emscripten_stack_init=function(){return(Vo=a._emscripten_stack_init=a.asm.emscripten_stack_init).apply(null,arguments)};a._emscripten_stack_get_free=function(){return(a._emscripten_stack_get_free=a.asm.emscripten_stack_get_free).apply(null,arguments)},a._emscripten_stack_get_base=function(){return(a._emscripten_stack_get_base=a.asm.emscripten_stack_get_base).apply(null,arguments)};var as=a._emscripten_stack_get_end=function(){return(as=a._emscripten_stack_get_end=a.asm.emscripten_stack_get_end).apply(null,arguments)};a.stackSave=ge("stackSave"),a.stackRestore=ge("stackRestore"),a.stackAlloc=ge("stackAlloc");var ud=a.___cxa_is_pointer_type=ge("__cxa_is_pointer_type");a.dynCall_viijii=ge("dynCall_viijii"),a.dynCall_ji=ge("dynCall_ji"),a.dynCall_jiji=ge("dynCall_jiji"),a.dynCall_iiiiij=ge("dynCall_iiiiij"),a.dynCall_iiiiijj=ge("dynCall_iiiiijj"),a.dynCall_iiiiiijj=ge("dynCall_iiiiiijj");var dd=["run","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","getLEB","getFunctionTables","alignFunctionTables","registerFunctions","prettyPrint","getCompilerSetting","print","printErr","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","zeroMemory","stringToNewUTF8","exitJS","getHeapMax","emscripten_realloc_buffer","ENV","ERRNO_CODES","ERRNO_MESSAGES","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","DNS","getHostByName","Protocols","Sockets","getRandomDevice","warnOnce","traverseStack","UNWIND_CACHE","convertPCtoSourceLocation","readAsmConstArgsArray","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","setValue","getValue","PATH","PATH_FS","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","SYSCALLS","getSocketFromFD","getSocketAddress","JSEvents","registerKeyEventCallback","specialHTMLTargets","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","currentFullscreenStrategy","restoreOldWindowedStyle","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","dlopenMissingError","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","exception_addRef","exception_decRef","Browser","setMainLoop","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","_setNetworkCallback","tempFixedLengthArray","miniTempWebGLFloatBuffers","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","GL","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","AL","SDL_unicode","SDL_ttfContext","SDL_audio","SDL","SDL_gfx","GLUT","EGL","GLFW_Window","GLFW","GLEW","IDBStore","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","InternalError","BindingError","UnboundTypeError","PureVirtualError","init_embind","throwInternalError","throwBindingError","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","extendError","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","registeredTypes","awaitingDependencies","typeDependencies","registeredPointers","registerType","whenDependentTypesAreResolved","embind_charCodes","embind_init_charCodes","readLatin1String","getTypeName","heap32VectorToArray","requireRegisteredType","getShiftFromSize","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","simpleReadValueFromPointer","runDestructors","new_","craftInvokerFunction","embind__requireFunction","tupleRegistrations","structRegistrations","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_getPointee","RegisteredPointer_destructor","RegisteredPointer_deleteObject","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","ClassHandle_isAliasOf","throwInstanceAlreadyDeleted","ClassHandle_clone","ClassHandle_delete","deletionQueue","ClassHandle_isDeleted","ClassHandle_deleteLater","flushPendingDeletes","delayFunction","setDelayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_handle_array","emval_free_list","emval_symbols","init_emval","count_emval_handles","get_first_emval","getStringOrSymbol","Emval","emval_newers","craftEmvalAllocator","emval_get_global","emval_lookupTypes","emval_allocateDestructors","emval_methodCallers","emval_addMethodCaller","emval_registeredMethods"];dd.forEach(w);var fd=["ptrToString","zeroMemory","stringToNewUTF8","exitJS","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","getRandomDevice","traverseStack","convertPCtoSourceLocation","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","listenOnce","autoResumeAudioContext","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertU32PairToI53","reallyNegative","unSign","strLen","reSign","formatString","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","checkWasiClock","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","exception_addRef","exception_decRef","setMainLoop","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","SDL_unicode","SDL_ttfContext","SDL_audio","GLFW_Window","runAndAbortIfError","registerInheritedInstance","unregisterInheritedInstance","requireRegisteredType","enumReadValueFromPointer","validateThis","getStringOrSymbol","craftEmvalAllocator","emval_get_global","emval_lookupTypes","emval_allocateDestructors","emval_addMethodCaller"];fd.forEach(A);var Vr;j=function g(){Vr||Go(),Vr||(j=g)};function hd(){Vo(),We()}function Go(g){if(C>0||(hd(),it(),C>0))return;function _(){Vr||(Vr=!0,a.calledRun=!0,!P&&(at(),s(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),I(!a._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Re()))}a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),_()},1)):_(),Xe()}if(a.preInit)for(typeof a.preInit=="function"&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Go(),r.ready}})();i.exports=t})(Jl);var Iv=Jl.exports,Uv=Ye&&Ye.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(oi,"__esModule",{value:!0});oi.LazPerf=oi.create=oi.createLazPerf=void 0;const Uo=Uv(Iv);oi.createLazPerf=Uo.default;oi.create=Uo.default;oi.LazPerf={create:Uo.default};Object.defineProperty(si,"__esModule",{value:!0});si.decompressFile=si.decompressChunk=si.PointData=void 0;const Ql=oi,Nv=Fr;si.PointData={createLazPerf:Ql.createLazPerf,decompressChunk:tu,decompressFile:nu};let Ns;async function eu(i){return i||(Ns||(Ns=(0,Ql.createLazPerf)()),Ns)}async function tu(i,{pointCount:e,pointDataRecordFormat:t,pointDataRecordLength:n},r){const a=await eu(r),s=new Uint8Array(e*n),o=a._malloc(i.byteLength),c=a._malloc(n),l=new a.ChunkDecoder;try{a.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o),l.open(t,n,o);for(let u=0;u<e;++u)l.getPoint(c),s.set(new Uint8Array(a.HEAPU8.buffer,c,n),u*n)}finally{a._free(o),a._free(c),l.delete()}return s}si.decompressChunk=tu;async function nu(i,e){const t=await eu(e),n=Nv.Header.parse(i),{pointCount:r,pointDataRecordLength:a}=n,s=new Uint8Array(r*a),o=t._malloc(i.byteLength),c=t._malloc(a),l=new t.LASZip;try{t.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o),l.open(o,i.byteLength);for(let u=0;u<r;++u)l.getPoint(c),s.set(new Uint8Array(t.HEAPU8.buffer,c,a),u*a)}finally{l.delete()}return s}si.decompressFile=nu;var $a={};Object.defineProperty($a,"__esModule",{value:!0});$a.View=void 0;const Fv=dn,Ov=Ir,Bv=Nr;$a.View={create:zv};function zv(i,e,t=[],n){let r=Bv.Extractor.create(e,t);if(n){const u=new Set([...n]);r=Object.entries(r).reduce((d,[f,m])=>(u.has(f)&&(d[f]=m),d),{})}const a=Ov.Dimensions.create(r,t),s=Fv.Binary.toDataView(i),o=e.pointDataRecordLength;if(s.byteLength%o!==0)throw new Error(`Invalid buffer length (${s.byteLength}) for point length ${o}`);const c=s.byteLength/e.pointDataRecordLength;function l(u){const d=r[u];if(!d)throw new Error(`No extractor for dimension: ${u}`);return function(f){if(f>=c)throw new RangeError(`View index (${f}) out of range: ${c}`);return d(s,f)}}return{pointCount:c,dimensions:a,getter:l}}var qa={};Object.defineProperty(qa,"__esModule",{value:!0});qa.Vlr=void 0;const wn=dn,or=Rn;qa.Vlr={walk:Vv,parse:ru,find:iu,at:Hv,fetch:kv};function iu(i,e,t){return i.find(n=>n.userId===e&&n.recordId===t)}function Hv(i,e,t){const n=iu(i,e,t);if(!n)throw new Error(`VLR not found: ${e}/${t}`);return n}function kv(i,{contentOffset:e,contentLength:t}){return t===0?new Uint8Array:wn.Getter.create(i)(e,e+t)}async function Vv(i,e){const t=wn.Getter.create(i),n=await tl({get:t,startOffset:e.headerLength,count:e.vlrCount,isExtended:!1}),r=await tl({get:t,startOffset:e.evlrOffset,count:e.evlrCount,isExtended:!0});return[...n,...r]}function ru(i,e){return(e?Wv:Gv)(i)}function Gv(i){const e=wn.Binary.toDataView(i);if(e.byteLength!==or.vlrHeaderLength)throw new Error(`Invalid VLR header length (must be ${or.vlrHeaderLength}): ${e.byteLength}`);return{userId:wn.Binary.toCString(i.slice(2,18)),recordId:e.getUint16(18,!0),contentLength:e.getUint16(20,!0),description:wn.Binary.toCString(i.slice(22,54)),isExtended:!1}}function Wv(i){const e=wn.Binary.toDataView(i);if(e.byteLength!==or.evlrHeaderLength)throw new Error(`Invalid EVLR header length (must be ${or.evlrHeaderLength}): ${e.byteLength}`);return{userId:wn.Binary.toCString(i.slice(2,18)),recordId:e.getUint16(18,!0),contentLength:(0,wn.parseBigInt)((0,wn.getBigUint64)(e,20,!0)),description:wn.Binary.toCString(i.slice(28,60)),isExtended:!0}}async function tl({get:i,startOffset:e,count:t,isExtended:n}){const r=[];let a=e;const s=n?or.evlrHeaderLength:or.vlrHeaderLength;for(let o=0;o<t;++o){const c=s?await i(a,a+s):new Uint8Array,{userId:l,recordId:u,contentLength:d,description:f}=ru(c,n);r.push({userId:l,recordId:u,contentOffset:a+s,contentLength:d,description:f,isExtended:n}),a+=s+d}return r}(function(i){var e=Ye&&Ye.__createBinding||(Object.create?function(d,f,m,v){v===void 0&&(v=m);var x=Object.getOwnPropertyDescriptor(f,m);(!x||("get"in x?!f.__esModule:x.writable||x.configurable))&&(x={enumerable:!0,get:function(){return f[m]}}),Object.defineProperty(d,v,x)}:function(d,f,m,v){v===void 0&&(v=m),d[v]=f[m]}),t=Ye&&Ye.__setModuleDefault||(Object.create?function(d,f){Object.defineProperty(d,"default",{enumerable:!0,value:f})}:function(d,f){d.default=f}),n=Ye&&Ye.__importStar||function(d){if(d&&d.__esModule)return d;var f={};if(d!=null)for(var m in d)m!=="default"&&Object.prototype.hasOwnProperty.call(d,m)&&e(f,d,m);return t(f,d),f};Object.defineProperty(i,"__esModule",{value:!0}),i.Vlr=i.View=i.PointData=i.Header=i.Extractor=i.ExtraBytes=i.Dimensions=i.Constants=void 0,i.Constants=n(Rn);var r=Ir;Object.defineProperty(i,"Dimensions",{enumerable:!0,get:function(){return r.Dimensions}});var a=Ur;Object.defineProperty(i,"ExtraBytes",{enumerable:!0,get:function(){return a.ExtraBytes}});var s=Nr;Object.defineProperty(i,"Extractor",{enumerable:!0,get:function(){return s.Extractor}});var o=Fr;Object.defineProperty(i,"Header",{enumerable:!0,get:function(){return o.Header}});var c=si;Object.defineProperty(i,"PointData",{enumerable:!0,get:function(){return c.PointData}});var l=$a;Object.defineProperty(i,"View",{enumerable:!0,get:function(){return l.View}});var u=qa;Object.defineProperty(i,"Vlr",{enumerable:!0,get:function(){return u.Vlr}})})(Lo);var Or={};Object.defineProperty(Or,"__esModule",{value:!0});Or.Hierarchy=void 0;const Er=dn,nl=li;Or.Hierarchy={parse:au,load:Xv};function au(i){const e=Er.Binary.toDataView(i);if(e.byteLength%nl.hierarchyItemLength!==0)throw new Error(`Invalid hierarchy page length: ${e.byteLength}`);const t={},n={};for(let r=0;r<e.byteLength;r+=nl.hierarchyItemLength){const a=e.getInt32(r+0,!0),s=e.getInt32(r+4,!0),o=e.getInt32(r+8,!0),c=e.getInt32(r+12,!0),l=(0,Er.parseBigInt)((0,Er.getBigUint64)(e,r+16,!0)),u=e.getInt32(r+24,!0),d=e.getInt32(r+28,!0),f=Er.Key.toString([a,s,o,c]);if(d<-1)throw new Error(`Invalid hierarchy point count at key: ${f}`);d===-1?n[f]={pageOffset:l,pageLength:u}:t[f]={pointCount:d,pointDataOffset:l,pointDataLength:u}}return{nodes:t,pages:n}}async function Xv(i,e){const t=Er.Getter.create(i);return au(await t(e.pageOffset,e.pageOffset+e.pageLength))}var Br={};Object.defineProperty(Br,"__esModule",{value:!0});Br.Info=void 0;const Sr=dn,il=li;Br.Info={parse:Yv};function Yv(i){const e=Sr.Binary.toDataView(i);if(e.byteLength!==il.infoLength)throw new Error(`Invalid COPC info VLR length (should be ${il.infoLength}): ${e.byteLength}`);const t=[e.getFloat64(0,!0),e.getFloat64(8,!0),e.getFloat64(16,!0)],n=e.getFloat64(24,!0);return{cube:[t[0]-n,t[1]-n,t[2]-n,t[0]+n,t[1]+n,t[2]+n],spacing:e.getFloat64(32,!0),rootHierarchyPage:{pageOffset:(0,Sr.parseBigInt)((0,Sr.getBigUint64)(e,40,!0)),pageLength:(0,Sr.parseBigInt)((0,Sr.getBigUint64)(e,48,!0))},gpsTimeRange:[e.getFloat64(56,!0),e.getFloat64(64,!0)]}}var jv=Ye&&Ye.__createBinding||(Object.create?function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}:function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]}),$v=Ye&&Ye.__setModuleDefault||(Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e}),qv=Ye&&Ye.__importStar||function(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)t!=="default"&&Object.prototype.hasOwnProperty.call(i,t)&&jv(e,i,t);return $v(e,i),e};Object.defineProperty(ka,"__esModule",{value:!0});ka.Copc=void 0;const on=qv(Lo),Na=dn,Kv=Or,Zv=Br;ka.Copc={create:Jv,loadHierarchyPage:Qv,loadPointDataBuffer:su,loadPointDataView:t0};async function Jv(i){const e=Na.Getter.create(i),t=65536,n=e(0,t);async function r(m,v){return v>=t?e(m,v):(await n).slice(m,v)}const a=on.Header.parse(await r(0,on.Constants.minHeaderLength)),s=await on.Vlr.walk(r,a),o=on.Vlr.find(s,"copc",1);if(!o)throw new Error("COPC info VLR is required");const c=Zv.Info.parse(await on.Vlr.fetch(r,o));let l;const u=on.Vlr.find(s,"LASF_Projection",2112);u&&u.contentLength&&(l=Na.Binary.toCString(await on.Vlr.fetch(r,u)),l===""&&(l=void 0));let d=[];const f=on.Vlr.find(s,"LASF_Spec",4);return f&&(d=on.ExtraBytes.parse(await on.Vlr.fetch(r,f))),{header:a,vlrs:s,info:c,wkt:l,eb:d}}async function Qv(i,e){const t=Na.Getter.create(i);return Kv.Hierarchy.load(t,e)}async function e0(i,{pointDataOffset:e,pointDataLength:t}){return Na.Getter.create(i)(e,e+t)}async function su(i,{pointDataRecordFormat:e,pointDataRecordLength:t},n,r){const a=await e0(i,n),{pointCount:s}=n;return on.PointData.decompressChunk(a,{pointCount:s,pointDataRecordFormat:e,pointDataRecordLength:t},r)}async function t0(i,e,t,{lazPerf:n,include:r}={}){const a=await su(i,e.header,t,n);return on.View.create(a,e.header,e.eb,r)}(function(i){var e=Ye&&Ye.__createBinding||(Object.create?function(o,c,l,u){u===void 0&&(u=l);var d=Object.getOwnPropertyDescriptor(c,l);(!d||("get"in d?!c.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(o,u,d)}:function(o,c,l,u){u===void 0&&(u=l),o[u]=c[l]}),t=Ye&&Ye.__setModuleDefault||(Object.create?function(o,c){Object.defineProperty(o,"default",{enumerable:!0,value:c})}:function(o,c){o.default=c}),n=Ye&&Ye.__importStar||function(o){if(o&&o.__esModule)return o;var c={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&e(c,o,l);return t(c,o),c};Object.defineProperty(i,"__esModule",{value:!0}),i.Info=i.Hierarchy=i.Copc=i.Constants=void 0,i.Constants=n(li);var r=ka;Object.defineProperty(i,"Copc",{enumerable:!0,get:function(){return r.Copc}});var a=Or;Object.defineProperty(i,"Hierarchy",{enumerable:!0,get:function(){return a.Hierarchy}});var s=Br;Object.defineProperty(i,"Info",{enumerable:!0,get:function(){return s.Info}})})(zl);(function(i){var e=Ye&&Ye.__createBinding||(Object.create?function(a,s,o,c){c===void 0&&(c=o);var l=Object.getOwnPropertyDescriptor(s,o);(!l||("get"in l?!s.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return s[o]}}),Object.defineProperty(a,c,l)}:function(a,s,o,c){c===void 0&&(c=o),a[c]=s[o]}),t=Ye&&Ye.__setModuleDefault||(Object.create?function(a,s){Object.defineProperty(a,"default",{enumerable:!0,value:s})}:function(a,s){a.default=s}),n=Ye&&Ye.__importStar||function(a){if(a&&a.__esModule)return a;var s={};if(a!=null)for(var o in a)o!=="default"&&Object.prototype.hasOwnProperty.call(a,o)&&e(s,a,o);return t(s,a),s},r=Ye&&Ye.__exportStar||function(a,s){for(var o in a)o!=="default"&&!Object.prototype.hasOwnProperty.call(s,o)&&e(s,a,o)};Object.defineProperty(i,"__esModule",{value:!0}),i.Las=i.Ept=void 0,i.Ept=n(Ol),r(zl,i),i.Las=n(Lo),r(dn,i)})(Ta);class n0 extends z_{constructor(e={}){super(),this._neighbourCount=8,this.neighbours=new Float32Array(this._neighbourCount*2);for(let n=0;n<this._neighbourCount;n++)this.neighbours[2*n+0]=Math.cos(2*n*Math.PI/this._neighbourCount),this.neighbours[2*n+1]=Math.sin(2*n*Math.PI/this._neighbourCount);const t={screenWidth:{value:0},screenHeight:{value:0},edlStrength:{value:1},uNear:{value:1},uFar:{value:1},radius:{value:1},neighbours:{value:this.neighbours},tDepth:{value:null},tDiffuse:{value:null},opacity:{value:1},uProj:{value:new St}};this.setValues({uniforms:t,vertexShader:`
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
            `,transparent:!0,lights:!1})}}const i0=`
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
}`,r0=`
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
}`;class a0{constructor(e,t){if(console.log("Initializing COPC viewer with:",{containerSelector:e,filename:t}),this.container=typeof e=="string"?document.querySelector(e):e,!this.container)throw new Error(`Container not found: ${e}`);(this.container.clientWidth===0||this.container.clientHeight===0)&&(this.container.style.width="100%",this.container.style.height="100%",(this.container.clientWidth===0||this.container.clientHeight===0)&&(this.container.parentElement?(this.container.style.width=`${this.container.parentElement.clientWidth}px`,this.container.style.height=`${this.container.parentElement.clientHeight}px`):(this.container.style.width="800px",this.container.style.height="600px"))),getComputedStyle(this.container).position==="static"&&(this.container.style.position="relative"),this.filename=t,this.loadedNodes=new Map,this.maxLoadedNodes=50,this.isInitialized=!1,this.stats={totalPointsLoaded:0,nodesLoaded:0,lastFrameTime:performance.now(),frameCount:0,fps:0},this.controlState={rotateSpeed:1,zoomSpeed:1.2,panSpeed:1,basePointSize:.025,minPointSize:.003,maxPointSize:.15,densityAdaptiveFactor:1.5,pointSizeScalingFactor:1.5},this.pointBudget={target:5e6,current:0,nodeScores:new Map},this.lodState={maxScreenSpaceError:8,maxConcurrentLoads:4,loadingNodes:new Set,nodeHierarchy:null,visibleNodes:new Set,lastViewUpdateTime:0,viewUpdateThrottle:100,spacing:null,cubeBounds:null,nodeDepths:new Map,minNodeSpacing:null,maxNodeSpacing:null},this.createStatsDisplay(),this.init()}async init(){console.log("Starting initialization...");try{this.scene=new kc,this.camera=new cn(75,this.container.clientWidth/this.container.clientHeight,.1,1e4),this.renderer=new F_({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.appendChild(this.renderer.domElement),this.controls=new Qc(this.camera,this.renderer.domElement),this.controls.addEventListener("change",()=>this.updateVisibleNodes()),console.log("Loading COPC file..."),this.copc=await Ta.Copc.create(this.filename),this.lodState.spacing=this.copc.info.spacing,this.lodState.cubeBounds=this.copc.info.cube,console.log("COPC info loaded:",{spacing:this.lodState.spacing,cubeBounds:this.lodState.cubeBounds}),console.log("COPC file loaded:",{header:this.copc.header,pointFormat:this.copc.header.pointDataRecordFormat,pointLength:this.copc.header.pointDataRecordLength,totalPoints:this.copc.header.totalPoints});const{header:e}=this.copc;this.centerOffset=new V((e.max[0]+e.min[0])/2,(e.max[1]+e.min[1])/2,(e.max[2]+e.min[2])/2);const t=Math.abs(e.max[0]-e.min[0]),n=Math.abs(e.max[1]-e.min[1]),r=Math.abs(e.max[2]-e.min[2]),a=Math.max(t,n,r);this.scale=a>0?1/a:1,console.log("Point cloud stats:",{centerOffset:{x:this.centerOffset.x,y:this.centerOffset.y,z:this.centerOffset.z},size:{x:t,y:n,z:r},scale:this.scale}),console.log("Loading hierarchy page...");const{nodes:s,pages:o}=await Ta.Copc.loadHierarchyPage(this.filename,this.copc.info.rootHierarchyPage);console.log("Hierarchy loaded:",{nodeKeys:Object.keys(s),nodeCount:Object.keys(s).length,pageCount:Object.keys(o).length}),this.setupScene();const c=()=>{if(!this.lodState.nodeHierarchy||!this.copc?.info?.spacing){console.warn("Unable to calculate node spacings - missing required data");return}const l=this.copc.info.spacing,u=12;this.lodState.minNodeSpacing=l*Math.pow(.5,u),this.lodState.maxNodeSpacing=l,console.log("Node spacings calculated:",{min:this.lodState.minNodeSpacing,max:this.lodState.maxNodeSpacing})};console.log("Loading initial nodes..."),await this.loadInitialNodes(s),c(),this.isInitialized=!0,this.animate(),this.setupResizeObserver(),console.log("Initialization complete")}catch(e){throw console.error("Failed to initialize viewer:",e),this.container.innerHTML=`
        <div style="color: red; padding: 20px;">
          Failed to initialize viewer: ${e.message}
        </div>
      `,e}}setupScene(){const e=new H_(1);this.scene.add(e);const t=new qc(2,20);this.scene.add(t),this.camera.position.set(2,2,2),this.camera.lookAt(0,0,0),this.controls=new Qc(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=this.controlState.rotateSpeed,this.controls.zoomSpeed=this.controlState.zoomSpeed,this.controls.panSpeed=this.controlState.panSpeed,this.controls.enableRotate=!0,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.controls.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.controls.minDistance=.1,this.controls.maxDistance=10,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=Math.PI,this.setupScrollHandler();const{header:n}=this.copc,r=Math.max(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);this.camera.near=r*this.scale*1e-4,this.camera.far=r*this.scale*10,this.camera.updateProjectionMatrix(),this.setupKeyboardControls(),this.setupEDLRendering()}setupEDLRendering(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderTarget=new yn(e,t,{minFilter:At,magFilter:At,format:Yt,type:nn}),this.depthTarget=new yn(e,t,{minFilter:At,magFilter:At,format:Yt,type:nn});const n=new n0;n.uniforms.tDiffuse.value=this.renderTarget.texture,n.uniforms.tDepth.value=this.depthTarget.texture,n.uniforms.screenWidth.value=e,n.uniforms.screenHeight.value=t,n.uniforms.edlStrength.value=1,n.uniforms.radius.value=1.5,n.uniforms.uNear.value=this.camera.near,n.uniforms.uFar.value=this.camera.far;const r=new Dr(2,2);this.edlQuad=new Cn(r,n),this.edlQuad.frustumCulled=!1,this.edlScene=new kc,this.edlScene.add(this.edlQuad),this.edlCamera=new Pl(-1,1,1,-1,0,1)}setupScrollHandler(){this.renderer.domElement.addEventListener("wheel",e=>{if(e.shiftKey){e.preventDefault();const t=e.deltaY>0?.9:1.1;this.adjustPointSize(t)}},{passive:!1})}setupKeyboardControls(){window.addEventListener("keydown",e=>{switch(e.key.toLowerCase()){case"r":this.resetView();break;case"+":this.adjustPointSize(1.1);break;case"-":this.adjustPointSize(.9);break;case"g":this.toggleGrid();break;case"[":this.updateDensityAdaptiveFactor(this.controlState.densityAdaptiveFactor*.9);break;case"]":this.updateDensityAdaptiveFactor(this.controlState.densityAdaptiveFactor*1.1);break}})}resetView(){this.camera.position.set(2,2,2),this.controls.target.set(0,0,0),this.camera.lookAt(0,0,0),this.controls.reset(),this.controlState.pointSize=.01,this.scene.traverse(e=>{e instanceof _a&&(e.material.size=this.controlState.pointSize)})}adjustPointSize(e){this.controlState.basePointSize=mo.clamp(this.controlState.basePointSize*e,this.controlState.minPointSize,this.controlState.maxPointSize),this.scene.traverse(t=>{t instanceof _a&&t.material.uniforms&&t.material.uniforms.size&&(t.material.uniforms.size.value=this.controlState.basePointSize)})}updateDensityAdaptiveFactor(e){this.controlState.densityAdaptiveFactor=mo.clamp(e,.1,2),this.scene.traverse(t=>{t instanceof _a&&t.material.uniforms&&t.material.uniforms.densityAdaptiveFactor&&(t.material.uniforms.densityAdaptiveFactor.value=this.controlState.densityAdaptiveFactor)})}toggleGrid(){this.scene.traverse(e=>{e instanceof qc&&(e.visible=!e.visible)})}async loadInitialNodes(e){this.lodState.nodeHierarchy=e;const t=e["0-0-0-0"];if(!t){console.error("Root node not found!");return}await this.loadNode(t,"0-0-0-0"),await this.updateVisibleNodes(!0)}async loadNode(e,t){if(!(!e||this.loadedNodes.has(t)))try{this.lodState.loadingNodes.add(t);const n=await Ta.Copc.loadPointDataView(this.filename,this.copc,e),r=n.getter("X"),a=n.getter("Y"),s=n.getter("Z"),o=n.getter("Red"),c=n.getter("Green"),l=n.getter("Blue");if(!e.pointCount){console.warn(`Node ${t} has no points`);return}const u=this.getNodeBounds(t),d=new V((u.min[0]+u.max[0])/2,(u.min[1]+u.max[1])/2,(u.min[2]+u.max[2])/2),f=new Float32Array(e.pointCount*3),m=new Float32Array(e.pointCount*3);let v=0;for(let I=0;I<e.pointCount;I++){const b=r(I),E=a(I),N=s(I);if(!isFinite(b)||!isFinite(E)||!isFinite(N))continue;const Q=b-d.x,q=E-d.y,R=N-d.z,F=(d.x-this.centerOffset.x+Q)*this.scale,H=(d.z-this.centerOffset.z+R)*this.scale,K=-(d.y-this.centerOffset.y+q)*this.scale;f[v*3]=F,f[v*3+1]=H,f[v*3+2]=K,o&&c&&l?(m[v*3]=o(I)/65535,m[v*3+1]=c(I)/65535,m[v*3+2]=l(I)/65535):(m[v*3]=.7,m[v*3+1]=.7,m[v*3+2]=.7),v++}if(v===0)return;const x=new un,p=new Float32Array(f.buffer,0,v*3),h=new Float32Array(m.buffer,0,v*3);x.setAttribute("position",new ln(p,3)),x.setAttribute("color",new ln(h,3));const L=parseInt(t.split("-")[0]),A=Math.max(u.max[0]-u.min[0],u.max[1]-u.min[1],u.max[2]-u.min[2]),w=this.copc.info.spacing*Math.pow(.5,L),O=(w-this.lodState.minNodeSpacing)/(this.lodState.maxNodeSpacing-this.lodState.minNodeSpacing),D=new Ln({vertexShader:i0,fragmentShader:r0,uniforms:{size:{value:this.controlState.basePointSize},scale:{value:window.devicePixelRatio},spacing:{value:this.lodState.maxNodeSpacing?(w-this.lodState.minNodeSpacing)/(this.lodState.maxNodeSpacing-this.lodState.minNodeSpacing):1},densityAdaptiveFactor:{value:this.controlState.densityAdaptiveFactor}},vertexColors:!0}),P=new _a(x,D);P.name=`node-${t}`,this.scene.add(P),this.loadedNodes.set(t,{lastAccessed:performance.now(),pointCount:v}),this.stats.totalPointsLoaded+=v,this.stats.nodesLoaded=this.loadedNodes.size}catch(n){console.error(`Failed to load node ${t}:`,n)}finally{this.lodState.loadingNodes.delete(t)}}unloadNode(e){const t=this.scene.getObjectByName(`node-${e}`);if(t){this.scene.remove(t),t.geometry.dispose(),t.material.dispose();const n=this.loadedNodes.get(e);n&&(this.stats.totalPointsLoaded-=n.pointCount),this.loadedNodes.delete(e)}}async updateVisibleNodes(e=!1){const t=performance.now();if(!(!e&&t-this.lodState.lastViewUpdateTime<this.lodState.viewUpdateThrottle)&&!this.lodState.isUpdating)try{if(this.lodState.isUpdating=!0,this.lodState.lastViewUpdateTime=t,this.lodState.loadingNodes.size>=this.lodState.maxConcurrentLoads)return;const n=new Co,r=new St;r.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),n.setFromProjectionMatrix(r);const a=w=>{const O=this.getNodeBounds(w),D=new lr(new V(...O.min).sub(this.centerOffset).multiplyScalar(this.scale),new V(...O.max).sub(this.centerOffset).multiplyScalar(this.scale));return n.intersectsBox(D)};let s=0;const o=new Map;for(const[w,O]of this.loadedNodes)a(w)?(o.set(w,O),s+=O.pointCount):this.unloadNode(w);this.loadedNodes=o;const c=new Map,l=new Set(this.loadedNodes.keys()),u=w=>{const O=this.getNodeBounds(w),D=new V((O.max[0]+O.min[0])/2,(O.max[1]+O.min[1])/2,(O.max[2]+O.min[2])/2).sub(this.centerOffset).multiplyScalar(this.scale),P=this.camera.position.distanceTo(D),I=new V(O.max[0]-O.min[0],O.max[1]-O.min[1],O.max[2]-O.min[2]).length()*this.scale,b=this.camera.fov*Math.PI/180;return I*this.renderer.domElement.height/(2*P*Math.tan(b/2))},d=w=>{const O=this.getNodeBounds(w),D=new V((O.max[0]+O.min[0])/2,(O.max[1]+O.min[1])/2,(O.max[2]+O.min[2])/2).sub(this.centerOffset).multiplyScalar(this.scale),P=this.camera.position.distanceTo(D);return Math.min(Math.floor(8-Math.log2(P)),12)},f=w=>{const O=this.lodState.nodeHierarchy[w];if(!O||!a(w))return;const D=parseInt(w.split("-")[0]),P=d(w);if(!(D>P)&&(c.has(D)||c.set(D,new Set),c.get(D).add({key:w,node:O}),D<P&&u(w)>this.lodState.maxScreenSpaceError)){const b=this.getChildKeys(w);for(const E of b)this.lodState.nodeHierarchy[E]&&f(E)}};f("0-0-0-0");const m=this.pointBudget.target-s,v=this.lodState.maxConcurrentLoads-this.lodState.loadingNodes.size,x=new Map;let p=0;const h=Array.from(c.keys()).sort((w,O)=>w-O);for(const w of h){const O=c.get(w);for(const{key:D,node:P}of O)if(!(this.loadedNodes.has(D)||this.lodState.loadingNodes.has(D))){if(p>=v||P.pointCount>m-s)break;x.set(D,P),s+=P.pointCount,p++,l.add(D)}if(p>=v||s>=this.pointBudget.target)break}const L=[];for(const[w,O]of x)L.push(this.loadNode(O,w));await Promise.all(L),this.lodState.visibleNodes=l,this.pointBudget.current=s;const A=Array.from(c.entries()).map(([w,O])=>`D${w}: ${O.size}`).join(", ");console.log(`Selected ${p} nodes to load`),console.log(`Visible nodes by depth: ${A}`),console.log(`Total points: ${s.toLocaleString()}/${this.pointBudget.target.toLocaleString()}`)}finally{this.lodState.isUpdating=!1}}calculateScreenSpaceError(e,t){if(!this.lodState.nodeHierarchy[e])return 1/0;const r=this.getNodeBounds(e),a=new V((r.max[0]+r.min[0])/2,(r.max[1]+r.min[1])/2,(r.max[2]+r.min[2])/2),s=new V(r.max[0]-r.min[0],r.max[1]-r.min[1],r.max[2]-r.min[2]).length();a.sub(this.centerOffset).multiplyScalar(this.scale);const o=t.distanceTo(a);if(o===0)return 1/0;const c=parseInt(e.split("-")[0]),l=s*Math.pow(2,-c),u=this.renderer.domElement.height,d=this.camera.fov*Math.PI/180;return l*u/(2*o*Math.tan(d/2))}getNodeBounds(e){const[t,n,r,a]=e.split("-").map(Number),[s,o,c,l,u,d]=this.lodState.cubeBounds,f=(l-s)/Math.pow(2,t),m=s+n*f,v=o+r*f,x=c+a*f;return{min:[m,v,x],max:[m+f,v+f,x+f]}}getChildKeys(e){const[t,n,r,a]=e.split("-").map(Number),s=t+1,o=n*2,c=r*2,l=a*2;return[`${s}-${o}-${c}-${l}`,`${s}-${o+1}-${c}-${l}`,`${s}-${o}-${c+1}-${l}`,`${s}-${o+1}-${c+1}-${l}`,`${s}-${o}-${c}-${l+1}`,`${s}-${o+1}-${c}-${l+1}`,`${s}-${o}-${c+1}-${l+1}`,`${s}-${o+1}-${c+1}-${l+1}`]}createStatsDisplay(){this.statsDisplay=document.createElement("div"),this.statsDisplay.style.cssText=`
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
`)}animate(){if(!this.isInitialized)return;if(requestAnimationFrame(()=>this.animate()),this.controls.update(),this.updateVisibleNodes(),this.edlQuad&&this.edlQuad.material.uniforms.uProj.value.copy(this.camera.projectionMatrix),this.renderTarget&&this.depthTarget){const n=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.renderTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.depthTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.edlScene,this.edlCamera),this.renderer.setRenderTarget(n)}else this.renderer.render(this.scene,this.camera);const e=performance.now(),t=e-this.stats.lastFrameTime;this.stats.frameCount++,t>=1e3&&(this.stats.fps=this.stats.frameCount*1e3/t,this.stats.frameCount=0,this.stats.lastFrameTime=e,this.updateStatsDisplay())}toggleEDL(e=!0){e?(this.renderTarget=new yn(this.container.clientWidth,this.container.clientHeight,{minFilter:At,magFilter:At,format:Yt,type:nn}),this.depthTarget=new yn(this.container.clientWidth,this.container.clientHeight,{minFilter:At,magFilter:At,format:Yt,type:nn})):(this.renderTarget&&(this.renderTarget.dispose(),this.renderTarget=null),this.depthTarget&&(this.depthTarget.dispose(),this.depthTarget=null))}setEDLStrength(e){this.edlQuad&&(this.edlQuad.material.uniforms.edlStrength.value=e)}setEDLRadius(e){this.edlQuad&&(this.edlQuad.material.uniforms.radius.value=e)}dispose(){this.isInitialized=!1,this.loadedNodes.forEach((e,t)=>this.unloadNode(t)),this.renderTarget&&this.renderTarget.dispose(),this.depthTarget&&this.depthTarget.dispose(),this.edlQuad&&(this.edlQuad.geometry.dispose(),this.edlQuad.material.dispose()),this.renderer&&this.renderer.dispose(),this.controls&&this.controls.dispose(),this.container.innerHTML=""}updatePointBudget(e){this.pointBudget.target=e,this.updateVisibleNodes(!0)}manageMemory(){if(this.loadedNodes.size>this.maxLoadedNodes){const e=Array.from(this.loadedNodes.entries()).sort((t,n)=>t[1].lastAccessed-n[1].lastAccessed);for(;this.loadedNodes.size>this.maxLoadedNodes;){const[t]=e.shift();this.unloadNode(t)}}}setupResizeObserver(){new ResizeObserver(t=>{for(const n of t)n.target===this.container&&this.onResize()}).observe(this.container)}onResize(){if(!this.isInitialized)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.edlQuad&&(this.edlQuad.material.uniforms.screenWidth.value=e,this.edlQuad.material.uniforms.screenHeight.value=t,this.edlQuad.material.uniforms.uProj.value.copy(this.camera.projectionMatrix)),this.renderTarget.setSize(e,t),this.depthTarget.setSize(e,t)}}const s0="https://public-aco-data.s3.us-east-1.amazonaws.com/data/4012_PlaceGlacier/23_4012_07/23_4012_07_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";async function o0(){console.log("Starting main function"),new a0("#app",s0)}o0();
