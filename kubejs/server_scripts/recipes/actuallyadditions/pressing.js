ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/pressing/';

    const recipes = [
        {
            fluid: { id: 'actuallyadditions:canola_oil', amount: 80 },
            ingredient: { item: 'actuallyadditions:canola' },
            id: `${id_prefix}canola_oil`
        },
        {
            fluid: { id: 'industrialforegoing:latex', amount: 60 },
            ingredient: { item: 'minecraft:dandelion' },
            id: `${id_prefix}latex_from_dandelion`
        },
        {
            fluid: { id: 'industrialforegoing:latex', amount: 120 },
            ingredient: { item: 'minecraft:vine' },
            id: `${id_prefix}latex_from_vine`
        },
        {
            fluid: { id: 'industrialforegoing:ether_gas', amount: 20 },
            ingredient: { item: 'ars_nouveau:frostaya_pod' },
            id: `${id_prefix}ether_gas`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:pressing';
        event.custom(recipe).id(recipe.id);
    });
});
