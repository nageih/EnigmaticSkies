//priority: 1000
LootJS.lootTables((event) => {
    const types = [
        { id: 'melon_ball', rolls: [6, 9] },
        { id: 'boggy_dorodango', rolls: [6, 9] },
        { id: 'briny_dorodango', rolls: [6, 9] },
        { id: 'silty_dorodango', rolls: [6, 9] },
        { id: 'volcanic_dorodango', rolls: [6, 9] },
        { id: 'cloudy_dorodango', rolls: [6, 9] },
        { id: 'sulfurous_dorodango', rolls: [6, 9] }
    ];
    types.forEach((type) => {
        event.create(`enigmatica:archaeology/${type.id}`, LootType.ARCHAEOLOGY).createPool((pool) => {
            pool.rolls(type.rolls);
            pool.addEntry(LootEntry.of(`enigmatica:${type.id}`));
        });
    });
});
