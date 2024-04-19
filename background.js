chrome.action.onClicked.addListener(function (tab) {
  //open pages
  // 点击插件图标调用
  console.log(tab, "tab");
  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   files: ["content-script.js"],
  // });
});
