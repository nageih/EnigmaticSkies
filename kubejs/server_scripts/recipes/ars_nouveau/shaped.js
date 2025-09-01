ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/shaped/';

    const recipes = [
        {
            output: `ars_nouveau:imbuement_chamber`,
            pattern: [' A ', 'B B', 'ACA'],
            key: {
                A: '#c:ingots/gold',
                B: '#c:ingots/andesite_alloy',
                C: '#c:gems/source'
            },
            id: `${id_prefix}imbuement_chamber`
        },
        {
            output: 'ars_nouveau:source_berry_pie',
            pattern: [' A ', 'BBB', 'DCD'],
            key: {
                A: 'ars_nouveau:magebloom',
                B: 'arsdelight:source_berry_jam',
                C: 'farmersdelight:pie_crust',
                D: '#c:sugars'
            },
            id: `${id_prefix}source_berry_pie`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
