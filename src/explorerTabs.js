function resetCityTabs(index) {
  const explorerTabs = document.getElementsByClassName('explorerTab');
  for (let i = 0; i < explorerTabs.length; i += 1) {
    const explorerTab = explorerTabs[i];
    explorerTab.className = 'explorerTab';
  }
  if (index > -1) explorerTabs[index].className = 'explorerTab explorerTabSelected';
}

function watchExplorerTabs(callback) {
  const explorerTabs = document.getElementsByClassName('explorerTab');
  for (let index = 0; index < explorerTabs.length; index += 1) {
    const explorerTab = explorerTabs[index];
    explorerTab.addEventListener('click', () => {
      callback(index);
    });
  }
}

export { resetCityTabs, watchExplorerTabs };
