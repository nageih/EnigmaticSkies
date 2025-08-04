ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#c:dyes/green', '#c:dyes/red'],
            id: `${id_prefix}brown_dye_from_green_red`
        },
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#c:dyes/blue', '#c:dyes/red', '#c:dyes/yellow'],
            id: `${id_prefix}brown_dye_from_blue_red_yellow`
        },
        {
            output: '2x minecraft:green_dye',
            inputs: ['#c:dyes/blue', '#c:dyes/yellow'],
            id: `${id_prefix}green_dye_from_blue_yellow`
        },
        {
            output: 'minecraft:green_dye',
            inputs: [
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass',
                'minecraft:short_grass'
            ],
            id: `${id_prefix}green_dye_from_short_grass`
        },
        {
            output: '2x minecraft:yellow_dye',
            inputs: ['#c:dusts/sulfur', '#c:dusts/sulfur'],
            id: `${id_prefix}yellow_dye_from_sulfur`
        },

        {
            output: 'minecraft:yellow_dye',
            inputs: ['minecraft:glow_berries'],
            id: `${id_prefix}yellow_dye_from_glow_berries`
        },

        {
            output: 'minecraft:reinforced_deepslate',
            inputs: [
                'minecraft:polished_deepslate',
                '#c:ingots/iron',
                '#c:ingots/iron',
                '#c:ingots/iron',
                '#c:ingots/iron'
            ],
            id: `${id_prefix}reinforced_deepslate`
        },
        {
            output: '2x minecraft:name_tag',
            inputs: ['#c:strings', 'minecraft:paper'],
            id: `${id_prefix}name_tag`
        },
        {
            output: 'minecraft:dead_bush',
            inputs: ['#minecraft:saplings', 'minecraft:shears'],
            damage: { item: 'minecraft:shears', amount: 1 },
            id: `${id_prefix}dead_bush`
        },
        {
            output: '4x minecraft:quartz',
            inputs: ['#c:storage_blocks/quartz'],
            id: `${id_prefix}quartz`
        },
        {
            output: '4x minecraft:amethyst_shard',
            inputs: ['#c:storage_blocks/amethyst'],
            id: `${id_prefix}amethyst_shard`
        },
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

        // Villager Snacks and Meals
        // Outputs are placeholders until better items can be made.
        {
            output: Item.of(
                `minecraft:paper[custom_name='{"color":"dark_aqua","italic":true,"text":"CloudDash Delivery: Hearty Breakfast"}']`
            ),
            inputs: [
                'supplementaries:pancake',
                'supplementaries:pancake',
                'supplementaries:pancake',
                'farmersdelight:bacon_and_eggs',
                'actuallyadditions:coffee_cup',
                '#farmersdelight:drinks'
            ],
            id: `${id_prefix}hearty_breakfast`
        },
        {
            output: Item.of(
                `minecraft:paper[custom_name='{"color":"dark_aqua","italic":true,"text":"CloudDash Delivery: Kickin Wixies Poutine"}']`
            ),
            inputs: ['enigmatica:poutine', 'farmersdelight:glow_berry_custard', 'arsdelight:source_berry_tea'],
            id: `${id_prefix}kickin_wixies_poutine`
        },
        {
            output: Item.of(
                `minecraft:paper[custom_name='{"color":"dark_aqua","italic":true,"text":"CloudDash Delivery: Soup and Sandwich Combo"}']`
            ),
            inputs: [
                Ingredient.of([
                    'farmersdelight:mutton_wrap',
                    'farmersdelight:hamburger',
                    'farmersdelight:egg_sandwich',
                    'farmersdelight:chicken_sandwich',
                    'farmersdelight:bacon_sandwich'
                ]),
                Ingredient.of([
                    'farmersdelight:chicken_soup',
                    'farmersdelight:beef_stew',
                    'farmersdelight:noodle_soup',
                    'farmersdelight:baked_cod_stew',
                    'farmersdelight:pumpkin_soup',
                    'farmersdelight:fish_stew',
                    'minecraft:rabbit_stew',
                    'farmersdelight:vegetable_soup'
                ]),
                '#farmersdelight:drinks'
            ],
            id: `${id_prefix}soup_and_sandwich`
        },
        {
            output: Item.of(
                `minecraft:paper[custom_name='{"color":"dark_aqua","italic":true,"text":"CloudDash Delivery: Dumpling Drop"}']`
            ),
            inputs: [
                'farmersdelight:dumplings',
                'farmersdelight:dumplings',
                'farmersdelight:noodle_soup',
                'farmersdelight:fried_rice',
                Ingredient.of([
                    'arsdelight:mendosteen_tea',
                    'arsdelight:frostaya_tea',
                    'arsdelight:bombegrante_tea',
                    'arsdelight:bastion_tea'
                ]),
                'farmersdelight:glow_berry_custard'
            ],
            id: `${id_prefix}dumpling_drop`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
