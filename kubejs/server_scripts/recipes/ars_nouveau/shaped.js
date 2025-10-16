ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:ars_nouveau/shaped/';

    const recipes = [
        {
            output: `ars_nouveau:imbuement_chamber`,
            pattern: [' A ', 'B B', 'ACA'],
            key: {
                A: '#c:ingots/gold',
                B: '#c:ingots/andesite_alloy',
                C: '#c:gems/source'
            },
            id: `${id_prefix}imbuement_chamber`
        },
        {
            output: 'ars_nouveau:source_berry_pie',
            pattern: [' A ', 'BBB', 'DCD'],
            key: {
                A: 'ars_nouveau:magebloom',
                B: 'arsdelight:source_berry_jam',
                C: 'farmersdelight:pie_crust',
                D: '#c:sugars'
            },
            id: `${id_prefix}source_berry_pie`
        },
        {
            output: 'ars_nouveau:agronomic_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'farmersdelight:organic_compost',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}agronomic_sourcelink`
        },
        {
            output: 'ars_nouveau:volcanic_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'theurgy:crystallized_lava',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}volcanic_sourcelink`
        },
        {
            output: 'ars_nouveau:alchemical_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'supplementaries:lumisene_bottle',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}alchemical_sourcelink`
        },
        {
            output: 'ars_nouveau:vitalic_sourcelink',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: '#c:storage_blocks/source',
                B: '#c:ingots/hallowed_gold',
                C: 'aether:enchanted_berry',
                D: 'handcrafted:golden_thick_pot'
            },
            id: `${id_prefix}vitalic_sourcelink`
        },
        {
            output: 'ars_nouveau:spell_prism',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#c:ingots/hallowed_gold',
                B: 'ars_nouveau:archwood_planks',
                C: 'naturesaura:infused_stone'
            },
            id: `${id_prefix}spell_prism`
        },
        {
            output: 'create:crimsite',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:red_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_crimsite`
        },
        {
            output: 'create:ochrum',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:yellow_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_ochrum`
        },
        {
            output: 'create:asurine',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:light_blue_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_asurine`
        },
        {
            output: 'create:veridium',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:lime_terracotta',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_veridium`
        },
        {
            output: 'arts_and_crafts:soapstone',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'supplementaries:soap_block',
                B: '#c:essences/conjuration'
            },
            id: `${id_prefix}conjure_soapstone`
        }
    ];

    let conversions = [
        { set: ['create:crimsite', 'create:ochrum', 'create:veridium', 'create:asurine'] },
        { set: ['arts_and_crafts:soapstone', 'arts_and_crafts:gypsum', 'create:limestone'] }
    ];

    conversions.forEach((conversion) => {
        conversion.set.forEach((block, i) => {
            let previous = conversion.set.slice(i - 1)[0];
            recipes.push({
                output: block,
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: previous,
                    B: '#c:essences/manipulation'
                },
                id: `${id_prefix}${getID(block)}_from_${getID(previous)}`
            });
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
