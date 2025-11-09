ServerEvents.recipes(event => {
    //ZPM Excluding Trinavine
    new global.Cable('gtceu', 'naquadah', 1, event).cables()
    new global.Cable('gtceu', 'trinium', 1, event).cables()
    //UV
    new global.Cable('gtceu', 'tritanium', 2, event).cables()
    new global.Cable('gtceu', 'naquadah_alloy', 2, event).cables()
    new global.Cable('gtceu', 'yttrium_barium_cuprate', 2, event).cables()
    new global.Cable('cosmiccore', 'nevramite', 2, event).cables()
    new global.Cable('cosmiccore', 'living_igniclad', 2, event).cables()
    new global.Cable('cosmiccore', 'sol_steel', 2, event).cables()
    new global.Cable('cosmiccore', 'starmetal', 2, event).cables()
    //UHV
    new global.Cable('cosmiccore', 'europium', 4, event).cables()
})

if (!global.Cable) {
  global.Cable = function (modID, cable, fluidMult, event) {
    this.modID = modID;
    this.cableType = cable;
    this.event = event;
    this.fluidMult = fluidMult;
    return this;
  };

  global.Cable.prototype = {
    cables: function () {
      const { modID, cableType, fluidMult, event } = this
      //Cable Single
      if (Item.exists(`${modID}:${cableType}_single_cable`)) {
        event.remove({ output: `${modID}:${cableType}_single_cable` })
        event.recipes.gtceu.assembler(`frontiers:${cableType}_neoprene_coating`)
          .itemInputs(`${modID}:${cableType}_single_wire`, 'gtceu:polybenzimidazole_foil', 'gtceu:4_4_oxydianiline_pyromellitimide_foil')
          .inputFluids(Fluid.of('gtceu:neoprene', 36 * fluidMult))
          .itemOutputs(`${modID}:${cableType}_single_cable`)
          .duration(100)
          .EUt(7);
      }
      //Cable Double
      if (Item.exists(`${modID}:${cableType}_double_cable`)) {
        event.remove({ output: `${modID}:${cableType}_double_cable` })
        event.recipes.gtceu.assembler(`frontiers:${cableType}_neoprene_coating_double`)
          .itemInputs(`${modID}:${cableType}_double_wire`, 'gtceu:polybenzimidazole_foil', 'gtceu:4_4_oxydianiline_pyromellitimide_foil')
          .inputFluids(Fluid.of('gtceu:neoprene', 72 * fluidMult))
          .itemOutputs(`${modID}:${cableType}_double_cable`)
          .duration(100)
          .EUt(7);
      }
      //Cable Quad
      if (Item.exists(`${modID}:${cableType}_quadruple_cable`)) {
        event.remove({ output: `${modID}:${cableType}_quadruple_cable` })
        event.recipes.gtceu.assembler(`frontiers:${cableType}_neoprene_coating_quadruple`)
          .itemInputs(`${modID}:${cableType}_quadruple_wire`, '2x gtceu:polybenzimidazole_foil', '2x gtceu:4_4_oxydianiline_pyromellitimide_foil')
          .inputFluids(Fluid.of('gtceu:neoprene', 144 * fluidMult))
          .itemOutputs(`${modID}:${cableType}_quadruple_cable`)
          .duration(100)
          .EUt(7);
      }
      //Cable Octal
      if (Item.exists(`${modID}:${cableType}_octal_cable`)) {
        event.remove({ output: `${modID}:${cableType}_octal_cable` })
        event.recipes.gtceu.assembler(`frontiers:${cableType}_neoprene_coating_octal`)
          .itemInputs(`${modID}:${cableType}_octal_wire`, '3x gtceu:polybenzimidazole_foil', '3x gtceu:4_4_oxydianiline_pyromellitimide_foil')
          .inputFluids(Fluid.of('gtceu:neoprene', 288 * fluidMult))
          .itemOutputs(`${modID}:${cableType}_octal_cable`)
          .duration(100)
          .EUt(7);
      }
      //Cable Hex
      if (Item.exists(`${modID}:${cableType}_hex_cable`)) {
        event.remove({ output: `${modID}:${cableType}_hex_cable` })
        event.recipes.gtceu.assembler(`frontiers:${cableType}_neoprene_coating_hex`)
          .itemInputs(`${modID}:${cableType}_hex_wire`, '5x gtceu:polybenzimidazole_foil', '5x gtceu:4_4_oxydianiline_pyromellitimide_foil')
          .inputFluids(Fluid.of('gtceu:neoprene', 576 * fluidMult))
          .itemOutputs(`${modID}:${cableType}_hex_cable`)
          .duration(100)
          .EUt(7);
      }
      return this;
    }
  };
}