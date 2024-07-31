document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://cors-anywhere.herokuapp.com/https://3507.co.uk/enquiries/enquiry_in.php', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            alert('Form submitted successfully!');
        })
        .catch(error => {
            if (error instanceof TypeError) {
                console.error('TypeError:', error.message);
            } else {
                console.error('Other Error:', error.message);
            }
            console.error('Full Error Details:', error);
            alert('There was an error submitting the form. Please check the console for more details.');
        });
});