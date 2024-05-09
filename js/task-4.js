document.querySelector('.login-form').addEventListener('submit', e => {
    e.preventDefault()

    const inputs = e.currentTarget.querySelectorAll('input');

    var isEmpty = false;

    inputs.forEach(element => {
        if (element.value == '') {
            isEmpty = true;
        }
    });
    if (isEmpty) {
        alert('All form fields must be filled in');
        return;
    }
    
    var request = {};

    inputs.forEach(element => {
        request[element.name] = element.value.trim();
    });

    console.log(request)

    e.currentTarget.reset()
})