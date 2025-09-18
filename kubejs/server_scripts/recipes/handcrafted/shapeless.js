ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:handcrafted/shapeless/';

    const recipes = [
        {
            output: 'handcrafted:vindicator_trophy',
            inputs: ['minecraft:clay', 'minecraft:clay', 'naturesaura:token_anger', '#c:tools/knife'],
            damage: { item: '#c:tools/knife', amount: 5 },
            id: `${id_prefix}vindicator_trophy`
        },
        {
            output: 'handcrafted:witch_trophy',
            inputs: ['minecraft:clay', 'minecraft:clay', 'naturesaura:token_sorrow', '#c:tools/knife'],
            damage: { item: '#c:tools/knife', amount: 5 },
            id: `${id_prefix}witch_trophy`
        },
        {
            output: 'handcrafted:evoker_trophy',
            inputs: ['minecraft:clay', 'minecraft:clay', 'naturesaura:token_joy', '#c:tools/knife'],
            damage: { item: '#c:tools/knife', amount: 5 },
            id: `${id_prefix}evoker_trophy`
        },
        {
            output: 'handcrafted:pillager_trophy',
            inputs: ['minecraft:clay', 'minecraft:clay', 'naturesaura:token_fear', '#c:tools/knife'],
            damage: { item: '#c:tools/knife', amount: 5 },
            id: `${id_prefix}pillager_trophy`
        }
    ];

    recipes.forEach((recipe) => {
        let r = event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.damage) r.damageIngredient(recipe.damage.item, recipe.damage.amount);
        if (recipe.replace) r.replaceIngredient(recipe.replace.item, recipe.replace.replacement);
    });
});
