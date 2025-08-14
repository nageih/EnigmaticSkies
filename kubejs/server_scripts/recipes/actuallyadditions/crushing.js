ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/crushing/';

    const recipes = [
        {
            ingredient: { item: 'minecraft:ink_sac' },
            result: [{ result: { id: 'minecraft:black_dye', count: 2 } }],
            id: `${id_prefix}black_dye`
        },
        {
            ingredient: { item: 'farmersdelight:rice' },
            result: [{ result: { id: 'minecraft:sugar', count: 2 } }],
            id: 'actuallyadditions:crushing/rice'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:crushing';
        event.custom(recipe).id(recipe.id);
    });
});
