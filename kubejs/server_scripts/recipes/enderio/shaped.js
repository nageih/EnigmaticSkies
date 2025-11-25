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
            output: 'enderio:vat',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'modern_industrialization:steel_tank',
                B: 'oritech:carbon_plating_block',
                C: 'industrialforegoing:machine_frame_simple',
                D: '#c:gears/energized',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}vat`
        },
        {
            output: `enderio:crafter`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:mechanical_arm',
                B: 'ars_nouveau:wixie_charm',
                C: '#c:gears/energized',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'modern_industrialization:motor',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}crafter`
        },
        {
            output: `enderio:sag_mill`,
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'oritech:reinforced_carbon_sheet',
                B: '#c:gears/dark_steel',
                C: 'industrialforegoing:machine_frame_advanced',
                D: 'modern_industrialization:motor',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}sag_mill`
        },
        {
            output: `enderio:alloy_smelter`,
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'oritech:reinforced_carbon_sheet',
                B: 'modern_industrialization:steel_furnace',
                C: 'industrialforegoing:machine_frame_advanced',
                D: 'modern_industrialization:energetic_coil',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}alloy_smelter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
