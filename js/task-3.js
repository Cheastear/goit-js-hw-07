document.querySelector('#name-input').addEventListener('input', e => {
    if (e.currentTarget.value != '' && e.currentTarget.value != ' ') {
        document.querySelector('#name-output').textContent = e.currentTarget.value.trim();
    }
    else {
        document.querySelector('#name-output').textContent = 'Anonymous';
    }
});