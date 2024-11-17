import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState<any[]>([]); // Ajout du type `any[]` pour les données

    useEffect(() => {
        // Effectuer une requête GET vers le backend
        fetch('http://localhost:5000/api/data')
            .then((response) => response.json())
            .then((data) => {
                setData(data); // Stocker les données dans l'état local
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    }, []); // Pas de dépendance, ce qui est correct ici car tu veux que ça se lance une fois au montage

    return (
        <div>
            <h1>Données du backend</h1>
            <ul>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <li key={index}>{JSON.stringify(item)}</li>
                    ))
                ) : (
                    <li>Aucune donnée disponible</li>
                )}
            </ul>
        </div>
    );
}

export default App;
