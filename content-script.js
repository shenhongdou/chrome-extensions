chrome.runtime.onMessage.addListener((req, sender, sendResp) => {
  const data = req;
  if (data.action === "start") {
    const video = document.querySelector("video");

    video.play();
  }
});
