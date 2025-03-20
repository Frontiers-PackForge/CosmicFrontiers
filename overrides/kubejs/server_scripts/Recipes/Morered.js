let yeet = (itemName) => {
       ServerEvents.recipes(event => {
              event.remove({ output: itemName })
       })
       ServerEvents.tags('item', event => {
              event.add('c:hidden_from_recipe_viewers', itemName)

       })
}
yeet('morered:red_alloy_ingot')
yeet('morered:stone_plate')
yeet('morered:soldering_table')
yeet('jumbofurnace:jumbo_furnace')

ServerEvents.recipes(event => {

       let dye = [
              'white',
              'orange',
              'magenta',
              'light_blue',
              'yellow',
              'lime',
              'pink',
              'gray',
              'light_gray',
              'cyan',
              'purple',
              'blue',
              'brown',
              'green',
              'red',
              'black'
       ]

    //cables
    dye.forEach(dye => {
    event.remove({ output: `morered:${dye}_network_cable` })
    event.recipes.gtceu.chemical_bath(`morered:${dye}_network_cable`)
          .itemInputs('16x morered:red_alloy_wire')
          .inputFluids(`gtceu:${dye}_dye 144`)
          .itemOutputs(`16x morered:${dye}_network_cable`)
          .duration(80)
          .EUt(30);
       })

    event.remove({ output: 'morered:red_alloy_wire' })
    event.recipes.gtceu.laminator('morered:red_alloy_wire')
          .itemInputs('12x gtceu:red_alloy_single_wire')
          .itemInputs('gtceu:redstone_plate')
          .inputFluids('gtceu:redstone 144')
          .itemOutputs('16x morered:red_alloy_wire')
          .duration(160)
          .EUt(16);

    event.remove({ output: 'morered:bundled_network_cable' })
    event.recipes.gtceu.packer('morered:bundled_network_cable')
          .itemInputs('3x #morered:network_cables')
          .itemOutputs('morered:bundled_network_cable')
          .duration(100)
          .EUt(20);

    //redstone components
    event.remove({ output: 'morered:latch' })
    event.recipes.gtceu.assembler('morered:latch')
          .itemInputs('4x morered:red_alloy_wire')
          .itemInputs('3x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_rod')
          .circuit(1)
          .itemOutputs('2x morered:latch')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:pulse_gate' })
    event.recipes.gtceu.assembler('morered:pulse_gate')
          .itemInputs('2x morered:red_alloy_wire')
          .itemInputs('3x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .circuit(2)
          .itemOutputs('2x morered:pulse_gate')
          .duration(160)
          .EUt(16);

    event.remove({ output: 'morered:redwire_post' })
    event.recipes.gtceu.assembler('morered:redwire_post')
          .itemInputs('2x gtceu:red_alloy_plate')
          .itemInputs('2x gtceu:iron_plate')
          .circuit(3)
          .itemOutputs('2x morered:redwire_post')
          .duration(80)
          .EUt(24);

    event.remove({ output: 'morered:redwire_post_plate' })
    event.recipes.gtceu.assembler('morered:redwire_post_plate')
          .itemInputs('2x gtceu:red_alloy_plate')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .circuit(4)
          .itemOutputs('2x morered:redwire_post_plate')
          .duration(120)
          .EUt(24);

    event.remove({ output: 'morered:redwire_post_relay_plate' })
    event.recipes.gtceu.assembler('morered:redwire_post_relay_plate')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .circuit(5)
          .itemOutputs('2x morered:redwire_post_relay_plate')
          .duration(200)
          .EUt(24);

    event.remove({ output: 'morered:redwire_spool' })
    event.recipes.gtceu.spooling_machine('morered:redwire_spool')
          .itemInputs('16x morered:red_alloy_wire')
          .itemInputs('4x gtceu:iron_plate')
          .inputFluids('gtceu:redstone 144')
          .itemOutputs('morered:redwire_spool')
          .duration(400)
          .EUt(20);

    event.remove({ output: 'morered:bundled_cable_spool' })
    event.recipes.gtceu.spooling_machine('morered:bundled_cable_spool')
          .itemInputs('8x morered:bundled_network_cable')
          .itemInputs('4x gtceu:iron_plate')
          .inputFluids('gtceu:redstone 144')
          .itemOutputs('morered:bundled_cable_spool')
          .duration(400)
          .EUt(20);

    event.remove({ output: 'morered:bundled_cable_post' })
    event.recipes.gtceu.assembler('morered:bundled_cable_post')
          .itemInputs('2x morered:bundled_network_cable')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .circuit(6)
          .itemOutputs('2x morered:bundled_cable_post')
          .duration(200)
          .EUt(24);

    event.remove({ output: 'morered:bundled_cable_relay_plate' })
    event.recipes.gtceu.assembler('morered:bundled_cable_relay_plate')
          .itemInputs('4x morered:bundled_network_cable')
          .itemInputs('8x gtceu:stone_plate')
          .itemInputs('4x gtceu:iron_plate')
          .circuit(7)
          .itemOutputs('2x morered:bundled_cable_relay_plate')
          .duration(200)
          .EUt(24);

    event.remove({ output: 'morered:hexidecrubrometer' })
    event.recipes.gtceu.assembler('morered:hexidecrubrometer')
          .itemInputs('2x minecraft:observer')
          .itemInputs('16x morered:red_alloy_wire')
          .itemInputs('8x gtceu:nether_quartz_plate')
          .itemInputs('4x gtceu:iron_plate')
          .circuit(1)
          .itemOutputs('morered:hexidecrubrometer')
          .duration(200)
          .EUt(20);

    event.remove({ output: 'morered:diode' })
    event.recipes.gtceu.assembler('morered:diode')
          .itemInputs('2x morered:red_alloy_wire')
          .itemInputs('3x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x minecraft:redstone_torch')
          .circuit(8)
          .itemOutputs('2x morered:diode')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:not_gate' })
    event.recipes.gtceu.assembler('morered:not_gate')
          .itemInputs('4x morered:red_alloy_wire')
          .itemInputs('3x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('minecraft:redstone_torch')
          .circuit(9)
          .itemOutputs('2x morered:not_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:nor_gate' })
    event.recipes.gtceu.assembler('morered:nor_gate')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('minecraft:redstone_torch')
          .circuit(10)
          .itemOutputs('2x morered:nor_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:nand_gate' })
    event.recipes.gtceu.assembler('morered:nand_gate')
          .itemInputs('6x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('3x minecraft:redstone_torch')
          .circuit(11)
          .itemOutputs('2x morered:nand_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:or_gate' })
    event.recipes.gtceu.assembler('morered:or_gate')
          .itemInputs('4x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x minecraft:redstone_torch')
          .circuit(12)
          .itemOutputs('2x morered:or_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:and_gate' })
    event.recipes.gtceu.assembler('morered:and_gate')
          .itemInputs('2x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('4x minecraft:redstone_torch')
          .circuit(13)
          .itemOutputs('2x morered:and_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:xor_gate' })
    event.recipes.gtceu.assembler('morered:xor_gate')
          .itemInputs('2x morered:red_alloy_wire')
          .itemInputs('6x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('3x minecraft:redstone_torch')
          .circuit(13)
          .itemOutputs('2x morered:xor_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:xnor_gate' })
    event.recipes.gtceu.assembler('morered:xnor_gate')
          .itemInputs('2x morered:red_alloy_wire')
          .itemInputs('6x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('4x minecraft:redstone_torch')
          .circuit(14)
          .itemOutputs('2x morered:xnor_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:multiplexer' })      // [ INVINCIBLE ] can't keep getting awaay with iiit
    event.recipes.gtceu.assembler('morered:multiplexer') // sobs
          .itemInputs('8x morered:red_alloy_wire')       // [ INVINCIBLE ] CAN'T KEEP GETTING AWAY WITH IT
          .itemInputs('4x gtceu:stone_plate')            // i hope someone finds this funny
          .itemInputs('6x gtceu:iron_plate')
          .circuit(15)
          .itemOutputs('2x morered:multiplexer')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:and_2_gate' })
    event.recipes.gtceu.assembler('morered:and_2_gate')
          .itemInputs('2x morered:red_alloy_wire')
          .itemInputs('6x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('3x minecraft:redstone_torch')
          .circuit(16)
          .itemOutputs('2x morered:and_2_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:nand_2_gate' })
    event.recipes.gtceu.assembler('morered:nand_2_gate')
          .itemInputs('6x morered:red_alloy_wire')
          .itemInputs('6x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x minecraft:redstone_torch')
          .circuit(17)
          .itemOutputs('2x morered:nand_2_gate')
          .duration(200)
          .EUt(16);

    event.remove({ output: 'morered:bitwise_diode' })
    event.recipes.gtceu.assembler('morered:bitwise_diode')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x gtceu:vacuum_tube')
          .circuit(1)
          .itemOutputs('2x morered:bitwise_diode')
          .duration(200)
          .EUt(20);

    event.remove({ output: 'morered:bitwise_not_gate' })
    event.recipes.gtceu.assembler('morered:bitwise_not_gate')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x gtceu:vacuum_tube')
          .circuit(2)
          .itemOutputs('2x morered:bitwise_not_gate')
          .duration(200)
          .EUt(20);

    event.remove({ output: 'morered:bitwise_or_gate' })
    event.recipes.gtceu.assembler('morered:bitwise_or_gate')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x gtceu:vacuum_tube')
          .circuit(3)
          .itemOutputs('2x morered:bitwise_or_gate')
          .duration(200)
          .EUt(20);

    event.remove({ output: 'morered:bitwise_and_gate' })
    event.recipes.gtceu.assembler('morered:bitwise_and_gate')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x gtceu:vacuum_tube')
          .circuit(4)
          .itemOutputs('2x morered:bitwise_and_gate')
          .duration(200)
          .EUt(20);

    event.remove({ output: 'morered:bitwise_xor_gate' })
    event.recipes.gtceu.assembler('morered:bitwise_xor_gate')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x gtceu:vacuum_tube')
          .circuit(5)
          .itemOutputs('2x morered:bitwise_xor_gate')
          .duration(200)
          .EUt(20);

    event.remove({ output: 'morered:bitwise_xnor_gate' })
    event.recipes.gtceu.assembler('morered:bitwise_xnor_gate')
          .itemInputs('8x morered:red_alloy_wire')
          .itemInputs('4x gtceu:stone_plate')
          .itemInputs('2x gtceu:iron_plate')
          .itemInputs('2x gtceu:vacuum_tube')
          .circuit(6)
          .itemOutputs('2x morered:bitwise_xnor_gate')
          .duration(200)
          .EUt(20);

    //removals
    event.remove({ output: 'morered:stone_plate' })
    event.remove({ output: 'morered:soldering_table' })

    //i now realized i should probably have used some vanilla components like repeaters and comparators in the recipes, uhhh
})