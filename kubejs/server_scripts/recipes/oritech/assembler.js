ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/assembler/';
    const recipes = [
        {
            results: [{ id: 'ae2:printed_silicon', count: 2 }],
            ingredients: [{ tag: 'c:dusts/silicon' }],
            time: 160,
            id: `${id_prefix}printed_silicon`
        },
        {
            results: [{ id: 'ae2:printed_calculation_processor', count: 2 }],
            ingredients: [{ tag: 'c:gems/certus_quartz' }],
            time: 160,
            id: `${id_prefix}printed_calculation_processor`
        },
        {
            results: [{ id: 'ae2:calculation_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'ae2:printed_calculation_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}calculation_processor`
        },
        {
            results: [{ id: 'ae2:printed_logic_processor', count: 2 }],
            ingredients: [{ tag: 'c:ingots/gold' }],
            time: 160,
            id: `${id_prefix}printed_logic_processor`
        },
        {
            results: [{ id: 'ae2:logic_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'ae2:printed_logic_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}logic_processor`
        },
        {
            results: [{ id: 'ae2:printed_engineering_processor', count: 2 }],
            ingredients: [{ tag: 'c:gems/diamond' }],
            time: 160,
            id: `${id_prefix}printed_engineering_processor`
        },
        {
            results: [{ id: 'ae2:engineering_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'ae2:printed_engineering_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}engineering_processor`
        },
        {
            results: [{ id: 'advanced_ae:printed_quantum_processor', count: 2 }],
            ingredients: [{ tag: 'c:ingots/quantum_alloy' }],
            time: 160,
            id: `${id_prefix}printed_quantum_processor`
        },
        {
            results: [{ id: 'advanced_ae:quantum_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'advanced_ae:printed_quantum_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}quantum_processor`
        },
        {
            results: [{ id: 'ae2:flawless_budding_quartz', count: 1 }],
            ingredients: [
                { item: 'oritech:enderic_compound' },
                { item: 'oritech:overcharged_crystal' },
                { tag: 'c:gems/certus_quartz' },
                { tag: 'c:gems/certus_quartz' }
            ],
            time: 160,
            id: `${id_prefix}flawless_budding_quartz`
        },
        {
            results: [{ id: 'appflux:printed_energy_processor', count: 2 }],
            ingredients: [{ item: 'appflux:charged_redstone' }],
            time: 160,
            id: `${id_prefix}printed_energy_processor`
        },
        {
            results: [{ id: 'appflux:energy_processor', count: 1 }],
            ingredients: [
                { tag: 'c:dusts/redstone' },
                { item: 'appflux:printed_energy_processor' },
                { item: 'ae2:printed_silicon' }
            ],
            time: 160,
            id: `${id_prefix}energy_processor`
        },
        {
            results: [{ id: 'oritech:magnetic_coil', count: 2 }],
            ingredients: [
                { item: 'modern_industrialization:steel_rod_magnetic' },
                { item: 'modern_industrialization:copper_wire' },
                { item: 'modern_industrialization:copper_wire' },
                { item: 'modern_industrialization:copper_wire' }
            ],
            time: 160,
            id: `${id_prefix}magnetic_coil`
        },
        {
            results: [{ id: 'modern_industrialization:motor', count: 1 }],
            ingredients: [
                { item: 'oritech:magnetic_coil' },
                { tag: 'c:plates/steel' },
                { tag: 'c:ingots/energetic_alloy' }
            ],
            time: 160,
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
            time: 160,
            id: `${id_prefix}flux_gate`
        },
        {
            results: [{ id: 'oritech:clay_catalyst_beads', count: 16 }],
            ingredients: [
                { item: 'minecraft:clay' },
                { item: 'minecraft:clay' },
                { tag: 'c:storage_blocks/sulfur' },
                { item: 'oritech:raw_silicon' }
            ],
            time: 160,
            id: `${id_prefix}clay_catalyst_beads`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:assembler';
        event.custom(recipe).id(recipe.id);
    });
});
