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
        { id: /actuallyadditions:crushing\/.*_horse_armor/ },
        { id: 'actuallyadditions:crushing/block_coal' },

        // Aether
        { id: 'aether:golden_aercloud_enchanting' },
        { id: 'aether:swet_slime_block' },

        // Ars Nouveau and Addons
        { type: 'ars_nouveau:glyph' },
        { type: 'ars_nouveau:alakarkinos_conversion' },
        { id: /ars_nouveau:(cobblestone|stone|sand)/ },
        { id: /ars_nouveau:imbuement_(fire|air|water|earth)_essence/ },
        { id: 'ars_nouveau:imbuement_lapis' },

        // Aquaculture
        { id: 'aquaculture:gold_nugget_from_gold_fish' },

        // Create and Addons
        { type: 'createsifter:sifting' },
        { id: /create:mixing\/andesite_alloy/ },
        { id: /create:crafting\/materials\/andesite_alloy/ },

        // EnderIO
        { output: 'enderio:wood_gear' },

        // Farmers Delight
        { output: 'farmersdelight:organic_compost' },

        // Just Dire Things
        { output: /justdirethings:gooblock/ },

        // Minecraft
        { id: 'minecraft:slime_block' },

        // Nature's Aura
        { type: 'naturesaura:animal_spawner' },
        { id: 'naturesaura:tree_ritual/nature_altar' },
        { id: 'naturesaura:tree_ritual/crushing_catalyst' },
        { id: 'naturesaura:blast_furnace_booster' },

        // Occultism
        { id: 'occultism:ritual/craft_soul_gem' },
        { id: 'occultism:ritual/craft_fragile_soul_gem' },

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

        // Ore Processing Removals
        { input: '#c:ores' },
        { id: /mekanism:processing\/.*\/from_ore/ },
        { id: /actuallyadditions:crushing\/.*_ore$/ }
    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
