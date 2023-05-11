const HavaDurumu = ({weather}) => {
    if(!weather) {
        return <p>Yükleniyor..</p>
    }
  return (
    <>
        <h3 className="p-2 text-2xl mt-5">{weather.name}</h3>
        <h4 className="p-2 text-xl">{weather.weather.map(data => data.description).join(", ")}</h4>
        <p className="p-2 text-xl">{weather.main.temp} °C</p>
        <p className="p-2 text-xl">{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </>
  )
}

export default HavaDurumu