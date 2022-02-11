const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content
function selectItem(e) {
    // Add border to the current tab selected
    this.classList.add('tab-border')
}

// Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem))