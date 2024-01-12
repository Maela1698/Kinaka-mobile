import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonRow, IonText, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './style/main.css';
import './style/login.css';




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
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" size-md="6" offset-md="3">
                            <IonTitle className="ion-text-center ion-margin-top kinaka-title">KINAKA</IonTitle> 
                            <div className="ion-margin ion-margin-lg">
                            <IonInput label="Mail" labelPlacement="floating" fill="outline" type="email" required/>
                            <br/>
                            <IonInput label="Mot de Passe" labelPlacement="floating" fill="outline" type="password" required/>
                            <br/>
                            <IonButton expand="full" onClick={goAcceuil} className="ion-margin-top">SE CONNECTER</IonButton>
                            <IonButton expand="full" className="ion-margin-top secondary" onClick={handleInscriptionClick}>S'INSCRIRE</IonButton>
                            </div>
                        </IonCol>
                        
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};
export default Login;