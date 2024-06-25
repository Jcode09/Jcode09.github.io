document.addEventListener('DOMContentLoaded', function() {
    const infoLink = document.getElementById('info-link');
    const imageLink = document.getElementById('image-link');
    const downloadLink = document.getElementById('download-link');

    const infoSection = document.getElementById('info-section');
    const imageSection = document.getElementById('image-section');
    const downloadSection = document.getElementById('download-section');

    // Function to hide all sections
    function hideAllSections() {
        infoSection.style.display = 'none';
        imageSection.style.display = 'none';
        downloadSection.style.display = 'none';
    }

    // Event listener for Info link
    infoLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllSections();
        infoSection.style.display = 'block';
    });

    // Event listener for Image link
    imageLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllSections();
        imageSection.style.display = 'block';
    });

    // Event listener for Download link
    downloadLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllSections();
        downloadSection.style.display = 'block';
    });

    // Initially show the Info section on page load
    infoSection.style.display = 'block';
    imageSection.style.display = 'none';
    downloadSection.style.display = 'none';
});
