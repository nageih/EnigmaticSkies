ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:basic_ore_washing/';
    const recipes = [
        {
            input: { tag: 'c:clumps/gold' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/gold`).getId(), count: 3, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:dusts/gold`).getId(), count: 2, chance: 0.33 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'gold_clump_to_dust'
        },
        {
            input: { tag: 'c:clumps/copper' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/copper`).getId(), count: 3, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:dusts/copper`).getId(), count: 2, chance: 0.33 }
            ],
            exclusions: [],
            tier: 1,
            id_suffix: 'copper_clump_to_dust'
        },
        {
            input: { tag: 'c:clumps/iron' },
            outputs: [
                { id: AlmostUnified.getTagTargetItem(`c:dusts/iron`).getId(), count: 3, chance: 1.0 },
                { id: AlmostUnified.getTagTargetItem(`c:dusts/iron`).getId(), count: 2, chance: 0.33 }
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
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }

        if (!recipe.exclusions.includes('modern_industrialization')) {
            recipe.input.amount = recipe.input.count;
            let r = {
                type: 'modern_industrialization:alluvial_trommel',
                fluid_inputs: { fluid: 'minecraft:water', amount: 1000 },
                item_inputs: recipe.input,
                fluid_outputs: { fluid: 'enigmatica:wastewater', amount: 1000 },
                item_outputs: [],
                eu: recipe.tier * 2,
                duration: recipe.tier * 5 * 20
            };

            recipe.outputs.forEach((output) => {
                r.item_outputs.push({ item: output.id, amount: output.count * 1.5, probability: output.chance });
            });
            event.custom(r).id(`${id_prefix}${getID(r.type)}/${recipe.id_suffix}`);
        }
    });
});
