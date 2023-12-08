// Set up the context properties. This context should appear on your
// LaunchDarkly contexts dashboard soon after you run the demo.
const context = {
    kind: 'user',
    key: '123456',
    name: 'Joe Blogs',
    email: 'user@email.com'
};

// Replace XXX with your SDK key 
const client = LDClient.initialize('XXX', context);

client.on('ready', function () {
    // Replace 'YOUR_FLAG_KEY' with your Launch Darkly feature flag key
    client.on('change:login', function (value) {
        if (value) {
            // Feature flag is enabled, show the login form
            showLoginForm();
        } else {
            // Feature flag is disabled, hide the login form
            hideLoginForm();
        }
    });
});

function showLoginForm() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.style.display = 'block';
    }
}

function hideLoginForm() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.style.display = 'none';
    }
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Simple validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
        return;
    }

    // Mock authentication (replace with actual authentication logic)
    if (username === 'demo' && password === 'password') {
        // Successful login
        errorMessage.textContent = '';
        alert('Login successful!');
    } else {
        // Failed login
        errorMessage.textContent = 'Invalid username or password.';
    }
}
