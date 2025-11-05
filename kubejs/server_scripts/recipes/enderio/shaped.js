ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/shaped/';

    const recipes = [
        {
            output: `enderio:slice_and_splice`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:mechanical_arm',
                B: 'ars_nouveau:wixie_charm',
                C: '#c:gears/energized',
                D: 'enderio:ensouled_chassis',
                E: 'modern_industrialization:motor',
                F: 'actuallyadditions:advanced_coil'
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
            output: `enderio:energized_gear`,
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#c:ingots/energetic_alloy',
                B: '#c:gears/iron'
            },
            id: `${id_prefix}energized_gear`
        },
        {
            output: `enderio:vibrant_gear`,
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#c:ingots/vibrant_alloy',
                B: '#c:gears/energized'
            },
            id: `${id_prefix}vibrant_gear`
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
                D: 'enderio:void_chassis',
                E: 'modern_industrialization:motor',
                F: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}crafter`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
