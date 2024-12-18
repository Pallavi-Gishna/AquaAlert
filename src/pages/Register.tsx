import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel,
  useIonToast,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const history = useHistory(); // Hook to navigate programmatically
  const [presentToast] = useIonToast(); // Ionic Toast for feedback
  const [formData, setFormData] = useState({
    surname: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleRegister = () => {
    // Simple form validation
    if (!formData.surname || !formData.lastName || !formData.email || !formData.password) {
      presentToast({
        message: 'Please fill out all fields.',
        duration: 2000,
        color: 'danger',
      });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      presentToast({
        message: 'Passwords do not match.',
        duration: 2000,
        color: 'danger',
      });
      return;
    }
    if (!formData.termsAccepted) {
      presentToast({
        message: 'You must accept the terms & conditions.',
        duration: 2000,
        color: 'danger',
      });
      return;
    }

    // Registration logic (e.g., send data to backend)
    console.log('Registered:', formData);

    // Success feedback
    presentToast({
      message: 'Registration successful!',
      duration: 2000,
      color: 'success',
    });

    // Redirect to Login page
    history.push('/login');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/assets/aqualogo.png"
            alt="Aqua Alert Logo"
            style={{ marginBottom: '20px', width: '150px' }}
          />
        </div>
        <IonItem>
          <IonLabel position="stacked">Surname</IonLabel>
          <IonInput
            type="text"
            placeholder="Enter your surname"
            onIonChange={(e) => setFormData({ ...formData, surname: e.detail.value! })}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Last Name</IonLabel>
          <IonInput
            type="text"
            placeholder="Enter your last name"
            onIonChange={(e) => setFormData({ ...formData, lastName: e.detail.value! })}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            type="email"
            placeholder="Enter your email"
            onIonChange={(e) => setFormData({ ...formData, email: e.detail.value! })}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            placeholder="Enter your password"
            onIonChange={(e) => setFormData({ ...formData, password: e.detail.value! })}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Confirm Password</IonLabel>
          <IonInput
            type="password"
            placeholder="Confirm your password"
            onIonChange={(e) => setFormData({ ...formData, confirmPassword: e.detail.value! })}
          />
        </IonItem>
        <IonItem lines="none">
          <IonCheckbox
            slot="start"
            checked={formData.termsAccepted}
            onIonChange={(e) => setFormData({ ...formData, termsAccepted: e.detail.checked })}
          />
          <IonLabel>I accept the terms & conditions</IonLabel>
        </IonItem>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <IonButton expand="block" color="primary" onClick={handleRegister}>
            Register
          </IonButton>
        </div>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
              Sign In
            </a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
