var ActivityIndicator = {
    show: function (text,autocancel) {
    	text   = text || "Please wait...";
    	autocancel = typeof(autocancel) === "undefined"?true:autocancel;
        cordova.exec(null, null, "ActivityIndicator", "show", [text,autocancel]);
    },
    hide: function () {
        cordova.exec(null, null, "ActivityIndicator", "hide", []);
    }
};

module.exports = ActivityIndicator;