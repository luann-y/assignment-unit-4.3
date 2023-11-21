console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item) {
    let basketItem = item;
    basket.push(basketItem);
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex ++){ // cycles through each item of the variable.
        for (basketIndex in basket) {
            if ( item === basket[basketIndex]){ // this one is comparing to each item
                return true;
            }
        }
    }

}
addItem("grape");
addItem("soda");
addItem("orange");
console.log('My Basket', basket);



function listItems() {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}

listItems();




function empty() {
    let basket = [];
    return basket;
}


console.log('Empty Basket', empty());









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
