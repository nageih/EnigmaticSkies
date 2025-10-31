//priority: 1000
LootJS.lootTables((event) => {
    event
        .getLootTable('modern_industrialization:gameplay/hero_of_the_village/industrialist_gift')
        .firstPool()
        .addEntry('modern_industrialization:basic_upgrade')
        .removeItem('modern_industrialization:piston')
        .removeItem('modern_industrialization:robot_arm')
        .removeItem('modern_industrialization:basic_machine_hull')
        .removeItem('modern_industrialization:bronze_drill')
        .removeItem('modern_industrialization:steel_drill');
});
