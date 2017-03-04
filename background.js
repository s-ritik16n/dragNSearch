chrome.runtime.onMessage.addListener(
	function(request,sender,sendres){
		console.log("request.url"+request.url)
		if(request.url){
			main(request.url)
		}
	}
)

function main(req){
	chrome.tabs.create({url:"https://www.google.com/search?q="+req},function(tab){
		console.log("done")
	})
}
