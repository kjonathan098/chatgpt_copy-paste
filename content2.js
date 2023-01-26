chrome.runtime.onMessage.addListener(addExtension)

function getForm() {
	const textArea = document.querySelector('textarea')
	console.log(textArea)
	textArea.addEventListener('keydown', (event) => {
		console.log(event.key === 'Enter', 'key')
	})
}

function createButton() {
	console.log('hello there')
	const chats = document.querySelectorAll('.text-base')

	for (const chat of chats) {
		chat.style.position = 'relative'

		const copyBtn = document.createElement('button')
		copyBtn.className = 'copy-btn'
		copyBtn.innerText = 'copy'

		chat.appendChild(copyBtn)
	}
}

function addExtension(request, sender, sendResponse) {
	if (request) {
		// create button + wait bc api call takes a few seconds until we change page but url already changed
		console.log('entered request')
		setTimeout(() => {
			console.log('entered timeout')
			createButton()
			// getForm()
		}, 5000)
	}
}

function test() {
	console.log('extension activated')
}
test()

setInterval(createButton, 5000)
