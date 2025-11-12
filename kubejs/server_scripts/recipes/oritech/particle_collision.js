ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/particle_collision/';
    const recipes = [
        {
            results: [{ id: 'ae2:singularity', count: 1 }],
            ingredients: [{ item: 'oritech:overcharged_crystal' }, { item: 'ae2:matter_ball' }],
            time: 15000,
            id: `${id_prefix}singularity`
        },
        {
            results: [{ id: 'minecraft:crying_obsidian', count: 1 }],
            ingredients: [{ tag: 'c:nuggets/neptunium' }, { item: 'minecraft:obsidian' }],
            time: 500,
            id: `${id_prefix}crying_obsidian`
        },
        {
            results: [{ id: 'minecraft:chorus_fruit', count: 1 }],
            ingredients: [{ tag: 'c:dusts/echo' }, { item: 'aether:enchanted_berry' }],
            time: 500,
            id: `${id_prefix}chorus_fruit`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:particle_collision';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
