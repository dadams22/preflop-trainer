import { Box, Center, MantineColor, SimpleGrid } from '@mantine/core';
import classes from './PreflopChart.module.css';
import { useState } from 'react';
import { CARD_RANKS, PREFLOP_ACTION_COLORS, PreflopAction } from '@/consts';
import { produce } from 'immer';

function createPreflopActionMatrix(): PreflopAction[][] {
  const dimension = CARD_RANKS.length;
  const array: any[][] = new Array(dimension);
  for (let i = 0; i < dimension; i++) {
    array[i] = new Array(dimension).fill(PreflopAction.Fold);
  }
  return array;
}

interface ComponentProps {
  selectedPreflopAction: PreflopAction;
  solution?: PreflopAction[][];
}

export default function PreflopChart({ selectedPreflopAction, solution }: ComponentProps) {
  const [currentSelections, setCurrentSelections] = useState<PreflopAction[][]>(
    createPreflopActionMatrix()
  );
  const [dragging, setDragging] = useState<boolean>(false);
  console.log(JSON.stringify(solution));

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleSelectSquare = (row: number, col: number) => () => {
    setCurrentSelections(
      produce(currentSelections, (draft) => {
        draft[row][col] = selectedPreflopAction;
      })
    );
  };

  const handleMouseOver = (row: number, col: number) => () => {
    if (dragging) handleSelectSquare(row, col)();
  };

  return (
    <SimpleGrid
      w={700}
      h={700}
      cols={CARD_RANKS.length}
      spacing={0}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {CARD_RANKS.map((rank1, row) =>
        CARD_RANKS.map((rank2, col) => {
          const label =
            row === col
              ? `${rank1}${rank2}`
              : row > col
                ? `${rank2}${rank1}o`
                : `${rank1}${rank2}s`;

          const selectedAction = currentSelections[row][col];
          const color = PREFLOP_ACTION_COLORS[selectedAction];
          const correctAction = solution ? solution[row][col] : undefined;

          return (
            <Box
              onClick={handleSelectSquare(row, col)}
              onMouseOver={handleMouseOver(row, col)}
              onMouseDown={handleSelectSquare(row, col)}
              color={selectedAction !== PreflopAction.Fold ? 'white' : undefined}
              bg={color}
              p="xs"
              className={classes.square}
              bd={
                correctAction && selectedAction !== correctAction
                  ? `2px solid ${PREFLOP_ACTION_COLORS[correctAction]}.6`
                  : '2px solid gray.6'
              }
            >
              {label}
            </Box>
          );
        })
      )}
    </SimpleGrid>
  );
}
