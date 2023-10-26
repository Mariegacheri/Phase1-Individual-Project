const selectElement = document.querySelector("#selectCurrency");
const inputCurrency = document.getElementById("input_currency");
const outputCurrency = document.getElementById("output_currency");

function selectValue() {
    return selectElement.value; // Get the selected option value
}

selectElement.addEventListener("change", function() {
    // When the user selects an option, update the API URL and fetch data
    const apiUrl = `https://v6.exchangerate-api.com/v6/b589eecc523deb31dda39fe9/latest/${selectValue()}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Your JSON object
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});




