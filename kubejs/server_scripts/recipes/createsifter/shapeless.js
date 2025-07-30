ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:createsofter/shapeless/';

    const recipes = [
        {
            output: '4x ars_nouveau:sourcestone',
            inputs: [
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone',
                'ars_nouveau:smooth_sourcestone'
            ],
            id: `ars_nouveau:smooth_sourcestone_to_sourcestone`
        }
    ];

    const materials = [
        'copper',
        'gold',
        'iron',
        'zinc',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'lead',
        'uranium',
        'nickel'
    ];

    materials.forEach((material) => {
        recipes.push({
            output: AlmostUnified.getTagTargetItem(`c:raw_materials/${material}`).getId(),
            inputs: [
                `createsifter:raw_${material}_piece`,
                `createsifter:raw_${material}_piece`,
                `createsifter:raw_${material}_piece`,
                `createsifter:raw_${material}_piece`
            ],
            id: `createsifter:shapless/raw_${material}_piece`
        });
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
