import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';


const { Sider } = Layout;



const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
      key: String(index + 1),
      icon: createElement(icon),
      label: `nav ${index + 1}`,
    }),
  );

const Sidebar = () => {
    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        
      >
        <div style={{
          color: 'white',
          textAlign: 'center',
          height: '4rem',
          padding: '15px',
          
        }}>
          <h1>Easydrop</h1>
        </div> 
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
    );
};

export default Sidebar;