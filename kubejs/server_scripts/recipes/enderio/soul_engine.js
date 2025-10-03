ServerEvents.generateData('after_mods', (event) => {
    let recipes = [
        { id: 'minecraft:blaze' },
        { id: 'minecraft:enderman' },
        { id: 'minecraft:husk' },
        { id: 'minecraft:zombie' },
        { id: 'minecraft:zombie_villager' },
        { id: 'minecraft:creeper' }
    ];

    recipes.forEach((recipe) => {
        event.json(`enderio:eio_soul/engine/${getID(recipe.id)}`, never_load);
    });
});
