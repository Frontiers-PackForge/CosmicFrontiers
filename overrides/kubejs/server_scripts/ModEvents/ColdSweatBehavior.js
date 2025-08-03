// const $ActiveBlock = Java.loadClass('com.gregtechceu.gtceu.api.block.ActiveBlock')
// ColdSweatEvents.registries(event =>
//     {
//         event.addBlockTemperature(130.0, "f", blockTemp =>
//             blockTemp.blocks("gtceu:cupronickel_coil_block")
//                      .maxEffect(1.6)
//                      .range(5)
//                      .fades(true)
//                      .blockPredicate(block => {
//                         return block.getBlockState().getValue($ActiveBlock.ACTIVE) == true
//                      }))
//     })