ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sophisticatedbackpacks/shapeless/';

    const recipes = [
        {
            output: 'sophisticatedbackpacks:magnet_upgrade',
            inputs: ['sophisticatedbackpacks:pickup_upgrade', 'simplemagnets:basicmagnet'],
            id: `${id_prefix}magnet_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
