ServerEvents.generateData('before_mods', (event) => {
    let recipes = [
        {
            dna_points_required: 24,
            potion_details: [{ effect: 'cold_sweat:ice_resistance' }],
            id: 'frost_proof'
        },
        {
            dna_points_required: 30,
            potion_details: [{ effect: 'arsdelight:wilden', level: 1 }],
            id: 'wilden'
        },
        {
            dna_points_required: 50,
            potion_details: [{ effect: 'arsdelight:wilden', level: 4 }],
            id: 'wilden_4'
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`geneticsresequenced:geneticsresequenced/gene/${recipe.id}`, recipe);
    });
});
