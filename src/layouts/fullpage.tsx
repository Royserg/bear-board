import { ParentComponent } from 'solid-js';

type FullPageWrapperProps = { classNames?: string };

export const FullPageWrapper: ParentComponent<FullPageWrapperProps> = ({
  children,
  classNames,
}) => {
  return (
    <section
      class={
        'h-full w-full overflow-y-auto overflow-x-hidden flex flex-col justify-start ' +
        classNames
      }
    >
      {children}
    </section>
  );
};
