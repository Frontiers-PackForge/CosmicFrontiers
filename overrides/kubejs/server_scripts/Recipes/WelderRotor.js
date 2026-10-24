ServerEvents.recipes(event => {
    const rotor = TagPrefix.rotor.value()
    const plate = TagPrefix.plate.value()
    const ring = TagPrefix.ring.value()

    GTRegistries.MATERIALS.forEach(material => {
        if (material.getBlastTemperature() >= 2800 || !material.hasProperty(PropertyKey.INGOT)) return
        if (!material.shouldGenerateRecipesFor(rotor)
            || !material.shouldGenerateRecipesFor(plate)
            || !material.shouldGenerateRecipesFor(ring)) return

        const name = material.getName()
        event.remove({ id: `gtceu:welder/weld_${name}_parts_to_rotor` })
        event.recipes.gtceu.welder(`frontiers:weld_${name}_parts_to_rotor`)
            .itemInputs(ChemicalHelper.get(plate, material, 4), ChemicalHelper.get(ring, material, 1))
            .itemOutputs(ChemicalHelper.get(rotor, material, 1))
            .circuit(3)
            .duration(material.getMass() * 4)
            .EUt(GTValues.V[GTValues.LV], 1)
    })
})
