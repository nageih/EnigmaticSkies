ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/atomic_forge/';
    const recipes = [
        {
            results: [{ id: 'minecraft:emerald', count: 2 }],
            ingredients: [{ tag: 'c:dusts/bauxite' }, { tag: 'c:dusts/prismarine' }, { tag: 'c:dusts/prismarine' }],
            time: 5,
            id: `${id_prefix}emerald`
        },
        {
            results: [{ id: 'oritech:duratium_ingot', count: 1 }],
            ingredients: [
                { tag: 'c:ingots/end_steel' },
                { item: 'oritech:reinforced_carbon_sheet' },
                { item: 'oritech:reinforced_carbon_sheet' }
            ],
            time: 20,
            id: `${id_prefix}duratium_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:atomic_forge';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
