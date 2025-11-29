ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/shaped/';

    const recipes = [
        {
            output: 'pneumaticcraft:compressed_iron_gear',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: '#c:gems/ruby',
                B: '#c:ingots/compressed_iron'
            },
            id: `${id_prefix}compressed_iron_gear`
        },
        {
            output: '8x pneumaticcraft:sourdough',
            pattern: ['FFF', 'FYF', 'FFF'],
            key: {
                F: '#c:flours/wheat',
                Y: Ingredient.of({
                    type: 'pneumaticcraft:fluid_container',
                    fluid: { id: 'pneumaticcraft:yeast_culture', amount: 1000 }
                })
            },
            id: `${id_prefix}sourdough`
        },
        {
            output: 'pneumaticcraft:pressure_chamber_valve',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/compressed_iron',
                B: 'pneumaticcraft:reinforced_bricks',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: `${id_prefix}pressure_chamber_valve`
        },
        {
            output: 'pneumaticcraft:electrostatic_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#c:essences/air',
                B: 'minecraft:lightning_rod',
                C: '#c:gems/weather_crystal',
                D: 'minecraft:conduit',
                E: '#c:essences/earth',
                F: 'pneumaticcraft:pressure_chamber_valve'
            },
            id: `${id_prefix}electrostatic_compressor`
        },
        {
            output: 'pneumaticcraft:thermal_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: '#c:ingots/compressed_iron',
                B: 'pneumaticcraft:pressure_chamber_valve',
                C: 'modern_industrialization:heatproof_machine_casing',
                D: '#c:ingots/copper_alloy',
                E: 'modern_industrialization:frostproof_machine_casing'
            },
            id: `${id_prefix}thermal_compressor`
        },
        {
            output: 'pneumaticcraft:advanced_liquid_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'modern_industrialization:stainless_steel_rotor',
                B: 'pneumaticcraft:large_tank',
                C: 'pneumaticcraft:advanced_pressure_tube',
                D: 'modern_industrialization:stainless_steel_machine_casing_pipe',
                E: '#c:gears/dark_steel',
                F: 'enigmatica:tempestuous_mechanism'
            },
            id: `${id_prefix}advanced_liquid_compressor`
        },
        {
            output: 'pneumaticcraft:liquid_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:propeller',
                B: 'pneumaticcraft:small_tank',
                C: 'pneumaticcraft:pressure_tube',
                D: 'modern_industrialization:bronze_machine_casing_pipe',
                E: '#c:gears/compressed_iron',
                F: 'supplementaries:bellows'
            },
            id: `${id_prefix}liquid_compressor`
        },
        {
            output: 'pneumaticcraft:programmer',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'supplementaries:crystal_display',
                B: 'redstonepen:control_box',
                C: 'pneumaticcraft:display_table'
            },
            id: `${id_prefix}programmer`
        },
        {
            output: '2x pneumaticcraft:speed_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:upgrade_matrix',
                B: 'prettypipes:medium_speed_module',
                C: 'modern_industrialization:lubricant_bucket'
            },
            id: `${id_prefix}speed_upgrade`
        },
        {
            output: 'pneumaticcraft:assembly_controller',
            pattern: [' A ', 'BCB', 'CDC'],
            key: {
                A: 'supplementaries:crystal_display',
                B: 'pneumaticcraft:pressure_tube',
                C: '#c:ingots/compressed_iron',
                D: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}assembly_controller`
        },
        {
            output: 'pneumaticcraft:assembly_platform',
            pattern: ['A A', 'BBB', 'CCC'],
            key: {
                A: 'modern_industrialization:piston',
                B: 'pneumaticcraft:plastic',
                C: '#c:ingots/compressed_iron'
            },
            id: `${id_prefix}assembly_platform`
        },
        {
            output: 'pneumaticcraft:assembly_laser',
            pattern: ['DB ', 'ABB', 'CCC'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'pneumaticcraft:plastic',
                C: '#c:ingots/compressed_iron',
                D: 'oritech:enderic_lens'
            },
            id: `${id_prefix}assembly_laser`
        },
        {
            output: 'pneumaticcraft:assembly_drill',
            pattern: ['DB ', 'ABB', 'CCC'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'pneumaticcraft:plastic',
                C: '#c:ingots/compressed_iron',
                D: 'pneumaticcraft:drill_bit_diamond'
            },
            id: `${id_prefix}assembly_drill`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_export',
            pattern: ['BBA', 'CCC'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'pneumaticcraft:plastic',
                C: '#c:ingots/compressed_iron'
            },
            id: `${id_prefix}assembly_io_unit_export`
        },
        {
            output: 'pneumaticcraft:assembly_io_unit_import',
            pattern: ['ABB', 'CCC'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'pneumaticcraft:plastic',
                C: '#c:ingots/compressed_iron'
            },
            id: `${id_prefix}assembly_io_unit_import`
        },
        {
            output: 'pneumaticcraft:turbine_rotor',
            pattern: [' A ', ' B ', 'A A'],
            key: {
                A: 'pneumaticcraft:turbine_blade',
                B: '#c:gears/compressed_iron'
            },
            id: `${id_prefix}turbine_rotor`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
