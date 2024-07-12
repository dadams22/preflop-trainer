import { Paper } from '@mantine/core';
import { PREFLOP_ACTION_COLORS, PREFLOP_ACTION_LABELS, PreflopAction } from '@/consts';

interface ComponentProps {
  action: PreflopAction;
  selected: boolean;
  onClick: () => void;
}

export default function PreflopActionCard({ action, selected, onClick }: ComponentProps) {
  return (
    <Paper
      p="lg"
      fw="bold"
      onClick={onClick}
      bg={selected ? PREFLOP_ACTION_COLORS[action] : undefined}
      style={{ cursor: 'pointer' }}
    >
      {PREFLOP_ACTION_LABELS[action]}
    </Paper>
  );
}
