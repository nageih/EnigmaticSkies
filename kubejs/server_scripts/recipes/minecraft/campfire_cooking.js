ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/campfire_cooking/';
    const recipes = [
        {
            output: 'ars_nouveau:source_berry_roll',
            input: `enigmatica:source_berry_roll_dough`,
            xp: 0.1,
            duration: 30,
            id: `${id_prefix}source_berry_roll`
        },
        {
            output: 'minecraft:cookie',
            input: `enigmatica:cookie_dough`,
            xp: 0.1,
            duration: 30,
            id: `${id_prefix}cookie`
        },
        {
            output: 'farmersdelight:sweet_berry_cookie',
            input: `enigmatica:sweet_berry_cookie_dough`,
            xp: 0.1,
            duration: 30,
            id: `${id_prefix}sweet_berry_cookie`
        },
        {
            output: 'farmersdelight:honey_cookie',
            input: `enigmatica:honey_cookie_dough`,
            xp: 0.1,
            duration: 30,
            id: `${id_prefix}honey_cookie`
        },
        {
            output: 'arsdelight:source_berry_cookie',
            input: `enigmatica:source_berry_cookie_dough`,
            xp: 0.1,
            duration: 30,
            id: `${id_prefix}source_berry_cookie`
        },
        {
            output: 'farmersdelight:cooked_chicken_cuts',
            input: 'enigmatica:raw_chicken_cuts',
            xp: 0.35,
            duration: 30,
            id: `${id_prefix}cooked_chicken_cuts`
        }
    ];

    recipes.forEach((recipe) => {
        event.campfireCooking(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);
    });
});
