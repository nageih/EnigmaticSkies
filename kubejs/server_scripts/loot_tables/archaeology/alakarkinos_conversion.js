//priority: 1000
LootJS.lootTables((event) => {
    const types = [
        { id: 'melon_ball', rolls: [6, 12] },
        { id: 'boggy_dorodango', rolls: [2, 5] },
        { id: 'briny_dorodango', rolls: [2, 5] },
        { id: 'silty_dorodango', rolls: [2, 5] },
        { id: 'volcanic_dorodango', rolls: [2, 5] },
        { id: 'cloudy_dorodango', rolls: [2, 5] },
        { id: 'sulfurous_dorodango', rolls: [2, 5] },
        { id: 'reverberating_dorodango', rolls: [2, 5] }
    ];

    types.forEach((type) => {
        event.create(`enigmatica:archaeology/${type.id}`, LootType.ARCHAEOLOGY).createPool((pool) => {
            pool.rolls(type.rolls);
            pool.addEntry(LootEntry.of(`enigmatica:${type.id}`));
        });

        type.rolls = type.rolls.map((r) => {
            return r * 6;
        });

        event.create(`enigmatica:archaeology/brilliant_${type.id}`, LootType.ARCHAEOLOGY).createPool((pool) => {
            pool.rolls(type.rolls);
            pool.addEntry(LootEntry.of(`enigmatica:${type.id}`));
        });
    });
});
