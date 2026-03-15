/* Shared utilities — copy buttons for prompt blocks */
(function () {
  document.querySelectorAll('.prompt-block').forEach(function (block) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      var clone = block.cloneNode(true);
      var rm = clone.querySelectorAll('.label,.copy-btn');
      rm.forEach(function (el) { el.remove(); });
      var text = clone.textContent.trim();
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 1500);
      });
    });
    block.appendChild(btn);
  });
})();
