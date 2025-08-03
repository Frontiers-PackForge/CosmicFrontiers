ServerEvents.recipes((event) => {

    //The Wafer Masks
    event.recipes.gtceu.aio_lithography_processor('nano_cpu_mask')
        .inputFluids('gtceu:epoxy 1000')
        .itemInputs('2x gtceu:carbon_fiber_mesh')
        .itemOutputs('8x kubejs:nano_cpu_mask')
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.aio_lithography_processor('crystal_cpu_mask')
        .inputFluids('gtceu:epoxy 4000')
        .itemInputs('8x gtceu:polybenzimidazole_plate')
        .itemOutputs('8x cosmiccore:crystal_chiplet_mask')
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.aio_lithography_processor('quantum_cpu_mask')
        .inputFluids('gtceu:epoxy 2000')
        .itemInputs('4x gtceu:carbon_fiber_plate')
        .itemOutputs('12x kubejs:quantum_cpu_mask')
        .duration(100)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    //Nano Deposited Wafers - Add more tiers as they're needed for the phosphor/naq/neutronium
    event.recipes.gtceu.chemical_reactor('mana_deposited_wafer_cr_1')
        .inputFluids('gtceu:potent_mana 1000')
        .itemInputs('gtceu:silicon_wafer')
        .itemOutputs('kubejs:mana_deposited_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('mana_deposited_wafer_cr_2')
        .inputFluids('gtceu:potent_mana 2000')
        .itemInputs('gtceu:phosphorus_wafer')
        .itemOutputs('4x kubejs:mana_deposited_wafer')
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('mana_deposited_wafer_cr_3')
        .inputFluids('gtceu:potent_mana 4000')
        .itemInputs('gtceu:naquadah_wafer')
        .itemOutputs('8x kubejs:mana_deposited_wafer')
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.chemical_reactor('mana_deposited_wafer_cr_4')
        .inputFluids('gtceu:potent_mana 8000')
        .itemInputs('gtceu:neutronium_wafer')
        .itemOutputs('16x kubejs:mana_deposited_wafer')
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);
    //Nano Litho    
    event.recipes.gtceu.aio_lithography_processor('prepared_nano_wafer')
        .inputFluids('gtceu:hydrogensilesquioxane 500')
        .inputFluids('gtceu:nitric_acid 500')
        .itemInputs('kubejs:mana_deposited_wafer')
        .itemInputs('kubejs:nano_cpu_mask')
        .itemOutputs('kubejs:prepared_nano_cpu_wafer')
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.HV]);
    event.remove({ output: 'gtceu:nano_cpu_wafer' })
    event.recipes.gtceu.laser_engraver('nano_cpu_craft')
        .notConsumable('gtceu:mv_emitter')
        .itemInputs('kubejs:prepared_nano_cpu_wafer')
        .itemOutputs('gtceu:nano_cpu_wafer')
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.HV]);



    //Quantum Deposited Wafers - Add more tiers as they're needed for the phosphor/naq/neutronium
    event.recipes.gtceu.chemical_reactor('thundering_mana_deposited_wafer_cr_1')
        .inputFluids('gtceu:thundering_mana 1000')
        .itemInputs('gtceu:silicon_wafer')
        .itemOutputs('kubejs:thundering_mana_deposited_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('thundering_mana_deposited_wafer_cr_2')
        .inputFluids('gtceu:thundering_mana 2000')
        .itemInputs('gtceu:phosphorus_wafer')
        .itemOutputs('4x kubejs:thundering_mana_deposited_wafer')
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.chemical_reactor('thundering_mana_deposited_wafer_cr_3')
        .inputFluids('gtceu:thundering_mana 4000')
        .itemInputs('gtceu:naquadah_wafer')
        .itemOutputs('8x kubejs:thundering_mana_deposited_wafer')
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.chemical_reactor('thundering_mana_deposited_wafer_cr_4')
        .inputFluids('gtceu:thundering_mana 8000')
        .itemInputs('gtceu:neutronium_wafer')
        .itemOutputs('16x kubejs:thundering_mana_deposited_wafer')
        .duration(120)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);
    //Quantum Litho   
    event.recipes.gtceu.aio_lithography_processor('prepared_quantum_wafer')
        .inputFluids('gtceu:hydrogensilesquioxane 1000')
        .inputFluids('gtceu:nitric_acid 1000')
        .itemInputs('kubejs:thundering_mana_deposited_wafer')
        .itemInputs('kubejs:quantum_cpu_mask')
        .itemOutputs('kubejs:prepared_quantum_cpu_wafer')
        .duration(480)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);
    event.remove({ output: 'gtceu:qbit_cpu_wafer' })
    event.recipes.gtceu.laser_engraver('quantum_cpu_craft')
        .notConsumable('gtceu:hv_emitter')
        .itemInputs('kubejs:prepared_quantum_cpu_wafer')
        .itemOutputs('gtceu:qbit_cpu_wafer')
        .duration(240)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.EV]);





})