import React, { useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './style/acceuil.css'

function Acceuil() {
 
  const [vitesse, setVitesse] = useState<string>('');
  const [moteur, setMoteur] = useState<string>('');

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

            <IonCardContent>Tirez parti de fonctionnalités intuitives pour télécharger des photos attrayantes de votre voiture, attirant ainsi l'attention des acheteurs. </IonCardContent>
          </IonCard>
          <br/>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Ajout Annonce</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonSelect label="Categorie" placeholder="Voiture de luxe">
                    <IonSelectOption value="Voiture de luxe">Voiture de luxe</IonSelectOption>
                    <IonSelectOption value="Voiture vintage">Voiture vintage</IonSelectOption>
                    <IonSelectOption value="Camping car">Camping car</IonSelectOption>
                    <IonSelectOption value="Coupe">Coupe</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonSelect label="Marque" placeholder="Mercedes">
                    <IonSelectOption value="Mercedes">Mercedes</IonSelectOption>
                    <IonSelectOption value="Peugeot">Peugeot</IonSelectOption>
                    <IonSelectOption value="Toyota">Toyota</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonSelect label="Etat" placeholder="Bonne occasion">
                    <IonSelectOption value="Bonne occasion">Bonne occasion</IonSelectOption>
                    <IonSelectOption value="Comme neuve">Comme neuve</IonSelectOption>
                    <IonSelectOption value="Neuve">Neuve</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
              <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className="">
                            <IonInput label="Kilometrage" labelPlacement="floating" fill="outline" type="number" className="input-color-black"/>
                            
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonList>
                  <IonItemDivider>
                    <IonLabel className="input-color-black">Vitesse</IonLabel>
                  </IonItemDivider>

                  <IonRadioGroup value={vitesse} onIonChange={e => setVitesse(e.detail.value)}>
                    <IonItem>
                      <IonLabel>Manuelle</IonLabel>
                      <IonRadio slot="start" value="manuelle" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>Automatique</IonLabel>
                      <IonRadio slot="start" value="automatique" />
                    </IonItem>
                  </IonRadioGroup>
                </IonList>
                <IonList>
                  <IonItemDivider>
                    <IonLabel className="input-color-black">Moteur</IonLabel>
                  </IonItemDivider>

                  <IonRadioGroup value={moteur} onIonChange={e => setMoteur(e.detail.value)}>
                    <IonItem>
                      <IonLabel>Diesel</IonLabel>
                      <IonRadio slot="start" value="diesel" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>Essence</IonLabel>
                      <IonRadio slot="start" value="essence" />
                    </IonItem>
                    <IonItem>
                      <IonLabel>Hybride</IonLabel>
                      <IonRadio slot="start" value="hybride" />
                    </IonItem>
                    <IonItem>
                      <IonLabel>Electronique</IonLabel>
                      <IonRadio slot="start" value="Electronique" />
                    </IonItem>
                  </IonRadioGroup>
                </IonList>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <div className="">
                            <IonInput label="Prix" labelPlacement="floating" fill="outline" type="number" className="input-color-black"/>
                            
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonButton expand="full" className="ion-margin-top secondary" >AJOUTER ANNONCE</IonButton>
            </IonCardContent>  
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Acceuil;