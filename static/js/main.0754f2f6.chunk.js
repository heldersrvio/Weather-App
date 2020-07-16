(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),i=a.n(c),u=a(1),m=a.n(u),o=a(3),p=a(2),s=(a(12),function(e){var t=Object(r.useState)("C"),a=Object(p.a)(t,2),c=a[0],i=a[1],u=Object(r.useState)(e.temperature-273),m=Object(p.a)(u,2),o=m[0],s=m[1],l=Object(r.useState)(e.minimumTemperature-273),h=Object(p.a)(l,2),d=h[0],f=h[1],v=Object(r.useState)(e.maximumTemperature-273),w=Object(p.a)(v,2),b=w[0],E=w[1];return Object(r.useEffect)((function(){"C"===c?(s(e.temperature-273),f(e.minimumTemperature-273),E(e.maximumTemperature-273)):(s(1.8*e.temperature-459.67),f(1.8*e.minimumTemperature-459.67),E(1.8*e.maximumTemperature-459.67))}),[c,e.temperature,e.maximumTemperature,e.minimumTemperature]),n.a.createElement("div",{id:"weather-card"},n.a.createElement("div",{id:"city-name"},n.a.createElement("h2",null,e.cityName.toUpperCase())),n.a.createElement("div",{id:"toggle-units-buttons"},n.a.createElement("button",{onClick:function(){i("C")},className:"C"===c?"active":"inactive"},"\xb0C"),n.a.createElement("button",{onClick:function(){i("F")},className:"F"===c?"active":"inactive"},"\xb0F")),n.a.createElement("div",{id:"icon"},n.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weatherIcon,"@2x.png"),alt:e.weatherDescription})),n.a.createElement("div",{id:"weather-conditions"},n.a.createElement("span",{id:"weather-main"},e.weatherMain),n.a.createElement("br",null),n.a.createElement("span",{id:"weather-description"},e.weatherDescription)),n.a.createElement("div",{id:"temperatures"},n.a.createElement("div",{id:"main-temperature"},n.a.createElement("span",null,Math.round(o),"\xb0")),n.a.createElement("div",{id:"min-max-temperatures"},n.a.createElement("span",null,Math.round(d),"\xb0 | ",Math.round(b),"\xb0F"))))}),l=(a(13),function(e){var t=Object(r.useState)(""),a=Object(p.a)(t,2),c=a[0],i=a[1],u=e.hasError?n.a.createElement("div",{id:"error-message"},n.a.createElement("span",null,"Location could not be found")):null;return n.a.createElement("div",{id:"search-bar"},n.a.createElement("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),n.a.createElement("br",null),u,n.a.createElement("div",{id:"search-button"},n.a.createElement("button",{onClick:function(){e.lookUpWeatherInformation(c)}},"Search")))}),h=(a(14),"c631b7482cbdada87723b245f6c46e0e"),d=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)({weatherMain:"--",weatherDescription:"--",weatherIcon:"01d",temperature:273,minimumTemperature:273,maximumTemperature:273,cityName:"--"}),u=Object(p.a)(i,2),d=u[0],f=u[1],v=function(){var e=Object(o.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("San Francisco");case 3:return t=e.sent,e.next=6,j(t);case 6:a=e.sent,c(!1),f(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),c(!0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.geolocation){e.next=15;break}return e.prev=1,a=navigator.geolocation.getCurrentPosition(E),e.next=5,j(a);case 5:t=e.sent,c(!1),f(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),v();case 13:e.next=16;break;case 15:v();case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:return a=e.sent,e.next=6,j(a);case 6:r=e.sent,c(!1),f(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),c(!0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api.openweathermap.org/data/2.5/weather?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude,"&appid=").concat(h),{mode:"cors"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(h),{mode:"cors"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.json();case 3:return a=e.sent,e.abrupt("return",{weatherMain:a.weather[0].main,weatherDescription:a.weather[0].description,weatherIcon:a.weather[0].icon,temperature:a.main.temp,minimumTemperature:a.main.temp_min,maximumTemperature:a.main.temp_max,cityName:a.name});case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Not able to convert fetch to json");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return w(),n.a.createElement("div",{id:"App",className:"--"!==d.weatherMain?d.weatherMain:"Generic"},n.a.createElement(s,{weatherMain:d.weatherMain,weatherDescription:d.weatherDescription,weatherIcon:d.weatherIcon,temperature:d.temperature,minimumTemperature:d.minimumTemperature,maximumTemperature:d.maximumTemperature,cityName:d.cityName}),n.a.createElement(l,{hasError:a,lookUpWeatherInformation:b}))};a(15);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.0754f2f6.chunk.js.map