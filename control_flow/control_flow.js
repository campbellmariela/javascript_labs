let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;

// Defining access levels according to roles with if...else 
if (userRole == "admin"){
    accessLevel = "Full access granted";
} else if (userRole == "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level:", accessLevel);

// Message according to log in status
if (isLoggedIn){
    if (userRole == "admin"){
        userMessage = "Welcome, admin!";
    } else {
        userMessage = "Welcome, user!";
    }
} else {
    userMessage = "Please log in to access the system."
}

console.log("User message:", userMessage);

// Defining a user category according to the user type
switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User category:", userCategory);

// Ternary operator for authentication status
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);