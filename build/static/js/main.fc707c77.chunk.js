(this["webpackJsonptest-sayna"]=this["webpackJsonptest-sayna"]||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/login.13df3a61.svg"},34:function(e,a,t){e.exports=t.p+"static/media/auth.c8206a1e.svg"},35:function(e,a,t){e.exports=t.p+"static/media/update.65077990.svg"},37:function(e,a,t){e.exports=t(68)},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(15),r=t.n(s),o=t(13),c=t(4),m=t(17),i=t.n(m),u=function(e){if("undefined"!==window)return i.a.get(e)},d=function(e,a){var t,n;console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE",e),t="token",n=e.data.token,"undefined"!==window&&i.a.set(t,n,{expires:1}),function(e,a){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(a))}("user",e.data.user),a()},f=function(){if("undefined"!==window&&u("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},g=function(e){var a;a="token","undefined"!==window&&i.a.remove(a,{expires:1}),function(e){"undefined"!==window&&localStorage.removeItem(e)}("user"),e()},x=t(5);var p=function(e){var a=e.history;return l.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},l.a.createElement(x.a,null),l.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},l.a.createElement("div",{className:"lg:w-1/2 xl:w-8/12 p-6 sm:p-12"},l.a.createElement("div",{className:"mt-12 flex flex-col items-center"},l.a.createElement("h1",{className:"text-2xl xl:text-2xl font-extrabold  text-center "},"Welcome"),l.a.createElement("div",{className:"w-full flex-1 mt-8 text-indigo-500"},l.a.createElement("div",{className:"my-12 border-b text-center"},l.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Features")),l.a.createElement("div",{className:"mx-auto max-w-xs relative "},l.a.createElement(o.b,{to:"/private",className:"mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},l.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),l.a.createElement("span",{className:"ml-3"},"Profile Dashboard")),l.a.createElement(o.b,{to:"/users",className:"mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},l.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),l.a.createElement("span",{className:"ml-3"},"Admin Dashboard")),l.a.createElement("button",{onClick:function(){g((function(){x.b.error("Signout Successfully"),a.push("/")}))},className:"mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},l.a.createElement("i",{className:"fas fa-sign-out-alt  w-6  -ml-2"}),l.a.createElement("span",{className:"ml-3"},"Signout"))))))))},b=t(14),h=t(3),y=t(12),w=t(33),E=t.n(w),N=t(11),v=t.n(N);t(63).config();var j=function(e){var a=e.history,t=Object(n.useState)({email:"",password:""}),s=Object(y.a)(t,2),r=s[0],o=s[1],m=r.email,i=r.password,u=function(e){return function(a){o(Object(h.a)(Object(h.a)({},r),{},Object(b.a)({},e,a.target.value)))}};return l.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},f()?l.a.createElement(c.a,{to:"/"}):null,l.a.createElement(x.a,null),l.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},l.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},l.a.createElement("div",{className:"mt-12 flex flex-col items-center"},l.a.createElement("h1",{className:"text-2xl xl:text-3xl font-extrabold"},"Sign In"),l.a.createElement("div",{className:"w-full flex-1 mt-8 text-indigo-500"},l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/register",target:"_self"},l.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6  -ml-2 text-green-500"}),l.a.createElement("span",{className:"ml-4"},"Sign Up"))),l.a.createElement("div",{className:"my-12 border-b text-center"},l.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Or Sign In with e-mail")),l.a.createElement("form",{className:"mx-auto max-w-xs relative ",onSubmit:function(e){e.preventDefault(),m&&i?(o(Object(h.a)({},r)),v.a.post("".concat("http://localhost:8000","/api/signin"),{email:m,password:i}).then((function(e){d(e,(function(){o(Object(h.a)(Object(h.a)({},r),{},{email:"",password:""})),f()&&"admin"===f().role?a.push("/admin"):a.push("/private"),x.b.success("Hey ".concat(e.data.user.firstname,", Welcome back!"))}))})).catch((function(e){o(Object(h.a)(Object(h.a)({},r),{},{email:"",password:""})),console.log(e.response),x.b.error("User Not found Please Sign Up")}))):x.b.error("Please fill all fields")}},l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"email",placeholder:"Email",onChange:u("email"),value:m}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"current-password",placeholder:"Password",onChange:u("password"),value:i}),l.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-green-400 text-gray-100 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},l.a.createElement("i",{className:"fas fa-sign-in-alt  w-6  -ml-2"}),l.a.createElement("span",{className:"ml-3"},"Sign In")),l.a.createElement("div",{className:"my-12 border-b text-center"},l.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Go To Home")),l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/",target:"_self"},l.a.createElement("i",{className:"fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500"}),l.a.createElement("span",{className:"ml-4"},"Home"))))))),l.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},l.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(E.a,")")}}))),";")},O=t(34),S=t.n(O),k=function(e){var a=e.history,t=Object(n.useState)({firstname:"",lastname:"",email:"",password:"",password_confirmation:"",date_naissance:"",sexe:"",textChange:"Sign Up"}),s=Object(y.a)(t,2),r=s[0],o=s[1],m=r.firstname,i=r.lastname,u=r.email,d=r.password,g=r.password_confirmation,p=r.date_naissance,w=r.sexe,E=r.textChange,N=function(e){return function(a){o(Object(h.a)(Object(h.a)({},r),{},Object(b.a)({},e,a.target.value)))}};return l.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},f()?l.a.createElement(c.a,{to:"/"}):null,l.a.createElement(x.a,null),l.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},l.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},l.a.createElement("div",{className:"mt-12 flex flex-col items-center"},l.a.createElement("h1",{className:"text-2xl xl:text-3xl font-extrabold"},"Sign Up"),l.a.createElement("form",{className:"w-full flex-1 mt-8 text-indigo-500",onSubmit:function(e){e.preventDefault(),m&&i&&u&&d&&p&&w?d===g?(o(Object(h.a)(Object(h.a)({},r),{},{textChange:"Submitting"})),v.a.post("".concat("http://localhost:8000","/api/signup"),{firstname:m,lastname:i,email:u,password:d,password_confirmation:g,date_naissance:p,sexe:w}).then((function(e){o(Object(h.a)(Object(h.a)({},r),{},{firstname:"",lastname:"",email:"",password:"",password_confirmation:"",date_naissance:"",sexe:"",textChange:"Submitted"})),console.log(e),x.b.success(e.data.message),a.push("/login")})).catch((function(e){o(Object(h.a)(Object(h.a)({},r),{},{firstname:"",lastname:"",email:"",password:"",password_confirmation:"",date_naissance:"",textChange:"Sign Up"})),console.log(e.response),x.b.error(e.data.message)}))):x.b.error("Passwords don't matches"):x.b.error("Please fill all fields")}},l.a.createElement("div",{className:"mx-auto max-w-xs relative "},l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"First Name",onChange:N("firstname"),value:m}),l.a.createElement("input",{className:"mt-4 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"Last Name",onChange:N("lastname"),value:i}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"email",placeholder:"Email",onChange:N("email"),value:u}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Password",onChange:N("password"),value:d}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Confirm Password",onChange:N("password_confirmation"),value:g}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"date",placeholder:"Date of Birth",onChange:N("date_naissance"),value:p}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"sexe",placeholder:"Male or female",onChange:N("sexe"),value:w}),l.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},l.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6  -ml-2"}),l.a.createElement("span",{className:"ml-3"},E))),l.a.createElement("div",{className:"my-12 border-b text-center"},l.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Or sign with email or social login")),l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/login",target:"_self"},l.a.createElement("i",{className:"fas fa-sign-in-alt fa 1x w-6  -ml-2 text-green-400"}),l.a.createElement("span",{className:"ml-4"},"Sign In"))),l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/",target:"_self"},l.a.createElement("i",{className:"fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500"}),l.a.createElement("span",{className:"ml-4"},"Home")))))),l.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},l.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(S.a,")")}}))),";")},C=t(35),_=t.n(C),I=function(e){var a=e.history,t=Object(n.useState)({firstname:"",lastname:"",email:"",date_naissance:"",sexe:"",password:"",textChange:"Update"}),s=Object(y.a)(t,2),r=s[0],o=s[1];Object(n.useEffect)((function(){var e=u("token");v.a.get("".concat("http://localhost:8000","/users"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var a=e.data,t=a.firstname,n=a.lastname,l=a.email,s=a.date_naissance,c=a.sexe;o(Object(h.a)(Object(h.a)({},r),{},{firstname:t,lastname:n,email:l,date_naissance:s,sexe:c})),console.log(e.data)})).catch((function(e){x.b.error("Error To Your Information ".concat(e.response.statusText)),401===e.response.status&&g((function(){a.push("/login")}))}))}),[]);var c=r.firstname,m=r.lastname,i=r.date_naissance,d=r.sexe,f=r.email,p=r.textChange,w=function(e){return function(a){o(Object(h.a)(Object(h.a)({},r),{},Object(b.a)({},e,a.target.value)))}};return l.a.createElement("div",{className:"min-h-screen bg-gray-100 text-gray-900 flex justify-center"},l.a.createElement(x.a,null),l.a.createElement("div",{className:"max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"},l.a.createElement("div",{className:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"},l.a.createElement("div",{className:"mt-12 flex flex-col items-center"},l.a.createElement("h1",{className:"text-2xl xl:text-3xl font-extrabold"},"Profile Update"),l.a.createElement("form",{className:"w-full flex-1 mt-8 text-green-500",onSubmit:function(e){var a=u("token");console.log(a),e.preventDefault(),o(Object(h.a)(Object(h.a)({},r),{},{textChange:"Submitting"})),v.a.put("".concat("http://localhost:8000","/api/update"),{firstname:c,lastname:m,date_naissance:i,sexe:d,email:f},{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){!function(e,a){if(console.log("UPDATE USER IN LOCALSTORAGE HELPERS",e),"undefined"!==typeof window){var t=JSON.parse(localStorage.getItem("user"));t=e.data,localStorage.setItem("user",JSON.stringify(t))}a()}(e,(function(){x.b.success("Profile Updated Successfully"),o(Object(h.a)(Object(h.a)({},r),{},{textChange:"Update"}))}))})).catch((function(e){console.log(e.response)}))}},l.a.createElement("div",{className:"mx-auto max-w-xs relative "},l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"First Name",onChange:w("firstname"),value:c}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Last Name",onChange:w("lastname"),value:m}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"email",placeholder:"Email",onChange:w("email"),value:f}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"date",placeholder:"Date of Birth",onChange:w("date_naissance"),value:i}),l.a.createElement("input",{className:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Male or Female",onChange:w("sexe"),value:d}),l.a.createElement("button",{type:"submit",className:"mt-5 tracking-wide font-semibold bg-green-400 text-gray-100 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},l.a.createElement("i",{className:"fas fa-user-plus fa 1x w-6  -ml-2"}),l.a.createElement("span",{className:"ml-3"},p))),l.a.createElement("div",{className:"my-12 border-b text-center"},l.a.createElement("div",{className:"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"},"Go To Home")),l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/",target:"_self"},l.a.createElement("i",{className:"fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500"}),l.a.createElement("span",{className:"ml-4"},"Home")),l.a.createElement("button",{onClick:function(){g((function(){x.b.error("Signout Successfully"),a.push("/")}))},className:"mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"},l.a.createElement("i",{className:"fas fa-sign-out-alt  w-6  -ml-2"}),l.a.createElement("span",{className:"ml-3"},"Signout")))))),l.a.createElement("div",{className:"flex-1 bg-indigo-100 text-center hidden lg:flex"},l.a.createElement("div",{className:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(_.a,")")}}))))},P=function(e){e.history;var a=Object(n.useState)([]),t=Object(y.a)(a,2),s=t[0],r=t[1],o=Object(n.useState)(!0),c=Object(y.a)(o,2),m=c[0],i=c[1];return Object(n.useEffect)((function(){v.a.get("".concat("http://localhost:8000","/api/userlist")).then((function(e){console.log(e),r(e.data.users),i(!1)})).catch((function(e){console.log(e),x.b.error("Error To Your Information")}))}),[]),m?l.a.createElement("div",{className:"flex justify-center items-center"},l.a.createElement("div",{className:"mt-48 animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"})):s?s?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-6 flex flex-col"},l.a.createElement("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},l.a.createElement("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},l.a.createElement("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},l.a.createElement("table",{className:"min-w-full divide-y divide-gray-200"},l.a.createElement("thead",{className:"bg-gray-50"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Name"),l.a.createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"date of birth"),l.a.createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),l.a.createElement("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Sexe"))),s&&s.map((function(e,a){return l.a.createElement("tbody",{className:"bg-white divide-y divide-gray-200"},l.a.createElement("tr",null,l.a.createElement("td",{className:"px-6 py-4 whitespace-nowrap"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("div",{className:"flex-shrink-0 h-10 w-10"},l.a.createElement("img",{className:"h-10 w-10 rounded-full",src:"users.png",alt:""})),l.a.createElement("div",{className:"ml-4"},l.a.createElement("div",{key:a,className:"text-sm font-medium text-gray-900"},e.firstname,"  ",e.lastname),l.a.createElement("div",{className:"text-sm text-green-500"},e.email)))),l.a.createElement("td",{className:"px-6 py-4 whitespace-nowrap"},l.a.createElement("div",{className:"text-sm text-gray-900"}),l.a.createElement("div",{className:"text-sm text-gray-500"},e.date_naissance)),l.a.createElement("td",{className:"px-6 py-4 whitespace-nowrap"},l.a.createElement("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},"Active")),l.a.createElement("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},e.sexe)))})))),l.a.createElement("div",{className:"my-12 border-b text-center"})))),l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("a",{className:"w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5",href:"/",target:"_self"},l.a.createElement("i",{className:"fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500"}),l.a.createElement("span",{className:"ml-4"},"Home")))):void 0:l.a.createElement("div",{className:"mt-48 bg-green-500"},"No Result")},U=t(36),H=["component"],T=function(e){var a=e.component,t=Object(U.a)(e,H);return l.a.createElement(c.b,Object.assign({},t,{render:function(e){return f()?l.a.createElement(a,e):l.a.createElement(c.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};t(67);r.a.render(l.a.createElement(o.a,null,l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/",exact:!0,render:function(e){return l.a.createElement(p,e)}}),l.a.createElement(c.b,{path:"/login",exact:!0,render:function(e){return l.a.createElement(j,e)}}),l.a.createElement(c.b,{path:"/register",exact:!0,render:function(e){return l.a.createElement(k,e)}}),l.a.createElement(c.b,{path:"/users",exact:!0,render:function(e){return l.a.createElement(P,e)}}),l.a.createElement(T,{path:"/private",exact:!0,component:I}),l.a.createElement(c.a,{to:"/"}))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.fc707c77.chunk.js.map