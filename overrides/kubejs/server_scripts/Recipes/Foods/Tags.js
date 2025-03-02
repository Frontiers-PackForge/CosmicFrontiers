ServerEvents.tags('item', event => {
    event.add('forge:flour', 'gtceu:wheat_dust')
    event.add('forge:salt', 'gtceu:salt_dust')
    event.add('forge:rice', 'farmersdelight:rice')
    event.add('forge:cabbage', 'farmersdelight:cabbage')
    event.add('forge:tomatoes', 'farmersdelight:tomato')
    event.add('forge:onions', 'farmersdelight:onion')
    
    spring('biomeswevegone:blueberries')
    summer('biomeswevegone:blueberries')

    // Seasonal crops
    function spring(item) {
        event.add('serenseseasons:spring_crops', item)
    }
    function summer(item) {
        event.add('serenseseasons:summer_crops', item)
    }
    function autumn(item) {
        event.add('serenseseasons:autumn_crops', item)
    }
    function winter(item) {
        event.add('serenseseasons:winter_crops', item)
    }

    proteins('nethersdelight:hoglin_loin')
    mana('ars_nouveau:source_berry_roll')
    mana('ars_nouveau:source_berry_pie')
    mana('ars_nouveau:sourceberry_bush')
    psi('gtceu:basic_electronic_circuit')

    // Dietary groups
    function mana(item) {
        event.add('diet:mana', item)
    }
    function psi(item) {
        event.add('diet:psi', item)
    }
    function proteins(item) {
        event.add('diet:proteins', item)
    }
    function fruits(item) {
        event.add('diet:fruits', item)
    }

    // todo hot and cold foods
})

ServerEvents.tags('fluid', event => {
    event.add('forge:milk', 'gtceu:soy_milk')
    event.add('forge:milk', 'gtceu:milk')
    event.add('forge:milk', 'minecraft:milk')
})
