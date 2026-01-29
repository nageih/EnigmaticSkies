ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            name: 'warm',
            item: { items: ['#enigmatica:warm'] },
            slots: ['hotbar', 'inventory'],
            temperature: 0.025,
            trait: 'core'
        },
        {
            name: 'hot',
            item: { items: ['#enigmatica:hot'] },
            slots: ['hotbar', 'inventory'],
            temperature: 1.0,
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
            name: 'chilled',
            item: { items: ['#enigmatica:chilled'] },
            slots: ['hotbar', 'inventory'],
            temperature: -0.02,
            trait: 'core'
        },
        {
            name: 'cold',
            item: { items: ['#enigmatica:cold'] },
            slots: ['hotbar', 'inventory'],
            temperature: -0.1,
            trait: 'core'
        },
        {
            name: 'super_cold',
            item: { items: ['#enigmatica:super_cold'] },
            slots: ['hotbar', 'inventory'],
            temperature: -0.5,
            trait: 'core'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`enigmatica:cold_sweat/item/item_temp/${recipe.name}`, recipe);
    });
});
