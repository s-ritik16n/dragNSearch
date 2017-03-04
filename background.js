chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		if(request.url){
			chrome.tabs.create({string:"https://www.google.com/"+request.url})
		}
	}
)
