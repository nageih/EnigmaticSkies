ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            name: 'warm_stackables',
            item: { items: ['#enigmatica:warm_stackables'] },
            slots: ['hotbar', 'inventory'],
            temperature: 0.2 / 64,
            trait: 'core'
        },
        {
            name: 'hot_unstackables',
            item: { items: ['#enigmatica:hot_unstackables'] },
            slots: ['hotbar', 'inventory'],
            temperature: 0.5,
            trait: 'core'
        },
        {
            name: 'cold_stackables',
            item: { items: ['#enigmatica:cold_stackables'] },
            slots: ['hotbar', 'inventory'],
            temperature: -0.2 / 64,
            trait: 'core'
        },
        {
            name: 'cold_unstackables',
            item: { items: ['#enigmatica:cold_unstackables'] },
            slots: ['hotbar', 'inventory'],
            temperature: -0.2,
            trait: 'core'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:cold_sweat/item/item_temp/${recipe.name}`, recipe);
    });
});
