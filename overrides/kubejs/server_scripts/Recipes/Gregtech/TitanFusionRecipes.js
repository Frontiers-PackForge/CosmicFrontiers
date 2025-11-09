ServerEvents.recipes(event => {

    event.recipes.gtceu.titan_fusion('frontiers:new_duranium_and_tritanium_titan')
        .inputFluids('gtceu:titanium 432') //3
        .inputFluids('gtceu:gallium 576') //4 -> Two Ingots of Duranium and 1 of Tritanium
        .inputFluids('gtceu:radon 4500') //4.5
        .outputFluids('gtceu:duranium 288') //2
        .outputFluids('gtceu:tritanium 144') //1
        .duration(380)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.titan_fusion('frontiers:americium_titan')
        .inputFluids('gtceu:uranium 576') //4
        .inputFluids('gtceu:cobalt 576') //4 
        .inputFluids('gtceu:radon 144')
        .outputFluids('gtceu:americium 576') //4
        .outputFluids('gtceu:tennessine 576') //4
        .duration(270)
        .EUt(GTValues.VA[GTValues.ZPM]);

    event.recipes.gtceu.titan_fusion('chlorine_plasma_titan')
        .inputFluids('gtceu:hydrogen 1000')
        .inputFluids('gtceu:neon 1000')
        .outputFluids('gtceu:chlorine_plasma 1000')
        .duration(20)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.titan_fusion('neutronite_molten_titan')
        .inputFluids('gtceu:americium 576')
        .inputFluids('gtceu:europium 576')
        .inputFluids('gtceu:radon 4000')
        .outputFluids('cosmiccore:neutronite 576')
        .outputFluids('gtceu:resh_neutron_plasma 250')
        .outputFluids('gtceu:alef_neutron_plasma 500')
        .outputFluids('gtceu:pey_neutron_plasma 250')
        .outputFluids('gtceu:ayin_neutron_plasma 500')
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV]);

    event.recipes.gtceu.titan_fusion('tau_plasma_titan')
        .inputFluids('gtceu:tau_oil 100') //1
        .inputFluids('gtceu:enriched_naquadah 144') //1
        .outputFluids('gtceu:tau_plasma 250') //0.5
        .duration(230)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.titan_fusion('europium_titan')
        .inputFluids('gtceu:neodymium 144')
        .inputFluids('gtceu:hydrogen 3375')
        .outputFluids('gtceu:europium 144')
        .duration(890)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.titan_fusion('fermium_titan')
        .inputFluids('gtceu:neptunium 144')
        .inputFluids('gtceu:xenon 3375')
        .outputFluids('gtceu:fermium 144')
        .duration(3600)
        .EUt(GTValues.VA[GTValues.UV]);
})