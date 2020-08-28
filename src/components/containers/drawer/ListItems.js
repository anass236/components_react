import DashboardIcon from '@material-ui/icons/Dashboard';
import TodayIcon from '@material-ui/icons/Today';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const items = [
    {label: 'Dashboard', Icon: DashboardIcon, hidden: false, disabled: false, path: '/dashboard'},
    {label: 'Calendar', Icon: TodayIcon, hidden: false, disabled: false, path: '/calendar'},
    {label: 'Task', Icon: PlaylistAddCheckIcon, hidden: false, disabled: false, path: '/Task'},
]

export default items;