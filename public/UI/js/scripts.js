let user = 'Andrew';

const articlesService = (function () {
  let articles = articleRoutes.getArticles().slice();

  const allTags = ['доллар', 'политика', 'Лукашенко', 'AЭС', 'Польша', 'экономика', 'деньги', 'Газпром', 'Минск', 'автобусы', 'Мкад-2', 'дороги'];

  function convertDate(a) {
    return `${a.getFullYear()}-${a.getMonth() < 10 ? '0' : ''}${a.getMonth()}-${a.getDate()}`;
  }

  function compareDate(a, b) {
    return a.createdAt > b.createdAt ? -1 : 1;
  }

  function getArticlesByFilter(filterConfig) {
    const filteredArray = [];
    for (let i = 0; i < articles.length; i++) {
      if (filterConfig.dateStart && filterConfig.dateFinish) {
        if (compareDate(filterConfig.dateStart, convertDate(articles[i].createdAt)) && compareDate(
            convertDate(articles[i].createdAt), filterConfig.dateFinish)) {
          filteredArray.push(articles[i]);
        }
      }
      if (filterConfig.author) {
        if (articles[i].author === filterConfig.author) {
          filteredArray.push(articles[i]);
        }
      }
      if (filterConfig.tag) {
        for (let j = 0; j < filterConfig.tag.length; j++) {
          if (articles[i].tag.indexOf(filterConfig.tag[j]) !== -1) {
            filteredArray.push(articles[i]);
          }
        }
      }
    }
    return filteredArray;
  }

  function getArticles(skip, top, filterConfig) {
    skip = skip || 0;
    top = top || 10;
    if (articles.length < top) {
      top = articles.length;
    }
    articles = articleRoutes.getArticles().slice();
    let newArticles = [];
    if (filterConfig) {
      newArticles = getArticlesByFilter(filterConfig);
    } else {
      newArticles = articles;
    }
    newArticles.sort(compareDate);

    return newArticles.slice(skip, skip + top);
  }

  function getArticle(id) {
    return articleRoutes.getArticle(id);
  }

  function validateArticle(article) {
    if (!article) {
      return false;
    }
    if (typeof article.id !== 'string') {
      return false;
    }
    if (typeof article.title !== 'string' || article.title.length > 100 || article.title.length < 1) {
      return false;
    }
    if (typeof article.summary !== 'string' || article.summary.length > 200) {
      return false;
    }
    if (!(article.createdAt instanceof Date)) {
      return false;
    }
    if (typeof article.author !== 'string' || article.author.length < 1) {
      return false;
    }
    if (typeof article.content !== 'string' || article.content.length < 1) {
      return false;
    }
    if (article.tag.length === 0 || article.tag.length > 5) {
      return false;
    }
    for (let i = 0; i < articles.length; i++) {
      if (articles[i] != null) {
        if (articles[i].id === article.id) {
          return false;
        }
      }
    }
    return true;
  }

  function addArticle(article) {
    if (validateArticle(article)) {
      article.id = article.id.toString();
      articleRoutes.addArticle(article);
      return true;
    }
    return false;
  }

  function clone(obj) {
    if (!obj) {
      return obj;
    }
    const copy = obj.constructor();
    Object.keys(obj).forEach((attr) => {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) {
        copy[attr] = obj[attr];
      }
    });
    return copy;
  }

  function removeArticle(id) {
    const articleToDelete = articleRoutes.getArticle(id);
    if (!articleToDelete) {
      return false;
    }
    articleRoutes.deleteArticle(id);
    articles = articleRoutes.getArticles().slice();
    return true;
  }

  function editArticle(id, article) {
    const currentArticle = getArticle(id);
    const articleCopy = clone(currentArticle);
    let isEdited = true;
    removeArticle(currentArticle.id);
    Object.keys(article).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(articleCopy, key)) {
        articleCopy[key] = article[key];
      }
    });
    if (!validateArticle(articleCopy)) {
      isEdited = false;
      articleRoutes.addArticle(currentArticle);
    } else {
      articleCopy.id = articleCopy.id.toString();
      articleRoutes.addArticle(articleCopy);
    }
    articles = articleRoutes.getArticles();
    return isEdited;
  }

  function addTag(tag) {
    if (allTags.indexOf(tag) === -1) {
      allTags.push(tag);
      return true;
    }
    return false;
  }

  function removeTag(tag) {
    if (allTags.indexOf(tag) !== -1) {
      allTags.splice(articles.indexOf(tag), 1);
      return true;
    }
    return false;
  }

  function getArticlesSize() {
    return articles.length;
  }

  function getNullArticle() {
    return {
      id: '',
      title: '',
      summary: '',
      createdAt: '',
      tag: '',
      author: '',
      content: '',
    };
  }

  return {
    getArticle,
    getArticles,
    validateArticle,
    addArticle,
    editArticle,
    removeArticle,
    addTag,
    removeTag,
    getArticlesSize,
    getNullArticle,
  };
}());

