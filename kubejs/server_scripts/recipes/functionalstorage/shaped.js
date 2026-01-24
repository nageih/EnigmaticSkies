ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:functionalstorage/shaped/';

    const recipes = [
        {
            output: 'functionalstorage:storage_controller',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'minecraft:polished_andesite',
                B: 'enderio:skeletal_contractor',
                C: '#c:plates/andesite_alloy',
                D: 'actuallyadditions:wood_casing',
                E: '#c:gems/restonia'
            },
            id: `${id_prefix}storage_controller`
        },
        {
            output: 'functionalstorage:framed_storage_controller',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:nuggets/iron',
                B: 'functionalstorage:storage_controller'
            },
            id: `${id_prefix}framed_storage_controller`
        },
        {
            output: 'functionalstorage:controller_extension',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'minecraft:polished_andesite',
                B: 'create:transmitter',
                C: '#c:plates/andesite_alloy',
                D: 'actuallyadditions:wood_casing',
                E: '#c:gems/restonia'
            },
            id: `${id_prefix}controller_extension`
        },
        {
            output: 'functionalstorage:framed_controller_extension',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#c:nuggets/iron',
                B: 'functionalstorage:controller_extension'
            },
            id: `${id_prefix}framed_controller_extension`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
