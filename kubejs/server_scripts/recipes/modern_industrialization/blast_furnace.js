ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/blast_furnace/';

    const recipes = [
        {
            item_outputs: { item: 'modern_industrialization:steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'c:blaze_ember', amount: 100 }],
            item_inputs: { tag: 'c:ingots/iron', amount: 1 },
            duration: 20,
            eu: 2,
            id: `${id_prefix}steel`
        },
        {
            item_outputs: { item: 'create:andesite_alloy', amount: 4 },
            fluid_inputs: [{ tag: 'theurgy:sal_ammoniac', amount: 40 }],
            item_inputs: [
                { tag: 'c:dusts/sky_stone', amount: 4 },
                { item: 'minecraft:andesite', amount: 1 }
            ],
            duration: 40,
            eu: 1,
            id: `${id_prefix}andesite_alloy`
        },
        {
            item_outputs: { item: 'create:andesite_alloy', amount: 1 },
            fluid_inputs: [{ tag: 'theurgy:sal_ammoniac', amount: 10 }],
            item_inputs: [
                { tag: 'c:dusts/sky_stone', amount: 1 },
                { item: 'createsifter:andesite_pebble', amount: 1 }
            ],
            duration: 10,
            eu: 1,
            id: `${id_prefix}andesite_alloy_from_pebble`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:blast_furnace';
        recipe.duration = recipe.duration * 20;
        event.custom(recipe).id(recipe.id);
    });
});
