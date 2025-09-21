ServerEvents.tags('item', (event) => {
    let additions = {
        durability: ['geneticsresequenced:scraper', /justdirethings:bow_(ferricore|blazegold)/, '#c:tools/knife'],
        vanishing: ['#c:tools/knife'],
        armor: ['minecraft:wolf_armor'],
        weapon: ['#c:tools/knife'],
        sword: ['#c:tools/knife'],
        sharp_weapon: ['#c:tools/knife'],
        fire_aspect: ['#c:tools/knife']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:enchantable/${tag}`).add(additions[tag]);
    });
});
