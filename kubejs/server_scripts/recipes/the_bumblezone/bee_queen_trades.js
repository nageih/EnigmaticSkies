ServerEvents.generateData('after_mods', (event) => {
    const recipes = [
        {
            wants: [{ id: 'arsdelight:honey_glazed_chimera', required: true }],
            possible_rewards: [
                {
                    item: { id: 'ae2:mysterious_cube', count: 1 },
                    xp_reward: 50,
                    weight: 1,
                    required: true
                }
            ],
            id_suffix: 'honey_glazed_chimera_trades'
        },
        {
            wants: [{ id: 'aether:enchanted_gravitite', required: true }],
            possible_rewards: [
                {
                    item: { id: 'the_bumblezone:windy_air', count: 32 },
                    xp_reward: 50,
                    weight: 1,
                    required: true
                }
            ],
            id_suffix: 'enchanted_gravitite_trades'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`the_bumblezone:bz_bee_queen_trades/${recipe.id_suffix}`, recipe);
    });
});
