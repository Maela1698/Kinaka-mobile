import { IonButton, IonContent, IonGrid, IonInput, IonRow, IonCol, IonTitle } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import './style/login.css';

const Login = () => {
    const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isButtonDisabled = email.trim() === '' || password.trim() === '';

  const handleLoginClick = () => {
    if (!isButtonDisabled) {
      // Effectuez l'action de connexion ici
      console.log('Se connecter avec:', email, password);
    }
  };

const handleInscriptionClick = () => {
    // Redirige vers la page d'inscription
    history.push('/login');
};

  return (
    <IonContent className="ion-padding">
      <IonGrid className="">
        <IonRow>
          <IonCol size="12" size-md="6" offset-md="3">
            <IonTitle className="ion-text-center ion-margin-top kinaka-title">KINAKA</IonTitle>
            <div className="ion-margin ion-margin-lg">
              <IonInput
                label="Mail"
                labelPlacement="floating"
                fill="outline"
                type="email"
                required
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
              <br />
              <IonInput
                label="Mot de Passe"
                labelPlacement="floating"
                fill="outline"
                type="password"
                required
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
              <br />
              <IonButton expand="full" onClick={handleLoginClick} disabled={isButtonDisabled} className="ion-margin-top">
                SE CONNECTER
              </IonButton>
              <IonButton expand="full" className="ion-margin-top secondary" onClick={handleInscriptionClick}>
                S'INSCRIRE
              </IonButton>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Login;
