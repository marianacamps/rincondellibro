const form = document.querySelector("#info")
const email = document.querySelector("#email")
const texto = document.querySelector("#textArea")


form.addEventListener("submit", event => {
	event.preventDefault()
	if (email.value === "" || textArea.value === "") {
		window.alert("Por favor completa todos los casilleros")
	} else {
		form.submit();
	}
})



