import PreflopChart from '@/components/PreflopChart/PreflopChart';
import { Center, Group } from '@mantine/core';
import ConfigurationControls from '@/components/ConfigurationControls/ConfigurationControls';
import { useState } from 'react';
import { PreflopAction } from '@/consts';

export function HomePage() {
  const [selectedPreflopAction, setSelectedPreflopAction] = useState<PreflopAction>(
    PreflopAction.Fold
  );
  return (
    <Center mih="100vh">
      <Group align="flex-start">
        <ConfigurationControls
          selectedPreflopAction={selectedPreflopAction}
          onSelectPreflopAction={setSelectedPreflopAction}
        />
        <PreflopChart selectedPreflopAction={selectedPreflopAction} />
      </Group>
    </Center>
  );
}
