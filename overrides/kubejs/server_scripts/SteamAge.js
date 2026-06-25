


ServerEvents.recipes(event => {
    event.shaped('4x gtceu:compressed_coke_clay', ['ABA', 'BAB', ' C '], { A: 'minecraft:clay_ball', B: 'minecraft:wheat', C: 'gtceu:brick_wooden_form' })
    event.shaped('gtceu:coke_oven_bricks', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:coke_oven_brick', B: 'create:andesite_alloy', C: 'minecraft:mud_bricks' })
    event.shaped('gtceu:lv_machine_casing', ['ABA', 'CDC', 'ACA'], { A: 'cosmiccore:riveted_straps', B: 'cosmiccore:lv_cogwork_magicapacitor', C: 'cosmiccore:lv_cladding', D: 'cosmiccore:lv_modular_frameworks' })
    event.shaped('gtceu:lv_machine_hull', ['ABA', 'CDC', 'AEA'], { A: 'gtceu:bronze_foil', B: 'gtceu:steel_plate', C: 'gtceu:tin_single_cable', D: 'gtceu:lv_machine_casing', E: 'gtceu:small_steel_spring' })
    event.shaped('cosmiccore:sturdy_plates', ['ABA', 'BCB', 'ABA'], { A: 'gtceu:double_wrought_iron_plate', B: 'createdeco:andesite_sheet', C: 'gtceu:treated_wood_plate' })
    event.shaped('createdeco:andesite_sheet', ['A', 'B', 'B'], { A: '#gtceu:crafting_tools/hammer', B: 'create:andesite_alloy' })
    event.shaped('gtceu:programmed_circuit', ['A'], { A: 'gtceu:vacuum_tube' })
    event.recipes.create.compacting('cosmiccore:creosote_grease', [Fluid.of('gtceu:creosote', 1000), 'minecraft:sand'])
    event.shaped('4x create:andesite_alloy', ['ABA', 'BCB', 'ABA'], { A: 'minecraft:iron_nugget', B: 'cosmiccore:weak_binding_putty', C: 'minecraft:andesite' })
    event.shaped('4x cosmiccore:weak_binding_putty', ['ABC'], { A: 'minecraft:dried_kelp', B: 'minecraft:sand', C: 'minecraft:clay_ball' })
    event.recipes.create.mixing(Item.of('create:andesite_alloy', 4), [Item.of('cosmiccore:weak_binding_putty', 2), Item.of('minecraft:iron_nugget', 2), 'minecraft:andesite']).heated()
    event.shaped('2x gtceu:wood_plate', ['A', 'B'], { A: '#gtceu:crafting_tools/saw', B: '#minecraft:wooden_slabs' })
    event.shaped('gtceu:bronze_brick_casing', ['AAA', 'ABA', 'CCC'], { A: 'gtceu:bronze_plate', B: '#gtceu:crafting_tools/hammer', C: 'gtceu:coke_oven_bricks' })
    event.shaped('cosmiccore:steam_mixing_vessel', ['ABA', 'ABA', 'CCC'], { A: 'gtceu:bronze_turbine_blade', B: 'gtceu:bronze_pipe_casing', C: 'gtceu:bronze_brick_casing' })
    event.recipes.gtceu.compressor()
        .itemInputs('4x gtceu:sticky_resin')
        .itemOutputs('cosmiccore:hardened_resin')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(50)

    event.shaped('cosmiccore:hardened_resin', ['AAA', 'ABA', 'AAA'], { A: 'gtceu:sticky_resin', B: '#gtceu:crafting_tools/hammer' })
    event.shaped('cosmiccore:steam_caster', ['ABA', 'ACA', 'ADA'], { A: 'gtceu:coke_oven_bricks', B: 'create:spout', C: 'minecraft:cauldron', D: 'gtceu:bronze_crate' })





    event.recipes.occultism.spirit_fire('gtceu:tempered_iesnium_ingot', 'occultism:iesnium_ingot')











    event.recipes.gtceu.mixer()
        .itemInputs('4x gtceu:calcite_dust', '4x occultism:burnt_otherstone', '4x occultism:burnt_otherrock')
        .itemOutputs('occultism:chalk_white_impure')
        .inputFluids('gtceu:concrete 500')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .duration(640)




})



































