ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:minecraft/smelting/';
    const recipes = [
        {
            output: 'ars_nouveau:source_berry_roll',
            input: `enigmatica:source_berry_roll_dough`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}source_berry_roll`
        },
        {
            output: 'aether:holystone',
            input: `aether:icestone`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}holystone`
        },
        {
            output: 'minecraft:cookie',
            input: `enigmatica:cookie_dough`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}cookie`
        },
        {
            output: 'farmersdelight:sweet_berry_cookie',
            input: `enigmatica:sweet_berry_cookie_dough`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}sweet_berry_cookie`
        },
        {
            output: 'farmersdelight:honey_cookie',
            input: `enigmatica:honey_cookie_dough`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}honey_cookie`
        },
        {
            output: 'arsdelight:source_berry_cookie',
            input: `enigmatica:source_berry_cookie_dough`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}source_berry_cookie`
        },
        {
            output: 'modern_industrialization:fire_clay_brick',
            input: `enigmatica:fire_clay_ball`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}fire_clay_brick`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/gold`).getId(),
            input: `#c:clumps/gold`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}smelt_gold`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/iron`).getId(),
            input: `#c:clumps/iron`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}smelt_iron`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:ingots/copper`).getId(),
            input: `#c:clumps/copper`,
            xp: 0.1,
            duration: 10,
            id: `${id_prefix}smelt_copper`
        },
        {
            output: AlmostUnified.getTagTargetItem(`c:rods/iron`).getId(),
            input: 'modern_industrialization:iron_rod_magnetic',
            xp: 0.0,
            duration: 10,
            id: `${id_prefix}demagnetize_iron_rod`
        },
        {
            output: 'farmersdelight:cooked_chicken_cuts',
            input: 'enigmatica:raw_chicken_cuts',
            xp: 0.35,
            duration: 10,
            id: `${id_prefix}cooked_chicken_cuts`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input, recipe.xp, recipe.duration * 20).id(recipe.id);
    });
});
