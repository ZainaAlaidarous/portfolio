// loader.js
// Dynamically loads the HTML section partials (sections/*.html) into index.html
// using relative paths, then notifies script.js once everything is in the DOM.
//
// Works with GitHub Pages (and any static host) as long as the page is served
// over http/https — opening index.html directly via the file:// protocol will
// block these fetch() requests due to browser security restrictions.

(function () {
  const placeholders = Array.from(document.querySelectorAll("[data-include]"));

  const loadSection = (el) => {
    const url = el.getAttribute("data-include");

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then((html) => {
        const template = document.createElement("template");
        template.innerHTML = html.trim();
        el.replaceWith(template.content);
      })
      .catch((error) => {
        console.error(error);
        el.outerHTML = `<!-- Failed to load section: ${url} -->`;
      });
  };

  Promise.all(placeholders.map(loadSection)).then(() => {
    document.dispatchEvent(new CustomEvent("sectionsLoaded"));
  });
})();
