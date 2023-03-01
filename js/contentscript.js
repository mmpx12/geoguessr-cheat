var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/inject.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);


document.addEventListener('PositionEvent', function (e) {
  var data = e.detail;
  chrome.runtime.sendMessage({
    type: "position",
    datas: data
  });
});

