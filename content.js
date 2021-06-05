console.log("LinkedIn Job Post Saver");

 var port = chrome.runtime.connect ({
    name: "ContentScript"
}) 


chrome.runtime.onMessage.addListener (function(sv){
  console.log("data in content script", JSON.stringify(sv, null, 4));
  if(sv.action==="AutoSaver") {
    StartSaver(sv.linkedin, 0);
  }
  else{
    return false;
  }
})

const StartSaver = (sv, c=0) => {
  console.log("c :: ", c);

  var x = document.querySelectorAll ('[aria-label="Open control menu"]')[c]

  if(x) {
    x.parentElement.click();

    setTimeout(() => {
      var y = document.querySelector ('[class="feed-shared-control-menu__item option-save"]')
      console.log(y);
      
      if (y !== null) { 
        console.log("Hello I am Debjit Mukherjee");
        const T = sv.time;
        var tInterval=setTimeout(() => {
          Li = document.getElementById(y.children[0].id).click();
          notifyUser(sv,c+1);
          window.scrollTo(0,(document.body.scrollHeight/1));
          StartSaver(sv,c+1);
        }, T*1000 ); 
      } else {
        window.scrollTo(0,(document.body.scrollHeight/1));
        StartSaver(sv,c+1);
      }
    },2000)
  } else {
    window.scrollTo(0,(document.body.scrollHeight/1));
    StartSaver(sv,c+1);
  }
  
}
 




const notifyUser = (auto, c) => {
  auto = {
    action: "badges",
    badge: {
      tabID: auto.tabID,
      text: c.toString(),
    }
  };
  
  port.postMessage(auto);
};