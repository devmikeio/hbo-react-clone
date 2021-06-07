import { useStateContext } from "../../HBOProvider";

const SearchModal = (props) => {
  const globalState = useStateContext();
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index < digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div
      className={`search-modal ${
        globalState.searchOpen ? "search-modal--active" : ""
      }`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="search for a title"
          value=""
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpenAction(!globalState.searchOpen)}
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <h3 className="search-modal__title">Popular Searches</h3>
      <div className="search-modal__thumbnails">
        {loopComp(
          <div className="search-modal__thumbnail">
            <img src="https://www.denofgeek.com/wp-content/uploads/2020/07/Daredevil-1.jpg?resize=768%2C432" />
            <div className="search-modal__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default SearchModal;
