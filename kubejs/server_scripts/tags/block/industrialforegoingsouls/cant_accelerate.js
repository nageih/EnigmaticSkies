ServerEvents.tags('block', (event) => {
    let additions = ['#enigmatica:acceleration_blacklist'];

    event.get(`industrialforegoingsouls:cant_accelerate`).add(additions);
});
