function copyToClipBoard(txt) {
	navigator.permissions
		.query({ name: 'clipboard-write' })
		.then((permissionStatus) => {
			if (permissionStatus.state === 'granted') {
				navigator.clipboard
					.writeText(txt)
					.then(() => {
						return
					})
					.catch((err) => {
						alert('error please try again')
						return
					})
			} else {
				alert(
					'Permission to write to clipboard denied by your settings'
				)
				return
			}
		})
}

let prevQueriesnumber = undefined

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
			console.log('hello')
			copyBtn.innerText = 'copied!'
			copyBtn.style.background = '#0ca37f'
			copyBtn.style.color = 'white'
			setInterval(() => {
				copyBtn.innerText = 'copy'
				copyBtn.style.background = 'transparent'
				copyBtn.style.color = 'black'
			}, 2000)
		})
	}
}

setInterval(createButton, 5000)

function test() {
	console.log('extension activated da')
}
test()
