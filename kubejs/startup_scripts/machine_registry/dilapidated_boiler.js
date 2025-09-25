// https://github.com/AztechMC/Modern-Industrialization/blob/7048dbcb5279d78cf41a49d02bb45ab758e7ce6f/docs/ADDING_MACHINES.md

/*
    Notes: When adding new machines, allow MI to generate the necessary resources
    by enabling `datagenOnStartup = true` in `modern_industrialization-startup.toml`.
    This will generate them in the `modern_industrialization` at the instance root.

    Once generated, the following resources should be copied to `kubejs\assets\modern_industrialization` and `kubejs\data\modern_industrialization`
    Assets
    - blockstates
    - lang (only the specific entries for the new machines)
    - models
    Data
    - loot_table

    Similarly, be sure to update the `minecraft/needs_tool` and `minecraft/mineable` block tags.
*/

let DILAPIDATED_BOILER;

MIMachineEvents.registerRecipeTypes((event) => {
    DILAPIDATED_BOILER = event.register('dilapidated_boiler').withItemInputs().withFluidInputs().withFluidOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((event) => {
    event.singleblock(
        // English name, internal name
        'Dilapidated Boiler',
        'dilapidated_boiler',
        // Recipe type,
        DILAPIDATED_BOILER,
        // Background height (or -1 for default value), progress bar
        170,
        event.progressBar(78, 32, 'arrow'),
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1,
        0,
        1,
        1,
        // Capacity for fluid slots
        16,
        // Item slot positions
        (items) => items.addSlots(25, 35, 1, 1),
        // Fluid slot positions
        (fluids) => fluids.addSlots(55, 35, 1, 1).addSlots(125, 35, 1, 1),
        // Casing of the machine, overlay folder, front overlay?, top overlay?, side overlay?
        'bricks',
        'dilapidated_boiler',
        true,
        false,
        false,
        // Base recipe EU, allow redstone control module?
        1,
        false
    );
});
