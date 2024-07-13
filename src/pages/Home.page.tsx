import PreflopChart from '@/components/PreflopChart/PreflopChart';
import { Button, Center, Group, Select, Stack, Switch } from '@mantine/core';
import { useState } from 'react';
import { CARD_RANKS, Position, POSITIONS, PreflopAction, RFI_CHARTS } from '@/consts';
import PreflopActionCard from '@/components/ConfigurationControls/components/PreflopActionCard';
import _ from 'lodash';

function createPreflopActionMatrix(): PreflopAction[][] {
  const dimension = CARD_RANKS.length;
  const array: any[][] = new Array(dimension);
  for (let i = 0; i < dimension; i++) {
    array[i] = new Array(dimension).fill(PreflopAction.Fold);
  }
  return array;
}

export function HomePage() {
  const [selectedPosition, setSelectedPosition] = useState<Position>(Position.BN);
  const [selectedPreflopAction, setSelectedPreflopAction] = useState<PreflopAction | null>(
    PreflopAction.Fold
  );
  const [preflopMatrix, setPreflopMatrix] = useState<PreflopAction[][]>(
    createPreflopActionMatrix()
  );
  const [checkSolution, setCheckSolution] = useState<boolean | undefined>(false);

  const referenceChart = RFI_CHARTS[selectedPosition];
  const possibleActions = _.uniq(_.flatten(referenceChart || []));

  const handleReset = () => {
    setPreflopMatrix(createPreflopActionMatrix());
  };

  return (
    <Center mih="100vh">
      <Group align="flex-start">
        <Stack>
          <Select
            label="Position"
            data={POSITIONS}
            defaultValue="BN"
            onChange={setSelectedPosition}
          />
          {possibleActions.map((action) => (
            <PreflopActionCard
              action={action}
              selected={selectedPreflopAction === action}
              onClick={() => setSelectedPreflopAction(action)}
            />
          ))}
          {referenceChart && (
            <Switch
              label="Show solution"
              checked={checkSolution}
              onChange={(e) => setCheckSolution(e.target.checked)}
            />
          )}
          <Button onClick={handleReset} variant="outline">
            Reset
          </Button>
        </Stack>
        <PreflopChart
          preflopMatrix={preflopMatrix}
          onChange={setPreflopMatrix}
          selectedPreflopAction={selectedPreflopAction || PreflopAction.Fold}
          solution={checkSolution ? referenceChart : undefined}
        />
      </Group>
    </Center>
  );
}
