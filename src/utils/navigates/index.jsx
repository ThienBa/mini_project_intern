import { useNavigate } from 'react-router-dom';

const navigateCustom = (url) => {
    const navigate = useNavigate();

    return navigate(url);
}

export default navigateCustom