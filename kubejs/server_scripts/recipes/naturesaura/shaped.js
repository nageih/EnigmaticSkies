ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:naturesaura/shaped/';

    const recipes = [
        {
            output: '8x naturesaura:crimson_aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:crimson_fungus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}crimson_aura_mushroom`
        },
        {
            output: '8x naturesaura:warped_aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:warped_fungus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}warped_aura_mushroom`
        },
        {
            output: '8x naturesaura:aura_bloom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:oxeye_daisy',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}aura_bloom`
        },
        {
            output: '8x naturesaura:aura_cactus',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:cactus',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}aura_cactus`
        },
        {
            output: '8x naturesaura:aura_mushroom',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:red_mushroom',
                B: 'naturesaura:gold_powder'
            },
            id: `${id_prefix}aura_mushroom`
        },
        {
            output: 'naturesaura:moss_generator',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:essences/earth',
                B: 'minecraft:moss_block',
                C: 'ars_nouveau:sourcestone'
            },
            id: 'naturesaura:moss_generator'
        },
        {
            output: 'naturesaura:nature_altar',
            pattern: [' A ', 'BBB', 'CCC'],
            key: {
                A: '#c:gems/source',
                B: 'minecraft:moss_block',
                C: 'minecraft:chiseled_tuff'
            },
            id: `${id_prefix}nature_altar`
        },
        {
            output: 'naturesaura:crushing_catalyst',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/tainted_gold',
                B: 'naturesaura:infused_stone',
                C: 'theurgy:crystallized_water'
            },
            id: `${id_prefix}crushing_catalyst`
        },
        {
            output: 'naturesaura:conversion_catalyst',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/brass',
                B: 'naturesaura:infused_stone',
                C: 'aether:ambrosium_block'
            },
            id: `${id_prefix}conversion_catalyst`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
