document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordField = document.querySelector('#password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

function checkForm() {
    const validUsers = {
        "nyinyi7@gmail.com": "4711",
        "panda4@gmail.com": "1234"
    };

    let inputUsername = document.getElementById('user').value.trim();
    let inputPassword = document.getElementById('password').value.trim();
    let errorMessage = document.getElementById('error-message');

    if (validUsers[inputUsername]) {
        if (inputPassword === validUsers[inputUsername]) {
            errorMessage.style.display = 'none';
            window.open('index.html')
            return true;
        } else {
            errorMessage.textContent = 'Incorrect password.';
            errorMessage.style.display = 'block';
            return false;
        }
    } else {
        errorMessage.textContent = 'Incorrect username.';
        errorMessage.style.display = 'block';
        return false;
    }
}