function validateForm() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (email === "" || message === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    
    return true;
}
