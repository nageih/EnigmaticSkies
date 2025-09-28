ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ppfluids/shaped/';

    const recipes = [
        {
            output: 'ppfluids:low_fluid_retrieval_module',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:gems/palis',
                B: 'prettypipes:blank_module',
                C: '#c:gems/enori',
                D: '#c:gems/void'
            },
            id: `${id_prefix}low_fluid_retrieval_module`
        },
        {
            output: 'ppfluids:medium_fluid_retrieval_module',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:gems/empowered_palis',
                B: 'ppfluids:low_fluid_retrieval_module',
                C: '#c:gems/empowered_enori',
                D: '#c:gems/empowered_void'
            },
            id: `${id_prefix}medium_fluid_retrieval_module`
        },
        {
            output: 'ppfluids:high_fluid_retrieval_module',
            pattern: [' A ', 'ABA', 'CDC'],
            key: {
                A: '#c:storage_blocks/empowered_palis',
                B: 'ppfluids:medium_fluid_retrieval_module',
                C: '#c:storage_blocks/empowered_enori',
                D: '#c:storage_blocks/empowered_void'
            },
            id: `${id_prefix}high_fluid_retrieval_module`
        },

        {
            output: 'ppfluids:low_fluid_extraction_module',
            pattern: ['CDC', 'ABA', ' A '],
            key: {
                A: '#c:gems/palis',
                B: 'prettypipes:blank_module',
                C: '#c:gems/enori',
                D: '#c:gems/restonia'
            },
            id: `${id_prefix}low_fluid_extraction_module`
        },
        {
            output: 'ppfluids:medium_fluid_extraction_module',
            pattern: ['CDC', 'ABA', ' A '],
            key: {
                A: '#c:gems/empowered_palis',
                B: 'ppfluids:low_fluid_extraction_module',
                C: '#c:gems/empowered_enori',
                D: '#c:gems/empowered_restonia'
            },
            id: `${id_prefix}medium_fluid_extraction_module`
        },
        {
            output: 'ppfluids:high_fluid_extraction_module',
            pattern: ['CDC', 'ABA', ' A '],
            key: {
                A: '#c:storage_blocks/empowered_palis',
                B: 'ppfluids:medium_fluid_extraction_module',
                C: '#c:storage_blocks/empowered_enori',
                D: '#c:storage_blocks/empowered_restonia'
            },
            id: `${id_prefix}high_fluid_extraction_module`
        },

        {
            output: 'ppfluids:low_fluid_filter_module',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'utilitarian:fluid_hopper',
                B: '#c:gems/palis',
                C: 'prettypipes:blank_module'
            },
            id: `${id_prefix}low_fluid_filter_module`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
