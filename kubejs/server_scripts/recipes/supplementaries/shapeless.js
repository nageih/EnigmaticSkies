ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:supplementaries/shapeless/';

    const recipes = [
        {
            output: 'supplementaries:statue',
            inputs: [
                'minecraft:clay',
                'minecraft:clay',
                '#c:gems/emeradic',
                'ars_nouveau:blank_parchment',
                'enigmatica:source_ink'
            ],
            id: `${id_prefix}statue`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
