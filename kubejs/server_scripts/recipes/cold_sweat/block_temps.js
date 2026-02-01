ServerEvents.generateData('before_mods', (event) => {
    // Block Requirement: https://mikul.gitbook.io/cold-sweat/datapacks/requirements/block-requirement
    // Block Config: https://mikul.gitbook.io/cold-sweat/datapacks/block-world-configs

    const block_temps = [
        {
            name: 'hot_blocks',
            block: { blocks: ['#enigmatica:temperature/hot'] },
            temperature: 50,
            max_effect: 500
        },
        {
            name: 'warm_lit_blocks',
            block: { blocks: ['#enigmatica:temperature/warm_lit'], state: { lit: true } },
            temperature: 21.5,
            max_effect: 50,
            logarithmic: true
        },
        {
            name: 'cool_lit_blocks',
            block: { blocks: ['#enigmatica:temperature/cool_lit'], state: { lit: true } },
            temperature: -12,
            max_effect: 0,
            logarithmic: true
        }
    ];

    block_temps.forEach((block_temp) => {
        block_temp.units = 'c';
        if (!block_temp.range) block_temp.range = 7;
        event.json(`enigmatica:cold_sweat/block/block_temp/${block_temp.name}`, block_temp);
    });
});
