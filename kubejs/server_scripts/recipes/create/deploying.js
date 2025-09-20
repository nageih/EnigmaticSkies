ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/deploying/';

    const recipes = [
        // {
        //     results: [{ id: 'ae2:controller', count: 1 }],
        //     ingredients: [{ item: 'ae2:mysterious_cube' }, { item: 'malum:fused_consciousness' }],
        //     keep_held_item: false,
        //     id: `${id_prefix}controller`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:deploying';
        event.custom(recipe).id(recipe.id);
    });
});
