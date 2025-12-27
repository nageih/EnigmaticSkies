ClientEvents.generateAssets('before_mods', (event) => {
    // https://github.com/emilyploszaj/emi/wiki/Recipe-Filters

    const categories = [
        { id: 'industrialforegoing:ore_washing' },
        { id: 'industrialforegoing:fermentation_station' },
        { id: 'industrialforegoing:fluid_sieve' },
        { id: 'industrialforegoing:bioreactor' },
        { id: '/industrialforegoing:mycellial_/' },

        { id: 'ars_nouveau:scry_ritual' },
        { id: 'oritech:reactor' },
        { id: 'oritech:laser' },
        { id: 'oritech:steam_engine' },
        { id: 'modern_industrialization:neutron_interaction' },
        { id: 'modern_industrialization:thermal_interaction' },
        { id: 'trading_floor:potential_villager_trade' },
        { id: 'pneumaticcraft:uv_light_box' }
    ];

    categories.forEach((category) => {
        let payload = { filters: [{ category: category.id }] };
        event.json(`emi:recipe/filters/${getID(category.id)}`, payload);
    });
});
