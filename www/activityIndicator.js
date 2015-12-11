var ActivityIndicator = {
    show: function (text,autocancel) {
    	text   = text || "Please wait...";
    	var cancel = autocancel || true;  
        cordova.exec(null, null, "ActivityIndicator", "show", [text,cancel]);
    },
    hide: function () {
        cordova.exec(null, null, "ActivityIndicator", "hide", []);
    }
};

module.exports = ActivityIndicator;