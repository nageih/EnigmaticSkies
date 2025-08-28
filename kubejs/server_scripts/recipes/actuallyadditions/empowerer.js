ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/empowering/';

    const recipes = [
        {
            result: { id: 'oritech:fluxite', count: 1 },
            base: { item: 'enderio:pulsating_crystal' },
            modifiers: [
                { tag: 'c:essences/null_slate' },
                { tag: 'c:gems/mnemonic_fragment' },
                { tag: 'c:essences/null_slate' },
                { tag: 'c:gems/mnemonic_fragment' }
            ],
            color: hexToRgb('#320a37'),
            energy: 5000,
            time: 10,
            id: `${id_prefix}fluxite`
        }
    ];

    event.forEachRecipe({ type: 'actuallyadditions:empowering' }, (r) => {
        let recipe = JSON.parse(r.json);
        let recipe_id = r.getId();

        if (!recipe_id.includes('_canola')) {
            recipe.modifiers = [
                { tag: 'c:essences/water' },
                { tag: 'c:essences/fire' },
                { tag: 'c:essences/air' },
                { tag: 'c:essences/earth' }
            ];
            recipe.id = recipe_id;
        }

        if (recipe.id) recipes.push(recipe);
    });

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:empowering';
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
