ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/fuel_quality/';

    const recipes = [
        {
            fluid: { tag: 'c:steam' },
            air_per_mb: 10,
            burn_rate: 1.6,
            id: `${id_prefix}steam`
        },
        {
            fluid: { tag: 'c:high_pressure_steam' },
            air_per_mb: 80,
            burn_rate: 1.6,
            id: `${id_prefix}high_pressure_steam`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fuel_quality';
        recipe.air_per_bucket = recipe.air_per_mb * 1000;
        event.custom(recipe).id(recipe.id);
    });
});
