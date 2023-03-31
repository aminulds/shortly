const linkForm = document.getElementById('linkForm')
const linkInput = document.getElementById('linkInput')
const errorMessage = document.getElementById('errorMessage')

// URL Validator Fun
const validURL = (str) => {
    let pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // fragment locator
    return !!pattern.test(str);
}



const formSubmit = (e) => {
    e.preventDefault()

    if (linkInput.value === "") {
        errorMessage.innerHTML = "Please enter something"
        linkInput.classList.add("border-red")
    } else if (!validURL(linkInput.value)) {
        errorMessage.innerHTML = "Please enter a valid URL"
        linkInput.classList.add("border-red")
    } else {
        errorMessage.innerHTML = ""
        linkInput.classList.remove('border-red')
        alert("Success!")
    }
}

linkForm.addEventListener('submit', formSubmit)