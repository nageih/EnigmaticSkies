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
            input: { item: 'ars_nouveau:mendosteen_pod' },
            output: { id: 'createsifter:raw_copper_piece' },
            catalyst: { item: 'naturesaura:crushing_catalyst' },
            aura: 600,
            time: 2,
            id: `${id_prefix}raw_copper_piece`
        },
        {
            input: { item: 'ae2:sky_stone_block' },
            output: { id: 'naturesaura:infused_stone' },
            aura: 7500,
            time: 40,
            id: `naturesaura:altar/infused_stone`
        },
        {
            input: { item: 'aether:zanite_gemstone' },
            output: { id: 'occultism:soul_gem' },
            aura: 60000,
            time: 200,
            id: `${id_prefix}soul_gem`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:altar';
        event.custom(recipe).id(recipe.id);
    });
});
