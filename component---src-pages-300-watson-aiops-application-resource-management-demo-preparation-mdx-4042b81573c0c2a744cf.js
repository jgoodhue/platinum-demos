(window.webpackJsonp=window.webpackJsonp||[]).push([[45,22,35,36,41],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),l=a.n(r),i=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),m=a.n(s),u=a("QH2O"),d=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(p.b)("div",{className:m()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,l=b.subDirectory,o=r+"/edit/"+b.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===b,o=new RegExp(b+"/?(#.*)?$"),c=n.replace(o,a);return Object(p.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},r))))))},t}(b.a.Component),v=a("MjG9"),w=a("CzIb"),x=a("Asxa"),k=a("OIbQ"),T=a.n(k),E=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(x.c,{className:T.a.row},Object(p.b)(x.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,s=void 0===r?{}:r,m=t.relativePagePath,u=t.titleType,d=s.tabs,O=s.title,N=s.theme,f=s.description,x=s.keywords,k=s.date,T=Object(w.a)().interiorTheme,I=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=I?n.pathname.replace(I,""):n.pathname,A=d?P.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",M=N||T;return Object(p.b)(c.a,{tabs:d,homepage:!1,theme:M,pageTitle:O,pageDescription:f,pageKeywords:x,titleType:u},Object(p.b)(h,{title:b?Object(p.b)(b,null):O,label:"label",tabs:d,theme:M}),d&&Object(p.b)(y,{title:O,slug:P,tabs:d,currentTab:A}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:m}),Object(p.b)(E,{date:k})),Object(p.b)(g.a,{pageContext:t,location:n,slug:P,tabs:d,currentTab:A}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},eh9p:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return o})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),i=(a("qKvR"),["components"]),o=function(){return Object(r.b)("span",null,"Proactively Assure Application Performance",Object(r.b)("br",null)," 300-level live demo")},c={},s={Title:o,_frontmatter:c},m=l.a;function u(e){var t=e.components,a=Object(b.a)(e,i);return Object(r.b)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("img",{src:"./images/AIOps_Observability_300_Prep.jpg",alt:"banner"}),Object(r.b)("span",{id:"top"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE: Temporary content only.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"DEMO OVERVIEW"),Object(r.b)("th",{parentName:"tr",align:"left"}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Scenario overview")),Object(r.b)("td",{parentName:"tr",align:"left"},"This demo shows how IBM Instana helps quickly identify and resolve an incident in a microservices-based application. The application in this demo is called Stan’s Robot Shop, and it uses various technologies such as Java, Python, and MySQL.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo products")),Object(r.b)("td",{parentName:"tr",align:"left"},"Cloud Pak for Watson AIOps V3.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo capabilities")),Object(r.b)("td",{parentName:"tr",align:"left"},"Dependency Mapping, Intelligent Alerting, Full Stack Tracing")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo video")),Object(r.b)("td",{parentName:"tr",align:"left"},"View the demo video ",Object(r.b)("a",{href:"https://ibm.ent.box.com/s/eogn2t43x23nk8ksyk236teqppe5d49e",target:"_blank",rel:"noreferrer"},"here"),". This is a short, but detailed, hands-on walkthrough of the scenario. The video is customer-ready. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Potential uses of this video are: ",Object(r.b)("br",null)," 1. Familiarize yourself with the details of this scenario ",Object(r.b)("br",null)," 2. Gain customer agreement that they would like to have a tech-seller do a deep-dive demo of this scenario ",Object(r.b)("br",null)," 3. Use as a prospecting tool to generate customer interest in these capabilities")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"Demo guidance")),Object(r.b)("td",{parentName:"tr",align:"left"},"A complete demo script is on the second tab above. You can download a printer-ready PDF of the demo script ",Object(r.b)("a",{href:"./300-Observability-Demo-Script.pdf",target:"_blank",rel:"noreferrer"},"here"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," This demo script has multiple tasks, that each have multiple steps. In each step, you have the details about what you need to do (",Object(r.b)("strong",{parentName:"td"},"Actions"),"), what you can say while delivering this demo step (",Object(r.b)("strong",{parentName:"td"},"Narration"),"), and what diagrams and screenshots you will see (",Object(r.b)("strong",{parentName:"td"},"Screenshots"),"). ",Object(r.b)("br",null),Object(r.b)("br",null)," This demo script is a suggestion, and you are welcome to customize based on your sales opportunity. Most importantly, practice this demo in advance. If the demo seems easy for you to execute, the customer will focus on the content. If it seems difficult for you to execute, the customer will focus on your delivery. ",Object(r.b)("br",null),Object(r.b)("br",null)," The demo environment is set to automatically inject an error into the application once every hour. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," The cycle begins on the half-hour (so 9:30, 10:30, etc). You should see errors begin to show up a few minutes after this (around 32 or 33 minutes past the hour). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," The error will resolve itself and go back to a normal state after about 10 minutes. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," There are a few options for how to give demos, given how this demo environment functions. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," 1.\tSchedule a meeting so that you can begin a live demo at 30 minutes past the hour. This will allow you to show the active incident in real time. ",Object(r.b)("br",null)," 2.\tRun through the demo flow using a past incident. You can set the time period to when an incident was active (instructions are in the demo script). You will be able to run through the same scenario, except it will not show the incident alerts on the events icon on the sidebar. ",Object(r.b)("br",null)," 3.\tPrior to a meeting, coinciding with an error cycle time, take a screen recording of yourself going through the demo environment following the storyline in the script. Then, you can play the recording and speak to it live. ",Object(r.b)("br",null)," 4. Use the Platinum Demo video or the click-thru demo, both of which roughly follow the same flow. The video also includes a voiceover, which you can either use or mute and speak to it live. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," After doing option 3 or 4, you can always go into the demo environment to show customers the capabilities in more depth and/or go back through the incident flow as in option 2 above.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("strong",{parentName:"td"},"How to get support")),Object(r.b)("td",{parentName:"tr",align:"left"},"Contact ",Object(r.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0124J683GW",target:"_blank",rel:"noreferrer"},"#itz-techzone-support")," regarding issues with reserving and provisioning TechZone environments.",Object(r.b)("br",null),Object(r.b)("br",null),"Contact ",Object(r.b)("a",{href:"https://ibm-cloud.slack.com/archives/C0216F39ACU",target:"_blank",rel:"noreferrer"},"#platinumdemos-automation-support")," regarding issues with setting up and running this demo use case.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"PREPARE TO GIVE THE DEMO")),Object(r.b)("details",null,Object(r.b)("summary",null,"1 - Environment setup"),Object(r.b)("br",null),Object(r.b)("p",null,"Log into the demo environment: ",Object(r.b)("br",null),"\n•\tFor IBMers, click ",Object(r.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here")," ",Object(r.b)("br",null),"\n•\tFor business partners, click ",Object(r.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here")," ",Object(r.b)("br",null),"\n•\tIf it is your first time accessing the environment, you will need to request access (See ",Object(r.b)("strong",{parentName:"p"},"2 - Requisition instructions")," below). Allow up to two business days to receive access. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("p",null,"Note: ",Object(r.b)("br",null),"\n•\tIf you will be demonstrating using a live incident (i.e. beginning the demo at 30 minutes past the hour), no additional setup is needed. ",Object(r.b)("br",null),"\n•\tIf you will be demonstrating using a past incident, you will need to set the time period using the instructions below: ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the upper right, click the button showing the timeframe. ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("img",{parentName:"p",src:"./images/1_timeframe.png",alt:"timeframe"})," ",Object(r.b)("br",null))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"At the bottom of the pop-up, set the timeframe to begin at 25 minutes past the hour and end at 35 minutes past the hour. It doesn’t matter which hour you pick. Click ",Object(r.b)("strong",{parentName:"p"},"‘Set Time.’")," ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\nNote: ",Object(r.b)("br",null),"\n•\tThis will ensure you see normal behavior and then a sudden change when the incident begins at 0:30. ",Object(r.b)("br",null),"\n•\tPressing ‘enter’ doesn’t work. You’ll need to actually click the button. ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("img",{parentName:"p",src:"./images/2_time_range.png",alt:"time_range"})," ",Object(r.b)("br",null))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check that the summary tab for the robot shop (",Object(r.b)("strong",{parentName:"p"},"Applications")," -> ",Object(r.b)("strong",{parentName:"p"},"Robot Shop")," -> ",Object(r.b)("strong",{parentName:"p"},"Summary"),") looks like this (seeing drop in call volume and spikes in errors and latency). ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("img",{parentName:"p",src:"./images/3_robot_shop_summary.png",alt:"robot_shop_summary"})," ",Object(r.b)("br",null))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on ",Object(r.b)("strong",{parentName:"p"},"Events")," on the sidebar menu and check that there are open incidents, including ‘sudden increase in the number of erroneous calls’ on the ‘discount’ service. ",Object(r.b)("br",null)," ",Object(r.b)("br",null),"\n",Object(r.b)("img",{parentName:"p",src:"./images/4_open_incidents.png",alt:"open_incidents"})))),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))),Object(r.b)("details",null,Object(r.b)("span",{id:"requisition-instructions"}),Object(r.b)("summary",null,"2 - Requisition instructions"),Object(r.b)("br",null),Object(r.b)("p",null,"Two days before the demo, make sure you can access the environment: ",Object(r.b)("br",null),"\n•\tFor IBMers, click ",Object(r.b)("a",{href:"https://ibmdemo-instanaibm.instana.io",target:"_blank",rel:"noreferrer"},"here")," ",Object(r.b)("br",null),"\n•\tFor business partners, click ",Object(r.b)("a",{href:"https://demo-partner.instana.io/",target:"_blank",rel:"noreferrer"},"here")),Object(r.b)("br",null),Object(r.b)("p",null,"Email contacts to request access:"),Object(r.b)("h3",null,"Sales"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Region"),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Americas"),Object(r.b)("td",{parentName:"tr",align:null},"Chris Marvin"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:camarvin@us.ibm.com"},"camarvin@us.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"EMEA"),Object(r.b)("td",{parentName:"tr",align:null},"Thomas Taschner"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:thota@at.ibm.com"},"thota@at.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"AP"),Object(r.b)("td",{parentName:"tr",align:null},"Mark Jones"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:marjones@au1.ibm.com"},"marjones@au1.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Japan"),Object(r.b)("td",{parentName:"tr",align:null},"Yasuhiro Tsutsumi"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:Yasuhiro.Tsutsumi@ibm.com"},"Yasuhiro.Tsutsumi@ibm.com"))))),Object(r.b)("h3",null,"Tech sales"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Region "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Americas"),Object(r.b)("td",{parentName:"tr",align:null},"Ganeshram Boodhoo"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:gbood@us.ibm.com"},"gbood@us.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"EMEA"),Object(r.b)("td",{parentName:"tr",align:null},"Alexandre Abi-Khaled"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:alexandre.abikhaled@nl.ibm.com"},"alexandre.abikhaled@nl.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"AP"),Object(r.b)("td",{parentName:"tr",align:null},"Kitman Cheung"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:cheungk@sg.ibm.com"},"cheungk@sg.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Japan"),Object(r.b)("td",{parentName:"tr",align:null},"Tomonori Iwashina"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:TOMONORI@jp.ibm.com"},"TOMONORI@jp.ibm.com"))))),Object(r.b)("h3",null,"Everybody else (IBMers that are not sales or tech sales)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Aaron Tobin"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:atobin@us.ibm.com"},"atobin@us.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Maria Elena Taglieri"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:maria_elena.taglieri@it.ibm.com"},"maria_elena.taglieri@it.ibm.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Matthias Staub"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:matthias.staub@ch.ibm.com"},"matthias.staub@ch.ibm.com"))))),Object(r.b)("h3",null,"Business partners"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Region "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Email"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"NA, WW"),Object(r.b)("td",{parentName:"tr",align:null},"Tim Burke"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:timothy.burke@instana.com"},"timothy.burke@instana.com"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"EMEA, AP, Japan"),Object(r.b)("td",{parentName:"tr",align:null},"Allan Costigan"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"mailto:Allan.Costigan@instana.com"},"Allan.Costigan@instana.com"))))),Object(r.b)("h3",null,"Backup contacts"),Object(r.b)("p",null,"If the person you contact initially is unavailable, contact the other person for your geo. ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("p",null,"Example: A seller in the Americas would contact Chris Marvin initially. If he’s unavailable, that seller would then contact the tech sales contact for Americas (Ganeshram Boodhoo). ",Object(r.b)("br",null)," ",Object(r.b)("br",null)),Object(r.b)("p",null,"You can also use the ",Object(r.b)("strong",{parentName:"p"},"Everybody else")," contacts."),Object(r.b)("h3",null,"Turnaround"),Object(r.b)("p",null,"The turnaround time for requests to access the environment is two business days."),Object(r.b)("br",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"#top"},"Go to top")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-300-watson-aiops-application-resource-management-demo-preparation-mdx-4042b81573c0c2a744cf.js.map