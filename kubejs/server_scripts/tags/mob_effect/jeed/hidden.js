ServerEvents.tags('mob_effect', (event) => {
    let additions = [
        /geneticsresequenced:.*/,
        /occultism:.*/,
        /salem:.*/,

        'ars_additions:marked',
        'ars_nouveau:soaked',

        'malum:sacred_nourishment',
        'malum:wicked_empowerment'
    ];
    event.get('jeed:hidden').add(additions);
});
