//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
    ServerEvents.recipes(event => { 
        event.remove({ output: itemName })
      })
    ServerEvents.tags('item', event => {
        event.add('forge:viewers/hidden_from_recipe', itemName)
        event.add('c:hidden_from_recipe_viewers', itemName)
    
    })
}
//Removal of Large Boilers
yeet('gtceu:bronze_large_boiler')
yeet('gtceu:steel_large_boiler')
yeet('gtceu:titanium_large_boiler')
yeet('gtceu:tungstensteel_large_boiler')

ServerEvents.recipes(event => {
    event.remove({ id: /([^:]+):large_boiler(.*)$/ })
})