(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5980],{6052:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_lib/Modules/Raycast/Client",function(){return s(2847)}])},2847:function(n,e,s){"use strict";s.r(e),s.d(e,{__toc:function(){return a}});var i=s(2676),l=s(2140),r=s(8745),t=s(7100);let a=[{depth:2,value:"lib.raycast.fromCoords",id:"libraycastfromcoords"},{depth:2,value:"lib.raycast.fromCamera",id:"libraycastfromcamera"},{depth:2,value:"lib.raycast.cam",id:"libraycastcam"}];function _createMdxContent(n){let e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",a:"a"},(0,r.a)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Client"}),"\n",(0,i.jsx)(e.h2,{id:"libraycastfromcoords",children:"lib.raycast.fromCoords"}),"\n",(0,i.jsx)(e.p,{children:"Starts a shapetest originating from starting coordinates and ending at destination coordinates."}),"\n",(0,i.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib.raycast."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fromCoords"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(coords, destination, flags, ignore)"})]})})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["coords: ",(0,i.jsx)(e.code,{children:"vector3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Starting coords for raycast"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["destination: ",(0,i.jsx)(e.code,{children:"vector3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Destination coords for raycast"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["flags?: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["See: ",(0,i.jsx)(e.a,{href:"https://docs.fivem.net/natives/?_0x377906D8A31E5586",children:"https://docs.fivem.net/natives/?_0x377906D8A31E5586"})]}),"\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"511"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ignore?: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"A bit mask with bits 1, 2, 4, or 7 relating to collider types. 4 and 7 are usually used."}),"\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"4"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Return:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["hit: ",(0,i.jsx)(e.code,{children:"boolean"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Whether or not an entity was hit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["entityHit: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Entity handle of hit entity"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["endCoords: ",(0,i.jsx)(e.code,{children:"vector3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Closest coords to where the raycast hit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["surfaceNormal: ",(0,i.jsx)(e.code,{children:"vector3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Normal to the surface that was hit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["materialHash: ",(0,i.jsx)(e.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"libraycastfromcamera",children:"lib.raycast.fromCamera"}),"\n",(0,i.jsx)(e.p,{children:"Starts a shapetest originating from the camera, extending to ~10m by default."}),"\n",(0,i.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(e.span,{className:"line",children:[(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"lib.raycast."}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"fromCamera"}),(0,i.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(flags, ignore, distance)"})]})})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["flags?: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["See: ",(0,i.jsx)(e.a,{href:"https://docs.fivem.net/natives/?_0x377906D8A31E5586",children:"https://docs.fivem.net/natives/?_0x377906D8A31E5586"})]}),"\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"511"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["ignore?: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"A bit mask with bits 1, 2, 4, or 7 relating to collider types. 4 and 7 are usually used."}),"\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"4"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["distance?: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Default: ",(0,i.jsx)(e.code,{children:"10"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Return:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["hit: ",(0,i.jsx)(e.code,{children:"boolean"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Whether or not an entity was hit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["entityHit: ",(0,i.jsx)(e.code,{children:"number"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Entity handle of hit entity"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["endCoords: ",(0,i.jsx)(e.code,{children:"vector3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Closest coords to where the raycast hit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["surfaceNormal: ",(0,i.jsx)(e.code,{children:"vector3"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Normal to the surface that was hit"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["materialHash: ",(0,i.jsx)(e.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"libraycastcam",children:"lib.raycast.cam"}),"\n",(0,i.jsx)(t.UW,{type:"warning",children:"lib.raycast.cam is depreciated alias for lib.raycast.fromCamera and may be removed at any time. Use lib.raycast.fromCamera instead!"})]})}e.default=(0,l.j)({MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(_createMdxContent,{...n})}):_createMdxContent(n)},pageOpts:{filePath:"pages/ox_lib/Modules/Raycast/Client.mdx",route:"/ox_lib/Modules/Raycast/Client",timestamp:1728423518e3,title:"Client",headings:a},pageNextRoute:"/ox_lib/Modules/Raycast/Client"})}},function(n){n.O(0,[2601,9774,2888,179],function(){return n(n.s=6052)}),_N_E=n.O()}]);