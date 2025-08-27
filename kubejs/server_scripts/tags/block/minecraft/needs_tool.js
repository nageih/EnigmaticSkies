ServerEvents.tags('block', (event) => {
    let additions = {
        stone: [/modern_industrialization:(bronze|steel)_(assembler|centrifuge)/],
        iron: ['minecraft:reinforced_deepslate']
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:needs_${tag}_tool`).add(additions[tag]);
    });
});
