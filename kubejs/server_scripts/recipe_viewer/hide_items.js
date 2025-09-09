RecipeViewerEvents.removeEntriesCompletely('item', (event) => {
    emi.items.hidden.forEach((stack) => {
        event.remove(stack);
    });
});
