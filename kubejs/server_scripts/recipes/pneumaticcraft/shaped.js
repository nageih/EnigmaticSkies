ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:pneumaticcraft/shaped/';

    const recipes = [
        {
            output: 'pneumaticcraft:liquid_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: 'modern_industrialization:bronze_rotor',
                B: 'modern_industrialization:bronze_tank',
                C: 'pneumaticcraft:pressure_tube',
                D: 'modern_industrialization:bronze_compressor',
                E: 'pneumaticcraft:reinforced_bricks'
            },
            id: 'pneumaticcraft:liquid_compressor'
        },
        {
            output: 'pneumaticcraft:advanced_liquid_compressor[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]',
            pattern: ['BBB', 'B C', 'BAB'],
            key: {
                A: 'pneumaticcraft:liquid_compressor',
                B: '#c:ingots/compressed_iron',
                C: 'pneumaticcraft:advanced_pressure_tube'
            },
            id: 'pneumaticcraft:advanced_liquid_compressor'
        },
        {
            output: '2x pneumaticcraft:compressed_iron_gear',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:nuggets/dark_steel',
                B: '#c:ingots/compressed_iron',
                C: '#c:dusts/grains_of_infinity'
            },
            id: `${id_prefix}compressed_iron_gear`
        },
        {
            output: '8x pneumaticcraft:sourdough',
            pattern: ['FFF', 'FYF', 'FFF'],
            key: {
                F: '#c:flours/wheat',
                Y: Ingredient.of({
                    type: 'pneumaticcraft:fluid_container',
                    fluid: { id: 'pneumaticcraft:yeast_culture', amount: 1000 }
                })
            },
            id: `${id_prefix}sourdough`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
