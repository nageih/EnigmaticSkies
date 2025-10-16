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

let SNACK_PACKER;

MIMachineEvents.registerRecipeTypes((event) => {
    SNACK_PACKER = event.register('snack_packer').withItemInputs().withItemOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((event) => {
    event.singleblock(
        // English name, internal name
        'Snack Packer',
        'snack_packer',
        // Recipe type,
        SNACK_PACKER,
        // Background height (or -1 for default value), progress bar
        186,
        event.progressBar(105, 45, 'arrow'),
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        9,
        3,
        0,
        0,
        // Capacity for fluid slots
        16,
        // Item slot positions
        (items) => items.addSlots(42, 27, 3, 3).addSlots(139, 27, 1, 3),
        // Fluid slot positions
        (fluids) => fluids,
        // Casing of the machine, overlay folder, front overlay?, top overlay?, side overlay?
        'bricked_bronze',
        'firebricks',
        true,
        false,
        false,
        // Base recipe EU, allow redstone control module?
        1,
        false
    );
});
