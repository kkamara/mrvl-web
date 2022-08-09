(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{149:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var c=n(34),a=n.n(c),r=n(36),i=n(8),o=n(0),s=n.n(o),A=(n(93),n(56),n(94),n(26)),l=n(28),u=n(76),d=n(20),b=n(25),j=n(13),f=n.n(j),g="SEARCH_COMICS_PENDING",m="SEARCH_COMICS_ERROR",h="SEARCH_COMICS_SUCCESS",p="GET_COMICS_PENDING",O="GET_COMICS_ERROR",v="GET_COMICS_SUCCESS",I="GET_FAVOURITE_COMICS_PENDING",C="GET_FAVOURITE_COMICS_ERROR",x="GET_FAVOURITE_COMICS_SUCCESS",E="FAVOURITE_COMIC_PENDING",y="FAVOURITE_COMIC_ERROR",k="FAVOURITE_COMIC_SUCCESS",N="UNFAVOURITE_COMIC_PENDING",w="UNFAVOURITE_COMIC_ERROR",S="UNFAVOURITE_COMIC_SUCCESS",Q=n(41),R=n(42),U=n(53),B=n.n(U),H="mrvl".toUpperCase(),D="M5Pj4m4sIMVxGzJvOEOHwWbzl5UcOKjE",W="https://mrvl.herokuapp.com/api/v1",F="prod",V=function(){function e(){Object(Q.a)(this,e),this._headers={Accept:"application/json"},this._url=W}return Object(R.a)(e,[{key:"getComics",value:function(e){var t=new URL("".concat(this._url,"/comics"));if(null!==e&&"object"===typeof e&&Object.keys(e).length)for(var n in e){var c=e[n];null!==c&&t.searchParams.append(n,c)}return B.a.get(t.href,{headers:this._headers})}},{key:"getComic",value:function(e){var t=new URL("".concat(this._url,"/comics/").concat(e));return B.a.get(t.href,{headers:this._headers})}}]),e}(),M="fav-comic-ids";function J(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(b.a)(f.a.mark((function t(n){var c,a,r,i,o,s,A;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A=function(e,t){return{type:e,payload:t}},s=function(e,t){return{type:e,payload:t}},n(function(e){return{type:e}}(I)),null!==(c=localStorage.getItem(M))){t.next=10;break}return c=[],t.abrupt("return",n(A(x,{items:[]})));case 10:t.prev=10,c=JSON.parse(c),t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(10),t.abrupt("return",n(s(C,t.t0.message)));case 17:if(localStorage.setItem(M,JSON.stringify(c)),a=[],!e){t.next=43;break}r=Object(u.a)(c),t.prev=21,r.s();case 23:if((i=r.n()).done){t.next=35;break}return o=i.value,t.prev=25,t.next=28,(new V).getComic(o).then((function(e){a.push(e.data.data)})).catch((function(e){throw e}));case 28:t.next=33;break;case 30:return t.prev=30,t.t1=t.catch(25),t.abrupt("return",n(s(C,t.t1.message)));case 33:t.next=23;break;case 35:t.next=40;break;case 37:t.prev=37,t.t2=t.catch(21),r.e(t.t2);case 40:return t.prev=40,r.f(),t.finish(40);case 43:n(A(x,{ids:c,items:a}));case 44:case"end":return t.stop()}}),t,null,[[10,14],[21,37,40,43],[25,30]])})));return function(e){return t.apply(this,arguments)}}()}var G=n(6),L=n(22),P=n(54),K=n.n(P),X=n(30),Z=n(187),T=n(192),Y=n(191),z=n(190),q=n(189),_=n(78),$=n.n(_),ee=n(79),te=n.n(ee),ne=n.p+"static/media/modal-background.ebda8efe.jpg",ce=(n(149),n(1));K.a.setAppElement("#root");var ae={linkBtn:{textDecoration:"none"},comicModal:{content:{width:375,height:630,left:"40%",backgroundImage:"url(".concat(ne,")")}},comicModalMobile:{content:{width:320,height:700,backgroundImage:"url(".concat(ne,")")}},iconMobile:{cursor:"pointer",right:32,bottom:620,fontSize:50,position:"absolute"},icon:{cursor:"pointer",right:32,bottom:645,fontSize:50,position:"absolute"},copyLinkBtn:{position:"absolute",right:27}},re=Object(A.b)((function(e){return{favComics:e.comic.favComics}}),(function(e){return{favComic:function(t){return e(function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var c,a,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=function(e,t){return{type:e,payload:t}},r=function(e,t){return{type:e,payload:t}},n({type:E}),c=[e],null===(a=localStorage.getItem(M))){t.next=15;break}t.prev=7,a=JSON.parse(a),c=[].concat(Object(d.a)(a),Object(d.a)(c)),t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(7),t.abrupt("return",n(r(y,t.t0.message)));case 15:localStorage.setItem(M,JSON.stringify(c)),n(i(k,{ids:c}));case 17:case"end":return t.stop()}}),t,null,[[7,12]])})));return function(e){return t.apply(this,arguments)}}()}(t))},unFavComic:function(t){return e(function(e){return function(){var t=Object(b.a)(f.a.mark((function t(n){var c,a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=function(e,t){return{type:e,payload:t}},a=function(e,t){return{type:e,payload:t}},n({type:N}),null!==(c=localStorage.getItem(M))){t.next=7;break}return t.abrupt("return",n(r(S,{ids:[]})));case 7:t.prev=7,c=JSON.parse(c),t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(7),t.abrupt("return",n(a(w,t.t0.message)));case 14:c=c.filter((function(t){return t!==e})),localStorage.setItem(M,JSON.stringify(c)),n(r(S,{ids:c}));case 17:case"end":return t.stop()}}),t,null,[[7,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.unFavComicCallback,n=e.fetchFavItems,c=e.favComics,a=e.unFavComic,r=e.favComic,i=(e.history,e.comic),s=Object(X.useFlags)(["copy_link_feature"]),A=Object(o.useState)(!1),l=Object(L.a)(A,2),u=l[0],d=l[1],b=function(){d(!0)},j=function(){d(!1)},f=function(){r(i.id)},g=function(){a(i.id),n&&(j(),t(n))};function m(){var e=Object(G.a)(Object(G.a)({},ae.icon),{},{right:32,bottom:645,position:"absolute"});return window.innerWidth<650&&(e=Object(G.a)(Object(G.a)({},e),ae.iconMobile)),e}return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsxs)("div",{className:"comic-thumbnail-container",id:i.id,children:[Object(ce.jsx)("img",{onClick:b,className:"comic-thumbnail",src:i.thumbnail.path+"."+i.thumbnail.extension,alt:i.title}),Object(ce.jsx)("p",{onClick:b,children:i.title})]}),Object(ce.jsx)(K.a,{isOpen:u,contentLabel:"Comic Modal",shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,onRequestClose:j,style:window.innerWidth<650?ae.comicModalMobile:ae.comicModal,onAfterOpen:function(){return console.log("opened comic",i)},children:Object(ce.jsxs)(Z.a,{sx:{maxWidth:345},children:[function(){var e="data:image/jpeg;base64,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";return i.images.length&&(e=i.images[0].path+"."+i.images[0].extension),Object(ce.jsx)(z.a,{component:"img",height:"450",image:e,alt:i.title,className:"comic-image"})}(),c.ids.includes(i.id)?Object(ce.jsx)(te.a,{onClick:g,style:m(),fontSize:"large",color:"warning"}):Object(ce.jsx)($.a,{onClick:f,style:m(),fontSize:"large",color:"warning"}),Object(ce.jsxs)(Y.a,{children:[Object(ce.jsx)(q.a,{gutterBottom:!0,variant:"h5",component:"div",children:i.title}),Object(ce.jsx)(q.a,{variant:"body2",color:"text.secondary",children:Object(ce.jsx)("span",{dangerouslySetInnerHTML:{__html:i.description}})})]}),Object(ce.jsx)("hr",{}),Object(ce.jsx)(T.a,{children:Object(ce.jsx)("a",{className:"btn btn-dark store-page-link",href:i.urls[0].url,style:ae.linkBtn,children:"Store page"})}),Object(ce.jsxs)(T.a,{children:[Object(ce.jsx)("a",{onClick:j,className:"btn btn-warning close-modal-btn close-modal-btn",style:ae.linkBtn,children:"Close"}),s.copy_link_feature.enabled&&s.copy_link_feature.value===F?Object(ce.jsx)("a",{onClick:function(){var e=new URL(window.location.href).origin+"/comic/"+i.id;navigator.clipboard.writeText(e);var t=e+" has been successfully copied to clipboard.";console.log(t),alert(t)},className:"btn btn-primary close-modal-btn copy-link-btn",style:Object(G.a)(Object(G.a)({},ae.linkBtn),ae.copyLinkBtn),children:"Copy Link"}):null]})]})})]})})),ie=function(e){var t=e.comic,n=e.fetchFavItems,c=e.unFavComicCallback;return Object(ce.jsx)(re,{comic:t,fetchFavItems:n,unFavComicCallback:c})},oe=n(80),se=n.n(oe),Ae=function(){return Object(ce.jsx)("div",{children:Object(ce.jsx)("div",{className:"sweet-loading text-center",children:Object(ce.jsx)(se.a,{size:150,color:"#123abc",loading:!0})})})},le=Object(A.b)((function(e){return{comic:e.comic}}),(function(e){return{getFavComics:function(t){return e(J(t))}}}))((function(e){var t=e.getFavComics,n=e.comic,c=n.favComics,a=n.fetched,r=n.loading,i="Favourite Comics | ".concat(H);Object(o.useEffect)((function(){s(!0)}),[]);var s=function(e){t(e)},A=null;return A=a&&!r?Object(ce.jsx)("div",{className:"container text-center",children:c.ids.length?c.items.map((function(e,t){return Object(ce.jsx)(ie,{comic:e,fetchFavItems:!0,unFavComicCallback:s},t)})):Object(ce.jsx)("p",{children:"No results to display your query."})}):!a&&r?Object(ce.jsx)(Ae,{}):Object(ce.jsx)("div",{className:"container",children:Object(ce.jsx)("div",{children:"Unknown error encountered"})}),Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(l.a,{children:Object(ce.jsx)("title",{children:i})}),A]})}));function ue(){var e=Object(i.g)().search;return Object(o.useMemo)((function(){return new URLSearchParams(e)}),[e])}var de=Object(i.h)((function(e){var t=e.data,n=ue(),c=0,a=n.get("offset");a&&!isNaN(parseInt(a))&&(c=parseInt(a));var r=!1,i=!1;c<1&&(r=!0),c>t.total+c&&(i=!0);var o="";"undefined"!==typeof t.filters&&"string"===typeof t.filters&&t.filters.length&&(o+="&".concat(t.filters));return Object(ce.jsx)(ce.Fragment,{children:Object(ce.jsx)("nav",{"aria-label":"Comic pagination",children:Object(ce.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(ce.jsx)("li",{onClick:function(e){r||(window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?offset=").concat(c-20).concat(o))},className:"page-item ".concat(r?"disabled":""),children:Object(ce.jsx)("a",{className:"page-link",href:"#",children:"Previous"})}),Object(ce.jsx)("li",{onClick:function(e){i||(window.location.href="".concat(window.location.origin).concat(window.location.pathname,"?offset=").concat(c+20).concat(o))},className:"page-item ".concat(i?"disabled":""),children:Object(ce.jsx)("a",{className:"page-link",href:"#",children:"Next"})})]})})})})),be=(n(160),Object(A.b)((function(e){return{comics:e.comics}}),(function(e){return{getComics:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(b.a)(f.a.mark((function t(n){var c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(e,t){return{type:e,payload:t}},c=function(e,t){return{type:e,payload:t}},n({type:p}),t.next=6,(new V).getComics({offset:e}).then((function(e){n(a(v,e.data.data))})).catch((function(e){n(c(O,e))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},getFavComics:function(t){return e(J(t))}}}))((function(e){var t=e.comics,n=e.getComics,c=e.getFavComics,a=ue(),r=0,i=a.get("offset");i&&!isNaN(parseInt(i))&&(r=parseInt(i));var s=t.data,A=t.fetched,u=t.loading,d="Home | ".concat(H);Object(o.useEffect)((function(){b(r),j()}),[]);var b=function(e){n(e)},j=function(){c()},f=null;return f=A&&!u?Object(ce.jsxs)("div",{className:"container text-center",children:[Object(ce.jsx)("div",{className:"content-header",children:Object(ce.jsx)(de,{data:s})}),s&&"object"===typeof s&&null!==s&&void 0!==s.results&&s.results.length?s.results.map((function(e,t){return Object(ce.jsx)(ie,{comic:e},t)})):Object(ce.jsx)("p",{children:"No results to display your query."}),Object(ce.jsx)("div",{className:"content-footer",children:Object(ce.jsx)(de,{data:s})})]}):!A&&u?Object(ce.jsx)(Ae,{}):Object(ce.jsx)("div",{className:"container",children:Object(ce.jsx)("div",{children:"Unknown error encountered"})}),Object(ce.jsxs)(ce.Fragment,{children:[function(){if(!1===s)return Object(ce.jsxs)(l.a,{children:[Object(ce.jsx)("title",{children:d}),Object(ce.jsx)("meta",{name:"title",content:d}),Object(ce.jsx)("meta",{name:"url",content:window.location.href})]});var e=s.results[11];console.log(e);var t=e.images[0];return Object(ce.jsxs)(l.a,{children:[Object(ce.jsx)("title",{children:d}),Object(ce.jsx)("meta",{name:"title",content:d}),Object(ce.jsx)("meta",{name:"url",content:window.location.href}),Object(ce.jsx)("meta",{name:"description",content:e.description}),Object(ce.jsx)("meta",{name:"image",content:t.path+t.extension})]})}(),f]})}))),je=function(){return Object(ce.jsx)("div",{className:"container",children:Object(ce.jsx)("p",{children:"SearchComicsPage"})})},fe=n(82),ge=n(85),me=(n(161),function(e){Object(fe.a)(n,e);var t=Object(ge.a)(n);function n(){var e;Object(Q.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={giphyImageUrl:null},e.getGiphyImage=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/random?api_key=".concat(D)).then((function(e){return e.json()})).then((function(e){return e.data.images.original.url})).catch((function(e){return!1}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),e}return Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getGiphyImage();case 2:t=e.sent,this.setGiphyImage(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setGiphyImage",value:function(e){this.setState({giphyImageUrl:e})}},{key:"render",value:function(){var e=he.container,t=this.state.giphyImageUrl;return null===t?Object(ce.jsx)(Ae,{}):Object(ce.jsx)("div",{className:"container",style:e,children:Object(ce.jsxs)("div",{className:"text-center",children:[Object(ce.jsx)("h2",{children:"Oops, page not found"}),t?Object(ce.jsx)("img",{className:"image-404",src:t,alt:"404_image"}):Object(ce.jsx)("div",{})]})})}}]),n}(s.a.Component)),he={container:{marginTop:100}},pe=me,Oe=(n(162),function(){return Object(ce.jsx)("footer",{className:"footer",children:Object(ce.jsxs)("div",{className:"container text-center footer-text",children:[H," \xa9 ",2022,"\xa0",Object(ce.jsx)("a",{target:"_blank",href:"https://github.com/kkamara/mrvl",children:"Github"})]})})}),ve=n.p+"static/media/marvel-moving.e4ed4a95.gif",Ie=(n(163),{header:{marginTop:30,marginBottom:70}}),Ce=function(){var e=Object(X.useFlags)(["search_page"]);return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(l.a,{children:Object(ce.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})}),Object(ce.jsxs)("header",{className:"header",style:Ie.header,children:[Object(ce.jsx)("div",{className:"container text-left",children:Object(ce.jsx)("img",{className:"header-img",src:ve,alt:"marvel-moving.gif",onClick:function(){window.location.href="/"}})}),Object(ce.jsxs)("nav",{className:"container nav-container",children:[Object(ce.jsx)("a",{className:"btn btn-warning btn-lg",href:"/",children:"Home"}),e.search_page.enabled&&e.search_page.value===F?Object(ce.jsx)("a",{className:"btn btn-warning btn-lg",href:"/search",children:"Search"}):null,Object(ce.jsx)("a",{className:"btn btn-warning btn-lg",href:"/favs",children:"Favourites"}),Object(ce.jsx)("a",{className:"btn btn-warning btn-lg",href:"/404",children:"404 page"})]})]})]})},xe=(n(164),function(){return Object(ce.jsx)("div",{id:"app",children:Object(ce.jsx)(r.a,{children:Object(ce.jsxs)(o.Fragment,{children:[Object(ce.jsx)(Ce,{}),Object(ce.jsxs)(i.d,{children:[Object(ce.jsx)(i.b,{path:"/",exact:!0,component:be}),Object(ce.jsx)(i.b,{path:"/search",exact:!0,component:je}),Object(ce.jsx)(i.b,{path:"/favs",exact:!0,component:le}),Object(ce.jsx)(i.b,{path:"/404",exact:!0,component:pe}),Object(ce.jsx)(i.a,{to:"/404"})]}),Object(ce.jsx)(Oe,{})]})})})}),Ee=n(39),ye={data:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(G.a)(Object(G.a)({},e),{},{fetched:!1,loading:!1});case m:return Object(G.a)(Object(G.a)({},e),{},{fetched:!1,loading:!0,error:t.payload});case h:return Object(G.a)(Object(G.a)({},e),{},{fetched:!1,loading:!1,data:t.payload})}return e},Ne={data:!1,fetched:!1,loading:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(G.a)(Object(G.a)({},e),{},{fetched:!1,loading:!0});case O:return Object(G.a)(Object(G.a)({},e),{},{fetched:!1,loading:!1,error:t.payload});case v:return Object(G.a)(Object(G.a)({},e),{},{fetched:!0,loading:!1,data:t.payload})}return e},Se={favComics:{ids:[],items:[]},fetched:!1,loading:!1},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:case N:case I:return Object(G.a)(Object(G.a)({},e),{},{fetched:!1,loading:!0});case y:case w:case C:return Object(G.a)(Object(G.a)({},e),{},{fetched:!1,loading:!0,error:t.payload});case k:case S:var n=Se.favComics.items;return e.favComics.items.length&&(n=e.favComics.items.filter((function(e){var n=e.id;return t.payload.ids.includes(n)}))),Object(G.a)(Object(G.a)({},e),{},{fetched:!0,loading:!1,favComics:Object(G.a)(Object(G.a)(Object(G.a)({},e.favComics),t.payload),{},{items:n})});case x:return Object(G.a)(Object(G.a)({},e),{},{fetched:!0,loading:!1,favComics:Object(G.a)(Object(G.a)({},e.favComics),t.payload)})}return e},Re=Object(Ee.b)({searchComics:ke,comics:we,comic:Qe}),Ue=n(84),Be=n(83),He=n.n(Be),De=Object(Ee.a)(Ue.a),We=Object(Ee.c)(Re,De);a.a.render(Object(ce.jsx)(X.FlagsmithProvider,{options:{environmentID:"c4pNNMEo9DHuPargExAWRu"},flagsmith:He.a,children:Object(ce.jsx)(A.a,{store:We,children:Object(ce.jsx)(xe,{})})}),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.ab255b48.chunk.js.map