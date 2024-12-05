```javascript
import { BrowserRouter, Routes, Route, useMemo } from 'react-router-dom';

function App() {
  const routes = useMemo(() => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* ... other routes ... */}
    </Routes>
  ), []);

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
export default App;
```