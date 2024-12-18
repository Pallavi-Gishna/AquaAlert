import React, { useState } from "react";
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from "@ionic/react";

const Menu: React.FC = () => {
    const [threshold, setThreshold] = useState("");

    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="stacked">Set Water Usage Threshold (Liters)</IonLabel>
                        <IonInput
                            placeholder="e.g., 1000"
                            value={threshold}
                            onIonChange={(e) => setThreshold(e.detail.value!)}
                        />
                    </IonItem>
                    <IonButton expand="block" color="success" onClick={() => alert(`Threshold set to: ${threshold} L`)}>
                        Save Threshold
                    </IonButton>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
