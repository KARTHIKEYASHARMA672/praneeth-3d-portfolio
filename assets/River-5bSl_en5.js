import{ac as U,ab as i,as as T,aj as k,at as j,aM as b,aI as g,o as w,w as h,am as B,aK as s}from"./index-DWN9ksCY.js";import{u as D,a as E,j as S}from"./Scene-CZcQKrv0.js";function F({resolution:c=256,near:f=.1,far:p=1e3,envMap:l,fog:v}={}){const u=U(({gl:m})=>m),r=U(({scene:m})=>m),n=i.useMemo(()=>{const m=new T(c);return m.texture.type=k,m},[c]);i.useEffect(()=>()=>{n.dispose()},[n]);const a=i.useMemo(()=>new j(f,p,n),[f,p,n]);let o,t;const M=i.useCallback(()=>{o=r.fog,t=r.background,r.background=l||t,r.fog=v||o,a.update(u,r),r.fog=o,r.background=t},[u,r,a]);return{fbo:n,camera:a,update:M}}const z=()=>{const{isMobile:c}=D(),{nodes:f}=E(b.getState().fr_glb_path),{river:p,sidewalk:l}=f,v=[l.getObjectByName("sidewalk_1"),l.getObjectByName("sidewalk_2")],u=l.getObjectByName("sidewalkLamps"),r=g.useRef(null),a=S(`texture/${c?"france-river@mobile.webp":"france-river.webp"}`),[o,t]=S(["texture/waterNormalMap1.png","texture/waterNormalMap2.png"]);o.flipY=t.flipY=a.flipY=!1,o.wrapS=t.wrapS=a.wrapS=w,o.wrapT=t.wrapT=a.wrapT=w;const M=g.useMemo(()=>new h({map:a}),[a]),{fbo:m,camera:x,update:y}=F({resolution:256});x.position.x=5,x.position.z=5,g.useEffect(()=>{y()},[]);const N=i.useMemo(()=>({uTime:{value:0},uMap:{value:a},uNormalMap1:{value:o},uNormalMap2:{value:t}}),[]);return B(e=>{const{country:d}=b.getState();(d==="fr"||d==="befr2")&&(N.uTime.value=e.clock.getElapsedTime())}),s.jsxs(s.Fragment,{children:[s.jsx("mesh",{name:"river",geometry:p.geometry,position:p.position.toArray(),onUpdate:e=>e.matrixAutoUpdate=!1,children:s.jsx("meshStandardMaterial",{ref:r,roughness:.01,map:a,envMap:m.texture,normalMap:t,onBeforeCompile:e=>{e.fragmentShader=`
            uniform sampler2D uNormalMap1;
            uniform sampler2D uNormalMap2; 
            uniform float uTime;
            ${e.fragmentShader}
          `,e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`
              vec2 vNormalMapUvUpdate1 = vNormalMapUv;
              vNormalMapUvUpdate1 *= .55;
              vNormalMapUvUpdate1.x -= uTime * 0.001;
              vec2 vNormalMapUvUpdate2 = vNormalMapUv;
              vNormalMapUvUpdate2 *= .5;
              vNormalMapUvUpdate2.y += uTime * 0.002;
              vec4 textureNormalMap1 = texture2D( uNormalMap1, vNormalMapUvUpdate1 );
              vec4 textureNormalMap2 = texture2D( uNormalMap2, vNormalMapUvUpdate2 );
              vec3 textureNormalMap = (textureNormalMap1.xyz * 2.0 - 1.0) + (textureNormalMap2.xyz * 2.0 - 1.0);
              vec3 mapN = textureNormalMap;
              mapN.xy *= 0.25;
              normal = normalize( tbn * mapN );
            `),e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`
              vec4 sampledDiffuseColor = texture2D( map, vMapUv );
              diffuseColor *= sampledDiffuseColor;
              vec3 addBlue = vec3(0.1,0.5,1.0);
              diffuseColor *= vec4(addBlue, 1.0);
              diffuseColor += diffuseColor;
            `),e.uniforms={...e.uniforms,...N}}})}),s.jsxs("group",{name:"sideWalk",children:[v.map(({geometry:e,uuid:d})=>s.jsx("mesh",{geometry:e,material:M,onUpdate:C=>C.matrixAutoUpdate=!1},d)),s.jsx("mesh",{geometry:u.geometry,material:u.material})]})]})};export{z as default};
