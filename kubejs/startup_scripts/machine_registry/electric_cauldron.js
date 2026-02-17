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

// Casings: https://github.com/AztechMC/Modern-Industrialization/blob/8574d53686c0785ce5deac3b103d2239faca2a4c/src/main/java/aztech/modern_industrialization/machines/models/MachineCasings.java

let INDUSTRIAL_CAULDRON;

MIMachineEvents.registerRecipeTypes((event) => {
    INDUSTRIAL_CAULDRON = event
        .register('industrial_cauldron')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
    const mbHatch = event.hatchOf('item_input', 'item_output', 'energy_input');
    const heatproofMember = event.memberOfBlock('modern_industrialization:heatproof_machine_casing');
    const supportMember = event.memberOfBlock('modern_industrialization:bronze_plated_bricks');
    const cauldronMember = event.memberOfBlock('extended_industrialization:steel_plated_bricks');
    const wirecoilMember = event.memberOfBlock('modern_industrialization:conductive_coil');
    const magmaMember = event.memberOfBlock('minecraft:magma_block');

    const mbShape = event
        .layeredShape('bronze_plated_bricks', [
            ['  S   S  ', '   SSS   ', '    S    ', '         '],
            ['  HHHHH  ', '  HWWWH  ', '   CCC   ', '   CCC   '],
            ['SHHWWWHHS', ' HWCCCWH ', '  CMMMC  ', '  C   C  '],
            [' HWWWWWH ', 'SWCCCCCWS', ' CMMMMMC ', ' C     C '],
            [' HWWWWWH ', 'SWCCCCCWS', 'SCMMMMMCS', ' C     C '],
            [' HWWWWWH ', 'SWCCCCCWS', ' CMMMMMC ', ' C     C '],
            ['SHHWWWHHS', ' HWCCCWH ', '  CMMMC  ', '  C   C  '],
            ['  HHHHH  ', '  HWWWH  ', '   CCC   ', '   CCC   '],
            ['  S   S  ', '   S#S   ', '    S    ', '         ']
        ])
        .key('S', supportMember, mbHatch)
        .key('W', wirecoilMember, event.noHatch())
        .key('C', cauldronMember, event.noHatch())
        .key('H', heatproofMember, event.noHatch())
        .key('M', magmaMember, event.noHatch())
        .build();

    event.simpleElectricCraftingMultiBlock(
        /* GENERAL PARAMETERS */
        // English name, internal name, recipe type, multiblock shape
        'Industrial Cauldron',
        'industrial_cauldron',
        INDUSTRIAL_CAULDRON,
        mbShape,
        /* RECIPE VIEWER DISPLAY CONFIGURATION */
        // Recipe Viewer progress bar
        event.progressBar(103, 33, 'arrow'),
        // Recipe Viewer item inputs, item outputs, fluid inputs, fluid outputs
        (itemInputs) => itemInputs.addSlots(42, 27, 3, 3),
        (itemOutputs) => itemOutputs.addSlots(149, 27, 1, 3),
        (fluidInputs) => fluidInputs,
        (fluidOutputs) => fluidOutputs,
        /* MODEL CONFIGUATION */
        // casing of the controller, overlay folder, front overlay?, top overlay?, side overlay?
        'bronze_plated_bricks',
        'distillation_tower',
        true,
        false,
        false
    );
});
