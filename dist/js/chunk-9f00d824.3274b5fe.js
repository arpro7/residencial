(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f00d824"],{"5dc0":function(e,t,r){"use strict";r.r(t);var c=r("7a23"),a=r("85bf"),s=r.n(a),o={class:"auth-page-wrapper pt-5"},n=Object(c["createElementVNode"])("div",{class:"auth-one-bg-position auth-one-bg",id:"auth-particles"},[Object(c["createElementVNode"])("div",{class:"bg-overlay"}),Object(c["createElementVNode"])("div",{class:"shape"},[Object(c["createElementVNode"])("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1440 120"},[Object(c["createElementVNode"])("path",{d:"M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"})])])],-1),i={class:"auth-page-content"},l={class:"container"},d={class:"row"},m={class:"col-lg-12"},u={class:"text-center mt-sm-5 mb-4 text-white-50"},b=Object(c["createElementVNode"])("img",{src:s.a,alt:"",height:"20"},null,-1),O=Object(c["createElementVNode"])("p",{class:"mt-3 fs-15 fw-medium"},"Aplicaciones Progresivas y Responsivas",-1),j={class:"row justify-content-center"},p={class:"col-md-8 col-lg-6 col-xl-5"},v={class:"card mt-4"},g={class:"card-body p-4"},V=Object(c["createElementVNode"])("div",{class:"text-center mt-2"},[Object(c["createElementVNode"])("h5",{class:"text-primary"},"Crear Cuenta Nueva"),Object(c["createElementVNode"])("p",{class:"text-muted"},[Object(c["createTextVNode"])(" ARPROapp te ayuda a simplificar la gestión"),Object(c["createElementVNode"])("br"),Object(c["createTextVNode"])(" del negocio, automatizando tareas administrativas. ")])],-1),f={class:"p-2 mt-4"},E=Object(c["createTextVNode"])("Registration successfull."),N={class:"mb-3"},h=Object(c["createElementVNode"])("label",{for:"useremail",class:"form-label"},[Object(c["createTextVNode"])("Correo Electrónico "),Object(c["createElementVNode"])("span",{class:"text-danger"},"*")],-1),w={key:0},x={class:"mb-3"},y=Object(c["createElementVNode"])("label",{for:"username",class:"form-label"},[Object(c["createTextVNode"])("Nombre de Usuario "),Object(c["createElementVNode"])("span",{class:"text-danger"},"*")],-1),k={key:0,class:"invalid-feedback"},$={key:0},C={class:"mb-2"},T=Object(c["createElementVNode"])("label",{for:"userpassword",class:"form-label"},[Object(c["createTextVNode"])("Contraseña "),Object(c["createElementVNode"])("span",{class:"text-danger"},"*")],-1),R={key:0,class:"invalid-feedback"},B={key:0},q=Object(c["createStaticVNode"])('<div class="mb-4"><p class="mb-0 fs-12 text-muted fst-italic"> Al continuar confirmas que aceptas nuestros <a href="#" class="text-primary text-decoration-underline fst-normal fw-medium">Términos y condiciones</a> , <a href="#" class="text-primary text-decoration-underline fst-normal fw-medium"> Política de Privacidad y Cookies.</a></p></div><div class="mt-4"><button class="btn btn-success w-100" type="submit">Registrar Cuenta</button></div>',2),S={class:"mt-4 text-center"},D={class:"mb-0"},M=Object(c["createTextVNode"])(" Tienes una cuenta ? "),z=Object(c["createTextVNode"])(" Inicie Sesión "),I={class:"footer"},P={class:"container"},U={class:"row"},A={class:"col-lg-12"},_={class:"text-center"},F={class:"mb-0 text-muted"};function L(e,t,r,a,s,L){var J=Object(c["resolveComponent"])("router-link"),Y=Object(c["resolveComponent"])("b-alert");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[n,Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",null,[Object(c["createVNode"])(J,{to:"/",class:"d-inline-block auth-logo"},{default:Object(c["withCtx"])((function(){return[b]})),_:1})]),O])])]),Object(c["createElementVNode"])("div",j,[Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("div",g,[V,Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("form",{class:"needs-validation",onSubmit:t[5]||(t[5]=Object(c["withModifiers"])((function(){return L.tryToRegisterIn&&L.tryToRegisterIn.apply(L,arguments)}),["prevent"]))},[Object(c["createVNode"])(Y,{modelValue:s.registerSuccess,"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.registerSuccess=e}),class:"mt-3",variant:"success",dismissible:""},{default:Object(c["withCtx"])((function(){return[E]})),_:1},8,["modelValue"]),Object(c["createVNode"])(Y,{modelValue:s.isRegisterError,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.isRegisterError=e}),class:"mt-3",variant:"danger",dismissible:""},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(s.regError),1)]})),_:1},8,["modelValue"]),L.notification.message?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:Object(c["normalizeClass"])("alert "+L.notification.type)},Object(c["toDisplayString"])(L.notification.message),3)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",N,[h,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"email",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":s.submitted&&a.v$.user.email.$error}]),"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.user.email=e}),id:"useremail",placeholder:"Ingresar correo electrónico",required:""},null,2),[[c["vModelText"],s.user.email]]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.v$.user.email.$errors,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t,class:"invalid-feedback"},[e.$message?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",w,Object(c["toDisplayString"])(e.$message),1)):Object(c["createCommentVNode"])("",!0)])})),128))]),Object(c["createElementVNode"])("div",x,[y,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":s.submitted&&a.v$.user.username.$error}]),"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.user.username=e}),id:"username",placeholder:"Ingresar nombre de usuario",required:""},null,2),[[c["vModelText"],s.user.username]]),s.submitted&&a.v$.user.username.$error?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",k,[a.v$.user.username.required.$message?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",$,Object(c["toDisplayString"])(a.v$.user.username.required.$message),1)):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",C,[T,Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"password",class:Object(c["normalizeClass"])(["form-control",{"is-invalid":s.submitted&&a.v$.user.password.$error}]),"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.user.password=e}),id:"userpassword",placeholder:"Ingresar contraseña",required:""},null,2),[[c["vModelText"],s.user.password]]),s.submitted&&a.v$.user.password.$error?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",R,[a.v$.user.password.required.$message?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",B,Object(c["toDisplayString"])(a.v$.user.password.required.$message),1)):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)]),q],32)])])]),Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("p",D,[M,Object(c["createVNode"])(J,{to:"/login",class:"fw-semibold text-primary text-decoration-underline"},{default:Object(c["withCtx"])((function(){return[z]})),_:1})])])])])])]),Object(c["createElementVNode"])("footer",I,[Object(c["createElementVNode"])("div",P,[Object(c["createElementVNode"])("div",U,[Object(c["createElementVNode"])("div",A,[Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("p",F,"© "+Object(c["toDisplayString"])((new Date).getFullYear())+" ARPROapp",1)])])])])])])}var J=r("5530"),Y=r("e3e1"),G=r("25a0"),H=r("5502"),K=r("4d77"),Q={setup:function(){return{v$:Object(G["a"])()}},page:{title:"Register"},components:{},data:function(){return{user:{username:"",email:"",password:""},submitted:!1,regError:null,tryingToRegister:!1,isRegisterError:!1,registerSuccess:!1}},validations:{user:{username:{required:Y["b"].withMessage("Este campo es requerido",Y["c"])},email:{required:Y["b"].withMessage("Este campo es requerido",Y["c"]),email:Y["b"].withMessage("Por favor introduzca un correo electrónico válido",Y["a"])},password:{required:Y["b"].withMessage("Este campo es requerido",Y["c"])}}},computed:Object(J["a"])(Object(J["a"])({},Object(H["d"])("authfack",["status"])),{},{notification:function(){return this.$store?this.$store.state.notification:null}}),methods:Object(J["a"])(Object(J["a"])(Object(J["a"])(Object(J["a"])({},K["b"]),K["a"]),K["e"]),{},{tryToRegisterIn:function(){var e=this;if(this.submitted=!0,this.v$.$touch(),!this.v$.$invalid)return this.tryingToRegister=!0,this.regError=null,this.register({username:this.user.username,email:this.user.email,password:this.user.password}).then((function(t){e.tryingToRegister=!1,e.isRegisterError=!1,e.registerSuccess=!0,e.registerSuccess&&e.$router.push(e.$route.query.redirectFrom||{name:"default"})})).catch((function(t){e.tryingToRegister=!1,e.regError=t||"",e.isRegisterError=!0}))}})},W=r("6b0d"),X=r.n(W);const Z=X()(Q,[["render",L]]);t["default"]=Z},"85bf":function(e,t,r){e.exports=r.p+"img/logo-light-arpro.c28922aa.png"}}]);
//# sourceMappingURL=chunk-9f00d824.3274b5fe.js.map