ItemEvents.modification(event => {
    event.modify('gtceu:basic_electronic_circuit', item => {
      item.foodProperties = food => {
          food.hunger(6)
          food.saturation(0.80)
          food.fastToEat(true)
      }
    })
})