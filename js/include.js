// Function to load HTML includes
function loadIncludes() {
    const elements = document.getElementsByTagName('include');
    Array.from(elements).forEach(element => {
        const src = element.getAttribute('src');
        if (src) {
            fetch(src)
                .then(response => response.text())
                .then(data => {
                    element.insertAdjacentHTML('afterend', data);
                    element.remove();
                })
                .catch(error => console.error('Error loading include:', error));
        }
    });
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', loadIncludes);
