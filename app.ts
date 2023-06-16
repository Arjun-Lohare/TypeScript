
// Define the User interface
interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    }
    
    // Register function
    function register(user: User) {
    // TODO: Implement registration logic
    console.log("Registration successful!");
    console.log(user);
    }
    
    // Get the registration form element
    const registrationForm = document.getElementById("registration-form") as HTMLFormElement;
    
    // Add event listener to the form submission
    registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Get form inputs
    const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
    const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    
    // Create a new user object
    const newUser: User = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    };
    
    // Call the register function with the new user
    register(newUser);
    });