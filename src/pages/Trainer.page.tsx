import {Button, Center, Select, Stack} from "@mantine/core";
import {Position, POSITIONS} from "@/consts";
import {useState} from "react";

export default function TrainerPage() {
    const [selectedPosition, setSelectedPosition] = useState<Position | null>(Position.BN);

    return (
        <Center mih="100vh">
            <Stack>
                <Select label="Position" data={POSITIONS} value={selectedPosition} onChange={(value) => setSelectedPosition(value as (Position | null))} />
                <Button>Play</Button>
            </Stack>
        </Center>
    )
}