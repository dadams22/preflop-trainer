import {MantineColor} from "@mantine/core";

export const POSITIONS = [
    'UTG',
    'UTG+1',
    'UTG+2',
    'LJ',
    'HJ',
    'CO',
    'BN',
    'SB',
    'BB',
];

export const CARD_RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

export enum PreflopAction {
    Fold = 'FOLD',
    Call = 'CALL',
    Raise = 'RAISE',
    ThreeBetBluff = 'THREE_BET_BLUFF',
    ThreeBetValue = 'THREE_BET_VALUE',
    FourBetBluff = 'FOUR_BET_BLUFF',
    FourBetValue = 'FOUR_BET_VALUE',
}

export const PREFLOP_ACTION_COLORS: Record<PreflopAction, MantineColor> = {
    [PreflopAction.Fold]: 'dark',
    [PreflopAction.Call]: 'green',
    [PreflopAction.Raise]: 'red',
    [PreflopAction.ThreeBetBluff]: 'blue',
    [PreflopAction.ThreeBetValue]: 'red',
    [PreflopAction.FourBetBluff]: 'blue',
    [PreflopAction.FourBetValue]: 'red',
};

export const PREFLOP_ACTION_LABELS: Record<PreflopAction, string> = {
    [PreflopAction.Fold]: 'Fold',
    [PreflopAction.Call]: 'Call',
    [PreflopAction.Raise]: 'Raise',
    [PreflopAction.ThreeBetBluff]: '3Bet as Bluff',
    [PreflopAction.ThreeBetValue]: '3Bet for Value',
    [PreflopAction.FourBetBluff]: '4Bet as Bluff',
    [PreflopAction.FourBetValue]: '4Bet for Value',
};
