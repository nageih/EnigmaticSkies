ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/item_application/';

    const recipes = [
        {
            results: [{ id: 'create:andesite_casing' }],
            ingredients: [{ item: 'actuallyadditions:wood_casing' }, { tag: 'c:ingots/andesite_alloy' }],
            id: `${id_prefix}andesite_casing`
        },
        {
            results: [{ id: 'create:brass_casing' }],
            ingredients: [{ item: 'actuallyadditions:wood_casing' }, { tag: 'c:ingots/brass' }],
            id: `${id_prefix}brass_casing`
        },
        {
            results: [{ id: 'create:copper_casing' }],
            ingredients: [{ item: 'actuallyadditions:wood_casing' }, { tag: 'c:ingots/copper' }],
            id: `${id_prefix}copper_casing`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:item_application';
        event.custom(recipe).id(recipe.id);
    });
});
