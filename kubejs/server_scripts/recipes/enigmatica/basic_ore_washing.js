ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:basic_ore_crushing/';
    const recipes = [
        {
            input: { tag: 'c:clumps/gold' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/gold`).getId(), count: 3, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:dusts/gold`).getId(), count: 2, chance: 0.33 },
                { id: AlmostUnified.getTagTargetItem(`c:dusts/salt`).getId(), count: 2, chance: 0.25 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'gold_clump_to_dust'
        },
        {
            input: { tag: 'c:clumps/copper' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/copper`).getId(), count: 3, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:dusts/copper`).getId(), count: 2, chance: 0.33 },
                { id: 'oritech:clay_catalyst_beads', count: 2, chance: 0.25 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'copper_clump_to_dust'
        },
        {
            input: { tag: 'c:clumps/iron' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/iron`).getId(), count: 3, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:dusts/iron`).getId(), count: 2, chance: 0.33 },
                { id: 'oritech:raw_silicon', count: 2, chance: 0.25 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'iron_clump_to_dust'
        }
    ];

    recipes.forEach((recipe) => {
        // Create Washing
        if (!recipe.exclusions.includes('create')) {
            let r = {
                type: 'create:splashing',
                ingredients: [recipe.input],
                results: recipe.outputs
            };
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}`);
        }

        // Modern Industrialization Centrifuge Water
        if (!recipe.exclusions.includes('modern_industrialization')) {
            recipe.input.amount = recipe.input.count;
            let r = {
                type: 'modern_industrialization:centrifuge',
                fluid_inputs: { tag: 'minecraft:water', amount: 1000 },
                item_inputs: recipe.input,
                item_outputs: [],
                eu: recipe.tier * 2,
                duration: recipe.tier * 5 * 20
            };

            recipe.outputs.forEach((output) => {
                r.item_outputs.push({ item: output.id, amount: output.count, probability: output.chance });
            });

            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}_with_water`);
        }

        // Modern Industrialization Centrifuge Sulfuric Acid
        if (!recipe.exclusions.includes('modern_industrialization')) {
            recipe.input.amount = recipe.input.count;
            let r = {
                type: 'modern_industrialization:centrifuge',
                fluid_inputs: { tag: 'c:sulfuric_acid', amount: 1000 },
                item_inputs: recipe.input,
                fluid_outputs: { fluid: 'oritech:still_mineral_slurry', amount: 250 },
                item_outputs: [],
                eu: recipe.tier * 4,
                duration: recipe.tier * 5 * 20
            };

            recipe.outputs.forEach((output) => {
                r.item_outputs.push({ item: output.id, amount: output.count * 1.5, probability: output.chance });
            });
            event.custom(r).id(`${id_prefix}${r.type.replace(':', '/')}/${recipe.id_suffix}_with_sulfuric_acid`);
        }
    });
});
