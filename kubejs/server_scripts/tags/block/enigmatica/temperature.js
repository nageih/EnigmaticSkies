ServerEvents.tags('block', (event) => {
    let additions = {
        hot: ['minecraft:lava', 'minecraft:fire', 'minecraft:lava_cauldron', 'minecraft:magma_block'],
        warm_lit: [
            'theurgy:pyromantic_brazier',
            'theurgy:calcination_oven',
            'aether:altar',
            'minecraft:furnace',
            'minecraft:blast_furnace',
            'supplementaries:fire_pit',
            'oritech:powered_furnace_block'
        ],
        cool_lit: ['aether:freezer']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`enigmatica:temperature/${tag}`).add(additions[tag]);
    });
});
