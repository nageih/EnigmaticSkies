ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/shaped/';

    const recipes = [
        {
            output: 'malum:spirit_altar',
            pattern: ['ADA', 'BCB', 'AAA'],
            key: {
                A: '#malum:runewood_planks',
                B: 'ars_additions:golden_chain',
                C: 'enderio:ensouled_chassis',
                D: 'ars_nouveau:gold_grate'
            },
            id: `${id_prefix}spirit_altar`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
