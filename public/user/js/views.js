const tabButtons = document.querySelectorAll('.VtuTab2 .buydata2');
const tabContents = document.querySelectorAll('.ItermsLists');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked button and corresponding content
        const tabId = button.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);

        button.classList.add('active');
        tabContent.classList.add('active');
    });
});
