"use strict";const k=Math.PI,ba=t=>t<0?-t:t,ca=(t,i)=>t<i?t:i,da=(t,i)=>i<t?t:i,ea=(t,i=0,s=1)=>t<i?i:s<t?s:t,ha=(t,i=0,s=1)=>s-i?ea((t-i)/(s-i)):0,ja=(t,i=0,s=1)=>i+ea(t)*(s-i),ka=(t,i,s,a)=>2*ba(t.x-s.x)<i.x+a.x&2*ba(t.y-s.y)<i.y+a.y,t=(t=1,i=0)=>i+(t-i)*Math.random(),la=(i=1,s=0)=>0|t(i,s),na=(i=1)=>0<i?ma(i*t(0/i,1)**.5):new u,ma=(i=1)=>qa(new u,t(2*k),i),ra=(i=new w,s=new w(0,0,0,1),a)=>a?i.da(s,t()):new w(t(i.r,s.r),t(i.o,s.o),t(i.b,s.b),t(i.a,s.a));let va=1;const y=(t=0,i)=>null==t.x?new u(t,null==i?t:i):new u(t.x,t.y);function qa(t,i=0,s=1){return t.x=s*Math.sin(i),t.y=s*Math.cos(i),t}function wa(t,i){return(t.x-i.x)**2+(t.y-i.y)**2}function xa(t,i=1){var s=t.length();return i<s?t.scale(i/s):t}function ya(t,i){return 0<=t.x&&0<=t.y&&t.x<i.x&&t.y<i.y}class u{constructor(t=0,i=0){this.x=t,this.y=i}D(){return new u(this.x,this.y)}add(t){return new u(this.x+t.x,this.y+t.y)}u(t){return new u(this.x-t.x,this.y-t.y)}multiply(t){return new u(this.x*t.x,this.y*t.y)}vb(t){return new u(this.x/t.x,this.y/t.y)}scale(t){return new u(this.x*t,this.y*t)}length(){return(this.x**2+this.y**2)**.5}normalize(t=1){var i=this.length();return i?this.scale(t/i):new u(0,t)}angle(){return Math.atan2(this.x,this.y)}rotate(t){var i=Math.cos(t);return t=Math.sin(t),new u(this.x*i-this.y*t,this.x*t+this.y*i)}direction(){return ba(this.x)>ba(this.y)?this.x<0?3:1:this.y<0?2:0}floor(){return new u(Math.floor(this.x),Math.floor(this.y))}da(t,i){return this.add(t.u(this).scale(ea(i)))}toString(t=3){return`(${(this.x<0?"":" ")+this.x.toFixed(t)},${(this.y<0?"":" ")+this.y.toFixed(t)} )`}}function za(t=0){var i=new w,s=(t,i,s)=>(s=(s%1+1)%1)<1/6?t+6*(i-t)*s:s<.5?i:s<2/3?t+(i-t)*(2/3-s)*6:t;return i.r=s(1.4-1,1,t+1/3),i.o=s(1.4-1,1,t),i.b=s(1.4-1,1,t-1/3),i.a=1,i}function Ba(t){return(255*t.r|0)+(255*t.o<<8)+(255*t.b<<16)+(255*t.a<<24)}class w{constructor(t=1,i=1,s=1,a=1){this.r=t,this.o=i,this.b=s,this.a=a}D(){return new w(this.r,this.o,this.b,this.a)}add(t){return new w(this.r+t.r,this.o+t.o,this.b+t.b,this.a+t.a)}u(t){return new w(this.r-t.r,this.o-t.o,this.b-t.b,this.a-t.a)}multiply(t){return new w(this.r*t.r,this.o*t.o,this.b*t.b,this.a*t.a)}vb(t){return new w(this.r/t.r,this.o/t.o,this.b/t.b,this.a/t.a)}scale(t,i=t){return new w(this.r*t,this.o*t,this.b*t,this.a*i)}da(t,i){return this.add(t.u(this).scale(ea(i)))}toString(){return`rgb(${255*this.r|0},${255*this.o|0},${255*this.b|0},${this.a})`}}function Ca(t){return null!=t.time?ha(t.time-Da,t.setTime,0):0}class B{constructor(t){this.time=null==t?void 0:Da+t,this.setTime=t}set(t=0){this.time=Da+t,this.setTime=t}active(){return Da<=this.time}get(){return null!=this.time?Da-this.time:0}toString(){}}let Ea=y(1920,1200),Fa=y(),Oa=y(16),Pa=y(1),Qa=0,F=y(),H=da(Oa.x,Oa.y);const Wa=1/60;let Xa=[],Ya=[],Za=0,Da=0,bb=0,eb=0,fb=0,gb,hb;function ib(t,a,h,e,n,i){jb.onerror=jb.onload=()=>{hb=y(.3).vb(gb=y(jb.width,jb.height)),document.body.style="margin:0;overflow:hidden;background:#000;touch-action:none;user-select:none;-webkit-user-select:none;-moz-user-select:none",document.body.appendChild(K=document.createElement("canvas")),kb=K.getContext("2d"),K.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",lb(),document.body.appendChild(M=document.createElement("canvas")),N=M.getContext("2d"),M.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",t(),r()};const r=(t=0)=>{var i=t-eb;for(eb=t,bb+=i/1e3,fb=ca(fb+i,50),Fa.x?(M.width=K.width=Fa.x,M.height=K.height=Fa.y,t=innerWidth/innerHeight,i=K.width/K.height,K.style.width=M.style.width=t<i?"100%":"",K.style.height=M.style.height=t<i?"":"100%",mb&&(mb.style.width=K.style.width,mb.style.height=K.style.height)):(M.width=K.width=ca(innerWidth,Ea.x),M.height=K.height=ca(innerHeight,Ea.y)),nb=y(K.width,K.height),t=0,fb<0&&-9<fb&&(t=fb,fb=0);0<=fb;fb-=1e3/60)document.hasFocus()||(P=[[]]),ob=pb(qb),sb(),a(),tb(),h(),ub();fb+=t,vb(),e(),Xa.sort((t,i)=>t.T-i.T);for(const s of Xa)s.$||s.fa();n(),wb(),xb(),requestAnimationFrame(r)};i?jb.src=i:jb.onload()}function vb(){nb=y(K.width,K.height),kb.imageSmoothingEnabled=!1;var t=K.width,i=K.height,s=F.x,a=F.y,h=H;R.viewport(0,0,mb.width=t,mb.height=i),R.clear(16384),R.bindTexture(3553,yb),R.useProgram(zb),Ab=void 0,t=2*h/t,i=2*h/i,R.uniformMatrix4fv(R.getUniformLocation(zb,"m"),0,new Float32Array([t,0,0,0,0,i,0,0,1,1,-1,1,-1-t*s,-1-i*a,0,0]))}function tb(){Ya=Xa.filter(t=>t.qb);const s=t=>{if(!t.$){t.update();for(const i of t.children)s(i)}};for(const t of Xa)t.parent||s(t);Xa=Xa.filter(t=>!t.$),Da=++Za/60}function Bb(t){if(!t.$){t.$=1,t.parent&&t.parent.removeChild(t);for(const i of t.children)Bb(i,i.parent=0)}}function Eb(t,i,s=y(),a=0){i.parent||t.children.includes(i),t.children.push(i),i.parent=t,i.ma=s.D(),i.Lb=a}function Fb(t,i=0){t.qb=i,t.Kb=0,t.ga=1}class Jb{constructor(t=y(),i=Pa,s=-1,a=Oa,h=0,e,n=0){this.g=t.D(),this.size=i,this.aa,this.l=s,this.v=a,this.angle=h,this.color=e,this.Fa,this.i=1,this.sa=this.K=.99,this.F=0,this.Sa=.8,this.ba=1,this.T=n,this.h=new u,this.Ga=0,this.Xb=Da,this.children=[],this.ga=1,Xa.push(this)}update(){var t=this.parent;if(t)this.g=this.ma.multiply(y(t.M?-1:1,1)).rotate(-t.angle).add(t.g),this.angle=(t.M?-1:1)*this.Lb+t.angle;else if(this.h.x=ea(this.h.x,-1,1),this.h.y=ea(this.h.y,-1,1),t=this.g.D(),this.g.x+=this.h.x*=this.K,this.g.y+=this.h.y=this.K*this.h.y+Qa*this.ba,this.angle+=this.Ga*=this.sa,this.i){var i,s,a,h,e,n,r,c=this.h.y<0;if(this.ca&&(i=this.ca.h?this.ca.h.x:0,this.h.x=i+(this.h.x-i)*this.Sa,this.ca=0),this.qb)for(var o of Ya)!this.Kb&!o.Kb||o.$||o.parent||o==this||ka(this.g,this.size,o.g,o.size)&&(ka(t,this.size,o.g,o.size)?(i=(s=(i=t.u(o.g)).length())<.01?ma(.001):i.scale(.001/s),this.h=this.h.add(i),o.i&&(o.h=o.h.u(i))):(i=this.size.add(o.size),s=2*(t.y-o.g.y)>i.y+Qa,a=2*ba(t.y-o.g.y)<i.y,h=2*ba(t.x-o.g.x)<i.x,!s&&!h&&a||(this.g.y=o.g.y+(i.y/2+.001)*(t.y-o.g.y<0?-1:1),o.ca&&c||!o.i?(c&&(this.ca=o),this.h.y*=-this.F):o.i&&(e=(this.i*this.h.y+o.i*o.h.y)/(this.i+o.i),n=o.h.y*(o.i-this.i)/(this.i+o.i)+2*this.h.y*this.i/(this.i+o.i),r=da(this.F,o.F),this.h.y=ja(r,e,this.h.y*(this.i-o.i)/(this.i+o.i)+2*o.h.y*o.i/(this.i+o.i)),o.h.y=ja(r,e,n))),s||!a&&h||(this.g.x=o.g.x+(i.x/2+.001)*(t.x-o.g.x<0?-1:1),o.i?(i=(this.i*this.h.x+o.i*o.h.x)/(this.i+o.i),s=o.h.x*(o.i-this.i)/(this.i+o.i)+2*this.h.x*this.i/(this.i+o.i),a=da(this.F,o.F),this.h.x=ja(a,i,this.h.x*(this.i-o.i)/(this.i+o.i)+2*o.h.x*o.i/(this.i+o.i)),o.h.x=ja(a,i,s)):this.h.x*=-this.F)));this.ga&&Kb(this.g,this.size,this)&&!Kb(t,this.size,this)&&(o=Kb(new u(this.g.x,t.y),this.size,this),!Kb(new u(t.x,this.g.y),this.size,this)&&o||(this.ca=c,this.h.y*=-this.F,(c=(t.y-this.size.y/2|0)-(t.y-this.size.y/2))<0&&c>this.K*this.h.y+Qa*this.ba&&(this.h.y=this.K?(c-Qa*this.ba)/this.K:0),this.g.y=t.y),o&&(this.g.x=t.x,this.h.x*=-this.F))}}fa(){Lb(this.g,this.aa||this.size,this.l,this.v,this.color,this.angle,this.M,this.Fa)}removeChild(t){t.parent==this&&this.children.includes(t),this.children.splice(this.children.indexOf(t),1),t.parent=0}toString(){}}const jb=new Image;let K,kb,M,N,nb=y();const pb=t=>t.add(y(.5)).u(nb.scale(.5)).multiply(y(1/H,-1/H)).add(F),Mb=t=>t.u(F).multiply(y(H,-H)).add(nb.scale(.5)).u(y(.5));function Lb(t,i=y(1),s=-1,a=Oa,h=new w,e=0,n,r=new w(0,0,0,0)){var c,o,b;s<0||!jb.width?Nb(t.x,t.y,i.x,i.y,e,0,0,0,0,0,Ba(h)):(b=s%(c=gb.x/a.x|0)*(o=a.x/gb.x),s=(s/c|0)*(a=a.y/gb.y),Nb(t.x,t.y,n?-i.x:i.x,i.y,e,b+hb.x,s+hb.y,b-hb.x+o,s-hb.y+a,Ba(h),Ba(r)))}function Ob(t,i,s,a){Lb(t,i,-1,Oa,s,a,0,0)}function Pb(t,i=y(1),s){var a=Oa;Lb(pb(t),i.scale(1/H),-1,a,s,void 0,0,0)}function Qb(t,i){var s=y(.055),a=kb;t=Mb(t),s=s.scale(H),a.save(),a.translate(t.x+.5|0,t.y-.5|0),a.rotate(0),a.scale(s.x,s.y),i(a),a.restore()}function Rb(t,i,s=1,a=new w,h=0,e=new w(0,0,0),n="center"){N.fillStyle=a,N.lineWidth=h,N.strokeStyle=e,N.textAlign=n,N.font=s+"px arial",N.textBaseline="middle",N.lineJoin="round",i=i.D(),(t+"").split("\n").forEach(t=>{h&&N.strokeText(t,i.x,i.y),N.fillText(t,i.x,i.y),i.y+=s})}let Sb;function Tb(r,t,c,o=4){const b=r.context,l=(b.save(),b.imageSmoothingEnabled=!1,r.v),u=l.add(r.gd).scale(o),d=r.image.width/r.v.x|0;t.split("\n").forEach((i,s)=>{var a=i.length*l.x*o/2|0;for(let t=i.length;t--;){((h=i[t].charCodeAt())<32||127<h)&&(h=127);var h=(e=r.qd+h-32)%d,e=e/d|0,n=c.add(y(t,s).multiply(u));b.drawImage(r.image,h*l.x,e*l.y,l.x,l.y,n.x-a,n.y,l.x*o,l.y*o)}}),b.restore()}function Ub(t,i,s,a=1){Tb(t,i,Mb(s).floor(),a*H|0)}class Vb{constructor(){var t=y(8),i=y(0,1),s=N;Sb||((Sb=new Image).src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAYAQAAAAA9+x6JAAAAAnRSTlMAAHaTzTgAAAGiSURBVHjaZZABhxxBEIUf6ECLBdFY+Q0PMNgf0yCgsSAGZcT9sgIPtBWwIA5wgAPEoHUyJeeSlW+gjK+fegWwtROWpVQEyWh2npdpBmTUFVhb29RINgLIukoXr5LIAvYQ5ve+1FqWEMqNKTX3FAJHyQDRZvmKWubAACcv5z5Gtg2oyCWE+Yk/8JZQX1jTTCpKAFGIgza+dJCNBF2UskRlsgwitHbSV0QLgt9sTPtsRlvJjEr8C/FARWA2bJ/TtJ7lko34dNDn6usJUMzuErP89UUBJbWeozrwLLncXczd508deAjLWipLO4Q5XGPcJvPu92cNDaN0P5G1FL0nSOzddZOrJ6rNhbXGmeDvO3TF7DeJWl4bvaYQTNHCTeuqKZmbjHaSOFes+IX/+IhHrnAkXOAsfn24EM68XieIECoccD4KZLk/odiwzeo2rovYdhvb2HYFgyznJyDpYJdYOmfXgVdJTaUi4xA2uWYNYec9BLeqdl9EsoTw582mSFDX2DxVLbNt9U3YYoeatBad1c2Tj8t2akrjaIGJNywKB/7h75/gN3vCMSaadIUTAAAAAElFTkSuQmCC"),this.image=Sb,this.v=t,this.gd=i,this.qd=0,this.context=s}}const Wb=(t,i=0)=>P[i]&&1&P[i][t]?1:0;let ob=y(),qb=y(),Xb=0,Yb=0;const Zb=(t,i=0)=>Wb(t,i+1);let P=[[]];function ub(){for(const t of P)for(const i in t)t[i]&=1;Xb=0}onkeydown=t=>{t.repeat||(P[Yb=0][$b(t.keyCode)]=3)},onkeyup=t=>{P[0][$b(t.keyCode)]=4};const $b=t=>87==t?38:83==t?40:65==t?37:68==t?39:t,ac=(onmousedown=t=>{P[Yb=0][t.button]=3,onmousemove(t),t.button&&t.preventDefault()},onmouseup=t=>P[0][t.button]=2&P[0][t.button]|4,onmousemove=t=>{var i;return t=K?(i=K.getBoundingClientRect(),y(K.width,K.height).multiply(y(ha(t.x,i.left,i.right),ha(t.y,i.top,i.bottom)))):y(),qb=t},onwheel=t=>t.ctrlKey||(Xb=t.deltaY<0?-1:1),oncontextmenu=()=>!1,[]);function sb(){if(navigator.getGamepads&&document.hasFocus()){var i=navigator.getGamepads();for(let t=i.length;t--;){var s=i[t];const e=P[t+1]||(P[t+1]=[]),n=ac[t]||(ac[t]=[]);if(s){for(var a=t=>.3<t?ha(t,.3,.8):t<-.3?-ha(-t,.3,.8):0,h=0;h<s.axes.length-1;h+=2)n[h>>1]=xa(y(a(s.axes[h]),a(-s.axes[h+1])));for(a=s.buttons.length;a--;)h=s.buttons[a],e[a]=h.pressed?1+2*!Zb(a,t):4*Zb(a,t),Yb|=!t&&h.pressed;(s=y(Zb(15,t)-Zb(14,t),Zb(12,t)-Zb(13,t))).x**2+s.y**2&&(n[0]=xa(s))}}}}if(void 0!==window.ontouchstart){let s,a;ontouchstart=ontouchmove=ontouchend=t=>{t.button=0;var i=t.touches.length;return i?(a||bc([cc(...[0,a=1])]),t.x=t.touches[0].clientX,t.y=t.touches[0].clientY,(s?onmousemove:onmousedown)(t)):s&&onmouseup(t),s=i,!t.cancelable}}class dc{constructor(t,i=30,s=.7){this.ld=i,this.rd=s,this.ab=t[1]||0,t[1]=0,this.kc=cc(...t)}play(i,s=1,a=1,h=1){var e=0;if(i){if(e=this.ld){var n=wa(F,i);if(e*e<n)return;s*=ha(n**.5,e,e*this.rd)}e=2*Mb(i).x/K.width-1}return bc([this.kc],s,a+a*this.ab*h*t(-1,1),e)}}let ic;function bc(t,i=1,s=1,a=0){var h,e;if((ic=ic||new(window.AudioContext||webkitAudioContext)).resume(),"running"==ic.state)return h=ic.createBuffer(t.length,t[0].length,44100),e=ic.createBufferSource(),t.forEach((t,i)=>h.getChannelData(i).set(t)),e.buffer=h,e.playbackRate.value=s,e.loop=0,(t=ic.createGain()).gain.value=.5*i,t.connect(ic.destination),(window.StereoPannerNode?e.connect(new StereoPannerNode(ic,{pan:ea(a,-1,1)})):e).connect(t),e.start(),e}function cc(i=1,s=.05,a=220,h=0,e=0,n=.1,r=0,c=1,o=0,b=0,l=0,u=0,d=0,y=0,g=0,f=0,w=0,x=1,m=0,v=0){let p=2*k,M=o*=500*p/44100/44100,A=[],z=(s=a*=(1+s*t(-1,1))*p/44100,0),B=0,j=0,R=1,U=0,F=0,P=0,K,W;for(b*=500*p/44100**3,g*=p/44100,l*=p/44100,u*=44100,d=44100*d|0,W=(h=44100*h+9)+(m*=44100)+(e*=44100)+(n*=44100)+(w*=44100)|0;j<W;A[j++]=P)++F%(100*f|0)||(P=r?1<r?2<r?3<r?Math.sin((z%p)**3):da(ca(Math.tan(z),1),-1):1-(2*z/p%2+2)%2:1-4*ba(Math.round(z/p)-z/p):Math.sin(z),P=(d?1-v+v*Math.sin(p*j/d):1)*(P<0?-1:1)*(P<0?-P:P)**c*i*.5*(j<h?j/h:j<h+m?1-(j-h)/m*(1-x):j<h+m+e?x:j<W-w?(W-j-w)/n*x:0),P=w?P/2+(w>j?0:(j<W-w?1:(W-j)/w)*A[j-w|0]/2):P),K=(a+=o+=b)*Math.cos(g*B++),z+=K-K*y*(1-1e9*(Math.sin(j)+1)%2),R&&++R>u&&(a+=l,s+=l,R=0),!d||++U%d||(a=s,o=M,R=R||1);return A}let jc=[],kc=y();function lc(t){for(kc=t,t=(jc=[]).length=ba(kc.x*kc.y);t--;)jc[t]=0}const mc=(t,i=0)=>{ya(t,kc)&&(jc[(0|t.y)*kc.x+t.x|0]=i)};function Kb(t,i=y(),s){var a=da(t.x-i.x/2|0,0),h=da(t.y-i.y/2|0,0),e=ca(t.x+i.x/2,kc.x);for(t=ca(t.y+i.y/2,kc.y);h<t;++h)for(i=a;i<e;++i){var n=jc[h*kc.x+i];if(n&&(!s||0<n))return 1}}class nc{constructor(t,i=0,s=0,a=new w){this.gb=t,this.direction=i,this.M=s,this.color=a}clear(){this.gb=this.direction=this.M=0,color=new w}}function oc(t,i){var s=i.floor().add(t.g).add(y(.5));pc(t,s,t=>t.clearRect(-.5,-.5,1,1)),null!=(i=t.getData(i)).gb&&Lb(s,y(1),i.gb,t.v,i.color,i.direction*k/2,i.M)}function qc(t,i=0){i&&(t.canvas.width=t.size.x*t.v.x,t.canvas.height=t.size.y*t.v.y),t.Ub=[K,kb,F,H],K=t.canvas,kb=t.context,F=t.size.scale(.5),H=t.v.x,vb()}function pc(t,i,s){var a=y(1);const h=t.context;h.save(),i=i.u(t.g).multiply(t.v),a=a.multiply(t.v),h.translate(i.x,t.canvas.height-i.y),h.rotate(0),h.scale(a.x,a.y),s(h),h.restore()}class rc extends Jb{constructor(t=kc){var i=y(1);for(super(y(),t,-1,Oa,0,void 0,0),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.scale=i,this.Oc,this.data=[],t=this.size,t=ba(t.x*t.y);t--;)this.data.push(new nc)}setData(t,i,s){ya(t,this.size)&&(this.data[(0|t.y)*this.size.x+t.x|0]=i,s&&oc(this,t))}getData(t){return ya(t,this.size)&&this.data[(0|t.y)*this.size.x+t.x|0]}update(){}fa(){var t=Mb(this.g.add(y(0,this.size.y*this.scale.y)));(this.Oc?N:kb).drawImage(this.canvas,t.x,t.y,H*this.size.x*this.scale.x,H*this.size.y*this.scale.y)}}function sc(i){var s=null!=i.Na.x?new u(t(-.5,.5),t(-.5,.5)).multiply(i.Na).rotate(i.angle):na(.5*i.Na),s=new tc(i.g.add(s),i.l,i.v,i.angle+t(i.Qb,-i.Qb));const a=i.ab;var h=(c=i=>i+i*t(a,-a))(i.jd),e=c(i.eb),n=c(i.nd),r=c(i.speed),c=c(i.cc)*(2*(0|t(2))-1);const o=t(i.wb,-i.wb),b=ra(i.oc,i.pc,i.Sb),l=ra(i.mc,i.nc,i.Sb);s.va=b,s.ua=l.u(b),s.h=qa(new u,i.angle+o,r),s.Ga=c,s.Tc=h,s.eb=e,s.od=n-e,s.Qa=i.Qa,s.K=i.K,s.sa=i.sa,s.F=i.F,s.Sa=i.Sa,s.ba=i.ba,s.ga=i.ga,s.ra=i.ra,s.T=i.T,s.Ea=i.Ea,s.M=t()<.5,s.ub=i.yd,i.hd&&i.hd(s)}class uc extends Jb{constructor(t,i,s=0,a=0,h=100,e=k,n=-1,r=Oa,c=new w,o=new w,b=new w(1,1,1,0),l=new w(1,1,1,0),d=.5,y=.1,g=1,f=.1,x=.05,m=1,v=1,p=0,M=k,A=.1,z=.2,B,j,R=1,U=j?1e9:0){super(t,new u,n,r,i,void 0,U),this.Na=s,this.xb=a,this.xa=h,this.wb=e,this.oc=c,this.pc=o,this.mc=b,this.nc=l,this.Sb=R,this.jd=d,this.eb=y,this.nd=g,this.speed=f,this.cc=x,this.K=m,this.sa=v,this.ba=p,this.Qb=M,this.Qa=A,this.ab=z,this.ga=B,this.ra=j,this.ia=this.Ea=0}update(){if(this.parent&&super.update(),!this.xb||Da-this.Xb<=this.xb){if(+this.xa){var t=1/this.xa;for(this.ia+=Wa;0<this.ia;this.ia-=t)sc(this)}}else Bb(this)}fa(){}}class tc extends Jb{constructor(t,i,s,a){super(t,new u,i,s,a)}fa(){var t=ca((Da-this.Xb)/this.Tc,1),i=this.eb+t*this.od,i=new u(i,i),s=this.Qa/2,s=new w(this.va.r+t*this.ua.r,this.va.o+t*this.ua.o,this.va.b+t*this.ua.b,(this.va.a+t*this.ua.a)*(t<s?t/s:1-s<t?(1-t)/s:1));if(this.ra&&(Ab=1),this.Ea){var a=this.h.length();const h=this.h.scale(1/a);a*=this.Ea,i.y=da(i.x,a),this.angle=h.angle(),Lb(this.g.add(h.multiply(y(0,-a/2))),i,this.l,this.v,s,this.angle,this.M)}else Lb(this.g,i,this.l,this.v,s,this.angle,this.M);this.ra&&(Ab=void 0),1==t&&(this.color=s,this.size=i,this.ub&&this.ub(this),this.$=1)}}let vc=[],wc;function wb(){var t,i;vc.length&&(t=vc[0],i=bb-wc,wc?5<i?vc.shift(wc=0):t.fa():wc=bb)}let mb,R,yb,zb,U,W,xc,yc,Ab;function lb(){mb=document.createElement("canvas"),R=mb.getContext("webgl",{antialias:!1}),mb.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",yb=zc(),document.body.appendChild(mb),zb=Ac();var t=new ArrayBuffer(9437184);Bc(t.byteLength),U=new Float32Array(t),W=new Uint32Array(t);let e=xc=0;(t=(t,i,s,a,h=0)=>{t=R.getAttribLocation(zb,t),R.enableVertexAttribArray(t),R.vertexAttribPointer(t,a,i,h,24,e),e+=a*s})("p",5126,4,2),t("t",5126,4,2),t("c",5121,1,4,1),t("a",5121,1,4,1)}function Cc(t,i){return i=R.createShader(i),R.shaderSource(i,t),R.compileShader(i),i}function Ac(){var t=R.createProgram();return R.attachShader(t,Cc("precision highp float;uniform mat4 m;attribute vec2 p,t;attribute vec4 c,a;varying vec2 v;varying vec4 d,e;void main(){gl_Position=m*vec4(p,1,1);v=t;d=c;e=a;}",35633)),R.attachShader(t,Cc("precision highp float;varying vec2 v;varying vec4 d,e;uniform sampler2D s;void main(){gl_FragColor=texture2D(s,v)*d+e;}",35632)),R.linkProgram(t),t}function Bc(t){var i=R.createBuffer();R.bindBuffer(34962,i),R.bufferData(34962,t,35048)}function zc(){var t,i=jb;if(i&&i.width)return t=R.createTexture(),R.bindTexture(3553,t),R.texImage2D(3553,0,6408,6408,5121,i),R.texParameteri(3553,10241,9728),R.texParameteri(3553,10240,9728),R.texParameteri(3553,10242,33071),R.texParameteri(3553,10243,33071),t}function Dc(){var t;xc&&(t=yc?1:771,R.blendFuncSeparate(770,t,1,t),R.enable(3042),R.bufferSubData(34962,0,U.subarray(0,36*xc)),R.drawArrays(4,0,6*xc),xc=0,yc=Ab)}function xb(t){var i=kb;(xc||t)&&(Dc(),t&&i.drawImage(mb,0,0))}function Nb(t,i,s,a,h,e,n,r,c,o=4294967295,b=0){65536!=xc&&yc==Ab||Dc();var l=Math.cos(h)/2,u=Math.sin(h)/2;h=l*s,l*=a,s*=u,a*=u,u=36*xc++,U[u++]=t-h-a,U[u++]=i-l+s,U[u++]=e,U[u++]=c,W[u++]=o,W[u++]=b,U[u++]=t+h+a,U[u++]=i+l-s,U[u++]=r,U[u++]=n,W[u++]=o,W[u++]=b,U[u++]=t-h+a,U[u++]=i+l+s,U[u++]=e,U[u++]=n,W[u++]=o,W[u++]=b,U[u++]=t-h-a,U[u++]=i-l+s,U[u++]=e,U[u++]=c,W[u++]=o,W[u++]=b,U[u++]=t+h-a,U[u++]=i-l-s,U[u++]=r,U[u++]=c,W[u++]=o,W[u++]=b,U[u++]=t+h+a,U[u++]=i+l-s,U[u++]=r,U[u++]=n,W[u++]=o,W[+u]=b}!function(){function z(t){return Math.max(Math.min(Math.round(t),24),0)}function j(t){t.Ba=z(t.x+t.U/2),t.Ca=z(t.y+t.V/2),t.yb=z(t.x+t.U),t.ya=z(t.y+t.V)}function s(t){var i=t?255*t.r:x(180)+20,s=t?255*t.o:x(180)+20,a=(t=t?255*t.b:x(180)+20,x(6,24*.6)),h=x(6,24*.6),e=x(5,24*.6),n=x(0,24-e-2),r=x(6,12),c=x(8,24*.6),o=x(0,24-r-24*.2),b=x(2,r-4),l=x(1,.5*c),u=x(3,c-4),d=x(1,2);return{ec:[i-20,s-20,t-10],dc:[i-40,s-40,t-20],Ac:[i,s,t],sc:0===x(2)?[0,0,0]:[200,200,200],Lc:c,Jc:r,Kc:o,jc:a,hc:h,fc:e,ic:n,wc:x(1,3),uc:x(1,3),vc:b,tc:l,fd:u,dd:d,ed:x(2,r-b-d),Bc:x(-4,-1),xd:x(-4,3),Rc:2,Sc:Math.min(a/2,x(1,6))}}function a(a){var h;if(a)return h=s(),Object.keys(h).forEach(t=>{var s,i;0<x(20)&&(h[t]=(s=t,"number"==typeof(i=(t=a)[0][s])?(t=t.reduce((t,i)=>((i=i[s])<t[0]&&(t[0]=i),i>t[1]&&(t[1]=i),t),[1/0,-1/0]),x(t[0],t[1])):i))}),h}function R(t,i,s,a,h,e,n){var r=Math.floor((24-i)/2*n),c=24-r;return s-=r/2,[t,i,t+a,i,(h=Math.max(0,t+h+h*n))+e,s,t+a,c,t,c,h,s]}function h(t,a,i,s=4,h=0){t=i.ec;var e=i.dc,n=i.Ac,r=i.sc,c=i.Lc,o=i.wc,b=i.uc,l=i.vc,u=i.tc,d=i.fd,y=i.dd,g=i.ed,f=i.Bc,w=i.Rc,x=i.Sc,m=2<=s&&s<=6,v=[0,-.5,-1,-.5,0,.5,1,.5][s],p=[.5,.75,1,.75,.5,.25,0,.25][s],k=(s={x:(24-c)*p,y:i.Kc,U:c,V:i.Jc},(i.jc+i.hc)/2),M=(i={x:(1-p+1)/3*(24-k),y:i.ic,U:k,V:i.fc},j(s),j(i),z(i.ya+(24-i.ya)/2)),A=(Math.sin(h)+1)/2;h=R(i.x,i.ya,M,x,f*=v,w,1-A),w=R(i.yb-x,i.ya,M,x,f,w,A),x=[s.Ba-c/4,s.Ca,s.Ba+c/4,s.Ca,i.Ba+k/4,i.Ca-1,i.Ba-k/4,i.Ca-1],o={x:(p=s.x+c*p)+(k=Math.max(1,u/2)),y:(u={x:p-k-o,y:s.y+l,U:o,V:b}).y,U:o,V:b},l={x:b=Math.max(p-d/2,s.x),y:s.y+l+g,U:Math.min(b+d,s.yb)-b,V:y},d=(i,n)=>{Qb(a,t=>{var s=t,a=-.5,h=-.5,e=i,t=n;s.fillStyle=U(t),s.beginPath(),e.forEach((t,i)=>{1!=i%2&&s[0===i?"moveTo":"lineTo"](Math.round(24*a+t),Math.round(24*h+e[i+1]))}),s.closePath(),s.fill()})},y=(i,s)=>{Qb(a,t=>{t.fillStyle=U(s),t.fillRect(Math.round(-12+i.x),Math.round(-12+i.y),Math.round(i.U),Math.round(i.V))})},m?(y(i,t),d(x,t),d(h,t),d(w,t),y(s,n),u.x>=s.x&&y(u,r),o.x<=s.x+c&&y(o,r),y(l,[0,0,0])):(y(s,e),d(x,t),d(h,t),d(w,t),y(i,t))}function U(t){return t?`rgb(${Math.max(0,Math.min(255,t[0]))},${Math.max(0,Math.min(255,t[1]))},`+Math.max(0,Math.min(255,t[2])):"#fff"}function e(i,s,a){const h=E*++N;return I(i,s,a,h,0),[6,5,4,3,3,2,2,2,1,1,1,1,1].forEach(t=>{I(T(i,6),T(s,6),T(a,6),h+T(E-t),0+T(E-t),t,t)}),h}function n(t,i,s){const a=e(t,i,s);[14,10,6,3,3,3,2,2].forEach(t=>I(T(7,9),T(7,9),"a",a+T(E-t),0+T(E-t),t,t))}function r(t){(t=t.createElement("canvas")).width=30*E,t.height=2*E,S=t.getContext("2d"),t.style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)",S.drawImage(jb,1e3,1e3),I("f",0,0,0,0,12,12),I("f","f",0,12,12,12,12),e(2,4,3),e(2,4,2),e(3,4,3),e(4,3,3),S.fillStyle="#fff",S.font="20px serif","🔪 🩸 🍖 🌿 💕 ❕ 💢 💀 🍷 🍲 ⛏️ 🪓 🔨 🕯️ 🧱     ".split(" ").forEach(t=>{S.fillText(t,E*++N-1,20)}),n(3,4,3),n(4,3,3),e(3,4,2),e(3,3,3);{const i=E*++N;I(5,5,6,i,0),[8,8,8,8,8,6,6,6,6,4].forEach(t=>I(T(8,9),8,"a",i+T(E-t),0+T(E-t/2),t,t/2))}return t.toDataURL()}function i(){(L=O.w=O.m=new G).Mc(),X=new Vb,F=kc.scale(.5),H=42,Qa=0}function c(){var t=L.N;t!==O.N&&(O.N=t),P[0]&&4&P[0][13]&&(2===J||3===J?O.location.reload():0!==J&&2!==J||(J=1,L.ad())),t&&(O.wd=g,F=F.da(t.g,.1),t.C()?J=2:(13<=((t=t.Cb("Meat"))?t.j:0)&&g.O(5),g.count()===g.length&&(J=3))),H=ea(H*(1-Xb/10),3,700),L&&L.update()}function o(){}function b(){}function l(){const t=L.N,s=new w,i=M.width/2,a=M.height/2;var h=M.width/8e3;if(2===J)Rb("YOU DIED",y(i,a-90),90,new w(1,0,0),4),Rb("Press Enter to restart",y(i,a),40,new w(1,.5,.5),4);else if(0===J)Ub(X,"BIT BUTCHER",F.add(y(0,6)),h),Ub(X,"Press Enter to start",F.add(y(0,.4)),h/2);else if(1===J||3===J&&t){var e=t,n=M.width/2,r=e.B[e.L];for(Ub(X,`${r?r.name:"Nothing"} equipped, 1-9: Equip, E: Action, Q: Drop`,pb(y(n,M.height-40)),2/H),r=1;r<=10;r++){const o=y(n-300+60*r,M.height-100);var c=r%10;Pb(o,y(50,70),c===e.L?new w(.9,.9,.9,.3):new w(.1,.1,.1,.3)),(c=e.B[c])&&(Rb(c.I,o.add(y(0,-6)),28),Ub(X,""+c.j,pb(o.add(y(5,14))),2/H))}g.forEach((t,i)=>Rb(`[${t[1]?"X":" "}] `+t[0],y(M.width-300,100+30*i),18,t[1]?new w(.4,1,.4,.5):s,4,new w(0,0,0,t[1]?.5:1),"left")),h=85<t.H?0:1,h=new w(1,h,h,.8),Pb(y(i,40),y(Math.max(0,100-t.H)/100*500,2),h),Rb("Age: "+Math.ceil(t.H),y(i,40),20,h,4),3===J&&(Ub(X,"YOU WIN",F.add(y(0,5)),.2),Rb("Press Enter to play again",y(i,a-80),40,s,4))}}let u;const d=(t,i)=>{if(!dc)throw Error("no Sound");if(!(u=u||{hit:new dc([,,183,.03,.02,.09,,1.49,-1.8,,,,-.01,1.8,-1,.1,,.36,.08,.25]),attack:new dc([,,493,.01,.09,0,4,1.14,,,,,,,,.1,,.1,.01]),craft:new dc([,,7,.03,.28,.44,2,1.44,,-.3,20,.11,.04,,,.1,,.55,.29]),dud:new dc([.8,,112,,.07,.05,1,2.26,-.6,,,,,1.8,,.1,.2,.98,.1,.1]),powerup:new dc([,,1152,,.04,.17,,1.21,,,744,.08,,,,,,.91,.03]),pickup:new dc([1.05,,172,.02,,.17,2,.02,,,-409,.06,,,,.1,,.55,,.19]),walk:new dc([.65,.1,70,,,.01,4,,,,-9,.1,,,,,,.5]),consume:new dc([1.2,,16,.07,.18,.34,1,.38,-.1,-5.6,49,.15,.02,-.1,36,.1,,.39,.14])}))throw Error("no sounds");u[t]?u[t].play(i):console.warn("No sound",t,"in",u)};let g=[["Move (W,A,S,D or Arrows)"],["Pick up and equip knife (#)"],["Stab an animal"],["Make forbidden wine (9 blood)"],["Breed animals (with herbs)"],["Collect 13 meat"],["Eat a meaty, home-cooked meal"]],f=g;f.O=t=>{f[t][1]||d("powerup"),f[t][1]=(f[t][1]||0)+1},f.count=()=>f.reduce((t,i)=>t+(i[1]?1:0),0);const x=la;class m extends Jb{constructor(t={}){var{g:t=y(),size:i=y(1),l:s=1,v:a,angle:h,m:e,ha:n=0,name:r=la(999),s:c=0}=t;super(t,i,s,a,h),this.name=r,this.m=e,this.facing=k,this.direction=4,this.Z=new B,this.s=c,this.ha=n,this.aa=y(1)}setDirection(){this.direction=Math.round(this.facing<0?4+4*(k+this.facing)/k:4*this.facing/k)%8}wa(t){if(this.C()||this.Z.active())return 0;this.Z.set(1);for(var i of this.children)i.Z&&i.Z.set(1);return t=da(this.s-t,0),i=this.s-t,(this.s=t)||this.la(),i}C(){return!this.s}la(){Bb(this)}update(){var t;super.update(),this.setDirection(),this.C()||null==this.Z.time?this.Fa=new w(0,0,0,0):(t=.5*ha(this.Z.get(),.15,0),this.Fa=new w(t,.1,.1,.5))}Ra(){return this.m.X.find(t=>t.Pc&&!t.C())}}class v extends m{constructor(i){super(i),this.qa=new B,this.na=new B,this.$a=new B(20),this.lb=new B,this.Ia=new B,this.ac=new B,this.Nb=new B,this.Pa=null,this.P=new B,this.Bb=new B,this.color=za(t()),this.Ha=i.Ha||null,this.species=i.species||a(this.Ha)||s(this.color),this.T=10,this.s=2,this.fb=0,this.Xa=.26,this.Mb=7,this.Pb=1/0,this.Db=this.$b=!1,Fb(this,1),this.oa=this.pa=this.H=0,this.hb=1,this.ea=y(),this.S=y(),this.max=y(window.kb),this.B=[,,,,,,,,,,],this.L=-1,this.W=this.A=null,Eb(this,this.Oa=new m({l:9})),this.Oa.ma=y(0,1.2),this.cb(),Eb(this,this.Ja=new uc(y(),0,0,0,0,k,void 0,void 0,new w(1,.2,.2),new w(.5,.1,.1),new w(.4,.1,.1),new w(.4,.2,.2,.3),5,.2,.1,.07,.1,.95,.95,1,k,.01,.2,1),y(),0),this.Ja.F=.5}cb(t){this.Oa.aa=y(t?1:0),t&&(this.Oa.l={estrous:9,fear:10,anger:11,dead:12}[t])}ud(){var t,i;this.C()?this.Pa="dead":(t=-1*this.P.get(),i=-1*this.Bb.get(),this.Pa=0<t&&i<t?"estrous":0<i?"fear":null),this.cb(this.Pa)}wa(i,s){return(i=super.wa(i,s))<=0?0:(d("hit",this.g),s&&s.g&&(this.h=this.h.add(this.g.u(s.g).scale(t(.4,.8)))),this.nb(),this.na.time=void 0,i)}nb(){this.Ia.active()||(this.Ia.set(this.C()?.5:.2),this.Ja.xa=100)}lc(){this.Ia.active()||(this.Ja.xa=0)}zc(s){var t=this.B.findIndex((t,i)=>t&&t.name===s&&(t.j||0)<(t.stack||0)&&0<i);return-1!==t?t:this.B.findIndex((t,i)=>!t&&0<i)}Cb(i){var t=this.B.findIndex(t=>t&&t.name===i);return t<0?null:this.B[t]}R(){return this.B[this.L]}Rb(t,i=1){var s;if("number"!=typeof s&&(s=this.zc(t.name)),!(!t||s<1||9<s)){var a=this.B[s];if(a&&a.name===t.name){if((t=(a.j||0)+i)>=(a.stack||0))return;a.j=t}else this.B[s]={...t,j:i};d("pickup",this.g)}}throw(t){if(t<1||9<t)return 0;const i=this.B[t];var s;return i?(s=1<=i.j?1:0,i.j-=s,i.j||(this.B[t]=null),this.Tb(),s&&this.m.G(i.name,this.g,3),s):0}td(t){this.zb(this.L===t?-1:t)}Tb(){this.zb(this.L)}zb(t){var i;t<-1||9<t||(i=this.B[t],this.A&&this.A.la(),i&&i.j?(this.L=t,"Butcher knife"===i.name&&g.O(1),Eb(this,this.A=new A({J:{...i},m:this.m},y(-.2,.2))),i.j||(this.A.aa=y())):this.L=-1)}Gc(){var t=this.R();return t&&t.weight||0}Jb(){var t=this.R();if(t)return t.mb||0}attack(){d("attack",this.g)}Hb(t=[],a){let h;return t.reduce((t,i)=>{var s=wa(i.g,a)**.5;return s<t?(h=i,s):t},1/0),h}yc(t=this.g){var i=this.m.X.filter(t=>!t.C()&&t!==this);const s=this.A;return i=i.filter(t=>ka(t.g,t.size,s.g,s.size)),this.Hb(i,t)}xc(t=this.g){var i=this.R();(t=this.yc(t))&&i.j?(this.La(i,!0),t.s+=1,t.P.set(10),d("craft",this.g)):d("dud",this.g)}sb(t){const i=this.R();"wine"===t?"Blood"!==i.name||i.j<9?d("dud",this.g):(i.j-=9,g.O(3),this.m.G("Blood wine",this.g,2),d("craft")):"meal"===t&&("Meat"!==i.name||i.j<13?d("dud",this.g):(i.j-=13,this.m.G("Meal",this.g,2),d("craft",this.g)))}Ka(){const t=this.m,i=this.Ta(),s=29!==t.Fb(i).l;if(s){var a=this.Cb("Stone");if(!this.La(a,!0))return void d("dud")}d("attack"),s||t.G("Stone",i,1),t.Wb(i,s?{l:29,ta:!0}:{l:4,ta:!1})}Ma(){const t=this.m,i=this.Ta();var s=25===(s=t.Fb(i)).l||26===s.l;d("attack"),s&&t.G("Stone",i,2,la(1,3)),t.Wb(i,{l:4,ta:!1})}La(t,i){return!t||t.j<=0?0:(--t.j,t.jb&&(this.s+=1,this.H=Math.round(Math.max(1,this.H-(t.jb||0)-this.H/10))),this.Tb(),"Meal"===t.name&&g.O(6),i||d("consume",this.g),1)}Aa(){this.Nb.active()||(this.Nb.set(1),this.h=this.h.add(qa(y(),this.facing,.5)))}Ta(){return this.A?this.m.ib(this.A.g.add(qa(y(),this.facing,.7))).add(y(.5,.5)):null}action(t){if(!this.qa.active()){var i=this.R();if(this.qa.set(.25),i)return i.Aa&&this.Aa(i.Aa),i.ha?this.attack():i.mb?this.xc(t):("Blood"===i.name&&this.sb("wine"),"Meat"===i.name&&this.sb("meal"),void(i.Ka?this.Ka():i.Ma?this.Ma():i.rb&&this.La(i)))}}kd(){this.$a.active()||(this.$a.set(t(2,20)),this.W=(wa(this.g,this.m.Y)**.5>this.m.size.x/3?this.m.Y:this.g).add(y(t(-10,10),t(-10,10))),this.hb=t(1))}Vc(){var t;this.na.active()||(t=this.Yc(),this.P.active()?this.Xc():t||this.Wc())}Yc(){var i,s;return!this.$b||!(i=this.m.X.find(t=>t.md&&!t.C()&&!t.Jb()&&t!==this))||(s=wa(i.g,this.g)**.5)>this.Mb?0:(this.na.set((s=s<6)?.5:t(.5,2)),this.Bb.set(1),s&&(i=this.g.u(i.g).normalize(7),this.Va(this.g.add(i))),s)}Va(t=null,i){i&&this.$a.set(60),this.W=t,this.hb=1}Wc(){var i,s;this.Db&&(i=this.Ra())&&!((s=wa(i.g,this.g)**.5)>this.Mb||4<s)&&i.R()&&i.Jb()&&i.A&&(this.W=i.A.g.add(qa(y(),t(2*k),t(1,2))))}Xc(){var t;this.P.active()&&(this.na.set(1),(t=this.m.X.filter(t=>!t.C()&&t.P.active()&&t!==this)).length&&(t=this.Hb(t,this.g))&&(ka(t.g,t.size,this.g,this.size)?this.cd(t):this.W=t.g))}cd(t){this.na.set(5),t.P.time=void 0,this.P.time=void 0,g.O(4),this.m.Ob(this.g,[this.species,t.species])}Ic(){this.lb.active()||(this.lb.set(4),this.H+=1,this.Nc()&&this.wa(1,this))}Nc(){return this.H>this.Pb}Uc(){var t,i,s,a;this.C()||((i=(t=this.S.D()).x||t.y)&&this.Va(null,!0),this.Vc(),this.kd(),s=-.04,a=this.ea.D(),i?(this.ac.active()||(d("walk",this.g),this.ac.set(.21)),a=t,s=.03):this.W&&(t=wa(this.g,this.W)**.5,a=this.W.u(this.g),s=t<3?-.03:.03),this.fb=Math.min(1,Math.max(0,this.fb+s)),t=this.Xa*this.hb*(1-this.Gc())*this.fb,a=xa(a.normalize(t),this.Xa),this.ea=this.ea.da(a,.08),a=this.h.x,i=this.h.y,this.h=y(t<a||a<-t?a:this.ea.x,t<i||i<-t?i:this.ea.y),a=this.h.length(),this.pa+=3.5*this.ea.length(),this.pa%=1e4,this.oa+=.5*a,this.oa=.01<a?(this.oa%1+1)%1:0,0!==a&&(this.facing=this.h.angle()),this.Ic())}update(){this.ud(),this.Uc(),this.lc();const t=y(.9999);0===this.S.x&&(t.x=.9),0===this.S.y&&(t.y=.9),this.h=this.h.multiply(t),super.update()}fa(){var t=this.A;t&&t.Da&&Ob(this.Ta(),t.size,new w(.5,1,1,.2));const i=this.g.add(y(0,.05*Math.sin(this.oa*k)));[[1,.2],[.9,.1]].forEach(t=>Ob(i.add(y(0,.75*-this.size.y)),y(this.size.x*t[0],t[1]),new w(0,0,0,.1),this.angle)),h(kb,i,this.species,this.direction,this.pa)}}class p extends v{constructor(t){super(t),this.Pc=!0,this.s=5,this.Xa=.25,this.T=10,this.H=18,this.Pb=100}update(){Wb(2)&&this.Va(ob,!0),[48,49,50,51,52,53,54,55,56,57].forEach(t=>{P[0]&&2&P[0][t]&&this.td(t-48)}),(Wb(81)||Wb(90)||Zb(1))&&this.throw(this.L),(Wb(69)||Wb(88)||Wb(0)||Zb(0))&&this.action(ob),((this.S=Yb?ac[0]&&ac[0][0]||y():y(Wb(39)-Wb(37),Wb(38)-Wb(40)))&&this.S.x||this.S.y)&&g.O(0),this.md=!0,super.update(),this.vd()}vd(){const t=this.A;var i,s;t&&(i=this.R())&&(s=this.qa.active()?1.1:.8,t.aa=y(i.j?this.qa.active()?1.2:1:0),t.ma=qa(y(),this.facing,s),s=y(),0===this.direction?s=y(.35,-.1):1===this.direction?s=y(.2,-.2):7===this.direction&&(s=y(-.2,-.1)),t.ma=t.ma.add(s),t.Lb=this.facing+1.2*k+(i.Wa||0),t.T=t.g.y<this.g.y?11:9)}}class Y extends v{constructor(t){super(t),this.Db=this.$b=!0}la(){d("hit",this.g),this.s=0,this.nb(),this.cb("dead"),setTimeout(()=>this.m.G("Meat",this.g,1),500),setTimeout(()=>super.la(),4e3)}update(){super.update();const t=this.Ra(),i=t?t.A:null;!this.C()&&i&&i.J.ha&&ka(this.g,this.size,i.g,i.size)&&(g.O(2),this.wa(i.J.ha,i)&&t.Rb({...this.m.Gb("Blood")},la(1,3)))}}class A extends m{constructor(t){super(t),this.J=t.J,this.Da=t.J.Da,this.l=this.J.l,this.Ab=new B}update(){super.update();const t=this.Ra();this.C()?(this.aa=y(1-Ca(this.Ab)),t&&(this.g=this.g.da(t.g,.1))):t&&ka(this.g,this.size,t.g,t.size)&&(t.Rb(this.J,this.J.j||1),this.s=0,this.Ab.set(.4),setTimeout(()=>this.la(),400))}}class Z extends m{constructor(t){super(t),this.bb=new B,this.Za=new B,Fb(this,0),this.l=1,this.Ya=this.g.D()}update(){var i;super.update(),this.bb.active()||(i=wa(this.g,this.Ya)**.5,this.Za.active()?1<i?(this.h=this.h.da(this.Ya.u(this.g),.9),this.h=xa(this.h,4)):(this.h=this.h.scale(.1),this.bb.set(10),this.Za.time=void 0):.2<t()?(this.m.N&&this.m.G("Herb",this.g,1),this.bb.set(10)):(this.Ya=this.m.Ib(),this.Za.set(5)))}}const q=la(9999),W=[1,2,27,3,28,4],D=t=>(t=1e4*Math.sin(t))-Math.floor(t);class C{constructor(t){this.size=y(200,200),this.Y=this.size.scale(.5),this.key=C.getKey(t),this.g=t,this.seed=Math.round(1e5*D(1e4*t.y+t.x+q)),this.rc=this.Cc(),this.sd=this.Dc(),this.tb={}}static getKey(t){return t.x+","+t.y}Cc(){var i=[];va=this.seed;for(let t=999;t--;){var s=i,a=s.push;va=(va=(va^=va<<13)^va>>>17)^va<<5,a.call(s,1+-1*ba(va%1e9)/1e9)}return i}ja(t){return this.rc[t%999]}Ec(t){return y(200*this.ja(t),200*this.ja(t+1))}Fc(t,i=1,s=0){return s+(i-s)*this.ja(t)}za(t,i=1,s=0){return 0|this.Fc(t,i,s)}Dc(){const i=[{g:y(100,100),Yb:0,weight:1}];for(let t=200;t--;){var s=4*t;i.push({g:this.Ec(s),Yb:this.za(3+s,W.length),weight:.2+.8*this.ja(4+s)})}return i}Zc(t){const i=this.size.x,s=this.size.y,a=y();for(a.x=i;a.x--;)for(a.y=s;a.y--;)t(a,a.x+a.y*i)}Hc(a){let h;return this.sd.reduce((t,i)=>{var s=wa(i.g,a)**.5*i.weight;return s<t?(h=i.Yb,s):t},1/0),h}Eb(t){var i,s,a,h,e;return(i=this.tb[C.getKey(t)])?{...i}:(i=Math.round(999*D(t.x+200*t.y)),s=this.ja(i),a=this.Hc(t),t=(e=((h=28===(a=W[a]))?.975:.991)<s)&&(h||wa(t,this.Y)**.5>200/3.5),s<.1?a=1:s<.2?a+=this.za(++i,-1,1):s<.4&&(a=this.za(++i,1,5)),{l:a=t?25+this.za(++i,2):a,color:t=e&&!t?ra():void 0,ta:e})}qc(t,i={}){this.tb[C.getKey(t)]=i}}class G{constructor(){this.size=y(200,200),this.Y=this.size.scale(.5),this.items=[],this.X=[],this.pd=[],this.Qc=[{name:"Meat",l:7,j:1,stack:64,I:"🍖"},{name:"Blood",l:6,j:1,stack:64,I:"🩸"},{name:"Butcher knife",type:"w",l:5,j:1,stack:8,ha:1,Aa:1,I:"🔪"},{name:"Herb",l:8,j:1,stack:64,mb:1,I:"🌿",bc:-.6,Wa:k/2},{name:"Blood wine",l:13,j:1,stack:64,jb:10,rb:1,I:"🍷"},{name:"Meal",l:14,j:1,stack:8,jb:1,rb:1,I:"🍲"},{name:"Hammer",l:17,j:1,stack:8,Ka:1,weight:.5,Da:1,I:"🔨",Wa:k},{name:"Pickaxe",l:15,j:1,stack:8,Ma:1,weight:.5,Da:1,I:"⛏️",Wa:k},{name:"Stone",l:19,j:1,stack:64,I:"🧱"}],this.Zb=[],this.ob=y(),this.pb={},this.N=0,this.ka}ad(){this.N=new p({g:this.Y.D(),m:this}),this.X.push(this.N)}Gb(i){return this.Qc.find(t=>t.name===i)}Ib(){return y(t(this.size.x),t(this.size.y))}G(i,s,a=0,h=1){var e="string"==typeof i?this.Gb(i):i;for(e||console.error("Cannot make item",i),i=h;i--;)h=a?s.add(y(t(-a,a),t(-a,a))):s.D(),this.items.push(new A({J:e,g:h,s:1,m:this,angle:(e.bc||0)+t(-.2,.2)}))}Ob(t,i){this.X.push(new Y({l:0,g:t,m:this,Ha:i}))}bd(){this.pd.push(new Z({g:this.Ib(),m:this}))}$c(){var t=new C(this.ob);return this.pb[t.key]=t}Ua(){var t=C.getKey(this.ob);return this.pb[t]||this.$c()}ib(t){return y(Math.floor(t.x),Math.floor(t.y))}Fb(t){return this.Ua().Eb(this.ib(t))}Wb(t,i){t=this.ib(t),qc(this.ka),this.Vb(t,i,!0),i=this.ka,xb(1),[K,kb,F,H]=i.Ub}Vb(t,i={},s){var a=i.l,h=i.color,e=i.ta;this.Ua().qc(t,i),e?mc(t,1):s&&mc(t,0),this.ka.setData(t,new nc(a,la(4),la(2),h),s)}Mc(){var i=this.size;const s=this.Ua();let a;for(a=20;a--;)for(let i=2;i--;)this.Ob(y(t(200),t(200)));const h=i=>this.Y.add(qa(y(),t(2*k),i));this.G("Butcher knife",h(9)),this.G("Pickaxe",h(34)),this.G("Hammer",h(35)),[20,21,100,t(20,100)].forEach(t=>this.G("Herb",h(t))),this.bd(),lc(i.D()),this.ka=new rc(i),i=new rc(i),s.Zc(t=>{this.Vb(t,s.Eb(t))}),this.Zb=[this.ka,i],this.Zb.forEach(s=>{qc(s,1);for(let i=s.size.x;i--;)for(let t=s.size.y;t--;)oc(s,y(i,t));xb(1),[K,kb,F,H]=s.Ub})}update(){const s=this.N;if(s){let t,i;s.g.x>this.size.x?t=0:s.g.x<0&&(t=this.size.x),s.g.y>this.size.y?i=0:s.g.y<0&&(i=this.size.y),void 0!==t&&(s.g.x=t,F=s.g),void 0!==i&&(s.g.y=i,F=s.g)}}}const E=window.kb||24;let S,N=0,T=la;const I=(t,i,s,a,h,e=E,n=E)=>{S.fillStyle="#"+t+i+s,S.fillRect(a,h,e,n)},O=window;let J=0;O.kb=24;let L,X;(async()=>{var s;Oa=y(24),ib(i,c,o,b,l,await new Promise(t=>{const i=new Image;i.onload=()=>t(r(document)),s?i.src=s:i.onload()}))})()}();