ServerEvents.recipes((event) => {
    // {
    //     input: 'sample',
    //     output: 'sample',
    //     type: 'sample',
    //     mod: 'sample',
    //     id: 'sample'
    // }

    const recipes = [
        {
            filter: [{ mod: 'waystones' }, { output: 'minecraft:writable_book' }],
            to_replace: 'minecraft:ink_sac',
            replace_with: '#c:dyes/black'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:ingots/iron',
            replace_with: '#c:ingots/andesite_alloy'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:storage_blocks/iron',
            replace_with: '#c:storage_blocks/andesite_alloy'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: 'minecraft:iron_bars',
            replace_with: 'create:andesite_bars'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:ingots/gold',
            replace_with: '#c:ingots/copper_alloy'
        },
        {
            filter: [{ mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: '#c:gems/lapis',
            replace_with: '#c:gems/palis'
        },

        {
            filter: [{ mod: 'handcrafted' }, { mod: 'aquaculture' }],
            to_replace: '#c:chests',
            replace_with: 'framedblocks:framed_chest'
        },
        {
            filter: {},
            to_replace: 'minecraft:feather',
            replace_with: '#c:feathers'
        },
        {
            filter: [{ output: 'minecraft:sticky_piston' }, { output: 'minecraft:lead' }, { mod: 'appflux' }],
            to_replace: 'minecraft:slime_ball',
            replace_with: '#c:slimeballs'
        },
        {
            filter: [{ mod: 'appflux' }],
            to_replace: 'minecraft:cactus',
            replace_with: '#c:dyes/green'
        },
        {
            filter: [{ output: 'minecraft:observer' }, { mod: 'prettypipes' }, { mod: 'ppfluids' }],
            to_replace: 'minecraft:quartz',
            replace_with: Ingredient.of(['#c:gems/quartz', 'ae2:certus_quartz_crystal', '#c:gems/black_quartz'])
        },

        {
            filter: [{ id: /actuallyadditions:black_quartz_(wall|stair|slab)/ }],
            to_replace: 'actuallyadditions:black_quartz_pillar_block',
            replace_with: 'actuallyadditions:black_quartz_block'
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: '#c:ingots/steel',
            replace_with: '#c:ingots/steel'
        },
        {
            filter: [
                { output: 'farmersdelight:stove' },
                { output: `minecraft:hopper` },
                { output: `utilitarian:fluid_hopper` },
                { output: `minecraft:smithing_table` }
            ],
            to_replace: '#c:ingots/iron',
            replace_with: Ingredient.of(['#c:ingots/andesite_alloy'])
        },
        {
            filter: [{ mod: `transfer_labels` }],
            to_replace: '#c:ingots/copper',
            replace_with: Ingredient.of(['#c:ingots/andesite_alloy'])
        },
        {
            filter: [{ mod: `trashcans` }],
            to_replace: 'minecraft:cobblestone',
            replace_with: Ingredient.of(['#c:ingots/andesite_alloy'])
        },
        {
            filter: [{ mod: 'farmersdelight' }],
            to_replace: 'minecraft:wooden_shovel',
            replace_with: Ingredient.of(['aether:skyroot_shovel', 'minecraft:wooden_shovel'])
        },
        {
            filter: [{ output: 'farmersdelight:cooking_pot' }],
            to_replace: '#c:ingots/iron',
            replace_with: Ingredient.of(['#c:ingots/andesite_alloy'])
        },
        {
            filter: [{ output: `utilitarian:fluid_hopper` }, { mod: 'actuallyadditions' }, { mod: `transfer_labels` }],
            to_replace: 'minecraft:bucket',
            replace_with: Ingredient.of(['#c:buckets/empty'])
        },
        {
            filter: [{ id: `ars_nouveau:sourcestone` }],
            to_replace: '#c:stones',
            replace_with: Ingredient.of(['ae2:sky_stone_block'])
        },
        {
            filter: [{ mod: `elevatorid` }],
            to_replace: 'minecraft:ender_pearl',
            replace_with: Ingredient.of(['aether:blue_aercloud'])
        },
        {
            filter: [
                { mod: `redstonepen` },
                { output: `minecraft:piston` },
                { output: `minecraft:observer` },
                { output: `minecraft:dispenser` },
                { output: `minecraft:dropper` },
                { output: `minecraft:lever` },
                { output: `supplementaries:turn_table` },
                { output: `supplementaries:relayer` },
                { output: `naturesaura:placer` },
                { output: `naturesaura:pickup_stopper` },
                { output: `create:redstone_contact` }
            ],
            to_replace: 'minecraft:cobblestone',
            replace_with: Ingredient.of(['minecraft:andesite'])
        },
        {
            filter: [{ output: `minecraft:dispenser` }],
            to_replace: 'minecraft:bow',
            replace_with: Ingredient.of(['#c:strings'])
        },
        {
            filter: [
                { output: /minecraft:.*copper_bulb/ },
                { output: 'ars_nouveau:source_lamp' },
                { output: 'modularrouters:speed_upgrade' }
            ],
            to_replace: 'minecraft:blaze_rod',
            replace_with: Ingredient.of(['supplementaries:lumisene_bottle'])
        },
        {
            filter: {},
            to_replace: 'minecraft:egg',
            replace_with: Ingredient.of(['#c:eggs'])
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: '#c:cobblestones',
            replace_with: Ingredient.of(['minecraft:tuff'])
        },
        {
            filter: {},
            to_replace: 'create:dough',
            replace_with: Ingredient.of(['#c:doughs/wheat'])
        },
        {
            filter: [{ id: /modern_industrialization:.*item_pipe/ }],
            to_replace: '#c:gears/steel',
            replace_with: Ingredient.of(['#c:gears/copper'])
        },
        {
            filter: {},
            to_replace: `extended_industrialization:silver_curved_plate`,
            replace_with: Ingredient.of([`#c:ingots/silver`])
        },
        {
            filter: [{ input: `industrialforegoing:machine_frame_pity` }],
            to_replace: '#c:plates/plastic',
            replace_with: Ingredient.of(['actuallyadditions:enori_crystal'])
        },
        {
            filter: [{ input: `industrialforegoing:machine_frame_pity` }],
            to_replace: '#c:gears/gold',
            replace_with: Ingredient.of(['actuallyadditions:advanced_coil'])
        },
        {
            filter: [{ input: `industrialforegoing:machine_frame_pity` }],
            to_replace: '#c:gears/diamond',
            replace_with: Ingredient.of(['#c:gears/bronze'])
        },
        {
            filter: {},
            to_replace: `industrialforegoing:machine_frame_pity`,
            replace_with: Ingredient.of(['actuallyadditions:iron_casing'])
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_axe`,
            replace_with: 'aether:holystone_axe'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_shovel`,
            replace_with: 'aether:holystone_shovel'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_hoe`,
            replace_with: 'aether:holystone_hoe'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_sword`,
            replace_with: 'aether:holystone_sword'
        },
        {
            filter: [{ mod: 'industrialforegoing' }],
            to_replace: `minecraft:iron_pickaxe`,
            replace_with: 'aether:holystone_pickaxe'
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:pulverizer_block`,
            replace_with: Ingredient.of(['oritech:flux_gate'])
        },
        {
            filter: [{ id: 'create:rose_quartz_lamp' }, { id: /create:copycat/ }],
            to_replace: `#c:ingots/zinc`,
            replace_with: Ingredient.of(['#c:ingots/andesite_alloy'])
        },
        {
            filter: {},
            to_replace: `modern_industrialization:tin_cable`,
            replace_with: `modern_industrialization:copper_cable`
        },
        {
            filter: {},
            to_replace: `modern_industrialization:electrum_cable`,
            replace_with: `modern_industrialization:cupronickel_cable`
        },
        {
            filter: {},
            to_replace: `modern_industrialization:aluminum_cable`,
            replace_with: `modern_industrialization:kanthal_cable`
        },
        {
            filter: {},
            to_replace: `oritech:motor`,
            replace_with: `modern_industrialization:motor`
        },
        // {
        //     filter: [{ mod: 'justdirethings' }],
        //     to_replace: `minecraft:ender_eye`,
        //     replace_with: '#c:gems/pulsating_crystal'
        // },
        // {
        //     filter: [{ mod: 'justdirethings' }],
        //     to_replace: `minecraft:ender_pearl`,
        //     replace_with: '#c:gems/pulsating_crystal'
        // },
        {
            filter: [{ id: /justdirethings:.*t1$/ }],
            to_replace: `minecraft:ender_eye`,
            replace_with: 'create:electron_tube'
        },
        {
            filter: [{ id: /justdirethings:.*t2$/ }, { id: 'justdirethings:portalgun' }],
            to_replace: `minecraft:ender_eye`,
            replace_with: '#c:gems/pulsating_crystal'
        },
        {
            filter: [{ id: /justdirethings:.*t1$/ }],
            to_replace: `#c:dusts/redstone`,
            replace_with: 'actuallyadditions:advanced_coil'
        },
        {
            filter: [{ id: /justdirethings:.*t2$/ }],
            to_replace: `#c:dusts/redstone`,
            replace_with: 'oritech:flux_gate'
        },
        {
            filter: [{ id: /justdirethings:.*t(1|2)$/ }],
            to_replace: `#c:gems/lapis`,
            replace_with: 'ars_technica:calibrated_precision_mechanism'
        },
        {
            filter: [
                { id: 'ars_nouveau:relay' },
                { id: 'ars_nouveau:redstone_relay' },
                { id: 'ars_nouveau:basic_spell_turret' }
            ],
            to_replace: `#c:ingots/gold`,
            replace_with: `#c:ingots/hallowed_gold`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `#c:ingots/tainted_gold`,
            replace_with: `#c:ingots/hallowed_gold`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `#c:storage_blocks/tainted_gold`,
            replace_with: `#c:storage_blocks/hallowed_gold`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_fear`,
            replace_with: `#c:essences/earth`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_joy`,
            replace_with: `#c:essences/air`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_sorrow`,
            replace_with: `#c:essences/water`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_anger`,
            replace_with: `#c:essences/fire`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `minecraft:peony`,
            replace_with: `#minecraft:flowers`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_euphoria`,
            replace_with: `naturesaura:token_joy`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_terror`,
            replace_with: `naturesaura:token_fear`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_rage`,
            replace_with: `naturesaura:token_anger`
        },
        {
            filter: [{ mod: 'naturesaura' }],
            to_replace: `naturesaura:token_grief`,
            replace_with: `naturesaura:token_sorrow`
        },
        {
            filter: [{ id: 'farmersdelight:cutting_board' }],
            to_replace: `#minecraft:planks`,
            replace_with: `#enigmatica:planks`
        },
        {
            filter: [{ id: 'farmersdelight:cutting_board' }],
            to_replace: `minecraft:stick`,
            replace_with: `#c:rods/wooden`
        },
        {
            filter: [{ mod: 'pneumaticcraft' }],
            to_replace: `pneumaticcraft:upgrade_matrix`,
            replace_with: 'pneumaticcraft:upgrade_matrix'
        },
        {
            filter: [
                { mod: 'ae2' },
                { mod: 'ae2importexportcard' },
                { mod: 'merequester' },
                { mod: 'appflux' },
                { mod: 'advanced_ae' },
                { mod: 'ae2netanalyser' }
            ],
            to_replace: `#c:ingots/iron`,
            replace_with: `#c:ingots/compressed_iron`
        },
        {
            filter: [
                { mod: 'ae2' },
                { mod: 'ae2importexportcard' },
                { mod: 'merequester' },
                { mod: 'appflux' },
                { mod: 'advanced_ae' },
                { mod: 'ae2netanalyser' }
            ],
            to_replace: `#c:gems/certus_quartz`,
            replace_with: `ae2:charged_certus_quartz_crystal`
        },
        {
            filter: {},
            to_replace: `modern_industrialization:basic_machine_hull`,
            replace_with: 'industrialforegoing:machine_frame_advanced'
        },
        {
            filter: [{ mod: 'pneumaticcraft' }],
            to_replace: `pneumaticcraft:printed_circuit_board`,
            replace_with: `modern_industrialization:electronic_circuit`
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: `actuallyadditions:single_battery`,
            replace_with: `oritech:basic_battery`
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: `actuallyadditions:double_battery`,
            replace_with: `oritech:basic_battery`
        },
        {
            filter: [{ mod: 'actuallyadditions' }],
            to_replace: `actuallyadditions:triple_battery`,
            replace_with: `oritech:basic_battery`
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:fluid_pipe`,
            replace_with: `ppfluids:fluid_pipe`
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:machine_plating_block`,
            replace_with: `oritech:machine_plating_block`
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:processing_unit`,
            replace_with: 'modern_industrialization:analog_circuit'
        },
        {
            filter: [{ output: /aquaculture:neptunium_/ }],
            to_replace: `#c:rods/wooden`,
            replace_with: 'naturesaura:ancient_stick'
        },
        {
            filter: [{ output: /aquaculture:neptunium_/ }],
            to_replace: `minecraft:string`,
            replace_with: 'ars_nouveau:magebloom_fiber'
        },
        {
            filter: {},
            to_replace: `minecraft:milk_bucket`,
            replace_with: Ingredient.of(['#c:buckets/milk', '#c:foods/milk'])
        },
        {
            filter: { mod: 'functionalstorage' },
            to_replace: `minecraft:bucket`,
            replace_with: '#c:buckets/empty'
        },
        {
            filter: { mod: 'crafting_on_a_stick' },
            to_replace: `minecraft:stick`,
            replace_with: '#c:rods/wooden'
        }
    ];

    const curved_plates = [
        'aluminum',
        'battery_alloy',
        'blastproof_alloy',
        'bronze',
        'copper',
        'gold',
        'iridium',
        'stainless_steel',
        'steel',
        'tin',
        'titanium'
    ];

    curved_plates.forEach((material) => {
        recipes.push({
            filter: {},
            to_replace: `modern_industrialization:${material}_curved_plate`,
            replace_with: Ingredient.of([`#c:ingots/${material}`])
        });
    });

    const bolts = [
        'aluminum',
        'bronze',
        'copper',
        'gold',
        'invar',
        'iron',
        'stainless_steel',
        'steel',
        'tin',
        'titanium'
    ];

    bolts.forEach((material) => {
        recipes.push({
            filter: {},
            to_replace: `modern_industrialization:${material}_bolt`,
            replace_with: Ingredient.of([`#c:nuggets/${material}`])
        });
    });

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
