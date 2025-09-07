ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:aether/shapeless/';

    const recipes = [
        {
            output: 'aether:skyroot_water_bucket',
            inputs: ['theurgy:crystallized_water', 'aether:skyroot_bucket'],
            id: `${id_prefix}skyroot_water_bucket_from_crystallized_water`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
