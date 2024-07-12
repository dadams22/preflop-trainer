import {Select, Stack} from "@mantine/core";
import {POSITIONS, PreflopAction} from "@/consts";
import {useState} from "react";
import PreflopActionCard from "@/components/ConfigurationControls/components/PreflopActionCard";

const POSSIBLE_ACTIONS: PreflopAction[] = [
    PreflopAction.Fold,
    PreflopAction.Raise,
];

interface ComponentProps {
    selectedPreflopAction: PreflopAction;
    onSelectPreflopAction: (selectedPreflopAction: PreflopAction) => void;
}

export default function ConfigurationControls({ selectedPreflopAction, onSelectPreflopAction }: ComponentProps) {
    const handleClickPreflopActionCard = (action: PreflopAction) => () => {
        onSelectPreflopAction(action);
    };

    return (
        <Stack>
            <Select
                label="Position"
                data={POSITIONS}
                defaultValue="BN"
            />
            {POSSIBLE_ACTIONS.map((action) => (
                <PreflopActionCard
                    action={action}
                    selected={selectedPreflopAction === action}
                    onClick={handleClickPreflopActionCard(action)}
                />
            ))}
        </Stack>
    );
}