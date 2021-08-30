import styled from 'styled-components'

export default styled('div')`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
