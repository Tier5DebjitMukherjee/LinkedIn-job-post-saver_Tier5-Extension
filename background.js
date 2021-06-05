console.log("I am in background")

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(auto) {
console.log("message", auto)

if(auto.action==="startAutoSaver"){
    messagegoes(auto);
}
else if(auto.action==="badges"){
    if(auto.badge){
        chrome.browserAction.setBadgeText({ text: auto.badge.text, tabId: auto.badge.tabID });
    }
}
}
)

})
     

const messagegoes = (auto) => {
    var sv= { 
        action: "AutoSaver", 
        linkedin: auto.saved,

    }

    console.log("Here I'm in background with :: ", JSON.stringify(sv, null, 4))
    chrome.tabs.query({
        active: true,
        currentWindow : true
    }, function(tabs) {
        auto.tabID = tabs[0].id;
        chrome.tabs.sendMessage(tabs[0].id, sv , function(data){
            if (chrome.runtime.lastError) {
            } else {
            }
            console.log("linkedin", sv);
        })
    })
}