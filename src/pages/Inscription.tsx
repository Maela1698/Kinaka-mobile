import React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonRow, IonText, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';



const Inscription: React.FC = () => {
    const history = useHistory();

    const handleInscriptionClick = () => {
        // Redirige vers la page d'inscription
        history.push('/login');
    };
    return(
        <>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" size-md="6" offset-md="3">
                            <IonTitle className="ion-text-center ion-margin-top kinaka-title"><h1>KINAKA</h1></IonTitle> 
                            <h3 className="ion-text-center">Inscription</h3>
                            <div className="ion-margin ion-margin-lg">
                                <IonInput label="Nom Utilisateur" labelPlacement="floating" fill="outline"   />
                                <br/>
                                <IonInput label="Mail" labelPlacement="floating" fill="outline" type="email" placeholder="jhondoe@gmail.com" />
                                <br/>
                                <IonInput label="Mot de Passe" labelPlacement="floating" fill="outline" type="password" placeholder="mot de passe"/>
                                <br/>
                                <IonInput label="Date de Naissance" labelPlacement="floating" fill="outline" type="date"/>
                                <br/>
                                <IonButton expand="full" className="ion-margin-top secondary" onClick={handleInscriptionClick}>S'INSCRIRE</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};
export default Inscription;