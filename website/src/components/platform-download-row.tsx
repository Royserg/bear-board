import { FC } from 'react';
import { FaDownload } from 'react-icons/fa';
import { ReleaseAsset } from '../api/github';
import { Platform } from '../utils/interfaces';
import { PlatformIcon } from './platform-icon';

interface PlatformDownloadRowProps {
  platform: Platform;
  assetData?: ReleaseAsset;
}

export const PlatformDownloadRow: FC<PlatformDownloadRowProps> = ({
  platform,
  assetData,
}) => {
  // Classes
  const platformDownloadBoxClasses = 'p-3 flex justify-between items-center';
  const iconClassNames = 'text-xl mr-3';
  const assetDownloadBtnClasses =
    'flex p-2 rounded-xl hover:text-amber-500 hover:shadow-sm transition-colors';

  return (
    <div className={platformDownloadBoxClasses}>
      <PlatformIcon platform={platform} />

      <a href={assetData?.browser_download_url}>{assetData?.name}</a>
      <a
        href={assetData?.browser_download_url}
        className={assetDownloadBtnClasses}
      >
        <FaDownload className={iconClassNames} />
        Download
      </a>
    </div>
  );
};
