ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/shapeless/';

    const recipes = [
        {
            output: 'oritech:motor',
            inputs: ['ars_nouveau:blank_parchment', 'enigmatica:source_ink'],
            id: `${id_prefix}motor`
        },
        {
            output: 'oritech:enderic_compound',
            inputs: [
                Ingredient.of(['#c:buckets/water', 'theurgy:crystallized_water']),
                '#c:dusts/grains_of_the_end',
                '#c:dusts/grains_of_infinity',
                '#c:dusts/otherworld_wood'
            ],
            id: `${id_prefix}enderic_compound`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
