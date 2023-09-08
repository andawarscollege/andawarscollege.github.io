// downloadjson.js

// Function to trigger the JSON download
function downloadFormDataAsJSON(formData) {
    const jsonData = JSON.stringify(formData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'formdata.json';

    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Retrieve form data from localStorage
const formDataString = localStorage.getItem('formData');
const formData = JSON.parse(formDataString);

if (formData) {
    // Call the function to download form data as JSON
    downloadFormDataAsJSON(formData);
} else {
    console.error('Form data not found.');
}
