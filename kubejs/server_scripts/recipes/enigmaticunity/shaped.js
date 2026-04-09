ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmaticunity/shaped/';

    const recipes = [
        {
            output: 'enigmaticunity:dim_source_producer',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'naturesaura:field_creator',
                B: 'ars_nouveau:archwood_planks',
                C: 'oritech:flux_gate'
            },
            id: `${id_prefix}dim_source_producer`
        },
        {
            output: 'enigmaticunity:bright_source_producer',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'naturesaura:field_creator',
                B: 'ars_nouveau:archwood_planks',
                C: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}bright_source_producer`
        },
        {
            output: 'enigmaticunity:iridescent_source_producer',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'naturesaura:field_creator',
                B: 'ars_nouveau:archwood_planks',
                C: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}iridescent_source_producer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
