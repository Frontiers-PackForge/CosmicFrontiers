const $UUID = Java.loadClass("java.util.UUID")
let uuid = $UUID.randomUUID();
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
  
    })