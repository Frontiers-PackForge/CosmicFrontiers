//Have to remove the wood tag from livingwood if i want to add specific gt recipes :(
ServerEvents.tags('item', event => {
    //event.remove('minecraft:logs', 'botania:livingwood_log')
    //event.remove('minecraft:planks', 'botania:livingwood_planks')          
})

//Adding recipes for registered materials
ServerEvents.recipes(e => {
    //Livingrock
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate_water')
        .itemInputs('botania:livingrock')
        .inputFluids('minecraft:water 17')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(368)
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate_distilled_water')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(276)
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingrock_block_to_plate')
        .itemInputs('botania:livingrock')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('9x gtceu:livingrock_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(184)

    //Livingwood
    //Bolt
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(140)
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt_distilled_water')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100)
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_twig_to_bolt')
        .itemInputs('botania:livingwood_twig')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_bolt')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(60)
    //Screw
    e.recipes.gtceu.lathe('gtceu:lathe/lathe_livingwood_bolt_to_screw')
        .itemInputs('gtceu:livingwood_bolt')
        .itemOutputs('gtceu:livingwood_screw')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(12)
    //Plate
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_water')
        .itemInputs('botania:livingwood')
        .inputFluids('minecraft:water 17')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(280)
    e.recipes.gtceu.cutter('gtceu:cutter/cut_livingwood_to_plate_distilled_water')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:distilled_water 12')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
    e.recipes.gtceu.cutter('gtceu:cut_livingwood_to_plate')
        .itemInputs('botania:livingwood')
        .inputFluids('gtceu:lubricant 4')
        .itemOutputs('4x gtceu:livingwood_plate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120)



    //Actually starting botania recipes
    e.remove({ id: 'gtceu:wiremill/mill_terrasteel_wire' })
    e.remove({ id: 'gtceu:extruder/extrude_terrasteel_wire' })
    //Petal Apothecary
    e.remove({ output: 'botania:apothecary_default' })
    e.shaped('botania:apothecary_default', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:cobblestone'
    })
    //Petal Apothecary Deepslate
    e.remove({ output: 'botania:apothecary_deepslate' })
    e.shaped('botania:apothecary_deepslate', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:cobbled_deepslate'
    })
    //Petal Apothecary Mossy, leaving the rest as vanilla recipes. They are gated deep into botania anyways.
    e.remove({ output: 'botania:apothecary_mossy' })
    e.shaped('botania:apothecary_mossy', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:mossy_cobblestone'
    })
    //Mana Spreader
    e.remove({ output: 'botania:mana_spreader' })
    e.shaped('botania:mana_spreader', [
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
    e.remove({ output: 'botania:diluted_pool' })
    e.shaped('botania:diluted_pool', [
        'PMP',
        'SSS',
        '   '
    ], {
        P: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        S: 'botania:livingrock_slab'
    })
    //Mana Pool. Made it possible after diluted pool, but can be changed.
    e.remove({ output: 'botania:mana_pool' })
    e.shaped('botania:mana_pool', [
        'PDP',
        'LLL',
        '   '
    ], {
        P: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond',
        L: 'botania:livingrock'
    })
    //Alchemy Catalyst
    e.remove({ output: 'botania:alchemy_catalyst' })
    e.shaped('botania:alchemy_catalyst', [
        'LCL',
        'BPB',
        'LGL'
    ], {
        B: 'minecraft:brewing_stand',
        L: 'gtceu:livingrock_plate',
        G: 'gtceu:rose_gold_plate',
        P: 'botania:mana_pearl',
        C: '#forge:circuits/mv'
    })
    //Runic Altar
    e.remove({ output: 'botania:runic_altar' })
    e.shaped('botania:runic_altar', [
        'PMP',
        'LDL',
        'LCL'
    ], {
        C: '#forge:circuits/mv',
        P: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond',
        M: 'gtceu:mana_steel_plate',
        L: 'botania:livingrock'
    })
    //Botanical Brewery
    e.remove({ output: 'botania:brewery' })
    e.shaped('botania:brewery', [
        'PBP',
        'CRC',
        'LML'
    ], {
        P: 'gtceu:livingrock_plate',
        B: 'minecraft:brewing_stand',
        L: 'botania:livingrock',
        R: 'botania:rune_mana',
        M: 'botania:manasteel_block',
        C: '#forge:circuits/lv'
    })
    //Mana Pylon
    e.remove({ output: 'botania:mana_pylon' })
    e.shaped('botania:mana_pylon', [
        ' G ',
        'MDM',
        ' G '
    ], {
        G: 'gtceu:rose_gold_plate',
        M: 'gtceu:mana_steel_plate',
        D: 'botania:mana_diamond'
    })
    //Mana Distributor
    e.remove({ output: 'botania:mana_distributor' })
    e.shaped('botania:mana_distributor', [
        'LPL',
        'M M',
        'LPL'
    ], {
        L: 'botania:livingrock',
        P: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate'
    })
    //Mana Void
    e.remove({ output: 'botania:mana_void' })
    e.shaped('botania:mana_void', [
        'LPL',
        'M M',
        'LPL'
    ], {
        L: 'botania:livingrock',
        P: 'gtceu:livingrock_plate',
        M: 'minecraft:obsidian'
    })
    //Mana Detector
    e.remove({ output: 'botania:mana_detector' })
    e.shaped('botania:mana_detector', [
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
    e.remove({ output: 'botania:turntable' })
    e.shaped('botania:turntable', [
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
    e.remove({ output: 'botania:tiny_planet' })
    e.shaped('botania:tiny_planet', [
        'LSL',
        'SPS',
        'LSL'
    ], {
        L: 'gtceu:livingrock_plate',
        S: 'gtceu:stone_plate',
        P: 'botania:mana_pearl'
    })
    //Tiny Planet Block
    e.remove({ output: 'botania:tiny_planet_block' })
    e.shaped('botania:tiny_planet_block', [
        'SSS',
        'SPS',
        'SSS'
    ], {
        S: 'gtceu:stone_plate',
        P: 'botania:tiny_planet'
    })
    //Drum of the Wild
    e.remove({ output: 'botania:drum_wild' })
    e.shaped('botania:drum_wild', [
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
    e.remove({ output: 'botania:drum_canopy' })
    e.shaped('botania:drum_canopy', [
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
    e.remove({ output: 'botania:mana_fluxfield' })
    e.shaped('botania:mana_fluxfield', [
        'LRL',
        'RMR',
        'LRL'
    ], {
        L: 'gtceu:livingrock_plate',
        R: 'gtceu:red_alloy_plate',
        M: 'gtceu:mana_steel_quadruple_wire'
    })
    //Mana Pump
    e.remove({ output: 'botania:pump' })
    e.shaped('botania:pump', [
        'LLL',
        'MPM',
        'LLL'
    ], {
        L: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        P: 'gtceu:mv_electric_pump'
    })
    //Manatide Bellows
    e.remove({ output: 'botania:bellows' })
    e.shaped('botania:bellows', [
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
    e.remove({ output: 'botania:open_crate' })
    e.shaped('botania:open_crate', [
        'LLL',
        'LSL',
        'LDL'
    ], {
        S: 'gtceu:livingwood_screw',
        D: '#forge:tools/screwdrivers',
        L: 'botania:livingwood_planks'
    })
    //Eye of the Ancients
    e.remove({ output: 'botania:forest_eye' })
    e.shaped('botania:forest_eye', [
        'MLM',
        'LPL',
        'MLM'
    ], {
        L: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        P: 'minecraft:ender_eye'
    })
    //Ender Overseer
    e.remove({ output: 'botania:ender_eye_block' })
    e.shaped('botania:ender_eye_block', [
        'RER',
        'EOE',
        'RER'
    ], {
        R: 'gtceu:red_alloy_plate',
        E: 'minecraft:ender_eye',
        O: 'minecraft:obsidian'
    })
    //Hovering Hourglass
    e.remove({ output: 'botania:hourglass' })
    e.shaped('botania:hourglass', [
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
    e.remove({ output: 'botania:avatar' })
    e.shaped('botania:avatar', [
        ' L ',
        'LCL',
        'LDL'
    ], {
        L: '#botania:livingwood_logs',
        C: '#forge:circuits/lv',
        D: 'botania:mana_diamond'
    })
    //Rod of the Lands
    e.remove({ output: 'botania:dirt_rod' })
    e.shaped('botania:dirt_rod', [
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
    e.remove({ output: 'botania:water_rod' })
    e.shaped('botania:water_rod', [
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
    e.remove({ output: 'botania:tornado_rod' })
    e.shaped('botania:tornado_rod', [
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
    e.remove({ output: 'botania:fire_rod' })
    e.shaped('botania:fire_rod', [
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
    e.remove({ output: 'botania:cobble_rod' })
    e.shaped('botania:cobble_rod', [
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
    e.remove({ output: 'botania:divining_rod' })
    e.shaped('botania:divining_rod', [
        ' TC',
        'STT',
        'TS '
    ], {
        T: 'botania:livingwood_twig',
        S: 'gtceu:aluminium_screw',
        C: 'botania:mana_diamond',
    })
    //Rod of the Molten Core
    e.remove({ output: 'botania:smelt_rod' })
    e.shaped('botania:smelt_rod', [
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
    e.remove({ output: 'botania:exchange_rod' })
    e.shaped('botania:exchange_rod', [
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
    e.remove({ output: 'botania:manasteel_helmet' })
    e.shaped('botania:manasteel_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Manasteel Chestplate
    e.remove({ output: 'botania:manasteel_chestplate' })
    e.shaped('botania:manasteel_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Manasteel Leggings
    e.remove({ output: 'botania:manasteel_leggings' })
    e.shaped('botania:manasteel_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Manasteel Boots
    e.remove({ output: 'botania:manasteel_boots' })
    e.shaped('botania:manasteel_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Helmet
    e.remove({ output: 'botania:elementium_helmet' })
    e.shaped('botania:elementium_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Chestplate
    e.remove({ output: 'botania:elementium_chestplate' })
    e.shaped('botania:elementium_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Leggings
    e.remove({ output: 'botania:elementium_leggings' })
    e.shaped('botania:elementium_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Elementium Boots
    e.remove({ output: 'botania:elementium_boots' })
    e.shaped('botania:elementium_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers'
    })
    //Terrasteel Helmet
    e.remove({ output: 'botania:terrasteel_helmet' })
    e.shaped('botania:terrasteel_helmet', [
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
    e.remove({ output: 'botania:terrasteel_chestplate' })
    e.shaped('botania:terrasteel_chestplate', [
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
    e.remove({ output: 'botania:terrasteel_leggings' })
    e.shaped('botania:terrasteel_leggings', [
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
    e.remove({ output: 'botania:terrasteel_boots' })
    e.shaped('botania:terrasteel_boots', [
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
    e.remove({ output: 'botania:manasteel_pick' })
    e.shaped('botania:manasteel_pick', [
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
    e.remove({ output: 'botania:manasteel_shovel' })
    e.shaped('botania:manasteel_shovel', [
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
    e.remove({ output: 'botania:manasteel_axe' })
    e.shaped('botania:manasteel_axe', [
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
    e.remove({ output: 'botania:manasteel_hoe' })
    e.shaped('botania:manasteel_hoe', [
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
    e.remove({ output: 'botania:manasteel_sword' })
    e.shaped('botania:manasteel_sword', [
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
    e.remove({ output: 'botania:manasteel_shears' })
    e.shaped('botania:manasteel_shears', [
        'HM ',
        'MF ',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Elementium Pickaxe
    e.remove({ output: 'botania:elementium_pickaxe' })
    e.shaped('botania:elementium_pickaxe', [
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
    e.remove({ output: 'botania:elementium_shovel' })
    e.shaped('botania:elementium_shovel', [
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
    e.remove({ output: 'botania:elementium_axe' })
    e.shaped('botania:elementium_axe', [
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
    e.remove({ output: 'botania:elementium_hoe' })
    e.shaped('botania:elementium_hoe', [
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
    e.remove({ output: 'botania:elementium_sword' })
    e.shaped('botania:elementium_sword', [
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
    e.remove({ output: 'botania:elementium_shears' })
    e.shaped('botania:elementium_shears', [
        'HM ',
        'MF ',
        '   '
    ], {
        M: 'gtceu:elementium_plate',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })
    //Terra Shatterer
    e.remove({ output: 'botania:terra_pick' })
    e.shaped('botania:terra_pick', [
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
    e.remove({ output: 'botania:terra_sword' })
    e.shaped('botania:terra_sword', [
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
    e.remove({ output: 'botania:terra_axe' })
    e.shaped('botania:terra_axe', [
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
    e.remove({ output: 'botania:thorn_chakram' })
    e.shaped('botania:thorn_chakram', [
        'VVV',
        'VTV',
        'VVV'
    ], {
        V: 'minecraft:vine',
        T: 'gtceu:terrasteel_plate'
    })
    //Thundercaller
    e.remove({ output: 'botania:thunder_sword' })
    e.shaped('botania:thunder_sword', [
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
    e.remove({ output: 'botania:star_sword' })
    e.shaped('botania:star_sword', [
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
    e.remove({ output: 'botania:manaweave_helmet' })
    e.shaped('botania:manaweave_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Manaweave Robe Top
    e.remove({ output: 'botania:manaweave_chestplate' })
    e.shaped('botania:manaweave_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Manaweave Robe Bottom
    e.remove({ output: 'botania:manaweave_leggings' })
    e.shaped('botania:manaweave_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Manaweave Boots
    e.remove({ output: 'botania:manaweave_boots' })
    e.shaped('botania:manaweave_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })
    //Soulscribe
    e.remove({ output: 'botania:ender_dagger' })
    e.shaped('botania:ender_dagger', [
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
    e.remove({ output: 'botania:livingwood_bow' })
    e.shaped('botania:livingwood_bow', [
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
    e.remove({ output: 'botania:crystal_bow' })
    e.shaped('botania:crystal_bow', [
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
    e.remove({ output: 'botania:mana_tablet' })
    e.shaped('botania:mana_tablet', [
        'LLL',
        'LDL',
        'LLL'
    ], {
        L: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond'
    })
    //Hand of Ender
    e.remove({ output: 'botania:ender_hand' })
    e.shaped('botania:ender_hand', [
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
    e.remove({ output: 'botania:crafting_halo' })
    e.shaped('botania:crafting_halo', [
        ' P ',
        'MCM',
        ' M '
    ], {
        P: 'botania:mana_pearl',
        M: 'gtceu:mana_steel_plate',
        C: 'minecraft:crafting_table'
    })
    //Worldshaper's Sextant
    e.remove({ output: 'botania:sextant' })
    e.shaped('botania:sextant', [
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
    e.remove({ output: 'botania:bauble_box' })
    e.shaped('botania:bauble_box', [
        ' M ',
        'MCR',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        R: 'gtceu:rose_gold_ring',
        C: '#forge:chests'
    })
    //Band of Mana
    e.remove({ output: 'botania:mana_ring' })
    e.shaped('botania:mana_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:mana_tablet'
    })
    //Band of Aura
    e.remove({ output: 'botania:aura_ring' })
    e.shaped('botania:aura_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:rune_mana'
    })
    //Ring of Magnetization
    e.remove({ output: 'botania:magnet_ring' })
    e.shaped('botania:magnet_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:lens_magnet'
    })
    //Ring of Correction
    e.remove({ output: 'botania:swap_ring' })
    e.shaped('botania:swap_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'minecraft:clay'
    })
    //Ring of Dextrous Motion
    e.remove({ output: 'botania:dodge_ring' })
    e.shaped('botania:dodge_ring', [
        'IM ',
        'M M',
        ' MO'
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'minecraft:emerald',
        O: 'botania:rune_air'
    })
    //Ring of the Mantle
    e.remove({ output: 'botania:mining_ring' })
    e.shaped('botania:mining_ring', [
        'IMO',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        O: 'minecraft:golden_pickaxe',
        I: 'botania:rune_earth'
    })
    //Ring of Chordata
    e.remove({ output: 'botania:water_ring' })
    e.shaped('botania:water_ring', [
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
    e.remove({ output: 'botania:lens_normal' })
    e.shaped('botania:lens_normal', [
        ' M ',
        'MLM',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        L: 'gtceu:glass_lens'
    })
    //Bore Lens
    e.remove({ output: 'botania:lens_mine' })
    e.shaped('botania:lens_mine', [
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
    e.remove({ output: 'botania:lens_magnet' })
    e.shaped('botania:lens_magnet', [
        'LSI',
        '   ',
        '   '
    ], {
        L: 'botania:lens_normal',
        S: 'gtceu:magnetic_steel_rod',
        I: 'gtceu:magnetic_iron_rod'
    })
    //Flash Lens
    e.remove({ output: 'botania:lens_light' })
    e.shaped('botania:lens_light', [
        'FGF',
        'GLG',
        'FGF'
    ], {
        F: 'minecraft:fire_charge',
        G: 'gtceu:glowstone_plate',
        L: 'botania:lens_normal'
    })
    //Sojourner's Sash
    e.remove({ output: 'botania:travel_belt' })
    e.shaped('botania:travel_belt', [
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
    e.remove({ output: 'botania:knockback_belt' })
    e.shaped('botania:knockback_belt', [
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
    e.remove({ output: 'botania:ice_pendant' })
    e.shaped('botania:ice_pendant', [
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
    e.remove({ output: 'botania:lava_pendant' })
    e.shaped('botania:lava_pendant', [
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
    e.remove({ output: 'botania:cloud_pendant' })
    e.shaped('botania:cloud_pendant', [
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
    e.remove({ output: 'botania:itemfinder' })
    e.shaped('botania:itemfinder', [
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
    e.remove({ output: 'botania:spark' })
    e.shaped('botania:spark', [
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
    e.remove({ output: 'botania:vial' })
    e.recipes.gtceu.alloy_smelter('gtceu:alloy_smelter/manavial')
        .itemInputs('botania:mana_glass')
        .notConsumable('gtceu:bottle_casting_mold')
        .itemOutputs('botania:vial')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LV])
    e.recipes.gtceu.extruder('gtceu:extruder/manavial')
        .itemInputs('botania:mana_glass')
        .notConsumable('gtceu:bottle_extruder_mold')
        .itemOutputs('botania:vial')
        .duration(32)
        .EUt(GTValues.VA[GTValues.LV])
    //Alfglass Flask
    e.remove({ output: 'botania:flask' })
    e.recipes.gtceu.alloy_smelter('gtceu:extruder/alfflask')
        .itemInputs('botania:elf_glass')
        .notConsumable('gtceu:bottle_casting_mold')
        .itemOutputs('botania:flask')
        .duration(64)
        .EUt(GTValues.VA[GTValues.LV])
    e.recipes.gtceu.extruder('gtceu:extruder/alfflask')
        .itemInputs('botania:elf_glass')
        .notConsumable('gtceu:bottle_extruder_mold')
        .itemOutputs('botania:flask')
        .duration(32)
        .EUt(GTValues.VA[GTValues.LV])

    //Mana Infusion Recipes
    //Dumping this example here for mana infusions, took me a while to figure it out. Will do the same for all recipe types.
    //e.recipes.botania.mana_infusion('input', 'output', 'mana', 'catalyst')
    e.remove({ id: 'botania:mana_infusion/manasteel' })
    e.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:blue_alloy_ingot', 4000)
    //Commented this out because I may be doing something with SS in MV and this may clash w/ it
    // e.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:stainless_steel_ingot', 1000)
    e.recipes.botania.mana_infusion('botania:blacker_lotus', 'minecraft:wither_rose', 100000)

    e.remove({ id: 'botania:mana_infusion/mana_diamond' })
    e.recipes.botania.mana_infusion('botania:mana_diamond', 'gtceu:flawless_diamond_gem', 10000)

    e.remove({ output: 'botania:mana_powder' })
    e.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:electrotine_dust', 500)

    //Pure Daisy Recipes
    //e.recipes.botania.pure_daisy('output', 'input', time)

    //Petal Apothecary Recipes
    //e.recipes.botania.petal_apothecary('input', ['input1'])

    //Runic Altar Recipes
    //e.recipes.botania.runic_altar('output', ['input1'], mana)

    //Terrasteel
    e.remove({ output: 'botania:terrasteel_ingot' })
    //e.recipes.botania.terra_plate('botania:terrasteel_ingot', ['input1'], 100000)

    //Elven Portal
    //e.recipes.botania.elven_trade(['output1'], ['input1'])

    e.recipes.gtceu.mana_fluidizer('gtceu:mana_to_mana_fluid')
        .itemInputs('botania:blacker_lotus')
        .itemOutputs('minecraft:wither_rose')
        .outputFluids(Fluid.of('gtceu:potent_mana', 10000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    e.recipes.gtceu.mana_fluidizer('gtceu:mana_fluid_to_mana_charge')
        .itemOutputs('botania:blacker_lotus')
        .itemInputs('minecraft:wither_rose')
        .inputFluids(Fluid.of('gtceu:potent_mana', 10000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    //ManaSteel Ingots
    e.recipes.gtceu.mana_fluidizer('gtceu:mana_steel_ingot')
        .itemInputs('gtceu:stainless_steel_ingot')
        .itemOutputs('botania:manasteel_ingot')
        .inputFluids(Fluid.of('gtceu:potent_mana', 250))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    //Mana Pearl
    e.recipes.gtceu.mana_fluidizer('gtceu:mana_pearl')
        .itemInputs('minecraft:ender_pearl')
        .itemOutputs('botania:mana_pearl')
        .inputFluids(Fluid.of('gtceu:potent_mana', 500))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    //Mana Diamond
    e.recipes.gtceu.mana_fluidizer('gtceu:mana_diamond')
        .itemInputs('gtceu:flawless_diamond_gem')
        .itemOutputs('botania:mana_diamond')
        .inputFluids(Fluid.of('gtceu:potent_mana', 1000))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    e.recipes.gtceu.mana_fluidizer('gtceu:mana_powder')
        .itemInputs('gtceu:electrotine_dust')
        .itemOutputs('botania:mana_powder')
        .inputFluids(Fluid.of('gtceu:potent_mana', 50))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    

})

