// add_data.js

// Function to collect form data and save it to localStorage
function addData() {
    const form = document.getElementById('application-form');
    const formData = new FormData(form);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Store the form data in localStorage
    localStorage.setItem('formData', JSON.stringify(jsonData));

    alert('Form data saved successfully!');

    // Redirect to the formsubmitted.html page
    window.location.href = 'formsubmitted.html';
}

// Attach the addData function to the submit button
document.querySelector('.btn-submit').addEventListener('click', function(event) {
    event.preventDefault();
    addData();
});
