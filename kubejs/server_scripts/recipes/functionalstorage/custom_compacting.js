ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:functionalstorage/custom_compacting/';

    const recipes = [
        {
            higher_input: { id: 'ae2:quartz_block', count: 1 },
            lower_input: { id: 'ae2:certus_quartz_crystal', count: 4 },
            id: `${id_prefix}certus_quartz_crystal_to_quartz_block`
        },
        {
            higher_input: { id: 'minecraft:snow_block', count: 1 },
            lower_input: { id: 'minecraft:snowball', count: 4 },
            id: `${id_prefix}snowball_to_snow_block`
        },
        {
            higher_input: { id: 'minecraft:moss_block', count: 2 },
            lower_input: { id: 'minecraft:moss_carpet', count: 3 },
            id: `${id_prefix}moss_carpet_to_moss_block`
        }
    ];

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
            higher_input: { id: stone, count: 1 },
            lower_input: { id: `createsifter:${pebble}_pebble`, count: 4 },
            id: `${id_prefix}${pebble}_pebble_to_${getID(stone)}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'functionalstorage:custom_compacting';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
