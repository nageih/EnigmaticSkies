NativeEvents.onEvent('dev.ftb.mods.ftbteambases.events.neoforge.TeamBasesPortalEvent', (event) => {
    try {
        if (!event.entity.isPlayer()) return;
        let server = event.entity.getServer();
        let pData = server.persistentData;
        let start_count = pData.getInt('start_count');

        if (start_count <= 1) {
            if (server.isDedicated()) {
                event.cancelWithReason(Text.translate('portal.enigmatica.warning.multiplayer').red().bold());
            } else {
                event.cancelWithReason(Text.translate('portal.enigmatica.warning.singleplayer').red().bold());
            }
        }
    } catch (e) {
        console.error(e);
    }
});
