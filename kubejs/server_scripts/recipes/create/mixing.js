ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/mixing/';
    const recipes = [];

    // Farmer's Delight Cooking Compat
    event.forEachRecipe({ type: 'farmersdelight:cooking' }, (r) => {
        let source_recipe = JSON.parse(r.json);
        let results = [source_recipe.result];
        let serving_dish = source_recipe.container;
        let recipe_id = r.getId();

        // console.log(`Processing Recipe: ${recipe_id}`);
        // console.log(`Serving Dish: ${serving_dish ? serving_dish.id : 'none'}`);

        // Fix missing serving dishes
        let needs_bottle = [
            'farmersdelight:cooking/hot_cocoa',
            'farmersdelight:cooking/glow_berry_custard',
            'farmersdelight:cooking/apple_cider'
        ];
        let needs_no_dish = ['farmersdelight:cooking/dumplings', 'farmersdelight:cooking/cabbage_rolls'];
        if (!serving_dish) {
            if (needs_bottle.includes(recipe_id)) {
                serving_dish = { id: 'minecraft:glass_bottle', count: 1 };
            } else if (!needs_no_dish.includes(recipe_id)) {
                serving_dish = { id: 'minecraft:bowl', count: 1 };
            }
        }

        // Regular Recipe Handling
        let ingredients = source_recipe.ingredients.map((ingredient) => {
            if (ingredient.tag && ingredient.tag == 'c:milk') {
                ingredient = { fluid_tag: 'c:milk', amount: 250 };
            }
            return ingredient;
        });
        if (serving_dish && serving_dish.id) ingredients.push({ item: serving_dish.id });

        recipes.push({
            results: results,
            ingredients: ingredients,
            heat_requirement: 'heated',
            id: `${id_prefix}${recipe_id.replace(':', '_')}`
        });

        // Burned Recipe Handling
        let ashes = Math.ceil(ingredients.length / 2);

        results = [{ id: 'supplementaries:ash', count: ashes > 0 ? ashes : 1 }];
        let unburnable_dishes = ['minecraft:glass_bottle'];
        if (serving_dish && serving_dish.id) {
            if (unburnable_dishes.includes(serving_dish.id)) {
                results.push(serving_dish);
            } else {
                results.push({ id: 'minecraft:charcoal' });
            }
        }

        recipes.push({
            results: results,
            ingredients: ingredients,
            heat_requirement: 'superheated',
            id: `${id_prefix}${recipe_id.replace(':', '_')}_burned`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
