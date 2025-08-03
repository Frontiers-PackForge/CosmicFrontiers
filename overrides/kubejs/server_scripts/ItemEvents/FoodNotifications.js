ItemEvents.foodEaten(event => {
    event.foodEaten(e => e.player.tell('you ate'))
})