document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const message = document.getElementById('message');

    submitButton.addEventListener('click', () => {
        const userRole = document.getElementById('userRole').value;
        
        switch (userRole){
            case "employee":
                message.textContent = "You have access to Dietary Services";
                break;
            case "enrolled_member":
                message.textContent = "You have access to Dietary Services and one-on-one interaction with a dietician";
                break;
            case "subscriber":
                message.textContent = "You have partial access to facilitate Dietary Services";
                break;
            case "non_subscriber":
                message.textContent = "You need to enroll or subscribe";
        }
    });
});