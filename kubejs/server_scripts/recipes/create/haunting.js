ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/haunting/';

    const recipes = [
        {
            results: [{ id: 'ae2:charged_certus_quartz_crystal' }],
            ingredients: [{ item: 'ae2:certus_quartz_crystal' }],
            id: `${id_prefix}charged_certus_quartz_crystal`
        },
        {
            results: [{ id: 'enigmatica:lily_s_pink_cotton_candy' }],
            ingredients: [{ item: 'minecraft:sugar' }],
            id: `${id_prefix}lily_s_pink_cotton_candy`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:haunting';
        event.custom(recipe).id(recipe.id);
    });
});
