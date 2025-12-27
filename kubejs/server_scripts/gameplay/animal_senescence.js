LevelEvents.tick((event) => {
    const { level, server } = event;
    // console.log(level.tickCount);

    level.level.entities.forEach((entity) => {
        if (!entity.isLiving() || entity.isPlayer()) {
            return;
        }
        let ticks_per_day = 24000;
        let max_senescence = ticks_per_day * 10;

        let age = entity.nbt.Age;
        let pData = entity.persistentData;

        // let type = String(entity.entityType).split('.').slice(1).join(':');

        // Check if it matches our tag
        let isSenescent = entity
            .getEntityType()
            .getTags()
            .anyMatch((tag) => tag.location() == 'enigmatica:senescence');

        // Mark the mob for death
        if (isSenescent && age == 0 && !pData.getInt('senescence')) {
            // console.log(`${entity.type} has an age of ${age}. Let it Die.`);
            pData.putInt('senescence', 1);
        }

        if (pData.getInt('senescence')) {
            if (pData.getInt('senescence') > max_senescence) {
                console.log(`${entity.type} has reached the end of it's life. Time to go.`);
                server.scheduleInTicks(2, () => {
                    entity.discard();
                });
            } else {
                pData.putInt('senescence', pData.getInt('senescence') + 1);
            }
        }
    });
});
