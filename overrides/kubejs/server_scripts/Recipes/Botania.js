//Have to remove the wood tag from livingwood if i want to add specific gt recipes :(
ServerEvents.tags('item', event => {
    //event.remove('minecraft:logs', 'botania:livingwood_log')
    //event.remove('minecraft:planks', 'botania:livingwood_planks')          
})

//Adding recipes for registered materials
ServerEvents.recipes(event => {
    //Livingrock
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate_water')
        .itemInputs('botania:livingrock')
        .inputFluids('minecraft:water 17')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(368)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate_distilled_water')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(276)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(184)
        //Essence Reactor Alfheim Materials - The Elves are dead, don't use the portal.
        event.remove({ id: 'botania:elven_trade/dragonstone_block' })
        event.remove({ id: 'botania:elven_trade/dragonstone' })
        event.remove({ id: 'botania:elven_trade/dreamwood' })
        event.remove({ id: 'botania:elven_trade/dreamwood_log' })
        event.remove({ id: 'botania:elven_trade/elementium' })
        event.remove({ id: 'botania:elven_trade/elementium_block' })
        event.remove({ id: 'botania:elven_trade/elf_glass' })
        event.remove({ id: 'botania:elven_trade/elf_quartz' })
        event.remove({ id: 'botania:elven_trade/lexicon_elven' })
        event.remove({ id: 'botania:elven_trade/pixie_dust' })
    event.recipes.gtceu.essence_reactor('elementium_what')
        .itemInputs(['bloodmagic:reagentwater', 'bloodmagic:reagentlava', 'bloodmagic:reagentair', 'bloodmagic:reagentgrowth', '8x botania:terrasteel_ingot'])
        .inputFluids('gtceu:potent_mana 32000')
        .inputFluids('gtceu:source_oils 4000')
        .itemOutputs('8x botania:elementium_ingot')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(184)
    event.recipes.gtceu.essence_reactor('dragonstone_what')
        .itemInputs(['bloodmagic:reagentwater', 'bloodmagic:reagentlava', 'bloodmagic:reagentair', 'bloodmagic:reagentgrowth', '8x botania:mana_diamond'])
        .inputFluids('gtceu:potent_mana 32000')
        .inputFluids('gtceu:source_oils 4000')
        .itemOutputs('8x botania:dragonstone')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(184)
    event.recipes.gtceu.essence_reactor('pixedust_what')
        .itemInputs(['bloodmagic:reagentwater', 'bloodmagic:reagentlava', 'bloodmagic:reagentair', 'bloodmagic:reagentgrowth', '8x botania:mana_pearl'])
        .inputFluids('gtceu:potent_mana 32000')
        .inputFluids('gtceu:source_oils 4000')
        .itemOutputs('8x botania:pixie_dust')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(184)

    //Livingwood
    //Bolt
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(140)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_distilled_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(60)
    //Screw
    event.recipes.gtceu.lathe('gtceu:lathe/lathe_livingwood_bolt_to_screw')
        .itemInputs('gtceu:livingwood_bolt')
        .itemOutputs('gtceu:livingwood_screw')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(12)
    //Plate
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_water')
        .itemInputs('botania:livingwood')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(280)
    event.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_distilled_water')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    event.recipes.gtceu.cutter('gtceu:cut_livingwood_to_plate')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)
    // //ManaSteel Rods
    // event.recipes.gtceu.lathe('manasteel_ingot_to_rod')
    //     .itemInputs('botania:manasteel_ingot')
    //     .itemOutputs('2x gtceu:mana_steel_rod')
    //     .EUt(GTValues.VA[GTValues.LV])
    //     .duration(12)
    // event.recipes.gtceu.extruder('manasteel_ingot_to_rod')
    //     .itemInputs('botania:manasteel_ingot')
    //     .notConsumable('gtceu:rod_extruder_mold')
    //     .itemOutputs('2x gtceu:mana_steel_rod')
    //     .EUt(GTValues.VA[GTValues.LV])
    //     .duration(12)
    // //Terrasteel Rods
    // event.recipes.gtceu.extruder('terrasteel_ingot_to_rod')
    //     .itemInputs('botania:terrasteel_ingot')
    //     .notConsumable('gtceu:rod_extruder_mold')
    //     .itemOutputs('2x gtceu:terrasteel_rod')
    //     .EUt(GTValues.VA[GTValues.MV])
    //     .duration(24)
    // event.recipes.gtceu.lathe('terrasteel_ingot_to_rod')
    //     .itemInputs('botania:terrasteel_ingot')
    //     .itemOutputs('2x gtceu:terrasteel_rod')
    //     .EUt(GTValues.VA[GTValues.MV])
    //     .duration(24)


    //Actually starting botania recipes
    event.remove({ id: 'gtceu:wiremill/mill_terrasteel_wire' })
    event.remove({ id: 'gtceu:extruder/extrude_terrasteel_wire' })
    //Petal Apothecary
    event.remove({ output: 'botania:apothecary_default' })
    event.shaped('botania:apothecary_default', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:cobblestone'
    })
    //Petal Apothecary Deepslate
    event.remove({ output: 'botania:apothecary_deepslate' })
    event.shaped('botania:apothecary_deepslate', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:cobbled_deepslate'
    })
    //Petal Apothecary Mossy, leaving the rest as vanilla recipes. They are gated deep into botania anyways.
    event.remove({ output: 'botania:apothecary_mossy' })
    event.shaped('botania:apothecary_mossy', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:mossy_cobblestone'
    })
    //Mana Spreader
    event.remove({ output: 'botania:mana_spreader' })
    event.shaped('botania:mana_spreader', [
        'LLL',
        'CPG',
        'LLL'
    ], {
        L: 'gtceu:livingwood_plate',
        C: 'gtceu:mana_steel_plate',
        P: '#botania:petals',
        G: 'gtceu:glass_lens'
    })
    //Diluted Mana Pool
    event.remove({ output: 'botania:diluted_pool' })
    event.shaped('botania:diluted_pool', [
        'PMP',
        'SSS',
        '   '
    ], {
        P: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        S: 'botania:livingrock_slab'
    })
    //Mana Pool. Made it possible after diluted pool, but can be changed.
    event.remove({ output: 'botania:mana_pool' })
    event.shaped('botania:mana_pool', [
        'PDP',
        'LLL',
        '   '
    ], {
        P: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond',
        L: 'botania:livingrock'
    })
    //Alchemy Catalyst
    event.remove({ output: 'botania:alchemy_catalyst' })
    event.shaped('botania:alchemy_catalyst', [
        'LCL',
        'BPB',
        'LGL'
    ], {
        B: 'minecraft:brewing_stand',
        L: 'gtceu:livingrock_plate',
        G: 'gtceu:rose_gold_plate',
        P: 'botania:mana_pearl',
        C: '#gtceu:circuits/mv'
    })
    //Runic Altar
    event.remove({ output: 'botania:runic_altar' })
    event.shaped('botania:runic_altar', [
        'PMP',
        'LDL',
        'LCL'
    ], {
        C: '#gtceu:circuits/mv',
        P: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond',
        M: 'gtceu:mana_steel_plate',
        L: 'botania:livingrock'
    })
    //Botanical Brewery
    event.remove({ output: 'botania:brewery' })
    event.shaped('botania:brewery', [
        'PBP',
        'CRC',
        'LML'
    ], {
        P: 'gtceu:livingrock_plate',
        B: 'minecraft:brewing_stand',
        L: 'botania:livingrock',
        R: 'botania:rune_mana',
        M: 'botania:manasteel_block',
        C: '#gtceu:circuits/lv'
    })
    //Mana Pylon
    event.remove({ output: 'botania:mana_pylon' })
    event.shaped('botania:mana_pylon', [
        ' G ',
        'MDM',
        ' G '
    ], {
        G: 'gtceu:rose_gold_plate',
        M: 'gtceu:mana_steel_plate',
        D: 'botania:mana_diamond'
    })
    //Mana Distributor
    event.remove({ output: 'botania:mana_distributor' })
    event.shaped('botania:mana_distributor', [
        'LPL',
        'M M',
        'LPL'
    ], {
        L: 'botania:livingrock',
        P: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate'
    })
    //Mana Void
    event.remove({ output: 'botania:mana_void' })
    event.shaped('botania:mana_void', [
        'LPL',
        'M M',
        'LPL'
    ], {
        L: 'botania:livingrock',
        P: 'gtceu:livingrock_plate',
        M: 'minecraft:obsidian'
    })
    //Mana Detector
    event.remove({ output: 'botania:mana_detector' })
    event.shaped('botania:mana_detector', [
        'RLR',
        'PTP',
        'RLR'
    ], {
        R: 'gtceu:red_alloy_fine_wire',
        L: 'botania:livingrock',
        T: 'minecraft:target',
        P: 'gtceu:livingrock_plate'
    })
    //Spreader Turntable
    event.remove({ output: 'botania:turntable' })
    event.shaped('botania:turntable', [
        'PDP',
        'SGS',
        'PXP'
    ], {
        P: 'gtceu:livingwood_plate',
        D: '#forge:tools/screwdrivers',
        S: 'gtceu:livingwood_screw',
        G: 'gtceu:aluminium_small_gear',
        X: 'minecraft:sticky_piston'
    })
    //Tiny Planet Charm
    event.remove({ output: 'botania:tiny_planet' })
    event.shaped('botania:tiny_planet', [
        'LSL',
        'SPS',
        'LSL'
    ], {
        L: 'gtceu:livingrock_plate',
        S: 'gtceu:stone_plate',
        P: 'botania:mana_pearl'
    })
    //Tiny Planet Block
    event.remove({ output: 'botania:tiny_planet_block' })
    event.shaped('botania:tiny_planet_block', [
        'SSS',
        'SPS',
        'SSS'
    ], {
        S: 'gtceu:stone_plate',
        P: 'botania:tiny_planet'
    })
    //Drum of the Wild
    event.remove({ output: 'botania:drum_wild' })
    event.shaped('botania:drum_wild', [
        'LWL',
        'SHS',
        'LDL'
    ], {
        L: 'gtceu:livingwood_plate',
        S: 'gtceu:livingwood_screw',
        D: '#forge:tools/screwdrivers',
        W: 'cosmiccore:waxed_leather',
        H: 'botania:horn_grass'
    })
    //Drum of the Canopy
    event.remove({ output: 'botania:drum_canopy' })
    event.shaped('botania:drum_canopy', [
        'LWL',
        'SHS',
        'LDL'
    ], {
        L: 'gtceu:livingwood_plate',
        S: 'gtceu:livingwood_screw',
        D: '#forge:tools/screwdrivers',
        W: 'cosmiccore:waxed_leather',
        H: 'botania:horn_leaves'
    })
    //Mana Fluxfield
    event.remove({ output: 'botania:mana_fluxfield' })
    event.shaped('botania:mana_fluxfield', [
        'LRL',
        'RMR',
        'LRL'
    ], {
        L: 'gtceu:livingrock_plate',
        R: 'gtceu:red_alloy_plate',
        M: 'gtceu:mana_steel_quadruple_wire'
    })
    //Mana Pump
    event.remove({ output: 'botania:pump' })
    event.shaped('botania:pump', [
        'LLL',
        'MPM',
        'LLL'
    ], {
        L: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        P: 'gtceu:mv_electric_pump'
    })
    //Manatide Bellows
    event.remove({ output: 'botania:bellows' })
    event.shaped('botania:bellows', [
        'LLL',
        'APW',
        'LLL'
    ], {
        L: 'gtceu:livingwood_plate',
        A: 'botania:rune_air',
        P: 'gtceu:mv_electric_pump',
        W: 'cosmiccore:waxed_leather'
    })
    //Open Crate
    event.remove({ output: 'botania:open_crate' })
    event.shaped('botania:open_crate', [
        'LLL',
        'LSL',
        'LDL'
    ], {
        S: 'gtceu:livingwood_screw',
        D: '#forge:tools/screwdrivers',
        L: 'botania:livingwood_planks'
    })
    //Eye of the Ancients
    event.remove({ output: 'botania:forest_eye' })
    event.shaped('botania:forest_eye', [
        'MLM',
        'LPL',
        'MLM'
    ], {
        L: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        P: 'minecraft:ender_eye'
    })
    //Ender Overseer
    event.remove({ output: 'botania:ender_eye_block' })
    event.shaped('botania:ender_eye_block', [
        'RER',
        'EOE',
        'RER'
    ], {
        R: 'gtceu:red_alloy_plate',
        E: 'minecraft:ender_eye',
        O: 'minecraft:obsidian'
    })
    //Hovering Hourglass
    event.remove({ output: 'botania:hourglass' })
    event.shaped('botania:hourglass', [
        'RGR',
        'BMB',
        'RGR'
    ], {
        R: 'gtceu:rose_gold_plate',
        G: 'botania:mana_glass',
        B: 'gtceu:red_alloy_bolt',
        M: 'gtceu:mana_steel_fine_wire'
    })
    //Livingwood Avatar
    event.remove({ output: 'botania:avatar' })
    event.shaped('botania:avatar', [
        ' L ',
        'LCL',
        'LDL'
    ], {
        L: '#botania:livingwood_logs',
        C: '#gtceu:circuits/lv',
        D: 'botania:mana_diamond'
    })
    //Rod of the Lands
    event.remove({ output: 'botania:dirt_rod' })
    event.shaped('botania:dirt_rod', [
        ' SD',
        ' TS',
        'R  '
    ], {
        S: 'gtceu:aluminium_screw',
        T: 'botania:livingwood_twig',
        D: 'minecraft:dirt',
        R: 'botania:rune_earth'
    })
    //Rod of the Seas
    event.remove({ output: 'botania:water_rod' })
    event.shaped('botania:water_rod', [
        ' SD',
        ' TS',
        'R  '
    ], {
        S: 'gtceu:aluminium_screw',
        T: 'botania:livingwood_twig',
        D: 'minecraft:water_bucket',
        R: 'botania:rune_water'
    })
    //Rod of the Skies
    event.remove({ output: 'botania:tornado_rod' })
    event.shaped('botania:tornado_rod', [
        ' SD',
        ' TS',
        'R  '
    ], {
        S: 'gtceu:aluminium_screw',
        T: 'botania:livingwood_twig',
        D: 'minecraft:feather',
        R: 'botania:rune_air'
    })
    //Rod of the Hells
    event.remove({ output: 'botania:fire_rod' })
    event.shaped('botania:fire_rod', [
        ' SD',
        ' TS',
        'R  '
    ], {
        S: 'gtceu:aluminium_screw',
        T: 'botania:livingwood_twig',
        D: 'minecraft:blaze_powder',
        R: 'botania:rune_fire'
    })
    //Rod of the Depths
    event.remove({ output: 'botania:cobble_rod' })
    event.shaped('botania:cobble_rod', [
        ' RC',
        'STE',
        'TS '
    ], {
        T: 'botania:livingwood_twig',
        S: 'gtceu:aluminium_screw',
        C: 'minecraft:cobblestone',
        R: 'botania:rune_fire',
        E: 'botania:rune_water'
    })
    //Rod of the Plentiful Mantle
    event.remove({ output: 'botania:divining_rod' })
    event.shaped('botania:divining_rod', [
        ' TC',
        'STT',
        'TS '
    ], {
        T: 'botania:livingwood_twig',
        S: 'gtceu:aluminium_screw',
        C: 'botania:mana_diamond',
    })
    //Rod of the Molten Core
    event.remove({ output: 'botania:smelt_rod' })
    event.shaped('botania:smelt_rod', [
        ' BF',
        'STB',
        'TS '
    ], {
        T: 'botania:livingwood_twig',
        S: 'gtceu:aluminium_screw',
        B: 'minecraft:blaze_rod',
        F: 'botania:rune_fire',
    })
    //Rod of the Shifting Crust
    event.remove({ output: 'botania:exchange_rod' })
    event.shaped('botania:exchange_rod', [
        ' BF',
        'STB',
        'TS '
    ], {
        T: 'botania:livingwood_twig',
        S: 'gtceu:aluminium_screw',
        B: 'minecraft:stone',
        F: 'botania:rune_sloth',
    })
    //Manasteel Helmet
    event.remove({ output: 'botania:manasteel_helmet' })
    event.shaped('botania:manasteel_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Manasteel Chestplate
    event.remove({ output: 'botania:manasteel_chestplate' })
    event.shaped('botania:manasteel_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Manasteel Leggings
    event.remove({ output: 'botania:manasteel_leggings' })
    event.shaped('botania:manasteel_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Manasteel Boots
    event.remove({ output: 'botania:manasteel_boots' })
    event.shaped('botania:manasteel_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Helmet
    event.remove({ output: 'botania:elementium_helmet' })
    event.shaped('botania:elementium_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Chestplate
    event.remove({ output: 'botania:elementium_chestplate' })
    event.shaped('botania:elementium_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Leggings
    event.remove({ output: 'botania:elementium_leggings' })
    event.shaped('botania:elementium_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Boots
    event.remove({ output: 'botania:elementium_boots' })
    event.shaped('botania:elementium_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Terrasteel Helmet
    event.remove({ output: 'botania:terrasteel_helmet' })
    event.shaped('botania:terrasteel_helmet', [
        'LRL',
        'TMT',
        'FTH'
    ], {
        L: 'botania:livingwood_twig',
        T: 'gtceu:terrasteel_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        R: 'botania:rune_spring',
        M: 'botania:manasteel_helmet'
    })
    //Terrasteel Chestplate
    event.remove({ output: 'botania:terrasteel_chestplate' })
    event.shaped('botania:terrasteel_chestplate', [
        'LRL',
        'TMT',
        'FTH'
    ], {
        L: 'botania:livingwood_twig',
        T: 'gtceu:terrasteel_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        R: 'botania:rune_summer',
        M: 'botania:manasteel_chestplate'
    })
    //Terrasteel Leggings
    event.remove({ output: 'botania:terrasteel_leggings' })
    event.shaped('botania:terrasteel_leggings', [
        'LRL',
        'TMT',
        'FTH'
    ], {
        L: 'botania:livingwood_twig',
        T: 'gtceu:terrasteel_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        R: 'botania:rune_autumn',
        M: 'botania:manasteel_leggings'
    })
    //Terrasteel Boots
    event.remove({ output: 'botania:terrasteel_boots' })
    event.shaped('botania:terrasteel_boots', [
        'LRL',
        'TMT',
        'FTH'
    ], {
        L: 'botania:livingwood_twig',
        T: 'gtceu:terrasteel_plate',
        F: '#forge:tools/files',
        H: '#forge:tools/hammers',
        R: 'botania:rune_winter',
        M: 'botania:manasteel_boots'
    })
    //Manasteel Pickaxe
    event.remove({ output: 'botania:manasteel_pick' })
    event.shaped('botania:manasteel_pick', [
        'MII',
        'HTF',
        ' T '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:manasteel_ingot',
        T: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Manasteel Shovel
    event.remove({ output: 'botania:manasteel_shovel' })
    event.shaped('botania:manasteel_shovel', [
        ' M ',
        'HTF',
        ' T '
    ], {
        M: 'gtceu:mana_steel_plate',
        T: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Manasteel Axe
    event.remove({ output: 'botania:manasteel_axe' })
    event.shaped('botania:manasteel_axe', [
        'MIF',
        'MT ',
        'HT '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:manasteel_ingot',
        T: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Manasteel Hoe
    event.remove({ output: 'botania:manasteel_hoe' })
    event.shaped('botania:manasteel_hoe', [
        'MI ',
        'HTF',
        ' T '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:manasteel_ingot',
        T: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Manasteel Sword
    event.remove({ output: 'botania:manasteel_sword' })
    event.shaped('botania:manasteel_sword', [
        ' M ',
        'HMF',
        ' T '
    ], {
        M: 'gtceu:mana_steel_plate',
        T: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Manasteel Shears
    event.remove({ output: 'botania:manasteel_shears' })
    event.shaped('botania:manasteel_shears', [
        'HM ',
        'MF ',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Elementium Pickaxe
    event.remove({ output: 'botania:elementium_pickaxe' })
    event.shaped('botania:elementium_pickaxe', [
        'MII',
        'HTF',
        ' T '
    ], {
        M: 'gtceu:elementium_plate',
        I: 'botania:elementium_ingot',
        T: 'botania:dreamwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Elementium Shovel
    event.remove({ output: 'botania:elementium_shovel' })
    event.shaped('botania:elementium_shovel', [
        ' M ',
        'HTF',
        ' T '
    ], {
        M: 'gtceu:elementium_plate',
        T: 'botania:dreamwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Elementium Axe
    event.remove({ output: 'botania:elementium_axe' })
    event.shaped('botania:elementium_axe', [
        'MIF',
        'MT ',
        'HT '
    ], {
        M: 'gtceu:elementium_plate',
        I: 'botania:elementium_ingot',
        T: 'botania:dreamwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Elementium Hoe
    event.remove({ output: 'botania:elementium_hoe' })
    event.shaped('botania:elementium_hoe', [
        'MI ',
        'HTF',
        ' T '
    ], {
        M: 'gtceu:elementium_plate',
        I: 'botania:elementium_ingot',
        T: 'botania:dreamwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Elementium Sword
    event.remove({ output: 'botania:elementium_sword' })
    event.shaped('botania:elementium_sword', [
        ' M ',
        'HMF',
        ' T '
    ], {
        M: 'gtceu:elementium_plate',
        T: 'botania:dreamwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Elementium Shears
    event.remove({ output: 'botania:elementium_shears' })
    event.shaped('botania:elementium_shears', [
        'HM ',
        'MF ',
        '   '
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Terra Shatterer
    event.remove({ output: 'botania:terra_pick' })
    event.shaped('botania:terra_pick', [
        'PTP',
        'SWS',
        'HWF'
    ], {
        S: 'gtceu:terrasteel_plate',
        T: 'botania:mana_tablet',
        P: 'botania:terrasteel_ingot',
        W: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Terra Blade
    event.remove({ output: 'botania:terra_sword' })
    event.shaped('botania:terra_sword', [
        ' M ',
        'HMF',
        ' T '
    ], {
        M: 'gtceu:terrasteel_plate',
        T: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Terra Truncator
    event.remove({ output: 'botania:terra_axe' })
    event.shaped('botania:terra_axe', [
        'SPG',
        'SWP',
        'HWF'
    ], {
        S: 'gtceu:terrasteel_plate',
        G: 'gtceu:glowstone_plate',
        P: 'botania:terrasteel_ingot',
        W: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Thorn Chakram
    event.remove({ output: 'botania:thorn_chakram' })
    event.shaped('botania:thorn_chakram', [
        'VVV',
        'VTV',
        'VVV'
    ], {
        V: 'minecraft:vine',
        T: 'gtceu:terrasteel_plate'
    })
    //Thundercaller
    event.remove({ output: 'botania:thunder_sword' })
    event.shaped('botania:thunder_sword', [
        ' HE',
        'ADF',
        'TA '
    ], {
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        E: 'gtceu:elementium_plate',
        A: 'botania:ender_air_bottle',
        D: 'botania:mana_diamond',
        T: 'botania:terra_sword'
    })
    //Starcaller
    event.remove({ output: 'botania:star_sword' })
    event.shaped('botania:star_sword', [
        ' HE',
        'ADF',
        'TA '
    ], {
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        E: 'gtceu:elementium_plate',
        A: 'botania:ender_air_bottle',
        D: 'botania:dragonstone',
        T: 'botania:terra_sword'
    })
    //Manaweave Cowl
    event.remove({ output: 'botania:manaweave_helmet' })
    event.shaped('botania:manaweave_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Manaweave Robe Top
    event.remove({ output: 'botania:manaweave_chestplate' })
    event.shaped('botania:manaweave_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Manaweave Robe Bottom
    event.remove({ output: 'botania:manaweave_leggings' })
    event.shaped('botania:manaweave_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Manaweave Boots
    event.remove({ output: 'botania:manaweave_boots' })
    event.shaped('botania:manaweave_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Soulscribe
    event.remove({ output: 'botania:ender_dagger' })
    event.shaped('botania:ender_dagger', [
        ' P ',
        'HMF',
        ' T '
    ], {
        M: 'gtceu:mana_steel_plate',
        P: 'botania:mana_pearl',
        T: 'botania:livingwood_twig',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Livingwood Bow
    event.remove({ output: 'botania:livingwood_bow' })
    event.shaped('botania:livingwood_bow', [
        'HTS',
        'TRS',
        'FTS'
    ], {
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        T: 'botania:livingwood_twig',
        S: 'botania:mana_string',
        R: 'gtceu:aluminium_ring'
    })
    //Crystal Bow
    event.remove({ output: 'botania:crystal_bow' })
    event.shaped('botania:crystal_bow', [
        'HDS',
        'TRS',
        'FDS'
    ], {
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        T: 'botania:livingwood_twig',
        S: 'botania:mana_string',
        R: 'gtceu:stainless_steel_ring',
        D: 'botania:dragonstone'
    })
    //Mana Tablet
    event.remove({ output: 'botania:mana_tablet' })
    event.shaped('botania:mana_tablet', [
        'LLL',
        'LDL',
        'LLL'
    ], {
        L: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond'
    })
    //Hand of Ender
    event.remove({ output: 'botania:ender_hand' })
    event.shaped('botania:ender_hand', [
        'PLO',
        'LCL',
        'OL '
    ], {
        P: 'botania:mana_pearl',
        L: 'cosmiccore:waxed_leather',
        O: 'gtceu:obsidian_plate',
        C: 'minecraft:ender_chest'
    })
    //Assembly Halo
    event.remove({ output: 'botania:crafting_halo' })
    event.shaped('botania:crafting_halo', [
        ' P ',
        'MCM',
        ' M '
    ], {
        P: 'botania:mana_pearl',
        M: 'gtceu:mana_steel_plate',
        C: 'minecraft:crafting_table'
    })
    //Worldshaper's Sextant
    event.remove({ output: 'botania:sextant' })
    event.shaped('botania:sextant', [
        'HTR',
        'FTT',
        'RMR'
    ], {
        M: 'gtceu:mana_steel_plate',
        T: 'botania:livingwood_twig',
        R: 'gtceu:mana_steel_rod',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Trinket Case
    event.remove({ output: 'botania:bauble_box' })
    event.shaped('botania:bauble_box', [
        ' M ',
        'MCR',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        R: 'gtceu:rose_gold_ring',
        C: '#forge:chests'
    })
    //Band of Mana
    event.remove({ output: 'botania:mana_ring' })
    event.shaped('botania:mana_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:mana_tablet'
    })
    //Band of Aura
    event.remove({ output: 'botania:aura_ring' })
    event.shaped('botania:aura_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:rune_mana'
    })
    //Ring of Magnetization
    event.remove({ output: 'botania:magnet_ring' })
    event.shaped('botania:magnet_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:lens_magnet'
    })
    //Ring of Correction
    event.remove({ output: 'botania:swap_ring' })
    event.shaped('botania:swap_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'minecraft:clay'
    })
    //Ring of Dextrous Motion
    event.remove({ output: 'botania:dodge_ring' })
    event.shaped('botania:dodge_ring', [
        'IM ',
        'M M',
        ' MO'
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'minecraft:emerald',
        O: 'botania:rune_air'
    })
    //Ring of the Mantle
    event.remove({ output: 'botania:mining_ring' })
    event.shaped('botania:mining_ring', [
        'IMO',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        O: 'minecraft:golden_pickaxe',
        I: 'botania:rune_earth'
    })
    //Ring of Chordata
    event.remove({ output: 'botania:water_ring' })
    event.shaped('botania:water_ring', [
        'IMU',
        'MPM',
        'OM '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:rune_water',
        O: 'minecraft:cod',
        U: 'minecraft:pufferfish'
    })
    //Mana Lens
    event.remove({ output: 'botania:lens_normal' })
    event.shaped('botania:lens_normal', [
        ' M ',
        'MLM',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        L: 'gtceu:glass_lens'
    })
    //Bore Lens
    event.remove({ output: 'botania:lens_mine' })
    event.shaped('botania:lens_mine', [
        ' D ',
        'LML',
        ' B '
    ], {
        D: 'gtceu:steel_drill_head',
        M: 'botania:lens_normal',
        L: 'gtceu:lapis_plate',
        B: 'gtceu:red_alloy_bolt'
    })
    //Magnetizing Lens
    event.remove({ output: 'botania:lens_magnet' })
    event.shaped('botania:lens_magnet', [
        'LSI',
        '   ',
        '   '
    ], {
        L: 'botania:lens_normal',
        S: 'gtceu:magnetic_steel_rod',
        I: 'gtceu:magnetic_iron_rod'
    })
    //Flash Lens
    event.remove({ output: 'botania:lens_light' })
    event.shaped('botania:lens_light', [
        'FGF',
        'GLG',
        'FGF'
    ], {
        F: 'minecraft:fire_charge',
        G: 'gtceu:glowstone_plate',
        L: 'botania:lens_normal'
    })
    //Sojourner's Sash
    event.remove({ output: 'botania:travel_belt' })
    event.shaped('botania:travel_belt', [
        'ELS',
        'L L',
        'MLA'
    ], {
        E: 'botania:rune_earth',
        L: 'cosmiccore:waxed_leather',
        S: 'gtceu:aluminium_screw',
        M: 'gtceu:mana_steel_plate',
        A: 'botania:rune_air'
    })
    //Tectonic Girdle
    event.remove({ output: 'botania:knockback_belt' })
    event.shaped('botania:knockback_belt', [
        'ELS',
        'L L',
        'MLA'
    ], {
        E: 'botania:rune_fire',
        L: 'cosmiccore:waxed_leather',
        S: 'gtceu:aluminium_screw',
        M: 'gtceu:mana_steel_plate',
        A: 'botania:rune_earth'
    })
    //Snowflake Pendant
    event.remove({ output: 'botania:ice_pendant' })
    event.shaped('botania:ice_pendant', [
        'ELS',
        'L L',
        'MLA'
    ], {
        E: 'botania:rune_winter',
        L: 'botania:mana_string',
        S: 'gtceu:aluminium_screw',
        M: 'gtceu:mana_steel_plate',
        A: 'botania:rune_water'
    })
    //Pyroclast Pendant
    event.remove({ output: 'botania:lava_pendant' })
    event.shaped('botania:lava_pendant', [
        'ELS',
        'L L',
        'MLA'
    ], {
        E: 'botania:rune_summer',
        L: 'botania:mana_string',
        S: 'gtceu:aluminium_screw',
        M: 'gtceu:mana_steel_plate',
        A: 'botania:rune_fire'
    })
    //Cirrus Amulet
    event.remove({ output: 'botania:cloud_pendant' })
    event.shaped('botania:cloud_pendant', [
        'ELS',
        'L L',
        'MLA'
    ], {
        E: 'botania:rune_autumn',
        L: 'botania:mana_string',
        S: 'gtceu:aluminium_screw',
        M: 'gtceu:mana_steel_plate',
        A: 'botania:rune_air'
    })
    //The Spectator
    event.remove({ output: 'botania:itemfinder' })
    event.shaped('botania:itemfinder', [
        'SDS',
        'PEP',
        'PLP'
    ], {
        S: 'gtceu:wrought_iron_screw',
        D: '#forge:tools/screwdrivers',
        P: 'gtceu:wrought_iron_plate',
        E: 'minecraft:ender_pearl',
        L: 'gtceu:emerald_lens'
    })
    //Spark
    event.remove({ output: 'botania:spark' })
    event.shaped('botania:spark', [
        'FPF',
        'BRB',
        'FPF'
    ], {
        F: 'gtceu:mana_steel_foil',
        P: '#botania:petals',
        B: 'minecraft:blaze_powder',
        R: 'gtceu:rose_gold_ring'
    })
    //Managlass Vial
    event.remove({ output: 'botania:vial' })
    event.recipes.gtceu.alloy_smelter('gtceu:alloy_smelter/manavial')
        .itemInputs('botania:mana_glass')
        .notConsumable('gtceu:bottle_casting_mold')
        .itemOutputs('botania:vial')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.extruder('gtceu:extruder/manavial')
        .itemInputs('botania:mana_glass')
        .notConsumable('gtceu:bottle_extruder_mold')
        .itemOutputs('botania:vial')
        .duration(32)
        .EUt(GTValues.VA[GTValues.LV])
    //Alfglass Flask
    event.remove({ output: 'botania:flask' })
    event.recipes.gtceu.alloy_smelter('gtceu:extruder/alfflask')
        .itemInputs('botania:elf_glass')
        .notConsumable('gtceu:bottle_casting_mold')
        .itemOutputs('botania:flask')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.extruder('gtceu:extruder/alfflask')
        .itemInputs('botania:elf_glass')
        .notConsumable('gtceu:bottle_extruder_mold')
        .itemOutputs('botania:flask')
        .duration(32)
        .EUt(GTValues.VA[GTValues.LV])
    //Conjuration Catalyst
    event.remove({ output: 'botania:conjuration_catalyst' })
    event.shaped('botania:conjuration_catalyst', [
        'LEL',
        'PCP',
        'LDL'
    ], {
        C: 'botania:alchemy_catalyst',
        L: 'botania:livingrock',
        P: 'gtceu:elementium_plate',
        D: 'botania:pixie_dust',
        E: '#gtceu:circuits/ev'

    })
    //Elven Mana Spreader
    event.remove({ output: 'botania:elven_spreader' })
    event.shaped('botania:elven_spreader', [
        'DDD',
        'EPG',
        'DDD'
    ], {
        D: 'gtceu:dreamwood_plate',
        E: 'gtceu:elementium_plate',
        P: '#botania:petals',
        G: 'gtceu:glass_lens'
    })
    //Natura Pylons
    event.remove({ output: 'botania:natura_pylon' })
    event.shaped('botania:natura_pylon', [
        ' P ',
        'PYP',
        ' P '
    ], {
        Y: 'botania:mana_pylon',
        P: 'gtceu:terrasteel_plate'
    })
    //Gaia Pylons
    event.remove({ output: 'botania:gaia_pylon' })
    event.shaped('botania:gaia_pylon', [
        ' D ',
        'PYP',
        ' D '
    ], {
        Y: 'botania:natura_pylon',
        P: 'gtceu:elementium_plate',
        D: 'botania:pixie_dust'
    })
    //Drum of the Gathering
    event.remove({ output: 'botania:drum_gathering' })
    event.shaped('botania:drum_gathering', [
        'DWD',
        'SPS',
        'DWD'
    ], {
        W: 'cosmiccore:waxed_leather',
        S: 'gtceu:dreamwood_screw',
        D: 'gtceu:dreamwood_plate',
        P: 'gtceu:elementium_plate'
    })
    //Spawner Claw
    event.remove({ output: 'botania:spawner_claw' })
    event.shaped('botania:spawner_claw', [
        'PBP',
        'RMR',
        'E E'
    ], {
        P: 'gtceu:elementium_plate',
        B: 'minecraft:blaze_powder',
        R: 'gtceu:elementium_rod',
        M: 'botania:manasteel_block',
        E: 'botania:ender_air_bottle'
    })
    //Spark Changer
    event.remove({ output: 'botania:spark_changer' })
    event.shaped('botania:spark_changer', [
        '   ',
        'PLP',
        'LRL'
    ], {
        P: 'gtceu:elementium_plate',
        L: 'gtceu:livingrock_plate',
        R: 'gtceu:redstone_plate',
    })
    //Crafty Crate
    event.remove({ output: 'botania:crafty_crate' })
    event.shaped('botania:crafty_crate', [
        'DCD',
        'STS',
        'DID'
    ], {
        D: 'gtceu:dreamwood_plate',
        T: 'minecraft:crafting_table',
        C: 'gtceu:ev_conveyor_module',
        S: 'gtceu:dreamwood_screw',
        I: '#gtceu:circuits/hv'
    })
    //Skydirt Rod
    event.remove({ output: 'botania:skydirt_rod' })
    event.shaped('botania:skydirt_rod', [
        ' EA',
        ' DE',
        'P  '
    ], {
        D: 'botania:dirt_rod',
        A: 'botania:rune_air',
        E: 'gtceu:elementium_screw',
        P: 'botania:pixie_dust'
    })
    //Rod of the Terra Firma
    event.remove({ output: 'botania:terraform_rod' })
    event.shaped('botania:terraform_rod', [
        'WCT',
        'ADC',
        'PUS'
    ], {
        D: 'botania:dirt_rod',
        C: 'gtceu:terrasteel_screw',
        T: 'gtceu:terrasteel_plate',
        A: 'botania:rune_autumn',
        W: 'botania:rune_winter',
        S: 'botania:rune_spring',
        U: 'botania:rune_summer',
        P: 'botania:livingwood_twig'
    })
    //Rod of the Bifrost
    event.remove({ output: 'botania:rainbow_rod' })
    event.shaped('botania:rainbow_rod', [
        ' SD',
        'PES',
        'EP '
    ], {
        D: 'botania:dragonstone',
        S: 'gtceu:elementium_screw',
        E: 'gtceu:elementium_rod',
        P: 'botania:pixie_dust'
    })
    //Gravity Rod
    event.remove({ output: 'botania:gravity_rod' })
    event.shaped('botania:gravity_rod', [
        ' MD',
        'SEM',
        'ES '
    ], {
        D: 'botania:dragonstone',
        S: 'gtceu:elementium_screw',
        E: 'botania:dreamwood_twig',
        M: 'gtceu:ev_emitter'
    })
    //Mana Mirror
    event.remove({ output: 'botania:mana_mirror' })
    event.shaped('botania:mana_mirror', [
        ' MD',
        'SET',
        'ES '
    ], {
        D: 'botania:mana_tablet',
        S: 'gtceu:terrasteel_screw',
        E: 'botania:livingwood_twig',
        M: 'botania:mana_pearl',
        T: 'botania:terrasteel_ingot'
    })
    //Extrapolated Bucket
    event.remove({ output: 'botania:open_bucket' })
    event.shaped('botania:open_bucket', [
        '   ',
        'SHS',
        ' S '
    ], {
        S: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    event.recipes.gtceu.bender('gtceu:bender/open_bucket')
        .itemInputs('3x gtceu:elementium_plate')
        .circuit(12)
        .itemOutputs('botania:open_bucket')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(140)
    //Slime In A Bottle
    event.remove({ output: 'botania:slime_bottle' })
    event.shaped('botania:slime_bottle', [
        ' P ',
        'ASA',
        'AAA'
    ], {
        S: 'minecraft:slime_block',
        A: 'botania:elf_glass',
        P: 'gtceu:elementium_plate'
    })
    //Greater Mana Ring
    event.remove({ output: 'botania:mana_ring_greater' })
    event.shaped('botania:mana_ring_greater', [
        ' P ',
        'PRP',
        ' P '
    ], {
        R: 'botania:mana_ring',
        P: 'gtceu:terrasteel_plate'
    })
    //Greater Aura Ring
    event.remove({ output: 'botania:aura_ring_greater' })
    event.shaped('botania:aura_ring_greater', [
        ' P ',
        'PRP',
        ' P '
    ], {
        R: 'botania:aura_ring',
        P: 'gtceu:terrasteel_plate'
    })
    //Greater Magnet Ring
    event.remove({ output: 'botania:magnet_ring_greater' })
    event.shaped('botania:magnet_ring_greater', [
        ' P ',
        'PRP',
        ' P '
    ], {
        R: 'botania:magnet_ring',
        P: 'gtceu:terrasteel_plate'
    })
    //Great Fairy Ring
    event.remove({ output: 'botania:pixie_ring' })
    event.shaped('botania:pixie_ring', [
        'DP ',
        'P P',
        ' P '
    ], {
        D: 'botania:pixie_dust',
        P: 'gtceu:elementium_plate'
    })
    //Ring of Far Reach
    event.remove({ output: 'botania:reach_ring' })
    event.shaped('botania:reach_ring', [
        'RP ',
        'P P',
        ' P '
    ], {
        R: 'botania:rune_pride',
        P: 'gtceu:elementium_plate'
    })
    //Globetrotter's Sash
    event.remove({ output: 'botania:super_travel_belt' })
    event.shaped('botania:super_travel_belt', [
        ' P ',
        'PSP',
        'VP '
    ], {
        S: 'botania:travel_belt',
        P: 'gtceu:elementium_plate',
        V: 'botania:life_essence'
    })
    //Cloak
let cloak = (wool, trimMaterial, itemName) => {
    event.remove({ output: itemName })
    event.shaped(itemName, [
        'W W',
        'WVW',
        'WTW'
    ], {
        W: wool,
        T: trimMaterial,
        V: 'botania:life_essence'
    })
}
cloak('minecraft:white_wool', 'gtceu:electrum_plate', 'botania:holy_cloak')
cloak('minecraft:black_wool', 'gtceu:red_alloy_plate', 'botania:unholy_cloak')
cloak('minecraft:light_gray_wool', 'gtceu:emerald_plate', 'botania:balance_cloak')
    //Flugel Tiara
    event.remove({ output: 'botania:flight_tiara' })
    event.shaped('botania:flight_tiara', [
        'S S',
        'PVP',
        'WEW'
    ], {
        P: 'gtceu:elementium_plate',
        S: 'gtceu:elementium_screw',
        E: 'botania:ender_air_bottle',
        W: 'botania:rune_air',
        V: 'botania:life_essence'
    })
    //Rod of the Unstable Reservoir
    event.remove({ output: 'botania:missile_rod' })
    event.shaped('botania:missile_rod', [
        'VDD',
        'STD',
        'TSV'
    ], {
        S: 'gtceu:elementium_screw',
        D: 'botania:dragonstone',
        T: 'botania:dreamwood_twig',
        V: 'botania:life_essence'
    })
    //Nimbus Amulet
    event.remove({ output: 'botania:super_cloud_pendant' })
    event.shaped('botania:super_cloud_pendant', [
        'RRR',
        'RVR',
        'GCG'
    ], {
        R: 'gtceu:elementium_rod',
        C: 'botania:cloud_pendant',
        V: 'botania:life_essence',
        G: 'minecraft:ghast_tear'
    })
    //Black Hole Talisman
    event.remove({ output: 'botania:black_hole_talisman' })
    event.shaped('botania:black_hole_talisman', [
        'BVB',
        'BEB',
        'BBB'
    ], {
        B: 'gtceu:elementium_bolt',
        E: 'botania:ender_air_bottle',
        V: 'botania:life_essence'
    })
    //Shard of Laputa
    event.remove({ output: 'botania:astrolabe' })
    event.shaped('botania:astrolabe', [
        ' EV',
        'EPE',
        'VE '
    ], {
        P: 'gtceu:elementium_plate',
        E: 'gtceu:elementium_rod',
        V: 'botania:life_essence'
    })
    //Charm of the Diva
    event.remove({ output: 'botania:diva_charm' })
    event.shaped('botania:diva_charm', [
        'VST',
        'PRS',
        ' PV'
    ], {
        T: 'botania:tiny_planet',
        S: 'gtceu:gold_screw',
        P: 'gtceu:gold_plate',
        R: 'botania:rune_pride',
        V: 'botania:life_essence'
    })
    //Corporea Index
    event.remove({ output: 'botania:corporea_index' })
    event.shaped('botania:corporea_index', [
        'EPE',
        'PCP',
        'DPD'
    ], {
        T: 'botania:corporea_spark',
        P: 'gtceu:glass_plate',
        E: 'botania:ender_air_bottle',
        V: 'botania:dragonstone'
    })
    //Mana Infusion Recipes
    //Dumping this example here for mana infusions, took me a while to figure it out. Will do the same for all recipe types.
    //event.recipes.botania.mana_infusion('input', 'output', 'mana', 'catalyst')
    event.remove({ id: 'botania:mana_infusion/manasteel' })
    event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:blue_alloy_ingot', 4000)
    //Commented this out because I may be doing something with SS in MV and this may clash w/ it
    // event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:stainless_steel_ingot', 1000)
    event.recipes.botania.mana_infusion('botania:blacker_lotus', 'minecraft:wither_rose', 100000)

    event.remove({ id: 'botania:mana_infusion/mana_diamond' })
    event.recipes.botania.mana_infusion('botania:mana_diamond', 'gtceu:flawless_diamond_gem', 10000)

    event.remove({ output: 'botania:mana_powder' })
    event.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:electrotine_dust', 500)

    //Pure Daisy Recipes
    //event.recipes.botania.pure_daisy('output', 'input', time)

    //Petal Apothecary Recipes
    //event.recipes.botania.petal_apothecary('input', ['input1'])

    //Runic Altar Recipes
    //event.recipes.botania.runic_altar('output', ['input1'], mana)

    //Terrasteel
    event.remove({ output: 'botania:terrasteel_ingot' })
    //event.recipes.botania.terra_plate('botania:terrasteel_ingot', ['input1'], 100000)

    //Elven Portal
    //event.recipes.botania.elven_trade(['output1'], ['input1'])

    event.recipes.gtceu.mana_fluidizer('gtceu:mana_to_mana_fluid')
        .itemInputs('botania:blacker_lotus')
        .itemOutputs('minecraft:wither_rose')
        .outputFluids(Fluid.of('gtceu:potent_mana', 10000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.mana_fluidizer('gtceu:mana_fluid_to_mana_charge')
        .itemOutputs('botania:blacker_lotus')
        .itemInputs('minecraft:wither_rose')
        .inputFluids(Fluid.of('gtceu:potent_mana', 10000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    //ManaSteel Ingots
    event.recipes.gtceu.mana_fluidizer('gtceu:mana_steel_ingot')
        .itemInputs('gtceu:stainless_steel_ingot')
        .itemOutputs('botania:manasteel_ingot')
        .inputFluids(Fluid.of('gtceu:potent_mana', 250))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    //Mana Pearl
    event.recipes.gtceu.mana_fluidizer('gtceu:mana_pearl')
        .itemInputs('minecraft:ender_pearl')
        .itemOutputs('botania:mana_pearl')
        .inputFluids(Fluid.of('gtceu:potent_mana', 500))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    //Mana Diamond
    event.recipes.gtceu.mana_fluidizer('gtceu:mana_diamond')
        .itemInputs('gtceu:flawless_diamond_gem')
        .itemOutputs('botania:mana_diamond')
        .inputFluids(Fluid.of('gtceu:potent_mana', 1000))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.mana_fluidizer('gtceu:mana_powder')
        .itemInputs('gtceu:electrotine_dust')
        .itemOutputs('botania:mana_powder')
        .inputFluids(Fluid.of('gtceu:potent_mana', 50))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);


})

