ServerEvents.tags('block', (event) => {
    let additions = {
        pickaxe: ['minecraft:reinforced_deepslate', /modern_industrialization:(bronze|steel)_(assembler|centrifuge)/]
    };

    Object.keys(additions).forEach((tag) => {
        event.get(`minecraft:mineable/${tag}`).add(additions[tag]);
    });
});
