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

let SETTLING_TANK;

MIMachineEvents.registerRecipeTypes((event) => {
    SETTLING_TANK = event.register('settling_tank').withItemInputs().withFluidInputs().withFluidOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((event) => {
    event.singleblock(
        // English name, internal name
        'Settling Tank',
        'settling_tank',
        // Recipe type,
        SETTLING_TANK,
        // Background height (or -1 for default value), progress bar
        190,
        event.progressBar(83, 53, 'arrow'),
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        2,
        0,
        1,
        2,
        // Capacity for fluid slots
        32,
        // Item slot positions
        (items) => items.addSlots(42, 47, 1, 2),
        // Fluid slot positions
        (fluids) => fluids.addSlots(42, 27, 1, 1).addSlots(129, 47, 1, 2),
        // Casing of the machine, overlay folder, front overlay?, top overlay?, side overlay?
        'bricks',
        'settling_tank',
        true,
        false,
        true,
        // Base recipe EU, allow redstone control module?
        1,
        false
    );
});
