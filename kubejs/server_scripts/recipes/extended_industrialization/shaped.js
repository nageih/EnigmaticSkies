ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/shaped/';

    const recipes = [
        {
            output: `extended_industrialization:bronze_composter`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:gears/copper`,
                B: 'theurgy:digestion_vat',
                C: `create:propeller`,
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_composter`
        },
        {
            output: `extended_industrialization:steam_farmer`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: `modern_industrialization:bronze_plated_bricks`,
                B: 'create:mechanical_harvester',
                C: `create:mechanical_bearing`,
                D: 'create:precision_mechanism',
                E: `modern_industrialization:bronze_machine_casing_pipe`
            },
            id: `${id_prefix}steam_farmer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
