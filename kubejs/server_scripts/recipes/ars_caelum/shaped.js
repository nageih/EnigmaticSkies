ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_caelum/shaped/';

    const recipes = [
        {
            output: 'ars_caelum:ritual_conjure_island_flourishing',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: '#c:essences/earth',
                B: 'aether:cold_aercloud',
                C: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}ritual_conjure_island_flourishing`
        },
        {
            output: 'ars_caelum:ritual_conjure_island_cascading',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: '#c:essences/water',
                B: 'aether:cold_aercloud',
                C: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}ritual_conjure_island_cascading`
        },
        {
            output: 'ars_caelum:ritual_conjure_island_blazing',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: '#c:essences/fire',
                B: 'aether:cold_aercloud',
                C: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}ritual_conjure_island_blazing`
        },
        {
            output: 'ars_caelum:ritual_conjure_island_sculk',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: '#c:essences/air',
                B: 'aether:cold_aercloud',
                C: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}ritual_conjure_island_sculk`
        },
        {
            output: 'ars_caelum:ritual_conjure_island_vexing',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: '#c:essences/abjuration',
                B: 'aether:cold_aercloud',
                C: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}ritual_conjure_island_vexing`
        },
        {
            output: 'ars_caelum:ritual_conjure_island_geode',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: '#c:essences/conjuration',
                B: 'aether:cold_aercloud',
                C: 'ars_nouveau:sourcestone'
            },
            id: `${id_prefix}ritual_conjure_island_geode`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
