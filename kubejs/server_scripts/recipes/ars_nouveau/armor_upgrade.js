ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/armor_upgrade/';

    const recipes = [
        {
            pedestalItems: [{ item: 'minecraft:conduit' }, { tag: 'c:rods/blaze' }, { tag: 'c:rods/blaze' }],
            sourceCost: 2500,
            tier: 1,
            id: `${id_prefix}tier_1`
        },
        {
            pedestalItems: [{ item: 'malum:soulwoven_silk' }, { tag: 'c:rods/breeze' }, { tag: 'c:rods/breeze' }],
            sourceCost: 5000,
            tier: 2,
            id: `${id_prefix}tier_2`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:armor_upgrade';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
