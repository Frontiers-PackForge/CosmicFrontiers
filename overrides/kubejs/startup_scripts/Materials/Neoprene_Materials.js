
GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('1_4_dichlorobutadiene')
        .liquid()
        .formula('C4H6Cl2')
        .color(0x7da9f0)

    event.create('3_4_dichlorobutadiene')
        .liquid()
        .formula('C4H6Cl2')
        .color(0xa7f2c4)
        
    event.create('chloroprene')
        .liquid()
        .formula('C4H5Cl')
        .color(0x50917c)

    event.create('ethylene_dichloride')
        .liquid()
        .formula('C2H4Cl2')
        .color(0xd9809e)

    event.create('ethylenediamine')
        .liquid()
        .formula('C2H4(NH2)2')
        .color(0xf26394)

    event.create('ethylene_thiourea')
        .dust()
        .formula('C3H6N2S')
        .color(0xfc2d74)

    event.create('carbon_disulfide')
        .liquid()
        .formula('CS2')
        .color(0xc3d7d9)

    event.create('neoprene')
        .liquid()
        .formula('[C4H5Cl]n')
        .color(0x5e0020)

})