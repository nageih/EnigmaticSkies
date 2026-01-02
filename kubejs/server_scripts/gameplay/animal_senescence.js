LevelEvents.tick((event) => {
    const { level, server } = event;

    const ticks_per_day = 24000;
    const max_senescence = ticks_per_day * 10;

    const dimension = String(level.getDimension());
    const execute = `execute in ${dimension} run`;

    // console.log(level.tickCount);

    level.level.entities.forEach((entity) => {
        if (!entity.isLiving() || entity.isPlayer()) {
            return;
        }

        let age = entity.nbt.Age;
        let pData = entity.persistentData;
        let uuid = entity.uuid;

        // let type = String(entity.entityType).split('.').slice(1).join(':');

        // Check if it matches our tag
        let isSenescent = entity
            .getEntityType()
            .getTags()
            .anyMatch((tag) => tag.location() == 'enigmatica:senescence');

        // Mark the mob for senescence system
        if (isSenescent && age == 0 && !pData.getInt('senescence')) {
            pData.putInt('senescence', 1);
            pData.putInt('original_max_health', entity.getMaxHealth());
        }

        if (pData.getInt('senescence')) {
            let senescence = pData.getInt('senescence');
            pData.putInt('senescence', senescence + 1);

            // Only check if effects need to be applied once per minute
            if (senescence % 1200 == 0) {
                let original_max_health = pData.getInt('original_max_health');
                let commands = [];

                if (senescence > max_senescence * 0.5) {
                    // Reduce Health in middle age
                    commands = commands.concat([
                        `data merge entity ${uuid} {attributes:[{id:"minecraft:generic.max_health",base:${
                            original_max_health * 0.5
                        }}]}`
                    ]);
                }

                if (senescence > max_senescence * 0.8) {
                    // Make elderly animals slow, blind, and less healthy
                    commands = commands.concat([
                        `effect give ${uuid} minecraft:slowness infinite 0`,
                        `effect give ${uuid} minecraft:blindness infinite 0`,
                        `data merge entity ${uuid} {attributes:[{id:"minecraft:generic.max_health",base:${
                            original_max_health * 0.2
                        }}]}`
                    ]);
                }

                if (senescence > max_senescence) {
                    // Clear the loot table and ensure the creatures dies by various effects. This should convey better to the player what is happening.
                    // console.log(`${entity.type} has reached the end of it's life (Age: ${senescence}). Time to go.`);
                    commands = commands.concat([
                        `data merge entity ${uuid} {DeathLootTable:"minecraft:empty"}`,
                        `data merge entity ${uuid} {attributes:[{id:"minecraft:generic.max_absorption",base:0}]}`,

                        `effect give ${uuid} malum:grim_certainty infinite 9`,
                        `effect give ${uuid} minecraft:wither infinite 9 true`,
                        `effect give ${uuid} naturesaura:breathless infinite 9 true`,
                        `effect give ${uuid} the_bumblezone:paralyzed infinite 9 true`,
                        `effect give ${uuid} apothic_attributes:sundering infinite 9 true`,
                        `effect give ${uuid} apothic_attributes:grievous infinite 9 true`,
                        `effect clear ${uuid} minecraft:resistance`,

                        `particle minecraft:soul ${entity.x} ${entity.y + 2.5} ${entity.z}`
                    ]);
                }

                if (senescence > max_senescence * 1.5) {
                    // Extra damage if the mob is somehow kept alive this long
                    commands = commands.concat([`effect give ${uuid} minecraft:instant_damage infinite 99 true`]);
                }

                commands.forEach((command) => {
                    server.runCommandSilent(`${execute} ${command}`);
                });

                // Possibly causing a conflict with Cold Sweat
                // server.scheduleInTicks(2, () => {
                //     entity.discard();
                // });
            }
        }
    });
});
