import React from 'react';
import { SidebarMenu } from '../../components/SidebarMenu/SidebarMenu';
import { WebhookPage } from '../WebhookPage/WebhookPage';
import { DangerZone } from './DangerZone';
import { GeneralSettings } from './GeneralSettings';
import { InstructionsSettings } from './InstructionsSettings';
import { LabelingSettings } from './LabelingSettings';
import { MachineLearningSettings } from './MachineLearningSettings/MachineLearningSettings';
import { StorageSettings } from './StorageSettings/StorageSettings';
import { DisplayLogs } from './DisplayLogs';
import { ClassesLabeled } from './classesLabeled';
import { ChangeLabelName } from './ChangeLabelName';

export const MenuLayout = ({children, ...routeProps}) => {
  return (
    <SidebarMenu
      menuItems={[
        GeneralSettings,
        LabelingSettings,
        InstructionsSettings,
        MachineLearningSettings,
        StorageSettings,
        WebhookPage,
        DisplayLogs,
        ClassesLabeled,
        ChangeLabelName,
        DangerZone,

      ]}
      path={routeProps.match.url}
      children={children}
    />
  );
};

export const SettingsPage = {
  title: "Settings",
  path: "/settings",
  exact: true,
  layout: MenuLayout,
  component: GeneralSettings,
  pages: {
    InstructionsSettings,
    LabelingSettings,
    MachineLearningSettings,
    StorageSettings,
    WebhookPage,
    DisplayLogs, 
    ClassesLabeled,
    ChangeLabelName,
    DangerZone,
  },
};
