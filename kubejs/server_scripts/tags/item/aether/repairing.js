ServerEvents.tags('item', (event) => {
    let additions = {
        neptune: ['#c:essences/water'],
        obsidian: ['minecraft:obsidian'],
        phoenix: ['#c:essences/fire'],
        valkyrie: ['#c:ingots/iridium'],
        lightning: ['#c:essences/air'],
        flaming: ['#c:essences/fire'],
        holy: ['#c:ingots/hallowed_gold'],
        vampire: ['#c:essences/anima'],
        pig_slayer: ['#c:ingots/andesite_alloy']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`aether:${tag}_repairing`).add(additions[tag]);
    });
});
