ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/shapeless/';

    const recipes = [
        {
            output: 'enderio:monster_token',
            inputs: ['enderio:soularium_grinding_ball', 'malum:cursed_sap'],
            id: `${id_prefix}monster_token`
        },
        {
            output: 'enderio:animal_token',
            inputs: ['enderio:soularium_grinding_ball', 'malum:runic_sap'],
            id: `${id_prefix}animal_token`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
