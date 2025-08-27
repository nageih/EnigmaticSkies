ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/centrifuge/';
    const recipes = [
        {
            results: [{ id: 'oritech:carbon_fibre_strands', count: 1 }],
            ingredients: [{ tag: 'c:dusts/lignite_coal' }],
            time: 100,
            id: `${id_prefix}carbon_fibre_strands_from_lignite_coal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
});
