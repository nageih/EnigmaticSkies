ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:enderio/alloy_smelting/';

    const recipes = [
        {
            inputs: [
                { tag: 'c:ingots/steel', count: 1 },
                { tag: 'c:obsidians', count: 1 }
            ],
            output: { id: 'enderio:dark_steel_ingot', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}darksteel_ingot_from_steel`
        },
        {
            inputs: [
                { tag: 'c:ingots/tin', count: 1 },
                { tag: 'c:ingots/copper', count: 3 }
            ],
            output: {
                id: AlmostUnified.getTagTargetItem('c:ingots/bronze').getId(),
                count: 4
            },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}bronze_ingot`
        },
        {
            inputs: [
                { tag: 'c:ingots/sky', count: 2 },
                { item: 'minecraft:netherite_scrap', count: 1 },
                { tag: 'c:ingots/tainted_gold', count: 2 }
            ],
            output: { id: 'naturesaura:depth_ingot', count: 2 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}depth_ingot`
        },

        {
            inputs: [
                { tag: 'c:ingots/gold', count: 2 },
                { item: 'minecraft:netherite_scrap', count: 2 }
            ],
            output: { id: 'minecraft:netherite_ingot', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}netherite_ingot`
        },
        {
            inputs: [
                { tag: 'c:ingots/zinc', count: 1 },
                { tag: 'c:ingots/copper', count: 1 }
            ],
            output: {
                id: AlmostUnified.getTagTargetItem(`c:ingots/brass`).getId(),
                count: 2
            },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}brass_ingot`
        },
        {
            inputs: [
                { tag: 'c:dusts/sky_stone', count: 1 },
                { item: 'minecraft:andesite', count: 1 }
            ],
            output: { id: 'create:andesite_alloy', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}andesite_alloy`
        },
        {
            inputs: [
                { tag: 'c:dusts/redstone', count: 4 },
                { tag: 'c:gems/black_quartz', count: 1 }
            ],
            output: { id: 'create:rose_quartz', count: 1 },
            energy: 6400,
            experience: 0.3,
            id: `${id_prefix}rose_quartz`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'enderio:alloy_smelting';
        event.custom(recipe).id(recipe.id);
    });
});
