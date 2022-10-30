const NAME_REQUIRED = "Please enter your name"
const EMAIL_INVALID = "Please enter a correct email"

function hasValue(input, message) {
	if (input.value.trim() === "") {
		document.querySelector(".addNotification_1").textContent = message
		return false
	}
	document.querySelector(".addNotification_1").textContent = ""
    return true
}

function validateEmail(input, invalidMsg) {
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const email = input.value.trim()
	if (!emailRegex.test(email)) {
		document.querySelector(".addNotification_2").textContent = invalidMsg
		return false
	}
	document.querySelector(".addNotification_2").textContent = ""
	return true
}

const form = document.querySelector("#subscribeForm")
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault()
	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED)
	let emailValid = validateEmail(form.elements["email"], EMAIL_INVALID)

	if (nameValid & emailValid) {
		document.querySelector(".addNotification_1").textContent = ""
		document.querySelector(".addNotification_2").textContent = ""

		let dataObj = {}

		dataObj["name"] = form.elements["name"].value
		dataObj["email"] = form.elements["email"].value
		dataObj['created'] = new Date().toUTCString()

		console.log(dataObj)

		try {
			// Specifying headers in the config object
			const config = { 'content-type': 'application/json' }
			axios.post('http://localhost:3000/api/subscribers', dataObj, config)
		} catch (error) {
			console.error(error)
		}
		document.querySelector(".addNotification_3").textContent = "Thank you!"
	}
})