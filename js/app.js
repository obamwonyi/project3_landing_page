

/* --------------------------- section end -------------------------------------*/

//document.cloneNode
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
    //const anchorWithClass = anchor.classList.add('nav-link');
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
    //adding div to the nav node 

    //adding 3 li to the ul node and 3 span to the div node
    for(i = 0; i < 4; i++)
    {
        document.querySelector('ul').appendChild(li.cloneNode());
    }

    let lis = document.querySelectorAll('li');

    console.log(lis);

    let idNumber = 1; 
    for(anL of lis) 
    {
        anchorInLi = anL.appendChild(anchor.cloneNode());
        anchorWithClass = anchorInLi.classList.add('nav-link');
        anchorInLi.insertAdjacentText('afterbegin','section'+idNumber);
        idNumber++;
    }

    allLiAnchors = document.querySelectorAll('.nav-link');

    let idValue = 1; 
    for(anAnchor of allLiAnchors)
    {
        anAnchor.setAttribute("href", "#section"+idValue);
        idValue++;
    }

    document.querySelector('nav').classList.add('navbar');
    document.querySelector('a').classList.add('nav-branding');

    document.querySelector("ul").classList.add("nav-menu");
    document.querySelector("div").classList.add("harmburger");

    const allLi = document.querySelectorAll("li");
    const allSpan = document.querySelectorAll('span');


    for(const li of allLi )
    {
        li.classList.add('nav-item');
    }

    for(const span of allSpan) 
    {
        span.classList.add('bar');
    }
    

})



