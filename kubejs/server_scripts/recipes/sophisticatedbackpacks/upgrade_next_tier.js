ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:sophisticatedbackpacks/upgrade_next_tier/';

    const recipes = [
        {
            result: { id: 'sophisticatedbackpacks:advanced_pump_upgrade', count: 1 },
            pattern: ['DID', 'GPG', 'RRR'],
            key: {
                D: { tag: 'c:gems/diamond' },
                G: { tag: 'c:ingots/gold' },
                I: { item: 'create:mechanical_pump' },
                P: { item: 'sophisticatedbackpacks:pump_upgrade' },
                R: { tag: 'c:dusts/redstone' }
            },
            category: 'misc',
            id: `${id_prefix}advanced_pump_upgrade`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'sophisticatedcore:upgrade_next_tier';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
