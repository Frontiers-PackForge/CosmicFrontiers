const $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
const $Operation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const $SlotGroup = Java.loadClass('net.minecraft.world.entity.EquipmentSlotGroup')
const $RL = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

const HEAT = 'legendarysurvivaloverhaul:heat_resistance'
const COLD = 'legendarysurvivaloverhaul:cold_resistance'
const THERMAL = 'legendarysurvivaloverhaul:thermal_resistance'

ItemEvents.modification(event => {

    function has(id) {
        return $Registries.ITEM.containsKey($RL.parse(id))
    }

    function mod(item, attr, amount) {
        let holder = $Registries.ATTRIBUTE.getHolder($RL.parse(attr)).orElse(null)
        if (holder === null) return
        for (const entry of item.item().getDefaultAttributeModifiers().modifiers()) {
            if (!item.hasAttributeModifier(entry.attribute(), entry.modifier().id())) {
                item.addAttributeModifier(entry.attribute(), entry.modifier(), entry.slot())
            }
        }
        let path = attr.substring(attr.indexOf(':') + 1)
        item.addAttributeModifier(holder, new $AttributeModifier($RL.fromNamespaceAndPath('cosmiccore', path), amount, $Operation.ADD_VALUE), $SlotGroup.ARMOR)
    }

    function eat(id, nutrition, saturation, fast) {
        if (!has(id)) return
        event.modify(id, item => {
            item.modifyFood(food => {
                food.nutrition(nutrition)
                food.saturation(saturation)
                if (fast) food.fastToEat()
            })
        })
    }

    function resist(id, attr, amount) {
        if (!has(id)) return
        event.modify(id, item => mod(item, attr, amount))
    }

    function powered(id, armor, capacity, recovery) {
        if (!has(id)) return
        event.modify(id, item => {
            mod(item, 'minecraft:generic.armor', armor)
            mod(item, 'malum:soul_ward_capacity', capacity)
            mod(item, 'malum:soul_ward_recovery_rate', recovery)
        })
    }

    eat('legendarysurvivaloverhaul:apple_juice', 9, 1, false)
    eat('legendarysurvivaloverhaul:beetroot_juice', 2, 0.9, false)
    eat('legendarysurvivaloverhaul:cactus_juice', 6, 0.9, false)
    eat('legendarysurvivaloverhaul:carrot_juice', 6, 0.9, false)
    eat('legendarysurvivaloverhaul:chorus_fruit_juice', 8, 0.9, false)
    eat('legendarysurvivaloverhaul:glistering_melon_juice', 6, 1, false)
    eat('legendarysurvivaloverhaul:golden_apple_juice', 8, 2.5, false)
    eat('legendarysurvivaloverhaul:golden_carrot_juice', 13.5, 2.5, false)
    eat('legendarysurvivaloverhaul:melon_juice', 4.5, 1, false)
    eat('legendarysurvivaloverhaul:pumpkin_juice', 6, 0.5, false)

    eat('gtceu:basic_electronic_circuit', 6, 0.8, true)
    eat('cosmiccore:hex_processor', 2, 0.3, true)
    eat('cosmiccore:enthelic_processor', 4, 0.4, true)
    eat('gtceu:quantum_processor', 6, 0.6, true)
    eat('gtceu:crystal_processor', 8, 0.7, true)
    eat('gtceu:wetware_processor', 10, 0.8, true)
    eat('cosmiccore:harmonic_processor', 12, 0.9, true)
    eat('cosmiccore:optical_processor', 14, 1.0, true)
    eat('cosmiccore:suelescent_processor', 16, 1.0, true)
    eat('cosmiccore:akashic_processor', 18, 1.0, true)
    eat('cosmiccore:eschaton_processor', 20, 1.0, true)

    powered('gtceu:nanomuscle_chestplate', 6.0, 7.5, 2.0)
    powered('gtceu:nanomuscle_leggings', 5.0, 7.5, 2.0)
    powered('gtceu:nanomuscle_boots', 2.0, 7.5, 2.0)
    powered('gtceu:nanomuscle_helmet', 2.0, 7.5, 2.0)
    powered('gtceu:advanced_nanomuscle_chestplate', 6.0, 7.5, 2.0)
    powered('cosmiccore:space_nanomuscle_chestplate', 6.0, 7.5, 2.0)
    powered('cosmiccore:space_advanced_nanomuscle_chestplate', 6.0, 7.5, 2.0)
    powered('gtceu:quarktech_helmet', 6.0, 9.5, 3.0)
    powered('gtceu:quarktech_chestplate', 10.0, 14.5, 3.0)
    powered('gtceu:quarktech_leggings', 8.0, 9.5, 3.0)
    powered('gtceu:quarktech_boots', 6.0, 9.5, 3.0)
    powered('cosmiccore:space_quarktech_chestplate', 10.0, 14.5, 3.0)
    powered('gtceu:advanced_quarktech_chestplate', 10.0, 14.5, 3.0)
    powered('cosmiccore:space_advanced_quarktech_chestplate', 10.0, 14.5, 3.0)
    powered('cosmiccore:sanguine_warptech_helmet', 10.0, 15.5, 3.0)
    powered('cosmiccore:sanguine_warptech_chestplate', 20.0, 30.5, 3.0)
    powered('cosmiccore:sanguine_warptech_leggings', 20.0, 15.5, 3.0)
    powered('cosmiccore:sanguine_warptech_boots', 10.0, 15.5, 3.0)

    resist('malum:soul_stained_steel_helmet', HEAT, 2)
    resist('malum:soul_stained_steel_chestplate', HEAT, 2)
    resist('malum:soul_stained_steel_leggings', HEAT, 2)
    resist('malum:soul_stained_steel_boots', HEAT, 1)

    resist('malum:soul_hunter_cloak', COLD, 2)
    resist('malum:soul_hunter_robe', COLD, 2)
    resist('malum:soul_hunter_leggings', COLD, 2)
    resist('malum:soul_hunter_boots', COLD, 2)

    resist('malum:malignant_stronghold_helmet', THERMAL, 3)
    resist('malum:malignant_stronghold_chestplate', THERMAL, 3)
    resist('malum:malignant_stronghold_leggings', THERMAL, 3)
    resist('malum:malignant_stronghold_boots', THERMAL, 3)

    resist('create:copper_backtank', COLD, 2)
    resist('create:netherite_backtank', HEAT, 2)
    resist('create:netherite_diving_helmet', HEAT, 2)
    resist('create:netherite_diving_boots', HEAT, 2)
    resist('create:copper_diving_helmet', COLD, 2)
    resist('create:copper_diving_boots', COLD, 2)

    resist('minecraft:turtle_helmet', COLD, 2)

    resist('undergarden:cloggrum_helmet', HEAT, 3)
    resist('undergarden:cloggrum_chestplate', HEAT, 3)
    resist('undergarden:cloggrum_leggings', HEAT, 3)
    resist('undergarden:cloggrum_boots', HEAT, 3)

    resist('undergarden:utherium_helmet', HEAT, 4)
    resist('undergarden:utherium_chestplate', HEAT, 4)
    resist('undergarden:utherium_leggings', HEAT, 4)
    resist('undergarden:utherium_boots', HEAT, 4)

    resist('undergarden:ancient_helmet', HEAT, 7)
    resist('undergarden:ancient_chestplate', HEAT, 7)
    resist('undergarden:ancient_leggings', HEAT, 7)
    resist('undergarden:ancient_boots', HEAT, 7)

    resist('gtceu:bronze_helmet', HEAT, 1)
    resist('gtceu:bronze_chestplate', HEAT, 1)
    resist('gtceu:bronze_leggings', HEAT, 1)
    resist('gtceu:bronze_boots', HEAT, 1)

    resist('gtceu:steel_helmet', HEAT, 2)
    resist('gtceu:steel_chestplate', HEAT, 2)
    resist('gtceu:steel_leggings', HEAT, 2)
    resist('gtceu:steel_boots', HEAT, 2)

    resist('gtceu:titanium_helmet', THERMAL, 3)
    resist('gtceu:titanium_chestplate', THERMAL, 3)
    resist('gtceu:titanium_leggings', THERMAL, 3)
    resist('gtceu:titanium_boots', THERMAL, 3)

    resist('ars_nouveau:sorcerer_hood', THERMAL, 3)
    resist('ars_nouveau:sorcerer_robes', THERMAL, 3)
    resist('ars_nouveau:sorcerer_leggings', THERMAL, 3)
    resist('ars_nouveau:sorcerer_boots', THERMAL, 3)

    resist('ars_nouveau:arcanist_hood', THERMAL, 3)
    resist('ars_nouveau:arcanist_robes', THERMAL, 3)
    resist('ars_nouveau:arcanist_leggings', THERMAL, 3)
    resist('ars_nouveau:arcanist_boots', THERMAL, 3)

    resist('ars_nouveau:battlemage_hood', THERMAL, 3)
    resist('ars_nouveau:battlemage_robes', THERMAL, 3)
    resist('ars_nouveau:battlemage_leggings', THERMAL, 3)
    resist('ars_nouveau:battlemage_boots', THERMAL, 3)
})
