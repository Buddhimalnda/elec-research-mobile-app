export function getTimeDuration(startTime, endTime) {
    // Create Date objects for both times on the same day
    const date = new Date();
    const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), ...startTime.split(':'));
    const endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), ...endTime.split(':'));

    // Calculate the difference in milliseconds
    let durationInMilliseconds = endDate - startDate;
    
    // Handle case where endTime is on the next day
    if (durationInMilliseconds < 0) {
        durationInMilliseconds += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds
    }

    // Convert duration to various units
    const milliseconds = durationInMilliseconds;
    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;

    return {
        milliseconds,
        seconds,
        minutes,
        hours
    };
}