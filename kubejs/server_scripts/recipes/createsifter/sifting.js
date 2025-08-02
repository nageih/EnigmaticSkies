ServerEvents.recipes((event) => {
    // https://wiki.mechanicalmods.net/mods/create-sifter/
    // New recipes require a restart to show in EMI but work fine after /reload

    const id_prefix = 'enigmatica:createsifter/sifting/';

    const recipes = [
        {
            input: { item: 'aether:cold_aercloud' },
            results: [
                { id: 'theurgy:crystallized_water', chance: 0.25 },
                { id: 'aether:blue_berry', chance: 0.2 },
                { id: 'minecraft:wheat_seeds', chance: 0.1 },
                { id: 'minecraft:pumpkin_seeds', chance: 0.1 },
                { id: 'minecraft:melon_seeds', chance: 0.1 },
                { id: 'minecraft:beetroot_seeds', chance: 0.1 },
                { id: 'farmersdelight:cabbage_seeds', chance: 0.1 },
                { id: 'farmersdelight:tomato_seeds', chance: 0.1 },
                { id: 'actuallyadditions:canola_seeds', chance: 0.1 },
                { id: 'supplementaries:flax_seeds', chance: 0.1 },
                { id: 'ae2:sky_dust', chance: 0.05 }
            ],
            mesh: { id: 'createsifter:string_mesh', count: 1 },
            requirements: [{ type: 'mechanicals:biome', value: 'minecraft:the_void' }],
            processingTime: 25,
            waterlogged: false,
            id: `${id_prefix}cold_aercloud_sifting_canvas`
        },
        {
            input: { item: 'aether:cold_aercloud' },
            results: [
                { id: 'theurgy:crystallized_water', chance: 0.25 },
                { id: 'ae2:sky_dust', chance: 0.15 }
            ],
            mesh: { id: 'createsifter:andesite_mesh', count: 1 },
            processingTime: 20,
            waterlogged: false,
            requirements: [{ type: 'mechanicals:biome', value: 'minecraft:the_void' }],
            id: `${id_prefix}cold_aercloud_sifting_andesite`
        },
        {
            input: { item: 'aether:golden_aercloud' },
            results: [
                { id: 'theurgy:crystallized_lava', chance: 0.25 },
                { id: 'modern_industrialization:sulfur_dust', chance: 0.15 }
            ],
            mesh: { id: 'createsifter:brass_mesh', count: 1 },
            processingTime: 20,
            waterlogged: false,
            advancedSifter: true,
            requirements: [{ type: 'mechanicals:biome', value: 'ars_nouveau:archwood_forest' }],
            id: `${id_prefix}golden_aercloud_sifting_brass_mesh`
        },
        {
            input: { item: 'minecraft:sand' },
            results: [
                { id: 'sushigocrafting:wasabi_seeds', chance: 0.1 },
                { id: 'sushigocrafting:soy_seeds', chance: 0.1 },
                { id: 'sushigocrafting:sesame_seeds', chance: 0.1 },
                { id: 'sushigocrafting:cucumber_seeds', chance: 0.1 }
            ],
            mesh: { id: 'createsifter:string_mesh', count: 1 },
            processingTime: 25,
            waterlogged: false,
            requirements: [{ type: 'mechanicals:biome', value: 'minecraft:warm_ocean' }],
            id: `${id_prefix}sand_sifting_canvas`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'createsifter:sifting';
        recipe.processingTime = recipe.processingTime * 20;
        event.custom(recipe).id(recipe.id);
    });
});
