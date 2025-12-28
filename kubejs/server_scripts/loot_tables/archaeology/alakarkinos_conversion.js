//priority: 1000
LootJS.lootTables((event) => {
    const types = [
        { id: 'melon_ball', rolls: [8, 16] },
        { id: 'boggy_dorodango', rolls: [4, 8] },
        { id: 'briny_dorodango', rolls: [4, 8] },
        { id: 'silty_dorodango', rolls: [4, 8] },
        { id: 'volcanic_dorodango', rolls: [4, 8] },
        { id: 'cloudy_dorodango', rolls: [4, 8] },
        { id: 'reverberating_dorodango', rolls: [4, 8] }
    ];

    types.forEach((type) => {
        event.create(`enigmatica:archaeology/${type.id}`, LootType.ARCHAEOLOGY).createPool((pool) => {
            pool.rolls(type.rolls);
            pool.addEntry(LootEntry.of(`enigmatica:${type.id}`));
        });

        type.rolls = type.rolls.map((r) => {
            return r * 8;
        });

        event.create(`enigmatica:archaeology/brilliant_${type.id}`, LootType.ARCHAEOLOGY).createPool((pool) => {
            pool.rolls(type.rolls);
            pool.addEntry(LootEntry.of(`enigmatica:${type.id}`));
        });
    });
});
