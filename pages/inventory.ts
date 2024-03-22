//Programming without classes
//Define Inventory Items
function createInventory(id, title, category, author, price, quantity) {
    return {
        id: id,
        title: title,
        category: category,
        author: author,
        price: price,
        quantity: quantity
    };
}
//Initialize Inventory
let inventory = [
    createInventory("1", "ABC", "Fiction", "A", 10.99, 5),
    createInventory("2", "DEF", "Non-Fiction", "B", 15.50, 8),
    createInventory("3", "GHI", "Fantasy", "C", 12.75, 3),
    createInventory("4", "JKL", "Comic", "D", 9.99, 6),
    createInventory("5", "MNO", "Classic", "E", 8.25, 10),
    createInventory("6", "PQR", "Science Fiction", "F", 11.20, 7),
    createInventory("7", "STU", "Biography", "G", 14.99, 4),
    createInventory("8", "VWX", "Horror", "H", 7.50, 9),
    createInventory("9", "YZA", "Science", "I", 13.50, 2),
    createInventory("10", "BCD", "Romance", "J", 6.99, 12)
];
//Functions for Inventory Management
//Function to add new item to the inventory
function addNewItem(id, title, category, author, price, quantity) {
    const newItem = createInventory(id, title, category, author, price, quantity);
    inventory.push(newItem);
}
//Function to update the details of an existing item
// function updateItem(itemId, updatedItem) {

// }
//Function to remove an item from the inventory
function removeItem(itemId) {
    inventory = inventory.filter(item => item.id !== itemId);
}
//Function to search items by category
function searchItemByCategory(category) {
    return inventory.filter(item => item.category.toLowerCase() == category.toLowerCase());
}
//Function to list all items in the inventory
function listAllItems() {
    console.log("Inventory:");
    inventory.forEach(item => {
        console.log(`ID: ${item.id}, Title: ${item.title}, Category: ${item.category}, Author: ${item.author}, Price: ${item.price}, Quantity: ${item.quantity}`);
    });
}
//Function to sell an item
function sellItem(itemId, quantity) {
    const index = inventory.findIndex(item => item.id == itemId);
    if (index !== -1) {
        if (inventory[index].quantity >= quantity) {
            inventory[index].quantity = quantity;
            console.log(`Sold ${quantity} units of ${inventory[index].title}.`);
        } else {
            console.log("Insufficient Quantity.");
        }
    } else {
        console.log("Item not found.");
    }
}
//Function to restock an item
function restockItem(itemId, quantity) {
    const index = inventory.findIndex(item => item.id == itemId);
    if (index !== -1) {
        inventory[index].quantity += quantity;
        console.log(`Restocked ${quantity} units of ${inventory[index].title}.`);
    } else {
        console.log("Tems no found.");
    }
}
listAllItems();
addNewItem("9", "Cinderella", "Fiction", "Charles", 8, 10);
//updateItem();
removeItem("1");
console.log("Fiction books:");
console.log(searchItemByCategory("Fiction"));
sellItem("1", 3);
restockItem("1", 2);
listAllItems();