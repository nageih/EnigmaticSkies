ServerEvents.tags('item', (event) => {
    let additions = {
        tier_1: ['arsdelight:mendosteen_pie_slice'],
        tier_2: ['arsdelight:bombegrante_pie_slice'],
        tier_3: ['arsdelight:frostaya_pie_slice'],
        tier_4: ['arsdelight:bastion_pie_slice']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`justdirethings:goo_revive_${tag}`).removeAll().add(additions[tag]);
    });
});
