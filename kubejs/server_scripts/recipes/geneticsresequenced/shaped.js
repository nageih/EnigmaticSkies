ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:geneticsresequenced/shaped/';

    const recipes = [
        {
            output: `geneticsresequenced:cell_analyzer`,
            pattern: ['AAA', 'ABA', 'CDC'],
            key: {
                A: `#c:plates/plastic`,
                B: 'create:content_observer',
                C: '#c:gears/steel',
                D: 'oritech:flux_gate'
            },
            id: `${id_prefix}cell_analyzer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
