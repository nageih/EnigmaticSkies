ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/offering/';

    const recipes = [
        {
            output: { id: 'enigmatica:magic_lamp', count: 1 },
            input: { item: 'occultism:magic_lamp_empty' },
            start_item: { item: 'malum:iridescent_ether' },
            id: `${id_prefix}magic_lamp`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:offering';
        event.custom(recipe).id(recipe.id);

        
    });
});
