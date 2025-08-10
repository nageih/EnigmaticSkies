ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_caelum/shaped/';

    const recipes = [
        {
            output: 'ars_caelum:ritual_conjure_island_flourishing',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: '#c:essences/earth',
                B: 'aether:cold_aercloud',
                C: 'ars_nouveau:sourcestone'
            },
            id: 'ars_caelum:ritual_conjure_island_flourishing'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
