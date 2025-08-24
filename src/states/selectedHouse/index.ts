import { createReStateMethods } from '@raulpesilva/re-state';

const SELECTED_HOUSE = 'selectedHouse';

type SelectedHouse = string | null;
const initialState = null as SelectedHouse;
const methods = createReStateMethods(SELECTED_HOUSE, initialState);

export const { dispatchSelectedHouse, useSelectedHouse, useSelectedHouseSelect } = methods;
