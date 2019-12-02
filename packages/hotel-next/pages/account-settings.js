import { AgentAccountSettingsPage } from '../container/Agent/index';
import GetAPIData, { ProcessAPIData } from '../helpers/get_api_data';
import { secretPage } from '../helpers/restriction';

export default function AccountSettings({ processedData, deviceType }) {
  return (
    <AgentAccountSettingsPage
      processedData={processedData}
      deviceType={deviceType}
    />
  );
}

AccountSettings.getInitialProps = async context => {
  const isLoggedIn = secretPage(context);
  // use this query to filter data from your fetch data
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'agentProfile',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  return { processedData, isLoggedIn };
};
