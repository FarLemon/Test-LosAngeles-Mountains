const buttonsNav = document.querySelector('.team__nav');
const buttons = Array.from(buttonsNav.children);
const tabsContainer = document.querySelector('.team__tabs');
const tabs = Array.from(tabsContainer.children);
const accButtons = document.getElementsByClassName("team__tabs__button");



for (i = 0; i < accButtons.length; i++) {
  accButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


buttonsNav.addEventListener('click', e => {
  const targetButton = e.target.closest('button');
  if (!targetButton) return;
  const currentTab = tabsContainer.querySelector('.current');
  const tabIndex = tabs.indexOf(currentTab);
  const desiredTab = buttons.findIndex(button => button === targetButton);
  if (tabIndex !== desiredTab) {
    currentTab.classList.remove('current');
    tabs[desiredTab].classList.add('current');
    buttonsNav.querySelector('.current').classList.remove('current');
    buttons[desiredTab].classList.add('current');
  };
});