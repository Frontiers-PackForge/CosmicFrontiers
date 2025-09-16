const $UUID = Java.loadClass("java.util.UUID");
let uuid = $UUID.randomUUID();

ItemEvents.modification(event => {
    // food('kubejs:cosmic_meatballs', 1000000, 1000000)    
    // food('legendarysurvivaloverhaul:apple_juice',9, 1)
    // food('legendarysurvivaloverhaul:beetroot_juice', 2, 0.9)
    // food('legendarysurvivaloverhaul:cactus_juice', 6, 0.9)
    // food('legendarysurvivaloverhaul:carrot_juice', 6, 0.9)
    // food('legendarysurvivaloverhaul:chorus_fruit_juice', 8, 0.9)
    // food('legendarysurvivaloverhaul:glistering_melon_juice', 6, 1)
    // food('legendarysurvivaloverhaul:golden_apple_juice', 8, 2.5)
    // food('legendarysurvivaloverhaul:golden_carrot_juice', 13.5, 2.5)
    // food('legendarysurvivaloverhaul:melon_juice', 4.5, 1)
    // food('legendarysurvivaloverhaul:pumpkin_juice', 6, 0.5)
    // food('croptoia:ravioli', 3, 0.9)

    // snackFood('gtceu:basic_electronic_circuit', 6, 0.8, true)
    // snackFood('gtceu:micro_processor', 2, 0.3, true)
    // snackFood('gtceu:nano_processor', 4, 0.4, true)
    // snackFood('gtceu:quantum_processor', 6, 0.6, true)
    // snackFood('gtceu:crystal_processor', 8, 0.7, true)
    // snackFood('gtceu:wetware_processor', 10, 0.8, true)
    // snackFood('cosmiccore:harmonic_processor', 12, 0.9, true)
    // snackFood('cosmiccore:optical_processor', 14, 1.0, true)
    // snackFood('cosmiccore:suelescent_processor', 16, 1.0, true)
    // snackFood('cosmiccore:akashic_processor', 18, 1.0, true)
    // snackFood('cosmiccore:eschaton_processor', 20, 1.0, true)

    // function snackFood(foodItem, hunger, saturation, isSnack) {
    //   event.modify(foodItem, item => {
    //     item.foodProperties = food => {
    //         food.hunger(hunger)
    //         food.saturation(saturation)
    //         food.fastToEat(isSnack)
    //     }
    //   })
    // }

    // // function food(foodItem, hunger, saturation) {
    // //   event.modify(foodItem, item => {
    // //     item.foodProperties = food => {
    // //         food.hunger(hunger)
    // //         food.saturation(saturation)
    // //         food.fastToEat(false)
    // //     }
    // //   })
    // // }

    // function foodWithEffect(foodItem, hunger, saturation, effectId, effectDuration, effectAmplifier, effectChance) {
    //   event.modify(foodItem, item => {
    //     item.foodProperties = food => {
    //         food.hunger(hunger)
    //         food.saturation(saturation)
    //         food.effect(effectId, effectDuration, effectAmplifier, effectChance)
    //     }
    //   })
    // }
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
      //Quarktechs
      event.modify('gtceu:quarktech_helmet', item => {
        item.armorProtection = 6.0
        item.addAttribute("malum:soul_ward_capacity", 'dc478cf8-9ce4-4821-958a-9aad822a8e23', 'ward-capacity7', 9.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '1dafedad-6ca8-413c-8c89-86220a891942', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('gtceu:quarktech_chestplate', item => {
        item.armorProtection = 10.0
        item.addAttribute("malum:soul_ward_capacity", 'c3b224d1-b6a8-4f86-ae7e-26494d4cde92', 'ward-capacity7', 14.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", 'bdfb5c91-a5cd-45d4-a5e1-52061891cc36', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('gtceu:quarktech_leggings', item => {
        item.armorProtection = 8.0
        item.addAttribute("malum:soul_ward_capacity", 'f44ae125-85d0-498d-9ad0-46f74fc3c4ec', 'ward-capacity7', 9.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '2288e382-c677-419a-8c6f-2357c11b33e2', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('gtceu:quarktech_boots', item => {
        item.armorProtection = 6.0
        item.addAttribute("malum:soul_ward_capacity", 'b018428b-c402-4aeb-9576-a09ed8dc60a5', 'ward-capacity7', 9.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", 'b9f45ad6-00fc-4e34-823f-d614e44b8e7a', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('cosmiccore:space_quarktech_chestplate', item => {
        item.armorProtection = 10.0
        item.addAttribute("malum:soul_ward_capacity", '68065d69-2242-42ee-a0db-20c30ff6e700', 'ward-capacity7', 14.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", 'ba6db1b7-73a2-41ed-8bc1-e439166590e5', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('gtceu:advanced_quarktech_chestplate', item => {
        item.armorProtection = 10.0
        item.addAttribute("malum:soul_ward_capacity", 'bc206f33-3d8c-44c0-a0a8-6a078492c3b0', 'ward-capacity7', 14.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '9f531419-d739-496d-9f3a-40af3eb9c894', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('cosmiccore:space_advanced_quarktech_chestplate', item => {
        item.armorProtection = 10.0
        item.addAttribute("malum:soul_ward_capacity", 'aa3c7f47-6df3-47ac-a349-a98b457f04e4', 'ward-capacity7', 14.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '7bb55156-4d51-424a-b9a1-e3bdf565bfff', 'recovery-rate7', 3.0, "addition")
      })
      //Sanguines
      event.modify('cosmiccore:sanguine_warptech_helmet', item => {
        item.armorProtection = 10.0
        item.addAttribute("malum:soul_ward_capacity", 'e9cb771d-aa94-46ec-a13e-4863d77799c8', 'ward-capacity7', 15.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '9d968e1c-fd92-42a5-9495-48a02a2bb7c5', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('cosmiccore:sanguine_warptech_chestplate', item => {
        item.armorProtection = 20.0
        item.addAttribute("malum:soul_ward_capacity", '08969395-58d5-4dd0-8b80-b22814c0a355', 'ward-capacity7', 30.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '77053c89-93a5-49b8-90c9-7fa0b7506ee2', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('cosmiccore:sanguine_warptech_leggings', item => {
        item.armorProtection = 20.0
        item.addAttribute("malum:soul_ward_capacity", '2b0474d8-e408-497b-baa1-5a1fcc17a83f', 'ward-capacity7', 15.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", 'e3241c10-5758-4404-8e37-54224998382b', 'recovery-rate7', 3.0, "addition")
      })
      event.modify('cosmiccore:sanguine_warptech_boots', item => {
        item.armorProtection = 10.0
        item.addAttribute("malum:soul_ward_capacity", '40f284b0-4b8a-4629-9736-34c66f653e3e', 'ward-capacity7', 15.5, "addition")
        item.addAttribute("malum:soul_ward_recovery_rate", '40f284b0-4b8a-4629-9736-34c66f653e3e', 'recovery-rate7', 3.0, "addition")
      })
      //logic for some of these is its a worse armor so it should have better thermal res to make you want to use it, and also better armor = better res
      //malum
      //soulstained
      event.modify('malum:soul_stained_steel_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('malum:soul_stained_steel_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('malum:soul_stained_steel_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('malum:soul_stained_steel_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 1, "addition")
      })
      //soul hunter
      event.modify('malum:soul_hunter_cloak', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      event.modify('malum:soul_hunter_robe', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      event.modify('malum:soul_hunter_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      event.modify('malum:soul_hunter_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      //malignant
      event.modify('malum:malignant_stronghold_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('malum:malignant_stronghold_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('malum:malignant_stronghold_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('malum:malignant_stronghold_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      //create
      event.modify('create:copper_backtank', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      event.modify('create:netherite_backtank', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('create:netherite_diving_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('create:netherite_diving_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('create:copper_diving_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      event.modify('create:copper_diving_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      //minecraft
      event.modify('minecraft:turtle_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 2, "addition")
      })
      //cognition
      event.modify('experienceobelisk:cognitive_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 2, "addition")
      })
      event.modify('experienceobelisk:cognitive_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 2, "addition")
      })
      event.modify('experienceobelisk:cognitive_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 2, "addition")
      })
      event.modify('experienceobelisk:cognitive_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 2, "addition")
      })
      //botania
      //mana steel
      event.modify('botania:manasteel_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      event.modify('botania:manasteel_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      event.modify('botania:manasteel_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      event.modify('botania:manasteel_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      //elementium
      event.modify('botania:elementium_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 7, "addition")
      })
      event.modify('botania:elementium_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 7, "addition")
      })
      event.modify('botania:elementium_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 7, "addition")
      })
      event.modify('botania:elementium_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 7, "addition")
      })
      //terrasteel
      event.modify('botania:terrasteel_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 5, "addition")
      })
      event.modify('botania:terrasteel_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 5, "addition")
      })
      event.modify('botania:terrasteel_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 5, "addition")
      })
      event.modify('botania:terrasteel_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 5, "addition")
      })
      //aether
      //zanite
      event.modify('aether:zanite_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      event.modify('aether:zanite_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      event.modify('aether:zanite_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      event.modify('aether:zanite_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 3, "addition")
      })
      //gravitite
      event.modify('aether:gravitite_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })
      event.modify('aether:gravitite_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })
      event.modify('aether:gravitite_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })
      event.modify('aether:gravitite_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })
      //neptune
      event.modify('aether:neptune_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })
      event.modify('aether:neptune_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })
      event.modify('aether:neptune_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })
      event.modify('aether:neptune_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 4, "addition")
      })   
      //valkyrie
      event.modify('aether:valkyrie_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 4, "addition")
      })
      event.modify('aether:valkyrie_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 4, "addition")
      })
      event.modify('aether:valkyrie_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 4, "addition")
      })
      event.modify('aether:valkyrie_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 4, "addition")
      })    
      //phoenix
      event.modify('aether:phoenix_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 5, "addition")
      })
      event.modify('aether:phoenix_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 5, "addition")
      })
      event.modify('aether:phoenix_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 5, "addition")
      })
      event.modify('aether:phoenix_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 5, "addition")
      })
      //obsidian
      event.modify('aether:obsidian_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      })
      event.modify('aether:obsidian_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      })
      event.modify('aether:obsidian_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      })
      event.modify('aether:obsidian_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      })  
      //gloves <<< needs LSO to be updated
      //event.modify('aether:leather_gloves', item => {
      //  item.addAttribute("legendarysurvivaloverhaul:cold_resistance", $UUID.randomUUID().toString(), 'cold-resistance', 1, "addition")
      //})
      //undergarden
      //cloggrum
      event.modify('undergarden:cloggrum_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 3, "addition")
      })
      event.modify('undergarden:cloggrum_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 3, "addition")
      })
      event.modify('undergarden:cloggrum_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 3, "addition")
      })
      event.modify('undergarden:cloggrum_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 3, "addition")
      })
      //froststeel < doesnt work, probably hardcoded or something
      //event.modify('undergarden:froststeel_helmet', item => {
      //  item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      //})
      //event.modify('undergarden:froststeel_chestplate', item => {
      //  item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      //})
      //event.modify('undergarden:froststeel_leggings', item => {
      //  item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      //})
      //event.modify('undergarden:froststeel_boots', item => {
      //  item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 5, "addition")
      //})   
      //utherium
      event.modify('undergarden:utherium_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 4, "addition")
      })
      event.modify('undergarden:utherium_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 4, "addition")
      })
      event.modify('undergarden:utherium_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 4, "addition")
      })
      event.modify('undergarden:utherium_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 4, "addition")
      })   
      //ancient
      event.modify('undergarden:ancient_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 7, "addition")
      })
      event.modify('undergarden:ancient_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 7, "addition")
      })
      event.modify('undergarden:ancient_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 7, "addition")
      })
      event.modify('undergarden:ancient_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 7, "addition")
      })    
      //gtm
      //bronze
      event.modify('gtceu:bronze_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 1, "addition")
      })
      event.modify('gtceu:bronze_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 1, "addition")
      })
      event.modify('gtceu:bronze_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 1, "addition")
      })
      event.modify('gtceu:bronze_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 1, "addition")
      })  
      //steel
      event.modify('gtceu:steel_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('gtceu:steel_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('gtceu:steel_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })
      event.modify('gtceu:steel_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:heat_resistance", $UUID.randomUUID().toString(), 'heat-resistance', 2, "addition")
      })   
      //titanium
      event.modify('gtceu:titanium_helmet', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('gtceu:titanium_chestplate', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('gtceu:titanium_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('gtceu:titanium_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })  
      //ars (idt i can get the dif tiers to have dif resistances as its done by tags)
      //sorcerer
      event.modify('ars_nouveau:sorcerer_hood', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:sorcerer_robes', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:sorcerer_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:sorcerer_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      }) 
      //arcanist
      event.modify('ars_nouveau:arcanist_hood', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:arcanist_robes', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:arcanist_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:arcanist_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      }) 
      //battlemage
      event.modify('ars_nouveau:battlemage_hood', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:battlemage_robes', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:battlemage_leggings', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      })
      event.modify('ars_nouveau:battlemage_boots', item => {
        item.addAttribute("legendarysurvivaloverhaul:thermal_resistance", $UUID.randomUUID().toString(), 'thermal-resistance', 3, "addition")
      }) 
    })