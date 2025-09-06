ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/assembler/';

    const recipes = [
        {
            item_outputs: [{ item: 'modern_industrialization:cupronickel_cable', amount: 6 }],
            item_inputs: [
                { item: 'modern_industrialization:copper_cable', amount: 6 },
                { tag: 'c:ingots/conductive_alloy', amount: 3 }
            ],
            fluid_inputs: [{ tag: 'c:vulcanized_rubber', amount: 300 }],
            eu: 4,
            duration: 100,
            id: `${id_prefix}cupronickel_cable`
        },

        // Villager Meals
        {
            item_outputs: [{ item: 'enigmatica:great_eggspectations', amount: 1 }],
            item_inputs: [
                { item: 'supplementaries:pancake', amount: 6 },
                { item: 'farmersdelight:bacon_and_eggs', amount: 1 },
                { item: 'actuallyadditions:coffee_cup', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/drink', amount: 1 }
            ],
            eu: 1,
            duration: 100,
            id: `${id_prefix}great_eggspectations`
        },
        {
            item_outputs: [{ item: 'enigmatica:la_drygmese_poutine', amount: 1 }],
            item_inputs: [
                { item: 'enigmatica:poutine', amount: 1 },
                { item: 'farmersdelight:glow_berry_custard', amount: 1 },
                { item: 'arsdelight:source_berry_tea', amount: 1 }
            ],
            eu: 1,
            duration: 100,
            id: `${id_prefix}la_drygmese_poutine`
        },
        {
            item_outputs: [{ item: 'enigmatica:cozy_cauldron', amount: 1 }],
            item_inputs: [
                { tag: 'enigmatica:meal_ingredients/soup', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/sandwich', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/drink', amount: 1 },
                { item: 'arsdelight:source_berry_cookie', amount: 1 }
            ],
            eu: 1,
            duration: 100,
            id: `${id_prefix}cozy_cauldron`
        },
        {
            item_outputs: [{ item: 'enigmatica:dumpling_drop', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:dumplings', amount: 2 },
                { item: 'farmersdelight:noodle_soup', amount: 1 },
                { item: 'farmersdelight:fried_rice', amount: 1 },
                { tag: 'enigmatica:meal_ingredients/magic_drink', amount: 1 },
                { item: 'farmersdelight:glow_berry_custard', amount: 1 }
            ],
            eu: 1,
            duration: 100,
            id: `${id_prefix}dumpling_drop`
        },
        {
            item_outputs: [{ item: 'enigmatica:bottomless_breadsticks', amount: 1 }],
            item_inputs: [{ item: 'minecraft:bread', amount: 8 }],
            eu: 1,
            duration: 100,
            id: `${id_prefix}bottomless_breadsticks`
        },
        {
            item_outputs: [{ item: 'enigmatica:bun_believable_burger', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:hamburger', amount: 1 },
                { item: 'farmersdelight:stuffed_potato', amount: 1 }
            ],
            eu: 1,
            duration: 100,
            id: `${id_prefix}bun_believable_burger`
        },
        {
            item_outputs: [{ item: 'enigmatica:sheep_eatin_green', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:mutton_wrap', amount: 1 },
                { item: 'farmersdelight:mixed_salad', amount: 1 }
            ],
            eu: 1,
            duration: 100,
            id: `${id_prefix}sheep_eatin_green`
        },
        {
            item_outputs: [{ item: 'enigmatica:flyin_fox', amount: 1 }],
            item_inputs: [
                { item: 'farmersdelight:roast_chicken_block', amount: 1 },
                { item: 'farmersdelight:fruit_salad', amount: 1 },
                { item: 'farmersdelight:sweet_berry_cheesecake', amount: 1 }
            ],
            eu: 1,
            duration: 100,
            id: `${id_prefix}flyin_fox`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:assembler';
        event.custom(recipe).id(recipe.id);
    });
});
