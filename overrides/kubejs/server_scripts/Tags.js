ServerEvents.tags('item', event => {
    event.removeAll('frontiers:ordinary_coke_oven_logs')
    event.add('frontiers:ordinary_coke_oven_logs', event.get('minecraft:logs_that_burn').getObjectIds())
    event.remove('frontiers:ordinary_coke_oven_logs', event.get('malum:soulwood_logs').getObjectIds())
    event.remove('frontiers:ordinary_coke_oven_logs', event.get('malum:runewood_logs').getObjectIds())
    event.remove('frontiers:ordinary_coke_oven_logs', event.get('occultism:otherworld_logs').getObjectIds())
})

ServerEvents.tags('block', event => {
    event.add('cosmicfrontiers:runewood_ultimine_group', ['malum:runewood_log', 'malum:exposed_runewood_log'])
    event.add('cosmicfrontiers:soulwood_ultimine_group', ['malum:soulwood_log', 'malum:exposed_soulwood_log'])
})
