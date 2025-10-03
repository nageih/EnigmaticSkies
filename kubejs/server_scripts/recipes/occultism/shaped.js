ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/shaped/';

    const recipes = [
        {
            output: 'occultism:sacrificial_bowl',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:dyes/white',
                B: 'modern_industrialization:copper_ring',
                C: 'handcrafted:terracotta_bowl'
            },
            id: `${id_prefix}sacrificial_bowl`
        },
        {
            output: 'occultism:dark_sacrificial_bowl',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:dyes/black',
                B: 'modern_industrialization:copper_ring',
                C: 'handcrafted:terracotta_bowl'
            },
            id: `${id_prefix}dark_sacrificial_bowl`
        },
        {
            output: 'occultism:iesnium_sacrificial_bowl',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:ingots/iesnium',
                B: 'occultism:sacrificial_bowl'
            },
            id: `${id_prefix}iesnium_sacrificial_bowl`
        },
        {
            output: 'occultism:dark_iesnium_sacrificial_bowl',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:ingots/iesnium',
                B: 'occultism:dark_sacrificial_bowl'
            },
            id: `${id_prefix}dark_iesnium_sacrificial_bowl`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
