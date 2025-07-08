export function renderTimeline(canvasElement, data) {
    canvasElement.innerHTML = ''; // Clear the canvas first

    const contentContainer = document.createElement('div');
    contentContainer.className = 'timeline-content-container';

    const eventsContainer = document.createElement('div');
    eventsContainer.className = 'events-container';

    const timelineAxis = document.createElement('div');
    timelineAxis.className = 'timeline-axis';
    
    data.forEach(event => {
        // Create the card
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-content">
                <p class="event-date">${event.date}</p>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
            </div>
            <div class="event-pointer"></div>
        `;
        eventsContainer.appendChild(card);

        // Create the node
        const node = document.createElement('div');
        node.className = 'timeline-node';
        timelineAxis.appendChild(node);
    });

    contentContainer.appendChild(eventsContainer);
    contentContainer.appendChild(timelineAxis);
    canvasElement.appendChild(contentContainer);
}