ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/offering/';

    const recipes = [
        {
            output: { id: 'naturesaura:sky_ingot', count: 2 },
            input: { tag: 'c:ingots/soularium' },
            start_item: { item: 'malum:auric_embers' },
            id: `${id_prefix}sky_ingot`
        },
        {
            output: { id: 'naturesaura:clock_hand' },
            input: { item: 'ars_technica:calibrated_precision_mechanism' },
            start_item: { item: 'malum:auric_embers' },
            id: `${id_prefix}clock_hand`
        },
        {
            output: { id: 'naturesaura:token_euphoria', count: 4 },
            input: { tag: 'c:essences/air' },
            start_item: { item: 'supplementaries:statue' },
            id: `${id_prefix}token_euphoria`
        },
        {
            output: { id: 'naturesaura:token_terror', count: 4 },
            input: { tag: 'c:essences/earth' },
            start_item: { item: 'supplementaries:statue' },
            id: `${id_prefix}token_terror`
        },
        {
            output: { id: 'naturesaura:token_grief', count: 4 },
            input: { tag: 'c:essences/water' },
            start_item: { item: 'supplementaries:statue' },
            id: `${id_prefix}token_grief`
        },
        {
            output: { id: 'naturesaura:token_rage', count: 4 },
            input: { tag: 'c:essences/fire' },
            start_item: { item: 'supplementaries:statue' },
            id: `${id_prefix}token_rage`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);
    });
});
