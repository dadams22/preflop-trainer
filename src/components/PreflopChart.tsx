import {SimpleGrid} from "@mantine/core";

interface ComponentProps {}

const CARD_RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

export default function PreflopChart({}: ComponentProps) {
    return (
        <SimpleGrid w={700} h={700} cols={CARD_RANKS.length}>
            {CARD_RANKS.map((rank1, row) => (
                CARD_RANKS.map((rank2, col) => {
                    const label = row === col ? (
                        `${rank1}${rank2}`
                    ) : row > col ? (
                        `${rank2}${rank1}o`
                    ) : `${rank1}${rank2}s`;

                    return (
                        <div>{label}</div>
                    );
                })
            ))}
        </SimpleGrid>
    );
}