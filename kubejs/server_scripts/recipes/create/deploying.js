ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/deploying/';

    const recipes = [
        {
            results: [
                { id: 'minecraft:stripped_bamboo_block', count: 1 },
                { id: 'farmersdelight:straw', count: 1 }
            ],
            ingredients: [{ item: 'minecraft:bamboo_block' }, { tag: 'minecraft:axes' }],
            keep_held_item: true,
            id: `${id_prefix}stripped_bamboo_block`
        },
        {
            results: [
                { id: 'minecraft:stripped_crimson_stem', count: 1 },
                { id: 'farmersdelight:tree_bark', count: 1 }
            ],
            ingredients: [{ item: 'minecraft:crimson_stem' }, { tag: 'minecraft:axes' }],
            keep_held_item: true,
            id: `${id_prefix}stripped_crimson_stem`
        },
        {
            results: [
                { id: 'minecraft:stripped_crimson_hyphae', count: 1 },
                { id: 'farmersdelight:tree_bark', count: 1 }
            ],
            ingredients: [{ item: 'minecraft:crimson_hyphae' }, { tag: 'minecraft:axes' }],
            keep_held_item: true,
            id: `${id_prefix}stripped_crimson_hyphae`
        },
        {
            results: [
                { id: 'minecraft:stripped_warped_stem', count: 1 },
                { id: 'farmersdelight:tree_bark', count: 1 }
            ],
            ingredients: [{ item: 'minecraft:warped_stem' }, { tag: 'minecraft:axes' }],
            keep_held_item: true,
            id: `${id_prefix}stripped_warped_stem`
        },
        {
            results: [
                { id: 'minecraft:stripped_warped_hyphae', count: 1 },
                { id: 'farmersdelight:tree_bark', count: 1 }
            ],
            ingredients: [{ item: 'minecraft:warped_hyphae' }, { tag: 'minecraft:axes' }],
            keep_held_item: true,
            id: `${id_prefix}stripped_warped_hyphae`
        }
    ];

    tree_registry.forEach((tree) => {
        recipes.push(
            {
                results: [
                    { id: tree.stripped_log, count: 1 },
                    { id: tree.bark, count: 1 }
                ],
                ingredients: [{ item: tree.log }, { tag: 'minecraft:axes' }],
                keep_held_item: true,
                id: `${id_prefix}bark_from_${getID(tree.log)}`
            },
            {
                results: [
                    { id: tree.stripped_wood, count: 1 },
                    { id: tree.bark, count: 1 }
                ],
                ingredients: [{ item: tree.wood }, { tag: 'minecraft:axes' }],
                keep_held_item: true,
                id: `${id_prefix}bark_from_${getID(tree.wood)}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'create:deploying';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
