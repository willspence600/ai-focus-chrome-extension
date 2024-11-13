chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onActivated.addListener((activeInfo) => {
  showSummary(activeInfo.tabId);
});
chrome.tabs.onUpdated.addListener(async (tabId) => {
  showSummary(tabId);
});

console.log("background")

async function showSummary(tabId) {
  console.log("showSummary1");

  const tab = await chrome.tabs.get(tabId);
  if (!tab.url.startsWith('http')) {
    return;
  }
  console.log("showSummary2, and tab:", tab)
  const injection = await chrome.scripting.executeScript({
    target: { tabId },
    files: ['scripts/extract-content.js']
  });
  console.log('Injected script maybe...');
  console.log('Injected script maybe:', injection[0].result);
  // chrome.storage.session.set({ pageContent: injection[0].result });
  chrome.storage.session.set({ pageContent: "injection[0].result" });
}
