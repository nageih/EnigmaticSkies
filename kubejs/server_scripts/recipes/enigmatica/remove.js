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
        { type: 'actuallyadditions:mining_lens' },
        { output: 'actuallyadditions:rice_slimeball' },
        { id: 'actuallyadditions:lens_of_the_miner' },
        { id: /actuallyadditions:crushing\/.*_horse_armor/ },
        { id: 'actuallyadditions:crushing/block_coal' },
        { id: 'actuallyadditions:coal_generator' },
        { id: 'actuallyadditions:basic_coil' },
        { id: 'actuallyadditions:vertical_digger' },

        // Aether
        { id: 'aether:golden_aercloud_enchanting' },
        { id: 'aether:swet_slime_block' },

        // Ars Nouveau and Addons
        { type: 'ars_nouveau:glyph' },
        { type: 'ars_nouveau:alakarkinos_conversion' },
        { id: /ars_nouveau:(cobblestone|stone|sand|gravel)/ },
        { id: /ars_nouveau:imbuement_(fire|air|water|earth)_essence/ },
        { id: /ars_nouveau:imbuement_(lapis|amethyst)/ },

        // Aquaculture
        { id: 'aquaculture:gold_nugget_from_gold_fish' },
        { id: 'aquaculture:jellyfish_to_slimeball' },

        // Create and Addons
        { type: 'createsifter:sifting' },
        { id: /createsifter:(crushing|milling)/ },
        { id: /create:mixing\/andesite_alloy/ },
        { id: /create:crafting\/materials\/andesite_alloy/ },
        { id: 'create:crafting/appliances/slime_ball' },
        { id: /create:crushing\/(gravel|asurine|diorite|veridium|crimsite|ochrum|tuff)/ },
        { id: /create:crushing\/.*_horse_armor/ },
        { id: 'create:crushing/prismarine_crystals' },
        { id: 'create:crushing/gilded_blackstone' },
        { id: /create:milling\/(dripstone|cobblestone|andesite|calcite|granite|saddle)/ },
        { id: 'create:crafting/kinetics/large_cogwheel' },

        // EnderIO
        { output: 'enderio:wood_gear' },
        { output: 'enderio:stirling_generator' },

        // Enigmatic Unity
        { mod: 'enigmaticunity' },

        // Farmers Delight
        { output: 'farmersdelight:organic_compost' },

        // Genetics
        { output: 'geneticsresequenced:coal_generator' },

        // Industrial Foregoing
        { output: 'industrialforegoing:pitiful_generator' },

        // Just Dire Things
        { output: /justdirethings:gooblock/ },
        { output: 'justdirethings:generatort1' },

        // Minecraft
        { id: 'minecraft:slime_block' },
        { output: /minecraft:infested/ },

        // Modern Industrialization
        { type: 'modern_industrialization:forge_hammer' },
        { output: /modern_industrialization:fire_clay_(brick|dust)/ },
        { type: 'minecraft:crafting_shaped', output: /modern_industrialization:.*_(gear|rotor|ring)$/ },
        {
            type: 'modern_industrialization:macerator',
            input: /(modern|extended)_industrialization:.*_(curved_plate|bolt)$/
        },
        { output: /(modern|extended)_industrialization:.*_(curved_plate|bolt)$/ },
        { output: `modern_industrialization:bronze_compressor` },

        // Nature's Aura
        { type: 'naturesaura:animal_spawner' },
        { id: /naturesaura:tree_ritual\/token_/ },
        { id: 'naturesaura:tree_ritual/nature_altar' },
        { id: 'naturesaura:tree_ritual/crushing_catalyst' },
        { id: 'naturesaura:tree_ritual/conversion_catalyst' },
        { id: 'naturesaura:tree_ritual/ore_spawn_powder' },
        { id: 'naturesaura:tree_ritual/animal_powder' },
        { id: 'naturesaura:blast_furnace_booster' },
        { id: `naturesaura:altar/coal` },

        // Occultism
        { id: 'occultism:ritual/craft_soul_gem' },
        { id: 'occultism:ritual/craft_fragile_soul_gem' },

        // Oritech
        { id: 'oritech:crafting/alloy/steel' },
        { id: 'oritech:compat/enderio/alloy/steel' },
        { id: 'oritech:mixing/compat/create/steel' },
        { id: 'oritech:steel_ingot_from_blasting_steel_dust' },

        // PneumaticCraft
        { type: 'pneumaticcraft:explosion_crafting' },
        { type: 'pneumaticcraft:fuel_quality' },
        { output: 'pneumaticcraft:reinforced_stone' },
        { output: /pneumaticcraft:.*(air|flux|manual|solar)_compressor/ },

        // Replication
        // { type: 'replication:matter_value' },

        // Supplementaries
        { id: 'supplementaries:statue' },
        { id: 'supplementaries:ash_brick' },

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
        { id: /mekanism:processing\/.*\/from_ore/ },
        { id: /actuallyadditions:crushing\/.*_ore$/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
