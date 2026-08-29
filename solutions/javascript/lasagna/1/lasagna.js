const PREPARATION_MINUTES_PER_LAYER = 2;

export const EXPECTED_MINUTES_IN_OVEN = 40;

export let actualMinutesInOven;

export function remainingMinutesInOven(actualMinutesInOven) {
  
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;  
}

export function preparationTimeInMinutes(numberOfLayers) {
  return 2 * numberOfLayers;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (numberOfLayers * 2) + actualMinutesInOven;
}
