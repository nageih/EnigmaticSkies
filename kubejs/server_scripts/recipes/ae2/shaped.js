ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ae2/shaped/';

    const recipes = [
        {
            output: `ae2:interface`,
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: '#c:ingots/compressed_iron',
                B: 'minecraft:glass',
                C: 'ae2:annihilation_core',
                D: 'modern_industrialization:configurable_chest',
                E: 'ae2:formation_core'
            },
            id: `${id_prefix}interface`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
