// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = "Click to Expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // ==================CLOSE ============================
    // select the close button
    this.closeButton = this.domElement.querySelector('.close');
    // set a click handler on the closeButton reference, calling the closeArticle method.
    this.closeButton.addEventListener('click', () => this.closeArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if (this.domElement.classList.contains("article-open")) {
      this.expandButton.innerText = "Click to Close";
    } else {
      this.expandButton.innerText = "Click to Expand";
    }
  }

  closeArticle() {
    this.domElement.classList.add('article-close');
  }
}
/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const articles = document.querySelectorAll('.article');
const articleContainer = document.querySelector('.articles');
articles.forEach(article => new Article(article));


// =========================MAKE A ARTICLE=========================

function makeArticle({ title, contentHTML }) {
  const newArticle = document.createElement('div');
  newArticle.classList.add('article');
  const date = new Date();
  const HTML = `<h2>${title}</h2> <p class ="date">${date}</p> ${contentHTML}<span class='expandButton'></span> <button class="close">X</button>`;
  newArticle.innerHTML = HTML;
  return newArticle;
}
function renderArticle(articleToRender) {
  articleContainer.prepend(articleToRender);
  return new Article(articleToRender);
}
// TEST
const testArticle = makeArticle({title:"sam", contentHTML:"<p>ssssssssssssssssssssssssssssssss</p>"});
renderArticle(testArticle);
