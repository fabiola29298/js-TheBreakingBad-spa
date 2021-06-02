const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1> <a href="/"> The Breaking Bad Web</a>
      </div>
      <div class="Header-nav">
       <a href="#/characters/"> Characters</a>
       <a href="#/episodes/"> Episodes</a>
       </div>
    </div>
  `;
  return view;
};

export default Header;