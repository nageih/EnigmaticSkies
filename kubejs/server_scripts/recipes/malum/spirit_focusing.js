ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_focusing/';

    const recipes = [
        {
            result: { id: 'enderio:weather_crystal', count: 1 },
            input: { item: 'malum:zephyr_impetus' },
            spirits: [
                { type: 'malum:aerial', count: 16 },
                { type: 'malum:arcane', count: 16 },
                { type: 'malum:infernal', count: 16 }
            ],
            durabilityCost: 1,
            time: 60,
            id: `${id_prefix}weather_crystal`
        },

        {
            result: { id: 'enderio:pulsating_crystal', count: 4 },
            input: { item: 'malum:alchemical_impetus' },
            spirits: [{ type: 'malum:sacred', count: 1 }],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}pulsating_crystal`
        },
        {
            result: { id: 'malum:strange_crystal', count: 4 },
            input: { item: 'malum:alchemical_impetus' },
            spirits: [{ type: 'malum:eldritch', count: 1 }],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}strange_crystal`
        },

        {
            result: { id: 'aether:ambrosium_shard', count: 4 },
            input: { item: 'malum:gold_impetus' },
            spirits: [
                { type: 'malum:sacred', count: 2 },
                { type: 'malum:arcane', count: 2 }
            ],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}ambrosium_shard`
        },
        {
            result: { id: 'actuallyadditions:emeradic_crystal', count: 4 },
            input: { item: 'malum:copper_impetus' },
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:sacred', count: 2 }
            ],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}emeradic_crystal`
        },
        {
            result: { id: 'actuallyadditions:palis_crystal', count: 4 },
            input: { item: 'malum:copper_impetus' },
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:aqueous', count: 2 }
            ],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}palis_crystal`
        },
        {
            result: { id: 'actuallyadditions:diamatine_crystal', count: 4 },
            input: { item: 'malum:copper_impetus' },
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:aerial', count: 2 }
            ],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}diamatine_crystal`
        },
        {
            result: { id: 'actuallyadditions:restonia_crystal', count: 4 },
            input: { item: 'malum:copper_impetus' },
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:infernal', count: 2 }
            ],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}restonia_crystal`
        },
        {
            result: { id: 'actuallyadditions:enori_crystal', count: 4 },
            input: { item: 'malum:copper_impetus' },
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:earthen', count: 2 }
            ],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}enori_crystal`
        },
        {
            result: { id: 'actuallyadditions:void_crystal', count: 4 },
            input: { item: 'malum:copper_impetus' },
            spirits: [
                { type: 'malum:arcane', count: 2 },
                { type: 'malum:eldritch', count: 2 }
            ],
            durabilityCost: 1,
            time: 10,
            id: `${id_prefix}void_crystal`
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
            time: 30,
            id: `${id_prefix}node_focusing_${material}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_focusing';
        recipe.time *= 20;
        event.custom(recipe).id(recipe.id);
    });
});
