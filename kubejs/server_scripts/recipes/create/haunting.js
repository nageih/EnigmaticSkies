ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/haunting/';

    const recipes = [
        {
            results: [{ id: 'enigmatica:lilys_lilac_cotton_candy' }],
            ingredients: [{ item: 'minecraft:sugar' }],
            id: `${id_prefix}lilys_lilac_cotton_candy`
        },

        {
            results: [
                Item.of(
                    'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:nether"}]'
                ).toJson()
            ],
            ingredients: [
                Ingredient.of(
                    'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]'
                ).toJson()
            ],
            id: `${id_prefix}bottled_ghosts`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:haunting';
        event.custom(recipe).id(recipe.id);

        
    });
});
