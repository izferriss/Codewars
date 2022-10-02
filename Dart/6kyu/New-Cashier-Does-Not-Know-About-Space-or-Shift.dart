//https://www.codewars.com/kata/5d23d89906f92a00267bb83d

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

String getOrder(String input) 
{
    var order = "";
    var burger = 'burger'.allMatches(input).length;
    var fries = 'fries'.allMatches(input).length;
    var chicken = 'chicken'.allMatches(input).length;
    var pizza = 'pizza'.allMatches(input).length;
    var sandwich = 'sandwich'.allMatches(input).length;
    var onionrings = 'onionrings'.allMatches(input).length;
    var milkshake = 'milkshake'.allMatches(input).length;
    var coke = 'coke'.allMatches(input).length;

    while(burger > 0)
    {
        order = order + "Burger ";
        burger--;
    }
    while(fries > 0)
    {
        order = order + "Fries ";
        fries--;
    }
    while(chicken > 0)
    {
        order = order + "Chicken ";
        chicken--;
    }
    while(pizza > 0)
    {
        order = order + "Pizza ";
        pizza--;
    }
    while(sandwich > 0)
    {
        order = order + "Sandwich ";
        sandwich--;
    }
    while(onionrings > 0)
    {
        order = order + "Onionrings ";
        onionrings--;
    }
    while(milkshake > 0)
    {
        order = order + "Milkshake ";
        milkshake--;
    }
    while(coke > 0)
    {
        order = order + "Coke ";
        coke--;
    }

    return order.substring(0, order.length - 1);
}