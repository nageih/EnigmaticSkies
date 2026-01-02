ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:starbunclemania/shaped/';

    const recipes = [
        {
            output: 'starbunclemania:star_bucket',
            pattern: [' A ', 'ABA', 'CAC'],
            key: {
                A: 'ars_nouveau:magebloom_fiber',
                B: '#c:glass_blocks/cheap',
                C: '#c:nuggets/gold'
            },
            id: `${id_prefix}star_bucket`
        },
        {
            output: 'starbunclemania:star_miner',
            pattern: [' A ', 'ABA', 'CAC'],
            key: {
                A: 'ars_nouveau:magebloom_fiber',
                B: '#c:gems/void',
                C: '#c:nuggets/gold'
            },
            id: `${id_prefix}star_miner`
        },
        {
            output: 'starbunclemania:star_build',
            pattern: [' A ', 'ABA', 'CAC'],
            key: {
                A: 'ars_nouveau:magebloom_fiber',
                B: '#c:gems/palis',
                C: '#c:nuggets/gold'
            },
            id: `${id_prefix}star_build`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        
    });
});
