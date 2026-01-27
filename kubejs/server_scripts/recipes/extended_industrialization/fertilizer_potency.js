ServerEvents.generateData('after_mods', (event) => {
    let data_map = {
        replace: true,
        values: {
            'extended_industrialization:manure': {
                mb_to_consume_per_fertilizer_tick: 150,
                tick_rate: 25
            },
            'extended_industrialization:composted_manure': {
                mb_to_consume_per_fertilizer_tick: 30,
                tick_rate: 10
            }
        }
    };
    event.json(`extended_industrialization:data_maps/fluid/fertilizer_potency`, data_map);
});
