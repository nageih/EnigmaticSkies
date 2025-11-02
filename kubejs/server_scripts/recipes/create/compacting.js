ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/compacting/';

    const recipes = [
        {
            results: [{ id: 'actuallyadditions:canola_oil', amount: 160 }],
            ingredients: [{ tag: 'c:crops/canola' }],
            id: `${id_prefix}canola_oil`
        },
        {
            results: [{ id: 'industrialforegoing:ether_gas', amount: 60 }],
            ingredients: [{ item: 'ars_nouveau:frostaya_pod' }],
            id: `${id_prefix}ether_gas`
        },
        {
            results: [{ id: 'industrialforegoing:latex', amount: 60 }],
            ingredients: [{ item: 'minecraft:dandelion' }],
            id: `${id_prefix}latex_from_dandelion`
        },
        {
            results: [{ id: 'industrialforegoing:latex', amount: 120 }],
            ingredients: [{ item: 'minecraft:vine' }],
            id: `${id_prefix}latex_from_vine`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:compacting';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
