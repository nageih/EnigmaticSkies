ServerEvents.generateData('after_mods', (event) => {
    let recipes = [
        { id: 'minecraft:blaze' },
        { id: 'minecraft:enderman' },
        { id: 'minecraft:husk' },
        { id: 'minecraft:zombie' },
        { id: 'minecraft:zombie_villager' }
    ];

    recipes.forEach((recipe) => {
        event.json(`enderio:eio_soul/engine/${recipe.id.replace(':', '_')}`, {
            'neoforge:conditions': [{ type: 'neoforge:never' }]
        });
    });
});
