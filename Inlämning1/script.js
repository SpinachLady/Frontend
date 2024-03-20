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
fetchAndDisplayProductCards();