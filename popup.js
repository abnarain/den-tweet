//chrome.runtime.onMessageExternal.addListener(
//chrome.runtime.onMessage.addListener(
//chrome.extension.onRequest.addListener(
/*
var message ={};
chrome.extension.sendMessage("",message,
    function(request, sender, sendResponse) {
	// LOG THE CONTENTS HERE
	console.log("abhinav is reading the page");
	//console.log(request.content);
	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
	eventListenerSupported = window.addEventListener;
	if( MutationObserver ){	    
	    console.log("Here here: Mutations were observed 1 !");
	    var obs = new MutationObserver(function(mutations, observer) {
		console.log("Here here: Mutations were observed! 2");
		mutations.forEach(function(mutation) {
		    console.log(mutation.type);
		});
	    });
	    // define what element should be observed by the observer
	    // and what types of mutations trigger the callback
	    obs.observe(document, {
		subtree: true,
		childList: true,
		attributes: true,
		characterData: true,
		attributeOldValue: true,
		characterDataOldValue: true,
		attributeFilter: true,
	    });
	} else if (eventListenerSupported) {	  
	    console.log("old browser, deal with it");
	    document.addEventListener('DOMNodeInserted', callback, false);
            document.addEventListener('DOMNodeRemoved', callback, false);
	}
    });
*/

/*
chrome.tabs.getSelected(null, function(tab) {
    // Now inject a script onto the page
    chrome.tabs.executeScript(tab.id, {
	code: "chrome.extension.sendRequest({content: document.body.innerHTML}, function(response) { console.log('success'); });"
    }, function() { console.log('done'); });    
});
*/
window.addEventListener('new-tweets-bar jas-new-tweets bar ', function(event) {
    console.log('content_script.js got message:', event);
    // check event.type and event.data
});


var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
    eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
	    console.log(" i m changing");
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( document, { subtree: true,
	    childList: true,
	    attributes: true,
	    characterData: true,
	    attributeOldValue: true,
	    characterDataOldValue: true,
	    attributeFilter: true,
				   });

        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    }
})();
    
// Observe a specific DOM element:
observeDOM( document.getElementById('new-tweets-bar jas-new-tweets bar ') ,function(){ 
    console.log('dom changed');
});
