var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "icon_on.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"altextEnable.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "icon_off.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"altextDisable.js"});
  }
});