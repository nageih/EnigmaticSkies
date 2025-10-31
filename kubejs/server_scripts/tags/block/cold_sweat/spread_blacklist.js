ServerEvents.tags('block', (event) => {
    let additions = ['#ars_nouveau:an_false_occlusion'];
    event.get('cold_sweat:hearth/spread_blacklist').add(additions);
});
