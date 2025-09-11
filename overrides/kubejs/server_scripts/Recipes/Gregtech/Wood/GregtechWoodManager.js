ServerEvents.recipes(event => {
    function planks(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        let logTag = `#${type}_logs`
        if (customLogType != null) {
            logTag = `#${type}_${customLogType}`
        }
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_log`) && !specialWoods.has(type)) {
            console.log(`Could not find log for ${type}, skipping`)
            return
        }
        
        event.remove({ id: `${type}_planks` })
        
        event.shaped(`4x ${type}_planks`, [
            'S',
            'L'
        ], {
            S: '#forge:tools/saws',
            L: logTag
        }).id(`cosmicfrontiers:${recipeId}_planks_saw`)
        
        event.shapeless(`2x ${type}_planks`, logTag).id(`cosmicfrontiers:${recipeId}_planks`)
        
        event.recipes.gtceu.cutter(`cosmicfrontiers:${recipeId}_cutting`)
        .itemInputs(logTag)
        .itemOutputs([`6x ${type}_planks`, '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    }

    function strippedWood(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        let logTag = `#${type}_logs`
        if (customLogType != null) {
            logTag = `#${type}_${customLogType}`
        }
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_log`) && !specialWoods.has(type)) {
            console.log(`Could not find stripped wood for ${type}, skipping`)
            return
        }
        
        event.remove({ id: `${type}_planks` })
        
        event.shaped(`4x ${type}_planks`, [
            'S',
            'L'
        ], {
            S: '#forge:tools/saws',
            L: logTag
        }).id(`cosmicfrontiers:${recipeId}_planks_saw`)
        
        event.shapeless(`2x ${type}_planks`, logTag).id(`cosmicfrontiers:${recipeId}_planks`)
        
        event.recipes.gtceu.cutter(`cosmicfrontiers:${recipeId}_cutting`)
        .itemInputs(logTag)
        .itemOutputs([`6x ${type}_planks`, '2x gtceu:wood_dust'])
        .duration(200)
        .EUt(7);
    }
    
    function stairs(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_stairs`) && !specialWoods.has(type)) {
            console.log(`Could not find stairs for ${type}, skipping`)
            return
        }
        
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_stairs`)
        .itemInputs(`3x ${type}_planks`)
        .itemOutputs(`4x ${type}_stairs`)
        .circuit(7)
        .duration(100)
        .EUt(4);
    }
    
    function slab(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_slab`)
) {
            console.log(`Could not find slab for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_slab` })
        
        event.shaped(`2x ${type}_slab`, [
            'SP'
        ], {
            S: '#forge:tools/saws',
            P: `${type}_planks`
        }).id(`cosmicfrontiers:${recipeId}_slab`)
        
        event.recipes.gtceu.cutter(`cosmicfrontiers:${recipeId}_slab_cutting`)
        .itemInputs(`${type}_planks`)
        .itemOutputs(`2x ${type}_slab`)
        .duration(100)
        .EUt(4);
    }
    
    function door(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_door`)
) {
            console.log(`Could not find door for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_door` })
        
        event.shaped(`2x ${type}_door`, [
            'PTD',
            'PRS',
            'PPW'
        ], {
            P: `${type}_planks`,
            T: `${type}_trapdoor`,
            W: `#forge:tools/saws`,
            S: 'gtceu:iron_screw',
            R: 'gtceu:iron_ring',
            D: '#forge:tools/screwdrivers',
        }).id(`cosmicfrontiers:${recipeId}_door`)
        
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_door`)
        .itemInputs([`5x ${type}_planks`])
        .itemOutputs(`3x ${type}_door`)
        .inputFluids('gtceu:iron 16')
        .circuit(3)
        .duration(100)
        .EUt(4);
    }
    
    function trapdoor(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_trapdoor`)
) {
            console.log(`Could not find trapdoor for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_trapdoor` })
        
        event.shaped(`2x ${type}_trapdoor`, [
            'PPP',
            'PPP'
        ], {
            P: `${type}_slab`
        }).id(`cosmicfrontiers:${recipeId}_trapdoor`)
        
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_trapdoor`)
        .itemInputs(`3x ${type}_slab`)
        .itemOutputs(`3x ${type}_trapdoor`)
        .circuit(6)
        .duration(100)
        .EUt(4);
    }
    
    function sign(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_sign`)
) {
            console.log(`Could not find sign for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_sign` })
        
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_sign`)
        .itemInputs([`6x ${type}_planks`, '#forge:rods/wooden'])
        .itemOutputs(`4x ${type}_sign`)
        .circuit(3)
        .duration(100)
        .EUt(4);
        
        event.shaped(`2x ${type}_sign`, [
            'PPP',
            'PPP',
            'FSW'
        ], {
            P: `${type}_planks`,
            W: `#forge:tools/saws`,
            S: '#forge:rods/wooden',
            F: '#forge:tools/files',
        }).id(`cosmicfrontiers:${recipeId}_sign`)
        
        // Hanging Sign
        if (!Item.exists(`${type}_hanging_sign`)
) {
            console.log(`Could not find hanging sign for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_hanging_sign` })
        
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_hanging_sign`)
        .itemInputs([`6x ${type}_planks`, 'minecraft:chain'])
        .itemOutputs(`${type}_hanging_sign`)
        .circuit(4)
        .duration(100)
        .EUt(4);
        
        event.shaped(`2x ${type}_hanging_sign`, [
            'SRS',
            'PPP',
            'PPP'
        ], {
            P: `${type}_planks`,
            S: 'minecraft:chain',
            R: 'gtceu:iron_ring'
        }).id(`cosmicfrontiers:${recipeId}_hanging_sign`)
    }
    
    function fence(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_fence`)
) {
            console.log(`Could not find fence for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_fence` })
        
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_fence`)
        .itemInputs(`${type}_planks`)
        .itemOutputs(`${type}_fence`)
        .circuit(1)
        .duration(100)
        .EUt(4);
        
        event.shaped(`${type}_fence`, [
            'PSP',
            'PSP',
            'PSP'
        ], {
            P: `${type}_planks`,
            S: `#forge:rods/wooden`
        }).id(`cosmicfrontiers:${recipeId}_fence`)
        
        if (!Item.exists(`${type}_fence_gate`)
) {
            console.log(`Could not find fence gate for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_fence_gate` })
        
        event.shaped(`2x ${type}_fence_gate`, [
            'QWQ',
            'SPS',
            'SPS'
        ], {
            P: `${type}_planks`,
            S: `#forge:rods/wooden`,
            W: `#forge:tools/screwdrivers`,
            Q: `gtceu:iron_screw`
        }).id(`cosmicfrontiers:${recipeId}_fence_gate`)
        
        event.shaped(`2x ${type}_fence_gate`, [
            'Q Q',
            'SPS',
            'SPS'
        ],
        {
            P: `${type}_planks`,
            S: `#forge:rods/wooden`,
            Q: `minecraft:flint`
        }).id(`cosmicfrontiers:${recipeId}_fence_alt`)
        
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_fence_gate`)
        .itemInputs([`2x ${type}_planks`, "2x #forge:rods/wooden"])
        .itemOutputs(`${type}_fence_gate`)
        .circuit(2)
        .duration(100)
        .EUt(4);
    }
    
    function pressurePlate(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_pressure_plate`)
) {
            console.log(`Could not find pressure plate for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_pressure_plate` })
        
        event.recipes.gtceu.cutter(`cosmicfrontiers:${recipeId}_pressure_plate`)
        .itemInputs(`${type}_slab`)
        .itemOutputs(`4x ${type}_pressure_plate`)
        .duration(100)
        .EUt(4);
        
        event.shaped(`2x ${type}_pressure_plate`, [
            'S',
            'P'
        ], {
            P: `${type}_slab`,
            S: `#forge:tools/saws`
        }).id(`cosmicfrontiers:${recipeId}_pressure_plate`)
    }
    
    function button(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_button`)
) {
            console.log(`Could not find button for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_button` })
        event.recipes.gtceu.cutter(`cosmicfrontiers:${recipeId}_button`)
        .itemInputs(`${type}_pressure_plate`)
        .itemOutputs(`4x ${type}_button`)
        .duration(100)
        .EUt(4);
        event.shaped(`2x ${type}_button`, [
            'S',
            'P'
        ],
        {
            P: `${type}_pressure_plate`,
            S: `#forge:tools/saws`
        }).id(`cosmicfrontiers:${recipeId}_button`)
    }
    
    function boat(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_boat`)
) {
            console.log(`Could not find boat for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_boat` })
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_boat`)
        .itemInputs(`5x ${type}_planks`)
        .circuit(15)
        .itemOutputs(`${type}_boat`)
        .duration(100)
        .EUt(4);
        event.shaped(`${type}_boat`, [
            'SWS',
            'SKS',
            'PPP'
        ], {
            P: `${type}_planks`,
            S: `${type}_slab`,
            K: `#forge:tools/knives`,
            W: `#forge:tools/shovels`
        }).id(`cosmicfrontiers:${recipeId}_boat`)
    }

    function craftingTable(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_crafting_table`)
) {
            console.log(`Could not find crafting table for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_crafting_table` })
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_crafting_table`)
        .itemInputs(`4x ${type}_planks`)
        .circuit(18)
        .itemOutputs(`${type}_crafting_table`)
        .duration(100)
        .EUt(4);
        event.shaped(`${type}_crafting_table`, [
            'FF',
            'WW'
        ], {
            W: `${type}_planks`,
            F: `minecraft:flint`
        }).id(`cosmicfrontiers:${recipeId}_crafting_table`)
    }
    
    function bookshelf(type, customLogType, isDuplicate) {
        customLogType = customLogType || null;
        isDuplicate = isDuplicate || false;
        
        const nonNamespaceName = type.replace(/^[^:]+:/, '')  // filter out namespace for usage in id
        let recipeId = ""
        if (isDuplicate) {
            recipeId = nonNamespaceName.concat('_alt')
        } else recipeId = nonNamespaceName
        
        if (!Item.exists(`${type}_bookshelf`)
) {
            console.log(`Could not find bookshelf for ${type}, skipping`)
            return
        }
        
        event.remove({ output: `${type}_bookshelf` })
        event.recipes.gtceu.assembler(`cosmicfrontiers:${recipeId}_bookshelf`)
        .itemInputs(`6x ${type}_slab`)
        .itemInputs(`3x minecraft:book`)
        .itemOutputs(`${type}_bookshelf`)
        .circuit(16)
        .duration(100)
        .EUt(4);
    }
    
    planks('ad_astra:aeronos', 'caps')
    planks('ad_astra:strophar', 'caps')
    bookshelf('aether:skyroot')
    // planks('minecraft:warped', 'stems')
    // planks('minecraft:crimson', 'stems')
    
    for (const type of woodTypes) {
        // skyroot planks has an overriden recipe, GT woods already have a recipe
        if (type != 'aether:skyroot' && type != 'gtceu:treated_wood' && type != 'gtceu:rubber_wood') {
            planks(type, null, false)
        }

        // malum woods have overriden recipes
        if (type != 'malum:runewood' && type != 'malum:soulwood') {
            slab(type, null, false)
            trapdoor(type, null, false)
            stairs(type, null, false)
            door(type, null, false)
            sign(type, null, false)
            fence(type, null, false)
            pressurePlate(type, null, false)
            button(type, null, false)
            boat(type, null, false)
        }

        // Avoid log spam since only BWG adds wood-specific crafting tables and bookshelves
        if (type.startsWith('biomeswevegone:')) {
            craftingTable(type, null, false)
            bookshelf(type, null, false)
        }
    }
    
    for (const type of duplicateWoods) {
        planks(type, null, true)
        stairs(type, null, true)
        slab(type, null, true)
        door(type, null, true)
        trapdoor(type, null ,true)
        sign(type, null, true)
        fence(type, null, true)
        pressurePlate(type, null, true)
        button(type, null, true)
        boat(type, null, true)
    }
    
    for (const [key, value] of specialWoods) {
        // check if the wood type is not already registered
        if (!woodTypes.includes(key)) {
            stairs(key, null, false)
            slab(key, null, false)
            door(key, null, false)
            trapdoor(key, null, false)
            sign(key, null, false)
            fence(key, null, false)
            pressurePlate(key, null, false)
            button(key, null, false)
            boat(key, null, false)
        }
    }
    
    // overwrite gt's existing recipes
    for (const type of mcWoods) {
        trapdoor(type, null ,false)
        sign(type, null, false)
        button(type, null, false)
    }
})