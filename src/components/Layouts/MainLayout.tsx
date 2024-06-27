import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Content, Footer, Header } from "antd/es/layout/layout";
import SummaryHeader from "../SummaryCart/SummaryHeader";


const MainLayout = () => {
    
 
    return (
        <Layout style={{height: '100vh'}}>
        <Sidebar></Sidebar>
        <Layout>
          <Header></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                
              }}
            >
                        {/* content here */}
                        <SummaryHeader></SummaryHeader>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            EasyDrop ©{new Date().getFullYear()} Created by Shakil
          </Footer>
        </Layout>
      </Layout>
    );
};

export default MainLayout;