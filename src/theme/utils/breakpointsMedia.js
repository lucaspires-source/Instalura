import breakpoints from "../breakpoints";
import {css} from 'styled-components'

const breakpointsMedia = (cssByBreakpoints) => {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames
    .map((breakpointName) => {
      return css`
        @media screen and (min-width:${breakpoints[breakpointName]}px){
            ${cssByBreakpoints[breakpointName]}
        }
        
        `;
    })
};
export default breakpointsMedia