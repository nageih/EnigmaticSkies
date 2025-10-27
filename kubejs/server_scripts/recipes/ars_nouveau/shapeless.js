ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/shapeless/';

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
        },
        {
            output: 'ars_nouveau:novice_spell_book[base_color="brown"]',
            inputs: [
                'minecraft:book',
                'aether:skyroot_shovel',
                'aether:skyroot_pickaxe',
                'aether:skyroot_axe',
                'aether:skyroot_sword'
            ],
            id: `${id_prefix}novice_spell_book`
        },
        {
            output: 'ars_nouveau:ritual_cloudshaping',
            inputs: ['ars_nouveau:blue_archwood_log', 'aether:cold_aercloud', 'minecraft:sunflower'],
            id: `${id_prefix}ritual_cloudshaping`
        },
        {
            output: 'ars_nouveau:ritual_moonfall',
            inputs: [
                'ars_nouveau:blue_archwood_log',
                'ars_technica:calibrated_precision_mechanism',
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:end"}]',
                '#c:gems/time'
            ],
            id: `${id_prefix}ritual_moonfall`
        },
        {
            output: 'ars_nouveau:ritual_sunrise',
            inputs: [
                'ars_nouveau:red_archwood_log',
                'ars_technica:calibrated_precision_mechanism',
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]',
                '#c:gems/time'
            ],
            id: `${id_prefix}ritual_sunrise`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
