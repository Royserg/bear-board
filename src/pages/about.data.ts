import type { RouteDataFunc } from 'solid-app-router';
import { createResource } from 'solid-js';

function wait<T>(ms: number, data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, ms, data));
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Simulate api request
function fetchAboutData(): Promise<string> {
  const data: string = `
    Mini pet-project dedicated to grasping fundamentals of the new technologies: 
    tauri (desktop app toolkit), Rust (backend), SolidJS (Frontend);
  `;

  return wait(random(500, 1000), data);
}

export const AboutData: RouteDataFunc = () => {
  const [data] = createResource(fetchAboutData);

  return data;
};
