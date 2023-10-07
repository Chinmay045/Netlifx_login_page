const inputs = document.querySelectorAll('form .field input');

inputs.forEach(input => {
    inputs.addEventLitener('blur', validateInput);
    inputs.addEventLitener('input', validateInput);

})


function validateInput() {
    const states = ['valid', 'not-valid'];

    let classes;

    if (e.target.value.length == 0) {
        classes = states[1];
    } else {
        classes = states[0];
    }
    console.log(classes);
}