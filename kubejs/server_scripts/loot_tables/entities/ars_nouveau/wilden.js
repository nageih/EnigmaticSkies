// // https://docs.almostreliable.com/lootjs/
LootJS.modifiers((event) => {
    event.addTableModifier('ars_nouveau:entities/wilden_hunter').removeLoot('ars_nouveau:wilden_horn');
    event.addTableModifier('ars_nouveau:entities/wilden_guardian').removeLoot('ars_nouveau:wilden_spike');
    event.addTableModifier('ars_nouveau:entities/wilden_stalker').removeLoot('ars_nouveau:wilden_wing');
});

// LootJS.lootTables((event) => {
//     event.getLootTable('ars_nouveau:entities/wilden_hunter').clear();
//     event.getLootTable('ars_nouveau:entities/wilden_guardian').clear();
//     event.getLootTable('ars_nouveau:entities/wilden_stalker').clear();
// });
