ServerEvents.generateData('before_mods', (event) => {
    // https://mikul.gitbook.io/cold-sweat/datapacks/item-configs#fuel-items

    const recipes = [
        { input: '#c:steam', fuel: 1000 },
        { input: '#c:water', fuel: -1000 }
    ];

    recipes.forEach((recipe) => {
        let id = getID(recipe.input);
        let entry = { type: 'hearth', fuel: recipe.fuel, item: { items: [recipe.input] } };

        event.json(`enigmatica:cold_sweat/item/fuel/hearth_${id}`, entry);

        if (recipe.fuel > 0) {
            entry.type = 'boiler';
            event.json(`enigmatica:cold_sweat/item/fuel/boiler_${id}`, entry);
        } else {
            entry.type = 'icebox';
            entry.fuel = entry.fuel * -1;
            event.json(`enigmatica:cold_sweat/item/fuel/icebox_${id}`, entry);
        }
    });
});
