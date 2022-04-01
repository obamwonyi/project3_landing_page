
/*  -----summary of the code below ------
The event listener below will fire when the page(window) loads this will run a couple of codes 
inside the call back function passed to it in the second parameter , this execution will simply create a navigation with all the neccessary class id and attributed needed for a responsive navigation bar. 

*/
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
            console.log(e.target.id);
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



