ServerEvents.recipes(event => {
      //JEI PREVIEW
  event.recipes.gtceu.fake_meteor_ritual('trinavine_meteor')
  .itemInputs('cosmiccore:trinavine_block')
  .itemOutputs(['minecraft:smooth_basalt','gtceu:raw_graphite','gtceu:raw_tantalite','gtceu:raw_platinum','gtceu:raw_electrotine','gtceu:raw_trinium_metallic'])
  .soulInput(13000000);
event.custom({
  "type": "bloodmagic:meteor",
  "explosion": 30.0,
  "input": {
    "tag": 'forge:storage_blocks/trinavine'
  },
  "layers": [
    {
      "additionalWeight": 0,
      "fill": {
        "block": "create:crimsite"
      },
      "minWeight": 400,
      "radius": 13,
      "shell": {
        "block": "minecraft:smooth_basalt"
      },
      "weightMap": [
        {
          "block": "gtceu:crimsite_graphite_ore",
          "weight": 50
        },
        {
          "block": "gtceu:crimsite_tantalite_ore",
          "weight": 30
        },
        {
          "block": "gtceu:crimsite_platinum_ore",
          "weight": 50
        },
        {
          "block": "gtceu:crimsite_electrotine_ore",
          "weight": 50
        },
        {
          "block": "gtceu:crimsite_trinium_metallic_ore",
          "weight": 50
        }
      ]
    }
  ],
  "syphon": 13000000
})
event.recipes.gtceu.fake_meteor_ritual('plat_group_meteor')
  .itemInputs('gtceu:ev_field_generator')
  .itemOutputs(['create:cut_ochrum', 'gtceu:raw_tetrahedrite', 'gtceu:raw_chalcopyrite', 'gtceu:raw_pentlandite', 'gtceu:raw_cooperite', 'gtceu:raw_bornite', 'gtceu:raw_chalcocite', 'gtceu:raw_platinum', 'gtceu:raw_palladium'])
  .soulInput(5000000);
event.custom({
  "type": "bloodmagic:meteor",
  "explosion": 30.0,
  "input": {
    "item": 'gtceu:ev_field_generator'
  },
  "layers": [
    {
      "additionalWeight": 0,
      "fill": {
        "block": "create:ochrum"
      },
      "minWeight": 400,
      "radius": 16,
      "shell": {
        "block": "create:cut_ochrum"
      },
      "weightMap": [
        {
          "block": "gtceu:ochrum_tetrahedrite_ore",
          "weight": 50
        },
        {
          "block": "gtceu:ochrum_chalcopyrite_ore",
          "weight": 30
        },
        {
          "block": "gtceu:ochrum_pentlandite_ore",
          "weight": 30
        },
        {
          "block": "gtceu:ochrum_cooperite_ore",
          "weight": 30
        },
        {
          "block": "gtceu:ochrum_bornite_ore",
          "weight": 30
        },
        {
          "block": "gtceu:ochrum_chalcocite_ore",
          "weight": 30
        },
        {
          "block": "gtceu:ochrum_platinum_ore",
          "weight": 10
        },
        {
          "block": "gtceu:ochrum_palladium_ore",
          "weight": 10
        }
      ]
    }
  ],
  "syphon": 5000000
})
event.recipes.gtceu.fake_meteor_ritual('apatite_meteor_mv')
.itemInputs('gtceu:mv_emitter')
.itemOutputs(['minecraft:tuff', 'gtceu:raw_tetrahedrite', 'gtceu:raw_pyrochlore', 'gtceu:raw_tricalcium_phosphate', 'gtceu:raw_apatite'])
.soulInput(3000000);
event.custom({
  "type": "bloodmagic:meteor",
  "explosion": 30.0,
  "input": {
    "item": 'gtceu:mv_emitter'
  },
  "layers": [
    {
      "additionalWeight": 0,
      "fill": {
        "block": "minecraft:netherrack"
      },
      "minWeight": 200,
      "radius": 16,
      "shell": {
        "block": "minecraft:tuff"
      },
      "weightMap": [
        {
          "block": "gtceu:netherrack_pyrochlore_ore",
          "weight": 50
        },
        {
          "block": "gtceu:netherrack_tricalcium_phosphate_ore",
          "weight": 30
        },
        {
          "block": "gtceu:netherrack_apatite_ore",
          "weight": 30
        }
      ]
    }
  ],
  "syphon": 3000000
})
//Fat Luminite
event.recipes.gtceu.fake_meteor_ritual('luminite_fat_iv')
.itemInputs('gtceu:luv_sensor')
.itemOutputs(['minecraft:tuff', 'gtceu:raw_luminite', 'gtceu:raw_luminite_block', 'gtceu:raw_neodymium', 'gtceu:raw_bauxite','gtceu:raw_ilmenite','gtceu:raw_wolframite','gtceu:raw_scheelite','gtceu:raw_tungstate'])
.soulInput(8500000);
event.custom({
  "type": "bloodmagic:meteor",
  "explosion": 30.0,
  "input": {
    "item": 'gtceu:luv_sensor'
  },
  "layers": [
    {
      "additionalWeight": 0,
      "fill": {
        "block": "ad_astra:moon_stone"
      },
      "minWeight": 50,
      "radius": 16,
      "shell": {
        "block": "ad_astra:moon_cobblestone"
      },
      "weightMap": [
        {
          "block": "gtceu:moon_stone_neodymium_ore",
          "weight": 75
        },
        {
          "block": "gtceu:moon_stone_luminite_ore",
          "weight": 75
        },
        {
          "block": "gtceu:raw_luminite_block",
          "weight": 75
        },
        {
          "block": "gtceu:moon_stone_ilmenite_ore",
          "weight": 75
        },
        {
          "block": "gtceu:moon_stone_bauxite_ore",
          "weight": 75
        },
        {
          "block": "gtceu:moon_stone_wolframite_ore",
          "weight": 75
        },
        {
          "block": "gtceu:moon_stone_scheelite_ore",
          "weight": 75
        },
        {
          "block": "gtceu:moon_stone_tungstate_ore",
          "weight": 75
        }
      ]
    }
  ],
  "syphon": 8500000
})
})