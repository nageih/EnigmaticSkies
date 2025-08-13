ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/pressing/';

    const recipes = [];

    const materials = ['bronze', 'invar', 'platinum', 'tin', 'tungsten'];

    materials.forEach((material) => {
        recipes.push({
            ingredients: [{ tag: `c:ingots/${material}` }],
            results: [{ id: AlmostUnified.getTagTargetItem(`c:plates/${material}`).getId() }],
            id: `${id_prefix}${material}_plate`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:pressing';
        event.custom(recipe).id(recipe.id);
    });
});
