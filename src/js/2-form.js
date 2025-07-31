const form = document.querySelector('.feedback-form')

const formData = {
    email: "",
    message: ""
}

const localData = localStorage.getItem("feedback-form-state")

if (localData) {
    const parsedData = JSON.parse(localData);

    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';

    
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('input', (e) => {

    if (e.target.name === 'email') {
        formData.email = e.target.value
    } else if (e.target.name === 'message') {
        formData.message = e.target.value
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    console.log(localStorage.getItem("feedback-form-state"))
})
