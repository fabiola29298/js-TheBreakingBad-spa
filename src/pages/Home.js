const Home = async () => {

  const view = `
  <h2> Home </h2>
    <div class="Characters">

        <article class="Character-item">
          <a href="#/characters/1/">
            <img src="image.jpg" alt="iamge">
            <h3>character</h3>
          </a>
        </article>
    </div>
  <div class="Episodes">

      <article class="Character-item">
        <a href="#/episodes/1/">
          <img src="image.jpg" alt="iamge">
          <h3>episodes</h3>
        </a>
      </article>
  </div>
  `;
  return view;
};

export default Home;