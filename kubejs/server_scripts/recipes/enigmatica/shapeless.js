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
            output: '4x enigmatica:source_berry_roll_dough',
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
        {
            output: 'enigmatica:source_ink',
            inputs: ['minecraft:glass_bottle', 'ars_nouveau:sourceberry_bush'],
            id: `${id_prefix}source_ink`
        }
    ];

    const pebbles = ['andesite', 'basalt', 'calcite', 'deepslate', 'diorite', 'granite', 'stone', 'tuff'];

    pebbles.forEach((pebble) => {
        let stone = `minecraft:${pebble}`;

        if (pebble == 'stone') {
            stone = 'minecraft:cobblestone';
        }

        if (pebble == 'deepslate') {
            stone = 'minecraft:cobbled_deepslate';
        }

        recipes.push(
            {
                output: `4x enigmatica:${pebble}_pebble`,
                inputs: [stone],
                id: `${id_prefix}${pebble}_pebble`
            },
            {
                output: stone,
                inputs: [
                    `enigmatica:${pebble}_pebble`,
                    `enigmatica:${pebble}_pebble`,
                    `enigmatica:${pebble}_pebble`,
                    `enigmatica:${pebble}_pebble`
                ],
                id: `${id_prefix}${getID(stone)}_from_pebble`
            }
        );
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
