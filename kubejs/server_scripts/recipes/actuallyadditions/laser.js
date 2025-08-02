ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/laser/';

    const recipes = [
        {
            ingredient: { item: 'minecraft:nether_wart' },
            result: { id: 'oritech:wither_crop_block' },
            energy: 50000,
            id: `${id_prefix}wither_crop_block`
        },
        {
            ingredient: { item: 'minecraft:allium' },
            result: { id: 'minecraft:wither_rose' },
            energy: 50000,
            id: `${id_prefix}wither_rose`
        },
        {
            ingredient: { item: 'minecraft:mud' },
            result: { id: 'minecraft:moss_block' },
            energy: 500,
            id: `${id_prefix}moss_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:laser';
        event.custom(recipe).id(recipe.id);
    });
});
