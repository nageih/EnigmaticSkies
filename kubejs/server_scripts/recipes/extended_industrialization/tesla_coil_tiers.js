ServerEvents.generateData('after_mods', (event) => {
    let data_map = {
        replace: true,
        values: {
            'modern_industrialization:copper_coil': {
                distance: 32,
                drain: 64,
                transfer: 1536
            },
            'modern_industrialization:conductive_coil': {
                distance: 64,
                drain: 256,
                transfer: 6144
            },
            'modern_industrialization:energetic_coil': {
                distance: 128,
                drain: 1024,
                transfer: 49152
            },
            'modern_industrialization:vibrant_coil': {
                distance: 256,
                drain: 4096,
                transfer: 393216
            },
            'modern_industrialization:superconductor_coil': {
                distance: 512,
                drain: 16384,
                transfer: 6144000000
            }
        }
    };
    event.json(`extended_industrialization:data_maps/block/tesla_tower_tier`, data_map);
});
