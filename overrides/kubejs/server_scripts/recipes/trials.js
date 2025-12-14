
ServerEvents.tags('item', event => {
  console.log('[10] - [3] - TAG-WATCHER') // i still dont know how the numbering for the tag watcher stuff works :caught:

  event.add('create:stone_types/tuff', /minecraft:tuff_(.*)/)
  event.add('create:stone_types/tuff', /minecraft:polished_tuff_(.*)/)
  event.add('create:stone_types/tuff', 'minecraft:chiseled_tuff')
  event.add('create:stone_types/tuff', 'minecraft:chiseled_tuff_bricks')
})
ServerEvents.recipes(event => {
    new copper('minecraft', 'chiseled_copper', event).all();
    new copper('minecraft', 'exposed_chiseled_copper', event).all();
    new copper('minecraft', 'weathered_chiseled_copper', event).all();
    new copper('minecraft', 'oxidized_chiseled_copper', event).all();
    new copper('minecraft', 'copper_grate', event).all();
    new copper('minecraft', 'exposed_copper_grate', event).all();
    new copper('minecraft', 'weathered_copper_grate', event).all();
    new copper('minecraft', 'oxidized_copper_grate', event).all();

})
function copper(modID, copper, event) {
    this.modID = modID;
    this.copperType = copper;
    this.event = event;
    return this;
}

