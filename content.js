//content.js deals with the webpage in the current opened tab
console.log("Kappa Downloader content.js loaded");

chrome.runtime.onMessage.addListener(gotMessage);
//receives a message from popup.js asking for the image URL scraped from
// webpage in the current tab
function gotMessage(message, sender, sendResopnse) {
  if(message.value && /instagram/.test(message.tabURL)) {
    console.log("Message received: " + message.tabURL);
    var ims = document.getElementsByTagName('img');
    console.log(ims);
    var img_location = ims[ims.length - 1].src;
    console.log(img_location);
    //responds to popup.js with the image URL
    sendResopnse({txt : img_location});
  }
  else
  	sendResopnse({txt : ""});
}
