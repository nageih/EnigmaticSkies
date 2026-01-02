ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/sag_milling/';

    const recipes = [
        {
            input: { item: 'create:rose_quartz' },
            outputs: [
                { item: { id: 'create:polished_rose_quartz', count: 1 } },
                { item: { id: 'create:polished_rose_quartz', count: 1 }, chance: 0.15 }
            ],
            energy: 2400,
            id: `${id_prefix}polished_rose_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:sag_milling';
        event.custom(recipe).id(recipe.id);

        
    });
});
