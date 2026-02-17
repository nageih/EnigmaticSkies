ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/atomic_forge/';
    const recipes = [
        {
            results: [{ id: 'oritech:heisenberg_compensator', count: 1 }],
            ingredients: [
                { item: 'ae2:cell_component_256k' },
                { item: 'ae2:singularity' },
                { item: 'enderio:sentient_ender' }
            ],
            time: 20,
            id: `${id_prefix}heisenberg_compensator`
        },
        {
            results: [{ id: 'modern_industrialization:mixed_ingot_iridium', count: 1 }],
            ingredients: [
                { tag: 'c:ingots/iridium' },
                { tag: 'c:ingots/eclipsealloy' },
                { tag: 'c:ingots/eclipsealloy' }
            ],
            time: 5,
            id: `${id_prefix}mixed_ingot_iridium`
        },
        {
            results: [{ id: 'modern_industrialization:quantum_upgrade', count: 1 }],
            ingredients: [
                { item: 'modern_industrialization:quantum_machine_hull' },
                { item: 'malum:umbral_spirit' },
                { item: 'enigmatica:tempestuous_mechanism' }
            ],
            time: 60,
            id: `${id_prefix}quantum_upgrade`
        },

        {
            results: [{ id: 'enderio:frank_n_zombie', count: 1 }],
            ingredients: [
                { item: 'enderio:z_logic_controller' },
                { item: 'malum:fused_consciousness' },
                { item: 'malum:imitation_heart' }
            ],
            time: 15,
            id: `${id_prefix}frank_n_zombie`
        },
        {
            results: [{ id: 'enderio:sentient_ender', count: 1 }],
            ingredients: [
                { item: 'enderio:ender_resonator' },
                { item: 'malum:fused_consciousness' },
                { item: 'malum:imitation_heart' }
            ],
            time: 30,
            id: `${id_prefix}sentient_ender`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:atomic_forge';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
