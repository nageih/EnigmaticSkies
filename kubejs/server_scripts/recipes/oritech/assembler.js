ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/assembler/';
    const recipes = [
        {
            results: [{ id: 'oritech:magnetic_coil', count: 2 }],
            ingredients: [
                { item: 'modern_industrialization:steel_rod_magnetic' },
                { item: 'modern_industrialization:copper_wire' },
                { item: 'modern_industrialization:copper_wire' },
                { item: 'modern_industrialization:copper_wire' }
            ],
            time: 10,
            id: `${id_prefix}magnetic_coil`
        },
        {
            results: [{ id: 'modern_industrialization:motor', count: 1 }],
            ingredients: [
                { item: 'oritech:magnetic_coil' },
                { tag: 'c:plates/steel' },
                { tag: 'c:ingots/energetic_alloy' }
            ],
            time: 10,
            id: `${id_prefix}motor`
        },
        {
            results: [{ id: 'oritech:flux_gate', count: 1 }],
            ingredients: [
                { item: 'actuallyadditions:advanced_coil' },
                { tag: 'c:gems/fluxite' },
                { tag: 'c:ingots/energetic_alloy' },
                { tag: 'c:plates/silicon' }
            ],
            time: 10,
            id: `${id_prefix}flux_gate`
        },
        {
            results: [{ id: 'oritech:clay_catalyst_beads', count: 8 }],
            ingredients: [
                { item: 'minecraft:clay' },
                { item: 'minecraft:clay' },
                { tag: 'c:storage_blocks/sulfur' },
                { item: 'oritech:raw_silicon' }
            ],
            time: 30,
            id: `${id_prefix}clay_catalyst_beads`
        },
        {
            results: [{ id: 'oritech:basic_battery', count: 2 }],
            ingredients: [
                { tag: 'c:gems/restonia' },
                { item: 'actuallyadditions:advanced_coil' },
                { tag: 'c:gems/enori' }
            ],
            time: 10,
            id: `${id_prefix}basic_battery`
        },
        {
            results: [{ id: 'oritech:advanced_battery', count: 2 }],
            ingredients: [
                { item: 'pneumaticcraft:plastic' },
                { item: 'oritech:basic_battery' },
                { tag: 'c:gems/fluxite' },
                { tag: 'c:ingots/steel' }
            ],
            time: 10,
            id: `${id_prefix}advanced_battery`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:assembler';
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
