ServerEvents.tags('item', (event) => {
    let additions = {
        durability: ['geneticsresequenced:scraper', /justdirethings:bow_(ferricore|blazegold)/, '#c:tools/knife'],
        vanishing: ['#c:tools/knife'],
        armor: ['minecraft:wolf_armor'],
        weapon: ['#c:tools/knife', 'ars_hex:enchanter_scythe', 'malum:crude_scythe', 'malum:soul_stained_steel_scythe'],
        sword: ['#c:tools/knife', 'ars_hex:enchanter_scythe', 'malum:crude_scythe', 'malum:soul_stained_steel_scythe'],
        sharp_weapon: [
            '#c:tools/knife',
            'ars_hex:enchanter_scythe',
            'malum:crude_scythe',
            'malum:soul_stained_steel_scythe'
        ],
        fire_aspect: ['#c:tools/knife']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:enchantable/${tag}`).add(additions[tag]);
    });
});
