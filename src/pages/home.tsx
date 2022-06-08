import { FullPageWrapper } from '../layouts/fullpage';
import { createResource, Show } from 'solid-js';
import { invoke } from '@tauri-apps/api/tauri';

const getHello = () => invoke<string>('hello');

export const Home = () => {
  const [data] = createResource<string>(getHello);

  return (
    <FullPageWrapper classNames='bg-grey-100 text-dark-600 p-8'>
      <h1 class='text-2xl font-bold'>Home</h1>

      <div class='mt-3 text-sm w-80'>
        <Show when={!data.loading} fallback={<div>Loading...</div>}>
          <p>
            Data from Backend:{' '}
            <span class='text-dark-800 text-xl font-bold'>{data()}</span>
          </p>
        </Show>
      </div>
    </FullPageWrapper>
  );
};
