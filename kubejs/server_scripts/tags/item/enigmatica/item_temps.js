ServerEvents.tags('item', (event) => {
    let additions = {
        warm: [
            '#c:rods/blaze',
            '#c:dusts/blaze',
            '#chipped:magma_blocks',
            'minecraft:magma_block',
            'minecraft:magma_cream'
        ],
        hot: [
            'enigmatica:qulliq_vessel',

            'enderio:fire_water_bucket',
            'minecraft:lava_bucket',
            'oritech:still_sheol_fire_bucket',
            'oritech:still_strange_matter_bucket',
            'enderio:liquid_sunshine_bucket',

            'modern_industrialization:steam_bucket',
            'modern_industrialization:heavy_water_steam_bucket'
        ],
        super_hot: [
            'enigmatica:borrowed_flame',
            'modern_industrialization:high_pressure_steam_bucket',
            'modern_industrialization:high_pressure_heavy_water_steam_bucket'
        ],
        chilled: [
            '#chipped:snow_block',
            '#chipped:ice',
            '#chisel:ice',
            'aether:skyroot_water_bucket',
            'aether:cold_aercloud',
            'aether:golden_aercloud',
            /aether:icestone/,

            'minecraft:snowball',
            'aether:icestone'
        ],
        cold: [
            '#c:rods/breeze',
            'minecraft:water_bucket',
            'the_bumblezone:sugar_water_bucket',
            '#chipped:packed_ice',

            'aether:blue_aercloud',
            'minecraft:wind_charge',

            'the_bumblezone:sugar_water_bucket',
            'enigmatica:briny_seawater_bucket',
            'enigmatica:wastewater_bucket',
            'modern_industrialization:heavy_water_bucket',
            'extended_industrialization:distilled_water_bucket'
        ],
        super_cold: [
            '#chipped:blue_ice',

            'enigmatica:boreas_anemoi',
            'enigmatica:eurus_anemoi',
            'enigmatica:notus_anemoi',
            'enigmatica:zephyrus_anemoi',
            'enigmatica:flask_of_four_winds',

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
