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
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);

    function clearMessages() {
        titleList.innerHTML = '';
    }
    clearMessages();

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    //console.log('Articles:', articles);
    console.log('customSelector:', customSelector);
    console.log('optArticleSelector + customSelector:', optArticleSelector + customSelector);
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

function tagClickHandler(event) {
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute("href");
    console.log('href: ', href);
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log('tag: ', tag);
    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('activeTagLinks: ', activeTagLinks);
    /* START LOOP: for each active tag link */
    for (let activeTag of activeTagLinks) {
        /* remove class active */
        activeTag.classList.remove('active');
        /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const equalTags = document.querySelectorAll('a[href="' + href + '"]');
    console.log('Equal Tags: ', equalTags);
    /* START LOOP: for each found tag link */
    for (let equalTag of equalTags) {
        /* add class active */
        equalTag.classList.add('active');
        /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags() {
    /* find all links to tags */
    const links = document.querySelectorAll('.post-tags a');
    /* START LOOP: for each link */
    for (let link of links) {
        /* add tagClickHandler as event listener for that link */
        link.addEventListener('click', tagClickHandler);
        /* END LOOP: for each link */
    }
}

addClickListenersToTags();

function generateAuthors() {
    // find all articles
    const articles = document.querySelectorAll(optArticleSelector);
    // START LOOP: for every article:
    for (let art of articles) {
        // find authors wrapper
        const author = art.querySelector(optArticleAuthorSelector);
        console.log('Author: ', author);
        // get author from data-author attribute
        const articleAuthor = art.getAttribute("data-author");
        console.log('Article Author: ', articleAuthor);
        //make html 'by author_name'
        const authorHTML = 'by ' + articleAuthor;
        console.log('authorHTML: ', authorHTML);
        // insert HTML of all the links into the tags wrapper
        author.innerHTML = authorHTML;
        // END LOOP: for every article:
    }
}
generateAuthors();
