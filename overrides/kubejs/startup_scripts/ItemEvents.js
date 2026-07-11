ItemEvents.modification(event => {
    event.modify('gtceu:wrought_iron_ingot', item => {
        item.setMaxStackSize(64)
        item.setFireResistant()
        item.setRarity('uncommon')
    })
    event.modify('minecraft:iron_ingot', item => {
        item.setMaxStackSize(64)
        item.setFireResistant()
        item.setRarity('uncommon')
    })
    event.modify('gtceu:charcoal_dust', item => {
        item.setMaxStackSize(64)
        item.setFireResistant()
        item.setRarity('uncommon')
    })
    event.modify('gtceu:coal_dust', item => {
        item.setMaxStackSize(64)
        item.setFireResistant()
        item.setRarity('uncommon')
    })
})
