ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/shapeless/';

    const recipes = [
        {
            output: 'modern_industrialization:steel_centrifuge',
            inputs: ['modern_industrialization:bronze_centrifuge', 'modern_industrialization:steel_upgrade'],
            id: `${id_prefix}steel_centrifuge`
        },
        {
            output: 'modern_industrialization:steel_alluvial_trommel',
            inputs: ['modern_industrialization:bronze_alluvial_trommel', 'modern_industrialization:steel_upgrade'],
            id: `${id_prefix}steel_alluvial_trommel`
        },
        {
            output: 'modern_industrialization:bronze_boiler',
            inputs: ['mi_tweaks:dilapidated_boiler'],
            id: `${id_prefix}bronze_boiler_trade`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
