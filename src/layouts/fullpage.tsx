import { ParentComponent } from 'solid-js';
import { useSelector } from '../store';
import { Theme } from '../store/theme';

type FullPageWrapperProps = { classNames?: string };

export const FullPageWrapper: ParentComponent<FullPageWrapperProps> = ({
  children,
  classNames,
}) => {
  const {
    theme: { theme },
  } = useSelector();

  const pageBgColor = () =>
    theme() === Theme.LIGHT ? 'bg-base-200' : 'bg-base-300';

  return (
    <section
      class={
        `${pageBgColor()} h-full w-full overflow-y-auto overflow-x-hidden flex flex-col justify-start ` +
        classNames
      }
    >
      {children}
    </section>
  );
};
