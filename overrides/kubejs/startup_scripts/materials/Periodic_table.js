const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidState = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidState');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const $GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty');
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $MaterialFlags = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')




StartupEvents.registry('gtceu:material', event => {
    GTMaterials.Carbon.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Carbon.addFlags($MaterialFlags.GENERATE_ROD, $MaterialFlags.GENERATE_LONG_ROD);
    GTMaterials.Rutile.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Titanium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Uranium238.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.Indium.setProperty(PropertyKey.ORE, new $OreProperty());
    GTMaterials.NaquadriaSulfate.setProperty(PropertyKey.ORE, new $OreProperty());



    GTMaterials.Scandium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Strontium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Caesium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Francium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Radium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Actinium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    GTMaterials.Hafnium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    GTMaterials.Technetium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    GTMaterials.Rhenium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Rhenium.addFlags(
        $MaterialFlags.FORCE_GENERATE_BLOCK,
        $MaterialFlags.GENERATE_BOLT_SCREW,
        $MaterialFlags.GENERATE_FINE_WIRE,
        $MaterialFlags.GENERATE_FOIL,
        $MaterialFlags.GENERATE_FRAME,
        $MaterialFlags.GENERATE_GEAR,
        $MaterialFlags.GENERATE_LONG_ROD,
        $MaterialFlags.GENERATE_PLATE,
        $MaterialFlags.GENERATE_RING,
        $MaterialFlags.GENERATE_ROD,
        $MaterialFlags.GENERATE_ROTOR,
        $MaterialFlags.GENERATE_ROUND,
        $MaterialFlags.GENERATE_SMALL_GEAR,
        $MaterialFlags.GENERATE_SPRING,
        $MaterialFlags.GENERATE_SPRING_SMALL,
        $MaterialFlags.NO_SMELTING,
        $MaterialFlags.IS_MAGNETIC
    );

    GTMaterials.Bohrium.setProperty(PropertyKey.INGOT, new $IngotProperty());

    GTMaterials.Rubidium.setProperty(PropertyKey.INGOT, new $IngotProperty());



    GTMaterials.Rutherfordium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Dubnium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Seaborgium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Hassium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Praseodymium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Protactinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Promethium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Neptunium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Meitnerium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Roentgenium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Copernicium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Thallium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Nihonium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Flerovium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Moscovium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Gadolinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Curium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Terbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Dysprosium.setProperty(PropertyKey.INGOT, new $IngotProperty());


    GTMaterials.Californium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Einsteinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Fermium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Mendelevium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Nobelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Lawrencium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Holmium.setProperty(PropertyKey.BLAST, new $BlastProperty(9500))
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_SPRING)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_SPRING_SMALL)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_FOIL)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_FRAME)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_SMALL_GEAR)



    GTMaterials.Erbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Thulium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Ytterbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Livermorium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Tennessine.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Tennessine.addFlags(
        $MaterialFlags.FORCE_GENERATE_BLOCK,
        $MaterialFlags.GENERATE_BOLT_SCREW,
        $MaterialFlags.GENERATE_FINE_WIRE,
        $MaterialFlags.GENERATE_FOIL,
        $MaterialFlags.GENERATE_FRAME,
        $MaterialFlags.GENERATE_GEAR,
        $MaterialFlags.GENERATE_LONG_ROD,
        $MaterialFlags.GENERATE_PLATE,
        $MaterialFlags.GENERATE_RING,
        $MaterialFlags.GENERATE_ROD,
        $MaterialFlags.GENERATE_ROTOR,
        $MaterialFlags.GENERATE_ROUND,
        $MaterialFlags.GENERATE_SMALL_GEAR,
        $MaterialFlags.GENERATE_SPRING,
        $MaterialFlags.GENERATE_SPRING_SMALL,
        $MaterialFlags.NO_SMELTING
    );
    GTMaterials.Oganesson.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Polonium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Astatine.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Tellurium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Selenium.setProperty(PropertyKey.INGOT, new $IngotProperty());

})
