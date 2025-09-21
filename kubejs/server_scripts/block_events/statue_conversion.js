BlockEvents.rightClicked((event) => {
    const { block, item } = event;

    if (item.id == 'enigmatica:antikythera_mechanism') {
        if (block.id == 'handcrafted:witch_trophy') {
            convertToEntity(event, 'minecraft:witch', 'supplementaries:air_burst', 1, 0.75);
        }

        if (block.id == 'handcrafted:evoker_trophy') {
            convertToEntity(event, 'minecraft:evoker', 'supplementaries:air_burst', 1, 0.75);
        }

        if (block.id == 'handcrafted:vindicator_trophy') {
            convertToEntity(event, 'minecraft:vindicator', 'supplementaries:air_burst', 1, 0.75);
        }

        if (block.id == 'handcrafted:pillager_trophy') {
            convertToEntity(event, 'minecraft:pillager', 'supplementaries:air_burst', 1, 0.75);
        }
    }
});
