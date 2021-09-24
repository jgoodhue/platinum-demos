(window.webpackJsonp=window.webpackJsonp||[]).push([[50,22,35,36,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),i=a.n(b),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),u=a.n(m),p=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,i=r.subDirectory,c=b+"/edit/"+r.branch+i+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),f=a("dI71"),N=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),b=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(p.b)(o.Link,{className:N.link,to:""+l},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},b))))))},t}(r.a.Component),T=a("MjG9"),v=a("CzIb"),w=a("Asxa"),P=a("OIbQ"),y=a.n(P),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:y.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,u=s.tabs,g=s.title,f=s.theme,N=s.description,w=s.keywords,P=s.date,y=Object(v.a)().interiorTheme,k=Object(o.useStaticQuery)("2456312558").site.pathPrefix,E=k?n.pathname.replace(k,""):n.pathname,A=u?E.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",S=f||y;return Object(p.b)(l.a,{tabs:u,homepage:!1,theme:S,pageTitle:g,pageDescription:N,pageKeywords:w,titleType:m},Object(p.b)(O,{title:r?Object(p.b)(r,null):g,label:"label",tabs:u,theme:S}),u&&Object(p.b)(h,{title:g,slug:E,tabs:u,currentTab:A}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(I,{date:P})),Object(p.b)(x.a,{pageContext:t,location:n,slug:E,tabs:u,currentTab:A}),Object(p.b)(c.a,null))}},"8Qww":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return c})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),o=(a("qKvR"),["components"]),c=function(){return Object(b.b)("span",null,"NOTE: INTEGRATION CODE FOR DISPLAY PURPOSES")},l={},s={Title:c,_frontmatter:l},d=i.a;function m(e){var t=e.components,a=Object(r.a)(e,o);return Object(b.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Preparation"),Object(b.b)("th",{parentName:"tr",align:"left"}))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Scenario overview")),Object(b.b)("td",{parentName:"tr",align:"left"},"Access applications through APIs and Integrations")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Demo outline")),Object(b.b)("td",{parentName:"tr",align:"left"},"Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with No-code App Connect Designer, rate limiting plans, security policies and Self-Service API consumption using the API Connect Portal.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Before the demo")),Object(b.b)("td",{parentName:"tr",align:"left"},"TBD")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Key demo considerations")),Object(b.b)("td",{parentName:"tr",align:"left"},"TBD")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("strong",{parentName:"td"},"Screenshots")),Object(b.b)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-prepare-mdx-da27e8cad2bd839b7897.js.map