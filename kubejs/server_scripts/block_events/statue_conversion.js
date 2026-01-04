BlockEvents.rightClicked((event) => {
    const { block, item } = event;

    if (item.id == 'enigmatica:antikythera_mechanism') {
        if (statue_conversions[block.id]) {
            convertToEntity(event, statue_conversions[block.id].mobID, statue_conversions[block.id].mobData);
        }
    }
});
