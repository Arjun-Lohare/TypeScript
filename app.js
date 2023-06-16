// Register function
function register(user) {
    // TODO: Implement registration logic
    console.log("Registration successful!");
    console.log(user);
}
// Get the registration form element
var registrationForm = document.getElementById("registration-form");
// Add event listener to the form submission
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form inputs
    var firstNameInput = document.getElementById("first-name");
    var lastNameInput = document.getElementById("last-name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    // Create a new user object
    var newUser = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };
    // Call the register function with the new user
    register(newUser);
});
