ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchanting_apparatus/';

    const recipes = [
        {
            result: { id: 'ars_nouveau:sourceberry_bush', count: 1 },

            pedestalItems: [
                { tag: 'c:gems/source' },
                { tag: 'c:gems/source' },
                { tag: 'c:gems/source' },
                { tag: 'c:gems/source' }
            ],
            reagent: { tag: 'c:foods/berry' },
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}sourceberry_bush`
        },
        {
            result: { id: 'aether:berry_bush_stem', count: 1 },

            pedestalItems: [
                { item: 'aether:blue_aercloud' },
                { item: 'aether:blue_aercloud' },
                { item: 'aether:blue_aercloud' },
                { item: 'aether:blue_aercloud' }
            ],
            reagent: { tag: 'c:foods/berry' },
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: `${id_prefix}berry_bush_stem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
