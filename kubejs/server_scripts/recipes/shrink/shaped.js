ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:shrink/shaped/';

    const recipes = [
        {
            output: `shrink:shrinking_device`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/enori',
                B: 'supplementaries:crystal_display',
                C: '#c:essences/manipulation',
                D: '#c:gems/emerald',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}shrinking_device`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
