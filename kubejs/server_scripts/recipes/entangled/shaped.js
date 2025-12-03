ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:entangled/shaped/';

    const recipes = [
        {
            output: `entangled:block`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ender_pearls',
                B: '#c:plates/obsidian',
                C: 'ars_nouveau:archwood_chest'
            },
            id: `${id_prefix}block`
        },
        {
            output: `entangled:item`,
            pattern: [' AB', ' CA', 'C  '],
            key: {
                A: '#c:gems/enori',
                B: '#c:gems/pulsating_crystal',
                C: 'naturesaura:ancient_stick'
            },
            id: `${id_prefix}item`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
