/**
 * Created by chaika on 25.01.16.
 */
import pizza_info from './Pizza_List.js';
let alreadyAdded = JSON.parse(localStorage.getItem('alreadyAdded'));
const pizzaContainer = document.querySelector('.all-pizza');
const amountLine = document.querySelector('.amount-line.order');
const pizzaCartItem = document.querySelector('.order-panel-pizza');
const captionType = document.querySelector('.caption');
const captionNumber = document.querySelector('.number-pizza');
$(function() {
  let pizzaCount = 0;
function renderPizzas(category) {
  pizzaContainer.innerHTML = ''; // очистити контейнер піц
  pizzaCount = 0;
  pizza_info.forEach((pizza) => {
    console.log(category);
    if (category === 'all' || hasCategory(pizza, category)) {
    
    const pizzaSection = document.createElement('section');
    pizzaSection.className = 'pizza';
  
    if(pizza.is_new){
      const pizzaNew = document.createElement('span');
      pizzaNew.className = 'addition';
      pizzaNew.textContent = "Нова";
      if(pizza.is_popular)  pizzaNew.style.transform = 'translate(220px, 20px)';
      pizzaSection.appendChild(pizzaNew);
    }

    if(pizza.is_popular){
      const pizzaPopular = document.createElement('span');
      pizzaPopular.className = 'addition popular';
      pizzaPopular.textContent = "Популярна";
      pizzaSection.appendChild(pizzaPopular);
    }
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
    
    const ingredientText = Object.values(pizza.content).flat().join(', ');
    const capitalizedText = ingredientText.charAt(0).toUpperCase() + ingredientText.slice(1);
    
    ingredients.textContent = capitalizedText;

    mainInfoSection.appendChild(pizzaName);
    mainInfoSection.appendChild(kind);
    mainInfoSection.appendChild(ingredients);
  
    const bottomPanelSection = document.createElement('section');
    bottomPanelSection.className = 'bottom-panel';
  
    if('small_size' in pizza){
    const smallSection = document.createElement('section');
    smallSection.className = 'small-section';
  
    const smallSizeParam = document.createElement('span');
    smallSizeParam.className = 'param';
    
    const smallSizeOrderNumber1 = document.createElement('span');
    smallSizeOrderNumber1.className = 'order-number';
    const smallSizeIcon1 = document.createElement('img');
    smallSizeIcon1.className = 'size-icon';
    smallSizeIcon1.src = './assets/images/size-icon.svg';
    smallSizeIcon1.alt = 'size-icon';
    smallSizeOrderNumber1.appendChild(smallSizeIcon1);
    
    const smallSizeText1 = document.createElement('span');
    smallSizeText1.textContent = pizza.small_size.size;
    smallSizeOrderNumber1.appendChild(smallSizeText1);
    
    const smallSizeOrderNumber2 = document.createElement('span');
    smallSizeOrderNumber2.className = 'order-number';
    const smallSizeIcon2 = document.createElement('img');
    smallSizeIcon2.className = 'weight';
    smallSizeIcon2.src = './assets/images/weight.svg';
    smallSizeIcon2.alt = 'weight';
    smallSizeOrderNumber2.appendChild(smallSizeIcon2);
    
    const smallSizeText2 = document.createElement('span');
    smallSizeText2.textContent = pizza.small_size.weight;
    smallSizeOrderNumber2.appendChild(smallSizeText2);
    
    smallSizeParam.appendChild(smallSizeOrderNumber1);
    smallSizeParam.appendChild(smallSizeOrderNumber2);
    const pizzaPrice = document.createElement('p');
    pizzaPrice.className = 'pizza-price';
    pizzaPrice.textContent = pizza.small_size.price;
  
    const hryvnia = document.createElement('p');
    hryvnia.className = 'hryvnia';
    hryvnia.textContent = 'грн.';
  
    const buyButton = document.createElement('button');
    buyButton.className = 'buy buy-button';
    buyButton.textContent = 'Купити';
    buyButton.addEventListener('click', () => {
        const selectedSize = 'small_size'; // Отримайте обраний розмір піци
        addToCart(pizza, selectedSize, pizza.small_size.price);
      });
  
    smallSizeParam.appendChild(smallSizeOrderNumber1);
    smallSizeParam.appendChild(smallSizeOrderNumber2);
    smallSection.appendChild(smallSizeParam);
    smallSection.appendChild(pizzaPrice);
    smallSection.appendChild(hryvnia);
    smallSection.appendChild(buyButton);
    bottomPanelSection.appendChild(smallSection);
    }
  if('big_size' in pizza){
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

const bigSizeText1 = document.createElement('span');
bigSizeText1.textContent = pizza.big_size.size;
bigSizeOrderNumber1.appendChild(bigSizeText1);

const bigSizeOrderNumber2 = document.createElement('span');
bigSizeOrderNumber2.className = 'order-number';
const bigSizeIcon2 = document.createElement('img');
bigSizeIcon2.className = 'weight';
bigSizeIcon2.src = 'assets/images/weight.svg';
bigSizeIcon2.alt = 'weight';
bigSizeOrderNumber2.appendChild(bigSizeIcon2);

const bigSizeText2 = document.createElement('span');
bigSizeText2.textContent = pizza.big_size.weight;
bigSizeOrderNumber2.appendChild(bigSizeText2);

bigSizeParam.appendChild(bigSizeOrderNumber1);
bigSizeParam.appendChild(bigSizeOrderNumber2);
    const bigPizzaPrice = document.createElement('p');
    bigPizzaPrice.className = 'pizza-price';
    bigPizzaPrice.textContent = pizza.big_size.price;
  
    const bigHryvnia = document.createElement('p');
    bigHryvnia.className = 'hryvnia';
    bigHryvnia.textContent = 'грн.';
  
    const bigBuyButton = document.createElement('button');
    bigBuyButton.className = 'buy buy-button';
    bigBuyButton.textContent = 'Купити';
    bigBuyButton.addEventListener('click', () => {
        const selectedSize = 'big_size'; // Отримайте обраний розмір піци
        addToCart(pizza, selectedSize, pizza.big_size.price);
      });
  
    bigSizeParam.appendChild(bigSizeOrderNumber1);
    bigSizeParam.appendChild(bigSizeOrderNumber2);
    bigSection.appendChild(bigSizeParam);
    bigSection.appendChild(bigPizzaPrice);
    bigSection.appendChild(bigHryvnia);
    bigSection.appendChild(bigBuyButton);
    bottomPanelSection.appendChild(bigSection);
  }
 //   bottomPanelSection.appendChild(smallSection);
  //  bottomPanelSection.appendChild(bigSection);
  
    pizzaSection.appendChild(pizzaImage);
    pizzaSection.appendChild(mainInfoSection);
    pizzaSection.appendChild(bottomPanelSection);
  
    pizzaContainer.appendChild(pizzaSection);
    pizzaCount++;
    captionNumber.textContent = pizzaCount.toString();
    
  }
});
captionNumber.textContent = pizzaCount;

}

function hasCategory(pizza, category) {
  if (category === 'vega') {
    // Перевіряємо, чи піца не містить продукту "meat"
    return pizza.type.includes('Вега піца');

  } else {
    // Перевіряємо, чи піца містить вказану категорію
    for (const key in pizza.content) {
      if (pizza.content.hasOwnProperty(key) && key === category) {
        return true;
      }
    }
    return false;
  }
}



// Обробник кліку на кнопку категорії
$('.pizza-kind').on('click', function() {
  const category = $(this).attr('id');
  $('.pizza-kind').removeClass('pizza-kind-chosen');
  $(this).addClass('pizza-kind-chosen');
  const buttonTitle = $(this).text();
  renderPizzas(category);
  captionType.textContent = buttonTitle;
  if (buttonTitle === 'Усі') {
    captionType.textContent = 'Усі піци';
  } else {
    captionType.textContent = buttonTitle;
    
  }
  captionType.appendChild(captionNumber);
  console.log(pizzaCount);
});

// Початкове відображення усіх піц
renderPizzas('all');
$('#all').addClass('pizza-kind-chosen');
});

