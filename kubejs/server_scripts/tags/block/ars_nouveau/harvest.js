ServerEvents.tags('block', (event) => {
    let additions = {
        fellable: [/malum:.*runewood_log/],
        foliage: []
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`ars_nouveau:harvest/${tag}`).add(additions[tag]);
    });
});
