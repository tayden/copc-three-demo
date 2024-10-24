(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="167",zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,Wo=1,yf=2,rl=1,xf=2,Bn=3,ci=0,Kt=1,Hn=2,ii=0,Ji=1,Xo=2,Yo=3,$o=4,Sf=5,Mi=100,Mf=101,Ef=102,bf=103,Tf=104,Af=200,wf=201,Cf=202,Rf=203,Oa=204,Ba=205,Pf=206,Lf=207,Df=208,If=209,Uf=210,Nf=211,Ff=212,Of=213,Bf=214,zf=0,Hf=1,kf=2,Rs=3,Vf=4,Gf=5,Wf=6,Xf=7,sl=0,Yf=1,$f=2,ri=0,jf=1,qf=2,Kf=3,Zf=4,Jf=5,Qf=6,ed=7,al=300,tr=301,nr=302,za=303,Ha=304,Bs=306,ka=1e3,bi=1001,Va=1002,kt=1003,td=1004,$r=1005,mn=1006,aa=1007,Ti=1008,Vn=1009,ol=1010,cl=1011,Rr=1012,xo=1013,Ai=1014,gn=1015,Lr=1016,So=1017,Mo=1018,ir=1020,ll=35902,ul=1021,fl=1022,nn=1023,dl=1024,hl=1025,Qi=1026,rr=1027,pl=1028,Eo=1029,ml=1030,bo=1031,To=1033,Ss=33776,Ms=33777,Es=33778,bs=33779,Ga=35840,Wa=35841,Xa=35842,Ya=35843,$a=36196,ja=37492,qa=37496,Ka=37808,Za=37809,Ja=37810,Qa=37811,eo=37812,to=37813,no=37814,io=37815,ro=37816,so=37817,ao=37818,oo=37819,co=37820,lo=37821,Ts=36492,uo=36494,fo=36495,gl=36283,ho=36284,po=36285,mo=36286,nd=3200,id=3201,rd=0,sd=1,ni="",Sn="srgb",ui="srgb-linear",Ao="display-p3",zs="display-p3-linear",Ps="linear",gt="srgb",Ls="rec709",Ds="p3",Ii=7680,jo=519,ad=512,od=513,cd=514,_l=515,ld=516,ud=517,fd=518,dd=519,qo=35044,Ko="300 es",kn=2e3,Is=2001;class Ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zo=1234567;const Ar=Math.PI/180,Pr=180/Math.PI;function lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function wo(i,e){return(i%e+e)%e}function hd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pd(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function md(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function gd(i,e=1){return e-Math.abs(wo(i,e*2)-e)}function _d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xd(i,e){return i+Math.random()*(e-i)}function Sd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(Zo=i);let e=Zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ed(i){return i*Ar}function bd(i){return i*Pr}function Td(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cd(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vl={DEG2RAD:Ar,RAD2DEG:Pr,generateUUID:lr,clamp:Ht,euclideanModulo:wo,mapLinear:hd,inverseLerp:pd,lerp:wr,damp:md,pingpong:gd,smoothstep:_d,smootherstep:vd,randInt:yd,randFloat:xd,randFloatSpread:Sd,seededRandom:Md,degToRad:Ed,radToDeg:bd,isPowerOfTwo:Td,ceilPowerOfTwo:Ad,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Cd,normalize:Gt,denormalize:Ki};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,s,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],v=n[8],x=r[0],p=r[3],h=r[6],C=r[1],b=r[4],L=r[7],X=r[2],U=r[5],D=r[8];return s[0]=a*x+o*C+c*X,s[3]=a*p+o*b+c*U,s[6]=a*h+o*L+c*D,s[1]=l*x+u*C+f*X,s[4]=l*p+u*b+f*U,s[7]=l*h+u*L+f*D,s[2]=d*x+m*C+v*X,s[5]=d*p+m*b+v*U,s[8]=d*h+m*L+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,v=t*f+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*l-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Je;function yl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){const i=Us("canvas");return i.style.display="block",i}const Jo={};function Cr(i){i in Jo||(Jo[i]=!0,console.warn(i))}function Pd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Qo=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ec=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[ui]:{transfer:Ps,primaries:Ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Sn]:{transfer:gt,primaries:Ls,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zs]:{transfer:Ps,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ec),fromReference:i=>i.applyMatrix3(Qo)},[Ao]:{transfer:gt,primaries:Ds,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ec),fromReference:i=>i.applyMatrix3(Qo).convertLinearToSRGB()}},Ld=new Set([ui,zs]),ut={enabled:!0,_workingColorSpace:ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ld.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=_r[e].toReference,r=_r[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return _r[i].primaries},getTransfer:function(i){return i===ni?Ps:_r[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(_r[e].luminanceCoefficients)}};function er(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class Dd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Us("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Id=0;class xl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(la(r[a].image)):s.push(la(r[a]))}else s=la(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function la(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class Zt extends Ci{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=bi,r=bi,s=mn,a=Ti,o=nn,c=Vn,l=Zt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=lr(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=al;Zt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],v=c[9],x=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,L=(m+1)/2,X=(h+1)/2,U=(u+d)/4,D=(f+x)/4,z=(v+p)/4;return b>L&&b>X?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=U/n,s=D/n):L>X?L<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(L),n=U/r,s=z/r):X<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(X),n=D/s,r=z/s),this.set(n,r,s,t),this}let C=Math.sqrt((p-v)*(p-v)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(p-v)/C,this.y=(f-x)/C,this.z=(d-u)/C,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sl extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fd extends Zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f!==x||c!==d||l!==m||u!==v){let p=1-o;const h=c*d+l*m+u*v+f*x,C=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const X=Math.sqrt(b),U=Math.atan2(X,h*C);p=Math.sin(p*U)/X,o=Math.sin(o*U)/X}const L=o*C;if(c=c*p+d*L,l=l*p+m*L,u=u*p+v*L,f=f*p+x*L,p===1-o){const X=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=X,l*=X,u*=X,f*=X}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+c*m-l*d,e[t+1]=c*v+u*d+l*f-o*m,e[t+2]=l*v+u*m+o*d-c*f,e[t+3]=u*v-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f+d*m*v;break;case"YZX":this._x=d*u*f+l*m*v,this._y=l*m*f+d*u*v,this._z=l*u*v-d*m*f,this._w=l*u*f-d*m*v;break;case"XZY":this._x=d*u*f-l*m*v,this._y=l*m*f-d*u*v,this._z=l*u*v+d*m*f,this._w=l*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new H,tc=new wi;class ur{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),qr.subVectors(this.max,vr),Ni.subVectors(e.a,vr),Fi.subVectors(e.b,vr),Oi.subVectors(e.c,vr),jn.subVectors(Fi,Ni),qn.subVectors(Oi,Fi),mi.subVectors(Ni,Oi);let t=[0,-jn.z,jn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,jn.z,0,-jn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-jn.y,jn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!fa(t,Ni,Fi,Oi,qr)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Ni,Fi,Oi,qr))?!1:(Kr.crossVectors(jn,qn),t=[Kr.x,Kr.y,Kr.z],fa(t,Ni,Fi,Oi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new H,new H,new H,new H,new H,new H,new H,new H],dn=new H,jr=new ur,Ni=new H,Fi=new H,Oi=new H,jn=new H,qn=new H,mi=new H,vr=new H,qr=new H,Kr=new H,gi=new H;function fa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gi.fromArray(i,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Od=new ur,yr=new H,da=new H;class Dr{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Od.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(da)),this.expandByPoint(yr.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new H,ha=new H,Zr=new H,Kn=new H,pa=new H,Jr=new H,ma=new H;class Hs{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ha.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Kn.dot(this.direction),c=-Kn.dot(Zr),l=Kn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*c-o,d=a*o-c,v=s*u,f>=0)if(d>=-v)if(d<=v){const x=1/u;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ha).addScaledVector(Zr,d),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){pa.subVectors(t,e),Jr.subVectors(n,e),ma.crossVectors(pa,Jr);let a=this.direction.dot(ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const c=o*this.direction.dot(Jr.crossVectors(Kn,Jr));if(c<0)return null;const l=o*this.direction.dot(pa.cross(Kn));if(l<0||c+l>a)return null;const u=-o*Kn.dot(ma);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,n,r,s,a,o,c,l,u,f,d,m,v,x,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,d,m,v,x,p)}set(e,t,n,r,s,a,o,c,l,u,f,d,m,v,x,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Bi.setFromMatrixColumn(e,0).length(),s=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+v*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,m=c*f,v=l*u,x=l*f;t[0]=d+x*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,m=c*f,v=l*u,x=l*f;t[0]=d-x*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,x=o*f;t[0]=c*u,t[4]=v*l-m,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,v=o*c,x=o*l;t[0]=c*u,t[4]=x-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+v,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*c,m=a*l,v=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,zd)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Zn.crossVectors(n,en),Zn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Zn.crossVectors(n,en)),Zn.normalize(),Qr.crossVectors(en,Zn),r[0]=Zn.x,r[4]=Qr.x,r[8]=en.x,r[1]=Zn.y,r[5]=Qr.y,r[9]=en.y,r[2]=Zn.z,r[6]=Qr.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],v=n[2],x=n[6],p=n[10],h=n[14],C=n[3],b=n[7],L=n[11],X=n[15],U=r[0],D=r[4],z=r[8],A=r[12],E=r[1],w=r[5],ee=r[9],q=r[13],R=r[2],N=r[6],k=r[10],Q=r[14],Y=r[3],ne=r[7],he=r[11],ve=r[15];return s[0]=a*U+o*E+c*R+l*Y,s[4]=a*D+o*w+c*N+l*ne,s[8]=a*z+o*ee+c*k+l*he,s[12]=a*A+o*q+c*Q+l*ve,s[1]=u*U+f*E+d*R+m*Y,s[5]=u*D+f*w+d*N+m*ne,s[9]=u*z+f*ee+d*k+m*he,s[13]=u*A+f*q+d*Q+m*ve,s[2]=v*U+x*E+p*R+h*Y,s[6]=v*D+x*w+p*N+h*ne,s[10]=v*z+x*ee+p*k+h*he,s[14]=v*A+x*q+p*Q+h*ve,s[3]=C*U+b*E+L*R+X*Y,s[7]=C*D+b*w+L*N+X*ne,s[11]=C*z+b*ee+L*k+X*he,s[15]=C*A+b*q+L*Q+X*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],x=e[7],p=e[11],h=e[15];return v*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*m-n*c*m)+x*(+t*c*m-t*l*d+s*a*d-r*a*m+r*l*u-s*c*u)+p*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*u-n*l*u)+h*(-r*o*u-t*c*f+t*o*d+r*a*f-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],x=e[13],p=e[14],h=e[15],C=f*p*l-x*d*l+x*c*m-o*p*m-f*c*h+o*d*h,b=v*d*l-u*p*l-v*c*m+a*p*m+u*c*h-a*d*h,L=u*x*l-v*f*l+v*o*m-a*x*m-u*o*h+a*f*h,X=v*f*c-u*x*c-v*o*d+a*x*d+u*o*p-a*f*p,U=t*C+n*b+r*L+s*X;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/U;return e[0]=C*D,e[1]=(x*d*s-f*p*s-x*r*m+n*p*m+f*r*h-n*d*h)*D,e[2]=(o*p*s-x*c*s+x*r*l-n*p*l-o*r*h+n*c*h)*D,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*m-n*c*m)*D,e[4]=b*D,e[5]=(u*p*s-v*d*s+v*r*m-t*p*m-u*r*h+t*d*h)*D,e[6]=(v*c*s-a*p*s-v*r*l+t*p*l+a*r*h-t*c*h)*D,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*m+t*c*m)*D,e[8]=L*D,e[9]=(v*f*s-u*x*s-v*n*m+t*x*m+u*n*h-t*f*h)*D,e[10]=(a*x*s-v*o*s+v*n*l-t*x*l-a*n*h+t*o*h)*D,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*m-t*o*m)*D,e[12]=X*D,e[13]=(u*x*r-v*f*r+v*n*d-t*x*d-u*n*p+t*f*p)*D,e[14]=(v*o*r-a*x*r-v*n*c+t*x*c+a*n*p-t*o*p)*D,e[15]=(a*f*r-u*o*r+u*n*c-t*f*c-a*n*d+t*o*d)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,v=s*f,x=a*u,p=a*f,h=o*f,C=c*l,b=c*u,L=c*f,X=n.x,U=n.y,D=n.z;return r[0]=(1-(x+h))*X,r[1]=(m+L)*X,r[2]=(v-b)*X,r[3]=0,r[4]=(m-L)*U,r[5]=(1-(d+h))*U,r[6]=(p+C)*U,r[7]=0,r[8]=(v+b)*D,r[9]=(p-C)*D,r[10]=(1-(d+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Bi.set(r[0],r[1],r[2]).length();const a=Bi.set(r[4],r[5],r[6]).length(),o=Bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const l=1/s,u=1/a,f=1/o;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,t.setFromRotationMatrix(hn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=kn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,v;if(o===kn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Is)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=kn){const c=this.elements,l=1/(t-e),u=1/(n-r),f=1/(a-s),d=(t+e)*l,m=(n+r)*u;let v,x;if(o===kn)v=(a+s)*f,x=-2*f;else if(o===Is)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new H,hn=new Tt,Bd=new H(0,0,0),zd=new H(1,1,1),Zn=new H,Qr=new H,en=new H,nc=new Tt,ic=new wi;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ic.setFromEuler(this),this.setFromQuaternion(ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hd=0;const rc=new H,zi=new wi,Nn=new Tt,es=new H,xr=new H,kd=new H,Vd=new wi,sc=new H(1,0,0),ac=new H(0,1,0),oc=new H(0,0,1),cc={type:"added"},Gd={type:"removed"},Hi={type:"childadded",child:null},ga={type:"childremoved",child:null};class Xt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new H,t=new Wn,n=new wi,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(oc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(xr,es,this.up):Nn.lookAt(es,xr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gd),ga.child=e,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new H(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new H,Fn=new H,_a=new H,On=new H,ki=new H,Vi=new H,lc=new H,va=new H,ya=new H,xa=new H;class En{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),Fn.subVectors(n,t),_a.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Fn),c=pn.dot(_a),l=Fn.dot(Fn),u=Fn.dot(_a),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*u)*d,v=(a*u-o*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),Fn.subVectors(e,t),pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return En.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ki.subVectors(r,n),Vi.subVectors(s,n),va.subVectors(e,n);const c=ki.dot(va),l=Vi.dot(va);if(c<=0&&l<=0)return t.copy(n);ya.subVectors(e,r);const u=ki.dot(ya),f=Vi.dot(ya);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(ki,a);xa.subVectors(e,s);const m=ki.dot(xa),v=Vi.dot(xa);if(v>=0&&m<=v)return t.copy(s);const x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Vi,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return lc.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(lc,o);const h=1/(p+x+d);return a=x*h,o=d*h,t.copy(n).addScaledVector(ki,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ut.workingColorSpace){if(e=wo(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Sa(a,s,e+1/3),this.g=Sa(a,s,e),this.b=Sa(a,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return ut.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ht(Bt.r*255,0,255))*65536+Math.round(Ht(Bt.g*255,0,255))*256+Math.round(Ht(Bt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Sn){ut.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,r=Bt.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ts);const n=wr(Jn.h,ts.h,t),r=wr(Jn.s,ts.s,t),s=wr(Jn.l,ts.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new at;at.NAMES=El;let Wd=0;class fr extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Ji,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class bl extends fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new H,ns=new Ke;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class Tl extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rn extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xd=0;const sn=new Tt,Ma=new Xt,Gi=new H,tn=new ur,Sr=new ur,Lt=new H;class ln extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yl(e)?Al:Tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(tn.min,Sr.min),tn.expandByPoint(Lt),Lt.addVectors(tn.max,Sr.max),tn.expandByPoint(Lt)):(tn.expandByPoint(Sr.min),tn.expandByPoint(Sr.max))}tn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Lt.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(e,l),Lt.add(Gi)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new H,c[z]=new H;const l=new H,u=new H,f=new H,d=new Ke,m=new Ke,v=new Ke,x=new H,p=new H;function h(z,A,E){l.fromBufferAttribute(n,z),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,E),d.fromBufferAttribute(s,z),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,E),u.sub(l),f.sub(l),m.sub(d),v.sub(d);const w=1/(m.x*v.y-v.x*m.y);isFinite(w)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(w),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(w),o[z].add(x),o[A].add(x),o[E].add(x),c[z].add(p),c[A].add(p),c[E].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,A=C.length;z<A;++z){const E=C[z],w=E.start,ee=E.count;for(let q=w,R=w+ee;q<R;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new H,L=new H,X=new H,U=new H;function D(z){X.fromBufferAttribute(r,z),U.copy(X);const A=o[z];b.copy(A),b.sub(X.multiplyScalar(X.dot(A))).normalize(),L.crossVectors(U,A);const w=L.dot(c[z])<0?-1:1;a.setXYZW(z,b.x,b.y,b.z,w)}for(let z=0,A=C.length;z<A;++z){const E=C[z],w=E.start,ee=E.count;for(let q=w,R=w+ee;q<R;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,u=new H,f=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,v=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let h=0;h<u;h++)d[v++]=l[m++]}return new cn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new Tt,_i=new Hs,is=new Dr,fc=new H,Wi=new H,Xi=new H,Yi=new H,Ea=new H,rs=new H,ss=new Ke,as=new Ke,os=new Ke,dc=new H,hc=new H,pc=new H,cs=new H,ls=new H;class Tn extends Xt{constructor(e=new ln,t=new bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Ea.fromBufferAttribute(f,e),a?rs.addScaledVector(Ea,u):rs.addScaledVector(Ea.sub(t),u))}t.add(rs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(is.containsPoint(_i.origin)===!1&&(_i.intersectSphere(is,fc)===null||_i.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(uc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(uc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const p=d[v],h=a[p.materialIndex],C=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let L=C,X=b;L<X;L+=3){const U=o.getX(L),D=o.getX(L+1),z=o.getX(L+2);r=us(this,h,e,n,l,u,f,U,D,z),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){const C=o.getX(p),b=o.getX(p+1),L=o.getX(p+2);r=us(this,a,e,n,l,u,f,C,b,L),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const p=d[v],h=a[p.materialIndex],C=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let L=C,X=b;L<X;L+=3){const U=L,D=L+1,z=L+2;r=us(this,h,e,n,l,u,f,U,D,z),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=v,h=x;p<h;p+=3){const C=p,b=p+1,L=p+2;r=us(this,a,e,n,l,u,f,C,b,L),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Yd(i,e,t,n,r,s,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ci,o),c===null)return null;ls.copy(o),ls.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ls);return l<t.near||l>t.far?null:{distance:l,point:ls.clone(),object:i}}function us(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,Yi);const u=Yd(i,e,t,n,Wi,Xi,Yi,cs);if(u){r&&(ss.fromBufferAttribute(r,o),as.fromBufferAttribute(r,c),os.fromBufferAttribute(r,l),u.uv=En.getInterpolation(cs,Wi,Xi,Yi,ss,as,os,new Ke)),s&&(ss.fromBufferAttribute(s,o),as.fromBufferAttribute(s,c),os.fromBufferAttribute(s,l),u.uv1=En.getInterpolation(cs,Wi,Xi,Yi,ss,as,os,new Ke)),a&&(dc.fromBufferAttribute(a,o),hc.fromBufferAttribute(a,c),pc.fromBufferAttribute(a,l),u.normal=En.getInterpolation(cs,Wi,Xi,Yi,dc,hc,pc,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new H,materialIndex:0};En.getNormal(Wi,Xi,Yi,f.normal),u.face=f}return u}class Ir extends ln{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function v(x,p,h,C,b,L,X,U,D,z,A){const E=L/D,w=X/z,ee=L/2,q=X/2,R=U/2,N=D+1,k=z+1;let Q=0,Y=0;const ne=new H;for(let he=0;he<k;he++){const ve=he*w-q;for(let Xe=0;Xe<N;Xe++){const Ie=Xe*E-ee;ne[x]=Ie*C,ne[p]=ve*b,ne[h]=R,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[p]=0,ne[h]=U>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Xe/D),f.push(1-he/z),Q+=1}}for(let he=0;he<z;he++)for(let ve=0;ve<D;ve++){const Xe=d+ve+N*he,Ie=d+ve+N*(he+1),$=d+(ve+1)+N*(he+1),fe=d+(ve+1)+N*he;c.push(Xe,Ie,fe),c.push(Ie,$,fe),Y+=6}o.addGroup(m,Y,A),m+=Y,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=sr(i[t]);for(const r in n)e[r]=n[r]}return e}function $d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const jd={clone:sr,merge:Wt};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cl extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new H,mc=new Ke,gc=new Ke;class on extends Cl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,mc,gc),t.subVectors(gc,mc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,ji=1;class Zd extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on($i,ji,e,t);r.layers=this.layers,this.add(r);const s=new on($i,ji,e,t);s.layers=this.layers,this.add(s);const a=new on($i,ji,e,t);a.layers=this.layers,this.add(a);const o=new on($i,ji,e,t);o.layers=this.layers,this.add(o);const c=new on($i,ji,e,t);c.layers=this.layers,this.add(c);const l=new on($i,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Rl extends Zt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Rl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ir(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ii});s.uniforms.tEquirect.value=t;const a=new Tn(r,s),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=mn),new Zd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ba=new H,Qd=new H,eh=new Je;class ti{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ba.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eh.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Dr,fs=new H;class Co{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],x=r[10],p=r[11],h=r[12],C=r[13],b=r[14],L=r[15];if(n[0].setComponents(c-s,d-l,p-m,L-h).normalize(),n[1].setComponents(c+s,d+l,p+m,L+h).normalize(),n[2].setComponents(c+a,d+u,p+v,L+C).normalize(),n[3].setComponents(c-a,d-u,p-v,L-C).normalize(),n[4].setComponents(c-o,d-f,p-x,L-b).normalize(),t===kn)n[5].setComponents(c+o,d+f,p+x,L+b).normalize();else if(t===Is)n[5].setComponents(o,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function th(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,o),f.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let m=0,v=d.length;m<v;m++){const x=d[m];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}f.count!==-1&&(i.bufferSubData(l,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Ur extends ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,m=[],v=[],x=[],p=[];for(let h=0;h<u;h++){const C=h*d-a;for(let b=0;b<l;b++){const L=b*f-s;v.push(L,-C,0),x.push(0,0,1),p.push(b/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let C=0;C<o;C++){const b=C+l*h,L=C+l*(h+1),X=C+1+l*(h+1),U=C+1+l*h;m.push(b,L,U),m.push(L,X,U)}this.setIndex(m),this.setAttribute("position",new rn(v,3)),this.setAttribute("normal",new rn(x,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
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
#endif`,sh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
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
#endif`,fh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dh=`vec3 transformed = vec3( position );
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$h=`uniform bool receiveShadow;
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
#endif`,jh=`#ifdef USE_ENVMAP
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
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,dp=`float metalnessFactor = metalness;
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
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
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
}`,Ze={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:rh,alphamap_pars_fragment:sh,alphatest_fragment:ah,alphatest_pars_fragment:oh,aomap_fragment:ch,aomap_pars_fragment:lh,batching_pars_vertex:uh,batching_vertex:fh,begin_vertex:dh,beginnormal_vertex:hh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:gh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:xh,color_fragment:Sh,color_pars_fragment:Mh,color_pars_vertex:Eh,color_vertex:bh,common:Th,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:wh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Ih,envmap_fragment:Uh,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:jh,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Hh,fog_fragment:kh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Gh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:Yh,lights_pars_begin:$h,lights_toon_fragment:qh,lights_toon_pars_fragment:Kh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Jh,lights_physical_fragment:Qh,lights_physical_pars_fragment:ep,lights_fragment_begin:tp,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:cp,map_pars_fragment:lp,map_particle_fragment:up,map_particle_pars_fragment:fp,metalnessmap_fragment:dp,metalnessmap_pars_fragment:hp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:vp,normal_fragment_begin:yp,normal_fragment_maps:xp,normal_pars_fragment:Sp,normal_pars_vertex:Mp,normal_vertex:Ep,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Cp,opaque_fragment:Rp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Ip,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:Hp,skinbase_vertex:kp,skinning_pars_vertex:Vp,skinning_vertex:Gp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:Yp,tonemapping_fragment:$p,tonemapping_pars_fragment:jp,transmission_fragment:qp,transmission_pars_fragment:Kp,uv_pars_fragment:Zp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:em,background_vert:tm,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:rm,cube_vert:sm,cube_frag:am,depth_vert:om,depth_frag:cm,distanceRGBA_vert:lm,distanceRGBA_frag:um,equirect_vert:fm,equirect_frag:dm,linedashed_vert:hm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:vm,meshmatcap_vert:ym,meshmatcap_frag:xm,meshnormal_vert:Sm,meshnormal_frag:Mm,meshphong_vert:Em,meshphong_frag:bm,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:wm,meshtoon_frag:Cm,points_vert:Rm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Im,sprite_frag:Um},_e={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Mn={basic:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Wt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Wt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new at(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Wt([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Wt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Wt([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Wt([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Wt([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Wt([_e.lights,_e.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Mn.physical={uniforms:Wt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ds={r:0,b:0,g:0},yi=new Wn,Nm=new Tt;function Fm(i,e,t,n,r,s,a){const o=new at(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function v(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?t:e).get(b)),b}function x(C){let b=!1;const L=v(C);L===null?h(o,c):L&&L.isColor&&(h(L,1),b=!0);const X=i.xr.getEnvironmentBlendMode();X==="additive"?n.buffers.color.setClear(0,0,0,1,a):X==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(C,b){const L=v(b);L&&(L.isCubeTexture||L.mapping===Bs)?(u===void 0&&(u=new Tn(new Ir(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:sr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(X,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(b.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(yi)),u.material.toneMapped=ut.getTransfer(L.colorSpace)!==gt,(f!==L||d!==L.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,m=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Tn(new Ur(2,2),new Cn({name:"BackgroundMaterial",uniforms:sr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ut.getTransfer(L.colorSpace)!==gt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=L,d=L.version,m=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function h(C,b){C.getRGB(ds,wl(i)),n.buffers.color.setClear(ds.r,ds.g,ds.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(C,b=1){o.set(C),c=b,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,h(o,c)},render:x,addToRenderList:p}}function Om(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(E,w,ee,q,R){let N=!1;const k=f(q,ee,w);s!==k&&(s=k,l(s.object)),N=m(E,q,ee,R),N&&v(E,q,ee,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,L(E,w,ee,q),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function f(E,w,ee){const q=ee.wireframe===!0;let R=n[E.id];R===void 0&&(R={},n[E.id]=R);let N=R[w.id];N===void 0&&(N={},R[w.id]=N);let k=N[q];return k===void 0&&(k=d(c()),N[q]=k),k}function d(E){const w=[],ee=[],q=[];for(let R=0;R<t;R++)w[R]=0,ee[R]=0,q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:ee,attributeDivisors:q,object:E,attributes:{},index:null}}function m(E,w,ee,q){const R=s.attributes,N=w.attributes;let k=0;const Q=ee.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const he=R[Y];let ve=N[Y];if(ve===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;k++}return s.attributesNum!==k||s.index!==q}function v(E,w,ee,q){const R={},N=w.attributes;let k=0;const Q=ee.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let he=N[Y];he===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(he=E.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),R[Y]=ve,k++}s.attributes=R,s.attributesNum=k,s.index=q}function x(){const E=s.newAttributes;for(let w=0,ee=E.length;w<ee;w++)E[w]=0}function p(E){h(E,0)}function h(E,w){const ee=s.newAttributes,q=s.enabledAttributes,R=s.attributeDivisors;ee[E]=1,q[E]===0&&(i.enableVertexAttribArray(E),q[E]=1),R[E]!==w&&(i.vertexAttribDivisor(E,w),R[E]=w)}function C(){const E=s.newAttributes,w=s.enabledAttributes;for(let ee=0,q=w.length;ee<q;ee++)w[ee]!==E[ee]&&(i.disableVertexAttribArray(ee),w[ee]=0)}function b(E,w,ee,q,R,N,k){k===!0?i.vertexAttribIPointer(E,w,ee,R,N):i.vertexAttribPointer(E,w,ee,q,R,N)}function L(E,w,ee,q){x();const R=q.attributes,N=ee.getAttributes(),k=w.defaultAttributeValues;for(const Q in N){const Y=N[Q];if(Y.location>=0){let ne=R[Q];if(ne===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),ne!==void 0){const he=ne.normalized,ve=ne.itemSize,Xe=e.get(ne);if(Xe===void 0)continue;const Ie=Xe.buffer,$=Xe.type,fe=Xe.bytesPerElement,Ee=$===i.INT||$===i.UNSIGNED_INT||ne.gpuType===xo;if(ne.isInterleavedBufferAttribute){const Me=ne.data,Ve=Me.stride,Ye=ne.offset;if(Me.isInstancedInterleavedBuffer){for(let je=0;je<Y.locationSize;je++)h(Y.location+je,Me.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let je=0;je<Y.locationSize;je++)p(Y.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let je=0;je<Y.locationSize;je++)b(Y.location+je,ve/Y.locationSize,$,he,Ve*fe,(Ye+ve/Y.locationSize*je)*fe,Ee)}else{if(ne.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)h(Y.location+Me,ne.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Me=0;Me<Y.locationSize;Me++)b(Y.location+Me,ve/Y.locationSize,$,he,ve*fe,ve/Y.locationSize*Me*fe,Ee)}}else if(k!==void 0){const he=k[Q];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Y.location,he);break;case 3:i.vertexAttrib3fv(Y.location,he);break;case 4:i.vertexAttrib4fv(Y.location,he);break;default:i.vertexAttrib1fv(Y.location,he)}}}}C()}function X(){z();for(const E in n){const w=n[E];for(const ee in w){const q=w[ee];for(const R in q)u(q[R].object),delete q[R];delete w[ee]}delete n[E]}}function U(E){if(n[E.id]===void 0)return;const w=n[E.id];for(const ee in w){const q=w[ee];for(const R in q)u(q[R].object),delete q[R];delete w[ee]}delete n[E.id]}function D(E){for(const w in n){const ee=n[w];if(ee[E.id]===void 0)continue;const q=ee[E.id];for(const R in q)u(q[R].object),delete q[R];delete ee[E.id]}}function z(){A(),a=!0,s!==r&&(s=r,l(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:A,dispose:X,releaseStatesOfGeometry:U,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:p,disableUnusedAttributes:C}}function Bm(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,n,1)}function c(l,u,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=u[x];for(let x=0;x<d.length;x++)t.update(v,n,d[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(U){return!(U!==nn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const D=U===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Vn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==gn&&!D)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,X=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:L,maxSamples:X}}function Hm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ti,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const C=s?0:n,b=C*4;let L=h.clippingState||null;c.value=L,L=u(v,d,b,m);for(let X=0;X!==b;++X)L[X]=t[X];h.clippingState=L,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,v){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,v!==!0||p===null){const h=m+x*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,L=m;b!==x;++b,L+=4)a.copy(f[b]).applyMatrix4(C,o),a.normal.toArray(p,L),p[L+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function km(i){let e=new WeakMap;function t(a,o){return o===za?a.mapping=tr:o===Ha&&(a.mapping=nr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===Ha)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Jd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ll extends Cl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,_c=[.125,.215,.35,.446,.526,.582],Ei=20,Ta=new Ll,vc=new at;let Aa=null,wa=0,Ca=0,Ra=!1;const Si=(1+Math.sqrt(5))/2,qi=1/Si,yc=[new H(-Si,qi,0),new H(Si,qi,0),new H(-qi,0,Si),new H(qi,0,Si),new H(0,Si,-qi),new H(0,Si,qi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Aa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,wa,Ca),this._renderer.xr.enabled=Ra,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Lr,format:nn,colorSpace:ui,depthBuffer:!1},r=Sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(s)),this._blurMaterial=Gm(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,r){const o=new on(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vc),u.toneMapping=ri,u.autoClear=!1;const m=new bl({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new Tn(new Ir,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(vc),x=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):C===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const b=this._cubeSize;hs(r,C*b,h>2?b:0,b,b),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===tr||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;hs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yc[(r-s-1)%yc.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Tn(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),x=s/v,p=isFinite(s)?1+Math.floor(u*x):Ei;p>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const h=[];let C=0;for(let D=0;D<Ei;++D){const z=D/x,A=Math.exp(-z*z/2);h.push(A),D===0?C+=A:D<p&&(C+=2*A)}for(let D=0;D<h.length;D++)h[D]=h[D]/C;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-n;const L=this._sizeLods[r],X=3*L*(r>b-Zi?r-b+Zi:0),U=4*(this._cubeSize-L);hs(t,X,U,3*L,2*L),c.setRenderTarget(t),c.render(f,Ta)}}function Vm(i){const e=[],t=[],n=[];let r=i;const s=i-Zi+1+_c.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Zi?c=_c[a-i+Zi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,x=3,p=2,h=1,C=new Float32Array(x*v*m),b=new Float32Array(p*v*m),L=new Float32Array(h*v*m);for(let U=0;U<m;U++){const D=U%3*2/3-1,z=U>2?0:-1,A=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];C.set(A,x*v*U),b.set(d,p*v*U);const E=[U,U,U,U,U,U];L.set(E,h*v*U)}const X=new ln;X.setAttribute("position",new cn(C,x)),X.setAttribute("uv",new cn(b,p)),X.setAttribute("faceIndex",new cn(L,h)),e.push(X),r>Zi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sc(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gm(i,e,t){const n=new Float32Array(Ei),r=new H(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Mc(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ec(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

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
	`}function Wm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===za||c===Ha,u=c===tr||c===nr;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xc(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new xc(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ym(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,h=x.length;p<h;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const x=m[v];for(let p=0,h=x.length;p<h;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const C=m.array;x=m.version;for(let b=0,L=C.length;b<L;b+=3){const X=C[b+0],U=C[b+1],D=C[b+2];d.push(X,U,U,D,D,X)}}else if(v!==void 0){const C=v.array;x=v.version;for(let b=0,L=C.length/3-1;b<L;b+=3){const X=b+0,U=b+1,D=b+2;d.push(X,U,U,D,D,X)}}else return;const p=new(yl(d)?Al:Tl)(d,1);p.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function $m(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function l(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,d*a,v),t.update(m,n,v))}function u(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];t.update(p,n,1)}function f(d,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/a,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,x,0,v);let h=0;for(let C=0;C<v;C++)h+=m[C];for(let C=0;C<x.length;C++)t.update(h,n,x[C])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function jm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qm(i,e,t){const n=new WeakMap,r=new Dt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let E=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var m=E;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let L=0;v===!0&&(L=1),x===!0&&(L=2),p===!0&&(L=3);let X=o.attributes.position.count*L,U=1;X>e.maxTextureSize&&(U=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const D=new Float32Array(X*U*4*f),z=new Sl(D,X,U,f);z.type=gn,z.needsUpdate=!0;const A=L*4;for(let w=0;w<f;w++){const ee=h[w],q=C[w],R=b[w],N=X*U*4*w;for(let k=0;k<ee.count;k++){const Q=k*A;v===!0&&(r.fromBufferAttribute(ee,k),D[N+Q+0]=r.x,D[N+Q+1]=r.y,D[N+Q+2]=r.z,D[N+Q+3]=0),x===!0&&(r.fromBufferAttribute(q,k),D[N+Q+4]=r.x,D[N+Q+5]=r.y,D[N+Q+6]=r.z,D[N+Q+7]=0),p===!0&&(r.fromBufferAttribute(R,k),D[N+Q+8]=r.x,D[N+Q+9]=r.y,D[N+Q+10]=r.z,D[N+Q+11]=R.itemSize===4?r.w:1)}}d={count:f,texture:z,size:new Ke(X,U)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const x=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Km(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Dl extends Zt{constructor(e,t,n,r,s,a,o,c,l,u=Qi){if(u!==Qi&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Qi&&(n=Ai),n===void 0&&u===rr&&(n=ir),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Il=new Zt,bc=new Dl(1,1),Ul=new Sl,Nl=new Fd,Fl=new Rl,Tc=[],Ac=[],wc=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Tc[r];if(s===void 0&&(s=new Float32Array(r),Tc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ks(i,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Pt(t,n)}}function ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),Pt(t,n)}}function ig(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Pt(t,n)}}function rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function cg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(bc.compareFunction=_l,s=bc):s=Il,t.setTexture2D(e||s,r)}function hg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nl,r)}function pg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fl,r)}function mg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ul,r)}function gg(i){switch(i){case 5126:return Zm;case 35664:return Jm;case 35665:return Qm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return rg;case 35667:case 35671:return sg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return cg;case 36294:return lg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(i,e){i.uniform1fv(this.addr,e)}function vg(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function yg(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function xg(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Sg(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mg(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Eg(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bg(i,e){i.uniform1iv(this.addr,e)}function Tg(i,e){i.uniform2iv(this.addr,e)}function Ag(i,e){i.uniform3iv(this.addr,e)}function wg(i,e){i.uniform4iv(this.addr,e)}function Cg(i,e){i.uniform1uiv(this.addr,e)}function Rg(i,e){i.uniform2uiv(this.addr,e)}function Pg(i,e){i.uniform3uiv(this.addr,e)}function Lg(i,e){i.uniform4uiv(this.addr,e)}function Dg(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Il,s[a])}function Ig(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nl,s[a])}function Ug(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Fl,s[a])}function Ng(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);Rt(n,s)||(i.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ul,s[a])}function Fg(i){switch(i){case 5126:return _g;case 35664:return vg;case 35665:return yg;case 35666:return xg;case 35674:return Sg;case 35675:return Mg;case 35676:return Eg;case 5124:case 35670:return bg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return wg;case 5125:return Cg;case 36294:return Rg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gg(t.type)}}class Bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Pc(i,e){i.seq.push(e),i.map[e.id]=e}function Hg(i,e,t){const n=i.name,r=n.length;for(Pa.lastIndex=0;;){const s=Pa.exec(n),a=Pa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Pc(t,l===void 0?new Og(o,i,e):new Bg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new zg(o),Pc(t,f)),t=f}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Hg(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const kg=37297;let Vg=0;function Gg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Wg(i){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(i);let n;switch(e===t?n="":e===Ds&&t===Ls?n="LinearDisplayP3ToLinearSRGB":e===Ls&&t===Ds&&(n="LinearSRGBToLinearDisplayP3"),i){case ui:case zs:return[n,"LinearTransferOETF"];case Sn:case Ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Dc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Gg(i.getShaderSource(e),a)}else return r}function Xg(i,e){const t=Wg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Yg(i,e){let t;switch(e){case jf:t="Linear";break;case qf:t="Reinhard";break;case Kf:t="OptimizedCineon";break;case Zf:t="ACESFilmic";break;case Qf:t="AgX";break;case ed:t="Neutral";break;case Jf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new H;function $g(){ut.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function qg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function br(i){return i!==""}function Ic(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Zg,Qg)}const Jg=new Map;function Qg(i,e){let t=Ze[e];if(t===void 0){const n=Jg.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return go(t)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(i){return i.replace(e_,t_)}function t_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function n_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function i_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function s_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Yf:e="ENVMAP_BLENDING_MIX";break;case $f:e="ENVMAP_BLENDING_ADD";break}return e}function a_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=n_(t),l=i_(t),u=r_(t),f=s_(t),d=a_(t),m=jg(t),v=qg(s),x=r.createProgram();let p,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(br).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(br).join(`
`),h.length>0&&(h+=`
`)):(p=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),h=[Fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ri?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=go(a),a=Ic(a,t),a=Uc(a,t),o=go(o),o=Ic(o,t),o=Uc(o,t),a=Nc(a),o=Nc(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=C+p+a,L=C+h+o,X=Lc(r,r.VERTEX_SHADER,b),U=Lc(r,r.FRAGMENT_SHADER,L);r.attachShader(x,X),r.attachShader(x,U),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function D(w){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(X).trim(),R=r.getShaderInfoLog(U).trim();let N=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,X,U);else{const Q=Dc(r,X,"vertex"),Y=Dc(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+ee+`
`+Q+`
`+Y)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||R==="")&&(k=!1);k&&(w.diagnostics={runnable:N,programLog:ee,vertexShader:{log:q,prefix:p},fragmentShader:{log:R,prefix:h}})}r.deleteShader(X),r.deleteShader(U),z=new As(r,x),A=Kg(r,x)}let z;this.getUniforms=function(){return z===void 0&&D(this),z};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,kg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=X,this.fragmentShader=U,this}let c_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new u_(e),t.set(e,n)),n}}class u_{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}}function f_(i,e,t,n,r,s,a){const o=new Ml,c=new l_,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return l.add(A),A===0?"uv":`uv${A}`}function p(A,E,w,ee,q){const R=ee.fog,N=q.geometry,k=A.isMeshStandardMaterial?ee.environment:null,Q=(A.isMeshStandardMaterial?t:e).get(A.envMap||k),Y=Q&&Q.mapping===Bs?Q.image.height:null,ne=v[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const he=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ve=he!==void 0?he.length:0;let Xe=0;N.morphAttributes.position!==void 0&&(Xe=1),N.morphAttributes.normal!==void 0&&(Xe=2),N.morphAttributes.color!==void 0&&(Xe=3);let Ie,$,fe,Ee;if(ne){const nt=Mn[ne];Ie=nt.vertexShader,$=nt.fragmentShader}else Ie=A.vertexShader,$=A.fragmentShader,c.update(A),fe=c.getVertexShaderID(A),Ee=c.getFragmentShaderID(A);const Me=i.getRenderTarget(),Ve=q.isInstancedMesh===!0,Ye=q.isBatchedMesh===!0,je=!!A.map,dt=!!A.matcap,I=!!Q,mt=!!A.aoMap,tt=!!A.lightMap,it=!!A.bumpMap,we=!!A.normalMap,_t=!!A.displacementMap,Ge=!!A.emissiveMap,We=!!A.metalnessMap,P=!!A.roughnessMap,S=A.anisotropy>0,K=A.clearcoat>0,se=A.dispersion>0,oe=A.iridescence>0,ie=A.sheen>0,Re=A.transmission>0,ge=S&&!!A.anisotropyMap,xe=K&&!!A.clearcoatMap,Pe=K&&!!A.clearcoatNormalMap,le=K&&!!A.clearcoatRoughnessMap,Se=oe&&!!A.iridescenceMap,Qe=oe&&!!A.iridescenceThicknessMap,Oe=ie&&!!A.sheenColorMap,me=ie&&!!A.sheenRoughnessMap,Ce=!!A.specularMap,ze=!!A.specularColorMap,ht=!!A.specularIntensityMap,y=Re&&!!A.transmissionMap,V=Re&&!!A.thicknessMap,G=!!A.gradientMap,J=!!A.alphaMap,ue=A.alphaTest>0,Le=!!A.alphaHash,He=!!A.extensions;let yt=ri;A.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(yt=i.toneMapping);const xt={shaderID:ne,shaderType:A.type,shaderName:A.name,vertexShader:Ie,fragmentShader:$,defines:A.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Ye,batchingColor:Ye&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ui,alphaToCoverage:!!A.alphaToCoverage,map:je,matcap:dt,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:Y,aoMap:mt,lightMap:tt,bumpMap:it,normalMap:we,displacementMap:d&&_t,emissiveMap:Ge,normalMapObjectSpace:we&&A.normalMapType===sd,normalMapTangentSpace:we&&A.normalMapType===rd,metalnessMap:We,roughnessMap:P,anisotropy:S,anisotropyMap:ge,clearcoat:K,clearcoatMap:xe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:le,dispersion:se,iridescence:oe,iridescenceMap:Se,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:Oe,sheenRoughnessMap:me,specularMap:Ce,specularColorMap:ze,specularIntensityMap:ht,transmission:Re,transmissionMap:y,thicknessMap:V,gradientMap:G,opaque:A.transparent===!1&&A.blending===Ji&&A.alphaToCoverage===!1,alphaMap:J,alphaTest:ue,alphaHash:Le,combine:A.combine,mapUv:je&&x(A.map.channel),aoMapUv:mt&&x(A.aoMap.channel),lightMapUv:tt&&x(A.lightMap.channel),bumpMapUv:it&&x(A.bumpMap.channel),normalMapUv:we&&x(A.normalMap.channel),displacementMapUv:_t&&x(A.displacementMap.channel),emissiveMapUv:Ge&&x(A.emissiveMap.channel),metalnessMapUv:We&&x(A.metalnessMap.channel),roughnessMapUv:P&&x(A.roughnessMap.channel),anisotropyMapUv:ge&&x(A.anisotropyMap.channel),clearcoatMapUv:xe&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(A.sheenRoughnessMap.channel),specularMapUv:Ce&&x(A.specularMap.channel),specularColorMapUv:ze&&x(A.specularColorMap.channel),specularIntensityMapUv:ht&&x(A.specularIntensityMap.channel),transmissionMapUv:y&&x(A.transmissionMap.channel),thicknessMapUv:V&&x(A.thicknessMap.channel),alphaMapUv:J&&x(A.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(we||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!N.attributes.uv&&(je||J),fog:!!R,useFog:A.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:je&&A.map.isVideoTexture===!0&&ut.getTransfer(A.map.colorSpace)===gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hn,flipSided:A.side===Kt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function h(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const w in A.defines)E.push(w),E.push(A.defines[w]);return A.isRawShaderMaterial===!1&&(C(E,A),b(E,A),E.push(i.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function C(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function b(A,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.transmission&&o.enable(14),E.sheen&&o.enable(15),E.opaque&&o.enable(16),E.pointsUvs&&o.enable(17),E.decodeVideoTexture&&o.enable(18),E.alphaToCoverage&&o.enable(19),A.push(o.mask)}function L(A){const E=v[A.type];let w;if(E){const ee=Mn[E];w=jd.clone(ee.uniforms)}else w=A.uniforms;return w}function X(A,E){let w;for(let ee=0,q=u.length;ee<q;ee++){const R=u[ee];if(R.cacheKey===E){w=R,++w.usedTimes;break}}return w===void 0&&(w=new o_(i,E,A,s),u.push(w)),w}function U(A){if(--A.usedTimes===0){const E=u.indexOf(A);u[E]=u[u.length-1],u.pop(),A.destroy()}}function D(A){c.remove(A)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:L,acquireProgram:X,releaseProgram:U,releaseShaderCache:D,programs:u,dispose:z}}function d_(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function h_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Oc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,m,v,x,p){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:p},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=x,h.group=p),e++,h}function o(f,d,m,v,x,p){const h=a(f,d,m,v,x,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(f,d,m,v,x,p){const h=a(f,d,m,v,x,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||h_),n.length>1&&n.sort(d||Oc),r.length>1&&r.sort(d||Oc)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function p_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Bc,i.set(n,[a])):r>=s.length?(a=new Bc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function m_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new at};break;case"SpotLight":t={position:new H,direction:new H,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function g_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let __=0;function v_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function y_(i){const e=new m_,t=g_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new Tt,a=new Tt;function o(l){let u=0,f=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,v=0,x=0,p=0,h=0,C=0,b=0,L=0,X=0,U=0,D=0;l.sort(v_);for(let A=0,E=l.length;A<E;A++){const w=l[A],ee=w.color,q=w.intensity,R=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=ee.r*q,f+=ee.g*q,d+=ee.b*q;else if(w.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(w.sh.coefficients[k],q);D++}else if(w.isDirectionalLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,Y=t.get(w);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=w.shadow.matrix,C++}n.directional[m]=k,m++}else if(w.isSpotLight){const k=e.get(w);k.position.setFromMatrixPosition(w.matrixWorld),k.color.copy(ee).multiplyScalar(q),k.distance=R,k.coneCos=Math.cos(w.angle),k.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),k.decay=w.decay,n.spot[x]=k;const Q=w.shadow;if(w.map&&(n.spotLightMap[X]=w.map,X++,Q.updateMatrices(w),w.castShadow&&U++),n.spotLightMatrix[x]=Q.matrix,w.castShadow){const Y=t.get(w);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=N,L++}x++}else if(w.isRectAreaLight){const k=e.get(w);k.color.copy(ee).multiplyScalar(q),k.halfWidth.set(w.width*.5,0,0),k.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=k,p++}else if(w.isPointLight){const k=e.get(w);if(k.color.copy(w.color).multiplyScalar(w.intensity),k.distance=w.distance,k.decay=w.decay,w.castShadow){const Q=w.shadow,Y=t.get(w);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[v]=Y,n.pointShadowMap[v]=N,n.pointShadowMatrix[v]=w.shadow.matrix,b++}n.point[v]=k,v++}else if(w.isHemisphereLight){const k=e.get(w);k.skyColor.copy(w.color).multiplyScalar(q),k.groundColor.copy(w.groundColor).multiplyScalar(q),n.hemi[h]=k,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const z=n.hash;(z.directionalLength!==m||z.pointLength!==v||z.spotLength!==x||z.rectAreaLength!==p||z.hemiLength!==h||z.numDirectionalShadows!==C||z.numPointShadows!==b||z.numSpotShadows!==L||z.numSpotMaps!==X||z.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=L+X-U,n.spotLightMap.length=X,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=D,z.directionalLength=m,z.pointLength=v,z.spotLength=x,z.rectAreaLength=p,z.hemiLength=h,z.numDirectionalShadows=C,z.numPointShadows=b,z.numSpotShadows=L,z.numSpotMaps=X,z.numLightProbes=D,n.version=__++)}function c(l,u){let f=0,d=0,m=0,v=0,x=0;const p=u.matrixWorldInverse;for(let h=0,C=l.length;h<C;h++){const b=l[h];if(b.isDirectionalLight){const L=n.directional[f];L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),f++}else if(b.isSpotLight){const L=n.spot[m];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const L=n.rectArea[v];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const L=n.point[d];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const L=n.hemi[x];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function zc(i){const e=new y_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function x_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new zc(i),e.set(r,[o])):s>=a.length?(o=new zc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class S_ extends fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E_=`void main() {
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
}`;function T_(i,e,t){let n=new Co;const r=new Ke,s=new Ke,a=new Dt,o=new S_({depthPacking:id}),c=new M_,l={},u=t.maxTextureSize,f={[ci]:Kt,[Kt]:ci,[Hn]:Hn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new ln;v.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let h=this.type;this.render=function(U,D,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const A=i.getRenderTarget(),E=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(ii),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=h!==Bn&&this.type===Bn,R=h===Bn&&this.type!==Bn;for(let N=0,k=U.length;N<k;N++){const Q=U[N],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const ne=Y.getFrameExtents();if(r.multiply(ne),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,Y.mapSize.y=s.y)),Y.map===null||q===!0||R===!0){const ve=this.type!==Bn?{minFilter:kt,magFilter:kt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gn(r.x,r.y,ve),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const he=Y.getViewportCount();for(let ve=0;ve<he;ve++){const Xe=Y.getViewport(ve);a.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),ee.viewport(a),Y.updateMatrices(Q,ve),n=Y.getFrustum(),L(D,z,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Bn&&C(Y,z),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(A,E,w)};function C(U,D){const z=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Gn(r.x,r.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(D,null,z,d,x,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(D,null,z,m,x,null)}function b(U,D,z,A){let E=null;const w=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(w!==void 0)E=w;else if(E=z.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ee=E.uuid,q=D.uuid;let R=l[ee];R===void 0&&(R={},l[ee]=R);let N=R[q];N===void 0&&(N=E.clone(),R[q]=N,D.addEventListener("dispose",X)),E=N}if(E.visible=D.visible,E.wireframe=D.wireframe,A===Bn?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:f[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ee=i.properties.get(E);ee.light=z}return E}function L(U,D,z,A,E){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&E===Bn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const q=e.update(U),R=U.material;if(Array.isArray(R)){const N=q.groups;for(let k=0,Q=N.length;k<Q;k++){const Y=N[k],ne=R[Y.materialIndex];if(ne&&ne.visible){const he=b(U,ne,A,E);U.onBeforeShadow(i,U,D,z,q,he,Y),i.renderBufferDirect(z,null,q,he,U,Y),U.onAfterShadow(i,U,D,z,q,he,Y)}}}else if(R.visible){const N=b(U,R,A,E);U.onBeforeShadow(i,U,D,z,q,N,null),i.renderBufferDirect(z,null,q,N,U,null),U.onAfterShadow(i,U,D,z,q,N,null)}}const ee=U.children;for(let q=0,R=ee.length;q<R;q++)L(ee[q],D,z,A,E)}function X(U){U.target.removeEventListener("dispose",X);for(const z in l){const A=l[z],E=U.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function A_(i){function e(){let y=!1;const V=new Dt;let G=null;const J=new Dt(0,0,0,0);return{setMask:function(ue){G!==ue&&!y&&(i.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){y=ue},setClear:function(ue,Le,He,yt,xt){xt===!0&&(ue*=yt,Le*=yt,He*=yt),V.set(ue,Le,He,yt),J.equals(V)===!1&&(i.clearColor(ue,Le,He,yt),J.copy(V))},reset:function(){y=!1,G=null,J.set(-1,0,0,0)}}}function t(){let y=!1,V=null,G=null,J=null;return{setTest:function(ue){ue?Ee(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(ue){V!==ue&&!y&&(i.depthMask(ue),V=ue)},setFunc:function(ue){if(G!==ue){switch(ue){case zf:i.depthFunc(i.NEVER);break;case Hf:i.depthFunc(i.ALWAYS);break;case kf:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Vf:i.depthFunc(i.EQUAL);break;case Gf:i.depthFunc(i.GEQUAL);break;case Wf:i.depthFunc(i.GREATER);break;case Xf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=ue}},setLocked:function(ue){y=ue},setClear:function(ue){J!==ue&&(i.clearDepth(ue),J=ue)},reset:function(){y=!1,V=null,G=null,J=null}}}function n(){let y=!1,V=null,G=null,J=null,ue=null,Le=null,He=null,yt=null,xt=null;return{setTest:function(nt){y||(nt?Ee(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(nt){V!==nt&&!y&&(i.stencilMask(nt),V=nt)},setFunc:function(nt,Mt,st){(G!==nt||J!==Mt||ue!==st)&&(i.stencilFunc(nt,Mt,st),G=nt,J=Mt,ue=st)},setOp:function(nt,Mt,st){(Le!==nt||He!==Mt||yt!==st)&&(i.stencilOp(nt,Mt,st),Le=nt,He=Mt,yt=st)},setLocked:function(nt){y=nt},setClear:function(nt){xt!==nt&&(i.clearStencil(nt),xt=nt)},reset:function(){y=!1,V=null,G=null,J=null,ue=null,Le=null,He=null,yt=null,xt=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},f=new WeakMap,d=[],m=null,v=!1,x=null,p=null,h=null,C=null,b=null,L=null,X=null,U=new at(0,0,0),D=0,z=!1,A=null,E=null,w=null,ee=null,q=null;const R=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),N=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),N=k>=2);let Y=null,ne={};const he=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Xe=new Dt().fromArray(he),Ie=new Dt().fromArray(ve);function $(y,V,G,J){const ue=new Uint8Array(4),Le=i.createTexture();i.bindTexture(y,Le),i.texParameteri(y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<G;He++)y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(V+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Le}const fe={};fe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Ee(i.DEPTH_TEST),s.setFunc(Rs),it(!1),we(Wo),Ee(i.CULL_FACE),mt(ii);function Ee(y){l[y]!==!0&&(i.enable(y),l[y]=!0)}function Me(y){l[y]!==!1&&(i.disable(y),l[y]=!1)}function Ve(y,V){return u[y]!==V?(i.bindFramebuffer(y,V),u[y]=V,y===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=V),y===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=V),!0):!1}function Ye(y,V){let G=d,J=!1;if(y){G=f.get(V),G===void 0&&(G=[],f.set(V,G));const ue=y.textures;if(G.length!==ue.length||G[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,He=ue.length;Le<He;Le++)G[Le]=i.COLOR_ATTACHMENT0+Le;G.length=ue.length,J=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,J=!0);J&&i.drawBuffers(G)}function je(y){return m!==y?(i.useProgram(y),m=y,!0):!1}const dt={[Mi]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[Ef]:i.FUNC_REVERSE_SUBTRACT};dt[bf]=i.MIN,dt[Tf]=i.MAX;const I={[Af]:i.ZERO,[wf]:i.ONE,[Cf]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Df]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[Lf]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Ff]:i.ONE_MINUS_CONSTANT_COLOR,[Of]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(y,V,G,J,ue,Le,He,yt,xt,nt){if(y===ii){v===!0&&(Me(i.BLEND),v=!1);return}if(v===!1&&(Ee(i.BLEND),v=!0),y!==Sf){if(y!==x||nt!==z){if((p!==Mi||b!==Mi)&&(i.blendEquation(i.FUNC_ADD),p=Mi,b=Mi),nt)switch(y){case Ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case Ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}h=null,C=null,L=null,X=null,U.set(0,0,0),D=0,x=y,z=nt}return}ue=ue||V,Le=Le||G,He=He||J,(V!==p||ue!==b)&&(i.blendEquationSeparate(dt[V],dt[ue]),p=V,b=ue),(G!==h||J!==C||Le!==L||He!==X)&&(i.blendFuncSeparate(I[G],I[J],I[Le],I[He]),h=G,C=J,L=Le,X=He),(yt.equals(U)===!1||xt!==D)&&(i.blendColor(yt.r,yt.g,yt.b,xt),U.copy(yt),D=xt),x=y,z=!1}function tt(y,V){y.side===Hn?Me(i.CULL_FACE):Ee(i.CULL_FACE);let G=y.side===Kt;V&&(G=!G),it(G),y.blending===Ji&&y.transparent===!1?mt(ii):mt(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),s.setFunc(y.depthFunc),s.setTest(y.depthTest),s.setMask(y.depthWrite),r.setMask(y.colorWrite);const J=y.stencilWrite;a.setTest(J),J&&(a.setMask(y.stencilWriteMask),a.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),a.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),Ge(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(y){A!==y&&(y?i.frontFace(i.CW):i.frontFace(i.CCW),A=y)}function we(y){y!==vf?(Ee(i.CULL_FACE),y!==E&&(y===Wo?i.cullFace(i.BACK):y===yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),E=y}function _t(y){y!==w&&(N&&i.lineWidth(y),w=y)}function Ge(y,V,G){y?(Ee(i.POLYGON_OFFSET_FILL),(ee!==V||q!==G)&&(i.polygonOffset(V,G),ee=V,q=G)):Me(i.POLYGON_OFFSET_FILL)}function We(y){y?Ee(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function P(y){y===void 0&&(y=i.TEXTURE0+R-1),Y!==y&&(i.activeTexture(y),Y=y)}function S(y,V,G){G===void 0&&(Y===null?G=i.TEXTURE0+R-1:G=Y);let J=ne[G];J===void 0&&(J={type:void 0,texture:void 0},ne[G]=J),(J.type!==y||J.texture!==V)&&(Y!==G&&(i.activeTexture(G),Y=G),i.bindTexture(y,V||fe[y]),J.type=y,J.texture=V)}function K(){const y=ne[Y];y!==void 0&&y.type!==void 0&&(i.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Pe(){try{i.texStorage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Oe(y){Xe.equals(y)===!1&&(i.scissor(y.x,y.y,y.z,y.w),Xe.copy(y))}function me(y){Ie.equals(y)===!1&&(i.viewport(y.x,y.y,y.z,y.w),Ie.copy(y))}function Ce(y,V){let G=c.get(V);G===void 0&&(G=new WeakMap,c.set(V,G));let J=G.get(y);J===void 0&&(J=i.getUniformBlockIndex(V,y.name),G.set(y,J))}function ze(y,V){const J=c.get(V).get(y);o.get(V)!==J&&(i.uniformBlockBinding(V,J,y.__bindingPointIndex),o.set(V,J))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Y=null,ne={},u={},f=new WeakMap,d=[],m=null,v=!1,x=null,p=null,h=null,C=null,b=null,L=null,X=null,U=new at(0,0,0),D=0,z=!1,A=null,E=null,w=null,ee=null,q=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Ee,disable:Me,bindFramebuffer:Ve,drawBuffers:Ye,useProgram:je,setBlending:mt,setMaterial:tt,setFlipSided:it,setCullFace:we,setLineWidth:_t,setPolygonOffset:Ge,setScissorTest:We,activeTexture:P,bindTexture:S,unbindTexture:K,compressedTexImage2D:se,compressedTexImage3D:oe,texImage2D:Se,texImage3D:Qe,updateUBOMapping:Ce,uniformBlockBinding:ze,texStorage2D:Pe,texStorage3D:le,texSubImage2D:ie,texSubImage3D:Re,compressedTexSubImage2D:ge,compressedTexSubImage3D:xe,scissor:Oe,viewport:me,reset:ht}}function Hc(i,e,t,n){const r=w_(n);switch(t){case ul:return i*e;case dl:return i*e;case hl:return i*e*2;case pl:return i*e/r.components*r.byteLength;case Eo:return i*e/r.components*r.byteLength;case ml:return i*e*2/r.components*r.byteLength;case bo:return i*e*2/r.components*r.byteLength;case fl:return i*e*3/r.components*r.byteLength;case nn:return i*e*4/r.components*r.byteLength;case To:return i*e*4/r.components*r.byteLength;case Ss:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Ga:case Xa:return Math.max(i,8)*Math.max(e,8)/2;case $a:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ts:case uo:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gl:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w_(i){switch(i){case Vn:case ol:return{byteLength:1,components:1};case Rr:case cl:case Lr:return{byteLength:2,components:1};case So:case Mo:return{byteLength:2,components:4};case Ai:case xo:case gn:return{byteLength:4,components:1};case ll:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function C_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return m?new OffscreenCanvas(P,S):Us("canvas")}function x(P,S,K){let se=1;const oe=We(P);if((oe.width>K||oe.height>K)&&(se=K/Math.max(oe.width,oe.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(se*oe.width),Re=Math.floor(se*oe.height);f===void 0&&(f=v(ie,Re));const ge=S?v(ie,Re):f;return ge.width=ie,ge.height=Re,ge.getContext("2d").drawImage(P,0,0,ie,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+Re+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==kt&&P.minFilter!==mn}function h(P){i.generateMipmap(P)}function C(P,S,K,se,oe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=S;if(S===i.RED&&(K===i.FLOAT&&(ie=i.R32F),K===i.HALF_FLOAT&&(ie=i.R16F),K===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.R8UI),K===i.UNSIGNED_SHORT&&(ie=i.R16UI),K===i.UNSIGNED_INT&&(ie=i.R32UI),K===i.BYTE&&(ie=i.R8I),K===i.SHORT&&(ie=i.R16I),K===i.INT&&(ie=i.R32I)),S===i.RG&&(K===i.FLOAT&&(ie=i.RG32F),K===i.HALF_FLOAT&&(ie=i.RG16F),K===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ie=i.RG8UI),K===i.UNSIGNED_SHORT&&(ie=i.RG16UI),K===i.UNSIGNED_INT&&(ie=i.RG32UI),K===i.BYTE&&(ie=i.RG8I),K===i.SHORT&&(ie=i.RG16I),K===i.INT&&(ie=i.RG32I)),S===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),S===i.RGBA){const Re=oe?Ps:ut.getTransfer(se);K===i.FLOAT&&(ie=i.RGBA32F),K===i.HALF_FLOAT&&(ie=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ie=Re===gt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(P,S){let K;return P?S===null||S===Ai||S===ir?K=i.DEPTH24_STENCIL8:S===gn?K=i.DEPTH32F_STENCIL8:S===Rr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===ir?K=i.DEPTH_COMPONENT24:S===gn?K=i.DEPTH_COMPONENT32F:S===Rr&&(K=i.DEPTH_COMPONENT16),K}function L(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function X(P){const S=P.target;S.removeEventListener("dispose",X),D(S),S.isVideoTexture&&u.delete(S)}function U(P){const S=P.target;S.removeEventListener("dispose",U),A(S)}function D(P){const S=n.get(P);if(S.__webglInit===void 0)return;const K=P.source,se=d.get(K);if(se){const oe=se[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&z(P),Object.keys(se).length===0&&d.delete(K)}n.remove(P)}function z(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const K=P.source,se=d.get(K);delete se[S.__cacheKey],a.memory.textures--}function A(P){const S=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let oe=0;oe<S.__webglFramebuffer[se].length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[se][oe]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=P.textures;for(let se=0,oe=K.length;se<oe;se++){const ie=n.get(K[se]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(K[se])}n.remove(P)}let E=0;function w(){E=0}function ee(){const P=E;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),E+=1,P}function q(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function R(P,S){const K=n.get(P);if(P.isVideoTexture&&_t(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(K,P,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function N(P,S){const K=n.get(P);if(P.version>0&&K.__version!==P.version){Ie(K,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function k(P,S){const K=n.get(P);if(P.version>0&&K.__version!==P.version){Ie(K,P,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function Q(P,S){const K=n.get(P);if(P.version>0&&K.__version!==P.version){$(K,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}const Y={[ka]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},ne={[kt]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},he={[ad]:i.NEVER,[dd]:i.ALWAYS,[od]:i.LESS,[_l]:i.LEQUAL,[cd]:i.EQUAL,[fd]:i.GEQUAL,[ld]:i.GREATER,[ud]:i.NOTEQUAL};function ve(P,S){if(S.type===gn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===aa||S.magFilter===$r||S.magFilter===Ti||S.minFilter===mn||S.minFilter===aa||S.minFilter===$r||S.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Y[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ne[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,he[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kt||S.minFilter!==$r&&S.minFilter!==Ti||S.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(P,S){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",X));const se=S.source;let oe=d.get(se);oe===void 0&&(oe={},d.set(se,oe));const ie=q(S);if(ie!==P.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),oe[ie].usedTimes++;const Re=oe[P.__cacheKey];Re!==void 0&&(oe[P.__cacheKey].usedTimes--,Re.usedTimes===0&&z(S)),P.__cacheKey=ie,P.__webglTexture=oe[ie].texture}return K}function Ie(P,S,K){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);const oe=Xe(P,S),ie=S.source;t.bindTexture(se,P.__webglTexture,i.TEXTURE0+K);const Re=n.get(ie);if(ie.version!==Re.__version||oe===!0){t.activeTexture(i.TEXTURE0+K);const ge=ut.getPrimaries(ut.workingColorSpace),xe=S.colorSpace===ni?null:ut.getPrimaries(S.colorSpace),Pe=S.colorSpace===ni||ge===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let le=x(S.image,!1,r.maxTextureSize);le=Ge(S,le);const Se=s.convert(S.format,S.colorSpace),Qe=s.convert(S.type);let Oe=C(S.internalFormat,Se,Qe,S.colorSpace,S.isVideoTexture);ve(se,S);let me;const Ce=S.mipmaps,ze=S.isVideoTexture!==!0,ht=Re.__version===void 0||oe===!0,y=ie.dataReady,V=L(S,le);if(S.isDepthTexture)Oe=b(S.format===rr,S.type),ht&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Oe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,Se,Qe,null));else if(S.isDataTexture)if(Ce.length>0){ze&&ht&&t.texStorage2D(i.TEXTURE_2D,V,Oe,Ce[0].width,Ce[0].height);for(let G=0,J=Ce.length;G<J;G++)me=Ce[G],ze?y&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,Se,Qe,me.data):t.texImage2D(i.TEXTURE_2D,G,Oe,me.width,me.height,0,Se,Qe,me.data);S.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(i.TEXTURE_2D,V,Oe,le.width,le.height),y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Se,Qe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,le.width,le.height,0,Se,Qe,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Oe,Ce[0].width,Ce[0].height,le.depth);for(let G=0,J=Ce.length;G<J;G++)if(me=Ce[G],S.format!==nn)if(Se!==null)if(ze){if(y)if(S.layerUpdates.size>0){const ue=Hc(me.width,me.height,S.format,S.type);for(const Le of S.layerUpdates){const He=me.data.subarray(Le*ue/me.data.BYTES_PER_ELEMENT,(Le+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,Le,me.width,me.height,1,Se,He,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,le.depth,Se,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Oe,me.width,me.height,le.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,le.depth,Se,Qe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Oe,me.width,me.height,le.depth,0,Se,Qe,me.data)}else{ze&&ht&&t.texStorage2D(i.TEXTURE_2D,V,Oe,Ce[0].width,Ce[0].height);for(let G=0,J=Ce.length;G<J;G++)me=Ce[G],S.format!==nn?Se!==null?ze?y&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,Se,me.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Oe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?y&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,me.width,me.height,Se,Qe,me.data):t.texImage2D(i.TEXTURE_2D,G,Oe,me.width,me.height,0,Se,Qe,me.data)}else if(S.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Oe,le.width,le.height,le.depth),y)if(S.layerUpdates.size>0){const G=Hc(le.width,le.height,S.format,S.type);for(const J of S.layerUpdates){const ue=le.data.subarray(J*G/le.data.BYTES_PER_ELEMENT,(J+1)*G/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,le.width,le.height,1,Se,Qe,ue)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Qe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,Se,Qe,le.data);else if(S.isData3DTexture)ze?(ht&&t.texStorage3D(i.TEXTURE_3D,V,Oe,le.width,le.height,le.depth),y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Qe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,Se,Qe,le.data);else if(S.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(i.TEXTURE_2D,V,Oe,le.width,le.height);else{let G=le.width,J=le.height;for(let ue=0;ue<V;ue++)t.texImage2D(i.TEXTURE_2D,ue,Oe,G,J,0,Se,Qe,null),G>>=1,J>>=1}}else if(Ce.length>0){if(ze&&ht){const G=We(Ce[0]);t.texStorage2D(i.TEXTURE_2D,V,Oe,G.width,G.height)}for(let G=0,J=Ce.length;G<J;G++)me=Ce[G],ze?y&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,Se,Qe,me):t.texImage2D(i.TEXTURE_2D,G,Oe,Se,Qe,me);S.generateMipmaps=!1}else if(ze){if(ht){const G=We(le);t.texStorage2D(i.TEXTURE_2D,V,Oe,G.width,G.height)}y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Qe,le)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Se,Qe,le);p(S)&&h(se),Re.__version=ie.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $(P,S,K){if(S.image.length!==6)return;const se=Xe(P,S),oe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+K);const ie=n.get(oe);if(oe.version!==ie.__version||se===!0){t.activeTexture(i.TEXTURE0+K);const Re=ut.getPrimaries(ut.workingColorSpace),ge=S.colorSpace===ni?null:ut.getPrimaries(S.colorSpace),xe=S.colorSpace===ni||Re===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let J=0;J<6;J++)!Pe&&!le?Se[J]=x(S.image[J],!0,r.maxCubemapSize):Se[J]=le?S.image[J].image:S.image[J],Se[J]=Ge(S,Se[J]);const Qe=Se[0],Oe=s.convert(S.format,S.colorSpace),me=s.convert(S.type),Ce=C(S.internalFormat,Oe,me,S.colorSpace),ze=S.isVideoTexture!==!0,ht=ie.__version===void 0||se===!0,y=oe.dataReady;let V=L(S,Qe);ve(i.TEXTURE_CUBE_MAP,S);let G;if(Pe){ze&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ce,Qe.width,Qe.height);for(let J=0;J<6;J++){G=Se[J].mipmaps;for(let ue=0;ue<G.length;ue++){const Le=G[ue];S.format!==nn?Oe!==null?ze?y&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Le.width,Le.height,Oe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ce,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,Le.width,Le.height,Oe,me,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,Ce,Le.width,Le.height,0,Oe,me,Le.data)}}}else{if(G=S.mipmaps,ze&&ht){G.length>0&&V++;const J=We(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,V,Ce,J.width,J.height)}for(let J=0;J<6;J++)if(le){ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Se[J].width,Se[J].height,Oe,me,Se[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,Se[J].width,Se[J].height,0,Oe,me,Se[J].data);for(let ue=0;ue<G.length;ue++){const He=G[ue].image[J].image;ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,He.width,He.height,Oe,me,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ce,He.width,He.height,0,Oe,me,He.data)}}else{ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,me,Se[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ce,Oe,me,Se[J]);for(let ue=0;ue<G.length;ue++){const Le=G[ue];ze?y&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Oe,me,Le.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,Ce,Oe,me,Le.image[J])}}}p(S)&&h(i.TEXTURE_CUBE_MAP),ie.__version=oe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function fe(P,S,K,se,oe,ie){const Re=s.convert(K.format,K.colorSpace),ge=s.convert(K.type),xe=C(K.internalFormat,Re,ge,K.colorSpace);if(!n.get(S).__hasExternalTextures){const le=Math.max(1,S.width>>ie),Se=Math.max(1,S.height>>ie);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,xe,le,Se,S.depth,0,Re,ge,null):t.texImage2D(oe,ie,xe,le,Se,0,Re,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),we(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,oe,n.get(K).__webglTexture,0,it(S)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,oe,n.get(K).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(P,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const se=S.depthTexture,oe=se&&se.isDepthTexture?se.type:null,ie=b(S.stencilBuffer,oe),Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=it(S);we(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ie,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,P)}else{const se=S.textures;for(let oe=0;oe<se.length;oe++){const ie=se[oe],Re=s.convert(ie.format,ie.colorSpace),ge=s.convert(ie.type),xe=C(ie.internalFormat,Re,ge,ie.colorSpace),Pe=it(S);K&&we(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,xe,S.width,S.height):we(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R(S.depthTexture,0);const se=n.get(S.depthTexture).__webglTexture,oe=it(S);if(S.depthTexture.format===Qi)we(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(S.depthTexture.format===rr)we(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(P){const S=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Me(S.__webglFramebuffer,P)}else if(K){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]=i.createRenderbuffer(),Ee(S.__webglDepthbuffer[se],P,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ee(S.__webglDepthbuffer,P,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(P,S,K){const se=n.get(P);S!==void 0&&fe(se.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ve(P)}function je(P){const S=P.texture,K=n.get(P),se=n.get(S);P.addEventListener("dispose",U);const oe=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,a.memory.textures++),ie){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let xe=0;xe<S.mipmaps.length;xe++)K.__webglFramebuffer[ge][xe]=i.createFramebuffer()}else K.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)K.__webglFramebuffer[ge]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Re)for(let ge=0,xe=oe.length;ge<xe;ge++){const Pe=n.get(oe[ge]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&we(P)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const xe=oe[ge];K.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const Pe=s.convert(xe.format,xe.colorSpace),le=s.convert(xe.type),Se=C(xe.internalFormat,Pe,le,xe.colorSpace,P.isXRRenderTarget===!0),Qe=it(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Se,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),ve(i.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)fe(K.__webglFramebuffer[ge][xe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else fe(K.__webglFramebuffer[ge],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);p(S)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ge=0,xe=oe.length;ge<xe;ge++){const Pe=oe[ge],le=n.get(Pe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),ve(i.TEXTURE_2D,Pe),fe(K.__webglFramebuffer,P,Pe,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),p(Pe)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),ve(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)fe(K.__webglFramebuffer[xe],P,S,i.COLOR_ATTACHMENT0,ge,xe);else fe(K.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ge,0);p(S)&&h(ge),t.unbindTexture()}P.depthBuffer&&Ve(P)}function dt(P){const S=P.textures;for(let K=0,se=S.length;K<se;K++){const oe=S[K];if(p(oe)){const ie=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(oe).__webglTexture;t.bindTexture(ie,Re),h(ie),t.unbindTexture()}}}const I=[],mt=[];function tt(P){if(P.samples>0){if(we(P)===!1){const S=P.textures,K=P.width,se=P.height;let oe=i.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(P),ge=S.length>1;if(ge)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Pe=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,K,se,0,0,K,se,oe,i.NEAREST),c===!0&&(I.length=0,mt.length=0,I.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(I.push(ie),mt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Pe=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function it(P){return Math.min(r.maxSamples,P.samples)}function we(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(P){const S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Ge(P,S){const K=P.colorSpace,se=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==ui&&K!==ni&&(ut.getTransfer(K)===gt?(se!==nn||oe!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=w,this.setTexture2D=R,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Ye,this.setupRenderTarget=je,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=we}function R_(i,e){function t(n,r=ni){let s;const a=ut.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.BYTE;if(n===cl)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Lr)return i.HALF_FLOAT;if(n===ul)return i.ALPHA;if(n===fl)return i.RGB;if(n===nn)return i.RGBA;if(n===dl)return i.LUMINANCE;if(n===hl)return i.LUMINANCE_ALPHA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===ml)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===Ss||n===Ms||n===Es||n===bs)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ga||n===Wa||n===Xa||n===Ya)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===ja||n===qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$a||n===ja)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qa)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ka||n===Za||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===co||n===lo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ka)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===uo||n===fo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ts)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===ho||n===po||n===mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ts)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class P_ extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ms extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),h=this._getHandJoint(l,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const D_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:D_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends Ci{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,v=null;const x=new U_,p=t.getContextAttributes();let h=null,C=null;const b=[],L=[],X=new Ke;let U=null;const D=new on;D.layers.enable(1),D.viewport=new Dt;const z=new on;z.layers.enable(2),z.viewport=new Dt;const A=[D,z],E=new P_;E.layers.enable(1),E.layers.enable(2);let w=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=b[$];return fe===void 0&&(fe=new La,b[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=b[$];return fe===void 0&&(fe=new La,b[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=b[$];return fe===void 0&&(fe=new La,b[$]=fe),fe.getHandSpace()};function q($){const fe=L.indexOf($.inputSource);if(fe===-1)return;const Ee=b[fe];Ee!==void 0&&(Ee.update($.inputSource,$.frame,l||a),Ee.dispatchEvent({type:$.type,data:$.inputSource}))}function R(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",N);for(let $=0;$<b.length;$++){const fe=L[$];fe!==null&&(L[$]=null,b[$].disconnect(fe))}w=null,ee=null,x.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,C=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(X.width,X.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",R),r.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(X),r.renderState.layers===void 0){const fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Gn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,Ee=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?rr:Qi,Ee=p.stencil?ir:Ai);const Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new Gn(d.textureWidth,d.textureHeight,{format:nn,type:Vn,depthTexture:new Dl(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N($){for(let fe=0;fe<$.removed.length;fe++){const Ee=$.removed[fe],Me=L.indexOf(Ee);Me>=0&&(L[Me]=null,b[Me].disconnect(Ee))}for(let fe=0;fe<$.added.length;fe++){const Ee=$.added[fe];let Me=L.indexOf(Ee);if(Me===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=L.length){L.push(Ee),Me=Ye;break}else if(L[Ye]===null){L[Ye]=Ee,Me=Ye;break}if(Me===-1)break}const Ve=b[Me];Ve&&Ve.connect(Ee)}}const k=new H,Q=new H;function Y($,fe,Ee){k.setFromMatrixPosition(fe.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);const Me=k.distanceTo(Q),Ve=fe.projectionMatrix.elements,Ye=Ee.projectionMatrix.elements,je=Ve[14]/(Ve[10]-1),dt=Ve[14]/(Ve[10]+1),I=(Ve[9]+1)/Ve[5],mt=(Ve[9]-1)/Ve[5],tt=(Ve[8]-1)/Ve[0],it=(Ye[8]+1)/Ye[0],we=je*tt,_t=je*it,Ge=Me/(-tt+it),We=Ge*-tt;fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(Ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const P=je+Ge,S=dt+Ge,K=we-We,se=_t+(Me-We),oe=I*dt/S*P,ie=mt*dt/S*P;$.projectionMatrix.makePerspective(K,se,oe,ie,P,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ne($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;x.texture!==null&&($.near=x.depthNear,$.far=x.depthFar),E.near=z.near=D.near=$.near,E.far=z.far=D.far=$.far,(w!==E.near||ee!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,ee=E.far,D.near=w,D.far=ee,z.near=w,z.far=ee,D.updateProjectionMatrix(),z.updateProjectionMatrix(),$.updateProjectionMatrix());const fe=$.parent,Ee=E.cameras;ne(E,fe);for(let Me=0;Me<Ee.length;Me++)ne(Ee[Me],fe);Ee.length===2?Y(E,D,z):E.projectionMatrix.copy(D.projectionMatrix),he($,E,fe)};function he($,fe,Ee){Ee===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(Ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Pr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ve=null;function Xe($,fe){if(u=fe.getViewerPose(l||a),v=fe,u!==null){const Ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let Me=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,Me=!0);for(let Ye=0;Ye<Ee.length;Ye++){const je=Ee[Ye];let dt=null;if(m!==null)dt=m.getViewport(je);else{const mt=f.getViewSubImage(d,je);dt=mt.viewport,Ye===0&&(e.setRenderTargetTextures(C,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(C))}let I=A[Ye];I===void 0&&(I=new on,I.layers.enable(Ye),I.viewport=new Dt,A[Ye]=I),I.matrix.fromArray(je.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(je.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(dt.x,dt.y,dt.width,dt.height),Ye===0&&(E.matrix.copy(I.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Me===!0&&E.cameras.push(I)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const Ye=f.getDepthInformation(Ee[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(e,Ye,r.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const Me=L[Ee],Ve=b[Ee];Me!==null&&Ve!==void 0&&Ve.update(Me,fe,l||a)}ve&&ve($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Ie=new Pl;Ie.setAnimationLoop(Xe),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const xi=new Wn,F_=new Tt;function O_(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,wl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,C,b,L){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,L)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),x(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,C,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Kt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Kt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const C=e.get(h),b=C.envMap,L=C.envMapRotation;b&&(p.envMap.value=b,xi.copy(L),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(xi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,C,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*C,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,C){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const C=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function B_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,b){const L=b.program;n.uniformBlockBinding(C,L)}function l(C,b){let L=r[C.id];L===void 0&&(v(C),L=u(C),r[C.id]=L,C.addEventListener("dispose",p));const X=b.program;n.updateUBOMapping(C,X);const U=e.render.frame;s[C.id]!==U&&(d(C),s[C.id]=U)}function u(C){const b=f();C.__bindingPointIndex=b;const L=i.createBuffer(),X=C.__size,U=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,X,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,L),L}function f(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const b=r[C.id],L=C.uniforms,X=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let U=0,D=L.length;U<D;U++){const z=Array.isArray(L[U])?L[U]:[L[U]];for(let A=0,E=z.length;A<E;A++){const w=z[A];if(m(w,U,A,X)===!0){const ee=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let R=0;for(let N=0;N<q.length;N++){const k=q[N],Q=x(k);typeof k=="number"||typeof k=="boolean"?(w.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,ee+R,w.__data)):k.isMatrix3?(w.__data[0]=k.elements[0],w.__data[1]=k.elements[1],w.__data[2]=k.elements[2],w.__data[3]=0,w.__data[4]=k.elements[3],w.__data[5]=k.elements[4],w.__data[6]=k.elements[5],w.__data[7]=0,w.__data[8]=k.elements[6],w.__data[9]=k.elements[7],w.__data[10]=k.elements[8],w.__data[11]=0):(k.toArray(w.__data,R),R+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,b,L,X){const U=C.value,D=b+"_"+L;if(X[D]===void 0)return typeof U=="number"||typeof U=="boolean"?X[D]=U:X[D]=U.clone(),!0;{const z=X[D];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return X[D]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function v(C){const b=C.uniforms;let L=0;const X=16;for(let D=0,z=b.length;D<z;D++){const A=Array.isArray(b[D])?b[D]:[b[D]];for(let E=0,w=A.length;E<w;E++){const ee=A[E],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let R=0,N=q.length;R<N;R++){const k=q[R],Q=x(k),Y=L%X,ne=Y%Q.boundary,he=Y+ne;L+=ne,he!==0&&X-he<Q.storage&&(L+=X-he),ee.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=L,L+=Q.storage}}}const U=L%X;return U>0&&(L+=X-U),C.__size=L,C.__cache={},this}function x(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function p(C){const b=C.target;b.removeEventListener("dispose",p);const L=a.indexOf(b.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const C in r)i.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class z_{constructor(e={}){const{canvas:t=Rd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const h=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=ri,this.toneMappingExposure=1;const b=this;let L=!1,X=0,U=0,D=null,z=-1,A=null;const E=new Dt,w=new Dt;let ee=null;const q=new at(0);let R=0,N=t.width,k=t.height,Q=1,Y=null,ne=null;const he=new Dt(0,0,N,k),ve=new Dt(0,0,N,k);let Xe=!1;const Ie=new Co;let $=!1,fe=!1;const Ee=new Tt,Me=new H,Ve=new Dt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function dt(){return D===null?Q:1}let I=n;function mt(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yo}`),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ue,!1),I===null){const O="webgl2";if(I=mt(O,M),I===null)throw mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let tt,it,we,_t,Ge,We,P,S,K,se,oe,ie,Re,ge,xe,Pe,le,Se,Qe,Oe,me,Ce,ze,ht;function y(){tt=new Xm(I),tt.init(),Ce=new R_(I,tt),it=new zm(I,tt,e,Ce),we=new A_(I),_t=new jm(I),Ge=new d_,We=new C_(I,tt,we,Ge,it,Ce,_t),P=new km(b),S=new Wm(b),K=new th(I),ze=new Om(I,K),se=new Ym(I,K,_t,ze),oe=new Km(I,se,K,_t),Qe=new qm(I,it,We),Pe=new Hm(Ge),ie=new f_(b,P,S,tt,it,ze,Pe),Re=new O_(b,Ge),ge=new p_,xe=new x_(tt),Se=new Fm(b,P,S,we,oe,d,c),le=new T_(b,oe,it),ht=new B_(I,_t,it,we),Oe=new Bm(I,tt,_t),me=new $m(I,tt,_t),_t.programs=ie.programs,b.capabilities=it,b.extensions=tt,b.properties=Ge,b.renderLists=ge,b.shadowMap=le,b.state=we,b.info=_t}y();const V=new N_(b,I);this.xr=V,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(N,k,!1))},this.getSize=function(M){return M.set(N,k)},this.setSize=function(M,O,W=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,k=O,t.width=Math.floor(M*Q),t.height=Math.floor(O*Q),W===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(N*Q,k*Q).floor()},this.setDrawingBufferSize=function(M,O,W){N=M,k=O,Q=W,t.width=Math.floor(M*W),t.height=Math.floor(O*W),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(he)},this.setViewport=function(M,O,W,j){M.isVector4?he.set(M.x,M.y,M.z,M.w):he.set(M,O,W,j),we.viewport(E.copy(he).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(ve)},this.setScissor=function(M,O,W,j){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,O,W,j),we.scissor(w.copy(ve).multiplyScalar(Q).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){we.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){ne=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(M=!0,O=!0,W=!0){let j=0;if(M){let B=!1;if(D!==null){const pe=D.texture.format;B=pe===To||pe===bo||pe===Eo}if(B){const pe=D.texture.type,ye=pe===Vn||pe===Ai||pe===Rr||pe===ir||pe===So||pe===Mo,Te=Se.getClearColor(),Ae=Se.getClearAlpha(),Ne=Te.r,Be=Te.g,Ue=Te.b;ye?(m[0]=Ne,m[1]=Be,m[2]=Ue,m[3]=Ae,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Ne,v[1]=Be,v[2]=Ue,v[3]=Ae,I.clearBufferiv(I.COLOR,0,v))}else j|=I.COLOR_BUFFER_BIT}O&&(j|=I.DEPTH_BUFFER_BIT),W&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),xe.dispose(),Ge.dispose(),P.dispose(),S.dispose(),oe.dispose(),ze.dispose(),ht.dispose(),ie.dispose(),V.dispose(),V.removeEventListener("sessionstart",st),V.removeEventListener("sessionend",Vt),vt.stop()};function G(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=_t.autoReset,O=le.enabled,W=le.autoUpdate,j=le.needsUpdate,B=le.type;y(),_t.autoReset=M,le.enabled=O,le.autoUpdate=W,le.needsUpdate=j,le.type=B}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){const O=M.target;O.removeEventListener("dispose",Le),He(O)}function He(M){yt(M),Ge.remove(M)}function yt(M){const O=Ge.get(M).programs;O!==void 0&&(O.forEach(function(W){ie.releaseProgram(W)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,W,j,B,pe){O===null&&(O=Ye);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Te=kr(M,O,W,j,B);we.setMaterial(j,ye);let Ae=W.index,Ne=1;if(j.wireframe===!0){if(Ae=se.getWireframeAttribute(W),Ae===void 0)return;Ne=2}const Be=W.drawRange,Ue=W.attributes.position;let ot=Be.start*Ne,ft=(Be.start+Be.count)*Ne;pe!==null&&(ot=Math.max(ot,pe.start*Ne),ft=Math.min(ft,(pe.start+pe.count)*Ne)),Ae!==null?(ot=Math.max(ot,0),ft=Math.min(ft,Ae.count)):Ue!=null&&(ot=Math.max(ot,0),ft=Math.min(ft,Ue.count));const pt=ft-ot;if(pt<0||pt===1/0)return;ze.setup(B,j,Te,W,Ae);let wt,ct=Oe;if(Ae!==null&&(wt=K.get(Ae),ct=me,ct.setIndex(wt)),B.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*dt()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(B.isLine){let De=j.linewidth;De===void 0&&(De=1),we.setLineWidth(De*dt()),B.isLineSegments?ct.setMode(I.LINES):B.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else B.isPoints?ct.setMode(I.POINTS):B.isSprite&&ct.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const De=B._multiDrawStarts,St=B._multiDrawCounts,lt=B._multiDrawCount,Jt=Ae?K.get(Ae).bytesPerElement:1,fn=Ge.get(j).currentProgram.getUniforms();for(let Nt=0;Nt<lt;Nt++)fn.setValue(I,"_gl_DrawID",Nt),ct.render(De[Nt]/Jt,St[Nt])}else if(B.isInstancedMesh)ct.renderInstances(ot,pt,B.count);else if(W.isInstancedBufferGeometry){const De=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,St=Math.min(W.instanceCount,De);ct.renderInstances(ot,pt,St)}else ct.render(ot,pt)};function xt(M,O,W){M.transparent===!0&&M.side===Hn&&M.forceSinglePass===!1?(M.side=Kt,M.needsUpdate=!0,Yn(M,O,W),M.side=ci,M.needsUpdate=!0,Yn(M,O,W),M.side=Hn):Yn(M,O,W)}this.compile=function(M,O,W=null){W===null&&(W=M),p=xe.get(W),p.init(O),C.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),M!==W&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const j=new Set;return M.traverse(function(B){const pe=B.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const Te=pe[ye];xt(Te,W,B),j.add(Te)}else xt(pe,W,B),j.add(pe)}),C.pop(),p=null,j},this.compileAsync=function(M,O,W=null){const j=this.compile(M,O,W);return new Promise(B=>{function pe(){if(j.forEach(function(ye){Ge.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){B(M);return}setTimeout(pe,10)}tt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let nt=null;function Mt(M){nt&&nt(M)}function st(){vt.stop()}function Vt(){vt.start()}const vt=new Pl;vt.setAnimationLoop(Mt),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(M){nt=M,V.setAnimationLoop(M),M===null?vt.stop():vt.start()},V.addEventListener("sessionstart",st),V.addEventListener("sessionend",Vt),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(O),O=V.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,O,D),p=xe.get(M,C.length),p.init(O),C.push(p),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(Ee),fe=this.localClippingEnabled,$=Pe.init(this.clippingPlanes,fe),x=ge.get(M,h.length),x.init(),h.push(x),V.enabled===!0&&V.isPresenting===!0){const pe=b.xr.getDepthSensingMesh();pe!==null&&Yt(pe,O,-1/0,b.sortObjects)}Yt(M,O,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(Y,ne),je=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,je&&Se.addToRenderList(x,M),this.info.render.frame++,$===!0&&Pe.beginShadows();const W=p.state.shadowsArray;le.render(W,M,O),$===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,B=x.transmissive;if(p.setupLights(),O.isArrayCamera){const pe=O.cameras;if(B.length>0)for(let ye=0,Te=pe.length;ye<Te;ye++){const Ae=pe[ye];di(j,B,M,Ae)}je&&Se.render(M);for(let ye=0,Te=pe.length;ye<Te;ye++){const Ae=pe[ye];Rn(x,M,Ae,Ae.viewport)}}else B.length>0&&di(j,B,M,O),je&&Se.render(M),Rn(x,M,O);D!==null&&(We.updateMultisampleRenderTarget(D),We.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(b,M,O),ze.resetDefaultState(),z=-1,A=null,C.pop(),C.length>0?(p=C[C.length-1],$===!0&&Pe.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Yt(M,O,W,j){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){j&&Ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const ye=oe.update(M),Te=M.material;Te.visible&&x.push(M,ye,Te,W,Ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){const ye=oe.update(M),Te=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ve.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ve.copy(ye.boundingSphere.center)),Ve.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(Te)){const Ae=ye.groups;for(let Ne=0,Be=Ae.length;Ne<Be;Ne++){const Ue=Ae[Ne],ot=Te[Ue.materialIndex];ot&&ot.visible&&x.push(M,ye,ot,W,Ve.z,Ue)}}else Te.visible&&x.push(M,ye,Te,W,Ve.z,null)}}const pe=M.children;for(let ye=0,Te=pe.length;ye<Te;ye++)Yt(pe[ye],O,W,j)}function Rn(M,O,W,j){const B=M.opaque,pe=M.transmissive,ye=M.transparent;p.setupLightsView(W),$===!0&&Pe.setGlobalState(b.clippingPlanes,W),j&&we.viewport(E.copy(j)),B.length>0&&Xn(B,O,W),pe.length>0&&Xn(pe,O,W),ye.length>0&&Xn(ye,O,W),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function di(M,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Gn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Lr:Vn,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const pe=p.state.transmissionRenderTarget[j.id],ye=j.viewport||E;pe.setSize(ye.z,ye.w);const Te=b.getRenderTarget();b.setRenderTarget(pe),b.getClearColor(q),R=b.getClearAlpha(),R<1&&b.setClearColor(16777215,.5),b.clear(),je&&Se.render(W);const Ae=b.toneMapping;b.toneMapping=ri;const Ne=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),$===!0&&Pe.setGlobalState(b.clippingPlanes,j),Xn(M,W,j),We.updateMultisampleRenderTarget(pe),We.updateRenderTargetMipmap(pe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ue=0,ot=O.length;Ue<ot;Ue++){const ft=O[Ue],pt=ft.object,wt=ft.geometry,ct=ft.material,De=ft.group;if(ct.side===Hn&&pt.layers.test(j.layers)){const St=ct.side;ct.side=Kt,ct.needsUpdate=!0,Ri(pt,W,j,wt,ct,De),ct.side=St,ct.needsUpdate=!0,Be=!0}}Be===!0&&(We.updateMultisampleRenderTarget(pe),We.updateRenderTargetMipmap(pe))}b.setRenderTarget(Te),b.setClearColor(q,R),Ne!==void 0&&(j.viewport=Ne),b.toneMapping=Ae}function Xn(M,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let B=0,pe=M.length;B<pe;B++){const ye=M[B],Te=ye.object,Ae=ye.geometry,Ne=j===null?ye.material:j,Be=ye.group;Te.layers.test(W.layers)&&Ri(Te,O,W,Ae,Ne,Be)}}function Ri(M,O,W,j,B,pe){M.onBeforeRender(b,O,W,j,B,pe),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.transparent===!0&&B.side===Hn&&B.forceSinglePass===!1?(B.side=Kt,B.needsUpdate=!0,b.renderBufferDirect(W,O,j,B,M,pe),B.side=ci,B.needsUpdate=!0,b.renderBufferDirect(W,O,j,B,M,pe),B.side=Hn):b.renderBufferDirect(W,O,j,B,M,pe),M.onAfterRender(b,O,W,j,B,pe)}function Yn(M,O,W){O.isScene!==!0&&(O=Ye);const j=Ge.get(M),B=p.state.lights,pe=p.state.shadowsArray,ye=B.state.version,Te=ie.getParameters(M,B.state,pe,O,W),Ae=ie.getProgramCacheKey(Te);let Ne=j.programs;j.environment=M.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(M.isMeshStandardMaterial?S:P).get(M.envMap||j.environment),j.envMapRotation=j.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Le),Ne=new Map,j.programs=Ne);let Be=Ne.get(Ae);if(Be!==void 0){if(j.currentProgram===Be&&j.lightsStateVersion===ye)return rt(M,Te),Be}else Te.uniforms=ie.getUniforms(M),M.onBeforeCompile(Te,b),Be=ie.acquireProgram(Te,Ae),Ne.set(Ae,Be),j.uniforms=Te.uniforms;const Ue=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=Pe.uniform),rt(M,Te),j.needsLights=hi(M),j.lightsStateVersion=ye,j.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Be,j.uniformsList=null,Be}function Pn(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=As.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function rt(M,O){const W=Ge.get(M);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function kr(M,O,W,j,B){O.isScene!==!0&&(O=Ye),We.resetTextureUnits();const pe=O.fog,ye=j.isMeshStandardMaterial?O.environment:null,Te=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ui,Ae=(j.isMeshStandardMaterial?S:P).get(j.envMap||ye),Ne=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color;let pt=ri;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=b.toneMapping);const wt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=wt!==void 0?wt.length:0,De=Ge.get(j),St=p.state.lights;if($===!0&&(fe===!0||M!==A)){const $t=M===A&&j.id===z;Pe.setState(j,M,$t)}let lt=!1;j.version===De.__version?(De.needsLights&&De.lightsStateVersion!==St.state.version||De.outputColorSpace!==Te||B.isBatchedMesh&&De.batching===!1||!B.isBatchedMesh&&De.batching===!0||B.isBatchedMesh&&De.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&De.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&De.instancing===!1||!B.isInstancedMesh&&De.instancing===!0||B.isSkinnedMesh&&De.skinning===!1||!B.isSkinnedMesh&&De.skinning===!0||B.isInstancedMesh&&De.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&De.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&De.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&De.instancingMorph===!1&&B.morphTexture!==null||De.envMap!==Ae||j.fog===!0&&De.fog!==pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Pe.numPlanes||De.numIntersection!==Pe.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Be||De.morphTargets!==Ue||De.morphNormals!==ot||De.morphColors!==ft||De.toneMapping!==pt||De.morphTargetsCount!==ct)&&(lt=!0):(lt=!0,De.__version=j.version);let Jt=De.currentProgram;lt===!0&&(Jt=Yn(j,O,B));let fn=!1,Nt=!1,Ln=!1;const Et=Jt.getUniforms(),_n=De.uniforms;if(we.useProgram(Jt.program)&&(fn=!0,Nt=!0,Ln=!0),j.id!==z&&(z=j.id,Nt=!0),fn||A!==M){Et.setValue(I,"projectionMatrix",M.projectionMatrix),Et.setValue(I,"viewMatrix",M.matrixWorldInverse);const $t=Et.map.cameraPosition;$t!==void 0&&$t.setValue(I,Me.setFromMatrixPosition(M.matrixWorld)),it.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Et.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),A!==M&&(A=M,Nt=!0,Ln=!0)}if(B.isSkinnedMesh){Et.setOptional(I,B,"bindMatrix"),Et.setOptional(I,B,"bindMatrixInverse");const $t=B.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Et.setValue(I,"boneTexture",$t.boneTexture,We))}B.isBatchedMesh&&(Et.setOptional(I,B,"batchingTexture"),Et.setValue(I,"batchingTexture",B._matricesTexture,We),Et.setOptional(I,B,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",B._indirectTexture,We),Et.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",B._colorsTexture,We));const hr=W.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Qe.update(B,W,Jt),(Nt||De.receiveShadow!==B.receiveShadow)&&(De.receiveShadow=B.receiveShadow,Et.setValue(I,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_n.envMap.value=Ae,_n.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(_n.envMapIntensity.value=O.environmentIntensity),Nt&&(Et.setValue(I,"toneMappingExposure",b.toneMappingExposure),De.needsLights&&Pi(_n,Ln),pe&&j.fog===!0&&Re.refreshFogUniforms(_n,pe),Re.refreshMaterialUniforms(_n,j,Q,k,p.state.transmissionRenderTarget[M.id]),As.upload(I,Pn(De),_n,We)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(As.upload(I,Pn(De),_n,We),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Et.setValue(I,"center",B.center),Et.setValue(I,"modelViewMatrix",B.modelViewMatrix),Et.setValue(I,"normalMatrix",B.normalMatrix),Et.setValue(I,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const $t=j.uniformsGroups;for(let pr=0,vn=$t.length;pr<vn;pr++){const mr=$t[pr];ht.update(mr,Jt),ht.bind(mr,Jt)}}return Jt}function Pi(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function hi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,O,W){Ge.get(M.texture).__webglTexture=O,Ge.get(M.depthTexture).__webglTexture=W;const j=Ge.get(M);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){const W=Ge.get(M);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,W=0){D=M,X=O,U=W;let j=!0,B=null,pe=!1,ye=!1;if(M){const Ae=Ge.get(M);Ae.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(I.FRAMEBUFFER,null),j=!1):Ae.__webglFramebuffer===void 0?We.setupRenderTarget(M):Ae.__hasExternalTextures&&We.rebindTextures(M,Ge.get(M.texture).__webglTexture,Ge.get(M.depthTexture).__webglTexture);const Ne=M.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Be=Ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?B=Be[O][W]:B=Be[O],pe=!0):M.samples>0&&We.useMultisampledRTT(M)===!1?B=Ge.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[W]:B=Be,E.copy(M.viewport),w.copy(M.scissor),ee=M.scissorTest}else E.copy(he).multiplyScalar(Q).floor(),w.copy(ve).multiplyScalar(Q).floor(),ee=Xe;if(we.bindFramebuffer(I.FRAMEBUFFER,B)&&j&&we.drawBuffers(M,B),we.viewport(E),we.scissor(w),we.setScissorTest(ee),pe){const Ae=Ge.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,W)}else if(ye){const Ae=Ge.get(M.texture),Ne=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Ne)}z=-1},this.readRenderTargetPixels=function(M,O,W,j,B,pe,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){we.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=M.texture,Ne=Ae.format,Be=Ae.type;if(!it.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-j&&W>=0&&W<=M.height-B&&I.readPixels(O,W,j,B,Ce.convert(Ne),Ce.convert(Be),pe)}finally{const Ae=D!==null?Ge.get(D).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,O,W,j,B,pe,ye){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){we.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=M.texture,Ne=Ae.format,Be=Ae.type;if(!it.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-j&&W>=0&&W<=M.height-B){const Ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),I.readPixels(O,W,j,B,Ce.convert(Ne),Ce.convert(Be),0),I.flush();const ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Pd(I,ot,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe)}finally{I.deleteBuffer(Ue),I.deleteSync(ot)}return pe}}finally{const Ae=D!==null?Ge.get(D).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(M,O=null,W=0){M.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);const j=Math.pow(2,-W),B=Math.floor(M.image.width*j),pe=Math.floor(M.image.height*j),ye=O!==null?O.x:0,Te=O!==null?O.y:0;We.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,ye,Te,B,pe),we.unbindTexture()},this.copyTextureToTexture=function(M,O,W=null,j=null,B=0){M.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,M=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let pe,ye,Te,Ae,Ne,Be;W!==null?(pe=W.max.x-W.min.x,ye=W.max.y-W.min.y,Te=W.min.x,Ae=W.min.y):(pe=M.image.width,ye=M.image.height,Te=0,Ae=0),j!==null?(Ne=j.x,Be=j.y):(Ne=0,Be=0);const Ue=Ce.convert(O.format),ot=Ce.convert(O.type);We.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const ft=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wt=I.getParameter(I.UNPACK_SKIP_PIXELS),ct=I.getParameter(I.UNPACK_SKIP_ROWS),De=I.getParameter(I.UNPACK_SKIP_IMAGES),St=M.isCompressedTexture?M.mipmaps[B]:M.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Ne,Be,pe,ye,Ue,ot,St.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Ne,Be,St.width,St.height,Ue,St.data):I.texSubImage2D(I.TEXTURE_2D,B,Ne,Be,pe,ye,Ue,ot,St),I.pixelStorei(I.UNPACK_ROW_LENGTH,ft),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De),B===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,O,W=null,j=null,B=0){M.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,M=arguments[2],O=arguments[3],B=arguments[4]||0);let pe,ye,Te,Ae,Ne,Be,Ue,ot,ft;const pt=M.isCompressedTexture?M.mipmaps[B]:M.image;W!==null?(pe=W.max.x-W.min.x,ye=W.max.y-W.min.y,Te=W.max.z-W.min.z,Ae=W.min.x,Ne=W.min.y,Be=W.min.z):(pe=pt.width,ye=pt.height,Te=pt.depth,Ae=0,Ne=0,Be=0),j!==null?(Ue=j.x,ot=j.y,ft=j.z):(Ue=0,ot=0,ft=0);const wt=Ce.convert(O.format),ct=Ce.convert(O.type);let De;if(O.isData3DTexture)We.setTexture3D(O,0),De=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)We.setTexture2DArray(O,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const St=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jt=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),Nt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be),M.isDataTexture||M.isData3DTexture?I.texSubImage3D(De,B,Ue,ot,ft,pe,ye,Te,wt,ct,pt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(De,B,Ue,ot,ft,pe,ye,Te,wt,pt.data):I.texSubImage3D(De,B,Ue,ot,ft,pe,ye,Te,wt,ct,pt),I.pixelStorei(I.UNPACK_ROW_LENGTH,St),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt),B===0&&O.generateMipmaps&&I.generateMipmap(De),we.unbindTexture()},this.initRenderTarget=function(M){Ge.get(M).__webglFramebuffer===void 0&&We.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){X=0,U=0,D=null,we.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ao?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===zs?"display-p3":"srgb"}}class kc extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Po extends fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ns=new H,Fs=new H,Vc=new Tt,Mr=new Hs,gs=new Dr,Da=new H,Gc=new H;class H_ extends Xt{constructor(e=new ln,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ns.fromBufferAttribute(t,r-1),Fs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ns.distanceTo(Fs);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),gs.radius+=s,e.ray.intersectsSphere(gs)===!1)return;Vc.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(Vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let x=m,p=v-1;x<p;x+=l){const h=u.getX(x),C=u.getX(x+1),b=_s(this,e,Mr,c,h,C);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(v-1),p=u.getX(m),h=_s(this,e,Mr,c,x,p);h&&t.push(h)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let x=m,p=v-1;x<p;x+=l){const h=_s(this,e,Mr,c,x,x+1);h&&t.push(h)}if(this.isLineLoop){const x=_s(this,e,Mr,c,v-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _s(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(Ns.fromBufferAttribute(a,r),Fs.fromBufferAttribute(a,s),t.distanceSqToSegment(Ns,Fs,Da,Gc)>n)return;Da.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Da);if(!(c<e.near||c>e.far))return{distance:c,point:Gc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Wc=new H,Xc=new H;class Ol extends H_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Wc.fromBufferAttribute(t,r),Xc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Wc.distanceTo(Xc);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k_ extends fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new Tt,_o=new Hs,vs=new Dr,ys=new H;class Ia extends Xt{constructor(e=new ln,t=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),vs.radius+=s,e.ray.intersectsSphere(vs)===!1)return;Yc.copy(r).invert(),_o.copy(e.ray).applyMatrix4(Yc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=d,x=m;v<x;v++){const p=l.getX(v);ys.fromBufferAttribute(f,p),$c(ys,p,c,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,x=m;v<x;v++)ys.fromBufferAttribute(f,v),$c(ys,v,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function $c(i,e,t,n,r,s,a){const o=_o.distanceSqToPoint(i);if(o<t){const c=new H;_o.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class jc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qc extends Ol{constructor(e=10,t=10,n=4473924,r=8947848){n=new at(n),r=new at(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,m=0,v=-o;d<=t;d++,v+=a){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const x=d===s?n:r;x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3}const u=new ln;u.setAttribute("position",new rn(c,3)),u.setAttribute("color",new rn(l,3));const f=new Po({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class V_ extends Ol{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ln;r.setAttribute("position",new rn(t,3)),r.setAttribute("color",new rn(n,3));const s=new Po({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new at,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);const Kc={type:"change"},Ua={type:"start"},Zc={type:"end"},xs=new Hs,Jc=new ti,G_=Math.cos(70*vl.DEG2RAD);class Qc extends Ci{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",xe),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",xe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kc),n.update(),s=r.NONE},this.update=function(){const y=new H,V=new wi().setFromUnitVectors(e.up,new H(0,1,0)),G=V.clone().invert(),J=new H,ue=new wi,Le=new H,He=2*Math.PI;return function(xt=null){const nt=n.object.position;y.copy(nt).sub(n.target),y.applyQuaternion(V),o.setFromVector3(y),n.autoRotate&&s===r.NONE&&ee(E(xt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Mt=n.minAzimuthAngle,st=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(st)&&(Mt<-Math.PI?Mt+=He:Mt>Math.PI&&(Mt-=He),st<-Math.PI?st+=He:st>Math.PI&&(st-=He),Mt<=st?o.theta=Math.max(Mt,Math.min(st,o.theta)):o.theta=o.theta>(Mt+st)/2?Math.max(Mt,o.theta):Math.min(st,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Vt=!1;if(n.zoomToCursor&&U||n.object.isOrthographicCamera)o.radius=he(o.radius);else{const vt=o.radius;o.radius=he(o.radius*l),Vt=vt!=o.radius}if(y.setFromSpherical(o),y.applyQuaternion(G),nt.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&U){let vt=null;if(n.object.isPerspectiveCamera){const Yt=y.length();vt=he(Yt*l);const Rn=Yt-vt;n.object.position.addScaledVector(L,Rn),n.object.updateMatrixWorld(),Vt=!!Rn}else if(n.object.isOrthographicCamera){const Yt=new H(X.x,X.y,0);Yt.unproject(n.object);const Rn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Vt=Rn!==n.object.zoom;const di=new H(X.x,X.y,0);di.unproject(n.object),n.object.position.sub(di).add(Yt),n.object.updateMatrixWorld(),vt=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;vt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(vt).add(n.object.position):(xs.origin.copy(n.object.position),xs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(xs.direction))<G_?e.lookAt(n.target):(Jc.setFromNormalAndCoplanarPoint(n.object.up,n.target),xs.intersectPlane(Jc,n.target))))}else if(n.object.isOrthographicCamera){const vt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),vt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Vt=!0)}return l=1,U=!1,Vt||J.distanceToSquared(n.object.position)>a||8*(1-ue.dot(n.object.quaternion))>a||Le.distanceToSquared(n.target)>a?(n.dispatchEvent(Kc),J.copy(n.object.position),ue.copy(n.object.quaternion),Le.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Se),n.domElement.removeEventListener("pointerdown",We),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",Re,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",xe),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new jc,c=new jc;let l=1;const u=new H,f=new Ke,d=new Ke,m=new Ke,v=new Ke,x=new Ke,p=new Ke,h=new Ke,C=new Ke,b=new Ke,L=new H,X=new Ke;let U=!1;const D=[],z={};let A=!1;function E(y){return y!==null?2*Math.PI/60*n.autoRotateSpeed*y:2*Math.PI/60/60*n.autoRotateSpeed}function w(y){const V=Math.abs(y*.01);return Math.pow(.95,n.zoomSpeed*V)}function ee(y){c.theta-=y}function q(y){c.phi-=y}const R=function(){const y=new H;return function(G,J){y.setFromMatrixColumn(J,0),y.multiplyScalar(-G),u.add(y)}}(),N=function(){const y=new H;return function(G,J){n.screenSpacePanning===!0?y.setFromMatrixColumn(J,1):(y.setFromMatrixColumn(J,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(G),u.add(y)}}(),k=function(){const y=new H;return function(G,J){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;y.copy(Le).sub(n.target);let He=y.length();He*=Math.tan(n.object.fov/2*Math.PI/180),R(2*G*He/ue.clientHeight,n.object.matrix),N(2*J*He/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(G*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),N(J*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Q(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(y){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(y,V){if(!n.zoomToCursor)return;U=!0;const G=n.domElement.getBoundingClientRect(),J=y-G.left,ue=V-G.top,Le=G.width,He=G.height;X.x=J/Le*2-1,X.y=-(ue/He)*2+1,L.set(X.x,X.y,1).unproject(n.object).sub(n.object.position).normalize()}function he(y){return Math.max(n.minDistance,Math.min(n.maxDistance,y))}function ve(y){f.set(y.clientX,y.clientY)}function Xe(y){ne(y.clientX,y.clientX),h.set(y.clientX,y.clientY)}function Ie(y){v.set(y.clientX,y.clientY)}function $(y){d.set(y.clientX,y.clientY),m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const V=n.domElement;ee(2*Math.PI*m.x/V.clientHeight),q(2*Math.PI*m.y/V.clientHeight),f.copy(d),n.update()}function fe(y){C.set(y.clientX,y.clientY),b.subVectors(C,h),b.y>0?Q(w(b.y)):b.y<0&&Y(w(b.y)),h.copy(C),n.update()}function Ee(y){x.set(y.clientX,y.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),k(p.x,p.y),v.copy(x),n.update()}function Me(y){ne(y.clientX,y.clientY),y.deltaY<0?Y(w(y.deltaY)):y.deltaY>0&&Q(w(y.deltaY)),n.update()}function Ve(y){let V=!1;switch(y.code){case n.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?ee(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?ee(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),V=!0;break}V&&(y.preventDefault(),n.update())}function Ye(y){if(D.length===1)f.set(y.pageX,y.pageY);else{const V=ze(y),G=.5*(y.pageX+V.x),J=.5*(y.pageY+V.y);f.set(G,J)}}function je(y){if(D.length===1)v.set(y.pageX,y.pageY);else{const V=ze(y),G=.5*(y.pageX+V.x),J=.5*(y.pageY+V.y);v.set(G,J)}}function dt(y){const V=ze(y),G=y.pageX-V.x,J=y.pageY-V.y,ue=Math.sqrt(G*G+J*J);h.set(0,ue)}function I(y){n.enableZoom&&dt(y),n.enablePan&&je(y)}function mt(y){n.enableZoom&&dt(y),n.enableRotate&&Ye(y)}function tt(y){if(D.length==1)d.set(y.pageX,y.pageY);else{const G=ze(y),J=.5*(y.pageX+G.x),ue=.5*(y.pageY+G.y);d.set(J,ue)}m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const V=n.domElement;ee(2*Math.PI*m.x/V.clientHeight),q(2*Math.PI*m.y/V.clientHeight),f.copy(d)}function it(y){if(D.length===1)x.set(y.pageX,y.pageY);else{const V=ze(y),G=.5*(y.pageX+V.x),J=.5*(y.pageY+V.y);x.set(G,J)}p.subVectors(x,v).multiplyScalar(n.panSpeed),k(p.x,p.y),v.copy(x)}function we(y){const V=ze(y),G=y.pageX-V.x,J=y.pageY-V.y,ue=Math.sqrt(G*G+J*J);C.set(0,ue),b.set(0,Math.pow(C.y/h.y,n.zoomSpeed)),Q(b.y),h.copy(C);const Le=(y.pageX+V.x)*.5,He=(y.pageY+V.y)*.5;ne(Le,He)}function _t(y){n.enableZoom&&we(y),n.enablePan&&it(y)}function Ge(y){n.enableZoom&&we(y),n.enableRotate&&tt(y)}function We(y){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",S)),!me(y)&&(Qe(y),y.pointerType==="touch"?Pe(y):K(y)))}function P(y){n.enabled!==!1&&(y.pointerType==="touch"?le(y):se(y))}function S(y){switch(Oe(y),D.length){case 0:n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(Zc),s=r.NONE;break;case 1:const V=D[0],G=z[V];Pe({pointerId:V,pageX:G.x,pageY:G.y});break}}function K(y){let V;switch(y.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case zn.DOLLY:if(n.enableZoom===!1)return;Xe(y),s=r.DOLLY;break;case zn.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;Ie(y),s=r.PAN}else{if(n.enableRotate===!1)return;ve(y),s=r.ROTATE}break;case zn.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;ve(y),s=r.ROTATE}else{if(n.enablePan===!1)return;Ie(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ua)}function se(y){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;$(y);break;case r.DOLLY:if(n.enableZoom===!1)return;fe(y);break;case r.PAN:if(n.enablePan===!1)return;Ee(y);break}}function oe(y){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(y.preventDefault(),n.dispatchEvent(Ua),Me(ie(y)),n.dispatchEvent(Zc))}function ie(y){const V=y.deltaMode,G={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(V){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return y.ctrlKey&&!A&&(G.deltaY*=10),G}function Re(y){y.key==="Control"&&(A=!0,n.domElement.getRootNode().addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(y){y.key==="Control"&&(A=!1,n.domElement.getRootNode().removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function xe(y){n.enabled===!1||n.enablePan===!1||Ve(y)}function Pe(y){switch(Ce(y),D.length){case 1:switch(n.touches.ONE){case ei.ROTATE:if(n.enableRotate===!1)return;Ye(y),s=r.TOUCH_ROTATE;break;case ei.PAN:if(n.enablePan===!1)return;je(y),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(y),s=r.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(y),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ua)}function le(y){switch(Ce(y),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;tt(y),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;it(y),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_t(y),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ge(y),n.update();break;default:s=r.NONE}}function Se(y){n.enabled!==!1&&y.preventDefault()}function Qe(y){D.push(y.pointerId)}function Oe(y){delete z[y.pointerId];for(let V=0;V<D.length;V++)if(D[V]==y.pointerId){D.splice(V,1);return}}function me(y){for(let V=0;V<D.length;V++)if(D[V]==y.pointerId)return!0;return!1}function Ce(y){let V=z[y.pointerId];V===void 0&&(V=new Ke,z[y.pointerId]=V),V.set(y.pageX,y.pageY)}function ze(y){const V=y.pointerId===D[0]?D[1]:D[0];return z[V]}n.domElement.addEventListener("contextmenu",Se),n.domElement.addEventListener("pointerdown",We),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",oe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Re,{passive:!0,capture:!0}),this.update()}}var $e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W_(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var ws={},Bl={},zl={};Object.defineProperty(zl,"__esModule",{value:!0});var Vs={};Object.defineProperty(Vs,"__esModule",{value:!0});Vs.Hierarchy=void 0;Vs.Hierarchy={parse:X_};function X_(i){return Object.entries(i).reduce((e,[t,n])=>(n===-1?e.pages[t]={}:n&&(e.nodes[t]={pointCount:n}),e),{nodes:{},pages:{}})}(function(i){var e=$e&&$e.__createBinding||(Object.create?function(n,r,s,a){a===void 0&&(a=s);var o=Object.getOwnPropertyDescriptor(r,s);(!o||("get"in o?!r.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return r[s]}}),Object.defineProperty(n,a,o)}:function(n,r,s,a){a===void 0&&(a=s),n[a]=r[s]}),t=$e&&$e.__exportStar||function(n,r){for(var s in n)s!=="default"&&!Object.prototype.hasOwnProperty.call(r,s)&&e(r,n,s)};Object.defineProperty(i,"__esModule",{value:!0}),t(zl,i),t(Vs,i)})(Bl);var Hl={},li={};Object.defineProperty(li,"__esModule",{value:!0});li.hierarchyItemLength=li.infoLength=void 0;li.infoLength=160;li.hierarchyItemLength=32;var Gs={},Lo={},An={};Object.defineProperty(An,"__esModule",{value:!0});An.evlrHeaderLength=An.vlrHeaderLength=An.minHeaderLength=void 0;An.minHeaderLength=375;An.vlrHeaderLength=54;An.evlrHeaderLength=60;var Nr={},un={},ar={};Object.defineProperty(ar,"__esModule",{value:!0});ar.getBigUint64=ar.parseBigInt=void 0;function Y_(i){if(i>BigInt(Number.MAX_SAFE_INTEGER)||i<BigInt(-Number.MAX_SAFE_INTEGER))throw new Error(`Cannot convert bigint to number: ${i}`);return Number(i)}ar.parseBigInt=Y_;function $_(i,e,t){if(i.getBigUint64)return i.getBigUint64(e,t);const[n,r]=t?[4,0]:[0,4],s=BigInt(i.getUint32(e+n,t)),a=BigInt(i.getUint32(e+r,t));return(s<<BigInt(32))+a}ar.getBigUint64=$_;var si={};Object.defineProperty(si,"__esModule",{value:!0});si.toCString=si.toDataView=si.Binary=void 0;si.Binary={toDataView:Do,toCString:kl};function Do(i){return new DataView(i.buffer,i.byteOffset,i.length)}si.toDataView=Do;function kl(i){const e=Do(i);let t="";for(let n=0;n<e.byteLength;++n){const r=e.getInt8(n);if(r===0)return t;t+=String.fromCharCode(r)}return t}si.toCString=kl;var Ws={};Object.defineProperty(Ws,"__esModule",{value:!0});Ws.Bounds=void 0;Ws.Bounds={min:j_,max:q_,mid:Io,width:Vl,depth:Gl,height:Wl,cube:K_,step:Xl,stepTo:Z_,intersection:J_};function j_(i){return[i[0],i[1],i[2]]}function q_(i){return[i[3],i[4],i[5]]}function Io([i,e,t,n,r,s]){return[i+(n-i)/2,e+(r-e)/2,t+(s-t)/2]}function Vl(i){return i[3]-i[0]}function Gl(i){return i[4]-i[1]}function Wl(i){return i[5]-i[2]}function K_(i){const e=Io(i),t=Math.max(Vl(i),Gl(i),Wl(i))/2;return[e[0]-t,e[1]-t,e[2]-t,e[0]+t,e[1]+t,e[2]+t]}function Xl(i,[e,t,n]){const[r,s,a,o,c,l]=i,[u,f,d]=Io(i);return[e?u:r,t?f:s,n?d:a,e?o:u,t?c:f,n?l:d]}function Z_(i,[e,t,n,r]){for(let s=e-1;s>=0;--s)i=Xl(i,[t>>s&1,n>>s&1,r>>s&1]);return i}function J_(i,e){return[Math.max(i[0],e[0]),Math.max(i[1],e[1]),Math.max(i[2],e[2]),Math.min(i[3],e[3]),Math.min(i[4],e[4]),Math.min(i[5],e[5])]}var Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});Xs.Dimension=void 0;const Q_={int8:{type:"signed",size:1},int16:{type:"signed",size:2},int32:{type:"signed",size:4},int64:{type:"signed",size:8},uint8:{type:"unsigned",size:1},uint16:{type:"unsigned",size:2},uint32:{type:"unsigned",size:4},uint64:{type:"unsigned",size:8},float32:{type:"float",size:4},float64:{type:"float",size:8},float:{type:"float",size:4},double:{type:"float",size:8},bool:{type:"unsigned",size:1},boolean:{type:"unsigned",size:1}};Xs.Dimension={Type:Q_,ctype:ev};function ev({type:i,size:e}){switch(i){case"signed":switch(e){case 1:return"int8";case 2:return"int16";case 4:return"int32";case 8:return"int64"}case"unsigned":switch(e){case 1:return"uint8";case 2:return"uint16";case 4:return"uint32";case 8:return"uint64"}case"float":switch(e){case 4:return"float";case 8:return"double"}}throw new Error(`Invalid dimension type/size: ${i}/${e}`)}var Ys={},vo={exports:{}};(function(i,e){var t=typeof self<"u"?self:$e,n=function(){function s(){this.fetch=!1,this.DOMException=t.DOMException}return s.prototype=t,new s}();(function(s){(function(a){var o={searchParams:"URLSearchParams"in s,iterable:"Symbol"in s&&"iterator"in Symbol,blob:"FileReader"in s&&"Blob"in s&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in s,arrayBuffer:"ArrayBuffer"in s};function c(R){return R&&DataView.prototype.isPrototypeOf(R)}if(o.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(R){return R&&l.indexOf(Object.prototype.toString.call(R))>-1};function f(R){if(typeof R!="string"&&(R=String(R)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(R))throw new TypeError("Invalid character in header field name");return R.toLowerCase()}function d(R){return typeof R!="string"&&(R=String(R)),R}function m(R){var N={next:function(){var k=R.shift();return{done:k===void 0,value:k}}};return o.iterable&&(N[Symbol.iterator]=function(){return N}),N}function v(R){this.map={},R instanceof v?R.forEach(function(N,k){this.append(k,N)},this):Array.isArray(R)?R.forEach(function(N){this.append(N[0],N[1])},this):R&&Object.getOwnPropertyNames(R).forEach(function(N){this.append(N,R[N])},this)}v.prototype.append=function(R,N){R=f(R),N=d(N);var k=this.map[R];this.map[R]=k?k+", "+N:N},v.prototype.delete=function(R){delete this.map[f(R)]},v.prototype.get=function(R){return R=f(R),this.has(R)?this.map[R]:null},v.prototype.has=function(R){return this.map.hasOwnProperty(f(R))},v.prototype.set=function(R,N){this.map[f(R)]=d(N)},v.prototype.forEach=function(R,N){for(var k in this.map)this.map.hasOwnProperty(k)&&R.call(N,this.map[k],k,this)},v.prototype.keys=function(){var R=[];return this.forEach(function(N,k){R.push(k)}),m(R)},v.prototype.values=function(){var R=[];return this.forEach(function(N){R.push(N)}),m(R)},v.prototype.entries=function(){var R=[];return this.forEach(function(N,k){R.push([k,N])}),m(R)},o.iterable&&(v.prototype[Symbol.iterator]=v.prototype.entries);function x(R){if(R.bodyUsed)return Promise.reject(new TypeError("Already read"));R.bodyUsed=!0}function p(R){return new Promise(function(N,k){R.onload=function(){N(R.result)},R.onerror=function(){k(R.error)}})}function h(R){var N=new FileReader,k=p(N);return N.readAsArrayBuffer(R),k}function C(R){var N=new FileReader,k=p(N);return N.readAsText(R),k}function b(R){for(var N=new Uint8Array(R),k=new Array(N.length),Q=0;Q<N.length;Q++)k[Q]=String.fromCharCode(N[Q]);return k.join("")}function L(R){if(R.slice)return R.slice(0);var N=new Uint8Array(R.byteLength);return N.set(new Uint8Array(R)),N.buffer}function X(){return this.bodyUsed=!1,this._initBody=function(R){this._bodyInit=R,R?typeof R=="string"?this._bodyText=R:o.blob&&Blob.prototype.isPrototypeOf(R)?this._bodyBlob=R:o.formData&&FormData.prototype.isPrototypeOf(R)?this._bodyFormData=R:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(R)?this._bodyText=R.toString():o.arrayBuffer&&o.blob&&c(R)?(this._bodyArrayBuffer=L(R.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(R)||u(R))?this._bodyArrayBuffer=L(R):this._bodyText=R=Object.prototype.toString.call(R):this._bodyText="",this.headers.get("content-type")||(typeof R=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(R)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var R=x(this);if(R)return R;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?x(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var R=x(this);if(R)return R;if(this._bodyBlob)return C(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(b(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}var U=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function D(R){var N=R.toUpperCase();return U.indexOf(N)>-1?N:R}function z(R,N){N=N||{};var k=N.body;if(R instanceof z){if(R.bodyUsed)throw new TypeError("Already read");this.url=R.url,this.credentials=R.credentials,N.headers||(this.headers=new v(R.headers)),this.method=R.method,this.mode=R.mode,this.signal=R.signal,!k&&R._bodyInit!=null&&(k=R._bodyInit,R.bodyUsed=!0)}else this.url=String(R);if(this.credentials=N.credentials||this.credentials||"same-origin",(N.headers||!this.headers)&&(this.headers=new v(N.headers)),this.method=D(N.method||this.method||"GET"),this.mode=N.mode||this.mode||null,this.signal=N.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&k)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(k)}z.prototype.clone=function(){return new z(this,{body:this._bodyInit})};function A(R){var N=new FormData;return R.trim().split("&").forEach(function(k){if(k){var Q=k.split("="),Y=Q.shift().replace(/\+/g," "),ne=Q.join("=").replace(/\+/g," ");N.append(decodeURIComponent(Y),decodeURIComponent(ne))}}),N}function E(R){var N=new v,k=R.replace(/\r?\n[\t ]+/g," ");return k.split(/\r?\n/).forEach(function(Q){var Y=Q.split(":"),ne=Y.shift().trim();if(ne){var he=Y.join(":").trim();N.append(ne,he)}}),N}X.call(z.prototype);function w(R,N){N||(N={}),this.type="default",this.status=N.status===void 0?200:N.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in N?N.statusText:"OK",this.headers=new v(N.headers),this.url=N.url||"",this._initBody(R)}X.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new v(this.headers),url:this.url})},w.error=function(){var R=new w(null,{status:0,statusText:""});return R.type="error",R};var ee=[301,302,303,307,308];w.redirect=function(R,N){if(ee.indexOf(N)===-1)throw new RangeError("Invalid status code");return new w(null,{status:N,headers:{location:R}})},a.DOMException=s.DOMException;try{new a.DOMException}catch{a.DOMException=function(N,k){this.message=N,this.name=k;var Q=Error(N);this.stack=Q.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function q(R,N){return new Promise(function(k,Q){var Y=new z(R,N);if(Y.signal&&Y.signal.aborted)return Q(new a.DOMException("Aborted","AbortError"));var ne=new XMLHttpRequest;function he(){ne.abort()}ne.onload=function(){var ve={status:ne.status,statusText:ne.statusText,headers:E(ne.getAllResponseHeaders()||"")};ve.url="responseURL"in ne?ne.responseURL:ve.headers.get("X-Request-URL");var Xe="response"in ne?ne.response:ne.responseText;k(new w(Xe,ve))},ne.onerror=function(){Q(new TypeError("Network request failed"))},ne.ontimeout=function(){Q(new TypeError("Network request failed"))},ne.onabort=function(){Q(new a.DOMException("Aborted","AbortError"))},ne.open(Y.method,Y.url,!0),Y.credentials==="include"?ne.withCredentials=!0:Y.credentials==="omit"&&(ne.withCredentials=!1),"responseType"in ne&&o.blob&&(ne.responseType="blob"),Y.headers.forEach(function(ve,Xe){ne.setRequestHeader(Xe,ve)}),Y.signal&&(Y.signal.addEventListener("abort",he),ne.onreadystatechange=function(){ne.readyState===4&&Y.signal.removeEventListener("abort",he)}),ne.send(typeof Y._bodyInit>"u"?null:Y._bodyInit)})}return q.polyfill=!0,s.fetch||(s.fetch=q,s.Headers=v,s.Request=z,s.Response=w),a.Headers=v,a.Request=z,a.Response=w,a.fetch=q,Object.defineProperty(a,"__esModule",{value:!0}),a})({})})(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var r=n;e=r.fetch,e.default=r.fetch,e.fetch=r.fetch,e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response,i.exports=e})(vo,vo.exports);var tv=vo.exports;const nv={},iv=Object.freeze(Object.defineProperty({__proto__:null,default:nv},Symbol.toStringTag,{value:"Module"})),rv=W_(iv);var sv=$e&&$e.__createBinding||(Object.create?function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}:function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]}),av=$e&&$e.__setModuleDefault||(Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e}),ov=$e&&$e.__importStar||function(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)t!=="default"&&Object.prototype.hasOwnProperty.call(i,t)&&sv(e,i,t);return av(e,i),e},cv=$e&&$e.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Ys,"__esModule",{value:!0});Ys.Getter=void 0;const lv=cv(tv);Ys.Getter={create:uv,http:Yl,file:$l};function uv(i){return typeof i=="function"?i:i.startsWith("http://")||i.startsWith("https://")?Yl(i):$l(i)}function Yl(i){return async function(t,n){if(t<0||n<0||t>n)throw new Error("Invalid range");const s=await(await(0,lv.default)(i,{headers:{Range:`bytes=${t}-${n-1}`}})).arrayBuffer();return new Uint8Array(s)}}function $l(i){return async function(t,n){const r=await Promise.resolve().then(()=>ov(rv));async function s(a=0,o=1/0){if(a<0||o<0||a>o)throw new Error("Invalid range");await r.promises.access(i);const c=r.createReadStream(i,{start:a,end:o-1,autoClose:!0});return fv(c)}return s(t,n)}}async function fv(i){return await new Promise((e,t)=>{const n=[];i.on("data",r=>n.push(r)),i.on("error",t),i.on("end",()=>e(Buffer.concat(n)))})}var jl={};(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.Key=void 0,i.Key={create:e,parse:t,toString:n,step:r,up:s,compare:a,depth:o};function e(c,l=0,u=0,f=0){return typeof c!="number"?t(c):[c,l,u,f]}function t(c){if(typeof c!="string")return c;const[l,u,f,d,...m]=c.split("-").map(x=>parseInt(x,10)),v=[l,u,f,d];if(m.length!==0||v.some(x=>typeof x!="number"||Number.isNaN(x)))throw new Error(`Invalid key: ${c}`);return v}function n(c){return typeof c=="string"?c:c.join("-")}function r(c,[l,u,f]){const[d,m,v,x]=i.Key.create(c);return[d+1,m*2+l,v*2+u,x*2+f]}function s(c,l=1){const[u,f,d,m]=i.Key.create(c);return[u-l,f>>l,d>>l,m>>l]}function a(c,l){for(let u=0;u<c.length;++u){if(c[u]<l[u])return-1;if(c[u]>l[u])return 1}return 0}function o(c){return c[0]}})(jl);var $s={};Object.defineProperty($s,"__esModule",{value:!0});$s.Scale=void 0;$s.Scale={apply:(i,e=1,t=0)=>(i-t)/e,unapply:(i,e=1,t=0)=>i*e+t};var js={};Object.defineProperty(js,"__esModule",{value:!0});js.Step=void 0;js.Step={fromIndex:dv,list:hv};function dv(i){if(i<0||i>=8)throw new Error(`Invalid step index: ${i}`);const e=i>>0&1?1:0,t=i>>1&1?1:0,n=i>>2&1?1:0;return[e,t,n]}function hv(){return[[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]]}(function(i){var e=$e&&$e.__createBinding||(Object.create?function(u,f,d,m){m===void 0&&(m=d);var v=Object.getOwnPropertyDescriptor(f,d);(!v||("get"in v?!f.__esModule:v.writable||v.configurable))&&(v={enumerable:!0,get:function(){return f[d]}}),Object.defineProperty(u,m,v)}:function(u,f,d,m){m===void 0&&(m=d),u[m]=f[d]}),t=$e&&$e.__exportStar||function(u,f){for(var d in u)d!=="default"&&!Object.prototype.hasOwnProperty.call(f,d)&&e(f,u,d)};Object.defineProperty(i,"__esModule",{value:!0}),i.Step=i.Scale=i.Key=i.Getter=i.Dimension=i.Bounds=i.Binary=void 0,t(ar,i);var n=si;Object.defineProperty(i,"Binary",{enumerable:!0,get:function(){return n.Binary}});var r=Ws;Object.defineProperty(i,"Bounds",{enumerable:!0,get:function(){return r.Bounds}});var s=Xs;Object.defineProperty(i,"Dimension",{enumerable:!0,get:function(){return s.Dimension}});var a=Ys;Object.defineProperty(i,"Getter",{enumerable:!0,get:function(){return a.Getter}});var o=jl;Object.defineProperty(i,"Key",{enumerable:!0,get:function(){return o.Key}});var c=$s;Object.defineProperty(i,"Scale",{enumerable:!0,get:function(){return c.Scale}});var l=js;Object.defineProperty(i,"Step",{enumerable:!0,get:function(){return l.Step}})})(un);var Fr={};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.ExtraBytes=void 0;const zt=un;Fr.ExtraBytes={getDimension:pv,parse:mv,parseOne:ql};const Cs=192;function pv({type:i,length:e}){switch(i){case"signed":case"unsigned":switch(e){case 1:case 2:case 4:case 8:return{type:i,size:e}}case"float":switch(e){case 4:case 8:return{type:i,size:e}}}}function mv(i){if(i.byteLength%Cs!==0)throw new Error(`Invalid extra bytes VLR length: ${i.byteLength}`);const e=[];for(let t=0;t<i.byteLength;t+=Cs)e.push(ql(i.slice(t,t+Cs)));return e}function ql(i){if(i.byteLength!==Cs)throw new Error(`Invalid extra bytes entry length: ${i.byteLength}`);const e=zt.Binary.toDataView(i),t=zt.Binary.toCString(i.slice(4,36)),n=zt.Binary.toCString(i.slice(60,192)),r=e.getUint8(2),s=e.getUint8(3);if(r>=11)throw new Error(`Invalid extra bytes "type" value: ${r}`);if(r===0)return{name:t,description:n,length:s};const a=_v(s),o=gv(r);if(!o)throw new Error(`Failed to extract dimension type: ${r}`);const{type:c,size:l}=o;function u(d){switch(c){case"signed":return(0,zt.parseBigInt)(e.getBigInt64(d,!0));case"unsigned":return(0,zt.parseBigInt)((0,zt.getBigUint64)(e,d,!0));case"float":return e.getFloat64(d,!0)}}const f={name:t,description:n,type:c,length:l};return a.hasNodata&&(f.nodata=u(40)),a.hasMin&&(f.min=u(64)),a.hasMax&&(f.max=u(88)),a.hasScale&&(f.scale=e.getFloat64(112)),a.hasOffset&&(f.offset=e.getFloat64(136)),f}function gv(i){switch(i){case 1:return zt.Dimension.Type.uint8;case 2:return zt.Dimension.Type.int8;case 3:return zt.Dimension.Type.uint16;case 4:return zt.Dimension.Type.int16;case 5:return zt.Dimension.Type.uint32;case 6:return zt.Dimension.Type.int32;case 7:return zt.Dimension.Type.uint64;case 8:return zt.Dimension.Type.int64;case 9:return zt.Dimension.Type.float32;case 10:return zt.Dimension.Type.float64}}function _v(i){return{hasNodata:!!(i&1),hasMin:!!(i>>1&1),hasMax:!!(i>>2&1),hasScale:!!(i>>3&1),hasOffset:!!(i>>4&1)}}Object.defineProperty(Nr,"__esModule",{value:!0});Nr.Dimensions=void 0;const vv=un,yv=Fr;Nr.Dimensions={create:Sv};const{Type:bt}=vv.Dimension,xv={X:bt.float64,Y:bt.float64,Z:bt.float64,Intensity:bt.uint16,ReturnNumber:bt.uint8,NumberOfReturns:bt.uint8,ScanDirectionFlag:bt.boolean,EdgeOfFlightLine:bt.boolean,Classification:bt.uint8,Synthetic:bt.boolean,KeyPoint:bt.boolean,Withheld:bt.boolean,Overlap:bt.boolean,ScanAngle:bt.float32,UserData:bt.uint8,PointSourceId:bt.uint16,GpsTime:bt.float64,Red:bt.uint16,Green:bt.uint16,Blue:bt.uint16,ScannerChannel:bt.uint8,Infrared:bt.uint16};function Sv(i,e=[]){return Object.keys(i).reduce((t,n)=>{const r=xv[n];if(r)return{...t,[n]:r};const s=e.find(o=>o.name===n),a=s&&yv.ExtraBytes.getDimension(s);if(a)return{...t,[n]:a};throw new Error(`Failed to look up LAS type: ${n}`)},{})}var Or={};Object.defineProperty(Or,"__esModule",{value:!0});Or.Extractor=void 0;const wn=un;Or.Extractor={create:Tv};function Mv(i){switch(i){case 0:return 20;case 1:return 28;case 2:return 26;case 3:return 34;case 6:return 30;case 7:return 36;case 8:return 38;default:throw new Error(`Unsupported point data record format: ${i}`)}}function Ev(i,e,{type:t,length:n}){const r=fi(i);switch(t){case"signed":switch(n){case 1:return(s,a)=>s.getInt8(r(a)+e);case 2:return(s,a)=>s.getInt16(r(a)+e,!0);case 4:return(s,a)=>s.getInt32(r(a)+e,!0);case 8:return(s,a)=>(0,wn.parseBigInt)(s.getBigInt64(r(a)+e,!0))}case"unsigned":switch(n){case 1:return(s,a)=>s.getUint8(r(a)+e);case 2:return(s,a)=>s.getUint16(r(a)+e,!0);case 4:return(s,a)=>s.getUint32(r(a)+e,!0);case 8:return(s,a)=>(0,wn.parseBigInt)((0,wn.getBigUint64)(s,r(a)+e,!0))}case"float":switch(n){case 4:return(s,a)=>s.getFloat32(r(a)+e,!0);case 8:return(s,a)=>s.getFloat64(r(a)+e,!0)}}}function bv(i,e){let n=Mv(i.pointDataRecordFormat);return e.reduce((r,s)=>{const a=n;n+=s.length;const o=Ev(i,a,s);if(!o)return r;const c=(l,u)=>wn.Scale.unapply(o(l,u),s.scale,s.offset);return{...r,[s.name]:c}},{})}function Tv(i,e=[]){const t=bv(i,e);return{...(()=>{const{pointDataRecordFormat:r}=i;switch(r){case 0:return qs(i);case 1:return Av(i);case 2:return wv(i);case 3:return Cv(i);case 6:return Kl(i);case 7:return Zl(i);case 8:return Rv(i);default:throw new Error(`Unsupported point data record format: ${r}`)}})(),...t}}function qs(i){const{scale:e,offset:t}=i,n=fi(i);function r(o,c){return o.getUint8(n(c)+14)}function s(o,c){return o.getUint8(n(c)+15)}function a(o,c){return s(o,c)&31}return{X:(o,c)=>wn.Scale.unapply(o.getInt32(n(c),!0),e[0],t[0]),Y:(o,c)=>wn.Scale.unapply(o.getInt32(n(c)+4,!0),e[1],t[1]),Z:(o,c)=>wn.Scale.unapply(o.getInt32(n(c)+8,!0),e[2],t[2]),Intensity:(o,c)=>o.getUint16(n(c)+12,!0),ReturnNumber:(o,c)=>r(o,c)&7,NumberOfReturns:(o,c)=>(r(o,c)&56)>>3,ScanDirectionFlag:(o,c)=>(r(o,c)&64)>>6,EdgeOfFlightLine:(o,c)=>(r(o,c)&128)>>7,Classification:(o,c)=>{const l=a(o,c);return l===12?0:l},Synthetic:(o,c)=>(s(o,c)&32)>>5,KeyPoint:(o,c)=>(s(o,c)&64)>>6,Withheld:(o,c)=>(s(o,c)&128)>>7,Overlap:(o,c)=>a(o,c)===12?1:0,ScanAngle:(o,c)=>o.getInt8(n(c)+16),UserData:(o,c)=>o.getUint8(n(c)+17),PointSourceId:(o,c)=>o.getUint16(n(c)+18,!0)}}function Av(i){const e=fi(i);return{...qs(i),GpsTime:(t,n)=>t.getFloat64(e(n)+20,!0)}}function wv(i){const e=fi(i);return{...qs(i),Red:(t,n)=>t.getUint16(e(n)+20,!0),Green:(t,n)=>t.getUint16(e(n)+22,!0),Blue:(t,n)=>t.getUint16(e(n)+24,!0)}}function Cv(i){const e=fi(i);return{...qs(i),GpsTime:(t,n)=>t.getFloat64(e(n)+20,!0),Red:(t,n)=>t.getUint16(e(n)+28,!0),Green:(t,n)=>t.getUint16(e(n)+30,!0),Blue:(t,n)=>t.getUint16(e(n)+32,!0)}}function Kl(i){const{scale:e,offset:t}=i,n=fi(i);function r(s,a){return s.getUint8(n(a)+15)}return{X:(s,a)=>wn.Scale.unapply(s.getInt32(n(a),!0),e[0],t[0]),Y:(s,a)=>wn.Scale.unapply(s.getInt32(n(a)+4,!0),e[1],t[1]),Z:(s,a)=>wn.Scale.unapply(s.getInt32(n(a)+8,!0),e[2],t[2]),Intensity:(s,a)=>s.getUint16(n(a)+12,!0),ReturnNumber:(s,a)=>s.getUint16(n(a)+14,!0)&15,NumberOfReturns:(s,a)=>(s.getUint16(n(a)+14,!0)&240)>>4,Synthetic:(s,a)=>r(s,a)&1,KeyPoint:(s,a)=>(r(s,a)&2)>>1,Withheld:(s,a)=>(r(s,a)&4)>>2,Overlap:(s,a)=>(r(s,a)&8)>>3,ScannerChannel:(s,a)=>(r(s,a)&48)>>4,ScanDirectionFlag:(s,a)=>(r(s,a)&64)>>6,EdgeOfFlightLine:(s,a)=>(r(s,a)&128)>>7,Classification:(s,a)=>s.getUint8(n(a)+16),UserData:(s,a)=>s.getUint8(n(a)+17),ScanAngle:(s,a)=>s.getInt16(n(a)+18,!0)*.006,PointSourceId:(s,a)=>s.getUint16(n(a)+20,!0),GpsTime:(s,a)=>s.getFloat64(n(a)+22,!0)}}function Zl(i){const e=fi(i);return{...Kl(i),Red:(t,n)=>t.getUint16(e(n)+30,!0),Green:(t,n)=>t.getUint16(e(n)+32,!0),Blue:(t,n)=>t.getUint16(e(n)+34,!0)}}function Rv(i){const e=fi(i);return{...Zl(i),Infrared:(t,n)=>t.getUint16(e(n)+36,!0)}}function fi(i){const{pointDataRecordLength:e}=i;return function(n){return n*e}}var Br={},or={};Object.defineProperty(or,"__esModule",{value:!0});or.formatGuid=or.parsePoint=void 0;const Jl=un;function Pv(i){const e=Jl.Binary.toDataView(i);if(e.byteLength!==24)throw new Error(`Invalid tuple buffer length: ${e.byteLength}`);return[e.getFloat64(0,!0),e.getFloat64(8,!0),e.getFloat64(16,!0)]}or.parsePoint=Pv;function Lv(i){const e=Jl.Binary.toDataView(i);if(e.byteLength!==16)throw new Error(`Invalid GUID buffer length: ${e.byteLength}`);let t="";for(let n=0;n<e.byteLength;n+=4){const r=e.getUint32(n,!0);t+=r.toString(16).padStart(8,"0")}return[t.slice(0,8),t.slice(8,12),t.slice(12,16),t.slice(16,32)].join("-")}or.formatGuid=Lv;Object.defineProperty(Br,"__esModule",{value:!0});Br.Header=void 0;const qt=un,el=An,Na=or;Br.Header={parse:Dv};function Dv(i){if(i.byteLength<el.minHeaderLength)throw new Error(`Invalid header: must be at least ${el.minHeaderLength} bytes`);const e=qt.Binary.toDataView(i),t=qt.Binary.toCString(i.slice(0,4));if(t!=="LASF")throw new Error(`Invalid file signature: ${t}`);const n=e.getUint8(24),r=e.getUint8(25);if(n!==1||r!==2&&r!==4)throw new Error(`Invalid version (only 1.2 and 1.4 supported): ${n}.${r}`);const s={fileSignature:t,fileSourceId:e.getUint16(4,!0),globalEncoding:e.getUint16(6,!0),projectId:(0,Na.formatGuid)(i.slice(8,24)),majorVersion:n,minorVersion:r,systemIdentifier:qt.Binary.toCString(i.slice(26,58)),generatingSoftware:qt.Binary.toCString(i.slice(58,90)),fileCreationDayOfYear:e.getUint16(90,!0),fileCreationYear:e.getUint16(92,!0),headerLength:e.getUint16(94,!0),pointDataOffset:e.getUint32(96,!0),vlrCount:e.getUint32(100,!0),pointDataRecordFormat:e.getUint8(104)&15,pointDataRecordLength:e.getUint16(105,!0),pointCount:e.getUint32(107,!0),pointCountByReturn:Uv(i.slice(111,131)),scale:(0,Na.parsePoint)(i.slice(131,155)),offset:(0,Na.parsePoint)(i.slice(155,179)),min:[e.getFloat64(187,!0),e.getFloat64(203,!0),e.getFloat64(219,!0)],max:[e.getFloat64(179,!0),e.getFloat64(195,!0),e.getFloat64(211,!0)],waveformDataOffset:0,evlrOffset:0,evlrCount:0};return r==2?s:{...s,pointCount:(0,qt.parseBigInt)((0,qt.getBigUint64)(e,247,!0)),pointCountByReturn:Iv(i.slice(255,375)),waveformDataOffset:(0,qt.parseBigInt)((0,qt.getBigUint64)(e,227,!0)),evlrOffset:(0,qt.parseBigInt)((0,qt.getBigUint64)(e,235,!0)),evlrCount:e.getUint32(243,!0)}}function Iv(i){const e=qt.Binary.toDataView(i),t=[];for(let n=0;n<15*8;n+=8)t.push((0,qt.getBigUint64)(e,n,!0));return t.map(n=>(0,qt.parseBigInt)(n))}function Uv(i){const e=qt.Binary.toDataView(i),t=[];for(let n=0;n<5*4;n+=4)t.push(e.getUint32(n,!0));return t}var ai={},oi={},Ql={exports:{}};(function(i,e){var t=(()=>{var n=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(r){r=r||{};var s=typeof r<"u"?r:{},a,o;s.ready=new Promise(function(g,_){a=g,o=_}),["_main","___getTypeName","__embind_initialize_bindings","_fflush","onRuntimeInitialized"].forEach(g=>{Object.getOwnPropertyDescriptor(s.ready,g)||Object.defineProperty(s.ready,g,{get:()=>Pe("You are getting "+g+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"),set:()=>Pe("You are setting "+g+" on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js")})});var c=Object.assign({},s),l="./this.program",u=!0,f=!1,d=!1,m=!1;if(s.ENVIRONMENT)throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");var v="";function x(g){return s.locateFile?s.locateFile(g,v):v+g}var p;if(typeof document<"u"&&document.currentScript&&(v=document.currentScript.src),n&&(v=n),v.indexOf("blob:")!==0?v=v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):v="",!(typeof window=="object"||typeof importScripts=="function"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var h=s.print||console.log.bind(console),C=s.printErr||console.warn.bind(console);Object.assign(s,c),c=null,df(),s.arguments&&s.arguments,b("arguments","arguments_"),s.thisProgram&&(l=s.thisProgram),b("thisProgram","thisProgram"),s.quit&&s.quit,b("quit","quit_"),w(typeof s.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),w(typeof s.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),w(typeof s.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),w(typeof s.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),w(typeof s.read>"u","Module.read option was removed (modify read_ in JS)"),w(typeof s.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),w(typeof s.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),w(typeof s.setWindowTitle>"u","Module.setWindowTitle option was removed (modify setWindowTitle in JS)"),w(typeof s.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),b("read","read_"),b("readAsync","readAsync"),b("readBinary","readBinary"),b("setWindowTitle","setWindowTitle"),w(!f,"worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable."),w(!d,"node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable."),w(!m,"shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");function b(g,_){Object.getOwnPropertyDescriptor(s,g)||Object.defineProperty(s,g,{configurable:!0,get:function(){Pe("Module."+g+" has been replaced with plain "+_+" (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)")}})}function L(g){Object.getOwnPropertyDescriptor(s,g)&&Pe("`Module."+g+"` was supplied but `"+g+"` not included in INCOMING_MODULE_JS_API")}function X(g){return g==="FS_createPath"||g==="FS_createDataFile"||g==="FS_createPreloadedFile"||g==="FS_unlink"||g==="addRunDependency"||g==="FS_createLazyFile"||g==="FS_createDevice"||g==="removeRunDependency"}function U(g){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,g)&&Object.defineProperty(globalThis,g,{configurable:!0,get:function(){var _="`"+g+"` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";X(g)&&(_+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),G(_)}})}function D(g){Object.getOwnPropertyDescriptor(s,g)||Object.defineProperty(s,g,{configurable:!0,get:function(){var _="'"+g+"' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";X(g)&&(_+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Pe(_)}})}var z;s.wasmBinary&&(z=s.wasmBinary),b("wasmBinary","wasmBinary"),s.noExitRuntime,b("noExitRuntime","noExitRuntime"),typeof WebAssembly!="object"&&Pe("no native wasm support detected");var A,E=!1;function w(g,_){g||Pe("Assertion failed"+(_?": "+_:""))}var ee=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function q(g,_,T){for(var F=_+T,Z=_;g[Z]&&!(Z>=F);)++Z;if(Z-_>16&&g.buffer&&ee)return ee.decode(g.subarray(_,Z));for(var re="";_<Z;){var ce=g[_++];if(!(ce&128)){re+=String.fromCharCode(ce);continue}var te=g[_++]&63;if((ce&224)==192){re+=String.fromCharCode((ce&31)<<6|te);continue}var ae=g[_++]&63;if((ce&240)==224?ce=(ce&15)<<12|te<<6|ae:((ce&248)!=240&&G("Invalid UTF-8 leading byte 0x"+ce.toString(16)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),ce=(ce&7)<<18|te<<12|ae<<6|g[_++]&63),ce<65536)re+=String.fromCharCode(ce);else{var be=ce-65536;re+=String.fromCharCode(55296|be>>10,56320|be&1023)}}return re}function R(g,_){return g?q(he,g,_):""}function N(g,_,T,F){if(!(F>0))return 0;for(var Z=T,re=T+F-1,ce=0;ce<g.length;++ce){var te=g.charCodeAt(ce);if(te>=55296&&te<=57343){var ae=g.charCodeAt(++ce);te=65536+((te&1023)<<10)|ae&1023}if(te<=127){if(T>=re)break;_[T++]=te}else if(te<=2047){if(T+1>=re)break;_[T++]=192|te>>6,_[T++]=128|te&63}else if(te<=65535){if(T+2>=re)break;_[T++]=224|te>>12,_[T++]=128|te>>6&63,_[T++]=128|te&63}else{if(T+3>=re)break;te>1114111&&G("Invalid Unicode code point 0x"+te.toString(16)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),_[T++]=240|te>>18,_[T++]=128|te>>12&63,_[T++]=128|te>>6&63,_[T++]=128|te&63}}return _[T]=0,T-Z}function k(g,_,T){return w(typeof T=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),N(g,he,_,T)}function Q(g){for(var _=0,T=0;T<g.length;++T){var F=g.charCodeAt(T);F<=127?_++:F<=2047?_+=2:F>=55296&&F<=57343?(_+=4,++T):_+=3}return _}var Y,ne,he,ve,Xe,Ie,$,fe,Ee;function Me(g){Y=g,s.HEAP8=ne=new Int8Array(g),s.HEAP16=ve=new Int16Array(g),s.HEAP32=Ie=new Int32Array(g),s.HEAPU8=he=new Uint8Array(g),s.HEAPU16=Xe=new Uint16Array(g),s.HEAPU32=$=new Uint32Array(g),s.HEAPF32=fe=new Float32Array(g),s.HEAPF64=Ee=new Float64Array(g)}var Ve=65536;s.TOTAL_STACK&&w(Ve===s.TOTAL_STACK,"the stack size can no longer be determined at runtime");var Ye=s.INITIAL_MEMORY||262144;b("INITIAL_MEMORY","INITIAL_MEMORY"),w(Ye>=Ve,"INITIAL_MEMORY should be larger than TOTAL_STACK, was "+Ye+"! (TOTAL_STACK="+Ve+")"),w(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support"),w(!s.wasmMemory,"Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),w(Ye==262144,"Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");var je;function dt(){var g=sa();w((g&3)==0),$[g>>2]=34821223,$[g+4>>2]=2310721022,$[0]=1668509029}function I(){if(!E){var g=sa(),_=$[g>>2],T=$[g+4>>2];(_!=34821223||T!=2310721022)&&Pe("Stack overflow! Stack cookie has been overwritten at 0x"+g.toString(16)+", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x"+T.toString(16)+" 0x"+_.toString(16)),$[0]!==1668509029&&Pe("Runtime error: The application has corrupted its heap memory area (address zero)!")}}(function(){var g=new Int16Array(1),_=new Int8Array(g.buffer);if(g[0]=25459,_[0]!==115||_[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();var mt=[],tt=[],it=[],we=!1;function _t(){if(s.preRun)for(typeof s.preRun=="function"&&(s.preRun=[s.preRun]);s.preRun.length;)P(s.preRun.shift());V(mt)}function Ge(){w(!we),we=!0,I(),V(tt)}function We(){if(I(),s.postRun)for(typeof s.postRun=="function"&&(s.postRun=[s.postRun]);s.postRun.length;)K(s.postRun.shift());V(it)}function P(g){mt.unshift(g)}function S(g){tt.unshift(g)}function K(g){it.unshift(g)}w(Math.imul,"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),w(Math.fround,"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),w(Math.clz32,"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"),w(Math.trunc,"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");var se=0,oe=null,ie=null,Re={};function ge(g){se++,s.monitorRunDependencies&&s.monitorRunDependencies(se),w(!Re[g]),Re[g]=1,oe===null&&typeof setInterval<"u"&&(oe=setInterval(function(){if(E){clearInterval(oe),oe=null;return}var _=!1;for(var T in Re)_||(_=!0,C("still waiting on run dependencies:")),C("dependency: "+T);_&&C("(end of list)")},1e4))}function xe(g){if(se--,s.monitorRunDependencies&&s.monitorRunDependencies(se),w(Re[g]),delete Re[g],se==0&&(oe!==null&&(clearInterval(oe),oe=null),ie)){var _=ie;ie=null,_()}}function Pe(g){s.onAbort&&s.onAbort(g),g="Aborted("+g+")",C(g),E=!0;var _=new WebAssembly.RuntimeError(g);throw o(_),_}var le={error:function(){Pe("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init:function(){le.error()},createDataFile:function(){le.error()},createPreloadedFile:function(){le.error()},createLazyFile:function(){le.error()},open:function(){le.error()},mkdev:function(){le.error()},registerDevice:function(){le.error()},analyzePath:function(){le.error()},loadFilesFromDB:function(){le.error()},ErrnoError:function(){le.error()}};s.FS_createDataFile=le.createDataFile,s.FS_createPreloadedFile=le.createPreloadedFile;var Se="data:application/octet-stream;base64,";function Qe(g){return g.startsWith(Se)}function Oe(g){return g.startsWith("file://")}function me(g,_){return function(){var T=g,F=_;return F=s.asm,w(we,"native function `"+T+"` called before runtime initialization"),F[g]||w(F[g],"exported native function `"+T+"` not found"),F[g].apply(null,arguments)}}var Ce;Ce="laz-perf.wasm",Qe(Ce)||(Ce=x(Ce));function ze(g){try{if(g==Ce&&z)return new Uint8Array(z);throw"both async and sync fetching of the wasm failed"}catch(_){Pe(_)}}function ht(){return!z&&u&&typeof fetch=="function"?fetch(Ce,{credentials:"same-origin"}).then(function(g){if(!g.ok)throw"failed to load wasm binary file at '"+Ce+"'";return g.arrayBuffer()}).catch(function(){return ze(Ce)}):Promise.resolve().then(function(){return ze(Ce)})}function y(){var g={env:ko,wasi_snapshot_preview1:ko};function _(te,ae){var be=te.exports;s.asm=be,A=s.asm.memory,w(A,"memory not found in wasm exports"),Me(A.buffer),je=s.asm.__indirect_function_table,w(je,"table not found in wasm exports"),S(s.asm.__wasm_call_ctors),xe("wasm-instantiate")}ge("wasm-instantiate");var T=s;function F(te){w(s===T,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),T=null,_(te.instance)}function Z(te){return ht().then(function(ae){return WebAssembly.instantiate(ae,g)}).then(function(ae){return ae}).then(te,function(ae){C("failed to asynchronously prepare wasm: "+ae),Oe(Ce)&&C("warning: Loading from a file URI ("+Ce+") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing"),Pe(ae)})}function re(){return!z&&typeof WebAssembly.instantiateStreaming=="function"&&!Qe(Ce)&&typeof fetch=="function"?fetch(Ce,{credentials:"same-origin"}).then(function(te){var ae=WebAssembly.instantiateStreaming(te,g);return ae.then(F,function(be){return C("wasm streaming compile failed: "+be),C("falling back to ArrayBuffer instantiation"),Z(F)})}):Z(F)}if(s.instantiateWasm)try{var ce=s.instantiateWasm(g,_);return ce}catch(te){return C("Module.instantiateWasm callback failed with error: "+te),!1}return re().catch(o),{}}function V(g){for(;g.length>0;)g.shift()(s)}function G(g){G.shown||(G.shown={}),G.shown[g]||(G.shown[g]=1,C(g))}function J(g,_){w(g.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ne.set(g,_)}function ue(g){return ra(g+24)+24}function Le(g){this.excPtr=g,this.ptr=g-24,this.set_type=function(_){$[this.ptr+4>>2]=_},this.get_type=function(){return $[this.ptr+4>>2]},this.set_destructor=function(_){$[this.ptr+8>>2]=_},this.get_destructor=function(){return $[this.ptr+8>>2]},this.set_refcount=function(_){Ie[this.ptr>>2]=_},this.set_caught=function(_){_=_?1:0,ne[this.ptr+12>>0]=_},this.get_caught=function(){return ne[this.ptr+12>>0]!=0},this.set_rethrown=function(_){_=_?1:0,ne[this.ptr+13>>0]=_},this.get_rethrown=function(){return ne[this.ptr+13>>0]!=0},this.init=function(_,T){this.set_adjusted_ptr(0),this.set_type(_),this.set_destructor(T),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var _=Ie[this.ptr>>2];Ie[this.ptr>>2]=_+1},this.release_ref=function(){var _=Ie[this.ptr>>2];return Ie[this.ptr>>2]=_-1,w(_>0),_===1},this.set_adjusted_ptr=function(_){$[this.ptr+16>>2]=_},this.get_adjusted_ptr=function(){return $[this.ptr+16>>2]},this.get_exception_ptr=function(){var _=pf(this.get_type());if(_)return $[this.excPtr>>2];var T=this.get_adjusted_ptr();return T!==0?T:this.excPtr}}function He(g,_,T){var F=new Le(g);throw F.init(_,T),g+" - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch."}function yt(g,_,T,F,Z){}function xt(g){switch(g){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+g)}}function nt(){for(var g=new Array(256),_=0;_<256;++_)g[_]=String.fromCharCode(_);Mt=g}var Mt=void 0;function st(g){for(var _="",T=g;he[T];)_+=Mt[he[T++]];return _}var Vt={},vt={},Yt={},Rn=48,di=57;function Xn(g){if(g===void 0)return"_unknown";g=g.replace(/[^a-zA-Z0-9_]/g,"$");var _=g.charCodeAt(0);return _>=Rn&&_<=di?"_"+g:g}function Ri(g,_){return g=Xn(g),new Function("body","return function "+g+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(_)}function Yn(g,_){var T=Ri(_,function(F){this.name=_,this.message=F;var Z=new Error(F).stack;Z!==void 0&&(this.stack=this.toString()+`
`+Z.replace(/^Error(:[^\n]*)?\n/,""))});return T.prototype=Object.create(g.prototype),T.prototype.constructor=T,T.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},T}var Pn=void 0;function rt(g){throw new Pn(g)}var kr=void 0;function Pi(g){throw new kr(g)}function hi(g,_,T){g.forEach(function(te){Yt[te]=_});function F(te){var ae=T(te);ae.length!==g.length&&Pi("Mismatched type converter count");for(var be=0;be<g.length;++be)M(g[be],ae[be])}var Z=new Array(_.length),re=[],ce=0;_.forEach((te,ae)=>{vt.hasOwnProperty(te)?Z[ae]=vt[te]:(re.push(te),Vt.hasOwnProperty(te)||(Vt[te]=[]),Vt[te].push(()=>{Z[ae]=vt[te],++ce,ce===re.length&&F(Z)}))}),re.length===0&&F(Z)}function M(g,_,T={}){if(!("argPackAdvance"in _))throw new TypeError("registerType registeredInstance requires argPackAdvance");var F=_.name;if(g||rt('type "'+F+'" must have a positive integer typeid pointer'),vt.hasOwnProperty(g)){if(T.ignoreDuplicateRegistrations)return;rt("Cannot register type '"+F+"' twice")}if(vt[g]=_,delete Yt[g],Vt.hasOwnProperty(g)){var Z=Vt[g];delete Vt[g],Z.forEach(re=>re())}}function O(g,_,T,F,Z){var re=xt(T);_=st(_),M(g,{name:_,fromWireType:function(ce){return!!ce},toWireType:function(ce,te){return te?F:Z},argPackAdvance:8,readValueFromPointer:function(ce){var te;if(T===1)te=ne;else if(T===2)te=ve;else if(T===4)te=Ie;else throw new TypeError("Unknown boolean type size: "+_);return this.fromWireType(te[ce>>re])},destructorFunction:null})}function W(g){if(!(this instanceof vn)||!(g instanceof vn))return!1;for(var _=this.$$.ptrType.registeredClass,T=this.$$.ptr,F=g.$$.ptrType.registeredClass,Z=g.$$.ptr;_.baseClass;)T=_.upcast(T),_=_.baseClass;for(;F.baseClass;)Z=F.upcast(Z),F=F.baseClass;return _===F&&T===Z}function j(g){return{count:g.count,deleteScheduled:g.deleteScheduled,preservePointerOnDelete:g.preservePointerOnDelete,ptr:g.ptr,ptrType:g.ptrType,smartPtr:g.smartPtr,smartPtrType:g.smartPtrType}}function B(g){function _(T){return T.$$.ptrType.registeredClass.name}rt(_(g)+" instance already deleted")}var pe=!1;function ye(g){}function Te(g){g.smartPtr?g.smartPtrType.rawDestructor(g.smartPtr):g.ptrType.registeredClass.rawDestructor(g.ptr)}function Ae(g){g.count.value-=1;var _=g.count.value===0;_&&Te(g)}function Ne(g,_,T){if(_===T)return g;if(T.baseClass===void 0)return null;var F=Ne(g,_,T.baseClass);return F===null?null:T.downcast(F)}var Be={};function Ue(){return Object.keys(St).length}function ot(){var g=[];for(var _ in St)St.hasOwnProperty(_)&&g.push(St[_]);return g}var ft=[];function pt(){for(;ft.length;){var g=ft.pop();g.$$.deleteScheduled=!1,g.delete()}}var wt=void 0;function ct(g){wt=g,ft.length&&wt&&wt(pt)}function De(){s.getInheritedInstanceCount=Ue,s.getLiveInheritedInstances=ot,s.flushPendingDeletes=pt,s.setDelayFunction=ct}var St={};function lt(g,_){for(_===void 0&&rt("ptr should not be undefined");g.baseClass;)_=g.upcast(_),g=g.baseClass;return _}function Jt(g,_){return _=lt(g,_),St[_]}function fn(g,_){(!_.ptrType||!_.ptr)&&Pi("makeClassHandle requires ptr and ptrType");var T=!!_.smartPtrType,F=!!_.smartPtr;return T!==F&&Pi("Both smartPtrType and smartPtr must be specified"),_.count={value:1},Ln(Object.create(g,{$$:{value:_}}))}function Nt(g){var _=this.getPointee(g);if(!_)return this.destructor(g),null;var T=Jt(this.registeredClass,_);if(T!==void 0){if(T.$$.count.value===0)return T.$$.ptr=_,T.$$.smartPtr=g,T.clone();var F=T.clone();return this.destructor(g),F}function Z(){return this.isSmartPointer?fn(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:_,smartPtrType:this,smartPtr:g}):fn(this.registeredClass.instancePrototype,{ptrType:this,ptr:g})}var re=this.registeredClass.getActualType(_),ce=Be[re];if(!ce)return Z.call(this);var te;this.isConst?te=ce.constPointerType:te=ce.pointerType;var ae=Ne(_,this.registeredClass,te.registeredClass);return ae===null?Z.call(this):this.isSmartPointer?fn(te.registeredClass.instancePrototype,{ptrType:te,ptr:ae,smartPtrType:this,smartPtr:g}):fn(te.registeredClass.instancePrototype,{ptrType:te,ptr:ae})}function Ln(g){return typeof FinalizationRegistry>"u"?(Ln=_=>_,g):(pe=new FinalizationRegistry(_=>{console.warn(_.leakWarning.stack.replace(/^Error: /,"")),Ae(_.$$)}),Ln=_=>{var T=_.$$,F=!!T.smartPtr;if(F){var Z={$$:T},re=T.ptrType.registeredClass;Z.leakWarning=new Error("Embind found a leaked C++ instance "+re.name+" <0x"+T.ptr.toString(16)+`>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`),"captureStackTrace"in Error&&Error.captureStackTrace(Z.leakWarning,Nt),pe.register(_,Z,_)}return _},ye=_=>pe.unregister(_),Ln(g))}function Et(){if(this.$$.ptr||B(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var g=Ln(Object.create(Object.getPrototypeOf(this),{$$:{value:j(this.$$)}}));return g.$$.count.value+=1,g.$$.deleteScheduled=!1,g}function _n(){this.$$.ptr||B(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&rt("Object already scheduled for deletion"),ye(this),Ae(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function hr(){return!this.$$.ptr}function $t(){return this.$$.ptr||B(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&rt("Object already scheduled for deletion"),ft.push(this),ft.length===1&&wt&&wt(pt),this.$$.deleteScheduled=!0,this}function pr(){vn.prototype.isAliasOf=W,vn.prototype.clone=Et,vn.prototype.delete=_n,vn.prototype.isDeleted=hr,vn.prototype.deleteLater=$t}function vn(){}function mr(g,_,T){if(g[_].overloadTable===void 0){var F=g[_];g[_]=function(){return g[_].overloadTable.hasOwnProperty(arguments.length)||rt("Function '"+T+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+g[_].overloadTable+")!"),g[_].overloadTable[arguments.length].apply(this,arguments)},g[_].overloadTable=[],g[_].overloadTable[F.argCount]=F}}function cu(g,_,T){s.hasOwnProperty(g)?(rt("Cannot register public name '"+g+"' twice"),mr(s,g,g),s.hasOwnProperty(T)&&rt("Cannot register multiple overloads of a function with the same number of arguments ("+T+")!"),s[g].overloadTable[T]=_):s[g]=_}function lu(g,_,T,F,Z,re,ce,te){this.name=g,this.constructor=_,this.instancePrototype=T,this.rawDestructor=F,this.baseClass=Z,this.getActualType=re,this.upcast=ce,this.downcast=te,this.pureVirtualFunctions=[]}function Js(g,_,T){for(;_!==T;)_.upcast||rt("Expected null or instance of "+T.name+", got an instance of "+_.name),g=_.upcast(g),_=_.baseClass;return g}function uu(g,_){if(_===null)return this.isReference&&rt("null is not a valid "+this.name),0;_.$$||rt('Cannot pass "'+Di(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name);var T=_.$$.ptrType.registeredClass,F=Js(_.$$.ptr,T,this.registeredClass);return F}function fu(g,_){var T;if(_===null)return this.isReference&&rt("null is not a valid "+this.name),this.isSmartPointer?(T=this.rawConstructor(),g!==null&&g.push(this.rawDestructor,T),T):0;_.$$||rt('Cannot pass "'+Di(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&_.$$.ptrType.isConst&&rt("Cannot convert argument of type "+(_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name)+" to parameter type "+this.name);var F=_.$$.ptrType.registeredClass;if(T=Js(_.$$.ptr,F,this.registeredClass),this.isSmartPointer)switch(_.$$.smartPtr===void 0&&rt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:_.$$.smartPtrType===this?T=_.$$.smartPtr:rt("Cannot convert argument of type "+(_.$$.smartPtrType?_.$$.smartPtrType.name:_.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:T=_.$$.smartPtr;break;case 2:if(_.$$.smartPtrType===this)T=_.$$.smartPtr;else{var Z=_.clone();T=this.rawShare(T,na.toHandle(function(){Z.delete()})),g!==null&&g.push(this.rawDestructor,T)}break;default:rt("Unsupporting sharing policy")}return T}function du(g,_){if(_===null)return this.isReference&&rt("null is not a valid "+this.name),0;_.$$||rt('Cannot pass "'+Di(_)+'" as a '+this.name),_.$$.ptr||rt("Cannot pass deleted object as a pointer of type "+this.name),_.$$.ptrType.isConst&&rt("Cannot convert argument of type "+_.$$.ptrType.name+" to parameter type "+this.name);var T=_.$$.ptrType.registeredClass,F=Js(_.$$.ptr,T,this.registeredClass);return F}function Vr(g){return this.fromWireType(Ie[g>>2])}function hu(g){return this.rawGetPointee&&(g=this.rawGetPointee(g)),g}function pu(g){this.rawDestructor&&this.rawDestructor(g)}function mu(g){g!==null&&g.delete()}function gu(){Dn.prototype.getPointee=hu,Dn.prototype.destructor=pu,Dn.prototype.argPackAdvance=8,Dn.prototype.readValueFromPointer=Vr,Dn.prototype.deleteObject=mu,Dn.prototype.fromWireType=Nt}function Dn(g,_,T,F,Z,re,ce,te,ae,be,et){this.name=g,this.registeredClass=_,this.isReference=T,this.isConst=F,this.isSmartPointer=Z,this.pointeeType=re,this.sharingPolicy=ce,this.rawGetPointee=te,this.rawConstructor=ae,this.rawShare=be,this.rawDestructor=et,!Z&&_.baseClass===void 0?F?(this.toWireType=uu,this.destructorFunction=null):(this.toWireType=du,this.destructorFunction=null):this.toWireType=fu}function _u(g,_,T){s.hasOwnProperty(g)||Pi("Replacing nonexistant public symbol"),s[g].overloadTable!==void 0&&T!==void 0?s[g].overloadTable[T]=_:(s[g]=_,s[g].argCount=T)}function vu(g,_,T){w("dynCall_"+g in s,"bad function pointer type - no table for sig '"+g+"'"),T&&T.length?w(T.length===g.substring(1).replace(/j/g,"--").length):w(g.length==1);var F=s["dynCall_"+g];return T&&T.length?F.apply(null,[_].concat(T)):F.call(null,_)}var Gr=[];function Qs(g){var _=Gr[g];return _||(g>=Gr.length&&(Gr.length=g+1),Gr[g]=_=je.get(g)),w(je.get(g)==_,"JavaScript-side Wasm function table mirror is out of date!"),_}function yu(g,_,T){if(g.includes("j"))return vu(g,_,T);w(Qs(_),"missing table entry in dynCall: "+_);var F=Qs(_).apply(null,T);return F}function xu(g,_){w(g.includes("j")||g.includes("p"),"getDynCaller should only be called with i64 sigs");var T=[];return function(){return T.length=0,Object.assign(T,arguments),yu(g,_,T)}}function Li(g,_){g=st(g);function T(){return g.includes("j")?xu(g,_):Qs(_)}var F=T();return typeof F!="function"&&rt("unknown function pointer with signature "+g+": "+_),F}var No=void 0;function Su(g){var _=hf(g),T=st(_);return $n(_),T}function ea(g,_){var T=[],F={};function Z(re){if(!F[re]&&!vt[re]){if(Yt[re]){Yt[re].forEach(Z);return}T.push(re),F[re]=!0}}throw _.forEach(Z),new No(g+": "+T.map(Su).join([", "]))}function Mu(g,_,T,F,Z,re,ce,te,ae,be,et,qe,ke){et=st(et),re=Li(Z,re),te&&(te=Li(ce,te)),be&&(be=Li(ae,be)),ke=Li(qe,ke);var Ct=Xn(et);cu(Ct,function(){ea("Cannot construct "+et+" due to unbound types",[F])}),hi([g,_,T],F?[F]:[],function(It){It=It[0];var Ft,Qt;F?(Ft=It.registeredClass,Qt=Ft.instancePrototype):Qt=vn.prototype;var xn=Ri(Ct,function(){if(Object.getPrototypeOf(this)!==de)throw new Pn("Use 'new' to construct "+et);if(Fe.constructor_body===void 0)throw new Pn(et+" has no accessible constructor");var Yr=Fe.constructor_body[arguments.length];if(Yr===void 0)throw new Pn("Tried to invoke ctor of "+et+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(Fe.constructor_body).toString()+") parameters instead!");return Yr.apply(this,arguments)}),de=Object.create(Qt,{constructor:{value:xn}});xn.prototype=de;var Fe=new lu(et,xn,de,ke,Ft,re,te,be),jt=new Dn(et,Fe,!0,!1,!1),Ut=new Dn(et+"*",Fe,!1,!1,!1),pi=new Dn(et+" const*",Fe,!1,!0,!1);return Be[g]={pointerType:Ut,constPointerType:pi},_u(Ct,xn),[jt,Ut,pi]})}function Fo(g,_){for(var T=[],F=0;F<g;F++)T.push($[_+F*4>>2]);return T}function Eu(g){for(;g.length;){var _=g.pop(),T=g.pop();T(_)}}function bu(g,_){if(!(g instanceof Function))throw new TypeError("new_ called with constructor type "+typeof g+" which is not a function");var T=Ri(g.name||"unknownFunctionName",function(){});T.prototype=g.prototype;var F=new T,Z=g.apply(F,_);return Z instanceof Object?Z:F}function Oo(g,_,T,F,Z){var re=_.length;re<2&&rt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var ce=_[1]!==null&&T!==null,te=!1,ae=1;ae<_.length;++ae)if(_[ae]!==null&&_[ae].destructorFunction===void 0){te=!0;break}for(var be=_[0].name!=="void",et="",qe="",ae=0;ae<re-2;++ae)et+=(ae!==0?", ":"")+"arg"+ae,qe+=(ae!==0?", ":"")+"arg"+ae+"Wired";var ke="return function "+Xn(g)+"("+et+`) {
if (arguments.length !== `+(re-2)+`) {
throwBindingError('function `+g+" called with ' + arguments.length + ' arguments, expected "+(re-2)+` args!');
}
`;te&&(ke+=`var destructors = [];
`);var Ct=te?"destructors":"null",It=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],Ft=[rt,F,Z,Eu,_[0],_[1]];ce&&(ke+="var thisWired = classParam.toWireType("+Ct+`, this);
`);for(var ae=0;ae<re-2;++ae)ke+="var arg"+ae+"Wired = argType"+ae+".toWireType("+Ct+", arg"+ae+"); // "+_[ae+2].name+`
`,It.push("argType"+ae),Ft.push(_[ae+2]);if(ce&&(qe="thisWired"+(qe.length>0?", ":"")+qe),ke+=(be?"var rv = ":"")+"invoker(fn"+(qe.length>0?", ":"")+qe+`);
`,te)ke+=`runDestructors(destructors);
`;else for(var ae=ce?1:2;ae<_.length;++ae){var Qt=ae===1?"thisWired":"arg"+(ae-2)+"Wired";_[ae].destructorFunction!==null&&(ke+=Qt+"_dtor("+Qt+"); // "+_[ae].name+`
`,It.push(Qt+"_dtor"),Ft.push(_[ae].destructorFunction))}be&&(ke+=`var ret = retType.fromWireType(rv);
return ret;
`),ke+=`}
`,It.push(ke);var xn=bu(Function,It).apply(null,Ft);return xn}function Tu(g,_,T,F,Z,re){w(_>0);var ce=Fo(_,T);Z=Li(F,Z),hi([],[g],function(te){te=te[0];var ae="constructor "+te.name;if(te.registeredClass.constructor_body===void 0&&(te.registeredClass.constructor_body=[]),te.registeredClass.constructor_body[_-1]!==void 0)throw new Pn("Cannot register multiple constructors with identical number of parameters ("+(_-1)+") for class '"+te.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return te.registeredClass.constructor_body[_-1]=()=>{ea("Cannot construct "+te.name+" due to unbound types",ce)},hi([],ce,function(be){return be.splice(1,0,null),te.registeredClass.constructor_body[_-1]=Oo(ae,be,null,Z,re),[]}),[]})}function Au(g,_,T,F,Z,re,ce,te){var ae=Fo(T,F);_=st(_),re=Li(Z,re),hi([],[g],function(be){be=be[0];var et=be.name+"."+_;_.startsWith("@@")&&(_=Symbol[_.substring(2)]),te&&be.registeredClass.pureVirtualFunctions.push(_);function qe(){ea("Cannot call "+et+" due to unbound types",ae)}var ke=be.registeredClass.instancePrototype,Ct=ke[_];return Ct===void 0||Ct.overloadTable===void 0&&Ct.className!==be.name&&Ct.argCount===T-2?(qe.argCount=T-2,qe.className=be.name,ke[_]=qe):(mr(ke,_,et),ke[_].overloadTable[T-2]=qe),hi([],ae,function(It){var Ft=Oo(et,It,be,re,ce);return ke[_].overloadTable===void 0?(Ft.argCount=T-2,ke[_]=Ft):ke[_].overloadTable[T-2]=Ft,[]}),[]})}var ta=[],yn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function wu(g){g>4&&--yn[g].refcount===0&&(yn[g]=void 0,ta.push(g))}function Cu(){for(var g=0,_=5;_<yn.length;++_)yn[_]!==void 0&&++g;return g}function Ru(){for(var g=5;g<yn.length;++g)if(yn[g]!==void 0)return yn[g];return null}function Pu(){s.count_emval_handles=Cu,s.get_first_emval=Ru}var na={toValue:g=>(g||rt("Cannot use deleted val. handle = "+g),yn[g].value),toHandle:g=>{switch(g){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:{var _=ta.length?ta.pop():yn.length;return yn[_]={refcount:1,value:g},_}}}};function Lu(g,_){_=st(_),M(g,{name:_,fromWireType:function(T){var F=na.toValue(T);return wu(T),F},toWireType:function(T,F){return na.toHandle(F)},argPackAdvance:8,readValueFromPointer:Vr,destructorFunction:null})}function Di(g){if(g===null)return"null";var _=typeof g;return _==="object"||_==="array"||_==="function"?g.toString():""+g}function Du(g,_){switch(_){case 2:return function(T){return this.fromWireType(fe[T>>2])};case 3:return function(T){return this.fromWireType(Ee[T>>3])};default:throw new TypeError("Unknown float type: "+g)}}function Iu(g,_,T){var F=xt(T);_=st(_),M(g,{name:_,fromWireType:function(Z){return Z},toWireType:function(Z,re){if(typeof re!="number"&&typeof re!="boolean")throw new TypeError('Cannot convert "'+Di(re)+'" to '+this.name);return re},argPackAdvance:8,readValueFromPointer:Du(_,F),destructorFunction:null})}function Uu(g,_,T){switch(_){case 0:return T?function(Z){return ne[Z]}:function(Z){return he[Z]};case 1:return T?function(Z){return ve[Z>>1]}:function(Z){return Xe[Z>>1]};case 2:return T?function(Z){return Ie[Z>>2]}:function(Z){return $[Z>>2]};default:throw new TypeError("Unknown integer type: "+g)}}function Nu(g,_,T,F,Z){_=st(_),Z===-1&&(Z=4294967295);var re=xt(T),ce=qe=>qe;if(F===0){var te=32-8*T;ce=qe=>qe<<te>>>te}var ae=_.includes("unsigned"),be=(qe,ke)=>{if(typeof qe!="number"&&typeof qe!="boolean")throw new TypeError('Cannot convert "'+Di(qe)+'" to '+ke);if(qe<F||qe>Z)throw new TypeError('Passing a number "'+Di(qe)+'" from JS side to C/C++ side to an argument of type "'+_+'", which is outside the valid range ['+F+", "+Z+"]!")},et;ae?et=function(qe,ke){return be(ke,this.name),ke>>>0}:et=function(qe,ke){return be(ke,this.name),ke},M(g,{name:_,fromWireType:ce,toWireType:et,argPackAdvance:8,readValueFromPointer:Uu(_,re,F!==0),destructorFunction:null})}function Fu(g,_,T){var F=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Z=F[_];function re(ce){ce=ce>>2;var te=$,ae=te[ce],be=te[ce+1];return new Z(Y,be,ae)}T=st(T),M(g,{name:T,fromWireType:re,argPackAdvance:8,readValueFromPointer:re},{ignoreDuplicateRegistrations:!0})}function Ou(g,_){_=st(_);var T=_==="std::string";M(g,{name:_,fromWireType:function(F){var Z=$[F>>2],re=F+4,ce;if(T)for(var te=re,ae=0;ae<=Z;++ae){var be=re+ae;if(ae==Z||he[be]==0){var et=be-te,qe=R(te,et);ce===void 0?ce=qe:(ce+="\0",ce+=qe),te=be+1}}else{for(var ke=new Array(Z),ae=0;ae<Z;++ae)ke[ae]=String.fromCharCode(he[re+ae]);ce=ke.join("")}return $n(F),ce},toWireType:function(F,Z){Z instanceof ArrayBuffer&&(Z=new Uint8Array(Z));var re,ce=typeof Z=="string";ce||Z instanceof Uint8Array||Z instanceof Uint8ClampedArray||Z instanceof Int8Array||rt("Cannot pass non-string to std::string"),T&&ce?re=Q(Z):re=Z.length;var te=ra(4+re+1),ae=te+4;if($[te>>2]=re,T&&ce)k(Z,ae,re+1);else if(ce)for(var be=0;be<re;++be){var et=Z.charCodeAt(be);et>255&&($n(ae),rt("String has UTF-16 code units that do not fit in 8 bits")),he[ae+be]=et}else for(var be=0;be<re;++be)he[ae+be]=Z[be];return F!==null&&F.push($n,te),te},argPackAdvance:8,readValueFromPointer:Vr,destructorFunction:function(F){$n(F)}})}var Bo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Bu(g,_){w(g%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var T=g,F=T>>1,Z=F+_/2;!(F>=Z)&&Xe[F];)++F;if(T=F<<1,T-g>32&&Bo)return Bo.decode(he.subarray(g,T));for(var re="",ce=0;!(ce>=_/2);++ce){var te=ve[g+ce*2>>1];if(te==0)break;re+=String.fromCharCode(te)}return re}function zu(g,_,T){if(w(_%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),w(typeof T=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),T===void 0&&(T=2147483647),T<2)return 0;T-=2;for(var F=_,Z=T<g.length*2?T/2:g.length,re=0;re<Z;++re){var ce=g.charCodeAt(re);ve[_>>1]=ce,_+=2}return ve[_>>1]=0,_-F}function Hu(g){return g.length*2}function ku(g,_){w(g%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var T=0,F="";!(T>=_/4);){var Z=Ie[g+T*4>>2];if(Z==0)break;if(++T,Z>=65536){var re=Z-65536;F+=String.fromCharCode(55296|re>>10,56320|re&1023)}else F+=String.fromCharCode(Z)}return F}function Vu(g,_,T){if(w(_%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),w(typeof T=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),T===void 0&&(T=2147483647),T<4)return 0;for(var F=_,Z=F+T-4,re=0;re<g.length;++re){var ce=g.charCodeAt(re);if(ce>=55296&&ce<=57343){var te=g.charCodeAt(++re);ce=65536+((ce&1023)<<10)|te&1023}if(Ie[_>>2]=ce,_+=4,_+4>Z)break}return Ie[_>>2]=0,_-F}function Gu(g){for(var _=0,T=0;T<g.length;++T){var F=g.charCodeAt(T);F>=55296&&F<=57343&&++T,_+=4}return _}function Wu(g,_,T){T=st(T);var F,Z,re,ce,te;_===2?(F=Bu,Z=zu,ce=Hu,re=()=>Xe,te=1):_===4&&(F=ku,Z=Vu,ce=Gu,re=()=>$,te=2),M(g,{name:T,fromWireType:function(ae){for(var be=$[ae>>2],et=re(),qe,ke=ae+4,Ct=0;Ct<=be;++Ct){var It=ae+4+Ct*_;if(Ct==be||et[It>>te]==0){var Ft=It-ke,Qt=F(ke,Ft);qe===void 0?qe=Qt:(qe+="\0",qe+=Qt),ke=It+_}}return $n(ae),qe},toWireType:function(ae,be){typeof be!="string"&&rt("Cannot pass non-string to C++ string type "+T);var et=ce(be),qe=ra(4+et+_);return $[qe>>2]=et>>te,Z(be,qe+4,et+_),ae!==null&&ae.push($n,qe),qe},argPackAdvance:8,readValueFromPointer:Vr,destructorFunction:function(ae){$n(ae)}})}function Xu(g,_){_=st(_),M(g,{isVoid:!0,name:_,argPackAdvance:0,fromWireType:function(){},toWireType:function(T,F){}})}function Yu(){Pe("native code called abort()")}function $u(g,_,T){he.copyWithin(g,_,_+T)}function ju(){return 2147483648}function qu(g){try{return A.grow(g-Y.byteLength+65535>>>16),Me(A.buffer),1}catch(_){C("emscripten_realloc_buffer: Attempted to grow heap from "+Y.byteLength+" bytes to "+g+" bytes, but got error: "+_)}}function Ku(g){var _=he.length;g=g>>>0,w(g>_);var T=ju();if(g>T)return C("Cannot enlarge memory, asked to go up to "+g+" bytes, but the limit is "+T+" bytes!"),!1;let F=(ae,be)=>ae+(be-ae%be)%be;for(var Z=1;Z<=4;Z*=2){var re=_*(1+.2/Z);re=Math.min(re,g+100663296);var ce=Math.min(T,F(Math.max(g,re),65536)),te=qu(ce);if(te)return!0}return C("Failed to grow the heap from "+_+" bytes to "+ce+" bytes, not enough memory!"),!1}var ia={};function Zu(){return l||"./this.program"}function gr(){if(!gr.strings){var g=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:g,_:Zu()};for(var T in ia)ia[T]===void 0?delete _[T]:_[T]=ia[T];var F=[];for(var T in _)F.push(T+"="+_[T]);gr.strings=F}return gr.strings}function Ju(g,_,T){for(var F=0;F<g.length;++F)w(g.charCodeAt(F)===(g.charCodeAt(F)&255)),ne[_++>>0]=g.charCodeAt(F);ne[_>>0]=0}function Qu(g,_){var T=0;return gr().forEach(function(F,Z){var re=_+T;$[g+Z*4>>2]=re,Ju(F,re),T+=F.length+1}),0}function ef(g,_){var T=gr();$[g>>2]=T.length;var F=0;return T.forEach(function(Z){F+=Z.length+1}),$[_>>2]=F,0}function tf(g){Pe("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function nf(g,_,T,F,Z){return 70}var rf=[null,[],[]];function sf(g,_){var T=rf[g];w(T),_===0||_===10?((g===1?h:C)(q(T,0)),T.length=0):T.push(_)}function af(g,_,T,F){for(var Z=0,re=0;re<T;re++){var ce=$[_>>2],te=$[_+4>>2];_+=8;for(var ae=0;ae<te;ae++)sf(g,he[ce+ae]);Z+=te}return $[F>>2]=Z,0}function Wr(g){return g%4===0&&(g%100!==0||g%400===0)}function of(g,_){for(var T=0,F=0;F<=_;T+=g[F++]);return T}var zo=[31,29,31,30,31,30,31,31,30,31,30,31],Ho=[31,28,31,30,31,30,31,31,30,31,30,31];function cf(g,_){for(var T=new Date(g.getTime());_>0;){var F=Wr(T.getFullYear()),Z=T.getMonth(),re=(F?zo:Ho)[Z];if(_>re-T.getDate())_-=re-T.getDate()+1,T.setDate(1),Z<11?T.setMonth(Z+1):(T.setMonth(0),T.setFullYear(T.getFullYear()+1));else return T.setDate(T.getDate()+_),T}return T}function lf(g,_,T){var F=Q(g)+1,Z=new Array(F);return N(g,Z,0,Z.length),Z}function uf(g,_,T,F){var Z=Ie[F+40>>2],re={tm_sec:Ie[F>>2],tm_min:Ie[F+4>>2],tm_hour:Ie[F+8>>2],tm_mday:Ie[F+12>>2],tm_mon:Ie[F+16>>2],tm_year:Ie[F+20>>2],tm_wday:Ie[F+24>>2],tm_yday:Ie[F+28>>2],tm_isdst:Ie[F+32>>2],tm_gmtoff:Ie[F+36>>2],tm_zone:Z?R(Z):""},ce=R(T),te={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var ae in te)ce=ce.replace(new RegExp(ae,"g"),te[ae]);var be=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],et=["January","February","March","April","May","June","July","August","September","October","November","December"];function qe(de,Fe,jt){for(var Ut=typeof de=="number"?de.toString():de||"";Ut.length<Fe;)Ut=jt[0]+Ut;return Ut}function ke(de,Fe){return qe(de,Fe,"0")}function Ct(de,Fe){function jt(pi){return pi<0?-1:pi>0?1:0}var Ut;return(Ut=jt(de.getFullYear()-Fe.getFullYear()))===0&&(Ut=jt(de.getMonth()-Fe.getMonth()))===0&&(Ut=jt(de.getDate()-Fe.getDate())),Ut}function It(de){switch(de.getDay()){case 0:return new Date(de.getFullYear()-1,11,29);case 1:return de;case 2:return new Date(de.getFullYear(),0,3);case 3:return new Date(de.getFullYear(),0,2);case 4:return new Date(de.getFullYear(),0,1);case 5:return new Date(de.getFullYear()-1,11,31);case 6:return new Date(de.getFullYear()-1,11,30)}}function Ft(de){var Fe=cf(new Date(de.tm_year+1900,0,1),de.tm_yday),jt=new Date(Fe.getFullYear(),0,4),Ut=new Date(Fe.getFullYear()+1,0,4),pi=It(jt),Yr=It(Ut);return Ct(pi,Fe)<=0?Ct(Yr,Fe)<=0?Fe.getFullYear()+1:Fe.getFullYear():Fe.getFullYear()-1}var Qt={"%a":function(de){return be[de.tm_wday].substring(0,3)},"%A":function(de){return be[de.tm_wday]},"%b":function(de){return et[de.tm_mon].substring(0,3)},"%B":function(de){return et[de.tm_mon]},"%C":function(de){var Fe=de.tm_year+1900;return ke(Fe/100|0,2)},"%d":function(de){return ke(de.tm_mday,2)},"%e":function(de){return qe(de.tm_mday,2," ")},"%g":function(de){return Ft(de).toString().substring(2)},"%G":function(de){return Ft(de)},"%H":function(de){return ke(de.tm_hour,2)},"%I":function(de){var Fe=de.tm_hour;return Fe==0?Fe=12:Fe>12&&(Fe-=12),ke(Fe,2)},"%j":function(de){return ke(de.tm_mday+of(Wr(de.tm_year+1900)?zo:Ho,de.tm_mon-1),3)},"%m":function(de){return ke(de.tm_mon+1,2)},"%M":function(de){return ke(de.tm_min,2)},"%n":function(){return`
`},"%p":function(de){return de.tm_hour>=0&&de.tm_hour<12?"AM":"PM"},"%S":function(de){return ke(de.tm_sec,2)},"%t":function(){return"	"},"%u":function(de){return de.tm_wday||7},"%U":function(de){var Fe=de.tm_yday+7-de.tm_wday;return ke(Math.floor(Fe/7),2)},"%V":function(de){var Fe=Math.floor((de.tm_yday+7-(de.tm_wday+6)%7)/7);if((de.tm_wday+371-de.tm_yday-2)%7<=2&&Fe++,Fe){if(Fe==53){var Ut=(de.tm_wday+371-de.tm_yday)%7;Ut!=4&&(Ut!=3||!Wr(de.tm_year))&&(Fe=1)}}else{Fe=52;var jt=(de.tm_wday+7-de.tm_yday-1)%7;(jt==4||jt==5&&Wr(de.tm_year%400-1))&&Fe++}return ke(Fe,2)},"%w":function(de){return de.tm_wday},"%W":function(de){var Fe=de.tm_yday+7-(de.tm_wday+6)%7;return ke(Math.floor(Fe/7),2)},"%y":function(de){return(de.tm_year+1900).toString().substring(2)},"%Y":function(de){return de.tm_year+1900},"%z":function(de){var Fe=de.tm_gmtoff,jt=Fe>=0;return Fe=Math.abs(Fe)/60,Fe=Fe/60*100+Fe%60,(jt?"+":"-")+("0000"+Fe).slice(-4)},"%Z":function(de){return de.tm_zone},"%%":function(){return"%"}};ce=ce.replace(/%%/g,"\0\0");for(var ae in Qt)ce.includes(ae)&&(ce=ce.replace(new RegExp(ae,"g"),Qt[ae](re)));ce=ce.replace(/\0\0/g,"%");var xn=lf(ce);return xn.length>_?0:(J(xn,g),xn.length-1)}function ff(g,_,T,F){return uf(g,_,T,F)}nt(),Pn=s.BindingError=Yn(Error,"BindingError"),kr=s.InternalError=Yn(Error,"InternalError"),pr(),De(),gu(),No=s.UnboundTypeError=Yn(Error,"UnboundTypeError"),Pu();function df(){L("fetchSettings")}var ko={__cxa_allocate_exception:ue,__cxa_throw:He,_embind_register_bigint:yt,_embind_register_bool:O,_embind_register_class:Mu,_embind_register_class_constructor:Tu,_embind_register_class_function:Au,_embind_register_emval:Lu,_embind_register_float:Iu,_embind_register_integer:Nu,_embind_register_memory_view:Fu,_embind_register_std_string:Ou,_embind_register_std_wstring:Wu,_embind_register_void:Xu,abort:Yu,emscripten_memcpy_big:$u,emscripten_resize_heap:Ku,environ_get:Qu,environ_sizes_get:ef,fd_close:tf,fd_seek:nf,fd_write:af,strftime_l:ff};y(),s.___wasm_call_ctors=me("__wasm_call_ctors");var ra=s._malloc=me("malloc"),$n=s._free=me("free"),hf=s.___getTypeName=me("__getTypeName");s.__embind_initialize_bindings=me("_embind_initialize_bindings"),s.___errno_location=me("__errno_location"),s._fflush=me("fflush");var Vo=s._emscripten_stack_init=function(){return(Vo=s._emscripten_stack_init=s.asm.emscripten_stack_init).apply(null,arguments)};s._emscripten_stack_get_free=function(){return(s._emscripten_stack_get_free=s.asm.emscripten_stack_get_free).apply(null,arguments)},s._emscripten_stack_get_base=function(){return(s._emscripten_stack_get_base=s.asm.emscripten_stack_get_base).apply(null,arguments)};var sa=s._emscripten_stack_get_end=function(){return(sa=s._emscripten_stack_get_end=s.asm.emscripten_stack_get_end).apply(null,arguments)};s.stackSave=me("stackSave"),s.stackRestore=me("stackRestore"),s.stackAlloc=me("stackAlloc");var pf=s.___cxa_is_pointer_type=me("__cxa_is_pointer_type");s.dynCall_viijii=me("dynCall_viijii"),s.dynCall_ji=me("dynCall_ji"),s.dynCall_jiji=me("dynCall_jiji"),s.dynCall_iiiiij=me("dynCall_iiiiij"),s.dynCall_iiiiijj=me("dynCall_iiiiijj"),s.dynCall_iiiiiijj=me("dynCall_iiiiiijj");var mf=["run","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","addOnPreRun","addOnInit","addOnPreMain","addOnExit","addOnPostRun","addRunDependency","removeRunDependency","FS_createFolder","FS_createPath","FS_createDataFile","FS_createPreloadedFile","FS_createLazyFile","FS_createLink","FS_createDevice","FS_unlink","getLEB","getFunctionTables","alignFunctionTables","registerFunctions","prettyPrint","getCompilerSetting","print","printErr","callMain","abort","keepRuntimeAlive","wasmMemory","stackAlloc","stackSave","stackRestore","getTempRet0","setTempRet0","writeStackCookie","checkStackCookie","ptrToString","zeroMemory","stringToNewUTF8","exitJS","getHeapMax","emscripten_realloc_buffer","ENV","ERRNO_CODES","ERRNO_MESSAGES","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","DNS","getHostByName","Protocols","Sockets","getRandomDevice","warnOnce","traverseStack","UNWIND_CACHE","convertPCtoSourceLocation","readAsmConstArgsArray","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","getExecutableName","listenOnce","autoResumeAudioContext","dynCallLegacy","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getCFunc","ccall","cwrap","uleb128Encode","sigToWasmTypes","convertJsFunctionToWasm","freeTableIndexes","functionsInTableMap","getEmptyTableSlot","updateTableMap","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","setValue","getValue","PATH","PATH_FS","intArrayFromString","intArrayToString","AsciiToString","stringToAscii","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","allocateUTF8","allocateUTF8OnStack","writeStringToMemory","writeArrayToMemory","writeAsciiToMemory","SYSCALLS","getSocketFromFD","getSocketAddress","JSEvents","registerKeyEventCallback","specialHTMLTargets","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","currentFullscreenStrategy","restoreOldWindowedStyle","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","demangle","demangleAll","jsStackTrace","stackTrace","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","dlopenMissingError","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","exception_addRef","exception_decRef","Browser","setMainLoop","wget","FS","MEMFS","TTY","PIPEFS","SOCKFS","_setNetworkCallback","tempFixedLengthArray","miniTempWebGLFloatBuffers","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","GL","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","AL","SDL_unicode","SDL_ttfContext","SDL_audio","SDL","SDL_gfx","GLUT","EGL","GLFW_Window","GLFW","GLEW","IDBStore","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","InternalError","BindingError","UnboundTypeError","PureVirtualError","init_embind","throwInternalError","throwBindingError","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","extendError","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","registeredTypes","awaitingDependencies","typeDependencies","registeredPointers","registerType","whenDependentTypesAreResolved","embind_charCodes","embind_init_charCodes","readLatin1String","getTypeName","heap32VectorToArray","requireRegisteredType","getShiftFromSize","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","simpleReadValueFromPointer","runDestructors","new_","craftInvokerFunction","embind__requireFunction","tupleRegistrations","structRegistrations","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_getPointee","RegisteredPointer_destructor","RegisteredPointer_deleteObject","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","ClassHandle_isAliasOf","throwInstanceAlreadyDeleted","ClassHandle_clone","ClassHandle_delete","deletionQueue","ClassHandle_isDeleted","ClassHandle_deleteLater","flushPendingDeletes","delayFunction","setDelayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_handle_array","emval_free_list","emval_symbols","init_emval","count_emval_handles","get_first_emval","getStringOrSymbol","Emval","emval_newers","craftEmvalAllocator","emval_get_global","emval_lookupTypes","emval_allocateDestructors","emval_methodCallers","emval_addMethodCaller","emval_registeredMethods"];mf.forEach(D);var gf=["ptrToString","zeroMemory","stringToNewUTF8","exitJS","setErrNo","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","getHostByName","getRandomDevice","traverseStack","convertPCtoSourceLocation","readAsmConstArgs","mainThreadEM_ASM","jstoi_q","jstoi_s","listenOnce","autoResumeAudioContext","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","safeSetTimeout","asmjsMangle","asyncLoad","alignMemory","mmapAlloc","writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertU32PairToI53","reallyNegative","unSign","strLen","reSign","formatString","getSocketFromFD","getSocketAddress","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","findCanvasEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","checkWasiClock","setImmediateWrapped","clearImmediateWrapped","polyfillSetImmediate","exception_addRef","exception_decRef","setMainLoop","_setNetworkCallback","heapObjectForWebGLType","heapAccessShiftForWebGLHeap","emscriptenWebGLGet","computeUnpackAlignedImageSize","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","writeGLArray","SDL_unicode","SDL_ttfContext","SDL_audio","GLFW_Window","runAndAbortIfError","registerInheritedInstance","unregisterInheritedInstance","requireRegisteredType","enumReadValueFromPointer","validateThis","getStringOrSymbol","craftEmvalAllocator","emval_get_global","emval_lookupTypes","emval_allocateDestructors","emval_addMethodCaller"];gf.forEach(U);var Xr;ie=function g(){Xr||Go(),Xr||(ie=g)};function _f(){Vo(),dt()}function Go(g){if(se>0||(_f(),_t(),se>0))return;function _(){Xr||(Xr=!0,s.calledRun=!0,!E&&(Ge(),a(s),s.onRuntimeInitialized&&s.onRuntimeInitialized(),w(!s._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),We()))}s.setStatus?(s.setStatus("Running..."),setTimeout(function(){setTimeout(function(){s.setStatus("")},1),_()},1)):_(),I()}if(s.preInit)for(typeof s.preInit=="function"&&(s.preInit=[s.preInit]);s.preInit.length>0;)s.preInit.pop()();return Go(),r.ready}})();i.exports=t})(Ql);var Nv=Ql.exports,Fv=$e&&$e.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(oi,"__esModule",{value:!0});oi.LazPerf=oi.create=oi.createLazPerf=void 0;const Uo=Fv(Nv);oi.createLazPerf=Uo.default;oi.create=Uo.default;oi.LazPerf={create:Uo.default};Object.defineProperty(ai,"__esModule",{value:!0});ai.decompressFile=ai.decompressChunk=ai.PointData=void 0;const eu=oi,Ov=Br;ai.PointData={createLazPerf:eu.createLazPerf,decompressChunk:nu,decompressFile:iu};let Fa;async function tu(i){return i||(Fa||(Fa=(0,eu.createLazPerf)()),Fa)}async function nu(i,{pointCount:e,pointDataRecordFormat:t,pointDataRecordLength:n},r){const s=await tu(r),a=new Uint8Array(e*n),o=s._malloc(i.byteLength),c=s._malloc(n),l=new s.ChunkDecoder;try{s.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o),l.open(t,n,o);for(let u=0;u<e;++u)l.getPoint(c),a.set(new Uint8Array(s.HEAPU8.buffer,c,n),u*n)}finally{s._free(o),s._free(c),l.delete()}return a}ai.decompressChunk=nu;async function iu(i,e){const t=await tu(e),n=Ov.Header.parse(i),{pointCount:r,pointDataRecordLength:s}=n,a=new Uint8Array(r*s),o=t._malloc(i.byteLength),c=t._malloc(s),l=new t.LASZip;try{t.HEAPU8.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o),l.open(o,i.byteLength);for(let u=0;u<r;++u)l.getPoint(c),a.set(new Uint8Array(t.HEAPU8.buffer,c,s),u*s)}finally{l.delete()}return a}ai.decompressFile=iu;var Ks={};Object.defineProperty(Ks,"__esModule",{value:!0});Ks.View=void 0;const Bv=un,zv=Nr,Hv=Or;Ks.View={create:kv};function kv(i,e,t=[],n){let r=Hv.Extractor.create(e,t);if(n){const u=new Set([...n]);r=Object.entries(r).reduce((f,[d,m])=>(u.has(d)&&(f[d]=m),f),{})}const s=zv.Dimensions.create(r,t),a=Bv.Binary.toDataView(i),o=e.pointDataRecordLength;if(a.byteLength%o!==0)throw new Error(`Invalid buffer length (${a.byteLength}) for point length ${o}`);const c=a.byteLength/e.pointDataRecordLength;function l(u){const f=r[u];if(!f)throw new Error(`No extractor for dimension: ${u}`);return function(d){if(d>=c)throw new RangeError(`View index (${d}) out of range: ${c}`);return f(a,d)}}return{pointCount:c,dimensions:s,getter:l}}var Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});Zs.Vlr=void 0;const bn=un,cr=An;Zs.Vlr={walk:Wv,parse:su,find:ru,at:Vv,fetch:Gv};function ru(i,e,t){return i.find(n=>n.userId===e&&n.recordId===t)}function Vv(i,e,t){const n=ru(i,e,t);if(!n)throw new Error(`VLR not found: ${e}/${t}`);return n}function Gv(i,{contentOffset:e,contentLength:t}){return t===0?new Uint8Array:bn.Getter.create(i)(e,e+t)}async function Wv(i,e){const t=bn.Getter.create(i),n=await tl({get:t,startOffset:e.headerLength,count:e.vlrCount,isExtended:!1}),r=await tl({get:t,startOffset:e.evlrOffset,count:e.evlrCount,isExtended:!0});return[...n,...r]}function su(i,e){return(e?Yv:Xv)(i)}function Xv(i){const e=bn.Binary.toDataView(i);if(e.byteLength!==cr.vlrHeaderLength)throw new Error(`Invalid VLR header length (must be ${cr.vlrHeaderLength}): ${e.byteLength}`);return{userId:bn.Binary.toCString(i.slice(2,18)),recordId:e.getUint16(18,!0),contentLength:e.getUint16(20,!0),description:bn.Binary.toCString(i.slice(22,54)),isExtended:!1}}function Yv(i){const e=bn.Binary.toDataView(i);if(e.byteLength!==cr.evlrHeaderLength)throw new Error(`Invalid EVLR header length (must be ${cr.evlrHeaderLength}): ${e.byteLength}`);return{userId:bn.Binary.toCString(i.slice(2,18)),recordId:e.getUint16(18,!0),contentLength:(0,bn.parseBigInt)((0,bn.getBigUint64)(e,20,!0)),description:bn.Binary.toCString(i.slice(28,60)),isExtended:!0}}async function tl({get:i,startOffset:e,count:t,isExtended:n}){const r=[];let s=e;const a=n?cr.evlrHeaderLength:cr.vlrHeaderLength;for(let o=0;o<t;++o){const c=a?await i(s,s+a):new Uint8Array,{userId:l,recordId:u,contentLength:f,description:d}=su(c,n);r.push({userId:l,recordId:u,contentOffset:s+a,contentLength:f,description:d,isExtended:n}),s+=a+f}return r}(function(i){var e=$e&&$e.__createBinding||(Object.create?function(f,d,m,v){v===void 0&&(v=m);var x=Object.getOwnPropertyDescriptor(d,m);(!x||("get"in x?!d.__esModule:x.writable||x.configurable))&&(x={enumerable:!0,get:function(){return d[m]}}),Object.defineProperty(f,v,x)}:function(f,d,m,v){v===void 0&&(v=m),f[v]=d[m]}),t=$e&&$e.__setModuleDefault||(Object.create?function(f,d){Object.defineProperty(f,"default",{enumerable:!0,value:d})}:function(f,d){f.default=d}),n=$e&&$e.__importStar||function(f){if(f&&f.__esModule)return f;var d={};if(f!=null)for(var m in f)m!=="default"&&Object.prototype.hasOwnProperty.call(f,m)&&e(d,f,m);return t(d,f),d};Object.defineProperty(i,"__esModule",{value:!0}),i.Vlr=i.View=i.PointData=i.Header=i.Extractor=i.ExtraBytes=i.Dimensions=i.Constants=void 0,i.Constants=n(An);var r=Nr;Object.defineProperty(i,"Dimensions",{enumerable:!0,get:function(){return r.Dimensions}});var s=Fr;Object.defineProperty(i,"ExtraBytes",{enumerable:!0,get:function(){return s.ExtraBytes}});var a=Or;Object.defineProperty(i,"Extractor",{enumerable:!0,get:function(){return a.Extractor}});var o=Br;Object.defineProperty(i,"Header",{enumerable:!0,get:function(){return o.Header}});var c=ai;Object.defineProperty(i,"PointData",{enumerable:!0,get:function(){return c.PointData}});var l=Ks;Object.defineProperty(i,"View",{enumerable:!0,get:function(){return l.View}});var u=Zs;Object.defineProperty(i,"Vlr",{enumerable:!0,get:function(){return u.Vlr}})})(Lo);var zr={};Object.defineProperty(zr,"__esModule",{value:!0});zr.Hierarchy=void 0;const Tr=un,nl=li;zr.Hierarchy={parse:au,load:$v};function au(i){const e=Tr.Binary.toDataView(i);if(e.byteLength%nl.hierarchyItemLength!==0)throw new Error(`Invalid hierarchy page length: ${e.byteLength}`);const t={},n={};for(let r=0;r<e.byteLength;r+=nl.hierarchyItemLength){const s=e.getInt32(r+0,!0),a=e.getInt32(r+4,!0),o=e.getInt32(r+8,!0),c=e.getInt32(r+12,!0),l=(0,Tr.parseBigInt)((0,Tr.getBigUint64)(e,r+16,!0)),u=e.getInt32(r+24,!0),f=e.getInt32(r+28,!0),d=Tr.Key.toString([s,a,o,c]);if(f<-1)throw new Error(`Invalid hierarchy point count at key: ${d}`);f===-1?n[d]={pageOffset:l,pageLength:u}:t[d]={pointCount:f,pointDataOffset:l,pointDataLength:u}}return{nodes:t,pages:n}}async function $v(i,e){const t=Tr.Getter.create(i);return au(await t(e.pageOffset,e.pageOffset+e.pageLength))}var Hr={};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.Info=void 0;const Er=un,il=li;Hr.Info={parse:jv};function jv(i){const e=Er.Binary.toDataView(i);if(e.byteLength!==il.infoLength)throw new Error(`Invalid COPC info VLR length (should be ${il.infoLength}): ${e.byteLength}`);const t=[e.getFloat64(0,!0),e.getFloat64(8,!0),e.getFloat64(16,!0)],n=e.getFloat64(24,!0);return{cube:[t[0]-n,t[1]-n,t[2]-n,t[0]+n,t[1]+n,t[2]+n],spacing:e.getFloat64(32,!0),rootHierarchyPage:{pageOffset:(0,Er.parseBigInt)((0,Er.getBigUint64)(e,40,!0)),pageLength:(0,Er.parseBigInt)((0,Er.getBigUint64)(e,48,!0))},gpsTimeRange:[e.getFloat64(56,!0),e.getFloat64(64,!0)]}}var qv=$e&&$e.__createBinding||(Object.create?function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}:function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]}),Kv=$e&&$e.__setModuleDefault||(Object.create?function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}:function(i,e){i.default=e}),Zv=$e&&$e.__importStar||function(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t in i)t!=="default"&&Object.prototype.hasOwnProperty.call(i,t)&&qv(e,i,t);return Kv(e,i),e};Object.defineProperty(Gs,"__esModule",{value:!0});Gs.Copc=void 0;const an=Zv(Lo),Os=un,Jv=zr,Qv=Hr;Gs.Copc={create:e0,loadHierarchyPage:t0,loadPointDataBuffer:ou,loadPointDataView:i0};async function e0(i){const e=Os.Getter.create(i),t=65536,n=e(0,t);async function r(m,v){return v>=t?e(m,v):(await n).slice(m,v)}const s=an.Header.parse(await r(0,an.Constants.minHeaderLength)),a=await an.Vlr.walk(r,s),o=an.Vlr.find(a,"copc",1);if(!o)throw new Error("COPC info VLR is required");const c=Qv.Info.parse(await an.Vlr.fetch(r,o));let l;const u=an.Vlr.find(a,"LASF_Projection",2112);u&&u.contentLength&&(l=Os.Binary.toCString(await an.Vlr.fetch(r,u)),l===""&&(l=void 0));let f=[];const d=an.Vlr.find(a,"LASF_Spec",4);return d&&(f=an.ExtraBytes.parse(await an.Vlr.fetch(r,d))),{header:s,vlrs:a,info:c,wkt:l,eb:f}}async function t0(i,e){const t=Os.Getter.create(i);return Jv.Hierarchy.load(t,e)}async function n0(i,{pointDataOffset:e,pointDataLength:t}){return Os.Getter.create(i)(e,e+t)}async function ou(i,{pointDataRecordFormat:e,pointDataRecordLength:t},n,r){const s=await n0(i,n),{pointCount:a}=n;return an.PointData.decompressChunk(s,{pointCount:a,pointDataRecordFormat:e,pointDataRecordLength:t},r)}async function i0(i,e,t,{lazPerf:n,include:r}={}){const s=await ou(i,e.header,t,n);return an.View.create(s,e.header,e.eb,r)}(function(i){var e=$e&&$e.__createBinding||(Object.create?function(o,c,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(c,l);(!f||("get"in f?!c.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(o,u,f)}:function(o,c,l,u){u===void 0&&(u=l),o[u]=c[l]}),t=$e&&$e.__setModuleDefault||(Object.create?function(o,c){Object.defineProperty(o,"default",{enumerable:!0,value:c})}:function(o,c){o.default=c}),n=$e&&$e.__importStar||function(o){if(o&&o.__esModule)return o;var c={};if(o!=null)for(var l in o)l!=="default"&&Object.prototype.hasOwnProperty.call(o,l)&&e(c,o,l);return t(c,o),c};Object.defineProperty(i,"__esModule",{value:!0}),i.Info=i.Hierarchy=i.Copc=i.Constants=void 0,i.Constants=n(li);var r=Gs;Object.defineProperty(i,"Copc",{enumerable:!0,get:function(){return r.Copc}});var s=zr;Object.defineProperty(i,"Hierarchy",{enumerable:!0,get:function(){return s.Hierarchy}});var a=Hr;Object.defineProperty(i,"Info",{enumerable:!0,get:function(){return a.Info}})})(Hl);(function(i){var e=$e&&$e.__createBinding||(Object.create?function(s,a,o,c){c===void 0&&(c=o);var l=Object.getOwnPropertyDescriptor(a,o);(!l||("get"in l?!a.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(s,c,l)}:function(s,a,o,c){c===void 0&&(c=o),s[c]=a[o]}),t=$e&&$e.__setModuleDefault||(Object.create?function(s,a){Object.defineProperty(s,"default",{enumerable:!0,value:a})}:function(s,a){s.default=a}),n=$e&&$e.__importStar||function(s){if(s&&s.__esModule)return s;var a={};if(s!=null)for(var o in s)o!=="default"&&Object.prototype.hasOwnProperty.call(s,o)&&e(a,s,o);return t(a,s),a},r=$e&&$e.__exportStar||function(s,a){for(var o in s)o!=="default"&&!Object.prototype.hasOwnProperty.call(a,o)&&e(a,s,o)};Object.defineProperty(i,"__esModule",{value:!0}),i.Las=i.Ept=void 0,i.Ept=n(Bl),r(Hl,i),i.Las=n(Lo),r(un,i)})(ws);const r0=`
varying vec3 vColor;
uniform float size;
uniform float scale;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Adjust point size based on distance
    float distanceFactor = 1.0 / -mvPosition.z;
    gl_PointSize = size * scale * distanceFactor;
}`,s0=`
varying vec3 vColor;

void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    if(dist > 0.5) {
        discard;
    }
    gl_FragColor = vec4(vColor, 1.0);
}`,a0={uniforms:{tDiffuse:{value:null},tDepth:{value:null},size:{value:window.innerWidth},intensity:{value:1},radius:{value:2},opacity:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform float size;
        uniform float intensity;
        uniform float radius;
        uniform float opacity;
        varying vec2 vUv;

        float getDepth(vec2 coord) {
            return texture2D(tDepth, coord).r;
        }

        float calculateEDL() {
            float depth = getDepth(vUv);
            if(depth >= 1.0) {
                return 1.0;
            }

            float sum = 0.0;
            float numberOfNeighbors = 8.0;

            vec2 pixelSize = vec2(1.0 / size);
            float r = radius;

            // Sample neighboring pixels
            float s = getDepth(vUv + vec2(-r, -r) * pixelSize);
            float ln1 = max(0.0, depth - s);
            sum += ln1;

            s = getDepth(vUv + vec2(0.0, -r) * pixelSize);
            float ln2 = max(0.0, depth - s);
            sum += ln2;

            s = getDepth(vUv + vec2(r, -r) * pixelSize);
            float ln3 = max(0.0, depth - s);
            sum += ln3;

            s = getDepth(vUv + vec2(-r, 0.0) * pixelSize);
            float ln4 = max(0.0, depth - s);
            sum += ln4;

            s = getDepth(vUv + vec2(r, 0.0) * pixelSize);
            float ln5 = max(0.0, depth - s);
            sum += ln5;

            s = getDepth(vUv + vec2(-r, r) * pixelSize);
            float ln6 = max(0.0, depth - s);
            sum += ln6;

            s = getDepth(vUv + vec2(0.0, r) * pixelSize);
            float ln7 = max(0.0, depth - s);
            sum += ln7;

            s = getDepth(vUv + vec2(r, r) * pixelSize);
            float ln8 = max(0.0, depth - s);
            sum += ln8;

            // Calculate illumination
            float edl = exp(-sum * intensity / numberOfNeighbors);
            return edl;
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float edl = calculateEDL();
            gl_FragColor = vec4(color.rgb * edl, color.a * opacity);
        }
    `};class o0{constructor(e,t){if(console.log("Initializing COPC viewer with:",{containerSelector:e,filename:t}),this.container=typeof e=="string"?document.querySelector(e):e,!this.container)throw new Error(`Container not found: ${e}`);(this.container.clientWidth===0||this.container.clientHeight===0)&&(this.container.style.width="100%",this.container.style.height="100%",(this.container.clientWidth===0||this.container.clientHeight===0)&&(this.container.parentElement?(this.container.style.width=`${this.container.parentElement.clientWidth}px`,this.container.style.height=`${this.container.parentElement.clientHeight}px`):(this.container.style.width="800px",this.container.style.height="600px"))),getComputedStyle(this.container).position==="static"&&(this.container.style.position="relative"),this.filename=t,this.loadedNodes=new Map,this.maxLoadedNodes=50,this.isInitialized=!1,this.stats={totalPointsLoaded:0,nodesLoaded:0,lastFrameTime:performance.now(),frameCount:0,fps:0},this.controlState={pointSize:.01,minPointSize:.001,maxPointSize:.1,rotateSpeed:1,zoomSpeed:1.2,panSpeed:1},this.pointBudget={target:5e6,current:0,nodeScores:new Map},this.lodState={maxScreenSpaceError:8,maxConcurrentLoads:4,loadingNodes:new Set,nodeHierarchy:null,visibleNodes:new Set,lastViewUpdateTime:0,viewUpdateThrottle:100,spacing:null,cubeBounds:null,nodeDepths:new Map},this.createStatsDisplay(),this.init()}async init(){console.log("Starting initialization...");try{this.scene=new kc,this.camera=new on(75,this.container.clientWidth/this.container.clientHeight,.1,1e4),this.renderer=new z_({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.appendChild(this.renderer.domElement),this.controls=new Qc(this.camera,this.renderer.domElement),this.controls.addEventListener("change",()=>this.updateVisibleNodes()),console.log("Loading COPC file..."),this.copc=await ws.Copc.create(this.filename),this.lodState.spacing=this.copc.info.spacing,this.lodState.cubeBounds=this.copc.info.cube,console.log("COPC info loaded:",{spacing:this.lodState.spacing,cubeBounds:this.lodState.cubeBounds}),console.log("COPC file loaded:",{header:this.copc.header,pointFormat:this.copc.header.pointDataRecordFormat,pointLength:this.copc.header.pointDataRecordLength,totalPoints:this.copc.header.totalPoints});const{header:e}=this.copc;this.centerOffset=new H((e.max[0]+e.min[0])/2,(e.max[1]+e.min[1])/2,(e.max[2]+e.min[2])/2);const t=Math.abs(e.max[0]-e.min[0]),n=Math.abs(e.max[1]-e.min[1]),r=Math.abs(e.max[2]-e.min[2]),s=Math.max(t,n,r);this.scale=s>0?1/s:1,console.log("Point cloud stats:",{centerOffset:{x:this.centerOffset.x,y:this.centerOffset.y,z:this.centerOffset.z},size:{x:t,y:n,z:r},scale:this.scale}),console.log("Loading hierarchy page...");const{nodes:a,pages:o}=await ws.Copc.loadHierarchyPage(this.filename,this.copc.info.rootHierarchyPage);console.log("Hierarchy loaded:",{nodeKeys:Object.keys(a),nodeCount:Object.keys(a).length,pageCount:Object.keys(o).length}),this.setupScene(),console.log("Loading initial nodes..."),await this.loadInitialNodes(a),this.isInitialized=!0,this.animate(),this.setupResizeObserver(),console.log("Initialization complete")}catch(e){throw console.error("Failed to initialize viewer:",e),this.container.innerHTML=`
        <div style="color: red; padding: 20px;">
          Failed to initialize viewer: ${e.message}
        </div>
      `,e}}setupScene(){const e=new V_(1);this.scene.add(e);const t=new qc(2,20);this.scene.add(t),this.camera.position.set(2,2,2),this.camera.lookAt(0,0,0),this.controls=new Qc(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=this.controlState.rotateSpeed,this.controls.zoomSpeed=this.controlState.zoomSpeed,this.controls.panSpeed=this.controlState.panSpeed,this.controls.enableRotate=!0,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.controls.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.controls.minDistance=.1,this.controls.maxDistance=10,this.controls.minPolarAngle=0,this.controls.maxPolarAngle=Math.PI,this.setupScrollHandler();const{header:n}=this.copc,r=Math.max(n.max[0]-n.min[0],n.max[1]-n.min[1],n.max[2]-n.min[2]);this.camera.near=r*this.scale*1e-4,this.camera.far=r*this.scale*10,this.camera.updateProjectionMatrix(),this.setupKeyboardControls(),this.setupEDLRendering()}setupEDLRendering(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderTarget=new Gn(e,t,{minFilter:kt,magFilter:kt,format:nn,type:gn}),this.depthTarget=new Gn(e,t,{minFilter:kt,magFilter:kt,format:nn,type:gn});const n=new Cn(a0);n.uniforms.tDiffuse.value=this.renderTarget.texture,n.uniforms.tDepth.value=this.depthTarget.texture,n.uniforms.size.value=e;const r=new Ur(2,2);this.edlQuad=new Tn(r,n),this.edlQuad.frustumCulled=!1,this.edlScene=new kc,this.edlScene.add(this.edlQuad),this.edlCamera=new Ll(-1,1,1,-1,0,1)}setupScrollHandler(){this.renderer.domElement.addEventListener("wheel",e=>{if(e.shiftKey){e.preventDefault();const t=e.deltaY>0?.9:1.1;this.adjustPointSize(t)}},{passive:!1})}setupKeyboardControls(){window.addEventListener("keydown",e=>{switch(e.key.toLowerCase()){case"r":this.resetView();break;case"+":this.adjustPointSize(1.1);break;case"-":this.adjustPointSize(.9);break;case"g":this.toggleGrid();break}})}resetView(){this.camera.position.set(2,2,2),this.controls.target.set(0,0,0),this.camera.lookAt(0,0,0),this.controls.reset(),this.controlState.pointSize=.01,this.scene.traverse(e=>{e instanceof Ia&&(e.material.size=this.controlState.pointSize)})}adjustPointSize(e){this.controlState.pointSize=vl.clamp(this.controlState.pointSize*e,this.controlState.minPointSize,this.controlState.maxPointSize),this.scene.traverse(t=>{t instanceof Ia&&t.material.uniforms&&t.material.uniforms.size&&(t.material.uniforms.size.value=this.controlState.pointSize)})}toggleGrid(){this.scene.traverse(e=>{e instanceof qc&&(e.visible=!e.visible)})}async loadInitialNodes(e){this.lodState.nodeHierarchy=e;const t=e["0-0-0-0"];if(!t){console.error("Root node not found!");return}await this.loadNode(t,"0-0-0-0"),await this.updateVisibleNodes(!0)}async loadNode(e,t){if(!(!e||this.loadedNodes.has(t)))try{this.lodState.loadingNodes.add(t);const n=await ws.Copc.loadPointDataView(this.filename,this.copc,e),r=n.getter("X"),s=n.getter("Y"),a=n.getter("Z"),o=n.getter("Red"),c=n.getter("Green"),l=n.getter("Blue");if(!e.pointCount){console.warn(`Node ${t} has no points`);return}const u=this.getNodeBounds(t),f=new H((u.min[0]+u.max[0])/2,(u.min[1]+u.max[1])/2,(u.min[2]+u.max[2])/2),d=new Float32Array(e.pointCount*3),m=new Float32Array(e.pointCount*3);let v=0;for(let z=0;z<e.pointCount;z++){const A=r(z),E=s(z),w=a(z);if(!isFinite(A)||!isFinite(E)||!isFinite(w))continue;const ee=A-f.x,q=E-f.y,R=w-f.z,N=(f.x-this.centerOffset.x+ee)*this.scale,k=(f.z-this.centerOffset.z+R)*this.scale,Q=-(f.y-this.centerOffset.y+q)*this.scale;d[v*3]=N,d[v*3+1]=k,d[v*3+2]=Q,o&&c&&l?(m[v*3]=o(z)/65535,m[v*3+1]=c(z)/65535,m[v*3+2]=l(z)/65535):(m[v*3]=.7,m[v*3+1]=.7,m[v*3+2]=.7),v++}if(v===0)return;const x=new ln,p=new Float32Array(d.buffer,0,v*3),h=new Float32Array(m.buffer,0,v*3);x.setAttribute("position",new cn(p,3)),x.setAttribute("color",new cn(h,3));const C=parseInt(t.split("-")[0]),b=Math.max(u.max[0]-u.min[0],u.max[1]-u.min[1],u.max[2]-u.min[2]),X=this.controlState.pointSize*this.scale*b*Math.pow(.5,C),U=new Cn({vertexShader:r0,fragmentShader:s0,uniforms:{size:{value:this.controlState.pointSize},scale:{value:window.devicePixelRatio}},vertexColors:!0}),D=new Ia(x,U);D.name=`node-${t}`,this.scene.add(D),this.loadedNodes.set(t,{lastAccessed:performance.now(),pointCount:v}),this.stats.totalPointsLoaded+=v,this.stats.nodesLoaded=this.loadedNodes.size}catch(n){console.error(`Failed to load node ${t}:`,n)}finally{this.lodState.loadingNodes.delete(t)}}unloadNode(e){const t=this.scene.getObjectByName(`node-${e}`);if(t){this.scene.remove(t),t.geometry.dispose(),t.material.dispose();const n=this.loadedNodes.get(e);n&&(this.stats.totalPointsLoaded-=n.pointCount),this.loadedNodes.delete(e)}}async updateVisibleNodes(e=!1){const t=performance.now();if(!e&&t-this.lodState.lastViewUpdateTime<this.lodState.viewUpdateThrottle)return;this.lodState.lastViewUpdateTime=t;const n=new Co,r=new Tt;r.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),n.setFromProjectionMatrix(r);const s=new Map,a=new Set;let o=0;const c=x=>{const p=this.getNodeBounds(x),h=new ur(new H(...p.min).sub(this.centerOffset).multiplyScalar(this.scale),new H(...p.max).sub(this.centerOffset).multiplyScalar(this.scale));return n.intersectsBox(h)},l=x=>{const p=this.lodState.nodeHierarchy[x];if(!p||!c(x))return;const h=parseInt(x.split("-")[0]);s.has(h)||s.set(h,new Set),s.get(h).add({key:x,node:p}),this.getChildKeys(x).forEach(b=>{this.lodState.nodeHierarchy[b]&&l(b)})};l("0-0-0-0");const u=new Map,f=Array.from(s.keys()).sort((x,p)=>x-p);for(const x of f){const p=s.get(x);for(const{key:h,node:C}of p)this.loadedNodes.has(h)&&(a.add(h),o+=this.loadedNodes.get(h).pointCount);for(const{key:h,node:C}of p)if(!this.loadedNodes.has(h)&&!this.lodState.loadingNodes.has(h))if(o+C.pointCount<=this.pointBudget.target)a.add(h),u.set(h,C),o+=C.pointCount;else break;if(o>=this.pointBudget.target)break}for(const[x,p]of this.loadedNodes)a.has(x)||(this.unloadNode(x),o-=p.pointCount);const d=[];let m=0;for(const[x,p]of u){if(m>=this.lodState.maxConcurrentLoads)break;m++,d.push(this.loadNode(p,x))}await Promise.all(d),this.lodState.visibleNodes=a,this.pointBudget.current=o;const v=Array.from(s.entries()).map(([x,p])=>`D${x}: ${p.size}`).join(", ");console.log(`Visible nodes by depth: ${v}`),console.log(`Total points: ${o.toLocaleString()}/${this.pointBudget.target.toLocaleString()}`)}calculateNodeScore(e,t){const n=this.lodState.nodeHierarchy[e];if(!n)return-1/0;const r=this.getNodeBounds(e),a=new H((r.max[0]+r.min[0])/2,(r.max[1]+r.min[1])/2,(r.max[2]+r.min[2])/2).clone().sub(this.centerOffset).multiplyScalar(this.scale),o=t.distanceTo(a);if(o===0)return-1/0;const l=parseInt(e.split("-")[0])*.5;return n.pointCount/(Math.pow(r.max[0]-r.min[0],2)+Math.pow(r.max[1]-r.min[1],2)+Math.pow(r.max[2]-r.min[2],2))*l/(o*o)}calculateScreenSpaceError(e,t){if(!this.lodState.nodeHierarchy[e])return 1/0;const r=this.getNodeBounds(e),s=new H((r.max[0]+r.min[0])/2,(r.max[1]+r.min[1])/2,(r.max[2]+r.min[2])/2),a=new H(r.max[0]-r.min[0],r.max[1]-r.min[1],r.max[2]-r.min[2]).length();s.sub(this.centerOffset).multiplyScalar(this.scale);const o=t.distanceTo(s);if(o===0)return 1/0;const c=parseInt(e.split("-")[0]),l=a*Math.pow(2,-c),u=this.renderer.domElement.height,f=this.camera.fov*Math.PI/180;return l*u/(2*o*Math.tan(f/2))}getNodeBounds(e){const[t,n,r,s]=e.split("-").map(Number),[a,o,c,l,u,f]=this.lodState.cubeBounds,d=(l-a)/Math.pow(2,t),m=a+n*d,v=o+r*d,x=c+s*d;return{min:[m,v,x],max:[m+d,v+d,x+d]}}getChildKeys(e){const[t,n,r,s]=e.split("-").map(Number),a=t+1,o=n*2,c=r*2,l=s*2;return[`${a}-${o}-${c}-${l}`,`${a}-${o+1}-${c}-${l}`,`${a}-${o}-${c+1}-${l}`,`${a}-${o+1}-${c+1}-${l}`,`${a}-${o}-${c}-${l+1}`,`${a}-${o+1}-${c}-${l+1}`,`${a}-${o}-${c+1}-${l+1}`,`${a}-${o+1}-${c+1}-${l+1}`]}createStatsDisplay(){this.statsDisplay=document.createElement("div"),this.statsDisplay.style.cssText=`
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
  ${Object.entries(r).map(([s,a])=>`${s}: ${a}`).join(`
  `)}`:`${n}: ${r}`).join(`
`)}animate(){if(!this.isInitialized)return;requestAnimationFrame(()=>this.animate()),this.controls.update(),this.updateVisibleNodes(),this.renderer.render(this.scene,this.camera);const e=performance.now(),t=e-this.stats.lastFrameTime;this.stats.frameCount++,t>=1e3&&(this.stats.fps=this.stats.frameCount*1e3/t,this.stats.frameCount=0,this.stats.lastFrameTime=e,this.updateStatsDisplay())}updatePointBudget(e){this.pointBudget.target=e,this.updateVisibleNodes(!0)}manageMemory(){if(this.loadedNodes.size>this.maxLoadedNodes){const e=Array.from(this.loadedNodes.entries()).sort((t,n)=>t[1].lastAccessed-n[1].lastAccessed);for(;this.loadedNodes.size>this.maxLoadedNodes;){const[t]=e.shift();this.unloadNode(t)}}}setupResizeObserver(){new ResizeObserver(t=>{for(const n of t)n.target===this.container&&this.onResize()}).observe(this.container)}onResize(){if(!this.isInitialized)return;const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderTarget.setSize(e,t),this.depthTarget.setSize(e,t),this.edlQuad.material.uniforms.size.value=e}dispose(){this.isInitialized=!1,this.loadedNodes.forEach((e,t)=>this.unloadNode(t)),this.renderTarget&&this.renderTarget.dispose(),this.depthTarget&&this.depthTarget.dispose(),this.renderer&&this.renderer.dispose(),this.controls&&this.controls.dispose(),this.container.innerHTML=""}}const c0="https://public-aco-data.s3.amazonaws.com/data/4012_PlaceGlacier/23_4012_08/23_4012_08_PlaceGlacier_LASER_WGS84_UTM10_Ellips.copc.laz";async function l0(){console.log("Starting main function"),new o0("#app",c0)}l0();
