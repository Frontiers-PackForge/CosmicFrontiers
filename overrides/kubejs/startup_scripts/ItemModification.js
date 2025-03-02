const $UUID = Java.loadClass("java.util.UUID")
let uuid = $UUID.randomUUID();

ItemEvents.modification(event => {
    food('kubejs:cosmic_meatballs', 1000000, 1000000)    
    food('legendarysurvivaloverhaul:apple_juice', 6, 1)
    food('legendarysurvivaloverhaul:beetroot_juice', 1.5, 0.9)
    food('legendarysurvivaloverhaul:cactus_juice', 4.5, 0.9)
    food('legendarysurvivaloverhaul:carrot_juice', 4.5, 0.9)
    food('legendarysurvivaloverhaul:chorus_fruit_juice', 6, 0.)
    food('legendarysurvivaloverhaul:glistering_melon_juice', 4, 1)
    food('legendarysurvivaloverhaul:golden_apple_juice', 6, 2.5)
    food('legendarysurvivaloverhaul:golden_carrot_juice', 9, 2.5)
    food('legendarysurvivaloverhaul:melon_juice', 3, 1)
    food('legendarysurvivaloverhaul:pumpkin_juice', 4.5, 0.5)

    snackFood('gtceu:basic_electronic_circuit', 6, 0.8, true)

    function snackFood(foodItem, hunger, saturation, isSnack) {
      event.modify(foodItem, item => {
        item.foodProperties = food => {
            food.hunger(hunger)
            food.saturation(saturation)
            food.fastToEat(isSnack)
        }
      })
    }

    function food(foodItem, hunger, saturation) {
      event.modify(foodItem, item => {
        item.foodProperties = food => {
            food.hunger(hunger)
            food.saturation(saturation)
            food.fastToEat(false)
        }
      })
    }

    function foodWithEffect(foodItem, hunger, saturation, effectId, effectDuration, effectAmplifier, effectChance) {
      event.modify(foodItem, item => {
        item.foodProperties = food => {
            food.hunger(hunger)
            food.saturation(saturation)
            food.effect(effectId, effectDuration, effectAmplifier, effectChance)
        }
      })
    }
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

ItemEvents.modification(event => {
      
      event.modify('gtceu:nanomuscle_chestplate', item => {
        item.armorProtection = 6.0
        item.addAttribute("malum:soul_ward_capacity", '0ab7ced1-1b25-43a4-a417-b0ad8260dc94', 'ward-capacity', 7.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", 'f16722a3-7d9b-4106-b3df-fd7424c910c6', 'recovery-rate', 2.0, "addition")
      })
      event.modify('gtceu:nanomuscle_leggings', item => {
        item.armorProtection = 5.0
        item.addAttribute("malum:soul_ward_capacity", 'b1a76d8c-3fe6-4b53-9fb5-55535737a989', 'ward-capacity2', 7.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", 'ba3291ef-013b-4cfd-87ea-a1884e493caa', 'recovery-rate2', 2.0, "addition")
      })
      event.modify('gtceu:nanomuscle_boots', item => {
        item.armorProtection = 2.0
        item.addAttribute("malum:soul_ward_capacity", '4670c331-4f25-44f3-a7fe-7e1e80d7dbd1', 'ward-capacity3', 7.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '5b4f787e-efaa-4e2a-aed3-7dbc4c739058', 'recovery-rate3', 2.0, "addition")
      })
      event.modify('gtceu:nanomuscle_helmet', item => {
        item.armorProtection = 2.0
        item.addAttribute("malum:soul_ward_capacity", 'f49dff44-f549-406f-87b0-3f9d3425f7a0', 'ward-capacity4', 7.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '928eaa3b-0d8d-45f8-8d13-f9d4bb866438', 'recovery-rate4', 2.0, "addition")
      })
      event.modify('gtceu:avanced_nanomuscle_chestplate', item => {
        item.armorProtection = 6.0
        item.addAttribute("malum:soul_ward_capacity", '76dee11e-65cb-4103-83f9-9dfc0197b0d6', 'ward-capacity5', 7.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '0571e393-5b51-4936-b452-518e5a1e69a3', 'recovery-rate5', 2.0, "addition")
      })
      event.modify('cosmiccore:space_nanomuscle_chestplate', item => {
        item.armorProtection = 6.0
        item.addAttribute("malum:soul_ward_capacity", 'd50d77e7-508d-4ef0-86ad-8ecf29c66de5', 'ward-capacity6', 7.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", 'b9307e40-3fc4-4e5b-a9da-c2bd5a38b556', 'recovery-rate6', 2.0, "addition")
      })
      event.modify('cosmiccore:space_advanced_nanomuscle_chestplate', item => {
        item.armorProtection = 6.0
        item.addAttribute("malum:soul_ward_capacity", 'b504bc09-b827-4b24-867f-553dc6dc5345', 'ward-capacity7', 7.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '9b8b37d0-913e-425e-bd65-b87056f85ec3', 'recovery-rate7', 2.0, "addition")
      })
  
    })
