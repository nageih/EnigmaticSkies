ServerEvents.generateData('after_mods', (event) => {
    let exclusions = [
        'aether:entities/mimic',
        'aether:entities/sun_spirit',
        'aether:entities/valkyrie_queen',

        'occultism:entities/wild_horde_creeper',
        'occultism:entities/wild_horde_drowned',
        'occultism:entities/wild_horde_husk',
        'occultism:entities/wild_horde_silverfish',
        'occultism:entities/wild_hunt_skeleton',
        'occultism:entities/wild_hunt_wither_skeleton',
        'occultism:entities/possessed_enderman',
        'occultism:entities/possessed_weak_shulker',
        'occultism:entities/possessed_shulker',
        'occultism:entities/possessed_phantom',
        'occultism:entities/possessed_blaze',
        'occultism:entities/possessed_ghast',
        'occultism:entities/possessed_evoker',
        'occultism:entities/possessed_hoglin',
        'occultism:entities/possessed_bee',
        'occultism:entities/possessed_warden',
        'occultism:entities/possessed_witch',
        'occultism:entities/possessed_endermite',
        'occultism:entities/possessed_skeleton',
        'occultism:entities/possessed_guardian',
        'occultism:entities/possessed_elder_guardian',
        'occultism:entities/possessed_zombie_piglin',
        'occultism:entities/possessed_weak_breeze',
        'occultism:entities/possessed_breeze',
        'occultism:entities/possessed_strong_breeze',
        'occultism:entities/afrit_wild',
        'occultism:entities/marid_unbound',
        'occultism:entities/mercy_goat',

        'minecraft:entities/vindicator',
        'minecraft:entities/witch',
        'minecraft:entities/evoker',
        'minecraft:entities/pillager'
    ];

    event.json(`enigmatica:emi_loot_data/table_exclusions`, { exclusions: exclusions });
});
