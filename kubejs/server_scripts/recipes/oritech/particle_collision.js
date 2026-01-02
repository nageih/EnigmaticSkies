/*
    | Signal Strength | Particle Speed | Min Distance From Last Turn | Max Distance Between Guides |
    |:---------------:|:--------------:|:---------------------------:|:---------------------------:|
    |        1        |      0         |              0              |              2              |
    |        2        |      10        |              2              |              3              |
    |        3        |      50        |              3              |              7              |
    |        4        |      75        |              3              |              8              |
    |        5        |      100       |              4              |              10             |
    |        6        |      150       |              5              |              10             |
    |        7        |      250       |              6              |              10             |
    |        8        |      500       |              8              |              10             |
    |        9        |      750       |              10             |              10             |
    |        10       |      1000      |              11             |              10             |
    |        11       |      2500      |              17             |              10             |
    |        12       |      5000      |              24             |              10             |
    |        13       |      7500      |              29             |              10             |
    |        14       |      10000     |              34             |              10             |
    |        15       |      15000     |              41             |              10             |
*/

ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:oritech/particle_collision/';
    const recipes = [
        {
            results: [{ id: 'minecraft:crying_obsidian', count: 1 }],
            ingredients: [{ tag: 'c:nuggets/neptunium' }, { item: 'minecraft:obsidian' }],
            time: 100,
            id: `${id_prefix}crying_obsidian`
        },
        {
            results: [{ id: 'minecraft:chorus_fruit', count: 4 }],
            ingredients: [{ tag: 'c:dusts/echo' }, { item: 'aether:blue_berry' }],
            time: 100,
            id: `${id_prefix}chorus_fruit`
        },
        {
            results: [{ id: 'minecraft:diamond', count: 1 }],
            ingredients: [{ tag: 'c:dusts/carbon' }, { tag: 'c:dusts/carbon' }],
            time: 100,
            id: `${id_prefix}diamond`
        },
        {
            results: [{ id: 'oritech:overcharged_crystal', count: 1 }],
            ingredients: [{ tag: 'c:gems/weather_crystal' }, { tag: 'c:gems/vibrant_crystal' }],
            time: 10000,
            id: `${id_prefix}overcharged_crystal`
        },
        {
            results: [{ id: 'oritech:enderic_compound', count: 1 }],
            ingredients: [{ tag: 'c:gems/ender_crystal' }, { tag: 'c:nuggets/dark_steel' }],
            time: 100,
            id: `${id_prefix}enderic_compound`
        },
        {
            results: [{ id: 'minecraft:heavy_core', count: 1 }],
            ingredients: [{ tag: 'c:ingots/neptunium' }, { tag: 'c:ingots/compressed_iron' }],
            time: 500,
            id: `${id_prefix}heavy_core`
        },
        {
            results: [{ id: 'minecraft:echo_shard', count: 1 }],
            ingredients: [{ tag: 'c:dusts/echo' }, { item: 'aether:life_shard' }],
            time: 100,
            id: `${id_prefix}echo_shard`
        },
        {
            results: [{ id: 'enderio:frank_n_zombie', count: 1 }],
            ingredients: [{ item: 'malum:fused_consciousness' }, { item: 'enderio:z_logic_controller' }],
            time: 5000,
            id: `${id_prefix}frank_n_zombie`
        },
        {
            results: [{ id: 'enderio:sentient_ender', count: 1 }],
            ingredients: [{ item: 'malum:fused_consciousness' }, { item: 'enderio:ender_resonator' }],
            time: 10000,
            id: `${id_prefix}sentient_ender`
        },
        {
            results: [{ id: 'justdirethings:gooblock_tier4', count: 1 }],
            ingredients: [{ item: 'justdirethings:gooblock_tier3' }, { item: 'apothic_enchanting:warden_tendril' }],
            time: 1000,
            id: `${id_prefix}gooblock_tier4`
        },
        {
            results: [{ id: 'the_bumblezone:royal_jelly_bottle', count: 1 }],
            ingredients: [{ item: 'minecraft:honey_bottle' }, { item: 'ars_nouveau:wilden_tribute' }],
            time: 15000,
            id: `${id_prefix}royal_jelly_bottle`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'oritech:particle_collision';
        event.custom(recipe).id(recipe.id);

        
    });
});