// Функція додавання піци до кошика
function addToCart(pizzaName, size, price) {
  console.log(alreadyAdded);
  const existingPizza = findPizzaInCart(pizzaName, size);
  console.log(alreadyAdded);
  if (existingPizza) {
    existingPizza.quantity += 1;
    const orderAmount = existingPizza.element.querySelector('.order-amount');
    orderAmount.textContent = existingPizza.quantity.toString();

  } else {
    const pizzaCartItemOne = createPizzaCartItem(pizzaName, size);
    alreadyAdded.push({ name: pizzaName, size: size, quantity: 1, price: price, element: pizzaCartItemOne });
    console.log(alreadyAdded);
    pizzaCartItem.appendChild(pizzaCartItemOne);
  }

  saveProductList(); // Зберегти дані у локальному сховищі
}


document.addEventListener('DOMContentLoaded', () => {
  restoreProductList();
});
  
  function findPizzaInCart(pizzaName, size) {
    for (let i = 0; i < alreadyAdded.length; i++) {
      const pizza = alreadyAdded[i];
      if (pizza.name.id === pizzaName.id && pizza.size === size ) {

        return pizza;
      }
    }
    return null;
  }
  // Функція створення елемента піци в кошику з врахуванням розміру
  function createPizzaCartItem(pizza, size) {
    
    const pizzaInfoSection = document.createElement('section');
    pizzaInfoSection.className = 'pizza-info';
    
    const orderPizzaSection = document.createElement('section');
    orderPizzaSection.className = 'order-pizza';
    
    const orderSmallSection = document.createElement('section');
    orderSmallSection.className = 'order-small-section';
    
    const orderPizzaName = document.createElement('span');
    orderPizzaName.className = 'order-pizza-name';
    let sizeStr = '';
    if(size=="small_size") sizeStr=" (Мала)";
    else sizeStr=" (Велика)";
    orderPizzaName.textContent = `${pizza.title}`+ sizeStr;
    orderSmallSection.appendChild(orderPizzaName);
    
    const orderSmallSection2 = document.createElement('section');
    orderSmallSection2.className = 'order-small-section';
    
    const sizeIcon = document.createElement('img');
    sizeIcon.className = 'size-icon';
    sizeIcon.src = 'assets/images/size-icon.svg';
    sizeIcon.alt = 'size-icon';
    orderSmallSection2.appendChild(sizeIcon);
    
    const orderNumber1 = document.createElement('span');
    orderNumber1.className = 'order-number size';
    orderNumber1.textContent = pizza[size].size;
    orderSmallSection2.appendChild(orderNumber1);
    
    const weightIcon = document.createElement('img');
    weightIcon.className = 'weight';
    weightIcon.src = 'assets/images/weight.svg';
    weightIcon.alt = 'weight';
    orderSmallSection2.appendChild(weightIcon);
    
    const orderNumber2 = document.createElement('span');
    orderNumber2.className = 'order-number';
    orderNumber2.textContent = pizza[size].weight;
    orderSmallSection2.appendChild(orderNumber2);
    
    const orderSmallSection3 = document.createElement('section');
    orderSmallSection3.className = 'order-small-section-one';
    
    const orderPrice = document.createElement('span');
    orderPrice.className = 'order-price';
    orderPrice.textContent = `${pizza[size].price}грн`;
    orderSmallSection3.appendChild(orderPrice);
    
    const numberSection = document.createElement('section');
    numberSection.className = 'number';
    
    const minusButton = document.createElement('button');
    minusButton.className = 'minus-amount';
    minusButton.textContent = '-';
    numberSection.appendChild(minusButton);
    minusButton.addEventListener('click', () => {
        decreaseQuantity(pizza, size);
      });
    
    const orderAmount = document.createElement('span');
    orderAmount.className = 'order-amount';
    orderAmount.textContent = '1';
    numberSection.appendChild(orderAmount);
    
    const addButton = document.createElement('button');
    addButton.className = 'add-amount';
    addButton.textContent = '+';
    numberSection.appendChild(addButton);
    addButton.addEventListener('click', () => {
        increaseQuantity(pizza, size);
      });
    
    orderSmallSection3.appendChild(numberSection);
    
    const cancelButton = document.createElement('button');
    cancelButton.className = 'cancel';
    cancelButton.textContent = '×';
    orderSmallSection3.appendChild(cancelButton);
    cancelButton.addEventListener('click', () => {
        removeFromCart(pizza, size);
        pizzaCartItem.removeChild(pizzaInfoSection);
      });
    
    orderPizzaSection.appendChild(orderSmallSection);
    orderPizzaSection.appendChild(orderSmallSection2);
    orderPizzaSection.appendChild(orderSmallSection3);
    
    pizzaInfoSection.appendChild(orderPizzaSection);
    
    const sectionImg = document.createElement('section');
    sectionImg.className = 'section-img';
    
    const orderPizzaIcon = document.createElement('img');
    orderPizzaIcon.className = 'order-pizza-icon';
    orderPizzaIcon.src = `${pizza.icon_png}`;
    orderPizzaIcon.alt = 'pizza';
    sectionImg.appendChild(orderPizzaIcon);
    pizzaInfoSection.appendChild(sectionImg);

  
    return pizzaInfoSection;
  }

  function removeFromCart(pizzaName, size) {
    const index = alreadyAdded.findIndex(
      (pizza) => pizza.name.id === pizzaName.id && pizza.size === size
    );
  
    if (index !== -1) {
      alreadyAdded.splice(index, 1);
    }saveProductList();
  }

  function increaseQuantity(pizza, size) {
    const existingPizza = findPizzaInCart(pizza, size);
        existingPizza.quantity += 1;
        const orderAmount = existingPizza.element.querySelector('.order-amount');
        orderAmount.textContent = existingPizza.quantity.toString();
        saveProductList();
  }
  
  function decreaseQuantity(pizza, size) {
    const existingPizza = findPizzaInCart(pizza, size);
    if (existingPizza.quantity > 1) {
        existingPizza.quantity --;
        const orderAmount = existingPizza.element.querySelector('.order-amount');
        orderAmount.textContent = existingPizza.quantity.toString();
    }
    saveProductList();
  }
