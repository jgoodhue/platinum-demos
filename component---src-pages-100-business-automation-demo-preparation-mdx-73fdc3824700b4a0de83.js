(window.webpackJsonp=window.webpackJsonp||[]).push([[19,31,33,34],{"013z":function(e,t,n){"use strict";var b=n("q1tI"),a=n.n(b),r=n("NmYn"),l=n.n(r),c=n("Wbzz"),o=n("Xrax"),i=n("k4MR"),s=n("TSYQ"),d=n.n(s),u=n("QH2O"),p=n.n(u),m=n("qKvR"),O=function(e){var t,n=e.title,b=e.theme,a=e.tabs,r=void 0===a?[]:a;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===b,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},n)))))},j=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,b=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||b,r=a.baseUrl,l=a.subDirectory,o=r+"/edit/"+a.branch+l+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},h=n("FCXl"),N=n("dI71"),f=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,b=e.slug,a=b.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),r=n===a,o=new RegExp(a+"/?(#.*)?$"),i=b.replace(o,n);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(c.Link,{className:f.link,to:""+i},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},r))))))},t}(a.a.Component),y=n("MjG9"),x=n("CzIb"),k=n("Asxa"),v=n("OIbQ"),A=n.n(v),T=function(e){var t=e.date,n=new Date(t);return t?Object(m.b)(k.c,{className:A.a.row},Object(m.b)(k.a,null,Object(m.b)("div",{className:A.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,b=e.location,a=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,p=s.tabs,j=s.title,N=s.theme,f=s.description,k=s.keywords,v=s.date,A=Object(x.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,P=C?b.pathname.replace(C,""):b.pathname,S=p?P.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",_=N||A;return Object(m.b)(i.a,{tabs:p,homepage:!1,theme:_,pageTitle:j,pageDescription:f,pageKeywords:k,titleType:u},Object(m.b)(O,{title:a?Object(m.b)(a,null):j,label:"label",tabs:p,theme:_}),p&&Object(m.b)(w,{title:j,slug:P,tabs:p,currentTab:S}),Object(m.b)(y.a,{padded:!0},n,Object(m.b)(g,{relativePagePath:d}),Object(m.b)(T,{date:v})),Object(m.b)(h.a,{pageContext:t,location:b,slug:P,tabs:p,currentTab:S}),Object(m.b)(o.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},icMP:function(e,t,n){"use strict";n.r(t),n.d(t,"Title",(function(){return o})),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return j}));var b=n("wx14"),a=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("013z"),c=(n("qKvR"),["components"]),o=function(){return Object(r.b)("span",null,"Increase straight-through processing to accelerate business responsiveness 300-level demo")},i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},d=s("FeatureCard"),u=s("AnchorLinks"),p=s("AnchorLink"),m={Title:o,_frontmatter:i},O=l.a;function j(e){var t=e.components,n=Object(a.a)(e,c);return Object(r.b)(O,Object(b.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(d,{title:"Demo Preparation",color:"dark",mdxType:"FeatureCard"},Object(r.b)("p",null,"[automation-tech-demos-screen-github]","(./images/automation-tech-demos-screen-github.png” width=“900”)")),Object(r.b)(u,{mdxType:"AnchorLinks"},Object(r.b)(p,{mdxType:"AnchorLink"},"Scenario overview"),Object(r.b)(p,{mdxType:"AnchorLink"},"Demo structure"),Object(r.b)(p,{mdxType:"AnchorLink"},"Before the demo"),Object(r.b)(p,{mdxType:"AnchorLink"},"Key demo considerations"),Object(r.b)(p,{mdxType:"AnchorLink"},"How to get support")),Object(r.b)("hr",null),Object(r.b)("h2",null,"Scenario overview"),Object(r.b)("p",null,"This demo shows how the IBM Cloud Pak for Business Automation enables straight-through processing. To illustrate this, a customer’s refund process is automated.  "),Object(r.b)("p",null,"The capabilities used in this demo are IBM workflow, IBM decisions, and operational intelligence.  "),Object(r.b)("hr",null),Object(r.b)("h2",null,"Demo structure"),Object(r.b)("p",null,"Introduction"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Model workflow"),Object(r.b)("li",{parentName:"ol"},"Execute workflow without straight-through processing"),Object(r.b)("li",{parentName:"ol"},"Change the workflow for straight-through processing"),Object(r.b)("li",{parentName:"ol"},"Execute workflow with straight-through processing"),Object(r.b)("li",{parentName:"ol"},"Monitor operational intelligence"),Object(r.b)("li",{parentName:"ol"},"Model decisions"),Object(r.b)("li",{parentName:"ol"},"Reduce manual work")),Object(r.b)("p",null,"Summary"),Object(r.b)("hr",null),Object(r.b)("h2",null,"Before the demo"),Object(r.b)("h3",null,"Requisition instructions"),Object(r.b)("p",null,"Select a delivery option: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"SaaS using the Cloud Pak for Business Automation as a Service demo environment (likely an IBMer). If you need to request access, follow the instructions here. Your environment is pre-deployed.  "),Object(r.b)("li",{parentName:"ol"},"Install yourself using one of two options: ",Object(r.b)("br",null),"\na.\tOption 1: Bring your own environment\nAccess the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/dba-refund-request"},"dba-refund-request")," GitHub page to read technical architecture information and find deployment instructions.",Object(r.b)("br",{parentName:"li"}),"b.\tOption 2: Reserve on TechZone\nFor IBMers and business partners that have access to TechZone, you can also reserve a Cloud Pak for Automation OpenShift demo environment via the ",Object(r.b)("a",{parentName:"li",href:"https://techzone.ibm.com/collection/5ef5196556dfa7001728cb71#tab-1"},"Straight-through processing TechZone page"),". ")),Object(r.b)("p",null,"Once your environment is ready, continue to the next steps below."),Object(r.b)("hr",null),Object(r.b)("h2",null,"Key demo considerations"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Step 1 prep")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"For step 1, have the Process Designer open to the Refund Request process application. This is a good opportunity to discuss Process Designer features.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Access your IBM Cloud Pak for Business Automation as a service tenet here ",Object(r.b)("a",{parentName:"td",href:"https://demo-emea-02.automationcloud.ibm.com/"},"https://demo-emea-02.automationcloud.ibm.com/"),". Enter your email address. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Note: Steps 1.1, 1.2, and 1.3 are for ",Object(r.b)("strong",{parentName:"td"},"technical sellers only"),". Most technical sellers initially land in the development environment. If this happens to you, follow these steps to get to the production/runtime environment: ",Object(r.b)("br",null)," "," "," 1.1 - Click on the dropdown menu in the top left corner of the screen. ",Object(r.b)("br",null)," "," "," 1.2 - Click on ",Object(r.b)("strong",{parentName:"td"},"Deployment")," on the left-hand side, and click on ",Object(r.b)("strong",{parentName:"td"},"Production")," to switch to that environment. ",Object(r.b)("br",null)," "," "," 1.3 - On the left-hand side click on Run. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2 - Click on ",Object(r.b)("strong",{parentName:"td"},"Process Portal"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 3 - Click on ",Object(r.b)("strong",{parentName:"td"},"Show more"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 4 - Click on ",Object(r.b)("strong",{parentName:"td"},"Focus Corp Demos Dashboard"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 5 - Click on the green ",Object(r.b)("strong",{parentName:"td"},"Refund Request")," box. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 6 - Click on the ",Object(r.b)("strong",{parentName:"td"},"Demo Diagram")," tab. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 7 - Scroll down to display the process diagram.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[1.1]","(./images/1.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 1.1 (technical seller only) ",Object(r.b)("br",null)," ","[1.1.1_tech_seller]","(./images/1.1.1_tech_seller.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 1.2 (technical seller only) ",Object(r.b)("br",null)," ","[1.1.2_tech_seller]","(./images/1.1.2_tech_seller.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 1.3 (technical seller only) ",Object(r.b)("br",null)," ","[1.1.3_tech_seller]","(./images/1.1.3_tech_seller.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[1.2]","(./images/1.2.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3 ",Object(r.b)("br",null)," ","[1.3]","(./images/1.3.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 4 ",Object(r.b)("br",null)," ","[1.4]","(./images/1.4.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 5 ",Object(r.b)("br",null)," ","[1.5]","(./images/1.5.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 6 ",Object(r.b)("br",null)," ","[1.6]","(./images/1.6.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 7 ",Object(r.b)("br",null)," ","[1_final_screen]","(./images/1_final_screen.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Step 2 SaaS prep")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Note: This is the only setup difference between SaaS and self-install. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Prior to the demo, open a browser tab to the ",Object(r.b)("strong",{parentName:"td"},"Process Portal"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go back to the initial navigation page (immediately after getting to the production/run environment). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2 - Click on ",Object(r.b)("strong",{parentName:"td"},"Process Portal"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[1.1]","(./images/1.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[1.2]","(./images/1.2.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Step 2 self-install prep")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Red Hat OpenShift on IBM Cloud")," or ",Object(r.b)("strong",{parentName:"td"},"Cloud Pak for Automation OpenShift Demo Environment"),": Prior to the demo, open a browser tab to ",Object(r.b)("strong",{parentName:"td"},"Workplace"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"—")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"},"—")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Step 4 prep")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Have Focus Corp’s Your Returns and Refunds page open in a separate window.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go back to the initial navigation page (immediately after getting to the production/run environment. Click ",Object(r.b)("strong",{parentName:"td"},"Business Automation Apps"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2 - Click on ",Object(r.b)("strong",{parentName:"td"},"Refund Requests"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 3 - Click on ",Object(r.b)("strong",{parentName:"td"},"Anna, the Customer"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[4.1]","(./images/4.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[4.2]","(./images/4.2.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3 ",Object(r.b)("br",null)," ","[4.3]","(./images/4.3.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[4_final_screen]","(./images/4_final_screen.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Step 5 prep")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Open Focus Corp’s Business Performance Center in a separate window.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go back to the initial navigation page (immediately after getting to the production/run environment. Click ",Object(r.b)("strong",{parentName:"td"},"Business Automation Apps"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2 - Click on ",Object(r.b)("strong",{parentName:"td"},"Refund Request"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 3 - Click on ",Object(r.b)("strong",{parentName:"td"},"Tom, the Business Analyst"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 4 - Select the report titled ",Object(r.b)("strong",{parentName:"td"},"Refund Request (RR) Week 1"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[5.1]","(./images/5.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[5.2]","(./images/5.2.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3 ",Object(r.b)("br",null)," ","[5.3]","(./images/5.3.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 4 ",Object(r.b)("br",null)," ","[5.4]","(./images/5.4.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[5_final_screen]","(./images/5_final_screen.png” width=“600”)")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"th"},"Step 6 prep")),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Description")),Object(r.b)("td",{parentName:"tr",align:"left"},"Log into Focus Corp’s Decision Center in a separate window.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Actions")),Object(r.b)("td",{parentName:"tr",align:"left"},"1 - Go back to the initial navigation page (immediately after getting to the production/run environment. Click ",Object(r.b)("strong",{parentName:"td"},"Business Automation Apps"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 2 - Click on ",Object(r.b)("strong",{parentName:"td"},"Refund Request"),". ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 3 - Click on ",Object(r.b)("strong",{parentName:"td"},"Emma, the Rules Manager"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Screenshots")),Object(r.b)("td",{parentName:"tr",align:"left"}," ","  ",Object(r.b)("br",null)," Action 1 ",Object(r.b)("br",null)," ","[6.1]","(./images/6.1.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 2 ",Object(r.b)("br",null)," ","[6.2]","(./images/6.2.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Action 3 ",Object(r.b)("br",null)," ","[6.3]","(./images/6.3.png” width=“600”) ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Final screen ",Object(r.b)("br",null)," ","[6_final_screen]","(./images/6_final_screen.png” width=“600”)")))),Object(r.b)("hr",null),Object(r.b)("h2",null,"How to get support"),Object(r.b)("p",null,"Please direct any questions in preparation for the demo to the ",Object(r.b)("strong",{parentName:"p"},"#Techdemos-Automation-Support")," Slack channel."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-100-business-automation-demo-preparation-mdx-73fdc3824700b4a0de83.js.map