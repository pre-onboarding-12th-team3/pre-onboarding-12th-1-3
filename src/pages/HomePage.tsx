import { Button } from '@/components/common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Button onClick={() => navigate('/signin')}>로그인</Button>
      <Button onClick={() => navigate('/signup')}>회원가입</Button>
    </Layout>
  );
};

export default HomePage;
const Layout = styled.div`
  display: flex;
`;
