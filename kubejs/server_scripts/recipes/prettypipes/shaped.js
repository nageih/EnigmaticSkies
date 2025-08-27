ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:prettypipes/shaped/';

    const recipes = [
        {
            output: 'prettypipes:tag_filter_modifier',
            pattern: [' H ', 'RMR', ' R '],
            key: {
                R: '#c:gems/restonia',
                H: 'minecraft:paper',
                M: 'prettypipes:blank_module'
            },
            id: `${id_prefix}tag_filter_modifier`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
