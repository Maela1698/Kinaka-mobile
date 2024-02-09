import React, { useState } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonPage, IonRow, IonText, IonTitle } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



const Inscription: React.FC = () => {
    const history = useHistory();

    const [nomUtilisateur, setNomUtilisateur] = useState('');
    const [mail, setMail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [dateDeNaissance, setDateDeNaissance] = useState('');

    const handleInscriptionClick = async () => {
        try {
            // Effectuer la requête POST vers l'API
            const response = await axios.post('https://annoncevoiture-production.up.railway.app/annonce/signup', {
                dateDeNaissance,
                nomUtilisateur,
                motDePasse,
                mail,
            });

            // Traiter la réponse de l'API si nécessaire
            console.log('Réponse de l\'API:', response.data);

            // Rediriger vers la page d'accueil (ou une autre page) après l'inscription réussie
            history.push('/');
        } catch (error) {
            // Gérer les erreurs de l'API
            console.error('Erreur lors de l\'inscription:', error);
            // Vous pouvez également afficher un message à l'utilisateur pour l'informer de l'échec de l'inscription.
        }
    };

    return(
        <>
            <IonPage>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" size-md="6" offset-md="3">
                            <IonTitle className="ion-text-center ion-margin-top kinaka-title"><h1>KINAKA</h1></IonTitle> 
                            <h3 className="ion-text-center">Inscription</h3>
                            <div className="ion-margin ion-margin-lg">
                                <IonInput label="Nom Utilisateur" labelPlacement="floating" fill="outline"  
                                    value={nomUtilisateur} 
                                    onIonChange={(e) => setNomUtilisateur(e.detail.value!)}
                                />
                                <br/>
                                <IonInput label="Mail" labelPlacement="floating" fill="outline" type="email" placeholder="rakoto@gmail.com" 
                                    value={mail} 
                                    onIonChange={(e) => setMail(e.detail.value!)}
                                />
                                <br/>
                                <IonInput label="Mot de Passe" labelPlacement="floating" fill="outline" type="password" placeholder="mot de passe"
                                    value={motDePasse} 
                                    onIonChange={(e) => setMotDePasse(e.detail.value!)}
                                />
                                <br/>
                                <IonInput label="Date de Naissance" labelPlacement="floating" fill="outline" type="date"
                                    value={dateDeNaissance} 
                                    onIonChange={(e) => setDateDeNaissance(e.detail.value!)}
                                />
                                <br/>
                                <IonButton expand="full" className="ion-margin-top secondary" onClick={handleInscriptionClick}>S'INSCRIRE</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            </IonPage>
        </>
    );
};
export default Inscription;