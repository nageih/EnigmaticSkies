ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/shaped/';

    const recipes = [
        {
            output: `oritech:assembler_block`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'oritech:machine_plating_block',
                B: 'create:mechanical_arm',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}assembler_block`
        },
        {
            output: `oritech:accelerator_controller`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'supplementaries:crystal_display',
                B: 'oritech:metal_beam_block',
                C: 'justdirethings:droppert1'
            },
            id: `${id_prefix}accelerator_controller`
        },
        {
            output: `oritech:accelerator_motor`,
            pattern: ['BAB', 'CDC'],
            key: {
                A: '#c:gems/celestigem',
                B: 'modern_industrialization:energetic_coil',
                C: 'oritech:metal_beam_block',
                D: 'enigmatica:pulsating_mechanism'
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
            pattern: ['AB', 'CD'],
            key: {
                A: 'modern_industrialization:steel_large_plate',
                B: '#c:plates/andesite_alloy',
                C: '#c:plates/carbon',
                D: 'industrialforegoing:pink_slime'
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
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}cooler_block`
        },
        {
            output: `oritech:centrifuge_block`,
            pattern: ['AAA', 'CDC', 'EFE'],
            key: {
                A: 'supplementaries:jar',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'enigmatica:pulsating_mechanism'
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
                E: 'enigmatica:pulsating_mechanism'
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
                C: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}charger_block`
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
            pattern: ['ABA', 'ACA', 'DED'],
            key: {
                A: '#c:gems/prescient_crystal',
                B: 'pneumaticcraft:assembly_platform',
                C: 'modern_industrialization:clean_stainless_steel_machine_casing',
                D: 'oritech:metal_beam_block',
                E: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}atomic_forge_block`
        },
        {
            output: `oritech:laser_arm_block`,
            pattern: [' A ', ' B ', 'CDC'],
            key: {
                A: 'pneumaticcraft:assembly_laser',
                B: 'modern_industrialization:clean_stainless_steel_machine_casing',
                C: 'oritech:metal_beam_block',
                D: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}laser_arm_block`
        },
        {
            output: `oritech:treefeller_block`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'oritech:machine_plating_block',
                B: 'create:mechanical_saw',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}treefeller_block`
        },

        {
            output: `oritech:jetpack`,
            pattern: ['ABA', 'CDC', 'EAE'],
            key: {
                A: '#c:plates/steel',
                B: 'ars_nouveau:belt_of_levitation',
                C: 'pneumaticcraft:cannon_barrel',
                D: 'oritech:basic_battery',
                E: '#c:essences/fire'
            },
            id: `${id_prefix}jetpack`
        },
        {
            output: `oritech:jetpack_elytra`,
            pattern: ['ABA', 'CDC', 'EAE'],
            key: {
                A: '#c:plates/reinforced_carbon',
                B: 'enderio:z_logic_controller',
                C: 'modern_industrialization:piston',
                D: `oritech:jetpack`,
                E: 'minecraft:elytra'
            },
            id: `${id_prefix}jetpack_elytra`
        },
        {
            output: `oritech:jetpack_exo_elytra`,
            pattern: ['ABA', 'CDC', 'EAE'],
            key: {
                A: '#c:plates/reinforced_carbon',
                B: 'enderio:z_logic_controller',
                C: 'modern_industrialization:piston',
                D: `oritech:exo_jetpack`,
                E: 'minecraft:elytra'
            },
            id: `${id_prefix}jetpack_exo_elytra`
        }
    ];

    const exo_armor = ['helmet', 'chestplate', 'leggings', 'boots'];

    exo_armor.forEach((armor) => {
        recipes.push({
            output: `oritech:exo_${armor}`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:plates/reinforced_carbon',
                B: 'enderio:z_logic_controller',
                C: 'modern_industrialization:piston',
                D: `minecraft:leather_${armor}`,
                E: 'oritech:basic_battery'
            },
            id: `${id_prefix}exo_${armor}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
