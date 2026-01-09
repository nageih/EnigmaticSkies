ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:rep_ae2_bridge/shaped/';

    const recipes = [
        {
            output: `rep_ae2_bridge:rep_ae2_bridge`,
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: '#c:plates/silicon',
                B: 'ae2:interface',
                C: 'ae2:controller',
                D: 'ae2:pattern_provider'
            },
            id: `${id_prefix}rep_ae2_bridge`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
