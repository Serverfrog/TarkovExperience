import{s as le,a as ue,b as fe,d as W,e as X,f as ce,u as de,g as me,h as he,r as ve}from"../chunks/scheduler.B9Ai12Mk.js";import{S as re,i as ie,e as C,k as H,c as L,a as I,l as M,d as _,m as a,n as j,o as Z,g as T,h as v,p as F,q as _e,r as N,u as ge,s as q,t as R,v as ke,w as x,f as w,b as Y,x as be,y as $,z as pe,A as ee,B as ne,j as oe,C as Ee}from"../chunks/index.Ca97O_IP.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BbrK_Q7C.js";function te(s){let e,t,l;const c=s[16].default,r=ce(c,s,s[15],null);return{c(){e=H("text"),r&&r.c(),this.h()},l(o){e=M(o,"text",{x:!0,y:!0,"text-anchor":!0,"dominant-baseline":!0,"font-weight":!0,"font-size":!0,class:!0});var d=I(e);r&&r.l(d),d.forEach(_),this.h()},h(){a(e,"x","50%"),a(e,"y","50%"),a(e,"text-anchor","middle"),a(e,"dominant-baseline","middle"),a(e,"font-weight","bold"),a(e,"font-size",s[2]),a(e,"class",t="progress-radial-text "+s[7])},m(o,d){T(o,e,d),r&&r.m(e,null),l=!0},p(o,d){r&&r.p&&(!l||d&32768)&&de(r,c,o,o[15],l?he(c,o[15],d,null):me(o[15]),null),(!l||d&4)&&a(e,"font-size",o[2]),(!l||d&128&&t!==(t="progress-radial-text "+o[7]))&&a(e,"class",t)},i(o){l||(F(r,o),l=!0)},o(o){N(r,o),l=!1},d(o){o&&_(e),r&&r.d(o)}}}function Ie(s){let e,t,l,c,r,o,d=`${s[9]}
			${s[9]}`,b,g,m,h,u=s[0]!=null&&s[0]>=0&&s[13].default&&te(s);return{c(){e=C("figure"),t=H("svg"),l=H("circle"),r=H("circle"),u&&u.c(),this.h()},l(i){e=L(i,"FIGURE",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-valuemin":!0,"aria-valuemax":!0});var n=I(e);t=M(n,"svg",{viewBox:!0,class:!0});var p=I(t);l=M(p,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0}),I(l).forEach(_),r=M(p,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0,"stroke-linecap":!0}),I(r).forEach(_),u&&u.l(p),p.forEach(_),n.forEach(_),this.h()},h(){a(l,"class",c="progress-radial-track "+ae+" "+s[6]),a(l,"stroke-width",s[1]),a(l,"r",s[12]),a(l,"cx","50%"),a(l,"cy","50%"),a(r,"class",o="progress-radial-meter "+se+" "+s[5]+" "+s[4]),a(r,"stroke-width",s[1]),a(r,"r",s[12]),a(r,"cx","50%"),a(r,"cy","50%"),a(r,"stroke-linecap",s[3]),j(r,"stroke-dasharray",d),j(r,"stroke-dashoffset",s[10]),a(t,"viewBox","0 0 "+G+" "+G),a(t,"class","rounded-full"),Z(t,"animate-spin",s[0]===void 0),a(e,"class",b="progress-radial "+s[11]),a(e,"data-testid","progress-radial"),a(e,"role","meter"),a(e,"aria-labelledby",s[8]),a(e,"aria-valuenow",g=s[0]||0),a(e,"aria-valuetext",m=s[0]?`${s[0]}%`:"Indeterminate Spinner"),a(e,"aria-valuemin",0),a(e,"aria-valuemax",100)},m(i,n){T(i,e,n),v(e,t),v(t,l),v(t,r),u&&u.m(t,null),h=!0},p(i,[n]){(!h||n&64&&c!==(c="progress-radial-track "+ae+" "+i[6]))&&a(l,"class",c),(!h||n&2)&&a(l,"stroke-width",i[1]),(!h||n&48&&o!==(o="progress-radial-meter "+se+" "+i[5]+" "+i[4]))&&a(r,"class",o),(!h||n&2)&&a(r,"stroke-width",i[1]),(!h||n&8)&&a(r,"stroke-linecap",i[3]),n&512&&d!==(d=`${i[9]}
			${i[9]}`)&&j(r,"stroke-dasharray",d),n&1024&&j(r,"stroke-dashoffset",i[10]),i[0]!=null&&i[0]>=0&&i[13].default?u?(u.p(i,n),n&8193&&F(u,1)):(u=te(i),u.c(),F(u,1),u.m(t,null)):u&&(_e(),N(u,1,1,()=>{u=null}),ge()),(!h||n&1)&&Z(t,"animate-spin",i[0]===void 0),(!h||n&2048&&b!==(b="progress-radial "+i[11]))&&a(e,"class",b),(!h||n&256)&&a(e,"aria-labelledby",i[8]),(!h||n&1&&g!==(g=i[0]||0))&&a(e,"aria-valuenow",g),(!h||n&1&&m!==(m=i[0]?`${i[0]}%`:"Indeterminate Spinner"))&&a(e,"aria-valuetext",m)},i(i){h||(F(u),h=!0)},o(i){N(u),h=!1},d(i){i&&_(e),u&&u.d()}}}const ye="progress-radial relative overflow-hidden",ae="fill-transparent",se="fill-transparent -rotate-90 origin-[50%_50%]",G=512;function Ce(s,e,t){let l,{$$slots:c={},$$scope:r}=e;const o=ue(c);let{value:d=void 0}=e,{stroke:b=40}=e,{font:g=56}=e,{strokeLinecap:m="butt"}=e,{transition:h="transition-[stroke-dashoffset]"}=e,{width:u="w-36"}=e,{meter:i="stroke-surface-900 dark:stroke-surface-50"}=e,{track:n="stroke-surface-500/30"}=e,{fill:p="fill-token"}=e,{labelledby:D=""}=e;const V=G/2-b/2;let P=V,y;function B(f){t(9,P=V*2*Math.PI),t(10,y=P-f/100*P)}return B(0),fe(()=>{B(d===void 0?25:d)}),s.$$set=f=>{t(18,e=W(W({},e),X(f))),"value"in f&&t(0,d=f.value),"stroke"in f&&t(1,b=f.stroke),"font"in f&&t(2,g=f.font),"strokeLinecap"in f&&t(3,m=f.strokeLinecap),"transition"in f&&t(4,h=f.transition),"width"in f&&t(14,u=f.width),"meter"in f&&t(5,i=f.meter),"track"in f&&t(6,n=f.track),"fill"in f&&t(7,p=f.fill),"labelledby"in f&&t(8,D=f.labelledby),"$$scope"in f&&t(15,r=f.$$scope)},s.$$.update=()=>{t(11,l=`${ye} ${u} ${e.class??""}`)},e=X(e),[d,b,g,m,h,i,n,p,D,P,y,l,V,o,u,r,c]}class Le extends re{constructor(e){super(),ie(this,e,Ce,Ie,le,{value:0,stroke:1,font:2,strokeLinecap:3,transition:4,width:14,meter:5,track:6,fill:7,labelledby:8})}}const S=[0,1e3,4017,8432,14256,21477,30023,39936,51204,63723,77563,92713,111881,134674,161139,191417,225194,262366,302484,345751,391649,440444,492366,547896,609066,679255,755444,837672,925976,1020396,1120969,1227735,1344260,1470605,1606833,1759965,1923579,2097740,2282513,2477961,2684149,2901143,3132824,3379281,3640603,3929436,4233995,4554372,4890662,5242956,5611348,5995931,6402287,6830542,7280825,7753260,8247975,8765097,9304752,9876880,10512365,11193911,11929835,12727177,13615989,14626588,15864243,17555001,19926895,22926895,26526895,30726895,35526895,40926895,46926895,53526895,60726895,69126895,81126895];function Pe(s){let e,t;return{c(){e=R(s[3]),t=R("%")},l(l){e=Y(l,s[3]),t=Y(l,"%")},m(l,c){T(l,e,c),T(l,t,c)},p(l,c){c&8&&oe(e,l[3])},d(l){l&&(_(e),_(t))}}}function ze(s){let e,t,l,c="Tarkov Experience Visualisation",r,o,d="Your current Experience:",b,g,m,h,u,i,n,p,D,V,P,y,B,f,J;return y=new Le({props:{value:s[0],$$slots:{default:[Pe]},$$scope:{ctx:s}}}),{c(){e=C("div"),t=C("div"),l=C("h1"),l.textContent=c,r=q(),o=C("p"),o.textContent=d,b=q(),g=C("div"),m=C("input"),h=q(),u=C("div"),i=C("div"),n=C("h2"),p=R("Level "),D=R(s[2]),V=q(),P=C("div"),ke(y.$$.fragment),this.h()},l(k){e=L(k,"DIV",{class:!0});var z=I(e);t=L(z,"DIV",{class:!0});var E=I(t);l=L(E,"H1",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-zvfgdo"&&(l.textContent=c),r=w(E),o=L(E,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1be5y5w"&&(o.textContent=d),b=w(E),g=L(E,"DIV",{});var K=I(g);m=L(K,"INPUT",{class:!0,max:!0,min:!0,title:!0,type:!0}),K.forEach(_),h=w(E),u=L(E,"DIV",{class:!0});var U=I(u);i=L(U,"DIV",{class:!0});var O=I(i);n=L(O,"H2",{});var A=I(n);p=Y(A,"Level "),D=Y(A,s[2]),A.forEach(_),O.forEach(_),V=w(U),P=L(U,"DIV",{});var Q=I(P);be(y.$$.fragment,Q),Q.forEach(_),U.forEach(_),E.forEach(_),z.forEach(_),this.h()},h(){a(l,"class","h1"),a(m,"class","input "),a(m,"max",s[4]),a(m,"min","0"),a(m,"title","Your current Experience"),a(m,"type","number"),a(i,"class","text-right pr-10"),a(u,"class","grid items-center grid-cols-2"),a(t,"class","space-y-5"),a(e,"class","container h-full mx-auto flex justify-center items-center")},m(k,z){T(k,e,z),v(e,t),v(t,l),v(t,r),v(t,o),v(t,b),v(t,g),v(g,m),$(m,s[1]),v(t,h),v(t,u),v(u,i),v(i,n),v(n,p),v(n,D),v(u,V),v(u,P),pe(y,P,null),B=!0,f||(J=[ee(m,"input",s[6]),ee(m,"input",s[7])],f=!0)},p(k,[z]){z&2&&ne(m.value)!==k[1]&&$(m,k[1]),(!B||z&4)&&oe(D,k[2]);const E={};z&1&&(E.value=k[0]),z&2056&&(E.$$scope={dirty:z,ctx:k}),y.$set(E)},i(k){B||(F(y.$$.fragment,k),B=!0)},o(k){N(y.$$.fragment,k),B=!1},d(k){k&&_(e),Ee(y),f=!1,ve(J)}}}function Be(s,e,t){let l,c=0,r=1,o=0;const d=S[S.length-1],b=new Intl.NumberFormat("en-US",{maximumFractionDigits:2});function g(){m(),h()}function m(){for(let n=S.length;n>-1;n--)if(c>=S[n]){t(2,r=n+1);return}t(2,r=1)}function h(){let n=S[r-1],p=S[r];t(0,o=100*((c-n)/(p-n))),console.log(o)}function u(){c=ne(this.value),t(1,c)}const i=()=>{g()};return s.$$.update=()=>{s.$$.dirty&1&&t(3,l=b.format(o))},[o,c,r,l,d,g,u,i]}class Fe extends re{constructor(e){super(),ie(this,e,Be,ze,le,{})}}export{Fe as component};
