




// ServerEvents.recipes(event => {
//     console.log('Waking Up Gregtech for Heavy Beams')
//     // Verify whatever hellscape the registry is, is CLOSED or FROZEN.
//     if (GTMaterialRegistry.getPhase() === $MRM.Phase.CLOSED || GTMaterialRegistry.getPhase() === $MRM.Phase.FROZEN) {
//         //Check for ALL registered mats and start looping
//         GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
//             //Verify There is a Valid Rod for this Material
//             if (Item.exists(`gregtech:${id.name}_rod`) || Item.exists(`cosmiccore:${id.name}_rod`)) {
//                 //Verify There is a Valid Plate
//                 if (Item.exists(`gregtech:${id.name}_plate`) || Item.exists(`cosmiccore:${id.name}_plate`)) {
//                     //If Both checks are valid - Start assembling the recipe


//                     event.recipes.gtceu.heavy_assembler(`cosmicfrontiers:${id.name}_heavy_beam`)
//                         .itemInputs(`${id.name}`)
//                         .itemOutputs([`6x ${modID}:${woodType}_planks`, '2x gtceu:wood_dust'])
//                         .duration(200)
//                         .EUt(7);



//                 }
//             }

//         })
//     }
// })
