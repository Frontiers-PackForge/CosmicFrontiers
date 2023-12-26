//Commence purification of non-greg behaviour
//Currently only Iron tools but for ease of removal/tweaking
//I opted for a seperate file just for this

ServerEvents.recipes(e => {
    e.remove({output: 'minecraft:iron_pickaxe'})
    e.remove({output: 'minecraft:iron_shovel'})
    e.remove({output: 'minecraft:iron_sword'})
    e.remove({output: 'minecraft:iron_axe'})



})