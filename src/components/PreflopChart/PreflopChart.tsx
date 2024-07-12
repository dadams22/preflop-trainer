import {Box, Center, MantineColor, SimpleGrid} from "@mantine/core";
import classes from './PreflopChart.module.css';
import {useState} from "react";
import {CARD_RANKS, PREFLOP_ACTION_COLORS, PreflopAction} from "@/consts";
import {produce} from "immer";

interface ComponentProps {
    selectedPreflopAction: PreflopAction;
}

function createPreflopActionMatrix(): PreflopAction[][] {
    const dimension = CARD_RANKS.length;
    const array: any[][] = new Array(dimension);
    for (let i = 0; i < dimension; i++) {
        array[i] = new Array(dimension).fill(PreflopAction.Fold);
    }
    return array;
}

export default function PreflopChart({ selectedPreflopAction }: ComponentProps) {
    const [currentSelections, setCurrentSelections] = useState(createPreflopActionMatrix());
    console.log(JSON.stringify(currentSelections));

    const handleClickSquare = (row: number, col: number) => () =>  {
        setCurrentSelections(
            produce(currentSelections, (draft) => {
                draft[row][col] = selectedPreflopAction;
            })
        );
    };

    return (
        <SimpleGrid w={700} h={700} cols={CARD_RANKS.length} spacing={0}>
            {CARD_RANKS.map((rank1, row) => (
                CARD_RANKS.map((rank2, col) => {
                    const label = row === col ? (
                        `${rank1}${rank2}`
                    ) : row > col ? (
                        `${rank2}${rank1}o`
                    ) : `${rank1}${rank2}s`;

                    const selectedAction = currentSelections[row][col];
                    const color = PREFLOP_ACTION_COLORS[selectedAction];

                    return (
                        <Center
                            onClick={handleClickSquare(row, col)}
                            color={selectedAction !== PreflopAction.Fold ? 'white' : undefined}
                            bg={color} p="xs" className={classes.square}
                        >
                            {label}
                        </Center>
                    );
                })
            ))}
        </SimpleGrid>
    );
}