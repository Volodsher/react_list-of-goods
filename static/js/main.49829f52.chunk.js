(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(8),s=n.n(l),c=n(2),r=n(3),i=n(5),u=n(4),m=n(6),p=n(1),b=(n(14),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={list:Object(p.a)(n.props.goods),nativeList:Object(p.a)(n.props.goods),selectedOption:1},n.reset=function(){return n.setState(function(t){return{list:Object(p.a)(t.nativeList)}})},n.reverseList=function(){return n.setState(function(t){return{list:Object(p.a)(t.list).reverse()}})},n.abcList=function(){return n.setState(function(t){return{list:Object(p.a)(t.list).sort()}})},n.listLength=function(){return n.setState(function(t){return{list:Object(p.a)(t.list).sort(function(t,e){return t.length-e.length})}})},n.handleSelect=function(t){var e=t.target.value;n.setState(function(t){return{selectedOption:e,list:Object(p.a)(t.list).filter(function(t){return t.length>=e})}})},n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state,e=t.selectedOption,n=t.handleSelect;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{align:"center",className:"title"},"List of Goods"),o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"actions"},o.a.createElement("button",{type:"button",className:"button-actions",onClick:this.reverseList},"Reverse"),o.a.createElement("button",{type:"button",className:"button-actions",onClick:this.abcList},"Sort alphabetically"),o.a.createElement("button",{type:"button",className:"button-actions",onClick:this.listLength},"Sort by length"),o.a.createElement("button",{type:"button",className:"button-actions",onClick:this.reset},"Reset"),o.a.createElement("select",{className:"select",name:"good-length",id:"selectedLength",onChange:n,value:e},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10"))),o.a.createElement("ul",{className:"list-goods"},this.state.list.map(function(t){return o.a.createElement("li",{key:t},t)}))))}}]),e}(o.a.PureComponent)),h=(n(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),v=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(i.a)(this,Object(u.a)(e).call(this))).state={showMe:null,hideMe:!0},t}return Object(m.a)(e,t),Object(r.a)(e,[{key:"operation",value:function(){this.setState({showMe:!0,hideMe:null})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"app"},this.state.showMe?o.a.createElement(b,{goods:h}):null,this.state.hideMe?o.a.createElement("button",{className:"start-button",type:"button",onClick:function(){t.operation()}},"Start"):null)}}]),e}(o.a.Component);s.a.render(o.a.createElement(v,{test:123}),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.49829f52.chunk.js.map