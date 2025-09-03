//priority: 1001

/*
    spirits: [
        { spirit: 'infernal', count: 1 },
        { spirit: 'earthen', count: 1 },
        { spirit: 'aqueous', count: 1 },
        { spirit: 'aerial', count: 1 },
        { spirit: 'sacred', count: 1 },
        { spirit: 'arcane', count: 1 },
        { spirit: 'eldritch', count: 1 },
        { spirit: 'wicked', count: 1 },
    ]
*/

const spiritData = [
    // {
    //     registry_name: 'aether:aechor_plant',
    //     spirits: [
    //         { spirit: 'arcane', count: 1 },
    //         { spirit: 'earthen', count: 1 }
    //     ]
    // },
    {
        registry_name: 'aether:aerbunny',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:aerwhale',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:blue_swet',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'aether:cockatrice',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:evil_whirlwind',
        spirits: [
            { spirit: 'aerial', count: 3 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    // {
    //     registry_name: 'aether:fire_minion',
    //     spirits: [
    //         { spirit: 'infernal', count: 3 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    {
        registry_name: 'aether:flying_cow',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:golden_swet',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'aqueous', count: 1 }
        ]
    },
    // {
    //     registry_name: 'aether:mimic',
    //     spirits: [
    //         { spirit: 'arcane', count: 1 },
    //         { spirit: 'earthen', count: 1 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    {
        registry_name: 'aether:moa',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:phyg',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'aether:sentry',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'aether:sheepuff',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    // {
    //     registry_name: 'aether:slider',
    //     spirits: [
    //         { spirit: 'arcane', count: 5 },
    //         { spirit: 'earthen', count: 5 }
    //     ]
    // },
    // {
    //     registry_name: 'aether:sun_spirit',
    //     spirits: [
    //         { spirit: 'sacred', count: 5 },
    //         { spirit: 'infernal', count: 5 }
    //     ]
    // },
    // {
    //     registry_name: 'aether:valkyrie',
    //     spirits: [
    //         { spirit: 'sacred', count: 3 },
    //         { spirit: 'aerial', count: 2 }
    //     ]
    // },
    // {
    //     registry_name: 'aether:valkyrie_queen',
    //     spirits: [
    //         { spirit: 'sacred', count: 5 },
    //         { spirit: 'aerial', count: 5 }
    //     ]
    // },
    {
        registry_name: 'aether:whirlwind',
        spirits: [{ spirit: 'aerial', count: 3 }]
    },
    {
        registry_name: 'aether:zephyr',
        spirits: [
            { spirit: 'arcane', count: 2 },
            { spirit: 'wicked', count: 2 },
            { spirit: 'aerial', count: 3 }
        ]
    },
    {
        registry_name: 'aquaculture:arapaima',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:arrau_turtle',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'aquaculture:atlantic_cod',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:atlantic_halibut',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:atlantic_herring',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'aquaculture:bayad',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:blackfish',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:bluegill',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:boulti',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:box_turtle',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'aquaculture:brown_shrooma',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:brown_trout',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:capitaine',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:carp',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:catfish',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:gar',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:jellyfish',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:minnow',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:muskellunge',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:pacific_halibut',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:perch',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:pink_salmon',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:piranha',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:pollock',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:rainbow_trout',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:red_grouper',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:red_shrooma',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:smallmouth_bass',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:starshell_turtle',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'aquaculture:synodontis',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:tambaqui',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'aquaculture:tuna',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'ars_nouveau:wilden_boss',
        spirits: [
            { spirit: 'arcane', count: 3 },
            { spirit: 'wicked', count: 2 },
            { spirit: 'aerial', count: 1 },
            { spirit: 'aqueous', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'ars_nouveau:wilden_guardian',
        spirits: [
            { spirit: 'aqueous', count: 1 },
            { spirit: 'wicked', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'ars_nouveau:wilden_hunter',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'wicked', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'ars_nouveau:wilden_stalker',
        spirits: [
            { spirit: 'aerial', count: 1 },
            { spirit: 'wicked', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:badlands_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:bamboo_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:beach_creeper',
        spirits: [
            { spirit: 'aqueous', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:cave_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:dark_oak_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:desert_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:dripstone_creeper',
        spirits: [
            { spirit: 'aqueous', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:hills_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:jungle_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:mushroom_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:savannah_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:snowy_creeper',
        spirits: [
            { spirit: 'aqueous', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:spruce_creeper',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'creeperoverhaul:swamp_creeper',
        spirits: [
            { spirit: 'aqueous', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:armadillo',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'earthen', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:axolotl',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:bat',
        spirits: [
            { spirit: 'aerial', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:bee',
        spirits: [
            { spirit: 'aerial', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:blaze',
        spirits: [
            { spirit: 'infernal', count: 3 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:bogged',
        spirits: [
            { spirit: 'arcane', count: 2 },
            { spirit: 'wicked', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:breeze',
        spirits: [
            { spirit: 'aerial', count: 3 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:cat',
        spirits: [
            { spirit: 'aerial', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:cave_spider',
        spirits: [
            { spirit: 'aerial', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:chicken',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:cod',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'minecraft:cow',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:creeper',
        spirits: [{ spirit: 'infernal', count: 3 }]
    },
    {
        registry_name: 'minecraft:dolphin',
        spirits: [
            { spirit: 'aqueous', count: 3 },
            { spirit: 'sacred', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:donkey',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:drowned',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:elder_guardian',
        spirits: [
            { spirit: 'eldritch', count: 3 },
            { spirit: 'aqueous', count: 5 }
        ]
    },
    {
        registry_name: 'minecraft:enderman',
        spirits: [
            { spirit: 'eldritch', count: 3 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:endermite',
        spirits: [{ spirit: 'eldritch', count: 1 }]
    },
    {
        registry_name: 'minecraft:evoker',
        spirits: [
            { spirit: 'eldritch', count: 2 },
            { spirit: 'wicked', count: 1 },
            { spirit: 'arcane', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:fox',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:ghast',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'infernal', count: 2 },
            { spirit: 'aqueous', count: 2 },
            { spirit: 'aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:glow_squid',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'sacred', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:goat',
        spirits: [{ spirit: 'wicked', count: 1 }]
    },
    {
        registry_name: 'minecraft:guardian',
        spirits: [
            { spirit: 'aqueous', count: 3 },
            { spirit: 'sacred', count: 3 },
            { spirit: 'wicked', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:hoglin',
        spirits: [
            { spirit: 'infernal', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:horse',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:husk',
        spirits: [
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:illusioner',
        spirits: [
            { spirit: 'arcane', count: 2 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:iron_golem',
        spirits: [
            { spirit: 'earthen', count: 5 },
            { spirit: 'sacred', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:llama',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'aerial', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:magma_cube',
        spirits: [
            { spirit: 'infernal', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:mooshroom',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:mule',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:ocelot',
        spirits: [
            { spirit: 'aerial', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:panda',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:parrot',
        spirits: [
            { spirit: 'aerial', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:phantom',
        spirits: [
            { spirit: 'arcane', count: 3 },
            { spirit: 'wicked', count: 3 },
            { spirit: 'aerial', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:pig',
        spirits: [{ spirit: 'sacred', count: 1 }]
    },
    {
        registry_name: 'minecraft:piglin',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'infernal', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:piglin_brute',
        spirits: [
            { spirit: 'wicked', count: 2 },
            { spirit: 'infernal', count: 3 }
        ]
    },
    {
        registry_name: 'minecraft:pillager',
        spirits: [{ spirit: 'wicked', count: 2 }]
    },
    {
        registry_name: 'minecraft:polar_bear',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'sacred', count: 1 },
            { spirit: 'aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:pufferfish',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:rabbit',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aerial', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:ravager',
        spirits: [
            { spirit: 'eldritch', count: 4 },
            { spirit: 'wicked', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:salmon',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'minecraft:sheep',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:shulker',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'eldritch', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:silverfish',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:skeleton',
        spirits: [
            { spirit: 'arcane', count: 2 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:skeleton_horse',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'aerial', count: 2 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:slime',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:snow_golem',
        spirits: [
            { spirit: 'aqueous', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:spider',
        spirits: [
            { spirit: 'aerial', count: 2 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:squid',
        spirits: [
            { spirit: 'aqueous', count: 2 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:stray',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'wicked', count: 1 },
            { spirit: 'aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:strider',
        spirits: [
            { spirit: 'infernal', count: 2 },
            { spirit: 'arcane', count: 1 },
            { spirit: 'sacred', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:tadpole',
        spirits: [
            { spirit: 'sacred', count: 1 },
            { spirit: 'aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:trader_llama',
        spirits: [
            { spirit: 'earthen', count: 1 },
            { spirit: 'aerial', count: 1 },
            { spirit: 'wicked', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:tropical_fish',
        spirits: [
            { spirit: 'aqueous', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:turtle',
        spirits: [{ spirit: 'aqueous', count: 2 }]
    },
    {
        registry_name: 'minecraft:vex',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'aerial', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:villager',
        spirits: [{ spirit: 'sacred', count: 2 }]
    },
    {
        registry_name: 'minecraft:vindicator',
        spirits: [{ spirit: 'wicked', count: 4 }]
    },
    {
        registry_name: 'minecraft:wandering_trader',
        spirits: [
            { spirit: 'sacred', count: 2 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:warden',
        spirits: [
            { spirit: 'eldritch', count: 6 },
            { spirit: 'wicked', count: 6 },
            { spirit: 'arcane', count: 6 },
            { spirit: 'earthen', count: 6 }
        ]
    },
    {
        registry_name: 'minecraft:witch',
        spirits: [
            { spirit: 'wicked', count: 2 },
            { spirit: 'arcane', count: 2 }
        ]
    },
    {
        registry_name: 'minecraft:wither',
        spirits: [
            { spirit: 'infernal', count: 6 },
            { spirit: 'wicked', count: 6 },
            { spirit: 'arcane', count: 6 },
            { spirit: 'eldritch', count: 6 }
        ]
    },
    {
        registry_name: 'minecraft:wither_skeleton',
        spirits: [
            { spirit: 'infernal', count: 1 },
            { spirit: 'wicked', count: 1 },
            { spirit: 'arcane', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:wolf',
        spirits: [{ spirit: 'sacred', count: 2 }]
    },
    {
        registry_name: 'minecraft:zoglin',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'infernal', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombie',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombie_horse',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'aerial', count: 2 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombie_villager',
        spirits: [
            { spirit: 'wicked', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    },
    {
        registry_name: 'minecraft:zombified_piglin',
        spirits: [
            { spirit: 'wicked', count: 2 },
            { spirit: 'infernal', count: 2 }
        ]
    },
    // {
    //     registry_name: 'occultism:possessed_breeze',
    //     spirits: [
    //         { spirit: 'aerial', count: 3 },
    //         { spirit: 'arcane', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_elder_guardian',
    //     spirits: [
    //         { spirit: 'aqueous', count: 5 },
    //         { spirit: 'eldritch', count: 3 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_enderman',
    //     spirits: [
    //         { spirit: 'eldritch', count: 3 },
    //         { spirit: 'arcane', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_endermite',
    //     spirits: [{ spirit: 'eldritch', count: 1 }]
    // },
    // {
    //     registry_name: 'occultism:possessed_evoker',
    //     spirits: [
    //         { spirit: 'wicked', count: 1 },
    //         { spirit: 'arcane', count: 2 },
    //         { spirit: 'eldritch', count: 2 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_ghast',
    //     spirits: [
    //         { spirit: 'arcane', count: 1 },
    //         { spirit: 'infernal', count: 2 },
    //         { spirit: 'aqueous', count: 2 },
    //         { spirit: 'aerial', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_hoglin',
    //     spirits: [
    //         { spirit: 'infernal', count: 1 },
    //         { spirit: 'earthen', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_phantom',
    //     spirits: [
    //         { spirit: 'arcane', count: 3 },
    //         { spirit: 'wicked', count: 3 },
    //         { spirit: 'aerial', count: 3 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_shulker',
    //     spirits: [
    //         { spirit: 'arcane', count: 1 },
    //         { spirit: 'eldritch', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_skeleton',
    //     spirits: [
    //         { spirit: 'arcane', count: 2 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_strong_breeze',
    //     spirits: [
    //         { spirit: 'aerial', count: 6 },
    //         { spirit: 'arcane', count: 3 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_warden',
    //     spirits: [
    //         { spirit: 'eldritch', count: 6 },
    //         { spirit: 'wicked', count: 6 },
    //         { spirit: 'arcane', count: 6 },
    //         { spirit: 'earthen', count: 6 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_weak_breeze',
    //     spirits: [
    //         { spirit: 'aerial', count: 1 },
    //         { spirit: 'arcane', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_weak_shulker',
    //     spirits: [
    //         { spirit: 'arcane', count: 1 },
    //         { spirit: 'eldritch', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_witch',
    //     spirits: [
    //         { spirit: 'wicked', count: 2 },
    //         { spirit: 'arcane', count: 2 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:possessed_zombie_piglin',
    //     spirits: [
    //         { spirit: 'wicked', count: 2 },
    //         { spirit: 'infernal', count: 2 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_bogged',
    //     spirits: [
    //         { spirit: 'arcane', count: 2 },
    //         { spirit: 'wicked', count: 1 },
    //         { spirit: 'earthen', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_cave_spider',
    //     spirits: [
    //         { spirit: 'aerial', count: 1 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_horde_creeper',
    //     spirits: [{ spirit: 'infernal', count: 3 }]
    // },
    // {
    //     registry_name: 'occultism:wild_horde_drowned',
    //     spirits: [
    //         { spirit: 'aqueous', count: 2 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_horde_husk',
    //     spirits: [
    //         { spirit: 'infernal', count: 1 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_horde_silverfish',
    //     spirits: [
    //         { spirit: 'wicked', count: 1 },
    //         { spirit: 'earthen', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_hunt_skeleton',
    //     spirits: [
    //         { spirit: 'arcane', count: 3 },
    //         { spirit: 'wicked', count: 2 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_hunt_wither_skeleton',
    //     spirits: [
    //         { spirit: 'infernal', count: 3 },
    //         { spirit: 'wicked', count: 3 },
    //         { spirit: 'arcane', count: 3 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_husk',
    //     spirits: [
    //         { spirit: 'infernal', count: 1 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_silverfish',
    //     spirits: [
    //         { spirit: 'wicked', count: 1 },
    //         { spirit: 'earthen', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_skeleton',
    //     spirits: [
    //         { spirit: 'arcane', count: 2 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_slime',
    //     spirits: [
    //         { spirit: 'aqueous', count: 1 },
    //         { spirit: 'arcane', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_spider',
    //     spirits: [
    //         { spirit: 'aerial', count: 2 },
    //         { spirit: 'wicked', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_stray',
    //     spirits: [
    //         { spirit: 'arcane', count: 1 },
    //         { spirit: 'wicked', count: 1 },
    //         { spirit: 'aerial', count: 1 }
    //     ]
    // },
    // {
    //     registry_name: 'occultism:wild_zombie',
    //     spirits: [
    //         { spirit: 'wicked', count: 1 },
    //         { spirit: 'earthen', count: 1 }
    //     ]
    // },
    {
        registry_name: 'sushigocrafting:shrimp',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'sushigocrafting:tuna',
        spirits: [{ spirit: 'aqueous', count: 1 }]
    },
    {
        registry_name: 'the_bumblezone:bee_queen',
        spirits: [
            { spirit: 'aerial', count: 6 },
            { spirit: 'sacred', count: 6 }
        ]
    },
    {
        registry_name: 'the_bumblezone:beehemoth',
        spirits: [
            { spirit: 'aerial', count: 4 },
            { spirit: 'sacred', count: 2 }
        ]
    },
    {
        registry_name: 'the_bumblezone:honey_slime',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'aqueous', count: 1 }
        ]
    },
    {
        registry_name: 'the_bumblezone:rootmin',
        spirits: [
            { spirit: 'arcane', count: 1 },
            { spirit: 'earthen', count: 1 }
        ]
    }
];

const spiritEntities = {
    aerial: [],
    aqueous: [],
    arcane: [],
    earthen: [],
    eldritch: [],
    infernal: [],
    sacred: [],
    wicked: []
};

spiritData.forEach((data) => {
    data.spirits.forEach((entry) => {
        spiritEntities[entry.spirit].push(data.registry_name);
    });
});
