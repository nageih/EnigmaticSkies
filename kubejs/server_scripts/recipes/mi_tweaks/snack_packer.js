ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/snack_packer/';

    const recipes = [
        // Villager Meals
        {
            item_outputs: [{ item: 'enigmatica:the_bun_also_rises', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'ars_nouveau:source_berry_roll', amount: 6 }
            ],
            duration: 1,
            id: `${id_prefix}the_bun_also_rises`
        },
        {
            item_outputs: [{ item: 'enigmatica:jaxs_snax', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'enigmatica:lilys_lilac_cotton_candy', amount: 6 },
                { item: 'arsdelight:source_berry_cookie', amount: 12 }
            ],
            duration: 1,
            id: `${id_prefix}jaxs_snax`
        },

        {
            item_outputs: [{ item: 'enigmatica:flappin_jack_s_trove', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'supplementaries:pancake', amount: 12 },
                { item: 'minecraft:honey_bottle', amount: 1 },
                { item: 'farmersdelight:cooked_bacon', amount: 4 },
                { tag: 'enigmatica:meal_ingredients/drink', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}flappin_jacks_trove`
        },
        {
            item_outputs: [{ item: 'enigmatica:great_eggspectations', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'supplementaries:pancake', amount: 6 },
                { item: 'farmersdelight:bacon_and_eggs', amount: 1 },
                { item: 'actuallyadditions:coffee_cup', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/drink', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}great_eggspectations`
        },
        {
            item_outputs: [{ item: 'enigmatica:la_drygmese_poutine', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'enigmatica:poutine', amount: 1 },
                { item: 'enigmatica:lilys_lilac_cotton_candy', amount: 1 },
                { item: 'arsdelight:source_berry_tea', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}la_drygmese_poutine`
        },
        {
            item_outputs: [{ item: 'enigmatica:cozy_cauldron', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/soup', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/sandwich', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/magic_drink', amount: 1 },
                { item: 'arsdelight:source_berry_cookie', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}cozy_cauldron`
        },
        {
            item_outputs: [{ item: 'enigmatica:dumpling_drop', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'farmersdelight:dumplings', amount: 2 },
                { item: 'farmersdelight:noodle_soup', amount: 1 },
                { item: 'farmersdelight:fried_rice', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/magic_drink', amount: 1 },
                { item: 'farmersdelight:glow_berry_custard', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}dumpling_drop`
        },
        {
            item_outputs: [{ item: 'enigmatica:suns_out_buns_out', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'farmersdelight:dumplings', amount: 6 }
            ],
            duration: 1,
            id: `${id_prefix}suns_out_buns_out`
        },
        {
            item_outputs: [{ item: 'enigmatica:bun_believable_burger', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'farmersdelight:hamburger', amount: 1 },
                { item: 'farmersdelight:stuffed_potato', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}bun_believable_burger`
        },
        {
            item_outputs: [{ item: 'enigmatica:sheep_eatin_green', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'farmersdelight:mutton_wrap', amount: 1 },
                { item: 'farmersdelight:mixed_salad', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/drink', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}sheep_eatin_green`
        },
        {
            item_outputs: [{ item: 'enigmatica:flyin_fox', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'farmersdelight:chicken_sandwich', amount: 1 },
                { item: 'farmersdelight:fruit_salad', amount: 1 },
                { item: 'farmersdelight:sweet_berry_cheesecake', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/drink', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}flyin_fox`
        },
        {
            item_outputs: [{ item: 'enigmatica:braising_cain', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'farmersdelight:bacon_sandwich', amount: 1 },
                { item: 'farmersdelight:stuffed_potato', amount: 1 }
            ],
            duration: 1,
            id: `${id_prefix}braising_cain`
        },
        {
            item_outputs: [{ item: 'enigmatica:glazed_and_confused', amount: 4 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'arsdelight:honey_glazed_chimera', amount: 1 },
                { item: 'arsdelight:wilden_salad', amount: 1 },
                { item: 'arsdelight:source_berry_cupcake', amount: 4 },
                { tag: 'enigmatica:meal_ingredients/magic_drink', amount: 4 }
            ],
            duration: 1,
            id: `${id_prefix}glazed_and_confused`
        },

        {
            item_outputs: [{ item: 'enigmatica:beef_bits', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'minecraft:beef', amount: 8 }
            ],
            duration: 1,
            id: `${id_prefix}beef_bits`
        },
        {
            item_outputs: [{ item: 'enigmatica:pork_pieces', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'minecraft:porkchop', amount: 8 }
            ],
            duration: 1,
            id: `${id_prefix}pork_pieces`
        },
        {
            item_outputs: [{ item: 'enigmatica:chicken_chunks', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'minecraft:chicken', amount: 8 }
            ],
            duration: 1,
            id: `${id_prefix}chicken_chunks`
        },
        {
            item_outputs: [{ item: 'enigmatica:mutton_morsels', amount: 1 }],
            item_inputs: [
                { item: 'minecraft:paper', amount: 1 },
                { item: 'minecraft:mutton', amount: 8 }
            ],
            duration: 1,
            id: `${id_prefix}mutton_morsels`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:snack_packer';
        recipe.eu = 1;
        recipe.duration *= 20;

        event.custom(recipe).id(recipe.id);
    });
});
