const articleRoutes = (function get() {
  const req = new XMLHttpRequest();

  function getArticle(id) {
    req.open('GET', `/article/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();

    const article = JSON.parse(req.responseText);
    article.createdAt = new Date(article.createdAt);
    return article;
  }

  function getArticles() {
    req.open('GET', '/articles', false);
    req.setRequestHeader('content-type', 'application/json');
    req.send();
    const articles = JSON.parse(req.responseText);
    articles.forEach((currentArticle) => {
      currentArticle.createdAt = new Date(currentArticle.createdAt);
    });
    return articles;
  }

  function editArticle(id, article) {
    req.open('PUT', `/article/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.onerror = function () {
      reject(new Error('Error'));
    };
    req.send(JSON.stringify(article));
  }

  function addArticle(article) {
    req.open('POST', '/article', false);
    req.setRequestHeader('content-type', 'application/json');
    req.onerror = function () {
      reject(new Error('Error'));
    };
    req.send(JSON.stringify(article));
  }

  function deleteArticle(id) {
    req.open('DELETE', `/articles/${id}`, false);
    req.setRequestHeader('content-type', 'application/json');
    req.onerror = function () {
      reject(new Error('Error'));
    };
    req.send();
  }

  return {
    getArticle,
    getArticles,
    deleteArticle,
    addArticle,
    editArticle,
  };
}());
