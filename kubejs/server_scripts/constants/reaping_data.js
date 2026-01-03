//priority: 1001

const reapingData = [
    {
        registry_name: 'minecraft:breeze',
        drops: [{ ingredient: { item: 'malum:wind_nucleus' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'aether:zephyr',
        drops: [{ ingredient: { item: 'malum:wind_nucleus' }, chance: '1.0', min: '1', max: '2' }]
    },

    {
        registry_name: 'minecraft:enderman',
        drops: [{ ingredient: { item: 'malum:warp_flux' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:shulker',
        drops: [{ ingredient: { item: 'malum:warp_flux' }, chance: '1.0', min: '1', max: '2' }]
    },

    {
        registry_name: 'minecraft:ghast',
        drops: [{ ingredient: { item: 'malum:astral_weave' }, chance: '1.0', min: '1', max: '3' }]
    },
    {
        registry_name: 'minecraft:phantom',
        drops: [{ ingredient: { item: 'malum:astral_weave' }, chance: '1.0', min: '1', max: '3' }]
    },

    {
        registry_name: 'minecraft:skeleton',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:stray',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:wither_skeleton',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:bogged',
        drops: [{ ingredient: { item: 'malum:grim_talc' }, chance: '1.0', min: '1', max: '2' }]
    },

    {
        registry_name: 'minecraft:zoglin',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:zombie',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:zombie_villager',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:zombified_piglin',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:husk',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'minecraft:drowned',
        drops: [{ ingredient: { item: 'malum:rotting_essence' }, chance: '1.0', min: '1', max: '2' }]
    },

    {
        registry_name: 'ars_nouveau:wilden_hunter',
        drops: [{ ingredient: { item: 'ars_nouveau:wilden_horn' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'ars_nouveau:wilden_guardian',
        drops: [{ ingredient: { item: 'ars_nouveau:wilden_spike' }, chance: '1.0', min: '1', max: '2' }]
    },
    {
        registry_name: 'ars_nouveau:wilden_stalker',
        drops: [{ ingredient: { item: 'ars_nouveau:wilden_wing' }, chance: '1.0', min: '1', max: '2' }]
    }
];

const essenceEntities = {
    'malum:astral_weave': [],
    'malum:grim_talc': [],
    'malum:rotting_essence': [],
    'malum:warp_flux': [],
    'malum:wind_nucleus': [],

    'ars_nouveau:wilden_horn': [],
    'ars_nouveau:wilden_spike': [],
    'ars_nouveau:wilden_wing': []
};

reapingData.forEach((data) => {
    data.drops.forEach((entry) => {
        essenceEntities[entry.ingredient.item].push(data.registry_name);
    });
});
