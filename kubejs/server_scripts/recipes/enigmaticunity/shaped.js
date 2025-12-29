ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmaticunity/shaped/';

    const recipes = [
        // {
        //     output: 'enigmaticunity:dim_source_generator',
        //     pattern: [' A ', 'BCB', ' D '],
        //     key: {
        //         A: '#c:gems/pulsating_crystal',
        //         B: 'ars_nouveau:archwood_planks',
        //         C: '#c:ingots/infused_iron',
        //         D: 'actuallyadditions:advanced_coil'
        //     },
        //     id: `${id_prefix}dim_source_generator`
        // }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
