ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shaped/';

    const recipes = [
        {
            output: 'enigmatica:antikythera_mechanism',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:gems/fluxite',
                B: '#c:gears/energized',
                C: 'enderio:ensouled_chassis',
                D: 'ars_technica:calibrated_precision_mechanism'
            },
            id: `${id_prefix}antikythera_mechanism`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
