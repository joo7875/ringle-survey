(this["webpackJsonpringle-survey"]=this["webpackJsonpringle-survey"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s(1),i=s.n(o),c=s(8),a=s.n(c),l=s(2),r=s(3),u=s(4),d=s(6),g=s(5),h=(s(14),s.p+"static/media/plus.b03e3495.svg"),m=(s(15),function(e){Object(d.a)(s,e);var t=Object(g.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).onOptionChange=function(e){n.setState({option:e.target.value})},n.onDeleteCard=function(e){document.getElementById("card-"+e).remove(),sessionStorage.removeItem("title-"+e),sessionStorage.removeItem("desc-"+e),sessionStorage.removeItem("select-"+e),sessionStorage.removeItem("select-text-"+e)},n.onAddClick=function(e,t){document.getElementById("select-add-"+e+"-"+t).style.display="none",n.setState((function(e){return{selectArr:[].concat(Object(l.a)(e.selectArr),[""])}}))},n.onSubmit=function(e){console.log("--------------------- Ringle Survey ----------------------"),console.log("Survey title: "+sessionStorage.getItem("survey-title")),console.log("Survey description: "+sessionStorage.getItem("survey-desc")),console.log("----------------------------------------------------------");for(var t=0;t<=n.state.id;t++)null!==sessionStorage.getItem("title-"+t)&&console.log("Question title: "+sessionStorage.getItem("title-"+t)),null!==sessionStorage.getItem("desc-"+t)&&console.log("Question description: "+sessionStorage.getItem("desc-"+t)),null!==sessionStorage.getItem("select-"+t)&&console.log(sessionStorage.getItem("select-"+t)),null!==sessionStorage.getItem("select-text-"+t)&&console.log(sessionStorage.getItem("select-text-"+t)),null===sessionStorage.getItem("title-"+t)&&null===sessionStorage.getItem("desc-"+t)&&null===sessionStorage.getItem("select-"+t)&&null===sessionStorage.getItem("select-text-"+t)||console.log("");e.preventDefault()},n.onTitleChange=function(e,t){sessionStorage.setItem("title-"+e,t.target.value)},n.onDescChange=function(e,t){sessionStorage.setItem("desc-"+e,t.target.value)},n.state={selectArr:[""],option:"0",id:n.props.id},n}return Object(u.a)(s,[{key:"onRemoveClick",value:function(e,t){this.state.selectArr.length>1?document.getElementById("select-add-"+e+"-"+(this.state.selectArr.length-2)).style.display="inline-block":this.onDeleteCard(e);var s=Object(l.a)(this.state.selectArr);s.splice(t,1),this.setState({selectArr:s}),sessionStorage.setItem("select-"+e,s)}},{key:"onTextChange",value:function(e,t,s,n){if("2"!==t){var o=Object(l.a)(this.state.selectArr);o[s]=n.target.value,this.setState({selectArr:o}),sessionStorage.setItem("select-"+e,o)}else sessionStorage.setItem("select-text-"+e,n.target.value)}},{key:"render",value:function(){var e=this,t=this.state.id,s=this.state.selectArr,o=this.state.option;return Object(n.jsxs)("div",{id:"card-"+t,className:"question-card",children:[Object(n.jsx)("div",{className:"select-div",children:Object(n.jsxs)("select",{className:"select",value:o,onChange:this.onOptionChange,children:[Object(n.jsx)("option",{value:"0",children:"Single Choice"}),Object(n.jsx)("option",{value:"1",children:"Multiple Choice"}),Object(n.jsx)("option",{value:"2",children:"Short Answer"})]})}),Object(n.jsx)("input",{type:"text",className:"header",placeholder:"Enter a question",onChange:this.onTitleChange.bind(this,t)}),Object(n.jsx)("input",{type:"text",className:"meta",placeholder:"Enter a description",onChange:this.onDescChange.bind(this,t)}),Object(n.jsx)("div",{style:{display:"2"!==o?"block":"none"},children:s.map((function(s,i){return Object(n.jsxs)("div",{className:"bottom-gap",children:[Object(n.jsx)("input",{type:"radio",style:{display:"0"===o?"inline-block":"none"}}),Object(n.jsx)("input",{type:"checkbox",style:{display:"1"===o?"inline-block":"none"}}),Object(n.jsx)("input",{type:"text",className:"input",value:s||"",onChange:e.onTextChange.bind(e,t,o,i)}),Object(n.jsx)("span",{className:"remove-text",onClick:e.onRemoveClick.bind(e,t,i),children:"Remove"}),Object(n.jsx)("span",{id:"select-add-"+t+"-"+i,className:"add-text",onClick:function(){return e.onAddClick(t,i)},children:"Add"})]},i)}))}),Object(n.jsx)("div",{style:{display:"2"===o?"block":"none"},children:Object(n.jsx)("textarea",{className:"textarea",onChange:this.onTextChange.bind(this,t,o,"")})}),Object(n.jsx)("div",{className:"delete-btn",children:Object(n.jsx)("button",{className:"negative ui button",onClick:function(){return e.onDeleteCard(t)},children:"Delete"})}),Object(n.jsx)("div",{className:"container submit-div",children:Object(n.jsx)("button",{className:"ui button submit-btn",onClick:this.onSubmit,children:"Submit"})})]})}}]),s}(o.Component)),j=function(e){Object(d.a)(s,e);var t=Object(g.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={count:[0],title:"",desc:""},e.onAddCardClick=function(){e.setState({count:[].concat(Object(l.a)(e.state.count),[e.state.count.length])})},e.onSurveyTitleChange=function(t){e.setState({title:t.target.value})},e.onSurveyDescChange=function(t){e.setState({desc:t.target.value})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){window.onbeforeunload=function(e){for(var t in sessionStorage)sessionStorage.removeItem(t)}}},{key:"render",value:function(){return sessionStorage.setItem("survey-title",this.state.title),sessionStorage.setItem("survey-desc",this.state.desc),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("span",{className:"logo-text",onClick:function(){return window.location.reload()},children:"Ringle Survey"})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("input",{type:"text",placeholder:"Enter a title of survey",className:"card-title-input",onChange:this.onSurveyTitleChange}),Object(n.jsx)("input",{type:"text",placeholder:"Enter a description of survey",className:"card-desc-input",onChange:this.onSurveyDescChange})]}),this.state.count.map((function(e,t){return Object(n.jsx)(m,{id:t},t)}))]}),Object(n.jsx)("div",{className:"icon-div",children:Object(n.jsx)("img",{src:h,className:"plus-icon",onClick:this.onAddCardClick,alt:"Add Question"})})]})}}]),s}(i.a.Component),b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),o(e),i(e),c(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.d8b74e5f.chunk.js.map