ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/shapeless/';

    const recipes = [
        {
            output: 'create:purple_seat',
            inputs: ['ars_nouveau:magebloom_block', '#minecraft:wooden_slabs'],
            id: `${id_prefix}purple_seat`
        },
        {
            output: 'create:pulp',
            inputs: [
                '#create:pulpifiable',
                '#create:pulpifiable',
                '#create:pulpifiable',
                '#create:pulpifiable',
                Ingredient.of(['#c:buckets/water', 'theurgy:crystallized_water'])
            ],
            id: `${id_prefix}pulp`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
