
/*  -----summary of the code below ------
The event listener below will fire when the page(window) loads this will run a couple of codes 
inside the call back function passed to it in the second parameter , this execution will simply create a navigation with all the neccessary class id and attributed needed for a responsive navigation bar. 

*/





//precreating the section tag
const section = document.createElement('section');
//paragraph text for the sections 
const sectionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
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
        elementum facilisis leo vel fringilla est ullamcorper eget. `;

//precreating the h1 element
const h1 = document.createElement('h1');
const p = document.createElement('p');

let sectionIdCount = 1; 

//adding section to the body 
for(i = 0; i < 4; i++) 
{
  section.setAttribute('id','section'+sectionIdCount);
  document.body
    .appendChild(section.cloneNode());
  sectionIdCount++;
}

const sectionAll = document.querySelectorAll("section");

let sectionHeaderCount = 1;
//adding h1 and p to each section 
for(eachSection of sectionAll)
{
   eachSection.appendChild(h1.cloneNode()).insertAdjacentText('afterbegin',"Section"+sectionHeaderCount);
   eachSection.appendChild(p.cloneNode()).insertAdjacentText('afterbegin',sectionText);
   sectionHeaderCount++;
}



//creating footer and its child nodes -----------------------------/
const footer = document.createElement('footer');
let anchor = document.createElement('a');
document.body.appendChild(footer);
let footerNode = document.querySelector('footer');
footerNode.classList.add('footer');
let footerP = footerNode.appendChild(p);
let footerAnchor = footerP.appendChild(anchor);
footerAnchor.setAttribute('href','copyright');
footerAnchor.insertAdjacentHTML("afterbegin", "&#169; udacity landing page");










window.addEventListener("load",() => 
{




  
    
    //precreating the header tag
    const header =  document.createElement('header');
    //precreating the nav tag
    const nav = document.createElement('nav');
    //precreating the anchor tag
    const anchor = document.createElement('a');
    //adding text to the precreated anchor tag
    const achorAndText = anchor.insertAdjacentText('afterbegin',"Landing Page.");
    //precreating the ul tag 
    const ul = document.createElement('ul');
    //precreating the li tag
    const li = document.createElement('li');
    //precreating the span tag



    //adding header to the body node 
    document.body.insertAdjacentElement('afterbegin',header);

    //adding nav to the header node 
    document.querySelector('header').insertAdjacentElement('afterbegin',nav);
    //adding anchor to the nav node 
    document.querySelector('nav').insertAdjacentElement('afterbegin',anchor);
    //adding ul to the nav node 
    document.querySelector('nav').appendChild(ul);
    //adding 4 li to the ul node 
    for(i = 0; i < 4; i++)
    {
        //handling the event and sectional styling 
        document.querySelector('ul').appendChild(li.cloneNode()).addEventListener('click',(e) => {
          //console.log(e.target.id);

          let allSection = document.querySelectorAll("section");
          //removing the class for highlighting the current section in view
          for (aSection of allSection) {
            aSection.classList.remove("activeSection");
          }
          
          switch (e.target.id) {
            case "1":
              document
                .querySelector("#section1")
                .classList.add("activeSection");
              break;

            case "2":
              document
                .querySelector("#section2")
                .classList.add("activeSection");
              break;

            case "3":
              document
                .querySelector("#section3")
                .classList.add("activeSection");
              break;

            default:
              document
                .querySelector("#section4")
                .classList.add("activeSection");
              break;
          }
        });
    }

    //fetching all the values of li in the dom
    let lis = document.querySelectorAll('li');


    //this is a variable created to add numerical value to the dynamically generated text in the anchor , for the navigation 
    let idNumber = 1; 
    for(anL of lis) 
    {
        anchorInLi = anL.appendChild(anchor.cloneNode());
        anchorWithClass = anchorInLi.classList.add('nav-link');
        anchorInLi.insertAdjacentText('afterbegin','section'+idNumber);
        idNumber++;
    }

    //fetching all the anchor tags with the class nav-link 
    allLiAnchors = document.querySelectorAll('.nav-link');

    //simply created for an incremented value of numbers to be added to the id of the attribute created by the loop below it . 
    let idValue = 1; 
    for(anAnchor of allLiAnchors)
    {
        //giving each value of anAnchor(which is a value(1 single value) of allLiAnchors) the attribute of #section + what ever the current value of idValue is. 
        anAnchor.setAttribute("href", "#section"+idValue);
        anAnchor.setAttribute("id",idValue)
        //increementing at every loop . 
        idValue++;
    }

    //adding a class of navbar to the nav node
    document.querySelector('nav').classList.add('navbar');
    //adding a class of nav-branding
    document.querySelector('a').classList.add('nav-branding');

    //adding the class of nav-menu to the ul
    document.querySelector("ul").classList.add("nav-menu");

    //fetching all values of li 
    const allLi = document.querySelectorAll("li");

    //adding the class nav-item to all li 
    for(const li of allLi )
    {
        li.classList.add('nav-item');
    }

    

})



