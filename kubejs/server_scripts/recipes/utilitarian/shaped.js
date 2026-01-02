ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:utilitarian/shaped/';

    const recipes = [
        {
            output: `2x utilitarian:fluid_hopper`,
            pattern: ['ABA', 'ACA', ' A '],
            key: {
                A: '#c:plates/steel',
                B: '#c:dyes/white',
                C: '#c:buckets/empty'
            },
            id: `${id_prefix}fluid_hopper`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
