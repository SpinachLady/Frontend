async function fetchAndDisplayProductCards() {
  const cardRow = document.getElementById('cardRow');

  for (let productId = 1; productId <= 20; productId++) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const product = await response.json();

      const cardColumn = document.createElement('div');
      cardColumn.classList.add('col-sm-6', 'col-md-5','col-lg-4', 'col-xl-3', 'mb-2');

      const card = document.createElement('div');
      card.classList.add('card', 'custom-card');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.title;
      img.classList.add('card-img-top');
      cardBody.appendChild(img);

      const cardText = document.createElement('p');
      cardText.classList.add('card-text', 'mt-auto');
      cardText.textContent = product.title;
      cardBody.appendChild(cardText);

      const price = document.createElement('p');
      price.textContent = product.price + "€";
      cardBody.appendChild(price);

      const buyButton = document.createElement('button');
      buyButton.textContent = 'Buy';
      cardBody.appendChild(buyButton);

      card.appendChild(cardBody);

      cardColumn.appendChild(card);
      cardRow.appendChild(cardColumn);
    } catch (error) {
      console.error(`Error fetching product data for ID ${productId}:`, error);
    }
  }
}

document.getElementById("myForm").addEventListener("submit", function(event) {
  
  event.preventDefault();

  let isValid = true;

  const nameInput = document.getElementById("name");
  const phoneNumberInput = document.getElementById("phone-number");
  const emailInput = document.getElementById("exampleInputEmail1");
  const streetNameInput = document.getElementById("streetName");
  const zipCodeInput = document.getElementById("zipCode");
  const cityInput = document.getElementById("city");
  

  
  const fullNamePattern = /^(?=.{2,50}$)(?:[a-zA-Z]+(?:\s[a-zA-Z]+){1,})$/;
  if (!fullNamePattern.test(nameInput.value.trim())) {
    isValid = false;
    nameInput.value = "";
    nameInput.placeholder = "Please enter Firstname Lastname.";
    nameInput.classList.add("red-placeholder");
  } 

  const phonePattern = /^[\d()-]{0,50}$/;
  if (!phonePattern.test(phoneNumberInput.value.trim()) || phoneNumberInput.value.trim().length == 0) {
    isValid = false;
    phoneNumberInput.value = "";
    phoneNumberInput.placeholder = "Please enter correct phonenumber";
    phoneNumberInput.classList.add("red-placeholder");
  } 
  
  const emailPattern = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    isValid = false;
    emailInput.value = "";
    emailInput.placeholder = "Please enter correct Email";
    emailInput.classList.add("red-placeholder");
  }

  if (streetNameInput.value.trim().length < 2 || streetNameInput.value.trim().length > 50) {
    isValid = false;
    streetNameInput.value = "";
    streetNameInput.placeholder = "Please enter a valid streetname";
    streetNameInput.classList.add("red-placeholder");
  }
  const digitPattern = /^\d+$/;
  if (zipCodeInput.value.toString().trim().length !== 5 || !digitPattern.test(zipCodeInput.value.toString().trim())) {
    isValid = false;
    zipCodeInput.value = "";
    zipCodeInput.placeholder = "Please enter a zipcode with 5 digits";
    zipCodeInput.classList.add("red-placeholder");
  }

  if (cityInput.value.trim().length < 2 || cityInput.value.trim().length > 50) {
    isValid = false;
    cityInput.value = "";
    cityInput.placeholder = "Please enter a city must be between 2 and 50 characters.";
    cityInput.classList.add("red-placeholder");
  }

  if(isValid){
    // här kommer kod som skickar vidare till confirm sidan
    console.log("success");
  }
  

  console.log(isValid);
});
