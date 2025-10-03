ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:smelting/';
    const recipes = [
        {
            output: 'supplementaries:ash',
            input: Ingredient.of(['#aether:planks_crafting', '#minecraft:planks']),
            xp: 0.7,
            cookingTime: 200,
            id: `${id_prefix}ash`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input, recipe.xp, recipe.cookingTime).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
