const scriptURL = 'https://script.google.com/macros/s/AKfycby9wMCjRuS3_q5d4w6oFZwHoYRGwqwwZdk9aswwJklBe38O9Y45vvdBNo6EG0xmFMQVzA/exec'

const form = document.forms['contact_form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})