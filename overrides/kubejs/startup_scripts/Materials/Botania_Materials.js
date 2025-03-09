//Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('livingrock')
        .color(0xd7d7c8)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )

    event.create('livingwood')
        .color(0x34140c)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
        )
    event.create('dreamwood')
        .color(0xb9ddd3)
        .iconSet(GTMaterialIconSet.WOOD)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
        )


    event.create('terrasteel')
        .color(0x55f609)
        .ingot()
        .element(GTElements.get('terrasteel'))
        .iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.MV], 8, 1, false)
        .toolStats(new ToolProperty(12, 7, 3072, 6,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SCYTHE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.MORTAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.KNIFE,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.CHAINSAW_LV,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.BUZZSAW,
                GTToolType.SCREWDRIVER_LV
            ]
        ))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME
        )

    event.create('manasteel')
        .liquid()
        .color(0x67b9ee)
        .element(GTElements.get('manasteel'))
        .cableProperties(GTValues.V[GTValues.LV], 8, 0, false)
        .toolStats(new ToolProperty(8, 5, 2048, 4,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SCYTHE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.MORTAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.KNIFE,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.CHAINSAW_LV,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.BUZZSAW,
                GTToolType.SCREWDRIVER_LV
            ]
        ))
        .iconSet(GTMaterialIconSet.getByName('mana'))
        .flags(
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_GEAR,)

    event.create('annealed_manasteel')
        .ingot()
        .liquid()
        .color(0xa8ddff)
        .element(GTElements.get('manasteel'))
        .cableProperties(GTValues.V[GTValues.MV], 2, 3, false)
        .iconSet(GTMaterialIconSet.getByName('mana'))
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING
        )

    event.create('elementium')
        .color(0xf472c6)
        .iconSet(GTMaterialIconSet.SHINY)
        .ingot()
        .cableProperties(GTValues.V[GTValues.EV], 3, 4, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING
        ).toolStats(new ToolProperty(20, 8, 8072, 6,
            [
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.HOE,
                GTToolType.MINING_HAMMER,
                GTToolType.SPADE,
                GTToolType.SCYTHE,
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.WRENCH,
                GTToolType.FILE,
                GTToolType.CROWBAR,
                GTToolType.SCREWDRIVER,
                GTToolType.MORTAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.KNIFE,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.CHAINSAW_LV,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.BUZZSAW,
                GTToolType.SCREWDRIVER_LV
            ]
        ))
    event.create('galvanized_ethersteel')
        .color(0xcf325b)
        .ingot()
        .liquid()
        .element(GTElements.get('ether_steel'))
        .iconSet(GTMaterialIconSet.SHINY)
        .cableProperties(GTValues.V[GTValues.HV], 4, 4, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR
        )


})

GTCEuStartupEvents.materialModification(event => {
    // TagPrefix.ingot.setIgnored(GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    // TagPrefix.ingot.setIgnored(GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))
    // TagPrefix.ingot.setIgnored(GTMaterials.get('elementium'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('manasteel'), () => Item.getItem('botania:manasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('terrasteel'), () => Item.getItem('botania:terrasteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('elementium'), () => Item.getItem('botania:elementium_ingot'))

})
