ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modern_industrialization/shaped/';

    const recipes = [];

    const gears = [
        'aluminum',
        'bronze',
        'copper',
        'gold',
        'invar',
        'iron',
        'stainless_steel',
        'steel',
        'tin',
        'titanium'
    ];

    gears.forEach((material) => {
        recipes.push({
            output: `modern_industrialization:${material}_gear`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `#c:nuggets/${material}`,
                B: `#c:ingots/${material}`,
                C: '#c:gems/ruby'
            },
            id: `${id_prefix}${material}_gear`
        });
    });

    const rotors = ['aluminum', 'bronze', 'copper', 'stainless_steel', 'tin', 'titanium'];

    rotors.forEach((material) => {
        recipes.push({
            output: `modern_industrialization:${material}_rotor`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: `#c:nuggets/${material}`,
                B: `#c:plates/${material}`,
                C: '#c:gems/ruby'
            },
            id: `${id_prefix}${material}_rotor`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
