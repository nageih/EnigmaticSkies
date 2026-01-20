ServerEvents.generateData('after_mods', (event) => {
    const recipes = [
        {
            wants: [{ id: 'enigmatica:luminiferous_aether_bottle', required: true }],
            possible_rewards: [
                {
                    item: { id: 'the_bumblezone:essence_of_the_bees', count: 1 },
                    xp_reward: 50,
                    weight: 1,
                    required: true
                }
            ],
            id_suffix: 'luminiferous_aether_bottle_trades'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`the_bumblezone:bz_bee_queen_trades/${recipe.id_suffix}`, recipe);
    });
});
