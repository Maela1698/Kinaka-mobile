import React, { useEffect, useState } from 'react';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRadio, IonRadioGroup, IonRouterLink, IonRouterOutlet, IonRow, IonSelect, IonSelectOption, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './style/acceuil.css'
import { Redirect, Route, useHistory } from 'react-router';
import { chatboxOutline, homeOutline,listOutline, logOutOutline } from 'ionicons/icons';
import axios from 'axios';


//Ojet Category
interface Category {
  idCategorie: number;
  nomCategorie: string;
}

//Objet Marque
interface Marque {
  idMarque: number;
  nomMarque: string;
}

//Objet Etat
interface Etat{
  idEtat : number;
  nomEtat : string;
}

//Objet Vitesse
interface Vitesse{
  idVitesse : number;
  nomVitesse : string;
}

//Objet Moteur
interface Moteur{
  idMoteur : number;
  nomMoteur : string;
}

//Objet User
interface Utilisateur{

}

const Acceuil: React.FC = () =>  {
  const [categories, setCategories] = useState<Category[]>([]); // State to store the categories
  const [marques, setMarques] = useState<Marque[]>([]); //state pour storer les marques
  const [etats, setEtats] = useState<Etat[]>([]); //state pour storer les etats
  const [vitesses, setVitesses] = useState<Vitesse[]>([]); //state pour storer les marques
  const [moteurs, setMoteurs] = useState<Moteur[]>([]); //state pour storer les etats

  const lienRailway = "https://annoncevoiture-production.up.railway.app/annonce";
  const lienUser = "https://annoncevoiture-production.up.railway.app/annonce-login/utilisateur";
  const lienPostAnnonce = "https://annoncevoiture-production.up.railway.app/annonce-login/annonce";

  //Railway
  useEffect(() => {
    // Get All Categorie
    axios.get(lienRailway+'/categorie')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });

    // Get All Marque
    axios.get(lienRailway+'/marque')
      .then((response) => { 
        setMarques(response.data);
      })
      .catch((error) => {
        console.error('Error fetching marques:', error);
      });
      
    // Get All Etat
    axios.get(lienRailway+'/etat')
      .then((response) => { 
        setEtats(response.data);
      })
      .catch((error) => {
        console.error('Error fetching etats:', error);
      }); 

      // Get All Moteur
      axios.get(lienRailway+'/moteur')
      .then((response) => { 
        setMoteurs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching moteurs:', error);
    });
    
    // Get All Vitesse
    axios.get(lienRailway+'/vitesse')
    .then((response) => { 
      setVitesses(response.data);
    })
    .catch((error) => {
      console.error('Error fetching vitesses:', error);
    }); 
  }, []);

  var getUserInfo = async () => {
    var token = localStorage.getItem("token");

    if (token) {
        try {
            var response = await axios.get(lienUser, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des informations de l'utilisateur :", error);
            return null;
        }
    } else {
        console.error("Token non trouvé dans le localStorage");
        return null;
    }
  };

  var [userName, setUserName] = useState("");

  useEffect(() => {
      async function fetchUserInfo() {
          var userInfo = await getUserInfo();
          if (userInfo) {
              setUserName(userInfo.nomUtilisateur);
          }
      }

      fetchUserInfo();
  }, []);

  const paths = [
    {name: 'Acceuil', url: '/app' , icon: homeOutline},
    {name: 'Annonces', url: '/listeAnnonces' , icon: listOutline},
    {name: 'Message', url: '/messages', icon: chatboxOutline},
    {name: 'Se Deconnecter', url: '/', icon: logOutOutline},
  ]
 
  const [vitesse, setVitesse] = useState<string>('');
  const [moteur, setMoteur] = useState<string>('');



  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
     
  };

  const handleAnnonce = () => {
    window.location.href = '/listeAnnonces';
  }


  


  return (
    <>
      {/* menu navbar */}
      <IonPage>
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              {paths.map((item,index) => (
                <IonMenuToggle key={index}>
                  <IonItem 
                    onClick={item.name === 'Se Deconnecter' ? handleLogout : item.name === 'Annonces' ? handleAnnonce : undefined} 
                    routerLink={item.url} 
                    routerDirection="forward"
                  >    
                  <IonIcon icon={item.icon} slot="start"/>
                            {item.name}
                        </IonItem>
                </IonMenuToggle>
              ))}
            </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main-content">
            {/* <Route path="/listeAnnonces" component={ListeAnnonces}> */}
            <Route path="/app">
                <Redirect to="/app" />
            </Route> 
        </IonRouterOutlet>
      {/* menu navbar */}
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
              <IonCardTitle>Bonjour {userName}</IonCardTitle>
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
                  <IonSelect label="Categorie" placeholder="">
                    {categories.map((category) => (
                      <IonSelectOption key={category.idCategorie} value={category.idCategorie}>
                        {category.nomCategorie}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonSelect label="Marque" placeholder="">
                    {marques.map((marque) => (
                      <IonSelectOption key={marque.idMarque} value={marque.idMarque}>
                        {marque.nomMarque}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonSelect label="Etat" placeholder="">
                    {etats.map((etat) => (
                      <IonSelectOption key={etat.idEtat} value={etat.idEtat}>
                        {etat.nomEtat}
                      </IonSelectOption>
                    ))}
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
                      {vitesses.map((vitesse) => (
                        <IonItem>
                          <IonLabel>{vitesse.nomVitesse}</IonLabel>
                          <IonRadio slot="start" key={vitesse.idVitesse} value={vitesse.idVitesse} />
                        </IonItem>
                      ))}
                  </IonRadioGroup>
                </IonList>
                <IonList>
                  <IonItemDivider>
                    <IonLabel className="input-color-black">Moteur</IonLabel>
                  </IonItemDivider>
                  <IonRadioGroup value={moteur} onIonChange={e => setMoteur(e.detail.value)}>
                      {moteurs.map((moteur) => (
                        <IonItem>
                          <IonLabel>{moteur.nomMoteur}</IonLabel>
                          <IonRadio slot="start" key={moteur.idMoteur} value={moteur.idMoteur} />
                        </IonItem>
                      ))}
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