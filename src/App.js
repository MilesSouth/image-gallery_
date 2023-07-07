import Card from "./components/Card"
import data from "./helpers/data"
function App() {
  return (
    <div className="App">
      <h1>Albums</h1>
      {data.map((item) => {
        return <Card image={item.src.large} photographer={item.photographer} />
      })}
    </div>
  )
}

export default App


