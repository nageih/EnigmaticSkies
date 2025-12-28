ServerEvents.tags('block', (event) => {
    let additions = {
        pickaxe: [
            'minecraft:reinforced_deepslate',
            /modern_industrialization:(bronze|steel|electric)_(assembler|centrifuge|alluvial_trommel)/,
            /modern_industrialization:fire_clay_brick_.*_hatch/,
            /modern_industrialization:sky_machine/,
            /modern_industrialization:(steam|energetic)_(kiln|alembic)/,
            /modern_industrialization:(copper|vibrant|conductive|energetic)_coil/,
            'mi_tweaks:dilapidated_boiler',
            'mi_tweaks:settling_tank',
            'mi_tweaks:snack_packer'
        ]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:mineable/${tag}`).add(additions[tag]);
    });
});
