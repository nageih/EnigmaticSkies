ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/atomic_forge/';
    const recipes = [
        {
            results: [{ id: 'minecraft:emerald', count: 2 }],
            ingredients: [{ tag: 'c:dusts/bauxite' }, { tag: 'c:dusts/prismarine' }, { tag: 'c:dusts/prismarine' }],
            time: 5,
            id: `${id_prefix}emerald`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:atomic_forge';

        event.custom(recipe).id(recipe.id);
    });
});
