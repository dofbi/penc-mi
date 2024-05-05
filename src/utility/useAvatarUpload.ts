import { useState } from 'react';
import { supabaseClient } from './supabaseClient';

const useAvatarUpload = () => {
  const [uploading, setUploading] = useState(false);

  const uploadAvatar = async (file: any) => {
    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { data: imageData, error: uploadError } = await supabaseClient.storage
          .from('avatars')
          .upload(filePath, file);

      if (uploadError) {
          throw uploadError;
      }

      const publicUrl = await supabaseClient.storage.from('avatars').getPublicUrl(imageData?.path);
      return publicUrl.data.publicUrl; // Return the public URL instead of setting state

    } catch (error) {
      console.log('Error uploading avatar:', error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  return { uploadAvatar, uploading };
};

export default useAvatarUpload;
