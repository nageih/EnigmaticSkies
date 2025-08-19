ColdSweatEvents.registries((event) => {
    const recipes = [
        { item: '#enigmatica:planks', fuel: 10 },
        { item: '#minecraft:coals', fuel: 37 },
        { item: '#minecraft:logs_that_burn', fuel: 37 },
        { item: '#c:storage_blocks/coal', fuel: 333 },
        { item: '#c:storage_blocks/charcoal', fuel: 333 },
        { item: '#c:storage_blocks/lignite_coal', fuel: 333 },
        { item: 'minecraft:magma_block', fuel: 333 },
        { item: 'minecraft:lava_bucket', fuel: 1000 },
        { item: '#c:essences/fire', fuel: 1000 },
        { item: '#c:gems/primal_coal', fuel: 111 },
        { item: '#c:storage_blocks/primal_coal', fuel: 1000 },
        { item: 'modern_industrialization:steam_bucket', fuel: 1000 },

        { item: 'minecraft:snowball', fuel: -10 },
        { item: 'minecraft:clay_ball', fuel: -37 },
        { item: 'minecraft:snow_block', fuel: -100 },
        { item: '#c:buckets/powder_snow', fuel: -100 },
        { item: 'minecraft:ice', fuel: -250 },
        { item: 'minecraft:clay', fuel: -333 },
        { item: 'minecraft:packed_ice', fuel: -1000 }
    ];
    recipes.forEach((recipe) => {
        event.addHearthFuel((fuel) => fuel.items(recipe.item).fuel(recipe.fuel));

        if (recipe.fuel > 0) {
            event.addBoilerFuel((fuel) => fuel.items(recipe.item).fuel(recipe.fuel));
        } else {
            event.addIceboxFuel((fuel) => fuel.items(recipe.item).fuel(recipe.fuel * -1));
        }
    });
});
