import breakpoints from "../breakpoints";


const breakpointsMedia = (cssByBreakpoints) => {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames
    .map((breakpointName) => {
      return `
        @media screen and (min-width:${breakpoints[breakpointName]}px){
            ${cssByBreakpoints[breakpointName]}
        }
        
        `;
    })
    .join("");
};
export default breakpointsMedia