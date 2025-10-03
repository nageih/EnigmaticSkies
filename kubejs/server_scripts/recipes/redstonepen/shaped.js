ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:redstonepen/shaped/';

    const recipes = [
        {
            output: 'redstonepen:control_box',
            pattern: ['ABA', 'CFD', 'AEA'],
            key: {
                A: 'naturesaura:infused_slab',
                B: '#c:essences/fire',
                C: '#c:essences/earth',
                D: '#c:essences/water',
                E: '#c:essences/air',
                F: 'modern_industrialization:analog_circuit'
            },
            id: `${id_prefix}control_box`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
