var pizzaList = require('./path/to/pizza_info.js');


// Функція для створення HTML-структури піци
function createPizzaHTML(pizza) {
  const pizzaSection = document.createElement('section');
  pizzaSection.className = 'pizza';

  const pizzaImage = document.createElement('img');
  pizzaImage.className = 'pizza-photo';
  pizzaImage.src = pizza.icon;
  pizzaImage.alt = 'pizza';

  const mainInfoSection = document.createElement('section');
  mainInfoSection.className = 'main-info';

  const pizzaName = document.createElement('p');
  pizzaName.className = 'pizza-name';
  pizzaName.textContent = pizza.title;

  const kind = document.createElement('p');
  kind.className = 'kind';
  kind.textContent = pizza.type;

  const ingredients = document.createElement('p');
  ingredients.className = 'ingredients';
  ingredients.textContent = Object.values(pizza.content).flat().join(', ');

  mainInfoSection.appendChild(pizzaName);
  mainInfoSection.appendChild(kind);
  mainInfoSection.appendChild(ingredients);

  const bottomPanelSection = document.createElement('section');
  bottomPanelSection.className = 'bottom-panel';

  const smallSection = document.createElement('section');
  smallSection.className = 'small-section';

  const smallSizeParam = document.createElement('span');
  smallSizeParam.className = 'param';

  const smallSizeOrderNumber1 = document.createElement('span');
  smallSizeOrderNumber1.className = 'order-number';
  const smallSizeIcon1 = document.createElement('img');
  smallSizeIcon1.className = 'size-icon';
  smallSizeIcon1.src = 'assets/images/size-icon.svg';
  smallSizeIcon1.alt = 'size-icon';
  smallSizeOrderNumber1.appendChild(smallSizeIcon1);
  smallSizeOrderNumber1.textContent = pizza.small_size.size;

  const smallSizeOrderNumber2 = document.createElement('span');
  smallSizeOrderNumber2.className = 'order-number';
  const smallSizeIcon2 = document.createElement('img');
  smallSizeIcon2.className = 'weight';
  smallSizeIcon2.src = 'assets/images/weight.svg';
  smallSizeIcon2.alt = 'weight';
  smallSizeOrderNumber2.appendChild(smallSizeIcon2);
  smallSizeOrderNumber2.textContent = pizza.small_size.weight;

  const pizzaPrice = document.createElement('p');
  pizzaPrice.className = 'pizza-price';
  pizzaPrice.textContent = pizza.small_size.price;

  const hryvnia = document.createElement('p');
  hryvnia.className = 'hryvnia';
  hryvnia.textContent = 'грн.';

  const buyButton = document.createElement('button');
  buyButton.className = 'buy buy-button';
  buyButton.textContent = 'Купити';

  smallSizeParam.appendChild(smallSizeOrderNumber1);
  smallSizeParam.appendChild(smallSizeOrderNumber2);
  smallSection.appendChild(smallSizeParam);
  smallSection.appendChild(pizzaPrice);
  smallSection.appendChild(hryvnia);
  smallSection.appendChild(buyButton);

  const bigSection = document.createElement('section');
  bigSection.className = 'small-section';

  const bigSizeParam = document.createElement('span');
  bigSizeParam.className = 'param';

  const bigSizeOrderNumber1 = document.createElement('span');
  bigSizeOrderNumber1.className = 'order-number';
  const bigSizeIcon1 = document.createElement('img');
  bigSizeIcon1.className = 'size-icon';
  bigSizeIcon1.src = 'assets/images/size-icon.svg';
  bigSizeIcon1.alt = 'size-icon';
  bigSizeOrderNumber1.appendChild(bigSizeIcon1);
  bigSizeOrderNumber1.textContent = pizza.big_size.size;

  const bigSizeOrderNumber2 = document.createElement('span');
  bigSizeOrderNumber2.className = 'order-number';
  const bigSizeIcon2 = document.createElement('img');
  bigSizeIcon2.className = 'weight';
  bigSizeIcon2.src = 'assets/images/weight.svg';
  bigSizeIcon2.alt = 'weight';
  bigSizeOrderNumber2.appendChild(bigSizeIcon2);
  bigSizeOrderNumber2.textContent = pizza.big_size.weight;

  const bigPizzaPrice = document.createElement('p');
  bigPizzaPrice.className = 'pizza-price';
  bigPizzaPrice.textContent = pizza.big_size.price;

  const bigHryvnia = document.createElement('p');
  bigHryvnia.className = 'hryvnia';
  bigHryvnia.textContent = 'грн.';

  const bigBuyButton = document.createElement('button');
  bigBuyButton.className = 'buy buy-button';
  bigBuyButton.textContent = 'Купити';

  bigSizeParam.appendChild(bigSizeOrderNumber1);
  bigSizeParam.appendChild(bigSizeOrderNumber2);
  bigSection.appendChild(bigSizeParam);
  bigSection.appendChild(bigPizzaPrice);
  bigSection.appendChild(bigHryvnia);
  bigSection.appendChild(bigBuyButton);

  bottomPanelSection.appendChild(smallSection);
  bottomPanelSection.appendChild(bigSection);

  pizzaSection.appendChild(pizzaImage);
  pizzaSection.appendChild(mainInfoSection);
  pizzaSection.appendChild(bottomPanelSection);

  return pizzaSection;
}

// Отримати елемент, до якого будемо додавати піци
const pizzaContainer = document.querySelector('.all-pizza');

// Пройтися по списку піц та створити HTML-структуру для кожної піци
pizzaList.forEach(pizza => {
  const pizzaElement = createPizzaHTML(pizza);
  pizzaContainer.appendChild(pizzaElement);
});