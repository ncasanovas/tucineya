(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){},56:function(e,t,a){e.exports=a(92)},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(44),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})}),i=a(6),s=a(17),m=a(7),u=a(4),d=a.n(u),p=a(10),f=a(24),E=a(23),b=a(11),v=a.n(b),g="[auth] login",h="[auth] admin",y="[auth] logout",N=Object(n.createContext)(),j=a(53),w=a.n(j),O=a(54),k=a(98),x=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=function(){c(!1)};return r.a.createElement("div",{className:"mt-2 "},r.a.createElement(O.a,{variant:"primary",onClick:function(){return c(!0)}},"Suscribirse"),r.a.createElement(k.a,{show:a,onHide:l,backdrop:"static",keyboard:!1},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,{className:"title-sub"},"Suscribite")),r.a.createElement(k.a.Body,null,r.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),w.a.sendForm("gmail","template_aw5uok9",e.target,"user_LcLtCbtqDfh0IUE6zlGFi").then(function(e){window.location.reload(),alert("Gracias por suscribirte")},function(e){alert("La suscripci\xf3n fall\xf3. Intent\xe1 nuevamente.")})}},r.a.createElement("div",{className:"contenedor-inputs"},r.a.createElement("input",{type:"text",placeholder:"Nombre",name:"to_name"}),r.a.createElement("input",{type:"email",placeholder:"Correo",name:"to_email"})),r.a.createElement("input",{type:"submit",className:"btn-submit btn-primary",value:"Suscribirse"}))),r.a.createElement(k.a.Footer,null,r.a.createElement(O.a,{variant:"secondary btn-secondary",onClick:l},"Volver"))))},C=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(N).dispatch,o=Object(m.g)(),u=function(e){c(Object(E.a)({},a,Object(f.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.target.reset(),e.next=4,v.a.post("https://tucineya.herokuapp.com/api/login/",a).then(function(e){c({email:"",password:""}),e.data.admin?(l({type:h,payload:{token:e.data.username}}),o.replace("./admin")):e.data.encontrado?(l({type:g,payload:{token:e.data.username}}),o.replace("./buscarPelicula")):alert(e.data.message)}).catch(function(e){console.log(e)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("form",{onSubmit:b,className:"py-3 row justify-content-center"},r.a.createElement("div",{className:"form-group row col-lg-6"},r.a.createElement("label",{htmlFor:"fname"},"Email:"),r.a.createElement("input",{type:"email",id:"fname",className:"form-control",name:"email",placeholder:"Email",onChange:u,required:!0}),r.a.createElement("label",{htmlFor:"lname"},"Contrase\xf1a:"),r.a.createElement("input",{type:"password",id:"lname",className:"form-control mb-3",name:"password",placeholder:"Contrase\xf1a",onChange:u,required:!0})),r.a.createElement("div",{className:"btn-sm "},r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-3"},"Ingresar"))),r.a.createElement("p",null,"\xbfTodav\xeda no te registraste?"),r.a.createElement("div",{className:"btn-sm"},r.a.createElement(s.b,null,r.a.createElement(s.c,{to:"/registro",className:"btn btn-success"},"Registrarse"))),r.a.createElement(x,null))))},S=function(){var e=Object(p.a)(d.a.mark(function e(){var t,a,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/upcoming?api_key=350f655333437185ccf33d95346bf8e6&region=US",e.next=3,fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=350f655333437185ccf33d95346bf8e6&region=US");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,n=a.results.map(function(e){return{id:e.id,title:e.title,url:e.poster_path}}),e.abrupt("return",n);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{id:"card-premiere",className:"card card-poster animate__animated animate__fadeIn"},r.a.createElement("p",{id:"title-premiere"},t),r.a.createElement("img",{id:"posters-premiere",src:"https://image.tmdb.org/t/p/w500".concat(a),alt:t}))},P=function(e){var t=function(e){var t=Object(n.useState)({data:[]}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){S(e).then(function(e){c({data:e})})},[e]),r}(e).data;return r.a.createElement("div",{id:"premiere",className:"mb-3"},r.a.createElement("h1",null,"Pr\xf3ximos Estrenos"),r.a.createElement("div",null,t.length!==[]?t.map(function(e){return r.a.createElement(q,Object.assign({key:e.id},e))}):r.a.createElement("h4",{className:"mt-5"},"No se encontraron pr\xf3ximos estrenos")))},A=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col"},r.a.createElement(C,null)),r.a.createElement("div",{className:"col premiere"},r.a.createElement(P,null),r.a.createElement("div",{className:"mb-3"},r.a.createElement("button",{type:"button",className:"btn btn-primary "},"Ver Cat\xe1logo de Pel\xedculas")))))},L=function(){return r.a.createElement("div",{id:"header",className:"row container-fluid"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{className:"icons-home rounded float-start img-fluid",src:"3d-glasses.png",alt:""})),r.a.createElement("div",{className:"col-6 "},r.a.createElement("h1",{id:"tucineya",className:"fs-auto"},"TU CINE YA")),r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{className:"icons-home rounded float-end img-fluid",src:"clapperboard.png",alt:""})))},T=function(){return r.a.createElement("div",{className:"d-flex justify-content-between footer mt-auto p-2 bd-highlight row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("h3",{className:"title-footer"},"TU CINE YA")),r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{className:"icon",src:"instagram.png",alt:"Logo Instagram"})),r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{className:"icon",src:"facebook.png",alt:"Logo Facebook"})),r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{className:"icon",src:"twitter.png",alt:"Logo Twitter"})))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(E.a)({},t.payload,{logged:!0,admin:!1});case y:return{logged:!1};case h:return Object(E.a)({},t.payload,{logged:!0,admin:!0});default:return e}},I=a(36),_=a(2),B=a.n(_),R=function(e){var t=e.isAuthenticated,a=(e.admin,e.component),n=Object(I.a)(e,["isAuthenticated","admin","component"]);return r.a.createElement(m.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(m.a,{to:"/"})}}))};R.protoTypes={isAuthenticated:B.a.bool.isRequired,admin:B.a.bool.isRequired,component:B.a.func.isRequired};var D=function(e){var t=e.isAuthenticated,a=e.admin,n=e.component,c=Object(I.a)(e,["isAuthenticated","admin","component"]);return r.a.createElement(m.b,Object.assign({},c,{component:function(e){return t&&a?r.a.createElement(n,e):(alert("No puede ingresar al componente admin"),r.a.createElement(m.a,{to:"/buscarPelicula"}))}}))};D.protoTypes={isAuthenticated:B.a.bool.isRequired,admin:B.a.bool.isRequired,component:B.a.func.isRequired};var U=function(){var e=Object(n.useState)({nombre:"",apellido:"",email:"",username:"",password:"",rePassword:"",celular:"",direccion:"",piso:"",dpto:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],l=function(e){c(Object(E.a)({},a,Object(f.a)({},e.target.name,e.target.value)))},o=function(e){var t={};return e.nombre.length>15&&(t.nombre="Debe contener 15 letras o menos"),/[A-Za-z]/.test(e.nombre)||(t.nombre="No debe contener caracteres especiales ni n\xfameros"),e.apellido.length>20&&(t.apellido="Debe contener 20 letras o menos"),/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Email invalido"),e.username.length>10&&(t.username="Debe contener 10 letras o menos"),e.password||(t.password="Requerido"),e.repassword?e.repassword!==e.password&&(t.repassword="Las contrase\xf1as deben coincidir"):t.repassword="Requerido",(parseInt(!e.celular.match(/^[0-9]{8,12}$/i))||parseInt(e.celular.match(/^[0-9]{12}$/i)))&&(t.celular="Celular invalido"),e.direccion||(t.direccion="Requerido"),t},m=function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==Object.keys(o(a)).length){e.next=6;break}return e.next=4,v.a.post("https://tucineya.herokuapp.com/api/register/",a).then(function(e){alert(e.data.message),t.target.reset(),c({nombre:"",apellido:"",email:"",username:"",password:"",rePassword:"",celular:"",direccion:"",piso:"",dpto:""})}).catch(function(e){console.log(e)});case 4:e.next=7;break;case 6:alert(JSON.stringify(o(a)));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-3 row"},r.a.createElement("div",{className:"justify-content-center"},r.a.createElement("div",{className:"row"},r.a.createElement(s.b,null,r.a.createElement(s.c,{to:"/",className:"col-2 align-items-center"},"Atras")),r.a.createElement("p",{className:"fs-1 col-8"},"FORMULARIO DE REGISTRO")),r.a.createElement("form",{onSubmit:m,className:"px-4 py-3"},r.a.createElement("p",null,"DATOS PERSONALES"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",id:"nombre",className:"form-control mb-3",name:"nombre",placeholder:"Nombre",onChange:l,required:!0}),r.a.createElement("input",{type:"text",id:"apellido",className:"form-control mb-3",name:"apellido",placeholder:"Apellido",onChange:l,required:!0}),r.a.createElement("input",{type:"email",id:"email",className:"form-control mb-3",name:"email",placeholder:"Mail",onChange:l,required:!0}),r.a.createElement("input",{type:"text",id:"username",className:"form-control mb-3",name:"username",placeholder:"Nombre de usuario",onChange:l,required:!0}),r.a.createElement("input",{type:"text",id:"lname",className:"form-control mb-3",name:"password",placeholder:"Contrase\xf1a",onChange:l,required:!0}),r.a.createElement("input",{type:"text",id:"lname",className:"form-control mb-3",name:"repassword",placeholder:"Confirma Contrase\xf1a",onChange:l,required:!0})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"number",id:"celular",className:"form-control mb-3",name:"celular",placeholder:"Celular",onChange:l,required:!0}),r.a.createElement("input",{type:"text",id:"direccion",className:"form-control mb-3",name:"direccion",placeholder:"Direcci\xf3n",onChange:l,required:!0}),r.a.createElement("input",{type:"number",id:"piso",className:"form-control mb-3",name:"piso",placeholder:"Piso",onChange:l}),r.a.createElement("input",{type:"text",id:"dpto",className:"form-control mb-3",name:"dpto",placeholder:"Dpto",onChange:l}),r.a.createElement("button",{type:"submit",className:"btn btn-success mb-3"},"Guardar")))))))},H=a(99),J=function(e){var t=e.movie,a=function(){var e=Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("https://tucineya.herokuapp.com/api/movies/",t).then(function(e){alert(e.data.message)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(H.a,{className:"row g-0 "},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(H.a.Img,{src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path)})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Title,null,t.title),r.a.createElement(H.a.Text,null,r.a.createElement("b",null,"Voto Promedio:")," ",t.vote_average),r.a.createElement(H.a.Text,null,r.a.createElement("b",null,"Fecha de estreno:")," ",t.release_date)),r.a.createElement(O.a,{variant:"primary",onClick:a},"Agregar Pelicula")))))},V=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(i.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)(),f=Object(i.a)(u,2),E=f[0],b=f[1],g=function(){c(!1),m(""),b()},h=function(){var e=Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.themoviedb.org/3/search/movie?api_key=350f655333437185ccf33d95346bf8e6&language=en-US&query=".concat(s,"&page=1&include_adult=false")).then(function(e){b(e.data.results)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"mt-2"},r.a.createElement(O.a,{variant:"primary",onClick:function(){return c(!0)}},"Agregar Pelicula"),r.a.createElement(k.a,{show:a,onHide:g,backdrop:"static",keyboard:!1},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,"Pelicula")),r.a.createElement(k.a.Body,null,r.a.createElement("div",{className:"mb-3"},r.a.createElement("input",{type:"text",placeholder:"Busque por titulo",onChange:function(e){m(e.target.value)}}),r.a.createElement(O.a,{variant:"secondary btn-secondary",onClick:h},"Buscar")),r.a.createElement("div",null,E?E.map(function(e,t){return r.a.createElement(J,{key:t,movie:e})}):null)),r.a.createElement(k.a.Footer,null,r.a.createElement(O.a,{variant:"secondary btn-secondary",onClick:g},"Volver"))))},G=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://tucineya.herokuapp.com/api/movies/").then(function(e){c(e.data[0])});case 2:case"end":return e.stop()}},e)})));var l=function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://tucineya.herokuapp.com/api/movies/".concat(t)).then(function(e){alert(e.data.message)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,a?r.a.createElement("div",{id:"withContext",className:"overflow-auto d-flex container p-2",style:{height:"350px",width:"auto"}},r.a.createElement("div",{className:"row row-cols-3 row-cols-lg-5 row-cols-md-4 g-2 g-lg-3"},a.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",null,r.a.createElement("img",{src:e.posterPelicula,className:"card-img-top",alt:e.idNombrePelicula}),r.a.createElement("div",{className:"card-body p-0 "},r.a.createElement("div",{className:"d-flex justify-content-center  m-2"},r.a.createElement("h6",{className:"card-title"},e.idNombrePelicula)),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-danger ",onClick:function(){return l(e.idNombrePelicula)}},"Eliminar")))))}))):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-primary d-flex justify-content-center",role:"status"},r.a.createElement("span",{className:"visually-hidden "},"Loading...")))),a?r.a.createElement(V,null):null)},Z=a(42),M=function(e){var t=e.deleteUsers,a=e.setDeleteUsers,c=Object(n.useState)(!1),l=Object(i.a)(c,2),o=l[0],s=l[1],m=function(){return s(!1)};return r.a.createElement("div",{className:"mt-2"},r.a.createElement(O.a,{variant:0===t.length?"primary disabled":"primary",onClick:function(){return s(!0)}},"Eliminar Usuario/s"),r.a.createElement(k.a,{show:o,onHide:m,backdrop:"static",keyboard:!1},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,"\xa1Atencion!")),r.a.createElement(k.a.Body,null,"\xbfEst\xe1 seguro de querer eliminar los usuarios seleccionados?"),r.a.createElement(k.a.Footer,null,r.a.createElement(O.a,{className:"button",variant:"secondary btn-secondary",onClick:m},"Volver"),r.a.createElement(O.a,{variant:"danger",onClick:function(){0!==t.length&&t.map(function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://tucineya.herokuapp.com/api/users/".concat(t)).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),a([]),m()}},"Eliminar"))))},Y=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),s=o[0],m=o[1];Object(n.useEffect)(Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://tucineya.herokuapp.com/api/users/").then(function(e){c(e.data[0])});case 2:case"end":return e.stop()}},e)})),[]);var u=function(e){if(e.target.checked)m([].concat(Object(Z.a)(s),[e.target.value]));else for(var t=0;t<s.length;t++)s[t]===e.target.value&&(s.splice(t,1),m(Object(Z.a)(s)))};return r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",null,a?r.a.createElement("div",{className:"overflow-auto d-flex container p-2"},r.a.createElement("ul",{className:"list-group text-start"},a.map(function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},r.a.createElement("input",{className:"form-check-input me-1",type:"checkbox",value:e.mail,"aria-label":"...",onChange:u}),e.nombre," ",e.apellido)}))):r.a.createElement("div",{className:"spinner-border text-primary d-flex justify-content-center",role:"status"},r.a.createElement("span",{className:"visually-hidden "},"Loading..."))),r.a.createElement("div",{className:"d-flex justify-content-center"},a?r.a.createElement(M,{deleteUsers:s,setDeleteUsers:m}):null))},$=function(){var e=Object(n.useContext)(N).dispatch,t=Object(m.g)();return r.a.createElement("div",{className:"container-fluid row"},r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){e({type:y}),t.replace("./")}},"Log Out")),r.a.createElement("div",{className:"col-sm-7 col-md-3 col-lg-3"},r.a.createElement("h4",{className:"mb-4"},"Lista de usuarios"),r.a.createElement(Y,null)),r.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-9"},r.a.createElement("h4",{className:"mb-4"},"Peliculas"),r.a.createElement(G,null)))},z=function(e){var t=e.movie,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],o=c[1],s=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{variant:"primary",onClick:function(){return o(!0)}},"Trailer"),r.a.createElement(k.a,{show:l,onHide:s,backdrop:"static",keyboard:!1},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,t.idNombrePelicula)),r.a.createElement(k.a.Body,{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{width:"560",height:"315",src:t.trailer,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement(k.a.Footer,null,r.a.createElement(O.a,{variant:"secondary",onClick:s},"Close"),r.a.createElement(O.a,{variant:"primary"},"Understood"))))},K=a(97),Q=function(e){var t=e.localidades,a=Object(n.useState)([]),c=Object(i.a)(a,2),l=c[0],o=c[1],s=function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://tucineya.herokuapp.com/api/cines/".concat(t.idLocalidad)).then(function(e){o(e.data[0])});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(K.a,null,r.a.createElement(K.a.Toggle,{variant:"primary",id:"dropdown-basic"},0===l.length?"Localidades":l[0].Localidad),r.a.createElement(K.a.Menu,null,void 0===t?null:t.map(function(e,t){return r.a.createElement(K.a.Item,{key:t,onClick:function(){return s(e)}},e.nombreLocalidad)})),r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"list-group list-group-flush"},0===l.length?null:l.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item"},e.Barrio," - ",e.nombre," "," , "," ",e.ubicacion)}))))},W=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),o=Object(i.a)(l,2),s=o[0],u=o[1],f=Object(n.useState)(),E=Object(i.a)(f,2),b=E[0],g=E[1],h=Object(n.useContext)(N).dispatch,j=Object(m.g)();Object(n.useEffect)(Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://tucineya.herokuapp.com/api/cines/").then(function(e){g(e.data[0])});case 2:case"end":return e.stop()}},e)})),[]);var w=function(){var e=Object(p.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.target.reset(),t.preventDefault(),e.next=4,v.a.get("https://tucineya.herokuapp.com/api/movies/".concat(a)).then(function(e){u(e.data.data[0])}).catch(function(e){console.log(e)});case 4:c("");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){h({type:y}),j.replace("./")}},"Log Out")),r.a.createElement("div",{className:"col mb-3"},r.a.createElement("form",{className:"mb-4",onSubmit:w},r.a.createElement("input",{type:"text",placeholder:"Busque por titulo",onChange:function(e){c(e.target.value)}}),r.a.createElement("button",{className:"btn-primary"},"Buscar")),r.a.createElement("div",null,r.a.createElement(Q,{localidades:b}))),r.a.createElement("div",{className:"col d-flex"},s?s.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{src:e.posterPelicula,alt:e.idNombrePelicula,className:"d-block w-75"}),r.a.createElement(z,{movie:e}))}):null))},X=function(){var e=Object(n.useContext)(N).state;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.d,null,r.a.createElement(R,{path:"/registro",exact:!0,component:U,isAuthenticated:e.logged}),r.a.createElement(D,{path:"/admin",exact:!0,component:$,isAuthenticated:e.logged,admin:e.admin}),r.a.createElement(R,{path:"/buscarPelicula",exact:!0,component:W,isAuthenticated:e.logged})))},ee=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},te=function(){var e=Object(n.useReducer)(F,{},ee),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){localStorage.setItem("user",JSON.stringify(a))},[a]),r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(L,null)),r.a.createElement(s.b,null,r.a.createElement(m.d,null,r.a.createElement(N.Provider,{value:{state:a,dispatch:c}},r.a.createElement(m.b,{path:"/",exact:!0,component:A}),r.a.createElement(X,null)))),r.a.createElement("div",null,r.a.createElement(T,null))))};l.a.render(r.a.createElement(te,null),document.getElementById("root")),o()}},[[56,1,2]]]);
//# sourceMappingURL=main.df0b27da.chunk.js.map