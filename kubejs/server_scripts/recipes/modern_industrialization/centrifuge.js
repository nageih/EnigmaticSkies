ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/centrifuge/';

    const recipes = [
        {
            fluid_outputs: [{ fluid: 'actuallyadditions:canola_oil', amount: 160 }],
            item_inputs: [{ item: 'actuallyadditions:canola', amount: 1 }],
            eu: 2,
            duration: 1,
            id: `${id_prefix}canola_oil`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:lava', amount: 1000 }],
            item_inputs: [{ item: 'theurgy:crystallized_lava', amount: 1 }],
            eu: 4,
            duration: 1,
            id: `${id_prefix}lava`
        },
        {
            fluid_outputs: [{ fluid: 'minecraft:water', amount: 1000 }],
            item_inputs: [{ item: 'theurgy:crystallized_water', amount: 1 }],
            eu: 2,
            duration: 1,
            id: `${id_prefix}water`
        },
        {
            item_outputs: [
                { item: 'aquaculture:neptunium_nugget', amount: 6, probability: 1 / 3 },
                { item: 'ae2:certus_quartz_crystal', amount: 3, probability: 1 / 3 },
                { item: 'minecraft:lapis_lazuli', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:oceanic_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            eu: 2,
            duration: 10,
            id: `${id_prefix}oceanic_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'malum:blazing_quartz', amount: 6, probability: 1 / 3 },
                { item: 'modern_industrialization:carbon_dust', amount: 3, probability: 1 / 3 },
                { item: 'minecraft:netherite_scrap', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:volcanic_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            eu: 2,
            duration: 10,
            id: `${id_prefix}volcanic_dorodango_processing`
        },
        {
            item_outputs: [
                { item: 'actuallyadditions:black_quartz', amount: 6, probability: 1 / 3 },
                { item: 'aquaculture:fish_bones', amount: 3, probability: 1 / 3 },
                { item: 'minecraft:rotten_flesh', amount: 1, probability: 1 / 3 }
            ],
            item_inputs: [{ item: 'enigmatica:boggy_dorodango', amount: 1 }],
            fluid_inputs: { fluid: 'theurgy:sal_ammoniac', amount: 10 },
            eu: 2,
            duration: 10,
            id: `${id_prefix}boggy_dorodango_processing`
        },
        {
            fluid_outputs: [{ fluid: 'extended_industrialization:manure', amount: 100 }],
            fluid_inputs: { fluid: 'industrialforegoing:sewage', amount: 1000 },
            eu: 2,
            duration: 10,
            id: `${id_prefix}manure`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:centrifuge';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
