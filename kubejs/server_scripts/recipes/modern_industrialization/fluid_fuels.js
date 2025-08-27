ServerEvents.generateData('after_mods', (event) => {
    const id_prefix = 'enigmatica:modern_industrialization/fluid_fuels/';
    const recipes = {
        replace: true,
        values: {
            '#c:refined_canola_oil': { eu_per_mb: 200 },
            '#c:crystallized_oil': { eu_per_mb: 300 },
            '#c:empowered_oil': { eu_per_mb: 450 },
            '#c:blaze_ember': { eu_per_mb: 700 },
            '#c:voidflame': { eu_per_mb: 1000 },
            '#c:eclipse_ember': { eu_per_mb: 1600 }
        }
    };

    event.json(`modern_industrialization:data_maps/fluid/fluid_fuels`, recipes);
});
