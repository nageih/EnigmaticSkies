ServerEvents.tags('item', (event) => {
    let additions = [/enigmatica:.*_dorodango/, 'enigmatica:melon_ball'];

    event.get('enigmatica:dorodangos').add(additions);
});
