document.getElementById("start").addEventListener("click", handleStart);

function handleStart() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = document.querySelector("#time").value;
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "start",
      url,
    });
  });
}
