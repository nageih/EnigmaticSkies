ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/kiln/';

    const recipes = [
        {
            item_outputs: { item: 'modern_industrialization:steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'c:blaze_ember', amount: 100 }],
            item_inputs: { tag: 'c:ingots/iron', amount: 1 },
            duration: 20,
            eu: 16,
            id: `${id_prefix}steel_ingot`
        },
        {
            item_outputs: { item: 'create:andesite_alloy', amount: 4 },
            item_inputs: [
                { tag: 'c:dusts/sky_stone', amount: 4 },
                { item: 'minecraft:andesite', amount: 1 }
            ],
            duration: 40,
            eu: 2,
            id: `${id_prefix}andesite_alloy`
        },
        {
            item_outputs: { item: 'create:andesite_alloy', amount: 1 },
            item_inputs: [
                { tag: 'c:dusts/sky_stone', amount: 1 },
                { item: 'enigmatica:andesite_pebble', amount: 1 }
            ],
            duration: 10,
            eu: 2,
            id: `${id_prefix}andesite_alloy_from_pebble`
        },
        {
            item_outputs: { item: 'ae2:quartz_fiber', amount: 3 },
            fluid_inputs: [{ tag: 'c:mineral_slurry', amount: 50 }],
            item_inputs: [
                { tag: 'c:gems/amethyst', amount: 6 },
                { tag: 'c:dusts/certus_quartz', amount: 3 }
            ],
            duration: 5,
            eu: 16,
            id: `${id_prefix}quartz_fiber`
        },
        {
            item_outputs: { item: 'enderio:dark_steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'enderio:solar_panel_dark', amount: 250 }],
            item_inputs: [
                { tag: 'c:ingots/steel', amount: 1 },
                { tag: 'c:dusts/grains_of_infinity', amount: 8 }
            ],
            duration: 20,
            eu: 32,
            id: `${id_prefix}dark_steel_ingot`
        },
        {
            item_outputs: { item: 'naturesaura:sky_ingot', amount: 1 },
            fluid_inputs: [{ fluid: 'modern_industrialization:liquid_air', amount: 1000 }],
            item_inputs: [
                { tag: 'c:ingots/stainless_steel', amount: 1 },
                { tag: 'aether:gems/zanite', amount: 1 }
            ],
            duration: 20,
            eu: 64,
            id: `${id_prefix}sky_ingot`
        },
        {
            item_outputs: { item: 'enderio:end_steel_ingot', amount: 1 },
            fluid_inputs: [{ tag: 'c:voidflame', amount: 250 }],
            item_inputs: [
                { tag: 'c:ingots/stainless_steel', amount: 1 },
                { tag: 'c:dusts/grains_of_the_end', amount: 8 }
            ],
            duration: 20,
            eu: 64,
            id: `${id_prefix}end_steel_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.duration *= 20;

        if (recipe.eu <= 4) {
            recipe.type = 'modern_industrialization:steam_kiln';
            event.custom(recipe).id(`${recipe.id}/steam`);

            if (debug) console.log(`${recipe.id}/steam`);
        }

        recipe.type = 'modern_industrialization:electric_kiln';
        event.custom(recipe).id(`${recipe.id}/electric`);

        if (debug) console.log(`${recipe.id}/electric`);
    });
});
