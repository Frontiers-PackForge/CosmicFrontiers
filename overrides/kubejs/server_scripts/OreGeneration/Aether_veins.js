ServerEvents.registry('gtceu:ore_vein', event => {
    event.create('frontiers:zanite')
        .dimensions(['aether:the_aether'])
        .layer('aether_islands')
        .weight(60)
        .clusterSize(50)
        .density(0.55)
        .discardChanceOnAirExposure(1)
        .heightRangeUniform(16, 128)
        .layeredVeinGenerator(generator => generator
            .withLayerPattern(() => GTLayerPattern.builder()
                .layer(l => l.weight(3).mat(GTMaterials.get('gtceu:zanite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Barite).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.Trona).size(1, 3))
                .build()))
})


ServerEvents.recipes(event => {
    event.recipes.gtceu.autoclave('test')
        .itemInputs('minecraft:polished_andesite_slab', 'gtceu:hv_fisher')
        .itemOutputs('minecraft:deepslate', 'gtceu:ev_fisher')
        .inputFluids('gtceu:salt_water 1000')
        .outputFluids('minecraft:water 1000')
        .EUt(GTValues.VA[GTValues.LV], 1)
        .CWUt(238)
        .cleanroom(CleanroomType.CLEANROOM)
        .dimension('minecraft:overworld')
        .duration(100)

})