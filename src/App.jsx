import {useState} from 'react';
import PhotoAlbumComponent from './components/PhotoAlbum';
import EffectSelection from './components/EffectSelection';

import './App.css';

const App = () => {
  // Configuration
  const cloudName = 'YOUR_CLOUD_NAME';
  const uploadPreset = 'YOUR_PRESET_NAME';

  // State
  const [effectOption, setEffectOption] = useState('Background Fill');

  // Upload Widget Configuration
  const uwConfig = {
    cloudName,
    uploadPreset,
    // Uncomment and modify as needed:
    // cropping: true,
    // showAdvancedOptions: true,
    // sources: ['local', 'url'],
    // multiple: false,
    // folder: 'user_images',
    // tags: ['users', 'profile'],
    // context: { alt: 'user_uploaded' },
    // clientAllowedFormats: ['images'],
    // maxImageFileSize: 2000000,
    // maxImageWidth: 2000,
    // theme: 'purple',
  };
  let photos = [];
  let width = 1280;
  let height = 1257;

  return (
    <div className="App">
      <h3>Cloudinary GenAI Image Capabilities</h3>
          <div className="spacing"></div>
          <EffectSelection effectOption={effectOption} onEffectOptionChange={setEffectOption}/>
          <div className="spacing"></div>
          <PhotoAlbumComponent data={{effectOption: effectOption, onEffectOptionChange:{setEffectOption}}}/>
    </div>
  );
};

export default App;
