var s = document.createElement('script');
s.src = chrome.runtime.getURL('js/inject.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);


document.addEventListener('PositionEvent', function (e) {
    console.log("position event");
    var data = e.detail;
    chrome.runtime.sendMessage({
        type: "position",
        datas: data
    });
    var data = e.detail;
    var c = JSON.parse(data);
    var loc = c[1][0][3][2];
    var coor = c[1][0][5][0][1][0].slice(-2)
    return true;
});


chrome.runtime.onMessage.addListener(function (response, sendResponse) {
    if(response.type == "PlaceMarker"){
        console.log("PlaceMarker");
        var pWindow = window.wrappedJSObject;
        var element = window.document.getElementsByClassName("guess-map__canvas-container")[0];
        var key = pWindow.Object.keys(element)[0];
        var actualCode = `var  element = document.getElementsByClassName("guess-map__canvas-container")[0];
            var setLoc = element["${key}"].return.memoizedProps.onMarkerLocationChanged;
            setLoc({lat:${response.lat},lng:${response.lon}});`;
        var script = document.createElement('script');
        script.textContent = actualCode;
        (document.head||document.documentElement).appendChild(script);
        script.remove();
    }
});
