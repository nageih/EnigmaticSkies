// // https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    const tables = [
        'minecraft:entities/goat',
        'minecraft:entities/horse',
        'minecraft:entities/panda',
        'minecraft:entities/cow',
        'minecraft:entities/llama',
        'minecraft:entities/mule',
        'minecraft:entities/pig',
        'minecraft:entities/hoglin',
        'minecraft:entities/donkey',
        'minecraft:entities/sheep',

        'aether:entities/flying_cow',
        'aether:entities/phyg',
        'aether:entities/sheepuff'
    ];
    tables.forEach((table) => {
        event.getLootTable(table).createPool((pool) => {
            pool.addEntry(LootEntry.of('minecraft:bone').setCount([0, 2]).applyEnchantmentBonus([0, 1]));
        });
    });
});
