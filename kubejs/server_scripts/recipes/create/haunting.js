ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/haunting/';

    const recipes = [
        {
            results: [{ id: 'enigmatica:lily_s_lilac_cotton_candy' }],
            ingredients: [{ item: 'minecraft:sugar' }],
            id: `${id_prefix}lily_s_lilac_cotton_candy`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:haunting';
        event.custom(recipe).id(recipe.id);
    });
});
