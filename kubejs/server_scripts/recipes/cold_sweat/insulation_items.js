ColdSweatEvents.registries((event) => {
    Object.keys(armor_insulation).forEach((item) => {
        event.addInsulator((insulator) => {
            let insulation = armor_insulation[item];
            insulator.items(item).slot('item').fillSlots(false);

            if (insulation.adapt_speed) {
                insulator.adaptiveInsulation(insulation.value, insulation.adapt_speed);
            } else {
                insulator.insulation(insulation.cold, insulation.heat);
            }
        });
    });
});
