import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'kingyqh倾力打造出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'yangtzeBI 前端源码库',
          title: 'yangtzeBI 前端源码库',
          href: 'https://github.com/ettternal/yangtze-frontend.git',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ettternal.git',
          blankTarget: true,
        },
        {
          key: 'yangtzeBI 后端源码库',
          title: 'yangtzeBI 后端源码库',
          href: 'https://github.com/ettternal/yangtzeBI-backend.git',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
