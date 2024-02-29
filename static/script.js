function previewImage(event) {
    const input = event.target;
    const reader = new FileReader();

    reader.onload = function() {
        const img = document.getElementById('image-preview');
        img.src = reader.result;
    }

    reader.readAsDataURL(input.files[0]);
}



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-btn').addEventListener('click', function () {
        // Prevent default form submission behavior
        event.preventDefault();

        // Perform form submission
        submitForm();

        // Clear form fields
        clearForm();
    });
});

function submitForm() {
    // Simulate form submission (replace with actual form submission code)
    setTimeout(function () {
        // Display success alert
        var toast = new bootstrap.Toast(document.getElementById('success-toast'));
        toast.show();
    }, 1000); // Simulated delay of 1 second for demonstration purposes
}

function clearForm() {
    // Reset the form
    document.getElementById('myForm').reset();
}