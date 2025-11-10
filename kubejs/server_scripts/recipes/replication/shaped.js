ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/shaped/';

    const recipes = [
        {
            output: 'replication:matter_tank',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: '#c:gems/empowered_void',
                C: 'malum:spirit_jar'
            },
            id: `${id_prefix}matter_tank`
        },
        {
            output: 'replication:disintegrator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'ae2:annihilation_plane',
                C: 'ars_technica:calibrated_precision_mechanism',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}disintegrator`
        },
        {
            output: 'replication:replicator',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: 'ae2:formation_plane',
                C: 'ars_technica:calibrated_precision_mechanism',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'oritech:flux_gate'
            },
            id: `${id_prefix}replicator`
        },
        {
            output: 'replication:chip_storage',
            pattern: ['BCB', 'ADA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: '#c:gems/empowered_emeradic',
                C: 'ars_nouveau:repository_controller',
                D: 'oritech:flux_gate'
            },
            id: `${id_prefix}chip_storage`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
