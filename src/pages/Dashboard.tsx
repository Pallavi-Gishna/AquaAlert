import {
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    IonBadge,
  } from '@ionic/react';
  import { menuOutline, personCircleOutline, notificationsOutline } from 'ionicons/icons';
  import { useState } from 'react';
  import { useSpring, animated } from 'react-spring';
  import './Dashboard.css';
  import GaugeChart from 'react-gauge-chart';  // Import the GaugeChart component
  import { Line } from 'react-chartjs-2';
  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
  
  // Register necessary Chart.js components
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  
  const Dashboard: React.FC = () => {
    const [flowRate, setFlowRate] = useState<number>(15); // Placeholder flow rate
    const [hasNotification, setHasNotification] = useState<boolean>(true); // Simulated notification flag
    const [waterUsed, setWaterUsed] = useState<number>(50); // Water used in liters
    const [threshold, setThreshold] = useState<number>(100); // User's water usage threshold
  
    // Animation setup for sliding effect
    const slideUpAnimation = useSpring({
      from: { opacity: 0, transform: 'translateY(100px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      config: { tension: 170, friction: 26 },
    });
  
    // Circular progress bar calculation for water usage
    const progress = (waterUsed / threshold) * 100;
  
    // Logic to handle water usage exceeding threshold
    if (waterUsed > threshold && !hasNotification) {
      setHasNotification(true);
    }
  
    // Graph data for daily usage trend
    const dailyUsageData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Water Usage (liters)',
          data: [10, 20, 30, 25, 35, 40, 50], // Example data
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
  
    return (
      <>
        {/* Side Menu */}
        <IonMenu contentId="main-content">
          <IonContent>
            <IonTitle>Set Threshold</IonTitle>
            <IonCard className="card-container">
              <IonCardContent>
                <p>Define your water usage threshold:</p>
                <IonButton expand="block" color="primary">Set Now</IonButton>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonMenu>
  
        {/* Main Content */}
        <IonPage id="main-content">
          {/* Header */}
          <IonHeader>
            <IonToolbar style={{ backgroundColor: 'black' }}>
              <IonMenuButton slot="start" />
              <IonTitle style={{ color: 'black', textAlign: 'center', flex: 1 }}>Dashboard</IonTitle>
              <IonButton fill="clear" slot="end">
                <IonIcon icon={notificationsOutline} color="dark" />
                {hasNotification && <IonBadge color="danger" slot="end"></IonBadge>}
              </IonButton>
              <IonButton fill="clear" slot="end">
                <IonIcon icon={personCircleOutline} color="dark" />
              </IonButton>
            </IonToolbar>
          </IonHeader>
  
          {/* Content */}
          <IonContent>
            <IonGrid>
              {/* Real-Time Daily Water Consumption */}
              <IonRow>
                <IonCol size="12">
                  <animated.div className="animated-container" style={slideUpAnimation}>
                    <IonCard className="card-container">
                      <IonCardContent>
                        <h3>Real-Time Daily Water Consumption</h3>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                          <GaugeChart
                            id="water-usage-gauge"
                            nrOfLevels={30}
                            arcsLength={[0.3, 0.5, 0.2]}  // Segments of the gauge
                            colors={['#1E3A5F', '#4F83A3', '#80C7E1']}  // Blue color gradient
                            percent={progress / 100}  // Progress in percentage
                            arcPadding={0.02}
                            hideText={false}  // Show percentage text
                          />
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </animated.div>
                </IonCol>
              </IonRow>
  
              {/* Daily Usage Trend (Graph) */}
              <IonRow>
                <IonCol size="12">
                  <animated.div className="animated-container" style={slideUpAnimation}>
                    <IonCard className="card-container">
                      <IonCardContent>
                        <h3>Daily Usage Trend (Graph)</h3>
                        <Line data={dailyUsageData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
                      </IonCardContent>
                    </IonCard>
                  </animated.div>
                </IonCol>
              </IonRow>
  
              {/* Conversation Tips */}
              <IonRow>
                <IonCol size="12">
                  <div className="conversation-tips">
                    <h3>Conversation Tips</h3>
                    <ul>
                      <li>Try reducing your water usage by adjusting your shower time.</li>
                      <li>Turn off taps while brushing your teeth to save water.</li>
                      <li>Fix any leaks promptly to avoid wastage.</li>
                    </ul>
                  </div>
                </IonCol>
              </IonRow>
  
              {/* Placeholder for Sprint 2 */}
              <IonRow>
                <IonCol size="6">
                  <IonCard className="card-container">
                    <IonCardContent>
                      <h3>Sprint 2 Graph 1</h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
                <IonCol size="6">
                  <IonCard className="card-container">
                    <IonCardContent>
                      <h3>Sprint 2 Graph 2</h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      </>
    );
  };
  
  export default Dashboard;
  