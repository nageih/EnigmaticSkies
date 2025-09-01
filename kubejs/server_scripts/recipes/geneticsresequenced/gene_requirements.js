ServerEvents.generateData('after_mods', (event) => {
    let recipes = [
        {
            gene: 'geneticsresequenced:flight',
            requirements: [
                'geneticsresequenced:step_assist',
                'geneticsresequenced:no_fall_damage',
                'geneticsresequenced:strength_2',
                'geneticsresequenced:more_hearts_2',
                'geneticsresequenced:regeneration_4'
            ]
        },
        {
            gene: 'geneticsresequenced:photosynthesis',
            requirements: ['geneticsresequenced:eat_grass']
        }
    ];

    recipes.forEach((recipe) => {
        event.json(`geneticsresequenced:geneticsresequenced/gene_requirements/${recipe.gene.split(':')[1]}`, recipe);
    });
});
