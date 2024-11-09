import { SvgIcon } from "@mui/material";

import FishSVG from '../fish-svgrepo-com.svg';

const FishIcon = (props) => {
    return (
        <SvgIcon
            {...props}
        >
            <svg fill={props.color} width="800px" height="800px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><path d="M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"/></svg>
        </SvgIcon>
    )
}
export default FishIcon;

