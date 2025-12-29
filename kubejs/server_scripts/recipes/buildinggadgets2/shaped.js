ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:buildinggadgets2/shaped/';

    const recipes = [
        {
            output: `buildinggadgets2:gadget_building`,
            pattern: ['ABA', 'DCD', 'AFA'],
            key: {
                A: '#c:gems/enori',
                B: 'supplementaries:crystal_display',
                C: '#c:gems/emerald',
                D: 'ae2:formation_core',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}gadget_building`
        },
        {
            output: `buildinggadgets2:gadget_exchanging`,
            pattern: ['ABA', 'ECD', 'AFA'],
            key: {
                A: '#c:gems/enori',
                B: 'supplementaries:crystal_display',
                C: '#c:gems/emerald',
                D: 'ae2:formation_core',
                E: 'ae2:annihilation_core',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}gadget_exchanging`
        },
        {
            output: `buildinggadgets2:gadget_copy_paste`,
            pattern: ['ABA', 'DCD', 'AFA'],
            key: {
                A: '#c:gems/empowered_enori',
                B: 'supplementaries:crystal_display',
                C: '#c:gems/emerald',
                D: 'ae2:formation_core',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}gadget_copy_paste`
        },
        {
            output: `buildinggadgets2:gadget_cut_paste`,
            pattern: ['ABA', 'ECD', 'AFA'],
            key: {
                A: '#c:gems/empowered_enori',
                B: 'supplementaries:crystal_display',
                C: '#c:gems/ruby',
                D: 'ae2:formation_core',
                E: 'ae2:annihilation_core',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}gadget_cut_paste`
        },
        {
            output: `buildinggadgets2:gadget_destruction`,
            pattern: ['ABA', 'DCD', 'AFA'],
            key: {
                A: '#c:gems/empowered_enori',
                B: 'supplementaries:crystal_display',
                C: '#c:gems/ruby',
                D: 'ae2:annihilation_core',
                F: 'oritech:flux_gate'
            },
            id: `${id_prefix}gadget_destruction`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        
    });
});
