console.log("kappa downloader popup.js loaded!!");

//params for tab
var params = {
  active : true,
  currentWindow : true
}
//get all the tabs
chrome.tabs.query(params, gotTabs);
//once receiveing all the tabs, send msg to content.js with the current tab id
// as tabs[0].id.
function gotTabs(tabs) {
  //msg to be sent to content.js
  let msg = {
      value : true,
      tabURL : tabs[0].url
    }

    //after sending the message, the content.js sends a response
    chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {

      if(response != undefined) {
        console.log(tabs[0].url);

        if(/instagram/.test(tabs[0].url)) {   //*******************for instagram
          console.log(response.txt);
          var a = document.createElement('a');
          a.setAttribute('href', response.txt);
          a.setAttribute('id', 'kappa');
          a.setAttribute('download', '');
          document.getElementsByTagName('body')[0].appendChild(a);
          let element = document.getElementById("kappa");
          element.click();
          element.parentNode.removeChild(element);
        }

        else if(/youtube/.test(tabs[0].url)) {   //*******************for youtube
          var blob = new Blob([tabs[0].url], {type: "text/plain"}); //creating the text file
          var url = URL.createObjectURL(blob); //creating an URL for the text file
          chrome.downloads.download({
            url: url, // The object URL can be used as download URL
            filename: "mkc.txt",
            conflictAction: "overwrite",
            saveAs: false
          }, function(downloadID) {
            console.log("Object url: "+url);
            console.log("Downloaded url with id: ",downloadID);
          });  
          console.log("In construction!!");
        }

        //*******EXPERIMENTAL WORK************************

        
        //*************************************************

      }

      else {
        let h3 = document.getElementsByTagName('h3');
        console.log(h3);
        h3.innerHTML = "<span style = 'color : red'>Sorry</span>, this website is not supported!";

      }

    });
}