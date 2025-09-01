ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/smelting/';
    const recipes = [
        {
            output: 'replication:replica_block',
            input: `#c:storage_blocks/raw_replica`,
            xp: 6.3,
            duration: 90,
            id: `${id_prefix}replica_block_from_raw_block`
        },
        {
            output: 'aether:holystone',
            input: `aether:icestone`,
            xp: 0.1,
            duration: 200,
            id: `${id_prefix}holystone`
        },
        {
            output: 'ars_nouveau:source_berry_roll',
            input: `enigmatica:source_berry_roll_dough`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}source_berry_roll`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);
    });
});
