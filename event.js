document.body.setAttribute("draggable",true)

document.body.ondragend = function(){

	chrome.runtime.sendMessage({text:window.getSelection()})

}
