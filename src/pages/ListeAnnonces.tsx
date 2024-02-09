import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { chatboxOutline, homeOutline, listOutline, logOutOutline } from "ionicons/icons";
import { Route, Redirect, useHistory } from "react-router";
import AnnonceVoiture from "./AnnonceVoiture";
import axios from "axios";
import { useEffect, useState } from "react";



const ListeAnnonces: React.FC = () => {
  const paths = [
    {name: 'Acceuil', url: '/app' , icon: homeOutline},
    {name: 'Annonces', url: '/listeAnnonces' , icon: listOutline},
    {name: 'Message', url: '/messages', icon: chatboxOutline},
    {name: 'Se Deconnecter', url: '/', icon: logOutOutline},
  ]

  var getUserAnnonces = async () => {
    var token = localStorage.getItem("token");

    if (token) {
        try {
            var response = await axios.get(lienGetAnnonceUser, {
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

  var [annonces,setAnnoncesUser] = useState([]);

  useEffect(() => {
    async function fetchAnnoncesUser() {
        var annoncesUser = await getUserAnnonces();
        if (annoncesUser) {
          setAnnoncesUser(annoncesUser);
        }
    }

    fetchAnnoncesUser();
}, []);

  const lienGetAnnonceUser = "https://annoncevoiture-production.up.railway.app/annonce-login/annonce";

      // const annonces = [
      //   {photo: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',categorie: 'SUV',
      //   marque: 'Toyota',
      //   etat: 'Occasion',
      //   kilometrage: 50000,
      //   vitesse: 'Automatique',
      //   moteur: 'Essence',
      //   prix: 25000,
      //   statut : 1},


      //   {photo: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',categorie: 'SUV',
      //   marque: 'Kia',
      //   etat: 'Occasion',
      //   kilometrage: 50000,
      //   vitesse: 'Automatique',
      //   moteur: 'Essence',
      //   prix: 25000,
      //   statut : 0},

      //   {photo: 'https://ionicframework.com/docs/img/demos/thumbnail.svg',categorie: 'SUV',
      //   marque: 'Renault',
      //   etat: 'Occasion',
      //   kilometrage: 50000,
      //   vitesse: 'Automatique',
      //   moteur: 'Essence',
      //   prix: 25000, 
      //   statut : 0},
      // ];

      const history = useHistory();

      const handleLogout = () => {
        // Supprimer le token ou effectuer toute autre opération de déconnexion nécessaire
        localStorage.removeItem('token');
        // Rediriger vers l'URL '/'
        // Exemple de redirection:
        history.push('/');
    };
    return(
    <>
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
                        <IonItem onClick={item.name === 'Se Deconnecter' ? handleLogout : undefined} routerLink={item.url} routerDirection="forward">
                            <IonIcon icon={item.icon} slot="start"/>
                            {item.name}
                        </IonItem>
                    </IonMenuToggle>
                 ))}
            </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main-content">
            {/* <Route path="/listeAnnonces" component={ListeAnnonces}/> */}
            <Route path="/app">
                <Redirect to="/app" />
            </Route> 
        </IonRouterOutlet>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Kinaka</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
        {/* Utilisation du composant IonGrid pour créer une grille */}
        <IonGrid>
          {/* Utilisation du composant IonRow pour chaque ligne */}
          {annonces.map((annonce, index) => (
            // Afficher la ligne si c'est la première annonce ou une annonce impaire
            (index === 0 || index % 2 === 0) && (
              <IonRow key={index}>
                {/* Utilisation du composant IonCol pour chaque colonne */}
                <IonCol size="6">
                  {/* AnnonceVoiture pour la première voiture sur la ligne */}
                  <AnnonceVoiture annonce={annonce} />
                </IonCol>

                {/* Vérification si la deuxième carte peut être affichée sur la ligne */}
                {index + 1 < annonces.length && (
                  <IonCol size="6">
                    {/* AnnonceVoiture pour la deuxième voiture sur la ligne */}
                    <AnnonceVoiture annonce={annonces[index + 1]} />
                  </IonCol>
                )}
              </IonRow>
            )
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
    </>
    );

}
export default ListeAnnonces;