const filterConfig = {
  author: 'name',
  dateStart: 10,
  dateFinish: 12,
  tag: ['df', 'hello'],
};

const articleRenderer = (function () {
  let ARTICLE_TEMPLATE;
  let LOG_TEMPLATE;
  let DETAILED_ARTICLE_TEMPLATE;
  let EDIT_TEMPLATE;
  let FILTER_TEMPLATE;
  let ERROR_TEMPLATE;

  let ARTICLE_LIST_NODE;
  let CONTENT;
  let controlPanel;
  let logNode;
  let blockWithSearch;
  let editOrAddArticle;

  let isOpenFilter = false;
  let isItError = false;
  let isNewArticle = false;
  let deletedFilter;
  let deletedAddButton;
  let deletedControlButtons;
  let deletedBlockSearch;
  let deletedMoreNews;

  function init() {
    ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
    LOG_TEMPLATE = document.querySelector('#template-log');
    DETAILED_ARTICLE_TEMPLATE = document.querySelector('#template-detailed-news');
    EDIT_TEMPLATE = document.querySelector('#template-edit');
    FILTER_TEMPLATE = document.querySelector('#template-filter');
    ERROR_TEMPLATE = document.querySelector('#template-error');

    ARTICLE_LIST_NODE = document.querySelector('.article-list');
    CONTENT = document.querySelector('.content');
    logNode = document.querySelector('.log-item');
    deletedControlButtons = document.querySelector('.control-buttons');
    controlPanel = document.querySelector('.control-panel-2');
    blockWithSearch = document.querySelector('.block-with-search');
  }

  function loadUser(user) {
    const addArticleButton = document.getElementById('add-button');
    if (user) {
      document.querySelector('.profile').textContent = `Привет, ${user}!`;
      document.querySelector('.log-in-action').textContent = 'Выход';
      if (deletedAddButton) {
        controlPanel.appendChild(deletedAddButton);
        deletedAddButton = null;
      }
    } else {
      document.querySelector('.log-In').lastElementChild.src = 'images/no-logo.jpg';
      document.querySelector('.profile').textContent = 'Привет, гость!';
      document.querySelector('.log-in-action').textContent = 'Вход';
      if (addArticleButton) {
        deletedAddButton = addArticleButton.parentNode.removeChild(addArticleButton);
      }
    }
  }

  function formatDate(d) {
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  }

  function renderArticle(article) {
    const template = ARTICLE_TEMPLATE;
    template.content.querySelector('.article-list-item').dataset.id = article.id;
    template.content.querySelector('.article-list-item-title').textContent = article.title;
    template.content.querySelector('.article-list-item-summary').textContent = article.summary;
    template.content.querySelector('.article-list-item-author').textContent = article.author;
    template.content.querySelector('.article-list-item-tags').textContent = article.tag;
    template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);

    const controlButtons = template.content.querySelector('.control-buttons');
    if (!user) {
      if (controlButtons) {
        deletedControlButtons = template.content.querySelector('.block-of-buttons').removeChild(controlButtons);
      }
    } else if (deletedControlButtons) {
      template.content.querySelector('.block-of-buttons').appendChild(deletedControlButtons);
    }
    return template.content.querySelector('.article-list-item').cloneNode(true);
  }

  function renderArticles(articles) {
    return articles.map(article => renderArticle(article));
  }

  function insertArticlesInDom(articles) {
    loadUser(user);
    const articlesNodes = renderArticles(articles);
    articlesNodes.forEach((node) => {
      ARTICLE_LIST_NODE.appendChild(node);
    });
  }

  function insertArticleInDom(article) {
    articlesService.addArticle(article);
    ARTICLE_LIST_NODE.appendChild(renderArticle(article));
  }

  function removeArticlesFromDom() {
    ARTICLE_LIST_NODE.innerHTML = '';
  }

  function removeArticleFromDom(id) {
    articlesService.removeArticle(id);

    removeArticlesFromDom();
    const articles = articlesService.getArticles(0, 10);
    insertArticlesInDom(articles);
  }

  function editArticleInDom(id, article) {
    articlesService.editArticle(id, article);
    removeArticleFromDom();
    renderArticles();
  }

  function deleteFilter() {
    if (deletedFilter) {
      controlPanel.appendChild(deletedFilter);
    }
    if (isOpenFilter) {
      logNode.removeChild(document.querySelector('.filter'));
    }
    isOpenFilter = false;
  }

  function insertMain() {
    if (deletedMoreNews) {
      blockWithSearch.appendChild(deletedBlockSearch);
      CONTENT.appendChild(deletedMoreNews);
    }
    if (isItError) {
      logNode.removeChild(document.querySelector('.error-img'));
      isItError = false;
    }

    deleteFilter();
    removeArticlesFromDom();
    startAppSecond();
  }

  function insertLogin() {
    removeArticlesFromDom();
    deleteFilter();
    if (user) {
      user = null;
      document.querySelector('.more-news');
      insertMain();
    } else {
      if (document.getElementById('more-news')) {
        deletedMoreNews = CONTENT.removeChild(document.getElementById('more-news'));
        deletedBlockSearch = blockWithSearch.removeChild(controlPanel);
      }
      document.querySelector('.log-in-action').textContent = '';
      logNode.appendChild(LOG_TEMPLATE.content.querySelector('.log-list-item').cloneNode(true));
    }
  }

  function isCorrectLogin(name, password) {
    return (name === 'admin' && password === 'admin');
  }

  function logIn() {
    const inputName = document.querySelector('.name-event').value;
    const inputPassword = document.querySelector('.password-event').value;

    if (isCorrectLogin(inputName, inputPassword)) {
      user = inputName;
      loadUser(user);
      logNode.removeChild(document.querySelector('.log-list-item'));
      insertMain();
    } else {
      document.querySelector('.name-event').value = '';
      document.querySelector('.password-event').value = '';
      alert('Попробуйте еще раз.');
    }
  }

  function removeArticleFromDomFromDetailed(id) {
    articlesService.removeArticle(id);
    insertMain();
  }

  function insertMainAfterLog() {
    insertMain();

    if (document.querySelector('.log-list-item')) {
      logNode.removeChild(document.querySelector('.log-list-item'));
    }
  }

  function deleteMain() {
    removeArticlesFromDom();
    if (document.getElementById('more-news')) {
      deletedMoreNews = CONTENT.removeChild(document.getElementById('more-news'));
      deletedBlockSearch = blockWithSearch.removeChild(controlPanel);
    }
  }

  function insertDetailedArticle(articleID, flag) {
    flag = flag || 0;
    removeArticlesFromDom();
    const article = articlesService.getArticle(articleID);
    const detailedTemp = DETAILED_ARTICLE_TEMPLATE;

    detailedTemp.content.querySelector('.detailed-news').dataset.id = article.id;
    detailedTemp.content.querySelector('.header-news-detailed').textContent = article.title;
    detailedTemp.content.querySelector('.detailed-content').textContent = article.content;
    detailedTemp.content.querySelector('.detailed-author').textContent = article.author;
    detailedTemp.content.querySelector('.tags-detailed-news').textContent = article.tag;
    detailedTemp.content.querySelector('.detailed-time').textContent = formatDate(article.createdAt);

    ARTICLE_LIST_NODE.appendChild(detailedTemp.content.querySelector('.detailed-news').cloneNode(true));

    if (!user) {
      document.querySelector('.detailed-edit-del').removeChild(document.getElementById('del-edit-icon'));
    }

    deleteFilter();
    if (flag === 0) {
      deletedMoreNews = CONTENT.removeChild(document.getElementById('more-news'));
      deletedBlockSearch = blockWithSearch.removeChild(controlPanel);
    }
  }

  function insertEditFormArticle(id) {
    deleteMain();
    deleteFilter();
    const editTemp = EDIT_TEMPLATE;
    const date = new Date();
    editTemp.content.querySelector('.time-edit-news').textContent = date.toLocaleString('ru');
    if (id) {
      const article = articlesService.getArticle(id);

      editTemp.content.querySelector('.id-edit-news').textContent = article.id;
      editTemp.content.querySelector('.author-edit-news').textContent = article.author;
      editTemp.content.querySelector('.title-edit-news').value = article.title;
      editTemp.content.querySelector('.tags-edit-news').value = article.tag;
      editTemp.content.querySelector('.summary-edit-news').textContent = article.summary;
      editTemp.content.querySelector('.content-edit-news').textContent = article.content;
    } else {
      isNewArticle = true;
      editTemp.content.querySelector('.id-edit-news').textContent = Date.now().toString();
      editTemp.content.querySelector('.author-edit-news').textContent = user;
      editTemp.content.querySelector('.title-edit-news').value = '';
      editTemp.content.querySelector('.tags-edit-news').value = '';
      editTemp.content.querySelector('.summary-edit-news').textContent = '';
      editTemp.content.querySelector('.content-edit-news').textContent = '';
    }
    ARTICLE_LIST_NODE.appendChild(editTemp.content.querySelector('.edit-news-form').cloneNode(true));
  }

  function insertAddEditArticle() {
    const date = new Date();
    editOrAddArticle = articlesService.getNullArticle();

    editOrAddArticle.id = document.querySelector('.id-edit-news').textContent;
    editOrAddArticle.title = document.querySelector('.title-edit-news').value;
    editOrAddArticle.summary = document.querySelector('.summary-edit-news').value;
    editOrAddArticle.content = document.querySelector('.content-edit-news').value;
    editOrAddArticle.author = user;
    editOrAddArticle.tag = document.querySelector('.tags-edit-news').value.split(', ');
    editOrAddArticle.createdAt = date;

    let flag = false;

    if (!isNewArticle) {
      articlesService.editArticle(editOrAddArticle.id, editOrAddArticle);
      flag = true;
    } else if (articlesService.validateArticle(editOrAddArticle)) {
      insertArticleInDom(editOrAddArticle);
      flag = true;
      isNewArticle = false;
    } else {
      alert('Неверныый формат новости, попробуйте еще раз');
    }
    if (flag) {
      ARTICLE_LIST_NODE.removeChild(document.querySelector('.edit-news-form'));
      insertDetailedArticle(editOrAddArticle.id, 1);
    }
  }

  function insertFilter() {
    deletedFilter = controlPanel.removeChild(document.getElementById('filters'));
    logNode.appendChild(FILTER_TEMPLATE.content.querySelector('.filter').cloneNode(true));
    isOpenFilter = true;
  }

  function showError() {
    deleteFilter();
    logNode.appendChild(ERROR_TEMPLATE.content.querySelector('.error-img').cloneNode(true));
    isItError = true;
    deleteMain();
  }

  function applyFilter() {
    filterConfig.author = document.getElementById('search-author').value;
    filterConfig.dateStart = document.getElementById('search-date-with').value;
    filterConfig.dateFinish = document.getElementById('search-date-to').value;
    filterConfig.tag = document.getElementById('search-tags').value.split(', ');

    deleteFilter();

    const articles = articlesService.getArticles(0, 1000, filterConfig);
    if (articles.length - 1) {
      removeArticlesFromDom();
      articleRenderer.insertArticlesInDom(articles);
    } else {
      showError();
    }
  }

  return {
    init,
    insertArticlesInDom,
    insertArticleInDom,
    editArticleInDom,
    removeArticlesFromDom,
    removeArticleFromDom,
    removeArticleFromDomFromDetailed,
    insertLogin,
    logIn,
    insertDetailedArticle,
    insertMain,
    insertMainAfterLog,
    insertEditFormArticle,
    insertAddEditArticle,
    insertFilter,
    deleteFilter,
    showFilter: applyFilter,
  };
}());

