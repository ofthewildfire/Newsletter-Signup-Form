import "./src/styles/reset.css"
import "./src/styles/index.scss"

// Email Validation
const emailInput = document.querySelector("input")
const submitButton = document.querySelector("button")
const regex = /\S+@\S+\.\S+/

const errMsg = document.getElementById("error")
const emptyEmailError = document.getElementById("empty-email")

const mainFormDisplay = document.querySelector(".content_main_form")
const successModalDisplay = document.querySelector(".success_content")

const dismissMsgBtn = document.getElementById("dismiss-msg")

dismissMsgBtn.addEventListener("click", () => {
	location.reload()
})

const successContentDisplay = () => {
	mainFormDisplay.style.display = "none"
	successModalDisplay.classList.remove("hidden")
}

const validateEmail = (e) => {
	e.preventDefault()
	const inputVal = document.querySelector("input").value
	if (regex.test(inputVal)) {
		emptyEmailError.style.display = "none"
		errMsg.style.display = "none"
		emailInput.classList.remove("error-bg")
		successContentDisplay()
	} else if (inputVal === "" || inputVal === null) {
		errMsg.style.display = "none"
		emptyEmailError.style.display = "inline"
		emailInput.classList.add("error-bg")
	} else {
		emptyEmailError.style.display = "none"
		errMsg.style.display = "inline"
		emailInput.classList.add("error-bg")
	}
	document.querySelector("input").value = ""
}

submitButton.addEventListener("click", validateEmail)

// If the email is successful, show the success panel.
