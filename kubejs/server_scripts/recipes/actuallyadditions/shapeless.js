ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/shapeless/';

    const recipes = [
        {
            output: '4x actuallyadditions:black_quartz',
            inputs: ['#c:storage_blocks/black_quartz'],
            id: `${id_prefix}black_quartz`
        },
        {
            output: '6x actuallyadditions:rice_dough',
            inputs: [
                Ingredient.of(['theurgy:crystallized_water', '#c:buckets/water']),
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice'
            ],
            id: `${id_prefix}rice_dough`
        },
        {
            output: '12x actuallyadditions:rice_dough',
            inputs: [
                Ingredient.of(['theurgy:crystallized_water', '#c:buckets/water']),
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice',
                'farmersdelight:rice',
                '#c:eggs'
            ],
            id: `${id_prefix}rice_dough_with_egg`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
