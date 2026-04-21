EntityEvents.spawned((event) => {
    const { entity, server } = event;
    if (!entity.isPlayer()) return;

    let playerName = entity.username;
    let entityData = entity.persistentData;

    if (!entityData.getBoolean('hasEquipment')) {
        entityData.putBoolean('hasEquipment', true);

        let equipment = ['ftbquests:book'];

        equipment.forEach((item) => {
            let command = `give ${playerName} ${item}`;
            server.scheduleInTicks(1, () => {
                server.runCommandSilent(command);
            });
        });
    }
});
