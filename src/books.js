import "./App.css";
import behave from './images/behave.jpg'

const Books = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>Books</h1>
        <h2>
          Books I have read or am currently reading:
        </h2>
        <div >
        <div className="image">
          <img src={behave} alt="behave" />
          <h3>text</h3>
          </div>
          <div className="image">
          <img src={behave} alt="behave" />
          <h3>text</h3>
          </div>
          </div>
      </div>
      <header className="footer">
        <h3>© All Rights Reserved</h3>
      </header>
    </div>
  );
};

export default Books;
