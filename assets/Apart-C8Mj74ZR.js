import{R as E,ab as r,aq as z,ac as O,X as V,C as S,am as I,ag as L,V as T,a as f,an as k,aM as v,aN as q,aK as a,v as B}from"./index-DWN9ksCY.js";import{BuildSpans as h}from"./HtmlTitle-BQePbi5t.js";import{_ as D,u as N,a as $,j as G}from"./Scene-CZcQKrv0.js";import{B as H}from"./Billboard-DWb_b0L5.js";import{H as A}from"./Html-DqA34Uqz.js";import{P as U}from"./shapes-CMzZ5bur.js";const W=()=>parseInt(E.replace(/\D+/g,"")),Y=W();class J extends L{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${Y>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(t){this.uniforms.pixelRatio.value=t}}const P=e=>e&&e.constructor===Float32Array,K=e=>[e.r,e.g,e.b],_=e=>e instanceof T||e instanceof f||e instanceof k,w=e=>Array.isArray(e)?e:_(e)?e.toArray():[e,e,e];function u(e,t,l){return r.useMemo(()=>{if(t!==void 0){if(P(t))return t;if(t instanceof S){const o=Array.from({length:e*3},()=>K(t)).flat();return Float32Array.from(o)}else if(_(t)||Array.isArray(t)){const o=Array.from({length:e*3},()=>w(t)).flat();return Float32Array.from(o)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},l)},[t])}const X=r.forwardRef(({noise:e=1,count:t=100,speed:l=1,opacity:o=1,scale:b=1,size:p,color:c,children:d,...i},m)=>{r.useMemo(()=>z({SparklesImplMaterial:J}),[]);const s=r.useRef(null),g=O(x=>x.viewport.dpr),n=w(b),y=r.useMemo(()=>Float32Array.from(Array.from({length:t},()=>n.map(V.randFloatSpread)).flat()),[t,...n]),j=u(t,p,Math.random),M=u(t,o),F=u(t,l),R=u(t*3,e),C=u(c===void 0?t*3:t,P(c)?c:new S(c),()=>1);return I(x=>{s.current&&s.current.material&&(s.current.material.time=x.clock.elapsedTime)}),r.useImperativeHandle(m,()=>s.current,[]),r.createElement("points",D({key:`particle-${t}-${JSON.stringify(b)}`},i,{ref:s}),r.createElement("bufferGeometry",null,r.createElement("bufferAttribute",{attach:"attributes-position",args:[y,3]}),r.createElement("bufferAttribute",{attach:"attributes-size",args:[j,1]}),r.createElement("bufferAttribute",{attach:"attributes-opacity",args:[M,1]}),r.createElement("bufferAttribute",{attach:"attributes-speed",args:[F,1]}),r.createElement("bufferAttribute",{attach:"attributes-color",args:[C,3]}),r.createElement("bufferAttribute",{attach:"attributes-noise",args:[R,3]})),d||r.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:g,depthWrite:!1}))}),Q=()=>{const e=r.useRef(null);return a.jsx(U,{ref:e,args:[2,2,50,50],position:[18.590611855484884,13.342963486169086,59.973711566604955],children:a.jsx("meshStandardMaterial",{emissive:[1,.5,.5],emissiveIntensity:10,toneMapped:!1})})},ie=()=>{const{isMobile:e}=N(),{nodes:t}=$(v.getState().be_glb_path),{apartBe:l}=t,o=r.useRef(null),p=G(`texture/${e?"belgium-apart@mobile.webp":"belgium-apart.webp"}`);p.flipY=!1;const c=e?new f(-.1,.42,0):new f(0,.42,0),d=e?new f(.1,-2.51,0):new f(0,-2.51,0);return r.useEffect(()=>q.subscribe(i=>i.scroll,i=>{const m=document.querySelector(".befr-description.a .span"),s=document.querySelector(".befr-description.b .span"),{country:g}=v.getState();if(g==="befr"){if(i>.81&&i<.89?(m?.classList.add("active"),s?.classList.add("active")):(m?.classList.remove("active"),s?.classList.remove("active")),i>.905){const n=document.querySelector(".white-plane");n&&(n.style.opacity="1")}}else{const n=document.querySelector(".befr-description.a .span"),y=document.querySelector(".befr-description.b .span");n?.classList.remove("active"),y?.classList.remove("active")}}),[]),a.jsxs(a.Fragment,{children:[a.jsxs(H,{position:[18.7,14,61],ref:o,follow:!0,children:[a.jsx(A,{position:c,transform:!0,wrapperClass:"__html befr-description a",children:a.jsx(h,{arrayOfString:["Thank","You"],className:"span",transitionDelay:60})}),a.jsx(A,{position:d,transform:!0,wrapperClass:"__html befr-description b",children:a.jsx(h,{arrayOfString:["For","Visiting"],className:"span",transitionDelay:60})})]}),a.jsx(Q,{}),a.jsx(X,{position:[18.7,12.8,63],count:150,opacity:.9,speed:.3,size:.35,scale:2.6,noise:4}),l.children.map(({geometry:i,material:m,uuid:s})=>a.jsx("mesh",{geometry:i,position:l.position.toArray(),children:a.jsx("meshBasicMaterial",{map:p,side:B,toneMapped:!1})},s))]})};export{ie as default};
