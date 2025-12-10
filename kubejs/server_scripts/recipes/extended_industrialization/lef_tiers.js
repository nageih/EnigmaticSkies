ServerEvents.generateData('after_mods', (event) => {
    let data_map = {
        replace: true,
        values: {
            'modern_industrialization:copper_coil': {
                batch_size: 8,
                eu_cost_multiplier: 0.75
            },
            'modern_industrialization:conductive_coil': {
                batch_size: 16,
                eu_cost_multiplier: 0.75
            },
            'modern_industrialization:energetic_coil': {
                batch_size: 32,
                eu_cost_multiplier: 0.75
            },
            'modern_industrialization:vibrant_coil': {
                batch_size: 64,
                eu_cost_multiplier: 0.75
            }
        }
    };
    event.json(`extended_industrialization:data_maps/block/large_electric_furnace_tier`, data_map);
});
