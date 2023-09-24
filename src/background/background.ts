chrome.runtime.onInstalled.addListener(() => {
  console.log('I just installed new extension');
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log('I just bookmarked this page');
});
