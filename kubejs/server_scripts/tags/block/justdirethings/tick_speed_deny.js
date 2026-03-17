ServerEvents.tags('block', (event) => {
    let additions = ['#enigmatica:acceleration_blacklist'];

    event.get(`justdirethings:tick_speed_deny`).add(additions);
});
