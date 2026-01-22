ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/alluvial_trommel/';

    const recipes = [
        {
            item_outputs: { item: 'enigmatica:primordial_mud', amount: 1, probability: 1 / 4 },
            fluid_inputs: { fluid: 'minecraft:water', amount: 4000 },
            item_inputs: { item: 'enigmatica:ocean_essentia', amount: 1, probability: 1 / 25 },
            process_conditions: [
                {
                    type: 'mi_tweaks:nearby_entity',
                    relative: 'all',
                    range: 2,
                    entity: 'aquaculture:box_turtle',
                    count: 1
                }
            ],
            duration: 30,
            eu: 128,
            id: `${id_prefix}primordial_mud`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.duration *= 20;

        recipe.type = 'modern_industrialization:alluvial_trommel';
        event.custom(recipe).id(`${recipe.id}/electric`);
    });
});
