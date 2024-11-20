const API_URL = 'http://localhost:5000/users';

// Créer un utilisateur
export const createUser = async (user: { name: string; password: string }) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Erreur lors de la création de l\'utilisateur.');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};

// Se connecter
export const loginUser = async (credentials: { name: string; password: string }) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Pseudo ou mot de passe incorrect.');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
};
