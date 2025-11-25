ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/shaped/';

    const recipes = [
        {
            output: 'malum:spirit_altar',
            pattern: ['ABA', 'ACA', 'AAA'],
            key: {
                A: '#malum:runewood_planks',
                B: '#c:ingots/hallowed_gold',
                C: 'aether:life_shard'
            },
            id: `${id_prefix}spirit_altar`
        },
        {
            output: 'malum:spirit_jar',
            pattern: ['ABA', 'ACA', 'AAA'],
            key: {
                A: '#c:glass_blocks/colorless',
                B: '#c:ingots/hallowed_gold',
                C: '#c:essences/abjuration'
            },
            id: `${id_prefix}spirit_jar`
        },
        {
            output: 'malum:mimicry_relay',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#c:essences/alchemical_calx',
                B: '#c:nuggets/hallowed_gold',
                C: '#c:gems/empowered_restonia'
            },
            id: `${id_prefix}mimicry_relay`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
