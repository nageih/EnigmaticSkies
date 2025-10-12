ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:supplementaries/shaped/';

    const recipes = [
        {
            output: '4x supplementaries:ash_brick',
            pattern: ['AA', 'AA'],
            key: {
                A: 'supplementaries:ash'
            },
            id: `${id_prefix}ash_brick`
        },
        {
            output: 'supplementaries:bellows',
            pattern: ['ABA', 'C C', 'ABA'],
            key: {
                A: '#minecraft:wooden_slabs',
                B: '#c:plates/brass',
                C: '#c:leathers'
            },
            id: `${id_prefix}bellows`
        },
        {
            output: 'supplementaries:cannon',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'pneumaticcraft:cannon_barrel',
                B: 'create:metal_bracket',
                C: 'actuallyadditions:wood_casing'
            },
            id: `${id_prefix}cannon`
        },
        {
            output: '10x supplementaries:cannonball',
            pattern: [' A ', 'AAA', ' A '],
            key: {
                A: 'pneumaticcraft:compressed_stone'
            },
            id: `${id_prefix}cannonball`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
