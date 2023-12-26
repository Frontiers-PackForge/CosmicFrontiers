//A Simple "REMOVE AND HIDE" function akin to GroovyScript's Jei.yeet() function - This will tag the item for hiding from recipe viewers and remove the recipe
//This one also has a tag removal function to remove the forge:tools/knives tag from what is removed so bear that in mind if you copy/paste this around
let yeet = (itemName) => {
    ServerEvents.recipes(event => { 
        event.remove({ output: itemName })
      })
    ServerEvents.tags('item', event => {
        event.add('forge:viewers/hidden_from_recipe', itemName)
        event.remove('forge:tools/hammers', itemName)
    })
}
ServerEvents.tags('item', event => {
  event.remove('c:iron_ingots', 'betterend:thallasium_ingot')
  event.remove('c:iron_ingots', 'betternether:cincinnasite_ingot')
  
})
yeet('betternether:nether_ruby');
yeet('betternether:cincinnasite_ingot');
yeet('betternether:cincinnasite');
yeet('betterend:iron_hammer');
yeet('betterend:golden_hammer');
yeet('betterend:netherite_hammer');
yeet('betterend:thallasium_hammer');
yeet('betterend:terminite_hammer');
yeet('betterend:aeternium_hammer');

//Internal Erroring Recipe Removal
ServerEvents.recipes(event => { 
    console.log('Hello! Correcting Errored Recipes in [BETTER END]!')
    event.remove({ id: 'bclib:tag_hopper' })
    event.remove({ id:  'bclib:tag_piston'})
    event.remove({ id: 'betternether:piston' })
    
  })
//replacing bn materials with their custom gt counterparts
ServerEvents.recipes(event => {
  event.remove({ id: 'betternether:nether_ruby_block' })
  event.replaceInput(
    { input: 'betternether:cincinnasite'},
    'betternether:cincinnasite',
    'gtceu:raw_cincinnasite'
  )
  event.replaceInput(
    { input: 'betternether:cincinnasite_ingot' },
    'betternether:cincinnasite_ingot',
    'gtceu:cincinnasite_ingot'
  )
  event.replaceOutput(
    { output: 'betternether:cincinnasite_ingot' },
    'betternether:cincinnasite_ingot',
    'gtceu:cincinnasite_ingot'
  )
  event.replaceOutput(
    { output: 'betternether:cininnasite'},
    'betternether:cincinnasite',
    'gtceu:raw_cincinnasite'
  )
  event.replaceInput(
    { input: 'betternether:nether_ruby'},
    'betternether:nether_ruby',
    'gtceu:nether_ruby_gem'
  )
  event.replaceOutput(
    { output: 'betternether:nether_ruby'},
    'betternether:nether_ruby',
    'gtceu:nether_ruby_gem'
  )
  event.replaceInput(
    { input: 'betternether:nether_ruby_block'},
    'betternether:nether_ruby_block',
    'gtceu:nether_ruby_block'
  )
  event.replaceOutput(
    { output: 'betternether:nether_ruby_block'},
    'betternether:nether_ruby_block',
    'gtceu:nether_ruby_block'
  )
  event.stonecutting('gtceu:nether_ruby_block', 'betternether:nether_ruby_block')
  event.stonecutting('betternether:nether_ruby_block', 'gtceu:nether_ruby_block')
})

