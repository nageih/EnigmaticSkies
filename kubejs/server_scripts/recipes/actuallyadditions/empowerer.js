ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:actuallyadditions/empowering/';

    const recipes = [
        {
            result: { id: 'oritech:fluxite', count: 1 },
            base: { item: 'enderio:pulsating_crystal' },
            modifiers: [
                { tag: 'c:essences/null_slate' },
                { tag: 'c:gems/mnemonic_fragment' },
                { tag: 'c:essences/null_slate' },
                { tag: 'c:gems/mnemonic_fragment' }
            ],
            color: '#320a37',
            energy: 5000,
            time: 10,
            id: `${id_prefix}fluxite`
        },
        {
            result: { id: 'modern_industrialization:digital_circuit', count: 1 },
            base: { tag: 'c:plates/plastic' },
            modifiers: [
                { item: 'modern_industrialization:electronic_circuit' },
                { tag: 'c:gems/prescient_crystal' },
                { item: 'modern_industrialization:electronic_circuit' },
                { tag: 'c:gems/prescient_crystal' }
            ],
            color: '#9e0313',
            energy: 5000,
            time: 10,
            id: `${id_prefix}digital_circuit`
        },
        {
            result: { id: 'actuallyadditions:empowered_canola_seed', count: 1 },
            base: { item: 'actuallyadditions:crystallized_canola_seed' },
            modifiers: [
                { item: 'actuallyadditions:canola_seeds' },
                { item: 'actuallyadditions:canola_seeds' },
                { item: 'actuallyadditions:canola_seeds' },
                { item: 'actuallyadditions:canola_seeds' }
            ],
            color: '#FF5B4C',
            energy: 1000,
            time: 1,
            id: `${id_prefix}empowered_canola_seed`
        },
        {
            result: { id: 'malum:fused_consciousness', count: 1 },
            base: { item: 'malum:complete_design' },
            modifiers: [
                { item: 'naturesaura:token_euphoria' },
                { item: 'naturesaura:token_terror' },
                { item: 'naturesaura:token_rage' },
                { item: 'naturesaura:token_grief' }
            ],
            color: '#0f5f23',
            energy: 50000,
            time: 10,
            id: `${id_prefix}fused_consciousness`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:empowering';
        recipe.time *= 20;
        recipe.color = hexToRgb(recipe.color);
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
