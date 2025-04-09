
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
        .color(0xf0ece6)

    event.create('ethylene_dichloride')
        .liquid()
        .formula('C2H4Cl2')
        .color(0xfafaf7)

    event.create('ethylenediamine')
        .liquid()
        .formula('C2H4(NH2)2')
        .color(0xfafaf7)

    event.create('ethylene_thiourea')
        .dust()
        .formula('C3H6N2S')
        .color(0xfafafa)

    event.create('carbon_disulfide')
        .liquid()
        .formula('CS2')
        .color(0xc3d7d9)

    event.create('neoprene')
        .liquid()
        .formula('[C4H5Cl]n')
        .color(0x1a1a18)

})