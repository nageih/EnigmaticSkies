ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: '4x enigmatica:poutine',
            inputs: [
                'pneumaticcraft:chips',
                'pneumaticcraft:chips',
                'pneumaticcraft:chips',
                'pneumaticcraft:chips',
                'sushigocrafting:cheese[sushigocrafting:amount=500]',
                'arsdelight:wilden_sauce'
            ],
            id: `${id_prefix}poutine`
        },
        {
            output: 'enigmatica:source_berry_roll_dough',
            inputs: ['farmersdelight:wheat_dough', 'ars_nouveau:sourceberry_bush'],
            id: `${id_prefix}source_berry_roll_dough`
        },
        {
            output: '12x enigmatica:cookie_dough',
            inputs: ['farmersdelight:wheat_dough', '#c:sugars', 'create:bar_of_chocolate'],
            id: `${id_prefix}cookie_dough`
        },
        {
            output: '12x enigmatica:sweet_berry_cookie_dough',
            inputs: ['farmersdelight:wheat_dough', '#c:sugars', 'minecraft:sweet_berries'],
            id: `${id_prefix}sweet_berry_cookie_dough`
        },
        {
            output: '12x enigmatica:honey_cookie_dough',
            inputs: ['farmersdelight:wheat_dough', 'minecraft:honey_bottle'],
            id: `${id_prefix}honey_cookie_dough`
        },
        {
            output: '12x enigmatica:source_berry_cookie_dough',
            inputs: ['farmersdelight:wheat_dough', '#c:sugars', 'ars_nouveau:sourceberry_bush'],
            id: `${id_prefix}source_berry_cookie_dough`
        },
        {
            output: '4x enigmatica:fire_clay_ball',
            inputs: ['aether:aerogel', 'minecraft:clay', '#c:dusts/ash'],
            id: `${id_prefix}fire_clay_ball`
        },

        // Villager Meals
        {
            output: 'enigmatica:suns_out_buns_out',
            inputs: [
                'farmersdelight:dumplings',
                'farmersdelight:dumplings',
                'farmersdelight:dumplings',
                'farmersdelight:dumplings',
                'farmersdelight:dumplings',
                'farmersdelight:dumplings'
            ],
            id: `${id_prefix}suns_out_buns_out`
        },
        {
            output: 'enigmatica:bun_believable_burger',
            inputs: ['farmersdelight:hamburger', 'farmersdelight:stuffed_potato'],
            id: `${id_prefix}bun_believable_burger`
        },
        {
            output: 'enigmatica:the_bun_also_rises',
            inputs: [
                'ars_nouveau:source_berry_roll',
                'ars_nouveau:source_berry_roll',
                'ars_nouveau:source_berry_roll',
                'ars_nouveau:source_berry_roll',
                'ars_nouveau:source_berry_roll',
                'ars_nouveau:source_berry_roll'
            ],
            id: `${id_prefix}the_bun_also_rises`
        },
        {
            output: 'enigmatica:braising_cain',
            inputs: ['farmersdelight:bacon_sandwich', 'farmersdelight:stuffed_potato'],
            id: `${id_prefix}braising_cain`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
