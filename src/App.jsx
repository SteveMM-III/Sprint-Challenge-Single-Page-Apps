import React, { useState } from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header";
import WelcomPage from './components/WelcomePage';
import CharacterList from "./components/CharacterList";


export default function App() {
  const [charList, setCharList] = useState([]);

  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomPage} />
      <Route exact path='/characters' render={ ( props ) =>
        <CharacterList { ...props } /> } />
      }
    </main>
  );
}
