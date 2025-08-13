ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:trading_floor/shaped/';

    const recipes = [
        {
            output: `trading_floor:trading_depot`,
            pattern: ['A', 'C'],
            key: {
                A: 'create:electron_tube',
                C: 'actuallyadditions:wood_casing'
            },
            id: `${id_prefix}trading_depot`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
