ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:createsifter/shapeless/';

    const recipes = [];

    const pebbles = ['andesite', 'basalt', 'blackstone', 'calcite', 'deepslate', 'diorite', 'granite', 'stone', 'tuff'];

    pebbles.forEach((pebble) => {
        let stone = `minecraft:${pebble}`;

        if (pebble == 'stone') {
            stone = 'minecraft:cobblestone';
        }

        if (pebble == 'deepslate') {
            stone = 'minecraft:cobbled_deepslate';
        }

        recipes.push({
            output: `4x createsifter:${pebble}_pebble`,
            inputs: [stone],
            id: `${id_prefix}${pebble}_pebble`
        });
    });

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);

        if (debug) console.log(recipe.id);
    });
});
