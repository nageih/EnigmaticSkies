ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:malum/spirit_infusion/';

    const recipes = [
        {
            output: { id: 'malum:soul_stained_steel_ingot', count: 1 },
            ingredient: { tag: 'c:ingots/steel', count: 1 },
            extraIngredients: [{ item: 'malum:refined_soulstone', count: 4 }],
            spirits: [
                { type: 'wicked', count: 3 },
                { type: 'earthen', count: 1 },
                { type: 'arcane', count: 1 }
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
