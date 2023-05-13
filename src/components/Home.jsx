import AllCategory from './AllCategory'


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
