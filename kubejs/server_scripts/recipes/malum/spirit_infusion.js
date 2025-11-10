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
                { item: 'modern_industrialization:rubber_sheet', count: 8 }
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
            output: { id: 'handcrafted:witch_trophy', count: 4 },
            ingredient: { item: 'minecraft:clay', count: 8 },
            extraIngredients: [
                { tag: 'c:essences/anima', count: 4 },
                { item: 'naturesaura:token_sorrow', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'aqueous', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}witch_trophy`
        },
        {
            output: { id: 'handcrafted:evoker_trophy', count: 4 },
            ingredient: { item: 'minecraft:clay', count: 8 },
            extraIngredients: [
                { tag: 'c:essences/anima', count: 4 },
                { item: 'naturesaura:token_joy', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'aerial', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}evoker_trophy`
        },
        {
            output: { id: 'handcrafted:pillager_trophy', count: 4 },
            ingredient: { item: 'minecraft:clay', count: 8 },
            extraIngredients: [
                { tag: 'c:essences/anima', count: 4 },
                { item: 'naturesaura:token_fear', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'earthen', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}pillager_trophy`
        },
        {
            output: { id: 'handcrafted:vindicator_trophy', count: 4 },
            ingredient: { item: 'minecraft:clay', count: 8 },
            extraIngredients: [
                { tag: 'c:essences/anima', count: 4 },
                { item: 'naturesaura:token_anger', count: 1 },
                { item: 'ars_additions:ancient_codex_entry', count: 1 }
            ],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'infernal', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}vindicator_trophy`
        },
        {
            output: { id: 'enderio:prescient_crystal', count: 1 },
            ingredient: { item: 'enderio:vibrant_crystal', count: 1 },
            extraIngredients: [],
            spirits: [
                { type: 'eldritch', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}prescient_crystal`
        },
        {
            output: { id: 'enderio:ender_crystal', count: 1 },
            ingredient: { item: 'minecraft:ender_pearl', count: 1 },
            extraIngredients: [
                { item: 'enderio:ender_crystal_powder', count: 4 },
                { item: 'occultism:crushed_end_stone', count: 4 }
            ],
            spirits: [
                { type: 'aerial', count: 8 },
                { type: 'eldritch', count: 8 },
                { type: 'arcane', count: 8 }
            ],
            id: `${id_prefix}ender_crystal`
        },
        {
            output: { id: 'malum:iridescent_ether', count: 1 },
            ingredient: { item: 'malum:ether', count: 1 },
            extraIngredients: [{ item: 'minecraft:prismarine_crystals', count: 1 }],
            spirits: [{ type: 'sacred', count: 2 }],
            id: `${id_prefix}iridescent_ether`
        },
        {
            output: { id: 'malum:paracausal_flame', count: 1 },
            ingredient: { item: 'malum:ether', count: 1 },
            extraIngredients: [
                { item: 'oritech:enderic_compound', count: 4 },
                { item: 'malum:hex_ash', count: 8 }
            ],
            spirits: [
                { type: 'arcane', count: 8 },
                { type: 'eldritch', count: 8 }
            ],
            id: `${id_prefix}paracausal_flame`
        },
        {
            output: { id: 'malum:zephyr_impetus', count: 1 },
            ingredient: { item: 'malum:alchemical_impetus', count: 1 },
            extraIngredients: [
                { tag: 'c:gems/celestigem', count: 1 },
                { item: 'malum:wind_nucleus', count: 4 },
                { item: 'minecraft:heavy_core', count: 1 }
            ],
            spirits: [
                { type: 'aerial', count: 16 },
                { type: 'arcane', count: 16 }
            ],
            id: `${id_prefix}zephyr_impetus`
        },
        {
            output: { id: 'malum:alchemical_impetus', count: 1 },
            ingredient: { item: 'malum:alchemical_calx', count: 4 },
            extraIngredients: [
                { tag: 'c:gems/soulstone', count: 4 },
                { tag: 'c:essences/hex_ash', count: 2 }
            ],
            spirits: [
                { type: 'arcane', count: 4 },
                { type: 'earthen', count: 4 }
            ],
            id: `${id_prefix}alchemical_impetus`
        },
        {
            output: { id: 'occultism:magic_lamp_empty', count: 1 },
            ingredient: { tag: 'c:ingots/iesnium', count: 4 },
            extraIngredients: [{ item: 'minecraft:cookie', count: 12 }],
            spirits: [
                { type: 'sacred', count: 4 },
                { type: 'arcane', count: 4 },
                { type: 'aqueous', count: 4 },
                { type: 'aerial', count: 4 }
            ],
            id: `${id_prefix}magic_lamp_empty`
        },
        {
            output: { id: 'modern_industrialization:large_steam_turbine', count: 1 },
            ingredient: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
            extraIngredients: [
                { item: 'modern_industrialization:stainless_steel_rotor', count: 12 },
                { item: 'modern_industrialization:advanced_pump', count: 6 },
                { item: 'modern_industrialization:clean_stainless_steel_machine_casing', count: 1 }
            ],
            spirits: [
                { type: 'arcane', count: 64 },
                { type: 'aerial', count: 64 },
                { type: 'aqueous', count: 64 }
            ],
            id: `${id_prefix}large_steam_turbine`
        },
        {
            output: { id: 'ae2:controller', count: 1 },
            ingredient: { item: 'ae2:mysterious_cube', count: 1 },
            extraIngredients: [
                { tag: 'c:gems/mnemonic_fragment', count: 4 },
                { item: 'enigmatica:magic_lamp', count: 1 },
                { item: 'naturesaura:item_distributor', count: 1 }
            ],
            spirits: [
                { type: 'sacred', count: 4 },
                { type: 'arcane', count: 4 },
                { type: 'aqueous', count: 4 },
                { type: 'aerial', count: 4 }
            ],
            id: `${id_prefix}controller`
        }
    ];

    const materials = ['copper', 'gold', 'iron'];

    materials.forEach((material) => {
        recipes.push({
            output: { id: `malum:${material}_impetus`, count: 1 },
            ingredient: { item: 'malum:alchemical_impetus', count: 1 },
            extraIngredients: [
                { item: 'theurgy:alchemical_salt_mineral', count: 8 },
                { item: 'malum:cthonic_gold', count: 1 },
                { tag: `c:ingots/${material}`, count: 16 }
            ],
            spirits: [
                { type: 'earthen', count: 8 },
                { type: 'infernal', count: 8 },
                { type: 'aqueous', count: 8 }
            ],
            id: `${id_prefix}${material}_impetus`
        });
    });

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

        if (debug) console.log(recipe.id);
    });
});
