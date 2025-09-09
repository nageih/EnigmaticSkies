ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/mixing/';

    const recipes = [
        {
            results: [{ id: 'enderio:pulsating_crystal', count: 1 }],
            ingredients: [
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/brilliance' },
                { tag: 'c:gems/source' },
                { type: 'fluid_tag', fluid_tag: 'c:lumisene', amount: 1000 }
            ],
            heat_requirement: 'heated',
            id: `${id_prefix}pulsating_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
