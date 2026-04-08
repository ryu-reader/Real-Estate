import style from "./Hero.module.css";

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.search}>
        <h2>
          Search Your Next <span>HOME</span>
        </h2>

        <div className={style.search_form}>
          <div>
            <input type="text" placeholder="Buscar" />
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />

            <div className={style.search_form_container_selects}>

              <div className={style.select}>
                <label htmlFor="">Tipo De Propiedad</label>
                <select name="" id="">
                  <option value="">Apartamento</option>
                </select>
              </div>

              <div className={style.select}>
                <label htmlFor="">Para</label>
                <select name="" id="">
                  <option value="">Comprar</option>
                </select>
              </div>


            </div>
          </div>

          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
