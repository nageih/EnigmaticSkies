ServerEvents.tags('item', (event) => {
    let additions = {
        air: ['ars_nouveau:air_essence'],
        fire: ['ars_nouveau:fire_essence'],
        earth: ['ars_nouveau:earth_essence'],
        water: ['ars_nouveau:water_essence'],
        anima: ['ars_elemental:anima_essence'],
        abjuration: ['ars_nouveau:abjuration_essence'],
        conjuration: ['ars_nouveau:conjuration_essence'],
        manipulation: ['ars_nouveau:manipulation_essence'],

        warp_flux: ['malum:warp_flux'],
        blighted_gunk: ['malum:blighted_gunk'],
        brilliance: ['malum:raw_brilliance'],
        cthonic_gold: ['malum:cthonic_gold'],
        malignant_lead: ['malum:malignant_lead'],
        living_flesh: ['malum:living_flesh'],
        astral_weave: ['malum:astral_weave'],
        auric_embers: ['malum:auric_embers'],
        null_slate: ['malum:null_slate'],
        void_salts: ['malum:void_salts'],
        rotting_essence: ['malum:rotting_essence'],
        hex_ash: ['malum:hex_ash'],
        grim_talc: ['malum:grim_talc'],
        alchemical_calx: ['malum:alchemical_calx'],

        greater_air: ['the_bumblezone:essence_radiance'],
        greater_fire: ['the_bumblezone:essence_raging'],
        greater_earth: ['the_bumblezone:essence_life'],
        greater_water: ['the_bumblezone:essence_calming'],
        knowledge: ['the_bumblezone:essence_knowing'],
        rebirth: ['the_bumblezone:essence_continuity']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`c:essences/${tag}`).add(additions[tag]);
        event.get('c:essences').add(additions[tag]);
    });
});
