ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/shapeless/';

    const recipes = [
        {
            output: 'extended_industrialization:tesla_receiver',
            inputs: ['extended_industrialization:tesla_coil'],
            id: `${id_prefix}tesla_receiver`
        },
        {
            output: 'extended_industrialization:tesla_coil',
            inputs: ['extended_industrialization:tesla_receiver'],
            id: `${id_prefix}tesla_coil`
        },
        {
            output: 'extended_industrialization:lethal_tesla_coil',
            inputs: ['extended_industrialization:tesla_coil', 'ars_elemental:ritual_tesla_coil'],
            id: `${id_prefix}lethal_tesla_coil`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
