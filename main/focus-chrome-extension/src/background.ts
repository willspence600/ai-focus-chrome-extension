// background/background.ts

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onActivated.addListener((activeInfo) => {
  showSummary(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener(async (tabId) => {
  showSummary(tabId);
});

async function showSummary(tabId: number) {
  const tab = await chrome.tabs.get(tabId);
  if (!tab.url || !tab.url.startsWith('http')) {
    return;
  }
  const injection = await chrome.scripting.executeScript({
    target: { tabId },
    files: ['content/extract-content.js'],
  });
  chrome.storage.session.set({ pageContent: injection[0].result });
}
