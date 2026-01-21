ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/canning_machine/';

    const recipes = [
        {
            item_outputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_outputs: [{ fluid: 'minecraft:water', amount: 250 }],
            item_inputs: [
                {
                    type: 'neoforge:components',
                    items: 'minecraft:potion',
                    components: { 'minecraft:potion_contents': { potion: 'minecraft:water' } },
                    amount: 1
                }
            ],
            duration: 5,
            eu: 2,
            id: `${id_prefix}emptying_water_bottle`
        },
        {
            item_outputs: [
                {
                    item: 'minecraft:potion',
                    components: { 'minecraft:potion_contents': { potion: 'minecraft:water' } },
                    amount: 1
                }
            ],
            item_inputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_inputs: [{ fluid: 'minecraft:water', amount: 250 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}filling_water_bottle`
        },

        {
            item_outputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_outputs: [{ fluid: 'modern_industrialization:helium_plasma', amount: 250 }],
            item_inputs: [{ item: 'enigmatica:luminiferous_aether_bottle' }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}emptying_luminiferous_aether_bottle`
        },
        {
            item_outputs: [{ item: 'enigmatica:luminiferous_aether_bottle' }],
            item_inputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_inputs: [{ fluid: 'modern_industrialization:helium_plasma', amount: 250 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}filling_luminiferous_aether_bottle`
        },

        {
            item_outputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_outputs: [{ fluid: 'enigmatica:vapours_of_nyx', amount: 250 }],
            item_inputs: [{ item: 'enigmatica:vapours_of_nyx_bottle' }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}emptying_vapours_of_nyx_bottle`
        },
        {
            item_outputs: [{ item: 'enigmatica:vapours_of_nyx_bottle' }],
            item_inputs: [{ item: 'minecraft:glass_bottle', amount: 1 }],
            fluid_inputs: [{ fluid: 'enigmatica:vapours_of_nyx', amount: 250 }],
            duration: 5,
            eu: 2,
            id: `${id_prefix}filling_vapours_of_nyx_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'extended_industrialization:canning_machine';
        recipe.duration *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
