ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/enchanting_apparatus/';

    const recipes = [
        {
            result: { id: 'ars_nouveau:wixie_charm', count: 1 },
            pedestalItems: [
                { item: 'minecraft:brewing_stand' },
                { item: 'arsdelight:source_berry_pie_slice' },
                { item: 'minecraft:crafting_table' },
                { item: 'farmersdelight:beef_stew' }
            ],
            reagent: { item: 'ars_nouveau:wixie_shards' },
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:wixie_charm'
        },
        {
            result: { id: 'ars_nouveau:starbuncle_charm', count: 1 },
            pedestalItems: [
                { item: 'minecraft:golden_carrot' },
                { tag: 'c:nuggets/gold' },
                { tag: 'c:nuggets/gold' },
                { tag: 'c:nuggets/gold' }
            ],
            reagent: { item: 'ars_nouveau:starbuncle_shards' },
            keepNbtOfReagent: false,
            sourceCost: 0,
            id: 'ars_nouveau:starbuncle_charm'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
