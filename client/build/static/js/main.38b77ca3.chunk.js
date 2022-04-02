(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{147:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var c=n(32),a=n.n(c),r=n(38),i=n(8),o=n(0),s=n.n(o),A=(n(91),n(55),n(92),n(26)),u=n(39),l=n(75),d=n(20),f=n(25),b=n(13),g=n.n(b),j="SEARCH_COMICS_PENDING",m="SEARCH_COMICS_ERROR",h="SEARCH_COMICS_SUCCESS",p="GET_COMICS_PENDING",O="GET_COMICS_ERROR",I="GET_COMICS_SUCCESS",C="GET_FAVOURITE_COMICS_PENDING",v="GET_FAVOURITE_COMICS_ERROR",x="GET_FAVOURITE_COMICS_SUCCESS",E="FAVOURITE_COMIC_PENDING",y="FAVOURITE_COMIC_ERROR",k="FAVOURITE_COMIC_SUCCESS",N="UNFAVOURITE_COMIC_PENDING",S="UNFAVOURITE_COMIC_ERROR",w="UNFAVOURITE_COMIC_SUCCESS",Q=n(40),U=n(41),R=n(52),H=n.n(R),B="mrvl".toUpperCase(),D="M5Pj4m4sIMVxGzJvOEOHwWbzl5UcOKjE",W="https://mrvl.herokuapp.com/api/v1",F=function(){function e(){Object(Q.a)(this,e),this._headers={Accept:"application/json"},this._url=W}return Object(U.a)(e,[{key:"getComics",value:function(e){var t=new URL("".concat(this._url,"/comics"));if(null!==e&&"object"===typeof e&&Object.keys(e).length)for(var n in e){var c=e[n];null!==c&&t.searchParams.append(n,c)}return H.a.get(t.href,{headers:this._headers})}},{key:"getComic",value:function(e){var t=new URL("".concat(this._url,"/comics/").concat(e));return H.a.get(t.href,{headers:this._headers})}}]),e}(),V="fav-comic-ids";function M(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(f.a)(g.a.mark((function t(n){var c,a,r,i,o,s,A;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A=function(e,t){return{type:e,payload:t}},s=function(e,t){return{type:e,payload:t}},n(function(e){return{type:e}}(C)),null!==(c=localStorage.getItem(V))){t.next=10;break}return c=[],t.abrupt("return",n(A(x,{items:[]})));case 10:t.prev=10,c=JSON.parse(c),t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(10),t.abrupt("return",n(s(v,t.t0.message)));case 17:if(localStorage.setItem(V,JSON.stringify(c)),a=[],!e){t.next=43;break}r=Object(l.a)(c),t.prev=21,r.s();case 23:if((i=r.n()).done){t.next=35;break}return o=i.value,t.prev=25,t.next=28,(new F).getComic(o).then((function(e){a.push(e.data.data)})).catch((function(e){throw e}));case 28:t.next=33;break;case 30:return t.prev=30,t.t1=t.catch(25),t.abrupt("return",n(s(v,t.t1.message)));case 33:t.next=23;break;case 35:t.next=40;break;case 37:t.prev=37,t.t2=t.catch(21),r.e(t.t2);case 40:return t.prev=40,r.f(),t.finish(40);case 43:n(A(x,{ids:c,items:a}));case 44:case"end":return t.stop()}}),t,null,[[10,14],[21,37,40,43],[25,30]])})));return function(e){return t.apply(this,arguments)}}()}var J=n(6),G=n(22),K=n(53),P=n.n(K),X=n(185),Z=n(190),L=n(189),T=n(188),Y=n(187),z=n(77),q=n.n(z),_=n(78),$=n.n(_),ee=n.p+"static/media/modal-background.ebda8efe.jpg",te=(n(147),n(1));P.a.setAppElement("#root");var ne={comicModal:{content:{width:375,height:730,left:"40%",backgroundImage:"url(".concat(ee,")")}},comicModalMobile:{content:{width:320,height:700,backgroundImage:"url(".concat(ee,")")}},iconMobile:{cursor:"pointer",right:32,bottom:620,fontSize:50,position:"absolute"},icon:{cursor:"pointer",right:32,bottom:645,fontSize:50,position:"absolute"}},ce=Object(A.b)((function(e){return{favComics:e.comic.favComics}}),(function(e){return{favComic:function(t){return e(function(e){return function(){var t=Object(f.a)(g.a.mark((function t(n){var c,a,r,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=function(e,t){return{type:e,payload:t}},r=function(e,t){return{type:e,payload:t}},n({type:E}),c=[e],null===(a=localStorage.getItem(V))){t.next=15;break}t.prev=7,a=JSON.parse(a),c=[].concat(Object(d.a)(a),Object(d.a)(c)),t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(7),t.abrupt("return",n(r(y,t.t0.message)));case 15:localStorage.setItem(V,JSON.stringify(c)),n(i(k,{ids:c}));case 17:case"end":return t.stop()}}),t,null,[[7,12]])})));return function(e){return t.apply(this,arguments)}}()}(t))},unFavComic:function(t){return e(function(e){return function(){var t=Object(f.a)(g.a.mark((function t(n){var c,a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=function(e,t){return{type:e,payload:t}},a=function(e,t){return{type:e,payload:t}},n({type:N}),null!==(c=localStorage.getItem(V))){t.next=7;break}return t.abrupt("return",n(r(w,{ids:[]})));case 7:t.prev=7,c=JSON.parse(c),t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(7),t.abrupt("return",n(a(S,t.t0.message)));case 14:c=c.filter((function(t){return t!==e})),localStorage.setItem(V,JSON.stringify(c)),n(r(w,{ids:c}));case 17:case"end":return t.stop()}}),t,null,[[7,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.unFavComicCallback,n=e.fetchFavItems,c=e.favComics,a=e.unFavComic,r=e.favComic,i=e.comic,s=Object(o.useState)(!1),A=Object(G.a)(s,2),u=A[0],l=A[1],d=function(){l(!0)},f=function(){l(!1)},b=function(){r(i.id)},g=function(){a(i.id),n&&(f(),t(n))};function j(){var e=Object(J.a)(Object(J.a)({},ne.icon),{},{right:32,bottom:645,position:"absolute"});return window.innerWidth<650&&(e=Object(J.a)(Object(J.a)({},e),ne.iconMobile)),e}return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)("div",{className:"comic-thumbnail-container",children:[Object(te.jsx)("img",{onClick:d,className:"comic-thumbnail",src:i.thumbnail.path+"."+i.thumbnail.extension,alt:i.title}),Object(te.jsx)("p",{onClick:d,children:i.title})]}),Object(te.jsx)(P.a,{isOpen:u,contentLabel:"Comic Modal",shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:f,style:window.innerWidth<650?ne.comicModalMobile:ne.comicModal,onAfterOpen:function(){return console.log("opened comic",i)},children:Object(te.jsxs)(X.a,{sx:{maxWidth:345},children:[function(){var e="data:image/jpeg;base64,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";return i.images.length&&(e=i.images[0].path+"."+i.images[0].extension),Object(te.jsx)(T.a,{component:"img",height:"500",image:e,alt:i.title,className:"comic-image"})}(),c.ids.includes(i.id)?Object(te.jsx)($.a,{onClick:g,style:j(),fontSize:"large",color:"warning"}):Object(te.jsx)(q.a,{onClick:b,style:j(),fontSize:"large",color:"warning"}),Object(te.jsxs)(L.a,{children:[Object(te.jsx)(Y.a,{gutterBottom:!0,variant:"h5",component:"div",children:i.title}),Object(te.jsx)(Y.a,{variant:"body2",color:"text.secondary",children:Object(te.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description}})})]}),Object(te.jsx)(Z.a,{children:Object(te.jsx)("a",{onClick:f,className:"link-warning close-modal-btn",children:"Close"})})]})})]})})),ae=function(e){var t=e.comic,n=e.fetchFavItems,c=e.unFavComicCallback;return Object(te.jsx)(ce,{comic:t,fetchFavItems:n,unFavComicCallback:c})},re=n(79),ie=n.n(re),oe=function(){return Object(te.jsx)("div",{children:Object(te.jsx)("div",{className:"sweet-loading text-center",children:Object(te.jsx)(ie.a,{size:150,color:"#123abc",loading:!0})})})},se=Object(A.b)((function(e){return{comic:e.comic}}),(function(e){return{getFavComics:function(t){return e(M(t))}}}))((function(e){var t=e.getFavComics,n=e.comic,c=n.favComics,a=n.fetched,r=n.loading,i="Favourite Comics | ".concat(B);Object(o.useEffect)((function(){s(!0)}),[]);var s=function(e){t(e)},A=null;return A=a&&!r?Object(te.jsx)("div",{className:"container text-center",children:c.ids.length?c.items.map((function(e,t){return Object(te.jsx)(ae,{comic:e,fetchFavItems:!0,unFavComicCallback:s},t)})):Object(te.jsx)("p",{children:"No results to display your query."})}):!a&&r?Object(te.jsx)(oe,{}):Object(te.jsx)("div",{children:"Unknown error encountered"}),Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(u.a,{children:Object(te.jsx)("title",{children:i})}),A]})}));function Ae(){var e=Object(i.g)().search;return Object(o.useMemo)((function(){return new URLSearchParams(e)}),[e])}var ue=Object(i.h)((function(e){var t=e.data,n=Ae(),c=0,a=n.get("offset");a&&!isNaN(parseInt(a))&&(c=parseInt(a));var r=!1,i=!1;c<1&&(r=!0),c>t.total+c&&(i=!0);var o="";"undefined"!==typeof t.filters&&"string"===typeof t.filters&&t.filters.length&&(o+="&".concat(t.filters));return Object(te.jsx)(te.Fragment,{children:Object(te.jsx)("nav",{"aria-label":"Comic pagination",children:Object(te.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(te.jsx)("li",{onClick:function(e){r||(window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?offset=").concat(c-20).concat(o))},className:"page-item ".concat(r?"disabled":""),children:Object(te.jsx)("a",{className:"page-link",href:"#",children:"Previous"})}),Object(te.jsx)("li",{onClick:function(e){i||(window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?offset=").concat(c+20).concat(o))},className:"page-item ".concat(i?"disabled":""),children:Object(te.jsx)("a",{className:"page-link",href:"#",children:"Next"})})]})})})})),le=(n(158),Object(A.b)((function(e){return{comics:e.comics}}),(function(e){return{getComics:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(f.a)(g.a.mark((function t(n){var c,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(e,t){return{type:e,payload:t}},c=function(e,t){return{type:e,payload:t}},n({type:p}),t.next=6,(new F).getComics({offset:e}).then((function(e){n(a(I,e.data.data))})).catch((function(e){n(c(O,e))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},getFavComics:function(t){return e(M(t))}}}))((function(e){var t=e.comics,n=e.getComics,c=e.getFavComics,a=Ae(),r=0,i=a.get("offset");i&&!isNaN(parseInt(i))&&(r=parseInt(i));var s=t.data,A=t.fetched,l=t.loading,d="Home | ".concat(B);Object(o.useEffect)((function(){f(r),b()}),[]);var f=function(e){n(e)},b=function(){c()},g=null;return g=A&&!l?Object(te.jsxs)("div",{className:"container text-center",children:[Object(te.jsx)("div",{className:"content-header",children:Object(te.jsx)(ue,{data:s})}),s&&"object"===typeof s&&null!==s&&void 0!==s.results&&s.results.length?s.results.map((function(e,t){return Object(te.jsx)(ae,{comic:e},t)})):Object(te.jsx)("p",{children:"No results to display your query."}),Object(te.jsx)("div",{className:"content-footer",children:Object(te.jsx)(ue,{data:s})})]}):!A&&l?Object(te.jsx)(oe,{}):Object(te.jsx)("div",{children:"Unknown error encountered"}),Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(u.a,{children:Object(te.jsx)("title",{children:d})}),g]})}))),de=n(81),fe=n(83),be=function(e){Object(de.a)(n,e);var t=Object(fe.a)(n);function n(){var e;Object(Q.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={giphyImageUrl:null},e.getGiphyImage=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/random?api_key=".concat(D)).then((function(e){return e.json()})).then((function(e){return e.data.images.original.url})).catch((function(e){return!1}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),e}return Object(U.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGiphyImage();case 2:t=e.sent,this.setGiphyImage(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setGiphyImage",value:function(e){this.setState({giphyImageUrl:e})}},{key:"render",value:function(){var e=ge.container,t=this.state.giphyImageUrl;return null===t?Object(te.jsx)(oe,{}):Object(te.jsx)("div",{className:"container",style:e,children:Object(te.jsxs)("div",{className:"text-center",children:[Object(te.jsx)("h2",{children:"Oops, page not found"}),t?Object(te.jsx)("img",{src:t,alt:"404_image"}):Object(te.jsx)("div",{})]})})}}]),n}(s.a.Component),ge={container:{marginTop:100}},je=be,me=(n(159),function(){return Object(te.jsx)("footer",{className:"footer",children:Object(te.jsxs)("div",{className:"container text-center footer-text",children:[B," \xa9 ",2022,"\xa0",Object(te.jsx)("a",{target:"_blank",href:"https://github.com/kkamara/mrvl",children:"Github"})]})})}),he=n.p+"static/media/marvel-moving.e4ed4a95.gif",pe=(n(160),{header:{marginTop:30,marginBottom:70}}),Oe=function(){return Object(te.jsxs)("header",{className:"header",style:pe.header,children:[Object(te.jsx)("div",{className:"container text-left",children:Object(te.jsx)("img",{className:"header-img",src:he,alt:"marvel-moving.gif",onClick:function(){window.location.href="/"}})}),Object(te.jsxs)("nav",{className:"container nav-container",children:[Object(te.jsx)("a",{className:"btn btn-warning btn-lg",href:"/",children:"Home"}),Object(te.jsx)("a",{className:"btn btn-warning btn-lg",href:"/favs",children:"Favourites"}),Object(te.jsx)("a",{className:"btn btn-warning btn-lg",href:"/404",children:"404 page"})]})]})},Ie=(n(161),function(){return Object(te.jsx)("div",{id:"app",children:Object(te.jsx)(r.a,{children:Object(te.jsxs)(o.Fragment,{children:[Object(te.jsx)(Oe,{}),Object(te.jsxs)(i.d,{children:[Object(te.jsx)(i.b,{path:"/",exact:!0,component:le}),Object(te.jsx)(i.b,{path:"/favs",exact:!0,component:se}),Object(te.jsx)(i.b,{path:"/404",exact:!0,component:je}),Object(te.jsx)(i.a,{to:"/404"})]}),Object(te.jsx)(me,{})]})})})}),Ce=n(36),ve={data:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(J.a)(Object(J.a)({},e),{},{fetched:!1,loading:!1});case m:return Object(J.a)(Object(J.a)({},e),{},{fetched:!1,loading:!0,error:t.payload});case h:return Object(J.a)(Object(J.a)({},e),{},{fetched:!1,loading:!1,data:t.payload})}return e},Ee={data:!1,fetched:!1,loading:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(J.a)(Object(J.a)({},e),{},{fetched:!1,loading:!0});case O:return Object(J.a)(Object(J.a)({},e),{},{fetched:!1,loading:!1,error:t.payload});case I:return Object(J.a)(Object(J.a)({},e),{},{fetched:!0,loading:!1,data:t.payload})}return e},ke={favComics:{ids:[],items:[]},fetched:!1,loading:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case N:case C:return Object(J.a)(Object(J.a)({},e),{},{fetched:!1,loading:!0});case y:case S:case v:return Object(J.a)(Object(J.a)({},e),{},{fetched:!1,loading:!0,error:t.payload});case k:case w:var n=ke.favComics.items;return e.favComics.items.length&&(n=e.favComics.items.filter((function(e){var n=e.id;return t.payload.ids.includes(n)}))),Object(J.a)(Object(J.a)({},e),{},{fetched:!0,loading:!1,favComics:Object(J.a)(Object(J.a)(Object(J.a)({},e.favComics),t.payload),{},{items:n})});case x:return Object(J.a)(Object(J.a)({},e),{},{fetched:!0,loading:!1,favComics:Object(J.a)(Object(J.a)({},e.favComics),t.payload)})}return e},Se=Object(Ce.b)({searchComics:xe,comics:ye,comic:Ne}),we=n(82),Qe=(n(162),Object(Ce.a)(we.a)),Ue=Object(Ce.c)(Se,Qe);a.a.render(Object(te.jsx)(A.a,{store:Ue,children:Object(te.jsx)(Ie,{})}),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.38b77ca3.chunk.js.map