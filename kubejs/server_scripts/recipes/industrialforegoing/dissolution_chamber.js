ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/dissolution_chamber/';

    const recipes = [
        {
            output: { id: 'ae2:fluix_crystal', count: 6 },
            input: [
                { item: 'arsdelight:activated_bastion_jam' },
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:gems/pulsating_crystal' },
                { tag: 'c:gems/pulsating_crystal' },
                { tag: 'c:gems/pulsating_crystal' }
            ],
            inputFluid: { fluid: `sauce:source_fluid`, amount: 1000 },
            processingTime: 30,
            id: `${id_prefix}fluix_crystal`
        },
        {
            output: { id: 'modern_industrialization:steel_machine_casing', count: 1 },
            input: [
                { item: 'enderio:zombie_electrode' },
                { item: 'enderio:industrial_insulation_block' },
                { item: 'enderio:zombie_electrode' },
                { item: 'modern_industrialization:steel_large_plate' },
                { item: 'modern_industrialization:steel_large_plate' },
                { item: 'oritech:basic_battery' },
                { item: 'enderio:ensouled_chassis' },
                { item: 'oritech:basic_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 1000 },
            processingTime: 60,
            id: `${id_prefix}steel_machine_casing`
        },
        {
            output: { id: 'modern_industrialization:clean_stainless_steel_machine_casing', count: 1 },
            input: [
                { item: 'enderio:z_logic_controller' },
                { item: 'enderio:industrial_insulation_block' },
                { item: 'enderio:z_logic_controller' },
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { item: 'oritech:advanced_battery' },
                { item: 'enderio:ensouled_chassis' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 1000 },
            processingTime: 120,
            id: `${id_prefix}clean_stainless_steel_machine_casing`
        },
        {
            output: { id: 'modern_industrialization:sky_machine_casing', count: 1 },
            input: [
                { item: 'enderio:frank_n_zombie' },
                { item: 'modern_industrialization:cooling_cell' },
                { item: 'enderio:frank_n_zombie' },
                { item: 'modern_industrialization:sky_large_plate' },
                { item: 'modern_industrialization:sky_large_plate' },
                { item: 'oritech:advanced_battery' },
                { item: 'enderio:ensouled_chassis' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 1000 },
            processingTime: 120,
            id: `${id_prefix}sky_machine_casing`
        },
        {
            output: { id: 'modern_industrialization:quantum_machine_casing', count: 1 },
            input: [
                { item: 'oritech:heisenberg_compensator' },
                { item: 'modern_industrialization:cooling_cell' },
                { item: 'oritech:heisenberg_compensator' },
                { item: 'modern_industrialization:iridium_large_plate' },
                { item: 'modern_industrialization:iridium_large_plate' },
                { item: 'oritech:overcharged_crystal' },
                { item: 'enderio:ensouled_chassis' },
                { item: 'oritech:overcharged_crystal' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 1000 },
            processingTime: 180,
            id: `${id_prefix}quantum_machine_casing`
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
            processingTime: 15,
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
            processingTime: 15,
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
            processingTime: 15,
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
            processingTime: 15,
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
            processingTime: 15,
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
            processingTime: 15,
            id: `${id_prefix}speed_addon_tier_2`
        },
        {
            output: { id: 'modern_industrialization:cooling_cell', count: 1 },
            input: [
                { item: 'pneumaticcraft:advanced_pressure_tube' },
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { item: 'pneumaticcraft:advanced_pressure_tube' },
                { item: 'modern_industrialization:sky_large_plate' },
                { item: 'modern_industrialization:sky_large_plate' },
                { item: 'pneumaticcraft:advanced_pressure_tube' },
                { item: 'modern_industrialization:stainless_steel_large_plate' },
                { item: 'pneumaticcraft:advanced_pressure_tube' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 8000 },
            processingTime: 90,
            id: `${id_prefix}cooling_cell`
        },
        {
            output: { id: 'industrialforegoing:pink_slime_ingot', count: 2 },
            input: [{ tag: 'c:ingots/infused_iron' }, { tag: 'c:ingots/infused_iron' }],
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 2000 },
            processingTime: 30,
            id: `${id_prefix}pink_slime_ingot`
        },
        {
            output: { id: 'industrialforegoing:red_laser_lens', count: 1 },
            input: [
                { tag: 'c:dusts/ruby' },
                { tag: 'c:dusts/ruby' },
                { tag: 'c:dusts/ruby' },
                { tag: 'c:dusts/ruby' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 30,
            id: `${id_prefix}red_laser_lens`
        },
        {
            output: { id: 'industrialforegoing:cyan_laser_lens', count: 1 },
            input: [
                { tag: 'c:dusts/diamond' },
                { tag: 'c:dusts/diamond' },
                { tag: 'c:dusts/diamond' },
                { tag: 'c:dusts/diamond' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 30,
            id: `${id_prefix}cyan_laser_lens`
        },
        {
            output: { id: 'industrialforegoing:blue_laser_lens', count: 1 },
            input: [
                { tag: 'c:dusts/echo' },
                { tag: 'c:dusts/echo' },
                { tag: 'c:dusts/echo' },
                { tag: 'c:dusts/echo' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 30,
            id: `${id_prefix}blue_laser_lens`
        },
        {
            output: { id: 'industrialforegoing:black_laser_lens', count: 1 },
            input: [
                { tag: 'c:gems/enderic' },
                { tag: 'c:gems/enderic' },
                { tag: 'c:gems/enderic' },
                { tag: 'c:gems/enderic' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' },
                { item: 'actuallyadditions:lens' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 30,
            id: `${id_prefix}black_laser_lens`
        },
        {
            outputFluid: { amount: 250, id: 'industrialforegoing:essence' },
            input: [{ tag: 'c:gems/brilliance' }],
            inputFluid: { amount: 50, fluid: 'theurgy:sal_ammoniac' },
            processingTime: 5,
            id: `${id_prefix}essence`
        },
        {
            outputFluid: { amount: 1000, id: 'industrialforegoing:biofuel' },
            input: [{ tag: 'c:dusts/grains_of_infinity' }],
            inputFluid: { amount: 1000, fluid: 'justdirethings:refined_t2_fluid_source' },
            processingTime: 10,
            id: `${id_prefix}biofuel`
        },
        {
            output: {
                id: 'industrialforegoing:infinity_drill',
                components: {
                    'industrialforegoing:infinity_can_charge': true,
                    'industrialforegoing:infinity_item_power': 0,
                    'industrialforegoing:infinity_item_selected_tier': 'poor',
                    'industrialforegoing:infinity_item_special': false
                },
                count: 1
            },
            input: [
                { tag: 'c:storage_blocks/celestigem' },
                { item: 'aquaculture:neptunium_shovel' },
                { tag: 'c:storage_blocks/celestigem' },
                { tag: 'c:gears/dark_steel' },
                { tag: 'c:gears/dark_steel' },
                { item: 'oritech:advanced_battery' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 2000 },
            processingTime: 60,
            id: `${id_prefix}infinity_drill`
        },
        {
            output: {
                id: 'industrialforegoing:infinity_hammer',
                components: {
                    'industrialforegoing:infinity_can_charge': true,
                    'industrialforegoing:infinity_hammer_beheading': 0,
                    'industrialforegoing:infinity_item_power': 0,
                    'industrialforegoing:infinity_item_selected_tier': 'poor',
                    'industrialforegoing:infinity_item_special': false
                },
                count: 1
            },
            input: [
                { tag: 'c:storage_blocks/celestigem' },
                { item: 'aquaculture:neptunium_sword' },
                { tag: 'c:storage_blocks/celestigem' },
                { tag: 'c:gears/dark_steel' },
                { tag: 'c:gears/dark_steel' },
                { item: 'oritech:advanced_battery' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 2000 },
            processingTime: 60,
            id: `${id_prefix}infinity_hammer`
        },
        {
            output: {
                id: 'industrialforegoing:infinity_trident',
                components: {
                    'industrialforegoing:infinity_can_charge': true,
                    'industrialforegoing:infinity_item_power': 0,
                    'industrialforegoing:infinity_item_selected_tier': 'poor',
                    'industrialforegoing:infinity_item_special': false,
                    'industrialforegoing:infinity_trident_channeling': false,
                    'industrialforegoing:infinity_trident_loyalty': 0,
                    'industrialforegoing:infinity_trident_riptide': 0
                },
                count: 1
            },
            input: [
                { tag: 'c:storage_blocks/celestigem' },
                { item: 'minecraft:trident' },
                { tag: 'c:storage_blocks/celestigem' },
                { tag: 'c:gears/dark_steel' },
                { tag: 'c:gears/dark_steel' },
                { item: 'oritech:advanced_battery' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 2000 },
            processingTime: 60,
            id: `${id_prefix}infinity_trident`
        },
        {
            output: {
                id: 'industrialforegoing:infinity_saw',
                components: {
                    'industrialforegoing:infinity_can_charge': true,
                    'industrialforegoing:infinity_item_power': 0,
                    'industrialforegoing:infinity_item_selected_tier': 'poor',
                    'industrialforegoing:infinity_item_special': false
                },
                count: 1
            },
            input: [
                { tag: 'c:storage_blocks/celestigem' },
                { item: 'aquaculture:neptunium_axe' },
                { tag: 'c:storage_blocks/celestigem' },
                { tag: 'c:gears/dark_steel' },
                { tag: 'c:gears/dark_steel' },
                { item: 'oritech:advanced_battery' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 2000 },
            processingTime: 60,
            id: `${id_prefix}infinity_saw`
        },
        {
            output: {
                id: 'industrialforegoing:infinity_nuke',
                components: {
                    'industrialforegoing:infinity_can_charge': true,
                    'industrialforegoing:infinity_item_power': 0,
                    'industrialforegoing:infinity_item_selected_tier': 'poor',
                    'industrialforegoing:infinity_item_special': false
                },
                count: 1
            },
            input: [
                { item: 'minecraft:tnt' },
                { item: 'minecraft:nether_star' },
                { item: 'minecraft:tnt' },
                { tag: 'c:storage_blocks/celestigem' },
                { tag: 'c:storage_blocks/celestigem' },
                { item: 'oritech:heisenberg_compensator' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:heisenberg_compensator' }
            ],
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 2000 },
            processingTime: 60,
            id: `${id_prefix}infinity_nuke`
        },
        {
            output: {
                id: 'industrialforegoing:infinity_launcher',
                components: {
                    'industrialforegoing:configuration_action': 'RELEASE',
                    'industrialforegoing:infinity_can_charge': true,
                    'industrialforegoing:infinity_item_power': 0,
                    'industrialforegoing:infinity_item_selected_tier': 'poor',
                    'industrialforegoing:infinity_item_special': false
                },
                count: 1
            },
            input: [
                { tag: 'c:storage_blocks/celestigem' },
                { item: 'aquaculture:neptunium_bow' },
                { tag: 'c:storage_blocks/celestigem' },
                { tag: 'c:gears/dark_steel' },
                { tag: 'c:gears/dark_steel' },
                { item: 'oritech:advanced_battery' },
                { item: 'enigmatica:tempestuous_mechanism' },
                { item: 'oritech:advanced_battery' }
            ],
            inputFluid: { fluid: 'industrialforegoing:pink_slime', amount: 2000 },
            processingTime: 60,
            id: `${id_prefix}infinity_launcher`
        },

        {
            output: { id: 'enigmatica:forest_essentia', count: 1 },
            input: [
                { item: 'minecraft:dark_oak_sapling' },
                { item: 'the_bumblezone:royal_jelly_bottle' },
                { item: 'minecraft:birch_sapling' },
                { item: 'supplementaries:statue' },
                { item: 'minecraft:honeycomb' },
                { item: 'minecraft:mycelium' },
                { item: 'minecraft:lilac' },
                { item: 'minecraft:red_mushroom_block' }
            ],
            inputFluid: { fluid: 'modern_industrialization:helium_plasma', amount: 1000 },
            processingTime: 15,
            id: `${id_prefix}forest_essentia`
        },
        {
            output: { id: 'enigmatica:desert_essentia', count: 1 },
            input: [
                { item: 'minecraft:cactus' },
                { item: 'the_bumblezone:royal_jelly_bottle' },
                { item: 'minecraft:dead_bush' },
                { item: 'supplementaries:statue' },
                { item: 'minecraft:rabbit_foot' },
                { item: 'minecraft:red_sandstone' },
                { item: 'minecraft:poppy' },
                { item: 'minecraft:sandstone' }
            ],
            inputFluid: { fluid: 'modern_industrialization:helium_plasma', amount: 1000 },
            processingTime: 15,
            id: `${id_prefix}desert_essentia`
        },
        {
            output: { id: 'enigmatica:taiga_essentia', count: 1 },
            input: [
                { item: 'minecraft:spruce_sapling' },
                { item: 'the_bumblezone:royal_jelly_bottle' },
                { item: 'minecraft:fern' },
                { item: 'supplementaries:statue' },
                { item: 'minecraft:feather' },
                { item: 'minecraft:podzol' },
                { item: 'minecraft:sweet_berries' },
                { item: 'minecraft:mossy_cobblestone' }
            ],
            inputFluid: { fluid: 'modern_industrialization:helium_plasma', amount: 1000 },
            processingTime: 15,
            id: `${id_prefix}taiga_essentia`
        },
        {
            output: { id: 'enigmatica:tundra_essentia', count: 1 },
            input: [
                { item: 'minecraft:glow_lichen' },
                { item: 'the_bumblezone:royal_jelly_bottle' },
                { item: 'minecraft:pumpkin' },
                { item: 'minecraft:goat_horn' },
                { item: 'cold_sweat:goat_fur' },
                { item: 'minecraft:blue_ice' },
                { item: 'minecraft:beetroot' },
                { item: 'minecraft:snow_block' }
            ],
            inputFluid: { fluid: 'modern_industrialization:helium_plasma', amount: 1000 },
            processingTime: 15,
            id: `${id_prefix}tundra_essentia`
        },
        {
            output: { id: 'enigmatica:savanna_essentia', count: 1 },
            input: [
                { item: 'minecraft:acacia_sapling' },
                { item: 'the_bumblezone:royal_jelly_bottle' },
                { item: 'arts_and_crafts:cork_sapling' },
                { item: 'supplementaries:statue' },
                { item: 'minecraft:armadillo_scute' },
                { item: 'minecraft:grass_block' },
                { item: 'minecraft:rose_bush' },
                { item: 'minecraft:granite' }
            ],
            inputFluid: { fluid: 'modern_industrialization:helium_plasma', amount: 1000 },
            processingTime: 15,
            id: `${id_prefix}savanna_essentia`
        },
        {
            output: { id: 'enigmatica:plains_essentia', count: 1 },
            input: [
                { item: 'minecraft:oak_sapling' },
                { item: 'the_bumblezone:royal_jelly_bottle' },
                { item: 'minecraft:sugar_cane' },
                { item: 'supplementaries:statue' },
                { item: 'minecraft:leather' },
                { item: 'minecraft:grass_block' },
                { item: 'minecraft:sunflower' },
                { item: 'minecraft:andesite' }
            ],
            inputFluid: { fluid: 'modern_industrialization:helium_plasma', amount: 1000 },
            processingTime: 15,
            id: `${id_prefix}plains_essentia`
        },
        {
            output: { id: 'enigmatica:swamp_essentia', count: 1 },
            input: [
                { item: 'minecraft:mangrove_propagule' },
                { item: 'the_bumblezone:royal_jelly_bottle' },
                { item: 'minecraft:glow_berries' },
                { item: 'supplementaries:statue' },
                { item: 'minecraft:verdant_froglight' },
                { item: 'minecraft:moss_block' },
                { item: 'minecraft:blue_orchid' },
                { item: 'minecraft:mud' }
            ],
            inputFluid: { fluid: 'modern_industrialization:helium_plasma', amount: 1000 },
            processingTime: 15,
            id: `${id_prefix}swamp_essentia`
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
                { item: 'create:precision_mechanism' },
                { item: 'create:precision_mechanism' },
                { item: `minecraft:${color}_wool` },
                { item: 'prettypipes:blank_module' },
                { item: 'actuallyadditions:palis_crystal' }
            ],
            inputFluid: { fluid: 'industrialforegoing:latex', amount: 1000 },
            processingTime: 10,
            id: `${id_prefix}range_addon_tier_${i}`
        });
    });

    experience_fluids.forEach((fluid) => {
        recipes.push({
            input: [],
            inputFluid: { fluid: fluid, amount: 250 },
            output: { id: 'minecraft:experience_bottle', count: 1 },
            processingTime: 1,
            id: `${id_prefix}experience_bottle_from_${getID(fluid)}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        event.custom(recipe).id(recipe.id);
        recipe.processingTime *= 20;
    });
});
