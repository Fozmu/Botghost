document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const articleList = document.getElementById('articleList');
  const articles = articleList.querySelectorAll('.article-item');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();


    if (searchTerm.length > 0) {
      articles.forEach(article => {
        const title = article.dataset.title.toLowerCase();
        const textContent = article.textContent.toLowerCase();

        if (title.includes(searchTerm) || textContent.includes(searchTerm)) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    } else {
      articles.forEach(article => {
        article.style.display = 'none';

      });
    }
  });

});