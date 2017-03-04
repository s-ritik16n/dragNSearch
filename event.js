document.body.addEventListener("dragend", function(){
	console.log(window.getSelection().toString())
	chrome.runtime.sendMessage({url:window.getSelection().toString()})
})
