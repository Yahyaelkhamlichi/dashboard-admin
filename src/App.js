import React from 'react';
import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './Home/Home';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from './Theme';

import Team from "../src/Pages/Team"
import Contact from "../src/Pages/Contact"
import Calendar from "../src/Pages/Calendar"
import Form from "../src/Pages/Form"
import Invoices from "../src/Pages/Invoices"
import FAQ from "../src/Pages/Faq"
import Geography from "../src/Pages/Geography"
import BarChart from "../src/Pages/Bar"
import Line from "../src/Pages/Line"
import Pie from "../src/Pages/Pie"


function App() {
  const [mode, setMode] = React.useState('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
   <>
     <ThemeProvider theme={theme}>

   <Routes>

   <Route path="/" element={<><Home setMode={setMode}/></>}/>
   <Route path="/team" element={<Team  setMode={setMode} />}/>
   

<Route path="contacts" element={<Contact setMode={setMode}/>} />
<Route path="invoices" element={<Invoices setMode={setMode} />} />
<Route path="form" element={<Form  setMode={setMode}/>} />
<Route path="calendar" element={<Calendar setMode={setMode} />} />
<Route path="faq" element={<FAQ  setMode={setMode} />} />
<Route path="bar" element={<BarChart setMode={setMode} />} />
<Route path="pie" element={<Pie setMode={setMode} />} />
<Route path="line" element={<Line setMode={setMode} />} />
<Route path="geography" element={<Geography  setMode={setMode}/>} />
   
   </Routes>
   </ThemeProvider>
   </>
  );
}

export default App;
