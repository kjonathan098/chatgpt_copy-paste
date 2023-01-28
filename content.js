let prevQueriesnumber = undefined

function copyToClipBoard(txt) {
	navigator.permissions
		.query({name: 'clipboard-write'})
		.then((permissionStatus) => {
			if (permissionStatus.state === 'granted') {
				navigator.clipboard
					.writeText(txt)
					.then(() => {
						return
					})
					.catch((err) => {
						console.error('Failed to copy text: ', err)
					})
			} else {
				console.error('Permission to write to clipboard denied.')
			}
		})
}

function createButton() {
	const chats = document.querySelectorAll('.text-base')

	// optimize 1 check if the node list is empty then we can do a return
	if (!chats.length) {
		prevQueriesnumber = 0
		return
	}

	// optimize 2 creat a var outside of func and assignt the number of nodes childs if its the same it means that user has make a query or changed page which means we can skip creating button again

	if (chats.length === prevQueriesnumber) return

	prevQueriesnumber = chats.length

	for (const chat of chats) {
		chat.style.position = 'relative'

		const copyBtn = document.createElement('button')
		copyBtn.className = 'copy-btn'
		copyBtn.innerText = 'copy'

		chat.appendChild(copyBtn)

		copyBtn.addEventListener('click', () => {
			copyToClipBoard(chat.childNodes[1].childNodes[0].innerText)
		})
	}
}

setInterval(createButton, 5000)

function test() {
	console.log('extension activated')
}
test()
