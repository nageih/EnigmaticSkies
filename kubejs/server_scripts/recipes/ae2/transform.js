ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ae2/transform/';

    const recipes = [
        {
            result: { id: 'ae2:quantum_entangled_singularity', count: 2 },
            ingredients: [{ item: 'ae2:singularity' }, { tag: 'c:tokens/air' }],
            circumstance: { type: 'explosion' },
            id: `${id_prefix}quantum_entangled_singularity`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ae2:transform';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
