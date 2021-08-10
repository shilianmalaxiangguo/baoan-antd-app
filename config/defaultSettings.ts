import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  primaryColor: "#66c18c",
  navTheme: "light",
  layout: "mix",
  title: 'myapp',
  contentWidth: "Fluid",
  splitMenus: true,
  fixSiderbar: true,
  menu:{
    locale:false
  },
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
