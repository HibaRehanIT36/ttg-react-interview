import { useMemo } from 'react';
import { routesPathes } from '../../../config/settings';
import Iconify from '../../../views/components/iconify';

export function useSideBarData() {
  const icon = (name: string) => (
    <Iconify icon={name} color="secondary.main" className="side-icon" width={18} />
  );

  const data = useMemo(
    () => [
      {
        id: 0,
        title: 'Home',
        path: routesPathes.dashboard.root,
        icon: icon('el:home'),
      },
      {
        id: 1,
        title: 'Tasks',
        path: routesPathes.dashboard.tasks,
        icon: icon('streamline:task-list-solid'),
      },
    ],
    []
  );

  return data;
}
