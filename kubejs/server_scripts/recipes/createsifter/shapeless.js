ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:createsifter/shapeless/';

    const recipes = [];

    const materials = ['copper', 'gold', 'iron', 'zinc', 'platinum', 'silver', 'tin', 'lead', 'nickel'];

    materials.forEach((material) => {
        recipes.push({
            output: AlmostUnified.getTagTargetItem(`c:raw_materials/${material}`).getId(),
            inputs: [
                `createsifter:raw_${material}_piece`,
                `createsifter:raw_${material}_piece`,
                `createsifter:raw_${material}_piece`,
                `createsifter:raw_${material}_piece`
            ],
            id: `${id_prefix}raw_${material}_piece`
        });
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
