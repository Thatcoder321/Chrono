

import { loadTimeline, saveTimeline } from './storage.js';
import { renderTimeline } from './timeline.js';


let appState = {
    timeline: [],
    editingEventId: null 
};


const timelineCanvas = document.getElementById('timeline-canvas');
const addEventBtn = document.getElementById('add-event-btn');
const eventModal = document.getElementById('event-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const eventForm = document.getElementById('event-form');
const modalTitle = document.getElementById('modal-title');
const deleteEventBtn = document.getElementById('delete-event-btn');



function openModal() {
    modalTitle.textContent = 'Create New Event';
    eventForm.reset();
    deleteEventBtn.hidden = true; 
    appState.editingEventId = null;
    eventModal.classList.remove('hidden');
}

function closeModal() {
    eventModal.classList.add('hidden');
}



function handleFormSubmit(e) {
    e.preventDefault(); 

    const newEvent = {
        id: Date.now().toString(), 
        date: document.getElementById('event-date').value,
        title: document.getElementById('event-title').value,
        description: document.getElementById('event-description').value,
        imageUrl: document.getElementById('event-image').value,
    };

    appState.timeline.push(newEvent);

    saveTimeline(appState.timeline);

    render();

    closeModal();
}

function render() {
    renderTimeline(timelineCanvas, appState.timeline);
}

function initialize() {

    appState.timeline = loadTimeline();
    

    addEventBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    eventForm.addEventListener('submit', handleFormSubmit);


    eventModal.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            closeModal();
        }
    });
    render();
    console.log("Chrono application loaded successfully. Ready for interaction.");
}


document.addEventListener('DOMContentLoaded', initialize);