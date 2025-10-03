ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/shapeless/';

    const recipes = [
        {
            output: 'modern_industrialization:steel_assembler',
            inputs: ['modern_industrialization:bronze_assembler', 'modern_industrialization:steel_upgrade'],
            id: `${id_prefix}steel_assembler`
        },
        {
            output: 'modern_industrialization:steel_centrifuge',
            inputs: ['modern_industrialization:bronze_centrifuge', 'modern_industrialization:steel_upgrade'],
            id: `${id_prefix}steel_centrifuge`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
