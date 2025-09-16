ServerEvents.loaded(event => {
    event.server.gameRules.set("command_block_output", false)
    event.server.gameRules.set("tnt_explosion_drop_decay", false)
    event.server.gameRules.set("reduced_debug_info", false)
    event.server.gameRules.set("do_immediate_respawn", true)
    event.server.gameRules.set("keep_inventory", true)
})
