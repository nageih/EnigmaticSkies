ServerEvents.generateData('before_mods', (event) => {
    const recipes = [
        {
            name: 'phoenix',
            mainhands: [{ stack: { id: 'aether:flaming_sword' }, weight: 1, drop_chance: 0 }],
            offhands: [],
            helmets: [{ stack: { id: 'aether:phoenix_helmet' }, weight: 1, drop_chance: 0 }],
            chestplates: [{ stack: { id: 'aether:phoenix_chestplate' }, weight: 1, drop_chance: 0 }],
            leggings: [{ stack: { id: 'aether:phoenix_leggings' }, weight: 1, drop_chance: 0 }],
            boots: [{ stack: { id: 'aether:phoenix_boots' }, weight: 1, drop_chance: 0 }],
            tags: [],
            weight: 0,
            quality: 0
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`gateways:gear_sets/${recipe.name}`, recipe);
    });
});
