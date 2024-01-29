//Removing Byproducts from particular ore steps
ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore' })
    event.recipes.gtceu.chemical_bath('gtceu:chemical_bath/bathe_nickel_crushed_ore_to_purified_ore')
        .itemInputs('gtceu:crushed_nickel_ore')
        .inputFluids('gtceu:mercury 100')
        .itemOutputs('gtceu:purified_nickel_ore')
        .chancedOutput(Item.of('gtceu:platinum_metallic_dust', 1), 5000, 500)
        .chancedOutput(Item.of('gtceu:stone_dust', 1), 4000, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
    event.remove({ id: 'gtceu:macerator/macerate_nickel_refined_ore_to_dust' })
    event.recipes.gtceu.macerator('gtceu:macerator/macerate_nickel_refined_ore_to_dust')
        .itemInputs('gtceu:refined_nickel_ore')
        .itemOutputs('gtceu:nickel_dust')
        .chancedOutput(Item.of('gtceu:platinum_metallic_dust', 1), 1500, 500)
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV]);








        
})