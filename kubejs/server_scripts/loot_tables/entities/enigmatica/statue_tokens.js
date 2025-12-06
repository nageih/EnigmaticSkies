// // https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    const statue_mobs = [
        { name: 'witch', token: 'grief' },
        { name: 'evoker', token: 'euphoria' },
        { name: 'vindicator', token: 'rage' },
        { name: 'pillager', token: 'terror' }
    ];

    statue_mobs.forEach((mob) => {
        event
            .create(`enigmatica:statue_tokens/${mob.name}`)
            .createPool((pool) => {
                pool.addEntry(
                    LootEntry.of(`naturesaura:token_${mob.token}`)
                        .killedByPlayer()
                        .matchAttackerCustom((attacker) => attacker.uuid.toString() != DRYGMY_UUID)
                );
            })
            .createPool((pool) => {
                pool.addEntry(
                    LootEntry.of(`minecraft:emerald`)
                        .setCount([0, 3])
                        .applyEnchantmentBonus([0, 1])
                        .killedByPlayer()
                        .matchAttackerCustom((attacker) => attacker.uuid.toString() != DRYGMY_UUID)
                );
            });
    });
});
