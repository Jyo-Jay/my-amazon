"use strict";(self.webpackChunkamazon=self.webpackChunkamazon||[]).push([[357],{6209:(c,a,r)=>{r.d(a,{B:()=>s});var o=r(8256);let s=(()=>{class _{transform(l,i=5){return l-l*i/100}}return _.\u0275fac=function(l){return new(l||_)},_.\u0275pipe=o.Yjl({name:"discount",type:_,pure:!0}),_})()},1196:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ProductDetailsComponent});var _angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(433),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8256),_angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9965),_services_product_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6082),_services_cart_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(910),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6895),_star_star_component__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4126),_discount_pipe__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6209);function ProductDetailsComponent_div_59_span_1_Template(c,a){1&c&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(1," Please Enter Review "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA())}function ProductDetailsComponent_div_59_span_2_Template(c,a){1&c&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"span"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(1," Please Enter atleast 20 characters "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA())}function ProductDetailsComponent_div_59_Template(c,a){if(1&c&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"div",28),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(1,ProductDetailsComponent_div_59_span_1_Template,2,0,"span",29),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(2,ProductDetailsComponent_div_59_span_2_Template,2,0,"span",29),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&c){const r=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",null==r.review.errors?null:r.review.errors.required),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",null==r.review.errors?null:r.review.errors.minlength)}}let ProductDetailsComponent=(()=>{class ProductDetailsComponent{constructor(c,a,r){this.activateroute=c,this.productservice=a,this.cartservice=r,this.discountrate=10,this.reviewform=new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.cw({review:new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NI("",[_angular_forms__WEBPACK_IMPORTED_MODULE_1__.kI.required])})}ngOnInit(){let id=eval(this.activateroute.snapshot.paramMap.get("id"));this.productservice.getProducts().subscribe({next:c=>{this.product=c.find(a=>a.productId==id)}})}addToCart(){this.cartservice.increaseCartCounter()}get review(){return this.reviewform.get("review")}onSubmit(){console.log(this.reviewform.value),this.reviewform.reset()}}return ProductDetailsComponent.\u0275fac=function c(a){return new(a||ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_router__WEBPACK_IMPORTED_MODULE_2__.gz),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_services_product_service__WEBPACK_IMPORTED_MODULE_3__.M),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.N))},ProductDetailsComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({type:ProductDetailsComponent,selectors:[["app-product-details"]],decls:64,vars:21,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-sm-6"],[1,"img-fluid",3,"src"],[1,"text-center"],[1,"table"],[2,"font-size","16px"],[3,"rating"],[1,"row","d-flex","justify-content-center"],[1,"col-sm-4"],["type","submit","value","Add To Cart",1,"btn","btn-warning",3,"click"],["type","submit","data-bs-toggle","modal","data-bs-target","#review","value","Write Review",1,"btn","btn-light"],["id","review","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","review"],["type","textarea","id","review","formControlName","review","minlength","20",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","submit","value","Save",1,"btn","btn-outline-success",3,"disabled"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function c(a,r){1&a&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"div",0)(1,"div",1)(2,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(3,"img",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(4,"div",2)(5,"h3",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ALo(7,"titlecase"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(8,"table",5)(9,"tr")(10,"th"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(11,"Type"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(12,"td"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(13),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(14,"tr")(15,"th"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(16,"Orignal Price"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(17,"td"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(18),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ALo(19,"currency"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(20,"tr")(21,"th"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(22,"Discounted Price"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(23,"td"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(24),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ALo(25,"currency"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ALo(26,"discount"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(27,"tr")(28,"th"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(29,"Description"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(30,"td"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(31),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(32,"tr")(33,"th"),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(34,"Rating"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(35,"td",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(36,"app-star",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(37,"div",8)(38,"div",9)(39,"input",10),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("click",function(){return r.addToCart()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(40,"div",9),_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(41,"input",11),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(42,"div",9),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(43,"div",12)(44,"div",13)(45,"div",14)(46,"div",15)(47,"h5",16),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(48,"Write your review here"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(49,"button",17),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(50,"div",18)(51,"div",19)(52,"div",1)(53,"form",20),_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("ngSubmit",function(){return r.onSubmit()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(54,"div",21)(55,"label",22),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(56,"Review"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(57,"textarea",23),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(58," "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(59,ProductDetailsComponent_div_59_Template,3,2,"div",24),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(60,"input",25),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()()(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(61,"div",26)(62,"button",27),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(63,"Close"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()()()()()),2&a&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("src",r.product.productImg,_angular_core__WEBPACK_IMPORTED_MODULE_0__.LSH),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_0__.lcZ(7,10,r.product.productName)," "),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(r.product.productType),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__.xi3(19,12,r.product.productPrice,"INR")),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_0__.xi3(25,15,_angular_core__WEBPACK_IMPORTED_MODULE_0__.xi3(26,18,r.product.productPrice,r.discountrate),"INR")),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Oqu(r.product.productDesc),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("rating",r.product.rating),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(17),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("formGroup",r.reviewform),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",r.review.invalid&&(r.review.touched||r.review.dirty)),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("disabled",r.reviewform.invalid))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.O5,_angular_forms__WEBPACK_IMPORTED_MODULE_1__._Y,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Fj,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.JJ,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.JL,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.wO,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.sg,_angular_forms__WEBPACK_IMPORTED_MODULE_1__.u,_star_star_component__WEBPACK_IMPORTED_MODULE_6__.u,_angular_common__WEBPACK_IMPORTED_MODULE_5__.rS,_angular_common__WEBPACK_IMPORTED_MODULE_5__.H9,_discount_pipe__WEBPACK_IMPORTED_MODULE_7__.B]}),ProductDetailsComponent})()},8357:(c,a,r)=>{r.r(a),r.d(a,{ProductModule:()=>U});var o=r(6895),s=r(9965),_=r(8256),u=r(910),l=r(6082),i=r(4126);let d=(()=>{class t{constructor(e){this.element=e}onMouseOver(){this.element.nativeElement.style.color="orange"}onMouseOut(){this.element.nativeElement.style.color="black"}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(_.SBq))},t.\u0275dir=_.lG2({type:t,selectors:[["","appTextColor",""]],hostBindings:function(e,n){1&e&&_.NdJ("mouseover",function(){return n.onMouseOver()})("mouseout",function(){return n.onMouseOut()})}}),t})();var D=r(6209);const O=function(t){return["/product","product-details",t]};function M(t,E){if(1&t){const e=_.EpF();_.TgZ(0,"div",3)(1,"div",4),_._UZ(2,"img",5),_.TgZ(3,"div",6)(4,"h5",7),_._uU(5),_.ALo(6,"titlecase"),_.qZA(),_.TgZ(7,"p",8),_._uU(8),_.ALo(9,"titlecase"),_.qZA(),_.TgZ(10,"p",9)(11,"del"),_._uU(12),_.ALo(13,"currency"),_.qZA(),_._uU(14),_.ALo(15,"currency"),_.ALo(16,"discount"),_.qZA(),_.TgZ(17,"app-star",10),_.NdJ("clickRating",function(P){_.CHM(e);const L=_.oxw();return _.KtG(L.show(P))}),_.qZA(),_.TgZ(18,"p",11)(19,"button",12),_.NdJ("click",function(){_.CHM(e);const P=_.oxw();return _.KtG(P.addToCart())}),_._UZ(20,"i",13),_.qZA(),_.TgZ(21,"button",14),_._UZ(22,"i",15),_.qZA()()()()()}if(2&t){const e=E.$implicit,n=_.oxw();_.xp6(2),_.Q6J("src",e.productImg,_.LSH),_.xp6(2),_.Akn(n.styleclass),_.xp6(1),_.Oqu(_.lcZ(6,14,e.productName)),_.xp6(2),_.Akn(n.styleclass),_.xp6(1),_.Oqu(_.lcZ(9,16,e.productType)),_.xp6(2),_.Akn(n.styleclass),_.xp6(2),_.Oqu(_.xi3(13,18,e.productPrice,"INR")),_.xp6(2),_.AsE("\xa0",_.xi3(15,21,_.xi3(16,24,e.productPrice,n.discountrate),"INR")," (",n.discountrate,"% off)"),_.xp6(3),_.Q6J("rating",e.rating),_.xp6(4),_.Q6J("routerLink",_.VKq(27,O,e.productId))}}const C=[{path:"list",component:(()=>{class t{constructor(e,n){this.cartService=e,this.productservice=n,this.productList=[],this.styleclass={"text-align":"left"},this.styleText={"font-weight":"bold","font-size":"14px"},this.discountrate=10}ngOnInit(){this.productservice.getProducts().subscribe({next:e=>this.productList=e,error:e=>console.error("Error",e),complete:()=>console.log("Done")})}show(e){console.log(e)}addToCart(){this.cartService.increaseCartCounter()}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(u.N),_.Y36(l.M))},t.\u0275cmp=_.Xpm({type:t,selectors:[["app-list"]],decls:3,vars:1,consts:[[1,"container"],[1,"row"],["class","col-md-6 col-lg-4 col-xl-3",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4","col-xl-3"],[1,"card",2,"width","18rem","margin-top","50px"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],["appTextColor","",1,"card-title"],["appTextColor","",1,"card-text"],[1,"card-text"],[3,"rating","clickRating"],[1,"text-center"],[1,"btn","btn-outline-primary","m-2",3,"click"],[1,"bi","bi-cart-plus"],[1,"btn","btn-outline-primary","m-2",3,"routerLink"],[1,"bi","bi-eye-fill"]],template:function(e,n){1&e&&(_.TgZ(0,"main",0)(1,"div",1),_.YNc(2,M,23,29,"div",2),_.qZA()()),2&e&&(_.xp6(2),_.Q6J("ngForOf",n.productList))},dependencies:[o.sg,s.rH,i.u,d,o.rS,o.H9,D.B],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 0 10px #00605e4d}.bottom-border[_ngcontent-%COMP%]{padding-bottom:5px}"]}),t})()},{path:"product-details/:id",component:r(1196).Z},{path:"view-cart",component:(()=>{class t{constructor(e,n){this.cartservice=e,this.activatedroute=n,this.discount=10}ngOnInit(){let e=this.activatedroute.snapshot.params.id;this.cartservice.getCartItems().subscribe({next:n=>{this.cart=n.find(P=>P._id==e)}})}}return t.\u0275fac=function(e){return new(e||t)(_.Y36(u.N),_.Y36(s.gz))},t.\u0275cmp=_.Xpm({type:t,selectors:[["app-view-cart"]],decls:41,vars:0,consts:[[1,"container","divStyle"],[1,"row","bg-dark","headStyle"],[1,"col-sm-2",2,"margin","20px 0px 20px 0px"],[1,"col-sm-7","row",2,"margin","20px 0px 20px 0px"],[1,"col-sm-4"],[1,"col-sm-1",2,"margin","20px 0px 20px 0px"],[1,"row","rowStyle"],[1,"col-sm-2"],["src","",1,"img-fluid",2,"width","80px","height","100px"],[1,"col-sm-7"],[1,"row"],[1,"btn","btn-outline-warning"],[1,"col-sm-1"],[1,"bi","bi-trash"],[1,"col-sm-10"],[1,"btn","btn-outline-warning",2,"float","right"]],template:function(e,n){1&e&&(_.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"b"),_._uU(4,"Items"),_.qZA()(),_.TgZ(5,"div",3)(6,"div",4)(7,"b"),_._uU(8,"Product"),_.qZA()(),_.TgZ(9,"div",4)(10,"b"),_._uU(11,"Description"),_.qZA()(),_.TgZ(12,"div",4)(13,"b"),_._uU(14,"Amount"),_.qZA()()(),_.TgZ(15,"div",2)(16,"b"),_._uU(17,"Quantity"),_.qZA()(),_._UZ(18,"div",5),_.qZA(),_.TgZ(19,"div",6)(20,"div",7),_._UZ(21,"img",8),_.qZA(),_.TgZ(22,"div",9)(23,"div",10)(24,"div",4),_._UZ(25,"b"),_.qZA(),_._UZ(26,"div",4)(27,"div",4),_.qZA()(),_.TgZ(28,"div",7)(29,"button",11),_._uU(30,"+"),_.qZA(),_._uU(31," 3 "),_.TgZ(32,"button",11),_._uU(33,"-"),_.qZA()(),_.TgZ(34,"div",12),_._UZ(35,"i",13),_.qZA()(),_.TgZ(36,"div",10),_._UZ(37,"div",14),_.TgZ(38,"div",7)(39,"button",15),_._uU(40,"Check Out"),_.qZA()()()())},styles:[".divStyle[_ngcontent-%COMP%]{margin-top:50px;padding-top:50px;padding-bottom:169px}.rowStyle[_ngcontent-%COMP%]{border:solid 1px rgb(211,211,211);border-radius:12px;margin-bottom:13px;display:flex;align-items:center}.headStyle[_ngcontent-%COMP%]{color:#f5f5f5;border-radius:6px}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[s.Bz.forChild(C),s.Bz]}),t})();var m=r(4466);let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=_.oAB({type:t}),t.\u0275inj=_.cJS({imports:[o.ez,A,m.m]}),t})()},4126:(c,a,r)=>{r.d(a,{u:()=>s});var o=r(8256);let s=(()=>{class _{constructor(){this.color="gold",this.clickRating=new o.vpe}ngOnInit(){}onClick(){this.clickRating.emit(this.rating)}}return _.\u0275fac=function(l){return new(l||_)},_.\u0275cmp=o.Xpm({type:_,selectors:[["app-star"]],inputs:{rating:"rating"},outputs:{clickRating:"clickRating"},decls:7,vars:12,consts:[[1,"star-container"],[2,"width","80px",3,"click"],[1,"bi","bi-star-fill"]],template:function(l,i){1&l&&(o.TgZ(0,"div",0)(1,"div",1),o.NdJ("click",function(){return i.onClick()}),o._UZ(2,"i",2)(3,"i",2)(4,"i",2)(5,"i",2)(6,"i",2),o.qZA()()),2&l&&(o.Udp("width",16*i.rating,"px"),o.xp6(2),o.Udp("color",i.color),o.xp6(1),o.Udp("color",i.color),o.xp6(1),o.Udp("color",i.color),o.xp6(1),o.Udp("color",i.color),o.xp6(1),o.Udp("color",i.color))},styles:[".star-container[_ngcontent-%COMP%]{overflow:hidden;cursor:pointer}"]}),_})()},6082:(c,a,r)=>{r.d(a,{M:()=>_});var o=r(8256),s=r(529);let _=(()=>{class u{constructor(i){this.http=i,this.apiURL="http://localhost:4200/assets/product.json"}getProducts(){return this.products$=this.http.get(this.apiURL),this.products$}}return u.\u0275fac=function(i){return new(i||u)(o.LFG(s.eN))},u.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);