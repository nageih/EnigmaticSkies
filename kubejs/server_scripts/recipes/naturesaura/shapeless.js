ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/shapeless/';

    const recipes = [
        {
            output: '8x naturesaura:effect_powder[naturesaura:effect_powder_data={effect:"naturesaura:animal"}]',
            inputs: [
                '#c:crops/rice',
                'aether:enchanted_berry',
                'aether:enchanted_berry',
                'aether:enchanted_berry',
                'arsdelight:mendosteen_jelly',
                'supplementaries:lumisene_bottle',
                'supplementaries:lumisene_bottle'
            ],
            id: `${id_prefix}powder_of_fertility`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
