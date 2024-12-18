import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonCheckbox, IonItem, IonLabel, useIonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();  // Hook to navigate programmatically
  const [presentToast] = useIonToast();  // For showing toast messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple validation for email and password
    if (!email || !password) {
      presentToast({
        message: 'Please enter both email and password.',
        duration: 2000,
        color: 'danger',
      });
      return;
    }

    // Add your login logic here (e.g., check credentials, etc.)
    console.log('Logged in with', email, password);

    // After successful login, navigate to the dashboard
    presentToast({
      message: 'Login successful!',
      duration: 2000,
      color: 'success',
    });

    // Redirect to the dashboard
    history.push('/dashboard');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/assets/aqualogo.png"
            alt="Aqua Alert Logo"
            style={{ marginBottom: '20px', width: '200px' }}
          />
        </div>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            type="password"
            placeholder="Enter your password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
          />
        </IonItem>
        <IonItem lines="none">
          <IonCheckbox slot="start" />
          <IonLabel>Remember Me</IonLabel>
        </IonItem>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <IonButton expand="block" color="primary" onClick={handleLogin}>
            Sign In
          </IonButton>
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="/forgot-password" style={{ textDecoration: 'none' }}>Forgot Password?</a>
        </div>
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <p style={{ margin: '0', fontSize: '14px' }}>
            Don&apos;t have an account?{' '}
            <a href="/register" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
              Create one
            </a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
