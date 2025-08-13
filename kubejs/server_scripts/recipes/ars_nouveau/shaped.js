ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/shaped/';

    const recipes = [
        {
            output: `ars_nouveau:imbuement_chamber`,
            pattern: [' A ', 'B B', 'ACA'],
            key: {
                A: '#c:nuggets/gold',
                B: '#c:ingots/andesite_alloy',
                C: '#c:gems/source'
            },
            id: `${id_prefix}imbuement_chamber`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