function selectEvent(event) {
  let elemName = event.target.className;
  if (!elemName) {
    elemName = event.target.parentNode.className;
  }
  switch (elemName) {
    case 'log-in-action':
      articleRenderer.insertLogin();
      break;
    case 'header-text':
      articleRenderer.insertMainAfterLog();
      break;
    default:
      break;
  }
}

function selectEventInArticle(event) {
  const eventClassName = event.target.className;
  switch (eventClassName) {
    case 'delete-icon': {
      const articleToDelete = parseInt(
        event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'), 10);
      articleRenderer.removeArticleFromDom(articleToDelete);
      break;
    }
    case 'delete-icon-detailed': {
      const articleToDeleteDet = parseInt(
        event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'), 10);
      articleRenderer.removeArticleFromDomFromDetailed(articleToDeleteDet);
      break;
    }
    case 'article-list-item-title': {
      const articleToShowID = parseInt(event.target.parentElement.getAttribute('data-id'), 10);
      articleRenderer.insertDetailedArticle(articleToShowID);
      break;
    }
    case 'button2':
      articleRenderer.logIn();
      break;
    case 'to-main':
      articleRenderer.insertMain();
      break;
    case 'edit-icon': {
      const articleToEditDet = parseInt(
        event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'), 10);
      articleRenderer.insertEditFormArticle(articleToEditDet);
      break;
    }
    case 'edit-icon-detailed': {
      const articleToEditDetailed = parseInt(
        event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'), 10);
      articleRenderer.insertEditFormArticle(articleToEditDetailed);
      break;
    }
    case 'button1':
      articleRenderer.insertEditFormArticle();
      break;
    case 'button3':
      articleRenderer.insertAddEditArticle();
      break;
    case 'button5':
      articleRenderer.insertFilter();
      break;
    case 'button7':
      articleRenderer.deleteFilter();
      break;
    case 'button6':
      articleRenderer.showFilter();
      break;
    default:
      break;
  }
}

function addEventList() {
  const mainPageElements = document.querySelector('.content');
  const logElements = document.querySelector('.header');

  mainPageElements.addEventListener('click', selectEventInArticle);
  logElements.addEventListener('click', selectEvent);
}

addEventList();

const pagination = (function () {
  let total;
  const perPage = 10;
  let currentPage = 1;
  let showMoreButton;
  let showMoreCallback;

  function getParams() {
    return {
      top: perPage,
      skip: (currentPage - 1) * perPage,
    };
  }

  function getTotalPages() {
    return Math.ceil(total / perPage);
  }

  function hideShowMoreButton() {
    showMoreButton.style.display = 'none';
  }

  function nextPage() {
    currentPage++;
    if (getTotalPages() <= currentPage) {
      hideShowMoreButton();
    }

    return getParams();
  }

  function handleShowMoreClick() {
    const paginationParams = nextPage();
    showMoreCallback(paginationParams.skip, paginationParams.top);
  }

  function init(_total, showMoreCb) {
    total = _total;
    showMoreCallback = showMoreCb;
    showMoreButton = document.querySelector('.more-news');
    showMoreButton.addEventListener('click', handleShowMoreClick);

    /* Не показывать кнопку если статей нет */
    if (getTotalPages() <= currentPage) {
      // hideShowMoreButton();
    }

    /* Вернуть skip, top для начальной отрисовки статей */
    return getParams();
  }

  return {
    init,
  };
}());

function renderArticlesWithPagination(skip, top) {
  const articles = articlesService.getArticles(skip, top);

  articleRenderer.insertArticlesInDom(articles);
}

function startAppSecond() {
  pagination.init(articlesService.getArticlesSize(), (skip, top) => {
    renderArticlesWithPagination(skip, top);
  });
  renderArticlesWithPagination(pagination.skip, pagination.top);
}

function startAppFirst() {
  articleRenderer.init();
  startAppSecond();
}

document.addEventListener('DOMContentLoaded', startAppFirst);
