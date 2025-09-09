ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/shaped/';

    const recipes = [
        {
            output: `2x oritech:magnetic_coil`,
            pattern: [' AB', 'ACA', 'BA '],
            key: {
                A: 'modern_industrialization:copper_wire',
                B: '#c:rods/steel',
                C: 'modern_industrialization:steel_rod_magnetic'
            },
            id: `${id_prefix}magnetic_coil`
        },
        {
            output: `oritech:assembler_block`,
            pattern: ['AAB', 'ACD', 'AEF'],
            key: {
                A: '#c:plates/brass',
                B: 'create:mechanical_arm',
                C: 'industrialforegoing:machine_frame_simple',
                D: '#c:gears/energized',
                E: 'actuallyadditions:advanced_coil',
                F: 'modern_industrialization:motor'
            },
            id: `${id_prefix}assembler_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
