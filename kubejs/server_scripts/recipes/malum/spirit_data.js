ServerEvents.generateData('after_mods', (event) => {
    spiritData.forEach((entry) => {
        entry.primary_type = entry.spirits[0].spirit;
        event.json(`malum:spirit_data/entity/enigmatica/${getID(entry.registry_name)}`, entry);
    });
});
