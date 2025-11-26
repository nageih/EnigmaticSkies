ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/shaped/';

    const recipes = [
        {
            output: `modern_industrialization:bronze_machine_casing`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:andesite_alloy_large_plate`,
                B: '#c:gears/copper',
                C: 'enderio:skeletal_contractor'
            },
            id: `${id_prefix}bronze_machine_casing`
        },
        {
            output: `modern_industrialization:bronze_machine_casing_pipe`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ppfluids:fluid_pipe',
                B: `modern_industrialization:bronze_machine_casing`
            },
            id: `${id_prefix}bronze_machine_casing_pipe`
        },
        {
            output: `modern_industrialization:quantum_machine_casing`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modern_industrialization:iridium_large_plate',
                B: 'enderio:ender_resonator',
                C: '#c:gears/vibrant'
            },
            id: `${id_prefix}quantum_machine_casing`
        },
        {
            output: `modern_industrialization:bronze_compressor`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:ingots/copper`,
                B: `minecraft:piston`,
                C: `#c:gears/copper`,
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_compressor`
        },
        {
            output: `modern_industrialization:bronze_assembler`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: `minecraft:crafting_table`,
                B: '#c:essences/manipulation',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_assembler`
        },
        {
            output: `modern_industrialization:bronze_mixer`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: '#c:gears/copper',
                B: '#c:glass_blocks',
                C: 'create:propeller',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_mixer`
        },
        {
            output: `modern_industrialization:bronze_cutting_machine`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: '#c:gems/diamond',
                B: '#c:glass_blocks',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_cutting_machine`
        },
        {
            output: `modern_industrialization:bronze_macerator`,
            pattern: ['BCB', 'CDC', 'EEE'],
            key: {
                B: '#c:gems/diamond',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_macerator`
        },
        {
            output: `modern_industrialization:bronze_centrifuge`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: `create:mechanical_pump`,
                B: 'create:precision_mechanism',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_centrifuge`
        },

        {
            output: `modern_industrialization:bronze_plated_bricks`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/iron',
                B: `#c:plates/andesite_alloy`,
                C: 'modern_industrialization:fire_clay_bricks'
            },
            id: `${id_prefix}bronze_plated_bricks`
        },
        {
            output: `modern_industrialization:large_steam_boiler`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:bronze_plated_bricks`,
                B: 'create:precision_mechanism',
                C: 'modern_industrialization:bronze_tank'
            },
            id: `${id_prefix}large_steam_boiler`
        },
        {
            output: `modern_industrialization:motor`,
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'create:shaft',
                B: 'modern_industrialization:steel_large_plate',
                C: 'modern_industrialization:conductive_coil'
            },
            id: `${id_prefix}motor`
        },

        {
            output: `modern_industrialization:lv_steam_turbine`,
            pattern: ['AAA', 'CDC', 'EBE'],
            key: {
                A: `ppfluids:fluid_pipe`,
                B: 'modern_industrialization:copper_cable',
                C: 'create:propeller',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'create:precision_mechanism'
            },
            id: `${id_prefix}lv_steam_turbine`
        },
        {
            output: `modern_industrialization:mv_steam_turbine`,
            pattern: ['AAA', 'CDC', 'EBE'],
            key: {
                A: '#modern_industrialization:fluid_pipes',
                B: 'modern_industrialization:conductive_cable',
                C: 'pneumaticcraft:turbine_rotor',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor'
            },
            id: `${id_prefix}mv_steam_turbine`
        },
        {
            output: 'modern_industrialization:steam_kiln',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'minecraft:furnace'
            },
            id: `${id_prefix}steam_kiln`
        },
        {
            output: 'modern_industrialization:electric_kiln',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: 'modern_industrialization:heatproof_machine_casing',
                B: 'modern_industrialization:steam_kiln',
                C: 'modern_industrialization:conductive_coil'
            },
            id: `${id_prefix}electric_kiln`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_input_hatch`,
            pattern: ['B', 'A'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_bucket'
            },
            id: `${id_prefix}fire_clay_brick_fluid_input_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_input_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_fluid_output_hatch'
            },
            id: `${id_prefix}fire_clay_brick_fluid_input_hatch_from_output`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_output_hatch`,
            pattern: ['A', 'B'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_bucket'
            },
            id: `${id_prefix}fire_clay_brick_fluid_output_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_fluid_output_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_fluid_input_hatch'
            },
            id: `${id_prefix}fire_clay_brick_fluid_output_hatch_from_input`
        },

        {
            output: `modern_industrialization:fire_clay_brick_item_input_hatch`,
            pattern: ['B', 'A'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_trapdoor'
            },
            id: `${id_prefix}fire_clay_brick_item_input_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_item_input_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_item_output_hatch'
            },
            id: `${id_prefix}fire_clay_brick_item_input_hatch_from_output`
        },
        {
            output: `modern_industrialization:fire_clay_brick_item_output_hatch`,
            pattern: ['A', 'B'],
            key: {
                A: 'modern_industrialization:fire_clay_bricks',
                B: 'aether:skyroot_trapdoor'
            },
            id: `${id_prefix}fire_clay_brick_item_output_hatch`
        },
        {
            output: `modern_industrialization:fire_clay_brick_item_output_hatch`,
            pattern: ['A'],
            key: {
                A: 'modern_industrialization:fire_clay_brick_item_input_hatch'
            },
            id: `${id_prefix}fire_clay_brick_item_output_hatch_from_input`
        },
        {
            output: `modern_industrialization:redstone_control_module`,
            pattern: [' A ', 'BCB'],
            key: {
                A: 'minecraft:redstone_torch',
                B: '#c:ingots/redstone_alloy',
                C: 'naturesaura:infused_slab'
            },
            id: `${id_prefix}redstone_control_module`
        },
        {
            output: `modern_industrialization:bronze_rotor`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `#c:nuggets/bronze`,
                B: `modern_industrialization:bronze_blade`,
                C: '#c:gems/ruby'
            },
            id: `${id_prefix}bronze_rotor`
        },
        {
            output: `4x modern_industrialization:bronze_blade`,
            pattern: ['  A', ' A ', 'B  '],
            key: {
                A: `#c:plates/bronze`,
                B: `#c:rods/bronze`
            },
            id: `${id_prefix}bronze_blade`
        },
        {
            output: `modern_industrialization:robot_arm`,
            pattern: ['AAB', 'AC ', 'DC '],
            key: {
                A: `#c:plates/steel`,
                B: `create:brass_hand`,
                C: 'malum:imitation_flesh',
                D: 'enderio:skeletal_contractor'
            },
            id: `${id_prefix}robot_arm`
        },
        {
            output: `modern_industrialization:piston`,
            pattern: [' CA', 'CAB', 'AD '],
            key: {
                A: `#c:plates/steel`,
                B: `create:brass_hand`,
                C: 'malum:imitation_flesh',
                D: 'enderio:skeletal_contractor'
            },
            id: `${id_prefix}piston`
        },
        {
            output: `modern_industrialization:configurable_tank`,
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: `#c:plates/steel`,
                B: `enderio:z_logic_controller`,
                C: '#c:glass_blocks/colorless',
                D: 'modern_industrialization:pump'
            },
            id: `${id_prefix}configurable_tank`
        },
        {
            output: `modern_industrialization:configurable_chest`,
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: `#c:plates/steel`,
                B: `enderio:z_logic_controller`,
                C: '#c:chests/wooden',
                D: 'modern_industrialization:large_motor'
            },
            id: `${id_prefix}configurable_chest`
        },
        {
            output: `modern_industrialization:iridium_large_plate`,
            pattern: ['AA', 'AA'],
            key: {
                A: `#c:plates/iridium`
            },
            id: `${id_prefix}iridium_large_plate`
        },
        {
            output: `modern_industrialization:andesite_alloy_large_plate`,
            pattern: ['AA', 'AA'],
            key: {
                A: `#c:plates/andesite_alloy`
            },
            id: `${id_prefix}andesite_alloy_large_plate`
        },
        {
            output: `modern_industrialization:bronze_furnace`,
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: `#c:plates/andesite_alloy`,
                B: 'minecraft:furnace',
                C: 'modern_industrialization:fire_clay_bricks'
            },
            id: `${id_prefix}bronze_furnace`
        },
        {
            output: `modern_industrialization:bronze_alluvial_trommel`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: `create:nozzle`,
                B: 'create:precision_mechanism',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_alluvial_trommel`
        },
        {
            output: `modern_industrialization:bronze_tank`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: `#c:plates/andesite_alloy`,
                B: '#c:glass_blocks'
            },
            id: `${id_prefix}bronze_tank`
        },
        {
            output: `modern_industrialization:bronze_barrel`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: `#c:plates/andesite_alloy`,
                B: '#c:barrels/wooden'
            },
            id: `${id_prefix}bronze_barrel`
        },
        {
            output: `2x modern_industrialization:steel_upgrade`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: `#c:rods/steel`,
                B: 'pneumaticcraft:turbine_rotor',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: '#modern_industrialization:fluid_pipes',
                F: 'modern_industrialization:fire_clay_bricks'
            },
            id: `${id_prefix}steel_upgrade`
        }
    ];

    const electrical_components = [
        { material: 'copper', tier: 'lv', casing: 'modern_industrialization:bronze_machine_casing' },
        { material: 'conductive', tier: 'mv', casing: 'industrialforegoing:machine_frame_simple' },
        { material: 'energetic', tier: 'hv', casing: 'industrialforegoing:machine_frame_advanced' },
        { material: 'vibrant', tier: 'ev', casing: 'industrialforegoing:machine_frame_supreme' },
        { material: 'superconductor', tier: 'superconductor', casing: 'industrialforegoing:machine_frame_supreme' }
    ];

    electrical_components.forEach((component, i) => {
        recipes.push(
            {
                output: `modern_industrialization:${component.material}_coil`,
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: `modern_industrialization:${component.material}_cable`,
                    B: '#c:ingots/compressed_iron'
                },
                id: `${id_prefix}${component.material}_coil`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_input_hatch`,
                pattern: ['A', 'B'],
                key: {
                    A: `modern_industrialization:${component.material}_cable`,
                    B: component.casing
                },
                id: `${id_prefix}${component.tier}_energy_input_hatch`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_output_hatch`,
                pattern: ['B', 'A'],
                key: {
                    A: `modern_industrialization:${component.material}_cable`,
                    B: component.casing
                },
                id: `${id_prefix}${component.tier}_energy_output_hatch`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_input_hatch`,
                pattern: ['A'],
                key: {
                    A: `modern_industrialization:${component.tier}_energy_output_hatch`
                },
                id: `${id_prefix}${component.tier}_energy_input_hatch_conversion`
            },
            {
                output: `modern_industrialization:${component.tier}_energy_output_hatch`,
                pattern: ['A'],
                key: {
                    A: `modern_industrialization:${component.tier}_energy_input_hatch`
                },
                id: `${id_prefix}${component.tier}_energy_output_hatch_conversion`
            }
        );

        if (i < electrical_components.length - 1) {
            let next_component = electrical_components[i + 1];
            recipes.push(
                {
                    output: `modern_industrialization:${component.tier}_${next_component.tier}_transformer`,
                    pattern: [' A ', 'BCD', ' A '],
                    key: {
                        A: 'pneumaticcraft:heat_sink',
                        B: `modern_industrialization:${component.material}_coil`,
                        C: component.casing,
                        D: `modern_industrialization:${next_component.material}_cable`
                    },
                    id: `${id_prefix}${component.tier}_${next_component.tier}_transformer`
                },
                {
                    output: `modern_industrialization:${next_component.tier}_${component.tier}_transformer`,
                    pattern: [' A ', 'BCD', ' A '],
                    key: {
                        A: 'pneumaticcraft:heat_sink',
                        B: `modern_industrialization:${component.material}_cable`,
                        C: component.casing,
                        D: `modern_industrialization:${next_component.material}_coil`
                    },
                    id: `${id_prefix}${next_component.tier}_${component.tier}_transformer`
                },
                {
                    output: `modern_industrialization:${next_component.tier}_${component.tier}_transformer`,
                    pattern: ['A'],
                    key: {
                        A: `modern_industrialization:${component.tier}_${next_component.tier}_transformer`
                    },
                    id: `${id_prefix}${next_component.tier}_${component.tier}_transformer_conversion`
                },
                {
                    output: `modern_industrialization:${component.tier}_${next_component.tier}_transformer`,
                    pattern: ['A'],
                    key: {
                        A: `modern_industrialization:${next_component.tier}_${component.tier}_transformer`
                    },
                    id: `${id_prefix}${component.tier}_${next_component.tier}_transformer_conversion`
                }
            );
        }
    });

    const gears = [
        'aluminum',
        'bronze',
        'copper',
        'gold',
        'invar',
        'iron',
        'stainless_steel',
        'steel',
        'tin',
        'titanium'
    ];

    gears.forEach((material) => {
        recipes.push({
            output: `modern_industrialization:${material}_gear`,
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: `#c:ingots/${material}`,
                B: '#c:gems/ruby'
            },
            id: `${id_prefix}${material}_gear`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
