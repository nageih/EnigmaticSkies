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
        },
        {
            output: { id: 'malum:soulwoven_silk', count: 4 },
            ingredient: { tag: 'minecraft:wool', count: 2 },
            extraIngredients: [{ item: 'ars_nouveau:magebloom_fiber', count: 2 }],
            spirits: [
                { type: 'aerial', count: 3 },
                { type: 'earthen', count: 3 }
            ],
            id: `${id_prefix}soulwoven_silk`
        },
        {
            output: { id: 'naturesaura:token_anger', count: 4 },
            ingredient: { item: 'supplementaries:statue', count: 1 },
            extraIngredients: [
                { tag: 'c:essences/fire', count: 4 },
                // { tag: 'c:ingots/steel', count: 1 },
                { tag: 'c:gems/empowered_restonia', count: 1 },
                { item: 'ars_additions:lost_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'infernal', count: 8 },
                { type: 'wicked', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_anger`
        },
        {
            output: { id: 'naturesaura:token_fear', count: 4 },
            ingredient: { item: 'supplementaries:statue', count: 1 },
            extraIngredients: [
                { tag: 'c:essences/earth', count: 4 },
                // { tag: 'c:ingots/copper_alloy', count: 1 },
                { tag: 'c:gems/empowered_emeradic', count: 1 },
                { item: 'ars_additions:lost_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'earthen', count: 8 },
                { type: 'wicked', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_fear`
        },
        {
            output: { id: 'naturesaura:token_joy', count: 4 },
            ingredient: { item: 'supplementaries:statue', count: 1 },
            extraIngredients: [
                { tag: 'c:essences/air', count: 4 },
                // { tag: 'c:ingots/energetic_alloy', count: 1 },
                { tag: 'c:gems/empowered_diamatine', count: 1 },
                { item: 'ars_additions:lost_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'aerial', count: 8 },
                { type: 'sacred', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_joy`
        },
        {
            output: { id: 'naturesaura:token_sorrow', count: 4 },
            ingredient: { item: 'supplementaries:statue', count: 1 },
            extraIngredients: [
                { tag: 'c:essences/water', count: 4 },
                // { tag: 'c:ingots/adamant', count: 1 },
                { tag: 'c:gems/empowered_palis', count: 1 },
                { item: 'ars_additions:lost_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'aqueous', count: 8 },
                { type: 'sacred', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_sorrow`
        },
        {
            output: { id: 'naturesaura:token_grief', count: 4 },
            ingredient: { item: 'naturesaura:token_sorrow', count: 1 },
            extraIngredients: [
                { tag: 'c:gems/fluxite', count: 1 },
                { tag: 'c:essences/anima', count: 4 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_grief`
        },
        {
            output: { id: 'naturesaura:token_euphoria', count: 4 },
            ingredient: { item: 'naturesaura:token_joy', count: 1 },
            extraIngredients: [
                { tag: 'c:gems/fluxite', count: 1 },
                { tag: 'c:essences/anima', count: 4 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_euphoria`
        },
        {
            output: { id: 'naturesaura:token_terror', count: 4 },
            ingredient: { item: 'naturesaura:token_fear', count: 1 },
            extraIngredients: [
                { tag: 'c:gems/fluxite', count: 1 },
                { tag: 'c:essences/anima', count: 4 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_terror`
        },
        {
            output: { id: 'naturesaura:token_rage', count: 4 },
            ingredient: { item: 'naturesaura:token_anger', count: 1 },
            extraIngredients: [
                { tag: 'c:gems/fluxite', count: 1 },
                { tag: 'c:essences/anima', count: 4 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}token_rage`
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
