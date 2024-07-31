document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://thingproxy.freeboard.io/fetch/https://3507.co.uk/enquiries/enquiry_in.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
});
