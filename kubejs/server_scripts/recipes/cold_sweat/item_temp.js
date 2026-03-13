// Item Requirements: https://mikul.gitbook.io/cold-sweat/datapacks/requirements/item-requirement
// Item Config: https://mikul.gitbook.io/cold-sweat/datapacks/item-configs#item-temperature

ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            name: 'warm',
            item: { items: ['#enigmatica:warm'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: 0.025,
            trait: 'core'
        },
        {
            name: 'hot',
            item: { items: ['#enigmatica:hot'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: 1.0,
            trait: 'core'
        },
        {
            name: 'super_hot',
            item: { items: ['#enigmatica:super_hot'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: 10.0,
            trait: 'core'
        },
        {
            name: 'chilled',
            item: { items: ['#enigmatica:chilled'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: -0.005,
            trait: 'core'
        },
        {
            name: 'cold',
            item: { items: ['#enigmatica:cold'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: -0.1,
            trait: 'core'
        },
        {
            name: 'super_cold',
            item: { items: ['#enigmatica:super_cold'] },
            slots: ['hand', 'hotbar', 'inventory'],
            temperature: -0.5,
            trait: 'core'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:cold_sweat/item/item_temp/${recipe.name}`, recipe);
    });
});
