const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content
function selectItem(e) {
    // Remove the border before add another border
    removeBorder();
    removeShow();
    // Add border to the current tab selected
    this.classList.add('tab-border')
    // Grab Content Item dynamically
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem))