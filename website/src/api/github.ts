import axios from 'axios';
import { Platform } from '../utils/interfaces';

const REPO_GH_API_URL = 'https://api.github.com/repos/royserg/bear-board';

export interface ReleaseAsset {
  url: string;
  id: number;
  name: string;
  content_type: 'application/zip';
  state: 'uploaded';
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

export interface Release {
  name: string;
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: ReleaseAsset[];
}

export enum AssetsPlatformIndex {
  Other = 0,
  Linux = 1,
  Mac = 3,
  Windows = 4,
}

export const getLatestRelease = async (): Promise<Release> => {
  const url = `${REPO_GH_API_URL}/releases/latest`;
  const res = await axios.get<Release>(url);
  return res.data;
};
