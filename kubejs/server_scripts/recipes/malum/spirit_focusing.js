ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_focusing/';

    const recipes = [
        {
            result: { id: 'enderio:pulsating_crystal', count: 1 },
            input: { item: 'malum:alchemical_impetus' },
            spirits: [
                { type: 'malum:arcane', count: 4 },
                { type: 'malum:earthen', count: 2 },
                { type: 'malum:aqueous', count: 2 }
            ],
            durabilityCost: 1,
            time: 15,
            id: `${id_prefix}pulsating_crystal`
        },
        {
            result: { id: 'enderio:weather_crystal', count: 1 },
            input: { item: 'malum:zephyr_impetus' },
            spirits: [
                { type: 'malum:aerial', count: 8 },
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:infernal', count: 8 }
            ],
            durabilityCost: 1,
            time: 15,
            id: `${id_prefix}weather_crystal`
        }
    ];

    const materials = ['copper', 'gold', 'iron'];

    materials.forEach((material) => {
        recipes.push({
            result: { id: `malum:${material}_node`, count: 1 },
            input: { item: `malum:${material}_impetus` },
            spirits: [
                { type: 'malum:earthen', count: 2 },
                { type: 'malum:infernal', count: 2 }
            ],
            durabilityCost: 2,
            time: 15,
            id: `${id_prefix}node_focusing_${material}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_focusing';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
