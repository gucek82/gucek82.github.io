(this.webpackJsonpaboutme=this.webpackJsonpaboutme||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hand.fa399b47.png"},function(e,t,a){e.exports=a.p+"static/media/fingers.b75dcdbf.png"},function(e,t,a){e.exports=a.p+"static/media/punch.1bb82dce.png"},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/javascript_sp.d6b412af.jpg"},function(e,t,a){e.exports=a.p+"static/media/react_sp.0b7f45b3.jpg"},function(e,t,a){e.exports=a.p+"static/media/akademia108.7c7b0cfd.jpg"},function(e,t,a){e.exports=a.p+"static/media/javascript.c46a1b10.jpg"},function(e,t,a){e.exports=a.p+"static/media/html.1c6fc5c7.jpg"},function(e,t,a){e.exports=a.p+"static/media/git.d9e0fe48.jpg"},function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),i=a(10),s=a(11),o=a(13),m=a(12),u=a(14),p=a(20),d=(a(41),a(7)),E=a(3),h=a(9),y=a(4);d.b.add(E.f,E.i,E.h,E.k,E.d,E.g,E.a,E.m,E.e,h.b,h.a);var f=[{name:l.a.createElement(y.a,{icon:"address-card",size:"4x"}),path:"/",exact:!0},{name:l.a.createElement(y.a,{icon:["fab","github"],size:"4x"}),path:"/repos"},{name:l.a.createElement(y.a,{icon:"rss",size:"4x"}),path:"/news"},{name:l.a.createElement(y.a,{icon:"gamepad",size:"4x"}),path:"/game"}],b=function(){var e=f.map((function(e){return l.a.createElement("li",{key:e.path},l.a.createElement(p.b,{to:e.path,exact:!!e.exact&&e.exact},e.name))}));return l.a.createElement("nav",null,l.a.createElement("ul",null,e))},v=(a(49),function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("div",{id:"avatar"}),l.a.createElement("div",{className:"header-title"},l.a.createElement("h2",null,"Witam na moim GitHubie"),l.a.createElement("p",null,"Mam na imi\u0119 Krzysiek i jestem pocz\u0105tkuj\u0105cym frond-end developerem. Aktualnie poszukuj\u0119 nowych wyzwa\u0144, kt\xf3re poszerz\u0105 moje do\u015bwiadczenie. Masz propozycj\u0119?"," ",l.a.createElement("a",{href:"#contact"},"skontaktuj si\u0119")," ze mn\u0105."),l.a.createElement(b,null))))}),g=a(15);a(50);d.b.add(E.c,E.j,E.b);var w=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"article"},l.a.createElement("h2",null,e.title),l.a.createElement("div",{className:"titleImg"},l.a.createElement("img",{src:e.image,alt:e.title})),l.a.createElement("p",{className:"article_tag"},l.a.createElement("em",null,e.author),""," \u0179r\xf3d\u0142o:",e.source),l.a.createElement("p",{className:"article_desc"},e.description),l.a.createElement("p",{className:"article_cont"},e.content),l.a.createElement("a",{href:e.url},"Wi\u0119cej...")))},z=new Request("https://newsapi.org/v2/top-headlines?country=pl&apiKey=0dd882d219c4454a819bebe628399e4a"),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={news:[],avatar:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(z).then((function(e){return e.json()})).then((function(t){e.setState({news:t.articles})}))}},{key:"render",value:function(){var e=this.state.news.map((function(e){return l.a.createElement(w,{key:e.publishedAt,source:e.source.name,image:e.urlToImage,author:e.author,content:e.content,description:e.description,title:e.title,url:e.url})}));return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Najnowsze wiadomo\u015bci"),l.a.createElement("div",null,e))}}]),t}(n.Component),j=function(){return l.a.createElement("div",null,"Nie ma takiej strony")},S=(a(51),a(30)),N=a.n(S),x=a(31),C=a.n(x),O=a(32),H=a.n(O),A=a(33),M=a.n(A),P=a(34),W=a.n(P),G=a(35),J=a.n(G),R=[{name:"Akademia108",title:"Front End Developer",desc:"Stacjonarny bootcamp przygotowuj\u0105cy do zawodu Front End Developera.\n  Technologie: HTML/HTML5, CSS/CSS3, SASS, Bootstrap, Gulp, Git,\n  JavaScript, jQuery, Ajax",certificate:H.a},{name:"Udemy",title:"Kurs HTML i CSS",desc:"Kurs obejmuj\u0105cy nauk\u0119 HTML/HTML5 i CSS/CSS3 z elementami JavaScript",certificate:W.a},{name:"Udemy",title:"Kurs JavaScript",desc:"Kurs ucz\u0105cy budowy dynamicznych stron internetowych z wykorzystaniem m.in JavaScript ",certificate:M.a},{name:"Udemy",title:"JavaScript ES6",desc:"Kurs obejmuj\u0105cy nauk\u0119 JavaScript \u0142\u0105cznie ze standardem ES6. M.in. Programowanie zoorientowane obiektowe (OOP), JavaScript Project Notacion (JSON), korzystanie REST API ",certificate:N.a},{name:"Udemy",title:"React od podstaw",desc:"Kurs obejmuj\u0105cy nauk\u0119 React. Wykorzystanie React do budowy SPA (Single Page Applications). Wymiana danych przy u\u017cyciu JSON, korzystanie z REST API",certificate:C.a},{name:"Udemy",title:"Wprowadzenie do Git i GitHub",desc:"Kurs wprowadzaj\u0105cy w obs\u0142ug\u0119\xa0Git'a i GitHuba",certificate:J.a}],T=function(){var e=window.innerWidth+"px",t=window.innerHeight+"px",a=R.map((function(a){return l.a.createElement("div",{className:"singleCourse",key:a.title},l.a.createElement("div",{className:"course-name"},a.name," ",l.a.createElement("strong",null,a.title),l.a.createElement("button",{className:"showCertificate",onClick:function(){var n=document.createElement("div");n.style.backgroundImage="url(".concat(a.certificate,")"),n.style.backgroundPosition="center",n.style.backgroundSize="contain",n.style.backgroundRepeat="no-repeat",n.style.minWidth=e,n.style.height=t,n.style.backgroundColor="transparent",n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",document.body.appendChild(n);var l=document.createElement("button");l.textContent="Zamknij",l.style.position="fixed",l.style.bottom="75%",l.style.right="0",n.appendChild(l),l.addEventListener("click",(function(){document.body.removeChild(n)}))}},"Certyfikat")),l.a.createElement("div",{className:"course-description"},a.desc))}));return l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement("h1",null,"Kursy i szkolenia"),l.a.createElement("div",{className:"courses-container"},a)),l.a.createElement("section",null,l.a.createElement("h2",null,"Technologie"),l.a.createElement("div",{className:"skills-container"},l.a.createElement("div",null,l.a.createElement("h3",null,"technologie kt\xf3re u\u017cywam i stale si\u0119 ucz\u0119"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTML5"),l.a.createElement("li",null,"CSS3"),l.a.createElement("li",null,"JavaScript ES6"),l.a.createElement("li",null,"jQuery"),l.a.createElement("li",null,"Bootstrap"),l.a.createElement("li",null,"SASS"),l.a.createElement("li",null,"GIT"),l.a.createElement("li",null,"Wordpress"),l.a.createElement("li",null,"React"))),l.a.createElement("div",null,l.a.createElement("h3",null,"Podstawowa wiedza z technologii"),l.a.createElement("ul",null,l.a.createElement("li",null,"NPM scripts"),l.a.createElement("li",null,"Webpack"),l.a.createElement("li",null,"AJAX"),l.a.createElement("li",null,"Redux"),l.a.createElement("li",null,"MySQL"))),l.a.createElement("div",null,l.a.createElement("h3",null,"technologie kt\xf3rych zamierzam si\u0119 nauczy\u0107"),l.a.createElement("ul",null,l.a.createElement("li",null,"ReactNative"),l.a.createElement("li",null,"Node.js"),l.a.createElement("li",null,"MongoDB"),l.a.createElement("li",null,"PHP"))))),l.a.createElement("section",null,l.a.createElement("h2",null,"Wykszta\u0142cenie"),l.a.createElement("div",{className:"conteiner-edu"},l.a.createElement("div",{className:"edu-name"},"Szko\u0142a G\u0142\xf3wna Handlowa w Warszawie ",l.a.createElement("em",null,"(2005 - 2010)")),l.a.createElement("div",{className:"edu-decription"},"Specjalizacja: e-Marketing; Stopie\u0144 Magistra"))),l.a.createElement("section",null,l.a.createElement("h2",null,"Do\u015bwiadczenie"),l.a.createElement("div",{className:"conteiner-exp"},l.a.createElement("div",{className:"exp-name"},"Samozatrudniony",l.a.createElement("em",null,"(czerwiec 2018 - obecnie)")),l.a.createElement("div",{className:"exp-decription"},"Projektowanie i budowa dynamicznych, responswnych stron internetowych (HTML5, CSS3, SASS, Gulp, Bootstrap, jQuery, JavaScript, Wordpress, React). Administrowanie stronami internetowymi."))))};a(52);d.b.add(E.i,E.l,E.d,h.a,h.b);var K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={repositories:[],active:!1},a.sorderdObj=function(e,t){return e.name>t.name?-1:e.name<t.name?1:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/gucek82/repos").then((function(e){return e.json()})).then((function(t){e.setState({repositories:t})}))}},{key:"render",value:function(){var e=this,t=this.state.repositories.sort(this.sorderdObj);return t=this.state.repositories.map((function(e){return l.a.createElement("div",{className:"single-repo",key:e.id},l.a.createElement("span",{className:"github-logo"},l.a.createElement(y.a,{icon:["fab","github"],size:"3x",color:"#fff"})),l.a.createElement("h4",null,e.name),l.a.createElement("h6",null,e.language),l.a.createElement("p",null,e.description),l.a.createElement("p",null,l.a.createElement("span",null," ",e.has_pages?l.a.createElement("a",{href:"https://gucek82.github.io/"+e.name},l.a.createElement(y.a,{icon:"play-circle",color:"#494949",size:"2x"})," ","DEMO"):""),l.a.createElement("span",null,l.a.createElement(y.a,{icon:"code",color:"#494949",size:"2x"})," ",l.a.createElement("a",{href:e.html_url},"Github"))))})),l.a.createElement("div",{className:"reposContainer"},l.a.createElement("h1",null,"Repozytorium GitHub"),l.a.createElement("div",{className:"reposList"},this.state.active?t:t.slice(0,6)),l.a.createElement("button",{onClick:function(){e.setState({active:!e.state.active})}},this.state.active?"Mniej":"Wi\u0119cej"))}}]),t}(n.Component),L=(a(53),a(17)),I=a.n(L),D=a(18),_=a.n(D),U=a(19),B=a.n(U),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).hand=[I.a,_.a,B.a],a.state={numbers:0,wins:0,losses:0,draws:0,playerHand:"",aiHand:"",result:"",style:""},a.startGame=function(){if(a.state.aiHand||!a.state.playerHand)return alert("Wybierz r\u0119k\u0119");var e=Math.floor(Math.random()*a.hand.length);a.setState({aiHand:a.hand[e],numbers:a.state.numbers+1})},a.playerChoice=function(e){a.setState({playerHand:e.target.src,result:"",aiHand:""})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state,t=e.playerHand,a=e.aiHand;""!==t&&""!==a&&""===this.state.result&&(t.slice(25)===I.a&&a===B.a||t.slice(25)===B.a&&a===_.a||t.slice(25)===_.a&&a===I.a)?this.setState({result:"Wygra\u0142e\u015b",wins:this.state.wins+1,style:"green"}):""!==t&&""!==a&&""===this.state.result&&(t.slice(25)===B.a&&a===I.a||t.slice(25)===_.a&&a===B.a||t.slice(25)===I.a&&a===_.a)?this.setState({result:"Przegra\u0142e\u015b",losses:this.state.losses+1,style:"red"}):""===t||""===a||""!==this.state.result||t.slice(25)!==a&&t!==a||this.setState({result:"Remis",draws:this.state.draws+1,style:"grey"})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,'GRA "PAPIER, NO\u017bYCE, KAMIE\u0143"'),l.a.createElement("div",{className:"select"},l.a.createElement("h3",null,"Prosz\u0119 wybierz:"),l.a.createElement("img",{"data-option":"papier",src:I.a,alt:"",title:"Papier",onClick:this.playerChoice}),l.a.createElement("img",{"data-option":"kamie\u0144",src:B.a,alt:"",title:"Kamie\u0144",onClick:this.playerChoice}),l.a.createElement("img",{"data-option":"nozyczki",src:_.a,alt:"",title:"Nozycze",onClick:this.playerChoice})),l.a.createElement("button",{className:"start",onClick:this.startGame},"Let's play!"),l.a.createElement("div",{className:"panel-left"},l.a.createElement("h3",null,"Wynik gry"),l.a.createElement("p",null,"Tw\xf3j wyb\xf3r:"," ",l.a.createElement("span",{"data-summary":"your-choice"},l.a.createElement("img",{src:this.state.playerHand,alt:""}))),l.a.createElement("p",null,"Wyb\xf3r komputera:"," ",l.a.createElement("span",{"data-summary":"ai-choice"},l.a.createElement("img",{src:this.state.aiHand,alt:""}))),l.a.createElement("h2",null,"Rezultat gry:"," ",l.a.createElement("span",{"data-summary":"who-win",className:this.state.style},this.state.result))),l.a.createElement("div",{className:"panel-right"},l.a.createElement("h3",null,"Aktualne wyniki"),l.a.createElement("p",{className:"numbers"},"liczba gier: ",l.a.createElement("span",null,this.state.numbers)),l.a.createElement("p",{className:"wins"},"wygranych: ",l.a.createElement("span",null,this.state.wins)),l.a.createElement("p",{className:"losses"},"przegranych: ",l.a.createElement("span",null,this.state.losses)),l.a.createElement("p",{className:"draw"},"remis\xf3w: ",l.a.createElement("span",null,this.state.draws))))}}]),t}(n.Component),Q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/",exact:!0,component:T}),l.a.createElement(g.a,{path:"/news",component:k}),l.a.createElement(g.a,{path:"/repos",component:K}),l.a.createElement(g.a,{path:"/game",component:F}),l.a.createElement(g.a,{component:j})))};a(54);d.b.add(h.a,h.c);var q=function(){return l.a.createElement("div",null,l.a.createElement("footer",{id:"contact"},l.a.createElement("div",null,l.a.createElement("h2",null,"Kontakt"),l.a.createElement("p",null,"Jestem otwarty na nowe mo\u017cliwo\u015bci. Je\u017celi masz dla mnie propozcj\u0119, ch\u0119tnie porozmawiam!"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/krzysztof-sarna-1a99ab167/"},l.a.createElement(y.a,{icon:["fab","linkedin"],size:"2x"}))," ",l.a.createElement("a",{href:"https://github.com/gucek82"},l.a.createElement(y.a,{icon:["fab","github"],size:"2x"}))),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:krzysztof@pageone.pl"},"krzysztof@pageone.pl"))),l.a.createElement("div",{id:"go-top",onClick:function(){window.scrollTo(0,0)}},l.a.createElement("p",null,l.a.createElement(y.a,{icon:"arrow-up",size:"2x"}))),"My GitHub Page"))},X=(a(55),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,{basename:""},l.a.createElement("div",{className:"app"},l.a.createElement(v,null),l.a.createElement("main",null,l.a.createElement("section",{className:"page"},l.a.createElement(Q,null))),l.a.createElement(q,null)))}}]),t}(n.Component));c.a.render(l.a.createElement(X,null),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.4d05dc9c.chunk.js.map