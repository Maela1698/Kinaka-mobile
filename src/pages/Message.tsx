import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { chatbox, chatboxOutline, homeOutline,listOutline, logOutOutline } from 'ionicons/icons';
import './Home.css';
import { Route, Redirect } from 'react-router';
import { useState, useEffect } from 'react';

const Message: React.FC = () => {
  const paths = [
      {name: 'Acceuil', url: '/app' , icon: homeOutline},
      {name: 'Annonces', url: '/listeAnnonces' , icon: listOutline},
      {name: 'Message', url: '/messages', icon: chatboxOutline},
      {name: 'Se Deconnecter', url: '/', icon: logOutOutline},
    ]

    const [items, setItems] = useState<string[]>([]);

    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i < 50; i++) {
        newItems.push(`Item ${1 + items.length + i}`);
      }
      setItems([...items, ...newItems]);
    };
  
    useEffect(() => {
      generateItems();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
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
                <IonItem routerLink={item.url} routerDirection="forward">
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
      <IonContent>
        <IonList>
          {items.map((item, index) => (
            <IonItem key={item}>
              <IonAvatar slot="start">
                <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
              </IonAvatar>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            generateItems();
            setTimeout(() => ev.target.complete(), 500);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Message;
