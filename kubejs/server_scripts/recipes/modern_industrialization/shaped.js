ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/shaped/';

    const recipes = [
        {
            output: `modern_industrialization:bronze_compressor`,
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: `#c:ingots/copper`,
                B: `minecraft:piston`,
                C: `#c:gears/copper`,
                D: 'modern_industrialization:bronze_machine_casing',
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}bronze_compressor`
        },
        {
            output: `modern_industrialization:heatproof_machine_casing`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: `#c:ingots/end_steel`,
                B: `industrialforegoing:machine_frame_simple`
            },
            id: `${id_prefix}heatproof_machine_casing`
        },
        {
            output: `modern_industrialization:bronze_assembler`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: `minecraft:crafting_table`,
                B: 'create:precision_mechanism',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}bronze_assembler`
        },
        {
            output: `modern_industrialization:bronze_centrifuge`,
            pattern: ['BAB', 'CDC', 'EEE'],
            key: {
                A: `create:mechanical_pump`,
                B: 'create:precision_mechanism',
                C: '#c:gears/copper',
                D: 'modern_industrialization:bronze_machine_casing',
                E: '#modern_industrialization:fluid_pipes'
            },
            id: `${id_prefix}bronze_centrifuge`
        },
        {
            output: `modern_industrialization:bronze_machine_casing`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:plates/bronze',
                B: 'create:electron_tube',
                C: '#c:gears/iron'
            },
            id: `${id_prefix}bronze_machine_casing`
        },
        {
            output: `modern_industrialization:bronze_machine_casing_pipe`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'enderio:conduit[enderio:conduit="enderio:fluid"]',
                B: 'modern_industrialization:bronze_machine_casing'
            },
            id: `${id_prefix}bronze_machine_casing_pipe`
        },
        {
            output: `6x modern_industrialization:fluid_pipe`,
            pattern: ['AAA', 'B B', 'AAA'],
            key: {
                A: 'ppfluids:fluid_pipe',
                B: 'enderio:conduit_binder'
            },
            id: `${id_prefix}fluid_pipe`
        },
        {
            output: `6x modern_industrialization:item_pipe`,
            pattern: ['AAA', 'B B', 'AAA'],
            key: {
                A: 'prettypipes:pipe',
                B: 'enderio:conduit_binder'
            },
            id: `${id_prefix}item_pipe`
        },
        {
            output: `modern_industrialization:motor`,
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#c:ingots/energetic_alloy',
                B: '#c:plates/steel',
                C: 'oritech:magnetic_coil'
            },
            id: `${id_prefix}motor`
        },
        {
            output: `modern_industrialization:steel_machine_casing`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:plates/steel',
                B: 'modern_industrialization:analog_circuit',
                C: '#c:gears/steel'
            },
            id: `${id_prefix}steel_machine_casing`
        },
        {
            output: `modern_industrialization:lv_steam_turbine`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#modern_industrialization:fluid_pipes',
                B: 'modern_industrialization:copper_cable',
                C: 'modern_industrialization:copper_rotor',
                D: 'modern_industrialization:bronze_machine_casing',
                E: 'create:precision_mechanism',
                F: 'actuallyadditions:advanced_coil'
            },
            id: `${id_prefix}lv_steam_turbine`
        },
        {
            output: `modern_industrialization:mv_steam_turbine`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#modern_industrialization:fluid_pipes',
                B: 'modern_industrialization:cupronickel_cable',
                C: 'modern_industrialization:bronze_rotor',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'modern_industrialization:motor',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}mv_steam_turbine`
        }
    ];

    colors.forEach((color) => {
        recipes.push(
            {
                output: `6x modern_industrialization:${color}_fluid_pipe`,
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'ppfluids:fluid_pipe',
                    B: 'enderio:conduit_binder',
                    C: `#c:dyes/${color}`
                },
                id: `${id_prefix}${color}_fluid_pipe`
            },
            {
                output: `6x modern_industrialization:${color}_item_pipe`,
                pattern: ['AAA', 'BCB', 'AAA'],
                key: {
                    A: 'prettypipes:pipe',
                    B: 'enderio:conduit_binder',
                    C: `#c:dyes/${color}`
                },
                id: `${id_prefix}${color}_item_pipe`
            }
        );
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

    const rotors = ['aluminum', 'bronze', 'copper', 'stainless_steel', 'tin', 'titanium'];

    rotors.forEach((material) => {
        recipes.push({
            output: `modern_industrialization:${material}_rotor`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `#c:nuggets/${material}`,
                B: `#c:plates/${material}`,
                C: '#c:gems/ruby'
            },
            id: `${id_prefix}${material}_rotor`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
