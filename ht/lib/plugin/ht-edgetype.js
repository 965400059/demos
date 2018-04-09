!function(p){"use strict";var K="ht",W=p[K],j=Math,D=j.max,Y=j.min,n=j.abs,f=j.atan2,k=(j.cos,j.sin,j.ceil),e=W.Default,L=e.getInternal(),v=W.List,c=L.Mat,R=L.getNodeRect,m=L.intersectionLineRect,C=e.getDistance,P=e.setEdgeType,$="left",J="right",i="top",Q="bottom",l="edge.type",_="edge.gap",N="edge.center",S="edge.extend",A=function(n,r){return R(n,r).width},q=function(t,c){return R(t,c).height},V=function(r,D){return L.getEdgeAgentPosition(r,D._40I,D.s("edge.source.position"),D.s("edge.source.offset.x"),D.s("edge.source.offset.y"),D.s("edge.source.anchor.x"),D.s("edge.source.anchor.y"))},a=function(c,M){return L.getEdgeAgentPosition(c,M._41I,M.s("edge.target.position"),M.s("edge.target.offset.x"),M.s("edge.target.offset.y"),M.s("edge.target.anchor.x"),M.s("edge.target.anchor.y"))},x=function(z,R){var G=z.s(l),Y=z.getEdgeGroup();if(Y){var T=0;if(Y.eachSiblingEdge(function(r){R.isVisible(r)&&r.s(l)==G&&T++}),T>1)return z.s(_)*(T-1)/2}return 0},X=function(P,s){var c=P.s(l),v=P.isLooped();if(!P.getEdgeGroup())return v?P.s(_):0;var A,W=0,q=0,j=0;return P.getEdgeGroup().getSiblings().each(function(X){X.each(function(C){if(C._40I===P._40I&&C.s(l)==c&&s.isVisible(C)){var K=C.s(_);A?(q+=j/2+K/2,j=K):(A=C,j=K),C===P&&(W=q)}})}),v?q-W+j:W-q/2},z=function(l,r){var A=r.s("edge.corner.radius");return e.toRoundedCorner(l,A)};L.addMethod(W.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),P("boundary",function(M,O,j,$){$||(O=-O);var Q,G=V(j,M),b=a(j,M),r=R(j,M._40I),F=R(j,M._41I),T=new c(f(b.y-G.y,b.x-G.x)),e=C(G,b),E=G.x,w=G.y;return Q=T.tf(0,O),G={x:Q.x+E,y:Q.y+w},Q=T.tf(e,O),b={x:Q.x+E,y:Q.y+w},Q=m(G,b,r),Q&&(G={x:Q[0],y:Q[1]}),Q=m(G,b,F),Q&&(b={x:Q[0],y:Q[1]}),{points:new v([G,b])}}),P("ripple",function(B,m,e,L){L||(m=-m);var S=V(e,B),A=a(e,B),o=C(S,A),M=Y(B.s("edge.offset"),o/2),O=B.s("edge.ripple.size"),y=B.s("edge.ripple.length"),E=B.s("edge.ripple.both"),d=B.s(N),Q=B.s("edge.ripple.elevation"),Z=new v,J=B.s("edge.ripple.straight")?null:new v,t=new c(f(A.y-S.y,A.x-S.x));L||(Q=-Q),o-=2*M,y>0&&(O=k(o/y));var U=o/O;J&&J.add(1);for(var R=0;O>R;R++)J&&J.add(3),0===R?Z.add({x:M+U*R,y:d?0:m}):Z.add({x:M+U*R,y:m}),Z.add({x:M+U*R+U/2,y:Q+m}),E&&(Q=-Q);for(Z.add({x:M+o,y:d?0:m}),R=0;R<Z.size();R++){var j=t.tf(Z.get(R));j.x+=S.x,j.y+=S.y,Z.set(R,j)}return{points:Z,segments:J}}),P("h.v",function(O,U,y){U=X(O,y);var f=new v,Y=O.s(N),s=V(y,O),w=s.x,n=s.y,u=a(y,O),R=u.x,L=u.y,_=0,Q=0,P=R-w,G=L-n;return Y||(_=A(y,O._40I)/2,Q=q(y,O._41I)/2),P>=0&&0>=G?(f.add({x:w+_,y:n+U}),f.add({x:R+U,y:n+U}),f.add({x:R+U,y:L+Q})):0>=P&&G>=0?(f.add({x:w-_,y:n+U}),f.add({x:R+U,y:n+U}),f.add({x:R+U,y:L-Q})):P>=0&&G>=0?(f.add({x:w+_,y:n+U}),f.add({x:R-U,y:n+U}),f.add({x:R-U,y:L-Q})):(f.add({x:w-_,y:n+U}),f.add({x:R-U,y:n+U}),f.add({x:R-U,y:L+Q})),z(f,O)}),P("v.h",function(W,g,o){g=X(W,o);var _=new v,w=W.s(N),P=V(o,W),O=P.x,L=P.y,l=a(o,W),F=l.x,C=l.y,m=0,d=0,u=F-O,Z=C-L;return w||(m=A(o,W._41I)/2,d=q(o,W._40I)/2),u>=0&&0>=Z?(_.add({x:O+g,y:L-d}),_.add({x:O+g,y:C+g}),_.add({x:F-m,y:C+g})):0>=u&&Z>=0?(_.add({x:O+g,y:L+d}),_.add({x:O+g,y:C+g}),_.add({x:F+m,y:C+g})):u>=0&&Z>=0?(_.add({x:O-g,y:L+d}),_.add({x:O-g,y:C+g}),_.add({x:F-m,y:C+g})):(_.add({x:O-g,y:L-d}),_.add({x:O-g,y:C+g}),_.add({x:F+m,y:C+g})),z(_,W)}),P("ortho",function(e,I,$){var w=new v,M=e.s(N),D=e.s("edge.ortho"),B=e._40I,u=e._41I,Y=V($,e),W=Y.x,Z=Y.y,c=a($,e),b=c.x,f=c.y,x=b-W,L=f-Z,R=M?0:A($,B)/2,s=M?0:q($,B)/2,T=M?0:A($,u)/2,H=M?0:q($,u)/2,Q=(x-(R+T)*(x>0?1:-1))*D,t=(L-(s+H)*(L>0?1:-1))*D;return n(x)<n(L)?x>=0&&0>=L?(w.add({x:W+I,y:Z-s}),w.add({x:W+I,y:Z+t+I-s}),w.add({x:b+I,y:Z+t+I-s}),w.add({x:b+I,y:f+H})):0>=x&&L>=0?(w.add({x:W+I,y:Z+s}),w.add({x:W+I,y:Z+t+I+s}),w.add({x:b+I,y:Z+t+I+s}),w.add({x:b+I,y:f-H})):x>=0&&L>=0?(w.add({x:W+I,y:Z+s}),w.add({x:W+I,y:Z+t-I+s}),w.add({x:b+I,y:Z+t-I+s}),w.add({x:b+I,y:f-H})):(w.add({x:W+I,y:Z-s}),w.add({x:W+I,y:Z+t-I-s}),w.add({x:b+I,y:Z+t-I-s}),w.add({x:b+I,y:f+H})):x>=0&&0>=L?(w.add({x:W+R,y:Z+I}),w.add({x:W+Q+I+R,y:Z+I}),w.add({x:W+Q+I+R,y:f+I}),w.add({x:b-T,y:f+I})):0>=x&&L>=0?(w.add({x:W-R,y:Z+I}),w.add({x:W+Q+I-R,y:Z+I}),w.add({x:W+Q+I-R,y:f+I}),w.add({x:b+T,y:f+I})):x>=0&&L>=0?(w.add({x:W+R,y:Z+I}),w.add({x:W+Q-I+R,y:Z+I}),w.add({x:W+Q-I+R,y:f+I}),w.add({x:b-T,y:f+I})):(w.add({x:W-R,y:Z+I}),w.add({x:W+Q-I-R,y:Z+I}),w.add({x:W+Q-I-R,y:f+I}),w.add({x:b+T,y:f+I})),z(w,e)}),P("flex",function(X,f,i){var I=new v,m=X.s("edge.flex")+x(X,i),w=X.s(N),l=X._40I,S=X._41I,C=V(i,X),Q=C.x,D=C.y,T=a(i,X),H=T.x,h=T.y,y=H-Q,U=h-D,R=w?0:A(i,l)/2,d=w?0:q(i,l)/2,P=w?0:A(i,S)/2,B=w?0:q(i,S)/2,t=y>0?m:-m,J=U>0?m:-m;return n(y)<n(U)?y>=0&&0>=U?(I.add({x:Q+f,y:D-d}),I.add({x:Q+f,y:D+J+f-d}),I.add({x:H+f,y:h-J+f+B}),I.add({x:H+f,y:h+B})):0>=y&&U>=0?(I.add({x:Q+f,y:D+d}),I.add({x:Q+f,y:D+J+f+d}),I.add({x:H+f,y:h-J+f-B}),I.add({x:H+f,y:h-B})):y>=0&&U>=0?(I.add({x:Q+f,y:D+d}),I.add({x:Q+f,y:D+J-f+d}),I.add({x:H+f,y:h-J-f-B}),I.add({x:H+f,y:h-B})):(I.add({x:Q+f,y:D-d}),I.add({x:Q+f,y:D+J-f-d}),I.add({x:H+f,y:h-J-f+B}),I.add({x:H+f,y:h+B})):y>=0&&0>=U?(I.add({x:Q+R,y:D+f}),I.add({x:Q+t+f+R,y:D+f}),I.add({x:H-t+f-P,y:h+f}),I.add({x:H-P,y:h+f})):0>=y&&U>=0?(I.add({x:Q-R,y:D+f}),I.add({x:Q+t+f-R,y:D+f}),I.add({x:H-t+f+P,y:h+f}),I.add({x:H+P,y:h+f})):y>=0&&U>=0?(I.add({x:Q+R,y:D+f}),I.add({x:Q+t-f+R,y:D+f}),I.add({x:H-t-f-P,y:h+f}),I.add({x:H-P,y:h+f})):(I.add({x:Q-R,y:D+f}),I.add({x:Q+t-f-R,y:D+f}),I.add({x:H-t-f+P,y:h+f}),I.add({x:H+P,y:h+f})),z(I,X)}),P("extend.east",function(B,I,c){var f=new v,C=B.s(S)+x(B,c),q=B.s(N),$=V(c,B),J=$.x+(q?0:A(c,B._40I)/2),h=$.y,p=a(c,B),K=p.x+(q?0:A(c,B._41I)/2),k=p.y,G=D(J,K)+C;return h>k?(f.add({x:J,y:h+I}),f.add({x:G+I,y:h+I}),f.add({x:G+I,y:k-I}),f.add({x:K,y:k-I})):(f.add({x:J,y:h-I}),f.add({x:G+I,y:h-I}),f.add({x:G+I,y:k+I}),f.add({x:K,y:k+I})),z(f,B)}),P("extend.west",function(s,Z,m){var f=new v,p=s.s(S)+x(s,m),_=s.s(N),O=V(m,s),q=O.x-(_?0:A(m,s._40I)/2),E=O.y,Q=a(m,s),n=Q.x-(_?0:A(m,s._41I)/2),X=Q.y,g=Y(q,n)-p;return E>X?(f.add({x:q,y:E+Z}),f.add({x:g-Z,y:E+Z}),f.add({x:g-Z,y:X-Z}),f.add({x:n,y:X-Z})):(f.add({x:q,y:E-Z}),f.add({x:g-Z,y:E-Z}),f.add({x:g-Z,y:X+Z}),f.add({x:n,y:X+Z})),z(f,s)}),P("extend.north",function(j,O,K){var J=new v,g=j.s(S)+x(j,K),w=j.s(N),f=V(K,j),h=f.x,R=f.y-(w?0:q(K,j._40I)/2),C=a(K,j),E=C.x,Q=C.y-(w?0:q(K,j._41I)/2),b=Y(R,Q)-g;return h>E?(J.add({y:R,x:h+O}),J.add({y:b-O,x:h+O}),J.add({y:b-O,x:E-O}),J.add({y:Q,x:E-O})):(J.add({y:R,x:h-O}),J.add({y:b-O,x:h-O}),J.add({y:b-O,x:E+O}),J.add({y:Q,x:E+O})),z(J,j)}),P("extend.south",function($,s,F){var L=new v,d=$.s(S)+x($,F),n=$.s(N),T=V(F,$),f=T.x,r=T.y+(n?0:q(F,$._40I)/2),t=a(F,$),I=t.x,H=t.y+(n?0:q(F,$._41I)/2),X=D(r,H)+d;return f>I?(L.add({y:r,x:f+s}),L.add({y:X+s,x:f+s}),L.add({y:X+s,x:I-s}),L.add({y:H,x:I-s})):(L.add({y:r,x:f-s}),L.add({y:X+s,x:f-s}),L.add({y:X+s,x:I+s}),L.add({y:H,x:I+s})),z(L,$)});var g=function(H,y,j,u,h){if(u.sort(function(t,P){var p=t.getSourceAgent()===y?t.getTargetAgent():t.getSourceAgent(),m=P.getSourceAgent()===y?P.getTargetAgent():P.getSourceAgent(),B=p.p(),F=m.p();if(j===$||j===J){if(B.y>F.y)return 1;if(B.y<F.y)return-1}else{if(B.x>F.x)return 1;if(B.x<F.x)return-1}return e.sortFunc(t.getId(),P.getId())}),h){for(var X,p,q,V=H.getSourceAgent(),E=H.getTargetAgent(),S=0;S<u.size();S++){var F=u.get(S);F.getSourceAgent()===V&&F.getTargetAgent()===E||F.getTargetAgent()===V&&F.getSourceAgent()===E?(p||(p=new v),p.add(F,0)):p?(q||(q=new v),q.add(F)):(X||(X=new v),X.add(F))}u.clear(),X&&u.addAll(X),p&&u.addAll(p),q&&u.addAll(q)}var O=u.indexOf(H),U=u.size(),a=H.s(_);return{side:j,index:O,size:U,offset:-a*(U-1)/2+a*O}},M=function(O,N,V,R,v){var k=N.s(l);return g(N,V,R,V.getAgentEdges().toList(function(b){return O.isVisible(b)&&b.s(l)===k}),v)},G=function(W,T){var d=W.getSourceAgent()===T?W.getTargetAgent():W.getSourceAgent(),q=T.p(),P=d.p(),G=P.x-q.x,p=P.y-q.y;return G>0&&n(p)<=G?J:0>G&&n(p)<=-G?$:p>0&&n(G)<=p?Q:i},H=function(c,M,u){var K=M.s(l),J=G(M,u);return g(M,u,J,u.getAgentEdges().toList(function(n){return c.isVisible(n)&&n.s(l)===K&&G(n,u)===J}))},T=function(C,X){var U=C.getSourceAgent()===X,z=U?C.getTargetAgent():C.getSourceAgent(),j=X.p(),N=z.p();return U?j.y>N.y?i:Q:j.x<N.x?J:$},h=function(b,r,o){var C=r.s(l),a=T(r,o);return g(r,o,a,o.getAgentEdges().toList(function(Q){return b.isVisible(Q)&&Q.s(l)===C&&T(Q,o)===a}),a===J||a===Q)},y=function(s,Z){var T=s.getSourceAgent()===Z,S=T?s.getTargetAgent():s.getSourceAgent(),d=Z.p(),C=S.p();return T?d.x<C.x?J:$:d.y>C.y?i:Q},O=function(h,D,M){var z=D.s(l),e=y(D,M);return g(D,M,e,M.getAgentEdges().toList(function(W){return h.isVisible(W)&&W.s(l)===z&&y(W,M)===e}),e===J||e===Q)},w=function(I,p,R){var j=I.getSourceAgent(),M=I.getTargetAgent(),k=j.getId()>M.getId(),G=k?M:j,m=k?j:M,u=G.p(),B=m.p(),o=R(p,I,G),w=R(p,I,m),V=I.s(N),U=V?0:A(p,G)/2,d=V?0:A(p,m)/2,F=V?0:q(p,G)/2,Z=V?0:q(p,m)/2,n=o.offset,t=w.offset,E=o.side,h=w.side,X=new v;return E===i?(X.add({x:u.x+n,y:u.y-F}),X.add({x:u.x+n,y:B.y+t}),h===$?X.add({x:B.x-d,y:B.y+t}):X.add({x:B.x+d,y:B.y+t})):E===Q?(X.add({x:u.x+n,y:u.y+F}),X.add({x:u.x+n,y:B.y+t}),h===$?X.add({x:B.x-d,y:B.y+t}):X.add({x:B.x+d,y:B.y+t})):E===$?(X.add({x:u.x-U,y:u.y+n}),X.add({x:B.x+t,y:u.y+n}),h===Q?X.add({x:B.x+t,y:B.y+Z}):X.add({x:B.x+t,y:B.y-Z})):E===J&&(X.add({x:u.x+U,y:u.y+n}),X.add({x:B.x+t,y:u.y+n}),h===Q?X.add({x:B.x+t,y:B.y+Z}):X.add({x:B.x+t,y:B.y-Z})),k&&X.reverse(),z(X,I)};P("ortho2",function(d,e,m){var S,x,h=d.s(N),k=d.s("edge.ortho"),C=d.getSourceAgent(),D=d.getTargetAgent(),u=C.getId()>D.getId(),j=u?D:C,Z=u?C:D,E=j.p(),f=Z.p(),B=H(m,d,j),l=H(m,d,Z),G=h?0:A(m,j)/2,w=h?0:q(m,j)/2,t=h?0:A(m,Z)/2,O=h?0:q(m,Z)/2,y=new v,p=B.offset,n=l.offset,g=B.side;return g===J?(S=f.y>E.y?-p:p,x=E.x+G+(f.x-t-E.x-G)*k,y.add({x:E.x+G,y:E.y+p}),y.add({x:x+S,y:E.y+p}),y.add({x:x+S,y:f.y+n}),y.add({x:f.x-t,y:f.y+n})):g===$?(S=f.y>E.y?-p:p,x=E.x-G-(E.x-G-f.x-t)*k,y.add({x:E.x-G,y:E.y+p}),y.add({x:x-S,y:E.y+p}),y.add({x:x-S,y:f.y+n}),y.add({x:f.x+t,y:f.y+n})):g===Q?(S=f.x>E.x?-p:p,x=E.y+w+(f.y-O-E.y-w)*k,y.add({x:E.x+p,y:E.y+w}),y.add({x:E.x+p,y:x+S}),y.add({x:f.x+n,y:x+S}),y.add({x:f.x+n,y:f.y-O})):g===i&&(S=f.x>E.x?-p:p,x=E.y-w-(E.y-w-f.y-O)*k,y.add({x:E.x+p,y:E.y-w}),y.add({x:E.x+p,y:x-S}),y.add({x:f.x+n,y:x-S}),y.add({x:f.x+n,y:f.y+O})),u&&y.reverse(),z(y,d)},!0),P("flex2",function(P,I,V){var h,G=P.getSourceAgent(),M=P.getTargetAgent(),B=G.getId()>M.getId(),d=B?M:G,Z=B?G:M,D=d.p(),S=Z.p(),W=H(V,P,d),f=H(V,P,Z),o=P.s(N),F=P.s("edge.flex")+(W.size-1)/2*P.s(_),T=o?0:A(V,d)/2,U=o?0:q(V,d)/2,C=o?0:A(V,Z)/2,E=o?0:q(V,Z)/2,j=new v,g=W.offset,y=f.offset,X=W.side;return X===J?(h=S.y>D.y?-g:g,j.add({x:D.x+T,y:D.y+g}),j.add({x:D.x+T+F+h,y:D.y+g}),j.add({x:S.x-C-F+h,y:S.y+y}),j.add({x:S.x-C,y:S.y+y})):X===$?(h=S.y>D.y?-g:g,j.add({x:D.x-T,y:D.y+g}),j.add({x:D.x-T-F-h,y:D.y+g}),j.add({x:S.x+C+F-h,y:S.y+y}),j.add({x:S.x+C,y:S.y+y})):X===Q?(h=S.x>D.x?-g:g,j.add({x:D.x+g,y:D.y+U}),j.add({x:D.x+g,y:D.y+U+F+h}),j.add({x:S.x+y,y:S.y-E-F+h}),j.add({x:S.x+y,y:S.y-E})):X===i&&(h=S.x>D.x?-g:g,j.add({x:D.x+g,y:D.y-U}),j.add({x:D.x+g,y:D.y-U-F-h}),j.add({x:S.x+y,y:S.y+E+F-h}),j.add({x:S.x+y,y:S.y+E})),B&&j.reverse(),z(j,P)},!0),P("extend.north2",function(O,m,g){var V=O.getSourceAgent(),a=O.getTargetAgent(),Z=V.getId()>a.getId(),w=Z?a:V,B=Z?V:a,d=w.p(),C=B.p(),L=M(g,O,w,i),W=M(g,O,B,i,!0),l=O.s(N),b=l?0:q(g,w)/2,D=l?0:q(g,B)/2,u=L.offset,k=W.offset,R=O.s(S)+(L.size-1)/2*O.s(_),r=Y(d.y-b,C.y-D)-R+(d.x<C.x?u:-u),K=new v;return K.add({x:d.x+u,y:d.y-b}),K.add({x:d.x+u,y:r}),K.add({x:C.x+k,y:r}),K.add({x:C.x+k,y:C.y-D}),Z&&K.reverse(),z(K,O)},!0),P("extend.south2",function(U,s,W){var G=U.getSourceAgent(),A=U.getTargetAgent(),m=G.getId()>A.getId(),Z=m?A:G,b=m?G:A,L=Z.p(),C=b.p(),h=M(W,U,Z,Q),d=M(W,U,b,Q,!0),H=U.s(N),E=H?0:q(W,Z)/2,k=H?0:q(W,b)/2,e=h.offset,i=d.offset,o=U.s(S)+(h.size-1)/2*U.s(_),y=D(L.y+E,C.y+k)+o+(L.x>C.x?e:-e),f=new v;return f.add({x:L.x+e,y:L.y+E}),f.add({x:L.x+e,y:y}),f.add({x:C.x+i,y:y}),f.add({x:C.x+i,y:C.y+k}),m&&f.reverse(),z(f,U)},!0),P("extend.west2",function(E,l,j){var Z=E.getSourceAgent(),G=E.getTargetAgent(),o=Z.getId()>G.getId(),k=o?G:Z,R=o?Z:G,V=k.p(),h=R.p(),y=M(j,E,k,i),r=M(j,E,R,i,!0),T=E.s(N),f=T?0:A(j,k)/2,I=T?0:A(j,R)/2,b=y.offset,s=r.offset,x=E.s(S)+(y.size-1)/2*E.s(_),e=Y(V.x-f,h.x-I)-x+(V.y<h.y?b:-b),X=new v;return X.add({x:V.x-f,y:V.y+b}),X.add({x:e,y:V.y+b}),X.add({x:e,y:h.y+s}),X.add({x:h.x-I,y:h.y+s}),o&&X.reverse(),z(X,E)},!0),P("extend.east2",function(U,b,F){var p=U.getSourceAgent(),R=U.getTargetAgent(),g=p.getId()>R.getId(),j=g?R:p,K=g?p:R,k=j.p(),P=K.p(),m=M(F,U,j,i),H=M(F,U,K,i,!0),J=U.s(N),l=J?0:A(F,j)/2,x=J?0:A(F,K)/2,d=m.offset,L=H.offset,I=U.s(S)+(m.size-1)/2*U.s(_),y=D(k.x+l,P.x+x)+I+(k.y>P.y?d:-d),O=new v;return O.add({x:k.x+l,y:k.y+d}),O.add({x:y,y:k.y+d}),O.add({x:y,y:P.y+L}),O.add({x:P.x+x,y:P.y+L}),g&&O.reverse(),z(O,U)},!0),P("v.h2",function(L,D,W){return w(L,W,h)},!0),P("h.v2",function(K,N,U){return w(K,U,O)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);