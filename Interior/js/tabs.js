// const tabs = document.querySelectorAll('[data-tab-target]');
// const activeClass = 'bg-white';
// const activeText = 'text-federal-blue'
// let activeTab = tabs[0];

// // Select the first tab as the detault
// activeTab.classList.add(activeClass);
// activeTab.classList.add(activeText);
// activeTab.classList.remove('text-white');
// document.querySelector('#tab1').classList.remove('hidden');

// // Add event listener to each tab
// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const targetContent = document.querySelector(tab.dataset.tabTarget);

//         // Hide all tab-content divs
//         document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));

//         // Show the content for the clicked tab
//         targetContent.classList.remove('hidden');

//         //Remove the active class from the previously active tab
//         activeTab.classList.remove(activeClass);
//         activeTab.classList.remove(activeText);
//         activeTab.classList.add('text-white');

//         // Add the active class to the click tab button
//         activeTab = tab;
//         tab.classList.add(activeClass)
//         activeTab.classList.add(activeText);
//         activeTab.classList.remove('text-white');
//     })
// })

// function updateTabSelection(event) {
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach(tab => {
//       tab.setAttribute('aria-selected', 'false');
//     });
//     event.currentTarget.setAttribute('aria-selected', 'true');
//   }

//   function selectFirstTabOnLoad() {
//     const firstTab = document.querySelector('.tab');
//     if (firstTab) {
//       firstTab.setAttribute('aria-selected', 'true');
//     }
//   }

//   document.querySelectorAll('.tab').forEach(tab => {
//     tab.addEventListener('click', updateTabSelection);
//   });

//   document.addEventListener('DOMContentLoaded', selectFirstTabOnLoad);

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