const testFetch = async () => {
  try {
    const response = await fetch('http://localhost:3000/latest');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

const App = () => {

  testFetch();

  return (
    <div>App</div>
  )
}

export default App