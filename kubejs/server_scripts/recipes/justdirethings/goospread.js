ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:justdirethings/goospread/';

    const recipes = [
        // Tier 1
        {
            output: {
                Name: 'actuallyadditions:enori_crystal_block',
                Properties: { facing: 'north' }
            },
            input: { Name: 'create:andesite_alloy_block' },
            tierRequirement: 1,
            id: `${id_prefix}enori_crystal_block`
        },
        {
            output: {
                Name: 'actuallyadditions:restonia_crystal_block',
                Properties: { facing: 'north' }
            },
            input: { Name: 'minecraft:terracotta' },
            tierRequirement: 1,
            id: `${id_prefix}restonia_crystal_block`
        },
        {
            output: {
                Name: 'actuallyadditions:emeradic_crystal_block',
                Properties: { facing: 'north' }
            },
            input: { Name: 'minecraft:slime_block' },
            tierRequirement: 1,
            id: `${id_prefix}emeradic_crystal_block`
        },
        {
            output: {
                Name: 'actuallyadditions:void_crystal_block',
                Properties: { facing: 'north' }
            },
            input: { Name: 'actuallyadditions:black_quartz_block' },
            tierRequirement: 1,
            id: `${id_prefix}void_crystal_block`
        },
        {
            output: {
                Name: 'actuallyadditions:palis_crystal_block',
                Properties: { facing: 'north' }
            },
            input: { Name: 'minecraft:blue_ice' },
            tierRequirement: 1,
            id: `${id_prefix}palis_crystal_block`
        },

        // Tier 2

        {
            output: {
                Name: 'actuallyadditions:diamatine_crystal_block',
                Properties: { facing: 'north' }
            },
            input: { Name: 'minecraft:prismarine_bricks' },
            tierRequirement: 2,
            id: `${id_prefix}diamatine_crystal_block`
        },
        {
            output: {
                Name: 'justdirethings:raw_coal_t2_ore',
                Properties: { facing: 'north' }
            },
            input: { Name: 'malum:block_of_blazing_quartz' },
            tierRequirement: 2,
            id: `${id_prefix}raw_coal_t2_ore`
        }

        // Tier 3
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'justdirethings:goospread';
        recipe.craftingDuration = recipe.tierRequirement <= 2 ? 2400 : 4800;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
