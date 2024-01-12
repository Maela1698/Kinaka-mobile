import React from 'react';
import { IonButton, IonInput, IonItem, IonList, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const history = useHistory();

    const handleInscriptionClick = () => {
        // Redirige vers la page d'inscription
        history.push('/inscription');
    };

    const goAcceuil = () => {
        // Redirige vers la page d'inscription
        history.push('/acceuil');
    };

    return(
        <>
            <IonInput label="Mail" labelPlacement="floating" fill="outline" type="email" required/>
            <br/>
            <IonInput label="Mot de Passe" labelPlacement="floating" fill="outline" type="password" required/>
            <br/>
            <IonButton onClick={goAcceuil}>SE CONNECTER</IonButton>
            <IonButton className="secondary" onClick={handleInscriptionClick}>S'INSCRIRE</IonButton>
        </>
    );
};
export default Login;