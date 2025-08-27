ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            name: 'warm_stackables',
            item: {
                items: [
                    '#c:rods/blaze',
                    '#c:dusts/blaze',
                    '#chipped:magma_blocks',
                    'minecraft:magma_block',
                    'minecraft:magma_cream'
                ]
            },
            slots: [{ min: 0, max: 44 }],
            temperature: 0.2 / 64,
            trait: 'core'
        },
        {
            name: 'hot_unstackables',
            item: {
                items: ['enderio:fire_water_bucket', 'minecraft:lava_bucket']
            },
            slots: [{ min: 0, max: 44 }],
            temperature: 0.5,
            trait: 'core'
        },
        {
            name: 'cold_stackables',
            item: {
                items: [
                    '#chipped:snow_block',
                    '#chipped:ice',
                    '#chisel:ice',
                    '#chipped:packed_ice',
                    '#chipped:blue_ice',
                    'minecraft:snowball',
                    'aether:icestone'
                ]
            },
            slots: [{ min: 0, max: 44 }],
            temperature: -0.2 / 64,
            trait: 'core'
        },
        {
            name: 'cold_unstackables',
            item: {
                items: ['justdirethings:time_fluid_bucket', 'starbunclemania:source_fluid_bucket']
            },
            slots: [{ min: 0, max: 44 }],
            temperature: -0.2,
            trait: 'core'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:cold_sweat/item/item_temp/${recipe.name}`, recipe);
    });
});
