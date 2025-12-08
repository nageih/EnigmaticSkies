ServerEvents.generateData('after_mods', (event) => {
    reapingData.forEach((recipe) => {
        event.json(`malum:reaping_data/enigmatica/${getID(recipe.registry_name)}`, recipe);
    });
});
