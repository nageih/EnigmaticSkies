ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/pressing/';

    const recipes = [
        {
            results: [{ id: 'modern_industrialization:andesite_alloy_plate' }],
            ingredients: [{ tag: 'c:ingots/andesite_alloy' }],
            id: `${id_prefix}andesite_alloy_plate`
        }
    ];

    const materials = ['bronze', 'invar', 'platinum', 'tin', 'tungsten'];

    materials.forEach((material) => {
        recipes.push({
            results: [{ id: AlmostUnified.getTagTargetItem(`c:plates/${material}`).getId() }],
            ingredients: [{ tag: `c:ingots/${material}` }],
            id: `${id_prefix}${material}_plate`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:pressing';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
