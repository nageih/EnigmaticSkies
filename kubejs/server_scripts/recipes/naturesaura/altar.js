ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/altar/';

    const recipes = [
        {
            input: { item: 'ae2:sky_stone_block' },
            output: { id: 'naturesaura:infused_stone' },
            aura: 7500,
            time: 2,
            id: `naturesaura:altar/infused_stone`
        },
        {
            input: { item: 'arsdelight:frostaya_jelly' },
            output: { id: 'occultism:soul_gem' },
            aura: 90000,
            time: 15,
            id: `${id_prefix}soul_gem`
        },
        {
            input: { item: 'minecraft:charcoal' },
            output: { id: 'minecraft:coal' },
            aura: 4500,
            time: 6,
            id: `naturesaura:altar/coal`
        },
        {
            input: { item: 'mekanism:block_charcoal' },
            output: { id: 'minecraft:coal_block' },
            aura: 36000,
            time: 6,
            id: `${id_prefix}coal_block`
        },
        {
            input: { item: 'oritech:clay_catalyst_beads' },
            output: { id: 'actuallyadditions:black_quartz' },
            aura: 7500,
            time: 2,
            id: `${id_prefix}black_quartz`
        },
        {
            input: { tag: 'c:crops/rice' },
            output: { id: 'minecraft:sugar', count: 2 },
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 3000,
            time: 2,
            id: `${id_prefix}sugar_from_rice`
        },
        {
            input: { tag: 'c:dusts/ruby' },
            output: { id: 'enigmatica:ruby', count: 1 },
            aura: 150000,
            time: 30,
            id: `${id_prefix}ruby`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        recipe.time = recipe.time * 20;
        event.custom(recipe).id(recipe.id);
    });
});
