const root = document.getElementById('root');
tagFunction.tagMaker(root, "header", "<nav></nav>");
// root>header>nav

const header = document.querySelector("header");
console.log(header);
tagFunction.solTagMaker(header, "hr");
// root>header>nav, hr

const nav = document.querySelector("nav")
tagFunction.solTagMaker(nav, "ul");
// root>header>nav>ul

const ul = document.querySelector("ul");
tagFunction.listMaker(ul, "il", 6);

// tagFunction.listMaker(nav, "ul", "li", 6);
// root>header>nav, hr>ul>li*6

const lis = document.querySelectorAll("li");

tagFunction.solTagMaker(root, "main");

const main = document.querySelector("main");
tagFunction.listMaker(main, "section", 3);
// root>header, main>section*3


const divSection = document.querySelector("main>section:nth-child(1)");
tagFunction.listMaker(divSection, "div", 3);
// main>section:nth-child(1)>div*3