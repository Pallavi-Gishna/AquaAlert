import React from "react";
import { IonContent, IonPage, IonButton, IonImg } from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-text-center" fullscreen>
        <div className="page-content">
          <IonImg
            className="logo"
            src="/assets/aqualogo.png"
            alt="Aqua Alert Logo"
          />
          <IonButton
            className="get-started-btn"
            expand="block"
            routerLink="/Login"
          >
            Get Started
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
