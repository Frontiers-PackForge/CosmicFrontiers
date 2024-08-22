ItemEvents.modification(event => {
    event.modify('gtceu:basic_electronic_circuit', item => {
      item.foodProperties = food => {
          food.hunger(6)
          food.saturation(0.80)
          food.fastToEat(true)
      }
    })
    event.modify('kubejs:cosmic_meatballs', item => {
      item.foodProperties = food => {
          food.hunger(1000000)
          food.saturation(10000)
          food.fastToEat(false)
      }
    })
})

ItemEvents.armorTierRegistry(event => {
  event.add('breather', tier => {
    tier.durabilityMultiplier = 1 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [0,0,0,0] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
    tier.enchantmentValue = 16
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/steel'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })
})