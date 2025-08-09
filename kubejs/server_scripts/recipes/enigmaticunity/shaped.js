ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmaticunity/shaped/';

    const recipes = [
        // {
        //     output: 'enigmaticunity:dim_source_generator',
        //     pattern: [' A ', 'CBC'],
        //     key: {
        //         A: 'ars_nouveau:source_lamp',
        //         B: 'ars_nouveau:item_detector',
        //         C: '#c:ingots/infused_iron'
        //     },
        //     id: `${id_prefix}dim_source_generator`
        // }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
