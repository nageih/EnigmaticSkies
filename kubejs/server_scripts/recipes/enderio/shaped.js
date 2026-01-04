ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/shaped/';

    const recipes = [
        {
            output: `enderio:slice_and_splice`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'ars_nouveau:wixie_charm',
                C: '#c:gears/compressed_iron',
                D: 'enderio:ensouled_chassis',
                E: 'ars_technica:calibrated_precision_mechanism',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}slice_and_splice`
        },
        {
            output: `2x enderio:soul_chain`,
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#c:nuggets/soularium',
                B: '#c:dusts/otherworld_wood',
                C: '#c:ingots/soularium'
            },
            id: `${id_prefix}soul_chain`
        },
        {
            output: `enderio:dark_bimetal_gear`,
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#c:ingots/dark_steel',
                B: '#c:gears/iron'
            },
            id: `${id_prefix}dark_bimetal_gear`
        },
        {
            output: 'enderio:vacuum_chest',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#c:ingots/andesite_alloy',
                B: 'aether:enchanted_gravitite',
                C: '#c:chests/wooden'
            },
            id: `${id_prefix}vacuum_chest`
        },
        {
            output: `enderio:crafter`,
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'ars_nouveau:wixie_charm',
                B: '#c:gears/copper',
                C: 'modern_industrialization:bronze_machine_casing',
                D: 'ars_technica:calibrated_precision_mechanism',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}crafter`
        },
        {
            output: 'enderio:vat',
            pattern: ['BAB', 'ACA', 'DED'],
            key: {
                A: 'modern_industrialization:steel_tank',
                B: 'oritech:carbon_plating_block',
                C: 'modern_industrialization:steel_machine_casing',
                D: 'modern_industrialization:pump',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}vat`
        },
        {
            output: `enderio:sag_mill`,
            pattern: ['BAB', 'ACA', 'DED'],
            key: {
                A: '#c:gears/dark_steel',
                B: 'oritech:carbon_plating_block',
                C: 'modern_industrialization:steel_machine_casing',
                D: 'modern_industrialization:large_motor',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}sag_mill`
        },
        {
            output: `enderio:alloy_smelter`,
            pattern: ['BAB', 'ACA', 'DED'],
            key: {
                A: 'minecraft:blast_furnace',
                B: 'oritech:carbon_plating_block',
                C: 'modern_industrialization:steel_machine_casing',
                D: 'modern_industrialization:energetic_coil',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}alloy_smelter`
        },
        {
            output: `enderio:infinity_rod`,
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#c:dusts/grains_of_infinity',
                B: '#c:rods/steel'
            },
            id: `${id_prefix}infinity_rod`
        },
        {
            output: `enderio:staff_of_levity`,
            pattern: ['  A', ' BC', 'B  '],
            key: {
                A: '#c:gems/empowered_diamatine',
                B: `enderio:infinity_rod`,
                C: '#c:essences/air'
            },
            id: `${id_prefix}staff_of_levity`
        },
        {
            output: `enderio:staff_of_travelling`,
            pattern: ['  A', ' BC', 'B  '],
            key: {
                A: '#c:gems/pulsating_crystal',
                B: `enderio:infinity_rod`,
                C: '#c:tokens/air'
            },
            id: `${id_prefix}staff_of_travelling`
        },
        {
            output: `enderio:cold_fire_igniter`,
            pattern: ['BA', 'C '],
            key: {
                A: '#c:gems/empowered_void',
                B: `enderio:infinity_rod`,
                C: '#c:tokens/fire'
            },
            id: `${id_prefix}cold_fire_igniter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
