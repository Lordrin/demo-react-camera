import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Webcam from "react-webcam";
import './Home.css';

const Home: React.FC = () => {

  const webcamRef = React.useRef<Webcam>(null);
  const takePictureBrowser = React.useCallback(
    () => {
      // Promise.resolve().then(res => {
      //     ReactDOM.unstable_batchedUpdates(() => {
      //         setCount(0);
      //         setHideFooter(true);
      //     });
      // });
      // dispatch(setUploadingStatus("reset"));

      const imageSrc = webcamRef?.current?.getScreenshot();
      if (!!imageSrc) {
        const to_send = (imageSrc.slice("data:image/jpeg;base64,".length));
        console.log(to_send);
        // sendToOCRBackend(to_send);
        // setImage(imageSrc);
      }
    },
    [webcamRef]
  );
  const videoConstraints = {
    facingMode: "environment"
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMediaError={error => {
          if (!!error) {
            //DOMException is checked on this component and is thrown here when CAMERA cannot be used
            if (error instanceof DOMException) {
              // setAddImageManually(true);

            };
            console.error(error);
          };
        }}
      />
      {/* <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent> */}
    </IonPage>
  );
};

export default Home;
