import styled from 'styled-components'

import config from '@/config'

const InputMsg = styled('textarea').attrs((props) => ({
   rows: 2,
   maxLength: +config.post.maxLength,
   autoFocus: true,
   placeholder: 'type a message',
}))`
   width: 100%;
   padding: 1rem;
   border-radius: var(--surface_br, 9px);
   resize: none;
   &:focus {
      outline: none;
      color: rgba(100, 100, 100, 1);
   }
`

export default InputMsg