copper.prototype = {

    copper: function () {
        const { modID, copperType, event } = this
        //copper block -> copper dust
        if (Item.exists(`${modID}:${copperType}`)) {
            event.recipes.gtceu.macerator(`cosmicfrontiers:${modID}/${copperType}_macerating`)
                .itemInputs(`${modID}:${copperType}`)
                .itemOutputs([`2x gtceu:copper_dust`])
                .duration(126)
                .EUt(2);
        }
        //waxed copper block -> copper dust
        if (Item.exists(`${modID}:waxed_${copperType}`)) {
            event.recipes.gtceu.macerator(`cosmicfrontiers:${modID}/waxed_${copperType}_macerating`)
                .itemInputs(`${modID}:waxed_${copperType}`)
                .itemOutputs([`2x gtceu:copper_dust`])
                .duration(126)
                .EUt(2);
        }
        //copper block -> liquid copper
        if (Item.exists(`${modID}:${copperType}`)) {
            event.recipes.gtceu.extractor(`cosmicfrontiers:${modID}/${copperType}_extracting`)
                .itemInputs(`${modID}:${copperType}`)
                .outputFluids(`gtceu:copper 288`)
                .duration(126)
                .EUt(30);
        }
        //waxed copper block -> liquid copper
        if (Item.exists(`${modID}:waxed_${copperType}`)) {
            event.recipes.gtceu.extractor(`cosmicfrontiers:${modID}/waxed_${copperType}_extracting`)
                .itemInputs(`${modID}:waxed_${copperType}`)
                .outputFluids(`gtceu:copper 288`)
                .duration(126)
                .EUt(30);
        }
        //copper block -> annealed copper ingot
        if (Item.exists(`${modID}:${copperType}`)) {
            event.recipes.gtceu.arc_furnace(`cosmicfrontiers:${modID}/${copperType}_arc_furnace`)
                .itemInputs(`${modID}:${copperType}`)
                .itemOutputs(`2x gtceu:annealed_copper_ingot`)
                .duration(126)
                .EUt(30);
        }
        //waxed copper block -> annealed copper ingot
        if (Item.exists(`${modID}:waxed_${copperType}`)) {
            event.recipes.gtceu.arc_furnace(`cosmicfrontiers:${modID}/waxed_${copperType}_arc_furnace`)
                .itemInputs(`${modID}:waxed_${copperType}`)
                .itemOutputs(`2x gtceu:annealed_copper_ingot`)
                .duration(126)
                .EUt(30);
        }
        //copper block -> copper ingot
        if (Item.exists(`${modID}:${copperType}`)) {
            event.recipes.gtceu.alloy_smelter(`cosmicfrontiers:${modID}/${copperType}_alloy_smelter`)
                .itemInputs(`${modID}:${copperType}`)
                .notConsumableItem(`gtceu:ingot_casting_mold`)
                .itemOutputs(`2x minecraft:copper_ingot`)
                .duration(126)
                .EUt(7);
        }
        //waxed copper block -> copper ingot
        if (Item.exists(`${modID}:waxed_${copperType}`)) {
            event.recipes.gtceu.alloy_smelter(`cosmicfrontiers:${modID}/waxed_${copperType}_alloy_smelter`)
                .itemInputs(`${modID}:waxed_${copperType}`)
                .notConsumableItem(`gtceu:ingot_casting_mold`)
                .itemOutputs(`2x minecraft:copper_ingot`)
                .duration(126)
                .EUt(7);
        }
        //block -> waxed block
        if (Item.exists(`${modID}:${copperType}`)) if (Item.exists(`${modID}:waxed_${copperType}`)) {
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:${modID}/waxed_${copperType}_chemical_bath`)
                .itemInputs(`${modID}:${copperType}`)
                .inputFluids('gtceu:wax 72')
                .itemOutputs(`${modID}:waxed_${copperType}`)
                .duration(10)
                .EUt(7);
        }
    //might not even need this once tcon is updated (if we still end up using it)

    //    //copper block -> liquid copper melting
    //    if (Item.exists(`${modID}:${copperType}`)) {
    //        event.custom({
    //            type: 'tconstruct:melting',
    //            ingredient: [
    //                { item: `${modID}:${copperType}`},
    //            ],
    //            result: {
    //                fluid: 'gtceu:copper',
    //                amount: 288
    //            },
    //            temperature: 500,
    //            time: 80
    //       }).id(`cosmicfrontiers:tconstruct/melting/${modID}/${copperType}`)
    //    }
    //    //waxed copper block -> liquid copper melting
    //    if (Item.exists(`${modID}:waxed_${copperType}`)) {
    //        event.custom({
    //            type: 'tconstruct:melting',
    //            ingredient: [
    //                { item: `${modID}:waxed_${copperType}`},
    //            ],
    //            result: {
    //                fluid: 'gtceu:copper',
    //                amount: 288
    //            },
    //            temperature: 500,
    //            time: 80
    //        }).id(`cosmicfrontiers:tconstruct/melting/${modID}/waxed_${copperType}`)
    //    }

        return this;
    },
    all: function () {
        this.copper()
    }
}
//this was the entire reason i was gonna use the function stuff and... i didnt even use it
ServerEvents.recipes(event => {
        //chiseled oxidizing
        //chiseled copper -> chiseled copper exposed
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:minecraft/exposed_chiseled_copper_chemical_bath`)
                .itemInputs(`minecraft:chiseled_copper`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`minecraft:exposed_chiseled_copper`)
                .duration(10)
                .EUt(7);
        //chiseled copper exposed -> chiseled copper weathered
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:minecraft/weathered_chiseled_copper_chemical_bath`)
                .itemInputs(`minecraft:exposed_chiseled_copper`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`minecraft:weathered_chiseled_copper`)
                .duration(10)
                .EUt(7);
        //chiseled copper weathered -> chiseled copper oxidized
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:minecraft/oxidized_chiseled_copper_chemical_bath`)
                .itemInputs(`minecraft:weathered_chiseled_copper`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`minecraft:oxidized_chiseled_copper`)
                .duration(10)
                .EUt(7);
        //grate oxidizing
        //copper grate -> copper grate exposed
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:minecraft/exposed_copper_grate_chemical_bath`)
                .itemInputs(`minecraft:copper_grate`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`minecraft:exposed_copper_grate`)
                .duration(10)
                .EUt(7);
        //copper grate exposed -> copper grate weathered
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:minecraft/weathered_copper_grate_chemical_bath`)
                .itemInputs(`minecraft:exposed_copper_grate`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`minecraft:weathered_copper_grate`)
                .duration(10)
                .EUt(7);
        //copper grate weathered -> copper grate oxidized
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:minecraft/oxidized_copper_grate_chemical_bath`)
                .itemInputs(`minecraft:weathered_copper_grate`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`minecraft:oxidized_copper_grate`)
                .duration(10)
                .EUt(7);
    //putting this stuff here so its not in a seperate file
    event.remove('minecraft:copper_bulb')
    event.remove('minecraft:wind_charge')
    event.remove('minecraft:mace')

    event.shaped(`3x minecraft:copper_bulb`, [
        ' B ',
        'BRB',
        ' D '
    ], {
        B: `minecraft:copper_block`,
        D: 'gtceu:copper_plate',
        R: `minecraft:blaze_powder`,
    })

    event.recipes.gtceu.assembler(`frontiers:copper_bulb`)
        .itemInputs('3x minecraft:copper_block', 'minecraft:blaze_rod', 'gtceu:copper_plate')
        .itemOutputs('6x minecraft:copper_bulb')
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.chemical_reactor(`frontiers:music_disc_creator`)
        .itemInputs('minecraft:music_disc_creator_music_box')
        .inputFluids('gtceu:oxygen 500')
        .itemOutputs('minecraft:music_disc_creator')
        .duration(220)
        .EUt(GTValues.VA[GTValues.LV]);

    event.shapeless('2x minecraft:wind_charge', 'minecraft:breeze_rod')

    event.recipes.gtceu.macerator(`frontiers:wind_charge`)
        .itemInputs('minecraft:breeze_rod')
        .itemOutputs('4x minecraft:wind_charge')
        .duration(88)
        .EUt(2);

    event.recipes.gtceu.compressor(`frontiers:breeze_rod`)
        .itemInputs('4x minecraft:wind_charge')
        .itemOutputs('minecraft:breeze_rod')
        .duration(200)
        .EUt(2);
    //also will not work till cosmiccore is fixed
    event.recipes.gtceu.dawn_forge('frontiers:mace')
        .itemInputs('minecraft:heavy_core', '2x minecraft:breeze_rod', '16x malum:aerial_spirit', '4x gtceu:obsidian_plate', 'embers:ancient_motive_core')
        .itemOutputs('minecraft:mace')
        .emberInput(500)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.LV]);
})
