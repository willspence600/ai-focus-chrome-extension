import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [summary, setSummary] = useState('Nothing to show...');

  useEffect(() => {
    chrome.storage.session.get('pageContent', ({ pageContent }) => {
      // console.log(pageContent);
      onContentChange(pageContent);
    });

    chrome.storage.session.onChanged.addListener((changes) => {
      const pageContent = changes['pageContent'];
      // if (pageContent) {
      //   // console.log(pageContent);

      //   onContentChange(pageContent.newValue);
      // }
      onContentChange(pageContent.newValue);
    });
  }, []);

  async function onContentChange(newContent: string) {
    if (!newContent) {
      setSummary("There's nothing to summarize 222");
      return;
    }

    setSummary('Loading...');
    // Here you can add code to summarize the content if needed
    setSummary(newContent);
  }

  return (
    <div className="App">
      {/* {warning && <div className="warning">{warning}</div>} */}
      <p className="result">{summary}</p>
      <div className='text-4xl bg-red-600'>HELLO</div>
    </div>
  );
}

export default App;
