ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:geneticsresequenced/shaped/';

    const recipes = [
        {
            output: `geneticsresequenced:cell_analyzer`,
            pattern: ['AAA', 'ABA', 'CDC'],
            key: {
                A: `#c:plates/plastic`,
                B: 'enderio:ensouled_chassis',
                C: 'enderio:z_logic_controller',
                D: '#c:gears/energized',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}cell_analyzer`
        },
        {
            output: `geneticsresequenced:dna_extractor`,
            pattern: ['ABA', 'ACA', 'DED'],
            key: {
                A: `#c:plates/plastic`,
                B: 'enderio:ensouled_chassis',
                C: 'create:mechanical_mixer',
                D: '#c:gears/energized',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}dna_extractor`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
