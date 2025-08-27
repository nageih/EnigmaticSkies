ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:supplementaries/shaped/';

    const recipes = [
        {
            output: '4x supplementaries:ash_brick',
            pattern: ['AA', 'AA'],
            key: {
                A: 'supplementaries:ash'
            },
            id: `${id_prefix}ash_brick`
        },
        {
            output: 'supplementaries:statue',
            pattern: ['AB', 'CD'],
            key: {
                A: 'minecraft:clay',
                B: 'minecraft:name_tag',
                C: '#c:tools/knife',
                D: '#c:gems/emeradic'
            },
            damage: { item: '#c:tools/knife', amount: 30 },
            id: `${id_prefix}statue`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
