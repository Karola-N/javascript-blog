'use strict';

function titleClickHandler(event) {
    //console.log('Link was clicked!');
    //console.log(event);

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    event.preventDefault();
    const clickedElement = this;
    //console.log('clickedElement:', clickedElement);
    /* alternative version of the above:
    console.log('clickedElement (with plus): ' + clickedElement); */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute("href");
    //console.log('articleSelector:', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    //console.log('targetArticle:', targetArticle);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
}

// Generating a list of titles

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);

    function clearMessages() {
        titleList.innerHTML = '';
    }
    clearMessages();

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    //console.log('Articles:', articles);
    let html = '';
    for (let article of articles) {
        /* get the article id */
        const articleId = article.getAttribute("id");
        //console.log('Article ID:', articleId);

        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        //console.log('Article Title:', articleTitle);

        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        //console.log('Link HTML:', linkHTML);

        /* insert link into titleList */
        html = html + linkHTML;
        //console.log('html:', html);
    }
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    //console.log('LINKS:', links)
    for (let link of links) {
        link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();

function generateTags() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log('Articles:', articles);
    /* START LOOP: for every article: */
    for (let a of articles) {
        console.log('a: ', a);
        /* find tags wrapper */
        const tagList = a.querySelector(optArticleTagsSelector);
        console.log('Tag List:', tagList);
        /* make html variable with empty string */
        let html = '';
        console.log('html: ', html);
        /* get tags from data-tags attribute */
        const articleTags = a.getAttribute("data-tags");
        console.log('Article Tags: ', articleTags);
        /* split tags into array */
        const articleTagsArray = articleTags.split(' ');
        console.log('Article Tags Array: ', articleTagsArray);
        /* START LOOP: for each tag */
        for (let tag of articleTagsArray) {
            console.log('Tag: ', tag);
            /* generate HTML of the link */
            const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
            console.log('tagHTML: ', tagHTML);
            /* add generated code to html variable */
            html = html + tagHTML;
            console.log('HTML: ', html);
            /* END LOOP: for each tag */
        }
        /* insert HTML of all the links into the tags wrapper */
        tagList.innerHTML = html;
        /* END LOOP: for every article: */
    }
}

generateTags();
