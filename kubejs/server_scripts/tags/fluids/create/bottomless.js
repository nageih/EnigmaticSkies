ServerEvents.tags('fluid', (event) => {
    event.get('create:bottomless/allow').removeAll();
});
