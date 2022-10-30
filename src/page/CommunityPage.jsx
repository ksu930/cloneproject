import styled from "styled-components"
import CommunityLayout from "../components/community/CommunityLayout"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Layout from "../components/Layout"

const CommunityPage=() =>{
    return(
            <Layout>
                <CommunityLayout >
                    <StContent>zzzzzzzzzzzzzzzzzzzfsfsfsdfsfzzzzzzzzzzzz</StContent>
                </CommunityLayout>
                <Footer/>   
            </Layout>

    )
}
export default CommunityPage

const StContent = styled.div`
    float: right;
    box-sizing: border-box;
    width: 728px;
    height: 1200px;
`
