import React, { useState } from 'react';
import { createUser, loginUser } from '../services/userService';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import styles from './loginPage.module.css'

function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const navigate = useNavigate(); // Initialisation de navigate

    const handleRegister = async () => {
        try {
            const newUser = await createUser({ name, password });
            setMessage(`Utilisateur ${newUser.name} créé avec succès.`);
        } catch (error) {
            setMessage('Erreur lors de l\'inscription.');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await loginUser({ name, password });
            setMessage(response.message);

            // Redirection vers la page de jeu après connexion réussie
            if (response.token) {
                navigate('/game'); // Redirection vers la page Game
            }
        } catch (error) {
            setMessage('Erreur lors de la connexion.');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Connexion ou Inscription</h1>
            {message && <p>{message}</p>}
            <input
                className={styles.input}
                type="text"
                placeholder="Pseudo"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className={styles.input}
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.button} onClick={handleLogin}>
                Se connecter
            </button>
            <button className={styles.button} onClick={handleRegister}>
                S'inscrire
            </button>
        </div>
    );
}

export default LoginPage;
