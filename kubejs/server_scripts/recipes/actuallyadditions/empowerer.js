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
            result: { id: 'modern_industrialization:electronic_circuit', count: 1 },
            base: { item: 'malum:anomalous_design' },
            modifiers: [
                { item: 'modern_industrialization:analog_circuit' },
                { tag: 'c:gems/fluxite' },
                { item: 'modern_industrialization:analog_circuit' },
                { tag: 'c:gems/fluxite' }
            ],
            color: '#9e0313',
            energy: 5000,
            time: 10,
            id: `${id_prefix}electronic_circuit`
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'actuallyadditions:empowering';
        recipe.time = recipe.time * 20;
        recipe.color = hexToRgb(recipe.color);
        event.custom(recipe).id(recipe.id);
    });
});
