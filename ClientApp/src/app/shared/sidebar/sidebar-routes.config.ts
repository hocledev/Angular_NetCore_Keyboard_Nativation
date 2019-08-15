import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard/dashboard1', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/taskboard', title: 'Task Board', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/datatables/basic', title: 'Basic', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/cards/basic', title: 'Cards', icon: 'ft-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
];
