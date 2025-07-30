ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/altar/';

    const recipes = [
        {
            input: { item: 'minecraft:calcite' },
            output: { id: 'minecraft:nautilus_shell' },
            catalyst: { item: 'naturesaura:conversion_catalyst' },
            aura: 5000,
            time: 20,
            id: `${id_prefix}nautilus_shell`
        },
        {
            input: { item: 'ae2:sky_stone_block' },
            output: { id: 'naturesaura:infused_stone' },
            aura: 7500,
            time: 40,
            id: `naturesaura:altar/infused_stone`
        },
        {
            input: { item: 'arsdelight:frostaya_jelly' },
            output: { id: 'occultism:soul_gem' },
            aura: 90000,
            time: 300,
            id: `${id_prefix}soul_gem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        event.custom(recipe).id(recipe.id);
    });
});
