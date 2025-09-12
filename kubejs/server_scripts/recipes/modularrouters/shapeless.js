ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:modularrouters/shapeless/';

    const recipes = [
        {
            output: 'modularrouters:vacuum_module',
            inputs: ['modularrouters:blank_module', 'aether:enchanted_gravitite', 'minecraft:hopper'],
            id: `${id_prefix}vacuum_module`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
