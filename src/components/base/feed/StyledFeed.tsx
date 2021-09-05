import styled from 'styled-components'

const StyledFeed = styled('div')`
   display: flex;
   align-items: flex-start;
   gap: 1rem;
   border-radius: 5px;

   .info {
      text-align: left;
   }
   h6 {
      margin-bottom: 0.6rem;
   }
   span:nth-child(2) {
      color: gray;
      margin: 0 0.6rem;
   }
`
export default StyledFeed
