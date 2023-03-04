chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if (request.type == "position"){
            var data = JSON.parse(request.datas);
            browser.storage.local.remove("flag");
            browser.storage.local.remove("loc");
            browser.storage.local.remove("coord");
            var country = data[1][0][5][0][1][4].toLowerCase();
            var loc = data[1][0][3][2];
            try {
                var position = loc[1][0] + ", " + loc[0][0];
            } catch(e){
                var position = loc[0][0];
            }
            var coor = data[1][0][5][0][1][0].slice(-2);
            browser.storage.local.set({
                    flag: country,
                    loc: position,
                    coord: coor
            });
        }
    }
);


function PlaceMarker() {
    browser.storage.local.get('coord').then(result => {
        var lat = result.coord[0];
        var lon = result.coord[1];
        chrome.tabs.query({currentWindow: true, active : true}, function(tabId){
                chrome.tabs.sendMessage(tabId[0].id,{type: "PlaceMarker", lat: lat, lon: lon});
        });
    });
}

browser.webRequest.onBeforeRequest.addListener(
    PlaceMarker,
    {urls: ["https://maps.googleapis.com/maps/api/js/ViewportInfoService.GetViewportInfo*"]}
);
