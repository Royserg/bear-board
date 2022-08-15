import { useEffect, useState } from 'react';

export type Platform = 'Mac' | 'Windows' | 'Linux' | 'Other';

export const useUserPlatform = () => {
  const [userPlatform, setUserPlatform] = useState<Platform>();

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const platformInfo = userAgent?.split(' ')[1];

    if (platformInfo) {
      if (platformInfo.includes('Macintosh')) {
        return setUserPlatform('Mac');
      }

      if (platformInfo.includes('Windows')) {
        return setUserPlatform('Windows');
      }

      if (platformInfo.includes('Linux')) {
        return setUserPlatform('Linux');
      }

      setUserPlatform('Other');
    }
  }, []);

  return userPlatform;
};
