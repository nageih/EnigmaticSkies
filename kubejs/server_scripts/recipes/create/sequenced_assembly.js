ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:create/sequenced_assembly/';

    const recipes = [
        {
            results: [{ id: 'create:track' }],
            ingredient: { tag: 'create:sleepers' },
            transitional_item: { id: 'create:incomplete_track' },
            loops: 1,
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'create:incomplete_track' }, { tag: 'c:nuggets/iron' }],
                    results: [{ id: 'create:incomplete_track' }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [{ item: 'create:incomplete_track' }, { tag: 'c:nuggets/iron' }],
                    results: [{ id: 'create:incomplete_track' }]
                },
                {
                    type: 'create:pressing',
                    ingredients: [{ item: 'create:incomplete_track' }],
                    results: [{ id: 'create:incomplete_track' }]
                }
            ],
            id: `${id_prefix}track`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:sequenced_assembly';
        event.custom(recipe).id(recipe.id);
    });
});
