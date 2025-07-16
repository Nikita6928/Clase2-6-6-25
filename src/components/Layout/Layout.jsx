import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Layout.css"
<Layout></Layout>

const Layout = (props) => {
    return (
        <>
            <Header />

            <div className="content-layout">
                {props.children}
            </div>
            <Footer />
        </>
    )
}
export default Layout