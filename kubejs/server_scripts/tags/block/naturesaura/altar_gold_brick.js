ServerEvents.tags('block', (event) => {
    let additions = [/minecraft:.*copper_bulb/];
    event.get('naturesaura:altar_gold_brick').add(additions);
});
