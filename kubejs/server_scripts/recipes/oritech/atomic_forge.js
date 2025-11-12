ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/atomic_forge/';
    const recipes = [
        {
            results: [{ id: 'oritech:duratium_ingot', count: 1 }],
            ingredients: [
                { tag: 'c:ingots/end_steel' },
                { item: 'oritech:reinforced_carbon_sheet' },
                { item: 'oritech:reinforced_carbon_sheet' }
            ],
            time: 20,
            id: `${id_prefix}duratium_ingot`
        },
        {
            results: [{ id: 'oritech:enderic_compound', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/grains_of_the_end' },
                { item: 'minecraft:echo_shard' },
                { item: 'minecraft:echo_shard' }
            ],
            time: 20,
            id: `${id_prefix}enderic_compound`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:atomic_forge';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
