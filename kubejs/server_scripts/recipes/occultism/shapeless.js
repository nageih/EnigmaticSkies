ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:occultism/shapeless/';

    const recipes = [
        {
            output: 'occultism:chalk_void',
            inputs: [
                '#occultism:tools/chalk',
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:end"}]'
            ],
            id: `${id_prefix}chalk_void`
        },
        {
            output: 'occultism:chalk_rainbow',
            inputs: [
                '#occultism:tools/chalk',
                'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]'
            ],
            id: `${id_prefix}chalk_rainbow`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            output: `occultism:chalk_${color == 'yellow' ? 'gold' : color}`,
            inputs: [
                '#c:dusts/otherworld_wood',
                '#c:dusts/otherworld_wood',
                'occultism:crushed_calcite',
                'occultism:crushed_calcite',
                `#c:dyes/${color}`
            ],
            id: `${id_prefix}chalk_${color}`
        });
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
