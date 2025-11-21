ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/atomic_forge/';
    const recipes = [
        {
            results: [{ id: 'oritech:heisenberg_compensator', count: 1 }],
            ingredients: [
                { item: 'ae2:calculation_processor' },
                { item: 'ae2:quantum_entangled_singularity' },
                { item: 'enderio:sentient_ender' }
            ],
            time: 20,
            id: `${id_prefix}heisenberg_compensator`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:atomic_forge';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
