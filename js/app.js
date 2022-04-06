/* ------------------------------creating the navigation ------------------------*/
/* precreating all tags needed to be created in the dom */

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const li = document.createElement("li");
const section = document.createElement("section");
const h1 = document.createElement("h1");
const p = document.createElement("p");
const a = document.createElement("a");
const footer = document.createElement("footer");

/* building the navigation -----------------------------------*/

//adding the header node to the body node as a child
const createdHeader = document.body.appendChild(header);
/* working with nav in header ------------------------*/
//adding the nav node as a child to the header node
const createdNav = createdHeader.appendChild(nav);
//adding a class to the nav node
createdNav.classList.add("navbar");
//adding an anchor node to the nav node
const createdAnchor = createdNav.appendChild(a);
//adding a class to the anchor node in the nav node
createdAnchor.classList.add("nav-branding");
createdAnchor.appendChild(document.createTextNode("Landing Page."));
/* working with ul in the nav node ------------------------*/
//adding the ul node as a child to the header node
const createdUl = createdNav.appendChild(ul);
//adding a class to the ul node
createdUl.classList.add("nav-menu");
/*adding four li node to the ul node as well as adding thier classes
and also adding an anchor to the li node as well as adding classed to the 
anchor */
// creating a new anchor node
const anchor = document.createElement("a");
for (i = 1; i < 5; i++) {
  //adding an li node to the ul node as a child
  let createdLi = createdUl.appendChild(li.cloneNode());
  //adding a class to the li node
  createdLi.classList.add("nav-item");
  //adding an anchor node to the li node
  //adding a class to each anchor node in the li node
  anchor.classList.add("nav-link");
  //adding an it attribute to each anchor
  anchor.setAttribute("id", i);
  //adding an href attribute to each anchor
  anchor.setAttribute("href", "#section" + i);
  //finally appending the anchor to the li node
  let createdA = createdLi.appendChild(anchor.cloneNode());
  //adding an event listener to the anchor tags ----------------
  createdA.addEventListener("click", (e) => {
    //preventing the default action of the anchor tag
    e.preventDefault();
    //fetching the anchors tag by the href attribute
    //const hrefAnchor  = document.querySelector('href');
    anchorAttribute = e.target.getAttribute("href");
    //this implements the scrolling to the sections
    document.querySelector(anchorAttribute).scrollIntoView({
      behavior: "smooth",
    });
  }); //----------------------------event ending ------------------
  createdA.appendChild(document.createTextNode("section" + i));
}
/* ---------------creating the sections ------------------------------*/
//The sections will be created along with a scroll event to fire
//when the view is at the top most
//paragraph text node ---------------
pTextNode = document.createTextNode(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet justo 
        donec enim diam vulputate. Aliquam faucibus purus in massa tempor nec. Est 
        ultricies integer quis auctor elit sed vulputate mi sit. Dolor sed
        viverra ipsum nunc aliquet bibendum enim. Vel quam elementum pulvinar
        etiam non quam. Enim nunc faucibus a pellentesque sit amet porttitor
        eget dolor. Massa tincidunt dui ut ornare lectus sit amet est. Consequat
        semper viverra nam libero justo laoreet. Viverra vitae congue eu
        consequat ac felis donec et. Ut tortor pretium viverra suspendisse
        potenti nullam ac. Dignissim diam quis enim lobortis scelerisque
        fermentum dui faucibus in. Commodo quis imperdiet massa tincidunt nunc
        pulvinar. Magna fermentum iaculis eu non. Dignissim suspendisse in est
        ante in nibh mauris cursus. Sed nisi lacus sed viverra tellus. Vivamus
        arcu felis bibendum ut tristique et. Id diam vel quam elementum pulvinar
        etiam non. In cursus turpis massa tincidunt dui. Ipsum suspendisse
        ultrices gravida dictum fusce. Tellus orci ac auctor augue mauris augue
        neque gravida. Amet consectetur adipiscing elit pellentesque habitant
        morbi tristique senectus et. Pellentesque habitant morbi tristique
        senectus et netus et. Vel eros donec ac odio tempor. In fermentum
        posuere urna nec tincidunt praesent. In iaculis nunc sed augue lacus
        viverra vitae congue eu. Nunc lobortis mattis aliquam faucibus purus in
        massa tempor. Amet venenatis urna cursus eget nunc scelerisque viverra
        mauris in. Etiam erat velit scelerisque in dictum non. Praesent
        elementum facilisis leo vel fringilla est ullamcorper eget.
`);

//creating the section node
for (i = 1; i < 5; i++) {
  //adding the section node to the body node
  createdSection = document.body.appendChild(section.cloneNode());
  //adding an attribute to the section
  createdSection.setAttribute("id", "section" + i);
  //adding an h1 node to the section node
  createdH1 = createdSection.appendChild(h1.cloneNode());
  //adding an attribute to the h1 node
  createdH1.setAttribute("id", "header" + i);
  //adding a text node to the h1 node
  createdH1.appendChild(document.createTextNode("section" + i));
  //adding a paragraph node to the section node
  createdP = createdSection.appendChild(p.cloneNode());
  createdP.setAttribute("id", "p" + i);
  //adding a text node to the paragraph node
  createdP.appendChild(pTextNode.cloneNode());
}


//creating footer and its child nodes -----------------------------/
let footerA = document.createElement("a");
document.body.appendChild(footer);
let footerNode = document.querySelector("footer");
footerNode.classList.add("footer");
let footerP = footerNode.appendChild(p);
let footerAnchor = footerP.appendChild(footerA);
footerAnchor.setAttribute("href", "copyright");
footerAnchor.insertAdjacentHTML("afterbegin", "&#169; udacity landing page");



/* 
checking for a scroll in the windows and firing and event 
to create and element highlighting for a particular section 
when it's at a particular view in the window
*/
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  //fetch all the section when scrolling the page
  allSection = document.querySelectorAll("section");
  //looping through each section
  allSection.forEach((aSection) => {
    //fetching the dimension for each section
    aSecDimension = aSection.getBoundingClientRect();
    //if the section top is 0 px away from the top of the window
    //or is a negative pixes distance from the top but its bottom
    // is still in view highlight the section when scrolling from the top
    // if not remove the highlighting from the section
    if (aSecDimension.top <= 0 && aSecDimension.bottom > 0) {
      aSection.classList.add("activeSection");
    } else {
      aSection.classList.remove("activeSection");
    }
  });
});