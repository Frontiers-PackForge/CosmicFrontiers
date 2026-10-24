ServerEvents.recipes(event => {
    GTRegistries.MATERIALS.forEach(material => {
        if (material.getBlastTemperature() >= 2800 || !material.hasProperty(PropertyKey.INGOT)) return
        if (!material.shouldGenerateRecipesFor(TagPrefix.rotor)
            || !material.shouldGenerateRecipesFor(TagPrefix.plate)
            || !material.shouldGenerateRecipesFor(TagPrefix.ring)) return

        const name = material.getName()
        event.remove({ id: `gtceu:welder/weld_${name}_parts_to_rotor` })
        event.recipes.gtceu.welder(`frontiers:weld_${name}_parts_to_rotor`)
            .itemInputs(ChemicalHelper.get(TagPrefix.plate, material, 4), ChemicalHelper.get(TagPrefix.ring, material, 1))
            .itemOutputs(ChemicalHelper.get(TagPrefix.rotor, material, 1))
            .circuit(3)
            .duration(material.getMass() * 4)
            .EUt(GTValues.V[GTValues.LV], 1)
    })
})
