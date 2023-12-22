import { useNavigate } from 'react-router-dom';

const useBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);
  };

  return goBack;
};

export default useBackButton;
