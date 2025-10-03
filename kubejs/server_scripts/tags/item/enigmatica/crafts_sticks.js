ServerEvents.tags('item', (event) => {
    let additions = [];

    tree_registry.forEach((tree) => {
        if (!tree.log.includes('aether:')) {
            additions.push(tree.log);
            additions.push(tree.stripped_log);
            additions.push(tree.wood);
            additions.push(tree.stripped_wood);
        }
    });

    event.get('enigmatica:crafts_sticks').add(additions);
});
