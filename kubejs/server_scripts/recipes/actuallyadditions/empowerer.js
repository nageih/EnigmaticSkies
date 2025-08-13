ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/empowering/';

    const recipes = [];

    event.forEachRecipe({ type: 'actuallyadditions:empowering' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (!recipe_id.includes('_canola')) {
            recipe.modifiers = [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/air' },
                { tag: 'c:essences/earth' }
            ];
            recipe.id = recipe_id;
        }

        if (recipe.id) recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:empowering';
        event.custom(recipe).id(recipe.id);
    });
});
