(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{147:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var c=n(29),a=n.n(c),A=n(36),i=n(8),r=n(0),o=n.n(r),s=(n(87),n(52),n(88),"mrvl".toUpperCase()),l="M5Pj4m4sIMVxGzJvOEOHwWbzl5UcOKjE",d="https://mrvl.herokuapp.com/api/v1",u=n(1),g=function(){"Favourite Comics | ".concat(s);return Object(u.jsx)("p",{children:"FavouriteComicsPage"})},j=n(41),h=n(68),b=n(32),I=n(24),f=n.n(I),m="SEARCH_COMICS_PENDING",O="SEARCH_COMICS_ERROR",C="SEARCH_COMICS_SUCCESS",p="GET_COMICS_PENDING",E="GET_COMICS_ERROR",x="GET_COMICS_SUCCESS",v={GET_COMIC_PENDING:"GET_COMIC_PENDING",GET_COMIC_ERROR:"GET_COMIC_ERROR",GET_COMIC_SUCCESS:"GET_COMIC_SUCCESS"},N=n(37),Q=n(38),k=n(71),S=n.n(k),w=function(){function e(){Object(N.a)(this,e),this._headers={Accept:"application/json"},this._url=d}return Object(Q.a)(e,[{key:"getComics",value:function(e){var t=new URL("".concat(this._url,"/comics"));if(null!==e&&"object"===typeof e&&Object.keys(e).length)for(var n in e){var c=e[n];null!==c&&t.searchParams.append(n,c)}return S.a.get(t.href,{headers:this._headers})}}]),e}();function y(){var e=Object(i.g)().search;return Object(r.useMemo)((function(){return new URLSearchParams(e)}),[e])}var H=Object(i.h)((function(e){var t=e.data,n=y(),c=0,a=n.get("offset");a&&!isNaN(parseInt(a))&&(c=parseInt(a));var A=!1,i=!1;c<1&&(A=!0),c>t.total+c&&(i=!0);var r="";"undefined"!==typeof t.filters&&"string"===typeof t.filters&&t.filters.length&&(r+="&".concat(t.filters));return console.log(t),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{"aria-label":"Comic pagination",children:Object(u.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(u.jsx)("li",{onClick:function(e){A||(window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?offset=").concat(c-20).concat(r))},className:"page-item ".concat(A?"disabled":""),children:Object(u.jsx)("a",{className:"page-link",href:"#",children:"Previous"})}),Object(u.jsx)("li",{onClick:function(e){i||(window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?offset=").concat(c+20).concat(r))},className:"page-item ".concat(i?"disabled":""),children:Object(u.jsx)("a",{className:"page-link",href:"#",children:"Next"})})]})})})})),R=n(20),B=n(73),D=n.n(B),U=n(185),W=n(190),G=n(189),V=n(188),M=n(187),J=n(75),P=n.n(J),K=n.p+"static/media/modal-background.ebda8efe.jpg";n(147);var X={comicModal:{content:{width:375,height:730,left:"40%",backgroundImage:"url(".concat(K,")")}},comicModalMobile:{content:{width:320,height:410}},icon:{cursor:"pointer",right:32,bottom:645,fontSize:50,position:"absolute"}},Z=function(e){var t=e.comic,n=Object(r.useState)(!1),c=Object(R.a)(n,2),a=c[0],A=c[1],i=function(){A(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"comic-thumbnail-container",onClick:function(){A(!0)},children:[Object(u.jsx)("img",{className:"comic-thumbnail",src:t.thumbnail.path+"."+t.thumbnail.extension,alt:t.title}),Object(u.jsx)("p",{children:t.title})]}),Object(u.jsx)(D.a,{isOpen:a,contentLabel:"Comic Modal",shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:i,style:window.innerWidth<650?X.comicModalMobile:X.comicModal,children:Object(u.jsxs)(U.a,{sx:{maxWidth:345},children:[function(){var e="data:image/jpeg;base64,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";return t.images.length&&(e=t.images[0].path+"."+t.images[0].extension),Object(u.jsx)(V.a,{component:"img",height:"500",image:e,alt:t.title,className:"comic-image"})}(),Object(u.jsx)(P.a,{style:X.icon,fontSize:"large",color:"warning"}),Object(u.jsxs)(G.a,{children:[Object(u.jsx)(M.a,{gutterBottom:!0,variant:"h5",component:"div",children:t.title}),Object(u.jsx)(M.a,{variant:"body2",color:"text.secondary",children:t.description})]}),Object(u.jsx)(W.a,{children:Object(u.jsx)("a",{onClick:i,className:"link-warning close-modal-btn",children:"Close"})})]})})]})},F=n(76),Y=n.n(F),L=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"sweet-loading text-center",children:Object(u.jsx)(Y.a,{size:150,color:"#123abc",loading:!0})})})},T=(n(156),Object(j.b)((function(e){return{comics:e.comics}}),(function(e){return{getComics:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(b.a)(f.a.mark((function t(n){var c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(e,t){return{type:e,payload:t}},c=function(e,t){return{type:e,payload:t}},n({type:p}),t.next=6,(new w).getComics({offset:e}).then((function(e){n(a(x,e.data.data))})).catch((function(e){n(c(E,e))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.comics,n=e.getComics,c=y(),a=0,A=c.get("offset");A&&!isNaN(parseInt(A))&&(a=parseInt(A));var i=t.data,o=t.fetched,l=t.loading,d="Home | ".concat(s);Object(r.useEffect)((function(){g(a)}),[]);var g=function(e){n(e)},j=null;return j=o&&l?Object(u.jsxs)("div",{className:"container text-center",children:[Object(u.jsx)("div",{className:"content-header",children:Object(u.jsx)(H,{data:i})}),i&&"object"===typeof i&&null!==i&&void 0!==i.results&&i.results.length?i.results.map((function(e,t){return Object(u.jsx)(Z,{comic:e},t)})):Object(u.jsx)("p",{children:"No results to display your query."}),Object(u.jsx)("div",{className:"content-footer",children:Object(u.jsx)(H,{data:i})})]}):!o&&l?Object(u.jsx)("div",{children:"Unknown error encountered"}):Object(u.jsx)(L,{}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h.a,{children:Object(u.jsx)("title",{children:d})}),j]})}))),z=n(77),q=n(79),_=function(e){Object(z.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(N.a)(this,n);for(var c=arguments.length,a=new Array(c),A=0;A<c;A++)a[A]=arguments[A];return(e=t.call.apply(t,[this].concat(a))).state={giphyImageUrl:null},e.getGiphyImage=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/random?api_key=".concat(l)).then((function(e){return e.json()})).then((function(e){return console.log(e.data),e.data.images.original.url})).catch((function(e){return!1}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),e}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGiphyImage();case 2:t=e.sent,this.setGiphyImage(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setGiphyImage",value:function(e){this.setState({giphyImageUrl:e})}},{key:"render",value:function(){var e=$.container,t=this.state.giphyImageUrl;return null===t?Object(u.jsx)(L,{}):Object(u.jsx)("div",{className:"container",style:e,children:Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("h2",{children:"Oops, page not found"}),t?Object(u.jsx)("img",{src:t,alt:"404_image"}):Object(u.jsx)("div",{})]})})}}]),n}(o.a.Component),$={container:{marginTop:100}},ee=_,te=(n(157),function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("div",{className:"container text-center footer-text",children:[s," \xa9 ",2022,"\xa0",Object(u.jsx)("a",{target:"_blank",href:"https://github.com/kkamara/mrvl",children:"Github"})]})})}),ne=n.p+"static/media/marvel-moving.e4ed4a95.gif",ce=(n(158),{header:{marginTop:30,marginBottom:70}}),ae=function(){return Object(u.jsxs)("header",{className:"header",style:ce.header,children:[Object(u.jsx)("div",{className:"container text-left",children:Object(u.jsx)("img",{className:"header-img",src:ne,alt:"marvel-moving.gif",onClick:function(){window.location.href="/"}})}),Object(u.jsxs)("nav",{className:"container nav-container",children:[Object(u.jsx)("a",{className:"btn btn-warning btn-lg",href:"/",children:"Home"}),Object(u.jsx)("a",{className:"btn btn-warning btn-lg",href:"/favs",children:"Favourites"}),Object(u.jsx)("a",{className:"btn btn-warning btn-lg",href:"/404",children:"404 page"})]})]})},Ae=(n(159),function(){return Object(u.jsx)("div",{id:"app",children:Object(u.jsx)(A.a,{children:Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(ae,{}),Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"/",exact:!0,component:T}),Object(u.jsx)(i.b,{path:"/favs",exact:!0,component:g}),Object(u.jsx)(i.b,{path:"/404",exact:!0,component:ee}),Object(u.jsx)(i.a,{to:"/404"})]}),Object(u.jsx)(te,{})]})})})}),ie=n(34),re=n(7),oe={data:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(re.a)(Object(re.a)({},e),{},{fetched:!1,loading:!1});case O:return Object(re.a)(Object(re.a)({},e),{},{fetched:!1,loading:!0,error:t.payload});case C:return Object(re.a)(Object(re.a)({},e),{},{fetched:!0,loading:!0,data:t.payload})}return e},le={data:!1,fetched:!1,loading:!0},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(re.a)(Object(re.a)({},e),{},{fetched:!1,loading:!1});case E:return Object(re.a)(Object(re.a)({},e),{},{fetched:!1,loading:!0,error:t.payload});case x:return Object(re.a)(Object(re.a)({},e),{},{fetched:!0,loading:!0,data:t.payload})}return e},ue={data:!1},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.GET_CHARACTER_PENDING:return Object(re.a)(Object(re.a)({},e),{},{fetched:!1,loading:!1});case v.GET_CHARACTER_ERROR:return Object(re.a)(Object(re.a)({},e),{},{fetched:!1,loading:!0,error:t.payload});case v.GET_CHARACTER_SUCCESS:return Object(re.a)(Object(re.a)({},e),{},{fetched:!0,loading:!0,data:t.payload})}return e},je=Object(ie.b)({searchComics:se,comics:de,comic:ge}),he=n(78),be=(n(160),Object(ie.a)(he.a)),Ie=Object(ie.c)(je,be);a.a.render(Object(u.jsx)(j.a,{store:Ie,children:Object(u.jsx)(Ae,{})}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.5f492bd4.chunk.js.map