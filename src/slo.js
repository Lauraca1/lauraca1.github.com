import "./App.css";

const slo = () => {
  return (
    <div className="App">
      <div className="body">
        <h1>SLO Recs</h1>
        <h2>
          Here is a map that I made that includes lots of slocal approved spots.
        </h2>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1p5yJ0ly1ZvtkRx3MuvTlxn3dwJro46s&ehbc=2E312F&noprof=1" width="800" height="480"></iframe>
      </div>
      <header className="footer">
        <h3>© All Rights Reserved</h3>
      </header>
    </div>
  );
};

export default slo;
