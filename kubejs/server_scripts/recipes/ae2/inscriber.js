ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ae2/inscriber/';

    const recipes = [
        {
            result: { id: 'ae2:printed_silicon', count: 1 },
            ingredients: {
                middle: { tag: 'c:dusts/silicon' },
                top: { item: 'ae2:silicon_press' }
            },
            mode: 'inscribe',
            id: 'ae2:inscriber/silicon_print'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = `ae2:inscriber`;
        event.custom(recipe).id(recipe.id);
    });
});
