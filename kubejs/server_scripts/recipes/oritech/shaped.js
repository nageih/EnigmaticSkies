ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/shaped/';

    const recipes = [
        {
            output: `2x oritech:magnetic_coil`,
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: 'modern_industrialization:copper_wire',
                B: '#c:rods/steel',
                C: 'modern_industrialization:steel_rod_magnetic'
            },
            id: `${id_prefix}magnetic_coil`
        },
        {
            output: `oritech:assembler_block`,
            pattern: ['AAB', 'ACD', 'AEF'],
            key: {
                A: '#c:plates/brass',
                B: 'create:mechanical_arm',
                C: 'industrialforegoing:machine_frame_simple',
                D: '#c:gears/energized',
                E: 'actuallyadditions:advanced_coil',
                F: 'modern_industrialization:motor'
            },
            id: `${id_prefix}assembler_block`
        },
        {
            output: `oritech:accelerator_controller`,
            pattern: ['AAA', 'ABA', 'CDC'],
            key: {
                A: '#c:ingots/duratium',
                B: 'actuallyadditions:dropper',
                C: 'enderio:sentient_ender',
                D: 'oritech:accelerator_motor'
            },
            id: `${id_prefix}accelerator_controller`
        },
        {
            output: `oritech:accelerator_motor`,
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: '#c:gems/pulsating_crystal',
                B: 'oritech:magnetic_coil',
                C: 'industrialforegoing:machine_frame_advanced',
                D: '#c:ingots/duratium',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}accelerator_motor`
        },
        {
            output: `oritech:accelerator_sensor`,
            pattern: ['A', 'B'],
            key: {
                A: 'create:electron_tube',
                B: 'oritech:accelerator_ring'
            },
            id: `${id_prefix}accelerator_sensor`
        },
        {
            output: `oritech:accelerator_ring`,
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#ae2:glass_cable',
                B: 'ae2:toggle_bus',
                C: '#c:ingots/energetic_alloy',
                D: '#c:ingots/redstone_alloy'
            },
            id: `${id_prefix}accelerator_ring`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
