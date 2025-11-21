ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/shaped/';

    const recipes = [
        {
            output: `oritech:assembler_block`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'oritech:machine_plating_block',
                B: 'create:mechanical_arm',
                C: '#c:gears/energized',
                D: 'industrialforegoing:machine_frame_simple',
                E: 'modern_industrialization:motor',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}assembler_block`
        },
        {
            output: `oritech:accelerator_controller`,
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'oritech:machine_frame_block',
                B: 'enderio:sentient_ender',
                C: 'oritech:metal_beam_block',
                D: 'justdirethings:droppert1'
            },
            id: `${id_prefix}accelerator_controller`
        },
        {
            output: `oritech:accelerator_motor`,
            pattern: ['A A', 'BCB', 'DED'],
            key: {
                A: 'oritech:heisenberg_compensator',
                B: 'modern_industrialization:superconductor_coil',
                C: 'industrialforegoing:machine_frame_advanced',
                D: 'oritech:metal_beam_block',
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
            pattern: [' D ', 'ABA', ' C '],
            key: {
                A: '#ae2:glass_cable',
                B: 'ae2:toggle_bus',
                C: 'oritech:metal_beam_block',
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
                B: '#c:rods/steel'
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
                F: 'oritech:flux_gate'
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
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}centrifuge_block`
        },
        {
            output: `oritech:refinery_block`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'oritech:carbon_plating_block',
                B: 'modern_industrialization:copper_coil',
                C: 'oritech:refinery_module_block',
                D: 'modern_industrialization:heatproof_machine_casing',
                E: 'oritech:flux_gate'
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
                D: 'modern_industrialization:heatproof_machine_casing'
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
        },
        {
            output: `oritech:jetpack`,
            pattern: ['ABA', 'CDC', 'EAE'],
            key: {
                A: '#c:plates/steel',
                B: 'ars_nouveau:belt_of_levitation',
                C: 'pneumaticcraft:cannon_barrel',
                D: 'actuallyadditions:advanced_coil',
                E: '#c:essences/fire'
            },
            id: `${id_prefix}jetpack`
        },
        {
            output: `oritech:powered_furnace_block`,
            pattern: ['AAA', ' B ', 'CDC'],
            key: {
                A: 'modern_industrialization:heatproof_machine_casing',
                B: 'modern_industrialization:copper_coil',
                C: 'oritech:machine_plating_block',
                D: 'minecraft:furnace'
            },
            id: `${id_prefix}powered_furnace_block`
        },
        {
            output: `12x oritech:item_pipe`,
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'modern_industrialization:fire_clay_brick',
                B: '#c:gems/restonia',
                C: 'theurgy:copper_wire'
            },
            id: `${id_prefix}item_pipe`
        },
        {
            output: `12x oritech:fluid_pipe`,
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'modern_industrialization:fire_clay_brick',
                B: '#c:gems/palis',
                C: 'theurgy:copper_wire'
            },
            id: `${id_prefix}fluid_pipe`
        },
        {
            output: `4x oritech:framed_fluid_pipe`,
            pattern: ['BAB', 'ABA', 'BAB'],
            key: {
                A: 'oritech:fluid_pipe',
                B: '#c:rods/copper'
            },
            id: `${id_prefix}framed_fluid_pipe`
        },
        {
            output: `4x oritech:framed_item_pipe`,
            pattern: ['BAB', 'ABA', 'BAB'],
            key: {
                A: 'oritech:item_pipe',
                B: '#c:rods/copper'
            },
            id: `${id_prefix}framed_item_pipe`
        },
        {
            output: `4x oritech:fluid_pipe_duct_block`,
            pattern: ['BAB', 'ABA', 'BAB'],
            key: {
                A: 'oritech:fluid_pipe',
                B: '#c:plates/copper'
            },
            id: `${id_prefix}fluid_pipe_duct_block`
        },
        {
            output: `4x oritech:item_pipe_duct_block`,
            pattern: ['BAB', 'ABA', 'BAB'],
            key: {
                A: 'oritech:item_pipe',
                B: '#c:plates/copper'
            },
            id: `${id_prefix}item_pipe_duct_block`
        },
        {
            output: `2x oritech:item_filter_block`,
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'oritech:item_pipe',
                B: '#minecraft:wool'
            },
            id: `${id_prefix}item_filter_block`
        },
        {
            output: `8x oritech:transparent_item_pipe`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'oritech:item_pipe',
                B: '#c:essences/manipulation'
            },
            id: `${id_prefix}transparent_item_pipe`
        },
        {
            output: `oritech:atomic_forge_block`,
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#c:gems/prescient_crystal',
                B: 'enderio:sentient_ender',
                C: 'modern_industrialization:cooling_cell',
                D: 'industrialforegoing:machine_frame_advanced'
            },
            id: `${id_prefix}atomic_forge_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
