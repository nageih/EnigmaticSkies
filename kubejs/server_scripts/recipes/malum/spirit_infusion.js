ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_infusion/';

    const recipes = [
        {
            output: { id: 'malum:soul_stained_steel_ingot', count: 1 },
            ingredient: { tag: 'c:ingots/steel', count: 1 },
            extraIngredients: [{ item: 'malum:refined_soulstone', count: 4 }],
            spirits: [
                { type: 'wicked', count: 8 },
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}soul_stained_steel_ingot`
        },
        {
            output: { id: 'malum:imitation_flesh', count: 4 },
            ingredient: { item: 'malum:alchemical_calx', count: 4 },
            extraIngredients: [
                { item: 'malum:living_flesh', count: 8 },
                { item: 'oritech:wither_crop_block', count: 4 },
                { item: 'malum:rotting_essence', count: 2 }
            ],
            spirits: [
                { type: 'sacred', count: 16 },
                { type: 'arcane', count: 16 },
                { type: 'aqueous', count: 16 }
            ],
            id: `${id_prefix}imitation_flesh`
        },
        {
            output: { id: 'naturesaura:birth_spirit', count: 4 },
            ingredient: {
                type: 'neoforge:components',
                items: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:overworld' } }
            },
            extraIngredients: [
                { tag: 'c:essences/conjuration', count: 1 },
                { tag: 'c:essences/manipulation', count: 1 }
            ],
            spirits: [
                { type: 'arcane', count: 2 },
                { type: 'sacred', count: 2 }
            ],
            id: `${id_prefix}birth_spirit`
        },
        {
            output: { id: 'naturesaura:calling_spirit', count: 4 },
            ingredient: {
                type: 'neoforge:components',
                items: 'naturesaura:aura_bottle',
                components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:nether' } }
            },
            extraIngredients: [
                { tag: 'c:essences/conjuration', count: 1 },
                { tag: 'c:essences/manipulation', count: 1 }
            ],
            spirits: [
                { type: 'arcane', count: 2 },
                { type: 'wicked', count: 2 }
            ],
            id: `${id_prefix}calling_spirit`
        },
        {
            output: { id: 'justdirethings:gooblock_tier3', count: 1 },
            ingredient: { item: 'justdirethings:gooblock_tier2', count: 1 },
            extraIngredients: [
                {
                    type: 'neoforge:components',
                    items: 'naturesaura:aura_bottle',
                    components: { 'naturesaura:aura_bottle_data': { aura_type: 'naturesaura:end' } },
                    count: 16
                },
                { tag: 'c:gems/empowered_void', count: 16 }
            ],
            spirits: [
                { type: 'arcane', count: 4 },
                { type: 'eldritch', count: 4 },
                { type: 'wicked', count: 4 }
            ],
            id: `${id_prefix}gooblock_tier3`
        },
        {
            output: { id: 'enderio:vibrant_alloy_ingot', count: 1 },
            ingredient: { tag: 'c:ingots/energetic_alloy', count: 1 },
            extraIngredients: [{ item: 'malum:paracausal_flame', count: 1 }],
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 },
                { type: 'earthen', count: 8 }
            ],
            id: `${id_prefix}vibrant_alloy_ingot`
        }
    ];

    const spirits = ['sacred', 'wicked', 'arcane', 'eldritch', 'earthen', 'aerial', 'aqueous', 'infernal'];
    spirits.forEach((spirit) => {
        recipes.push({
            output: { id: `malum:${spirit}_spirited_glass`, count: 8 },
            ingredient: { item: `ae2:quartz_glass`, count: 8 },
            extraIngredients: [{ tag: `c:ingots/andesite_alloy`, count: 1 }],
            spirits: [{ type: spirit, count: 2 }],
            id: `${id_prefix}${spirit}_spirited_glass`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'malum:spirit_infusion';
        event.custom(recipe).id(recipe.id);
    });
});
