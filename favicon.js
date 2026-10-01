// i often forget to add this
(function() {
  var faviconUrl = 'https://avatars.githubusercontent.com/u/317297066?v=4';
  
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  
  link.type = 'image/png';
  link.href = faviconUrl;
})();
