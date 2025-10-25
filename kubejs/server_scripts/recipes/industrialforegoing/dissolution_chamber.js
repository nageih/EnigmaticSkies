ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/dissolution_chamber/';

    const recipes = [
        {
            output: { id: 'ae2:fluix_crystal', count: 2 },
            input: [
                { item: 'enderio:pulsating_powder' },
                { tag: 'c:gems/charged_certus' },
                { item: 'arsdelight:activated_bastion_jam' }
            ],
            inputFluid: { fluid: `theurgy:sal_ammoniac`, amount: 100 },
            processingTime: 50,
            id: `${id_prefix}fluix_crystal`
        },
        {
            output: { id: 'industrialforegoing:machine_frame_simple', count: 1 },
            input: [
                { tag: 'c:plates/steel' },
                { item: 'enderio:industrial_insulation_block' },
                { tag: 'c:plates/steel' },
                { item: 'modern_industrialization:analog_circuit' },
                { item: 'modern_industrialization:analog_circuit' },
                { item: 'oritech:basic_battery' },
                { tag: 'c:gears/compressed_iron' },
                { item: 'oritech:basic_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 1000 },
            processingTime: 300,
            id: `${id_prefix}machine_frame_simple`
        },
        {
            output: { id: 'industrialforegoing:machine_frame_advanced', count: 1 },
            input: [
                { tag: 'c:plates/plastic' },
                { item: 'industrialforegoing:machine_frame_simple' },
                { tag: 'c:plates/plastic' },
                { item: 'modern_industrialization:electronic_circuit' },
                { item: 'modern_industrialization:electronic_circuit' },
                { item: 'oritech:advanced_battery' },
                { item: 'enigmatica:antikythera_mechanism' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'oritech:still_strange_matter', amount: 1000 },
            processingTime: 300,
            id: `${id_prefix}machine_frame_advanced`
        },
        {
            output: { id: 'enderio:void_chassis', count: 1 },
            input: [
                { tag: 'c:essences/void_salts' },
                { item: 'industrialforegoing:machine_frame_simple' },
                { tag: 'c:essences/void_salts' },
                { item: 'oritech:carbon_plating_block' },
                { item: 'oritech:carbon_plating_block' },
                { item: 'oritech:advanced_battery' },
                { tag: 'c:gears/dark_steel' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'enderio:fluid_liquid_darkness_still', amount: 1000 },
            processingTime: 300,
            id: `${id_prefix}void_chassis`
        },
        {
            output: { id: 'enderio:ensouled_chassis', count: 1 },
            input: [
                { tag: 'c:ingots/pink_slime' },
                { item: 'industrialforegoing:machine_frame_simple' },
                { tag: 'c:ingots/pink_slime' },
                { item: 'enderio:soul_chain' },
                { item: 'enderio:soul_chain' },
                { tag: 'c:gems/soulstone' },
                { tag: 'c:gears/energized' },
                { tag: 'c:gems/soulstone' }
            ],
            inputFluid: { fluid: 'oritech:still_strange_matter', amount: 1000 },
            processingTime: 300,
            id: `${id_prefix}ensouled_chassis`
        },
        {
            output: { id: 'industrialforegoing:processing_addon_tier_1', count: 1 },
            input: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:wixie_charm' },
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'prettypipes:medium_speed_module' },
                { item: 'prettypipes:medium_speed_module' },
                { item: 'ars_nouveau:source_berry_pie' },
                { item: 'ars_nouveau:source_berry_pie' },
                { item: 'ars_nouveau:source_berry_pie' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 200,
            id: `${id_prefix}processing_addon_tier_1`
        },
        {
            output: { id: 'industrialforegoing:processing_addon_tier_2', count: 1 },
            input: [
                { item: 'enigmatica:antikythera_mechanism' },
                { item: 'ars_nouveau:wixie_charm' },
                { item: 'enigmatica:antikythera_mechanism' },
                { item: 'prettypipes:high_speed_module' },
                { item: 'prettypipes:high_speed_module' },
                { item: 'ars_nouveau:source_berry_pie' },
                { item: 'ars_nouveau:source_berry_pie' },
                { item: 'ars_nouveau:source_berry_pie' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 200,
            id: `${id_prefix}processing_addon_tier_2`
        },
        {
            output: { id: 'industrialforegoing:efficiency_addon_tier_1', count: 1 },
            input: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:alakarkinos_charm' },
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'prettypipes:medium_speed_module' },
                { item: 'prettypipes:medium_speed_module' },
                { item: 'farmersdelight:rice_roll_medley_block' },
                { item: 'farmersdelight:rice_roll_medley_block' },
                { item: 'farmersdelight:rice_roll_medley_block' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 200,
            id: `${id_prefix}efficiency_addon_tier_1`
        },
        {
            output: { id: 'industrialforegoing:efficiency_addon_tier_2', count: 1 },
            input: [
                { item: 'enigmatica:antikythera_mechanism' },
                { item: 'ars_nouveau:alakarkinos_charm' },
                { item: 'enigmatica:antikythera_mechanism' },
                { item: 'prettypipes:high_speed_module' },
                { item: 'prettypipes:high_speed_module' },
                { item: 'farmersdelight:rice_roll_medley_block' },
                { item: 'farmersdelight:rice_roll_medley_block' },
                { item: 'farmersdelight:rice_roll_medley_block' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 200,
            id: `${id_prefix}efficiency_addon_tier_2`
        },
        {
            output: { id: 'industrialforegoing:speed_addon_tier_1', count: 1 },
            input: [
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'ars_nouveau:starbuncle_charm' },
                { item: 'ars_technica:calibrated_precision_mechanism' },
                { item: 'prettypipes:medium_speed_module' },
                { item: 'prettypipes:medium_speed_module' },
                { item: 'enigmatica:the_bun_also_rises' },
                { item: 'enigmatica:the_bun_also_rises' },
                { item: 'enigmatica:the_bun_also_rises' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 200,
            id: `${id_prefix}speed_addon_tier_1`
        },
        {
            output: { id: 'industrialforegoing:speed_addon_tier_2', count: 1 },
            input: [
                { item: 'enigmatica:antikythera_mechanism' },
                { item: 'ars_nouveau:starbuncle_charm' },
                { item: 'enigmatica:antikythera_mechanism' },
                { item: 'prettypipes:high_speed_module' },
                { item: 'prettypipes:high_speed_module' },
                { item: 'enigmatica:the_bun_also_rises' },
                { item: 'enigmatica:the_bun_also_rises' },
                { item: 'enigmatica:the_bun_also_rises' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 200,
            id: `${id_prefix}speed_addon_tier_2`
        },
        {
            output: { id: 'modern_industrialization:cooling_cell', count: 1 },
            input: [
                { tag: 'c:plates/stainless_steel' },
                { item: 'pneumaticcraft:heat_sink' },
                { tag: 'c:plates/stainless_steel' },
                { tag: 'modern_industrialization:fluid_pipes' },
                { tag: 'modern_industrialization:fluid_pipes' },
                { tag: 'c:plates/stainless_steel' },
                { item: 'pneumaticcraft:heat_sink' },
                { tag: 'c:plates/stainless_steel' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 8000 },
            processingTime: 300,
            id: `${id_prefix}cooling_cell`
        }
    ];

    const range_colors = [
        'black',
        'blue',
        'light_gray',
        'gray',
        'red',
        'orange',
        'white',
        'yellow',
        'brown',
        'light_blue',
        'purple',
        'lime'
    ];

    range_colors.forEach((color, i) => {
        recipes.push({
            output: {
                id: `industrialforegoing:range_addon_tier_${i}`,
                components: { 'titanium:augments': { Range: i } },
                count: 2
            },
            input: [
                { item: 'actuallyadditions:restonia_crystal' },
                { item: 'prettypipes:blank_module' },
                { item: `minecraft:${color}_wool` },
                { item: 'actuallyadditions:basic_coil' },
                { item: 'actuallyadditions:basic_coil' },
                { item: `minecraft:${color}_wool` },
                { item: 'prettypipes:blank_module' },
                { item: 'actuallyadditions:palis_crystal' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 200,
            id: `${id_prefix}range_addon_tier_${i}`
        });
    });

    experience_fluids.forEach((fluid) => {
        recipes.push({
            input: [],
            inputFluid: { fluid: fluid, amount: 250 },
            output: { id: 'minecraft:experience_bottle', count: 1 },
            processingTime: 5,
            id: `${id_prefix}experience_bottle_from_${getID(fluid)}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        event.custom(recipe).id(recipe.id);

        if (debug) console.log(recipe.id);
    });
});
