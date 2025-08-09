ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/dissolution_chamber/';

    const recipes = [
        {
            input: [{ tag: 'c:gems/quartz' }, { tag: 'c:gems/charged_certus' }, { tag: 'c:dusts/redstone' }],
            inputFluid: { fluid: 'minecraft:water', amount: 100 },
            output: { count: 2, id: 'ae2:fluix_crystal' },
            processingTime: 50,
            id: `${id_prefix}fluix_crystal`
        },
        {
            input: [{ tag: 'c:storage_blocks/redstone' }, { tag: 'c:gems/fluix' }, { tag: 'c:dusts/glowstone' }],
            inputFluid: { fluid: 'minecraft:water', amount: 100 },
            output: { count: 2, id: 'appflux:redstone_crystal' },
            processingTime: 50,
            id: `${id_prefix}redstone_crystal`
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
                count: 1
            },
            input: [
                { item: 'actuallyadditions:restonia_crystal' },
                { item: 'actuallyadditions:restonia_crystal' },
                { item: `minecraft:${color}_dye` },
                { item: 'actuallyadditions:basic_coil' },
                { item: 'actuallyadditions:basic_coil' },
                { item: `minecraft:${color}_dye` },
                { item: 'actuallyadditions:palis_crystal' },
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
            id: `${id_prefix}experience_bottle_from_${fluid.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
