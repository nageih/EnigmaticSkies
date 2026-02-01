ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:replication/shaped/';

    const recipes = [
        {
            output: 'replication:matter_tank',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#c:plates/silicon',
                B: '#c:gems/empowered_void',
                C: 'malum:spirit_jar',
                D: '#c:gems/empowered_emeradic'
            },
            id: `${id_prefix}matter_tank`
        },
        {
            output: 'replication:disintegrator',
            pattern: ['AB', 'CD', 'EE'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'ae2:annihilation_plane',
                C: 'oritech:flux_gate',
                D: 'enderio:ensouled_chassis',
                E: '#c:plates/silicon'
            },
            id: `${id_prefix}disintegrator`
        },
        {
            output: 'replication:replicator',
            pattern: ['AB', 'CD', 'EE'],
            key: {
                A: 'modern_industrialization:robot_arm',
                B: 'ae2:formation_plane',
                C: 'oritech:flux_gate',
                D: 'enderio:ensouled_chassis',
                E: '#c:plates/silicon'
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
    });
});
