ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enigmatica/shapeless/';

    const recipes = [
        {
            output: '4x arsdelight:wilden_sauce',
            inputs: [
                'enigmatica:wilden_sauce_bucket',
                'minecraft:bowl',
                'minecraft:bowl',
                'minecraft:bowl',
                'minecraft:bowl'
            ],
            id: `${id_prefix}wilden_sauce`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        
    });
});
