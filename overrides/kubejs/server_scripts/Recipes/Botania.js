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
    e.remove({output:'botania:apothecary_default'})
    e.shaped('botania:apothecary_default', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:cobblestone'
    })

    e.remove({output:'botania:apothecary_deepslate'})
    e.shaped('botania:apothecary_deepslate', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:cobbled_deepslate'
    })

    e.remove({output:'botania:apothecary_mossy'})
    e.shaped('botania:apothecary_mossy', [
        'SPS',
        ' C ',
        'CCC'
    ], {
        S: 'gtceu:stone_plate',
        P: 'gtceu:mana_steel_plate',
        C: 'minecraft:mossy_cobblestone'
    })
    
    e.remove({output:'botania:mana_spreader'})
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

    e.remove({output:'botania:diluted_pool'})
    e.shaped('botania:diluted_pool',[
        'PMP',
        'SSS',
        '   '
    ], {
        P: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        S: 'botania:livingrock_slab'
    })

    e.remove({output:'botania:mana_pool'})
    e.shaped('botania:mana_pool', [
        'PDP',
        'LLL',
        '   '
    ], {
        P: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond',
        L: 'botania:livingrock'
    })

    e.remove({output:'botania:alchemy_catalyst'})
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

    e.remove({output:'botania:runic_altar'})
    e.shaped('botania:runic_altar',[
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

    e.remove({output:'botania:brewery'})
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

    e.remove({output:'botania:mana_pylon'})
    e.shaped('botania:mana_pylon', [
        ' G ',
        'MDM',
        ' G '
    ], {
        G: 'gtceu:rose_gold_plate',
        M: 'gtceu:mana_steel_plate',
        D: 'botania:mana_diamond'
    })

    e.remove({output:'botania:mana_distributor'})
    e.shaped('botania:mana_distributor', [
        'LPL',
        'M M',
        'LPL'
    ], {
        L: 'botania:livingrock',
        P: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate'
    })

    e.remove({output:'botania:mana_void'})
    e.shaped('botania:mana_void', [
        'LPL',
        'M M',
        'LPL'
    ], {
        L: 'botania:livingrock',
        P: 'gtceu:livingrock_plate',
        M: 'minecraft:obsidian'
    })

    e.remove({output:'botania:mana_detector'})
    e.shaped('botania:mana_detector',[
        'RLR',
        'PTP',
        'RLR'
    ], {
        R: 'gtceu:red_alloy_fine_wire',
        L: 'botania:livingrock',
        T: 'minecraft:target',
        P: 'gtceu:livingrock_plate'
    })

    e.remove({output:'botania:turntable'})
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

    e.remove({output:'botania:tiny_planet'})
    e.shaped('botania:tiny_planet', [
        'LSL',
        'SPS',
        'LSL'
    ], {
        L: 'gtceu:livingrock_plate',
        S: 'gtceu:stone_plate',
        P: 'botania:mana_pearl'
    })

    e.remove({output:'botania:tiny_planet_block'})
    e.shaped('botania:tiny_planet_block', [
        'SSS',
        'SPS',
        'SSS'
    ], {
        S: 'gtceu:stone_plate',
        P: 'botania:tiny_planet'
    })

    e.remove({output:'botania:drum_wild'})
    e.shaped('botania:drum_wild',[
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

    e.remove({output:'botania:drum_canopy'})
    e.shaped('botania:drum_canopy',[
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

    e.remove({output:'botania:mana_fluxfield'})
    e.shaped('botania:mana_fluxfield',[
        'LRL',
        'RMR',
        'LRL'
    ], {
        L: 'gtceu:livingrock_plate',
        R: 'gtceu:red_alloy_plate',
        M: 'gtceu:mana_steel_quadruple_wire'
    })

    e.remove({output:'botania:pump'})
    e.shaped('botania:pump', [
        'LLL',
        'MPM',
        'LLL'
    ], {
        L: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        P: 'gtceu:mv_electric_pump'
    })

    e.remove({output:'botania:bellows'})
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

    e.remove({output:'botania:open_crate'})
    e.shaped('botania:open_crate', [
        'LLL',
        'LSL',
        'LDL'
    ], {
        S: 'gtceu:livingwood_screw',
        D: '#forge:tools/screwdrivers',
        L: 'botania:livingwood_planks'
    })

    e.remove({output:'botania:forest_eye'})
    e.shaped('botania:forest_eye', [
        'MLM',
        'LPL',
        'MLM'
    ], {
        L: 'gtceu:livingrock_plate',
        M: 'gtceu:mana_steel_plate',
        P: 'minecraft:ender_eye'
    })

    e.remove({output:'botania:ender_eye_block'})
    e.shaped('botania:ender_eye_block', [
        'RER',
        'EOE',
        'RER'
    ], {
        R: 'gtceu:red_alloy_plate',
        E: 'minecraft:ender_eye',
        O: 'minecraft:obsidian'
    })

    e.remove({output:'botania:hourglass'})
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

    e.remove({output:'botania:avatar'})
    e.shaped('botania:avatar', [
        ' L ',
        'LCL',
        'LDL'
    ], {
        L: '#botania:livingwood_logs',
        C: '#forge:circuits/lv',
        D: 'botania:mana_diamond'
    })

    e.remove({output:'botania:dirt_rod'})
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

    e.remove({output:'botania:water_rod'})
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

    e.remove({output:'botania:tornado_rod'})
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

    e.remove({output:'botania:fire_rod'})
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

    e.remove({output:'botania:cobble_rod'})
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

    e.remove({output:'botania:divining_rod'})
    e.shaped('botania:divining_rod', [
        ' TC',
        'STT',
        'TS '
    ], {
        T: 'botania:livingwood_twig',
        S: 'gtceu:aluminium_screw',
        C: 'botania:mana_diamond',
    })

    e.remove({output:'botania:smelt_rod'})
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

    e.remove({output:'botania:exchange_rod'})
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
    
    e.remove({output:'botania:manasteel_helmet'})
    e.shaped('botania:manasteel_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })

    e.remove({output:'botania:manasteel_chestplate'})
    e.shaped('botania:manasteel_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })

    e.remove({output:'botania:manasteel_leggings'})
    e.shaped('botania:manasteel_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })

    e.remove({output:'botania:manasteel_boots'})
    e.shaped('botania:manasteel_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers'
    })

    e.remove({output:'botania:manasteel_pick'})
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

    e.remove({output:'botania:manasteel_shovel'})
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

    e.remove({output:'botania:manasteel_axe'})
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

    e.remove({output:'botania:manasteel_hoe'})
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

    e.remove({output:'botania:manasteel_sword'})
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

    e.remove({output:'botania:manasteel_shears'})
    e.shaped('botania:manasteel_shears', [
        'HM ',
        'MF ',
        '   '
    ], {
        M: 'gtceu:mana_steel_plate',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    })

    e.remove({output:'botania:manaweave_helmet'})
    e.shaped('botania:manaweave_helmet', [
        'MMM',
        'MHM',
        '   '
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })

    e.remove({output:'botania:manaweave_chestplate'})
    e.shaped('botania:manaweave_chestplate', [
        'MHM',
        'MMM',
        'MMM'
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })

    e.remove({output:'botania:manaweave_leggings'})
    e.shaped('botania:manaweave_leggings', [
        'MMM',
        'MHM',
        'M M'
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })

    e.remove({output:'botania:manaweave_boots'})
    e.shaped('botania:manaweave_boots', [
        'M M',
        'MHM',
        '   '
    ], {
        M: 'botania:manaweave_cloth',
        H: '#forge:tools/knives'
    })

    e.remove({output:'botania:ender_dagger'})
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

    e.remove({output:'botania:livingwood_bow'})
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

    e.remove({output:'botania:mana_tablet'})
    e.shaped('botania:mana_tablet',[
        'LLL',
        'LDL',
        'LLL'
    ], {
        L: 'gtceu:livingrock_plate',
        D: 'botania:mana_diamond'
    })

    e.remove({output:'botania:ender_hand'})
    e.shaped('botania:ender_hand',[
        'PLO',
        'LCL',
        'OL '
    ], {
        P: 'botania:mana_pearl',
        L: 'cosmiccore:waxed_leather',
        O: 'gtceu:obsidian_plate',
        C: 'minecraft:ender_chest'
    })

    e.remove({output:'botania:crafting_halo'})
    e.shaped('botania:crafting_halo', [
        ' P ',
        'MCM',
        ' M '
    ], {
        P: 'botania:mana_pearl',
        M: 'gtceu:mana_steel_plate',
        C: 'minecraft:crafting_table'
    })

    e.remove({output:'botania:sextant'})
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

    e.remove({output:'botania:bauble_box'})
    e.shaped('botania:bauble_box', [
        ' M ',
        'MCR',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        R: 'gtceu:rose_gold_ring',
        C: '#forge:chests'
    })

    e.remove({output:'botania:mana_ring'})
    e.shaped('botania:mana_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:mana_tablet' 
    })

    e.remove({output:'botania:aura_ring'})
    e.shaped('botania:aura_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:rune_mana' 
    })

    e.remove({output:'botania:magnet_ring'})
    e.shaped('botania:magnet_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'botania:lens_magnet' 
    })

    e.remove({output:'botania:swap_ring'})
    e.shaped('botania:swap_ring', [
        'IM ',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'minecraft:clay' 
    })

    e.remove({output:'botania:dodge_ring'})
    e.shaped('botania:dodge_ring', [
        'IM ',
        'M M',
        ' MO'
    ], {
        M: 'gtceu:mana_steel_plate',
        I: 'minecraft:emerald',
        O: 'botania:rune_air' 
    })

    e.remove({output:'botania:mining_ring'})
    e.shaped('botania:mining_ring', [
        'IMO',
        'M M',
        ' M '
    ], {
        M: 'gtceu:mana_steel_plate',
        O: 'minecraft:golden_pickaxe',
        I: 'botania:rune_earth' 
    })

    e.remove({output:'botania:water_ring'})
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
})

