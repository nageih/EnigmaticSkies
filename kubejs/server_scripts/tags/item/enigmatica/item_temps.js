ServerEvents.tags('item', (event) => {
    let additions = {
        warm_stackables: [
            '#c:rods/blaze',
            '#c:dusts/blaze',
            '#chipped:magma_blocks',
            'minecraft:magma_block',
            'minecraft:magma_cream'
        ],
        hot_unstackables: [
            'enderio:fire_water_bucket',
            'minecraft:lava_bucket',
            'oritech:still_sheol_fire_bucket',
            'oritech:still_strange_matter_bucket',
            'enderio:liquid_sunshine_bucket'
        ],
        cold_stackables: [
            '#c:rods/breeze',
            '#chipped:snow_block',
            '#chipped:ice',
            '#chisel:ice',
            '#chipped:packed_ice',
            '#chipped:blue_ice',
            '#aether:aerclouds',
            'minecraft:snowball',
            'minecraft:wind_charge',
            'aether:icestone'
        ],
        cold_unstackables: [
            'justdirethings:time_fluid_bucket',
            'starbunclemania:source_fluid_bucket',
            'sauce:source_fluid_bucket',
            'industrialforegoing:ether_gas_bucket',
            'enderio:liquid_darkness_bucket'
        ]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`enigmatica:${tag}`).add(additions[tag]);
    });
});
