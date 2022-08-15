import { FC } from 'react';
import { BsApple, BsWindows } from 'react-icons/bs';
import { VscTerminalLinux } from 'react-icons/vsc';
import { Platform } from '../utils/interfaces';

interface PlatformIconProps {
  platform: Platform;
}

export const PlatformIcon: FC<PlatformIconProps> = ({ platform }) => {
  // Classes
  const iconClassNames = 'text-xl mr-3';

  if (platform === 'Other') {
    return <></>;
  }

  if (platform === 'Windows') {
    return <BsWindows className={iconClassNames} />;
  }

  if (platform === 'Mac') {
    return <BsApple className={iconClassNames} />;
  }

  if (platform === 'Linux') {
    return <VscTerminalLinux className={iconClassNames} />;
  }

  return <></>;
};
