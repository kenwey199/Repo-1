let table = document.querySelector("table tbody");
let phoneNameInput = document.querySelector("#phoneName");
let phonePriceInput = document.querySelector("#phonePrice");
let products = [
   
];

function renderProducts() {
    table.innerHTML = "";
    products.forEach((el, index) => {
        table.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${el.name}</td>
                        <td>${el.price} $</td>
                        <td>
                            <button onclick="editProduct(${index})" class="btn btn-primary">Edit</button>
                            <button onclick="deleteProduct(${index})" class="btn btn-danger">Del</button>
                        </td>
                    </tr>
                `;
    });
}

function addNewProduct() {
    let nameVal = phoneNameInput.value;
    let priceVal = parseFloat(phonePriceInput.value);
    if (nameVal && !isNaN(priceVal)) {
        let newPhoneObj = {
            name: nameVal,
            price: priceVal,
        };
        products.push(newPhoneObj);
        renderProducts();
        phoneNameInput.value = "";
        phonePriceInput.value = "";
    } else {
        alert('Please enter valid product name and price.');
    }
}

function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

function editProduct(index) {
    const newName = prompt('Enter new product name:', products[index].name);
    const newPrice = parseFloat(prompt('Enter new product price:', products[index].price));

    if (newName && !isNaN(newPrice)) {
        products[index].name = newName;
        products[index].price = newPrice;
        renderProducts();
    } else {
        alert('Invalid input. Please enter valid product name and price.');
    }
}

renderProducts();