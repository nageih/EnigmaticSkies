ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:farmersdelight/shapeless/';

    const recipes = [
        {
            output: '3x farmersdelight:wheat_dough',
            inputs: ['#c:flours/wheat', '#c:flours/wheat', '#c:flours/wheat', '#c:eggs'],
            id: `${id_prefix}wheat_dough`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
