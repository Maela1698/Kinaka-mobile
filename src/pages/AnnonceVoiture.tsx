// Import des composants nécessaires depuis Ionic/React
import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonBadge, IonIcon, IonAlert, IonText, IonPage, IonContent } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import './style/annonceVoiture.css';
import firebase from 'firebase/app';
import 'firebase/storage';
import firebaseConfig from './firebaseConfig';

// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Référence au service de stockage Firebase
const storage = firebase.storage();

//Objet Voiture 
interface Voiture{
  categorie : Categorie ;
  marque : Marque;
}

//Objet Categorie
interface Categorie{
  nomCategorie : String;
}

//Objet Marque
interface Marque{
  nomMarque : String;
}

// Définition du composant AnnonceVoiture
const AnnonceVoiture: React.FC<{ annonce: any }> = ({ annonce }) => {
  const [showAlert, setShowAlert] = useState(false);
  
  // Extrayez les propriétés de l'annonce pour faciliter l'accès
  const {   voiture, etatAnnonce , photo} = annonce;

  const handleIconClick = () => {
    if (etatAnnonce !== 1) {
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    // Fermer l'IonAlert
    setShowAlert(false);
  };

  const formatAnnonceDetails = (annonce: { voiture : Voiture }) => {
    return `
      ${annonce.voiture.categorie.nomCategorie},
      ${annonce.voiture.marque.nomMarque}
    `;
  };

  return (
    // Utilisation des composants Ionic pour construire la carte
    <IonCard>
      {/* Partie gauche avec la photo de la voiture */}
      <IonImg src={photo} alt="Photo de la voiture" style={{ height: '100%', objectFit: 'cover' }} />

      {/* Partie droite avec les caractéristiques simplifiées de la voiture */}
      <IonCardHeader>
        <IonCardSubtitle className="fontSize">{voiture.categorie.nomCategorie}</IonCardSubtitle>
        <IonCardTitle  className="fontSize">{voiture.marque.nomMarque}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent className="fontSize">
        <p style={{color : 'black', fontWeight:'bold'}}>{voiture.prix} €</p>
        
      </IonCardContent>
      {/* IonBadge pour le statut de disponibilité */}
      <IonBadge
        color={etatAnnonce === 0 ? 'warning' : 'success'}
        style={{ position: 'absolute', top: '58%',right: '3%',transform: 'translateY(-50%)' , color: 'white'}}
      >
        {etatAnnonce === 0 ? 'Dispo' : 'Vendu'}
      </IonBadge>
      
      <div style={{ position: 'absolute', top: '89%', right: '5%', transform: 'translateY(-50%)', fontSize: '1.3em', cursor: 'pointer' }}>
        <IonIcon icon={settingsOutline} onClick={handleIconClick} />
        {/* IonAlert pour afficher les détails de la voiture */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={closeAlert}
          header={formatAnnonceDetails(annonce)}
          inputs={[
            {
              name: 'statut',
              label: 'Marquer cette voiture comme étant etre vendue',
              type:'checkbox',
            }
            
          ]}
          buttons={[
          {
            text : 'Confirmer'
          }  ,
          {
            text : 'Annuler',
            role : 'cancel'
          } 
          ]}
        />
      </div>
    </IonCard>
  );
};

export default AnnonceVoiture;


