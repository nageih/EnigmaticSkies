ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:industrialforegoing/dissolution_chamber/';

    const recipes = [
        {
            input: [
                { tag: 'c:gems/empowered_restonia' },
                { tag: 'c:gems/charged_certus' },
                { tag: 'c:dusts/sky_stone' }
            ],
            inputFluid: { fluid: `theurgy:sal_ammoniac`, amount: 100 },
            output: { id: 'ae2:fluix_crystal', count: 2 },
            processingTime: 50,
            id: `${id_prefix}fluix_crystal`
        },
        {
            input: [{ tag: 'c:storage_blocks/redstone' }, { tag: 'c:gems/fluix' }, { tag: 'c:dusts/glowstone' }],
            inputFluid: { fluid: 'minecraft:water', amount: 100 },
            output: { id: 'appflux:redstone_crystal', count: 2 },
            processingTime: 50,
            id: `${id_prefix}redstone_crystal`
        },
        {
            input: [
                { item: 'enderio:industrial_insulation_block' },
                { item: 'modern_industrialization:analog_circuit' },
                { item: 'enderio:industrial_insulation_block' },
                { tag: 'c:plates/steel' },
                { tag: 'c:plates/steel' },
                { item: 'modern_industrialization:fire_clay_bricks' },
                { tag: 'c:gears/compressed_iron' },
                { item: 'modern_industrialization:fire_clay_bricks' }
            ],
            inputFluid: { fluid: 'industrialforegoing:ether_gas', amount: 1000 },
            output: { count: 1, id: 'industrialforegoing:machine_frame_simple' },
            processingTime: 300,
            id: `${id_prefix}machine_frame_simple`
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
            id: `${id_prefix}experience_bottle_from_${fluid.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:dissolution_chamber';
        event.custom(recipe).id(recipe.id);
    });
});
