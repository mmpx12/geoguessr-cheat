(function(xhr) {
    var XHR = XMLHttpRequest.prototype;
    var open = XHR.open;
    var send = XHR.send;
    var setRequestHeader = XHR.setRequestHeader;
    XHR.open = function(method, url) {
        this._method = method;
        this._url = url;
        this._requestHeaders = {};
        this._startTime = (new Date()).toISOString();
        return open.apply(this, arguments);
    };
    XHR.setRequestHeader = function(header, value) {
        this._requestHeaders[header] = value;
        return setRequestHeader.apply(this, arguments);
    };
    XHR.send = function(postData) {
        this.addEventListener('load', function() {
            var endTime = (new Date()).toISOString();
            var myUrl = this._url ? this._url.toLowerCase() : this._url;
            if(myUrl) {
                if (postData) {
                    if (typeof postData === 'string') {
                        try {
                            this._requestHeaders = postData;    
                        } catch(err) {
                            console.log('Request Header JSON decode failed, transfer_encoding field could be base64');
                            console.log(err);
                        }
                    } else if (typeof postData === 'object' || typeof postData === 'array' || typeof postData === 'number' || typeof postData === 'boolean') {
                    }
                }
                var responseHeaders = this.getAllResponseHeaders();
                if ( this.responseType != 'blob' && this.responseText) {
                    try {
                        var data = this.responseText;
                        document.dispatchEvent(new CustomEvent('PositionEvent', { url : this._url, detail: data }));
                    } catch(err) {
                        console.log(err);
                    }
                }
            }
        });
        return send.apply(this, arguments);
    };
})(XMLHttpRequest);
