import React from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function Acceuil() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Kinaka</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Bonjour Mr Rojo</IonCardTitle>
              <IonCardSubtitle>Bienvenue sur KINAKA</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>Tirez parti de fonctionnalités intuitives pour télécharger des photos attrayantes de votre voiture, attirant ainsi l'attention des acheteurs. Vous avez également la possibilité de définir un prix compétitif et d'ajouter des informations supplémentaires pour mettre en valeur les caractéristiques uniques de votre véhicule.</IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Acceuil;