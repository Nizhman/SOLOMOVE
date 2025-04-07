// Toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const isPasswordVisible = passwordInput.type === 'text';
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
    this.textContent = isPasswordVisible ? 'Show' : 'Hide';
});

// Basic form validation for login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        event.preventDefault();
        alert('Both username and password are required!');
    }
});