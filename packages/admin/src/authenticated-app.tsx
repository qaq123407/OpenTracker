import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Breadcrumb, Button, Layout, Menu, Typography, theme } from 'antd'
import {
  UserOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  LineChartOutlined,
  TabletOutlined,
  ContactsOutlined,
  CalendarOutlined,
  TeamOutlined,
  AppstoreAddOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '@/utils/token'

const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography

type MenuItem = Required<MenuProps>['items'][number]

const navItems: MenuItem[] = [
  {
    key: 'nav1',
    icon: <CalendarOutlined />,
    label: '日期',
    children: [
      { key: 'nav11', label: 'option 1' },
      { key: 'nav12', label: 'option 2' },
    ],
  },
  {
    key: 'nav2',
    icon: <TeamOutlined />,
    label: '所有的访问',
    children: [
      { key: 'nav21', label: 'option 1' },
      { key: 'nav22', label: 'option 2' },
    ],
  },
  {
    key: 'nav3',
    icon: <AppstoreAddOutlined />,
    label: '报表面板',
    children: [
      { key: 'nav31', label: 'option 1' },
      { key: 'nav32', label: 'option 2' },
    ],
  },
]

const subItems: MenuItem[] = [
  {
    key: 'sub1',
    icon: <AppstoreOutlined />,
    label: '报表面板',
    children: [
      { key: 'sub11', label: 'option 1' },
      { key: 'sub12', label: 'option 2' },
    ],
  },
  {
    key: 'sub2',
    icon: <UserOutlined />,
    label: '访客分析',
    children: [
      { key: 'sub21', label: 'option 1' },
      { key: 'sub22', label: 'option 2' },
    ],
  },
  {
    key: 'sub3',
    icon: <SolutionOutlined />,
    label: '行为分析',
    children: [
      { key: 'sub31', label: 'option 1' },
      { key: 'sub32', label: 'option 2' },
    ],
  },
  {
    key: 'sub4',
    icon: <ContactsOutlined />,
    label: '获客分析',
    children: [
      { key: 'sub41', label: 'option 1' },
      { key: 'sub42', label: 'option 2' },
    ],
  },
  {
    key: 'sub5',
    icon: <CloseCircleOutlined />,
    label: '错误分析',
    children: [
      { key: 'sub51', label: 'option 1' },
      { key: 'sub52', label: 'option 2' },
    ],
  },
  {
    key: 'sub6',
    icon: <LineChartOutlined />,
    label: '性能分析',
    children: [
      { key: 'sub61', label: 'option 1' },
      { key: 'sub62', label: 'option 2' },
    ],
  },
  {
    key: 'sub7',
    icon: <TabletOutlined />,
    label: '白屏监控',
    children: [
      { key: 'sub71', label: 'option 1' },
      { key: 'sub72', label: 'option 2' },
    ],
  },
]

const AuthenticatedApp: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('sub1')
  const [currentNav, setCurrentNav] = useState('nav3')
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const handleLogout = () => {
    removeToken()
    navigate('/')
  }

  const onMenuClick: MenuProps['onClick'] = (e) => {
    setCurrentKey(e.key)
  }

  const onNavClick: MenuProps['onClick'] = (e) => {
    setCurrentNav(e.key)
  }

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={onNavClick}
          selectedKeys={[currentNav]}
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Button type="default" danger onClick={handleLogout}>
          退出登录
        </Button>
      </Header>
      <div style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              onClick={onMenuClick}
              selectedKeys={[currentKey]}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={subItems}
            />
          </Sider>
          <Content style={{ padding: '0 24px', maxHeight: 684, overflow: 'auto' }}>
            <Title level={1}>主页</Title>
            <p>欢迎使用 OpenTracker 埋点平台</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
            <p>测试滚轮</p>
          </Content>
        </Layout>
      </div>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default AuthenticatedApp
