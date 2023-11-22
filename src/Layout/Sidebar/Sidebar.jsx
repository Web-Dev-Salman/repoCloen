import { Button, Layout, theme } from 'antd';
import React, { useState } from 'react';
import logo from '../../assets/Logo/Instagram_logo 1.svg'
import MenuList from '../../components/Menu/MenuList';
import { Header } from 'antd/es/layout/layout';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
const {Sider} = Layout;
const Sidebar = () => {

    const [ collapsed, setCollapsed] = useState(false);
 
    return (
        <div>
            <Layout >
                <Sider collapsed={collapsed} collapsible trigger={null} className='sidebar h-screen p-3'> 
                    <img src={logo} alt=" Sigma Health Logo" />
                    <MenuList/>
                </Sider>
                <Layout>
                    <Header style={{padding: 0}}>
                        <Button type='text' className='toggle' 
                        onClick={()=> setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
                    </Header>
                </Layout>
            </Layout>
        </div>
    );
};

export default Sidebar;