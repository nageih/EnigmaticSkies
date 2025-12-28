ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:extended_industrialization/shaped/';

    const recipes = [
        {
            output: `extended_industrialization:bronze_composter`,
            pattern: ['CBC', 'ADA', 'EEE'],
            key: {
                A: `#c:gears/copper`,
                B: 'theurgy:digestion_vat',
                C: `#c:glass_blocks`,
                D: 'modern_industrialization:bronze_machine_casing',
                E: `ppfluids:fluid_pipe`
            },
            id: `${id_prefix}bronze_composter`
        },
        {
            output: `extended_industrialization:steam_farmer`,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: `modern_industrialization:bronze_plated_bricks`,
                B: 'create:mechanical_harvester',
                C: `create:mechanical_bearing`,
                D: 'create:precision_mechanism',
                E: `modern_industrialization:bronze_machine_casing_pipe`
            },
            id: `${id_prefix}steam_farmer`
        },
        {
            output: `extended_industrialization:large_steam_macerator`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:bronze_machine_casing_pipe`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_macerator`
            },
            id: `${id_prefix}large_steam_macerator`
        },
        {
            output: `extended_industrialization:large_electric_macerator`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:conductive_coil`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_macerator`
            },
            id: `${id_prefix}large_electric_macerator`
        },
        {
            output: `extended_industrialization:large_steam_furnace`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:bronze_machine_casing_pipe`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_furnace`
            },
            id: `${id_prefix}large_steam_furnace`
        },
        {
            output: `extended_industrialization:large_electric_furnace`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `modern_industrialization:conductive_coil`,
                B: `modern_industrialization:bronze_plated_bricks`,
                C: `modern_industrialization:bronze_furnace`
            },
            id: `${id_prefix}large_electric_furnace`
        },
        {
            output: `extended_industrialization:steel_brewery`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:glass_blocks/colorless`,
                B: `minecraft:brewing_stand`,
                C: `#c:gears/compressed_iron`,
                D: `modern_industrialization:steel_machine_casing`,
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}steel_brewery`
        },
        {
            output: `extended_industrialization:steel_honey_extractor`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:glass_blocks/colorless`,
                B: `minecraft:beehive`,
                C: `#c:gears/compressed_iron`,
                D: `modern_industrialization:steel_machine_casing`,
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}steel_honey_extractor`
        },
        {
            output: `extended_industrialization:steel_canning_machine`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:glass_blocks/colorless`,
                B: `create:spout`,
                C: `#c:gears/compressed_iron`,
                D: `modern_industrialization:steel_machine_casing`,
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}steel_canning_machine`
        },
        {
            output: `extended_industrialization:large_configurable_chest`,
            pattern: ['A', 'B', 'A'],
            key: {
                A: `modern_industrialization:configurable_chest`,
                B: `minecraft:slime_ball`
            },
            id: `${id_prefix}large_configurable_chest`
        },
        {
            output: 'extended_industrialization:electric_composter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'theurgy:digestion_vat',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_composter`
        },
        {
            output: 'extended_industrialization:robot_auto_feeder',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:plates/copper',
                B: 'modern_industrialization:robot_arm',
                C: 'oritech:basic_battery',
                D: 'enderio:z_logic_controller'
            },
            id: `${id_prefix}robot_auto_feeder`
        },
        {
            output: 'extended_industrialization:electric_canning_machine',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'minecraft:glass',
                B: 'create:spout',
                C: '#c:gears/compressed_iron',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}electric_canning_machine`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
