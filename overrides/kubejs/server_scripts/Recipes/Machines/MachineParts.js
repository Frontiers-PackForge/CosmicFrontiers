ServerEvents.recipes(event => {
    const machineParts = [
        { tier: 'lv', tierIndex: GTValues.LV, previousTierIndex: GTValues.ULV, wire: 'tin', plate: 'steel' },
        { tier: 'mv', tierIndex: GTValues.MV, previousTierIndex: GTValues.LV, wire: 'copper', plate: 'aluminium' },
        { tier: 'hv', tierIndex: GTValues.HV, previousTierIndex: GTValues.MV, wire: 'gold', plate: 'stainless_steel' }
    ]
    // Mmmm I'm so full of dynamos and hatches.....
    machineParts.forEach(machine => {
        event.recipes.gtceu.assembler(`frontiers:machines/${machine.tier}_energy_input_hatch_4a`).itemInputs(`gtceu:${machine.tier}_energy_input_hatch`, `2x gtceu:${machine.wire}_quadruple_wire`, `2x gtceu:${machine.plate}_plate`).itemOutputs(`cosmiccore:${machine.tier}_energy_input_hatch_4a`).duration(100).EUt(GTValues.VA[machine.tierIndex], 1)
        event.recipes.gtceu.assembler(`frontiers:machines/${machine.tier}_energy_output_hatch_4a`).itemInputs(`gtceu:${machine.tier}_energy_output_hatch`, `2x gtceu:${machine.wire}_quadruple_wire`, `2x gtceu:${machine.plate}_plate`).itemOutputs(`cosmiccore:${machine.tier}_energy_output_hatch_4a`).duration(100).EUt(GTValues.VA[machine.previousTierIndex], 1)
        event.recipes.gtceu.assembler(`frontiers:machines/${machine.tier}_energy_input_hatch_16a`).itemInputs(`gtceu:${machine.tier}_transformer_1a`, `cosmiccore:${machine.tier}_energy_input_hatch_4a`, `2x gtceu:${machine.wire}_octal_wire`, `4x gtceu:${machine.plate}_plate`).itemOutputs(`cosmiccore:${machine.tier}_energy_input_hatch_16a`).duration(200).EUt(GTValues.VA[machine.tierIndex], 1)
        event.recipes.gtceu.assembler(`frontiers:machines/${machine.tier}_energy_output_hatch_16a`).itemInputs(`gtceu:${machine.tier}_transformer_1a`, `cosmiccore:${machine.tier}_energy_output_hatch_4a`, `2x gtceu:${machine.wire}_octal_wire`, `4x gtceu:${machine.plate}_plate`).itemOutputs(`cosmiccore:${machine.tier}_energy_output_hatch_16a`).duration(200).EUt(GTValues.VA[machine.tierIndex], 1)
    })
})
