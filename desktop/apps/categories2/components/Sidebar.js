import React from 'react'
import styled from 'styled-components'

Sidebar.propTypes = {
  data: React.PropTypes.array
}

const Ul = styled.ul`
  padding-top: 2em
`

const Column = styled.div`
  flex: 1
  font-size: 14px
  color: #333
  padding: 2em 1em
  text-transform: uppercase
`

function Sidebar(props){
  return (
    <Column>
      <Ul>
        {
          props.data.map((value) => {
            return (
              <li key={`gene-${value.id}`}>
                <a href={`#${value.id}`}>{value.name}</a>
              </li>
            )
          })
        }
      </Ul>
    </Column>
  )
}

export default Sidebar