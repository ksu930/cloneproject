import styled from "styled-components"
import Header from "./Header"

const Layout = ({children}) => {
    return(
        <St1WrapList>
            <Header/>
            {children}
        </St1WrapList>
    )
}

export default Layout

const St1WrapList = styled.div`
    min-width: 1080px;
    position: relative;
    min-height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    display: block;
    line-height: 1.5;
`