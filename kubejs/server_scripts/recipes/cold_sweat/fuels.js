ServerEvents.generateData('before_mods', (event) => {
    // https://mikul.gitbook.io/cold-sweat/datapacks/item-configs#fuel-items

    const recipes = [
        { input: '#c:steam', fuel: 1000 },
        { input: '#c:water', fuel: -1000 }
    ];

    recipes.forEach((recipe) => {
        let id = getID(recipe.input);
        let payload = { type: 'hearth', fuel: recipe.fuel, item: { items: [recipe.input] } };

        event.json(`enigmatica:cold_sweat/item/fuel/hearth_${id}`, payload);

        if (recipe.fuel > 0) {
            payload.type = 'boiler';
            event.json(`enigmatica:cold_sweat/item/fuel/boiler_${id}`, payload);
        } else {
            payload.type = 'icebox';
            payload.fuel = recipe.fuel * -1;
            event.json(`enigmatica:cold_sweat/item/fuel/icebox_${id}`, payload);
        }
    });
});
