ServerEvents.recipes((event) => {
    // https://wiki.mechanicalmods.net/mods/create-sifter/
    // New recipes require a restart to show in EMI but work fine after /reload

    const id_prefix = 'enigmatica:createsifter/sifting/';

    const recipes = [
        {
            input: { item: 'aether:cold_aercloud' },
            results: [
                { id: 'theurgy:crystallized_water', chance: 0.15 },
                { id: 'ae2:sky_dust', chance: 0.15 },
                { id: 'aether:blue_berry', chance: 0.15 },
                { id: 'minecraft:wheat_seeds', chance: 0.15 }
            ],
            mesh: { id: 'createsifter:string_mesh', count: 1 },
            processingTime: 30,
            id: `${id_prefix}cold_aercloud_sifting_string_mesh`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createsifter:sifting';
        recipe.processingTime = recipe.processingTime * 20;
        event.custom(recipe).id(recipe.id);
    });
});
