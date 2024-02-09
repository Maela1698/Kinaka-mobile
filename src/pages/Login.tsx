import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonPage, IonRow, IonText, IonTitle, useIonRouter } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './style/login.css';
import axios from 'axios';




const Login: React.FC = () => {
    const lienRailway = "https://annoncevoiture-production.up.railway.app/annonce";

    const [mail, setMail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');



    const navigation = useIonRouter();

    const doLogin = async () => {
        // Redirige vers la page d'acceuil
        try {
            const response = await axios.post(lienRailway + '/signin', {
                mail,
                motDePasse,
            });
            
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigation.push('/app');
            } else {
                console.error("Erreur lors de la connexion :", response.status);
                // Gérer les erreurs
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            // Gérer les erreurs
        }
    };

    

    const goInscription  = () => {
        // Redirige vers la page d'inscription
        navigation.push('/inscription');
    };

    return(
        <> 
        <IonPage> 
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" size-md="6" offset-md="3">
                            <IonTitle className="ion-text-center ion-margin-top kinaka-title">KINAKA</IonTitle> 
                            <div className="ion-margin ion-margin-lg">
                            <IonInput 
                                label="Mail" 
                                labelPlacement="floating" 
                                fill="outline" 
                                type="email" 
                                placeholder="jhondoe@gmail.com" 
                                value={mail} 
                                onIonChange={(e) => setMail(e.detail.value!)}
                            />
                            <br/>
                            <IonInput 
                                label="Mot de Passe" 
                                labelPlacement="floating" 
                                fill="outline" 
                                type="password" 
                                placeholder="mot de passe"
                                value={motDePasse}
                                onIonChange={(e) => setMotDePasse(e.detail.value!)}
                            />
                            <br/>
                            <IonButton expand="full" onClick={() => doLogin()} className="ion-margin-top ">
                                SE CONNECTER
                            </IonButton>
                            <IonButton expand="full" className="ion-margin-top secondary" onClick={goInscription}>S'INSCRIRE</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
        </>
    );
};
export default Login;