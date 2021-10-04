import React from 'react';

const useFetchForce = () => {
    const [force, setForce] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    function request() {
        setLoading(true);
        setError(false);
        const force1 = fetch('https://swapi.dev/api/people/1');
        const force2 = fetch('https://swapi.dev/api/people/4');
        Promise.race([force1, force2]).then(async (winning_force) => { //console.log('succeeded', winning_force);        
        const json = await winning_force.json();
        setForce(json);
        setLoading(false);
        }).catch((reason) => {
        console.log('failed', reason);
        setError(`ERRO! Sem resposta de ambas as forças. Verifique o console log para mais detalhes.`);        
        });
    }
    return { force, error, loading, request };
};

export default useFetchForce;
