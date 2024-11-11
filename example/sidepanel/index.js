let pageContent = '';
const summaryElement = document.body.querySelector('#summary');

chrome.storage.session.get('pageContent', ({ pageContent }) => {
  onContentChange(pageContent);
});

chrome.storage.session.onChanged.addListener((changes) => {
  const pageContent = changes['pageContent'];
  onContentChange(pageContent.newValue);
});

async function onContentChange(newContent) {
  if (pageContent == newContent) {
    return;
  }
  pageContent = newContent;
  let summary;
  if (newContent) {
    summary = await newContent;
  } else {
    summary = "There's nothing to summarize";
  }

  summaryElement.textContent = '';
  const paragraphs = summary.split(/\r?\n/);
  console.log(paragraphs)
  for (const paragraph of paragraphs) {
    if (paragraph) {
      summaryElement.appendChild(document.createTextNode(paragraph));
    }
    summaryElement.appendChild(document.createElement('BR'));
  } 
}
