'use strict';

function titleClickHandler(event) {
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }
    /* [IN PROGRESS] add class 'active' to the clicked link */
    const clickedElement = this,
        links = document.querySelectorAll('.titles a');
    console.log('clickedElement:', clickedElement);
    /* alternative version of the above:
    console.log('clickedElement (with plus): ' + clickedElement); */
    for (let link of links) {
        clickedElement.classList.add('active');
        //link.addEventListener('click', clickedElement.classList.add('active'));
        //link.classList.add('active');
    }
}

/* [DONE] remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.post.active');

for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
}
/* get 'href' attribute from the clicked link */

/* find the correct article using the selector (value of 'href' attribute) */

/* add class 'active' to the correct article */

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}