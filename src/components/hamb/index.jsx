<div className="App">
<h1 onMouseEnter={() => setShowMenu(true)}>prueba desp</h1>
{showMenu && (
  <div className="menu">
    <ul onMouseLeave={() => setShowMenu(false)} onClick={() => setShowMenu(true)}>
      <li> <a href="#"> gasta </a></li>
      <li><a href="#"> gasta </a></li>
      <li><a href="#"> gasta </a></li>
    </ul>
  </div>
)}
</div>
