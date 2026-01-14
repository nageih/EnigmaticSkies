ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/atomic_forge/';
    const recipes = [
        {
            results: [{ id: 'oritech:heisenberg_compensator', count: 1 }],
            ingredients: [
                { item: 'ae2:cell_component_256k' },
                { item: 'ae2:quantum_entangled_singularity' },
                { item: 'enderio:sentient_ender' }
            ],
            time: 20,
            id: `${id_prefix}heisenberg_compensator`
        },
        {
            results: [{ id: 'modern_industrialization:mixed_ingot_iridium', count: 1 }],
            ingredients: [{ tag: 'c:ingots/iridium' }, { tag: 'c:ingots/eclipsealloy' }, { item: 'malum:null_slate' }],
            time: 20,
            id: `${id_prefix}mixed_ingot_iridium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:atomic_forge';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
