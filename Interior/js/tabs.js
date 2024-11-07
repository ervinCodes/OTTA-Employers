const tabs = document.querySelectorAll('[data-tab-target]');
const activeClass = 'bg-white-gold';
let activeTab = tabs[0];

// Select the first tab as the detault
activeTab.classList.add(activeClass);
activeTab.classList.add('text-federal-blue');
document.querySelector('#tab1').classList.remove('hidden');

// Add event listener to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetContent = document.querySelector(tab.dataset.tabTarget);

        // Hide all tab-content divs
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));

        // Show the content for the clicked tab
        targetContent.classList.remove('hidden');

        //Remove the active class from the previously active tab
        activeTab.classList.remove(activeClass);
        activeTab.classList.remove('text-federal-blue');

        // Add the active class to the click tab button
        activeTab = tab;
        tab.classList.add(activeClass)
        activeTab.classList.add('text-federal-blue');
    })
})