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
            filter: [{ id: 'minecraft:wolf_armor' }],
            to_replace: 'minecraft:wolf_armor',
            replace_with: `minecraft:wolf_armor[lore=['{"color":"light_purple","text":"Much Wow"}','{"color":"red","text":"Vetty Cute"}','{"color":"green","text":"Fite!"}','{"color":"blue","text":"Goodest Doge"}'],unbreakable={},attribute_modifiers={modifiers:[{amount:20.0d,id:"minecraft:armor",operation:"add_value",type:"minecraft:generic.armor"}]}]`
        },
        {
            filter: [{ mod: 'akashictome' }],
            to_replace: `akashictome:tome`,
            replace_with: `akashictome:tome[akashictome:tool_content=${JSON.stringify(akashic_tomes)}]`
        },
        {
            filter: [{ mod: 'morphtool' }],
            to_replace: `morphtool:tool`,
            replace_with: `morphtool:tool[morphtool:tool_content=${JSON.stringify(morph_tools)}]`
        },
        {
            filter: [{ mod: 'oritech' }],
            to_replace: `oritech:wrench`,
            replace_with: `oritech:wrench[unbreakable={}]`
        },
        {
            filter: [{ output: 'create:dough' }],
            to_replace: 'create:dough',
            replace_with: 'farmersdelight:wheat_dough'
        }
    ];

    const neptunium_items = [
        'fishing_rod',
        'pickaxe',
        'shove',
        'axe',
        'hoe',
        'sword',
        'bow',
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ];

    neptunium_items.forEach((item) => {
        recipes.push({
            filter: [{ id: `aquaculture:neptunium_${item}` }],
            to_replace: `aquaculture:neptunium_${item}`,
            replace_with: `aquaculture:neptunium_${item}[unbreakable={}]`
        });
    });

    const compressors = ['pneumaticcraft:thermal_compressor', 'pneumaticcraft:electrostatic_compressor'];

    compressors.forEach((compressor) => {
        let default_upgrades =
            '[pneumaticcraft:upgrades={map:{"pneumaticcraft:security":1},upgrades:[{item:{count:1,id:"pneumaticcraft:security_upgrade"},slot:0}]}]';
        recipes.push({
            filter: [{ mod: 'pneumaticcraft' }],
            to_replace: compressor,
            replace_with: Item.of(`${compressor}${default_upgrades}`)
        });
    });

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.to_replace, recipe.replace_with);
    });
});
