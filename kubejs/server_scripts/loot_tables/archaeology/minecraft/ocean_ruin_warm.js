// https://docs.almostreliable.com/lootjs/
LootJS.lootTables((event) => {
    event.create('enigmatica:archaeology/warm_ocean').createPool((pool) => {
        pool.addEntry(LootEntry.of('enigmatica:archaeology/warm_ocean/minerals').setCount([9, 15]));
        pool.addEntry(LootEntry.of('enigmatica:archaeology/warm_ocean/organic').setCount([3, 5]));
    });

    event.create('enigmatica:archaeology/warm_ocean/minerals').createPool((pool) => {
        pool.addEntry(LootEntry.of('createsifter:raw_zinc_piece').setCount([3, 5]));
        pool.addEntry(LootEntry.of('createsifter:raw_tin_piece').setCount([3, 5]));
        pool.addEntry(LootEntry.of('ae2:certus_quartz_dust').setCount([1, 2]));
        pool.addEntry(LootEntry.of('minecraft:prismarine_shard').setCount([1, 2]));
        pool.addEntry(LootEntry.of('minecraft:prismarine_crystals').setCount([1, 2]));
    });

    event.create('enigmatica:archaeology/warm_ocean/organic').createPool((pool) => {
        pool.addEntry(LootEntry.of('minecraft:ink_sac').setCount([1, 2]));
        pool.addEntry(LootEntry.of('minecraft:glow_ink_sac').setCount([1, 2]));
    });
});
