ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:justdirethings/shaped/';

    const recipes = [
        {
            output: 'justdirethings:itemcollector',
            pattern: [' A ', 'ABA', ' C '],
            key: {
                A: '#c:ingots/ferricore',
                B: 'aether:enchanted_gravitite',
                C: 'minecraft:hopper'
            },
            id: `${id_prefix}itemcollector`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
