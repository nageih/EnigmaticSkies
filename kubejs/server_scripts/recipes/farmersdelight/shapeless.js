ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmersdelight/shapeless/';

    const recipes = [
        {
            output: '12x farmersdelight:wheat_dough',
            inputs: [
                Ingredient.of(['#c:buckets/water', 'theurgy:crystallized_water']),
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:eggs'
            ],
            id: `${id_prefix}wheat_dough_with_egg`
        },
        {
            output: '6x farmersdelight:wheat_dough',
            inputs: [
                Ingredient.of(['#c:buckets/water', 'theurgy:crystallized_water']),
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat',
                '#c:flours/wheat'
            ],
            id: `${id_prefix}wheat_dough_with_water`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        
    });
});
