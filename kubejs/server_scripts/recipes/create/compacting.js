ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/compacting/';

    const recipes = [
        {
            results: [{ id: 'actuallyadditions:canola_oil', amount: 60 }],
            ingredients: [{ tag: 'c:crops/canola' }],
            id: `${id_prefix}canola_oil`
        },
        {
            results: [{ id: 'industrialforegoing:ether_gas', amount: 60 }],
            ingredients: [{ item: 'ars_nouveau:frostaya_pod' }],
            id: `${id_prefix}ether_gas`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:compacting';
        event.custom(recipe).id(recipe.id);
    });
});
