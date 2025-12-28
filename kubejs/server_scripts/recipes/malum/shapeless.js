ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/shapeless/';

    const recipes = [
        {
            output: 'malum:blazing_quartz',
            inputs: [
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment',
                'malum:blazing_quartz_fragment'
            ],
            id: `${id_prefix}blazing_quartz`
        },
        {
            output: '9x malum:blazing_quartz_fragment',
            inputs: ['malum:blazing_quartz'],
            id: `${id_prefix}blazing_quartz_fragment`
        },
        {
            output: 'malum:cthonic_gold',
            inputs: [
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment',
                'malum:cthonic_gold_fragment'
            ],
            id: `${id_prefix}cthonic_gold`
        },
        {
            output: '9x malum:cthonic_gold_fragment',
            inputs: ['malum:cthonic_gold'],
            id: `${id_prefix}cthonic_gold_fragment`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
