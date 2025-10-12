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
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'oritech:machine_plating_block',
                B: 'create:mechanical_arm',
                C: '#c:gears/energized',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'modern_industrialization:motor',
                F: 'actuallyadditions:advanced_coil'
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
                C: 'oritech:machine_frame_block',
                D: '#c:ingots/redstone_alloy'
            },
            id: `${id_prefix}accelerator_ring`
        },
        {
            output: `oritech:basic_battery`,
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#c:gems/restonia',
                B: 'actuallyadditions:advanced_coil',
                C: '#c:gems/enori'
            },
            id: `${id_prefix}basic_battery`
        },
        {
            output: `oritech:machine_plating_block`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/copper_alloy',
                B: '#c:plates/steel',
                C: 'pneumaticcraft:reinforced_stone'
            },
            id: `${id_prefix}machine_plating_block`
        },
        {
            output: `oritech:carbon_plating_block`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'oritech:reinforced_carbon_sheet',
                B: '#c:plates/steel',
                C: 'pneumaticcraft:reinforced_stone'
            },
            id: `${id_prefix}carbon_plating_block`
        },
        {
            output: `16x oritech:machine_frame_block`,
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: '#c:ingots/copper_alloy',
                B: '#c:nuggets/steel'
            },
            id: `${id_prefix}machine_frame_block`
        },
        {
            output: `oritech:cooler_block`,
            pattern: ['AAA', 'CDC', 'EFE'],
            key: {
                A: 'oritech:industrial_glass_block',
                C: '#c:gears/energized',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'modern_industrialization:motor',
                F: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}cooler_block`
        },
        {
            output: `oritech:centrifuge_block`,
            pattern: ['AAA', 'CDC', 'EFE'],
            key: {
                A: 'supplementaries:jar',
                C: '#c:gears/energized',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'modern_industrialization:motor',
                F: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}centrifuge_block`
        },
        {
            output: `oritech:refinery_block`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'oritech:carbon_plating_block',
                B: 'oritech:magnetic_coil',
                C: 'oritech:refinery_module_block',
                D: 'modern_industrialization:bronze_machine_casing_pipe',
                E: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}refinery_block`
        },
        {
            output: `oritech:refinery_module_block`,
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'oritech:carbon_plating_block',
                B: 'oritech:small_tank_block',
                C: 'oritech:metal_beam_block',
                D: 'modern_industrialization:bronze_machine_casing_pipe'
            },
            id: `${id_prefix}refinery_module_block`
        },
        {
            output: `oritech:charger_block`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'actuallyadditions:display_stand',
                B: 'oritech:basic_battery',
                C: 'oritech:flux_gate'
            },
            id: `${id_prefix}charger_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
