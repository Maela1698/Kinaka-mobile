import React from 'react';
import { IonButton, IonContent, IonInput, IonItem, IonList, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './style/main.css';



const Inscription: React.FC = () => {
    const history = useHistory();

    const handleInscriptionClick = () => {
        // Redirige vers la page d'inscription
        history.push('/login');
    };
    return(
        <>
            <IonContent className="ion-padding">
                <IonInput label="Nom Utilisatieur" labelPlacement="floating" fill="outline" required/>
                <br/>
                <IonInput label="Mail" labelPlacement="floating" fill="outline" type="email" required/>
                <br/>
                <IonInput label="Mot de passe" labelPlacement="floating" fill="outline" type="password" required/>
                <br/>
                <IonInput label="Date de naissance" labelPlacement="floating" fill="outline" type="date" required/>
                <br/>
                <IonButton onClick={handleInscriptionClick}>S'INSCRIRE</IonButton>
            </IonContent>
        </>
    );
};
export default Inscription;