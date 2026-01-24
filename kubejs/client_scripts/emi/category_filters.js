ClientEvents.generateAssets('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Recipe-Filters

    emi.categories.hidden.forEach((category) => {
        let payload = { filters: [{ category: category }] };
        event.json(`emi:recipe/filters/${getID(category)}`, payload);
    });
});
