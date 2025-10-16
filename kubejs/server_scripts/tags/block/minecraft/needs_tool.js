ServerEvents.tags('block', (event) => {
    let additions = {
        stone: [
            /modern_industrialization:(bronze|steel)_(assembler|centrifuge)/,
            /modern_industrialization:fire_clay_brick_.*_hatch/,
            'mi_tweaks:dilapidated_boiler',
            'mi_tweaks:settling_tank',
            'mi_tweaks:snack_packer'
        ],
        iron: ['minecraft:reinforced_deepslate']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:needs_${tag}_tool`).add(additions[tag]);
    });
});
