ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        // Actually Additions
        { output: 'actuallyadditions:rice_slimeball' },
        { type: 'actuallyadditions:mining_lens' },
        { type: 'actuallyadditions:pressing' },
        { type: 'actuallyadditions:crushing' },
        { id: 'actuallyadditions:lens_of_the_miner' },
        { id: 'actuallyadditions:lens_of_the_killer' },
        { id: /actuallyadditions:crushing\/.*_horse_armor/ },
        { id: /actuallyadditions:crushing\/.*_ore$/ },
        { id: /actuallyadditions:laser\/crystalize_(diamatine|emeradic|enori|palis|restonia|void)/ },
        { id: 'actuallyadditions:crushing/block_coal' },
        { id: 'actuallyadditions:coal_generator' },
        { id: 'actuallyadditions:basic_coil' },
        { id: 'actuallyadditions:vertical_digger' },

        // Aether
        { id: 'aether:golden_aercloud_enchanting' },
        { id: 'aether:swet_slime_block' },

        // Applied Energistics
        { id: /ae2:(smelting|blasting)\/silicon/ },

        // Aquaculture
        { id: 'aquaculture:gold_nugget_from_gold_fish' },
        { id: 'aquaculture:jellyfish_to_slimeball' },

        // Ars Nouveau and Addons
        { type: 'ars_nouveau:glyph' },
        { type: 'ars_nouveau:alakarkinos_conversion' },
        { id: `ars_nouveau:imbuement_chamber` },
        { id: /ars_nouveau:(cobblestone|stone|sand|gravel)/ },
        { id: /ars_nouveau:imbuement_(fire|air|water|earth)_essence/ },
        { id: /ars_(nouveau|elemental):imbuement_(manipulation|conjuration|abjuration|anima)_essence/ },
        { id: /ars_nouveau:imbuement_(lapis|amethyst)/ },
        { output: /ars_nouveau:ritual_(restoration|flight)$/ },
        { id: 'ars_elemental:wool_to_string' },

        // Create and Addons

        { id: /create:crushing\/raw_/ },
        { id: /create:mixing\/(andesite_alloy|brass_ingot)/ },
        { id: /create:item_application\/(andesite|brass|copper)_casing/ },
        { id: 'create:crafting/materials/rose_quartz' },
        { id: 'create:crafting/materials/andesite_alloy' },
        { id: 'create:crafting/materials/andesite_alloy_from_zinc' },
        { id: 'create:crafting/appliances/slime_ball' },
        { id: 'create:crafting/appliances/chain_from_zinc' },
        { id: /create:crushing\/(gravel|asurine|diorite|veridium|crimsite|ochrum|tuff)/ },
        { id: /create:crushing\/.*_horse_armor/ },
        { id: 'create:crushing/prismarine_crystals' },
        { id: 'create:crushing/gilded_blackstone' },
        { id: /create:milling\/(dripstone|cobblestone|andesite|calcite|granite|saddle)/ },
        { id: 'create:crafting/kinetics/large_cogwheel' },
        { id: 'create:crafting/materials/electron_tube' },
        { id: /create:splashing\/crushed_raw_.*/ },
        { id: /create:splashing\/(red_sand|gravel)/ },
        { id: /create:smelting\/.*_ingot_from_crushed/ },

        { type: 'createsifter:sifting' },
        { id: /createsifter:(crushing|milling)/ },
        { id: 'createsifter:shapeless/raw_uranium_piece' },

        { id: 'trading_floor:trading_depot' },

        // EnderIO
        { type: 'enderio:fire_crafting' },
        { output: 'enderio:wood_gear' },
        { output: 'enderio:stirling_generator' },
        { id: 'enderio:sag_milling/cobbled_deepslate' },
        { id: 'enderio:sag_milling/flower_pot' },
        { id: /enderio:sag_milling\/raw_/ },
        { type: 'enderio:alloy_smelting', id: /enderio:.*dark_steel_ingot/ },
        { id: /enderio:alloy_smelting\/(redstone|pulsating|conductive)_alloy_ingot/ },
        { id: /enderio:alloy_smelting\/(copper|energetic|vibrant)_alloy_ingot/ },
        { id: /enderio:alloy_smelting\/(soularium|end_steel)_ingot/ },
        { id: 'enderio:alloy_smelting/industrial_insulation_block' },

        // Enigmatic Unity
        { mod: 'enigmaticunity' },

        // Farmers Delight
        { output: 'farmersdelight:organic_compost' },

        // Genetics
        { output: 'geneticsresequenced:coal_generator' },

        // Industrial Foregoing
        { type: 'industrialforegoing:fluid_extractor' },
        { type: 'industrialforegoing:laser_drill_ore' },
        { type: 'industrialforegoing:bioreactor' },
        { output: 'industrialforegoing:pitiful_generator' },
        { output: 'industrialforegoing:fluid_extractor' },
        { output: 'industrialforegoing:biofuel_generator' },
        { output: 'industrialforegoing:bioreactor' },
        { output: 'industrialforegoing:water_condensator' },
        { output: 'industrialforegoing:ore_laser_base' },
        { output: 'industrialforegoing:latex_processing_unit' },
        { output: 'industrialforegoing:animal_feeder' },
        { input: 'industrialforegoing:dryrubber' },
        { id: 'industrialforegoing:dissolution_chamber/mechanical_dirt' },
        { id: 'industrialforegoing:dissolution_chamber/simple_machine_frame' },
        { id: /industrialforegoing:dissolution_chamber\/range_addon_tier/ },
        { id: 'industrialforegoing:laser_drill_fluid/ether' },

        // Just Dire Things
        { output: /justdirethings:gooblock/ },
        { output: 'justdirethings:generatort1' },
        { output: 'justdirethings:generatorfluidt1' },
        { id: /justdirethings:raw_coal_t(1|2)_ore-goospread/ },
        { id: /justdirethings:.*refined_t[0-9]_fluid_block-(goospread|fluiddrop)/ },

        // Malum
        { id: /malum:create\/washing\/.*_node/ },
        { id: /malum:create\/washing\/crushed_.*/ },
        { id: /malum:uranium_from_node_(smelting|blasting)/ },
        { id: /malum:create\/crushing\/ore/ },

        // Minecraft
        { id: 'minecraft:slime_block' },
        { id: 'minecraft:brick' },
        { id: 'minecraft:nether_brick' },
        { id: 'minecraft:netherite_ingot' },
        { output: 'minecraft:chest' },
        { output: /minecraft:infested/ },
        { output: /minecraft:(blast_furnace|furnace|smoker|cauldron|grindstone)/ },
        { output: /minecraft:(composter|barrel|stonecutter|lectern|brewing_stand|cartography_table)/ },

        // Modern Industrialization and Addons
        { type: 'modern_industrialization:forge_hammer' },
        { output: 'modern_industrialization:fire_clay_dust' },
        { input: 'modern_industrialization:fire_clay_dust' },
        { output: /modern_industrialization:(brick|brick_tiny)_dust/ },
        { input: /modern_industrialization:(brick|brick_tiny)_dust/ },
        { type: 'minecraft:crafting_shaped', output: /modern_industrialization:.*_(gear|rotor|ring)$/ },
        {
            type: 'modern_industrialization:macerator',
            input: /(modern|extended)_industrialization:.*_(curved_plate|bolt)$/
        },
        { id: /modern_industrialization:materials\/.*\/macerator\/(raw_metal|crushed_dust)/ },
        { id: /modern_industrialization:materials\/macerator\/.*crushed_to_dust/ },
        { output: /(modern|extended)_industrialization:.*_(curved_plate|bolt)$/ },
        { output: `modern_industrialization:bronze_compressor` },
        { id: `modern_industrialization:vanilla_recipes/mixer/netherite` },
        { output: /modern_industrialization:.*_water_pump/ },
        { output: /extended_industrialization:.*_alloy_smelter/ },
        { output: `modern_industrialization:heatproof_machine_casing` },
        {
            type: 'modern_industrialization:mixer',
            output: /(cupronickel|bronze|cupronickel_ingot|electrum|invar|battery_alloy)_(dust|tiny_dust)/
        },
        { type: 'modern_industrialization:blast_furnace', output: '#c:ingots/steel' },
        { type: 'extended_industrialization:alloy_smelter' },
        { output: 'modern_industrialization:analog_circuit' },

        // Nature's Aura
        { type: 'naturesaura:animal_spawner' },
        { id: /naturesaura:tree_ritual\/token_/ },
        { id: /naturesaura:dimension_rail/ },
        { id: /naturesaura:(cave|fortress|end_city|outpost|loot|netherite)_finder/ },
        { id: 'naturesaura:rf_converter' },
        { id: 'naturesaura:spawn_lamp' },
        { id: 'naturesaura:chunk_loader' },
        { id: 'naturesaura:oak_generator' },
        { id: 'naturesaura:depth_ingot_creation' },
        { id: 'naturesaura:tree_ritual/nature_altar' },
        { id: 'naturesaura:tree_ritual/crushing_catalyst' },
        { id: 'naturesaura:tree_ritual/conversion_catalyst' },
        { id: 'naturesaura:tree_ritual/ore_spawn_powder' },
        { id: 'naturesaura:tree_ritual/animal_powder' },
        { id: 'naturesaura:blast_furnace_booster' },
        { id: `naturesaura:altar/coal` },

        // Occultism
        { type: 'occultism:miner' },
        { type: 'occultism:crushing' },
        { type: 'occultism:crystallize' },
        { id: 'occultism:ritual/craft_soul_gem' },
        { id: 'occultism:ritual/craft_fragile_soul_gem' },

        // Oritech
        { type: 'oritech:foundry' },
        { output: 'oritech:foundry_block' },
        { type: 'oritech:pulverizer' },
        { output: 'oritech:pulverizer_block' },
        { id: 'oritech:crafting/alloy/steel' },
        { id: 'oritech:crafting/claybeads' },
        { id: 'oritech:crafting/alloy/rawsilicon' },
        { id: 'oritech:silicon_blockblock' },
        { id: 'oritech:compat/enderio/alloy/steel' },
        { id: 'oritech:mixing/compat/create/steel' },
        { id: 'oritech:steel_ingot_from_blasting_steel_dust' },
        { id: 'oritech:centrifuge/fluid/compat/pneumaticcraft/fuel' },
        { id: 'oritech:centrifuge/fluid/compat/industrialforegoing/turbofuel' },
        { id: 'oritech:centrifuge/fluid/compat/clumpwet/crushed_uranium' },
        { id: /oritech:centrifuge.*clump/ },
        { id: /oritech:splashing\/compat\/create/ },
        { id: 'oritech:atomicforge/urandust' },
        { id: /oritech:grinder\/uraniumcrystal/ },
        { id: /oritech:mixing\/compat\/create/ },
        { id: /oritech:compat\/enderio\/alloy/ },
        { input: /oritech:(nickel|platinum|iron|copper|gold)_gem/ },
        { id: /oritech:atomicforge\/dust\/(nickel|platinum|iron|copper|gold)/ },
        { id: /oritech:grinder\/raw\/(nickel|platinum|iron|copper|gold)/ },
        { id: /oritech:(nickel|platinum|iron|copper|gold)_clump/ },

        // PneumaticCraft
        { type: 'pneumaticcraft:explosion_crafting' },
        { type: 'pneumaticcraft:fuel_quality' },
        { output: 'pneumaticcraft:reinforced_stone' },
        { output: /pneumaticcraft:.*(air|flux|manual|solar)_compressor/ },
        { id: /pneumaticcraft:thermo_plant\/vegetable_oil/ },

        // Replication
        { type: 'replication:matter_value' },

        // Supplementaries
        { id: 'supplementaries:statue' },
        { id: 'supplementaries:ash_brick' },

        // Tempad
        { id: 'tempad:time_steel_create' },

        // Theurgy
        { type: 'theurgy:digestion' },
        { type: 'theurgy:fermentation' },
        { type: 'theurgy:distillation' },
        { type: 'theurgy:calcination' },

        // Utilitarian
        { mod: 'utilitarian', id: /snad/ },
        { output: /soliciting_carpet/ },
        { output: 'utilitarian:drit' },
        { output: 'utilitarian:grrass' },
        { id: 'utilitarian:utility/green_dye' },
        { output: 'utilitarian:angel_block' },

        // Ore Processing Removals
        { input: '#c:ores' },
        { input: '#c:raw_materials/uranium' },
        { input: '#c:storage_blocks/raw_uranium' }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
