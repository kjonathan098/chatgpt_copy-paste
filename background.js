chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	console.log(tab.url)
	if (tab.url === 'https://chat.openai.com/chat') {
		console.log('home page no need to load button')
		return
	} else if (changeInfo.url) {
		// Call your function here
		console.log('fire button')
		const fireBtn = true
		chrome.tabs.sendMessage(tab.id, fireBtn)
	}
})
