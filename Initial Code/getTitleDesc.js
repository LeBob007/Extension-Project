function codevar(){
	var meta = document.querySelector("meta[name=\'Description\']") || document.querySelector("meta[name=\'description\']"); 
    if (meta) meta = meta.getAttribute("content");
        ({
        title: document.title || "",
        url: document.URL || "",
        description: meta || ""
               });
}	

function getTitleDesc(){
    chrome.tabs.executeScript({
        code: codevar()
    }, function(results) {
        if (!results) {
            // An error occurred at executing the script. You've probably not got
            // the permission to execute a content script for the current tab
            return;
        }
        var result = results[0];
		alert(result.title)
    });
}
getTitleDesc();