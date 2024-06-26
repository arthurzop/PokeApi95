import styled from 'styled-components'
import * as R from 'react95'

export const StyledWindow = styled(R.Window)`
    position: "absolute";
    width: 'fit-content';
    height: 'fit-content';
    user-select: "text";
    z-index: 3;
    position: absolute;

`

export const GroupBox = styled(R.GroupBox)`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: fit-content;
    align-items: center;

`

export const Tab = styled(R.Tab)`
    cursor: pointer;
    width: fit-content;
    height: fit-content;


`