const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidState = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidState');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const $GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty');
const $oreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $MaterialFlags = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags')


GTCEuStartupEvents.materialModification(event => {

})


GTCEuStartupEvents.registry('gtceu:material', event => {
    
    
    GTMaterials.Carbon.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Carbon.addFlags($MaterialFlags.GENERATE_ROD, $MaterialFlags.GENERATE_LONG_ROD);

    //Netherstar lmfao
    // GTMaterials.NetherStar.setProperty(PropertyKey.GEM, new $GemProperty());
    //Naquadah
    GTMaterials.Naquadah.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder());
    GTMaterials.NaquadahEnriched.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder());
    GTMaterials.Naquadria.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.MOLTEN, new GTFluidBuilder());
    //Scandium
    GTMaterials.Scandium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Scandium, $FluidStorageKeys.LIQUID);
    //Strontium
    GTMaterials.Strontium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Strontium, $FluidStorageKeys.LIQUID);
    //Caesium
    GTMaterials.Caesium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Caesium, $FluidStorageKeys.LIQUID);
    //Francium
    GTMaterials.Francium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Francium, $FluidStorageKeys.LIQUID);
    //Radium
    GTMaterials.Radium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Radium, $FluidStorageKeys.LIQUID);
    //Actinium
    GTMaterials.Actinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Actinium, $FluidStorageKeys.LIQUID);

    //Zirconium
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Zirconium, $FluidStorageKeys.LIQUID);

    //Hafnium
    GTMaterials.Hafnium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Hafnium, $FluidStorageKeys.LIQUID);

    //Technetium
    GTMaterials.Technetium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Technetium, $FluidStorageKeys.LIQUID);

    //Rhenium
    GTMaterials.Rhenium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Rhenium, $FluidStorageKeys.LIQUID);

    //Bohrium
    GTMaterials.Bohrium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Bohrium, $FluidStorageKeys.LIQUID);

    //Rubidium
    GTMaterials.Rubidium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Rubidium, $FluidStorageKeys.LIQUID);

    // ALL ABOVE WORK


    //Rutherfordium
    GTMaterials.Rutherfordium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Rutherfordium, $FluidStorageKeys.LIQUID);
    //Dubnium
    GTMaterials.Dubnium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Dubnium, $FluidStorageKeys.LIQUID);
    //Seaborgium
    GTMaterials.Seaborgium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Seaborgium, $FluidStorageKeys.LIQUID);
    //Hassium
    GTMaterials.Hassium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Hassium, $FluidStorageKeys.LIQUID);
    //Praseodymium
    GTMaterials.Praseodymium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Praseodymium, $FluidStorageKeys.LIQUID);
    //Protactinium
    GTMaterials.Protactinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Protactinium, $FluidStorageKeys.LIQUID);
    //Promethium
    GTMaterials.Promethium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Promethium, $FluidStorageKeys.LIQUID);
    //Neptunium
    GTMaterials.Neptunium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.LIQUID);
    //Meitnerium
    GTMaterials.Meitnerium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Meitnerium, $FluidStorageKeys.LIQUID);
    //Roentgenium
    GTMaterials.Roentgenium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Roentgenium, $FluidStorageKeys.LIQUID);
    //Copernicium
    GTMaterials.Copernicium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Copernicium, $FluidStorageKeys.LIQUID);
    //Thallium
    GTMaterials.Thallium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Thallium, $FluidStorageKeys.LIQUID);
    //Nihonium
    GTMaterials.Nihonium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Nihonium, $FluidStorageKeys.LIQUID);
    //Flerovium
    GTMaterials.Flerovium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Flerovium, $FluidStorageKeys.LIQUID);
    //Moscovium
    GTMaterials.Moscovium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Moscovium, $FluidStorageKeys.LIQUID);
    //Gadolinium
    GTMaterials.Gadolinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Gadolinium, $FluidStorageKeys.LIQUID);
    //Curium
    GTMaterials.Curium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Curium, $FluidStorageKeys.LIQUID);
    //Terbium
    GTMaterials.Terbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Terbium, $FluidStorageKeys.LIQUID);
    //Berkelium
    GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Berkelium, $FluidStorageKeys.LIQUID);
    //Dysprosium
    GTMaterials.Dysprosium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Dysprosium, $FluidStorageKeys.LIQUID);

    //NEW R3

    // Californium
    GTMaterials.Californium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID);
    // Einsteinium
    GTMaterials.Einsteinium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Einsteinium, $FluidStorageKeys.LIQUID);
    // Fermium
    GTMaterials.Fermium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Fermium, $FluidStorageKeys.LIQUID);
    // Mendelevium
    GTMaterials.Mendelevium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Mendelevium, $FluidStorageKeys.LIQUID);
    // Nobelium
    GTMaterials.Nobelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Nobelium, $FluidStorageKeys.LIQUID);
    // Lawrencium
    GTMaterials.Lawrencium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Lawrencium, $FluidStorageKeys.LIQUID);
    // Holmium
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Holmium, $FluidStorageKeys.LIQUID);
    // Erbium
    GTMaterials.Erbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Erbium, $FluidStorageKeys.LIQUID);
    // Thulium
    GTMaterials.Thulium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Thulium, $FluidStorageKeys.LIQUID);
    // Ytterbium
    GTMaterials.Ytterbium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Ytterbium, $FluidStorageKeys.LIQUID);
    // Germanium
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Germanium, $FluidStorageKeys.LIQUID);
    // Livermorium
    GTMaterials.Livermorium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Livermorium, $FluidStorageKeys.LIQUID);
    // Tennessine
    GTMaterials.Tennessine.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Tennessine, $FluidStorageKeys.LIQUID);
    // Oganesson
    GTMaterials.Oganesson.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.LIQUID);
    // Polonium
    GTMaterials.Polonium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Polonium, $FluidStorageKeys.LIQUID);
    // Astatine
    GTMaterials.Astatine.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Astatine, $FluidStorageKeys.LIQUID);
    // Tellurium
    GTMaterials.Tellurium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Tellurium, $FluidStorageKeys.LIQUID);
    //
    //GTMaterials.Iodine.setProperty(PropertyKey.INGOT, new $IngotProperty());
    //GTMaterials.Iodine.setProperty(PropertyKey.FLUID, new $FluidProperty());
    //
    // GTMaterials.Bromine.setProperty(PropertyKey.INGOT, new $IngotProperty());
    // GTMaterials.Bromine.setProperty(PropertyKey.FLUID, new $FluidProperty());
    // Selenium
    GTMaterials.Selenium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Selenium, $FluidStorageKeys.LIQUID);

    addFluid(GTMaterials.Salt, $FluidStorageKeys.LIQUID);
})



let addFluid = (mat, key) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder())
    mat.setProperty(PropertyKey.FLUID, prop)
}

