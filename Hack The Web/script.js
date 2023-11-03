document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const Message = document.getElementById('Message').value;
        // Create a string with the contact details
        const contactDetails = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${Message}`;

        // Call a function to save the data to a text file
        saveToFile(contactDetails);
    });

    function saveToFile(data) {
        // Create a Blob with the contact details
        const blob = new Blob([data], { type: 'text/plain' });

        // Create a download link for the file
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'contact_details.txt';

        // Click the link to trigger the download
        downloadLink.click();
    }
});
