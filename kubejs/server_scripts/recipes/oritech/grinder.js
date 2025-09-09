ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/grinder/';
    const recipes = [
        // {
        //     results: [{ id: 'minecraft:sand', count: 1 }],
        //     ingredients: [{ tag: 'c:gravels' }],
        //     time: 60,
        //     id: `${id_prefix}sand_from_gravel`
        // }
    ];

    colors.forEach((color) => {
        recipes.push({
            results: [
                { id: `minecraft:${color}_dye`, count: 3 },
                { id: `minecraft:${color}_dye`, count: 2 }
            ],
            ingredients: [{ tag: `c:raw_materials/dyes/${color}` }],
            time: 180,
            id: `${id_prefix}${color}_dye`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:grinder';
        event.custom(recipe).id(recipe.id);
    });
});
