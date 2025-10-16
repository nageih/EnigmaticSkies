ServerEvents.tags('block', (event) => {
    let additions = {
        pickaxe: [
            'minecraft:reinforced_deepslate',
            /modern_industrialization:(bronze|steel)_(assembler|centrifuge)/,
            /modern_industrialization:fire_clay_brick_.*_hatch/,
            'mi_tweaks:dilapidated_boiler',
            'mi_tweaks:settling_tank',
            'mi_tweaks:snack_packer'
        ]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:mineable/${tag}`).add(additions[tag]);
    });
});
