ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            name: 'warm',
            item: { items: ['#enigmatica:warm'] },
            slots: ['hotbar', 'inventory'],
            temperature: 0.2,
            trait: 'core'
        },
        {
            name: 'hot',
            item: { items: ['#enigmatica:hot'] },
            slots: ['hotbar', 'inventory'],
            temperature: 2.0,
            trait: 'core'
        },
        {
            name: 'super_hot',
            item: { items: ['#enigmatica:super_hot'] },
            slots: ['hotbar', 'inventory'],
            temperature: 10.0,
            trait: 'core'
        },
        {
            name: 'cold',
            item: { items: ['#enigmatica:cold'] },
            slots: ['hotbar', 'inventory'],
            temperature: -0.5,
            trait: 'core'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:cold_sweat/item/item_temp/${recipe.name}`, recipe);
    });
});
