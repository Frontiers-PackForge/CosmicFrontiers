ServerEvents.recipes(event => {
event.custom({
    "type": "paraglider:statue_bargain",
    "bargainType": "paraglider:goddess_statue",
    "demands": {
      "items": [
        {
          "ingredient": {
            "item": "paraglider:spirit_orb"
          },
          "quantity": 4
        }
      ]
    },
    "offers": {
      "items": [
        {
          "ingredient": {
            "item": "skilltree:wisdom_scroll"
          },
          "quantity": 1
        }
      ]
    }
  })
})