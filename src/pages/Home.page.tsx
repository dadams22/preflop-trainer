import PreflopChart from '@/components/PreflopChart/PreflopChart';
import {Center, Group, Select, Stack, Switch} from '@mantine/core';
import {useState} from 'react';
import {Position, POSITIONS, PreflopAction, RFI_CHARTS} from '@/consts';
import PreflopActionCard from "@/components/ConfigurationControls/components/PreflopActionCard";
import _ from "lodash";
import {useToggle} from "@mantine/hooks";

export function HomePage() {
    const[selectedPosition, setSelectedPosition] = useState<Position>(Position.BN);
  const [selectedPreflopAction, setSelectedPreflopAction] = useState<PreflopAction | null>(
    PreflopAction.Fold
  );
  const [checkSolution, setCheckSolution] = useState<boolean | undefined>(false);

  const referenceChart = RFI_CHARTS[selectedPosition];
  const possibleActions = _.uniq(_.flatten(referenceChart || []));

  return (
    <Center mih="100vh">
      <Group align="flex-start">
          <Stack>
              <Select label="Position" data={POSITIONS} defaultValue="BN" onChange={setSelectedPosition} />
              {possibleActions.map((action) => (
                  <PreflopActionCard
                      action={action}
                      selected={selectedPreflopAction === action}
                      onClick={() => setSelectedPreflopAction(action)}
                  />
              ))}
              {referenceChart && <Switch label="Show solution" checked={checkSolution} onChange={(e) => setCheckSolution(e.target.checked)} />}
          </Stack>
        <PreflopChart selectedPreflopAction={selectedPreflopAction} solution={checkSolution ? referenceChart : undefined} />
      </Group>
    </Center>
  );
}
