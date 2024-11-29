import predeterminedResponse from '@/constants/responses/predeterminedResponses';

export const calculateScore = (userInput: string, selectedLetter: string, category: string): number => {
    // Basic validation for a real name (you can improve this regex)
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    if (!nameRegex.test(userInput) || userInput.length === 0) {
        return 0; // Invalid input
    }

    // Check if it starts with the selected letter
    if (!userInput.startsWith(selectedLetter)) {
        return 0; // Does not start with the selected letter
    }

    // Check against predetermined responses
    const validResponses = predeterminedResponse[selectedLetter.toUpperCase()][category] || [];
    
    if (validResponses.includes(userInput)) {
        return 5; // Match found, award half points
    } else {
        return 10; // No match, award full points
    }
};