console.log("I'm from popup");

var Liport = chrome.extension.connect(
    {
        name: "popup-Background"
    }
)

const  debjit = document.querySelector("#Liext");
debjit.addEventListener("submit" , function() {
    var t=document.querySelector("#Li").value;
    console.log("t", t)
   
chrome.tabs.query(
    {
        active: true,
        currentWindow: true
    },
    function(tabs) {
        var auto= {
            action: "startAutoSaver",
            saved : {
                time: t,
                tabID: tabs[0].id
            }
        };
        sendRequest(auto);
      }
      )        
    }
)





const sendRequest = (data) => {
    try {
        Liport.postMessage(data);
    }
    catch {
        alert("Wating for reload");
    }
}