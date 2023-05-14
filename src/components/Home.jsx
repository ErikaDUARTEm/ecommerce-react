import AllCategory from './AllCategory'
import PropTypes from 'prop-types';



export default function Home({ onSelectAllCategories }) {
    const handleSelectAllCategories = (value) => {
      onSelectAllCategories(value);
    };
  
    return (
      <>
       
        <AllCategory onSelectAllCategories={handleSelectAllCategories} />
      </>
    );
  }
  Home.propTypes = {
    onSelectAllCategories: PropTypes.func.isRequired
  };