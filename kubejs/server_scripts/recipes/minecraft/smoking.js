ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/smoking/';
    const recipes = [
        {
            output: 'ars_nouveau:source_berry_roll',
            input: `enigmatica:source_berry_roll_dough`,
            xp: 0.1,
            duration: 5,
            id: `${id_prefix}source_berry_roll`
        },
        {
            output: 'minecraft:cookie',
            input: `enigmatica:cookie_dough`,
            xp: 0.1,
            duration: 5,
            id: `${id_prefix}cookie`
        },
        {
            output: 'farmersdelight:sweet_berry_cookie',
            input: `enigmatica:sweet_berry_cookie_dough`,
            xp: 0.1,
            duration: 5,
            id: `${id_prefix}sweet_berry_cookie`
        },
        {
            output: 'farmersdelight:honey_cookie',
            input: `enigmatica:honey_cookie_dough`,
            xp: 0.1,
            duration: 5,
            id: `${id_prefix}honey_cookie`
        },
        {
            output: 'arsdelight:source_berry_cookie',
            input: `enigmatica:source_berry_cookie_dough`,
            xp: 0.1,
            duration: 5,
            id: `${id_prefix}source_berry_cookie`
        }
    ];

    recipes.forEach((recipe) => {
        event.smoking(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);

        
    });
});
