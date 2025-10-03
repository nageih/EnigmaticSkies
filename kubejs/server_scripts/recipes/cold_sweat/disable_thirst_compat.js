ServerEvents.generateData('after_mods', (event) => {
    // These error with Thirst missing. Issue reported to Cold Sweat.
    const recipes = [
        { id: 'waterskin_acceptable_campfire' },
        { id: 'waterskin_acceptable_furnace' },
        { id: 'waterskin_purified_campfire' },
        { id: 'waterskin_purified_furnace' },
        { id: 'waterskin_slightly_dirty_campfire' }
    ];

    recipes.forEach((recipe) => {
        event.json(`cold_sweat:recipe/compat/thirst/${recipe.id}`, never_load);
    });
});
