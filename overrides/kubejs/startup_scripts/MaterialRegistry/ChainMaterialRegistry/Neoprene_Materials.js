
StartupEvents.registry('gtceu:material', event => {

    event.create('gtceu:1_4_dichlorobutadiene')
        .liquid()
        .formula('C4H6Cl2')
        .color(0x7da9f0)

    event.create('gtceu:3_4_dichlorobutadiene')
        .liquid()
        .formula('C4H6Cl2')
        .color(0xa7f2c4)
        
    event.create('gtceu:chloroprene')
        .liquid()
        .formula('C4H5Cl')
        .color(0x50917c)

    event.create('gtceu:ethylene_dichloride')
        .liquid()
        .formula('C2H4Cl2')
        .color(0xd9809e)

    event.create('gtceu:ethylenediamine')
        .liquid()
        .formula('C2H4(NH2)2')
        .color(0xf26394)

    event.create('gtceu:ethylene_thiourea')
        .dust()
        .formula('C3H6N2S')
        .color(0xfc2d74)

    event.create('gtceu:carbon_disulfide')
        .liquid()
        .formula('CS2')
        .color(0xc3d7d9)

    event.create('gtceu:neoprene')
        .liquid()
        .ingot()
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .formula('[C4H5Cl]n')
        .color(0x5e0020)

})