document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      // Deselect all tabs
      document.querySelectorAll('.tab').forEach((t) => t.setAttribute('aria-selected', 'false'));
      // Hide all content
      document.querySelectorAll('.tab-content').forEach((content) => content.classList.add('hidden'));
      // Select clicked tab
      tab.setAttribute('aria-selected', 'true');
      // Show linked content
      document.getElementById(tab.getAttribute('aria-controls')).classList.remove('hidden');
    });
  });