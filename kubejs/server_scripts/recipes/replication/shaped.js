ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/shaped/';

    const recipes = [
        {
            output: 'replication:matter_tank',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#c:plates/silicon',
                B: '#c:gems/empowered_void',
                C: 'malum:spirit_jar'
            },
            id: `${id_prefix}matter_tank`
        },
        {
            output: 'replication:disintegrator',
            pattern: ['AB ', 'CE ', 'FDF'],
            key: {
                A: 'create:mechanical_arm',
                B: 'ae2:annihilation_plane',
                C: 'ars_technica:calibrated_precision_mechanism',
                D: 'actuallyadditions:advanced_coil',
                E: 'enderio:ensouled_chassis',
                F: '#c:plates/silicon'
            },
            id: `${id_prefix}disintegrator`
        },
        {
            output: 'replication:replicator',
            pattern: ['AB ', 'CE ', 'FDF'],
            key: {
                A: 'create:mechanical_arm',
                B: 'ae2:formation_plane',
                C: 'ars_technica:calibrated_precision_mechanism',
                D: 'actuallyadditions:advanced_coil',
                E: 'enderio:ensouled_chassis',
                F: '#c:plates/silicon'
            },
            id: `${id_prefix}replicator`
        },
        {
            output: 'replication:chip_storage',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#c:gems/empowered_emeradic',
                B: 'ars_nouveau:repository_controller',
                C: '#c:plates/silicon'
            },
            id: `${id_prefix}chip_storage`
        },
        {
            output: 'replication:memory_chip',
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: 'malum:mnemonic_fragment',
                B: '#c:plates/silicon',
                C: '#c:gems/empowered_emeradic'
            },
            id: `${id_prefix}memory_chip`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
