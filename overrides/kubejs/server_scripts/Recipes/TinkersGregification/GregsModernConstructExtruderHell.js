

/* 
  ///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///
  
                      DO NOT MODIFY THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING
        THERE IS NO SAFETY CHECK FOR IF AN ITEM EXISTS, AND YOU CAN MAKE RECIPES WITH NO OUTPUTS! ! !
  
  ///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///DANGER///
*/



ServerEvents.recipes(event => {

    //Soft Materials - 1m base
    //Hard Materials - 3m base
    //Hard T2 Materials - 4m base
    //High Tier materials - ???

    new Extrusion('cosmiccore', 'neutronite', 3600, 128, event).pickaxe(); //3m Base

})

function Extrusion(modID, materialType, baseDuration, baseEU, event) {
    this.modID = modID;
    this.materialType = materialType;
    this.baseDuration = baseDuration;
    this.baseEU = baseEU;
    this.event = event;
    return this;
}

Extrusion.prototype = {

    pickaxe: function () {
        const { modID, materialType, baseDuration, baseEU, event } = this
            event.recipes.gtceu.extruder(`cosmicfrontierstinkers:${materialType}/pickaxe_extruder`)
                .itemInputs(`2x ${modID}:${materialType}_ingot`)
                .notConsumable('tconstruct:pick_head_cast')
                .itemOutputs(Item.of('tconstruct:pick_head', `{Material:"gm_construct:${materialType}"}`).weakNBT())
                .duration(baseDuration * 1.5)
                .EUt(baseEU);
        return this;
    },


    
    toolRod: function () {
        const { modID, materialType, baseDuration, baseEU, event } = this
            event.recipes.gtceu.extruder(`cosmicfrontierstinkers:${materialType}/pickaxe_extruder`)
                .itemInputs(`1x ${modID}:${materialType}_ingot`)
                .notConsumable('tconstruct:tool_handle_cast')
                .itemOutputs(Item.of('tconstruct:pick_head', `{Material:"gm_construct:${materialType}"}`).weakNBT())
                .duration(baseDuration * 1.5)
                .EUt(baseEU);
        return this;
    }
}