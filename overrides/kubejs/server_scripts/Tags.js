ServerEvents.tags('item', event => {
    event.add('frontiers:ordinary_coke_oven_logs', '#minecraft:logs_that_burn')
    event.remove('frontiers:ordinary_coke_oven_logs', '#malum:soulwood_logs')
    event.remove('frontiers:ordinary_coke_oven_logs', '#malum:runewood_logs')
    event.remove('frontiers:ordinary_coke_oven_logs', 'occultism:otherworld_log')
})

ServerEvents.tags('block', event => {
    event.add('cosmicfrontiers:runewood_ultimine_group', ['malum:runewood_log', 'malum:exposed_runewood_log'])
    event.add('cosmicfrontiers:soulwood_ultimine_group', ['malum:soulwood_log', 'malum:exposed_soulwood_log'])
})
