/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MyContext } from "../../pages/home_page/home_page";
import NewReleaseDetails from "../../molecules/new_release/new_release_details";
import "./new_release.style.css";

const NewRelease = ({searchKey, setSearchKey}) => {
  const { books } = useContext(MyContext);

  const handleInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="new-release">
      <h1 className="h1-text">New Release Books</h1>
      <p>1000+ books are published by different authors every day.</p>
      <NewReleaseDetails
        searchKey={searchKey}
        handleInputChange={handleInputChange}
        books={books}
      ></NewReleaseDetails>
    </div>
  );
};

export default NewRelease;
