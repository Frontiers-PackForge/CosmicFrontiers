
ServerEvents.tags('item', event => {
  console.log('[10] - [3] - TAG-WATCHER') // i still dont know how the numbering for the tag watcher stuff works :caught:

  event.add('create:stone_types/tuff', /trials:tuff_(.*)/)
  event.add('create:stone_types/tuff', /trials:polished_tuff_(.*)/)
  event.add('create:stone_types/tuff', 'trials:chiseled_tuff')
  event.add('create:stone_types/tuff', 'trials:chiseled_tuff_bricks')
})
ServerEvents.recipes(event => {
    new copper('trials', 'chiseled_copper', event).all();
    new copper('trials', 'chiseled_copper_exposed', event).all();
    new copper('trials', 'chiseled_copper_weathered', event).all();
    new copper('trials', 'chiseled_copper_oxidized', event).all();
    new copper('trials', 'copper_grate', event).all();
    new copper('trials', 'copper_grate_exposed', event).all();
    new copper('trials', 'copper_grate_weathered', event).all();
    new copper('trials', 'copper_grate_oxidized', event).all();

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
                .notConsumable(`gtceu:ingot_casting_mold`)
                .itemOutputs(`2x minecraft:copper_ingot`)
                .duration(126)
                .EUt(7);
        }
        //waxed copper block -> copper ingot
        if (Item.exists(`${modID}:waxed_${copperType}`)) {
            event.recipes.gtceu.alloy_smelter(`cosmicfrontiers:${modID}/waxed_${copperType}_alloy_smelter`)
                .itemInputs(`${modID}:waxed_${copperType}`)
                .notConsumable(`gtceu:ingot_casting_mold`)
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
        //copper block -> liquid copper melting
        if (Item.exists(`${modID}:${copperType}`)) {
            event.custom({
                type: 'tconstruct:melting',
                ingredient: [
                    { item: `${modID}:${copperType}`},
                ],
                result: {
                    fluid: 'gtceu:copper',
                    amount: 288
                },
                temperature: 500,
                time: 80
            }).id(`cosmicfrontiers:tconstruct/melting/${modID}/${copperType}`)
        }
        //waxed copper block -> liquid copper melting
        if (Item.exists(`${modID}:waxed_${copperType}`)) {
            event.custom({
                type: 'tconstruct:melting',
                ingredient: [
                    { item: `${modID}:waxed_${copperType}`},
                ],
                result: {
                    fluid: 'gtceu:copper',
                    amount: 288
                },
                temperature: 500,
                time: 80
            }).id(`cosmicfrontiers:tconstruct/melting/${modID}/waxed_${copperType}`)
        }
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
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:trials/chiseled_copper_exposed_chemical_bath`)
                .itemInputs(`trials:chiseled_copper`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`trials:chiseled_copper_exposed`)
                .duration(10)
                .EUt(7);
        //chiseled copper exposed -> chiseled copper weathered
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:trials/chiseled_copper_weathered_chemical_bath`)
                .itemInputs(`trials:chiseled_copper_exposed`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`trials:chiseled_copper_weathered`)
                .duration(10)
                .EUt(7);
        //chiseled copper weathered -> chiseled copper oxidized
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:trials/chiseled_copper_oxidized_chemical_bath`)
                .itemInputs(`trials:chiseled_copper_weathered`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`trials:chiseled_copper_oxidized`)
                .duration(10)
                .EUt(7);
        //grate oxidizing
        //copper grate -> copper grate exposed
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:trials/copper_grate_exposed_chemical_bath`)
                .itemInputs(`trials:copper_grate`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`trials:copper_grate_exposed`)
                .duration(10)
                .EUt(7);
        //copper grate exposed -> copper grate weathered
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:trials/copper_grate_weathered_chemical_bath`)
                .itemInputs(`trials:copper_grate_exposed`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`trials:copper_grate_weathered`)
                .duration(10)
                .EUt(7);
        //copper grate weathered -> copper grate oxidized
            event.recipes.gtceu.chemical_bath(`cosmicfrontiers:trials/copper_grate_oxidized_chemical_bath`)
                .itemInputs(`trials:copper_grate_weathered`)
                .inputFluids(`gtceu:oxygen 100`)
                .itemOutputs(`trials:copper_grate_oxidized`)
                .duration(10)
                .EUt(7);
})
