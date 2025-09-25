ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/shaped/';

    const recipes = [
        {
            output: `extended_industrialization:bronze_composter`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:gears/copper`,
                B: `minecraft:composter`,
                C: `create:propeller`,
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_composter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
