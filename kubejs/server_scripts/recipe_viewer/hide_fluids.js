RecipeViewerEvents.removeEntriesCompletely('fluid', (event) => {
    emi.fluids.hidden.forEach((stack) => {
        event.remove(stack);
    });
});
