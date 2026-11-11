import{aI as k,ab as d,a9 as H,a as w,aM as f,am as E,aK as n,aN as D,ac as K}from"./index-DWN9ksCY.js";import{a as q,n as J,p as Q,g as y,h as U}from"./Scene-CZcQKrv0.js";import{u as N}from"./useAnimation-BDxQNQqc.js";import{S as X}from"./shapes-CMzZ5bur.js";const Y=()=>{const p=K(e=>e.scene),{currentCamera:g,mobile:o}=f.getState(),{mesh_sebastien:i,mesh_vespa:a,mesh_animations:M,fr_cameras_animations:u}=f.getState(),[l]=u?.filter(({name:e})=>e==="cameraFranceLuxembourg"),[x]=M?.filter(({name:e})=>e==="action-drive-stop"),[s,h]=N("action-drive-stop",i,x),[b,C]=N("cameraFranceLuxembourg",a,l),[t]=a?.children,V=t.getObjectByName("vespaInner"),I=o?3:4;let j=!1,m=!1,z=0,P=0,B=0,_=!1,R=0;const A=1;let F=!1,T=!1;const O=e=>{e.traverse(r=>{(r.type==="Mesh"||r.type==="Group")&&r.position.set(0,0,0)}),e.position.copy(e.userData.position),e.rotation.copy(e.userData.rotation)};d.useEffect(()=>f.subscribe(e=>e.country,e=>{e==="fr"&&a&&O(a),e==="frlux"||(j=!1,m=!1,T=!1,s.stop(),b.stop(),F=!1),e==="luxbe"&&Q(p)},{fireImmediately:!0}),[]),d.useEffect(()=>f.subscribe(e=>e.teleportation,e=>{const{country:r}=f.getState();e&&r==="frlux"&&a&&O(a)}),[]),d.useEffect(()=>D.subscribe(e=>e.scroll,e=>{const{country:r}=f.getState();if(r==="frlux"){if(_=B>e,T=(P>0||m)&&z>=P,R=a.position.distanceTo(g.position)/20,e>.025&&i&&t&&a&&V){if(!F){t.position.x=.2,t.position.y=-.9,V.add(i),i.rotation.y=-Math.PI,i.position.set(-.04,-.6,.09);const v=V?.getObjectByName("Wolf3D_Helmet");v.visible=!0,F=!0}j||(b.reset().play().paused=!0,s.reset().play().paused=!0,j=!0),_||R>A&&a&&(j=!0)}if(e>.03){let v=parseFloat(e-B);v<15e-6&&(v=0),v===0&&!m&&(s.timeScale=1,s.reset().play(),m=!0),!s.isRunning()&&v>0&&m&&T&&(s.timeScale=-1,s.reset(),s.time=s.getClip().duration,s.play(),m=!1)}_&&(P=b.time,z=b.getClip().duration*e),_||(z=b.getClip().duration*e,z>=P&&e<.72&&(b.time=z)),B=e,e>.73&&(m=!0),f.setState({mesh_vespa_stopped:m})}}),[]);let L=0;return E((e,r)=>{const{country:v}=f.getState(),{scroll:c}=D.getState();if(v==="frlux"){if(j&&t.position.z>=-I&&y(t.position,[t.position.x,t.position.y,-I],.3,r),t&&c>.05&&c<.75){if(m)y(t.rotation,[t.rotation.x,t.rotation.y,0],.1,r);else{if(c>.05&&c<.15){const S=(c-.05)/.09999999999999999;y(t.rotation,[t.rotation.x,t.rotation.y,S*-.8],1,r)}if(c>.3&&c<.45){const S=(c-.3)/.15000000000000002;y(t.rotation,[t.rotation.x,t.rotation.y,S*-.8],1,r)}if(c>.5&&c<.7){const S=(c-.5)/.19999999999999996;y(t.rotation,[t.rotation.x,t.rotation.y,S*1.2],1,r)}}y(t.rotation,[t.rotation.x,t.rotation.y,0],.5,r)}if(C&&C.update(r),h&&h.update(r),i){const S=c-L,{morphTargetInfluences:W}=i.getObjectByName("Wolf3D_Outfit_Top"),G=U(Math.sin(12*e.clock.getElapsedTime()*100*S*5),0,1);S>25e-5&&(W[0]=G),L=c}}}),null},Z=({particles:p})=>{const{mobile:g}=f.getState(),o=d.useRef(null),i=d.useMemo(()=>{const u=new Float32Array(p*3);for(let l=0;l<p;l++){let x=Math.random()*.05,s=Math.random()*.05,h=Math.random()*3;u.set([x,s,h],l*3)}return u},[p]),a=d.useMemo(()=>{const u=new Float32Array(p);for(let l=0;l<p;l++)u.set([Math.random()*(g?25:120)],l);return u},[p]),M=d.useMemo(()=>({uTime:{value:0},uMobile:{value:g?1:0},uDeltaScroll:{value:0}}),[]);return E(u=>{const{clock:l}=u,{scroll:x}=D.getState(),{country:s}=f.getState();if(o.current)if(s==="frlux"){if(x>.05){const{deltaScroll:h}=D.getState();o.current.visible=!0,o.current.material.uniforms.uTime.value=l.elapsedTime,o.current.material.uniforms.uDeltaScroll.value=h}}else o.current.visible=!1}),n.jsxs("points",{ref:o,position:[.1,-.35,.85],visible:!1,children:[n.jsxs("bufferGeometry",{children:[n.jsx("bufferAttribute",{attach:"attributes-position",count:i.length/3,array:i,itemSize:3}),n.jsx("bufferAttribute",{attach:"attributes-sizes",count:a.length,array:a,itemSize:1})]}),n.jsx("shaderMaterial",{depthWrite:!1,transparent:!0,uniforms:M,vertexShader:`
        uniform float uTime;
        uniform float uDeltaScroll;
        uniform int uMobile;
        attribute float sizes;
        varying float vDeltaScroll;
        void main() {
          vec3 updatePosition = position;
          float normalizeSizes = 0.0;
          if(uMobile == 1) {
             normalizeSizes = sizes / 200.0;
          } else {
             normalizeSizes = sizes / 800.0;
          }
          updatePosition.z *= mod(uTime * 0.8, normalizeSizes);
          vec4 modelPosition = modelMatrix * vec4(updatePosition, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          gl_Position = projectedPosition;
          //gl_PointSize = sizes * uDeltaScroll;
          gl_PointSize = sizes;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vDeltaScroll = uDeltaScroll;
        }
      `,fragmentShader:`
        varying float vDeltaScroll;
        void main() {
          vec3 color = vec3(1.0, 0.5, 0.5);
          float circle = 1.0 - distance(gl_PointCoord, vec2(0.5, 0.5)) / 0.5;
          float scrollEffect = max((1.0-vDeltaScroll) * 0.35, 0.0);
          gl_FragColor = vec4(color, max(circle * scrollEffect, 0.0) * 0.5 );
        }
      `})]})},ie=()=>{const[p,g]=k.useState(!1),o=d.useRef(null);let i=null;const a=new H(new w,new w),M=q("gltf/model.glb"),{nodes:u}=M,{vespa:l}=u;return d.useEffect(()=>{o.current&&(i=o.current.getObjectByName("vespaColider"),a.setFromObject(i),o.current.position.copy(J([-33,.6,-33.5])),o.current.rotation.y=Math.PI/2-.45,o.current.userData={currentPosition:new w,...o.current.userData,position:o.current.position.clone(),rotation:o.current.rotation.clone()},o.current.getObjectByName("vespa")?.children.forEach(s=>{s.castShadow=!0}),f.setState({mesh_vespa:o.current}),g(!0))},[]),E(()=>{o.current&&i&&a.copy(i.geometry.boundingBox).applyMatrix4(i.matrixWorld)}),n.jsxs(n.Fragment,{children:[n.jsx("group",{name:"vespaGroup",ref:o,position:[0,0,0],children:n.jsxs("group",{name:"vespaWrapper",position:[0,0,0],children:[n.jsx(X,{name:"vespaColider",scale:[3,3,3],position:[0,0,-2],children:n.jsx("meshBasicMaterial",{visible:!1})}),n.jsxs("group",{name:"vespaInner",position:[0,0,0],children:[n.jsx("primitive",{object:l,position:[0,0,0]}),n.jsx(Z,{particles:80})]})]})}),p&&n.jsx(Y,{})]})};export{ie as default};
