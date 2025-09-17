ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:theurgy/shapeless/';

    const recipes = [
        {
            output: 'theurgy:logistics_item_inserter',
            inputs: ['theurgy:logistics_item_extractor'],
            id: `${id_prefix}logistics_item_inserter`
        },
        {
            output: 'theurgy:logistics_item_extractor',
            inputs: ['theurgy:logistics_item_inserter'],
            id: `${id_prefix}logistics_item_extractor`
        },
        {
            output: 'theurgy:logistics_fluid_inserter',
            inputs: ['theurgy:logistics_fluid_extractor'],
            id: `${id_prefix}logistics_fluid_inserter`
        },
        {
            output: 'theurgy:logistics_fluid_extractor',
            inputs: ['theurgy:logistics_fluid_inserter'],
            id: `${id_prefix}logistics_fluid_extractor`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
