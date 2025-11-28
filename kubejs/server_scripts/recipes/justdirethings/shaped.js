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
        },
        {
            output: 'justdirethings:fluidplacert1',
            pattern: ['ABA'],
            key: {
                A: '#c:buckets/empty',
                B: 'justdirethings:blockplacert1'
            },
            id: `${id_prefix}fluidplacert1`
        },
        {
            output: 'justdirethings:fluidcollectort1',
            pattern: ['ABA'],
            key: {
                A: '#c:buckets/empty',
                B: 'justdirethings:blockbreakert1'
            },
            id: `${id_prefix}fluidcollectort1`
        },
        {
            output: 'justdirethings:blockswappert1',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:ingots/blazegold',
                B: 'create:content_observer',
                C: '#c:gems/empowered_restonia',
                D: 'actuallyadditions:ender_casing',
                E: 'ars_technica:calibrated_precision_mechanism'
            },
            id: `${id_prefix}blockswappert1`
        },
        {
            output: 'justdirethings:blockswappert2',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:ingots/eclipsealloy',
                B: 'justdirethings:blockswappert1',
                C: '#c:gems/empowered_restonia',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}blockswappert2`
        }
    ];

    const simple_tier = [
        { output: 'justdirethings:blockbreakert1', input: '#c:gems/empowered_void' },
        { output: 'justdirethings:blockplacert1', input: '#c:gems/empowered_palis' },
        { output: 'justdirethings:clickert1', input: 'create:brass_hand' },
        { output: 'justdirethings:sensort1', input: 'minecraft:observer' },
        { output: 'justdirethings:droppert1', input: 'minecraft:dropper' }
    ];

    simple_tier.forEach((recipe) => {
        recipes.push({
            output: recipe.output,
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: '#c:ingots/ferricore',
                B: 'create:electron_tube',
                C: 'ars_technica:calibrated_precision_mechanism',
                D: 'enderio:ensouled_chassis',
                E: recipe.input
            },
            id: `${id_prefix}${recipe.output.split(':')[1]}`
        });
    });

    const advanced_tier = [
        'justdirethings:blockbreakert2',
        'justdirethings:blockplacert2',
        'justdirethings:clickert2',
        'justdirethings:sensort2',
        'justdirethings:droppert2',
        'justdirethings:fluidplacert2',
        'justdirethings:fluidcollectort2'
    ];

    advanced_tier.forEach((output) => {
        recipes.push({
            output: output,
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#c:gems/celestigem',
                B: output.replace('t2', 't1'),
                C: '#c:gems/empowered_restonia',
                D: 'modern_industrialization:steel_machine_casing',
                E: 'enigmatica:pulsating_mechanism'
            },
            id: `${id_prefix}${output.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
