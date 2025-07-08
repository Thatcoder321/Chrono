import { STORAGE_KEY, WELCOME_TIMELINE_DATA } from './constants.js';

export function saveTimeline(timelineData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timelineData));
}

export function loadTimeline() {
    const dataString = localStorage.getItem(STORAGE_KEY);
   
    return dataString ? JSON.parse(dataString) : WELCOME_TIMELINE_DATA;
}