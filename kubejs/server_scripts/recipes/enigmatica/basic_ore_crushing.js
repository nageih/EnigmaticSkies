ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:basic_ore_crushing/';
    const recipes = [
        {
            input: { tag: 'c:raw_materials/gold' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 1, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 1, chance: 0.66 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 1, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 1, chance: 0.15 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'gold_raw_to_clump'
        },
        {
            input: { tag: 'c:storage_blocks/raw_gold' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 9, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 9, chance: 0.66 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/gold`).getId(), count: 9, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 9, chance: 0.15 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'gold_raw_block_to_clump'
        },
        {
            input: { tag: 'c:raw_materials/copper' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 1, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 1, chance: 0.66 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 1, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 1, chance: 0.15 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'copper_raw_to_clump'
        },
        {
            input: { tag: 'c:storage_blocks/raw_copper' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 9, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 9, chance: 0.66 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/copper`).getId(), count: 9, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 9, chance: 0.15 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'copper_raw_block_to_clump'
        },
        {
            input: { tag: 'c:raw_materials/iron' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 1, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 1, chance: 0.66 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 1, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 1, chance: 0.15 }
            ],
            exclusions: [],
            tier: 2,
            id_suffix: 'iron_raw_to_clump'
        },
        {
            input: { tag: 'c:storage_blocks/raw_iron' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 9, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 9, chance: 0.66 },
                { id: AlmostUnified.getTagTargetItem(`c:clumps/iron`).getId(), count: 9, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 9, chance: 0.15 }
            ],
            exclusions: [],
            tier: 2,
            id_suffix: 'iron_raw_block_to_clump'
        },
        {
            input: { tag: 'c:raw_materials/soulstone' },
            outputs: [
                { id: 'malum:crushed_soulstone', count: 1, chance: 1.0 },
                { id: 'malum:crushed_soulstone', count: 1, chance: 0.66 },
                { id: 'malum:crushed_soulstone', count: 1, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 1, chance: 0.15 }
            ],
            exclusions: [],
            tier: 2,
            id_suffix: 'iron_raw_block_to_clump'
        },
        {
            input: { tag: 'c:storage_blocks/raw_soulstone' },
            outputs: [
                { id: 'malum:crushed_soulstone', count: 9, chance: 1.0 },
                { id: 'malum:crushed_soulstone', count: 9, chance: 0.66 },
                { id: 'malum:crushed_soulstone', count: 9, chance: 0.33 },
                { id: 'malum:crushed_brilliance', count: 9, chance: 0.15 }
            ],
            exclusions: [],
            tier: 2,
            id_suffix: 'iron_raw_block_to_clump'
        }
    ];

    recipes.forEach((recipe) => {
        // Ars Nouveau
        if (!recipe.exclusions.includes('ars_nouveau')) {
            let r = {
                type: 'ars_nouveau:crush',
                input: recipe.input,
                output: []
            };

            recipe.outputs.forEach((output) => {
                r.output.push({ stack: output, chance: output.chance, maxRange: 1 });
            });
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Create Crushing
        if (!recipe.exclusions.includes('create')) {
            let r = {
                type: 'create:crushing',
                ingredients: [recipe.input],
                results: recipe.outputs,
                processing_time: recipe.tier * 5 * 20
            };
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Modern Industrialization Macerator
        if (!recipe.exclusions.includes('modern_industrialization')) {
            recipe.input.amount = recipe.input.count;
            let r = {
                type: 'modern_industrialization:macerator',
                item_inputs: recipe.input,
                item_outputs: [],
                eu: recipe.tier * 2,
                duration: recipe.tier * 5 * 20
            };

            recipe.outputs.forEach((output) => {
                r.item_outputs.push({ item: output.id, amount: output.count, probability: output.chance });
            });

            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }
    });
});