const panelPrice= document.querySelector('.sum-amount');// Збереження даних кошика


function saveProductList() {
  localStorage.setItem('cartItems', JSON.stringify(alreadyAdded));
  amount();
}

function amount(){
  let totalPrice = 0;

  alreadyAdded.forEach((pizza) => {
    let price = pizza.price; // Отримати ціну піци
    let quantity = pizza.quantity; // Отримати кількість піц
    console.log(pizza.quantity, pizza.price);
    totalPrice += price * quantity; // Обчислити загальну ціну піц
  });
panelPrice.textContent = totalPrice.toString()+ " грн";
amountLine.textContent = alreadyAdded.length;
}

// Відновлення даних кошика
function restoreProductList() {
  const savedCartItems = localStorage.getItem('cartItems');
  if (savedCartItems) {
    alreadyAdded = JSON.parse(savedCartItems);

    // Відновлення кількості піц на сторінці
    alreadyAdded.forEach((pizza) => {
      const pizzaCartItemOne = createPizzaCartItem(pizza.name, pizza.size);
      pizzaCartItemOne.querySelector('.order-amount').textContent = pizza.quantity.toString();
      pizza.element = pizzaCartItemOne; // Збереження посилання на новий створений елемент
      pizzaCartItem.appendChild(pizzaCartItemOne);
      amount();
    });
  }
}

// Очищення кошика
function clearCart() {
  pizzaCartItem.innerHTML = ''; // Очищення елементів кошика
  alreadyAdded = [];
  saveProductList(); // Очищення даних кошика
}

// Видалення кошика при кліку на кнопку "Очистити"
const clearButton = document.querySelector('.clean-order');
clearButton.addEventListener('click', () => {
  clearCart();
});